<template>
  <a-menu
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    @click="onClickMenuItem"
  >
    <template v-for="item in menus" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.key" :option="item" />
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { RouteRecordRaw, useRouter } from "vue-router";
import { PieChartOutlined } from "@ant-design/icons-vue";

import SubMenu from "./sub-menu.vue";
import { asyncRoutes } from "@/router";
import { mapTree } from "@/utils";

export type MenuOption = {
  key: string;
  title: string;
  icon: string;
  children?: MenuOption[];
};

const route = useRoute();
const router = useRouter();
console.log("route: ", route);

const generateMenu = (routes: RouteRecordRaw[]): MenuOption[] => {
  const conversion = (route: RouteRecordRaw): MenuOption => {
    return {
      key: route.name as string,
      title: route.meta?.title as string,
      icon: route.meta?.icon as string,
    };
  };

  return mapTree<RouteRecordRaw, MenuOption>(routes, { conversion });
};

const menus = generateMenu(asyncRoutes);
console.log("asyncRoutes: ", asyncRoutes);

const getSelectedKeys = () => {
  const { matched } = route;
  console.log("matched: ", matched);

  if (!matched || matched.length) return [];

  return matched.map((item) => item.name);
};

const state = reactive({
  selectedKeys: getSelectedKeys(),
});

const collapsed = ref<boolean>(false);

const openKeys = ref(["2"]);
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const onClickMenuItem = ({ key }: { key: string }) => {
  console.log("key: ", key);
  if (/http(s)?:/.test(key)) {
  } else {
    router.push({ name: key });
  }
};
</script>
