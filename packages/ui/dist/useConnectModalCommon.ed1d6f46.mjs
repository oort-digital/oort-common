import "ethers";
import { Button as hs, Row as Cn, Col as Nr } from "antd";
import { useState as ps } from "react";
import { j as se, g as ds, t as ys, a as ot, I as Ho, F as Bt, b as gs, i as bs } from "./index.c77be874.mjs";
var Hr = ((e) => (e.Undefined = "", e.Injected = "Injected", e.WalletConnect = "WalletConnect", e))(Hr || {}), it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ln(e) {
  var t = e.default;
  if (typeof t == "function") {
    var n = function() {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(u) {
    var c = Object.getOwnPropertyDescriptor(e, u);
    Object.defineProperty(n, u, c.get ? c : { enumerable: !0, get: function() {
      return e[u];
    } });
  }), n;
}
function vs(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return '"[Circular]"';
  }
}
var ms = ws;
function ws(e, t, n) {
  var u = n && n.stringify || vs, c = 1;
  if (typeof e == "object" && e !== null) {
    var b = t.length + c;
    if (b === 1)
      return e;
    var E = new Array(b);
    E[0] = u(e);
    for (var a = 1; a < b; a++)
      E[a] = u(t[a]);
    return E.join(" ");
  }
  if (typeof e != "string")
    return e;
  var _ = t.length;
  if (_ === 0)
    return e;
  for (var m = "", v = 1 - c, C = -1, B = e && e.length || 0, A = 0; A < B; ) {
    if (e.charCodeAt(A) === 37 && A + 1 < B) {
      switch (C = C > -1 ? C : 0, e.charCodeAt(A + 1)) {
        case 100:
        case 102:
          if (v >= _ || t[v] == null)
            break;
          C < A && (m += e.slice(C, A)), m += Number(t[v]), C = A + 2, A++;
          break;
        case 105:
          if (v >= _ || t[v] == null)
            break;
          C < A && (m += e.slice(C, A)), m += Math.floor(Number(t[v])), C = A + 2, A++;
          break;
        case 79:
        case 111:
        case 106:
          if (v >= _ || t[v] === void 0)
            break;
          C < A && (m += e.slice(C, A));
          var O = typeof t[v];
          if (O === "string") {
            m += "'" + t[v] + "'", C = A + 2, A++;
            break;
          }
          if (O === "function") {
            m += t[v].name || "<anonymous>", C = A + 2, A++;
            break;
          }
          m += u(t[v]), C = A + 2, A++;
          break;
        case 115:
          if (v >= _)
            break;
          C < A && (m += e.slice(C, A)), m += String(t[v]), C = A + 2, A++;
          break;
        case 37:
          C < A && (m += e.slice(C, A)), m += "%", C = A + 2, A++, v--;
          break;
      }
      ++v;
    }
    ++A;
  }
  return C === -1 ? e : (C < B && (m += e.slice(C)), m);
}
const Un = ms;
var Es = gt;
const nr = Is().console || {}, Fs = { mapHttpRequest: br, mapHttpResponse: br, wrapRequestSerializer: Br, wrapResponseSerializer: Br, wrapErrorSerializer: Br, req: br, res: br, err: js };
function Ls(e, t) {
  return Array.isArray(e) ? e.filter(function(n) {
    return n !== "!stdSerializers.err";
  }) : e === !0 ? Object.keys(t) : !1;
}
function gt(e) {
  e = e || {}, e.browser = e.browser || {};
  const t = e.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const n = e.browser.write || nr;
  e.browser.write && (e.browser.asObject = !0);
  const u = e.serializers || {}, c = Ls(e.browser.serialize, u);
  let b = e.browser.serialize;
  Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (b = !1);
  const E = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof n == "function" && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), e.enabled === !1 && (e.level = "silent");
  const a = e.level || "info", _ = Object.create(n);
  _.log || (_.log = or), Object.defineProperty(_, "levelVal", { get: v }), Object.defineProperty(_, "level", { get: C, set: B });
  const m = { transmit: t, serialize: c, asObject: e.browser.asObject, levels: E, timestamp: Cs(e) };
  _.levels = gt.levels, _.level = a, _.setMaxListeners = _.getMaxListeners = _.emit = _.addListener = _.on = _.prependListener = _.once = _.prependOnceListener = _.removeListener = _.removeAllListeners = _.listeners = _.listenerCount = _.eventNames = _.write = _.flush = or, _.serializers = u, _._serialize = c, _._stdErrSerialize = b, _.child = A, t && (_._logEvent = zr());
  function v() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function C() {
    return this._level;
  }
  function B(O) {
    if (O !== "silent" && !this.levels.values[O])
      throw Error("unknown level " + O);
    this._level = O, Mt(m, _, "error", "log"), Mt(m, _, "fatal", "error"), Mt(m, _, "warn", "error"), Mt(m, _, "info", "log"), Mt(m, _, "debug", "log"), Mt(m, _, "trace", "log");
  }
  function A(O, I) {
    if (!O)
      throw new Error("missing bindings for child Pino");
    I = I || {}, c && O.serializers && (I.serializers = O.serializers);
    const $ = I.serializers;
    if (c && $) {
      var W = Object.assign({}, u, $), f = e.browser.serialize === !0 ? Object.keys(W) : c;
      delete O.serializers, jr([O], f, W, this._stdErrSerialize);
    }
    function y(h) {
      this._childLevel = (h._childLevel | 0) + 1, this.error = xt(h, O, "error"), this.fatal = xt(h, O, "fatal"), this.warn = xt(h, O, "warn"), this.info = xt(h, O, "info"), this.debug = xt(h, O, "debug"), this.trace = xt(h, O, "trace"), W && (this.serializers = W, this._serialize = f), t && (this._logEvent = zr([].concat(h._logEvent.bindings, O)));
    }
    return y.prototype = this, new y(this);
  }
  return _;
}
gt.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }, gt.stdSerializers = Fs, gt.stdTimeFunctions = Object.assign({}, { nullTime: zo, epochTime: $o, unixTime: Us, isoTime: Ts });
function Mt(e, t, n, u) {
  const c = Object.getPrototypeOf(t);
  t[n] = t.levelVal > t.levels.values[n] ? or : c[n] ? c[n] : nr[n] || nr[u] || or, Ss(e, t, n);
}
function Ss(e, t, n) {
  !e.transmit && t[n] === or || (t[n] = function(u) {
    return function() {
      const c = e.timestamp(), b = new Array(arguments.length), E = Object.getPrototypeOf && Object.getPrototypeOf(this) === nr ? nr : this;
      for (var a = 0; a < b.length; a++)
        b[a] = arguments[a];
      if (e.serialize && !e.asObject && jr(b, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? u.call(E, Os(this, n, b, c)) : u.apply(E, b), e.transmit) {
        const _ = e.transmit.level || t.level, m = gt.levels.values[_], v = gt.levels.values[n];
        if (v < m)
          return;
        As(this, { ts: c, methodLevel: n, methodValue: v, transmitLevel: _, transmitValue: gt.levels.values[e.transmit.level || t.level], send: e.transmit.send, val: t.levelVal }, b);
      }
    };
  }(t[n]));
}
function Os(e, t, n, u) {
  e._serialize && jr(n, e._serialize, e.serializers, e._stdErrSerialize);
  const c = n.slice();
  let b = c[0];
  const E = {};
  u && (E.time = u), E.level = gt.levels.values[t];
  let a = (e._childLevel | 0) + 1;
  if (a < 1 && (a = 1), b !== null && typeof b == "object") {
    for (; a-- && typeof c[0] == "object"; )
      Object.assign(E, c.shift());
    b = c.length ? Un(c.shift(), c) : void 0;
  } else
    typeof b == "string" && (b = Un(c.shift(), c));
  return b !== void 0 && (E.msg = b), E;
}
function jr(e, t, n, u) {
  for (const c in e)
    if (u && e[c] instanceof Error)
      e[c] = gt.stdSerializers.err(e[c]);
    else if (typeof e[c] == "object" && !Array.isArray(e[c]))
      for (const b in e[c])
        t && t.indexOf(b) > -1 && b in n && (e[c][b] = n[b](e[c][b]));
}
function xt(e, t, n) {
  return function() {
    const u = new Array(1 + arguments.length);
    u[0] = t;
    for (var c = 1; c < u.length; c++)
      u[c] = arguments[c - 1];
    return e[n].apply(this, u);
  };
}
function As(e, t, n) {
  const u = t.send, c = t.ts, b = t.methodLevel, E = t.methodValue, a = t.val, _ = e._logEvent.bindings;
  jr(n, e._serialize || Object.keys(e.serializers), e.serializers, e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize), e._logEvent.ts = c, e._logEvent.messages = n.filter(function(m) {
    return _.indexOf(m) === -1;
  }), e._logEvent.level.label = b, e._logEvent.level.value = E, u(b, e._logEvent, a), e._logEvent = zr(_);
}
function zr(e) {
  return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } };
}
function js(e) {
  const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
  for (const n in e)
    t[n] === void 0 && (t[n] = e[n]);
  return t;
}
function Cs(e) {
  return typeof e.timestamp == "function" ? e.timestamp : e.timestamp === !1 ? zo : $o;
}
function br() {
  return {};
}
function Br(e) {
  return e;
}
function or() {
}
function zo() {
  return !1;
}
function $o() {
  return Date.now();
}
function Us() {
  return Math.round(Date.now() / 1e3);
}
function Ts() {
  return new Date(Date.now()).toISOString();
}
function Is() {
  function e(t) {
    return typeof t < "u" && t;
  }
  try {
    return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", { get: function() {
      return delete Object.prototype.globalThis, this.globalThis = this;
    }, configurable: !0 }), globalThis;
  } catch {
    return e(self) || e(window) || e(this) || {};
  }
}
var $r = { exports: {} }, Yt = typeof Reflect == "object" ? Reflect : null, Tn = Yt && typeof Yt.apply == "function" ? Yt.apply : function(e, t, n) {
  return Function.prototype.apply.call(e, t, n);
}, vr;
Yt && typeof Yt.ownKeys == "function" ? vr = Yt.ownKeys : Object.getOwnPropertySymbols ? vr = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : vr = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Ns(e) {
  console && console.warn && console.warn(e);
}
var In = Number.isNaN || function(e) {
  return e !== e;
};
function Ce() {
  Ce.init.call(this);
}
$r.exports = Ce, $r.exports.once = Ms, Ce.EventEmitter = Ce, Ce.prototype._events = void 0, Ce.prototype._eventsCount = 0, Ce.prototype._maxListeners = void 0;
var Nn = 10;
function mr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ce, "defaultMaxListeners", { enumerable: !0, get: function() {
  return Nn;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || In(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  Nn = e;
} }), Ce.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, Ce.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || In(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Do(e) {
  return e._maxListeners === void 0 ? Ce.defaultMaxListeners : e._maxListeners;
}
Ce.prototype.getMaxListeners = function() {
  return Do(this);
}, Ce.prototype.emit = function(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t.push(arguments[n]);
  var u = e === "error", c = this._events;
  if (c !== void 0)
    u = u && c.error === void 0;
  else if (!u)
    return !1;
  if (u) {
    var b;
    if (t.length > 0 && (b = t[0]), b instanceof Error)
      throw b;
    var E = new Error("Unhandled error." + (b ? " (" + b.message + ")" : ""));
    throw E.context = b, E;
  }
  var a = c[e];
  if (a === void 0)
    return !1;
  if (typeof a == "function")
    Tn(a, this, t);
  else
    for (var _ = a.length, m = Yo(a, _), n = 0; n < _; ++n)
      Tn(m[n], this, t);
  return !0;
};
function Bn(e, t, n, u) {
  var c, b, E;
  if (mr(n), b = e._events, b === void 0 ? (b = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (b.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), b = e._events), E = b[t]), E === void 0)
    E = b[t] = n, ++e._eventsCount;
  else if (typeof E == "function" ? E = b[t] = u ? [n, E] : [E, n] : u ? E.unshift(n) : E.push(n), c = Do(e), c > 0 && E.length > c && !E.warned) {
    E.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + E.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = E.length, Ns(a);
  }
  return e;
}
Ce.prototype.addListener = function(e, t) {
  return Bn(this, e, t, !1);
}, Ce.prototype.on = Ce.prototype.addListener, Ce.prototype.prependListener = function(e, t) {
  return Bn(this, e, t, !0);
};
function Bs() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function kn(e, t, n) {
  var u = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, c = Bs.bind(u);
  return c.listener = n, u.wrapFn = c, c;
}
Ce.prototype.once = function(e, t) {
  return mr(t), this.on(e, kn(this, e, t)), this;
}, Ce.prototype.prependOnceListener = function(e, t) {
  return mr(t), this.prependListener(e, kn(this, e, t)), this;
}, Ce.prototype.removeListener = function(e, t) {
  var n, u, c, b, E;
  if (mr(t), u = this._events, u === void 0)
    return this;
  if (n = u[e], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete u[e], u.removeListener && this.emit("removeListener", e, n.listener || t));
  else if (typeof n != "function") {
    for (c = -1, b = n.length - 1; b >= 0; b--)
      if (n[b] === t || n[b].listener === t) {
        E = n[b].listener, c = b;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? n.shift() : ks(n, c), n.length === 1 && (u[e] = n[0]), u.removeListener !== void 0 && this.emit("removeListener", e, E || t);
  }
  return this;
}, Ce.prototype.off = Ce.prototype.removeListener, Ce.prototype.removeAllListeners = function(e) {
  var t, n, u;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var c = Object.keys(n), b;
    for (u = 0; u < c.length; ++u)
      b = c[u], b !== "removeListener" && this.removeAllListeners(b);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = n[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (u = t.length - 1; u >= 0; u--)
      this.removeListener(e, t[u]);
  return this;
};
function Pn(e, t, n) {
  var u = e._events;
  if (u === void 0)
    return [];
  var c = u[t];
  return c === void 0 ? [] : typeof c == "function" ? n ? [c.listener || c] : [c] : n ? Ps(c) : Yo(c, c.length);
}
Ce.prototype.listeners = function(e) {
  return Pn(this, e, !0);
}, Ce.prototype.rawListeners = function(e) {
  return Pn(this, e, !1);
}, Ce.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Mn.call(e, t);
}, Ce.prototype.listenerCount = Mn;
function Mn(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
Ce.prototype.eventNames = function() {
  return this._eventsCount > 0 ? vr(this._events) : [];
};
function Yo(e, t) {
  for (var n = new Array(t), u = 0; u < t; ++u)
    n[u] = e[u];
  return n;
}
function ks(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Ps(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Ms(e, t) {
  return new Promise(function(n, u) {
    function c(E) {
      e.removeListener(t, b), u(E);
    }
    function b() {
      typeof e.removeListener == "function" && e.removeListener("error", c), n([].slice.call(arguments));
    }
    Wo(e, t, b, { once: !0 }), t !== "error" && xs(e, c, { once: !0 });
  });
}
function xs(e, t, n) {
  typeof e.on == "function" && Wo(e, "error", t, n);
}
function Wo(e, t, n, u) {
  if (typeof e.on == "function")
    u.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function c(b) {
      u.once && e.removeEventListener(t, c), n(b);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Er = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Dr = function(e, t) {
  return Dr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, u) {
    n.__proto__ = u;
  } || function(n, u) {
    for (var c in u)
      u.hasOwnProperty(c) && (n[c] = u[c]);
  }, Dr(e, t);
};
function Rs(e, t) {
  Dr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Yr = function() {
  return Yr = Object.assign || function(e) {
    for (var t, n = 1, u = arguments.length; n < u; n++) {
      t = arguments[n];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Yr.apply(this, arguments);
};
function Hs(e, t) {
  var n = {};
  for (var u in e)
    Object.prototype.hasOwnProperty.call(e, u) && t.indexOf(u) < 0 && (n[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, u = Object.getOwnPropertySymbols(e); c < u.length; c++)
      t.indexOf(u[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[c]) && (n[u[c]] = e[u[c]]);
  return n;
}
function zs(e, t, n, u) {
  var c = arguments.length, b = c < 3 ? t : u === null ? u = Object.getOwnPropertyDescriptor(t, n) : u, E;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    b = Reflect.decorate(e, t, n, u);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (E = e[a]) && (b = (c < 3 ? E(b) : c > 3 ? E(t, n, b) : E(t, n)) || b);
  return c > 3 && b && Object.defineProperty(t, n, b), b;
}
function $s(e, t) {
  return function(n, u) {
    t(n, u, e);
  };
}
function Ds(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Ys(e, t, n, u) {
  function c(b) {
    return b instanceof n ? b : new n(function(E) {
      E(b);
    });
  }
  return new (n || (n = Promise))(function(b, E) {
    function a(v) {
      try {
        m(u.next(v));
      } catch (C) {
        E(C);
      }
    }
    function _(v) {
      try {
        m(u.throw(v));
      } catch (C) {
        E(C);
      }
    }
    function m(v) {
      v.done ? b(v.value) : c(v.value).then(a, _);
    }
    m((u = u.apply(e, t || [])).next());
  });
}
function Ws(e, t) {
  var n = { label: 0, sent: function() {
    if (b[0] & 1)
      throw b[1];
    return b[1];
  }, trys: [], ops: [] }, u, c, b, E;
  return E = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (E[Symbol.iterator] = function() {
    return this;
  }), E;
  function a(m) {
    return function(v) {
      return _([m, v]);
    };
  }
  function _(m) {
    if (u)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (u = 1, c && (b = m[0] & 2 ? c.return : m[0] ? c.throw || ((b = c.return) && b.call(c), 0) : c.next) && !(b = b.call(c, m[1])).done)
          return b;
        switch (c = 0, b && (m = [m[0] & 2, b.value]), m[0]) {
          case 0:
          case 1:
            b = m;
            break;
          case 4:
            return n.label++, { value: m[1], done: !1 };
          case 5:
            n.label++, c = m[1], m = [0];
            continue;
          case 7:
            m = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (b = n.trys, !(b = b.length > 0 && b[b.length - 1]) && (m[0] === 6 || m[0] === 2)) {
              n = 0;
              continue;
            }
            if (m[0] === 3 && (!b || m[1] > b[0] && m[1] < b[3])) {
              n.label = m[1];
              break;
            }
            if (m[0] === 6 && n.label < b[1]) {
              n.label = b[1], b = m;
              break;
            }
            if (b && n.label < b[2]) {
              n.label = b[2], n.ops.push(m);
              break;
            }
            b[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        m = t.call(e, n);
      } catch (v) {
        m = [6, v], c = 0;
      } finally {
        u = b = 0;
      }
    if (m[0] & 5)
      throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}
function Vs(e, t, n, u) {
  u === void 0 && (u = n), e[u] = t[n];
}
function Zs(e, t) {
  for (var n in e)
    n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function Wr(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], u = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return e && u >= e.length && (e = void 0), { value: e && e[u++], done: !e };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Vo(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var u = n.call(e), c, b = [], E;
  try {
    for (; (t === void 0 || t-- > 0) && !(c = u.next()).done; )
      b.push(c.value);
  } catch (a) {
    E = { error: a };
  } finally {
    try {
      c && !c.done && (n = u.return) && n.call(u);
    } finally {
      if (E)
        throw E.error;
    }
  }
  return b;
}
function Gs() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Vo(arguments[t]));
  return e;
}
function Ks() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var u = Array(e), c = 0, t = 0; t < n; t++)
    for (var b = arguments[t], E = 0, a = b.length; E < a; E++, c++)
      u[c] = b[E];
  return u;
}
function ir(e) {
  return this instanceof ir ? (this.v = e, this) : new ir(e);
}
function Xs(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = n.apply(e, t || []), c, b = [];
  return c = {}, E("next"), E("throw"), E("return"), c[Symbol.asyncIterator] = function() {
    return this;
  }, c;
  function E(B) {
    u[B] && (c[B] = function(A) {
      return new Promise(function(O, I) {
        b.push([B, A, O, I]) > 1 || a(B, A);
      });
    });
  }
  function a(B, A) {
    try {
      _(u[B](A));
    } catch (O) {
      C(b[0][3], O);
    }
  }
  function _(B) {
    B.value instanceof ir ? Promise.resolve(B.value.v).then(m, v) : C(b[0][2], B);
  }
  function m(B) {
    a("next", B);
  }
  function v(B) {
    a("throw", B);
  }
  function C(B, A) {
    B(A), b.shift(), b.length && a(b[0][0], b[0][1]);
  }
}
function qs(e) {
  var t, n;
  return t = {}, u("next"), u("throw", function(c) {
    throw c;
  }), u("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function u(c, b) {
    t[c] = e[c] ? function(E) {
      return (n = !n) ? { value: ir(e[c](E)), done: c === "return" } : b ? b(E) : E;
    } : b;
  }
}
function Qs(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Wr == "function" ? Wr(e) : e[Symbol.iterator](), n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function u(b) {
    n[b] = e[b] && function(E) {
      return new Promise(function(a, _) {
        E = e[b](E), c(a, _, E.done, E.value);
      });
    };
  }
  function c(b, E, a, _) {
    Promise.resolve(_).then(function(m) {
      b({ value: m, done: a });
    }, E);
  }
}
function Js(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function ea(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function ta(e) {
  return e && e.__esModule ? e : { default: e };
}
function ra(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function na(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, n), n;
}
var oa = Object.freeze({ __proto__: null, __extends: Rs, get __assign() {
  return Yr;
}, __rest: Hs, __decorate: zs, __param: $s, __metadata: Ds, __awaiter: Ys, __generator: Ws, __createBinding: Vs, __exportStar: Zs, __values: Wr, __read: Vo, __spread: Gs, __spreadArrays: Ks, __await: ir, __asyncGenerator: Xs, __asyncDelegator: qs, __asyncValues: Qs, __makeTemplateObject: Js, __importStar: ea, __importDefault: ta, __classPrivateFieldGet: ra, __classPrivateFieldSet: na }), ht = ln(oa), ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
function ia(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
ar.safeJsonParse = ia;
function sa(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, n) => typeof n > "u" ? null : n);
}
ar.safeJsonStringify = sa;
var _r = { exports: {} }, xn;
function aa() {
  return xn || (xn = 1, function() {
    let e;
    function t() {
    }
    e = t, e.prototype.getItem = function(n) {
      return this.hasOwnProperty(n) ? String(this[n]) : null;
    }, e.prototype.setItem = function(n, u) {
      this[n] = String(u);
    }, e.prototype.removeItem = function(n) {
      delete this[n];
    }, e.prototype.clear = function() {
      const n = this;
      Object.keys(n).forEach(function(u) {
        n[u] = void 0, delete n[u];
      });
    }, e.prototype.key = function(n) {
      return n = n || 0, Object.keys(this)[n];
    }, e.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof it < "u" && it.localStorage ? _r.exports = it.localStorage : typeof window < "u" && window.localStorage ? _r.exports = window.localStorage : _r.exports = new t();
  }()), _r.exports;
}
var Rn = {}, Kt = {}, Hn;
function ua() {
  if (Hn)
    return Kt;
  Hn = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.IKeyValueStorage = void 0;
  class e {
  }
  return Kt.IKeyValueStorage = e, Kt;
}
var Xt = {}, zn;
function fa() {
  if (zn)
    return Xt;
  zn = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.parseEntry = void 0;
  const e = ar;
  function t(n) {
    var u;
    return [n[0], e.safeJsonParse((u = n[1]) !== null && u !== void 0 ? u : "")];
  }
  return Xt.parseEntry = t, Xt;
}
var $n;
function la() {
  return $n || ($n = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ht;
    t.__exportStar(ua(), e), t.__exportStar(fa(), e);
  }(Rn)), Rn;
}
Object.defineProperty(Er, "__esModule", { value: !0 }), Er.KeyValueStorage = void 0;
const Dt = ht, Dn = ar, ca = Dt.__importDefault(aa()), ha = la();
class Zo {
  constructor() {
    this.localStorage = ca.default;
  }
  getKeys() {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(ha.parseEntry);
    });
  }
  getItem(t) {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      const n = this.localStorage.getItem(t);
      if (n !== null)
        return Dn.safeJsonParse(n);
    });
  }
  setItem(t, n) {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Dn.safeJsonStringify(n));
    });
  }
  removeItem(t) {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
Er.KeyValueStorage = Zo;
Er.default = Zo;
var pa = {}, qt = {}, Se = {}, Yn = {}, Qt = {}, Wn;
function da() {
  if (Wn)
    return Qt;
  Wn = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.delay = void 0;
  function e(t) {
    return new Promise((n) => {
      setTimeout(() => {
        n(!0);
      }, t);
    });
  }
  return Qt.delay = e, Qt;
}
var Ut = {}, Vn = {}, Rt = {}, Zn;
function ya() {
  return Zn || (Zn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.ONE_THOUSAND = Rt.ONE_HUNDRED = void 0, Rt.ONE_HUNDRED = 100, Rt.ONE_THOUSAND = 1e3), Rt;
}
var Gn = {}, Kn;
function ga() {
  return Kn || (Kn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(Gn)), Gn;
}
var Xn;
function Go() {
  return Xn || (Xn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ht;
    t.__exportStar(ya(), e), t.__exportStar(ga(), e);
  }(Vn)), Vn;
}
var qn;
function ba() {
  if (qn)
    return Ut;
  qn = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.fromMiliseconds = Ut.toMiliseconds = void 0;
  const e = Go();
  function t(u) {
    return u * e.ONE_THOUSAND;
  }
  Ut.toMiliseconds = t;
  function n(u) {
    return Math.floor(u / e.ONE_THOUSAND);
  }
  return Ut.fromMiliseconds = n, Ut;
}
var Qn;
function _a() {
  return Qn || (Qn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ht;
    t.__exportStar(da(), e), t.__exportStar(ba(), e);
  }(Yn)), Yn;
}
var Ht = {}, Jn;
function va() {
  if (Jn)
    return Ht;
  Jn = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.Watch = void 0;
  class e {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(n) {
      if (this.timestamps.has(n))
        throw new Error(`Watch already started for label: ${n}`);
      this.timestamps.set(n, { started: Date.now() });
    }
    stop(n) {
      const u = this.get(n);
      if (typeof u.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${n}`);
      const c = Date.now() - u.started;
      this.timestamps.set(n, { started: u.started, elapsed: c });
    }
    get(n) {
      const u = this.timestamps.get(n);
      if (typeof u > "u")
        throw new Error(`No timestamp found for label: ${n}`);
      return u;
    }
    elapsed(n) {
      const u = this.get(n);
      return u.elapsed || Date.now() - u.started;
    }
  }
  return Ht.Watch = e, Ht.default = e, Ht;
}
var eo = {}, Jt = {}, to;
function ma() {
  if (to)
    return Jt;
  to = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.IWatch = void 0;
  class e {
  }
  return Jt.IWatch = e, Jt;
}
var ro;
function wa() {
  return ro || (ro = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ht.__exportStar(ma(), e);
  }(eo)), eo;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ht;
  t.__exportStar(_a(), e), t.__exportStar(va(), e), t.__exportStar(wa(), e), t.__exportStar(Go(), e);
})(Se);
var no = {}, er = {};
class Ea {
}
var Fa = Object.freeze({ __proto__: null, IEvents: Ea }), La = ln(Fa), oo;
function Sa() {
  if (oo)
    return er;
  oo = 1, Object.defineProperty(er, "__esModule", { value: !0 }), er.IHeartBeat = void 0;
  const e = La;
  class t extends e.IEvents {
    constructor(u) {
      super();
    }
  }
  return er.IHeartBeat = t, er;
}
var io;
function Ko() {
  return io || (io = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ht.__exportStar(Sa(), e);
  }(no)), no;
}
var so = {}, Tt = {}, ao;
function Oa() {
  if (ao)
    return Tt;
  ao = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.HEARTBEAT_EVENTS = Tt.HEARTBEAT_INTERVAL = void 0;
  const e = Se;
  return Tt.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Tt.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }, Tt;
}
var uo;
function Xo() {
  return uo || (uo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ht.__exportStar(Oa(), e);
  }(so)), so;
}
var fo;
function Aa() {
  if (fo)
    return qt;
  fo = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.HeartBeat = void 0;
  const e = ht, t = $r.exports, n = Se, u = Ko(), c = Xo();
  class b extends u.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = c.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || c.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const _ = new b(a);
        return yield _.init(), _;
      });
    }
    init() {
      return e.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    on(a, _) {
      this.events.on(a, _);
    }
    once(a, _) {
      this.events.once(a, _);
    }
    off(a, _) {
      this.events.off(a, _);
    }
    removeListener(a, _) {
      this.events.removeListener(a, _);
    }
    initialize() {
      return e.__awaiter(this, void 0, void 0, function* () {
        setInterval(() => this.pulse(), n.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(c.HEARTBEAT_EVENTS.pulse);
    }
  }
  return qt.HeartBeat = b, qt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ht;
  t.__exportStar(Aa(), e), t.__exportStar(Ko(), e), t.__exportStar(Xo(), e);
})(pa);
var ja = {}, zt = {}, lo;
function qo() {
  return lo || (lo = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.PINO_CUSTOM_CONTEXT_KEY = zt.PINO_LOGGER_DEFAULTS = void 0, zt.PINO_LOGGER_DEFAULTS = { level: "info" }, zt.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), zt;
}
var nt = {}, co;
function Ca() {
  if (co)
    return nt;
  co = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.generateChildLogger = nt.formatChildLoggerContext = nt.getLoggerContext = nt.setBrowserLoggerContext = nt.getBrowserLoggerContext = nt.getDefaultLoggerOptions = void 0;
  const e = qo();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  nt.getDefaultLoggerOptions = t;
  function n(a, _ = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[_] || "";
  }
  nt.getBrowserLoggerContext = n;
  function u(a, _, m = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[m] = _, a;
  }
  nt.setBrowserLoggerContext = u;
  function c(a, _ = e.PINO_CUSTOM_CONTEXT_KEY) {
    let m = "";
    return typeof a.bindings > "u" ? m = n(a, _) : m = a.bindings().context || "", m;
  }
  nt.getLoggerContext = c;
  function b(a, _, m = e.PINO_CUSTOM_CONTEXT_KEY) {
    const v = c(a, m);
    return v.trim() ? `${v}/${_}` : _;
  }
  nt.formatChildLoggerContext = b;
  function E(a, _, m = e.PINO_CUSTOM_CONTEXT_KEY) {
    const v = b(a, _, m), C = a.child({ context: v });
    return u(C, v, m);
  }
  return nt.generateChildLogger = E, nt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = ht, n = t.__importDefault(Es);
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return n.default;
  } }), t.__exportStar(qo(), e), t.__exportStar(Ca(), e);
})(ja);
var Ua = {}, cn = {}, Fr = {}, Lr = {};
Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.BrowserRandomSource = void 0;
const ho = 65536;
class Ta {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const n = new Uint8Array(t);
    for (let u = 0; u < n.length; u += ho)
      this._crypto.getRandomValues(n.subarray(u, u + Math.min(n.length - u, ho)));
    return n;
  }
}
Lr.BrowserRandomSource = Ta;
function Ia(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Sr = {}, ut = {};
Object.defineProperty(ut, "__esModule", { value: !0 });
function Na(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
ut.wipe = Na;
var Ba = {}, ka = Object.freeze({ __proto__: null, default: Ba }), Pa = ln(ka);
Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.NodeRandomSource = void 0;
const Ma = ut;
class xa {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ia < "u") {
      const t = Pa;
      t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let n = this._crypto.randomBytes(t);
    if (n.length !== t)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const u = new Uint8Array(t);
    for (let c = 0; c < u.length; c++)
      u[c] = n[c];
    return (0, Ma.wipe)(n), u;
  }
}
Sr.NodeRandomSource = xa, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.SystemRandomSource = void 0;
const Ra = Lr, Ha = Sr;
class za {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Ra.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Ha.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(t) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(t);
  }
}
Fr.SystemRandomSource = za;
var pe = {}, Qo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, _) {
    var m = a >>> 16 & 65535, v = a & 65535, C = _ >>> 16 & 65535, B = _ & 65535;
    return v * B + (m * B + v * C << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function n(a, _) {
    return a + _ | 0;
  }
  e.add = n;
  function u(a, _) {
    return a - _ | 0;
  }
  e.sub = u;
  function c(a, _) {
    return a << _ | a >>> 32 - _;
  }
  e.rotl = c;
  function b(a, _) {
    return a << 32 - _ | a >>> _;
  }
  e.rotr = b;
  function E(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  e.isInteger = Number.isInteger || E, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(a) {
    return e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER;
  };
})(Qo), Object.defineProperty(pe, "__esModule", { value: !0 });
var Jo = Qo;
function $a(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
pe.readInt16BE = $a;
function Da(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
pe.readUint16BE = Da;
function Ya(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
pe.readInt16LE = Ya;
function Wa(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
pe.readUint16LE = Wa;
function po(e, t, n) {
  return t === void 0 && (t = new Uint8Array(2)), n === void 0 && (n = 0), t[n + 0] = e >>> 8, t[n + 1] = e >>> 0, t;
}
pe.writeUint16BE = po, pe.writeInt16BE = po;
function yo(e, t, n) {
  return t === void 0 && (t = new Uint8Array(2)), n === void 0 && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t;
}
pe.writeUint16LE = yo, pe.writeInt16LE = yo;
function Vr(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
pe.readInt32BE = Vr;
function Zr(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
pe.readUint32BE = Zr;
function Gr(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
pe.readInt32LE = Gr;
function Kr(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
pe.readUint32LE = Kr;
function Or(e, t, n) {
  return t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0), t[n + 0] = e >>> 24, t[n + 1] = e >>> 16, t[n + 2] = e >>> 8, t[n + 3] = e >>> 0, t;
}
pe.writeUint32BE = Or, pe.writeInt32BE = Or;
function Ar(e, t, n) {
  return t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t[n + 2] = e >>> 16, t[n + 3] = e >>> 24, t;
}
pe.writeUint32LE = Ar, pe.writeInt32LE = Ar;
function Va(e, t) {
  t === void 0 && (t = 0);
  var n = Vr(e, t), u = Vr(e, t + 4);
  return n * 4294967296 + u - (u >> 31) * 4294967296;
}
pe.readInt64BE = Va;
function Za(e, t) {
  t === void 0 && (t = 0);
  var n = Zr(e, t), u = Zr(e, t + 4);
  return n * 4294967296 + u;
}
pe.readUint64BE = Za;
function Ga(e, t) {
  t === void 0 && (t = 0);
  var n = Gr(e, t), u = Gr(e, t + 4);
  return u * 4294967296 + n - (n >> 31) * 4294967296;
}
pe.readInt64LE = Ga;
function Ka(e, t) {
  t === void 0 && (t = 0);
  var n = Kr(e, t), u = Kr(e, t + 4);
  return u * 4294967296 + n;
}
pe.readUint64LE = Ka;
function go(e, t, n) {
  return t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0), Or(e / 4294967296 >>> 0, t, n), Or(e >>> 0, t, n + 4), t;
}
pe.writeUint64BE = go, pe.writeInt64BE = go;
function bo(e, t, n) {
  return t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0), Ar(e >>> 0, t, n), Ar(e / 4294967296 >>> 0, t, n + 4), t;
}
pe.writeUint64LE = bo, pe.writeInt64LE = bo;
function Xa(e, t, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var u = 0, c = 1, b = e / 8 + n - 1; b >= n; b--)
    u += t[b] * c, c *= 256;
  return u;
}
pe.readUintBE = Xa;
function qa(e, t, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var u = 0, c = 1, b = n; b < n + e / 8; b++)
    u += t[b] * c, c *= 256;
  return u;
}
pe.readUintLE = qa;
function Qa(e, t, n, u) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), u === void 0 && (u = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Jo.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var c = 1, b = e / 8 + u - 1; b >= u; b--)
    n[b] = t / c & 255, c *= 256;
  return n;
}
pe.writeUintBE = Qa;
function Ja(e, t, n, u) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), u === void 0 && (u = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Jo.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var c = 1, b = u; b < u + e / 8; b++)
    n[b] = t / c & 255, c *= 256;
  return n;
}
pe.writeUintLE = Ja;
function eu(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t);
}
pe.readFloat32BE = eu;
function tu(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t, !0);
}
pe.readFloat32LE = tu;
function ru(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t);
}
pe.readFloat64BE = ru;
function nu(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t, !0);
}
pe.readFloat64LE = nu;
function ou(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat32(n, e), t;
}
pe.writeFloat32BE = ou;
function iu(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat32(n, e, !0), t;
}
pe.writeFloat32LE = iu;
function su(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat64(n, e), t;
}
pe.writeFloat64BE = su;
function au(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat64(n, e, !0), t;
}
pe.writeFloat64LE = au, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = Fr, n = pe, u = ut;
  e.defaultRandomSource = new t.SystemRandomSource();
  function c(m, v = e.defaultRandomSource) {
    return v.randomBytes(m);
  }
  e.randomBytes = c;
  function b(m = e.defaultRandomSource) {
    const v = c(4, m), C = (0, n.readUint32LE)(v);
    return (0, u.wipe)(v), C;
  }
  e.randomUint32 = b;
  const E = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(m, v = E, C = e.defaultRandomSource) {
    if (v.length < 2)
      throw new Error("randomString charset is too short");
    if (v.length > 256)
      throw new Error("randomString charset is too long");
    let B = "";
    const A = v.length, O = 256 - 256 % A;
    for (; m > 0; ) {
      const I = c(Math.ceil(m * 256 / O), C);
      for (let $ = 0; $ < I.length && m > 0; $++) {
        const W = I[$];
        W < O && (B += v.charAt(W % A), m--);
      }
      (0, u.wipe)(I);
    }
    return B;
  }
  e.randomString = a;
  function _(m, v = E, C = e.defaultRandomSource) {
    const B = Math.ceil(m / (Math.log(v.length) / Math.LN2));
    return a(B, v, C);
  }
  e.randomStringForEntropy = _;
}(cn);
var _o = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pe, n = ut;
  e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
  var u = function() {
    function a() {
      this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
    }
    return a.prototype._initState = function() {
      this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
    }, a.prototype.reset = function() {
      return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
    }, a.prototype.clean = function() {
      n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset();
    }, a.prototype.update = function(_, m) {
      if (m === void 0 && (m = _.length), this._finished)
        throw new Error("SHA512: can't update because hash was finished.");
      var v = 0;
      if (this._bytesHashed += m, this._bufferLength > 0) {
        for (; this._bufferLength < e.BLOCK_SIZE && m > 0; )
          this._buffer[this._bufferLength++] = _[v++], m--;
        this._bufferLength === this.blockSize && (b(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
      }
      for (m >= this.blockSize && (v = b(this._tempHi, this._tempLo, this._stateHi, this._stateLo, _, v, m), m %= this.blockSize); m > 0; )
        this._buffer[this._bufferLength++] = _[v++], m--;
      return this;
    }, a.prototype.finish = function(_) {
      if (!this._finished) {
        var m = this._bytesHashed, v = this._bufferLength, C = m / 536870912 | 0, B = m << 3, A = m % 128 < 112 ? 128 : 256;
        this._buffer[v] = 128;
        for (var O = v + 1; O < A - 8; O++)
          this._buffer[O] = 0;
        t.writeUint32BE(C, this._buffer, A - 8), t.writeUint32BE(B, this._buffer, A - 4), b(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, A), this._finished = !0;
      }
      for (var O = 0; O < this.digestLength / 8; O++)
        t.writeUint32BE(this._stateHi[O], _, O * 8), t.writeUint32BE(this._stateLo[O], _, O * 8 + 4);
      return this;
    }, a.prototype.digest = function() {
      var _ = new Uint8Array(this.digestLength);
      return this.finish(_), _;
    }, a.prototype.saveState = function() {
      if (this._finished)
        throw new Error("SHA256: cannot save finished state");
      return { stateHi: new Int32Array(this._stateHi), stateLo: new Int32Array(this._stateLo), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
    }, a.prototype.restoreState = function(_) {
      return this._stateHi.set(_.stateHi), this._stateLo.set(_.stateLo), this._bufferLength = _.bufferLength, _.buffer && this._buffer.set(_.buffer), this._bytesHashed = _.bytesHashed, this._finished = !1, this;
    }, a.prototype.cleanSavedState = function(_) {
      n.wipe(_.stateHi), n.wipe(_.stateLo), _.buffer && n.wipe(_.buffer), _.bufferLength = 0, _.bytesHashed = 0;
    }, a;
  }();
  e.SHA512 = u;
  var c = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
  function b(a, _, m, v, C, B, A) {
    for (var O = m[0], I = m[1], $ = m[2], W = m[3], f = m[4], y = m[5], h = m[6], d = m[7], g = v[0], o = v[1], p = v[2], k = v[3], R = v[4], X = v[5], ee = v[6], ne = v[7], w, S, D, Z, z, H, K, V; A >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var q = 8 * oe + B;
        a[oe] = t.readUint32BE(C, q), _[oe] = t.readUint32BE(C, q + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ue = O, te = I, de = $, M = W, P = f, T = y, i = h, j = d, Q = g, J = o, ce = p, Fe = k, ve = R, Le = X, Ne = ee, Te = ne;
        if (w = d, S = ne, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = (f >>> 14 | R << 32 - 14) ^ (f >>> 18 | R << 32 - 18) ^ (R >>> 41 - 32 | f << 32 - (41 - 32)), S = (R >>> 14 | f << 32 - 14) ^ (R >>> 18 | f << 32 - 18) ^ (f >>> 41 - 32 | R << 32 - (41 - 32)), z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, w = f & y ^ ~f & h, S = R & X ^ ~R & ee, z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, w = c[oe * 2], S = c[oe * 2 + 1], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, w = a[oe % 16], S = _[oe % 16], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, D = K & 65535 | V << 16, Z = z & 65535 | H << 16, w = D, S = Z, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = (O >>> 28 | g << 32 - 28) ^ (g >>> 34 - 32 | O << 32 - (34 - 32)) ^ (g >>> 39 - 32 | O << 32 - (39 - 32)), S = (g >>> 28 | O << 32 - 28) ^ (O >>> 34 - 32 | g << 32 - (34 - 32)) ^ (O >>> 39 - 32 | g << 32 - (39 - 32)), z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, w = O & I ^ O & $ ^ I & $, S = g & o ^ g & p ^ o & p, z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, j = K & 65535 | V << 16, Te = z & 65535 | H << 16, w = M, S = Fe, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = D, S = Z, z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, M = K & 65535 | V << 16, Fe = z & 65535 | H << 16, I = ue, $ = te, W = de, f = M, y = P, h = T, d = i, O = j, o = Q, p = J, k = ce, R = Fe, X = ve, ee = Le, ne = Ne, g = Te, oe % 16 === 15)
          for (var q = 0; q < 16; q++)
            w = a[q], S = _[q], z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = a[(q + 9) % 16], S = _[(q + 9) % 16], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, D = a[(q + 1) % 16], Z = _[(q + 1) % 16], w = (D >>> 1 | Z << 32 - 1) ^ (D >>> 8 | Z << 32 - 8) ^ D >>> 7, S = (Z >>> 1 | D << 32 - 1) ^ (Z >>> 8 | D << 32 - 8) ^ (Z >>> 7 | D << 32 - 7), z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, D = a[(q + 14) % 16], Z = _[(q + 14) % 16], w = (D >>> 19 | Z << 32 - 19) ^ (Z >>> 61 - 32 | D << 32 - (61 - 32)) ^ D >>> 6, S = (Z >>> 19 | D << 32 - 19) ^ (D >>> 61 - 32 | Z << 32 - (61 - 32)) ^ (Z >>> 6 | D << 32 - 6), z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, a[q] = K & 65535 | V << 16, _[q] = z & 65535 | H << 16;
      }
      w = O, S = g, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[0], S = v[0], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[0] = O = K & 65535 | V << 16, v[0] = g = z & 65535 | H << 16, w = I, S = o, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[1], S = v[1], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[1] = I = K & 65535 | V << 16, v[1] = o = z & 65535 | H << 16, w = $, S = p, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[2], S = v[2], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[2] = $ = K & 65535 | V << 16, v[2] = p = z & 65535 | H << 16, w = W, S = k, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[3], S = v[3], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[3] = W = K & 65535 | V << 16, v[3] = k = z & 65535 | H << 16, w = f, S = R, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[4], S = v[4], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[4] = f = K & 65535 | V << 16, v[4] = R = z & 65535 | H << 16, w = y, S = X, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[5], S = v[5], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[5] = y = K & 65535 | V << 16, v[5] = X = z & 65535 | H << 16, w = h, S = ee, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[6], S = v[6], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[6] = h = K & 65535 | V << 16, v[6] = ee = z & 65535 | H << 16, w = d, S = ne, z = S & 65535, H = S >>> 16, K = w & 65535, V = w >>> 16, w = m[7], S = v[7], z += S & 65535, H += S >>> 16, K += w & 65535, V += w >>> 16, H += z >>> 16, K += H >>> 16, V += K >>> 16, m[7] = d = K & 65535 | V << 16, v[7] = ne = z & 65535 | H << 16, B += 128, A -= 128;
    }
    return B;
  }
  function E(a) {
    var _ = new u();
    _.update(a);
    var m = _.digest();
    return _.clean(), m;
  }
  e.hash = E;
})(_o), function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = cn, n = _o, u = ut;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function c(M) {
    const P = new Float64Array(16);
    if (M)
      for (let T = 0; T < M.length; T++)
        P[T] = M[T];
    return P;
  }
  const b = new Uint8Array(32);
  b[0] = 9;
  const E = c(), a = c([1]), _ = c([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), m = c([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), v = c([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), C = c([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), B = c([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
  function A(M, P) {
    for (let T = 0; T < 16; T++)
      M[T] = P[T] | 0;
  }
  function O(M) {
    let P = 1;
    for (let T = 0; T < 16; T++) {
      let i = M[T] + P + 65535;
      P = Math.floor(i / 65536), M[T] = i - P * 65536;
    }
    M[0] += P - 1 + 37 * (P - 1);
  }
  function I(M, P, T) {
    const i = ~(T - 1);
    for (let j = 0; j < 16; j++) {
      const Q = i & (M[j] ^ P[j]);
      M[j] ^= Q, P[j] ^= Q;
    }
  }
  function $(M, P) {
    const T = c(), i = c();
    for (let j = 0; j < 16; j++)
      i[j] = P[j];
    O(i), O(i), O(i);
    for (let j = 0; j < 2; j++) {
      T[0] = i[0] - 65517;
      for (let J = 1; J < 15; J++)
        T[J] = i[J] - 65535 - (T[J - 1] >> 16 & 1), T[J - 1] &= 65535;
      T[15] = i[15] - 32767 - (T[14] >> 16 & 1);
      const Q = T[15] >> 16 & 1;
      T[14] &= 65535, I(i, T, 1 - Q);
    }
    for (let j = 0; j < 16; j++)
      M[2 * j] = i[j] & 255, M[2 * j + 1] = i[j] >> 8;
  }
  function W(M, P) {
    let T = 0;
    for (let i = 0; i < 32; i++)
      T |= M[i] ^ P[i];
    return (1 & T - 1 >>> 8) - 1;
  }
  function f(M, P) {
    const T = new Uint8Array(32), i = new Uint8Array(32);
    return $(T, M), $(i, P), W(T, i);
  }
  function y(M) {
    const P = new Uint8Array(32);
    return $(P, M), P[0] & 1;
  }
  function h(M, P) {
    for (let T = 0; T < 16; T++)
      M[T] = P[2 * T] + (P[2 * T + 1] << 8);
    M[15] &= 32767;
  }
  function d(M, P, T) {
    for (let i = 0; i < 16; i++)
      M[i] = P[i] + T[i];
  }
  function g(M, P, T) {
    for (let i = 0; i < 16; i++)
      M[i] = P[i] - T[i];
  }
  function o(M, P, T) {
    let i, j, Q = 0, J = 0, ce = 0, Fe = 0, ve = 0, Le = 0, Ne = 0, Te = 0, me = 0, ge = 0, le = 0, ye = 0, be = 0, fe = 0, he = 0, r = 0, s = 0, l = 0, L = 0, U = 0, x = 0, Y = 0, ie = 0, ae = 0, Ee = 0, we = 0, Oe = 0, st = 0, Ot = 0, Vt = 0, lr = 0, xe = T[0], ke = T[1], Re = T[2], He = T[3], ze = T[4], Pe = T[5], Ye = T[6], We = T[7], Ve = T[8], Ze = T[9], Ge = T[10], De = T[11], $e = T[12], Ie = T[13], Ke = T[14], Xe = T[15];
    i = P[0], Q += i * xe, J += i * ke, ce += i * Re, Fe += i * He, ve += i * ze, Le += i * Pe, Ne += i * Ye, Te += i * We, me += i * Ve, ge += i * Ze, le += i * Ge, ye += i * De, be += i * $e, fe += i * Ie, he += i * Ke, r += i * Xe, i = P[1], J += i * xe, ce += i * ke, Fe += i * Re, ve += i * He, Le += i * ze, Ne += i * Pe, Te += i * Ye, me += i * We, ge += i * Ve, le += i * Ze, ye += i * Ge, be += i * De, fe += i * $e, he += i * Ie, r += i * Ke, s += i * Xe, i = P[2], ce += i * xe, Fe += i * ke, ve += i * Re, Le += i * He, Ne += i * ze, Te += i * Pe, me += i * Ye, ge += i * We, le += i * Ve, ye += i * Ze, be += i * Ge, fe += i * De, he += i * $e, r += i * Ie, s += i * Ke, l += i * Xe, i = P[3], Fe += i * xe, ve += i * ke, Le += i * Re, Ne += i * He, Te += i * ze, me += i * Pe, ge += i * Ye, le += i * We, ye += i * Ve, be += i * Ze, fe += i * Ge, he += i * De, r += i * $e, s += i * Ie, l += i * Ke, L += i * Xe, i = P[4], ve += i * xe, Le += i * ke, Ne += i * Re, Te += i * He, me += i * ze, ge += i * Pe, le += i * Ye, ye += i * We, be += i * Ve, fe += i * Ze, he += i * Ge, r += i * De, s += i * $e, l += i * Ie, L += i * Ke, U += i * Xe, i = P[5], Le += i * xe, Ne += i * ke, Te += i * Re, me += i * He, ge += i * ze, le += i * Pe, ye += i * Ye, be += i * We, fe += i * Ve, he += i * Ze, r += i * Ge, s += i * De, l += i * $e, L += i * Ie, U += i * Ke, x += i * Xe, i = P[6], Ne += i * xe, Te += i * ke, me += i * Re, ge += i * He, le += i * ze, ye += i * Pe, be += i * Ye, fe += i * We, he += i * Ve, r += i * Ze, s += i * Ge, l += i * De, L += i * $e, U += i * Ie, x += i * Ke, Y += i * Xe, i = P[7], Te += i * xe, me += i * ke, ge += i * Re, le += i * He, ye += i * ze, be += i * Pe, fe += i * Ye, he += i * We, r += i * Ve, s += i * Ze, l += i * Ge, L += i * De, U += i * $e, x += i * Ie, Y += i * Ke, ie += i * Xe, i = P[8], me += i * xe, ge += i * ke, le += i * Re, ye += i * He, be += i * ze, fe += i * Pe, he += i * Ye, r += i * We, s += i * Ve, l += i * Ze, L += i * Ge, U += i * De, x += i * $e, Y += i * Ie, ie += i * Ke, ae += i * Xe, i = P[9], ge += i * xe, le += i * ke, ye += i * Re, be += i * He, fe += i * ze, he += i * Pe, r += i * Ye, s += i * We, l += i * Ve, L += i * Ze, U += i * Ge, x += i * De, Y += i * $e, ie += i * Ie, ae += i * Ke, Ee += i * Xe, i = P[10], le += i * xe, ye += i * ke, be += i * Re, fe += i * He, he += i * ze, r += i * Pe, s += i * Ye, l += i * We, L += i * Ve, U += i * Ze, x += i * Ge, Y += i * De, ie += i * $e, ae += i * Ie, Ee += i * Ke, we += i * Xe, i = P[11], ye += i * xe, be += i * ke, fe += i * Re, he += i * He, r += i * ze, s += i * Pe, l += i * Ye, L += i * We, U += i * Ve, x += i * Ze, Y += i * Ge, ie += i * De, ae += i * $e, Ee += i * Ie, we += i * Ke, Oe += i * Xe, i = P[12], be += i * xe, fe += i * ke, he += i * Re, r += i * He, s += i * ze, l += i * Pe, L += i * Ye, U += i * We, x += i * Ve, Y += i * Ze, ie += i * Ge, ae += i * De, Ee += i * $e, we += i * Ie, Oe += i * Ke, st += i * Xe, i = P[13], fe += i * xe, he += i * ke, r += i * Re, s += i * He, l += i * ze, L += i * Pe, U += i * Ye, x += i * We, Y += i * Ve, ie += i * Ze, ae += i * Ge, Ee += i * De, we += i * $e, Oe += i * Ie, st += i * Ke, Ot += i * Xe, i = P[14], he += i * xe, r += i * ke, s += i * Re, l += i * He, L += i * ze, U += i * Pe, x += i * Ye, Y += i * We, ie += i * Ve, ae += i * Ze, Ee += i * Ge, we += i * De, Oe += i * $e, st += i * Ie, Ot += i * Ke, Vt += i * Xe, i = P[15], r += i * xe, s += i * ke, l += i * Re, L += i * He, U += i * ze, x += i * Pe, Y += i * Ye, ie += i * We, ae += i * Ve, Ee += i * Ze, we += i * Ge, Oe += i * De, st += i * $e, Ot += i * Ie, Vt += i * Ke, lr += i * Xe, Q += 38 * s, J += 38 * l, ce += 38 * L, Fe += 38 * U, ve += 38 * x, Le += 38 * Y, Ne += 38 * ie, Te += 38 * ae, me += 38 * Ee, ge += 38 * we, le += 38 * Oe, ye += 38 * st, be += 38 * Ot, fe += 38 * Vt, he += 38 * lr, j = 1, i = Q + j + 65535, j = Math.floor(i / 65536), Q = i - j * 65536, i = J + j + 65535, j = Math.floor(i / 65536), J = i - j * 65536, i = ce + j + 65535, j = Math.floor(i / 65536), ce = i - j * 65536, i = Fe + j + 65535, j = Math.floor(i / 65536), Fe = i - j * 65536, i = ve + j + 65535, j = Math.floor(i / 65536), ve = i - j * 65536, i = Le + j + 65535, j = Math.floor(i / 65536), Le = i - j * 65536, i = Ne + j + 65535, j = Math.floor(i / 65536), Ne = i - j * 65536, i = Te + j + 65535, j = Math.floor(i / 65536), Te = i - j * 65536, i = me + j + 65535, j = Math.floor(i / 65536), me = i - j * 65536, i = ge + j + 65535, j = Math.floor(i / 65536), ge = i - j * 65536, i = le + j + 65535, j = Math.floor(i / 65536), le = i - j * 65536, i = ye + j + 65535, j = Math.floor(i / 65536), ye = i - j * 65536, i = be + j + 65535, j = Math.floor(i / 65536), be = i - j * 65536, i = fe + j + 65535, j = Math.floor(i / 65536), fe = i - j * 65536, i = he + j + 65535, j = Math.floor(i / 65536), he = i - j * 65536, i = r + j + 65535, j = Math.floor(i / 65536), r = i - j * 65536, Q += j - 1 + 37 * (j - 1), j = 1, i = Q + j + 65535, j = Math.floor(i / 65536), Q = i - j * 65536, i = J + j + 65535, j = Math.floor(i / 65536), J = i - j * 65536, i = ce + j + 65535, j = Math.floor(i / 65536), ce = i - j * 65536, i = Fe + j + 65535, j = Math.floor(i / 65536), Fe = i - j * 65536, i = ve + j + 65535, j = Math.floor(i / 65536), ve = i - j * 65536, i = Le + j + 65535, j = Math.floor(i / 65536), Le = i - j * 65536, i = Ne + j + 65535, j = Math.floor(i / 65536), Ne = i - j * 65536, i = Te + j + 65535, j = Math.floor(i / 65536), Te = i - j * 65536, i = me + j + 65535, j = Math.floor(i / 65536), me = i - j * 65536, i = ge + j + 65535, j = Math.floor(i / 65536), ge = i - j * 65536, i = le + j + 65535, j = Math.floor(i / 65536), le = i - j * 65536, i = ye + j + 65535, j = Math.floor(i / 65536), ye = i - j * 65536, i = be + j + 65535, j = Math.floor(i / 65536), be = i - j * 65536, i = fe + j + 65535, j = Math.floor(i / 65536), fe = i - j * 65536, i = he + j + 65535, j = Math.floor(i / 65536), he = i - j * 65536, i = r + j + 65535, j = Math.floor(i / 65536), r = i - j * 65536, Q += j - 1 + 37 * (j - 1), M[0] = Q, M[1] = J, M[2] = ce, M[3] = Fe, M[4] = ve, M[5] = Le, M[6] = Ne, M[7] = Te, M[8] = me, M[9] = ge, M[10] = le, M[11] = ye, M[12] = be, M[13] = fe, M[14] = he, M[15] = r;
  }
  function p(M, P) {
    o(M, P, P);
  }
  function k(M, P) {
    const T = c();
    let i;
    for (i = 0; i < 16; i++)
      T[i] = P[i];
    for (i = 253; i >= 0; i--)
      p(T, T), i !== 2 && i !== 4 && o(T, T, P);
    for (i = 0; i < 16; i++)
      M[i] = T[i];
  }
  function R(M, P) {
    const T = c();
    let i;
    for (i = 0; i < 16; i++)
      T[i] = P[i];
    for (i = 250; i >= 0; i--)
      p(T, T), i !== 1 && o(T, T, P);
    for (i = 0; i < 16; i++)
      M[i] = T[i];
  }
  function X(M, P) {
    const T = c(), i = c(), j = c(), Q = c(), J = c(), ce = c(), Fe = c(), ve = c(), Le = c();
    g(T, M[1], M[0]), g(Le, P[1], P[0]), o(T, T, Le), d(i, M[0], M[1]), d(Le, P[0], P[1]), o(i, i, Le), o(j, M[3], P[3]), o(j, j, m), o(Q, M[2], P[2]), d(Q, Q, Q), g(J, i, T), g(ce, Q, j), d(Fe, Q, j), d(ve, i, T), o(M[0], J, ce), o(M[1], ve, Fe), o(M[2], Fe, ce), o(M[3], J, ve);
  }
  function ee(M, P, T) {
    for (let i = 0; i < 4; i++)
      I(M[i], P[i], T);
  }
  function ne(M, P) {
    const T = c(), i = c(), j = c();
    k(j, P[2]), o(T, P[0], j), o(i, P[1], j), $(M, i), M[31] ^= y(T) << 7;
  }
  function w(M, P, T) {
    A(M[0], E), A(M[1], a), A(M[2], a), A(M[3], E);
    for (let i = 255; i >= 0; --i) {
      const j = T[i / 8 | 0] >> (i & 7) & 1;
      ee(M, P, j), X(P, M), X(M, M), ee(M, P, j);
    }
  }
  function S(M, P) {
    const T = [c(), c(), c(), c()];
    A(T[0], v), A(T[1], C), A(T[2], a), o(T[3], v, C), w(M, T, P);
  }
  function D(M) {
    if (M.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const P = (0, n.hash)(M);
    P[0] &= 248, P[31] &= 127, P[31] |= 64;
    const T = new Uint8Array(32), i = [c(), c(), c(), c()];
    S(i, P), ne(T, i);
    const j = new Uint8Array(64);
    return j.set(M), j.set(T, 32), { publicKey: T, secretKey: j };
  }
  e.generateKeyPairFromSeed = D;
  function Z(M) {
    const P = (0, t.randomBytes)(32, M), T = D(P);
    return (0, u.wipe)(P), T;
  }
  e.generateKeyPair = Z;
  function z(M) {
    if (M.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(M.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = z;
  const H = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
  function K(M, P) {
    let T, i, j, Q;
    for (i = 63; i >= 32; --i) {
      for (T = 0, j = i - 32, Q = i - 12; j < Q; ++j)
        P[j] += T - 16 * P[i] * H[j - (i - 32)], T = Math.floor((P[j] + 128) / 256), P[j] -= T * 256;
      P[j] += T, P[i] = 0;
    }
    for (T = 0, j = 0; j < 32; j++)
      P[j] += T - (P[31] >> 4) * H[j], T = P[j] >> 8, P[j] &= 255;
    for (j = 0; j < 32; j++)
      P[j] -= T * H[j];
    for (i = 0; i < 32; i++)
      P[i + 1] += P[i] >> 8, M[i] = P[i] & 255;
  }
  function V(M) {
    const P = new Float64Array(64);
    for (let T = 0; T < 64; T++)
      P[T] = M[T];
    for (let T = 0; T < 64; T++)
      M[T] = 0;
    K(M, P);
  }
  function oe(M, P) {
    const T = new Float64Array(64), i = [c(), c(), c(), c()], j = (0, n.hash)(M.subarray(0, 32));
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const Q = new Uint8Array(64);
    Q.set(j.subarray(32), 32);
    const J = new n.SHA512();
    J.update(Q.subarray(32)), J.update(P);
    const ce = J.digest();
    J.clean(), V(ce), S(i, ce), ne(Q, i), J.reset(), J.update(Q.subarray(0, 32)), J.update(M.subarray(32)), J.update(P);
    const Fe = J.digest();
    V(Fe);
    for (let ve = 0; ve < 32; ve++)
      T[ve] = ce[ve];
    for (let ve = 0; ve < 32; ve++)
      for (let Le = 0; Le < 32; Le++)
        T[ve + Le] += Fe[ve] * j[Le];
    return K(Q.subarray(32), T), Q;
  }
  e.sign = oe;
  function q(M, P) {
    const T = c(), i = c(), j = c(), Q = c(), J = c(), ce = c(), Fe = c();
    return A(M[2], a), h(M[1], P), p(j, M[1]), o(Q, j, _), g(j, j, M[2]), d(Q, M[2], Q), p(J, Q), p(ce, J), o(Fe, ce, J), o(T, Fe, j), o(T, T, Q), R(T, T), o(T, T, j), o(T, T, Q), o(T, T, Q), o(M[0], T, Q), p(i, M[0]), o(i, i, Q), f(i, j) && o(M[0], M[0], B), p(i, M[0]), o(i, i, Q), f(i, j) ? -1 : (y(M[0]) === P[31] >> 7 && g(M[0], E, M[0]), o(M[3], M[0], M[1]), 0);
  }
  function ue(M, P, T) {
    const i = new Uint8Array(32), j = [c(), c(), c(), c()], Q = [c(), c(), c(), c()];
    if (T.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (q(Q, M))
      return !1;
    const J = new n.SHA512();
    J.update(T.subarray(0, 32)), J.update(M), J.update(P);
    const ce = J.digest();
    return V(ce), w(j, Q, ce), S(Q, T.subarray(32)), X(j, Q), ne(i, j), !W(T, i);
  }
  e.verify = ue;
  function te(M) {
    let P = [c(), c(), c(), c()];
    if (q(P, M))
      throw new Error("Ed25519: invalid public key");
    let T = c(), i = c(), j = P[1];
    d(T, a, j), g(i, a, j), k(i, i), o(T, T, i);
    let Q = new Uint8Array(32);
    return $(Q, T), Q;
  }
  e.convertPublicKeyToX25519 = te;
  function de(M) {
    const P = (0, n.hash)(M.subarray(0, 32));
    P[0] &= 248, P[31] &= 127, P[31] |= 64;
    const T = new Uint8Array(P.subarray(0, 32));
    return (0, u.wipe)(P), T;
  }
  e.convertSecretKeyToX25519 = de;
}(Ua);
function uu(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var n = new Uint8Array(256), u = 0; u < n.length; u++)
    n[u] = 255;
  for (var c = 0; c < e.length; c++) {
    var b = e.charAt(c), E = b.charCodeAt(0);
    if (n[E] !== 255)
      throw new TypeError(b + " is ambiguous");
    n[E] = c;
  }
  var a = e.length, _ = e.charAt(0), m = Math.log(a) / Math.log(256), v = Math.log(256) / Math.log(a);
  function C(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var I = 0, $ = 0, W = 0, f = O.length; W !== f && O[W] === 0; )
      W++, I++;
    for (var y = (f - W) * v + 1 >>> 0, h = new Uint8Array(y); W !== f; ) {
      for (var d = O[W], g = 0, o = y - 1; (d !== 0 || g < $) && o !== -1; o--, g++)
        d += 256 * h[o] >>> 0, h[o] = d % a >>> 0, d = d / a >>> 0;
      if (d !== 0)
        throw new Error("Non-zero carry");
      $ = g, W++;
    }
    for (var p = y - $; p !== y && h[p] === 0; )
      p++;
    for (var k = _.repeat(I); p < y; ++p)
      k += e.charAt(h[p]);
    return k;
  }
  function B(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var I = 0;
    if (O[I] !== " ") {
      for (var $ = 0, W = 0; O[I] === _; )
        $++, I++;
      for (var f = (O.length - I) * m + 1 >>> 0, y = new Uint8Array(f); O[I]; ) {
        var h = n[O.charCodeAt(I)];
        if (h === 255)
          return;
        for (var d = 0, g = f - 1; (h !== 0 || d < W) && g !== -1; g--, d++)
          h += a * y[g] >>> 0, y[g] = h % 256 >>> 0, h = h / 256 >>> 0;
        if (h !== 0)
          throw new Error("Non-zero carry");
        W = d, I++;
      }
      if (O[I] !== " ") {
        for (var o = f - W; o !== f && y[o] === 0; )
          o++;
        for (var p = new Uint8Array($ + (f - o)), k = $; o !== f; )
          p[k++] = y[o++];
        return p;
      }
    }
  }
  function A(O) {
    var I = B(O);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return { encode: C, decodeUnsafe: B, decode: A };
}
var fu = uu, lu = fu;
const ei = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, cu = (e) => new TextEncoder().encode(e), hu = (e) => new TextDecoder().decode(e);
class pu {
  constructor(t, n, u) {
    this.name = t, this.prefix = n, this.baseEncode = u;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class du {
  constructor(t, n, u) {
    if (this.name = t, this.prefix = n, n.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = n.codePointAt(0), this.baseDecode = u;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return ti(this, t);
  }
}
class yu {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return ti(this, t);
  }
  decode(t) {
    const n = t[0], u = this.decoders[n];
    if (u)
      return u.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ti = (e, t) => new yu({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class gu {
  constructor(t, n, u, c) {
    this.name = t, this.prefix = n, this.baseEncode = u, this.baseDecode = c, this.encoder = new pu(t, n, u), this.decoder = new du(t, n, c);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Cr = ({ name: e, prefix: t, encode: n, decode: u }) => new gu(e, t, n, u), ur = ({ prefix: e, name: t, alphabet: n }) => {
  const { encode: u, decode: c } = lu(n, t);
  return Cr({ prefix: e, name: t, encode: u, decode: (b) => ei(c(b)) });
}, bu = (e, t, n, u) => {
  const c = {};
  for (let v = 0; v < t.length; ++v)
    c[t[v]] = v;
  let b = e.length;
  for (; e[b - 1] === "="; )
    --b;
  const E = new Uint8Array(b * n / 8 | 0);
  let a = 0, _ = 0, m = 0;
  for (let v = 0; v < b; ++v) {
    const C = c[e[v]];
    if (C === void 0)
      throw new SyntaxError(`Non-${u} character`);
    _ = _ << n | C, a += n, a >= 8 && (a -= 8, E[m++] = 255 & _ >> a);
  }
  if (a >= n || 255 & _ << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return E;
}, _u = (e, t, n) => {
  const u = t[t.length - 1] === "=", c = (1 << n) - 1;
  let b = "", E = 0, a = 0;
  for (let _ = 0; _ < e.length; ++_)
    for (a = a << 8 | e[_], E += 8; E > n; )
      E -= n, b += t[c & a >> E];
  if (E && (b += t[c & a << n - E]), u)
    for (; b.length * n & 7; )
      b += "=";
  return b;
}, Je = ({ name: e, prefix: t, bitsPerChar: n, alphabet: u }) => Cr({ prefix: t, name: e, encode(c) {
  return _u(c, u, n);
}, decode(c) {
  return bu(c, u, n, e);
} }), vu = Cr({ prefix: "\0", name: "identity", encode: (e) => hu(e), decode: (e) => cu(e) });
var mu = Object.freeze({ __proto__: null, identity: vu });
const wu = Je({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Eu = Object.freeze({ __proto__: null, base2: wu });
const Fu = Je({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Lu = Object.freeze({ __proto__: null, base8: Fu });
const Su = ur({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ou = Object.freeze({ __proto__: null, base10: Su });
const Au = Je({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ju = Je({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Cu = Object.freeze({ __proto__: null, base16: Au, base16upper: ju });
const Uu = Je({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Tu = Je({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Iu = Je({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Nu = Je({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Bu = Je({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), ku = Je({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Pu = Je({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Mu = Je({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), xu = Je({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Ru = Object.freeze({ __proto__: null, base32: Uu, base32upper: Tu, base32pad: Iu, base32padupper: Nu, base32hex: Bu, base32hexupper: ku, base32hexpad: Pu, base32hexpadupper: Mu, base32z: xu });
const Hu = ur({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), zu = ur({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var $u = Object.freeze({ __proto__: null, base36: Hu, base36upper: zu });
const Du = ur({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Yu = ur({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Wu = Object.freeze({ __proto__: null, base58btc: Du, base58flickr: Yu });
const Vu = Je({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Zu = Je({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Gu = Je({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Ku = Je({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Xu = Object.freeze({ __proto__: null, base64: Vu, base64pad: Zu, base64url: Gu, base64urlpad: Ku });
const ri = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), qu = ri.reduce((e, t, n) => (e[n] = t, e), []), Qu = ri.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
function Ju(e) {
  return e.reduce((t, n) => (t += qu[n], t), "");
}
function e1(e) {
  const t = [];
  for (const n of e) {
    const u = Qu[n.codePointAt(0)];
    if (u === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    t.push(u);
  }
  return new Uint8Array(t);
}
const t1 = Cr({ prefix: "\u{1F680}", name: "base256emoji", encode: Ju, decode: e1 });
var r1 = Object.freeze({ __proto__: null, base256emoji: t1 }), n1 = ni, vo = 128, o1 = 127, i1 = ~o1, s1 = Math.pow(2, 31);
function ni(e, t, n) {
  t = t || [], n = n || 0;
  for (var u = n; e >= s1; )
    t[n++] = e & 255 | vo, e /= 128;
  for (; e & i1; )
    t[n++] = e & 255 | vo, e >>>= 7;
  return t[n] = e | 0, ni.bytes = n - u + 1, t;
}
var a1 = Xr, u1 = 128, mo = 127;
function Xr(e, u) {
  var n = 0, u = u || 0, c = 0, b = u, E, a = e.length;
  do {
    if (b >= a)
      throw Xr.bytes = 0, new RangeError("Could not decode varint");
    E = e[b++], n += c < 28 ? (E & mo) << c : (E & mo) * Math.pow(2, c), c += 7;
  } while (E >= u1);
  return Xr.bytes = b - u, n;
}
var f1 = Math.pow(2, 7), l1 = Math.pow(2, 14), c1 = Math.pow(2, 21), h1 = Math.pow(2, 28), p1 = Math.pow(2, 35), d1 = Math.pow(2, 42), y1 = Math.pow(2, 49), g1 = Math.pow(2, 56), b1 = Math.pow(2, 63), _1 = function(e) {
  return e < f1 ? 1 : e < l1 ? 2 : e < c1 ? 3 : e < h1 ? 4 : e < p1 ? 5 : e < d1 ? 6 : e < y1 ? 7 : e < g1 ? 8 : e < b1 ? 9 : 10;
}, v1 = { encode: n1, decode: a1, encodingLength: _1 }, oi = v1;
const wo = (e, t, n = 0) => (oi.encode(e, t, n), t), Eo = (e) => oi.encodingLength(e), qr = (e, t) => {
  const n = t.byteLength, u = Eo(e), c = u + Eo(n), b = new Uint8Array(c + n);
  return wo(e, b, 0), wo(n, b, u), b.set(t, c), new m1(e, n, t, b);
};
class m1 {
  constructor(t, n, u, c) {
    this.code = t, this.size = n, this.digest = u, this.bytes = c;
  }
}
const ii = ({ name: e, code: t, encode: n }) => new w1(e, t, n);
class w1 {
  constructor(t, n, u) {
    this.name = t, this.code = n, this.encode = u;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const n = this.encode(t);
      return n instanceof Uint8Array ? qr(this.code, n) : n.then((u) => qr(this.code, u));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const si = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), E1 = ii({ name: "sha2-256", code: 18, encode: si("SHA-256") }), F1 = ii({ name: "sha2-512", code: 19, encode: si("SHA-512") });
var L1 = Object.freeze({ __proto__: null, sha256: E1, sha512: F1 });
const ai = 0, S1 = "identity", ui = ei, O1 = (e) => qr(ai, ui(e)), A1 = { code: ai, name: S1, encode: ui, digest: O1 };
var j1 = Object.freeze({ __proto__: null, identity: A1 });
new TextEncoder(), new TextDecoder();
({ ...mu, ...Eu, ...Lu, ...Ou, ...Cu, ...Ru, ...$u, ...Wu, ...Xu, ...r1 });
({ ...L1, ...j1 });
var C1 = {}, Ur = {};
Object.defineProperty(Ur, "__esModule", { value: !0 });
var rt = pe, Qr = ut, U1 = 20;
function T1(e, t, n) {
  for (var u = 1634760805, c = 857760878, b = 2036477234, E = 1797285236, a = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], _ = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], m = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], v = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], C = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], B = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], A = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], O = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], I = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], $ = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], W = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], f = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], y = u, h = c, d = b, g = E, o = a, p = _, k = m, R = v, X = C, ee = B, ne = A, w = O, S = I, D = $, Z = W, z = f, H = 0; H < U1; H += 2)
    y = y + o | 0, S ^= y, S = S >>> 32 - 16 | S << 16, X = X + S | 0, o ^= X, o = o >>> 32 - 12 | o << 12, h = h + p | 0, D ^= h, D = D >>> 32 - 16 | D << 16, ee = ee + D | 0, p ^= ee, p = p >>> 32 - 12 | p << 12, d = d + k | 0, Z ^= d, Z = Z >>> 32 - 16 | Z << 16, ne = ne + Z | 0, k ^= ne, k = k >>> 32 - 12 | k << 12, g = g + R | 0, z ^= g, z = z >>> 32 - 16 | z << 16, w = w + z | 0, R ^= w, R = R >>> 32 - 12 | R << 12, d = d + k | 0, Z ^= d, Z = Z >>> 32 - 8 | Z << 8, ne = ne + Z | 0, k ^= ne, k = k >>> 32 - 7 | k << 7, g = g + R | 0, z ^= g, z = z >>> 32 - 8 | z << 8, w = w + z | 0, R ^= w, R = R >>> 32 - 7 | R << 7, h = h + p | 0, D ^= h, D = D >>> 32 - 8 | D << 8, ee = ee + D | 0, p ^= ee, p = p >>> 32 - 7 | p << 7, y = y + o | 0, S ^= y, S = S >>> 32 - 8 | S << 8, X = X + S | 0, o ^= X, o = o >>> 32 - 7 | o << 7, y = y + p | 0, z ^= y, z = z >>> 32 - 16 | z << 16, ne = ne + z | 0, p ^= ne, p = p >>> 32 - 12 | p << 12, h = h + k | 0, S ^= h, S = S >>> 32 - 16 | S << 16, w = w + S | 0, k ^= w, k = k >>> 32 - 12 | k << 12, d = d + R | 0, D ^= d, D = D >>> 32 - 16 | D << 16, X = X + D | 0, R ^= X, R = R >>> 32 - 12 | R << 12, g = g + o | 0, Z ^= g, Z = Z >>> 32 - 16 | Z << 16, ee = ee + Z | 0, o ^= ee, o = o >>> 32 - 12 | o << 12, d = d + R | 0, D ^= d, D = D >>> 32 - 8 | D << 8, X = X + D | 0, R ^= X, R = R >>> 32 - 7 | R << 7, g = g + o | 0, Z ^= g, Z = Z >>> 32 - 8 | Z << 8, ee = ee + Z | 0, o ^= ee, o = o >>> 32 - 7 | o << 7, h = h + k | 0, S ^= h, S = S >>> 32 - 8 | S << 8, w = w + S | 0, k ^= w, k = k >>> 32 - 7 | k << 7, y = y + p | 0, z ^= y, z = z >>> 32 - 8 | z << 8, ne = ne + z | 0, p ^= ne, p = p >>> 32 - 7 | p << 7;
  rt.writeUint32LE(y + u | 0, e, 0), rt.writeUint32LE(h + c | 0, e, 4), rt.writeUint32LE(d + b | 0, e, 8), rt.writeUint32LE(g + E | 0, e, 12), rt.writeUint32LE(o + a | 0, e, 16), rt.writeUint32LE(p + _ | 0, e, 20), rt.writeUint32LE(k + m | 0, e, 24), rt.writeUint32LE(R + v | 0, e, 28), rt.writeUint32LE(X + C | 0, e, 32), rt.writeUint32LE(ee + B | 0, e, 36), rt.writeUint32LE(ne + A | 0, e, 40), rt.writeUint32LE(w + O | 0, e, 44), rt.writeUint32LE(S + I | 0, e, 48), rt.writeUint32LE(D + $ | 0, e, 52), rt.writeUint32LE(Z + W | 0, e, 56), rt.writeUint32LE(z + f | 0, e, 60);
}
function fi(e, t, n, u, c) {
  if (c === void 0 && (c = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (u.length < n.length)
    throw new Error("ChaCha: destination is shorter than source");
  var b, E;
  if (c === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    b = new Uint8Array(16), E = b.length - t.length, b.set(t, E);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    b = t, E = c;
  }
  for (var a = new Uint8Array(64), _ = 0; _ < n.length; _ += 64) {
    T1(a, b, e);
    for (var m = _; m < _ + 64 && m < n.length; m++)
      u[m] = n[m] ^ a[m - _];
    N1(b, 0, E);
  }
  return Qr.wipe(a), c === 0 && Qr.wipe(b), u;
}
Ur.streamXOR = fi;
function I1(e, t, n, u) {
  return u === void 0 && (u = 0), Qr.wipe(n), fi(e, t, n, n, u);
}
Ur.stream = I1;
function N1(e, t, n) {
  for (var u = 1; n--; )
    u = u + (e[t] & 255) | 0, e[t] = u & 255, u >>>= 8, t++;
  if (u > 0)
    throw new Error("ChaCha: counter overflow");
}
var Fo = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
function B1(e, t, n) {
  return ~(e - 1) & t | e - 1 & n;
}
Lt.select = B1;
function k1(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
Lt.lessOrEqual = k1;
function li(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var n = 0, u = 0; u < e.length; u++)
    n |= e[u] ^ t[u];
  return 1 & n - 1 >>> 8;
}
Lt.compare = li;
function P1(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : li(e, t) !== 0;
}
Lt.equal = P1, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Lt, n = ut;
  e.DIGEST_LENGTH = 16;
  var u = function() {
    function E(a) {
      this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
      var _ = a[0] | a[1] << 8;
      this._r[0] = _ & 8191;
      var m = a[2] | a[3] << 8;
      this._r[1] = (_ >>> 13 | m << 3) & 8191;
      var v = a[4] | a[5] << 8;
      this._r[2] = (m >>> 10 | v << 6) & 7939;
      var C = a[6] | a[7] << 8;
      this._r[3] = (v >>> 7 | C << 9) & 8191;
      var B = a[8] | a[9] << 8;
      this._r[4] = (C >>> 4 | B << 12) & 255, this._r[5] = B >>> 1 & 8190;
      var A = a[10] | a[11] << 8;
      this._r[6] = (B >>> 14 | A << 2) & 8191;
      var O = a[12] | a[13] << 8;
      this._r[7] = (A >>> 11 | O << 5) & 8065;
      var I = a[14] | a[15] << 8;
      this._r[8] = (O >>> 8 | I << 8) & 8191, this._r[9] = I >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
    }
    return E.prototype._blocks = function(a, _, m) {
      for (var v = this._fin ? 0 : 2048, C = this._h[0], B = this._h[1], A = this._h[2], O = this._h[3], I = this._h[4], $ = this._h[5], W = this._h[6], f = this._h[7], y = this._h[8], h = this._h[9], d = this._r[0], g = this._r[1], o = this._r[2], p = this._r[3], k = this._r[4], R = this._r[5], X = this._r[6], ee = this._r[7], ne = this._r[8], w = this._r[9]; m >= 16; ) {
        var S = a[_ + 0] | a[_ + 1] << 8;
        C += S & 8191;
        var D = a[_ + 2] | a[_ + 3] << 8;
        B += (S >>> 13 | D << 3) & 8191;
        var Z = a[_ + 4] | a[_ + 5] << 8;
        A += (D >>> 10 | Z << 6) & 8191;
        var z = a[_ + 6] | a[_ + 7] << 8;
        O += (Z >>> 7 | z << 9) & 8191;
        var H = a[_ + 8] | a[_ + 9] << 8;
        I += (z >>> 4 | H << 12) & 8191, $ += H >>> 1 & 8191;
        var K = a[_ + 10] | a[_ + 11] << 8;
        W += (H >>> 14 | K << 2) & 8191;
        var V = a[_ + 12] | a[_ + 13] << 8;
        f += (K >>> 11 | V << 5) & 8191;
        var oe = a[_ + 14] | a[_ + 15] << 8;
        y += (V >>> 8 | oe << 8) & 8191, h += oe >>> 5 | v;
        var q = 0, ue = q;
        ue += C * d, ue += B * (5 * w), ue += A * (5 * ne), ue += O * (5 * ee), ue += I * (5 * X), q = ue >>> 13, ue &= 8191, ue += $ * (5 * R), ue += W * (5 * k), ue += f * (5 * p), ue += y * (5 * o), ue += h * (5 * g), q += ue >>> 13, ue &= 8191;
        var te = q;
        te += C * g, te += B * d, te += A * (5 * w), te += O * (5 * ne), te += I * (5 * ee), q = te >>> 13, te &= 8191, te += $ * (5 * X), te += W * (5 * R), te += f * (5 * k), te += y * (5 * p), te += h * (5 * o), q += te >>> 13, te &= 8191;
        var de = q;
        de += C * o, de += B * g, de += A * d, de += O * (5 * w), de += I * (5 * ne), q = de >>> 13, de &= 8191, de += $ * (5 * ee), de += W * (5 * X), de += f * (5 * R), de += y * (5 * k), de += h * (5 * p), q += de >>> 13, de &= 8191;
        var M = q;
        M += C * p, M += B * o, M += A * g, M += O * d, M += I * (5 * w), q = M >>> 13, M &= 8191, M += $ * (5 * ne), M += W * (5 * ee), M += f * (5 * X), M += y * (5 * R), M += h * (5 * k), q += M >>> 13, M &= 8191;
        var P = q;
        P += C * k, P += B * p, P += A * o, P += O * g, P += I * d, q = P >>> 13, P &= 8191, P += $ * (5 * w), P += W * (5 * ne), P += f * (5 * ee), P += y * (5 * X), P += h * (5 * R), q += P >>> 13, P &= 8191;
        var T = q;
        T += C * R, T += B * k, T += A * p, T += O * o, T += I * g, q = T >>> 13, T &= 8191, T += $ * d, T += W * (5 * w), T += f * (5 * ne), T += y * (5 * ee), T += h * (5 * X), q += T >>> 13, T &= 8191;
        var i = q;
        i += C * X, i += B * R, i += A * k, i += O * p, i += I * o, q = i >>> 13, i &= 8191, i += $ * g, i += W * d, i += f * (5 * w), i += y * (5 * ne), i += h * (5 * ee), q += i >>> 13, i &= 8191;
        var j = q;
        j += C * ee, j += B * X, j += A * R, j += O * k, j += I * p, q = j >>> 13, j &= 8191, j += $ * o, j += W * g, j += f * d, j += y * (5 * w), j += h * (5 * ne), q += j >>> 13, j &= 8191;
        var Q = q;
        Q += C * ne, Q += B * ee, Q += A * X, Q += O * R, Q += I * k, q = Q >>> 13, Q &= 8191, Q += $ * p, Q += W * o, Q += f * g, Q += y * d, Q += h * (5 * w), q += Q >>> 13, Q &= 8191;
        var J = q;
        J += C * w, J += B * ne, J += A * ee, J += O * X, J += I * R, q = J >>> 13, J &= 8191, J += $ * k, J += W * p, J += f * o, J += y * g, J += h * d, q += J >>> 13, J &= 8191, q = (q << 2) + q | 0, q = q + ue | 0, ue = q & 8191, q = q >>> 13, te += q, C = ue, B = te, A = de, O = M, I = P, $ = T, W = i, f = j, y = Q, h = J, _ += 16, m -= 16;
      }
      this._h[0] = C, this._h[1] = B, this._h[2] = A, this._h[3] = O, this._h[4] = I, this._h[5] = $, this._h[6] = W, this._h[7] = f, this._h[8] = y, this._h[9] = h;
    }, E.prototype.finish = function(a, _) {
      _ === void 0 && (_ = 0);
      var m = new Uint16Array(10), v, C, B, A;
      if (this._leftover) {
        for (A = this._leftover, this._buffer[A++] = 1; A < 16; A++)
          this._buffer[A] = 0;
        this._fin = 1, this._blocks(this._buffer, 0, 16);
      }
      for (v = this._h[1] >>> 13, this._h[1] &= 8191, A = 2; A < 10; A++)
        this._h[A] += v, v = this._h[A] >>> 13, this._h[A] &= 8191;
      for (this._h[0] += v * 5, v = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += v, v = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += v, m[0] = this._h[0] + 5, v = m[0] >>> 13, m[0] &= 8191, A = 1; A < 10; A++)
        m[A] = this._h[A] + v, v = m[A] >>> 13, m[A] &= 8191;
      for (m[9] -= 1 << 13, C = (v ^ 1) - 1, A = 0; A < 10; A++)
        m[A] &= C;
      for (C = ~C, A = 0; A < 10; A++)
        this._h[A] = this._h[A] & C | m[A];
      for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, B = this._h[0] + this._pad[0], this._h[0] = B & 65535, A = 1; A < 8; A++)
        B = (this._h[A] + this._pad[A] | 0) + (B >>> 16) | 0, this._h[A] = B & 65535;
      return a[_ + 0] = this._h[0] >>> 0, a[_ + 1] = this._h[0] >>> 8, a[_ + 2] = this._h[1] >>> 0, a[_ + 3] = this._h[1] >>> 8, a[_ + 4] = this._h[2] >>> 0, a[_ + 5] = this._h[2] >>> 8, a[_ + 6] = this._h[3] >>> 0, a[_ + 7] = this._h[3] >>> 8, a[_ + 8] = this._h[4] >>> 0, a[_ + 9] = this._h[4] >>> 8, a[_ + 10] = this._h[5] >>> 0, a[_ + 11] = this._h[5] >>> 8, a[_ + 12] = this._h[6] >>> 0, a[_ + 13] = this._h[6] >>> 8, a[_ + 14] = this._h[7] >>> 0, a[_ + 15] = this._h[7] >>> 8, this._finished = !0, this;
    }, E.prototype.update = function(a) {
      var _ = 0, m = a.length, v;
      if (this._leftover) {
        v = 16 - this._leftover, v > m && (v = m);
        for (var C = 0; C < v; C++)
          this._buffer[this._leftover + C] = a[_ + C];
        if (m -= v, _ += v, this._leftover += v, this._leftover < 16)
          return this;
        this._blocks(this._buffer, 0, 16), this._leftover = 0;
      }
      if (m >= 16 && (v = m - m % 16, this._blocks(a, _, v), _ += v, m -= v), m) {
        for (var C = 0; C < m; C++)
          this._buffer[this._leftover + C] = a[_ + C];
        this._leftover += m;
      }
      return this;
    }, E.prototype.digest = function() {
      if (this._finished)
        throw new Error("Poly1305 was finished");
      var a = new Uint8Array(16);
      return this.finish(a), a;
    }, E.prototype.clean = function() {
      return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
    }, E;
  }();
  e.Poly1305 = u;
  function c(E, a) {
    var _ = new u(E);
    _.update(a);
    var m = _.digest();
    return _.clean(), m;
  }
  e.oneTimeAuth = c;
  function b(E, a) {
    return E.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(E, a);
  }
  e.equal = b;
}(Fo), function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Ur, n = Fo, u = ut, c = pe, b = Lt;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var E = new Uint8Array(16), a = function() {
    function _(m) {
      if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, m.length !== e.KEY_LENGTH)
        throw new Error("ChaCha20Poly1305 needs 32-byte key");
      this._key = new Uint8Array(m);
    }
    return _.prototype.seal = function(m, v, C, B) {
      if (m.length > 16)
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      var A = new Uint8Array(16);
      A.set(m, A.length - m.length);
      var O = new Uint8Array(32);
      t.stream(this._key, A, O, 4);
      var I = v.length + this.tagLength, $;
      if (B) {
        if (B.length !== I)
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        $ = B;
      } else
        $ = new Uint8Array(I);
      return t.streamXOR(this._key, A, v, $, 4), this._authenticate($.subarray($.length - this.tagLength, $.length), O, $.subarray(0, $.length - this.tagLength), C), u.wipe(A), $;
    }, _.prototype.open = function(m, v, C, B) {
      if (m.length > 16)
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      if (v.length < this.tagLength)
        return null;
      var A = new Uint8Array(16);
      A.set(m, A.length - m.length);
      var O = new Uint8Array(32);
      t.stream(this._key, A, O, 4);
      var I = new Uint8Array(this.tagLength);
      if (this._authenticate(I, O, v.subarray(0, v.length - this.tagLength), C), !b.equal(I, v.subarray(v.length - this.tagLength, v.length)))
        return null;
      var $ = v.length - this.tagLength, W;
      if (B) {
        if (B.length !== $)
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        W = B;
      } else
        W = new Uint8Array($);
      return t.streamXOR(this._key, A, v.subarray(0, v.length - this.tagLength), W, 4), u.wipe(A), W;
    }, _.prototype.clean = function() {
      return u.wipe(this._key), this;
    }, _.prototype._authenticate = function(m, v, C, B) {
      var A = new n.Poly1305(v);
      B && (A.update(B), B.length % 16 > 0 && A.update(E.subarray(B.length % 16))), A.update(C), C.length % 16 > 0 && A.update(E.subarray(C.length % 16));
      var O = new Uint8Array(8);
      B && c.writeUint64LE(B.length, O), A.update(O), c.writeUint64LE(C.length, O), A.update(O);
      for (var I = A.digest(), $ = 0; $ < I.length; $++)
        m[$] = I[$];
      A.clean(), u.wipe(I), u.wipe(O);
    }, _;
  }();
  e.ChaCha20Poly1305 = a;
}(C1);
var ci = {}, sr = {}, hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
function M1(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
hn.isSerializableHash = M1, Object.defineProperty(sr, "__esModule", { value: !0 });
var dt = hn, x1 = Lt, R1 = ut, hi = function() {
  function e(t, n) {
    this._finished = !1, this._inner = new t(), this._outer = new t(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
    var u = new Uint8Array(this.blockSize);
    n.length > this.blockSize ? this._inner.update(n).finish(u).clean() : u.set(n);
    for (var c = 0; c < u.length; c++)
      u[c] ^= 54;
    this._inner.update(u);
    for (var c = 0; c < u.length; c++)
      u[c] ^= 106;
    this._outer.update(u), dt.isSerializableHash(this._inner) && dt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), R1.wipe(u);
  }
  return e.prototype.reset = function() {
    if (!dt.isSerializableHash(this._inner) || !dt.isSerializableHash(this._outer))
      throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
    return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
  }, e.prototype.clean = function() {
    dt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), dt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
  }, e.prototype.update = function(t) {
    return this._inner.update(t), this;
  }, e.prototype.finish = function(t) {
    return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
  }, e.prototype.digest = function() {
    var t = new Uint8Array(this.digestLength);
    return this.finish(t), t;
  }, e.prototype.saveState = function() {
    if (!dt.isSerializableHash(this._inner))
      throw new Error("hmac: can't saveState() because hash doesn't implement it");
    return this._inner.saveState();
  }, e.prototype.restoreState = function(t) {
    if (!dt.isSerializableHash(this._inner) || !dt.isSerializableHash(this._outer))
      throw new Error("hmac: can't restoreState() because hash doesn't implement it");
    return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
  }, e.prototype.cleanSavedState = function(t) {
    if (!dt.isSerializableHash(this._inner))
      throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
    this._inner.cleanSavedState(t);
  }, e;
}();
sr.HMAC = hi;
function H1(e, t, n) {
  var u = new hi(e, t);
  u.update(n);
  var c = u.digest();
  return u.clean(), c;
}
sr.hmac = H1, sr.equal = x1.equal, Object.defineProperty(ci, "__esModule", { value: !0 });
var Lo = sr, So = ut, z1 = function() {
  function e(t, n, u, c) {
    u === void 0 && (u = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = c;
    var b = Lo.hmac(this._hash, u, n);
    this._hmac = new Lo.HMAC(t, b), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
  }
  return e.prototype._fillBuffer = function() {
    this._counter[0]++;
    var t = this._counter[0];
    if (t === 0)
      throw new Error("hkdf: cannot expand more");
    this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
  }, e.prototype.expand = function(t) {
    for (var n = new Uint8Array(t), u = 0; u < n.length; u++)
      this._bufpos === this._buffer.length && this._fillBuffer(), n[u] = this._buffer[this._bufpos++];
    return n;
  }, e.prototype.clean = function() {
    this._hmac.clean(), So.wipe(this._buffer), So.wipe(this._counter), this._bufpos = 0;
  }, e;
}();
ci.HKDF = z1;
var $1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pe, n = ut;
  e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
  var u = function() {
    function a() {
      this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
    }
    return a.prototype._initState = function() {
      this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
    }, a.prototype.reset = function() {
      return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
    }, a.prototype.clean = function() {
      n.wipe(this._buffer), n.wipe(this._temp), this.reset();
    }, a.prototype.update = function(_, m) {
      if (m === void 0 && (m = _.length), this._finished)
        throw new Error("SHA256: can't update because hash was finished.");
      var v = 0;
      if (this._bytesHashed += m, this._bufferLength > 0) {
        for (; this._bufferLength < this.blockSize && m > 0; )
          this._buffer[this._bufferLength++] = _[v++], m--;
        this._bufferLength === this.blockSize && (b(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
      }
      for (m >= this.blockSize && (v = b(this._temp, this._state, _, v, m), m %= this.blockSize); m > 0; )
        this._buffer[this._bufferLength++] = _[v++], m--;
      return this;
    }, a.prototype.finish = function(_) {
      if (!this._finished) {
        var m = this._bytesHashed, v = this._bufferLength, C = m / 536870912 | 0, B = m << 3, A = m % 64 < 56 ? 64 : 128;
        this._buffer[v] = 128;
        for (var O = v + 1; O < A - 8; O++)
          this._buffer[O] = 0;
        t.writeUint32BE(C, this._buffer, A - 8), t.writeUint32BE(B, this._buffer, A - 4), b(this._temp, this._state, this._buffer, 0, A), this._finished = !0;
      }
      for (var O = 0; O < this.digestLength / 4; O++)
        t.writeUint32BE(this._state[O], _, O * 4);
      return this;
    }, a.prototype.digest = function() {
      var _ = new Uint8Array(this.digestLength);
      return this.finish(_), _;
    }, a.prototype.saveState = function() {
      if (this._finished)
        throw new Error("SHA256: cannot save finished state");
      return { state: new Int32Array(this._state), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
    }, a.prototype.restoreState = function(_) {
      return this._state.set(_.state), this._bufferLength = _.bufferLength, _.buffer && this._buffer.set(_.buffer), this._bytesHashed = _.bytesHashed, this._finished = !1, this;
    }, a.prototype.cleanSavedState = function(_) {
      n.wipe(_.state), _.buffer && n.wipe(_.buffer), _.bufferLength = 0, _.bytesHashed = 0;
    }, a;
  }();
  e.SHA256 = u;
  var c = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
  function b(a, _, m, v, C) {
    for (; C >= 64; ) {
      for (var B = _[0], A = _[1], O = _[2], I = _[3], $ = _[4], W = _[5], f = _[6], y = _[7], h = 0; h < 16; h++) {
        var d = v + h * 4;
        a[h] = t.readUint32BE(m, d);
      }
      for (var h = 16; h < 64; h++) {
        var g = a[h - 2], o = (g >>> 17 | g << 32 - 17) ^ (g >>> 19 | g << 32 - 19) ^ g >>> 10;
        g = a[h - 15];
        var p = (g >>> 7 | g << 32 - 7) ^ (g >>> 18 | g << 32 - 18) ^ g >>> 3;
        a[h] = (o + a[h - 7] | 0) + (p + a[h - 16] | 0);
      }
      for (var h = 0; h < 64; h++) {
        var o = ((($ >>> 6 | $ << 26) ^ ($ >>> 11 | $ << 21) ^ ($ >>> 25 | $ << 7)) + ($ & W ^ ~$ & f) | 0) + (y + (c[h] + a[h] | 0) | 0) | 0, p = ((B >>> 2 | B << 32 - 2) ^ (B >>> 13 | B << 32 - 13) ^ (B >>> 22 | B << 32 - 22)) + (B & A ^ B & O ^ A & O) | 0;
        y = f, f = W, W = $, $ = I + o | 0, I = O, O = A, A = B, B = o + p | 0;
      }
      _[0] += B, _[1] += A, _[2] += O, _[3] += I, _[4] += $, _[5] += W, _[6] += f, _[7] += y, v += 64, C -= 64;
    }
    return v;
  }
  function E(a) {
    var _ = new u();
    _.update(a);
    var m = _.digest();
    return _.clean(), m;
  }
  e.hash = E;
})($1);
var D1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = cn, n = ut;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function u(h) {
    const d = new Float64Array(16);
    if (h)
      for (let g = 0; g < h.length; g++)
        d[g] = h[g];
    return d;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const b = u([56129, 1]);
  function E(h) {
    let d = 1;
    for (let g = 0; g < 16; g++) {
      let o = h[g] + d + 65535;
      d = Math.floor(o / 65536), h[g] = o - d * 65536;
    }
    h[0] += d - 1 + 37 * (d - 1);
  }
  function a(h, d, g) {
    const o = ~(g - 1);
    for (let p = 0; p < 16; p++) {
      const k = o & (h[p] ^ d[p]);
      h[p] ^= k, d[p] ^= k;
    }
  }
  function _(h, d) {
    const g = u(), o = u();
    for (let p = 0; p < 16; p++)
      o[p] = d[p];
    E(o), E(o), E(o);
    for (let p = 0; p < 2; p++) {
      g[0] = o[0] - 65517;
      for (let R = 1; R < 15; R++)
        g[R] = o[R] - 65535 - (g[R - 1] >> 16 & 1), g[R - 1] &= 65535;
      g[15] = o[15] - 32767 - (g[14] >> 16 & 1);
      const k = g[15] >> 16 & 1;
      g[14] &= 65535, a(o, g, 1 - k);
    }
    for (let p = 0; p < 16; p++)
      h[2 * p] = o[p] & 255, h[2 * p + 1] = o[p] >> 8;
  }
  function m(h, d) {
    for (let g = 0; g < 16; g++)
      h[g] = d[2 * g] + (d[2 * g + 1] << 8);
    h[15] &= 32767;
  }
  function v(h, d, g) {
    for (let o = 0; o < 16; o++)
      h[o] = d[o] + g[o];
  }
  function C(h, d, g) {
    for (let o = 0; o < 16; o++)
      h[o] = d[o] - g[o];
  }
  function B(h, d, g) {
    let o, p, k = 0, R = 0, X = 0, ee = 0, ne = 0, w = 0, S = 0, D = 0, Z = 0, z = 0, H = 0, K = 0, V = 0, oe = 0, q = 0, ue = 0, te = 0, de = 0, M = 0, P = 0, T = 0, i = 0, j = 0, Q = 0, J = 0, ce = 0, Fe = 0, ve = 0, Le = 0, Ne = 0, Te = 0, me = g[0], ge = g[1], le = g[2], ye = g[3], be = g[4], fe = g[5], he = g[6], r = g[7], s = g[8], l = g[9], L = g[10], U = g[11], x = g[12], Y = g[13], ie = g[14], ae = g[15];
    o = d[0], k += o * me, R += o * ge, X += o * le, ee += o * ye, ne += o * be, w += o * fe, S += o * he, D += o * r, Z += o * s, z += o * l, H += o * L, K += o * U, V += o * x, oe += o * Y, q += o * ie, ue += o * ae, o = d[1], R += o * me, X += o * ge, ee += o * le, ne += o * ye, w += o * be, S += o * fe, D += o * he, Z += o * r, z += o * s, H += o * l, K += o * L, V += o * U, oe += o * x, q += o * Y, ue += o * ie, te += o * ae, o = d[2], X += o * me, ee += o * ge, ne += o * le, w += o * ye, S += o * be, D += o * fe, Z += o * he, z += o * r, H += o * s, K += o * l, V += o * L, oe += o * U, q += o * x, ue += o * Y, te += o * ie, de += o * ae, o = d[3], ee += o * me, ne += o * ge, w += o * le, S += o * ye, D += o * be, Z += o * fe, z += o * he, H += o * r, K += o * s, V += o * l, oe += o * L, q += o * U, ue += o * x, te += o * Y, de += o * ie, M += o * ae, o = d[4], ne += o * me, w += o * ge, S += o * le, D += o * ye, Z += o * be, z += o * fe, H += o * he, K += o * r, V += o * s, oe += o * l, q += o * L, ue += o * U, te += o * x, de += o * Y, M += o * ie, P += o * ae, o = d[5], w += o * me, S += o * ge, D += o * le, Z += o * ye, z += o * be, H += o * fe, K += o * he, V += o * r, oe += o * s, q += o * l, ue += o * L, te += o * U, de += o * x, M += o * Y, P += o * ie, T += o * ae, o = d[6], S += o * me, D += o * ge, Z += o * le, z += o * ye, H += o * be, K += o * fe, V += o * he, oe += o * r, q += o * s, ue += o * l, te += o * L, de += o * U, M += o * x, P += o * Y, T += o * ie, i += o * ae, o = d[7], D += o * me, Z += o * ge, z += o * le, H += o * ye, K += o * be, V += o * fe, oe += o * he, q += o * r, ue += o * s, te += o * l, de += o * L, M += o * U, P += o * x, T += o * Y, i += o * ie, j += o * ae, o = d[8], Z += o * me, z += o * ge, H += o * le, K += o * ye, V += o * be, oe += o * fe, q += o * he, ue += o * r, te += o * s, de += o * l, M += o * L, P += o * U, T += o * x, i += o * Y, j += o * ie, Q += o * ae, o = d[9], z += o * me, H += o * ge, K += o * le, V += o * ye, oe += o * be, q += o * fe, ue += o * he, te += o * r, de += o * s, M += o * l, P += o * L, T += o * U, i += o * x, j += o * Y, Q += o * ie, J += o * ae, o = d[10], H += o * me, K += o * ge, V += o * le, oe += o * ye, q += o * be, ue += o * fe, te += o * he, de += o * r, M += o * s, P += o * l, T += o * L, i += o * U, j += o * x, Q += o * Y, J += o * ie, ce += o * ae, o = d[11], K += o * me, V += o * ge, oe += o * le, q += o * ye, ue += o * be, te += o * fe, de += o * he, M += o * r, P += o * s, T += o * l, i += o * L, j += o * U, Q += o * x, J += o * Y, ce += o * ie, Fe += o * ae, o = d[12], V += o * me, oe += o * ge, q += o * le, ue += o * ye, te += o * be, de += o * fe, M += o * he, P += o * r, T += o * s, i += o * l, j += o * L, Q += o * U, J += o * x, ce += o * Y, Fe += o * ie, ve += o * ae, o = d[13], oe += o * me, q += o * ge, ue += o * le, te += o * ye, de += o * be, M += o * fe, P += o * he, T += o * r, i += o * s, j += o * l, Q += o * L, J += o * U, ce += o * x, Fe += o * Y, ve += o * ie, Le += o * ae, o = d[14], q += o * me, ue += o * ge, te += o * le, de += o * ye, M += o * be, P += o * fe, T += o * he, i += o * r, j += o * s, Q += o * l, J += o * L, ce += o * U, Fe += o * x, ve += o * Y, Le += o * ie, Ne += o * ae, o = d[15], ue += o * me, te += o * ge, de += o * le, M += o * ye, P += o * be, T += o * fe, i += o * he, j += o * r, Q += o * s, J += o * l, ce += o * L, Fe += o * U, ve += o * x, Le += o * Y, Ne += o * ie, Te += o * ae, k += 38 * te, R += 38 * de, X += 38 * M, ee += 38 * P, ne += 38 * T, w += 38 * i, S += 38 * j, D += 38 * Q, Z += 38 * J, z += 38 * ce, H += 38 * Fe, K += 38 * ve, V += 38 * Le, oe += 38 * Ne, q += 38 * Te, p = 1, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = X + p + 65535, p = Math.floor(o / 65536), X = o - p * 65536, o = ee + p + 65535, p = Math.floor(o / 65536), ee = o - p * 65536, o = ne + p + 65535, p = Math.floor(o / 65536), ne = o - p * 65536, o = w + p + 65535, p = Math.floor(o / 65536), w = o - p * 65536, o = S + p + 65535, p = Math.floor(o / 65536), S = o - p * 65536, o = D + p + 65535, p = Math.floor(o / 65536), D = o - p * 65536, o = Z + p + 65535, p = Math.floor(o / 65536), Z = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = ue + p + 65535, p = Math.floor(o / 65536), ue = o - p * 65536, k += p - 1 + 37 * (p - 1), p = 1, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = X + p + 65535, p = Math.floor(o / 65536), X = o - p * 65536, o = ee + p + 65535, p = Math.floor(o / 65536), ee = o - p * 65536, o = ne + p + 65535, p = Math.floor(o / 65536), ne = o - p * 65536, o = w + p + 65535, p = Math.floor(o / 65536), w = o - p * 65536, o = S + p + 65535, p = Math.floor(o / 65536), S = o - p * 65536, o = D + p + 65535, p = Math.floor(o / 65536), D = o - p * 65536, o = Z + p + 65535, p = Math.floor(o / 65536), Z = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = ue + p + 65535, p = Math.floor(o / 65536), ue = o - p * 65536, k += p - 1 + 37 * (p - 1), h[0] = k, h[1] = R, h[2] = X, h[3] = ee, h[4] = ne, h[5] = w, h[6] = S, h[7] = D, h[8] = Z, h[9] = z, h[10] = H, h[11] = K, h[12] = V, h[13] = oe, h[14] = q, h[15] = ue;
  }
  function A(h, d) {
    B(h, d, d);
  }
  function O(h, d) {
    const g = u();
    for (let o = 0; o < 16; o++)
      g[o] = d[o];
    for (let o = 253; o >= 0; o--)
      A(g, g), o !== 2 && o !== 4 && B(g, g, d);
    for (let o = 0; o < 16; o++)
      h[o] = g[o];
  }
  function I(h, d) {
    const g = new Uint8Array(32), o = new Float64Array(80), p = u(), k = u(), R = u(), X = u(), ee = u(), ne = u();
    for (let Z = 0; Z < 31; Z++)
      g[Z] = h[Z];
    g[31] = h[31] & 127 | 64, g[0] &= 248, m(o, d);
    for (let Z = 0; Z < 16; Z++)
      k[Z] = o[Z];
    p[0] = X[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const z = g[Z >>> 3] >>> (Z & 7) & 1;
      a(p, k, z), a(R, X, z), v(ee, p, R), C(p, p, R), v(R, k, X), C(k, k, X), A(X, ee), A(ne, p), B(p, R, p), B(R, k, ee), v(ee, p, R), C(p, p, R), A(k, p), C(R, X, ne), B(p, R, b), v(p, p, X), B(R, R, p), B(p, X, ne), B(X, k, o), A(k, ee), a(p, k, z), a(R, X, z);
    }
    for (let Z = 0; Z < 16; Z++)
      o[Z + 16] = p[Z], o[Z + 32] = R[Z], o[Z + 48] = k[Z], o[Z + 64] = X[Z];
    const w = o.subarray(32), S = o.subarray(16);
    O(w, w), B(S, S, w);
    const D = new Uint8Array(32);
    return _(D, S), D;
  }
  e.scalarMult = I;
  function $(h) {
    return I(h, c);
  }
  e.scalarMultBase = $;
  function W(h) {
    if (h.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const d = new Uint8Array(h);
    return { publicKey: $(d), secretKey: d };
  }
  e.generateKeyPairFromSeed = W;
  function f(h) {
    const d = (0, t.randomBytes)(32, h), g = W(d);
    return (0, n.wipe)(d), g;
  }
  e.generateKeyPair = f;
  function y(h, d, g = !1) {
    if (h.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (d.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = I(h, d);
    if (g) {
      let p = 0;
      for (let k = 0; k < o.length; k++)
        p |= o[k];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = y;
})(D1);
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 }), je.getLocalStorage = je.getLocalStorageOrThrow = je.getCrypto = je.getCryptoOrThrow = je.getLocation = je.getLocationOrThrow = je.getNavigator = je.getNavigatorOrThrow = je.getDocument = je.getDocumentOrThrow = je.getFromWindowOrThrow = je.getFromWindow = void 0;
function kt(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
je.getFromWindow = kt;
function Wt(e) {
  const t = kt(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
je.getFromWindowOrThrow = Wt;
function Y1() {
  return Wt("document");
}
je.getDocumentOrThrow = Y1;
function W1() {
  return kt("document");
}
je.getDocument = W1;
function V1() {
  return Wt("navigator");
}
je.getNavigatorOrThrow = V1;
function Z1() {
  return kt("navigator");
}
je.getNavigator = Z1;
function G1() {
  return Wt("location");
}
je.getLocationOrThrow = G1;
function K1() {
  return kt("location");
}
je.getLocation = K1;
function X1() {
  return Wt("crypto");
}
je.getCryptoOrThrow = X1;
function q1() {
  return kt("crypto");
}
je.getCrypto = q1;
function Q1() {
  return Wt("localStorage");
}
je.getLocalStorageOrThrow = Q1;
function J1() {
  return kt("localStorage");
}
je.getLocalStorage = J1;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.getWindowMetadata = void 0;
const Oo = je;
function ef() {
  let e, t;
  try {
    e = Oo.getDocumentOrThrow(), t = Oo.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const v = e.getElementsByTagName("link"), C = [];
    for (let B = 0; B < v.length; B++) {
      const A = v[B], O = A.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const I = A.getAttribute("href");
        if (I)
          if (I.toLowerCase().indexOf("https:") === -1 && I.toLowerCase().indexOf("http:") === -1 && I.indexOf("//") !== 0) {
            let $ = t.protocol + "//" + t.host;
            if (I.indexOf("/") === 0)
              $ += I;
            else {
              const W = t.pathname.split("/");
              W.pop();
              const f = W.join("/");
              $ += f + "/" + I;
            }
            C.push($);
          } else if (I.indexOf("//") === 0) {
            const $ = t.protocol + I;
            C.push($);
          } else
            C.push(I);
      }
    }
    return C;
  }
  function u(...v) {
    const C = e.getElementsByTagName("meta");
    for (let B = 0; B < C.length; B++) {
      const A = C[B], O = ["itemprop", "property", "name"].map((I) => A.getAttribute(I)).filter((I) => I ? v.includes(I) : !1);
      if (O.length && O) {
        const I = A.getAttribute("content");
        if (I)
          return I;
      }
    }
    return "";
  }
  function c() {
    let v = u("name", "og:site_name", "og:title", "twitter:title");
    return v || (v = e.title), v;
  }
  function b() {
    return u("description", "og:description", "twitter:description", "keywords");
  }
  const E = c(), a = b(), _ = t.origin, m = n();
  return { description: a, url: _, icons: m, name: E };
}
Jr.getWindowMetadata = ef;
var tf = {}, pn = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), pi = "%[a-f0-9]{2}", Ao = new RegExp("(" + pi + ")|([^%]+?)", "gi"), jo = new RegExp("(" + pi + ")+", "gi");
function en(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var n = e.slice(0, t), u = e.slice(t);
  return Array.prototype.concat.call([], en(n), en(u));
}
function rf(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(Ao) || [], n = 1; n < t.length; n++)
      e = en(t, n).join(""), t = e.match(Ao) || [];
    return e;
  }
}
function nf(e) {
  for (var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, n = jo.exec(e); n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var u = rf(n[0]);
      u !== n[0] && (t[n[0]] = u);
    }
    n = jo.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var c = Object.keys(t), b = 0; b < c.length; b++) {
    var E = c[b];
    e = e.replace(new RegExp(E, "g"), t[E]);
  }
  return e;
}
var dn = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return nf(e);
  }
}, yn = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const n = e.indexOf(t);
  return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}, of = function(e, t) {
  for (var n = {}, u = Object.keys(e), c = Array.isArray(t), b = 0; b < u.length; b++) {
    var E = u[b], a = e[E];
    (c ? t.indexOf(E) !== -1 : t(E, a, e)) && (n[E] = a);
  }
  return n;
};
(function(e) {
  const t = pn, n = dn, u = yn, c = of, b = (f) => f == null, E = Symbol("encodeFragmentIdentifier");
  function a(f) {
    switch (f.arrayFormat) {
      case "index":
        return (y) => (h, d) => {
          const g = h.length;
          return d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), "[", g, "]"].join("")] : [...h, [v(y, f), "[", v(g, f), "]=", v(d, f)].join("")];
        };
      case "bracket":
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), "[]"].join("")] : [...h, [v(y, f), "[]=", v(d, f)].join("")];
      case "colon-list-separator":
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), ":list="].join("")] : [...h, [v(y, f), ":list=", v(d, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const y = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (h) => (d, g) => g === void 0 || f.skipNull && g === null || f.skipEmptyString && g === "" ? d : (g = g === null ? "" : g, d.length === 0 ? [[v(h, f), y, v(g, f)].join("")] : [[d, v(g, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, v(y, f)] : [...h, [v(y, f), "=", v(d, f)].join("")];
    }
  }
  function _(f) {
    let y;
    switch (f.arrayFormat) {
      case "index":
        return (h, d, g) => {
          if (y = /\[(\d*)\]$/.exec(h), h = h.replace(/\[\d*\]$/, ""), !y) {
            g[h] = d;
            return;
          }
          g[h] === void 0 && (g[h] = {}), g[h][y[1]] = d;
        };
      case "bracket":
        return (h, d, g) => {
          if (y = /(\[\])$/.exec(h), h = h.replace(/\[\]$/, ""), !y) {
            g[h] = d;
            return;
          }
          if (g[h] === void 0) {
            g[h] = [d];
            return;
          }
          g[h] = [].concat(g[h], d);
        };
      case "colon-list-separator":
        return (h, d, g) => {
          if (y = /(:list)$/.exec(h), h = h.replace(/:list$/, ""), !y) {
            g[h] = d;
            return;
          }
          if (g[h] === void 0) {
            g[h] = [d];
            return;
          }
          g[h] = [].concat(g[h], d);
        };
      case "comma":
      case "separator":
        return (h, d, g) => {
          const o = typeof d == "string" && d.includes(f.arrayFormatSeparator), p = typeof d == "string" && !o && C(d, f).includes(f.arrayFormatSeparator);
          d = p ? C(d, f) : d;
          const k = o || p ? d.split(f.arrayFormatSeparator).map((R) => C(R, f)) : d === null ? d : C(d, f);
          g[h] = k;
        };
      case "bracket-separator":
        return (h, d, g) => {
          const o = /(\[\])$/.test(h);
          if (h = h.replace(/\[\]$/, ""), !o) {
            g[h] = d && C(d, f);
            return;
          }
          const p = d === null ? [] : d.split(f.arrayFormatSeparator).map((k) => C(k, f));
          if (g[h] === void 0) {
            g[h] = p;
            return;
          }
          g[h] = [].concat(g[h], p);
        };
      default:
        return (h, d, g) => {
          if (g[h] === void 0) {
            g[h] = d;
            return;
          }
          g[h] = [].concat(g[h], d);
        };
    }
  }
  function m(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(f, y) {
    return y.encode ? y.strict ? t(f) : encodeURIComponent(f) : f;
  }
  function C(f, y) {
    return y.decode ? n(f) : f;
  }
  function B(f) {
    return Array.isArray(f) ? f.sort() : typeof f == "object" ? B(Object.keys(f)).sort((y, h) => Number(y) - Number(h)).map((y) => f[y]) : f;
  }
  function A(f) {
    const y = f.indexOf("#");
    return y !== -1 && (f = f.slice(0, y)), f;
  }
  function O(f) {
    let y = "";
    const h = f.indexOf("#");
    return h !== -1 && (y = f.slice(h)), y;
  }
  function I(f) {
    f = A(f);
    const y = f.indexOf("?");
    return y === -1 ? "" : f.slice(y + 1);
  }
  function $(f, y) {
    return y.parseNumbers && !Number.isNaN(Number(f)) && typeof f == "string" && f.trim() !== "" ? f = Number(f) : y.parseBooleans && f !== null && (f.toLowerCase() === "true" || f.toLowerCase() === "false") && (f = f.toLowerCase() === "true"), f;
  }
  function W(f, y) {
    y = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, y), m(y.arrayFormatSeparator);
    const h = _(y), d = /* @__PURE__ */ Object.create(null);
    if (typeof f != "string" || (f = f.trim().replace(/^[?#&]/, ""), !f))
      return d;
    for (const g of f.split("&")) {
      if (g === "")
        continue;
      let [o, p] = u(y.decode ? g.replace(/\+/g, " ") : g, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(y.arrayFormat) ? p : C(p, y), h(C(o, y), p, d);
    }
    for (const g of Object.keys(d)) {
      const o = d[g];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = $(o[p], y);
      else
        d[g] = $(o, y);
    }
    return y.sort === !1 ? d : (y.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(y.sort)).reduce((g, o) => {
      const p = d[o];
      return Boolean(p) && typeof p == "object" && !Array.isArray(p) ? g[o] = B(p) : g[o] = p, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = I, e.parse = W, e.stringify = (f, y) => {
    if (!f)
      return "";
    y = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, y), m(y.arrayFormatSeparator);
    const h = (p) => y.skipNull && b(f[p]) || y.skipEmptyString && f[p] === "", d = a(y), g = {};
    for (const p of Object.keys(f))
      h(p) || (g[p] = f[p]);
    const o = Object.keys(g);
    return y.sort !== !1 && o.sort(y.sort), o.map((p) => {
      const k = f[p];
      return k === void 0 ? "" : k === null ? v(p, y) : Array.isArray(k) ? k.length === 0 && y.arrayFormat === "bracket-separator" ? v(p, y) + "[]" : k.reduce(d(p), []).join("&") : v(p, y) + "=" + v(k, y);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (f, y) => {
    y = Object.assign({ decode: !0 }, y);
    const [h, d] = u(f, "#");
    return Object.assign({ url: h.split("?")[0] || "", query: W(I(f), y) }, y && y.parseFragmentIdentifier && d ? { fragmentIdentifier: C(d, y) } : {});
  }, e.stringifyUrl = (f, y) => {
    y = Object.assign({ encode: !0, strict: !0, [E]: !0 }, y);
    const h = A(f.url).split("?")[0] || "", d = e.extract(f.url), g = e.parse(d, { sort: !1 }), o = Object.assign(g, f.query);
    let p = e.stringify(o, y);
    p && (p = `?${p}`);
    let k = O(f.url);
    return f.fragmentIdentifier && (k = `#${y[E] ? v(f.fragmentIdentifier, y) : f.fragmentIdentifier}`), `${h}${p}${k}`;
  }, e.pick = (f, y, h) => {
    h = Object.assign({ parseFragmentIdentifier: !0, [E]: !1 }, h);
    const { url: d, query: g, fragmentIdentifier: o } = e.parseUrl(f, h);
    return e.stringifyUrl({ url: d, query: c(g, y), fragmentIdentifier: o }, h);
  }, e.exclude = (f, y, h) => {
    const d = Array.isArray(y) ? (g) => !y.includes(g) : (g, o) => !y(g, o);
    return e.pick(f, d, h);
  };
})(tf);
var sf = {}, vt = {}, Co;
function af() {
  if (Co)
    return vt;
  Co = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.isBrowserCryptoAvailable = vt.getSubtleCrypto = vt.getBrowerCrypto = void 0;
  function e() {
    return (it == null ? void 0 : it.crypto) || (it == null ? void 0 : it.msCrypto) || {};
  }
  vt.getBrowerCrypto = e;
  function t() {
    const u = e();
    return u.subtle || u.webkitSubtle;
  }
  vt.getSubtleCrypto = t;
  function n() {
    return !!e() && !!t();
  }
  return vt.isBrowserCryptoAvailable = n, vt;
}
var mt = {}, Uo;
function uf() {
  if (Uo)
    return mt;
  Uo = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.isBrowser = mt.isNode = mt.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  mt.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  mt.isNode = t;
  function n() {
    return !e() && !t();
  }
  return mt.isBrowser = n, mt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ht;
  t.__exportStar(af(), e), t.__exportStar(uf(), e);
})(sf);
const ff = () => typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : require("ws");
ff();
var tn = { exports: {} };
(function(e, t) {
  var n = 200, u = "__lodash_hash_undefined__", c = 1, b = 2, E = 9007199254740991, a = "[object Arguments]", _ = "[object Array]", m = "[object AsyncFunction]", v = "[object Boolean]", C = "[object Date]", B = "[object Error]", A = "[object Function]", O = "[object GeneratorFunction]", I = "[object Map]", $ = "[object Number]", W = "[object Null]", f = "[object Object]", y = "[object Promise]", h = "[object Proxy]", d = "[object RegExp]", g = "[object Set]", o = "[object String]", p = "[object Symbol]", k = "[object Undefined]", R = "[object WeakMap]", X = "[object ArrayBuffer]", ee = "[object DataView]", ne = "[object Float32Array]", w = "[object Float64Array]", S = "[object Int8Array]", D = "[object Int16Array]", Z = "[object Int32Array]", z = "[object Uint8Array]", H = "[object Uint8ClampedArray]", K = "[object Uint16Array]", V = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, q = /^\[object .+?Constructor\]$/, ue = /^(?:0|[1-9]\d*)$/, te = {};
  te[ne] = te[w] = te[S] = te[D] = te[Z] = te[z] = te[H] = te[K] = te[V] = !0, te[a] = te[_] = te[X] = te[v] = te[ee] = te[C] = te[B] = te[A] = te[I] = te[$] = te[f] = te[d] = te[g] = te[o] = te[R] = !1;
  var de = typeof it == "object" && it && it.Object === Object && it, M = typeof self == "object" && self && self.Object === Object && self, P = de || M || Function("return this")(), T = t && !t.nodeType && t, i = T && !0 && e && !e.nodeType && e, j = i && i.exports === T, Q = j && de.process, J = function() {
    try {
      return Q && Q.binding && Q.binding("util");
    } catch {
    }
  }(), ce = J && J.isTypedArray;
  function Fe(F, N) {
    for (var G = -1, re = F == null ? 0 : F.length, Ue = 0, _e = []; ++G < re; ) {
      var Me = F[G];
      N(Me, G, F) && (_e[Ue++] = Me);
    }
    return _e;
  }
  function ve(F, N) {
    for (var G = -1, re = N.length, Ue = F.length; ++G < re; )
      F[Ue + G] = N[G];
    return F;
  }
  function Le(F, N) {
    for (var G = -1, re = F == null ? 0 : F.length; ++G < re; )
      if (N(F[G], G, F))
        return !0;
    return !1;
  }
  function Ne(F, N) {
    for (var G = -1, re = Array(F); ++G < F; )
      re[G] = N(G);
    return re;
  }
  function Te(F) {
    return function(N) {
      return F(N);
    };
  }
  function me(F, N) {
    return F.has(N);
  }
  function ge(F, N) {
    return F == null ? void 0 : F[N];
  }
  function le(F) {
    var N = -1, G = Array(F.size);
    return F.forEach(function(re, Ue) {
      G[++N] = [Ue, re];
    }), G;
  }
  function ye(F, N) {
    return function(G) {
      return F(N(G));
    };
  }
  function be(F) {
    var N = -1, G = Array(F.size);
    return F.forEach(function(re) {
      G[++N] = re;
    }), G;
  }
  var fe = Array.prototype, he = Function.prototype, r = Object.prototype, s = P["__core-js_shared__"], l = he.toString, L = r.hasOwnProperty, U = function() {
    var F = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "");
    return F ? "Symbol(src)_1." + F : "";
  }(), x = r.toString, Y = RegExp("^" + l.call(L).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ie = j ? P.Buffer : void 0, ae = P.Symbol, Ee = P.Uint8Array, we = r.propertyIsEnumerable, Oe = fe.splice, st = ae ? ae.toStringTag : void 0, Ot = Object.getOwnPropertySymbols, Vt = ie ? ie.isBuffer : void 0, lr = ye(Object.keys, Object), xe = Pt(P, "DataView"), ke = Pt(P, "Map"), Re = Pt(P, "Promise"), He = Pt(P, "Set"), ze = Pt(P, "WeakMap"), Pe = Pt(Object, "create"), Ye = jt(xe), We = jt(ke), Ve = jt(Re), Ze = jt(He), Ge = jt(ze), De = ae ? ae.prototype : void 0, $e = De ? De.valueOf : void 0;
  function Ie(F) {
    var N = -1, G = F == null ? 0 : F.length;
    for (this.clear(); ++N < G; ) {
      var re = F[N];
      this.set(re[0], re[1]);
    }
  }
  function Ke() {
    this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
  }
  function Xe(F) {
    var N = this.has(F) && delete this.__data__[F];
    return this.size -= N ? 1 : 0, N;
  }
  function Si(F) {
    var N = this.__data__;
    if (Pe) {
      var G = N[F];
      return G === u ? void 0 : G;
    }
    return L.call(N, F) ? N[F] : void 0;
  }
  function Oi(F) {
    var N = this.__data__;
    return Pe ? N[F] !== void 0 : L.call(N, F);
  }
  function Ai(F, N) {
    var G = this.__data__;
    return this.size += this.has(F) ? 0 : 1, G[F] = Pe && N === void 0 ? u : N, this;
  }
  Ie.prototype.clear = Ke, Ie.prototype.delete = Xe, Ie.prototype.get = Si, Ie.prototype.has = Oi, Ie.prototype.set = Ai;
  function bt(F) {
    var N = -1, G = F == null ? 0 : F.length;
    for (this.clear(); ++N < G; ) {
      var re = F[N];
      this.set(re[0], re[1]);
    }
  }
  function ji() {
    this.__data__ = [], this.size = 0;
  }
  function Ci(F) {
    var N = this.__data__, G = hr(N, F);
    if (G < 0)
      return !1;
    var re = N.length - 1;
    return G == re ? N.pop() : Oe.call(N, G, 1), --this.size, !0;
  }
  function Ui(F) {
    var N = this.__data__, G = hr(N, F);
    return G < 0 ? void 0 : N[G][1];
  }
  function Ti(F) {
    return hr(this.__data__, F) > -1;
  }
  function Ii(F, N) {
    var G = this.__data__, re = hr(G, F);
    return re < 0 ? (++this.size, G.push([F, N])) : G[re][1] = N, this;
  }
  bt.prototype.clear = ji, bt.prototype.delete = Ci, bt.prototype.get = Ui, bt.prototype.has = Ti, bt.prototype.set = Ii;
  function At(F) {
    var N = -1, G = F == null ? 0 : F.length;
    for (this.clear(); ++N < G; ) {
      var re = F[N];
      this.set(re[0], re[1]);
    }
  }
  function Ni() {
    this.size = 0, this.__data__ = { hash: new Ie(), map: new (ke || bt)(), string: new Ie() };
  }
  function Bi(F) {
    var N = pr(this, F).delete(F);
    return this.size -= N ? 1 : 0, N;
  }
  function ki(F) {
    return pr(this, F).get(F);
  }
  function Pi(F) {
    return pr(this, F).has(F);
  }
  function Mi(F, N) {
    var G = pr(this, F), re = G.size;
    return G.set(F, N), this.size += G.size == re ? 0 : 1, this;
  }
  At.prototype.clear = Ni, At.prototype.delete = Bi, At.prototype.get = ki, At.prototype.has = Pi, At.prototype.set = Mi;
  function cr(F) {
    var N = -1, G = F == null ? 0 : F.length;
    for (this.__data__ = new At(); ++N < G; )
      this.add(F[N]);
  }
  function xi(F) {
    return this.__data__.set(F, u), this;
  }
  function Ri(F) {
    return this.__data__.has(F);
  }
  cr.prototype.add = cr.prototype.push = xi, cr.prototype.has = Ri;
  function wt(F) {
    var N = this.__data__ = new bt(F);
    this.size = N.size;
  }
  function Hi() {
    this.__data__ = new bt(), this.size = 0;
  }
  function zi(F) {
    var N = this.__data__, G = N.delete(F);
    return this.size = N.size, G;
  }
  function $i(F) {
    return this.__data__.get(F);
  }
  function Di(F) {
    return this.__data__.has(F);
  }
  function Yi(F, N) {
    var G = this.__data__;
    if (G instanceof bt) {
      var re = G.__data__;
      if (!ke || re.length < n - 1)
        return re.push([F, N]), this.size = ++G.size, this;
      G = this.__data__ = new At(re);
    }
    return G.set(F, N), this.size = G.size, this;
  }
  wt.prototype.clear = Hi, wt.prototype.delete = zi, wt.prototype.get = $i, wt.prototype.has = Di, wt.prototype.set = Yi;
  function Wi(F, N) {
    var G = dr(F), re = !G && ss(F), Ue = !G && !re && Ir(F), _e = !G && !re && !Ue && An(F), Me = G || re || Ue || _e, qe = Me ? Ne(F.length, String) : [], Qe = qe.length;
    for (var Be in F)
      (N || L.call(F, Be)) && !(Me && (Be == "length" || Ue && (Be == "offset" || Be == "parent") || _e && (Be == "buffer" || Be == "byteLength" || Be == "byteOffset") || ts(Be, Qe))) && qe.push(Be);
    return qe;
  }
  function hr(F, N) {
    for (var G = F.length; G--; )
      if (Fn(F[G][0], N))
        return G;
    return -1;
  }
  function Vi(F, N, G) {
    var re = N(F);
    return dr(F) ? re : ve(re, G(F));
  }
  function Zt(F) {
    return F == null ? F === void 0 ? k : W : st && st in Object(F) ? Ji(F) : is(F);
  }
  function vn(F) {
    return Gt(F) && Zt(F) == a;
  }
  function mn(F, N, G, re, Ue) {
    return F === N ? !0 : F == null || N == null || !Gt(F) && !Gt(N) ? F !== F && N !== N : Zi(F, N, G, re, mn, Ue);
  }
  function Zi(F, N, G, re, Ue, _e) {
    var Me = dr(F), qe = dr(N), Qe = Me ? _ : Et(F), Be = qe ? _ : Et(N);
    Qe = Qe == a ? f : Qe, Be = Be == a ? f : Be;
    var at = Qe == f, pt = Be == f, tt = Qe == Be;
    if (tt && Ir(F)) {
      if (!Ir(N))
        return !1;
      Me = !0, at = !1;
    }
    if (tt && !at)
      return _e || (_e = new wt()), Me || An(F) ? wn(F, N, G, re, Ue, _e) : qi(F, N, Qe, G, re, Ue, _e);
    if (!(G & c)) {
      var ft = at && L.call(F, "__wrapped__"), lt = pt && L.call(N, "__wrapped__");
      if (ft || lt) {
        var Ft = ft ? F.value() : F, _t = lt ? N.value() : N;
        return _e || (_e = new wt()), Ue(Ft, _t, G, re, _e);
      }
    }
    return tt ? (_e || (_e = new wt()), Qi(F, N, G, re, Ue, _e)) : !1;
  }
  function Gi(F) {
    if (!On(F) || ns(F))
      return !1;
    var N = Ln(F) ? Y : q;
    return N.test(jt(F));
  }
  function Ki(F) {
    return Gt(F) && Sn(F.length) && !!te[Zt(F)];
  }
  function Xi(F) {
    if (!os(F))
      return lr(F);
    var N = [];
    for (var G in Object(F))
      L.call(F, G) && G != "constructor" && N.push(G);
    return N;
  }
  function wn(F, N, G, re, Ue, _e) {
    var Me = G & c, qe = F.length, Qe = N.length;
    if (qe != Qe && !(Me && Qe > qe))
      return !1;
    var Be = _e.get(F);
    if (Be && _e.get(N))
      return Be == N;
    var at = -1, pt = !0, tt = G & b ? new cr() : void 0;
    for (_e.set(F, N), _e.set(N, F); ++at < qe; ) {
      var ft = F[at], lt = N[at];
      if (re)
        var Ft = Me ? re(lt, ft, at, N, F, _e) : re(ft, lt, at, F, N, _e);
      if (Ft !== void 0) {
        if (Ft)
          continue;
        pt = !1;
        break;
      }
      if (tt) {
        if (!Le(N, function(_t, Ct) {
          if (!me(tt, Ct) && (ft === _t || Ue(ft, _t, G, re, _e)))
            return tt.push(Ct);
        })) {
          pt = !1;
          break;
        }
      } else if (!(ft === lt || Ue(ft, lt, G, re, _e))) {
        pt = !1;
        break;
      }
    }
    return _e.delete(F), _e.delete(N), pt;
  }
  function qi(F, N, G, re, Ue, _e, Me) {
    switch (G) {
      case ee:
        if (F.byteLength != N.byteLength || F.byteOffset != N.byteOffset)
          return !1;
        F = F.buffer, N = N.buffer;
      case X:
        return !(F.byteLength != N.byteLength || !_e(new Ee(F), new Ee(N)));
      case v:
      case C:
      case $:
        return Fn(+F, +N);
      case B:
        return F.name == N.name && F.message == N.message;
      case d:
      case o:
        return F == N + "";
      case I:
        var qe = le;
      case g:
        var Qe = re & c;
        if (qe || (qe = be), F.size != N.size && !Qe)
          return !1;
        var Be = Me.get(F);
        if (Be)
          return Be == N;
        re |= b, Me.set(F, N);
        var at = wn(qe(F), qe(N), re, Ue, _e, Me);
        return Me.delete(F), at;
      case p:
        if ($e)
          return $e.call(F) == $e.call(N);
    }
    return !1;
  }
  function Qi(F, N, G, re, Ue, _e) {
    var Me = G & c, qe = En(F), Qe = qe.length, Be = En(N), at = Be.length;
    if (Qe != at && !Me)
      return !1;
    for (var pt = Qe; pt--; ) {
      var tt = qe[pt];
      if (!(Me ? tt in N : L.call(N, tt)))
        return !1;
    }
    var ft = _e.get(F);
    if (ft && _e.get(N))
      return ft == N;
    var lt = !0;
    _e.set(F, N), _e.set(N, F);
    for (var Ft = Me; ++pt < Qe; ) {
      tt = qe[pt];
      var _t = F[tt], Ct = N[tt];
      if (re)
        var jn = Me ? re(Ct, _t, tt, N, F, _e) : re(_t, Ct, tt, F, N, _e);
      if (!(jn === void 0 ? _t === Ct || Ue(_t, Ct, G, re, _e) : jn)) {
        lt = !1;
        break;
      }
      Ft || (Ft = tt == "constructor");
    }
    if (lt && !Ft) {
      var yr = F.constructor, gr = N.constructor;
      yr != gr && "constructor" in F && "constructor" in N && !(typeof yr == "function" && yr instanceof yr && typeof gr == "function" && gr instanceof gr) && (lt = !1);
    }
    return _e.delete(F), _e.delete(N), lt;
  }
  function En(F) {
    return Vi(F, fs, es);
  }
  function pr(F, N) {
    var G = F.__data__;
    return rs(N) ? G[typeof N == "string" ? "string" : "hash"] : G.map;
  }
  function Pt(F, N) {
    var G = ge(F, N);
    return Gi(G) ? G : void 0;
  }
  function Ji(F) {
    var N = L.call(F, st), G = F[st];
    try {
      F[st] = void 0;
      var re = !0;
    } catch {
    }
    var Ue = x.call(F);
    return re && (N ? F[st] = G : delete F[st]), Ue;
  }
  var es = Ot ? function(F) {
    return F == null ? [] : (F = Object(F), Fe(Ot(F), function(N) {
      return we.call(F, N);
    }));
  } : ls, Et = Zt;
  (xe && Et(new xe(new ArrayBuffer(1))) != ee || ke && Et(new ke()) != I || Re && Et(Re.resolve()) != y || He && Et(new He()) != g || ze && Et(new ze()) != R) && (Et = function(F) {
    var N = Zt(F), G = N == f ? F.constructor : void 0, re = G ? jt(G) : "";
    if (re)
      switch (re) {
        case Ye:
          return ee;
        case We:
          return I;
        case Ve:
          return y;
        case Ze:
          return g;
        case Ge:
          return R;
      }
    return N;
  });
  function ts(F, N) {
    return N = N != null ? N : E, !!N && (typeof F == "number" || ue.test(F)) && F > -1 && F % 1 == 0 && F < N;
  }
  function rs(F) {
    var N = typeof F;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? F !== "__proto__" : F === null;
  }
  function ns(F) {
    return !!U && U in F;
  }
  function os(F) {
    var N = F && F.constructor, G = typeof N == "function" && N.prototype || r;
    return F === G;
  }
  function is(F) {
    return x.call(F);
  }
  function jt(F) {
    if (F != null) {
      try {
        return l.call(F);
      } catch {
      }
      try {
        return F + "";
      } catch {
      }
    }
    return "";
  }
  function Fn(F, N) {
    return F === N || F !== F && N !== N;
  }
  var ss = vn(function() {
    return arguments;
  }()) ? vn : function(F) {
    return Gt(F) && L.call(F, "callee") && !we.call(F, "callee");
  }, dr = Array.isArray;
  function as(F) {
    return F != null && Sn(F.length) && !Ln(F);
  }
  var Ir = Vt || cs;
  function us(F, N) {
    return mn(F, N);
  }
  function Ln(F) {
    if (!On(F))
      return !1;
    var N = Zt(F);
    return N == A || N == O || N == m || N == h;
  }
  function Sn(F) {
    return typeof F == "number" && F > -1 && F % 1 == 0 && F <= E;
  }
  function On(F) {
    var N = typeof F;
    return F != null && (N == "object" || N == "function");
  }
  function Gt(F) {
    return F != null && typeof F == "object";
  }
  var An = ce ? Te(ce) : Ki;
  function fs(F) {
    return as(F) ? Wi(F) : Xi(F);
  }
  function ls() {
    return [];
  }
  function cs() {
    return !1;
  }
  e.exports = us;
})(tn, tn.exports);
tn.exports;
function lf(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var n = new Uint8Array(256), u = 0; u < n.length; u++)
    n[u] = 255;
  for (var c = 0; c < e.length; c++) {
    var b = e.charAt(c), E = b.charCodeAt(0);
    if (n[E] !== 255)
      throw new TypeError(b + " is ambiguous");
    n[E] = c;
  }
  var a = e.length, _ = e.charAt(0), m = Math.log(a) / Math.log(256), v = Math.log(256) / Math.log(a);
  function C(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var I = 0, $ = 0, W = 0, f = O.length; W !== f && O[W] === 0; )
      W++, I++;
    for (var y = (f - W) * v + 1 >>> 0, h = new Uint8Array(y); W !== f; ) {
      for (var d = O[W], g = 0, o = y - 1; (d !== 0 || g < $) && o !== -1; o--, g++)
        d += 256 * h[o] >>> 0, h[o] = d % a >>> 0, d = d / a >>> 0;
      if (d !== 0)
        throw new Error("Non-zero carry");
      $ = g, W++;
    }
    for (var p = y - $; p !== y && h[p] === 0; )
      p++;
    for (var k = _.repeat(I); p < y; ++p)
      k += e.charAt(h[p]);
    return k;
  }
  function B(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var I = 0;
    if (O[I] !== " ") {
      for (var $ = 0, W = 0; O[I] === _; )
        $++, I++;
      for (var f = (O.length - I) * m + 1 >>> 0, y = new Uint8Array(f); O[I]; ) {
        var h = n[O.charCodeAt(I)];
        if (h === 255)
          return;
        for (var d = 0, g = f - 1; (h !== 0 || d < W) && g !== -1; g--, d++)
          h += a * y[g] >>> 0, y[g] = h % 256 >>> 0, h = h / 256 >>> 0;
        if (h !== 0)
          throw new Error("Non-zero carry");
        W = d, I++;
      }
      if (O[I] !== " ") {
        for (var o = f - W; o !== f && y[o] === 0; )
          o++;
        for (var p = new Uint8Array($ + (f - o)), k = $; o !== f; )
          p[k++] = y[o++];
        return p;
      }
    }
  }
  function A(O) {
    var I = B(O);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return { encode: C, decodeUnsafe: B, decode: A };
}
var cf = lf, hf = cf;
const di = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, pf = (e) => new TextEncoder().encode(e), df = (e) => new TextDecoder().decode(e);
class yf {
  constructor(t, n, u) {
    this.name = t, this.prefix = n, this.baseEncode = u;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class gf {
  constructor(t, n, u) {
    if (this.name = t, this.prefix = n, n.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = n.codePointAt(0), this.baseDecode = u;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return yi(this, t);
  }
}
class bf {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return yi(this, t);
  }
  decode(t) {
    const n = t[0], u = this.decoders[n];
    if (u)
      return u.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const yi = (e, t) => new bf({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class _f {
  constructor(t, n, u, c) {
    this.name = t, this.prefix = n, this.baseEncode = u, this.baseDecode = c, this.encoder = new yf(t, n, u), this.decoder = new gf(t, n, c);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Tr = ({ name: e, prefix: t, encode: n, decode: u }) => new _f(e, t, n, u), fr = ({ prefix: e, name: t, alphabet: n }) => {
  const { encode: u, decode: c } = hf(n, t);
  return Tr({ prefix: e, name: t, encode: u, decode: (b) => di(c(b)) });
}, vf = (e, t, n, u) => {
  const c = {};
  for (let v = 0; v < t.length; ++v)
    c[t[v]] = v;
  let b = e.length;
  for (; e[b - 1] === "="; )
    --b;
  const E = new Uint8Array(b * n / 8 | 0);
  let a = 0, _ = 0, m = 0;
  for (let v = 0; v < b; ++v) {
    const C = c[e[v]];
    if (C === void 0)
      throw new SyntaxError(`Non-${u} character`);
    _ = _ << n | C, a += n, a >= 8 && (a -= 8, E[m++] = 255 & _ >> a);
  }
  if (a >= n || 255 & _ << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return E;
}, mf = (e, t, n) => {
  const u = t[t.length - 1] === "=", c = (1 << n) - 1;
  let b = "", E = 0, a = 0;
  for (let _ = 0; _ < e.length; ++_)
    for (a = a << 8 | e[_], E += 8; E > n; )
      E -= n, b += t[c & a >> E];
  if (E && (b += t[c & a << n - E]), u)
    for (; b.length * n & 7; )
      b += "=";
  return b;
}, et = ({ name: e, prefix: t, bitsPerChar: n, alphabet: u }) => Tr({ prefix: t, name: e, encode(c) {
  return mf(c, u, n);
}, decode(c) {
  return vf(c, u, n, e);
} }), wf = Tr({ prefix: "\0", name: "identity", encode: (e) => df(e), decode: (e) => pf(e) });
var Ef = Object.freeze({ __proto__: null, identity: wf });
const Ff = et({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Lf = Object.freeze({ __proto__: null, base2: Ff });
const Sf = et({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Of = Object.freeze({ __proto__: null, base8: Sf });
const Af = fr({ prefix: "9", name: "base10", alphabet: "0123456789" });
var jf = Object.freeze({ __proto__: null, base10: Af });
const Cf = et({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Uf = et({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Tf = Object.freeze({ __proto__: null, base16: Cf, base16upper: Uf });
const If = et({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Nf = et({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Bf = et({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), kf = et({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Pf = et({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Mf = et({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), xf = et({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Rf = et({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Hf = et({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var zf = Object.freeze({ __proto__: null, base32: If, base32upper: Nf, base32pad: Bf, base32padupper: kf, base32hex: Pf, base32hexupper: Mf, base32hexpad: xf, base32hexpadupper: Rf, base32z: Hf });
const $f = fr({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Df = fr({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Yf = Object.freeze({ __proto__: null, base36: $f, base36upper: Df });
const Wf = fr({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Vf = fr({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Zf = Object.freeze({ __proto__: null, base58btc: Wf, base58flickr: Vf });
const Gf = et({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Kf = et({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Xf = et({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), qf = et({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Qf = Object.freeze({ __proto__: null, base64: Gf, base64pad: Kf, base64url: Xf, base64urlpad: qf });
const gi = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Jf = gi.reduce((e, t, n) => (e[n] = t, e), []), el = gi.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
function tl(e) {
  return e.reduce((t, n) => (t += Jf[n], t), "");
}
function rl(e) {
  const t = [];
  for (const n of e) {
    const u = el[n.codePointAt(0)];
    if (u === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    t.push(u);
  }
  return new Uint8Array(t);
}
const nl = Tr({ prefix: "\u{1F680}", name: "base256emoji", encode: tl, decode: rl });
var ol = Object.freeze({ __proto__: null, base256emoji: nl }), il = bi, To = 128, sl = 127, al = ~sl, ul = Math.pow(2, 31);
function bi(e, t, n) {
  t = t || [], n = n || 0;
  for (var u = n; e >= ul; )
    t[n++] = e & 255 | To, e /= 128;
  for (; e & al; )
    t[n++] = e & 255 | To, e >>>= 7;
  return t[n] = e | 0, bi.bytes = n - u + 1, t;
}
var fl = rn, ll = 128, Io = 127;
function rn(e, u) {
  var n = 0, u = u || 0, c = 0, b = u, E, a = e.length;
  do {
    if (b >= a)
      throw rn.bytes = 0, new RangeError("Could not decode varint");
    E = e[b++], n += c < 28 ? (E & Io) << c : (E & Io) * Math.pow(2, c), c += 7;
  } while (E >= ll);
  return rn.bytes = b - u, n;
}
var cl = Math.pow(2, 7), hl = Math.pow(2, 14), pl = Math.pow(2, 21), dl = Math.pow(2, 28), yl = Math.pow(2, 35), gl = Math.pow(2, 42), bl = Math.pow(2, 49), _l = Math.pow(2, 56), vl = Math.pow(2, 63), ml = function(e) {
  return e < cl ? 1 : e < hl ? 2 : e < pl ? 3 : e < dl ? 4 : e < yl ? 5 : e < gl ? 6 : e < bl ? 7 : e < _l ? 8 : e < vl ? 9 : 10;
}, wl = { encode: il, decode: fl, encodingLength: ml }, _i = wl;
const No = (e, t, n = 0) => (_i.encode(e, t, n), t), Bo = (e) => _i.encodingLength(e), nn = (e, t) => {
  const n = t.byteLength, u = Bo(e), c = u + Bo(n), b = new Uint8Array(c + n);
  return No(e, b, 0), No(n, b, u), b.set(t, c), new El(e, n, t, b);
};
class El {
  constructor(t, n, u, c) {
    this.code = t, this.size = n, this.digest = u, this.bytes = c;
  }
}
const vi = ({ name: e, code: t, encode: n }) => new Fl(e, t, n);
class Fl {
  constructor(t, n, u) {
    this.name = t, this.code = n, this.encode = u;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const n = this.encode(t);
      return n instanceof Uint8Array ? nn(this.code, n) : n.then((u) => nn(this.code, u));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const mi = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), Ll = vi({ name: "sha2-256", code: 18, encode: mi("SHA-256") }), Sl = vi({ name: "sha2-512", code: 19, encode: mi("SHA-512") });
var Ol = Object.freeze({ __proto__: null, sha256: Ll, sha512: Sl });
const wi = 0, Al = "identity", Ei = di, jl = (e) => nn(wi, Ei(e)), Cl = { code: wi, name: Al, encode: Ei, digest: jl };
var Ul = Object.freeze({ __proto__: null, identity: Cl });
new TextEncoder(), new TextDecoder();
({ ...Ef, ...Lf, ...Of, ...jf, ...Tf, ...zf, ...Yf, ...Zf, ...Qf, ...ol });
({ ...Ol, ...Ul });
Se.ONE_DAY;
Se.SIX_HOURS;
Se.ONE_SECOND;
Se.FIVE_SECONDS * 1e3;
Se.ONE_DAY, Se.ONE_DAY, Se.THIRTY_SECONDS, Se.THIRTY_SECONDS, Se.ONE_DAY, Se.ONE_DAY;
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.getWindowMetadata = void 0;
const ko = je;
function Tl() {
  let e, t;
  try {
    e = ko.getDocumentOrThrow(), t = ko.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const v = e.getElementsByTagName("link"), C = [];
    for (let B = 0; B < v.length; B++) {
      const A = v[B], O = A.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const I = A.getAttribute("href");
        if (I)
          if (I.toLowerCase().indexOf("https:") === -1 && I.toLowerCase().indexOf("http:") === -1 && I.indexOf("//") !== 0) {
            let $ = t.protocol + "//" + t.host;
            if (I.indexOf("/") === 0)
              $ += I;
            else {
              const W = t.pathname.split("/");
              W.pop();
              const f = W.join("/");
              $ += f + "/" + I;
            }
            C.push($);
          } else if (I.indexOf("//") === 0) {
            const $ = t.protocol + I;
            C.push($);
          } else
            C.push(I);
      }
    }
    return C;
  }
  function u(...v) {
    const C = e.getElementsByTagName("meta");
    for (let B = 0; B < C.length; B++) {
      const A = C[B], O = ["itemprop", "property", "name"].map((I) => A.getAttribute(I)).filter((I) => I ? v.includes(I) : !1);
      if (O.length && O) {
        const I = A.getAttribute("content");
        if (I)
          return I;
      }
    }
    return "";
  }
  function c() {
    let v = u("name", "og:site_name", "og:title", "twitter:title");
    return v || (v = e.title), v;
  }
  function b() {
    return u("description", "og:description", "twitter:description", "keywords");
  }
  const E = c(), a = b(), _ = t.origin, m = n();
  return { description: a, url: _, icons: m, name: E };
}
gn.getWindowMetadata = Tl;
var Il = {}, Nl = function(e, t) {
  for (var n = {}, u = Object.keys(e), c = Array.isArray(t), b = 0; b < u.length; b++) {
    var E = u[b], a = e[E];
    (c ? t.indexOf(E) !== -1 : t(E, a, e)) && (n[E] = a);
  }
  return n;
};
(function(e) {
  const t = pn, n = dn, u = yn, c = Nl, b = (f) => f == null, E = Symbol("encodeFragmentIdentifier");
  function a(f) {
    switch (f.arrayFormat) {
      case "index":
        return (y) => (h, d) => {
          const g = h.length;
          return d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), "[", g, "]"].join("")] : [...h, [v(y, f), "[", v(g, f), "]=", v(d, f)].join("")];
        };
      case "bracket":
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), "[]"].join("")] : [...h, [v(y, f), "[]=", v(d, f)].join("")];
      case "colon-list-separator":
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), ":list="].join("")] : [...h, [v(y, f), ":list=", v(d, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const y = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (h) => (d, g) => g === void 0 || f.skipNull && g === null || f.skipEmptyString && g === "" ? d : (g = g === null ? "" : g, d.length === 0 ? [[v(h, f), y, v(g, f)].join("")] : [[d, v(g, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, v(y, f)] : [...h, [v(y, f), "=", v(d, f)].join("")];
    }
  }
  function _(f) {
    let y;
    switch (f.arrayFormat) {
      case "index":
        return (h, d, g) => {
          if (y = /\[(\d*)\]$/.exec(h), h = h.replace(/\[\d*\]$/, ""), !y) {
            g[h] = d;
            return;
          }
          g[h] === void 0 && (g[h] = {}), g[h][y[1]] = d;
        };
      case "bracket":
        return (h, d, g) => {
          if (y = /(\[\])$/.exec(h), h = h.replace(/\[\]$/, ""), !y) {
            g[h] = d;
            return;
          }
          if (g[h] === void 0) {
            g[h] = [d];
            return;
          }
          g[h] = [].concat(g[h], d);
        };
      case "colon-list-separator":
        return (h, d, g) => {
          if (y = /(:list)$/.exec(h), h = h.replace(/:list$/, ""), !y) {
            g[h] = d;
            return;
          }
          if (g[h] === void 0) {
            g[h] = [d];
            return;
          }
          g[h] = [].concat(g[h], d);
        };
      case "comma":
      case "separator":
        return (h, d, g) => {
          const o = typeof d == "string" && d.includes(f.arrayFormatSeparator), p = typeof d == "string" && !o && C(d, f).includes(f.arrayFormatSeparator);
          d = p ? C(d, f) : d;
          const k = o || p ? d.split(f.arrayFormatSeparator).map((R) => C(R, f)) : d === null ? d : C(d, f);
          g[h] = k;
        };
      case "bracket-separator":
        return (h, d, g) => {
          const o = /(\[\])$/.test(h);
          if (h = h.replace(/\[\]$/, ""), !o) {
            g[h] = d && C(d, f);
            return;
          }
          const p = d === null ? [] : d.split(f.arrayFormatSeparator).map((k) => C(k, f));
          if (g[h] === void 0) {
            g[h] = p;
            return;
          }
          g[h] = [].concat(g[h], p);
        };
      default:
        return (h, d, g) => {
          if (g[h] === void 0) {
            g[h] = d;
            return;
          }
          g[h] = [].concat(g[h], d);
        };
    }
  }
  function m(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(f, y) {
    return y.encode ? y.strict ? t(f) : encodeURIComponent(f) : f;
  }
  function C(f, y) {
    return y.decode ? n(f) : f;
  }
  function B(f) {
    return Array.isArray(f) ? f.sort() : typeof f == "object" ? B(Object.keys(f)).sort((y, h) => Number(y) - Number(h)).map((y) => f[y]) : f;
  }
  function A(f) {
    const y = f.indexOf("#");
    return y !== -1 && (f = f.slice(0, y)), f;
  }
  function O(f) {
    let y = "";
    const h = f.indexOf("#");
    return h !== -1 && (y = f.slice(h)), y;
  }
  function I(f) {
    f = A(f);
    const y = f.indexOf("?");
    return y === -1 ? "" : f.slice(y + 1);
  }
  function $(f, y) {
    return y.parseNumbers && !Number.isNaN(Number(f)) && typeof f == "string" && f.trim() !== "" ? f = Number(f) : y.parseBooleans && f !== null && (f.toLowerCase() === "true" || f.toLowerCase() === "false") && (f = f.toLowerCase() === "true"), f;
  }
  function W(f, y) {
    y = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, y), m(y.arrayFormatSeparator);
    const h = _(y), d = /* @__PURE__ */ Object.create(null);
    if (typeof f != "string" || (f = f.trim().replace(/^[?#&]/, ""), !f))
      return d;
    for (const g of f.split("&")) {
      if (g === "")
        continue;
      let [o, p] = u(y.decode ? g.replace(/\+/g, " ") : g, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(y.arrayFormat) ? p : C(p, y), h(C(o, y), p, d);
    }
    for (const g of Object.keys(d)) {
      const o = d[g];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = $(o[p], y);
      else
        d[g] = $(o, y);
    }
    return y.sort === !1 ? d : (y.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(y.sort)).reduce((g, o) => {
      const p = d[o];
      return Boolean(p) && typeof p == "object" && !Array.isArray(p) ? g[o] = B(p) : g[o] = p, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = I, e.parse = W, e.stringify = (f, y) => {
    if (!f)
      return "";
    y = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, y), m(y.arrayFormatSeparator);
    const h = (p) => y.skipNull && b(f[p]) || y.skipEmptyString && f[p] === "", d = a(y), g = {};
    for (const p of Object.keys(f))
      h(p) || (g[p] = f[p]);
    const o = Object.keys(g);
    return y.sort !== !1 && o.sort(y.sort), o.map((p) => {
      const k = f[p];
      return k === void 0 ? "" : k === null ? v(p, y) : Array.isArray(k) ? k.length === 0 && y.arrayFormat === "bracket-separator" ? v(p, y) + "[]" : k.reduce(d(p), []).join("&") : v(p, y) + "=" + v(k, y);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (f, y) => {
    y = Object.assign({ decode: !0 }, y);
    const [h, d] = u(f, "#");
    return Object.assign({ url: h.split("?")[0] || "", query: W(I(f), y) }, y && y.parseFragmentIdentifier && d ? { fragmentIdentifier: C(d, y) } : {});
  }, e.stringifyUrl = (f, y) => {
    y = Object.assign({ encode: !0, strict: !0, [E]: !0 }, y);
    const h = A(f.url).split("?")[0] || "", d = e.extract(f.url), g = e.parse(d, { sort: !1 }), o = Object.assign(g, f.query);
    let p = e.stringify(o, y);
    p && (p = `?${p}`);
    let k = O(f.url);
    return f.fragmentIdentifier && (k = `#${y[E] ? v(f.fragmentIdentifier, y) : f.fragmentIdentifier}`), `${h}${p}${k}`;
  }, e.pick = (f, y, h) => {
    h = Object.assign({ parseFragmentIdentifier: !0, [E]: !1 }, h);
    const { url: d, query: g, fragmentIdentifier: o } = e.parseUrl(f, h);
    return e.stringifyUrl({ url: d, query: c(g, y), fragmentIdentifier: o }, h);
  }, e.exclude = (f, y, h) => {
    const d = Array.isArray(y) ? (g) => !y.includes(g) : (g, o) => !y(g, o);
    return e.pick(f, d, h);
  };
})(Il);
Se.SEVEN_DAYS;
Se.FIVE_MINUTES, Se.FIVE_MINUTES, Se.FIVE_MINUTES, Se.FIVE_MINUTES, Se.ONE_DAY, Se.ONE_DAY, Se.ONE_DAY, Se.ONE_DAY, Se.FIVE_MINUTES, Se.FIVE_MINUTES, Se.FIVE_MINUTES, Se.FIVE_MINUTES, Se.ONE_DAY, Se.ONE_DAY, Se.THIRTY_SECONDS, Se.THIRTY_SECONDS;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 }), on.getWindowMetadata = void 0;
const Po = je;
function Bl() {
  let e, t;
  try {
    e = Po.getDocumentOrThrow(), t = Po.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const v = e.getElementsByTagName("link"), C = [];
    for (let B = 0; B < v.length; B++) {
      const A = v[B], O = A.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const I = A.getAttribute("href");
        if (I)
          if (I.toLowerCase().indexOf("https:") === -1 && I.toLowerCase().indexOf("http:") === -1 && I.indexOf("//") !== 0) {
            let $ = t.protocol + "//" + t.host;
            if (I.indexOf("/") === 0)
              $ += I;
            else {
              const W = t.pathname.split("/");
              W.pop();
              const f = W.join("/");
              $ += f + "/" + I;
            }
            C.push($);
          } else if (I.indexOf("//") === 0) {
            const $ = t.protocol + I;
            C.push($);
          } else
            C.push(I);
      }
    }
    return C;
  }
  function u(...v) {
    const C = e.getElementsByTagName("meta");
    for (let B = 0; B < C.length; B++) {
      const A = C[B], O = ["itemprop", "property", "name"].map((I) => A.getAttribute(I)).filter((I) => I ? v.includes(I) : !1);
      if (O.length && O) {
        const I = A.getAttribute("content");
        if (I)
          return I;
      }
    }
    return "";
  }
  function c() {
    let v = u("name", "og:site_name", "og:title", "twitter:title");
    return v || (v = e.title), v;
  }
  function b() {
    return u("description", "og:description", "twitter:description", "keywords");
  }
  const E = c(), a = b(), _ = t.origin, m = n();
  return { description: a, url: _, icons: m, name: E };
}
on.getWindowMetadata = Bl;
var kl = {}, Pl = function(e, t) {
  for (var n = {}, u = Object.keys(e), c = Array.isArray(t), b = 0; b < u.length; b++) {
    var E = u[b], a = e[E];
    (c ? t.indexOf(E) !== -1 : t(E, a, e)) && (n[E] = a);
  }
  return n;
};
(function(e) {
  const t = pn, n = dn, u = yn, c = Pl, b = (f) => f == null, E = Symbol("encodeFragmentIdentifier");
  function a(f) {
    switch (f.arrayFormat) {
      case "index":
        return (y) => (h, d) => {
          const g = h.length;
          return d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), "[", g, "]"].join("")] : [...h, [v(y, f), "[", v(g, f), "]=", v(d, f)].join("")];
        };
      case "bracket":
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), "[]"].join("")] : [...h, [v(y, f), "[]=", v(d, f)].join("")];
      case "colon-list-separator":
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, [v(y, f), ":list="].join("")] : [...h, [v(y, f), ":list=", v(d, f)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const y = f.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (h) => (d, g) => g === void 0 || f.skipNull && g === null || f.skipEmptyString && g === "" ? d : (g = g === null ? "" : g, d.length === 0 ? [[v(h, f), y, v(g, f)].join("")] : [[d, v(g, f)].join(f.arrayFormatSeparator)]);
      }
      default:
        return (y) => (h, d) => d === void 0 || f.skipNull && d === null || f.skipEmptyString && d === "" ? h : d === null ? [...h, v(y, f)] : [...h, [v(y, f), "=", v(d, f)].join("")];
    }
  }
  function _(f) {
    let y;
    switch (f.arrayFormat) {
      case "index":
        return (h, d, g) => {
          if (y = /\[(\d*)\]$/.exec(h), h = h.replace(/\[\d*\]$/, ""), !y) {
            g[h] = d;
            return;
          }
          g[h] === void 0 && (g[h] = {}), g[h][y[1]] = d;
        };
      case "bracket":
        return (h, d, g) => {
          if (y = /(\[\])$/.exec(h), h = h.replace(/\[\]$/, ""), !y) {
            g[h] = d;
            return;
          }
          if (g[h] === void 0) {
            g[h] = [d];
            return;
          }
          g[h] = [].concat(g[h], d);
        };
      case "colon-list-separator":
        return (h, d, g) => {
          if (y = /(:list)$/.exec(h), h = h.replace(/:list$/, ""), !y) {
            g[h] = d;
            return;
          }
          if (g[h] === void 0) {
            g[h] = [d];
            return;
          }
          g[h] = [].concat(g[h], d);
        };
      case "comma":
      case "separator":
        return (h, d, g) => {
          const o = typeof d == "string" && d.includes(f.arrayFormatSeparator), p = typeof d == "string" && !o && C(d, f).includes(f.arrayFormatSeparator);
          d = p ? C(d, f) : d;
          const k = o || p ? d.split(f.arrayFormatSeparator).map((R) => C(R, f)) : d === null ? d : C(d, f);
          g[h] = k;
        };
      case "bracket-separator":
        return (h, d, g) => {
          const o = /(\[\])$/.test(h);
          if (h = h.replace(/\[\]$/, ""), !o) {
            g[h] = d && C(d, f);
            return;
          }
          const p = d === null ? [] : d.split(f.arrayFormatSeparator).map((k) => C(k, f));
          if (g[h] === void 0) {
            g[h] = p;
            return;
          }
          g[h] = [].concat(g[h], p);
        };
      default:
        return (h, d, g) => {
          if (g[h] === void 0) {
            g[h] = d;
            return;
          }
          g[h] = [].concat(g[h], d);
        };
    }
  }
  function m(f) {
    if (typeof f != "string" || f.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(f, y) {
    return y.encode ? y.strict ? t(f) : encodeURIComponent(f) : f;
  }
  function C(f, y) {
    return y.decode ? n(f) : f;
  }
  function B(f) {
    return Array.isArray(f) ? f.sort() : typeof f == "object" ? B(Object.keys(f)).sort((y, h) => Number(y) - Number(h)).map((y) => f[y]) : f;
  }
  function A(f) {
    const y = f.indexOf("#");
    return y !== -1 && (f = f.slice(0, y)), f;
  }
  function O(f) {
    let y = "";
    const h = f.indexOf("#");
    return h !== -1 && (y = f.slice(h)), y;
  }
  function I(f) {
    f = A(f);
    const y = f.indexOf("?");
    return y === -1 ? "" : f.slice(y + 1);
  }
  function $(f, y) {
    return y.parseNumbers && !Number.isNaN(Number(f)) && typeof f == "string" && f.trim() !== "" ? f = Number(f) : y.parseBooleans && f !== null && (f.toLowerCase() === "true" || f.toLowerCase() === "false") && (f = f.toLowerCase() === "true"), f;
  }
  function W(f, y) {
    y = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, y), m(y.arrayFormatSeparator);
    const h = _(y), d = /* @__PURE__ */ Object.create(null);
    if (typeof f != "string" || (f = f.trim().replace(/^[?#&]/, ""), !f))
      return d;
    for (const g of f.split("&")) {
      if (g === "")
        continue;
      let [o, p] = u(y.decode ? g.replace(/\+/g, " ") : g, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(y.arrayFormat) ? p : C(p, y), h(C(o, y), p, d);
    }
    for (const g of Object.keys(d)) {
      const o = d[g];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = $(o[p], y);
      else
        d[g] = $(o, y);
    }
    return y.sort === !1 ? d : (y.sort === !0 ? Object.keys(d).sort() : Object.keys(d).sort(y.sort)).reduce((g, o) => {
      const p = d[o];
      return Boolean(p) && typeof p == "object" && !Array.isArray(p) ? g[o] = B(p) : g[o] = p, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = I, e.parse = W, e.stringify = (f, y) => {
    if (!f)
      return "";
    y = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, y), m(y.arrayFormatSeparator);
    const h = (p) => y.skipNull && b(f[p]) || y.skipEmptyString && f[p] === "", d = a(y), g = {};
    for (const p of Object.keys(f))
      h(p) || (g[p] = f[p]);
    const o = Object.keys(g);
    return y.sort !== !1 && o.sort(y.sort), o.map((p) => {
      const k = f[p];
      return k === void 0 ? "" : k === null ? v(p, y) : Array.isArray(k) ? k.length === 0 && y.arrayFormat === "bracket-separator" ? v(p, y) + "[]" : k.reduce(d(p), []).join("&") : v(p, y) + "=" + v(k, y);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (f, y) => {
    y = Object.assign({ decode: !0 }, y);
    const [h, d] = u(f, "#");
    return Object.assign({ url: h.split("?")[0] || "", query: W(I(f), y) }, y && y.parseFragmentIdentifier && d ? { fragmentIdentifier: C(d, y) } : {});
  }, e.stringifyUrl = (f, y) => {
    y = Object.assign({ encode: !0, strict: !0, [E]: !0 }, y);
    const h = A(f.url).split("?")[0] || "", d = e.extract(f.url), g = e.parse(d, { sort: !1 }), o = Object.assign(g, f.query);
    let p = e.stringify(o, y);
    p && (p = `?${p}`);
    let k = O(f.url);
    return f.fragmentIdentifier && (k = `#${y[E] ? v(f.fragmentIdentifier, y) : f.fragmentIdentifier}`), `${h}${p}${k}`;
  }, e.pick = (f, y, h) => {
    h = Object.assign({ parseFragmentIdentifier: !0, [E]: !1 }, h);
    const { url: d, query: g, fragmentIdentifier: o } = e.parseUrl(f, h);
    return e.stringifyUrl({ url: d, query: c(g, y), fragmentIdentifier: o }, h);
  }, e.exclude = (f, y, h) => {
    const d = Array.isArray(y) ? (g) => !y.includes(g) : (g, o) => !y(g, o);
    return e.pick(f, d, h);
  };
})(kl);
var sn = { exports: {} };
(function(e, t) {
  var n = typeof self < "u" ? self : it, u = function() {
    function b() {
      this.fetch = !1, this.DOMException = n.DOMException;
    }
    return b.prototype = n, new b();
  }();
  (function(b) {
    (function(E) {
      var a = { searchParams: "URLSearchParams" in b, iterable: "Symbol" in b && "iterator" in Symbol, blob: "FileReader" in b && "Blob" in b && function() {
        try {
          return new Blob(), !0;
        } catch {
          return !1;
        }
      }(), formData: "FormData" in b, arrayBuffer: "ArrayBuffer" in b };
      function _(w) {
        return w && DataView.prototype.isPrototypeOf(w);
      }
      if (a.arrayBuffer)
        var m = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], v = ArrayBuffer.isView || function(w) {
          return w && m.indexOf(Object.prototype.toString.call(w)) > -1;
        };
      function C(w) {
        if (typeof w != "string" && (w = String(w)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(w))
          throw new TypeError("Invalid character in header field name");
        return w.toLowerCase();
      }
      function B(w) {
        return typeof w != "string" && (w = String(w)), w;
      }
      function A(w) {
        var S = { next: function() {
          var D = w.shift();
          return { done: D === void 0, value: D };
        } };
        return a.iterable && (S[Symbol.iterator] = function() {
          return S;
        }), S;
      }
      function O(w) {
        this.map = {}, w instanceof O ? w.forEach(function(S, D) {
          this.append(D, S);
        }, this) : Array.isArray(w) ? w.forEach(function(S) {
          this.append(S[0], S[1]);
        }, this) : w && Object.getOwnPropertyNames(w).forEach(function(S) {
          this.append(S, w[S]);
        }, this);
      }
      O.prototype.append = function(w, S) {
        w = C(w), S = B(S);
        var D = this.map[w];
        this.map[w] = D ? D + ", " + S : S;
      }, O.prototype.delete = function(w) {
        delete this.map[C(w)];
      }, O.prototype.get = function(w) {
        return w = C(w), this.has(w) ? this.map[w] : null;
      }, O.prototype.has = function(w) {
        return this.map.hasOwnProperty(C(w));
      }, O.prototype.set = function(w, S) {
        this.map[C(w)] = B(S);
      }, O.prototype.forEach = function(w, S) {
        for (var D in this.map)
          this.map.hasOwnProperty(D) && w.call(S, this.map[D], D, this);
      }, O.prototype.keys = function() {
        var w = [];
        return this.forEach(function(S, D) {
          w.push(D);
        }), A(w);
      }, O.prototype.values = function() {
        var w = [];
        return this.forEach(function(S) {
          w.push(S);
        }), A(w);
      }, O.prototype.entries = function() {
        var w = [];
        return this.forEach(function(S, D) {
          w.push([D, S]);
        }), A(w);
      }, a.iterable && (O.prototype[Symbol.iterator] = O.prototype.entries);
      function I(w) {
        if (w.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        w.bodyUsed = !0;
      }
      function $(w) {
        return new Promise(function(S, D) {
          w.onload = function() {
            S(w.result);
          }, w.onerror = function() {
            D(w.error);
          };
        });
      }
      function W(w) {
        var S = new FileReader(), D = $(S);
        return S.readAsArrayBuffer(w), D;
      }
      function f(w) {
        var S = new FileReader(), D = $(S);
        return S.readAsText(w), D;
      }
      function y(w) {
        for (var S = new Uint8Array(w), D = new Array(S.length), Z = 0; Z < S.length; Z++)
          D[Z] = String.fromCharCode(S[Z]);
        return D.join("");
      }
      function h(w) {
        if (w.slice)
          return w.slice(0);
        var S = new Uint8Array(w.byteLength);
        return S.set(new Uint8Array(w)), S.buffer;
      }
      function d() {
        return this.bodyUsed = !1, this._initBody = function(w) {
          this._bodyInit = w, w ? typeof w == "string" ? this._bodyText = w : a.blob && Blob.prototype.isPrototypeOf(w) ? this._bodyBlob = w : a.formData && FormData.prototype.isPrototypeOf(w) ? this._bodyFormData = w : a.searchParams && URLSearchParams.prototype.isPrototypeOf(w) ? this._bodyText = w.toString() : a.arrayBuffer && a.blob && _(w) ? (this._bodyArrayBuffer = h(w.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(w) || v(w)) ? this._bodyArrayBuffer = h(w) : this._bodyText = w = Object.prototype.toString.call(w) : this._bodyText = "", this.headers.get("content-type") || (typeof w == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(w) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, a.blob && (this.blob = function() {
          var w = I(this);
          if (w)
            return w;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? I(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(W);
        }), this.text = function() {
          var w = I(this);
          if (w)
            return w;
          if (this._bodyBlob)
            return f(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(y(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, a.formData && (this.formData = function() {
          return this.text().then(k);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function o(w) {
        var S = w.toUpperCase();
        return g.indexOf(S) > -1 ? S : w;
      }
      function p(w, S) {
        S = S || {};
        var D = S.body;
        if (w instanceof p) {
          if (w.bodyUsed)
            throw new TypeError("Already read");
          this.url = w.url, this.credentials = w.credentials, S.headers || (this.headers = new O(w.headers)), this.method = w.method, this.mode = w.mode, this.signal = w.signal, !D && w._bodyInit != null && (D = w._bodyInit, w.bodyUsed = !0);
        } else
          this.url = String(w);
        if (this.credentials = S.credentials || this.credentials || "same-origin", (S.headers || !this.headers) && (this.headers = new O(S.headers)), this.method = o(S.method || this.method || "GET"), this.mode = S.mode || this.mode || null, this.signal = S.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && D)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(D);
      }
      p.prototype.clone = function() {
        return new p(this, { body: this._bodyInit });
      };
      function k(w) {
        var S = new FormData();
        return w.trim().split("&").forEach(function(D) {
          if (D) {
            var Z = D.split("="), z = Z.shift().replace(/\+/g, " "), H = Z.join("=").replace(/\+/g, " ");
            S.append(decodeURIComponent(z), decodeURIComponent(H));
          }
        }), S;
      }
      function R(w) {
        var S = new O(), D = w.replace(/\r?\n[\t ]+/g, " ");
        return D.split(/\r?\n/).forEach(function(Z) {
          var z = Z.split(":"), H = z.shift().trim();
          if (H) {
            var K = z.join(":").trim();
            S.append(H, K);
          }
        }), S;
      }
      d.call(p.prototype);
      function X(w, S) {
        S || (S = {}), this.type = "default", this.status = S.status === void 0 ? 200 : S.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in S ? S.statusText : "OK", this.headers = new O(S.headers), this.url = S.url || "", this._initBody(w);
      }
      d.call(X.prototype), X.prototype.clone = function() {
        return new X(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new O(this.headers), url: this.url });
      }, X.error = function() {
        var w = new X(null, { status: 0, statusText: "" });
        return w.type = "error", w;
      };
      var ee = [301, 302, 303, 307, 308];
      X.redirect = function(w, S) {
        if (ee.indexOf(S) === -1)
          throw new RangeError("Invalid status code");
        return new X(null, { status: S, headers: { location: w } });
      }, E.DOMException = b.DOMException;
      try {
        new E.DOMException();
      } catch {
        E.DOMException = function(w, S) {
          this.message = w, this.name = S;
          var D = Error(w);
          this.stack = D.stack;
        }, E.DOMException.prototype = Object.create(Error.prototype), E.DOMException.prototype.constructor = E.DOMException;
      }
      function ne(w, S) {
        return new Promise(function(D, Z) {
          var z = new p(w, S);
          if (z.signal && z.signal.aborted)
            return Z(new E.DOMException("Aborted", "AbortError"));
          var H = new XMLHttpRequest();
          function K() {
            H.abort();
          }
          H.onload = function() {
            var V = { status: H.status, statusText: H.statusText, headers: R(H.getAllResponseHeaders() || "") };
            V.url = "responseURL" in H ? H.responseURL : V.headers.get("X-Request-URL");
            var oe = "response" in H ? H.response : H.responseText;
            D(new X(oe, V));
          }, H.onerror = function() {
            Z(new TypeError("Network request failed"));
          }, H.ontimeout = function() {
            Z(new TypeError("Network request failed"));
          }, H.onabort = function() {
            Z(new E.DOMException("Aborted", "AbortError"));
          }, H.open(z.method, z.url, !0), z.credentials === "include" ? H.withCredentials = !0 : z.credentials === "omit" && (H.withCredentials = !1), "responseType" in H && a.blob && (H.responseType = "blob"), z.headers.forEach(function(V, oe) {
            H.setRequestHeader(oe, V);
          }), z.signal && (z.signal.addEventListener("abort", K), H.onreadystatechange = function() {
            H.readyState === 4 && z.signal.removeEventListener("abort", K);
          }), H.send(typeof z._bodyInit > "u" ? null : z._bodyInit);
        });
      }
      return ne.polyfill = !0, b.fetch || (b.fetch = ne, b.Headers = O, b.Request = p, b.Response = X), E.Headers = O, E.Request = p, E.Response = X, E.fetch = ne, Object.defineProperty(E, "__esModule", { value: !0 }), E;
    })({});
  })(u), u.fetch.ponyfill = !0, delete u.fetch.polyfill;
  var c = u;
  t = c.fetch, t.default = c.fetch, t.fetch = c.fetch, t.Headers = c.Headers, t.Request = c.Request, t.Response = c.Response, e.exports = t;
})(sn, sn.exports);
_s(sn.exports);
const Ml = Symbol(), Mo = Object.getPrototypeOf, an = /* @__PURE__ */ new WeakMap(), xl = (e) => e && (an.has(e) ? an.get(e) : Mo(e) === Object.prototype || Mo(e) === Array.prototype), Rl = (e) => xl(e) && e[Ml] || null, xo = (e, t = !0) => {
  an.set(e, t);
}, kr = (e) => typeof e == "object" && e !== null, Nt = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakSet(), Hl = (e = Object.is, t = (m, v) => new Proxy(m, v), n = (m) => kr(m) && !Pr.has(m) && (Array.isArray(m) || !(Symbol.iterator in m)) && !(m instanceof WeakMap) && !(m instanceof WeakSet) && !(m instanceof Error) && !(m instanceof Number) && !(m instanceof Date) && !(m instanceof String) && !(m instanceof RegExp) && !(m instanceof ArrayBuffer), u = (m) => {
  switch (m.status) {
    case "fulfilled":
      return m.value;
    case "rejected":
      throw m.reason;
    default:
      throw m;
  }
}, c = /* @__PURE__ */ new WeakMap(), b = (m, v, C = u) => {
  const B = c.get(m);
  if ((B == null ? void 0 : B[0]) === v)
    return B[1];
  const A = Array.isArray(m) ? [] : Object.create(Object.getPrototypeOf(m));
  return xo(A, !0), c.set(m, [v, A]), Reflect.ownKeys(m).forEach((O) => {
    const I = Reflect.get(m, O);
    Pr.has(I) ? (xo(I, !1), A[O] = I) : I instanceof Promise ? Object.defineProperty(A, O, { get() {
      return C(I);
    } }) : Nt.has(I) ? A[O] = Dl(I, C) : A[O] = I;
  }), Object.freeze(A);
}, E = /* @__PURE__ */ new WeakMap(), a = [1, 1], _ = (m) => {
  if (!kr(m))
    throw new Error("object required");
  const v = E.get(m);
  if (v)
    return v;
  let C = a[0];
  const B = /* @__PURE__ */ new Set(), A = (p, k = ++a[0]) => {
    C !== k && (C = k, B.forEach((R) => R(p, k)));
  };
  let O = a[1];
  const I = (p = ++a[1]) => (O !== p && !B.size && (O = p, W.forEach(([k]) => {
    const R = k[1](p);
    R > C && (C = R);
  })), C), $ = (p) => (k, R) => {
    const X = [...k];
    X[1] = [p, ...X[1]], A(X, R);
  }, W = /* @__PURE__ */ new Map(), f = (p, k) => {
    if (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && W.has(p))
      throw new Error("prop listener already exists");
    if (B.size) {
      const R = k[3]($(p));
      W.set(p, [k, R]);
    } else
      W.set(p, [k]);
  }, y = (p) => {
    var k;
    const R = W.get(p);
    R && (W.delete(p), (k = R[1]) == null || k.call(R));
  }, h = (p) => (B.add(p), B.size === 1 && W.forEach(([k, R], X) => {
    if (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && R)
      throw new Error("remove already exists");
    const ee = k[3]($(X));
    W.set(X, [k, ee]);
  }), () => {
    B.delete(p), B.size === 0 && W.forEach(([k, R], X) => {
      R && (R(), W.set(X, [k]));
    });
  }), d = Array.isArray(m) ? [] : Object.create(Object.getPrototypeOf(m)), g = t(d, { deleteProperty(p, k) {
    const R = Reflect.get(p, k);
    y(k);
    const X = Reflect.deleteProperty(p, k);
    return X && A(["delete", [k], R]), X;
  }, set(p, k, R, X) {
    var ee;
    const ne = Reflect.has(p, k), w = Reflect.get(p, k, X);
    if (ne && e(w, R))
      return !0;
    y(k), kr(R) && (R = Rl(R) || R);
    let S = R;
    if (!((ee = Object.getOwnPropertyDescriptor(p, k)) != null && ee.set))
      if (R instanceof Promise)
        R.then((D) => {
          R.status = "fulfilled", R.value = D, A(["resolve", [k], D]);
        }).catch((D) => {
          R.status = "rejected", R.reason = D, A(["reject", [k], D]);
        });
      else {
        !Nt.has(R) && n(R) && (S = St(R));
        const D = Nt.get(S);
        D && f(k, D);
      }
    return Reflect.set(p, k, S, X), A(["set", [k], R, w]), !0;
  } });
  E.set(m, g);
  const o = [d, I, b, h];
  return Nt.set(g, o), Reflect.ownKeys(m).forEach((p) => {
    const k = Object.getOwnPropertyDescriptor(m, p);
    k.get || k.set ? Object.defineProperty(d, p, k) : g[p] = m[p];
  }), g;
}) => [_, Nt, Pr, e, t, n, u, c, b, E, a], [zl] = Hl();
function St(e = {}) {
  return zl(e);
}
function $l(e, t, n) {
  const u = Nt.get(e);
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && !u && console.warn("Please use proxy object");
  let c;
  const b = [], E = u[3];
  let a = !1;
  const _ = E((m) => {
    if (b.push(m), n) {
      t(b.splice(0));
      return;
    }
    c || (c = Promise.resolve().then(() => {
      c = void 0, a && t(b.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, _();
  };
}
function Dl(e, t) {
  const n = Nt.get(e);
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && !n && console.warn("Please use proxy object");
  const [u, c, b] = n;
  return b(u, c(), t);
}
var Fi = {}, wr = {};
wr.byteLength = Vl, wr.toByteArray = Gl, wr.fromByteArray = ql;
for (var yt = [], ct = [], Yl = typeof Uint8Array < "u" ? Uint8Array : Array, Mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $t = 0, Wl = Mr.length; $t < Wl; ++$t)
  yt[$t] = Mr[$t], ct[Mr.charCodeAt($t)] = $t;
ct["-".charCodeAt(0)] = 62, ct["_".charCodeAt(0)] = 63;
function Li(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var u = n === t ? 0 : 4 - n % 4;
  return [n, u];
}
function Vl(e) {
  var t = Li(e), n = t[0], u = t[1];
  return (n + u) * 3 / 4 - u;
}
function Zl(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function Gl(e) {
  var t, n = Li(e), u = n[0], c = n[1], b = new Yl(Zl(e, u, c)), E = 0, a = c > 0 ? u - 4 : u, _;
  for (_ = 0; _ < a; _ += 4)
    t = ct[e.charCodeAt(_)] << 18 | ct[e.charCodeAt(_ + 1)] << 12 | ct[e.charCodeAt(_ + 2)] << 6 | ct[e.charCodeAt(_ + 3)], b[E++] = t >> 16 & 255, b[E++] = t >> 8 & 255, b[E++] = t & 255;
  return c === 2 && (t = ct[e.charCodeAt(_)] << 2 | ct[e.charCodeAt(_ + 1)] >> 4, b[E++] = t & 255), c === 1 && (t = ct[e.charCodeAt(_)] << 10 | ct[e.charCodeAt(_ + 1)] << 4 | ct[e.charCodeAt(_ + 2)] >> 2, b[E++] = t >> 8 & 255, b[E++] = t & 255), b;
}
function Kl(e) {
  return yt[e >> 18 & 63] + yt[e >> 12 & 63] + yt[e >> 6 & 63] + yt[e & 63];
}
function Xl(e, t, n) {
  for (var u, c = [], b = t; b < n; b += 3)
    u = (e[b] << 16 & 16711680) + (e[b + 1] << 8 & 65280) + (e[b + 2] & 255), c.push(Kl(u));
  return c.join("");
}
function ql(e) {
  for (var t, n = e.length, u = n % 3, c = [], b = 16383, E = 0, a = n - u; E < a; E += b)
    c.push(Xl(e, E, E + b > a ? a : E + b));
  return u === 1 ? (t = e[n - 1], c.push(yt[t >> 2] + yt[t << 4 & 63] + "==")) : u === 2 && (t = (e[n - 2] << 8) + e[n - 1], c.push(yt[t >> 10] + yt[t >> 4 & 63] + yt[t << 2 & 63] + "=")), c.join("");
}
var un = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
un.read = function(e, t, n, u, c) {
  var b, E, a = c * 8 - u - 1, _ = (1 << a) - 1, m = _ >> 1, v = -7, C = n ? c - 1 : 0, B = n ? -1 : 1, A = e[t + C];
  for (C += B, b = A & (1 << -v) - 1, A >>= -v, v += a; v > 0; b = b * 256 + e[t + C], C += B, v -= 8)
    ;
  for (E = b & (1 << -v) - 1, b >>= -v, v += u; v > 0; E = E * 256 + e[t + C], C += B, v -= 8)
    ;
  if (b === 0)
    b = 1 - m;
  else {
    if (b === _)
      return E ? NaN : (A ? -1 : 1) * (1 / 0);
    E = E + Math.pow(2, u), b = b - m;
  }
  return (A ? -1 : 1) * E * Math.pow(2, b - u);
}, un.write = function(e, t, n, u, c, b) {
  var E, a, _, m = b * 8 - c - 1, v = (1 << m) - 1, C = v >> 1, B = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A = u ? 0 : b - 1, O = u ? 1 : -1, I = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, E = v) : (E = Math.floor(Math.log(t) / Math.LN2), t * (_ = Math.pow(2, -E)) < 1 && (E--, _ *= 2), E + C >= 1 ? t += B / _ : t += B * Math.pow(2, 1 - C), t * _ >= 2 && (E++, _ /= 2), E + C >= v ? (a = 0, E = v) : E + C >= 1 ? (a = (t * _ - 1) * Math.pow(2, c), E = E + C) : (a = t * Math.pow(2, C - 1) * Math.pow(2, c), E = 0)); c >= 8; e[n + A] = a & 255, A += O, a /= 256, c -= 8)
    ;
  for (E = E << c | a, m += c; m > 0; e[n + A] = E & 255, A += O, E /= 256, m -= 8)
    ;
  e[n + A - O] |= I * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(e) {
  const t = wr, n = un, u = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = f, e.INSPECT_MAX_BYTES = 50;
  const c = 2147483647;
  e.kMaxLength = c, a.TYPED_ARRAY_SUPPORT = b(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function b() {
    try {
      const r = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(r, s), r.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", { enumerable: !0, get: function() {
    if (a.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(a.prototype, "offset", { enumerable: !0, get: function() {
    if (a.isBuffer(this))
      return this.byteOffset;
  } });
  function E(r) {
    if (r > c)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
    const s = new Uint8Array(r);
    return Object.setPrototypeOf(s, a.prototype), s;
  }
  function a(r, s, l) {
    if (typeof r == "number") {
      if (typeof s == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return C(r);
    }
    return _(r, s, l);
  }
  a.poolSize = 8192;
  function _(r, s, l) {
    if (typeof r == "string")
      return B(r, s);
    if (ArrayBuffer.isView(r))
      return O(r);
    if (r == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
    if (le(r, ArrayBuffer) || r && le(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (le(r, SharedArrayBuffer) || r && le(r.buffer, SharedArrayBuffer)))
      return I(r, s, l);
    if (typeof r == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    const L = r.valueOf && r.valueOf();
    if (L != null && L !== r)
      return a.from(L, s, l);
    const U = $(r);
    if (U)
      return U;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
      return a.from(r[Symbol.toPrimitive]("string"), s, l);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
  }
  a.from = function(r, s, l) {
    return _(r, s, l);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function m(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  function v(r, s, l) {
    return m(r), r <= 0 ? E(r) : s !== void 0 ? typeof l == "string" ? E(r).fill(s, l) : E(r).fill(s) : E(r);
  }
  a.alloc = function(r, s, l) {
    return v(r, s, l);
  };
  function C(r) {
    return m(r), E(r < 0 ? 0 : W(r) | 0);
  }
  a.allocUnsafe = function(r) {
    return C(r);
  }, a.allocUnsafeSlow = function(r) {
    return C(r);
  };
  function B(r, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !a.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const l = y(r, s) | 0;
    let L = E(l);
    const U = L.write(r, s);
    return U !== l && (L = L.slice(0, U)), L;
  }
  function A(r) {
    const s = r.length < 0 ? 0 : W(r.length) | 0, l = E(s);
    for (let L = 0; L < s; L += 1)
      l[L] = r[L] & 255;
    return l;
  }
  function O(r) {
    if (le(r, Uint8Array)) {
      const s = new Uint8Array(r);
      return I(s.buffer, s.byteOffset, s.byteLength);
    }
    return A(r);
  }
  function I(r, s, l) {
    if (s < 0 || r.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < s + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let L;
    return s === void 0 && l === void 0 ? L = new Uint8Array(r) : l === void 0 ? L = new Uint8Array(r, s) : L = new Uint8Array(r, s, l), Object.setPrototypeOf(L, a.prototype), L;
  }
  function $(r) {
    if (a.isBuffer(r)) {
      const s = W(r.length) | 0, l = E(s);
      return l.length === 0 || r.copy(l, 0, 0, s), l;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || ye(r.length) ? E(0) : A(r);
    if (r.type === "Buffer" && Array.isArray(r.data))
      return A(r.data);
  }
  function W(r) {
    if (r >= c)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
    return r | 0;
  }
  function f(r) {
    return +r != r && (r = 0), a.alloc(+r);
  }
  a.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== a.prototype;
  }, a.compare = function(r, s) {
    if (le(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), le(s, Uint8Array) && (s = a.from(s, s.offset, s.byteLength)), !a.isBuffer(r) || !a.isBuffer(s))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === s)
      return 0;
    let l = r.length, L = s.length;
    for (let U = 0, x = Math.min(l, L); U < x; ++U)
      if (r[U] !== s[U]) {
        l = r[U], L = s[U];
        break;
      }
    return l < L ? -1 : L < l ? 1 : 0;
  }, a.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(r, s) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return a.alloc(0);
    let l;
    if (s === void 0)
      for (s = 0, l = 0; l < r.length; ++l)
        s += r[l].length;
    const L = a.allocUnsafe(s);
    let U = 0;
    for (l = 0; l < r.length; ++l) {
      let x = r[l];
      if (le(x, Uint8Array))
        U + x.length > L.length ? (a.isBuffer(x) || (x = a.from(x)), x.copy(L, U)) : Uint8Array.prototype.set.call(L, x, U);
      else if (a.isBuffer(x))
        x.copy(L, U);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      U += x.length;
    }
    return L;
  };
  function y(r, s) {
    if (a.isBuffer(r))
      return r.length;
    if (ArrayBuffer.isView(r) || le(r, ArrayBuffer))
      return r.byteLength;
    if (typeof r != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
    const l = r.length, L = arguments.length > 2 && arguments[2] === !0;
    if (!L && l === 0)
      return 0;
    let U = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return Le(r).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return me(r).length;
        default:
          if (U)
            return L ? -1 : Le(r).length;
          s = ("" + s).toLowerCase(), U = !0;
      }
  }
  a.byteLength = y;
  function h(r, s, l) {
    let L = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, s >>>= 0, l <= s))
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return H(this, s, l);
        case "utf8":
        case "utf-8":
          return w(this, s, l);
        case "ascii":
          return Z(this, s, l);
        case "latin1":
        case "binary":
          return z(this, s, l);
        case "base64":
          return ne(this, s, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return K(this, s, l);
        default:
          if (L)
            throw new TypeError("Unknown encoding: " + r);
          r = (r + "").toLowerCase(), L = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function d(r, s, l) {
    const L = r[s];
    r[s] = r[l], r[l] = L;
  }
  a.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let s = 0; s < r; s += 2)
      d(this, s, s + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let s = 0; s < r; s += 4)
      d(this, s, s + 3), d(this, s + 1, s + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let s = 0; s < r; s += 8)
      d(this, s, s + 7), d(this, s + 1, s + 6), d(this, s + 2, s + 5), d(this, s + 3, s + 4);
    return this;
  }, a.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? w(this, 0, r) : h.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(r) {
    if (!a.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : a.compare(this, r) === 0;
  }, a.prototype.inspect = function() {
    let r = "";
    const s = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (r += " ... "), "<Buffer " + r + ">";
  }, u && (a.prototype[u] = a.prototype.inspect), a.prototype.compare = function(r, s, l, L, U) {
    if (le(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(r))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (s === void 0 && (s = 0), l === void 0 && (l = r ? r.length : 0), L === void 0 && (L = 0), U === void 0 && (U = this.length), s < 0 || l > r.length || L < 0 || U > this.length)
      throw new RangeError("out of range index");
    if (L >= U && s >= l)
      return 0;
    if (L >= U)
      return -1;
    if (s >= l)
      return 1;
    if (s >>>= 0, l >>>= 0, L >>>= 0, U >>>= 0, this === r)
      return 0;
    let x = U - L, Y = l - s;
    const ie = Math.min(x, Y), ae = this.slice(L, U), Ee = r.slice(s, l);
    for (let we = 0; we < ie; ++we)
      if (ae[we] !== Ee[we]) {
        x = ae[we], Y = Ee[we];
        break;
      }
    return x < Y ? -1 : Y < x ? 1 : 0;
  };
  function g(r, s, l, L, U) {
    if (r.length === 0)
      return -1;
    if (typeof l == "string" ? (L = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, ye(l) && (l = U ? 0 : r.length - 1), l < 0 && (l = r.length + l), l >= r.length) {
      if (U)
        return -1;
      l = r.length - 1;
    } else if (l < 0)
      if (U)
        l = 0;
      else
        return -1;
    if (typeof s == "string" && (s = a.from(s, L)), a.isBuffer(s))
      return s.length === 0 ? -1 : o(r, s, l, L, U);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? U ? Uint8Array.prototype.indexOf.call(r, s, l) : Uint8Array.prototype.lastIndexOf.call(r, s, l) : o(r, [s], l, L, U);
    throw new TypeError("val must be string, number or Buffer");
  }
  function o(r, s, l, L, U) {
    let x = 1, Y = r.length, ie = s.length;
    if (L !== void 0 && (L = String(L).toLowerCase(), L === "ucs2" || L === "ucs-2" || L === "utf16le" || L === "utf-16le")) {
      if (r.length < 2 || s.length < 2)
        return -1;
      x = 2, Y /= 2, ie /= 2, l /= 2;
    }
    function ae(we, Oe) {
      return x === 1 ? we[Oe] : we.readUInt16BE(Oe * x);
    }
    let Ee;
    if (U) {
      let we = -1;
      for (Ee = l; Ee < Y; Ee++)
        if (ae(r, Ee) === ae(s, we === -1 ? 0 : Ee - we)) {
          if (we === -1 && (we = Ee), Ee - we + 1 === ie)
            return we * x;
        } else
          we !== -1 && (Ee -= Ee - we), we = -1;
    } else
      for (l + ie > Y && (l = Y - ie), Ee = l; Ee >= 0; Ee--) {
        let we = !0;
        for (let Oe = 0; Oe < ie; Oe++)
          if (ae(r, Ee + Oe) !== ae(s, Oe)) {
            we = !1;
            break;
          }
        if (we)
          return Ee;
      }
    return -1;
  }
  a.prototype.includes = function(r, s, l) {
    return this.indexOf(r, s, l) !== -1;
  }, a.prototype.indexOf = function(r, s, l) {
    return g(this, r, s, l, !0);
  }, a.prototype.lastIndexOf = function(r, s, l) {
    return g(this, r, s, l, !1);
  };
  function p(r, s, l, L) {
    l = Number(l) || 0;
    const U = r.length - l;
    L ? (L = Number(L), L > U && (L = U)) : L = U;
    const x = s.length;
    L > x / 2 && (L = x / 2);
    let Y;
    for (Y = 0; Y < L; ++Y) {
      const ie = parseInt(s.substr(Y * 2, 2), 16);
      if (ye(ie))
        return Y;
      r[l + Y] = ie;
    }
    return Y;
  }
  function k(r, s, l, L) {
    return ge(Le(s, r.length - l), r, l, L);
  }
  function R(r, s, l, L) {
    return ge(Ne(s), r, l, L);
  }
  function X(r, s, l, L) {
    return ge(me(s), r, l, L);
  }
  function ee(r, s, l, L) {
    return ge(Te(s, r.length - l), r, l, L);
  }
  a.prototype.write = function(r, s, l, L) {
    if (s === void 0)
      L = "utf8", l = this.length, s = 0;
    else if (l === void 0 && typeof s == "string")
      L = s, l = this.length, s = 0;
    else if (isFinite(s))
      s = s >>> 0, isFinite(l) ? (l = l >>> 0, L === void 0 && (L = "utf8")) : (L = l, l = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const U = this.length - s;
    if ((l === void 0 || l > U) && (l = U), r.length > 0 && (l < 0 || s < 0) || s > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    L || (L = "utf8");
    let x = !1;
    for (; ; )
      switch (L) {
        case "hex":
          return p(this, r, s, l);
        case "utf8":
        case "utf-8":
          return k(this, r, s, l);
        case "ascii":
        case "latin1":
        case "binary":
          return R(this, r, s, l);
        case "base64":
          return X(this, r, s, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, r, s, l);
        default:
          if (x)
            throw new TypeError("Unknown encoding: " + L);
          L = ("" + L).toLowerCase(), x = !0;
      }
  }, a.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function ne(r, s, l) {
    return s === 0 && l === r.length ? t.fromByteArray(r) : t.fromByteArray(r.slice(s, l));
  }
  function w(r, s, l) {
    l = Math.min(r.length, l);
    const L = [];
    let U = s;
    for (; U < l; ) {
      const x = r[U];
      let Y = null, ie = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
      if (U + ie <= l) {
        let ae, Ee, we, Oe;
        switch (ie) {
          case 1:
            x < 128 && (Y = x);
            break;
          case 2:
            ae = r[U + 1], (ae & 192) === 128 && (Oe = (x & 31) << 6 | ae & 63, Oe > 127 && (Y = Oe));
            break;
          case 3:
            ae = r[U + 1], Ee = r[U + 2], (ae & 192) === 128 && (Ee & 192) === 128 && (Oe = (x & 15) << 12 | (ae & 63) << 6 | Ee & 63, Oe > 2047 && (Oe < 55296 || Oe > 57343) && (Y = Oe));
            break;
          case 4:
            ae = r[U + 1], Ee = r[U + 2], we = r[U + 3], (ae & 192) === 128 && (Ee & 192) === 128 && (we & 192) === 128 && (Oe = (x & 15) << 18 | (ae & 63) << 12 | (Ee & 63) << 6 | we & 63, Oe > 65535 && Oe < 1114112 && (Y = Oe));
        }
      }
      Y === null ? (Y = 65533, ie = 1) : Y > 65535 && (Y -= 65536, L.push(Y >>> 10 & 1023 | 55296), Y = 56320 | Y & 1023), L.push(Y), U += ie;
    }
    return D(L);
  }
  const S = 4096;
  function D(r) {
    const s = r.length;
    if (s <= S)
      return String.fromCharCode.apply(String, r);
    let l = "", L = 0;
    for (; L < s; )
      l += String.fromCharCode.apply(String, r.slice(L, L += S));
    return l;
  }
  function Z(r, s, l) {
    let L = "";
    l = Math.min(r.length, l);
    for (let U = s; U < l; ++U)
      L += String.fromCharCode(r[U] & 127);
    return L;
  }
  function z(r, s, l) {
    let L = "";
    l = Math.min(r.length, l);
    for (let U = s; U < l; ++U)
      L += String.fromCharCode(r[U]);
    return L;
  }
  function H(r, s, l) {
    const L = r.length;
    (!s || s < 0) && (s = 0), (!l || l < 0 || l > L) && (l = L);
    let U = "";
    for (let x = s; x < l; ++x)
      U += be[r[x]];
    return U;
  }
  function K(r, s, l) {
    const L = r.slice(s, l);
    let U = "";
    for (let x = 0; x < L.length - 1; x += 2)
      U += String.fromCharCode(L[x] + L[x + 1] * 256);
    return U;
  }
  a.prototype.slice = function(r, s) {
    const l = this.length;
    r = ~~r, s = s === void 0 ? l : ~~s, r < 0 ? (r += l, r < 0 && (r = 0)) : r > l && (r = l), s < 0 ? (s += l, s < 0 && (s = 0)) : s > l && (s = l), s < r && (s = r);
    const L = this.subarray(r, s);
    return Object.setPrototypeOf(L, a.prototype), L;
  };
  function V(r, s, l) {
    if (r % 1 !== 0 || r < 0)
      throw new RangeError("offset is not uint");
    if (r + s > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(r, s, l) {
    r = r >>> 0, s = s >>> 0, l || V(r, s, this.length);
    let L = this[r], U = 1, x = 0;
    for (; ++x < s && (U *= 256); )
      L += this[r + x] * U;
    return L;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(r, s, l) {
    r = r >>> 0, s = s >>> 0, l || V(r, s, this.length);
    let L = this[r + --s], U = 1;
    for (; s > 0 && (U *= 256); )
      L += this[r + --s] * U;
    return L;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(r, s) {
    return r = r >>> 0, s || V(r, 1, this.length), this[r];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(r, s) {
    return r = r >>> 0, s || V(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(r, s) {
    return r = r >>> 0, s || V(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, a.prototype.readBigUInt64LE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], l = this[r + 7];
    (s === void 0 || l === void 0) && ce(r, this.length - 8);
    const L = s + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, U = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + l * 2 ** 24;
    return BigInt(L) + (BigInt(U) << BigInt(32));
  }), a.prototype.readBigUInt64BE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], l = this[r + 7];
    (s === void 0 || l === void 0) && ce(r, this.length - 8);
    const L = s * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], U = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + l;
    return (BigInt(L) << BigInt(32)) + BigInt(U);
  }), a.prototype.readIntLE = function(r, s, l) {
    r = r >>> 0, s = s >>> 0, l || V(r, s, this.length);
    let L = this[r], U = 1, x = 0;
    for (; ++x < s && (U *= 256); )
      L += this[r + x] * U;
    return U *= 128, L >= U && (L -= Math.pow(2, 8 * s)), L;
  }, a.prototype.readIntBE = function(r, s, l) {
    r = r >>> 0, s = s >>> 0, l || V(r, s, this.length);
    let L = s, U = 1, x = this[r + --L];
    for (; L > 0 && (U *= 256); )
      x += this[r + --L] * U;
    return U *= 128, x >= U && (x -= Math.pow(2, 8 * s)), x;
  }, a.prototype.readInt8 = function(r, s) {
    return r = r >>> 0, s || V(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, a.prototype.readInt16LE = function(r, s) {
    r = r >>> 0, s || V(r, 2, this.length);
    const l = this[r] | this[r + 1] << 8;
    return l & 32768 ? l | 4294901760 : l;
  }, a.prototype.readInt16BE = function(r, s) {
    r = r >>> 0, s || V(r, 2, this.length);
    const l = this[r + 1] | this[r] << 8;
    return l & 32768 ? l | 4294901760 : l;
  }, a.prototype.readInt32LE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, a.prototype.readInt32BE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, a.prototype.readBigInt64LE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], l = this[r + 7];
    (s === void 0 || l === void 0) && ce(r, this.length - 8);
    const L = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (l << 24);
    return (BigInt(L) << BigInt(32)) + BigInt(s + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), a.prototype.readBigInt64BE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], l = this[r + 7];
    (s === void 0 || l === void 0) && ce(r, this.length - 8);
    const L = (s << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(L) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + l);
  }), a.prototype.readFloatLE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), n.read(this, r, !0, 23, 4);
  }, a.prototype.readFloatBE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), n.read(this, r, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(r, s) {
    return r = r >>> 0, s || V(r, 8, this.length), n.read(this, r, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(r, s) {
    return r = r >>> 0, s || V(r, 8, this.length), n.read(this, r, !1, 52, 8);
  };
  function oe(r, s, l, L, U, x) {
    if (!a.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > U || s < x)
      throw new RangeError('"value" argument is out of bounds');
    if (l + L > r.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(r, s, l, L) {
    if (r = +r, s = s >>> 0, l = l >>> 0, !L) {
      const Y = Math.pow(2, 8 * l) - 1;
      oe(this, r, s, l, Y, 0);
    }
    let U = 1, x = 0;
    for (this[s] = r & 255; ++x < l && (U *= 256); )
      this[s + x] = r / U & 255;
    return s + l;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(r, s, l, L) {
    if (r = +r, s = s >>> 0, l = l >>> 0, !L) {
      const Y = Math.pow(2, 8 * l) - 1;
      oe(this, r, s, l, Y, 0);
    }
    let U = l - 1, x = 1;
    for (this[s + U] = r & 255; --U >= 0 && (x *= 256); )
      this[s + U] = r / x & 255;
    return s + l;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 1, 255, 0), this[s] = r & 255, s + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 2, 65535, 0), this[s] = r & 255, this[s + 1] = r >>> 8, s + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 2, 65535, 0), this[s] = r >>> 8, this[s + 1] = r & 255, s + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 4, 4294967295, 0), this[s + 3] = r >>> 24, this[s + 2] = r >>> 16, this[s + 1] = r >>> 8, this[s] = r & 255, s + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 4, 4294967295, 0), this[s] = r >>> 24, this[s + 1] = r >>> 16, this[s + 2] = r >>> 8, this[s + 3] = r & 255, s + 4;
  };
  function q(r, s, l, L, U) {
    Q(s, L, U, r, l, 7);
    let x = Number(s & BigInt(4294967295));
    r[l++] = x, x = x >> 8, r[l++] = x, x = x >> 8, r[l++] = x, x = x >> 8, r[l++] = x;
    let Y = Number(s >> BigInt(32) & BigInt(4294967295));
    return r[l++] = Y, Y = Y >> 8, r[l++] = Y, Y = Y >> 8, r[l++] = Y, Y = Y >> 8, r[l++] = Y, l;
  }
  function ue(r, s, l, L, U) {
    Q(s, L, U, r, l, 7);
    let x = Number(s & BigInt(4294967295));
    r[l + 7] = x, x = x >> 8, r[l + 6] = x, x = x >> 8, r[l + 5] = x, x = x >> 8, r[l + 4] = x;
    let Y = Number(s >> BigInt(32) & BigInt(4294967295));
    return r[l + 3] = Y, Y = Y >> 8, r[l + 2] = Y, Y = Y >> 8, r[l + 1] = Y, Y = Y >> 8, r[l] = Y, l + 8;
  }
  a.prototype.writeBigUInt64LE = fe(function(r, s = 0) {
    return q(this, r, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = fe(function(r, s = 0) {
    return ue(this, r, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(r, s, l, L) {
    if (r = +r, s = s >>> 0, !L) {
      const ie = Math.pow(2, 8 * l - 1);
      oe(this, r, s, l, ie - 1, -ie);
    }
    let U = 0, x = 1, Y = 0;
    for (this[s] = r & 255; ++U < l && (x *= 256); )
      r < 0 && Y === 0 && this[s + U - 1] !== 0 && (Y = 1), this[s + U] = (r / x >> 0) - Y & 255;
    return s + l;
  }, a.prototype.writeIntBE = function(r, s, l, L) {
    if (r = +r, s = s >>> 0, !L) {
      const ie = Math.pow(2, 8 * l - 1);
      oe(this, r, s, l, ie - 1, -ie);
    }
    let U = l - 1, x = 1, Y = 0;
    for (this[s + U] = r & 255; --U >= 0 && (x *= 256); )
      r < 0 && Y === 0 && this[s + U + 1] !== 0 && (Y = 1), this[s + U] = (r / x >> 0) - Y & 255;
    return s + l;
  }, a.prototype.writeInt8 = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[s] = r & 255, s + 1;
  }, a.prototype.writeInt16LE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 2, 32767, -32768), this[s] = r & 255, this[s + 1] = r >>> 8, s + 2;
  }, a.prototype.writeInt16BE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 2, 32767, -32768), this[s] = r >>> 8, this[s + 1] = r & 255, s + 2;
  }, a.prototype.writeInt32LE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 4, 2147483647, -2147483648), this[s] = r & 255, this[s + 1] = r >>> 8, this[s + 2] = r >>> 16, this[s + 3] = r >>> 24, s + 4;
  }, a.prototype.writeInt32BE = function(r, s, l) {
    return r = +r, s = s >>> 0, l || oe(this, r, s, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[s] = r >>> 24, this[s + 1] = r >>> 16, this[s + 2] = r >>> 8, this[s + 3] = r & 255, s + 4;
  }, a.prototype.writeBigInt64LE = fe(function(r, s = 0) {
    return q(this, r, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = fe(function(r, s = 0) {
    return ue(this, r, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function te(r, s, l, L, U, x) {
    if (l + L > r.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function de(r, s, l, L, U) {
    return s = +s, l = l >>> 0, U || te(r, s, l, 4), n.write(r, s, l, L, 23, 4), l + 4;
  }
  a.prototype.writeFloatLE = function(r, s, l) {
    return de(this, r, s, !0, l);
  }, a.prototype.writeFloatBE = function(r, s, l) {
    return de(this, r, s, !1, l);
  };
  function M(r, s, l, L, U) {
    return s = +s, l = l >>> 0, U || te(r, s, l, 8), n.write(r, s, l, L, 52, 8), l + 8;
  }
  a.prototype.writeDoubleLE = function(r, s, l) {
    return M(this, r, s, !0, l);
  }, a.prototype.writeDoubleBE = function(r, s, l) {
    return M(this, r, s, !1, l);
  }, a.prototype.copy = function(r, s, l, L) {
    if (!a.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (l || (l = 0), !L && L !== 0 && (L = this.length), s >= r.length && (s = r.length), s || (s = 0), L > 0 && L < l && (L = l), L === l || r.length === 0 || this.length === 0)
      return 0;
    if (s < 0)
      throw new RangeError("targetStart out of bounds");
    if (l < 0 || l >= this.length)
      throw new RangeError("Index out of range");
    if (L < 0)
      throw new RangeError("sourceEnd out of bounds");
    L > this.length && (L = this.length), r.length - s < L - l && (L = r.length - s + l);
    const U = L - l;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(s, l, L) : Uint8Array.prototype.set.call(r, this.subarray(l, L), s), U;
  }, a.prototype.fill = function(r, s, l, L) {
    if (typeof r == "string") {
      if (typeof s == "string" ? (L = s, s = 0, l = this.length) : typeof l == "string" && (L = l, l = this.length), L !== void 0 && typeof L != "string")
        throw new TypeError("encoding must be a string");
      if (typeof L == "string" && !a.isEncoding(L))
        throw new TypeError("Unknown encoding: " + L);
      if (r.length === 1) {
        const x = r.charCodeAt(0);
        (L === "utf8" && x < 128 || L === "latin1") && (r = x);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (s < 0 || this.length < s || this.length < l)
      throw new RangeError("Out of range index");
    if (l <= s)
      return this;
    s = s >>> 0, l = l === void 0 ? this.length : l >>> 0, r || (r = 0);
    let U;
    if (typeof r == "number")
      for (U = s; U < l; ++U)
        this[U] = r;
    else {
      const x = a.isBuffer(r) ? r : a.from(r, L), Y = x.length;
      if (Y === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (U = 0; U < l - s; ++U)
        this[U + s] = x[U % Y];
    }
    return this;
  };
  const P = {};
  function T(r, s, l) {
    P[r] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: s.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
      }
      get code() {
        return r;
      }
      set code(L) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: L, writable: !0 });
      }
      toString() {
        return `${this.name} [${r}]: ${this.message}`;
      }
    };
  }
  T("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
    return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), T("ERR_INVALID_ARG_TYPE", function(r, s) {
    return `The "${r}" argument must be of type number. Received type ${typeof s}`;
  }, TypeError), T("ERR_OUT_OF_RANGE", function(r, s, l) {
    let L = `The value of "${r}" is out of range.`, U = l;
    return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? U = i(String(l)) : typeof l == "bigint" && (U = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (U = i(U)), U += "n"), L += ` It must be ${s}. Received ${U}`, L;
  }, RangeError);
  function i(r) {
    let s = "", l = r.length;
    const L = r[0] === "-" ? 1 : 0;
    for (; l >= L + 4; l -= 3)
      s = `_${r.slice(l - 3, l)}${s}`;
    return `${r.slice(0, l)}${s}`;
  }
  function j(r, s, l) {
    J(s, "offset"), (r[s] === void 0 || r[s + l] === void 0) && ce(s, r.length - (l + 1));
  }
  function Q(r, s, l, L, U, x) {
    if (r > l || r < s) {
      const Y = typeof s == "bigint" ? "n" : "";
      let ie;
      throw x > 3 ? s === 0 || s === BigInt(0) ? ie = `>= 0${Y} and < 2${Y} ** ${(x + 1) * 8}${Y}` : ie = `>= -(2${Y} ** ${(x + 1) * 8 - 1}${Y}) and < 2 ** ${(x + 1) * 8 - 1}${Y}` : ie = `>= ${s}${Y} and <= ${l}${Y}`, new P.ERR_OUT_OF_RANGE("value", ie, r);
    }
    j(L, U, x);
  }
  function J(r, s) {
    if (typeof r != "number")
      throw new P.ERR_INVALID_ARG_TYPE(s, "number", r);
  }
  function ce(r, s, l) {
    throw Math.floor(r) !== r ? (J(r, l), new P.ERR_OUT_OF_RANGE(l || "offset", "an integer", r)) : s < 0 ? new P.ERR_BUFFER_OUT_OF_BOUNDS() : new P.ERR_OUT_OF_RANGE(l || "offset", `>= ${l ? 1 : 0} and <= ${s}`, r);
  }
  const Fe = /[^+/0-9A-Za-z-_]/g;
  function ve(r) {
    if (r = r.split("=")[0], r = r.trim().replace(Fe, ""), r.length < 2)
      return "";
    for (; r.length % 4 !== 0; )
      r = r + "=";
    return r;
  }
  function Le(r, s) {
    s = s || 1 / 0;
    let l;
    const L = r.length;
    let U = null;
    const x = [];
    for (let Y = 0; Y < L; ++Y) {
      if (l = r.charCodeAt(Y), l > 55295 && l < 57344) {
        if (!U) {
          if (l > 56319) {
            (s -= 3) > -1 && x.push(239, 191, 189);
            continue;
          } else if (Y + 1 === L) {
            (s -= 3) > -1 && x.push(239, 191, 189);
            continue;
          }
          U = l;
          continue;
        }
        if (l < 56320) {
          (s -= 3) > -1 && x.push(239, 191, 189), U = l;
          continue;
        }
        l = (U - 55296 << 10 | l - 56320) + 65536;
      } else
        U && (s -= 3) > -1 && x.push(239, 191, 189);
      if (U = null, l < 128) {
        if ((s -= 1) < 0)
          break;
        x.push(l);
      } else if (l < 2048) {
        if ((s -= 2) < 0)
          break;
        x.push(l >> 6 | 192, l & 63 | 128);
      } else if (l < 65536) {
        if ((s -= 3) < 0)
          break;
        x.push(l >> 12 | 224, l >> 6 & 63 | 128, l & 63 | 128);
      } else if (l < 1114112) {
        if ((s -= 4) < 0)
          break;
        x.push(l >> 18 | 240, l >> 12 & 63 | 128, l >> 6 & 63 | 128, l & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return x;
  }
  function Ne(r) {
    const s = [];
    for (let l = 0; l < r.length; ++l)
      s.push(r.charCodeAt(l) & 255);
    return s;
  }
  function Te(r, s) {
    let l, L, U;
    const x = [];
    for (let Y = 0; Y < r.length && !((s -= 2) < 0); ++Y)
      l = r.charCodeAt(Y), L = l >> 8, U = l % 256, x.push(U), x.push(L);
    return x;
  }
  function me(r) {
    return t.toByteArray(ve(r));
  }
  function ge(r, s, l, L) {
    let U;
    for (U = 0; U < L && !(U + l >= s.length || U >= r.length); ++U)
      s[U + l] = r[U];
    return U;
  }
  function le(r, s) {
    return r instanceof s || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === s.name;
  }
  function ye(r) {
    return r !== r;
  }
  const be = function() {
    const r = "0123456789abcdef", s = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const L = l * 16;
      for (let U = 0; U < 16; ++U)
        s[L + U] = r[l] + r[U];
    }
    return s;
  }();
  function fe(r) {
    return typeof BigInt > "u" ? he : r;
  }
  function he() {
    throw new Error("BigInt not supported");
  }
})(Fi);
const Ae = St({ selectedChain: void 0, chains: void 0, standaloneChains: void 0, standaloneUri: void 0, address: void 0, profileName: void 0, profileAvatar: void 0, profileLoading: !1, balanceLoading: !1, balance: void 0, isConnected: !1, isStandalone: !1, isCustomDesktop: !1, isCustomMobile: !1, isExplorer: !1, isDataLoaded: !1, isUiLoaded: !1 }), bn = { state: Ae, subscribe(e) {
  return $l(Ae, () => e(Ae));
}, setChains(e) {
  Ae.chains = e;
}, setStandaloneChains(e) {
  Ae.standaloneChains = e;
}, setStandaloneUri(e) {
  Ae.standaloneUri = e;
}, getSelectedChain() {
  const e = fn.client().getNetwork().chain;
  return e && (Ae.selectedChain = e), Ae.selectedChain;
}, setSelectedChain(e) {
  Ae.selectedChain = e;
}, setIsStandalone(e) {
  Ae.isStandalone = e;
}, setIsCustomDesktop(e) {
  Ae.isCustomDesktop = e;
}, setIsCustomMobile(e) {
  Ae.isCustomMobile = e;
}, setIsExplorer(e) {
  Ae.isExplorer = e;
}, getAccount() {
  const e = fn.client().getAccount();
  Ae.address = e.address, Ae.isConnected = e.isConnected;
}, setAddress(e) {
  Ae.address = e;
}, setIsConnected(e) {
  Ae.isConnected = e;
}, setProfileName(e) {
  Ae.profileName = e;
}, setProfileAvatar(e) {
  Ae.profileAvatar = e;
}, setProfileLoading(e) {
  Ae.profileLoading = e;
}, setBalanceLoading(e) {
  Ae.balanceLoading = e;
}, setBalance(e) {
  Ae.balance = e;
}, setIsDataLoaded(e) {
  Ae.isDataLoaded = e;
}, setIsUiLoaded(e) {
  Ae.isUiLoaded = e;
}, resetProfile() {
  Ae.profileName = void 0, Ae.profileAvatar = void 0, Ae.balance = void 0;
}, resetAccount() {
  Ae.address = void 0, bn.resetProfile();
} }, tr = St({ initialized: !1, ethereumClient: void 0 }), fn = { setEthereumClient(e) {
  !tr.initialized && e && (tr.ethereumClient = e, bn.setChains(e.chains), tr.initialized = !0);
}, client() {
  if (tr.ethereumClient)
    return tr.ethereumClient;
  throw new Error("ClientCtrl has no client set");
} }, It = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", isMobile() {
  return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return It.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isEmptyObject(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.getOwnPropertyNames(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, formatNativeUrl(e, t, n) {
  if (It.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, n);
  let u = e;
  u.includes("://") || (u = e.replaceAll("/", "").replaceAll(":", ""), u = `${u}://`), this.setWalletConnectDeepLink(u, n);
  const c = encodeURIComponent(t);
  return `${u}wc?uri=${c}`;
}, formatUniversalUrl(e, t, n) {
  if (!It.isHttpUrl(e))
    return this.formatNativeUrl(e, t, n);
  let u = e;
  e.endsWith("/") && (u = e.slice(0, -1)), this.setWalletConnectDeepLink(u, n);
  const c = encodeURIComponent(t);
  return `${u}/wc?uri=${c}`;
}, async wait(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}, openHref(e, t = "_self") {
  window.open(e, t, "noreferrer noopener");
}, setWalletConnectDeepLink(e, t) {
  localStorage.setItem(It.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
}, setWalletConnectAndroidDeepLink(e) {
  const [t] = e.split("?");
  localStorage.setItem(It.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
}, removeWalletConnectDeepLink() {
  localStorage.removeItem(It.WALLETCONNECT_DEEPLINK_CHOICE);
}, isNull(e) {
  return e === null;
}, getWalletConnectVersion() {
  const { isStandalone: e } = bn.state;
  let t = 1;
  return e || (t = fn.client().walletConnectVersion), t;
} };
function Ql() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
St({ projectId: void 0, themeMode: Ql() ? "dark" : "light", themeColor: "default", themeBackground: It.isMobile() ? "themeColor" : "gradient", themeZIndex: 89, mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chainImages: void 0, tokenImages: void 0, standaloneChains: void 0, enableStandaloneMode: !1, enableNetworkView: !1, defaultChain: void 0, explorerAllowList: void 0, explorerDenyList: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 });
St({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, previewWallets: [], recomendedWallets: [] });
St({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 });
St({ open: !1 });
St({ open: !1, message: "", variant: "success" });
typeof window < "u" && (window.Buffer || (window.Buffer = Fi.Buffer), window.global || (window.global = window), window.process || (window.process = { env: {} }));
const Jl = "_btn_1ij5m_5", ec = "_active_1ij5m_19", tc = "_can_not_switch_1ij5m_36", xr = {
  btn: Jl,
  active: ec,
  can_not_switch: tc
}, rc = ({
  chain: e,
  loading: t,
  disabled: n,
  isActive: u,
  canSwitchChain: c,
  onClick: b
}) => {
  const {
    name: E,
    chainId: a
  } = e;
  let _ = u ? xr.active : xr.btn;
  const m = c && !u;
  let v;
  return m ? v = () => b() : (_ = `${_} ${xr.can_not_switch}`, v = () => {
  }), /* @__PURE__ */ se(hs, {
    block: !0,
    className: _,
    disabled: t || n,
    icon: ds(a, 23, 23),
    onClick: v,
    children: E
  });
}, nc = ({
  chain: e,
  loading: t,
  connectedChainId: n,
  expectedChainId: u,
  canSwitchChain: c,
  onClick: b
}) => {
  const {
    chainId: E
  } = e, a = E === n;
  let _;
  return !a && u && (_ = E !== u), /* @__PURE__ */ se(rc, {
    onClick: b,
    loading: t,
    disabled: _,
    isActive: a,
    canSwitchChain: c,
    chain: e
  });
};
const Rr = ({
  account: e,
  onClick: t,
  walletIcon: n,
  walletName: u,
  labelText: c
}) => {
  let b = /* @__PURE__ */ se("span", {
    className: "cnn",
    children: c
  }), E = "connect-wallet-button";
  return e && (b = /* @__PURE__ */ se("span", {
    className: "acc",
    children: ys(e)
  }), E = `${E} active`), /* @__PURE__ */ ot("div", {
    onClick: e ? void 0 : t,
    className: E,
    children: [n, /* @__PURE__ */ se("span", {
      className: "wallet-name",
      children: u
    }), b]
  });
}, oc = () => /* @__PURE__ */ ot("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ se("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ se("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), ic = /* @__PURE__ */ se(Ho, {
  component: oc
}), sc = () => /* @__PURE__ */ se("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ se("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), ac = /* @__PURE__ */ se(Ho, {
  component: sc
}), uc = "_chain_name_8kdgo_1", fc = {
  chain_name: uc
}, lc = "_bold_5fnjw_5", Ro = {
  bold: lc
}, _n = ({
  className: e,
  children: t
}) => {
  const n = e ? `${e} ${Ro.bold}` : Ro.bold;
  return /* @__PURE__ */ se("span", {
    className: n,
    children: t
  });
}, rr = ({
  children: e
}) => /* @__PURE__ */ se(_n, {
  className: fc.chain_name,
  children: e
}), cc = ({
  account: e,
  chain: t,
  supportedChains: n,
  expectedChainId: u
}) => e ? u ? /* @__PURE__ */ ot(Bt, {
  children: ["You connected to ", /* @__PURE__ */ ot(rr, {
    children: [t.name, "."]
  }), /* @__PURE__ */ ot("div", {
    children: ["Please connect to ", /* @__PURE__ */ se(rr, {
      children: gs(u)
    }), " network."]
  })]
}) : n.some((c) => c.name === t.name) ? /* @__PURE__ */ ot(Bt, {
  children: ["You are currently using ", /* @__PURE__ */ se(_n, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ se(rr, {
    children: t.name
  }), " network"]
}) : /* @__PURE__ */ ot(Bt, {
  children: ["You connected to ", /* @__PURE__ */ ot(rr, {
    children: [t.name, "."]
  }), /* @__PURE__ */ ot("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ se(rr, {
      children: n.map((c) => c.name).join(", ")
    })]
  })]
}) : null, gc = ({
  props: e,
  isMobile: t,
  btnGutter: n,
  styles: u
}) => {
  const {
    onCancel: c,
    onClose: b,
    afterConnect: E,
    afterChainSwitch: a,
    web3: _,
    expectedChainId: m
  } = e, [v, C] = ps(!1), B = /* @__PURE__ */ ot(Bt, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ se("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge"]
  }), A = /* @__PURE__ */ ot(Bt, {
    children: ["that you have read and understand the ", /* @__PURE__ */ se("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), {
    supportedChains: O,
    chain: I,
    switchChain: $,
    canSwitchChain: W,
    connect: f,
    account: y,
    connectorName: h,
    supportedConnectors: d
  } = _, g = () => {
    b && b(), c && c();
  }, o = async (S, D) => {
    C(!0);
    try {
      await f(S, D) && (c && c(), E && E());
    } finally {
      C(!1);
    }
  }, p = async (S) => {
    C(!0);
    try {
      await $(S) && (c && c(), a && a());
    } finally {
      C(!1);
    }
  }, k = (S) => {
    const {
      chainId: D
    } = S;
    return /* @__PURE__ */ se(Nr, {
      flex: t ? 24 : 3,
      children: /* @__PURE__ */ se(nc, {
        onClick: () => p(D),
        loading: v,
        expectedChainId: m,
        connectedChainId: I.chainId,
        canSwitchChain: W,
        chain: S
      })
    }, D);
  }, R = (S, D, Z, z) => {
    if (y && Z === h)
      return /* @__PURE__ */ se(Rr, {
        disabled: !0,
        walletName: D,
        walletIcon: z,
        account: y
      });
    const H = d[Z];
    return H.isInstalled ? /* @__PURE__ */ se(Rr, {
      walletName: D,
      onClick: () => o(S, Z),
      walletIcon: z,
      labelText: "Connect"
    }) : /* @__PURE__ */ se(Rr, {
      walletName: D,
      onClick: () => window.open(H.installUrl, "_blank").focus(),
      walletIcon: z,
      labelText: "Install"
    });
  }, X = t ? void 0 : "space-between", ee = t ? 24 : 12, ne = m || O[0].chainId, w = /* @__PURE__ */ ot(Bt, {
    children: [bs(I) && /* @__PURE__ */ ot(Bt, {
      children: [/* @__PURE__ */ se("div", {
        className: u.description,
        children: /* @__PURE__ */ se(cc, {
          account: y,
          chain: I,
          supportedChains: O,
          expectedChainId: m
        })
      }), /* @__PURE__ */ se(Cn, {
        gutter: n,
        className: u.chain_buttons,
        justify: X,
        children: O.map((S) => k(S))
      })]
    }), /* @__PURE__ */ ot("div", {
      className: u.description,
      children: [/* @__PURE__ */ se(_n, {
        children: "Connect your Wallet"
      }), " and jump into the world of NFT's"]
    }), /* @__PURE__ */ ot(Cn, {
      gutter: n,
      justify: X,
      children: [/* @__PURE__ */ se(Nr, {
        span: ee,
        children: R(ne, "Metamask", Hr.Injected, ic)
      }), /* @__PURE__ */ se(Nr, {
        span: ee,
        children: R(ne, "WalletConnect", Hr.WalletConnect, ac)
      })]
    })]
  });
  return {
    footer1: B,
    footer2: A,
    content: w,
    onCancel: g,
    loading: v
  };
};
export {
  gc as u
};
//# sourceMappingURL=useConnectModalCommon.ed1d6f46.mjs.map
