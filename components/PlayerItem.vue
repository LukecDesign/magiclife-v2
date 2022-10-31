<template>
  <article class="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-700">
    <player-overlay>
      <input-player-button @click="increaseLife"></input-player-button>
      <input-player-button @click="decreaseLife"></input-player-button>
    </player-overlay>
    <player-name v-if="name">{{ name }}</player-name>
    <player-life>{{ life }}</player-life>
  </article>
</template>
<script setup>
  import { usePlayersStore } from '@/store/playersStore.js';
import PlayerOverlay from './PlayerOverlay.vue';
  const playersStore = usePlayersStore()

  const props = defineProps({
    life: {
        type: Number,
        default: 20,
        required: true,
      },
      id:{
        type: Number,
        required: true,
        default: 1
      },
      name: {
        type: String,
        required: false,
      },
      theme: {
        type: String,
        required: false,
      }
  })
  function increaseLife(){
    playersStore.editLife(props.id, 1)
  }
  function decreaseLife(){
    playersStore.editLife(props.id, -1)
  }
</script>