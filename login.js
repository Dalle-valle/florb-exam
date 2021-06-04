import GoTrue from "gotrue-js";

let user;

//Instantiate the GoTrue auth client + GoTrue functions

let auth = new GoTrue({
  APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
  setCookie: true,
});

//add eventlisteners
window.addEventListener("DOMContentLoaded", initListeners);
function initListeners() {
  document
    .querySelector(".login-switch")
    .addEventListener("click", toggleExisting);
  document
    .querySelector(".create-switch")
    .addEventListener("click", toggleCreate);
  document
    .querySelector(".create-switch")
    .addEventListener("click", toggleCreate);
  document
    .querySelector(".forgot-btn")
    .addEventListener("click", toggleResetPass);
  document
    .querySelector(".forgot-back")
    .addEventListener("click", toggleExisting);

  if (window.location.href.includes("#confirmation_token") === true) {
    document.querySelector(".confirm-user").classList.remove("hide");
    document.querySelector(".login").classList.add("hide");
    document.querySelector(".options").classList.add("hide");

    token = window.location.href.split("=")[1];
    document.querySelector(".confirm-button").addEventListener("click", () => {
      auth.confirm(token, true);
      window.location.href = "/login.html";
    });
  } else {
    setForms();
  }
}

function toggleExisting() {
  console.log("toggleExisting");
  document.querySelector(".login-switch").classList.remove("selected");
  document.querySelector(".create-switch").classList.add("selected");
  document.querySelector(".login").classList.remove("hide");
  document.querySelector(".signup").classList.add("hide");
  document.querySelector(".recover-pass").classList.add("hide");
  document.querySelector(".title-sign-in").classList.remove("hide");
  document.querySelector(".title-sign-up").classList.add("hide");
}
function toggleCreate() {
  console.log("toggleCreate");
  document.querySelector(".login-switch").classList.add("selected");
  document.querySelector(".create-switch").classList.remove("selected");
  document.querySelector(".signup").classList.remove("hide");
  document.querySelector(".login").classList.add("hide");
  document.querySelector(".title-sign-in").classList.add("hide");
  document.querySelector(".title-sign-up").classList.remove("hide");
  document.querySelector(".recover-pass").classList.add("hide");
}
function toggleResetPass() {
  console.log("forgot pass");
  document.querySelector(".login").classList.add("hide");
  document.querySelector(".recover-pass").classList.remove("hide");
}
function setForms() {
  document
    .querySelector("form[name='signup']")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        e.target.elements.password.value === e.target.elements.password2.value
      ) {
        const form = e.target;
        if (!auth) {
          noAuthFound(form);
        }

        const { email, password, name2 } = form.elements;
        auth
          .signup(email.value, password.value, {
            data: {
              full_name: name2.value,
              favoriteFlorb: "",
              favoriteGame: "",
            },
          })
          .then((response) => {
            console.log(response);
            showMessageSuccess(
              `<p>Created user! Check your email to verify account.</p>`,
              form
            );
          })
          .catch((error) => {
            showMessageFail(`<p>Email address in use</p>`, form);
            console.log(error);
          });
      } else {
        showMessage(`<p>Passwords do not match</p>`, e.target);
      }
    });
  //login
  document
    .querySelector("form[name='login']")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      console.log(form);
      if (!auth) {
        noAuthFound(form);
      }
      const { email, password } = form.elements;
      auth
        .login(email.value, password.value, true)
        .then((response) => {
          user = auth.currentUser();

          localStorage.setItem("user", JSON.stringify(user));

          window.location.href = "/dashboard.html";
        })
        .catch((error) => {
          showMessageFail(`<p>Incorrect email or password</p>`, form);
          console.log(error);
        });
    });

  //request recovery email
  document
    .querySelector("form[name='recover-pass']")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;

      if (!auth) {
        noAuthFound(form);
      }

      if (!auth.currentUser()) {
        noUserFound(form);
      }

      const user = auth.currentUser();
      const email = user.email;

      auth
        .requestPasswordRecovery(email)
        .then((response) => {
          showMessageSuccess(
            `<p>Recovery email sent, check your inbox! </p>`,
            form
          );
          console.log(response);
        })
        .catch((error) => {
          showMessageFail(`<p>Something went wrong :(</p>`, form);
          console.log(error);
        });
    });
}
//helper functions

function noUserFound(form) {
  showMessageFail(`<p>User not found</p>`, form);
}

function showMessageSuccess(msg, el) {
  console.log(el.querySelector(".message"));
  el.querySelector(".message").classList.add("succes-msg");
  el.querySelector(".message").classList.remove("fail-msg");
  el.querySelector(".message").innerHTML = msg;
}
function showMessageFail(msg, el) {
  el.querySelector(".message").classList.remove("succes-msg");
  el.querySelector(".message").classList.add("fail-msg");
  el.querySelector(".message").innerHTML = msg;
}
