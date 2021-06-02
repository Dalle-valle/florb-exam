document.addEventListener("DOMContentLoaded", initCaro);

import { bottomNav } from "./bottomnav.js";

bottomNav();

function initCaro() {
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
