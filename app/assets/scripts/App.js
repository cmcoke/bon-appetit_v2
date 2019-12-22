import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import 'flickity'
import 'flickity-fade'
import SelectForm from './modules/SelectForm'


let mobileMenu = new MobileMenu();
let selectForm = new SelectForm();


// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
