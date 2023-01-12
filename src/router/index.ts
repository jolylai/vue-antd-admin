import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import EmptyLayout from "@/layout/empty.vue";

const BasicLayout = () => import("@/layout/default/index.vue");

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/system/menu",
  },
  {
    path: "/user",
    component: EmptyLayout,
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
    component: BasicLayout,
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

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
