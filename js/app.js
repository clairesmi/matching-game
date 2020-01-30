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
      modalActive: true,
      userImageGuess: '',
      userNameGuess: '',
      score: 0,
      gameEnd: false,
      scoreArray: localStorage.getItem('points') ? JSON.parse(localStorage.getItem('points')) : [],
      scoreData: localStorage.getItem('points') ? JSON.parse(localStorage.getItem('points')) : [],
      name: ''

    }
  },

  methods: {
    start() {
      this.isActive = true
      this.modalActive = false
      this.gameEnd = false
      this.score = 0
      this.seconds = 0
      this.matchCounter = 0
      this.startTimer()
    },
    startTimer() {
      const timer = setInterval(() => {
        this.seconds += 1
        if (this.gameEnd) {
          this.stop()
          clearInterval(timer)
        }
      }, 1000)
    },
    
    handleTileClick(tile) {
      this.tilesClicked.push(tile)
      this.userImageGuess = tile
      this.checkMatch()
    },

    handleGuessClick(guess) {
      this.guessClicked.push(guess)
      this.userNameGuess = guess
      this.checkMatch()
    },

    checkMatch() {
      if (this.userImageGuess && this.userNameGuess && this.userImageGuess === this.userNameGuess) {
        this.matchCounter += 1
        this.score += 1
        this.userImageGuess = ''
        this.userNameGuess = ''

      }
      if (this.matchCounter === 4) {
        this.stop()
        this.endOfGame()
      }
    },
    
    stop() {
      this.isActive = false
      this.gameEnd = true
    },
    
    endOfGame() {
      this.modalActive = !this.modalActive
    }

    
  },

  computed: {

    // handleInput() {
    //   this.name = this.value
    // },

    submitScore() {
      this.scoreArray = [...this.scoreArray, { 'name': this.name, 'seconds': this.seconds }]
        .sort((a, b) => b.score - a.score).slice(0, 5)
      localStorage.setItem('points', JSON.stringify(this.scoreArray))
      this.name = ''
      const input = document.querySelector('.input')
      input.value = ''

    }
  }

})
