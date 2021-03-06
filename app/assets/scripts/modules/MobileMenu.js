class MobileMenu{

  constructor(){
    this.menuIcon = document.querySelector(".header__menu-icon")
    this.menuContent = document.querySelector(".header__menu-content")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu(){
    this.menuIcon.classList.toggle('header__menu-icon--close-x')
    this.menuContent.classList.toggle('header__menu-content--open')
  }


}

export default MobileMenu
