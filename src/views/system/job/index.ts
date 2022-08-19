import { Job } from "@/api/system";
import { TableColumnType } from "ant-design-vue";

export const columns: TableColumnType<Job>[] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "岗位编码",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "岗位名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "岗位排序",
    dataIndex: "order",
    key: "order",
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
