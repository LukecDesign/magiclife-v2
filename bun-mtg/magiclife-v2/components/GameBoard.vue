<template>
  <section class="gameBoard absolute w-full h-full top-0 grid md:grid-cols-2">
    <PlayerItem
      v-for="player in playersStore.players"
      :key="player.id"
      :id="player.id"
      :life="player.life"
      :name="player.name"
      :theme="player.theme"
      :flipped="player.flipped"
    />
  </section>
</template>
<script setup>
import { usePlayersStore } from "@/store/playersStore.js";
const playersStore = usePlayersStore();
</script>
<style>
.gameBoard {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
