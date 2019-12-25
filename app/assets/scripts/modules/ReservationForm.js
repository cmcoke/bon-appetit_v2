// Defining a function to display error message
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
  // Retrieving the values of form elements
  let name = document.form.name.value;
  let email = document.form.email.value;
  let date = document.form.date.value;
  let time = document.form.time.value;
  let guest = document.form.guest.value;

  // Defining error letiables with a default value
  let nameError = emailError = dateError = timeError = guestError = true;

  // Validate name
  if (name == "") {
    printError("nameError", "Please enter your name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameError", "Please enter a valid name");
    } else {
      printError("nameError", "");
      nameError = false;
    }
  }

  // Validate email address
  if (email == "") {
    printError("emailError", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailError", "Please enter a valid email address");
    } else {
      printError("emailError", "");
      emailError = false;
    }
  }

  // Validate date
  if (date == "") {
    printError("dateError", "Please select a date");
  } else {
    printError("dateError", "");
    dateError = false;
  }

  // Validate time
  if (time == "") {
    printError("timeError", "Please select a time");
  } else {
    printError("timeError", "");
    timeError = false;
  }

  // Validate guest
  if (guest == "") {
    printError("guestError", "Please select how many guest that will be attending");
  } else {
    printError("guestError", "");
    guestError = false;
  }


  // Prevent the form from being submitted if there are any errors
  if ((nameError || emailError || dateError || timeError || guestError) == true) {
    return false;
  } else {


    document.querySelector("#modal__name").innerHTML = name
    document.querySelector("#modal__date").innerHTML = date
    document.querySelector("#modal__time").innerHTML = time
    document.querySelector("#modal__guest").innerHTML = guest

    document.querySelector(".modal").classList.add("is-visible")

    document.querySelector(".modal__close-btn").addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("is-visible")
      document.querySelector("#form").reset()
    })





    return false;
  }



};
