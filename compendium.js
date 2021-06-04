import "regenerator-runtime/runtime";
import GoTrue from "gotrue-js";
import { bottomNav } from "./bottomnav.js";
let user;

document.addEventListener("DOMContentLoaded", start);

const endpoint = "https://www.ddalby.dk/florbs/wordpress/wp-json/wp/v2/florbs";
let allFlorbs;
let filter = "all";
let visibleFlorb;
let currentFlorbId;
function start() {
  getData();
  bottomNav();
}

async function getData() {
  const response = await fetch(endpoint);
  allFlorbs = await response.json();
  showFlorbs();

  document.querySelector(".a-down").addEventListener("click", clickNext);
  document.querySelector(".a-up").addEventListener("click", clickPrev);
  observe1();
}
function showFlorbs() {
  const container = document.querySelector(".compendium");
  const florbTemplate = document.querySelector("template");
  container.innerHTML = "";
  document.querySelector(".desc-text-head").textContent =
    "Welcome to the World of Florbs";
  document.querySelector(".desc-text-1").textContent =
    "Beneath the floorboards of every children’s room, the Florbs monsters live their lives. This place is known as Foundation. Foundation is where the Florbs gain their powers so they can teach the children all the new moves. ";
  document.querySelector(".desc-text-2").textContent =
    "The Florbs might tickle your toes, because they are wacky monsters, so make sure you don’t stand still on them for too long. You should especially be on the lookout for Tummy as he is always hungry for a little toe.";
  document.querySelector(".desc-text-3").textContent =
    "Each of the Flobs have their own personality and they all have their own special moves that they love to do. Backie for example, can only go backwards, he has never learned to go forwards so maybe you can teach him how to?";
  allFlorbs.forEach((florb) => {
    let clone = florbTemplate.cloneNode(true).content;
    clone.querySelector(".florb-name").textContent = florb.title.rendered;
    clone.querySelector(".florb-img").innerHTML = florb.svgpath;
    clone.querySelector(".florb-phrase").textContent = florb.phrase;
    clone.querySelector(".florb-desc").textContent = florb.story;
    clone.querySelector("article").setAttribute("id", `florb-${florb.number}`);
    clone.querySelector("article").setAttribute("name", `${florb.florbname}`);

    container.appendChild(clone);
  });
  document.querySelector(".contain").setAttribute("id", `florb-${0}`);
  checkUser();
}

function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();

  if (user === null) {
    document
      .querySelectorAll(".favorite")
      .forEach((div) => div.classList.add("hide"));
  } else if (user !== null) {
    const userFaveFlorb = user.user_metadata.data.favoriteFlorb;
    if (userFaveFlorb !== "") {
      if (userFaveFlorb !== "") {
        document
          .querySelector(`[name='${userFaveFlorb}'] .heart`)
          .classList.add("favorite-heart");
      }
    }
    setHeartClick();
  }
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
      data: { data: { ...userdata, favoriteFlorb: "" } },
    });
  } else {
    user.update({
      data: {
        data: {
          ...userdata,
          favoriteFlorb:
            this.parentNode.parentNode.parentNode.getAttribute("name"),
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

function observe1() {
  const sections = document.querySelectorAll(".florbers");
  const options = {
    threshold: [0.1, 0.5],
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const { target } = entry;

      if (entry.intersectionRatio >= 0.5) {
        visibleFlorb = entry.target.id;
        currentFlorbId = parseInt(visibleFlorb.split("-")[1], 10);

        document.querySelector(".current").innerHTML = `${currentFlorbId}/${
          sections.length - 1
        }`;

        if (currentFlorbId === 0) {
          document.querySelector(".florb-index").classList.add("hide");
        } else if (
          document.querySelector(".florb-index").classList.contains("hide")
        ) {
          document.querySelector(".florb-index").classList.remove("hide");
        }
        if (currentFlorbId === sections.length - 1) {
          document.querySelector(".a-down").classList.add("disabled-arrow");
        } else if (
          document.querySelector(".a-down").classList.contains("disabled-arrow")
        ) {
          document.querySelector(".a-down").classList.remove("disabled-arrow");
        }
        if (currentFlorbId === 1) {
          document.querySelector(".a-up").classList.add("disabled-arrow");
        } else if (
          document.querySelector(".a-up").classList.contains("disabled-arrow")
        ) {
          document.querySelector(".a-up").classList.remove("disabled-arrow");
        }
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
}
function clickNext() {
  document
    .querySelector(`#florb-${currentFlorbId + 1}`)
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function clickPrev() {
  document
    .querySelector(`#florb-${currentFlorbId - 1}`)
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
