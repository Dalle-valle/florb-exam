import GoTrue from "gotrue-js";
import { bottomNav } from "./bottomnav.js";
import "regenerator-runtime/runtime";
let user;
let loggedIn = false;
let allFlorbs;
let gameImages;
const endpoint = "https://www.ddalby.dk/florbs/wordpress/wp-json/wp/v2/florbs";
const gameImagesEndpoint =
  "https://www.ddalby.dk/florbs/wordpress/wp-json/wp/v2/game";
checkUser();
function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();

  setUser();
  bottomNav();
}

function setUser() {
  if (user === null) {
    document.querySelector(".logout").classList.add("hide");
    document.querySelector(".login").classList.remove("hide");

    loggedIn = false;
  }
  if (user !== null) {
    loggedIn = true;
    document.querySelector(".logout").classList.remove("hide");
    getFavorites();
    document.querySelector(".login").classList.add("hide");
    document.querySelector(".username").innerHTML =
      user.user_metadata.data.full_name;
  }
  document.querySelector(".logout").addEventListener("click", handleLogout);
}
function handleLogout() {
  user
    .logout()
    .then((response) => {
      location.reload();
    })
    .catch((error) => {
      throw error;
    });
}
async function getFavorites() {
  const response = await fetch(endpoint);
  allFlorbs = await response.json();
  const response2 = await fetch(gameImagesEndpoint);
  gameImages = await response2.json();
  setFavorites();
}
function setFavorites() {
  allFlorbs.forEach((florb) => {
    if (florb.florbname === user.user_metadata.data.favoriteFlorb) {
      document.querySelector(".fav-florb-img").src = florb.image.guid;
      document.querySelector(".fav-florb-name").innerHTML = florb.florbname;
    }
  });
  gameImages.forEach((image) => {
    if (image.slug === user.user_metadata.data.favoriteGame) {
      document.querySelector(".fav-game-img").src = image.image.guid;
      document.querySelector(".fav-game-name").innerHTML = image.slug;
    }
  });
}
