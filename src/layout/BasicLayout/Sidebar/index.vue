<template>
  <a-menu
    :default-selected-keys="['1']"
    :default-open-keys="['2']"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in list">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <span>{{ item.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sidebar-item :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-menu>
</template>
<script>
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  setup() {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1'
        },
        {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [{ key: '2.1.1', title: 'Option 2.1.1' }]
            }
          ]
        }
      ]
    }
  }
}
</script>
