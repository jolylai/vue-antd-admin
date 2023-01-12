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
          <template #title>系统管理</template>
          <router-link to="/system/job">
            <a-menu-item key="5">岗位管理</a-menu-item>
          </router-link>
          <router-link to="/system/menu">
            <a-menu-item key="6">菜单管理</a-menu-item>
          </router-link>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { MailOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
console.log("router: ", router.getRoutes());

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
