import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "virtual:windi.css";
import { setupUI } from "./utils/setupUI";

const app = createApp(App);

setupUI(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
