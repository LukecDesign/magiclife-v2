<template>
  <button class="settings-button" @click="toggleSettings">
    <Cog6ToothIcon
      class="text-gray-700 group-hover:scale-105 group-hover:text-gray-800 group-active:scale-95 ease-in duration-75"
    />
  </button>
</template>
<script setup>
import { useSettingsStore } from "@/store/settingsStore.js";
import { Cog6ToothIcon } from "@heroicons/vue/24/outline";
const settingsStore = useSettingsStore();

function toggleSettings() {
  settingsStore.toggleSettings();
}
</script>
<style scoped>
.settings-button {
  background: #e2e8f0;
  border-radius: 99%;
  border: none;
  position: fixed;
  bottom: 1rem;
  left: 50%;
  z-index: 999;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  cursor: pointer;
  color: #334155;
  transition: background 175ms;
  transform: translate(-50%);
  transform-origin: center;
  &:hover {
    background: #94a3b8;
    color: #0f172a;
  }
  &:active {
    scale: 0.95;
  }
  &:hover svg {
    scale: 1.1;
  }
  svg {
    transition: scale 300ms;
    scale: 1;
  }
  &:active {
    scale: 0.95;
  }
}
</style>
