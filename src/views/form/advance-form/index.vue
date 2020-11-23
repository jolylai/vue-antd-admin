<template>
  <a-space direction="vertical">
    <div style="text-align: right">
      <a-button type="primary" @click="validateAllForm">提交</a-button>
    </div>
    <a-card title="仓库管理">
      <template #extra><a-button @click="validateRepository">效验仓库表单</a-button></template>
      <repository-form ref="repositoryRef"></repository-form>
    </a-card>
    <a-card title="任务管理">
      <template #extra><a-button @click="validateTaskForm">效验任务表单</a-button></template>
      <task-form ref="taskFormRef"></task-form>
    </a-card>
  </a-space>
</template>

<script>
import { ref } from 'vue'
import RepositoryForm from './RepositoryForm'
import TaskForm from '@/views/form/advance-form/TaskForm'

export default {
  components: {
    RepositoryForm,
    TaskForm
  },
  setup() {
    const repositoryRef = ref(null)

    const validateRepository = () => {
      repositoryRef.value
        .validate()
        .then(fieldsValue => {
          console.log('fieldsValue: ', fieldsValue)
        })
        .catch(error => {
          console.log('error: ', error)
        })
    }

    const taskFormRef = ref(null)

    const validateTaskForm = () => {
      taskFormRef.value
        .validate()
        .then(fieldsValue => {
          console.log('fieldsValue: ', fieldsValue)
        })
        .catch(error => {
          console.log('error: ', error)
        })
    }

    const validateAllForm = async () => {
      try {
        const repositoryFieldsValue = await repositoryRef.value.validate()
        const taskFieldsValue = await taskFormRef.value.validate()
        console.log('taskFieldsValue: ', taskFieldsValue)
        console.log('repositoryFieldsValue: ', repositoryFieldsValue)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    return {
      repositoryRef,
      validateRepository,
      taskFormRef,
      validateTaskForm,
      validateAllForm
    }
  }
}
</script>
