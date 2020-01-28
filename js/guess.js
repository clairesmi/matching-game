Vue.component('guess', {

  template:

              `<div class="button-wrapper" @click="clickHandler">
              <div class="button-div" v-for="elem in randomBrandArray">
                <button class="brand-button" :id=elem.brand>{{elem.brand}}</button>
                </div>
              </div>`,

  props: ['name'],

  data() {
    return {
      exampleData: [
        { 'image': 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto,fl_lossy/6a48858b62374aed8449a8af011d27ba_9366/Lite_Racer_CLN_Shoes_Blue_B96566_01_standard.jpg',
          'brand': 'adidas' },
        { 'image': 'https://www.reebok.co.uk/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw58e1097b/zoom/CN6033_01_standard.jpg?sh=840&strip=false&sw=840',
          'brand': 'reebok' },
        { 'image': 'https://i1.adis.ws/i/jpl/jd_214003_a?qlt=80&w=600&h=425&v=1&fmt=webp',
          'brand': 'nike' },
        { 'image': 'https://nb.scene7.com/is/image/NB/mcruznn2_nb_02_i?$pdpPictLG2x$&fmt=webp',
          'brand': 'new balance' }
      ],
      clicked: false,
      randomBrandArray: []
    }
  },

  mounted () {
    this.randomiseBrands()
  },
  
  methods: {
    clickHandler() {
      this.clicked = true
      console.log(event.target.id)
      this.$emit('guess-clicked', event.target.id)
    },
    randomiseBrands() {
      while (this.randomBrandArray.length !== 4) {
        const randomBrand = this.exampleData[Math.floor(Math.random() * this.exampleData.length)]
        !this.randomBrandArray.includes(randomBrand) ? this.randomBrandArray.push(randomBrand) : this.randomiseBrands()
        console.log(this.randomBrandArray)
      }
      return this.randomImageArray
    }
  }

})
