<template>
  <div class="step-form-step2">
    <a-alert message="确认转账后，资金将直接打入对方账户，无法退回。" type="success" />
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="付款账户">
        {{ data.account }}
      </a-form-item>
      <a-form-item label="收款账户">
        {{ data.receipt }}
      </a-form-item>
      <a-form-item label="收款人姓名">
        {{ data.name }}
      </a-form-item>
      <a-form-item label="转账金额">
        {{ data.money }}
      </a-form-item>
      <a-divider />
      <a-form-item label="支付密码" v-bind="validateInfos.password">
        <a-input v-model:value="formRef.password" placeholder="请输入支付密码" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18, offset: 6 }">
        <a-space>
          <a-button type="primary" @click="nextStep">提交</a-button>
          <a-button @click="preStep">上一步</a-button>
        </a-space>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
export default {
  props: {
    data: { type: Object, required: true }
  },
  setup(props, context) {
    const formRef = reactive({
      password: ''
    })

    const rulesRef = reactive({
      password: [{ required: true, message: '请输入支付密码' }]
    })

    const { resetFields, validate, validateInfos } = useForm(formRef, rulesRef)

    const nextStep = e => {
      e.preventDefault()
      validate()
        .then(() => {
          context.emit('next-step', toRaw(formRef))
          console.log(toRaw(formRef))
        })
        .catch(err => {
          console.log('error', err)
        })
    }

    const preStep = () => {
      context.emit('pre-step')
    }

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formRef,
      validate,
      validateInfos,
      resetFields,
      nextStep,
      preStep
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-step2 {
  max-width: 600px;
  margin: 40px auto 0;
}
</style>
