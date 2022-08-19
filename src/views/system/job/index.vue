<template>
  <a-table :dataSource="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'status'">
        <a>
          {{ record.status }}
        </a>
      </template>

      <template v-else-if="column.key === 'action'">
        <span>
          <a>修改</a>
          <a-divider type="vertical" />
          <a>删除</a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { queryJobList } from "@/api/system";
import { columns } from "./index";

const dataSource = ref();

onMounted(async () => {
  const { list } = await queryJobList({ current: 1, pageSize: 10 });
  dataSource.value = list;
});
</script>
