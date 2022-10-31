import { defineStore } from 'pinia'
import { useSettingsStore } from './settingsStore'

export const usePlayersStore = defineStore('optionsStore',{
  state: () => ({
    players: []
  }),
  getters: {
    getPlayerCount: (state) =>{
      return state.players.length
    },
    getPlayers: (state) => {
      return state.players
    },
    getStartingLife: (state) => {
      const settings = useSettingsStore()
      return settings.startingLife
    },
  },
  actions: {
    addPlayer(life, name, theme) {
      let newPlayer = {}
      newPlayer.id = parseInt(this.players.length)
      if(name){
        newPlayer.name = name
      }
      else{
        newPlayer.name = 'Player ' + (newPlayer.id + 1)
      }
      if(life){
        newPlayer.life = parseInt(life)
      }
      else{
        newPlayer.life = 20
      }
      if(theme){
        newPlayer.theme = theme
      }
      else{
        newPlayer.theme
      }
      this.players.push(
        newPlayer
      )
    },
    save(){
      if(process.client){
        localStorage.setItem('players', this.players);
      }
    },
    load(){
      if(process.client){
        if( localStorage.getItem('players') ){
          this.players = localStorage.getItem('players')
        }
      }
    },
    editLife(player, value){
      let targetPlayer = this.players[parseInt(player)]
      let oldLife = targetPlayer.life
      let newLife = oldLife += parseInt(value)
      targetPlayer.life = newLife
    },
    resetLife(state){
      let startingLife = this.getStartingLife
      for(let i = 0 ; i < this.players.length ; i++){
        this.players[i].life = startingLife
      }
    }
  }
})
