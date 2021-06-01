import GoTrue from "gotrue-js";
let user;
let logginIn;

checkUser();
function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();
  console.log(user);

  if (user !== null) {
    if (user.user_metadata.florbs.length > 0) {
      setFlorbs();
    }
  }
}

function setFlorbs() {
  const container = document.querySelector(".created-florbs");
  const florbTemplate = document.querySelector("template");
  const florbArray = user.user_metadata.florbs;

  florbArray.forEach((florb) => {
    console.log(florb);
    let clone = florbTemplate.cloneNode(true).content;
    clone.querySelector(".florb-img").innerHTML = florb;

    container.appendChild(clone);
  });
}
