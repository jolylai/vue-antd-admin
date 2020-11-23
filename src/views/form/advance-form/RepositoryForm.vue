<template>
  <a-form layout="vertical">
    <a-row :gutter="16">
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="仓库名称" v-bind="validateInfos.name">
          <a-input v-model:value="formRef.name" />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="仓库域名" v-bind="validateInfos.url">
          <a-input addon-before="Http://" addon-after=".com" v-model:value="formRef.url" />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="仓库管理员" v-bind="validateInfos.owner">
          <a-select v-model:value="formRef.owner">
            <a-select-option value="lai">赖同学</a-select-option>
            <a-select-option value="lin">林同学</a-select-option>
            <a-select-option value="zhang">张同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="审批人" v-bind="validateInfos.approver">
          <a-select v-model:value="formRef.approver">
            <a-select-option value="lai">赖同学</a-select-option>
            <a-select-option value="lin">林同学</a-select-option>
            <a-select-option value="zhang">张同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="生效日期" v-bind="validateInfos.effectiveDate">
          <a-range-picker v-model:value="formRef.effectiveDate" />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="仓库类型" v-bind="validateInfos.type">
          <a-select v-model:value="formRef.type">
            <a-select-option value="public">公开</a-select-option>
            <a-select-option value="private">私有</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import { reactive } from 'vue'
import { useForm } from '@ant-design-vue/use'

export default {
  name: 'RespositoryForm',
  setup() {
    const formRef = reactive({
      name: '',
      url: '',
      owner: '',
      approver: '',
      effectiveDate: [],
      type: ''
    })

    const rulesRef = reactive({
      name: [{ required: true, message: '请输入仓库名称' }],
      url: [{ required: true, message: '请输入仓库域名' }],
      owner: [{ required: true, message: '请选择仓库管理员' }],
      approver: [{ required: true, message: '请选择仓库审批人' }],
      effectiveDate: [{ required: true, message: '请选择生效日期' }],
      type: [{ required: true, message: '请选择仓库类型' }]
    })

    const { validateInfos, validate } = useForm(formRef, rulesRef)
    return {
      formRef,
      rulesRef,
      validateInfos,
      validate
    }
  }
}
</script>
