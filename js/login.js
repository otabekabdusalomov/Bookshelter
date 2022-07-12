"use strict";

const elFormLogin = document.querySelector(".login-form");
const elUsernameInput = document.querySelector(".login-form__email");
const elPasswordInput = document.querySelector(".login-form__password");
const elErrorLogin = document.querySelector(".loginError");


elFormLogin.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const usernameInputValue = elUsernameInput.value;
  const PasswordInputValue = elPasswordInput.value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: usernameInputValue,
      password: PasswordInputValue,
    }),
  })
    .then((res) => res.json())
    .then((dataLogin) => {
      if (dataLogin.token) {
        window.localStorage.setItem("token", dataLogin.token);
        window.location.replace("login.html");
      } else {
        elErrorLogin.textContent = "Bizda bunday ma'lumot mavjud emas";
      }
    });

  usernameInputValue = null;
  PasswordInputValue = null;
});
