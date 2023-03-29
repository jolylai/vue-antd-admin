<template>
  <a-result status="500" title="404" sub-title="抱歉，服务器出错了">
    <template #extra>
      <a-button type="primary" @click="goHome">回到首页</a-button>
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
