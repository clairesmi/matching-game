Vue.component('guess', {

  template:

              `<div class="button-wrapper">
              <div class="button-div" v-for="elem in randomNameArray">
                <button class="name-button" :id=elem.name @click="clickHandler">{{elem.name}}</button>
                </div>
              </div>`,

  props: {
    isActive: Boolean
  },

  data() {
    console.log(this.disableButton)
    return {
      exampleData: [
        { 'image': 'https://lh3.googleusercontent.com/proxy/QBJV2FxAxMM4UTIKPdaAsd70xnYbKNubxS4KJF3O8Bf3DzVJbWXdrJp48OuRQCikeKxSRqb2B18tglRTTcScIaYUfViQ9nY6q9uhxfN-xpxVIaVl325xo7vBZO5HVyYz8xDLtw',
          'name': 'trikonasana' },
        { 'image': 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX33976721.jpg',
          'name': 'bakasana' },
        { 'image': 'https://image.jimcdn.com/app/cms/image/transf/dimension=470x10000:format=jpg/path/s3e1afc1389a02c25/image/i363d43342d713b41/version/1424181945/image.jpg',
          'name': 'savasana' },
        { 'image': 'https://global-uploads.webflow.com/5b44edefca321a1e2d0c2aa6/5be872cac9fc1f1377033ed3_Dimensions-Guide-Humans-Yoga-Poses-Warrior-1-Icon.svg',
          'name': 'virabhadrasana 1' }
      ],
      clicked: false,
      randomNameArray: []
    }
  },

  mounted () {
    // console.log(this.exampleData)
    this.randomiseNames()
    console.log(this.exampleData)
    // this.$emit('check-match', randomNameArray)
  },
  
  methods: {
    clickHandler() {
      this.clicked = true
      this.$emit('guess-clicked', event.target.id)
    },
    randomiseNames() {
      while (this.randomNameArray.length !== 4) {
        const randomName = this.exampleData[Math.floor(Math.random() * this.exampleData.length)]
        !this.randomNameArray.includes(randomName) ? this.randomNameArray.push(randomName) : this.randomiseNames()
        console.log(this.randomNameArray)
      }
      return this.randomNameArray
    }
  }

})
