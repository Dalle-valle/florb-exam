!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequiredca8;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){let t=n[e];delete n[e];let o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){n[e]=t},t.parcelRequiredca8=o);var s={};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,o.register("6WNe1",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.JSONHTTPError=e.exports.TextHTTPError=e.exports.HTTPError=e.exports.getPagination=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=o("1r2V4");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e.exports,"getPagination",{enumerable:!0,get:function(){return s.getPagination}});var c=e.exports.HTTPError=function(e){function t(e){i(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.statusText));return r.name=r.constructor.name,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(r,r.constructor):r.stack=new Error(e.statusText).stack,r.status=e.status,r}return u(t,e),t}(function(e){function t(){var t=Reflect.construct(e,Array.from(arguments));return Object.setPrototypeOf(t,Object.getPrototypeOf(this)),t}return t.prototype=Object.create(e.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}(Error)),l=e.exports.TextHTTPError=function(e){function t(e,r){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.data=r,n}return u(t,e),t}(c),f=e.exports.JSONHTTPError=function(e){function t(e,r){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.json=r,n}return u(t,e),t}(c),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments[1];i(this,e),this.apiURL=t,this.apiURL.match(/\/[^\/]?/)&&(this._sameOrigin=!0),this.defaultHeaders=r&&r.defaultHeaders||{}}return n(e,[{key:"headers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r({},this.defaultHeaders,{"Content-Type":"application/json"},e)}},{key:"parseJsonResponse",value:function(e){return e.json().then((function(t){if(!e.ok)return Promise.reject(new f(e,t));var r=s.getPagination(e);return r?{pagination:r,items:t}:t}))}},{key:"request",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.headers(n.headers||{});return this._sameOrigin&&(n.credentials=n.credentials||"same-origin"),fetch(this.apiURL+e,r({},n,{headers:o})).then((function(e){var r=e.headers.get("Content-Type");return r&&r.match(/json/)?t.parseJsonResponse(e):e.ok?e.text().then((function(e){})):e.text().then((function(t){return Promise.reject(new l(e,t))}))}))}}]),e}();e.exports.default=d})),o.register("1r2V4",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};e.exports.getPagination=function(e){var t=e.headers.get("Link"),n={};if(null==t)return null;t=t.split(",");for(var o=e.headers.get("X-Total-Count"),s=0,i=t.length;s<i;s++){var a=t[s].replace(/(^\s*|\s*$)/,"").split(";"),u=r(a,2),c=u[0],l=u[1],f=c.match(/page=(\d+)/),d=f&&parseInt(f[1],10);l.match(/last/)?n.last=d:l.match(/next/)?n.next=d:l.match(/prev/)?n.prev=d:l.match(/first/)&&(n.first=d)}return n.last=Math.max(n.last||0,n.prev&&n.prev+1||0),n.current=n.next?n.next-1:n.last||1,n.total=o?parseInt(o,10):null,n}}));var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(o("6WNe1"));o.register("jlF03",(function(e,t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=o?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(n,s,i):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(o("6WNe1")),i=(n=o("M5gCJ"))&&n.__esModule?n:{default:n};function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d="gotrue.user",p={},h=null,y={api:1,token:1,audience:1,url:1},v={api:1},g=function(){return"undefined"!=typeof window},m=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.url=t.apiURL,this.audience=n,this._processTokenResponse(r),h=this}var t,r,n;return t=e,n=[{key:"removeSavedSession",value:function(){g()&&localStorage.removeItem(d)}},{key:"recoverSession",value:function(t){if(h)return h;var r=g()&&localStorage.getItem(d);if(r)try{var n=JSON.parse(r),o=n.url,i=n.token,a=n.audience;return o&&i?new e(t||new s.default(o,{}),i,a)._saveUserData(n,!0):null}catch(e){return console.error(new Error("Gotrue-js: Error recovering session: ".concat(e))),null}return null}}],(r=[{key:"update",value:function(e){var t=this;return this._request("/user",{method:"PUT",body:JSON.stringify(e)}).then((function(e){return t._saveUserData(e)._refreshSavedSession()}))}},{key:"jwt",value:function(e){var t=this.tokenDetails();if(null==t)return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));var r=t.expires_at,n=t.refresh_token,o=t.access_token;return e||r-6e4<Date.now()?this._refreshToken(n):Promise.resolve(o)}},{key:"logout",value:function(){return this._request("/logout",{method:"POST"}).then(this.clearSession.bind(this)).catch(this.clearSession.bind(this))}},{key:"_refreshToken",value:function(e){var t=this;return p[e]?p[e]:p[e]=this.api.request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=refresh_token&refresh_token=".concat(e)}).then((function(r){return delete p[e],t._processTokenResponse(r),t._refreshSavedSession(),t.token.access_token})).catch((function(r){return delete p[e],t.clearSession(),Promise.reject(r)}))}},{key:"_request",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r.headers=r.headers||{};var n=r.audience||this.audience;return n&&(r.headers["X-JWT-AUD"]=n),this.jwt().then((function(n){return t.api.request(e,c({headers:Object.assign(r.headers,{Authorization:"Bearer ".concat(n)})},r)).catch((function(e){return e instanceof s.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message="".concat(e.json.error,": ").concat(e.json.error_description))),Promise.reject(e)}))}))}},{key:"getUserData",value:function(){return this._request("/user").then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this))}},{key:"_saveUserData",value:function(t,r){for(var n in t)n in e.prototype||n in y||(this[n]=t[n]);return r&&(this._fromStorage=!0),this}},{key:"_processTokenResponse",value:function(e){this.token=e;try{var t=JSON.parse(function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}var r=window.atob(t);try{return decodeURIComponent(escape(r))}catch(e){return r}}(e.access_token.split(".")[1]));this.token.expires_at=1e3*t.exp}catch(e){console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: ".concat(e)))}}},{key:"_refreshSavedSession",value:function(){return g()&&localStorage.getItem(d)&&this._saveSession(),this}},{key:"_saveSession",value:function(){return g()&&localStorage.setItem(d,JSON.stringify(this._details)),this}},{key:"tokenDetails",value:function(){return this.token}},{key:"clearSession",value:function(){e.removeSavedSession(),this.token=null,h=null}},{key:"admin",get:function(){return new i.default(this)}},{key:"_details",get:function(){var t={};for(var r in this)r in e.prototype||r in v||(t[r]=this[r]);return t}}])&&f(t.prototype,r),n&&f(t,n),e}();e.exports.default=m})),o.register("M5gCJ",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.user=t}var t,n,o;return t=e,(n=[{key:"listUsers",value:function(e){return this.user._request("/admin/users",{method:"GET",audience:e})}},{key:"getUser",value:function(e){return this.user._request("/admin/users/".concat(e.id))}},{key:"updateUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.user._request("/admin/users/".concat(e.id),{method:"PUT",body:JSON.stringify(t)})}},{key:"createUser",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.email=e,r.password=t,this.user._request("/admin/users",{method:"POST",body:JSON.stringify(r)})}},{key:"deleteUser",value:function(e){return this.user._request("/admin/users/".concat(e.id),{method:"DELETE"})}}])&&r(t.prototype,n),o&&r(t,o),e}();e.exports.default=n}));var u,c=(u=o("jlF03"))&&u.__esModule?u:{default:u};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=/^http:\/\//,h="/.netlify/identity",y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.APIUrl,n=void 0===r?h:r,o=t.audience,s=void 0===o?"":o,i=t.setCookie,u=void 0!==i&&i;f(this,e),n.match(p)&&console.warn("Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely."),s&&(this.audience=s),this.setCookie=u,this.api=new a.default(n)}var t,r,n;return t=e,(r=[{key:"_request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers=t.headers||{};var r=t.audience||this.audience;return r&&(t.headers["X-JWT-AUD"]=r),this.api.request(e,t).catch((function(e){return e instanceof a.JSONHTTPError&&e.json&&(e.json.msg?e.message=e.json.msg:e.json.error&&(e.message="".concat(e.json.error,": ").concat(e.json.error_description))),Promise.reject(e)}))}},{key:"settings",value:function(){return this._request("/settings")}},{key:"signup",value:function(e,t,r){return this._request("/signup",{method:"POST",body:JSON.stringify({email:e,password:t,data:r})})}},{key:"login",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=password&username=".concat(encodeURIComponent(e),"&password=").concat(encodeURIComponent(t))}).then((function(e){return c.default.removeSavedSession(),n.createUser(e,r)}))}},{key:"loginExternalUrl",value:function(e){return"".concat(this.api.apiURL,"/authorize?provider=").concat(e)}},{key:"confirm",value:function(e,t){return this._setRememberHeaders(t),this.verify("signup",e,t)}},{key:"requestPasswordRecovery",value:function(e){return this._request("/recover",{method:"POST",body:JSON.stringify({email:e})})}},{key:"recover",value:function(e,t){return this._setRememberHeaders(t),this.verify("recovery",e,t)}},{key:"acceptInvite",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/verify",{method:"POST",body:JSON.stringify({token:e,password:t,type:"signup"})}).then((function(e){return n.createUser(e,r)}))}},{key:"acceptInviteExternalUrl",value:function(e,t){return"".concat(this.api.apiURL,"/authorize?provider=").concat(e,"&invite_token=").concat(t)}},{key:"createUser",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this._setRememberHeaders(t);var r=new c.default(this.api,e,this.audience);return r.getUserData().then((function(e){return t&&e._saveSession(),e}))}},{key:"currentUser",value:function(){var e=c.default.recoverSession(this.api);return e&&this._setRememberHeaders(e._fromStorage),e}},{key:"verify",value:function(e,t,r){var n=this;return this._setRememberHeaders(r),this._request("/verify",{method:"POST",body:JSON.stringify({token:t,type:e})}).then((function(e){return n.createUser(e,r)}))}},{key:"_setRememberHeaders",value:function(e){this.setCookie&&(this.api.defaultHeaders=this.api.defaultHeaders||{},this.api.defaultHeaders["X-Use-Cookie"]=e?"1":"session")}}])&&d(t.prototype,r),n&&d(t,n),e}();let v;function g(){console.log("toggleExisting"),document.querySelector(".login-switch").classList.add("selected"),document.querySelector(".create-switch").classList.remove("selected"),document.querySelector(".login").classList.remove("hide"),document.querySelector(".signup").classList.add("hide"),document.querySelector(".recover-pass").classList.add("hide")}function m(){console.log("toggleCreate"),document.querySelector(".login-switch").classList.remove("selected"),document.querySelector(".create-switch").classList.add("selected"),document.querySelector(".signup").classList.remove("hide"),document.querySelector(".login").classList.add("hide")}function b(){console.log("forgot pass"),document.querySelector(".login").classList.add("hide"),document.querySelector(".recover-pass").classList.remove("hide")}s.default=y,"undefined"!=typeof window&&(window.GoTrue=y),window.addEventListener("DOMContentLoaded",(function(){document.querySelector(".login-switch").addEventListener("click",g),document.querySelector(".create-switch").addEventListener("click",m),document.querySelector(".create-switch").addEventListener("click",m),document.querySelector(".forgot-btn").addEventListener("click",b),document.querySelector(".forgot-back-btn").addEventListener("click",g)}));let O=new(e(s))({APIUrl:"https://serene-clarke-d069ee.netlify.app/.netlify/identity",setCookie:!0});function _(e){w("<p>Did you paste in your API endpoint?</p>",e)}function w(e,t){t.querySelector(".message").innerHTML=e}document.querySelector("form[name='signup']").addEventListener("submit",(e=>{if(e.preventDefault(),e.target.elements.password.value===e.target.elements.password2.value){console.log("succ");const t=e.target;O||_(t);const{email:r,password:n,name:o}=t.elements;O.signup(r.value,n.value,{data:{full_name:o.value}}).then((e=>{console.log(o.value),console.log(e),w(`<p>Created a user! </p><p>Response: </p><code>${JSON.stringify(e)}</code>`,t)})).catch((e=>{w(`Failed :( <code>${JSON.stringify(e)}</code>`,t),console.log(e)}))}else w("Passwords do not match",e.target),console.log("faill")})),document.querySelector("form[name='login']").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;O||_(t);const{email:r,password:n}=t.elements;O.login(r.value,n.value,!0).then((e=>{w("<p>Log in successful! </p>",t),console.log(e),v=O.currentUser(),localStorage.setItem("user",JSON.stringify(v)),window.location.href="/dashboard.html"})).catch((e=>{w("Failed to log in :",t),console.log(e)}))})),document.querySelector("form[name='recover-pass']").addEventListener("submit",(e=>{e.preventDefault();const t=e.target;O||_(t),O.currentUser()||function(e){w("<p>User not found</p>",e)}(t);const r=O.currentUser().email;O.requestPasswordRecovery(r).then((e=>{w("<p>Recovery email sent, check your inbox! </p>",t),console.log(e)})).catch((e=>{w("Something went wrong :(",t),console.log(e)}))}))}();
//# sourceMappingURL=login.8b365921.js.map
