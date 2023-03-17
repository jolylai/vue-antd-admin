<template>
  <a-layout-header class="layout-header">
    <a-space class="h-full">
      <img class="w-7 h-7" src="@/assets/vue.svg" />
      <h2 class="text-white text-lg m-0">Vue Antd Admin</h2>
    </a-space>

    <div>
      <a-dropdown>
        <a-space class="ant-dropdown-link" @click.prevent>
          <a-avatar
            src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/healthy-beef-burger.jpg"
          />
          <span>Tom</span>
        </a-space>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a-space>
                <UserOutlined />
                <span>个人中心</span>
              </a-space>
            </a-menu-item>
            <a-menu-item>
              <a-space>
                <SettingOutlined />
                <span>个人设置</span>
              </a-space>
            </a-menu-item>
            <a-menu-item>
              <a-space>
                <LogoutOutlined />
                <span>退出登录</span>
              </a-space>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  color: #fff;
  padding: 0 16px;
}
</style>
