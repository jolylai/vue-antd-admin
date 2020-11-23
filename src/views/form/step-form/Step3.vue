<template>
  <a-result class="step-form-step3" status="success" title="操作成功！" sub-title="预计两小时到账">
    <template #extra>
      <a-button key="finish" type="primary" @click="finish">
        再转一笔
      </a-button>
      <a-button key="bill" @click="toOrderList">
        查看账单
      </a-button>
    </template>
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
    </a-form>
  </a-result>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },
  setup(props, context) {
    const finish = () => {
      context.emit('finish')
    }

    const toOrderList = () => {
      context.emit('to-order-list')
    }

    return {
      finish,
      toOrderList
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-step3 {
  max-width: 600px;
  margin: 0 auto;
}
</style>
