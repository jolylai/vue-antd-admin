import { createApp } from "vue";

import "uno.css";
import "./styles/index.css";
import App from "./App.vue";

import { router, setupRouter } from "./router";
import { setupGuard } from "./router/guard";

const app = createApp(App);

setupRouter(app);
setupGuard(router);

app.mount("#app");
