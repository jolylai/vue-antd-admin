<template>
  <div class="flex flex-col items-center py-8">
    <div>
      <div class="flex items-center justify-center">
        <img src="@/assets/vue.svg" />
        <h2 class="inline-block my-0 ml-2 text-xl">Ant Design</h2>
      </div>
      <div class="mt-3 mb-6 text-slate-400">
        Ant Design 是西湖区最具影响力的 Web 设计规范
      </div>
    </div>

    <a-form class="w-80 m-auto">
      <a-tabs centered v-model:activeKey="formRef.type">
        <!-- 账号密码登录 -->
        <a-tab-pane key="account" tab="账号密码登录">
          <a-form-item v-bind="validateInfos.username">
            <a-input
              v-model:value="formRef.username"
              size="large"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input
              v-model:value="formRef.password"
              size="large"
              type="password"
              placeholder="请输入密码"
            >
              <template #prefix>
                <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <div class="flex justify-between">
              <a-checkbox>自动登录</a-checkbox>
              <a>忘记密码</a>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              block
              size="large"
              :loading="loading"
              @click="onLogin"
            >
              登录
            </a-button>
          </a-form-item>
        </a-tab-pane>

        <!-- 手机号登录 -->
        <a-tab-pane key="mobile" tab="手机号登录">
          <a-form-item>
            <a-input
              v-model:value="formRef.mobile"
              size="large"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <MobileOutlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <div class="flex">
              <a-input
                class="flex-1 mr-2"
                size="large"
                v-model:value="formRef.captcha"
                placeholder="请输入验证码"
              >
                <template #prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
              <CountdownButton size="large">获取验证码</CountdownButton>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              block
              size="large"
              :loading="loading"
              @click="onLogin"
            >
              登录
            </a-button>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
} from "@ant-design/icons-vue";

import CountdownButton from "@/components/CountdownButton.vue";
import { LoginDto } from "@/api/user";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const userStore = useUserStore();

const formRef = reactive({
  type: "account",
  username: "xixi",
  password: "xixi",
  mobile: "",
  captcha: "",
});

const rules = reactive({
  username: [{ required: true, message: "请输入用户名" }],
  password: [{ required: true, message: "请输入密码" }],
});

const { validate, validateInfos } = useForm(formRef, rules);

const loading = ref<boolean>(false);

const onLogin = async () => {
  try {
    loading.value = true;
    await validate();

    const { type, username, password, captcha, mobile } = formRef;

    const submitData = { type };

    if (type === "account") {
      Object.assign(submitData, { username, password });
    }

    if (type === "mobile") {
      Object.assign(submitData, { mobile, captcha });
    }

    await userStore.login(submitData as LoginDto);

    // todo
    router.push({
      path: "/system/menu",
    });
  } catch (error) {
    console.log("error: ", error);
  } finally {
    loading.value = false;
  }
};
</script>
