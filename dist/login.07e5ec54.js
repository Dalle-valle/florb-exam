!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=t.parcelRequiredca8;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){let t=n[e];delete n[e];let s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){n[e]=t},t.parcelRequiredca8=s);var c=s("17dAM");let r;function l(){console.log("toggleExisting"),document.querySelector(".login-switch").classList.add("selected"),document.querySelector(".create-switch").classList.remove("selected"),document.querySelector(".login").classList.remove("hide"),document.querySelector(".signup").classList.add("hide"),document.querySelector(".recover-pass").classList.add("hide")}function i(){console.log("toggleCreate"),document.querySelector(".login-switch").classList.remove("selected"),document.querySelector(".create-switch").classList.add("selected"),document.querySelector(".signup").classList.remove("hide"),document.querySelector(".login").classList.add("hide")}function d(){console.log("forgot pass"),document.querySelector(".login").classList.add("hide"),document.querySelector(".recover-pass").classList.remove("hide")}window.addEventListener("DOMContentLoaded",(function(){document.querySelector(".login-switch").addEventListener("click",l),document.querySelector(".create-switch").addEventListener("click",i),document.querySelector(".create-switch").addEventListener("click",i),document.querySelector(".forgot-btn").addEventListener("click",d),document.querySelector(".forgot-back-btn").addEventListener("click",l)}));let a=new(e(c))({APIUrl:"https://serene-clarke-d069ee.netlify.app/.netlify/identity",setCookie:!0});function u(e){g("<p>Did you paste in your API endpoint?</p>",e)}function g(e,t){t.querySelector(".message").innerHTML=e}document.querySelector("form[name='signup']").addEventListener("submit",(e=>{if(e.preventDefault(),e.target.elements.password.value===e.target.elements.password2.value){console.log("succ");const t=e.target;a||u(t);const{email:o,password:n,name:s}=t.elements;a.signup(o.value,n.value,{data:{full_name:s.value}}).then((e=>{console.log(s.value),console.log(e),g(`<p>Created a user! </p><p>Response: </p><code>${JSON.stringify(e)}</code>`,t)})).catch((e=>{g(`Failed :( <code>${JSON.stringify(e)}</code>`,t),console.log(e)}))}else g("Passwords do not match",e.target),console.log("faill")})),document.querySelector("form[name='login']").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;a||u(t);const{email:o,password:n}=t.elements;a.login(o.value,n.value,!0).then((e=>{g("<p>Log in successful! </p>",t),console.log(e),r=a.currentUser(),localStorage.setItem("user",JSON.stringify(r)),window.location.href="/dashboard.html"})).catch((e=>{g("Failed to log in :",t),console.log(e)}))})),document.querySelector("form[name='recover-pass']").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;a||u(t),a.currentUser()||function(e){g("<p>User not found</p>",e)}(t);const o=a.currentUser().email;a.requestPasswordRecovery(o).then((e=>{g("<p>Recovery email sent, check your inbox! </p>",t),console.log(e)})).catch((e=>{g("Something went wrong :(",t),console.log(e)}))}))}();
//# sourceMappingURL=login.07e5ec54.js.map
