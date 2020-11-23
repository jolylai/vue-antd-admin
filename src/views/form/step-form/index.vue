<template>
  <div>
    <a-steps :current="currentStep">
      <a-step title="填写转账信息" />
      <a-step title="确认转账信息" />
      <a-step title="完成" />
    </a-steps>

    <step1 v-if="currentStep === 0" @nextStep="nextStep"></step1>
    <step2 v-if="currentStep === 1" @nextStep="nextStep" @preStep="preStep" :data="allFormData"></step2>
    <step3 v-if="currentStep === 2" :data="allFormData" @finish="finish" @toOrderList="toOrderList"></step3>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

import Step1 from '@/views/form/step-form/Step1'
import Step2 from './Step2.vue'
import Step3 from '@/views/form/step-form/Step3'

export default {
  components: {
    Step1,
    Step2,
    Step3
  },
  setup() {
    const currentStep = ref(0)
    let allFormData = reactive({})

    // 下一步
    const nextStep = data => {
      currentStep.value += 1
      for (let key in data) {
        allFormData[key] = data[key]
      }
    }

    const preStep = () => {
      currentStep.value -= 1
    }

    // 再转一笔
    const finish = () => {
      currentStep.value = 0
      allFormData = reactive({})
    }

    const toOrderList = () => {}

    return {
      currentStep,
      nextStep,
      preStep,
      allFormData,
      finish,
      toOrderList
    }
  }
}
</script>

<style lang="less" scoped>
.ant-steps {
  max-width: 750px;
  margin: 26px auto;
}
</style>
