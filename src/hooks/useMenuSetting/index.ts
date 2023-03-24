import { useAppStore } from "@/stores/modules/app";
import { MenuSetting } from "types/config";

export const useMenuSetting = () => {
  const appStore = useAppStore();

  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed);

  // Set menu configuration
  function setMenuSetting(menuSetting: Partial<MenuSetting>): void {
    appStore.setProjectConfig({ menuSetting });
  }

  function toggleCollapsed() {
    setMenuSetting({
      collapsed: !unref(getCollapsed),
    });
  }

  return { getCollapsed, toggleCollapsed };
};
