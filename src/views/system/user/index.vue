<template>
  <xtep-table rowKey="id" :dataSource="dataSource" :columns="columns" />
</template>
<script lang="ts" setup>
import { h, onMounted, ref } from "vue";
// @ts-ignore
import XtepTable from "@/components/x-table";

const dataSource = ref([]);

onMounted(async () => {
  const { data } = await request();
  dataSource.value = data;
});

const request = async () => {
  const response = await fetch(
    "https://proapi.azurewebsites.net/github/issues"
  );

  return response.json();
};

const columns = [
  {
    dataIndex: "key",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "标题",
    tip: "标题过长会自动收缩",
    dataIndex: "title",
    copyable: true,
    ellipsis: true,
  },
  // {
  //   title: "状态",
  //   dataIndex: "state",
  //   filters: true,
  //   onFilter: true,
  //   valueType: "select",
  //   valueEnum: {
  //     all: { text: "全部", status: "Default" },
  //     open: {
  //       text: "未解决",
  //       status: "Error",
  //     },
  //     closed: {
  //       text: "已解决",
  //       status: "Success",
  //       disabled: true,
  //     },
  //     processing: {
  //       text: "解决中",
  //       status: "Processing",
  //     },
  //   },
  // },
  // {
  //   disable: true,
  //   title: "标签",
  //   dataIndex: "labels",
  //   search: false,
  //   customRender: ({ record }) =>
  //     record.labels.map(({ name, color }) =>
  //       h(Tag, { color, key: name }, name)
  //     ),
  // },
  // {
  //   title: "创建时间",
  //   key: "showTime",
  //   dataIndex: "created_at",
  //   valueType: "dateTime",
  //   sorter: true,
  //   hideInSearch: true,
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'created_at',
  //   valueType: 'dateRange',
  //   hideInTable: true,
  //   search: {
  //     transform: (value) => {
  //       return {
  //         startTime: value[0],
  //         endTime: value[1],
  //       };
  //     },
  //   },
  // },
];
</script>
