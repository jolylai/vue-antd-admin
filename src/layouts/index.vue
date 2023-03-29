<template>
  <a-layout class="default-layout">
    <LayoutHeader></LayoutHeader>
    <a-layout>
      <LayoutSider></LayoutSider>
      <LayoutContent></LayoutContent>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import LayoutHeader from "./default/header/index.vue";
import LayoutSider from "./default/sider/index.vue";
import LayoutContent from "./default/content/index.vue";
</script>

<style scoped>
.default-layout {
  min-height: 100%;
  /* display: flex;
  width: 100%;
  flex-direction: column; */
}
</style>
