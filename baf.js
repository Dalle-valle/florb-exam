import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { bottomNav } from "./bottomnav.js";

import GoTrue from "gotrue-js";
let user;

gsap.registerPlugin(Draggable);

window.addEventListener("DOMContentLoaded", initBaf);
function initBaf() {
  checkUser();
  setDrag();
  bottomNav();
}
function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();
  setButton();
  addClickColor();
}
function setButton() {
  if (user === null) {
    document.querySelector(".save-button").innerHTML = "Log in";
    document.querySelector(".save-button").addEventListener("click", () => {
      window.location.href = "/login.html";
    });
  }
  if (user !== null) {
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
        document.querySelector("#face-svg").appendChild(this.target);
      } else if (
        !this.hitTest("#face-circle", "50%") &&
        this.target.parentNode.id === "face-svg"
      ) {
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
  const florbName = document.querySelector("form[name='florb-name']").elements
    .name.value;
  if (florbName === "") {
    document.querySelector(".error-message").innerHTML = "Name your Florb!";
  } else {
    let createdFlorbs;
    if (!user.user_metadata.florbs) {
      createdFlorbs = [];
    } else {
      createdFlorbs = user.user_metadata.florbs;
    }
    if (!checkFlorbExists(florbName, createdFlorbs)) {
      //init save modal gennem materialize
      const elems = document.querySelectorAll(".modal");
      const elem = document.querySelector(".modal");
      const instances = M.Modal.init(elems);
      const instance = M.Modal.getInstance(elem);

      const newFlorb = { name: florbName, svg: str };
      if (createdFlorbs.length === 0) {
        user.update({
          data: {
            florbs: [newFlorb],
          },
        });
      } else {
        user.update({
          data: {
            florbs: [...user.user_metadata.florbs, newFlorb],
          },
        });
      }
      //sæt modal indhold
      document.querySelector(
        ".new-florb-name"
      ).innerHTML = `New Florb <strong>${florbName}</strong> added!`;
      document.querySelector(".new-florb-img").innerHTML = str;
      instance.open();
    } else {
      document.querySelector(".error-message p").innerHTML =
        "You've already used this name!";
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
    }
  }
}
