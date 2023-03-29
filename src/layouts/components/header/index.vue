<template>
  <div class="flex items-center bg-white h-12 px-4">
    <div class="flex-1"></div>
    <a-dropdown>
      <div class="h-12 flex items-center space-x-2" @click.prevent>
        <a-avatar
          src="https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/healthy-beef-burger.jpg"
        />
        <div>Tom</div>
      </div>
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
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped></style>
