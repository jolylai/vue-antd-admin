import { LAYOUT } from "@/router/constant";
import { RouteRecordRaw } from "vue-router";

const system: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/system/menu",
  },
  {
    path: "/user",
    component: LAYOUT,
    children: [
      {
        path: "/user/login",
        component: () => import("@/views/user/login/index.vue"),
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    component: LAYOUT,
    meta: { title: "标题" },
    children: [
      {
        path: "/system/job",
        component: () => import("@/views/system/job/index.vue"),
        meta: { title: "岗位管理" },
      },
      {
        path: "/system/menu",
        component: () => import("@/views/system/menu/index.vue"),
        meta: { title: "菜单管理" },
      },
    ],
  },
];

export default system;
