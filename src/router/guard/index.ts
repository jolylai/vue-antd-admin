import { Router } from "vue-router";

export function setupGuard(router: Router) {
  createPageGuard(router);
  createPageLoadingGuard(router);
}

/**
 * 页面路由守卫
 * 缓存
 * @param router
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach((to) => {
    to.meta.loaded = !!loadedPageMap.get(to.path);

    // 通知路由改变

    return true;
  });

  router.beforeEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

// 页面加载 loading
function createPageLoadingGuard(router: Router) {
  router.beforeEach(async (to) => {
    if (to.meta.loaded) {
      return true;
    }
  });

  router.afterEach(async (to) => {});
}
