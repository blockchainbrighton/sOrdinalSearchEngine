// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6ZyM2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a2dece768b90750d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fBXki":[function(require,module,exports) {
var _connect = require("@stacks/connect");
// Define your app details
const appDetails = {
    name: "sOrd Gate",
    icon: window.location.origin + "/Users/melophonic/Downloads/New Stacks Login Button/sOrdGate.png"
};
// Define the function to be called when the user clicks the "Connect Wallet" button
const connectWallet = async ()=>{
    (0, _connect.showConnect)({
        appDetails: appDetails,
        onFinish: ()=>{
            console.log("User successfully authenticated with Leather wallet");
        // Handle post-authentication logic here
        }
    });
};
// Add event listener to the "Connect Wallet" button
document.getElementById("connectWalletButton").addEventListener("click", connectWallet);

},{"@stacks/connect":"7QNFQ"}],"7QNFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContractCallArgumentType", ()=>W) //# sourceMappingURL=out.js.map
;
parcelHelpers.export(exports, "SignatureHash", ()=>Mt);
parcelHelpers.export(exports, "TransactionTypes", ()=>G);
parcelHelpers.export(exports, "authenticate", ()=>A);
parcelHelpers.export(exports, "defaultAuthURL", ()=>Ht);
parcelHelpers.export(exports, "getDefaultProfileUpdateRequestOptions", ()=>Nt);
parcelHelpers.export(exports, "getDefaultPsbtRequestOptions", ()=>yt);
parcelHelpers.export(exports, "getDefaultSignatureRequestOptions", ()=>O);
parcelHelpers.export(exports, "getKeys", ()=>y);
parcelHelpers.export(exports, "getOrCreateUserSession", ()=>U);
parcelHelpers.export(exports, "getStacksProvider", ()=>d);
parcelHelpers.export(exports, "getStxAddress", ()=>st);
parcelHelpers.export(exports, "getUserData", ()=>Zt);
parcelHelpers.export(exports, "getUserSession", ()=>x);
parcelHelpers.export(exports, "hasAppPrivateKey", ()=>g);
parcelHelpers.export(exports, "isMobile", ()=>z);
parcelHelpers.export(exports, "isStacksWalletInstalled", ()=>zt);
parcelHelpers.export(exports, "makeContractCallToken", ()=>ct);
parcelHelpers.export(exports, "makeContractDeployToken", ()=>pt);
parcelHelpers.export(exports, "makeProfileUpdateToken", ()=>$t);
parcelHelpers.export(exports, "makePsbtToken", ()=>St);
parcelHelpers.export(exports, "makeSTXTransferToken", ()=>ut);
parcelHelpers.export(exports, "openContractCall", ()=>le);
parcelHelpers.export(exports, "openContractDeploy", ()=>de);
parcelHelpers.export(exports, "openProfileUpdateRequestPopup", ()=>ze);
parcelHelpers.export(exports, "openPsbtRequestPopup", ()=>he);
parcelHelpers.export(exports, "openSTXTransfer", ()=>fe);
parcelHelpers.export(exports, "openSignatureRequestPopup", ()=>Be);
parcelHelpers.export(exports, "openStructuredDataSignatureRequestPopup", ()=>Fe);
parcelHelpers.export(exports, "shouldUsePopup", ()=>Qt);
parcelHelpers.export(exports, "showBlockstackConnect", ()=>Ze);
parcelHelpers.export(exports, "showConnect", ()=>_t);
parcelHelpers.export(exports, "signMessage", ()=>Ot);
parcelHelpers.export(exports, "signStructuredMessage", ()=>At);
var _auth = require("@stacks/auth");
parcelHelpers.exportAll(_auth, exports);
var _jsontokens = require("jsontokens");
var _network = require("@stacks/network");
var _transactions = require("@stacks/transactions");
var _loader = require("@stacks/connect-ui/loader");
var X = Object.defineProperty, M = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var b = (e, t, n)=>t in e ? X(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, a = (e, t)=>{
    for(var n in t || (t = {}))D.call(t, n) && b(e, n, t[n]);
    if (T) for (var n of T(t))R.call(t, n) && b(e, n, t[n]);
    return e;
}, c = (e, t)=>M(e, L(t));
var f = (e, t)=>{
    var n = {};
    for(var r in e)D.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && T) for (var r of T(e))t.indexOf(r) < 0 && R.call(e, r) && (n[r] = e[r]);
    return n;
};
function d() {
    return window.StacksProvider || window.BlockstackProvider;
}
function zt() {
    return !!d();
}
var Ht = "https://app.blockstack.org", B = "7.4.0";
typeof window != "undefined" && (window.__CONNECT_VERSION__ = B);
var z = ()=>{
    let e = navigator.userAgent;
    return /android/i.test(e) || /iPad|iPhone|iPod/.test(e) ? !0 : /windows phone/i.test(e);
}, Qt = ()=>!z(), U = (e)=>{
    if (!e) {
        let t = new (0, _auth.AppConfig)([
            "store_write"
        ], document.location.href);
        e = new (0, _auth.UserSession)({
            appConfig: t
        });
    }
    return e;
}, A = async (e, t = d())=>{
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    let { redirectTo: n = "/" , manifestPath: r , onFinish: s , onCancel: o , sendToSignIn: i = !1 , userSession: p , appDetails: u  } = e, l = U(p);
    l.isUserSignedIn() && l.signUserOut();
    let S = l.generateAndStoreTransitKey(), F = l.makeAuthRequest(S, `${document.location.origin}${n}`, `${document.location.origin}${r}`, l.appConfig.scopes, void 0, void 0, {
        sendToSignIn: i,
        appDetails: u,
        connectVersion: B
    });
    try {
        let P = await t.authenticationRequest(F);
        await l.handlePendingSignIn(P);
        let h = (0, _jsontokens.decodeToken)(P), $ = h == null ? void 0 : h.payload;
        s == null || s({
            authResponse: P,
            authResponsePayload: $,
            userSession: l
        });
    } catch (P) {
        console.error("[Connect] Error during auth request", P), o == null || o();
    }
}, Zt = async (e)=>(e = U(e), e.isUserSignedIn() ? e.loadUserData() : e.isSignInPending() ? e.handlePendingSignIn() : null);
var Y = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
function m(e) {
    if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let t = "";
    for (let n of e)t += Y[n];
    return t;
}
function I(e) {
    if (typeof e != "string") throw new TypeError(`hexToBytes: expected string, got ${typeof e}`);
    let t = e.length % 2 ? `0${e}` : e, n = new Uint8Array(t.length / 2);
    for(let r = 0; r < n.length; r++){
        let s = r * 2, o = t.slice(s, s + 2), i = Number.parseInt(o, 16);
        if (Number.isNaN(i) || i < 0) throw new Error("Invalid byte sequence");
        n[r] = i;
    }
    return n;
}
var G = ((r)=>(r.ContractCall = "contract_call", r.ContractDeploy = "smart_contract", r.STXTransfer = "token_transfer", r))(G || {}), W = ((o)=>(o.BUFFER = "buffer", o.UINT = "uint", o.INT = "int", o.PRINCIPAL = "principal", o.BOOL = "bool", o))(W || {});
var x = (e)=>{
    let t = e;
    if (!t) {
        let n = new (0, _auth.AppConfig)([
            "store_write"
        ], document.location.href);
        t = new (0, _auth.UserSession)({
            appConfig: n
        });
    }
    return t;
};
function g(e) {
    try {
        return x(e).loadUserData().appPrivateKey;
    } catch (t) {
        return !1;
    }
}
var y = (e)=>{
    let n = x(e).loadUserData().appPrivateKey, r = (0, _jsontokens.SECP256K1Client).derivePublicKey(n);
    return {
        privateKey: n,
        publicKey: r
    };
};
function st(e) {
    var p;
    let { stxAddress: t , userSession: n , network: r  } = e;
    if (t) return t;
    if (!n || !r) return;
    let s = (p = n == null ? void 0 : n.loadUserData().profile) == null ? void 0 : p.stxAddress, o = {
        [(0, _transactions.ChainID).Mainnet]: "mainnet",
        [(0, _transactions.ChainID).Testnet]: "testnet"
    };
    return s == null ? void 0 : s[o[r.chainId]];
}
function at(e) {
    let t = e.network || new (0, _network.StacksTestnet), n = x(e.userSession), r = c(a({}, e), {
        network: t,
        userSession: n
    });
    return a({
        stxAddress: st(r)
    }, r);
}
function E(e) {
    return e.map((t)=>m((0, _transactions.serializePostCondition)(t)));
}
async function C(e, t) {
    let { postConditions: n  } = e;
    return n && typeof n[0] != "string" && (n = E(n)), new (0, _jsontokens.TokenSigner)("ES256k", t).signAsync(c(a({}, e), {
        postConditions: n
    }));
}
function w(e) {
    let { postConditions: t  } = e;
    return t && typeof t[0] != "string" && (t = E(t)), (0, _jsontokens.createUnsecuredToken)(c(a({}, e), {
        postConditions: t
    }));
}
var it = async ({ token: e , options: t  }, n)=>{
    var r, s, o;
    try {
        let i = await n.transactionRequest(e), { txRaw: p  } = i, u = I(p.replace(/^0x/, "")), l = (0, _transactions.deserializeTransaction)(u);
        if ("sponsored" in t && t.sponsored) {
            (r = t.onFinish) == null || r.call(t, c(a({}, i), {
                stacksTransaction: l
            }));
            return;
        }
        (s = t.onFinish) == null || s.call(t, c(a({}, i), {
            stacksTransaction: l
        }));
    } catch (i) {
        console.error("[Connect] Error during transaction request", i), (o = t.onCancel) == null || o.call(t);
    }
}, ct = async (e)=>{
    let p = e, { functionArgs: t , appDetails: n , userSession: r  } = p, s = f(p, [
        "functionArgs",
        "appDetails",
        "userSession"
    ]), o = t.map((u)=>typeof u == "string" ? u : m((0, _transactions.serializeCV)(u)));
    if (g(r)) {
        let { privateKey: u , publicKey: l  } = y(r), S = c(a({}, s), {
            functionArgs: o,
            txType: "contract_call",
            publicKey: l
        });
        return n && (S.appDetails = n), C(S, u);
    }
    let i = c(a({}, s), {
        functionArgs: o,
        txType: "contract_call"
    });
    return n && (i.appDetails = n), w(i);
}, pt = async (e)=>{
    let o = e, { appDetails: t , userSession: n  } = o, r = f(o, [
        "appDetails",
        "userSession"
    ]);
    if (g(n)) {
        let { privateKey: i , publicKey: p  } = y(n), u = c(a({}, r), {
            publicKey: p,
            txType: "smart_contract"
        });
        return t && (u.appDetails = t), C(u, i);
    }
    let s = c(a({}, r), {
        txType: "smart_contract"
    });
    return t && (s.appDetails = t), w(s);
}, ut = async (e)=>{
    let i = e, { amount: t , appDetails: n , userSession: r  } = i, s = f(i, [
        "amount",
        "appDetails",
        "userSession"
    ]);
    if (g(r)) {
        let { privateKey: p , publicKey: u  } = y(r), l = c(a({}, s), {
            amount: t.toString(10),
            publicKey: u,
            txType: "token_transfer"
        });
        return n && (l.appDetails = n), C(l, p);
    }
    let o = c(a({}, s), {
        amount: t.toString(10),
        txType: "token_transfer"
    });
    return n && (o.appDetails = n), w(o);
};
async function k(e, t, n) {
    let r = await t(a(a({}, at(e)), e));
    return it({
        token: r,
        options: e
    }, n);
}
function le(e, t = d()) {
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    return k(e, ct, t);
}
function de(e, t = d()) {
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    return k(e, pt, t);
}
function fe(e, t = d()) {
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    return k(e, ut, t);
}
async function gt(e, t) {
    return new (0, _jsontokens.TokenSigner)("ES256k", t).signAsync(a({}, e));
}
function yt(e) {
    let t = e.network || new (0, _network.StacksTestnet), n = x(e.userSession), r = c(a({}, e), {
        network: t,
        userSession: n
    });
    return a({}, r);
}
async function xt({ token: e , options: t  }, n) {
    var r, s;
    if (!n) throw new Error("[Connect] No installed Stacks wallet found");
    try {
        let o = await n.psbtRequest(e);
        (r = t.onFinish) == null || r.call(t, o);
    } catch (o) {
        console.error("[Connect] Error during psbt request", o), (s = t.onCancel) == null || s.call(t);
    }
}
var St = async (e)=>{
    let p = e, { allowedSighash: t , hex: n , signAtIndex: r , userSession: s  } = p, o = f(p, [
        "allowedSighash",
        "hex",
        "signAtIndex",
        "userSession"
    ]);
    if (g(s)) {
        let { privateKey: u , publicKey: l  } = y(s), S = c(a({}, o), {
            allowedSighash: t,
            hex: n,
            signAtIndex: r,
            publicKey: l
        });
        return gt(S, u);
    }
    let i = a({}, o);
    return (0, _jsontokens.createUnsecuredToken)(i);
};
async function mt(e, t, n) {
    let r = await t(a(a({}, yt(e)), e));
    return xt({
        token: r,
        options: e
    }, n);
}
function he(e, t = d()) {
    return mt(e, St, t);
}
function Ct(e) {
    var i;
    let { userSession: t , network: n  } = e;
    if (!t || !n) return;
    let r = (i = t == null ? void 0 : t.loadUserData().profile) == null ? void 0 : i.stxAddress, s = {
        [(0, _transactions.ChainID).Mainnet]: "mainnet",
        [(0, _transactions.ChainID).Testnet]: "testnet"
    };
    return r == null ? void 0 : r[s[n.chainId]];
}
async function wt(e, t) {
    return new (0, _jsontokens.TokenSigner)("ES256k", t).signAsync(a({}, e));
}
function O(e) {
    let t = e.network || new (0, _network.StacksTestnet), n = x(e.userSession), r = c(a({}, e), {
        network: t,
        userSession: n
    });
    return a({
        stxAddress: Ct(r)
    }, r);
}
async function kt({ token: e , options: t  }, n) {
    var r, s;
    try {
        let o = await n.signatureRequest(e);
        (r = t.onFinish) == null || r.call(t, o);
    } catch (o) {
        console.error("[Connect] Error during signature request", o), (s = t.onCancel) == null || s.call(t);
    }
}
var Ot = async (e)=>{
    let s = e, { userSession: t  } = s, n = f(s, [
        "userSession"
    ]);
    if (g(t)) {
        let { privateKey: o , publicKey: i  } = y(t), p = c(a({}, n), {
            publicKey: i
        });
        return wt(p, o);
    }
    let r = a({}, n);
    return (0, _jsontokens.createUnsecuredToken)(r);
};
async function bt(e, t, n) {
    let r = await t(a(a({}, O(e)), e));
    return kt({
        token: r,
        options: e
    }, n);
}
function Be(e, t = d()) {
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    return bt(e, Ot, t);
}
async function Bt(e, t, n) {
    let r = await t(a(a({}, O(e)), e));
    return It({
        token: r,
        options: e
    }, n);
}
function N(e) {
    return c(a({}, e), {
        message: m((0, _transactions.serializeCV)(e.message)),
        domain: m((0, _transactions.serializeCV)(e.domain))
    });
}
async function Ut(e, t) {
    return new (0, _jsontokens.TokenSigner)("ES256k", t).signAsync(N(e));
}
async function At(e) {
    let r = e, { userSession: t  } = r, n = f(r, [
        "userSession"
    ]);
    if (g(t)) {
        let { privateKey: s , publicKey: o  } = y(t), i = c(a({}, n), {
            publicKey: o
        });
        return Ut(i, s);
    }
    return (0, _jsontokens.createUnsecuredToken)(N(e));
}
async function It({ token: e , options: t  }, n) {
    var r, s;
    try {
        let o = await n.structuredDataSignatureRequest(e);
        (r = t.onFinish) == null || r.call(t, o);
    } catch (o) {
        console.error("[Connect] Error during signature request", o), (s = t.onCancel) == null || s.call(t);
    }
}
function Fe(e, t = d()) {
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    return Bt(e, At, t);
}
async function Kt(e, t) {
    return new (0, _jsontokens.TokenSigner)("ES256k", t).signAsync(a({}, e));
}
function Nt(e) {
    let t = e.network || new (0, _network.StacksTestnet), n = x(e.userSession), r = c(a({}, e), {
        network: t,
        userSession: n
    });
    return a({}, r);
}
async function Ft({ token: e , options: t  }, n) {
    var r, s;
    try {
        let o = await n.profileUpdateRequest(e);
        (r = t.onFinish) == null || r.call(t, o);
    } catch (o) {
        console.error("[Connect] Error during signature request", o), (s = t.onCancel) == null || s.call(t);
    }
}
var $t = async (e)=>{
    let o = e, { userSession: t , profile: n  } = o, r = f(o, [
        "userSession",
        "profile"
    ]);
    if (g(t)) {
        let { privateKey: i , publicKey: p  } = y(t), u = c(a({}, r), {
            profile: n,
            publicKey: p
        });
        return Kt(u, i);
    }
    let s = a({}, r);
    return (0, _jsontokens.createUnsecuredToken)(s);
};
async function Xt(e, t, n) {
    let r = await t(a(a({}, Nt(e)), e));
    return Ft({
        token: r,
        options: e
    }, n);
}
function ze(e, t = d()) {
    if (!t) throw new Error("[Connect] No installed Stacks wallet found");
    return Xt(e, $t, t);
}
var Mt = ((o)=>(o[o.DEFAULT = 0] = "DEFAULT", o[o.ALL = 1] = "ALL", o[o.NONE = 2] = "NONE", o[o.SINGLE = 3] = "SINGLE", o[o.ANYONECANPAY = 128] = "ANYONECANPAY", o))(Mt || {});
var _t = (e, t = d())=>{
    if (t) {
        A(e, t);
        return;
    }
    window;
    {
        (0, _loader.defineCustomElements)(window);
        let n = document.createElement("connect-modal");
        n.authOptions = e, document.body.appendChild(n);
        let r = (s)=>{
            s.key === "Escape" && (document.removeEventListener("keydown", r), n.remove());
        };
        document.addEventListener("keydown", r);
    }
}, Ze = (e)=>_t(e);

},{"@stacks/auth":"bHF6N","jsontokens":"7yDiP","@stacks/network":"c5pLF","@stacks/transactions":"fsnm1","@stacks/connect-ui/loader":"aOaZj","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bHF6N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppConfig", ()=>(0, _appConfig.AppConfig));
parcelHelpers.export(exports, "makeAuthRequest", ()=>(0, _messages.makeAuthRequest));
parcelHelpers.export(exports, "makeAuthRequestToken", ()=>(0, _messages.makeAuthRequestToken));
parcelHelpers.export(exports, "makeAuthResponse", ()=>(0, _messages.makeAuthResponse));
parcelHelpers.export(exports, "decryptPrivateKey", ()=>(0, _messages.decryptPrivateKey));
parcelHelpers.export(exports, "getAuthRequestFromURL", ()=>(0, _provider.getAuthRequestFromURL));
parcelHelpers.export(exports, "fetchAppManifest", ()=>(0, _provider.fetchAppManifest));
parcelHelpers.export(exports, "verifyAuthRequest", ()=>(0, _verification.verifyAuthRequest));
parcelHelpers.export(exports, "verifyAuthResponse", ()=>(0, _verification.verifyAuthResponse));
parcelHelpers.export(exports, "isExpirationDateValid", ()=>(0, _verification.isExpirationDateValid));
parcelHelpers.export(exports, "isIssuanceDateValid", ()=>(0, _verification.isIssuanceDateValid));
parcelHelpers.export(exports, "doPublicKeysMatchIssuer", ()=>(0, _verification.doPublicKeysMatchIssuer));
parcelHelpers.export(exports, "doSignaturesMatchPublicKeys", ()=>(0, _verification.doSignaturesMatchPublicKeys));
parcelHelpers.export(exports, "isManifestUriValid", ()=>(0, _verification.isManifestUriValid));
parcelHelpers.export(exports, "isRedirectUriValid", ()=>(0, _verification.isRedirectUriValid));
parcelHelpers.export(exports, "verifyAuthRequestAndLoadManifest", ()=>(0, _verification.verifyAuthRequestAndLoadManifest));
parcelHelpers.export(exports, "UserSession", ()=>(0, _userSession.UserSession));
var _appConfig = require("./appConfig");
var _messages = require("./messages");
var _provider = require("./provider");
var _verification = require("./verification");
var _dids = require("./dids");
parcelHelpers.exportAll(_dids, exports);
var _userSession = require("./userSession");
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _profile = require("./profile");
parcelHelpers.exportAll(_profile, exports);
var _userData = require("./userData");
parcelHelpers.exportAll(_userData, exports);

},{"./appConfig":"2AFHA","./messages":"9vtMG","./provider":"3sbdC","./verification":"fRgCs","./dids":"8kFYP","./userSession":"LRdHD","./constants":"c0I71","./profile":"hdD5p","./userData":"imjF2","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"2AFHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AppConfig", ()=>AppConfig);
var _constants = require("./constants");
var _common = require("@stacks/common");
class AppConfig {
    constructor(scopes = (0, _constants.DEFAULT_SCOPE).slice(), appDomain = (0, _common.getGlobalObject)("location", {
        returnEmptyObject: true
    })?.origin, redirectPath = "", manifestPath = "/manifest.json", coreNode, authenticatorURL = (0, _constants.DEFAULT_BLOCKSTACK_HOST)){
        this.appDomain = appDomain;
        this.scopes = scopes;
        this.redirectPath = redirectPath;
        this.manifestPath = manifestPath;
        this.coreNode = coreNode;
        this.authenticatorURL = authenticatorURL;
    }
    redirectURI() {
        return `${this.appDomain}${this.redirectPath}`;
    }
    manifestURI() {
        return `${this.appDomain}${this.manifestPath}`;
    }
}

},{"./constants":"c0I71","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"c0I71":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BLOCKSTACK_HANDLER", ()=>BLOCKSTACK_HANDLER);
parcelHelpers.export(exports, "BLOCKSTACK_STORAGE_LABEL", ()=>BLOCKSTACK_STORAGE_LABEL);
parcelHelpers.export(exports, "DEFAULT_BLOCKSTACK_HOST", ()=>DEFAULT_BLOCKSTACK_HOST);
parcelHelpers.export(exports, "DEFAULT_PROFILE", ()=>DEFAULT_PROFILE);
parcelHelpers.export(exports, "DEFAULT_SCOPE", ()=>DEFAULT_SCOPE);
parcelHelpers.export(exports, "BLOCKSTACK_APP_PRIVATE_KEY_LABEL", ()=>BLOCKSTACK_APP_PRIVATE_KEY_LABEL);
parcelHelpers.export(exports, "DEFAULT_CORE_NODE", ()=>DEFAULT_CORE_NODE);
parcelHelpers.export(exports, "NAME_LOOKUP_PATH", ()=>NAME_LOOKUP_PATH);
parcelHelpers.export(exports, "LOCALSTORAGE_SESSION_KEY", ()=>LOCALSTORAGE_SESSION_KEY);
const BLOCKSTACK_HANDLER = "blockstack";
const BLOCKSTACK_STORAGE_LABEL = "blockstack";
const DEFAULT_BLOCKSTACK_HOST = "https://browser.blockstack.org/auth";
const DEFAULT_PROFILE = {
    "@type": "Person",
    "@context": "http://schema.org"
};
const DEFAULT_SCOPE = [
    "store_write"
];
const BLOCKSTACK_APP_PRIVATE_KEY_LABEL = "blockstack-transit-private-key";
const DEFAULT_CORE_NODE = "https://stacks-node-api.stacks.co";
const NAME_LOOKUP_PATH = "/v1/names";
const LOCALSTORAGE_SESSION_KEY = "blockstack-session";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fD7H8":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"5ZsuO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("./config");
parcelHelpers.exportAll(_config, exports);
var _errors = require("./errors");
parcelHelpers.exportAll(_errors, exports);
var _logger = require("./logger");
parcelHelpers.exportAll(_logger, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _signatures = require("./signatures");
parcelHelpers.exportAll(_signatures, exports);
var _keys = require("./keys");
parcelHelpers.exportAll(_keys, exports);
var _buffer = require("./buffer");
parcelHelpers.exportAll(_buffer, exports);

},{"./config":"6Nyyp","./errors":"ulie9","./logger":"7iryz","./utils":"fyQR1","./constants":"kqUw3","./signatures":"8jIxK","./keys":"i8AK8","./buffer":"iBMIa","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"6Nyyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    network: {
        layer1: "placeholder"
    },
    logLevel: "debug"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ulie9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERROR_CODES", ()=>ERROR_CODES);
parcelHelpers.export(exports, "BlockstackError", ()=>BlockstackError);
parcelHelpers.export(exports, "InvalidParameterError", ()=>InvalidParameterError);
parcelHelpers.export(exports, "MissingParameterError", ()=>MissingParameterError);
parcelHelpers.export(exports, "RemoteServiceError", ()=>RemoteServiceError);
parcelHelpers.export(exports, "InvalidDIDError", ()=>InvalidDIDError);
parcelHelpers.export(exports, "NotEnoughFundsError", ()=>NotEnoughFundsError);
parcelHelpers.export(exports, "InvalidAmountError", ()=>InvalidAmountError);
parcelHelpers.export(exports, "LoginFailedError", ()=>LoginFailedError);
parcelHelpers.export(exports, "SignatureVerificationError", ()=>SignatureVerificationError);
parcelHelpers.export(exports, "FailedDecryptionError", ()=>FailedDecryptionError);
parcelHelpers.export(exports, "InvalidStateError", ()=>InvalidStateError);
parcelHelpers.export(exports, "NoSessionDataError", ()=>NoSessionDataError);
parcelHelpers.export(exports, "GaiaHubError", ()=>GaiaHubError);
parcelHelpers.export(exports, "DoesNotExist", ()=>DoesNotExist);
parcelHelpers.export(exports, "ConflictError", ()=>ConflictError);
parcelHelpers.export(exports, "NotEnoughProofError", ()=>NotEnoughProofError);
parcelHelpers.export(exports, "BadPathError", ()=>BadPathError);
parcelHelpers.export(exports, "ValidationError", ()=>ValidationError);
parcelHelpers.export(exports, "PayloadTooLargeError", ()=>PayloadTooLargeError);
parcelHelpers.export(exports, "PreconditionFailedError", ()=>PreconditionFailedError);
const ERROR_CODES = {
    MISSING_PARAMETER: "missing_parameter",
    REMOTE_SERVICE_ERROR: "remote_service_error",
    INVALID_STATE: "invalid_state",
    NO_SESSION_DATA: "no_session_data",
    DOES_NOT_EXIST: "does_not_exist",
    FAILED_DECRYPTION_ERROR: "failed_decryption_error",
    INVALID_DID_ERROR: "invalid_did_error",
    NOT_ENOUGH_FUNDS_ERROR: "not_enough_error",
    INVALID_AMOUNT_ERROR: "invalid_amount_error",
    LOGIN_FAILED_ERROR: "login_failed",
    SIGNATURE_VERIFICATION_ERROR: "signature_verification_failure",
    CONFLICT_ERROR: "conflict_error",
    NOT_ENOUGH_PROOF_ERROR: "not_enough_proof_error",
    BAD_PATH_ERROR: "bad_path_error",
    VALIDATION_ERROR: "validation_error",
    PAYLOAD_TOO_LARGE_ERROR: "payload_too_large_error",
    PRECONDITION_FAILED_ERROR: "precondition_failed_error",
    UNKNOWN: "unknown"
};
Object.freeze(ERROR_CODES);
class BlockstackError extends Error {
    constructor(error){
        super();
        let message = error.message;
        let bugDetails = `Error Code: ${error.code}`;
        let stack = this.stack;
        if (!stack) try {
            throw new Error();
        } catch (e) {
            stack = e.stack;
        }
        else bugDetails += `Stack Trace:\n${stack}`;
        message += `\nIf you believe this exception is caused by a bug in stacks.js,
      please file a bug report: https://github.com/blockstack/stacks.js/issues\n\n${bugDetails}`;
        this.message = message;
        this.code = error.code;
        this.parameter = error.parameter ? error.parameter : undefined;
    }
    toString() {
        return `${super.toString()}
    code: ${this.code} param: ${this.parameter ? this.parameter : "n/a"}`;
    }
}
class InvalidParameterError extends BlockstackError {
    constructor(parameter, message = ""){
        super({
            code: ERROR_CODES.MISSING_PARAMETER,
            message,
            parameter
        });
        this.name = "MissingParametersError";
    }
}
class MissingParameterError extends BlockstackError {
    constructor(parameter, message = ""){
        super({
            code: ERROR_CODES.MISSING_PARAMETER,
            message,
            parameter
        });
        this.name = "MissingParametersError";
    }
}
class RemoteServiceError extends BlockstackError {
    constructor(response, message = ""){
        super({
            code: ERROR_CODES.REMOTE_SERVICE_ERROR,
            message
        });
        this.response = response;
    }
}
class InvalidDIDError extends BlockstackError {
    constructor(message = ""){
        super({
            code: ERROR_CODES.INVALID_DID_ERROR,
            message
        });
        this.name = "InvalidDIDError";
    }
}
class NotEnoughFundsError extends BlockstackError {
    constructor(leftToFund){
        const message = `Not enough UTXOs to fund. Left to fund: ${leftToFund}`;
        super({
            code: ERROR_CODES.NOT_ENOUGH_FUNDS_ERROR,
            message
        });
        this.leftToFund = leftToFund;
        this.name = "NotEnoughFundsError";
        this.message = message;
    }
}
class InvalidAmountError extends BlockstackError {
    constructor(fees, specifiedAmount){
        const message = `Not enough coin to fund fees transaction fees. Fees would be ${fees},` + ` specified spend is  ${specifiedAmount}`;
        super({
            code: ERROR_CODES.INVALID_AMOUNT_ERROR,
            message
        });
        this.specifiedAmount = specifiedAmount;
        this.fees = fees;
        this.name = "InvalidAmountError";
        this.message = message;
    }
}
class LoginFailedError extends BlockstackError {
    constructor(reason){
        const message = `Failed to login: ${reason}`;
        super({
            code: ERROR_CODES.LOGIN_FAILED_ERROR,
            message
        });
        this.message = message;
        this.name = "LoginFailedError";
    }
}
class SignatureVerificationError extends BlockstackError {
    constructor(reason){
        const message = `Failed to verify signature: ${reason}`;
        super({
            code: ERROR_CODES.SIGNATURE_VERIFICATION_ERROR,
            message
        });
        this.message = message;
        this.name = "SignatureVerificationError";
    }
}
class FailedDecryptionError extends BlockstackError {
    constructor(message = "Unable to decrypt cipher object."){
        super({
            code: ERROR_CODES.FAILED_DECRYPTION_ERROR,
            message
        });
        this.message = message;
        this.name = "FailedDecryptionError";
    }
}
class InvalidStateError extends BlockstackError {
    constructor(message){
        super({
            code: ERROR_CODES.INVALID_STATE,
            message
        });
        this.message = message;
        this.name = "InvalidStateError";
    }
}
class NoSessionDataError extends BlockstackError {
    constructor(message){
        super({
            code: ERROR_CODES.INVALID_STATE,
            message
        });
        this.message = message;
        this.name = "NoSessionDataError";
    }
}
class GaiaHubError extends BlockstackError {
    constructor(error, response){
        super(error);
        if (response) {
            this.hubError = {
                statusCode: response.status,
                statusText: response.statusText
            };
            if (typeof response.body === "string") this.hubError.message = response.body;
            else if (typeof response.body === "object") Object.assign(this.hubError, response.body);
        }
    }
}
class DoesNotExist extends GaiaHubError {
    constructor(message, response){
        super({
            message,
            code: ERROR_CODES.DOES_NOT_EXIST
        }, response);
        this.name = "DoesNotExist";
    }
}
class ConflictError extends GaiaHubError {
    constructor(message, response){
        super({
            message,
            code: ERROR_CODES.CONFLICT_ERROR
        }, response);
        this.name = "ConflictError";
    }
}
class NotEnoughProofError extends GaiaHubError {
    constructor(message, response){
        super({
            message,
            code: ERROR_CODES.NOT_ENOUGH_PROOF_ERROR
        }, response);
        this.name = "NotEnoughProofError";
    }
}
class BadPathError extends GaiaHubError {
    constructor(message, response){
        super({
            message,
            code: ERROR_CODES.BAD_PATH_ERROR
        }, response);
        this.name = "BadPathError";
    }
}
class ValidationError extends GaiaHubError {
    constructor(message, response){
        super({
            message,
            code: ERROR_CODES.VALIDATION_ERROR
        }, response);
        this.name = "ValidationError";
    }
}
class PayloadTooLargeError extends GaiaHubError {
    constructor(message, response, maxUploadByteSize){
        super({
            message,
            code: ERROR_CODES.PAYLOAD_TOO_LARGE_ERROR
        }, response);
        this.name = "PayloadTooLargeError";
        this.maxUploadByteSize = maxUploadByteSize;
    }
}
class PreconditionFailedError extends GaiaHubError {
    constructor(message, response){
        super({
            message,
            code: ERROR_CODES.PRECONDITION_FAILED_ERROR
        }, response);
        this.name = "PreconditionFailedError";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7iryz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Logger", ()=>Logger);
var _config = require("./config");
const levels = [
    "debug",
    "info",
    "warn",
    "error",
    "none"
];
const levelToInt = {};
const intToLevel = {};
for(let index = 0; index < levels.length; index++){
    const level = levels[index];
    levelToInt[level] = index;
    intToLevel[index] = level;
}
class Logger {
    static error(message) {
        if (!this.shouldLog("error")) return;
        console.error(this.logMessage("error", message));
    }
    static warn(message) {
        if (!this.shouldLog("warn")) return;
        console.warn(this.logMessage("warn", message));
    }
    static info(message) {
        if (!this.shouldLog("info")) return;
        console.log(this.logMessage("info", message));
    }
    static debug(message) {
        if (!this.shouldLog("debug")) return;
        console.log(this.logMessage("debug", message));
    }
    static logMessage(level, message) {
        return `[${level.toUpperCase()}] ${message}`;
    }
    static shouldLog(level) {
        const currentLevel = levelToInt[(0, _config.config).logLevel];
        return currentLevel <= levelToInt[level];
    }
}

},{"./config":"6Nyyp","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fyQR1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BLOCKSTACK_HANDLER", ()=>BLOCKSTACK_HANDLER);
parcelHelpers.export(exports, "nextYear", ()=>nextYear);
parcelHelpers.export(exports, "nextMonth", ()=>nextMonth);
parcelHelpers.export(exports, "nextHour", ()=>nextHour);
parcelHelpers.export(exports, "megabytesToBytes", ()=>megabytesToBytes);
parcelHelpers.export(exports, "getAesCbcOutputLength", ()=>getAesCbcOutputLength);
parcelHelpers.export(exports, "getBase64OutputLength", ()=>getBase64OutputLength);
parcelHelpers.export(exports, "updateQueryStringParameter", ()=>updateQueryStringParameter);
parcelHelpers.export(exports, "isLaterVersion", ()=>isLaterVersion);
parcelHelpers.export(exports, "makeUUID4", ()=>makeUUID4);
parcelHelpers.export(exports, "isSameOriginAbsoluteUrl", ()=>isSameOriginAbsoluteUrl);
parcelHelpers.export(exports, "getGlobalScope", ()=>getGlobalScope);
parcelHelpers.export(exports, "getGlobalObject", ()=>getGlobalObject);
parcelHelpers.export(exports, "getGlobalObjects", ()=>getGlobalObjects);
parcelHelpers.export(exports, "intToBytes", ()=>intToBytes);
parcelHelpers.export(exports, "intToBigInt", ()=>intToBigInt);
parcelHelpers.export(exports, "with0x", ()=>with0x);
parcelHelpers.export(exports, "hexToBigInt", ()=>hexToBigInt);
parcelHelpers.export(exports, "intToHex", ()=>intToHex);
parcelHelpers.export(exports, "hexToInt", ()=>hexToInt);
parcelHelpers.export(exports, "bigIntToBytes", ()=>bigIntToBytes);
parcelHelpers.export(exports, "toTwos", ()=>toTwos);
parcelHelpers.export(exports, "fromTwos", ()=>fromTwos);
parcelHelpers.export(exports, "bytesToHex", ()=>bytesToHex);
parcelHelpers.export(exports, "hexToBytes", ()=>hexToBytes);
parcelHelpers.export(exports, "utf8ToBytes", ()=>utf8ToBytes);
parcelHelpers.export(exports, "bytesToUtf8", ()=>bytesToUtf8);
parcelHelpers.export(exports, "asciiToBytes", ()=>asciiToBytes);
parcelHelpers.export(exports, "bytesToAscii", ()=>bytesToAscii);
parcelHelpers.export(exports, "octetsToBytes", ()=>octetsToBytes);
parcelHelpers.export(exports, "toBytes", ()=>toBytes);
parcelHelpers.export(exports, "concatBytes", ()=>concatBytes);
parcelHelpers.export(exports, "concatArray", ()=>concatArray);
parcelHelpers.export(exports, "isInstance", ()=>isInstance);
var _logger = require("./logger");
var global = arguments[3];
const BLOCKSTACK_HANDLER = "blockstack";
function nextYear() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
}
function nextMonth() {
    return new Date(new Date().setMonth(new Date().getMonth() + 1));
}
function nextHour() {
    return new Date(new Date().setHours(new Date().getHours() + 1));
}
function megabytesToBytes(megabytes) {
    if (!Number.isFinite(megabytes)) return 0;
    return Math.floor(megabytes * 1048576);
}
function getAesCbcOutputLength(inputByteLength) {
    const cipherTextLength = (Math.floor(inputByteLength / 16) + 1) * 16;
    return cipherTextLength;
}
function getBase64OutputLength(inputByteLength) {
    const encodedLength = Math.ceil(inputByteLength / 3) * 4;
    return encodedLength;
}
function updateQueryStringParameter(uri, key, value) {
    const re = new RegExp(`([?&])${key}=.*?(&|$)`, "i");
    const separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) return uri.replace(re, `$1${key}=${value}$2`);
    else return `${uri}${separator}${key}=${value}`;
}
function isLaterVersion(v1, v2) {
    if (v1 === undefined || v1 === "") v1 = "0.0.0";
    if (v2 === undefined || v1 === "") v2 = "0.0.0";
    const v1tuple = v1.split(".").map((x)=>parseInt(x, 10));
    const v2tuple = v2.split(".").map((x)=>parseInt(x, 10));
    for(let index = 0; index < v2.length; index++){
        if (index >= v1.length) v2tuple.push(0);
        if (v1tuple[index] < v2tuple[index]) return false;
    }
    return true;
}
function makeUUID4() {
    let d = new Date().getTime();
    if (typeof performance !== "undefined" && typeof performance.now === "function") d += performance.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
}
function isSameOriginAbsoluteUrl(uri1, uri2) {
    try {
        const parsedUri1 = new URL(uri1);
        const parsedUri2 = new URL(uri2);
        const port1 = parseInt(parsedUri1.port || "0", 10) | 0 || (parsedUri1.protocol === "https:" ? 443 : 80);
        const port2 = parseInt(parsedUri2.port || "0", 10) | 0 || (parsedUri2.protocol === "https:" ? 443 : 80);
        const match = {
            scheme: parsedUri1.protocol === parsedUri2.protocol,
            hostname: parsedUri1.hostname === parsedUri2.hostname,
            port: port1 === port2,
            absolute: (uri1.includes("http://") || uri1.includes("https://")) && (uri2.includes("http://") || uri2.includes("https://"))
        };
        return match.scheme && match.hostname && match.port && match.absolute;
    } catch (error) {
        console.log(error);
        console.log("Parsing error in same URL origin check");
        return false;
    }
}
function getGlobalScope() {
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw new Error("Unexpected runtime environment - no supported global scope (`window`, `self`, `global`) available");
}
function getAPIUsageErrorMessage(scopeObject, apiName, usageDesc) {
    if (usageDesc) return `Use of '${usageDesc}' requires \`${apiName}\` which is unavailable on the '${scopeObject}' object within the currently executing environment.`;
    else return `\`${apiName}\` is unavailable on the '${scopeObject}' object within the currently executing environment.`;
}
function getGlobalObject(name, { throwIfUnavailable , usageDesc , returnEmptyObject  } = {}) {
    let globalScope = undefined;
    try {
        globalScope = getGlobalScope();
        if (globalScope) {
            const obj = globalScope[name];
            if (obj) return obj;
        }
    } catch (error) {
        (0, _logger.Logger).error(`Error getting object '${name}' from global scope '${globalScope}': ${error}`);
    }
    if (throwIfUnavailable) {
        const errMsg = getAPIUsageErrorMessage(globalScope, name.toString(), usageDesc);
        (0, _logger.Logger).error(errMsg);
        throw new Error(errMsg);
    }
    if (returnEmptyObject) return {};
    return undefined;
}
function getGlobalObjects(names, { throwIfUnavailable , usageDesc , returnEmptyObject  } = {}) {
    let globalScope;
    try {
        globalScope = getGlobalScope();
    } catch (error) {
        (0, _logger.Logger).error(`Error getting global scope: ${error}`);
        if (throwIfUnavailable) {
            const errMsg = getAPIUsageErrorMessage(globalScope, names[0].toString(), usageDesc);
            (0, _logger.Logger).error(errMsg);
            throw errMsg;
        } else if (returnEmptyObject) globalScope = {};
    }
    const result = {};
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        try {
            if (globalScope) {
                const obj = globalScope[name];
                if (obj) result[name] = obj;
                else if (throwIfUnavailable) {
                    const errMsg = getAPIUsageErrorMessage(globalScope, name.toString(), usageDesc);
                    (0, _logger.Logger).error(errMsg);
                    throw new Error(errMsg);
                } else if (returnEmptyObject) result[name] = {};
            }
        } catch (error) {
            if (throwIfUnavailable) {
                const errMsg = getAPIUsageErrorMessage(globalScope, name.toString(), usageDesc);
                (0, _logger.Logger).error(errMsg);
                throw new Error(errMsg);
            }
        }
    }
    return result;
}
function intToBytes(value, signed, byteLength) {
    return bigIntToBytes(intToBigInt(value, signed), byteLength);
}
function intToBigInt(value, signed) {
    let parsedValue = value;
    if (typeof parsedValue === "number") {
        if (!Number.isInteger(parsedValue)) throw new RangeError(`Invalid value. Values of type 'number' must be an integer.`);
        if (parsedValue > Number.MAX_SAFE_INTEGER) throw new RangeError(`Invalid value. Values of type 'number' must be less than or equal to ${Number.MAX_SAFE_INTEGER}. For larger values, try using a BigInt instead.`);
        return BigInt(parsedValue);
    }
    if (typeof parsedValue === "string") {
        if (parsedValue.toLowerCase().startsWith("0x")) {
            let hex = parsedValue.slice(2);
            hex = hex.padStart(hex.length + hex.length % 2, "0");
            parsedValue = hexToBytes(hex);
        } else try {
            return BigInt(parsedValue);
        } catch (error) {
            if (error instanceof SyntaxError) throw new RangeError(`Invalid value. String integer '${parsedValue}' is not finite.`);
        }
    }
    if (typeof parsedValue === "bigint") return parsedValue;
    if (parsedValue instanceof Uint8Array) {
        if (signed) {
            const bn = fromTwos(BigInt(`0x${bytesToHex(parsedValue)}`), BigInt(parsedValue.byteLength * 8));
            return BigInt(bn.toString());
        } else return BigInt(`0x${bytesToHex(parsedValue)}`);
    }
    if (parsedValue != null && typeof parsedValue === "object" && parsedValue.constructor.name === "BN") return BigInt(parsedValue.toString());
    throw new TypeError(`Invalid value type. Must be a number, bigint, integer-string, hex-string, or Uint8Array.`);
}
function with0x(value) {
    return value.startsWith("0x") ? value : `0x${value}`;
}
function hexToBigInt(hex) {
    if (typeof hex !== "string") throw new TypeError(`hexToBigInt: expected string, got ${typeof hex}`);
    return BigInt(`0x${hex}`);
}
function intToHex(integer, lengthBytes = 8) {
    const value = typeof integer === "bigint" ? integer : intToBigInt(integer, false);
    return value.toString(16).padStart(lengthBytes * 2, "0");
}
function hexToInt(hex) {
    return parseInt(hex, 16);
}
function bigIntToBytes(value, length = 16) {
    const hex = intToHex(value, length);
    return hexToBytes(hex);
}
function toTwos(value, width) {
    if (value < -(BigInt(1) << width - BigInt(1)) || (BigInt(1) << width - BigInt(1)) - BigInt(1) < value) throw `Unable to represent integer in width: ${width}`;
    if (value >= BigInt(0)) return BigInt(value);
    return value + (BigInt(1) << width);
}
function nthBit(value, n) {
    return value & BigInt(1) << n;
}
function fromTwos(value, width) {
    if (nthBit(value, width - BigInt(1))) return value - (BigInt(1) << width);
    return value;
}
const hexes = Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let hex = "";
    for (const u of uint8a)hex += hexes[u];
    return hex;
}
function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError(`hexToBytes: expected string, got ${typeof hex}`);
    const paddedHex = hex.length % 2 ? `0${hex}` : hex;
    const array = new Uint8Array(paddedHex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = paddedHex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
function utf8ToBytes(str) {
    return new TextEncoder().encode(str);
}
function bytesToUtf8(arr) {
    return new TextDecoder().decode(arr);
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; i++)byteArray.push(str.charCodeAt(i) & 0xff);
    return new Uint8Array(byteArray);
}
function bytesToAscii(arr) {
    return String.fromCharCode.apply(null, arr);
}
function isNotOctet(octet) {
    return !Number.isInteger(octet) || octet < 0 || octet > 255;
}
function octetsToBytes(numbers) {
    if (numbers.some(isNotOctet)) throw new Error("Some values are invalid bytes.");
    return new Uint8Array(numbers);
}
function toBytes(data) {
    if (typeof data === "string") return utf8ToBytes(data);
    if (data instanceof Uint8Array) return data;
    throw new TypeError(`Expected input type is (Uint8Array | string) but got (${typeof data})`);
}
function concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
function concatArray(elements) {
    return concatBytes(...elements.map((e)=>{
        if (typeof e === "number") return octetsToBytes([
            e
        ]);
        if (e instanceof Array) return octetsToBytes(e);
        return e;
    }));
}
function isInstance(object, type) {
    return object instanceof type || object?.constructor?.name?.toLowerCase() === type.name;
}

},{"./logger":"7iryz","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kqUw3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChainID", ()=>ChainID);
parcelHelpers.export(exports, "TransactionVersion", ()=>TransactionVersion);
parcelHelpers.export(exports, "PRIVATE_KEY_COMPRESSED_LENGTH", ()=>PRIVATE_KEY_COMPRESSED_LENGTH);
parcelHelpers.export(exports, "PRIVATE_KEY_UNCOMPRESSED_LENGTH", ()=>PRIVATE_KEY_UNCOMPRESSED_LENGTH);
parcelHelpers.export(exports, "BLOCKSTACK_DEFAULT_GAIA_HUB_URL", ()=>BLOCKSTACK_DEFAULT_GAIA_HUB_URL);
var ChainID;
(function(ChainID) {
    ChainID[ChainID["Testnet"] = 2147483648] = "Testnet";
    ChainID[ChainID["Mainnet"] = 1] = "Mainnet";
})(ChainID || (ChainID = {}));
var TransactionVersion;
(function(TransactionVersion) {
    TransactionVersion[TransactionVersion["Mainnet"] = 0] = "Mainnet";
    TransactionVersion[TransactionVersion["Testnet"] = 128] = "Testnet";
})(TransactionVersion || (TransactionVersion = {}));
const PRIVATE_KEY_COMPRESSED_LENGTH = 33;
const PRIVATE_KEY_UNCOMPRESSED_LENGTH = 32;
const BLOCKSTACK_DEFAULT_GAIA_HUB_URL = "https://hub.blockstack.org";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8jIxK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseRecoverableSignatureVrs", ()=>parseRecoverableSignatureVrs);
parcelHelpers.export(exports, "signatureVrsToRsv", ()=>signatureVrsToRsv);
parcelHelpers.export(exports, "signatureRsvToVrs", ()=>signatureRsvToVrs);
var _utils = require("./utils");
const COORDINATE_BYTES = 32;
function parseRecoverableSignatureVrs(signature) {
    if (signature.length < COORDINATE_BYTES * 4 + 1) throw new Error("Invalid signature");
    const recoveryIdHex = signature.slice(0, 2);
    const r = signature.slice(2, 2 + COORDINATE_BYTES * 2);
    const s = signature.slice(2 + COORDINATE_BYTES * 2);
    return {
        recoveryId: (0, _utils.hexToInt)(recoveryIdHex),
        r,
        s
    };
}
function signatureVrsToRsv(signature) {
    return signature.slice(2) + signature.slice(0, 2);
}
function signatureRsvToVrs(signature) {
    return signature.slice(-2) + signature.slice(0, -2);
}

},{"./utils":"fyQR1","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"i8AK8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "privateKeyToBytes", ()=>privateKeyToBytes);
var _utils = require("./utils");
function privateKeyToBytes(privateKey) {
    const privateKeyBuffer = typeof privateKey === "string" ? (0, _utils.hexToBytes)(privateKey) : privateKey;
    if (privateKeyBuffer.length != 32 && privateKeyBuffer.length != 33) throw new Error(`Improperly formatted private-key. Private-key byte length should be 32 or 33. Length provided: ${privateKeyBuffer.length}`);
    if (privateKeyBuffer.length == 33 && privateKeyBuffer[32] !== 1) throw new Error("Improperly formatted private-key. 33 bytes indicate compressed key, but the last byte must be == 01");
    return privateKeyBuffer;
}

},{"./utils":"fyQR1","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iBMIa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "equals", ()=>equals);
parcelHelpers.export(exports, "alloc", ()=>alloc);
parcelHelpers.export(exports, "readUInt16BE", ()=>readUInt16BE);
parcelHelpers.export(exports, "writeUInt16BE", ()=>writeUInt16BE);
parcelHelpers.export(exports, "readUInt8", ()=>readUInt8);
parcelHelpers.export(exports, "writeUInt8", ()=>writeUInt8);
parcelHelpers.export(exports, "readUInt16LE", ()=>readUInt16LE);
parcelHelpers.export(exports, "writeUInt16LE", ()=>writeUInt16LE);
parcelHelpers.export(exports, "readUInt32BE", ()=>readUInt32BE);
parcelHelpers.export(exports, "writeUInt32BE", ()=>writeUInt32BE);
parcelHelpers.export(exports, "readUInt32LE", ()=>readUInt32LE);
parcelHelpers.export(exports, "writeUInt32LE", ()=>writeUInt32LE);
function equals(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function alloc(length, value) {
    const a = new Uint8Array(length);
    for(let i = 0; i < length; i++)a[i] = value;
    return a;
}
function readUInt16BE(source, offset) {
    return (source[offset + 0] << 8 | source[offset + 1]) >>> 0;
}
function writeUInt16BE(source, value, offset) {
    source[offset + 0] = value >>> 8;
    source[offset + 1] = value >>> 0;
}
function readUInt8(source, offset) {
    return source[offset];
}
function writeUInt8(destination, value, offset) {
    destination[offset] = value;
}
function readUInt16LE(source, offset) {
    return source[offset + 0] << 0 >>> 0 | source[offset + 1] << 8 >>> 0;
}
function writeUInt16LE(destination, value, offset) {
    destination[offset + 0] = value & 255;
    value >>>= 8;
    destination[offset + 1] = value & 255;
}
function readUInt32BE(source, offset) {
    return source[offset] * 2 ** 24 + source[offset + 1] * 2 ** 16 + source[offset + 2] * 256 + source[offset + 3];
}
function writeUInt32BE(destination, value, offset) {
    destination[offset + 3] = value;
    value >>>= 8;
    destination[offset + 2] = value;
    value >>>= 8;
    destination[offset + 1] = value;
    value >>>= 8;
    destination[offset] = value;
}
function readUInt32LE(source, offset) {
    return source[offset + 0] << 0 >>> 0 | source[offset + 1] << 8 >>> 0 | source[offset + 2] << 16 >>> 0 | source[offset + 3] << 24 >>> 0;
}
function writeUInt32LE(destination, value, offset) {
    destination[offset + 0] = value & 255;
    value >>>= 8;
    destination[offset + 1] = value & 255;
    value >>>= 8;
    destination[offset + 2] = value & 255;
    value >>>= 8;
    destination[offset + 3] = value & 255;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9vtMG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateTransitKey", ()=>generateTransitKey);
parcelHelpers.export(exports, "makeAuthRequest", ()=>makeAuthRequest);
parcelHelpers.export(exports, "makeAuthRequestToken", ()=>makeAuthRequestToken);
parcelHelpers.export(exports, "encryptPrivateKey", ()=>encryptPrivateKey);
parcelHelpers.export(exports, "decryptPrivateKey", ()=>decryptPrivateKey);
parcelHelpers.export(exports, "makeAuthResponse", ()=>makeAuthResponse);
var _common = require("@stacks/common");
var _encryption = require("@stacks/encryption");
var _jsontokens = require("jsontokens");
var _constants = require("./constants");
var _dids = require("./dids");
const VERSION = "1.4.0";
function generateTransitKey() {
    const transitKey = (0, _encryption.makeECPrivateKey)();
    return transitKey;
}
const makeAuthRequest = makeAuthRequestToken;
function makeAuthRequestToken(transitPrivateKey, redirectURI, manifestURI, scopes = (0, _constants.DEFAULT_SCOPE).slice(), appDomain, expiresAt = (0, _common.nextMonth)().getTime(), extraParams = {}) {
    const getWindowOrigin = (paramName)=>{
        const location = (0, _common.getGlobalObject)("location", {
            throwIfUnavailable: true,
            usageDesc: `makeAuthRequest([${paramName}=undefined])`
        });
        return location?.origin;
    };
    if (!redirectURI) redirectURI = `${getWindowOrigin("redirectURI")}/`;
    if (!manifestURI) manifestURI = `${getWindowOrigin("manifestURI")}/manifest.json`;
    if (!appDomain) appDomain = getWindowOrigin("appDomain");
    const payload = Object.assign({}, extraParams, {
        jti: (0, _common.makeUUID4)(),
        iat: Math.floor(new Date().getTime() / 1000),
        exp: Math.floor(expiresAt / 1000),
        iss: null,
        public_keys: [],
        domain_name: appDomain,
        manifest_uri: manifestURI,
        redirect_uri: redirectURI,
        version: VERSION,
        do_not_include_profile: true,
        supports_hub_url: true,
        scopes
    });
    const publicKey = (0, _jsontokens.SECP256K1Client).derivePublicKey(transitPrivateKey);
    payload.public_keys = [
        publicKey
    ];
    const address = (0, _encryption.publicKeyToBtcAddress)(publicKey);
    payload.iss = (0, _dids.makeDIDFromAddress)(address);
    const tokenSigner = new (0, _jsontokens.TokenSigner)("ES256k", transitPrivateKey);
    const token = tokenSigner.sign(payload);
    return token;
}
async function encryptPrivateKey(publicKey, privateKey) {
    const encryptedObj = await (0, _encryption.encryptECIES)(publicKey, (0, _common.utf8ToBytes)(privateKey), true);
    const encryptedJSON = JSON.stringify(encryptedObj);
    return (0, _common.bytesToHex)((0, _common.utf8ToBytes)(encryptedJSON));
}
async function decryptPrivateKey(privateKey, hexedEncrypted) {
    const unhexedString = (0, _common.bytesToUtf8)((0, _common.hexToBytes)(hexedEncrypted));
    const encryptedObj = JSON.parse(unhexedString);
    const decrypted = await (0, _encryption.decryptECIES)(privateKey, encryptedObj);
    if (typeof decrypted !== "string") throw new Error("Unable to correctly decrypt private key");
    else return decrypted;
}
async function makeAuthResponse(privateKey, profile = {}, metadata, coreToken = null, appPrivateKey = null, expiresAt = (0, _common.nextMonth)().getTime(), transitPublicKey = null, hubUrl = null, blockstackAPIUrl = null, associationToken = null, appPrivateKeyFromWalletSalt = null) {
    const publicKey = (0, _jsontokens.SECP256K1Client).derivePublicKey(privateKey);
    const address = (0, _encryption.publicKeyToBtcAddress)(publicKey);
    let privateKeyPayload = appPrivateKey;
    let coreTokenPayload = coreToken;
    let additionalProperties = {};
    if (appPrivateKey !== undefined && appPrivateKey !== null) {
        if (transitPublicKey !== undefined && transitPublicKey !== null) {
            privateKeyPayload = await encryptPrivateKey(transitPublicKey, appPrivateKey);
            if (coreToken !== undefined && coreToken !== null) coreTokenPayload = await encryptPrivateKey(transitPublicKey, coreToken);
        }
        additionalProperties = {
            email: metadata?.email ? metadata.email : null,
            profile_url: metadata?.profileUrl ? metadata.profileUrl : null,
            hubUrl,
            blockstackAPIUrl,
            associationToken,
            version: VERSION
        };
    }
    const payload = Object.assign({}, {
        jti: (0, _common.makeUUID4)(),
        iat: Math.floor(new Date().getTime() / 1000),
        exp: Math.floor(expiresAt / 1000),
        iss: (0, _dids.makeDIDFromAddress)(address),
        private_key: privateKeyPayload,
        public_keys: [
            publicKey
        ],
        appPrivateKeyFromWalletSalt,
        profile,
        core_token: coreTokenPayload
    }, additionalProperties);
    const tokenSigner = new (0, _jsontokens.TokenSigner)("ES256k", privateKey);
    return tokenSigner.sign(payload);
}

},{"@stacks/common":"5ZsuO","@stacks/encryption":"fLdoW","jsontokens":"7yDiP","./constants":"c0I71","./dids":"8kFYP","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fLdoW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encryptMnemonic", ()=>(0, _wallet.encryptMnemonic));
parcelHelpers.export(exports, "decryptMnemonic", ()=>(0, _wallet.decryptMnemonic));
var _ec = require("./ec");
parcelHelpers.exportAll(_ec, exports);
var _keys = require("./keys");
parcelHelpers.exportAll(_keys, exports);
var _cryptoRandom = require("./cryptoRandom");
parcelHelpers.exportAll(_cryptoRandom, exports);
var _sha2Hash = require("./sha2Hash");
parcelHelpers.exportAll(_sha2Hash, exports);
var _encryption = require("./encryption");
parcelHelpers.exportAll(_encryption, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);
var _messageSignature = require("./messageSignature");
parcelHelpers.exportAll(_messageSignature, exports);
var _wallet = require("./wallet");

},{"./ec":"5hroU","./keys":"bgde2","./cryptoRandom":"4Qgaq","./sha2Hash":"l9G8G","./encryption":"7GKCh","./utils":"i1AZw","./messageSignature":"2oTAA","./wallet":false,"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"5hroU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InvalidPublicKeyReason", ()=>InvalidPublicKeyReason);
parcelHelpers.export(exports, "aes256CbcEncrypt", ()=>aes256CbcEncrypt);
parcelHelpers.export(exports, "hmacSha256", ()=>hmacSha256);
parcelHelpers.export(exports, "getHexFromBN", ()=>getHexFromBN);
parcelHelpers.export(exports, "getBytesFromBN", ()=>getBytesFromBN);
parcelHelpers.export(exports, "getCipherObjectWrapper", ()=>getCipherObjectWrapper);
parcelHelpers.export(exports, "getSignedCipherObjectWrapper", ()=>getSignedCipherObjectWrapper);
parcelHelpers.export(exports, "eciesGetJsonStringLength", ()=>eciesGetJsonStringLength);
parcelHelpers.export(exports, "encryptECIES", ()=>encryptECIES);
parcelHelpers.export(exports, "decryptECIES", ()=>decryptECIES);
parcelHelpers.export(exports, "signECDSA", ()=>signECDSA);
parcelHelpers.export(exports, "verifyECDSA", ()=>verifyECDSA);
parcelHelpers.export(exports, "verifyMessageSignature", ()=>verifyMessageSignature);
parcelHelpers.export(exports, "verifyMessageSignatureRsv", ()=>verifyMessageSignatureRsv);
var _hmac = require("@noble/hashes/hmac");
var _sha256 = require("@noble/hashes/sha256");
var _secp256K1 = require("@noble/secp256k1");
var _common = require("@stacks/common");
var _base64Js = require("base64-js");
var _aesCipher = require("./aesCipher");
var _keys = require("./keys");
var _messageSignature = require("./messageSignature");
var _sha2Hash = require("./sha2Hash");
var _utils = require("./utils");
(0, _secp256K1.utils).hmacSha256Sync = (key, ...msgs)=>{
    const h = (0, _hmac.hmac).create((0, _sha256.sha256), key);
    msgs.forEach((msg)=>h.update(msg));
    return h.digest();
};
var InvalidPublicKeyReason;
(function(InvalidPublicKeyReason) {
    InvalidPublicKeyReason["InvalidFormat"] = "InvalidFormat";
    InvalidPublicKeyReason["IsNotPoint"] = "IsNotPoint";
})(InvalidPublicKeyReason || (InvalidPublicKeyReason = {}));
async function aes256CbcEncrypt(iv, key, plaintext) {
    const cipher = await (0, _aesCipher.createCipher)();
    return await cipher.encrypt("aes-256-cbc", key, iv, plaintext);
}
async function aes256CbcDecrypt(iv, key, ciphertext) {
    const cipher = await (0, _aesCipher.createCipher)();
    return await cipher.decrypt("aes-256-cbc", key, iv, ciphertext);
}
function hmacSha256(key, content) {
    return (0, _hmac.hmac)((0, _sha256.sha256), key, content);
}
function equalsConstTime(a, b) {
    if (a.length !== b.length) return false;
    let res = 0;
    for(let i = 0; i < a.length; i++)res |= a[i] ^ b[i];
    return res === 0;
}
function sharedSecretToKeys(sharedSecret) {
    const hashedSecret = (0, _sha2Hash.hashSha512Sync)(sharedSecret);
    return {
        encryptionKey: hashedSecret.slice(0, 32),
        hmacKey: hashedSecret.slice(32)
    };
}
function allHexChars(maybe) {
    return maybe.match(/^[0-9a-f]+$/i) !== null;
}
function isValidPublicKey(pub) {
    const invalidFormat = {
        result: false,
        reason_data: "Invalid public key format",
        reason: InvalidPublicKeyReason.InvalidFormat
    };
    const invalidPoint = {
        result: false,
        reason_data: "Public key is not a point",
        reason: InvalidPublicKeyReason.IsNotPoint
    };
    if (pub.length !== 66 && pub.length !== 130) return invalidFormat;
    const firstByte = pub.slice(0, 2);
    if (pub.length === 130 && firstByte !== "04") return invalidFormat;
    if (pub.length === 66 && firstByte !== "02" && firstByte !== "03") return invalidFormat;
    if (!allHexChars(pub)) return invalidFormat;
    try {
        const point = (0, _secp256K1.Point).fromHex(pub);
        point.assertValidity();
        return {
            result: true,
            reason_data: null,
            reason: null
        };
    } catch (e) {
        return invalidPoint;
    }
}
function getHexFromBN(bnInput) {
    const hexOut = bnInput.toString(16);
    if (hexOut.length === 64) return hexOut;
    else if (hexOut.length < 64) {
        const padding = "0".repeat(64 - hexOut.length);
        return `${padding}${hexOut}`;
    } else throw new Error("Generated a > 32-byte BN for encryption. Failing.");
}
function getBytesFromBN(bnInput) {
    const result = (0, _common.bigIntToBytes)(bnInput, 32);
    if (result.byteLength !== 32) throw new Error("Failed to generate a 32-byte Uint8Array");
    return result;
}
function getCipherObjectWrapper(opts) {
    const shell = {
        iv: "",
        ephemeralPK: "",
        mac: "",
        cipherText: "",
        wasString: !!opts.wasString
    };
    if (opts.cipherTextEncoding === "base64") shell.cipherTextEncoding = "base64";
    const ivLength = 32;
    const ephemeralPKLength = 66;
    const macLength = 64;
    return {
        payloadValuesLength: ivLength + ephemeralPKLength + macLength,
        payloadShell: JSON.stringify(shell)
    };
}
function getSignedCipherObjectWrapper(payloadShell) {
    const shell = {
        signature: "",
        publicKey: "",
        cipherText: payloadShell
    };
    const signatureLength = 144;
    const publicKeyLength = 66;
    return {
        signedPayloadValuesLength: signatureLength + publicKeyLength,
        signedPayloadShell: JSON.stringify(shell)
    };
}
function eciesGetJsonStringLength(opts) {
    const { payloadShell , payloadValuesLength  } = getCipherObjectWrapper(opts);
    const cipherTextLength = (0, _utils.getAesCbcOutputLength)(opts.contentLength);
    let encodedCipherTextLength;
    if (!opts.cipherTextEncoding || opts.cipherTextEncoding === "hex") encodedCipherTextLength = cipherTextLength * 2;
    else if (opts.cipherTextEncoding === "base64") encodedCipherTextLength = (0, _utils.getBase64OutputLength)(cipherTextLength);
    else throw new Error(`Unexpected cipherTextEncoding "${opts.cipherTextEncoding}"`);
    if (!opts.sign) return payloadShell.length + payloadValuesLength + encodedCipherTextLength;
    else {
        const { signedPayloadShell , signedPayloadValuesLength  } = getSignedCipherObjectWrapper(payloadShell);
        return signedPayloadShell.length + signedPayloadValuesLength + payloadValuesLength + encodedCipherTextLength;
    }
}
async function encryptECIES(publicKey, content, wasString, cipherTextEncoding) {
    const validity = isValidPublicKey(publicKey);
    if (!validity.result) throw validity;
    const ephemeralPrivateKey = (0, _secp256K1.utils).randomPrivateKey();
    const ephemeralPublicKey = (0, _secp256K1.getPublicKey)(ephemeralPrivateKey, true);
    let sharedSecret = (0, _secp256K1.getSharedSecret)(ephemeralPrivateKey, publicKey, true);
    sharedSecret = sharedSecret.slice(1);
    const sharedKeys = sharedSecretToKeys(sharedSecret);
    const initializationVector = (0, _secp256K1.utils).randomBytes(16);
    const cipherText = await aes256CbcEncrypt(initializationVector, sharedKeys.encryptionKey, content);
    const macData = (0, _common.concatBytes)(initializationVector, ephemeralPublicKey, cipherText);
    const mac = hmacSha256(sharedKeys.hmacKey, macData);
    let cipherTextString;
    if (!cipherTextEncoding || cipherTextEncoding === "hex") cipherTextString = (0, _common.bytesToHex)(cipherText);
    else if (cipherTextEncoding === "base64") cipherTextString = (0, _base64Js.fromByteArray)(cipherText);
    else throw new Error(`Unexpected cipherTextEncoding "${cipherTextEncoding}"`);
    const result = {
        iv: (0, _common.bytesToHex)(initializationVector),
        ephemeralPK: (0, _common.bytesToHex)(ephemeralPublicKey),
        cipherText: cipherTextString,
        mac: (0, _common.bytesToHex)(mac),
        wasString
    };
    if (cipherTextEncoding && cipherTextEncoding !== "hex") result.cipherTextEncoding = cipherTextEncoding;
    return result;
}
async function decryptECIES(privateKey, cipherObject) {
    if (!cipherObject.ephemeralPK) throw new (0, _common.FailedDecryptionError)("Unable to get public key from cipher object. You might be trying to decrypt an unencrypted object.");
    const ephemeralPK = cipherObject.ephemeralPK;
    let sharedSecret = (0, _secp256K1.getSharedSecret)(privateKey, ephemeralPK, true);
    sharedSecret = sharedSecret.slice(1);
    const sharedKeys = sharedSecretToKeys(sharedSecret);
    const ivBytes = (0, _common.hexToBytes)(cipherObject.iv);
    let cipherTextBytes;
    if (!cipherObject.cipherTextEncoding || cipherObject.cipherTextEncoding === "hex") cipherTextBytes = (0, _common.hexToBytes)(cipherObject.cipherText);
    else if (cipherObject.cipherTextEncoding === "base64") cipherTextBytes = (0, _base64Js.toByteArray)(cipherObject.cipherText);
    else throw new Error(`Unexpected cipherTextEncoding "${cipherObject.cipherText}"`);
    const macData = (0, _common.concatBytes)(ivBytes, (0, _common.hexToBytes)(ephemeralPK), cipherTextBytes);
    const actualMac = hmacSha256(sharedKeys.hmacKey, macData);
    const expectedMac = (0, _common.hexToBytes)(cipherObject.mac);
    if (!equalsConstTime(expectedMac, actualMac)) throw new (0, _common.FailedDecryptionError)("Decryption failed: failure in MAC check");
    const plainText = await aes256CbcDecrypt(ivBytes, sharedKeys.encryptionKey, cipherTextBytes);
    if (cipherObject.wasString) return (0, _common.bytesToUtf8)(plainText);
    return plainText;
}
function signECDSA(privateKey, content) {
    const contentBytes = typeof content === "string" ? (0, _common.utf8ToBytes)(content) : content;
    const publicKey = (0, _keys.getPublicKeyFromPrivate)(privateKey);
    const contentHash = (0, _sha2Hash.hashSha256Sync)(contentBytes);
    const signature = (0, _secp256K1.signSync)(contentHash, privateKey);
    return {
        signature: (0, _common.bytesToHex)(signature),
        publicKey
    };
}
function verifyECDSA(content, publicKey, signature) {
    const contentBytes = typeof content === "string" ? (0, _common.utf8ToBytes)(content) : content;
    const contentHash = (0, _sha2Hash.hashSha256Sync)(contentBytes);
    return (0, _secp256K1.verify)(signature, contentHash, publicKey, {
        strict: false
    });
}
function verifyMessageSignature({ signature , message , publicKey  }) {
    const { r , s  } = (0, _common.parseRecoverableSignatureVrs)(signature);
    const sig = new (0, _secp256K1.Signature)((0, _common.hexToBigInt)(r), (0, _common.hexToBigInt)(s));
    const hashedMsg = typeof message === "string" ? (0, _messageSignature.hashMessage)(message) : message;
    const verificationResult = (0, _secp256K1.verify)(sig, hashedMsg, publicKey, {
        strict: false
    });
    if (verificationResult || typeof message !== "string") return verificationResult;
    const LEGACY_PREFIX = "\x18Stacks Message Signing:\n";
    const legacyHash = (0, _sha256.sha256)((0, _messageSignature.encodeMessage)(message, LEGACY_PREFIX));
    return (0, _secp256K1.verify)(sig, legacyHash, publicKey, {
        strict: false
    });
}
function verifyMessageSignatureRsv({ signature , message , publicKey  }) {
    return verifyMessageSignature({
        signature: (0, _common.signatureRsvToVrs)(signature),
        message,
        publicKey
    });
}

},{"@noble/hashes/hmac":"3IfCc","@noble/hashes/sha256":"JjjO8","@noble/secp256k1":"eyYsH","@stacks/common":"5ZsuO","base64-js":"eIiSV","./aesCipher":"kJ7gI","./keys":"bgde2","./messageSignature":"2oTAA","./sha2Hash":"l9G8G","./utils":"i1AZw","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3IfCc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = void 0;
const _assert_js_1 = require("ba898acbaccdd12b");
const utils_js_1 = require("d0c9161da38ad055");
// HMAC (RFC 2104)
class HMAC extends utils_js_1.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        _assert_js_1.default.hash(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function") throw new TypeError("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        _assert_js_1.default.exists(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.bytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash , iHash , finished , destroyed , blockLen , outputLen  } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */ const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key);

},{"ba898acbaccdd12b":"BFdql","d0c9161da38ad055":"2ehgp"}],"BFdql":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== "boolean") throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== "function" || typeof hash.create !== "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"2ehgp":[function(require,module,exports) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// The import here is via the package name. This is to ensure
// that exports mapping/resolution does fall into place.
const crypto_1 = require("8cda3fed3c9abdaf");
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!exports.isLE) throw new Error("Non little-endian hardware is not supported");
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
/**
 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
 */ function bytesToHex(uint8a) {
    // pre-caching improves the speed 6x
    if (!(uint8a instanceof Uint8Array)) throw new Error("Uint8Array expected");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
/**
 * @example hexToBytes('deadbeef')
 */ function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex");
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow. However, call to async function will return Promise
// which will be fullfiled only on next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
function utf8ToBytes(str) {
    if (typeof str !== "string") throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    return new TextEncoder().encode(str);
}
exports.utf8ToBytes = utf8ToBytes;
function toBytes(data) {
    if (typeof data === "string") data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array)) throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */ function concatBytes(...arrays) {
    if (!arrays.every((a)=>a instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj)=>Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function checkOpts(defaults, opts) {
    if (opts !== undefined && (typeof opts !== "object" || !isPlainObject(opts))) throw new TypeError("Options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashConstructor) {
    const hashC = (message)=>hashConstructor().update(toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashConstructor();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
/**
 * Secure PRNG
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto.web) return crypto_1.crypto.web.getRandomValues(new Uint8Array(bytesLength));
    else if (crypto_1.crypto.node) return new Uint8Array(crypto_1.crypto.node.randomBytes(bytesLength).buffer);
    else throw new Error("The environment doesn't have randomBytes function");
}
exports.randomBytes = randomBytes;

},{"8cda3fed3c9abdaf":"7XNEy"}],"7XNEy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = {
    node: undefined,
    web: typeof self === "object" && "crypto" in self ? self.crypto : undefined
};

},{}],"JjjO8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _sha2_js_1 = require("ae8ed989164bd4b8");
const utils_js_1 = require("a1360b0686cca01a");
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A , B , C , D , E , F , G , H  } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A , B , C , D , E , F , G , H  } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"ae8ed989164bd4b8":"6HKeB","a1360b0686cca01a":"2ehgp"}],"6HKeB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const _assert_js_1 = require("75597c4b861c3dcf");
const utils_js_1 = require("d9f41d3b00a51ad");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === "function") return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        _assert_js_1.default.exists(this);
        const { view , buffer , blockLen  } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.output(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer , view , blockLen , isLE  } = this;
        let { pos  } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer , outputLen  } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen , buffer , length , finished , destroyed , pos  } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"75597c4b861c3dcf":"BFdql","d9f41d3b00a51ad":"2ehgp"}],"eyYsH":[function(require,module,exports) {
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CURVE", ()=>CURVE);
parcelHelpers.export(exports, "Point", ()=>Point);
parcelHelpers.export(exports, "Signature", ()=>Signature);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "recoverPublicKey", ()=>recoverPublicKey);
parcelHelpers.export(exports, "getSharedSecret", ()=>getSharedSecret);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "signSync", ()=>signSync);
parcelHelpers.export(exports, "verify", ()=>verify);
parcelHelpers.export(exports, "schnorr", ()=>schnorr);
parcelHelpers.export(exports, "utils", ()=>utils);
var _crypto = require("crypto");
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _3n = BigInt(3);
const _8n = BigInt(8);
const CURVE = Object.freeze({
    a: _0n,
    b: BigInt(7),
    P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    h: _1n,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
const divNearest = (a, b)=>(a + b / _2n) / b;
const endo = {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar (k) {
        const { n  } = CURVE;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b2 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b2 * k, n);
        const c2 = divNearest(-b1 * k, n);
        let k1 = mod(k - c1 * a1 - c2 * a2, n);
        let k2 = mod(-c1 * b1 - c2 * b2, n);
        const k1neg = k1 > POW_2_128;
        const k2neg = k2 > POW_2_128;
        if (k1neg) k1 = n - k1;
        if (k2neg) k2 = n - k2;
        if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
        return {
            k1neg,
            k1,
            k2neg,
            k2
        };
    }
};
const fieldLen = 32;
const groupLen = 32;
const hashLen = 32;
const compressedLen = fieldLen + 1;
const uncompressedLen = 2 * fieldLen + 1;
function weierstrass(x) {
    const { a , b  } = CURVE;
    const x2 = mod(x * x);
    const x3 = mod(x2 * x);
    return mod(x3 + a * x + b);
}
const USE_ENDOMORPHISM = CURVE.a === _0n;
class ShaError extends Error {
    constructor(message){
        super(message);
    }
}
function assertJacPoint(other) {
    if (!(other instanceof JacobianPoint)) throw new TypeError("JacobianPoint expected");
}
class JacobianPoint {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromAffine(p) {
        if (!(p instanceof Point)) throw new TypeError("JacobianPoint#fromAffine: expected Point");
        if (p.equals(Point.ZERO)) return JacobianPoint.ZERO;
        return new JacobianPoint(p.x, p.y, _1n);
    }
    static toAffineBatch(points) {
        const toInv = invertBatch(points.map((p)=>p.z));
        return points.map((p, i)=>p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
        return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
    }
    equals(other) {
        assertJacPoint(other);
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { x: X2 , y: Y2 , z: Z2  } = other;
        const Z1Z1 = mod(Z1 * Z1);
        const Z2Z2 = mod(Z2 * Z2);
        const U1 = mod(X1 * Z2Z2);
        const U2 = mod(X2 * Z1Z1);
        const S1 = mod(mod(Y1 * Z2) * Z2Z2);
        const S2 = mod(mod(Y2 * Z1) * Z1Z1);
        return U1 === U2 && S1 === S2;
    }
    negate() {
        return new JacobianPoint(this.x, mod(-this.y), this.z);
    }
    double() {
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const A = mod(X1 * X1);
        const B = mod(Y1 * Y1);
        const C = mod(B * B);
        const x1b = X1 + B;
        const D = mod(_2n * (mod(x1b * x1b) - A - C));
        const E = mod(_3n * A);
        const F = mod(E * E);
        const X3 = mod(F - _2n * D);
        const Y3 = mod(E * (D - X3) - _8n * C);
        const Z3 = mod(_2n * Y1 * Z1);
        return new JacobianPoint(X3, Y3, Z3);
    }
    add(other) {
        assertJacPoint(other);
        const { x: X1 , y: Y1 , z: Z1  } = this;
        const { x: X2 , y: Y2 , z: Z2  } = other;
        if (X2 === _0n || Y2 === _0n) return this;
        if (X1 === _0n || Y1 === _0n) return other;
        const Z1Z1 = mod(Z1 * Z1);
        const Z2Z2 = mod(Z2 * Z2);
        const U1 = mod(X1 * Z2Z2);
        const U2 = mod(X2 * Z1Z1);
        const S1 = mod(mod(Y1 * Z2) * Z2Z2);
        const S2 = mod(mod(Y2 * Z1) * Z1Z1);
        const H = mod(U2 - U1);
        const r = mod(S2 - S1);
        if (H === _0n) {
            if (r === _0n) return this.double();
            else return JacobianPoint.ZERO;
        }
        const HH = mod(H * H);
        const HHH = mod(H * HH);
        const V = mod(U1 * HH);
        const X3 = mod(r * r - HHH - _2n * V);
        const Y3 = mod(r * (V - X3) - S1 * HHH);
        const Z3 = mod(Z1 * Z2 * H);
        return new JacobianPoint(X3, Y3, Z3);
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiplyUnsafe(scalar) {
        const P0 = JacobianPoint.ZERO;
        if (typeof scalar === "bigint" && scalar === _0n) return P0;
        let n = normalizeScalar(scalar);
        if (n === _1n) return this;
        if (!USE_ENDOMORPHISM) {
            let p = P0;
            let d = this;
            while(n > _0n){
                if (n & _1n) p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        }
        let { k1neg , k1 , k2neg , k2  } = endo.splitScalar(n);
        let k1p = P0;
        let k2p = P0;
        let d = this;
        while(k1 > _0n || k2 > _0n){
            if (k1 & _1n) k1p = k1p.add(d);
            if (k2 & _1n) k2p = k2p.add(d);
            d = d.double();
            k1 >>= _1n;
            k2 >>= _1n;
        }
        if (k1neg) k1p = k1p.negate();
        if (k2neg) k2p = k2p.negate();
        k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
        return k1p.add(k2p);
    }
    precomputeWindow(W) {
        const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
        const points = [];
        let p = this;
        let base = p;
        for(let window = 0; window < windows; window++){
            base = p;
            points.push(base);
            for(let i = 1; i < 2 ** (W - 1); i++){
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(JacobianPoint.BASE)) affinePoint = Point.BASE;
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
        if (!precomputes) {
            precomputes = this.precomputeWindow(W);
            if (affinePoint && W !== 1) {
                precomputes = JacobianPoint.normalizeZ(precomputes);
                pointPrecomputes.set(affinePoint, precomputes);
            }
        }
        let p = JacobianPoint.ZERO;
        let f = JacobianPoint.BASE;
        const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for(let window = 0; window < windows; window++){
            const offset = window * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n += _1n;
            }
            const offset1 = offset;
            const offset2 = offset + Math.abs(wbits) - 1;
            const cond1 = window % 2 !== 0;
            const cond2 = wbits < 0;
            if (wbits === 0) f = f.add(constTimeNegate(cond1, precomputes[offset1]));
            else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
        return {
            p,
            f
        };
    }
    multiply(scalar, affinePoint) {
        let n = normalizeScalar(scalar);
        let point;
        let fake;
        if (USE_ENDOMORPHISM) {
            const { k1neg , k1 , k2neg , k2  } = endo.splitScalar(n);
            let { p: k1p , f: f1p  } = this.wNAF(k1, affinePoint);
            let { p: k2p , f: f2p  } = this.wNAF(k2, affinePoint);
            k1p = constTimeNegate(k1neg, k1p);
            k2p = constTimeNegate(k2neg, k2p);
            k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
            point = k1p.add(k2p);
            fake = f1p.add(f2p);
        } else {
            const { p , f  } = this.wNAF(n, affinePoint);
            point = p;
            fake = f;
        }
        return JacobianPoint.normalizeZ([
            point,
            fake
        ])[0];
    }
    toAffine(invZ) {
        const { x , y , z  } = this;
        const is0 = this.equals(JacobianPoint.ZERO);
        if (invZ == null) invZ = is0 ? _8n : invert(z);
        const iz1 = invZ;
        const iz2 = mod(iz1 * iz1);
        const iz3 = mod(iz2 * iz1);
        const ax = mod(x * iz2);
        const ay = mod(y * iz3);
        const zz = mod(z * iz1);
        if (is0) return Point.ZERO;
        if (zz !== _1n) throw new Error("invZ was invalid");
        return new Point(ax, ay);
    }
}
JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
}
const pointPrecomputes = new WeakMap();
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
    }
    hasEvenY() {
        return this.y % _2n === _0n;
    }
    static fromCompressedHex(bytes) {
        const isShort = bytes.length === 32;
        const x = bytesToNumber(isShort ? bytes : bytes.subarray(1));
        if (!isValidFieldElement(x)) throw new Error("Point is not on curve");
        const y2 = weierstrass(x);
        let y = sqrtMod(y2);
        const isYOdd = (y & _1n) === _1n;
        if (isShort) {
            if (isYOdd) y = mod(-y);
        } else {
            const isFirstByteOdd = (bytes[0] & 1) === 1;
            if (isFirstByteOdd !== isYOdd) y = mod(-y);
        }
        const point = new Point(x, y);
        point.assertValidity();
        return point;
    }
    static fromUncompressedHex(bytes) {
        const x = bytesToNumber(bytes.subarray(1, fieldLen + 1));
        const y = bytesToNumber(bytes.subarray(fieldLen + 1, fieldLen * 2 + 1));
        const point = new Point(x, y);
        point.assertValidity();
        return point;
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex);
        const len = bytes.length;
        const header = bytes[0];
        if (len === fieldLen) return this.fromCompressedHex(bytes);
        if (len === compressedLen && (header === 0x02 || header === 0x03)) return this.fromCompressedHex(bytes);
        if (len === uncompressedLen && header === 0x04) return this.fromUncompressedHex(bytes);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes, not ${len}`);
    }
    static fromPrivateKey(privateKey) {
        return Point.BASE.multiply(normalizePrivateKey(privateKey));
    }
    static fromSignature(msgHash, signature, recovery) {
        const { r , s  } = normalizeSignature(signature);
        if (![
            0,
            1,
            2,
            3
        ].includes(recovery)) throw new Error("Cannot recover: invalid recovery bit");
        const h = truncateHash(ensureBytes(msgHash));
        const { n  } = CURVE;
        const radj = recovery === 2 || recovery === 3 ? r + n : r;
        const rinv = invert(radj, n);
        const u1 = mod(-h * rinv, n);
        const u2 = mod(s * rinv, n);
        const prefix = recovery & 1 ? "03" : "02";
        const R = Point.fromHex(prefix + numTo32bStr(radj));
        const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q) throw new Error("Cannot recover signature: point at infinify");
        Q.assertValidity();
        return Q;
    }
    toRawBytes(isCompressed = false) {
        return hexToBytes(this.toHex(isCompressed));
    }
    toHex(isCompressed = false) {
        const x = numTo32bStr(this.x);
        if (isCompressed) {
            const prefix = this.hasEvenY() ? "02" : "03";
            return `${prefix}${x}`;
        } else return `04${x}${numTo32bStr(this.y)}`;
    }
    toHexX() {
        return this.toHex(true).slice(2);
    }
    toRawX() {
        return this.toRawBytes(true).slice(1);
    }
    assertValidity() {
        const msg = "Point is not on elliptic curve";
        const { x , y  } = this;
        if (!isValidFieldElement(x) || !isValidFieldElement(y)) throw new Error(msg);
        const left = mod(y * y);
        const right = weierstrass(x);
        if (mod(left - right) !== _0n) throw new Error(msg);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    negate() {
        return new Point(this.x, mod(-this.y));
    }
    double() {
        return JacobianPoint.fromAffine(this).double().toAffine();
    }
    add(other) {
        return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiply(scalar) {
        return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
    multiplyAndAddUnsafe(Q, a, b) {
        const P = JacobianPoint.fromAffine(this);
        const aP = a === _0n || a === _1n || this !== Point.BASE ? P.multiplyUnsafe(a) : P.multiply(a);
        const bQ = JacobianPoint.fromAffine(Q).multiplyUnsafe(b);
        const sum = aP.add(bQ);
        return sum.equals(JacobianPoint.ZERO) ? undefined : sum.toAffine();
    }
}
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _0n);
function sliceDER(s) {
    return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
}
function parseDERInt(data) {
    if (data.length < 2 || data[0] !== 0x02) throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len) throw new Error(`Invalid signature integer: wrong length`);
    if (res[0] === 0x00 && res[1] <= 0x7f) throw new Error("Invalid signature integer: trailing length");
    return {
        data: bytesToNumber(res),
        left: data.subarray(len + 2)
    };
}
function parseDERSignature(data) {
    if (data.length < 2 || data[0] != 0x30) throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
    if (data[1] !== data.length - 2) throw new Error("Invalid signature: incorrect length");
    const { data: r , left: sBytes  } = parseDERInt(data.subarray(2));
    const { data: s , left: rBytesLeft  } = parseDERInt(sBytes);
    if (rBytesLeft.length) throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
    return {
        r,
        s
    };
}
class Signature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromCompact(hex) {
        const arr = hex instanceof Uint8Array;
        const name = "Signature.fromCompact";
        if (typeof hex !== "string" && !arr) throw new TypeError(`${name}: Expected string or Uint8Array`);
        const str = arr ? bytesToHex(hex) : hex;
        if (str.length !== 128) throw new Error(`${name}: Expected 64-byte hex`);
        return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
    }
    static fromDER(hex) {
        const arr = hex instanceof Uint8Array;
        if (typeof hex !== "string" && !arr) throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
        const { r , s  } = parseDERSignature(arr ? hex : hexToBytes(hex));
        return new Signature(r, s);
    }
    static fromHex(hex) {
        return this.fromDER(hex);
    }
    assertValidity() {
        const { r , s  } = this;
        if (!isWithinCurveOrder(r)) throw new Error("Invalid Signature: r must be 0 < r < n");
        if (!isWithinCurveOrder(s)) throw new Error("Invalid Signature: s must be 0 < s < n");
    }
    hasHighS() {
        const HALF = CURVE.n >> _1n;
        return this.s > HALF;
    }
    normalizeS() {
        return this.hasHighS() ? new Signature(this.r, mod(-this.s, CURVE.n)) : this;
    }
    toDERRawBytes() {
        return hexToBytes(this.toDERHex());
    }
    toDERHex() {
        const sHex = sliceDER(numberToHexUnpadded(this.s));
        const rHex = sliceDER(numberToHexUnpadded(this.r));
        const sHexL = sHex.length / 2;
        const rHexL = rHex.length / 2;
        const sLen = numberToHexUnpadded(sHexL);
        const rLen = numberToHexUnpadded(rHexL);
        const length = numberToHexUnpadded(rHexL + sHexL + 4);
        return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
    }
    toRawBytes() {
        return this.toDERRawBytes();
    }
    toHex() {
        return this.toDERHex();
    }
    toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
        return numTo32bStr(this.r) + numTo32bStr(this.s);
    }
}
function concatBytes(...arrays) {
    if (!arrays.every((b)=>b instanceof Uint8Array)) throw new Error("Uint8Array list expected");
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr)=>a + arr.length, 0);
    const result = new Uint8Array(length);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    let hex = "";
    for(let i = 0; i < uint8a.length; i++)hex += hexes[uint8a[i]];
    return hex;
}
const POW_2_256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function numTo32bStr(num) {
    if (typeof num !== "bigint") throw new Error("Expected bigint");
    if (!(_0n <= num && num < POW_2_256)) throw new Error("Expected number 0 <= n < 2^256");
    return num.toString(16).padStart(64, "0");
}
function numTo32b(num) {
    const b = hexToBytes(numTo32bStr(num));
    if (b.length !== 32) throw new Error("Error: expected 32 bytes");
    return b;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToNumber: expected string, got " + typeof hex);
    return BigInt(`0x${hex}`);
}
function hexToBytes(hex) {
    if (typeof hex !== "string") throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    if (hex.length % 2) throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
    const array = new Uint8Array(hex.length / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error("Invalid byte sequence");
        array[i] = byte;
    }
    return array;
}
function bytesToNumber(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function ensureBytes(hex) {
    return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
}
function normalizeScalar(num) {
    if (typeof num === "number" && Number.isSafeInteger(num) && num > 0) return BigInt(num);
    if (typeof num === "bigint" && isWithinCurveOrder(num)) return num;
    throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function mod(a, b = CURVE.P) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
function pow2(x, power) {
    const { P  } = CURVE;
    let res = x;
    while(power-- > _0n){
        res *= res;
        res %= P;
    }
    return res;
}
function sqrtMod(x) {
    const { P  } = CURVE;
    const _6n = BigInt(6);
    const _11n = BigInt(11);
    const _22n = BigInt(22);
    const _23n = BigInt(23);
    const _44n = BigInt(44);
    const _88n = BigInt(88);
    const b2 = x * x * x % P;
    const b3 = b2 * b2 * x % P;
    const b6 = pow2(b3, _3n) * b3 % P;
    const b9 = pow2(b6, _3n) * b3 % P;
    const b11 = pow2(b9, _2n) * b2 % P;
    const b22 = pow2(b11, _11n) * b11 % P;
    const b44 = pow2(b22, _22n) * b22 % P;
    const b88 = pow2(b44, _44n) * b44 % P;
    const b176 = pow2(b88, _88n) * b88 % P;
    const b220 = pow2(b176, _44n) * b44 % P;
    const b223 = pow2(b220, _3n) * b3 % P;
    const t1 = pow2(b223, _23n) * b22 % P;
    const t2 = pow2(t1, _6n) * b2 % P;
    const rt = pow2(t2, _2n);
    const xc = rt * rt % P;
    if (xc !== x) throw new Error("Cannot find square root");
    return rt;
}
function invert(number, modulo = CURVE.P) {
    if (number === _0n || modulo <= _0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    let a = mod(number, modulo);
    let b = modulo;
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error("invert: does not exist");
    return mod(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
    const scratch = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (num === _0n) return acc;
        scratch[i] = acc;
        return mod(acc * num, p);
    }, _1n);
    const inverted = invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i)=>{
        if (num === _0n) return acc;
        scratch[i] = mod(acc * scratch[i], p);
        return mod(acc * num, p);
    }, inverted);
    return scratch;
}
function bits2int_2(bytes) {
    const delta = bytes.length * 8 - groupLen * 8;
    const num = bytesToNumber(bytes);
    return delta > 0 ? num >> BigInt(delta) : num;
}
function truncateHash(hash, truncateOnly = false) {
    const h = bits2int_2(hash);
    if (truncateOnly) return h;
    const { n  } = CURVE;
    return h >= n ? h - n : h;
}
let _sha256Sync;
let _hmacSha256Sync;
class HmacDrbg {
    constructor(hashLen, qByteLen){
        this.hashLen = hashLen;
        this.qByteLen = qByteLen;
        if (typeof hashLen !== "number" || hashLen < 2) throw new Error("hashLen must be a number");
        if (typeof qByteLen !== "number" || qByteLen < 2) throw new Error("qByteLen must be a number");
        this.v = new Uint8Array(hashLen).fill(1);
        this.k = new Uint8Array(hashLen).fill(0);
        this.counter = 0;
    }
    hmac(...values) {
        return utils.hmacSha256(this.k, ...values);
    }
    hmacSync(...values) {
        return _hmacSha256Sync(this.k, ...values);
    }
    checkSync() {
        if (typeof _hmacSha256Sync !== "function") throw new ShaError("hmacSha256Sync needs to be set");
    }
    incr() {
        if (this.counter >= 1000) throw new Error("Tried 1,000 k values for sign(), all were invalid");
        this.counter += 1;
    }
    async reseed(seed = new Uint8Array()) {
        this.k = await this.hmac(this.v, Uint8Array.from([
            0x00
        ]), seed);
        this.v = await this.hmac(this.v);
        if (seed.length === 0) return;
        this.k = await this.hmac(this.v, Uint8Array.from([
            0x01
        ]), seed);
        this.v = await this.hmac(this.v);
    }
    reseedSync(seed = new Uint8Array()) {
        this.checkSync();
        this.k = this.hmacSync(this.v, Uint8Array.from([
            0x00
        ]), seed);
        this.v = this.hmacSync(this.v);
        if (seed.length === 0) return;
        this.k = this.hmacSync(this.v, Uint8Array.from([
            0x01
        ]), seed);
        this.v = this.hmacSync(this.v);
    }
    async generate() {
        this.incr();
        let len = 0;
        const out = [];
        while(len < this.qByteLen){
            this.v = await this.hmac(this.v);
            const sl = this.v.slice();
            out.push(sl);
            len += this.v.length;
        }
        return concatBytes(...out);
    }
    generateSync() {
        this.checkSync();
        this.incr();
        let len = 0;
        const out = [];
        while(len < this.qByteLen){
            this.v = this.hmacSync(this.v);
            const sl = this.v.slice();
            out.push(sl);
            len += this.v.length;
        }
        return concatBytes(...out);
    }
}
function isWithinCurveOrder(num) {
    return _0n < num && num < CURVE.n;
}
function isValidFieldElement(num) {
    return _0n < num && num < CURVE.P;
}
function kmdToSig(kBytes, m, d, lowS = true) {
    const { n  } = CURVE;
    const k = truncateHash(kBytes, true);
    if (!isWithinCurveOrder(k)) return;
    const kinv = invert(k, n);
    const q = Point.BASE.multiply(k);
    const r = mod(q.x, n);
    if (r === _0n) return;
    const s = mod(kinv * mod(m + d * r, n), n);
    if (s === _0n) return;
    let sig = new Signature(r, s);
    let recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n);
    if (lowS && sig.hasHighS()) {
        sig = sig.normalizeS();
        recovery ^= 1;
    }
    return {
        sig,
        recovery
    };
}
function normalizePrivateKey(key) {
    let num;
    if (typeof key === "bigint") num = key;
    else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) num = BigInt(key);
    else if (typeof key === "string") {
        if (key.length !== 2 * groupLen) throw new Error("Expected 32 bytes of private key");
        num = hexToNumber(key);
    } else if (key instanceof Uint8Array) {
        if (key.length !== groupLen) throw new Error("Expected 32 bytes of private key");
        num = bytesToNumber(key);
    } else throw new TypeError("Expected valid private key");
    if (!isWithinCurveOrder(num)) throw new Error("Expected private key: 0 < key < n");
    return num;
}
function normalizePublicKey(publicKey) {
    if (publicKey instanceof Point) {
        publicKey.assertValidity();
        return publicKey;
    } else return Point.fromHex(publicKey);
}
function normalizeSignature(signature) {
    if (signature instanceof Signature) {
        signature.assertValidity();
        return signature;
    }
    try {
        return Signature.fromDER(signature);
    } catch (error) {
        return Signature.fromCompact(signature);
    }
}
function getPublicKey(privateKey, isCompressed = false) {
    return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
}
function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
    return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
}
function isProbPub(item) {
    const arr = item instanceof Uint8Array;
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr) return len === compressedLen || len === uncompressedLen;
    if (str) return len === compressedLen * 2 || len === uncompressedLen * 2;
    if (item instanceof Point) return true;
    return false;
}
function getSharedSecret(privateA, publicB, isCompressed = false) {
    if (isProbPub(privateA)) throw new TypeError("getSharedSecret: first arg must be private key");
    if (!isProbPub(publicB)) throw new TypeError("getSharedSecret: second arg must be public key");
    const b = normalizePublicKey(publicB);
    b.assertValidity();
    return b.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
}
function bits2int(bytes) {
    const slice = bytes.length > fieldLen ? bytes.slice(0, fieldLen) : bytes;
    return bytesToNumber(slice);
}
function bits2octets(bytes) {
    const z1 = bits2int(bytes);
    const z2 = mod(z1, CURVE.n);
    return int2octets(z2 < _0n ? z1 : z2);
}
function int2octets(num) {
    return numTo32b(num);
}
function initSigArgs(msgHash, privateKey, extraEntropy) {
    if (msgHash == null) throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
    const h1 = ensureBytes(msgHash);
    const d = normalizePrivateKey(privateKey);
    const seedArgs = [
        int2octets(d),
        bits2octets(h1)
    ];
    if (extraEntropy != null) {
        if (extraEntropy === true) extraEntropy = utils.randomBytes(fieldLen);
        const e = ensureBytes(extraEntropy);
        if (e.length !== fieldLen) throw new Error(`sign: Expected ${fieldLen} bytes of extra data`);
        seedArgs.push(e);
    }
    const seed = concatBytes(...seedArgs);
    const m = bits2int(h1);
    return {
        seed,
        m,
        d
    };
}
function finalizeSig(recSig, opts) {
    const { sig , recovery  } = recSig;
    const { der , recovered  } = Object.assign({
        canonical: true,
        der: true
    }, opts);
    const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
    return recovered ? [
        hashed,
        recovery
    ] : hashed;
}
async function sign(msgHash, privKey, opts = {}) {
    const { seed , m , d  } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    const drbg = new HmacDrbg(hashLen, groupLen);
    await drbg.reseed(seed);
    let sig;
    while(!(sig = kmdToSig(await drbg.generate(), m, d, opts.canonical)))await drbg.reseed();
    return finalizeSig(sig, opts);
}
function signSync(msgHash, privKey, opts = {}) {
    const { seed , m , d  } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    const drbg = new HmacDrbg(hashLen, groupLen);
    drbg.reseedSync(seed);
    let sig;
    while(!(sig = kmdToSig(drbg.generateSync(), m, d, opts.canonical)))drbg.reseedSync();
    return finalizeSig(sig, opts);
}
const vopts = {
    strict: true
};
function verify(signature, msgHash, publicKey, opts = vopts) {
    let sig;
    try {
        sig = normalizeSignature(signature);
        msgHash = ensureBytes(msgHash);
    } catch (error) {
        return false;
    }
    const { r , s  } = sig;
    if (opts.strict && sig.hasHighS()) return false;
    const h = truncateHash(msgHash);
    let P;
    try {
        P = normalizePublicKey(publicKey);
    } catch (error) {
        return false;
    }
    const { n  } = CURVE;
    const sinv = invert(s, n);
    const u1 = mod(h * sinv, n);
    const u2 = mod(r * sinv, n);
    const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2);
    if (!R) return false;
    const v = mod(R.x, n);
    return v === r;
}
function schnorrChallengeFinalize(ch) {
    return mod(bytesToNumber(ch), CURVE.n);
}
class SchnorrSignature {
    constructor(r, s){
        this.r = r;
        this.s = s;
        this.assertValidity();
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex);
        if (bytes.length !== 64) throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${bytes.length}`);
        const r = bytesToNumber(bytes.subarray(0, 32));
        const s = bytesToNumber(bytes.subarray(32, 64));
        return new SchnorrSignature(r, s);
    }
    assertValidity() {
        const { r , s  } = this;
        if (!isValidFieldElement(r) || !isWithinCurveOrder(s)) throw new Error("Invalid signature");
    }
    toHex() {
        return numTo32bStr(this.r) + numTo32bStr(this.s);
    }
    toRawBytes() {
        return hexToBytes(this.toHex());
    }
}
function schnorrGetPublicKey(privateKey) {
    return Point.fromPrivateKey(privateKey).toRawX();
}
class InternalSchnorrSignature {
    constructor(message, privateKey, auxRand = utils.randomBytes()){
        if (message == null) throw new TypeError(`sign: Expected valid message, not "${message}"`);
        this.m = ensureBytes(message);
        const { x , scalar  } = this.getScalar(normalizePrivateKey(privateKey));
        this.px = x;
        this.d = scalar;
        this.rand = ensureBytes(auxRand);
        if (this.rand.length !== 32) throw new TypeError("sign: Expected 32 bytes of aux randomness");
    }
    getScalar(priv) {
        const point = Point.fromPrivateKey(priv);
        const scalar = point.hasEvenY() ? priv : CURVE.n - priv;
        return {
            point,
            scalar,
            x: point.toRawX()
        };
    }
    initNonce(d, t0h) {
        return numTo32b(d ^ bytesToNumber(t0h));
    }
    finalizeNonce(k0h) {
        const k0 = mod(bytesToNumber(k0h), CURVE.n);
        if (k0 === _0n) throw new Error("sign: Creation of signature failed. k is zero");
        const { point: R , x: rx , scalar: k  } = this.getScalar(k0);
        return {
            R,
            rx,
            k
        };
    }
    finalizeSig(R, k, e, d) {
        return new SchnorrSignature(R.x, mod(k + e * d, CURVE.n)).toRawBytes();
    }
    error() {
        throw new Error("sign: Invalid signature produced");
    }
    async calc() {
        const { m , d , px , rand  } = this;
        const tag = utils.taggedHash;
        const t = this.initNonce(d, await tag(TAGS.aux, rand));
        const { R , rx , k  } = this.finalizeNonce(await tag(TAGS.nonce, t, px, m));
        const e = schnorrChallengeFinalize(await tag(TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!await schnorrVerify(sig, m, px)) this.error();
        return sig;
    }
    calcSync() {
        const { m , d , px , rand  } = this;
        const tag = utils.taggedHashSync;
        const t = this.initNonce(d, tag(TAGS.aux, rand));
        const { R , rx , k  } = this.finalizeNonce(tag(TAGS.nonce, t, px, m));
        const e = schnorrChallengeFinalize(tag(TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!schnorrVerifySync(sig, m, px)) this.error();
        return sig;
    }
}
async function schnorrSign(msg, privKey, auxRand) {
    return new InternalSchnorrSignature(msg, privKey, auxRand).calc();
}
function schnorrSignSync(msg, privKey, auxRand) {
    return new InternalSchnorrSignature(msg, privKey, auxRand).calcSync();
}
function initSchnorrVerify(signature, message, publicKey) {
    const raw = signature instanceof SchnorrSignature;
    const sig = raw ? signature : SchnorrSignature.fromHex(signature);
    if (raw) sig.assertValidity();
    return {
        ...sig,
        m: ensureBytes(message),
        P: normalizePublicKey(publicKey)
    };
}
function finalizeSchnorrVerify(r, P, s, e) {
    const R = Point.BASE.multiplyAndAddUnsafe(P, normalizePrivateKey(s), mod(-e, CURVE.n));
    if (!R || !R.hasEvenY() || R.x !== r) return false;
    return true;
}
async function schnorrVerify(signature, message, publicKey) {
    try {
        const { r , s , m , P  } = initSchnorrVerify(signature, message, publicKey);
        const e = schnorrChallengeFinalize(await utils.taggedHash(TAGS.challenge, numTo32b(r), P.toRawX(), m));
        return finalizeSchnorrVerify(r, P, s, e);
    } catch (error) {
        return false;
    }
}
function schnorrVerifySync(signature, message, publicKey) {
    try {
        const { r , s , m , P  } = initSchnorrVerify(signature, message, publicKey);
        const e = schnorrChallengeFinalize(utils.taggedHashSync(TAGS.challenge, numTo32b(r), P.toRawX(), m));
        return finalizeSchnorrVerify(r, P, s, e);
    } catch (error) {
        if (error instanceof ShaError) throw error;
        return false;
    }
}
const schnorr = {
    Signature: SchnorrSignature,
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    signSync: schnorrSignSync,
    verifySync: schnorrVerifySync
};
Point.BASE._setWindowSize(8);
const crypto = {
    node: _crypto,
    web: typeof self === "object" && "crypto" in self ? self.crypto : undefined
};
const TAGS = {
    challenge: "BIP0340/challenge",
    aux: "BIP0340/aux",
    nonce: "BIP0340/nonce"
};
const TAGGED_HASH_PREFIXES = {};
const utils = {
    bytesToHex,
    hexToBytes,
    concatBytes,
    mod,
    invert,
    isValidPrivateKey (privateKey) {
        try {
            normalizePrivateKey(privateKey);
            return true;
        } catch (error) {
            return false;
        }
    },
    _bigintTo32Bytes: numTo32b,
    _normalizePrivateKey: normalizePrivateKey,
    hashToPrivateKey: (hash)=>{
        hash = ensureBytes(hash);
        const minLen = groupLen + 8;
        if (hash.length < minLen || hash.length > 1024) throw new Error(`Expected valid bytes of private key as per FIPS 186`);
        const num = mod(bytesToNumber(hash), CURVE.n - _1n) + _1n;
        return numTo32b(num);
    },
    randomBytes: (bytesLength = 32)=>{
        if (crypto.web) return crypto.web.getRandomValues(new Uint8Array(bytesLength));
        else if (crypto.node) {
            const { randomBytes  } = crypto.node;
            return Uint8Array.from(randomBytes(bytesLength));
        } else throw new Error("The environment doesn't have randomBytes function");
    },
    randomPrivateKey: ()=>utils.hashToPrivateKey(utils.randomBytes(groupLen + 8)),
    precompute (windowSize = 8, point = Point.BASE) {
        const cached = point === Point.BASE ? point : new Point(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_3n);
        return cached;
    },
    sha256: async (...messages)=>{
        if (crypto.web) {
            const buffer = await crypto.web.subtle.digest("SHA-256", concatBytes(...messages));
            return new Uint8Array(buffer);
        } else if (crypto.node) {
            const { createHash  } = crypto.node;
            const hash = createHash("sha256");
            messages.forEach((m)=>hash.update(m));
            return Uint8Array.from(hash.digest());
        } else throw new Error("The environment doesn't have sha256 function");
    },
    hmacSha256: async (key, ...messages)=>{
        if (crypto.web) {
            const ckey = await crypto.web.subtle.importKey("raw", key, {
                name: "HMAC",
                hash: {
                    name: "SHA-256"
                }
            }, false, [
                "sign"
            ]);
            const message = concatBytes(...messages);
            const buffer = await crypto.web.subtle.sign("HMAC", ckey, message);
            return new Uint8Array(buffer);
        } else if (crypto.node) {
            const { createHmac  } = crypto.node;
            const hash = createHmac("sha256", key);
            messages.forEach((m)=>hash.update(m));
            return Uint8Array.from(hash.digest());
        } else throw new Error("The environment doesn't have hmac-sha256 function");
    },
    sha256Sync: undefined,
    hmacSha256Sync: undefined,
    taggedHash: async (tag, ...messages)=>{
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = await utils.sha256(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
            tagP = concatBytes(tagH, tagH);
            TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return utils.sha256(tagP, ...messages);
    },
    taggedHashSync: (tag, ...messages)=>{
        if (typeof _sha256Sync !== "function") throw new ShaError("sha256Sync is undefined, you need to set it");
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = _sha256Sync(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
            tagP = concatBytes(tagH, tagH);
            TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return _sha256Sync(tagP, ...messages);
    },
    _JacobianPoint: JacobianPoint
};
Object.defineProperties(utils, {
    sha256Sync: {
        configurable: false,
        get () {
            return _sha256Sync;
        },
        set (val) {
            if (!_sha256Sync) _sha256Sync = val;
        }
    },
    hmacSha256Sync: {
        configurable: false,
        get () {
            return _hmacSha256Sync;
        },
        set (val) {
            if (!_hmacSha256Sync) _hmacSha256Sync = val;
        }
    }
});

},{"crypto":"bXKEI","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bXKEI":[function(require,module,exports) {
"use strict";

},{}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"kJ7gI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeCryptoAesCipher", ()=>NodeCryptoAesCipher);
parcelHelpers.export(exports, "WebCryptoAesCipher", ()=>WebCryptoAesCipher);
parcelHelpers.export(exports, "createCipher", ()=>createCipher);
var _common = require("@stacks/common");
var _cryptoUtils = require("./cryptoUtils");
class NodeCryptoAesCipher {
    constructor(createCipher, createDecipher){
        this.createCipher = createCipher;
        this.createDecipher = createDecipher;
    }
    async encrypt(algorithm, key, iv, data) {
        if (algorithm !== "aes-128-cbc" && algorithm !== "aes-256-cbc") throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
        const cipher = this.createCipher(algorithm, key, iv);
        const result = new Uint8Array((0, _common.concatBytes)(cipher.update(data), cipher.final()));
        return Promise.resolve(result);
    }
    async decrypt(algorithm, key, iv, data) {
        if (algorithm !== "aes-128-cbc" && algorithm !== "aes-256-cbc") throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
        const cipher = this.createDecipher(algorithm, key, iv);
        const result = new Uint8Array((0, _common.concatBytes)(cipher.update(data), cipher.final()));
        return Promise.resolve(result);
    }
}
class WebCryptoAesCipher {
    constructor(subtleCrypto){
        this.subtleCrypto = subtleCrypto;
    }
    async encrypt(algorithm, key, iv, data) {
        let algo;
        let length;
        if (algorithm === "aes-128-cbc") {
            algo = "AES-CBC";
            length = 128;
        } else if (algorithm === "aes-256-cbc") {
            algo = "AES-CBC";
            length = 256;
        } else throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
        const cryptoKey = await this.subtleCrypto.importKey("raw", key, {
            name: algo,
            length
        }, false, [
            "encrypt"
        ]);
        const result = await this.subtleCrypto.encrypt({
            name: algo,
            iv
        }, cryptoKey, data);
        return new Uint8Array(result);
    }
    async decrypt(algorithm, key, iv, data) {
        let algo;
        let length;
        if (algorithm === "aes-128-cbc") {
            algo = "AES-CBC";
            length = 128;
        } else if (algorithm === "aes-256-cbc") {
            algo = "AES-CBC";
            length = 256;
        } else throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
        const cryptoKey = await this.subtleCrypto.importKey("raw", key, {
            name: algo,
            length
        }, false, [
            "decrypt"
        ]);
        const result = await this.subtleCrypto.decrypt({
            name: algo,
            iv
        }, cryptoKey, data);
        return new Uint8Array(result);
    }
}
async function createCipher() {
    const cryptoLib = await (0, _cryptoUtils.getCryptoLib)();
    if (cryptoLib.name === "subtleCrypto") return new WebCryptoAesCipher(cryptoLib.lib);
    return new NodeCryptoAesCipher(cryptoLib.lib.createCipheriv, cryptoLib.lib.createDecipheriv);
}

},{"@stacks/common":"5ZsuO","./cryptoUtils":"kxwe7","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kxwe7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSubtleCryptoAvailable", ()=>isSubtleCryptoAvailable);
parcelHelpers.export(exports, "isNodeCryptoAvailable", ()=>isNodeCryptoAvailable);
parcelHelpers.export(exports, "NO_CRYPTO_LIB", ()=>NO_CRYPTO_LIB);
parcelHelpers.export(exports, "getCryptoLib", ()=>getCryptoLib);
function isSubtleCryptoAvailable() {
    return typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined";
}
function isNodeCryptoAvailable(withFeature) {
    try {
        const resolvedResult = undefined("crypto");
        if (!resolvedResult) return false;
        const cryptoModule = require("bab3a2f1f08bee00");
        if (!cryptoModule) return false;
        if (withFeature) {
            const features = withFeature(cryptoModule);
            return features;
        }
        return true;
    } catch (error) {
        return false;
    }
}
const NO_CRYPTO_LIB = 'Crypto lib not found. Either the WebCrypto "crypto.subtle" or Node.js "crypto" module must be available.';
async function getCryptoLib() {
    if (isSubtleCryptoAvailable()) return {
        lib: crypto.subtle,
        name: "subtleCrypto"
    };
    else try {
        const nodeCrypto = require("bab3a2f1f08bee00");
        return {
            lib: nodeCrypto,
            name: "nodeCrypto"
        };
    } catch (error) {
        throw new Error(NO_CRYPTO_LIB);
    }
}

},{"bab3a2f1f08bee00":"bXKEI","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bgde2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeECPrivateKey", ()=>makeECPrivateKey);
parcelHelpers.export(exports, "base58CheckDecode", ()=>base58CheckDecode);
parcelHelpers.export(exports, "base58Encode", ()=>base58Encode);
parcelHelpers.export(exports, "base58CheckEncode", ()=>base58CheckEncode);
parcelHelpers.export(exports, "publicKeyToBtcAddress", ()=>publicKeyToBtcAddress);
parcelHelpers.export(exports, "getPublicKeyFromPrivate", ()=>getPublicKeyFromPrivate);
parcelHelpers.export(exports, "ecSign", ()=>ecSign);
parcelHelpers.export(exports, "isValidPrivateKey", ()=>isValidPrivateKey);
parcelHelpers.export(exports, "compressPrivateKey", ()=>compressPrivateKey);
var _hmac = require("@noble/hashes/hmac");
var _sha256 = require("@noble/hashes/sha256");
var _secp256K1 = require("@noble/secp256k1");
var _common = require("@stacks/common");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var _hashRipemd160 = require("./hashRipemd160");
var _sha2Hash = require("./sha2Hash");
const BITCOIN_PUBKEYHASH = 0x00;
(0, _secp256K1.utils).hmacSha256Sync = (key, ...msgs)=>{
    const h = (0, _hmac.hmac).create((0, _sha256.sha256), key);
    msgs.forEach((msg)=>h.update(msg));
    return h.digest();
};
function makeECPrivateKey() {
    return (0, _common.bytesToHex)((0, _secp256K1.utils).randomPrivateKey());
}
function base58CheckDecode(btcAddress) {
    const bytes = (0, _bs58Default.default).decode(btcAddress);
    const payload = bytes.slice(0, -4);
    const checksum = bytes.slice(-4);
    const newChecksum = (0, _sha256.sha256)((0, _sha256.sha256)(payload));
    if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3]) throw new Error("Invalid checksum");
    if (payload.length !== 21) throw new TypeError("Invalid address length");
    const version = (0, _common.readUInt8)(payload, 0);
    const hash = payload.slice(1);
    return {
        version,
        hash
    };
}
function base58Encode(hash) {
    const checksum = (0, _sha256.sha256)((0, _sha256.sha256)(hash));
    return (0, _bs58Default.default).encode((0, _common.concatBytes)(hash, checksum).slice(0, hash.length + 4));
}
function base58CheckEncode(version, hash) {
    return base58Encode((0, _common.concatBytes)(new Uint8Array([
        version
    ]), hash.slice(0, 20)));
}
function publicKeyToBtcAddress(publicKey, version = BITCOIN_PUBKEYHASH) {
    const publicKeyBytes = typeof publicKey === "string" ? (0, _common.hexToBytes)(publicKey) : publicKey;
    const publicKeyHash160 = (0, _hashRipemd160.hashRipemd160)((0, _sha2Hash.hashSha256Sync)(publicKeyBytes));
    return base58CheckEncode(version, publicKeyHash160);
}
function getPublicKeyFromPrivate(privateKey) {
    const privateKeyBytes = (0, _common.privateKeyToBytes)(privateKey);
    return (0, _common.bytesToHex)((0, _secp256K1.getPublicKey)(privateKeyBytes.slice(0, 32), true));
}
function ecSign(messageHash, hexPrivateKey) {
    return (0, _secp256K1.signSync)(messageHash, (0, _common.privateKeyToBytes)(hexPrivateKey).slice(0, 32), {
        der: false
    });
}
function isValidPrivateKey(privateKey) {
    return (0, _secp256K1.utils).isValidPrivateKey((0, _common.privateKeyToBytes)(privateKey));
}
function compressPrivateKey(privateKey) {
    const privateKeyBytes = (0, _common.privateKeyToBytes)(privateKey);
    return privateKeyBytes.length == (0, _common.PRIVATE_KEY_COMPRESSED_LENGTH) ? privateKeyBytes : (0, _common.concatBytes)(privateKeyBytes, new Uint8Array([
        1
    ]));
}

},{"@noble/hashes/hmac":"3IfCc","@noble/hashes/sha256":"JjjO8","@noble/secp256k1":"eyYsH","@stacks/common":"5ZsuO","bs58":"4ji3p","./hashRipemd160":"u0AHR","./sha2Hash":"l9G8G","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4ji3p":[function(require,module,exports) {
const basex = require("134864ce41fe14d5");
const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
module.exports = basex(ALPHABET);

},{"134864ce41fe14d5":"inVbl"}],"inVbl":[function(require,module,exports) {
"use strict";
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base(ALPHABET) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (source.length === 0) return "";
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error("Non-base" + BASE + " character");
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;

},{}],"u0AHR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hashRipemd160", ()=>hashRipemd160);
var _ripemd160 = require("@noble/hashes/ripemd160");
function hashRipemd160(data) {
    return (0, _ripemd160.ripemd160)(data);
}

},{"@noble/hashes/ripemd160":"hb7Go","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hb7Go":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ripemd160 = exports.RIPEMD160 = void 0;
const _sha2_js_1 = require("b2255d6a4463852e");
const utils_js_1 = require("994a2af708e05534");
// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
const Rho = new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id = Uint8Array.from({
    length: 16
}, (_, i)=>i);
const Pi = Id.map((i)=>(9 * i + 5) % 16);
let idxL = [
    Id
];
let idxR = [
    Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    idxL,
    idxR
])j.push(j[i].map((k)=>Rho[k]));
const shifts = [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const shiftsL = idxL.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const shiftsR = idxR.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const Kl = new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr = new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift)=>word << shift | word >>> 32 - shift;
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const BUF = new Uint32Array(16);
class RIPEMD160 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 1732584193;
        this.h1 = -271733879;
        this.h2 = -1732584194;
        this.h3 = 271733878;
        this.h4 = -1009589776;
    }
    get() {
        const { h0 , h1 , h2 , h3 , h4  } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
exports.RIPEMD160 = RIPEMD160;
/**
 * RIPEMD-160 - a hash function from 1990s.
 * @param message - msg that would be hashed
 */ exports.ripemd160 = (0, utils_js_1.wrapConstructor)(()=>new RIPEMD160());

},{"b2255d6a4463852e":"6HKeB","994a2af708e05534":"2ehgp"}],"l9G8G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NodeCryptoSha2Hash", ()=>NodeCryptoSha2Hash);
parcelHelpers.export(exports, "WebCryptoSha2Hash", ()=>WebCryptoSha2Hash);
parcelHelpers.export(exports, "createSha2Hash", ()=>createSha2Hash);
parcelHelpers.export(exports, "hashSha256Sync", ()=>hashSha256Sync);
parcelHelpers.export(exports, "hashSha512Sync", ()=>hashSha512Sync);
var _sha256 = require("@noble/hashes/sha256");
var _sha512 = require("@noble/hashes/sha512");
var _cryptoUtils = require("./cryptoUtils");
class NodeCryptoSha2Hash {
    constructor(createHash){
        this.createHash = createHash;
    }
    async digest(data, algorithm = "sha256") {
        try {
            const result = this.createHash(algorithm).update(data).digest();
            return Promise.resolve(result);
        } catch (error) {
            console.log(error);
            console.log(`Error performing ${algorithm} digest with Node.js 'crypto.createHash', falling back to JS implementation.`);
            return Promise.resolve(algorithm === "sha256" ? hashSha256Sync(data) : hashSha512Sync(data));
        }
    }
}
class WebCryptoSha2Hash {
    constructor(subtleCrypto){
        this.subtleCrypto = subtleCrypto;
    }
    async digest(data, algorithm = "sha256") {
        let algo;
        if (algorithm === "sha256") algo = "SHA-256";
        else if (algorithm === "sha512") algo = "SHA-512";
        else throw new Error(`Unsupported hash algorithm ${algorithm}`);
        try {
            const hash = await this.subtleCrypto.digest(algo, data);
            return new Uint8Array(hash);
        } catch (error) {
            console.log(error);
            console.log(`Error performing ${algorithm} digest with WebCrypto, falling back to JS implementation.`);
            return Promise.resolve(algorithm === "sha256" ? hashSha256Sync(data) : hashSha512Sync(data));
        }
    }
}
async function createSha2Hash() {
    const cryptoLib = await (0, _cryptoUtils.getCryptoLib)();
    if (cryptoLib.name === "subtleCrypto") return new WebCryptoSha2Hash(cryptoLib.lib);
    else return new NodeCryptoSha2Hash(cryptoLib.lib.createHash);
}
function hashSha256Sync(data) {
    return (0, _sha256.sha256)(data);
}
function hashSha512Sync(data) {
    return (0, _sha512.sha512)(data);
}

},{"@noble/hashes/sha256":"JjjO8","@noble/hashes/sha512":"jlH7E","./cryptoUtils":"kxwe7","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jlH7E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha384 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.SHA512 = void 0;
const _sha2_js_1 = require("49fedc0e7092f604");
const _u64_js_1 = require("a4dc3a3c52645136");
const utils_js_1 = require("1d877748749adc5c");
// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = _u64_js_1.default.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
].map((n)=>BigInt(n)));
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
class SHA512 extends _sha2_js_1.SHA2 {
    constructor(){
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 1779033703;
        this.Al = -205731576;
        this.Bh = -1150833019;
        this.Bl = -2067093701;
        this.Ch = 1013904242;
        this.Cl = -23791573;
        this.Dh = -1521486534;
        this.Dl = 1595750129;
        this.Eh = 1359893119;
        this.El = -1377402159;
        this.Fh = -1694144372;
        this.Fl = 725511199;
        this.Gh = 528734635;
        this.Gl = -79577749;
        this.Hh = 1541459225;
        this.Hl = 327033209;
    }
    // prettier-ignore
    get() {
        const { Ah , Al , Bh , Bl , Ch , Cl , Dh , Dl , Eh , El , Fh , Fl , Gh , Gl , Hh , Hl  } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    // prettier-ignore
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = _u64_js_1.default.rotrSH(W15h, W15l, 1) ^ _u64_js_1.default.rotrSH(W15h, W15l, 8) ^ _u64_js_1.default.shrSH(W15h, W15l, 7);
            const s0l = _u64_js_1.default.rotrSL(W15h, W15l, 1) ^ _u64_js_1.default.rotrSL(W15h, W15l, 8) ^ _u64_js_1.default.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = _u64_js_1.default.rotrSH(W2h, W2l, 19) ^ _u64_js_1.default.rotrBH(W2h, W2l, 61) ^ _u64_js_1.default.shrSH(W2h, W2l, 6);
            const s1l = _u64_js_1.default.rotrSL(W2h, W2l, 19) ^ _u64_js_1.default.rotrBL(W2h, W2l, 61) ^ _u64_js_1.default.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = _u64_js_1.default.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = _u64_js_1.default.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah , Al , Bh , Bl , Ch , Cl , Dh , Dl , Eh , El , Fh , Fl , Gh , Gl , Hh , Hl  } = this;
        // Compression function main loop, 80 rounds
        for(let i = 0; i < 80; i++){
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = _u64_js_1.default.rotrSH(Eh, El, 14) ^ _u64_js_1.default.rotrSH(Eh, El, 18) ^ _u64_js_1.default.rotrBH(Eh, El, 41);
            const sigma1l = _u64_js_1.default.rotrSL(Eh, El, 14) ^ _u64_js_1.default.rotrSL(Eh, El, 18) ^ _u64_js_1.default.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = _u64_js_1.default.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = _u64_js_1.default.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = _u64_js_1.default.rotrSH(Ah, Al, 28) ^ _u64_js_1.default.rotrBH(Ah, Al, 34) ^ _u64_js_1.default.rotrBH(Ah, Al, 39);
            const sigma0l = _u64_js_1.default.rotrSL(Ah, Al, 28) ^ _u64_js_1.default.rotrBL(Ah, Al, 34) ^ _u64_js_1.default.rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh , l: El  } = _u64_js_1.default.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const All = _u64_js_1.default.add3L(T1l, sigma0l, MAJl);
            Ah = _u64_js_1.default.add3H(All, T1h, sigma0h, MAJh);
            Al = All | 0;
        }
        // Add the compressed chunk to the current hash value
        ({ h: Ah , l: Al  } = _u64_js_1.default.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
        ({ h: Bh , l: Bl  } = _u64_js_1.default.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
        ({ h: Ch , l: Cl  } = _u64_js_1.default.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
        ({ h: Dh , l: Dl  } = _u64_js_1.default.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
        ({ h: Eh , l: El  } = _u64_js_1.default.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
        ({ h: Fh , l: Fl  } = _u64_js_1.default.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
        ({ h: Gh , l: Gl  } = _u64_js_1.default.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
        ({ h: Hh , l: Hl  } = _u64_js_1.default.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        SHA512_W_H.fill(0);
        SHA512_W_L.fill(0);
    }
    destroy() {
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
exports.SHA512 = SHA512;
class SHA512_224 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -1942145080;
        this.Al = 424955298;
        this.Bh = 1944164710;
        this.Bl = -1982016298;
        this.Ch = 502970286;
        this.Cl = 855612546;
        this.Dh = 1738396948;
        this.Dl = 1479516111;
        this.Eh = 258812777;
        this.El = 2077511080;
        this.Fh = 2011393907;
        this.Fl = 79989058;
        this.Gh = 1067287976;
        this.Gl = 1780299464;
        this.Hh = 286451373;
        this.Hl = -1848208735;
        this.outputLen = 28;
    }
}
class SHA512_256 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 573645204;
        this.Al = -64227540;
        this.Bh = -1621794909;
        this.Bl = -934517566;
        this.Ch = 596883563;
        this.Cl = 1867755857;
        this.Dh = -1774684391;
        this.Dl = 1497426621;
        this.Eh = -1775747358;
        this.El = -1467023389;
        this.Fh = -1101128155;
        this.Fl = 1401305490;
        this.Gh = 721525244;
        this.Gl = 746961066;
        this.Hh = 246885852;
        this.Hl = -2117784414;
        this.outputLen = 32;
    }
}
class SHA384 extends SHA512 {
    constructor(){
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = -876896931;
        this.Al = -1056596264;
        this.Bh = 1654270250;
        this.Bl = 914150663;
        this.Ch = -1856437926;
        this.Cl = 812702999;
        this.Dh = 355462360;
        this.Dl = -150054599;
        this.Eh = 1731405415;
        this.El = -4191439;
        this.Fh = -1900787065;
        this.Fl = 1750603025;
        this.Gh = -619958771;
        this.Gl = 1694076839;
        this.Hh = 1203062813;
        this.Hl = -1090891868;
        this.outputLen = 48;
    }
}
exports.sha512 = (0, utils_js_1.wrapConstructor)(()=>new SHA512());
exports.sha512_224 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_224());
exports.sha512_256 = (0, utils_js_1.wrapConstructor)(()=>new SHA512_256());
exports.sha384 = (0, utils_js_1.wrapConstructor)(()=>new SHA384());

},{"49fedc0e7092f604":"6HKeB","a4dc3a3c52645136":"8TbxJ","1d877748749adc5c":"2ehgp"}],"8TbxJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = exports.toBig = exports.split = exports.fromBig = void 0;
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
exports.fromBig = fromBig;
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for(let i = 0; i < lst.length; i++){
        const { h , l  } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [
            h,
            l
        ];
    }
    return [
        Ah,
        Al
    ];
}
exports.split = split;
const toBig = (h, l)=>BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
exports.toBig = toBig;
// for Shift in [0, 32)
const shrSH = (h, l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (h, l)=>l;
const rotr32L = (h, l)=>h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s)=>h << s | l >>> 32 - s;
const rotlSL = (h, l, s)=>l << s | h >>> 32 - s;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s)=>l << s - 32 | h >>> 64 - s;
const rotlBL = (h, l, s)=>h << s - 32 | l >>> 64 - s;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
exports.add = add;
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
// prettier-ignore
const u64 = {
    fromBig,
    split,
    toBig: exports.toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
};
exports.default = u64;

},{}],"2oTAA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hashMessage", ()=>hashMessage);
parcelHelpers.export(exports, "encodeMessage", ()=>encodeMessage);
parcelHelpers.export(exports, "decodeMessage", ()=>decodeMessage);
var _sha256 = require("@noble/hashes/sha256");
var _common = require("@stacks/common");
var _varuint = require("./varuint");
const chainPrefix = "\x17Stacks Signed Message:\n";
function hashMessage(message, prefix = chainPrefix) {
    return (0, _sha256.sha256)(encodeMessage(message, prefix));
}
function encodeMessage(message, prefix = chainPrefix) {
    const messageBytes = typeof message == "string" ? (0, _common.utf8ToBytes)(message) : message;
    const encodedLength = (0, _varuint.encode)(messageBytes.length);
    return (0, _common.concatBytes)((0, _common.utf8ToBytes)(prefix), encodedLength, messageBytes);
}
function decodeMessage(encodedMessage, prefix = chainPrefix) {
    const prefixByteLength = (0, _common.utf8ToBytes)(prefix).byteLength;
    const messageWithoutChainPrefix = encodedMessage.subarray(prefixByteLength);
    const decoded = (0, _varuint.decode)(messageWithoutChainPrefix);
    const varIntLength = (0, _varuint.encodingLength)(decoded);
    return messageWithoutChainPrefix.slice(varIntLength);
}

},{"@noble/hashes/sha256":"JjjO8","@stacks/common":"5ZsuO","./varuint":"azTaE","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"azTaE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encode", ()=>encode);
parcelHelpers.export(exports, "decode", ()=>decode);
parcelHelpers.export(exports, "encodingLength", ()=>encodingLength);
var _common = require("@stacks/common");
const MAX_SAFE_INTEGER = 9007199254740991;
function ensureUInt53(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0) throw new RangeError("value out of range");
}
function encode(number, bytes, offset = 0) {
    ensureUInt53(number);
    if (!bytes) bytes = new Uint8Array(encodingLength(number));
    if (number < 0xfd) (0, _common.writeUInt8)(bytes, number, offset);
    else if (number <= 65535) {
        (0, _common.writeUInt8)(bytes, 0xfd, offset);
        (0, _common.writeUInt16LE)(bytes, number, offset + 1);
    } else if (number <= 4294967295) {
        (0, _common.writeUInt8)(bytes, 0xfe, offset);
        (0, _common.writeUInt32LE)(bytes, number, offset + 1);
    } else {
        (0, _common.writeUInt8)(bytes, 0xff, offset);
        (0, _common.writeUInt32LE)(bytes, number >>> 0, offset + 1);
        (0, _common.writeUInt32LE)(bytes, number / 4294967296 | 0, offset + 5);
    }
    return bytes;
}
function decode(bytes, offset = 0) {
    const first = (0, _common.readUInt8)(bytes, offset);
    if (first < 0xfd) return first;
    else if (first === 0xfd) return (0, _common.readUInt16LE)(bytes, offset + 1);
    else if (first === 0xfe) return (0, _common.readUInt32LE)(bytes, offset + 1);
    else {
        const lo = (0, _common.readUInt32LE)(bytes, offset + 1);
        const hi = (0, _common.readUInt32LE)(bytes, offset + 5);
        const number = hi * 4294967296 + lo;
        ensureUInt53(number);
        return number;
    }
}
function encodingLength(number) {
    ensureUInt53(number);
    return number < 0xfd ? 1 : number <= 65535 ? 3 : number <= 4294967295 ? 5 : 9;
}

},{"@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"i1AZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Signature", ()=>(0, _secp256K1.Signature));
parcelHelpers.export(exports, "verifySignature", ()=>(0, _secp256K1.verify));
parcelHelpers.export(exports, "getAesCbcOutputLength", ()=>getAesCbcOutputLength);
parcelHelpers.export(exports, "getBase64OutputLength", ()=>getBase64OutputLength);
parcelHelpers.export(exports, "hashCode", ()=>hashCode);
var _secp256K1 = require("@noble/secp256k1");
function getAesCbcOutputLength(inputByteLength) {
    const cipherTextLength = (Math.floor(inputByteLength / 16) + 1) * 16;
    return cipherTextLength;
}
function getBase64OutputLength(inputByteLength) {
    const encodedLength = Math.ceil(inputByteLength / 3) * 4;
    return encodedLength;
}
function hashCode(string) {
    let hash = 0;
    if (string.length === 0) return hash;
    for(let i = 0; i < string.length; i++){
        const character = string.charCodeAt(i);
        hash = (hash << 5) - hash + character;
        hash &= hash;
    }
    return hash & 0x7fffffff;
}

},{"@noble/secp256k1":"eyYsH","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4Qgaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomBytes", ()=>randomBytes);
var _secp256K1 = require("@noble/secp256k1");
const randomBytes = (bytesLength = 32)=>(0, _secp256K1.utils).randomBytes(bytesLength);

},{"@noble/secp256k1":"eyYsH","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7GKCh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encryptContent", ()=>encryptContent);
parcelHelpers.export(exports, "decryptContent", ()=>decryptContent);
var _common = require("@stacks/common");
var _ec = require("./ec");
var _keys = require("./keys");
async function encryptContent(content, options) {
    const opts = Object.assign({}, options);
    let privateKey;
    if (!opts.publicKey) {
        if (!opts.privateKey) throw new Error("Either public key or private key must be supplied for encryption.");
        opts.publicKey = (0, _keys.getPublicKeyFromPrivate)(opts.privateKey);
    }
    const wasString = typeof opts.wasString === "boolean" ? opts.wasString : typeof content === "string";
    const contentBytes = typeof content === "string" ? (0, _common.utf8ToBytes)(content) : content;
    const cipherObject = await (0, _ec.encryptECIES)(opts.publicKey, contentBytes, wasString, opts.cipherTextEncoding);
    let cipherPayload = JSON.stringify(cipherObject);
    if (opts.sign) {
        if (typeof opts.sign === "string") privateKey = opts.sign;
        else if (!privateKey) privateKey = opts.privateKey;
        const signatureObject = (0, _ec.signECDSA)(privateKey, cipherPayload);
        const signedCipherObject = {
            signature: signatureObject.signature,
            publicKey: signatureObject.publicKey,
            cipherText: cipherPayload
        };
        cipherPayload = JSON.stringify(signedCipherObject);
    }
    return cipherPayload;
}
function decryptContent(content, options) {
    const opts = Object.assign({}, options);
    if (!opts.privateKey) throw new Error("Private key is required for decryption.");
    try {
        const cipherObject = JSON.parse(content);
        return (0, _ec.decryptECIES)(opts.privateKey, cipherObject);
    } catch (err) {
        if (err instanceof SyntaxError) throw new Error("Failed to parse encrypted content JSON. The content may not be encrypted. If using getFile, try passing { decrypt: false }.");
        else throw err;
    }
}

},{"@stacks/common":"5ZsuO","./ec":"5hroU","./keys":"bgde2","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7yDiP":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("1ebad4ba932e5434"), exports);
__exportStar(require("9ba11b017210d739"), exports);
__exportStar(require("b3b6120e36b7258f"), exports);
__exportStar(require("d0755ed2f8ffd2da"), exports);
__exportStar(require("574a8a98a2365d62"), exports);

},{"1ebad4ba932e5434":"gVWSn","9ba11b017210d739":"1AEfx","b3b6120e36b7258f":"hzfjI","d0755ed2f8ffd2da":"af9aw","574a8a98a2365d62":"76fDz"}],"gVWSn":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenSigner = exports.createUnsecuredToken = void 0;
const base64url = require("55255b8dd9fd5263");
const cryptoClients_1 = require("a5838cd68a87f208");
const errors_1 = require("febb62bc3890577f");
const sha256_1 = require("c6a69d90749099da");
function createSigningInput(payload, header) {
    const tokenParts = [];
    // add in the header
    const encodedHeader = base64url.encode(JSON.stringify(header));
    tokenParts.push(encodedHeader);
    // add in the payload
    const encodedPayload = base64url.encode(JSON.stringify(payload));
    tokenParts.push(encodedPayload);
    // prepare the message
    const signingInput = tokenParts.join(".");
    // return the signing input
    return signingInput;
}
function createUnsecuredToken(payload) {
    const header = {
        typ: "JWT",
        alg: "none"
    };
    return createSigningInput(payload, header) + ".";
}
exports.createUnsecuredToken = createUnsecuredToken;
class TokenSigner {
    constructor(signingAlgorithm, rawPrivateKey){
        if (!(signingAlgorithm && rawPrivateKey)) throw new errors_1.MissingParametersError("a signing algorithm and private key are required");
        if (typeof signingAlgorithm !== "string") throw new Error("signing algorithm parameter must be a string");
        signingAlgorithm = signingAlgorithm.toUpperCase();
        if (!cryptoClients_1.cryptoClients.hasOwnProperty(signingAlgorithm)) throw new Error("invalid signing algorithm");
        this.tokenType = "JWT";
        this.cryptoClient = cryptoClients_1.cryptoClients[signingAlgorithm];
        this.rawPrivateKey = rawPrivateKey;
    }
    header(header = {}) {
        const defaultHeader = {
            typ: this.tokenType,
            alg: this.cryptoClient.algorithmName
        };
        return Object.assign({}, defaultHeader, header);
    }
    sign(payload, expanded = false, customHeader = {}) {
        // generate the token header
        const header = this.header(customHeader);
        // prepare the message to be signed
        const signingInput = createSigningInput(payload, header);
        const signingInputHash = (0, sha256_1.hashSha256)(signingInput);
        return this.createWithSignedHash(payload, expanded, header, signingInput, signingInputHash);
    }
    signAsync(payload, expanded = false, customHeader = {}) {
        return __awaiter(this, void 0, void 0, function*() {
            // generate the token header
            const header = this.header(customHeader);
            // prepare the message to be signed
            const signingInput = createSigningInput(payload, header);
            const signingInputHash = yield (0, sha256_1.hashSha256Async)(signingInput);
            return this.createWithSignedHash(payload, expanded, header, signingInput, signingInputHash);
        });
    }
    createWithSignedHash(payload, expanded, header, signingInput, signingInputHash) {
        // sign the message and add in the signature
        const signature = this.cryptoClient.signHash(signingInputHash, this.rawPrivateKey);
        if (expanded) {
            const signedToken = {
                header: [
                    base64url.encode(JSON.stringify(header))
                ],
                payload: JSON.stringify(payload),
                signature: [
                    signature
                ]
            };
            return signedToken;
        } else return [
            signingInput,
            signature
        ].join(".");
    }
}
exports.TokenSigner = TokenSigner;

},{"55255b8dd9fd5263":"vQfIa","a5838cd68a87f208":"76fDz","febb62bc3890577f":"af9aw","c6a69d90749099da":"2uRAk"}],"vQfIa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = exports.unescape = exports.escape = exports.pad = void 0;
const base64_js_1 = require("e72da09abe312ae4");
function pad(base64) {
    return `${base64}${"=".repeat(4 - (base64.length % 4 || 4))}`;
}
exports.pad = pad;
function escape(base64) {
    return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
exports.escape = escape;
function unescape(base64Url) {
    return pad(base64Url).replace(/-/g, "+").replace(/_/g, "/");
}
exports.unescape = unescape;
function encode(base64) {
    return escape((0, base64_js_1.fromByteArray)(new TextEncoder().encode(base64)));
}
exports.encode = encode;
function decode(base64Url) {
    return new TextDecoder().decode((0, base64_js_1.toByteArray)(pad(unescape(base64Url))));
}
exports.decode = decode;

},{"e72da09abe312ae4":"eIiSV"}],"76fDz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cryptoClients = exports.SECP256K1Client = void 0;
const secp256k1_1 = require("1442301e64d6c527");
Object.defineProperty(exports, "SECP256K1Client", {
    enumerable: true,
    get: function() {
        return secp256k1_1.SECP256K1Client;
    }
});
const cryptoClients = {
    ES256K: secp256k1_1.SECP256K1Client
};
exports.cryptoClients = cryptoClients;

},{"1442301e64d6c527":"7fpGB"}],"7fpGB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SECP256K1Client = void 0;
const hmac_1 = require("e877e14d8642b1c4");
const sha256_1 = require("421a99a1f2b2905f");
const secp = require("d6b1b4af69043ee2");
const ecdsaSigFormatter_1 = require("be302c63aa49a2cc");
const errors_1 = require("59ffe9d6dcaae9aa");
const utils_1 = require("4ef4392d343327d0");
// required to use noble secp https://github.com/paulmillr/noble-secp256k1
secp.utils.hmacSha256Sync = (key, ...msgs)=>{
    const h = hmac_1.hmac.create(sha256_1.sha256, key);
    msgs.forEach((msg)=>h.update(msg));
    return h.digest();
};
class SECP256K1Client {
    static derivePublicKey(privateKey, compressed = true) {
        if (privateKey.length === 66) privateKey = privateKey.slice(0, 64);
        if (privateKey.length < 64) // backward compatibly accept too short private keys
        privateKey = privateKey.padStart(64, "0");
        return (0, utils_1.bytesToHex)(secp.getPublicKey(privateKey, compressed));
    }
    static signHash(signingInputHash, privateKey, format = "jose") {
        // make sure the required parameters are provided
        if (!signingInputHash || !privateKey) throw new errors_1.MissingParametersError("a signing input hash and private key are all required");
        const derSignature = secp.signSync(signingInputHash, privateKey.slice(0, 64), {
            der: true,
            canonical: false
        });
        if (format === "der") return (0, utils_1.bytesToHex)(derSignature);
        if (format === "jose") return (0, ecdsaSigFormatter_1.derToJose)(derSignature, "ES256");
        throw Error("Invalid signature format");
    }
    static loadSignature(joseSignature) {
        // create and return the DER-formatted signature bytes
        return (0, ecdsaSigFormatter_1.joseToDer)(joseSignature, "ES256");
    }
    static verifyHash(signingInputHash, derSignatureBytes, publicKey) {
        // make sure the required parameters are provided
        if (!signingInputHash || !derSignatureBytes || !publicKey) throw new errors_1.MissingParametersError("a signing input hash, der signature, and public key are all required");
        return secp.verify(derSignatureBytes, signingInputHash, publicKey, {
            strict: false
        });
    }
}
exports.SECP256K1Client = SECP256K1Client;
SECP256K1Client.algorithmName = "ES256K";

},{"e877e14d8642b1c4":"3IfCc","421a99a1f2b2905f":"JjjO8","d6b1b4af69043ee2":"eyYsH","be302c63aa49a2cc":"1GsiR","59ffe9d6dcaae9aa":"af9aw","4ef4392d343327d0":"2ehgp"}],"1GsiR":[function(require,module,exports) {
"use strict";
//  NOTICE
//  Copyright 2015 D2L Corporation
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.joseToDer = exports.derToJose = void 0;
// The following code is adapted from https://github.com/Brightspace/node-ecdsa-sig-formatter
const base64_js_1 = require("2f1b9969ef5dfd5c");
const base64Url_1 = require("afa696f3b8e3f962");
function getParamSize(keySize) {
    return (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
}
const paramBytesForAlg = {
    ES256: getParamSize(256),
    ES384: getParamSize(384),
    ES512: getParamSize(521)
};
function getParamBytesForAlg(alg) {
    const paramBytes = paramBytesForAlg[alg];
    if (paramBytes) return paramBytes;
    throw new Error(`Unknown algorithm "${alg}"`);
}
const MAX_OCTET = 0x80;
const CLASS_UNIVERSAL = 0;
const PRIMITIVE_BIT = 0x20;
const TAG_SEQ = 0x10;
const TAG_INT = 0x02;
const ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
const ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
function signatureAsBytes(signature) {
    if (signature instanceof Uint8Array) return signature;
    else if ("string" === typeof signature) return (0, base64_js_1.toByteArray)((0, base64Url_1.pad)(signature));
    throw new TypeError("ECDSA signature must be a Base64 string or a Uint8Array");
}
function derToJose(signature, alg) {
    const signatureBytes = signatureAsBytes(signature);
    const paramBytes = getParamBytesForAlg(alg);
    // the DER encoded param should at most be the param size, plus a padding
    // zero, since due to being a signed integer
    const maxEncodedParamLength = paramBytes + 1;
    const inputLength = signatureBytes.length;
    let offset = 0;
    if (signatureBytes[offset++] !== ENCODED_TAG_SEQ) throw new Error('Could not find expected "seq"');
    let seqLength = signatureBytes[offset++];
    if (seqLength === (MAX_OCTET | 1)) seqLength = signatureBytes[offset++];
    if (inputLength - offset < seqLength) throw new Error(`"seq" specified length of "${seqLength}", only "${inputLength - offset}" remaining`);
    if (signatureBytes[offset++] !== ENCODED_TAG_INT) throw new Error('Could not find expected "int" for "r"');
    const rLength = signatureBytes[offset++];
    if (inputLength - offset - 2 < rLength) throw new Error(`"r" specified length of "${rLength}", only "${inputLength - offset - 2}" available`);
    if (maxEncodedParamLength < rLength) throw new Error(`"r" specified length of "${rLength}", max of "${maxEncodedParamLength}" is acceptable`);
    const rOffset = offset;
    offset += rLength;
    if (signatureBytes[offset++] !== ENCODED_TAG_INT) throw new Error('Could not find expected "int" for "s"');
    const sLength = signatureBytes[offset++];
    if (inputLength - offset !== sLength) throw new Error(`"s" specified length of "${sLength}", expected "${inputLength - offset}"`);
    if (maxEncodedParamLength < sLength) throw new Error(`"s" specified length of "${sLength}", max of "${maxEncodedParamLength}" is acceptable`);
    const sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) throw new Error(`Expected to consume entire array, but "${inputLength - offset}" bytes remain`);
    const rPadding = paramBytes - rLength;
    const sPadding = paramBytes - sLength;
    const dst = new Uint8Array(rPadding + rLength + sPadding + sLength);
    for(offset = 0; offset < rPadding; ++offset)dst[offset] = 0;
    dst.set(signatureBytes.subarray(rOffset + Math.max(-rPadding, 0), rOffset + rLength), offset);
    offset = paramBytes;
    for(const o = offset; offset < o + sPadding; ++offset)dst[offset] = 0;
    dst.set(signatureBytes.subarray(sOffset + Math.max(-sPadding, 0), sOffset + sLength), offset);
    return (0, base64Url_1.escape)((0, base64_js_1.fromByteArray)(dst));
}
exports.derToJose = derToJose;
function countPadding(buf, start, stop) {
    let padding = 0;
    while(start + padding < stop && buf[start + padding] === 0)++padding;
    const needsSign = buf[start + padding] >= MAX_OCTET;
    if (needsSign) --padding;
    return padding;
}
function joseToDer(signature, alg) {
    signature = signatureAsBytes(signature);
    const paramBytes = getParamBytesForAlg(alg);
    const signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) throw new TypeError(`"${alg}" signatures must be "${paramBytes * 2}" bytes, saw "${signatureBytes}"`);
    const rPadding = countPadding(signature, 0, paramBytes);
    const sPadding = countPadding(signature, paramBytes, signature.length);
    const rLength = paramBytes - rPadding;
    const sLength = paramBytes - sPadding;
    const rsBytes = 2 + rLength + 1 + 1 + sLength;
    const shortLength = rsBytes < MAX_OCTET;
    const dst = new Uint8Array((shortLength ? 2 : 3) + rsBytes);
    let offset = 0;
    dst[offset++] = ENCODED_TAG_SEQ;
    if (shortLength) // Bit 8 has value "0"
    // bits 7-1 give the length.
    dst[offset++] = rsBytes;
    else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = MAX_OCTET | 1;
        // length, base 256
        dst[offset++] = rsBytes & 0xff;
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
        dst[offset++] = 0;
        dst.set(signature.subarray(0, paramBytes), offset);
        offset += paramBytes;
    } else {
        dst.set(signature.subarray(rPadding, paramBytes), offset);
        offset += paramBytes - rPadding;
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
        dst[offset++] = 0;
        dst.set(signature.subarray(paramBytes), offset);
    } else dst.set(signature.subarray(paramBytes + sPadding), offset);
    return dst;
}
exports.joseToDer = joseToDer;

},{"2f1b9969ef5dfd5c":"eIiSV","afa696f3b8e3f962":"vQfIa"}],"af9aw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InvalidTokenError = exports.MissingParametersError = void 0;
class MissingParametersError extends Error {
    constructor(message){
        super();
        this.name = "MissingParametersError";
        this.message = message || "";
    }
}
exports.MissingParametersError = MissingParametersError;
class InvalidTokenError extends Error {
    constructor(message){
        super();
        this.name = "InvalidTokenError";
        this.message = message || "";
    }
}
exports.InvalidTokenError = InvalidTokenError;

},{}],"2uRAk":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hashSha256Async = exports.hashSha256 = void 0;
const sha256_1 = require("a338794cf4c0ff59");
function hashSha256(input) {
    return (0, sha256_1.sha256)(input);
}
exports.hashSha256 = hashSha256;
function hashSha256Async(input) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const isSubtleCryptoAvailable = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined";
            if (isSubtleCryptoAvailable) {
                // Use the W3C Web Crypto API if available (running in a web browser).
                const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
                const hash = yield crypto.subtle.digest("SHA-256", bytes);
                return new Uint8Array(hash);
            } else {
                // Otherwise try loading the Node.js `crypto` module (running in Node.js, or an older browser with a polyfill).
                const nodeCrypto = require("907617b02adbacec");
                if (!nodeCrypto.createHash) throw new Error("`crypto` module does not contain `createHash`");
                return Promise.resolve(nodeCrypto.createHash("sha256").update(input).digest());
            }
        } catch (error) {
            console.log(error);
            console.log('Crypto lib not found. Neither the global `crypto.subtle` Web Crypto API, nor the or the Node.js `require("crypto").createHash` module is available. Falling back to JS implementation.');
            return Promise.resolve(hashSha256(input));
        }
    });
}
exports.hashSha256Async = hashSha256Async;

},{"a338794cf4c0ff59":"JjjO8","907617b02adbacec":"bXKEI"}],"1AEfx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenVerifier = void 0;
const base64url = require("986665b4fd1fd358");
const cryptoClients_1 = require("b181a003e2d8bdf");
const errors_1 = require("7aa0b47769649bc0");
const sha256_1 = require("59e580d953ea2a5");
class TokenVerifier {
    constructor(signingAlgorithm, rawPublicKey){
        if (!(signingAlgorithm && rawPublicKey)) throw new errors_1.MissingParametersError("a signing algorithm and public key are required");
        if (typeof signingAlgorithm !== "string") throw "signing algorithm parameter must be a string";
        signingAlgorithm = signingAlgorithm.toUpperCase();
        if (!cryptoClients_1.cryptoClients.hasOwnProperty(signingAlgorithm)) throw "invalid signing algorithm";
        this.tokenType = "JWT";
        this.cryptoClient = cryptoClients_1.cryptoClients[signingAlgorithm];
        this.rawPublicKey = rawPublicKey;
    }
    verify(token) {
        if (typeof token === "string") return this.verifyCompact(token, false);
        else if (typeof token === "object") return this.verifyExpanded(token, false);
        else return false;
    }
    verifyAsync(token) {
        if (typeof token === "string") return this.verifyCompact(token, true);
        else if (typeof token === "object") return this.verifyExpanded(token, true);
        else return Promise.resolve(false);
    }
    verifyCompact(token, async) {
        // decompose the token into parts
        const tokenParts = token.split(".");
        // calculate the signing input hash
        const signingInput = tokenParts[0] + "." + tokenParts[1];
        const performVerify = (signingInputHash)=>{
            // extract the signature as a DER array
            const derSignatureBytes = this.cryptoClient.loadSignature(tokenParts[2]);
            // verify the signed hash
            return this.cryptoClient.verifyHash(signingInputHash, derSignatureBytes, this.rawPublicKey);
        };
        if (async) return (0, sha256_1.hashSha256Async)(signingInput).then((signingInputHash)=>performVerify(signingInputHash));
        else {
            const signingInputHash = (0, sha256_1.hashSha256)(signingInput);
            return performVerify(signingInputHash);
        }
    }
    verifyExpanded(token, async) {
        const signingInput = [
            token["header"].join("."),
            base64url.encode(token["payload"])
        ].join(".");
        let verified = true;
        const performVerify = (signingInputHash)=>{
            token["signature"].map((signature)=>{
                const derSignatureBytes = this.cryptoClient.loadSignature(signature);
                const signatureVerified = this.cryptoClient.verifyHash(signingInputHash, derSignatureBytes, this.rawPublicKey);
                if (!signatureVerified) verified = false;
            });
            return verified;
        };
        if (async) return (0, sha256_1.hashSha256Async)(signingInput).then((signingInputHash)=>performVerify(signingInputHash));
        else {
            const signingInputHash = (0, sha256_1.hashSha256)(signingInput);
            return performVerify(signingInputHash);
        }
    }
}
exports.TokenVerifier = TokenVerifier;

},{"986665b4fd1fd358":"vQfIa","b181a003e2d8bdf":"76fDz","7aa0b47769649bc0":"af9aw","59e580d953ea2a5":"2uRAk"}],"hzfjI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeToken = void 0;
const base64url = require("f0e8957a89e6d79b");
function decodeToken(token) {
    if (typeof token === "string") {
        // decompose the token into parts
        const tokenParts = token.split(".");
        const header = JSON.parse(base64url.decode(tokenParts[0]));
        const payload = JSON.parse(base64url.decode(tokenParts[1]));
        const signature = tokenParts[2];
        // return the token object
        return {
            header: header,
            payload: payload,
            signature: signature
        };
    } else if (typeof token === "object") {
        if (typeof token.payload !== "string") throw new Error("Expected token payload to be a base64 or json string");
        let payload = token.payload;
        if (token.payload[0] !== "{") payload = base64url.decode(payload);
        const allHeaders = [];
        token.header.map((headerValue)=>{
            const header = JSON.parse(base64url.decode(headerValue));
            allHeaders.push(header);
        });
        return {
            header: allHeaders,
            payload: JSON.parse(payload),
            signature: token.signature
        };
    }
}
exports.decodeToken = decodeToken;

},{"f0e8957a89e6d79b":"vQfIa"}],"8kFYP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeDIDFromAddress", ()=>makeDIDFromAddress);
parcelHelpers.export(exports, "makeDIDFromPublicKey", ()=>makeDIDFromPublicKey);
parcelHelpers.export(exports, "getDIDType", ()=>getDIDType);
parcelHelpers.export(exports, "getAddressFromDID", ()=>getAddressFromDID);
var _common = require("@stacks/common");
function makeDIDFromAddress(address) {
    return `did:btc-addr:${address}`;
}
function makeDIDFromPublicKey(publicKey) {
    return `did:ecdsa-pub:${publicKey}`;
}
function getDIDType(decentralizedID) {
    const didParts = decentralizedID.split(":");
    if (didParts.length !== 3) throw new (0, _common.InvalidDIDError)("Decentralized IDs must have 3 parts");
    if (didParts[0].toLowerCase() !== "did") throw new (0, _common.InvalidDIDError)('Decentralized IDs must start with "did"');
    return didParts[1].toLowerCase();
}
function getAddressFromDID(decentralizedID) {
    if (decentralizedID) {
        const didType = getDIDType(decentralizedID);
        if (didType === "btc-addr") return decentralizedID.split(":")[2];
        else return undefined;
    }
    return undefined;
}

},{"@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3sbdC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAuthRequestFromURL", ()=>getAuthRequestFromURL);
parcelHelpers.export(exports, "fetchAppManifest", ()=>fetchAppManifest);
var _jsontokens = require("jsontokens");
var _common = require("@stacks/common");
var _network = require("@stacks/network");
function getAuthRequestFromURL() {
    const location = (0, _common.getGlobalObject)("location", {
        throwIfUnavailable: true,
        usageDesc: "getAuthRequestFromURL"
    });
    const params = new URLSearchParams(location?.search);
    return params.get("authRequest")?.replaceAll(`${(0, _common.BLOCKSTACK_HANDLER)}:`, "") ?? null;
}
async function fetchAppManifest(authRequest, fetchFn = (0, _network.createFetchFn)()) {
    if (!authRequest) throw new Error("Invalid auth request");
    const payload = (0, _jsontokens.decodeToken)(authRequest).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    const manifestURI = payload.manifest_uri;
    try {
        const response = await fetchFn(manifestURI);
        const responseText = await response.text();
        const responseJSON = JSON.parse(responseText);
        return {
            ...responseJSON,
            manifestURI
        };
    } catch (error) {
        console.log(error);
        throw new Error("Could not fetch manifest.json");
    }
}

},{"jsontokens":"7yDiP","@stacks/common":"5ZsuO","@stacks/network":"c5pLF","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"c5pLF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetch = require("./fetch");
parcelHelpers.exportAll(_fetch, exports);
var _network = require("./network");
parcelHelpers.exportAll(_network, exports);

},{"./fetch":"9DlTV","./network":"4nkdx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"9DlTV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFetchOptions", ()=>getFetchOptions);
parcelHelpers.export(exports, "setFetchOptions", ()=>setFetchOptions);
parcelHelpers.export(exports, "fetchWrapper", ()=>fetchWrapper);
parcelHelpers.export(exports, "hostMatches", ()=>hostMatches);
parcelHelpers.export(exports, "createApiKeyMiddleware", ()=>createApiKeyMiddleware);
parcelHelpers.export(exports, "createFetchFn", ()=>createFetchFn);
var _polyfill = require("cross-fetch/polyfill");
const defaultFetchOpts = {
    referrerPolicy: "origin"
};
const getFetchOptions = ()=>{
    return defaultFetchOpts;
};
const setFetchOptions = (ops)=>{
    return Object.assign(defaultFetchOpts, ops);
};
async function fetchWrapper(input, init) {
    const fetchOpts = {};
    Object.assign(fetchOpts, init, defaultFetchOpts);
    const fetchResult = await fetch(input, fetchOpts);
    return fetchResult;
}
function hostMatches(host, pattern) {
    if (typeof pattern === "string") return pattern === host;
    return pattern.exec(host);
}
function createApiKeyMiddleware({ apiKey , host =/(.*)api(.*)\.stacks\.co$/i , httpHeader ="x-api-key"  }) {
    return {
        pre: (context)=>{
            const reqUrl = new URL(context.url);
            if (!hostMatches(reqUrl.host, host)) return;
            const headers = new Headers(context.init.headers);
            headers.set(httpHeader, apiKey);
            context.init.headers = headers;
        }
    };
}
function argsForCreateFetchFn(args) {
    let fetchLib = fetchWrapper;
    let middlewares = [];
    if (args.length > 0 && typeof args[0] === "function") fetchLib = args.shift();
    if (args.length > 0) middlewares = args;
    return {
        fetchLib,
        middlewares
    };
}
function createFetchFn(...args) {
    const { fetchLib , middlewares  } = argsForCreateFetchFn(args);
    const fetchFn = async (url, init)=>{
        let fetchParams = {
            url,
            init: init ?? {}
        };
        for (const middleware of middlewares)if (typeof middleware.pre === "function") {
            const result = await Promise.resolve(middleware.pre({
                fetch: fetchLib,
                ...fetchParams
            }));
            fetchParams = result ?? fetchParams;
        }
        let response = await fetchLib(fetchParams.url, fetchParams.init);
        for (const middleware of middlewares)if (typeof middleware.post === "function") {
            const result = await Promise.resolve(middleware.post({
                fetch: fetchLib,
                url: fetchParams.url,
                init: fetchParams.init,
                response: response?.clone() ?? response
            }));
            response = result ?? response;
        }
        return response;
    };
    return fetchFn;
}

},{"cross-fetch/polyfill":"k5OjL","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"k5OjL":[function(require,module,exports) {
(function(self1) {
    var irrelevant = function(exports) {
        var support = {
            searchParams: "URLSearchParams" in self1,
            iterable: "Symbol" in self1 && "iterator" in Symbol,
            blob: "FileReader" in self1 && "Blob" in self1 && function() {
                try {
                    new Blob();
                    return true;
                } catch (e) {
                    return false;
                }
            }(),
            formData: "FormData" in self1,
            arrayBuffer: "ArrayBuffer" in self1
        };
        function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
            var viewClasses = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
        }
        function normalizeName(name) {
            if (typeof name !== "string") name = String(name);
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
            return name.toLowerCase();
        }
        function normalizeValue(value) {
            if (typeof value !== "string") value = String(value);
            return value;
        }
        // Build a destructive iterator for the value list
        function iteratorFor(items) {
            var iterator = {
                next: function() {
                    var value = items.shift();
                    return {
                        done: value === undefined,
                        value: value
                    };
                }
            };
            if (support.iterable) iterator[Symbol.iterator] = function() {
                return iterator;
            };
            return iterator;
        }
        function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) headers.forEach(function(value, name) {
                this.append(name, value);
            }, this);
            else if (Array.isArray(headers)) headers.forEach(function(header) {
                this.append(header[0], header[1]);
            }, this);
            else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
            }, this);
        }
        Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
            for(var name in this.map)if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
        };
        Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push(name);
            });
            return iteratorFor(items);
        };
        Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
                items.push(value);
            });
            return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
                items.push([
                    name,
                    value
                ]);
            });
            return iteratorFor(items);
        };
        if (support.iterable) Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        function consumed(body) {
            if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
            body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
                reader.onload = function() {
                    resolve(reader.result);
                };
                reader.onerror = function() {
                    reject(reader.error);
                };
            });
        }
        function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
        }
        function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
        }
        function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for(var i = 0; i < view.length; i++)chars[i] = String.fromCharCode(view[i]);
            return chars.join("");
        }
        function bufferClone(buf) {
            if (buf.slice) return buf.slice(0);
            else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
            }
        }
        function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) this._bodyText = "";
                else if (typeof body === "string") this._bodyText = body;
                else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
                else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
                else if (support.arrayBuffer && support.blob && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    // IE 10-11 can't handle a DataView body.
                    this._bodyInit = new Blob([
                        this._bodyArrayBuffer
                    ]);
                } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
                else this._bodyText = body = Object.prototype.toString.call(body);
                if (!this.headers.get("content-type")) {
                    if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
                    else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
                    else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
            };
            if (support.blob) {
                this.blob = function() {
                    var rejected = consumed(this);
                    if (rejected) return rejected;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                        this._bodyArrayBuffer
                    ]));
                    else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    else return Promise.resolve(new Blob([
                        this._bodyText
                    ]));
                };
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                    else return this.blob().then(readBlobAsArrayBuffer);
                };
            }
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                else if (this._bodyFormData) throw new Error("could not read FormData body as text");
                else return Promise.resolve(this._bodyText);
            };
            if (support.formData) this.formData = function() {
                return this.text().then(decode);
            };
            this.json = function() {
                return this.text().then(JSON.parse);
            };
            return this;
        }
        // HTTP methods whose capitalization should be normalized
        var methods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "POST",
            "PUT"
        ];
        function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
                if (input.bodyUsed) throw new TypeError("Already read");
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) this.headers = new Headers(input.headers);
                this.method = input.method;
                this.mode = input.mode;
                this.signal = input.signal;
                if (!body && input._bodyInit != null) {
                    body = input._bodyInit;
                    input.bodyUsed = true;
                }
            } else this.url = String(input);
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) this.headers = new Headers(options.headers);
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(body);
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        function decode(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                    var split = bytes.split("=");
                    var name = split.shift().replace(/\+/g, " ");
                    var value = split.join("=").replace(/\+/g, " ");
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
            });
            return form;
        }
        function parseHeaders(rawHeaders) {
            var headers = new Headers();
            // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
            // https://tools.ietf.org/html/rfc7230#section-3.2
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                    var value = parts.join(":").trim();
                    headers.append(key, value);
                }
            });
            return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
            if (!options) options = {};
            this.type = "default";
            this.status = options.status === undefined ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        Response.error = function() {
            var response = new Response(null, {
                status: 0,
                statusText: ""
            });
            response.type = "error";
            return response;
        };
        var redirectStatuses = [
            301,
            302,
            303,
            307,
            308
        ];
        Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
            return new Response(null, {
                status: status,
                headers: {
                    location: url
                }
            });
        };
        exports.DOMException = self1.DOMException;
        try {
            new exports.DOMException();
        } catch (err) {
            exports.DOMException = function(message, name) {
                this.message = message;
                this.name = name;
                var error = Error(message);
                this.stack = error.stack;
            };
            exports.DOMException.prototype = Object.create(Error.prototype);
            exports.DOMException.prototype.constructor = exports.DOMException;
        }
        function fetch(input, init) {
            return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                if (request.signal && request.signal.aborted) return reject(new exports.DOMException("Aborted", "AbortError"));
                var xhr = new XMLHttpRequest();
                function abortXhr() {
                    xhr.abort();
                }
                xhr.onload = function() {
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                    };
                    options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                    var body = "response" in xhr ? xhr.response : xhr.responseText;
                    resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                    reject(new TypeError("Network request failed"));
                };
                xhr.onabort = function() {
                    reject(new exports.DOMException("Aborted", "AbortError"));
                };
                xhr.open(request.method, request.url, true);
                if (request.credentials === "include") xhr.withCredentials = true;
                else if (request.credentials === "omit") xhr.withCredentials = false;
                if ("responseType" in xhr && support.blob) xhr.responseType = "blob";
                request.headers.forEach(function(value, name) {
                    xhr.setRequestHeader(name, value);
                });
                if (request.signal) {
                    request.signal.addEventListener("abort", abortXhr);
                    xhr.onreadystatechange = function() {
                        // DONE (success or failure)
                        if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
                    };
                }
                xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
        }
        fetch.polyfill = true;
        if (!self1.fetch) {
            self1.fetch = fetch;
            self1.Headers = Headers;
            self1.Request = Request;
            self1.Response = Response;
        }
        exports.Headers = Headers;
        exports.Request = Request;
        exports.Response = Response;
        exports.fetch = fetch;
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        return exports;
    }({});
})(typeof self !== "undefined" ? self : this);

},{}],"4nkdx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HIRO_MAINNET_DEFAULT", ()=>HIRO_MAINNET_DEFAULT);
parcelHelpers.export(exports, "HIRO_TESTNET_DEFAULT", ()=>HIRO_TESTNET_DEFAULT);
parcelHelpers.export(exports, "HIRO_MOCKNET_DEFAULT", ()=>HIRO_MOCKNET_DEFAULT);
parcelHelpers.export(exports, "StacksNetworks", ()=>StacksNetworks);
parcelHelpers.export(exports, "StacksNetwork", ()=>StacksNetwork);
parcelHelpers.export(exports, "StacksMainnet", ()=>StacksMainnet);
parcelHelpers.export(exports, "StacksTestnet", ()=>StacksTestnet);
parcelHelpers.export(exports, "StacksMocknet", ()=>StacksMocknet);
parcelHelpers.export(exports, "StacksDevnet", ()=>StacksDevnet);
var _common = require("@stacks/common");
var _fetch = require("./fetch");
const HIRO_MAINNET_DEFAULT = "https://stacks-node-api.mainnet.stacks.co";
const HIRO_TESTNET_DEFAULT = "https://stacks-node-api.testnet.stacks.co";
const HIRO_MOCKNET_DEFAULT = "http://localhost:3999";
const StacksNetworks = [
    "mainnet",
    "testnet",
    "devnet",
    "mocknet"
];
class StacksNetwork {
    constructor(networkConfig){
        this.version = (0, _common.TransactionVersion).Mainnet;
        this.chainId = (0, _common.ChainID).Mainnet;
        this.bnsLookupUrl = "https://stacks-node-api.mainnet.stacks.co";
        this.broadcastEndpoint = "/v2/transactions";
        this.transferFeeEstimateEndpoint = "/v2/fees/transfer";
        this.transactionFeeEstimateEndpoint = "/v2/fees/transaction";
        this.accountEndpoint = "/v2/accounts";
        this.contractAbiEndpoint = "/v2/contracts/interface";
        this.readOnlyFunctionCallEndpoint = "/v2/contracts/call-read";
        this.isMainnet = ()=>this.version === (0, _common.TransactionVersion).Mainnet;
        this.getBroadcastApiUrl = ()=>`${this.coreApiUrl}${this.broadcastEndpoint}`;
        this.getTransferFeeEstimateApiUrl = ()=>`${this.coreApiUrl}${this.transferFeeEstimateEndpoint}`;
        this.getTransactionFeeEstimateApiUrl = ()=>`${this.coreApiUrl}${this.transactionFeeEstimateEndpoint}`;
        this.getAccountApiUrl = (address)=>`${this.coreApiUrl}${this.accountEndpoint}/${address}?proof=0`;
        this.getAccountExtendedBalancesApiUrl = (address)=>`${this.coreApiUrl}/extended/v1/address/${address}/balances`;
        this.getAbiApiUrl = (address, contract)=>`${this.coreApiUrl}${this.contractAbiEndpoint}/${address}/${contract}`;
        this.getReadOnlyFunctionCallApiUrl = (contractAddress, contractName, functionName)=>`${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}/${contractAddress}/${contractName}/${encodeURIComponent(functionName)}`;
        this.getInfoUrl = ()=>`${this.coreApiUrl}/v2/info`;
        this.getBlockTimeInfoUrl = ()=>`${this.coreApiUrl}/extended/v1/info/network_block_times`;
        this.getPoxInfoUrl = ()=>`${this.coreApiUrl}/v2/pox`;
        this.getRewardsUrl = (address, options)=>{
            let url = `${this.coreApiUrl}/extended/v1/burnchain/rewards/${address}`;
            if (options) url = `${url}?limit=${options.limit}&offset=${options.offset}`;
            return url;
        };
        this.getRewardsTotalUrl = (address)=>`${this.coreApiUrl}/extended/v1/burnchain/rewards/${address}/total`;
        this.getRewardHoldersUrl = (address, options)=>{
            let url = `${this.coreApiUrl}/extended/v1/burnchain/reward_slot_holders/${address}`;
            if (options) url = `${url}?limit=${options.limit}&offset=${options.offset}`;
            return url;
        };
        this.getStackerInfoUrl = (contractAddress, contractName)=>`${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}
    ${contractAddress}/${contractName}/get-stacker-info`;
        this.getDataVarUrl = (contractAddress, contractName, dataVarName)=>`${this.coreApiUrl}/v2/data_var/${contractAddress}/${contractName}/${dataVarName}?proof=0`;
        this.getMapEntryUrl = (contractAddress, contractName, mapName)=>`${this.coreApiUrl}/v2/map_entry/${contractAddress}/${contractName}/${mapName}?proof=0`;
        this.coreApiUrl = networkConfig.url;
        this.fetchFn = networkConfig.fetchFn ?? (0, _fetch.createFetchFn)();
    }
    getNameInfo(fullyQualifiedName) {
        const nameLookupURL = `${this.bnsLookupUrl}/v1/names/${fullyQualifiedName}`;
        return this.fetchFn(nameLookupURL).then((resp)=>{
            if (resp.status === 404) throw new Error("Name not found");
            else if (resp.status !== 200) throw new Error(`Bad response status: ${resp.status}`);
            else return resp.json();
        }).then((nameInfo)=>{
            if (nameInfo.address) return Object.assign({}, nameInfo, {
                address: nameInfo.address
            });
            else return nameInfo;
        });
    }
}
StacksNetwork.fromName = (networkName)=>{
    switch(networkName){
        case "mainnet":
            return new StacksMainnet();
        case "testnet":
            return new StacksTestnet();
        case "devnet":
            return new StacksDevnet();
        case "mocknet":
            return new StacksMocknet();
        default:
            throw new Error(`Invalid network name provided. Must be one of the following: ${StacksNetworks.join(", ")}`);
    }
};
StacksNetwork.fromNameOrNetwork = (network)=>{
    if (typeof network !== "string" && "version" in network) return network;
    return StacksNetwork.fromName(network);
};
class StacksMainnet extends StacksNetwork {
    constructor(opts){
        super({
            url: opts?.url ?? HIRO_MAINNET_DEFAULT,
            fetchFn: opts?.fetchFn
        });
        this.version = (0, _common.TransactionVersion).Mainnet;
        this.chainId = (0, _common.ChainID).Mainnet;
    }
}
class StacksTestnet extends StacksNetwork {
    constructor(opts){
        super({
            url: opts?.url ?? HIRO_TESTNET_DEFAULT,
            fetchFn: opts?.fetchFn
        });
        this.version = (0, _common.TransactionVersion).Testnet;
        this.chainId = (0, _common.ChainID).Testnet;
    }
}
class StacksMocknet extends StacksNetwork {
    constructor(opts){
        super({
            url: opts?.url ?? HIRO_MOCKNET_DEFAULT,
            fetchFn: opts?.fetchFn
        });
        this.version = (0, _common.TransactionVersion).Testnet;
        this.chainId = (0, _common.ChainID).Testnet;
    }
}
const StacksDevnet = StacksMocknet;

},{"@stacks/common":"5ZsuO","./fetch":"9DlTV","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fRgCs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doSignaturesMatchPublicKeys", ()=>doSignaturesMatchPublicKeys);
parcelHelpers.export(exports, "doPublicKeysMatchIssuer", ()=>doPublicKeysMatchIssuer);
parcelHelpers.export(exports, "isIssuanceDateValid", ()=>isIssuanceDateValid);
parcelHelpers.export(exports, "isExpirationDateValid", ()=>isExpirationDateValid);
parcelHelpers.export(exports, "isManifestUriValid", ()=>isManifestUriValid);
parcelHelpers.export(exports, "isRedirectUriValid", ()=>isRedirectUriValid);
parcelHelpers.export(exports, "verifyAuthRequest", ()=>verifyAuthRequest);
parcelHelpers.export(exports, "verifyAuthRequestAndLoadManifest", ()=>verifyAuthRequestAndLoadManifest);
parcelHelpers.export(exports, "verifyAuthResponse", ()=>verifyAuthResponse);
var _common = require("@stacks/common");
var _encryption = require("@stacks/encryption");
var _jsontokens = require("jsontokens");
var _dids = require("./dids");
var _provider = require("./provider");
function doSignaturesMatchPublicKeys(token) {
    const payload = (0, _jsontokens.decodeToken)(token).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    const publicKeys = payload.public_keys;
    if (publicKeys.length === 1) {
        const publicKey = publicKeys[0];
        try {
            const tokenVerifier = new (0, _jsontokens.TokenVerifier)("ES256k", publicKey);
            return tokenVerifier.verify(token);
        } catch (e) {
            return false;
        }
    } else throw new Error("Multiple public keys are not supported");
}
function doPublicKeysMatchIssuer(token) {
    const payload = (0, _jsontokens.decodeToken)(token).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    const publicKeys = payload.public_keys;
    const addressFromIssuer = (0, _dids.getAddressFromDID)(payload.iss);
    if (publicKeys.length === 1) {
        const addressFromPublicKeys = (0, _encryption.publicKeyToBtcAddress)(publicKeys[0]);
        if (addressFromPublicKeys === addressFromIssuer) return true;
    } else throw new Error("Multiple public keys are not supported");
    return false;
}
function isIssuanceDateValid(token) {
    const payload = (0, _jsontokens.decodeToken)(token).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    if (payload.iat) {
        if (typeof payload.iat !== "number") return false;
        const issuedAt = new Date(payload.iat * 1000);
        if (new Date().getTime() < issuedAt.getTime()) return false;
        else return true;
    } else return true;
}
function isExpirationDateValid(token) {
    const payload = (0, _jsontokens.decodeToken)(token).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    if (payload.exp) {
        if (typeof payload.exp !== "number") return false;
        const expiresAt = new Date(payload.exp * 1000);
        if (new Date().getTime() > expiresAt.getTime()) return false;
        else return true;
    } else return true;
}
function isManifestUriValid(token) {
    const payload = (0, _jsontokens.decodeToken)(token).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    return (0, _common.isSameOriginAbsoluteUrl)(payload.domain_name, payload.manifest_uri);
}
function isRedirectUriValid(token) {
    const payload = (0, _jsontokens.decodeToken)(token).payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    return (0, _common.isSameOriginAbsoluteUrl)(payload.domain_name, payload.redirect_uri);
}
async function verifyAuthRequest(token) {
    if ((0, _jsontokens.decodeToken)(token).header.alg === "none") throw new Error("Token must be signed in order to be verified");
    const values = await Promise.all([
        isExpirationDateValid(token),
        isIssuanceDateValid(token),
        doSignaturesMatchPublicKeys(token),
        doPublicKeysMatchIssuer(token),
        isManifestUriValid(token),
        isRedirectUriValid(token)
    ]);
    return values.every((val)=>val);
}
async function verifyAuthRequestAndLoadManifest(token) {
    const valid = await verifyAuthRequest(token);
    if (!valid) throw new Error("Token is an invalid auth request");
    return (0, _provider.fetchAppManifest)(token);
}
async function verifyAuthResponse(token) {
    const conditions = await Promise.all([
        isExpirationDateValid(token),
        isIssuanceDateValid(token),
        doSignaturesMatchPublicKeys(token),
        doPublicKeysMatchIssuer(token)
    ]);
    return conditions.every((val)=>val);
}

},{"@stacks/common":"5ZsuO","@stacks/encryption":"fLdoW","jsontokens":"7yDiP","./dids":"8kFYP","./provider":"3sbdC","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"LRdHD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserSession", ()=>UserSession);
var _appConfig = require("./appConfig");
var _sessionStore = require("./sessionStore");
var _jsontokens = require("jsontokens");
var _verification = require("./verification");
var _messages = require("./messages");
var _encryption = require("@stacks/encryption");
var _dids = require("./dids");
var _common = require("@stacks/common");
var _profile = require("@stacks/profile");
var _constants = require("./constants");
var _network = require("@stacks/network");
var _protocolEchoDetection = require("./protocolEchoDetection");
class UserSession {
    constructor(options){
        let runningInBrowser = true;
        if (typeof window === "undefined" && typeof self === "undefined") runningInBrowser = false;
        if (options && options.appConfig) this.appConfig = options.appConfig;
        else if (runningInBrowser) this.appConfig = new (0, _appConfig.AppConfig)();
        else throw new (0, _common.MissingParameterError)("You need to specify options.appConfig");
        if (options && options.sessionStore) this.store = options.sessionStore;
        else if (runningInBrowser) {
            if (options) this.store = new (0, _sessionStore.LocalStorageStore)(options.sessionOptions);
            else this.store = new (0, _sessionStore.LocalStorageStore)();
        } else if (options) this.store = new (0, _sessionStore.InstanceDataStore)(options.sessionOptions);
        else this.store = new (0, _sessionStore.InstanceDataStore)();
    }
    makeAuthRequestToken(transitKey, redirectURI, manifestURI, scopes, appDomain, expiresAt = (0, _common.nextHour)().getTime(), extraParams = {}) {
        const appConfig = this.appConfig;
        if (!appConfig) throw new (0, _common.InvalidStateError)("Missing AppConfig");
        transitKey = transitKey || this.generateAndStoreTransitKey();
        redirectURI = redirectURI || appConfig.redirectURI();
        manifestURI = manifestURI || appConfig.manifestURI();
        scopes = scopes || appConfig.scopes;
        appDomain = appDomain || appConfig.appDomain;
        return _messages.makeAuthRequestToken(transitKey, redirectURI, manifestURI, scopes, appDomain, expiresAt, extraParams);
    }
    generateAndStoreTransitKey() {
        const sessionData = this.store.getSessionData();
        const transitKey = _messages.generateTransitKey();
        sessionData.transitKey = transitKey;
        this.store.setSessionData(sessionData);
        return transitKey;
    }
    getAuthResponseToken() {
        const search = (0, _common.getGlobalObject)("location", {
            throwIfUnavailable: true,
            usageDesc: "getAuthResponseToken"
        })?.search;
        const params = new URLSearchParams(search);
        return params.get("authResponse") ?? "";
    }
    isSignInPending() {
        try {
            const isProtocolEcho = (0, _protocolEchoDetection.protocolEchoReplyDetection)();
            if (isProtocolEcho) {
                (0, _common.Logger).info("protocolEchoReply detected from isSignInPending call, the page is about to redirect.");
                return true;
            }
        } catch (error) {
            (0, _common.Logger).error(`Error checking for protocol echo reply isSignInPending: ${error}`);
        }
        return !!this.getAuthResponseToken();
    }
    isUserSignedIn() {
        return !!this.store.getSessionData().userData;
    }
    async handlePendingSignIn(authResponseToken = this.getAuthResponseToken(), fetchFn = (0, _network.createFetchFn)()) {
        const sessionData = this.store.getSessionData();
        if (sessionData.userData) throw new (0, _common.LoginFailedError)("Existing user session found.");
        const transitKey = this.store.getSessionData().transitKey;
        let coreNode = this.appConfig && this.appConfig.coreNode;
        if (!coreNode) {
            const network = new (0, _network.StacksMainnet)();
            coreNode = network.bnsLookupUrl;
        }
        const tokenPayload = (0, _jsontokens.decodeToken)(authResponseToken).payload;
        if (typeof tokenPayload === "string") throw new Error("Unexpected token payload type of string");
        const isValid = await (0, _verification.verifyAuthResponse)(authResponseToken);
        if (!isValid) throw new (0, _common.LoginFailedError)("Invalid authentication response.");
        let appPrivateKey = tokenPayload.private_key;
        let coreSessionToken = tokenPayload.core_token;
        if ((0, _common.isLaterVersion)(tokenPayload.version, "1.1.0")) {
            if (transitKey !== undefined && transitKey != null) {
                if (tokenPayload.private_key !== undefined && tokenPayload.private_key !== null) try {
                    appPrivateKey = await _messages.decryptPrivateKey(transitKey, tokenPayload.private_key);
                } catch (e) {
                    (0, _common.Logger).warn("Failed decryption of appPrivateKey, will try to use as given");
                    if (!(0, _encryption.isValidPrivateKey)(tokenPayload.private_key)) throw new (0, _common.LoginFailedError)("Failed decrypting appPrivateKey. Usually means that the transit key has changed during login.");
                }
                if (coreSessionToken !== undefined && coreSessionToken !== null) try {
                    coreSessionToken = await _messages.decryptPrivateKey(transitKey, coreSessionToken);
                } catch (e) {
                    (0, _common.Logger).info("Failed decryption of coreSessionToken, will try to use as given");
                }
            } else throw new (0, _common.LoginFailedError)("Authenticating with protocol > 1.1.0 requires transit key, and none found.");
        }
        let hubUrl = (0, _common.BLOCKSTACK_DEFAULT_GAIA_HUB_URL);
        let gaiaAssociationToken;
        if ((0, _common.isLaterVersion)(tokenPayload.version, "1.2.0") && tokenPayload.hubUrl !== null && tokenPayload.hubUrl !== undefined) hubUrl = tokenPayload.hubUrl;
        if ((0, _common.isLaterVersion)(tokenPayload.version, "1.3.0") && tokenPayload.associationToken !== null && tokenPayload.associationToken !== undefined) gaiaAssociationToken = tokenPayload.associationToken;
        const userData = {
            profile: tokenPayload.profile,
            email: tokenPayload.email,
            decentralizedID: tokenPayload.iss,
            identityAddress: (0, _dids.getAddressFromDID)(tokenPayload.iss),
            appPrivateKey,
            coreSessionToken,
            authResponseToken,
            hubUrl,
            appPrivateKeyFromWalletSalt: tokenPayload.appPrivateKeyFromWalletSalt,
            coreNode: tokenPayload.blockstackAPIUrl,
            gaiaAssociationToken
        };
        const profileURL = tokenPayload.profile_url;
        if (!userData.profile && profileURL) {
            const response = await fetchFn(profileURL);
            if (!response.ok) userData.profile = Object.assign({}, (0, _constants.DEFAULT_PROFILE));
            else {
                const responseText = await response.text();
                const wrappedProfile = JSON.parse(responseText);
                userData.profile = (0, _profile.extractProfile)(wrappedProfile[0].token);
            }
        } else userData.profile = tokenPayload.profile;
        sessionData.userData = userData;
        this.store.setSessionData(sessionData);
        return userData;
    }
    loadUserData() {
        const userData = this.store.getSessionData().userData;
        if (!userData) throw new (0, _common.InvalidStateError)("No user data found. Did the user sign in?");
        return userData;
    }
    encryptContent(content, options) {
        const opts = Object.assign({}, options);
        if (!opts.privateKey) opts.privateKey = this.loadUserData().appPrivateKey;
        return (0, _encryption.encryptContent)(content, opts);
    }
    decryptContent(content, options) {
        const opts = Object.assign({}, options);
        if (!opts.privateKey) opts.privateKey = this.loadUserData().appPrivateKey;
        return (0, _encryption.decryptContent)(content, opts);
    }
    signUserOut(redirectURL) {
        this.store.deleteSessionData();
        if (redirectURL) {
            if (typeof location !== "undefined" && location.href) location.href = redirectURL;
        }
    }
}
UserSession.prototype.makeAuthRequest = UserSession.prototype.makeAuthRequestToken;

},{"./appConfig":"2AFHA","./sessionStore":"4OX7J","jsontokens":"7yDiP","./verification":"fRgCs","./messages":"9vtMG","@stacks/encryption":"fLdoW","./dids":"8kFYP","@stacks/common":"5ZsuO","@stacks/profile":"8DFHv","./constants":"c0I71","@stacks/network":"c5pLF","./protocolEchoDetection":"cHjUq","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4OX7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SessionDataStore", ()=>SessionDataStore);
parcelHelpers.export(exports, "InstanceDataStore", ()=>InstanceDataStore);
parcelHelpers.export(exports, "LocalStorageStore", ()=>LocalStorageStore);
var _sessionData = require("./sessionData");
var _constants = require("./constants");
var _common = require("@stacks/common");
class SessionDataStore {
    constructor(sessionOptions){
        if (sessionOptions) {
            const newSessionData = new (0, _sessionData.SessionData)(sessionOptions);
            this.setSessionData(newSessionData);
        }
    }
    getSessionData() {
        throw new Error("Abstract class");
    }
    setSessionData(_session) {
        throw new Error("Abstract class");
    }
    deleteSessionData() {
        throw new Error("Abstract class");
    }
}
class InstanceDataStore extends SessionDataStore {
    constructor(sessionOptions){
        super(sessionOptions);
        if (!this.sessionData) this.setSessionData(new (0, _sessionData.SessionData)({}));
    }
    getSessionData() {
        if (!this.sessionData) throw new (0, _common.NoSessionDataError)("No session data was found.");
        return this.sessionData;
    }
    setSessionData(session) {
        this.sessionData = session;
        return true;
    }
    deleteSessionData() {
        this.setSessionData(new (0, _sessionData.SessionData)({}));
        return true;
    }
}
class LocalStorageStore extends SessionDataStore {
    constructor(sessionOptions){
        super(sessionOptions);
        if (sessionOptions && sessionOptions.storeOptions && sessionOptions.storeOptions.localStorageKey && typeof sessionOptions.storeOptions.localStorageKey === "string") this.key = sessionOptions.storeOptions.localStorageKey;
        else this.key = (0, _constants.LOCALSTORAGE_SESSION_KEY);
        const data = localStorage.getItem(this.key);
        if (!data) {
            const sessionData = new (0, _sessionData.SessionData)({});
            this.setSessionData(sessionData);
        }
    }
    getSessionData() {
        const data = localStorage.getItem(this.key);
        if (!data) throw new (0, _common.NoSessionDataError)("No session data was found in localStorage");
        const dataJSON = JSON.parse(data);
        return (0, _sessionData.SessionData).fromJSON(dataJSON);
    }
    setSessionData(session) {
        localStorage.setItem(this.key, session.toString());
        return true;
    }
    deleteSessionData() {
        localStorage.removeItem(this.key);
        this.setSessionData(new (0, _sessionData.SessionData)({}));
        return true;
    }
}

},{"./sessionData":"iPs95","./constants":"c0I71","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iPs95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SessionData", ()=>SessionData);
var _common = require("@stacks/common");
const SESSION_VERSION = "1.0.0";
class SessionData {
    constructor(options){
        this.version = SESSION_VERSION;
        this.userData = options.userData;
        this.transitKey = options.transitKey;
        this.etags = options.etags ? options.etags : {};
    }
    static fromJSON(json) {
        if (json.version !== SESSION_VERSION) throw new (0, _common.InvalidStateError)(`JSON data version ${json.version} not supported by SessionData`);
        const options = {
            coreNode: json.coreNode,
            userData: json.userData,
            transitKey: json.transitKey,
            etags: json.etags
        };
        return new SessionData(options);
    }
    toString() {
        return JSON.stringify(this);
    }
}

},{"@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8DFHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Profile", ()=>(0, _profile.Profile));
parcelHelpers.export(exports, "Person", ()=>(0, _profile.Person));
parcelHelpers.export(exports, "makeProfileZoneFile", ()=>(0, _profile.makeProfileZoneFile));
parcelHelpers.export(exports, "getTokenFileUrl", ()=>(0, _profile.getTokenFileUrl));
parcelHelpers.export(exports, "resolveZoneFileToProfile", ()=>(0, _profile.resolveZoneFileToProfile));
parcelHelpers.export(exports, "resolveZoneFileToPerson", ()=>(0, _profileSchemas.resolveZoneFileToPerson));
parcelHelpers.export(exports, "signProfileToken", ()=>(0, _profileTokens.signProfileToken));
parcelHelpers.export(exports, "wrapProfileToken", ()=>(0, _profileTokens.wrapProfileToken));
parcelHelpers.export(exports, "verifyProfileToken", ()=>(0, _profileTokens.verifyProfileToken));
parcelHelpers.export(exports, "extractProfile", ()=>(0, _profileTokens.extractProfile));
var _profile = require("./profile");
var _profileSchemas = require("./profileSchemas");
var _profileTokens = require("./profileTokens");

},{"./profile":"ltGUr","./profileSchemas":"dncj1","./profileTokens":"bP3ss","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ltGUr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Profile", ()=>Profile);
parcelHelpers.export(exports, "Person", ()=>Person);
parcelHelpers.export(exports, "makeProfileZoneFile", ()=>makeProfileZoneFile);
parcelHelpers.export(exports, "getTokenFileUrl", ()=>getTokenFileUrl);
parcelHelpers.export(exports, "resolveZoneFileToProfile", ()=>resolveZoneFileToProfile);
var _profileTokens = require("./profileTokens");
var _profileSchemas = require("./profileSchemas");
var _personUtils = require("./profileSchemas/personUtils");
var _zoneFile = require("zone-file");
var _schemaInspector = require("schema-inspector");
var _common = require("@stacks/common");
var _network = require("@stacks/network");
const schemaDefinition = {
    type: "object",
    properties: {
        "@context": {
            type: "string",
            optional: true
        },
        "@type": {
            type: "string"
        }
    }
};
class Profile {
    constructor(profile = {}){
        this._profile = Object.assign({}, {
            "@context": "http://schema.org/"
        }, profile);
    }
    toJSON() {
        return Object.assign({}, this._profile);
    }
    toToken(privateKey) {
        return (0, _profileTokens.signProfileToken)(this.toJSON(), privateKey);
    }
    static validateSchema(profile, strict = false) {
        schemaDefinition.strict = strict;
        return _schemaInspector.validate(schemaDefinition, profile);
    }
    static fromToken(token, publicKeyOrAddress = null) {
        const profile = (0, _profileTokens.extractProfile)(token, publicKeyOrAddress);
        return new Profile(profile);
    }
    static makeZoneFile(domainName, tokenFileURL) {
        return makeProfileZoneFile(domainName, tokenFileURL);
    }
}
const personSchemaDefinition = {
    type: "object",
    strict: false,
    properties: {
        "@context": {
            type: "string",
            optional: true
        },
        "@type": {
            type: "string"
        },
        "@id": {
            type: "string",
            optional: true
        },
        name: {
            type: "string",
            optional: true
        },
        givenName: {
            type: "string",
            optional: true
        },
        familyName: {
            type: "string",
            optional: true
        },
        description: {
            type: "string",
            optional: true
        },
        image: {
            type: "array",
            optional: true,
            items: {
                type: "object",
                properties: {
                    "@type": {
                        type: "string"
                    },
                    name: {
                        type: "string",
                        optional: true
                    },
                    contentUrl: {
                        type: "string",
                        optional: true
                    }
                }
            }
        },
        website: {
            type: "array",
            optional: true,
            items: {
                type: "object",
                properties: {
                    "@type": {
                        type: "string"
                    },
                    url: {
                        type: "string",
                        optional: true
                    }
                }
            }
        },
        account: {
            type: "array",
            optional: true,
            items: {
                type: "object",
                properties: {
                    "@type": {
                        type: "string"
                    },
                    service: {
                        type: "string",
                        optional: true
                    },
                    identifier: {
                        type: "string",
                        optional: true
                    },
                    proofType: {
                        type: "string",
                        optional: true
                    },
                    proofUrl: {
                        type: "string",
                        optional: true
                    },
                    proofMessage: {
                        type: "string",
                        optional: true
                    },
                    proofSignature: {
                        type: "string",
                        optional: true
                    }
                }
            }
        },
        worksFor: {
            type: "array",
            optional: true,
            items: {
                type: "object",
                properties: {
                    "@type": {
                        type: "string"
                    },
                    "@id": {
                        type: "string",
                        optional: true
                    }
                }
            }
        },
        knows: {
            type: "array",
            optional: true,
            items: {
                type: "object",
                properties: {
                    "@type": {
                        type: "string"
                    },
                    "@id": {
                        type: "string",
                        optional: true
                    }
                }
            }
        },
        address: {
            type: "object",
            optional: true,
            properties: {
                "@type": {
                    type: "string"
                },
                streetAddress: {
                    type: "string",
                    optional: true
                },
                addressLocality: {
                    type: "string",
                    optional: true
                },
                postalCode: {
                    type: "string",
                    optional: true
                },
                addressCountry: {
                    type: "string",
                    optional: true
                }
            }
        },
        birthDate: {
            type: "string",
            optional: true
        },
        taxID: {
            type: "string",
            optional: true
        }
    }
};
class Person extends Profile {
    constructor(profile = {
        "@type": "Person"
    }){
        super(profile);
        this._profile = Object.assign({}, {
            "@type": "Person"
        }, this._profile);
    }
    static validateSchema(profile, strict = false) {
        personSchemaDefinition.strict = strict;
        return _schemaInspector.validate(schemaDefinition, profile);
    }
    static fromToken(token, publicKeyOrAddress = null) {
        const profile = (0, _profileTokens.extractProfile)(token, publicKeyOrAddress);
        return new Person(profile);
    }
    static fromLegacyFormat(legacyProfile) {
        const profile = (0, _profileSchemas.getPersonFromLegacyFormat)(legacyProfile);
        return new Person(profile);
    }
    toJSON() {
        return {
            profile: this.profile(),
            name: this.name(),
            givenName: this.givenName(),
            familyName: this.familyName(),
            description: this.description(),
            avatarUrl: this.avatarUrl(),
            verifiedAccounts: this.verifiedAccounts(),
            address: this.address(),
            birthDate: this.birthDate(),
            connections: this.connections(),
            organizations: this.organizations()
        };
    }
    profile() {
        return Object.assign({}, this._profile);
    }
    name() {
        return (0, _personUtils.getName)(this.profile());
    }
    givenName() {
        return (0, _personUtils.getGivenName)(this.profile());
    }
    familyName() {
        return (0, _personUtils.getFamilyName)(this.profile());
    }
    description() {
        return (0, _personUtils.getDescription)(this.profile());
    }
    avatarUrl() {
        return (0, _personUtils.getAvatarUrl)(this.profile());
    }
    verifiedAccounts(verifications) {
        return (0, _personUtils.getVerifiedAccounts)(this.profile(), verifications);
    }
    address() {
        return (0, _personUtils.getAddress)(this.profile());
    }
    birthDate() {
        return (0, _personUtils.getBirthDate)(this.profile());
    }
    connections() {
        return (0, _personUtils.getConnections)(this.profile());
    }
    organizations() {
        return (0, _personUtils.getOrganizations)(this.profile());
    }
}
function makeProfileZoneFile(origin, tokenFileUrl) {
    if (!tokenFileUrl.includes("://")) throw new Error("Invalid token file url");
    const urlScheme = tokenFileUrl.split("://")[0];
    const urlParts = tokenFileUrl.split("://")[1].split("/");
    const domain = urlParts[0];
    const pathname = `/${urlParts.slice(1).join("/")}`;
    const zoneFile = {
        $origin: origin,
        $ttl: 3600,
        uri: [
            {
                name: "_http._tcp",
                priority: 10,
                weight: 1,
                target: `${urlScheme}://${domain}${pathname}`
            }
        ]
    };
    const zoneFileTemplate = "{$origin}\n{$ttl}\n{uri}\n";
    return (0, _zoneFile.makeZoneFile)(zoneFile, zoneFileTemplate);
}
function getTokenFileUrl(zoneFileJson) {
    if (!zoneFileJson.hasOwnProperty("uri")) return null;
    if (!Array.isArray(zoneFileJson.uri)) return null;
    if (zoneFileJson.uri.length < 1) return null;
    const validRecords = zoneFileJson.uri.filter((record)=>record.hasOwnProperty("target") && record.name === "_http._tcp");
    if (validRecords.length < 1) return null;
    const firstValidRecord = validRecords[0];
    if (!firstValidRecord.hasOwnProperty("target")) return null;
    let tokenFileUrl = firstValidRecord.target;
    if (tokenFileUrl.startsWith("https")) ;
    else if (tokenFileUrl.startsWith("http")) ;
    else tokenFileUrl = `https://${tokenFileUrl}`;
    return tokenFileUrl;
}
function resolveZoneFileToProfile(zoneFile, publicKeyOrAddress, fetchFn = (0, _network.createFetchFn)()) {
    return new Promise((resolve, reject)=>{
        let zoneFileJson = null;
        try {
            zoneFileJson = (0, _zoneFile.parseZoneFile)(zoneFile);
            if (!zoneFileJson.hasOwnProperty("$origin")) zoneFileJson = null;
        } catch (e) {
            reject(e);
        }
        let tokenFileUrl = null;
        if (zoneFileJson && Object.keys(zoneFileJson).length > 0) tokenFileUrl = getTokenFileUrl(zoneFileJson);
        else try {
            return resolve(Person.fromLegacyFormat(JSON.parse(zoneFile)).profile());
        } catch (error) {
            return reject(error);
        }
        if (tokenFileUrl) fetchFn(tokenFileUrl).then((response)=>response.text()).then((responseText)=>JSON.parse(responseText)).then((responseJson)=>{
            const tokenRecords = responseJson;
            const profile = (0, _profileTokens.extractProfile)(tokenRecords[0].token, publicKeyOrAddress);
            resolve(profile);
        }).catch((error)=>{
            (0, _common.Logger).error(`resolveZoneFileToProfile: error fetching token file ${tokenFileUrl}: ${error}`);
            reject(error);
        });
        else {
            (0, _common.Logger).debug("Token file url not found. Resolving to blank profile.");
            resolve({});
        }
    });
}

},{"./profileTokens":"bP3ss","./profileSchemas":"dncj1","./profileSchemas/personUtils":"5X9R2","zone-file":"eN4Z7","schema-inspector":"l8kCr","@stacks/common":"5ZsuO","@stacks/network":"c5pLF","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bP3ss":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "signProfileToken", ()=>signProfileToken);
parcelHelpers.export(exports, "wrapProfileToken", ()=>wrapProfileToken);
parcelHelpers.export(exports, "verifyProfileToken", ()=>verifyProfileToken);
parcelHelpers.export(exports, "extractProfile", ()=>extractProfile);
var _jsontokens = require("jsontokens");
var _common = require("@stacks/common");
var _transactions = require("@stacks/transactions");
function signProfileToken(profile, privateKey, subject, issuer, signingAlgorithm = "ES256K", issuedAt = new Date(), expiresAt = (0, _common.nextYear)()) {
    if (signingAlgorithm !== "ES256K") throw new Error("Signing algorithm not supported");
    const publicKey = (0, _jsontokens.SECP256K1Client).derivePublicKey(privateKey);
    if (!subject) subject = {
        publicKey
    };
    if (!issuer) issuer = {
        publicKey
    };
    const tokenSigner = new (0, _jsontokens.TokenSigner)(signingAlgorithm, privateKey);
    const payload = {
        jti: (0, _common.makeUUID4)(),
        iat: issuedAt.toISOString(),
        exp: expiresAt.toISOString(),
        subject,
        issuer,
        claim: profile
    };
    return tokenSigner.sign(payload);
}
function wrapProfileToken(token) {
    return {
        token,
        decodedToken: (0, _jsontokens.decodeToken)(token)
    };
}
function verifyProfileToken(token, publicKeyOrAddress) {
    const decodedToken = (0, _jsontokens.decodeToken)(token);
    const payload = decodedToken.payload;
    if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
    if (payload.hasOwnProperty("subject") && payload.subject) {
        if (!payload.subject.hasOwnProperty("publicKey")) throw new Error("Token doesn't have a subject public key");
    } else throw new Error("Token doesn't have a subject");
    if (payload.hasOwnProperty("issuer") && payload.issuer) {
        if (!payload.issuer.hasOwnProperty("publicKey")) throw new Error("Token doesn't have an issuer public key");
    } else throw new Error("Token doesn't have an issuer");
    if (!payload.hasOwnProperty("claim")) throw new Error("Token doesn't have a claim");
    const issuerPublicKey = payload.issuer.publicKey;
    const address = (0, _transactions.getAddressFromPublicKey)(issuerPublicKey);
    if (publicKeyOrAddress === issuerPublicKey) ;
    else if (publicKeyOrAddress === address) ;
    else throw new Error("Token issuer public key does not match the verifying value");
    const tokenVerifier = new (0, _jsontokens.TokenVerifier)(decodedToken.header.alg, issuerPublicKey);
    if (!tokenVerifier) throw new Error("Invalid token verifier");
    const tokenVerified = tokenVerifier.verify(token);
    if (!tokenVerified) throw new Error("Token verification failed");
    return decodedToken;
}
function extractProfile(token, publicKeyOrAddress = null) {
    let decodedToken;
    if (publicKeyOrAddress) decodedToken = verifyProfileToken(token, publicKeyOrAddress);
    else decodedToken = (0, _jsontokens.decodeToken)(token);
    let profile = {};
    if (decodedToken.hasOwnProperty("payload")) {
        const payload = decodedToken.payload;
        if (typeof payload === "string") throw new Error("Unexpected token payload type of string");
        if (payload.hasOwnProperty("claim")) profile = payload.claim;
    }
    return profile;
}

},{"jsontokens":"7yDiP","@stacks/common":"5ZsuO","@stacks/transactions":"fsnm1","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fsnm1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emptyMessageSignature", ()=>(0, _authorization.emptyMessageSignature));
parcelHelpers.export(exports, "isSingleSig", ()=>(0, _authorization.isSingleSig));
parcelHelpers.export(exports, "BytesReader", ()=>(0, _bytesReader.BytesReader));
parcelHelpers.export(exports, "isCoinbasePayload", ()=>(0, _payload.isCoinbasePayload));
parcelHelpers.export(exports, "isContractCallPayload", ()=>(0, _payload.isContractCallPayload));
parcelHelpers.export(exports, "isPoisonPayload", ()=>(0, _payload.isPoisonPayload));
parcelHelpers.export(exports, "isSmartContractPayload", ()=>(0, _payload.isSmartContractPayload));
parcelHelpers.export(exports, "isTokenTransferPayload", ()=>(0, _payload.isTokenTransferPayload));
parcelHelpers.export(exports, "serializePayload", ()=>(0, _payload.serializePayload));
parcelHelpers.export(exports, "createFungiblePostCondition", ()=>(0, _postcondition.createFungiblePostCondition));
parcelHelpers.export(exports, "createNonFungiblePostCondition", ()=>(0, _postcondition.createNonFungiblePostCondition));
parcelHelpers.export(exports, "createSTXPostCondition", ()=>(0, _postcondition.createSTXPostCondition));
parcelHelpers.export(exports, "StacksTransaction", ()=>(0, _transaction.StacksTransaction));
parcelHelpers.export(exports, "deserializeTransaction", ()=>(0, _transaction.deserializeTransaction));
parcelHelpers.export(exports, "Cl", ()=>_cl);
parcelHelpers.export(exports, "Pc", ()=>_pc);
var _authorization = require("./authorization");
parcelHelpers.exportAll(_authorization, exports);
var _builders = require("./builders");
parcelHelpers.exportAll(_builders, exports);
var _bytesReader = require("./bytesReader");
var _cl = require("./cl");
var _clarity = require("./clarity");
parcelHelpers.exportAll(_clarity, exports);
var _common = require("./common");
parcelHelpers.exportAll(_common, exports);
var _constants = require("./constants");
parcelHelpers.exportAll(_constants, exports);
var _contractAbi = require("./contract-abi");
parcelHelpers.exportAll(_contractAbi, exports);
var _keys = require("./keys");
parcelHelpers.exportAll(_keys, exports);
var _payload = require("./payload");
var _pc = require("./pc");
var _postcondition = require("./postcondition");
var _postconditionTypes = require("./postcondition-types");
parcelHelpers.exportAll(_postconditionTypes, exports);
var _signature = require("./signature");
parcelHelpers.exportAll(_signature, exports);
var _signer = require("./signer");
parcelHelpers.exportAll(_signer, exports);
var _structuredDataSignature = require("./structuredDataSignature");
parcelHelpers.exportAll(_structuredDataSignature, exports);
var _transaction = require("./transaction");
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);
var _utils = require("./utils");
parcelHelpers.exportAll(_utils, exports);

},{"./authorization":"bWLju","./builders":"cK3Rm","./bytesReader":"jwb3p","./cl":"7csM6","./clarity":"b9yzg","./common":"4nRU0","./constants":"j9zsK","./contract-abi":"3mu4l","./keys":"3QnZl","./payload":"3ZhF7","./pc":"hPbJx","./postcondition":"kMlp5","./postcondition-types":"dlZDM","./signature":"cOhwv","./signer":"kfMtV","./structuredDataSignature":"8HeJL","./transaction":"88rp8","./types":"3kaPf","./utils":"iOZqx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"bWLju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emptyMessageSignature", ()=>emptyMessageSignature);
parcelHelpers.export(exports, "createSingleSigSpendingCondition", ()=>createSingleSigSpendingCondition);
parcelHelpers.export(exports, "createMultiSigSpendingCondition", ()=>createMultiSigSpendingCondition);
parcelHelpers.export(exports, "isSingleSig", ()=>isSingleSig);
parcelHelpers.export(exports, "serializeSingleSigSpendingCondition", ()=>serializeSingleSigSpendingCondition);
parcelHelpers.export(exports, "serializeMultiSigSpendingCondition", ()=>serializeMultiSigSpendingCondition);
parcelHelpers.export(exports, "deserializeSingleSigSpendingCondition", ()=>deserializeSingleSigSpendingCondition);
parcelHelpers.export(exports, "deserializeMultiSigSpendingCondition", ()=>deserializeMultiSigSpendingCondition);
parcelHelpers.export(exports, "serializeSpendingCondition", ()=>serializeSpendingCondition);
parcelHelpers.export(exports, "deserializeSpendingCondition", ()=>deserializeSpendingCondition);
parcelHelpers.export(exports, "makeSigHashPreSign", ()=>makeSigHashPreSign);
parcelHelpers.export(exports, "nextSignature", ()=>nextSignature);
parcelHelpers.export(exports, "nextVerification", ()=>nextVerification);
parcelHelpers.export(exports, "createStandardAuth", ()=>createStandardAuth);
parcelHelpers.export(exports, "createSponsoredAuth", ()=>createSponsoredAuth);
parcelHelpers.export(exports, "intoInitialSighashAuth", ()=>intoInitialSighashAuth);
parcelHelpers.export(exports, "verifyOrigin", ()=>verifyOrigin);
parcelHelpers.export(exports, "setFee", ()=>setFee);
parcelHelpers.export(exports, "getFee", ()=>getFee);
parcelHelpers.export(exports, "setNonce", ()=>setNonce);
parcelHelpers.export(exports, "setSponsorNonce", ()=>setSponsorNonce);
parcelHelpers.export(exports, "setSponsor", ()=>setSponsor);
parcelHelpers.export(exports, "serializeAuthorization", ()=>serializeAuthorization);
parcelHelpers.export(exports, "deserializeAuthorization", ()=>deserializeAuthorization);
var _common = require("@stacks/common");
var _constants = require("./constants");
var _utils = require("./utils");
var _signature = require("./signature");
var _types = require("./types");
var _keys = require("./keys");
var _errors = require("./errors");
function emptyMessageSignature() {
    return {
        type: (0, _constants.StacksMessageType).MessageSignature,
        data: (0, _common.bytesToHex)(new Uint8Array((0, _constants.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)))
    };
}
function createSingleSigSpendingCondition(hashMode, pubKey, nonce, fee) {
    const signer = (0, _types.addressFromPublicKeys)(0, hashMode, 1, [
        (0, _keys.createStacksPublicKey)(pubKey)
    ]).hash160;
    const keyEncoding = (0, _keys.isCompressed)((0, _keys.createStacksPublicKey)(pubKey)) ? (0, _constants.PubKeyEncoding).Compressed : (0, _constants.PubKeyEncoding).Uncompressed;
    return {
        hashMode,
        signer,
        nonce: (0, _common.intToBigInt)(nonce, false),
        fee: (0, _common.intToBigInt)(fee, false),
        keyEncoding,
        signature: emptyMessageSignature()
    };
}
function createMultiSigSpendingCondition(hashMode, numSigs, pubKeys, nonce, fee) {
    const stacksPublicKeys = pubKeys.map((0, _keys.createStacksPublicKey));
    const signer = (0, _types.addressFromPublicKeys)(0, hashMode, numSigs, stacksPublicKeys).hash160;
    return {
        hashMode,
        signer,
        nonce: (0, _common.intToBigInt)(nonce, false),
        fee: (0, _common.intToBigInt)(fee, false),
        fields: [],
        signaturesRequired: numSigs
    };
}
function isSingleSig(condition) {
    return "signature" in condition;
}
function clearCondition(condition) {
    const cloned = (0, _utils.cloneDeep)(condition);
    cloned.nonce = 0;
    cloned.fee = 0;
    if (isSingleSig(cloned)) cloned.signature = emptyMessageSignature();
    else cloned.fields = [];
    return {
        ...cloned,
        nonce: BigInt(0),
        fee: BigInt(0)
    };
}
function serializeSingleSigSpendingCondition(condition) {
    const bytesArray = [
        condition.hashMode,
        (0, _common.hexToBytes)(condition.signer),
        (0, _common.intToBytes)(condition.nonce, false, 8),
        (0, _common.intToBytes)(condition.fee, false, 8),
        condition.keyEncoding,
        (0, _signature.serializeMessageSignature)(condition.signature)
    ];
    return (0, _common.concatArray)(bytesArray);
}
function serializeMultiSigSpendingCondition(condition) {
    const bytesArray = [
        condition.hashMode,
        (0, _common.hexToBytes)(condition.signer),
        (0, _common.intToBytes)(condition.nonce, false, 8),
        (0, _common.intToBytes)(condition.fee, false, 8)
    ];
    const fields = (0, _types.createLPList)(condition.fields);
    bytesArray.push((0, _types.serializeLPList)(fields));
    const numSigs = new Uint8Array(2);
    (0, _common.writeUInt16BE)(numSigs, condition.signaturesRequired, 0);
    bytesArray.push(numSigs);
    return (0, _common.concatArray)(bytesArray);
}
function deserializeSingleSigSpendingCondition(hashMode, bytesReader) {
    const signer = (0, _common.bytesToHex)(bytesReader.readBytes(20));
    const nonce = BigInt(`0x${(0, _common.bytesToHex)(bytesReader.readBytes(8))}`);
    const fee = BigInt(`0x${(0, _common.bytesToHex)(bytesReader.readBytes(8))}`);
    const keyEncoding = bytesReader.readUInt8Enum((0, _constants.PubKeyEncoding), (n)=>{
        throw new (0, _errors.DeserializationError)(`Could not parse ${n} as PubKeyEncoding`);
    });
    if (hashMode === (0, _constants.AddressHashMode).SerializeP2WPKH && keyEncoding != (0, _constants.PubKeyEncoding).Compressed) throw new (0, _errors.DeserializationError)("Failed to parse singlesig spending condition: incomaptible hash mode and key encoding");
    const signature = (0, _signature.deserializeMessageSignature)(bytesReader);
    return {
        hashMode,
        signer,
        nonce,
        fee,
        keyEncoding,
        signature
    };
}
function deserializeMultiSigSpendingCondition(hashMode, bytesReader) {
    const signer = (0, _common.bytesToHex)(bytesReader.readBytes(20));
    const nonce = BigInt("0x" + (0, _common.bytesToHex)(bytesReader.readBytes(8)));
    const fee = BigInt("0x" + (0, _common.bytesToHex)(bytesReader.readBytes(8)));
    const fields = (0, _types.deserializeLPList)(bytesReader, (0, _constants.StacksMessageType).TransactionAuthField).values;
    let haveUncompressed = false;
    let numSigs = 0;
    for (const field of fields)switch(field.contents.type){
        case (0, _constants.StacksMessageType).PublicKey:
            if (!(0, _keys.isCompressed)(field.contents)) haveUncompressed = true;
            break;
        case (0, _constants.StacksMessageType).MessageSignature:
            if (field.pubKeyEncoding === (0, _constants.PubKeyEncoding).Uncompressed) haveUncompressed = true;
            numSigs += 1;
            if (numSigs === 65536) throw new (0, _errors.VerificationError)("Failed to parse multisig spending condition: too many signatures");
            break;
    }
    const signaturesRequired = bytesReader.readUInt16BE();
    if (haveUncompressed && hashMode === (0, _constants.AddressHashMode).SerializeP2SH) throw new (0, _errors.VerificationError)("Uncompressed keys are not allowed in this hash mode");
    return {
        hashMode,
        signer,
        nonce,
        fee,
        fields,
        signaturesRequired
    };
}
function serializeSpendingCondition(condition) {
    if (isSingleSig(condition)) return serializeSingleSigSpendingCondition(condition);
    return serializeMultiSigSpendingCondition(condition);
}
function deserializeSpendingCondition(bytesReader) {
    const hashMode = bytesReader.readUInt8Enum((0, _constants.AddressHashMode), (n)=>{
        throw new (0, _errors.DeserializationError)(`Could not parse ${n} as AddressHashMode`);
    });
    if (hashMode === (0, _constants.AddressHashMode).SerializeP2PKH || hashMode === (0, _constants.AddressHashMode).SerializeP2WPKH) return deserializeSingleSigSpendingCondition(hashMode, bytesReader);
    else return deserializeMultiSigSpendingCondition(hashMode, bytesReader);
}
function makeSigHashPreSign(curSigHash, authType, fee, nonce) {
    const hashLength = 49;
    const sigHash = curSigHash + (0, _common.bytesToHex)(new Uint8Array([
        authType
    ])) + (0, _common.bytesToHex)((0, _common.intToBytes)(fee, false, 8)) + (0, _common.bytesToHex)((0, _common.intToBytes)(nonce, false, 8));
    if ((0, _common.hexToBytes)(sigHash).byteLength !== hashLength) throw Error("Invalid signature hash length");
    return (0, _utils.txidFromData)((0, _common.hexToBytes)(sigHash));
}
function makeSigHashPostSign(curSigHash, pubKey, signature) {
    const hashLength = 33 + (0, _constants.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES);
    const pubKeyEncoding = (0, _keys.isCompressed)(pubKey) ? (0, _constants.PubKeyEncoding).Compressed : (0, _constants.PubKeyEncoding).Uncompressed;
    const sigHash = curSigHash + (0, _utils.leftPadHex)(pubKeyEncoding.toString(16)) + signature.data;
    const sigHashBytes = (0, _common.hexToBytes)(sigHash);
    if (sigHashBytes.byteLength > hashLength) throw Error("Invalid signature hash length");
    return (0, _utils.txidFromData)(sigHashBytes);
}
function nextSignature(curSigHash, authType, fee, nonce, privateKey) {
    const sigHashPreSign = makeSigHashPreSign(curSigHash, authType, fee, nonce);
    const signature = (0, _keys.signWithKey)(privateKey, sigHashPreSign);
    const publicKey = (0, _keys.getPublicKey)(privateKey);
    const nextSigHash = makeSigHashPostSign(sigHashPreSign, publicKey, signature);
    return {
        nextSig: signature,
        nextSigHash
    };
}
function nextVerification(initialSigHash, authType, fee, nonce, pubKeyEncoding, signature) {
    const sigHashPreSign = makeSigHashPreSign(initialSigHash, authType, fee, nonce);
    const publicKey = (0, _keys.createStacksPublicKey)((0, _keys.publicKeyFromSignatureVrs)(sigHashPreSign, signature, pubKeyEncoding));
    const nextSigHash = makeSigHashPostSign(sigHashPreSign, publicKey, signature);
    return {
        pubKey: publicKey,
        nextSigHash
    };
}
function newInitialSigHash() {
    const spendingCondition = createSingleSigSpendingCondition((0, _constants.AddressHashMode).SerializeP2PKH, "", 0, 0);
    spendingCondition.signer = (0, _types.createEmptyAddress)().hash160;
    spendingCondition.keyEncoding = (0, _constants.PubKeyEncoding).Compressed;
    spendingCondition.signature = emptyMessageSignature();
    return spendingCondition;
}
function verify(condition, initialSigHash, authType) {
    if (isSingleSig(condition)) return verifySingleSig(condition, initialSigHash, authType);
    else return verifyMultiSig(condition, initialSigHash, authType);
}
function verifySingleSig(condition, initialSigHash, authType) {
    const { pubKey , nextSigHash  } = nextVerification(initialSigHash, authType, condition.fee, condition.nonce, condition.keyEncoding, condition.signature);
    const addrBytes = (0, _types.addressFromPublicKeys)(0, condition.hashMode, 1, [
        pubKey
    ]).hash160;
    if (addrBytes !== condition.signer) throw new (0, _errors.VerificationError)(`Signer hash does not equal hash of public key(s): ${addrBytes} != ${condition.signer}`);
    return nextSigHash;
}
function verifyMultiSig(condition, initialSigHash, authType) {
    const publicKeys = [];
    let curSigHash = initialSigHash;
    let haveUncompressed = false;
    let numSigs = 0;
    for (const field of condition.fields){
        let foundPubKey;
        switch(field.contents.type){
            case (0, _constants.StacksMessageType).PublicKey:
                if (!(0, _keys.isCompressed)(field.contents)) haveUncompressed = true;
                foundPubKey = field.contents;
                break;
            case (0, _constants.StacksMessageType).MessageSignature:
                if (field.pubKeyEncoding === (0, _constants.PubKeyEncoding).Uncompressed) haveUncompressed = true;
                const { pubKey , nextSigHash  } = nextVerification(curSigHash, authType, condition.fee, condition.nonce, field.pubKeyEncoding, field.contents);
                curSigHash = nextSigHash;
                foundPubKey = pubKey;
                numSigs += 1;
                if (numSigs === 65536) throw new (0, _errors.VerificationError)("Too many signatures");
                break;
        }
        publicKeys.push(foundPubKey);
    }
    if (numSigs !== condition.signaturesRequired) throw new (0, _errors.VerificationError)("Incorrect number of signatures");
    if (haveUncompressed && condition.hashMode === (0, _constants.AddressHashMode).SerializeP2SH) throw new (0, _errors.VerificationError)("Uncompressed keys are not allowed in this hash mode");
    const addrBytes = (0, _types.addressFromPublicKeys)(0, condition.hashMode, condition.signaturesRequired, publicKeys).hash160;
    if (addrBytes !== condition.signer) throw new (0, _errors.VerificationError)(`Signer hash does not equal hash of public key(s): ${addrBytes} != ${condition.signer}`);
    return curSigHash;
}
function createStandardAuth(spendingCondition) {
    return {
        authType: (0, _constants.AuthType).Standard,
        spendingCondition
    };
}
function createSponsoredAuth(spendingCondition, sponsorSpendingCondition) {
    return {
        authType: (0, _constants.AuthType).Sponsored,
        spendingCondition,
        sponsorSpendingCondition: sponsorSpendingCondition ? sponsorSpendingCondition : createSingleSigSpendingCondition((0, _constants.AddressHashMode).SerializeP2PKH, "0".repeat(66), 0, 0)
    };
}
function intoInitialSighashAuth(auth) {
    if (auth.spendingCondition) switch(auth.authType){
        case (0, _constants.AuthType).Standard:
            return createStandardAuth(clearCondition(auth.spendingCondition));
        case (0, _constants.AuthType).Sponsored:
            return createSponsoredAuth(clearCondition(auth.spendingCondition), newInitialSigHash());
        default:
            throw new (0, _errors.SigningError)("Unexpected authorization type for signing");
    }
    throw new Error("Authorization missing SpendingCondition");
}
function verifyOrigin(auth, initialSigHash) {
    switch(auth.authType){
        case (0, _constants.AuthType).Standard:
            return verify(auth.spendingCondition, initialSigHash, (0, _constants.AuthType).Standard);
        case (0, _constants.AuthType).Sponsored:
            return verify(auth.spendingCondition, initialSigHash, (0, _constants.AuthType).Standard);
        default:
            throw new (0, _errors.SigningError)("Invalid origin auth type");
    }
}
function setFee(auth, amount) {
    switch(auth.authType){
        case (0, _constants.AuthType).Standard:
            const spendingCondition = {
                ...auth.spendingCondition,
                fee: (0, _common.intToBigInt)(amount, false)
            };
            return {
                ...auth,
                spendingCondition
            };
        case (0, _constants.AuthType).Sponsored:
            const sponsorSpendingCondition = {
                ...auth.sponsorSpendingCondition,
                fee: (0, _common.intToBigInt)(amount, false)
            };
            return {
                ...auth,
                sponsorSpendingCondition
            };
    }
}
function getFee(auth) {
    switch(auth.authType){
        case (0, _constants.AuthType).Standard:
            return auth.spendingCondition.fee;
        case (0, _constants.AuthType).Sponsored:
            return auth.sponsorSpendingCondition.fee;
    }
}
function setNonce(auth, nonce) {
    const spendingCondition = {
        ...auth.spendingCondition,
        nonce: (0, _common.intToBigInt)(nonce, false)
    };
    return {
        ...auth,
        spendingCondition
    };
}
function setSponsorNonce(auth, nonce) {
    const sponsorSpendingCondition = {
        ...auth.sponsorSpendingCondition,
        nonce: (0, _common.intToBigInt)(nonce, false)
    };
    return {
        ...auth,
        sponsorSpendingCondition
    };
}
function setSponsor(auth, sponsorSpendingCondition) {
    const sc = {
        ...sponsorSpendingCondition,
        nonce: (0, _common.intToBigInt)(sponsorSpendingCondition.nonce, false),
        fee: (0, _common.intToBigInt)(sponsorSpendingCondition.fee, false)
    };
    return {
        ...auth,
        sponsorSpendingCondition: sc
    };
}
function serializeAuthorization(auth) {
    const bytesArray = [];
    bytesArray.push(auth.authType);
    switch(auth.authType){
        case (0, _constants.AuthType).Standard:
            bytesArray.push(serializeSpendingCondition(auth.spendingCondition));
            break;
        case (0, _constants.AuthType).Sponsored:
            bytesArray.push(serializeSpendingCondition(auth.spendingCondition));
            bytesArray.push(serializeSpendingCondition(auth.sponsorSpendingCondition));
            break;
    }
    return (0, _common.concatArray)(bytesArray);
}
function deserializeAuthorization(bytesReader) {
    const authType = bytesReader.readUInt8Enum((0, _constants.AuthType), (n)=>{
        throw new (0, _errors.DeserializationError)(`Could not parse ${n} as AuthType`);
    });
    let spendingCondition;
    switch(authType){
        case (0, _constants.AuthType).Standard:
            spendingCondition = deserializeSpendingCondition(bytesReader);
            return createStandardAuth(spendingCondition);
        case (0, _constants.AuthType).Sponsored:
            spendingCondition = deserializeSpendingCondition(bytesReader);
            const sponsorSpendingCondition = deserializeSpendingCondition(bytesReader);
            return createSponsoredAuth(spendingCondition, sponsorSpendingCondition);
    }
}

},{"@stacks/common":"5ZsuO","./constants":"j9zsK","./utils":"iOZqx","./signature":"cOhwv","./types":"3kaPf","./keys":"3QnZl","./errors":"39VaY","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"j9zsK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "whenMessageType", ()=>whenMessageType);
parcelHelpers.export(exports, "MAX_STRING_LENGTH_BYTES", ()=>MAX_STRING_LENGTH_BYTES);
parcelHelpers.export(exports, "CLARITY_INT_SIZE", ()=>CLARITY_INT_SIZE);
parcelHelpers.export(exports, "CLARITY_INT_BYTE_SIZE", ()=>CLARITY_INT_BYTE_SIZE);
parcelHelpers.export(exports, "COINBASE_BYTES_LENGTH", ()=>COINBASE_LENGTH_BYTES);
parcelHelpers.export(exports, "DEFAULT_CHAIN_ID", ()=>DEFAULT_CHAIN_ID);
parcelHelpers.export(exports, "DEFAULT_TRANSACTION_VERSION", ()=>DEFAULT_TRANSACTION_VERSION);
parcelHelpers.export(exports, "RECOVERABLE_ECDSA_SIG_LENGTH_BYTES", ()=>RECOVERABLE_ECDSA_SIG_LENGTH_BYTES);
parcelHelpers.export(exports, "COMPRESSED_PUBKEY_LENGTH_BYTES", ()=>COMPRESSED_PUBKEY_LENGTH_BYTES);
parcelHelpers.export(exports, "UNCOMPRESSED_PUBKEY_LENGTH_BYTES", ()=>UNCOMPRESSED_PUBKEY_LENGTH_BYTES);
parcelHelpers.export(exports, "MEMO_MAX_LENGTH_BYTES", ()=>MEMO_MAX_LENGTH_BYTES);
parcelHelpers.export(exports, "DEFAULT_CORE_NODE_API_URL", ()=>DEFAULT_CORE_NODE_API_URL);
parcelHelpers.export(exports, "ChainID", ()=>ChainID);
parcelHelpers.export(exports, "StacksMessageType", ()=>StacksMessageType);
parcelHelpers.export(exports, "PayloadType", ()=>PayloadType);
parcelHelpers.export(exports, "ClarityVersion", ()=>ClarityVersion);
parcelHelpers.export(exports, "AnchorMode", ()=>AnchorMode);
parcelHelpers.export(exports, "AnchorModeNames", ()=>AnchorModeNames);
parcelHelpers.export(exports, "anchorModeFromNameOrValue", ()=>anchorModeFromNameOrValue);
parcelHelpers.export(exports, "TransactionVersion", ()=>TransactionVersion);
parcelHelpers.export(exports, "PostConditionMode", ()=>PostConditionMode);
parcelHelpers.export(exports, "PostConditionType", ()=>PostConditionType);
parcelHelpers.export(exports, "PostConditionPrincipalID", ()=>PostConditionPrincipalID);
parcelHelpers.export(exports, "AuthType", ()=>AuthType);
parcelHelpers.export(exports, "AddressHashMode", ()=>AddressHashMode);
parcelHelpers.export(exports, "AddressVersion", ()=>AddressVersion);
parcelHelpers.export(exports, "PubKeyEncoding", ()=>PubKeyEncoding);
parcelHelpers.export(exports, "FungibleConditionCode", ()=>FungibleConditionCode);
parcelHelpers.export(exports, "NonFungibleConditionCode", ()=>NonFungibleConditionCode);
parcelHelpers.export(exports, "AssetType", ()=>AssetType);
parcelHelpers.export(exports, "TxRejectedReason", ()=>TxRejectedReason);
var ChainID;
(function(ChainID) {
    ChainID[ChainID["Testnet"] = 2147483648] = "Testnet";
    ChainID[ChainID["Mainnet"] = 1] = "Mainnet";
})(ChainID || (ChainID = {}));
const DEFAULT_CHAIN_ID = ChainID.Mainnet;
const MAX_STRING_LENGTH_BYTES = 128;
const CLARITY_INT_SIZE = 128;
const CLARITY_INT_BYTE_SIZE = 16;
const COINBASE_LENGTH_BYTES = 32;
const RECOVERABLE_ECDSA_SIG_LENGTH_BYTES = 65;
const COMPRESSED_PUBKEY_LENGTH_BYTES = 32;
const UNCOMPRESSED_PUBKEY_LENGTH_BYTES = 64;
const MEMO_MAX_LENGTH_BYTES = 34;
const DEFAULT_CORE_NODE_API_URL = "https://stacks-node-api.mainnet.stacks.co";
var StacksMessageType;
(function(StacksMessageType) {
    StacksMessageType[StacksMessageType["Address"] = 0] = "Address";
    StacksMessageType[StacksMessageType["Principal"] = 1] = "Principal";
    StacksMessageType[StacksMessageType["LengthPrefixedString"] = 2] = "LengthPrefixedString";
    StacksMessageType[StacksMessageType["MemoString"] = 3] = "MemoString";
    StacksMessageType[StacksMessageType["AssetInfo"] = 4] = "AssetInfo";
    StacksMessageType[StacksMessageType["PostCondition"] = 5] = "PostCondition";
    StacksMessageType[StacksMessageType["PublicKey"] = 6] = "PublicKey";
    StacksMessageType[StacksMessageType["LengthPrefixedList"] = 7] = "LengthPrefixedList";
    StacksMessageType[StacksMessageType["Payload"] = 8] = "Payload";
    StacksMessageType[StacksMessageType["MessageSignature"] = 9] = "MessageSignature";
    StacksMessageType[StacksMessageType["StructuredDataSignature"] = 10] = "StructuredDataSignature";
    StacksMessageType[StacksMessageType["TransactionAuthField"] = 11] = "TransactionAuthField";
})(StacksMessageType || (StacksMessageType = {}));
function whenMessageType(messageType) {
    return (messageTypeMap)=>messageTypeMap[messageType];
}
var PayloadType;
(function(PayloadType) {
    PayloadType[PayloadType["TokenTransfer"] = 0] = "TokenTransfer";
    PayloadType[PayloadType["SmartContract"] = 1] = "SmartContract";
    PayloadType[PayloadType["VersionedSmartContract"] = 6] = "VersionedSmartContract";
    PayloadType[PayloadType["ContractCall"] = 2] = "ContractCall";
    PayloadType[PayloadType["PoisonMicroblock"] = 3] = "PoisonMicroblock";
    PayloadType[PayloadType["Coinbase"] = 4] = "Coinbase";
    PayloadType[PayloadType["CoinbaseToAltRecipient"] = 5] = "CoinbaseToAltRecipient";
})(PayloadType || (PayloadType = {}));
var ClarityVersion;
(function(ClarityVersion) {
    ClarityVersion[ClarityVersion["Clarity1"] = 1] = "Clarity1";
    ClarityVersion[ClarityVersion["Clarity2"] = 2] = "Clarity2";
})(ClarityVersion || (ClarityVersion = {}));
var AnchorMode;
(function(AnchorMode) {
    AnchorMode[AnchorMode["OnChainOnly"] = 1] = "OnChainOnly";
    AnchorMode[AnchorMode["OffChainOnly"] = 2] = "OffChainOnly";
    AnchorMode[AnchorMode["Any"] = 3] = "Any";
})(AnchorMode || (AnchorMode = {}));
const AnchorModeNames = [
    "onChainOnly",
    "offChainOnly",
    "any"
];
const AnchorModeMap = {
    [AnchorModeNames[0]]: AnchorMode.OnChainOnly,
    [AnchorModeNames[1]]: AnchorMode.OffChainOnly,
    [AnchorModeNames[2]]: AnchorMode.Any,
    [AnchorMode.OnChainOnly]: AnchorMode.OnChainOnly,
    [AnchorMode.OffChainOnly]: AnchorMode.OffChainOnly,
    [AnchorMode.Any]: AnchorMode.Any
};
function anchorModeFromNameOrValue(mode) {
    if (mode in AnchorModeMap) return AnchorModeMap[mode];
    throw new Error(`Invalid anchor mode "${mode}", must be one of: ${AnchorModeNames.join(", ")}`);
}
var TransactionVersion;
(function(TransactionVersion) {
    TransactionVersion[TransactionVersion["Mainnet"] = 0] = "Mainnet";
    TransactionVersion[TransactionVersion["Testnet"] = 128] = "Testnet";
})(TransactionVersion || (TransactionVersion = {}));
const DEFAULT_TRANSACTION_VERSION = TransactionVersion.Mainnet;
var PostConditionMode;
(function(PostConditionMode) {
    PostConditionMode[PostConditionMode["Allow"] = 1] = "Allow";
    PostConditionMode[PostConditionMode["Deny"] = 2] = "Deny";
})(PostConditionMode || (PostConditionMode = {}));
var PostConditionType;
(function(PostConditionType) {
    PostConditionType[PostConditionType["STX"] = 0] = "STX";
    PostConditionType[PostConditionType["Fungible"] = 1] = "Fungible";
    PostConditionType[PostConditionType["NonFungible"] = 2] = "NonFungible";
})(PostConditionType || (PostConditionType = {}));
var AuthType;
(function(AuthType) {
    AuthType[AuthType["Standard"] = 4] = "Standard";
    AuthType[AuthType["Sponsored"] = 5] = "Sponsored";
})(AuthType || (AuthType = {}));
var AddressHashMode;
(function(AddressHashMode) {
    AddressHashMode[AddressHashMode["SerializeP2PKH"] = 0] = "SerializeP2PKH";
    AddressHashMode[AddressHashMode["SerializeP2SH"] = 1] = "SerializeP2SH";
    AddressHashMode[AddressHashMode["SerializeP2WPKH"] = 2] = "SerializeP2WPKH";
    AddressHashMode[AddressHashMode["SerializeP2WSH"] = 3] = "SerializeP2WSH";
})(AddressHashMode || (AddressHashMode = {}));
var AddressVersion;
(function(AddressVersion) {
    AddressVersion[AddressVersion["MainnetSingleSig"] = 22] = "MainnetSingleSig";
    AddressVersion[AddressVersion["MainnetMultiSig"] = 20] = "MainnetMultiSig";
    AddressVersion[AddressVersion["TestnetSingleSig"] = 26] = "TestnetSingleSig";
    AddressVersion[AddressVersion["TestnetMultiSig"] = 21] = "TestnetMultiSig";
})(AddressVersion || (AddressVersion = {}));
var PubKeyEncoding;
(function(PubKeyEncoding) {
    PubKeyEncoding[PubKeyEncoding["Compressed"] = 0] = "Compressed";
    PubKeyEncoding[PubKeyEncoding["Uncompressed"] = 1] = "Uncompressed";
})(PubKeyEncoding || (PubKeyEncoding = {}));
var FungibleConditionCode;
(function(FungibleConditionCode) {
    FungibleConditionCode[FungibleConditionCode["Equal"] = 1] = "Equal";
    FungibleConditionCode[FungibleConditionCode["Greater"] = 2] = "Greater";
    FungibleConditionCode[FungibleConditionCode["GreaterEqual"] = 3] = "GreaterEqual";
    FungibleConditionCode[FungibleConditionCode["Less"] = 4] = "Less";
    FungibleConditionCode[FungibleConditionCode["LessEqual"] = 5] = "LessEqual";
})(FungibleConditionCode || (FungibleConditionCode = {}));
var NonFungibleConditionCode;
(function(NonFungibleConditionCode) {
    NonFungibleConditionCode[NonFungibleConditionCode["Sends"] = 16] = "Sends";
    NonFungibleConditionCode[NonFungibleConditionCode["DoesNotSend"] = 17] = "DoesNotSend";
})(NonFungibleConditionCode || (NonFungibleConditionCode = {}));
var PostConditionPrincipalID;
(function(PostConditionPrincipalID) {
    PostConditionPrincipalID[PostConditionPrincipalID["Origin"] = 1] = "Origin";
    PostConditionPrincipalID[PostConditionPrincipalID["Standard"] = 2] = "Standard";
    PostConditionPrincipalID[PostConditionPrincipalID["Contract"] = 3] = "Contract";
})(PostConditionPrincipalID || (PostConditionPrincipalID = {}));
var AssetType;
(function(AssetType) {
    AssetType[AssetType["STX"] = 0] = "STX";
    AssetType[AssetType["Fungible"] = 1] = "Fungible";
    AssetType[AssetType["NonFungible"] = 2] = "NonFungible";
})(AssetType || (AssetType = {}));
var TxRejectedReason;
(function(TxRejectedReason) {
    TxRejectedReason["Serialization"] = "Serialization";
    TxRejectedReason["Deserialization"] = "Deserialization";
    TxRejectedReason["SignatureValidation"] = "SignatureValidation";
    TxRejectedReason["FeeTooLow"] = "FeeTooLow";
    TxRejectedReason["BadNonce"] = "BadNonce";
    TxRejectedReason["NotEnoughFunds"] = "NotEnoughFunds";
    TxRejectedReason["NoSuchContract"] = "NoSuchContract";
    TxRejectedReason["NoSuchPublicFunction"] = "NoSuchPublicFunction";
    TxRejectedReason["BadFunctionArgument"] = "BadFunctionArgument";
    TxRejectedReason["ContractAlreadyExists"] = "ContractAlreadyExists";
    TxRejectedReason["PoisonMicroblocksDoNotConflict"] = "PoisonMicroblocksDoNotConflict";
    TxRejectedReason["PoisonMicroblockHasUnknownPubKeyHash"] = "PoisonMicroblockHasUnknownPubKeyHash";
    TxRejectedReason["PoisonMicroblockIsInvalid"] = "PoisonMicroblockIsInvalid";
    TxRejectedReason["BadAddressVersionByte"] = "BadAddressVersionByte";
    TxRejectedReason["NoCoinbaseViaMempool"] = "NoCoinbaseViaMempool";
    TxRejectedReason["ServerFailureNoSuchChainTip"] = "ServerFailureNoSuchChainTip";
    TxRejectedReason["ServerFailureDatabase"] = "ServerFailureDatabase";
    TxRejectedReason["ServerFailureOther"] = "ServerFailureOther";
})(TxRejectedReason || (TxRejectedReason = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iOZqx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "verifySignature", ()=>(0, _secp256K1.verify));
parcelHelpers.export(exports, "randomBytes", ()=>randomBytes);
parcelHelpers.export(exports, "leftPadHex", ()=>leftPadHex);
parcelHelpers.export(exports, "leftPadHexToLength", ()=>leftPadHexToLength);
parcelHelpers.export(exports, "rightPadHexToLength", ()=>rightPadHexToLength);
parcelHelpers.export(exports, "exceedsMaxLengthBytes", ()=>exceedsMaxLengthBytes);
parcelHelpers.export(exports, "cloneDeep", ()=>cloneDeep);
parcelHelpers.export(exports, "omit", ()=>omit);
parcelHelpers.export(exports, "txidFromData", ()=>txidFromData);
parcelHelpers.export(exports, "hash160", ()=>hash160);
parcelHelpers.export(exports, "hashP2PKH", ()=>hashP2PKH);
parcelHelpers.export(exports, "hashP2WPKH", ()=>hashP2WPKH);
parcelHelpers.export(exports, "hashP2SH", ()=>hashP2SH);
parcelHelpers.export(exports, "hashP2WSH", ()=>hashP2WSH);
parcelHelpers.export(exports, "isClarityName", ()=>isClarityName);
parcelHelpers.export(exports, "cvToHex", ()=>cvToHex);
parcelHelpers.export(exports, "hexToCV", ()=>hexToCV);
parcelHelpers.export(exports, "parseReadOnlyResponse", ()=>parseReadOnlyResponse);
parcelHelpers.export(exports, "validateStacksAddress", ()=>validateStacksAddress);
parcelHelpers.export(exports, "validateTxId", ()=>validateTxId);
var _ripemd160 = require("@noble/hashes/ripemd160");
var _sha256 = require("@noble/hashes/sha256");
var _sha512 = require("@noble/hashes/sha512");
var _secp256K1 = require("@noble/secp256k1");
var _common = require("@stacks/common");
var _c32Check = require("c32check");
var _lodashClonedeep = require("lodash.clonedeep");
var _lodashClonedeepDefault = parcelHelpers.interopDefault(_lodashClonedeep);
var _clarity = require("./clarity");
const randomBytes = (bytesLength)=>(0, _secp256K1.utils).randomBytes(bytesLength);
const leftPadHex = (hexString)=>hexString.length % 2 == 0 ? hexString : `0${hexString}`;
const leftPadHexToLength = (hexString, length)=>hexString.padStart(length, "0");
const rightPadHexToLength = (hexString, length)=>hexString.padEnd(length, "0");
const exceedsMaxLengthBytes = (string, maxLengthBytes)=>string ? (0, _common.utf8ToBytes)(string).length > maxLengthBytes : false;
function cloneDeep(obj) {
    return (0, _lodashClonedeepDefault.default)(obj);
}
function omit(obj, prop) {
    const clone = cloneDeep(obj);
    delete clone[prop];
    return clone;
}
const txidFromData = (data)=>{
    return (0, _common.bytesToHex)((0, _sha512.sha512_256)(data));
};
const hash160 = (input)=>{
    return (0, _ripemd160.ripemd160)((0, _sha256.sha256)(input));
};
const hashP2PKH = (input)=>{
    return (0, _common.bytesToHex)(hash160(input));
};
const hashP2WPKH = (input)=>{
    const keyHash = hash160(input);
    const redeemScript = (0, _common.concatBytes)(new Uint8Array([
        0
    ]), new Uint8Array([
        keyHash.length
    ]), keyHash);
    const redeemScriptHash = hash160(redeemScript);
    return (0, _common.bytesToHex)(redeemScriptHash);
};
const hashP2SH = (numSigs, pubKeys)=>{
    if (numSigs > 15 || pubKeys.length > 15) throw Error("P2SH multisig address can only contain up to 15 public keys");
    const bytesArray = [];
    bytesArray.push(80 + numSigs);
    pubKeys.forEach((pubKey)=>{
        bytesArray.push(pubKey.length);
        bytesArray.push(pubKey);
    });
    bytesArray.push(80 + pubKeys.length);
    bytesArray.push(174);
    const redeemScript = (0, _common.concatArray)(bytesArray);
    const redeemScriptHash = hash160(redeemScript);
    return (0, _common.bytesToHex)(redeemScriptHash);
};
const hashP2WSH = (numSigs, pubKeys)=>{
    if (numSigs > 15 || pubKeys.length > 15) throw Error("P2WSH multisig address can only contain up to 15 public keys");
    const scriptArray = [];
    scriptArray.push(80 + numSigs);
    pubKeys.forEach((pubKey)=>{
        scriptArray.push(pubKey.length);
        scriptArray.push(pubKey);
    });
    scriptArray.push(80 + pubKeys.length);
    scriptArray.push(174);
    const script = (0, _common.concatArray)(scriptArray);
    const digest = (0, _sha256.sha256)(script);
    const bytesArray = [];
    bytesArray.push(0);
    bytesArray.push(digest.length);
    bytesArray.push(digest);
    const redeemScript = (0, _common.concatArray)(bytesArray);
    const redeemScriptHash = hash160(redeemScript);
    return (0, _common.bytesToHex)(redeemScriptHash);
};
function isClarityName(name) {
    const regex = /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/;
    return regex.test(name) && name.length < 128;
}
function cvToHex(cv) {
    const serialized = (0, _clarity.serializeCV)(cv);
    return `0x${(0, _common.bytesToHex)(serialized)}`;
}
function hexToCV(hex) {
    return (0, _clarity.deserializeCV)(hex);
}
const parseReadOnlyResponse = (response)=>{
    if (response.okay) return hexToCV(response.result);
    throw new Error(response.cause);
};
const validateStacksAddress = (stacksAddress)=>{
    try {
        (0, _c32Check.c32addressDecode)(stacksAddress);
        return true;
    } catch (e) {
        return false;
    }
};
const validateTxId = (txid)=>{
    if (txid === "success") return true;
    const value = (0, _common.with0x)(txid).toLowerCase();
    if (value.length !== 66) return false;
    return (0, _common.with0x)(BigInt(value).toString(16).padStart(64, "0")) === value;
};

},{"@noble/hashes/ripemd160":"hb7Go","@noble/hashes/sha256":"JjjO8","@noble/hashes/sha512":"jlH7E","@noble/secp256k1":"eyYsH","@stacks/common":"5ZsuO","c32check":"hm0s8","lodash.clonedeep":"i3u1q","./clarity":"b9yzg","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hm0s8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.b58ToC32 = exports.c32ToB58 = exports.versions = exports.c32normalize = exports.c32addressDecode = exports.c32address = exports.c32checkDecode = exports.c32checkEncode = exports.c32decode = exports.c32encode = void 0;
const encoding_1 = require("6dd63543ae6b91f7");
Object.defineProperty(exports, "c32encode", {
    enumerable: true,
    get: function() {
        return encoding_1.c32encode;
    }
});
Object.defineProperty(exports, "c32decode", {
    enumerable: true,
    get: function() {
        return encoding_1.c32decode;
    }
});
Object.defineProperty(exports, "c32normalize", {
    enumerable: true,
    get: function() {
        return encoding_1.c32normalize;
    }
});
const checksum_1 = require("70488135f2eeb58c");
Object.defineProperty(exports, "c32checkEncode", {
    enumerable: true,
    get: function() {
        return checksum_1.c32checkEncode;
    }
});
Object.defineProperty(exports, "c32checkDecode", {
    enumerable: true,
    get: function() {
        return checksum_1.c32checkDecode;
    }
});
const address_1 = require("6c2f9b5da78f452d");
Object.defineProperty(exports, "c32address", {
    enumerable: true,
    get: function() {
        return address_1.c32address;
    }
});
Object.defineProperty(exports, "c32addressDecode", {
    enumerable: true,
    get: function() {
        return address_1.c32addressDecode;
    }
});
Object.defineProperty(exports, "c32ToB58", {
    enumerable: true,
    get: function() {
        return address_1.c32ToB58;
    }
});
Object.defineProperty(exports, "b58ToC32", {
    enumerable: true,
    get: function() {
        return address_1.b58ToC32;
    }
});
Object.defineProperty(exports, "versions", {
    enumerable: true,
    get: function() {
        return address_1.versions;
    }
});

},{"6dd63543ae6b91f7":"jRhwP","70488135f2eeb58c":"gcgqB","6c2f9b5da78f452d":"1K3aA"}],"jRhwP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.c32decode = exports.c32normalize = exports.c32encode = exports.c32 = void 0;
const utils_1 = require("403be68becf78c26");
exports.c32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const hex = "0123456789abcdef";
/**
 * Encode a hex string as a c32 string.  Note that the hex string is assumed
 * to be big-endian (and the resulting c32 string will be as well).
 * @param {string} inputHex - the input to encode
 * @param {number} minLength - the minimum length of the c32 string
 * @returns {string} the c32check-encoded representation of the data, as a string
 */ function c32encode(inputHex, minLength) {
    // must be hex
    if (!inputHex.match(/^[0-9a-fA-F]*$/)) throw new Error("Not a hex-encoded string");
    if (inputHex.length % 2 !== 0) inputHex = `0${inputHex}`;
    inputHex = inputHex.toLowerCase();
    let res = [];
    let carry = 0;
    for(let i = inputHex.length - 1; i >= 0; i--)if (carry < 4) {
        const currentCode = hex.indexOf(inputHex[i]) >> carry;
        let nextCode = 0;
        if (i !== 0) nextCode = hex.indexOf(inputHex[i - 1]);
        // carry = 0, nextBits is 1, carry = 1, nextBits is 2
        const nextBits = 1 + carry;
        const nextLowBits = nextCode % (1 << nextBits) << 5 - nextBits;
        const curC32Digit = exports.c32[currentCode + nextLowBits];
        carry = nextBits;
        res.unshift(curC32Digit);
    } else carry = 0;
    let C32leadingZeros = 0;
    for(let i = 0; i < res.length; i++){
        if (res[i] !== "0") break;
        else C32leadingZeros++;
    }
    res = res.slice(C32leadingZeros);
    const zeroPrefix = new TextDecoder().decode((0, utils_1.hexToBytes)(inputHex)).match(/^\u0000*/);
    const numLeadingZeroBytesInHex = zeroPrefix ? zeroPrefix[0].length : 0;
    for(let i = 0; i < numLeadingZeroBytesInHex; i++)res.unshift(exports.c32[0]);
    if (minLength) {
        const count = minLength - res.length;
        for(let i = 0; i < count; i++)res.unshift(exports.c32[0]);
    }
    return res.join("");
}
exports.c32encode = c32encode;
/*
 * Normalize a c32 string
 * @param {string} c32input - the c32-encoded input string
 * @returns {string} the canonical representation of the c32 input string
 */ function c32normalize(c32input) {
    // must be upper-case
    // replace all O's with 0's
    // replace all I's and L's with 1's
    return c32input.toUpperCase().replace(/O/g, "0").replace(/L|I/g, "1");
}
exports.c32normalize = c32normalize;
/*
 * Decode a c32 string back into a hex string.  Note that the c32 input
 * string is assumed to be big-endian (and the resulting hex string will
 * be as well).
 * @param {string} c32input - the c32-encoded input to decode
 * @param {number} minLength - the minimum length of the output hex string (in bytes)
 * @returns {string} the hex-encoded representation of the data, as a string
 */ function c32decode(c32input, minLength) {
    c32input = c32normalize(c32input);
    // must result in a c32 string
    if (!c32input.match(`^[${exports.c32}]*$`)) throw new Error("Not a c32-encoded string");
    const zeroPrefix = c32input.match(`^${exports.c32[0]}*`);
    const numLeadingZeroBytes = zeroPrefix ? zeroPrefix[0].length : 0;
    let res = [];
    let carry = 0;
    let carryBits = 0;
    for(let i = c32input.length - 1; i >= 0; i--){
        if (carryBits === 4) {
            res.unshift(hex[carry]);
            carryBits = 0;
            carry = 0;
        }
        const currentCode = exports.c32.indexOf(c32input[i]) << carryBits;
        const currentValue = currentCode + carry;
        const currentHexDigit = hex[currentValue % 16];
        carryBits += 1;
        carry = currentValue >> 4;
        if (carry > 1 << carryBits) throw new Error("Panic error in decoding.");
        res.unshift(currentHexDigit);
    }
    // one last carry
    res.unshift(hex[carry]);
    if (res.length % 2 === 1) res.unshift("0");
    let hexLeadingZeros = 0;
    for(let i = 0; i < res.length; i++){
        if (res[i] !== "0") break;
        else hexLeadingZeros++;
    }
    res = res.slice(hexLeadingZeros - hexLeadingZeros % 2);
    let hexStr = res.join("");
    for(let i = 0; i < numLeadingZeroBytes; i++)hexStr = `00${hexStr}`;
    if (minLength) {
        const count = minLength * 2 - hexStr.length;
        for(let i = 0; i < count; i += 2)hexStr = `00${hexStr}`;
    }
    return hexStr;
}
exports.c32decode = c32decode;

},{"403be68becf78c26":"2ehgp"}],"gcgqB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.c32checkDecode = exports.c32checkEncode = void 0;
const sha256_1 = require("771b6f787ff17aae");
const utils_1 = require("83b559ef390cf51b");
const encoding_1 = require("29b68278cae6b435");
/**
 * Get the c32check checksum of a hex-encoded string
 * @param {string} dataHex - the hex string
 * @returns {string} the c32 checksum, as a bin-encoded string
 */ function c32checksum(dataHex) {
    const dataHash = (0, sha256_1.sha256)((0, sha256_1.sha256)((0, utils_1.hexToBytes)(dataHex)));
    const checksum = (0, utils_1.bytesToHex)(dataHash.slice(0, 4));
    return checksum;
}
/**
 * Encode a hex string as a c32check string.  This is a lot like how
 * base58check works in Bitcoin-land, but this algorithm uses the
 * z-base-32 alphabet instead of the base58 alphabet.  The algorithm
 * is as follows:
 * * calculate the c32checksum of version + data
 * * c32encode version + data + c32checksum
 * @param {number} version - the version string (between 0 and 31)
 * @param {string} data - the data to encode
 * @returns {string} the c32check representation
 */ function c32checkEncode(version, data) {
    if (version < 0 || version >= 32) throw new Error("Invalid version (must be between 0 and 31)");
    if (!data.match(/^[0-9a-fA-F]*$/)) throw new Error("Invalid data (not a hex string)");
    data = data.toLowerCase();
    if (data.length % 2 !== 0) data = `0${data}`;
    let versionHex = version.toString(16);
    if (versionHex.length === 1) versionHex = `0${versionHex}`;
    const checksumHex = c32checksum(`${versionHex}${data}`);
    const c32str = (0, encoding_1.c32encode)(`${data}${checksumHex}`);
    return `${encoding_1.c32[version]}${c32str}`;
}
exports.c32checkEncode = c32checkEncode;
/*
 * Decode a c32check string back into its version and data payload.  This is
 * a lot like how base58check works in Bitcoin-land, but this algorithm uses
 * the z-base-32 alphabet instead of the base58 alphabet.  The algorithm
 * is as follows:
 * * extract the version, data, and checksum
 * * verify the checksum matches c32checksum(version + data)
 * * return data
 * @param {string} c32data - the c32check-encoded string
 * @returns {array} [version (number), data (string)].  The returned data
 * will be a hex string.  Throws an exception if the checksum does not match.
 */ function c32checkDecode(c32data) {
    c32data = (0, encoding_1.c32normalize)(c32data);
    const dataHex = (0, encoding_1.c32decode)(c32data.slice(1));
    const versionChar = c32data[0];
    const version = encoding_1.c32.indexOf(versionChar);
    const checksum = dataHex.slice(-8);
    let versionHex = version.toString(16);
    if (versionHex.length === 1) versionHex = `0${versionHex}`;
    if (c32checksum(`${versionHex}${dataHex.substring(0, dataHex.length - 8)}`) !== checksum) throw new Error("Invalid c32check string: checksum mismatch");
    return [
        version,
        dataHex.substring(0, dataHex.length - 8)
    ];
}
exports.c32checkDecode = c32checkDecode;

},{"771b6f787ff17aae":"JjjO8","83b559ef390cf51b":"2ehgp","29b68278cae6b435":"jRhwP"}],"1K3aA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.c32ToB58 = exports.b58ToC32 = exports.c32addressDecode = exports.c32address = exports.versions = void 0;
const checksum_1 = require("3ecc449d77fe93ff");
const base58check = require("9d1bd47277462000");
const utils_1 = require("75b0b55fdfed069b");
exports.versions = {
    mainnet: {
        p2pkh: 22,
        p2sh: 20
    },
    testnet: {
        p2pkh: 26,
        p2sh: 21
    }
};
// address conversion : bitcoin to stacks
const ADDR_BITCOIN_TO_STACKS = {};
ADDR_BITCOIN_TO_STACKS[0] = exports.versions.mainnet.p2pkh;
ADDR_BITCOIN_TO_STACKS[5] = exports.versions.mainnet.p2sh;
ADDR_BITCOIN_TO_STACKS[111] = exports.versions.testnet.p2pkh;
ADDR_BITCOIN_TO_STACKS[196] = exports.versions.testnet.p2sh;
// address conversion : stacks to bitcoin
const ADDR_STACKS_TO_BITCOIN = {};
ADDR_STACKS_TO_BITCOIN[exports.versions.mainnet.p2pkh] = 0;
ADDR_STACKS_TO_BITCOIN[exports.versions.mainnet.p2sh] = 5;
ADDR_STACKS_TO_BITCOIN[exports.versions.testnet.p2pkh] = 111;
ADDR_STACKS_TO_BITCOIN[exports.versions.testnet.p2sh] = 196;
/**
 * Make a c32check address with the given version and hash160
 * The only difference between a c32check string and c32 address
 * is that the letter 'S' is pre-pended.
 * @param {number} version - the address version number
 * @param {string} hash160hex - the hash160 to encode (must be a hash160)
 * @returns {string} the address
 */ function c32address(version, hash160hex) {
    if (!hash160hex.match(/^[0-9a-fA-F]{40}$/)) throw new Error("Invalid argument: not a hash160 hex string");
    const c32string = (0, checksum_1.c32checkEncode)(version, hash160hex);
    return `S${c32string}`;
}
exports.c32address = c32address;
/**
 * Decode a c32 address into its version and hash160
 * @param {string} c32addr - the c32check-encoded address
 * @returns {[number, string]} a tuple with the version and hash160
 */ function c32addressDecode(c32addr) {
    if (c32addr.length <= 5) throw new Error("Invalid c32 address: invalid length");
    if (c32addr[0] != "S") throw new Error('Invalid c32 address: must start with "S"');
    return (0, checksum_1.c32checkDecode)(c32addr.slice(1));
}
exports.c32addressDecode = c32addressDecode;
/*
 * Convert a base58check address to a c32check address.
 * Try to convert the version number if one is not given.
 * @param {string} b58check - the base58check encoded address
 * @param {number} version - the version number, if not inferred from the address
 * @returns {string} the c32 address with the given version number (or the
 *   semantically-equivalent c32 version number, if not given)
 */ function b58ToC32(b58check, version = -1) {
    const addrInfo = base58check.decode(b58check);
    const hash160String = (0, utils_1.bytesToHex)(addrInfo.data);
    const addrVersion = parseInt((0, utils_1.bytesToHex)(addrInfo.prefix), 16);
    let stacksVersion;
    if (version < 0) {
        stacksVersion = addrVersion;
        if (ADDR_BITCOIN_TO_STACKS[addrVersion] !== undefined) stacksVersion = ADDR_BITCOIN_TO_STACKS[addrVersion];
    } else stacksVersion = version;
    return c32address(stacksVersion, hash160String);
}
exports.b58ToC32 = b58ToC32;
/*
 * Convert a c32check address to a base58check address.
 * @param {string} c32string - the c32check address
 * @param {number} version - the version number, if not inferred from the address
 * @returns {string} the base58 address with the given version number (or the
 *    semantically-equivalent bitcoin version number, if not given)
 */ function c32ToB58(c32string, version = -1) {
    const addrInfo = c32addressDecode(c32string);
    const stacksVersion = addrInfo[0];
    const hash160String = addrInfo[1];
    let bitcoinVersion;
    if (version < 0) {
        bitcoinVersion = stacksVersion;
        if (ADDR_STACKS_TO_BITCOIN[stacksVersion] !== undefined) bitcoinVersion = ADDR_STACKS_TO_BITCOIN[stacksVersion];
    } else bitcoinVersion = version;
    let prefix = bitcoinVersion.toString(16);
    if (prefix.length === 1) prefix = `0${prefix}`;
    return base58check.encode(hash160String, prefix);
}
exports.c32ToB58 = c32ToB58;

},{"3ecc449d77fe93ff":"gcgqB","9d1bd47277462000":"guoPV","75b0b55fdfed069b":"2ehgp"}],"guoPV":[function(require,module,exports) {
/*
 * From https://github.com/wzbg/base58check
 * @Author: zyc
 * @Date:   2016-09-11 23:36:05
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = void 0;
const sha256_1 = require("a8c0ed17498f40ec");
const utils_1 = require("cb375ec44e7924ce");
const basex = require("4445366ad05d8928");
const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function encode(data, prefix = "00") {
    const dataBytes = typeof data === "string" ? (0, utils_1.hexToBytes)(data) : data;
    const prefixBytes = typeof prefix === "string" ? (0, utils_1.hexToBytes)(prefix) : data;
    if (!(dataBytes instanceof Uint8Array) || !(prefixBytes instanceof Uint8Array)) throw new TypeError("Argument must be of type Uint8Array or string");
    const checksum = (0, sha256_1.sha256)((0, sha256_1.sha256)(new Uint8Array([
        ...prefixBytes,
        ...dataBytes
    ])));
    return basex(ALPHABET).encode([
        ...prefixBytes,
        ...dataBytes,
        ...checksum.slice(0, 4)
    ]);
}
exports.encode = encode;
function decode(string) {
    const bytes = basex(ALPHABET).decode(string);
    const prefixBytes = bytes.slice(0, 1);
    const dataBytes = bytes.slice(1, -4);
    // todo: for better performance replace spread with `concatBytes` method
    const checksum = (0, sha256_1.sha256)((0, sha256_1.sha256)(new Uint8Array([
        ...prefixBytes,
        ...dataBytes
    ])));
    bytes.slice(-4).forEach((check, index)=>{
        if (check !== checksum[index]) throw new Error("Invalid checksum");
    });
    return {
        prefix: prefixBytes,
        data: dataBytes
    };
}
exports.decode = decode;

},{"a8c0ed17498f40ec":"JjjO8","cb375ec44e7924ce":"2ehgp","4445366ad05d8928":"inVbl"}],"i3u1q":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the size to enable large array optimizations. */ var global = arguments[3];
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */ function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
}
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */ function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
}
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array ? array.length : 0;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */ function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) accumulator = array[++index];
    while(++index < length)accumulator = iteratee(accumulator, array[index], index, array);
    return accumulator;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, Symbol = root.Symbol, Uint8Array = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView"), Map = getNative(root, "Map"), Promise = getNative(root, "Promise"), Set = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    this.__data__ = new ListCache(entries);
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    return this.__data__["delete"](key);
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            return this;
        }
        cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) result.push(key);
    return result;
}
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) object[key] = value;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
    if (result !== undefined) return result;
    if (!isObject(value)) return value;
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) return copyArray(value, result);
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) return cloneBuffer(value, isDeep);
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            if (isHostObject(value)) return object ? value : {};
            result = initCloneObject(isFunc ? {} : value);
            if (!isDeep) return copySymbols(value, baseAssign(result, value));
        } else {
            if (!cloneableTags[tag]) return object ? value : {};
            result = initCloneByTag(value, tag, baseClone, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) return stacked;
    stack.set(value, result);
    if (!isArr) var props = isFull ? getAllKeys(value) : keys(value);
    arrayEach(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
}
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */ function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    return objectToString.call(value);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) return buffer.slice();
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
}
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */ function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor);
}
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */ function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor);
}
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }
    return object;
}
/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : undefined;
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
            return cloneSymbol(object);
    }
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */ function cloneDeep(value) {
    return baseClone(value, true, true);
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = cloneDeep;

},{}],"b9yzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClarityType", ()=>(0, _constants.ClarityType));
parcelHelpers.export(exports, "boolCV", ()=>(0, _booleanCV.boolCV));
parcelHelpers.export(exports, "trueCV", ()=>(0, _booleanCV.trueCV));
parcelHelpers.export(exports, "falseCV", ()=>(0, _booleanCV.falseCV));
parcelHelpers.export(exports, "intCV", ()=>(0, _intCV.intCV));
parcelHelpers.export(exports, "uintCV", ()=>(0, _intCV.uintCV));
parcelHelpers.export(exports, "bufferCV", ()=>(0, _bufferCV.bufferCV));
parcelHelpers.export(exports, "bufferCVFromString", ()=>(0, _bufferCV.bufferCVFromString));
parcelHelpers.export(exports, "noneCV", ()=>(0, _optionalCV.noneCV));
parcelHelpers.export(exports, "someCV", ()=>(0, _optionalCV.someCV));
parcelHelpers.export(exports, "optionalCVOf", ()=>(0, _optionalCV.optionalCVOf));
parcelHelpers.export(exports, "responseOkCV", ()=>(0, _responseCV.responseOkCV));
parcelHelpers.export(exports, "responseErrorCV", ()=>(0, _responseCV.responseErrorCV));
parcelHelpers.export(exports, "principalCV", ()=>(0, _principalCV.principalCV));
parcelHelpers.export(exports, "standardPrincipalCV", ()=>(0, _principalCV.standardPrincipalCV));
parcelHelpers.export(exports, "standardPrincipalCVFromAddress", ()=>(0, _principalCV.standardPrincipalCVFromAddress));
parcelHelpers.export(exports, "contractPrincipalCV", ()=>(0, _principalCV.contractPrincipalCV));
parcelHelpers.export(exports, "contractPrincipalCVFromAddress", ()=>(0, _principalCV.contractPrincipalCVFromAddress));
parcelHelpers.export(exports, "contractPrincipalCVFromStandard", ()=>(0, _principalCV.contractPrincipalCVFromStandard));
parcelHelpers.export(exports, "listCV", ()=>(0, _listCV.listCV));
parcelHelpers.export(exports, "tupleCV", ()=>(0, _tupleCV.tupleCV));
parcelHelpers.export(exports, "stringCV", ()=>(0, _stringCV.stringCV));
parcelHelpers.export(exports, "stringAsciiCV", ()=>(0, _stringCV.stringAsciiCV));
parcelHelpers.export(exports, "stringUtf8CV", ()=>(0, _stringCV.stringUtf8CV));
parcelHelpers.export(exports, "getCVTypeString", ()=>(0, _clarityValue.getCVTypeString));
parcelHelpers.export(exports, "serializeCV", ()=>(0, _serialize.serializeCV));
parcelHelpers.export(exports, "deserializeCV", ()=>(0, _deserializeDefault.default));
parcelHelpers.export(exports, "cvToString", ()=>(0, _clarityValue.cvToString));
parcelHelpers.export(exports, "cvToJSON", ()=>(0, _clarityValue.cvToJSON));
parcelHelpers.export(exports, "cvToValue", ()=>(0, _clarityValue.cvToValue));
parcelHelpers.export(exports, "principalToString", ()=>(0, _principalCV.principalToString));
var _clarityValue = require("./clarityValue");
var _constants = require("./constants");
var _booleanCV = require("./types/booleanCV");
var _intCV = require("./types/intCV");
var _bufferCV = require("./types/bufferCV");
var _optionalCV = require("./types/optionalCV");
var _responseCV = require("./types/responseCV");
var _principalCV = require("./types/principalCV");
var _listCV = require("./types/listCV");
var _tupleCV = require("./types/tupleCV");
var _stringCV = require("./types/stringCV");
var _serialize = require("./serialize");
var _deserialize = require("./deserialize");
var _deserializeDefault = parcelHelpers.interopDefault(_deserialize);

},{"./clarityValue":"iC8tx","./constants":"cNlky","./types/booleanCV":"en5zl","./types/intCV":"htJUI","./types/bufferCV":"fTTxo","./types/optionalCV":"jjqtn","./types/responseCV":"4Ltgw","./types/principalCV":"fAoZb","./types/listCV":"ctPJ9","./types/tupleCV":"iiGqH","./types/stringCV":"8AiJa","./serialize":"aAs1v","./deserialize":"4YX2v","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iC8tx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cvToString", ()=>cvToString);
parcelHelpers.export(exports, "cvToValue", ()=>cvToValue);
parcelHelpers.export(exports, "cvToJSON", ()=>cvToJSON);
parcelHelpers.export(exports, "getCVTypeString", ()=>getCVTypeString);
var _principalCV = require("./types/principalCV");
var _constants = require("./constants");
var _common = require("@stacks/common");
function cvToString(val, encoding = "hex") {
    switch(val.type){
        case (0, _constants.ClarityType).BoolTrue:
            return "true";
        case (0, _constants.ClarityType).BoolFalse:
            return "false";
        case (0, _constants.ClarityType).Int:
            return val.value.toString();
        case (0, _constants.ClarityType).UInt:
            return `u${val.value.toString()}`;
        case (0, _constants.ClarityType).Buffer:
            if (encoding === "tryAscii") {
                const str = (0, _common.bytesToAscii)(val.buffer);
                if (/[ -~]/.test(str)) return JSON.stringify(str);
            }
            return `0x${(0, _common.bytesToHex)(val.buffer)}`;
        case (0, _constants.ClarityType).OptionalNone:
            return "none";
        case (0, _constants.ClarityType).OptionalSome:
            return `(some ${cvToString(val.value, encoding)})`;
        case (0, _constants.ClarityType).ResponseErr:
            return `(err ${cvToString(val.value, encoding)})`;
        case (0, _constants.ClarityType).ResponseOk:
            return `(ok ${cvToString(val.value, encoding)})`;
        case (0, _constants.ClarityType).PrincipalStandard:
        case (0, _constants.ClarityType).PrincipalContract:
            return (0, _principalCV.principalToString)(val);
        case (0, _constants.ClarityType).List:
            return `(list ${val.list.map((v)=>cvToString(v, encoding)).join(" ")})`;
        case (0, _constants.ClarityType).Tuple:
            return `(tuple ${Object.keys(val.data).map((key)=>`(${key} ${cvToString(val.data[key], encoding)})`).join(" ")})`;
        case (0, _constants.ClarityType).StringASCII:
            return `"${val.data}"`;
        case (0, _constants.ClarityType).StringUTF8:
            return `u"${val.data}"`;
    }
}
function cvToValue(val, strictJsonCompat = false) {
    switch(val.type){
        case (0, _constants.ClarityType).BoolTrue:
            return true;
        case (0, _constants.ClarityType).BoolFalse:
            return false;
        case (0, _constants.ClarityType).Int:
        case (0, _constants.ClarityType).UInt:
            if (strictJsonCompat) return val.value.toString();
            return val.value;
        case (0, _constants.ClarityType).Buffer:
            return `0x${(0, _common.bytesToHex)(val.buffer)}`;
        case (0, _constants.ClarityType).OptionalNone:
            return null;
        case (0, _constants.ClarityType).OptionalSome:
            return cvToJSON(val.value);
        case (0, _constants.ClarityType).ResponseErr:
            return cvToJSON(val.value);
        case (0, _constants.ClarityType).ResponseOk:
            return cvToJSON(val.value);
        case (0, _constants.ClarityType).PrincipalStandard:
        case (0, _constants.ClarityType).PrincipalContract:
            return (0, _principalCV.principalToString)(val);
        case (0, _constants.ClarityType).List:
            return val.list.map((v)=>cvToJSON(v));
        case (0, _constants.ClarityType).Tuple:
            const result = {};
            Object.keys(val.data).forEach((key)=>{
                result[key] = cvToJSON(val.data[key]);
            });
            return result;
        case (0, _constants.ClarityType).StringASCII:
            return val.data;
        case (0, _constants.ClarityType).StringUTF8:
            return val.data;
    }
}
function cvToJSON(val) {
    switch(val.type){
        case (0, _constants.ClarityType).ResponseErr:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true),
                success: false
            };
        case (0, _constants.ClarityType).ResponseOk:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true),
                success: true
            };
        default:
            return {
                type: getCVTypeString(val),
                value: cvToValue(val, true)
            };
    }
}
function getCVTypeString(val) {
    switch(val.type){
        case (0, _constants.ClarityType).BoolTrue:
        case (0, _constants.ClarityType).BoolFalse:
            return "bool";
        case (0, _constants.ClarityType).Int:
            return "int";
        case (0, _constants.ClarityType).UInt:
            return "uint";
        case (0, _constants.ClarityType).Buffer:
            return `(buff ${val.buffer.length})`;
        case (0, _constants.ClarityType).OptionalNone:
            return "(optional none)";
        case (0, _constants.ClarityType).OptionalSome:
            return `(optional ${getCVTypeString(val.value)})`;
        case (0, _constants.ClarityType).ResponseErr:
            return `(response UnknownType ${getCVTypeString(val.value)})`;
        case (0, _constants.ClarityType).ResponseOk:
            return `(response ${getCVTypeString(val.value)} UnknownType)`;
        case (0, _constants.ClarityType).PrincipalStandard:
        case (0, _constants.ClarityType).PrincipalContract:
            return "principal";
        case (0, _constants.ClarityType).List:
            return `(list ${val.list.length} ${val.list.length ? getCVTypeString(val.list[0]) : "UnknownType"})`;
        case (0, _constants.ClarityType).Tuple:
            return `(tuple ${Object.keys(val.data).map((key)=>`(${key} ${getCVTypeString(val.data[key])})`).join(" ")})`;
        case (0, _constants.ClarityType).StringASCII:
            return `(string-ascii ${(0, _common.asciiToBytes)(val.data).length})`;
        case (0, _constants.ClarityType).StringUTF8:
            return `(string-utf8 ${(0, _common.utf8ToBytes)(val.data).length})`;
    }
}

},{"./types/principalCV":"fAoZb","./constants":"cNlky","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fAoZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "principalCV", ()=>principalCV);
parcelHelpers.export(exports, "principalToString", ()=>principalToString);
parcelHelpers.export(exports, "standardPrincipalCV", ()=>standardPrincipalCV);
parcelHelpers.export(exports, "standardPrincipalCVFromAddress", ()=>standardPrincipalCVFromAddress);
parcelHelpers.export(exports, "contractPrincipalCV", ()=>contractPrincipalCV);
parcelHelpers.export(exports, "contractPrincipalCVFromAddress", ()=>contractPrincipalCVFromAddress);
parcelHelpers.export(exports, "contractPrincipalCVFromStandard", ()=>contractPrincipalCVFromStandard);
var _common = require("@stacks/common");
var _common1 = require("../../common");
var _postconditionTypes = require("../../postcondition-types");
var _constants = require("../constants");
function principalToString(principal) {
    if (principal.type === (0, _constants.ClarityType).PrincipalStandard) return (0, _common1.addressToString)(principal.address);
    else if (principal.type === (0, _constants.ClarityType).PrincipalContract) {
        const address = (0, _common1.addressToString)(principal.address);
        return `${address}.${principal.contractName.content}`;
    } else throw new Error(`Unexpected principal data: ${JSON.stringify(principal)}`);
}
function principalCV(principal) {
    if (principal.includes(".")) {
        const [address, contractName] = principal.split(".");
        return contractPrincipalCV(address, contractName);
    } else return standardPrincipalCV(principal);
}
function standardPrincipalCV(addressString) {
    const addr = (0, _postconditionTypes.createAddress)(addressString);
    return {
        type: (0, _constants.ClarityType).PrincipalStandard,
        address: addr
    };
}
function standardPrincipalCVFromAddress(address) {
    return {
        type: (0, _constants.ClarityType).PrincipalStandard,
        address
    };
}
function contractPrincipalCV(addressString, contractName) {
    const addr = (0, _postconditionTypes.createAddress)(addressString);
    const lengthPrefixedContractName = (0, _postconditionTypes.createLPString)(contractName);
    return contractPrincipalCVFromAddress(addr, lengthPrefixedContractName);
}
function contractPrincipalCVFromAddress(address, contractName) {
    if ((0, _common.utf8ToBytes)(contractName.content).byteLength >= 128) throw new Error("Contract name must be less than 128 bytes");
    return {
        type: (0, _constants.ClarityType).PrincipalContract,
        address,
        contractName
    };
}
function contractPrincipalCVFromStandard(sp, contractName) {
    const lengthPrefixedContractName = (0, _postconditionTypes.createLPString)(contractName);
    return {
        type: (0, _constants.ClarityType).PrincipalContract,
        address: sp.address,
        contractName: lengthPrefixedContractName
    };
}

},{"@stacks/common":"5ZsuO","../../common":"4nRU0","../../postcondition-types":"dlZDM","../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4nRU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMessageSignature", ()=>createMessageSignature);
parcelHelpers.export(exports, "addressHashModeToVersion", ()=>addressHashModeToVersion);
parcelHelpers.export(exports, "addressFromVersionHash", ()=>addressFromVersionHash);
parcelHelpers.export(exports, "addressToString", ()=>addressToString);
var _constants = require("./constants");
var _c32Check = require("c32check");
var _common = require("@stacks/common");
function createMessageSignature(signature) {
    const length = (0, _common.hexToBytes)(signature).byteLength;
    if (length != (0, _constants.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)) throw Error("Invalid signature");
    return {
        type: (0, _constants.StacksMessageType).MessageSignature,
        data: signature
    };
}
function addressHashModeToVersion(hashMode, txVersion) {
    switch(hashMode){
        case (0, _constants.AddressHashMode).SerializeP2PKH:
            switch(txVersion){
                case (0, _constants.TransactionVersion).Mainnet:
                    return (0, _constants.AddressVersion).MainnetSingleSig;
                case (0, _constants.TransactionVersion).Testnet:
                    return (0, _constants.AddressVersion).TestnetSingleSig;
                default:
                    throw new Error(`Unexpected txVersion ${JSON.stringify(txVersion)} for hashMode ${hashMode}`);
            }
        case (0, _constants.AddressHashMode).SerializeP2SH:
        case (0, _constants.AddressHashMode).SerializeP2WPKH:
        case (0, _constants.AddressHashMode).SerializeP2WSH:
            switch(txVersion){
                case (0, _constants.TransactionVersion).Mainnet:
                    return (0, _constants.AddressVersion).MainnetMultiSig;
                case (0, _constants.TransactionVersion).Testnet:
                    return (0, _constants.AddressVersion).TestnetMultiSig;
                default:
                    throw new Error(`Unexpected txVersion ${JSON.stringify(txVersion)} for hashMode ${hashMode}`);
            }
        default:
            throw new Error(`Unexpected hashMode ${JSON.stringify(hashMode)}`);
    }
}
function addressFromVersionHash(version, hash) {
    return {
        type: (0, _constants.StacksMessageType).Address,
        version,
        hash160: hash
    };
}
function addressToString(address) {
    return (0, _c32Check.c32address)(address.version, address.hash160);
}

},{"./constants":"j9zsK","c32check":"hm0s8","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dlZDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAssetInfoString", ()=>parseAssetInfoString);
parcelHelpers.export(exports, "createLPString", ()=>createLPString);
parcelHelpers.export(exports, "createAssetInfo", ()=>createAssetInfo);
parcelHelpers.export(exports, "createAddress", ()=>createAddress);
parcelHelpers.export(exports, "parsePrincipalString", ()=>parsePrincipalString);
parcelHelpers.export(exports, "createContractPrincipal", ()=>createContractPrincipal);
parcelHelpers.export(exports, "createStandardPrincipal", ()=>createStandardPrincipal);
var _constants = require("./constants");
var _c32Check = require("c32check");
var _utils = require("./utils");
function parseAssetInfoString(id) {
    const [assetAddress, assetContractName, assetTokenName] = id.split(/\.|::/);
    const assetInfo = createAssetInfo(assetAddress, assetContractName, assetTokenName);
    return assetInfo;
}
function createLPString(content, lengthPrefixBytes, maxLengthBytes) {
    const prefixLength = lengthPrefixBytes || 1;
    const maxLength = maxLengthBytes || (0, _constants.MAX_STRING_LENGTH_BYTES);
    if ((0, _utils.exceedsMaxLengthBytes)(content, maxLength)) throw new Error(`String length exceeds maximum bytes ${maxLength}`);
    return {
        type: (0, _constants.StacksMessageType).LengthPrefixedString,
        content,
        lengthPrefixBytes: prefixLength,
        maxLengthBytes: maxLength
    };
}
function createAssetInfo(addressString, contractName, assetName) {
    return {
        type: (0, _constants.StacksMessageType).AssetInfo,
        address: createAddress(addressString),
        contractName: createLPString(contractName),
        assetName: createLPString(assetName)
    };
}
function createAddress(c32AddressString) {
    const addressData = (0, _c32Check.c32addressDecode)(c32AddressString);
    return {
        type: (0, _constants.StacksMessageType).Address,
        version: addressData[0],
        hash160: addressData[1]
    };
}
function parsePrincipalString(principalString) {
    if (principalString.includes(".")) {
        const [address, contractName] = principalString.split(".");
        return createContractPrincipal(address, contractName);
    } else return createStandardPrincipal(principalString);
}
function createContractPrincipal(addressString, contractName) {
    const addr = createAddress(addressString);
    const name = createLPString(contractName);
    return {
        type: (0, _constants.StacksMessageType).Principal,
        prefix: (0, _constants.PostConditionPrincipalID).Contract,
        address: addr,
        contractName: name
    };
}
function createStandardPrincipal(addressString) {
    const addr = createAddress(addressString);
    return {
        type: (0, _constants.StacksMessageType).Principal,
        prefix: (0, _constants.PostConditionPrincipalID).Standard,
        address: addr
    };
}

},{"./constants":"j9zsK","c32check":"hm0s8","./utils":"iOZqx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cNlky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClarityType", ()=>ClarityType);
var ClarityType;
(function(ClarityType) {
    ClarityType[ClarityType["Int"] = 0] = "Int";
    ClarityType[ClarityType["UInt"] = 1] = "UInt";
    ClarityType[ClarityType["Buffer"] = 2] = "Buffer";
    ClarityType[ClarityType["BoolTrue"] = 3] = "BoolTrue";
    ClarityType[ClarityType["BoolFalse"] = 4] = "BoolFalse";
    ClarityType[ClarityType["PrincipalStandard"] = 5] = "PrincipalStandard";
    ClarityType[ClarityType["PrincipalContract"] = 6] = "PrincipalContract";
    ClarityType[ClarityType["ResponseOk"] = 7] = "ResponseOk";
    ClarityType[ClarityType["ResponseErr"] = 8] = "ResponseErr";
    ClarityType[ClarityType["OptionalNone"] = 9] = "OptionalNone";
    ClarityType[ClarityType["OptionalSome"] = 10] = "OptionalSome";
    ClarityType[ClarityType["List"] = 11] = "List";
    ClarityType[ClarityType["Tuple"] = 12] = "Tuple";
    ClarityType[ClarityType["StringASCII"] = 13] = "StringASCII";
    ClarityType[ClarityType["StringUTF8"] = 14] = "StringUTF8";
})(ClarityType || (ClarityType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"en5zl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boolCV", ()=>boolCV);
parcelHelpers.export(exports, "trueCV", ()=>trueCV);
parcelHelpers.export(exports, "falseCV", ()=>falseCV);
var _constants = require("../constants");
const trueCV = ()=>({
        type: (0, _constants.ClarityType).BoolTrue
    });
const falseCV = ()=>({
        type: (0, _constants.ClarityType).BoolFalse
    });
const boolCV = (bool)=>bool ? trueCV() : falseCV();

},{"../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"htJUI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "intCV", ()=>intCV);
parcelHelpers.export(exports, "uintCV", ()=>uintCV);
var _common = require("@stacks/common");
var _constants = require("../constants");
const MAX_U128 = BigInt("0xffffffffffffffffffffffffffffffff");
const MIN_U128 = BigInt(0);
const MAX_I128 = BigInt("0x7fffffffffffffffffffffffffffffff");
const MIN_I128 = BigInt("-170141183460469231731687303715884105728");
const intCV = (value)=>{
    const bigInt = (0, _common.intToBigInt)(value, true);
    if (bigInt > MAX_I128) throw new RangeError(`Cannot construct clarity integer from value greater than ${MAX_I128}`);
    else if (bigInt < MIN_I128) throw new RangeError(`Cannot construct clarity integer form value less than ${MIN_I128}`);
    return {
        type: (0, _constants.ClarityType).Int,
        value: bigInt
    };
};
const uintCV = (value)=>{
    const bigInt = (0, _common.intToBigInt)(value, false);
    if (bigInt < MIN_U128) throw new RangeError("Cannot construct unsigned clarity integer from negative value");
    else if (bigInt > MAX_U128) throw new RangeError(`Cannot construct unsigned clarity integer greater than ${MAX_U128}`);
    return {
        type: (0, _constants.ClarityType).UInt,
        value: bigInt
    };
};

},{"@stacks/common":"5ZsuO","../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fTTxo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferCV", ()=>bufferCV);
parcelHelpers.export(exports, "bufferCVFromString", ()=>bufferCVFromString);
var _common = require("@stacks/common");
var _constants = require("../constants");
const bufferCV = (buffer)=>{
    if (buffer.length > 1000000) throw new Error("Cannot construct clarity buffer that is greater than 1MB");
    return {
        type: (0, _constants.ClarityType).Buffer,
        buffer
    };
};
const bufferCVFromString = (str)=>bufferCV((0, _common.utf8ToBytes)(str));

},{"@stacks/common":"5ZsuO","../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jjqtn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noneCV", ()=>noneCV);
parcelHelpers.export(exports, "someCV", ()=>someCV);
parcelHelpers.export(exports, "optionalCVOf", ()=>optionalCVOf);
var _constants = require("../constants");
function noneCV() {
    return {
        type: (0, _constants.ClarityType).OptionalNone
    };
}
function someCV(value) {
    return {
        type: (0, _constants.ClarityType).OptionalSome,
        value
    };
}
function optionalCVOf(value) {
    if (value) return someCV(value);
    else return noneCV();
}

},{"../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4Ltgw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "responseErrorCV", ()=>responseErrorCV);
parcelHelpers.export(exports, "responseOkCV", ()=>responseOkCV);
var _constants = require("../constants");
function responseErrorCV(value) {
    return {
        type: (0, _constants.ClarityType).ResponseErr,
        value
    };
}
function responseOkCV(value) {
    return {
        type: (0, _constants.ClarityType).ResponseOk,
        value
    };
}

},{"../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"ctPJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "listCV", ()=>listCV);
var _constants = require("../constants");
function listCV(values) {
    return {
        type: (0, _constants.ClarityType).List,
        list: values
    };
}

},{"../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"iiGqH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tupleCV", ()=>tupleCV);
var _constants = require("../constants");
var _utils = require("../../utils");
function tupleCV(data) {
    for(const key in data){
        if (!(0, _utils.isClarityName)(key)) throw new Error(`"${key}" is not a valid Clarity name`);
    }
    return {
        type: (0, _constants.ClarityType).Tuple,
        data
    };
}

},{"../constants":"cNlky","../../utils":"iOZqx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8AiJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringAsciiCV", ()=>stringAsciiCV);
parcelHelpers.export(exports, "stringUtf8CV", ()=>stringUtf8CV);
parcelHelpers.export(exports, "stringCV", ()=>stringCV);
var _constants = require("../constants");
const stringAsciiCV = (data)=>{
    return {
        type: (0, _constants.ClarityType).StringASCII,
        data
    };
};
const stringUtf8CV = (data)=>{
    return {
        type: (0, _constants.ClarityType).StringUTF8,
        data
    };
};
const stringCV = (data, encoding)=>{
    switch(encoding){
        case "ascii":
            return stringAsciiCV(data);
        case "utf8":
            return stringUtf8CV(data);
    }
};

},{"../constants":"cNlky","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aAs1v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeCV", ()=>serializeCV);
var _common = require("@stacks/common");
var _types = require("../types");
var _postconditionTypes = require("../postcondition-types");
var _constants = require("./constants");
var _errors = require("../errors");
var _constants1 = require("../constants");
function bytesWithTypeID(typeId, bytes) {
    return (0, _common.concatArray)([
        typeId,
        bytes
    ]);
}
function serializeBoolCV(value) {
    return new Uint8Array([
        value.type
    ]);
}
function serializeOptionalCV(cv) {
    if (cv.type === (0, _constants.ClarityType).OptionalNone) return new Uint8Array([
        cv.type
    ]);
    else return bytesWithTypeID(cv.type, serializeCV(cv.value));
}
function serializeBufferCV(cv) {
    const length = new Uint8Array(4);
    (0, _common.writeUInt32BE)(length, cv.buffer.length, 0);
    return bytesWithTypeID(cv.type, (0, _common.concatBytes)(length, cv.buffer));
}
function serializeIntCV(cv) {
    const bytes = (0, _common.bigIntToBytes)((0, _common.toTwos)(cv.value, BigInt((0, _constants1.CLARITY_INT_SIZE))), (0, _constants1.CLARITY_INT_BYTE_SIZE));
    return bytesWithTypeID(cv.type, bytes);
}
function serializeUIntCV(cv) {
    const bytes = (0, _common.bigIntToBytes)(cv.value, (0, _constants1.CLARITY_INT_BYTE_SIZE));
    return bytesWithTypeID(cv.type, bytes);
}
function serializeStandardPrincipalCV(cv) {
    return bytesWithTypeID(cv.type, (0, _types.serializeAddress)(cv.address));
}
function serializeContractPrincipalCV(cv) {
    return bytesWithTypeID(cv.type, (0, _common.concatBytes)((0, _types.serializeAddress)(cv.address), (0, _types.serializeLPString)(cv.contractName)));
}
function serializeResponseCV(cv) {
    return bytesWithTypeID(cv.type, serializeCV(cv.value));
}
function serializeListCV(cv) {
    const bytesArray = [];
    const length = new Uint8Array(4);
    (0, _common.writeUInt32BE)(length, cv.list.length, 0);
    bytesArray.push(length);
    for (const value of cv.list){
        const serializedValue = serializeCV(value);
        bytesArray.push(serializedValue);
    }
    return bytesWithTypeID(cv.type, (0, _common.concatArray)(bytesArray));
}
function serializeTupleCV(cv) {
    const bytesArray = [];
    const length = new Uint8Array(4);
    (0, _common.writeUInt32BE)(length, Object.keys(cv.data).length, 0);
    bytesArray.push(length);
    const lexicographicOrder = Object.keys(cv.data).sort((a, b)=>a.localeCompare(b));
    for (const key of lexicographicOrder){
        const nameWithLength = (0, _postconditionTypes.createLPString)(key);
        bytesArray.push((0, _types.serializeLPString)(nameWithLength));
        const serializedValue = serializeCV(cv.data[key]);
        bytesArray.push(serializedValue);
    }
    return bytesWithTypeID(cv.type, (0, _common.concatArray)(bytesArray));
}
function serializeStringCV(cv, encoding) {
    const bytesArray = [];
    const str = encoding == "ascii" ? (0, _common.asciiToBytes)(cv.data) : (0, _common.utf8ToBytes)(cv.data);
    const len = new Uint8Array(4);
    (0, _common.writeUInt32BE)(len, str.length, 0);
    bytesArray.push(len);
    bytesArray.push(str);
    return bytesWithTypeID(cv.type, (0, _common.concatArray)(bytesArray));
}
function serializeStringAsciiCV(cv) {
    return serializeStringCV(cv, "ascii");
}
function serializeStringUtf8CV(cv) {
    return serializeStringCV(cv, "utf8");
}
function serializeCV(value) {
    switch(value.type){
        case (0, _constants.ClarityType).BoolTrue:
        case (0, _constants.ClarityType).BoolFalse:
            return serializeBoolCV(value);
        case (0, _constants.ClarityType).OptionalNone:
        case (0, _constants.ClarityType).OptionalSome:
            return serializeOptionalCV(value);
        case (0, _constants.ClarityType).Buffer:
            return serializeBufferCV(value);
        case (0, _constants.ClarityType).UInt:
            return serializeUIntCV(value);
        case (0, _constants.ClarityType).Int:
            return serializeIntCV(value);
        case (0, _constants.ClarityType).PrincipalStandard:
            return serializeStandardPrincipalCV(value);
        case (0, _constants.ClarityType).PrincipalContract:
            return serializeContractPrincipalCV(value);
        case (0, _constants.ClarityType).ResponseOk:
        case (0, _constants.ClarityType).ResponseErr:
            return serializeResponseCV(value);
        case (0, _constants.ClarityType).List:
            return serializeListCV(value);
        case (0, _constants.ClarityType).Tuple:
            return serializeTupleCV(value);
        case (0, _constants.ClarityType).StringASCII:
            return serializeStringAsciiCV(value);
        case (0, _constants.ClarityType).StringUTF8:
            return serializeStringUtf8CV(value);
        default:
            throw new (0, _errors.SerializationError)("Unable to serialize. Invalid Clarity Value.");
    }
}

},{"@stacks/common":"5ZsuO","../types":"3kaPf","../postcondition-types":"dlZDM","./constants":"cNlky","../errors":"39VaY","../constants":"j9zsK","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3kaPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "serializeStacksMessage", ()=>serializeStacksMessage);
parcelHelpers.export(exports, "deserializeStacksMessage", ()=>deserializeStacksMessage);
parcelHelpers.export(exports, "createEmptyAddress", ()=>createEmptyAddress);
parcelHelpers.export(exports, "addressFromHashMode", ()=>addressFromHashMode);
parcelHelpers.export(exports, "addressFromPublicKeys", ()=>addressFromPublicKeys);
parcelHelpers.export(exports, "serializeAddress", ()=>serializeAddress);
parcelHelpers.export(exports, "deserializeAddress", ()=>deserializeAddress);
parcelHelpers.export(exports, "serializePrincipal", ()=>serializePrincipal);
parcelHelpers.export(exports, "deserializePrincipal", ()=>deserializePrincipal);
parcelHelpers.export(exports, "serializeLPString", ()=>serializeLPString);
parcelHelpers.export(exports, "deserializeLPString", ()=>deserializeLPString);
parcelHelpers.export(exports, "codeBodyString", ()=>codeBodyString);
parcelHelpers.export(exports, "createMemoString", ()=>createMemoString);
parcelHelpers.export(exports, "serializeMemoString", ()=>serializeMemoString);
parcelHelpers.export(exports, "deserializeMemoString", ()=>deserializeMemoString);
parcelHelpers.export(exports, "serializeAssetInfo", ()=>serializeAssetInfo);
parcelHelpers.export(exports, "deserializeAssetInfo", ()=>deserializeAssetInfo);
parcelHelpers.export(exports, "createLPList", ()=>createLPList);
parcelHelpers.export(exports, "serializeLPList", ()=>serializeLPList);
parcelHelpers.export(exports, "deserializeLPList", ()=>deserializeLPList);
parcelHelpers.export(exports, "serializePostCondition", ()=>serializePostCondition);
parcelHelpers.export(exports, "deserializePostCondition", ()=>deserializePostCondition);
var _common = require("@stacks/common");
var _constants = require("./constants");
var _keys = require("./keys");
var _utils = require("./utils");
var _postconditionTypes = require("./postcondition-types");
var _payload = require("./payload");
var _errors = require("./errors");
var _signature = require("./signature");
var _common1 = require("./common");
var _clarity = require("./clarity");
function serializeStacksMessage(message) {
    switch(message.type){
        case (0, _constants.StacksMessageType).Address:
            return serializeAddress(message);
        case (0, _constants.StacksMessageType).Principal:
            return serializePrincipal(message);
        case (0, _constants.StacksMessageType).LengthPrefixedString:
            return serializeLPString(message);
        case (0, _constants.StacksMessageType).MemoString:
            return serializeMemoString(message);
        case (0, _constants.StacksMessageType).AssetInfo:
            return serializeAssetInfo(message);
        case (0, _constants.StacksMessageType).PostCondition:
            return serializePostCondition(message);
        case (0, _constants.StacksMessageType).PublicKey:
            return (0, _keys.serializePublicKey)(message);
        case (0, _constants.StacksMessageType).LengthPrefixedList:
            return serializeLPList(message);
        case (0, _constants.StacksMessageType).Payload:
            return (0, _payload.serializePayload)(message);
        case (0, _constants.StacksMessageType).TransactionAuthField:
            return (0, _signature.serializeTransactionAuthField)(message);
        case (0, _constants.StacksMessageType).MessageSignature:
            return (0, _signature.serializeMessageSignature)(message);
    }
}
function deserializeStacksMessage(bytesReader, type, listType) {
    switch(type){
        case (0, _constants.StacksMessageType).Address:
            return deserializeAddress(bytesReader);
        case (0, _constants.StacksMessageType).Principal:
            return deserializePrincipal(bytesReader);
        case (0, _constants.StacksMessageType).LengthPrefixedString:
            return deserializeLPString(bytesReader);
        case (0, _constants.StacksMessageType).MemoString:
            return deserializeMemoString(bytesReader);
        case (0, _constants.StacksMessageType).AssetInfo:
            return deserializeAssetInfo(bytesReader);
        case (0, _constants.StacksMessageType).PostCondition:
            return deserializePostCondition(bytesReader);
        case (0, _constants.StacksMessageType).PublicKey:
            return (0, _keys.deserializePublicKey)(bytesReader);
        case (0, _constants.StacksMessageType).Payload:
            return (0, _payload.deserializePayload)(bytesReader);
        case (0, _constants.StacksMessageType).LengthPrefixedList:
            if (!listType) throw new (0, _errors.DeserializationError)("No List Type specified");
            return deserializeLPList(bytesReader, listType);
        case (0, _constants.StacksMessageType).MessageSignature:
            return (0, _signature.deserializeMessageSignature)(bytesReader);
        default:
            throw new Error("Could not recognize StacksMessageType");
    }
}
function createEmptyAddress() {
    return {
        type: (0, _constants.StacksMessageType).Address,
        version: (0, _constants.AddressVersion).MainnetSingleSig,
        hash160: "0".repeat(40)
    };
}
function addressFromHashMode(hashMode, txVersion, data) {
    const version = (0, _common1.addressHashModeToVersion)(hashMode, txVersion);
    return (0, _common1.addressFromVersionHash)(version, data);
}
function addressFromPublicKeys(version, hashMode, numSigs, publicKeys) {
    if (publicKeys.length === 0) throw Error("Invalid number of public keys");
    if (hashMode === (0, _constants.AddressHashMode).SerializeP2PKH || hashMode === (0, _constants.AddressHashMode).SerializeP2WPKH) {
        if (publicKeys.length !== 1 || numSigs !== 1) throw Error("Invalid number of public keys or signatures");
    }
    if (hashMode === (0, _constants.AddressHashMode).SerializeP2WPKH || hashMode === (0, _constants.AddressHashMode).SerializeP2WSH) for(let i = 0; i < publicKeys.length; i++){
        if (!(0, _keys.isCompressed)(publicKeys[i])) throw Error("Public keys must be compressed for segwit");
    }
    switch(hashMode){
        case (0, _constants.AddressHashMode).SerializeP2PKH:
            return (0, _common1.addressFromVersionHash)(version, (0, _utils.hashP2PKH)(publicKeys[0].data));
        case (0, _constants.AddressHashMode).SerializeP2WPKH:
            return (0, _common1.addressFromVersionHash)(version, (0, _utils.hashP2WPKH)(publicKeys[0].data));
        case (0, _constants.AddressHashMode).SerializeP2SH:
            return (0, _common1.addressFromVersionHash)(version, (0, _utils.hashP2SH)(numSigs, publicKeys.map((0, _keys.serializePublicKey))));
        case (0, _constants.AddressHashMode).SerializeP2WSH:
            return (0, _common1.addressFromVersionHash)(version, (0, _utils.hashP2WSH)(numSigs, publicKeys.map((0, _keys.serializePublicKey))));
    }
}
function serializeAddress(address) {
    const bytesArray = [];
    bytesArray.push((0, _common.hexToBytes)((0, _common.intToHex)(address.version, 1)));
    bytesArray.push((0, _common.hexToBytes)(address.hash160));
    return (0, _common.concatArray)(bytesArray);
}
function deserializeAddress(bytesReader) {
    const version = (0, _common.hexToInt)((0, _common.bytesToHex)(bytesReader.readBytes(1)));
    const data = (0, _common.bytesToHex)(bytesReader.readBytes(20));
    return {
        type: (0, _constants.StacksMessageType).Address,
        version,
        hash160: data
    };
}
function serializePrincipal(principal) {
    const bytesArray = [];
    bytesArray.push(principal.prefix);
    bytesArray.push(serializeAddress(principal.address));
    if (principal.prefix === (0, _constants.PostConditionPrincipalID).Contract) bytesArray.push(serializeLPString(principal.contractName));
    return (0, _common.concatArray)(bytesArray);
}
function deserializePrincipal(bytesReader) {
    const prefix = bytesReader.readUInt8Enum((0, _constants.PostConditionPrincipalID), (n)=>{
        throw new (0, _errors.DeserializationError)(`Unexpected Principal payload type: ${n}`);
    });
    const address = deserializeAddress(bytesReader);
    if (prefix === (0, _constants.PostConditionPrincipalID).Standard) return {
        type: (0, _constants.StacksMessageType).Principal,
        prefix,
        address
    };
    const contractName = deserializeLPString(bytesReader);
    return {
        type: (0, _constants.StacksMessageType).Principal,
        prefix,
        address,
        contractName
    };
}
function serializeLPString(lps) {
    const bytesArray = [];
    const contentBytes = (0, _common.utf8ToBytes)(lps.content);
    const length = contentBytes.byteLength;
    bytesArray.push((0, _common.hexToBytes)((0, _common.intToHex)(length, lps.lengthPrefixBytes)));
    bytesArray.push(contentBytes);
    return (0, _common.concatArray)(bytesArray);
}
function deserializeLPString(bytesReader, prefixBytes, maxLength) {
    prefixBytes = prefixBytes ? prefixBytes : 1;
    const length = (0, _common.hexToInt)((0, _common.bytesToHex)(bytesReader.readBytes(prefixBytes)));
    const content = (0, _common.bytesToUtf8)(bytesReader.readBytes(length));
    return (0, _postconditionTypes.createLPString)(content, prefixBytes, maxLength ?? 128);
}
function codeBodyString(content) {
    return (0, _postconditionTypes.createLPString)(content, 4, 100000);
}
function createMemoString(content) {
    if (content && (0, _utils.exceedsMaxLengthBytes)(content, (0, _constants.MEMO_MAX_LENGTH_BYTES))) throw new Error(`Memo exceeds maximum length of ${(0, _constants.MEMO_MAX_LENGTH_BYTES)} bytes`);
    return {
        type: (0, _constants.StacksMessageType).MemoString,
        content
    };
}
function serializeMemoString(memoString) {
    const bytesArray = [];
    const contentBytes = (0, _common.utf8ToBytes)(memoString.content);
    const paddedContent = (0, _utils.rightPadHexToLength)((0, _common.bytesToHex)(contentBytes), (0, _constants.MEMO_MAX_LENGTH_BYTES) * 2);
    bytesArray.push((0, _common.hexToBytes)(paddedContent));
    return (0, _common.concatArray)(bytesArray);
}
function deserializeMemoString(bytesReader) {
    const content = (0, _common.bytesToUtf8)(bytesReader.readBytes((0, _constants.MEMO_MAX_LENGTH_BYTES)));
    return {
        type: (0, _constants.StacksMessageType).MemoString,
        content
    };
}
function serializeAssetInfo(info) {
    const bytesArray = [];
    bytesArray.push(serializeAddress(info.address));
    bytesArray.push(serializeLPString(info.contractName));
    bytesArray.push(serializeLPString(info.assetName));
    return (0, _common.concatArray)(bytesArray);
}
function deserializeAssetInfo(bytesReader) {
    return {
        type: (0, _constants.StacksMessageType).AssetInfo,
        address: deserializeAddress(bytesReader),
        contractName: deserializeLPString(bytesReader),
        assetName: deserializeLPString(bytesReader)
    };
}
function createLPList(values, lengthPrefixBytes) {
    return {
        type: (0, _constants.StacksMessageType).LengthPrefixedList,
        lengthPrefixBytes: lengthPrefixBytes || 4,
        values
    };
}
function serializeLPList(lpList) {
    const list = lpList.values;
    const bytesArray = [];
    bytesArray.push((0, _common.hexToBytes)((0, _common.intToHex)(list.length, lpList.lengthPrefixBytes)));
    for (const l of list)bytesArray.push(serializeStacksMessage(l));
    return (0, _common.concatArray)(bytesArray);
}
function deserializeLPList(bytesReader, type, lengthPrefixBytes) {
    const length = (0, _common.hexToInt)((0, _common.bytesToHex)(bytesReader.readBytes(lengthPrefixBytes || 4)));
    const l = [];
    for(let index = 0; index < length; index++)switch(type){
        case (0, _constants.StacksMessageType).Address:
            l.push(deserializeAddress(bytesReader));
            break;
        case (0, _constants.StacksMessageType).LengthPrefixedString:
            l.push(deserializeLPString(bytesReader));
            break;
        case (0, _constants.StacksMessageType).MemoString:
            l.push(deserializeMemoString(bytesReader));
            break;
        case (0, _constants.StacksMessageType).AssetInfo:
            l.push(deserializeAssetInfo(bytesReader));
            break;
        case (0, _constants.StacksMessageType).PostCondition:
            l.push(deserializePostCondition(bytesReader));
            break;
        case (0, _constants.StacksMessageType).PublicKey:
            l.push((0, _keys.deserializePublicKey)(bytesReader));
            break;
        case (0, _constants.StacksMessageType).TransactionAuthField:
            l.push((0, _signature.deserializeTransactionAuthField)(bytesReader));
            break;
    }
    return createLPList(l, lengthPrefixBytes);
}
function serializePostCondition(postCondition) {
    const bytesArray = [];
    bytesArray.push(postCondition.conditionType);
    bytesArray.push(serializePrincipal(postCondition.principal));
    if (postCondition.conditionType === (0, _constants.PostConditionType).Fungible || postCondition.conditionType === (0, _constants.PostConditionType).NonFungible) bytesArray.push(serializeAssetInfo(postCondition.assetInfo));
    if (postCondition.conditionType === (0, _constants.PostConditionType).NonFungible) bytesArray.push((0, _clarity.serializeCV)(postCondition.assetName));
    bytesArray.push(postCondition.conditionCode);
    if (postCondition.conditionType === (0, _constants.PostConditionType).STX || postCondition.conditionType === (0, _constants.PostConditionType).Fungible) bytesArray.push((0, _common.intToBytes)(postCondition.amount, false, 8));
    return (0, _common.concatArray)(bytesArray);
}
function deserializePostCondition(bytesReader) {
    const postConditionType = bytesReader.readUInt8Enum((0, _constants.PostConditionType), (n)=>{
        throw new (0, _errors.DeserializationError)(`Could not read ${n} as PostConditionType`);
    });
    const principal = deserializePrincipal(bytesReader);
    let conditionCode;
    let assetInfo;
    let amount;
    switch(postConditionType){
        case (0, _constants.PostConditionType).STX:
            conditionCode = bytesReader.readUInt8Enum((0, _constants.FungibleConditionCode), (n)=>{
                throw new (0, _errors.DeserializationError)(`Could not read ${n} as FungibleConditionCode`);
            });
            amount = BigInt(`0x${(0, _common.bytesToHex)(bytesReader.readBytes(8))}`);
            return {
                type: (0, _constants.StacksMessageType).PostCondition,
                conditionType: (0, _constants.PostConditionType).STX,
                principal,
                conditionCode,
                amount
            };
        case (0, _constants.PostConditionType).Fungible:
            assetInfo = deserializeAssetInfo(bytesReader);
            conditionCode = bytesReader.readUInt8Enum((0, _constants.FungibleConditionCode), (n)=>{
                throw new (0, _errors.DeserializationError)(`Could not read ${n} as FungibleConditionCode`);
            });
            amount = BigInt(`0x${(0, _common.bytesToHex)(bytesReader.readBytes(8))}`);
            return {
                type: (0, _constants.StacksMessageType).PostCondition,
                conditionType: (0, _constants.PostConditionType).Fungible,
                principal,
                conditionCode,
                amount,
                assetInfo
            };
        case (0, _constants.PostConditionType).NonFungible:
            assetInfo = deserializeAssetInfo(bytesReader);
            const assetName = (0, _clarity.deserializeCV)(bytesReader);
            conditionCode = bytesReader.readUInt8Enum((0, _constants.NonFungibleConditionCode), (n)=>{
                throw new (0, _errors.DeserializationError)(`Could not read ${n} as FungibleConditionCode`);
            });
            return {
                type: (0, _constants.StacksMessageType).PostCondition,
                conditionType: (0, _constants.PostConditionType).NonFungible,
                principal,
                conditionCode,
                assetInfo,
                assetName
            };
    }
}

},{"@stacks/common":"5ZsuO","./constants":"j9zsK","./keys":"3QnZl","./utils":"iOZqx","./postcondition-types":"dlZDM","./payload":"3ZhF7","./errors":"39VaY","./signature":"cOhwv","./common":"4nRU0","./clarity":"b9yzg","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3QnZl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAddressFromPrivateKey", ()=>getAddressFromPrivateKey);
parcelHelpers.export(exports, "getAddressFromPublicKey", ()=>getAddressFromPublicKey);
parcelHelpers.export(exports, "createStacksPublicKey", ()=>createStacksPublicKey);
parcelHelpers.export(exports, "publicKeyFromSignatureVrs", ()=>publicKeyFromSignatureVrs);
parcelHelpers.export(exports, "publicKeyFromSignatureRsv", ()=>publicKeyFromSignatureRsv);
parcelHelpers.export(exports, "publicKeyFromBytes", ()=>publicKeyFromBytes);
parcelHelpers.export(exports, "isCompressed", ()=>isCompressed);
parcelHelpers.export(exports, "publicKeyToString", ()=>publicKeyToString);
parcelHelpers.export(exports, "serializePublicKey", ()=>serializePublicKey);
parcelHelpers.export(exports, "pubKeyfromPrivKey", ()=>pubKeyfromPrivKey);
parcelHelpers.export(exports, "compressPublicKey", ()=>compressPublicKey);
parcelHelpers.export(exports, "deserializePublicKey", ()=>deserializePublicKey);
parcelHelpers.export(exports, "createStacksPrivateKey", ()=>createStacksPrivateKey);
parcelHelpers.export(exports, "makeRandomPrivKey", ()=>makeRandomPrivKey);
parcelHelpers.export(exports, "signWithKey", ()=>signWithKey);
parcelHelpers.export(exports, "signMessageHashRsv", ()=>signMessageHashRsv);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "privateKeyToString", ()=>privateKeyToString);
parcelHelpers.export(exports, "publicKeyToAddress", ()=>publicKeyToAddress);
var _hmac = require("@noble/hashes/hmac");
var _sha256 = require("@noble/hashes/sha256");
var _secp256K1 = require("@noble/secp256k1");
var _common = require("@stacks/common");
var _c32Check = require("c32check");
var _common1 = require("./common");
var _constants = require("./constants");
var _utils = require("./utils");
(0, _secp256K1.utils).hmacSha256Sync = (key, ...msgs)=>{
    const h = (0, _hmac.hmac).create((0, _sha256.sha256), key);
    msgs.forEach((msg)=>h.update(msg));
    return h.digest();
};
function getAddressFromPrivateKey(privateKey, transactionVersion = (0, _constants.TransactionVersion).Mainnet) {
    const pubKey = pubKeyfromPrivKey(privateKey);
    return getAddressFromPublicKey(pubKey.data, transactionVersion);
}
function getAddressFromPublicKey(publicKey, transactionVersion = (0, _constants.TransactionVersion).Mainnet) {
    publicKey = typeof publicKey === "string" ? publicKey : (0, _common.bytesToHex)(publicKey);
    const addrVer = (0, _common1.addressHashModeToVersion)((0, _constants.AddressHashMode).SerializeP2PKH, transactionVersion);
    const addr = (0, _common1.addressFromVersionHash)(addrVer, (0, _utils.hashP2PKH)((0, _common.hexToBytes)(publicKey)));
    const addrString = (0, _common1.addressToString)(addr);
    return addrString;
}
function createStacksPublicKey(key) {
    return {
        type: (0, _constants.StacksMessageType).PublicKey,
        data: (0, _common.hexToBytes)(key)
    };
}
function publicKeyFromSignatureVrs(messageHash, messageSignature, pubKeyEncoding = (0, _constants.PubKeyEncoding).Compressed) {
    const parsedSignature = (0, _common.parseRecoverableSignatureVrs)(messageSignature.data);
    const signature = new (0, _secp256K1.Signature)((0, _common.hexToBigInt)(parsedSignature.r), (0, _common.hexToBigInt)(parsedSignature.s));
    const point = (0, _secp256K1.Point).fromSignature(messageHash, signature, parsedSignature.recoveryId);
    const compressed = pubKeyEncoding === (0, _constants.PubKeyEncoding).Compressed;
    return point.toHex(compressed);
}
function publicKeyFromSignatureRsv(messageHash, messageSignature, pubKeyEncoding = (0, _constants.PubKeyEncoding).Compressed) {
    return publicKeyFromSignatureVrs(messageHash, {
        ...messageSignature,
        data: (0, _common.signatureRsvToVrs)(messageSignature.data)
    }, pubKeyEncoding);
}
function publicKeyFromBytes(data) {
    return {
        type: (0, _constants.StacksMessageType).PublicKey,
        data
    };
}
function isCompressed(key) {
    return !(0, _common.bytesToHex)(key.data).startsWith("04");
}
function publicKeyToString(key) {
    return (0, _common.bytesToHex)(key.data);
}
function serializePublicKey(key) {
    return key.data.slice();
}
function pubKeyfromPrivKey(privateKey) {
    const privKey = createStacksPrivateKey(privateKey);
    const publicKey = (0, _secp256K1.getPublicKey)(privKey.data.slice(0, 32), privKey.compressed);
    return createStacksPublicKey((0, _common.bytesToHex)(publicKey));
}
function compressPublicKey(publicKey) {
    const hex = typeof publicKey === "string" ? publicKey : (0, _common.bytesToHex)(publicKey);
    const compressed = (0, _secp256K1.Point).fromHex(hex).toHex(true);
    return createStacksPublicKey(compressed);
}
function deserializePublicKey(bytesReader) {
    const fieldId = bytesReader.readUInt8();
    const keyLength = fieldId === 4 ? (0, _constants.UNCOMPRESSED_PUBKEY_LENGTH_BYTES) : (0, _constants.COMPRESSED_PUBKEY_LENGTH_BYTES);
    return publicKeyFromBytes((0, _common.concatArray)([
        fieldId,
        bytesReader.readBytes(keyLength)
    ]));
}
function createStacksPrivateKey(key) {
    const data = (0, _common.privateKeyToBytes)(key);
    const compressed = data.length == (0, _common.PRIVATE_KEY_COMPRESSED_LENGTH);
    return {
        data,
        compressed
    };
}
function makeRandomPrivKey() {
    return createStacksPrivateKey((0, _secp256K1.utils).randomPrivateKey());
}
function signWithKey(privateKey, messageHash) {
    const [rawSignature, recoveryId] = (0, _secp256K1.signSync)(messageHash, privateKey.data.slice(0, 32), {
        canonical: true,
        recovered: true
    });
    if (recoveryId == null) throw new Error("No signature recoveryId received");
    const recoveryIdHex = (0, _common.intToHex)(recoveryId, 1);
    const recoverableSignatureString = recoveryIdHex + (0, _secp256K1.Signature).fromHex(rawSignature).toCompactHex();
    return (0, _common1.createMessageSignature)(recoverableSignatureString);
}
function signMessageHashRsv({ messageHash , privateKey  }) {
    const messageSignature = signWithKey(privateKey, messageHash);
    return {
        ...messageSignature,
        data: (0, _common.signatureVrsToRsv)(messageSignature.data)
    };
}
function getPublicKey(privateKey) {
    return pubKeyfromPrivKey(privateKey.data);
}
function privateKeyToString(privateKey) {
    return (0, _common.bytesToHex)(privateKey.data);
}
function publicKeyToAddress(version, publicKey) {
    return (0, _c32Check.c32address)(version, (0, _common.bytesToHex)((0, _utils.hash160)(publicKey.data)));
}

},{"@noble/hashes/hmac":"3IfCc","@noble/hashes/sha256":"JjjO8","@noble/secp256k1":"eyYsH","@stacks/common":"5ZsuO","c32check":"hm0s8","./common":"4nRU0","./constants":"j9zsK","./utils":"iOZqx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3ZhF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTokenTransferPayload", ()=>isTokenTransferPayload);
parcelHelpers.export(exports, "isContractCallPayload", ()=>isContractCallPayload);
parcelHelpers.export(exports, "isSmartContractPayload", ()=>isSmartContractPayload);
parcelHelpers.export(exports, "isPoisonPayload", ()=>isPoisonPayload);
parcelHelpers.export(exports, "isCoinbasePayload", ()=>isCoinbasePayload);
parcelHelpers.export(exports, "createTokenTransferPayload", ()=>createTokenTransferPayload);
parcelHelpers.export(exports, "createContractCallPayload", ()=>createContractCallPayload);
parcelHelpers.export(exports, "createSmartContractPayload", ()=>createSmartContractPayload);
parcelHelpers.export(exports, "createPoisonPayload", ()=>createPoisonPayload);
parcelHelpers.export(exports, "createCoinbasePayload", ()=>createCoinbasePayload);
parcelHelpers.export(exports, "serializePayload", ()=>serializePayload);
parcelHelpers.export(exports, "deserializePayload", ()=>deserializePayload);
var _common = require("@stacks/common");
var _constants = require("./constants");
var _ = require("./clarity/");
var _principalCV = require("./clarity/types/principalCV");
var _postconditionTypes = require("./postcondition-types");
var _types = require("./types");
function isTokenTransferPayload(p) {
    return p.payloadType === (0, _constants.PayloadType).TokenTransfer;
}
function isContractCallPayload(p) {
    return p.payloadType === (0, _constants.PayloadType).ContractCall;
}
function isSmartContractPayload(p) {
    return p.payloadType === (0, _constants.PayloadType).SmartContract;
}
function isPoisonPayload(p) {
    return p.payloadType === (0, _constants.PayloadType).PoisonMicroblock;
}
function isCoinbasePayload(p) {
    return p.payloadType === (0, _constants.PayloadType).Coinbase;
}
function createTokenTransferPayload(recipient, amount, memo) {
    if (typeof recipient === "string") recipient = (0, _principalCV.principalCV)(recipient);
    if (typeof memo === "string") memo = (0, _types.createMemoString)(memo);
    return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).TokenTransfer,
        recipient,
        amount: (0, _common.intToBigInt)(amount, false),
        memo: memo ?? (0, _types.createMemoString)("")
    };
}
function createContractCallPayload(contractAddress, contractName, functionName, functionArgs) {
    if (typeof contractAddress === "string") contractAddress = (0, _postconditionTypes.createAddress)(contractAddress);
    if (typeof contractName === "string") contractName = (0, _postconditionTypes.createLPString)(contractName);
    if (typeof functionName === "string") functionName = (0, _postconditionTypes.createLPString)(functionName);
    return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).ContractCall,
        contractAddress,
        contractName,
        functionName,
        functionArgs
    };
}
function createSmartContractPayload(contractName, codeBody, clarityVersion) {
    if (typeof contractName === "string") contractName = (0, _postconditionTypes.createLPString)(contractName);
    if (typeof codeBody === "string") codeBody = (0, _types.codeBodyString)(codeBody);
    if (typeof clarityVersion === "number") return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).VersionedSmartContract,
        clarityVersion,
        contractName,
        codeBody
    };
    return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).SmartContract,
        contractName,
        codeBody
    };
}
function createPoisonPayload() {
    return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).PoisonMicroblock
    };
}
function createCoinbasePayload(coinbaseBytes, altRecipient) {
    if (coinbaseBytes.byteLength != (0, _constants.COINBASE_BYTES_LENGTH)) throw Error(`Coinbase buffer size must be ${(0, _constants.COINBASE_BYTES_LENGTH)} bytes`);
    if (altRecipient != undefined) return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).CoinbaseToAltRecipient,
        coinbaseBytes,
        recipient: altRecipient
    };
    return {
        type: (0, _constants.StacksMessageType).Payload,
        payloadType: (0, _constants.PayloadType).Coinbase,
        coinbaseBytes
    };
}
function serializePayload(payload) {
    const bytesArray = [];
    bytesArray.push(payload.payloadType);
    switch(payload.payloadType){
        case (0, _constants.PayloadType).TokenTransfer:
            bytesArray.push((0, _.serializeCV)(payload.recipient));
            bytesArray.push((0, _common.intToBytes)(payload.amount, false, 8));
            bytesArray.push((0, _types.serializeStacksMessage)(payload.memo));
            break;
        case (0, _constants.PayloadType).ContractCall:
            bytesArray.push((0, _types.serializeStacksMessage)(payload.contractAddress));
            bytesArray.push((0, _types.serializeStacksMessage)(payload.contractName));
            bytesArray.push((0, _types.serializeStacksMessage)(payload.functionName));
            const numArgs = new Uint8Array(4);
            (0, _common.writeUInt32BE)(numArgs, payload.functionArgs.length, 0);
            bytesArray.push(numArgs);
            payload.functionArgs.forEach((arg)=>{
                bytesArray.push((0, _.serializeCV)(arg));
            });
            break;
        case (0, _constants.PayloadType).SmartContract:
            bytesArray.push((0, _types.serializeStacksMessage)(payload.contractName));
            bytesArray.push((0, _types.serializeStacksMessage)(payload.codeBody));
            break;
        case (0, _constants.PayloadType).VersionedSmartContract:
            bytesArray.push(payload.clarityVersion);
            bytesArray.push((0, _types.serializeStacksMessage)(payload.contractName));
            bytesArray.push((0, _types.serializeStacksMessage)(payload.codeBody));
            break;
        case (0, _constants.PayloadType).PoisonMicroblock:
            break;
        case (0, _constants.PayloadType).Coinbase:
            bytesArray.push(payload.coinbaseBytes);
            break;
        case (0, _constants.PayloadType).CoinbaseToAltRecipient:
            bytesArray.push(payload.coinbaseBytes);
            bytesArray.push((0, _.serializeCV)(payload.recipient));
            break;
    }
    return (0, _common.concatArray)(bytesArray);
}
function deserializePayload(bytesReader) {
    const payloadType = bytesReader.readUInt8Enum((0, _constants.PayloadType), (n)=>{
        throw new Error(`Cannot recognize PayloadType: ${n}`);
    });
    switch(payloadType){
        case (0, _constants.PayloadType).TokenTransfer:
            const recipient = (0, _.deserializeCV)(bytesReader);
            const amount = (0, _common.intToBigInt)(bytesReader.readBytes(8), false);
            const memo = (0, _types.deserializeMemoString)(bytesReader);
            return createTokenTransferPayload(recipient, amount, memo);
        case (0, _constants.PayloadType).ContractCall:
            const contractAddress = (0, _types.deserializeAddress)(bytesReader);
            const contractCallName = (0, _types.deserializeLPString)(bytesReader);
            const functionName = (0, _types.deserializeLPString)(bytesReader);
            const functionArgs = [];
            const numberOfArgs = bytesReader.readUInt32BE();
            for(let i = 0; i < numberOfArgs; i++){
                const clarityValue = (0, _.deserializeCV)(bytesReader);
                functionArgs.push(clarityValue);
            }
            return createContractCallPayload(contractAddress, contractCallName, functionName, functionArgs);
        case (0, _constants.PayloadType).SmartContract:
            const smartContractName = (0, _types.deserializeLPString)(bytesReader);
            const codeBody = (0, _types.deserializeLPString)(bytesReader, 4, 100000);
            return createSmartContractPayload(smartContractName, codeBody);
        case (0, _constants.PayloadType).VersionedSmartContract:
            {
                const clarityVersion = bytesReader.readUInt8Enum((0, _constants.ClarityVersion), (n)=>{
                    throw new Error(`Cannot recognize ClarityVersion: ${n}`);
                });
                const smartContractName = (0, _types.deserializeLPString)(bytesReader);
                const codeBody = (0, _types.deserializeLPString)(bytesReader, 4, 100000);
                return createSmartContractPayload(smartContractName, codeBody, clarityVersion);
            }
        case (0, _constants.PayloadType).PoisonMicroblock:
            return createPoisonPayload();
        case (0, _constants.PayloadType).Coinbase:
            const coinbaseBytes = bytesReader.readBytes((0, _constants.COINBASE_BYTES_LENGTH));
            return createCoinbasePayload(coinbaseBytes);
        case (0, _constants.PayloadType).CoinbaseToAltRecipient:
            const coinbaseToAltRecipientBuffer = bytesReader.readBytes((0, _constants.COINBASE_BYTES_LENGTH));
            const altRecipient = (0, _.deserializeCV)(bytesReader);
            return createCoinbasePayload(coinbaseToAltRecipientBuffer, altRecipient);
    }
}

},{"@stacks/common":"5ZsuO","./constants":"j9zsK","./clarity/":"b9yzg","./clarity/types/principalCV":"fAoZb","./postcondition-types":"dlZDM","./types":"3kaPf","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"39VaY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SerializationError", ()=>SerializationError);
parcelHelpers.export(exports, "DeserializationError", ()=>DeserializationError);
parcelHelpers.export(exports, "NoEstimateAvailableError", ()=>NoEstimateAvailableError);
parcelHelpers.export(exports, "NotImplementedError", ()=>NotImplementedError);
parcelHelpers.export(exports, "SigningError", ()=>SigningError);
parcelHelpers.export(exports, "VerificationError", ()=>VerificationError);
class TransactionError extends Error {
    constructor(message){
        super(message);
        this.message = message;
        this.name = this.constructor.name;
        if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    }
}
class SerializationError extends TransactionError {
    constructor(message){
        super(message);
    }
}
class DeserializationError extends TransactionError {
    constructor(message){
        super(message);
    }
}
class NoEstimateAvailableError extends TransactionError {
    constructor(message){
        super(message);
    }
}
class NotImplementedError extends TransactionError {
    constructor(message){
        super(message);
    }
}
class SigningError extends TransactionError {
    constructor(message){
        super(message);
    }
}
class VerificationError extends TransactionError {
    constructor(message){
        super(message);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cOhwv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthFieldType", ()=>AuthFieldType);
parcelHelpers.export(exports, "deserializeMessageSignature", ()=>deserializeMessageSignature);
parcelHelpers.export(exports, "createTransactionAuthField", ()=>createTransactionAuthField);
parcelHelpers.export(exports, "deserializeTransactionAuthField", ()=>deserializeTransactionAuthField);
parcelHelpers.export(exports, "serializeMessageSignature", ()=>serializeMessageSignature);
parcelHelpers.export(exports, "serializeTransactionAuthField", ()=>serializeTransactionAuthField);
var _errors = require("./errors");
var _constants = require("./constants");
var _keys = require("./keys");
var _common = require("./common");
var _common1 = require("@stacks/common");
var AuthFieldType;
(function(AuthFieldType) {
    AuthFieldType[AuthFieldType["PublicKeyCompressed"] = 0] = "PublicKeyCompressed";
    AuthFieldType[AuthFieldType["PublicKeyUncompressed"] = 1] = "PublicKeyUncompressed";
    AuthFieldType[AuthFieldType["SignatureCompressed"] = 2] = "SignatureCompressed";
    AuthFieldType[AuthFieldType["SignatureUncompressed"] = 3] = "SignatureUncompressed";
})(AuthFieldType || (AuthFieldType = {}));
function deserializeMessageSignature(bytesReader) {
    return (0, _common.createMessageSignature)((0, _common1.bytesToHex)(bytesReader.readBytes((0, _constants.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES))));
}
function createTransactionAuthField(pubKeyEncoding, contents) {
    return {
        pubKeyEncoding,
        type: (0, _constants.StacksMessageType).TransactionAuthField,
        contents
    };
}
function deserializeTransactionAuthField(bytesReader) {
    const authFieldType = bytesReader.readUInt8Enum(AuthFieldType, (n)=>{
        throw new (0, _errors.DeserializationError)(`Could not read ${n} as AuthFieldType`);
    });
    switch(authFieldType){
        case AuthFieldType.PublicKeyCompressed:
            return createTransactionAuthField((0, _constants.PubKeyEncoding).Compressed, (0, _keys.deserializePublicKey)(bytesReader));
        case AuthFieldType.PublicKeyUncompressed:
            return createTransactionAuthField((0, _constants.PubKeyEncoding).Uncompressed, (0, _keys.deserializePublicKey)(bytesReader));
        case AuthFieldType.SignatureCompressed:
            return createTransactionAuthField((0, _constants.PubKeyEncoding).Compressed, deserializeMessageSignature(bytesReader));
        case AuthFieldType.SignatureUncompressed:
            return createTransactionAuthField((0, _constants.PubKeyEncoding).Uncompressed, deserializeMessageSignature(bytesReader));
        default:
            throw new Error(`Unknown auth field type: ${JSON.stringify(authFieldType)}`);
    }
}
function serializeMessageSignature(messageSignature) {
    return (0, _common1.hexToBytes)(messageSignature.data);
}
function serializeTransactionAuthField(field) {
    const bytesArray = [];
    switch(field.contents.type){
        case (0, _constants.StacksMessageType).PublicKey:
            if (field.pubKeyEncoding == (0, _constants.PubKeyEncoding).Compressed) {
                bytesArray.push(AuthFieldType.PublicKeyCompressed);
                bytesArray.push((0, _keys.serializePublicKey)(field.contents));
            } else {
                bytesArray.push(AuthFieldType.PublicKeyUncompressed);
                bytesArray.push((0, _keys.serializePublicKey)((0, _keys.compressPublicKey)(field.contents.data)));
            }
            break;
        case (0, _constants.StacksMessageType).MessageSignature:
            if (field.pubKeyEncoding == (0, _constants.PubKeyEncoding).Compressed) bytesArray.push(AuthFieldType.SignatureCompressed);
            else bytesArray.push(AuthFieldType.SignatureUncompressed);
            bytesArray.push(serializeMessageSignature(field.contents));
            break;
    }
    return (0, _common1.concatArray)(bytesArray);
}

},{"./errors":"39VaY","./constants":"j9zsK","./keys":"3QnZl","./common":"4nRU0","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"4YX2v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ = require(".");
var _bytesReader = require("../bytesReader");
var _types = require("../types");
var _errors = require("../errors");
var _stringCV = require("./types/stringCV");
var _common = require("@stacks/common");
function deserializeCV(serializedClarityValue) {
    let bytesReader;
    if (typeof serializedClarityValue === "string") {
        const hasHexPrefix = serializedClarityValue.slice(0, 2).toLowerCase() === "0x";
        bytesReader = new (0, _bytesReader.BytesReader)((0, _common.hexToBytes)(hasHexPrefix ? serializedClarityValue.slice(2) : serializedClarityValue));
    } else if (serializedClarityValue instanceof Uint8Array) bytesReader = new (0, _bytesReader.BytesReader)(serializedClarityValue);
    else bytesReader = serializedClarityValue;
    const type = bytesReader.readUInt8Enum((0, _.ClarityType), (n)=>{
        throw new (0, _errors.DeserializationError)(`Cannot recognize Clarity Type: ${n}`);
    });
    switch(type){
        case (0, _.ClarityType).Int:
            return (0, _.intCV)(bytesReader.readBytes(16));
        case (0, _.ClarityType).UInt:
            return (0, _.uintCV)(bytesReader.readBytes(16));
        case (0, _.ClarityType).Buffer:
            const bufferLength = bytesReader.readUInt32BE();
            return (0, _.bufferCV)(bytesReader.readBytes(bufferLength));
        case (0, _.ClarityType).BoolTrue:
            return (0, _.trueCV)();
        case (0, _.ClarityType).BoolFalse:
            return (0, _.falseCV)();
        case (0, _.ClarityType).PrincipalStandard:
            const sAddress = (0, _types.deserializeAddress)(bytesReader);
            return (0, _.standardPrincipalCVFromAddress)(sAddress);
        case (0, _.ClarityType).PrincipalContract:
            const cAddress = (0, _types.deserializeAddress)(bytesReader);
            const contractName = (0, _types.deserializeLPString)(bytesReader);
            return (0, _.contractPrincipalCVFromAddress)(cAddress, contractName);
        case (0, _.ClarityType).ResponseOk:
            return (0, _.responseOkCV)(deserializeCV(bytesReader));
        case (0, _.ClarityType).ResponseErr:
            return (0, _.responseErrorCV)(deserializeCV(bytesReader));
        case (0, _.ClarityType).OptionalNone:
            return (0, _.noneCV)();
        case (0, _.ClarityType).OptionalSome:
            return (0, _.someCV)(deserializeCV(bytesReader));
        case (0, _.ClarityType).List:
            const listLength = bytesReader.readUInt32BE();
            const listContents = [];
            for(let i = 0; i < listLength; i++)listContents.push(deserializeCV(bytesReader));
            return (0, _.listCV)(listContents);
        case (0, _.ClarityType).Tuple:
            const tupleLength = bytesReader.readUInt32BE();
            const tupleContents = {};
            for(let i = 0; i < tupleLength; i++){
                const clarityName = (0, _types.deserializeLPString)(bytesReader).content;
                if (clarityName === undefined) throw new (0, _errors.DeserializationError)('"content" is undefined');
                tupleContents[clarityName] = deserializeCV(bytesReader);
            }
            return (0, _.tupleCV)(tupleContents);
        case (0, _.ClarityType).StringASCII:
            const asciiStrLen = bytesReader.readUInt32BE();
            const asciiStr = (0, _common.bytesToAscii)(bytesReader.readBytes(asciiStrLen));
            return (0, _stringCV.stringAsciiCV)(asciiStr);
        case (0, _.ClarityType).StringUTF8:
            const utf8StrLen = bytesReader.readUInt32BE();
            const utf8Str = (0, _common.bytesToUtf8)(bytesReader.readBytes(utf8StrLen));
            return (0, _stringCV.stringUtf8CV)(utf8Str);
        default:
            throw new (0, _errors.DeserializationError)("Unable to deserialize Clarity Value from Uint8Array. Could not find valid Clarity Type.");
    }
}
exports.default = deserializeCV;

},{".":"b9yzg","../bytesReader":"jwb3p","../types":"3kaPf","../errors":"39VaY","./types/stringCV":"8AiJa","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"jwb3p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEnum", ()=>isEnum);
parcelHelpers.export(exports, "BytesReader", ()=>BytesReader);
var _common = require("@stacks/common");
function createEnumChecker(enumVariable) {
    const enumValues = Object.values(enumVariable).filter((v)=>typeof v === "number");
    const enumValueSet = new Set(enumValues);
    return (value)=>enumValueSet.has(value);
}
const enumCheckFunctions = new Map();
function isEnum(enumVariable, value) {
    const checker = enumCheckFunctions.get(enumVariable);
    if (checker !== undefined) return checker(value);
    const newChecker = createEnumChecker(enumVariable);
    enumCheckFunctions.set(enumVariable, newChecker);
    return isEnum(enumVariable, value);
}
class BytesReader {
    constructor(arr){
        this.consumed = 0;
        this.source = arr;
    }
    readBytes(length) {
        const view = this.source.subarray(this.consumed, this.consumed + length);
        this.consumed += length;
        return view;
    }
    readUInt32BE() {
        return (0, _common.readUInt32BE)(this.readBytes(4), 0);
    }
    readUInt8() {
        return (0, _common.readUInt8)(this.readBytes(1), 0);
    }
    readUInt16BE() {
        return (0, _common.readUInt16BE)(this.readBytes(2), 0);
    }
    readBigUIntLE(length) {
        const bytes = this.readBytes(length).slice().reverse();
        const hex = (0, _common.bytesToHex)(bytes);
        return BigInt(`0x${hex}`);
    }
    readBigUIntBE(length) {
        const bytes = this.readBytes(length);
        const hex = (0, _common.bytesToHex)(bytes);
        return BigInt(`0x${hex}`);
    }
    get readOffset() {
        return this.consumed;
    }
    set readOffset(val) {
        this.consumed = val;
    }
    get internalBytes() {
        return this.source;
    }
    readUInt8Enum(enumVariable, invalidEnumErrorFormatter) {
        const num = this.readUInt8();
        if (isEnum(enumVariable, num)) return num;
        throw invalidEnumErrorFormatter(num);
    }
}

},{"@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"cK3Rm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNonce", ()=>getNonce);
parcelHelpers.export(exports, "estimateTransfer", ()=>estimateTransfer);
parcelHelpers.export(exports, "estimateTransferUnsafe", ()=>estimateTransferUnsafe);
parcelHelpers.export(exports, "estimateTransaction", ()=>estimateTransaction);
parcelHelpers.export(exports, "broadcastTransaction", ()=>broadcastTransaction);
parcelHelpers.export(exports, "broadcastRawTransaction", ()=>broadcastRawTransaction);
parcelHelpers.export(exports, "getAbi", ()=>getAbi);
parcelHelpers.export(exports, "makeUnsignedSTXTokenTransfer", ()=>makeUnsignedSTXTokenTransfer);
parcelHelpers.export(exports, "makeSTXTokenTransfer", ()=>makeSTXTokenTransfer);
parcelHelpers.export(exports, "estimateContractDeploy", ()=>estimateContractDeploy);
parcelHelpers.export(exports, "makeContractDeploy", ()=>makeContractDeploy);
parcelHelpers.export(exports, "makeUnsignedContractDeploy", ()=>makeUnsignedContractDeploy);
parcelHelpers.export(exports, "estimateContractFunctionCall", ()=>estimateContractFunctionCall);
parcelHelpers.export(exports, "makeUnsignedContractCall", ()=>makeUnsignedContractCall);
parcelHelpers.export(exports, "makeContractCall", ()=>makeContractCall);
parcelHelpers.export(exports, "makeStandardSTXPostCondition", ()=>makeStandardSTXPostCondition);
parcelHelpers.export(exports, "makeContractSTXPostCondition", ()=>makeContractSTXPostCondition);
parcelHelpers.export(exports, "makeStandardFungiblePostCondition", ()=>makeStandardFungiblePostCondition);
parcelHelpers.export(exports, "makeContractFungiblePostCondition", ()=>makeContractFungiblePostCondition);
parcelHelpers.export(exports, "makeStandardNonFungiblePostCondition", ()=>makeStandardNonFungiblePostCondition);
parcelHelpers.export(exports, "makeContractNonFungiblePostCondition", ()=>makeContractNonFungiblePostCondition);
parcelHelpers.export(exports, "callReadOnlyFunction", ()=>callReadOnlyFunction);
parcelHelpers.export(exports, "getContractMapEntry", ()=>getContractMapEntry);
parcelHelpers.export(exports, "sponsorTransaction", ()=>sponsorTransaction);
parcelHelpers.export(exports, "estimateTransactionByteLength", ()=>estimateTransactionByteLength);
parcelHelpers.export(exports, "estimateTransactionFeeWithFallback", ()=>estimateTransactionFeeWithFallback);
var _common = require("@stacks/common");
var _network = require("@stacks/network");
var _c32Check = require("c32check");
var _authorization = require("./authorization");
var _clarity = require("./clarity");
var _constants = require("./constants");
var _contractAbi = require("./contract-abi");
var _errors = require("./errors");
var _keys = require("./keys");
var _payload = require("./payload");
var _postcondition = require("./postcondition");
var _postconditionTypes = require("./postcondition-types");
var _signer = require("./signer");
var _transaction = require("./transaction");
var _types = require("./types");
var _utils = require("./utils");
async function getNonce(address, network) {
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network ?? new (0, _network.StacksMainnet)());
    const url = derivedNetwork.getAccountApiUrl(address);
    const response = await derivedNetwork.fetchFn(url);
    if (!response.ok) {
        let msg = "";
        try {
            msg = await response.text();
        } catch (error) {}
        throw new Error(`Error fetching nonce. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const responseText = await response.text();
    const result = JSON.parse(responseText);
    return BigInt(result.nonce);
}
async function estimateTransfer(transaction, network) {
    if (transaction.payload.payloadType !== (0, _constants.PayloadType).TokenTransfer) throw new Error(`Transaction fee estimation only possible with ${(0, _constants.PayloadType)[(0, _constants.PayloadType).TokenTransfer]} transactions. Invoked with: ${(0, _constants.PayloadType)[transaction.payload.payloadType]}`);
    return estimateTransferUnsafe(transaction, network);
}
async function estimateTransferUnsafe(transaction, network) {
    const requestHeaders = {
        Accept: "application/text"
    };
    const fetchOptions = {
        method: "GET",
        headers: requestHeaders
    };
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network ?? deriveNetwork(transaction));
    const url = derivedNetwork.getTransferFeeEstimateApiUrl();
    const response = await derivedNetwork.fetchFn(url, fetchOptions);
    if (!response.ok) {
        let msg = "";
        try {
            msg = await response.text();
        } catch (error) {}
        throw new Error(`Error estimating transaction fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const feeRateResult = await response.text();
    const txBytes = BigInt(transaction.serialize().byteLength);
    const feeRate = BigInt(feeRateResult);
    return feeRate * txBytes;
}
async function estimateTransaction(transactionPayload, estimatedLen, network) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            transaction_payload: (0, _common.bytesToHex)((0, _payload.serializePayload)(transactionPayload)),
            ...estimatedLen ? {
                estimated_len: estimatedLen
            } : {}
        })
    };
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network ?? new (0, _network.StacksMainnet)());
    const url = derivedNetwork.getTransactionFeeEstimateApiUrl();
    const response = await derivedNetwork.fetchFn(url, options);
    if (!response.ok) {
        const body = await response.json().catch(()=>({}));
        if (body?.reason === "NoEstimateAvailable") throw new (0, _errors.NoEstimateAvailableError)(body?.reason_data?.message ?? "");
        throw new Error(`Error estimating transaction fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${body}"`);
    }
    const data = await response.json();
    return data.estimations;
}
async function broadcastTransaction(transaction, network, attachment) {
    const rawTx = transaction.serialize();
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network ?? deriveNetwork(transaction));
    const url = derivedNetwork.getBroadcastApiUrl();
    return broadcastRawTransaction(rawTx, url, attachment, derivedNetwork.fetchFn);
}
async function broadcastRawTransaction(rawTx, url, attachment, fetchFn = (0, _network.createFetchFn)()) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": attachment ? "application/json" : "application/octet-stream"
        },
        body: attachment ? JSON.stringify({
            tx: (0, _common.bytesToHex)(rawTx),
            attachment: (0, _common.bytesToHex)(attachment)
        }) : rawTx
    };
    const response = await fetchFn(url, options);
    if (!response.ok) try {
        return await response.json();
    } catch (e) {
        throw Error(`Failed to broadcast transaction: ${e.message}`);
    }
    const text = await response.text();
    const txid = text.replace(/["]+/g, "");
    if (!(0, _utils.validateTxId)(txid)) throw new Error(text);
    return {
        txid
    };
}
async function getAbi(address, contractName, network) {
    const options = {
        method: "GET"
    };
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network);
    const url = derivedNetwork.getAbiApiUrl(address, contractName);
    const response = await derivedNetwork.fetchFn(url, options);
    if (!response.ok) {
        const msg = await response.text().catch(()=>"");
        throw new Error(`Error fetching contract ABI for contract "${contractName}" at address ${address}. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    return JSON.parse(await response.text());
}
function deriveNetwork(transaction) {
    switch(transaction.version){
        case (0, _constants.TransactionVersion).Mainnet:
            return new (0, _network.StacksMainnet)();
        case (0, _constants.TransactionVersion).Testnet:
            return new (0, _network.StacksTestnet)();
    }
}
async function makeUnsignedSTXTokenTransfer(txOptions) {
    const defaultOptions = {
        fee: BigInt(0),
        nonce: BigInt(0),
        network: new (0, _network.StacksMainnet)(),
        memo: "",
        sponsored: false
    };
    const options = Object.assign(defaultOptions, txOptions);
    const payload = (0, _payload.createTokenTransferPayload)(options.recipient, options.amount, options.memo);
    let authorization = null;
    let spendingCondition = null;
    if ("publicKey" in options) spendingCondition = (0, _authorization.createSingleSigSpendingCondition)((0, _constants.AddressHashMode).SerializeP2PKH, options.publicKey, options.nonce, options.fee);
    else spendingCondition = (0, _authorization.createMultiSigSpendingCondition)((0, _constants.AddressHashMode).SerializeP2SH, options.numSignatures, options.publicKeys, options.nonce, options.fee);
    if (options.sponsored) authorization = (0, _authorization.createSponsoredAuth)(spendingCondition);
    else authorization = (0, _authorization.createStandardAuth)(spendingCondition);
    const network = (0, _network.StacksNetwork).fromNameOrNetwork(options.network);
    const transaction = new (0, _transaction.StacksTransaction)(network.version, authorization, payload, undefined, undefined, options.anchorMode, network.chainId);
    if (txOptions.fee === undefined || txOptions.fee === null) {
        const fee = await estimateTransactionFeeWithFallback(transaction, network);
        transaction.setFee(fee);
    }
    if (txOptions.nonce === undefined || txOptions.nonce === null) {
        const addressVersion = options.network.version === (0, _constants.TransactionVersion).Mainnet ? (0, _constants.AddressVersion).MainnetSingleSig : (0, _constants.AddressVersion).TestnetSingleSig;
        const senderAddress = (0, _c32Check.c32address)(addressVersion, transaction.auth.spendingCondition.signer);
        const txNonce = await getNonce(senderAddress, options.network);
        transaction.setNonce(txNonce);
    }
    return transaction;
}
async function makeSTXTokenTransfer(txOptions) {
    if ("senderKey" in txOptions) {
        const publicKey = (0, _keys.publicKeyToString)((0, _keys.getPublicKey)((0, _keys.createStacksPrivateKey)(txOptions.senderKey)));
        const options = (0, _utils.omit)(txOptions, "senderKey");
        const transaction = await makeUnsignedSTXTokenTransfer({
            publicKey,
            ...options
        });
        const privKey = (0, _keys.createStacksPrivateKey)(txOptions.senderKey);
        const signer = new (0, _signer.TransactionSigner)(transaction);
        signer.signOrigin(privKey);
        return transaction;
    } else {
        const options = (0, _utils.omit)(txOptions, "signerKeys");
        const transaction = await makeUnsignedSTXTokenTransfer(options);
        const signer = new (0, _signer.TransactionSigner)(transaction);
        let pubKeys = txOptions.publicKeys;
        for (const key of txOptions.signerKeys){
            const pubKey = (0, _keys.pubKeyfromPrivKey)(key);
            pubKeys = pubKeys.filter((pk)=>pk !== (0, _common.bytesToHex)(pubKey.data));
            signer.signOrigin((0, _keys.createStacksPrivateKey)(key));
        }
        for (const key of pubKeys)signer.appendOrigin((0, _keys.publicKeyFromBytes)((0, _common.hexToBytes)(key)));
        return transaction;
    }
}
async function estimateContractDeploy(transaction, network) {
    if (transaction.payload.payloadType !== (0, _constants.PayloadType).SmartContract && transaction.payload.payloadType !== (0, _constants.PayloadType).VersionedSmartContract) throw new Error(`Contract deploy fee estimation only possible with ${(0, _constants.PayloadType)[(0, _constants.PayloadType).SmartContract]} transactions. Invoked with: ${(0, _constants.PayloadType)[transaction.payload.payloadType]}`);
    const requestHeaders = {
        Accept: "application/text"
    };
    const fetchOptions = {
        method: "GET",
        headers: requestHeaders
    };
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network ?? deriveNetwork(transaction));
    const url = derivedNetwork.getTransferFeeEstimateApiUrl();
    const response = await derivedNetwork.fetchFn(url, fetchOptions);
    if (!response.ok) {
        const msg = await response.text().catch(()=>"");
        throw new Error(`Error estimating contract deploy fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const feeRateResult = await response.text();
    const txBytes = (0, _common.intToBigInt)(transaction.serialize().byteLength, false);
    const feeRate = (0, _common.intToBigInt)(feeRateResult, false);
    return feeRate * txBytes;
}
async function makeContractDeploy(txOptions) {
    if ("senderKey" in txOptions) {
        const publicKey = (0, _keys.publicKeyToString)((0, _keys.getPublicKey)((0, _keys.createStacksPrivateKey)(txOptions.senderKey)));
        const options = (0, _utils.omit)(txOptions, "senderKey");
        const transaction = await makeUnsignedContractDeploy({
            publicKey,
            ...options
        });
        const privKey = (0, _keys.createStacksPrivateKey)(txOptions.senderKey);
        const signer = new (0, _signer.TransactionSigner)(transaction);
        signer.signOrigin(privKey);
        return transaction;
    } else {
        const options = (0, _utils.omit)(txOptions, "signerKeys");
        const transaction = await makeUnsignedContractDeploy(options);
        const signer = new (0, _signer.TransactionSigner)(transaction);
        let pubKeys = txOptions.publicKeys;
        for (const key of txOptions.signerKeys){
            const pubKey = (0, _keys.pubKeyfromPrivKey)(key);
            pubKeys = pubKeys.filter((pk)=>pk !== (0, _common.bytesToHex)(pubKey.data));
            signer.signOrigin((0, _keys.createStacksPrivateKey)(key));
        }
        for (const key of pubKeys)signer.appendOrigin((0, _keys.publicKeyFromBytes)((0, _common.hexToBytes)(key)));
        return transaction;
    }
}
async function makeUnsignedContractDeploy(txOptions) {
    const defaultOptions = {
        fee: BigInt(0),
        nonce: BigInt(0),
        network: new (0, _network.StacksMainnet)(),
        postConditionMode: (0, _constants.PostConditionMode).Deny,
        sponsored: false,
        clarityVersion: (0, _constants.ClarityVersion).Clarity2
    };
    const options = Object.assign(defaultOptions, txOptions);
    const payload = (0, _payload.createSmartContractPayload)(options.contractName, options.codeBody, options.clarityVersion);
    let authorization = null;
    let spendingCondition = null;
    if ("publicKey" in options) spendingCondition = (0, _authorization.createSingleSigSpendingCondition)((0, _constants.AddressHashMode).SerializeP2PKH, options.publicKey, options.nonce, options.fee);
    else spendingCondition = (0, _authorization.createMultiSigSpendingCondition)((0, _constants.AddressHashMode).SerializeP2SH, options.numSignatures, options.publicKeys, options.nonce, options.fee);
    if (options.sponsored) authorization = (0, _authorization.createSponsoredAuth)(spendingCondition);
    else authorization = (0, _authorization.createStandardAuth)(spendingCondition);
    const network = (0, _network.StacksNetwork).fromNameOrNetwork(options.network);
    const postConditions = [];
    if (options.postConditions && options.postConditions.length > 0) options.postConditions.forEach((postCondition)=>{
        postConditions.push(postCondition);
    });
    const lpPostConditions = (0, _types.createLPList)(postConditions);
    const transaction = new (0, _transaction.StacksTransaction)(network.version, authorization, payload, lpPostConditions, options.postConditionMode, options.anchorMode, network.chainId);
    if (txOptions.fee === undefined || txOptions.fee === null) {
        const fee = await estimateTransactionFeeWithFallback(transaction, network);
        transaction.setFee(fee);
    }
    if (txOptions.nonce === undefined || txOptions.nonce === null) {
        const addressVersion = options.network.version === (0, _constants.TransactionVersion).Mainnet ? (0, _constants.AddressVersion).MainnetSingleSig : (0, _constants.AddressVersion).TestnetSingleSig;
        const senderAddress = (0, _c32Check.c32address)(addressVersion, transaction.auth.spendingCondition.signer);
        const txNonce = await getNonce(senderAddress, options.network);
        transaction.setNonce(txNonce);
    }
    return transaction;
}
async function estimateContractFunctionCall(transaction, network) {
    if (transaction.payload.payloadType !== (0, _constants.PayloadType).ContractCall) throw new Error(`Contract call fee estimation only possible with ${(0, _constants.PayloadType)[(0, _constants.PayloadType).ContractCall]} transactions. Invoked with: ${(0, _constants.PayloadType)[transaction.payload.payloadType]}`);
    const requestHeaders = {
        Accept: "application/text"
    };
    const fetchOptions = {
        method: "GET",
        headers: requestHeaders
    };
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network ?? deriveNetwork(transaction));
    const url = derivedNetwork.getTransferFeeEstimateApiUrl();
    const response = await derivedNetwork.fetchFn(url, fetchOptions);
    if (!response.ok) {
        const msg = await response.text().catch(()=>"");
        throw new Error(`Error estimating contract call fee. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const feeRateResult = await response.text();
    const txBytes = (0, _common.intToBigInt)(transaction.serialize().byteLength, false);
    const feeRate = (0, _common.intToBigInt)(feeRateResult, false);
    return feeRate * txBytes;
}
async function makeUnsignedContractCall(txOptions) {
    const defaultOptions = {
        fee: BigInt(0),
        nonce: BigInt(0),
        network: new (0, _network.StacksMainnet)(),
        postConditionMode: (0, _constants.PostConditionMode).Deny,
        sponsored: false
    };
    const options = Object.assign(defaultOptions, txOptions);
    const payload = (0, _payload.createContractCallPayload)(options.contractAddress, options.contractName, options.functionName, options.functionArgs);
    if (options?.validateWithAbi) {
        let abi;
        if (typeof options.validateWithAbi === "boolean") {
            if (options?.network) abi = await getAbi(options.contractAddress, options.contractName, options.network);
            else throw new Error("Network option must be provided in order to validate with ABI");
        } else abi = options.validateWithAbi;
        (0, _contractAbi.validateContractCall)(payload, abi);
    }
    let spendingCondition = null;
    let authorization = null;
    if ("publicKey" in options) spendingCondition = (0, _authorization.createSingleSigSpendingCondition)((0, _constants.AddressHashMode).SerializeP2PKH, options.publicKey, options.nonce, options.fee);
    else spendingCondition = (0, _authorization.createMultiSigSpendingCondition)((0, _constants.AddressHashMode).SerializeP2SH, options.numSignatures, options.publicKeys, options.nonce, options.fee);
    if (options.sponsored) authorization = (0, _authorization.createSponsoredAuth)(spendingCondition);
    else authorization = (0, _authorization.createStandardAuth)(spendingCondition);
    const network = (0, _network.StacksNetwork).fromNameOrNetwork(options.network);
    const postConditions = [];
    if (options.postConditions && options.postConditions.length > 0) options.postConditions.forEach((postCondition)=>{
        postConditions.push(postCondition);
    });
    const lpPostConditions = (0, _types.createLPList)(postConditions);
    const transaction = new (0, _transaction.StacksTransaction)(network.version, authorization, payload, lpPostConditions, options.postConditionMode, options.anchorMode, network.chainId);
    if (txOptions.fee === undefined || txOptions.fee === null) {
        const fee = await estimateTransactionFeeWithFallback(transaction, network);
        transaction.setFee(fee);
    }
    if (txOptions.nonce === undefined || txOptions.nonce === null) {
        const addressVersion = network.version === (0, _constants.TransactionVersion).Mainnet ? (0, _constants.AddressVersion).MainnetSingleSig : (0, _constants.AddressVersion).TestnetSingleSig;
        const senderAddress = (0, _c32Check.c32address)(addressVersion, transaction.auth.spendingCondition.signer);
        const txNonce = await getNonce(senderAddress, network);
        transaction.setNonce(txNonce);
    }
    return transaction;
}
async function makeContractCall(txOptions) {
    if ("senderKey" in txOptions) {
        const publicKey = (0, _keys.publicKeyToString)((0, _keys.getPublicKey)((0, _keys.createStacksPrivateKey)(txOptions.senderKey)));
        const options = (0, _utils.omit)(txOptions, "senderKey");
        const transaction = await makeUnsignedContractCall({
            publicKey,
            ...options
        });
        const privKey = (0, _keys.createStacksPrivateKey)(txOptions.senderKey);
        const signer = new (0, _signer.TransactionSigner)(transaction);
        signer.signOrigin(privKey);
        return transaction;
    } else {
        const options = (0, _utils.omit)(txOptions, "signerKeys");
        const transaction = await makeUnsignedContractCall(options);
        const signer = new (0, _signer.TransactionSigner)(transaction);
        let pubKeys = txOptions.publicKeys;
        for (const key of txOptions.signerKeys){
            const pubKey = (0, _keys.pubKeyfromPrivKey)(key);
            pubKeys = pubKeys.filter((pk)=>pk !== (0, _common.bytesToHex)(pubKey.data));
            signer.signOrigin((0, _keys.createStacksPrivateKey)(key));
        }
        for (const key of pubKeys)signer.appendOrigin((0, _keys.publicKeyFromBytes)((0, _common.hexToBytes)(key)));
        return transaction;
    }
}
function makeStandardSTXPostCondition(address, conditionCode, amount) {
    return (0, _postcondition.createSTXPostCondition)((0, _postconditionTypes.createStandardPrincipal)(address), conditionCode, amount);
}
function makeContractSTXPostCondition(address, contractName, conditionCode, amount) {
    return (0, _postcondition.createSTXPostCondition)((0, _postconditionTypes.createContractPrincipal)(address, contractName), conditionCode, amount);
}
function makeStandardFungiblePostCondition(address, conditionCode, amount, assetInfo) {
    return (0, _postcondition.createFungiblePostCondition)((0, _postconditionTypes.createStandardPrincipal)(address), conditionCode, amount, assetInfo);
}
function makeContractFungiblePostCondition(address, contractName, conditionCode, amount, assetInfo) {
    return (0, _postcondition.createFungiblePostCondition)((0, _postconditionTypes.createContractPrincipal)(address, contractName), conditionCode, amount, assetInfo);
}
function makeStandardNonFungiblePostCondition(address, conditionCode, assetInfo, assetId) {
    return (0, _postcondition.createNonFungiblePostCondition)((0, _postconditionTypes.createStandardPrincipal)(address), conditionCode, assetInfo, assetId);
}
function makeContractNonFungiblePostCondition(address, contractName, conditionCode, assetInfo, assetId) {
    return (0, _postcondition.createNonFungiblePostCondition)((0, _postconditionTypes.createContractPrincipal)(address, contractName), conditionCode, assetInfo, assetId);
}
async function callReadOnlyFunction(readOnlyFunctionOptions) {
    const defaultOptions = {
        network: new (0, _network.StacksMainnet)()
    };
    const options = Object.assign(defaultOptions, readOnlyFunctionOptions);
    const { contractName , contractAddress , functionName , functionArgs , senderAddress  } = options;
    const network = (0, _network.StacksNetwork).fromNameOrNetwork(options.network);
    const url = network.getReadOnlyFunctionCallApiUrl(contractAddress, contractName, functionName);
    const args = functionArgs.map((arg)=>(0, _utils.cvToHex)(arg));
    const body = JSON.stringify({
        sender: senderAddress,
        arguments: args
    });
    const response = await network.fetchFn(url, {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!response.ok) {
        const msg = await response.text().catch(()=>"");
        throw new Error(`Error calling read-only function. Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    return response.json().then((responseJson)=>(0, _utils.parseReadOnlyResponse)(responseJson));
}
async function getContractMapEntry(getContractMapEntryOptions) {
    const defaultOptions = {
        network: new (0, _network.StacksMainnet)()
    };
    const { contractAddress , contractName , mapName , mapKey , network  } = Object.assign(defaultOptions, getContractMapEntryOptions);
    const derivedNetwork = (0, _network.StacksNetwork).fromNameOrNetwork(network);
    const url = derivedNetwork.getMapEntryUrl(contractAddress, contractName, mapName);
    const serializedKeyBytes = (0, _clarity.serializeCV)(mapKey);
    const serializedKeyHex = "0x" + (0, _common.bytesToHex)(serializedKeyBytes);
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(serializedKeyHex)
    };
    const response = await derivedNetwork.fetchFn(url, fetchOptions);
    if (!response.ok) {
        const msg = await response.text().catch(()=>"");
        throw new Error(`Error fetching map entry for map "${mapName}" in contract "${contractName}" at address ${contractAddress}, using map key "${serializedKeyHex}". Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the message: "${msg}"`);
    }
    const responseBody = await response.text();
    const responseJson = JSON.parse(responseBody);
    if (!responseJson.data) throw new Error(`Error fetching map entry for map "${mapName}" in contract "${contractName}" at address ${contractAddress}, using map key "${serializedKeyHex}". Response ${response.status}: ${response.statusText}. Attempted to fetch ${url} and failed with the response: "${responseBody}"`);
    let deserializedCv;
    try {
        deserializedCv = (0, _clarity.deserializeCV)(responseJson.data);
    } catch (error) {
        throw new Error(`Error deserializing Clarity value "${responseJson.data}": ${error}`);
    }
    return deserializedCv;
}
async function sponsorTransaction(sponsorOptions) {
    const defaultOptions = {
        fee: 0,
        sponsorNonce: 0,
        sponsorAddressHashmode: (0, _constants.AddressHashMode).SerializeP2PKH,
        network: sponsorOptions.transaction.version === (0, _constants.TransactionVersion).Mainnet ? new (0, _network.StacksMainnet)() : new (0, _network.StacksTestnet)()
    };
    const options = Object.assign(defaultOptions, sponsorOptions);
    const network = (0, _network.StacksNetwork).fromNameOrNetwork(options.network);
    const sponsorPubKey = (0, _keys.pubKeyfromPrivKey)(options.sponsorPrivateKey);
    if (sponsorOptions.fee === undefined || sponsorOptions.fee === null) {
        let txFee = 0;
        switch(options.transaction.payload.payloadType){
            case (0, _constants.PayloadType).TokenTransfer:
            case (0, _constants.PayloadType).SmartContract:
            case (0, _constants.PayloadType).VersionedSmartContract:
            case (0, _constants.PayloadType).ContractCall:
                const estimatedLen = estimateTransactionByteLength(options.transaction);
                try {
                    txFee = (await estimateTransaction(options.transaction.payload, estimatedLen, network))[1].fee;
                } catch (e) {
                    throw e;
                }
                break;
            default:
                throw new Error(`Sponsored transactions not supported for transaction type ${(0, _constants.PayloadType)[options.transaction.payload.payloadType]}`);
        }
        options.transaction.setFee(txFee);
        options.fee = txFee;
    }
    if (sponsorOptions.sponsorNonce === undefined || sponsorOptions.sponsorNonce === null) {
        const addressVersion = network.version === (0, _constants.TransactionVersion).Mainnet ? (0, _constants.AddressVersion).MainnetSingleSig : (0, _constants.AddressVersion).TestnetSingleSig;
        const senderAddress = (0, _keys.publicKeyToAddress)(addressVersion, sponsorPubKey);
        const sponsorNonce = await getNonce(senderAddress, network);
        options.sponsorNonce = sponsorNonce;
    }
    const sponsorSpendingCondition = (0, _authorization.createSingleSigSpendingCondition)(options.sponsorAddressHashmode, (0, _keys.publicKeyToString)(sponsorPubKey), options.sponsorNonce, options.fee);
    options.transaction.setSponsor(sponsorSpendingCondition);
    const privKey = (0, _keys.createStacksPrivateKey)(options.sponsorPrivateKey);
    const signer = (0, _signer.TransactionSigner).createSponsorSigner(options.transaction, sponsorSpendingCondition);
    signer.signSponsor(privKey);
    return signer.transaction;
}
function estimateTransactionByteLength(transaction) {
    const hashMode = transaction.auth.spendingCondition.hashMode;
    const multiSigHashModes = [
        (0, _constants.AddressHashMode).SerializeP2SH,
        (0, _constants.AddressHashMode).SerializeP2WSH
    ];
    if (multiSigHashModes.includes(hashMode)) {
        const multiSigSpendingCondition = transaction.auth.spendingCondition;
        const existingSignatures = multiSigSpendingCondition.fields.filter((field)=>field.contents.type === (0, _constants.StacksMessageType).MessageSignature).length;
        const totalSignatureLength = (multiSigSpendingCondition.signaturesRequired - existingSignatures) * ((0, _constants.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES) + 1);
        return transaction.serialize().byteLength + totalSignatureLength;
    } else return transaction.serialize().byteLength;
}
async function estimateTransactionFeeWithFallback(transaction, network) {
    try {
        const estimatedLen = estimateTransactionByteLength(transaction);
        return (await estimateTransaction(transaction.payload, estimatedLen, network))[1].fee;
    } catch (error) {
        if (error instanceof (0, _errors.NoEstimateAvailableError)) return await estimateTransferUnsafe(transaction, network);
        throw error;
    }
}

},{"@stacks/common":"5ZsuO","@stacks/network":"c5pLF","c32check":"hm0s8","./authorization":"bWLju","./clarity":"b9yzg","./constants":"j9zsK","./contract-abi":"3mu4l","./errors":"39VaY","./keys":"3QnZl","./payload":"3ZhF7","./postcondition":"kMlp5","./postcondition-types":"dlZDM","./signer":"kfMtV","./transaction":"88rp8","./types":"3kaPf","./utils":"iOZqx","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"3mu4l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClarityAbiTypeId", ()=>ClarityAbiTypeId);
parcelHelpers.export(exports, "isClarityAbiPrimitive", ()=>isClarityAbiPrimitive);
parcelHelpers.export(exports, "isClarityAbiBuffer", ()=>isClarityAbiBuffer);
parcelHelpers.export(exports, "isClarityAbiStringAscii", ()=>isClarityAbiStringAscii);
parcelHelpers.export(exports, "isClarityAbiStringUtf8", ()=>isClarityAbiStringUtf8);
parcelHelpers.export(exports, "isClarityAbiResponse", ()=>isClarityAbiResponse);
parcelHelpers.export(exports, "isClarityAbiOptional", ()=>isClarityAbiOptional);
parcelHelpers.export(exports, "isClarityAbiTuple", ()=>isClarityAbiTuple);
parcelHelpers.export(exports, "isClarityAbiList", ()=>isClarityAbiList);
parcelHelpers.export(exports, "getTypeUnion", ()=>getTypeUnion);
parcelHelpers.export(exports, "encodeClarityValue", ()=>encodeClarityValue);
parcelHelpers.export(exports, "getTypeString", ()=>getTypeString);
parcelHelpers.export(exports, "abiFunctionToString", ()=>abiFunctionToString);
parcelHelpers.export(exports, "validateContractCall", ()=>validateContractCall);
parcelHelpers.export(exports, "parseToCV", ()=>parseToCV);
var _utils = require("./utils");
var _clarity = require("./clarity");
var _errors = require("./errors");
var _stringCV = require("./clarity/types/stringCV");
var _common = require("@stacks/common");
var ClarityAbiTypeId;
(function(ClarityAbiTypeId) {
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeUInt128"] = 1] = "ClarityAbiTypeUInt128";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeInt128"] = 2] = "ClarityAbiTypeInt128";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeBool"] = 3] = "ClarityAbiTypeBool";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypePrincipal"] = 4] = "ClarityAbiTypePrincipal";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeNone"] = 5] = "ClarityAbiTypeNone";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeBuffer"] = 6] = "ClarityAbiTypeBuffer";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeResponse"] = 7] = "ClarityAbiTypeResponse";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeOptional"] = 8] = "ClarityAbiTypeOptional";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeTuple"] = 9] = "ClarityAbiTypeTuple";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeList"] = 10] = "ClarityAbiTypeList";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeStringAscii"] = 11] = "ClarityAbiTypeStringAscii";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeStringUtf8"] = 12] = "ClarityAbiTypeStringUtf8";
    ClarityAbiTypeId[ClarityAbiTypeId["ClarityAbiTypeTraitReference"] = 13] = "ClarityAbiTypeTraitReference";
})(ClarityAbiTypeId || (ClarityAbiTypeId = {}));
const isClarityAbiPrimitive = (val)=>typeof val === "string";
const isClarityAbiBuffer = (val)=>val.buffer !== undefined;
const isClarityAbiStringAscii = (val)=>val["string-ascii"] !== undefined;
const isClarityAbiStringUtf8 = (val)=>val["string-utf8"] !== undefined;
const isClarityAbiResponse = (val)=>val.response !== undefined;
const isClarityAbiOptional = (val)=>val.optional !== undefined;
const isClarityAbiTuple = (val)=>val.tuple !== undefined;
const isClarityAbiList = (val)=>val.list !== undefined;
function getTypeUnion(val) {
    if (isClarityAbiPrimitive(val)) {
        if (val === "uint128") return {
            id: ClarityAbiTypeId.ClarityAbiTypeUInt128,
            type: val
        };
        else if (val === "int128") return {
            id: ClarityAbiTypeId.ClarityAbiTypeInt128,
            type: val
        };
        else if (val === "bool") return {
            id: ClarityAbiTypeId.ClarityAbiTypeBool,
            type: val
        };
        else if (val === "principal") return {
            id: ClarityAbiTypeId.ClarityAbiTypePrincipal,
            type: val
        };
        else if (val === "trait_reference") return {
            id: ClarityAbiTypeId.ClarityAbiTypeTraitReference,
            type: val
        };
        else if (val === "none") return {
            id: ClarityAbiTypeId.ClarityAbiTypeNone,
            type: val
        };
        else throw new Error(`Unexpected Clarity ABI type primitive: ${JSON.stringify(val)}`);
    } else if (isClarityAbiBuffer(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeBuffer,
        type: val
    };
    else if (isClarityAbiResponse(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeResponse,
        type: val
    };
    else if (isClarityAbiOptional(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeOptional,
        type: val
    };
    else if (isClarityAbiTuple(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeTuple,
        type: val
    };
    else if (isClarityAbiList(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeList,
        type: val
    };
    else if (isClarityAbiStringAscii(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeStringAscii,
        type: val
    };
    else if (isClarityAbiStringUtf8(val)) return {
        id: ClarityAbiTypeId.ClarityAbiTypeStringUtf8,
        type: val
    };
    else throw new Error(`Unexpected Clarity ABI type: ${JSON.stringify(val)}`);
}
function encodeClarityValue(input, val) {
    let union;
    if (input.id !== undefined) union = input;
    else union = getTypeUnion(input);
    switch(union.id){
        case ClarityAbiTypeId.ClarityAbiTypeUInt128:
            return (0, _clarity.uintCV)(val);
        case ClarityAbiTypeId.ClarityAbiTypeInt128:
            return (0, _clarity.intCV)(val);
        case ClarityAbiTypeId.ClarityAbiTypeBool:
            if (val === "false" || val === "0") return (0, _clarity.falseCV)();
            else if (val === "true" || val === "1") return (0, _clarity.trueCV)();
            else throw new Error(`Unexpected Clarity bool value: ${JSON.stringify(val)}`);
        case ClarityAbiTypeId.ClarityAbiTypePrincipal:
            if (val.includes(".")) {
                const [addr, name] = val.split(".");
                return (0, _clarity.contractPrincipalCV)(addr, name);
            } else return (0, _clarity.standardPrincipalCV)(val);
        case ClarityAbiTypeId.ClarityAbiTypeTraitReference:
            const [addr, name] = val.split(".");
            return (0, _clarity.contractPrincipalCV)(addr, name);
        case ClarityAbiTypeId.ClarityAbiTypeNone:
            return (0, _clarity.noneCV)();
        case ClarityAbiTypeId.ClarityAbiTypeBuffer:
            return (0, _clarity.bufferCV)((0, _common.utf8ToBytes)(val));
        case ClarityAbiTypeId.ClarityAbiTypeStringAscii:
            return (0, _stringCV.stringAsciiCV)(val);
        case ClarityAbiTypeId.ClarityAbiTypeStringUtf8:
            return (0, _stringCV.stringUtf8CV)(val);
        case ClarityAbiTypeId.ClarityAbiTypeResponse:
            throw new (0, _errors.NotImplementedError)(`Unsupported encoding for Clarity type: ${union.id}`);
        case ClarityAbiTypeId.ClarityAbiTypeOptional:
            throw new (0, _errors.NotImplementedError)(`Unsupported encoding for Clarity type: ${union.id}`);
        case ClarityAbiTypeId.ClarityAbiTypeTuple:
            throw new (0, _errors.NotImplementedError)(`Unsupported encoding for Clarity type: ${union.id}`);
        case ClarityAbiTypeId.ClarityAbiTypeList:
            throw new (0, _errors.NotImplementedError)(`Unsupported encoding for Clarity type: ${union.id}`);
        default:
            throw new Error(`Unexpected Clarity type ID: ${JSON.stringify(union)}`);
    }
}
function getTypeString(val) {
    if (isClarityAbiPrimitive(val)) {
        if (val === "int128") return "int";
        else if (val === "uint128") return "uint";
        return val;
    } else if (isClarityAbiBuffer(val)) return `(buff ${val.buffer.length})`;
    else if (isClarityAbiStringAscii(val)) return `(string-ascii ${val["string-ascii"].length})`;
    else if (isClarityAbiStringUtf8(val)) return `(string-utf8 ${val["string-utf8"].length})`;
    else if (isClarityAbiResponse(val)) return `(response ${getTypeString(val.response.ok)} ${getTypeString(val.response.error)})`;
    else if (isClarityAbiOptional(val)) return `(optional ${getTypeString(val.optional)})`;
    else if (isClarityAbiTuple(val)) return `(tuple ${val.tuple.map((t)=>`(${t.name} ${getTypeString(t.type)})`).join(" ")})`;
    else if (isClarityAbiList(val)) return `(list ${val.list.length} ${getTypeString(val.list.type)})`;
    else throw new Error(`Type string unsupported for Clarity type: ${JSON.stringify(val)}`);
}
function abiFunctionToString(func) {
    const access = func.access === "read_only" ? "read-only" : func.access;
    return `(define-${access} (${func.name} ${func.args.map((arg)=>`(${arg.name} ${getTypeString(arg.type)})`).join(" ")}))`;
}
function matchType(cv, abiType) {
    const union = getTypeUnion(abiType);
    switch(cv.type){
        case (0, _clarity.ClarityType).BoolTrue:
        case (0, _clarity.ClarityType).BoolFalse:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeBool;
        case (0, _clarity.ClarityType).Int:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeInt128;
        case (0, _clarity.ClarityType).UInt:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeUInt128;
        case (0, _clarity.ClarityType).Buffer:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeBuffer && union.type.buffer.length >= cv.buffer.length;
        case (0, _clarity.ClarityType).StringASCII:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeStringAscii && union.type["string-ascii"].length >= cv.data.length;
        case (0, _clarity.ClarityType).StringUTF8:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeStringUtf8 && union.type["string-utf8"].length >= cv.data.length;
        case (0, _clarity.ClarityType).OptionalNone:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeNone || union.id === ClarityAbiTypeId.ClarityAbiTypeOptional;
        case (0, _clarity.ClarityType).OptionalSome:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeOptional && matchType(cv.value, union.type.optional);
        case (0, _clarity.ClarityType).ResponseErr:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeResponse && matchType(cv.value, union.type.response.error);
        case (0, _clarity.ClarityType).ResponseOk:
            return union.id === ClarityAbiTypeId.ClarityAbiTypeResponse && matchType(cv.value, union.type.response.ok);
        case (0, _clarity.ClarityType).PrincipalContract:
            return union.id === ClarityAbiTypeId.ClarityAbiTypePrincipal || union.id === ClarityAbiTypeId.ClarityAbiTypeTraitReference;
        case (0, _clarity.ClarityType).PrincipalStandard:
            return union.id === ClarityAbiTypeId.ClarityAbiTypePrincipal;
        case (0, _clarity.ClarityType).List:
            return union.id == ClarityAbiTypeId.ClarityAbiTypeList && union.type.list.length >= cv.list.length && cv.list.every((val)=>matchType(val, union.type.list.type));
        case (0, _clarity.ClarityType).Tuple:
            if (union.id == ClarityAbiTypeId.ClarityAbiTypeTuple) {
                const tuple = (0, _utils.cloneDeep)(cv.data);
                for(let i = 0; i < union.type.tuple.length; i++){
                    const abiTupleEntry = union.type.tuple[i];
                    const key = abiTupleEntry.name;
                    const val = tuple[key];
                    if (val) {
                        if (!matchType(val, abiTupleEntry.type)) return false;
                        delete tuple[key];
                    } else return false;
                }
                return true;
            } else return false;
        default:
            return false;
    }
}
function validateContractCall(payload, abi) {
    const filtered = abi.functions.filter((fn)=>fn.name === payload.functionName.content);
    if (filtered.length === 1) {
        const abiFunc = filtered[0];
        const abiArgs = abiFunc.args;
        if (payload.functionArgs.length !== abiArgs.length) throw new Error(`Clarity function expects ${abiArgs.length} argument(s) but received ${payload.functionArgs.length}`);
        for(let i = 0; i < payload.functionArgs.length; i++){
            const payloadArg = payload.functionArgs[i];
            const abiArg = abiArgs[i];
            if (!matchType(payloadArg, abiArg.type)) {
                const argNum = i + 1;
                throw new Error(`Clarity function \`${payload.functionName.content}\` expects argument ${argNum} to be of type ${getTypeString(abiArg.type)}, not ${(0, _clarity.getCVTypeString)(payloadArg)}`);
            }
        }
        return true;
    } else if (filtered.length === 0) throw new Error(`ABI doesn't contain a function with the name ${payload.functionName.content}`);
    else throw new Error(`Malformed ABI. Contains multiple functions with the name ${payload.functionName.content}`);
}
function parseToCV(input, type) {
    const typeString = getTypeString(type);
    if (isClarityAbiPrimitive(type)) {
        if (type === "uint128") return (0, _clarity.uintCV)(input);
        else if (type === "int128") return (0, _clarity.intCV)(input);
        else if (type === "bool") {
            if (input.toLowerCase() === "true") return (0, _clarity.trueCV)();
            else if (input.toLowerCase() === "false") return (0, _clarity.falseCV)();
            else throw new Error(`Invalid bool value: ${input}`);
        } else if (type === "principal") {
            if (input.includes(".")) {
                const [address, contractName] = input.split(".");
                return (0, _clarity.contractPrincipalCV)(address, contractName);
            } else return (0, _clarity.standardPrincipalCV)(input);
        } else throw new Error(`Contract function contains unsupported Clarity ABI type: ${typeString}`);
    } else if (isClarityAbiBuffer(type)) {
        const inputLength = (0, _common.utf8ToBytes)(input).byteLength;
        if (inputLength > type.buffer.length) throw new Error(`Input exceeds specified buffer length limit of ${type.buffer.length}`);
        return (0, _clarity.bufferCVFromString)(input);
    } else if (isClarityAbiResponse(type)) throw new Error(`Contract function contains unsupported Clarity ABI type: ${typeString}`);
    else if (isClarityAbiOptional(type)) throw new Error(`Contract function contains unsupported Clarity ABI type: ${typeString}`);
    else if (isClarityAbiTuple(type)) throw new Error(`Contract function contains unsupported Clarity ABI type: ${typeString}`);
    else if (isClarityAbiList(type)) throw new Error(`Contract function contains unsupported Clarity ABI type: ${typeString}`);
    else throw new Error(`Contract function contains unsupported Clarity ABI type: ${typeString}`);
}

},{"./utils":"iOZqx","./clarity":"b9yzg","./errors":"39VaY","./clarity/types/stringCV":"8AiJa","@stacks/common":"5ZsuO","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kMlp5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSTXPostCondition", ()=>createSTXPostCondition);
parcelHelpers.export(exports, "createFungiblePostCondition", ()=>createFungiblePostCondition);
parcelHelpers.export(exports, "createNonFungiblePostCondition", ()=>createNonFungiblePostCondition);
var _common = require("@stacks/common");
var _constants = require("./constants");
var _postconditionTypes = require("./postcondition-types");
function createSTXPostCondition(principal, conditionCode, amount) {
    if (typeof principal === "string") principal = (0, _postconditionTypes.parsePrincipalString)(principal);
    return {
        type: (0, _constants.StacksMessageType).PostCondition,
        conditionType: (0, _constants.PostConditionType).STX,
        principal,
        conditionCode,
        amount: (0, _common.intToBigInt)(amount, false)
    };
}
function createFungiblePostCondition(principal, conditionCode, amount, assetInfo) {
    if (typeof principal === "string") principal = (0, _postconditionTypes.parsePrincipalString)(principal);
    if (typeof assetInfo === "string") assetInfo = (0, _postconditionTypes.parseAssetInfoString)(assetInfo);
    return {
        type: (0, _constants.StacksMessageType).PostCondition,
        conditionType: (0, _constants.PostConditionType).Fungible,
        principal,
        conditionCode,
        amount: (0, _common.intToBigInt)(amount, false),
        assetInfo
    };
}
function createNonFungiblePostCondition(principal, conditionCode, assetInfo, assetName) {
    if (typeof principal === "string") principal = (0, _postconditionTypes.parsePrincipalString)(principal);
    if (typeof assetInfo === "string") assetInfo = (0, _postconditionTypes.parseAssetInfoString)(assetInfo);
    return {
        type: (0, _constants.StacksMessageType).PostCondition,
        conditionType: (0, _constants.PostConditionType).NonFungible,
        principal,
        conditionCode,
        assetInfo,
        assetName
    };
}

},{"@stacks/common":"5ZsuO","./constants":"j9zsK","./postcondition-types":"dlZDM","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"kfMtV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TransactionSigner", ()=>TransactionSigner);
var _authorization = require("./authorization");
var _utils = require("./utils");
var _constants = require("./constants");
var _errors = require("./errors");
class TransactionSigner {
    constructor(transaction){
        this.transaction = transaction;
        this.sigHash = transaction.signBegin();
        this.originDone = false;
        this.checkOversign = true;
        this.checkOverlap = true;
        const spendingCondition = transaction.auth.spendingCondition;
        if (spendingCondition && !(0, _authorization.isSingleSig)(spendingCondition)) {
            if (spendingCondition.fields.filter((field)=>field.contents.type === (0, _constants.StacksMessageType).MessageSignature).length >= spendingCondition.signaturesRequired) throw new Error("SpendingCondition has more signatures than are expected");
            spendingCondition.fields.forEach((field)=>{
                if (field.contents.type === (0, _constants.StacksMessageType).MessageSignature) {
                    const signature = field.contents;
                    const nextVerify = (0, _authorization.nextVerification)(this.sigHash, transaction.auth.authType, spendingCondition.fee, spendingCondition.nonce, (0, _constants.PubKeyEncoding).Compressed, signature);
                    this.sigHash = nextVerify.nextSigHash;
                }
            });
        }
    }
    static createSponsorSigner(transaction, spendingCondition) {
        if (transaction.auth.authType != (0, _constants.AuthType).Sponsored) throw new (0, _errors.SigningError)("Cannot add sponsor to non-sponsored transaction");
        const tx = (0, _utils.cloneDeep)(transaction);
        tx.setSponsor(spendingCondition);
        const originSigHash = tx.verifyOrigin();
        const signer = new this(tx);
        signer.originDone = true;
        signer.sigHash = originSigHash;
        signer.checkOversign = true;
        signer.checkOverlap = true;
        return signer;
    }
    signOrigin(privateKey) {
        if (this.checkOverlap && this.originDone) throw new (0, _errors.SigningError)("Cannot sign origin after sponsor key");
        if (this.transaction.auth === undefined) throw new (0, _errors.SigningError)('"transaction.auth" is undefined');
        if (this.transaction.auth.spendingCondition === undefined) throw new (0, _errors.SigningError)('"transaction.auth.spendingCondition" is undefined');
        if (!(0, _authorization.isSingleSig)(this.transaction.auth.spendingCondition)) {
            const spendingCondition = this.transaction.auth.spendingCondition;
            if (this.checkOversign && spendingCondition.fields.filter((field)=>field.contents.type === (0, _constants.StacksMessageType).MessageSignature).length >= spendingCondition.signaturesRequired) throw new Error("Origin would have too many signatures");
        }
        const nextSighash = this.transaction.signNextOrigin(this.sigHash, privateKey);
        this.sigHash = nextSighash;
    }
    appendOrigin(publicKey) {
        if (this.checkOverlap && this.originDone) throw Error("Cannot append public key to origin after sponsor key");
        if (this.transaction.auth === undefined) throw new Error('"transaction.auth" is undefined');
        if (this.transaction.auth.spendingCondition === undefined) throw new Error('"transaction.auth.spendingCondition" is undefined');
        this.transaction.appendPubkey(publicKey);
    }
    signSponsor(privateKey) {
        if (this.transaction.auth === undefined) throw new (0, _errors.SigningError)('"transaction.auth" is undefined');
        if (this.transaction.auth.authType !== (0, _constants.AuthType).Sponsored) throw new (0, _errors.SigningError)('"transaction.auth.authType" is not AuthType.Sponsored');
        const nextSighash = this.transaction.signNextSponsor(this.sigHash, privateKey);
        this.sigHash = nextSighash;
        this.originDone = true;
    }
    getTxInComplete() {
        return (0, _utils.cloneDeep)(this.transaction);
    }
    resume(transaction) {
        this.transaction = (0, _utils.cloneDeep)(transaction);
        this.sigHash = transaction.signBegin();
    }
}

},{"./authorization":"bWLju","./utils":"iOZqx","./constants":"j9zsK","./errors":"39VaY","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"88rp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StacksTransaction", ()=>StacksTransaction);
parcelHelpers.export(exports, "deserializeTransaction", ()=>deserializeTransaction);
var _common = require("@stacks/common");
var _constants = require("./constants");
var _authorization = require("./authorization");
var _signature = require("./signature");
var _utils = require("./utils");
var _payload = require("./payload");
var _types = require("./types");
var _keys = require("./keys");
var _bytesReader = require("./bytesReader");
var _errors = require("./errors");
class StacksTransaction {
    constructor(version, auth, payload, postConditions, postConditionMode, anchorMode, chainId){
        this.version = version;
        this.auth = auth;
        if ("amount" in payload) this.payload = {
            ...payload,
            amount: (0, _common.intToBigInt)(payload.amount, false)
        };
        else this.payload = payload;
        this.chainId = chainId ?? (0, _constants.DEFAULT_CHAIN_ID);
        this.postConditionMode = postConditionMode ?? (0, _constants.PostConditionMode).Deny;
        this.postConditions = postConditions ?? (0, _types.createLPList)([]);
        if (anchorMode) this.anchorMode = (0, _constants.anchorModeFromNameOrValue)(anchorMode);
        else switch(payload.payloadType){
            case (0, _constants.PayloadType).Coinbase:
            case (0, _constants.PayloadType).CoinbaseToAltRecipient:
            case (0, _constants.PayloadType).PoisonMicroblock:
                this.anchorMode = (0, _constants.AnchorMode).OnChainOnly;
                break;
            case (0, _constants.PayloadType).ContractCall:
            case (0, _constants.PayloadType).SmartContract:
            case (0, _constants.PayloadType).VersionedSmartContract:
            case (0, _constants.PayloadType).TokenTransfer:
                this.anchorMode = (0, _constants.AnchorMode).Any;
                break;
        }
    }
    signBegin() {
        const tx = (0, _utils.cloneDeep)(this);
        tx.auth = (0, _authorization.intoInitialSighashAuth)(tx.auth);
        return tx.txid();
    }
    verifyBegin() {
        const tx = (0, _utils.cloneDeep)(this);
        tx.auth = (0, _authorization.intoInitialSighashAuth)(tx.auth);
        return tx.txid();
    }
    verifyOrigin() {
        return (0, _authorization.verifyOrigin)(this.auth, this.verifyBegin());
    }
    signNextOrigin(sigHash, privateKey) {
        if (this.auth.spendingCondition === undefined) throw new Error('"auth.spendingCondition" is undefined');
        if (this.auth.authType === undefined) throw new Error('"auth.authType" is undefined');
        return this.signAndAppend(this.auth.spendingCondition, sigHash, (0, _constants.AuthType).Standard, privateKey);
    }
    signNextSponsor(sigHash, privateKey) {
        if (this.auth.authType === (0, _constants.AuthType).Sponsored) return this.signAndAppend(this.auth.sponsorSpendingCondition, sigHash, (0, _constants.AuthType).Sponsored, privateKey);
        else throw new Error('"auth.sponsorSpendingCondition" is undefined');
    }
    appendPubkey(publicKey) {
        const cond = this.auth.spendingCondition;
        if (cond && !(0, _authorization.isSingleSig)(cond)) {
            const compressed = (0, _keys.isCompressed)(publicKey);
            cond.fields.push((0, _signature.createTransactionAuthField)(compressed ? (0, _constants.PubKeyEncoding).Compressed : (0, _constants.PubKeyEncoding).Uncompressed, publicKey));
        } else throw new Error(`Can't append public key to a singlesig condition`);
    }
    signAndAppend(condition, curSigHash, authType, privateKey) {
        const { nextSig , nextSigHash  } = (0, _authorization.nextSignature)(curSigHash, authType, condition.fee, condition.nonce, privateKey);
        if ((0, _authorization.isSingleSig)(condition)) condition.signature = nextSig;
        else {
            const compressed = (0, _common.bytesToHex)(privateKey.data).endsWith("01");
            condition.fields.push((0, _signature.createTransactionAuthField)(compressed ? (0, _constants.PubKeyEncoding).Compressed : (0, _constants.PubKeyEncoding).Uncompressed, nextSig));
        }
        return nextSigHash;
    }
    txid() {
        const serialized = this.serialize();
        return (0, _utils.txidFromData)(serialized);
    }
    setSponsor(sponsorSpendingCondition) {
        if (this.auth.authType != (0, _constants.AuthType).Sponsored) throw new (0, _errors.SigningError)("Cannot sponsor sign a non-sponsored transaction");
        this.auth = (0, _authorization.setSponsor)(this.auth, sponsorSpendingCondition);
    }
    setFee(amount) {
        this.auth = (0, _authorization.setFee)(this.auth, amount);
    }
    setNonce(nonce) {
        this.auth = (0, _authorization.setNonce)(this.auth, nonce);
    }
    setSponsorNonce(nonce) {
        if (this.auth.authType != (0, _constants.AuthType).Sponsored) throw new (0, _errors.SigningError)("Cannot sponsor sign a non-sponsored transaction");
        this.auth = (0, _authorization.setSponsorNonce)(this.auth, nonce);
    }
    serialize() {
        if (this.version === undefined) throw new (0, _errors.SerializationError)('"version" is undefined');
        if (this.chainId === undefined) throw new (0, _errors.SerializationError)('"chainId" is undefined');
        if (this.auth === undefined) throw new (0, _errors.SerializationError)('"auth" is undefined');
        if (this.anchorMode === undefined) throw new (0, _errors.SerializationError)('"anchorMode" is undefined');
        if (this.payload === undefined) throw new (0, _errors.SerializationError)('"payload" is undefined');
        const bytesArray = [];
        bytesArray.push(this.version);
        const chainIdBytes = new Uint8Array(4);
        (0, _common.writeUInt32BE)(chainIdBytes, this.chainId, 0);
        bytesArray.push(chainIdBytes);
        bytesArray.push((0, _authorization.serializeAuthorization)(this.auth));
        bytesArray.push(this.anchorMode);
        bytesArray.push(this.postConditionMode);
        bytesArray.push((0, _types.serializeLPList)(this.postConditions));
        bytesArray.push((0, _payload.serializePayload)(this.payload));
        return (0, _common.concatArray)(bytesArray);
    }
}
function deserializeTransaction(data) {
    let bytesReader;
    if (typeof data === "string") {
        if (data.slice(0, 2).toLowerCase() === "0x") bytesReader = new (0, _bytesReader.BytesReader)((0, _common.hexToBytes)(data.slice(2)));
        else bytesReader = new (0, _bytesReader.BytesReader)((0, _common.hexToBytes)(data));
    } else if (data instanceof Uint8Array) bytesReader = new (0, _bytesReader.BytesReader)(data);
    else bytesReader = data;
    const version = bytesReader.readUInt8Enum((0, _constants.TransactionVersion), (n)=>{
        throw new Error(`Could not parse ${n} as TransactionVersion`);
    });
    const chainId = bytesReader.readUInt32BE();
    const auth = (0, _authorization.deserializeAuthorization)(bytesReader);
    const anchorMode = bytesReader.readUInt8Enum((0, _constants.AnchorMode), (n)=>{
        throw new Error(`Could not parse ${n} as AnchorMode`);
    });
    const postConditionMode = bytesReader.readUInt8Enum((0, _constants.PostConditionMode), (n)=>{
        throw new Error(`Could not parse ${n} as PostConditionMode`);
    });
    const postConditions = (0, _types.deserializeLPList)(bytesReader, (0, _constants.StacksMessageType).PostCondition);
    const payload = (0, _payload.deserializePayload)(bytesReader);
    return new StacksTransaction(version, auth, payload, postConditions, postConditionMode, anchorMode, chainId);
}

},{"@stacks/common":"5ZsuO","./constants":"j9zsK","./authorization":"bWLju","./signature":"cOhwv","./utils":"iOZqx","./payload":"3ZhF7","./types":"3kaPf","./keys":"3QnZl","./bytesReader":"jwb3p","./errors":"39VaY","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"7csM6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bool", ()=>bool);
parcelHelpers.export(exports, "int", ()=>int);
parcelHelpers.export(exports, "uint", ()=>uint);
parcelHelpers.export(exports, "contractPrincipal", ()=>contractPrincipal);
parcelHelpers.export(exports, "standardPrincipal", ()=>standardPrincipal);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "stringAscii", ()=>stringAscii);
parcelHelpers.export(exports, "stringUtf8", ()=>stringUtf8);
parcelHelpers.export(exports, "buffer", ()=>buffer);
parcelHelpers.export(exports, "bufferFromHex", ()=>bufferFromHex);
parcelHelpers.export(exports, "bufferFromAscii", ()=>bufferFromAscii);
parcelHelpers.export(exports, "bufferFromUtf8", ()=>bufferFromUtf8);
parcelHelpers.export(exports, "none", ()=>none);
parcelHelpers.export(exports, "some", ()=>some);
parcelHelpers.export(exports, "ok", ()=>ok);
parcelHelpers.export(exports, "error", ()=>error);
parcelHelpers.export(exports, "tuple", ()=>tuple);
parcelHelpers.export(exports, "serialize", ()=>serialize);
parcelHelpers.export(exports, "deserialize", ()=>deserialize);
var _common = require("@stacks/common");
var _clarity = require("./clarity");
const bool = (0, _clarity.boolCV);
const int = (0, _clarity.intCV);
const uint = (0, _clarity.uintCV);
const contractPrincipal = (0, _clarity.contractPrincipalCV);
const standardPrincipal = (0, _clarity.standardPrincipalCV);
const list = (0, _clarity.listCV);
const stringAscii = (0, _clarity.stringAsciiCV);
const stringUtf8 = (0, _clarity.stringUtf8CV);
const buffer = (0, _clarity.bufferCV);
const bufferFromHex = (hex)=>(0, _clarity.bufferCV)((0, _common.hexToBytes)(hex));
const bufferFromAscii = (ascii)=>(0, _clarity.bufferCV)((0, _common.asciiToBytes)(ascii));
const bufferFromUtf8 = (utf8)=>(0, _clarity.bufferCV)((0, _common.utf8ToBytes)(utf8));
const none = (0, _clarity.noneCV);
const some = (0, _clarity.someCV);
const ok = (0, _clarity.responseOkCV);
const error = (0, _clarity.responseErrorCV);
const tuple = (0, _clarity.tupleCV);
const serialize = (0, _clarity.serializeCV);
const deserialize = (0, _clarity.deserializeCV);

},{"@stacks/common":"5ZsuO","./clarity":"b9yzg","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hPbJx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "principal", ()=>principal);
var _builders = require("./builders");
var _constants = require("./constants");
var _postconditionTypes = require("./postcondition-types");
function principal(principal) {
    if (isContractIdString(principal)) {
        const [address, name] = parseContractId(principal);
        return new PartialPcWithPrincipal(address, name);
    }
    return new PartialPcWithPrincipal(principal, undefined);
}
class PartialPcWithPrincipal {
    constructor(address, contractName){
        this.address = address;
        this.contractName = contractName;
    }
    willSendEq(amount) {
        return new PartialPcFtWithCode(this.address, amount, (0, _constants.FungibleConditionCode).Equal, this.contractName);
    }
    willSendLte(amount) {
        return new PartialPcFtWithCode(this.address, amount, (0, _constants.FungibleConditionCode).LessEqual, this.contractName);
    }
    willSendLt(amount) {
        return new PartialPcFtWithCode(this.address, amount, (0, _constants.FungibleConditionCode).Less, this.contractName);
    }
    willSendGte(amount) {
        return new PartialPcFtWithCode(this.address, amount, (0, _constants.FungibleConditionCode).GreaterEqual, this.contractName);
    }
    willSendGt(amount) {
        return new PartialPcFtWithCode(this.address, amount, (0, _constants.FungibleConditionCode).Greater, this.contractName);
    }
    willSendAsset() {
        return new PartialPcNftWithCode(this.address, (0, _constants.NonFungibleConditionCode).Sends, this.contractName);
    }
    willNotSendAsset() {
        return new PartialPcNftWithCode(this.address, (0, _constants.NonFungibleConditionCode).DoesNotSend, this.contractName);
    }
}
class PartialPcFtWithCode {
    constructor(address, amount, code, contractName){
        this.address = address;
        this.amount = amount;
        this.code = code;
        this.contractName = contractName;
    }
    ustx() {
        if (this.contractName) return (0, _builders.makeContractSTXPostCondition)(this.address, this.contractName, this.code, this.amount);
        return (0, _builders.makeStandardSTXPostCondition)(this.address, this.code, this.amount);
    }
    ft(contractId, tokenName) {
        const [address, name] = parseContractId(contractId);
        if (this.contractName) return (0, _builders.makeContractFungiblePostCondition)(this.address, this.contractName, this.code, this.amount, (0, _postconditionTypes.createAssetInfo)(address, name, tokenName));
        return (0, _builders.makeStandardFungiblePostCondition)(this.address, this.code, this.amount, (0, _postconditionTypes.createAssetInfo)(address, name, tokenName));
    }
}
class PartialPcNftWithCode {
    constructor(principal, code, contractName){
        this.principal = principal;
        this.code = code;
        this.contractName = contractName;
    }
    nft(...args) {
        const { contractAddress , contractName , tokenName , assetId  } = getNftArgs(...args);
        if (this.contractName) return (0, _builders.makeContractNonFungiblePostCondition)(this.principal, this.contractName, this.code, (0, _postconditionTypes.createAssetInfo)(contractAddress, contractName, tokenName), assetId);
        return (0, _builders.makeStandardNonFungiblePostCondition)(this.principal, this.code, (0, _postconditionTypes.createAssetInfo)(contractAddress, contractName, tokenName), assetId);
    }
}
function parseContractId(contractId) {
    const [address, name] = contractId.split(".");
    if (!address || !name) throw new Error(`Invalid contract identifier: ${contractId}`);
    return [
        address,
        name
    ];
}
function parseNft(nftAssetName) {
    const [principal, tokenName] = nftAssetName.split("::");
    if (!principal || !tokenName) throw new Error(`Invalid fully-qualified nft asset name: ${nftAssetName}`);
    const [address, name] = parseContractId(principal);
    return {
        contractAddress: address,
        contractName: name,
        tokenName
    };
}
function isContractIdString(value) {
    return value.includes(".");
}
function getNftArgs(...args) {
    if (args.length === 2) {
        const [assetName, assetId] = args;
        return {
            ...parseNft(assetName),
            assetId
        };
    }
    const [contractId, tokenName, assetId] = args;
    const [address, name] = parseContractId(contractId);
    return {
        contractAddress: address,
        contractName: name,
        tokenName,
        assetId
    };
}

},{"./builders":"cK3Rm","./constants":"j9zsK","./postcondition-types":"dlZDM","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"8HeJL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STRUCTURED_DATA_PREFIX", ()=>STRUCTURED_DATA_PREFIX);
parcelHelpers.export(exports, "hashStructuredData", ()=>hashStructuredData);
parcelHelpers.export(exports, "encodeStructuredData", ()=>encodeStructuredData);
parcelHelpers.export(exports, "decodeStructuredDataSignature", ()=>decodeStructuredDataSignature);
parcelHelpers.export(exports, "signStructuredData", ()=>signStructuredData);
var _sha256 = require("@noble/hashes/sha256");
var _common = require("@stacks/common");
var _clarity = require("./clarity");
var _constants = require("./constants");
var _keys = require("./keys");
const STRUCTURED_DATA_PREFIX = new Uint8Array([
    0x53,
    0x49,
    0x50,
    0x30,
    0x31,
    0x38
]);
function hashStructuredData(structuredData) {
    return (0, _sha256.sha256)((0, _clarity.serializeCV)(structuredData));
}
const hash256BytesLength = 32;
function isDomain(value) {
    if (value.type !== (0, _clarity.ClarityType).Tuple) return false;
    if (![
        "name",
        "version",
        "chain-id"
    ].every((key)=>key in value.data)) return false;
    if (![
        "name",
        "version"
    ].every((key)=>value.data[key].type === (0, _clarity.ClarityType).StringASCII)) return false;
    if (value.data["chain-id"].type !== (0, _clarity.ClarityType).UInt) return false;
    return true;
}
function encodeStructuredData({ message , domain  }) {
    const structuredDataHash = hashStructuredData(message);
    if (!isDomain(domain)) throw new Error("domain parameter must be a valid domain of type TupleCV with keys 'name', 'version', 'chain-id' with respective types StringASCII, StringASCII, UInt");
    const domainHash = hashStructuredData(domain);
    return (0, _common.concatBytes)(STRUCTURED_DATA_PREFIX, domainHash, structuredDataHash);
}
function decodeStructuredDataSignature(signature) {
    const encodedMessageBytes = typeof signature === "string" ? (0, _common.utf8ToBytes)(signature) : signature;
    const domainHash = encodedMessageBytes.slice(STRUCTURED_DATA_PREFIX.length, STRUCTURED_DATA_PREFIX.length + hash256BytesLength);
    const messageHash = encodedMessageBytes.slice(STRUCTURED_DATA_PREFIX.length + hash256BytesLength);
    return {
        domainHash,
        messageHash
    };
}
function signStructuredData({ message , domain , privateKey  }) {
    const structuredDataHash = (0, _common.bytesToHex)((0, _sha256.sha256)(encodeStructuredData({
        message,
        domain
    })));
    const { data  } = (0, _keys.signMessageHashRsv)({
        messageHash: structuredDataHash,
        privateKey
    });
    return {
        data,
        type: (0, _constants.StacksMessageType).StructuredDataSignature
    };
}

},{"@noble/hashes/sha256":"JjjO8","@stacks/common":"5ZsuO","./clarity":"b9yzg","./constants":"j9zsK","./keys":"3QnZl","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"dncj1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPersonFromLegacyFormat", ()=>(0, _personLegacy.getPersonFromLegacyFormat));
parcelHelpers.export(exports, "resolveZoneFileToPerson", ()=>(0, _personZoneFiles.resolveZoneFileToPerson));
var _personLegacy = require("./personLegacy");
var _personZoneFiles = require("./personZoneFiles");

},{"./personLegacy":"1Mbun","./personZoneFiles":"flNNV","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"1Mbun":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPersonFromLegacyFormat", ()=>getPersonFromLegacyFormat);
function formatAccount(serviceName, data) {
    let proofUrl;
    if (data.proof && data.proof.url) proofUrl = data.proof.url;
    return {
        "@type": "Account",
        service: serviceName,
        identifier: data.username,
        proofType: "http",
        proofUrl
    };
}
function getPersonFromLegacyFormat(profile) {
    const profileData = {
        "@type": "Person"
    };
    if (profile) {
        if (profile.name && profile.name.formatted) profileData.name = profile.name.formatted;
        if (profile.bio) profileData.description = profile.bio;
        if (profile.location && profile.location.formatted) profileData.address = {
            "@type": "PostalAddress",
            addressLocality: profile.location.formatted
        };
        const images = [];
        if (profile.avatar && profile.avatar.url) images.push({
            "@type": "ImageObject",
            name: "avatar",
            contentUrl: profile.avatar.url
        });
        if (profile.cover && profile.cover.url) images.push({
            "@type": "ImageObject",
            name: "cover",
            contentUrl: profile.cover.url
        });
        if (images.length) profileData.image = images;
        if (profile.website) profileData.website = [
            {
                "@type": "WebSite",
                url: profile.website
            }
        ];
        const accounts = [];
        if (profile.bitcoin && profile.bitcoin.address) accounts.push({
            "@type": "Account",
            role: "payment",
            service: "bitcoin",
            identifier: profile.bitcoin.address
        });
        if (profile.twitter && profile.twitter.username) accounts.push(formatAccount("twitter", profile.twitter));
        if (profile.facebook && profile.facebook.username) accounts.push(formatAccount("facebook", profile.facebook));
        if (profile.github && profile.github.username) accounts.push(formatAccount("github", profile.github));
        if (profile.auth) {
            if (profile.auth.length > 0) {
                if (profile.auth[0] && profile.auth[0].publicKeychain) accounts.push({
                    "@type": "Account",
                    role: "key",
                    service: "bip32",
                    identifier: profile.auth[0].publicKeychain
                });
            }
        }
        if (profile.pgp && profile.pgp.url) accounts.push({
            "@type": "Account",
            role: "key",
            service: "pgp",
            identifier: profile.pgp.fingerprint,
            contentUrl: profile.pgp.url
        });
        profileData.account = accounts;
    }
    return profileData;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"flNNV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveZoneFileToPerson", ()=>resolveZoneFileToPerson);
var _network = require("@stacks/network");
var _zoneFile = require("zone-file");
var _profile = require("../profile");
var _profileTokens = require("../profileTokens");
function resolveZoneFileToPerson(zoneFile, publicKeyOrAddress, callback, fetchFn = (0, _network.createFetchFn)()) {
    let zoneFileJson = null;
    try {
        zoneFileJson = (0, _zoneFile.parseZoneFile)(zoneFile);
        if (!zoneFileJson.hasOwnProperty("$origin")) {
            zoneFileJson = null;
            throw new Error("zone file is missing an origin");
        }
    } catch (e) {
        console.error(e);
    }
    let tokenFileUrl = null;
    if (zoneFileJson && Object.keys(zoneFileJson).length > 0) tokenFileUrl = (0, _profile.getTokenFileUrl)(zoneFileJson);
    else {
        let profile = null;
        try {
            profile = JSON.parse(zoneFile);
            const person = (0, _profile.Person).fromLegacyFormat(profile);
            profile = person.profile();
        } catch (error) {
            console.warn(error);
        }
        callback(profile);
        return;
    }
    if (tokenFileUrl) fetchFn(tokenFileUrl).then((response)=>response.text()).then((responseText)=>JSON.parse(responseText)).then((responseJson)=>{
        const tokenRecords = responseJson;
        const token = tokenRecords[0].token;
        const profile = (0, _profileTokens.extractProfile)(token, publicKeyOrAddress);
        callback(profile);
    }).catch((error)=>{
        console.warn(error);
    });
    else {
        console.warn("Token file url not found");
        callback({});
    }
}

},{"@stacks/network":"c5pLF","zone-file":"eN4Z7","../profile":"ltGUr","../profileTokens":"bP3ss","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"eN4Z7":[function(require,module,exports) {
"use strict";
module.exports = require("308f1e1376430709");

},{"308f1e1376430709":"9QDxd"}],"9QDxd":[function(require,module,exports) {
"use strict";
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    it = o[Symbol.iterator]();
    return it.next.bind(it);
}
function getZoneFileTemplate() {
    return "{$origin}\n{$ttl}\n\n; SOA Record\n{name} {ttl}    IN  SOA {mname}{rname}(\n{serial} ;serial\n{refresh} ;refresh\n{retry} ;retry\n{expire} ;expire\n{minimum} ;minimum ttl\n)\n\n; NS Records\n{ns}\n\n; MX Records\n{mx}\n\n; A Records\n{a}\n\n; AAAA Records\n{aaaa}\n\n; CNAME Records\n{cname}\n\n; PTR Records\n{ptr}\n\n; TXT Records\n{txt}\n\n; SRV Records\n{srv}\n\n; SPF Records\n{spf}\n\n; URI Records\n{uri}\n";
}
function makeZoneFile(jsonZoneFile, template) {
    if (template === void 0) template = getZoneFileTemplate();
    template = processOrigin(jsonZoneFile["$origin"], template);
    template = processTTL(jsonZoneFile["$ttl"], template);
    template = processSOA(jsonZoneFile["soa"], template);
    template = processNS(jsonZoneFile["ns"], template);
    template = processA(jsonZoneFile["a"], template);
    template = processAAAA(jsonZoneFile["aaaa"], template);
    template = processCNAME(jsonZoneFile["cname"], template);
    template = processMX(jsonZoneFile["mx"], template);
    template = processPTR(jsonZoneFile["ptr"], template);
    template = processTXT(jsonZoneFile["txt"], template);
    template = processSRV(jsonZoneFile["srv"], template);
    template = processSPF(jsonZoneFile["spf"], template);
    template = processURI(jsonZoneFile["uri"], template);
    template = processValues(jsonZoneFile, template);
    return template.replace(/\n{2,}/gim, "\n\n");
}
function processOrigin(data, template) {
    var ret = "";
    if (typeof data !== "undefined") ret += "$ORIGIN " + data;
    return template.replace("{$origin}", ret);
}
function processTTL(data, template) {
    var ret = "";
    if (typeof data !== "undefined") ret += "$TTL " + data;
    return template.replace("{$ttl}", ret);
}
function processSOA(data, template) {
    var ret = template;
    if (typeof data !== "undefined") {
        data.name = data.name || "@";
        data.ttl = data.ttl || "";
        for(var key in data){
            var value = data[key];
            ret = ret.replace("{" + key + "}", value + "	");
        }
    }
    return ret;
}
function processNS(data, template) {
    var ret = "";
    if (data) for(var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;){
        var record = _step.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	NS	" + record.host + "\n";
    }
    return template.replace("{ns}", ret);
}
function processA(data, template) {
    var ret = "";
    if (data) for(var _iterator2 = _createForOfIteratorHelperLoose(data), _step2; !(_step2 = _iterator2()).done;){
        var record = _step2.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	A	" + record.ip + "\n";
    }
    return template.replace("{a}", ret);
}
function processAAAA(data, template) {
    var ret = "";
    if (data) for(var _iterator3 = _createForOfIteratorHelperLoose(data), _step3; !(_step3 = _iterator3()).done;){
        var record = _step3.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	AAAA	" + record.ip + "\n";
    }
    return template.replace("{aaaa}", ret);
}
function processCNAME(data, template) {
    var ret = "";
    if (data) for(var _iterator4 = _createForOfIteratorHelperLoose(data), _step4; !(_step4 = _iterator4()).done;){
        var record = _step4.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	CNAME	" + record.alias + "\n";
    }
    return template.replace("{cname}", ret);
}
function processMX(data, template) {
    var ret = "";
    if (data) for(var _iterator5 = _createForOfIteratorHelperLoose(data), _step5; !(_step5 = _iterator5()).done;){
        var record = _step5.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	MX	" + record.preference + "	" + record.host + "\n";
    }
    return template.replace("{mx}", ret);
}
function processPTR(data, template) {
    var ret = "";
    if (data) for(var _iterator6 = _createForOfIteratorHelperLoose(data), _step6; !(_step6 = _iterator6()).done;){
        var record = _step6.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	PTR	" + record.host + "\n";
    }
    return template.replace("{ptr}", ret);
}
function processTXT(data, template) {
    var ret = "";
    if (data) for(var _iterator7 = _createForOfIteratorHelperLoose(data), _step7; !(_step7 = _iterator7()).done;){
        var record = _step7.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	TXT	";
        var txtData = record.txt;
        if (typeof txtData === "string") ret += '"' + txtData + '"';
        else if (txtData instanceof Array) ret += txtData.map(function(datum) {
            return '"' + datum + '"';
        }).join(" ");
        ret += "\n";
    }
    return template.replace("{txt}", ret);
}
function processSRV(data, template) {
    var ret = "";
    if (data) for(var _iterator8 = _createForOfIteratorHelperLoose(data), _step8; !(_step8 = _iterator8()).done;){
        var record = _step8.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	SRV	" + record.priority + "	";
        ret += record.weight + "	";
        ret += record.port + "	";
        ret += record.target + "\n";
    }
    return template.replace("{srv}", ret);
}
function processSPF(data, template) {
    var ret = "";
    if (data) for(var _iterator9 = _createForOfIteratorHelperLoose(data), _step9; !(_step9 = _iterator9()).done;){
        var record = _step9.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	SPF	" + record.data + "\n";
    }
    return template.replace("{spf}", ret);
}
function processURI(data, template) {
    var ret = "";
    if (data) for(var _iterator10 = _createForOfIteratorHelperLoose(data), _step10; !(_step10 = _iterator10()).done;){
        var record = _step10.value;
        ret += (record.name || "@") + "	";
        if (record.ttl) ret += record.ttl + "	";
        ret += "IN	URI	" + record.priority + "	";
        ret += record.weight + "	";
        ret += '"' + record.target + '"\n';
    }
    return template.replace("{uri}", ret);
}
function processValues(jsonZoneFile, template) {
    template = template.replace("{zone}", jsonZoneFile["$origin"] || (jsonZoneFile["soa"] ? jsonZoneFile["soa"]["name"] : false) || "");
    template = template.replace("{datetime}", new Date().toISOString());
    var time = Math.round(Date.now() / 1000);
    return template.replace("{time}", "" + time);
}
function parseZoneFile(text) {
    text = removeComments(text);
    text = flatten(text);
    return parseRRs(text);
}
function removeComments(text) {
    var re = /(^|[^\\]);.*/g;
    return text.replace(re, function(_m, g1) {
        return g1 ? g1 : ""; // if g1 is set/matched, re-insert it, else remove
    });
}
function flatten(text) {
    var captured = [];
    var re = /\([\s\S]*?\)/gim;
    var match = re.exec(text);
    while(match !== null){
        var replacement = match[0].replace(/\s+/gm, " ");
        captured.push({
            match: match,
            replacement: replacement
        }); // captured Text, index, input
        match = re.exec(text);
    }
    var arrText = text.split("");
    for(var _i = 0, _captured = captured; _i < _captured.length; _i++){
        var cur = _captured[_i];
        var _match = cur.match, _replacement = cur.replacement;
        arrText.splice(_match.index, _match[0].length, _replacement);
    }
    return arrText.join("").replace(/\(|\)/gim, " ");
}
function parseRRs(text) {
    var ret = {};
    var rrs = text.split("\n");
    for(var _iterator = _createForOfIteratorHelperLoose(rrs), _step; !(_step = _iterator()).done;){
        var rr = _step.value;
        if (!rr || !rr.trim()) continue;
        var uRR = rr.toUpperCase();
        if (/\s+TXT\s+/.test(uRR)) {
            ret.txt = ret.txt || [];
            ret.txt.push(parseTXT(rr));
        } else if (uRR.indexOf("$ORIGIN") === 0) ret.$origin = rr.split(/\s+/g)[1];
        else if (uRR.indexOf("$TTL") === 0) ret.$ttl = parseInt(rr.split(/\s+/g)[1], 10);
        else if (/\s+SOA\s+/.test(uRR)) ret.soa = parseSOA(rr);
        else if (/\s+NS\s+/.test(uRR)) {
            ret.ns = ret.ns || [];
            ret.ns.push(parseNS(rr));
        } else if (/\s+A\s+/.test(uRR)) {
            ret.a = ret.a || [];
            ret.a.push(parseA(rr, ret.a));
        } else if (/\s+AAAA\s+/.test(uRR)) {
            ret.aaaa = ret.aaaa || [];
            ret.aaaa.push(parseAAAA(rr));
        } else if (/\s+CNAME\s+/.test(uRR)) {
            ret.cname = ret.cname || [];
            ret.cname.push(parseCNAME(rr));
        } else if (/\s+MX\s+/.test(uRR)) {
            ret.mx = ret.mx || [];
            ret.mx.push(parseMX(rr));
        } else if (/\s+PTR\s+/.test(uRR)) {
            ret.ptr = ret.ptr || [];
            ret.ptr.push(parsePTR(rr, ret.ptr, ret.$origin));
        } else if (/\s+SRV\s+/.test(uRR)) {
            ret.srv = ret.srv || [];
            ret.srv.push(parseSRV(rr));
        } else if (/\s+SPF\s+/.test(uRR)) {
            ret.spf = ret.spf || [];
            ret.spf.push(parseSPF(rr));
        } else if (/\s+URI\s+/.test(uRR)) {
            ret.uri = ret.uri || [];
            ret.uri.push(parseURI(rr));
        }
    }
    return ret;
}
function parseSOA(rr) {
    var soa = {};
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    soa.name = rrTokens[0];
    soa.minimum = parseInt(rrTokens[l - 1], 10);
    soa.expire = parseInt(rrTokens[l - 2], 10);
    soa.retry = parseInt(rrTokens[l - 3], 10);
    soa.refresh = parseInt(rrTokens[l - 4], 10);
    soa.serial = parseInt(rrTokens[l - 5], 10);
    soa.rname = rrTokens[l - 6];
    soa.mname = rrTokens[l - 7];
    if (!isNaN(rrTokens[1])) soa.ttl = parseInt(rrTokens[1], 10);
    return soa;
}
function parseNS(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        host: rrTokens[l - 1]
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseA(rr, recordsSoFar) {
    var rrTokens = rr.trim().split(/\s+/g);
    var urrTokens = rr.trim().toUpperCase().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        ip: rrTokens[l - 1]
    };
    if (urrTokens.lastIndexOf("A") === 0) {
        if (recordsSoFar.length) result.name = recordsSoFar[recordsSoFar.length - 1].name;
        else result.name = "@";
    }
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseAAAA(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        ip: rrTokens[l - 1]
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseCNAME(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        alias: rrTokens[l - 1]
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseMX(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        preference: parseInt(rrTokens[l - 2], 10),
        host: rrTokens[l - 1]
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseTXT(rr) {
    var rrTokens = rr.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);
    if (!rrTokens) throw new Error("Failure to tokenize TXT record");
    var l = rrTokens.length;
    var indexTXT = rrTokens.indexOf("TXT");
    function stripText(txt) {
        if (txt.indexOf('"') > -1) txt = txt.split('"')[1];
        return txt;
    }
    var tokenTxt;
    if (l - indexTXT - 1 > 1) tokenTxt = [].concat(rrTokens.slice(indexTXT + 1).map(stripText));
    else tokenTxt = stripText(rrTokens[l - 1]);
    var result = {
        name: rrTokens[0],
        txt: tokenTxt
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parsePTR(rr, recordsSoFar, currentOrigin) {
    var rrTokens = rr.trim().split(/\s+/g);
    var urrTokens = rr.trim().toUpperCase().split(/\s+/g);
    if (urrTokens.lastIndexOf("PTR") === 0 && recordsSoFar[recordsSoFar.length - 1]) rrTokens.unshift(recordsSoFar[recordsSoFar.length - 1].name);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        fullname: rrTokens[0] + "." + currentOrigin,
        host: rrTokens[l - 1]
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseSRV(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        target: rrTokens[l - 1],
        priority: parseInt(rrTokens[l - 4], 10),
        weight: parseInt(rrTokens[l - 3], 10),
        port: parseInt(rrTokens[l - 2], 10)
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseSPF(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var result = {
        name: rrTokens[0],
        data: ""
    };
    var l = rrTokens.length;
    while(l-- > 4)result.data = rrTokens[l] + " " + result.data.trim();
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
function parseURI(rr) {
    var rrTokens = rr.trim().split(/\s+/g);
    var l = rrTokens.length;
    var result = {
        name: rrTokens[0],
        target: rrTokens[l - 1].replace(/"/g, ""),
        priority: parseInt(rrTokens[l - 3], 10),
        weight: parseInt(rrTokens[l - 2], 10)
    };
    if (!isNaN(rrTokens[1])) result.ttl = parseInt(rrTokens[1], 10);
    return result;
}
var ZoneFile = /*#__PURE__*/ function() {
    function ZoneFile(zoneFile) {
        if (typeof zoneFile === "object") this.jsonZoneFile = JSON.parse(JSON.stringify(zoneFile));
        else if (typeof zoneFile === "string") this.jsonZoneFile = parseZoneFile(zoneFile);
        else this.jsonZoneFile = undefined;
    }
    var _proto = ZoneFile.prototype;
    _proto.toJSON = function toJSON() {
        return this.jsonZoneFile;
    };
    _proto.toString = function toString() {
        return makeZoneFile(this.toJSON());
    };
    return ZoneFile;
}();
exports.ZoneFile = ZoneFile;
exports.makeZoneFile = makeZoneFile;
exports.parseZoneFile = parseZoneFile;

},{}],"5X9R2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getName", ()=>getName);
parcelHelpers.export(exports, "getGivenName", ()=>getGivenName);
parcelHelpers.export(exports, "getFamilyName", ()=>getFamilyName);
parcelHelpers.export(exports, "getDescription", ()=>getDescription);
parcelHelpers.export(exports, "getAvatarUrl", ()=>getAvatarUrl);
parcelHelpers.export(exports, "getVerifiedAccounts", ()=>getVerifiedAccounts);
parcelHelpers.export(exports, "getOrganizations", ()=>getOrganizations);
parcelHelpers.export(exports, "getConnections", ()=>getConnections);
parcelHelpers.export(exports, "getAddress", ()=>getAddress);
parcelHelpers.export(exports, "getBirthDate", ()=>getBirthDate);
function getName(profile) {
    if (!profile) return null;
    let name = null;
    if (profile.name) name = profile.name;
    else if (profile.givenName || profile.familyName) {
        name = "";
        if (profile.givenName) name = profile.givenName;
        if (profile.familyName) name += ` ${profile.familyName}`;
    }
    return name;
}
function getGivenName(profile) {
    if (!profile) return null;
    let givenName = null;
    if (profile.givenName) givenName = profile.givenName;
    else if (profile.name) {
        const nameParts = profile.name.split(" ");
        givenName = nameParts.slice(0, -1).join(" ");
    }
    return givenName;
}
function getFamilyName(profile) {
    if (!profile) return null;
    let familyName = null;
    if (profile.familyName) familyName = profile.familyName;
    else if (profile.name) {
        const nameParts = profile.name.split(" ");
        familyName = nameParts.pop();
    }
    return familyName;
}
function getDescription(profile) {
    if (!profile) return null;
    let description = null;
    if (profile.description) description = profile.description;
    return description;
}
function getAvatarUrl(profile) {
    if (!profile) return null;
    let avatarContentUrl = null;
    if (profile.image) profile.image.map((image)=>{
        if (image.name === "avatar") {
            avatarContentUrl = image.contentUrl;
            return avatarContentUrl;
        } else return null;
    });
    return avatarContentUrl;
}
function getVerifiedAccounts(profile, verifications) {
    if (!profile) return null;
    const filteredAccounts = [];
    if (profile.hasOwnProperty("account") && verifications) profile.account.map((account)=>{
        let accountIsValid = false;
        let proofUrl = null;
        verifications.map((verification)=>{
            if (verification.hasOwnProperty("proof_url")) verification.proofUrl = verification.proof_url;
            if (verification.valid && verification.service === account.service && verification.identifier === account.identifier && verification.proofUrl) {
                accountIsValid = true;
                proofUrl = verification.proofUrl;
                return true;
            } else return false;
        });
        if (accountIsValid) {
            account.proofUrl = proofUrl;
            filteredAccounts.push(account);
            return account;
        } else return null;
    });
    return filteredAccounts;
}
function getOrganizations(profile) {
    if (!profile) return null;
    const organizations = [];
    if (profile.hasOwnProperty("worksFor")) return profile.worksFor;
    return organizations;
}
function getConnections(profile) {
    if (!profile) return null;
    let connections = [];
    if (profile.hasOwnProperty("knows")) connections = profile.knows;
    return connections;
}
function getAddress(profile) {
    if (!profile) return null;
    let addressString = null;
    if (profile.hasOwnProperty("address")) {
        const addressParts = [];
        if (profile.address.hasOwnProperty("streetAddress")) addressParts.push(profile.address.streetAddress);
        if (profile.address.hasOwnProperty("addressLocality")) addressParts.push(profile.address.addressLocality);
        if (profile.address.hasOwnProperty("postalCode")) addressParts.push(profile.address.postalCode);
        if (profile.address.hasOwnProperty("addressCountry")) addressParts.push(profile.address.addressCountry);
        if (addressParts.length) addressString = addressParts.join(", ");
    }
    return addressString;
}
function getBirthDate(profile) {
    if (!profile) return null;
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let birthDateString = null;
    if (profile.hasOwnProperty("birthDate")) {
        const date = new Date(profile.birthDate);
        birthDateString = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    return birthDateString;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"l8kCr":[function(require,module,exports) {
module.exports = require("3a22940a707dc21e");

},{"3a22940a707dc21e":"axck6"}],"axck6":[function(require,module,exports) {
// Disable no-var because we need to support old IE for now.
/* eslint-disable no-var */ // Disable space-before-function-paren for compatibility with VS Code default JS formatter.
/* eslint-disable space-before-function-paren */ /*
 * This module is intended to be executed both on client side and server side.
 * No error should be thrown. (soft error handling)
 */ (function() {
    var root = {};
    // Dependencies --------------------------------------------------------------
    root.async = require("7392be42137e4e64");
    if (typeof root.async !== "object") throw new Error("Module async is required (https://github.com/caolan/async)");
    var async = root.async;
    function _extend(origin, add) {
        if (!add || typeof add !== "object") return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while(i--)origin[keys[i]] = add[keys[i]];
        return origin;
    }
    function _merge() {
        var ret = {};
        var args = Array.prototype.slice.call(arguments);
        var keys = null;
        var i = null;
        args.forEach(function(arg) {
            if (arg && arg.constructor === Object) {
                keys = Object.keys(arg);
                i = keys.length;
                while(i--)ret[keys[i]] = arg[keys[i]];
            }
        });
        return ret;
    }
    // Customisable class (Base class) -------------------------------------------
    // Use with operation "new" to extend Validation and Sanitization themselves,
    // not their prototype. In other words, constructor shall be call to extend
    // those functions, instead of being in their constructor, like this:
    //   _extend(Validation, new Customisable);
    function Customisable() {
        this.custom = {};
        this.extend = function(custom) {
            return _extend(this.custom, custom);
        };
        this.reset = function() {
            this.custom = {};
        };
        this.remove = function(fields) {
            if (!_typeIs.array(fields)) fields = [
                fields
            ];
            fields.forEach(function(field) {
                delete this.custom[field];
            }, this);
        };
    }
    // Inspection class (Base class) ---------------------------------------------
    // Use to extend Validation and Sanitization prototypes. Inspection
    // constructor shall be called in derived class constructor.
    function Inspection(schema, custom) {
        var _stack = [
            "@"
        ];
        this._schema = schema;
        this._custom = {};
        if (custom != null) {
            for(var key in custom)if (Object.prototype.hasOwnProperty.call(custom, key)) this._custom["$" + key] = custom[key];
        }
        this._getDepth = function() {
            return _stack.length;
        };
        this._dumpStack = function() {
            /* eslint-disable no-control-regex */ return _stack.map(function(i) {
                return i.replace(/^\[/g, "\x1b\x1c\x1d\x1e");
            }).join(".").replace(/\.\u001b\u001c\u001d\u001e/g, "[");
        /* eslint-enable no-control-regex */ };
        this._deeperObject = function(name) {
            _stack.push(/^[a-z$_][a-z0-9$_]*$/i.test(name) ? name : '["' + name + '"]');
            return this;
        };
        this._deeperArray = function(i) {
            _stack.push("[" + i + "]");
            return this;
        };
        this._back = function() {
            _stack.pop();
            return this;
        };
    }
    // Simple types --------------------------------------------------------------
    // If the property is not defined or is not in this list:
    var _typeIs = {
        function: function(element) {
            return typeof element === "function";
        },
        string: function(element) {
            return typeof element === "string";
        },
        number: function(element) {
            return typeof element === "number" && !isNaN(element);
        },
        integer: function(element) {
            return typeof element === "number" && element % 1 === 0;
        },
        NaN: function(element) {
            return typeof element === "number" && isNaN(element);
        },
        boolean: function(element) {
            return typeof element === "boolean";
        },
        null: function(element) {
            return element === null;
        },
        date: function(element) {
            return element != null && element instanceof Date;
        },
        object: function(element) {
            return typeof element === "object" && element != null && element.constructor !== Array;
        },
        array: function(element) {
            return element != null && element.constructor === Array;
        },
        any: function() {
            return true;
        }
    };
    function _simpleType(type, candidate) {
        if (typeof type === "function") return candidate instanceof type;
        type = type in _typeIs ? type : "any";
        return _typeIs[type](candidate);
    }
    function _realType(candidate) {
        for(var i in _typeIs)if (_simpleType(i, candidate)) {
            if (i !== "any" && (i !== "object" || candidate.constructor === Object)) return i;
            return "an instance of " + candidate.constructor.name;
        }
    }
    function getIndexes(a, value) {
        var indexes = [];
        var i = a.indexOf(value);
        while(i !== -1){
            indexes.push(i);
            i = a.indexOf(value, i + 1);
        }
        return indexes;
    }
    // Available formats ---------------------------------------------------------
    /* eslint-disable no-useless-escape */ // TODO: Study these regex expressions and add more tests so we can consider removing
    // rule no-useless-escape.
    var _formats = {
        void: /^$/,
        url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)?(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        "date-time": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z?|(-|\+)\d{2}:\d{2})$/,
        date: /^\d{4}-\d{2}-\d{2}$/,
        coolDateTime: /^\d{4}(-|\/)\d{2}(-|\/)\d{2}(T| )\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/,
        time: /^\d{2}\:\d{2}\:\d{2}$/,
        color: /^#([0-9a-f])+$/i,
        // Very flexible regular expression designed to catch only obvious mistakes
        // that a user might make that would have a 100% chance of causing email
        // delivery to the address to fail. The library takes a flexible over
        // strict approach. Users should use this only for basic front end email
        // address validation and perform more strict checking using server-side
        // code after the data has been sent to their server.
        // Sourced from https://www.regular-expressions.info/email.html, modified
        // to allow lowercase characters too.
        email: /^[^@]+@[^.]+\.[a-zA-Z]+$/,
        /* eslint-enable prefer-regex-literals */ /* eslint-enable quotes */ numeric: /^[0-9]+$/,
        integer: /^\-?[0-9]+$/,
        decimal: /^\-?[0-9]*\.?[0-9]+$/,
        alpha: /^[a-z]+$/i,
        alphaNumeric: /^[a-z0-9]+$/i,
        alphaDash: /^[a-z0-9_-]+$/i,
        javascript: /^[a-z_\$][a-z0-9_\$]*$/i,
        upperString: /^[A-Z ]*$/,
        lowerString: /^[a-z ]*$/,
        v4uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    };
    /* eslint-enable no-useless-escape */ // Validation ------------------------------------------------------------------
    var _validationAttribut = {
        optional: function(schema, candidate) {
            var opt = typeof schema.optional === "boolean" ? schema.optional : schema.optional === "true"; // Default is false
            if (opt === true) return;
            if (typeof candidate === "undefined") this.report("is missing and not optional", null, "optional");
        },
        type: function(schema, candidate) {
            // return because optional function already handle this case
            if (typeof candidate === "undefined" || typeof schema.type !== "string" && !(schema.type instanceof Array) && typeof schema.type !== "function") return;
            var types = _typeIs.array(schema.type) ? schema.type : [
                schema.type
            ];
            var typeIsValid = types.some(function(type) {
                return _simpleType(type, candidate);
            });
            if (!typeIsValid) {
                types = types.map(function(t) {
                    return typeof t === "function" ? "an instance of " + t.name : t;
                });
                this.report("must be " + types.join(" or ") + ", but is " + _realType(candidate), null, "type");
            }
        },
        uniqueness: function(schema, candidate) {
            if (typeof schema.uniqueness === "string") schema.uniqueness = schema.uniqueness === "true";
            if (typeof schema.uniqueness !== "boolean" || schema.uniqueness === false || !_typeIs.array(candidate) && typeof candidate !== "string") return;
            var reported = [];
            for(var i = 0; i < candidate.length; i++){
                if (reported.indexOf(candidate[i]) >= 0) continue;
                var indexes = getIndexes(candidate, candidate[i]);
                if (indexes.length > 1) {
                    reported.push(candidate[i]);
                    this.report("has value [" + candidate[i] + "] more than once at indexes [" + indexes.join(", ") + "]", null, "uniqueness");
                }
            }
        },
        pattern: function(schema, candidate) {
            var self = this;
            var regexs = schema.pattern;
            if (typeof candidate !== "string") return;
            var matches = false;
            if (!_typeIs.array(regexs)) regexs = [
                regexs
            ];
            regexs.forEach(function(regex) {
                if (typeof regex === "string" && regex in _formats) regex = _formats[regex];
                if (regex instanceof RegExp) {
                    if (regex.test(candidate)) matches = true;
                }
            });
            if (!matches) self.report("must match [" + regexs.join(" or ") + '], but is equal to "' + candidate + '"', null, "pattern");
        },
        validDate: function(schema, candidate) {
            if (String(schema.validDate) === "true" && candidate instanceof Date && isNaN(candidate.getTime())) this.report("must be a valid date", null, "validDate");
        },
        minLength: function(schema, candidate) {
            if (typeof candidate !== "string" && !_typeIs.array(candidate)) return;
            var minLength = Number(schema.minLength);
            if (isNaN(minLength)) return;
            if (candidate.length < minLength) this.report("must be longer than " + minLength + " elements, but it has " + candidate.length, null, "minLength");
        },
        maxLength: function(schema, candidate) {
            if (typeof candidate !== "string" && !_typeIs.array(candidate)) return;
            var maxLength = Number(schema.maxLength);
            if (isNaN(maxLength)) return;
            if (candidate.length > maxLength) this.report("must be shorter than " + maxLength + " elements, but it has " + candidate.length, null, "maxLength");
        },
        exactLength: function(schema, candidate) {
            if (typeof candidate !== "string" && !_typeIs.array(candidate)) return;
            var exactLength = Number(schema.exactLength);
            if (isNaN(exactLength)) return;
            if (candidate.length !== exactLength) this.report("must have exactly " + exactLength + " elements, but it have " + candidate.length, null, "exactLength");
        },
        lt: function(schema, candidate) {
            var limit = Number(schema.lt);
            if (typeof candidate !== "number" || isNaN(limit)) return;
            if (candidate >= limit) this.report("must be less than " + limit + ', but is equal to "' + candidate + '"', null, "lt");
        },
        lte: function(schema, candidate) {
            var limit = Number(schema.lte);
            if (typeof candidate !== "number" || isNaN(limit)) return;
            if (candidate > limit) this.report("must be less than or equal to " + limit + ', but is equal to "' + candidate + '"', null, "lte");
        },
        gt: function(schema, candidate) {
            var limit = Number(schema.gt);
            if (typeof candidate !== "number" || isNaN(limit)) return;
            if (candidate <= limit) this.report("must be greater than " + limit + ', but is equal to "' + candidate + '"', null, "gt");
        },
        gte: function(schema, candidate) {
            var limit = Number(schema.gte);
            if (typeof candidate !== "number" || isNaN(limit)) return;
            if (candidate < limit) this.report("must be greater than or equal to " + limit + ', but is equal to "' + candidate + '"', null, "gte");
        },
        eq: function(schema, candidate) {
            if (typeof candidate !== "number" && typeof candidate !== "string" && typeof candidate !== "boolean") return;
            var limit = schema.eq;
            if (typeof limit !== "number" && typeof limit !== "string" && typeof limit !== "boolean" && !_typeIs.array(limit)) return;
            if (_typeIs.array(limit)) {
                for(var i = 0; i < limit.length; i++){
                    if (candidate === limit[i]) return;
                }
                this.report("must be equal to [" + limit.map(function(l) {
                    return '"' + l + '"';
                }).join(" or ") + '], but is equal to "' + candidate + '"', null, "eq");
            } else if (candidate !== limit) this.report('must be equal to "' + limit + '", but is equal to "' + candidate + '"', null, "eq");
        },
        ne: function(schema, candidate) {
            if (typeof candidate !== "number" && typeof candidate !== "string") return;
            var limit = schema.ne;
            if (typeof limit !== "number" && typeof limit !== "string" && !_typeIs.array(limit)) return;
            if (_typeIs.array(limit)) {
                for(var i = 0; i < limit.length; i++)if (candidate === limit[i]) {
                    this.report('must not be equal to "' + limit[i] + '"', null, "ne");
                    return;
                }
            } else if (candidate === limit) this.report('must not be equal to "' + limit + '"', null, "ne");
        },
        someKeys: function(schema, candidat) {
            var _keys = schema.someKeys;
            if (!_typeIs.object(candidat)) return;
            var valid = _keys.some(function(action) {
                return action in candidat;
            });
            if (!valid) this.report("must have at least key " + _keys.map(function(i) {
                return '"' + i + '"';
            }).join(" or "), null, "someKeys");
        },
        strict: function(schema, candidate) {
            if (typeof schema.strict === "string") schema.strict = schema.strict === "true";
            if (schema.strict !== true || !_typeIs.object(candidate) || !_typeIs.object(schema.properties)) return;
            var self = this;
            if (typeof schema.properties["*"] === "undefined") {
                var intruder = Object.keys(candidate).filter(function(key) {
                    return typeof schema.properties[key] === "undefined";
                });
                if (intruder.length > 0) {
                    var msg = "should not contains " + (intruder.length > 1 ? "properties" : "property") + " [" + intruder.map(function(i) {
                        return '"' + i + '"';
                    }).join(", ") + "]";
                    self.report(msg, null, "strict");
                }
            }
        },
        exec: function(schema, candidate, callback) {
            var self = this;
            if (typeof callback === "function") return this.asyncExec(schema, candidate, callback);
            (_typeIs.array(schema.exec) ? schema.exec : [
                schema.exec
            ]).forEach(function(exec) {
                if (typeof exec === "function") exec.call(self, schema, candidate);
            });
        },
        properties: function(schema, candidate, callback) {
            if (typeof callback === "function") return this.asyncProperties(schema, candidate, callback);
            if (!(schema.properties instanceof Object) || !(candidate instanceof Object)) return;
            var properties = schema.properties;
            var i;
            if (properties["*"] != null) for(i in candidate){
                if (i in properties) continue;
                this._deeperObject(i);
                this._validate(properties["*"], candidate[i]);
                this._back();
            }
            for(i in properties){
                if (i === "*") continue;
                this._deeperObject(i);
                this._validate(properties[i], candidate[i]);
                this._back();
            }
        },
        items: function(schema, candidate, callback) {
            if (typeof callback === "function") return this.asyncItems(schema, candidate, callback);
            if (!(schema.items instanceof Object) || !(candidate instanceof Object)) return;
            var items = schema.items;
            var i, l;
            // If provided schema is an array
            // then call validate for each case
            // else it is an Object
            // then call validate for each key
            if (_typeIs.array(items) && _typeIs.array(candidate)) for(i = 0, l = items.length; i < l; i++){
                this._deeperArray(i);
                this._validate(items[i], candidate[i]);
                this._back();
            }
            else {
                for(var key in candidate)if (Object.prototype.hasOwnProperty.call(candidate, key)) {
                    this._deeperArray(key);
                    this._validate(items, candidate[key]);
                    this._back();
                }
            }
        }
    };
    var _asyncValidationAttribut = {
        asyncExec: function(schema, candidate, callback) {
            var self = this;
            async.eachSeries(_typeIs.array(schema.exec) ? schema.exec : [
                schema.exec
            ], function(exec, done) {
                if (typeof exec === "function") {
                    if (exec.length > 2) return exec.call(self, schema, candidate, done);
                    exec.call(self, schema, candidate);
                }
                async.nextTick(done);
            }, callback);
        },
        asyncProperties: function(schema, candidate, callback) {
            if (!(schema.properties instanceof Object) || !_typeIs.object(candidate)) return callback();
            var self = this;
            var properties = schema.properties;
            async.series([
                function(next) {
                    if (properties["*"] == null) return next();
                    async.eachSeries(Object.keys(candidate), function(i, done) {
                        if (i in properties) return async.nextTick(done);
                        self._deeperObject(i);
                        self._asyncValidate(properties["*"], candidate[i], function(err) {
                            self._back();
                            done(err);
                        });
                    }, next);
                },
                function(next) {
                    async.eachSeries(Object.keys(properties), function(i, done) {
                        if (i === "*") return async.nextTick(done);
                        self._deeperObject(i);
                        self._asyncValidate(properties[i], candidate[i], function(err) {
                            self._back();
                            done(err);
                        });
                    }, next);
                }
            ], callback);
        },
        asyncItems: function(schema, candidate, callback) {
            if (!(schema.items instanceof Object) || !(candidate instanceof Object)) return callback();
            var self = this;
            var items = schema.items;
            if (_typeIs.array(items) && _typeIs.array(candidate)) async.timesSeries(items.length, function(i, done) {
                self._deeperArray(i);
                self._asyncValidate(items[i], candidate[i], function(err, res) {
                    self._back();
                    done(err, res);
                });
                self._back();
            }, callback);
            else async.eachSeries(Object.keys(candidate), function(key, done) {
                self._deeperArray(key);
                self._asyncValidate(items, candidate[key], function(err, res) {
                    self._back();
                    done(err, res);
                });
            }, callback);
        }
    };
    // Validation Class ----------------------------------------------------------
    // inherits from Inspection class (actually we just call Inspection
    // constructor with the new context, because its prototype is empty
    function Validation(schema, custom) {
        Inspection.prototype.constructor.call(this, schema, _merge(Validation.custom, custom));
        var _error = [];
        this._basicFields = Object.keys(_validationAttribut);
        this._customFields = Object.keys(this._custom);
        this.origin = null;
        this.report = function(message, code, reason) {
            var newErr = {
                code: code || this.userCode || null,
                reason: reason || "unknown",
                message: this.userError || message || "is invalid",
                property: this.userAlias ? this.userAlias + " (" + this._dumpStack() + ")" : this._dumpStack()
            };
            _error.push(newErr);
            return this;
        };
        this.result = function() {
            return {
                error: _error,
                valid: _error.length === 0,
                format: function() {
                    if (this.valid === true) return "Candidate is valid";
                    return this.error.map(function(i) {
                        return "Property " + i.property + ": " + i.message;
                    }).join("\n");
                }
            };
        };
    }
    _extend(Validation.prototype, _validationAttribut);
    _extend(Validation.prototype, _asyncValidationAttribut);
    _extend(Validation, new Customisable());
    Validation.prototype.validate = function(candidate, callback) {
        this.origin = candidate;
        if (typeof callback === "function") {
            var self = this;
            return async.nextTick(function() {
                self._asyncValidate(self._schema, candidate, function(err) {
                    self.origin = null;
                    callback(err, self.result());
                });
            });
        }
        return this._validate(this._schema, candidate).result();
    };
    Validation.prototype._validate = function(schema, candidate, callback) {
        this.userCode = schema.code || null;
        this.userError = schema.error || null;
        this.userAlias = schema.alias || null;
        this._basicFields.forEach(function(i) {
            if ((i in schema || i === "optional") && typeof this[i] === "function") this[i](schema, candidate);
        }, this);
        this._customFields.forEach(function(i) {
            if (i in schema && typeof this._custom[i] === "function") this._custom[i].call(this, schema, candidate);
        }, this);
        return this;
    };
    Validation.prototype._asyncValidate = function(schema, candidate, callback) {
        var self = this;
        this.userCode = schema.code || null;
        this.userError = schema.error || null;
        this.userAlias = schema.alias || null;
        async.series([
            function(next) {
                async.eachSeries(Object.keys(_validationAttribut), function(i, done) {
                    async.nextTick(function() {
                        if ((i in schema || i === "optional") && typeof self[i] === "function") {
                            if (self[i].length > 2) return self[i](schema, candidate, done);
                            self[i](schema, candidate);
                        }
                        done();
                    });
                }, next);
            },
            function(next) {
                async.eachSeries(Object.keys(self._custom), function(i, done) {
                    async.nextTick(function() {
                        if (i in schema && typeof self._custom[i] === "function") {
                            if (self._custom[i].length > 2) return self._custom[i].call(self, schema, candidate, done);
                            self._custom[i].call(self, schema, candidate);
                        }
                        done();
                    });
                }, next);
            }
        ], callback);
    };
    // Sanitization ----------------------------------------------------------------
    // functions called by _sanitization.type method.
    var _forceType = {
        number: function(post, schema) {
            var n;
            if (typeof post === "number") return post;
            else if (post === "") {
                if (typeof schema.def !== "undefined") return schema.def;
                return null;
            } else if (typeof post === "string") {
                n = parseFloat(post.replace(/,/g, ".").replace(/ /g, ""));
                if (typeof n === "number") return n;
            } else if (post instanceof Date) return +post;
            return null;
        },
        integer: function(post, schema) {
            var n;
            if (typeof post === "number" && post % 1 === 0) return post;
            else if (post === "") {
                if (typeof schema.def !== "undefined") return schema.def;
                return null;
            } else if (typeof post === "string") {
                n = parseInt(post.replace(/ /g, ""), 10);
                if (typeof n === "number") return n;
            } else if (typeof post === "number") return parseInt(post, 10);
            else if (typeof post === "boolean") {
                if (post) return 1;
                return 0;
            } else if (post instanceof Date) return +post;
            return null;
        },
        string: function(post, schema) {
            if (typeof post === "boolean" || typeof post === "number" || post instanceof Date) return post.toString();
            else if (_typeIs.array(post)) {
                // If user authorize array and strings...
                if (schema.items || schema.properties) return post;
                return post.join(String(schema.joinWith || ","));
            } else if (post instanceof Object) {
                // If user authorize objects ans strings...
                if (schema.items || schema.properties) return post;
                return JSON.stringify(post);
            } else if (typeof post === "string" && post.length) return post;
            return null;
        },
        date: function(post, schema) {
            if (post instanceof Date) return post;
            else {
                var d = new Date(post);
                if (!isNaN(d.getTime())) return d;
            }
            return null;
        },
        boolean: function(post, schema) {
            if (typeof post === "undefined") return null;
            if (typeof post === "string" && post.toLowerCase() === "false") return false;
            return !!post;
        },
        object: function(post, schema) {
            if (typeof post !== "string" || _typeIs.object(post)) return post;
            try {
                return JSON.parse(post);
            } catch (e) {
                return null;
            }
        },
        array: function(post, schema) {
            if (_typeIs.array(post)) return post;
            if (typeof post === "undefined") return null;
            if (typeof post === "string") {
                if (post.substring(0, 1) === "[" && post.slice(-1) === "]") try {
                    return JSON.parse(post);
                } catch (e) {
                    return null;
                }
                return post.split(String(schema.splitWith || ","));
            }
            if (!_typeIs.array(post)) return [
                post
            ];
            return null;
        }
    };
    var _applyRules = {
        upper: function(post) {
            return post.toUpperCase();
        },
        lower: function(post) {
            return post.toLowerCase();
        },
        title: function(post) {
            // Fix by seb (replace \w\S* by \S* => exemple : coucou ça va)
            return post.replace(/\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        capitalize: function(post) {
            return post.charAt(0).toUpperCase() + post.substr(1).toLowerCase();
        },
        ucfirst: function(post) {
            return post.charAt(0).toUpperCase() + post.substr(1);
        },
        trim: function(post) {
            return post.trim();
        }
    };
    // Every function return the future value of each property. Therefore you
    // have to return post even if you do not change its value
    var _sanitizationAttribut = {
        strict: function(schema, post) {
            if (typeof schema.strict === "string") schema.strict = schema.strict === "true";
            if (schema.strict !== true) return post;
            if (!_typeIs.object(schema.properties)) return post;
            if (!_typeIs.object(post)) return post;
            Object.keys(post).forEach(function(key) {
                if (!(key in schema.properties)) delete post[key];
            });
            return post;
        },
        optional: function(schema, post) {
            var opt = typeof schema.optional === "boolean" ? schema.optional : schema.optional !== "false"; // Default: true
            if (opt === true) return post;
            if (typeof post !== "undefined") return post;
            this.report();
            if (schema.def === Date) return new Date();
            return schema.def;
        },
        type: function(schema, post) {
            // if (_typeIs['object'](post) || _typeIs.array(post)) {
            //   return post;
            // }
            if (typeof schema.type !== "string" || typeof _forceType[schema.type] !== "function") return post;
            var n;
            var opt = typeof schema.optional === "boolean" ? schema.optional : true;
            if (typeof _forceType[schema.type] === "function") {
                n = _forceType[schema.type](post, schema);
                if (n === null && !opt || !n && isNaN(n) || n === null && schema.type === "string") n = schema.def;
            } else if (!opt) n = schema.def;
            if ((n != null || typeof schema.def !== "undefined" && schema.def === n) && n !== post) {
                this.report();
                return n;
            }
            return post;
        },
        rules: function(schema, post) {
            var rules = schema.rules;
            if (typeof post !== "string" || typeof rules !== "string" && !_typeIs.array(rules)) return post;
            var modified = false;
            (_typeIs.array(rules) ? rules : [
                rules
            ]).forEach(function(rule) {
                if (typeof _applyRules[rule] === "function") {
                    post = _applyRules[rule](post);
                    modified = true;
                }
            });
            if (modified) this.report();
            return post;
        },
        min: function(schema, post) {
            var postTest = Number(post);
            if (isNaN(postTest)) return post;
            var min = Number(schema.min);
            if (isNaN(min)) return post;
            if (postTest < min) {
                this.report();
                return min;
            }
            return post;
        },
        max: function(schema, post) {
            var postTest = Number(post);
            if (isNaN(postTest)) return post;
            var max = Number(schema.max);
            if (isNaN(max)) return post;
            if (postTest > max) {
                this.report();
                return max;
            }
            return post;
        },
        minLength: function(schema, post) {
            var limit = Number(schema.minLength);
            if (typeof post !== "string" || isNaN(limit) || limit < 0) return post;
            var str = "";
            var gap = limit - post.length;
            if (gap > 0) {
                for(var i = 0; i < gap; i++)str += "-";
                this.report();
                return post + str;
            }
            return post;
        },
        maxLength: function(schema, post) {
            var limit = Number(schema.maxLength);
            if (typeof post !== "string" || isNaN(limit) || limit < 0) return post;
            if (post.length > limit) {
                this.report();
                return post.slice(0, limit);
            }
            return post;
        },
        properties: function(schema, post, callback) {
            if (typeof callback === "function") return this.asyncProperties(schema, post, callback);
            if (!post || typeof post !== "object") return post;
            var properties = schema.properties;
            var tmp;
            var i;
            if (typeof properties["*"] !== "undefined") for(i in post){
                if (i in properties) continue;
                this._deeperObject(i);
                tmp = this._sanitize(properties["*"], post[i]);
                if (typeof tmp !== "undefined" || "exec" in properties["*"]) post[i] = tmp;
                this._back();
            }
            for(i in properties)if (i !== "*") {
                this._deeperObject(i);
                tmp = this._sanitize(properties[i], post[i]);
                if (typeof tmp !== "undefined" || "exec" in properties[i]) post[i] = tmp;
                this._back();
            }
            return post;
        },
        items: function(schema, post, callback) {
            if (typeof callback === "function") return this.asyncItems(schema, post, callback);
            if (!(schema.items instanceof Object) || !(post instanceof Object)) return post;
            var i;
            if (_typeIs.array(schema.items) && _typeIs.array(post)) {
                var minLength = schema.items.length < post.length ? schema.items.length : post.length;
                for(i = 0; i < minLength; i++){
                    this._deeperArray(i);
                    post[i] = this._sanitize(schema.items[i], post[i]);
                    this._back();
                }
            } else {
                for(i in post)if (Object.prototype.hasOwnProperty.call(post, i)) {
                    this._deeperArray(i);
                    post[i] = this._sanitize(schema.items, post[i]);
                    this._back();
                }
            }
            return post;
        },
        exec: function(schema, post, callback) {
            if (typeof callback === "function") return this.asyncExec(schema, post, callback);
            var execs = _typeIs.array(schema.exec) ? schema.exec : [
                schema.exec
            ];
            execs.forEach(function(exec) {
                if (typeof exec === "function") post = exec.call(this, schema, post);
            }, this);
            return post;
        }
    };
    var _asyncSanitizationAttribut = {
        asyncExec: function(schema, post, callback) {
            var self = this;
            var execs = _typeIs.array(schema.exec) ? schema.exec : [
                schema.exec
            ];
            async.eachSeries(execs, function(exec, done) {
                if (typeof exec === "function") {
                    if (exec.length > 2) return exec.call(self, schema, post, function(err, res) {
                        if (err) return done(err);
                        post = res;
                        done();
                    });
                    post = exec.call(self, schema, post);
                }
                done();
            }, function(err) {
                callback(err, post);
            });
        },
        asyncProperties: function(schema, post, callback) {
            if (!post || typeof post !== "object") return callback(null, post);
            var self = this;
            var properties = schema.properties;
            async.series([
                function(next) {
                    if (properties["*"] == null) return next();
                    var globing = properties["*"];
                    async.eachSeries(Object.keys(post), function(i, next) {
                        if (i in properties) return next();
                        self._deeperObject(i);
                        self._asyncSanitize(globing, post[i], function(err, res) {
                            err;
                            if (typeof res !== "undefined") post[i] = res;
                            self._back();
                            next();
                        });
                    }, next);
                },
                function(next) {
                    async.eachSeries(Object.keys(properties), function(i, next) {
                        if (i === "*") return next();
                        self._deeperObject(i);
                        self._asyncSanitize(properties[i], post[i], function(err, res) {
                            if (err) return next(err);
                            if (typeof res !== "undefined") post[i] = res;
                            self._back();
                            next();
                        });
                    }, next);
                }
            ], function(err) {
                return callback(err, post);
            });
        },
        asyncItems: function(schema, post, callback) {
            if (!(schema.items instanceof Object) || !(post instanceof Object)) return callback(null, post);
            var self = this;
            var items = schema.items;
            if (_typeIs.array(items) && _typeIs.array(post)) {
                var minLength = items.length < post.length ? items.length : post.length;
                async.timesSeries(minLength, function(i, next) {
                    self._deeperArray(i);
                    self._asyncSanitize(items[i], post[i], function(err, res) {
                        if (err) return next(err);
                        post[i] = res;
                        self._back();
                        next();
                    });
                }, function(err) {
                    callback(err, post);
                });
            } else async.eachSeries(Object.keys(post), function(key, next) {
                self._deeperArray(key);
                self._asyncSanitize(items, post[key], function(err, res) {
                    if (err) return next();
                    post[key] = res;
                    self._back();
                    next();
                });
            }, function(err) {
                callback(err, post);
            });
            return post;
        }
    };
    // Sanitization Class --------------------------------------------------------
    // inherits from Inspection class (actually we just call Inspection
    // constructor with the new context, because its prototype is empty
    function Sanitization(schema, custom) {
        Inspection.prototype.constructor.call(this, schema, _merge(Sanitization.custom, custom));
        var _reporting = [];
        this._basicFields = Object.keys(_sanitizationAttribut);
        this._customFields = Object.keys(this._custom);
        this.origin = null;
        this.report = function(message) {
            var newNot = {
                message: message || "was sanitized",
                property: this.userAlias ? this.userAlias + " (" + this._dumpStack() + ")" : this._dumpStack()
            };
            if (!_reporting.some(function(e) {
                return e.property === newNot.property;
            })) _reporting.push(newNot);
        };
        this.result = function(data) {
            // For old IE.
            /* eslint-disable object-shorthand */ return {
                data: data,
                reporting: _reporting,
                format: function() {
                    return this.reporting.map(function(i) {
                        return "Property " + i.property + " " + i.message;
                    }).join("\n");
                }
            };
        /* eslint-enable object-shorthand */ };
    }
    _extend(Sanitization.prototype, _sanitizationAttribut);
    _extend(Sanitization.prototype, _asyncSanitizationAttribut);
    _extend(Sanitization, new Customisable());
    Sanitization.prototype.sanitize = function(post, callback) {
        this.origin = post;
        if (typeof callback === "function") {
            var self = this;
            return this._asyncSanitize(this._schema, post, function(err, data) {
                self.origin = null;
                callback(err, self.result(data));
            });
        }
        var data = this._sanitize(this._schema, post);
        this.origin = null;
        return this.result(data);
    };
    Sanitization.prototype._sanitize = function(schema, post) {
        this.userAlias = schema.alias || null;
        this._basicFields.forEach(function(i) {
            if ((i in schema || i === "optional") && typeof this[i] === "function") post = this[i](schema, post);
        }, this);
        this._customFields.forEach(function(i) {
            if (i in schema && typeof this._custom[i] === "function") post = this._custom[i].call(this, schema, post);
        }, this);
        return post;
    };
    Sanitization.prototype._asyncSanitize = function(schema, post, callback) {
        var self = this;
        this.userAlias = schema.alias || null;
        async.waterfall([
            function(next) {
                async.reduce(self._basicFields, post, function(value, i, next) {
                    async.nextTick(function() {
                        if ((i in schema || i === "optional") && typeof self[i] === "function") {
                            if (self[i].length > 2) return self[i](schema, value, next);
                            value = self[i](schema, value);
                        }
                        next(null, value);
                    });
                }, next);
            },
            function(inter, next) {
                async.reduce(self._customFields, inter, function(value, i, next) {
                    async.nextTick(function() {
                        if (i in schema && typeof self._custom[i] === "function") {
                            if (self._custom[i].length > 2) return self._custom[i].call(self, schema, value, next);
                            value = self._custom[i].call(self, schema, value);
                        }
                        next(null, value);
                    });
                }, next);
            }
        ], callback);
    };
    // ---------------------------------------------------------------------------
    var INT_MIN = -2147483648;
    var INT_MAX = 2147483647;
    var _rand = {
        int: function(min, max) {
            return min + (0 | Math.random() * (max - min + 1));
        },
        float: function(min, max) {
            return Math.random() * (max - min) + min;
        },
        bool: function() {
            return Math.random() > 0.5;
        },
        char: function(min, max) {
            return String.fromCharCode(this.int(min, max));
        },
        fromList: function(list) {
            return list[this.int(0, list.length - 1)];
        }
    };
    var _formatSample = {
        "date-time": function() {
            return new Date().toISOString();
        },
        date: function() {
            return new Date().toISOString().replace(/T.*$/, "");
        },
        time: function() {
            return new Date().toLocaleTimeString({}, {
                hour12: false
            });
        },
        color: function(min, max) {
            var s = "#";
            if (min < 1) min = 1;
            for(var i = 0, l = _rand.int(min, max); i < l; i++)s += _rand.fromList("0123456789abcdefABCDEF");
            return s;
        },
        numeric: function() {
            return "" + _rand.int(0, INT_MAX);
        },
        integer: function() {
            if (_rand.bool() === true) return "-" + this.numeric();
            return this.numeric();
        },
        decimal: function() {
            return this.integer() + "." + this.numeric();
        },
        alpha: function(min, max) {
            var s = "";
            if (min < 1) min = 1;
            for(var i = 0, l = _rand.int(min, max); i < l; i++)s += _rand.fromList("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
            return s;
        },
        alphaNumeric: function(min, max) {
            var s = "";
            if (min < 1) min = 1;
            for(var i = 0, l = _rand.int(min, max); i < l; i++)s += _rand.fromList("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
            return s;
        },
        alphaDash: function(min, max) {
            var s = "";
            if (min < 1) min = 1;
            for(var i = 0, l = _rand.int(min, max); i < l; i++)s += _rand.fromList("_-abcdefghijklmnopqrstuvwxyz_-ABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789_-");
            return s;
        },
        javascript: function(min, max) {
            var s = _rand.fromList("_$abcdefghijklmnopqrstuvwxyz_$ABCDEFGHIJKLMNOPQRSTUVWXYZ_$");
            for(var i = 0, l = _rand.int(min, max - 1); i < l; i++)s += _rand.fromList("_$abcdefghijklmnopqrstuvwxyz_$ABCDEFGHIJKLMNOPQRSTUVWXYZ_$0123456789_$");
            return s;
        }
    };
    function _getLimits(schema) {
        var min = INT_MIN;
        var max = INT_MAX;
        if (schema.gte != null) min = schema.gte;
        else if (schema.gt != null) min = schema.gt + 1;
        if (schema.lte != null) max = schema.lte;
        else if (schema.lt != null) max = schema.lt - 1;
        // For old IE.
        /* eslint-disable object-shorthand */ return {
            min: min,
            max: max
        };
    /* eslint-enable object-shorthand */ }
    var _typeGenerator = {
        string: function(schema) {
            if (schema.eq != null) return schema.eq;
            var s = "";
            var minLength = schema.minLength != null ? schema.minLength : 0;
            var maxLength = schema.maxLength != null ? schema.maxLength : 32;
            if (typeof schema.pattern === "string" && typeof _formatSample[schema.pattern] === "function") return _formatSample[schema.pattern](minLength, maxLength);
            var l = schema.exactLength != null ? schema.exactLength : _rand.int(minLength, maxLength);
            for(var i = 0; i < l; i++)s += _rand.char(32, 126);
            return s;
        },
        number: function(schema) {
            if (schema.eq != null) return schema.eq;
            var limit = _getLimits(schema);
            var n = _rand.float(limit.min, limit.max);
            if (schema.ne != null) {
                var ne = _typeIs.array(schema.ne) ? schema.ne : [
                    schema.ne
                ];
                while(ne.indexOf(n) !== -1)n = _rand.float(limit.min, limit.max);
            }
            return n;
        },
        integer: function(schema) {
            if (schema.eq != null) return schema.eq;
            var limit = _getLimits(schema);
            var n = _rand.int(limit.min, limit.max);
            if (schema.ne != null) {
                var ne = _typeIs.array(schema.ne) ? schema.ne : [
                    schema.ne
                ];
                while(ne.indexOf(n) !== -1)n = _rand.int(limit.min, limit.max);
            }
            return n;
        },
        boolean: function(schema) {
            if (schema.eq != null) return schema.eq;
            return _rand.bool();
        },
        null: function(schema) {
            return null;
        },
        date: function(schema) {
            if (schema.eq != null) return schema.eq;
            return new Date();
        },
        object: function(schema) {
            var o = {};
            var prop = schema.properties || {};
            for(var key in prop)if (Object.prototype.hasOwnProperty.call(prop, key)) {
                if (prop[key].optional === true && _rand.bool() === true) continue;
                if (key !== "*") o[key] = this.generate(prop[key]);
                else {
                    var rk = "__random_key_";
                    var randomKey = rk + 0;
                    var n = _rand.int(1, 9);
                    for(var i = 1; i <= n; i++){
                        if (!(randomKey in prop)) o[randomKey] = this.generate(prop[key]);
                        randomKey = rk + i;
                    }
                }
            }
            return o;
        },
        array: function(schema) {
            var self = this;
            var items = schema.items || {};
            var minLength = schema.minLength != null ? schema.minLength : 0;
            var maxLength = schema.maxLength != null ? schema.maxLength : 16;
            var type;
            var candidate;
            var size;
            var i;
            if (_typeIs.array(items)) {
                size = items.length;
                if (schema.exactLength != null) size = schema.exactLength;
                else if (size < minLength) size = minLength;
                else if (size > maxLength) size = maxLength;
                candidate = new Array(size);
                type = null;
                for(i = 0; i < size; i++){
                    type = items[i].type || "any";
                    if (_typeIs.array(type)) type = type[_rand.int(0, type.length - 1)];
                    candidate[i] = self[type](items[i]);
                }
            } else {
                size = schema.exactLength != null ? schema.exactLength : _rand.int(minLength, maxLength);
                candidate = new Array(size);
                type = items.type || "any";
                if (_typeIs.array(type)) type = type[_rand.int(0, type.length - 1)];
                for(i = 0; i < size; i++)candidate[i] = self[type](items);
            }
            return candidate;
        },
        any: function(schema) {
            var fields = Object.keys(_typeGenerator);
            var i = fields[_rand.int(0, fields.length - 2)];
            return this[i](schema);
        }
    };
    // CandidateGenerator Class (Singleton) --------------------------------------
    function CandidateGenerator() {
    // Maybe extends Inspection class too ?
    }
    _extend(CandidateGenerator.prototype, _typeGenerator);
    var _instance = null;
    CandidateGenerator.instance = function() {
        if (!(_instance instanceof CandidateGenerator)) _instance = new CandidateGenerator();
        return _instance;
    };
    CandidateGenerator.prototype.generate = function(schema) {
        var type = schema.type || "any";
        if (_typeIs.array(type)) type = type[_rand.int(0, type.length - 1)];
        return this[type](schema);
    };
    // Exports ---------------------------------------------------------------------
    var SchemaInspector = {};
    // if server-side (node.js) else client-side
    if (0, module.exports) module.exports = SchemaInspector;
    else window.SchemaInspector = SchemaInspector;
    SchemaInspector.newSanitization = function(schema, custom) {
        return new Sanitization(schema, custom);
    };
    SchemaInspector.newValidation = function(schema, custom) {
        return new Validation(schema, custom);
    };
    SchemaInspector.Validation = Validation;
    SchemaInspector.Sanitization = Sanitization;
    SchemaInspector.sanitize = function(schema, post, custom, callback) {
        if (arguments.length === 3 && typeof custom === "function") {
            callback = custom;
            custom = null;
        }
        return new Sanitization(schema, custom).sanitize(post, callback);
    };
    SchemaInspector.validate = function(schema, candidate, custom, callback) {
        if (arguments.length === 3 && typeof custom === "function") {
            callback = custom;
            custom = null;
        }
        return new Validation(schema, custom).validate(candidate, callback);
    };
    SchemaInspector.generate = function(schema, n) {
        if (typeof n === "number") {
            var r = new Array(n);
            for(var i = 0; i < n; i++)r[i] = CandidateGenerator.instance().generate(schema);
            return r;
        }
        return CandidateGenerator.instance().generate(schema);
    };
})();

},{"7392be42137e4e64":"4mzNG"}],"4mzNG":[function(require,module,exports) {
var global = arguments[3];
var process = require("1e59454908b72d8b");
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    function slice(arrayLike, start) {
        start = start | 0;
        var newLen = Math.max(arrayLike.length - start, 0);
        var newArr = Array(newLen);
        for(var idx = 0; idx < newLen; idx++)newArr[idx] = arrayLike[start + idx];
        return newArr;
    }
    /**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */ var apply = function(fn /*, ...args*/ ) {
        var args = slice(arguments, 1);
        return function() {
            var callArgs = slice(arguments);
            return fn.apply(null, args.concat(callArgs));
        };
    };
    var initialParams = function(fn) {
        return function() {
            var args = slice(arguments);
            var callback = args.pop();
            fn.call(this, args, callback);
        };
    };
    /**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
    }
    var hasSetImmediate = typeof setImmediate === "function" && setImmediate;
    var hasNextTick = typeof process === "object" && typeof process.nextTick === "function";
    function fallback(fn) {
        setTimeout(fn, 0);
    }
    function wrap(defer) {
        return function(fn /*, ...args*/ ) {
            var args = slice(arguments, 1);
            defer(function() {
                fn.apply(null, args);
            });
        };
    }
    var _defer;
    if (hasSetImmediate) _defer = setImmediate;
    else if (hasNextTick) _defer = process.nextTick;
    else _defer = fallback;
    var setImmediate$1 = wrap(_defer);
    /**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */ function asyncify(func) {
        return initialParams(function(args, callback) {
            var result;
            try {
                result = func.apply(this, args);
            } catch (e) {
                return callback(e);
            }
            // if result is Promise object
            if (isObject(result) && typeof result.then === "function") result.then(function(value) {
                invokeCallback(callback, null, value);
            }, function(err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
            else callback(null, result);
        });
    }
    function invokeCallback(callback, error, value) {
        try {
            callback(error, value);
        } catch (e) {
            setImmediate$1(rethrow, e);
        }
    }
    function rethrow(error) {
        throw error;
    }
    var supportsSymbol = typeof Symbol === "function";
    function isAsync(fn) {
        return supportsSymbol && fn[Symbol.toStringTag] === "AsyncFunction";
    }
    function wrapAsync(asyncFn) {
        return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
    }
    function applyEach$1(eachfn) {
        return function(fns /*, ...args*/ ) {
            var args = slice(arguments, 1);
            var go = initialParams(function(args, callback) {
                var that = this;
                return eachfn(fns, function(fn, cb) {
                    wrapAsync(fn).apply(that, args.concat(cb));
                }, callback);
            });
            if (args.length) return go.apply(this, args);
            else return go;
        };
    }
    /** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    /** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    /** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
    /** Built-in value references. */ var Symbol$1 = root.Symbol;
    /** Used for built-in method references. */ var objectProto = Object.prototype;
    /** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
    /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
    /** Built-in value references. */ var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
    /**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
        try {
            value[symToStringTag$1] = undefined;
            var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
            if (isOwn) value[symToStringTag$1] = tag;
            else delete value[symToStringTag$1];
        }
        return result;
    }
    /** Used for built-in method references. */ var objectProto$1 = Object.prototype;
    /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString$1 = objectProto$1.toString;
    /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
        return nativeObjectToString$1.call(value);
    }
    /** `Object#toString` result references. */ var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    /** Built-in value references. */ var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
    /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
        if (value == null) return value === undefined ? undefinedTag : nullTag;
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    /** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    /**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
        if (!isObject(value)) return false;
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    /** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
    /**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    /**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
    }
    // A temporary value used to identify if the loop should be broken.
    // See #1064, #1293
    var breakLoop = {};
    /**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */ function noop() {
    // No operation performed.
    }
    function once(fn) {
        return function() {
            if (fn === null) return;
            var callFn = fn;
            fn = null;
            callFn.apply(this, arguments);
        };
    }
    var iteratorSymbol = typeof Symbol === "function" && Symbol.iterator;
    var getIterator = function(coll) {
        return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
    };
    /**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while(++index < n)result[index] = iteratee(index);
        return result;
    }
    /**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
        return value != null && typeof value == "object";
    }
    /** `Object#toString` result references. */ var argsTag = "[object Arguments]";
    /**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    /** Used for built-in method references. */ var objectProto$3 = Object.prototype;
    /** Used to check objects for own properties. */ var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
    /** Built-in value references. */ var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
    /**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
        return arguments;
    }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty$2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    /**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
    /**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
        return false;
    }
    /** Detect free variable `exports`. */ var freeExports = typeof exports1 == "object" && exports1 && !exports1.nodeType && exports1;
    /** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
    /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    /**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
    /** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER$1 = 9007199254740991;
    /** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
    /**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER$1 : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    /** `Object#toString` result references. */ var argsTag$1 = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag$1 = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    /** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    /**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    /**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
        return function(value) {
            return func(value);
        };
    }
    /** Detect free variable `exports`. */ var freeExports$1 = typeof exports1 == "object" && exports1 && !exports1.nodeType && exports1;
    /** Detect free variable `module`. */ var freeModule$1 = freeExports$1 && true && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */ var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
    /** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports$1 && freeGlobal.process;
    /** Used to access faster Node.js helpers. */ var nodeUtil = function() {
        try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
            if (types) return types;
            // Legacy `process.binding('util')` for Node.js < 10.
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {}
    }();
    /* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    /** Used for built-in method references. */ var objectProto$2 = Object.prototype;
    /** Used to check objects for own properties. */ var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
    /**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for(var key in value)if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) result.push(key);
        return result;
    }
    /** Used for built-in method references. */ var objectProto$5 = Object.prototype;
    /**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
        return value === proto;
    }
    /**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
        return function(arg) {
            return func(transform(arg));
        };
    }
    /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
    /** Used for built-in method references. */ var objectProto$4 = Object.prototype;
    /** Used to check objects for own properties. */ var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
    /**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
        if (!isPrototype(object)) return nativeKeys(object);
        var result = [];
        for(var key in Object(object))if (hasOwnProperty$3.call(object, key) && key != "constructor") result.push(key);
        return result;
    }
    /**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function createArrayIterator(coll) {
        var i = -1;
        var len = coll.length;
        return function next() {
            return ++i < len ? {
                value: coll[i],
                key: i
            } : null;
        };
    }
    function createES2015Iterator(iterator) {
        var i = -1;
        return function next() {
            var item = iterator.next();
            if (item.done) return null;
            i++;
            return {
                value: item.value,
                key: i
            };
        };
    }
    function createObjectIterator(obj) {
        var okeys = keys(obj);
        var i = -1;
        var len = okeys.length;
        return function next() {
            var key = okeys[++i];
            if (key === "__proto__") return next();
            return i < len ? {
                value: obj[key],
                key: key
            } : null;
        };
    }
    function iterator(coll) {
        if (isArrayLike(coll)) return createArrayIterator(coll);
        var iterator = getIterator(coll);
        return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
    }
    function onlyOnce(fn) {
        return function() {
            if (fn === null) throw new Error("Callback was already called.");
            var callFn = fn;
            fn = null;
            callFn.apply(this, arguments);
        };
    }
    function _eachOfLimit(limit) {
        return function(obj, iteratee, callback) {
            callback = once(callback || noop);
            if (limit <= 0 || !obj) return callback(null);
            var nextElem = iterator(obj);
            var done = false;
            var running = 0;
            var looping = false;
            function iterateeCallback(err, value) {
                running -= 1;
                if (err) {
                    done = true;
                    callback(err);
                } else if (value === breakLoop || done && running <= 0) {
                    done = true;
                    return callback(null);
                } else if (!looping) replenish();
            }
            function replenish() {
                looping = true;
                while(running < limit && !done){
                    var elem = nextElem();
                    if (elem === null) {
                        done = true;
                        if (running <= 0) callback(null);
                        return;
                    }
                    running += 1;
                    iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
                }
                looping = false;
            }
            replenish();
        };
    }
    /**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */ function eachOfLimit(coll, limit, iteratee, callback) {
        _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
    }
    function doLimit(fn, limit) {
        return function(iterable, iteratee, callback) {
            return fn(iterable, limit, iteratee, callback);
        };
    }
    // eachOf implementation optimized for array-likes
    function eachOfArrayLike(coll, iteratee, callback) {
        callback = once(callback || noop);
        var index = 0, completed = 0, length = coll.length;
        if (length === 0) callback(null);
        function iteratorCallback(err, value) {
            if (err) callback(err);
            else if (++completed === length || value === breakLoop) callback(null);
        }
        for(; index < length; index++)iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
    // a generic version of eachOf which can handle array, object, and iterator cases.
    var eachOfGeneric = doLimit(eachOfLimit, Infinity);
    /**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */ var eachOf = function(coll, iteratee, callback) {
        var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
        eachOfImplementation(coll, wrapAsync(iteratee), callback);
    };
    function doParallel(fn) {
        return function(obj, iteratee, callback) {
            return fn(eachOf, obj, wrapAsync(iteratee), callback);
        };
    }
    function _asyncMap(eachfn, arr, iteratee, callback) {
        callback = callback || noop;
        arr = arr || [];
        var results = [];
        var counter = 0;
        var _iteratee = wrapAsync(iteratee);
        eachfn(arr, function(value, _, callback) {
            var index = counter++;
            _iteratee(value, function(err, v) {
                results[index] = v;
                callback(err);
            });
        }, function(err) {
            callback(err, results);
        });
    }
    /**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */ var map = doParallel(_asyncMap);
    /**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument, `fns`, is provided, it will
 * return a function which lets you pass in the arguments as if it were a single
 * function call. The signature is `(..args, callback)`. If invoked with any
 * arguments, `callback` is required.
 * @example
 *
 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async.applyEach([enableSearch, updateSchema]),
 *     callback
 * );
 */ var applyEach = applyEach$1(map);
    function doParallelLimit(fn) {
        return function(obj, limit, iteratee, callback) {
            return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
        };
    }
    /**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */ var mapLimit = doParallelLimit(_asyncMap);
    /**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */ var mapSeries = doLimit(mapLimit, 1);
    /**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */ var applyEachSeries = applyEach$1(mapSeries);
    /**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while(++index < length){
            if (iteratee(array[index], index, array) === false) break;
        }
        return array;
    }
    /**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
            var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
            while(length--){
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) break;
            }
            return object;
        };
    }
    /**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
    /**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }
    /**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while(fromRight ? index-- : ++index < length){
            if (predicate(array[index], index, array)) return index;
        }
        return -1;
    }
    /**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
        return value !== value;
    }
    /**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while(++index < length){
            if (array[index] === value) return index;
        }
        return -1;
    }
    /**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    /**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns undefined
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */ var auto = function(tasks, concurrency, callback) {
        if (typeof concurrency === "function") {
            // concurrency is optional, shift the args.
            callback = concurrency;
            concurrency = null;
        }
        callback = once(callback || noop);
        var keys$$1 = keys(tasks);
        var numTasks = keys$$1.length;
        if (!numTasks) return callback(null);
        if (!concurrency) concurrency = numTasks;
        var results = {};
        var runningTasks = 0;
        var hasError = false;
        var listeners = Object.create(null);
        var readyTasks = [];
        // for cycle detection:
        var readyToCheck = []; // tasks that have been identified as reachable
        // without the possibility of returning to an ancestor task
        var uncheckedDependencies = {};
        baseForOwn(tasks, function(task, key) {
            if (!isArray(task)) {
                // no dependencies
                enqueueTask(key, [
                    task
                ]);
                readyToCheck.push(key);
                return;
            }
            var dependencies = task.slice(0, task.length - 1);
            var remainingDependencies = dependencies.length;
            if (remainingDependencies === 0) {
                enqueueTask(key, task);
                readyToCheck.push(key);
                return;
            }
            uncheckedDependencies[key] = remainingDependencies;
            arrayEach(dependencies, function(dependencyName) {
                if (!tasks[dependencyName]) throw new Error("async.auto task `" + key + "` has a non-existent dependency `" + dependencyName + "` in " + dependencies.join(", "));
                addListener(dependencyName, function() {
                    remainingDependencies--;
                    if (remainingDependencies === 0) enqueueTask(key, task);
                });
            });
        });
        checkForDeadlocks();
        processQueue();
        function enqueueTask(key, task) {
            readyTasks.push(function() {
                runTask(key, task);
            });
        }
        function processQueue() {
            if (readyTasks.length === 0 && runningTasks === 0) return callback(null, results);
            while(readyTasks.length && runningTasks < concurrency){
                var run = readyTasks.shift();
                run();
            }
        }
        function addListener(taskName, fn) {
            var taskListeners = listeners[taskName];
            if (!taskListeners) taskListeners = listeners[taskName] = [];
            taskListeners.push(fn);
        }
        function taskComplete(taskName) {
            var taskListeners = listeners[taskName] || [];
            arrayEach(taskListeners, function(fn) {
                fn();
            });
            processQueue();
        }
        function runTask(key, task) {
            if (hasError) return;
            var taskCallback = onlyOnce(function(err, result) {
                runningTasks--;
                if (arguments.length > 2) result = slice(arguments, 1);
                if (err) {
                    var safeResults = {};
                    baseForOwn(results, function(val, rkey) {
                        safeResults[rkey] = val;
                    });
                    safeResults[key] = result;
                    hasError = true;
                    listeners = Object.create(null);
                    callback(err, safeResults);
                } else {
                    results[key] = result;
                    taskComplete(key);
                }
            });
            runningTasks++;
            var taskFn = wrapAsync(task[task.length - 1]);
            if (task.length > 1) taskFn(results, taskCallback);
            else taskFn(taskCallback);
        }
        function checkForDeadlocks() {
            // Kahn's algorithm
            // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
            // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
            var currentTask;
            var counter = 0;
            while(readyToCheck.length){
                currentTask = readyToCheck.pop();
                counter++;
                arrayEach(getDependents(currentTask), function(dependent) {
                    if (--uncheckedDependencies[dependent] === 0) readyToCheck.push(dependent);
                });
            }
            if (counter !== numTasks) throw new Error("async.auto cannot execute tasks due to a recursive dependency");
        }
        function getDependents(taskName) {
            var result = [];
            baseForOwn(tasks, function(task, key) {
                if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) result.push(key);
            });
            return result;
        }
    };
    /**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while(++index < length)result[index] = iteratee(array[index], index, array);
        return result;
    }
    /** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
    /**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
    /** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
    var symbolToString = symbolProto ? symbolProto.toString : undefined;
    /**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == "string") return value;
        if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + "";
        if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    /**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) start = -start > length ? 0 : length + start;
        end = end > length ? length : end;
        if (end < 0) end += length;
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result = Array(length);
        while(++index < length)result[index] = array[index + start];
        return result;
    }
    /**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
    }
    /**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */ function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while(index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index;
    }
    /**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */ function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while(++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index;
    }
    /**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function asciiToArray(string) {
        return string.split("");
    }
    /** Used to compose unicode character classes. */ var rsAstralRange = "\ud800-\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    /** Used to compose unicode capture groups. */ var rsZWJ = "\\u200d";
    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */ var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    /**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */ function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    /** Used to compose unicode character classes. */ var rsAstralRange$1 = "\ud800-\udfff";
    var rsComboMarksRange$1 = "\\u0300-\\u036f";
    var reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange$1 = "\\u20d0-\\u20ff";
    var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
    var rsVarRange$1 = "\\ufe0e\\ufe0f";
    /** Used to compose unicode capture groups. */ var rsAstral = "[" + rsAstralRange$1 + "]";
    var rsCombo = "[" + rsComboRange$1 + "]";
    var rsFitz = "\ud83c[\udffb-\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange$1 + "]";
    var rsRegional = "(?:\ud83c[\udde6-\uddff]){2}";
    var rsSurrPair = "[\ud800-\udbff][\udc00-\udfff]";
    var rsZWJ$1 = "\\u200d";
    /** Used to compose unicode regexes. */ var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange$1 + "]?";
    var rsOptJoin = "(?:" + rsZWJ$1 + "(?:" + [
        rsNonAstral,
        rsRegional,
        rsSurrPair
    ].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [
        rsNonAstral + rsCombo + "?",
        rsCombo,
        rsRegional,
        rsSurrPair,
        rsAstral
    ].join("|") + ")";
    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */ var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    /**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    /**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */ function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    /**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
        return value == null ? "" : baseToString(value);
    }
    /** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
    /**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */ function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined)) return string.replace(reTrim, "");
        if (!string || !(chars = baseToString(chars))) return string;
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
    }
    var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
    var FN_ARG_SPLIT = /,/;
    var FN_ARG = /(=.+)?(\s*)$/;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    function parseParams(func) {
        func = func.toString().replace(STRIP_COMMENTS, "");
        func = func.match(FN_ARGS)[2].replace(" ", "");
        func = func ? func.split(FN_ARG_SPLIT) : [];
        func = func.map(function(arg) {
            return trim(arg.replace(FN_ARG, ""));
        });
        return func;
    }
    /**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */ function autoInject(tasks, callback) {
        var newTasks = {};
        baseForOwn(tasks, function(taskFn, key) {
            var params;
            var fnIsAsync = isAsync(taskFn);
            var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;
            if (isArray(taskFn)) {
                params = taskFn.slice(0, -1);
                taskFn = taskFn[taskFn.length - 1];
                newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
            } else if (hasNoDeps) // no dependencies, use the function as-is
            newTasks[key] = taskFn;
            else {
                params = parseParams(taskFn);
                if (taskFn.length === 0 && !fnIsAsync && params.length === 0) throw new Error("autoInject task functions require explicit parameters.");
                // remove callback param
                if (!fnIsAsync) params.pop();
                newTasks[key] = params.concat(newTask);
            }
            function newTask(results, taskCb) {
                var newArgs = arrayMap(params, function(name) {
                    return results[name];
                });
                newArgs.push(taskCb);
                wrapAsync(taskFn).apply(null, newArgs);
            }
        });
        auto(newTasks, callback);
    }
    // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
    // used for queues. This implementation assumes that the node provided by the user can be modified
    // to adjust the next and last properties. We implement only the minimal functionality
    // for queue support.
    function DLL() {
        this.head = this.tail = null;
        this.length = 0;
    }
    function setInitial(dll, node) {
        dll.length = 1;
        dll.head = dll.tail = node;
    }
    DLL.prototype.removeLink = function(node) {
        if (node.prev) node.prev.next = node.next;
        else this.head = node.next;
        if (node.next) node.next.prev = node.prev;
        else this.tail = node.prev;
        node.prev = node.next = null;
        this.length -= 1;
        return node;
    };
    DLL.prototype.empty = function() {
        while(this.head)this.shift();
        return this;
    };
    DLL.prototype.insertAfter = function(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        if (node.next) node.next.prev = newNode;
        else this.tail = newNode;
        node.next = newNode;
        this.length += 1;
    };
    DLL.prototype.insertBefore = function(node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node;
        if (node.prev) node.prev.next = newNode;
        else this.head = newNode;
        node.prev = newNode;
        this.length += 1;
    };
    DLL.prototype.unshift = function(node) {
        if (this.head) this.insertBefore(this.head, node);
        else setInitial(this, node);
    };
    DLL.prototype.push = function(node) {
        if (this.tail) this.insertAfter(this.tail, node);
        else setInitial(this, node);
    };
    DLL.prototype.shift = function() {
        return this.head && this.removeLink(this.head);
    };
    DLL.prototype.pop = function() {
        return this.tail && this.removeLink(this.tail);
    };
    DLL.prototype.toArray = function() {
        var arr = Array(this.length);
        var curr = this.head;
        for(var idx = 0; idx < this.length; idx++){
            arr[idx] = curr.data;
            curr = curr.next;
        }
        return arr;
    };
    DLL.prototype.remove = function(testFn) {
        var curr = this.head;
        while(!!curr){
            var next = curr.next;
            if (testFn(curr)) this.removeLink(curr);
            curr = next;
        }
        return this;
    };
    function queue(worker, concurrency, payload) {
        if (concurrency == null) concurrency = 1;
        else if (concurrency === 0) throw new Error("Concurrency must not be zero");
        var _worker = wrapAsync(worker);
        var numRunning = 0;
        var workersList = [];
        var processingScheduled = false;
        function _insert(data, insertAtFront, callback) {
            if (callback != null && typeof callback !== "function") throw new Error("task callback must be a function");
            q.started = true;
            if (!isArray(data)) data = [
                data
            ];
            if (data.length === 0 && q.idle()) // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
            for(var i = 0, l = data.length; i < l; i++){
                var item = {
                    data: data[i],
                    callback: callback || noop
                };
                if (insertAtFront) q._tasks.unshift(item);
                else q._tasks.push(item);
            }
            if (!processingScheduled) {
                processingScheduled = true;
                setImmediate$1(function() {
                    processingScheduled = false;
                    q.process();
                });
            }
        }
        function _next(tasks) {
            return function(err) {
                numRunning -= 1;
                for(var i = 0, l = tasks.length; i < l; i++){
                    var task = tasks[i];
                    var index = baseIndexOf(workersList, task, 0);
                    if (index === 0) workersList.shift();
                    else if (index > 0) workersList.splice(index, 1);
                    task.callback.apply(task, arguments);
                    if (err != null) q.error(err, task.data);
                }
                if (numRunning <= q.concurrency - q.buffer) q.unsaturated();
                if (q.idle()) q.drain();
                q.process();
            };
        }
        var isProcessing = false;
        var q = {
            _tasks: new DLL(),
            concurrency: concurrency,
            payload: payload,
            saturated: noop,
            unsaturated: noop,
            buffer: concurrency / 4,
            empty: noop,
            drain: noop,
            error: noop,
            started: false,
            paused: false,
            push: function(data, callback) {
                _insert(data, false, callback);
            },
            kill: function() {
                q.drain = noop;
                q._tasks.empty();
            },
            unshift: function(data, callback) {
                _insert(data, true, callback);
            },
            remove: function(testFn) {
                q._tasks.remove(testFn);
            },
            process: function() {
                // Avoid trying to start too many processing operations. This can occur
                // when callbacks resolve synchronously (#1267).
                if (isProcessing) return;
                isProcessing = true;
                while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                    var tasks = [], data = [];
                    var l = q._tasks.length;
                    if (q.payload) l = Math.min(l, q.payload);
                    for(var i = 0; i < l; i++){
                        var node = q._tasks.shift();
                        tasks.push(node);
                        workersList.push(node);
                        data.push(node.data);
                    }
                    numRunning += 1;
                    if (q._tasks.length === 0) q.empty();
                    if (numRunning === q.concurrency) q.saturated();
                    var cb = onlyOnce(_next(tasks));
                    _worker(data, cb);
                }
                isProcessing = false;
            },
            length: function() {
                return q._tasks.length;
            },
            running: function() {
                return numRunning;
            },
            workersList: function() {
                return workersList;
            },
            idle: function() {
                return q._tasks.length + numRunning === 0;
            },
            pause: function() {
                q.paused = true;
            },
            resume: function() {
                if (q.paused === false) return;
                q.paused = false;
                setImmediate$1(q.process);
            }
        };
        return q;
    }
    /**
 * A cargo of tasks for the worker function to complete. Cargo inherits all of
 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
 * @typedef {Object} CargoObject
 * @memberOf module:ControlFlow
 * @property {Function} length - A function returning the number of items
 * waiting to be processed. Invoke like `cargo.length()`.
 * @property {number} payload - An `integer` for determining how many tasks
 * should be process per round. This property can be changed after a `cargo` is
 * created to alter the payload on-the-fly.
 * @property {Function} push - Adds `task` to the `queue`. The callback is
 * called once the `worker` has finished processing the task. Instead of a
 * single task, an array of `tasks` can be submitted. The respective callback is
 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
 * @property {Function} saturated - A callback that is called when the
 * `queue.length()` hits the concurrency and further tasks will be queued.
 * @property {Function} empty - A callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - A callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke like `cargo.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
 */ /**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargo.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 */ function cargo(worker, payload) {
        return queue(worker, 1, payload);
    }
    /**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 */ var eachOfSeries = doLimit(eachOfLimit, 1);
    /**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */ function reduce(coll, memo, iteratee, callback) {
        callback = once(callback || noop);
        var _iteratee = wrapAsync(iteratee);
        eachOfSeries(coll, function(x, i, callback) {
            _iteratee(memo, x, function(err, v) {
                memo = v;
                callback(err);
            });
        }, function(err) {
            callback(err, memo);
        });
    }
    /**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */ function seq() {
        var _functions = arrayMap(arguments, wrapAsync);
        return function() {
            var args = slice(arguments);
            var that = this;
            var cb = args[args.length - 1];
            if (typeof cb == "function") args.pop();
            else cb = noop;
            reduce(_functions, args, function(newargs, fn, cb) {
                fn.apply(that, newargs.concat(function(err /*, ...nextargs*/ ) {
                    var nextargs = slice(arguments, 1);
                    cb(err, nextargs);
                }));
            }, function(err, results) {
                cb.apply(that, [
                    err
                ].concat(results));
            });
        };
    }
    /**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */ var compose = function() {
        return seq.apply(null, slice(arguments).reverse());
    };
    var _concat = Array.prototype.concat;
    /**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */ var concatLimit = function(coll, limit, iteratee, callback) {
        callback = callback || noop;
        var _iteratee = wrapAsync(iteratee);
        mapLimit(coll, limit, function(val, callback) {
            _iteratee(val, function(err /*, ...args*/ ) {
                if (err) return callback(err);
                return callback(null, slice(arguments, 1));
            });
        }, function(err, mapResults) {
            var result = [];
            for(var i = 0; i < mapResults.length; i++)if (mapResults[i]) result = _concat.apply(result, mapResults[i]);
            return callback(err, result);
        });
    };
    /**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. There is no guarantee that the
 * results array will be returned in the original order of `coll` passed to the
 * `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */ var concat = doLimit(concatLimit, Infinity);
    /**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */ var concatSeries = doLimit(concatLimit, 1);
    /**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */ var constant = function() {
        var values = slice(arguments);
        var args = [
            null
        ].concat(values);
        return function() {
            var callback = arguments[arguments.length - 1];
            return callback.apply(this, args);
        };
    };
    /**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
        return value;
    }
    function _createTester(check, getResult) {
        return function(eachfn, arr, iteratee, cb) {
            cb = cb || noop;
            var testPassed = false;
            var testResult;
            eachfn(arr, function(value, _, callback) {
                iteratee(value, function(err, result) {
                    if (err) callback(err);
                    else if (check(result) && !testResult) {
                        testPassed = true;
                        testResult = getResult(true, value);
                        callback(null, breakLoop);
                    } else callback();
                });
            }, function(err) {
                if (err) cb(err);
                else cb(null, testPassed ? testResult : getResult(false));
            });
        };
    }
    function _findGetResult(v, x) {
        return x;
    }
    /**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */ var detect = doParallel(_createTester(identity, _findGetResult));
    /**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */ var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));
    /**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */ var detectSeries = doLimit(detectLimit, 1);
    function consoleFunc(name) {
        return function(fn /*, ...args*/ ) {
            var args = slice(arguments, 1);
            args.push(function(err /*, ...args*/ ) {
                var args = slice(arguments, 1);
                if (typeof console === "object") {
                    if (err) {
                        if (console.error) console.error(err);
                    } else if (console[name]) arrayEach(args, function(x) {
                        console[name](x);
                    });
                }
            });
            wrapAsync(fn).apply(null, args);
        };
    }
    /**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */ var dir = consoleFunc("dir");
    /**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */ function doDuring(fn, test, callback) {
        callback = onlyOnce(callback || noop);
        var _fn = wrapAsync(fn);
        var _test = wrapAsync(test);
        function next(err /*, ...args*/ ) {
            if (err) return callback(err);
            var args = slice(arguments, 1);
            args.push(check);
            _test.apply(this, args);
        }
        function check(err, truth) {
            if (err) return callback(err);
            if (!truth) return callback(null);
            _fn(next);
        }
        check(null, true);
    }
    /**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */ function doWhilst(iteratee, test, callback) {
        callback = onlyOnce(callback || noop);
        var _iteratee = wrapAsync(iteratee);
        var next = function(err /*, ...args*/ ) {
            if (err) return callback(err);
            var args = slice(arguments, 1);
            if (test.apply(this, args)) return _iteratee(next);
            callback.apply(null, [
                null
            ].concat(args));
        };
        _iteratee(next);
    }
    /**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */ function doUntil(iteratee, test, callback) {
        doWhilst(iteratee, function() {
            return !test.apply(this, arguments);
        }, callback);
    }
    /**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */ function during(test, fn, callback) {
        callback = onlyOnce(callback || noop);
        var _fn = wrapAsync(fn);
        var _test = wrapAsync(test);
        function next(err) {
            if (err) return callback(err);
            _test(check);
        }
        function check(err, truth) {
            if (err) return callback(err);
            if (!truth) return callback(null);
            _fn(next);
        }
        _test(check);
    }
    function _withoutIndex(iteratee) {
        return function(value, index, callback) {
            return iteratee(value, callback);
        };
    }
    /**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */ function eachLimit(coll, iteratee, callback) {
        eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
    }
    /**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */ function eachLimit$1(coll, limit, iteratee, callback) {
        _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
    }
    /**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */ var eachSeries = doLimit(eachLimit$1, 1);
    /**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */ function ensureAsync(fn) {
        if (isAsync(fn)) return fn;
        return initialParams(function(args, callback) {
            var sync = true;
            args.push(function() {
                var innerArgs = arguments;
                if (sync) setImmediate$1(function() {
                    callback.apply(null, innerArgs);
                });
                else callback.apply(null, innerArgs);
            });
            fn.apply(this, args);
            sync = false;
        });
    }
    function notId(v) {
        return !v;
    }
    /**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */ var every = doParallel(_createTester(notId, notId));
    /**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */ var everyLimit = doParallelLimit(_createTester(notId, notId));
    /**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */ var everySeries = doLimit(everyLimit, 1);
    /**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
        return function(object) {
            return object == null ? undefined : object[key];
        };
    }
    function filterArray(eachfn, arr, iteratee, callback) {
        var truthValues = new Array(arr.length);
        eachfn(arr, function(x, index, callback) {
            iteratee(x, function(err, v) {
                truthValues[index] = !!v;
                callback(err);
            });
        }, function(err) {
            if (err) return callback(err);
            var results = [];
            for(var i = 0; i < arr.length; i++)if (truthValues[i]) results.push(arr[i]);
            callback(null, results);
        });
    }
    function filterGeneric(eachfn, coll, iteratee, callback) {
        var results = [];
        eachfn(coll, function(x, index, callback) {
            iteratee(x, function(err, v) {
                if (err) callback(err);
                else {
                    if (v) results.push({
                        index: index,
                        value: x
                    });
                    callback();
                }
            });
        }, function(err) {
            if (err) callback(err);
            else callback(null, arrayMap(results.sort(function(a, b) {
                return a.index - b.index;
            }), baseProperty("value")));
        });
    }
    function _filter(eachfn, coll, iteratee, callback) {
        var filter = isArrayLike(coll) ? filterArray : filterGeneric;
        filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
    }
    /**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */ var filter = doParallel(_filter);
    /**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */ var filterLimit = doParallelLimit(_filter);
    /**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 */ var filterSeries = doLimit(filterLimit, 1);
    /**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */ function forever(fn, errback) {
        var done = onlyOnce(errback || noop);
        var task = wrapAsync(ensureAsync(fn));
        function next(err) {
            if (err) return done(err);
            task(next);
        }
        next();
    }
    /**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */ var groupByLimit = function(coll, limit, iteratee, callback) {
        callback = callback || noop;
        var _iteratee = wrapAsync(iteratee);
        mapLimit(coll, limit, function(val, callback) {
            _iteratee(val, function(err, key) {
                if (err) return callback(err);
                return callback(null, {
                    key: key,
                    val: val
                });
            });
        }, function(err, mapResults) {
            var result = {};
            // from MDN, handle object having an `hasOwnProperty` prop
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            for(var i = 0; i < mapResults.length; i++)if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;
                if (hasOwnProperty.call(result, key)) result[key].push(val);
                else result[key] = [
                    val
                ];
            }
            return callback(err, result);
        });
    };
    /**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */ var groupBy = doLimit(groupByLimit, Infinity);
    /**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */ var groupBySeries = doLimit(groupByLimit, 1);
    /**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */ var log = consoleFunc("log");
    /**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */ function mapValuesLimit(obj, limit, iteratee, callback) {
        callback = once(callback || noop);
        var newObj = {};
        var _iteratee = wrapAsync(iteratee);
        eachOfLimit(obj, limit, function(val, key, next) {
            _iteratee(val, key, function(err, result) {
                if (err) return next(err);
                newObj[key] = result;
                next();
            });
        }, function(err) {
            callback(err, newObj);
        });
    }
    /**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */ var mapValues = doLimit(mapValuesLimit, Infinity);
    /**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */ var mapValuesSeries = doLimit(mapValuesLimit, 1);
    function has(obj, key) {
        return key in obj;
    }
    /**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */ function memoize(fn, hasher) {
        var memo = Object.create(null);
        var queues = Object.create(null);
        hasher = hasher || identity;
        var _fn = wrapAsync(fn);
        var memoized = initialParams(function memoized(args, callback) {
            var key = hasher.apply(null, args);
            if (has(memo, key)) setImmediate$1(function() {
                callback.apply(null, memo[key]);
            });
            else if (has(queues, key)) queues[key].push(callback);
            else {
                queues[key] = [
                    callback
                ];
                _fn.apply(null, args.concat(function() {
                    var args = slice(arguments);
                    memo[key] = args;
                    var q = queues[key];
                    delete queues[key];
                    for(var i = 0, l = q.length; i < l; i++)q[i].apply(null, args);
                }));
            }
        });
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    }
    /**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `process.nextTick`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.setImmediate]{@link module:Utils.setImmediate}
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */ var _defer$1;
    if (hasNextTick) _defer$1 = process.nextTick;
    else if (hasSetImmediate) _defer$1 = setImmediate;
    else _defer$1 = fallback;
    var nextTick = wrap(_defer$1);
    function _parallel(eachfn, tasks, callback) {
        callback = callback || noop;
        var results = isArrayLike(tasks) ? [] : {};
        eachfn(tasks, function(task, key, callback) {
            wrapAsync(task)(function(err, result) {
                if (arguments.length > 2) result = slice(arguments, 1);
                results[key] = result;
                callback(err);
            });
        }, function(err) {
            callback(err, results);
        });
    }
    /**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */ function parallelLimit(tasks, callback) {
        _parallel(eachOf, tasks, callback);
    }
    /**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 */ function parallelLimit$1(tasks, limit, callback) {
        _parallel(_eachOfLimit(limit), tasks, callback);
    }
    /**
 * A queue of tasks for the worker function to complete.
 * @typedef {Object} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {Function} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {Function} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a callback that is called when the number of
 * running workers hits the `concurrency` limit, and further tasks will be
 * queued.
 * @property {Function} unsaturated - a callback that is called when the number
 * of running workers is less than the `concurrency` & `buffer` limits, and
 * further tasks will not be queued.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - a callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} error - a callback that is called when a task errors.
 * Has the signature `function(error, task)`.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. No more tasks
 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
 */ /**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain = function() {
 *     console.log('all items have been processed');
 * };
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * q.push({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */ var queue$1 = function(worker, concurrency) {
        var _worker = wrapAsync(worker);
        return queue(function(items, cb) {
            _worker(items[0], cb);
        }, concurrency, 1);
    };
    /**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */ var priorityQueue = function(worker, concurrency) {
        // Start with a normal queue
        var q = queue$1(worker, concurrency);
        // Override push to accept second parameter representing priority
        q.push = function(data, priority, callback) {
            if (callback == null) callback = noop;
            if (typeof callback !== "function") throw new Error("task callback must be a function");
            q.started = true;
            if (!isArray(data)) data = [
                data
            ];
            if (data.length === 0) // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
            priority = priority || 0;
            var nextNode = q._tasks.head;
            while(nextNode && priority >= nextNode.priority)nextNode = nextNode.next;
            for(var i = 0, l = data.length; i < l; i++){
                var item = {
                    data: data[i],
                    priority: priority,
                    callback: callback
                };
                if (nextNode) q._tasks.insertBefore(nextNode, item);
                else q._tasks.push(item);
            }
            setImmediate$1(q.process);
        };
        // Remove unshift function
        delete q.unshift;
        return q;
    };
    /**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */ function race(tasks, callback) {
        callback = once(callback || noop);
        if (!isArray(tasks)) return callback(new TypeError("First argument to race must be an array of functions"));
        if (!tasks.length) return callback();
        for(var i = 0, l = tasks.length; i < l; i++)wrapAsync(tasks[i])(callback);
    }
    /**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */ function reduceRight(array, memo, iteratee, callback) {
        var reversed = slice(array).reverse();
        reduce(reversed, memo, iteratee, callback);
    }
    /**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */ function reflect(fn) {
        var _fn = wrapAsync(fn);
        return initialParams(function reflectOn(args, reflectCallback) {
            args.push(function callback(error, cbArg) {
                if (error) reflectCallback(null, {
                    error: error
                });
                else {
                    var value;
                    if (arguments.length <= 2) value = cbArg;
                    else value = slice(arguments, 1);
                    reflectCallback(null, {
                        value: value
                    });
                }
            });
            return _fn.apply(this, args);
        });
    }
    /**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */ function reflectAll(tasks) {
        var results;
        if (isArray(tasks)) results = arrayMap(tasks, reflect);
        else {
            results = {};
            baseForOwn(tasks, function(task, key) {
                results[key] = reflect.call(this, task);
            });
        }
        return results;
    }
    function reject$1(eachfn, arr, iteratee, callback) {
        _filter(eachfn, arr, function(value, cb) {
            iteratee(value, function(err, v) {
                cb(err, !v);
            });
        }, callback);
    }
    /**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */ var reject = doParallel(reject$1);
    /**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */ var rejectLimit = doParallelLimit(reject$1);
    /**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */ var rejectSeries = doLimit(rejectLimit, 1);
    /**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function constant$1(value) {
        return function() {
            return value;
        };
    }
    /**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // to retry individual methods that are not as reliable within other
 * // control flow functions, use the `retryable` wrapper:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */ function retry(opts, task, callback) {
        var DEFAULT_TIMES = 5;
        var DEFAULT_INTERVAL = 0;
        var options = {
            times: DEFAULT_TIMES,
            intervalFunc: constant$1(DEFAULT_INTERVAL)
        };
        function parseTimes(acc, t) {
            if (typeof t === "object") {
                acc.times = +t.times || DEFAULT_TIMES;
                acc.intervalFunc = typeof t.interval === "function" ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
                acc.errorFilter = t.errorFilter;
            } else if (typeof t === "number" || typeof t === "string") acc.times = +t || DEFAULT_TIMES;
            else throw new Error("Invalid arguments for async.retry");
        }
        if (arguments.length < 3 && typeof opts === "function") {
            callback = task || noop;
            task = opts;
        } else {
            parseTimes(options, opts);
            callback = callback || noop;
        }
        if (typeof task !== "function") throw new Error("Invalid arguments for async.retry");
        var _task = wrapAsync(task);
        var attempt = 1;
        function retryAttempt() {
            _task(function(err) {
                if (err && attempt++ < options.times && (typeof options.errorFilter != "function" || options.errorFilter(err))) setTimeout(retryAttempt, options.intervalFunc(attempt));
                else callback.apply(null, arguments);
            });
        }
        retryAttempt();
    }
    /**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */ var retryable = function(opts, task) {
        if (!task) {
            task = opts;
            opts = null;
        }
        var _task = wrapAsync(task);
        return initialParams(function(args, callback) {
            function taskFn(cb) {
                _task.apply(null, args.concat(cb));
            }
            if (opts) retry(opts, taskFn, callback);
            else retry(taskFn, callback);
        });
    };
    /**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */ function series(tasks, callback) {
        _parallel(eachOfSeries, tasks, callback);
    }
    /**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */ var some = doParallel(_createTester(Boolean, identity));
    /**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */ var someLimit = doParallelLimit(_createTester(Boolean, identity));
    /**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */ var someSeries = doLimit(someLimit, 1);
    /**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */ function sortBy(coll, iteratee, callback) {
        var _iteratee = wrapAsync(iteratee);
        map(coll, function(x, callback) {
            _iteratee(x, function(err, criteria) {
                if (err) return callback(err);
                callback(null, {
                    value: x,
                    criteria: criteria
                });
            });
        }, function(err, results) {
            if (err) return callback(err);
            callback(null, arrayMap(results.sort(comparator), baseProperty("value")));
        });
        function comparator(left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        }
    }
    /**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */ function timeout(asyncFn, milliseconds, info) {
        var fn = wrapAsync(asyncFn);
        return initialParams(function(args, callback) {
            var timedOut = false;
            var timer;
            function timeoutCallback() {
                var name = asyncFn.name || "anonymous";
                var error = new Error('Callback function "' + name + '" timed out.');
                error.code = "ETIMEDOUT";
                if (info) error.info = info;
                timedOut = true;
                callback(error);
            }
            args.push(function() {
                if (!timedOut) {
                    callback.apply(null, arguments);
                    clearTimeout(timer);
                }
            });
            // setup timer and call original function
            timer = setTimeout(timeoutCallback, milliseconds);
            fn.apply(null, args);
        });
    }
    /* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    /**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */ function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
        while(length--){
            result[fromRight ? length : ++index] = start;
            start += step;
        }
        return result;
    }
    /**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */ function timeLimit(count, limit, iteratee, callback) {
        var _iteratee = wrapAsync(iteratee);
        mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
    }
    /**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */ var times = doLimit(timeLimit, Infinity);
    /**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 */ var timesSeries = doLimit(timeLimit, 1);
    /**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */ function transform(coll, accumulator, iteratee, callback) {
        if (arguments.length <= 3) {
            callback = iteratee;
            iteratee = accumulator;
            accumulator = isArray(coll) ? [] : {};
        }
        callback = once(callback || noop);
        var _iteratee = wrapAsync(iteratee);
        eachOf(coll, function(v, k, cb) {
            _iteratee(accumulator, v, k, cb);
        }, function(err) {
            callback(err, accumulator);
        });
    }
    /**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @example
 * async.tryEach([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */ function tryEach(tasks, callback) {
        var error = null;
        var result;
        callback = callback || noop;
        eachSeries(tasks, function(task, callback) {
            wrapAsync(task)(function(err, res /*, ...args*/ ) {
                if (arguments.length > 2) result = slice(arguments, 1);
                else result = res;
                error = err;
                callback(!err);
            });
        }, function() {
            callback(error, result);
        });
    }
    /**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */ function unmemoize(fn) {
        return function() {
            return (fn.unmemoized || fn).apply(null, arguments);
        };
    }
    /**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */ function whilst(test, iteratee, callback) {
        callback = onlyOnce(callback || noop);
        var _iteratee = wrapAsync(iteratee);
        if (!test()) return callback(null);
        var next = function(err /*, ...args*/ ) {
            if (err) return callback(err);
            if (test()) return _iteratee(next);
            var args = slice(arguments, 1);
            callback.apply(null, [
                null
            ].concat(args));
        };
        _iteratee(next);
    }
    /**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */ function until(test, iteratee, callback) {
        whilst(function() {
            return !test.apply(this, arguments);
        }, iteratee, callback);
    }
    /**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */ var waterfall = function(tasks, callback) {
        callback = once(callback || noop);
        if (!isArray(tasks)) return callback(new Error("First argument to waterfall must be an array of functions"));
        if (!tasks.length) return callback();
        var taskIndex = 0;
        function nextTask(args) {
            var task = wrapAsync(tasks[taskIndex++]);
            args.push(onlyOnce(next));
            task.apply(null, args);
        }
        function next(err /*, ...args*/ ) {
            if (err || taskIndex === tasks.length) return callback.apply(null, arguments);
            nextTask(slice(arguments, 1));
        }
        nextTask([]);
    };
    /**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */ /**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */ /**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */ /**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */ /**
 * A collection of `async` utility functions.
 * @module Utils
 */ var index = {
        apply: apply,
        applyEach: applyEach,
        applyEachSeries: applyEachSeries,
        asyncify: asyncify,
        auto: auto,
        autoInject: autoInject,
        cargo: cargo,
        compose: compose,
        concat: concat,
        concatLimit: concatLimit,
        concatSeries: concatSeries,
        constant: constant,
        detect: detect,
        detectLimit: detectLimit,
        detectSeries: detectSeries,
        dir: dir,
        doDuring: doDuring,
        doUntil: doUntil,
        doWhilst: doWhilst,
        during: during,
        each: eachLimit,
        eachLimit: eachLimit$1,
        eachOf: eachOf,
        eachOfLimit: eachOfLimit,
        eachOfSeries: eachOfSeries,
        eachSeries: eachSeries,
        ensureAsync: ensureAsync,
        every: every,
        everyLimit: everyLimit,
        everySeries: everySeries,
        filter: filter,
        filterLimit: filterLimit,
        filterSeries: filterSeries,
        forever: forever,
        groupBy: groupBy,
        groupByLimit: groupByLimit,
        groupBySeries: groupBySeries,
        log: log,
        map: map,
        mapLimit: mapLimit,
        mapSeries: mapSeries,
        mapValues: mapValues,
        mapValuesLimit: mapValuesLimit,
        mapValuesSeries: mapValuesSeries,
        memoize: memoize,
        nextTick: nextTick,
        parallel: parallelLimit,
        parallelLimit: parallelLimit$1,
        priorityQueue: priorityQueue,
        queue: queue$1,
        race: race,
        reduce: reduce,
        reduceRight: reduceRight,
        reflect: reflect,
        reflectAll: reflectAll,
        reject: reject,
        rejectLimit: rejectLimit,
        rejectSeries: rejectSeries,
        retry: retry,
        retryable: retryable,
        seq: seq,
        series: series,
        setImmediate: setImmediate$1,
        some: some,
        someLimit: someLimit,
        someSeries: someSeries,
        sortBy: sortBy,
        timeout: timeout,
        times: times,
        timesLimit: timeLimit,
        timesSeries: timesSeries,
        transform: transform,
        tryEach: tryEach,
        unmemoize: unmemoize,
        until: until,
        waterfall: waterfall,
        whilst: whilst,
        // aliases
        all: every,
        allLimit: everyLimit,
        allSeries: everySeries,
        any: some,
        anyLimit: someLimit,
        anySeries: someSeries,
        find: detect,
        findLimit: detectLimit,
        findSeries: detectSeries,
        forEach: eachLimit,
        forEachSeries: eachSeries,
        forEachLimit: eachLimit$1,
        forEachOf: eachOf,
        forEachOfSeries: eachOfSeries,
        forEachOfLimit: eachOfLimit,
        inject: reduce,
        foldl: reduce,
        foldr: reduceRight,
        select: filter,
        selectLimit: filterLimit,
        selectSeries: filterSeries,
        wrapSync: asyncify
    };
    exports1["default"] = index;
    exports1.apply = apply;
    exports1.applyEach = applyEach;
    exports1.applyEachSeries = applyEachSeries;
    exports1.asyncify = asyncify;
    exports1.auto = auto;
    exports1.autoInject = autoInject;
    exports1.cargo = cargo;
    exports1.compose = compose;
    exports1.concat = concat;
    exports1.concatLimit = concatLimit;
    exports1.concatSeries = concatSeries;
    exports1.constant = constant;
    exports1.detect = detect;
    exports1.detectLimit = detectLimit;
    exports1.detectSeries = detectSeries;
    exports1.dir = dir;
    exports1.doDuring = doDuring;
    exports1.doUntil = doUntil;
    exports1.doWhilst = doWhilst;
    exports1.during = during;
    exports1.each = eachLimit;
    exports1.eachLimit = eachLimit$1;
    exports1.eachOf = eachOf;
    exports1.eachOfLimit = eachOfLimit;
    exports1.eachOfSeries = eachOfSeries;
    exports1.eachSeries = eachSeries;
    exports1.ensureAsync = ensureAsync;
    exports1.every = every;
    exports1.everyLimit = everyLimit;
    exports1.everySeries = everySeries;
    exports1.filter = filter;
    exports1.filterLimit = filterLimit;
    exports1.filterSeries = filterSeries;
    exports1.forever = forever;
    exports1.groupBy = groupBy;
    exports1.groupByLimit = groupByLimit;
    exports1.groupBySeries = groupBySeries;
    exports1.log = log;
    exports1.map = map;
    exports1.mapLimit = mapLimit;
    exports1.mapSeries = mapSeries;
    exports1.mapValues = mapValues;
    exports1.mapValuesLimit = mapValuesLimit;
    exports1.mapValuesSeries = mapValuesSeries;
    exports1.memoize = memoize;
    exports1.nextTick = nextTick;
    exports1.parallel = parallelLimit;
    exports1.parallelLimit = parallelLimit$1;
    exports1.priorityQueue = priorityQueue;
    exports1.queue = queue$1;
    exports1.race = race;
    exports1.reduce = reduce;
    exports1.reduceRight = reduceRight;
    exports1.reflect = reflect;
    exports1.reflectAll = reflectAll;
    exports1.reject = reject;
    exports1.rejectLimit = rejectLimit;
    exports1.rejectSeries = rejectSeries;
    exports1.retry = retry;
    exports1.retryable = retryable;
    exports1.seq = seq;
    exports1.series = series;
    exports1.setImmediate = setImmediate$1;
    exports1.some = some;
    exports1.someLimit = someLimit;
    exports1.someSeries = someSeries;
    exports1.sortBy = sortBy;
    exports1.timeout = timeout;
    exports1.times = times;
    exports1.timesLimit = timeLimit;
    exports1.timesSeries = timesSeries;
    exports1.transform = transform;
    exports1.tryEach = tryEach;
    exports1.unmemoize = unmemoize;
    exports1.until = until;
    exports1.waterfall = waterfall;
    exports1.whilst = whilst;
    exports1.all = every;
    exports1.allLimit = everyLimit;
    exports1.allSeries = everySeries;
    exports1.any = some;
    exports1.anyLimit = someLimit;
    exports1.anySeries = someSeries;
    exports1.find = detect;
    exports1.findLimit = detectLimit;
    exports1.findSeries = detectSeries;
    exports1.forEach = eachLimit;
    exports1.forEachSeries = eachSeries;
    exports1.forEachLimit = eachLimit$1;
    exports1.forEachOf = eachOf;
    exports1.forEachOfSeries = eachOfSeries;
    exports1.forEachOfLimit = eachOfLimit;
    exports1.inject = reduce;
    exports1.foldl = reduce;
    exports1.foldr = reduceRight;
    exports1.select = filter;
    exports1.selectLimit = filterLimit;
    exports1.selectSeries = filterSeries;
    exports1.wrapSync = asyncify;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
});

},{"1e59454908b72d8b":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"cHjUq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "protocolEchoReplyDetection", ()=>protocolEchoReplyDetection);
const GLOBAL_DETECTION_CACHE_KEY = "_blockstackDidCheckEchoReply";
const ECHO_REPLY_PARAM = "echoReply";
const AUTH_CONTINUATION_PARAM = "authContinuation";
function getQueryStringParams(query) {
    if (!query) return {};
    const trimmed = /^[?#]/.test(query) ? query.slice(1) : query;
    return trimmed.split("&").reduce((params, param)=>{
        const [key, value] = param.split("=");
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
        return params;
    }, {});
}
function protocolEchoReplyDetection() {
    let globalScope;
    if (typeof self !== "undefined") globalScope = self;
    else if (typeof window !== "undefined") globalScope = window;
    else return false;
    if (!globalScope.location || !globalScope.localStorage) return false;
    const existingDetection = globalScope[GLOBAL_DETECTION_CACHE_KEY];
    if (typeof existingDetection === "boolean") return existingDetection;
    const searchParams = getQueryStringParams(globalScope.location.search);
    const echoReplyParam = searchParams[ECHO_REPLY_PARAM];
    if (echoReplyParam) {
        globalScope[GLOBAL_DETECTION_CACHE_KEY] = true;
        const echoReplyKey = `echo-reply-${echoReplyParam}`;
        globalScope.localStorage.setItem(echoReplyKey, "success");
        globalScope.setTimeout(()=>{
            const authContinuationParam = searchParams[AUTH_CONTINUATION_PARAM];
            globalScope.location.href = authContinuationParam;
        }, 10);
        return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"hdD5p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lookupProfile", ()=>lookupProfile);
var _profile = require("@stacks/profile");
var _network = require("@stacks/network");
function lookupProfile(lookupOptions) {
    if (!lookupOptions.username) return Promise.reject(new Error("No username provided"));
    const defaultOptions = {
        network: new (0, _network.StacksMainnet)()
    };
    const options = Object.assign(defaultOptions, lookupOptions);
    const network = (0, _network.StacksNetwork).fromNameOrNetwork(options.network);
    let lookupPromise;
    if (options.zoneFileLookupURL) {
        const url = `${options.zoneFileLookupURL.replace(/\/$/, "")}/${options.username}`;
        lookupPromise = network.fetchFn(url).then((response)=>response.json());
    } else lookupPromise = network.getNameInfo(options.username);
    return lookupPromise.then((responseJSON)=>{
        if (responseJSON.hasOwnProperty("zonefile") && responseJSON.hasOwnProperty("address")) return (0, _profile.resolveZoneFileToProfile)(responseJSON.zonefile, responseJSON.address, network.fetchFn);
        else throw new Error("Invalid zonefile lookup response: did not contain `address` or `zonefile` field");
    });
}

},{"@stacks/profile":"8DFHv","@stacks/network":"c5pLF","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"imjF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aOaZj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../dist/esm/polyfills/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _loaderJs = require("../dist/esm/loader.js");
parcelHelpers.exportAll(_loaderJs, exports);
(function() {
    if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
        var a = HTMLElement;
        window.HTMLElement = function() {
            return Reflect.construct(a, [], this.constructor);
        };
        HTMLElement.prototype = a.prototype;
        HTMLElement.prototype.constructor = HTMLElement;
        Object.setPrototypeOf(HTMLElement, a);
    }
})();

},{"../dist/esm/polyfills/index.js":"72z4b","../dist/esm/loader.js":"fXKOV","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"72z4b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyPolyfills", ()=>applyPolyfills);
function applyPolyfills() {
    var promises = [];
    if (typeof window !== "undefined") {
        var win = window;
        if (!win.customElements || win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode)) promises.push(require(/* webpackChunkName: "polyfills-dom" */ "d2f8c276dc97d052"));
        var checkIfURLIsSupported = function() {
            try {
                var u = new URL("b", "http://a");
                u.pathname = "c%20d";
                return u.href === "http://a/c%20d" && u.searchParams;
            } catch (e) {
                return false;
            }
        };
        if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win.NodeList && !win.NodeList.prototype.forEach || !win.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") promises.push(require(/* webpackChunkName: "polyfills-core-js" */ "3e613301567bbb13"));
    }
    return Promise.all(promises);
}

},{"d2f8c276dc97d052":"a0cnH","3e613301567bbb13":"blUWb","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"a0cnH":[function(require,module,exports) {
module.exports = require("2b667b9bb7c8ec47")(require("3f2e4cfb1e912660").getBundleURL("dYXcY") + "dom.efa663bd.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("8228v"));

},{"2b667b9bb7c8ec47":"cgkRr","3f2e4cfb1e912660":"jMDco"}],"cgkRr":[function(require,module,exports) {
"use strict";
var cacheLoader = require("87007f457fe4ae39");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"87007f457fe4ae39":"8TO7f"}],"8TO7f":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"jMDco":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"blUWb":[function(require,module,exports) {
module.exports = require("79b888fd32a10b7b")(require("b3ed2217f3217c66").getBundleURL("dYXcY") + "core-js.1fa5b4c5.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("amfbD"));

},{"79b888fd32a10b7b":"cgkRr","b3ed2217f3217c66":"jMDco"}],"fXKOV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setNonce", ()=>(0, _index9D57A6FdJs.s));
parcelHelpers.export(exports, "defineCustomElements", ()=>defineCustomElements);
var _index9D57A6FdJs = require("./index-9d57a6fd.js");
/*
 Stencil Client Patch Esm v2.22.2 | MIT Licensed | https://stenciljs.com
 */ const patchEsm = ()=>{
    return (0, _index9D57A6FdJs.p)();
};
const defineCustomElements = (win, options)=>{
    if (typeof window === "undefined") return Promise.resolve();
    return patchEsm().then(()=>{
        return (0, _index9D57A6FdJs.b)([
            [
                "connect-modal",
                [
                    [
                        1,
                        "connect-modal",
                        {
                            "authOptions": [
                                16
                            ],
                            "hasOpenedInstall": [
                                32
                            ],
                            "hasOpenedInstallXverse": [
                                32
                            ]
                        }
                    ]
                ]
            ]
        ], options);
    });
};

},{"./index-9d57a6fd.js":"aUJE1","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"aUJE1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "b", ()=>bootstrapLazy);
parcelHelpers.export(exports, "g", ()=>getElement);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "p", ()=>promiseResolve);
parcelHelpers.export(exports, "r", ()=>registerInstance);
parcelHelpers.export(exports, "s", ()=>setNonce);
const NAMESPACE = "connect-ui";
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */ let scopeId;
let hostTagName;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = "")=>{
    return ()=>{
        return;
    };
};
const uniqueTime = (key, measureText)=>{
    return ()=>{
        return;
    };
};
const HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
/**
 * Default style mode id
 */ /**
 * Reusable empty obj/array
 * Don't add values to these!!
 */ const EMPTY_OBJ = {};
const isDef = (v)=>v != null;
const isComplexType = (o)=>{
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === "object" || o === "function";
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */ function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */ // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children)=>{
    let child = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c)=>{
        for(let i = 0; i < c.length; i++){
            child = c[i];
            if (Array.isArray(child)) walk(child);
            else if (child != null && typeof child !== "boolean") {
                if (simple = typeof nodeName !== "function" && !isComplexType(child)) child = String(child);
                if (simple && lastSimple) // If the previous child was simple (string), we merge both
                vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                else // Append a new vNode, if it's text, we create a text vNode
                vNodeChildren.push(simple ? newVNode(null, child) : child);
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        const classData = vnodeData.className || vnodeData.class;
        if (classData) vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k)=>classData[k]).join(" ");
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) vnode.$children$ = vNodeChildren;
    return vnode;
};
/**
 * A utility function for creating a virtual DOM node from a tag and some
 * possible text content.
 *
 * @param tag the tag for this element
 * @param text possible text content for the node
 * @returns a newly-minted virtual DOM node
 */ const newVNode = (tag, text)=>{
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null
    };
    vnode.$attrs$ = null;
    return vnode;
};
const Host = {};
/**
 * Check whether a given node is a Host node or not
 *
 * @param node the virtual DOM node to check
 * @returns whether it's a Host node or not
 */ const isHost = (node)=>node && node.$tag$ === Host;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */ const parsePropertyValue = (propValue, propType)=>{
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) // redundant return here for better minification
    return propValue;
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref)=>getHostRef(ref).$hostElement$;
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */ const emitEvent = (elm, name, opts)=>{
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS)=>{
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = style || new CSSStyleSheet();
        if (typeof style === "string") style = cssText;
        else style.replaceSync(cssText);
    } else style = cssText;
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm)=>{
    var _a;
    let scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */  ? styleContainerNode : doc;
    if (style) {
        if (typeof style === "string") {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            if (!appliedStyles.has(scopeId)) {
                {
                    styleElm = doc.createElement("style");
                    styleElm.innerHTML = style;
                    // Apply CSP nonce to the style tag if it exists
                    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                    if (nonce != null) styleElm.setAttribute("nonce", nonce);
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
                }
                if (appliedStyles) appliedStyles.add(scopeId);
            }
        } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) styleContainerNode.adoptedStyleSheets = [
            ...styleContainerNode.adoptedStyleSheets,
            style
        ];
    }
    return scopeId;
};
const attachStyles = (hostRef)=>{
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */ ) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm["s-sc"] = scopeId;
        elm.classList.add(scopeId + "-h");
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode)=>"sc-" + cmp.$tagName$;
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */ const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags)=>{
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === "class") {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c)=>c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c)=>c && !oldClasses.includes(c)));
        } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === "-") // on- prefixed events
            // allows to be explicit about the dom event to listen without any magic
            // under the hood:
            // <my-cmp on-click> // listens for "click"
            // <my-cmp on-Click> // listens for "Click"
            // <my-cmp on-ionChange> // listens for "ionChange"
            // <my-cmp on-EVENTS> // listens for "EVENTS"
            memberName = memberName.slice(3);
            else if (isMemberInElement(win, ln)) // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the window's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = ln.slice(2);
            else // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = ln[2] + memberName.slice(3);
            if (oldValue) plt.rel(elm, memberName, oldValue, false);
            if (newValue) plt.ael(elm, memberName, newValue, false);
        } else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || isComplex && newValue !== null) && !isSvg) try {
                if (!elm.tagName.includes("-")) {
                    const n = newValue == null ? "" : newValue;
                    // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                    if (memberName === "list") isProp = false;
                    else if (oldValue == null || elm[memberName] != n) elm[memberName] = n;
                } else elm[memberName] = newValue;
            } catch (e) {}
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === "") elm.removeAttribute(memberName);
            } else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */  || isSvg) && !isComplex) {
                newValue = newValue === true ? "" : newValue;
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value)=>!value ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode, memberName)=>{
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */  && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    // remove attributes no longer present on the vnode by setting them to undefined
    for(memberName in oldVnodeAttrs)if (!(memberName in newVnodeAttrs)) setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
    // add new & update changed attributes
    for(memberName in newVnodeAttrs)setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */ const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm)=>{
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    if (newVNode.$text$ !== null) // create text node
    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    else {
        // create element
        elm = newVNode.$elm$ = doc.createElement(newVNode.$tag$);
        updateElement(null, newVNode, isSvgMode);
        if (isDef(scopeId) && elm["s-si"] !== scopeId) // if there is a scopeId and this is the initial render
        // then let's add the scopeId as a css class
        elm.classList.add(elm["s-si"] = scopeId);
        if (newVNode.$children$) for(i = 0; i < newVNode.$children$.length; ++i){
            // create the node
            childNode = createElm(oldParentVNode, newVNode, i);
            // return node could have been null
            if (childNode) // append our new node
            elm.appendChild(childNode);
        }
    }
    return elm;
};
/**
 * Create DOM nodes corresponding to a list of {@link d.Vnode} objects and
 * add them to the DOM in the appropriate place.
 *
 * @param parentElm the DOM node which should be used as a parent for the new
 * DOM nodes
 * @param before a child of the `parentElm` which the new children should be
 * inserted before (optional)
 * @param parentVNode the parent virtual DOM node
 * @param vnodes the new child virtual DOM nodes to produce DOM nodes for
 * @param startIdx the index in the child virtual DOM nodes at which to start
 * creating DOM nodes (inclusive)
 * @param endIdx the index in the child virtual DOM nodes at which to stop
 * creating DOM nodes (inclusive)
 */ const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx)=>{
    let containerElm = parentElm;
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) containerElm = containerElm.shadowRoot;
    for(; startIdx <= endIdx; ++startIdx)if (vnodes[startIdx]) {
        childNode = createElm(null, parentVNode, startIdx);
        if (childNode) {
            vnodes[startIdx].$elm$ = childNode;
            containerElm.insertBefore(childNode, before);
        }
    }
};
/**
 * Remove the DOM elements corresponding to a list of {@link d.VNode} objects.
 * This can be used to, for instance, clean up after a list of children which
 * should no longer be shown.
 *
 * This function also handles some of Stencil's slot relocation logic.
 *
 * @param vnodes a list of virtual DOM nodes to remove
 * @param startIdx the index at which to start removing nodes (inclusive)
 * @param endIdx the index at which to stop removing nodes (inclusive)
 * @param vnode a VNode
 * @param elm an element
 */ const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm)=>{
    for(; startIdx <= endIdx; ++startIdx)if (vnode = vnodes[startIdx]) {
        elm = vnode.$elm$;
        // remove the vnode's element from the dom
        elm.remove();
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */ const updateChildren = (parentElm, oldCh, newVNode, newCh)=>{
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
        if (oldStartVnode == null) // VNode might have been moved left
        oldStartVnode = oldCh[++oldStartIdx];
        else if (oldEndVnode == null) oldEndVnode = oldCh[--oldEndIdx];
        else if (newStartVnode == null) newStartVnode = newCh[++newStartIdx];
        else if (newEndVnode == null) newEndVnode = newCh[--newEndIdx];
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        } else {
            // We either didn't find an element in the old children that matches
            // the key of the first new child OR the build is not using `key`
            // attributes at all. In either case we need to create a new element
            // for the new node.
            node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
            newStartVnode = newCh[++newStartIdx];
            if (node) oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
    }
    if (oldStartIdx > oldEndIdx) // we have some more new nodes to add which don't match up with old nodes
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    else if (newStartIdx > newEndIdx) // there are nodes in the `oldCh` array which no longer correspond to nodes
    // in the new array, so lets remove them (which entails cleaning up the
    // relevant DOM nodes)
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false negative and then have to do needless re-rendering
 * (i.e. we'd say two VNodes aren't equal when in fact they should be).
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */ const isSameVnode = (leftVNode, rightVNode)=>{
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) return true;
    return false;
};
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */ const patch = (oldVNode, newVNode)=>{
    const elm = newVNode.$elm$ = oldVNode.$elm$;
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const text = newVNode.$text$;
    if (text === null) {
        // either this is the first render of an element OR it's an update
        // AND we already know it's possible it could have changed
        // this updates the element's css classes, attrs, props, listeners, etc.
        updateElement(oldVNode, newVNode, isSvgMode);
        if (oldChildren !== null && newChildren !== null) // looks like there's child vnodes for both the old and new vnodes
        // so we need to call `updateChildren` to reconcile them
        updateChildren(elm, oldChildren, newVNode, newChildren);
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) // the old vnode was text, so be sure to clear it out
            elm.textContent = "";
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        } else if (oldChildren !== null) // no new child vnodes, but there are old child vnodes to remove
        removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else if (oldVNode.$text$ !== text) // update the text content for the text only vnode
    // and also only if the text is different than before
    elm.data = text;
};
/**
 * The main entry point for Stencil's virtual DOM-based rendering engine
 *
 * Given a {@link d.HostRef} container and some virtual DOM nodes, this
 * function will handle creating a virtual DOM tree with a single root, patching
 * the current virtual DOM tree onto an old one (if any), dealing with slot
 * relocation, and reflecting attributes.
 *
 * @param hostRef data needed to root and render the virtual DOM tree, such as
 * the DOM node into which it should be rendered.
 * @param renderFnResults the virtual DOM nodes to be rendered
 */ const renderVdom = (hostRef, renderFnResults)=>{
    const hostElm = hostRef.$hostElement$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */ ;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
    scopeId = hostElm["s-sc"];
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent)=>{
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) ancestorComponent["s-p"].push(new Promise((r)=>hostRef.$onRenderResolve$ = r));
};
const scheduleUpdate = (hostRef, isInitialLoad)=>{
    hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */ ;
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */ ) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */ ;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = ()=>dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch);
};
const dispatchHooks = (hostRef, isInitialLoad)=>{
    const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$;
    let promise;
    endSchedule();
    return then(promise, ()=>updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad)=>{
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
    const rc = elm["s-rc"];
    if (isInitialLoad) // DOM WRITE!
    attachStyles(hostRef);
    const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
    callRender(hostRef, instance);
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb)=>cb());
        elm["s-rc"] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm["s-p"];
        const postUpdate = ()=>postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) postUpdate();
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */ ;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm)=>{
    try {
        instance = instance.render();
        hostRef.$flags$ &= -17 /* HOST_FLAGS.isQueuedForUpdate */ ;
        hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */ ;
        renderVdom(hostRef, instance);
    } catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef)=>{
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime("postUpdate", tagName);
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */ )) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */ ;
        // DOM WRITE!
        addHydratedFlag(elm);
        endPostUpdate();
        hostRef.$onReadyResolve$(elm);
        if (!ancestorComponent) appDidLoad();
    } else endPostUpdate();
    if (hostRef.$onRenderResolve$) {
        hostRef.$onRenderResolve$();
        hostRef.$onRenderResolve$ = undefined;
    }
    if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */ ) nextTick(()=>scheduleUpdate(hostRef, false));
    hostRef.$flags$ &= -517;
// ( •_•)
// ( •_•)>⌐■-■
// (⌐■_■)
};
const appDidLoad = (who)=>{
    addHydratedFlag(doc.documentElement);
    nextTick(()=>emitEvent(win, "appload", {
            detail: {
                namespace: NAMESPACE
            }
        }));
};
const then = (promise, thenFn)=>{
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm)=>elm.classList.add("hydrated");
const getValue = (ref, propName)=>getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta)=>{
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$;
    newVal = parsePropertyValue(newVal);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */ ) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            if ((flags & 18 /* HOST_FLAGS.isQueuedForUpdate */ ) === 2 /* HOST_FLAGS.hasRendered */ ) // looks like this value actually changed, so we've got work to do!
            // but only if we've already rendered, otherwise just chill out
            // queue that we need to do an update, but don't worry about queuing
            // up millions cuz this function ensures it only runs once
            scheduleUpdate(hostRef, false);
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */ const proxyComponent = (Cstr, cmpMeta, flags)=>{
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]])=>{
            if (memberFlags & 31 /* MEMBER_FLAGS.Prop */  || flags & 2 /* PROXY_FLAGS.proxyState */  && memberFlags & 32 /* MEMBER_FLAGS.State */ ) // proxyComponent - prop
            Object.defineProperty(prototype, memberName, {
                get () {
                    // proxyComponent, get value
                    return getValue(this, memberName);
                },
                set (newValue) {
                    // proxyComponent, set value
                    setValue(this, memberName, newValue);
                },
                configurable: true,
                enumerable: true
            });
        });
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr)=>{
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */ ) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */ ;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */ );
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
            hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */ ;
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            } catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= -9 /* HOST_FLAGS.isConstructingInstance */ ;
            endNewInstance();
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */ ));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = ()=>scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent["s-rc"]) // this is the initial load and this component it has an ancestor component
    // but the ancestor component has NOT fired its will update lifecycle yet
    // so let's just cool our jets and wait for the ancestor to continue first
    // this will get fired off when the ancestor component
    // finally gets around to rendering its lazy self
    // fire off the initial update
    ancestorComponent["s-rc"].push(schedule);
    else schedule();
};
const connectedCallback = (elm)=>{
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */ ) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */ )) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */ ;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while(ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)// climb up the ancestors looking for the first
                // component that hasn't finished its lifecycle update yet
                if (ancestorComponent["s-p"]) {
                    // we found this components first ancestor component
                    // keep a reference to this component's ancestor component
                    attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
                    break;
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]])=>{
                if (memberFlags & 31 /* MEMBER_FLAGS.Prop */  && elm.hasOwnProperty(memberName)) {
                    const value = elm[memberName];
                    delete elm[memberName];
                    elm[memberName] = value;
                }
            });
            initializeComponent(elm, hostRef, cmpMeta);
        }
        endConnected();
    }
};
const disconnectedCallback = (elm)=>{
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */ ) === 0) getHostRef(elm);
};
const bootstrapLazy = (lazyBundles, options = {})=>{
    var _a;
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector("meta[charset]");
    const visibilityStyle = /*@__PURE__*/ doc.createElement("style");
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
    lazyBundles.map((lazyBundle)=>{
        lazyBundle[1].map((compactMeta)=>{
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3]
            };
            cmpMeta.$members$ = compactMeta[2];
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self){
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */ ) self.attachShadow({
                        mode: "open"
                    });
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) // connectedCallback will be processed once all components have been registered
                    deferredConnectedCallbacks.push(this);
                    else plt.jmp(()=>connectedCallback(this));
                }
                disconnectedCallback() {
                    plt.jmp(()=>disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */ ));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute("data-styles", "");
        // Apply CSP nonce to the style tag if it exists
        const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
        if (nonce != null) visibilityStyle.setAttribute("nonce", nonce);
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) deferredConnectedCallbacks.map((host)=>host.connectedCallback());
    else plt.jmp(()=>appLoadFallback = setTimeout(appDidLoad, 30));
    // Fallback appLoad event
    endBootstrap();
};
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */ const setNonce = (nonce)=>plt.$nonce$ = nonce;
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref)=>hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef)=>hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm, cmpMeta)=>{
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map()
    };
    hostRef.$onReadyPromise$ = new Promise((r)=>hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName)=>memberName in elm;
const consoleError = (e, el)=>(0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId)=>{
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId);
    if (module) return module[exportName];
    if (!hmrVersionId || !BUILD.hotModuleReplacement) {
        const processMod = (importedModule)=>{
            cmpModules.set(bundleId, importedModule);
            return importedModule[exportName];
        };
        switch(bundleId){
            case "connect-modal":
                return require(/* webpackMode: "lazy" */ "66ac861ce7aae2d8").then(processMod, consoleError);
        }
    }
    return require(/* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ `./${bundleId}.entry.js${""}`).then((importedModule)=>{
        cmpModules.set(bundleId, importedModule);
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== "undefined" ? window : {};
const doc = win.document || {
    head: {}
};
const plt = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: (h)=>h(),
    raf: (h)=>requestAnimationFrame(h),
    ael: (el, eventName, listener, opts)=>el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts)=>el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts)=>new CustomEvent(eventName, opts)
};
const promiseResolve = (v)=>Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (()=>{
    try {
        new CSSStyleSheet();
        return typeof new CSSStyleSheet().replaceSync === "function";
    } catch (e) {}
    return false;
})();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write)=>(cb)=>{
        queue.push(cb);
        if (!queuePending) {
            queuePending = true;
            if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */ ) nextTick(flush);
            else plt.raf(flush);
        }
    };
const consume = (queue)=>{
    for(let i = 0; i < queue.length; i++)try {
        queue[i](performance.now());
    } catch (e) {
        consoleError(e);
    }
    queue.length = 0;
};
const flush = ()=>{
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) // still more to do yet, but we've run out of time
    // let's let this thing cool off and try again in the next tick
    plt.raf(flush);
};
const nextTick = /*@__PURE__*/ (cb)=>promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

},{"66ac861ce7aae2d8":"eSXAy","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"eSXAy":[function(require,module,exports) {
module.exports = require("704246fc9e7e479d")(require("27858e80ef0ad219").getBundleURL("dYXcY") + "connect-modal.entry.6daf09a5.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("buyUM"));

},{"704246fc9e7e479d":"cgkRr","27858e80ef0ad219":"jMDco"}]},["6ZyM2","fBXki"], "fBXki", "parcelRequire94c2")

//# sourceMappingURL=index.8b90750d.js.map
