import { Job } from "@/api/system";
import { TableColumnType } from "ant-design-vue";

export const columns: TableColumnType<Job>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "菜单名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "图标",
    dataIndex: "icon",
    key: "icon",
  },
  {
    title: "排序",
    dataIndex: "order",
    key: "order",
  },
  {
    title: "权限标识",
    dataIndex: "permission",
    key: "permission",
  },
  {
    title: "组件路径",
    dataIndex: "path",
    key: "path",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "创建时间",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "操作",
    key: "action",
  },
];
