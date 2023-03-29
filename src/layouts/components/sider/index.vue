<template>
  <div style="width: 208px; flex: 0 0 208px"></div>
  <a-layout-sider
    class="sider"
    collapsible
    :width="208"
    :collapsed="getCollapsed"
    :collapsedWidth="48"
  >
    <Logo />
    <Menu />
    <template #trigger>
      <div class="layout-trigger">
        <LayoutTrigger></LayoutTrigger>
      </div>
    </template>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { useMenuSetting } from "@/hooks/useMenuSetting";

import LayoutTrigger from "../trigger/index.vue";
import Menu from "../menu/index.vue";
import Logo from "../logo/index.vue";

const { getCollapsed } = useMenuSetting();
</script>

<style scoped>
.sider {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}

.layout-trigger {
  padding: 0 16px;
  text-align: left;
  color: black;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
</style>
