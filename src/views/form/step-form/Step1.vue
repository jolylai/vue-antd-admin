<template>
  <div>
    <a-form class="step-form-step1-form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="付款账户" v-bind="validateInfos.account">
        <a-select v-model:value="form.account">
          <a-select-option value="Glover@alipay.com">Glover@alipay.com</a-select-option>
          <a-select-option value="MacGyver@alipay.com">MacGyver@alipay.com</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="收款账户" v-bind="validateInfos.receipt">
        <a-input-group compact>
          <a-select v-model:value="form.type" style="width: 20%">
            <a-select-option value="alipay">
              支付宝
            </a-select-option>
            <a-select-option value="wechatpay">
              微信支付
            </a-select-option>
          </a-select>
          <a-input style="width: 80%" v-model:value="form.receipt" />
        </a-input-group>
      </a-form-item>
      <a-form-item label="收款人姓名" v-bind="validateInfos.name">
        <a-input v-model:value="form.name" />
      </a-form-item>
      <a-form-item label="转账金额" v-bind="validateInfos.money">
        <a-input prefix="￥" v-model:value="form.money" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 18, offset: 6 }">
        <a-space>
          <a-button type="primary" @click="nextStep">下一步</a-button>
          <a-button type="primary" @click="resetFields">重置</a-button>
        </a-space>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="step-form-style-desc">
      <h3>说明</h3>
      <h4>转账到支付宝账户</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
      <h4>转账到银行卡</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'

export default {
  setup(props, context) {
    const form = reactive({
      account: '',
      type: 'alipay',
      receipt: 'Herman@alipay.com',
      name: 'Herman',
      money: 5000
    })

    const rules = reactive({
      account: [{ required: true, message: '请选择付款账户' }],
      receipt: [{ required: true, message: '请输入收款账户' }],
      name: [{ required: true, message: '请输入收款人姓名' }],
      money: [{ required: true, message: '请输入转账金额' }]
    })
    const { validate, validateInfos, resetFields } = useForm(form, rules)

    const nextStep = () => {
      validate()
        .then(() => {
          context.emit('next-step', toRaw(form))
        })
        .catch(err => {
          console.log('error', err)
        })
    }

    return {
      form,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      nextStep,
      validateInfos,
      resetFields
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-step1-form {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
}

.step-form-style-desc {
  padding: 0 56px;
  color: rgba(0, 0, 0, 0.45);

  h3 {
    margin: 0 0 12px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
