var app = new Vue({
  el: '#app',
  data() {
    return {
      isActive: false,
      hasWon: false,
      seconds: 0,
      tilesClicked: [],
      guessClicked: [],
      matchCounter: 0,
      modalActive: false,
      disableImage: false, 
      disableButton: false,
      userImageGuess: '',
      userNameGuess: ''
    }
  },

  methods: {
    start() {
      this.isActive = true
      this.startTimer()
    },
    startTimer() {
      const timer = setInterval(() => {
        this.seconds += 1
      }, 1000)
    },
    
    handleTileClick(tile, randomImageArray) {
      this.tilesClicked.push(tile)
      console.log(this.tilesClicked, 'u')
      this.userImageGuess = tile
      this.checkMatch()
      this.newImageArray = randomImageArray
      console.log(this.newImageArray)
    },

    handleGuessClick(guess) {
      this.guessClicked.push(guess)
      console.log(this.guessClicked, 'p')
      this.userNameGuess = guess
      this.checkMatch()
    },

    checkMatch() {
      // console.log(randomImageArray)
      console.log(this.userImageGuess, this.userNameGuess, 'hi')
      if (this.userImageGuess === this.userNameGuess) {
        this.matchCounter += 1
        // this.userImageGuess && this.disableImage = true
        // this.disableButton = true
        // this.newImageArray.remove(this.userImageGuess)
        this.newImageArray.splice(this.newImageArray.indexOf(this.userImageGuess), 1)
        // console.log(this.matchCounter, this.disableButton, this.disableImage) 
      }

      if (this.userImageGuess === event.target.id) {
        this.disableImage = true
      }
      if (this.matchCounter === 4) {
        this.endOfGame()
      }
    },

    endOfGame() {
      console.log('END SCREEN NOW')
      this.modalActive = !this.modalActive
      console.log('modal', this.modalActive)
    },

    stop() {
      this.isActive = false
    }
    
  }

})
