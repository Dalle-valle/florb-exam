import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { bottomNav } from "./bottomnav.js";
import GoTrue from "gotrue-js";
let user;

gsap.registerPlugin(Draggable);

window.addEventListener("DOMContentLoaded", initBaf);
function initBaf() {
  checkUser();
  bottomNav();
  setDrag();
}
function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();
  console.log(user);
  setButton();
  addClickColor();
}
function setButton() {
  if (user === null) {
    document.querySelector(".save-button").innerHTML = "Log in";
    loggedIn = false;
  }
  if (user !== null) {
    loggedIn = true;

    console.log(user);
    document.querySelector(".save-button").innerHTML = "Save Florb!";
    document.querySelector(".save-button").addEventListener("click", saveFlorb);
  }
}
function setDrag() {
  Draggable.create(".drag", {
    bounds: document.getElementById("builder-con"),
    onDragStart: function () {},
    onDragEnd: function () {
      if (
        this.hitTest("#face-circle", "50%") &&
        this.target.parentNode.id !== "face-svg"
      ) {
        console.log(this);
        document.querySelector("#face-svg").appendChild(this.target);
      } else if (
        !this.hitTest("#face-circle", "50%") &&
        this.target.parentNode.id === "face-svg"
      ) {
        console.log(
          document.querySelector(`#${this.target.getAttribute("type")}`)
        );
        document
          .querySelector(`#${this.target.getAttribute("type")}`)
          .appendChild(this.target);
      }
    },
  });
}
function saveFlorb() {
  const s = new XMLSerializer();
  const str = s.serializeToString(document.querySelector(".face-svg"));
  console.log(
    document.querySelector("form[name='florb-name']").elements.name.value
  );
  const test = true;
  const florbName = document.querySelector("form[name='florb-name']").elements
    .name.value;
  console.log(florbName);
  if (florbName === "") {
    document.querySelector(".error-message").innerHTML = "Name your Florb!";
  } else {
    const createdFlorbs = user.user_metadata.florbs;
    if (!checkFlorbExists(florbName, createdFlorbs)) {
      console.log("it doesnt");
      const newFlorb = { name: florbName, svg: str };
      if (user.user_metadata.florbs.length === 0) {
        user
          .update({
            data: {
              florbs: [newFlorb],
            },
          })
          .then((user) => console.log(user));
      } else {
        user
          .update({
            data: {
              florbs: [...user.user_metadata.florbs, newFlorb],
            },
          })
          .then((user) => console.log(user));
      }
    } else {
      console.log("it dosedofasd");
    }
  }
}

function checkFlorbExists(florbName, createdFlorbs) {
  let florbCheck = false;
  createdFlorbs.forEach((florb) => {
    if (florb.name.toLowerCase() === florbName.toLowerCase()) {
      florbCheck = true;
    }
  });
  console.log(florbCheck);
  return florbCheck;
}
function addClickColor() {
  const colors = document.querySelectorAll(".color");
  const desktopFace = document.querySelector(".specialface");
  const mobileFace = document.querySelector("#face-circle");
  for (let color of colors) {
    color.addEventListener("click", getColor);

    function getColor() {
      let currentColor = window.getComputedStyle(color)["background-color"];

      mobileFace.style.fill = currentColor;
      desktopFace.style.backgroundColor = currentColor;

      //mobileFace.style.backgroundColor = currentColor;
    }
  }
}

document.querySelector(".reset-button").addEventListener("click", resetThis);
function resetThis() {
  location.reload();
}
