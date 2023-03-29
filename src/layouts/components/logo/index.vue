<template>
  <a class="flex p-4 space-x-2 items-center">
    <img class="w-7 h-7 block" :src="websiteConfig.logo" />
    <div class="text-white text-base m-0">{{ websiteConfig.title }}n</div>
  </a>
</template>

<script setup lang="ts">
import { websiteConfig } from "@/config/website.config";
</script>
