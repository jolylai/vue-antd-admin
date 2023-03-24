import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { App } from "vue";
import { constantRoutes } from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
});

export const setupRouter = (app: App) => {
  app.use(router);
};
