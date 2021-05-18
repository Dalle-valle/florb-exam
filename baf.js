const faceRect = document.querySelector(".face").getBoundingClientRect();

const cx = faceRect.x + faceRect.width / 2;
const cy = faceRect.y + faceRect.height / 2;
const coords = document.querySelector(".trackable");

draggies.forEach((item) => {
  item.on("dragEnd", function (event, pointer) {
    const rect = event.target.getBoundingClientRect();
    const dx = rect.x + rect.width / 2;
    const dy = rect.y + rect.height / 2;
    const dist = Math.hypot(cx - dx, cy - dy);
    console.log(dist);
    console.log(rect);

    if (dist < 250) {
      event.target.parentElement.classList.add("inuse");
    } else {
      event.target.parentElement.classList.remove("inuse");
    }
  });
});
const colors = document.querySelectorAll(".color");
const face = document.querySelector(".specialface");
for (let color of colors) {
  color.addEventListener("click", getColor);

  function getColor() {
    let currentColor = window.getComputedStyle(color)["background-color"];
    console.log(currentColor);
    face.style.backgroundColor = currentColor;
  }
}

if (document.title === "Florbs | Landing") {
  document.querySelector(".link-1").classList.add("selected");
  document.querySelector(".outer-1").classList.remove("hide");
  document.querySelector(".special-link-1").style.transform = "translateY(30px)";
} else if (document.title === "Florbs | Games") {
  document.querySelector(".link-2").classList.add("selected");
  document.querySelector(".outer-2").classList.remove("hide");
  document.querySelector(".special-link-2").style.transform = "translateY(30px)";
} else if (document.title === "Florbs | Builder") {
  document.querySelector(".link-3").classList.add("selected");
  document.querySelector(".outer-3").classList.remove("hide");
  document.querySelector(".special-link-3").style.transform = "translateY(30px)";
} else if (document.title === "Florbs | Profile") {
  document.querySelector(".link-4").classList.add("selected");
  document.querySelector(".outer-4").classList.remove("hide");
  document.querySelector(".special-link-4").style.transform = "translateY(30px)";
}
