import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const BasicLayout = import("@/layout/index.vue");

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
