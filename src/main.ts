import { createApp } from "vue";
import { createPinia } from "pinia";

import "./styles/index.css";
import "uno.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
