import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/reset.css";
import { setupUI } from "./utils/setupUI";

const app = createApp(App);

setupUI(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
