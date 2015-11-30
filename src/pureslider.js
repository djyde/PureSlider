class PureSlider {
  constructor(options = {}){
    this.options = {
      duration: options.duration || 2000,
      actionMode: options.actionMode || 'fade'
    }
    this.el = document.querySelector('#pure-slider')
    this.activeIndex = 0
    this.el.children[this.activeIndex].classList.add('active')
  }

  slide(){

    const actionMode = {
      // All action modes (how it works, what it will do) should be defined in this object
      fade: () => {
        this.el.classList.add('fade')
        setInterval(()=>{
          this.el.children[this.activeIndex].classList.remove('active')
          if (this.activeIndex === this.el.children.length - 1) {
            this.activeIndex = 0
            this.el.children[this.activeIndex].classList.add('active')
          } else {
            this.el.children[this.activeIndex+1].classList.add('active')
            this.activeIndex = this.activeIndex + 1
          }
        }, this.options.duration)
      }
    }

    if (actionMode[this.options.actionMode]) {
      actionMode[this.options.actionMode]()      
    } else {
      actionMode.fade()
      console.warn(this.options.actionMode, 'is not a valid action mode')
    }
  }
}

module.exports = PureSlider