import type { ISettings } from "@/types";
import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: (): ISettings => {
    return {
      mode: "dark",
    };
  },
  actions: {
    changeTheme() {
      this.mode = this.mode === "dark" ? "light" : "dark";
    },
  },
});
