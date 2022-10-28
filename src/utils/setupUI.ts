import {
  create,
  NButton,
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutSider,
} from "naive-ui";
import type { App } from "vue";

export const setupUI = (app: App) => {
  const naive = create({
    components: [NButton, NConfigProvider, NLayout, NLayoutHeader, NLayoutContent, NLayoutSider],
  });
  app.use(naive);
};
