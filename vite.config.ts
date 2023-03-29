import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

import AutoImport from "unplugin-auto-import/vite";

import Unocss from "unocss/vite";
import presetWind from "@unocss/preset-wind";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /\/#\//,
        replacement: pathResolve("types") + "/",
      },
      {
        find: "@",
        replacement: pathResolve("src") + "/",
      },
    ],
  },
  optimizeDeps: {
    include: ["ant-design-vue", "axios", "pinia", "js-cookie"],
  },
  plugins: [
    vue(),
    Components({
      dts: "./types/ant-design-vue.d.ts",
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
    AutoImport({
      dts: "./types/auto-import.d.ts",
      imports: ["vue", "vue-router", { "ant-design-vue/es/form": ["useForm"] }],
    }),
    Unocss({
      presets: [presetWind()],
    }),
  ],
  server: {
    host: true,
  },
});
