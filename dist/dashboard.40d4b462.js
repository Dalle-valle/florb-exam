!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},n=o.parcelRequiredca8;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in l){let o=l[e];delete l[e];let n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,o){l[e]=o},o.parcelRequiredca8=n);var r=n("17dAM");let d,i=!1;function u(){d.logout().then((e=>{location.reload(),i=!1,console.log("User logged out")})).catch((e=>{throw console.log("Failed to logout user: %o",e),e})),c()}function c(){console.log("setSide"),!0===i&&(document.querySelector(".sidebar-logged-out").classList.add("hide"),document.querySelector(".sidebar-logged-in").classList.remove("hide")),!1===i&&(document.querySelector(".sidebar-logged-out").classList.remove("hide"),document.querySelector(".sidebar-logged-in").classList.add("hide"))}!function(){let o=new(e(r))({APIUrl:"https://serene-clarke-d069ee.netlify.app/.netlify/identity",setCookie:!0});d=o.currentUser(),console.log(d),function(){null===d&&(console.log("naa dude"),i=!1);null!==d&&(i=!0,console.log(d),document.querySelector(".username").innerHTML=d.user_metadata.data.full_name);document.querySelector(".logout").addEventListener("click",u)}(),c()}()}();
//# sourceMappingURL=dashboard.40d4b462.js.map