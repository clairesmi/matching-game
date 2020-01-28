var app = new Vue({
  el: '#app',
  data() {
    return {
      isActive: false,
      hasWon: false,
      seconds: 0,
      tilesClicked: []
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
    handleTileClick(tile) {
      this.tilesClicked.push(tile)
      // console.log(tile)
    },

    handleGuessClick(guess) {
      this.guessClicked.push(guess)
      // console.log(tile)
    },
    stop() {
      this.isActive = false
    }


    
  }

})


