<template>
  <n-layout-header style="height: 64px; padding: 24px" bordered>
    <n-button type="primary" size="medium">测试</n-button>
    <n-button type="primary" size="medium" @click="changeTheme">修改主题</n-button>
  </n-layout-header>
</template>

<script setup lang="ts">
  import { useSettingsStore } from "@/stores/settings";

  const store = useSettingsStore();

  const changeTheme = (): void => {
    store.changeTheme();
  };
</script>

<style scoped></style>
