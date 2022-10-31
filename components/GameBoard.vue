<template>
<section class="absolute w-full h-full top-0 grid md:grid-cols-2">
  <PlayerItem 
    v-for="player in playersStore.players" 
    :key="player.id"
    :id="player.id"
    :life="player.life"
    :name="player.name"
    :theme="player.theme"
  />
</section>
</template>
<script setup>
  import { usePlayersStore } from '@/store/playersStore.js'
  const playersStore = usePlayersStore()
</script>