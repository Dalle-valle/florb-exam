import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import GoTrue from "gotrue-js";
let user;

gsap.registerPlugin(Draggable);

window.addEventListener("DOMContentLoaded", initBaf);
function initBaf() {
  checkUser();
}
function setTool() {}
function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();
  console.log(user);
  setButton();
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

const faceRect = document.querySelector(".face").getBoundingClientRect();
const colors = document.querySelectorAll(".color");
const face = document.querySelector(".specialface");
const mobileFace = document.querySelector(".mobile-face");
const cx = faceRect.x + faceRect.width / 2;
const cy = faceRect.y + faceRect.height / 2;
const coords = document.querySelector(".trackable");
let inuse = document.querySelector(".inuse");
var elem = document.querySelector(".draggable");
var draggie = new Draggabilly(elem, {});

var draggableElems = document.querySelectorAll(".draggable");

var draggies = [];
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
console.log(colors);

for (let color of colors) {
  color.addEventListener("click", getColor);

  function getColor() {
    console.log("colors");
    let currentColor = window.getComputedStyle(color)["background-color"];
    console.log(currentColor);
    console.log(document.querySelector("#face-circle"));
    document.querySelector("#face-circle").style.fill = currentColor;
    face.style.backgroundColor = currentColor;

    //mobileFace.style.backgroundColor = currentColor;
  }
}

if (document.title === "Florbs | Dashboard") {
  document.querySelector(".link-1").classList.add("selected");
  document.querySelector(".outer-1").classList.remove("hide");
  document.querySelector(".special-link-1").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-1");
} else if (document.title === "Florbs | Games") {
  document.querySelector(".link-2").classList.add("selected");
  document.querySelector(".outer-2").classList.remove("hide");
  document.querySelector(".special-link-2").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-2");
} else if (document.title === "Florbs | Builder") {
  document.querySelector(".link-3").classList.add("selected");
  document.querySelector(".outer-3").classList.remove("hide");
  document.querySelector(".special-link-3").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-3");
} else if (document.title === "Florbs | Profile") {
  document.querySelector(".link-4").classList.add("selected");
  document.querySelector(".outer-4").classList.remove("hide");
  document.querySelector(".special-link-4").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-4");
}

document.querySelector(".reset-button").addEventListener("click", resetThis);
function resetThis() {
  location.reload();
}
