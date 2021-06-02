// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4c3k5":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "69778ac0a72fa1025ca457d8554e30e3"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1AuA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gsap = require("gsap");
var _draggable = require("gsap/Draggable");
var _gotrueJs = require("gotrue-js");
var _gotrueJsDefault = parcelHelpers.interopDefault(_gotrueJs);
let user;
_gsap.gsap.registerPlugin(_draggable.Draggable);
window.addEventListener("DOMContentLoaded", initBaf);
function initBaf() {
    checkUser();
}
function setTool() {
}
function checkUser() {
    let auth = new _gotrueJsDefault.default({
        APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
        setCookie: true
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
    console.log(document.querySelector("form[name='florb-name']").elements.name.value);
    const test = true;
    const florbName = document.querySelector("form[name='florb-name']").elements.name.value;
    console.log(florbName);
    if (florbName === "") document.querySelector(".error-message").innerHTML = "Name your Florb!";
    else {
        const createdFlorbs = user.user_metadata.florbs;
        if (!checkFlorbExists(florbName, createdFlorbs)) {
            console.log("it doesnt");
            const newFlorb = {
                name: florbName,
                svg: str
            };
            if (user.user_metadata.florbs.length === 0) user.update({
                data: {
                    florbs: [
                        newFlorb
                    ]
                }
            }).then((user1)=>console.log(user1)
            );
            else user.update({
                data: {
                    florbs: [
                        ...user.user_metadata.florbs,
                        newFlorb
                    ]
                }
            }).then((user1)=>console.log(user1)
            );
        } else console.log("it dosedofasd");
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
var draggie = new Draggabilly(elem, {
});
var draggableElems = document.querySelectorAll(".draggable");
var draggies = [];
_draggable.Draggable.create(".drag", {
    bounds: document.getElementById("builder-con"),
    onDragStart: function() {
    },
    onDragEnd: function() {
        if (this.hitTest("#face-circle", "50%") && this.target.parentNode.id !== "face-svg") {
            console.log(this);
            document.querySelector("#face-svg").appendChild(this.target);
        } else if (!this.hitTest("#face-circle", "50%") && this.target.parentNode.id === "face-svg") {
            console.log(document.querySelector(`#${this.target.getAttribute("type")}`));
            document.querySelector(`#${this.target.getAttribute("type")}`).appendChild(this.target);
        }
    }
});
function checkFlorbExists(florbName, createdFlorbs) {
    let florbCheck = false;
    createdFlorbs.forEach((florb)=>{
        if (florb.name.toLowerCase() === florbName.toLowerCase()) florbCheck = true;
    });
    console.log(florbCheck);
    return florbCheck;
}
console.log(colors);
for (let color of colors){
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
    document.querySelector(".special-link-1").style.transform = "translateY(30px)";
    document.querySelector(".bottom-nav").classList.add("nav-1");
} else if (document.title === "Florbs | Games") {
    document.querySelector(".link-2").classList.add("selected");
    document.querySelector(".outer-2").classList.remove("hide");
    document.querySelector(".special-link-2").style.transform = "translateY(30px)";
    document.querySelector(".bottom-nav").classList.add("nav-2");
} else if (document.title === "Florbs | Builder") {
    document.querySelector(".link-3").classList.add("selected");
    document.querySelector(".outer-3").classList.remove("hide");
    document.querySelector(".special-link-3").style.transform = "translateY(30px)";
    document.querySelector(".bottom-nav").classList.add("nav-3");
} else if (document.title === "Florbs | Profile") {
    document.querySelector(".link-4").classList.add("selected");
    document.querySelector(".outer-4").classList.remove("hide");
    document.querySelector(".special-link-4").style.transform = "translateY(30px)";
    document.querySelector(".bottom-nav").classList.add("nav-4");
}
document.querySelector(".reset-button").addEventListener("click", resetThis);
function resetThis() {
    location.reload();
}

},{"gsap":"1iecp","gsap/Draggable":"7glZ8","gotrue-js":"67DNY","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"1iecp":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = global || self, factory(global.window = global.window || {
    }));
})(this, function(exports) {
    'use strict';
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }
    function _assertThisInitialized(self) {
        if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    }
    /*!
   * GSAP 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */ var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0
    }, _suppressOverwrites, _bigNum = 100000000, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString1(value) {
        return typeof value === "string";
    }, _isFunction = function _isFunction1(value) {
        return typeof value === "function";
    }, _isNumber = function _isNumber1(value) {
        return typeof value === "number";
    }, _isUndefined = function _isUndefined1(value) {
        return typeof value === "undefined";
    }, _isObject = function _isObject1(value) {
        return typeof value === "object";
    }, _isNotFalse = function _isNotFalse1(value) {
        return value !== false;
    }, _windowExists = function _windowExists1() {
        return typeof window !== "undefined";
    }, _isFuncOrString = function _isFuncOrString1(value) {
        return _isFunction(value) || _isString(value);
    }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
    }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {
    }, _installScope = {
    }, _coreReady, _install = function _install1(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
    }, _missingPlugin = function _missingPlugin1(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
    }, _warn = function _warn1(message, suppress) {
        return !suppress && console.warn(message);
    }, _addGlobal = function _addGlobal1(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
    }, _emptyFunc = function _emptyFunc1() {
        return 0;
    }, _reservedProps = {
    }, _lazyTweens = [], _lazyLookup = {
    }, _lastRenderedFrame, _plugins = {
    }, _effects = {
    }, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness1(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [
            targets
        ]);
        if (!(harnessPlugin = (target._gsap || {
        }).harness)) {
            i = _harnessPlugins.length;
            while((i--) && !_harnessPlugins[i].targetTest(target));
            harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        return targets;
    }, _getCache = function _getCache1(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
    }, _getProperty = function _getProperty1(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
    }, _forEachName = function _forEachName1(names, func) {
        return (names = names.split(",")).forEach(func) || names;
    }, _round = function _round1(value) {
        return Math.round(value * 100000) / 100000 || 0;
    }, _arrayContainsAny = function _arrayContainsAny1(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for(; toSearch.indexOf(toFind[i]) < 0 && (++i) < l;);
        return i < l;
    }, _parseVars = function _parseVars1(params, type, parent) {
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;
        isLegacy && (vars.duration = params[1]);
        vars.parent = parent;
        if (type) {
            irVars = vars;
            while(parent && !("immediateRender" in irVars)){
                irVars = parent.vars.defaults || {
                };
                parent = _isNotFalse(parent.vars.inherit) && parent.parent;
            }
            vars.immediateRender = _isNotFalse(irVars.immediateRender);
            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return vars;
    }, _lazyRender = function _lazyRender1() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {
        };
        _lazyTweens.length = 0;
        for(i = 0; i < l; i++){
            tween = a[i];
            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
    }, _lazySafeRender = function _lazySafeRender1(animation, time, suppressEvents, force) {
        _lazyTweens.length && _lazyRender();
        animation.render(time, suppressEvents, force);
        _lazyTweens.length && _lazyRender();
    }, _numericIfPossible = function _numericIfPossible1(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
    }, _passThrough = function _passThrough1(p) {
        return p;
    }, _setDefaults = function _setDefaults1(obj, defaults) {
        for(var p in defaults)p in obj || (obj[p] = defaults[p]);
        return obj;
    }, _setKeyframeDefaults = function _setKeyframeDefaults1(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }, _merge = function _merge1(base, toMerge) {
        for(var p in toMerge)base[p] = toMerge[p];
        return base;
    }, _mergeDeep = function _mergeDeep1(base, toMerge) {
        for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep1(base[p] || (base[p] = {
        }), toMerge[p]) : toMerge[p]);
        return base;
    }, _copyExcluding = function _copyExcluding1(obj, excluding) {
        var copy = {
        }, p;
        for(p in obj)p in excluding || (copy[p] = obj[p]);
        return copy;
    }, _inheritDefaults = function _inheritDefaults1(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
        if (_isNotFalse(vars.inherit)) while(parent){
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
        }
        return vars;
    }, _arraysMatch = function _arraysMatch1(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while(match && i-- && a1[i] === a2[i]);
        return i < 0;
    }, _addLinkedListItem = function _addLinkedListItem1(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) firstProp = "_first";
        if (lastProp === void 0) lastProp = "_last";
        var prev = parent[lastProp], t;
        if (sortBy) {
            t = child[sortBy];
            while(prev && prev[sortBy] > t)prev = prev._prev;
        }
        if (prev) {
            child._next = prev._next;
            prev._next = child;
        } else {
            child._next = parent[firstProp];
            parent[firstProp] = child;
        }
        if (child._next) child._next._prev = child;
        else parent[lastProp] = child;
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
    }, _removeLinkedListItem = function _removeLinkedListItem1(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) firstProp = "_first";
        if (lastProp === void 0) lastProp = "_last";
        var prev = child._prev, next = child._next;
        if (prev) prev._next = next;
        else if (parent[firstProp] === child) parent[firstProp] = next;
        if (next) next._prev = prev;
        else if (parent[lastProp] === child) parent[lastProp] = prev;
        child._next = child._prev = child.parent = null;
    }, _removeFromParent = function _removeFromParent1(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
        child._act = 0;
    }, _uncache = function _uncache1(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
            var a = animation;
            while(a){
                a._dirty = 1;
                a = a.parent;
            }
        }
        return animation;
    }, _recacheAncestors = function _recacheAncestors1(animation) {
        var parent = animation.parent;
        while(parent && parent.parent){
            parent._dirty = 1;
            parent.totalDuration();
            parent = parent.parent;
        }
        return animation;
    }, _hasNoPausedAncestors = function _hasNoPausedAncestors1(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors1(animation.parent);
    }, _elapsedCycleDuration = function _elapsedCycleDuration1(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
    }, _animationCycle = function _animationCycle1(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
    }, _parentToChildTotalTime = function _parentToChildTotalTime1(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
    }, _setEnd = function _setEnd1(animation) {
        return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
    }, _alignPlayhead = function _alignPlayhead1(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
            animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
            _setEnd(animation);
            parent._dirty || _uncache(parent, animation);
        }
        return animation;
    }, _postAddChecks = function _postAddChecks1(timeline, child) {
        var t;
        if (child._time || child._initted && !child._dur) {
            t = _parentToChildTotalTime(timeline.rawTime(), child);
            if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
        }
        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
            if (timeline._dur < timeline.duration()) {
                t = timeline;
                while(t._dp){
                    t.rawTime() >= 0 && t.totalTime(t._tTime);
                    t = t._dp;
                }
            }
            timeline._zTime = -_tinyNum;
        }
    }, _addToTimeline = function _addToTimeline1(timeline, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _round(position + child._delay);
        child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
        timeline._recent = child;
        skipChecks || _postAddChecks(timeline, child);
        return timeline;
    }, _scrollTrigger = function _scrollTrigger1(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
    }, _attemptInitTween = function _attemptInitTween1(tween, totalTime, force, suppressEvents) {
        _initTween(tween, totalTime);
        if (!tween._initted) return 1;
        if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
            _lazyTweens.push(tween);
            tween._lazy = [
                totalTime,
                suppressEvents
            ];
            return 1;
        }
    }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart1(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart1(parent));
    }, _renderZeroDurationTween = function _renderZeroDurationTween1(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
            tTime = _clamp(0, tween._tDur, totalTime);
            iteration = _animationCycle(tTime, repeatDelay);
            prevIteration = _animationCycle(tween._tTime, repeatDelay);
            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
            if (iteration !== prevIteration) {
                prevRatio = 1 - ratio;
                tween.vars.repeatRefresh && tween._initted && tween.invalidate();
            }
        }
        if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) return;
            prevIteration = tween._zTime;
            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
            suppressEvents || (suppressEvents = totalTime && !prevIteration);
            tween.ratio = ratio;
            tween._from && (ratio = 1 - ratio);
            tween._time = 0;
            tween._tTime = tTime;
            pt = tween._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                ratio && _removeFromParent(tween, 1);
                if (!suppressEvents) {
                    _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                    tween._prom && tween._prom();
                }
            }
        } else if (!tween._zTime) tween._zTime = totalTime;
    }, _findNextPauseTween = function _findNextPauseTween1(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
            child = animation._first;
            while(child && child._start <= time){
                if (!child._dur && child.data === "isPause" && child._start > prevTime) return child;
                child = child._next;
            }
        } else {
            child = animation._last;
            while(child && child._start >= time){
                if (!child._dur && child.data === "isPause" && child._start < prevTime) return child;
                child = child._prev;
            }
        }
    }, _setDuration = function _setDuration1(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 10000000000 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
    }, _onUpdateTotalDuration = function _onUpdateTotalDuration1(animation) {
        return animation instanceof Timeline1 ? _uncache(animation) : _setDuration(animation, animation._dur);
    }, _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc
    }, _parsePosition = function _parsePosition1(animation, position) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset;
        if (_isString(position) && (isNaN(position) || position in labels)) {
            i = position.charAt(0);
            if (i === "<" || i === ">") return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
            i = position.indexOf("=");
            if (i < 0) {
                position in labels || (labels[position] = clippedDuration);
                return labels[position];
            }
            offset = +(position.charAt(i - 1) + position.substr(i + 1));
            return i > 1 ? _parsePosition1(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
    }, _conditionalReturn = function _conditionalReturn1(value, func) {
        return value || value === 0 ? func(value) : func;
    }, _clamp = function _clamp1(min, max, value) {
        return value < min ? min : value > max ? max : value;
    }, getUnit = function getUnit1(value) {
        if (typeof value !== "string") return "";
        var v = _unitExp.exec(value);
        return v ? value.substr(v.index + v[0].length) : "";
    }, clamp = function clamp1(min, max, value) {
        return _conditionalReturn(value, function(v) {
            return _clamp(min, max, v);
        });
    }, _slice = [].slice, _isArrayLike = function _isArrayLike1(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
    }, _flatten = function _flatten1(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) accumulator = [];
        return ar.forEach(function(value) {
            var _accumulator;
            return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
    }, toArray = function toArray1(value, leaveStrings) {
        return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
            value
        ] : [];
    }, shuffle = function shuffle1(a) {
        return a.sort(function() {
            return 0.5 - Math.random();
        });
    }, distribute = function distribute1(v) {
        if (_isFunction(v)) return v;
        var vars = _isObject(v) ? v : {
            each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {
        }, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString(from)) ratioX = ratioY = ({
            center: 0.5,
            edges: 0.5,
            end: 1
        })[from] || 0;
        else if (!isDecimal && ratios) {
            ratioX = from[0];
            ratioY = from[1];
        }
        return function(i, target, a) {
            var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
            if (!distances) {
                wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                    1,
                    _bigNum
                ])[1];
                if (!wrapAt) {
                    max = -_bigNum;
                    while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                    wrapAt--;
                }
                distances = cache[l] = [];
                originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
                originY = ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
                max = 0;
                min = _bigNum;
                for(j = 0; j < l; j++){
                    x = j % wrapAt - originX;
                    y = originY - (j / wrapAt | 0);
                    distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                    d > max && (max = d);
                    d < min && (min = d);
                }
                from === "random" && shuffle(distances);
                distances.max = max - min;
                distances.min = min;
                distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
                distances.b = l < 0 ? base - l : base;
                distances.u = getUnit(vars.amount || vars.each) || 0;
                ease = ease && l < 0 ? _invertEase(ease) : ease;
            }
            l = (distances[i] - distances.min) / distances.max || 0;
            return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
    }, _roundModifier = function _roundModifier1(v) {
        var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
        return function(raw) {
            var n = Math.round(parseFloat(raw) / v) * v * p;
            return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
    }, snap = function snap1(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject(snapTo)) {
            radius = isArray = snapTo.radius || _bigNum;
            if (snapTo.values) {
                snapTo = toArray(snapTo.values);
                if (is2D = !_isNumber(snapTo[0])) radius *= radius;
            } else snapTo = _roundModifier(snapTo.increment);
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
            is2D = snapTo(raw);
            return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
            var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
            while(i--){
                if (is2D) {
                    dx = snapTo[i].x - x;
                    dy = snapTo[i].y - y;
                    dx = dx * dx + dy * dy;
                } else dx = Math.abs(snapTo[i] - x);
                if (dx < min) {
                    min = dx;
                    closest = i;
                }
            }
            closest = !radius || min <= radius ? snapTo[closest] : raw;
            return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
    }, random = function random1(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 0.00001, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
    }, pipe = function pipe1() {
        for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
        return function(value) {
            return functions.reduce(function(v, f) {
                return f(v);
            }, value);
        };
    }, unitize = function unitize1(func, unit) {
        return function(value) {
            return func(parseFloat(value)) + (unit || getUnit(value));
        };
    }, normalize = function normalize1(min, max, value) {
        return mapRange(min, max, 0, 1, value);
    }, _wrapArray = function _wrapArray1(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
            return a[~~wrapper(index)];
        });
    }, wrap = function wrap1(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap1(0, min.length), max) : _conditionalReturn(value, function(value1) {
            return (range + (value1 - min) % range) % range + min;
        });
    }, wrapYoyo = function wrapYoyo1(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo1(0, min.length - 1), max) : _conditionalReturn(value, function(value1) {
            value1 = (total + (value1 - min) % total) % total || 0;
            return min + (value1 > range ? total - value1 : value1);
        });
    }, _replaceRandom = function _replaceRandom1(value) {
        var prev = 0, s = "", i, nums, end, isArray;
        while(~(i = value.indexOf("random(", prev))){
            end = value.indexOf(")", i);
            isArray = value.charAt(i + 7) === "[";
            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 0.00001);
            prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
    }, mapRange = function mapRange1(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value1) {
            return outMin + ((value1 - inMin) / inRange * outRange || 0);
        });
    }, interpolate = function interpolate1(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p) {
            return (1 - p) * start + p * end;
        };
        if (!func) {
            var isString = _isString(start), master = {
            }, p, i, interpolators, l, il;
            progress === true && (mutate = 1) && (progress = null);
            if (isString) {
                start = {
                    p: start
                };
                end = {
                    p: end
                };
            } else if (_isArray(start) && !_isArray(end)) {
                interpolators = [];
                l = start.length;
                il = l - 2;
                for(i = 1; i < l; i++)interpolators.push(interpolate1(start[i - 1], start[i]));
                l--;
                func = function func1(p1) {
                    p1 *= l;
                    var i1 = Math.min(il, ~~p1);
                    return interpolators[i1](p1 - i1);
                };
                progress = end;
            } else if (!mutate) start = _merge(_isArray(start) ? [] : {
            }, start);
            if (!interpolators) {
                for(p in end)_addPropTween.call(master, start, p, "get", end[p]);
                func = function func1(p1) {
                    return _renderPropTweens(p1, master) || (isString ? start.p : start);
                };
            }
        }
        return _conditionalReturn(progress, func);
    }, _getLabelInDirection = function _getLabelInDirection1(timeline, fromTime, backward) {
        var labels = timeline.labels, min = _bigNum, p, distance, label;
        for(p in labels){
            distance = labels[p] - fromTime;
            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                label = p;
                min = distance;
            }
        }
        return label;
    }, _callback = function _callback1(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], params, scope;
        if (!callback) return;
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        return params ? callback.apply(scope, params) : callback.call(scope);
    }, _interrupt = function _interrupt1(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(false);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
    }, _quickTween, _createPlugin = function _createPlugin1(config) {
        config = !config.name && config["default"] || config;
        var name = config.name, isFunc = _isFunction(config), Plugin1 = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {
            },
            register: 0
        };
        _wake();
        if (config !== Plugin1) {
            if (_plugins[name]) return;
            _setDefaults(Plugin1, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
            _merge(Plugin1.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
            _plugins[Plugin1.prop = name] = Plugin1;
            if (config.targetTest) {
                _harnessPlugins.push(Plugin1);
                _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
        _addGlobal(name, Plugin1);
        config.register && config.register(gsap, Plugin1, PropTween);
    }, _255 = 255, _colorLookup = {
        aqua: [
            0,
            _255,
            _255
        ],
        lime: [
            0,
            _255,
            0
        ],
        silver: [
            192,
            192,
            192
        ],
        black: [
            0,
            0,
            0
        ],
        maroon: [
            128,
            0,
            0
        ],
        teal: [
            0,
            128,
            128
        ],
        blue: [
            0,
            0,
            _255
        ],
        navy: [
            0,
            0,
            128
        ],
        white: [
            _255,
            _255,
            _255
        ],
        olive: [
            128,
            128,
            0
        ],
        yellow: [
            _255,
            _255,
            0
        ],
        orange: [
            _255,
            165,
            0
        ],
        gray: [
            128,
            128,
            128
        ],
        purple: [
            128,
            0,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        red: [
            _255,
            0,
            0
        ],
        pink: [
            _255,
            192,
            203
        ],
        cyan: [
            0,
            _255,
            _255
        ],
        transparent: [
            _255,
            _255,
            _255,
            0
        ]
    }, _hue = function _hue1(h, m1, m2) {
        h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
    }, splitColor = function splitColor1(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [
            v >> 16,
            v >> 8 & _255,
            v & _255
        ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
            if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
            if (_colorLookup[v]) a = _colorLookup[v];
            else if (v.charAt(0) === "#") {
                if (v.length < 6) {
                    r = v.charAt(1);
                    g = v.charAt(2);
                    b = v.charAt(3);
                    v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
                }
                if (v.length === 9) {
                    a = parseInt(v.substr(1, 6), 16);
                    return [
                        a >> 16,
                        a >> 8 & _255,
                        a & _255,
                        parseInt(v.substr(7), 16) / 255
                    ];
                }
                v = parseInt(v.substr(1), 16);
                a = [
                    v >> 16,
                    v >> 8 & _255,
                    v & _255
                ];
            } else if (v.substr(0, 3) === "hsl") {
                a = wasHSL = v.match(_strictNumExp);
                if (!toHSL) {
                    h = +a[0] % 360 / 360;
                    s = +a[1] / 100;
                    l = +a[2] / 100;
                    g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
                    r = l * 2 - g;
                    a.length > 3 && (a[3] *= 1);
                    a[0] = _hue(h + 1 / 3, r, g);
                    a[1] = _hue(h, r, g);
                    a[2] = _hue(h - 1 / 3, r, g);
                } else if (~v.indexOf("=")) {
                    a = v.match(_numExp);
                    forceAlpha && a.length < 4 && (a[3] = 1);
                    return a;
                }
            } else a = v.match(_strictNumExp) || _colorLookup.transparent;
            a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
            r = a[0] / _255;
            g = a[1] / _255;
            b = a[2] / _255;
            max = Math.max(r, g, b);
            min = Math.min(r, g, b);
            l = (max + min) / 2;
            if (max === min) h = s = 0;
            else {
                d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                h *= 60;
            }
            a[0] = ~~(h + 0.5);
            a[1] = ~~(s * 100 + 0.5);
            a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
    }, _colorOrderData = function _colorOrderData1(v) {
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v1) {
            var a = v1.match(_numWithUnitExp) || [];
            values.push.apply(values, a);
            c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
    }, _formatColors = function _formatColors1(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
        if (!colors) return s;
        colors = colors.map(function(color) {
            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
            d = _colorOrderData(s);
            c = orderMatchData.c;
            if (c.join(result) !== d.c.join(result)) {
                shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                l = shell.length - 1;
                for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
        }
        if (!shell) {
            shell = s.split(_colorExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + colors[i];
        }
        return result + shell[l];
    }, _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for(p in _colorLookup)s += "|" + p + "\\b";
        return new RegExp(s + ")", "gi");
    }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter1(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
            toHSL = _hslExp.test(combined);
            a[1] = _formatColors(a[1], toHSL);
            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
            return true;
        }
    }, _tickerActive, _ticker = function() {
        var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick1(v) {
            var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
            elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
                frame = ++_self.frame;
                _delta = time - _self.time * 1000;
                _self.time = time = time / 1000;
                _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                dispatch = 1;
            }
            manual || (_id = _req(_tick1));
            if (dispatch) for(_i = 0; _i < _listeners.length; _i++)_listeners[_i](time, _delta, frame, v);
        };
        _self = {
            time: 0,
            frame: 0,
            tick: function tick() {
                _tick(true);
            },
            deltaRatio: function deltaRatio(fps) {
                return _delta / (1000 / (fps || 60));
            },
            wake: function wake() {
                if (_coreReady) {
                    if (!_coreInitted && _windowExists()) {
                        _win = _coreInitted = window;
                        _doc = _win.document || {
                        };
                        _globals.gsap = gsap;
                        (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                        _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {
                        });
                        _raf = _win.requestAnimationFrame;
                    }
                    _id && _self.sleep();
                    _req = _raf || function(f) {
                        return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                    };
                    _tickerActive = 1;
                    _tick(2);
                }
            },
            sleep: function sleep() {
                (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
                _tickerActive = 0;
                _req = _emptyFunc;
            },
            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                _lagThreshold = threshold || 1 / _tinyNum;
                _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
            },
            fps: function fps(_fps) {
                _gap = 1000 / (_fps || 240);
                _nextTime = _self.time * 1000 + _gap;
            },
            add: function add(callback) {
                _listeners.indexOf(callback) < 0 && _listeners.push(callback);
                _wake();
            },
            remove: function remove(callback) {
                var i;
                ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
            },
            _listeners: _listeners
        };
        return _self;
    }(), _wake = function _wake1() {
        return !_tickerActive && _ticker.wake();
    }, _easeMap = {
    }, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString1(value) {
        var obj = {
        }, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for(; i < l; i++){
            val = split[i];
            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
            parsedVal = val.substr(0, index);
            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
            key = val.substr(index + 1).trim();
        }
        return obj;
    }, _valueInParentheses = function _valueInParentheses1(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
    }, _configEaseFromString = function _configEaseFromString1(name) {
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
            _parseObjectInString(split[1])
        ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
    }, _invertEase = function _invertEase1(ease) {
        return function(p) {
            return 1 - ease(1 - p);
        };
    }, _propagateYoyoEase = function _propagateYoyoEase1(timeline, isYoyo) {
        var child = timeline._first, ease;
        while(child){
            if (child instanceof Timeline1) _propagateYoyoEase1(child, isYoyo);
            else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
                if (child.timeline) _propagateYoyoEase1(child.timeline, isYoyo);
                else {
                    ease = child._ease;
                    child._ease = child._yEase;
                    child._yEase = ease;
                    child._yoyo = isYoyo;
                }
            }
            child = child._next;
        }
    }, _parseEase = function _parseEase1(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
    }, _insertEase = function _insertEase1(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) easeOut = function easeOut1(p) {
            return 1 - easeIn(1 - p);
        };
        if (easeInOut === void 0) easeInOut = function easeInOut1(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
        var ease = {
            easeIn: easeIn,
            easeOut: easeOut,
            easeInOut: easeInOut
        }, lowercaseName;
        _forEachName(names, function(name) {
            _easeMap[name] = _globals[name] = ease;
            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
            for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
        });
        return ease;
    }, _easeInOutFromOut = function _easeInOutFromOut1(easeOut) {
        return function(p) {
            return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
    }, _configElastic = function _configElastic1(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut1(p) {
            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude1, period1) {
            return _configElastic1(type, amplitude1, period1);
        };
        return ease;
    }, _configBack = function _configBack1(type, overshoot) {
        if (overshoot === void 0) overshoot = 1.70158;
        var easeOut = function easeOut1(p) {
            return p ? (--p) * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
            return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot1) {
            return _configBack1(type, overshoot1);
        };
        return ease;
    };
    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
            return Math.pow(p, power);
        } : function(p) {
            return p;
        }, function(p) {
            return 1 - Math.pow(1 - p, power);
        }, function(p) {
            return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
    });
    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
    (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut1(p) {
            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
            return 1 - easeOut(1 - p);
        }, easeOut);
    })(7.5625, 2.75);
    _insertEase("Expo", function(p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
    });
    _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
    });
    _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
    });
    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
            if (steps === void 0) steps = 1;
            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
            return function(p) {
                return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
            };
        }
    };
    _defaults.ease = _easeMap["quad.out"];
    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
        return _callbackNames += name + "," + name + "Params,";
    });
    var GSCache = function GSCache1(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
    };
    var Animation1 = function() {
        function Animation2(vars, time) {
            var parent = vars.parent || _globalTimeline;
            this.vars = vars;
            this._delay = +vars.delay || 0;
            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
                this._rDelay = vars.repeatDelay || 0;
                this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
            }
            this._ts = 1;
            _setDuration(this, +vars.duration, 1, 1);
            this.data = vars.data;
            _tickerActive || _ticker.wake();
            parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
            vars.reversed && this.reverse();
            vars.paused && this.paused(true);
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
            if (value || value === 0) {
                this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                this._delay = value;
                return this;
            }
            return this._delay;
        };
        _proto.duration = function duration(value) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
            if (!arguments.length) return this._tDur;
            this._dirty = 0;
            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
            _wake();
            if (!arguments.length) return this._tTime;
            var parent = this._dp;
            if (parent && parent.smoothChildTiming && this._ts) {
                _alignPlayhead(this, _totalTime);
                !parent._dp || parent.parent || _postAddChecks(parent, this);
                while(parent.parent){
                    if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                    parent = parent.parent;
                }
                if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
            }
            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                this._ts || (this._pTime = _totalTime);
                _lazySafeRender(this, _totalTime, suppressEvents);
            }
            return this;
        };
        _proto.time = function time(value, suppressEvents) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        };
        _proto.progress = function progress(value, suppressEvents) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
            var cycleDuration = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value) {
            if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
            if (this._rts === value) return this;
            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
            this._rts = +value || 0;
            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
            return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
        };
        _proto.paused = function paused(value) {
            if (!arguments.length) return this._ps;
            if (this._ps !== value) {
                this._ps = value;
                if (value) {
                    this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                    this._ts = this._act = 0;
                } else {
                    _wake();
                    this._ts = this._rts;
                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum);
                }
            }
            return this;
        };
        _proto.startTime = function startTime(value) {
            if (arguments.length) {
                this._start = value;
                var parent = this.parent || this._dp;
                parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                return this;
            }
            return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
            var parent = this.parent || this._dp;
            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.globalTime = function globalTime(rawTime1) {
            var animation = this, time1 = arguments.length ? rawTime1 : animation.rawTime();
            while(animation){
                time1 = animation._start + time1 / (animation._ts || 1);
                animation = animation._dp;
            }
            return time1;
        };
        _proto.repeat = function repeat(value) {
            if (arguments.length) {
                this._repeat = value === Infinity ? -2 : value;
                return _onUpdateTotalDuration(this);
            }
            return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
            if (arguments.length) {
                this._rDelay = value;
                return _onUpdateTotalDuration(this);
            }
            return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
            if (arguments.length) {
                this._yoyo = value;
                return this;
            }
            return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
            return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };
        _proto.play = function play(from, suppressEvents) {
            from != null && this.seek(from, suppressEvents);
            return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
            from != null && this.seek(from || this.totalDuration(), suppressEvents);
            return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
            atTime != null && this.seek(atTime, suppressEvents);
            return this.paused(true);
        };
        _proto.resume = function resume() {
            return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
            if (arguments.length) {
                !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
                return this;
            }
            return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
            this._initted = this._act = 0;
            this._zTime = -_tinyNum;
            return this;
        };
        _proto.isActive = function isActive() {
            var parent = this.parent || this._dp, start = this._start, rawTime1;
            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime1 = parent.rawTime(true)) >= start && rawTime1 < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback, params) {
            var vars = this.vars;
            if (arguments.length > 1) {
                if (!callback) delete vars[type];
                else {
                    vars[type] = callback;
                    params && (vars[type + "Params"] = params);
                    type === "onUpdate" && (this._onUpdate = callback);
                }
                return this;
            }
            return vars[type];
        };
        _proto.then = function then(onFulfilled) {
            var self = this;
            return new Promise(function(resolve) {
                var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve1() {
                    var _then = self.then;
                    self.then = null;
                    _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                    resolve(f);
                    self.then = _then;
                };
                if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
                else self._prom = _resolve;
            });
        };
        _proto.kill = function kill() {
            _interrupt(this);
        };
        return Animation2;
    }();
    _setDefaults(Animation1.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
    });
    var Timeline1 = function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, time) {
            var _this;
            if (vars === void 0) vars = {
            };
            _this = _Animation.call(this, vars, time) || this;
            _this.labels = {
            };
            _this.smoothChildTiming = !!vars.smoothChildTiming;
            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
            _this._sort = _isNotFalse(vars.sortChildren);
            _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
            return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
            new Tween1(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
            return this;
        };
        _proto2.from = function from(targets, vars, position) {
            new Tween1(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
            return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
            new Tween1(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
            return this;
        };
        _proto2.set = function set(targets, vars, position) {
            vars.duration = 0;
            vars.parent = this;
            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
            vars.immediateRender = !!vars.immediateRender;
            new Tween1(targets, vars, _parsePosition(this, position), 1);
            return this;
        };
        _proto2.call = function call(callback, params, position) {
            return _addToTimeline(this, Tween1.delayedCall(0, callback, params), _parsePosition(this, position));
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.duration = duration;
            vars.stagger = vars.stagger || stagger;
            vars.onComplete = onCompleteAll;
            vars.onCompleteParams = onCompleteAllParams;
            vars.parent = this;
            new Tween1(targets, vars, _parsePosition(this, position));
            return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
            vars.runBackwards = 1;
            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
            toVars.startAt = fromVars;
            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
            if (tTime !== this._tTime || force || crossingStart) {
                if (prevTime !== this._time && dur) {
                    tTime += this._time - prevTime;
                    totalTime += this._time - prevTime;
                }
                time = tTime;
                prevStart = this._start;
                timeScale = this._ts;
                prevPaused = !timeScale;
                if (crossingStart) {
                    dur || (prevTime = this._zTime);
                    (totalTime || !suppressEvents) && (this._zTime = totalTime);
                }
                if (this._repeat) {
                    yoyo = this._yoyo;
                    cycleDuration = dur + this._rDelay;
                    if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                    time = _round(tTime % cycleDuration);
                    if (tTime === tDur) {
                        iteration = this._repeat;
                        time = dur;
                    } else {
                        iteration = ~~(tTime / cycleDuration);
                        if (iteration && iteration === tTime / cycleDuration) {
                            time = dur;
                            iteration--;
                        }
                        time > dur && (time = dur);
                    }
                    prevIteration = _animationCycle(this._tTime, cycleDuration);
                    !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
                    if (yoyo && iteration & 1) {
                        time = dur - time;
                        isYoyo = 1;
                    }
                    if (iteration !== prevIteration && !this._lock) {
                        var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                        iteration < prevIteration && (rewinding = !rewinding);
                        prevTime = rewinding ? 0 : dur;
                        this._lock = 1;
                        this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                        !suppressEvents && this.parent && _callback(this, "onRepeat");
                        this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                        if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        dur = this._dur;
                        tDur = this._tDur;
                        if (doesWrap) {
                            this._lock = 2;
                            prevTime = rewinding ? dur : -0.0001;
                            this.render(prevTime, true);
                        }
                        this._lock = 0;
                        if (!this._ts && !prevPaused) return this;
                        _propagateYoyoEase(this, isYoyo);
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2) {
                    pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
                    if (pauseTween) tTime -= time - (time = pauseTween._start);
                }
                this._tTime = tTime;
                this._time = time;
                this._act = !timeScale;
                if (!this._initted) {
                    this._onUpdate = this.vars.onUpdate;
                    this._initted = 1;
                    this._zTime = totalTime;
                    prevTime = 0;
                }
                !prevTime && time && !suppressEvents && _callback(this, "onStart");
                if (time >= prevTime && totalTime >= 0) {
                    child = this._first;
                    while(child){
                        next = child._next;
                        if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                            if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                            if (time !== this._time || !this._ts && !prevPaused) {
                                pauseTween = 0;
                                next && (tTime += this._zTime = -_tinyNum);
                                break;
                            }
                        }
                        child = next;
                    }
                } else {
                    child = this._last;
                    var adjustedTime = totalTime < 0 ? totalTime : time;
                    while(child){
                        next = child._prev;
                        if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                            if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                            if (time !== this._time || !this._ts && !prevPaused) {
                                pauseTween = 0;
                                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                                break;
                            }
                        }
                        child = next;
                    }
                }
                if (pauseTween && !suppressEvents) {
                    this.pause();
                    pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                    if (this._ts) {
                        this._start = prevStart;
                        _setEnd(this);
                        return this.render(totalTime, suppressEvents, force);
                    }
                }
                this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
                    if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                        if (!this._lock) {
                            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                            }
                        }
                    }
                }
            }
            return this;
        };
        _proto2.add = function add(child, position) {
            var _this2 = this;
            _isNumber(position) || (position = _parsePosition(this, position));
            if (!(child instanceof Animation1)) {
                if (_isArray(child)) {
                    child.forEach(function(obj) {
                        return _this2.add(obj, position);
                    });
                    return this;
                }
                if (_isString(child)) return this.addLabel(child, position);
                if (_isFunction(child)) child = Tween1.delayedCall(0, child);
                else return this;
            }
            return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
            if (nested === void 0) nested = true;
            if (tweens === void 0) tweens = true;
            if (timelines === void 0) timelines = true;
            if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
            var a = [], child = this._first;
            while(child){
                if (child._start >= ignoreBeforeTime) {
                    if (child instanceof Tween1) tweens && a.push(child);
                    else {
                        timelines && a.push(child);
                        nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                    }
                }
                child = child._next;
            }
            return a;
        };
        _proto2.getById = function getById(id) {
            var animations = this.getChildren(1, 1, 1), i = animations.length;
            while(i--){
                if (animations[i].vars.id === id) return animations[i];
            }
        };
        _proto2.remove = function remove(child) {
            if (_isString(child)) return this.removeLabel(child);
            if (_isFunction(child)) return this.killTweensOf(child);
            _removeLinkedListItem(this, child);
            if (child === this._recent) this._recent = this._last;
            return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
            if (!arguments.length) return this._tTime;
            this._forcing = 1;
            if (!this._dp && this._ts) this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
            this._forcing = 0;
            return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
            this.labels[label] = _parsePosition(this, position);
            return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
            delete this.labels[label];
            return this;
        };
        _proto2.addPause = function addPause(position, callback, params) {
            var t = Tween1.delayedCall(0, callback || _emptyFunc, params);
            t.data = "isPause";
            this._hasPause = 1;
            return _addToTimeline(this, t, _parsePosition(this, position));
        };
        _proto2.removePause = function removePause(position) {
            var child = this._first;
            position = _parsePosition(this, position);
            while(child){
                if (child._start === position && child.data === "isPause") _removeFromParent(child);
                child = child._next;
            }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
            var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
            while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
            return this;
        };
        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
            var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
            while(child){
                if (child instanceof Tween1) {
                    if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
                } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
                child = child._next;
            }
            return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
            vars = vars || {
            };
            var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween1.to(tl, _setDefaults({
                ease: vars.ease || "none",
                lazy: false,
                immediateRender: false,
                time: endTime,
                overwrite: "auto",
                duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                onStart: function onStart() {
                    tl.pause();
                    var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    _onStart && _onStart.apply(tween, onStartParams || []);
                }
            }, vars));
            return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
            return this.tweenTo(toPosition, _setDefaults({
                startAt: {
                    time: _parsePosition(this, fromPosition)
                }
            }, vars));
        };
        _proto2.recent = function recent() {
            return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
            if (afterTime === void 0) afterTime = this._time;
            return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
            if (beforeTime === void 0) beforeTime = this._time;
            return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
            if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
            var child = this._first, labels = this.labels, p;
            while(child){
                if (child._start >= ignoreBeforeTime) {
                    child._start += amount;
                    child._end += amount;
                }
                child = child._next;
            }
            if (adjustLabels) {
                for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
            }
            return _uncache(this);
        };
        _proto2.invalidate = function invalidate() {
            var child = this._first;
            this._lock = 0;
            while(child){
                child.invalidate();
                child = child._next;
            }
            return _Animation.prototype.invalidate.call(this);
        };
        _proto2.clear = function clear(includeLabels) {
            if (includeLabels === void 0) includeLabels = true;
            var child = this._first, next;
            while(child){
                next = child._next;
                this.remove(child);
                child = next;
            }
            this._dp && (this._time = this._tTime = this._pTime = 0);
            includeLabels && (this.labels = {
            });
            return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
            var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
            if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
            if (self._dirty) {
                parent = self.parent;
                while(child){
                    prev = child._prev;
                    child._dirty && child.totalDuration();
                    start = child._start;
                    if (start > prevStart && self._sort && child._ts && !self._lock) {
                        self._lock = 1;
                        _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                    } else prevStart = start;
                    if (start < 0 && child._ts) {
                        max -= start;
                        if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                            self._start += start / self._ts;
                            self._time -= start;
                            self._tTime -= start;
                        }
                        self.shiftChildren(-start, false, -Infinity);
                        prevStart = 0;
                    }
                    child._end > max && child._ts && (max = child._end);
                    child = prev;
                }
                _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                self._dirty = 0;
            }
            return self._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
            if (_globalTimeline._ts) {
                _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                _lastRenderedFrame = _ticker.frame;
            }
            if (_ticker.frame >= _nextGCFrame) {
                _nextGCFrame += _config.autoSleep || 120;
                var child = _globalTimeline._first;
                if (!child || !child._ts) {
                    if (_config.autoSleep && _ticker._listeners.length < 2) {
                        while(child && !child._ts)child = child._next;
                        child || _ticker.sleep();
                    }
                }
            }
        };
        return Timeline2;
    }(Animation1);
    _setDefaults(Timeline1.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var _addComplexStringPropTween = function _addComplexStringPropTween1(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
        if (stringFilter) {
            a = [
                start,
                end
            ];
            stringFilter(a, target, prop);
            start = a[0];
            end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while(result = _complexStringNumExp.exec(end)){
            endNum = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(") color = 1;
            if (endNum !== startNums[matchIndex++]) {
                startNum = parseFloat(startNums[matchIndex - 1]) || 0;
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    s: startNum,
                    c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                    m: color && color < 4 ? Math.round : 0
                };
                index = _complexStringNumExp.lastIndex;
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) pt.e = 0;
        this._pt = pt;
        return pt;
    }, _addPropTween = function _addPropTween1(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString(end)) {
            if (~end.indexOf("random(")) end = _replaceRandom(end);
            if (end.charAt(1) === "=") end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        }
        if (parsedStart !== end) {
            if (!isNaN(parsedStart * end)) {
                pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
                funcParam && (pt.fp = funcParam);
                modifier && pt.modifier(modifier, this, target);
                return this._pt = pt;
            }
            !currentValue && !(prop in target) && _missingPlugin(prop, end);
            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
    }, _processVars = function _processVars1(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        var copy = {
        }, p;
        for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        return copy;
    }, _checkPlugin = function _checkPlugin1(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
            if (tween !== _quickTween) {
                ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
                i = plugin._props.length;
                while(i--)ptLookup[plugin._props[i]] = pt;
            }
        }
        return plugin;
    }, _overwritingTween, _initTween = function _initTween1(tween, time) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
            yoyoEase = tween._yEase;
            tween._yEase = tween._ease;
            tween._ease = yoyoEase;
        }
        if (!tl) {
            harness = targets[0] ? _getCache(targets[0]).harness : 0;
            harnessVars = harness && vars[harness.prop];
            cleanVars = _copyExcluding(vars, _reservedProps);
            prevStartAt && prevStartAt.render(-1, true).kill();
            if (startAt) {
                _removeFromParent(tween._startAt = Tween1.set(targets, _setDefaults({
                    data: "isStart",
                    overwrite: false,
                    parent: parent,
                    immediateRender: true,
                    lazy: _isNotFalse(lazy),
                    startAt: null,
                    delay: 0,
                    onUpdate: onUpdate,
                    onUpdateParams: onUpdateParams,
                    callbackScope: callbackScope,
                    stagger: 0
                }, startAt)));
                if (immediateRender) {
                    if (time > 0) autoRevert || (tween._startAt = 0);
                    else if (dur && !(time < 0 && prevStartAt)) {
                        time && (tween._zTime = time);
                        return;
                    }
                } else if (autoRevert === false) tween._startAt = 0;
            } else if (runBackwards && dur) {
                if (prevStartAt) !autoRevert && (tween._startAt = 0);
                else {
                    time && (immediateRender = false);
                    p = _setDefaults({
                        overwrite: false,
                        data: "isFromStart",
                        lazy: immediateRender && _isNotFalse(lazy),
                        immediateRender: immediateRender,
                        stagger: 0,
                        parent: parent
                    }, cleanVars);
                    harnessVars && (p[harness.prop] = harnessVars);
                    _removeFromParent(tween._startAt = Tween1.set(targets, p));
                    if (!immediateRender) _initTween1(tween._startAt, _tinyNum);
                    else if (!time) return;
                }
            }
            tween._pt = 0;
            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
            for(i = 0; i < targets.length; i++){
                target = targets[i];
                gsData = target._gsap || _harness(targets)[i]._gsap;
                tween._ptLookup[i] = ptLookup = {
                };
                _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
                index = fullTargets === targets ? i : fullTargets.indexOf(target);
                if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                    tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                    plugin._props.forEach(function(name) {
                        ptLookup[name] = pt;
                    });
                    plugin.priority && (hasPriority = 1);
                }
                if (!harness || harnessVars) {
                    for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                    else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
                tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                if (autoOverwrite && tween._pt) {
                    _overwritingTween = tween;
                    _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));
                    overwritten = !tween.parent;
                    _overwritingTween = 0;
                }
                tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
            }
            hasPriority && _sortPropTweensByPriority(tween);
            tween._onInit && tween._onInit(tween);
        }
        tween._from = !tl && !!vars.runBackwards;
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
    }, _addAliasesToVars = function _addAliasesToVars1(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) return vars;
        copy = _merge({
        }, vars);
        for(p in propertyAliases)if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while(i--)copy[aliases[i]] = copy[p];
        }
        return copy;
    }, _parseFuncOrString = function _parseFuncOrString1(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
    }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
    var Tween1 = function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, time, skipInherit) {
            var _this3;
            if (typeof vars === "number") {
                time.duration = vars;
                vars = time;
                time = null;
            }
            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
                targets
            ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
            _this3._ptLookup = [];
            _this3._overwrite = overwrite;
            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                vars = _this3.vars;
                tl = _this3.timeline = new Timeline1({
                    data: "nested",
                    defaults: defaults || {
                    }
                });
                tl.kill();
                tl.parent = tl._dp = _assertThisInitialized(_this3);
                tl._start = 0;
                if (keyframes) {
                    _setDefaults(tl.vars.defaults, {
                        ease: "none"
                    });
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                } else {
                    l = parsedTargets.length;
                    staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
                    if (_isObject(stagger)) {
                        for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {
                            });
                            staggerVarsToMerge[p] = stagger[p];
                        }
                    }
                    for(i = 0; i < l; i++){
                        copy = {
                        };
                        for(p in vars)if (_staggerPropsToSkip.indexOf(p) < 0) copy[p] = vars[p];
                        copy.stagger = 0;
                        yoyoEase && (copy.yoyoEase = yoyoEase);
                        staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                        curTarget = parsedTargets[i];
                        copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                        copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                        if (!stagger && l === 1 && copy.delay) {
                            _this3._delay = delay = copy.delay;
                            _this3._start += delay;
                            copy.delay = 0;
                        }
                        tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
                    }
                    tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
                }
                duration || _this3.duration(duration = tl.duration());
            } else _this3.timeline = 0;
            if (overwrite === true && !_suppressOverwrites) {
                _overwritingTween = _assertThisInitialized(_this3);
                _globalTimeline.killTweensOf(parsedTargets);
                _overwritingTween = 0;
            }
            parent && _postAddChecks(parent, _assertThisInitialized(_this3));
            if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
                _this3._tTime = -_tinyNum;
                _this3.render(Math.max(0, -delay));
            }
            scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
            return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render(totalTime, suppressEvents, force) {
            var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
            if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
            else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
                time = tTime;
                timeline = this.timeline;
                if (this._repeat) {
                    cycleDuration = dur + this._rDelay;
                    if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                    time = _round(tTime % cycleDuration);
                    if (tTime === tDur) {
                        iteration = this._repeat;
                        time = dur;
                    } else {
                        iteration = ~~(tTime / cycleDuration);
                        if (iteration && iteration === tTime / cycleDuration) {
                            time = dur;
                            iteration--;
                        }
                        time > dur && (time = dur);
                    }
                    isYoyo = this._yoyo && iteration & 1;
                    if (isYoyo) {
                        yoyoEase = this._yEase;
                        time = dur - time;
                    }
                    prevIteration = _animationCycle(this._tTime, cycleDuration);
                    if (time === prevTime && !force && this._initted) return this;
                    if (iteration !== prevIteration) {
                        timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                        if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                            this._lock = force = 1;
                            this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                        }
                    }
                }
                if (!this._initted) {
                    if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                        this._tTime = 0;
                        return this;
                    }
                    if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
                }
                this._tTime = tTime;
                this._time = time;
                if (!this._act && this._ts) {
                    this._act = 1;
                    this._lazy = 0;
                }
                this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                if (this._from) this.ratio = ratio = 1 - ratio;
                time && !prevTime && !suppressEvents && _callback(this, "onStart");
                pt = this._pt;
                while(pt){
                    pt.r(ratio, pt.d);
                    pt = pt._next;
                }
                timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                if (this._onUpdate && !suppressEvents) {
                    totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
                    _callback(this, "onUpdate");
                }
                this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                    totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                    (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                        _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                        this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                    }
                }
            }
            return this;
        };
        _proto3.targets = function targets() {
            return this._targets;
        };
        _proto3.invalidate = function invalidate() {
            this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
            this._ptLookup = [];
            this.timeline && this.timeline.invalidate();
            return _Animation2.prototype.invalidate.call(this);
        };
        _proto3.kill = function kill(targets1, vars) {
            if (vars === void 0) vars = "all";
            if (!targets1 && (!vars || vars === "all")) {
                this._lazy = this._pt = 0;
                return this.parent ? _interrupt(this) : this;
            }
            if (this.timeline) {
                var tDur = this.timeline.totalDuration();
                this.timeline.killTweensOf(targets1, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
                this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
                return this;
            }
            var parsedTargets = this._targets, killingTargets = targets1 ? toArray(targets1) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
                vars === "all" && (this._pt = 0);
                return _interrupt(this);
            }
            overwrittenProps = this._op = this._op || [];
            if (vars !== "all") {
                if (_isString(vars)) {
                    p = {
                    };
                    _forEachName(vars, function(name) {
                        return p[name] = 1;
                    });
                    vars = p;
                }
                vars = _addAliasesToVars(parsedTargets, vars);
            }
            i = parsedTargets.length;
            while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                    overwrittenProps[i] = vars;
                    props = curLookup;
                    curOverwriteProps = {
                    };
                } else {
                    curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {
                    };
                    props = vars;
                }
                for(p in props){
                    pt = curLookup && curLookup[p];
                    if (pt) {
                        if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                        delete curLookup[p];
                    }
                    if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
                }
            }
            this._initted && !this._pt && firstPT && _interrupt(this);
            return this;
        };
        Tween2.to = function to(targets1, vars) {
            return new Tween2(targets1, vars, arguments[2]);
        };
        Tween2.from = function from(targets1, vars) {
            return new Tween2(targets1, _parseVars(arguments, 1));
        };
        Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
            return new Tween2(callback, 0, {
                immediateRender: false,
                lazy: false,
                overwrite: false,
                delay: delay,
                onComplete: callback,
                onReverseComplete: callback,
                onCompleteParams: params,
                onReverseCompleteParams: params,
                callbackScope: scope
            });
        };
        Tween2.fromTo = function fromTo(targets1, fromVars, toVars) {
            return new Tween2(targets1, _parseVars(arguments, 2));
        };
        Tween2.set = function set(targets1, vars) {
            vars.duration = 0;
            vars.repeatDelay || (vars.repeat = 0);
            return new Tween2(targets1, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets1, props, onlyActive) {
            return _globalTimeline.killTweensOf(targets1, props, onlyActive);
        };
        return Tween2;
    }(Animation1);
    _setDefaults(Tween1.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
        Tween1[name] = function() {
            var tl = new Timeline1(), params = _slice.call(arguments, 0);
            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
            return tl[name].apply(tl, params);
        };
    });
    var _setterPlain = function _setterPlain1(target, property, value) {
        return target[property] = value;
    }, _setterFunc = function _setterFunc1(target, property, value) {
        return target[property](value);
    }, _setterFuncWithParam = function _setterFuncWithParam1(target, property, value, data) {
        return target[property](data.fp, value);
    }, _setterAttribute = function _setterAttribute1(target, property, value) {
        return target.setAttribute(property, value);
    }, _getSetter = function _getSetter1(target, property) {
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
    }, _renderPlain = function _renderPlain1(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
    }, _renderBoolean = function _renderBoolean1(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    }, _renderComplexString = function _renderComplexString1(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) s = data.b;
        else if (ratio === 1 && data.e) s = data.e;
        else {
            while(pt){
                s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
                pt = pt._next;
            }
            s += data.c;
        }
        data.set(data.t, data.p, s, data);
    }, _renderPropTweens = function _renderPropTweens1(ratio, data) {
        var pt = data._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
    }, _addPluginModifier = function _addPluginModifier1(modifier, tween, target, property) {
        var pt = this._pt, next;
        while(pt){
            next = pt._next;
            pt.p === property && pt.modifier(modifier, tween, target);
            pt = next;
        }
    }, _killPropTweensOf = function _killPropTweensOf1(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while(pt){
            next = pt._next;
            if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
            else if (!pt.dep) hasNonDependentRemaining = 1;
            pt = next;
        }
        return !hasNonDependentRemaining;
    }, _setterWithModifier = function _setterWithModifier1(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
    }, _sortPropTweensByPriority = function _sortPropTweensByPriority1(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while(pt){
            next = pt._next;
            pt2 = first;
            while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
            if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
            else first = pt;
            if (pt._next = pt2) pt2._prev = pt;
            else last = pt;
            pt = next;
        }
        parent._pt = first;
    };
    var PropTween = function() {
        function PropTween1(next, target, prop, start, change, renderer, data, setter, priority) {
            this.t = target;
            this.s = start;
            this.c = change;
            this.p = prop;
            this.r = renderer || _renderPlain;
            this.d = data || this;
            this.set = setter || _setterPlain;
            this.pr = priority || 0;
            this._next = next;
            if (next) next._prev = this;
        }
        var _proto4 = PropTween1.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
            this.mSet = this.mSet || this.set;
            this.set = _setterWithModifier;
            this.m = func;
            this.mt = target;
            this.tween = tween;
        };
        return PropTween1;
    }();
    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
        return _reservedProps[name] = 1;
    });
    _globals.TweenMax = _globals.TweenLite = Tween1;
    _globals.TimelineLite = _globals.TimelineMax = Timeline1;
    _globalTimeline = new Timeline1({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
    });
    _config.stringFilter = _colorStringFilter;
    var _gsap = {
        registerPlugin: function registerPlugin() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            args.forEach(function(config) {
                return _createPlugin(config);
            });
        },
        timeline: function timeline(vars) {
            return new Timeline1(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
            return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
            _isString(target) && (target = toArray(target)[0]);
            var getter = _getCache(target || {
            }).get, format = unit ? _passThrough : _numericIfPossible;
            unit === "native" && (unit = "");
            return !target ? target : !property ? function(property1, unit1, uncache1) {
                return format((_plugins[property1] && _plugins[property1].get || getter)(target, property1, unit1, uncache1));
            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
            target = toArray(target);
            if (target.length > 1) {
                var setters = target.map(function(t) {
                    return gsap.quickSetter(t, property, unit);
                }), l = setters.length;
                return function(value) {
                    var i = l;
                    while(i--)setters[i](value);
                };
            }
            target = target[0] || {
            };
            var Plugin1 = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {
            })[property] || property, setter = Plugin1 ? function(value) {
                var p1 = new Plugin1();
                _quickTween._pt = 0;
                p1.init(target, unit ? value + unit : value, _quickTween, 0, [
                    target
                ]);
                p1.render(1, p1);
                _quickTween._pt && _renderPropTweens(1, _quickTween);
            } : cache.set(target, p);
            return Plugin1 ? setter : function(value) {
                return setter(target, p, unit ? value + unit : value, cache, 1);
            };
        },
        isTweening: function isTweening(targets) {
            return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
            value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
            return _mergeDeep(_defaults, value || {
            });
        },
        config: function config(value) {
            return _mergeDeep(_config, value || {
            });
        },
        registerEffect: function registerEffect(_ref2) {
            var name = _ref2.name, effect = _ref2.effect, plugins = _ref2.plugins, defaults1 = _ref2.defaults, extendTimeline = _ref2.extendTimeline;
            (plugins || "").split(",").forEach(function(pluginName) {
                return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
            });
            _effects[name] = function(targets, vars, tl) {
                return effect(toArray(targets), _setDefaults(vars || {
                }, defaults1), tl);
            };
            if (extendTimeline) Timeline1.prototype[name] = function(targets, vars, position) {
                return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {
                }, this), position);
            };
        },
        registerEase: function registerEase(name, ease) {
            _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
            return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
            if (vars === void 0) vars = {
            };
            var tl = new Timeline1(vars), child, next;
            tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
            _globalTimeline.remove(tl);
            tl._dp = 0;
            tl._time = tl._tTime = _globalTimeline._time;
            child = _globalTimeline._first;
            while(child){
                next = child._next;
                if (includeDelayedCalls || !(!child._dur && child instanceof Tween1 && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
                child = next;
            }
            _addToTimeline(_globalTimeline, tl, 0);
            return tl;
        },
        utils: {
            wrap: wrap,
            wrapYoyo: wrapYoyo,
            distribute: distribute,
            random: random,
            snap: snap,
            normalize: normalize,
            getUnit: getUnit,
            clamp: clamp,
            splitColor: splitColor,
            toArray: toArray,
            mapRange: mapRange,
            pipe: pipe,
            unitize: unitize,
            interpolate: interpolate,
            shuffle: shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline1.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
            PropTween: PropTween,
            globals: _addGlobal,
            Tween: Tween1,
            Timeline: Timeline1,
            Animation: Animation1,
            getCache: _getCache,
            _removeLinkedListItem: _removeLinkedListItem,
            suppressOverwrites: function suppressOverwrites(value) {
                return _suppressOverwrites = value;
            }
        }
    };
    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
        return _gsap[name] = Tween1[name];
    });
    _ticker.add(Timeline1.updateRoot);
    _quickTween = _gsap.to({
    }, {
        duration: 0
    });
    var _getPluginPropTween = function _getPluginPropTween1(plugin, prop) {
        var pt = plugin._pt;
        while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
        return pt;
    }, _addModifiers = function _addModifiers1(tween, modifiers) {
        var targets = tween._targets, p, i, pt;
        for(p in modifiers){
            i = targets.length;
            while(i--){
                pt = tween._ptLookup[i][p];
                if (pt && (pt = pt.d)) {
                    if (pt._pt) pt = _getPluginPropTween(pt, p);
                    pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                }
            }
        }
    }, _buildModifierPlugin = function _buildModifierPlugin1(name, modifier) {
        return {
            name: name,
            rawVars: 1,
            init: function init(target, vars, tween) {
                tween._onInit = function(tween1) {
                    var temp, p;
                    if (_isString(vars)) {
                        temp = {
                        };
                        _forEachName(vars, function(name1) {
                            return temp[name1] = 1;
                        });
                        vars = temp;
                    }
                    if (modifier) {
                        temp = {
                        };
                        for(p in vars)temp[p] = modifier(vars[p]);
                        vars = temp;
                    }
                    _addModifiers(tween1, vars);
                };
            }
        };
    };
    var gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
            var p, pt;
            for(p in vars){
                pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
                pt && (pt.op = p);
                this._props.push(p);
            }
        }
    }, {
        name: "endArray",
        init: function init(target, value) {
            var i = value.length;
            while(i--)this.add(target, i, target[i] || 0, value[i]);
        }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
    Tween1.version = Timeline1.version = gsap.version = "3.6.1";
    _coreReady = 1;
    if (_windowExists()) _wake();
    var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
    var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists2() {
        return typeof window !== "undefined";
    }, _transformProps = {
    }, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 100000000, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, _renderCSSProp = function _renderCSSProp1(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    }, _renderPropWithEnd = function _renderPropWithEnd1(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning1(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
    }, _renderRoundedCSSProp = function _renderRoundedCSSProp1(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
    }, _renderNonTweeningValue = function _renderNonTweeningValue1(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
    }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd1(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
    }, _setterCSSStyle = function _setterCSSStyle1(target, property, value) {
        return target.style[property] = value;
    }, _setterCSSProp = function _setterCSSProp1(target, property, value) {
        return target.style.setProperty(property, value);
    }, _setterTransform = function _setterTransform1(target, property, value) {
        return target._gsap[property] = value;
    }, _setterScale = function _setterScale1(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
    }, _setterScaleWithRender = function _setterScaleWithRender1(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
    }, _setterTransformWithRender = function _setterTransformWithRender1(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
    }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement1(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e.style ? e : _doc$1.createElement(type);
    }, _getComputedProperty = function _getComputedProperty1(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty1(target, _checkPropPrefix(property) || property, 1) || "";
    }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix1(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i = 5;
        if (property in s && !preferPrefix) return property;
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while((i--) && !(_prefixes[i] + property in s));
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
    }, _initCore = function _initCore1() {
        if (_windowExists$1() && window.document) {
            _win$1 = window;
            _doc$1 = _win$1.document;
            _docElement = _doc$1.documentElement;
            _tempDiv = _createElement("div") || {
                style: {
                }
            };
            _tempDivStyler = _createElement("div");
            _transformProp = _checkPropPrefix(_transformProp);
            _transformOriginProp = _transformProp + "Origin";
            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
            _supports3D = !!_checkPropPrefix("perspective");
            _pluginInitted = 1;
        }
    }, _getBBoxHack = function _getBBoxHack1(swapIfPossible) {
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = "block";
        if (swapIfPossible) try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack1;
        } catch (e) {
        }
        else if (this._gsapBBox) bbox = this._gsapBBox();
        if (oldParent) {
            if (oldSibling) oldParent.insertBefore(this, oldSibling);
            else oldParent.appendChild(this);
        }
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
    }, _getAttributeFallbacks = function _getAttributeFallbacks1(target, attributesArray) {
        var i = attributesArray.length;
        while(i--){
            if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
        }
    }, _getBBox = function _getBBox1(target) {
        var bounds;
        try {
            bounds = target.getBBox();
        } catch (error) {
            bounds = _getBBoxHack.call(target, true);
        }
        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
            x: +_getAttributeFallbacks(target, [
                "x",
                "cx",
                "x1"
            ]) || 0,
            y: +_getAttributeFallbacks(target, [
                "y",
                "cy",
                "y1"
            ]) || 0,
            width: 0,
            height: 0
        } : bounds;
    }, _isSVG = function _isSVG1(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    }, _removeProperty = function _removeProperty1(target, property) {
        if (property) {
            var style = target.style;
            if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
            if (style.removeProperty) {
                if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
                style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
            } else style.removeAttribute(property);
        }
    }, _addNonTweeningPT = function _addNonTweeningPT1(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
    }, _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
    }, _convertToUnit = function _convertToUnit1(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit1(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
            return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) parent = (target.ownerSVGElement || {
        }).parentNode;
        if (!parent || parent === _doc$1 || !parent.appendChild) parent = _doc$1.body;
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) return _round(curValue / cache.width * amount);
        else {
            (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
            if (horizontal && toPercent) {
                cache = _getCache(parent);
                cache.time = _ticker.time;
                cache.width = parent[measureProperty];
            }
        }
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
    }, _get = function _get1(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
        if (property in _propertyAliases && property !== "transform") {
            property = _propertyAliases[property];
            if (~property.indexOf(",")) property = property.split(",")[0];
        }
        if (_transformProps[property] && property !== "transform") {
            value = _parseTransform(target, uncache);
            value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
            value = target.style[property];
            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
    }, _tweenComplexCSSString = function _tweenComplexCSSString1(target, prop, start, end) {
        if (!start || start === "none") {
            var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
            if (s && s !== start) {
                prop = p;
                start = s;
            } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end === "auto") {
            target.style[prop] = end;
            end = _getComputedProperty(target, prop) || end;
            target.style[prop] = start;
        }
        a = [
            start,
            end
        ];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
            while(result = _numWithUnitExp.exec(end)){
                endValue = result[0];
                chunk = end.substring(index, result.index);
                if (color) color = (color + 1) % 5;
                else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
                if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                    startNum = parseFloat(startValue) || 0;
                    startUnit = startValue.substr((startNum + "").length);
                    relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                    if (relative) endValue = endValue.substr(2);
                    endNum = parseFloat(endValue);
                    endUnit = endValue.substr((endNum + "").length);
                    index = _numWithUnitExp.lastIndex - endUnit.length;
                    if (!endUnit) {
                        endUnit = endUnit || _config.units[prop] || startUnit;
                        if (index === end.length) {
                            end += endUnit;
                            pt.e += endUnit;
                        }
                    }
                    if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                    pt._pt = {
                        _next: pt._pt,
                        p: chunk || matchIndex === 1 ? chunk : ",",
                        s: startNum,
                        c: relative ? relative * endNum : endNum - startNum,
                        m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                    };
                }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
    }, _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages1(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
            value = x;
            x = y;
            y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
    }, _renderClearProps = function _renderClearProps1(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
            if (props === "all" || props === true) {
                style.cssText = "";
                clearTransforms = 1;
            } else {
                props = props.split(",");
                i = props.length;
                while((--i) > -1){
                    prop = props[i];
                    if (_transformProps[prop]) {
                        clearTransforms = 1;
                        prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                    }
                    _removeProperty(target, prop);
                }
            }
            if (clearTransforms) {
                _removeProperty(target, _transformProp);
                if (cache) {
                    cache.svg && target.removeAttribute("transform");
                    _parseTransform(target, 1);
                    cache.uncache = 1;
                }
            }
        }
    }, _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
            if (tween.data !== "isFromStart") {
                var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                pt.u = endValue;
                pt.pr = -10;
                pt.tween = tween;
                plugin._props.push(property);
                return 1;
            }
        }
    }, _identity2DMatrix = [
        1,
        0,
        0,
        1,
        0,
        0
    ], _rotationalProperties = {
    }, _isNullTransform = function _isNullTransform1(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
    }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray1(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
    }, _getMatrix = function _getMatrix1(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
            temp = target.transform.baseVal.consolidate().matrix;
            matrix = [
                temp.a,
                temp.b,
                temp.c,
                temp.d,
                temp.e,
                temp.f
            ];
            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
            temp = style.display;
            style.display = "block";
            parent = target.parentNode;
            if (!parent || !target.offsetParent) {
                addedToDOM = 1;
                nextSibling = target.nextSibling;
                _docElement.appendChild(target);
            }
            matrix = _getComputedTransformMatrixAsArray(target);
            temp ? style.display = temp : _removeProperty(target, "display");
            if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
        return force2D && matrix.length > 6 ? [
            matrix[0],
            matrix[1],
            matrix[4],
            matrix[5],
            matrix[12],
            matrix[13]
        ] : matrix;
    }, _applySVGOrigin = function _applySVGOrigin1(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
            bounds = _getBBox(target);
            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
            xOrigin = x;
            yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
            tx = xOrigin - xOriginOld;
            ty = yOrigin - yOriginOld;
            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else cache.xOffset = cache.yOffset = 0;
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
    }, _parseTransform = function _parseTransform1(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) return cache;
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
            t1 = !cache.uncache && !uncache && target.getAttribute("data-svg-origin");
            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
            a = matrix[0];
            b = matrix[1];
            c = matrix[2];
            d = matrix[3];
            x = a12 = matrix[4];
            y = a22 = matrix[5];
            if (matrix.length === 6) {
                scaleX = Math.sqrt(a * a + b * b);
                scaleY = Math.sqrt(d * d + c * c);
                rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
                skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
                if (cache.svg) {
                    x -= xOrigin - (xOrigin * a + yOrigin * c);
                    y -= yOrigin - (xOrigin * b + yOrigin * d);
                }
            } else {
                a32 = matrix[6];
                a42 = matrix[7];
                a13 = matrix[8];
                a23 = matrix[9];
                a33 = matrix[10];
                a43 = matrix[11];
                x = matrix[12];
                y = matrix[13];
                z = matrix[14];
                angle = _atan2(a32, a33);
                rotationX = angle * _RAD2DEG;
                if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    t1 = a12 * cos + a13 * sin;
                    t2 = a22 * cos + a23 * sin;
                    t3 = a32 * cos + a33 * sin;
                    a13 = a12 * -sin + a13 * cos;
                    a23 = a22 * -sin + a23 * cos;
                    a33 = a32 * -sin + a33 * cos;
                    a43 = a42 * -sin + a43 * cos;
                    a12 = t1;
                    a22 = t2;
                    a32 = t3;
                }
                angle = _atan2(-c, a33);
                rotationY = angle * _RAD2DEG;
                if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    t1 = a * cos - a13 * sin;
                    t2 = b * cos - a23 * sin;
                    t3 = c * cos - a33 * sin;
                    a43 = d * sin + a43 * cos;
                    a = t1;
                    b = t2;
                    c = t3;
                }
                angle = _atan2(b, a);
                rotation = angle * _RAD2DEG;
                if (angle) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    t1 = a * cos + b * sin;
                    t2 = a12 * cos + a22 * sin;
                    b = b * cos - a * sin;
                    a22 = a22 * cos - a12 * sin;
                    a = t1;
                    a12 = t2;
                }
                if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                    rotationX = rotation = 0;
                    rotationY = 180 - rotationY;
                }
                scaleX = _round(Math.sqrt(a * a + b * b + c * c));
                scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
                angle = _atan2(a12, a22);
                skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
                perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
            }
            if (cache.svg) {
                t1 = target.getAttribute("transform");
                cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                t1 && target.setAttribute("transform", t1);
            }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
            if (invertedScaleX) {
                scaleX *= -1;
                skewX += rotation <= 0 ? 180 : -180;
                rotation += rotation <= 0 ? 180 : -180;
            } else {
                scaleY *= -1;
                skewX += skewX <= 0 ? 180 : -180;
            }
        }
        cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
    }, _firstTwoOnly = function _firstTwoOnly1(value) {
        return (value = value.split(" "))[0] + " " + value[1];
    }, _addPxTranslate = function _addPxTranslate1(target, start, value) {
        var unit = getUnit(start);
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
    }, _renderNon3DTransforms = function _renderNon3DTransforms1(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
    }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms1(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
            angle = parseFloat(rotationX) * _DEG2RAD;
            cos = Math.cos(angle);
            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
        if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
        if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
        if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        target.style[_transformProp] = transforms || "translate(0, 0)";
    }, _renderSVGTransforms = function _renderSVGTransforms1(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
            skewY = parseFloat(skewY);
            skewX += skewY;
            rotation += skewY;
        }
        if (rotation || skewX) {
            rotation *= _DEG2RAD;
            skewX *= _DEG2RAD;
            a11 = Math.cos(rotation) * scaleX;
            a21 = Math.sin(rotation) * scaleX;
            a12 = Math.sin(rotation - skewX) * -scaleY;
            a22 = Math.cos(rotation - skewX) * scaleY;
            if (skewX) {
                skewY *= _DEG2RAD;
                temp = Math.tan(skewX - skewY);
                temp = Math.sqrt(1 + temp * temp);
                a12 *= temp;
                a22 *= temp;
                if (skewY) {
                    temp = Math.tan(skewY);
                    temp = Math.sqrt(1 + temp * temp);
                    a11 *= temp;
                    a21 *= temp;
                }
            }
            a11 = _round(a11);
            a21 = _round(a21);
            a12 = _round(a12);
            a22 = _round(a22);
        } else {
            a11 = scaleX;
            a22 = scaleY;
            a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
            tx = _convertToUnit(target, "x", x, "px");
            ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
            tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
            ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
            temp = target.getBBox();
            tx = _round(tx + xPercent / 100 * temp.width);
            ty = _round(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
    }, _addRotationalPropTween = function _addRotationalPropTween1(plugin, target, property, startNum, endValue, relative) {
        var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
            direction = endValue.split("_")[1];
            if (direction === "short") {
                change %= cap;
                if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
            }
            if (direction === "cw" && change < 0) change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
            else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
    }, _assign = function _assign1(target, source) {
        for(var p in source)target[p] = source[p];
        return target;
    }, _addRawTransformPTs = function _addRawTransformPTs1(plugin, transforms, target) {
        var startCache = _assign({
        }, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        if (startCache.svg) {
            startValue = target.getAttribute("transform");
            target.setAttribute("transform", "");
            style[_transformProp] = transforms;
            endCache = _parseTransform(target, 1);
            _removeProperty(target, _transformProp);
            target.setAttribute("transform", startValue);
        } else {
            startValue = getComputedStyle(target)[_transformProp];
            style[_transformProp] = transforms;
            endCache = _parseTransform(target, 1);
            style[_transformProp] = startValue;
        }
        for(p in _transformProps){
            startValue = startCache[p];
            endValue = endCache[p];
            if (startValue !== endValue && exclude.indexOf(p) < 0) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
                startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                endNum = parseFloat(endValue);
                plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
                plugin._pt.u = endUnit || 0;
                plugin._props.push(p);
            }
        }
        _assign(endCache, startCache);
    };
    _forEachName("padding,margin,Width,Radius", function(name, index) {
        var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
            t,
            r,
            b,
            l
        ] : [
            t + l,
            t + r,
            b + r,
            b + l
        ]).map(function(side) {
            return index < 2 ? name + side : "border" + side + name;
        });
        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
            var a, vars;
            if (arguments.length < 4) {
                a = props.map(function(prop) {
                    return _get(plugin, prop, property);
                });
                vars = a.join(" ");
                return vars.split(a[0]).length === 5 ? a[0] : vars;
            }
            a = (endValue + "").split(" ");
            vars = {
            };
            props.forEach(function(prop, i) {
                return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
            });
            plugin.init(target, vars, tween);
        };
    });
    var CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
            return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
            _pluginInitted || _initCore();
            for(p in vars){
                if (p === "autoRound") continue;
                endValue = vars[p];
                if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
                type = typeof endValue;
                specialProp = _specialProps[p];
                if (type === "function") {
                    endValue = endValue.call(tween, index, target, targets);
                    type = typeof endValue;
                }
                if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
                if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
                else if (p.substr(0, 2) === "--") {
                    startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                    endValue += "";
                    _colorExp.lastIndex = 0;
                    if (!_colorExp.test(startValue)) {
                        startUnit = getUnit(startValue);
                        endUnit = getUnit(endValue);
                    }
                    endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                    this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                } else if (type !== "undefined") {
                    if (startAt && p in startAt) {
                        startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                        p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
                        (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
                    } else startValue = _get(target, p);
                    startNum = parseFloat(startValue);
                    relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                    relative && (endValue = endValue.substr(2));
                    endNum = parseFloat(endValue);
                    if (p in _propertyAliases) {
                        if (p === "autoAlpha") {
                            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
                            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                        }
                        if (p !== "scale" && p !== "transform") {
                            p = _propertyAliases[p];
                            ~p.indexOf(",") && (p = p.split(",")[0]);
                        }
                    }
                    isTransformRelated = p in _transformProps;
                    if (isTransformRelated) {
                        if (!transformPropTween) {
                            cache = target._gsap;
                            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                            smooth = vars.smoothOrigin !== false && cache.smooth;
                            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                            transformPropTween.dep = 1;
                        }
                        if (p === "scale") {
                            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                            props.push("scaleY", p);
                            p += "X";
                        } else if (p === "transformOrigin") {
                            endValue = _convertKeywordsToPercentages(endValue);
                            if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                            else {
                                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                            }
                            continue;
                        } else if (p === "svgOrigin") {
                            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                            continue;
                        } else if (p in _rotationalProperties) {
                            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                            continue;
                        } else if (p === "smoothOrigin") {
                            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                            continue;
                        } else if (p === "force3D") {
                            cache[p] = endValue;
                            continue;
                        } else if (p === "transform") {
                            _addRawTransformPTs(this, endValue, target);
                            continue;
                        }
                    } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                    if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                        startUnit = (startValue + "").substr((startNum + "").length);
                        endNum || (endNum = 0);
                        endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                        startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                        this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                        this._pt.u = endUnit || 0;
                        if (startUnit !== endUnit) {
                            this._pt.b = startValue;
                            this._pt.r = _renderCSSPropWithBeginning;
                        }
                    } else if (!(p in style)) {
                        if (p in target) this.add(target, p, target[p], endValue, index, targets);
                        else {
                            _missingPlugin(p, endValue);
                            continue;
                        }
                    } else _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                    props.push(p);
                }
            }
            hasPriority && _sortPropTweensByPriority(this);
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
            var p = _propertyAliases[property];
            p && p.indexOf(",") < 0 && (property = p);
            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {
            }, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
            _removeProperty: _removeProperty,
            _getMatrix: _getMatrix
        }
    };
    gsap.utils.checkPrefix = _checkPropPrefix;
    (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
            _transformProps[name] = 1;
        });
        _forEachName(rotation, function(name) {
            _config.units[name] = "deg";
            _rotationalProperties[name] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name) {
            var split = name.split(":");
            _propertyAliases[split[1]] = all[split[0]];
        });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
        _config.units[name] = "px";
    });
    gsap.registerPlugin(CSSPlugin);
    var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, TweenMaxWithCSS = gsapWithCSS.core.Tween;
    exports.Back = Back;
    exports.Bounce = Bounce;
    exports.CSSPlugin = CSSPlugin;
    exports.Circ = Circ;
    exports.Cubic = Cubic;
    exports.Elastic = Elastic;
    exports.Expo = Expo;
    exports.Linear = Linear;
    exports.Power0 = Power0;
    exports.Power1 = Power1;
    exports.Power2 = Power2;
    exports.Power3 = Power3;
    exports.Power4 = Power4;
    exports.Quad = Quad;
    exports.Quart = Quart;
    exports.Quint = Quint;
    exports.Sine = Sine;
    exports.SteppedEase = SteppedEase;
    exports.Strong = Strong;
    exports.TimelineLite = Timeline1;
    exports.TimelineMax = Timeline1;
    exports.TweenLite = Tween1;
    exports.TweenMax = TweenMaxWithCSS;
    exports.default = gsapWithCSS;
    exports.gsap = gsapWithCSS;
    if (typeof window === 'undefined' || window !== exports) Object.defineProperty(exports, '__esModule', {
        value: true
    });
    else delete window.default;
});

},{}],"7glZ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Draggable", ()=>Draggable1
);
parcelHelpers.export(exports, "default", ()=>Draggable1
);
/*!
 * Draggable 3.6.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ /* eslint-disable */ var _matrixJs = require("./utils/matrix.js");
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var gsap, _win, _doc, _docElement, _body, _tempDiv, _placeholderDiv, _coreInitted, _checkPrefix, _toArray, _supportsPassive, _isTouchDevice, _touchEventLookup, _dragCount, _isMultiTouching, _isAndroid, InertiaPlugin, _defaultCursor, _supportsPointer, _windowExists = function _windowExists1() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP1() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isFunction = function _isFunction1(value) {
    return typeof value === "function";
}, _isObject = function _isObject1(value) {
    return typeof value === "object";
}, _isUndefined = function _isUndefined1(value) {
    return typeof value === "undefined";
}, _emptyFunc = function _emptyFunc1() {
    return false;
}, _transformProp = "transform", _transformOriginProp = "transformOrigin", _round = function _round1(value) {
    return Math.round(value * 10000) / 10000;
}, _isArray = Array.isArray, _createElement = function _createElement1(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _RAD2DEG = 180 / Math.PI, _bigNum = 100000000000000000000, _identityMatrix = new _matrixJs.Matrix2D(), _getTime = Date.now || function() {
    return new Date().getTime();
}, _renderQueue = [], _lookup = {
}, //when a Draggable is created, the target gets a unique _gsDragID property that allows gets associated with the Draggable instance for quick lookups in Draggable.get(). This avoids circular references that could cause gc problems.
_lookupCount = 0, _clickableTagExp = /^(?:a|input|textarea|button|select)$/i, _lastDragTime = 0, _temp1 = {
}, // a simple object we reuse and populate (usually x/y properties) to conserve memory and improve performance.
_windowProxy = {
}, //memory/performance optimization - we reuse this object during autoScroll to store window-related bounds/offsets.
_copy = function _copy1(obj, factor) {
    var copy = {
    }, p;
    for(p in obj)copy[p] = factor ? obj[p] * factor : obj[p];
    return copy;
}, _extend = function _extend1(obj, defaults) {
    for(var p in defaults)if (!(p in obj)) obj[p] = defaults[p];
    return obj;
}, _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants1(elements, value) {
    var i = elements.length, children;
    while(i--){
        value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
        children = elements[i].children;
        children && children.length && _setTouchActionForAllDescendants1(children, value);
    }
}, _renderQueueTick = function _renderQueueTick1() {
    return _renderQueue.forEach(function(func) {
        return func();
    });
}, _addToRenderQueue = function _addToRenderQueue1(func) {
    _renderQueue.push(func);
    if (_renderQueue.length === 1) gsap.ticker.add(_renderQueueTick);
}, _renderQueueTimeout = function _renderQueueTimeout1() {
    return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
}, _removeFromRenderQueue = function _removeFromRenderQueue1(func) {
    var i = _renderQueue.length;
    while(i--)if (_renderQueue[i] === func) _renderQueue.splice(i, 1);
    gsap.to(_renderQueueTimeout, {
        overwrite: true,
        delay: 15,
        duration: 0,
        onComplete: _renderQueueTimeout,
        data: "_draggable"
    }); //remove the "tick" listener only after the render queue is empty for 15 seconds (to improve performance). Adding/removing it constantly for every click/touch wouldn't deliver optimal speed, and we also don't want the ticker to keep calling the render method when things are idle for long periods of time (we want to improve battery life on mobile devices).
}, _setDefaults = function _setDefaults1(obj, defaults) {
    for(var p in defaults)if (!(p in obj)) obj[p] = defaults[p];
    return obj;
}, _addListener = function _addListener1(element, type, func, capture) {
    if (element.addEventListener) {
        var touchType = _touchEventLookup[type];
        capture = capture || (_supportsPassive ? {
            passive: false
        } : null);
        element.addEventListener(touchType || type, func, capture);
        touchType && type !== touchType && element.addEventListener(type, func, capture); //some browsers actually support both, so must we. But pointer events cover all.
    }
}, _removeListener = function _removeListener1(element, type, func) {
    if (element.removeEventListener) {
        var touchType = _touchEventLookup[type];
        element.removeEventListener(touchType || type, func);
        touchType && type !== touchType && element.removeEventListener(type, func);
    }
}, _preventDefault = function _preventDefault1(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation(); //for some Microsoft browsers
}, _hasTouchID = function _hasTouchID1(list, ID) {
    var i = list.length;
    while(i--){
        if (list[i].identifier === ID) return true;
    }
}, _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd1(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd1);
}, _onMultiTouchDocument = function _onMultiTouchDocument1(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;
    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
}, _getDocScrollTop = function _getDocScrollTop1(doc) {
    return _win.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
}, _getDocScrollLeft = function _getDocScrollLeft1(doc) {
    return _win.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
}, _addScrollListener = function _addScrollListener1(e, callback) {
    _addListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) _addScrollListener1(e.parentNode, callback);
}, _removeScrollListener = function _removeScrollListener1(e, callback) {
    _removeListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) _removeScrollListener1(e.parentNode, callback);
}, _isRoot = function _isRoot1(e) {
    return !!(!e || e === _docElement || e.nodeType === 9 || e === _doc.body || e === _win || !e.nodeType || !e.parentNode);
}, _getMaxScroll = function _getMaxScroll1(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], _body[scroll]) - (_win["inner" + dim] || _docElement[client] || _body[client]) : element[scroll] - element[client]);
}, _recordMaxScrolls = function _recordMaxScrolls1(e, skipCurrent) {
    //records _gsMaxScrollX and _gsMaxScrollY properties for the element and all ancestors up the chain so that we can cap it, otherwise dragging beyond the edges with autoScroll on can endlessly scroll.
    var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
    if (_isRoot(e)) e = _windowProxy;
    else _recordMaxScrolls1(e.parentNode, skipCurrent);
    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;
    if (!skipCurrent) {
        e._gsScrollX = e.scrollLeft || 0;
        e._gsScrollY = e.scrollTop || 0;
    }
}, _setStyle = function _setStyle1(element, property, value) {
    var style = element.style;
    if (!style) return;
    if (_isUndefined(style[property])) property = _checkPrefix(property, element) || property;
    if (value == null) style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    else style[property] = value;
}, _getComputedStyle = function _getComputedStyle1(element) {
    return _win.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {
    }).host || element);
}, //the "host" stuff helps to accommodate ShadowDom objects.
_tempRect = {
}, //reuse to reduce garbage collection tasks
_parseRect = function _parseRect1(e) {
    //accepts a DOM element, a mouse event, or a rectangle object and returns the corresponding rectangle with left, right, width, height, top, and bottom properties
    if (e === _win) {
        _tempRect.left = _tempRect.top = 0;
        _tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _body.clientWidth || 0;
        _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _body.clientHeight || 0;
        return _tempRect;
    }
    var doc = e.ownerDocument || _doc, r = !_isUndefined(e.pageX) ? {
        left: e.pageX - _getDocScrollLeft(doc),
        top: e.pageY - _getDocScrollTop(doc),
        right: e.pageX - _getDocScrollLeft(doc) + 1,
        bottom: e.pageY - _getDocScrollTop(doc) + 1
    } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();
    if (_isUndefined(r.right) && !_isUndefined(r.width)) {
        r.right = r.left + r.width;
        r.bottom = r.top + r.height;
    } else if (_isUndefined(r.width)) //some browsers don't include width and height properties. We can't just set them directly on r because some browsers throw errors, so create a new generic object.
    r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
    };
    return r;
}, _dispatchEvent = function _dispatchEvent1(target, type, callbackName) {
    var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
    if (_isFunction(callback)) result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [
        target.pointerEvent
    ]);
    if (listeners && target.dispatchEvent(type) === false) result = false;
    return result;
}, _getBounds = function _getBounds1(target, context) {
    //accepts any of the following: a DOM element, jQuery object, selector text, or an object defining bounds as {top, left, width, height} or {minX, maxX, minY, maxY}. Returns an object with left, top, width, and height properties.
    var e = _toArray(target)[0], top, left, offset;
    if (!e.nodeType && e !== _win) {
        if (!_isUndefined(target.left)) {
            offset = {
                x: 0,
                y: 0
            }; //_getOffsetTransformOrigin(context); //the bounds should be relative to the origin
            return {
                left: target.left - offset.x,
                top: target.top - offset.y,
                width: target.width,
                height: target.height
            };
        }
        left = target.min || target.minX || target.minRotation || 0;
        top = target.min || target.minY || 0;
        return {
            left: left,
            top: top,
            width: (target.max || target.maxX || target.maxRotation || 0) - left,
            height: (target.max || target.maxY || 0) - top
        };
    }
    return _getElementBounds(e, context);
}, _point1 = {
}, //we reuse to minimize garbage collection tasks.
_getElementBounds = function _getElementBounds1(element, context) {
    context = _toArray(context)[0];
    var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs, contextParent;
    if (element === _win) {
        top = _getDocScrollTop(doc);
        left = _getDocScrollLeft(doc);
        right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
        bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0); //some browsers (like Firefox) ignore absolutely positioned elements, and collapse the height of the documentElement, so it could be 8px, for example, if you have just an absolutely positioned div. In that case, we use the innerHeight to resolve this.
    } else if (context === _win || _isUndefined(context)) return element.getBoundingClientRect();
    else {
        left = top = 0;
        if (isSVG) {
            bbox = element.getBBox();
            width = bbox.width;
            height = bbox.height;
        } else {
            if (element.viewBox && (bbox = element.viewBox.baseVal)) {
                left = bbox.x || 0;
                top = bbox.y || 0;
                width = bbox.width;
                height = bbox.height;
            }
            if (!width) {
                cs = _getComputedStyle(element);
                bbox = cs.boxSizing === "border-box";
                width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
                height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
            }
        }
        right = width;
        bottom = height;
    }
    if (element === context) return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top
    };
    matrix = _matrixJs.getGlobalMatrix(context, true).multiply(_matrixJs.getGlobalMatrix(element));
    p1 = matrix.apply({
        x: left,
        y: top
    });
    p2 = matrix.apply({
        x: right,
        y: top
    });
    p3 = matrix.apply({
        x: right,
        y: bottom
    });
    p4 = matrix.apply({
        x: left,
        y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    contextParent = context.parentNode || {
    };
    return {
        left: left + (contextParent.scrollLeft || 0),
        top: top + (contextParent.scrollTop || 0),
        width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
        height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
}, _parseInertia = function _parseInertia1(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {
    }, a, i, l;
    if (snap) {
        if (factor !== 1 && snap instanceof Array) {
            //some data must be altered to make sense, like if the user passes in an array of rotational values in degrees, we must convert it to radians. Or for scrollLeft and scrollTop, we invert the values.
            vars.end = a = [];
            l = snap.length;
            if (_isObject(snap[0])) //if the array is populated with objects, like points ({x:100, y:200}), make copies before multiplying by the factor, otherwise we'll mess up the originals and the user may reuse it elsewhere.
            for(i = 0; i < l; i++)a[i] = _copy(snap[i], factor);
            else for(i = 0; i < l; i++)a[i] = snap[i] * factor;
            max += 1.1; //allow 1.1 pixels of wiggle room when snapping in order to work around some browser inconsistencies in the way bounds are reported which can make them roughly a pixel off. For example, if "snap:[-$('#menu').width(), 0]" was defined and #menu had a wrapper that was used as the bounds, some browsers would be one pixel off, making the minimum -752 for example when snap was [-753,0], thus instead of snapping to -753, it would snap to 0 since -753 was below the minimum.
            min -= 1.1;
        } else if (_isFunction(snap)) vars.end = function(value) {
            var result = snap.call(draggable, value), copy, p;
            if (factor !== 1) {
                if (_isObject(result)) {
                    copy = {
                    };
                    for(p in result)copy[p] = result[p] * factor;
                    result = copy;
                } else result *= factor;
            }
            return result; //we need to ensure that we can scope the function call to the Draggable instance itself so that users can access important values like maxX, minX, maxY, minY, x, and y from within that function.
        };
        else vars.end = snap;
    }
    if (max || max === 0) vars.max = max;
    if (min || min === 0) vars.min = min;
    if (forceZeroVelocity) vars.velocity = 0;
    return vars;
}, _isClickable = function _isClickable1(element) {
    //sometimes it's convenient to mark an element as clickable by adding a data-clickable="true" attribute (in which case we won't preventDefault() the mouse/touch event). This method checks if the element is an <a>, <input>, or <button> or has an onclick or has the data-clickable or contentEditable attribute set to true (or any of its parent elements).
    var data;
    return !element || !element.getAttribute || element === _body ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable1(element.parentNode);
}, _setSelectable = function _setSelectable1(elements, selectable) {
    var i = elements.length, e;
    while(i--){
        e = elements[i];
        e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
        gsap.set(e, {
            lazy: true,
            userSelect: selectable ? "text" : "none"
        });
    }
}, _isFixed = function _isFixed1(element) {
    if (_getComputedStyle(element).position === "fixed") return true;
    element = element.parentNode;
    if (element && element.nodeType === 1) // avoid document fragments which will throw an error.
    return _isFixed1(element);
}, _supports3D, _addPaddingBR, //The ScrollProxy class wraps an element's contents into another div (we call it "content") that we either add padding when necessary or apply a translate3d() transform in order to overscroll (scroll past the boundaries). This allows us to simply set the scrollTop/scrollLeft (or top/left for easier reverse-axis orientation, which is what we do in Draggable) and it'll do all the work for us. For example, if we tried setting scrollTop to -100 on a normal DOM element, it wouldn't work - it'd look the same as setting it to 0, but if we set scrollTop of a ScrollProxy to -100, it'll give the correct appearance by either setting paddingTop of the wrapper to 100 or applying a 100-pixel translateY.
ScrollProxy = function ScrollProxy1(element, vars) {
    element = gsap.utils.toArray(element)[0];
    vars = vars || {
    };
    var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
    if (_supports3D && vars.force3D !== false) {
        transformStart = "translate3d(";
        transformEnd = "px,0px)";
    } else if (_transformProp) {
        transformStart = "translate(";
        transformEnd = "px)";
    }
    this.scrollTop = function(value, force) {
        if (!arguments.length) return -this.top();
        this.top(-value, force);
    };
    this.scrollLeft = function(value, force) {
        if (!arguments.length) return -this.left();
        this.left(-value, force);
    };
    this.left = function(value, force) {
        if (!arguments.length) return -(element.scrollLeft + offsetLeft);
        var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
        if ((dif > 2 || dif < -2) && !force) {
            //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
            prevLeft = element.scrollLeft;
            gsap.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            });
            this.left(-prevLeft);
            if (vars.onKill) vars.onKill();
            return;
        }
        value = -value; //invert because scrolling works in the opposite direction
        if (value < 0) {
            offsetLeft = value - 0.5 | 0;
            value = 0;
        } else if (value > maxLeft) {
            offsetLeft = value - maxLeft | 0;
            value = maxLeft;
        } else offsetLeft = 0;
        if (offsetLeft || oldOffset) {
            if (!this._skip) style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
            if (offsetLeft + extraPadRight >= 0) style.paddingRight = offsetLeft + extraPadRight + "px";
        }
        element.scrollLeft = value | 0;
        prevLeft = element.scrollLeft; //don't merge this with the line above because some browsers adjust the scrollLeft after it's set, so in order to be 100% accurate in tracking it, we need to ask the browser to report it.
    };
    this.top = function(value, force) {
        if (!arguments.length) return -(element.scrollTop + offsetTop);
        var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
        if ((dif > 2 || dif < -2) && !force) {
            //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
            prevTop = element.scrollTop;
            gsap.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            });
            this.top(-prevTop);
            if (vars.onKill) vars.onKill();
            return;
        }
        value = -value; //invert because scrolling works in the opposite direction
        if (value < 0) {
            offsetTop = value - 0.5 | 0;
            value = 0;
        } else if (value > maxTop) {
            offsetTop = value - maxTop | 0;
            value = maxTop;
        } else offsetTop = 0;
        if (offsetTop || oldOffset) {
            if (!this._skip) style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
        element.scrollTop = value | 0;
        prevTop = element.scrollTop;
    };
    this.maxScrollTop = function() {
        return maxTop;
    };
    this.maxScrollLeft = function() {
        return maxLeft;
    };
    this.disable = function() {
        node = content.firstChild;
        while(node){
            nextNode = node.nextSibling;
            element.appendChild(node);
            node = nextNode;
        }
        if (element === content.parentNode) //in case disable() is called when it's already disabled.
        element.removeChild(content);
    };
    this.enable = function() {
        node = element.firstChild;
        if (node === content) return;
        while(node){
            nextNode = node.nextSibling;
            content.appendChild(node);
            node = nextNode;
        }
        element.appendChild(content);
        this.calibrate();
    };
    this.calibrate = function(force) {
        var widthMatches = element.clientWidth === elementWidth, cs, x, y;
        prevTop = element.scrollTop;
        prevLeft = element.scrollLeft;
        if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) return; //no need to recalculate things if the width and height haven't changed.
        if (offsetTop || offsetLeft) {
            x = this.left();
            y = this.top();
            this.left(-element.scrollLeft);
            this.top(-element.scrollTop);
        }
        cs = _getComputedStyle(element); //first, we need to remove any width constraints to see how the content naturally flows so that we can see if it's wider than the containing element. If so, we've got to record the amount of overage so that we can apply that as padding in order for browsers to correctly handle things. Then we switch back to a width of 100% (without that, some browsers don't flow the content correctly)
        if (!widthMatches || force) {
            style.display = "block";
            style.width = "auto";
            style.paddingRight = "0px";
            extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth); //if the content is wider than the container, we need to add the paddingLeft and paddingRight in order for things to behave correctly.
            if (extraPadRight) extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
        style.display = "inline-block";
        style.position = "relative";
        style.overflow = "visible";
        style.verticalAlign = "top";
        style.boxSizing = "content-box";
        style.width = "100%";
        style.paddingRight = extraPadRight + "px"; //some browsers neglect to factor in the bottom padding when calculating the scrollHeight, so we need to add that padding to the content when that happens. Allow a 2px margin for error
        if (_addPaddingBR) style.paddingBottom = cs.paddingBottom;
        elementWidth = element.clientWidth;
        elementHeight = element.clientHeight;
        scrollWidth = element.scrollWidth;
        scrollHeight = element.scrollHeight;
        maxLeft = element.scrollWidth - elementWidth;
        maxTop = element.scrollHeight - elementHeight;
        contentHeight = content.offsetHeight;
        style.display = "block";
        if (x || y) {
            this.left(x);
            this.top(y);
        }
    };
    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
}, _initCore = function _initCore1(required) {
    if (_windowExists() && document.body) {
        var nav = window && window.navigator;
        _win = window;
        _doc = document;
        _docElement = _doc.documentElement;
        _body = _doc.body;
        _tempDiv = _createElement("div");
        _supportsPointer = !!window.PointerEvent;
        _placeholderDiv = _createElement("div");
        _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
        _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
        _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1; //Android handles touch events in an odd way and it's virtually impossible to "feature test" so we resort to UA sniffing
        _isTouchDevice = "ontouchstart" in _docElement && "orientation" in _win || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
        _addPaddingBR = (function() {
            //this function is in charge of analyzing browser behavior related to padding. It sets the _addPaddingBR to true if the browser doesn't normally factor in the bottom or right padding on the element inside the scrolling area, and it sets _addPaddingLeft to true if it's a browser that requires the extra offset (offsetLeft) to be added to the paddingRight (like Opera).
            var div = _createElement("div"), child = _createElement("div"), childStyle = child.style, parent = _body, val;
            childStyle.display = "inline-block";
            childStyle.position = "relative";
            div.style.cssText = child.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
            div.appendChild(child);
            parent.appendChild(div);
            val = child.offsetHeight + 18 > div.scrollHeight; //div.scrollHeight should be child.offsetHeight + 20 because of the 10px of padding on each side, but some browsers ignore one side. We allow a 2px margin of error.
            parent.removeChild(div);
            return val;
        })();
        _touchEventLookup = (function(types) {
            //we create an object that makes it easy to translate touch event types into their "pointer" counterparts if we're in a browser that uses those instead. Like IE10 uses "MSPointerDown" instead of "touchstart", for example.
            var standard = types.split(","), converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {
            }, i = 4;
            while((--i) > -1){
                obj[standard[i]] = converted[i];
                obj[converted[i]] = standard[i];
            } //to avoid problems in iOS 9, test to see if the browser supports the "passive" option on addEventListener().
            try {
                _docElement.addEventListener("test", null, Object.defineProperty({
                }, "passive", {
                    get: function get() {
                        _supportsPassive = 1;
                    }
                }));
            } catch (e) {
            }
            return obj;
        })("touchstart,touchmove,touchend,touchcancel");
        _addListener(_doc, "touchcancel", _emptyFunc); //some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document. Very strange indeed.
        _addListener(_win, "touchmove", _emptyFunc); //works around Safari bugs that still allow the page to scroll even when we preventDefault() on the touchmove event.
        _body && _body.addEventListener("touchstart", _emptyFunc); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
        _addListener(_doc, "contextmenu", function() {
            for(var p in _lookup)if (_lookup[p].isPressed) _lookup[p].endDrag();
        });
        gsap = _coreInitted = _getGSAP();
    }
    if (gsap) {
        InertiaPlugin = gsap.plugins.inertia;
        _checkPrefix = gsap.utils.checkPrefix;
        _transformProp = _checkPrefix(_transformProp);
        _transformOriginProp = _checkPrefix(_transformOriginProp);
        _toArray = gsap.utils.toArray;
        _supports3D = !!_checkPrefix("perspective");
    } else if (required) console.warn("Please gsap.registerPlugin(Draggable)");
};
var EventDispatcher = /*#__PURE__*/ function() {
    function EventDispatcher1(target) {
        this._listeners = {
        };
        this.target = target || this;
    }
    var _proto = EventDispatcher1.prototype;
    _proto.addEventListener = function addEventListener(type, callback) {
        var list = this._listeners[type] || (this._listeners[type] = []);
        if (!~list.indexOf(callback)) list.push(callback);
    };
    _proto.removeEventListener = function removeEventListener(type, callback) {
        var list = this._listeners[type], i = list && list.indexOf(callback) || -1;
        i > -1 && list.splice(i, 1);
    };
    _proto.dispatchEvent = function dispatchEvent(type) {
        var _this = this;
        var result;
        (this._listeners[type] || []).forEach(function(callback) {
            return callback.call(_this, {
                type: type,
                target: _this.target
            }) === false && (result = false);
        });
        return result; //if any of the callbacks return false, pass that along.
    };
    return EventDispatcher1;
}();
var Draggable1 = /*#__PURE__*/ function(_EventDispatcher) {
    _inheritsLoose(Draggable2, _EventDispatcher);
    function Draggable2(target, vars) {
        var _this2;
        _this2 = _EventDispatcher.call(this) || this;
        _coreInitted || _initCore(1);
        target = _toArray(target)[0]; //in case the target is a selector object or selector text
        if (!InertiaPlugin) InertiaPlugin = gsap.plugins.inertia;
        _this2.vars = vars = _copy(vars || {
        });
        _this2.target = target;
        _this2.x = _this2.y = _this2.rotation = 0;
        _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
        _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
        _this2.lockAxis = vars.lockAxis;
        _this2.autoScroll = vars.autoScroll || 0;
        _this2.lockedAxis = null;
        _this2.allowEventDefault = !!vars.allowEventDefault;
        gsap.getProperty(target, "x"); // to ensure that transforms are instantiated.
        var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {
        }, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap.core.getCache(target), isFixed = _isFixed(target), getPropAsNum = function getPropAsNum1(property, unit) {
            return parseFloat(gsCache.get(target, property, unit));
        }, ownerDoc = target.ownerDocument || _doc, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, onContextMenu = function onContextMenu1(e) {
            //used to prevent long-touch from triggering a context menu.
            // (self.isPressed && e.which < 2) && self.endDrag() // previously ended drag when context menu was triggered, but instead we should just stop propagation and prevent the default event behavior.
            _preventDefault(e);
            e.stopImmediatePropagation && e.stopImmediatePropagation();
            return false;
        }, //this method gets called on every tick of TweenLite.ticker which allows us to synchronize the renders to the core engine (which is typically synchronized with the display refresh via requestAnimationFrame). This is an optimization - it's better than applying the values inside the "mousemove" or "touchmove" event handler which may get called many times inbetween refreshes.
        render = function render1(suppressEvents) {
            if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
                var e = target, autoScrollFactor = self.autoScroll * 15, //multiplying by 15 just gives us a better "feel" speed-wise.
                parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
                checkAutoScrollBounds = false;
                _windowProxy.scrollTop = _win.pageYOffset != null ? _win.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                _windowProxy.scrollLeft = _win.pageXOffset != null ? _win.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                pointerX = self.pointerX - _windowProxy.scrollLeft;
                pointerY = self.pointerY - _windowProxy.scrollTop;
                while(e && !isRoot){
                    //walk up the chain and sense wherever the pointer is within 40px of an edge that's scrollable.
                    isRoot = _isRoot(e.parentNode);
                    parent = isRoot ? _windowProxy : e.parentNode;
                    rect = isRoot ? {
                        bottom: Math.max(_docElement.clientHeight, _win.innerHeight || 0),
                        right: Math.max(_docElement.clientWidth, _win.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : parent.getBoundingClientRect();
                    changeX = changeY = 0;
                    if (allowY) {
                        gap = parent._gsMaxScrollY - parent.scrollTop;
                        if (gap < 0) changeY = gap;
                        else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                            checkAutoScrollBounds = true;
                            changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
                        } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                            checkAutoScrollBounds = true;
                            changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
                        }
                        if (changeY) parent.scrollTop += changeY;
                    }
                    if (allowX) {
                        gap = parent._gsMaxScrollX - parent.scrollLeft;
                        if (gap < 0) changeX = gap;
                        else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                            checkAutoScrollBounds = true;
                            changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
                        } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                            checkAutoScrollBounds = true;
                            changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
                        }
                        if (changeX) parent.scrollLeft += changeX;
                    }
                    if (isRoot && (changeX || changeY)) {
                        _win.scrollTo(parent.scrollLeft, parent.scrollTop);
                        setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
                    }
                    e = parent;
                }
            }
            if (dirty) {
                var x = self.x, y = self.y;
                if (rotationMode) {
                    self.deltaX = x - parseFloat(gsCache.rotation);
                    self.rotation = x;
                    gsCache.rotation = x + "deg";
                    gsCache.renderTransform(1, gsCache);
                } else {
                    if (scrollProxy) {
                        if (allowY) {
                            self.deltaY = y - scrollProxy.top();
                            scrollProxy.top(y);
                        }
                        if (allowX) {
                            self.deltaX = x - scrollProxy.left();
                            scrollProxy.left(x);
                        }
                    } else if (xyMode) {
                        if (allowY) {
                            self.deltaY = y - parseFloat(gsCache.y);
                            gsCache.y = y + "px";
                        }
                        if (allowX) {
                            self.deltaX = x - parseFloat(gsCache.x);
                            gsCache.x = x + "px";
                        }
                        gsCache.renderTransform(1, gsCache);
                    } else {
                        if (allowY) {
                            self.deltaY = y - parseFloat(target.style.top || 0);
                            target.style.top = y + "px";
                        }
                        if (allowX) {
                            self.deltaX = x - parseFloat(target.style.left || 0);
                            target.style.left = x + "px";
                        }
                    }
                }
                if (hasDragCallback && !suppressEvents && !isDispatching) {
                    isDispatching = true; //in case onDrag has an update() call (avoid endless loop)
                    if (_dispatchEvent(self, "drag", "onDrag") === false) {
                        if (allowX) self.x -= self.deltaX;
                        if (allowY) self.y -= self.deltaY;
                        render1(true);
                    }
                    isDispatching = false;
                }
            }
            dirty = false;
        }, //copies the x/y from the element (whether that be transforms, top/left, or ScrollProxy's top/left) to the Draggable's x and y (and rotation if necessary) properties so that they reflect reality and it also (optionally) applies any snapping necessary. This is used by the InertiaPlugin tween in an onUpdate to ensure things are synced and snapped.
        syncXY = function syncXY1(skipOnUpdate, skipSnap) {
            var x = self.x, y = self.y, snappedValue, cs;
            if (!target._gsap) //just in case the _gsap cache got wiped, like if the user called clearProps on the transform or something (very rare).
            gsCache = gsap.core.getCache(target);
            gsCache.uncache && gsap.getProperty(target, "x"); // trigger a re-cache
            if (xyMode) {
                self.x = parseFloat(gsCache.x);
                self.y = parseFloat(gsCache.y);
            } else if (rotationMode) self.x = self.rotation = parseFloat(gsCache.rotation);
            else if (scrollProxy) {
                self.y = scrollProxy.top();
                self.x = scrollProxy.left();
            } else {
                self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
                self.x = parseFloat(target.style.left || (cs || {
                }).left) || 0;
            }
            if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
                if (snapXY) {
                    _temp1.x = self.x;
                    _temp1.y = self.y;
                    snappedValue = snapXY(_temp1);
                    if (snappedValue.x !== self.x) {
                        self.x = snappedValue.x;
                        dirty = true;
                    }
                    if (snappedValue.y !== self.y) {
                        self.y = snappedValue.y;
                        dirty = true;
                    }
                }
                if (snapX) {
                    snappedValue = snapX(self.x);
                    if (snappedValue !== self.x) {
                        self.x = snappedValue;
                        if (rotationMode) self.rotation = snappedValue;
                        dirty = true;
                    }
                }
                if (snapY) {
                    snappedValue = snapY(self.y);
                    if (snappedValue !== self.y) self.y = snappedValue;
                    dirty = true;
                }
            }
            dirty && render(true);
            if (!skipOnUpdate) {
                self.deltaX = self.x - x;
                self.deltaY = self.y - y;
                _dispatchEvent(self, "throwupdate", "onThrowUpdate");
            }
        }, buildSnapFunc = function buildSnapFunc1(snap, min, max, factor) {
            if (min == null) min = -_bigNum;
            if (max == null) max = _bigNum;
            if (_isFunction(snap)) return function(n) {
                var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)
                return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
            };
            if (_isArray(snap)) return function(n) {
                var i = snap.length, closest = 0, absDif = _bigNum, val, dif;
                while((--i) > -1){
                    val = snap[i];
                    dif = val - n;
                    if (dif < 0) dif = -dif;
                    if (dif < absDif && val >= min && val <= max) {
                        closest = i;
                        absDif = dif;
                    }
                }
                return snap[closest];
            };
            return isNaN(snap) ? function(n) {
                return n;
            } : function() {
                return snap * factor;
            };
        }, buildPointSnapFunc = function buildPointSnapFunc1(snap, minX1, maxX1, minY1, maxY1, radius, factor) {
            radius = radius && radius < _bigNum ? radius * radius : _bigNum; //so we don't have to Math.sqrt() in the functions. Performance optimization.
            if (_isFunction(snap)) return function(point) {
                var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)
                point.x = x = x > maxX1 ? maxX1 + (x - maxX1) * edgeTolerance : x < minX1 ? minX1 + (x - minX1) * edgeTolerance : x;
                point.y = y = y > maxY1 ? maxY1 + (y - maxY1) * edgeTolerance : y < minY1 ? minY1 + (y - minY1) * edgeTolerance : y;
                result = snap.call(self, point);
                if (result !== point) {
                    point.x = result.x;
                    point.y = result.y;
                }
                if (factor !== 1) {
                    point.x *= factor;
                    point.y *= factor;
                }
                if (radius < _bigNum) {
                    dx = point.x - x;
                    dy = point.y - y;
                    if (dx * dx + dy * dy > radius) {
                        point.x = x;
                        point.y = y;
                    }
                }
                return point;
            };
            if (_isArray(snap)) return function(p) {
                var i = snap.length, closest = 0, minDist = _bigNum, x, y, point, dist;
                while((--i) > -1){
                    point = snap[i];
                    x = point.x - p.x;
                    y = point.y - p.y;
                    dist = x * x + y * y;
                    if (dist < minDist) {
                        closest = i;
                        minDist = dist;
                    }
                }
                return minDist <= radius ? snap[closest] : p;
            };
            return function(n) {
                return n;
            };
        }, calculateBounds = function calculateBounds1() {
            var bounds, targetBounds, snap, snapIsRaw;
            hasBounds = false;
            if (scrollProxy) {
                scrollProxy.calibrate();
                self.minX = minX = -scrollProxy.maxScrollLeft();
                self.minY = minY = -scrollProxy.maxScrollTop();
                self.maxX = maxX = self.maxY = maxY = 0;
                hasBounds = true;
            } else if (!!vars.bounds) {
                bounds = _getBounds(vars.bounds, target.parentNode); //could be a selector/jQuery object or a DOM element or a generic object like {top:0, left:100, width:1000, height:800} or {minX:100, maxX:1100, minY:0, maxY:800}
                if (rotationMode) {
                    self.minX = minX = bounds.left;
                    self.maxX = maxX = bounds.left + bounds.width;
                    self.minY = minY = self.maxY = maxY = 0;
                } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
                    bounds = vars.bounds;
                    self.minX = minX = bounds.minX;
                    self.minY = minY = bounds.minY;
                    self.maxX = maxX = bounds.maxX;
                    self.maxY = maxY = bounds.maxY;
                } else {
                    targetBounds = _getBounds(target, target.parentNode);
                    self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left - 0.5);
                    self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top - 0.5);
                    self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
                    self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
                }
                if (minX > maxX) {
                    self.minX = maxX;
                    self.maxX = maxX = minX;
                    minX = self.minX;
                }
                if (minY > maxY) {
                    self.minY = maxY;
                    self.maxY = maxY = minY;
                    minY = self.minY;
                }
                if (rotationMode) {
                    self.minRotation = minX;
                    self.maxRotation = maxX;
                }
                hasBounds = true;
            }
            if (vars.liveSnap) {
                snap = vars.liveSnap === true ? vars.snap || {
                } : vars.liveSnap;
                snapIsRaw = _isArray(snap) || _isFunction(snap);
                if (rotationMode) {
                    snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
                    snapY = null;
                } else if (snap.points) snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
                else {
                    if (allowX) snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
                    if (allowY) snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
                }
            }
        }, onThrowComplete = function onThrowComplete1() {
            self.isThrowing = false;
            _dispatchEvent(self, "throwcomplete", "onThrowComplete");
        }, onThrowInterrupt = function onThrowInterrupt1() {
            self.isThrowing = false;
        }, animate = function animate1(inertia, forceZeroVelocity) {
            var snap, snapIsRaw, tween, overshootTolerance;
            if (inertia && InertiaPlugin) {
                if (inertia === true) {
                    snap = vars.snap || vars.liveSnap || {
                    };
                    snapIsRaw = _isArray(snap) || _isFunction(snap);
                    inertia = {
                        resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
                    };
                    if (rotationMode) inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
                    else {
                        if (allowX) inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
                        if (allowY) inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
                        if (snap.points || _isArray(snap) && _isObject(snap[0])) {
                            inertia.linkedProps = xProp + "," + yProp;
                            inertia.radius = snap.radius; //note: we also disable liveSnapping while throwing if there's a "radius" defined, otherwise it looks weird to have the item thrown past a snapping point but live-snapping mid-tween. We do this by altering the onUpdateParams so that "skipSnap" parameter is true for syncXY.
                        }
                    }
                }
                self.isThrowing = true;
                overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
                if (!inertia.duration) inertia.duration = {
                    max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
                    min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
                    overshoot: overshootTolerance
                };
                self.tween = tween = gsap.to(scrollProxy || target, {
                    inertia: inertia,
                    data: "_draggable",
                    onComplete: onThrowComplete,
                    onInterrupt: onThrowInterrupt,
                    onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
                    onUpdateParams: vars.fastMode ? [
                        self,
                        "onthrowupdate",
                        "onThrowUpdate"
                    ] : snap && snap.radius ? [
                        false,
                        true
                    ] : []
                });
                if (!vars.fastMode) {
                    if (scrollProxy) scrollProxy._skip = true; // Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
                    tween.render(1000000000, true, true); // force to the end. Remember, the duration will likely change upon initting because that's when InertiaPlugin calculates it.
                    syncXY(true, true);
                    self.endX = self.x;
                    self.endY = self.y;
                    if (rotationMode) self.endRotation = self.x;
                    tween.play(0);
                    syncXY(true, true);
                    if (scrollProxy) scrollProxy._skip = false; //Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
                }
            } else if (hasBounds) self.applyBounds();
        }, updateMatrix = function updateMatrix1(shiftStart) {
            var start = matrix, p;
            matrix = _matrixJs.getGlobalMatrix(target.parentNode, true);
            if (shiftStart && self.isPressed && !matrix.equals(start || new _matrixJs.Matrix2D())) {
                //if the matrix changes WHILE the element is pressed, we must adjust the startPointerX and startPointerY accordingly, so we invert the original matrix and figure out where the pointerX and pointerY were in the global space, then apply the new matrix to get the updated coordinates.
                p = start.inverse().apply({
                    x: startPointerX,
                    y: startPointerY
                });
                matrix.apply(p, p);
                startPointerX = p.x;
                startPointerY = p.y;
            }
            if (matrix.equals(_identityMatrix)) //if there are no transforms, we can optimize performance by not factoring in the matrix
            matrix = null;
        }, recordStartPositions = function recordStartPositions1() {
            var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop(ownerDoc) : 0, parsedOrigin, x, y;
            updateMatrix(false);
            _point1.x = self.pointerX - offsetX;
            _point1.y = self.pointerY - offsetY;
            matrix && matrix.apply(_point1, _point1);
            startPointerX = _point1.x; //translate to local coordinate system
            startPointerY = _point1.y;
            if (dirty) {
                setPointerPosition(self.pointerX, self.pointerY);
                render(true);
            }
            if (scrollProxy) {
                calculateBounds();
                startElementY = scrollProxy.top();
                startElementX = scrollProxy.left();
            } else {
                //if the element is in the process of tweening, don't force snapping to occur because it could make it jump. Imagine the user throwing, then before it's done, clicking on the element in its inbetween state.
                if (isTweening()) {
                    syncXY(true, true);
                    calculateBounds();
                } else self.applyBounds();
                if (rotationMode) {
                    parsedOrigin = target.ownerSVGElement ? [
                        gsCache.xOrigin - target.getBBox().x,
                        gsCache.yOrigin - target.getBBox().y
                    ] : (_getComputedStyle(target)[_transformOriginProp] || "0 0").split(" ");
                    rotationOrigin = self.rotationOrigin = _matrixJs.getGlobalMatrix(target).apply({
                        x: parseFloat(parsedOrigin[0]) || 0,
                        y: parseFloat(parsedOrigin[1]) || 0
                    });
                    syncXY(true, true);
                    x = self.pointerX - rotationOrigin.x - offsetX;
                    y = rotationOrigin.y - self.pointerY + offsetY;
                    startElementX = self.x; //starting rotation (x always refers to rotation in type:"rotation", measured in degrees)
                    startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
                } else {
                    //parent = !isFixed && target.parentNode;
                    //startScrollTop = parent ? parent.scrollTop || 0 : 0;
                    //startScrollLeft = parent ? parent.scrollLeft || 0 : 0;
                    startElementY = getPropAsNum(yProp, "px"); //record the starting top and left values so that we can just add the mouse's movement to them later.
                    startElementX = getPropAsNum(xProp, "px");
                }
            }
            if (hasBounds && edgeTolerance) {
                if (startElementX > maxX) startElementX = maxX + (startElementX - maxX) / edgeTolerance;
                else if (startElementX < minX) startElementX = minX - (minX - startElementX) / edgeTolerance;
                if (!rotationMode) {
                    if (startElementY > maxY) startElementY = maxY + (startElementY - maxY) / edgeTolerance;
                    else if (startElementY < minY) startElementY = minY - (minY - startElementY) / edgeTolerance;
                }
            }
            self.startX = startElementX = _round(startElementX);
            self.startY = startElementY = _round(startElementY);
        }, isTweening = function isTweening1() {
            return self.tween && self.tween.isActive();
        }, removePlaceholder = function removePlaceholder1() {
            if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) //_placeholderDiv just props open auto-scrolling containers so they don't collapse as the user drags left/up. We remove it after dragging (and throwing, if necessary) finishes.
            _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }, //called when the mouse is pressed (or touch starts)
        onPress = function onPress1(e, force) {
            var i;
            if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
                //when we DON'T preventDefault() in order to accommodate touch-scrolling and the user just taps, many browsers also fire a mousedown/mouseup sequence AFTER the touchstart/touchend sequence, thus it'd result in two quick "click" events being dispatched. This line senses that condition and halts it on the subsequent mousedown.
                isPreventingDefault && e && enabled && _preventDefault(e); // in some browsers, we must listen for multiple event types like touchstart, pointerdown, mousedown. The first time this function is called, we record whether or not we _preventDefault() so that on duplicate calls, we can do the same if necessary.
                return;
            }
            interrupted = isTweening();
            self.pointerEvent = e;
            if (_touchEventLookup[e.type]) {
                //note: on iOS, BOTH touchmove and mousemove are dispatched, but the mousemove has pageY and pageX of 0 which would mess up the calculations and needlessly hurt performance.
                touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc; //pointer-based touches (for Microsoft browsers) don't remain locked to the original target like other browsers, so we must use the document instead. The event type would be "MSPointerDown" or "pointerdown".
                _addListener(touchEventTarget, "touchend", onRelease);
                _addListener(touchEventTarget, "touchmove", onMove);
                _addListener(touchEventTarget, "touchcancel", onRelease);
                _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
            } else {
                touchEventTarget = null;
                _addListener(ownerDoc, "mousemove", onMove); //attach these to the document instead of the box itself so that if the user's mouse moves too quickly (and off of the box), things still work.
            }
            touchDragAxis = null;
            if (!_supportsPointer || !touchEventTarget) {
                _addListener(ownerDoc, "mouseup", onRelease);
                e && e.target && _addListener(e.target, "mouseup", onRelease); //we also have to listen directly on the element because some browsers don't bubble up the event to the _doc on elements with contentEditable="true"
            }
            isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
            if (isClicking) {
                _addListener(e.target, "change", onRelease); //in some browsers, when you mousedown on a <select> element, no mouseup gets dispatched! So we listen for a "change" event instead.
                _dispatchEvent(self, "pressInit", "onPressInit");
                _dispatchEvent(self, "press", "onPress");
                _setSelectable(triggers, true); //accommodates things like inputs and elements with contentEditable="true" (otherwise user couldn't drag to select text)
                isPreventingDefault = false;
                return;
            }
            allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x"; //note: in Chrome, right-clicking (for a context menu) fires onPress and it doesn't have the event.which set properly, so we must look for event.ctrlKey. If the user wants to allow context menus we should of course sense it here and not allow native touch scrolling.
            isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
            if (isPreventingDefault) {
                _preventDefault(e);
                _addListener(_win, "touchforcechange", _preventDefault); //works around safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
            }
            if (e.changedTouches) {
                //touch events store the data slightly differently
                e = touch = e.changedTouches[0];
                touchID = e.identifier;
            } else if (e.pointerId) touchID = e.pointerId; //for some Microsoft browsers
            else touch = touchID = null;
            _dragCount++;
            _addToRenderQueue(render); //causes the Draggable to render on each "tick" of TweenLite.ticker (performance optimization - updating values in a mousemove can cause them to happen too frequently, like multiple times between frame redraws which is wasteful, and it also prevents values from updating properly in IE8)
            startPointerY = self.pointerY = e.pageY; //record the starting x and y so that we can calculate the movement from the original in _onMouseMove
            startPointerX = self.pointerX = e.pageX;
            _dispatchEvent(self, "pressInit", "onPressInit");
            if (allowNativeTouchScrolling || self.autoScroll) _recordMaxScrolls(target.parentNode);
            if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
                //add a placeholder div to prevent the parent container from collapsing when the user drags the element left.
                _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
                target.parentNode.appendChild(_placeholderDiv);
            }
            recordStartPositions();
            self.tween && self.tween.kill();
            self.isThrowing = false;
            gsap.killTweensOf(scrollProxy || target, killProps, true); //in case the user tries to drag it before the last tween is done.
            scrollProxy && gsap.killTweensOf(target, {
                scrollTo: 1
            }, true); //just in case the original target's scroll position is being tweened somewhere else.
            self.tween = self.lockedAxis = null;
            if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) target.style.zIndex = Draggable2.zIndex++;
            self.isPressed = true;
            hasDragCallback = !!(vars.onDrag || self._listeners.drag);
            hasMoveCallback = !!(vars.onMove || self._listeners.move);
            if (!rotationMode && (vars.cursor !== false || vars.activeCursor)) {
                i = triggers.length;
                while((--i) > -1)gsap.set(triggers[i], {
                    cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
                });
            }
            _dispatchEvent(self, "press", "onPress");
        }, //called every time the mouse/touch moves
        onMove = function onMove1(e) {
            var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
            if (!enabled || _isMultiTouching || !self.isPressed || !e) {
                isPreventingDefault && e && enabled && _preventDefault(e); // in some browsers, we must listen for multiple event types like touchmove, pointermove, mousemove. The first time this function is called, we record whether or not we _preventDefault() so that on duplicate calls, we can do the same if necessary.
                return;
            }
            self.pointerEvent = e;
            touches = e.changedTouches;
            if (touches) {
                //touch events store the data slightly differently
                e = touches[0];
                if (e !== touch && e.identifier !== touchID) {
                    //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
                    i = touches.length;
                    while((--i) > -1 && (e = touches[i]).identifier !== touchID && e.target !== target); // Some Android devices dispatch a touchstart AND pointerdown initially, and then only pointermove thus the touchID may not match because it was grabbed from the touchstart event whereas the pointer event is the one that the browser dispatches for move, so if the event target matches this Draggable's target, let it through.
                    if (i < 0) return;
                }
            } else if (e.pointerId && touchID && e.pointerId !== touchID) //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
            return;
            if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
                //Android browsers force us to decide on the first "touchmove" event if we should allow the default (scrolling) behavior or preventDefault(). Otherwise, a "touchcancel" will be fired and then no "touchmove" or "touchend" will fire during the scrolling (no good).
                _point1.x = e.pageX;
                _point1.y = e.pageY;
                matrix && matrix.apply(_point1, _point1);
                pointerX = _point1.x;
                pointerY = _point1.y;
                dx = Math.abs(pointerX - startPointerX);
                dy = Math.abs(pointerY - startPointerY);
                if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                    touchDragAxis = dx > dy && allowX ? "x" : "y";
                    if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) _addListener(_win, "touchforcechange", _preventDefault); // prevents native touch scrolling from taking over if the user started dragging in the other direction in iOS Safari
                    if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
                        self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
                        _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
                    }
                    if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                        onRelease(originalEvent);
                        return;
                    }
                }
            }
            if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
                _preventDefault(originalEvent);
                isPreventingDefault = true;
            } else if (isPreventingDefault) isPreventingDefault = false;
            if (self.autoScroll) checkAutoScrollBounds = true;
            setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
        }, setPointerPosition = function setPointerPosition1(pointerX, pointerY, invokeOnMove) {
            var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
            self.pointerX = pointerX;
            self.pointerY = pointerY;
            if (isFixed) {
                pointerX -= _getDocScrollLeft(ownerDoc);
                pointerY -= _getDocScrollTop(ownerDoc);
            }
            if (rotationMode) {
                y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
                dif = self.y - y;
                if (dif > 180) {
                    startElementY -= 360;
                    self.y = y;
                } else if (dif < -180) {
                    startElementY += 360;
                    self.y = y;
                }
                if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
                    self.y = y;
                    x = startElementX + (startElementY - y) * dragTolerance;
                } else x = startElementX;
            } else {
                if (matrix) {
                    temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
                    pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
                    pointerX = temp;
                }
                yChange = pointerY - startPointerY;
                xChange = pointerX - startPointerX;
                if (yChange < minimumMovement && yChange > -minimumMovement) yChange = 0;
                if (xChange < minimumMovement && xChange > -minimumMovement) xChange = 0;
                if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
                    temp = self.lockedAxis;
                    if (!temp) {
                        self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
                        if (temp && _isFunction(self.vars.onLockAxis)) self.vars.onLockAxis.call(self, self.pointerEvent);
                    }
                    if (temp === "y") yChange = 0;
                    else if (temp === "x") xChange = 0;
                }
                x = _round(startElementX + xChange * dragTolerance);
                y = _round(startElementY + yChange * dragTolerance);
            }
            if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
                if (snapXY) {
                    _temp1.x = x;
                    _temp1.y = y;
                    temp = snapXY(_temp1);
                    x = _round(temp.x);
                    y = _round(temp.y);
                }
                if (snapX) x = _round(snapX(x));
                if (snapY) y = _round(snapY(y));
            } else if (hasBounds) {
                if (x > maxX) x = maxX + Math.round((x - maxX) * edgeTolerance);
                else if (x < minX) x = minX + Math.round((x - minX) * edgeTolerance);
                if (!rotationMode) {
                    if (y > maxY) y = Math.round(maxY + (y - maxY) * edgeTolerance);
                    else if (y < minY) y = Math.round(minY + (y - minY) * edgeTolerance);
                }
            }
            if (self.x !== x || self.y !== y && !rotationMode) {
                if (rotationMode) {
                    self.endRotation = self.x = self.endX = x;
                    dirty = true;
                } else {
                    if (allowY) {
                        self.y = self.endY = y;
                        dirty = true; //a flag that indicates we need to render the target next time the TweenLite.ticker dispatches a "tick" event (typically on a requestAnimationFrame) - this is a performance optimization (we shouldn't render on every move because sometimes many move events can get dispatched between screen refreshes, and that'd be wasteful to render every time)
                    }
                    if (allowX) {
                        self.x = self.endX = x;
                        dirty = true;
                    }
                }
                if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
                    if (!self.isDragging && self.isPressed) {
                        self.isDragging = true;
                        _dispatchEvent(self, "dragstart", "onDragStart");
                    }
                } else {
                    //revert because the onMove returned false!
                    self.pointerX = prevPointerX;
                    self.pointerY = prevPointerY;
                    startElementY = prevStartElementY;
                    self.x = prevX;
                    self.y = prevY;
                    self.endX = prevEndX;
                    self.endY = prevEndY;
                    self.endRotation = prevEndRotation;
                    dirty = prevDirty;
                }
            }
        }, //called when the mouse/touch is released
        onRelease = function onRelease1(e, force) {
            if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
                //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
                isPreventingDefault && e && enabled && _preventDefault(e); // in some browsers, we must listen for multiple event types like touchend, pointerup, mouseup. The first time this function is called, we record whether or not we _preventDefault() so that on duplicate calls, we can do the same if necessary.
                return;
            }
            self.isPressed = false;
            var originalEvent = e, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap.delayedCall(0.001, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
            if (touchEventTarget) {
                _removeListener(touchEventTarget, "touchend", onRelease1);
                _removeListener(touchEventTarget, "touchmove", onMove);
                _removeListener(touchEventTarget, "touchcancel", onRelease1);
                _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
            } else _removeListener(ownerDoc, "mousemove", onMove);
            _removeListener(_win, "touchforcechange", _preventDefault);
            if (!_supportsPointer || !touchEventTarget) {
                _removeListener(ownerDoc, "mouseup", onRelease1);
                e && e.target && _removeListener(e.target, "mouseup", onRelease1);
            }
            dirty = false;
            if (wasDragging) {
                dragEndTime = _lastDragTime = _getTime();
                self.isDragging = false;
            }
            if (isClicking && !isContextMenuRelease) {
                if (e) {
                    _removeListener(e.target, "change", onRelease1);
                    self.pointerEvent = originalEvent;
                }
                _setSelectable(triggers, false);
                _dispatchEvent(self, "release", "onRelease");
                _dispatchEvent(self, "click", "onClick");
                isClicking = false;
                return;
            }
            _removeFromRenderQueue(render);
            if (!rotationMode) {
                i = triggers.length;
                while((--i) > -1)_setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
            }
            _dragCount--;
            if (e) {
                touches = e.changedTouches;
                if (touches) {
                    //touch events store the data slightly differently
                    e = touches[0];
                    if (e !== touch && e.identifier !== touchID) {
                        //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
                        i = touches.length;
                        while((--i) > -1 && (e = touches[i]).identifier !== touchID && e.target !== target);
                        if (i < 0) return;
                    }
                }
                self.pointerEvent = originalEvent;
                self.pointerX = e.pageX;
                self.pointerY = e.pageY;
            }
            if (isContextMenuRelease && originalEvent) {
                _preventDefault(originalEvent);
                isPreventingDefault = true;
                _dispatchEvent(self, "release", "onRelease");
            } else if (originalEvent && !wasDragging) {
                isPreventingDefault = false;
                if (interrupted && (vars.snap || vars.bounds)) //otherwise, if the user clicks on the object while it's animating to a snapped position, and then releases without moving 3 pixels, it will just stay there (it should animate/snap)
                animate(vars.inertia || vars.throwProps);
                _dispatchEvent(self, "release", "onRelease");
                if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
                    //to accommodate native scrolling on Android devices, we have to immediately call onRelease() on the first touchmove event, but that shouldn't trigger a "click".
                    _dispatchEvent(self, "click", "onClick");
                    if (_getTime() - clickTime < 300) _dispatchEvent(self, "doubleclick", "onDoubleClick");
                    eventTarget = originalEvent.target || target; //old IE uses srcElement
                    clickTime = _getTime();
                    syntheticClick = function syntheticClick1() {
                        // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
                        if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                            if (eventTarget.click) //some browsers (like mobile Safari) don't properly trigger the click event
                            eventTarget.click();
                            else if (ownerDoc.createEvent) {
                                syntheticEvent = ownerDoc.createEvent("MouseEvents");
                                syntheticEvent.initMouseEvent("click", true, true, _win, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                                eventTarget.dispatchEvent(syntheticEvent);
                            }
                        }
                    };
                    if (!_isAndroid && !originalEvent.defaultPrevented) //iOS Safari requires the synthetic click to happen immediately or else it simply won't work, but Android doesn't play nice.
                    gsap.delayedCall(0.05, syntheticClick); //in addition to the iOS bug workaround, there's a Firefox issue with clicking on things like a video to play, so we must fake a click event in a slightly delayed fashion. Previously, we listened for the "click" event with "capture" false which solved the video-click-to-play issue, but it would allow the "click" event to be dispatched twice like if you were using a jQuery.click() because that was handled in the capture phase, thus we had to switch to the capture phase to avoid the double-dispatching, but do the delayed synthetic click. Don't fire it too fast (like 0.00001) because we want to give the native event a chance to fire first as it's "trusted".
                }
            } else {
                animate(vars.inertia || vars.throwProps); //will skip if inertia/throwProps isn't defined or IntertiaPlugin isn't loaded.
                if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
                    isPreventingDefault = true;
                    _preventDefault(originalEvent);
                } else isPreventingDefault = false;
                _dispatchEvent(self, "release", "onRelease");
            }
            isTweening() && placeholderDelayedCall.duration(self.tween.duration()); //sync the timing so that the placeholder DIV gets
            wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
            return true;
        }, updateScroll = function updateScroll1(e) {
            if (e && self.isDragging && !scrollProxy) {
                var parent = e.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
                if (deltaX || deltaY) {
                    if (matrix) {
                        startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
                        startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
                    } else {
                        startPointerX -= deltaX;
                        startPointerY -= deltaY;
                    }
                    parent._gsScrollX += deltaX;
                    parent._gsScrollY += deltaY;
                    setPointerPosition(self.pointerX, self.pointerY);
                }
            }
        }, onClick = function onClick1(e) {
            //this was a huge pain in the neck to align all the various browsers and their behaviors. Chrome, Firefox, Safari, Opera, Android, and Microsoft Edge all handle events differently! Some will only trigger native behavior (like checkbox toggling) from trusted events. Others don't even support isTrusted, but require 2 events to flow through before triggering native behavior. Edge treats everything as trusted but also mandates that 2 flow through to trigger the correct native behavior.
            var time = _getTime(), recentlyClicked = time - clickTime < 40, recentlyDragged = time - dragEndTime < 40, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched; //note: Safari doesn't support isTrusted, and it won't properly execute native behavior (like toggling checkboxes) on the first synthetic "click" event - we must wait for the 2nd and treat it as trusted (but stop propagation at that point). Confusing, I know. Don't you love cross-browser compatibility challenges?
            if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) e.stopImmediatePropagation();
            if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
                //let the first click pass through unhindered. Let the next one only if it's trusted, then no more (stop quick-succession ones)
                if (trusted && alreadyDispatched) trustedClickDispatch = clickTime;
                clickDispatch = clickTime;
                return;
            }
            if (self.isPressed || recentlyDragged || recentlyClicked) {
                if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) _preventDefault(e);
            }
            if (!recentlyClicked && !recentlyDragged) {
                // for script-triggered event dispatches, like element.click()
                e && e.target && (self.pointerEvent = e);
                _dispatchEvent(self, "click", "onClick");
            }
        }, localizePoint = function localizePoint1(p) {
            return matrix ? {
                x: p.x * matrix.a + p.y * matrix.c + matrix.e,
                y: p.x * matrix.b + p.y * matrix.d + matrix.f
            } : {
                x: p.x,
                y: p.y
            };
        };
        old = Draggable2.get(target);
        old && old.kill(); // avoids duplicates (an element can only be controlled by one Draggable)
        //give the user access to start/stop dragging...
        _this2.startDrag = function(event, align) {
            var r1, r2, p1, p2;
            onPress(event || self.pointerEvent, true); //if the pointer isn't on top of the element, adjust things accordingly
            if (align && !self.hitTest(event || self.pointerEvent)) {
                r1 = _parseRect(event || self.pointerEvent);
                r2 = _parseRect(target);
                p1 = localizePoint({
                    x: r1.left + r1.width / 2,
                    y: r1.top + r1.height / 2
                });
                p2 = localizePoint({
                    x: r2.left + r2.width / 2,
                    y: r2.top + r2.height / 2
                });
                startPointerX -= p1.x - p2.x;
                startPointerY -= p1.y - p2.y;
            }
            if (!self.isDragging) {
                self.isDragging = true;
                _dispatchEvent(self, "dragstart", "onDragStart");
            }
        };
        _this2.drag = onMove;
        _this2.endDrag = function(e) {
            return onRelease(e || self.pointerEvent, true);
        };
        _this2.timeSinceDrag = function() {
            return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
        };
        _this2.timeSinceClick = function() {
            return (_getTime() - clickTime) / 1000;
        };
        _this2.hitTest = function(target1, threshold) {
            return Draggable2.hitTest(self.target, target1, threshold);
        };
        _this2.getDirection = function(from, diagonalThreshold) {
            //from can be "start" (default), "velocity", or an element
            var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
            if (mode === "element") {
                r1 = _parseRect(self.target);
                r2 = _parseRect(from);
            }
            xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
            if (rotationMode) return xChange < 0 ? "counter-clockwise" : "clockwise";
            else {
                diagonalThreshold = diagonalThreshold || 2;
                yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
                ratio = Math.abs(xChange / yChange);
                direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
                if (ratio < diagonalThreshold) {
                    if (direction !== "") direction += "-";
                    direction += yChange < 0 ? "up" : "down";
                }
            }
            return direction;
        };
        _this2.applyBounds = function(newBounds, sticky) {
            var x, y, forceZeroVelocity, e, parent, isRoot;
            if (newBounds && vars.bounds !== newBounds) {
                vars.bounds = newBounds;
                return self.update(true, sticky);
            }
            syncXY(true);
            calculateBounds();
            if (hasBounds && !isTweening()) {
                x = self.x;
                y = self.y;
                if (x > maxX) x = maxX;
                else if (x < minX) x = minX;
                if (y > maxY) y = maxY;
                else if (y < minY) y = minY;
                if (self.x !== x || self.y !== y) {
                    forceZeroVelocity = true;
                    self.x = self.endX = x;
                    if (rotationMode) self.endRotation = x;
                    else self.y = self.endY = y;
                    dirty = true;
                    render(true);
                    if (self.autoScroll && !self.isDragging) {
                        _recordMaxScrolls(target.parentNode);
                        e = target;
                        _windowProxy.scrollTop = _win.pageYOffset != null ? _win.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                        _windowProxy.scrollLeft = _win.pageXOffset != null ? _win.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                        while(e && !isRoot){
                            //walk up the chain and sense wherever the scrollTop/scrollLeft exceeds the maximum.
                            isRoot = _isRoot(e.parentNode);
                            parent = isRoot ? _windowProxy : e.parentNode;
                            if (allowY && parent.scrollTop > parent._gsMaxScrollY) parent.scrollTop = parent._gsMaxScrollY;
                            if (allowX && parent.scrollLeft > parent._gsMaxScrollX) parent.scrollLeft = parent._gsMaxScrollX;
                            e = parent;
                        }
                    }
                }
                if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) animate(vars.inertia || vars.throwProps, forceZeroVelocity);
            }
            return self;
        };
        _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
            var x = self.x, y = self.y;
            updateMatrix(!sticky);
            if (applyBounds) self.applyBounds();
            else {
                dirty && ignoreExternalChanges && render(true);
                syncXY(true);
            }
            if (sticky) {
                setPointerPosition(self.pointerX, self.pointerY);
                dirty && render(true);
            }
            if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) recordStartPositions();
            if (self.autoScroll) {
                _recordMaxScrolls(target.parentNode, self.isDragging);
                checkAutoScrollBounds = self.isDragging;
                render(true); //in case reparenting occurred.
                _removeScrollListener(target, updateScroll);
                _addScrollListener(target, updateScroll);
            }
            return self;
        };
        _this2.enable = function(type1) {
            var setVars = {
                lazy: true
            }, id, i, trigger;
            if (!rotationMode && vars.cursor !== false) setVars.cursor = vars.cursor || _defaultCursor;
            if (gsap.utils.checkPrefix("touchCallout")) setVars.touchCallout = "none";
            if (type1 !== "soft") {
                _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"); // Some browsers like Internet Explorer will fire a pointercancel event when the user attempts to drag when touchAction is "manipulate" because it's perceived as a pan. If the element has scrollable content in only one direction, we should use pan-x or pan-y accordingly so that the pointercancel doesn't prevent dragging.
                i = triggers.length;
                while((--i) > -1){
                    trigger = triggers[i];
                    _supportsPointer || _addListener(trigger, "mousedown", onPress);
                    _addListener(trigger, "touchstart", onPress);
                    _addListener(trigger, "click", onClick, true); //note: used to pass true for capture but it prevented click-to-play-video functionality in Firefox.
                    gsap.set(trigger, setVars);
                    if (trigger.getBBox && trigger.ownerSVGElement) // a bug in chrome doesn't respect touch-action on SVG elements - it only works if we set it on the parent SVG.
                    gsap.set(trigger.ownerSVGElement, {
                        touchAction: allowX === allowY ? "none" : vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
                    });
                    vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
                }
                _setSelectable(triggers, false);
            }
            _addScrollListener(target, updateScroll);
            enabled = true;
            if (InertiaPlugin && type1 !== "soft") InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
            target._gsDragID = id = "d" + _lookupCount++;
            _lookup[id] = self;
            if (scrollProxy) {
                scrollProxy.enable();
                scrollProxy.element._gsDragID = id;
            }
            (vars.bounds || rotationMode) && recordStartPositions();
            vars.bounds && self.applyBounds();
            return self;
        };
        _this2.disable = function(type1) {
            var dragging = self.isDragging, i, trigger;
            if (!rotationMode) {
                i = triggers.length;
                while((--i) > -1)_setStyle(triggers[i], "cursor", null);
            }
            if (type1 !== "soft") {
                _setTouchActionForAllDescendants(triggers, null);
                i = triggers.length;
                while((--i) > -1){
                    trigger = triggers[i];
                    _setStyle(trigger, "touchCallout", null);
                    _removeListener(trigger, "mousedown", onPress);
                    _removeListener(trigger, "touchstart", onPress);
                    _removeListener(trigger, "click", onClick);
                    _removeListener(trigger, "contextmenu", onContextMenu);
                }
                _setSelectable(triggers, true);
                if (touchEventTarget) {
                    _removeListener(touchEventTarget, "touchcancel", onRelease);
                    _removeListener(touchEventTarget, "touchend", onRelease);
                    _removeListener(touchEventTarget, "touchmove", onMove);
                }
                _removeListener(ownerDoc, "mouseup", onRelease);
                _removeListener(ownerDoc, "mousemove", onMove);
            }
            _removeScrollListener(target, updateScroll);
            enabled = false;
            InertiaPlugin && type1 !== "soft" && InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
            scrollProxy && scrollProxy.disable();
            _removeFromRenderQueue(render);
            self.isDragging = self.isPressed = isClicking = false;
            dragging && _dispatchEvent(self, "dragend", "onDragEnd");
            return self;
        };
        _this2.enabled = function(value, type1) {
            return arguments.length ? value ? self.enable(type1) : self.disable(type1) : enabled;
        };
        _this2.kill = function() {
            self.isThrowing = false;
            self.tween && self.tween.kill();
            self.disable();
            gsap.set(triggers, {
                clearProps: "userSelect"
            });
            delete _lookup[target._gsDragID];
            return self;
        };
        if (~type.indexOf("scroll")) {
            scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
                onKill: function onKill() {
                    //ScrollProxy's onKill() gets called if/when the ScrollProxy senses that the user interacted with the scroll position manually (like using the scrollbar). IE9 doesn't fire the "mouseup" properly when users drag the scrollbar of an element, so this works around that issue.
                    self.isPressed && onRelease(null);
                }
            }, vars)); //a bug in many Android devices' stock browser causes scrollTop to get forced back to 0 after it is altered via JS, so we set overflow to "hidden" on mobile/touch devices (they hide the scroll bar anyway). That works around the bug. (This bug is discussed at https://code.google.com/p/android/issues/detail?id=19625)
            target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
            target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
            target = scrollProxy.content;
        }
        if (rotationMode) killProps.rotation = 1;
        else {
            if (allowX) killProps[xProp] = 1;
            if (allowY) killProps[yProp] = 1;
        }
        gsCache.force3D = "force3D" in vars ? vars.force3D : true; //otherwise, normal dragging would be in 2D and then as soon as it's released and there's an inertia tween, it'd jump to 3D which can create an initial jump due to the work the browser must to do layerize it.
        _this2.enable();
        return _this2;
    }
    Draggable2.register = function register(core) {
        gsap = core;
        _initCore();
    };
    Draggable2.create = function create(targets, vars) {
        _coreInitted || _initCore(true);
        return _toArray(targets).map(function(target) {
            return new Draggable2(target, vars);
        });
    };
    Draggable2.get = function get(target) {
        return _lookup[(_toArray(target)[0] || {
        })._gsDragID];
    };
    Draggable2.timeSinceDrag = function timeSinceDrag() {
        return (_getTime() - _lastDragTime) / 1000;
    };
    Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
        if (obj1 === obj2) return false;
        var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
        if (isOutside || !threshold) return !isOutside;
        isRatio = (threshold + "").indexOf("%") !== -1;
        threshold = parseFloat(threshold) || 0;
        overlap = {
            left: Math.max(left, r2.left),
            top: Math.max(top, r2.top)
        };
        overlap.width = Math.min(right, r2.right) - overlap.left;
        overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
        if (overlap.width < 0 || overlap.height < 0) return false;
        if (isRatio) {
            threshold *= 0.01;
            area = overlap.width * overlap.height;
            return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
        }
        return overlap.width > threshold && overlap.height > threshold;
    };
    return Draggable2;
}(EventDispatcher);
_setDefaults(Draggable1.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
});
Draggable1.zIndex = 1000;
Draggable1.version = "3.6.1";
_getGSAP() && gsap.registerPlugin(Draggable1);

},{"./utils/matrix.js":"6MuMP","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6MuMP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix2D", ()=>Matrix2D
);
// Inverting lets you translate a global point into a local coordinate space. No inverting lets you go the other way.
// We needed this to work around various browser bugs, like Firefox doesn't accurately report getScreenCTM() when there
// are transforms applied to ancestor elements.
// The matrix math to convert any x/y coordinate is as follows, which is wrapped in a convenient apply() method of Matrix2D above:
//     tx = m.a * x + m.c * y + m.e
//     ty = m.b * x + m.d * y + m.f
parcelHelpers.export(exports, "getGlobalMatrix", ()=>getGlobalMatrix
);
parcelHelpers.export(exports, "_getDocScrollTop", ()=>_getDocScrollTop
); // export function getMatrix(element) {
 // 	_doc || _setDoc(element);
 // 	let m = (_win.getComputedStyle(element)[_transformProp] + "").substr(7).match(/[-.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g),
 // 		is2D = m && m.length === 6;
 // 	return !m || m.length < 6 ? new Matrix2D() : new Matrix2D(+m[0], +m[1], +m[is2D ? 2 : 4], +m[is2D ? 3 : 5], +m[is2D ? 4 : 12], +m[is2D ? 5 : 13]);
 // }
parcelHelpers.export(exports, "_getDocScrollLeft", ()=>_getDocScrollLeft
);
parcelHelpers.export(exports, "_setDoc", ()=>_setDoc
);
/*!
 * matrix 3.6.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _doc, _win, _docElement, _body, _divContainer, _svgContainer, _identityMatrix, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _hasOffsetBug, _setDoc = function _setDoc1(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp in element.style) && "msTransform" in element.style) {
        //to improve compatibility with old Microsoft browsers
        _transformProp = "msTransform";
        _transformOriginProp = _transformProp + "Origin";
    }
    while(doc.parentNode && (doc = doc.parentNode));
    _win = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
        _doc = doc;
        _docElement = doc.documentElement;
        _body = doc.body; // now test for the offset reporting bug. Use feature detection instead of browser sniffing to make things more bulletproof and future-proof. Hopefully Safari will fix their bug soon but it's 2020 and it's still not fixed.
        var d1 = doc.createElement("div"), d2 = doc.createElement("div");
        _body.appendChild(d1);
        d1.appendChild(d2);
        d1.style.position = "static";
        d1.style[_transformProp] = "translate3d(0,0,1px)";
        _hasOffsetBug = d2.offsetParent !== d1;
        _body.removeChild(d1);
    }
    return doc;
}, _forceNonZeroScale = function _forceNonZeroScale1(e) {
    // walks up the element's ancestors and finds any that had their scale set to 0 via GSAP, and changes them to 0.0001 to ensure that measurements work. Firefox has a bug that causes it to incorrectly report getBoundingClientRect() when scale is 0.
    var a, cache;
    while(e && e !== _body){
        cache = e._gsap;
        cache && cache.uncache && cache.get(e, "x"); // force re-parsing of transforms if necessary
        if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
            cache.scaleX = cache.scaleY = 0.0001;
            cache.renderTransform(1, cache);
            a ? a.push(cache) : a = [
                cache
            ];
        }
        e = e.parentNode;
    }
    return a;
}, // possible future addition: pass an element to _forceDisplay() and it'll walk up all its ancestors and make sure anything with display: none is set to display: block, and if there's no parentNode, it'll add it to the body. It returns an Array that you can then feed to _revertDisplay() to have it revert all the changes it made.
// _forceDisplay = e => {
// 	let a = [],
// 		parent;
// 	while (e && e !== _body) {
// 		parent = e.parentNode;
// 		(_win.getComputedStyle(e).display === "none" || !parent) && a.push(e, e.style.display, parent) && (e.style.display = "block");
// 		parent || _body.appendChild(e);
// 		e = parent;
// 	}
// 	return a;
// },
// _revertDisplay = a => {
// 	for (let i = 0; i < a.length; i+=3) {
// 		a[i+1] ? (a[i].style.display = a[i+1]) : a[i].style.removeProperty("display");
// 		a[i+2] || a[i].parentNode.removeChild(a[i]);
// 	}
// },
_svgTemps = [], //we create 3 elements for SVG, and 3 for other DOM elements and cache them for performance reasons. They get nested in _divContainer and _svgContainer so that just one element is added to the DOM on each successive attempt. Again, performance is key.
_divTemps = [], _getDocScrollTop = function _getDocScrollTop1() {
    return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
}, _getDocScrollLeft = function _getDocScrollLeft1() {
    return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
}, _svgOwner = function _svgOwner1(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
}, _isFixed = function _isFixed1(element) {
    if (_win.getComputedStyle(element).position === "fixed") return true;
    element = element.parentNode;
    if (element && element.nodeType === 1) // avoid document fragments which will throw an error.
    return _isFixed1(element);
}, _createSibling = function _createSibling1(element, i) {
    if (element.parentNode && (_doc || _setDoc(element))) {
        var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);
        if (i) {
            if (!svg) {
                if (!_divContainer) {
                    _divContainer = _createSibling1(element);
                    _divContainer.style.cssText = css;
                }
                e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                _divContainer.appendChild(e);
            } else {
                _svgContainer || (_svgContainer = _createSibling1(element));
                e.setAttribute("width", 0.01);
                e.setAttribute("height", 0.01);
                e.setAttribute("transform", "translate(" + x + "," + y + ")");
                _svgContainer.appendChild(e);
            }
        }
        return e;
    }
    throw "Need document and parent.";
}, _consolidate = function _consolidate1(m) {
    // replaces SVGTransformList.consolidate() because a bug in Firefox causes it to break pointer events. See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
    var c = new Matrix2D(), i = 0;
    for(; i < m.numberOfItems; i++)c.multiply(m.getItem(i).matrix);
    return c;
}, _placeSiblings = function _placeSiblings1(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win) return element;
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
        b = isRootSVG ? {
            x: 0,
            y: 0
        } : element.getBBox();
        m = element.transform ? element.transform.baseVal : {
        }; // IE11 doesn't follow the spec.
        if (m.numberOfItems) {
            m = m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix; // don't call m.consolidate().matrix because a bug in Firefox makes pointer events not work when consolidate() is called on the same tick as getBoundingClientRect()! See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
            x = m.a * b.x + m.c * b.y;
            y = m.b * b.x + m.d * b.y;
        } else {
            m = _identityMatrix;
            x = b.x;
            y = b.y;
        }
        if (adjustGOffset && element.tagName.toLowerCase() === "g") x = y = 0;
        (isRootSVG ? svg : parent).appendChild(container);
        container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
        x = y = 0;
        if (_hasOffsetBug) {
            // some browsers (like Safari) have a bug that causes them to misreport offset values. When an ancestor element has a transform applied, it's supposed to treat it as if it's position: relative (new context). Safari botches this, so we need to find the closest ancestor (between the element and its offsetParent) that has a transform applied and if one is found, grab its offsetTop/Left and subtract them to compensate.
            m = element.offsetParent;
            b = element;
            while(b && (b = b.parentNode) && b !== m && b.parentNode)if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
                x = b.offsetLeft;
                y = b.offsetTop;
                b = 0;
            }
        }
        cs = _win.getComputedStyle(element);
        if (cs.position !== "absolute") {
            m = element.offsetParent;
            while(parent && parent !== m){
                // if there's an ancestor element between the element and its offsetParent that's scrolled, we must factor that in.
                x += parent.scrollLeft || 0;
                y += parent.scrollTop || 0;
                parent = parent.parentNode;
            }
        }
        b = container.style;
        b.top = element.offsetTop - y + "px";
        b.left = element.offsetLeft - x + "px";
        b[_transformProp] = cs[_transformProp];
        b[_transformOriginProp] = cs[_transformOriginProp]; // b.border = m.border;
        // b.borderLeftStyle = m.borderLeftStyle;
        // b.borderTopStyle = m.borderTopStyle;
        // b.borderLeftWidth = m.borderLeftWidth;
        // b.borderTopWidth = m.borderTopWidth;
        b.position = cs.position === "fixed" ? "fixed" : "absolute";
        element.parentNode.appendChild(container);
    }
    return container;
}, _setMatrix = function _setMatrix1(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
};
var Matrix2D = /*#__PURE__*/ function() {
    function Matrix2D1(a, b, c, d, e, f) {
        if (a === void 0) a = 1;
        if (b === void 0) b = 0;
        if (c === void 0) c = 0;
        if (d === void 0) d = 1;
        if (e === void 0) e = 0;
        if (f === void 0) f = 0;
        _setMatrix(this, a, b, c, d, e, f);
    }
    var _proto = Matrix2D1.prototype;
    _proto.inverse = function inverse() {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 0.0000000001;
        return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
        return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };
    _proto.clone = function clone() {
        return new Matrix2D1(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
        return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
        if (decoratee === void 0) decoratee = {
        };
        var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
        decoratee.x = x * a + y * c + e || 0;
        decoratee.y = x * b + y * d + f || 0;
        return decoratee;
    };
    return Matrix2D1;
}(); // Feed in an element and it'll return a 2D matrix (optionally inverted) so that you can translate between coordinate spaces.
function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    // adjustGOffset is typically used only when grabbing an element's PARENT's global matrix, and it ignores the x/y offset of any SVG <g> elements because they behave in a special way.
    if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) return new Matrix2D();
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
        b1 = zeroScales.length;
        while(b1--){
            b2 = zeroScales[b1];
            b2.scaleX = b2.scaleY = 0;
            b2.renderTransform(1, b2);
        }
    }
    return inverse ? m.inverse() : m;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"67DNY":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _microApiClient = _interopRequireWildcard(require("micro-api-client"));
var _user = _interopRequireDefault(require("./user.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache1() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var HTTPRegexp = /^http:\/\//;
var defaultApiURL = "/.netlify/identity";
var GoTrue = /*#__PURE__*/ function() {
    function GoTrue1() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, _ref$APIUrl = _ref.APIUrl, APIUrl = _ref$APIUrl === void 0 ? defaultApiURL : _ref$APIUrl, _ref$audience = _ref.audience, audience = _ref$audience === void 0 ? '' : _ref$audience, _ref$setCookie = _ref.setCookie, setCookie = _ref$setCookie === void 0 ? false : _ref$setCookie;
        _classCallCheck(this, GoTrue1);
        if (APIUrl.match(HTTPRegexp)) console.warn('Warning:\n\nDO NOT USE HTTP IN PRODUCTION FOR GOTRUE EVER!\nGoTrue REQUIRES HTTPS to work securely.');
        if (audience) this.audience = audience;
        this.setCookie = setCookie;
        this.api = new _microApiClient["default"](APIUrl);
    }
    _createClass(GoTrue1, [
        {
            key: "_request",
            value: function _request(path) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                options.headers = options.headers || {
                };
                var aud = options.audience || this.audience;
                if (aud) options.headers['X-JWT-AUD'] = aud;
                return this.api.request(path, options)["catch"](function(error) {
                    if (error instanceof _microApiClient.JSONHTTPError && error.json) {
                        if (error.json.msg) error.message = error.json.msg;
                        else if (error.json.error) error.message = "".concat(error.json.error, ": ").concat(error.json.error_description);
                    }
                    return Promise.reject(error);
                });
            }
        },
        {
            key: "settings",
            value: function settings() {
                return this._request('/settings');
            }
        },
        {
            key: "signup",
            value: function signup(email, password, data) {
                return this._request('/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        data: data
                    })
                });
            }
        },
        {
            key: "login",
            value: function login(email, password, remember) {
                var _this = this;
                this._setRememberHeaders(remember);
                return this._request('/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: "grant_type=password&username=".concat(encodeURIComponent(email), "&password=").concat(encodeURIComponent(password))
                }).then(function(response) {
                    _user["default"].removeSavedSession();
                    return _this.createUser(response, remember);
                });
            }
        },
        {
            key: "loginExternalUrl",
            value: function loginExternalUrl(provider) {
                return "".concat(this.api.apiURL, "/authorize?provider=").concat(provider);
            }
        },
        {
            key: "confirm",
            value: function confirm(token, remember) {
                this._setRememberHeaders(remember);
                return this.verify('signup', token, remember);
            }
        },
        {
            key: "requestPasswordRecovery",
            value: function requestPasswordRecovery(email) {
                return this._request('/recover', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email
                    })
                });
            }
        },
        {
            key: "recover",
            value: function recover(token, remember) {
                this._setRememberHeaders(remember);
                return this.verify('recovery', token, remember);
            }
        },
        {
            key: "acceptInvite",
            value: function acceptInvite(token, password, remember) {
                var _this2 = this;
                this._setRememberHeaders(remember);
                return this._request('/verify', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        password: password,
                        type: 'signup'
                    })
                }).then(function(response) {
                    return _this2.createUser(response, remember);
                });
            }
        },
        {
            key: "acceptInviteExternalUrl",
            value: function acceptInviteExternalUrl(provider, token) {
                return "".concat(this.api.apiURL, "/authorize?provider=").concat(provider, "&invite_token=").concat(token);
            }
        },
        {
            key: "createUser",
            value: function createUser(tokenResponse) {
                var remember = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                this._setRememberHeaders(remember);
                var user = new _user["default"](this.api, tokenResponse, this.audience);
                return user.getUserData().then(function(userData) {
                    if (remember) userData._saveSession();
                    return userData;
                });
            }
        },
        {
            key: "currentUser",
            value: function currentUser() {
                var user = _user["default"].recoverSession(this.api);
                user && this._setRememberHeaders(user._fromStorage);
                return user;
            }
        },
        {
            key: "verify",
            value: function verify(type, token, remember) {
                var _this3 = this;
                this._setRememberHeaders(remember);
                return this._request('/verify', {
                    method: 'POST',
                    body: JSON.stringify({
                        token: token,
                        type: type
                    })
                }).then(function(response) {
                    return _this3.createUser(response, remember);
                });
            }
        },
        {
            key: "_setRememberHeaders",
            value: function _setRememberHeaders(remember) {
                if (this.setCookie) {
                    this.api.defaultHeaders = this.api.defaultHeaders || {
                    };
                    this.api.defaultHeaders['X-Use-Cookie'] = remember ? '1' : 'session';
                }
            }
        }
    ]);
    return GoTrue1;
}();
exports["default"] = GoTrue;
if (typeof window !== 'undefined') window.GoTrue = GoTrue;

},{"micro-api-client":"6Tnrw","./user.js":"rYOcs"}],"6Tnrw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JSONHTTPError = exports.TextHTTPError = exports.HTTPError = exports.getPagination = undefined;
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _pagination = require("./pagination");
Object.defineProperty(exports, "getPagination", {
    enumerable: true,
    get: function get() {
        return _pagination.getPagination;
    }
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }
    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (Object.setPrototypeOf) Object.setPrototypeOf(ExtendableBuiltin, cls);
    else ExtendableBuiltin.__proto__ = cls;
    return ExtendableBuiltin;
}
var HTTPError1 = exports.HTTPError = function(_extendableBuiltin2) {
    _inherits(HTTPError2, _extendableBuiltin2);
    function HTTPError2(response) {
        _classCallCheck(this, HTTPError2);
        var _this = _possibleConstructorReturn(this, (HTTPError2.__proto__ || Object.getPrototypeOf(HTTPError2)).call(this, response.statusText));
        _this.name = _this.constructor.name;
        if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(_this, _this.constructor);
        else _this.stack = new Error(response.statusText).stack;
        _this.status = response.status;
        return _this;
    }
    return HTTPError2;
}(_extendableBuiltin(Error));
var TextHTTPError1 = exports.TextHTTPError = function(_HTTPError) {
    _inherits(TextHTTPError2, _HTTPError);
    function TextHTTPError2(response, data) {
        _classCallCheck(this, TextHTTPError2);
        var _this2 = _possibleConstructorReturn(this, (TextHTTPError2.__proto__ || Object.getPrototypeOf(TextHTTPError2)).call(this, response));
        _this2.data = data;
        return _this2;
    }
    return TextHTTPError2;
}(HTTPError1);
var JSONHTTPError1 = exports.JSONHTTPError = function(_HTTPError2) {
    _inherits(JSONHTTPError2, _HTTPError2);
    function JSONHTTPError2(response, json) {
        _classCallCheck(this, JSONHTTPError2);
        var _this3 = _possibleConstructorReturn(this, (JSONHTTPError2.__proto__ || Object.getPrototypeOf(JSONHTTPError2)).call(this, response));
        _this3.json = json;
        return _this3;
    }
    return JSONHTTPError2;
}(HTTPError1);
var API = function() {
    function API1() {
        var apiURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var options = arguments[1];
        _classCallCheck(this, API1);
        this.apiURL = apiURL;
        if (this.apiURL.match(/\/[^\/]?/)) // eslint-disable-line no-useless-escape
        this._sameOrigin = true;
        this.defaultHeaders = options && options.defaultHeaders || {
        };
    }
    _createClass(API1, [
        {
            key: "headers",
            value: function headers() {
                var _headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                };
                return _extends({
                }, this.defaultHeaders, {
                    "Content-Type": "application/json"
                }, _headers);
            }
        },
        {
            key: "parseJsonResponse",
            value: function parseJsonResponse(response) {
                return response.json().then(function(json) {
                    if (!response.ok) return Promise.reject(new JSONHTTPError1(response, json));
                    var pagination = _pagination.getPagination(response);
                    return pagination ? {
                        pagination: pagination,
                        items: json
                    } : json;
                });
            }
        },
        {
            key: "request",
            value: function request(path) {
                var _this4 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                var headers = this.headers(options.headers || {
                });
                if (this._sameOrigin) options.credentials = options.credentials || "same-origin";
                return fetch(this.apiURL + path, _extends({
                }, options, {
                    headers: headers
                })).then(function(response) {
                    var contentType = response.headers.get("Content-Type");
                    if (contentType && contentType.match(/json/)) return _this4.parseJsonResponse(response);
                    if (!response.ok) return response.text().then(function(data) {
                        return Promise.reject(new TextHTTPError1(response, data));
                    });
                    return response.text().then(function(data) {
                    });
                });
            }
        }
    ]);
    return API1;
}();
exports.default = API;

},{"./pagination":"6qJBu"}],"6qJBu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
exports.getPagination = getPagination;
function getPagination(response) {
    var links = response.headers.get("Link");
    var pagination = {
    };
    //var link, url, rel, m, page;
    if (links == null) return null;
    links = links.split(",");
    var total = response.headers.get("X-Total-Count");
    for(var i = 0, len = links.length; i < len; i++){
        var link = links[i].replace(/(^\s*|\s*$)/, "");
        var _link$split = link.split(";"), _link$split2 = _slicedToArray(_link$split, 2), url = _link$split2[0], rel = _link$split2[1];
        var m = url.match(/page=(\d+)/);
        var page = m && parseInt(m[1], 10);
        if (rel.match(/last/)) pagination.last = page;
        else if (rel.match(/next/)) pagination.next = page;
        else if (rel.match(/prev/)) pagination.prev = page;
        else if (rel.match(/first/)) pagination.first = page;
    }
    pagination.last = Math.max(pagination.last || 0, pagination.prev && pagination.prev + 1 || 0);
    pagination.current = pagination.next ? pagination.next - 1 : pagination.last || 1;
    pagination.total = total ? parseInt(total, 10) : null;
    return pagination;
}

},{}],"rYOcs":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _microApiClient = _interopRequireWildcard(require("micro-api-client"));
var _admin = _interopRequireDefault(require("./admin.js"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache1() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ExpiryMargin = 60000;
var storageKey = 'gotrue.user';
var refreshPromises = {
};
var currentUser = null;
var forbiddenUpdateAttributes = {
    api: 1,
    token: 1,
    audience: 1,
    url: 1
};
var forbiddenSaveAttributes = {
    api: 1
};
var isBrowser = function isBrowser1() {
    return typeof window !== 'undefined';
};
var User = /*#__PURE__*/ function() {
    function User1(api, tokenResponse, audience) {
        _classCallCheck(this, User1);
        this.api = api;
        this.url = api.apiURL;
        this.audience = audience;
        this._processTokenResponse(tokenResponse);
        currentUser = this;
    }
    _createClass(User1, [
        {
            key: "update",
            value: function update(attributes) {
                var _this = this;
                return this._request('/user', {
                    method: 'PUT',
                    body: JSON.stringify(attributes)
                }).then(function(response) {
                    return _this._saveUserData(response)._refreshSavedSession();
                });
            }
        },
        {
            key: "jwt",
            value: function jwt(forceRefresh) {
                var token = this.tokenDetails();
                if (token === null || token === undefined) return Promise.reject(new Error("Gotrue-js: failed getting jwt access token"));
                var expires_at = token.expires_at, refresh_token = token.refresh_token, access_token = token.access_token;
                if (forceRefresh || expires_at - ExpiryMargin < Date.now()) return this._refreshToken(refresh_token);
                return Promise.resolve(access_token);
            }
        },
        {
            key: "logout",
            value: function logout() {
                return this._request('/logout', {
                    method: 'POST'
                }).then(this.clearSession.bind(this))["catch"](this.clearSession.bind(this));
            }
        },
        {
            key: "_refreshToken",
            value: function _refreshToken(refresh_token) {
                var _this2 = this;
                if (refreshPromises[refresh_token]) return refreshPromises[refresh_token];
                return refreshPromises[refresh_token] = this.api.request('/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: "grant_type=refresh_token&refresh_token=".concat(refresh_token)
                }).then(function(response) {
                    delete refreshPromises[refresh_token];
                    _this2._processTokenResponse(response);
                    _this2._refreshSavedSession();
                    return _this2.token.access_token;
                })["catch"](function(error) {
                    delete refreshPromises[refresh_token];
                    _this2.clearSession();
                    return Promise.reject(error);
                });
            }
        },
        {
            key: "_request",
            value: function _request(path) {
                var _this3 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                options.headers = options.headers || {
                };
                var aud = options.audience || this.audience;
                if (aud) options.headers['X-JWT-AUD'] = aud;
                return this.jwt().then(function(token) {
                    return _this3.api.request(path, _objectSpread({
                        headers: Object.assign(options.headers, {
                            Authorization: "Bearer ".concat(token)
                        })
                    }, options))["catch"](function(error) {
                        if (error instanceof _microApiClient.JSONHTTPError && error.json) {
                            if (error.json.msg) error.message = error.json.msg;
                            else if (error.json.error) error.message = "".concat(error.json.error, ": ").concat(error.json.error_description);
                        }
                        return Promise.reject(error);
                    });
                });
            }
        },
        {
            key: "getUserData",
            value: function getUserData() {
                return this._request('/user').then(this._saveUserData.bind(this)).then(this._refreshSavedSession.bind(this));
            }
        },
        {
            key: "_saveUserData",
            value: function _saveUserData(attributes, fromStorage) {
                for(var key in attributes){
                    if (key in User1.prototype || key in forbiddenUpdateAttributes) continue;
                    this[key] = attributes[key];
                }
                if (fromStorage) this._fromStorage = true;
                return this;
            }
        },
        {
            key: "_processTokenResponse",
            value: function _processTokenResponse(tokenResponse) {
                this.token = tokenResponse;
                try {
                    var claims = JSON.parse(urlBase64Decode(tokenResponse.access_token.split('.')[1]));
                    this.token.expires_at = claims.exp * 1000;
                } catch (error) {
                    console.error(new Error("Gotrue-js: Failed to parse tokenResponse claims: ".concat(error)));
                }
            }
        },
        {
            key: "_refreshSavedSession",
            value: function _refreshSavedSession() {
                // only update saved session if we previously saved something
                if (isBrowser() && localStorage.getItem(storageKey)) this._saveSession();
                return this;
            }
        },
        {
            key: "_saveSession",
            value: function _saveSession() {
                isBrowser() && localStorage.setItem(storageKey, JSON.stringify(this._details));
                return this;
            }
        },
        {
            key: "tokenDetails",
            value: function tokenDetails() {
                return this.token;
            }
        },
        {
            key: "clearSession",
            value: function clearSession() {
                User1.removeSavedSession();
                this.token = null;
                currentUser = null;
            }
        },
        {
            key: "admin",
            get: function get() {
                return new _admin["default"](this);
            }
        },
        {
            key: "_details",
            get: function get() {
                var userCopy = {
                };
                for(var key in this){
                    if (key in User1.prototype || key in forbiddenSaveAttributes) continue;
                    userCopy[key] = this[key];
                }
                return userCopy;
            }
        }
    ], [
        {
            key: "removeSavedSession",
            value: function removeSavedSession() {
                isBrowser() && localStorage.removeItem(storageKey);
            }
        },
        {
            key: "recoverSession",
            value: function recoverSession(apiInstance) {
                if (currentUser) return currentUser;
                var json = isBrowser() && localStorage.getItem(storageKey);
                if (json) try {
                    var data = JSON.parse(json);
                    var url = data.url, token = data.token, audience = data.audience;
                    if (!url || !token) return null;
                    var api = apiInstance || new _microApiClient["default"](url, {
                    });
                    return new User1(api, token, audience)._saveUserData(data, true);
                } catch (error) {
                    console.error(new Error("Gotrue-js: Error recovering session: ".concat(error)));
                    return null;
                }
                return null;
            }
        }
    ]);
    return User1;
}();
exports["default"] = User;
function urlBase64Decode(str) {
    // From https://jwt.io/js/jwt.js
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
        default:
            throw 'Illegal base64url string!';
    } // polifyll https://github.com/davidchambers/Base64.js
    var result = window.atob(output);
    try {
        return decodeURIComponent(escape(result));
    } catch (error) {
        return result;
    }
}

},{"micro-api-client":"6Tnrw","./admin.js":"7BTxE"}],"7BTxE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Admin = /*#__PURE__*/ function() {
    function Admin1(user) {
        _classCallCheck(this, Admin1);
        this.user = user;
    } // Return a list of all users in an audience
    _createClass(Admin1, [
        {
            key: "listUsers",
            value: function listUsers(aud) {
                return this.user._request('/admin/users', {
                    method: 'GET',
                    audience: aud
                });
            }
        },
        {
            key: "getUser",
            value: function getUser(user) {
                return this.user._request("/admin/users/".concat(user.id));
            }
        },
        {
            key: "updateUser",
            value: function updateUser(user) {
                var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                return this.user._request("/admin/users/".concat(user.id), {
                    method: 'PUT',
                    body: JSON.stringify(attributes)
                });
            }
        },
        {
            key: "createUser",
            value: function createUser(email, password) {
                var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                };
                attributes.email = email;
                attributes.password = password;
                return this.user._request('/admin/users', {
                    method: 'POST',
                    body: JSON.stringify(attributes)
                });
            }
        },
        {
            key: "deleteUser",
            value: function deleteUser(user) {
                return this.user._request("/admin/users/".concat(user.id), {
                    method: 'DELETE'
                });
            }
        }
    ]);
    return Admin1;
}();
exports["default"] = Admin;

},{}]},["4c3k5","1AuA5"], "1AuA5", "parcelRequiredca8")

//# sourceMappingURL=baf.554e30e3.js.map
