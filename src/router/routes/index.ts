import { AppRouteModule } from "../types";
import { LoginRoute } from "./basic";

export const modules = import.meta.glob<
  true,
  string,
  { default: AppRouteModule[] }
>("./modules/*.ts", { eager: true });
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

export const constantRoutes = [LoginRoute];
