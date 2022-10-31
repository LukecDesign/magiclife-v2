import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    state: () => ({
      startingLife: 20,
      isNewUser: true,
      isOpen: false,
      gameSettings: true,
      tableSettings: false,
      customLife: false,
      selectedGameMode: 1,
      maxPlayers: 4,
      playerCount: 0,
      uiOptions: false,
      theme: "theme-light",
      themes: [
        { id: 1, name: "angel" },
        { id: 2, name: "djinn" },
        { id: 3, name: "demon" },
        { id: 4, name: "dragon" },
        { id: 5, name: "hydra" },
      ],
      gameModes:[
        { id: 1, startingLife: 20, name: "Regular" },
        { id: 2, startingLife: 30, name: "Two headed giant" },
        { id: 3, startingLife: 40, name: "Commander / EDH", showCommanderDamage:"true" }
      ]
  }),
    getters: {
      getIsNewUser(state){
        return state.isNewUser
      },
      getGameModes(state){
        return state.gameModes
      },
      getselectedGameMode(state){
        return state.selectedGameMode
      },
    },
    actions: {
      toggleSettings() {
        this.isOpen = !this.isOpen
      },
      setUp() {
        this.isNewUser = false
      },
      setGameMode(value){
        this.selectedGameMode = value
        let newStartingLife = this.gameModes.find(x => x.id === this.selectedGameMode).startingLife
        this.startingLife = newStartingLife
      },
      save(){
        if(process.client){
          localStorage.setItem('settings', this.startingLife);
        }
      },
      load(){
        if(process.client){
          if( localStorage.getItem('players') ){
            this.players = localStorage.getItem('players')
          }
        }
      }
     }
})