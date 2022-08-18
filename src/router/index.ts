import { createRouter, createWebHistory } from "vue-router";

export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;
