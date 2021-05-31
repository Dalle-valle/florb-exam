document.addEventListener("DOMContentLoaded", start);
window.addEventListener("scroll", fillBar);

const endpoint = "https://www.ddalby.dk/florbs/wordpress/wp-json/wp/v2/florbs";
let allFlorbs;
let filter = "all";
let visibleFlorb;
let currentFlorbId;
function start() {
  getData();
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
  document.querySelector(".desc-text-head").textContent = "World of Florbs";
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
    clone.querySelector(".florb-img").alt = florb.title.rendered;
    clone.querySelector(".florb-phrase").textContent = florb.phrase;
    clone.querySelector(".florb-desc").textContent = florb.story;
    clone.querySelector("article").setAttribute("id", `florb-${florb.number}`);
    container.appendChild(clone);
  });
  document.querySelector(".contain").setAttribute("id", `florb-${0}`);
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
        console.log(entry.intersectionRatio);
        visibleFlorb = entry.target.id;
        console.log(entry.target);
        currentFlorbId = parseInt(visibleFlorb.split("-")[1], 10);

        console.log("in sight");
        console.log(currentFlorbId, sections.length);
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
      } else {
        console.log("yup");
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

function fillBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  document.querySelector(".progress-bar").style.width = scrolled + "%";
  document.querySelector(".scroll-img").style.transform = `rotate(${
    scrolled * 25
  }deg)`;
}
