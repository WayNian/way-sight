<template>
  <n-config-provider :theme="theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { darkTheme } from "naive-ui";
  import { computed } from "vue";
  import { useSettingsStore } from "./stores/settings";

  const store = useSettingsStore();

  const theme = computed(() => {
    return store.mode === "dark" ? darkTheme : null;
  });
</script>
<style scoped></style>
