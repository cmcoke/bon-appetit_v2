function showError(ele, msg) {
  document.getElementById(ele).innerHTML = msg;
}



function validateSubscription(){

  let subscribe = document.formSubscription.subscribe.value;

  let subscribeError = true;

  // Validate email address
  if (subscribe == "") {
    printError("subscribeError", "Please enter your email address");
  } else {
    // Regular expression for basic email validation
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.test(subscribe) === false) {
      printError("subscribeError", "Please enter a valid email address");
    } else {
      printError("subscribeError", "");
      subscribeError = false;
    }
  }

  if (subscribeError == true) {
    return false;
  }else {

    document.querySelector(".btn--footer").classList.add("btn--success")
    document.getElementById("btn-subscription").innerText = 'Thank You!'
    document.querySelector("#formSubscription").reset()

  }



  return false;
}
