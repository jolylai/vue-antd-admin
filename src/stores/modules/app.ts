import { defineStore } from "pinia";
import { merge } from "lodash";
import { MenuSetting, ProjectConfig } from "types/config";

interface AppState {
  // darkMode?: ThemeEnum;
  // Page loading status
  // pageLoading: boolean;
  // project config
  projectConfig: ProjectConfig | null;
  // When the window shrinks, remember some states, and restore these states when the window is restored
  // beforeMiniInfo: BeforeMiniState;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    projectConfig: {
      menuSetting: { collapsed: false },
    },
  }),
  getters: {
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },
  },
  actions: {
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      // this.projectConfig = merge(this.projectConfig || {}, config);
      //  缓存
    },
  },
});
