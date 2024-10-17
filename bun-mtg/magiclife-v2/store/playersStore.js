import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";

export const usePlayersStore = defineStore("playersStore", {
  state: () => ({
    players: [],
  }),
  getters: {
    getPlayerCount: (state) => {
      return state.players.length;
    },
    getPlayers: (state) => {
      return state.players;
    },
    getStartingLife: (state) => {
      const settings = useSettingsStore();
      return settings.startingLife;
    },
  },
  actions: {
    addPlayer({
      life = 20,
      name = "Player " + (parseInt(this.players.length) + 1),
      theme = "Default",
    }) {
      let newPlayer = {};
      newPlayer.life = life;
      newPlayer.name = name;
      newPlayer.theme = theme;
      newPlayer.flipped = false;
      newPlayer.id = parseInt(this.players.length + 1);

      this.players.push(newPlayer);
    },
    removePlayer(id) {
      this.players.splice(
        this.players.find((obj) => obj.id === id),
        1
      );
    },
    flipPlayer(id) {
      let thisPlayer = this.players.find((obj) => obj.id === id);
      if (thisPlayer.flipped) {
        thisPlayer.flipped = false;
      } else thisPlayer.flipped = true;
    },
    rotateAntiClockwise(id) {
      this.players.find((obj) => obj.id === id).rotation -= 90;
    },
    save() {
      if (process.client) {
        localStorage.setItem("players", this.players);
      }
    },
    load() {
      if (process.client) {
        if (localStorage.getItem("players")) {
          this.players = localStorage.getItem("players");
        }
      }
    },
    editLife(id, value) {
      let targetPlayer = this.players.find((obj) => obj.id === id);
      let oldLife = targetPlayer.life;
      let newLife = (oldLife += parseInt(value));
      targetPlayer.life = newLife;
    },
    resetLife(state) {
      let startingLife = this.getStartingLife;
      for (let i = 0; i < this.players.length; i++) {
        this.players[i].life = startingLife;
      }
    },
  },
});
