const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  let isError = checkInput();
  if (isError) e.preventDefault();
});

function checkInput() {
  let errorExist = false;

  if (username.value === "" || username.value == null) {
    setErrorMessage(username, "Empty username");
    errorExist = true;
  } else if (username.value.length <= 5) {
    setErrorMessage(username, "The length of username should be longer than 5");
    errorExist = true;
  }

  if (email.value === "" || email.value == null) {
    setErrorMessage(email, "Empty email");
    errorExist = true;
  } else if (!emailCheck(email.value)) {
    setErrorMessage(email, "Email not valid");
    errorExist = true;
  }

  if (password1.value === "") {
    setErrorMessage(password1, "Empty password");
    errorExist = true;
  }

  if (password2.value === "") {
    setErrorMessage(password2, "Empty password");
    errorExist = true;
  } else if (password1.value !== password2.value) {
    setErrorMessage(password2, "Passwords does not match");
    errorExist = true;
  }

  return errorExist;
}

function setErrorMessage(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = msg;
}

function emailCheck(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
