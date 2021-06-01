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
  container.innerHTML = "";

  for (let i = 0; i < florbArray.length; i++) {
    let clone = florbTemplate.cloneNode(true).content;
    clone.querySelector(".created-florb").id = `${i}`;
    clone.querySelector(".florbs-name").innerHTML = florbArray[i].name;
    clone.querySelector(".florb-img").innerHTML = florbArray[i].svg;

    container.appendChild(clone);
  }

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", deleteFlorb);
  });
}
function deleteFlorb() {
  const florbId = this.parentNode.parentNode.id;
  const florbArray = user.user_metadata.florbs;
  florbArray.splice(florbId, 1);
  user
    .update({
      data: {
        florbs: florbArray,
      },
    })
    .then((user) => console.log(user));
  setFlorbs();
}
