<template>
  <a-layout-sider
    class="layout-sider"
    collapsible
    :collapsed="getCollapsed"
    :collapsedWidth="48"
  >
    <template #trigger>
      <div class="layout-trigger">
        <LayoutTrigger></LayoutTrigger>
      </div>
    </template>
    <a-menu theme="light" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { useMenuSetting } from "@/hooks/useMenuSetting";

import LayoutTrigger from "../trigger/index.vue";

const { getCollapsed } = useMenuSetting();
</script>

<style scoped>
.layout-sider {
  background-color: #fff;
}

.layout-trigger {
  padding: 0 16px;
  text-align: left;
  color: black;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
</style>
