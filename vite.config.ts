import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

import AutoImport from "unplugin-auto-import/vite";

import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  optimizeDeps: {
    include: ["ant-design-vue", "axios"],
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      // imports: ["vue", "vue-router"],
      imports: [{ "ant-design-vue/es/form": ["useForm"] }],
    }),
    Unocss({
      presets: [presetWind()],
    }),
  ],
});
