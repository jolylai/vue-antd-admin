<template>
  <a-button :disabled="!!counterId" @click="onClick">
    <a-space>
      <span v-if="counter">{{ counter }} </span>
      <slot />
    </a-space>
  </a-button>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

export type CountdownButtonProps = {
  seconds?: number;
};

const props = withDefaults(defineProps<CountdownButtonProps>(), {
  seconds: 6,
});

const counterId = ref<number | undefined>(undefined);
const counter = ref(0);

watch(counter, (counter) => {
  if (counter === 0) {
    clearInterval(counterId.value);
    counterId.value = undefined;
  }
});

const onClick = () => {
  counter.value = props.seconds;

  counterId.value = setInterval(() => {
    counter.value -= 1;
  }, 1000);
};
</script>
