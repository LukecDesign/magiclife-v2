<template>
  <Listbox v-model="currentGameMode">
    <div class="relative mt-1 w-full min-w-fit max-w-lg">
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="block truncate">{{ currentGameMode.name }}</span>
        <span
          class="text-gray-400 pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          {{ currentGameMode.startingLife }}
        </span>
      </ListboxButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform -translate-y-5 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-5 opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="mode in gameModes"
            :key="mode.name"
            :value="mode"
            as="template"
          >
            <li
              :class="[
                selected ? 'bg-blue-100 text-blue-900' : '',
                active ? 'bg-blue-50 text-blue-900' : 'text-gray-900',
                'relative cursor-default select-none py-2 px-4',
              ]"
            >
              <span :class="['block truncate']">{{ mode.name }}</span>
              <span
                class="text-gray-400 pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                {{ mode.startingLife }}
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
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
