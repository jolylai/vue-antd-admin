<template>
  <div>
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    const collapsed = ref(false)

    return {
      collapsed
    }
  }
}
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
