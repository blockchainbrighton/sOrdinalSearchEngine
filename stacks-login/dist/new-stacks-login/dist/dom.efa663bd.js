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
})({"9xrlE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7af69208efa663bd";
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

},{}],"8228v":[function(require,module,exports) {
(function() {
    /*
    Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */ "use strict";
    var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
    function g(a) {
        var b = aa.has(a);
        a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
        return !b && a;
    }
    function l(a) {
        var b = a.isConnected;
        if (void 0 !== b) return b;
        for(; a && !(a.__CE_isImportDocument || a instanceof Document);)a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
        return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
    }
    function n(a, b) {
        for(; b && b !== a && !b.nextSibling;)b = b.parentNode;
        return b && b !== a ? b.nextSibling : null;
    }
    function p(a, b, d) {
        d = void 0 === d ? new Set : d;
        for(var c = a; c;){
            if (c.nodeType === Node.ELEMENT_NODE) {
                var e = c;
                b(e);
                var f = e.localName;
                if ("link" === f && "import" === e.getAttribute("rel")) {
                    c = e.import;
                    if (c instanceof Node && !d.has(c)) for(d.add(c), c = c.firstChild; c; c = c.nextSibling)p(c, b, d);
                    c = n(a, e);
                    continue;
                } else if ("template" === f) {
                    c = n(a, e);
                    continue;
                }
                if (e = e.__CE_shadowRoot) for(e = e.firstChild; e; e = e.nextSibling)p(e, b, d);
            }
            c = c.firstChild ? c.firstChild : n(a, c);
        }
    }
    function r(a, b, d) {
        a[b] = d;
    }
    function u() {
        this.a = new Map;
        this.g = new Map;
        this.c = [];
        this.f = [];
        this.b = !1;
    }
    function ba(a, b, d) {
        a.a.set(b, d);
        a.g.set(d.constructorFunction, d);
    }
    function ca(a, b) {
        a.b = !0;
        a.c.push(b);
    }
    function da(a, b) {
        a.b = !0;
        a.f.push(b);
    }
    function v(a, b) {
        a.b && p(b, function(b) {
            return w(a, b);
        });
    }
    function w(a, b) {
        if (a.b && !b.__CE_patched) {
            b.__CE_patched = !0;
            for(var d = 0; d < a.c.length; d++)a.c[d](b);
            for(d = 0; d < a.f.length; d++)a.f[d](b);
        }
    }
    function x(a, b) {
        var d = [];
        p(b, function(b) {
            return d.push(b);
        });
        for(b = 0; b < d.length; b++){
            var c = d[b];
            1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
        }
    }
    function z(a, b) {
        var d = [];
        p(b, function(b) {
            return d.push(b);
        });
        for(b = 0; b < d.length; b++){
            var c = d[b];
            1 === c.__CE_state && a.disconnectedCallback(c);
        }
    }
    function A(a, b, d) {
        d = void 0 === d ? {} : d;
        var c = d.u || new Set, e = d.i || function(b) {
            return y(a, b);
        }, f = [];
        p(b, function(b) {
            if ("link" === b.localName && "import" === b.getAttribute("rel")) {
                var d = b.import;
                d instanceof Node && (d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0);
                d && "complete" === d.readyState ? d.__CE_documentLoadHandled = !0 : b.addEventListener("load", function() {
                    var d = b.import;
                    if (!d.__CE_documentLoadHandled) {
                        d.__CE_documentLoadHandled = !0;
                        var f = new Set(c);
                        f.delete(d);
                        A(a, d, {
                            u: f,
                            i: e
                        });
                    }
                });
            } else f.push(b);
        }, c);
        if (a.b) for(b = 0; b < f.length; b++)w(a, f[b]);
        for(b = 0; b < f.length; b++)e(f[b]);
    }
    function y(a, b) {
        if (void 0 === b.__CE_state) {
            var d = b.ownerDocument;
            if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) {
                if (d = a.a.get(b.localName)) {
                    d.constructionStack.push(b);
                    var c = d.constructorFunction;
                    try {
                        try {
                            if (new c !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                        } finally{
                            d.constructionStack.pop();
                        }
                    } catch (t) {
                        throw b.__CE_state = 2, t;
                    }
                    b.__CE_state = 1;
                    b.__CE_definition = d;
                    if (d.attributeChangedCallback) for(d = d.observedAttributes, c = 0; c < d.length; c++){
                        var e = d[c], f = b.getAttribute(e);
                        null !== f && a.attributeChangedCallback(b, e, null, f, null);
                    }
                    l(b) && a.connectedCallback(b);
                }
            }
        }
    }
    u.prototype.connectedCallback = function(a) {
        var b = a.__CE_definition;
        b.connectedCallback && b.connectedCallback.call(a);
    };
    u.prototype.disconnectedCallback = function(a) {
        var b = a.__CE_definition;
        b.disconnectedCallback && b.disconnectedCallback.call(a);
    };
    u.prototype.attributeChangedCallback = function(a, b, d, c, e) {
        var f = a.__CE_definition;
        f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);
    };
    function B(a) {
        var b = document;
        this.c = a;
        this.a = b;
        this.b = void 0;
        A(this.c, this.a);
        "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
            childList: !0,
            subtree: !0
        }));
    }
    function C(a) {
        a.b && a.b.disconnect();
    }
    B.prototype.f = function(a) {
        var b = this.a.readyState;
        "interactive" !== b && "complete" !== b || C(this);
        for(b = 0; b < a.length; b++)for(var d = a[b].addedNodes, c = 0; c < d.length; c++)A(this.c, d[c]);
    };
    function ea() {
        var a = this;
        this.b = this.a = void 0;
        this.c = new Promise(function(b) {
            a.b = b;
            a.a && b(a.a);
        });
    }
    function D(a) {
        if (a.a) throw Error("Already resolved.");
        a.a = void 0;
        a.b && a.b(void 0);
    }
    function E(a) {
        this.c = !1;
        this.a = a;
        this.j = new Map;
        this.f = function(b) {
            return b();
        };
        this.b = !1;
        this.g = [];
        this.o = new B(a);
    }
    E.prototype.l = function(a, b) {
        var d = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        if (!g(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
        if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
        if (this.c) throw Error("A custom element is already being defined.");
        this.c = !0;
        try {
            var c = function(b) {
                var a = e[b];
                if (void 0 !== a && !(a instanceof Function)) throw Error("The '" + b + "' callback must be a function.");
                return a;
            }, e = b.prototype;
            if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
            var f = c("connectedCallback");
            var t = c("disconnectedCallback");
            var k = c("adoptedCallback");
            var h = c("attributeChangedCallback");
            var m = b.observedAttributes || [];
        } catch (q) {
            return;
        } finally{
            this.c = !1;
        }
        b = {
            localName: a,
            constructorFunction: b,
            connectedCallback: f,
            disconnectedCallback: t,
            adoptedCallback: k,
            attributeChangedCallback: h,
            observedAttributes: m,
            constructionStack: []
        };
        ba(this.a, a, b);
        this.g.push(b);
        this.b || (this.b = !0, this.f(function() {
            return fa(d);
        }));
    };
    E.prototype.i = function(a) {
        A(this.a, a);
    };
    function fa(a) {
        if (!1 !== a.b) {
            a.b = !1;
            for(var b = a.g, d = [], c = new Map, e = 0; e < b.length; e++)c.set(b[e].localName, []);
            A(a.a, document, {
                i: function(b) {
                    if (void 0 === b.__CE_state) {
                        var e = b.localName, f = c.get(e);
                        f ? f.push(b) : a.a.a.get(e) && d.push(b);
                    }
                }
            });
            for(e = 0; e < d.length; e++)y(a.a, d[e]);
            for(; 0 < b.length;){
                var f = b.shift();
                e = f.localName;
                f = c.get(f.localName);
                for(var t = 0; t < f.length; t++)y(a.a, f[t]);
                (e = a.j.get(e)) && D(e);
            }
        }
    }
    E.prototype.get = function(a) {
        if (a = this.a.a.get(a)) return a.constructorFunction;
    };
    E.prototype.m = function(a) {
        if (!g(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
        var b = this.j.get(a);
        if (b) return b.c;
        b = new ea;
        this.j.set(a, b);
        this.a.a.get(a) && !this.g.some(function(b) {
            return b.localName === a;
        }) && D(b);
        return b.c;
    };
    E.prototype.s = function(a) {
        C(this.o);
        var b = this.f;
        this.f = function(d) {
            return a(function() {
                return b(d);
            });
        };
    };
    window.CustomElementRegistry = E;
    E.prototype.define = E.prototype.l;
    E.prototype.upgrade = E.prototype.i;
    E.prototype.get = E.prototype.get;
    E.prototype.whenDefined = E.prototype.m;
    E.prototype.polyfillWrapFlushCallback = E.prototype.s;
    var F = window.Document.prototype.createElement, G = window.Document.prototype.createElementNS, ha = window.Document.prototype.importNode, ia = window.Document.prototype.prepend, ja = window.Document.prototype.append, ka = window.DocumentFragment.prototype.prepend, la = window.DocumentFragment.prototype.append, H = window.Node.prototype.cloneNode, I = window.Node.prototype.appendChild, J = window.Node.prototype.insertBefore, K = window.Node.prototype.removeChild, L = window.Node.prototype.replaceChild, M = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), N = window.Element.prototype.attachShadow, O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), P = window.Element.prototype.getAttribute, Q = window.Element.prototype.setAttribute, R = window.Element.prototype.removeAttribute, S = window.Element.prototype.getAttributeNS, T = window.Element.prototype.setAttributeNS, U = window.Element.prototype.removeAttributeNS, ma = window.Element.prototype.insertAdjacentElement, na = window.Element.prototype.insertAdjacentHTML, oa = window.Element.prototype.prepend, pa = window.Element.prototype.append, V = window.Element.prototype.before, qa = window.Element.prototype.after, ra = window.Element.prototype.replaceWith, sa = window.Element.prototype.remove, ta = window.HTMLElement, W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), ua = window.HTMLElement.prototype.insertAdjacentElement, va = window.HTMLElement.prototype.insertAdjacentHTML;
    var wa = new function() {};
    function xa() {
        var a = X;
        window.HTMLElement = function() {
            function b() {
                var b = this.constructor, c = a.g.get(b);
                if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
                var e = c.constructionStack;
                if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;
                c = e.length - 1;
                var f = e[c];
                if (f === wa) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                e[c] = wa;
                Object.setPrototypeOf(f, b.prototype);
                w(a, f);
                return f;
            }
            b.prototype = ta.prototype;
            Object.defineProperty(b.prototype, "constructor", {
                writable: !0,
                configurable: !0,
                enumerable: !1,
                value: b
            });
            return b;
        }();
    }
    function Y(a, b, d) {
        function c(b) {
            return function(d) {
                for(var e = [], c = 0; c < arguments.length; ++c)e[c] = arguments[c];
                c = [];
                for(var f = [], m = 0; m < e.length; m++){
                    var q = e[m];
                    q instanceof Element && l(q) && f.push(q);
                    if (q instanceof DocumentFragment) for(q = q.firstChild; q; q = q.nextSibling)c.push(q);
                    else c.push(q);
                }
                b.apply(this, e);
                for(e = 0; e < f.length; e++)z(a, f[e]);
                if (l(this)) for(e = 0; e < c.length; e++)f = c[e], f instanceof Element && x(a, f);
            };
        }
        void 0 !== d.h && (b.prepend = c(d.h));
        void 0 !== d.append && (b.append = c(d.append));
    }
    function ya() {
        var a = X;
        r(Document.prototype, "createElement", function(b) {
            if (this.__CE_hasRegistry) {
                var d = a.a.get(b);
                if (d) return new d.constructorFunction;
            }
            b = F.call(this, b);
            w(a, b);
            return b;
        });
        r(Document.prototype, "importNode", function(b, d) {
            b = ha.call(this, b, !!d);
            this.__CE_hasRegistry ? A(a, b) : v(a, b);
            return b;
        });
        r(Document.prototype, "createElementNS", function(b, d) {
            if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
                var c = a.a.get(d);
                if (c) return new c.constructorFunction;
            }
            b = G.call(this, b, d);
            w(a, b);
            return b;
        });
        Y(a, Document.prototype, {
            h: ia,
            append: ja
        });
    }
    function za() {
        function a(a, c) {
            Object.defineProperty(a, "textContent", {
                enumerable: c.enumerable,
                configurable: !0,
                get: c.get,
                set: function(a) {
                    if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);
                    else {
                        var d = void 0;
                        if (this.firstChild) {
                            var e = this.childNodes, k = e.length;
                            if (0 < k && l(this)) {
                                d = Array(k);
                                for(var h = 0; h < k; h++)d[h] = e[h];
                            }
                        }
                        c.set.call(this, a);
                        if (d) for(a = 0; a < d.length; a++)z(b, d[a]);
                    }
                }
            });
        }
        var b = X;
        r(Node.prototype, "insertBefore", function(a, c) {
            if (a instanceof DocumentFragment) {
                var e = Array.prototype.slice.apply(a.childNodes);
                a = J.call(this, a, c);
                if (l(this)) for(c = 0; c < e.length; c++)x(b, e[c]);
                return a;
            }
            e = l(a);
            c = J.call(this, a, c);
            e && z(b, a);
            l(this) && x(b, a);
            return c;
        });
        r(Node.prototype, "appendChild", function(a) {
            if (a instanceof DocumentFragment) {
                var c = Array.prototype.slice.apply(a.childNodes);
                a = I.call(this, a);
                if (l(this)) for(var e = 0; e < c.length; e++)x(b, c[e]);
                return a;
            }
            c = l(a);
            e = I.call(this, a);
            c && z(b, a);
            l(this) && x(b, a);
            return e;
        });
        r(Node.prototype, "cloneNode", function(a) {
            a = H.call(this, !!a);
            this.ownerDocument.__CE_hasRegistry ? A(b, a) : v(b, a);
            return a;
        });
        r(Node.prototype, "removeChild", function(a) {
            var c = l(a), e = K.call(this, a);
            c && z(b, a);
            return e;
        });
        r(Node.prototype, "replaceChild", function(a, c) {
            if (a instanceof DocumentFragment) {
                var e = Array.prototype.slice.apply(a.childNodes);
                a = L.call(this, a, c);
                if (l(this)) for(z(b, c), c = 0; c < e.length; c++)x(b, e[c]);
                return a;
            }
            e = l(a);
            var f = L.call(this, a, c), d = l(this);
            d && z(b, c);
            e && z(b, a);
            d && x(b, a);
            return f;
        });
        M && M.get ? a(Node.prototype, M) : ca(b, function(b) {
            a(b, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    for(var a = [], b = 0; b < this.childNodes.length; b++){
                        var f = this.childNodes[b];
                        f.nodeType !== Node.COMMENT_NODE && a.push(f.textContent);
                    }
                    return a.join("");
                },
                set: function(a) {
                    for(; this.firstChild;)K.call(this, this.firstChild);
                    null != a && "" !== a && I.call(this, document.createTextNode(a));
                }
            });
        });
    }
    function Aa(a) {
        function b(b) {
            return function(e) {
                for(var c = [], d = 0; d < arguments.length; ++d)c[d] = arguments[d];
                d = [];
                for(var k = [], h = 0; h < c.length; h++){
                    var m = c[h];
                    m instanceof Element && l(m) && k.push(m);
                    if (m instanceof DocumentFragment) for(m = m.firstChild; m; m = m.nextSibling)d.push(m);
                    else d.push(m);
                }
                b.apply(this, c);
                for(c = 0; c < k.length; c++)z(a, k[c]);
                if (l(this)) for(c = 0; c < d.length; c++)k = d[c], k instanceof Element && x(a, k);
            };
        }
        var d = Element.prototype;
        void 0 !== V && (d.before = b(V));
        void 0 !== V && (d.after = b(qa));
        void 0 !== ra && r(d, "replaceWith", function(b) {
            for(var e = [], c = 0; c < arguments.length; ++c)e[c] = arguments[c];
            c = [];
            for(var d = [], k = 0; k < e.length; k++){
                var h = e[k];
                h instanceof Element && l(h) && d.push(h);
                if (h instanceof DocumentFragment) for(h = h.firstChild; h; h = h.nextSibling)c.push(h);
                else c.push(h);
            }
            k = l(this);
            ra.apply(this, e);
            for(e = 0; e < d.length; e++)z(a, d[e]);
            if (k) for(z(a, this), e = 0; e < c.length; e++)d = c[e], d instanceof Element && x(a, d);
        });
        void 0 !== sa && r(d, "remove", function() {
            var b = l(this);
            sa.call(this);
            b && z(a, this);
        });
    }
    function Ba() {
        function a(a, b) {
            Object.defineProperty(a, "innerHTML", {
                enumerable: b.enumerable,
                configurable: !0,
                get: b.get,
                set: function(a) {
                    var e = this, d = void 0;
                    l(this) && (d = [], p(this, function(a) {
                        a !== e && d.push(a);
                    }));
                    b.set.call(this, a);
                    if (d) for(var f = 0; f < d.length; f++){
                        var t = d[f];
                        1 === t.__CE_state && c.disconnectedCallback(t);
                    }
                    this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
                    return a;
                }
            });
        }
        function b(a, b) {
            r(a, "insertAdjacentElement", function(a, e) {
                var d = l(e);
                a = b.call(this, a, e);
                d && z(c, e);
                l(a) && x(c, e);
                return a;
            });
        }
        function d(a, b) {
            function e(a, b) {
                for(var e = []; a !== b; a = a.nextSibling)e.push(a);
                for(b = 0; b < e.length; b++)A(c, e[b]);
            }
            r(a, "insertAdjacentHTML", function(a, c) {
                a = a.toLowerCase();
                if ("beforebegin" === a) {
                    var d = this.previousSibling;
                    b.call(this, a, c);
                    e(d || this.parentNode.firstChild, this);
                } else if ("afterbegin" === a) d = this.firstChild, b.call(this, a, c), e(this.firstChild, d);
                else if ("beforeend" === a) d = this.lastChild, b.call(this, a, c), e(d || this.firstChild, null);
                else if ("afterend" === a) d = this.nextSibling, b.call(this, a, c), e(this.nextSibling, d);
                else throw new SyntaxError("The value provided (" + String(a) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            });
        }
        var c = X;
        N && r(Element.prototype, "attachShadow", function(a) {
            a = N.call(this, a);
            var b = c;
            if (b.b && !a.__CE_patched) {
                a.__CE_patched = !0;
                for(var e = 0; e < b.c.length; e++)b.c[e](a);
            }
            return this.__CE_shadowRoot = a;
        });
        O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function(b) {
            a(b, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return H.call(this, !0).innerHTML;
                },
                set: function(a) {
                    var b = "template" === this.localName, c = b ? this.content : this, e = G.call(document, this.namespaceURI, this.localName);
                    for(e.innerHTML = a; 0 < c.childNodes.length;)K.call(c, c.childNodes[0]);
                    for(a = b ? e.content : e; 0 < a.childNodes.length;)I.call(c, a.childNodes[0]);
                }
            });
        });
        r(Element.prototype, "setAttribute", function(a, b) {
            if (1 !== this.__CE_state) return Q.call(this, a, b);
            var e = P.call(this, a);
            Q.call(this, a, b);
            b = P.call(this, a);
            c.attributeChangedCallback(this, a, e, b, null);
        });
        r(Element.prototype, "setAttributeNS", function(a, b, d) {
            if (1 !== this.__CE_state) return T.call(this, a, b, d);
            var e = S.call(this, a, b);
            T.call(this, a, b, d);
            d = S.call(this, a, b);
            c.attributeChangedCallback(this, b, e, d, a);
        });
        r(Element.prototype, "removeAttribute", function(a) {
            if (1 !== this.__CE_state) return R.call(this, a);
            var b = P.call(this, a);
            R.call(this, a);
            null !== b && c.attributeChangedCallback(this, a, b, null, null);
        });
        r(Element.prototype, "removeAttributeNS", function(a, b) {
            if (1 !== this.__CE_state) return U.call(this, a, b);
            var d = S.call(this, a, b);
            U.call(this, a, b);
            var e = S.call(this, a, b);
            d !== e && c.attributeChangedCallback(this, b, d, e, a);
        });
        ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
        va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
        Y(c, Element.prototype, {
            h: oa,
            append: pa
        });
        Aa(c);
    }
    var Z = window.customElements;
    if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
        var X = new u;
        xa();
        ya();
        Y(X, DocumentFragment.prototype, {
            h: ka,
            append: la
        });
        za();
        Ba();
        document.__CE_hasRegistry = !0;
        var customElements = new E(X);
        Object.defineProperty(window, "customElements", {
            configurable: !0,
            enumerable: !0,
            value: customElements
        });
    }
}).call(self);
// Polyfill document.baseURI
"string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", {
    enumerable: !0,
    configurable: !0,
    get: function() {
        var a = document.querySelector("base");
        return a && a.href ? a.href : document.URL;
    }
});
// Polyfill CustomEvent
"function" !== typeof window.CustomEvent && (window.CustomEvent = function(c, a) {
    a = a || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
    };
    var b = document.createEvent("CustomEvent");
    b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
    return b;
}, window.CustomEvent.prototype = window.Event.prototype);
// Event.composedPath
(function(b, c, d) {
    b.composedPath || (b.composedPath = function() {
        if (this.path) return this.path;
        var a = this.target;
        for(this.path = []; null !== a.parentNode;)this.path.push(a), a = a.parentNode;
        this.path.push(c, d);
        return this.path;
    });
})(Event.prototype, document, window);
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/ (function(a) {
    "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function(a) {
        a = (this.document || this.ownerDocument).querySelectorAll(a);
        for(var b = 0; a[b] && a[b] !== this;)++b;
        return !!a[b];
    });
    "function" !== typeof a.closest && (a.closest = function(a) {
        for(var b = this; b && 1 === b.nodeType;){
            if (b.matches(a)) return b;
            b = b.parentNode;
        }
        return null;
    });
})(window.Element.prototype);
/*!
Element.getRootNode()
*/ (function(c) {
    function d(a) {
        a = b(a);
        return a && 11 === a.nodeType ? d(a.host) : a;
    }
    function b(a) {
        return a && a.parentNode ? b(a.parentNode) : a;
    }
    "function" !== typeof c.getRootNode && (c.getRootNode = function(a) {
        return a && a.composed ? d(this) : b(this);
    });
})(Element.prototype);
/*!
Element.isConnected()
*/ (function(a) {
    "isConnected" in a || Object.defineProperty(a, "isConnected", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = this.getRootNode({
                composed: !0
            });
            return a && 9 === a.nodeType;
        }
    });
})(Element.prototype);
/*!
Element.remove()
*/ (function(b) {
    b.forEach(function(a) {
        a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                null !== this.parentNode && this.parentNode.removeChild(this);
            }
        });
    });
})([
    Element.prototype,
    CharacterData.prototype,
    DocumentType.prototype
]);
/*!
Element.classList
*/ !function(e) {
    "classList" in e || Object.defineProperty(e, "classList", {
        get: function() {
            var e = this, t = (e.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);
            function n() {
                t.length > 0 ? e.setAttribute("class", t.join(" ")) : e.removeAttribute("class");
            }
            return "" === t[0] && t.splice(0, 1), t.toggle = function(e, i) {
                void 0 !== i ? i ? t.add(e) : t.remove(e) : -1 !== t.indexOf(e) ? t.splice(t.indexOf(e), 1) : t.push(e), n();
            }, t.add = function() {
                for(var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++)-1 === t.indexOf(e[i]) && t.push(e[i]);
                n();
            }, t.remove = function() {
                for(var e = [].slice.call(arguments), i = 0, s = e.length; i < s; i++)-1 !== t.indexOf(e[i]) && t.splice(t.indexOf(e[i]), 1);
                n();
            }, t.item = function(e) {
                return t[e];
            }, t.contains = function(e) {
                return -1 !== t.indexOf(e);
            }, t.replace = function(e, i) {
                -1 !== t.indexOf(e) && t.splice(t.indexOf(e), 1, i), n();
            }, t.value = e.getAttribute("class") || "", t;
        }
    });
}(Element.prototype);
/*!
DOMTokenList
*/ (function(b) {
    try {
        document.body.classList.add();
    } catch (e) {
        var c = b.add, d = b.remove;
        b.add = function() {
            for(var a = 0; a < arguments.length; a++)c.call(this, arguments[a]);
        };
        b.remove = function() {
            for(var a = 0; a < arguments.length; a++)d.call(this, arguments[a]);
        };
    }
})(DOMTokenList.prototype);

},{}]},["9xrlE"], null, "parcelRequire94c2")

//# sourceMappingURL=dom.efa663bd.js.map
