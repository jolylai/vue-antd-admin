<template>
  <a-form layout="vertical">
    <a-row :gutter="16">
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="任务名" v-bind="validateInfos.taskName">
          <a-input v-model:value="formRef.taskName" />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="任务描述" v-bind="validateInfos.description">
          <a-input v-model:value="formRef.description" />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="执行人" v-bind="validateInfos.executor">
          <a-select v-model:value="formRef.executor">
            <a-select-option value="lai">赖同学</a-select-option>
            <a-select-option value="lin">林同学</a-select-option>
            <a-select-option value="zhang">张同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="责任人" v-bind="validateInfos.taskApprover">
          <a-select v-model:value="formRef.taskApprover">
            <a-select-option value="lai">赖同学</a-select-option>
            <a-select-option value="lin">林同学</a-select-option>
            <a-select-option value="zhang">张同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="提醒时间" v-bind="validateInfos.reminderTime">
          <a-range-picker v-model:value="formRef.reminderTime" />
        </a-form-item>
      </a-col>
      <a-col :lg="8" :md="12" :sm="24">
        <a-form-item label="仓库类型" v-bind="validateInfos.taskype">
          <a-select v-model:value="formRef.taskype">
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
      taskName: '',
      description: '',
      executor: '',
      taskApprover: '',
      reminderTime: [],
      taskype: ''
    })

    const rulesRef = reactive({
      taskName: [{ required: true, message: '请输入仓库名称' }],
      description: [{ required: true, message: '请输入仓库域名' }],
      executor: [{ required: true, message: '请选择仓库管理员' }],
      taskApprover: [{ required: true, message: '请选择仓库审批人' }],
      reminderTime: [{ required: true, message: '请选择生效日期' }],
      taskype: [{ required: true, message: '请选择仓库类型' }]
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
