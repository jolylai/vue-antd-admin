<template>
  <a-form>
    <a-form-item label="Activity zone" required>
      <a-select v-model:value="form.region" placeholder="please select your zone">
        <a-select-option value="shanghai">
          Zone one
        </a-select-option>
        <a-select-option value="beijing">
          Zone two
        </a-select-option>
      </a-select>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({})
    return {
      form
    }
  }
}
</script>
