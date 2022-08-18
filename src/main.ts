import { createApp } from "vue";

import "./styles/index.css";
import "uno.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router).mount("#app");
