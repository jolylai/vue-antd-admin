<template>
  <modal-menu
    v-model:visible="menuModalState.visible"
    :data="menuModalState.data"
    @confirm="onMenuModalOk"
    @cancel="onMenuModalCancel"
  />

  <div>
    <!-- <a-button type="primary" @click="onAdd()">新增</a-button> -->
  </div>
  <a-table
    row-key="id"
    :dataSource="dataSource"
    :columns="columns"
    @expand="onTableExpand"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <a>
          {{ record.status }}
        </a>
      </template>

      <template v-else-if="column.key === 'action'">
        <a-space>
          <!-- <a @click="onAdd(record)">新增</a> -->
          <a @click="onEdit(record)">修改</a>
          <a @click="onDelete(record)">删除</a>
        </a-space>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { deleteMenu, queryMenu } from "@/api/system";
import { columns, Menu } from "./index";

import ModalMenu from "./components/ModalMenu.vue";
import { useRequest } from "usevhooks";

const dataSource = ref();

const queryRequest = useRequest(queryMenu, {
  manual: true,
});

onMounted(async () => {
  const menuList = await queryRequest.runAsync({ parentId: 0 });
  dataSource.value = menuList.map((menu: Menu) =>
    Object.assign(menu, { children: [] })
  );
});

const onTableExpand = async (expand: boolean, record: Menu) => {
  console.log("expand, record: ", expand, record);
  const menuList = await queryRequest.runAsync({ parentId: record.id });

  record.children = menuList;
  console.log("menuList: ", menuList);
};

const menuModalState = reactive({
  visible: false,
  data: {},
});

const onMenuModalOk = () => {
  menuModalState.visible = false;
};

const onMenuModalCancel = () => {
  menuModalState.visible = false;
};

// const onAdd = ({ parentId }: Menu) => {
//   menuModalState.data = { parentId };
//   menuModalState.visible = true;
// };

const onEdit = (record: Menu) => {
  menuModalState.data = record;
  menuModalState.visible = true;
};

const deleteRequest = useRequest(deleteMenu, {
  manual: true,
});

const onDelete = async ({ id }: Menu) => {
  await deleteRequest.runAsync(id);
  dataSource.value = await queryRequest.runAsync();
};
</script>
