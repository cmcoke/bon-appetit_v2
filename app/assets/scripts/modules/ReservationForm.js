class ReservationForm {

  constructor() {
    this.injectHTML()
    this.form = document.getElementById('form')
    this.name = document.getElementById('name')
    this.email = document.getElementById('email')
    this.date = document.getElementById('date')
    this.time = document.getElementById('time')
    this.guest = document.getElementById('guest')
    this.form = document.getElementById('form')
    this.closeIcon = document.querySelector('.modal__close')
    this.modal = document.querySelector('.modal')
    this.events()
  }

  events() {

    this.validate();

    this.closeIcon.addEventListener('click', () => this.closeTheModal())

    document.addEventListener('keyup', e => this.keyPressHandler(e))

  }

  openTheModal() {
    this.modal.classList.add('modal--is-visible')
  }

  closeTheModal() {
    this.modal.classList.remove('modal--is-visible')
    document.querySelector("#form").reset()
  }

  keyPressHandler(e) {
    if(e.keyCode == 27){
      this.closeTheModal()
    }
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `

    <section class="modal" id="modal1">

      <div class="wrapper wrapper--narrow">

        <div class="modal__container">

          <div class="modal__img">
            <img class="lazyload" data-srcset="assets/images/modal--img.jpg" alt="chef preparing food">
          </div>

          <div class="modal__content">

            <img data-srcset="assets/images/icons/logo--modal--small.png" alt="bon appetit logo" class="modal__logo-img modal__show-logo lazyload">
            <img data-srcset="assets/images/icons/logo--modal--large.png" alt="bon appetit logo" class="modal__logo-img modal__hide-logo lazyload">

            <h1 class="modal__heading">Hello <span id="modal__name"></span>, thank you for your reservation!</h1>
            <p class="modal__description">Stated below are the details regarding your reservation.</p>

            <div class="modal__detail-container">
              <div class="modal__detail">
                <p>Date</p>
                <span id="modal__date"></span>
              </div>
              <div class="modal__detail">
                <p>Time</p>
                <span id="modal__time"></span>
              </div>
              <div class="modal__detail">
                <p>Guest/s</p>
                <span id="modal__guest"></span>
              </div>
            </div>

            <div class="modal__close">X</div>

          </div>

        </div>

      </div>

    </section>

    `)
  }

  // Defining a function to display error message
  setErrorFor(el, message) {
    document.getElementById(el).innerHTML = message;
  }

  validate() {
    // Retrieving the values of form elements
    let nameVal = document.form.name.value.trim();
    let emailVal = document.form.email.value.trim();
    let dateVal = document.form.date.value;
    let timeVal = document.form.time.value;
    let guestVal = document.form.guest.value;

    // Regualr express to check for only letters and space between words
    let letters = /^[a-zA-Z\s]+$/;

    // Regualr express to check for valid email addresses
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Defining error letiables with a default value
    this.nameError = this.emailError = this.dateError = this.timeError = this.guestError = true;

    // Validate name
    if (nameVal === '') {
      this.setErrorFor('nameError', 'Please enter your first and last name');
    } else if (letters.test(nameVal) === false) {
      this.setErrorFor('nameError', 'Please enter a valid name');
    } else {
      this.setErrorFor('nameError', '');
      this.nameError = false;
    }

    // Validate email address
    if (emailVal === '') {
      this.setErrorFor('emailError', 'Please enter your email address');
    } else if (email.test(emailVal) === false) {
      this.setErrorFor('emailError', 'Please enter a vaild email address');
    } else {
      this.setErrorFor('emailError', '');
      this.emailError = false;
    }

    // Validate date
    if (dateVal === '') {
      this.setErrorFor('dateError', 'Please select a date');
    } else {
      this.setErrorFor('dateError', '');
      this.dateError = false;
    }

    // Validate time
    if (timeVal === '') {
      this.setErrorFor('timeError', 'Please select a time');
    } else {
      this.setErrorFor('timeError', '');
      this.timeError = false;
    }

    // Validate guest
    if (guestVal === '') {
      this.setErrorFor('guestError', 'Please select how many guest that will be attending');
    } else {
      this.setErrorFor('guestError', '');
      this.guestError = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((this.nameError || this.emailError || this.dateError || this.timeError || this.guestError) == true) {
      return false;
    } else {

      document.querySelector("#modal__name").innerHTML = nameVal
      document.querySelector("#modal__date").innerHTML = dateVal
      document.querySelector("#modal__time").innerHTML = timeVal
      document.querySelector("#modal__guest").innerHTML = guestVal

      this.injectHTML()
      this.openTheModal()


      return false;
    }


  }


}

export default ReservationForm
