import GoTrue from "gotrue-js";
import { bottomNav } from "./bottomnav.js";
document.addEventListener("DOMContentLoaded", initCaro);

let user;
checkUser();

function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();
}

function initCaro() {
  bottomNav();

  setTimeout(() => {
    var elems = document.querySelectorAll(".game-caro");
    var elem = document.querySelector(".game-caro");
    var elem = document.querySelector(".carousel");
    console.log(elem);
    var options = {
      onCycleTo: setBackground,
      fullWidth: true,
      duration: 400,
      dist: 0,
      padding: 100,
    };
    var instances = M.Carousel.init(elems, options);

    var instance = M.Carousel.getInstance(elem);

    console.log({ elems });

    document
      .querySelector(".arrow-next")
      .addEventListener("click", nextCaroItem);
    document
      .querySelector(".arrow-prev")
      .addEventListener("click", prevCaroItem);
    function nextCaroItem() {
      console.log("yo");
      instance.next(1);
      setTimeout(setBackground, 200);
    }
    function prevCaroItem() {
      console.log("yo");
      instance.prev(1);
      setTimeout(setBackground, 200);
    }
    setBackground();
    setHeartClick();
  }, 200);
}
function setBackground() {
  console.log(document.querySelectorAll(".carousel-item").length);
  const caroItems = document.querySelectorAll(".carousel-item");
  for (let i = 0; i < caroItems.length; i++) {
    if (caroItems[i].classList.contains("active")) {
      console.log(caroItems[i]);
      console.log(document.querySelector(`.background-img${i + 1}`));
      document
        .querySelector(`.background-img${i + 1}`)
        .classList.remove("hide");
    } else {
      document.querySelector(`.background-img${i + 1}`).classList.add("hide");
    }
  }
}
function setHeartClick() {
  document
    .querySelectorAll(".heart")
    .forEach((heart) => heart.addEventListener("click", setFavorite));
}

function setFavorite() {
  console.log(this.parentNode.parentNode.parentNode.id);

  const userdata = user.user_metadata.data;
  if (this.classList.contains("favorite-heart")) {
    this.classList.remove("favorite-heart");
    user
      .update({
        data: { data: { ...userdata, favoriteGame: "" } },
      })
      .then((user) => console.log(user));
  } else {
    user
      .update({
        data: {
          data: {
            ...userdata,
            favoriteGame: this.parentNode.parentNode.parentNode.id,
          },
        },
      })
      .then((user) => console.log(user));
    if (document.querySelector(".favorite-heart")) {
      document
        .querySelector(".favorite-heart")
        .classList.remove("favorite-heart");
    }
    this.classList.add("favorite-heart");
  }
}
