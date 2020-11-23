<template>
  <a-layout class="layout-basic">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <navbar></navbar>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  },
  setup() {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="less" scoped>
.layout-basic {
  min-height: 100vh;
}

.ant-layout-header {
  background: #fff;
  padding: 0;
}

.ant-layout-content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
