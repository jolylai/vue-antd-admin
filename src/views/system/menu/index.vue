<template>
  <modal-menu
    v-model:visible="menuModalState.visible"
    :data="menuModalState.data"
  />

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
        <a-space>
          <a @click="onAdd(record)">新增</a>
          <a @click="onEdit(record)">修改</a>
          <a @click="onDelete(record)">删除</a>
        </a-space>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { Menu, queryMenu } from "@/api/system";
import { columns } from "./index";

import ModalMenu from "./components/ModalMenu.vue";

const dataSource = ref();

onMounted(async () => {
  dataSource.value = await queryMenu();
});

const menuModalState = reactive({
  visible: false,
  data: {},
});

const onAdd = ({ parentId }: Menu) => {
  menuModalState.data = { parentId };
  menuModalState.visible = true;
};

const onEdit = (record: Menu) => {
  menuModalState.data = record;
  menuModalState.visible = true;
};

const onDelete = ({ parentId }: Menu) => {
  menuModalState.data = { parentId };
  menuModalState.visible = true;
};
</script>
