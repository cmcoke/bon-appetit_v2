class SelectForm {

  constructor() {
    this.events()
  }

  events() {
    document.addEventListener("change", function(event) {
      let element = event.target;
      if (element && element.matches(".reservation__element--field")) {
        element.classList[element.value ? "add" : "remove"]("-hasvalue");
      }
    });
  }


}

export default SelectForm
