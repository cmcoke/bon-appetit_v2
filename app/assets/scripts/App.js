import '../styles/styles.css'
import 'lazysizes'
import 'flickity'
import 'flickity-fade'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker'
import MobileMenu from './modules/MobileMenu'
import SelectForm from './modules/SelectForm'


let mobileMenu = new MobileMenu();
let selectForm = new SelectForm();


// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
