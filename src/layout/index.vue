<template>
  <a-layout>
    <a-layout-header class="header">
      <nav-bar></nav-bar>
    </a-layout-header>

    <a-layout class="main">
      <a-layout-sider
        v-model:collapsed="collapsed"
        collapsible
        :collapsedWidth="47"
        :width="200"
        theme="light"
      >
        <side-menu></side-menu>
        <template #trigger>
          <div class="text-left px-4 border-t border-gray-200">
            <MenuFoldOutlined v-if="collapsed" />
            <MenuUnfoldOutlined v-else />
          </div>
        </template>
      </a-layout-sider>

      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";

import NavBar from "./nav-bar.vue";
import SideMenu from "./side-menu.vue";

const collapsed = ref<boolean>(false);

const toggleCollapsed = () => {
  collapsed.value = !collapsed;
};
</script>

<style scoped>
.header {
  height: 48px;
}

.main {
  height: calc(100vh - 48px);
}
</style>
