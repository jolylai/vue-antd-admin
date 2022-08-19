import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const BasicLayout = () => import("@/layout/index.vue");

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home.vue"),
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
