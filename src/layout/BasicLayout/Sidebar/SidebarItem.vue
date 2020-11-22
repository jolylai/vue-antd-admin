<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
      <span>
        <span>{{ menuInfo.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sidebar-item :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    menuInfo: { type: Object, required: true }
  }
}
</script>
