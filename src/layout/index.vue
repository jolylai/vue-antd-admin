<template>
  <a-layout>
    <a-layout-header class="header">
      <nav-bar></nav-bar>
    </a-layout-header>

    <a-layout class="main">
      <a-layout-sider width="200" style="background: #fff">
        <side-menu></side-menu>
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
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import NavBar from "./nav-bar.vue";
import SideMenu from "./side-menu.vue";
</script>

<style scoped>
.header {
  height: 48px;
}

.main {
  height: calc(100vh - 48px);
}
</style>
