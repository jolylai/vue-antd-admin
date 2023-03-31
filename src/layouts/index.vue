<template>
  <a-layout>
    <Sider></Sider>
    <a-layout>
      <Header />
      <a-layout-content>
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Header from "./components/header/index.vue";
import Sider from "./components/sider/index.vue";
import Trigger from "./components/trigger/index.vue";
import Content from "./components/content/index.vue";
// import LayoutContent from "./default/content/index.vue";

type LayoutProps = {
  fixSiderbar?: boolean;
};

defineProps<LayoutProps>();
</script>

<style scoped></style>
