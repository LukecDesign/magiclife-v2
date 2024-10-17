<template>
  <aside v-if="settings.isOpen" class="settings-board">
    <life-selector />
    <inputs-icon-button
      content="Add Player"
      @click="players.addPlayer({ life: settings.startingLife })"
    />
  </aside>
</template>
<script setup>
import { watch } from "vue";
import { useSettingsStore } from "@/store/settingsStore.js";
import { usePlayersStore } from "@/store/playersStore.js";
const settings = useSettingsStore();
const players = usePlayersStore();
</script>
<style lang="css" scoped>
.settings-board {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 4rem;
  padding: 0.25rem 3.1rem;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}
</style>
