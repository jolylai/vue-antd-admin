import { defineStore } from "pinia";

export const usePermissionStore = defineStore("permission", {
  actions: {
    /**
     * 构建路由
     * 根据后端返回的权限构建路由
     */
    async buildRoutesAction() {
      // 从接口获取权限数据
      // 根据接口权限数据生成对应的路由数据
      //
    },
  },
});
