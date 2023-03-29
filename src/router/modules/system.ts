import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/constant";

const system: RouteRecordRaw[] = [
  {
    path: "/system",
    name: "system",
    component: Layout,
    meta: { title: "系统设置", icon: "" },
    children: [
      {
        path: "/system/job",
        name: "system_job",
        component: () => import("@/views/system/job/index.vue"),
        meta: { title: "岗位管理" },
      },
      {
        path: "/system/menu",
        name: "system_menu",
        component: () => import("@/views/system/menu/index.vue"),
        meta: { title: "菜单管理" },
      },
    ],
  },
];

export default system;
