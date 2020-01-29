Vue.component('tile', {

  template: `<div>
              <div class="button-wrapper" @click="clickHandler">
              <div class="button-div" v-for="elem in randomImageArray">
                <button class="image-button" :id=elem.brand><img :id=elem.brand :src=elem.image /></button>
                </div>
              </div>
            </div>`,

  // props: ['name'],

  data() {
    return {
      exampleData: [
        {
          'image': 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/6a48858b62374aed8449a8af011d27ba_9366/Lite_Racer_CLN_Shoes_Blue_B96566_01_standard.jpg',
          'brand': 'adidas'
        },
        {
          'image': 'https://www.reebok.co.uk/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw58e1097b/zoom/CN6033_01_standard.jpg?sh=840&strip=false&sw=840',
          'brand': 'reebok'
        },
        {
          'image': 'https://i1.adis.ws/i/jpl/jd_214003_a?qlt=80&w=600&h=425&v=1&fmt=webp',
          'brand': 'nike'
        },
        {
          'image': 'https://nb.scene7.com/is/image/NB/mcruznn2_nb_02_i?$pdpPictLG2x$&fmt=webp',
          'brand': 'new balance'
        }
      ],
      clicked: false,
      randomImageArray: []
    }
  },

  mounted () {
    this.randomiseImages()
  },

  methods: {
    clickHandler() {
      this.clicked = true
      console.log(event.target.id)
      const randomImageArray = this.randomImageArray
      this.$emit('tile-clicked', event.target.id, randomImageArray)
    },
    randomiseImages() {
      while (this.randomImageArray.length !== 4) {
        const randomImage = this.exampleData[Math.floor(Math.random() * this.exampleData.length)]
        !this.randomImageArray.includes(randomImage) ? this.randomImageArray.push(randomImage) : this.randomiseImages()
        console.log(this.randomImageArray)
      }
      return this.randomImageArray
    }
  }

})
