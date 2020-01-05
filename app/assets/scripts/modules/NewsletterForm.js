class NewsletterForm {

  constructor() {
    this.form = document.getElementById('formSubscription')
    this.email = document.getElementById('subscribe')
    this.events()
  }

  events() {
    this.validate();
  }

  setErrorFor(el, message) {
    document.getElementById(el).innerHTML = message;
  }

  setSuccessFor() {
    document.querySelector(".btn--footer").classList.add("btn--success")
    document.getElementById("btn-subscription").innerText = 'Thank You!'
  }

  validate() {
    let emailVal = this.email.value.trim();
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.subscribeError = true;

    if (emailVal === '') {
      this.setErrorFor('subscribeError', 'Please enter your email address');
    } else if (email.test(emailVal) === false) {
      this.setErrorFor('subscribeError', 'Please enter a vaild email address');
    } else {
      this.setErrorFor('subscribeError', '');
      this.subscribeError = false;
    }

    if ((this.subscribeError) == true) {
      return false;
    } else {

      this.setSuccessFor();


      return false;
    }


  }


}

export default NewsletterForm
