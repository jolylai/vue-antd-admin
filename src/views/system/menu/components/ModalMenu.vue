<template>
  <a-modal
    :title="title"
    :visible="visible"
    :width="width"
    @ok="onOk"
    @cancel="onCancel"
  >
    <a-form
      layout="horizontal"
      :labelCol="{ span: 4 }"
      :wrapperCol="{ span: 18 }"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="上级菜单" v-bind="validateInfos.parentId">
            <MenuTreeSelect v-model:value="formRef.parentId" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="菜单类型" v-bind="validateInfos.type">
            <a-radio-group v-model:value="formRef.type">
              <a-radio :value="0">目录</a-radio>
              <a-radio :value="1">菜单</a-radio>
              <a-radio :value="3">按钮</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="菜单名称" v-bind="validateInfos.name">
            <a-input v-model:value="formRef.name" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="显示排序" v-bind="validateInfos.order">
            <a-input-number :min="1" v-model:value="formRef.order" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item v-bind="validateInfos.path">
            <template #label>
              <form-label
                tooltip="访问的路由地址，如：`user`，如外网地址需内链访问则以`http(s)://`开头"
              >
                路由地址
              </form-label>
            </template>
            <a-input v-model:value="formRef.path" />
          </a-form-item>
        </a-col>

        <a-col :span="24" v-if="formRef.type === MenuType.Menu">
          <a-form-item v-bind="validateInfos.permissions">
            <template #label>
              <form-label
                tooltip="控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasPermi('system:user:list')`)"
              >
                权限字符
              </form-label>
            </template>
            <a-input v-model:value="formRef.permissions" />
          </a-form-item>
        </a-col>
        <a-col :span="24" v-if="formRef.type === MenuType.Menu">
          <a-form-item v-bind="validateInfos.query">
            <template #label>
              <form-label>
                <template #tooltip>
                  <span
                    >访问路由的默认传递参数，如：{ "id": 1, "name": "ry"}</span
                  >
                </template>
                路由参数
              </form-label>
            </template>
            <a-input v-model:value="formRef.query" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 16 }"
            v-bind="validateInfos.isLink"
          >
            <template #label>
              <form-label tooltip="选择是外链则路由地址需要以`http(s)://`开头">
                是否外链
              </form-label>
            </template>
            <a-radio-group v-model:value="formRef.isLink">
              <a-radio :value="0">否</a-radio>
              <a-radio :value="1">是</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 16 }"
            v-bind="validateInfos.visible"
          >
            <template #label>
              <form-label
                tooltip="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问"
              >
                显示状态
              </form-label>
            </template>
            <a-radio-group v-model:value="formRef.visible">
              <a-radio :value="1">显示</a-radio>
              <a-radio :value="0">隐藏</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 16 }"
            v-bind="validateInfos.status"
          >
            <template #label>
              <form-label
                tooltip="选择停用则路由将不会出现在侧边栏，也不能被访问"
              >
                菜单状态
              </form-label>
            </template>
            <a-radio-group v-model:value="formRef.status">
              <a-radio :value="1">正常</a-radio>
              <a-radio :value="0">停用</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12" v-if="formRef.type === MenuType.Menu">
          <a-form-item
            :labelCol="{ span: 8 }"
            :wrapperCol="{ span: 16 }"
            v-bind="validateInfos.isCache"
          >
            <template #label>
              <form-label
                tooltip="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致"
              >
                是否缓存
              </form-label>
            </template>
            <a-radio-group v-model:value="formRef.isCache">
              <a-radio :value="1">缓存</a-radio>
              <a-radio :value="0">不缓存</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { useRequest } from "usevhooks";
import { MenuType } from "./ModalMenu";
import { saveMenu } from "@/api/system";
import MenuTreeSelect from "./MenuTreeSelect.vue";

export type ModalMenuProps = {
  visible: boolean;
  data?: object;
  title?: string;
  width?: number;
};

const props = withDefaults(defineProps<ModalMenuProps>(), {
  visible: false,
  title: "菜单",
  width: 680,
});

const emit = defineEmits(["confirm", "update:visible"]);

const formRef = reactive({
  parentId: 1,
  name: "用户管理",
  path: "user",
  type: 0,
  icon: "",
  order: 1,
  isLink: 0,
  visible: 1,
  status: 1,
  query: "",
  permissions: "",
  isCache: 1,
});

const rules = reactive({
  name: [{ required: true, message: "请输入名称" }],
  order: [{ required: true, message: "请输入显示排序" }],
  path: [{ required: true, message: "请输入路由地址" }],
});

const { validate, validateInfos, resetFields } = useForm(formRef, rules);

watch(
  () => props.visible,
  (visible, prevVisible) => {
    if (visible && !prevVisible) {
      Object.assign(formRef, props.data);
    }

    if (!visible && prevVisible) {
      resetFields();
    }
  }
);

const { run } = useRequest(saveMenu, {
  manual: true,
});

const onOk = async () => {
  await validate();
  await run(formRef);
  emit("confirm", { ...formRef });
};

const onCancel = () => {
  emit("update:visible", false);
};
</script>
