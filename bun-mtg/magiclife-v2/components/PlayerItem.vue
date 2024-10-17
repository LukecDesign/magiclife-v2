<template>
  <section class="player-container">
    <article
      ref="player-item"
      class="player-item"
      :class="[
        settingsStore.isOpen ? 'settings' : '',
        flipped ? 'flipped' : '',
      ]"
    >
      <div class="player-button-overlay" v-if="!settingsStore.isOpen">
        <button class="player-button" @click="increaseLife"></button>
        <button class="player-button" @click="decreaseLife"></button>
      </div>
      <span class="player-name" v-if="name">{{ name }}</span>
      <span class="player-life">{{ life }}</span>
    </article>
    <div class="player-settings">
      <div class="player-settings-header"></div>
      <div class="player-settings-footer">
        <InputsIconButton
          :content="'Remove ' + name"
          @click="players.removePlayer(id)"
        />
        <InputsIconButton :content="'Flip'" @click="players.flipPlayer(id)" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { usePlayersStore } from "~/store/playersStore.js";
import { useSettingsStore } from "~/store/settingsStore.js";

const players = usePlayersStore();
const settingsStore = useSettingsStore();
const playerItem = useTemplateRef("player-item");

const props = defineProps({
  life: {
    type: Number,
    default: 20,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    default: 1,
  },
  name: {
    type: String,
    required: false,
  },
  theme: {
    type: String,
    required: false,
  },
  flipped: {
    type: Boolean,
    required: true,
  },
});
const playerRotation = reactive({
  color: "blue",
  transform: "rotate(" + props.rotation + "deg)",
});
function increaseLife() {
  players.editLife(props.id, 1);
}
function decreaseLife() {
  players.editLife(props.id, -1);
}
</script>
<style lang="css">
.player-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Gelasio", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}
.player-button-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.player-item {
  background-color: #cbd5e1;
  border-radius: 0rem;
  scale: 1;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: scale 175ms cubic-bezier(0.25, 0.1, 0.25, 1), border-radius 300ms;
  z-index: 2;
  &.settings {
    border-radius: 1rem;
    scale: 0.8;
  }
  &.flipped {
    transform: rotate(180deg);
  }
}
.player-button {
  border: none;
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 50%;
}
.player-name {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  flex-grow: 0;
  font-family: "Cabin", sans-serif;
}
.player-life {
  font-size: 25vw;
  font-weight: 700;
  line-height: 1;
  pointer-events: none;
  user-select: none;
  flex-grow: 0;
  font-family: "Cabin", sans-serif;
}
.player-settings {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
}
.player-settings-header,
.player-settings-footer {
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  padding: 0 10%;
}
.player-settings-footer {
  display: flex;
  gap: 0.5rem;
  justify-content: start;
  align-items: center;
}
</style>
