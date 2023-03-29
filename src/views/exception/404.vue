<template>
  <a-result status="404" title="404" sub-title="您访问的页面不存在！">
    <template #extra>
      <a-button type="primary" @click="goHome">返回主页</a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<style lang="less" scoped>
.page-container {
  width: 100%;
  border-radius: 4px;
  padding: 50px 0;
  height: 100vh;

  .text-center {
    h1 {
      color: #666;
      padding: 20px 0;
    }
  }

  img {
    width: 350px;
    margin: 0 auto;
  }
}
</style>
