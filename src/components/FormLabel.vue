<template>
  <a-space>
    <a-tooltip>
      <template #title>
        {{ tooltip }}
      </template>
      <QuestionCircleFilled />
    </a-tooltip>
    <slot />
  </a-space>
</template>

<script lang="ts" setup>
import { QuestionCircleFilled } from "@ant-design/icons-vue";

export type FormLabelProps = {
  tooltip?: string;
};

const props = defineProps<FormLabelProps>();
</script>
