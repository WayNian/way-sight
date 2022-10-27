import { create, NButton } from "naive-ui";
import type { App } from "vue";

export const setupUI = (app: App) => {
  const naive = create({
    components: [NButton],
  });
  app.use(naive);
};
