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
    var options = {
      fullWidth: true,
      duration: 400,
      dist: 0,
      padding: 100,
    };
    var instances = M.Carousel.init(elems, options);

    var instance = M.Carousel.getInstance(elem);

    document
      .querySelector(".arrow-next")
      .addEventListener("click", nextCaroItem);
    document
      .querySelector(".arrow-prev")
      .addEventListener("click", prevCaroItem);
    function nextCaroItem() {
      instance.next(1);
    }
    function prevCaroItem() {
      instance.prev(1);
    }
    if (user === null) {
      document
        .querySelectorAll(".favorite")
        .forEach((div) => div.classList.add("hide"));
    } else if (user !== null) {
      const userFaveGame = user.user_metadata.data.favoriteGame;
      if (userFaveGame !== "") {
        if (userFaveGame !== "") {
          document
            .querySelector(`#${userFaveGame} .heart`)
            .classList.add("favorite-heart");
        }
      }
      setHeartClick();
    }
  }, 200);
}

function setHeartClick() {
  document
    .querySelectorAll(".heart")
    .forEach((heart) => heart.addEventListener("click", setFavorite));
}

function setFavorite() {
  const userdata = user.user_metadata.data;
  if (this.classList.contains("favorite-heart")) {
    this.classList.remove("favorite-heart");
    user.update({
      data: { data: { ...userdata, favoriteGame: "" } },
    });
  } else {
    user.update({
      data: {
        data: {
          ...userdata,
          favoriteGame: this.parentNode.parentNode.parentNode.id,
        },
      },
    });
    if (document.querySelector(".favorite-heart")) {
      document
        .querySelector(".favorite-heart")
        .classList.remove("favorite-heart");
    }
    this.classList.add("favorite-heart");
  }
}
