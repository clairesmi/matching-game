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
      console.log(this.modalActive, 'no modal')
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
      console.log('END SCREEN NOW')
      this.modalActive = !this.modalActive
      console.log('modal', this.modalActive)
    }

    
  },

  computed: {

    handleInput() {
      this.name = this.value
      console.log(this.name)
    },

    submitScore() {
      this.scoreArray = [...this.scoreArray, { 'name': this.name, 'seconds': this.seconds }]
        .sort((a, b) => b.score - a.score).slice(0, 5)
      console.log(this.scoreArray)
      localStorage.setItem('points', JSON.stringify(this.scoreArray))
      this.name = ''
      const input = document.querySelector('.input')
      input.value = ''

    }
  }

})
