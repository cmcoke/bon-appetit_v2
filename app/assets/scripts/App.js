import '../styles/styles.css'
import 'promise-polyfill/src/polyfill'
import 'picturefill'
import 'lazysizes'
import 'flickity'
import 'flickity-fade'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
import MobileMenu from './modules/MobileMenu'
import SmoothScroll from './modules/SmoothScroll'


let mobileMenu = new MobileMenu();
let smoothScroll = new SmoothScroll();


// Code Splitting for the Reservation Form
let resform

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  if (typeof resform == 'undefined') {
    import(/* webpackChunkName: "reservation" */ './modules/ReservationForm').then( x => {
      resform = new x.default()
      setTimeout( () => resform.events(), 20)
    }).catch( () =>  console.log('there was a problem.'))
  }else {
    resform.events()
  }
})


// Code Splitting for the Newsletter Form
let newsForm

document.getElementById('formSubscription').addEventListener('submit', e => {
  e.preventDefault();
  if (typeof newsForm == 'undefined') {
    import(/* webpackChunkName: "newsletter" */ './modules/NewsletterForm').then( x => {
      newsForm = new x.default()
      setTimeout( () => newsForm.events(), 20)
    }).catch( () =>  console.log('there was a problem.'))
  }else {
    newsForm.events()
  }
})


// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
