<template>
  <a-sub-menu :key="option.key">
    <template #icon><MailOutlined /></template>
    <template #title>{{ option.title }}</template>
    <template v-for="item in option.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :option="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts" setup>
import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
import { MenuOption } from "./index.vue";

type SubMenuProps = {
  option: MenuOption;
};

defineProps<SubMenuProps>();
</script>

<script lang="ts">
export default {
  name: "SubMenu",
};
</script>
