import { App } from "vue";
import { createPinia } from "pinia";

export const store = createPinia();

// 注册 store
export function setupStore(app: App) {
  app.use(store);
}
