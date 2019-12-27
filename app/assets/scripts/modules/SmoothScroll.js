import jump from 'jump.js'

class SmoothScroll {
  constructor() {
    this.home = document.getElementById('home')
    this.about = document.getElementById('about')
    this.menu = document.getElementById('menu')
    this.reviews = document.getElementById('reviews')
    this.reservation = document.getElementById('reservation')
    this.events()
  }

  events() {

    this.home.addEventListener('click', () => {
      jump('.target')
    })

    this.about.addEventListener('click', () => {
      jump('.target2')
    })

    this.menu.addEventListener('click', () => {
      jump('.target3')
    })

    this.reviews.addEventListener('click', () => {
      jump('.target4')
    })

    this.reservation.addEventListener('click', () => {
      jump('.target5')
    })

  }



}




export default SmoothScroll
