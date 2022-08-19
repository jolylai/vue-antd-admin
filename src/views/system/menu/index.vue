<template>
  <modal-menu :visible="true" />

  <div>
    <a-button type="primary">新增</a-button>
  </div>
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
import { onMounted, reactive, ref } from "vue";
import { queryMenuList } from "@/api/system";
import { columns } from "./index";

import ModalMenu from "./components/ModalMenu.vue";

const dataSource = ref();

onMounted(async () => {
  const { list } = await queryMenuList({ current: 1, pageSize: 10 });
  dataSource.value = list;
});

const menuModalState = reactive({
  visible: true,
  data: {},
});
</script>
