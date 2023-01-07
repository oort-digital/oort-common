import "ethers";
import { Button as ts, Row as wn, Col as Mr } from "antd";
import { useState as rs } from "react";
import { j as se, g as ns, t as is, a as nt, I as Ci, F as Ut, b as os, i as ss } from "./index.83dd773d.mjs";
var Nr = ((e) => (e.Undefined = "", e.Injected = "Injected", e.WalletConnect = "WalletConnect", e))(Nr || {}), it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function as(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function on(e) {
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
function us(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return '"[Circular]"';
  }
}
var fs = cs;
function cs(e, t, n) {
  var u = n && n.stringify || us, c = 1;
  if (typeof e == "object" && e !== null) {
    var h = t.length + c;
    if (h === 1)
      return e;
    var b = new Array(h);
    b[0] = u(e);
    for (var a = 1; a < h; a++)
      b[a] = u(t[a]);
    return b.join(" ");
  }
  if (typeof e != "string")
    return e;
  var l = t.length;
  if (l === 0)
    return e;
  for (var y = "", v = 1 - c, x = -1, R = e && e.length || 0, S = 0; S < R; ) {
    if (e.charCodeAt(S) === 37 && S + 1 < R) {
      switch (x = x > -1 ? x : 0, e.charCodeAt(S + 1)) {
        case 100:
        case 102:
          if (v >= l || t[v] == null)
            break;
          x < S && (y += e.slice(x, S)), y += Number(t[v]), x = S + 2, S++;
          break;
        case 105:
          if (v >= l || t[v] == null)
            break;
          x < S && (y += e.slice(x, S)), y += Math.floor(Number(t[v])), x = S + 2, S++;
          break;
        case 79:
        case 111:
        case 106:
          if (v >= l || t[v] === void 0)
            break;
          x < S && (y += e.slice(x, S));
          var O = typeof t[v];
          if (O === "string") {
            y += "'" + t[v] + "'", x = S + 2, S++;
            break;
          }
          if (O === "function") {
            y += t[v].name || "<anonymous>", x = S + 2, S++;
            break;
          }
          y += u(t[v]), x = S + 2, S++;
          break;
        case 115:
          if (v >= l)
            break;
          x < S && (y += e.slice(x, S)), y += String(t[v]), x = S + 2, S++;
          break;
        case 37:
          x < S && (y += e.slice(x, S)), y += "%", x = S + 2, S++, v--;
          break;
      }
      ++v;
    }
    ++S;
  }
  return x === -1 ? e : (x < R && (y += e.slice(x)), y);
}
const mn = fs;
var hs = gt;
const tr = ms().console || {}, ls = { mapHttpRequest: yr, mapHttpResponse: yr, wrapRequestSerializer: xr, wrapResponseSerializer: xr, wrapErrorSerializer: xr, req: yr, res: yr, err: _s };
function ps(e, t) {
  return Array.isArray(e) ? e.filter(function(n) {
    return n !== "!stdSerializers.err";
  }) : e === !0 ? Object.keys(t) : !1;
}
function gt(e) {
  e = e || {}, e.browser = e.browser || {};
  const t = e.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const n = e.browser.write || tr;
  e.browser.write && (e.browser.asObject = !0);
  const u = e.serializers || {}, c = ps(e.browser.serialize, u);
  let h = e.browser.serialize;
  Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (h = !1);
  const b = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof n == "function" && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), e.enabled === !1 && (e.level = "silent");
  const a = e.level || "info", l = Object.create(n);
  l.log || (l.log = rr), Object.defineProperty(l, "levelVal", { get: v }), Object.defineProperty(l, "level", { get: x, set: R });
  const y = { transmit: t, serialize: c, asObject: e.browser.asObject, levels: b, timestamp: bs(e) };
  l.levels = gt.levels, l.level = a, l.setMaxListeners = l.getMaxListeners = l.emit = l.addListener = l.on = l.prependListener = l.once = l.prependOnceListener = l.removeListener = l.removeAllListeners = l.listeners = l.listenerCount = l.eventNames = l.write = l.flush = rr, l.serializers = u, l._serialize = c, l._stdErrSerialize = h, l.child = S, t && (l._logEvent = Pr());
  function v() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function x() {
    return this._level;
  }
  function R(O) {
    if (O !== "silent" && !this.levels.values[O])
      throw Error("unknown level " + O);
    this._level = O, Rt(y, l, "error", "log"), Rt(y, l, "fatal", "error"), Rt(y, l, "warn", "error"), Rt(y, l, "info", "log"), Rt(y, l, "debug", "log"), Rt(y, l, "trace", "log");
  }
  function S(O, k) {
    if (!O)
      throw new Error("missing bindings for child Pino");
    k = k || {}, c && O.serializers && (k.serializers = O.serializers);
    const H = k.serializers;
    if (c && H) {
      var X = Object.assign({}, u, H), A = e.browser.serialize === !0 ? Object.keys(X) : c;
      delete O.serializers, Sr([O], A, X, this._stdErrSerialize);
    }
    function B(_) {
      this._childLevel = (_._childLevel | 0) + 1, this.error = kt(_, O, "error"), this.fatal = kt(_, O, "fatal"), this.warn = kt(_, O, "warn"), this.info = kt(_, O, "info"), this.debug = kt(_, O, "debug"), this.trace = kt(_, O, "trace"), X && (this.serializers = X, this._serialize = A), t && (this._logEvent = Pr([].concat(_._logEvent.bindings, O)));
    }
    return B.prototype = this, new B(this);
  }
  return l;
}
gt.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }, gt.stdSerializers = ls, gt.stdTimeFunctions = Object.assign({}, { nullTime: Bi, epochTime: Ti, unixTime: vs, isoTime: ws });
function Rt(e, t, n, u) {
  const c = Object.getPrototypeOf(t);
  t[n] = t.levelVal > t.levels.values[n] ? rr : c[n] ? c[n] : tr[n] || tr[u] || rr, ds(e, t, n);
}
function ds(e, t, n) {
  !e.transmit && t[n] === rr || (t[n] = function(u) {
    return function() {
      const c = e.timestamp(), h = new Array(arguments.length), b = Object.getPrototypeOf && Object.getPrototypeOf(this) === tr ? tr : this;
      for (var a = 0; a < h.length; a++)
        h[a] = arguments[a];
      if (e.serialize && !e.asObject && Sr(h, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? u.call(b, ys(this, n, h, c)) : u.apply(b, h), e.transmit) {
        const l = e.transmit.level || t.level, y = gt.levels.values[l], v = gt.levels.values[n];
        if (v < y)
          return;
        gs(this, { ts: c, methodLevel: n, methodValue: v, transmitLevel: l, transmitValue: gt.levels.values[e.transmit.level || t.level], send: e.transmit.send, val: t.levelVal }, h);
      }
    };
  }(t[n]));
}
function ys(e, t, n, u) {
  e._serialize && Sr(n, e._serialize, e.serializers, e._stdErrSerialize);
  const c = n.slice();
  let h = c[0];
  const b = {};
  u && (b.time = u), b.level = gt.levels.values[t];
  let a = (e._childLevel | 0) + 1;
  if (a < 1 && (a = 1), h !== null && typeof h == "object") {
    for (; a-- && typeof c[0] == "object"; )
      Object.assign(b, c.shift());
    h = c.length ? mn(c.shift(), c) : void 0;
  } else
    typeof h == "string" && (h = mn(c.shift(), c));
  return h !== void 0 && (b.msg = h), b;
}
function Sr(e, t, n, u) {
  for (const c in e)
    if (u && e[c] instanceof Error)
      e[c] = gt.stdSerializers.err(e[c]);
    else if (typeof e[c] == "object" && !Array.isArray(e[c]))
      for (const h in e[c])
        t && t.indexOf(h) > -1 && h in n && (e[c][h] = n[h](e[c][h]));
}
function kt(e, t, n) {
  return function() {
    const u = new Array(1 + arguments.length);
    u[0] = t;
    for (var c = 1; c < u.length; c++)
      u[c] = arguments[c - 1];
    return e[n].apply(this, u);
  };
}
function gs(e, t, n) {
  const u = t.send, c = t.ts, h = t.methodLevel, b = t.methodValue, a = t.val, l = e._logEvent.bindings;
  Sr(n, e._serialize || Object.keys(e.serializers), e.serializers, e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize), e._logEvent.ts = c, e._logEvent.messages = n.filter(function(y) {
    return l.indexOf(y) === -1;
  }), e._logEvent.level.label = h, e._logEvent.level.value = b, u(h, e._logEvent, a), e._logEvent = Pr(l);
}
function Pr(e) {
  return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } };
}
function _s(e) {
  const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
  for (const n in e)
    t[n] === void 0 && (t[n] = e[n]);
  return t;
}
function bs(e) {
  return typeof e.timestamp == "function" ? e.timestamp : e.timestamp === !1 ? Bi : Ti;
}
function yr() {
  return {};
}
function xr(e) {
  return e;
}
function rr() {
}
function Bi() {
  return !1;
}
function Ti() {
  return Date.now();
}
function vs() {
  return Math.round(Date.now() / 1e3);
}
function ws() {
  return new Date(Date.now()).toISOString();
}
function ms() {
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
var Hr = { exports: {} }, Vt = typeof Reflect == "object" ? Reflect : null, En = Vt && typeof Vt.apply == "function" ? Vt.apply : function(e, t, n) {
  return Function.prototype.apply.call(e, t, n);
}, _r;
Vt && typeof Vt.ownKeys == "function" ? _r = Vt.ownKeys : Object.getOwnPropertySymbols ? _r = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : _r = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Es(e) {
  console && console.warn && console.warn(e);
}
var Fn = Number.isNaN || function(e) {
  return e !== e;
};
function Ae() {
  Ae.init.call(this);
}
Hr.exports = Ae, Hr.exports.once = Ss, Ae.EventEmitter = Ae, Ae.prototype._events = void 0, Ae.prototype._eventsCount = 0, Ae.prototype._maxListeners = void 0;
var Ln = 10;
function br(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ae, "defaultMaxListeners", { enumerable: !0, get: function() {
  return Ln;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || Fn(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  Ln = e;
} }), Ae.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, Ae.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Fn(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Mi(e) {
  return e._maxListeners === void 0 ? Ae.defaultMaxListeners : e._maxListeners;
}
Ae.prototype.getMaxListeners = function() {
  return Mi(this);
}, Ae.prototype.emit = function(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t.push(arguments[n]);
  var u = e === "error", c = this._events;
  if (c !== void 0)
    u = u && c.error === void 0;
  else if (!u)
    return !1;
  if (u) {
    var h;
    if (t.length > 0 && (h = t[0]), h instanceof Error)
      throw h;
    var b = new Error("Unhandled error." + (h ? " (" + h.message + ")" : ""));
    throw b.context = h, b;
  }
  var a = c[e];
  if (a === void 0)
    return !1;
  if (typeof a == "function")
    En(a, this, t);
  else
    for (var l = a.length, y = xi(a, l), n = 0; n < l; ++n)
      En(y[n], this, t);
  return !0;
};
function On(e, t, n, u) {
  var c, h, b;
  if (br(n), h = e._events, h === void 0 ? (h = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (h.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), h = e._events), b = h[t]), b === void 0)
    b = h[t] = n, ++e._eventsCount;
  else if (typeof b == "function" ? b = h[t] = u ? [n, b] : [b, n] : u ? b.unshift(n) : b.push(n), c = Mi(e), c > 0 && b.length > c && !b.warned) {
    b.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + b.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = b.length, Es(a);
  }
  return e;
}
Ae.prototype.addListener = function(e, t) {
  return On(this, e, t, !1);
}, Ae.prototype.on = Ae.prototype.addListener, Ae.prototype.prependListener = function(e, t) {
  return On(this, e, t, !0);
};
function Fs() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Sn(e, t, n) {
  var u = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, c = Fs.bind(u);
  return c.listener = n, u.wrapFn = c, c;
}
Ae.prototype.once = function(e, t) {
  return br(t), this.on(e, Sn(this, e, t)), this;
}, Ae.prototype.prependOnceListener = function(e, t) {
  return br(t), this.prependListener(e, Sn(this, e, t)), this;
}, Ae.prototype.removeListener = function(e, t) {
  var n, u, c, h, b;
  if (br(t), u = this._events, u === void 0)
    return this;
  if (n = u[e], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete u[e], u.removeListener && this.emit("removeListener", e, n.listener || t));
  else if (typeof n != "function") {
    for (c = -1, h = n.length - 1; h >= 0; h--)
      if (n[h] === t || n[h].listener === t) {
        b = n[h].listener, c = h;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? n.shift() : Ls(n, c), n.length === 1 && (u[e] = n[0]), u.removeListener !== void 0 && this.emit("removeListener", e, b || t);
  }
  return this;
}, Ae.prototype.off = Ae.prototype.removeListener, Ae.prototype.removeAllListeners = function(e) {
  var t, n, u;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var c = Object.keys(n), h;
    for (u = 0; u < c.length; ++u)
      h = c[u], h !== "removeListener" && this.removeAllListeners(h);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = n[e], typeof t == "function")
    this.removeListener(e, t);
  else if (t !== void 0)
    for (u = t.length - 1; u >= 0; u--)
      this.removeListener(e, t[u]);
  return this;
};
function An(e, t, n) {
  var u = e._events;
  if (u === void 0)
    return [];
  var c = u[t];
  return c === void 0 ? [] : typeof c == "function" ? n ? [c.listener || c] : [c] : n ? Os(c) : xi(c, c.length);
}
Ae.prototype.listeners = function(e) {
  return An(this, e, !0);
}, Ae.prototype.rawListeners = function(e) {
  return An(this, e, !1);
}, Ae.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Cn.call(e, t);
}, Ae.prototype.listenerCount = Cn;
function Cn(e) {
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
Ae.prototype.eventNames = function() {
  return this._eventsCount > 0 ? _r(this._events) : [];
};
function xi(e, t) {
  for (var n = new Array(t), u = 0; u < t; ++u)
    n[u] = e[u];
  return n;
}
function Ls(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Os(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Ss(e, t) {
  return new Promise(function(n, u) {
    function c(b) {
      e.removeListener(t, h), u(b);
    }
    function h() {
      typeof e.removeListener == "function" && e.removeListener("error", c), n([].slice.call(arguments));
    }
    Ui(e, t, h, { once: !0 }), t !== "error" && As(e, c, { once: !0 });
  });
}
function As(e, t, n) {
  typeof e.on == "function" && Ui(e, "error", t, n);
}
function Ui(e, t, n, u) {
  if (typeof e.on == "function")
    u.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function c(h) {
      u.once && e.removeEventListener(t, c), n(h);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var wr = {};
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
function Cs(e, t) {
  Dr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var zr = function() {
  return zr = Object.assign || function(e) {
    for (var t, n = 1, u = arguments.length; n < u; n++) {
      t = arguments[n];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, zr.apply(this, arguments);
};
function Bs(e, t) {
  var n = {};
  for (var u in e)
    Object.prototype.hasOwnProperty.call(e, u) && t.indexOf(u) < 0 && (n[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, u = Object.getOwnPropertySymbols(e); c < u.length; c++)
      t.indexOf(u[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[c]) && (n[u[c]] = e[u[c]]);
  return n;
}
function Ts(e, t, n, u) {
  var c = arguments.length, h = c < 3 ? t : u === null ? u = Object.getOwnPropertyDescriptor(t, n) : u, b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    h = Reflect.decorate(e, t, n, u);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (b = e[a]) && (h = (c < 3 ? b(h) : c > 3 ? b(t, n, h) : b(t, n)) || h);
  return c > 3 && h && Object.defineProperty(t, n, h), h;
}
function Ms(e, t) {
  return function(n, u) {
    t(n, u, e);
  };
}
function xs(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Us(e, t, n, u) {
  function c(h) {
    return h instanceof n ? h : new n(function(b) {
      b(h);
    });
  }
  return new (n || (n = Promise))(function(h, b) {
    function a(v) {
      try {
        y(u.next(v));
      } catch (x) {
        b(x);
      }
    }
    function l(v) {
      try {
        y(u.throw(v));
      } catch (x) {
        b(x);
      }
    }
    function y(v) {
      v.done ? h(v.value) : c(v.value).then(a, l);
    }
    y((u = u.apply(e, t || [])).next());
  });
}
function js(e, t) {
  var n = { label: 0, sent: function() {
    if (h[0] & 1)
      throw h[1];
    return h[1];
  }, trys: [], ops: [] }, u, c, h, b;
  return b = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
    return this;
  }), b;
  function a(y) {
    return function(v) {
      return l([y, v]);
    };
  }
  function l(y) {
    if (u)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (u = 1, c && (h = y[0] & 2 ? c.return : y[0] ? c.throw || ((h = c.return) && h.call(c), 0) : c.next) && !(h = h.call(c, y[1])).done)
          return h;
        switch (c = 0, h && (y = [y[0] & 2, h.value]), y[0]) {
          case 0:
          case 1:
            h = y;
            break;
          case 4:
            return n.label++, { value: y[1], done: !1 };
          case 5:
            n.label++, c = y[1], y = [0];
            continue;
          case 7:
            y = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (h = n.trys, !(h = h.length > 0 && h[h.length - 1]) && (y[0] === 6 || y[0] === 2)) {
              n = 0;
              continue;
            }
            if (y[0] === 3 && (!h || y[1] > h[0] && y[1] < h[3])) {
              n.label = y[1];
              break;
            }
            if (y[0] === 6 && n.label < h[1]) {
              n.label = h[1], h = y;
              break;
            }
            if (h && n.label < h[2]) {
              n.label = h[2], n.ops.push(y);
              break;
            }
            h[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        y = t.call(e, n);
      } catch (v) {
        y = [6, v], c = 0;
      } finally {
        u = h = 0;
      }
    if (y[0] & 5)
      throw y[1];
    return { value: y[0] ? y[1] : void 0, done: !0 };
  }
}
function Is(e, t, n, u) {
  u === void 0 && (u = n), e[u] = t[n];
}
function Rs(e, t) {
  for (var n in e)
    n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function Vr(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], u = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return e && u >= e.length && (e = void 0), { value: e && e[u++], done: !e };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ji(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var u = n.call(e), c, h = [], b;
  try {
    for (; (t === void 0 || t-- > 0) && !(c = u.next()).done; )
      h.push(c.value);
  } catch (a) {
    b = { error: a };
  } finally {
    try {
      c && !c.done && (n = u.return) && n.call(u);
    } finally {
      if (b)
        throw b.error;
    }
  }
  return h;
}
function ks() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(ji(arguments[t]));
  return e;
}
function Ns() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var u = Array(e), c = 0, t = 0; t < n; t++)
    for (var h = arguments[t], b = 0, a = h.length; b < a; b++, c++)
      u[c] = h[b];
  return u;
}
function nr(e) {
  return this instanceof nr ? (this.v = e, this) : new nr(e);
}
function Ps(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = n.apply(e, t || []), c, h = [];
  return c = {}, b("next"), b("throw"), b("return"), c[Symbol.asyncIterator] = function() {
    return this;
  }, c;
  function b(R) {
    u[R] && (c[R] = function(S) {
      return new Promise(function(O, k) {
        h.push([R, S, O, k]) > 1 || a(R, S);
      });
    });
  }
  function a(R, S) {
    try {
      l(u[R](S));
    } catch (O) {
      x(h[0][3], O);
    }
  }
  function l(R) {
    R.value instanceof nr ? Promise.resolve(R.value.v).then(y, v) : x(h[0][2], R);
  }
  function y(R) {
    a("next", R);
  }
  function v(R) {
    a("throw", R);
  }
  function x(R, S) {
    R(S), h.shift(), h.length && a(h[0][0], h[0][1]);
  }
}
function Hs(e) {
  var t, n;
  return t = {}, u("next"), u("throw", function(c) {
    throw c;
  }), u("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function u(c, h) {
    t[c] = e[c] ? function(b) {
      return (n = !n) ? { value: nr(e[c](b)), done: c === "return" } : h ? h(b) : b;
    } : h;
  }
}
function Ds(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Vr == "function" ? Vr(e) : e[Symbol.iterator](), n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function u(h) {
    n[h] = e[h] && function(b) {
      return new Promise(function(a, l) {
        b = e[h](b), c(a, l, b.done, b.value);
      });
    };
  }
  function c(h, b, a, l) {
    Promise.resolve(l).then(function(y) {
      h({ value: y, done: a });
    }, b);
  }
}
function zs(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Vs(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function $s(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ks(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Ys(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, n), n;
}
var Ws = Object.freeze({ __proto__: null, __extends: Cs, get __assign() {
  return zr;
}, __rest: Bs, __decorate: Ts, __param: Ms, __metadata: xs, __awaiter: Us, __generator: js, __createBinding: Is, __exportStar: Rs, __values: Vr, __read: ji, __spread: ks, __spreadArrays: Ns, __await: nr, __asyncGenerator: Ps, __asyncDelegator: Hs, __asyncValues: Ds, __makeTemplateObject: zs, __importStar: Vs, __importDefault: $s, __classPrivateFieldGet: Ks, __classPrivateFieldSet: Ys }), ht = on(Ws), or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
function qs(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
or.safeJsonParse = qs;
function Xs(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, n) => typeof n > "u" ? null : n);
}
or.safeJsonStringify = Xs;
var gr = { exports: {} }, Bn;
function Zs() {
  return Bn || (Bn = 1, function() {
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
    }), typeof it < "u" && it.localStorage ? gr.exports = it.localStorage : typeof window < "u" && window.localStorage ? gr.exports = window.localStorage : gr.exports = new t();
  }()), gr.exports;
}
var Tn = {}, qt = {}, Mn;
function Gs() {
  if (Mn)
    return qt;
  Mn = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.IKeyValueStorage = void 0;
  class e {
  }
  return qt.IKeyValueStorage = e, qt;
}
var Xt = {}, xn;
function Qs() {
  if (xn)
    return Xt;
  xn = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.parseEntry = void 0;
  const e = or;
  function t(n) {
    var u;
    return [n[0], e.safeJsonParse((u = n[1]) !== null && u !== void 0 ? u : "")];
  }
  return Xt.parseEntry = t, Xt;
}
var Un;
function Js() {
  return Un || (Un = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ht;
    t.__exportStar(Gs(), e), t.__exportStar(Qs(), e);
  }(Tn)), Tn;
}
Object.defineProperty(wr, "__esModule", { value: !0 }), wr.KeyValueStorage = void 0;
const zt = ht, jn = or, ea = zt.__importDefault(Zs()), ta = Js();
class Ii {
  constructor() {
    this.localStorage = ea.default;
  }
  getKeys() {
    return zt.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return zt.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(ta.parseEntry);
    });
  }
  getItem(t) {
    return zt.__awaiter(this, void 0, void 0, function* () {
      const n = this.localStorage.getItem(t);
      if (n !== null)
        return jn.safeJsonParse(n);
    });
  }
  setItem(t, n) {
    return zt.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, jn.safeJsonStringify(n));
    });
  }
  removeItem(t) {
    return zt.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
wr.KeyValueStorage = Ii;
wr.default = Ii;
var ra = {}, Zt = {}, Oe = {}, In = {}, Gt = {}, Rn;
function na() {
  if (Rn)
    return Gt;
  Rn = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.delay = void 0;
  function e(t) {
    return new Promise((n) => {
      setTimeout(() => {
        n(!0);
      }, t);
    });
  }
  return Gt.delay = e, Gt;
}
var Tt = {}, kn = {}, Nt = {}, Nn;
function ia() {
  return Nn || (Nn = 1, Object.defineProperty(Nt, "__esModule", { value: !0 }), Nt.ONE_THOUSAND = Nt.ONE_HUNDRED = void 0, Nt.ONE_HUNDRED = 100, Nt.ONE_THOUSAND = 1e3), Nt;
}
var Pn = {}, Hn;
function oa() {
  return Hn || (Hn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(Pn)), Pn;
}
var Dn;
function Ri() {
  return Dn || (Dn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ht;
    t.__exportStar(ia(), e), t.__exportStar(oa(), e);
  }(kn)), kn;
}
var zn;
function sa() {
  if (zn)
    return Tt;
  zn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.fromMiliseconds = Tt.toMiliseconds = void 0;
  const e = Ri();
  function t(u) {
    return u * e.ONE_THOUSAND;
  }
  Tt.toMiliseconds = t;
  function n(u) {
    return Math.floor(u / e.ONE_THOUSAND);
  }
  return Tt.fromMiliseconds = n, Tt;
}
var Vn;
function aa() {
  return Vn || (Vn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ht;
    t.__exportStar(na(), e), t.__exportStar(sa(), e);
  }(In)), In;
}
var Pt = {}, $n;
function ua() {
  if ($n)
    return Pt;
  $n = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.Watch = void 0;
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
  return Pt.Watch = e, Pt.default = e, Pt;
}
var Kn = {}, Qt = {}, Yn;
function fa() {
  if (Yn)
    return Qt;
  Yn = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.IWatch = void 0;
  class e {
  }
  return Qt.IWatch = e, Qt;
}
var Wn;
function ca() {
  return Wn || (Wn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ht.__exportStar(fa(), e);
  }(Kn)), Kn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ht;
  t.__exportStar(aa(), e), t.__exportStar(ua(), e), t.__exportStar(ca(), e), t.__exportStar(Ri(), e);
})(Oe);
var qn = {}, Jt = {};
class ha {
}
var la = Object.freeze({ __proto__: null, IEvents: ha }), pa = on(la), Xn;
function da() {
  if (Xn)
    return Jt;
  Xn = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.IHeartBeat = void 0;
  const e = pa;
  class t extends e.IEvents {
    constructor(u) {
      super();
    }
  }
  return Jt.IHeartBeat = t, Jt;
}
var Zn;
function ki() {
  return Zn || (Zn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ht.__exportStar(da(), e);
  }(qn)), qn;
}
var Gn = {}, Mt = {}, Qn;
function ya() {
  if (Qn)
    return Mt;
  Qn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.HEARTBEAT_EVENTS = Mt.HEARTBEAT_INTERVAL = void 0;
  const e = Oe;
  return Mt.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Mt.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }, Mt;
}
var Jn;
function Ni() {
  return Jn || (Jn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ht.__exportStar(ya(), e);
  }(Gn)), Gn;
}
var ei;
function ga() {
  if (ei)
    return Zt;
  ei = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.HeartBeat = void 0;
  const e = ht, t = Hr.exports, n = Oe, u = ki(), c = Ni();
  class h extends u.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = c.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || c.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const l = new h(a);
        return yield l.init(), l;
      });
    }
    init() {
      return e.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    on(a, l) {
      this.events.on(a, l);
    }
    once(a, l) {
      this.events.once(a, l);
    }
    off(a, l) {
      this.events.off(a, l);
    }
    removeListener(a, l) {
      this.events.removeListener(a, l);
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
  return Zt.HeartBeat = h, Zt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ht;
  t.__exportStar(ga(), e), t.__exportStar(ki(), e), t.__exportStar(Ni(), e);
})(ra);
var _a = {}, Ht = {}, ti;
function Pi() {
  return ti || (ti = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.PINO_CUSTOM_CONTEXT_KEY = Ht.PINO_LOGGER_DEFAULTS = void 0, Ht.PINO_LOGGER_DEFAULTS = { level: "info" }, Ht.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Ht;
}
var rt = {}, ri;
function ba() {
  if (ri)
    return rt;
  ri = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.generateChildLogger = rt.formatChildLoggerContext = rt.getLoggerContext = rt.setBrowserLoggerContext = rt.getBrowserLoggerContext = rt.getDefaultLoggerOptions = void 0;
  const e = Pi();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  rt.getDefaultLoggerOptions = t;
  function n(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  rt.getBrowserLoggerContext = n;
  function u(a, l, y = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[y] = l, a;
  }
  rt.setBrowserLoggerContext = u;
  function c(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    let y = "";
    return typeof a.bindings > "u" ? y = n(a, l) : y = a.bindings().context || "", y;
  }
  rt.getLoggerContext = c;
  function h(a, l, y = e.PINO_CUSTOM_CONTEXT_KEY) {
    const v = c(a, y);
    return v.trim() ? `${v}/${l}` : l;
  }
  rt.formatChildLoggerContext = h;
  function b(a, l, y = e.PINO_CUSTOM_CONTEXT_KEY) {
    const v = h(a, l, y), x = a.child({ context: v });
    return u(x, v, y);
  }
  return rt.generateChildLogger = b, rt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = ht, n = t.__importDefault(hs);
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return n.default;
  } }), t.__exportStar(Pi(), e), t.__exportStar(ba(), e);
})(_a);
var va = {}, sn = {}, mr = {}, Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 }), Er.BrowserRandomSource = void 0;
const ni = 65536;
class wa {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const n = new Uint8Array(t);
    for (let u = 0; u < n.length; u += ni)
      this._crypto.getRandomValues(n.subarray(u, u + Math.min(n.length - u, ni)));
    return n;
  }
}
Er.BrowserRandomSource = wa;
function ma(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Fr = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
function Ea(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
at.wipe = Ea;
var Fa = {}, La = Object.freeze({ __proto__: null, default: Fa }), Oa = on(La);
Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.NodeRandomSource = void 0;
const Sa = at;
class Aa {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof ma < "u") {
      const t = Oa;
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
    return (0, Sa.wipe)(n), u;
  }
}
Fr.NodeRandomSource = Aa, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.SystemRandomSource = void 0;
const Ca = Er, Ba = Fr;
class Ta {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Ca.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Ba.NodeRandomSource(), this._source.isAvailable) {
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
mr.SystemRandomSource = Ta;
var pe = {}, Hi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, l) {
    var y = a >>> 16 & 65535, v = a & 65535, x = l >>> 16 & 65535, R = l & 65535;
    return v * R + (y * R + v * x << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function n(a, l) {
    return a + l | 0;
  }
  e.add = n;
  function u(a, l) {
    return a - l | 0;
  }
  e.sub = u;
  function c(a, l) {
    return a << l | a >>> 32 - l;
  }
  e.rotl = c;
  function h(a, l) {
    return a << 32 - l | a >>> l;
  }
  e.rotr = h;
  function b(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  e.isInteger = Number.isInteger || b, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(a) {
    return e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER;
  };
})(Hi), Object.defineProperty(pe, "__esModule", { value: !0 });
var Di = Hi;
function Ma(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
pe.readInt16BE = Ma;
function xa(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
pe.readUint16BE = xa;
function Ua(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
pe.readInt16LE = Ua;
function ja(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
pe.readUint16LE = ja;
function ii(e, t, n) {
  return t === void 0 && (t = new Uint8Array(2)), n === void 0 && (n = 0), t[n + 0] = e >>> 8, t[n + 1] = e >>> 0, t;
}
pe.writeUint16BE = ii, pe.writeInt16BE = ii;
function oi(e, t, n) {
  return t === void 0 && (t = new Uint8Array(2)), n === void 0 && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t;
}
pe.writeUint16LE = oi, pe.writeInt16LE = oi;
function $r(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
pe.readInt32BE = $r;
function Kr(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
pe.readUint32BE = Kr;
function Yr(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
pe.readInt32LE = Yr;
function Wr(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
pe.readUint32LE = Wr;
function Lr(e, t, n) {
  return t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0), t[n + 0] = e >>> 24, t[n + 1] = e >>> 16, t[n + 2] = e >>> 8, t[n + 3] = e >>> 0, t;
}
pe.writeUint32BE = Lr, pe.writeInt32BE = Lr;
function Or(e, t, n) {
  return t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t[n + 2] = e >>> 16, t[n + 3] = e >>> 24, t;
}
pe.writeUint32LE = Or, pe.writeInt32LE = Or;
function Ia(e, t) {
  t === void 0 && (t = 0);
  var n = $r(e, t), u = $r(e, t + 4);
  return n * 4294967296 + u - (u >> 31) * 4294967296;
}
pe.readInt64BE = Ia;
function Ra(e, t) {
  t === void 0 && (t = 0);
  var n = Kr(e, t), u = Kr(e, t + 4);
  return n * 4294967296 + u;
}
pe.readUint64BE = Ra;
function ka(e, t) {
  t === void 0 && (t = 0);
  var n = Yr(e, t), u = Yr(e, t + 4);
  return u * 4294967296 + n - (n >> 31) * 4294967296;
}
pe.readInt64LE = ka;
function Na(e, t) {
  t === void 0 && (t = 0);
  var n = Wr(e, t), u = Wr(e, t + 4);
  return u * 4294967296 + n;
}
pe.readUint64LE = Na;
function si(e, t, n) {
  return t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0), Lr(e / 4294967296 >>> 0, t, n), Lr(e >>> 0, t, n + 4), t;
}
pe.writeUint64BE = si, pe.writeInt64BE = si;
function ai(e, t, n) {
  return t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0), Or(e >>> 0, t, n), Or(e / 4294967296 >>> 0, t, n + 4), t;
}
pe.writeUint64LE = ai, pe.writeInt64LE = ai;
function Pa(e, t, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var u = 0, c = 1, h = e / 8 + n - 1; h >= n; h--)
    u += t[h] * c, c *= 256;
  return u;
}
pe.readUintBE = Pa;
function Ha(e, t, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var u = 0, c = 1, h = n; h < n + e / 8; h++)
    u += t[h] * c, c *= 256;
  return u;
}
pe.readUintLE = Ha;
function Da(e, t, n, u) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), u === void 0 && (u = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Di.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var c = 1, h = e / 8 + u - 1; h >= u; h--)
    n[h] = t / c & 255, c *= 256;
  return n;
}
pe.writeUintBE = Da;
function za(e, t, n, u) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), u === void 0 && (u = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Di.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var c = 1, h = u; h < u + e / 8; h++)
    n[h] = t / c & 255, c *= 256;
  return n;
}
pe.writeUintLE = za;
function Va(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t);
}
pe.readFloat32BE = Va;
function $a(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t, !0);
}
pe.readFloat32LE = $a;
function Ka(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t);
}
pe.readFloat64BE = Ka;
function Ya(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t, !0);
}
pe.readFloat64LE = Ya;
function Wa(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat32(n, e), t;
}
pe.writeFloat32BE = Wa;
function qa(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat32(n, e, !0), t;
}
pe.writeFloat32LE = qa;
function Xa(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat64(n, e), t;
}
pe.writeFloat64BE = Xa;
function Za(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat64(n, e, !0), t;
}
pe.writeFloat64LE = Za, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = mr, n = pe, u = at;
  e.defaultRandomSource = new t.SystemRandomSource();
  function c(y, v = e.defaultRandomSource) {
    return v.randomBytes(y);
  }
  e.randomBytes = c;
  function h(y = e.defaultRandomSource) {
    const v = c(4, y), x = (0, n.readUint32LE)(v);
    return (0, u.wipe)(v), x;
  }
  e.randomUint32 = h;
  const b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(y, v = b, x = e.defaultRandomSource) {
    if (v.length < 2)
      throw new Error("randomString charset is too short");
    if (v.length > 256)
      throw new Error("randomString charset is too long");
    let R = "";
    const S = v.length, O = 256 - 256 % S;
    for (; y > 0; ) {
      const k = c(Math.ceil(y * 256 / O), x);
      for (let H = 0; H < k.length && y > 0; H++) {
        const X = k[H];
        X < O && (R += v.charAt(X % S), y--);
      }
      (0, u.wipe)(k);
    }
    return R;
  }
  e.randomString = a;
  function l(y, v = b, x = e.defaultRandomSource) {
    const R = Math.ceil(y / (Math.log(v.length) / Math.LN2));
    return a(R, v, x);
  }
  e.randomStringForEntropy = l;
}(sn);
var ui = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pe, n = at;
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
    }, a.prototype.update = function(l, y) {
      if (y === void 0 && (y = l.length), this._finished)
        throw new Error("SHA512: can't update because hash was finished.");
      var v = 0;
      if (this._bytesHashed += y, this._bufferLength > 0) {
        for (; this._bufferLength < e.BLOCK_SIZE && y > 0; )
          this._buffer[this._bufferLength++] = l[v++], y--;
        this._bufferLength === this.blockSize && (h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
      }
      for (y >= this.blockSize && (v = h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, v, y), y %= this.blockSize); y > 0; )
        this._buffer[this._bufferLength++] = l[v++], y--;
      return this;
    }, a.prototype.finish = function(l) {
      if (!this._finished) {
        var y = this._bytesHashed, v = this._bufferLength, x = y / 536870912 | 0, R = y << 3, S = y % 128 < 112 ? 128 : 256;
        this._buffer[v] = 128;
        for (var O = v + 1; O < S - 8; O++)
          this._buffer[O] = 0;
        t.writeUint32BE(x, this._buffer, S - 8), t.writeUint32BE(R, this._buffer, S - 4), h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, S), this._finished = !0;
      }
      for (var O = 0; O < this.digestLength / 8; O++)
        t.writeUint32BE(this._stateHi[O], l, O * 8), t.writeUint32BE(this._stateLo[O], l, O * 8 + 4);
      return this;
    }, a.prototype.digest = function() {
      var l = new Uint8Array(this.digestLength);
      return this.finish(l), l;
    }, a.prototype.saveState = function() {
      if (this._finished)
        throw new Error("SHA256: cannot save finished state");
      return { stateHi: new Int32Array(this._stateHi), stateLo: new Int32Array(this._stateLo), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
    }, a.prototype.restoreState = function(l) {
      return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
    }, a.prototype.cleanSavedState = function(l) {
      n.wipe(l.stateHi), n.wipe(l.stateLo), l.buffer && n.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
    }, a;
  }();
  e.SHA512 = u;
  var c = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
  function h(a, l, y, v, x, R, S) {
    for (var O = y[0], k = y[1], H = y[2], X = y[3], A = y[4], B = y[5], _ = y[6], m = y[7], F = v[0], i = v[1], d = v[2], Y = v[3], q = v[4], Q = v[5], ee = v[6], te = v[7], p, E, z, $, N, P, W, V; S >= 128; ) {
      for (var ie = 0; ie < 16; ie++) {
        var Z = 8 * ie + R;
        a[ie] = t.readUint32BE(x, Z), l[ie] = t.readUint32BE(x, Z + 4);
      }
      for (var ie = 0; ie < 80; ie++) {
        var ue = O, re = k, de = H, j = X, U = A, T = B, o = _, L = m, G = F, J = i, he = d, Fe = Y, ve = q, Le = Q, xe = ee, Te = te;
        if (p = m, E = te, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = (A >>> 14 | q << 32 - 14) ^ (A >>> 18 | q << 32 - 18) ^ (q >>> 41 - 32 | A << 32 - (41 - 32)), E = (q >>> 14 | A << 32 - 14) ^ (q >>> 18 | A << 32 - 18) ^ (A >>> 41 - 32 | q << 32 - (41 - 32)), N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, p = A & B ^ ~A & _, E = q & Q ^ ~q & ee, N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, p = c[ie * 2], E = c[ie * 2 + 1], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, p = a[ie % 16], E = l[ie % 16], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, z = W & 65535 | V << 16, $ = N & 65535 | P << 16, p = z, E = $, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = (O >>> 28 | F << 32 - 28) ^ (F >>> 34 - 32 | O << 32 - (34 - 32)) ^ (F >>> 39 - 32 | O << 32 - (39 - 32)), E = (F >>> 28 | O << 32 - 28) ^ (O >>> 34 - 32 | F << 32 - (34 - 32)) ^ (O >>> 39 - 32 | F << 32 - (39 - 32)), N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, p = O & k ^ O & H ^ k & H, E = F & i ^ F & d ^ i & d, N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, L = W & 65535 | V << 16, Te = N & 65535 | P << 16, p = j, E = Fe, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = z, E = $, N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, j = W & 65535 | V << 16, Fe = N & 65535 | P << 16, k = ue, H = re, X = de, A = j, B = U, _ = T, m = o, O = L, i = G, d = J, Y = he, q = Fe, Q = ve, ee = Le, te = xe, F = Te, ie % 16 === 15)
          for (var Z = 0; Z < 16; Z++)
            p = a[Z], E = l[Z], N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = a[(Z + 9) % 16], E = l[(Z + 9) % 16], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, z = a[(Z + 1) % 16], $ = l[(Z + 1) % 16], p = (z >>> 1 | $ << 32 - 1) ^ (z >>> 8 | $ << 32 - 8) ^ z >>> 7, E = ($ >>> 1 | z << 32 - 1) ^ ($ >>> 8 | z << 32 - 8) ^ ($ >>> 7 | z << 32 - 7), N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, z = a[(Z + 14) % 16], $ = l[(Z + 14) % 16], p = (z >>> 19 | $ << 32 - 19) ^ ($ >>> 61 - 32 | z << 32 - (61 - 32)) ^ z >>> 6, E = ($ >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | $ << 32 - (61 - 32)) ^ ($ >>> 6 | z << 32 - 6), N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, a[Z] = W & 65535 | V << 16, l[Z] = N & 65535 | P << 16;
      }
      p = O, E = F, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[0], E = v[0], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[0] = O = W & 65535 | V << 16, v[0] = F = N & 65535 | P << 16, p = k, E = i, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[1], E = v[1], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[1] = k = W & 65535 | V << 16, v[1] = i = N & 65535 | P << 16, p = H, E = d, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[2], E = v[2], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[2] = H = W & 65535 | V << 16, v[2] = d = N & 65535 | P << 16, p = X, E = Y, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[3], E = v[3], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[3] = X = W & 65535 | V << 16, v[3] = Y = N & 65535 | P << 16, p = A, E = q, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[4], E = v[4], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[4] = A = W & 65535 | V << 16, v[4] = q = N & 65535 | P << 16, p = B, E = Q, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[5], E = v[5], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[5] = B = W & 65535 | V << 16, v[5] = Q = N & 65535 | P << 16, p = _, E = ee, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[6], E = v[6], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[6] = _ = W & 65535 | V << 16, v[6] = ee = N & 65535 | P << 16, p = m, E = te, N = E & 65535, P = E >>> 16, W = p & 65535, V = p >>> 16, p = y[7], E = v[7], N += E & 65535, P += E >>> 16, W += p & 65535, V += p >>> 16, P += N >>> 16, W += P >>> 16, V += W >>> 16, y[7] = m = W & 65535 | V << 16, v[7] = te = N & 65535 | P << 16, R += 128, S -= 128;
    }
    return R;
  }
  function b(a) {
    var l = new u();
    l.update(a);
    var y = l.digest();
    return l.clean(), y;
  }
  e.hash = b;
})(ui), function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = sn, n = ui, u = at;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function c(j) {
    const U = new Float64Array(16);
    if (j)
      for (let T = 0; T < j.length; T++)
        U[T] = j[T];
    return U;
  }
  const h = new Uint8Array(32);
  h[0] = 9;
  const b = c(), a = c([1]), l = c([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), y = c([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), v = c([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), x = c([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), R = c([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
  function S(j, U) {
    for (let T = 0; T < 16; T++)
      j[T] = U[T] | 0;
  }
  function O(j) {
    let U = 1;
    for (let T = 0; T < 16; T++) {
      let o = j[T] + U + 65535;
      U = Math.floor(o / 65536), j[T] = o - U * 65536;
    }
    j[0] += U - 1 + 37 * (U - 1);
  }
  function k(j, U, T) {
    const o = ~(T - 1);
    for (let L = 0; L < 16; L++) {
      const G = o & (j[L] ^ U[L]);
      j[L] ^= G, U[L] ^= G;
    }
  }
  function H(j, U) {
    const T = c(), o = c();
    for (let L = 0; L < 16; L++)
      o[L] = U[L];
    O(o), O(o), O(o);
    for (let L = 0; L < 2; L++) {
      T[0] = o[0] - 65517;
      for (let J = 1; J < 15; J++)
        T[J] = o[J] - 65535 - (T[J - 1] >> 16 & 1), T[J - 1] &= 65535;
      T[15] = o[15] - 32767 - (T[14] >> 16 & 1);
      const G = T[15] >> 16 & 1;
      T[14] &= 65535, k(o, T, 1 - G);
    }
    for (let L = 0; L < 16; L++)
      j[2 * L] = o[L] & 255, j[2 * L + 1] = o[L] >> 8;
  }
  function X(j, U) {
    let T = 0;
    for (let o = 0; o < 32; o++)
      T |= j[o] ^ U[o];
    return (1 & T - 1 >>> 8) - 1;
  }
  function A(j, U) {
    const T = new Uint8Array(32), o = new Uint8Array(32);
    return H(T, j), H(o, U), X(T, o);
  }
  function B(j) {
    const U = new Uint8Array(32);
    return H(U, j), U[0] & 1;
  }
  function _(j, U) {
    for (let T = 0; T < 16; T++)
      j[T] = U[2 * T] + (U[2 * T + 1] << 8);
    j[15] &= 32767;
  }
  function m(j, U, T) {
    for (let o = 0; o < 16; o++)
      j[o] = U[o] + T[o];
  }
  function F(j, U, T) {
    for (let o = 0; o < 16; o++)
      j[o] = U[o] - T[o];
  }
  function i(j, U, T) {
    let o, L, G = 0, J = 0, he = 0, Fe = 0, ve = 0, Le = 0, xe = 0, Te = 0, we = 0, ge = 0, ce = 0, ye = 0, _e = 0, fe = 0, le = 0, r = 0, s = 0, f = 0, w = 0, C = 0, I = 0, D = 0, oe = 0, ae = 0, Ee = 0, me = 0, Se = 0, ot = 0, St = 0, Kt = 0, ur = 0, ke = T[0], je = T[1], Ne = T[2], Pe = T[3], He = T[4], Ie = T[5], Ve = T[6], $e = T[7], Ke = T[8], Ye = T[9], We = T[10], ze = T[11], De = T[12], Me = T[13], qe = T[14], Xe = T[15];
    o = U[0], G += o * ke, J += o * je, he += o * Ne, Fe += o * Pe, ve += o * He, Le += o * Ie, xe += o * Ve, Te += o * $e, we += o * Ke, ge += o * Ye, ce += o * We, ye += o * ze, _e += o * De, fe += o * Me, le += o * qe, r += o * Xe, o = U[1], J += o * ke, he += o * je, Fe += o * Ne, ve += o * Pe, Le += o * He, xe += o * Ie, Te += o * Ve, we += o * $e, ge += o * Ke, ce += o * Ye, ye += o * We, _e += o * ze, fe += o * De, le += o * Me, r += o * qe, s += o * Xe, o = U[2], he += o * ke, Fe += o * je, ve += o * Ne, Le += o * Pe, xe += o * He, Te += o * Ie, we += o * Ve, ge += o * $e, ce += o * Ke, ye += o * Ye, _e += o * We, fe += o * ze, le += o * De, r += o * Me, s += o * qe, f += o * Xe, o = U[3], Fe += o * ke, ve += o * je, Le += o * Ne, xe += o * Pe, Te += o * He, we += o * Ie, ge += o * Ve, ce += o * $e, ye += o * Ke, _e += o * Ye, fe += o * We, le += o * ze, r += o * De, s += o * Me, f += o * qe, w += o * Xe, o = U[4], ve += o * ke, Le += o * je, xe += o * Ne, Te += o * Pe, we += o * He, ge += o * Ie, ce += o * Ve, ye += o * $e, _e += o * Ke, fe += o * Ye, le += o * We, r += o * ze, s += o * De, f += o * Me, w += o * qe, C += o * Xe, o = U[5], Le += o * ke, xe += o * je, Te += o * Ne, we += o * Pe, ge += o * He, ce += o * Ie, ye += o * Ve, _e += o * $e, fe += o * Ke, le += o * Ye, r += o * We, s += o * ze, f += o * De, w += o * Me, C += o * qe, I += o * Xe, o = U[6], xe += o * ke, Te += o * je, we += o * Ne, ge += o * Pe, ce += o * He, ye += o * Ie, _e += o * Ve, fe += o * $e, le += o * Ke, r += o * Ye, s += o * We, f += o * ze, w += o * De, C += o * Me, I += o * qe, D += o * Xe, o = U[7], Te += o * ke, we += o * je, ge += o * Ne, ce += o * Pe, ye += o * He, _e += o * Ie, fe += o * Ve, le += o * $e, r += o * Ke, s += o * Ye, f += o * We, w += o * ze, C += o * De, I += o * Me, D += o * qe, oe += o * Xe, o = U[8], we += o * ke, ge += o * je, ce += o * Ne, ye += o * Pe, _e += o * He, fe += o * Ie, le += o * Ve, r += o * $e, s += o * Ke, f += o * Ye, w += o * We, C += o * ze, I += o * De, D += o * Me, oe += o * qe, ae += o * Xe, o = U[9], ge += o * ke, ce += o * je, ye += o * Ne, _e += o * Pe, fe += o * He, le += o * Ie, r += o * Ve, s += o * $e, f += o * Ke, w += o * Ye, C += o * We, I += o * ze, D += o * De, oe += o * Me, ae += o * qe, Ee += o * Xe, o = U[10], ce += o * ke, ye += o * je, _e += o * Ne, fe += o * Pe, le += o * He, r += o * Ie, s += o * Ve, f += o * $e, w += o * Ke, C += o * Ye, I += o * We, D += o * ze, oe += o * De, ae += o * Me, Ee += o * qe, me += o * Xe, o = U[11], ye += o * ke, _e += o * je, fe += o * Ne, le += o * Pe, r += o * He, s += o * Ie, f += o * Ve, w += o * $e, C += o * Ke, I += o * Ye, D += o * We, oe += o * ze, ae += o * De, Ee += o * Me, me += o * qe, Se += o * Xe, o = U[12], _e += o * ke, fe += o * je, le += o * Ne, r += o * Pe, s += o * He, f += o * Ie, w += o * Ve, C += o * $e, I += o * Ke, D += o * Ye, oe += o * We, ae += o * ze, Ee += o * De, me += o * Me, Se += o * qe, ot += o * Xe, o = U[13], fe += o * ke, le += o * je, r += o * Ne, s += o * Pe, f += o * He, w += o * Ie, C += o * Ve, I += o * $e, D += o * Ke, oe += o * Ye, ae += o * We, Ee += o * ze, me += o * De, Se += o * Me, ot += o * qe, St += o * Xe, o = U[14], le += o * ke, r += o * je, s += o * Ne, f += o * Pe, w += o * He, C += o * Ie, I += o * Ve, D += o * $e, oe += o * Ke, ae += o * Ye, Ee += o * We, me += o * ze, Se += o * De, ot += o * Me, St += o * qe, Kt += o * Xe, o = U[15], r += o * ke, s += o * je, f += o * Ne, w += o * Pe, C += o * He, I += o * Ie, D += o * Ve, oe += o * $e, ae += o * Ke, Ee += o * Ye, me += o * We, Se += o * ze, ot += o * De, St += o * Me, Kt += o * qe, ur += o * Xe, G += 38 * s, J += 38 * f, he += 38 * w, Fe += 38 * C, ve += 38 * I, Le += 38 * D, xe += 38 * oe, Te += 38 * ae, we += 38 * Ee, ge += 38 * me, ce += 38 * Se, ye += 38 * ot, _e += 38 * St, fe += 38 * Kt, le += 38 * ur, L = 1, o = G + L + 65535, L = Math.floor(o / 65536), G = o - L * 65536, o = J + L + 65535, L = Math.floor(o / 65536), J = o - L * 65536, o = he + L + 65535, L = Math.floor(o / 65536), he = o - L * 65536, o = Fe + L + 65535, L = Math.floor(o / 65536), Fe = o - L * 65536, o = ve + L + 65535, L = Math.floor(o / 65536), ve = o - L * 65536, o = Le + L + 65535, L = Math.floor(o / 65536), Le = o - L * 65536, o = xe + L + 65535, L = Math.floor(o / 65536), xe = o - L * 65536, o = Te + L + 65535, L = Math.floor(o / 65536), Te = o - L * 65536, o = we + L + 65535, L = Math.floor(o / 65536), we = o - L * 65536, o = ge + L + 65535, L = Math.floor(o / 65536), ge = o - L * 65536, o = ce + L + 65535, L = Math.floor(o / 65536), ce = o - L * 65536, o = ye + L + 65535, L = Math.floor(o / 65536), ye = o - L * 65536, o = _e + L + 65535, L = Math.floor(o / 65536), _e = o - L * 65536, o = fe + L + 65535, L = Math.floor(o / 65536), fe = o - L * 65536, o = le + L + 65535, L = Math.floor(o / 65536), le = o - L * 65536, o = r + L + 65535, L = Math.floor(o / 65536), r = o - L * 65536, G += L - 1 + 37 * (L - 1), L = 1, o = G + L + 65535, L = Math.floor(o / 65536), G = o - L * 65536, o = J + L + 65535, L = Math.floor(o / 65536), J = o - L * 65536, o = he + L + 65535, L = Math.floor(o / 65536), he = o - L * 65536, o = Fe + L + 65535, L = Math.floor(o / 65536), Fe = o - L * 65536, o = ve + L + 65535, L = Math.floor(o / 65536), ve = o - L * 65536, o = Le + L + 65535, L = Math.floor(o / 65536), Le = o - L * 65536, o = xe + L + 65535, L = Math.floor(o / 65536), xe = o - L * 65536, o = Te + L + 65535, L = Math.floor(o / 65536), Te = o - L * 65536, o = we + L + 65535, L = Math.floor(o / 65536), we = o - L * 65536, o = ge + L + 65535, L = Math.floor(o / 65536), ge = o - L * 65536, o = ce + L + 65535, L = Math.floor(o / 65536), ce = o - L * 65536, o = ye + L + 65535, L = Math.floor(o / 65536), ye = o - L * 65536, o = _e + L + 65535, L = Math.floor(o / 65536), _e = o - L * 65536, o = fe + L + 65535, L = Math.floor(o / 65536), fe = o - L * 65536, o = le + L + 65535, L = Math.floor(o / 65536), le = o - L * 65536, o = r + L + 65535, L = Math.floor(o / 65536), r = o - L * 65536, G += L - 1 + 37 * (L - 1), j[0] = G, j[1] = J, j[2] = he, j[3] = Fe, j[4] = ve, j[5] = Le, j[6] = xe, j[7] = Te, j[8] = we, j[9] = ge, j[10] = ce, j[11] = ye, j[12] = _e, j[13] = fe, j[14] = le, j[15] = r;
  }
  function d(j, U) {
    i(j, U, U);
  }
  function Y(j, U) {
    const T = c();
    let o;
    for (o = 0; o < 16; o++)
      T[o] = U[o];
    for (o = 253; o >= 0; o--)
      d(T, T), o !== 2 && o !== 4 && i(T, T, U);
    for (o = 0; o < 16; o++)
      j[o] = T[o];
  }
  function q(j, U) {
    const T = c();
    let o;
    for (o = 0; o < 16; o++)
      T[o] = U[o];
    for (o = 250; o >= 0; o--)
      d(T, T), o !== 1 && i(T, T, U);
    for (o = 0; o < 16; o++)
      j[o] = T[o];
  }
  function Q(j, U) {
    const T = c(), o = c(), L = c(), G = c(), J = c(), he = c(), Fe = c(), ve = c(), Le = c();
    F(T, j[1], j[0]), F(Le, U[1], U[0]), i(T, T, Le), m(o, j[0], j[1]), m(Le, U[0], U[1]), i(o, o, Le), i(L, j[3], U[3]), i(L, L, y), i(G, j[2], U[2]), m(G, G, G), F(J, o, T), F(he, G, L), m(Fe, G, L), m(ve, o, T), i(j[0], J, he), i(j[1], ve, Fe), i(j[2], Fe, he), i(j[3], J, ve);
  }
  function ee(j, U, T) {
    for (let o = 0; o < 4; o++)
      k(j[o], U[o], T);
  }
  function te(j, U) {
    const T = c(), o = c(), L = c();
    Y(L, U[2]), i(T, U[0], L), i(o, U[1], L), H(j, o), j[31] ^= B(T) << 7;
  }
  function p(j, U, T) {
    S(j[0], b), S(j[1], a), S(j[2], a), S(j[3], b);
    for (let o = 255; o >= 0; --o) {
      const L = T[o / 8 | 0] >> (o & 7) & 1;
      ee(j, U, L), Q(U, j), Q(j, j), ee(j, U, L);
    }
  }
  function E(j, U) {
    const T = [c(), c(), c(), c()];
    S(T[0], v), S(T[1], x), S(T[2], a), i(T[3], v, x), p(j, T, U);
  }
  function z(j) {
    if (j.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const U = (0, n.hash)(j);
    U[0] &= 248, U[31] &= 127, U[31] |= 64;
    const T = new Uint8Array(32), o = [c(), c(), c(), c()];
    E(o, U), te(T, o);
    const L = new Uint8Array(64);
    return L.set(j), L.set(T, 32), { publicKey: T, secretKey: L };
  }
  e.generateKeyPairFromSeed = z;
  function $(j) {
    const U = (0, t.randomBytes)(32, j), T = z(U);
    return (0, u.wipe)(U), T;
  }
  e.generateKeyPair = $;
  function N(j) {
    if (j.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(j.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = N;
  const P = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
  function W(j, U) {
    let T, o, L, G;
    for (o = 63; o >= 32; --o) {
      for (T = 0, L = o - 32, G = o - 12; L < G; ++L)
        U[L] += T - 16 * U[o] * P[L - (o - 32)], T = Math.floor((U[L] + 128) / 256), U[L] -= T * 256;
      U[L] += T, U[o] = 0;
    }
    for (T = 0, L = 0; L < 32; L++)
      U[L] += T - (U[31] >> 4) * P[L], T = U[L] >> 8, U[L] &= 255;
    for (L = 0; L < 32; L++)
      U[L] -= T * P[L];
    for (o = 0; o < 32; o++)
      U[o + 1] += U[o] >> 8, j[o] = U[o] & 255;
  }
  function V(j) {
    const U = new Float64Array(64);
    for (let T = 0; T < 64; T++)
      U[T] = j[T];
    for (let T = 0; T < 64; T++)
      j[T] = 0;
    W(j, U);
  }
  function ie(j, U) {
    const T = new Float64Array(64), o = [c(), c(), c(), c()], L = (0, n.hash)(j.subarray(0, 32));
    L[0] &= 248, L[31] &= 127, L[31] |= 64;
    const G = new Uint8Array(64);
    G.set(L.subarray(32), 32);
    const J = new n.SHA512();
    J.update(G.subarray(32)), J.update(U);
    const he = J.digest();
    J.clean(), V(he), E(o, he), te(G, o), J.reset(), J.update(G.subarray(0, 32)), J.update(j.subarray(32)), J.update(U);
    const Fe = J.digest();
    V(Fe);
    for (let ve = 0; ve < 32; ve++)
      T[ve] = he[ve];
    for (let ve = 0; ve < 32; ve++)
      for (let Le = 0; Le < 32; Le++)
        T[ve + Le] += Fe[ve] * L[Le];
    return W(G.subarray(32), T), G;
  }
  e.sign = ie;
  function Z(j, U) {
    const T = c(), o = c(), L = c(), G = c(), J = c(), he = c(), Fe = c();
    return S(j[2], a), _(j[1], U), d(L, j[1]), i(G, L, l), F(L, L, j[2]), m(G, j[2], G), d(J, G), d(he, J), i(Fe, he, J), i(T, Fe, L), i(T, T, G), q(T, T), i(T, T, L), i(T, T, G), i(T, T, G), i(j[0], T, G), d(o, j[0]), i(o, o, G), A(o, L) && i(j[0], j[0], R), d(o, j[0]), i(o, o, G), A(o, L) ? -1 : (B(j[0]) === U[31] >> 7 && F(j[0], b, j[0]), i(j[3], j[0], j[1]), 0);
  }
  function ue(j, U, T) {
    const o = new Uint8Array(32), L = [c(), c(), c(), c()], G = [c(), c(), c(), c()];
    if (T.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (Z(G, j))
      return !1;
    const J = new n.SHA512();
    J.update(T.subarray(0, 32)), J.update(j), J.update(U);
    const he = J.digest();
    return V(he), p(L, G, he), E(G, T.subarray(32)), Q(L, G), te(o, L), !X(T, o);
  }
  e.verify = ue;
  function re(j) {
    let U = [c(), c(), c(), c()];
    if (Z(U, j))
      throw new Error("Ed25519: invalid public key");
    let T = c(), o = c(), L = U[1];
    m(T, a, L), F(o, a, L), Y(o, o), i(T, T, o);
    let G = new Uint8Array(32);
    return H(G, T), G;
  }
  e.convertPublicKeyToX25519 = re;
  function de(j) {
    const U = (0, n.hash)(j.subarray(0, 32));
    U[0] &= 248, U[31] &= 127, U[31] |= 64;
    const T = new Uint8Array(U.subarray(0, 32));
    return (0, u.wipe)(U), T;
  }
  e.convertSecretKeyToX25519 = de;
}(va);
function Ga(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var n = new Uint8Array(256), u = 0; u < n.length; u++)
    n[u] = 255;
  for (var c = 0; c < e.length; c++) {
    var h = e.charAt(c), b = h.charCodeAt(0);
    if (n[b] !== 255)
      throw new TypeError(h + " is ambiguous");
    n[b] = c;
  }
  var a = e.length, l = e.charAt(0), y = Math.log(a) / Math.log(256), v = Math.log(256) / Math.log(a);
  function x(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var k = 0, H = 0, X = 0, A = O.length; X !== A && O[X] === 0; )
      X++, k++;
    for (var B = (A - X) * v + 1 >>> 0, _ = new Uint8Array(B); X !== A; ) {
      for (var m = O[X], F = 0, i = B - 1; (m !== 0 || F < H) && i !== -1; i--, F++)
        m += 256 * _[i] >>> 0, _[i] = m % a >>> 0, m = m / a >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      H = F, X++;
    }
    for (var d = B - H; d !== B && _[d] === 0; )
      d++;
    for (var Y = l.repeat(k); d < B; ++d)
      Y += e.charAt(_[d]);
    return Y;
  }
  function R(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var k = 0;
    if (O[k] !== " ") {
      for (var H = 0, X = 0; O[k] === l; )
        H++, k++;
      for (var A = (O.length - k) * y + 1 >>> 0, B = new Uint8Array(A); O[k]; ) {
        var _ = n[O.charCodeAt(k)];
        if (_ === 255)
          return;
        for (var m = 0, F = A - 1; (_ !== 0 || m < X) && F !== -1; F--, m++)
          _ += a * B[F] >>> 0, B[F] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        X = m, k++;
      }
      if (O[k] !== " ") {
        for (var i = A - X; i !== A && B[i] === 0; )
          i++;
        for (var d = new Uint8Array(H + (A - i)), Y = H; i !== A; )
          d[Y++] = B[i++];
        return d;
      }
    }
  }
  function S(O) {
    var k = R(O);
    if (k)
      return k;
    throw new Error(`Non-${t} character`);
  }
  return { encode: x, decodeUnsafe: R, decode: S };
}
var Qa = Ga, Ja = Qa;
const zi = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, eu = (e) => new TextEncoder().encode(e), tu = (e) => new TextDecoder().decode(e);
class ru {
  constructor(t, n, u) {
    this.name = t, this.prefix = n, this.baseEncode = u;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class nu {
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
    return Vi(this, t);
  }
}
class iu {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Vi(this, t);
  }
  decode(t) {
    const n = t[0], u = this.decoders[n];
    if (u)
      return u.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Vi = (e, t) => new iu({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class ou {
  constructor(t, n, u, c) {
    this.name = t, this.prefix = n, this.baseEncode = u, this.baseDecode = c, this.encoder = new ru(t, n, u), this.decoder = new nu(t, n, c);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Ar = ({ name: e, prefix: t, encode: n, decode: u }) => new ou(e, t, n, u), sr = ({ prefix: e, name: t, alphabet: n }) => {
  const { encode: u, decode: c } = Ja(n, t);
  return Ar({ prefix: e, name: t, encode: u, decode: (h) => zi(c(h)) });
}, su = (e, t, n, u) => {
  const c = {};
  for (let v = 0; v < t.length; ++v)
    c[t[v]] = v;
  let h = e.length;
  for (; e[h - 1] === "="; )
    --h;
  const b = new Uint8Array(h * n / 8 | 0);
  let a = 0, l = 0, y = 0;
  for (let v = 0; v < h; ++v) {
    const x = c[e[v]];
    if (x === void 0)
      throw new SyntaxError(`Non-${u} character`);
    l = l << n | x, a += n, a >= 8 && (a -= 8, b[y++] = 255 & l >> a);
  }
  if (a >= n || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return b;
}, au = (e, t, n) => {
  const u = t[t.length - 1] === "=", c = (1 << n) - 1;
  let h = "", b = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], b += 8; b > n; )
      b -= n, h += t[c & a >> b];
  if (b && (h += t[c & a << n - b]), u)
    for (; h.length * n & 7; )
      h += "=";
  return h;
}, Qe = ({ name: e, prefix: t, bitsPerChar: n, alphabet: u }) => Ar({ prefix: t, name: e, encode(c) {
  return au(c, u, n);
}, decode(c) {
  return su(c, u, n, e);
} }), uu = Ar({ prefix: "\0", name: "identity", encode: (e) => tu(e), decode: (e) => eu(e) });
var fu = Object.freeze({ __proto__: null, identity: uu });
const cu = Qe({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var hu = Object.freeze({ __proto__: null, base2: cu });
const lu = Qe({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var pu = Object.freeze({ __proto__: null, base8: lu });
const du = sr({ prefix: "9", name: "base10", alphabet: "0123456789" });
var yu = Object.freeze({ __proto__: null, base10: du });
const gu = Qe({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), _u = Qe({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var bu = Object.freeze({ __proto__: null, base16: gu, base16upper: _u });
const vu = Qe({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), wu = Qe({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), mu = Qe({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Eu = Qe({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Fu = Qe({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Lu = Qe({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Ou = Qe({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Su = Qe({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Au = Qe({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Cu = Object.freeze({ __proto__: null, base32: vu, base32upper: wu, base32pad: mu, base32padupper: Eu, base32hex: Fu, base32hexupper: Lu, base32hexpad: Ou, base32hexpadupper: Su, base32z: Au });
const Bu = sr({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Tu = sr({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Mu = Object.freeze({ __proto__: null, base36: Bu, base36upper: Tu });
const xu = sr({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Uu = sr({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ju = Object.freeze({ __proto__: null, base58btc: xu, base58flickr: Uu });
const Iu = Qe({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Ru = Qe({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), ku = Qe({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Nu = Qe({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Pu = Object.freeze({ __proto__: null, base64: Iu, base64pad: Ru, base64url: ku, base64urlpad: Nu });
const $i = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Hu = $i.reduce((e, t, n) => (e[n] = t, e), []), Du = $i.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
function zu(e) {
  return e.reduce((t, n) => (t += Hu[n], t), "");
}
function Vu(e) {
  const t = [];
  for (const n of e) {
    const u = Du[n.codePointAt(0)];
    if (u === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    t.push(u);
  }
  return new Uint8Array(t);
}
const $u = Ar({ prefix: "\u{1F680}", name: "base256emoji", encode: zu, decode: Vu });
var Ku = Object.freeze({ __proto__: null, base256emoji: $u }), Yu = Ki, fi = 128, Wu = 127, qu = ~Wu, Xu = Math.pow(2, 31);
function Ki(e, t, n) {
  t = t || [], n = n || 0;
  for (var u = n; e >= Xu; )
    t[n++] = e & 255 | fi, e /= 128;
  for (; e & qu; )
    t[n++] = e & 255 | fi, e >>>= 7;
  return t[n] = e | 0, Ki.bytes = n - u + 1, t;
}
var Zu = qr, Gu = 128, ci = 127;
function qr(e, u) {
  var n = 0, u = u || 0, c = 0, h = u, b, a = e.length;
  do {
    if (h >= a)
      throw qr.bytes = 0, new RangeError("Could not decode varint");
    b = e[h++], n += c < 28 ? (b & ci) << c : (b & ci) * Math.pow(2, c), c += 7;
  } while (b >= Gu);
  return qr.bytes = h - u, n;
}
var Qu = Math.pow(2, 7), Ju = Math.pow(2, 14), e1 = Math.pow(2, 21), t1 = Math.pow(2, 28), r1 = Math.pow(2, 35), n1 = Math.pow(2, 42), i1 = Math.pow(2, 49), o1 = Math.pow(2, 56), s1 = Math.pow(2, 63), a1 = function(e) {
  return e < Qu ? 1 : e < Ju ? 2 : e < e1 ? 3 : e < t1 ? 4 : e < r1 ? 5 : e < n1 ? 6 : e < i1 ? 7 : e < o1 ? 8 : e < s1 ? 9 : 10;
}, u1 = { encode: Yu, decode: Zu, encodingLength: a1 }, Yi = u1;
const hi = (e, t, n = 0) => (Yi.encode(e, t, n), t), li = (e) => Yi.encodingLength(e), Xr = (e, t) => {
  const n = t.byteLength, u = li(e), c = u + li(n), h = new Uint8Array(c + n);
  return hi(e, h, 0), hi(n, h, u), h.set(t, c), new f1(e, n, t, h);
};
class f1 {
  constructor(t, n, u, c) {
    this.code = t, this.size = n, this.digest = u, this.bytes = c;
  }
}
const Wi = ({ name: e, code: t, encode: n }) => new c1(e, t, n);
class c1 {
  constructor(t, n, u) {
    this.name = t, this.code = n, this.encode = u;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const n = this.encode(t);
      return n instanceof Uint8Array ? Xr(this.code, n) : n.then((u) => Xr(this.code, u));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const qi = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), h1 = Wi({ name: "sha2-256", code: 18, encode: qi("SHA-256") }), l1 = Wi({ name: "sha2-512", code: 19, encode: qi("SHA-512") });
var p1 = Object.freeze({ __proto__: null, sha256: h1, sha512: l1 });
const Xi = 0, d1 = "identity", Zi = zi, y1 = (e) => Xr(Xi, Zi(e)), g1 = { code: Xi, name: d1, encode: Zi, digest: y1 };
var _1 = Object.freeze({ __proto__: null, identity: g1 });
new TextEncoder(), new TextDecoder();
({ ...fu, ...hu, ...pu, ...yu, ...bu, ...Cu, ...Mu, ...ju, ...Pu, ...Ku });
({ ...p1, ..._1 });
var b1 = {}, Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
var tt = pe, Zr = at, v1 = 20;
function w1(e, t, n) {
  for (var u = 1634760805, c = 857760878, h = 2036477234, b = 1797285236, a = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], l = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], y = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], v = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], x = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], R = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], S = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], O = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], k = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], H = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], X = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], A = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], B = u, _ = c, m = h, F = b, i = a, d = l, Y = y, q = v, Q = x, ee = R, te = S, p = O, E = k, z = H, $ = X, N = A, P = 0; P < v1; P += 2)
    B = B + i | 0, E ^= B, E = E >>> 32 - 16 | E << 16, Q = Q + E | 0, i ^= Q, i = i >>> 32 - 12 | i << 12, _ = _ + d | 0, z ^= _, z = z >>> 32 - 16 | z << 16, ee = ee + z | 0, d ^= ee, d = d >>> 32 - 12 | d << 12, m = m + Y | 0, $ ^= m, $ = $ >>> 32 - 16 | $ << 16, te = te + $ | 0, Y ^= te, Y = Y >>> 32 - 12 | Y << 12, F = F + q | 0, N ^= F, N = N >>> 32 - 16 | N << 16, p = p + N | 0, q ^= p, q = q >>> 32 - 12 | q << 12, m = m + Y | 0, $ ^= m, $ = $ >>> 32 - 8 | $ << 8, te = te + $ | 0, Y ^= te, Y = Y >>> 32 - 7 | Y << 7, F = F + q | 0, N ^= F, N = N >>> 32 - 8 | N << 8, p = p + N | 0, q ^= p, q = q >>> 32 - 7 | q << 7, _ = _ + d | 0, z ^= _, z = z >>> 32 - 8 | z << 8, ee = ee + z | 0, d ^= ee, d = d >>> 32 - 7 | d << 7, B = B + i | 0, E ^= B, E = E >>> 32 - 8 | E << 8, Q = Q + E | 0, i ^= Q, i = i >>> 32 - 7 | i << 7, B = B + d | 0, N ^= B, N = N >>> 32 - 16 | N << 16, te = te + N | 0, d ^= te, d = d >>> 32 - 12 | d << 12, _ = _ + Y | 0, E ^= _, E = E >>> 32 - 16 | E << 16, p = p + E | 0, Y ^= p, Y = Y >>> 32 - 12 | Y << 12, m = m + q | 0, z ^= m, z = z >>> 32 - 16 | z << 16, Q = Q + z | 0, q ^= Q, q = q >>> 32 - 12 | q << 12, F = F + i | 0, $ ^= F, $ = $ >>> 32 - 16 | $ << 16, ee = ee + $ | 0, i ^= ee, i = i >>> 32 - 12 | i << 12, m = m + q | 0, z ^= m, z = z >>> 32 - 8 | z << 8, Q = Q + z | 0, q ^= Q, q = q >>> 32 - 7 | q << 7, F = F + i | 0, $ ^= F, $ = $ >>> 32 - 8 | $ << 8, ee = ee + $ | 0, i ^= ee, i = i >>> 32 - 7 | i << 7, _ = _ + Y | 0, E ^= _, E = E >>> 32 - 8 | E << 8, p = p + E | 0, Y ^= p, Y = Y >>> 32 - 7 | Y << 7, B = B + d | 0, N ^= B, N = N >>> 32 - 8 | N << 8, te = te + N | 0, d ^= te, d = d >>> 32 - 7 | d << 7;
  tt.writeUint32LE(B + u | 0, e, 0), tt.writeUint32LE(_ + c | 0, e, 4), tt.writeUint32LE(m + h | 0, e, 8), tt.writeUint32LE(F + b | 0, e, 12), tt.writeUint32LE(i + a | 0, e, 16), tt.writeUint32LE(d + l | 0, e, 20), tt.writeUint32LE(Y + y | 0, e, 24), tt.writeUint32LE(q + v | 0, e, 28), tt.writeUint32LE(Q + x | 0, e, 32), tt.writeUint32LE(ee + R | 0, e, 36), tt.writeUint32LE(te + S | 0, e, 40), tt.writeUint32LE(p + O | 0, e, 44), tt.writeUint32LE(E + k | 0, e, 48), tt.writeUint32LE(z + H | 0, e, 52), tt.writeUint32LE($ + X | 0, e, 56), tt.writeUint32LE(N + A | 0, e, 60);
}
function Gi(e, t, n, u, c) {
  if (c === void 0 && (c = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (u.length < n.length)
    throw new Error("ChaCha: destination is shorter than source");
  var h, b;
  if (c === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    h = new Uint8Array(16), b = h.length - t.length, h.set(t, b);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    h = t, b = c;
  }
  for (var a = new Uint8Array(64), l = 0; l < n.length; l += 64) {
    w1(a, h, e);
    for (var y = l; y < l + 64 && y < n.length; y++)
      u[y] = n[y] ^ a[y - l];
    E1(h, 0, b);
  }
  return Zr.wipe(a), c === 0 && Zr.wipe(h), u;
}
Cr.streamXOR = Gi;
function m1(e, t, n, u) {
  return u === void 0 && (u = 0), Zr.wipe(n), Gi(e, t, n, n, u);
}
Cr.stream = m1;
function E1(e, t, n) {
  for (var u = 1; n--; )
    u = u + (e[t] & 255) | 0, e[t] = u & 255, u >>>= 8, t++;
  if (u > 0)
    throw new Error("ChaCha: counter overflow");
}
var pi = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
function F1(e, t, n) {
  return ~(e - 1) & t | e - 1 & n;
}
Lt.select = F1;
function L1(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
Lt.lessOrEqual = L1;
function Qi(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var n = 0, u = 0; u < e.length; u++)
    n |= e[u] ^ t[u];
  return 1 & n - 1 >>> 8;
}
Lt.compare = Qi;
function O1(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : Qi(e, t) !== 0;
}
Lt.equal = O1, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Lt, n = at;
  e.DIGEST_LENGTH = 16;
  var u = function() {
    function b(a) {
      this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
      var l = a[0] | a[1] << 8;
      this._r[0] = l & 8191;
      var y = a[2] | a[3] << 8;
      this._r[1] = (l >>> 13 | y << 3) & 8191;
      var v = a[4] | a[5] << 8;
      this._r[2] = (y >>> 10 | v << 6) & 7939;
      var x = a[6] | a[7] << 8;
      this._r[3] = (v >>> 7 | x << 9) & 8191;
      var R = a[8] | a[9] << 8;
      this._r[4] = (x >>> 4 | R << 12) & 255, this._r[5] = R >>> 1 & 8190;
      var S = a[10] | a[11] << 8;
      this._r[6] = (R >>> 14 | S << 2) & 8191;
      var O = a[12] | a[13] << 8;
      this._r[7] = (S >>> 11 | O << 5) & 8065;
      var k = a[14] | a[15] << 8;
      this._r[8] = (O >>> 8 | k << 8) & 8191, this._r[9] = k >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
    }
    return b.prototype._blocks = function(a, l, y) {
      for (var v = this._fin ? 0 : 2048, x = this._h[0], R = this._h[1], S = this._h[2], O = this._h[3], k = this._h[4], H = this._h[5], X = this._h[6], A = this._h[7], B = this._h[8], _ = this._h[9], m = this._r[0], F = this._r[1], i = this._r[2], d = this._r[3], Y = this._r[4], q = this._r[5], Q = this._r[6], ee = this._r[7], te = this._r[8], p = this._r[9]; y >= 16; ) {
        var E = a[l + 0] | a[l + 1] << 8;
        x += E & 8191;
        var z = a[l + 2] | a[l + 3] << 8;
        R += (E >>> 13 | z << 3) & 8191;
        var $ = a[l + 4] | a[l + 5] << 8;
        S += (z >>> 10 | $ << 6) & 8191;
        var N = a[l + 6] | a[l + 7] << 8;
        O += ($ >>> 7 | N << 9) & 8191;
        var P = a[l + 8] | a[l + 9] << 8;
        k += (N >>> 4 | P << 12) & 8191, H += P >>> 1 & 8191;
        var W = a[l + 10] | a[l + 11] << 8;
        X += (P >>> 14 | W << 2) & 8191;
        var V = a[l + 12] | a[l + 13] << 8;
        A += (W >>> 11 | V << 5) & 8191;
        var ie = a[l + 14] | a[l + 15] << 8;
        B += (V >>> 8 | ie << 8) & 8191, _ += ie >>> 5 | v;
        var Z = 0, ue = Z;
        ue += x * m, ue += R * (5 * p), ue += S * (5 * te), ue += O * (5 * ee), ue += k * (5 * Q), Z = ue >>> 13, ue &= 8191, ue += H * (5 * q), ue += X * (5 * Y), ue += A * (5 * d), ue += B * (5 * i), ue += _ * (5 * F), Z += ue >>> 13, ue &= 8191;
        var re = Z;
        re += x * F, re += R * m, re += S * (5 * p), re += O * (5 * te), re += k * (5 * ee), Z = re >>> 13, re &= 8191, re += H * (5 * Q), re += X * (5 * q), re += A * (5 * Y), re += B * (5 * d), re += _ * (5 * i), Z += re >>> 13, re &= 8191;
        var de = Z;
        de += x * i, de += R * F, de += S * m, de += O * (5 * p), de += k * (5 * te), Z = de >>> 13, de &= 8191, de += H * (5 * ee), de += X * (5 * Q), de += A * (5 * q), de += B * (5 * Y), de += _ * (5 * d), Z += de >>> 13, de &= 8191;
        var j = Z;
        j += x * d, j += R * i, j += S * F, j += O * m, j += k * (5 * p), Z = j >>> 13, j &= 8191, j += H * (5 * te), j += X * (5 * ee), j += A * (5 * Q), j += B * (5 * q), j += _ * (5 * Y), Z += j >>> 13, j &= 8191;
        var U = Z;
        U += x * Y, U += R * d, U += S * i, U += O * F, U += k * m, Z = U >>> 13, U &= 8191, U += H * (5 * p), U += X * (5 * te), U += A * (5 * ee), U += B * (5 * Q), U += _ * (5 * q), Z += U >>> 13, U &= 8191;
        var T = Z;
        T += x * q, T += R * Y, T += S * d, T += O * i, T += k * F, Z = T >>> 13, T &= 8191, T += H * m, T += X * (5 * p), T += A * (5 * te), T += B * (5 * ee), T += _ * (5 * Q), Z += T >>> 13, T &= 8191;
        var o = Z;
        o += x * Q, o += R * q, o += S * Y, o += O * d, o += k * i, Z = o >>> 13, o &= 8191, o += H * F, o += X * m, o += A * (5 * p), o += B * (5 * te), o += _ * (5 * ee), Z += o >>> 13, o &= 8191;
        var L = Z;
        L += x * ee, L += R * Q, L += S * q, L += O * Y, L += k * d, Z = L >>> 13, L &= 8191, L += H * i, L += X * F, L += A * m, L += B * (5 * p), L += _ * (5 * te), Z += L >>> 13, L &= 8191;
        var G = Z;
        G += x * te, G += R * ee, G += S * Q, G += O * q, G += k * Y, Z = G >>> 13, G &= 8191, G += H * d, G += X * i, G += A * F, G += B * m, G += _ * (5 * p), Z += G >>> 13, G &= 8191;
        var J = Z;
        J += x * p, J += R * te, J += S * ee, J += O * Q, J += k * q, Z = J >>> 13, J &= 8191, J += H * Y, J += X * d, J += A * i, J += B * F, J += _ * m, Z += J >>> 13, J &= 8191, Z = (Z << 2) + Z | 0, Z = Z + ue | 0, ue = Z & 8191, Z = Z >>> 13, re += Z, x = ue, R = re, S = de, O = j, k = U, H = T, X = o, A = L, B = G, _ = J, l += 16, y -= 16;
      }
      this._h[0] = x, this._h[1] = R, this._h[2] = S, this._h[3] = O, this._h[4] = k, this._h[5] = H, this._h[6] = X, this._h[7] = A, this._h[8] = B, this._h[9] = _;
    }, b.prototype.finish = function(a, l) {
      l === void 0 && (l = 0);
      var y = new Uint16Array(10), v, x, R, S;
      if (this._leftover) {
        for (S = this._leftover, this._buffer[S++] = 1; S < 16; S++)
          this._buffer[S] = 0;
        this._fin = 1, this._blocks(this._buffer, 0, 16);
      }
      for (v = this._h[1] >>> 13, this._h[1] &= 8191, S = 2; S < 10; S++)
        this._h[S] += v, v = this._h[S] >>> 13, this._h[S] &= 8191;
      for (this._h[0] += v * 5, v = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += v, v = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += v, y[0] = this._h[0] + 5, v = y[0] >>> 13, y[0] &= 8191, S = 1; S < 10; S++)
        y[S] = this._h[S] + v, v = y[S] >>> 13, y[S] &= 8191;
      for (y[9] -= 1 << 13, x = (v ^ 1) - 1, S = 0; S < 10; S++)
        y[S] &= x;
      for (x = ~x, S = 0; S < 10; S++)
        this._h[S] = this._h[S] & x | y[S];
      for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, R = this._h[0] + this._pad[0], this._h[0] = R & 65535, S = 1; S < 8; S++)
        R = (this._h[S] + this._pad[S] | 0) + (R >>> 16) | 0, this._h[S] = R & 65535;
      return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
    }, b.prototype.update = function(a) {
      var l = 0, y = a.length, v;
      if (this._leftover) {
        v = 16 - this._leftover, v > y && (v = y);
        for (var x = 0; x < v; x++)
          this._buffer[this._leftover + x] = a[l + x];
        if (y -= v, l += v, this._leftover += v, this._leftover < 16)
          return this;
        this._blocks(this._buffer, 0, 16), this._leftover = 0;
      }
      if (y >= 16 && (v = y - y % 16, this._blocks(a, l, v), l += v, y -= v), y) {
        for (var x = 0; x < y; x++)
          this._buffer[this._leftover + x] = a[l + x];
        this._leftover += y;
      }
      return this;
    }, b.prototype.digest = function() {
      if (this._finished)
        throw new Error("Poly1305 was finished");
      var a = new Uint8Array(16);
      return this.finish(a), a;
    }, b.prototype.clean = function() {
      return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
    }, b;
  }();
  e.Poly1305 = u;
  function c(b, a) {
    var l = new u(b);
    l.update(a);
    var y = l.digest();
    return l.clean(), y;
  }
  e.oneTimeAuth = c;
  function h(b, a) {
    return b.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(b, a);
  }
  e.equal = h;
}(pi), function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Cr, n = pi, u = at, c = pe, h = Lt;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var b = new Uint8Array(16), a = function() {
    function l(y) {
      if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, y.length !== e.KEY_LENGTH)
        throw new Error("ChaCha20Poly1305 needs 32-byte key");
      this._key = new Uint8Array(y);
    }
    return l.prototype.seal = function(y, v, x, R) {
      if (y.length > 16)
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      var S = new Uint8Array(16);
      S.set(y, S.length - y.length);
      var O = new Uint8Array(32);
      t.stream(this._key, S, O, 4);
      var k = v.length + this.tagLength, H;
      if (R) {
        if (R.length !== k)
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        H = R;
      } else
        H = new Uint8Array(k);
      return t.streamXOR(this._key, S, v, H, 4), this._authenticate(H.subarray(H.length - this.tagLength, H.length), O, H.subarray(0, H.length - this.tagLength), x), u.wipe(S), H;
    }, l.prototype.open = function(y, v, x, R) {
      if (y.length > 16)
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      if (v.length < this.tagLength)
        return null;
      var S = new Uint8Array(16);
      S.set(y, S.length - y.length);
      var O = new Uint8Array(32);
      t.stream(this._key, S, O, 4);
      var k = new Uint8Array(this.tagLength);
      if (this._authenticate(k, O, v.subarray(0, v.length - this.tagLength), x), !h.equal(k, v.subarray(v.length - this.tagLength, v.length)))
        return null;
      var H = v.length - this.tagLength, X;
      if (R) {
        if (R.length !== H)
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        X = R;
      } else
        X = new Uint8Array(H);
      return t.streamXOR(this._key, S, v.subarray(0, v.length - this.tagLength), X, 4), u.wipe(S), X;
    }, l.prototype.clean = function() {
      return u.wipe(this._key), this;
    }, l.prototype._authenticate = function(y, v, x, R) {
      var S = new n.Poly1305(v);
      R && (S.update(R), R.length % 16 > 0 && S.update(b.subarray(R.length % 16))), S.update(x), x.length % 16 > 0 && S.update(b.subarray(x.length % 16));
      var O = new Uint8Array(8);
      R && c.writeUint64LE(R.length, O), S.update(O), c.writeUint64LE(x.length, O), S.update(O);
      for (var k = S.digest(), H = 0; H < k.length; H++)
        y[H] = k[H];
      S.clean(), u.wipe(k), u.wipe(O);
    }, l;
  }();
  e.ChaCha20Poly1305 = a;
}(b1);
var Ji = {}, ir = {}, an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
function S1(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
an.isSerializableHash = S1, Object.defineProperty(ir, "__esModule", { value: !0 });
var pt = an, A1 = Lt, C1 = at, eo = function() {
  function e(t, n) {
    this._finished = !1, this._inner = new t(), this._outer = new t(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
    var u = new Uint8Array(this.blockSize);
    n.length > this.blockSize ? this._inner.update(n).finish(u).clean() : u.set(n);
    for (var c = 0; c < u.length; c++)
      u[c] ^= 54;
    this._inner.update(u);
    for (var c = 0; c < u.length; c++)
      u[c] ^= 106;
    this._outer.update(u), pt.isSerializableHash(this._inner) && pt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), C1.wipe(u);
  }
  return e.prototype.reset = function() {
    if (!pt.isSerializableHash(this._inner) || !pt.isSerializableHash(this._outer))
      throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
    return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
  }, e.prototype.clean = function() {
    pt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), pt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
  }, e.prototype.update = function(t) {
    return this._inner.update(t), this;
  }, e.prototype.finish = function(t) {
    return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
  }, e.prototype.digest = function() {
    var t = new Uint8Array(this.digestLength);
    return this.finish(t), t;
  }, e.prototype.saveState = function() {
    if (!pt.isSerializableHash(this._inner))
      throw new Error("hmac: can't saveState() because hash doesn't implement it");
    return this._inner.saveState();
  }, e.prototype.restoreState = function(t) {
    if (!pt.isSerializableHash(this._inner) || !pt.isSerializableHash(this._outer))
      throw new Error("hmac: can't restoreState() because hash doesn't implement it");
    return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
  }, e.prototype.cleanSavedState = function(t) {
    if (!pt.isSerializableHash(this._inner))
      throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
    this._inner.cleanSavedState(t);
  }, e;
}();
ir.HMAC = eo;
function B1(e, t, n) {
  var u = new eo(e, t);
  u.update(n);
  var c = u.digest();
  return u.clean(), c;
}
ir.hmac = B1, ir.equal = A1.equal, Object.defineProperty(Ji, "__esModule", { value: !0 });
var di = ir, yi = at, T1 = function() {
  function e(t, n, u, c) {
    u === void 0 && (u = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = c;
    var h = di.hmac(this._hash, u, n);
    this._hmac = new di.HMAC(t, h), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
    this._hmac.clean(), yi.wipe(this._buffer), yi.wipe(this._counter), this._bufpos = 0;
  }, e;
}();
Ji.HKDF = T1;
var M1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pe, n = at;
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
    }, a.prototype.update = function(l, y) {
      if (y === void 0 && (y = l.length), this._finished)
        throw new Error("SHA256: can't update because hash was finished.");
      var v = 0;
      if (this._bytesHashed += y, this._bufferLength > 0) {
        for (; this._bufferLength < this.blockSize && y > 0; )
          this._buffer[this._bufferLength++] = l[v++], y--;
        this._bufferLength === this.blockSize && (h(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
      }
      for (y >= this.blockSize && (v = h(this._temp, this._state, l, v, y), y %= this.blockSize); y > 0; )
        this._buffer[this._bufferLength++] = l[v++], y--;
      return this;
    }, a.prototype.finish = function(l) {
      if (!this._finished) {
        var y = this._bytesHashed, v = this._bufferLength, x = y / 536870912 | 0, R = y << 3, S = y % 64 < 56 ? 64 : 128;
        this._buffer[v] = 128;
        for (var O = v + 1; O < S - 8; O++)
          this._buffer[O] = 0;
        t.writeUint32BE(x, this._buffer, S - 8), t.writeUint32BE(R, this._buffer, S - 4), h(this._temp, this._state, this._buffer, 0, S), this._finished = !0;
      }
      for (var O = 0; O < this.digestLength / 4; O++)
        t.writeUint32BE(this._state[O], l, O * 4);
      return this;
    }, a.prototype.digest = function() {
      var l = new Uint8Array(this.digestLength);
      return this.finish(l), l;
    }, a.prototype.saveState = function() {
      if (this._finished)
        throw new Error("SHA256: cannot save finished state");
      return { state: new Int32Array(this._state), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
    }, a.prototype.restoreState = function(l) {
      return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
    }, a.prototype.cleanSavedState = function(l) {
      n.wipe(l.state), l.buffer && n.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
    }, a;
  }();
  e.SHA256 = u;
  var c = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
  function h(a, l, y, v, x) {
    for (; x >= 64; ) {
      for (var R = l[0], S = l[1], O = l[2], k = l[3], H = l[4], X = l[5], A = l[6], B = l[7], _ = 0; _ < 16; _++) {
        var m = v + _ * 4;
        a[_] = t.readUint32BE(y, m);
      }
      for (var _ = 16; _ < 64; _++) {
        var F = a[_ - 2], i = (F >>> 17 | F << 32 - 17) ^ (F >>> 19 | F << 32 - 19) ^ F >>> 10;
        F = a[_ - 15];
        var d = (F >>> 7 | F << 32 - 7) ^ (F >>> 18 | F << 32 - 18) ^ F >>> 3;
        a[_] = (i + a[_ - 7] | 0) + (d + a[_ - 16] | 0);
      }
      for (var _ = 0; _ < 64; _++) {
        var i = (((H >>> 6 | H << 26) ^ (H >>> 11 | H << 21) ^ (H >>> 25 | H << 7)) + (H & X ^ ~H & A) | 0) + (B + (c[_] + a[_] | 0) | 0) | 0, d = ((R >>> 2 | R << 32 - 2) ^ (R >>> 13 | R << 32 - 13) ^ (R >>> 22 | R << 32 - 22)) + (R & S ^ R & O ^ S & O) | 0;
        B = A, A = X, X = H, H = k + i | 0, k = O, O = S, S = R, R = i + d | 0;
      }
      l[0] += R, l[1] += S, l[2] += O, l[3] += k, l[4] += H, l[5] += X, l[6] += A, l[7] += B, v += 64, x -= 64;
    }
    return v;
  }
  function b(a) {
    var l = new u();
    l.update(a);
    var y = l.digest();
    return l.clean(), y;
  }
  e.hash = b;
})(M1);
var x1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = sn, n = at;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function u(_) {
    const m = new Float64Array(16);
    if (_)
      for (let F = 0; F < _.length; F++)
        m[F] = _[F];
    return m;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const h = u([56129, 1]);
  function b(_) {
    let m = 1;
    for (let F = 0; F < 16; F++) {
      let i = _[F] + m + 65535;
      m = Math.floor(i / 65536), _[F] = i - m * 65536;
    }
    _[0] += m - 1 + 37 * (m - 1);
  }
  function a(_, m, F) {
    const i = ~(F - 1);
    for (let d = 0; d < 16; d++) {
      const Y = i & (_[d] ^ m[d]);
      _[d] ^= Y, m[d] ^= Y;
    }
  }
  function l(_, m) {
    const F = u(), i = u();
    for (let d = 0; d < 16; d++)
      i[d] = m[d];
    b(i), b(i), b(i);
    for (let d = 0; d < 2; d++) {
      F[0] = i[0] - 65517;
      for (let q = 1; q < 15; q++)
        F[q] = i[q] - 65535 - (F[q - 1] >> 16 & 1), F[q - 1] &= 65535;
      F[15] = i[15] - 32767 - (F[14] >> 16 & 1);
      const Y = F[15] >> 16 & 1;
      F[14] &= 65535, a(i, F, 1 - Y);
    }
    for (let d = 0; d < 16; d++)
      _[2 * d] = i[d] & 255, _[2 * d + 1] = i[d] >> 8;
  }
  function y(_, m) {
    for (let F = 0; F < 16; F++)
      _[F] = m[2 * F] + (m[2 * F + 1] << 8);
    _[15] &= 32767;
  }
  function v(_, m, F) {
    for (let i = 0; i < 16; i++)
      _[i] = m[i] + F[i];
  }
  function x(_, m, F) {
    for (let i = 0; i < 16; i++)
      _[i] = m[i] - F[i];
  }
  function R(_, m, F) {
    let i, d, Y = 0, q = 0, Q = 0, ee = 0, te = 0, p = 0, E = 0, z = 0, $ = 0, N = 0, P = 0, W = 0, V = 0, ie = 0, Z = 0, ue = 0, re = 0, de = 0, j = 0, U = 0, T = 0, o = 0, L = 0, G = 0, J = 0, he = 0, Fe = 0, ve = 0, Le = 0, xe = 0, Te = 0, we = F[0], ge = F[1], ce = F[2], ye = F[3], _e = F[4], fe = F[5], le = F[6], r = F[7], s = F[8], f = F[9], w = F[10], C = F[11], I = F[12], D = F[13], oe = F[14], ae = F[15];
    i = m[0], Y += i * we, q += i * ge, Q += i * ce, ee += i * ye, te += i * _e, p += i * fe, E += i * le, z += i * r, $ += i * s, N += i * f, P += i * w, W += i * C, V += i * I, ie += i * D, Z += i * oe, ue += i * ae, i = m[1], q += i * we, Q += i * ge, ee += i * ce, te += i * ye, p += i * _e, E += i * fe, z += i * le, $ += i * r, N += i * s, P += i * f, W += i * w, V += i * C, ie += i * I, Z += i * D, ue += i * oe, re += i * ae, i = m[2], Q += i * we, ee += i * ge, te += i * ce, p += i * ye, E += i * _e, z += i * fe, $ += i * le, N += i * r, P += i * s, W += i * f, V += i * w, ie += i * C, Z += i * I, ue += i * D, re += i * oe, de += i * ae, i = m[3], ee += i * we, te += i * ge, p += i * ce, E += i * ye, z += i * _e, $ += i * fe, N += i * le, P += i * r, W += i * s, V += i * f, ie += i * w, Z += i * C, ue += i * I, re += i * D, de += i * oe, j += i * ae, i = m[4], te += i * we, p += i * ge, E += i * ce, z += i * ye, $ += i * _e, N += i * fe, P += i * le, W += i * r, V += i * s, ie += i * f, Z += i * w, ue += i * C, re += i * I, de += i * D, j += i * oe, U += i * ae, i = m[5], p += i * we, E += i * ge, z += i * ce, $ += i * ye, N += i * _e, P += i * fe, W += i * le, V += i * r, ie += i * s, Z += i * f, ue += i * w, re += i * C, de += i * I, j += i * D, U += i * oe, T += i * ae, i = m[6], E += i * we, z += i * ge, $ += i * ce, N += i * ye, P += i * _e, W += i * fe, V += i * le, ie += i * r, Z += i * s, ue += i * f, re += i * w, de += i * C, j += i * I, U += i * D, T += i * oe, o += i * ae, i = m[7], z += i * we, $ += i * ge, N += i * ce, P += i * ye, W += i * _e, V += i * fe, ie += i * le, Z += i * r, ue += i * s, re += i * f, de += i * w, j += i * C, U += i * I, T += i * D, o += i * oe, L += i * ae, i = m[8], $ += i * we, N += i * ge, P += i * ce, W += i * ye, V += i * _e, ie += i * fe, Z += i * le, ue += i * r, re += i * s, de += i * f, j += i * w, U += i * C, T += i * I, o += i * D, L += i * oe, G += i * ae, i = m[9], N += i * we, P += i * ge, W += i * ce, V += i * ye, ie += i * _e, Z += i * fe, ue += i * le, re += i * r, de += i * s, j += i * f, U += i * w, T += i * C, o += i * I, L += i * D, G += i * oe, J += i * ae, i = m[10], P += i * we, W += i * ge, V += i * ce, ie += i * ye, Z += i * _e, ue += i * fe, re += i * le, de += i * r, j += i * s, U += i * f, T += i * w, o += i * C, L += i * I, G += i * D, J += i * oe, he += i * ae, i = m[11], W += i * we, V += i * ge, ie += i * ce, Z += i * ye, ue += i * _e, re += i * fe, de += i * le, j += i * r, U += i * s, T += i * f, o += i * w, L += i * C, G += i * I, J += i * D, he += i * oe, Fe += i * ae, i = m[12], V += i * we, ie += i * ge, Z += i * ce, ue += i * ye, re += i * _e, de += i * fe, j += i * le, U += i * r, T += i * s, o += i * f, L += i * w, G += i * C, J += i * I, he += i * D, Fe += i * oe, ve += i * ae, i = m[13], ie += i * we, Z += i * ge, ue += i * ce, re += i * ye, de += i * _e, j += i * fe, U += i * le, T += i * r, o += i * s, L += i * f, G += i * w, J += i * C, he += i * I, Fe += i * D, ve += i * oe, Le += i * ae, i = m[14], Z += i * we, ue += i * ge, re += i * ce, de += i * ye, j += i * _e, U += i * fe, T += i * le, o += i * r, L += i * s, G += i * f, J += i * w, he += i * C, Fe += i * I, ve += i * D, Le += i * oe, xe += i * ae, i = m[15], ue += i * we, re += i * ge, de += i * ce, j += i * ye, U += i * _e, T += i * fe, o += i * le, L += i * r, G += i * s, J += i * f, he += i * w, Fe += i * C, ve += i * I, Le += i * D, xe += i * oe, Te += i * ae, Y += 38 * re, q += 38 * de, Q += 38 * j, ee += 38 * U, te += 38 * T, p += 38 * o, E += 38 * L, z += 38 * G, $ += 38 * J, N += 38 * he, P += 38 * Fe, W += 38 * ve, V += 38 * Le, ie += 38 * xe, Z += 38 * Te, d = 1, i = Y + d + 65535, d = Math.floor(i / 65536), Y = i - d * 65536, i = q + d + 65535, d = Math.floor(i / 65536), q = i - d * 65536, i = Q + d + 65535, d = Math.floor(i / 65536), Q = i - d * 65536, i = ee + d + 65535, d = Math.floor(i / 65536), ee = i - d * 65536, i = te + d + 65535, d = Math.floor(i / 65536), te = i - d * 65536, i = p + d + 65535, d = Math.floor(i / 65536), p = i - d * 65536, i = E + d + 65535, d = Math.floor(i / 65536), E = i - d * 65536, i = z + d + 65535, d = Math.floor(i / 65536), z = i - d * 65536, i = $ + d + 65535, d = Math.floor(i / 65536), $ = i - d * 65536, i = N + d + 65535, d = Math.floor(i / 65536), N = i - d * 65536, i = P + d + 65535, d = Math.floor(i / 65536), P = i - d * 65536, i = W + d + 65535, d = Math.floor(i / 65536), W = i - d * 65536, i = V + d + 65535, d = Math.floor(i / 65536), V = i - d * 65536, i = ie + d + 65535, d = Math.floor(i / 65536), ie = i - d * 65536, i = Z + d + 65535, d = Math.floor(i / 65536), Z = i - d * 65536, i = ue + d + 65535, d = Math.floor(i / 65536), ue = i - d * 65536, Y += d - 1 + 37 * (d - 1), d = 1, i = Y + d + 65535, d = Math.floor(i / 65536), Y = i - d * 65536, i = q + d + 65535, d = Math.floor(i / 65536), q = i - d * 65536, i = Q + d + 65535, d = Math.floor(i / 65536), Q = i - d * 65536, i = ee + d + 65535, d = Math.floor(i / 65536), ee = i - d * 65536, i = te + d + 65535, d = Math.floor(i / 65536), te = i - d * 65536, i = p + d + 65535, d = Math.floor(i / 65536), p = i - d * 65536, i = E + d + 65535, d = Math.floor(i / 65536), E = i - d * 65536, i = z + d + 65535, d = Math.floor(i / 65536), z = i - d * 65536, i = $ + d + 65535, d = Math.floor(i / 65536), $ = i - d * 65536, i = N + d + 65535, d = Math.floor(i / 65536), N = i - d * 65536, i = P + d + 65535, d = Math.floor(i / 65536), P = i - d * 65536, i = W + d + 65535, d = Math.floor(i / 65536), W = i - d * 65536, i = V + d + 65535, d = Math.floor(i / 65536), V = i - d * 65536, i = ie + d + 65535, d = Math.floor(i / 65536), ie = i - d * 65536, i = Z + d + 65535, d = Math.floor(i / 65536), Z = i - d * 65536, i = ue + d + 65535, d = Math.floor(i / 65536), ue = i - d * 65536, Y += d - 1 + 37 * (d - 1), _[0] = Y, _[1] = q, _[2] = Q, _[3] = ee, _[4] = te, _[5] = p, _[6] = E, _[7] = z, _[8] = $, _[9] = N, _[10] = P, _[11] = W, _[12] = V, _[13] = ie, _[14] = Z, _[15] = ue;
  }
  function S(_, m) {
    R(_, m, m);
  }
  function O(_, m) {
    const F = u();
    for (let i = 0; i < 16; i++)
      F[i] = m[i];
    for (let i = 253; i >= 0; i--)
      S(F, F), i !== 2 && i !== 4 && R(F, F, m);
    for (let i = 0; i < 16; i++)
      _[i] = F[i];
  }
  function k(_, m) {
    const F = new Uint8Array(32), i = new Float64Array(80), d = u(), Y = u(), q = u(), Q = u(), ee = u(), te = u();
    for (let $ = 0; $ < 31; $++)
      F[$] = _[$];
    F[31] = _[31] & 127 | 64, F[0] &= 248, y(i, m);
    for (let $ = 0; $ < 16; $++)
      Y[$] = i[$];
    d[0] = Q[0] = 1;
    for (let $ = 254; $ >= 0; --$) {
      const N = F[$ >>> 3] >>> ($ & 7) & 1;
      a(d, Y, N), a(q, Q, N), v(ee, d, q), x(d, d, q), v(q, Y, Q), x(Y, Y, Q), S(Q, ee), S(te, d), R(d, q, d), R(q, Y, ee), v(ee, d, q), x(d, d, q), S(Y, d), x(q, Q, te), R(d, q, h), v(d, d, Q), R(q, q, d), R(d, Q, te), R(Q, Y, i), S(Y, ee), a(d, Y, N), a(q, Q, N);
    }
    for (let $ = 0; $ < 16; $++)
      i[$ + 16] = d[$], i[$ + 32] = q[$], i[$ + 48] = Y[$], i[$ + 64] = Q[$];
    const p = i.subarray(32), E = i.subarray(16);
    O(p, p), R(E, E, p);
    const z = new Uint8Array(32);
    return l(z, E), z;
  }
  e.scalarMult = k;
  function H(_) {
    return k(_, c);
  }
  e.scalarMultBase = H;
  function X(_) {
    if (_.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const m = new Uint8Array(_);
    return { publicKey: H(m), secretKey: m };
  }
  e.generateKeyPairFromSeed = X;
  function A(_) {
    const m = (0, t.randomBytes)(32, _), F = X(m);
    return (0, n.wipe)(m), F;
  }
  e.generateKeyPair = A;
  function B(_, m, F = !1) {
    if (_.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (m.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const i = k(_, m);
    if (F) {
      let d = 0;
      for (let Y = 0; Y < i.length; Y++)
        d |= i[Y];
      if (d === 0)
        throw new Error("X25519: invalid shared key");
    }
    return i;
  }
  e.sharedKey = B;
})(x1);
var Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.getLocalStorage = Ce.getLocalStorageOrThrow = Ce.getCrypto = Ce.getCryptoOrThrow = Ce.getLocation = Ce.getLocationOrThrow = Ce.getNavigator = Ce.getNavigatorOrThrow = Ce.getDocument = Ce.getDocumentOrThrow = Ce.getFromWindowOrThrow = Ce.getFromWindow = void 0;
function jt(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
Ce.getFromWindow = jt;
function $t(e) {
  const t = jt(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
Ce.getFromWindowOrThrow = $t;
function U1() {
  return $t("document");
}
Ce.getDocumentOrThrow = U1;
function j1() {
  return jt("document");
}
Ce.getDocument = j1;
function I1() {
  return $t("navigator");
}
Ce.getNavigatorOrThrow = I1;
function R1() {
  return jt("navigator");
}
Ce.getNavigator = R1;
function k1() {
  return $t("location");
}
Ce.getLocationOrThrow = k1;
function N1() {
  return jt("location");
}
Ce.getLocation = N1;
function P1() {
  return $t("crypto");
}
Ce.getCryptoOrThrow = P1;
function H1() {
  return jt("crypto");
}
Ce.getCrypto = H1;
function D1() {
  return $t("localStorage");
}
Ce.getLocalStorageOrThrow = D1;
function z1() {
  return jt("localStorage");
}
Ce.getLocalStorage = z1;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.getWindowMetadata = void 0;
const gi = Ce;
function V1() {
  let e, t;
  try {
    e = gi.getDocumentOrThrow(), t = gi.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const v = e.getElementsByTagName("link"), x = [];
    for (let R = 0; R < v.length; R++) {
      const S = v[R], O = S.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const k = S.getAttribute("href");
        if (k)
          if (k.toLowerCase().indexOf("https:") === -1 && k.toLowerCase().indexOf("http:") === -1 && k.indexOf("//") !== 0) {
            let H = t.protocol + "//" + t.host;
            if (k.indexOf("/") === 0)
              H += k;
            else {
              const X = t.pathname.split("/");
              X.pop();
              const A = X.join("/");
              H += A + "/" + k;
            }
            x.push(H);
          } else if (k.indexOf("//") === 0) {
            const H = t.protocol + k;
            x.push(H);
          } else
            x.push(k);
      }
    }
    return x;
  }
  function u(...v) {
    const x = e.getElementsByTagName("meta");
    for (let R = 0; R < x.length; R++) {
      const S = x[R], O = ["itemprop", "property", "name"].map((k) => S.getAttribute(k)).filter((k) => k ? v.includes(k) : !1);
      if (O.length && O) {
        const k = S.getAttribute("content");
        if (k)
          return k;
      }
    }
    return "";
  }
  function c() {
    let v = u("name", "og:site_name", "og:title", "twitter:title");
    return v || (v = e.title), v;
  }
  function h() {
    return u("description", "og:description", "twitter:description", "keywords");
  }
  const b = c(), a = h(), l = t.origin, y = n();
  return { description: a, url: l, icons: y, name: b };
}
un.getWindowMetadata = V1;
var $1 = {}, K1 = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), to = "%[a-f0-9]{2}", _i = new RegExp("(" + to + ")|([^%]+?)", "gi"), bi = new RegExp("(" + to + ")+", "gi");
function Gr(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var n = e.slice(0, t), u = e.slice(t);
  return Array.prototype.concat.call([], Gr(n), Gr(u));
}
function Y1(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(_i) || [], n = 1; n < t.length; n++)
      e = Gr(t, n).join(""), t = e.match(_i) || [];
    return e;
  }
}
function W1(e) {
  for (var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, n = bi.exec(e); n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var u = Y1(n[0]);
      u !== n[0] && (t[n[0]] = u);
    }
    n = bi.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var c = Object.keys(t), h = 0; h < c.length; h++) {
    var b = c[h];
    e = e.replace(new RegExp(b, "g"), t[b]);
  }
  return e;
}
var q1 = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return W1(e);
  }
}, X1 = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const n = e.indexOf(t);
  return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}, Z1 = function(e, t) {
  for (var n = {}, u = Object.keys(e), c = Array.isArray(t), h = 0; h < u.length; h++) {
    var b = u[h], a = e[b];
    (c ? t.indexOf(b) !== -1 : t(b, a, e)) && (n[b] = a);
  }
  return n;
};
(function(e) {
  const t = K1, n = q1, u = X1, c = Z1, h = (A) => A == null, b = Symbol("encodeFragmentIdentifier");
  function a(A) {
    switch (A.arrayFormat) {
      case "index":
        return (B) => (_, m) => {
          const F = _.length;
          return m === void 0 || A.skipNull && m === null || A.skipEmptyString && m === "" ? _ : m === null ? [..._, [v(B, A), "[", F, "]"].join("")] : [..._, [v(B, A), "[", v(F, A), "]=", v(m, A)].join("")];
        };
      case "bracket":
        return (B) => (_, m) => m === void 0 || A.skipNull && m === null || A.skipEmptyString && m === "" ? _ : m === null ? [..._, [v(B, A), "[]"].join("")] : [..._, [v(B, A), "[]=", v(m, A)].join("")];
      case "colon-list-separator":
        return (B) => (_, m) => m === void 0 || A.skipNull && m === null || A.skipEmptyString && m === "" ? _ : m === null ? [..._, [v(B, A), ":list="].join("")] : [..._, [v(B, A), ":list=", v(m, A)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const B = A.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (_) => (m, F) => F === void 0 || A.skipNull && F === null || A.skipEmptyString && F === "" ? m : (F = F === null ? "" : F, m.length === 0 ? [[v(_, A), B, v(F, A)].join("")] : [[m, v(F, A)].join(A.arrayFormatSeparator)]);
      }
      default:
        return (B) => (_, m) => m === void 0 || A.skipNull && m === null || A.skipEmptyString && m === "" ? _ : m === null ? [..._, v(B, A)] : [..._, [v(B, A), "=", v(m, A)].join("")];
    }
  }
  function l(A) {
    let B;
    switch (A.arrayFormat) {
      case "index":
        return (_, m, F) => {
          if (B = /\[(\d*)\]$/.exec(_), _ = _.replace(/\[\d*\]$/, ""), !B) {
            F[_] = m;
            return;
          }
          F[_] === void 0 && (F[_] = {}), F[_][B[1]] = m;
        };
      case "bracket":
        return (_, m, F) => {
          if (B = /(\[\])$/.exec(_), _ = _.replace(/\[\]$/, ""), !B) {
            F[_] = m;
            return;
          }
          if (F[_] === void 0) {
            F[_] = [m];
            return;
          }
          F[_] = [].concat(F[_], m);
        };
      case "colon-list-separator":
        return (_, m, F) => {
          if (B = /(:list)$/.exec(_), _ = _.replace(/:list$/, ""), !B) {
            F[_] = m;
            return;
          }
          if (F[_] === void 0) {
            F[_] = [m];
            return;
          }
          F[_] = [].concat(F[_], m);
        };
      case "comma":
      case "separator":
        return (_, m, F) => {
          const i = typeof m == "string" && m.includes(A.arrayFormatSeparator), d = typeof m == "string" && !i && x(m, A).includes(A.arrayFormatSeparator);
          m = d ? x(m, A) : m;
          const Y = i || d ? m.split(A.arrayFormatSeparator).map((q) => x(q, A)) : m === null ? m : x(m, A);
          F[_] = Y;
        };
      case "bracket-separator":
        return (_, m, F) => {
          const i = /(\[\])$/.test(_);
          if (_ = _.replace(/\[\]$/, ""), !i) {
            F[_] = m && x(m, A);
            return;
          }
          const d = m === null ? [] : m.split(A.arrayFormatSeparator).map((Y) => x(Y, A));
          if (F[_] === void 0) {
            F[_] = d;
            return;
          }
          F[_] = [].concat(F[_], d);
        };
      default:
        return (_, m, F) => {
          if (F[_] === void 0) {
            F[_] = m;
            return;
          }
          F[_] = [].concat(F[_], m);
        };
    }
  }
  function y(A) {
    if (typeof A != "string" || A.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(A, B) {
    return B.encode ? B.strict ? t(A) : encodeURIComponent(A) : A;
  }
  function x(A, B) {
    return B.decode ? n(A) : A;
  }
  function R(A) {
    return Array.isArray(A) ? A.sort() : typeof A == "object" ? R(Object.keys(A)).sort((B, _) => Number(B) - Number(_)).map((B) => A[B]) : A;
  }
  function S(A) {
    const B = A.indexOf("#");
    return B !== -1 && (A = A.slice(0, B)), A;
  }
  function O(A) {
    let B = "";
    const _ = A.indexOf("#");
    return _ !== -1 && (B = A.slice(_)), B;
  }
  function k(A) {
    A = S(A);
    const B = A.indexOf("?");
    return B === -1 ? "" : A.slice(B + 1);
  }
  function H(A, B) {
    return B.parseNumbers && !Number.isNaN(Number(A)) && typeof A == "string" && A.trim() !== "" ? A = Number(A) : B.parseBooleans && A !== null && (A.toLowerCase() === "true" || A.toLowerCase() === "false") && (A = A.toLowerCase() === "true"), A;
  }
  function X(A, B) {
    B = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, B), y(B.arrayFormatSeparator);
    const _ = l(B), m = /* @__PURE__ */ Object.create(null);
    if (typeof A != "string" || (A = A.trim().replace(/^[?#&]/, ""), !A))
      return m;
    for (const F of A.split("&")) {
      if (F === "")
        continue;
      let [i, d] = u(B.decode ? F.replace(/\+/g, " ") : F, "=");
      d = d === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(B.arrayFormat) ? d : x(d, B), _(x(i, B), d, m);
    }
    for (const F of Object.keys(m)) {
      const i = m[F];
      if (typeof i == "object" && i !== null)
        for (const d of Object.keys(i))
          i[d] = H(i[d], B);
      else
        m[F] = H(i, B);
    }
    return B.sort === !1 ? m : (B.sort === !0 ? Object.keys(m).sort() : Object.keys(m).sort(B.sort)).reduce((F, i) => {
      const d = m[i];
      return Boolean(d) && typeof d == "object" && !Array.isArray(d) ? F[i] = R(d) : F[i] = d, F;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = k, e.parse = X, e.stringify = (A, B) => {
    if (!A)
      return "";
    B = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, B), y(B.arrayFormatSeparator);
    const _ = (d) => B.skipNull && h(A[d]) || B.skipEmptyString && A[d] === "", m = a(B), F = {};
    for (const d of Object.keys(A))
      _(d) || (F[d] = A[d]);
    const i = Object.keys(F);
    return B.sort !== !1 && i.sort(B.sort), i.map((d) => {
      const Y = A[d];
      return Y === void 0 ? "" : Y === null ? v(d, B) : Array.isArray(Y) ? Y.length === 0 && B.arrayFormat === "bracket-separator" ? v(d, B) + "[]" : Y.reduce(m(d), []).join("&") : v(d, B) + "=" + v(Y, B);
    }).filter((d) => d.length > 0).join("&");
  }, e.parseUrl = (A, B) => {
    B = Object.assign({ decode: !0 }, B);
    const [_, m] = u(A, "#");
    return Object.assign({ url: _.split("?")[0] || "", query: X(k(A), B) }, B && B.parseFragmentIdentifier && m ? { fragmentIdentifier: x(m, B) } : {});
  }, e.stringifyUrl = (A, B) => {
    B = Object.assign({ encode: !0, strict: !0, [b]: !0 }, B);
    const _ = S(A.url).split("?")[0] || "", m = e.extract(A.url), F = e.parse(m, { sort: !1 }), i = Object.assign(F, A.query);
    let d = e.stringify(i, B);
    d && (d = `?${d}`);
    let Y = O(A.url);
    return A.fragmentIdentifier && (Y = `#${B[b] ? v(A.fragmentIdentifier, B) : A.fragmentIdentifier}`), `${_}${d}${Y}`;
  }, e.pick = (A, B, _) => {
    _ = Object.assign({ parseFragmentIdentifier: !0, [b]: !1 }, _);
    const { url: m, query: F, fragmentIdentifier: i } = e.parseUrl(A, _);
    return e.stringifyUrl({ url: m, query: c(F, B), fragmentIdentifier: i }, _);
  }, e.exclude = (A, B, _) => {
    const m = Array.isArray(B) ? (F) => !B.includes(F) : (F, i) => !B(F, i);
    return e.pick(A, m, _);
  };
})($1);
var G1 = {}, vt = {}, vi;
function Q1() {
  if (vi)
    return vt;
  vi = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.isBrowserCryptoAvailable = vt.getSubtleCrypto = vt.getBrowerCrypto = void 0;
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
var wt = {}, wi;
function J1() {
  if (wi)
    return wt;
  wi = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.isBrowser = wt.isNode = wt.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  wt.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  wt.isNode = t;
  function n() {
    return !e() && !t();
  }
  return wt.isBrowser = n, wt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ht;
  t.__exportStar(Q1(), e), t.__exportStar(J1(), e);
})(G1);
const ef = () => typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : require("ws");
ef();
var Qr = { exports: {} };
(function(e, t) {
  var n = 200, u = "__lodash_hash_undefined__", c = 1, h = 2, b = 9007199254740991, a = "[object Arguments]", l = "[object Array]", y = "[object AsyncFunction]", v = "[object Boolean]", x = "[object Date]", R = "[object Error]", S = "[object Function]", O = "[object GeneratorFunction]", k = "[object Map]", H = "[object Number]", X = "[object Null]", A = "[object Object]", B = "[object Promise]", _ = "[object Proxy]", m = "[object RegExp]", F = "[object Set]", i = "[object String]", d = "[object Symbol]", Y = "[object Undefined]", q = "[object WeakMap]", Q = "[object ArrayBuffer]", ee = "[object DataView]", te = "[object Float32Array]", p = "[object Float64Array]", E = "[object Int8Array]", z = "[object Int16Array]", $ = "[object Int32Array]", N = "[object Uint8Array]", P = "[object Uint8ClampedArray]", W = "[object Uint16Array]", V = "[object Uint32Array]", ie = /[\\^$.*+?()[\]{}|]/g, Z = /^\[object .+?Constructor\]$/, ue = /^(?:0|[1-9]\d*)$/, re = {};
  re[te] = re[p] = re[E] = re[z] = re[$] = re[N] = re[P] = re[W] = re[V] = !0, re[a] = re[l] = re[Q] = re[v] = re[ee] = re[x] = re[R] = re[S] = re[k] = re[H] = re[A] = re[m] = re[F] = re[i] = re[q] = !1;
  var de = typeof it == "object" && it && it.Object === Object && it, j = typeof self == "object" && self && self.Object === Object && self, U = de || j || Function("return this")(), T = t && !t.nodeType && t, o = T && !0 && e && !e.nodeType && e, L = o && o.exports === T, G = L && de.process, J = function() {
    try {
      return G && G.binding && G.binding("util");
    } catch {
    }
  }(), he = J && J.isTypedArray;
  function Fe(g, M) {
    for (var K = -1, ne = g == null ? 0 : g.length, Be = 0, be = []; ++K < ne; ) {
      var Re = g[K];
      M(Re, K, g) && (be[Be++] = Re);
    }
    return be;
  }
  function ve(g, M) {
    for (var K = -1, ne = M.length, Be = g.length; ++K < ne; )
      g[Be + K] = M[K];
    return g;
  }
  function Le(g, M) {
    for (var K = -1, ne = g == null ? 0 : g.length; ++K < ne; )
      if (M(g[K], K, g))
        return !0;
    return !1;
  }
  function xe(g, M) {
    for (var K = -1, ne = Array(g); ++K < g; )
      ne[K] = M(K);
    return ne;
  }
  function Te(g) {
    return function(M) {
      return g(M);
    };
  }
  function we(g, M) {
    return g.has(M);
  }
  function ge(g, M) {
    return g == null ? void 0 : g[M];
  }
  function ce(g) {
    var M = -1, K = Array(g.size);
    return g.forEach(function(ne, Be) {
      K[++M] = [Be, ne];
    }), K;
  }
  function ye(g, M) {
    return function(K) {
      return g(M(K));
    };
  }
  function _e(g) {
    var M = -1, K = Array(g.size);
    return g.forEach(function(ne) {
      K[++M] = ne;
    }), K;
  }
  var fe = Array.prototype, le = Function.prototype, r = Object.prototype, s = U["__core-js_shared__"], f = le.toString, w = r.hasOwnProperty, C = function() {
    var g = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), I = r.toString, D = RegExp("^" + f.call(w).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), oe = L ? U.Buffer : void 0, ae = U.Symbol, Ee = U.Uint8Array, me = r.propertyIsEnumerable, Se = fe.splice, ot = ae ? ae.toStringTag : void 0, St = Object.getOwnPropertySymbols, Kt = oe ? oe.isBuffer : void 0, ur = ye(Object.keys, Object), ke = It(U, "DataView"), je = It(U, "Map"), Ne = It(U, "Promise"), Pe = It(U, "Set"), He = It(U, "WeakMap"), Ie = It(Object, "create"), Ve = Ct(ke), $e = Ct(je), Ke = Ct(Ne), Ye = Ct(Pe), We = Ct(He), ze = ae ? ae.prototype : void 0, De = ze ? ze.valueOf : void 0;
  function Me(g) {
    var M = -1, K = g == null ? 0 : g.length;
    for (this.clear(); ++M < K; ) {
      var ne = g[M];
      this.set(ne[0], ne[1]);
    }
  }
  function qe() {
    this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
  }
  function Xe(g) {
    var M = this.has(g) && delete this.__data__[g];
    return this.size -= M ? 1 : 0, M;
  }
  function po(g) {
    var M = this.__data__;
    if (Ie) {
      var K = M[g];
      return K === u ? void 0 : K;
    }
    return w.call(M, g) ? M[g] : void 0;
  }
  function yo(g) {
    var M = this.__data__;
    return Ie ? M[g] !== void 0 : w.call(M, g);
  }
  function go(g, M) {
    var K = this.__data__;
    return this.size += this.has(g) ? 0 : 1, K[g] = Ie && M === void 0 ? u : M, this;
  }
  Me.prototype.clear = qe, Me.prototype.delete = Xe, Me.prototype.get = po, Me.prototype.has = yo, Me.prototype.set = go;
  function _t(g) {
    var M = -1, K = g == null ? 0 : g.length;
    for (this.clear(); ++M < K; ) {
      var ne = g[M];
      this.set(ne[0], ne[1]);
    }
  }
  function _o() {
    this.__data__ = [], this.size = 0;
  }
  function bo(g) {
    var M = this.__data__, K = cr(M, g);
    if (K < 0)
      return !1;
    var ne = M.length - 1;
    return K == ne ? M.pop() : Se.call(M, K, 1), --this.size, !0;
  }
  function vo(g) {
    var M = this.__data__, K = cr(M, g);
    return K < 0 ? void 0 : M[K][1];
  }
  function wo(g) {
    return cr(this.__data__, g) > -1;
  }
  function mo(g, M) {
    var K = this.__data__, ne = cr(K, g);
    return ne < 0 ? (++this.size, K.push([g, M])) : K[ne][1] = M, this;
  }
  _t.prototype.clear = _o, _t.prototype.delete = bo, _t.prototype.get = vo, _t.prototype.has = wo, _t.prototype.set = mo;
  function At(g) {
    var M = -1, K = g == null ? 0 : g.length;
    for (this.clear(); ++M < K; ) {
      var ne = g[M];
      this.set(ne[0], ne[1]);
    }
  }
  function Eo() {
    this.size = 0, this.__data__ = { hash: new Me(), map: new (je || _t)(), string: new Me() };
  }
  function Fo(g) {
    var M = hr(this, g).delete(g);
    return this.size -= M ? 1 : 0, M;
  }
  function Lo(g) {
    return hr(this, g).get(g);
  }
  function Oo(g) {
    return hr(this, g).has(g);
  }
  function So(g, M) {
    var K = hr(this, g), ne = K.size;
    return K.set(g, M), this.size += K.size == ne ? 0 : 1, this;
  }
  At.prototype.clear = Eo, At.prototype.delete = Fo, At.prototype.get = Lo, At.prototype.has = Oo, At.prototype.set = So;
  function fr(g) {
    var M = -1, K = g == null ? 0 : g.length;
    for (this.__data__ = new At(); ++M < K; )
      this.add(g[M]);
  }
  function Ao(g) {
    return this.__data__.set(g, u), this;
  }
  function Co(g) {
    return this.__data__.has(g);
  }
  fr.prototype.add = fr.prototype.push = Ao, fr.prototype.has = Co;
  function mt(g) {
    var M = this.__data__ = new _t(g);
    this.size = M.size;
  }
  function Bo() {
    this.__data__ = new _t(), this.size = 0;
  }
  function To(g) {
    var M = this.__data__, K = M.delete(g);
    return this.size = M.size, K;
  }
  function Mo(g) {
    return this.__data__.get(g);
  }
  function xo(g) {
    return this.__data__.has(g);
  }
  function Uo(g, M) {
    var K = this.__data__;
    if (K instanceof _t) {
      var ne = K.__data__;
      if (!je || ne.length < n - 1)
        return ne.push([g, M]), this.size = ++K.size, this;
      K = this.__data__ = new At(ne);
    }
    return K.set(g, M), this.size = K.size, this;
  }
  mt.prototype.clear = Bo, mt.prototype.delete = To, mt.prototype.get = Mo, mt.prototype.has = xo, mt.prototype.set = Uo;
  function jo(g, M) {
    var K = lr(g), ne = !K && Xo(g), Be = !K && !ne && Tr(g), be = !K && !ne && !Be && bn(g), Re = K || ne || Be || be, Ze = Re ? xe(g.length, String) : [], Ge = Ze.length;
    for (var Ue in g)
      (M || w.call(g, Ue)) && !(Re && (Ue == "length" || Be && (Ue == "offset" || Ue == "parent") || be && (Ue == "buffer" || Ue == "byteLength" || Ue == "byteOffset") || $o(Ue, Ge))) && Ze.push(Ue);
    return Ze;
  }
  function cr(g, M) {
    for (var K = g.length; K--; )
      if (dn(g[K][0], M))
        return K;
    return -1;
  }
  function Io(g, M, K) {
    var ne = M(g);
    return lr(g) ? ne : ve(ne, K(g));
  }
  function Yt(g) {
    return g == null ? g === void 0 ? Y : X : ot && ot in Object(g) ? zo(g) : qo(g);
  }
  function cn(g) {
    return Wt(g) && Yt(g) == a;
  }
  function hn(g, M, K, ne, Be) {
    return g === M ? !0 : g == null || M == null || !Wt(g) && !Wt(M) ? g !== g && M !== M : Ro(g, M, K, ne, hn, Be);
  }
  function Ro(g, M, K, ne, Be, be) {
    var Re = lr(g), Ze = lr(M), Ge = Re ? l : Et(g), Ue = Ze ? l : Et(M);
    Ge = Ge == a ? A : Ge, Ue = Ue == a ? A : Ue;
    var st = Ge == A, lt = Ue == A, et = Ge == Ue;
    if (et && Tr(g)) {
      if (!Tr(M))
        return !1;
      Re = !0, st = !1;
    }
    if (et && !st)
      return be || (be = new mt()), Re || bn(g) ? ln(g, M, K, ne, Be, be) : Ho(g, M, Ge, K, ne, Be, be);
    if (!(K & c)) {
      var ut = st && w.call(g, "__wrapped__"), ft = lt && w.call(M, "__wrapped__");
      if (ut || ft) {
        var Ft = ut ? g.value() : g, bt = ft ? M.value() : M;
        return be || (be = new mt()), Be(Ft, bt, K, ne, be);
      }
    }
    return et ? (be || (be = new mt()), Do(g, M, K, ne, Be, be)) : !1;
  }
  function ko(g) {
    if (!_n(g) || Yo(g))
      return !1;
    var M = yn(g) ? D : Z;
    return M.test(Ct(g));
  }
  function No(g) {
    return Wt(g) && gn(g.length) && !!re[Yt(g)];
  }
  function Po(g) {
    if (!Wo(g))
      return ur(g);
    var M = [];
    for (var K in Object(g))
      w.call(g, K) && K != "constructor" && M.push(K);
    return M;
  }
  function ln(g, M, K, ne, Be, be) {
    var Re = K & c, Ze = g.length, Ge = M.length;
    if (Ze != Ge && !(Re && Ge > Ze))
      return !1;
    var Ue = be.get(g);
    if (Ue && be.get(M))
      return Ue == M;
    var st = -1, lt = !0, et = K & h ? new fr() : void 0;
    for (be.set(g, M), be.set(M, g); ++st < Ze; ) {
      var ut = g[st], ft = M[st];
      if (ne)
        var Ft = Re ? ne(ft, ut, st, M, g, be) : ne(ut, ft, st, g, M, be);
      if (Ft !== void 0) {
        if (Ft)
          continue;
        lt = !1;
        break;
      }
      if (et) {
        if (!Le(M, function(bt, Bt) {
          if (!we(et, Bt) && (ut === bt || Be(ut, bt, K, ne, be)))
            return et.push(Bt);
        })) {
          lt = !1;
          break;
        }
      } else if (!(ut === ft || Be(ut, ft, K, ne, be))) {
        lt = !1;
        break;
      }
    }
    return be.delete(g), be.delete(M), lt;
  }
  function Ho(g, M, K, ne, Be, be, Re) {
    switch (K) {
      case ee:
        if (g.byteLength != M.byteLength || g.byteOffset != M.byteOffset)
          return !1;
        g = g.buffer, M = M.buffer;
      case Q:
        return !(g.byteLength != M.byteLength || !be(new Ee(g), new Ee(M)));
      case v:
      case x:
      case H:
        return dn(+g, +M);
      case R:
        return g.name == M.name && g.message == M.message;
      case m:
      case i:
        return g == M + "";
      case k:
        var Ze = ce;
      case F:
        var Ge = ne & c;
        if (Ze || (Ze = _e), g.size != M.size && !Ge)
          return !1;
        var Ue = Re.get(g);
        if (Ue)
          return Ue == M;
        ne |= h, Re.set(g, M);
        var st = ln(Ze(g), Ze(M), ne, Be, be, Re);
        return Re.delete(g), st;
      case d:
        if (De)
          return De.call(g) == De.call(M);
    }
    return !1;
  }
  function Do(g, M, K, ne, Be, be) {
    var Re = K & c, Ze = pn(g), Ge = Ze.length, Ue = pn(M), st = Ue.length;
    if (Ge != st && !Re)
      return !1;
    for (var lt = Ge; lt--; ) {
      var et = Ze[lt];
      if (!(Re ? et in M : w.call(M, et)))
        return !1;
    }
    var ut = be.get(g);
    if (ut && be.get(M))
      return ut == M;
    var ft = !0;
    be.set(g, M), be.set(M, g);
    for (var Ft = Re; ++lt < Ge; ) {
      et = Ze[lt];
      var bt = g[et], Bt = M[et];
      if (ne)
        var vn = Re ? ne(Bt, bt, et, M, g, be) : ne(bt, Bt, et, g, M, be);
      if (!(vn === void 0 ? bt === Bt || Be(bt, Bt, K, ne, be) : vn)) {
        ft = !1;
        break;
      }
      Ft || (Ft = et == "constructor");
    }
    if (ft && !Ft) {
      var pr = g.constructor, dr = M.constructor;
      pr != dr && "constructor" in g && "constructor" in M && !(typeof pr == "function" && pr instanceof pr && typeof dr == "function" && dr instanceof dr) && (ft = !1);
    }
    return be.delete(g), be.delete(M), ft;
  }
  function pn(g) {
    return Io(g, Qo, Vo);
  }
  function hr(g, M) {
    var K = g.__data__;
    return Ko(M) ? K[typeof M == "string" ? "string" : "hash"] : K.map;
  }
  function It(g, M) {
    var K = ge(g, M);
    return ko(K) ? K : void 0;
  }
  function zo(g) {
    var M = w.call(g, ot), K = g[ot];
    try {
      g[ot] = void 0;
      var ne = !0;
    } catch {
    }
    var Be = I.call(g);
    return ne && (M ? g[ot] = K : delete g[ot]), Be;
  }
  var Vo = St ? function(g) {
    return g == null ? [] : (g = Object(g), Fe(St(g), function(M) {
      return me.call(g, M);
    }));
  } : Jo, Et = Yt;
  (ke && Et(new ke(new ArrayBuffer(1))) != ee || je && Et(new je()) != k || Ne && Et(Ne.resolve()) != B || Pe && Et(new Pe()) != F || He && Et(new He()) != q) && (Et = function(g) {
    var M = Yt(g), K = M == A ? g.constructor : void 0, ne = K ? Ct(K) : "";
    if (ne)
      switch (ne) {
        case Ve:
          return ee;
        case $e:
          return k;
        case Ke:
          return B;
        case Ye:
          return F;
        case We:
          return q;
      }
    return M;
  });
  function $o(g, M) {
    return M = M != null ? M : b, !!M && (typeof g == "number" || ue.test(g)) && g > -1 && g % 1 == 0 && g < M;
  }
  function Ko(g) {
    var M = typeof g;
    return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? g !== "__proto__" : g === null;
  }
  function Yo(g) {
    return !!C && C in g;
  }
  function Wo(g) {
    var M = g && g.constructor, K = typeof M == "function" && M.prototype || r;
    return g === K;
  }
  function qo(g) {
    return I.call(g);
  }
  function Ct(g) {
    if (g != null) {
      try {
        return f.call(g);
      } catch {
      }
      try {
        return g + "";
      } catch {
      }
    }
    return "";
  }
  function dn(g, M) {
    return g === M || g !== g && M !== M;
  }
  var Xo = cn(function() {
    return arguments;
  }()) ? cn : function(g) {
    return Wt(g) && w.call(g, "callee") && !me.call(g, "callee");
  }, lr = Array.isArray;
  function Zo(g) {
    return g != null && gn(g.length) && !yn(g);
  }
  var Tr = Kt || es;
  function Go(g, M) {
    return hn(g, M);
  }
  function yn(g) {
    if (!_n(g))
      return !1;
    var M = Yt(g);
    return M == S || M == O || M == y || M == _;
  }
  function gn(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= b;
  }
  function _n(g) {
    var M = typeof g;
    return g != null && (M == "object" || M == "function");
  }
  function Wt(g) {
    return g != null && typeof g == "object";
  }
  var bn = he ? Te(he) : No;
  function Qo(g) {
    return Zo(g) ? jo(g) : Po(g);
  }
  function Jo() {
    return [];
  }
  function es() {
    return !1;
  }
  e.exports = Go;
})(Qr, Qr.exports);
Qr.exports;
function tf(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var n = new Uint8Array(256), u = 0; u < n.length; u++)
    n[u] = 255;
  for (var c = 0; c < e.length; c++) {
    var h = e.charAt(c), b = h.charCodeAt(0);
    if (n[b] !== 255)
      throw new TypeError(h + " is ambiguous");
    n[b] = c;
  }
  var a = e.length, l = e.charAt(0), y = Math.log(a) / Math.log(256), v = Math.log(256) / Math.log(a);
  function x(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var k = 0, H = 0, X = 0, A = O.length; X !== A && O[X] === 0; )
      X++, k++;
    for (var B = (A - X) * v + 1 >>> 0, _ = new Uint8Array(B); X !== A; ) {
      for (var m = O[X], F = 0, i = B - 1; (m !== 0 || F < H) && i !== -1; i--, F++)
        m += 256 * _[i] >>> 0, _[i] = m % a >>> 0, m = m / a >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      H = F, X++;
    }
    for (var d = B - H; d !== B && _[d] === 0; )
      d++;
    for (var Y = l.repeat(k); d < B; ++d)
      Y += e.charAt(_[d]);
    return Y;
  }
  function R(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var k = 0;
    if (O[k] !== " ") {
      for (var H = 0, X = 0; O[k] === l; )
        H++, k++;
      for (var A = (O.length - k) * y + 1 >>> 0, B = new Uint8Array(A); O[k]; ) {
        var _ = n[O.charCodeAt(k)];
        if (_ === 255)
          return;
        for (var m = 0, F = A - 1; (_ !== 0 || m < X) && F !== -1; F--, m++)
          _ += a * B[F] >>> 0, B[F] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        X = m, k++;
      }
      if (O[k] !== " ") {
        for (var i = A - X; i !== A && B[i] === 0; )
          i++;
        for (var d = new Uint8Array(H + (A - i)), Y = H; i !== A; )
          d[Y++] = B[i++];
        return d;
      }
    }
  }
  function S(O) {
    var k = R(O);
    if (k)
      return k;
    throw new Error(`Non-${t} character`);
  }
  return { encode: x, decodeUnsafe: R, decode: S };
}
var rf = tf, nf = rf;
const ro = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, of = (e) => new TextEncoder().encode(e), sf = (e) => new TextDecoder().decode(e);
class af {
  constructor(t, n, u) {
    this.name = t, this.prefix = n, this.baseEncode = u;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class uf {
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
    return no(this, t);
  }
}
class ff {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return no(this, t);
  }
  decode(t) {
    const n = t[0], u = this.decoders[n];
    if (u)
      return u.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const no = (e, t) => new ff({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class cf {
  constructor(t, n, u, c) {
    this.name = t, this.prefix = n, this.baseEncode = u, this.baseDecode = c, this.encoder = new af(t, n, u), this.decoder = new uf(t, n, c);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Br = ({ name: e, prefix: t, encode: n, decode: u }) => new cf(e, t, n, u), ar = ({ prefix: e, name: t, alphabet: n }) => {
  const { encode: u, decode: c } = nf(n, t);
  return Br({ prefix: e, name: t, encode: u, decode: (h) => ro(c(h)) });
}, hf = (e, t, n, u) => {
  const c = {};
  for (let v = 0; v < t.length; ++v)
    c[t[v]] = v;
  let h = e.length;
  for (; e[h - 1] === "="; )
    --h;
  const b = new Uint8Array(h * n / 8 | 0);
  let a = 0, l = 0, y = 0;
  for (let v = 0; v < h; ++v) {
    const x = c[e[v]];
    if (x === void 0)
      throw new SyntaxError(`Non-${u} character`);
    l = l << n | x, a += n, a >= 8 && (a -= 8, b[y++] = 255 & l >> a);
  }
  if (a >= n || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return b;
}, lf = (e, t, n) => {
  const u = t[t.length - 1] === "=", c = (1 << n) - 1;
  let h = "", b = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], b += 8; b > n; )
      b -= n, h += t[c & a >> b];
  if (b && (h += t[c & a << n - b]), u)
    for (; h.length * n & 7; )
      h += "=";
  return h;
}, Je = ({ name: e, prefix: t, bitsPerChar: n, alphabet: u }) => Br({ prefix: t, name: e, encode(c) {
  return lf(c, u, n);
}, decode(c) {
  return hf(c, u, n, e);
} }), pf = Br({ prefix: "\0", name: "identity", encode: (e) => sf(e), decode: (e) => of(e) });
var df = Object.freeze({ __proto__: null, identity: pf });
const yf = Je({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var gf = Object.freeze({ __proto__: null, base2: yf });
const _f = Je({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var bf = Object.freeze({ __proto__: null, base8: _f });
const vf = ar({ prefix: "9", name: "base10", alphabet: "0123456789" });
var wf = Object.freeze({ __proto__: null, base10: vf });
const mf = Je({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Ef = Je({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ff = Object.freeze({ __proto__: null, base16: mf, base16upper: Ef });
const Lf = Je({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Of = Je({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Sf = Je({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Af = Je({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Cf = Je({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Bf = Je({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Tf = Je({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Mf = Je({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), xf = Je({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Uf = Object.freeze({ __proto__: null, base32: Lf, base32upper: Of, base32pad: Sf, base32padupper: Af, base32hex: Cf, base32hexupper: Bf, base32hexpad: Tf, base32hexpadupper: Mf, base32z: xf });
const jf = ar({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), If = ar({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Rf = Object.freeze({ __proto__: null, base36: jf, base36upper: If });
const kf = ar({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Nf = ar({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Pf = Object.freeze({ __proto__: null, base58btc: kf, base58flickr: Nf });
const Hf = Je({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Df = Je({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), zf = Je({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Vf = Je({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var $f = Object.freeze({ __proto__: null, base64: Hf, base64pad: Df, base64url: zf, base64urlpad: Vf });
const io = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Kf = io.reduce((e, t, n) => (e[n] = t, e), []), Yf = io.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
function Wf(e) {
  return e.reduce((t, n) => (t += Kf[n], t), "");
}
function qf(e) {
  const t = [];
  for (const n of e) {
    const u = Yf[n.codePointAt(0)];
    if (u === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    t.push(u);
  }
  return new Uint8Array(t);
}
const Xf = Br({ prefix: "\u{1F680}", name: "base256emoji", encode: Wf, decode: qf });
var Zf = Object.freeze({ __proto__: null, base256emoji: Xf }), Gf = oo, mi = 128, Qf = 127, Jf = ~Qf, ec = Math.pow(2, 31);
function oo(e, t, n) {
  t = t || [], n = n || 0;
  for (var u = n; e >= ec; )
    t[n++] = e & 255 | mi, e /= 128;
  for (; e & Jf; )
    t[n++] = e & 255 | mi, e >>>= 7;
  return t[n] = e | 0, oo.bytes = n - u + 1, t;
}
var tc = Jr, rc = 128, Ei = 127;
function Jr(e, u) {
  var n = 0, u = u || 0, c = 0, h = u, b, a = e.length;
  do {
    if (h >= a)
      throw Jr.bytes = 0, new RangeError("Could not decode varint");
    b = e[h++], n += c < 28 ? (b & Ei) << c : (b & Ei) * Math.pow(2, c), c += 7;
  } while (b >= rc);
  return Jr.bytes = h - u, n;
}
var nc = Math.pow(2, 7), ic = Math.pow(2, 14), oc = Math.pow(2, 21), sc = Math.pow(2, 28), ac = Math.pow(2, 35), uc = Math.pow(2, 42), fc = Math.pow(2, 49), cc = Math.pow(2, 56), hc = Math.pow(2, 63), lc = function(e) {
  return e < nc ? 1 : e < ic ? 2 : e < oc ? 3 : e < sc ? 4 : e < ac ? 5 : e < uc ? 6 : e < fc ? 7 : e < cc ? 8 : e < hc ? 9 : 10;
}, pc = { encode: Gf, decode: tc, encodingLength: lc }, so = pc;
const Fi = (e, t, n = 0) => (so.encode(e, t, n), t), Li = (e) => so.encodingLength(e), en = (e, t) => {
  const n = t.byteLength, u = Li(e), c = u + Li(n), h = new Uint8Array(c + n);
  return Fi(e, h, 0), Fi(n, h, u), h.set(t, c), new dc(e, n, t, h);
};
class dc {
  constructor(t, n, u, c) {
    this.code = t, this.size = n, this.digest = u, this.bytes = c;
  }
}
const ao = ({ name: e, code: t, encode: n }) => new yc(e, t, n);
class yc {
  constructor(t, n, u) {
    this.name = t, this.code = n, this.encode = u;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const n = this.encode(t);
      return n instanceof Uint8Array ? en(this.code, n) : n.then((u) => en(this.code, u));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const uo = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), gc = ao({ name: "sha2-256", code: 18, encode: uo("SHA-256") }), _c = ao({ name: "sha2-512", code: 19, encode: uo("SHA-512") });
var bc = Object.freeze({ __proto__: null, sha256: gc, sha512: _c });
const fo = 0, vc = "identity", co = ro, wc = (e) => en(fo, co(e)), mc = { code: fo, name: vc, encode: co, digest: wc };
var Ec = Object.freeze({ __proto__: null, identity: mc });
new TextEncoder(), new TextDecoder();
({ ...df, ...gf, ...bf, ...wf, ...Ff, ...Uf, ...Rf, ...Pf, ...$f, ...Zf });
({ ...bc, ...Ec });
Oe.ONE_DAY;
Oe.SIX_HOURS;
Oe.ONE_SECOND;
Oe.FIVE_SECONDS * 1e3;
Oe.ONE_DAY, Oe.ONE_DAY, Oe.THIRTY_SECONDS, Oe.THIRTY_SECONDS, Oe.ONE_DAY, Oe.ONE_DAY;
Oe.SEVEN_DAYS;
Oe.FIVE_MINUTES, Oe.FIVE_MINUTES, Oe.FIVE_MINUTES, Oe.FIVE_MINUTES, Oe.ONE_DAY, Oe.ONE_DAY, Oe.ONE_DAY, Oe.ONE_DAY, Oe.FIVE_MINUTES, Oe.FIVE_MINUTES, Oe.FIVE_MINUTES, Oe.FIVE_MINUTES, Oe.ONE_DAY, Oe.ONE_DAY, Oe.THIRTY_SECONDS, Oe.THIRTY_SECONDS;
var tn = { exports: {} };
(function(e, t) {
  var n = typeof self < "u" ? self : it, u = function() {
    function h() {
      this.fetch = !1, this.DOMException = n.DOMException;
    }
    return h.prototype = n, new h();
  }();
  (function(h) {
    (function(b) {
      var a = { searchParams: "URLSearchParams" in h, iterable: "Symbol" in h && "iterator" in Symbol, blob: "FileReader" in h && "Blob" in h && function() {
        try {
          return new Blob(), !0;
        } catch {
          return !1;
        }
      }(), formData: "FormData" in h, arrayBuffer: "ArrayBuffer" in h };
      function l(p) {
        return p && DataView.prototype.isPrototypeOf(p);
      }
      if (a.arrayBuffer)
        var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], v = ArrayBuffer.isView || function(p) {
          return p && y.indexOf(Object.prototype.toString.call(p)) > -1;
        };
      function x(p) {
        if (typeof p != "string" && (p = String(p)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(p))
          throw new TypeError("Invalid character in header field name");
        return p.toLowerCase();
      }
      function R(p) {
        return typeof p != "string" && (p = String(p)), p;
      }
      function S(p) {
        var E = { next: function() {
          var z = p.shift();
          return { done: z === void 0, value: z };
        } };
        return a.iterable && (E[Symbol.iterator] = function() {
          return E;
        }), E;
      }
      function O(p) {
        this.map = {}, p instanceof O ? p.forEach(function(E, z) {
          this.append(z, E);
        }, this) : Array.isArray(p) ? p.forEach(function(E) {
          this.append(E[0], E[1]);
        }, this) : p && Object.getOwnPropertyNames(p).forEach(function(E) {
          this.append(E, p[E]);
        }, this);
      }
      O.prototype.append = function(p, E) {
        p = x(p), E = R(E);
        var z = this.map[p];
        this.map[p] = z ? z + ", " + E : E;
      }, O.prototype.delete = function(p) {
        delete this.map[x(p)];
      }, O.prototype.get = function(p) {
        return p = x(p), this.has(p) ? this.map[p] : null;
      }, O.prototype.has = function(p) {
        return this.map.hasOwnProperty(x(p));
      }, O.prototype.set = function(p, E) {
        this.map[x(p)] = R(E);
      }, O.prototype.forEach = function(p, E) {
        for (var z in this.map)
          this.map.hasOwnProperty(z) && p.call(E, this.map[z], z, this);
      }, O.prototype.keys = function() {
        var p = [];
        return this.forEach(function(E, z) {
          p.push(z);
        }), S(p);
      }, O.prototype.values = function() {
        var p = [];
        return this.forEach(function(E) {
          p.push(E);
        }), S(p);
      }, O.prototype.entries = function() {
        var p = [];
        return this.forEach(function(E, z) {
          p.push([z, E]);
        }), S(p);
      }, a.iterable && (O.prototype[Symbol.iterator] = O.prototype.entries);
      function k(p) {
        if (p.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        p.bodyUsed = !0;
      }
      function H(p) {
        return new Promise(function(E, z) {
          p.onload = function() {
            E(p.result);
          }, p.onerror = function() {
            z(p.error);
          };
        });
      }
      function X(p) {
        var E = new FileReader(), z = H(E);
        return E.readAsArrayBuffer(p), z;
      }
      function A(p) {
        var E = new FileReader(), z = H(E);
        return E.readAsText(p), z;
      }
      function B(p) {
        for (var E = new Uint8Array(p), z = new Array(E.length), $ = 0; $ < E.length; $++)
          z[$] = String.fromCharCode(E[$]);
        return z.join("");
      }
      function _(p) {
        if (p.slice)
          return p.slice(0);
        var E = new Uint8Array(p.byteLength);
        return E.set(new Uint8Array(p)), E.buffer;
      }
      function m() {
        return this.bodyUsed = !1, this._initBody = function(p) {
          this._bodyInit = p, p ? typeof p == "string" ? this._bodyText = p : a.blob && Blob.prototype.isPrototypeOf(p) ? this._bodyBlob = p : a.formData && FormData.prototype.isPrototypeOf(p) ? this._bodyFormData = p : a.searchParams && URLSearchParams.prototype.isPrototypeOf(p) ? this._bodyText = p.toString() : a.arrayBuffer && a.blob && l(p) ? (this._bodyArrayBuffer = _(p.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(p) || v(p)) ? this._bodyArrayBuffer = _(p) : this._bodyText = p = Object.prototype.toString.call(p) : this._bodyText = "", this.headers.get("content-type") || (typeof p == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(p) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, a.blob && (this.blob = function() {
          var p = k(this);
          if (p)
            return p;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? k(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(X);
        }), this.text = function() {
          var p = k(this);
          if (p)
            return p;
          if (this._bodyBlob)
            return A(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(B(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, a.formData && (this.formData = function() {
          return this.text().then(Y);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var F = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function i(p) {
        var E = p.toUpperCase();
        return F.indexOf(E) > -1 ? E : p;
      }
      function d(p, E) {
        E = E || {};
        var z = E.body;
        if (p instanceof d) {
          if (p.bodyUsed)
            throw new TypeError("Already read");
          this.url = p.url, this.credentials = p.credentials, E.headers || (this.headers = new O(p.headers)), this.method = p.method, this.mode = p.mode, this.signal = p.signal, !z && p._bodyInit != null && (z = p._bodyInit, p.bodyUsed = !0);
        } else
          this.url = String(p);
        if (this.credentials = E.credentials || this.credentials || "same-origin", (E.headers || !this.headers) && (this.headers = new O(E.headers)), this.method = i(E.method || this.method || "GET"), this.mode = E.mode || this.mode || null, this.signal = E.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && z)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(z);
      }
      d.prototype.clone = function() {
        return new d(this, { body: this._bodyInit });
      };
      function Y(p) {
        var E = new FormData();
        return p.trim().split("&").forEach(function(z) {
          if (z) {
            var $ = z.split("="), N = $.shift().replace(/\+/g, " "), P = $.join("=").replace(/\+/g, " ");
            E.append(decodeURIComponent(N), decodeURIComponent(P));
          }
        }), E;
      }
      function q(p) {
        var E = new O(), z = p.replace(/\r?\n[\t ]+/g, " ");
        return z.split(/\r?\n/).forEach(function($) {
          var N = $.split(":"), P = N.shift().trim();
          if (P) {
            var W = N.join(":").trim();
            E.append(P, W);
          }
        }), E;
      }
      m.call(d.prototype);
      function Q(p, E) {
        E || (E = {}), this.type = "default", this.status = E.status === void 0 ? 200 : E.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in E ? E.statusText : "OK", this.headers = new O(E.headers), this.url = E.url || "", this._initBody(p);
      }
      m.call(Q.prototype), Q.prototype.clone = function() {
        return new Q(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new O(this.headers), url: this.url });
      }, Q.error = function() {
        var p = new Q(null, { status: 0, statusText: "" });
        return p.type = "error", p;
      };
      var ee = [301, 302, 303, 307, 308];
      Q.redirect = function(p, E) {
        if (ee.indexOf(E) === -1)
          throw new RangeError("Invalid status code");
        return new Q(null, { status: E, headers: { location: p } });
      }, b.DOMException = h.DOMException;
      try {
        new b.DOMException();
      } catch {
        b.DOMException = function(p, E) {
          this.message = p, this.name = E;
          var z = Error(p);
          this.stack = z.stack;
        }, b.DOMException.prototype = Object.create(Error.prototype), b.DOMException.prototype.constructor = b.DOMException;
      }
      function te(p, E) {
        return new Promise(function(z, $) {
          var N = new d(p, E);
          if (N.signal && N.signal.aborted)
            return $(new b.DOMException("Aborted", "AbortError"));
          var P = new XMLHttpRequest();
          function W() {
            P.abort();
          }
          P.onload = function() {
            var V = { status: P.status, statusText: P.statusText, headers: q(P.getAllResponseHeaders() || "") };
            V.url = "responseURL" in P ? P.responseURL : V.headers.get("X-Request-URL");
            var ie = "response" in P ? P.response : P.responseText;
            z(new Q(ie, V));
          }, P.onerror = function() {
            $(new TypeError("Network request failed"));
          }, P.ontimeout = function() {
            $(new TypeError("Network request failed"));
          }, P.onabort = function() {
            $(new b.DOMException("Aborted", "AbortError"));
          }, P.open(N.method, N.url, !0), N.credentials === "include" ? P.withCredentials = !0 : N.credentials === "omit" && (P.withCredentials = !1), "responseType" in P && a.blob && (P.responseType = "blob"), N.headers.forEach(function(V, ie) {
            P.setRequestHeader(ie, V);
          }), N.signal && (N.signal.addEventListener("abort", W), P.onreadystatechange = function() {
            P.readyState === 4 && N.signal.removeEventListener("abort", W);
          }), P.send(typeof N._bodyInit > "u" ? null : N._bodyInit);
        });
      }
      return te.polyfill = !0, h.fetch || (h.fetch = te, h.Headers = O, h.Request = d, h.Response = Q), b.Headers = O, b.Request = d, b.Response = Q, b.fetch = te, Object.defineProperty(b, "__esModule", { value: !0 }), b;
    })({});
  })(u), u.fetch.ponyfill = !0, delete u.fetch.polyfill;
  var c = u;
  t = c.fetch, t.default = c.fetch, t.fetch = c.fetch, t.Headers = c.Headers, t.Request = c.Request, t.Response = c.Response, e.exports = t;
})(tn, tn.exports);
as(tn.exports);
const Fc = Symbol(), Oi = Object.getPrototypeOf, rn = /* @__PURE__ */ new WeakMap(), Lc = (e) => e && (rn.has(e) ? rn.get(e) : Oi(e) === Object.prototype || Oi(e) === Array.prototype), Oc = (e) => Lc(e) && e[Fc] || null, Si = (e, t = !0) => {
  rn.set(e, t);
}, Ur = (e) => typeof e == "object" && e !== null, dt = Symbol(), jr = /* @__PURE__ */ new WeakSet(), Sc = (e = Object.is, t = (y, v) => new Proxy(y, v), n = (y) => Ur(y) && !jr.has(y) && (Array.isArray(y) || !(Symbol.iterator in y)) && !(y instanceof WeakMap) && !(y instanceof WeakSet) && !(y instanceof Error) && !(y instanceof Number) && !(y instanceof Date) && !(y instanceof String) && !(y instanceof RegExp) && !(y instanceof ArrayBuffer), u = (y) => {
  switch (y.status) {
    case "fulfilled":
      return y.value;
    case "rejected":
      throw y.reason;
    default:
      throw y;
  }
}, c = /* @__PURE__ */ new WeakMap(), h = (y, v, x, R = u) => {
  const S = c.get(v);
  if ((S == null ? void 0 : S[0]) === x)
    return S[1];
  const O = Array.isArray(y) ? [] : Object.create(Object.getPrototypeOf(y));
  return Si(O, !0), c.set(v, [x, O]), Reflect.ownKeys(y).forEach((k) => {
    const H = Reflect.get(y, k, v);
    jr.has(H) ? (Si(H, !1), O[k] = H) : H instanceof Promise ? Object.defineProperty(O, k, { get() {
      return R(H);
    } }) : H != null && H[dt] ? O[k] = Cc(H, R) : O[k] = H;
  }), Object.freeze(O);
}, b = /* @__PURE__ */ new WeakMap(), a = [1], l = (y) => {
  if (!Ur(y))
    throw new Error("object required");
  const v = b.get(y);
  if (v)
    return v;
  let x = a[0];
  const R = /* @__PURE__ */ new Set(), S = (B, _ = ++a[0]) => {
    x !== _ && (x = _, R.forEach((m) => m(B, _)));
  }, O = /* @__PURE__ */ new Map(), k = (B) => {
    let _ = O.get(B);
    return _ || (_ = (m, F) => {
      const i = [...m];
      i[1] = [B, ...i[1]], S(i, F);
    }, O.set(B, _)), _;
  }, H = (B) => {
    const _ = O.get(B);
    return O.delete(B), _;
  }, X = Array.isArray(y) ? [] : Object.create(Object.getPrototypeOf(y)), A = t(X, { get(B, _, m) {
    return _ === dt ? [B, m, x, h, R] : Reflect.get(B, _, m);
  }, deleteProperty(B, _) {
    var m;
    const F = Reflect.get(B, _), i = (m = F == null ? void 0 : F[dt]) == null ? void 0 : m[4];
    i && i.delete(H(_));
    const d = Reflect.deleteProperty(B, _);
    return d && S(["delete", [_], F]), d;
  }, set(B, _, m, F) {
    var i, d;
    const Y = Reflect.has(B, _), q = Reflect.get(B, _, F);
    if (Y && e(q, m))
      return !0;
    const Q = (i = q == null ? void 0 : q[dt]) == null ? void 0 : i[4];
    Q && Q.delete(H(_)), Ur(m) && (m = Oc(m) || m);
    let ee = m;
    return (d = Object.getOwnPropertyDescriptor(B, _)) != null && d.set || (m instanceof Promise ? m.then((te) => {
      m.status = "fulfilled", m.value = te, S(["resolve", [_], te]);
    }).catch((te) => {
      m.status = "rejected", m.reason = te, S(["reject", [_], te]);
    }) : (!(m != null && m[dt]) && n(m) && (ee = Ot(m)), ee != null && ee[dt] && ee[dt][4].add(k(_)))), Reflect.set(B, _, ee, F), S(["set", [_], m, q]), !0;
  } });
  return b.set(y, A), Reflect.ownKeys(y).forEach((B) => {
    const _ = Object.getOwnPropertyDescriptor(y, B);
    _.get || _.set ? Object.defineProperty(X, B, _) : A[B] = y[B];
  }), A;
}) => [l, dt, jr, e, t, n, u, c, h, b, a], [Ac] = Sc();
function Ot(e = {}) {
  return Ac(e);
}
function Cc(e, t) {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && !(e != null && e[dt]) && console.warn("Please use proxy object");
  const [n, u, c, h] = e[dt];
  return h(n, u, c, t);
}
var ho = {}, vr = {};
vr.byteLength = Mc, vr.toByteArray = Uc, vr.fromByteArray = Rc;
for (var yt = [], ct = [], Bc = typeof Uint8Array < "u" ? Uint8Array : Array, Ir = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dt = 0, Tc = Ir.length; Dt < Tc; ++Dt)
  yt[Dt] = Ir[Dt], ct[Ir.charCodeAt(Dt)] = Dt;
ct["-".charCodeAt(0)] = 62, ct["_".charCodeAt(0)] = 63;
function lo(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var u = n === t ? 0 : 4 - n % 4;
  return [n, u];
}
function Mc(e) {
  var t = lo(e), n = t[0], u = t[1];
  return (n + u) * 3 / 4 - u;
}
function xc(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function Uc(e) {
  var t, n = lo(e), u = n[0], c = n[1], h = new Bc(xc(e, u, c)), b = 0, a = c > 0 ? u - 4 : u, l;
  for (l = 0; l < a; l += 4)
    t = ct[e.charCodeAt(l)] << 18 | ct[e.charCodeAt(l + 1)] << 12 | ct[e.charCodeAt(l + 2)] << 6 | ct[e.charCodeAt(l + 3)], h[b++] = t >> 16 & 255, h[b++] = t >> 8 & 255, h[b++] = t & 255;
  return c === 2 && (t = ct[e.charCodeAt(l)] << 2 | ct[e.charCodeAt(l + 1)] >> 4, h[b++] = t & 255), c === 1 && (t = ct[e.charCodeAt(l)] << 10 | ct[e.charCodeAt(l + 1)] << 4 | ct[e.charCodeAt(l + 2)] >> 2, h[b++] = t >> 8 & 255, h[b++] = t & 255), h;
}
function jc(e) {
  return yt[e >> 18 & 63] + yt[e >> 12 & 63] + yt[e >> 6 & 63] + yt[e & 63];
}
function Ic(e, t, n) {
  for (var u, c = [], h = t; h < n; h += 3)
    u = (e[h] << 16 & 16711680) + (e[h + 1] << 8 & 65280) + (e[h + 2] & 255), c.push(jc(u));
  return c.join("");
}
function Rc(e) {
  for (var t, n = e.length, u = n % 3, c = [], h = 16383, b = 0, a = n - u; b < a; b += h)
    c.push(Ic(e, b, b + h > a ? a : b + h));
  return u === 1 ? (t = e[n - 1], c.push(yt[t >> 2] + yt[t << 4 & 63] + "==")) : u === 2 && (t = (e[n - 2] << 8) + e[n - 1], c.push(yt[t >> 10] + yt[t >> 4 & 63] + yt[t << 2 & 63] + "=")), c.join("");
}
var nn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
nn.read = function(e, t, n, u, c) {
  var h, b, a = c * 8 - u - 1, l = (1 << a) - 1, y = l >> 1, v = -7, x = n ? c - 1 : 0, R = n ? -1 : 1, S = e[t + x];
  for (x += R, h = S & (1 << -v) - 1, S >>= -v, v += a; v > 0; h = h * 256 + e[t + x], x += R, v -= 8)
    ;
  for (b = h & (1 << -v) - 1, h >>= -v, v += u; v > 0; b = b * 256 + e[t + x], x += R, v -= 8)
    ;
  if (h === 0)
    h = 1 - y;
  else {
    if (h === l)
      return b ? NaN : (S ? -1 : 1) * (1 / 0);
    b = b + Math.pow(2, u), h = h - y;
  }
  return (S ? -1 : 1) * b * Math.pow(2, h - u);
}, nn.write = function(e, t, n, u, c, h) {
  var b, a, l, y = h * 8 - c - 1, v = (1 << y) - 1, x = v >> 1, R = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, S = u ? 0 : h - 1, O = u ? 1 : -1, k = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, b = v) : (b = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -b)) < 1 && (b--, l *= 2), b + x >= 1 ? t += R / l : t += R * Math.pow(2, 1 - x), t * l >= 2 && (b++, l /= 2), b + x >= v ? (a = 0, b = v) : b + x >= 1 ? (a = (t * l - 1) * Math.pow(2, c), b = b + x) : (a = t * Math.pow(2, x - 1) * Math.pow(2, c), b = 0)); c >= 8; e[n + S] = a & 255, S += O, a /= 256, c -= 8)
    ;
  for (b = b << c | a, y += c; y > 0; e[n + S] = b & 255, S += O, b /= 256, y -= 8)
    ;
  e[n + S - O] |= k * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(e) {
  const t = vr, n = nn, u = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = A, e.INSPECT_MAX_BYTES = 50;
  const c = 2147483647;
  e.kMaxLength = c, a.TYPED_ARRAY_SUPPORT = h(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function h() {
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
  function b(r) {
    if (r > c)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
    const s = new Uint8Array(r);
    return Object.setPrototypeOf(s, a.prototype), s;
  }
  function a(r, s, f) {
    if (typeof r == "number") {
      if (typeof s == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return x(r);
    }
    return l(r, s, f);
  }
  a.poolSize = 8192;
  function l(r, s, f) {
    if (typeof r == "string")
      return R(r, s);
    if (ArrayBuffer.isView(r))
      return O(r);
    if (r == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
    if (ce(r, ArrayBuffer) || r && ce(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ce(r, SharedArrayBuffer) || r && ce(r.buffer, SharedArrayBuffer)))
      return k(r, s, f);
    if (typeof r == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    const w = r.valueOf && r.valueOf();
    if (w != null && w !== r)
      return a.from(w, s, f);
    const C = H(r);
    if (C)
      return C;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
      return a.from(r[Symbol.toPrimitive]("string"), s, f);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
  }
  a.from = function(r, s, f) {
    return l(r, s, f);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function y(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  function v(r, s, f) {
    return y(r), r <= 0 ? b(r) : s !== void 0 ? typeof f == "string" ? b(r).fill(s, f) : b(r).fill(s) : b(r);
  }
  a.alloc = function(r, s, f) {
    return v(r, s, f);
  };
  function x(r) {
    return y(r), b(r < 0 ? 0 : X(r) | 0);
  }
  a.allocUnsafe = function(r) {
    return x(r);
  }, a.allocUnsafeSlow = function(r) {
    return x(r);
  };
  function R(r, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !a.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const f = B(r, s) | 0;
    let w = b(f);
    const C = w.write(r, s);
    return C !== f && (w = w.slice(0, C)), w;
  }
  function S(r) {
    const s = r.length < 0 ? 0 : X(r.length) | 0, f = b(s);
    for (let w = 0; w < s; w += 1)
      f[w] = r[w] & 255;
    return f;
  }
  function O(r) {
    if (ce(r, Uint8Array)) {
      const s = new Uint8Array(r);
      return k(s.buffer, s.byteOffset, s.byteLength);
    }
    return S(r);
  }
  function k(r, s, f) {
    if (s < 0 || r.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < s + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let w;
    return s === void 0 && f === void 0 ? w = new Uint8Array(r) : f === void 0 ? w = new Uint8Array(r, s) : w = new Uint8Array(r, s, f), Object.setPrototypeOf(w, a.prototype), w;
  }
  function H(r) {
    if (a.isBuffer(r)) {
      const s = X(r.length) | 0, f = b(s);
      return f.length === 0 || r.copy(f, 0, 0, s), f;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || ye(r.length) ? b(0) : S(r);
    if (r.type === "Buffer" && Array.isArray(r.data))
      return S(r.data);
  }
  function X(r) {
    if (r >= c)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
    return r | 0;
  }
  function A(r) {
    return +r != r && (r = 0), a.alloc(+r);
  }
  a.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== a.prototype;
  }, a.compare = function(r, s) {
    if (ce(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), ce(s, Uint8Array) && (s = a.from(s, s.offset, s.byteLength)), !a.isBuffer(r) || !a.isBuffer(s))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === s)
      return 0;
    let f = r.length, w = s.length;
    for (let C = 0, I = Math.min(f, w); C < I; ++C)
      if (r[C] !== s[C]) {
        f = r[C], w = s[C];
        break;
      }
    return f < w ? -1 : w < f ? 1 : 0;
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
    let f;
    if (s === void 0)
      for (s = 0, f = 0; f < r.length; ++f)
        s += r[f].length;
    const w = a.allocUnsafe(s);
    let C = 0;
    for (f = 0; f < r.length; ++f) {
      let I = r[f];
      if (ce(I, Uint8Array))
        C + I.length > w.length ? (a.isBuffer(I) || (I = a.from(I)), I.copy(w, C)) : Uint8Array.prototype.set.call(w, I, C);
      else if (a.isBuffer(I))
        I.copy(w, C);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      C += I.length;
    }
    return w;
  };
  function B(r, s) {
    if (a.isBuffer(r))
      return r.length;
    if (ArrayBuffer.isView(r) || ce(r, ArrayBuffer))
      return r.byteLength;
    if (typeof r != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
    const f = r.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && f === 0)
      return 0;
    let C = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return Le(r).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return we(r).length;
        default:
          if (C)
            return w ? -1 : Le(r).length;
          s = ("" + s).toLowerCase(), C = !0;
      }
  }
  a.byteLength = B;
  function _(r, s, f) {
    let w = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, s >>>= 0, f <= s))
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return P(this, s, f);
        case "utf8":
        case "utf-8":
          return p(this, s, f);
        case "ascii":
          return $(this, s, f);
        case "latin1":
        case "binary":
          return N(this, s, f);
        case "base64":
          return te(this, s, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return W(this, s, f);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + r);
          r = (r + "").toLowerCase(), w = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function m(r, s, f) {
    const w = r[s];
    r[s] = r[f], r[f] = w;
  }
  a.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let s = 0; s < r; s += 2)
      m(this, s, s + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let s = 0; s < r; s += 4)
      m(this, s, s + 3), m(this, s + 1, s + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let s = 0; s < r; s += 8)
      m(this, s, s + 7), m(this, s + 1, s + 6), m(this, s + 2, s + 5), m(this, s + 3, s + 4);
    return this;
  }, a.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? p(this, 0, r) : _.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(r) {
    if (!a.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : a.compare(this, r) === 0;
  }, a.prototype.inspect = function() {
    let r = "";
    const s = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (r += " ... "), "<Buffer " + r + ">";
  }, u && (a.prototype[u] = a.prototype.inspect), a.prototype.compare = function(r, s, f, w, C) {
    if (ce(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(r))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (s === void 0 && (s = 0), f === void 0 && (f = r ? r.length : 0), w === void 0 && (w = 0), C === void 0 && (C = this.length), s < 0 || f > r.length || w < 0 || C > this.length)
      throw new RangeError("out of range index");
    if (w >= C && s >= f)
      return 0;
    if (w >= C)
      return -1;
    if (s >= f)
      return 1;
    if (s >>>= 0, f >>>= 0, w >>>= 0, C >>>= 0, this === r)
      return 0;
    let I = C - w, D = f - s;
    const oe = Math.min(I, D), ae = this.slice(w, C), Ee = r.slice(s, f);
    for (let me = 0; me < oe; ++me)
      if (ae[me] !== Ee[me]) {
        I = ae[me], D = Ee[me];
        break;
      }
    return I < D ? -1 : D < I ? 1 : 0;
  };
  function F(r, s, f, w, C) {
    if (r.length === 0)
      return -1;
    if (typeof f == "string" ? (w = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, ye(f) && (f = C ? 0 : r.length - 1), f < 0 && (f = r.length + f), f >= r.length) {
      if (C)
        return -1;
      f = r.length - 1;
    } else if (f < 0)
      if (C)
        f = 0;
      else
        return -1;
    if (typeof s == "string" && (s = a.from(s, w)), a.isBuffer(s))
      return s.length === 0 ? -1 : i(r, s, f, w, C);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? C ? Uint8Array.prototype.indexOf.call(r, s, f) : Uint8Array.prototype.lastIndexOf.call(r, s, f) : i(r, [s], f, w, C);
    throw new TypeError("val must be string, number or Buffer");
  }
  function i(r, s, f, w, C) {
    let I = 1, D = r.length, oe = s.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (r.length < 2 || s.length < 2)
        return -1;
      I = 2, D /= 2, oe /= 2, f /= 2;
    }
    function ae(me, Se) {
      return I === 1 ? me[Se] : me.readUInt16BE(Se * I);
    }
    let Ee;
    if (C) {
      let me = -1;
      for (Ee = f; Ee < D; Ee++)
        if (ae(r, Ee) === ae(s, me === -1 ? 0 : Ee - me)) {
          if (me === -1 && (me = Ee), Ee - me + 1 === oe)
            return me * I;
        } else
          me !== -1 && (Ee -= Ee - me), me = -1;
    } else
      for (f + oe > D && (f = D - oe), Ee = f; Ee >= 0; Ee--) {
        let me = !0;
        for (let Se = 0; Se < oe; Se++)
          if (ae(r, Ee + Se) !== ae(s, Se)) {
            me = !1;
            break;
          }
        if (me)
          return Ee;
      }
    return -1;
  }
  a.prototype.includes = function(r, s, f) {
    return this.indexOf(r, s, f) !== -1;
  }, a.prototype.indexOf = function(r, s, f) {
    return F(this, r, s, f, !0);
  }, a.prototype.lastIndexOf = function(r, s, f) {
    return F(this, r, s, f, !1);
  };
  function d(r, s, f, w) {
    f = Number(f) || 0;
    const C = r.length - f;
    w ? (w = Number(w), w > C && (w = C)) : w = C;
    const I = s.length;
    w > I / 2 && (w = I / 2);
    let D;
    for (D = 0; D < w; ++D) {
      const oe = parseInt(s.substr(D * 2, 2), 16);
      if (ye(oe))
        return D;
      r[f + D] = oe;
    }
    return D;
  }
  function Y(r, s, f, w) {
    return ge(Le(s, r.length - f), r, f, w);
  }
  function q(r, s, f, w) {
    return ge(xe(s), r, f, w);
  }
  function Q(r, s, f, w) {
    return ge(we(s), r, f, w);
  }
  function ee(r, s, f, w) {
    return ge(Te(s, r.length - f), r, f, w);
  }
  a.prototype.write = function(r, s, f, w) {
    if (s === void 0)
      w = "utf8", f = this.length, s = 0;
    else if (f === void 0 && typeof s == "string")
      w = s, f = this.length, s = 0;
    else if (isFinite(s))
      s = s >>> 0, isFinite(f) ? (f = f >>> 0, w === void 0 && (w = "utf8")) : (w = f, f = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const C = this.length - s;
    if ((f === void 0 || f > C) && (f = C), r.length > 0 && (f < 0 || s < 0) || s > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let I = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return d(this, r, s, f);
        case "utf8":
        case "utf-8":
          return Y(this, r, s, f);
        case "ascii":
        case "latin1":
        case "binary":
          return q(this, r, s, f);
        case "base64":
          return Q(this, r, s, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, r, s, f);
        default:
          if (I)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), I = !0;
      }
  }, a.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function te(r, s, f) {
    return s === 0 && f === r.length ? t.fromByteArray(r) : t.fromByteArray(r.slice(s, f));
  }
  function p(r, s, f) {
    f = Math.min(r.length, f);
    const w = [];
    let C = s;
    for (; C < f; ) {
      const I = r[C];
      let D = null, oe = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (C + oe <= f) {
        let ae, Ee, me, Se;
        switch (oe) {
          case 1:
            I < 128 && (D = I);
            break;
          case 2:
            ae = r[C + 1], (ae & 192) === 128 && (Se = (I & 31) << 6 | ae & 63, Se > 127 && (D = Se));
            break;
          case 3:
            ae = r[C + 1], Ee = r[C + 2], (ae & 192) === 128 && (Ee & 192) === 128 && (Se = (I & 15) << 12 | (ae & 63) << 6 | Ee & 63, Se > 2047 && (Se < 55296 || Se > 57343) && (D = Se));
            break;
          case 4:
            ae = r[C + 1], Ee = r[C + 2], me = r[C + 3], (ae & 192) === 128 && (Ee & 192) === 128 && (me & 192) === 128 && (Se = (I & 15) << 18 | (ae & 63) << 12 | (Ee & 63) << 6 | me & 63, Se > 65535 && Se < 1114112 && (D = Se));
        }
      }
      D === null ? (D = 65533, oe = 1) : D > 65535 && (D -= 65536, w.push(D >>> 10 & 1023 | 55296), D = 56320 | D & 1023), w.push(D), C += oe;
    }
    return z(w);
  }
  const E = 4096;
  function z(r) {
    const s = r.length;
    if (s <= E)
      return String.fromCharCode.apply(String, r);
    let f = "", w = 0;
    for (; w < s; )
      f += String.fromCharCode.apply(String, r.slice(w, w += E));
    return f;
  }
  function $(r, s, f) {
    let w = "";
    f = Math.min(r.length, f);
    for (let C = s; C < f; ++C)
      w += String.fromCharCode(r[C] & 127);
    return w;
  }
  function N(r, s, f) {
    let w = "";
    f = Math.min(r.length, f);
    for (let C = s; C < f; ++C)
      w += String.fromCharCode(r[C]);
    return w;
  }
  function P(r, s, f) {
    const w = r.length;
    (!s || s < 0) && (s = 0), (!f || f < 0 || f > w) && (f = w);
    let C = "";
    for (let I = s; I < f; ++I)
      C += _e[r[I]];
    return C;
  }
  function W(r, s, f) {
    const w = r.slice(s, f);
    let C = "";
    for (let I = 0; I < w.length - 1; I += 2)
      C += String.fromCharCode(w[I] + w[I + 1] * 256);
    return C;
  }
  a.prototype.slice = function(r, s) {
    const f = this.length;
    r = ~~r, s = s === void 0 ? f : ~~s, r < 0 ? (r += f, r < 0 && (r = 0)) : r > f && (r = f), s < 0 ? (s += f, s < 0 && (s = 0)) : s > f && (s = f), s < r && (s = r);
    const w = this.subarray(r, s);
    return Object.setPrototypeOf(w, a.prototype), w;
  };
  function V(r, s, f) {
    if (r % 1 !== 0 || r < 0)
      throw new RangeError("offset is not uint");
    if (r + s > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(r, s, f) {
    r = r >>> 0, s = s >>> 0, f || V(r, s, this.length);
    let w = this[r], C = 1, I = 0;
    for (; ++I < s && (C *= 256); )
      w += this[r + I] * C;
    return w;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(r, s, f) {
    r = r >>> 0, s = s >>> 0, f || V(r, s, this.length);
    let w = this[r + --s], C = 1;
    for (; s > 0 && (C *= 256); )
      w += this[r + --s] * C;
    return w;
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
    const s = this[r], f = this[r + 7];
    (s === void 0 || f === void 0) && he(r, this.length - 8);
    const w = s + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, C = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + f * 2 ** 24;
    return BigInt(w) + (BigInt(C) << BigInt(32));
  }), a.prototype.readBigUInt64BE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], f = this[r + 7];
    (s === void 0 || f === void 0) && he(r, this.length - 8);
    const w = s * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], C = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + f;
    return (BigInt(w) << BigInt(32)) + BigInt(C);
  }), a.prototype.readIntLE = function(r, s, f) {
    r = r >>> 0, s = s >>> 0, f || V(r, s, this.length);
    let w = this[r], C = 1, I = 0;
    for (; ++I < s && (C *= 256); )
      w += this[r + I] * C;
    return C *= 128, w >= C && (w -= Math.pow(2, 8 * s)), w;
  }, a.prototype.readIntBE = function(r, s, f) {
    r = r >>> 0, s = s >>> 0, f || V(r, s, this.length);
    let w = s, C = 1, I = this[r + --w];
    for (; w > 0 && (C *= 256); )
      I += this[r + --w] * C;
    return C *= 128, I >= C && (I -= Math.pow(2, 8 * s)), I;
  }, a.prototype.readInt8 = function(r, s) {
    return r = r >>> 0, s || V(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, a.prototype.readInt16LE = function(r, s) {
    r = r >>> 0, s || V(r, 2, this.length);
    const f = this[r] | this[r + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, a.prototype.readInt16BE = function(r, s) {
    r = r >>> 0, s || V(r, 2, this.length);
    const f = this[r + 1] | this[r] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, a.prototype.readInt32LE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, a.prototype.readInt32BE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, a.prototype.readBigInt64LE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], f = this[r + 7];
    (s === void 0 || f === void 0) && he(r, this.length - 8);
    const w = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (f << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(s + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), a.prototype.readBigInt64BE = fe(function(r) {
    r = r >>> 0, J(r, "offset");
    const s = this[r], f = this[r + 7];
    (s === void 0 || f === void 0) && he(r, this.length - 8);
    const w = (s << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + f);
  }), a.prototype.readFloatLE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), n.read(this, r, !0, 23, 4);
  }, a.prototype.readFloatBE = function(r, s) {
    return r = r >>> 0, s || V(r, 4, this.length), n.read(this, r, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(r, s) {
    return r = r >>> 0, s || V(r, 8, this.length), n.read(this, r, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(r, s) {
    return r = r >>> 0, s || V(r, 8, this.length), n.read(this, r, !1, 52, 8);
  };
  function ie(r, s, f, w, C, I) {
    if (!a.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > C || s < I)
      throw new RangeError('"value" argument is out of bounds');
    if (f + w > r.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(r, s, f, w) {
    if (r = +r, s = s >>> 0, f = f >>> 0, !w) {
      const D = Math.pow(2, 8 * f) - 1;
      ie(this, r, s, f, D, 0);
    }
    let C = 1, I = 0;
    for (this[s] = r & 255; ++I < f && (C *= 256); )
      this[s + I] = r / C & 255;
    return s + f;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(r, s, f, w) {
    if (r = +r, s = s >>> 0, f = f >>> 0, !w) {
      const D = Math.pow(2, 8 * f) - 1;
      ie(this, r, s, f, D, 0);
    }
    let C = f - 1, I = 1;
    for (this[s + C] = r & 255; --C >= 0 && (I *= 256); )
      this[s + C] = r / I & 255;
    return s + f;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 1, 255, 0), this[s] = r & 255, s + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 2, 65535, 0), this[s] = r & 255, this[s + 1] = r >>> 8, s + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 2, 65535, 0), this[s] = r >>> 8, this[s + 1] = r & 255, s + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 4, 4294967295, 0), this[s + 3] = r >>> 24, this[s + 2] = r >>> 16, this[s + 1] = r >>> 8, this[s] = r & 255, s + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 4, 4294967295, 0), this[s] = r >>> 24, this[s + 1] = r >>> 16, this[s + 2] = r >>> 8, this[s + 3] = r & 255, s + 4;
  };
  function Z(r, s, f, w, C) {
    G(s, w, C, r, f, 7);
    let I = Number(s & BigInt(4294967295));
    r[f++] = I, I = I >> 8, r[f++] = I, I = I >> 8, r[f++] = I, I = I >> 8, r[f++] = I;
    let D = Number(s >> BigInt(32) & BigInt(4294967295));
    return r[f++] = D, D = D >> 8, r[f++] = D, D = D >> 8, r[f++] = D, D = D >> 8, r[f++] = D, f;
  }
  function ue(r, s, f, w, C) {
    G(s, w, C, r, f, 7);
    let I = Number(s & BigInt(4294967295));
    r[f + 7] = I, I = I >> 8, r[f + 6] = I, I = I >> 8, r[f + 5] = I, I = I >> 8, r[f + 4] = I;
    let D = Number(s >> BigInt(32) & BigInt(4294967295));
    return r[f + 3] = D, D = D >> 8, r[f + 2] = D, D = D >> 8, r[f + 1] = D, D = D >> 8, r[f] = D, f + 8;
  }
  a.prototype.writeBigUInt64LE = fe(function(r, s = 0) {
    return Z(this, r, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = fe(function(r, s = 0) {
    return ue(this, r, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(r, s, f, w) {
    if (r = +r, s = s >>> 0, !w) {
      const oe = Math.pow(2, 8 * f - 1);
      ie(this, r, s, f, oe - 1, -oe);
    }
    let C = 0, I = 1, D = 0;
    for (this[s] = r & 255; ++C < f && (I *= 256); )
      r < 0 && D === 0 && this[s + C - 1] !== 0 && (D = 1), this[s + C] = (r / I >> 0) - D & 255;
    return s + f;
  }, a.prototype.writeIntBE = function(r, s, f, w) {
    if (r = +r, s = s >>> 0, !w) {
      const oe = Math.pow(2, 8 * f - 1);
      ie(this, r, s, f, oe - 1, -oe);
    }
    let C = f - 1, I = 1, D = 0;
    for (this[s + C] = r & 255; --C >= 0 && (I *= 256); )
      r < 0 && D === 0 && this[s + C + 1] !== 0 && (D = 1), this[s + C] = (r / I >> 0) - D & 255;
    return s + f;
  }, a.prototype.writeInt8 = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[s] = r & 255, s + 1;
  }, a.prototype.writeInt16LE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 2, 32767, -32768), this[s] = r & 255, this[s + 1] = r >>> 8, s + 2;
  }, a.prototype.writeInt16BE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 2, 32767, -32768), this[s] = r >>> 8, this[s + 1] = r & 255, s + 2;
  }, a.prototype.writeInt32LE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 4, 2147483647, -2147483648), this[s] = r & 255, this[s + 1] = r >>> 8, this[s + 2] = r >>> 16, this[s + 3] = r >>> 24, s + 4;
  }, a.prototype.writeInt32BE = function(r, s, f) {
    return r = +r, s = s >>> 0, f || ie(this, r, s, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[s] = r >>> 24, this[s + 1] = r >>> 16, this[s + 2] = r >>> 8, this[s + 3] = r & 255, s + 4;
  }, a.prototype.writeBigInt64LE = fe(function(r, s = 0) {
    return Z(this, r, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = fe(function(r, s = 0) {
    return ue(this, r, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function re(r, s, f, w, C, I) {
    if (f + w > r.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function de(r, s, f, w, C) {
    return s = +s, f = f >>> 0, C || re(r, s, f, 4), n.write(r, s, f, w, 23, 4), f + 4;
  }
  a.prototype.writeFloatLE = function(r, s, f) {
    return de(this, r, s, !0, f);
  }, a.prototype.writeFloatBE = function(r, s, f) {
    return de(this, r, s, !1, f);
  };
  function j(r, s, f, w, C) {
    return s = +s, f = f >>> 0, C || re(r, s, f, 8), n.write(r, s, f, w, 52, 8), f + 8;
  }
  a.prototype.writeDoubleLE = function(r, s, f) {
    return j(this, r, s, !0, f);
  }, a.prototype.writeDoubleBE = function(r, s, f) {
    return j(this, r, s, !1, f);
  }, a.prototype.copy = function(r, s, f, w) {
    if (!a.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !w && w !== 0 && (w = this.length), s >= r.length && (s = r.length), s || (s = 0), w > 0 && w < f && (w = f), w === f || r.length === 0 || this.length === 0)
      return 0;
    if (s < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), r.length - s < w - f && (w = r.length - s + f);
    const C = w - f;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(s, f, w) : Uint8Array.prototype.set.call(r, this.subarray(f, w), s), C;
  }, a.prototype.fill = function(r, s, f, w) {
    if (typeof r == "string") {
      if (typeof s == "string" ? (w = s, s = 0, f = this.length) : typeof f == "string" && (w = f, f = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !a.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (r.length === 1) {
        const I = r.charCodeAt(0);
        (w === "utf8" && I < 128 || w === "latin1") && (r = I);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (s < 0 || this.length < s || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= s)
      return this;
    s = s >>> 0, f = f === void 0 ? this.length : f >>> 0, r || (r = 0);
    let C;
    if (typeof r == "number")
      for (C = s; C < f; ++C)
        this[C] = r;
    else {
      const I = a.isBuffer(r) ? r : a.from(r, w), D = I.length;
      if (D === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (C = 0; C < f - s; ++C)
        this[C + s] = I[C % D];
    }
    return this;
  };
  const U = {};
  function T(r, s, f) {
    U[r] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: s.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
      }
      get code() {
        return r;
      }
      set code(w) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: w, writable: !0 });
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
  }, TypeError), T("ERR_OUT_OF_RANGE", function(r, s, f) {
    let w = `The value of "${r}" is out of range.`, C = f;
    return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? C = o(String(f)) : typeof f == "bigint" && (C = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (C = o(C)), C += "n"), w += ` It must be ${s}. Received ${C}`, w;
  }, RangeError);
  function o(r) {
    let s = "", f = r.length;
    const w = r[0] === "-" ? 1 : 0;
    for (; f >= w + 4; f -= 3)
      s = `_${r.slice(f - 3, f)}${s}`;
    return `${r.slice(0, f)}${s}`;
  }
  function L(r, s, f) {
    J(s, "offset"), (r[s] === void 0 || r[s + f] === void 0) && he(s, r.length - (f + 1));
  }
  function G(r, s, f, w, C, I) {
    if (r > f || r < s) {
      const D = typeof s == "bigint" ? "n" : "";
      let oe;
      throw I > 3 ? s === 0 || s === BigInt(0) ? oe = `>= 0${D} and < 2${D} ** ${(I + 1) * 8}${D}` : oe = `>= -(2${D} ** ${(I + 1) * 8 - 1}${D}) and < 2 ** ${(I + 1) * 8 - 1}${D}` : oe = `>= ${s}${D} and <= ${f}${D}`, new U.ERR_OUT_OF_RANGE("value", oe, r);
    }
    L(w, C, I);
  }
  function J(r, s) {
    if (typeof r != "number")
      throw new U.ERR_INVALID_ARG_TYPE(s, "number", r);
  }
  function he(r, s, f) {
    throw Math.floor(r) !== r ? (J(r, f), new U.ERR_OUT_OF_RANGE(f || "offset", "an integer", r)) : s < 0 ? new U.ERR_BUFFER_OUT_OF_BOUNDS() : new U.ERR_OUT_OF_RANGE(f || "offset", `>= ${f ? 1 : 0} and <= ${s}`, r);
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
    let f;
    const w = r.length;
    let C = null;
    const I = [];
    for (let D = 0; D < w; ++D) {
      if (f = r.charCodeAt(D), f > 55295 && f < 57344) {
        if (!C) {
          if (f > 56319) {
            (s -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (D + 1 === w) {
            (s -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          C = f;
          continue;
        }
        if (f < 56320) {
          (s -= 3) > -1 && I.push(239, 191, 189), C = f;
          continue;
        }
        f = (C - 55296 << 10 | f - 56320) + 65536;
      } else
        C && (s -= 3) > -1 && I.push(239, 191, 189);
      if (C = null, f < 128) {
        if ((s -= 1) < 0)
          break;
        I.push(f);
      } else if (f < 2048) {
        if ((s -= 2) < 0)
          break;
        I.push(f >> 6 | 192, f & 63 | 128);
      } else if (f < 65536) {
        if ((s -= 3) < 0)
          break;
        I.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128);
      } else if (f < 1114112) {
        if ((s -= 4) < 0)
          break;
        I.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function xe(r) {
    const s = [];
    for (let f = 0; f < r.length; ++f)
      s.push(r.charCodeAt(f) & 255);
    return s;
  }
  function Te(r, s) {
    let f, w, C;
    const I = [];
    for (let D = 0; D < r.length && !((s -= 2) < 0); ++D)
      f = r.charCodeAt(D), w = f >> 8, C = f % 256, I.push(C), I.push(w);
    return I;
  }
  function we(r) {
    return t.toByteArray(ve(r));
  }
  function ge(r, s, f, w) {
    let C;
    for (C = 0; C < w && !(C + f >= s.length || C >= r.length); ++C)
      s[C + f] = r[C];
    return C;
  }
  function ce(r, s) {
    return r instanceof s || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === s.name;
  }
  function ye(r) {
    return r !== r;
  }
  const _e = function() {
    const r = "0123456789abcdef", s = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const w = f * 16;
      for (let C = 0; C < 16; ++C)
        s[w + C] = r[f] + r[C];
    }
    return s;
  }();
  function fe(r) {
    return typeof BigInt > "u" ? le : r;
  }
  function le() {
    throw new Error("BigInt not supported");
  }
})(ho);
Ot({ selectedChain: void 0, chains: void 0, standaloneChains: void 0, standaloneUri: void 0, address: void 0, profileName: void 0, profileAvatar: void 0, profileLoading: !1, balanceLoading: !1, balance: void 0, isConnected: !1, isStandalone: !1, isCustomDesktop: !1, isCustomMobile: !1, isExplorer: !1 });
Ot({ initialized: !1, ethereumClient: void 0 });
const xt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", isMobile() {
  return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return xt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isEmptyObject(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.getOwnPropertyNames(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, formatNativeUrl(e, t, n) {
  if (xt.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, n);
  let u = e;
  u.includes("://") || (u = e.replaceAll("/", "").replaceAll(":", ""), u = `${u}://`), this.setWalletConnectDeepLink(u, n);
  const c = encodeURIComponent(t);
  return `${u}wc?uri=${c}`;
}, formatUniversalUrl(e, t, n) {
  if (!xt.isHttpUrl(e))
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
  localStorage.setItem(xt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
}, setWalletConnectAndroidDeepLink(e) {
  const [t] = e.split("?");
  localStorage.setItem(xt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
}, removeWalletConnectDeepLink() {
  localStorage.removeItem(xt.WALLETCONNECT_DEEPLINK_CHOICE);
}, isNull(e) {
  return e === null;
} };
function kc() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
Ot({ projectId: void 0, themeMode: kc() ? "dark" : "light", themeColor: "default", themeBackground: xt.isMobile() ? "themeColor" : "gradient", themeZIndex: 89, mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chainImages: void 0, tokenImages: void 0, standaloneChains: void 0, enableStandaloneMode: !1, enableNetworkView: !1, defaultChain: void 0, explorerAllowList: void 0, explorerDenyList: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 });
Ot({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, previewWallets: [], recomendedWallets: [] });
Ot({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 });
Ot({ open: !1 });
Ot({ open: !1, message: "", variant: "success" });
typeof window < "u" && (window.Buffer || (window.Buffer = ho.Buffer), window.global || (window.global = window), window.process || (window.process = { env: {} }));
const Nc = "_btn_1ij5m_5", Pc = "_active_1ij5m_19", Hc = "_can_not_switch_1ij5m_36", Rr = {
  btn: Nc,
  active: Pc,
  can_not_switch: Hc
}, Dc = ({
  chain: e,
  loading: t,
  disabled: n,
  isActive: u,
  canSwitchChain: c,
  onClick: h
}) => {
  const {
    name: b,
    chainId: a
  } = e;
  let l = u ? Rr.active : Rr.btn;
  const y = c && !u;
  let v;
  return y ? v = () => h() : (l = `${l} ${Rr.can_not_switch}`, v = () => {
  }), /* @__PURE__ */ se(ts, {
    block: !0,
    className: l,
    disabled: t || n,
    icon: ns(a, 23, 23),
    onClick: v,
    children: b
  });
}, zc = ({
  chain: e,
  loading: t,
  connectedChainId: n,
  expectedChainId: u,
  canSwitchChain: c,
  onClick: h
}) => {
  const {
    chainId: b
  } = e, a = b === n;
  let l;
  return !a && u && (l = b !== u), /* @__PURE__ */ se(Dc, {
    onClick: h,
    loading: t,
    disabled: l,
    isActive: a,
    canSwitchChain: c,
    chain: e
  });
};
const kr = ({
  account: e,
  onClick: t,
  walletIcon: n,
  walletName: u,
  labelText: c
}) => {
  let h = /* @__PURE__ */ se("span", {
    className: "cnn",
    children: c
  }), b = "connect-wallet-button";
  return e && (h = /* @__PURE__ */ se("span", {
    className: "acc",
    children: is(e)
  }), b = `${b} active`), /* @__PURE__ */ nt("div", {
    onClick: e ? void 0 : t,
    className: b,
    children: [n, /* @__PURE__ */ se("span", {
      className: "wallet-name",
      children: u
    }), h]
  });
}, Vc = () => /* @__PURE__ */ nt("svg", {
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
}), $c = /* @__PURE__ */ se(Ci, {
  component: Vc
}), Kc = () => /* @__PURE__ */ se("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ se("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), Yc = /* @__PURE__ */ se(Ci, {
  component: Kc
}), Wc = "_chain_name_8kdgo_1", qc = {
  chain_name: Wc
}, Xc = "_bold_5fnjw_5", Ai = {
  bold: Xc
}, fn = ({
  className: e,
  children: t
}) => {
  const n = e ? `${e} ${Ai.bold}` : Ai.bold;
  return /* @__PURE__ */ se("span", {
    className: n,
    children: t
  });
}, er = ({
  children: e
}) => /* @__PURE__ */ se(fn, {
  className: qc.chain_name,
  children: e
}), Zc = ({
  account: e,
  chain: t,
  supportedChains: n,
  expectedChainId: u
}) => e ? u ? /* @__PURE__ */ nt(Ut, {
  children: ["You connected to ", /* @__PURE__ */ nt(er, {
    children: [t.name, "."]
  }), /* @__PURE__ */ nt("div", {
    children: ["Please connect to ", /* @__PURE__ */ se(er, {
      children: os(u)
    }), " network."]
  })]
}) : n.some((c) => c.name === t.name) ? /* @__PURE__ */ nt(Ut, {
  children: ["You are currently using ", /* @__PURE__ */ se(fn, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ se(er, {
    children: t.name
  }), " network"]
}) : /* @__PURE__ */ nt(Ut, {
  children: ["You connected to ", /* @__PURE__ */ nt(er, {
    children: [t.name, "."]
  }), /* @__PURE__ */ nt("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ se(er, {
      children: n.map((c) => c.name).join(", ")
    })]
  })]
}) : null, th = ({
  props: e,
  isMobile: t,
  btnGutter: n,
  styles: u
}) => {
  const {
    onCancel: c,
    onClose: h,
    afterConnect: b,
    afterChainSwitch: a,
    web3: l,
    expectedChainId: y
  } = e, [v, x] = rs(!1), R = /* @__PURE__ */ nt(Ut, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ se("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge"]
  }), S = /* @__PURE__ */ nt(Ut, {
    children: ["that you have read and understand the ", /* @__PURE__ */ se("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), {
    supportedChains: O,
    chain: k,
    switchChain: H,
    canSwitchChain: X,
    connect: A,
    account: B,
    connectorName: _,
    supportedConnectors: m
  } = l, F = () => {
    h && h(), c && c();
  }, i = async (p, E) => {
    x(!0);
    try {
      await A(p, E) && (c && c(), b && b());
    } finally {
      x(!1);
    }
  }, d = async (p) => {
    x(!0);
    try {
      await H(p) && (c && c(), a && a());
    } finally {
      x(!1);
    }
  }, Y = (p) => {
    const {
      chainId: E
    } = p;
    return /* @__PURE__ */ se(Mr, {
      flex: t ? 24 : 3,
      children: /* @__PURE__ */ se(zc, {
        onClick: () => d(E),
        loading: v,
        expectedChainId: y,
        connectedChainId: k.chainId,
        canSwitchChain: X,
        chain: p
      })
    }, E);
  }, q = (p, E, z, $) => {
    if (B && z === _)
      return /* @__PURE__ */ se(kr, {
        disabled: !0,
        walletName: E,
        walletIcon: $,
        account: B
      });
    const N = m[z];
    return N.isInstalled ? /* @__PURE__ */ se(kr, {
      walletName: E,
      onClick: () => i(p, z),
      walletIcon: $,
      labelText: "Connect"
    }) : /* @__PURE__ */ se(kr, {
      walletName: E,
      onClick: () => window.open(N.installUrl, "_blank").focus(),
      walletIcon: $,
      labelText: "Install"
    });
  }, Q = t ? void 0 : "space-between", ee = t ? 24 : 12, te = /* @__PURE__ */ nt(Ut, {
    children: [ss(k) && /* @__PURE__ */ nt(Ut, {
      children: [/* @__PURE__ */ se("div", {
        className: u.description,
        children: /* @__PURE__ */ se(Zc, {
          account: B,
          chain: k,
          supportedChains: O,
          expectedChainId: y
        })
      }), /* @__PURE__ */ se(wn, {
        gutter: n,
        className: u.chain_buttons,
        justify: Q,
        children: O.map((p) => Y(p))
      })]
    }), /* @__PURE__ */ nt("div", {
      className: u.description,
      children: [/* @__PURE__ */ se(fn, {
        children: "Connect your Wallet"
      }), " and jump into the world of NFT's"]
    }), /* @__PURE__ */ nt(wn, {
      gutter: n,
      justify: Q,
      children: [/* @__PURE__ */ se(Mr, {
        span: ee,
        children: q(O[0].chainId, "Metamask", Nr.Injected, $c)
      }), /* @__PURE__ */ se(Mr, {
        span: ee,
        children: q(O[0].chainId, "WalletConnect", Nr.WalletConnect, Yc)
      })]
    })]
  });
  return {
    footer1: R,
    footer2: S,
    content: te,
    onCancel: F,
    loading: v
  };
};
export {
  th as u
};
//# sourceMappingURL=useConnectModalCommon.0f5da3c8.mjs.map
