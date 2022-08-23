<template>
  <a-tree-select
    tree-data-simple-mode
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    :tree-data="treeData"
    placeholder="Please select"
    :load-data="onLoadData"
  />
</template>
<script lang="ts" setup>
import { MenuQueryParams, queryMenu } from "@/api/system";
import type { TreeSelectProps } from "ant-design-vue";

const value = ref<string>();

const treeData = ref<TreeSelectProps["treeData"]>([
  // { id: 1, pId: 0, value: "1", title: "Expand to load" },
  // { id: 2, pId: 0, value: "2", title: "Expand to load" },
  // { id: 3, pId: 0, value: "3", title: "Tree Node", isLeaf: true },
]);

watch(value, () => {
  console.log(value.value);
});

const queryMenuData = async (params?: MenuQueryParams) => {
  const data = await queryMenu(params);
  console.log("data: ", data);

  return data.map((item) =>
    Object.assign(item, {
      pId: item.parentId,
      title: item.name,
      value: item.id,
      isLeaf: false,
    })
  );
};

onMounted(async () => {
  const menuData = await queryMenuData();

  treeData.value = treeData.value?.concat(menuData);
  // console.log("treeData.value: ", treeData.value);
});

const onLoadData = async (treeNode: TreeSelectProps["treeData"][number]) => {
  const { id } = treeNode.dataRef;

  const data = await queryMenuData({ parentId: id });

  treeData.value = treeData.value?.concat(data);
  console.log("treeData.value: ", treeData.value);
};
</script>
