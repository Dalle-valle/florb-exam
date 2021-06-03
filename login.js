import GoTrue from "gotrue-js";

let user;
//add eventlisteners
window.addEventListener("DOMContentLoaded", initListeners);
function initListeners() {
  document.querySelector(".login-switch").addEventListener("click", toggleExisting);
  document.querySelector(".create-switch").addEventListener("click", toggleCreate);
  document.querySelector(".create-switch").addEventListener("click", toggleCreate);
  document.querySelector(".forgot-btn").addEventListener("click", toggleResetPass);
  document.querySelector(".forgot-back").addEventListener("click", toggleExisting);
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
function toggleBackForgot() {}

//Instantiate the GoTrue auth client + GoTrue functions

let auth = new GoTrue({
  APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
  setCookie: true,
});
document.querySelector("form[name='signup']").addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.elements.password.value === e.target.elements.password2.value) {
    const form = e.target;
    if (!auth) {
      noAuthFound(form);
    }

    const { email, password, name2 } = form.elements;
    auth
      .signup(email.value, password.value, {
        data: { full_name: name2.value, favoriteFlorb: "", favoriteGame: "" },
      })
      .then((response) => {
        console.log(response);
        showMessage(`<p>Created a user! </p>`, form);
      })
      .catch((error) => {
        showMessage(`Email address in use`, form);
        console.log(error);
      });
  } else {
    showMessage(`Passwords do not match`, e.target);
  }
});
//login
document.querySelector("form[name='login']").addEventListener("submit", (e) => {
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
      showMessage(`Incorrect email or password`, form);
      console.log(error);
    });
});

//request recovery email
document.querySelector("form[name='recover-pass']").addEventListener("submit", (e) => {
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
      showMessage(`<p>Recovery email sent, check your inbox! </p>`, form);
      console.log(response);
    })
    .catch((error) => {
      showMessage(`Something went wrong :(`, form);
      console.log(error);
    });
});

//helper functions

function noAuthFound(form) {
  showMessage(`<p>Did you paste in your API endpoint?</p>`, form);
}

function noUserFound(form) {
  showMessage(`<p>User not found</p>`, form);
}

function showMessage(msg, el) {
  el.querySelector(".message").innerHTML = msg;
}
