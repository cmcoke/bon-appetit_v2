import '../styles/styles.css'
import 'lazysizes'
import 'flickity'
import 'flickity-fade'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker'
import MobileMenu from './modules/MobileMenu'
import SmoothScroll from './modules/SmoothScroll'


let mobileMenu = new MobileMenu();
let smoothScroll = new SmoothScroll();



// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
