<template>
  <Listbox v-model="currentGameMode">
    <div class="listbox-container">
      <label class="listbox-label">Starting life</label>
      <ListboxButton class="listbox-input">
        <span class="field-value">{{ currentGameMode.name }}</span>
        <span class="field-secondary-value">
          {{ currentGameMode.startingLife }}
        </span>
      </ListboxButton>

      <ListboxOptions class="listbox-dropdown">
        <ListboxOption
          v-for="mode in gameModes"
          :key="mode.name"
          :value="mode"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              selected ? 'listbox-option-selected' : '',
              active ? 'bg-blue-50 text-blue-900' : 'text-gray-900',
              'listbox-option',
            ]"
          >
            <span class="field-value">{{ mode.name }}</span>
            <span class="field-secondary-value">
              {{ mode.startingLife }}
            </span>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>
<script setup>
import { watch } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useSettingsStore } from "@/store/settingsStore";
import { usePlayersStore } from "~/store/playersStore";
const settingsStore = useSettingsStore();
const playersStore = usePlayersStore();

const gameModes = settingsStore.getGameModes;
const currentGameMode = ref(gameModes[0]);
watch(currentGameMode, async (newMode, oldMode) => {
  settingsStore.setGameMode(newMode.id);
  playersStore.resetLife();
});
</script>
<style lang="css" scoped>
.listbox-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: fit-content;
  max-width: 20rem;
  font-family: "Cabin", sans-serif;
  font-size: 1rem;
  gap: 0.25rem;
}
.listbox-label {
  display: none;
  width: fit-content;
  flex-shrink: 0;
}
.listbox-input {
  position: relative;
  width: 100%;
  cursor: default;
  border-radius: 3px;
  background-color: #fff;
  border: solid 1px #d1d5db;
  height: 2rem;
  text-align: left;
}
.field-value {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1rem;
}
.field-secondary-value {
  color: #94a3b8;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  display: flex;
  justify-items: center;
  padding-right: 0.5rem;
  font-size: 1rem;
}
.listbox-dropdown {
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  max-height: 15rem;
  width: 100%;
  overflow: auto;
  border-radius: 0.375rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 0.25rem;
  gap: 0.25rem;
  font-size: 1rem;
}
.listbox-option {
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 1rem;
  list-style-type: none;
  border-radius: 3px;
  &:hover {
    background-color: #dbeafe;
  }
}
.listbox-option-selected {
  background-color: #dbeafe;
}
</style>
