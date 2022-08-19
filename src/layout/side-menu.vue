<template>
  <div class="flex flex-col h-full">
    <div class="flex-grow">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="light"
      >
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>Navigation One</template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { MailOutlined } from "@ant-design/icons-vue";

const state = reactive({
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});

watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
</script>
