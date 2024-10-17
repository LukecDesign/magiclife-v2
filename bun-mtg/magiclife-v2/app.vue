<template>
  <GameBoard />
  <Settings />
  <inputs-settings-button />
</template>
<script setup>
import { usePlayersStore } from "@/store/playersStore.js";
import { useSettingsStore } from "@/store/settingsStore.js";
const playersStore = usePlayersStore();
const settingsStore = useSettingsStore();
function setup() {
  // Check if any players
  if (settingsStore.getIsNewUser) {
    playersStore.addPlayer(settingsStore.startingLife, "Luke");
    playersStore.addPlayer(settingsStore.startingLife);
    playersStore.save();
    settingsStore.setUp();
    settingsStore.save();
  } else {
    playersStore.load();
  }
}
setup();
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400..700;1,400..700&display=swap");
html {
  height: 100vh;
}
body,
#__nuxt {
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  font-family: "Gelasio", serif;
}
</style>
