export function bottomNav() {
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
}
