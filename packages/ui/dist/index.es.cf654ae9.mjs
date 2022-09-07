import { j as je, a as i1, I as a1, g as Eg, b as Q, c as Ie, d as Qe } from "./index.e847c3b3.mjs";
import { Button as Sg } from "antd";
import "ethers";
function ee(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i && Object.defineProperty(e, a, i.get ? i : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const lC = ({
  account: e,
  onClick: t,
  walletIcon: r,
  walletName: n,
  disabled: a,
  labelText: i
}) => {
  let s = /* @__PURE__ */ je("span", {
    className: "cnn",
    children: i
  }), f = "connect-wallet-button";
  return e && (s = /* @__PURE__ */ je("span", {
    className: "acc",
    children: e.toMasskedAddress()
  }), f = `${f} active`), /* @__PURE__ */ i1("div", {
    onClick: e ? void 0 : t,
    className: f,
    children: [r, /* @__PURE__ */ je("span", {
      className: "wallet-name",
      children: n
    }), s]
  });
}, Ag = () => /* @__PURE__ */ i1("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ je("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ je("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), hC = /* @__PURE__ */ je(a1, {
  component: Ag
}), $g = () => /* @__PURE__ */ je("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ je("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), dC = /* @__PURE__ */ je(a1, {
  component: $g
});
const pC = ({
  chain: e,
  loading: t,
  isActive: r,
  canSwitchChain: n,
  onClick: a
}) => {
  const {
    name: i,
    chainId: s
  } = e;
  let f = r ? "chain-btn-active" : "chain-btn";
  const v = n && !r;
  let m;
  return v ? m = () => a() : (f = `${f} can-not-switch`, m = () => {
  }), /* @__PURE__ */ je(Sg, {
    block: !0,
    className: f,
    disabled: t,
    icon: Eg(s, 23, 23),
    onClick: m,
    children: i
  });
};
var Fa = { exports: {} }, Un = typeof Reflect == "object" ? Reflect : null, sc = Un && typeof Un.apply == "function" ? Un.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, Oa;
Un && typeof Un.ownKeys == "function" ? Oa = Un.ownKeys : Object.getOwnPropertySymbols ? Oa = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Oa = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Rg(e) {
  console && console.warn && console.warn(e);
}
var o1 = Number.isNaN || function(t) {
  return t !== t;
};
function at() {
  at.init.call(this);
}
Fa.exports = at;
var Bg = Fa.exports.once = Og;
at.EventEmitter = at;
at.prototype._events = void 0;
at.prototype._eventsCount = 0;
at.prototype._maxListeners = void 0;
var uc = 10;
function qo(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(at, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return uc;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || o1(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    uc = e;
  }
});
at.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
at.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || o1(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function f1(e) {
  return e._maxListeners === void 0 ? at.defaultMaxListeners : e._maxListeners;
}
at.prototype.getMaxListeners = function() {
  return f1(this);
};
at.prototype.emit = function(t) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var a = t === "error", i = this._events;
  if (i !== void 0)
    a = a && i.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var s;
    if (r.length > 0 && (s = r[0]), s instanceof Error)
      throw s;
    var f = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw f.context = s, f;
  }
  var v = i[t];
  if (v === void 0)
    return !1;
  if (typeof v == "function")
    sc(v, this, r);
  else
    for (var m = v.length, _ = h1(v, m), n = 0; n < m; ++n)
      sc(_[n], this, r);
  return !0;
};
function s1(e, t, r, n) {
  var a, i, s;
  if (qo(r), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), i = e._events), s = i[t]), s === void 0)
    s = i[t] = r, ++e._eventsCount;
  else if (typeof s == "function" ? s = i[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), a = f1(e), a > 0 && s.length > a && !s.warned) {
    s.warned = !0;
    var f = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    f.name = "MaxListenersExceededWarning", f.emitter = e, f.type = t, f.count = s.length, Rg(f);
  }
  return e;
}
at.prototype.addListener = function(t, r) {
  return s1(this, t, r, !1);
};
at.prototype.on = at.prototype.addListener;
at.prototype.prependListener = function(t, r) {
  return s1(this, t, r, !0);
};
function Tg() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function u1(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, a = Tg.bind(n);
  return a.listener = r, n.wrapFn = a, a;
}
at.prototype.once = function(t, r) {
  return qo(r), this.on(t, u1(this, t, r)), this;
};
at.prototype.prependOnceListener = function(t, r) {
  return qo(r), this.prependListener(t, u1(this, t, r)), this;
};
at.prototype.removeListener = function(t, r) {
  var n, a, i, s, f;
  if (qo(r), a = this._events, a === void 0)
    return this;
  if (n = a[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (i = -1, s = n.length - 1; s >= 0; s--)
      if (n[s] === r || n[s].listener === r) {
        f = n[s].listener, i = s;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : Ig(n, i), n.length === 1 && (a[t] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", t, f || r);
  }
  return this;
};
at.prototype.off = at.prototype.removeListener;
at.prototype.removeAllListeners = function(t) {
  var r, n, a;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), s;
    for (a = 0; a < i.length; ++a)
      s = i[a], s !== "removeListener" && this.removeAllListeners(s);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (a = r.length - 1; a >= 0; a--)
      this.removeListener(t, r[a]);
  return this;
};
function c1(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[t];
  return a === void 0 ? [] : typeof a == "function" ? r ? [a.listener || a] : [a] : r ? Pg(a) : h1(a, a.length);
}
at.prototype.listeners = function(t) {
  return c1(this, t, !0);
};
at.prototype.rawListeners = function(t) {
  return c1(this, t, !1);
};
at.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : l1.call(e, t);
};
at.prototype.listenerCount = l1;
function l1(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
at.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Oa(this._events) : [];
};
function h1(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function Ig(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Pg(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Og(e, t) {
  return new Promise(function(r, n) {
    function a(s) {
      e.removeListener(t, i), n(s);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), r([].slice.call(arguments));
    }
    d1(e, t, i, { once: !0 }), t !== "error" && Lg(e, a, { once: !0 });
  });
}
function Lg(e, t, r) {
  typeof e.on == "function" && d1(e, "error", t, r);
}
function d1(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(i) {
      n.once && e.removeEventListener(t, a), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
const Cg = /* @__PURE__ */ ee({
  __proto__: null,
  once: Bg,
  default: Fa.exports
}, [Fa.exports]), Jr = /* @__PURE__ */ Q(Cg);
var Us = {}, Ds = {}, cc = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var a = 42;
  t[r] = a;
  for (r in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(t);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var s = Object.getOwnPropertyDescriptor(t, r);
    if (s.value !== a || s.enumerable !== !0)
      return !1;
  }
  return !0;
};
const kg = /* @__PURE__ */ ee({
  __proto__: null,
  default: cc
}, [cc]), p1 = /* @__PURE__ */ Q(kg);
var Ng = p1, lc = function() {
  return Ng() && !!Symbol.toStringTag;
};
const qg = /* @__PURE__ */ ee({
  __proto__: null,
  default: lc
}, [lc]), Fo = /* @__PURE__ */ Q(qg);
var hc = typeof Symbol < "u" && Symbol, Fg = p1, dc = function() {
  return typeof hc != "function" || typeof Symbol != "function" || typeof hc("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Fg();
};
const Ug = /* @__PURE__ */ ee({
  __proto__: null,
  default: dc
}, [dc]), Dg = /* @__PURE__ */ Q(Ug);
var jg = "Function.prototype.bind called on incompatible ", Mf = Array.prototype.slice, Hg = Object.prototype.toString, zg = "[object Function]", pc = function(t) {
  var r = this;
  if (typeof r != "function" || Hg.call(r) !== zg)
    throw new TypeError(jg + r);
  for (var n = Mf.call(arguments, 1), a, i = function() {
    if (this instanceof a) {
      var _ = r.apply(
        this,
        n.concat(Mf.call(arguments))
      );
      return Object(_) === _ ? _ : this;
    } else
      return r.apply(
        t,
        n.concat(Mf.call(arguments))
      );
  }, s = Math.max(0, r.length - n.length), f = [], v = 0; v < s; v++)
    f.push("$" + v);
  if (a = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var m = function() {
    };
    m.prototype = r.prototype, a.prototype = new m(), m.prototype = null;
  }
  return a;
};
const Kg = /* @__PURE__ */ ee({
  __proto__: null,
  default: pc
}, [pc]), Wg = /* @__PURE__ */ Q(Kg);
var Gg = Wg, vc = Function.prototype.bind || Gg;
const Vg = /* @__PURE__ */ ee({
  __proto__: null,
  default: vc
}, [vc]), Gu = /* @__PURE__ */ Q(Vg);
var Zg = Gu, yc = Zg.call(Function.call, Object.prototype.hasOwnProperty);
const Jg = /* @__PURE__ */ ee({
  __proto__: null,
  default: yc
}, [yc]), Yg = /* @__PURE__ */ Q(Jg);
var tt, Kn = SyntaxError, v1 = Function, Dn = TypeError, Ef = function(e) {
  try {
    return v1('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, hn = Object.getOwnPropertyDescriptor;
if (hn)
  try {
    hn({}, "");
  } catch {
    hn = null;
  }
var Sf = function() {
  throw new Dn();
}, Xg = hn ? function() {
  try {
    return arguments.callee, Sf;
  } catch {
    try {
      return hn(arguments, "callee").get;
    } catch {
      return Sf;
    }
  }
}() : Sf, Pn = Dg(), zr = Object.getPrototypeOf || function(e) {
  return e.__proto__;
}, Cn = {}, Qg = typeof Uint8Array > "u" ? tt : zr(Uint8Array), jn = {
  "%AggregateError%": typeof AggregateError > "u" ? tt : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? tt : ArrayBuffer,
  "%ArrayIteratorPrototype%": Pn ? zr([][Symbol.iterator]()) : tt,
  "%AsyncFromSyncIteratorPrototype%": tt,
  "%AsyncFunction%": Cn,
  "%AsyncGenerator%": Cn,
  "%AsyncGeneratorFunction%": Cn,
  "%AsyncIteratorPrototype%": Cn,
  "%Atomics%": typeof Atomics > "u" ? tt : Atomics,
  "%BigInt%": typeof BigInt > "u" ? tt : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? tt : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? tt : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? tt : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? tt : FinalizationRegistry,
  "%Function%": v1,
  "%GeneratorFunction%": Cn,
  "%Int8Array%": typeof Int8Array > "u" ? tt : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? tt : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? tt : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Pn ? zr(zr([][Symbol.iterator]())) : tt,
  "%JSON%": typeof JSON == "object" ? JSON : tt,
  "%Map%": typeof Map > "u" ? tt : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Pn ? tt : zr((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? tt : Promise,
  "%Proxy%": typeof Proxy > "u" ? tt : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? tt : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? tt : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Pn ? tt : zr((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? tt : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Pn ? zr(""[Symbol.iterator]()) : tt,
  "%Symbol%": Pn ? Symbol : tt,
  "%SyntaxError%": Kn,
  "%ThrowTypeError%": Xg,
  "%TypedArray%": Qg,
  "%TypeError%": Dn,
  "%Uint8Array%": typeof Uint8Array > "u" ? tt : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? tt : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? tt : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? tt : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? tt : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? tt : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? tt : WeakSet
}, eb = function e(t) {
  var r;
  if (t === "%AsyncFunction%")
    r = Ef("async function () {}");
  else if (t === "%GeneratorFunction%")
    r = Ef("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    r = Ef("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = e("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var a = e("%AsyncGenerator%");
    a && (r = zr(a.prototype));
  }
  return jn[t] = r, r;
}, gc = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, na = Gu, Ua = Yg, tb = na.call(Function.call, Array.prototype.concat), rb = na.call(Function.apply, Array.prototype.splice), bc = na.call(Function.call, String.prototype.replace), Da = na.call(Function.call, String.prototype.slice), nb = na.call(Function.call, RegExp.prototype.exec), ib = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ab = /\\(\\)?/g, ob = function(t) {
  var r = Da(t, 0, 1), n = Da(t, -1);
  if (r === "%" && n !== "%")
    throw new Kn("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Kn("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return bc(t, ib, function(i, s, f, v) {
    a[a.length] = f ? bc(v, ab, "$1") : s || i;
  }), a;
}, fb = function(t, r) {
  var n = t, a;
  if (Ua(gc, n) && (a = gc[n], n = "%" + a[0] + "%"), Ua(jn, n)) {
    var i = jn[n];
    if (i === Cn && (i = eb(n)), typeof i > "u" && !r)
      throw new Dn("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: i
    };
  }
  throw new Kn("intrinsic " + t + " does not exist!");
}, _c = function(t, r) {
  if (typeof t != "string" || t.length === 0)
    throw new Dn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Dn('"allowMissing" argument must be a boolean');
  if (nb(/^%?[^%]*%?$/g, t) === null)
    throw new Kn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ob(t), a = n.length > 0 ? n[0] : "", i = fb("%" + a + "%", r), s = i.name, f = i.value, v = !1, m = i.alias;
  m && (a = m[0], rb(n, tb([0, 1], m)));
  for (var _ = 1, O = !0; _ < n.length; _ += 1) {
    var P = n[_], C = Da(P, 0, 1), M = Da(P, -1);
    if ((C === '"' || C === "'" || C === "`" || M === '"' || M === "'" || M === "`") && C !== M)
      throw new Kn("property names with quotes must have matching quotes");
    if ((P === "constructor" || !O) && (v = !0), a += "." + P, s = "%" + a + "%", Ua(jn, s))
      f = jn[s];
    else if (f != null) {
      if (!(P in f)) {
        if (!r)
          throw new Dn("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (hn && _ + 1 >= n.length) {
        var k = hn(f, P);
        O = !!k, O && "get" in k && !("originalValue" in k.get) ? f = k.get : f = f[P];
      } else
        O = Ua(f, P), f = f[P];
      O && !v && (jn[s] = f);
    }
  }
  return f;
};
const sb = /* @__PURE__ */ ee({
  __proto__: null,
  default: _c
}, [_c]), Uo = /* @__PURE__ */ Q(sb);
var Vu = { exports: {} };
(function(e) {
  var t = Gu, r = Uo, n = r("%Function.prototype.apply%"), a = r("%Function.prototype.call%"), i = r("%Reflect.apply%", !0) || t.call(a, n), s = r("%Object.getOwnPropertyDescriptor%", !0), f = r("%Object.defineProperty%", !0), v = r("%Math.max%");
  if (f)
    try {
      f({}, "a", { value: 1 });
    } catch {
      f = null;
    }
  e.exports = function(O) {
    var P = i(t, a, arguments);
    if (s && f) {
      var C = s(P, "length");
      C.configurable && f(
        P,
        "length",
        { value: 1 + v(0, O.length - (arguments.length - 1)) }
      );
    }
    return P;
  };
  var m = function() {
    return i(t, n, arguments);
  };
  f ? f(e.exports, "apply", { value: m }) : e.exports.apply = m;
})(Vu);
const ub = Vu.exports, cb = /* @__PURE__ */ ee({
  __proto__: null,
  default: ub
}, [Vu.exports]), Zu = /* @__PURE__ */ Q(cb);
var y1 = Uo, g1 = Zu, lb = g1(y1("String.prototype.indexOf")), mc = function(t, r) {
  var n = y1(t, !!r);
  return typeof n == "function" && lb(t, ".prototype.") > -1 ? g1(n) : n;
};
const hb = /* @__PURE__ */ ee({
  __proto__: null,
  default: mc
}, [mc]), Ju = /* @__PURE__ */ Q(hb);
var db = Fo(), pb = Ju, js = pb("Object.prototype.toString"), Do = function(t) {
  return db && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : js(t) === "[object Arguments]";
}, b1 = function(t) {
  return Do(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && js(t) !== "[object Array]" && js(t.callee) === "[object Function]";
}, vb = function() {
  return Do(arguments);
}();
Do.isLegacyArguments = b1;
var wc = vb ? Do : b1;
const yb = /* @__PURE__ */ ee({
  __proto__: null,
  default: wc
}, [wc]), gb = /* @__PURE__ */ Q(yb);
var bb = Object.prototype.toString, _b = Function.prototype.toString, mb = /^\s*(?:function)?\*/, _1 = Fo(), Af = Object.getPrototypeOf, wb = function() {
  if (!_1)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, $f, xc = function(t) {
  if (typeof t != "function")
    return !1;
  if (mb.test(_b.call(t)))
    return !0;
  if (!_1) {
    var r = bb.call(t);
    return r === "[object GeneratorFunction]";
  }
  if (!Af)
    return !1;
  if (typeof $f > "u") {
    var n = wb();
    $f = n ? Af(n) : !1;
  }
  return Af(t) === $f;
};
const xb = /* @__PURE__ */ ee({
  __proto__: null,
  default: xc
}, [xc]), Mb = /* @__PURE__ */ Q(xb);
var m1 = Function.prototype.toString, qn = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Hs, La;
if (typeof qn == "function" && typeof Object.defineProperty == "function")
  try {
    Hs = Object.defineProperty({}, "length", {
      get: function() {
        throw La;
      }
    }), La = {}, qn(function() {
      throw 42;
    }, null, Hs);
  } catch (e) {
    e !== La && (qn = null);
  }
else
  qn = null;
var Eb = /^\s*class\b/, zs = function(t) {
  try {
    var r = m1.call(t);
    return Eb.test(r);
  } catch {
    return !1;
  }
}, Sb = function(t) {
  try {
    return zs(t) ? !1 : (m1.call(t), !0);
  } catch {
    return !1;
  }
}, Ab = Object.prototype.toString, $b = "[object Function]", Rb = "[object GeneratorFunction]", Bb = typeof Symbol == "function" && !!Symbol.toStringTag, Mc = typeof document == "object" && typeof document.all > "u" && document.all !== void 0 ? document.all : {}, Ec = qn ? function(t) {
  if (t === Mc)
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (typeof t == "function" && !t.prototype)
    return !0;
  try {
    qn(t, null, Hs);
  } catch (r) {
    if (r !== La)
      return !1;
  }
  return !zs(t);
} : function(t) {
  if (t === Mc)
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (typeof t == "function" && !t.prototype)
    return !0;
  if (Bb)
    return Sb(t);
  if (zs(t))
    return !1;
  var r = Ab.call(t);
  return r === $b || r === Rb;
};
const Tb = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ec
}, [Ec]), Ib = /* @__PURE__ */ Q(Tb);
var Pb = Ib, Ob = Object.prototype.toString, w1 = Object.prototype.hasOwnProperty, Lb = function(t, r, n) {
  for (var a = 0, i = t.length; a < i; a++)
    w1.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
}, Cb = function(t, r, n) {
  for (var a = 0, i = t.length; a < i; a++)
    n == null ? r(t.charAt(a), a, t) : r.call(n, t.charAt(a), a, t);
}, kb = function(t, r, n) {
  for (var a in t)
    w1.call(t, a) && (n == null ? r(t[a], a, t) : r.call(n, t[a], a, t));
}, Nb = function(t, r, n) {
  if (!Pb(r))
    throw new TypeError("iterator must be a function");
  var a;
  arguments.length >= 3 && (a = n), Ob.call(t) === "[object Array]" ? Lb(t, r, a) : typeof t == "string" ? Cb(t, r, a) : kb(t, r, a);
}, Sc = Nb;
const qb = /* @__PURE__ */ ee({
  __proto__: null,
  default: Sc
}, [Sc]), x1 = /* @__PURE__ */ Q(qb);
var Rf = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], Fb = typeof globalThis > "u" ? Ie : globalThis, Ac = function() {
  for (var t = [], r = 0; r < Rf.length; r++)
    typeof Fb[Rf[r]] == "function" && (t[t.length] = Rf[r]);
  return t;
};
const Ub = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ac
}, [Ac]), M1 = /* @__PURE__ */ Q(Ub);
var Bf, $c;
function E1() {
  if ($c)
    return Bf;
  $c = 1;
  var e = Uo, t = e("%Object.getOwnPropertyDescriptor%", !0);
  if (t)
    try {
      t([], "length");
    } catch {
      t = null;
    }
  return Bf = t, Bf;
}
var S1 = x1, Db = M1, Yu = Ju, jb = Yu("Object.prototype.toString"), A1 = Fo(), Hb = typeof globalThis > "u" ? Ie : globalThis, $1 = Db(), zb = Yu("Array.prototype.indexOf", !0) || function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === r)
      return n;
  return -1;
}, Kb = Yu("String.prototype.slice"), R1 = {}, Ca = E1(), Tf = Object.getPrototypeOf;
A1 && Ca && Tf && S1($1, function(e) {
  var t = new Hb[e]();
  if (Symbol.toStringTag in t) {
    var r = Tf(t), n = Ca(r, Symbol.toStringTag);
    if (!n) {
      var a = Tf(r);
      n = Ca(a, Symbol.toStringTag);
    }
    R1[e] = n.get;
  }
});
var Wb = function(t) {
  var r = !1;
  return S1(R1, function(n, a) {
    if (!r)
      try {
        r = n.call(t) === a;
      } catch {
      }
  }), r;
}, Rc = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!A1 || !(Symbol.toStringTag in t)) {
    var r = Kb(jb(t), 8, -1);
    return zb($1, r) > -1;
  }
  return Ca ? Wb(t) : !1;
};
const Gb = /* @__PURE__ */ ee({
  __proto__: null,
  default: Rc
}, [Rc]), B1 = /* @__PURE__ */ Q(Gb);
var T1 = x1, Vb = M1, I1 = Ju, Zb = I1("Object.prototype.toString"), P1 = Fo(), Bc = typeof globalThis > "u" ? Ie : globalThis, Jb = Vb(), Yb = I1("String.prototype.slice"), O1 = {}, If = E1(), Pf = Object.getPrototypeOf;
P1 && If && Pf && T1(Jb, function(e) {
  if (typeof Bc[e] == "function") {
    var t = new Bc[e]();
    if (Symbol.toStringTag in t) {
      var r = Pf(t), n = If(r, Symbol.toStringTag);
      if (!n) {
        var a = Pf(r);
        n = If(a, Symbol.toStringTag);
      }
      O1[e] = n.get;
    }
  }
});
var Xb = function(t) {
  var r = !1;
  return T1(O1, function(n, a) {
    if (!r)
      try {
        var i = n.call(t);
        i === a && (r = i);
      } catch {
      }
  }), r;
}, Qb = B1, Tc = function(t) {
  return Qb(t) ? !P1 || !(Symbol.toStringTag in t) ? Yb(Zb(t), 8, -1) : Xb(t) : !1;
};
const e_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Tc
}, [Tc]), t_ = /* @__PURE__ */ Q(e_);
(function(e) {
  var t = gb, r = Mb, n = t_, a = B1;
  function i(j) {
    return j.call.bind(j);
  }
  var s = typeof BigInt < "u", f = typeof Symbol < "u", v = i(Object.prototype.toString), m = i(Number.prototype.valueOf), _ = i(String.prototype.valueOf), O = i(Boolean.prototype.valueOf);
  if (s)
    var P = i(BigInt.prototype.valueOf);
  if (f)
    var C = i(Symbol.prototype.valueOf);
  function M(j, ie) {
    if (typeof j != "object")
      return !1;
    try {
      return ie(j), !0;
    } catch {
      return !1;
    }
  }
  e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = a;
  function k(j) {
    return typeof Promise < "u" && j instanceof Promise || j !== null && typeof j == "object" && typeof j.then == "function" && typeof j.catch == "function";
  }
  e.isPromise = k;
  function q(j) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(j) : a(j) || S(j);
  }
  e.isArrayBufferView = q;
  function D(j) {
    return n(j) === "Uint8Array";
  }
  e.isUint8Array = D;
  function U(j) {
    return n(j) === "Uint8ClampedArray";
  }
  e.isUint8ClampedArray = U;
  function K(j) {
    return n(j) === "Uint16Array";
  }
  e.isUint16Array = K;
  function J(j) {
    return n(j) === "Uint32Array";
  }
  e.isUint32Array = J;
  function re(j) {
    return n(j) === "Int8Array";
  }
  e.isInt8Array = re;
  function ue(j) {
    return n(j) === "Int16Array";
  }
  e.isInt16Array = ue;
  function ve(j) {
    return n(j) === "Int32Array";
  }
  e.isInt32Array = ve;
  function se(j) {
    return n(j) === "Float32Array";
  }
  e.isFloat32Array = se;
  function le(j) {
    return n(j) === "Float64Array";
  }
  e.isFloat64Array = le;
  function V(j) {
    return n(j) === "BigInt64Array";
  }
  e.isBigInt64Array = V;
  function g(j) {
    return n(j) === "BigUint64Array";
  }
  e.isBigUint64Array = g;
  function l(j) {
    return v(j) === "[object Map]";
  }
  l.working = typeof Map < "u" && l(/* @__PURE__ */ new Map());
  function u(j) {
    return typeof Map > "u" ? !1 : l.working ? l(j) : j instanceof Map;
  }
  e.isMap = u;
  function o(j) {
    return v(j) === "[object Set]";
  }
  o.working = typeof Set < "u" && o(/* @__PURE__ */ new Set());
  function c(j) {
    return typeof Set > "u" ? !1 : o.working ? o(j) : j instanceof Set;
  }
  e.isSet = c;
  function y(j) {
    return v(j) === "[object WeakMap]";
  }
  y.working = typeof WeakMap < "u" && y(/* @__PURE__ */ new WeakMap());
  function x(j) {
    return typeof WeakMap > "u" ? !1 : y.working ? y(j) : j instanceof WeakMap;
  }
  e.isWeakMap = x;
  function b(j) {
    return v(j) === "[object WeakSet]";
  }
  b.working = typeof WeakSet < "u" && b(/* @__PURE__ */ new WeakSet());
  function h(j) {
    return b(j);
  }
  e.isWeakSet = h;
  function d(j) {
    return v(j) === "[object ArrayBuffer]";
  }
  d.working = typeof ArrayBuffer < "u" && d(new ArrayBuffer());
  function w(j) {
    return typeof ArrayBuffer > "u" ? !1 : d.working ? d(j) : j instanceof ArrayBuffer;
  }
  e.isArrayBuffer = w;
  function p(j) {
    return v(j) === "[object DataView]";
  }
  p.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && p(new DataView(new ArrayBuffer(1), 0, 1));
  function S(j) {
    return typeof DataView > "u" ? !1 : p.working ? p(j) : j instanceof DataView;
  }
  e.isDataView = S;
  var G = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function B(j) {
    return v(j) === "[object SharedArrayBuffer]";
  }
  function R(j) {
    return typeof G > "u" ? !1 : (typeof B.working > "u" && (B.working = B(new G())), B.working ? B(j) : j instanceof G);
  }
  e.isSharedArrayBuffer = R;
  function N(j) {
    return v(j) === "[object AsyncFunction]";
  }
  e.isAsyncFunction = N;
  function H(j) {
    return v(j) === "[object Map Iterator]";
  }
  e.isMapIterator = H;
  function Z(j) {
    return v(j) === "[object Set Iterator]";
  }
  e.isSetIterator = Z;
  function oe(j) {
    return v(j) === "[object Generator]";
  }
  e.isGeneratorObject = oe;
  function $(j) {
    return v(j) === "[object WebAssembly.Module]";
  }
  e.isWebAssemblyCompiledModule = $;
  function A(j) {
    return M(j, m);
  }
  e.isNumberObject = A;
  function X(j) {
    return M(j, _);
  }
  e.isStringObject = X;
  function te(j) {
    return M(j, O);
  }
  e.isBooleanObject = te;
  function pe(j) {
    return s && M(j, P);
  }
  e.isBigIntObject = pe;
  function z(j) {
    return f && M(j, C);
  }
  e.isSymbolObject = z;
  function I(j) {
    return A(j) || X(j) || te(j) || pe(j) || z(j);
  }
  e.isBoxedPrimitive = I;
  function L(j) {
    return typeof Uint8Array < "u" && (w(j) || R(j));
  }
  e.isAnyArrayBuffer = L, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(j) {
    Object.defineProperty(e, j, {
      enumerable: !1,
      value: function() {
        throw new Error(j + " is not supported in userland");
      }
    });
  });
})(Ds);
const r_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ds
}, [Ds]), n_ = /* @__PURE__ */ Q(r_);
var Ic = function(t) {
  return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
};
const i_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ic
}, [Ic]), a_ = /* @__PURE__ */ Q(i_);
var ja = { exports: {} };
typeof Object.create == "function" ? ja.exports = function(t, r) {
  r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : ja.exports = function(t, r) {
  if (r) {
    t.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, t.prototype = new n(), t.prototype.constructor = t;
  }
};
const o_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: ja.exports
}, [ja.exports]), ct = /* @__PURE__ */ Q(o_);
(function(e) {
  var t = Object.getOwnPropertyDescriptors || function(S) {
    for (var G = Object.keys(S), B = {}, R = 0; R < G.length; R++)
      B[G[R]] = Object.getOwnPropertyDescriptor(S, G[R]);
    return B;
  }, r = /%[sdj%]/g;
  e.format = function(p) {
    if (!re(p)) {
      for (var S = [], G = 0; G < arguments.length; G++)
        S.push(s(arguments[G]));
      return S.join(" ");
    }
    for (var G = 1, B = arguments, R = B.length, N = String(p).replace(r, function(Z) {
      if (Z === "%%")
        return "%";
      if (G >= R)
        return Z;
      switch (Z) {
        case "%s":
          return String(B[G++]);
        case "%d":
          return Number(B[G++]);
        case "%j":
          try {
            return JSON.stringify(B[G++]);
          } catch {
            return "[Circular]";
          }
        default:
          return Z;
      }
    }), H = B[G]; G < R; H = B[++G])
      U(H) || !le(H) ? N += " " + H : N += " " + s(H);
    return N;
  }, e.deprecate = function(p, S) {
    if (typeof process < "u" && process.noDeprecation === !0)
      return p;
    if (typeof process > "u")
      return function() {
        return e.deprecate(p, S).apply(this, arguments);
      };
    var G = !1;
    function B() {
      if (!G) {
        if (process.throwDeprecation)
          throw new Error(S);
        process.traceDeprecation ? console.trace(S) : console.error(S), G = !0;
      }
      return p.apply(this, arguments);
    }
    return B;
  };
  var n = {}, a = /^$/;
  if (process.env.NODE_DEBUG) {
    var i = process.env.NODE_DEBUG;
    i = i.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), a = new RegExp("^" + i + "$", "i");
  }
  e.debuglog = function(p) {
    if (p = p.toUpperCase(), !n[p])
      if (a.test(p)) {
        var S = process.pid;
        n[p] = function() {
          var G = e.format.apply(e, arguments);
          console.error("%s %d: %s", p, S, G);
        };
      } else
        n[p] = function() {
        };
    return n[p];
  };
  function s(p, S) {
    var G = {
      seen: [],
      stylize: v
    };
    return arguments.length >= 3 && (G.depth = arguments[2]), arguments.length >= 4 && (G.colors = arguments[3]), D(S) ? G.showHidden = S : S && e._extend(G, S), ve(G.showHidden) && (G.showHidden = !1), ve(G.depth) && (G.depth = 2), ve(G.colors) && (G.colors = !1), ve(G.customInspect) && (G.customInspect = !0), G.colors && (G.stylize = f), _(G, p, G.depth);
  }
  e.inspect = s, s.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
  }, s.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
  };
  function f(p, S) {
    var G = s.styles[S];
    return G ? "\x1B[" + s.colors[G][0] + "m" + p + "\x1B[" + s.colors[G][1] + "m" : p;
  }
  function v(p, S) {
    return p;
  }
  function m(p) {
    var S = {};
    return p.forEach(function(G, B) {
      S[G] = !0;
    }), S;
  }
  function _(p, S, G) {
    if (p.customInspect && S && l(S.inspect) && S.inspect !== e.inspect && !(S.constructor && S.constructor.prototype === S)) {
      var B = S.inspect(G, p);
      return re(B) || (B = _(p, B, G)), B;
    }
    var R = O(p, S);
    if (R)
      return R;
    var N = Object.keys(S), H = m(N);
    if (p.showHidden && (N = Object.getOwnPropertyNames(S)), g(S) && (N.indexOf("message") >= 0 || N.indexOf("description") >= 0))
      return P(S);
    if (N.length === 0) {
      if (l(S)) {
        var Z = S.name ? ": " + S.name : "";
        return p.stylize("[Function" + Z + "]", "special");
      }
      if (se(S))
        return p.stylize(RegExp.prototype.toString.call(S), "regexp");
      if (V(S))
        return p.stylize(Date.prototype.toString.call(S), "date");
      if (g(S))
        return P(S);
    }
    var oe = "", $ = !1, A = ["{", "}"];
    if (q(S) && ($ = !0, A = ["[", "]"]), l(S)) {
      var X = S.name ? ": " + S.name : "";
      oe = " [Function" + X + "]";
    }
    if (se(S) && (oe = " " + RegExp.prototype.toString.call(S)), V(S) && (oe = " " + Date.prototype.toUTCString.call(S)), g(S) && (oe = " " + P(S)), N.length === 0 && (!$ || S.length == 0))
      return A[0] + oe + A[1];
    if (G < 0)
      return se(S) ? p.stylize(RegExp.prototype.toString.call(S), "regexp") : p.stylize("[Object]", "special");
    p.seen.push(S);
    var te;
    return $ ? te = C(p, S, G, H, N) : te = N.map(function(pe) {
      return M(p, S, G, H, pe, $);
    }), p.seen.pop(), k(te, oe, A);
  }
  function O(p, S) {
    if (ve(S))
      return p.stylize("undefined", "undefined");
    if (re(S)) {
      var G = "'" + JSON.stringify(S).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return p.stylize(G, "string");
    }
    if (J(S))
      return p.stylize("" + S, "number");
    if (D(S))
      return p.stylize("" + S, "boolean");
    if (U(S))
      return p.stylize("null", "null");
  }
  function P(p) {
    return "[" + Error.prototype.toString.call(p) + "]";
  }
  function C(p, S, G, B, R) {
    for (var N = [], H = 0, Z = S.length; H < Z; ++H)
      b(S, String(H)) ? N.push(M(
        p,
        S,
        G,
        B,
        String(H),
        !0
      )) : N.push("");
    return R.forEach(function(oe) {
      oe.match(/^\d+$/) || N.push(M(
        p,
        S,
        G,
        B,
        oe,
        !0
      ));
    }), N;
  }
  function M(p, S, G, B, R, N) {
    var H, Z, oe;
    if (oe = Object.getOwnPropertyDescriptor(S, R) || { value: S[R] }, oe.get ? oe.set ? Z = p.stylize("[Getter/Setter]", "special") : Z = p.stylize("[Getter]", "special") : oe.set && (Z = p.stylize("[Setter]", "special")), b(B, R) || (H = "[" + R + "]"), Z || (p.seen.indexOf(oe.value) < 0 ? (U(G) ? Z = _(p, oe.value, null) : Z = _(p, oe.value, G - 1), Z.indexOf(`
`) > -1 && (N ? Z = Z.split(`
`).map(function($) {
      return "  " + $;
    }).join(`
`).substr(2) : Z = `
` + Z.split(`
`).map(function($) {
      return "   " + $;
    }).join(`
`))) : Z = p.stylize("[Circular]", "special")), ve(H)) {
      if (N && R.match(/^\d+$/))
        return Z;
      H = JSON.stringify("" + R), H.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (H = H.substr(1, H.length - 2), H = p.stylize(H, "name")) : (H = H.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), H = p.stylize(H, "string"));
    }
    return H + ": " + Z;
  }
  function k(p, S, G) {
    var B = p.reduce(function(R, N) {
      return N.indexOf(`
`) >= 0, R + N.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return B > 60 ? G[0] + (S === "" ? "" : S + `
 `) + " " + p.join(`,
  `) + " " + G[1] : G[0] + S + " " + p.join(", ") + " " + G[1];
  }
  e.types = n_;
  function q(p) {
    return Array.isArray(p);
  }
  e.isArray = q;
  function D(p) {
    return typeof p == "boolean";
  }
  e.isBoolean = D;
  function U(p) {
    return p === null;
  }
  e.isNull = U;
  function K(p) {
    return p == null;
  }
  e.isNullOrUndefined = K;
  function J(p) {
    return typeof p == "number";
  }
  e.isNumber = J;
  function re(p) {
    return typeof p == "string";
  }
  e.isString = re;
  function ue(p) {
    return typeof p == "symbol";
  }
  e.isSymbol = ue;
  function ve(p) {
    return p === void 0;
  }
  e.isUndefined = ve;
  function se(p) {
    return le(p) && o(p) === "[object RegExp]";
  }
  e.isRegExp = se, e.types.isRegExp = se;
  function le(p) {
    return typeof p == "object" && p !== null;
  }
  e.isObject = le;
  function V(p) {
    return le(p) && o(p) === "[object Date]";
  }
  e.isDate = V, e.types.isDate = V;
  function g(p) {
    return le(p) && (o(p) === "[object Error]" || p instanceof Error);
  }
  e.isError = g, e.types.isNativeError = g;
  function l(p) {
    return typeof p == "function";
  }
  e.isFunction = l;
  function u(p) {
    return p === null || typeof p == "boolean" || typeof p == "number" || typeof p == "string" || typeof p == "symbol" || typeof p > "u";
  }
  e.isPrimitive = u, e.isBuffer = a_;
  function o(p) {
    return Object.prototype.toString.call(p);
  }
  function c(p) {
    return p < 10 ? "0" + p.toString(10) : p.toString(10);
  }
  var y = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function x() {
    var p = new Date(), S = [
      c(p.getHours()),
      c(p.getMinutes()),
      c(p.getSeconds())
    ].join(":");
    return [p.getDate(), y[p.getMonth()], S].join(" ");
  }
  e.log = function() {
    console.log("%s - %s", x(), e.format.apply(e, arguments));
  }, e.inherits = ct, e._extend = function(p, S) {
    if (!S || !le(S))
      return p;
    for (var G = Object.keys(S), B = G.length; B--; )
      p[G[B]] = S[G[B]];
    return p;
  };
  function b(p, S) {
    return Object.prototype.hasOwnProperty.call(p, S);
  }
  var h = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  e.promisify = function(S) {
    if (typeof S != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (h && S[h]) {
      var G = S[h];
      if (typeof G != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(G, h, {
        value: G,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), G;
    }
    function G() {
      for (var B, R, N = new Promise(function(oe, $) {
        B = oe, R = $;
      }), H = [], Z = 0; Z < arguments.length; Z++)
        H.push(arguments[Z]);
      H.push(function(oe, $) {
        oe ? R(oe) : B($);
      });
      try {
        S.apply(this, H);
      } catch (oe) {
        R(oe);
      }
      return N;
    }
    return Object.setPrototypeOf(G, Object.getPrototypeOf(S)), h && Object.defineProperty(G, h, {
      value: G,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), Object.defineProperties(
      G,
      t(S)
    );
  }, e.promisify.custom = h;
  function d(p, S) {
    if (!p) {
      var G = new Error("Promise was rejected with a falsy value");
      G.reason = p, p = G;
    }
    return S(p);
  }
  function w(p) {
    if (typeof p != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function S() {
      for (var G = [], B = 0; B < arguments.length; B++)
        G.push(arguments[B]);
      var R = G.pop();
      if (typeof R != "function")
        throw new TypeError("The last argument must be of type Function");
      var N = this, H = function() {
        return R.apply(N, arguments);
      };
      p.apply(this, G).then(
        function(Z) {
          process.nextTick(H.bind(null, null, Z));
        },
        function(Z) {
          process.nextTick(d.bind(null, Z, H));
        }
      );
    }
    return Object.setPrototypeOf(S, Object.getPrototypeOf(p)), Object.defineProperties(
      S,
      t(p)
    ), S;
  }
  e.callbackify = w;
})(Us);
const f_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Us
}, [Us]), hr = /* @__PURE__ */ Q(f_);
var Ks = {}, vn = {}, Ha = {};
Object.defineProperty(Ha, "__esModule", { value: !0 });
function s_(e) {
  return function(t) {
    var r = e();
    return r.update(t), Buffer.from(r.digest());
  };
}
var u_ = Ha.createHashFunction = s_;
const c_ = /* @__PURE__ */ ee({
  __proto__: null,
  createHashFunction: u_,
  default: Ha
}, [Ha]), l_ = /* @__PURE__ */ Q(c_);
var za = { exports: {} }, Pc = Jr.EventEmitter;
const h_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Pc
}, [Pc]), L1 = /* @__PURE__ */ Q(h_);
var Ws = {}, ki = {}, d_ = ki.byteLength = b_, p_ = ki.toByteArray = m_, v_ = ki.fromByteArray = M_, br = [], Jt = [], y_ = typeof Uint8Array < "u" ? Uint8Array : Array, Of = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var On = 0, g_ = Of.length; On < g_; ++On)
  br[On] = Of[On], Jt[Of.charCodeAt(On)] = On;
Jt["-".charCodeAt(0)] = 62;
Jt["_".charCodeAt(0)] = 63;
function C1(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function b_(e) {
  var t = C1(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function __(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function m_(e) {
  var t, r = C1(e), n = r[0], a = r[1], i = new y_(__(e, n, a)), s = 0, f = a > 0 ? n - 4 : n, v;
  for (v = 0; v < f; v += 4)
    t = Jt[e.charCodeAt(v)] << 18 | Jt[e.charCodeAt(v + 1)] << 12 | Jt[e.charCodeAt(v + 2)] << 6 | Jt[e.charCodeAt(v + 3)], i[s++] = t >> 16 & 255, i[s++] = t >> 8 & 255, i[s++] = t & 255;
  return a === 2 && (t = Jt[e.charCodeAt(v)] << 2 | Jt[e.charCodeAt(v + 1)] >> 4, i[s++] = t & 255), a === 1 && (t = Jt[e.charCodeAt(v)] << 10 | Jt[e.charCodeAt(v + 1)] << 4 | Jt[e.charCodeAt(v + 2)] >> 2, i[s++] = t >> 8 & 255, i[s++] = t & 255), i;
}
function w_(e) {
  return br[e >> 18 & 63] + br[e >> 12 & 63] + br[e >> 6 & 63] + br[e & 63];
}
function x_(e, t, r) {
  for (var n, a = [], i = t; i < r; i += 3)
    n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255), a.push(w_(n));
  return a.join("");
}
function M_(e) {
  for (var t, r = e.length, n = r % 3, a = [], i = 16383, s = 0, f = r - n; s < f; s += i)
    a.push(x_(e, s, s + i > f ? f : s + i));
  return n === 1 ? (t = e[r - 1], a.push(
    br[t >> 2] + br[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], a.push(
    br[t >> 10] + br[t >> 4 & 63] + br[t << 2 & 63] + "="
  )), a.join("");
}
const E_ = /* @__PURE__ */ ee({
  __proto__: null,
  byteLength: d_,
  toByteArray: p_,
  fromByteArray: v_,
  default: ki
}, [ki]), k1 = /* @__PURE__ */ Q(E_);
var Ka = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var S_ = Ka.read = function(e, t, r, n, a) {
  var i, s, f = a * 8 - n - 1, v = (1 << f) - 1, m = v >> 1, _ = -7, O = r ? a - 1 : 0, P = r ? -1 : 1, C = e[t + O];
  for (O += P, i = C & (1 << -_) - 1, C >>= -_, _ += f; _ > 0; i = i * 256 + e[t + O], O += P, _ -= 8)
    ;
  for (s = i & (1 << -_) - 1, i >>= -_, _ += n; _ > 0; s = s * 256 + e[t + O], O += P, _ -= 8)
    ;
  if (i === 0)
    i = 1 - m;
  else {
    if (i === v)
      return s ? NaN : (C ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), i = i - m;
  }
  return (C ? -1 : 1) * s * Math.pow(2, i - n);
}, A_ = Ka.write = function(e, t, r, n, a, i) {
  var s, f, v, m = i * 8 - a - 1, _ = (1 << m) - 1, O = _ >> 1, P = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = n ? 0 : i - 1, M = n ? 1 : -1, k = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, s = _) : (s = Math.floor(Math.log(t) / Math.LN2), t * (v = Math.pow(2, -s)) < 1 && (s--, v *= 2), s + O >= 1 ? t += P / v : t += P * Math.pow(2, 1 - O), t * v >= 2 && (s++, v /= 2), s + O >= _ ? (f = 0, s = _) : s + O >= 1 ? (f = (t * v - 1) * Math.pow(2, a), s = s + O) : (f = t * Math.pow(2, O - 1) * Math.pow(2, a), s = 0)); a >= 8; e[r + C] = f & 255, C += M, f /= 256, a -= 8)
    ;
  for (s = s << a | f, m += a; m > 0; e[r + C] = s & 255, C += M, s /= 256, m -= 8)
    ;
  e[r + C - M] |= k * 128;
};
const $_ = /* @__PURE__ */ ee({
  __proto__: null,
  read: S_,
  write: A_,
  default: Ka
}, [Ka]), N1 = /* @__PURE__ */ Q($_);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = k1, r = N1, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = f, e.SlowBuffer = U, e.INSPECT_MAX_BYTES = 50;
  const a = 2147483647;
  e.kMaxLength = a, f.TYPED_ARRAY_SUPPORT = i(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      const F = new Uint8Array(1), E = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(E, Uint8Array.prototype), Object.setPrototypeOf(F, E), F.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(f.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!f.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(f.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!f.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(F) {
    if (F > a)
      throw new RangeError('The value "' + F + '" is invalid for option "size"');
    const E = new Uint8Array(F);
    return Object.setPrototypeOf(E, f.prototype), E;
  }
  function f(F, E, T) {
    if (typeof F == "number") {
      if (typeof E == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return O(F);
    }
    return v(F, E, T);
  }
  f.poolSize = 8192;
  function v(F, E, T) {
    if (typeof F == "string")
      return P(F, E);
    if (ArrayBuffer.isView(F))
      return M(F);
    if (F == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof F
      );
    if (Y(F, ArrayBuffer) || F && Y(F.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Y(F, SharedArrayBuffer) || F && Y(F.buffer, SharedArrayBuffer)))
      return k(F, E, T);
    if (typeof F == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const W = F.valueOf && F.valueOf();
    if (W != null && W !== F)
      return f.from(W, E, T);
    const ne = q(F);
    if (ne)
      return ne;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof F[Symbol.toPrimitive] == "function")
      return f.from(F[Symbol.toPrimitive]("string"), E, T);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof F
    );
  }
  f.from = function(F, E, T) {
    return v(F, E, T);
  }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array);
  function m(F) {
    if (typeof F != "number")
      throw new TypeError('"size" argument must be of type number');
    if (F < 0)
      throw new RangeError('The value "' + F + '" is invalid for option "size"');
  }
  function _(F, E, T) {
    return m(F), F <= 0 ? s(F) : E !== void 0 ? typeof T == "string" ? s(F).fill(E, T) : s(F).fill(E) : s(F);
  }
  f.alloc = function(F, E, T) {
    return _(F, E, T);
  };
  function O(F) {
    return m(F), s(F < 0 ? 0 : D(F) | 0);
  }
  f.allocUnsafe = function(F) {
    return O(F);
  }, f.allocUnsafeSlow = function(F) {
    return O(F);
  };
  function P(F, E) {
    if ((typeof E != "string" || E === "") && (E = "utf8"), !f.isEncoding(E))
      throw new TypeError("Unknown encoding: " + E);
    const T = K(F, E) | 0;
    let W = s(T);
    const ne = W.write(F, E);
    return ne !== T && (W = W.slice(0, ne)), W;
  }
  function C(F) {
    const E = F.length < 0 ? 0 : D(F.length) | 0, T = s(E);
    for (let W = 0; W < E; W += 1)
      T[W] = F[W] & 255;
    return T;
  }
  function M(F) {
    if (Y(F, Uint8Array)) {
      const E = new Uint8Array(F);
      return k(E.buffer, E.byteOffset, E.byteLength);
    }
    return C(F);
  }
  function k(F, E, T) {
    if (E < 0 || F.byteLength < E)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (F.byteLength < E + (T || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let W;
    return E === void 0 && T === void 0 ? W = new Uint8Array(F) : T === void 0 ? W = new Uint8Array(F, E) : W = new Uint8Array(F, E, T), Object.setPrototypeOf(W, f.prototype), W;
  }
  function q(F) {
    if (f.isBuffer(F)) {
      const E = D(F.length) | 0, T = s(E);
      return T.length === 0 || F.copy(T, 0, 0, E), T;
    }
    if (F.length !== void 0)
      return typeof F.length != "number" || ae(F.length) ? s(0) : C(F);
    if (F.type === "Buffer" && Array.isArray(F.data))
      return C(F.data);
  }
  function D(F) {
    if (F >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return F | 0;
  }
  function U(F) {
    return +F != F && (F = 0), f.alloc(+F);
  }
  f.isBuffer = function(E) {
    return E != null && E._isBuffer === !0 && E !== f.prototype;
  }, f.compare = function(E, T) {
    if (Y(E, Uint8Array) && (E = f.from(E, E.offset, E.byteLength)), Y(T, Uint8Array) && (T = f.from(T, T.offset, T.byteLength)), !f.isBuffer(E) || !f.isBuffer(T))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (E === T)
      return 0;
    let W = E.length, ne = T.length;
    for (let fe = 0, ce = Math.min(W, ne); fe < ce; ++fe)
      if (E[fe] !== T[fe]) {
        W = E[fe], ne = T[fe];
        break;
      }
    return W < ne ? -1 : ne < W ? 1 : 0;
  }, f.isEncoding = function(E) {
    switch (String(E).toLowerCase()) {
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
  }, f.concat = function(E, T) {
    if (!Array.isArray(E))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (E.length === 0)
      return f.alloc(0);
    let W;
    if (T === void 0)
      for (T = 0, W = 0; W < E.length; ++W)
        T += E[W].length;
    const ne = f.allocUnsafe(T);
    let fe = 0;
    for (W = 0; W < E.length; ++W) {
      let ce = E[W];
      if (Y(ce, Uint8Array))
        fe + ce.length > ne.length ? (f.isBuffer(ce) || (ce = f.from(ce)), ce.copy(ne, fe)) : Uint8Array.prototype.set.call(
          ne,
          ce,
          fe
        );
      else if (f.isBuffer(ce))
        ce.copy(ne, fe);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      fe += ce.length;
    }
    return ne;
  };
  function K(F, E) {
    if (f.isBuffer(F))
      return F.length;
    if (ArrayBuffer.isView(F) || Y(F, ArrayBuffer))
      return F.byteLength;
    if (typeof F != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof F
      );
    const T = F.length, W = arguments.length > 2 && arguments[2] === !0;
    if (!W && T === 0)
      return 0;
    let ne = !1;
    for (; ; )
      switch (E) {
        case "ascii":
        case "latin1":
        case "binary":
          return T;
        case "utf8":
        case "utf-8":
          return I(F).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T * 2;
        case "hex":
          return T >>> 1;
        case "base64":
          return ie(F).length;
        default:
          if (ne)
            return W ? -1 : I(F).length;
          E = ("" + E).toLowerCase(), ne = !0;
      }
  }
  f.byteLength = K;
  function J(F, E, T) {
    let W = !1;
    if ((E === void 0 || E < 0) && (E = 0), E > this.length || ((T === void 0 || T > this.length) && (T = this.length), T <= 0) || (T >>>= 0, E >>>= 0, T <= E))
      return "";
    for (F || (F = "utf8"); ; )
      switch (F) {
        case "hex":
          return h(this, E, T);
        case "utf8":
        case "utf-8":
          return o(this, E, T);
        case "ascii":
          return x(this, E, T);
        case "latin1":
        case "binary":
          return b(this, E, T);
        case "base64":
          return u(this, E, T);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return d(this, E, T);
        default:
          if (W)
            throw new TypeError("Unknown encoding: " + F);
          F = (F + "").toLowerCase(), W = !0;
      }
  }
  f.prototype._isBuffer = !0;
  function re(F, E, T) {
    const W = F[E];
    F[E] = F[T], F[T] = W;
  }
  f.prototype.swap16 = function() {
    const E = this.length;
    if (E % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let T = 0; T < E; T += 2)
      re(this, T, T + 1);
    return this;
  }, f.prototype.swap32 = function() {
    const E = this.length;
    if (E % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let T = 0; T < E; T += 4)
      re(this, T, T + 3), re(this, T + 1, T + 2);
    return this;
  }, f.prototype.swap64 = function() {
    const E = this.length;
    if (E % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let T = 0; T < E; T += 8)
      re(this, T, T + 7), re(this, T + 1, T + 6), re(this, T + 2, T + 5), re(this, T + 3, T + 4);
    return this;
  }, f.prototype.toString = function() {
    const E = this.length;
    return E === 0 ? "" : arguments.length === 0 ? o(this, 0, E) : J.apply(this, arguments);
  }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(E) {
    if (!f.isBuffer(E))
      throw new TypeError("Argument must be a Buffer");
    return this === E ? !0 : f.compare(this, E) === 0;
  }, f.prototype.inspect = function() {
    let E = "";
    const T = e.INSPECT_MAX_BYTES;
    return E = this.toString("hex", 0, T).replace(/(.{2})/g, "$1 ").trim(), this.length > T && (E += " ... "), "<Buffer " + E + ">";
  }, n && (f.prototype[n] = f.prototype.inspect), f.prototype.compare = function(E, T, W, ne, fe) {
    if (Y(E, Uint8Array) && (E = f.from(E, E.offset, E.byteLength)), !f.isBuffer(E))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof E
      );
    if (T === void 0 && (T = 0), W === void 0 && (W = E ? E.length : 0), ne === void 0 && (ne = 0), fe === void 0 && (fe = this.length), T < 0 || W > E.length || ne < 0 || fe > this.length)
      throw new RangeError("out of range index");
    if (ne >= fe && T >= W)
      return 0;
    if (ne >= fe)
      return -1;
    if (T >= W)
      return 1;
    if (T >>>= 0, W >>>= 0, ne >>>= 0, fe >>>= 0, this === E)
      return 0;
    let ce = fe - ne, me = W - T;
    const _e = Math.min(ce, me), be = this.slice(ne, fe), Te = E.slice(T, W);
    for (let we = 0; we < _e; ++we)
      if (be[we] !== Te[we]) {
        ce = be[we], me = Te[we];
        break;
      }
    return ce < me ? -1 : me < ce ? 1 : 0;
  };
  function ue(F, E, T, W, ne) {
    if (F.length === 0)
      return -1;
    if (typeof T == "string" ? (W = T, T = 0) : T > 2147483647 ? T = 2147483647 : T < -2147483648 && (T = -2147483648), T = +T, ae(T) && (T = ne ? 0 : F.length - 1), T < 0 && (T = F.length + T), T >= F.length) {
      if (ne)
        return -1;
      T = F.length - 1;
    } else if (T < 0)
      if (ne)
        T = 0;
      else
        return -1;
    if (typeof E == "string" && (E = f.from(E, W)), f.isBuffer(E))
      return E.length === 0 ? -1 : ve(F, E, T, W, ne);
    if (typeof E == "number")
      return E = E & 255, typeof Uint8Array.prototype.indexOf == "function" ? ne ? Uint8Array.prototype.indexOf.call(F, E, T) : Uint8Array.prototype.lastIndexOf.call(F, E, T) : ve(F, [E], T, W, ne);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ve(F, E, T, W, ne) {
    let fe = 1, ce = F.length, me = E.length;
    if (W !== void 0 && (W = String(W).toLowerCase(), W === "ucs2" || W === "ucs-2" || W === "utf16le" || W === "utf-16le")) {
      if (F.length < 2 || E.length < 2)
        return -1;
      fe = 2, ce /= 2, me /= 2, T /= 2;
    }
    function _e(Te, we) {
      return fe === 1 ? Te[we] : Te.readUInt16BE(we * fe);
    }
    let be;
    if (ne) {
      let Te = -1;
      for (be = T; be < ce; be++)
        if (_e(F, be) === _e(E, Te === -1 ? 0 : be - Te)) {
          if (Te === -1 && (Te = be), be - Te + 1 === me)
            return Te * fe;
        } else
          Te !== -1 && (be -= be - Te), Te = -1;
    } else
      for (T + me > ce && (T = ce - me), be = T; be >= 0; be--) {
        let Te = !0;
        for (let we = 0; we < me; we++)
          if (_e(F, be + we) !== _e(E, we)) {
            Te = !1;
            break;
          }
        if (Te)
          return be;
      }
    return -1;
  }
  f.prototype.includes = function(E, T, W) {
    return this.indexOf(E, T, W) !== -1;
  }, f.prototype.indexOf = function(E, T, W) {
    return ue(this, E, T, W, !0);
  }, f.prototype.lastIndexOf = function(E, T, W) {
    return ue(this, E, T, W, !1);
  };
  function se(F, E, T, W) {
    T = Number(T) || 0;
    const ne = F.length - T;
    W ? (W = Number(W), W > ne && (W = ne)) : W = ne;
    const fe = E.length;
    W > fe / 2 && (W = fe / 2);
    let ce;
    for (ce = 0; ce < W; ++ce) {
      const me = parseInt(E.substr(ce * 2, 2), 16);
      if (ae(me))
        return ce;
      F[T + ce] = me;
    }
    return ce;
  }
  function le(F, E, T, W) {
    return he(I(E, F.length - T), F, T, W);
  }
  function V(F, E, T, W) {
    return he(L(E), F, T, W);
  }
  function g(F, E, T, W) {
    return he(ie(E), F, T, W);
  }
  function l(F, E, T, W) {
    return he(j(E, F.length - T), F, T, W);
  }
  f.prototype.write = function(E, T, W, ne) {
    if (T === void 0)
      ne = "utf8", W = this.length, T = 0;
    else if (W === void 0 && typeof T == "string")
      ne = T, W = this.length, T = 0;
    else if (isFinite(T))
      T = T >>> 0, isFinite(W) ? (W = W >>> 0, ne === void 0 && (ne = "utf8")) : (ne = W, W = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const fe = this.length - T;
    if ((W === void 0 || W > fe) && (W = fe), E.length > 0 && (W < 0 || T < 0) || T > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    ne || (ne = "utf8");
    let ce = !1;
    for (; ; )
      switch (ne) {
        case "hex":
          return se(this, E, T, W);
        case "utf8":
        case "utf-8":
          return le(this, E, T, W);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, E, T, W);
        case "base64":
          return g(this, E, T, W);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l(this, E, T, W);
        default:
          if (ce)
            throw new TypeError("Unknown encoding: " + ne);
          ne = ("" + ne).toLowerCase(), ce = !0;
      }
  }, f.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function u(F, E, T) {
    return E === 0 && T === F.length ? t.fromByteArray(F) : t.fromByteArray(F.slice(E, T));
  }
  function o(F, E, T) {
    T = Math.min(F.length, T);
    const W = [];
    let ne = E;
    for (; ne < T; ) {
      const fe = F[ne];
      let ce = null, me = fe > 239 ? 4 : fe > 223 ? 3 : fe > 191 ? 2 : 1;
      if (ne + me <= T) {
        let _e, be, Te, we;
        switch (me) {
          case 1:
            fe < 128 && (ce = fe);
            break;
          case 2:
            _e = F[ne + 1], (_e & 192) === 128 && (we = (fe & 31) << 6 | _e & 63, we > 127 && (ce = we));
            break;
          case 3:
            _e = F[ne + 1], be = F[ne + 2], (_e & 192) === 128 && (be & 192) === 128 && (we = (fe & 15) << 12 | (_e & 63) << 6 | be & 63, we > 2047 && (we < 55296 || we > 57343) && (ce = we));
            break;
          case 4:
            _e = F[ne + 1], be = F[ne + 2], Te = F[ne + 3], (_e & 192) === 128 && (be & 192) === 128 && (Te & 192) === 128 && (we = (fe & 15) << 18 | (_e & 63) << 12 | (be & 63) << 6 | Te & 63, we > 65535 && we < 1114112 && (ce = we));
        }
      }
      ce === null ? (ce = 65533, me = 1) : ce > 65535 && (ce -= 65536, W.push(ce >>> 10 & 1023 | 55296), ce = 56320 | ce & 1023), W.push(ce), ne += me;
    }
    return y(W);
  }
  const c = 4096;
  function y(F) {
    const E = F.length;
    if (E <= c)
      return String.fromCharCode.apply(String, F);
    let T = "", W = 0;
    for (; W < E; )
      T += String.fromCharCode.apply(
        String,
        F.slice(W, W += c)
      );
    return T;
  }
  function x(F, E, T) {
    let W = "";
    T = Math.min(F.length, T);
    for (let ne = E; ne < T; ++ne)
      W += String.fromCharCode(F[ne] & 127);
    return W;
  }
  function b(F, E, T) {
    let W = "";
    T = Math.min(F.length, T);
    for (let ne = E; ne < T; ++ne)
      W += String.fromCharCode(F[ne]);
    return W;
  }
  function h(F, E, T) {
    const W = F.length;
    (!E || E < 0) && (E = 0), (!T || T < 0 || T > W) && (T = W);
    let ne = "";
    for (let fe = E; fe < T; ++fe)
      ne += de[F[fe]];
    return ne;
  }
  function d(F, E, T) {
    const W = F.slice(E, T);
    let ne = "";
    for (let fe = 0; fe < W.length - 1; fe += 2)
      ne += String.fromCharCode(W[fe] + W[fe + 1] * 256);
    return ne;
  }
  f.prototype.slice = function(E, T) {
    const W = this.length;
    E = ~~E, T = T === void 0 ? W : ~~T, E < 0 ? (E += W, E < 0 && (E = 0)) : E > W && (E = W), T < 0 ? (T += W, T < 0 && (T = 0)) : T > W && (T = W), T < E && (T = E);
    const ne = this.subarray(E, T);
    return Object.setPrototypeOf(ne, f.prototype), ne;
  };
  function w(F, E, T) {
    if (F % 1 !== 0 || F < 0)
      throw new RangeError("offset is not uint");
    if (F + E > T)
      throw new RangeError("Trying to access beyond buffer length");
  }
  f.prototype.readUintLE = f.prototype.readUIntLE = function(E, T, W) {
    E = E >>> 0, T = T >>> 0, W || w(E, T, this.length);
    let ne = this[E], fe = 1, ce = 0;
    for (; ++ce < T && (fe *= 256); )
      ne += this[E + ce] * fe;
    return ne;
  }, f.prototype.readUintBE = f.prototype.readUIntBE = function(E, T, W) {
    E = E >>> 0, T = T >>> 0, W || w(E, T, this.length);
    let ne = this[E + --T], fe = 1;
    for (; T > 0 && (fe *= 256); )
      ne += this[E + --T] * fe;
    return ne;
  }, f.prototype.readUint8 = f.prototype.readUInt8 = function(E, T) {
    return E = E >>> 0, T || w(E, 1, this.length), this[E];
  }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(E, T) {
    return E = E >>> 0, T || w(E, 2, this.length), this[E] | this[E + 1] << 8;
  }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(E, T) {
    return E = E >>> 0, T || w(E, 2, this.length), this[E] << 8 | this[E + 1];
  }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(E, T) {
    return E = E >>> 0, T || w(E, 4, this.length), (this[E] | this[E + 1] << 8 | this[E + 2] << 16) + this[E + 3] * 16777216;
  }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(E, T) {
    return E = E >>> 0, T || w(E, 4, this.length), this[E] * 16777216 + (this[E + 1] << 16 | this[E + 2] << 8 | this[E + 3]);
  }, f.prototype.readBigUInt64LE = ge(function(E) {
    E = E >>> 0, X(E, "offset");
    const T = this[E], W = this[E + 7];
    (T === void 0 || W === void 0) && te(E, this.length - 8);
    const ne = T + this[++E] * 2 ** 8 + this[++E] * 2 ** 16 + this[++E] * 2 ** 24, fe = this[++E] + this[++E] * 2 ** 8 + this[++E] * 2 ** 16 + W * 2 ** 24;
    return BigInt(ne) + (BigInt(fe) << BigInt(32));
  }), f.prototype.readBigUInt64BE = ge(function(E) {
    E = E >>> 0, X(E, "offset");
    const T = this[E], W = this[E + 7];
    (T === void 0 || W === void 0) && te(E, this.length - 8);
    const ne = T * 2 ** 24 + this[++E] * 2 ** 16 + this[++E] * 2 ** 8 + this[++E], fe = this[++E] * 2 ** 24 + this[++E] * 2 ** 16 + this[++E] * 2 ** 8 + W;
    return (BigInt(ne) << BigInt(32)) + BigInt(fe);
  }), f.prototype.readIntLE = function(E, T, W) {
    E = E >>> 0, T = T >>> 0, W || w(E, T, this.length);
    let ne = this[E], fe = 1, ce = 0;
    for (; ++ce < T && (fe *= 256); )
      ne += this[E + ce] * fe;
    return fe *= 128, ne >= fe && (ne -= Math.pow(2, 8 * T)), ne;
  }, f.prototype.readIntBE = function(E, T, W) {
    E = E >>> 0, T = T >>> 0, W || w(E, T, this.length);
    let ne = T, fe = 1, ce = this[E + --ne];
    for (; ne > 0 && (fe *= 256); )
      ce += this[E + --ne] * fe;
    return fe *= 128, ce >= fe && (ce -= Math.pow(2, 8 * T)), ce;
  }, f.prototype.readInt8 = function(E, T) {
    return E = E >>> 0, T || w(E, 1, this.length), this[E] & 128 ? (255 - this[E] + 1) * -1 : this[E];
  }, f.prototype.readInt16LE = function(E, T) {
    E = E >>> 0, T || w(E, 2, this.length);
    const W = this[E] | this[E + 1] << 8;
    return W & 32768 ? W | 4294901760 : W;
  }, f.prototype.readInt16BE = function(E, T) {
    E = E >>> 0, T || w(E, 2, this.length);
    const W = this[E + 1] | this[E] << 8;
    return W & 32768 ? W | 4294901760 : W;
  }, f.prototype.readInt32LE = function(E, T) {
    return E = E >>> 0, T || w(E, 4, this.length), this[E] | this[E + 1] << 8 | this[E + 2] << 16 | this[E + 3] << 24;
  }, f.prototype.readInt32BE = function(E, T) {
    return E = E >>> 0, T || w(E, 4, this.length), this[E] << 24 | this[E + 1] << 16 | this[E + 2] << 8 | this[E + 3];
  }, f.prototype.readBigInt64LE = ge(function(E) {
    E = E >>> 0, X(E, "offset");
    const T = this[E], W = this[E + 7];
    (T === void 0 || W === void 0) && te(E, this.length - 8);
    const ne = this[E + 4] + this[E + 5] * 2 ** 8 + this[E + 6] * 2 ** 16 + (W << 24);
    return (BigInt(ne) << BigInt(32)) + BigInt(T + this[++E] * 2 ** 8 + this[++E] * 2 ** 16 + this[++E] * 2 ** 24);
  }), f.prototype.readBigInt64BE = ge(function(E) {
    E = E >>> 0, X(E, "offset");
    const T = this[E], W = this[E + 7];
    (T === void 0 || W === void 0) && te(E, this.length - 8);
    const ne = (T << 24) + this[++E] * 2 ** 16 + this[++E] * 2 ** 8 + this[++E];
    return (BigInt(ne) << BigInt(32)) + BigInt(this[++E] * 2 ** 24 + this[++E] * 2 ** 16 + this[++E] * 2 ** 8 + W);
  }), f.prototype.readFloatLE = function(E, T) {
    return E = E >>> 0, T || w(E, 4, this.length), r.read(this, E, !0, 23, 4);
  }, f.prototype.readFloatBE = function(E, T) {
    return E = E >>> 0, T || w(E, 4, this.length), r.read(this, E, !1, 23, 4);
  }, f.prototype.readDoubleLE = function(E, T) {
    return E = E >>> 0, T || w(E, 8, this.length), r.read(this, E, !0, 52, 8);
  }, f.prototype.readDoubleBE = function(E, T) {
    return E = E >>> 0, T || w(E, 8, this.length), r.read(this, E, !1, 52, 8);
  };
  function p(F, E, T, W, ne, fe) {
    if (!f.isBuffer(F))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (E > ne || E < fe)
      throw new RangeError('"value" argument is out of bounds');
    if (T + W > F.length)
      throw new RangeError("Index out of range");
  }
  f.prototype.writeUintLE = f.prototype.writeUIntLE = function(E, T, W, ne) {
    if (E = +E, T = T >>> 0, W = W >>> 0, !ne) {
      const me = Math.pow(2, 8 * W) - 1;
      p(this, E, T, W, me, 0);
    }
    let fe = 1, ce = 0;
    for (this[T] = E & 255; ++ce < W && (fe *= 256); )
      this[T + ce] = E / fe & 255;
    return T + W;
  }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(E, T, W, ne) {
    if (E = +E, T = T >>> 0, W = W >>> 0, !ne) {
      const me = Math.pow(2, 8 * W) - 1;
      p(this, E, T, W, me, 0);
    }
    let fe = W - 1, ce = 1;
    for (this[T + fe] = E & 255; --fe >= 0 && (ce *= 256); )
      this[T + fe] = E / ce & 255;
    return T + W;
  }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 1, 255, 0), this[T] = E & 255, T + 1;
  }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 2, 65535, 0), this[T] = E & 255, this[T + 1] = E >>> 8, T + 2;
  }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 2, 65535, 0), this[T] = E >>> 8, this[T + 1] = E & 255, T + 2;
  }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 4, 4294967295, 0), this[T + 3] = E >>> 24, this[T + 2] = E >>> 16, this[T + 1] = E >>> 8, this[T] = E & 255, T + 4;
  }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 4, 4294967295, 0), this[T] = E >>> 24, this[T + 1] = E >>> 16, this[T + 2] = E >>> 8, this[T + 3] = E & 255, T + 4;
  };
  function S(F, E, T, W, ne) {
    A(E, W, ne, F, T, 7);
    let fe = Number(E & BigInt(4294967295));
    F[T++] = fe, fe = fe >> 8, F[T++] = fe, fe = fe >> 8, F[T++] = fe, fe = fe >> 8, F[T++] = fe;
    let ce = Number(E >> BigInt(32) & BigInt(4294967295));
    return F[T++] = ce, ce = ce >> 8, F[T++] = ce, ce = ce >> 8, F[T++] = ce, ce = ce >> 8, F[T++] = ce, T;
  }
  function G(F, E, T, W, ne) {
    A(E, W, ne, F, T, 7);
    let fe = Number(E & BigInt(4294967295));
    F[T + 7] = fe, fe = fe >> 8, F[T + 6] = fe, fe = fe >> 8, F[T + 5] = fe, fe = fe >> 8, F[T + 4] = fe;
    let ce = Number(E >> BigInt(32) & BigInt(4294967295));
    return F[T + 3] = ce, ce = ce >> 8, F[T + 2] = ce, ce = ce >> 8, F[T + 1] = ce, ce = ce >> 8, F[T] = ce, T + 8;
  }
  f.prototype.writeBigUInt64LE = ge(function(E, T = 0) {
    return S(this, E, T, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeBigUInt64BE = ge(function(E, T = 0) {
    return G(this, E, T, BigInt(0), BigInt("0xffffffffffffffff"));
  }), f.prototype.writeIntLE = function(E, T, W, ne) {
    if (E = +E, T = T >>> 0, !ne) {
      const _e = Math.pow(2, 8 * W - 1);
      p(this, E, T, W, _e - 1, -_e);
    }
    let fe = 0, ce = 1, me = 0;
    for (this[T] = E & 255; ++fe < W && (ce *= 256); )
      E < 0 && me === 0 && this[T + fe - 1] !== 0 && (me = 1), this[T + fe] = (E / ce >> 0) - me & 255;
    return T + W;
  }, f.prototype.writeIntBE = function(E, T, W, ne) {
    if (E = +E, T = T >>> 0, !ne) {
      const _e = Math.pow(2, 8 * W - 1);
      p(this, E, T, W, _e - 1, -_e);
    }
    let fe = W - 1, ce = 1, me = 0;
    for (this[T + fe] = E & 255; --fe >= 0 && (ce *= 256); )
      E < 0 && me === 0 && this[T + fe + 1] !== 0 && (me = 1), this[T + fe] = (E / ce >> 0) - me & 255;
    return T + W;
  }, f.prototype.writeInt8 = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 1, 127, -128), E < 0 && (E = 255 + E + 1), this[T] = E & 255, T + 1;
  }, f.prototype.writeInt16LE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 2, 32767, -32768), this[T] = E & 255, this[T + 1] = E >>> 8, T + 2;
  }, f.prototype.writeInt16BE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 2, 32767, -32768), this[T] = E >>> 8, this[T + 1] = E & 255, T + 2;
  }, f.prototype.writeInt32LE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 4, 2147483647, -2147483648), this[T] = E & 255, this[T + 1] = E >>> 8, this[T + 2] = E >>> 16, this[T + 3] = E >>> 24, T + 4;
  }, f.prototype.writeInt32BE = function(E, T, W) {
    return E = +E, T = T >>> 0, W || p(this, E, T, 4, 2147483647, -2147483648), E < 0 && (E = 4294967295 + E + 1), this[T] = E >>> 24, this[T + 1] = E >>> 16, this[T + 2] = E >>> 8, this[T + 3] = E & 255, T + 4;
  }, f.prototype.writeBigInt64LE = ge(function(E, T = 0) {
    return S(this, E, T, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), f.prototype.writeBigInt64BE = ge(function(E, T = 0) {
    return G(this, E, T, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function B(F, E, T, W, ne, fe) {
    if (T + W > F.length)
      throw new RangeError("Index out of range");
    if (T < 0)
      throw new RangeError("Index out of range");
  }
  function R(F, E, T, W, ne) {
    return E = +E, T = T >>> 0, ne || B(F, E, T, 4), r.write(F, E, T, W, 23, 4), T + 4;
  }
  f.prototype.writeFloatLE = function(E, T, W) {
    return R(this, E, T, !0, W);
  }, f.prototype.writeFloatBE = function(E, T, W) {
    return R(this, E, T, !1, W);
  };
  function N(F, E, T, W, ne) {
    return E = +E, T = T >>> 0, ne || B(F, E, T, 8), r.write(F, E, T, W, 52, 8), T + 8;
  }
  f.prototype.writeDoubleLE = function(E, T, W) {
    return N(this, E, T, !0, W);
  }, f.prototype.writeDoubleBE = function(E, T, W) {
    return N(this, E, T, !1, W);
  }, f.prototype.copy = function(E, T, W, ne) {
    if (!f.isBuffer(E))
      throw new TypeError("argument should be a Buffer");
    if (W || (W = 0), !ne && ne !== 0 && (ne = this.length), T >= E.length && (T = E.length), T || (T = 0), ne > 0 && ne < W && (ne = W), ne === W || E.length === 0 || this.length === 0)
      return 0;
    if (T < 0)
      throw new RangeError("targetStart out of bounds");
    if (W < 0 || W >= this.length)
      throw new RangeError("Index out of range");
    if (ne < 0)
      throw new RangeError("sourceEnd out of bounds");
    ne > this.length && (ne = this.length), E.length - T < ne - W && (ne = E.length - T + W);
    const fe = ne - W;
    return this === E && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(T, W, ne) : Uint8Array.prototype.set.call(
      E,
      this.subarray(W, ne),
      T
    ), fe;
  }, f.prototype.fill = function(E, T, W, ne) {
    if (typeof E == "string") {
      if (typeof T == "string" ? (ne = T, T = 0, W = this.length) : typeof W == "string" && (ne = W, W = this.length), ne !== void 0 && typeof ne != "string")
        throw new TypeError("encoding must be a string");
      if (typeof ne == "string" && !f.isEncoding(ne))
        throw new TypeError("Unknown encoding: " + ne);
      if (E.length === 1) {
        const ce = E.charCodeAt(0);
        (ne === "utf8" && ce < 128 || ne === "latin1") && (E = ce);
      }
    } else
      typeof E == "number" ? E = E & 255 : typeof E == "boolean" && (E = Number(E));
    if (T < 0 || this.length < T || this.length < W)
      throw new RangeError("Out of range index");
    if (W <= T)
      return this;
    T = T >>> 0, W = W === void 0 ? this.length : W >>> 0, E || (E = 0);
    let fe;
    if (typeof E == "number")
      for (fe = T; fe < W; ++fe)
        this[fe] = E;
    else {
      const ce = f.isBuffer(E) ? E : f.from(E, ne), me = ce.length;
      if (me === 0)
        throw new TypeError('The value "' + E + '" is invalid for argument "value"');
      for (fe = 0; fe < W - T; ++fe)
        this[fe + T] = ce[fe % me];
    }
    return this;
  };
  const H = {};
  function Z(F, E, T) {
    H[F] = class extends T {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: E.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${F}]`, this.stack, delete this.name;
      }
      get code() {
        return F;
      }
      set code(ne) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: ne,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${F}]: ${this.message}`;
      }
    };
  }
  Z(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(F) {
      return F ? `${F} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Z(
    "ERR_INVALID_ARG_TYPE",
    function(F, E) {
      return `The "${F}" argument must be of type number. Received type ${typeof E}`;
    },
    TypeError
  ), Z(
    "ERR_OUT_OF_RANGE",
    function(F, E, T) {
      let W = `The value of "${F}" is out of range.`, ne = T;
      return Number.isInteger(T) && Math.abs(T) > 2 ** 32 ? ne = oe(String(T)) : typeof T == "bigint" && (ne = String(T), (T > BigInt(2) ** BigInt(32) || T < -(BigInt(2) ** BigInt(32))) && (ne = oe(ne)), ne += "n"), W += ` It must be ${E}. Received ${ne}`, W;
    },
    RangeError
  );
  function oe(F) {
    let E = "", T = F.length;
    const W = F[0] === "-" ? 1 : 0;
    for (; T >= W + 4; T -= 3)
      E = `_${F.slice(T - 3, T)}${E}`;
    return `${F.slice(0, T)}${E}`;
  }
  function $(F, E, T) {
    X(E, "offset"), (F[E] === void 0 || F[E + T] === void 0) && te(E, F.length - (T + 1));
  }
  function A(F, E, T, W, ne, fe) {
    if (F > T || F < E) {
      const ce = typeof E == "bigint" ? "n" : "";
      let me;
      throw fe > 3 ? E === 0 || E === BigInt(0) ? me = `>= 0${ce} and < 2${ce} ** ${(fe + 1) * 8}${ce}` : me = `>= -(2${ce} ** ${(fe + 1) * 8 - 1}${ce}) and < 2 ** ${(fe + 1) * 8 - 1}${ce}` : me = `>= ${E}${ce} and <= ${T}${ce}`, new H.ERR_OUT_OF_RANGE("value", me, F);
    }
    $(W, ne, fe);
  }
  function X(F, E) {
    if (typeof F != "number")
      throw new H.ERR_INVALID_ARG_TYPE(E, "number", F);
  }
  function te(F, E, T) {
    throw Math.floor(F) !== F ? (X(F, T), new H.ERR_OUT_OF_RANGE(T || "offset", "an integer", F)) : E < 0 ? new H.ERR_BUFFER_OUT_OF_BOUNDS() : new H.ERR_OUT_OF_RANGE(
      T || "offset",
      `>= ${T ? 1 : 0} and <= ${E}`,
      F
    );
  }
  const pe = /[^+/0-9A-Za-z-_]/g;
  function z(F) {
    if (F = F.split("=")[0], F = F.trim().replace(pe, ""), F.length < 2)
      return "";
    for (; F.length % 4 !== 0; )
      F = F + "=";
    return F;
  }
  function I(F, E) {
    E = E || 1 / 0;
    let T;
    const W = F.length;
    let ne = null;
    const fe = [];
    for (let ce = 0; ce < W; ++ce) {
      if (T = F.charCodeAt(ce), T > 55295 && T < 57344) {
        if (!ne) {
          if (T > 56319) {
            (E -= 3) > -1 && fe.push(239, 191, 189);
            continue;
          } else if (ce + 1 === W) {
            (E -= 3) > -1 && fe.push(239, 191, 189);
            continue;
          }
          ne = T;
          continue;
        }
        if (T < 56320) {
          (E -= 3) > -1 && fe.push(239, 191, 189), ne = T;
          continue;
        }
        T = (ne - 55296 << 10 | T - 56320) + 65536;
      } else
        ne && (E -= 3) > -1 && fe.push(239, 191, 189);
      if (ne = null, T < 128) {
        if ((E -= 1) < 0)
          break;
        fe.push(T);
      } else if (T < 2048) {
        if ((E -= 2) < 0)
          break;
        fe.push(
          T >> 6 | 192,
          T & 63 | 128
        );
      } else if (T < 65536) {
        if ((E -= 3) < 0)
          break;
        fe.push(
          T >> 12 | 224,
          T >> 6 & 63 | 128,
          T & 63 | 128
        );
      } else if (T < 1114112) {
        if ((E -= 4) < 0)
          break;
        fe.push(
          T >> 18 | 240,
          T >> 12 & 63 | 128,
          T >> 6 & 63 | 128,
          T & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return fe;
  }
  function L(F) {
    const E = [];
    for (let T = 0; T < F.length; ++T)
      E.push(F.charCodeAt(T) & 255);
    return E;
  }
  function j(F, E) {
    let T, W, ne;
    const fe = [];
    for (let ce = 0; ce < F.length && !((E -= 2) < 0); ++ce)
      T = F.charCodeAt(ce), W = T >> 8, ne = T % 256, fe.push(ne), fe.push(W);
    return fe;
  }
  function ie(F) {
    return t.toByteArray(z(F));
  }
  function he(F, E, T, W) {
    let ne;
    for (ne = 0; ne < W && !(ne + T >= E.length || ne >= F.length); ++ne)
      E[ne + T] = F[ne];
    return ne;
  }
  function Y(F, E) {
    return F instanceof E || F != null && F.constructor != null && F.constructor.name != null && F.constructor.name === E.name;
  }
  function ae(F) {
    return F !== F;
  }
  const de = function() {
    const F = "0123456789abcdef", E = new Array(256);
    for (let T = 0; T < 16; ++T) {
      const W = T * 16;
      for (let ne = 0; ne < 16; ++ne)
        E[W + ne] = F[T] + F[ne];
    }
    return E;
  }();
  function ge(F) {
    return typeof BigInt > "u" ? ye : F;
  }
  function ye() {
    throw new Error("BigInt not supported");
  }
})(Ws);
const R_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ws
}, [Ws]), Yr = /* @__PURE__ */ Q(R_), B_ = {}, T_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B_
}, Symbol.toStringTag, { value: "Module" })), er = /* @__PURE__ */ Q(T_);
var Lf, Oc;
function I_() {
  if (Oc)
    return Lf;
  Oc = 1;
  function e(P, C) {
    var M = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(P);
      C && (k = k.filter(function(q) {
        return Object.getOwnPropertyDescriptor(P, q).enumerable;
      })), M.push.apply(M, k);
    }
    return M;
  }
  function t(P) {
    for (var C = 1; C < arguments.length; C++) {
      var M = arguments[C] != null ? arguments[C] : {};
      C % 2 ? e(Object(M), !0).forEach(function(k) {
        r(P, k, M[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(M)) : e(Object(M)).forEach(function(k) {
        Object.defineProperty(P, k, Object.getOwnPropertyDescriptor(M, k));
      });
    }
    return P;
  }
  function r(P, C, M) {
    return C in P ? Object.defineProperty(P, C, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : P[C] = M, P;
  }
  function n(P, C) {
    if (!(P instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(P, C) {
    for (var M = 0; M < C.length; M++) {
      var k = C[M];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(P, k.key, k);
    }
  }
  function i(P, C, M) {
    return C && a(P.prototype, C), M && a(P, M), P;
  }
  var s = Yr, f = s.Buffer, v = er, m = v.inspect, _ = m && m.custom || "inspect";
  function O(P, C, M) {
    f.prototype.copy.call(P, C, M);
  }
  return Lf = /* @__PURE__ */ function() {
    function P() {
      n(this, P), this.head = null, this.tail = null, this.length = 0;
    }
    return i(P, [{
      key: "push",
      value: function(M) {
        var k = {
          data: M,
          next: null
        };
        this.length > 0 ? this.tail.next = k : this.head = k, this.tail = k, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(M) {
        var k = {
          data: M,
          next: this.head
        };
        this.length === 0 && (this.tail = k), this.head = k, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var M = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, M;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(M) {
        if (this.length === 0)
          return "";
        for (var k = this.head, q = "" + k.data; k = k.next; )
          q += M + k.data;
        return q;
      }
    }, {
      key: "concat",
      value: function(M) {
        if (this.length === 0)
          return f.alloc(0);
        for (var k = f.allocUnsafe(M >>> 0), q = this.head, D = 0; q; )
          O(q.data, k, D), D += q.data.length, q = q.next;
        return k;
      }
    }, {
      key: "consume",
      value: function(M, k) {
        var q;
        return M < this.head.data.length ? (q = this.head.data.slice(0, M), this.head.data = this.head.data.slice(M)) : M === this.head.data.length ? q = this.shift() : q = k ? this._getString(M) : this._getBuffer(M), q;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
    }, {
      key: "_getString",
      value: function(M) {
        var k = this.head, q = 1, D = k.data;
        for (M -= D.length; k = k.next; ) {
          var U = k.data, K = M > U.length ? U.length : M;
          if (K === U.length ? D += U : D += U.slice(0, M), M -= K, M === 0) {
            K === U.length ? (++q, k.next ? this.head = k.next : this.head = this.tail = null) : (this.head = k, k.data = U.slice(K));
            break;
          }
          ++q;
        }
        return this.length -= q, D;
      }
    }, {
      key: "_getBuffer",
      value: function(M) {
        var k = f.allocUnsafe(M), q = this.head, D = 1;
        for (q.data.copy(k), M -= q.data.length; q = q.next; ) {
          var U = q.data, K = M > U.length ? U.length : M;
          if (U.copy(k, k.length - M, 0, K), M -= K, M === 0) {
            K === U.length ? (++D, q.next ? this.head = q.next : this.head = this.tail = null) : (this.head = q, q.data = U.slice(K));
            break;
          }
          ++D;
        }
        return this.length -= D, k;
      }
    }, {
      key: _,
      value: function(M, k) {
        return m(this, t({}, k, {
          depth: 0,
          customInspect: !1
        }));
      }
    }]), P;
  }(), Lf;
}
function P_(e, t) {
  var r = this, n = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
  return n || a ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(Gs, this, e)) : process.nextTick(Gs, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(i) {
    !t && i ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(ka, r) : (r._writableState.errorEmitted = !0, process.nextTick(Lc, r, i)) : process.nextTick(Lc, r, i) : t ? (process.nextTick(ka, r), t(i)) : process.nextTick(ka, r);
  }), this);
}
function Lc(e, t) {
  Gs(e, t), ka(e);
}
function ka(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function O_() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function Gs(e, t) {
  e.emit("error", t);
}
function L_(e, t) {
  var r = e._readableState, n = e._writableState;
  r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var Cc = {
  destroy: P_,
  undestroy: O_,
  errorOrDestroy: L_
};
const C_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Cc
}, [Cc]), q1 = /* @__PURE__ */ Q(C_);
var Vs = {};
function k_(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var F1 = {};
function tr(e, t, r) {
  r || (r = Error);
  function n(i, s, f) {
    return typeof t == "string" ? t : t(i, s, f);
  }
  var a = /* @__PURE__ */ function(i) {
    k_(s, i);
    function s(f, v, m) {
      return i.call(this, n(f, v, m)) || this;
    }
    return s;
  }(r);
  a.prototype.name = r.name, a.prototype.code = e, F1[e] = a;
}
function kc(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return e = e.map(function(n) {
      return String(n);
    }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function N_(e, t, r) {
  return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
}
function q_(e, t, r) {
  return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
}
function F_(e, t, r) {
  return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
}
tr("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
tr("ERR_INVALID_ARG_TYPE", function(e, t, r) {
  var n;
  typeof t == "string" && N_(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
  var a;
  if (q_(e, " argument"))
    a = "The ".concat(e, " ").concat(n, " ").concat(kc(t, "type"));
  else {
    var i = F_(e, ".") ? "property" : "argument";
    a = 'The "'.concat(e, '" ').concat(i, " ").concat(n, " ").concat(kc(t, "type"));
  }
  return a += ". Received type ".concat(typeof r), a;
}, TypeError);
tr("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
tr("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
tr("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
tr("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
tr("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
tr("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
tr("ERR_STREAM_WRITE_AFTER_END", "write after end");
tr("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
tr("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
tr("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
var U_ = Vs.codes = F1;
const D_ = /* @__PURE__ */ ee({
  __proto__: null,
  codes: U_,
  default: Vs
}, [Vs]), ui = /* @__PURE__ */ Q(D_);
var j_ = ui.codes.ERR_INVALID_OPT_VALUE;
function H_(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function z_(e, t, r, n) {
  var a = H_(t, n, r);
  if (a != null) {
    if (!(isFinite(a) && Math.floor(a) === a) || a < 0) {
      var i = n ? r : "highWaterMark";
      throw new j_(i, a);
    }
    return Math.floor(a);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var Nc = {
  getHighWaterMark: z_
};
const K_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Nc
}, [Nc]), U1 = /* @__PURE__ */ Q(K_);
var qc = W_;
function W_(e, t) {
  if (Cf("noDeprecation"))
    return e;
  var r = !1;
  function n() {
    if (!r) {
      if (Cf("throwDeprecation"))
        throw new Error(t);
      Cf("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
    }
    return e.apply(this, arguments);
  }
  return n;
}
function Cf(e) {
  try {
    if (!Ie.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var t = Ie.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
const G_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: qc
}, [qc]), D1 = /* @__PURE__ */ Q(G_);
var kf, Fc;
function j1() {
  if (Fc)
    return kf;
  Fc = 1, kf = se;
  function e(R) {
    var N = this;
    this.next = null, this.entry = null, this.finish = function() {
      B(N, R);
    };
  }
  var t;
  se.WritableState = ue;
  var r = {
    deprecate: D1
  }, n = L1, a = Yr.Buffer, i = Ie.Uint8Array || function() {
  };
  function s(R) {
    return a.from(R);
  }
  function f(R) {
    return a.isBuffer(R) || R instanceof i;
  }
  var v = q1, m = U1, _ = m.getHighWaterMark, O = ui.codes, P = O.ERR_INVALID_ARG_TYPE, C = O.ERR_METHOD_NOT_IMPLEMENTED, M = O.ERR_MULTIPLE_CALLBACK, k = O.ERR_STREAM_CANNOT_PIPE, q = O.ERR_STREAM_DESTROYED, D = O.ERR_STREAM_NULL_VALUES, U = O.ERR_STREAM_WRITE_AFTER_END, K = O.ERR_UNKNOWN_ENCODING, J = v.errorOrDestroy;
  ct(se, n);
  function re() {
  }
  function ue(R, N, H) {
    t = t || Wn(), R = R || {}, typeof H != "boolean" && (H = N instanceof t), this.objectMode = !!R.objectMode, H && (this.objectMode = this.objectMode || !!R.writableObjectMode), this.highWaterMark = _(this, R, "writableHighWaterMark", H), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var Z = R.decodeStrings === !1;
    this.decodeStrings = !Z, this.defaultEncoding = R.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(oe) {
      y(N, oe);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = R.emitClose !== !1, this.autoDestroy = !!R.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  ue.prototype.getBuffer = function() {
    for (var N = this.bufferedRequest, H = []; N; )
      H.push(N), N = N.next;
    return H;
  }, function() {
    try {
      Object.defineProperty(ue.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var ve;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (ve = Function.prototype[Symbol.hasInstance], Object.defineProperty(se, Symbol.hasInstance, {
    value: function(N) {
      return ve.call(this, N) ? !0 : this !== se ? !1 : N && N._writableState instanceof ue;
    }
  })) : ve = function(N) {
    return N instanceof this;
  };
  function se(R) {
    t = t || Wn();
    var N = this instanceof t;
    if (!N && !ve.call(se, this))
      return new se(R);
    this._writableState = new ue(R, this, N), this.writable = !0, R && (typeof R.write == "function" && (this._write = R.write), typeof R.writev == "function" && (this._writev = R.writev), typeof R.destroy == "function" && (this._destroy = R.destroy), typeof R.final == "function" && (this._final = R.final)), n.call(this);
  }
  se.prototype.pipe = function() {
    J(this, new k());
  };
  function le(R, N) {
    var H = new U();
    J(R, H), process.nextTick(N, H);
  }
  function V(R, N, H, Z) {
    var oe;
    return H === null ? oe = new D() : typeof H != "string" && !N.objectMode && (oe = new P("chunk", ["string", "Buffer"], H)), oe ? (J(R, oe), process.nextTick(Z, oe), !1) : !0;
  }
  se.prototype.write = function(R, N, H) {
    var Z = this._writableState, oe = !1, $ = !Z.objectMode && f(R);
    return $ && !a.isBuffer(R) && (R = s(R)), typeof N == "function" && (H = N, N = null), $ ? N = "buffer" : N || (N = Z.defaultEncoding), typeof H != "function" && (H = re), Z.ending ? le(this, H) : ($ || V(this, Z, R, H)) && (Z.pendingcb++, oe = l(this, Z, $, R, N, H)), oe;
  }, se.prototype.cork = function() {
    this._writableState.corked++;
  }, se.prototype.uncork = function() {
    var R = this._writableState;
    R.corked && (R.corked--, !R.writing && !R.corked && !R.bufferProcessing && R.bufferedRequest && h(this, R));
  }, se.prototype.setDefaultEncoding = function(N) {
    if (typeof N == "string" && (N = N.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((N + "").toLowerCase()) > -1))
      throw new K(N);
    return this._writableState.defaultEncoding = N, this;
  }, Object.defineProperty(se.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function g(R, N, H) {
    return !R.objectMode && R.decodeStrings !== !1 && typeof N == "string" && (N = a.from(N, H)), N;
  }
  Object.defineProperty(se.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function l(R, N, H, Z, oe, $) {
    if (!H) {
      var A = g(N, Z, oe);
      Z !== A && (H = !0, oe = "buffer", Z = A);
    }
    var X = N.objectMode ? 1 : Z.length;
    N.length += X;
    var te = N.length < N.highWaterMark;
    if (te || (N.needDrain = !0), N.writing || N.corked) {
      var pe = N.lastBufferedRequest;
      N.lastBufferedRequest = {
        chunk: Z,
        encoding: oe,
        isBuf: H,
        callback: $,
        next: null
      }, pe ? pe.next = N.lastBufferedRequest : N.bufferedRequest = N.lastBufferedRequest, N.bufferedRequestCount += 1;
    } else
      u(R, N, !1, X, Z, oe, $);
    return te;
  }
  function u(R, N, H, Z, oe, $, A) {
    N.writelen = Z, N.writecb = A, N.writing = !0, N.sync = !0, N.destroyed ? N.onwrite(new q("write")) : H ? R._writev(oe, N.onwrite) : R._write(oe, $, N.onwrite), N.sync = !1;
  }
  function o(R, N, H, Z, oe) {
    --N.pendingcb, H ? (process.nextTick(oe, Z), process.nextTick(S, R, N), R._writableState.errorEmitted = !0, J(R, Z)) : (oe(Z), R._writableState.errorEmitted = !0, J(R, Z), S(R, N));
  }
  function c(R) {
    R.writing = !1, R.writecb = null, R.length -= R.writelen, R.writelen = 0;
  }
  function y(R, N) {
    var H = R._writableState, Z = H.sync, oe = H.writecb;
    if (typeof oe != "function")
      throw new M();
    if (c(H), N)
      o(R, H, Z, N, oe);
    else {
      var $ = d(H) || R.destroyed;
      !$ && !H.corked && !H.bufferProcessing && H.bufferedRequest && h(R, H), Z ? process.nextTick(x, R, H, $, oe) : x(R, H, $, oe);
    }
  }
  function x(R, N, H, Z) {
    H || b(R, N), N.pendingcb--, Z(), S(R, N);
  }
  function b(R, N) {
    N.length === 0 && N.needDrain && (N.needDrain = !1, R.emit("drain"));
  }
  function h(R, N) {
    N.bufferProcessing = !0;
    var H = N.bufferedRequest;
    if (R._writev && H && H.next) {
      var Z = N.bufferedRequestCount, oe = new Array(Z), $ = N.corkedRequestsFree;
      $.entry = H;
      for (var A = 0, X = !0; H; )
        oe[A] = H, H.isBuf || (X = !1), H = H.next, A += 1;
      oe.allBuffers = X, u(R, N, !0, N.length, oe, "", $.finish), N.pendingcb++, N.lastBufferedRequest = null, $.next ? (N.corkedRequestsFree = $.next, $.next = null) : N.corkedRequestsFree = new e(N), N.bufferedRequestCount = 0;
    } else {
      for (; H; ) {
        var te = H.chunk, pe = H.encoding, z = H.callback, I = N.objectMode ? 1 : te.length;
        if (u(R, N, !1, I, te, pe, z), H = H.next, N.bufferedRequestCount--, N.writing)
          break;
      }
      H === null && (N.lastBufferedRequest = null);
    }
    N.bufferedRequest = H, N.bufferProcessing = !1;
  }
  se.prototype._write = function(R, N, H) {
    H(new C("_write()"));
  }, se.prototype._writev = null, se.prototype.end = function(R, N, H) {
    var Z = this._writableState;
    return typeof R == "function" ? (H = R, R = null, N = null) : typeof N == "function" && (H = N, N = null), R != null && this.write(R, N), Z.corked && (Z.corked = 1, this.uncork()), Z.ending || G(this, Z, H), this;
  }, Object.defineProperty(se.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function d(R) {
    return R.ending && R.length === 0 && R.bufferedRequest === null && !R.finished && !R.writing;
  }
  function w(R, N) {
    R._final(function(H) {
      N.pendingcb--, H && J(R, H), N.prefinished = !0, R.emit("prefinish"), S(R, N);
    });
  }
  function p(R, N) {
    !N.prefinished && !N.finalCalled && (typeof R._final == "function" && !N.destroyed ? (N.pendingcb++, N.finalCalled = !0, process.nextTick(w, R, N)) : (N.prefinished = !0, R.emit("prefinish")));
  }
  function S(R, N) {
    var H = d(N);
    if (H && (p(R, N), N.pendingcb === 0 && (N.finished = !0, R.emit("finish"), N.autoDestroy))) {
      var Z = R._readableState;
      (!Z || Z.autoDestroy && Z.endEmitted) && R.destroy();
    }
    return H;
  }
  function G(R, N, H) {
    N.ending = !0, S(R, N), H && (N.finished ? process.nextTick(H) : R.once("finish", H)), N.ended = !0, R.writable = !1;
  }
  function B(R, N, H) {
    var Z = R.entry;
    for (R.entry = null; Z; ) {
      var oe = Z.callback;
      N.pendingcb--, oe(H), Z = Z.next;
    }
    N.corkedRequestsFree.next = R;
  }
  return Object.defineProperty(se.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(N) {
      !this._writableState || (this._writableState.destroyed = N);
    }
  }), se.prototype.destroy = v.destroy, se.prototype._undestroy = v.undestroy, se.prototype._destroy = function(R, N) {
    N(R);
  }, kf;
}
var Nf, Uc;
function Wn() {
  if (Uc)
    return Nf;
  Uc = 1;
  var e = Object.keys || function(m) {
    var _ = [];
    for (var O in m)
      _.push(O);
    return _;
  };
  Nf = s;
  var t = z1(), r = j1();
  ct(s, t);
  for (var n = e(r.prototype), a = 0; a < n.length; a++) {
    var i = n[a];
    s.prototype[i] || (s.prototype[i] = r.prototype[i]);
  }
  function s(m) {
    if (!(this instanceof s))
      return new s(m);
    t.call(this, m), r.call(this, m), this.allowHalfOpen = !0, m && (m.readable === !1 && (this.readable = !1), m.writable === !1 && (this.writable = !1), m.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", f)));
  }
  Object.defineProperty(s.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(s.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(s.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function f() {
    this._writableState.ended || process.nextTick(v, this);
  }
  function v(m) {
    m.end();
  }
  return Object.defineProperty(s.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(_) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = _, this._writableState.destroyed = _);
    }
  }), Nf;
}
var Zs = {}, Wa = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = Yr, n = r.Buffer;
  function a(s, f) {
    for (var v in s)
      f[v] = s[v];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (a(r, t), t.Buffer = i);
  function i(s, f, v) {
    return n(s, f, v);
  }
  i.prototype = Object.create(n.prototype), a(n, i), i.from = function(s, f, v) {
    if (typeof s == "number")
      throw new TypeError("Argument must not be a number");
    return n(s, f, v);
  }, i.alloc = function(s, f, v) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    var m = n(s);
    return f !== void 0 ? typeof v == "string" ? m.fill(f, v) : m.fill(f) : m.fill(0), m;
  }, i.allocUnsafe = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return n(s);
  }, i.allocUnsafeSlow = function(s) {
    if (typeof s != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(s);
  };
})(Wa, Wa.exports);
const V_ = Wa.exports, Z_ = /* @__PURE__ */ ee({
  __proto__: null,
  default: V_
}, [Wa.exports]), Gt = /* @__PURE__ */ Q(Z_);
var Xu = Gt.Buffer, Dc = Xu.isEncoding || function(e) {
  switch (e = "" + e, e && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return !0;
    default:
      return !1;
  }
};
function J_(e) {
  if (!e)
    return "utf8";
  for (var t; ; )
    switch (e) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return e;
      default:
        if (t)
          return;
        e = ("" + e).toLowerCase(), t = !0;
    }
}
function Y_(e) {
  var t = J_(e);
  if (typeof t != "string" && (Xu.isEncoding === Dc || !Dc(e)))
    throw new Error("Unknown encoding: " + e);
  return t || e;
}
var X_ = Zs.StringDecoder = ia;
function ia(e) {
  this.encoding = Y_(e);
  var t;
  switch (this.encoding) {
    case "utf16le":
      this.text = im, this.end = am, t = 4;
      break;
    case "utf8":
      this.fillLast = tm, t = 4;
      break;
    case "base64":
      this.text = om, this.end = fm, t = 3;
      break;
    default:
      this.write = sm, this.end = um;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Xu.allocUnsafe(t);
}
ia.prototype.write = function(e) {
  if (e.length === 0)
    return "";
  var t, r;
  if (this.lastNeed) {
    if (t = this.fillLast(e), t === void 0)
      return "";
    r = this.lastNeed, this.lastNeed = 0;
  } else
    r = 0;
  return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
};
ia.prototype.end = nm;
ia.prototype.text = rm;
ia.prototype.fillLast = function(e) {
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
};
function qf(e) {
  return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2;
}
function Q_(e, t, r) {
  var n = t.length - 1;
  if (n < r)
    return 0;
  var a = qf(t[n]);
  return a >= 0 ? (a > 0 && (e.lastNeed = a - 1), a) : --n < r || a === -2 ? 0 : (a = qf(t[n]), a >= 0 ? (a > 0 && (e.lastNeed = a - 2), a) : --n < r || a === -2 ? 0 : (a = qf(t[n]), a >= 0 ? (a > 0 && (a === 2 ? a = 0 : e.lastNeed = a - 3), a) : 0));
}
function em(e, t, r) {
  if ((t[0] & 192) !== 128)
    return e.lastNeed = 0, "\uFFFD";
  if (e.lastNeed > 1 && t.length > 1) {
    if ((t[1] & 192) !== 128)
      return e.lastNeed = 1, "\uFFFD";
    if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) !== 128)
      return e.lastNeed = 2, "\uFFFD";
  }
}
function tm(e) {
  var t = this.lastTotal - this.lastNeed, r = em(this, e);
  if (r !== void 0)
    return r;
  if (this.lastNeed <= e.length)
    return e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length;
}
function rm(e, t) {
  var r = Q_(this, e, t);
  if (!this.lastNeed)
    return e.toString("utf8", t);
  this.lastTotal = r;
  var n = e.length - (r - this.lastNeed);
  return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
}
function nm(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + "\uFFFD" : t;
}
function im(e, t) {
  if ((e.length - t) % 2 === 0) {
    var r = e.toString("utf16le", t);
    if (r) {
      var n = r.charCodeAt(r.length - 1);
      if (n >= 55296 && n <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
    }
    return r;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
}
function am(e) {
  var t = e && e.length ? this.write(e) : "";
  if (this.lastNeed) {
    var r = this.lastTotal - this.lastNeed;
    return t + this.lastChar.toString("utf16le", 0, r);
  }
  return t;
}
function om(e, t) {
  var r = (e.length - t) % 3;
  return r === 0 ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
}
function fm(e) {
  var t = e && e.length ? this.write(e) : "";
  return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
}
function sm(e) {
  return e.toString(this.encoding);
}
function um(e) {
  return e && e.length ? this.write(e) : "";
}
const cm = /* @__PURE__ */ ee({
  __proto__: null,
  StringDecoder: X_,
  default: Zs
}, [Zs]), Ni = /* @__PURE__ */ Q(cm);
var jc = ui.codes.ERR_STREAM_PREMATURE_CLOSE;
function lm(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      e.apply(this, n);
    }
  };
}
function hm() {
}
function dm(e) {
  return e.setHeader && typeof e.abort == "function";
}
function H1(e, t, r) {
  if (typeof t == "function")
    return H1(e, null, t);
  t || (t = {}), r = lm(r || hm);
  var n = t.readable || t.readable !== !1 && e.readable, a = t.writable || t.writable !== !1 && e.writable, i = function() {
    e.writable || f();
  }, s = e._writableState && e._writableState.finished, f = function() {
    a = !1, s = !0, n || r.call(e);
  }, v = e._readableState && e._readableState.endEmitted, m = function() {
    n = !1, v = !0, a || r.call(e);
  }, _ = function(M) {
    r.call(e, M);
  }, O = function() {
    var M;
    if (n && !v)
      return (!e._readableState || !e._readableState.ended) && (M = new jc()), r.call(e, M);
    if (a && !s)
      return (!e._writableState || !e._writableState.ended) && (M = new jc()), r.call(e, M);
  }, P = function() {
    e.req.on("finish", f);
  };
  return dm(e) ? (e.on("complete", f), e.on("abort", O), e.req ? P() : e.on("request", P)) : a && !e._writableState && (e.on("end", i), e.on("close", i)), e.on("end", m), e.on("finish", f), t.error !== !1 && e.on("error", _), e.on("close", O), function() {
    e.removeListener("complete", f), e.removeListener("abort", O), e.removeListener("request", P), e.req && e.req.removeListener("finish", f), e.removeListener("end", i), e.removeListener("close", i), e.removeListener("finish", f), e.removeListener("end", m), e.removeListener("error", _), e.removeListener("close", O);
  };
}
var Hc = H1;
const pm = /* @__PURE__ */ ee({
  __proto__: null,
  default: Hc
}, [Hc]), Qu = /* @__PURE__ */ Q(pm);
var Ff, zc;
function vm() {
  if (zc)
    return Ff;
  zc = 1;
  var e;
  function t(D, U, K) {
    return U in D ? Object.defineProperty(D, U, { value: K, enumerable: !0, configurable: !0, writable: !0 }) : D[U] = K, D;
  }
  var r = Qu, n = Symbol("lastResolve"), a = Symbol("lastReject"), i = Symbol("error"), s = Symbol("ended"), f = Symbol("lastPromise"), v = Symbol("handlePromise"), m = Symbol("stream");
  function _(D, U) {
    return {
      value: D,
      done: U
    };
  }
  function O(D) {
    var U = D[n];
    if (U !== null) {
      var K = D[m].read();
      K !== null && (D[f] = null, D[n] = null, D[a] = null, U(_(K, !1)));
    }
  }
  function P(D) {
    process.nextTick(O, D);
  }
  function C(D, U) {
    return function(K, J) {
      D.then(function() {
        if (U[s]) {
          K(_(void 0, !0));
          return;
        }
        U[v](K, J);
      }, J);
    };
  }
  var M = Object.getPrototypeOf(function() {
  }), k = Object.setPrototypeOf((e = {
    get stream() {
      return this[m];
    },
    next: function() {
      var U = this, K = this[i];
      if (K !== null)
        return Promise.reject(K);
      if (this[s])
        return Promise.resolve(_(void 0, !0));
      if (this[m].destroyed)
        return new Promise(function(ve, se) {
          process.nextTick(function() {
            U[i] ? se(U[i]) : ve(_(void 0, !0));
          });
        });
      var J = this[f], re;
      if (J)
        re = new Promise(C(J, this));
      else {
        var ue = this[m].read();
        if (ue !== null)
          return Promise.resolve(_(ue, !1));
        re = new Promise(this[v]);
      }
      return this[f] = re, re;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var U = this;
    return new Promise(function(K, J) {
      U[m].destroy(null, function(re) {
        if (re) {
          J(re);
          return;
        }
        K(_(void 0, !0));
      });
    });
  }), e), M), q = function(U) {
    var K, J = Object.create(k, (K = {}, t(K, m, {
      value: U,
      writable: !0
    }), t(K, n, {
      value: null,
      writable: !0
    }), t(K, a, {
      value: null,
      writable: !0
    }), t(K, i, {
      value: null,
      writable: !0
    }), t(K, s, {
      value: U._readableState.endEmitted,
      writable: !0
    }), t(K, v, {
      value: function(ue, ve) {
        var se = J[m].read();
        se ? (J[f] = null, J[n] = null, J[a] = null, ue(_(se, !1))) : (J[n] = ue, J[a] = ve);
      },
      writable: !0
    }), K));
    return J[f] = null, r(U, function(re) {
      if (re && re.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var ue = J[a];
        ue !== null && (J[f] = null, J[n] = null, J[a] = null, ue(re)), J[i] = re;
        return;
      }
      var ve = J[n];
      ve !== null && (J[f] = null, J[n] = null, J[a] = null, ve(_(void 0, !0))), J[s] = !0;
    }), U.on("readable", P.bind(null, J)), J;
  };
  return Ff = q, Ff;
}
var Uf, Kc;
function ym() {
  return Kc || (Kc = 1, Uf = function() {
    throw new Error("Readable.from is not available in the browser");
  }), Uf;
}
var Df, Wc;
function z1() {
  if (Wc)
    return Df;
  Wc = 1, Df = le;
  var e;
  le.ReadableState = se, Jr.EventEmitter;
  var t = function(A, X) {
    return A.listeners(X).length;
  }, r = L1, n = Yr.Buffer, a = Ie.Uint8Array || function() {
  };
  function i($) {
    return n.from($);
  }
  function s($) {
    return n.isBuffer($) || $ instanceof a;
  }
  var f = er, v;
  f && f.debuglog ? v = f.debuglog("stream") : v = function() {
  };
  var m = I_(), _ = q1, O = U1, P = O.getHighWaterMark, C = ui.codes, M = C.ERR_INVALID_ARG_TYPE, k = C.ERR_STREAM_PUSH_AFTER_EOF, q = C.ERR_METHOD_NOT_IMPLEMENTED, D = C.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, U, K, J;
  ct(le, r);
  var re = _.errorOrDestroy, ue = ["error", "close", "destroy", "pause", "resume"];
  function ve($, A, X) {
    if (typeof $.prependListener == "function")
      return $.prependListener(A, X);
    !$._events || !$._events[A] ? $.on(A, X) : Array.isArray($._events[A]) ? $._events[A].unshift(X) : $._events[A] = [X, $._events[A]];
  }
  function se($, A, X) {
    e = e || Wn(), $ = $ || {}, typeof X != "boolean" && (X = A instanceof e), this.objectMode = !!$.objectMode, X && (this.objectMode = this.objectMode || !!$.readableObjectMode), this.highWaterMark = P(this, $, "readableHighWaterMark", X), this.buffer = new m(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = $.emitClose !== !1, this.autoDestroy = !!$.autoDestroy, this.destroyed = !1, this.defaultEncoding = $.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, $.encoding && (U || (U = Ni.StringDecoder), this.decoder = new U($.encoding), this.encoding = $.encoding);
  }
  function le($) {
    if (e = e || Wn(), !(this instanceof le))
      return new le($);
    var A = this instanceof e;
    this._readableState = new se($, this, A), this.readable = !0, $ && (typeof $.read == "function" && (this._read = $.read), typeof $.destroy == "function" && (this._destroy = $.destroy)), r.call(this);
  }
  Object.defineProperty(le.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(A) {
      !this._readableState || (this._readableState.destroyed = A);
    }
  }), le.prototype.destroy = _.destroy, le.prototype._undestroy = _.undestroy, le.prototype._destroy = function($, A) {
    A($);
  }, le.prototype.push = function($, A) {
    var X = this._readableState, te;
    return X.objectMode ? te = !0 : typeof $ == "string" && (A = A || X.defaultEncoding, A !== X.encoding && ($ = n.from($, A), A = ""), te = !0), V(this, $, A, !1, te);
  }, le.prototype.unshift = function($) {
    return V(this, $, null, !0, !1);
  };
  function V($, A, X, te, pe) {
    v("readableAddChunk", A);
    var z = $._readableState;
    if (A === null)
      z.reading = !1, y($, z);
    else {
      var I;
      if (pe || (I = l(z, A)), I)
        re($, I);
      else if (z.objectMode || A && A.length > 0)
        if (typeof A != "string" && !z.objectMode && Object.getPrototypeOf(A) !== n.prototype && (A = i(A)), te)
          z.endEmitted ? re($, new D()) : g($, z, A, !0);
        else if (z.ended)
          re($, new k());
        else {
          if (z.destroyed)
            return !1;
          z.reading = !1, z.decoder && !X ? (A = z.decoder.write(A), z.objectMode || A.length !== 0 ? g($, z, A, !1) : h($, z)) : g($, z, A, !1);
        }
      else
        te || (z.reading = !1, h($, z));
    }
    return !z.ended && (z.length < z.highWaterMark || z.length === 0);
  }
  function g($, A, X, te) {
    A.flowing && A.length === 0 && !A.sync ? (A.awaitDrain = 0, $.emit("data", X)) : (A.length += A.objectMode ? 1 : X.length, te ? A.buffer.unshift(X) : A.buffer.push(X), A.needReadable && x($)), h($, A);
  }
  function l($, A) {
    var X;
    return !s(A) && typeof A != "string" && A !== void 0 && !$.objectMode && (X = new M("chunk", ["string", "Buffer", "Uint8Array"], A)), X;
  }
  le.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, le.prototype.setEncoding = function($) {
    U || (U = Ni.StringDecoder);
    var A = new U($);
    this._readableState.decoder = A, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var X = this._readableState.buffer.head, te = ""; X !== null; )
      te += A.write(X.data), X = X.next;
    return this._readableState.buffer.clear(), te !== "" && this._readableState.buffer.push(te), this._readableState.length = te.length, this;
  };
  var u = 1073741824;
  function o($) {
    return $ >= u ? $ = u : ($--, $ |= $ >>> 1, $ |= $ >>> 2, $ |= $ >>> 4, $ |= $ >>> 8, $ |= $ >>> 16, $++), $;
  }
  function c($, A) {
    return $ <= 0 || A.length === 0 && A.ended ? 0 : A.objectMode ? 1 : $ !== $ ? A.flowing && A.length ? A.buffer.head.data.length : A.length : ($ > A.highWaterMark && (A.highWaterMark = o($)), $ <= A.length ? $ : A.ended ? A.length : (A.needReadable = !0, 0));
  }
  le.prototype.read = function($) {
    v("read", $), $ = parseInt($, 10);
    var A = this._readableState, X = $;
    if ($ !== 0 && (A.emittedReadable = !1), $ === 0 && A.needReadable && ((A.highWaterMark !== 0 ? A.length >= A.highWaterMark : A.length > 0) || A.ended))
      return v("read: emitReadable", A.length, A.ended), A.length === 0 && A.ended ? H(this) : x(this), null;
    if ($ = c($, A), $ === 0 && A.ended)
      return A.length === 0 && H(this), null;
    var te = A.needReadable;
    v("need readable", te), (A.length === 0 || A.length - $ < A.highWaterMark) && (te = !0, v("length less than watermark", te)), A.ended || A.reading ? (te = !1, v("reading or ended", te)) : te && (v("do read"), A.reading = !0, A.sync = !0, A.length === 0 && (A.needReadable = !0), this._read(A.highWaterMark), A.sync = !1, A.reading || ($ = c(X, A)));
    var pe;
    return $ > 0 ? pe = N($, A) : pe = null, pe === null ? (A.needReadable = A.length <= A.highWaterMark, $ = 0) : (A.length -= $, A.awaitDrain = 0), A.length === 0 && (A.ended || (A.needReadable = !0), X !== $ && A.ended && H(this)), pe !== null && this.emit("data", pe), pe;
  };
  function y($, A) {
    if (v("onEofChunk"), !A.ended) {
      if (A.decoder) {
        var X = A.decoder.end();
        X && X.length && (A.buffer.push(X), A.length += A.objectMode ? 1 : X.length);
      }
      A.ended = !0, A.sync ? x($) : (A.needReadable = !1, A.emittedReadable || (A.emittedReadable = !0, b($)));
    }
  }
  function x($) {
    var A = $._readableState;
    v("emitReadable", A.needReadable, A.emittedReadable), A.needReadable = !1, A.emittedReadable || (v("emitReadable", A.flowing), A.emittedReadable = !0, process.nextTick(b, $));
  }
  function b($) {
    var A = $._readableState;
    v("emitReadable_", A.destroyed, A.length, A.ended), !A.destroyed && (A.length || A.ended) && ($.emit("readable"), A.emittedReadable = !1), A.needReadable = !A.flowing && !A.ended && A.length <= A.highWaterMark, R($);
  }
  function h($, A) {
    A.readingMore || (A.readingMore = !0, process.nextTick(d, $, A));
  }
  function d($, A) {
    for (; !A.reading && !A.ended && (A.length < A.highWaterMark || A.flowing && A.length === 0); ) {
      var X = A.length;
      if (v("maybeReadMore read 0"), $.read(0), X === A.length)
        break;
    }
    A.readingMore = !1;
  }
  le.prototype._read = function($) {
    re(this, new q("_read()"));
  }, le.prototype.pipe = function($, A) {
    var X = this, te = this._readableState;
    switch (te.pipesCount) {
      case 0:
        te.pipes = $;
        break;
      case 1:
        te.pipes = [te.pipes, $];
        break;
      default:
        te.pipes.push($);
        break;
    }
    te.pipesCount += 1, v("pipe count=%d opts=%j", te.pipesCount, A);
    var pe = (!A || A.end !== !1) && $ !== process.stdout && $ !== process.stderr, z = pe ? L : ye;
    te.endEmitted ? process.nextTick(z) : X.once("end", z), $.on("unpipe", I);
    function I(F, E) {
      v("onunpipe"), F === X && E && E.hasUnpiped === !1 && (E.hasUnpiped = !0, he());
    }
    function L() {
      v("onend"), $.end();
    }
    var j = w(X);
    $.on("drain", j);
    var ie = !1;
    function he() {
      v("cleanup"), $.removeListener("close", de), $.removeListener("finish", ge), $.removeListener("drain", j), $.removeListener("error", ae), $.removeListener("unpipe", I), X.removeListener("end", L), X.removeListener("end", ye), X.removeListener("data", Y), ie = !0, te.awaitDrain && (!$._writableState || $._writableState.needDrain) && j();
    }
    X.on("data", Y);
    function Y(F) {
      v("ondata");
      var E = $.write(F);
      v("dest.write", E), E === !1 && ((te.pipesCount === 1 && te.pipes === $ || te.pipesCount > 1 && oe(te.pipes, $) !== -1) && !ie && (v("false write response, pause", te.awaitDrain), te.awaitDrain++), X.pause());
    }
    function ae(F) {
      v("onerror", F), ye(), $.removeListener("error", ae), t($, "error") === 0 && re($, F);
    }
    ve($, "error", ae);
    function de() {
      $.removeListener("finish", ge), ye();
    }
    $.once("close", de);
    function ge() {
      v("onfinish"), $.removeListener("close", de), ye();
    }
    $.once("finish", ge);
    function ye() {
      v("unpipe"), X.unpipe($);
    }
    return $.emit("pipe", X), te.flowing || (v("pipe resume"), X.resume()), $;
  };
  function w($) {
    return function() {
      var X = $._readableState;
      v("pipeOnDrain", X.awaitDrain), X.awaitDrain && X.awaitDrain--, X.awaitDrain === 0 && t($, "data") && (X.flowing = !0, R($));
    };
  }
  le.prototype.unpipe = function($) {
    var A = this._readableState, X = {
      hasUnpiped: !1
    };
    if (A.pipesCount === 0)
      return this;
    if (A.pipesCount === 1)
      return $ && $ !== A.pipes ? this : ($ || ($ = A.pipes), A.pipes = null, A.pipesCount = 0, A.flowing = !1, $ && $.emit("unpipe", this, X), this);
    if (!$) {
      var te = A.pipes, pe = A.pipesCount;
      A.pipes = null, A.pipesCount = 0, A.flowing = !1;
      for (var z = 0; z < pe; z++)
        te[z].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var I = oe(A.pipes, $);
    return I === -1 ? this : (A.pipes.splice(I, 1), A.pipesCount -= 1, A.pipesCount === 1 && (A.pipes = A.pipes[0]), $.emit("unpipe", this, X), this);
  }, le.prototype.on = function($, A) {
    var X = r.prototype.on.call(this, $, A), te = this._readableState;
    return $ === "data" ? (te.readableListening = this.listenerCount("readable") > 0, te.flowing !== !1 && this.resume()) : $ === "readable" && !te.endEmitted && !te.readableListening && (te.readableListening = te.needReadable = !0, te.flowing = !1, te.emittedReadable = !1, v("on readable", te.length, te.reading), te.length ? x(this) : te.reading || process.nextTick(S, this)), X;
  }, le.prototype.addListener = le.prototype.on, le.prototype.removeListener = function($, A) {
    var X = r.prototype.removeListener.call(this, $, A);
    return $ === "readable" && process.nextTick(p, this), X;
  }, le.prototype.removeAllListeners = function($) {
    var A = r.prototype.removeAllListeners.apply(this, arguments);
    return ($ === "readable" || $ === void 0) && process.nextTick(p, this), A;
  };
  function p($) {
    var A = $._readableState;
    A.readableListening = $.listenerCount("readable") > 0, A.resumeScheduled && !A.paused ? A.flowing = !0 : $.listenerCount("data") > 0 && $.resume();
  }
  function S($) {
    v("readable nexttick read 0"), $.read(0);
  }
  le.prototype.resume = function() {
    var $ = this._readableState;
    return $.flowing || (v("resume"), $.flowing = !$.readableListening, G(this, $)), $.paused = !1, this;
  };
  function G($, A) {
    A.resumeScheduled || (A.resumeScheduled = !0, process.nextTick(B, $, A));
  }
  function B($, A) {
    v("resume", A.reading), A.reading || $.read(0), A.resumeScheduled = !1, $.emit("resume"), R($), A.flowing && !A.reading && $.read(0);
  }
  le.prototype.pause = function() {
    return v("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (v("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function R($) {
    var A = $._readableState;
    for (v("flow", A.flowing); A.flowing && $.read() !== null; )
      ;
  }
  le.prototype.wrap = function($) {
    var A = this, X = this._readableState, te = !1;
    $.on("end", function() {
      if (v("wrapped end"), X.decoder && !X.ended) {
        var I = X.decoder.end();
        I && I.length && A.push(I);
      }
      A.push(null);
    }), $.on("data", function(I) {
      if (v("wrapped data"), X.decoder && (I = X.decoder.write(I)), !(X.objectMode && I == null) && !(!X.objectMode && (!I || !I.length))) {
        var L = A.push(I);
        L || (te = !0, $.pause());
      }
    });
    for (var pe in $)
      this[pe] === void 0 && typeof $[pe] == "function" && (this[pe] = function(L) {
        return function() {
          return $[L].apply($, arguments);
        };
      }(pe));
    for (var z = 0; z < ue.length; z++)
      $.on(ue[z], this.emit.bind(this, ue[z]));
    return this._read = function(I) {
      v("wrapped _read", I), te && (te = !1, $.resume());
    }, this;
  }, typeof Symbol == "function" && (le.prototype[Symbol.asyncIterator] = function() {
    return K === void 0 && (K = vm()), K(this);
  }), Object.defineProperty(le.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(le.prototype, "readableBuffer", {
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(le.prototype, "readableFlowing", {
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(A) {
      this._readableState && (this._readableState.flowing = A);
    }
  }), le._fromList = N, Object.defineProperty(le.prototype, "readableLength", {
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function N($, A) {
    if (A.length === 0)
      return null;
    var X;
    return A.objectMode ? X = A.buffer.shift() : !$ || $ >= A.length ? (A.decoder ? X = A.buffer.join("") : A.buffer.length === 1 ? X = A.buffer.first() : X = A.buffer.concat(A.length), A.buffer.clear()) : X = A.buffer.consume($, A.decoder), X;
  }
  function H($) {
    var A = $._readableState;
    v("endReadable", A.endEmitted), A.endEmitted || (A.ended = !0, process.nextTick(Z, A, $));
  }
  function Z($, A) {
    if (v("endReadableNT", $.endEmitted, $.length), !$.endEmitted && $.length === 0 && ($.endEmitted = !0, A.readable = !1, A.emit("end"), $.autoDestroy)) {
      var X = A._writableState;
      (!X || X.autoDestroy && X.finished) && A.destroy();
    }
  }
  typeof Symbol == "function" && (le.from = function($, A) {
    return J === void 0 && (J = ym()), J(le, $, A);
  });
  function oe($, A) {
    for (var X = 0, te = $.length; X < te; X++)
      if ($[X] === A)
        return X;
    return -1;
  }
  return Df;
}
var Gc = kr, jo = ui.codes, gm = jo.ERR_METHOD_NOT_IMPLEMENTED, bm = jo.ERR_MULTIPLE_CALLBACK, _m = jo.ERR_TRANSFORM_ALREADY_TRANSFORMING, mm = jo.ERR_TRANSFORM_WITH_LENGTH_0, Ho = Wn();
ct(kr, Ho);
function wm(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null)
    return this.emit("error", new bm());
  r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
  var a = this._readableState;
  a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
}
function kr(e) {
  if (!(this instanceof kr))
    return new kr(e);
  Ho.call(this, e), this._transformState = {
    afterTransform: wm.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", xm);
}
function xm() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
    Vc(e, t, r);
  }) : Vc(this, null, null);
}
kr.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, Ho.prototype.push.call(this, e, t);
};
kr.prototype._transform = function(e, t, r) {
  r(new gm("_transform()"));
};
kr.prototype._write = function(e, t, r) {
  var n = this._transformState;
  if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
    var a = this._readableState;
    (n.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
  }
};
kr.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
kr.prototype._destroy = function(e, t) {
  Ho.prototype._destroy.call(this, e, function(r) {
    t(r);
  });
};
function Vc(e, t, r) {
  if (t)
    return e.emit("error", t);
  if (r != null && e.push(r), e._writableState.length)
    throw new mm();
  if (e._transformState.transforming)
    throw new _m();
  return e.push(null);
}
const Mm = /* @__PURE__ */ ee({
  __proto__: null,
  default: Gc
}, [Gc]), K1 = /* @__PURE__ */ Q(Mm);
var Zc = qi, W1 = K1;
ct(qi, W1);
function qi(e) {
  if (!(this instanceof qi))
    return new qi(e);
  W1.call(this, e);
}
qi.prototype._transform = function(e, t, r) {
  r(null, e);
};
const Em = /* @__PURE__ */ ee({
  __proto__: null,
  default: Zc
}, [Zc]), Sm = /* @__PURE__ */ Q(Em);
var jf;
function Am(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var G1 = ui.codes, $m = G1.ERR_MISSING_ARGS, Rm = G1.ERR_STREAM_DESTROYED;
function Jc(e) {
  if (e)
    throw e;
}
function Bm(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Tm(e, t, r, n) {
  n = Am(n);
  var a = !1;
  e.on("close", function() {
    a = !0;
  }), jf === void 0 && (jf = Qu), jf(e, {
    readable: t,
    writable: r
  }, function(s) {
    if (s)
      return n(s);
    a = !0, n();
  });
  var i = !1;
  return function(s) {
    if (!a && !i) {
      if (i = !0, Bm(e))
        return e.abort();
      if (typeof e.destroy == "function")
        return e.destroy();
      n(s || new Rm("pipe"));
    }
  };
}
function Yc(e) {
  e();
}
function Im(e, t) {
  return e.pipe(t);
}
function Pm(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? Jc : e.pop();
}
function Om() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Pm(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new $m("streams");
  var a, i = t.map(function(s, f) {
    var v = f < t.length - 1, m = f > 0;
    return Tm(s, v, m, function(_) {
      a || (a = _), _ && i.forEach(Yc), !v && (i.forEach(Yc), n(a));
    });
  });
  return t.reduce(Im);
}
var Xc = Om;
const Lm = /* @__PURE__ */ ee({
  __proto__: null,
  default: Xc
}, [Xc]), Cm = /* @__PURE__ */ Q(Lm);
(function(e, t) {
  t = e.exports = z1(), t.Stream = t, t.Readable = t, t.Writable = j1(), t.Duplex = Wn(), t.Transform = K1, t.PassThrough = Sm, t.finished = Qu, t.pipeline = Cm;
})(za, za.exports);
const km = /* @__PURE__ */ Qe(za.exports), Nm = /* @__PURE__ */ ee({
  __proto__: null,
  default: km
}, [za.exports]), V1 = /* @__PURE__ */ Q(Nm), { Transform: qm } = V1;
var Qc = (e) => class Z1 extends qm {
  constructor(r, n, a, i, s) {
    super(s), this._rate = r, this._capacity = n, this._delimitedSuffix = a, this._hashBitLength = i, this._options = s, this._state = new e(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, a) {
    let i = null;
    try {
      this.update(r, n);
    } catch (s) {
      i = s;
    }
    a(i);
  }
  _flush(r) {
    let n = null;
    try {
      this.push(this.digest());
    } catch (a) {
      n = a;
    }
    r(n);
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  digest(r) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let n = this._state.squeeze(this._hashBitLength / 8);
    return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new Z1(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const Fm = /* @__PURE__ */ ee({
  __proto__: null,
  default: Qc
}, [Qc]), Um = /* @__PURE__ */ Q(Fm), { Transform: Dm } = V1;
var el = (e) => class J1 extends Dm {
  constructor(r, n, a, i) {
    super(i), this._rate = r, this._capacity = n, this._delimitedSuffix = a, this._options = i, this._state = new e(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, a) {
    let i = null;
    try {
      this.update(r, n);
    } catch (s) {
      i = s;
    }
    a(i);
  }
  _flush() {
  }
  _read(r) {
    this.push(this.squeeze(r));
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  squeeze(r, n) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let a = this._state.squeeze(r);
    return n !== void 0 && (a = a.toString(n)), a;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new J1(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const jm = /* @__PURE__ */ ee({
  __proto__: null,
  default: el
}, [el]), Hm = /* @__PURE__ */ Q(jm), zm = Um, Km = Hm;
var tl = function(e) {
  const t = zm(e), r = Km(e);
  return function(n, a) {
    switch (typeof n == "string" ? n.toLowerCase() : n) {
      case "keccak224":
        return new t(1152, 448, null, 224, a);
      case "keccak256":
        return new t(1088, 512, null, 256, a);
      case "keccak384":
        return new t(832, 768, null, 384, a);
      case "keccak512":
        return new t(576, 1024, null, 512, a);
      case "sha3-224":
        return new t(1152, 448, 6, 224, a);
      case "sha3-256":
        return new t(1088, 512, 6, 256, a);
      case "sha3-384":
        return new t(832, 768, 6, 384, a);
      case "sha3-512":
        return new t(576, 1024, 6, 512, a);
      case "shake128":
        return new r(1344, 256, 31, a);
      case "shake256":
        return new r(1088, 512, 31, a);
      default:
        throw new Error("Invald algorithm: " + n);
    }
  };
};
const Wm = /* @__PURE__ */ ee({
  __proto__: null,
  default: tl
}, [tl]), Gm = /* @__PURE__ */ Q(Wm);
var Js = {};
const rl = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
var Vm = Js.p1600 = function(e) {
  for (let t = 0; t < 24; ++t) {
    const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], v = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], _ = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], O = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let P = _ ^ (a << 1 | i >>> 31), C = O ^ (i << 1 | a >>> 31);
    const M = e[0] ^ P, k = e[1] ^ C, q = e[10] ^ P, D = e[11] ^ C, U = e[20] ^ P, K = e[21] ^ C, J = e[30] ^ P, re = e[31] ^ C, ue = e[40] ^ P, ve = e[41] ^ C;
    P = r ^ (s << 1 | f >>> 31), C = n ^ (f << 1 | s >>> 31);
    const se = e[2] ^ P, le = e[3] ^ C, V = e[12] ^ P, g = e[13] ^ C, l = e[22] ^ P, u = e[23] ^ C, o = e[32] ^ P, c = e[33] ^ C, y = e[42] ^ P, x = e[43] ^ C;
    P = a ^ (v << 1 | m >>> 31), C = i ^ (m << 1 | v >>> 31);
    const b = e[4] ^ P, h = e[5] ^ C, d = e[14] ^ P, w = e[15] ^ C, p = e[24] ^ P, S = e[25] ^ C, G = e[34] ^ P, B = e[35] ^ C, R = e[44] ^ P, N = e[45] ^ C;
    P = s ^ (_ << 1 | O >>> 31), C = f ^ (O << 1 | _ >>> 31);
    const H = e[6] ^ P, Z = e[7] ^ C, oe = e[16] ^ P, $ = e[17] ^ C, A = e[26] ^ P, X = e[27] ^ C, te = e[36] ^ P, pe = e[37] ^ C, z = e[46] ^ P, I = e[47] ^ C;
    P = v ^ (r << 1 | n >>> 31), C = m ^ (n << 1 | r >>> 31);
    const L = e[8] ^ P, j = e[9] ^ C, ie = e[18] ^ P, he = e[19] ^ C, Y = e[28] ^ P, ae = e[29] ^ C, de = e[38] ^ P, ge = e[39] ^ C, ye = e[48] ^ P, F = e[49] ^ C, E = M, T = k, W = D << 4 | q >>> 28, ne = q << 4 | D >>> 28, fe = U << 3 | K >>> 29, ce = K << 3 | U >>> 29, me = re << 9 | J >>> 23, _e = J << 9 | re >>> 23, be = ue << 18 | ve >>> 14, Te = ve << 18 | ue >>> 14, we = se << 1 | le >>> 31, xe = le << 1 | se >>> 31, Ke = g << 12 | V >>> 20, Pe = V << 12 | g >>> 20, Me = l << 10 | u >>> 22, We = u << 10 | l >>> 22, Oe = c << 13 | o >>> 19, Ee = o << 13 | c >>> 19, Ge = y << 2 | x >>> 30, Le = x << 2 | y >>> 30, Se = h << 30 | b >>> 2, Ve = b << 30 | h >>> 2, Ce = d << 6 | w >>> 26, Ae = w << 6 | d >>> 26, Ze = S << 11 | p >>> 21, ke = p << 11 | S >>> 21, $e = G << 15 | B >>> 17, Je = B << 15 | G >>> 17, Ne = N << 29 | R >>> 3, Re = R << 29 | N >>> 3, Ye = H << 28 | Z >>> 4, qe = Z << 28 | H >>> 4, Be = $ << 23 | oe >>> 9, He = oe << 23 | $ >>> 9, Ue = A << 25 | X >>> 7, De = X << 25 | A >>> 7, pt = te << 21 | pe >>> 11, vt = pe << 21 | te >>> 11, yt = I << 24 | z >>> 8, gt = z << 24 | I >>> 8, bt = L << 27 | j >>> 5, Lt = j << 27 | L >>> 5, Ct = ie << 20 | he >>> 12, kt = he << 20 | ie >>> 12, Nt = ae << 7 | Y >>> 25, qt = Y << 7 | ae >>> 25, Ft = de << 8 | ge >>> 24, Ut = ge << 8 | de >>> 24, Dt = ye << 14 | F >>> 18, jt = F << 14 | ye >>> 18;
    e[0] = E ^ ~Ke & Ze, e[1] = T ^ ~Pe & ke, e[10] = Ye ^ ~Ct & fe, e[11] = qe ^ ~kt & ce, e[20] = we ^ ~Ce & Ue, e[21] = xe ^ ~Ae & De, e[30] = bt ^ ~W & Me, e[31] = Lt ^ ~ne & We, e[40] = Se ^ ~Be & Nt, e[41] = Ve ^ ~He & qt, e[2] = Ke ^ ~Ze & pt, e[3] = Pe ^ ~ke & vt, e[12] = Ct ^ ~fe & Oe, e[13] = kt ^ ~ce & Ee, e[22] = Ce ^ ~Ue & Ft, e[23] = Ae ^ ~De & Ut, e[32] = W ^ ~Me & $e, e[33] = ne ^ ~We & Je, e[42] = Be ^ ~Nt & me, e[43] = He ^ ~qt & _e, e[4] = Ze ^ ~pt & Dt, e[5] = ke ^ ~vt & jt, e[14] = fe ^ ~Oe & Ne, e[15] = ce ^ ~Ee & Re, e[24] = Ue ^ ~Ft & be, e[25] = De ^ ~Ut & Te, e[34] = Me ^ ~$e & yt, e[35] = We ^ ~Je & gt, e[44] = Nt ^ ~me & Ge, e[45] = qt ^ ~_e & Le, e[6] = pt ^ ~Dt & E, e[7] = vt ^ ~jt & T, e[16] = Oe ^ ~Ne & Ye, e[17] = Ee ^ ~Re & qe, e[26] = Ft ^ ~be & we, e[27] = Ut ^ ~Te & xe, e[36] = $e ^ ~yt & bt, e[37] = Je ^ ~gt & Lt, e[46] = me ^ ~Ge & Se, e[47] = _e ^ ~Le & Ve, e[8] = Dt ^ ~E & Ke, e[9] = jt ^ ~T & Pe, e[18] = Ne ^ ~Ye & Ct, e[19] = Re ^ ~qe & kt, e[28] = be ^ ~we & Ce, e[29] = Te ^ ~xe & Ae, e[38] = yt ^ ~bt & W, e[39] = gt ^ ~Lt & ne, e[48] = Ge ^ ~Se & Be, e[49] = Le ^ ~Ve & He, e[0] ^= rl[t * 2], e[1] ^= rl[t * 2 + 1];
  }
};
const Zm = /* @__PURE__ */ ee({
  __proto__: null,
  p1600: Vm,
  default: Js
}, [Js]), Jm = /* @__PURE__ */ Q(Zm), Ga = Jm;
function ci() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
ci.prototype.initialize = function(e, t) {
  for (let r = 0; r < 50; ++r)
    this.state[r] = 0;
  this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
};
ci.prototype.absorb = function(e) {
  for (let t = 0; t < e.length; ++t)
    this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (Ga.p1600(this.state), this.count = 0);
};
ci.prototype.absorbLastFewBits = function(e) {
  this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), (e & 128) !== 0 && this.count === this.blockSize - 1 && Ga.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), Ga.p1600(this.state), this.count = 0, this.squeezing = !0;
};
ci.prototype.squeeze = function(e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let r = 0; r < e; ++r)
    t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (Ga.p1600(this.state), this.count = 0);
  return t;
};
ci.prototype.copy = function(e) {
  for (let t = 0; t < 50; ++t)
    e.state[t] = this.state[t];
  e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
};
var nl = ci;
const Ym = /* @__PURE__ */ ee({
  __proto__: null,
  default: nl
}, [nl]), Xm = /* @__PURE__ */ Q(Ym);
var il = Gm(Xm);
const Qm = /* @__PURE__ */ ee({
  __proto__: null,
  default: il
}, [il]), e3 = /* @__PURE__ */ Q(Qm);
Object.defineProperty(vn, "__esModule", { value: !0 });
var zo = l_, Ko = e3, t3 = vn.keccak224 = zo.createHashFunction(function() {
  return Ko("keccak224");
}), r3 = vn.keccak256 = zo.createHashFunction(function() {
  return Ko("keccak256");
}), n3 = vn.keccak384 = zo.createHashFunction(function() {
  return Ko("keccak384");
}), i3 = vn.keccak512 = zo.createHashFunction(function() {
  return Ko("keccak512");
});
const a3 = /* @__PURE__ */ ee({
  __proto__: null,
  keccak224: t3,
  keccak256: r3,
  keccak384: n3,
  keccak512: i3,
  default: vn
}, [vn]), Y1 = /* @__PURE__ */ Q(a3);
var e0 = {};
const rt = {
  IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
  TWEAK_ADD: "The tweak was out of range or the resulted private key is invalid",
  TWEAK_MUL: "The tweak was out of range or equal to zero",
  CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
  SECKEY_INVALID: "Private Key is invalid",
  PUBKEY_PARSE: "Public Key could not be parsed",
  PUBKEY_SERIALIZE: "Public Key serialization error",
  PUBKEY_COMBINE: "The sum of the public keys is not valid",
  SIG_PARSE: "Signature could not be parsed",
  SIGN: "The nonce generation function failed, or the private key was invalid",
  RECOVER: "Public key could not be recover",
  ECDH: "Scalar was invalid (zero or overflow)"
};
function Yt(e, t) {
  if (!e)
    throw new Error(t);
}
function et(e, t, r) {
  if (Yt(t instanceof Uint8Array, `Expected ${e} to be an Uint8Array`), r !== void 0)
    if (Array.isArray(r)) {
      const n = r.join(", "), a = `Expected ${e} to be an Uint8Array with length [${n}]`;
      Yt(r.includes(t.length), a);
    } else {
      const n = `Expected ${e} to be an Uint8Array with length ${r}`;
      Yt(t.length === r, n);
    }
}
function tn(e) {
  Yt(kn(e) === "Boolean", "Expected compressed to be a Boolean");
}
function ur(e = (r) => new Uint8Array(r), t) {
  return typeof e == "function" && (e = e(t)), et("output", e, t), e;
}
function kn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
var al = (e) => ({
  contextRandomize(t) {
    switch (Yt(
      t === null || t instanceof Uint8Array,
      "Expected seed to be an Uint8Array or null"
    ), t !== null && et("seed", t, 32), e.contextRandomize(t)) {
      case 1:
        throw new Error(rt.CONTEXT_RANDOMIZE_UNKNOW);
    }
  },
  privateKeyVerify(t) {
    return et("private key", t, 32), e.privateKeyVerify(t) === 0;
  },
  privateKeyNegate(t) {
    switch (et("private key", t, 32), e.privateKeyNegate(t)) {
      case 0:
        return t;
      case 1:
        throw new Error(rt.IMPOSSIBLE_CASE);
    }
  },
  privateKeyTweakAdd(t, r) {
    switch (et("private key", t, 32), et("tweak", r, 32), e.privateKeyTweakAdd(t, r)) {
      case 0:
        return t;
      case 1:
        throw new Error(rt.TWEAK_ADD);
    }
  },
  privateKeyTweakMul(t, r) {
    switch (et("private key", t, 32), et("tweak", r, 32), e.privateKeyTweakMul(t, r)) {
      case 0:
        return t;
      case 1:
        throw new Error(rt.TWEAK_MUL);
    }
  },
  publicKeyVerify(t) {
    return et("public key", t, [33, 65]), e.publicKeyVerify(t) === 0;
  },
  publicKeyCreate(t, r = !0, n) {
    switch (et("private key", t, 32), tn(r), n = ur(n, r ? 33 : 65), e.publicKeyCreate(n, t)) {
      case 0:
        return n;
      case 1:
        throw new Error(rt.SECKEY_INVALID);
      case 2:
        throw new Error(rt.PUBKEY_SERIALIZE);
    }
  },
  publicKeyConvert(t, r = !0, n) {
    switch (et("public key", t, [33, 65]), tn(r), n = ur(n, r ? 33 : 65), e.publicKeyConvert(n, t)) {
      case 0:
        return n;
      case 1:
        throw new Error(rt.PUBKEY_PARSE);
      case 2:
        throw new Error(rt.PUBKEY_SERIALIZE);
    }
  },
  publicKeyNegate(t, r = !0, n) {
    switch (et("public key", t, [33, 65]), tn(r), n = ur(n, r ? 33 : 65), e.publicKeyNegate(n, t)) {
      case 0:
        return n;
      case 1:
        throw new Error(rt.PUBKEY_PARSE);
      case 2:
        throw new Error(rt.IMPOSSIBLE_CASE);
      case 3:
        throw new Error(rt.PUBKEY_SERIALIZE);
    }
  },
  publicKeyCombine(t, r = !0, n) {
    Yt(Array.isArray(t), "Expected public keys to be an Array"), Yt(t.length > 0, "Expected public keys array will have more than zero items");
    for (const a of t)
      et("public key", a, [33, 65]);
    switch (tn(r), n = ur(n, r ? 33 : 65), e.publicKeyCombine(n, t)) {
      case 0:
        return n;
      case 1:
        throw new Error(rt.PUBKEY_PARSE);
      case 2:
        throw new Error(rt.PUBKEY_COMBINE);
      case 3:
        throw new Error(rt.PUBKEY_SERIALIZE);
    }
  },
  publicKeyTweakAdd(t, r, n = !0, a) {
    switch (et("public key", t, [33, 65]), et("tweak", r, 32), tn(n), a = ur(a, n ? 33 : 65), e.publicKeyTweakAdd(a, t, r)) {
      case 0:
        return a;
      case 1:
        throw new Error(rt.PUBKEY_PARSE);
      case 2:
        throw new Error(rt.TWEAK_ADD);
    }
  },
  publicKeyTweakMul(t, r, n = !0, a) {
    switch (et("public key", t, [33, 65]), et("tweak", r, 32), tn(n), a = ur(a, n ? 33 : 65), e.publicKeyTweakMul(a, t, r)) {
      case 0:
        return a;
      case 1:
        throw new Error(rt.PUBKEY_PARSE);
      case 2:
        throw new Error(rt.TWEAK_MUL);
    }
  },
  signatureNormalize(t) {
    switch (et("signature", t, 64), e.signatureNormalize(t)) {
      case 0:
        return t;
      case 1:
        throw new Error(rt.SIG_PARSE);
    }
  },
  signatureExport(t, r) {
    et("signature", t, 64), r = ur(r, 72);
    const n = { output: r, outputlen: 72 };
    switch (e.signatureExport(n, t)) {
      case 0:
        return r.slice(0, n.outputlen);
      case 1:
        throw new Error(rt.SIG_PARSE);
      case 2:
        throw new Error(rt.IMPOSSIBLE_CASE);
    }
  },
  signatureImport(t, r) {
    switch (et("signature", t), r = ur(r, 64), e.signatureImport(r, t)) {
      case 0:
        return r;
      case 1:
        throw new Error(rt.SIG_PARSE);
      case 2:
        throw new Error(rt.IMPOSSIBLE_CASE);
    }
  },
  ecdsaSign(t, r, n = {}, a) {
    et("message", t, 32), et("private key", r, 32), Yt(kn(n) === "Object", "Expected options to be an Object"), n.data !== void 0 && et("options.data", n.data), n.noncefn !== void 0 && Yt(kn(n.noncefn) === "Function", "Expected options.noncefn to be a Function"), a = ur(a, 64);
    const i = { signature: a, recid: null };
    switch (e.ecdsaSign(i, t, r, n.data, n.noncefn)) {
      case 0:
        return i;
      case 1:
        throw new Error(rt.SIGN);
      case 2:
        throw new Error(rt.IMPOSSIBLE_CASE);
    }
  },
  ecdsaVerify(t, r, n) {
    switch (et("signature", t, 64), et("message", r, 32), et("public key", n, [33, 65]), e.ecdsaVerify(t, r, n)) {
      case 0:
        return !0;
      case 3:
        return !1;
      case 1:
        throw new Error(rt.SIG_PARSE);
      case 2:
        throw new Error(rt.PUBKEY_PARSE);
    }
  },
  ecdsaRecover(t, r, n, a = !0, i) {
    switch (et("signature", t, 64), Yt(
      kn(r) === "Number" && r >= 0 && r <= 3,
      "Expected recovery id to be a Number within interval [0, 3]"
    ), et("message", n, 32), tn(a), i = ur(i, a ? 33 : 65), e.ecdsaRecover(i, t, r, n)) {
      case 0:
        return i;
      case 1:
        throw new Error(rt.SIG_PARSE);
      case 2:
        throw new Error(rt.RECOVER);
      case 3:
        throw new Error(rt.IMPOSSIBLE_CASE);
    }
  },
  ecdh(t, r, n = {}, a) {
    switch (et("public key", t, [33, 65]), et("private key", r, 32), Yt(kn(n) === "Object", "Expected options to be an Object"), n.data !== void 0 && et("options.data", n.data), n.hashfn !== void 0 ? (Yt(kn(n.hashfn) === "Function", "Expected options.hashfn to be a Function"), n.xbuf !== void 0 && et("options.xbuf", n.xbuf, 32), n.ybuf !== void 0 && et("options.ybuf", n.ybuf, 32), et("output", a)) : a = ur(a, 32), e.ecdh(a, t, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
      case 0:
        return a;
      case 1:
        throw new Error(rt.PUBKEY_PARSE);
      case 2:
        throw new Error(rt.ECDH);
    }
  }
});
const o3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: al
}, [al]), f3 = /* @__PURE__ */ Q(o3);
var Ys = {};
const s3 = "elliptic", u3 = "6.5.4", c3 = "EC cryptography", l3 = "lib/elliptic.js", h3 = [
  "lib"
], d3 = {
  lint: "eslint lib test",
  "lint:fix": "npm run lint -- --fix",
  unit: "istanbul test _mocha --reporter=spec test/index.js",
  test: "npm run lint && npm run unit",
  version: "grunt dist && git add dist/"
}, p3 = {
  type: "git",
  url: "git@github.com:indutny/elliptic"
}, v3 = [
  "EC",
  "Elliptic",
  "curve",
  "Cryptography"
], y3 = "Fedor Indutny <fedor@indutny.com>", g3 = "MIT", b3 = {
  url: "https://github.com/indutny/elliptic/issues"
}, _3 = "https://github.com/indutny/elliptic", m3 = {
  brfs: "^2.0.2",
  coveralls: "^3.1.0",
  eslint: "^7.6.0",
  grunt: "^1.2.1",
  "grunt-browserify": "^5.3.0",
  "grunt-cli": "^1.3.2",
  "grunt-contrib-connect": "^3.0.0",
  "grunt-contrib-copy": "^1.0.0",
  "grunt-contrib-uglify": "^5.0.0",
  "grunt-mocha-istanbul": "^5.0.2",
  "grunt-saucelabs": "^9.0.1",
  istanbul: "^0.4.5",
  mocha: "^8.0.1"
}, w3 = {
  "bn.js": "^4.11.9",
  brorand: "^1.1.0",
  "hash.js": "^1.0.0",
  "hmac-drbg": "^1.0.1",
  inherits: "^2.0.4",
  "minimalistic-assert": "^1.0.1",
  "minimalistic-crypto-utils": "^1.0.1"
}, x3 = {
  name: s3,
  version: u3,
  description: c3,
  main: l3,
  files: h3,
  scripts: d3,
  repository: p3,
  keywords: v3,
  author: y3,
  license: g3,
  bugs: b3,
  homepage: _3,
  devDependencies: m3,
  dependencies: w3
};
var Xs = {}, t0 = { exports: {} };
(function(e) {
  (function(t, r) {
    function n(g, l) {
      if (!g)
        throw new Error(l || "Assertion failed");
    }
    function a(g, l) {
      g.super_ = l;
      var u = function() {
      };
      u.prototype = l.prototype, g.prototype = new u(), g.prototype.constructor = g;
    }
    function i(g, l, u) {
      if (i.isBN(g))
        return g;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, g !== null && ((l === "le" || l === "be") && (u = l, l = 10), this._init(g || 0, l || 10, u || "be"));
    }
    typeof t == "object" ? t.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var s;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = er.Buffer;
    } catch {
    }
    i.isBN = function(l) {
      return l instanceof i ? !0 : l !== null && typeof l == "object" && l.constructor.wordSize === i.wordSize && Array.isArray(l.words);
    }, i.max = function(l, u) {
      return l.cmp(u) > 0 ? l : u;
    }, i.min = function(l, u) {
      return l.cmp(u) < 0 ? l : u;
    }, i.prototype._init = function(l, u, o) {
      if (typeof l == "number")
        return this._initNumber(l, u, o);
      if (typeof l == "object")
        return this._initArray(l, u, o);
      u === "hex" && (u = 16), n(u === (u | 0) && u >= 2 && u <= 36), l = l.toString().replace(/\s+/g, "");
      var c = 0;
      l[0] === "-" && (c++, this.negative = 1), c < l.length && (u === 16 ? this._parseHex(l, c, o) : (this._parseBase(l, u, c), o === "le" && this._initArray(this.toArray(), u, o)));
    }, i.prototype._initNumber = function(l, u, o) {
      l < 0 && (this.negative = 1, l = -l), l < 67108864 ? (this.words = [l & 67108863], this.length = 1) : l < 4503599627370496 ? (this.words = [
        l & 67108863,
        l / 67108864 & 67108863
      ], this.length = 2) : (n(l < 9007199254740992), this.words = [
        l & 67108863,
        l / 67108864 & 67108863,
        1
      ], this.length = 3), o === "le" && this._initArray(this.toArray(), u, o);
    }, i.prototype._initArray = function(l, u, o) {
      if (n(typeof l.length == "number"), l.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(l.length / 3), this.words = new Array(this.length);
      for (var c = 0; c < this.length; c++)
        this.words[c] = 0;
      var y, x, b = 0;
      if (o === "be")
        for (c = l.length - 1, y = 0; c >= 0; c -= 3)
          x = l[c] | l[c - 1] << 8 | l[c - 2] << 16, this.words[y] |= x << b & 67108863, this.words[y + 1] = x >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, y++);
      else if (o === "le")
        for (c = 0, y = 0; c < l.length; c += 3)
          x = l[c] | l[c + 1] << 8 | l[c + 2] << 16, this.words[y] |= x << b & 67108863, this.words[y + 1] = x >>> 26 - b & 67108863, b += 24, b >= 26 && (b -= 26, y++);
      return this.strip();
    };
    function f(g, l) {
      var u = g.charCodeAt(l);
      return u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : u - 48 & 15;
    }
    function v(g, l, u) {
      var o = f(g, u);
      return u - 1 >= l && (o |= f(g, u - 1) << 4), o;
    }
    i.prototype._parseHex = function(l, u, o) {
      this.length = Math.ceil((l.length - u) / 6), this.words = new Array(this.length);
      for (var c = 0; c < this.length; c++)
        this.words[c] = 0;
      var y = 0, x = 0, b;
      if (o === "be")
        for (c = l.length - 1; c >= u; c -= 2)
          b = v(l, u, c) << y, this.words[x] |= b & 67108863, y >= 18 ? (y -= 18, x += 1, this.words[x] |= b >>> 26) : y += 8;
      else {
        var h = l.length - u;
        for (c = h % 2 === 0 ? u + 1 : u; c < l.length; c += 2)
          b = v(l, u, c) << y, this.words[x] |= b & 67108863, y >= 18 ? (y -= 18, x += 1, this.words[x] |= b >>> 26) : y += 8;
      }
      this.strip();
    };
    function m(g, l, u, o) {
      for (var c = 0, y = Math.min(g.length, u), x = l; x < y; x++) {
        var b = g.charCodeAt(x) - 48;
        c *= o, b >= 49 ? c += b - 49 + 10 : b >= 17 ? c += b - 17 + 10 : c += b;
      }
      return c;
    }
    i.prototype._parseBase = function(l, u, o) {
      this.words = [0], this.length = 1;
      for (var c = 0, y = 1; y <= 67108863; y *= u)
        c++;
      c--, y = y / u | 0;
      for (var x = l.length - o, b = x % c, h = Math.min(x, x - b) + o, d = 0, w = o; w < h; w += c)
        d = m(l, w, w + c, u), this.imuln(y), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
      if (b !== 0) {
        var p = 1;
        for (d = m(l, w, l.length, u), w = 0; w < b; w++)
          p *= u;
        this.imuln(p), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
      }
      this.strip();
    }, i.prototype.copy = function(l) {
      l.words = new Array(this.length);
      for (var u = 0; u < this.length; u++)
        l.words[u] = this.words[u];
      l.length = this.length, l.negative = this.negative, l.red = this.red;
    }, i.prototype.clone = function() {
      var l = new i(null);
      return this.copy(l), l;
    }, i.prototype._expand = function(l) {
      for (; this.length < l; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, i.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var _ = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], O = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], P = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(l, u) {
      l = l || 10, u = u | 0 || 1;
      var o;
      if (l === 16 || l === "hex") {
        o = "";
        for (var c = 0, y = 0, x = 0; x < this.length; x++) {
          var b = this.words[x], h = ((b << c | y) & 16777215).toString(16);
          y = b >>> 24 - c & 16777215, y !== 0 || x !== this.length - 1 ? o = _[6 - h.length] + h + o : o = h + o, c += 2, c >= 26 && (c -= 26, x--);
        }
        for (y !== 0 && (o = y.toString(16) + o); o.length % u !== 0; )
          o = "0" + o;
        return this.negative !== 0 && (o = "-" + o), o;
      }
      if (l === (l | 0) && l >= 2 && l <= 36) {
        var d = O[l], w = P[l];
        o = "";
        var p = this.clone();
        for (p.negative = 0; !p.isZero(); ) {
          var S = p.modn(w).toString(l);
          p = p.idivn(w), p.isZero() ? o = S + o : o = _[d - S.length] + S + o;
        }
        for (this.isZero() && (o = "0" + o); o.length % u !== 0; )
          o = "0" + o;
        return this.negative !== 0 && (o = "-" + o), o;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var l = this.words[0];
      return this.length === 2 ? l += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? l += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -l : l;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(l, u) {
      return n(typeof s < "u"), this.toArrayLike(s, l, u);
    }, i.prototype.toArray = function(l, u) {
      return this.toArrayLike(Array, l, u);
    }, i.prototype.toArrayLike = function(l, u, o) {
      var c = this.byteLength(), y = o || Math.max(1, c);
      n(c <= y, "byte array longer than desired length"), n(y > 0, "Requested array length <= 0"), this.strip();
      var x = u === "le", b = new l(y), h, d, w = this.clone();
      if (x) {
        for (d = 0; !w.isZero(); d++)
          h = w.andln(255), w.iushrn(8), b[d] = h;
        for (; d < y; d++)
          b[d] = 0;
      } else {
        for (d = 0; d < y - c; d++)
          b[d] = 0;
        for (d = 0; !w.isZero(); d++)
          h = w.andln(255), w.iushrn(8), b[y - d - 1] = h;
      }
      return b;
    }, Math.clz32 ? i.prototype._countBits = function(l) {
      return 32 - Math.clz32(l);
    } : i.prototype._countBits = function(l) {
      var u = l, o = 0;
      return u >= 4096 && (o += 13, u >>>= 13), u >= 64 && (o += 7, u >>>= 7), u >= 8 && (o += 4, u >>>= 4), u >= 2 && (o += 2, u >>>= 2), o + u;
    }, i.prototype._zeroBits = function(l) {
      if (l === 0)
        return 26;
      var u = l, o = 0;
      return (u & 8191) === 0 && (o += 13, u >>>= 13), (u & 127) === 0 && (o += 7, u >>>= 7), (u & 15) === 0 && (o += 4, u >>>= 4), (u & 3) === 0 && (o += 2, u >>>= 2), (u & 1) === 0 && o++, o;
    }, i.prototype.bitLength = function() {
      var l = this.words[this.length - 1], u = this._countBits(l);
      return (this.length - 1) * 26 + u;
    };
    function C(g) {
      for (var l = new Array(g.bitLength()), u = 0; u < l.length; u++) {
        var o = u / 26 | 0, c = u % 26;
        l[u] = (g.words[o] & 1 << c) >>> c;
      }
      return l;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var l = 0, u = 0; u < this.length; u++) {
        var o = this._zeroBits(this.words[u]);
        if (l += o, o !== 26)
          break;
      }
      return l;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(l) {
      return this.negative !== 0 ? this.abs().inotn(l).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(l) {
      return this.testn(l - 1) ? this.notn(l).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(l) {
      for (; this.length < l.length; )
        this.words[this.length++] = 0;
      for (var u = 0; u < l.length; u++)
        this.words[u] = this.words[u] | l.words[u];
      return this.strip();
    }, i.prototype.ior = function(l) {
      return n((this.negative | l.negative) === 0), this.iuor(l);
    }, i.prototype.or = function(l) {
      return this.length > l.length ? this.clone().ior(l) : l.clone().ior(this);
    }, i.prototype.uor = function(l) {
      return this.length > l.length ? this.clone().iuor(l) : l.clone().iuor(this);
    }, i.prototype.iuand = function(l) {
      var u;
      this.length > l.length ? u = l : u = this;
      for (var o = 0; o < u.length; o++)
        this.words[o] = this.words[o] & l.words[o];
      return this.length = u.length, this.strip();
    }, i.prototype.iand = function(l) {
      return n((this.negative | l.negative) === 0), this.iuand(l);
    }, i.prototype.and = function(l) {
      return this.length > l.length ? this.clone().iand(l) : l.clone().iand(this);
    }, i.prototype.uand = function(l) {
      return this.length > l.length ? this.clone().iuand(l) : l.clone().iuand(this);
    }, i.prototype.iuxor = function(l) {
      var u, o;
      this.length > l.length ? (u = this, o = l) : (u = l, o = this);
      for (var c = 0; c < o.length; c++)
        this.words[c] = u.words[c] ^ o.words[c];
      if (this !== u)
        for (; c < u.length; c++)
          this.words[c] = u.words[c];
      return this.length = u.length, this.strip();
    }, i.prototype.ixor = function(l) {
      return n((this.negative | l.negative) === 0), this.iuxor(l);
    }, i.prototype.xor = function(l) {
      return this.length > l.length ? this.clone().ixor(l) : l.clone().ixor(this);
    }, i.prototype.uxor = function(l) {
      return this.length > l.length ? this.clone().iuxor(l) : l.clone().iuxor(this);
    }, i.prototype.inotn = function(l) {
      n(typeof l == "number" && l >= 0);
      var u = Math.ceil(l / 26) | 0, o = l % 26;
      this._expand(u), o > 0 && u--;
      for (var c = 0; c < u; c++)
        this.words[c] = ~this.words[c] & 67108863;
      return o > 0 && (this.words[c] = ~this.words[c] & 67108863 >> 26 - o), this.strip();
    }, i.prototype.notn = function(l) {
      return this.clone().inotn(l);
    }, i.prototype.setn = function(l, u) {
      n(typeof l == "number" && l >= 0);
      var o = l / 26 | 0, c = l % 26;
      return this._expand(o + 1), u ? this.words[o] = this.words[o] | 1 << c : this.words[o] = this.words[o] & ~(1 << c), this.strip();
    }, i.prototype.iadd = function(l) {
      var u;
      if (this.negative !== 0 && l.negative === 0)
        return this.negative = 0, u = this.isub(l), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && l.negative !== 0)
        return l.negative = 0, u = this.isub(l), l.negative = 1, u._normSign();
      var o, c;
      this.length > l.length ? (o = this, c = l) : (o = l, c = this);
      for (var y = 0, x = 0; x < c.length; x++)
        u = (o.words[x] | 0) + (c.words[x] | 0) + y, this.words[x] = u & 67108863, y = u >>> 26;
      for (; y !== 0 && x < o.length; x++)
        u = (o.words[x] | 0) + y, this.words[x] = u & 67108863, y = u >>> 26;
      if (this.length = o.length, y !== 0)
        this.words[this.length] = y, this.length++;
      else if (o !== this)
        for (; x < o.length; x++)
          this.words[x] = o.words[x];
      return this;
    }, i.prototype.add = function(l) {
      var u;
      return l.negative !== 0 && this.negative === 0 ? (l.negative = 0, u = this.sub(l), l.negative ^= 1, u) : l.negative === 0 && this.negative !== 0 ? (this.negative = 0, u = l.sub(this), this.negative = 1, u) : this.length > l.length ? this.clone().iadd(l) : l.clone().iadd(this);
    }, i.prototype.isub = function(l) {
      if (l.negative !== 0) {
        l.negative = 0;
        var u = this.iadd(l);
        return l.negative = 1, u._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(l), this.negative = 1, this._normSign();
      var o = this.cmp(l);
      if (o === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var c, y;
      o > 0 ? (c = this, y = l) : (c = l, y = this);
      for (var x = 0, b = 0; b < y.length; b++)
        u = (c.words[b] | 0) - (y.words[b] | 0) + x, x = u >> 26, this.words[b] = u & 67108863;
      for (; x !== 0 && b < c.length; b++)
        u = (c.words[b] | 0) + x, x = u >> 26, this.words[b] = u & 67108863;
      if (x === 0 && b < c.length && c !== this)
        for (; b < c.length; b++)
          this.words[b] = c.words[b];
      return this.length = Math.max(this.length, b), c !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(l) {
      return this.clone().isub(l);
    };
    function M(g, l, u) {
      u.negative = l.negative ^ g.negative;
      var o = g.length + l.length | 0;
      u.length = o, o = o - 1 | 0;
      var c = g.words[0] | 0, y = l.words[0] | 0, x = c * y, b = x & 67108863, h = x / 67108864 | 0;
      u.words[0] = b;
      for (var d = 1; d < o; d++) {
        for (var w = h >>> 26, p = h & 67108863, S = Math.min(d, l.length - 1), G = Math.max(0, d - g.length + 1); G <= S; G++) {
          var B = d - G | 0;
          c = g.words[B] | 0, y = l.words[G] | 0, x = c * y + p, w += x / 67108864 | 0, p = x & 67108863;
        }
        u.words[d] = p | 0, h = w | 0;
      }
      return h !== 0 ? u.words[d] = h | 0 : u.length--, u.strip();
    }
    var k = function(l, u, o) {
      var c = l.words, y = u.words, x = o.words, b = 0, h, d, w, p = c[0] | 0, S = p & 8191, G = p >>> 13, B = c[1] | 0, R = B & 8191, N = B >>> 13, H = c[2] | 0, Z = H & 8191, oe = H >>> 13, $ = c[3] | 0, A = $ & 8191, X = $ >>> 13, te = c[4] | 0, pe = te & 8191, z = te >>> 13, I = c[5] | 0, L = I & 8191, j = I >>> 13, ie = c[6] | 0, he = ie & 8191, Y = ie >>> 13, ae = c[7] | 0, de = ae & 8191, ge = ae >>> 13, ye = c[8] | 0, F = ye & 8191, E = ye >>> 13, T = c[9] | 0, W = T & 8191, ne = T >>> 13, fe = y[0] | 0, ce = fe & 8191, me = fe >>> 13, _e = y[1] | 0, be = _e & 8191, Te = _e >>> 13, we = y[2] | 0, xe = we & 8191, Ke = we >>> 13, Pe = y[3] | 0, Me = Pe & 8191, We = Pe >>> 13, Oe = y[4] | 0, Ee = Oe & 8191, Ge = Oe >>> 13, Le = y[5] | 0, Se = Le & 8191, Ve = Le >>> 13, Ce = y[6] | 0, Ae = Ce & 8191, Ze = Ce >>> 13, ke = y[7] | 0, $e = ke & 8191, Je = ke >>> 13, Ne = y[8] | 0, Re = Ne & 8191, Ye = Ne >>> 13, qe = y[9] | 0, Be = qe & 8191, He = qe >>> 13;
      o.negative = l.negative ^ u.negative, o.length = 19, h = Math.imul(S, ce), d = Math.imul(S, me), d = d + Math.imul(G, ce) | 0, w = Math.imul(G, me);
      var Ue = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Ue >>> 26) | 0, Ue &= 67108863, h = Math.imul(R, ce), d = Math.imul(R, me), d = d + Math.imul(N, ce) | 0, w = Math.imul(N, me), h = h + Math.imul(S, be) | 0, d = d + Math.imul(S, Te) | 0, d = d + Math.imul(G, be) | 0, w = w + Math.imul(G, Te) | 0;
      var De = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, h = Math.imul(Z, ce), d = Math.imul(Z, me), d = d + Math.imul(oe, ce) | 0, w = Math.imul(oe, me), h = h + Math.imul(R, be) | 0, d = d + Math.imul(R, Te) | 0, d = d + Math.imul(N, be) | 0, w = w + Math.imul(N, Te) | 0, h = h + Math.imul(S, xe) | 0, d = d + Math.imul(S, Ke) | 0, d = d + Math.imul(G, xe) | 0, w = w + Math.imul(G, Ke) | 0;
      var pt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, h = Math.imul(A, ce), d = Math.imul(A, me), d = d + Math.imul(X, ce) | 0, w = Math.imul(X, me), h = h + Math.imul(Z, be) | 0, d = d + Math.imul(Z, Te) | 0, d = d + Math.imul(oe, be) | 0, w = w + Math.imul(oe, Te) | 0, h = h + Math.imul(R, xe) | 0, d = d + Math.imul(R, Ke) | 0, d = d + Math.imul(N, xe) | 0, w = w + Math.imul(N, Ke) | 0, h = h + Math.imul(S, Me) | 0, d = d + Math.imul(S, We) | 0, d = d + Math.imul(G, Me) | 0, w = w + Math.imul(G, We) | 0;
      var vt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, h = Math.imul(pe, ce), d = Math.imul(pe, me), d = d + Math.imul(z, ce) | 0, w = Math.imul(z, me), h = h + Math.imul(A, be) | 0, d = d + Math.imul(A, Te) | 0, d = d + Math.imul(X, be) | 0, w = w + Math.imul(X, Te) | 0, h = h + Math.imul(Z, xe) | 0, d = d + Math.imul(Z, Ke) | 0, d = d + Math.imul(oe, xe) | 0, w = w + Math.imul(oe, Ke) | 0, h = h + Math.imul(R, Me) | 0, d = d + Math.imul(R, We) | 0, d = d + Math.imul(N, Me) | 0, w = w + Math.imul(N, We) | 0, h = h + Math.imul(S, Ee) | 0, d = d + Math.imul(S, Ge) | 0, d = d + Math.imul(G, Ee) | 0, w = w + Math.imul(G, Ge) | 0;
      var yt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, h = Math.imul(L, ce), d = Math.imul(L, me), d = d + Math.imul(j, ce) | 0, w = Math.imul(j, me), h = h + Math.imul(pe, be) | 0, d = d + Math.imul(pe, Te) | 0, d = d + Math.imul(z, be) | 0, w = w + Math.imul(z, Te) | 0, h = h + Math.imul(A, xe) | 0, d = d + Math.imul(A, Ke) | 0, d = d + Math.imul(X, xe) | 0, w = w + Math.imul(X, Ke) | 0, h = h + Math.imul(Z, Me) | 0, d = d + Math.imul(Z, We) | 0, d = d + Math.imul(oe, Me) | 0, w = w + Math.imul(oe, We) | 0, h = h + Math.imul(R, Ee) | 0, d = d + Math.imul(R, Ge) | 0, d = d + Math.imul(N, Ee) | 0, w = w + Math.imul(N, Ge) | 0, h = h + Math.imul(S, Se) | 0, d = d + Math.imul(S, Ve) | 0, d = d + Math.imul(G, Se) | 0, w = w + Math.imul(G, Ve) | 0;
      var gt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, h = Math.imul(he, ce), d = Math.imul(he, me), d = d + Math.imul(Y, ce) | 0, w = Math.imul(Y, me), h = h + Math.imul(L, be) | 0, d = d + Math.imul(L, Te) | 0, d = d + Math.imul(j, be) | 0, w = w + Math.imul(j, Te) | 0, h = h + Math.imul(pe, xe) | 0, d = d + Math.imul(pe, Ke) | 0, d = d + Math.imul(z, xe) | 0, w = w + Math.imul(z, Ke) | 0, h = h + Math.imul(A, Me) | 0, d = d + Math.imul(A, We) | 0, d = d + Math.imul(X, Me) | 0, w = w + Math.imul(X, We) | 0, h = h + Math.imul(Z, Ee) | 0, d = d + Math.imul(Z, Ge) | 0, d = d + Math.imul(oe, Ee) | 0, w = w + Math.imul(oe, Ge) | 0, h = h + Math.imul(R, Se) | 0, d = d + Math.imul(R, Ve) | 0, d = d + Math.imul(N, Se) | 0, w = w + Math.imul(N, Ve) | 0, h = h + Math.imul(S, Ae) | 0, d = d + Math.imul(S, Ze) | 0, d = d + Math.imul(G, Ae) | 0, w = w + Math.imul(G, Ze) | 0;
      var bt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, h = Math.imul(de, ce), d = Math.imul(de, me), d = d + Math.imul(ge, ce) | 0, w = Math.imul(ge, me), h = h + Math.imul(he, be) | 0, d = d + Math.imul(he, Te) | 0, d = d + Math.imul(Y, be) | 0, w = w + Math.imul(Y, Te) | 0, h = h + Math.imul(L, xe) | 0, d = d + Math.imul(L, Ke) | 0, d = d + Math.imul(j, xe) | 0, w = w + Math.imul(j, Ke) | 0, h = h + Math.imul(pe, Me) | 0, d = d + Math.imul(pe, We) | 0, d = d + Math.imul(z, Me) | 0, w = w + Math.imul(z, We) | 0, h = h + Math.imul(A, Ee) | 0, d = d + Math.imul(A, Ge) | 0, d = d + Math.imul(X, Ee) | 0, w = w + Math.imul(X, Ge) | 0, h = h + Math.imul(Z, Se) | 0, d = d + Math.imul(Z, Ve) | 0, d = d + Math.imul(oe, Se) | 0, w = w + Math.imul(oe, Ve) | 0, h = h + Math.imul(R, Ae) | 0, d = d + Math.imul(R, Ze) | 0, d = d + Math.imul(N, Ae) | 0, w = w + Math.imul(N, Ze) | 0, h = h + Math.imul(S, $e) | 0, d = d + Math.imul(S, Je) | 0, d = d + Math.imul(G, $e) | 0, w = w + Math.imul(G, Je) | 0;
      var Lt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, h = Math.imul(F, ce), d = Math.imul(F, me), d = d + Math.imul(E, ce) | 0, w = Math.imul(E, me), h = h + Math.imul(de, be) | 0, d = d + Math.imul(de, Te) | 0, d = d + Math.imul(ge, be) | 0, w = w + Math.imul(ge, Te) | 0, h = h + Math.imul(he, xe) | 0, d = d + Math.imul(he, Ke) | 0, d = d + Math.imul(Y, xe) | 0, w = w + Math.imul(Y, Ke) | 0, h = h + Math.imul(L, Me) | 0, d = d + Math.imul(L, We) | 0, d = d + Math.imul(j, Me) | 0, w = w + Math.imul(j, We) | 0, h = h + Math.imul(pe, Ee) | 0, d = d + Math.imul(pe, Ge) | 0, d = d + Math.imul(z, Ee) | 0, w = w + Math.imul(z, Ge) | 0, h = h + Math.imul(A, Se) | 0, d = d + Math.imul(A, Ve) | 0, d = d + Math.imul(X, Se) | 0, w = w + Math.imul(X, Ve) | 0, h = h + Math.imul(Z, Ae) | 0, d = d + Math.imul(Z, Ze) | 0, d = d + Math.imul(oe, Ae) | 0, w = w + Math.imul(oe, Ze) | 0, h = h + Math.imul(R, $e) | 0, d = d + Math.imul(R, Je) | 0, d = d + Math.imul(N, $e) | 0, w = w + Math.imul(N, Je) | 0, h = h + Math.imul(S, Re) | 0, d = d + Math.imul(S, Ye) | 0, d = d + Math.imul(G, Re) | 0, w = w + Math.imul(G, Ye) | 0;
      var Ct = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, h = Math.imul(W, ce), d = Math.imul(W, me), d = d + Math.imul(ne, ce) | 0, w = Math.imul(ne, me), h = h + Math.imul(F, be) | 0, d = d + Math.imul(F, Te) | 0, d = d + Math.imul(E, be) | 0, w = w + Math.imul(E, Te) | 0, h = h + Math.imul(de, xe) | 0, d = d + Math.imul(de, Ke) | 0, d = d + Math.imul(ge, xe) | 0, w = w + Math.imul(ge, Ke) | 0, h = h + Math.imul(he, Me) | 0, d = d + Math.imul(he, We) | 0, d = d + Math.imul(Y, Me) | 0, w = w + Math.imul(Y, We) | 0, h = h + Math.imul(L, Ee) | 0, d = d + Math.imul(L, Ge) | 0, d = d + Math.imul(j, Ee) | 0, w = w + Math.imul(j, Ge) | 0, h = h + Math.imul(pe, Se) | 0, d = d + Math.imul(pe, Ve) | 0, d = d + Math.imul(z, Se) | 0, w = w + Math.imul(z, Ve) | 0, h = h + Math.imul(A, Ae) | 0, d = d + Math.imul(A, Ze) | 0, d = d + Math.imul(X, Ae) | 0, w = w + Math.imul(X, Ze) | 0, h = h + Math.imul(Z, $e) | 0, d = d + Math.imul(Z, Je) | 0, d = d + Math.imul(oe, $e) | 0, w = w + Math.imul(oe, Je) | 0, h = h + Math.imul(R, Re) | 0, d = d + Math.imul(R, Ye) | 0, d = d + Math.imul(N, Re) | 0, w = w + Math.imul(N, Ye) | 0, h = h + Math.imul(S, Be) | 0, d = d + Math.imul(S, He) | 0, d = d + Math.imul(G, Be) | 0, w = w + Math.imul(G, He) | 0;
      var kt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, h = Math.imul(W, be), d = Math.imul(W, Te), d = d + Math.imul(ne, be) | 0, w = Math.imul(ne, Te), h = h + Math.imul(F, xe) | 0, d = d + Math.imul(F, Ke) | 0, d = d + Math.imul(E, xe) | 0, w = w + Math.imul(E, Ke) | 0, h = h + Math.imul(de, Me) | 0, d = d + Math.imul(de, We) | 0, d = d + Math.imul(ge, Me) | 0, w = w + Math.imul(ge, We) | 0, h = h + Math.imul(he, Ee) | 0, d = d + Math.imul(he, Ge) | 0, d = d + Math.imul(Y, Ee) | 0, w = w + Math.imul(Y, Ge) | 0, h = h + Math.imul(L, Se) | 0, d = d + Math.imul(L, Ve) | 0, d = d + Math.imul(j, Se) | 0, w = w + Math.imul(j, Ve) | 0, h = h + Math.imul(pe, Ae) | 0, d = d + Math.imul(pe, Ze) | 0, d = d + Math.imul(z, Ae) | 0, w = w + Math.imul(z, Ze) | 0, h = h + Math.imul(A, $e) | 0, d = d + Math.imul(A, Je) | 0, d = d + Math.imul(X, $e) | 0, w = w + Math.imul(X, Je) | 0, h = h + Math.imul(Z, Re) | 0, d = d + Math.imul(Z, Ye) | 0, d = d + Math.imul(oe, Re) | 0, w = w + Math.imul(oe, Ye) | 0, h = h + Math.imul(R, Be) | 0, d = d + Math.imul(R, He) | 0, d = d + Math.imul(N, Be) | 0, w = w + Math.imul(N, He) | 0;
      var Nt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, h = Math.imul(W, xe), d = Math.imul(W, Ke), d = d + Math.imul(ne, xe) | 0, w = Math.imul(ne, Ke), h = h + Math.imul(F, Me) | 0, d = d + Math.imul(F, We) | 0, d = d + Math.imul(E, Me) | 0, w = w + Math.imul(E, We) | 0, h = h + Math.imul(de, Ee) | 0, d = d + Math.imul(de, Ge) | 0, d = d + Math.imul(ge, Ee) | 0, w = w + Math.imul(ge, Ge) | 0, h = h + Math.imul(he, Se) | 0, d = d + Math.imul(he, Ve) | 0, d = d + Math.imul(Y, Se) | 0, w = w + Math.imul(Y, Ve) | 0, h = h + Math.imul(L, Ae) | 0, d = d + Math.imul(L, Ze) | 0, d = d + Math.imul(j, Ae) | 0, w = w + Math.imul(j, Ze) | 0, h = h + Math.imul(pe, $e) | 0, d = d + Math.imul(pe, Je) | 0, d = d + Math.imul(z, $e) | 0, w = w + Math.imul(z, Je) | 0, h = h + Math.imul(A, Re) | 0, d = d + Math.imul(A, Ye) | 0, d = d + Math.imul(X, Re) | 0, w = w + Math.imul(X, Ye) | 0, h = h + Math.imul(Z, Be) | 0, d = d + Math.imul(Z, He) | 0, d = d + Math.imul(oe, Be) | 0, w = w + Math.imul(oe, He) | 0;
      var qt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, h = Math.imul(W, Me), d = Math.imul(W, We), d = d + Math.imul(ne, Me) | 0, w = Math.imul(ne, We), h = h + Math.imul(F, Ee) | 0, d = d + Math.imul(F, Ge) | 0, d = d + Math.imul(E, Ee) | 0, w = w + Math.imul(E, Ge) | 0, h = h + Math.imul(de, Se) | 0, d = d + Math.imul(de, Ve) | 0, d = d + Math.imul(ge, Se) | 0, w = w + Math.imul(ge, Ve) | 0, h = h + Math.imul(he, Ae) | 0, d = d + Math.imul(he, Ze) | 0, d = d + Math.imul(Y, Ae) | 0, w = w + Math.imul(Y, Ze) | 0, h = h + Math.imul(L, $e) | 0, d = d + Math.imul(L, Je) | 0, d = d + Math.imul(j, $e) | 0, w = w + Math.imul(j, Je) | 0, h = h + Math.imul(pe, Re) | 0, d = d + Math.imul(pe, Ye) | 0, d = d + Math.imul(z, Re) | 0, w = w + Math.imul(z, Ye) | 0, h = h + Math.imul(A, Be) | 0, d = d + Math.imul(A, He) | 0, d = d + Math.imul(X, Be) | 0, w = w + Math.imul(X, He) | 0;
      var Ft = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, h = Math.imul(W, Ee), d = Math.imul(W, Ge), d = d + Math.imul(ne, Ee) | 0, w = Math.imul(ne, Ge), h = h + Math.imul(F, Se) | 0, d = d + Math.imul(F, Ve) | 0, d = d + Math.imul(E, Se) | 0, w = w + Math.imul(E, Ve) | 0, h = h + Math.imul(de, Ae) | 0, d = d + Math.imul(de, Ze) | 0, d = d + Math.imul(ge, Ae) | 0, w = w + Math.imul(ge, Ze) | 0, h = h + Math.imul(he, $e) | 0, d = d + Math.imul(he, Je) | 0, d = d + Math.imul(Y, $e) | 0, w = w + Math.imul(Y, Je) | 0, h = h + Math.imul(L, Re) | 0, d = d + Math.imul(L, Ye) | 0, d = d + Math.imul(j, Re) | 0, w = w + Math.imul(j, Ye) | 0, h = h + Math.imul(pe, Be) | 0, d = d + Math.imul(pe, He) | 0, d = d + Math.imul(z, Be) | 0, w = w + Math.imul(z, He) | 0;
      var Ut = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, h = Math.imul(W, Se), d = Math.imul(W, Ve), d = d + Math.imul(ne, Se) | 0, w = Math.imul(ne, Ve), h = h + Math.imul(F, Ae) | 0, d = d + Math.imul(F, Ze) | 0, d = d + Math.imul(E, Ae) | 0, w = w + Math.imul(E, Ze) | 0, h = h + Math.imul(de, $e) | 0, d = d + Math.imul(de, Je) | 0, d = d + Math.imul(ge, $e) | 0, w = w + Math.imul(ge, Je) | 0, h = h + Math.imul(he, Re) | 0, d = d + Math.imul(he, Ye) | 0, d = d + Math.imul(Y, Re) | 0, w = w + Math.imul(Y, Ye) | 0, h = h + Math.imul(L, Be) | 0, d = d + Math.imul(L, He) | 0, d = d + Math.imul(j, Be) | 0, w = w + Math.imul(j, He) | 0;
      var Dt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, h = Math.imul(W, Ae), d = Math.imul(W, Ze), d = d + Math.imul(ne, Ae) | 0, w = Math.imul(ne, Ze), h = h + Math.imul(F, $e) | 0, d = d + Math.imul(F, Je) | 0, d = d + Math.imul(E, $e) | 0, w = w + Math.imul(E, Je) | 0, h = h + Math.imul(de, Re) | 0, d = d + Math.imul(de, Ye) | 0, d = d + Math.imul(ge, Re) | 0, w = w + Math.imul(ge, Ye) | 0, h = h + Math.imul(he, Be) | 0, d = d + Math.imul(he, He) | 0, d = d + Math.imul(Y, Be) | 0, w = w + Math.imul(Y, He) | 0;
      var jt = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, h = Math.imul(W, $e), d = Math.imul(W, Je), d = d + Math.imul(ne, $e) | 0, w = Math.imul(ne, Je), h = h + Math.imul(F, Re) | 0, d = d + Math.imul(F, Ye) | 0, d = d + Math.imul(E, Re) | 0, w = w + Math.imul(E, Ye) | 0, h = h + Math.imul(de, Be) | 0, d = d + Math.imul(de, He) | 0, d = d + Math.imul(ge, Be) | 0, w = w + Math.imul(ge, He) | 0;
      var fr = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, h = Math.imul(W, Re), d = Math.imul(W, Ye), d = d + Math.imul(ne, Re) | 0, w = Math.imul(ne, Ye), h = h + Math.imul(F, Be) | 0, d = d + Math.imul(F, He) | 0, d = d + Math.imul(E, Be) | 0, w = w + Math.imul(E, He) | 0;
      var sr = (b + h | 0) + ((d & 8191) << 13) | 0;
      b = (w + (d >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, h = Math.imul(W, Be), d = Math.imul(W, He), d = d + Math.imul(ne, Be) | 0, w = Math.imul(ne, He);
      var en = (b + h | 0) + ((d & 8191) << 13) | 0;
      return b = (w + (d >>> 13) | 0) + (en >>> 26) | 0, en &= 67108863, x[0] = Ue, x[1] = De, x[2] = pt, x[3] = vt, x[4] = yt, x[5] = gt, x[6] = bt, x[7] = Lt, x[8] = Ct, x[9] = kt, x[10] = Nt, x[11] = qt, x[12] = Ft, x[13] = Ut, x[14] = Dt, x[15] = jt, x[16] = fr, x[17] = sr, x[18] = en, b !== 0 && (x[19] = b, o.length++), o;
    };
    Math.imul || (k = M);
    function q(g, l, u) {
      u.negative = l.negative ^ g.negative, u.length = g.length + l.length;
      for (var o = 0, c = 0, y = 0; y < u.length - 1; y++) {
        var x = c;
        c = 0;
        for (var b = o & 67108863, h = Math.min(y, l.length - 1), d = Math.max(0, y - g.length + 1); d <= h; d++) {
          var w = y - d, p = g.words[w] | 0, S = l.words[d] | 0, G = p * S, B = G & 67108863;
          x = x + (G / 67108864 | 0) | 0, B = B + b | 0, b = B & 67108863, x = x + (B >>> 26) | 0, c += x >>> 26, x &= 67108863;
        }
        u.words[y] = b, o = x, x = c;
      }
      return o !== 0 ? u.words[y] = o : u.length--, u.strip();
    }
    function D(g, l, u) {
      var o = new U();
      return o.mulp(g, l, u);
    }
    i.prototype.mulTo = function(l, u) {
      var o, c = this.length + l.length;
      return this.length === 10 && l.length === 10 ? o = k(this, l, u) : c < 63 ? o = M(this, l, u) : c < 1024 ? o = q(this, l, u) : o = D(this, l, u), o;
    };
    function U(g, l) {
      this.x = g, this.y = l;
    }
    U.prototype.makeRBT = function(l) {
      for (var u = new Array(l), o = i.prototype._countBits(l) - 1, c = 0; c < l; c++)
        u[c] = this.revBin(c, o, l);
      return u;
    }, U.prototype.revBin = function(l, u, o) {
      if (l === 0 || l === o - 1)
        return l;
      for (var c = 0, y = 0; y < u; y++)
        c |= (l & 1) << u - y - 1, l >>= 1;
      return c;
    }, U.prototype.permute = function(l, u, o, c, y, x) {
      for (var b = 0; b < x; b++)
        c[b] = u[l[b]], y[b] = o[l[b]];
    }, U.prototype.transform = function(l, u, o, c, y, x) {
      this.permute(x, l, u, o, c, y);
      for (var b = 1; b < y; b <<= 1)
        for (var h = b << 1, d = Math.cos(2 * Math.PI / h), w = Math.sin(2 * Math.PI / h), p = 0; p < y; p += h)
          for (var S = d, G = w, B = 0; B < b; B++) {
            var R = o[p + B], N = c[p + B], H = o[p + B + b], Z = c[p + B + b], oe = S * H - G * Z;
            Z = S * Z + G * H, H = oe, o[p + B] = R + H, c[p + B] = N + Z, o[p + B + b] = R - H, c[p + B + b] = N - Z, B !== h && (oe = d * S - w * G, G = d * G + w * S, S = oe);
          }
    }, U.prototype.guessLen13b = function(l, u) {
      var o = Math.max(u, l) | 1, c = o & 1, y = 0;
      for (o = o / 2 | 0; o; o = o >>> 1)
        y++;
      return 1 << y + 1 + c;
    }, U.prototype.conjugate = function(l, u, o) {
      if (!(o <= 1))
        for (var c = 0; c < o / 2; c++) {
          var y = l[c];
          l[c] = l[o - c - 1], l[o - c - 1] = y, y = u[c], u[c] = -u[o - c - 1], u[o - c - 1] = -y;
        }
    }, U.prototype.normalize13b = function(l, u) {
      for (var o = 0, c = 0; c < u / 2; c++) {
        var y = Math.round(l[2 * c + 1] / u) * 8192 + Math.round(l[2 * c] / u) + o;
        l[c] = y & 67108863, y < 67108864 ? o = 0 : o = y / 67108864 | 0;
      }
      return l;
    }, U.prototype.convert13b = function(l, u, o, c) {
      for (var y = 0, x = 0; x < u; x++)
        y = y + (l[x] | 0), o[2 * x] = y & 8191, y = y >>> 13, o[2 * x + 1] = y & 8191, y = y >>> 13;
      for (x = 2 * u; x < c; ++x)
        o[x] = 0;
      n(y === 0), n((y & -8192) === 0);
    }, U.prototype.stub = function(l) {
      for (var u = new Array(l), o = 0; o < l; o++)
        u[o] = 0;
      return u;
    }, U.prototype.mulp = function(l, u, o) {
      var c = 2 * this.guessLen13b(l.length, u.length), y = this.makeRBT(c), x = this.stub(c), b = new Array(c), h = new Array(c), d = new Array(c), w = new Array(c), p = new Array(c), S = new Array(c), G = o.words;
      G.length = c, this.convert13b(l.words, l.length, b, c), this.convert13b(u.words, u.length, w, c), this.transform(b, x, h, d, c, y), this.transform(w, x, p, S, c, y);
      for (var B = 0; B < c; B++) {
        var R = h[B] * p[B] - d[B] * S[B];
        d[B] = h[B] * S[B] + d[B] * p[B], h[B] = R;
      }
      return this.conjugate(h, d, c), this.transform(h, d, G, x, c, y), this.conjugate(G, x, c), this.normalize13b(G, c), o.negative = l.negative ^ u.negative, o.length = l.length + u.length, o.strip();
    }, i.prototype.mul = function(l) {
      var u = new i(null);
      return u.words = new Array(this.length + l.length), this.mulTo(l, u);
    }, i.prototype.mulf = function(l) {
      var u = new i(null);
      return u.words = new Array(this.length + l.length), D(this, l, u);
    }, i.prototype.imul = function(l) {
      return this.clone().mulTo(l, this);
    }, i.prototype.imuln = function(l) {
      n(typeof l == "number"), n(l < 67108864);
      for (var u = 0, o = 0; o < this.length; o++) {
        var c = (this.words[o] | 0) * l, y = (c & 67108863) + (u & 67108863);
        u >>= 26, u += c / 67108864 | 0, u += y >>> 26, this.words[o] = y & 67108863;
      }
      return u !== 0 && (this.words[o] = u, this.length++), this;
    }, i.prototype.muln = function(l) {
      return this.clone().imuln(l);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(l) {
      var u = C(l);
      if (u.length === 0)
        return new i(1);
      for (var o = this, c = 0; c < u.length && u[c] === 0; c++, o = o.sqr())
        ;
      if (++c < u.length)
        for (var y = o.sqr(); c < u.length; c++, y = y.sqr())
          u[c] !== 0 && (o = o.mul(y));
      return o;
    }, i.prototype.iushln = function(l) {
      n(typeof l == "number" && l >= 0);
      var u = l % 26, o = (l - u) / 26, c = 67108863 >>> 26 - u << 26 - u, y;
      if (u !== 0) {
        var x = 0;
        for (y = 0; y < this.length; y++) {
          var b = this.words[y] & c, h = (this.words[y] | 0) - b << u;
          this.words[y] = h | x, x = b >>> 26 - u;
        }
        x && (this.words[y] = x, this.length++);
      }
      if (o !== 0) {
        for (y = this.length - 1; y >= 0; y--)
          this.words[y + o] = this.words[y];
        for (y = 0; y < o; y++)
          this.words[y] = 0;
        this.length += o;
      }
      return this.strip();
    }, i.prototype.ishln = function(l) {
      return n(this.negative === 0), this.iushln(l);
    }, i.prototype.iushrn = function(l, u, o) {
      n(typeof l == "number" && l >= 0);
      var c;
      u ? c = (u - u % 26) / 26 : c = 0;
      var y = l % 26, x = Math.min((l - y) / 26, this.length), b = 67108863 ^ 67108863 >>> y << y, h = o;
      if (c -= x, c = Math.max(0, c), h) {
        for (var d = 0; d < x; d++)
          h.words[d] = this.words[d];
        h.length = x;
      }
      if (x !== 0)
        if (this.length > x)
          for (this.length -= x, d = 0; d < this.length; d++)
            this.words[d] = this.words[d + x];
        else
          this.words[0] = 0, this.length = 1;
      var w = 0;
      for (d = this.length - 1; d >= 0 && (w !== 0 || d >= c); d--) {
        var p = this.words[d] | 0;
        this.words[d] = w << 26 - y | p >>> y, w = p & b;
      }
      return h && w !== 0 && (h.words[h.length++] = w), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(l, u, o) {
      return n(this.negative === 0), this.iushrn(l, u, o);
    }, i.prototype.shln = function(l) {
      return this.clone().ishln(l);
    }, i.prototype.ushln = function(l) {
      return this.clone().iushln(l);
    }, i.prototype.shrn = function(l) {
      return this.clone().ishrn(l);
    }, i.prototype.ushrn = function(l) {
      return this.clone().iushrn(l);
    }, i.prototype.testn = function(l) {
      n(typeof l == "number" && l >= 0);
      var u = l % 26, o = (l - u) / 26, c = 1 << u;
      if (this.length <= o)
        return !1;
      var y = this.words[o];
      return !!(y & c);
    }, i.prototype.imaskn = function(l) {
      n(typeof l == "number" && l >= 0);
      var u = l % 26, o = (l - u) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= o)
        return this;
      if (u !== 0 && o++, this.length = Math.min(o, this.length), u !== 0) {
        var c = 67108863 ^ 67108863 >>> u << u;
        this.words[this.length - 1] &= c;
      }
      return this.strip();
    }, i.prototype.maskn = function(l) {
      return this.clone().imaskn(l);
    }, i.prototype.iaddn = function(l) {
      return n(typeof l == "number"), n(l < 67108864), l < 0 ? this.isubn(-l) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < l ? (this.words[0] = l - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(l), this.negative = 1, this) : this._iaddn(l);
    }, i.prototype._iaddn = function(l) {
      this.words[0] += l;
      for (var u = 0; u < this.length && this.words[u] >= 67108864; u++)
        this.words[u] -= 67108864, u === this.length - 1 ? this.words[u + 1] = 1 : this.words[u + 1]++;
      return this.length = Math.max(this.length, u + 1), this;
    }, i.prototype.isubn = function(l) {
      if (n(typeof l == "number"), n(l < 67108864), l < 0)
        return this.iaddn(-l);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(l), this.negative = 1, this;
      if (this.words[0] -= l, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var u = 0; u < this.length && this.words[u] < 0; u++)
          this.words[u] += 67108864, this.words[u + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(l) {
      return this.clone().iaddn(l);
    }, i.prototype.subn = function(l) {
      return this.clone().isubn(l);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(l, u, o) {
      var c = l.length + o, y;
      this._expand(c);
      var x, b = 0;
      for (y = 0; y < l.length; y++) {
        x = (this.words[y + o] | 0) + b;
        var h = (l.words[y] | 0) * u;
        x -= h & 67108863, b = (x >> 26) - (h / 67108864 | 0), this.words[y + o] = x & 67108863;
      }
      for (; y < this.length - o; y++)
        x = (this.words[y + o] | 0) + b, b = x >> 26, this.words[y + o] = x & 67108863;
      if (b === 0)
        return this.strip();
      for (n(b === -1), b = 0, y = 0; y < this.length; y++)
        x = -(this.words[y] | 0) + b, b = x >> 26, this.words[y] = x & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(l, u) {
      var o = this.length - l.length, c = this.clone(), y = l, x = y.words[y.length - 1] | 0, b = this._countBits(x);
      o = 26 - b, o !== 0 && (y = y.ushln(o), c.iushln(o), x = y.words[y.length - 1] | 0);
      var h = c.length - y.length, d;
      if (u !== "mod") {
        d = new i(null), d.length = h + 1, d.words = new Array(d.length);
        for (var w = 0; w < d.length; w++)
          d.words[w] = 0;
      }
      var p = c.clone()._ishlnsubmul(y, 1, h);
      p.negative === 0 && (c = p, d && (d.words[h] = 1));
      for (var S = h - 1; S >= 0; S--) {
        var G = (c.words[y.length + S] | 0) * 67108864 + (c.words[y.length + S - 1] | 0);
        for (G = Math.min(G / x | 0, 67108863), c._ishlnsubmul(y, G, S); c.negative !== 0; )
          G--, c.negative = 0, c._ishlnsubmul(y, 1, S), c.isZero() || (c.negative ^= 1);
        d && (d.words[S] = G);
      }
      return d && d.strip(), c.strip(), u !== "div" && o !== 0 && c.iushrn(o), {
        div: d || null,
        mod: c
      };
    }, i.prototype.divmod = function(l, u, o) {
      if (n(!l.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var c, y, x;
      return this.negative !== 0 && l.negative === 0 ? (x = this.neg().divmod(l, u), u !== "mod" && (c = x.div.neg()), u !== "div" && (y = x.mod.neg(), o && y.negative !== 0 && y.iadd(l)), {
        div: c,
        mod: y
      }) : this.negative === 0 && l.negative !== 0 ? (x = this.divmod(l.neg(), u), u !== "mod" && (c = x.div.neg()), {
        div: c,
        mod: x.mod
      }) : (this.negative & l.negative) !== 0 ? (x = this.neg().divmod(l.neg(), u), u !== "div" && (y = x.mod.neg(), o && y.negative !== 0 && y.isub(l)), {
        div: x.div,
        mod: y
      }) : l.length > this.length || this.cmp(l) < 0 ? {
        div: new i(0),
        mod: this
      } : l.length === 1 ? u === "div" ? {
        div: this.divn(l.words[0]),
        mod: null
      } : u === "mod" ? {
        div: null,
        mod: new i(this.modn(l.words[0]))
      } : {
        div: this.divn(l.words[0]),
        mod: new i(this.modn(l.words[0]))
      } : this._wordDiv(l, u);
    }, i.prototype.div = function(l) {
      return this.divmod(l, "div", !1).div;
    }, i.prototype.mod = function(l) {
      return this.divmod(l, "mod", !1).mod;
    }, i.prototype.umod = function(l) {
      return this.divmod(l, "mod", !0).mod;
    }, i.prototype.divRound = function(l) {
      var u = this.divmod(l);
      if (u.mod.isZero())
        return u.div;
      var o = u.div.negative !== 0 ? u.mod.isub(l) : u.mod, c = l.ushrn(1), y = l.andln(1), x = o.cmp(c);
      return x < 0 || y === 1 && x === 0 ? u.div : u.div.negative !== 0 ? u.div.isubn(1) : u.div.iaddn(1);
    }, i.prototype.modn = function(l) {
      n(l <= 67108863);
      for (var u = (1 << 26) % l, o = 0, c = this.length - 1; c >= 0; c--)
        o = (u * o + (this.words[c] | 0)) % l;
      return o;
    }, i.prototype.idivn = function(l) {
      n(l <= 67108863);
      for (var u = 0, o = this.length - 1; o >= 0; o--) {
        var c = (this.words[o] | 0) + u * 67108864;
        this.words[o] = c / l | 0, u = c % l;
      }
      return this.strip();
    }, i.prototype.divn = function(l) {
      return this.clone().idivn(l);
    }, i.prototype.egcd = function(l) {
      n(l.negative === 0), n(!l.isZero());
      var u = this, o = l.clone();
      u.negative !== 0 ? u = u.umod(l) : u = u.clone();
      for (var c = new i(1), y = new i(0), x = new i(0), b = new i(1), h = 0; u.isEven() && o.isEven(); )
        u.iushrn(1), o.iushrn(1), ++h;
      for (var d = o.clone(), w = u.clone(); !u.isZero(); ) {
        for (var p = 0, S = 1; (u.words[0] & S) === 0 && p < 26; ++p, S <<= 1)
          ;
        if (p > 0)
          for (u.iushrn(p); p-- > 0; )
            (c.isOdd() || y.isOdd()) && (c.iadd(d), y.isub(w)), c.iushrn(1), y.iushrn(1);
        for (var G = 0, B = 1; (o.words[0] & B) === 0 && G < 26; ++G, B <<= 1)
          ;
        if (G > 0)
          for (o.iushrn(G); G-- > 0; )
            (x.isOdd() || b.isOdd()) && (x.iadd(d), b.isub(w)), x.iushrn(1), b.iushrn(1);
        u.cmp(o) >= 0 ? (u.isub(o), c.isub(x), y.isub(b)) : (o.isub(u), x.isub(c), b.isub(y));
      }
      return {
        a: x,
        b,
        gcd: o.iushln(h)
      };
    }, i.prototype._invmp = function(l) {
      n(l.negative === 0), n(!l.isZero());
      var u = this, o = l.clone();
      u.negative !== 0 ? u = u.umod(l) : u = u.clone();
      for (var c = new i(1), y = new i(0), x = o.clone(); u.cmpn(1) > 0 && o.cmpn(1) > 0; ) {
        for (var b = 0, h = 1; (u.words[0] & h) === 0 && b < 26; ++b, h <<= 1)
          ;
        if (b > 0)
          for (u.iushrn(b); b-- > 0; )
            c.isOdd() && c.iadd(x), c.iushrn(1);
        for (var d = 0, w = 1; (o.words[0] & w) === 0 && d < 26; ++d, w <<= 1)
          ;
        if (d > 0)
          for (o.iushrn(d); d-- > 0; )
            y.isOdd() && y.iadd(x), y.iushrn(1);
        u.cmp(o) >= 0 ? (u.isub(o), c.isub(y)) : (o.isub(u), y.isub(c));
      }
      var p;
      return u.cmpn(1) === 0 ? p = c : p = y, p.cmpn(0) < 0 && p.iadd(l), p;
    }, i.prototype.gcd = function(l) {
      if (this.isZero())
        return l.abs();
      if (l.isZero())
        return this.abs();
      var u = this.clone(), o = l.clone();
      u.negative = 0, o.negative = 0;
      for (var c = 0; u.isEven() && o.isEven(); c++)
        u.iushrn(1), o.iushrn(1);
      do {
        for (; u.isEven(); )
          u.iushrn(1);
        for (; o.isEven(); )
          o.iushrn(1);
        var y = u.cmp(o);
        if (y < 0) {
          var x = u;
          u = o, o = x;
        } else if (y === 0 || o.cmpn(1) === 0)
          break;
        u.isub(o);
      } while (!0);
      return o.iushln(c);
    }, i.prototype.invm = function(l) {
      return this.egcd(l).a.umod(l);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(l) {
      return this.words[0] & l;
    }, i.prototype.bincn = function(l) {
      n(typeof l == "number");
      var u = l % 26, o = (l - u) / 26, c = 1 << u;
      if (this.length <= o)
        return this._expand(o + 1), this.words[o] |= c, this;
      for (var y = c, x = o; y !== 0 && x < this.length; x++) {
        var b = this.words[x] | 0;
        b += y, y = b >>> 26, b &= 67108863, this.words[x] = b;
      }
      return y !== 0 && (this.words[x] = y, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(l) {
      var u = l < 0;
      if (this.negative !== 0 && !u)
        return -1;
      if (this.negative === 0 && u)
        return 1;
      this.strip();
      var o;
      if (this.length > 1)
        o = 1;
      else {
        u && (l = -l), n(l <= 67108863, "Number is too big");
        var c = this.words[0] | 0;
        o = c === l ? 0 : c < l ? -1 : 1;
      }
      return this.negative !== 0 ? -o | 0 : o;
    }, i.prototype.cmp = function(l) {
      if (this.negative !== 0 && l.negative === 0)
        return -1;
      if (this.negative === 0 && l.negative !== 0)
        return 1;
      var u = this.ucmp(l);
      return this.negative !== 0 ? -u | 0 : u;
    }, i.prototype.ucmp = function(l) {
      if (this.length > l.length)
        return 1;
      if (this.length < l.length)
        return -1;
      for (var u = 0, o = this.length - 1; o >= 0; o--) {
        var c = this.words[o] | 0, y = l.words[o] | 0;
        if (c !== y) {
          c < y ? u = -1 : c > y && (u = 1);
          break;
        }
      }
      return u;
    }, i.prototype.gtn = function(l) {
      return this.cmpn(l) === 1;
    }, i.prototype.gt = function(l) {
      return this.cmp(l) === 1;
    }, i.prototype.gten = function(l) {
      return this.cmpn(l) >= 0;
    }, i.prototype.gte = function(l) {
      return this.cmp(l) >= 0;
    }, i.prototype.ltn = function(l) {
      return this.cmpn(l) === -1;
    }, i.prototype.lt = function(l) {
      return this.cmp(l) === -1;
    }, i.prototype.lten = function(l) {
      return this.cmpn(l) <= 0;
    }, i.prototype.lte = function(l) {
      return this.cmp(l) <= 0;
    }, i.prototype.eqn = function(l) {
      return this.cmpn(l) === 0;
    }, i.prototype.eq = function(l) {
      return this.cmp(l) === 0;
    }, i.red = function(l) {
      return new le(l);
    }, i.prototype.toRed = function(l) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), l.convertTo(this)._forceRed(l);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(l) {
      return this.red = l, this;
    }, i.prototype.forceRed = function(l) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(l);
    }, i.prototype.redAdd = function(l) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, l);
    }, i.prototype.redIAdd = function(l) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, l);
    }, i.prototype.redSub = function(l) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, l);
    }, i.prototype.redISub = function(l) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, l);
    }, i.prototype.redShl = function(l) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, l);
    }, i.prototype.redMul = function(l) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.mul(this, l);
    }, i.prototype.redIMul = function(l) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, l), this.red.imul(this, l);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(l) {
      return n(this.red && !l.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, l);
    };
    var K = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function J(g, l) {
      this.name = g, this.p = new i(l, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    J.prototype._tmp = function() {
      var l = new i(null);
      return l.words = new Array(Math.ceil(this.n / 13)), l;
    }, J.prototype.ireduce = function(l) {
      var u = l, o;
      do
        this.split(u, this.tmp), u = this.imulK(u), u = u.iadd(this.tmp), o = u.bitLength();
      while (o > this.n);
      var c = o < this.n ? -1 : u.ucmp(this.p);
      return c === 0 ? (u.words[0] = 0, u.length = 1) : c > 0 ? u.isub(this.p) : u.strip !== void 0 ? u.strip() : u._strip(), u;
    }, J.prototype.split = function(l, u) {
      l.iushrn(this.n, 0, u);
    }, J.prototype.imulK = function(l) {
      return l.imul(this.k);
    };
    function re() {
      J.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(re, J), re.prototype.split = function(l, u) {
      for (var o = 4194303, c = Math.min(l.length, 9), y = 0; y < c; y++)
        u.words[y] = l.words[y];
      if (u.length = c, l.length <= 9) {
        l.words[0] = 0, l.length = 1;
        return;
      }
      var x = l.words[9];
      for (u.words[u.length++] = x & o, y = 10; y < l.length; y++) {
        var b = l.words[y] | 0;
        l.words[y - 10] = (b & o) << 4 | x >>> 22, x = b;
      }
      x >>>= 22, l.words[y - 10] = x, x === 0 && l.length > 10 ? l.length -= 10 : l.length -= 9;
    }, re.prototype.imulK = function(l) {
      l.words[l.length] = 0, l.words[l.length + 1] = 0, l.length += 2;
      for (var u = 0, o = 0; o < l.length; o++) {
        var c = l.words[o] | 0;
        u += c * 977, l.words[o] = u & 67108863, u = c * 64 + (u / 67108864 | 0);
      }
      return l.words[l.length - 1] === 0 && (l.length--, l.words[l.length - 1] === 0 && l.length--), l;
    };
    function ue() {
      J.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(ue, J);
    function ve() {
      J.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(ve, J);
    function se() {
      J.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(se, J), se.prototype.imulK = function(l) {
      for (var u = 0, o = 0; o < l.length; o++) {
        var c = (l.words[o] | 0) * 19 + u, y = c & 67108863;
        c >>>= 26, l.words[o] = y, u = c;
      }
      return u !== 0 && (l.words[l.length++] = u), l;
    }, i._prime = function(l) {
      if (K[l])
        return K[l];
      var u;
      if (l === "k256")
        u = new re();
      else if (l === "p224")
        u = new ue();
      else if (l === "p192")
        u = new ve();
      else if (l === "p25519")
        u = new se();
      else
        throw new Error("Unknown prime " + l);
      return K[l] = u, u;
    };
    function le(g) {
      if (typeof g == "string") {
        var l = i._prime(g);
        this.m = l.p, this.prime = l;
      } else
        n(g.gtn(1), "modulus must be greater than 1"), this.m = g, this.prime = null;
    }
    le.prototype._verify1 = function(l) {
      n(l.negative === 0, "red works only with positives"), n(l.red, "red works only with red numbers");
    }, le.prototype._verify2 = function(l, u) {
      n((l.negative | u.negative) === 0, "red works only with positives"), n(
        l.red && l.red === u.red,
        "red works only with red numbers"
      );
    }, le.prototype.imod = function(l) {
      return this.prime ? this.prime.ireduce(l)._forceRed(this) : l.umod(this.m)._forceRed(this);
    }, le.prototype.neg = function(l) {
      return l.isZero() ? l.clone() : this.m.sub(l)._forceRed(this);
    }, le.prototype.add = function(l, u) {
      this._verify2(l, u);
      var o = l.add(u);
      return o.cmp(this.m) >= 0 && o.isub(this.m), o._forceRed(this);
    }, le.prototype.iadd = function(l, u) {
      this._verify2(l, u);
      var o = l.iadd(u);
      return o.cmp(this.m) >= 0 && o.isub(this.m), o;
    }, le.prototype.sub = function(l, u) {
      this._verify2(l, u);
      var o = l.sub(u);
      return o.cmpn(0) < 0 && o.iadd(this.m), o._forceRed(this);
    }, le.prototype.isub = function(l, u) {
      this._verify2(l, u);
      var o = l.isub(u);
      return o.cmpn(0) < 0 && o.iadd(this.m), o;
    }, le.prototype.shl = function(l, u) {
      return this._verify1(l), this.imod(l.ushln(u));
    }, le.prototype.imul = function(l, u) {
      return this._verify2(l, u), this.imod(l.imul(u));
    }, le.prototype.mul = function(l, u) {
      return this._verify2(l, u), this.imod(l.mul(u));
    }, le.prototype.isqr = function(l) {
      return this.imul(l, l.clone());
    }, le.prototype.sqr = function(l) {
      return this.mul(l, l);
    }, le.prototype.sqrt = function(l) {
      if (l.isZero())
        return l.clone();
      var u = this.m.andln(3);
      if (n(u % 2 === 1), u === 3) {
        var o = this.m.add(new i(1)).iushrn(2);
        return this.pow(l, o);
      }
      for (var c = this.m.subn(1), y = 0; !c.isZero() && c.andln(1) === 0; )
        y++, c.iushrn(1);
      n(!c.isZero());
      var x = new i(1).toRed(this), b = x.redNeg(), h = this.m.subn(1).iushrn(1), d = this.m.bitLength();
      for (d = new i(2 * d * d).toRed(this); this.pow(d, h).cmp(b) !== 0; )
        d.redIAdd(b);
      for (var w = this.pow(d, c), p = this.pow(l, c.addn(1).iushrn(1)), S = this.pow(l, c), G = y; S.cmp(x) !== 0; ) {
        for (var B = S, R = 0; B.cmp(x) !== 0; R++)
          B = B.redSqr();
        n(R < G);
        var N = this.pow(w, new i(1).iushln(G - R - 1));
        p = p.redMul(N), w = N.redSqr(), S = S.redMul(w), G = R;
      }
      return p;
    }, le.prototype.invm = function(l) {
      var u = l._invmp(this.m);
      return u.negative !== 0 ? (u.negative = 0, this.imod(u).redNeg()) : this.imod(u);
    }, le.prototype.pow = function(l, u) {
      if (u.isZero())
        return new i(1).toRed(this);
      if (u.cmpn(1) === 0)
        return l.clone();
      var o = 4, c = new Array(1 << o);
      c[0] = new i(1).toRed(this), c[1] = l;
      for (var y = 2; y < c.length; y++)
        c[y] = this.mul(c[y - 1], l);
      var x = c[0], b = 0, h = 0, d = u.bitLength() % 26;
      for (d === 0 && (d = 26), y = u.length - 1; y >= 0; y--) {
        for (var w = u.words[y], p = d - 1; p >= 0; p--) {
          var S = w >> p & 1;
          if (x !== c[0] && (x = this.sqr(x)), S === 0 && b === 0) {
            h = 0;
            continue;
          }
          b <<= 1, b |= S, h++, !(h !== o && (y !== 0 || p !== 0)) && (x = this.mul(x, c[b]), h = 0, b = 0);
        }
        d = 26;
      }
      return x;
    }, le.prototype.convertTo = function(l) {
      var u = l.umod(this.m);
      return u === l ? u.clone() : u;
    }, le.prototype.convertFrom = function(l) {
      var u = l.clone();
      return u.red = null, u;
    }, i.mont = function(l) {
      return new V(l);
    };
    function V(g) {
      le.call(this, g), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(V, le), V.prototype.convertTo = function(l) {
      return this.imod(l.ushln(this.shift));
    }, V.prototype.convertFrom = function(l) {
      var u = this.imod(l.mul(this.rinv));
      return u.red = null, u;
    }, V.prototype.imul = function(l, u) {
      if (l.isZero() || u.isZero())
        return l.words[0] = 0, l.length = 1, l;
      var o = l.imul(u), c = o.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), y = o.isub(c).iushrn(this.shift), x = y;
      return y.cmp(this.m) >= 0 ? x = y.isub(this.m) : y.cmpn(0) < 0 && (x = y.iadd(this.m)), x._forceRed(this);
    }, V.prototype.mul = function(l, u) {
      if (l.isZero() || u.isZero())
        return new i(0)._forceRed(this);
      var o = l.mul(u), c = o.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), y = o.isub(c).iushrn(this.shift), x = y;
      return y.cmp(this.m) >= 0 ? x = y.isub(this.m) : y.cmpn(0) < 0 && (x = y.iadd(this.m)), x._forceRed(this);
    }, V.prototype.invm = function(l) {
      var u = this.imod(l._invmp(this.m).mul(this.r2));
      return u._forceRed(this);
    };
  })(e, Ie);
})(t0);
const M3 = t0.exports, E3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: M3
}, [t0.exports]), Mt = /* @__PURE__ */ Q(E3);
var ol = X1;
function X1(e, t) {
  if (!e)
    throw new Error(t || "Assertion failed");
}
X1.equal = function(t, r, n) {
  if (t != r)
    throw new Error(n || "Assertion failed: " + t + " != " + r);
};
const S3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: ol
}, [ol]), Sn = /* @__PURE__ */ Q(S3);
var Qs = {};
(function(e) {
  var t = e;
  function r(i, s) {
    if (Array.isArray(i))
      return i.slice();
    if (!i)
      return [];
    var f = [];
    if (typeof i != "string") {
      for (var v = 0; v < i.length; v++)
        f[v] = i[v] | 0;
      return f;
    }
    if (s === "hex") {
      i = i.replace(/[^a-z0-9]+/ig, ""), i.length % 2 !== 0 && (i = "0" + i);
      for (var v = 0; v < i.length; v += 2)
        f.push(parseInt(i[v] + i[v + 1], 16));
    } else
      for (var v = 0; v < i.length; v++) {
        var m = i.charCodeAt(v), _ = m >> 8, O = m & 255;
        _ ? f.push(_, O) : f.push(O);
      }
    return f;
  }
  t.toArray = r;
  function n(i) {
    return i.length === 1 ? "0" + i : i;
  }
  t.zero2 = n;
  function a(i) {
    for (var s = "", f = 0; f < i.length; f++)
      s += n(i[f].toString(16));
    return s;
  }
  t.toHex = a, t.encode = function(s, f) {
    return f === "hex" ? a(s) : s;
  };
})(Qs);
const A3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Qs
}, [Qs]), Q1 = /* @__PURE__ */ Q(A3);
(function(e) {
  var t = e, r = Mt, n = Sn, a = Q1;
  t.assert = n, t.toArray = a.toArray, t.zero2 = a.zero2, t.toHex = a.toHex, t.encode = a.encode;
  function i(_, O, P) {
    var C = new Array(Math.max(_.bitLength(), P) + 1);
    C.fill(0);
    for (var M = 1 << O + 1, k = _.clone(), q = 0; q < C.length; q++) {
      var D, U = k.andln(M - 1);
      k.isOdd() ? (U > (M >> 1) - 1 ? D = (M >> 1) - U : D = U, k.isubn(D)) : D = 0, C[q] = D, k.iushrn(1);
    }
    return C;
  }
  t.getNAF = i;
  function s(_, O) {
    var P = [
      [],
      []
    ];
    _ = _.clone(), O = O.clone();
    for (var C = 0, M = 0, k; _.cmpn(-C) > 0 || O.cmpn(-M) > 0; ) {
      var q = _.andln(3) + C & 3, D = O.andln(3) + M & 3;
      q === 3 && (q = -1), D === 3 && (D = -1);
      var U;
      (q & 1) === 0 ? U = 0 : (k = _.andln(7) + C & 7, (k === 3 || k === 5) && D === 2 ? U = -q : U = q), P[0].push(U);
      var K;
      (D & 1) === 0 ? K = 0 : (k = O.andln(7) + M & 7, (k === 3 || k === 5) && q === 2 ? K = -D : K = D), P[1].push(K), 2 * C === U + 1 && (C = 1 - C), 2 * M === K + 1 && (M = 1 - M), _.iushrn(1), O.iushrn(1);
    }
    return P;
  }
  t.getJSF = s;
  function f(_, O, P) {
    var C = "_" + O;
    _.prototype[O] = function() {
      return this[C] !== void 0 ? this[C] : this[C] = P.call(this);
    };
  }
  t.cachedProperty = f;
  function v(_) {
    return typeof _ == "string" ? t.toArray(_, "hex") : _;
  }
  t.parseBytes = v;
  function m(_) {
    return new r(_, "hex", "le");
  }
  t.intFromLE = m;
})(Xs);
const $3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Xs
}, [Xs]), rr = /* @__PURE__ */ Q($3);
var Va = { exports: {} }, Hf;
Va.exports = function(t) {
  return Hf || (Hf = new Kr(null)), Hf.generate(t);
};
function Kr(e) {
  this.rand = e;
}
var R3 = Va.exports.Rand = Kr;
Kr.prototype.generate = function(t) {
  return this._rand(t);
};
Kr.prototype._rand = function(t) {
  if (this.rand.getBytes)
    return this.rand.getBytes(t);
  for (var r = new Uint8Array(t), n = 0; n < r.length; n++)
    r[n] = this.rand.getByte();
  return r;
};
if (typeof self == "object")
  self.crypto && self.crypto.getRandomValues ? Kr.prototype._rand = function(t) {
    var r = new Uint8Array(t);
    return self.crypto.getRandomValues(r), r;
  } : self.msCrypto && self.msCrypto.getRandomValues ? Kr.prototype._rand = function(t) {
    var r = new Uint8Array(t);
    return self.msCrypto.getRandomValues(r), r;
  } : typeof window == "object" && (Kr.prototype._rand = function() {
    throw new Error("Not implemented yet");
  });
else
  try {
    var fl = er;
    if (typeof fl.randomBytes != "function")
      throw new Error("Not supported");
    Kr.prototype._rand = function(t) {
      return fl.randomBytes(t);
    };
  } catch {
  }
const B3 = /* @__PURE__ */ ee({
  __proto__: null,
  Rand: R3,
  default: Va.exports
}, [Va.exports]), ev = /* @__PURE__ */ Q(B3);
var eu = {}, rn = Mt, aa = rr, Za = aa.getNAF, T3 = aa.getJSF, Ja = aa.assert;
function Xr(e, t) {
  this.type = e, this.p = new rn(t.p, 16), this.red = t.prime ? rn.red(t.prime) : rn.mont(this.p), this.zero = new rn(0).toRed(this.red), this.one = new rn(1).toRed(this.red), this.two = new rn(2).toRed(this.red), this.n = t.n && new rn(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var sl = Xr;
Xr.prototype.point = function() {
  throw new Error("Not implemented");
};
Xr.prototype.validate = function() {
  throw new Error("Not implemented");
};
Xr.prototype._fixedNafMul = function(t, r) {
  Ja(t.precomputed);
  var n = t._getDoubles(), a = Za(r, 1, this._bitLength), i = (1 << n.step + 1) - (n.step % 2 === 0 ? 2 : 1);
  i /= 3;
  var s = [], f, v;
  for (f = 0; f < a.length; f += n.step) {
    v = 0;
    for (var m = f + n.step - 1; m >= f; m--)
      v = (v << 1) + a[m];
    s.push(v);
  }
  for (var _ = this.jpoint(null, null, null), O = this.jpoint(null, null, null), P = i; P > 0; P--) {
    for (f = 0; f < s.length; f++)
      v = s[f], v === P ? O = O.mixedAdd(n.points[f]) : v === -P && (O = O.mixedAdd(n.points[f].neg()));
    _ = _.add(O);
  }
  return _.toP();
};
Xr.prototype._wnafMul = function(t, r) {
  var n = 4, a = t._getNAFPoints(n);
  n = a.wnd;
  for (var i = a.points, s = Za(r, n, this._bitLength), f = this.jpoint(null, null, null), v = s.length - 1; v >= 0; v--) {
    for (var m = 0; v >= 0 && s[v] === 0; v--)
      m++;
    if (v >= 0 && m++, f = f.dblp(m), v < 0)
      break;
    var _ = s[v];
    Ja(_ !== 0), t.type === "affine" ? _ > 0 ? f = f.mixedAdd(i[_ - 1 >> 1]) : f = f.mixedAdd(i[-_ - 1 >> 1].neg()) : _ > 0 ? f = f.add(i[_ - 1 >> 1]) : f = f.add(i[-_ - 1 >> 1].neg());
  }
  return t.type === "affine" ? f.toP() : f;
};
Xr.prototype._wnafMulAdd = function(t, r, n, a, i) {
  var s = this._wnafT1, f = this._wnafT2, v = this._wnafT3, m = 0, _, O, P;
  for (_ = 0; _ < a; _++) {
    P = r[_];
    var C = P._getNAFPoints(t);
    s[_] = C.wnd, f[_] = C.points;
  }
  for (_ = a - 1; _ >= 1; _ -= 2) {
    var M = _ - 1, k = _;
    if (s[M] !== 1 || s[k] !== 1) {
      v[M] = Za(n[M], s[M], this._bitLength), v[k] = Za(n[k], s[k], this._bitLength), m = Math.max(v[M].length, m), m = Math.max(v[k].length, m);
      continue;
    }
    var q = [
      r[M],
      null,
      null,
      r[k]
    ];
    r[M].y.cmp(r[k].y) === 0 ? (q[1] = r[M].add(r[k]), q[2] = r[M].toJ().mixedAdd(r[k].neg())) : r[M].y.cmp(r[k].y.redNeg()) === 0 ? (q[1] = r[M].toJ().mixedAdd(r[k]), q[2] = r[M].add(r[k].neg())) : (q[1] = r[M].toJ().mixedAdd(r[k]), q[2] = r[M].toJ().mixedAdd(r[k].neg()));
    var D = [
      -3,
      -1,
      -5,
      -7,
      0,
      7,
      5,
      1,
      3
    ], U = T3(n[M], n[k]);
    for (m = Math.max(U[0].length, m), v[M] = new Array(m), v[k] = new Array(m), O = 0; O < m; O++) {
      var K = U[0][O] | 0, J = U[1][O] | 0;
      v[M][O] = D[(K + 1) * 3 + (J + 1)], v[k][O] = 0, f[M] = q;
    }
  }
  var re = this.jpoint(null, null, null), ue = this._wnafT4;
  for (_ = m; _ >= 0; _--) {
    for (var ve = 0; _ >= 0; ) {
      var se = !0;
      for (O = 0; O < a; O++)
        ue[O] = v[O][_] | 0, ue[O] !== 0 && (se = !1);
      if (!se)
        break;
      ve++, _--;
    }
    if (_ >= 0 && ve++, re = re.dblp(ve), _ < 0)
      break;
    for (O = 0; O < a; O++) {
      var le = ue[O];
      le !== 0 && (le > 0 ? P = f[O][le - 1 >> 1] : le < 0 && (P = f[O][-le - 1 >> 1].neg()), P.type === "affine" ? re = re.mixedAdd(P) : re = re.add(P));
    }
  }
  for (_ = 0; _ < a; _++)
    f[_] = null;
  return i ? re : re.toP();
};
function nr(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
Xr.BasePoint = nr;
nr.prototype.eq = function() {
  throw new Error("Not implemented");
};
nr.prototype.validate = function() {
  return this.curve.validate(this);
};
Xr.prototype.decodePoint = function(t, r) {
  t = aa.toArray(t, r);
  var n = this.p.byteLength();
  if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * n) {
    t[0] === 6 ? Ja(t[t.length - 1] % 2 === 0) : t[0] === 7 && Ja(t[t.length - 1] % 2 === 1);
    var a = this.point(
      t.slice(1, 1 + n),
      t.slice(1 + n, 1 + 2 * n)
    );
    return a;
  } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === n)
    return this.pointFromX(t.slice(1, 1 + n), t[0] === 3);
  throw new Error("Unknown point format");
};
nr.prototype.encodeCompressed = function(t) {
  return this.encode(t, !0);
};
nr.prototype._encode = function(t) {
  var r = this.curve.p.byteLength(), n = this.getX().toArray("be", r);
  return t ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", r));
};
nr.prototype.encode = function(t, r) {
  return aa.encode(this._encode(r), t);
};
nr.prototype.precompute = function(t) {
  if (this.precomputed)
    return this;
  var r = {
    doubles: null,
    naf: null,
    beta: null
  };
  return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this;
};
nr.prototype._hasDoubles = function(t) {
  if (!this.precomputed)
    return !1;
  var r = this.precomputed.doubles;
  return r ? r.points.length >= Math.ceil((t.bitLength() + 1) / r.step) : !1;
};
nr.prototype._getDoubles = function(t, r) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var n = [this], a = this, i = 0; i < r; i += t) {
    for (var s = 0; s < t; s++)
      a = a.dbl();
    n.push(a);
  }
  return {
    step: t,
    points: n
  };
};
nr.prototype._getNAFPoints = function(t) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  for (var r = [this], n = (1 << t) - 1, a = n === 1 ? null : this.dbl(), i = 1; i < n; i++)
    r[i] = r[i - 1].add(a);
  return {
    wnd: t,
    points: r
  };
};
nr.prototype._getBeta = function() {
  return null;
};
nr.prototype.dblp = function(t) {
  for (var r = this, n = 0; n < t; n++)
    r = r.dbl();
  return r;
};
const I3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: sl
}, [sl]), Wo = /* @__PURE__ */ Q(I3);
var P3 = rr, dt = Mt, r0 = ct, li = Wo, O3 = P3.assert;
function ir(e) {
  li.call(this, "short", e), this.a = new dt(e.a, 16).toRed(this.red), this.b = new dt(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
r0(ir, li);
var ul = ir;
ir.prototype._getEndomorphism = function(t) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r, n;
    if (t.beta)
      r = new dt(t.beta, 16).toRed(this.red);
    else {
      var a = this._getEndoRoots(this.p);
      r = a[0].cmp(a[1]) < 0 ? a[0] : a[1], r = r.toRed(this.red);
    }
    if (t.lambda)
      n = new dt(t.lambda, 16);
    else {
      var i = this._getEndoRoots(this.n);
      this.g.mul(i[0]).x.cmp(this.g.x.redMul(r)) === 0 ? n = i[0] : (n = i[1], O3(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0));
    }
    var s;
    return t.basis ? s = t.basis.map(function(f) {
      return {
        a: new dt(f.a, 16),
        b: new dt(f.b, 16)
      };
    }) : s = this._getEndoBasis(n), {
      beta: r,
      lambda: n,
      basis: s
    };
  }
};
ir.prototype._getEndoRoots = function(t) {
  var r = t === this.p ? this.red : dt.mont(t), n = new dt(2).toRed(r).redInvm(), a = n.redNeg(), i = new dt(3).toRed(r).redNeg().redSqrt().redMul(n), s = a.redAdd(i).fromRed(), f = a.redSub(i).fromRed();
  return [s, f];
};
ir.prototype._getEndoBasis = function(t) {
  for (var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), n = t, a = this.n.clone(), i = new dt(1), s = new dt(0), f = new dt(0), v = new dt(1), m, _, O, P, C, M, k, q = 0, D, U; n.cmpn(0) !== 0; ) {
    var K = a.div(n);
    D = a.sub(K.mul(n)), U = f.sub(K.mul(i));
    var J = v.sub(K.mul(s));
    if (!O && D.cmp(r) < 0)
      m = k.neg(), _ = i, O = D.neg(), P = U;
    else if (O && ++q === 2)
      break;
    k = D, a = n, n = D, f = i, i = U, v = s, s = J;
  }
  C = D.neg(), M = U;
  var re = O.sqr().add(P.sqr()), ue = C.sqr().add(M.sqr());
  return ue.cmp(re) >= 0 && (C = m, M = _), O.negative && (O = O.neg(), P = P.neg()), C.negative && (C = C.neg(), M = M.neg()), [
    { a: O, b: P },
    { a: C, b: M }
  ];
};
ir.prototype._endoSplit = function(t) {
  var r = this.endo.basis, n = r[0], a = r[1], i = a.b.mul(t).divRound(this.n), s = n.b.neg().mul(t).divRound(this.n), f = i.mul(n.a), v = s.mul(a.a), m = i.mul(n.b), _ = s.mul(a.b), O = t.sub(f).sub(v), P = m.add(_).neg();
  return { k1: O, k2: P };
};
ir.prototype.pointFromX = function(t, r) {
  t = new dt(t, 16), t.red || (t = t.toRed(this.red));
  var n = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), a = n.redSqrt();
  if (a.redSqr().redSub(n).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var i = a.fromRed().isOdd();
  return (r && !i || !r && i) && (a = a.redNeg()), this.point(t, a);
};
ir.prototype.validate = function(t) {
  if (t.inf)
    return !0;
  var r = t.x, n = t.y, a = this.a.redMul(r), i = r.redSqr().redMul(r).redIAdd(a).redIAdd(this.b);
  return n.redSqr().redISub(i).cmpn(0) === 0;
};
ir.prototype._endoWnafMulAdd = function(t, r, n) {
  for (var a = this._endoWnafT1, i = this._endoWnafT2, s = 0; s < t.length; s++) {
    var f = this._endoSplit(r[s]), v = t[s], m = v._getBeta();
    f.k1.negative && (f.k1.ineg(), v = v.neg(!0)), f.k2.negative && (f.k2.ineg(), m = m.neg(!0)), a[s * 2] = v, a[s * 2 + 1] = m, i[s * 2] = f.k1, i[s * 2 + 1] = f.k2;
  }
  for (var _ = this._wnafMulAdd(1, a, i, s * 2, n), O = 0; O < s * 2; O++)
    a[O] = null, i[O] = null;
  return _;
};
function Et(e, t, r, n) {
  li.BasePoint.call(this, e, "affine"), t === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new dt(t, 16), this.y = new dt(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
r0(Et, li.BasePoint);
ir.prototype.point = function(t, r, n) {
  return new Et(this, t, r, n);
};
ir.prototype.pointFromJSON = function(t, r) {
  return Et.fromJSON(this, t, r);
};
Et.prototype._getBeta = function() {
  if (!!this.curve.endo) {
    var t = this.precomputed;
    if (t && t.beta)
      return t.beta;
    var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (t) {
      var n = this.curve, a = function(i) {
        return n.point(i.x.redMul(n.endo.beta), i.y);
      };
      t.beta = r, r.precomputed = {
        beta: null,
        naf: t.naf && {
          wnd: t.naf.wnd,
          points: t.naf.points.map(a)
        },
        doubles: t.doubles && {
          step: t.doubles.step,
          points: t.doubles.points.map(a)
        }
      };
    }
    return r;
  }
};
Et.prototype.toJSON = function() {
  return this.precomputed ? [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }] : [this.x, this.y];
};
Et.fromJSON = function(t, r, n) {
  typeof r == "string" && (r = JSON.parse(r));
  var a = t.point(r[0], r[1], n);
  if (!r[2])
    return a;
  function i(f) {
    return t.point(f[0], f[1], n);
  }
  var s = r[2];
  return a.precomputed = {
    beta: null,
    doubles: s.doubles && {
      step: s.doubles.step,
      points: [a].concat(s.doubles.points.map(i))
    },
    naf: s.naf && {
      wnd: s.naf.wnd,
      points: [a].concat(s.naf.points.map(i))
    }
  }, a;
};
Et.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
Et.prototype.isInfinity = function() {
  return this.inf;
};
Et.prototype.add = function(t) {
  if (this.inf)
    return t;
  if (t.inf)
    return this;
  if (this.eq(t))
    return this.dbl();
  if (this.neg().eq(t))
    return this.curve.point(null, null);
  if (this.x.cmp(t.x) === 0)
    return this.curve.point(null, null);
  var r = this.y.redSub(t.y);
  r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(t.x).redInvm()));
  var n = r.redSqr().redISub(this.x).redISub(t.x), a = r.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, a);
};
Et.prototype.dbl = function() {
  if (this.inf)
    return this;
  var t = this.y.redAdd(this.y);
  if (t.cmpn(0) === 0)
    return this.curve.point(null, null);
  var r = this.curve.a, n = this.x.redSqr(), a = t.redInvm(), i = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(a), s = i.redSqr().redISub(this.x.redAdd(this.x)), f = i.redMul(this.x.redSub(s)).redISub(this.y);
  return this.curve.point(s, f);
};
Et.prototype.getX = function() {
  return this.x.fromRed();
};
Et.prototype.getY = function() {
  return this.y.fromRed();
};
Et.prototype.mul = function(t) {
  return t = new dt(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
};
Et.prototype.mulAdd = function(t, r, n) {
  var a = [this, r], i = [t, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, i) : this.curve._wnafMulAdd(1, a, i, 2);
};
Et.prototype.jmulAdd = function(t, r, n) {
  var a = [this, r], i = [t, n];
  return this.curve.endo ? this.curve._endoWnafMulAdd(a, i, !0) : this.curve._wnafMulAdd(1, a, i, 2, !0);
};
Et.prototype.eq = function(t) {
  return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
};
Et.prototype.neg = function(t) {
  if (this.inf)
    return this;
  var r = this.curve.point(this.x, this.y.redNeg());
  if (t && this.precomputed) {
    var n = this.precomputed, a = function(i) {
      return i.neg();
    };
    r.precomputed = {
      naf: n.naf && {
        wnd: n.naf.wnd,
        points: n.naf.points.map(a)
      },
      doubles: n.doubles && {
        step: n.doubles.step,
        points: n.doubles.points.map(a)
      }
    };
  }
  return r;
};
Et.prototype.toJ = function() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var t = this.curve.jpoint(this.x, this.y, this.curve.one);
  return t;
};
function St(e, t, r, n) {
  li.BasePoint.call(this, e, "jacobian"), t === null && r === null && n === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new dt(0)) : (this.x = new dt(t, 16), this.y = new dt(r, 16), this.z = new dt(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
r0(St, li.BasePoint);
ir.prototype.jpoint = function(t, r, n) {
  return new St(this, t, r, n);
};
St.prototype.toP = function() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var t = this.z.redInvm(), r = t.redSqr(), n = this.x.redMul(r), a = this.y.redMul(r).redMul(t);
  return this.curve.point(n, a);
};
St.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
St.prototype.add = function(t) {
  if (this.isInfinity())
    return t;
  if (t.isInfinity())
    return this;
  var r = t.z.redSqr(), n = this.z.redSqr(), a = this.x.redMul(r), i = t.x.redMul(n), s = this.y.redMul(r.redMul(t.z)), f = t.y.redMul(n.redMul(this.z)), v = a.redSub(i), m = s.redSub(f);
  if (v.cmpn(0) === 0)
    return m.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var _ = v.redSqr(), O = _.redMul(v), P = a.redMul(_), C = m.redSqr().redIAdd(O).redISub(P).redISub(P), M = m.redMul(P.redISub(C)).redISub(s.redMul(O)), k = this.z.redMul(t.z).redMul(v);
  return this.curve.jpoint(C, M, k);
};
St.prototype.mixedAdd = function(t) {
  if (this.isInfinity())
    return t.toJ();
  if (t.isInfinity())
    return this;
  var r = this.z.redSqr(), n = this.x, a = t.x.redMul(r), i = this.y, s = t.y.redMul(r).redMul(this.z), f = n.redSub(a), v = i.redSub(s);
  if (f.cmpn(0) === 0)
    return v.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var m = f.redSqr(), _ = m.redMul(f), O = n.redMul(m), P = v.redSqr().redIAdd(_).redISub(O).redISub(O), C = v.redMul(O.redISub(P)).redISub(i.redMul(_)), M = this.z.redMul(f);
  return this.curve.jpoint(P, C, M);
};
St.prototype.dblp = function(t) {
  if (t === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!t)
    return this.dbl();
  var r;
  if (this.curve.zeroA || this.curve.threeA) {
    var n = this;
    for (r = 0; r < t; r++)
      n = n.dbl();
    return n;
  }
  var a = this.curve.a, i = this.curve.tinv, s = this.x, f = this.y, v = this.z, m = v.redSqr().redSqr(), _ = f.redAdd(f);
  for (r = 0; r < t; r++) {
    var O = s.redSqr(), P = _.redSqr(), C = P.redSqr(), M = O.redAdd(O).redIAdd(O).redIAdd(a.redMul(m)), k = s.redMul(P), q = M.redSqr().redISub(k.redAdd(k)), D = k.redISub(q), U = M.redMul(D);
    U = U.redIAdd(U).redISub(C);
    var K = _.redMul(v);
    r + 1 < t && (m = m.redMul(C)), s = q, v = K, _ = U;
  }
  return this.curve.jpoint(s, _.redMul(i), v);
};
St.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
};
St.prototype._zeroDbl = function() {
  var t, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), i = this.y.redSqr(), s = i.redSqr(), f = this.x.redAdd(i).redSqr().redISub(a).redISub(s);
    f = f.redIAdd(f);
    var v = a.redAdd(a).redIAdd(a), m = v.redSqr().redISub(f).redISub(f), _ = s.redIAdd(s);
    _ = _.redIAdd(_), _ = _.redIAdd(_), t = m, r = v.redMul(f.redISub(m)).redISub(_), n = this.y.redAdd(this.y);
  } else {
    var O = this.x.redSqr(), P = this.y.redSqr(), C = P.redSqr(), M = this.x.redAdd(P).redSqr().redISub(O).redISub(C);
    M = M.redIAdd(M);
    var k = O.redAdd(O).redIAdd(O), q = k.redSqr(), D = C.redIAdd(C);
    D = D.redIAdd(D), D = D.redIAdd(D), t = q.redISub(M).redISub(M), r = k.redMul(M.redISub(t)).redISub(D), n = this.y.redMul(this.z), n = n.redIAdd(n);
  }
  return this.curve.jpoint(t, r, n);
};
St.prototype._threeDbl = function() {
  var t, r, n;
  if (this.zOne) {
    var a = this.x.redSqr(), i = this.y.redSqr(), s = i.redSqr(), f = this.x.redAdd(i).redSqr().redISub(a).redISub(s);
    f = f.redIAdd(f);
    var v = a.redAdd(a).redIAdd(a).redIAdd(this.curve.a), m = v.redSqr().redISub(f).redISub(f);
    t = m;
    var _ = s.redIAdd(s);
    _ = _.redIAdd(_), _ = _.redIAdd(_), r = v.redMul(f.redISub(m)).redISub(_), n = this.y.redAdd(this.y);
  } else {
    var O = this.z.redSqr(), P = this.y.redSqr(), C = this.x.redMul(P), M = this.x.redSub(O).redMul(this.x.redAdd(O));
    M = M.redAdd(M).redIAdd(M);
    var k = C.redIAdd(C);
    k = k.redIAdd(k);
    var q = k.redAdd(k);
    t = M.redSqr().redISub(q), n = this.y.redAdd(this.z).redSqr().redISub(P).redISub(O);
    var D = P.redSqr();
    D = D.redIAdd(D), D = D.redIAdd(D), D = D.redIAdd(D), r = M.redMul(k.redISub(t)).redISub(D);
  }
  return this.curve.jpoint(t, r, n);
};
St.prototype._dbl = function() {
  var t = this.curve.a, r = this.x, n = this.y, a = this.z, i = a.redSqr().redSqr(), s = r.redSqr(), f = n.redSqr(), v = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(i)), m = r.redAdd(r);
  m = m.redIAdd(m);
  var _ = m.redMul(f), O = v.redSqr().redISub(_.redAdd(_)), P = _.redISub(O), C = f.redSqr();
  C = C.redIAdd(C), C = C.redIAdd(C), C = C.redIAdd(C);
  var M = v.redMul(P).redISub(C), k = n.redAdd(n).redMul(a);
  return this.curve.jpoint(O, M, k);
};
St.prototype.trpl = function() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var t = this.x.redSqr(), r = this.y.redSqr(), n = this.z.redSqr(), a = r.redSqr(), i = t.redAdd(t).redIAdd(t), s = i.redSqr(), f = this.x.redAdd(r).redSqr().redISub(t).redISub(a);
  f = f.redIAdd(f), f = f.redAdd(f).redIAdd(f), f = f.redISub(s);
  var v = f.redSqr(), m = a.redIAdd(a);
  m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m);
  var _ = i.redIAdd(f).redSqr().redISub(s).redISub(v).redISub(m), O = r.redMul(_);
  O = O.redIAdd(O), O = O.redIAdd(O);
  var P = this.x.redMul(v).redISub(O);
  P = P.redIAdd(P), P = P.redIAdd(P);
  var C = this.y.redMul(_.redMul(m.redISub(_)).redISub(f.redMul(v)));
  C = C.redIAdd(C), C = C.redIAdd(C), C = C.redIAdd(C);
  var M = this.z.redAdd(f).redSqr().redISub(n).redISub(v);
  return this.curve.jpoint(P, C, M);
};
St.prototype.mul = function(t, r) {
  return t = new dt(t, r), this.curve._wnafMul(this, t);
};
St.prototype.eq = function(t) {
  if (t.type === "affine")
    return this.eq(t.toJ());
  if (this === t)
    return !0;
  var r = this.z.redSqr(), n = t.z.redSqr();
  if (this.x.redMul(n).redISub(t.x.redMul(r)).cmpn(0) !== 0)
    return !1;
  var a = r.redMul(this.z), i = n.redMul(t.z);
  return this.y.redMul(i).redISub(t.y.redMul(a)).cmpn(0) === 0;
};
St.prototype.eqXToP = function(t) {
  var r = this.z.redSqr(), n = t.toRed(this.curve.red).redMul(r);
  if (this.x.cmp(n) === 0)
    return !0;
  for (var a = t.clone(), i = this.curve.redN.redMul(r); ; ) {
    if (a.iadd(this.curve.n), a.cmp(this.curve.p) >= 0)
      return !1;
    if (n.redIAdd(i), this.x.cmp(n) === 0)
      return !0;
  }
};
St.prototype.inspect = function() {
  return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
St.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
const L3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: ul
}, [ul]), C3 = /* @__PURE__ */ Q(L3);
var Fn = Mt, tv = ct, Go = Wo, k3 = rr;
function hi(e) {
  Go.call(this, "mont", e), this.a = new Fn(e.a, 16).toRed(this.red), this.b = new Fn(e.b, 16).toRed(this.red), this.i4 = new Fn(4).toRed(this.red).redInvm(), this.two = new Fn(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
tv(hi, Go);
var cl = hi;
hi.prototype.validate = function(t) {
  var r = t.normalize().x, n = r.redSqr(), a = n.redMul(r).redAdd(n.redMul(this.a)).redAdd(r), i = a.redSqrt();
  return i.redSqr().cmp(a) === 0;
};
function xt(e, t, r) {
  Go.BasePoint.call(this, e, "projective"), t === null && r === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new Fn(t, 16), this.z = new Fn(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
}
tv(xt, Go.BasePoint);
hi.prototype.decodePoint = function(t, r) {
  return this.point(k3.toArray(t, r), 1);
};
hi.prototype.point = function(t, r) {
  return new xt(this, t, r);
};
hi.prototype.pointFromJSON = function(t) {
  return xt.fromJSON(this, t);
};
xt.prototype.precompute = function() {
};
xt.prototype._encode = function() {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
xt.fromJSON = function(t, r) {
  return new xt(t, r[0], r[1] || t.one);
};
xt.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
xt.prototype.isInfinity = function() {
  return this.z.cmpn(0) === 0;
};
xt.prototype.dbl = function() {
  var t = this.x.redAdd(this.z), r = t.redSqr(), n = this.x.redSub(this.z), a = n.redSqr(), i = r.redSub(a), s = r.redMul(a), f = i.redMul(a.redAdd(this.curve.a24.redMul(i)));
  return this.curve.point(s, f);
};
xt.prototype.add = function() {
  throw new Error("Not supported on Montgomery curve");
};
xt.prototype.diffAdd = function(t, r) {
  var n = this.x.redAdd(this.z), a = this.x.redSub(this.z), i = t.x.redAdd(t.z), s = t.x.redSub(t.z), f = s.redMul(n), v = i.redMul(a), m = r.z.redMul(f.redAdd(v).redSqr()), _ = r.x.redMul(f.redISub(v).redSqr());
  return this.curve.point(m, _);
};
xt.prototype.mul = function(t) {
  for (var r = t.clone(), n = this, a = this.curve.point(null, null), i = this, s = []; r.cmpn(0) !== 0; r.iushrn(1))
    s.push(r.andln(1));
  for (var f = s.length - 1; f >= 0; f--)
    s[f] === 0 ? (n = n.diffAdd(a, i), a = a.dbl()) : (a = n.diffAdd(a, i), n = n.dbl());
  return a;
};
xt.prototype.mulAdd = function() {
  throw new Error("Not supported on Montgomery curve");
};
xt.prototype.jumlAdd = function() {
  throw new Error("Not supported on Montgomery curve");
};
xt.prototype.eq = function(t) {
  return this.getX().cmp(t.getX()) === 0;
};
xt.prototype.normalize = function() {
  return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
};
xt.prototype.getX = function() {
  return this.normalize(), this.x.fromRed();
};
const N3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: cl
}, [cl]), q3 = /* @__PURE__ */ Q(N3);
var F3 = rr, Ir = Mt, rv = ct, Vo = Wo, U3 = F3.assert;
function Rr(e) {
  this.twisted = (e.a | 0) !== 1, this.mOneA = this.twisted && (e.a | 0) === -1, this.extended = this.mOneA, Vo.call(this, "edwards", e), this.a = new Ir(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new Ir(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new Ir(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), U3(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (e.c | 0) === 1;
}
rv(Rr, Vo);
var ll = Rr;
Rr.prototype._mulA = function(t) {
  return this.mOneA ? t.redNeg() : this.a.redMul(t);
};
Rr.prototype._mulC = function(t) {
  return this.oneC ? t : this.c.redMul(t);
};
Rr.prototype.jpoint = function(t, r, n, a) {
  return this.point(t, r, n, a);
};
Rr.prototype.pointFromX = function(t, r) {
  t = new Ir(t, 16), t.red || (t = t.toRed(this.red));
  var n = t.redSqr(), a = this.c2.redSub(this.a.redMul(n)), i = this.one.redSub(this.c2.redMul(this.d).redMul(n)), s = a.redMul(i.redInvm()), f = s.redSqrt();
  if (f.redSqr().redSub(s).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var v = f.fromRed().isOdd();
  return (r && !v || !r && v) && (f = f.redNeg()), this.point(t, f);
};
Rr.prototype.pointFromY = function(t, r) {
  t = new Ir(t, 16), t.red || (t = t.toRed(this.red));
  var n = t.redSqr(), a = n.redSub(this.c2), i = n.redMul(this.d).redMul(this.c2).redSub(this.a), s = a.redMul(i.redInvm());
  if (s.cmp(this.zero) === 0) {
    if (r)
      throw new Error("invalid point");
    return this.point(this.zero, t);
  }
  var f = s.redSqrt();
  if (f.redSqr().redSub(s).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  return f.fromRed().isOdd() !== r && (f = f.redNeg()), this.point(f, t);
};
Rr.prototype.validate = function(t) {
  if (t.isInfinity())
    return !0;
  t.normalize();
  var r = t.x.redSqr(), n = t.y.redSqr(), a = r.redMul(this.a).redAdd(n), i = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(n)));
  return a.cmp(i) === 0;
};
function ut(e, t, r, n, a) {
  Vo.BasePoint.call(this, e, "projective"), t === null && r === null && n === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new Ir(t, 16), this.y = new Ir(r, 16), this.z = n ? new Ir(n, 16) : this.curve.one, this.t = a && new Ir(a, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
}
rv(ut, Vo.BasePoint);
Rr.prototype.pointFromJSON = function(t) {
  return ut.fromJSON(this, t);
};
Rr.prototype.point = function(t, r, n, a) {
  return new ut(this, t, r, n, a);
};
ut.fromJSON = function(t, r) {
  return new ut(t, r[0], r[1], r[2]);
};
ut.prototype.inspect = function() {
  return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
ut.prototype.isInfinity = function() {
  return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
};
ut.prototype._extDbl = function() {
  var t = this.x.redSqr(), r = this.y.redSqr(), n = this.z.redSqr();
  n = n.redIAdd(n);
  var a = this.curve._mulA(t), i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(r), s = a.redAdd(r), f = s.redSub(n), v = a.redSub(r), m = i.redMul(f), _ = s.redMul(v), O = i.redMul(v), P = f.redMul(s);
  return this.curve.point(m, _, P, O);
};
ut.prototype._projDbl = function() {
  var t = this.x.redAdd(this.y).redSqr(), r = this.x.redSqr(), n = this.y.redSqr(), a, i, s, f, v, m;
  if (this.curve.twisted) {
    f = this.curve._mulA(r);
    var _ = f.redAdd(n);
    this.zOne ? (a = t.redSub(r).redSub(n).redMul(_.redSub(this.curve.two)), i = _.redMul(f.redSub(n)), s = _.redSqr().redSub(_).redSub(_)) : (v = this.z.redSqr(), m = _.redSub(v).redISub(v), a = t.redSub(r).redISub(n).redMul(m), i = _.redMul(f.redSub(n)), s = _.redMul(m));
  } else
    f = r.redAdd(n), v = this.curve._mulC(this.z).redSqr(), m = f.redSub(v).redSub(v), a = this.curve._mulC(t.redISub(f)).redMul(m), i = this.curve._mulC(f).redMul(r.redISub(n)), s = f.redMul(m);
  return this.curve.point(a, i, s);
};
ut.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
};
ut.prototype._extAdd = function(t) {
  var r = this.y.redSub(this.x).redMul(t.y.redSub(t.x)), n = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)), a = this.t.redMul(this.curve.dd).redMul(t.t), i = this.z.redMul(t.z.redAdd(t.z)), s = n.redSub(r), f = i.redSub(a), v = i.redAdd(a), m = n.redAdd(r), _ = s.redMul(f), O = v.redMul(m), P = s.redMul(m), C = f.redMul(v);
  return this.curve.point(_, O, C, P);
};
ut.prototype._projAdd = function(t) {
  var r = this.z.redMul(t.z), n = r.redSqr(), a = this.x.redMul(t.x), i = this.y.redMul(t.y), s = this.curve.d.redMul(a).redMul(i), f = n.redSub(s), v = n.redAdd(s), m = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(a).redISub(i), _ = r.redMul(f).redMul(m), O, P;
  return this.curve.twisted ? (O = r.redMul(v).redMul(i.redSub(this.curve._mulA(a))), P = f.redMul(v)) : (O = r.redMul(v).redMul(i.redSub(a)), P = this.curve._mulC(f).redMul(v)), this.curve.point(_, O, P);
};
ut.prototype.add = function(t) {
  return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t);
};
ut.prototype.mul = function(t) {
  return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t);
};
ut.prototype.mulAdd = function(t, r, n) {
  return this.curve._wnafMulAdd(1, [this, r], [t, n], 2, !1);
};
ut.prototype.jmulAdd = function(t, r, n) {
  return this.curve._wnafMulAdd(1, [this, r], [t, n], 2, !0);
};
ut.prototype.normalize = function() {
  if (this.zOne)
    return this;
  var t = this.z.redInvm();
  return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this;
};
ut.prototype.neg = function() {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg()
  );
};
ut.prototype.getX = function() {
  return this.normalize(), this.x.fromRed();
};
ut.prototype.getY = function() {
  return this.normalize(), this.y.fromRed();
};
ut.prototype.eq = function(t) {
  return this === t || this.getX().cmp(t.getX()) === 0 && this.getY().cmp(t.getY()) === 0;
};
ut.prototype.eqXToP = function(t) {
  var r = t.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(r) === 0)
    return !0;
  for (var n = t.clone(), a = this.curve.redN.redMul(this.z); ; ) {
    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)
      return !1;
    if (r.redIAdd(a), this.x.cmp(r) === 0)
      return !0;
  }
};
ut.prototype.toP = ut.prototype.normalize;
ut.prototype.mixedAdd = ut.prototype.add;
const D3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: ll
}, [ll]), j3 = /* @__PURE__ */ Q(D3);
(function(e) {
  var t = e;
  t.base = Wo, t.short = C3, t.mont = q3, t.edwards = j3;
})(eu);
const H3 = /* @__PURE__ */ ee({
  __proto__: null,
  default: eu
}, [eu]), nv = /* @__PURE__ */ Q(H3);
var tu = {}, ru = {}, ot = {}, z3 = Sn, K3 = ct, W3 = ot.inherits = K3;
function G3(e, t) {
  return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? !1 : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function V3(e, t) {
  if (Array.isArray(e))
    return e.slice();
  if (!e)
    return [];
  var r = [];
  if (typeof e == "string")
    if (t) {
      if (t === "hex")
        for (e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), a = 0; a < e.length; a += 2)
          r.push(parseInt(e[a] + e[a + 1], 16));
    } else
      for (var n = 0, a = 0; a < e.length; a++) {
        var i = e.charCodeAt(a);
        i < 128 ? r[n++] = i : i < 2048 ? (r[n++] = i >> 6 | 192, r[n++] = i & 63 | 128) : G3(e, a) ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++a) & 1023), r[n++] = i >> 18 | 240, r[n++] = i >> 12 & 63 | 128, r[n++] = i >> 6 & 63 | 128, r[n++] = i & 63 | 128) : (r[n++] = i >> 12 | 224, r[n++] = i >> 6 & 63 | 128, r[n++] = i & 63 | 128);
      }
  else
    for (a = 0; a < e.length; a++)
      r[a] = e[a] | 0;
  return r;
}
var Z3 = ot.toArray = V3;
function J3(e) {
  for (var t = "", r = 0; r < e.length; r++)
    t += av(e[r].toString(16));
  return t;
}
var Y3 = ot.toHex = J3;
function iv(e) {
  var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
  return t >>> 0;
}
var X3 = ot.htonl = iv;
function Q3(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var a = e[n];
    t === "little" && (a = iv(a)), r += ov(a.toString(16));
  }
  return r;
}
var ew = ot.toHex32 = Q3;
function av(e) {
  return e.length === 1 ? "0" + e : e;
}
var tw = ot.zero2 = av;
function ov(e) {
  return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
var rw = ot.zero8 = ov;
function nw(e, t, r, n) {
  var a = r - t;
  z3(a % 4 === 0);
  for (var i = new Array(a / 4), s = 0, f = t; s < i.length; s++, f += 4) {
    var v;
    n === "big" ? v = e[f] << 24 | e[f + 1] << 16 | e[f + 2] << 8 | e[f + 3] : v = e[f + 3] << 24 | e[f + 2] << 16 | e[f + 1] << 8 | e[f], i[s] = v >>> 0;
  }
  return i;
}
var iw = ot.join32 = nw;
function aw(e, t) {
  for (var r = new Array(e.length * 4), n = 0, a = 0; n < e.length; n++, a += 4) {
    var i = e[n];
    t === "big" ? (r[a] = i >>> 24, r[a + 1] = i >>> 16 & 255, r[a + 2] = i >>> 8 & 255, r[a + 3] = i & 255) : (r[a + 3] = i >>> 24, r[a + 2] = i >>> 16 & 255, r[a + 1] = i >>> 8 & 255, r[a] = i & 255);
  }
  return r;
}
var ow = ot.split32 = aw;
function fw(e, t) {
  return e >>> t | e << 32 - t;
}
var sw = ot.rotr32 = fw;
function uw(e, t) {
  return e << t | e >>> 32 - t;
}
var cw = ot.rotl32 = uw;
function lw(e, t) {
  return e + t >>> 0;
}
var hw = ot.sum32 = lw;
function dw(e, t, r) {
  return e + t + r >>> 0;
}
var pw = ot.sum32_3 = dw;
function vw(e, t, r, n) {
  return e + t + r + n >>> 0;
}
var yw = ot.sum32_4 = vw;
function gw(e, t, r, n, a) {
  return e + t + r + n + a >>> 0;
}
var bw = ot.sum32_5 = gw;
function _w(e, t, r, n) {
  var a = e[t], i = e[t + 1], s = n + i >>> 0, f = (s < n ? 1 : 0) + r + a;
  e[t] = f >>> 0, e[t + 1] = s;
}
var mw = ot.sum64 = _w;
function ww(e, t, r, n) {
  var a = t + n >>> 0, i = (a < t ? 1 : 0) + e + r;
  return i >>> 0;
}
var xw = ot.sum64_hi = ww;
function Mw(e, t, r, n) {
  var a = t + n;
  return a >>> 0;
}
var Ew = ot.sum64_lo = Mw;
function Sw(e, t, r, n, a, i, s, f) {
  var v = 0, m = t;
  m = m + n >>> 0, v += m < t ? 1 : 0, m = m + i >>> 0, v += m < i ? 1 : 0, m = m + f >>> 0, v += m < f ? 1 : 0;
  var _ = e + r + a + s + v;
  return _ >>> 0;
}
var Aw = ot.sum64_4_hi = Sw;
function $w(e, t, r, n, a, i, s, f) {
  var v = t + n + i + f;
  return v >>> 0;
}
var Rw = ot.sum64_4_lo = $w;
function Bw(e, t, r, n, a, i, s, f, v, m) {
  var _ = 0, O = t;
  O = O + n >>> 0, _ += O < t ? 1 : 0, O = O + i >>> 0, _ += O < i ? 1 : 0, O = O + f >>> 0, _ += O < f ? 1 : 0, O = O + m >>> 0, _ += O < m ? 1 : 0;
  var P = e + r + a + s + v + _;
  return P >>> 0;
}
var Tw = ot.sum64_5_hi = Bw;
function Iw(e, t, r, n, a, i, s, f, v, m) {
  var _ = t + n + i + f + m;
  return _ >>> 0;
}
var Pw = ot.sum64_5_lo = Iw;
function Ow(e, t, r) {
  var n = t << 32 - r | e >>> r;
  return n >>> 0;
}
var Lw = ot.rotr64_hi = Ow;
function Cw(e, t, r) {
  var n = e << 32 - r | t >>> r;
  return n >>> 0;
}
var kw = ot.rotr64_lo = Cw;
function Nw(e, t, r) {
  return e >>> r;
}
var qw = ot.shr64_hi = Nw;
function Fw(e, t, r) {
  var n = e << 32 - r | t >>> r;
  return n >>> 0;
}
var Uw = ot.shr64_lo = Fw;
const Dw = /* @__PURE__ */ ee({
  __proto__: null,
  inherits: W3,
  toArray: Z3,
  toHex: Y3,
  htonl: X3,
  toHex32: ew,
  zero2: tw,
  zero8: rw,
  join32: iw,
  split32: ow,
  rotr32: sw,
  rotl32: cw,
  sum32: hw,
  sum32_3: pw,
  sum32_4: yw,
  sum32_5: bw,
  sum64: mw,
  sum64_hi: xw,
  sum64_lo: Ew,
  sum64_4_hi: Aw,
  sum64_4_lo: Rw,
  sum64_5_hi: Tw,
  sum64_5_lo: Pw,
  rotr64_hi: Lw,
  rotr64_lo: kw,
  shr64_hi: qw,
  shr64_lo: Uw,
  default: ot
}, [ot]), Br = /* @__PURE__ */ Q(Dw);
var nu = {}, hl = Br, jw = Sn;
function Zo() {
  this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
var Hw = nu.BlockHash = Zo;
Zo.prototype.update = function(t, r) {
  if (t = hl.toArray(t, r), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
    t = this.pending;
    var n = t.length % this._delta8;
    this.pending = t.slice(t.length - n, t.length), this.pending.length === 0 && (this.pending = null), t = hl.join32(t, 0, t.length - n, this.endian);
    for (var a = 0; a < t.length; a += this._delta32)
      this._update(t, a, a + this._delta32);
  }
  return this;
};
Zo.prototype.digest = function(t) {
  return this.update(this._pad()), jw(this.pending === null), this._digest(t);
};
Zo.prototype._pad = function() {
  var t = this.pendingTotal, r = this._delta8, n = r - (t + this.padLength) % r, a = new Array(n + this.padLength);
  a[0] = 128;
  for (var i = 1; i < n; i++)
    a[i] = 0;
  if (t <<= 3, this.endian === "big") {
    for (var s = 8; s < this.padLength; s++)
      a[i++] = 0;
    a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = t >>> 24 & 255, a[i++] = t >>> 16 & 255, a[i++] = t >>> 8 & 255, a[i++] = t & 255;
  } else
    for (a[i++] = t & 255, a[i++] = t >>> 8 & 255, a[i++] = t >>> 16 & 255, a[i++] = t >>> 24 & 255, a[i++] = 0, a[i++] = 0, a[i++] = 0, a[i++] = 0, s = 8; s < this.padLength; s++)
      a[i++] = 0;
  return a;
};
const zw = /* @__PURE__ */ ee({
  __proto__: null,
  BlockHash: Hw,
  default: nu
}, [nu]), oa = /* @__PURE__ */ Q(zw);
var yn = {}, xr = {}, Kw = Br, _r = Kw.rotr32;
function Ww(e, t, r, n) {
  if (e === 0)
    return fv(t, r, n);
  if (e === 1 || e === 3)
    return uv(t, r, n);
  if (e === 2)
    return sv(t, r, n);
}
var Gw = xr.ft_1 = Ww;
function fv(e, t, r) {
  return e & t ^ ~e & r;
}
var Vw = xr.ch32 = fv;
function sv(e, t, r) {
  return e & t ^ e & r ^ t & r;
}
var Zw = xr.maj32 = sv;
function uv(e, t, r) {
  return e ^ t ^ r;
}
var Jw = xr.p32 = uv;
function Yw(e) {
  return _r(e, 2) ^ _r(e, 13) ^ _r(e, 22);
}
var Xw = xr.s0_256 = Yw;
function Qw(e) {
  return _r(e, 6) ^ _r(e, 11) ^ _r(e, 25);
}
var e6 = xr.s1_256 = Qw;
function t6(e) {
  return _r(e, 7) ^ _r(e, 18) ^ e >>> 3;
}
var r6 = xr.g0_256 = t6;
function n6(e) {
  return _r(e, 17) ^ _r(e, 19) ^ e >>> 10;
}
var i6 = xr.g1_256 = n6;
const a6 = /* @__PURE__ */ ee({
  __proto__: null,
  ft_1: Gw,
  ch32: Vw,
  maj32: Zw,
  p32: Jw,
  s0_256: Xw,
  s1_256: e6,
  g0_256: r6,
  g1_256: i6,
  default: xr
}, [xr]), cv = /* @__PURE__ */ Q(a6);
var Gn = Br, o6 = oa, f6 = cv, zf = Gn.rotl32, wi = Gn.sum32, s6 = Gn.sum32_5, u6 = f6.ft_1, lv = o6.BlockHash, c6 = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function Mr() {
  if (!(this instanceof Mr))
    return new Mr();
  lv.call(this), this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ], this.W = new Array(80);
}
Gn.inherits(Mr, lv);
var dl = Mr;
Mr.blockSize = 512;
Mr.outSize = 160;
Mr.hmacStrength = 80;
Mr.padLength = 64;
Mr.prototype._update = function(t, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = t[r + a];
  for (; a < n.length; a++)
    n[a] = zf(n[a - 3] ^ n[a - 8] ^ n[a - 14] ^ n[a - 16], 1);
  var i = this.h[0], s = this.h[1], f = this.h[2], v = this.h[3], m = this.h[4];
  for (a = 0; a < n.length; a++) {
    var _ = ~~(a / 20), O = s6(zf(i, 5), u6(_, s, f, v), m, n[a], c6[_]);
    m = v, v = f, f = zf(s, 30), s = i, i = O;
  }
  this.h[0] = wi(this.h[0], i), this.h[1] = wi(this.h[1], s), this.h[2] = wi(this.h[2], f), this.h[3] = wi(this.h[3], v), this.h[4] = wi(this.h[4], m);
};
Mr.prototype._digest = function(t) {
  return t === "hex" ? Gn.toHex32(this.h, "big") : Gn.split32(this.h, "big");
};
const l6 = /* @__PURE__ */ ee({
  __proto__: null,
  default: dl
}, [dl]), h6 = /* @__PURE__ */ Q(l6);
var Vn = Br, d6 = oa, di = cv, p6 = Sn, cr = Vn.sum32, v6 = Vn.sum32_4, y6 = Vn.sum32_5, g6 = di.ch32, b6 = di.maj32, _6 = di.s0_256, m6 = di.s1_256, w6 = di.g0_256, x6 = di.g1_256, hv = d6.BlockHash, M6 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
function Er() {
  if (!(this instanceof Er))
    return new Er();
  hv.call(this), this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ], this.k = M6, this.W = new Array(64);
}
Vn.inherits(Er, hv);
var pl = Er;
Er.blockSize = 512;
Er.outSize = 256;
Er.hmacStrength = 192;
Er.padLength = 64;
Er.prototype._update = function(t, r) {
  for (var n = this.W, a = 0; a < 16; a++)
    n[a] = t[r + a];
  for (; a < n.length; a++)
    n[a] = v6(x6(n[a - 2]), n[a - 7], w6(n[a - 15]), n[a - 16]);
  var i = this.h[0], s = this.h[1], f = this.h[2], v = this.h[3], m = this.h[4], _ = this.h[5], O = this.h[6], P = this.h[7];
  for (p6(this.k.length === n.length), a = 0; a < n.length; a++) {
    var C = y6(P, m6(m), g6(m, _, O), this.k[a], n[a]), M = cr(_6(i), b6(i, s, f));
    P = O, O = _, _ = m, m = cr(v, C), v = f, f = s, s = i, i = cr(C, M);
  }
  this.h[0] = cr(this.h[0], i), this.h[1] = cr(this.h[1], s), this.h[2] = cr(this.h[2], f), this.h[3] = cr(this.h[3], v), this.h[4] = cr(this.h[4], m), this.h[5] = cr(this.h[5], _), this.h[6] = cr(this.h[6], O), this.h[7] = cr(this.h[7], P);
};
Er.prototype._digest = function(t) {
  return t === "hex" ? Vn.toHex32(this.h, "big") : Vn.split32(this.h, "big");
};
const E6 = /* @__PURE__ */ ee({
  __proto__: null,
  default: pl
}, [pl]), dv = /* @__PURE__ */ Q(E6);
var iu = Br, pv = dv;
function Nr() {
  if (!(this instanceof Nr))
    return new Nr();
  pv.call(this), this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
iu.inherits(Nr, pv);
var vl = Nr;
Nr.blockSize = 512;
Nr.outSize = 224;
Nr.hmacStrength = 192;
Nr.padLength = 64;
Nr.prototype._digest = function(t) {
  return t === "hex" ? iu.toHex32(this.h.slice(0, 7), "big") : iu.split32(this.h.slice(0, 7), "big");
};
const S6 = /* @__PURE__ */ ee({
  __proto__: null,
  default: vl
}, [vl]), A6 = /* @__PURE__ */ Q(S6);
var Kt = Br, $6 = oa, R6 = Sn, mr = Kt.rotr64_hi, wr = Kt.rotr64_lo, vv = Kt.shr64_hi, yv = Kt.shr64_lo, Dr = Kt.sum64, Kf = Kt.sum64_hi, Wf = Kt.sum64_lo, B6 = Kt.sum64_4_hi, T6 = Kt.sum64_4_lo, I6 = Kt.sum64_5_hi, P6 = Kt.sum64_5_lo, gv = $6.BlockHash, O6 = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
function dr() {
  if (!(this instanceof dr))
    return new dr();
  gv.call(this), this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ], this.k = O6, this.W = new Array(160);
}
Kt.inherits(dr, gv);
var yl = dr;
dr.blockSize = 1024;
dr.outSize = 512;
dr.hmacStrength = 192;
dr.padLength = 128;
dr.prototype._prepareBlock = function(t, r) {
  for (var n = this.W, a = 0; a < 32; a++)
    n[a] = t[r + a];
  for (; a < n.length; a += 2) {
    var i = z6(n[a - 4], n[a - 3]), s = K6(n[a - 4], n[a - 3]), f = n[a - 14], v = n[a - 13], m = j6(n[a - 30], n[a - 29]), _ = H6(n[a - 30], n[a - 29]), O = n[a - 32], P = n[a - 31];
    n[a] = B6(
      i,
      s,
      f,
      v,
      m,
      _,
      O,
      P
    ), n[a + 1] = T6(
      i,
      s,
      f,
      v,
      m,
      _,
      O,
      P
    );
  }
};
dr.prototype._update = function(t, r) {
  this._prepareBlock(t, r);
  var n = this.W, a = this.h[0], i = this.h[1], s = this.h[2], f = this.h[3], v = this.h[4], m = this.h[5], _ = this.h[6], O = this.h[7], P = this.h[8], C = this.h[9], M = this.h[10], k = this.h[11], q = this.h[12], D = this.h[13], U = this.h[14], K = this.h[15];
  R6(this.k.length === n.length);
  for (var J = 0; J < n.length; J += 2) {
    var re = U, ue = K, ve = U6(P, C), se = D6(P, C), le = L6(P, C, M, k, q), V = C6(P, C, M, k, q, D), g = this.k[J], l = this.k[J + 1], u = n[J], o = n[J + 1], c = I6(
      re,
      ue,
      ve,
      se,
      le,
      V,
      g,
      l,
      u,
      o
    ), y = P6(
      re,
      ue,
      ve,
      se,
      le,
      V,
      g,
      l,
      u,
      o
    );
    re = q6(a, i), ue = F6(a, i), ve = k6(a, i, s, f, v), se = N6(a, i, s, f, v, m);
    var x = Kf(re, ue, ve, se), b = Wf(re, ue, ve, se);
    U = q, K = D, q = M, D = k, M = P, k = C, P = Kf(_, O, c, y), C = Wf(O, O, c, y), _ = v, O = m, v = s, m = f, s = a, f = i, a = Kf(c, y, x, b), i = Wf(c, y, x, b);
  }
  Dr(this.h, 0, a, i), Dr(this.h, 2, s, f), Dr(this.h, 4, v, m), Dr(this.h, 6, _, O), Dr(this.h, 8, P, C), Dr(this.h, 10, M, k), Dr(this.h, 12, q, D), Dr(this.h, 14, U, K);
};
dr.prototype._digest = function(t) {
  return t === "hex" ? Kt.toHex32(this.h, "big") : Kt.split32(this.h, "big");
};
function L6(e, t, r, n, a) {
  var i = e & r ^ ~e & a;
  return i < 0 && (i += 4294967296), i;
}
function C6(e, t, r, n, a, i) {
  var s = t & n ^ ~t & i;
  return s < 0 && (s += 4294967296), s;
}
function k6(e, t, r, n, a) {
  var i = e & r ^ e & a ^ r & a;
  return i < 0 && (i += 4294967296), i;
}
function N6(e, t, r, n, a, i) {
  var s = t & n ^ t & i ^ n & i;
  return s < 0 && (s += 4294967296), s;
}
function q6(e, t) {
  var r = mr(e, t, 28), n = mr(t, e, 2), a = mr(t, e, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function F6(e, t) {
  var r = wr(e, t, 28), n = wr(t, e, 2), a = wr(t, e, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function U6(e, t) {
  var r = mr(e, t, 14), n = mr(e, t, 18), a = mr(t, e, 9), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function D6(e, t) {
  var r = wr(e, t, 14), n = wr(e, t, 18), a = wr(t, e, 9), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function j6(e, t) {
  var r = mr(e, t, 1), n = mr(e, t, 8), a = vv(e, t, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function H6(e, t) {
  var r = wr(e, t, 1), n = wr(e, t, 8), a = yv(e, t, 7), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function z6(e, t) {
  var r = mr(e, t, 19), n = mr(t, e, 29), a = vv(e, t, 6), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
function K6(e, t) {
  var r = wr(e, t, 19), n = wr(t, e, 29), a = yv(e, t, 6), i = r ^ n ^ a;
  return i < 0 && (i += 4294967296), i;
}
const W6 = /* @__PURE__ */ ee({
  __proto__: null,
  default: yl
}, [yl]), bv = /* @__PURE__ */ Q(W6);
var au = Br, _v = bv;
function qr() {
  if (!(this instanceof qr))
    return new qr();
  _v.call(this), this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
au.inherits(qr, _v);
var gl = qr;
qr.blockSize = 1024;
qr.outSize = 384;
qr.hmacStrength = 192;
qr.padLength = 128;
qr.prototype._digest = function(t) {
  return t === "hex" ? au.toHex32(this.h.slice(0, 12), "big") : au.split32(this.h.slice(0, 12), "big");
};
const G6 = /* @__PURE__ */ ee({
  __proto__: null,
  default: gl
}, [gl]), V6 = /* @__PURE__ */ Q(G6);
var Z6 = yn.sha1 = h6, J6 = yn.sha224 = A6, Y6 = yn.sha256 = dv, X6 = yn.sha384 = V6, Q6 = yn.sha512 = bv;
const e4 = /* @__PURE__ */ ee({
  __proto__: null,
  sha1: Z6,
  sha224: J6,
  sha256: Y6,
  sha384: X6,
  sha512: Q6,
  default: yn
}, [yn]), t4 = /* @__PURE__ */ Q(e4);
var ou = {}, gn = Br, r4 = oa, ma = gn.rotl32, bl = gn.sum32, xi = gn.sum32_3, _l = gn.sum32_4, mv = r4.BlockHash;
function Sr() {
  if (!(this instanceof Sr))
    return new Sr();
  mv.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
}
gn.inherits(Sr, mv);
var n4 = ou.ripemd160 = Sr;
Sr.blockSize = 512;
Sr.outSize = 160;
Sr.hmacStrength = 192;
Sr.padLength = 64;
Sr.prototype._update = function(t, r) {
  for (var n = this.h[0], a = this.h[1], i = this.h[2], s = this.h[3], f = this.h[4], v = n, m = a, _ = i, O = s, P = f, C = 0; C < 80; C++) {
    var M = bl(
      ma(
        _l(n, ml(C, a, i, s), t[o4[C] + r], i4(C)),
        s4[C]
      ),
      f
    );
    n = f, f = s, s = ma(i, 10), i = a, a = M, M = bl(
      ma(
        _l(v, ml(79 - C, m, _, O), t[f4[C] + r], a4(C)),
        u4[C]
      ),
      P
    ), v = P, P = O, O = ma(_, 10), _ = m, m = M;
  }
  M = xi(this.h[1], i, O), this.h[1] = xi(this.h[2], s, P), this.h[2] = xi(this.h[3], f, v), this.h[3] = xi(this.h[4], n, m), this.h[4] = xi(this.h[0], a, _), this.h[0] = M;
};
Sr.prototype._digest = function(t) {
  return t === "hex" ? gn.toHex32(this.h, "little") : gn.split32(this.h, "little");
};
function ml(e, t, r, n) {
  return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n);
}
function i4(e) {
  return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function a4(e) {
  return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var o4 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
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
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
], f4 = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
], s4 = [
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
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
], u4 = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
];
const c4 = /* @__PURE__ */ ee({
  __proto__: null,
  ripemd160: n4,
  default: ou
}, [ou]), l4 = /* @__PURE__ */ Q(c4);
var h4 = Br, d4 = Sn;
function Zn(e, t, r) {
  if (!(this instanceof Zn))
    return new Zn(e, t, r);
  this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(h4.toArray(t, r));
}
var wl = Zn;
Zn.prototype._init = function(t) {
  t.length > this.blockSize && (t = new this.Hash().update(t).digest()), d4(t.length <= this.blockSize);
  for (var r = t.length; r < this.blockSize; r++)
    t.push(0);
  for (r = 0; r < t.length; r++)
    t[r] ^= 54;
  for (this.inner = new this.Hash().update(t), r = 0; r < t.length; r++)
    t[r] ^= 106;
  this.outer = new this.Hash().update(t);
};
Zn.prototype.update = function(t, r) {
  return this.inner.update(t, r), this;
};
Zn.prototype.digest = function(t) {
  return this.outer.update(this.inner.digest()), this.outer.digest(t);
};
const p4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: wl
}, [wl]), v4 = /* @__PURE__ */ Q(p4);
(function(e) {
  var t = e;
  t.utils = Br, t.common = oa, t.sha = t4, t.ripemd = l4, t.hmac = v4, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
})(ru);
const y4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: ru
}, [ru]), n0 = /* @__PURE__ */ Q(y4);
var Gf, xl;
function g4() {
  return xl || (xl = 1, Gf = {
    doubles: {
      step: 4,
      points: [
        [
          "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
          "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
        ],
        [
          "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
          "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
        ],
        [
          "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
          "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
        ],
        [
          "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
          "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
        ],
        [
          "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
          "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
        ],
        [
          "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
          "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
        ],
        [
          "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
          "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
        ],
        [
          "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
          "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
        ],
        [
          "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
          "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
        ],
        [
          "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
          "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
        ],
        [
          "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
          "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
        ],
        [
          "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
          "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
        ],
        [
          "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
          "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
        ],
        [
          "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
          "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
        ],
        [
          "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
          "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
        ],
        [
          "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
          "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
        ],
        [
          "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
          "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
        ],
        [
          "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
          "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
        ],
        [
          "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
          "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
        ],
        [
          "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
          "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
        ],
        [
          "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
          "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
        ],
        [
          "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
          "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
        ],
        [
          "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
          "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
        ],
        [
          "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
          "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
        ],
        [
          "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
          "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
        ],
        [
          "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
          "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
        ],
        [
          "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
          "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
        ],
        [
          "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
          "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
        ],
        [
          "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
          "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
        ],
        [
          "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
          "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
        ],
        [
          "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
          "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
        ],
        [
          "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
          "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
        ],
        [
          "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
          "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
        ],
        [
          "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
          "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
        ],
        [
          "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
          "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
        ],
        [
          "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
          "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
        ],
        [
          "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
          "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
        ],
        [
          "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
          "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
        ],
        [
          "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
          "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
        ],
        [
          "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
          "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
        ],
        [
          "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
          "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
        ],
        [
          "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
          "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
        ],
        [
          "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
          "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
        ],
        [
          "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
          "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
        ],
        [
          "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
          "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
        ],
        [
          "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
          "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
        ],
        [
          "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
          "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
        ],
        [
          "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
          "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
        ],
        [
          "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
          "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
        ],
        [
          "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
          "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
        ],
        [
          "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
          "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
        ],
        [
          "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
          "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
        ],
        [
          "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
          "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
        ],
        [
          "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
          "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
        ],
        [
          "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
          "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
        ],
        [
          "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
          "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
        ],
        [
          "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
          "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
        ],
        [
          "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
          "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
        ],
        [
          "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
          "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
        ],
        [
          "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
          "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
        ],
        [
          "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
          "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
        ],
        [
          "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
          "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
        ],
        [
          "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
          "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
        ],
        [
          "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
          "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
        ],
        [
          "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
          "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
        ]
      ]
    },
    naf: {
      wnd: 7,
      points: [
        [
          "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
          "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
        ],
        [
          "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
          "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
        ],
        [
          "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
          "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
        ],
        [
          "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
        ],
        [
          "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
          "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
        ],
        [
          "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
          "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
        ],
        [
          "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
          "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
        ],
        [
          "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
          "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
        ],
        [
          "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
          "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
        ],
        [
          "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
          "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
        ],
        [
          "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
          "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
        ],
        [
          "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
          "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
        ],
        [
          "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
          "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
        ],
        [
          "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
          "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
        ],
        [
          "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
          "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
        ],
        [
          "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
          "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
        ],
        [
          "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
          "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
        ],
        [
          "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
          "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
        ],
        [
          "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
          "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
        ],
        [
          "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
          "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
        ],
        [
          "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
          "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
        ],
        [
          "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
          "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
        ],
        [
          "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
          "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
        ],
        [
          "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
          "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
        ],
        [
          "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
          "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
        ],
        [
          "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
          "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
        ],
        [
          "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
          "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
        ],
        [
          "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
          "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
        ],
        [
          "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
          "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
        ],
        [
          "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
          "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
        ],
        [
          "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
          "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
        ],
        [
          "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
          "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
        ],
        [
          "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
          "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
        ],
        [
          "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
          "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
        ],
        [
          "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
          "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
        ],
        [
          "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
          "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
        ],
        [
          "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
          "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
        ],
        [
          "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
          "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
        ],
        [
          "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
          "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
        ],
        [
          "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
          "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
        ],
        [
          "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
          "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
        ],
        [
          "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
          "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
        ],
        [
          "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
          "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
        ],
        [
          "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
          "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
        ],
        [
          "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
          "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
        ],
        [
          "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
          "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
        ],
        [
          "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
          "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
        ],
        [
          "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
          "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
        ],
        [
          "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
          "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
        ],
        [
          "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
          "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
        ],
        [
          "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
          "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
        ],
        [
          "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
          "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
        ],
        [
          "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
          "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
        ],
        [
          "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
          "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
        ],
        [
          "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
          "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
        ],
        [
          "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
          "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
        ],
        [
          "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
          "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
        ],
        [
          "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
          "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
        ],
        [
          "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
          "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
        ],
        [
          "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
          "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
        ],
        [
          "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
          "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
        ],
        [
          "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
          "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
        ],
        [
          "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
          "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
        ],
        [
          "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
          "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
        ],
        [
          "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
          "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
        ],
        [
          "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
          "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
        ],
        [
          "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
          "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
        ],
        [
          "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
          "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
        ],
        [
          "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
          "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
        ],
        [
          "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
          "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
        ],
        [
          "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
          "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
        ],
        [
          "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
          "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
        ],
        [
          "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
          "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
        ],
        [
          "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
          "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
        ],
        [
          "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
          "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
        ],
        [
          "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
          "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
        ],
        [
          "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
          "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
        ],
        [
          "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
          "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
        ],
        [
          "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
          "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
        ],
        [
          "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
          "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
        ],
        [
          "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
          "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
        ],
        [
          "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
          "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
        ],
        [
          "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
          "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
        ],
        [
          "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
          "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
        ],
        [
          "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
          "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
        ],
        [
          "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
          "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
        ],
        [
          "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
          "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
        ],
        [
          "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
          "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
        ],
        [
          "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
          "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
        ],
        [
          "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
          "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
        ],
        [
          "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
          "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
        ],
        [
          "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
          "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
        ],
        [
          "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
          "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
        ],
        [
          "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
          "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
        ],
        [
          "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
          "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
        ],
        [
          "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
          "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
        ],
        [
          "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
          "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
        ],
        [
          "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
          "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
        ],
        [
          "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
          "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
        ],
        [
          "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
          "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
        ],
        [
          "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
          "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
        ],
        [
          "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
          "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
        ],
        [
          "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
          "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
        ],
        [
          "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
          "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
        ],
        [
          "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
          "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
        ],
        [
          "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
          "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
        ],
        [
          "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
          "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
        ],
        [
          "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
          "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
        ],
        [
          "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
          "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
        ],
        [
          "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
          "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
        ],
        [
          "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
          "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
        ],
        [
          "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
          "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
        ],
        [
          "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
          "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
        ],
        [
          "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
          "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
        ],
        [
          "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
          "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
        ],
        [
          "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
          "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
        ],
        [
          "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
          "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
        ],
        [
          "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
          "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
        ],
        [
          "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
          "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
        ],
        [
          "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
          "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
        ],
        [
          "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
          "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
        ],
        [
          "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
          "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
        ],
        [
          "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
          "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
        ],
        [
          "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
          "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
        ],
        [
          "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
          "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
        ],
        [
          "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
          "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
        ],
        [
          "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
          "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
        ]
      ]
    }
  }), Gf;
}
(function(e) {
  var t = e, r = n0, n = nv, a = rr, i = a.assert;
  function s(m) {
    m.type === "short" ? this.curve = new n.short(m) : m.type === "edwards" ? this.curve = new n.edwards(m) : this.curve = new n.mont(m), this.g = this.curve.g, this.n = this.curve.n, this.hash = m.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  t.PresetCurve = s;
  function f(m, _) {
    Object.defineProperty(t, m, {
      configurable: !0,
      enumerable: !0,
      get: function() {
        var O = new s(_);
        return Object.defineProperty(t, m, {
          configurable: !0,
          enumerable: !0,
          value: O
        }), O;
      }
    });
  }
  f("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: r.sha256,
    gRed: !1,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  }), f("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: r.sha256,
    gRed: !1,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  }), f("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: r.sha256,
    gRed: !1,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  }), f("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: r.sha384,
    gRed: !1,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  }), f("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: r.sha512,
    gRed: !1,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  }), f("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: r.sha256,
    gRed: !1,
    g: [
      "9"
    ]
  }), f("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: r.sha256,
    gRed: !1,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var v;
  try {
    v = g4();
  } catch {
    v = void 0;
  }
  f("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: r.sha256,
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: !1,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      v
    ]
  });
})(tu);
const b4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: tu
}, [tu]), i0 = /* @__PURE__ */ Q(b4);
var _4 = n0, dn = Q1, wv = Sn;
function Vr(e) {
  if (!(this instanceof Vr))
    return new Vr(e);
  this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
  var t = dn.toArray(e.entropy, e.entropyEnc || "hex"), r = dn.toArray(e.nonce, e.nonceEnc || "hex"), n = dn.toArray(e.pers, e.persEnc || "hex");
  wv(
    t.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._init(t, r, n);
}
var Ml = Vr;
Vr.prototype._init = function(t, r, n) {
  var a = t.concat(r).concat(n);
  this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++)
    this.K[i] = 0, this.V[i] = 1;
  this._update(a), this._reseed = 1, this.reseedInterval = 281474976710656;
};
Vr.prototype._hmac = function() {
  return new _4.hmac(this.hash, this.K);
};
Vr.prototype._update = function(t) {
  var r = this._hmac().update(this.V).update([0]);
  t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
};
Vr.prototype.reseed = function(t, r, n, a) {
  typeof r != "string" && (a = n, n = r, r = null), t = dn.toArray(t, r), n = dn.toArray(n, a), wv(
    t.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ), this._update(t.concat(n || [])), this._reseed = 1;
};
Vr.prototype.generate = function(t, r, n, a) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  typeof r != "string" && (a = n, n = r, r = null), n && (n = dn.toArray(n, a || "hex"), this._update(n));
  for (var i = []; i.length < t; )
    this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
  var s = i.slice(0, t);
  return this._update(n), this._reseed++, dn.encode(s, r);
};
const m4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ml
}, [Ml]), w4 = /* @__PURE__ */ Q(m4);
var x4 = Mt, M4 = rr, fu = M4.assert;
function Ot(e, t) {
  this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var El = Ot;
Ot.fromPublic = function(t, r, n) {
  return r instanceof Ot ? r : new Ot(t, {
    pub: r,
    pubEnc: n
  });
};
Ot.fromPrivate = function(t, r, n) {
  return r instanceof Ot ? r : new Ot(t, {
    priv: r,
    privEnc: n
  });
};
Ot.prototype.validate = function() {
  var t = this.getPublic();
  return t.isInfinity() ? { result: !1, reason: "Invalid public key" } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
};
Ot.prototype.getPublic = function(t, r) {
  return typeof t == "string" && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub;
};
Ot.prototype.getPrivate = function(t) {
  return t === "hex" ? this.priv.toString(16, 2) : this.priv;
};
Ot.prototype._importPrivate = function(t, r) {
  this.priv = new x4(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
};
Ot.prototype._importPublic = function(t, r) {
  if (t.x || t.y) {
    this.ec.curve.type === "mont" ? fu(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && fu(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(t, r);
};
Ot.prototype.derive = function(t) {
  return t.validate() || fu(t.validate(), "public point not validated"), t.mul(this.priv).getX();
};
Ot.prototype.sign = function(t, r, n) {
  return this.ec.sign(t, this, r, n);
};
Ot.prototype.verify = function(t, r) {
  return this.ec.verify(t, r, this);
};
Ot.prototype.inspect = function() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
const E4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: El
}, [El]), S4 = /* @__PURE__ */ Q(E4);
var Ya = Mt, a0 = rr, A4 = a0.assert;
function Jo(e, t) {
  if (e instanceof Jo)
    return e;
  this._importDER(e, t) || (A4(e.r && e.s, "Signature without r or s"), this.r = new Ya(e.r, 16), this.s = new Ya(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var Sl = Jo;
function $4() {
  this.place = 0;
}
function Vf(e, t) {
  var r = e[t.place++];
  if (!(r & 128))
    return r;
  var n = r & 15;
  if (n === 0 || n > 4)
    return !1;
  for (var a = 0, i = 0, s = t.place; i < n; i++, s++)
    a <<= 8, a |= e[s], a >>>= 0;
  return a <= 127 ? !1 : (t.place = s, a);
}
function Al(e) {
  for (var t = 0, r = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r; )
    t++;
  return t === 0 ? e : e.slice(t);
}
Jo.prototype._importDER = function(t, r) {
  t = a0.toArray(t, r);
  var n = new $4();
  if (t[n.place++] !== 48)
    return !1;
  var a = Vf(t, n);
  if (a === !1 || a + n.place !== t.length || t[n.place++] !== 2)
    return !1;
  var i = Vf(t, n);
  if (i === !1)
    return !1;
  var s = t.slice(n.place, i + n.place);
  if (n.place += i, t[n.place++] !== 2)
    return !1;
  var f = Vf(t, n);
  if (f === !1 || t.length !== f + n.place)
    return !1;
  var v = t.slice(n.place, f + n.place);
  if (s[0] === 0)
    if (s[1] & 128)
      s = s.slice(1);
    else
      return !1;
  if (v[0] === 0)
    if (v[1] & 128)
      v = v.slice(1);
    else
      return !1;
  return this.r = new Ya(s), this.s = new Ya(v), this.recoveryParam = null, !0;
};
function Zf(e, t) {
  if (t < 128) {
    e.push(t);
    return;
  }
  var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
  for (e.push(r | 128); --r; )
    e.push(t >>> (r << 3) & 255);
  e.push(t);
}
Jo.prototype.toDER = function(t) {
  var r = this.r.toArray(), n = this.s.toArray();
  for (r[0] & 128 && (r = [0].concat(r)), n[0] & 128 && (n = [0].concat(n)), r = Al(r), n = Al(n); !n[0] && !(n[1] & 128); )
    n = n.slice(1);
  var a = [2];
  Zf(a, r.length), a = a.concat(r), a.push(2), Zf(a, n.length);
  var i = a.concat(n), s = [48];
  return Zf(s, i.length), s = s.concat(i), a0.encode(s, t);
};
const R4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Sl
}, [Sl]), B4 = /* @__PURE__ */ Q(R4);
var pn = Mt, xv = w4, T4 = rr, Jf = i0, I4 = ev, Mv = T4.assert, o0 = S4, Yo = B4;
function Qt(e) {
  if (!(this instanceof Qt))
    return new Qt(e);
  typeof e == "string" && (Mv(
    Object.prototype.hasOwnProperty.call(Jf, e),
    "Unknown curve " + e
  ), e = Jf[e]), e instanceof Jf.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var $l = Qt;
Qt.prototype.keyPair = function(t) {
  return new o0(this, t);
};
Qt.prototype.keyFromPrivate = function(t, r) {
  return o0.fromPrivate(this, t, r);
};
Qt.prototype.keyFromPublic = function(t, r) {
  return o0.fromPublic(this, t, r);
};
Qt.prototype.genKeyPair = function(t) {
  t || (t = {});
  for (var r = new xv({
    hash: this.hash,
    pers: t.pers,
    persEnc: t.persEnc || "utf8",
    entropy: t.entropy || I4(this.hash.hmacStrength),
    entropyEnc: t.entropy && t.entropyEnc || "utf8",
    nonce: this.n.toArray()
  }), n = this.n.byteLength(), a = this.n.sub(new pn(2)); ; ) {
    var i = new pn(r.generate(n));
    if (!(i.cmp(a) > 0))
      return i.iaddn(1), this.keyFromPrivate(i);
  }
};
Qt.prototype._truncateToN = function(t, r) {
  var n = t.byteLength() * 8 - this.n.bitLength();
  return n > 0 && (t = t.ushrn(n)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
};
Qt.prototype.sign = function(t, r, n, a) {
  typeof n == "object" && (a = n, n = null), a || (a = {}), r = this.keyFromPrivate(r, n), t = this._truncateToN(new pn(t, 16));
  for (var i = this.n.byteLength(), s = r.getPrivate().toArray("be", i), f = t.toArray("be", i), v = new xv({
    hash: this.hash,
    entropy: s,
    nonce: f,
    pers: a.pers,
    persEnc: a.persEnc || "utf8"
  }), m = this.n.sub(new pn(1)), _ = 0; ; _++) {
    var O = a.k ? a.k(_) : new pn(v.generate(this.n.byteLength()));
    if (O = this._truncateToN(O, !0), !(O.cmpn(1) <= 0 || O.cmp(m) >= 0)) {
      var P = this.g.mul(O);
      if (!P.isInfinity()) {
        var C = P.getX(), M = C.umod(this.n);
        if (M.cmpn(0) !== 0) {
          var k = O.invm(this.n).mul(M.mul(r.getPrivate()).iadd(t));
          if (k = k.umod(this.n), k.cmpn(0) !== 0) {
            var q = (P.getY().isOdd() ? 1 : 0) | (C.cmp(M) !== 0 ? 2 : 0);
            return a.canonical && k.cmp(this.nh) > 0 && (k = this.n.sub(k), q ^= 1), new Yo({ r: M, s: k, recoveryParam: q });
          }
        }
      }
    }
  }
};
Qt.prototype.verify = function(t, r, n, a) {
  t = this._truncateToN(new pn(t, 16)), n = this.keyFromPublic(n, a), r = new Yo(r, "hex");
  var i = r.r, s = r.s;
  if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0 || s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
    return !1;
  var f = s.invm(this.n), v = f.mul(t).umod(this.n), m = f.mul(i).umod(this.n), _;
  return this.curve._maxwellTrick ? (_ = this.g.jmulAdd(v, n.getPublic(), m), _.isInfinity() ? !1 : _.eqXToP(i)) : (_ = this.g.mulAdd(v, n.getPublic(), m), _.isInfinity() ? !1 : _.getX().umod(this.n).cmp(i) === 0);
};
Qt.prototype.recoverPubKey = function(e, t, r, n) {
  Mv((3 & r) === r, "The recovery param is more than two bits"), t = new Yo(t, n);
  var a = this.n, i = new pn(e), s = t.r, f = t.s, v = r & 1, m = r >> 1;
  if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && m)
    throw new Error("Unable to find sencond key candinate");
  m ? s = this.curve.pointFromX(s.add(this.curve.n), v) : s = this.curve.pointFromX(s, v);
  var _ = t.r.invm(a), O = a.sub(i).mul(_).umod(a), P = f.mul(_).umod(a);
  return this.g.mulAdd(O, s, P);
};
Qt.prototype.getKeyRecoveryParam = function(e, t, r, n) {
  if (t = new Yo(t, n), t.recoveryParam !== null)
    return t.recoveryParam;
  for (var a = 0; a < 4; a++) {
    var i;
    try {
      i = this.recoverPubKey(e, t, a);
    } catch {
      continue;
    }
    if (i.eq(r))
      return a;
  }
  throw new Error("Unable to find valid recovery factor");
};
const P4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: $l
}, [$l]), O4 = /* @__PURE__ */ Q(P4);
var fa = rr, Ev = fa.assert, Rl = fa.parseBytes, pi = fa.cachedProperty;
function wt(e, t) {
  this.eddsa = e, this._secret = Rl(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = Rl(t.pub);
}
wt.fromPublic = function(t, r) {
  return r instanceof wt ? r : new wt(t, { pub: r });
};
wt.fromSecret = function(t, r) {
  return r instanceof wt ? r : new wt(t, { secret: r });
};
wt.prototype.secret = function() {
  return this._secret;
};
pi(wt, "pubBytes", function() {
  return this.eddsa.encodePoint(this.pub());
});
pi(wt, "pub", function() {
  return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
});
pi(wt, "privBytes", function() {
  var t = this.eddsa, r = this.hash(), n = t.encodingLength - 1, a = r.slice(0, t.encodingLength);
  return a[0] &= 248, a[n] &= 127, a[n] |= 64, a;
});
pi(wt, "priv", function() {
  return this.eddsa.decodeInt(this.privBytes());
});
pi(wt, "hash", function() {
  return this.eddsa.hash().update(this.secret()).digest();
});
pi(wt, "messagePrefix", function() {
  return this.hash().slice(this.eddsa.encodingLength);
});
wt.prototype.sign = function(t) {
  return Ev(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this);
};
wt.prototype.verify = function(t, r) {
  return this.eddsa.verify(t, r, this);
};
wt.prototype.getSecret = function(t) {
  return Ev(this._secret, "KeyPair is public only"), fa.encode(this.secret(), t);
};
wt.prototype.getPublic = function(t) {
  return fa.encode(this.pubBytes(), t);
};
var Bl = wt;
const L4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Bl
}, [Bl]), C4 = /* @__PURE__ */ Q(L4);
var k4 = Mt, Xo = rr, N4 = Xo.assert, Qo = Xo.cachedProperty, q4 = Xo.parseBytes;
function An(e, t) {
  this.eddsa = e, typeof t != "object" && (t = q4(t)), Array.isArray(t) && (t = {
    R: t.slice(0, e.encodingLength),
    S: t.slice(e.encodingLength)
  }), N4(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof k4 && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded;
}
Qo(An, "S", function() {
  return this.eddsa.decodeInt(this.Sencoded());
});
Qo(An, "R", function() {
  return this.eddsa.decodePoint(this.Rencoded());
});
Qo(An, "Rencoded", function() {
  return this.eddsa.encodePoint(this.R());
});
Qo(An, "Sencoded", function() {
  return this.eddsa.encodeInt(this.S());
});
An.prototype.toBytes = function() {
  return this.Rencoded().concat(this.Sencoded());
};
An.prototype.toHex = function() {
  return Xo.encode(this.toBytes(), "hex").toUpperCase();
};
var Tl = An;
const F4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Tl
}, [Tl]), U4 = /* @__PURE__ */ Q(F4);
var D4 = n0, j4 = i0, Jn = rr, H4 = Jn.assert, Sv = Jn.parseBytes, Av = C4, Il = U4;
function Wt(e) {
  if (H4(e === "ed25519", "only tested with ed25519 so far"), !(this instanceof Wt))
    return new Wt(e);
  e = j4[e].curve, this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = D4.sha512;
}
var Pl = Wt;
Wt.prototype.sign = function(t, r) {
  t = Sv(t);
  var n = this.keyFromSecret(r), a = this.hashInt(n.messagePrefix(), t), i = this.g.mul(a), s = this.encodePoint(i), f = this.hashInt(s, n.pubBytes(), t).mul(n.priv()), v = a.add(f).umod(this.curve.n);
  return this.makeSignature({ R: i, S: v, Rencoded: s });
};
Wt.prototype.verify = function(t, r, n) {
  t = Sv(t), r = this.makeSignature(r);
  var a = this.keyFromPublic(n), i = this.hashInt(r.Rencoded(), a.pubBytes(), t), s = this.g.mul(r.S()), f = r.R().add(a.pub().mul(i));
  return f.eq(s);
};
Wt.prototype.hashInt = function() {
  for (var t = this.hash(), r = 0; r < arguments.length; r++)
    t.update(arguments[r]);
  return Jn.intFromLE(t.digest()).umod(this.curve.n);
};
Wt.prototype.keyFromPublic = function(t) {
  return Av.fromPublic(this, t);
};
Wt.prototype.keyFromSecret = function(t) {
  return Av.fromSecret(this, t);
};
Wt.prototype.makeSignature = function(t) {
  return t instanceof Il ? t : new Il(this, t);
};
Wt.prototype.encodePoint = function(t) {
  var r = t.getY().toArray("le", this.encodingLength);
  return r[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, r;
};
Wt.prototype.decodePoint = function(t) {
  t = Jn.parseBytes(t);
  var r = t.length - 1, n = t.slice(0, r).concat(t[r] & -129), a = (t[r] & 128) !== 0, i = Jn.intFromLE(n);
  return this.curve.pointFromY(i, a);
};
Wt.prototype.encodeInt = function(t) {
  return t.toArray("le", this.encodingLength);
};
Wt.prototype.decodeInt = function(t) {
  return Jn.intFromLE(t);
};
Wt.prototype.isPoint = function(t) {
  return t instanceof this.pointClass;
};
const z4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Pl
}, [Pl]), K4 = /* @__PURE__ */ Q(z4);
(function(e) {
  var t = e;
  t.version = x3.version, t.utils = rr, t.rand = ev, t.curve = nv, t.curves = i0, t.ec = O4, t.eddsa = K4;
})(Ys);
const W4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ys
}, [Ys]), f0 = /* @__PURE__ */ Q(W4), G4 = f0.ec, yr = new G4("secp256k1"), Xe = yr.curve, ft = Xe.n.constructor;
function V4(e, t) {
  let r = new ft(t);
  if (r.cmp(Xe.p) >= 0)
    return null;
  r = r.toRed(Xe.red);
  let n = r.redSqr().redIMul(r).redIAdd(Xe.b).redSqrt();
  return e === 3 !== n.isOdd() && (n = n.redNeg()), yr.keyPair({ pub: { x: r, y: n } });
}
function Z4(e, t, r) {
  let n = new ft(t), a = new ft(r);
  if (n.cmp(Xe.p) >= 0 || a.cmp(Xe.p) >= 0 || (n = n.toRed(Xe.red), a = a.toRed(Xe.red), (e === 6 || e === 7) && a.isOdd() !== (e === 7)))
    return null;
  const i = n.redSqr().redIMul(n);
  return a.redSqr().redISub(i.redIAdd(Xe.b)).isZero() ? yr.keyPair({ pub: { x: n, y: a } }) : null;
}
function jr(e) {
  const t = e[0];
  switch (t) {
    case 2:
    case 3:
      return e.length !== 33 ? null : V4(t, e.subarray(1, 33));
    case 4:
    case 6:
    case 7:
      return e.length !== 65 ? null : Z4(t, e.subarray(1, 33), e.subarray(33, 65));
    default:
      return null;
  }
}
function nn(e, t) {
  const r = t.encode(null, e.length === 33);
  for (let n = 0; n < e.length; ++n)
    e[n] = r[n];
}
var Ol = {
  contextRandomize() {
    return 0;
  },
  privateKeyVerify(e) {
    const t = new ft(e);
    return t.cmp(Xe.n) < 0 && !t.isZero() ? 0 : 1;
  },
  privateKeyNegate(e) {
    const t = new ft(e), r = Xe.n.sub(t).umod(Xe.n).toArrayLike(Uint8Array, "be", 32);
    return e.set(r), 0;
  },
  privateKeyTweakAdd(e, t) {
    const r = new ft(t);
    if (r.cmp(Xe.n) >= 0 || (r.iadd(new ft(e)), r.cmp(Xe.n) >= 0 && r.isub(Xe.n), r.isZero()))
      return 1;
    const n = r.toArrayLike(Uint8Array, "be", 32);
    return e.set(n), 0;
  },
  privateKeyTweakMul(e, t) {
    let r = new ft(t);
    if (r.cmp(Xe.n) >= 0 || r.isZero())
      return 1;
    r.imul(new ft(e)), r.cmp(Xe.n) >= 0 && (r = r.umod(Xe.n));
    const n = r.toArrayLike(Uint8Array, "be", 32);
    return e.set(n), 0;
  },
  publicKeyVerify(e) {
    return jr(e) === null ? 1 : 0;
  },
  publicKeyCreate(e, t) {
    const r = new ft(t);
    if (r.cmp(Xe.n) >= 0 || r.isZero())
      return 1;
    const n = yr.keyFromPrivate(t).getPublic();
    return nn(e, n), 0;
  },
  publicKeyConvert(e, t) {
    const r = jr(t);
    if (r === null)
      return 1;
    const n = r.getPublic();
    return nn(e, n), 0;
  },
  publicKeyNegate(e, t) {
    const r = jr(t);
    if (r === null)
      return 1;
    const n = r.getPublic();
    return n.y = n.y.redNeg(), nn(e, n), 0;
  },
  publicKeyCombine(e, t) {
    const r = new Array(t.length);
    for (let a = 0; a < t.length; ++a)
      if (r[a] = jr(t[a]), r[a] === null)
        return 1;
    let n = r[0].getPublic();
    for (let a = 1; a < r.length; ++a)
      n = n.add(r[a].pub);
    return n.isInfinity() ? 2 : (nn(e, n), 0);
  },
  publicKeyTweakAdd(e, t, r) {
    const n = jr(t);
    if (n === null)
      return 1;
    if (r = new ft(r), r.cmp(Xe.n) >= 0)
      return 2;
    const a = n.getPublic().add(Xe.g.mul(r));
    return a.isInfinity() ? 2 : (nn(e, a), 0);
  },
  publicKeyTweakMul(e, t, r) {
    const n = jr(t);
    if (n === null)
      return 1;
    if (r = new ft(r), r.cmp(Xe.n) >= 0 || r.isZero())
      return 2;
    const a = n.getPublic().mul(r);
    return nn(e, a), 0;
  },
  signatureNormalize(e) {
    const t = new ft(e.subarray(0, 32)), r = new ft(e.subarray(32, 64));
    return t.cmp(Xe.n) >= 0 || r.cmp(Xe.n) >= 0 ? 1 : (r.cmp(yr.nh) === 1 && e.set(Xe.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0);
  },
  signatureExport(e, t) {
    const r = t.subarray(0, 32), n = t.subarray(32, 64);
    if (new ft(r).cmp(Xe.n) >= 0 || new ft(n).cmp(Xe.n) >= 0)
      return 1;
    const { output: a } = e;
    let i = a.subarray(4, 4 + 33);
    i[0] = 0, i.set(r, 1);
    let s = 33, f = 0;
    for (; s > 1 && i[f] === 0 && !(i[f + 1] & 128); --s, ++f)
      ;
    if (i = i.subarray(f), i[0] & 128 || s > 1 && i[0] === 0 && !(i[1] & 128))
      return 1;
    let v = a.subarray(6 + 33, 6 + 33 + 33);
    v[0] = 0, v.set(n, 1);
    let m = 33, _ = 0;
    for (; m > 1 && v[_] === 0 && !(v[_ + 1] & 128); --m, ++_)
      ;
    return v = v.subarray(_), v[0] & 128 || m > 1 && v[0] === 0 && !(v[1] & 128) ? 1 : (e.outputlen = 6 + s + m, a[0] = 48, a[1] = e.outputlen - 2, a[2] = 2, a[3] = i.length, a.set(i, 4), a[4 + s] = 2, a[5 + s] = v.length, a.set(v, 6 + s), 0);
  },
  signatureImport(e, t) {
    if (t.length < 8 || t.length > 72 || t[0] !== 48 || t[1] !== t.length - 2 || t[2] !== 2)
      return 1;
    const r = t[3];
    if (r === 0 || 5 + r >= t.length || t[4 + r] !== 2)
      return 1;
    const n = t[5 + r];
    if (n === 0 || 6 + r + n !== t.length || t[4] & 128 || r > 1 && t[4] === 0 && !(t[5] & 128) || t[r + 6] & 128 || n > 1 && t[r + 6] === 0 && !(t[r + 7] & 128))
      return 1;
    let a = t.subarray(4, 4 + r);
    if (a.length === 33 && a[0] === 0 && (a = a.subarray(1)), a.length > 32)
      return 1;
    let i = t.subarray(6 + r);
    if (i.length === 33 && i[0] === 0 && (i = i.slice(1)), i.length > 32)
      throw new Error("S length is too long");
    let s = new ft(a);
    s.cmp(Xe.n) >= 0 && (s = new ft(0));
    let f = new ft(t.subarray(6 + r));
    return f.cmp(Xe.n) >= 0 && (f = new ft(0)), e.set(s.toArrayLike(Uint8Array, "be", 32), 0), e.set(f.toArrayLike(Uint8Array, "be", 32), 32), 0;
  },
  ecdsaSign(e, t, r, n, a) {
    if (a) {
      const f = a;
      a = (v) => {
        const m = f(t, r, null, n, v);
        if (!(m instanceof Uint8Array && m.length === 32))
          throw new Error("This is the way");
        return new ft(m);
      };
    }
    const i = new ft(r);
    if (i.cmp(Xe.n) >= 0 || i.isZero())
      return 1;
    let s;
    try {
      s = yr.sign(t, r, { canonical: !0, k: a, pers: n });
    } catch {
      return 1;
    }
    return e.signature.set(s.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(s.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = s.recoveryParam, 0;
  },
  ecdsaVerify(e, t, r) {
    const n = { r: e.subarray(0, 32), s: e.subarray(32, 64) }, a = new ft(n.r), i = new ft(n.s);
    if (a.cmp(Xe.n) >= 0 || i.cmp(Xe.n) >= 0)
      return 1;
    if (i.cmp(yr.nh) === 1 || a.isZero() || i.isZero())
      return 3;
    const s = jr(r);
    if (s === null)
      return 2;
    const f = s.getPublic();
    return yr.verify(t, n, f) ? 0 : 3;
  },
  ecdsaRecover(e, t, r, n) {
    const a = { r: t.slice(0, 32), s: t.slice(32, 64) }, i = new ft(a.r), s = new ft(a.s);
    if (i.cmp(Xe.n) >= 0 || s.cmp(Xe.n) >= 0)
      return 1;
    if (i.isZero() || s.isZero())
      return 2;
    let f;
    try {
      f = yr.recoverPubKey(n, a, r);
    } catch {
      return 2;
    }
    return nn(e, f), 0;
  },
  ecdh(e, t, r, n, a, i, s) {
    const f = jr(t);
    if (f === null)
      return 1;
    const v = new ft(r);
    if (v.cmp(Xe.n) >= 0 || v.isZero())
      return 2;
    const m = f.getPublic().mul(v);
    if (a === void 0) {
      const _ = m.encode(null, !0), O = yr.hash().update(_).digest();
      for (let P = 0; P < 32; ++P)
        e[P] = O[P];
    } else {
      i || (i = new Uint8Array(32));
      const _ = m.getX().toArray("be", 32);
      for (let M = 0; M < 32; ++M)
        i[M] = _[M];
      s || (s = new Uint8Array(32));
      const O = m.getY().toArray("be", 32);
      for (let M = 0; M < 32; ++M)
        s[M] = O[M];
      const P = a(i, s, n);
      if (!(P instanceof Uint8Array && P.length === e.length))
        return 2;
      e.set(P);
    }
    return 0;
  }
};
const J4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ol
}, [Ol]), Y4 = /* @__PURE__ */ Q(J4);
var Ll = f3(Y4);
const X4 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ll
}, [Ll]), Cl = /* @__PURE__ */ Q(X4);
var Fi = {}, Xa = { exports: {} }, Yf = 65536, Q4 = 4294967295;
function e8() {
  throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
}
var t8 = Gt.Buffer, Qa = Ie.crypto || Ie.msCrypto;
Qa && Qa.getRandomValues ? Xa.exports = r8 : Xa.exports = e8;
function r8(e, t) {
  if (e > Q4)
    throw new RangeError("requested too many random bytes");
  var r = t8.allocUnsafe(e);
  if (e > 0)
    if (e > Yf)
      for (var n = 0; n < e; n += Yf)
        Qa.getRandomValues(r.slice(n, n + Yf));
    else
      Qa.getRandomValues(r);
  return typeof t == "function" ? process.nextTick(function() {
    t(null, r);
  }) : r;
}
const n8 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Xa.exports
}, [Xa.exports]), i8 = /* @__PURE__ */ Q(n8);
Object.defineProperty(Fi, "__esModule", { value: !0 });
var $v = i8;
function a8(e) {
  return new Promise(function(t, r) {
    $v(e, function(n, a) {
      if (n) {
        r(n);
        return;
      }
      t(a);
    });
  });
}
var o8 = Fi.getRandomBytes = a8;
function f8(e) {
  return $v(e);
}
var s8 = Fi.getRandomBytesSync = f8;
const u8 = /* @__PURE__ */ ee({
  __proto__: null,
  getRandomBytes: o8,
  getRandomBytesSync: s8,
  default: Fi
}, [Fi]), c8 = /* @__PURE__ */ Q(u8);
(function(e) {
  var t = Ie && Ie.__awaiter || function(m, _, O, P) {
    function C(M) {
      return M instanceof O ? M : new O(function(k) {
        k(M);
      });
    }
    return new (O || (O = Promise))(function(M, k) {
      function q(K) {
        try {
          U(P.next(K));
        } catch (J) {
          k(J);
        }
      }
      function D(K) {
        try {
          U(P.throw(K));
        } catch (J) {
          k(J);
        }
      }
      function U(K) {
        K.done ? M(K.value) : C(K.value).then(q, D);
      }
      U((P = P.apply(m, _ || [])).next());
    });
  }, r = Ie && Ie.__generator || function(m, _) {
    var O = { label: 0, sent: function() {
      if (M[0] & 1)
        throw M[1];
      return M[1];
    }, trys: [], ops: [] }, P, C, M, k;
    return k = { next: q(0), throw: q(1), return: q(2) }, typeof Symbol == "function" && (k[Symbol.iterator] = function() {
      return this;
    }), k;
    function q(U) {
      return function(K) {
        return D([U, K]);
      };
    }
    function D(U) {
      if (P)
        throw new TypeError("Generator is already executing.");
      for (; O; )
        try {
          if (P = 1, C && (M = U[0] & 2 ? C.return : U[0] ? C.throw || ((M = C.return) && M.call(C), 0) : C.next) && !(M = M.call(C, U[1])).done)
            return M;
          switch (C = 0, M && (U = [U[0] & 2, M.value]), U[0]) {
            case 0:
            case 1:
              M = U;
              break;
            case 4:
              return O.label++, { value: U[1], done: !1 };
            case 5:
              O.label++, C = U[1], U = [0];
              continue;
            case 7:
              U = O.ops.pop(), O.trys.pop();
              continue;
            default:
              if (M = O.trys, !(M = M.length > 0 && M[M.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                O = 0;
                continue;
              }
              if (U[0] === 3 && (!M || U[1] > M[0] && U[1] < M[3])) {
                O.label = U[1];
                break;
              }
              if (U[0] === 6 && O.label < M[1]) {
                O.label = M[1], M = U;
                break;
              }
              if (M && O.label < M[2]) {
                O.label = M[2], O.ops.push(U);
                break;
              }
              M[2] && O.ops.pop(), O.trys.pop();
              continue;
          }
          U = _.call(m, O);
        } catch (K) {
          U = [6, K], C = 0;
        } finally {
          P = M = 0;
        }
      if (U[0] & 5)
        throw U[1];
      return { value: U[0] ? U[1] : void 0, done: !0 };
    }
  };
  function n(m) {
    for (var _ in m)
      e.hasOwnProperty(_) || (e[_] = m[_]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = Cl, i = c8, s = 32;
  function f() {
    return t(this, void 0, void 0, function() {
      var m;
      return r(this, function(_) {
        switch (_.label) {
          case 0:
            return [4, i.getRandomBytes(s)];
          case 1:
            return m = _.sent(), a.privateKeyVerify(m) ? [2, m] : [3, 0];
          case 2:
            return [2];
        }
      });
    });
  }
  e.createPrivateKey = f;
  function v() {
    for (; ; ) {
      var m = i.getRandomBytesSync(s);
      if (a.privateKeyVerify(m))
        return m;
    }
  }
  e.createPrivateKeySync = v, n(Cl);
})(e0);
const l8 = /* @__PURE__ */ Qe(e0), h8 = /* @__PURE__ */ ee({
  __proto__: null,
  default: l8
}, [e0]), Rv = /* @__PURE__ */ Q(h8);
var Yn = {}, fn = Mt, d8 = f0.ec, s0 = new d8("secp256k1"), Xn = s0.curve, p8 = Yn.privateKeyExport = function(e, t) {
  var r = new fn(e);
  if (r.ucmp(Xn.n) >= 0)
    throw new Error("couldn't export to DER format");
  var n = s0.g.mul(r);
  return Bv(n.getX(), n.getY(), t);
}, v8 = Yn.privateKeyModInverse = function(e) {
  var t = new fn(e);
  if (t.ucmp(Xn.n) >= 0 || t.isZero())
    throw new Error("private key range is invalid");
  return t.invm(Xn.n).toArrayLike(Buffer, "be", 32);
}, y8 = Yn.signatureImport = function(e) {
  var t = new fn(e.r);
  t.ucmp(Xn.n) >= 0 && (t = new fn(0));
  var r = new fn(e.s);
  return r.ucmp(Xn.n) >= 0 && (r = new fn(0)), Buffer.concat([t.toArrayLike(Buffer, "be", 32), r.toArrayLike(Buffer, "be", 32)]);
}, g8 = Yn.ecdhUnsafe = function(e, t, r) {
  var n = s0.keyFromPublic(e), a = new fn(t);
  if (a.ucmp(Xn.n) >= 0 || a.isZero())
    throw new Error("scalar was invalid (zero or overflow)");
  var i = n.pub.mul(a);
  return Bv(i.getX(), i.getY(), r);
}, Bv = function(t, r, n) {
  var a = void 0;
  return n ? (a = Buffer.alloc(33), a[0] = r.isOdd() ? 3 : 2, t.toArrayLike(Buffer, "be", 32).copy(a, 1)) : (a = Buffer.alloc(65), a[0] = 4, t.toArrayLike(Buffer, "be", 32).copy(a, 1), r.toArrayLike(Buffer, "be", 32).copy(a, 33)), a;
};
const b8 = /* @__PURE__ */ ee({
  __proto__: null,
  privateKeyExport: p8,
  privateKeyModInverse: v8,
  signatureImport: y8,
  ecdhUnsafe: g8,
  default: Yn
}, [Yn]), _8 = /* @__PURE__ */ Q(b8);
var Ui = {}, m8 = Buffer.from([
  48,
  129,
  211,
  2,
  1,
  1,
  4,
  32,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  160,
  129,
  133,
  48,
  129,
  130,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  33,
  2,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  36,
  3,
  34,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), w8 = Buffer.from([
  48,
  130,
  1,
  19,
  2,
  1,
  1,
  4,
  32,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  160,
  129,
  165,
  48,
  129,
  162,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  65,
  4,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  72,
  58,
  218,
  119,
  38,
  163,
  196,
  101,
  93,
  164,
  251,
  252,
  14,
  17,
  8,
  168,
  253,
  23,
  180,
  72,
  166,
  133,
  84,
  25,
  156,
  71,
  208,
  143,
  251,
  16,
  212,
  184,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  68,
  3,
  66,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), x8 = Ui.privateKeyExport = function(e, t, r) {
  var n = Buffer.from(r ? m8 : w8);
  return e.copy(n, r ? 8 : 9), t.copy(n, r ? 181 : 214), n;
}, M8 = Ui.privateKeyImport = function(e) {
  var t = e.length, r = 0;
  if (t < r + 1 || e[r] !== 48 || (r += 1, t < r + 1 || !(e[r] & 128)))
    return null;
  var n = e[r] & 127;
  if (r += 1, n < 1 || n > 2 || t < r + n)
    return null;
  var a = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
  return r += n, t < r + a || t < r + 3 || e[r] !== 2 || e[r + 1] !== 1 || e[r + 2] !== 1 || (r += 3, t < r + 2 || e[r] !== 4 || e[r + 1] > 32 || t < r + 2 + e[r + 1]) ? null : e.slice(r + 2, r + 2 + e[r + 1]);
}, E8 = Ui.signatureImportLax = function(e) {
  var t = Buffer.alloc(32, 0), r = Buffer.alloc(32, 0), n = e.length, a = 0;
  if (e[a++] !== 48)
    return null;
  var i = e[a++];
  if (i & 128 && (a += i - 128, a > n) || e[a++] !== 2)
    return null;
  var s = e[a++];
  if (s & 128) {
    if (i = s - 128, a + i > n)
      return null;
    for (; i > 0 && e[a] === 0; a += 1, i -= 1)
      ;
    for (s = 0; i > 0; a += 1, i -= 1)
      s = (s << 8) + e[a];
  }
  if (s > n - a)
    return null;
  var f = a;
  if (a += s, e[a++] !== 2)
    return null;
  var v = e[a++];
  if (v & 128) {
    if (i = v - 128, a + i > n)
      return null;
    for (; i > 0 && e[a] === 0; a += 1, i -= 1)
      ;
    for (v = 0; i > 0; a += 1, i -= 1)
      v = (v << 8) + e[a];
  }
  if (v > n - a)
    return null;
  var m = a;
  for (a += v; s > 0 && e[f] === 0; s -= 1, f += 1)
    ;
  if (s > 32)
    return null;
  var _ = e.slice(f, f + s);
  for (_.copy(t, 32 - _.length); v > 0 && e[m] === 0; v -= 1, m += 1)
    ;
  if (v > 32)
    return null;
  var O = e.slice(m, m + v);
  return O.copy(r, 32 - O.length), { r: t, s: r };
};
const S8 = /* @__PURE__ */ ee({
  __proto__: null,
  privateKeyExport: x8,
  privateKeyImport: M8,
  signatureImportLax: E8,
  default: Ui
}, [Ui]), A8 = /* @__PURE__ */ Q(S8);
var At = Rv, ef = _8, u0 = A8, Tv = function(t) {
  return t.length !== 32 ? !1 : At.privateKeyVerify(Uint8Array.from(t));
}, $8 = function(t, r) {
  if (t.length !== 32)
    throw new RangeError("private key length is invalid");
  var n = ef.privateKeyExport(t, r);
  return u0.privateKeyExport(t, n, r);
}, R8 = function(t) {
  if (t = u0.privateKeyImport(t), t !== null && t.length === 32 && Tv(t))
    return t;
  throw new Error("couldn't import from DER format");
}, B8 = function(t) {
  return Buffer.from(At.privateKeyNegate(Uint8Array.from(t)));
}, T8 = function(t) {
  if (t.length !== 32)
    throw new Error("private key length is invalid");
  return Buffer.from(ef.privateKeyModInverse(Uint8Array.from(t)));
}, I8 = function(t, r) {
  return Buffer.from(At.privateKeyTweakAdd(Uint8Array.from(t), r));
}, P8 = function(t, r) {
  return Buffer.from(At.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r)));
}, O8 = function(t, r) {
  return Buffer.from(At.publicKeyCreate(Uint8Array.from(t), r));
}, L8 = function(t, r) {
  return Buffer.from(At.publicKeyConvert(Uint8Array.from(t), r));
}, C8 = function(t) {
  return t.length !== 33 && t.length !== 65 ? !1 : At.publicKeyVerify(Uint8Array.from(t));
}, k8 = function(t, r, n) {
  return Buffer.from(At.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(r), n));
}, N8 = function(t, r, n) {
  return Buffer.from(At.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r), n));
}, q8 = function(t, r) {
  var n = [];
  return t.forEach(function(a) {
    n.push(Uint8Array.from(a));
  }), Buffer.from(At.publicKeyCombine(n, r));
}, F8 = function(t) {
  return Buffer.from(At.signatureNormalize(Uint8Array.from(t)));
}, U8 = function(t) {
  return Buffer.from(At.signatureExport(Uint8Array.from(t)));
}, D8 = function(t) {
  return Buffer.from(At.signatureImport(Uint8Array.from(t)));
}, j8 = function(t) {
  if (t.length === 0)
    throw new RangeError("signature length is invalid");
  var r = u0.signatureImportLax(t);
  if (r === null)
    throw new Error("couldn't parse DER signature");
  return ef.signatureImport(r);
}, H8 = function(t, r, n) {
  if (n === null)
    throw new TypeError("options should be an Object");
  var a = void 0;
  if (n) {
    if (a = {}, n.data === null)
      throw new TypeError("options.data should be a Buffer");
    if (n.data) {
      if (n.data.length !== 32)
        throw new RangeError("options.data length is invalid");
      a.data = new Uint8Array(n.data);
    }
    if (n.noncefn === null)
      throw new TypeError("options.noncefn should be a Function");
    n.noncefn && (a.noncefn = function(s, f, v, m, _) {
      var O = v != null ? Buffer.from(v) : null, P = m != null ? Buffer.from(m) : null, C = Buffer.from("");
      return n.noncefn && (C = n.noncefn(Buffer.from(s), Buffer.from(f), O, P, _)), Uint8Array.from(C);
    });
  }
  var i = At.ecdsaSign(Uint8Array.from(t), Uint8Array.from(r), a);
  return {
    signature: Buffer.from(i.signature),
    recovery: i.recid
  };
}, z8 = function(t, r, n) {
  return At.ecdsaVerify(Uint8Array.from(r), Uint8Array.from(t), n);
}, K8 = function(t, r, n, a) {
  return Buffer.from(At.ecdsaRecover(Uint8Array.from(r), n, Uint8Array.from(t), a));
}, W8 = function(t, r) {
  return Buffer.from(At.ecdh(Uint8Array.from(t), Uint8Array.from(r), {}));
}, G8 = function(t, r, n) {
  if (t.length !== 33 && t.length !== 65)
    throw new RangeError("public key length is invalid");
  if (r.length !== 32)
    throw new RangeError("private key length is invalid");
  return Buffer.from(ef.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(r), n));
}, kl = {
  privateKeyVerify: Tv,
  privateKeyExport: $8,
  privateKeyImport: R8,
  privateKeyNegate: B8,
  privateKeyModInverse: T8,
  privateKeyTweakAdd: I8,
  privateKeyTweakMul: P8,
  publicKeyCreate: O8,
  publicKeyConvert: L8,
  publicKeyVerify: C8,
  publicKeyTweakAdd: k8,
  publicKeyTweakMul: N8,
  publicKeyCombine: q8,
  signatureNormalize: F8,
  signatureExport: U8,
  signatureImport: D8,
  signatureImportLax: j8,
  sign: H8,
  verify: z8,
  recover: K8,
  ecdh: W8,
  ecdhUnsafe: G8
};
const V8 = /* @__PURE__ */ ee({
  __proto__: null,
  default: kl
}, [kl]), Z8 = /* @__PURE__ */ Q(V8);
var Xf = { exports: {} }, Qf = {}, Nl;
function Iv() {
  if (Nl)
    return Qf;
  Nl = 1;
  function e(k) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(D) {
      return typeof D;
    } : e = function(D) {
      return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
    }, e(k);
  }
  function t(k, q) {
    if (!(k instanceof q))
      throw new TypeError("Cannot call a class as a function");
  }
  function r(k, q) {
    return q && (e(q) === "object" || typeof q == "function") ? q : n(k);
  }
  function n(k) {
    if (k === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return k;
  }
  function a(k) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(D) {
      return D.__proto__ || Object.getPrototypeOf(D);
    }, a(k);
  }
  function i(k, q) {
    if (typeof q != "function" && q !== null)
      throw new TypeError("Super expression must either be null or a function");
    k.prototype = Object.create(q && q.prototype, { constructor: { value: k, writable: !0, configurable: !0 } }), q && s(k, q);
  }
  function s(k, q) {
    return s = Object.setPrototypeOf || function(U, K) {
      return U.__proto__ = K, U;
    }, s(k, q);
  }
  var f = {}, v, m;
  function _(k, q, D) {
    D || (D = Error);
    function U(J, re, ue) {
      return typeof q == "string" ? q : q(J, re, ue);
    }
    var K = /* @__PURE__ */ function(J) {
      i(re, J);
      function re(ue, ve, se) {
        var le;
        return t(this, re), le = r(this, a(re).call(this, U(ue, ve, se))), le.code = k, le;
      }
      return re;
    }(D);
    f[k] = K;
  }
  function O(k, q) {
    if (Array.isArray(k)) {
      var D = k.length;
      return k = k.map(function(U) {
        return String(U);
      }), D > 2 ? "one of ".concat(q, " ").concat(k.slice(0, D - 1).join(", "), ", or ") + k[D - 1] : D === 2 ? "one of ".concat(q, " ").concat(k[0], " or ").concat(k[1]) : "of ".concat(q, " ").concat(k[0]);
    } else
      return "of ".concat(q, " ").concat(String(k));
  }
  function P(k, q, D) {
    return k.substr(!D || D < 0 ? 0 : +D, q.length) === q;
  }
  function C(k, q, D) {
    return (D === void 0 || D > k.length) && (D = k.length), k.substring(D - q.length, D) === q;
  }
  function M(k, q, D) {
    return typeof D != "number" && (D = 0), D + q.length > k.length ? !1 : k.indexOf(q, D) !== -1;
  }
  return _("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), _("ERR_INVALID_ARG_TYPE", function(k, q, D) {
    v === void 0 && (v = Di()), v(typeof k == "string", "'name' must be a string");
    var U;
    typeof q == "string" && P(q, "not ") ? (U = "must not be", q = q.replace(/^not /, "")) : U = "must be";
    var K;
    if (C(k, " argument"))
      K = "The ".concat(k, " ").concat(U, " ").concat(O(q, "type"));
    else {
      var J = M(k, ".") ? "property" : "argument";
      K = 'The "'.concat(k, '" ').concat(J, " ").concat(U, " ").concat(O(q, "type"));
    }
    return K += ". Received type ".concat(e(D)), K;
  }, TypeError), _("ERR_INVALID_ARG_VALUE", function(k, q) {
    var D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    m === void 0 && (m = hr);
    var U = m.inspect(q);
    return U.length > 128 && (U = "".concat(U.slice(0, 128), "...")), "The argument '".concat(k, "' ").concat(D, ". Received ").concat(U);
  }, TypeError), _("ERR_INVALID_RETURN_VALUE", function(k, q, D) {
    var U;
    return D && D.constructor && D.constructor.name ? U = "instance of ".concat(D.constructor.name) : U = "type ".concat(e(D)), "Expected ".concat(k, ' to be returned from the "').concat(q, '"') + " function but got ".concat(U, ".");
  }, TypeError), _("ERR_MISSING_ARGS", function() {
    for (var k = arguments.length, q = new Array(k), D = 0; D < k; D++)
      q[D] = arguments[D];
    v === void 0 && (v = Di()), v(q.length > 0, "At least one arg needs to be specified");
    var U = "The ", K = q.length;
    switch (q = q.map(function(J) {
      return '"'.concat(J, '"');
    }), K) {
      case 1:
        U += "".concat(q[0], " argument");
        break;
      case 2:
        U += "".concat(q[0], " and ").concat(q[1], " arguments");
        break;
      default:
        U += q.slice(0, K - 1).join(", "), U += ", and ".concat(q[K - 1], " arguments");
        break;
    }
    return "".concat(U, " must be specified");
  }, TypeError), Qf.codes = f, Qf;
}
var es, ql;
function J8() {
  if (ql)
    return es;
  ql = 1;
  function e(c) {
    for (var y = 1; y < arguments.length; y++) {
      var x = arguments[y] != null ? arguments[y] : {}, b = Object.keys(x);
      typeof Object.getOwnPropertySymbols == "function" && (b = b.concat(Object.getOwnPropertySymbols(x).filter(function(h) {
        return Object.getOwnPropertyDescriptor(x, h).enumerable;
      }))), b.forEach(function(h) {
        t(c, h, x[h]);
      });
    }
    return c;
  }
  function t(c, y, x) {
    return y in c ? Object.defineProperty(c, y, { value: x, enumerable: !0, configurable: !0, writable: !0 }) : c[y] = x, c;
  }
  function r(c, y) {
    if (!(c instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(c, y) {
    for (var x = 0; x < y.length; x++) {
      var b = y[x];
      b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(c, b.key, b);
    }
  }
  function a(c, y, x) {
    return y && n(c.prototype, y), x && n(c, x), c;
  }
  function i(c, y) {
    return y && (M(y) === "object" || typeof y == "function") ? y : s(c);
  }
  function s(c) {
    if (c === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c;
  }
  function f(c, y) {
    if (typeof y != "function" && y !== null)
      throw new TypeError("Super expression must either be null or a function");
    c.prototype = Object.create(y && y.prototype, { constructor: { value: c, writable: !0, configurable: !0 } }), y && P(c, y);
  }
  function v(c) {
    var y = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return v = function(b) {
      if (b === null || !O(b))
        return b;
      if (typeof b != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof y < "u") {
        if (y.has(b))
          return y.get(b);
        y.set(b, h);
      }
      function h() {
        return _(b, arguments, C(this).constructor);
      }
      return h.prototype = Object.create(b.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), P(h, b);
    }, v(c);
  }
  function m() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function _(c, y, x) {
    return m() ? _ = Reflect.construct : _ = function(h, d, w) {
      var p = [null];
      p.push.apply(p, d);
      var S = Function.bind.apply(h, p), G = new S();
      return w && P(G, w.prototype), G;
    }, _.apply(null, arguments);
  }
  function O(c) {
    return Function.toString.call(c).indexOf("[native code]") !== -1;
  }
  function P(c, y) {
    return P = Object.setPrototypeOf || function(b, h) {
      return b.__proto__ = h, b;
    }, P(c, y);
  }
  function C(c) {
    return C = Object.setPrototypeOf ? Object.getPrototypeOf : function(x) {
      return x.__proto__ || Object.getPrototypeOf(x);
    }, C(c);
  }
  function M(c) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? M = function(x) {
      return typeof x;
    } : M = function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    }, M(c);
  }
  var k = hr, q = k.inspect, D = Iv(), U = D.codes.ERR_INVALID_ARG_TYPE;
  function K(c, y, x) {
    return (x === void 0 || x > c.length) && (x = c.length), c.substring(x - y.length, x) === y;
  }
  function J(c, y) {
    if (y = Math.floor(y), c.length == 0 || y == 0)
      return "";
    var x = c.length * y;
    for (y = Math.floor(Math.log(y) / Math.log(2)); y; )
      c += c, y--;
    return c += c.substring(0, x - c.length), c;
  }
  var re = "", ue = "", ve = "", se = "", le = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  }, V = 10;
  function g(c) {
    var y = Object.keys(c), x = Object.create(Object.getPrototypeOf(c));
    return y.forEach(function(b) {
      x[b] = c[b];
    }), Object.defineProperty(x, "message", {
      value: c.message
    }), x;
  }
  function l(c) {
    return q(c, {
      compact: !1,
      customInspect: !1,
      depth: 1e3,
      maxArrayLength: 1 / 0,
      showHidden: !1,
      breakLength: 1 / 0,
      showProxy: !1,
      sorted: !0,
      getters: !0
    });
  }
  function u(c, y, x) {
    var b = "", h = "", d = 0, w = "", p = !1, S = l(c), G = S.split(`
`), B = l(y).split(`
`), R = 0, N = "";
    if (x === "strictEqual" && M(c) === "object" && M(y) === "object" && c !== null && y !== null && (x = "strictEqualObject"), G.length === 1 && B.length === 1 && G[0] !== B[0]) {
      var H = G[0].length + B[0].length;
      if (H <= V) {
        if ((M(c) !== "object" || c === null) && (M(y) !== "object" || y === null) && (c !== 0 || y !== 0))
          return "".concat(le[x], `

`) + "".concat(G[0], " !== ").concat(B[0], `
`);
      } else if (x !== "strictEqualObject") {
        var Z = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (H < Z) {
          for (; G[0][R] === B[0][R]; )
            R++;
          R > 2 && (N = `
  `.concat(J(" ", R), "^"), R = 0);
        }
      }
    }
    for (var oe = G[G.length - 1], $ = B[B.length - 1]; oe === $ && (R++ < 2 ? w = `
  `.concat(oe).concat(w) : b = oe, G.pop(), B.pop(), !(G.length === 0 || B.length === 0)); )
      oe = G[G.length - 1], $ = B[B.length - 1];
    var A = Math.max(G.length, B.length);
    if (A === 0) {
      var X = S.split(`
`);
      if (X.length > 30)
        for (X[26] = "".concat(re, "...").concat(se); X.length > 27; )
          X.pop();
      return "".concat(le.notIdentical, `

`).concat(X.join(`
`), `
`);
    }
    R > 3 && (w = `
`.concat(re, "...").concat(se).concat(w), p = !0), b !== "" && (w = `
  `.concat(b).concat(w), b = "");
    var te = 0, pe = le[x] + `
`.concat(ue, "+ actual").concat(se, " ").concat(ve, "- expected").concat(se), z = " ".concat(re, "...").concat(se, " Lines skipped");
    for (R = 0; R < A; R++) {
      var I = R - d;
      if (G.length < R + 1)
        I > 1 && R > 2 && (I > 4 ? (h += `
`.concat(re, "...").concat(se), p = !0) : I > 3 && (h += `
  `.concat(B[R - 2]), te++), h += `
  `.concat(B[R - 1]), te++), d = R, b += `
`.concat(ve, "-").concat(se, " ").concat(B[R]), te++;
      else if (B.length < R + 1)
        I > 1 && R > 2 && (I > 4 ? (h += `
`.concat(re, "...").concat(se), p = !0) : I > 3 && (h += `
  `.concat(G[R - 2]), te++), h += `
  `.concat(G[R - 1]), te++), d = R, h += `
`.concat(ue, "+").concat(se, " ").concat(G[R]), te++;
      else {
        var L = B[R], j = G[R], ie = j !== L && (!K(j, ",") || j.slice(0, -1) !== L);
        ie && K(L, ",") && L.slice(0, -1) === j && (ie = !1, j += ","), ie ? (I > 1 && R > 2 && (I > 4 ? (h += `
`.concat(re, "...").concat(se), p = !0) : I > 3 && (h += `
  `.concat(G[R - 2]), te++), h += `
  `.concat(G[R - 1]), te++), d = R, h += `
`.concat(ue, "+").concat(se, " ").concat(j), b += `
`.concat(ve, "-").concat(se, " ").concat(L), te += 2) : (h += b, b = "", (I === 1 || R === 0) && (h += `
  `.concat(j), te++));
      }
      if (te > 20 && R < A - 2)
        return "".concat(pe).concat(z, `
`).concat(h, `
`).concat(re, "...").concat(se).concat(b, `
`) + "".concat(re, "...").concat(se);
    }
    return "".concat(pe).concat(p ? z : "", `
`).concat(h).concat(b).concat(w).concat(N);
  }
  var o = /* @__PURE__ */ function(c) {
    f(y, c);
    function y(x) {
      var b;
      if (r(this, y), M(x) !== "object" || x === null)
        throw new U("options", "Object", x);
      var h = x.message, d = x.operator, w = x.stackStartFn, p = x.actual, S = x.expected, G = Error.stackTraceLimit;
      if (Error.stackTraceLimit = 0, h != null)
        b = i(this, C(y).call(this, String(h)));
      else if (process.stderr && process.stderr.isTTY && (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1 ? (re = "\x1B[34m", ue = "\x1B[32m", se = "\x1B[39m", ve = "\x1B[31m") : (re = "", ue = "", se = "", ve = "")), M(p) === "object" && p !== null && M(S) === "object" && S !== null && "stack" in p && p instanceof Error && "stack" in S && S instanceof Error && (p = g(p), S = g(S)), d === "deepStrictEqual" || d === "strictEqual")
        b = i(this, C(y).call(this, u(p, S, d)));
      else if (d === "notDeepStrictEqual" || d === "notStrictEqual") {
        var B = le[d], R = l(p).split(`
`);
        if (d === "notStrictEqual" && M(p) === "object" && p !== null && (B = le.notStrictEqualObject), R.length > 30)
          for (R[26] = "".concat(re, "...").concat(se); R.length > 27; )
            R.pop();
        R.length === 1 ? b = i(this, C(y).call(this, "".concat(B, " ").concat(R[0]))) : b = i(this, C(y).call(this, "".concat(B, `

`).concat(R.join(`
`), `
`)));
      } else {
        var N = l(p), H = "", Z = le[d];
        d === "notDeepEqual" || d === "notEqual" ? (N = "".concat(le[d], `

`).concat(N), N.length > 1024 && (N = "".concat(N.slice(0, 1021), "..."))) : (H = "".concat(l(S)), N.length > 512 && (N = "".concat(N.slice(0, 509), "...")), H.length > 512 && (H = "".concat(H.slice(0, 509), "...")), d === "deepEqual" || d === "equal" ? N = "".concat(Z, `

`).concat(N, `

should equal

`) : H = " ".concat(d, " ").concat(H)), b = i(this, C(y).call(this, "".concat(N).concat(H)));
      }
      return Error.stackTraceLimit = G, b.generatedMessage = !h, Object.defineProperty(s(b), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: !1,
        writable: !0,
        configurable: !0
      }), b.code = "ERR_ASSERTION", b.actual = p, b.expected = S, b.operator = d, Error.captureStackTrace && Error.captureStackTrace(s(b), w), b.stack, b.name = "AssertionError", i(b);
    }
    return a(y, [{
      key: "toString",
      value: function() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: q.custom,
      value: function(b, h) {
        return q(this, e({}, h, {
          customInspect: !1,
          depth: 0
        }));
      }
    }]), y;
  }(v(Error));
  return es = o, es;
}
var ts, Fl;
function Y8() {
  if (Fl)
    return ts;
  Fl = 1;
  function e(r, n) {
    if (r == null)
      throw new TypeError("Cannot convert first argument to object");
    for (var a = Object(r), i = 1; i < arguments.length; i++) {
      var s = arguments[i];
      if (s != null)
        for (var f = Object.keys(Object(s)), v = 0, m = f.length; v < m; v++) {
          var _ = f[v], O = Object.getOwnPropertyDescriptor(s, _);
          O !== void 0 && O.enumerable && (a[_] = s[_]);
        }
    }
    return a;
  }
  function t() {
    Object.assign || Object.defineProperty(Object, "assign", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: e
    });
  }
  return ts = {
    assign: e,
    polyfill: t
  }, ts;
}
var rs, Ul;
function Pv() {
  if (Ul)
    return rs;
  Ul = 1;
  var e = Object.prototype.toString;
  return rs = function(r) {
    var n = e.call(r), a = n === "[object Arguments]";
    return a || (a = n !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && e.call(r.callee) === "[object Function]"), a;
  }, rs;
}
var ns, Dl;
function X8() {
  if (Dl)
    return ns;
  Dl = 1;
  var e;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, r = Object.prototype.toString, n = Pv(), a = Object.prototype.propertyIsEnumerable, i = !a.call({ toString: null }, "toString"), s = a.call(function() {
    }, "prototype"), f = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], v = function(P) {
      var C = P.constructor;
      return C && C.prototype === P;
    }, m = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, _ = function() {
      if (typeof window > "u")
        return !1;
      for (var P in window)
        try {
          if (!m["$" + P] && t.call(window, P) && window[P] !== null && typeof window[P] == "object")
            try {
              v(window[P]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), O = function(P) {
      if (typeof window > "u" || !_)
        return v(P);
      try {
        return v(P);
      } catch {
        return !1;
      }
    };
    e = function(C) {
      var M = C !== null && typeof C == "object", k = r.call(C) === "[object Function]", q = n(C), D = M && r.call(C) === "[object String]", U = [];
      if (!M && !k && !q)
        throw new TypeError("Object.keys called on a non-object");
      var K = s && k;
      if (D && C.length > 0 && !t.call(C, 0))
        for (var J = 0; J < C.length; ++J)
          U.push(String(J));
      if (q && C.length > 0)
        for (var re = 0; re < C.length; ++re)
          U.push(String(re));
      else
        for (var ue in C)
          !(K && ue === "prototype") && t.call(C, ue) && U.push(String(ue));
      if (i)
        for (var ve = O(C), se = 0; se < f.length; ++se)
          !(ve && f[se] === "constructor") && t.call(C, f[se]) && U.push(f[se]);
      return U;
    };
  }
  return ns = e, ns;
}
var is, jl;
function Q8() {
  if (jl)
    return is;
  jl = 1;
  var e = Array.prototype.slice, t = Pv(), r = Object.keys, n = r ? function(s) {
    return r(s);
  } : X8(), a = Object.keys;
  return n.shim = function() {
    if (Object.keys) {
      var s = function() {
        var f = Object.keys(arguments);
        return f && f.length === arguments.length;
      }(1, 2);
      s || (Object.keys = function(v) {
        return t(v) ? a(e.call(v)) : a(v);
      });
    } else
      Object.keys = n;
    return Object.keys || n;
  }, is = n, is;
}
var as, Hl;
function ex() {
  if (Hl)
    return as;
  Hl = 1;
  var e = Uo, t = e("%Object.defineProperty%", !0), r = function() {
    if (t)
      try {
        return t({}, "a", { value: 1 }), !0;
      } catch {
        return !1;
      }
    return !1;
  };
  return r.hasArrayLengthDefineBug = function() {
    if (!r())
      return null;
    try {
      return t([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, as = r, as;
}
var os, zl;
function tf() {
  if (zl)
    return os;
  zl = 1;
  var e = Q8(), t = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", r = Object.prototype.toString, n = Array.prototype.concat, a = Object.defineProperty, i = function(_) {
    return typeof _ == "function" && r.call(_) === "[object Function]";
  }, s = ex()(), f = a && s, v = function(_, O, P, C) {
    O in _ && (!i(C) || !C()) || (f ? a(_, O, {
      configurable: !0,
      enumerable: !1,
      value: P,
      writable: !0
    }) : _[O] = P);
  }, m = function(_, O) {
    var P = arguments.length > 2 ? arguments[2] : {}, C = e(O);
    t && (C = n.call(C, Object.getOwnPropertySymbols(O)));
    for (var M = 0; M < C.length; M += 1)
      v(_, C[M], O[C[M]], P[C[M]]);
  };
  return m.supportsDescriptors = !!f, os = m, os;
}
var fs, Kl;
function Ov() {
  if (Kl)
    return fs;
  Kl = 1;
  var e = function(t) {
    return t !== t;
  };
  return fs = function(r, n) {
    return r === 0 && n === 0 ? 1 / r === 1 / n : !!(r === n || e(r) && e(n));
  }, fs;
}
var ss, Wl;
function Lv() {
  if (Wl)
    return ss;
  Wl = 1;
  var e = Ov();
  return ss = function() {
    return typeof Object.is == "function" ? Object.is : e;
  }, ss;
}
var us, Gl;
function tx() {
  if (Gl)
    return us;
  Gl = 1;
  var e = Lv(), t = tf();
  return us = function() {
    var n = e();
    return t(Object, { is: n }, {
      is: function() {
        return Object.is !== n;
      }
    }), n;
  }, us;
}
var cs, Vl;
function Cv() {
  if (Vl)
    return cs;
  Vl = 1;
  var e = tf(), t = Zu, r = Ov(), n = Lv(), a = tx(), i = t(n(), Object);
  return e(i, {
    getPolyfill: n,
    implementation: r,
    shim: a
  }), cs = i, cs;
}
var ls, Zl;
function kv() {
  return Zl || (Zl = 1, ls = function(t) {
    return t !== t;
  }), ls;
}
var hs, Jl;
function Nv() {
  if (Jl)
    return hs;
  Jl = 1;
  var e = kv();
  return hs = function() {
    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : e;
  }, hs;
}
var ds, Yl;
function rx() {
  if (Yl)
    return ds;
  Yl = 1;
  var e = tf(), t = Nv();
  return ds = function() {
    var n = t();
    return e(Number, { isNaN: n }, {
      isNaN: function() {
        return Number.isNaN !== n;
      }
    }), n;
  }, ds;
}
var ps, Xl;
function nx() {
  if (Xl)
    return ps;
  Xl = 1;
  var e = Zu, t = tf(), r = kv(), n = Nv(), a = rx(), i = e(n(), Number);
  return t(i, {
    getPolyfill: n,
    implementation: r,
    shim: a
  }), ps = i, ps;
}
var vs, Ql;
function ix() {
  if (Ql)
    return vs;
  Ql = 1;
  function e(Y, ae) {
    return n(Y) || r(Y, ae) || t();
  }
  function t() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function r(Y, ae) {
    var de = [], ge = !0, ye = !1, F = void 0;
    try {
      for (var E = Y[Symbol.iterator](), T; !(ge = (T = E.next()).done) && (de.push(T.value), !(ae && de.length === ae)); ge = !0)
        ;
    } catch (W) {
      ye = !0, F = W;
    } finally {
      try {
        !ge && E.return != null && E.return();
      } finally {
        if (ye)
          throw F;
      }
    }
    return de;
  }
  function n(Y) {
    if (Array.isArray(Y))
      return Y;
  }
  function a(Y) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(de) {
      return typeof de;
    } : a = function(de) {
      return de && typeof Symbol == "function" && de.constructor === Symbol && de !== Symbol.prototype ? "symbol" : typeof de;
    }, a(Y);
  }
  var i = /a/g.flags !== void 0, s = function(ae) {
    var de = [];
    return ae.forEach(function(ge) {
      return de.push(ge);
    }), de;
  }, f = function(ae) {
    var de = [];
    return ae.forEach(function(ge, ye) {
      return de.push([ye, ge]);
    }), de;
  }, v = Object.is ? Object.is : Cv(), m = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  }, _ = Number.isNaN ? Number.isNaN : nx();
  function O(Y) {
    return Y.call.bind(Y);
  }
  var P = O(Object.prototype.hasOwnProperty), C = O(Object.prototype.propertyIsEnumerable), M = O(Object.prototype.toString), k = hr.types, q = k.isAnyArrayBuffer, D = k.isArrayBufferView, U = k.isDate, K = k.isMap, J = k.isRegExp, re = k.isSet, ue = k.isNativeError, ve = k.isBoxedPrimitive, se = k.isNumberObject, le = k.isStringObject, V = k.isBooleanObject, g = k.isBigIntObject, l = k.isSymbolObject, u = k.isFloat32Array, o = k.isFloat64Array;
  function c(Y) {
    if (Y.length === 0 || Y.length > 10)
      return !0;
    for (var ae = 0; ae < Y.length; ae++) {
      var de = Y.charCodeAt(ae);
      if (de < 48 || de > 57)
        return !0;
    }
    return Y.length === 10 && Y >= Math.pow(2, 32);
  }
  function y(Y) {
    return Object.keys(Y).filter(c).concat(m(Y).filter(Object.prototype.propertyIsEnumerable.bind(Y)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  function x(Y, ae) {
    if (Y === ae)
      return 0;
    for (var de = Y.length, ge = ae.length, ye = 0, F = Math.min(de, ge); ye < F; ++ye)
      if (Y[ye] !== ae[ye]) {
        de = Y[ye], ge = ae[ye];
        break;
      }
    return de < ge ? -1 : ge < de ? 1 : 0;
  }
  var b = !0, h = !1, d = 0, w = 1, p = 2, S = 3;
  function G(Y, ae) {
    return i ? Y.source === ae.source && Y.flags === ae.flags : RegExp.prototype.toString.call(Y) === RegExp.prototype.toString.call(ae);
  }
  function B(Y, ae) {
    if (Y.byteLength !== ae.byteLength)
      return !1;
    for (var de = 0; de < Y.byteLength; de++)
      if (Y[de] !== ae[de])
        return !1;
    return !0;
  }
  function R(Y, ae) {
    return Y.byteLength !== ae.byteLength ? !1 : x(new Uint8Array(Y.buffer, Y.byteOffset, Y.byteLength), new Uint8Array(ae.buffer, ae.byteOffset, ae.byteLength)) === 0;
  }
  function N(Y, ae) {
    return Y.byteLength === ae.byteLength && x(new Uint8Array(Y), new Uint8Array(ae)) === 0;
  }
  function H(Y, ae) {
    return se(Y) ? se(ae) && v(Number.prototype.valueOf.call(Y), Number.prototype.valueOf.call(ae)) : le(Y) ? le(ae) && String.prototype.valueOf.call(Y) === String.prototype.valueOf.call(ae) : V(Y) ? V(ae) && Boolean.prototype.valueOf.call(Y) === Boolean.prototype.valueOf.call(ae) : g(Y) ? g(ae) && BigInt.prototype.valueOf.call(Y) === BigInt.prototype.valueOf.call(ae) : l(ae) && Symbol.prototype.valueOf.call(Y) === Symbol.prototype.valueOf.call(ae);
  }
  function Z(Y, ae, de, ge) {
    if (Y === ae)
      return Y !== 0 ? !0 : de ? v(Y, ae) : !0;
    if (de) {
      if (a(Y) !== "object")
        return typeof Y == "number" && _(Y) && _(ae);
      if (a(ae) !== "object" || Y === null || ae === null || Object.getPrototypeOf(Y) !== Object.getPrototypeOf(ae))
        return !1;
    } else {
      if (Y === null || a(Y) !== "object")
        return ae === null || a(ae) !== "object" ? Y == ae : !1;
      if (ae === null || a(ae) !== "object")
        return !1;
    }
    var ye = M(Y), F = M(ae);
    if (ye !== F)
      return !1;
    if (Array.isArray(Y)) {
      if (Y.length !== ae.length)
        return !1;
      var E = y(Y), T = y(ae);
      return E.length !== T.length ? !1 : $(Y, ae, de, ge, w, E);
    }
    if (ye === "[object Object]" && (!K(Y) && K(ae) || !re(Y) && re(ae)))
      return !1;
    if (U(Y)) {
      if (!U(ae) || Date.prototype.getTime.call(Y) !== Date.prototype.getTime.call(ae))
        return !1;
    } else if (J(Y)) {
      if (!J(ae) || !G(Y, ae))
        return !1;
    } else if (ue(Y) || Y instanceof Error) {
      if (Y.message !== ae.message || Y.name !== ae.name)
        return !1;
    } else if (D(Y)) {
      if (!de && (u(Y) || o(Y))) {
        if (!B(Y, ae))
          return !1;
      } else if (!R(Y, ae))
        return !1;
      var W = y(Y), ne = y(ae);
      return W.length !== ne.length ? !1 : $(Y, ae, de, ge, d, W);
    } else {
      if (re(Y))
        return !re(ae) || Y.size !== ae.size ? !1 : $(Y, ae, de, ge, p);
      if (K(Y))
        return !K(ae) || Y.size !== ae.size ? !1 : $(Y, ae, de, ge, S);
      if (q(Y)) {
        if (!N(Y, ae))
          return !1;
      } else if (ve(Y) && !H(Y, ae))
        return !1;
    }
    return $(Y, ae, de, ge, d);
  }
  function oe(Y, ae) {
    return ae.filter(function(de) {
      return C(Y, de);
    });
  }
  function $(Y, ae, de, ge, ye, F) {
    if (arguments.length === 5) {
      F = Object.keys(Y);
      var E = Object.keys(ae);
      if (F.length !== E.length)
        return !1;
    }
    for (var T = 0; T < F.length; T++)
      if (!P(ae, F[T]))
        return !1;
    if (de && arguments.length === 5) {
      var W = m(Y);
      if (W.length !== 0) {
        var ne = 0;
        for (T = 0; T < W.length; T++) {
          var fe = W[T];
          if (C(Y, fe)) {
            if (!C(ae, fe))
              return !1;
            F.push(fe), ne++;
          } else if (C(ae, fe))
            return !1;
        }
        var ce = m(ae);
        if (W.length !== ce.length && oe(ae, ce).length !== ne)
          return !1;
      } else {
        var me = m(ae);
        if (me.length !== 0 && oe(ae, me).length !== 0)
          return !1;
      }
    }
    if (F.length === 0 && (ye === d || ye === w && Y.length === 0 || Y.size === 0))
      return !0;
    if (ge === void 0)
      ge = {
        val1: /* @__PURE__ */ new Map(),
        val2: /* @__PURE__ */ new Map(),
        position: 0
      };
    else {
      var _e = ge.val1.get(Y);
      if (_e !== void 0) {
        var be = ge.val2.get(ae);
        if (be !== void 0)
          return _e === be;
      }
      ge.position++;
    }
    ge.val1.set(Y, ge.position), ge.val2.set(ae, ge.position);
    var Te = j(Y, ae, de, F, ge, ye);
    return ge.val1.delete(Y), ge.val2.delete(ae), Te;
  }
  function A(Y, ae, de, ge) {
    for (var ye = s(Y), F = 0; F < ye.length; F++) {
      var E = ye[F];
      if (Z(ae, E, de, ge))
        return Y.delete(E), !0;
    }
    return !1;
  }
  function X(Y) {
    switch (a(Y)) {
      case "undefined":
        return null;
      case "object":
        return;
      case "symbol":
        return !1;
      case "string":
        Y = +Y;
      case "number":
        if (_(Y))
          return !1;
    }
    return !0;
  }
  function te(Y, ae, de) {
    var ge = X(de);
    return ge != null ? ge : ae.has(ge) && !Y.has(ge);
  }
  function pe(Y, ae, de, ge, ye) {
    var F = X(de);
    if (F != null)
      return F;
    var E = ae.get(F);
    return E === void 0 && !ae.has(F) || !Z(ge, E, !1, ye) ? !1 : !Y.has(F) && Z(ge, E, !1, ye);
  }
  function z(Y, ae, de, ge) {
    for (var ye = null, F = s(Y), E = 0; E < F.length; E++) {
      var T = F[E];
      if (a(T) === "object" && T !== null)
        ye === null && (ye = /* @__PURE__ */ new Set()), ye.add(T);
      else if (!ae.has(T)) {
        if (de || !te(Y, ae, T))
          return !1;
        ye === null && (ye = /* @__PURE__ */ new Set()), ye.add(T);
      }
    }
    if (ye !== null) {
      for (var W = s(ae), ne = 0; ne < W.length; ne++) {
        var fe = W[ne];
        if (a(fe) === "object" && fe !== null) {
          if (!A(ye, fe, de, ge))
            return !1;
        } else if (!de && !Y.has(fe) && !A(ye, fe, de, ge))
          return !1;
      }
      return ye.size === 0;
    }
    return !0;
  }
  function I(Y, ae, de, ge, ye, F) {
    for (var E = s(Y), T = 0; T < E.length; T++) {
      var W = E[T];
      if (Z(de, W, ye, F) && Z(ge, ae.get(W), ye, F))
        return Y.delete(W), !0;
    }
    return !1;
  }
  function L(Y, ae, de, ge) {
    for (var ye = null, F = f(Y), E = 0; E < F.length; E++) {
      var T = e(F[E], 2), W = T[0], ne = T[1];
      if (a(W) === "object" && W !== null)
        ye === null && (ye = /* @__PURE__ */ new Set()), ye.add(W);
      else {
        var fe = ae.get(W);
        if (fe === void 0 && !ae.has(W) || !Z(ne, fe, de, ge)) {
          if (de || !pe(Y, ae, W, ne, ge))
            return !1;
          ye === null && (ye = /* @__PURE__ */ new Set()), ye.add(W);
        }
      }
    }
    if (ye !== null) {
      for (var ce = f(ae), me = 0; me < ce.length; me++) {
        var _e = e(ce[me], 2), W = _e[0], be = _e[1];
        if (a(W) === "object" && W !== null) {
          if (!I(ye, Y, W, be, de, ge))
            return !1;
        } else if (!de && (!Y.has(W) || !Z(Y.get(W), be, !1, ge)) && !I(ye, Y, W, be, !1, ge))
          return !1;
      }
      return ye.size === 0;
    }
    return !0;
  }
  function j(Y, ae, de, ge, ye, F) {
    var E = 0;
    if (F === p) {
      if (!z(Y, ae, de, ye))
        return !1;
    } else if (F === S) {
      if (!L(Y, ae, de, ye))
        return !1;
    } else if (F === w)
      for (; E < Y.length; E++)
        if (P(Y, E)) {
          if (!P(ae, E) || !Z(Y[E], ae[E], de, ye))
            return !1;
        } else {
          if (P(ae, E))
            return !1;
          for (var T = Object.keys(Y); E < T.length; E++) {
            var W = T[E];
            if (!P(ae, W) || !Z(Y[W], ae[W], de, ye))
              return !1;
          }
          return T.length === Object.keys(ae).length;
        }
    for (E = 0; E < ge.length; E++) {
      var ne = ge[E];
      if (!Z(Y[ne], ae[ne], de, ye))
        return !1;
    }
    return !0;
  }
  function ie(Y, ae) {
    return Z(Y, ae, h);
  }
  function he(Y, ae) {
    return Z(Y, ae, b);
  }
  return vs = {
    isDeepEqual: ie,
    isDeepStrictEqual: he
  }, vs;
}
var eh;
function Di() {
  if (eh)
    return Xf.exports;
  eh = 1;
  function e(w) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(S) {
      return typeof S;
    } : e = function(S) {
      return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
    }, e(w);
  }
  function t(w, p) {
    if (!(w instanceof p))
      throw new TypeError("Cannot call a class as a function");
  }
  var r = Iv(), n = r.codes, a = n.ERR_AMBIGUOUS_ARGUMENT, i = n.ERR_INVALID_ARG_TYPE, s = n.ERR_INVALID_ARG_VALUE, f = n.ERR_INVALID_RETURN_VALUE, v = n.ERR_MISSING_ARGS, m = J8(), _ = hr, O = _.inspect, P = hr.types, C = P.isPromise, M = P.isRegExp, k = Object.assign ? Object.assign : Y8().assign, q = Object.is ? Object.is : Cv(), D, U;
  function K() {
    var w = ix();
    D = w.isDeepEqual, U = w.isDeepStrictEqual;
  }
  var J = !1, re = Xf.exports = V, ue = {};
  function ve(w) {
    throw w.message instanceof Error ? w.message : new m(w);
  }
  function se(w, p, S, G, B) {
    var R = arguments.length, N;
    if (R === 0)
      N = "Failed";
    else if (R === 1)
      S = w, w = void 0;
    else {
      if (J === !1) {
        J = !0;
        var H = process.emitWarning ? process.emitWarning : console.warn.bind(console);
        H("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      R === 2 && (G = "!=");
    }
    if (S instanceof Error)
      throw S;
    var Z = {
      actual: w,
      expected: p,
      operator: G === void 0 ? "fail" : G,
      stackStartFn: B || se
    };
    S !== void 0 && (Z.message = S);
    var oe = new m(Z);
    throw N && (oe.message = N, oe.generatedMessage = !0), oe;
  }
  re.fail = se, re.AssertionError = m;
  function le(w, p, S, G) {
    if (!S) {
      var B = !1;
      if (p === 0)
        B = !0, G = "No value argument passed to `assert.ok()`";
      else if (G instanceof Error)
        throw G;
      var R = new m({
        actual: S,
        expected: !0,
        message: G,
        operator: "==",
        stackStartFn: w
      });
      throw R.generatedMessage = B, R;
    }
  }
  function V() {
    for (var w = arguments.length, p = new Array(w), S = 0; S < w; S++)
      p[S] = arguments[S];
    le.apply(void 0, [V, p.length].concat(p));
  }
  re.ok = V, re.equal = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    p != S && ve({
      actual: p,
      expected: S,
      message: G,
      operator: "==",
      stackStartFn: w
    });
  }, re.notEqual = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    p == S && ve({
      actual: p,
      expected: S,
      message: G,
      operator: "!=",
      stackStartFn: w
    });
  }, re.deepEqual = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    D === void 0 && K(), D(p, S) || ve({
      actual: p,
      expected: S,
      message: G,
      operator: "deepEqual",
      stackStartFn: w
    });
  }, re.notDeepEqual = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    D === void 0 && K(), D(p, S) && ve({
      actual: p,
      expected: S,
      message: G,
      operator: "notDeepEqual",
      stackStartFn: w
    });
  }, re.deepStrictEqual = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    D === void 0 && K(), U(p, S) || ve({
      actual: p,
      expected: S,
      message: G,
      operator: "deepStrictEqual",
      stackStartFn: w
    });
  }, re.notDeepStrictEqual = g;
  function g(w, p, S) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    D === void 0 && K(), U(w, p) && ve({
      actual: w,
      expected: p,
      message: S,
      operator: "notDeepStrictEqual",
      stackStartFn: g
    });
  }
  re.strictEqual = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    q(p, S) || ve({
      actual: p,
      expected: S,
      message: G,
      operator: "strictEqual",
      stackStartFn: w
    });
  }, re.notStrictEqual = function w(p, S, G) {
    if (arguments.length < 2)
      throw new v("actual", "expected");
    q(p, S) && ve({
      actual: p,
      expected: S,
      message: G,
      operator: "notStrictEqual",
      stackStartFn: w
    });
  };
  var l = function w(p, S, G) {
    var B = this;
    t(this, w), S.forEach(function(R) {
      R in p && (G !== void 0 && typeof G[R] == "string" && M(p[R]) && p[R].test(G[R]) ? B[R] = G[R] : B[R] = p[R]);
    });
  };
  function u(w, p, S, G, B, R) {
    if (!(S in w) || !U(w[S], p[S])) {
      if (!G) {
        var N = new l(w, B), H = new l(p, B, w), Z = new m({
          actual: N,
          expected: H,
          operator: "deepStrictEqual",
          stackStartFn: R
        });
        throw Z.actual = w, Z.expected = p, Z.operator = R.name, Z;
      }
      ve({
        actual: w,
        expected: p,
        message: G,
        operator: R.name,
        stackStartFn: R
      });
    }
  }
  function o(w, p, S, G) {
    if (typeof p != "function") {
      if (M(p))
        return p.test(w);
      if (arguments.length === 2)
        throw new i("expected", ["Function", "RegExp"], p);
      if (e(w) !== "object" || w === null) {
        var B = new m({
          actual: w,
          expected: p,
          message: S,
          operator: "deepStrictEqual",
          stackStartFn: G
        });
        throw B.operator = G.name, B;
      }
      var R = Object.keys(p);
      if (p instanceof Error)
        R.push("name", "message");
      else if (R.length === 0)
        throw new s("error", p, "may not be an empty object");
      return D === void 0 && K(), R.forEach(function(N) {
        typeof w[N] == "string" && M(p[N]) && p[N].test(w[N]) || u(w, p, N, S, R, G);
      }), !0;
    }
    return p.prototype !== void 0 && w instanceof p ? !0 : Error.isPrototypeOf(p) ? !1 : p.call({}, w) === !0;
  }
  function c(w) {
    if (typeof w != "function")
      throw new i("fn", "Function", w);
    try {
      w();
    } catch (p) {
      return p;
    }
    return ue;
  }
  function y(w) {
    return C(w) || w !== null && e(w) === "object" && typeof w.then == "function" && typeof w.catch == "function";
  }
  function x(w) {
    return Promise.resolve().then(function() {
      var p;
      if (typeof w == "function") {
        if (p = w(), !y(p))
          throw new f("instance of Promise", "promiseFn", p);
      } else if (y(w))
        p = w;
      else
        throw new i("promiseFn", ["Function", "Promise"], w);
      return Promise.resolve().then(function() {
        return p;
      }).then(function() {
        return ue;
      }).catch(function(S) {
        return S;
      });
    });
  }
  function b(w, p, S, G) {
    if (typeof S == "string") {
      if (arguments.length === 4)
        throw new i("error", ["Object", "Error", "Function", "RegExp"], S);
      if (e(p) === "object" && p !== null) {
        if (p.message === S)
          throw new a("error/message", 'The error message "'.concat(p.message, '" is identical to the message.'));
      } else if (p === S)
        throw new a("error/message", 'The error "'.concat(p, '" is identical to the message.'));
      G = S, S = void 0;
    } else if (S != null && e(S) !== "object" && typeof S != "function")
      throw new i("error", ["Object", "Error", "Function", "RegExp"], S);
    if (p === ue) {
      var B = "";
      S && S.name && (B += " (".concat(S.name, ")")), B += G ? ": ".concat(G) : ".";
      var R = w.name === "rejects" ? "rejection" : "exception";
      ve({
        actual: void 0,
        expected: S,
        operator: w.name,
        message: "Missing expected ".concat(R).concat(B),
        stackStartFn: w
      });
    }
    if (S && !o(p, S, G, w))
      throw p;
  }
  function h(w, p, S, G) {
    if (p !== ue) {
      if (typeof S == "string" && (G = S, S = void 0), !S || o(p, S)) {
        var B = G ? ": ".concat(G) : ".", R = w.name === "doesNotReject" ? "rejection" : "exception";
        ve({
          actual: p,
          expected: S,
          operator: w.name,
          message: "Got unwanted ".concat(R).concat(B, `
`) + 'Actual message: "'.concat(p && p.message, '"'),
          stackStartFn: w
        });
      }
      throw p;
    }
  }
  re.throws = function w(p) {
    for (var S = arguments.length, G = new Array(S > 1 ? S - 1 : 0), B = 1; B < S; B++)
      G[B - 1] = arguments[B];
    b.apply(void 0, [w, c(p)].concat(G));
  }, re.rejects = function w(p) {
    for (var S = arguments.length, G = new Array(S > 1 ? S - 1 : 0), B = 1; B < S; B++)
      G[B - 1] = arguments[B];
    return x(p).then(function(R) {
      return b.apply(void 0, [w, R].concat(G));
    });
  }, re.doesNotThrow = function w(p) {
    for (var S = arguments.length, G = new Array(S > 1 ? S - 1 : 0), B = 1; B < S; B++)
      G[B - 1] = arguments[B];
    h.apply(void 0, [w, c(p)].concat(G));
  }, re.doesNotReject = function w(p) {
    for (var S = arguments.length, G = new Array(S > 1 ? S - 1 : 0), B = 1; B < S; B++)
      G[B - 1] = arguments[B];
    return x(p).then(function(R) {
      return h.apply(void 0, [w, R].concat(G));
    });
  }, re.ifError = function w(p) {
    if (p != null) {
      var S = "ifError got unwanted exception: ";
      e(p) === "object" && typeof p.message == "string" ? p.message.length === 0 && p.constructor ? S += p.constructor.name : S += p.message : S += O(p);
      var G = new m({
        actual: p,
        expected: null,
        operator: "ifError",
        message: S,
        stackStartFn: w
      }), B = p.stack;
      if (typeof B == "string") {
        var R = B.split(`
`);
        R.shift();
        for (var N = G.stack.split(`
`), H = 0; H < R.length; H++) {
          var Z = N.indexOf(R[H]);
          if (Z !== -1) {
            N = N.slice(0, Z);
            break;
          }
        }
        G.stack = "".concat(N.join(`
`), `
`).concat(R.join(`
`));
      }
      throw G;
    }
  };
  function d() {
    for (var w = arguments.length, p = new Array(w), S = 0; S < w; S++)
      p[S] = arguments[S];
    le.apply(void 0, [d, p.length].concat(p));
  }
  return re.strict = k(d, re, {
    equal: re.strictEqual,
    deepEqual: re.deepStrictEqual,
    notEqual: re.notStrictEqual,
    notDeepEqual: re.notDeepStrictEqual
  }), re.strict.strict = re.strict, Xf.exports;
}
var Pr = {}, c0 = { exports: {} };
(function(e) {
  (function(t, r) {
    function n(u, o) {
      if (!u)
        throw new Error(o || "Assertion failed");
    }
    function a(u, o) {
      u.super_ = o;
      var c = function() {
      };
      c.prototype = o.prototype, u.prototype = new c(), u.prototype.constructor = u;
    }
    function i(u, o, c) {
      if (i.isBN(u))
        return u;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, u !== null && ((o === "le" || o === "be") && (c = o, o = 10), this._init(u || 0, o || 10, c || "be"));
    }
    typeof t == "object" ? t.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var s;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = er.Buffer;
    } catch {
    }
    i.isBN = function(o) {
      return o instanceof i ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === i.wordSize && Array.isArray(o.words);
    }, i.max = function(o, c) {
      return o.cmp(c) > 0 ? o : c;
    }, i.min = function(o, c) {
      return o.cmp(c) < 0 ? o : c;
    }, i.prototype._init = function(o, c, y) {
      if (typeof o == "number")
        return this._initNumber(o, c, y);
      if (typeof o == "object")
        return this._initArray(o, c, y);
      c === "hex" && (c = 16), n(c === (c | 0) && c >= 2 && c <= 36), o = o.toString().replace(/\s+/g, "");
      var x = 0;
      o[0] === "-" && (x++, this.negative = 1), x < o.length && (c === 16 ? this._parseHex(o, x, y) : (this._parseBase(o, c, x), y === "le" && this._initArray(this.toArray(), c, y)));
    }, i.prototype._initNumber = function(o, c, y) {
      o < 0 && (this.negative = 1, o = -o), o < 67108864 ? (this.words = [o & 67108863], this.length = 1) : o < 4503599627370496 ? (this.words = [
        o & 67108863,
        o / 67108864 & 67108863
      ], this.length = 2) : (n(o < 9007199254740992), this.words = [
        o & 67108863,
        o / 67108864 & 67108863,
        1
      ], this.length = 3), y === "le" && this._initArray(this.toArray(), c, y);
    }, i.prototype._initArray = function(o, c, y) {
      if (n(typeof o.length == "number"), o.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(o.length / 3), this.words = new Array(this.length);
      for (var x = 0; x < this.length; x++)
        this.words[x] = 0;
      var b, h, d = 0;
      if (y === "be")
        for (x = o.length - 1, b = 0; x >= 0; x -= 3)
          h = o[x] | o[x - 1] << 8 | o[x - 2] << 16, this.words[b] |= h << d & 67108863, this.words[b + 1] = h >>> 26 - d & 67108863, d += 24, d >= 26 && (d -= 26, b++);
      else if (y === "le")
        for (x = 0, b = 0; x < o.length; x += 3)
          h = o[x] | o[x + 1] << 8 | o[x + 2] << 16, this.words[b] |= h << d & 67108863, this.words[b + 1] = h >>> 26 - d & 67108863, d += 24, d >= 26 && (d -= 26, b++);
      return this._strip();
    };
    function f(u, o) {
      var c = u.charCodeAt(o);
      if (c >= 48 && c <= 57)
        return c - 48;
      if (c >= 65 && c <= 70)
        return c - 55;
      if (c >= 97 && c <= 102)
        return c - 87;
      n(!1, "Invalid character in " + u);
    }
    function v(u, o, c) {
      var y = f(u, c);
      return c - 1 >= o && (y |= f(u, c - 1) << 4), y;
    }
    i.prototype._parseHex = function(o, c, y) {
      this.length = Math.ceil((o.length - c) / 6), this.words = new Array(this.length);
      for (var x = 0; x < this.length; x++)
        this.words[x] = 0;
      var b = 0, h = 0, d;
      if (y === "be")
        for (x = o.length - 1; x >= c; x -= 2)
          d = v(o, c, x) << b, this.words[h] |= d & 67108863, b >= 18 ? (b -= 18, h += 1, this.words[h] |= d >>> 26) : b += 8;
      else {
        var w = o.length - c;
        for (x = w % 2 === 0 ? c + 1 : c; x < o.length; x += 2)
          d = v(o, c, x) << b, this.words[h] |= d & 67108863, b >= 18 ? (b -= 18, h += 1, this.words[h] |= d >>> 26) : b += 8;
      }
      this._strip();
    };
    function m(u, o, c, y) {
      for (var x = 0, b = 0, h = Math.min(u.length, c), d = o; d < h; d++) {
        var w = u.charCodeAt(d) - 48;
        x *= y, w >= 49 ? b = w - 49 + 10 : w >= 17 ? b = w - 17 + 10 : b = w, n(w >= 0 && b < y, "Invalid character"), x += b;
      }
      return x;
    }
    i.prototype._parseBase = function(o, c, y) {
      this.words = [0], this.length = 1;
      for (var x = 0, b = 1; b <= 67108863; b *= c)
        x++;
      x--, b = b / c | 0;
      for (var h = o.length - y, d = h % x, w = Math.min(h, h - d) + y, p = 0, S = y; S < w; S += x)
        p = m(o, S, S + x, c), this.imuln(b), this.words[0] + p < 67108864 ? this.words[0] += p : this._iaddn(p);
      if (d !== 0) {
        var G = 1;
        for (p = m(o, S, o.length, c), S = 0; S < d; S++)
          G *= c;
        this.imuln(G), this.words[0] + p < 67108864 ? this.words[0] += p : this._iaddn(p);
      }
      this._strip();
    }, i.prototype.copy = function(o) {
      o.words = new Array(this.length);
      for (var c = 0; c < this.length; c++)
        o.words[c] = this.words[c];
      o.length = this.length, o.negative = this.negative, o.red = this.red;
    };
    function _(u, o) {
      u.words = o.words, u.length = o.length, u.negative = o.negative, u.red = o.red;
    }
    if (i.prototype._move = function(o) {
      _(o, this);
    }, i.prototype.clone = function() {
      var o = new i(null);
      return this.copy(o), o;
    }, i.prototype._expand = function(o) {
      for (; this.length < o; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        i.prototype[Symbol.for("nodejs.util.inspect.custom")] = O;
      } catch {
        i.prototype.inspect = O;
      }
    else
      i.prototype.inspect = O;
    function O() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var P = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], C = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], M = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(o, c) {
      o = o || 10, c = c | 0 || 1;
      var y;
      if (o === 16 || o === "hex") {
        y = "";
        for (var x = 0, b = 0, h = 0; h < this.length; h++) {
          var d = this.words[h], w = ((d << x | b) & 16777215).toString(16);
          b = d >>> 24 - x & 16777215, x += 2, x >= 26 && (x -= 26, h--), b !== 0 || h !== this.length - 1 ? y = P[6 - w.length] + w + y : y = w + y;
        }
        for (b !== 0 && (y = b.toString(16) + y); y.length % c !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var p = C[o], S = M[o];
        y = "";
        var G = this.clone();
        for (G.negative = 0; !G.isZero(); ) {
          var B = G.modrn(S).toString(o);
          G = G.idivn(S), G.isZero() ? y = B + y : y = P[p - B.length] + B + y;
        }
        for (this.isZero() && (y = "0" + y); y.length % c !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var o = this.words[0];
      return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -o : o;
    }, i.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, s && (i.prototype.toBuffer = function(o, c) {
      return this.toArrayLike(s, o, c);
    }), i.prototype.toArray = function(o, c) {
      return this.toArrayLike(Array, o, c);
    };
    var k = function(o, c) {
      return o.allocUnsafe ? o.allocUnsafe(c) : new o(c);
    };
    i.prototype.toArrayLike = function(o, c, y) {
      this._strip();
      var x = this.byteLength(), b = y || Math.max(1, x);
      n(x <= b, "byte array longer than desired length"), n(b > 0, "Requested array length <= 0");
      var h = k(o, b), d = c === "le" ? "LE" : "BE";
      return this["_toArrayLike" + d](h, x), h;
    }, i.prototype._toArrayLikeLE = function(o, c) {
      for (var y = 0, x = 0, b = 0, h = 0; b < this.length; b++) {
        var d = this.words[b] << h | x;
        o[y++] = d & 255, y < o.length && (o[y++] = d >> 8 & 255), y < o.length && (o[y++] = d >> 16 & 255), h === 6 ? (y < o.length && (o[y++] = d >> 24 & 255), x = 0, h = 0) : (x = d >>> 24, h += 2);
      }
      if (y < o.length)
        for (o[y++] = x; y < o.length; )
          o[y++] = 0;
    }, i.prototype._toArrayLikeBE = function(o, c) {
      for (var y = o.length - 1, x = 0, b = 0, h = 0; b < this.length; b++) {
        var d = this.words[b] << h | x;
        o[y--] = d & 255, y >= 0 && (o[y--] = d >> 8 & 255), y >= 0 && (o[y--] = d >> 16 & 255), h === 6 ? (y >= 0 && (o[y--] = d >> 24 & 255), x = 0, h = 0) : (x = d >>> 24, h += 2);
      }
      if (y >= 0)
        for (o[y--] = x; y >= 0; )
          o[y--] = 0;
    }, Math.clz32 ? i.prototype._countBits = function(o) {
      return 32 - Math.clz32(o);
    } : i.prototype._countBits = function(o) {
      var c = o, y = 0;
      return c >= 4096 && (y += 13, c >>>= 13), c >= 64 && (y += 7, c >>>= 7), c >= 8 && (y += 4, c >>>= 4), c >= 2 && (y += 2, c >>>= 2), y + c;
    }, i.prototype._zeroBits = function(o) {
      if (o === 0)
        return 26;
      var c = o, y = 0;
      return (c & 8191) === 0 && (y += 13, c >>>= 13), (c & 127) === 0 && (y += 7, c >>>= 7), (c & 15) === 0 && (y += 4, c >>>= 4), (c & 3) === 0 && (y += 2, c >>>= 2), (c & 1) === 0 && y++, y;
    }, i.prototype.bitLength = function() {
      var o = this.words[this.length - 1], c = this._countBits(o);
      return (this.length - 1) * 26 + c;
    };
    function q(u) {
      for (var o = new Array(u.bitLength()), c = 0; c < o.length; c++) {
        var y = c / 26 | 0, x = c % 26;
        o[c] = u.words[y] >>> x & 1;
      }
      return o;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var o = 0, c = 0; c < this.length; c++) {
        var y = this._zeroBits(this.words[c]);
        if (o += y, y !== 26)
          break;
      }
      return o;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(o) {
      return this.negative !== 0 ? this.abs().inotn(o).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(o) {
      return this.testn(o - 1) ? this.notn(o).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(o) {
      for (; this.length < o.length; )
        this.words[this.length++] = 0;
      for (var c = 0; c < o.length; c++)
        this.words[c] = this.words[c] | o.words[c];
      return this._strip();
    }, i.prototype.ior = function(o) {
      return n((this.negative | o.negative) === 0), this.iuor(o);
    }, i.prototype.or = function(o) {
      return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this);
    }, i.prototype.uor = function(o) {
      return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this);
    }, i.prototype.iuand = function(o) {
      var c;
      this.length > o.length ? c = o : c = this;
      for (var y = 0; y < c.length; y++)
        this.words[y] = this.words[y] & o.words[y];
      return this.length = c.length, this._strip();
    }, i.prototype.iand = function(o) {
      return n((this.negative | o.negative) === 0), this.iuand(o);
    }, i.prototype.and = function(o) {
      return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this);
    }, i.prototype.uand = function(o) {
      return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this);
    }, i.prototype.iuxor = function(o) {
      var c, y;
      this.length > o.length ? (c = this, y = o) : (c = o, y = this);
      for (var x = 0; x < y.length; x++)
        this.words[x] = c.words[x] ^ y.words[x];
      if (this !== c)
        for (; x < c.length; x++)
          this.words[x] = c.words[x];
      return this.length = c.length, this._strip();
    }, i.prototype.ixor = function(o) {
      return n((this.negative | o.negative) === 0), this.iuxor(o);
    }, i.prototype.xor = function(o) {
      return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this);
    }, i.prototype.uxor = function(o) {
      return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this);
    }, i.prototype.inotn = function(o) {
      n(typeof o == "number" && o >= 0);
      var c = Math.ceil(o / 26) | 0, y = o % 26;
      this._expand(c), y > 0 && c--;
      for (var x = 0; x < c; x++)
        this.words[x] = ~this.words[x] & 67108863;
      return y > 0 && (this.words[x] = ~this.words[x] & 67108863 >> 26 - y), this._strip();
    }, i.prototype.notn = function(o) {
      return this.clone().inotn(o);
    }, i.prototype.setn = function(o, c) {
      n(typeof o == "number" && o >= 0);
      var y = o / 26 | 0, x = o % 26;
      return this._expand(y + 1), c ? this.words[y] = this.words[y] | 1 << x : this.words[y] = this.words[y] & ~(1 << x), this._strip();
    }, i.prototype.iadd = function(o) {
      var c;
      if (this.negative !== 0 && o.negative === 0)
        return this.negative = 0, c = this.isub(o), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && o.negative !== 0)
        return o.negative = 0, c = this.isub(o), o.negative = 1, c._normSign();
      var y, x;
      this.length > o.length ? (y = this, x = o) : (y = o, x = this);
      for (var b = 0, h = 0; h < x.length; h++)
        c = (y.words[h] | 0) + (x.words[h] | 0) + b, this.words[h] = c & 67108863, b = c >>> 26;
      for (; b !== 0 && h < y.length; h++)
        c = (y.words[h] | 0) + b, this.words[h] = c & 67108863, b = c >>> 26;
      if (this.length = y.length, b !== 0)
        this.words[this.length] = b, this.length++;
      else if (y !== this)
        for (; h < y.length; h++)
          this.words[h] = y.words[h];
      return this;
    }, i.prototype.add = function(o) {
      var c;
      return o.negative !== 0 && this.negative === 0 ? (o.negative = 0, c = this.sub(o), o.negative ^= 1, c) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0, c = o.sub(this), this.negative = 1, c) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this);
    }, i.prototype.isub = function(o) {
      if (o.negative !== 0) {
        o.negative = 0;
        var c = this.iadd(o);
        return o.negative = 1, c._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(o), this.negative = 1, this._normSign();
      var y = this.cmp(o);
      if (y === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var x, b;
      y > 0 ? (x = this, b = o) : (x = o, b = this);
      for (var h = 0, d = 0; d < b.length; d++)
        c = (x.words[d] | 0) - (b.words[d] | 0) + h, h = c >> 26, this.words[d] = c & 67108863;
      for (; h !== 0 && d < x.length; d++)
        c = (x.words[d] | 0) + h, h = c >> 26, this.words[d] = c & 67108863;
      if (h === 0 && d < x.length && x !== this)
        for (; d < x.length; d++)
          this.words[d] = x.words[d];
      return this.length = Math.max(this.length, d), x !== this && (this.negative = 1), this._strip();
    }, i.prototype.sub = function(o) {
      return this.clone().isub(o);
    };
    function D(u, o, c) {
      c.negative = o.negative ^ u.negative;
      var y = u.length + o.length | 0;
      c.length = y, y = y - 1 | 0;
      var x = u.words[0] | 0, b = o.words[0] | 0, h = x * b, d = h & 67108863, w = h / 67108864 | 0;
      c.words[0] = d;
      for (var p = 1; p < y; p++) {
        for (var S = w >>> 26, G = w & 67108863, B = Math.min(p, o.length - 1), R = Math.max(0, p - u.length + 1); R <= B; R++) {
          var N = p - R | 0;
          x = u.words[N] | 0, b = o.words[R] | 0, h = x * b + G, S += h / 67108864 | 0, G = h & 67108863;
        }
        c.words[p] = G | 0, w = S | 0;
      }
      return w !== 0 ? c.words[p] = w | 0 : c.length--, c._strip();
    }
    var U = function(o, c, y) {
      var x = o.words, b = c.words, h = y.words, d = 0, w, p, S, G = x[0] | 0, B = G & 8191, R = G >>> 13, N = x[1] | 0, H = N & 8191, Z = N >>> 13, oe = x[2] | 0, $ = oe & 8191, A = oe >>> 13, X = x[3] | 0, te = X & 8191, pe = X >>> 13, z = x[4] | 0, I = z & 8191, L = z >>> 13, j = x[5] | 0, ie = j & 8191, he = j >>> 13, Y = x[6] | 0, ae = Y & 8191, de = Y >>> 13, ge = x[7] | 0, ye = ge & 8191, F = ge >>> 13, E = x[8] | 0, T = E & 8191, W = E >>> 13, ne = x[9] | 0, fe = ne & 8191, ce = ne >>> 13, me = b[0] | 0, _e = me & 8191, be = me >>> 13, Te = b[1] | 0, we = Te & 8191, xe = Te >>> 13, Ke = b[2] | 0, Pe = Ke & 8191, Me = Ke >>> 13, We = b[3] | 0, Oe = We & 8191, Ee = We >>> 13, Ge = b[4] | 0, Le = Ge & 8191, Se = Ge >>> 13, Ve = b[5] | 0, Ce = Ve & 8191, Ae = Ve >>> 13, Ze = b[6] | 0, ke = Ze & 8191, $e = Ze >>> 13, Je = b[7] | 0, Ne = Je & 8191, Re = Je >>> 13, Ye = b[8] | 0, qe = Ye & 8191, Be = Ye >>> 13, He = b[9] | 0, Ue = He & 8191, De = He >>> 13;
      y.negative = o.negative ^ c.negative, y.length = 19, w = Math.imul(B, _e), p = Math.imul(B, be), p = p + Math.imul(R, _e) | 0, S = Math.imul(R, be);
      var pt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, w = Math.imul(H, _e), p = Math.imul(H, be), p = p + Math.imul(Z, _e) | 0, S = Math.imul(Z, be), w = w + Math.imul(B, we) | 0, p = p + Math.imul(B, xe) | 0, p = p + Math.imul(R, we) | 0, S = S + Math.imul(R, xe) | 0;
      var vt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, w = Math.imul($, _e), p = Math.imul($, be), p = p + Math.imul(A, _e) | 0, S = Math.imul(A, be), w = w + Math.imul(H, we) | 0, p = p + Math.imul(H, xe) | 0, p = p + Math.imul(Z, we) | 0, S = S + Math.imul(Z, xe) | 0, w = w + Math.imul(B, Pe) | 0, p = p + Math.imul(B, Me) | 0, p = p + Math.imul(R, Pe) | 0, S = S + Math.imul(R, Me) | 0;
      var yt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, w = Math.imul(te, _e), p = Math.imul(te, be), p = p + Math.imul(pe, _e) | 0, S = Math.imul(pe, be), w = w + Math.imul($, we) | 0, p = p + Math.imul($, xe) | 0, p = p + Math.imul(A, we) | 0, S = S + Math.imul(A, xe) | 0, w = w + Math.imul(H, Pe) | 0, p = p + Math.imul(H, Me) | 0, p = p + Math.imul(Z, Pe) | 0, S = S + Math.imul(Z, Me) | 0, w = w + Math.imul(B, Oe) | 0, p = p + Math.imul(B, Ee) | 0, p = p + Math.imul(R, Oe) | 0, S = S + Math.imul(R, Ee) | 0;
      var gt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, w = Math.imul(I, _e), p = Math.imul(I, be), p = p + Math.imul(L, _e) | 0, S = Math.imul(L, be), w = w + Math.imul(te, we) | 0, p = p + Math.imul(te, xe) | 0, p = p + Math.imul(pe, we) | 0, S = S + Math.imul(pe, xe) | 0, w = w + Math.imul($, Pe) | 0, p = p + Math.imul($, Me) | 0, p = p + Math.imul(A, Pe) | 0, S = S + Math.imul(A, Me) | 0, w = w + Math.imul(H, Oe) | 0, p = p + Math.imul(H, Ee) | 0, p = p + Math.imul(Z, Oe) | 0, S = S + Math.imul(Z, Ee) | 0, w = w + Math.imul(B, Le) | 0, p = p + Math.imul(B, Se) | 0, p = p + Math.imul(R, Le) | 0, S = S + Math.imul(R, Se) | 0;
      var bt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, w = Math.imul(ie, _e), p = Math.imul(ie, be), p = p + Math.imul(he, _e) | 0, S = Math.imul(he, be), w = w + Math.imul(I, we) | 0, p = p + Math.imul(I, xe) | 0, p = p + Math.imul(L, we) | 0, S = S + Math.imul(L, xe) | 0, w = w + Math.imul(te, Pe) | 0, p = p + Math.imul(te, Me) | 0, p = p + Math.imul(pe, Pe) | 0, S = S + Math.imul(pe, Me) | 0, w = w + Math.imul($, Oe) | 0, p = p + Math.imul($, Ee) | 0, p = p + Math.imul(A, Oe) | 0, S = S + Math.imul(A, Ee) | 0, w = w + Math.imul(H, Le) | 0, p = p + Math.imul(H, Se) | 0, p = p + Math.imul(Z, Le) | 0, S = S + Math.imul(Z, Se) | 0, w = w + Math.imul(B, Ce) | 0, p = p + Math.imul(B, Ae) | 0, p = p + Math.imul(R, Ce) | 0, S = S + Math.imul(R, Ae) | 0;
      var Lt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, w = Math.imul(ae, _e), p = Math.imul(ae, be), p = p + Math.imul(de, _e) | 0, S = Math.imul(de, be), w = w + Math.imul(ie, we) | 0, p = p + Math.imul(ie, xe) | 0, p = p + Math.imul(he, we) | 0, S = S + Math.imul(he, xe) | 0, w = w + Math.imul(I, Pe) | 0, p = p + Math.imul(I, Me) | 0, p = p + Math.imul(L, Pe) | 0, S = S + Math.imul(L, Me) | 0, w = w + Math.imul(te, Oe) | 0, p = p + Math.imul(te, Ee) | 0, p = p + Math.imul(pe, Oe) | 0, S = S + Math.imul(pe, Ee) | 0, w = w + Math.imul($, Le) | 0, p = p + Math.imul($, Se) | 0, p = p + Math.imul(A, Le) | 0, S = S + Math.imul(A, Se) | 0, w = w + Math.imul(H, Ce) | 0, p = p + Math.imul(H, Ae) | 0, p = p + Math.imul(Z, Ce) | 0, S = S + Math.imul(Z, Ae) | 0, w = w + Math.imul(B, ke) | 0, p = p + Math.imul(B, $e) | 0, p = p + Math.imul(R, ke) | 0, S = S + Math.imul(R, $e) | 0;
      var Ct = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, w = Math.imul(ye, _e), p = Math.imul(ye, be), p = p + Math.imul(F, _e) | 0, S = Math.imul(F, be), w = w + Math.imul(ae, we) | 0, p = p + Math.imul(ae, xe) | 0, p = p + Math.imul(de, we) | 0, S = S + Math.imul(de, xe) | 0, w = w + Math.imul(ie, Pe) | 0, p = p + Math.imul(ie, Me) | 0, p = p + Math.imul(he, Pe) | 0, S = S + Math.imul(he, Me) | 0, w = w + Math.imul(I, Oe) | 0, p = p + Math.imul(I, Ee) | 0, p = p + Math.imul(L, Oe) | 0, S = S + Math.imul(L, Ee) | 0, w = w + Math.imul(te, Le) | 0, p = p + Math.imul(te, Se) | 0, p = p + Math.imul(pe, Le) | 0, S = S + Math.imul(pe, Se) | 0, w = w + Math.imul($, Ce) | 0, p = p + Math.imul($, Ae) | 0, p = p + Math.imul(A, Ce) | 0, S = S + Math.imul(A, Ae) | 0, w = w + Math.imul(H, ke) | 0, p = p + Math.imul(H, $e) | 0, p = p + Math.imul(Z, ke) | 0, S = S + Math.imul(Z, $e) | 0, w = w + Math.imul(B, Ne) | 0, p = p + Math.imul(B, Re) | 0, p = p + Math.imul(R, Ne) | 0, S = S + Math.imul(R, Re) | 0;
      var kt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, w = Math.imul(T, _e), p = Math.imul(T, be), p = p + Math.imul(W, _e) | 0, S = Math.imul(W, be), w = w + Math.imul(ye, we) | 0, p = p + Math.imul(ye, xe) | 0, p = p + Math.imul(F, we) | 0, S = S + Math.imul(F, xe) | 0, w = w + Math.imul(ae, Pe) | 0, p = p + Math.imul(ae, Me) | 0, p = p + Math.imul(de, Pe) | 0, S = S + Math.imul(de, Me) | 0, w = w + Math.imul(ie, Oe) | 0, p = p + Math.imul(ie, Ee) | 0, p = p + Math.imul(he, Oe) | 0, S = S + Math.imul(he, Ee) | 0, w = w + Math.imul(I, Le) | 0, p = p + Math.imul(I, Se) | 0, p = p + Math.imul(L, Le) | 0, S = S + Math.imul(L, Se) | 0, w = w + Math.imul(te, Ce) | 0, p = p + Math.imul(te, Ae) | 0, p = p + Math.imul(pe, Ce) | 0, S = S + Math.imul(pe, Ae) | 0, w = w + Math.imul($, ke) | 0, p = p + Math.imul($, $e) | 0, p = p + Math.imul(A, ke) | 0, S = S + Math.imul(A, $e) | 0, w = w + Math.imul(H, Ne) | 0, p = p + Math.imul(H, Re) | 0, p = p + Math.imul(Z, Ne) | 0, S = S + Math.imul(Z, Re) | 0, w = w + Math.imul(B, qe) | 0, p = p + Math.imul(B, Be) | 0, p = p + Math.imul(R, qe) | 0, S = S + Math.imul(R, Be) | 0;
      var Nt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, w = Math.imul(fe, _e), p = Math.imul(fe, be), p = p + Math.imul(ce, _e) | 0, S = Math.imul(ce, be), w = w + Math.imul(T, we) | 0, p = p + Math.imul(T, xe) | 0, p = p + Math.imul(W, we) | 0, S = S + Math.imul(W, xe) | 0, w = w + Math.imul(ye, Pe) | 0, p = p + Math.imul(ye, Me) | 0, p = p + Math.imul(F, Pe) | 0, S = S + Math.imul(F, Me) | 0, w = w + Math.imul(ae, Oe) | 0, p = p + Math.imul(ae, Ee) | 0, p = p + Math.imul(de, Oe) | 0, S = S + Math.imul(de, Ee) | 0, w = w + Math.imul(ie, Le) | 0, p = p + Math.imul(ie, Se) | 0, p = p + Math.imul(he, Le) | 0, S = S + Math.imul(he, Se) | 0, w = w + Math.imul(I, Ce) | 0, p = p + Math.imul(I, Ae) | 0, p = p + Math.imul(L, Ce) | 0, S = S + Math.imul(L, Ae) | 0, w = w + Math.imul(te, ke) | 0, p = p + Math.imul(te, $e) | 0, p = p + Math.imul(pe, ke) | 0, S = S + Math.imul(pe, $e) | 0, w = w + Math.imul($, Ne) | 0, p = p + Math.imul($, Re) | 0, p = p + Math.imul(A, Ne) | 0, S = S + Math.imul(A, Re) | 0, w = w + Math.imul(H, qe) | 0, p = p + Math.imul(H, Be) | 0, p = p + Math.imul(Z, qe) | 0, S = S + Math.imul(Z, Be) | 0, w = w + Math.imul(B, Ue) | 0, p = p + Math.imul(B, De) | 0, p = p + Math.imul(R, Ue) | 0, S = S + Math.imul(R, De) | 0;
      var qt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, w = Math.imul(fe, we), p = Math.imul(fe, xe), p = p + Math.imul(ce, we) | 0, S = Math.imul(ce, xe), w = w + Math.imul(T, Pe) | 0, p = p + Math.imul(T, Me) | 0, p = p + Math.imul(W, Pe) | 0, S = S + Math.imul(W, Me) | 0, w = w + Math.imul(ye, Oe) | 0, p = p + Math.imul(ye, Ee) | 0, p = p + Math.imul(F, Oe) | 0, S = S + Math.imul(F, Ee) | 0, w = w + Math.imul(ae, Le) | 0, p = p + Math.imul(ae, Se) | 0, p = p + Math.imul(de, Le) | 0, S = S + Math.imul(de, Se) | 0, w = w + Math.imul(ie, Ce) | 0, p = p + Math.imul(ie, Ae) | 0, p = p + Math.imul(he, Ce) | 0, S = S + Math.imul(he, Ae) | 0, w = w + Math.imul(I, ke) | 0, p = p + Math.imul(I, $e) | 0, p = p + Math.imul(L, ke) | 0, S = S + Math.imul(L, $e) | 0, w = w + Math.imul(te, Ne) | 0, p = p + Math.imul(te, Re) | 0, p = p + Math.imul(pe, Ne) | 0, S = S + Math.imul(pe, Re) | 0, w = w + Math.imul($, qe) | 0, p = p + Math.imul($, Be) | 0, p = p + Math.imul(A, qe) | 0, S = S + Math.imul(A, Be) | 0, w = w + Math.imul(H, Ue) | 0, p = p + Math.imul(H, De) | 0, p = p + Math.imul(Z, Ue) | 0, S = S + Math.imul(Z, De) | 0;
      var Ft = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, w = Math.imul(fe, Pe), p = Math.imul(fe, Me), p = p + Math.imul(ce, Pe) | 0, S = Math.imul(ce, Me), w = w + Math.imul(T, Oe) | 0, p = p + Math.imul(T, Ee) | 0, p = p + Math.imul(W, Oe) | 0, S = S + Math.imul(W, Ee) | 0, w = w + Math.imul(ye, Le) | 0, p = p + Math.imul(ye, Se) | 0, p = p + Math.imul(F, Le) | 0, S = S + Math.imul(F, Se) | 0, w = w + Math.imul(ae, Ce) | 0, p = p + Math.imul(ae, Ae) | 0, p = p + Math.imul(de, Ce) | 0, S = S + Math.imul(de, Ae) | 0, w = w + Math.imul(ie, ke) | 0, p = p + Math.imul(ie, $e) | 0, p = p + Math.imul(he, ke) | 0, S = S + Math.imul(he, $e) | 0, w = w + Math.imul(I, Ne) | 0, p = p + Math.imul(I, Re) | 0, p = p + Math.imul(L, Ne) | 0, S = S + Math.imul(L, Re) | 0, w = w + Math.imul(te, qe) | 0, p = p + Math.imul(te, Be) | 0, p = p + Math.imul(pe, qe) | 0, S = S + Math.imul(pe, Be) | 0, w = w + Math.imul($, Ue) | 0, p = p + Math.imul($, De) | 0, p = p + Math.imul(A, Ue) | 0, S = S + Math.imul(A, De) | 0;
      var Ut = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, w = Math.imul(fe, Oe), p = Math.imul(fe, Ee), p = p + Math.imul(ce, Oe) | 0, S = Math.imul(ce, Ee), w = w + Math.imul(T, Le) | 0, p = p + Math.imul(T, Se) | 0, p = p + Math.imul(W, Le) | 0, S = S + Math.imul(W, Se) | 0, w = w + Math.imul(ye, Ce) | 0, p = p + Math.imul(ye, Ae) | 0, p = p + Math.imul(F, Ce) | 0, S = S + Math.imul(F, Ae) | 0, w = w + Math.imul(ae, ke) | 0, p = p + Math.imul(ae, $e) | 0, p = p + Math.imul(de, ke) | 0, S = S + Math.imul(de, $e) | 0, w = w + Math.imul(ie, Ne) | 0, p = p + Math.imul(ie, Re) | 0, p = p + Math.imul(he, Ne) | 0, S = S + Math.imul(he, Re) | 0, w = w + Math.imul(I, qe) | 0, p = p + Math.imul(I, Be) | 0, p = p + Math.imul(L, qe) | 0, S = S + Math.imul(L, Be) | 0, w = w + Math.imul(te, Ue) | 0, p = p + Math.imul(te, De) | 0, p = p + Math.imul(pe, Ue) | 0, S = S + Math.imul(pe, De) | 0;
      var Dt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, w = Math.imul(fe, Le), p = Math.imul(fe, Se), p = p + Math.imul(ce, Le) | 0, S = Math.imul(ce, Se), w = w + Math.imul(T, Ce) | 0, p = p + Math.imul(T, Ae) | 0, p = p + Math.imul(W, Ce) | 0, S = S + Math.imul(W, Ae) | 0, w = w + Math.imul(ye, ke) | 0, p = p + Math.imul(ye, $e) | 0, p = p + Math.imul(F, ke) | 0, S = S + Math.imul(F, $e) | 0, w = w + Math.imul(ae, Ne) | 0, p = p + Math.imul(ae, Re) | 0, p = p + Math.imul(de, Ne) | 0, S = S + Math.imul(de, Re) | 0, w = w + Math.imul(ie, qe) | 0, p = p + Math.imul(ie, Be) | 0, p = p + Math.imul(he, qe) | 0, S = S + Math.imul(he, Be) | 0, w = w + Math.imul(I, Ue) | 0, p = p + Math.imul(I, De) | 0, p = p + Math.imul(L, Ue) | 0, S = S + Math.imul(L, De) | 0;
      var jt = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, w = Math.imul(fe, Ce), p = Math.imul(fe, Ae), p = p + Math.imul(ce, Ce) | 0, S = Math.imul(ce, Ae), w = w + Math.imul(T, ke) | 0, p = p + Math.imul(T, $e) | 0, p = p + Math.imul(W, ke) | 0, S = S + Math.imul(W, $e) | 0, w = w + Math.imul(ye, Ne) | 0, p = p + Math.imul(ye, Re) | 0, p = p + Math.imul(F, Ne) | 0, S = S + Math.imul(F, Re) | 0, w = w + Math.imul(ae, qe) | 0, p = p + Math.imul(ae, Be) | 0, p = p + Math.imul(de, qe) | 0, S = S + Math.imul(de, Be) | 0, w = w + Math.imul(ie, Ue) | 0, p = p + Math.imul(ie, De) | 0, p = p + Math.imul(he, Ue) | 0, S = S + Math.imul(he, De) | 0;
      var fr = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, w = Math.imul(fe, ke), p = Math.imul(fe, $e), p = p + Math.imul(ce, ke) | 0, S = Math.imul(ce, $e), w = w + Math.imul(T, Ne) | 0, p = p + Math.imul(T, Re) | 0, p = p + Math.imul(W, Ne) | 0, S = S + Math.imul(W, Re) | 0, w = w + Math.imul(ye, qe) | 0, p = p + Math.imul(ye, Be) | 0, p = p + Math.imul(F, qe) | 0, S = S + Math.imul(F, Be) | 0, w = w + Math.imul(ae, Ue) | 0, p = p + Math.imul(ae, De) | 0, p = p + Math.imul(de, Ue) | 0, S = S + Math.imul(de, De) | 0;
      var sr = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, w = Math.imul(fe, Ne), p = Math.imul(fe, Re), p = p + Math.imul(ce, Ne) | 0, S = Math.imul(ce, Re), w = w + Math.imul(T, qe) | 0, p = p + Math.imul(T, Be) | 0, p = p + Math.imul(W, qe) | 0, S = S + Math.imul(W, Be) | 0, w = w + Math.imul(ye, Ue) | 0, p = p + Math.imul(ye, De) | 0, p = p + Math.imul(F, Ue) | 0, S = S + Math.imul(F, De) | 0;
      var en = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (en >>> 26) | 0, en &= 67108863, w = Math.imul(fe, qe), p = Math.imul(fe, Be), p = p + Math.imul(ce, qe) | 0, S = Math.imul(ce, Be), w = w + Math.imul(T, Ue) | 0, p = p + Math.imul(T, De) | 0, p = p + Math.imul(W, Ue) | 0, S = S + Math.imul(W, De) | 0;
      var wf = (d + w | 0) + ((p & 8191) << 13) | 0;
      d = (S + (p >>> 13) | 0) + (wf >>> 26) | 0, wf &= 67108863, w = Math.imul(fe, Ue), p = Math.imul(fe, De), p = p + Math.imul(ce, Ue) | 0, S = Math.imul(ce, De);
      var xf = (d + w | 0) + ((p & 8191) << 13) | 0;
      return d = (S + (p >>> 13) | 0) + (xf >>> 26) | 0, xf &= 67108863, h[0] = pt, h[1] = vt, h[2] = yt, h[3] = gt, h[4] = bt, h[5] = Lt, h[6] = Ct, h[7] = kt, h[8] = Nt, h[9] = qt, h[10] = Ft, h[11] = Ut, h[12] = Dt, h[13] = jt, h[14] = fr, h[15] = sr, h[16] = en, h[17] = wf, h[18] = xf, d !== 0 && (h[19] = d, y.length++), y;
    };
    Math.imul || (U = D);
    function K(u, o, c) {
      c.negative = o.negative ^ u.negative, c.length = u.length + o.length;
      for (var y = 0, x = 0, b = 0; b < c.length - 1; b++) {
        var h = x;
        x = 0;
        for (var d = y & 67108863, w = Math.min(b, o.length - 1), p = Math.max(0, b - u.length + 1); p <= w; p++) {
          var S = b - p, G = u.words[S] | 0, B = o.words[p] | 0, R = G * B, N = R & 67108863;
          h = h + (R / 67108864 | 0) | 0, N = N + d | 0, d = N & 67108863, h = h + (N >>> 26) | 0, x += h >>> 26, h &= 67108863;
        }
        c.words[b] = d, y = h, h = x;
      }
      return y !== 0 ? c.words[b] = y : c.length--, c._strip();
    }
    function J(u, o, c) {
      return K(u, o, c);
    }
    i.prototype.mulTo = function(o, c) {
      var y, x = this.length + o.length;
      return this.length === 10 && o.length === 10 ? y = U(this, o, c) : x < 63 ? y = D(this, o, c) : x < 1024 ? y = K(this, o, c) : y = J(this, o, c), y;
    }, i.prototype.mul = function(o) {
      var c = new i(null);
      return c.words = new Array(this.length + o.length), this.mulTo(o, c);
    }, i.prototype.mulf = function(o) {
      var c = new i(null);
      return c.words = new Array(this.length + o.length), J(this, o, c);
    }, i.prototype.imul = function(o) {
      return this.clone().mulTo(o, this);
    }, i.prototype.imuln = function(o) {
      var c = o < 0;
      c && (o = -o), n(typeof o == "number"), n(o < 67108864);
      for (var y = 0, x = 0; x < this.length; x++) {
        var b = (this.words[x] | 0) * o, h = (b & 67108863) + (y & 67108863);
        y >>= 26, y += b / 67108864 | 0, y += h >>> 26, this.words[x] = h & 67108863;
      }
      return y !== 0 && (this.words[x] = y, this.length++), c ? this.ineg() : this;
    }, i.prototype.muln = function(o) {
      return this.clone().imuln(o);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(o) {
      var c = q(o);
      if (c.length === 0)
        return new i(1);
      for (var y = this, x = 0; x < c.length && c[x] === 0; x++, y = y.sqr())
        ;
      if (++x < c.length)
        for (var b = y.sqr(); x < c.length; x++, b = b.sqr())
          c[x] !== 0 && (y = y.mul(b));
      return y;
    }, i.prototype.iushln = function(o) {
      n(typeof o == "number" && o >= 0);
      var c = o % 26, y = (o - c) / 26, x = 67108863 >>> 26 - c << 26 - c, b;
      if (c !== 0) {
        var h = 0;
        for (b = 0; b < this.length; b++) {
          var d = this.words[b] & x, w = (this.words[b] | 0) - d << c;
          this.words[b] = w | h, h = d >>> 26 - c;
        }
        h && (this.words[b] = h, this.length++);
      }
      if (y !== 0) {
        for (b = this.length - 1; b >= 0; b--)
          this.words[b + y] = this.words[b];
        for (b = 0; b < y; b++)
          this.words[b] = 0;
        this.length += y;
      }
      return this._strip();
    }, i.prototype.ishln = function(o) {
      return n(this.negative === 0), this.iushln(o);
    }, i.prototype.iushrn = function(o, c, y) {
      n(typeof o == "number" && o >= 0);
      var x;
      c ? x = (c - c % 26) / 26 : x = 0;
      var b = o % 26, h = Math.min((o - b) / 26, this.length), d = 67108863 ^ 67108863 >>> b << b, w = y;
      if (x -= h, x = Math.max(0, x), w) {
        for (var p = 0; p < h; p++)
          w.words[p] = this.words[p];
        w.length = h;
      }
      if (h !== 0)
        if (this.length > h)
          for (this.length -= h, p = 0; p < this.length; p++)
            this.words[p] = this.words[p + h];
        else
          this.words[0] = 0, this.length = 1;
      var S = 0;
      for (p = this.length - 1; p >= 0 && (S !== 0 || p >= x); p--) {
        var G = this.words[p] | 0;
        this.words[p] = S << 26 - b | G >>> b, S = G & d;
      }
      return w && S !== 0 && (w.words[w.length++] = S), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, i.prototype.ishrn = function(o, c, y) {
      return n(this.negative === 0), this.iushrn(o, c, y);
    }, i.prototype.shln = function(o) {
      return this.clone().ishln(o);
    }, i.prototype.ushln = function(o) {
      return this.clone().iushln(o);
    }, i.prototype.shrn = function(o) {
      return this.clone().ishrn(o);
    }, i.prototype.ushrn = function(o) {
      return this.clone().iushrn(o);
    }, i.prototype.testn = function(o) {
      n(typeof o == "number" && o >= 0);
      var c = o % 26, y = (o - c) / 26, x = 1 << c;
      if (this.length <= y)
        return !1;
      var b = this.words[y];
      return !!(b & x);
    }, i.prototype.imaskn = function(o) {
      n(typeof o == "number" && o >= 0);
      var c = o % 26, y = (o - c) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y)
        return this;
      if (c !== 0 && y++, this.length = Math.min(y, this.length), c !== 0) {
        var x = 67108863 ^ 67108863 >>> c << c;
        this.words[this.length - 1] &= x;
      }
      return this._strip();
    }, i.prototype.maskn = function(o) {
      return this.clone().imaskn(o);
    }, i.prototype.iaddn = function(o) {
      return n(typeof o == "number"), n(o < 67108864), o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= o ? (this.words[0] = o - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(o), this.negative = 1, this) : this._iaddn(o);
    }, i.prototype._iaddn = function(o) {
      this.words[0] += o;
      for (var c = 0; c < this.length && this.words[c] >= 67108864; c++)
        this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
      return this.length = Math.max(this.length, c + 1), this;
    }, i.prototype.isubn = function(o) {
      if (n(typeof o == "number"), n(o < 67108864), o < 0)
        return this.iaddn(-o);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(o), this.negative = 1, this;
      if (this.words[0] -= o, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var c = 0; c < this.length && this.words[c] < 0; c++)
          this.words[c] += 67108864, this.words[c + 1] -= 1;
      return this._strip();
    }, i.prototype.addn = function(o) {
      return this.clone().iaddn(o);
    }, i.prototype.subn = function(o) {
      return this.clone().isubn(o);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(o, c, y) {
      var x = o.length + y, b;
      this._expand(x);
      var h, d = 0;
      for (b = 0; b < o.length; b++) {
        h = (this.words[b + y] | 0) + d;
        var w = (o.words[b] | 0) * c;
        h -= w & 67108863, d = (h >> 26) - (w / 67108864 | 0), this.words[b + y] = h & 67108863;
      }
      for (; b < this.length - y; b++)
        h = (this.words[b + y] | 0) + d, d = h >> 26, this.words[b + y] = h & 67108863;
      if (d === 0)
        return this._strip();
      for (n(d === -1), d = 0, b = 0; b < this.length; b++)
        h = -(this.words[b] | 0) + d, d = h >> 26, this.words[b] = h & 67108863;
      return this.negative = 1, this._strip();
    }, i.prototype._wordDiv = function(o, c) {
      var y = this.length - o.length, x = this.clone(), b = o, h = b.words[b.length - 1] | 0, d = this._countBits(h);
      y = 26 - d, y !== 0 && (b = b.ushln(y), x.iushln(y), h = b.words[b.length - 1] | 0);
      var w = x.length - b.length, p;
      if (c !== "mod") {
        p = new i(null), p.length = w + 1, p.words = new Array(p.length);
        for (var S = 0; S < p.length; S++)
          p.words[S] = 0;
      }
      var G = x.clone()._ishlnsubmul(b, 1, w);
      G.negative === 0 && (x = G, p && (p.words[w] = 1));
      for (var B = w - 1; B >= 0; B--) {
        var R = (x.words[b.length + B] | 0) * 67108864 + (x.words[b.length + B - 1] | 0);
        for (R = Math.min(R / h | 0, 67108863), x._ishlnsubmul(b, R, B); x.negative !== 0; )
          R--, x.negative = 0, x._ishlnsubmul(b, 1, B), x.isZero() || (x.negative ^= 1);
        p && (p.words[B] = R);
      }
      return p && p._strip(), x._strip(), c !== "div" && y !== 0 && x.iushrn(y), {
        div: p || null,
        mod: x
      };
    }, i.prototype.divmod = function(o, c, y) {
      if (n(!o.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var x, b, h;
      return this.negative !== 0 && o.negative === 0 ? (h = this.neg().divmod(o, c), c !== "mod" && (x = h.div.neg()), c !== "div" && (b = h.mod.neg(), y && b.negative !== 0 && b.iadd(o)), {
        div: x,
        mod: b
      }) : this.negative === 0 && o.negative !== 0 ? (h = this.divmod(o.neg(), c), c !== "mod" && (x = h.div.neg()), {
        div: x,
        mod: h.mod
      }) : (this.negative & o.negative) !== 0 ? (h = this.neg().divmod(o.neg(), c), c !== "div" && (b = h.mod.neg(), y && b.negative !== 0 && b.isub(o)), {
        div: h.div,
        mod: b
      }) : o.length > this.length || this.cmp(o) < 0 ? {
        div: new i(0),
        mod: this
      } : o.length === 1 ? c === "div" ? {
        div: this.divn(o.words[0]),
        mod: null
      } : c === "mod" ? {
        div: null,
        mod: new i(this.modrn(o.words[0]))
      } : {
        div: this.divn(o.words[0]),
        mod: new i(this.modrn(o.words[0]))
      } : this._wordDiv(o, c);
    }, i.prototype.div = function(o) {
      return this.divmod(o, "div", !1).div;
    }, i.prototype.mod = function(o) {
      return this.divmod(o, "mod", !1).mod;
    }, i.prototype.umod = function(o) {
      return this.divmod(o, "mod", !0).mod;
    }, i.prototype.divRound = function(o) {
      var c = this.divmod(o);
      if (c.mod.isZero())
        return c.div;
      var y = c.div.negative !== 0 ? c.mod.isub(o) : c.mod, x = o.ushrn(1), b = o.andln(1), h = y.cmp(x);
      return h < 0 || b === 1 && h === 0 ? c.div : c.div.negative !== 0 ? c.div.isubn(1) : c.div.iaddn(1);
    }, i.prototype.modrn = function(o) {
      var c = o < 0;
      c && (o = -o), n(o <= 67108863);
      for (var y = (1 << 26) % o, x = 0, b = this.length - 1; b >= 0; b--)
        x = (y * x + (this.words[b] | 0)) % o;
      return c ? -x : x;
    }, i.prototype.modn = function(o) {
      return this.modrn(o);
    }, i.prototype.idivn = function(o) {
      var c = o < 0;
      c && (o = -o), n(o <= 67108863);
      for (var y = 0, x = this.length - 1; x >= 0; x--) {
        var b = (this.words[x] | 0) + y * 67108864;
        this.words[x] = b / o | 0, y = b % o;
      }
      return this._strip(), c ? this.ineg() : this;
    }, i.prototype.divn = function(o) {
      return this.clone().idivn(o);
    }, i.prototype.egcd = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var c = this, y = o.clone();
      c.negative !== 0 ? c = c.umod(o) : c = c.clone();
      for (var x = new i(1), b = new i(0), h = new i(0), d = new i(1), w = 0; c.isEven() && y.isEven(); )
        c.iushrn(1), y.iushrn(1), ++w;
      for (var p = y.clone(), S = c.clone(); !c.isZero(); ) {
        for (var G = 0, B = 1; (c.words[0] & B) === 0 && G < 26; ++G, B <<= 1)
          ;
        if (G > 0)
          for (c.iushrn(G); G-- > 0; )
            (x.isOdd() || b.isOdd()) && (x.iadd(p), b.isub(S)), x.iushrn(1), b.iushrn(1);
        for (var R = 0, N = 1; (y.words[0] & N) === 0 && R < 26; ++R, N <<= 1)
          ;
        if (R > 0)
          for (y.iushrn(R); R-- > 0; )
            (h.isOdd() || d.isOdd()) && (h.iadd(p), d.isub(S)), h.iushrn(1), d.iushrn(1);
        c.cmp(y) >= 0 ? (c.isub(y), x.isub(h), b.isub(d)) : (y.isub(c), h.isub(x), d.isub(b));
      }
      return {
        a: h,
        b: d,
        gcd: y.iushln(w)
      };
    }, i.prototype._invmp = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var c = this, y = o.clone();
      c.negative !== 0 ? c = c.umod(o) : c = c.clone();
      for (var x = new i(1), b = new i(0), h = y.clone(); c.cmpn(1) > 0 && y.cmpn(1) > 0; ) {
        for (var d = 0, w = 1; (c.words[0] & w) === 0 && d < 26; ++d, w <<= 1)
          ;
        if (d > 0)
          for (c.iushrn(d); d-- > 0; )
            x.isOdd() && x.iadd(h), x.iushrn(1);
        for (var p = 0, S = 1; (y.words[0] & S) === 0 && p < 26; ++p, S <<= 1)
          ;
        if (p > 0)
          for (y.iushrn(p); p-- > 0; )
            b.isOdd() && b.iadd(h), b.iushrn(1);
        c.cmp(y) >= 0 ? (c.isub(y), x.isub(b)) : (y.isub(c), b.isub(x));
      }
      var G;
      return c.cmpn(1) === 0 ? G = x : G = b, G.cmpn(0) < 0 && G.iadd(o), G;
    }, i.prototype.gcd = function(o) {
      if (this.isZero())
        return o.abs();
      if (o.isZero())
        return this.abs();
      var c = this.clone(), y = o.clone();
      c.negative = 0, y.negative = 0;
      for (var x = 0; c.isEven() && y.isEven(); x++)
        c.iushrn(1), y.iushrn(1);
      do {
        for (; c.isEven(); )
          c.iushrn(1);
        for (; y.isEven(); )
          y.iushrn(1);
        var b = c.cmp(y);
        if (b < 0) {
          var h = c;
          c = y, y = h;
        } else if (b === 0 || y.cmpn(1) === 0)
          break;
        c.isub(y);
      } while (!0);
      return y.iushln(x);
    }, i.prototype.invm = function(o) {
      return this.egcd(o).a.umod(o);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(o) {
      return this.words[0] & o;
    }, i.prototype.bincn = function(o) {
      n(typeof o == "number");
      var c = o % 26, y = (o - c) / 26, x = 1 << c;
      if (this.length <= y)
        return this._expand(y + 1), this.words[y] |= x, this;
      for (var b = x, h = y; b !== 0 && h < this.length; h++) {
        var d = this.words[h] | 0;
        d += b, b = d >>> 26, d &= 67108863, this.words[h] = d;
      }
      return b !== 0 && (this.words[h] = b, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(o) {
      var c = o < 0;
      if (this.negative !== 0 && !c)
        return -1;
      if (this.negative === 0 && c)
        return 1;
      this._strip();
      var y;
      if (this.length > 1)
        y = 1;
      else {
        c && (o = -o), n(o <= 67108863, "Number is too big");
        var x = this.words[0] | 0;
        y = x === o ? 0 : x < o ? -1 : 1;
      }
      return this.negative !== 0 ? -y | 0 : y;
    }, i.prototype.cmp = function(o) {
      if (this.negative !== 0 && o.negative === 0)
        return -1;
      if (this.negative === 0 && o.negative !== 0)
        return 1;
      var c = this.ucmp(o);
      return this.negative !== 0 ? -c | 0 : c;
    }, i.prototype.ucmp = function(o) {
      if (this.length > o.length)
        return 1;
      if (this.length < o.length)
        return -1;
      for (var c = 0, y = this.length - 1; y >= 0; y--) {
        var x = this.words[y] | 0, b = o.words[y] | 0;
        if (x !== b) {
          x < b ? c = -1 : x > b && (c = 1);
          break;
        }
      }
      return c;
    }, i.prototype.gtn = function(o) {
      return this.cmpn(o) === 1;
    }, i.prototype.gt = function(o) {
      return this.cmp(o) === 1;
    }, i.prototype.gten = function(o) {
      return this.cmpn(o) >= 0;
    }, i.prototype.gte = function(o) {
      return this.cmp(o) >= 0;
    }, i.prototype.ltn = function(o) {
      return this.cmpn(o) === -1;
    }, i.prototype.lt = function(o) {
      return this.cmp(o) === -1;
    }, i.prototype.lten = function(o) {
      return this.cmpn(o) <= 0;
    }, i.prototype.lte = function(o) {
      return this.cmp(o) <= 0;
    }, i.prototype.eqn = function(o) {
      return this.cmpn(o) === 0;
    }, i.prototype.eq = function(o) {
      return this.cmp(o) === 0;
    }, i.red = function(o) {
      return new g(o);
    }, i.prototype.toRed = function(o) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), o.convertTo(this)._forceRed(o);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(o) {
      return this.red = o, this;
    }, i.prototype.forceRed = function(o) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(o);
    }, i.prototype.redAdd = function(o) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, o);
    }, i.prototype.redIAdd = function(o) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, o);
    }, i.prototype.redSub = function(o) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, o);
    }, i.prototype.redISub = function(o) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, o);
    }, i.prototype.redShl = function(o) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, o);
    }, i.prototype.redMul = function(o) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, o), this.red.mul(this, o);
    }, i.prototype.redIMul = function(o) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, o), this.red.imul(this, o);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(o) {
      return n(this.red && !o.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, o);
    };
    var re = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function ue(u, o) {
      this.name = u, this.p = new i(o, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    ue.prototype._tmp = function() {
      var o = new i(null);
      return o.words = new Array(Math.ceil(this.n / 13)), o;
    }, ue.prototype.ireduce = function(o) {
      var c = o, y;
      do
        this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), y = c.bitLength();
      while (y > this.n);
      var x = y < this.n ? -1 : c.ucmp(this.p);
      return x === 0 ? (c.words[0] = 0, c.length = 1) : x > 0 ? c.isub(this.p) : c.strip !== void 0 ? c.strip() : c._strip(), c;
    }, ue.prototype.split = function(o, c) {
      o.iushrn(this.n, 0, c);
    }, ue.prototype.imulK = function(o) {
      return o.imul(this.k);
    };
    function ve() {
      ue.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(ve, ue), ve.prototype.split = function(o, c) {
      for (var y = 4194303, x = Math.min(o.length, 9), b = 0; b < x; b++)
        c.words[b] = o.words[b];
      if (c.length = x, o.length <= 9) {
        o.words[0] = 0, o.length = 1;
        return;
      }
      var h = o.words[9];
      for (c.words[c.length++] = h & y, b = 10; b < o.length; b++) {
        var d = o.words[b] | 0;
        o.words[b - 10] = (d & y) << 4 | h >>> 22, h = d;
      }
      h >>>= 22, o.words[b - 10] = h, h === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9;
    }, ve.prototype.imulK = function(o) {
      o.words[o.length] = 0, o.words[o.length + 1] = 0, o.length += 2;
      for (var c = 0, y = 0; y < o.length; y++) {
        var x = o.words[y] | 0;
        c += x * 977, o.words[y] = c & 67108863, c = x * 64 + (c / 67108864 | 0);
      }
      return o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o;
    };
    function se() {
      ue.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(se, ue);
    function le() {
      ue.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(le, ue);
    function V() {
      ue.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(V, ue), V.prototype.imulK = function(o) {
      for (var c = 0, y = 0; y < o.length; y++) {
        var x = (o.words[y] | 0) * 19 + c, b = x & 67108863;
        x >>>= 26, o.words[y] = b, c = x;
      }
      return c !== 0 && (o.words[o.length++] = c), o;
    }, i._prime = function(o) {
      if (re[o])
        return re[o];
      var c;
      if (o === "k256")
        c = new ve();
      else if (o === "p224")
        c = new se();
      else if (o === "p192")
        c = new le();
      else if (o === "p25519")
        c = new V();
      else
        throw new Error("Unknown prime " + o);
      return re[o] = c, c;
    };
    function g(u) {
      if (typeof u == "string") {
        var o = i._prime(u);
        this.m = o.p, this.prime = o;
      } else
        n(u.gtn(1), "modulus must be greater than 1"), this.m = u, this.prime = null;
    }
    g.prototype._verify1 = function(o) {
      n(o.negative === 0, "red works only with positives"), n(o.red, "red works only with red numbers");
    }, g.prototype._verify2 = function(o, c) {
      n((o.negative | c.negative) === 0, "red works only with positives"), n(
        o.red && o.red === c.red,
        "red works only with red numbers"
      );
    }, g.prototype.imod = function(o) {
      return this.prime ? this.prime.ireduce(o)._forceRed(this) : (_(o, o.umod(this.m)._forceRed(this)), o);
    }, g.prototype.neg = function(o) {
      return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
    }, g.prototype.add = function(o, c) {
      this._verify2(o, c);
      var y = o.add(c);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this);
    }, g.prototype.iadd = function(o, c) {
      this._verify2(o, c);
      var y = o.iadd(c);
      return y.cmp(this.m) >= 0 && y.isub(this.m), y;
    }, g.prototype.sub = function(o, c) {
      this._verify2(o, c);
      var y = o.sub(c);
      return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this);
    }, g.prototype.isub = function(o, c) {
      this._verify2(o, c);
      var y = o.isub(c);
      return y.cmpn(0) < 0 && y.iadd(this.m), y;
    }, g.prototype.shl = function(o, c) {
      return this._verify1(o), this.imod(o.ushln(c));
    }, g.prototype.imul = function(o, c) {
      return this._verify2(o, c), this.imod(o.imul(c));
    }, g.prototype.mul = function(o, c) {
      return this._verify2(o, c), this.imod(o.mul(c));
    }, g.prototype.isqr = function(o) {
      return this.imul(o, o.clone());
    }, g.prototype.sqr = function(o) {
      return this.mul(o, o);
    }, g.prototype.sqrt = function(o) {
      if (o.isZero())
        return o.clone();
      var c = this.m.andln(3);
      if (n(c % 2 === 1), c === 3) {
        var y = this.m.add(new i(1)).iushrn(2);
        return this.pow(o, y);
      }
      for (var x = this.m.subn(1), b = 0; !x.isZero() && x.andln(1) === 0; )
        b++, x.iushrn(1);
      n(!x.isZero());
      var h = new i(1).toRed(this), d = h.redNeg(), w = this.m.subn(1).iushrn(1), p = this.m.bitLength();
      for (p = new i(2 * p * p).toRed(this); this.pow(p, w).cmp(d) !== 0; )
        p.redIAdd(d);
      for (var S = this.pow(p, x), G = this.pow(o, x.addn(1).iushrn(1)), B = this.pow(o, x), R = b; B.cmp(h) !== 0; ) {
        for (var N = B, H = 0; N.cmp(h) !== 0; H++)
          N = N.redSqr();
        n(H < R);
        var Z = this.pow(S, new i(1).iushln(R - H - 1));
        G = G.redMul(Z), S = Z.redSqr(), B = B.redMul(S), R = H;
      }
      return G;
    }, g.prototype.invm = function(o) {
      var c = o._invmp(this.m);
      return c.negative !== 0 ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c);
    }, g.prototype.pow = function(o, c) {
      if (c.isZero())
        return new i(1).toRed(this);
      if (c.cmpn(1) === 0)
        return o.clone();
      var y = 4, x = new Array(1 << y);
      x[0] = new i(1).toRed(this), x[1] = o;
      for (var b = 2; b < x.length; b++)
        x[b] = this.mul(x[b - 1], o);
      var h = x[0], d = 0, w = 0, p = c.bitLength() % 26;
      for (p === 0 && (p = 26), b = c.length - 1; b >= 0; b--) {
        for (var S = c.words[b], G = p - 1; G >= 0; G--) {
          var B = S >> G & 1;
          if (h !== x[0] && (h = this.sqr(h)), B === 0 && d === 0) {
            w = 0;
            continue;
          }
          d <<= 1, d |= B, w++, !(w !== y && (b !== 0 || G !== 0)) && (h = this.mul(h, x[d]), w = 0, d = 0);
        }
        p = 26;
      }
      return h;
    }, g.prototype.convertTo = function(o) {
      var c = o.umod(this.m);
      return c === o ? c.clone() : c;
    }, g.prototype.convertFrom = function(o) {
      var c = o.clone();
      return c.red = null, c;
    }, i.mont = function(o) {
      return new l(o);
    };
    function l(u) {
      g.call(this, u), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(l, g), l.prototype.convertTo = function(o) {
      return this.imod(o.ushln(this.shift));
    }, l.prototype.convertFrom = function(o) {
      var c = this.imod(o.mul(this.rinv));
      return c.red = null, c;
    }, l.prototype.imul = function(o, c) {
      if (o.isZero() || c.isZero())
        return o.words[0] = 0, o.length = 1, o;
      var y = o.imul(c), x = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = y.isub(x).iushrn(this.shift), h = b;
      return b.cmp(this.m) >= 0 ? h = b.isub(this.m) : b.cmpn(0) < 0 && (h = b.iadd(this.m)), h._forceRed(this);
    }, l.prototype.mul = function(o, c) {
      if (o.isZero() || c.isZero())
        return new i(0)._forceRed(this);
      var y = o.mul(c), x = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = y.isub(x).iushrn(this.shift), h = b;
      return b.cmp(this.m) >= 0 ? h = b.isub(this.m) : b.cmpn(0) < 0 && (h = b.iadd(this.m)), h._forceRed(this);
    }, l.prototype.invm = function(o) {
      var c = this.imod(o._invmp(this.m).mul(this.r2));
      return c._forceRed(this);
    };
  })(e, Ie);
})(c0);
const ax = c0.exports, ox = /* @__PURE__ */ ee({
  __proto__: null,
  default: ax
}, [c0.exports]), fx = /* @__PURE__ */ Q(ox);
var sx = Ie && Ie.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Pr, "__esModule", { value: !0 });
var qv = Pr.getLength = Dv = Pr.decode = Uv = Pr.encode = void 0, ux = sx(fx);
function Fv(e) {
  if (Array.isArray(e)) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push(Fv(e[r]));
    var n = Buffer.concat(t);
    return Buffer.concat([th(n.length, 192), n]);
  } else {
    var a = l0(e);
    return a.length === 1 && a[0] < 128 ? a : Buffer.concat([th(a.length, 128), a]);
  }
}
var Uv = Pr.encode = Fv;
function su(e, t) {
  if (e[0] === "0" && e[1] === "0")
    throw new Error("invalid RLP: extra zeros");
  return parseInt(e, t);
}
function th(e, t) {
  if (e < 56)
    return Buffer.from([e + t]);
  var r = cu(e), n = r.length / 2, a = cu(t + 55 + n);
  return Buffer.from(a + r, "hex");
}
function cx(e, t) {
  if (t === void 0 && (t = !1), !e || e.length === 0)
    return Buffer.from([]);
  var r = l0(e), n = uu(r);
  if (t)
    return n;
  if (n.remainder.length !== 0)
    throw new Error("invalid remainder");
  return n.data;
}
var Dv = Pr.decode = cx;
function lx(e) {
  if (!e || e.length === 0)
    return Buffer.from([]);
  var t = l0(e), r = t[0];
  if (r <= 127)
    return t.length;
  if (r <= 183)
    return r - 127;
  if (r <= 191)
    return r - 182;
  if (r <= 247)
    return r - 191;
  var n = r - 246, a = su(t.slice(1, n).toString("hex"), 16);
  return n + a;
}
qv = Pr.getLength = lx;
function uu(e) {
  var t, r, n, a, i, s = [], f = e[0];
  if (f <= 127)
    return {
      data: e.slice(0, 1),
      remainder: e.slice(1)
    };
  if (f <= 183) {
    if (t = f - 127, f === 128 ? n = Buffer.from([]) : n = e.slice(1, t), t === 2 && n[0] < 128)
      throw new Error("invalid rlp encoding: byte must be less 0x80");
    return {
      data: n,
      remainder: e.slice(t)
    };
  } else if (f <= 191) {
    if (r = f - 182, e.length - 1 < r)
      throw new Error("invalid RLP: not enough bytes for string length");
    if (t = su(e.slice(1, r).toString("hex"), 16), t <= 55)
      throw new Error("invalid RLP: expected string length to be greater than 55");
    if (n = e.slice(r, t + r), n.length < t)
      throw new Error("invalid RLP: not enough bytes for string");
    return {
      data: n,
      remainder: e.slice(t + r)
    };
  } else if (f <= 247) {
    for (t = f - 191, a = e.slice(1, t); a.length; )
      i = uu(a), s.push(i.data), a = i.remainder;
    return {
      data: s,
      remainder: e.slice(t)
    };
  } else {
    r = f - 246, t = su(e.slice(1, r).toString("hex"), 16);
    var v = r + t;
    if (v > e.length)
      throw new Error("invalid rlp: total length is larger than the data");
    if (a = e.slice(r, v), a.length === 0)
      throw new Error("invalid rlp, List has a invalid length");
    for (; a.length; )
      i = uu(a), s.push(i.data), a = i.remainder;
    return {
      data: s,
      remainder: e.slice(v)
    };
  }
}
function jv(e) {
  return e.slice(0, 2) === "0x";
}
function hx(e) {
  return typeof e != "string" ? e : jv(e) ? e.slice(2) : e;
}
function cu(e) {
  if (e < 0)
    throw new Error("Invalid integer as argument, must be unsigned!");
  var t = e.toString(16);
  return t.length % 2 ? "0" + t : t;
}
function dx(e) {
  return e.length % 2 ? "0" + e : e;
}
function px(e) {
  var t = cu(e);
  return Buffer.from(t, "hex");
}
function l0(e) {
  if (!Buffer.isBuffer(e)) {
    if (typeof e == "string")
      return jv(e) ? Buffer.from(dx(hx(e)), "hex") : Buffer.from(e);
    if (typeof e == "number" || typeof e == "bigint")
      return e ? px(e) : Buffer.from([]);
    if (e == null)
      return Buffer.from([]);
    if (e instanceof Uint8Array)
      return Buffer.from(e);
    if (ux.default.isBN(e))
      return Buffer.from(e.toArray());
    throw new Error("invalid type");
  }
  return e;
}
const vx = /* @__PURE__ */ ee({
  __proto__: null,
  get getLength() {
    return qv;
  },
  get decode() {
    return Dv;
  },
  get encode() {
    return Uv;
  },
  default: Pr
}, [Pr]), rf = /* @__PURE__ */ Q(vx);
var eo = { exports: {} }, rh = Jr.EventEmitter;
const yx = /* @__PURE__ */ ee({
  __proto__: null,
  default: rh
}, [rh]), Hv = /* @__PURE__ */ Q(yx);
var ys, nh;
function gx() {
  if (nh)
    return ys;
  nh = 1;
  function e(P, C) {
    var M = Object.keys(P);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(P);
      C && (k = k.filter(function(q) {
        return Object.getOwnPropertyDescriptor(P, q).enumerable;
      })), M.push.apply(M, k);
    }
    return M;
  }
  function t(P) {
    for (var C = 1; C < arguments.length; C++) {
      var M = arguments[C] != null ? arguments[C] : {};
      C % 2 ? e(Object(M), !0).forEach(function(k) {
        r(P, k, M[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(M)) : e(Object(M)).forEach(function(k) {
        Object.defineProperty(P, k, Object.getOwnPropertyDescriptor(M, k));
      });
    }
    return P;
  }
  function r(P, C, M) {
    return C in P ? Object.defineProperty(P, C, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : P[C] = M, P;
  }
  function n(P, C) {
    if (!(P instanceof C))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(P, C) {
    for (var M = 0; M < C.length; M++) {
      var k = C[M];
      k.enumerable = k.enumerable || !1, k.configurable = !0, "value" in k && (k.writable = !0), Object.defineProperty(P, k.key, k);
    }
  }
  function i(P, C, M) {
    return C && a(P.prototype, C), M && a(P, M), P;
  }
  var s = Yr, f = s.Buffer, v = er, m = v.inspect, _ = m && m.custom || "inspect";
  function O(P, C, M) {
    f.prototype.copy.call(P, C, M);
  }
  return ys = /* @__PURE__ */ function() {
    function P() {
      n(this, P), this.head = null, this.tail = null, this.length = 0;
    }
    return i(P, [{
      key: "push",
      value: function(M) {
        var k = {
          data: M,
          next: null
        };
        this.length > 0 ? this.tail.next = k : this.head = k, this.tail = k, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(M) {
        var k = {
          data: M,
          next: this.head
        };
        this.length === 0 && (this.tail = k), this.head = k, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var M = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, M;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(M) {
        if (this.length === 0)
          return "";
        for (var k = this.head, q = "" + k.data; k = k.next; )
          q += M + k.data;
        return q;
      }
    }, {
      key: "concat",
      value: function(M) {
        if (this.length === 0)
          return f.alloc(0);
        for (var k = f.allocUnsafe(M >>> 0), q = this.head, D = 0; q; )
          O(q.data, k, D), D += q.data.length, q = q.next;
        return k;
      }
    }, {
      key: "consume",
      value: function(M, k) {
        var q;
        return M < this.head.data.length ? (q = this.head.data.slice(0, M), this.head.data = this.head.data.slice(M)) : M === this.head.data.length ? q = this.shift() : q = k ? this._getString(M) : this._getBuffer(M), q;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
    }, {
      key: "_getString",
      value: function(M) {
        var k = this.head, q = 1, D = k.data;
        for (M -= D.length; k = k.next; ) {
          var U = k.data, K = M > U.length ? U.length : M;
          if (K === U.length ? D += U : D += U.slice(0, M), M -= K, M === 0) {
            K === U.length ? (++q, k.next ? this.head = k.next : this.head = this.tail = null) : (this.head = k, k.data = U.slice(K));
            break;
          }
          ++q;
        }
        return this.length -= q, D;
      }
    }, {
      key: "_getBuffer",
      value: function(M) {
        var k = f.allocUnsafe(M), q = this.head, D = 1;
        for (q.data.copy(k), M -= q.data.length; q = q.next; ) {
          var U = q.data, K = M > U.length ? U.length : M;
          if (U.copy(k, k.length - M, 0, K), M -= K, M === 0) {
            K === U.length ? (++D, q.next ? this.head = q.next : this.head = this.tail = null) : (this.head = q, q.data = U.slice(K));
            break;
          }
          ++D;
        }
        return this.length -= D, k;
      }
    }, {
      key: _,
      value: function(M, k) {
        return m(this, t({}, k, {
          depth: 0,
          customInspect: !1
        }));
      }
    }]), P;
  }(), ys;
}
function bx(e, t) {
  var r = this, n = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
  return n || a ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(lu, this, e)) : process.nextTick(lu, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(i) {
    !t && i ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(Na, r) : (r._writableState.errorEmitted = !0, process.nextTick(ih, r, i)) : process.nextTick(ih, r, i) : t ? (process.nextTick(Na, r), t(i)) : process.nextTick(Na, r);
  }), this);
}
function ih(e, t) {
  lu(e, t), Na(e);
}
function Na(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function _x() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function lu(e, t) {
  e.emit("error", t);
}
function mx(e, t) {
  var r = e._readableState, n = e._writableState;
  r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var ah = {
  destroy: bx,
  undestroy: _x,
  errorOrDestroy: mx
};
const wx = /* @__PURE__ */ ee({
  __proto__: null,
  default: ah
}, [ah]), zv = /* @__PURE__ */ Q(wx);
var hu = {};
function xx(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var Kv = {};
function ar(e, t, r) {
  r || (r = Error);
  function n(i, s, f) {
    return typeof t == "string" ? t : t(i, s, f);
  }
  var a = /* @__PURE__ */ function(i) {
    xx(s, i);
    function s(f, v, m) {
      return i.call(this, n(f, v, m)) || this;
    }
    return s;
  }(r);
  a.prototype.name = r.name, a.prototype.code = e, Kv[e] = a;
}
function oh(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return e = e.map(function(n) {
      return String(n);
    }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function Mx(e, t, r) {
  return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
}
function Ex(e, t, r) {
  return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
}
function Sx(e, t, r) {
  return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
}
ar("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
ar("ERR_INVALID_ARG_TYPE", function(e, t, r) {
  var n;
  typeof t == "string" && Mx(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
  var a;
  if (Ex(e, " argument"))
    a = "The ".concat(e, " ").concat(n, " ").concat(oh(t, "type"));
  else {
    var i = Sx(e, ".") ? "property" : "argument";
    a = 'The "'.concat(e, '" ').concat(i, " ").concat(n, " ").concat(oh(t, "type"));
  }
  return a += ". Received type ".concat(typeof r), a;
}, TypeError);
ar("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
ar("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
ar("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
ar("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
ar("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
ar("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
ar("ERR_STREAM_WRITE_AFTER_END", "write after end");
ar("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
ar("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
ar("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
var Ax = hu.codes = Kv;
const $x = /* @__PURE__ */ ee({
  __proto__: null,
  codes: Ax,
  default: hu
}, [hu]), vi = /* @__PURE__ */ Q($x);
var Rx = vi.codes.ERR_INVALID_OPT_VALUE;
function Bx(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Tx(e, t, r, n) {
  var a = Bx(t, n, r);
  if (a != null) {
    if (!(isFinite(a) && Math.floor(a) === a) || a < 0) {
      var i = n ? r : "highWaterMark";
      throw new Rx(i, a);
    }
    return Math.floor(a);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var fh = {
  getHighWaterMark: Tx
};
const Ix = /* @__PURE__ */ ee({
  __proto__: null,
  default: fh
}, [fh]), Wv = /* @__PURE__ */ Q(Ix);
var gs, sh;
function Gv() {
  if (sh)
    return gs;
  sh = 1, gs = se;
  function e(R) {
    var N = this;
    this.next = null, this.entry = null, this.finish = function() {
      B(N, R);
    };
  }
  var t;
  se.WritableState = ue;
  var r = {
    deprecate: D1
  }, n = Hv, a = Yr.Buffer, i = Ie.Uint8Array || function() {
  };
  function s(R) {
    return a.from(R);
  }
  function f(R) {
    return a.isBuffer(R) || R instanceof i;
  }
  var v = zv, m = Wv, _ = m.getHighWaterMark, O = vi.codes, P = O.ERR_INVALID_ARG_TYPE, C = O.ERR_METHOD_NOT_IMPLEMENTED, M = O.ERR_MULTIPLE_CALLBACK, k = O.ERR_STREAM_CANNOT_PIPE, q = O.ERR_STREAM_DESTROYED, D = O.ERR_STREAM_NULL_VALUES, U = O.ERR_STREAM_WRITE_AFTER_END, K = O.ERR_UNKNOWN_ENCODING, J = v.errorOrDestroy;
  ct(se, n);
  function re() {
  }
  function ue(R, N, H) {
    t = t || Qn(), R = R || {}, typeof H != "boolean" && (H = N instanceof t), this.objectMode = !!R.objectMode, H && (this.objectMode = this.objectMode || !!R.writableObjectMode), this.highWaterMark = _(this, R, "writableHighWaterMark", H), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var Z = R.decodeStrings === !1;
    this.decodeStrings = !Z, this.defaultEncoding = R.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(oe) {
      y(N, oe);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = R.emitClose !== !1, this.autoDestroy = !!R.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  ue.prototype.getBuffer = function() {
    for (var N = this.bufferedRequest, H = []; N; )
      H.push(N), N = N.next;
    return H;
  }, function() {
    try {
      Object.defineProperty(ue.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var ve;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (ve = Function.prototype[Symbol.hasInstance], Object.defineProperty(se, Symbol.hasInstance, {
    value: function(N) {
      return ve.call(this, N) ? !0 : this !== se ? !1 : N && N._writableState instanceof ue;
    }
  })) : ve = function(N) {
    return N instanceof this;
  };
  function se(R) {
    t = t || Qn();
    var N = this instanceof t;
    if (!N && !ve.call(se, this))
      return new se(R);
    this._writableState = new ue(R, this, N), this.writable = !0, R && (typeof R.write == "function" && (this._write = R.write), typeof R.writev == "function" && (this._writev = R.writev), typeof R.destroy == "function" && (this._destroy = R.destroy), typeof R.final == "function" && (this._final = R.final)), n.call(this);
  }
  se.prototype.pipe = function() {
    J(this, new k());
  };
  function le(R, N) {
    var H = new U();
    J(R, H), process.nextTick(N, H);
  }
  function V(R, N, H, Z) {
    var oe;
    return H === null ? oe = new D() : typeof H != "string" && !N.objectMode && (oe = new P("chunk", ["string", "Buffer"], H)), oe ? (J(R, oe), process.nextTick(Z, oe), !1) : !0;
  }
  se.prototype.write = function(R, N, H) {
    var Z = this._writableState, oe = !1, $ = !Z.objectMode && f(R);
    return $ && !a.isBuffer(R) && (R = s(R)), typeof N == "function" && (H = N, N = null), $ ? N = "buffer" : N || (N = Z.defaultEncoding), typeof H != "function" && (H = re), Z.ending ? le(this, H) : ($ || V(this, Z, R, H)) && (Z.pendingcb++, oe = l(this, Z, $, R, N, H)), oe;
  }, se.prototype.cork = function() {
    this._writableState.corked++;
  }, se.prototype.uncork = function() {
    var R = this._writableState;
    R.corked && (R.corked--, !R.writing && !R.corked && !R.bufferProcessing && R.bufferedRequest && h(this, R));
  }, se.prototype.setDefaultEncoding = function(N) {
    if (typeof N == "string" && (N = N.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((N + "").toLowerCase()) > -1))
      throw new K(N);
    return this._writableState.defaultEncoding = N, this;
  }, Object.defineProperty(se.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function g(R, N, H) {
    return !R.objectMode && R.decodeStrings !== !1 && typeof N == "string" && (N = a.from(N, H)), N;
  }
  Object.defineProperty(se.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function l(R, N, H, Z, oe, $) {
    if (!H) {
      var A = g(N, Z, oe);
      Z !== A && (H = !0, oe = "buffer", Z = A);
    }
    var X = N.objectMode ? 1 : Z.length;
    N.length += X;
    var te = N.length < N.highWaterMark;
    if (te || (N.needDrain = !0), N.writing || N.corked) {
      var pe = N.lastBufferedRequest;
      N.lastBufferedRequest = {
        chunk: Z,
        encoding: oe,
        isBuf: H,
        callback: $,
        next: null
      }, pe ? pe.next = N.lastBufferedRequest : N.bufferedRequest = N.lastBufferedRequest, N.bufferedRequestCount += 1;
    } else
      u(R, N, !1, X, Z, oe, $);
    return te;
  }
  function u(R, N, H, Z, oe, $, A) {
    N.writelen = Z, N.writecb = A, N.writing = !0, N.sync = !0, N.destroyed ? N.onwrite(new q("write")) : H ? R._writev(oe, N.onwrite) : R._write(oe, $, N.onwrite), N.sync = !1;
  }
  function o(R, N, H, Z, oe) {
    --N.pendingcb, H ? (process.nextTick(oe, Z), process.nextTick(S, R, N), R._writableState.errorEmitted = !0, J(R, Z)) : (oe(Z), R._writableState.errorEmitted = !0, J(R, Z), S(R, N));
  }
  function c(R) {
    R.writing = !1, R.writecb = null, R.length -= R.writelen, R.writelen = 0;
  }
  function y(R, N) {
    var H = R._writableState, Z = H.sync, oe = H.writecb;
    if (typeof oe != "function")
      throw new M();
    if (c(H), N)
      o(R, H, Z, N, oe);
    else {
      var $ = d(H) || R.destroyed;
      !$ && !H.corked && !H.bufferProcessing && H.bufferedRequest && h(R, H), Z ? process.nextTick(x, R, H, $, oe) : x(R, H, $, oe);
    }
  }
  function x(R, N, H, Z) {
    H || b(R, N), N.pendingcb--, Z(), S(R, N);
  }
  function b(R, N) {
    N.length === 0 && N.needDrain && (N.needDrain = !1, R.emit("drain"));
  }
  function h(R, N) {
    N.bufferProcessing = !0;
    var H = N.bufferedRequest;
    if (R._writev && H && H.next) {
      var Z = N.bufferedRequestCount, oe = new Array(Z), $ = N.corkedRequestsFree;
      $.entry = H;
      for (var A = 0, X = !0; H; )
        oe[A] = H, H.isBuf || (X = !1), H = H.next, A += 1;
      oe.allBuffers = X, u(R, N, !0, N.length, oe, "", $.finish), N.pendingcb++, N.lastBufferedRequest = null, $.next ? (N.corkedRequestsFree = $.next, $.next = null) : N.corkedRequestsFree = new e(N), N.bufferedRequestCount = 0;
    } else {
      for (; H; ) {
        var te = H.chunk, pe = H.encoding, z = H.callback, I = N.objectMode ? 1 : te.length;
        if (u(R, N, !1, I, te, pe, z), H = H.next, N.bufferedRequestCount--, N.writing)
          break;
      }
      H === null && (N.lastBufferedRequest = null);
    }
    N.bufferedRequest = H, N.bufferProcessing = !1;
  }
  se.prototype._write = function(R, N, H) {
    H(new C("_write()"));
  }, se.prototype._writev = null, se.prototype.end = function(R, N, H) {
    var Z = this._writableState;
    return typeof R == "function" ? (H = R, R = null, N = null) : typeof N == "function" && (H = N, N = null), R != null && this.write(R, N), Z.corked && (Z.corked = 1, this.uncork()), Z.ending || G(this, Z, H), this;
  }, Object.defineProperty(se.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function d(R) {
    return R.ending && R.length === 0 && R.bufferedRequest === null && !R.finished && !R.writing;
  }
  function w(R, N) {
    R._final(function(H) {
      N.pendingcb--, H && J(R, H), N.prefinished = !0, R.emit("prefinish"), S(R, N);
    });
  }
  function p(R, N) {
    !N.prefinished && !N.finalCalled && (typeof R._final == "function" && !N.destroyed ? (N.pendingcb++, N.finalCalled = !0, process.nextTick(w, R, N)) : (N.prefinished = !0, R.emit("prefinish")));
  }
  function S(R, N) {
    var H = d(N);
    if (H && (p(R, N), N.pendingcb === 0 && (N.finished = !0, R.emit("finish"), N.autoDestroy))) {
      var Z = R._readableState;
      (!Z || Z.autoDestroy && Z.endEmitted) && R.destroy();
    }
    return H;
  }
  function G(R, N, H) {
    N.ending = !0, S(R, N), H && (N.finished ? process.nextTick(H) : R.once("finish", H)), N.ended = !0, R.writable = !1;
  }
  function B(R, N, H) {
    var Z = R.entry;
    for (R.entry = null; Z; ) {
      var oe = Z.callback;
      N.pendingcb--, oe(H), Z = Z.next;
    }
    N.corkedRequestsFree.next = R;
  }
  return Object.defineProperty(se.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(N) {
      !this._writableState || (this._writableState.destroyed = N);
    }
  }), se.prototype.destroy = v.destroy, se.prototype._undestroy = v.undestroy, se.prototype._destroy = function(R, N) {
    N(R);
  }, gs;
}
var bs, uh;
function Qn() {
  if (uh)
    return bs;
  uh = 1;
  var e = Object.keys || function(m) {
    var _ = [];
    for (var O in m)
      _.push(O);
    return _;
  };
  bs = s;
  var t = Zv(), r = Gv();
  ct(s, t);
  for (var n = e(r.prototype), a = 0; a < n.length; a++) {
    var i = n[a];
    s.prototype[i] || (s.prototype[i] = r.prototype[i]);
  }
  function s(m) {
    if (!(this instanceof s))
      return new s(m);
    t.call(this, m), r.call(this, m), this.allowHalfOpen = !0, m && (m.readable === !1 && (this.readable = !1), m.writable === !1 && (this.writable = !1), m.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", f)));
  }
  Object.defineProperty(s.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(s.prototype, "writableBuffer", {
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(s.prototype, "writableLength", {
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function f() {
    this._writableState.ended || process.nextTick(v, this);
  }
  function v(m) {
    m.end();
  }
  return Object.defineProperty(s.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(_) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = _, this._writableState.destroyed = _);
    }
  }), bs;
}
var ch = vi.codes.ERR_STREAM_PREMATURE_CLOSE;
function Px(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      e.apply(this, n);
    }
  };
}
function Ox() {
}
function Lx(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Vv(e, t, r) {
  if (typeof t == "function")
    return Vv(e, null, t);
  t || (t = {}), r = Px(r || Ox);
  var n = t.readable || t.readable !== !1 && e.readable, a = t.writable || t.writable !== !1 && e.writable, i = function() {
    e.writable || f();
  }, s = e._writableState && e._writableState.finished, f = function() {
    a = !1, s = !0, n || r.call(e);
  }, v = e._readableState && e._readableState.endEmitted, m = function() {
    n = !1, v = !0, a || r.call(e);
  }, _ = function(M) {
    r.call(e, M);
  }, O = function() {
    var M;
    if (n && !v)
      return (!e._readableState || !e._readableState.ended) && (M = new ch()), r.call(e, M);
    if (a && !s)
      return (!e._writableState || !e._writableState.ended) && (M = new ch()), r.call(e, M);
  }, P = function() {
    e.req.on("finish", f);
  };
  return Lx(e) ? (e.on("complete", f), e.on("abort", O), e.req ? P() : e.on("request", P)) : a && !e._writableState && (e.on("end", i), e.on("close", i)), e.on("end", m), e.on("finish", f), t.error !== !1 && e.on("error", _), e.on("close", O), function() {
    e.removeListener("complete", f), e.removeListener("abort", O), e.removeListener("request", P), e.req && e.req.removeListener("finish", f), e.removeListener("end", i), e.removeListener("close", i), e.removeListener("finish", f), e.removeListener("end", m), e.removeListener("error", _), e.removeListener("close", O);
  };
}
var lh = Vv;
const Cx = /* @__PURE__ */ ee({
  __proto__: null,
  default: lh
}, [lh]), h0 = /* @__PURE__ */ Q(Cx);
var _s, hh;
function kx() {
  if (hh)
    return _s;
  hh = 1;
  var e;
  function t(D, U, K) {
    return U in D ? Object.defineProperty(D, U, { value: K, enumerable: !0, configurable: !0, writable: !0 }) : D[U] = K, D;
  }
  var r = h0, n = Symbol("lastResolve"), a = Symbol("lastReject"), i = Symbol("error"), s = Symbol("ended"), f = Symbol("lastPromise"), v = Symbol("handlePromise"), m = Symbol("stream");
  function _(D, U) {
    return {
      value: D,
      done: U
    };
  }
  function O(D) {
    var U = D[n];
    if (U !== null) {
      var K = D[m].read();
      K !== null && (D[f] = null, D[n] = null, D[a] = null, U(_(K, !1)));
    }
  }
  function P(D) {
    process.nextTick(O, D);
  }
  function C(D, U) {
    return function(K, J) {
      D.then(function() {
        if (U[s]) {
          K(_(void 0, !0));
          return;
        }
        U[v](K, J);
      }, J);
    };
  }
  var M = Object.getPrototypeOf(function() {
  }), k = Object.setPrototypeOf((e = {
    get stream() {
      return this[m];
    },
    next: function() {
      var U = this, K = this[i];
      if (K !== null)
        return Promise.reject(K);
      if (this[s])
        return Promise.resolve(_(void 0, !0));
      if (this[m].destroyed)
        return new Promise(function(ve, se) {
          process.nextTick(function() {
            U[i] ? se(U[i]) : ve(_(void 0, !0));
          });
        });
      var J = this[f], re;
      if (J)
        re = new Promise(C(J, this));
      else {
        var ue = this[m].read();
        if (ue !== null)
          return Promise.resolve(_(ue, !1));
        re = new Promise(this[v]);
      }
      return this[f] = re, re;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var U = this;
    return new Promise(function(K, J) {
      U[m].destroy(null, function(re) {
        if (re) {
          J(re);
          return;
        }
        K(_(void 0, !0));
      });
    });
  }), e), M), q = function(U) {
    var K, J = Object.create(k, (K = {}, t(K, m, {
      value: U,
      writable: !0
    }), t(K, n, {
      value: null,
      writable: !0
    }), t(K, a, {
      value: null,
      writable: !0
    }), t(K, i, {
      value: null,
      writable: !0
    }), t(K, s, {
      value: U._readableState.endEmitted,
      writable: !0
    }), t(K, v, {
      value: function(ue, ve) {
        var se = J[m].read();
        se ? (J[f] = null, J[n] = null, J[a] = null, ue(_(se, !1))) : (J[n] = ue, J[a] = ve);
      },
      writable: !0
    }), K));
    return J[f] = null, r(U, function(re) {
      if (re && re.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var ue = J[a];
        ue !== null && (J[f] = null, J[n] = null, J[a] = null, ue(re)), J[i] = re;
        return;
      }
      var ve = J[n];
      ve !== null && (J[f] = null, J[n] = null, J[a] = null, ve(_(void 0, !0))), J[s] = !0;
    }), U.on("readable", P.bind(null, J)), J;
  };
  return _s = q, _s;
}
var ms, dh;
function Nx() {
  return dh || (dh = 1, ms = function() {
    throw new Error("Readable.from is not available in the browser");
  }), ms;
}
var ws, ph;
function Zv() {
  if (ph)
    return ws;
  ph = 1, ws = le;
  var e;
  le.ReadableState = se, Jr.EventEmitter;
  var t = function(A, X) {
    return A.listeners(X).length;
  }, r = Hv, n = Yr.Buffer, a = Ie.Uint8Array || function() {
  };
  function i($) {
    return n.from($);
  }
  function s($) {
    return n.isBuffer($) || $ instanceof a;
  }
  var f = er, v;
  f && f.debuglog ? v = f.debuglog("stream") : v = function() {
  };
  var m = gx(), _ = zv, O = Wv, P = O.getHighWaterMark, C = vi.codes, M = C.ERR_INVALID_ARG_TYPE, k = C.ERR_STREAM_PUSH_AFTER_EOF, q = C.ERR_METHOD_NOT_IMPLEMENTED, D = C.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, U, K, J;
  ct(le, r);
  var re = _.errorOrDestroy, ue = ["error", "close", "destroy", "pause", "resume"];
  function ve($, A, X) {
    if (typeof $.prependListener == "function")
      return $.prependListener(A, X);
    !$._events || !$._events[A] ? $.on(A, X) : Array.isArray($._events[A]) ? $._events[A].unshift(X) : $._events[A] = [X, $._events[A]];
  }
  function se($, A, X) {
    e = e || Qn(), $ = $ || {}, typeof X != "boolean" && (X = A instanceof e), this.objectMode = !!$.objectMode, X && (this.objectMode = this.objectMode || !!$.readableObjectMode), this.highWaterMark = P(this, $, "readableHighWaterMark", X), this.buffer = new m(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = $.emitClose !== !1, this.autoDestroy = !!$.autoDestroy, this.destroyed = !1, this.defaultEncoding = $.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, $.encoding && (U || (U = Ni.StringDecoder), this.decoder = new U($.encoding), this.encoding = $.encoding);
  }
  function le($) {
    if (e = e || Qn(), !(this instanceof le))
      return new le($);
    var A = this instanceof e;
    this._readableState = new se($, this, A), this.readable = !0, $ && (typeof $.read == "function" && (this._read = $.read), typeof $.destroy == "function" && (this._destroy = $.destroy)), r.call(this);
  }
  Object.defineProperty(le.prototype, "destroyed", {
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(A) {
      !this._readableState || (this._readableState.destroyed = A);
    }
  }), le.prototype.destroy = _.destroy, le.prototype._undestroy = _.undestroy, le.prototype._destroy = function($, A) {
    A($);
  }, le.prototype.push = function($, A) {
    var X = this._readableState, te;
    return X.objectMode ? te = !0 : typeof $ == "string" && (A = A || X.defaultEncoding, A !== X.encoding && ($ = n.from($, A), A = ""), te = !0), V(this, $, A, !1, te);
  }, le.prototype.unshift = function($) {
    return V(this, $, null, !0, !1);
  };
  function V($, A, X, te, pe) {
    v("readableAddChunk", A);
    var z = $._readableState;
    if (A === null)
      z.reading = !1, y($, z);
    else {
      var I;
      if (pe || (I = l(z, A)), I)
        re($, I);
      else if (z.objectMode || A && A.length > 0)
        if (typeof A != "string" && !z.objectMode && Object.getPrototypeOf(A) !== n.prototype && (A = i(A)), te)
          z.endEmitted ? re($, new D()) : g($, z, A, !0);
        else if (z.ended)
          re($, new k());
        else {
          if (z.destroyed)
            return !1;
          z.reading = !1, z.decoder && !X ? (A = z.decoder.write(A), z.objectMode || A.length !== 0 ? g($, z, A, !1) : h($, z)) : g($, z, A, !1);
        }
      else
        te || (z.reading = !1, h($, z));
    }
    return !z.ended && (z.length < z.highWaterMark || z.length === 0);
  }
  function g($, A, X, te) {
    A.flowing && A.length === 0 && !A.sync ? (A.awaitDrain = 0, $.emit("data", X)) : (A.length += A.objectMode ? 1 : X.length, te ? A.buffer.unshift(X) : A.buffer.push(X), A.needReadable && x($)), h($, A);
  }
  function l($, A) {
    var X;
    return !s(A) && typeof A != "string" && A !== void 0 && !$.objectMode && (X = new M("chunk", ["string", "Buffer", "Uint8Array"], A)), X;
  }
  le.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, le.prototype.setEncoding = function($) {
    U || (U = Ni.StringDecoder);
    var A = new U($);
    this._readableState.decoder = A, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var X = this._readableState.buffer.head, te = ""; X !== null; )
      te += A.write(X.data), X = X.next;
    return this._readableState.buffer.clear(), te !== "" && this._readableState.buffer.push(te), this._readableState.length = te.length, this;
  };
  var u = 1073741824;
  function o($) {
    return $ >= u ? $ = u : ($--, $ |= $ >>> 1, $ |= $ >>> 2, $ |= $ >>> 4, $ |= $ >>> 8, $ |= $ >>> 16, $++), $;
  }
  function c($, A) {
    return $ <= 0 || A.length === 0 && A.ended ? 0 : A.objectMode ? 1 : $ !== $ ? A.flowing && A.length ? A.buffer.head.data.length : A.length : ($ > A.highWaterMark && (A.highWaterMark = o($)), $ <= A.length ? $ : A.ended ? A.length : (A.needReadable = !0, 0));
  }
  le.prototype.read = function($) {
    v("read", $), $ = parseInt($, 10);
    var A = this._readableState, X = $;
    if ($ !== 0 && (A.emittedReadable = !1), $ === 0 && A.needReadable && ((A.highWaterMark !== 0 ? A.length >= A.highWaterMark : A.length > 0) || A.ended))
      return v("read: emitReadable", A.length, A.ended), A.length === 0 && A.ended ? H(this) : x(this), null;
    if ($ = c($, A), $ === 0 && A.ended)
      return A.length === 0 && H(this), null;
    var te = A.needReadable;
    v("need readable", te), (A.length === 0 || A.length - $ < A.highWaterMark) && (te = !0, v("length less than watermark", te)), A.ended || A.reading ? (te = !1, v("reading or ended", te)) : te && (v("do read"), A.reading = !0, A.sync = !0, A.length === 0 && (A.needReadable = !0), this._read(A.highWaterMark), A.sync = !1, A.reading || ($ = c(X, A)));
    var pe;
    return $ > 0 ? pe = N($, A) : pe = null, pe === null ? (A.needReadable = A.length <= A.highWaterMark, $ = 0) : (A.length -= $, A.awaitDrain = 0), A.length === 0 && (A.ended || (A.needReadable = !0), X !== $ && A.ended && H(this)), pe !== null && this.emit("data", pe), pe;
  };
  function y($, A) {
    if (v("onEofChunk"), !A.ended) {
      if (A.decoder) {
        var X = A.decoder.end();
        X && X.length && (A.buffer.push(X), A.length += A.objectMode ? 1 : X.length);
      }
      A.ended = !0, A.sync ? x($) : (A.needReadable = !1, A.emittedReadable || (A.emittedReadable = !0, b($)));
    }
  }
  function x($) {
    var A = $._readableState;
    v("emitReadable", A.needReadable, A.emittedReadable), A.needReadable = !1, A.emittedReadable || (v("emitReadable", A.flowing), A.emittedReadable = !0, process.nextTick(b, $));
  }
  function b($) {
    var A = $._readableState;
    v("emitReadable_", A.destroyed, A.length, A.ended), !A.destroyed && (A.length || A.ended) && ($.emit("readable"), A.emittedReadable = !1), A.needReadable = !A.flowing && !A.ended && A.length <= A.highWaterMark, R($);
  }
  function h($, A) {
    A.readingMore || (A.readingMore = !0, process.nextTick(d, $, A));
  }
  function d($, A) {
    for (; !A.reading && !A.ended && (A.length < A.highWaterMark || A.flowing && A.length === 0); ) {
      var X = A.length;
      if (v("maybeReadMore read 0"), $.read(0), X === A.length)
        break;
    }
    A.readingMore = !1;
  }
  le.prototype._read = function($) {
    re(this, new q("_read()"));
  }, le.prototype.pipe = function($, A) {
    var X = this, te = this._readableState;
    switch (te.pipesCount) {
      case 0:
        te.pipes = $;
        break;
      case 1:
        te.pipes = [te.pipes, $];
        break;
      default:
        te.pipes.push($);
        break;
    }
    te.pipesCount += 1, v("pipe count=%d opts=%j", te.pipesCount, A);
    var pe = (!A || A.end !== !1) && $ !== process.stdout && $ !== process.stderr, z = pe ? L : ye;
    te.endEmitted ? process.nextTick(z) : X.once("end", z), $.on("unpipe", I);
    function I(F, E) {
      v("onunpipe"), F === X && E && E.hasUnpiped === !1 && (E.hasUnpiped = !0, he());
    }
    function L() {
      v("onend"), $.end();
    }
    var j = w(X);
    $.on("drain", j);
    var ie = !1;
    function he() {
      v("cleanup"), $.removeListener("close", de), $.removeListener("finish", ge), $.removeListener("drain", j), $.removeListener("error", ae), $.removeListener("unpipe", I), X.removeListener("end", L), X.removeListener("end", ye), X.removeListener("data", Y), ie = !0, te.awaitDrain && (!$._writableState || $._writableState.needDrain) && j();
    }
    X.on("data", Y);
    function Y(F) {
      v("ondata");
      var E = $.write(F);
      v("dest.write", E), E === !1 && ((te.pipesCount === 1 && te.pipes === $ || te.pipesCount > 1 && oe(te.pipes, $) !== -1) && !ie && (v("false write response, pause", te.awaitDrain), te.awaitDrain++), X.pause());
    }
    function ae(F) {
      v("onerror", F), ye(), $.removeListener("error", ae), t($, "error") === 0 && re($, F);
    }
    ve($, "error", ae);
    function de() {
      $.removeListener("finish", ge), ye();
    }
    $.once("close", de);
    function ge() {
      v("onfinish"), $.removeListener("close", de), ye();
    }
    $.once("finish", ge);
    function ye() {
      v("unpipe"), X.unpipe($);
    }
    return $.emit("pipe", X), te.flowing || (v("pipe resume"), X.resume()), $;
  };
  function w($) {
    return function() {
      var X = $._readableState;
      v("pipeOnDrain", X.awaitDrain), X.awaitDrain && X.awaitDrain--, X.awaitDrain === 0 && t($, "data") && (X.flowing = !0, R($));
    };
  }
  le.prototype.unpipe = function($) {
    var A = this._readableState, X = {
      hasUnpiped: !1
    };
    if (A.pipesCount === 0)
      return this;
    if (A.pipesCount === 1)
      return $ && $ !== A.pipes ? this : ($ || ($ = A.pipes), A.pipes = null, A.pipesCount = 0, A.flowing = !1, $ && $.emit("unpipe", this, X), this);
    if (!$) {
      var te = A.pipes, pe = A.pipesCount;
      A.pipes = null, A.pipesCount = 0, A.flowing = !1;
      for (var z = 0; z < pe; z++)
        te[z].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var I = oe(A.pipes, $);
    return I === -1 ? this : (A.pipes.splice(I, 1), A.pipesCount -= 1, A.pipesCount === 1 && (A.pipes = A.pipes[0]), $.emit("unpipe", this, X), this);
  }, le.prototype.on = function($, A) {
    var X = r.prototype.on.call(this, $, A), te = this._readableState;
    return $ === "data" ? (te.readableListening = this.listenerCount("readable") > 0, te.flowing !== !1 && this.resume()) : $ === "readable" && !te.endEmitted && !te.readableListening && (te.readableListening = te.needReadable = !0, te.flowing = !1, te.emittedReadable = !1, v("on readable", te.length, te.reading), te.length ? x(this) : te.reading || process.nextTick(S, this)), X;
  }, le.prototype.addListener = le.prototype.on, le.prototype.removeListener = function($, A) {
    var X = r.prototype.removeListener.call(this, $, A);
    return $ === "readable" && process.nextTick(p, this), X;
  }, le.prototype.removeAllListeners = function($) {
    var A = r.prototype.removeAllListeners.apply(this, arguments);
    return ($ === "readable" || $ === void 0) && process.nextTick(p, this), A;
  };
  function p($) {
    var A = $._readableState;
    A.readableListening = $.listenerCount("readable") > 0, A.resumeScheduled && !A.paused ? A.flowing = !0 : $.listenerCount("data") > 0 && $.resume();
  }
  function S($) {
    v("readable nexttick read 0"), $.read(0);
  }
  le.prototype.resume = function() {
    var $ = this._readableState;
    return $.flowing || (v("resume"), $.flowing = !$.readableListening, G(this, $)), $.paused = !1, this;
  };
  function G($, A) {
    A.resumeScheduled || (A.resumeScheduled = !0, process.nextTick(B, $, A));
  }
  function B($, A) {
    v("resume", A.reading), A.reading || $.read(0), A.resumeScheduled = !1, $.emit("resume"), R($), A.flowing && !A.reading && $.read(0);
  }
  le.prototype.pause = function() {
    return v("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (v("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function R($) {
    var A = $._readableState;
    for (v("flow", A.flowing); A.flowing && $.read() !== null; )
      ;
  }
  le.prototype.wrap = function($) {
    var A = this, X = this._readableState, te = !1;
    $.on("end", function() {
      if (v("wrapped end"), X.decoder && !X.ended) {
        var I = X.decoder.end();
        I && I.length && A.push(I);
      }
      A.push(null);
    }), $.on("data", function(I) {
      if (v("wrapped data"), X.decoder && (I = X.decoder.write(I)), !(X.objectMode && I == null) && !(!X.objectMode && (!I || !I.length))) {
        var L = A.push(I);
        L || (te = !0, $.pause());
      }
    });
    for (var pe in $)
      this[pe] === void 0 && typeof $[pe] == "function" && (this[pe] = function(L) {
        return function() {
          return $[L].apply($, arguments);
        };
      }(pe));
    for (var z = 0; z < ue.length; z++)
      $.on(ue[z], this.emit.bind(this, ue[z]));
    return this._read = function(I) {
      v("wrapped _read", I), te && (te = !1, $.resume());
    }, this;
  }, typeof Symbol == "function" && (le.prototype[Symbol.asyncIterator] = function() {
    return K === void 0 && (K = kx()), K(this);
  }), Object.defineProperty(le.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(le.prototype, "readableBuffer", {
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(le.prototype, "readableFlowing", {
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(A) {
      this._readableState && (this._readableState.flowing = A);
    }
  }), le._fromList = N, Object.defineProperty(le.prototype, "readableLength", {
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function N($, A) {
    if (A.length === 0)
      return null;
    var X;
    return A.objectMode ? X = A.buffer.shift() : !$ || $ >= A.length ? (A.decoder ? X = A.buffer.join("") : A.buffer.length === 1 ? X = A.buffer.first() : X = A.buffer.concat(A.length), A.buffer.clear()) : X = A.buffer.consume($, A.decoder), X;
  }
  function H($) {
    var A = $._readableState;
    v("endReadable", A.endEmitted), A.endEmitted || (A.ended = !0, process.nextTick(Z, A, $));
  }
  function Z($, A) {
    if (v("endReadableNT", $.endEmitted, $.length), !$.endEmitted && $.length === 0 && ($.endEmitted = !0, A.readable = !1, A.emit("end"), $.autoDestroy)) {
      var X = A._writableState;
      (!X || X.autoDestroy && X.finished) && A.destroy();
    }
  }
  typeof Symbol == "function" && (le.from = function($, A) {
    return J === void 0 && (J = Nx()), J(le, $, A);
  });
  function oe($, A) {
    for (var X = 0, te = $.length; X < te; X++)
      if ($[X] === A)
        return X;
    return -1;
  }
  return ws;
}
var vh = Fr, nf = vi.codes, qx = nf.ERR_METHOD_NOT_IMPLEMENTED, Fx = nf.ERR_MULTIPLE_CALLBACK, Ux = nf.ERR_TRANSFORM_ALREADY_TRANSFORMING, Dx = nf.ERR_TRANSFORM_WITH_LENGTH_0, af = Qn();
ct(Fr, af);
function jx(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null)
    return this.emit("error", new Fx());
  r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
  var a = this._readableState;
  a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
}
function Fr(e) {
  if (!(this instanceof Fr))
    return new Fr(e);
  af.call(this, e), this._transformState = {
    afterTransform: jx.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", Hx);
}
function Hx() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
    yh(e, t, r);
  }) : yh(this, null, null);
}
Fr.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, af.prototype.push.call(this, e, t);
};
Fr.prototype._transform = function(e, t, r) {
  r(new qx("_transform()"));
};
Fr.prototype._write = function(e, t, r) {
  var n = this._transformState;
  if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
    var a = this._readableState;
    (n.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
  }
};
Fr.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
Fr.prototype._destroy = function(e, t) {
  af.prototype._destroy.call(this, e, function(r) {
    t(r);
  });
};
function yh(e, t, r) {
  if (t)
    return e.emit("error", t);
  if (r != null && e.push(r), e._writableState.length)
    throw new Dx();
  if (e._transformState.transforming)
    throw new Ux();
  return e.push(null);
}
const zx = /* @__PURE__ */ ee({
  __proto__: null,
  default: vh
}, [vh]), Jv = /* @__PURE__ */ Q(zx);
var gh = ji, Yv = Jv;
ct(ji, Yv);
function ji(e) {
  if (!(this instanceof ji))
    return new ji(e);
  Yv.call(this, e);
}
ji.prototype._transform = function(e, t, r) {
  r(null, e);
};
const Kx = /* @__PURE__ */ ee({
  __proto__: null,
  default: gh
}, [gh]), Wx = /* @__PURE__ */ Q(Kx);
var xs;
function Gx(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var Xv = vi.codes, Vx = Xv.ERR_MISSING_ARGS, Zx = Xv.ERR_STREAM_DESTROYED;
function bh(e) {
  if (e)
    throw e;
}
function Jx(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Yx(e, t, r, n) {
  n = Gx(n);
  var a = !1;
  e.on("close", function() {
    a = !0;
  }), xs === void 0 && (xs = h0), xs(e, {
    readable: t,
    writable: r
  }, function(s) {
    if (s)
      return n(s);
    a = !0, n();
  });
  var i = !1;
  return function(s) {
    if (!a && !i) {
      if (i = !0, Jx(e))
        return e.abort();
      if (typeof e.destroy == "function")
        return e.destroy();
      n(s || new Zx("pipe"));
    }
  };
}
function _h(e) {
  e();
}
function Xx(e, t) {
  return e.pipe(t);
}
function Qx(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? bh : e.pop();
}
function e5() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Qx(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new Vx("streams");
  var a, i = t.map(function(s, f) {
    var v = f < t.length - 1, m = f > 0;
    return Yx(s, v, m, function(_) {
      a || (a = _), _ && i.forEach(_h), !v && (i.forEach(_h), n(a));
    });
  });
  return t.reduce(Xx);
}
var mh = e5;
const t5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: mh
}, [mh]), r5 = /* @__PURE__ */ Q(t5);
(function(e, t) {
  t = e.exports = Zv(), t.Stream = t, t.Readable = t, t.Writable = Gv(), t.Duplex = Qn(), t.Transform = Jv, t.PassThrough = Wx, t.finished = h0, t.pipeline = r5;
})(eo, eo.exports);
const n5 = /* @__PURE__ */ Qe(eo.exports), i5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: n5
}, [eo.exports]), a5 = /* @__PURE__ */ Q(i5);
var to = Gt.Buffer, Qv = a5.Transform, o5 = ct;
function f5(e, t) {
  if (!to.isBuffer(e) && typeof e != "string")
    throw new TypeError(t + " must be a string or a buffer");
}
function Qr(e) {
  Qv.call(this), this._block = to.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1;
}
o5(Qr, Qv);
Qr.prototype._transform = function(e, t, r) {
  var n = null;
  try {
    this.update(e, t);
  } catch (a) {
    n = a;
  }
  r(n);
};
Qr.prototype._flush = function(e) {
  var t = null;
  try {
    this.push(this.digest());
  } catch (r) {
    t = r;
  }
  e(t);
};
Qr.prototype.update = function(e, t) {
  if (f5(e, "Data"), this._finalized)
    throw new Error("Digest already called");
  to.isBuffer(e) || (e = to.from(e, t));
  for (var r = this._block, n = 0; this._blockOffset + e.length - n >= this._blockSize; ) {
    for (var a = this._blockOffset; a < this._blockSize; )
      r[a++] = e[n++];
    this._update(), this._blockOffset = 0;
  }
  for (; n < e.length; )
    r[this._blockOffset++] = e[n++];
  for (var i = 0, s = e.length * 8; s > 0; ++i)
    this._length[i] += s, s = this._length[i] / 4294967296 | 0, s > 0 && (this._length[i] -= 4294967296 * s);
  return this;
};
Qr.prototype._update = function() {
  throw new Error("_update is not implemented");
};
Qr.prototype.digest = function(e) {
  if (this._finalized)
    throw new Error("Digest already called");
  this._finalized = !0;
  var t = this._digest();
  e !== void 0 && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
  for (var r = 0; r < 4; ++r)
    this._length[r] = 0;
  return t;
};
Qr.prototype._digest = function() {
  throw new Error("_digest is not implemented");
};
var wh = Qr;
const s5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: wh
}, [wh]), ey = /* @__PURE__ */ Q(s5);
var u5 = ct, ty = ey, c5 = Gt.Buffer, l5 = new Array(16);
function of() {
  ty.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878;
}
u5(of, ty);
of.prototype._update = function() {
  for (var e = l5, t = 0; t < 16; ++t)
    e[t] = this._block.readInt32LE(t * 4);
  var r = this._a, n = this._b, a = this._c, i = this._d;
  r = $t(r, n, a, i, e[0], 3614090360, 7), i = $t(i, r, n, a, e[1], 3905402710, 12), a = $t(a, i, r, n, e[2], 606105819, 17), n = $t(n, a, i, r, e[3], 3250441966, 22), r = $t(r, n, a, i, e[4], 4118548399, 7), i = $t(i, r, n, a, e[5], 1200080426, 12), a = $t(a, i, r, n, e[6], 2821735955, 17), n = $t(n, a, i, r, e[7], 4249261313, 22), r = $t(r, n, a, i, e[8], 1770035416, 7), i = $t(i, r, n, a, e[9], 2336552879, 12), a = $t(a, i, r, n, e[10], 4294925233, 17), n = $t(n, a, i, r, e[11], 2304563134, 22), r = $t(r, n, a, i, e[12], 1804603682, 7), i = $t(i, r, n, a, e[13], 4254626195, 12), a = $t(a, i, r, n, e[14], 2792965006, 17), n = $t(n, a, i, r, e[15], 1236535329, 22), r = Rt(r, n, a, i, e[1], 4129170786, 5), i = Rt(i, r, n, a, e[6], 3225465664, 9), a = Rt(a, i, r, n, e[11], 643717713, 14), n = Rt(n, a, i, r, e[0], 3921069994, 20), r = Rt(r, n, a, i, e[5], 3593408605, 5), i = Rt(i, r, n, a, e[10], 38016083, 9), a = Rt(a, i, r, n, e[15], 3634488961, 14), n = Rt(n, a, i, r, e[4], 3889429448, 20), r = Rt(r, n, a, i, e[9], 568446438, 5), i = Rt(i, r, n, a, e[14], 3275163606, 9), a = Rt(a, i, r, n, e[3], 4107603335, 14), n = Rt(n, a, i, r, e[8], 1163531501, 20), r = Rt(r, n, a, i, e[13], 2850285829, 5), i = Rt(i, r, n, a, e[2], 4243563512, 9), a = Rt(a, i, r, n, e[7], 1735328473, 14), n = Rt(n, a, i, r, e[12], 2368359562, 20), r = Bt(r, n, a, i, e[5], 4294588738, 4), i = Bt(i, r, n, a, e[8], 2272392833, 11), a = Bt(a, i, r, n, e[11], 1839030562, 16), n = Bt(n, a, i, r, e[14], 4259657740, 23), r = Bt(r, n, a, i, e[1], 2763975236, 4), i = Bt(i, r, n, a, e[4], 1272893353, 11), a = Bt(a, i, r, n, e[7], 4139469664, 16), n = Bt(n, a, i, r, e[10], 3200236656, 23), r = Bt(r, n, a, i, e[13], 681279174, 4), i = Bt(i, r, n, a, e[0], 3936430074, 11), a = Bt(a, i, r, n, e[3], 3572445317, 16), n = Bt(n, a, i, r, e[6], 76029189, 23), r = Bt(r, n, a, i, e[9], 3654602809, 4), i = Bt(i, r, n, a, e[12], 3873151461, 11), a = Bt(a, i, r, n, e[15], 530742520, 16), n = Bt(n, a, i, r, e[2], 3299628645, 23), r = Tt(r, n, a, i, e[0], 4096336452, 6), i = Tt(i, r, n, a, e[7], 1126891415, 10), a = Tt(a, i, r, n, e[14], 2878612391, 15), n = Tt(n, a, i, r, e[5], 4237533241, 21), r = Tt(r, n, a, i, e[12], 1700485571, 6), i = Tt(i, r, n, a, e[3], 2399980690, 10), a = Tt(a, i, r, n, e[10], 4293915773, 15), n = Tt(n, a, i, r, e[1], 2240044497, 21), r = Tt(r, n, a, i, e[8], 1873313359, 6), i = Tt(i, r, n, a, e[15], 4264355552, 10), a = Tt(a, i, r, n, e[6], 2734768916, 15), n = Tt(n, a, i, r, e[13], 1309151649, 21), r = Tt(r, n, a, i, e[4], 4149444226, 6), i = Tt(i, r, n, a, e[11], 3174756917, 10), a = Tt(a, i, r, n, e[2], 718787259, 15), n = Tt(n, a, i, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + a | 0, this._d = this._d + i | 0;
};
of.prototype._digest = function() {
  this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
  var e = c5.allocUnsafe(16);
  return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e;
};
function ff(e, t) {
  return e << t | e >>> 32 - t;
}
function $t(e, t, r, n, a, i, s) {
  return ff(e + (t & r | ~t & n) + a + i | 0, s) + t | 0;
}
function Rt(e, t, r, n, a, i, s) {
  return ff(e + (t & n | r & ~n) + a + i | 0, s) + t | 0;
}
function Bt(e, t, r, n, a, i, s) {
  return ff(e + (t ^ r ^ n) + a + i | 0, s) + t | 0;
}
function Tt(e, t, r, n, a, i, s) {
  return ff(e + (r ^ (t | ~n)) + a + i | 0, s) + t | 0;
}
var xh = of;
const h5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: xh
}, [xh]), d5 = /* @__PURE__ */ Q(h5);
var Ms = Yr.Buffer, p5 = ct, ry = ey, v5 = new Array(16), Mi = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
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
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
], Ei = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
], Si = [
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
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
], Ai = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
], $i = [0, 1518500249, 1859775393, 2400959708, 2840853838], Ri = [1352829926, 1548603684, 1836072691, 2053994217, 0];
function sf() {
  ry.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520;
}
p5(sf, ry);
sf.prototype._update = function() {
  for (var e = v5, t = 0; t < 16; ++t)
    e[t] = this._block.readInt32LE(t * 4);
  for (var r = this._a | 0, n = this._b | 0, a = this._c | 0, i = this._d | 0, s = this._e | 0, f = this._a | 0, v = this._b | 0, m = this._c | 0, _ = this._d | 0, O = this._e | 0, P = 0; P < 80; P += 1) {
    var C, M;
    P < 16 ? (C = Mh(r, n, a, i, s, e[Mi[P]], $i[0], Si[P]), M = $h(f, v, m, _, O, e[Ei[P]], Ri[0], Ai[P])) : P < 32 ? (C = Eh(r, n, a, i, s, e[Mi[P]], $i[1], Si[P]), M = Ah(f, v, m, _, O, e[Ei[P]], Ri[1], Ai[P])) : P < 48 ? (C = Sh(r, n, a, i, s, e[Mi[P]], $i[2], Si[P]), M = Sh(f, v, m, _, O, e[Ei[P]], Ri[2], Ai[P])) : P < 64 ? (C = Ah(r, n, a, i, s, e[Mi[P]], $i[3], Si[P]), M = Eh(f, v, m, _, O, e[Ei[P]], Ri[3], Ai[P])) : (C = $h(r, n, a, i, s, e[Mi[P]], $i[4], Si[P]), M = Mh(f, v, m, _, O, e[Ei[P]], Ri[4], Ai[P])), r = s, s = i, i = bn(a, 10), a = n, n = C, f = O, O = _, _ = bn(m, 10), m = v, v = M;
  }
  var k = this._b + a + _ | 0;
  this._b = this._c + i + O | 0, this._c = this._d + s + f | 0, this._d = this._e + r + v | 0, this._e = this._a + n + m | 0, this._a = k;
};
sf.prototype._digest = function() {
  this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
  var e = Ms.alloc ? Ms.alloc(20) : new Ms(20);
  return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e;
};
function bn(e, t) {
  return e << t | e >>> 32 - t;
}
function Mh(e, t, r, n, a, i, s, f) {
  return bn(e + (t ^ r ^ n) + i + s | 0, f) + a | 0;
}
function Eh(e, t, r, n, a, i, s, f) {
  return bn(e + (t & r | ~t & n) + i + s | 0, f) + a | 0;
}
function Sh(e, t, r, n, a, i, s, f) {
  return bn(e + ((t | ~r) ^ n) + i + s | 0, f) + a | 0;
}
function Ah(e, t, r, n, a, i, s, f) {
  return bn(e + (t & n | r & ~n) + i + s | 0, f) + a | 0;
}
function $h(e, t, r, n, a, i, s, f) {
  return bn(e + (t ^ (r | ~n)) + i + s | 0, f) + a | 0;
}
var Rh = sf;
const y5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Rh
}, [Rh]), g5 = /* @__PURE__ */ Q(y5);
var du = { exports: {} }, ny = Gt.Buffer;
function uf(e, t) {
  this._block = ny.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0;
}
uf.prototype.update = function(e, t) {
  typeof e == "string" && (t = t || "utf8", e = ny.from(e, t));
  for (var r = this._block, n = this._blockSize, a = e.length, i = this._len, s = 0; s < a; ) {
    for (var f = i % n, v = Math.min(a - s, n - f), m = 0; m < v; m++)
      r[f + m] = e[s + m];
    i += v, s += v, i % n === 0 && this._update(r);
  }
  return this._len += a, this;
};
uf.prototype.digest = function(e) {
  var t = this._len % this._blockSize;
  this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295)
    this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0, a = (r - n) / 4294967296;
    this._block.writeUInt32BE(a, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var i = this._hash();
  return e ? i.toString(e) : i;
};
uf.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var Bh = uf;
const b5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Bh
}, [Bh]), yi = /* @__PURE__ */ Q(b5);
var _5 = ct, iy = yi, m5 = Gt.Buffer, w5 = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], x5 = new Array(80);
function sa() {
  this.init(), this._w = x5, iy.call(this, 64, 56);
}
_5(sa, iy);
sa.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function M5(e) {
  return e << 5 | e >>> 27;
}
function E5(e) {
  return e << 30 | e >>> 2;
}
function S5(e, t, r, n) {
  return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n;
}
sa.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, n = this._b | 0, a = this._c | 0, i = this._d | 0, s = this._e | 0, f = 0; f < 16; ++f)
    t[f] = e.readInt32BE(f * 4);
  for (; f < 80; ++f)
    t[f] = t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16];
  for (var v = 0; v < 80; ++v) {
    var m = ~~(v / 20), _ = M5(r) + S5(m, n, a, i) + s + t[v] + w5[m] | 0;
    s = i, i = a, a = E5(n), n = r, r = _;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = a + this._c | 0, this._d = i + this._d | 0, this._e = s + this._e | 0;
};
sa.prototype._hash = function() {
  var e = m5.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Th = sa;
const A5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Th
}, [Th]), $5 = /* @__PURE__ */ Q(A5);
var R5 = ct, ay = yi, B5 = Gt.Buffer, T5 = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], I5 = new Array(80);
function ua() {
  this.init(), this._w = I5, ay.call(this, 64, 56);
}
R5(ua, ay);
ua.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function P5(e) {
  return e << 1 | e >>> 31;
}
function O5(e) {
  return e << 5 | e >>> 27;
}
function L5(e) {
  return e << 30 | e >>> 2;
}
function C5(e, t, r, n) {
  return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n;
}
ua.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, n = this._b | 0, a = this._c | 0, i = this._d | 0, s = this._e | 0, f = 0; f < 16; ++f)
    t[f] = e.readInt32BE(f * 4);
  for (; f < 80; ++f)
    t[f] = P5(t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16]);
  for (var v = 0; v < 80; ++v) {
    var m = ~~(v / 20), _ = O5(r) + C5(m, n, a, i) + s + t[v] + T5[m] | 0;
    s = i, i = a, a = L5(n), n = r, r = _;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = a + this._c | 0, this._d = i + this._d | 0, this._e = s + this._e | 0;
};
ua.prototype._hash = function() {
  var e = B5.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Ih = ua;
const k5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ih
}, [Ih]), N5 = /* @__PURE__ */ Q(k5);
var q5 = ct, oy = yi, F5 = Gt.Buffer, U5 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], D5 = new Array(64);
function ca() {
  this.init(), this._w = D5, oy.call(this, 64, 56);
}
q5(ca, oy);
ca.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function j5(e, t, r) {
  return r ^ e & (t ^ r);
}
function H5(e, t, r) {
  return e & t | r & (e | t);
}
function z5(e) {
  return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
}
function K5(e) {
  return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
}
function W5(e) {
  return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
}
function G5(e) {
  return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
}
ca.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, n = this._b | 0, a = this._c | 0, i = this._d | 0, s = this._e | 0, f = this._f | 0, v = this._g | 0, m = this._h | 0, _ = 0; _ < 16; ++_)
    t[_] = e.readInt32BE(_ * 4);
  for (; _ < 64; ++_)
    t[_] = G5(t[_ - 2]) + t[_ - 7] + W5(t[_ - 15]) + t[_ - 16] | 0;
  for (var O = 0; O < 64; ++O) {
    var P = m + K5(s) + j5(s, f, v) + U5[O] + t[O] | 0, C = z5(r) + H5(r, n, a) | 0;
    m = v, v = f, f = s, s = i + P | 0, i = a, a = n, n = r, r = P + C | 0;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = a + this._c | 0, this._d = i + this._d | 0, this._e = s + this._e | 0, this._f = f + this._f | 0, this._g = v + this._g | 0, this._h = m + this._h | 0;
};
ca.prototype._hash = function() {
  var e = F5.allocUnsafe(32);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
};
var Ph = ca;
const V5 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ph
}, [Ph]), fy = /* @__PURE__ */ Q(V5);
var Z5 = ct, J5 = fy, Y5 = yi, X5 = Gt.Buffer, Q5 = new Array(64);
function cf() {
  this.init(), this._w = Q5, Y5.call(this, 64, 56);
}
Z5(cf, J5);
cf.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
cf.prototype._hash = function() {
  var e = X5.allocUnsafe(28);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
};
var Oh = cf;
const e7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Oh
}, [Oh]), t7 = /* @__PURE__ */ Q(e7);
var r7 = ct, sy = yi, n7 = Gt.Buffer, Lh = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
], i7 = new Array(160);
function la() {
  this.init(), this._w = i7, sy.call(this, 128, 112);
}
r7(la, sy);
la.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function Ch(e, t, r) {
  return r ^ e & (t ^ r);
}
function kh(e, t, r) {
  return e & t | r & (e | t);
}
function Nh(e, t) {
  return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
}
function qh(e, t) {
  return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
}
function a7(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
}
function o7(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
}
function f7(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
}
function s7(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
}
function _t(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
la.prototype._update = function(e) {
  for (var t = this._w, r = this._ah | 0, n = this._bh | 0, a = this._ch | 0, i = this._dh | 0, s = this._eh | 0, f = this._fh | 0, v = this._gh | 0, m = this._hh | 0, _ = this._al | 0, O = this._bl | 0, P = this._cl | 0, C = this._dl | 0, M = this._el | 0, k = this._fl | 0, q = this._gl | 0, D = this._hl | 0, U = 0; U < 32; U += 2)
    t[U] = e.readInt32BE(U * 4), t[U + 1] = e.readInt32BE(U * 4 + 4);
  for (; U < 160; U += 2) {
    var K = t[U - 30], J = t[U - 15 * 2 + 1], re = a7(K, J), ue = o7(J, K);
    K = t[U - 2 * 2], J = t[U - 2 * 2 + 1];
    var ve = f7(K, J), se = s7(J, K), le = t[U - 7 * 2], V = t[U - 7 * 2 + 1], g = t[U - 16 * 2], l = t[U - 16 * 2 + 1], u = ue + V | 0, o = re + le + _t(u, ue) | 0;
    u = u + se | 0, o = o + ve + _t(u, se) | 0, u = u + l | 0, o = o + g + _t(u, l) | 0, t[U] = o, t[U + 1] = u;
  }
  for (var c = 0; c < 160; c += 2) {
    o = t[c], u = t[c + 1];
    var y = kh(r, n, a), x = kh(_, O, P), b = Nh(r, _), h = Nh(_, r), d = qh(s, M), w = qh(M, s), p = Lh[c], S = Lh[c + 1], G = Ch(s, f, v), B = Ch(M, k, q), R = D + w | 0, N = m + d + _t(R, D) | 0;
    R = R + B | 0, N = N + G + _t(R, B) | 0, R = R + S | 0, N = N + p + _t(R, S) | 0, R = R + u | 0, N = N + o + _t(R, u) | 0;
    var H = h + x | 0, Z = b + y + _t(H, h) | 0;
    m = v, D = q, v = f, q = k, f = s, k = M, M = C + R | 0, s = i + N + _t(M, C) | 0, i = a, C = P, a = n, P = O, n = r, O = _, _ = R + H | 0, r = N + Z + _t(_, R) | 0;
  }
  this._al = this._al + _ | 0, this._bl = this._bl + O | 0, this._cl = this._cl + P | 0, this._dl = this._dl + C | 0, this._el = this._el + M | 0, this._fl = this._fl + k | 0, this._gl = this._gl + q | 0, this._hl = this._hl + D | 0, this._ah = this._ah + r + _t(this._al, _) | 0, this._bh = this._bh + n + _t(this._bl, O) | 0, this._ch = this._ch + a + _t(this._cl, P) | 0, this._dh = this._dh + i + _t(this._dl, C) | 0, this._eh = this._eh + s + _t(this._el, M) | 0, this._fh = this._fh + f + _t(this._fl, k) | 0, this._gh = this._gh + v + _t(this._gl, q) | 0, this._hh = this._hh + m + _t(this._hl, D) | 0;
};
la.prototype._hash = function() {
  var e = n7.allocUnsafe(64);
  function t(r, n, a) {
    e.writeInt32BE(r, a), e.writeInt32BE(n, a + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e;
};
var Fh = la;
const u7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Fh
}, [Fh]), uy = /* @__PURE__ */ Q(u7);
var c7 = ct, l7 = uy, h7 = yi, d7 = Gt.Buffer, p7 = new Array(160);
function lf() {
  this.init(), this._w = p7, h7.call(this, 128, 112);
}
c7(lf, l7);
lf.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
lf.prototype._hash = function() {
  var e = d7.allocUnsafe(48);
  function t(r, n, a) {
    e.writeInt32BE(r, a), e.writeInt32BE(n, a + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
};
var Uh = lf;
const v7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Uh
}, [Uh]), y7 = /* @__PURE__ */ Q(v7);
var $n = du.exports = function(t) {
  t = t.toLowerCase();
  var r = $n[t];
  if (!r)
    throw new Error(t + " is not supported (we accept pull requests)");
  return new r();
};
$n.sha = $5;
$n.sha1 = N5;
$n.sha224 = t7;
$n.sha256 = fy;
$n.sha384 = y7;
$n.sha512 = uy;
const g7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: du.exports
}, [du.exports]), b7 = /* @__PURE__ */ Q(g7);
var cy = Gt.Buffer, ly = er.Transform, _7 = Ni.StringDecoder, m7 = ct;
function pr(e) {
  ly.call(this), this.hashMode = typeof e == "string", this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null;
}
m7(pr, ly);
pr.prototype.update = function(e, t, r) {
  typeof e == "string" && (e = cy.from(e, t));
  var n = this._update(e);
  return this.hashMode ? this : (r && (n = this._toString(n, r)), n);
};
pr.prototype.setAutoPadding = function() {
};
pr.prototype.getAuthTag = function() {
  throw new Error("trying to get auth tag in unsupported state");
};
pr.prototype.setAuthTag = function() {
  throw new Error("trying to set auth tag in unsupported state");
};
pr.prototype.setAAD = function() {
  throw new Error("trying to set aad in unsupported state");
};
pr.prototype._transform = function(e, t, r) {
  var n;
  try {
    this.hashMode ? this._update(e) : this.push(this._update(e));
  } catch (a) {
    n = a;
  } finally {
    r(n);
  }
};
pr.prototype._flush = function(e) {
  var t;
  try {
    this.push(this.__final());
  } catch (r) {
    t = r;
  }
  e(t);
};
pr.prototype._finalOrDigest = function(e) {
  var t = this.__final() || cy.alloc(0);
  return e && (t = this._toString(t, e, !0)), t;
};
pr.prototype._toString = function(e, t, r) {
  if (this._decoder || (this._decoder = new _7(t), this._encoding = t), this._encoding !== t)
    throw new Error("can't switch encodings");
  var n = this._decoder.write(e);
  return r && (n += this._decoder.end()), n;
};
var Dh = pr;
const w7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Dh
}, [Dh]), x7 = /* @__PURE__ */ Q(w7);
var M7 = ct, E7 = d5, S7 = g5, A7 = b7, hy = x7;
function hf(e) {
  hy.call(this, "digest"), this._hash = e;
}
M7(hf, hy);
hf.prototype._update = function(e) {
  this._hash.update(e);
};
hf.prototype._final = function() {
  return this._hash.digest();
};
var jh = function(t) {
  return t = t.toLowerCase(), t === "md5" ? new E7() : t === "rmd160" || t === "ripemd160" ? new S7() : new hf(A7(t));
};
const $7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: jh
}, [jh]), dy = /* @__PURE__ */ Q($7);
var Hh = function(t) {
  if (typeof t != "string")
    throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof t + ", while checking isHexPrefixed.");
  return t.slice(0, 2) === "0x";
};
const R7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Hh
}, [Hh]), py = /* @__PURE__ */ Q(R7);
var B7 = py, zh = function(t) {
  return typeof t != "string" ? t : B7(t) ? t.slice(2) : t;
};
const T7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: zh
}, [zh]), I7 = /* @__PURE__ */ Q(T7);
var P7 = py, vy = I7;
function df(e) {
  var t = e;
  if (typeof t != "string")
    throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
  return t.length % 2 && (t = "0" + t), t;
}
function yy(e) {
  var t = e.toString(16);
  return "0x" + t;
}
function O7(e) {
  var t = yy(e);
  return new Buffer(df(t.slice(2)), "hex");
}
function L7(e) {
  if (typeof e != "string")
    throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
  return Buffer.byteLength(e, "utf8");
}
function C7(e, t, r) {
  if (Array.isArray(e) !== !0)
    throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
  if (Array.isArray(t) !== !0)
    throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
  return t[Boolean(r) && "some" || "every"](function(n) {
    return e.indexOf(n) >= 0;
  });
}
function k7(e) {
  var t = new Buffer(df(vy(e).replace(/^0+|0+$/g, "")), "hex");
  return t.toString("utf8");
}
function N7(e) {
  var t = "", r = 0, n = e.length;
  for (e.substring(0, 2) === "0x" && (r = 2); r < n; r += 2) {
    var a = parseInt(e.substr(r, 2), 16);
    t += String.fromCharCode(a);
  }
  return t;
}
function q7(e) {
  var t = new Buffer(e, "utf8");
  return "0x" + df(t.toString("hex")).replace(/^0+|0+$/g, "");
}
function F7(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e.charCodeAt(r), a = n.toString(16);
    t += a.length < 2 ? "0" + a : a;
  }
  return "0x" + t;
}
function U7(e, t, r) {
  if (!Array.isArray(e))
    throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
  if (typeof t != "string")
    throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");
  for (var n = [], a = 0; a < e.length; a++) {
    var i = e[a][t];
    if (r && !i)
      i = "";
    else if (typeof i != "string")
      throw new Error("invalid abi");
    n.push(i);
  }
  return n;
}
function D7(e, t) {
  return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t);
}
var Kh = {
  arrayContainsArray: C7,
  intToBuffer: O7,
  getBinarySize: L7,
  isHexPrefixed: P7,
  stripHexPrefix: vy,
  padToEven: df,
  intToHex: yy,
  fromAscii: F7,
  fromUtf8: q7,
  toAscii: N7,
  toUtf8: k7,
  getKeys: U7,
  isHexString: D7
};
const j7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Kh
}, [Kh]), gi = /* @__PURE__ */ Q(j7);
(function(e) {
  var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(M) {
    return typeof M;
  } : function(M) {
    return M && typeof Symbol == "function" && M.constructor === Symbol && M !== Symbol.prototype ? "symbol" : typeof M;
  }, r = Y1, n = r.keccak224, a = r.keccak384, i = r.keccak256, s = r.keccak512, f = Z8, v = Di(), m = rf, _ = Mt, O = dy, P = Gt.Buffer;
  Object.assign(e, gi), e.MAX_INTEGER = new _("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), e.TWO_POW256 = new _("10000000000000000000000000000000000000000000000000000000000000000", 16), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.SHA3_NULL_S = e.KECCAK256_NULL_S, e.KECCAK256_NULL = P.from(e.KECCAK256_NULL_S, "hex"), e.SHA3_NULL = e.KECCAK256_NULL, e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.SHA3_RLP_ARRAY_S = e.KECCAK256_RLP_ARRAY_S, e.KECCAK256_RLP_ARRAY = P.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.SHA3_RLP_ARRAY = e.KECCAK256_RLP_ARRAY, e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.SHA3_RLP_S = e.KECCAK256_RLP_S, e.KECCAK256_RLP = P.from(e.KECCAK256_RLP_S, "hex"), e.SHA3_RLP = e.KECCAK256_RLP, e.BN = _, e.rlp = m, e.secp256k1 = f, e.zeros = function(M) {
    return P.allocUnsafe(M).fill(0);
  }, e.zeroAddress = function() {
    var M = 20, k = e.zeros(M);
    return e.bufferToHex(k);
  }, e.setLengthLeft = e.setLength = function(M, k, q) {
    var D = e.zeros(k);
    return M = e.toBuffer(M), q ? M.length < k ? (M.copy(D), D) : M.slice(0, k) : M.length < k ? (M.copy(D, k - M.length), D) : M.slice(-k);
  }, e.setLengthRight = function(M, k) {
    return e.setLength(M, k, !0);
  }, e.unpad = e.stripZeros = function(M) {
    M = e.stripHexPrefix(M);
    for (var k = M[0]; M.length > 0 && k.toString() === "0"; )
      M = M.slice(1), k = M[0];
    return M;
  }, e.toBuffer = function(M) {
    if (!P.isBuffer(M))
      if (Array.isArray(M))
        M = P.from(M);
      else if (typeof M == "string")
        e.isHexString(M) ? M = P.from(e.padToEven(e.stripHexPrefix(M)), "hex") : M = P.from(M);
      else if (typeof M == "number")
        M = e.intToBuffer(M);
      else if (M == null)
        M = P.allocUnsafe(0);
      else if (_.isBN(M))
        M = M.toArrayLike(P);
      else if (M.toArray)
        M = P.from(M.toArray());
      else
        throw new Error("invalid type");
    return M;
  }, e.bufferToInt = function(M) {
    return new _(e.toBuffer(M)).toNumber();
  }, e.bufferToHex = function(M) {
    return M = e.toBuffer(M), "0x" + M.toString("hex");
  }, e.fromSigned = function(M) {
    return new _(M).fromTwos(256);
  }, e.toUnsigned = function(M) {
    return P.from(M.toTwos(256).toArray());
  }, e.keccak = function(M, k) {
    switch (M = e.toBuffer(M), k || (k = 256), k) {
      case 224:
        return n(M);
      case 256:
        return i(M);
      case 384:
        return a(M);
      case 512:
        return s(M);
      default:
        throw new Error("Invald algorithm: keccak" + k);
    }
  }, e.keccak256 = function(M) {
    return e.keccak(M);
  }, e.sha3 = e.keccak, e.sha256 = function(M) {
    return M = e.toBuffer(M), O("sha256").update(M).digest();
  }, e.ripemd160 = function(M, k) {
    M = e.toBuffer(M);
    var q = O("rmd160").update(M).digest();
    return k === !0 ? e.setLength(q, 32) : q;
  }, e.rlphash = function(M) {
    return e.keccak(m.encode(M));
  }, e.isValidPrivate = function(M) {
    return f.privateKeyVerify(M);
  }, e.isValidPublic = function(M, k) {
    return M.length === 64 ? f.publicKeyVerify(P.concat([P.from([4]), M])) : k ? f.publicKeyVerify(M) : !1;
  }, e.pubToAddress = e.publicToAddress = function(M, k) {
    return M = e.toBuffer(M), k && M.length !== 64 && (M = f.publicKeyConvert(M, !1).slice(1)), v(M.length === 64), e.keccak(M).slice(-20);
  };
  var C = e.privateToPublic = function(M) {
    return M = e.toBuffer(M), f.publicKeyCreate(M, !1).slice(1);
  };
  e.importPublic = function(M) {
    return M = e.toBuffer(M), M.length !== 64 && (M = f.publicKeyConvert(M, !1).slice(1)), M;
  }, e.ecsign = function(M, k) {
    var q = f.sign(M, k), D = {};
    return D.r = q.signature.slice(0, 32), D.s = q.signature.slice(32, 64), D.v = q.recovery + 27, D;
  }, e.hashPersonalMessage = function(M) {
    var k = e.toBuffer(`Ethereum Signed Message:
` + M.length.toString());
    return e.keccak(P.concat([k, M]));
  }, e.ecrecover = function(M, k, q, D) {
    var U = P.concat([e.setLength(q, 32), e.setLength(D, 32)], 64), K = k - 27;
    if (K !== 0 && K !== 1)
      throw new Error("Invalid signature v value");
    var J = f.recover(M, U, K);
    return f.publicKeyConvert(J, !1).slice(1);
  }, e.toRpcSig = function(M, k, q) {
    if (M !== 27 && M !== 28)
      throw new Error("Invalid recovery id");
    return e.bufferToHex(P.concat([e.setLengthLeft(k, 32), e.setLengthLeft(q, 32), e.toBuffer(M - 27)]));
  }, e.fromRpcSig = function(M) {
    if (M = e.toBuffer(M), M.length !== 65)
      throw new Error("Invalid signature length");
    var k = M[64];
    return k < 27 && (k += 27), {
      v: k,
      r: M.slice(0, 32),
      s: M.slice(32, 64)
    };
  }, e.privateToAddress = function(M) {
    return e.publicToAddress(C(M));
  }, e.isValidAddress = function(M) {
    return /^0x[0-9a-fA-F]{40}$/.test(M);
  }, e.isZeroAddress = function(M) {
    var k = e.zeroAddress();
    return k === e.addHexPrefix(M);
  }, e.toChecksumAddress = function(M) {
    M = e.stripHexPrefix(M).toLowerCase();
    for (var k = e.keccak(M).toString("hex"), q = "0x", D = 0; D < M.length; D++)
      parseInt(k[D], 16) >= 8 ? q += M[D].toUpperCase() : q += M[D];
    return q;
  }, e.isValidChecksumAddress = function(M) {
    return e.isValidAddress(M) && e.toChecksumAddress(M) === M;
  }, e.generateAddress = function(M, k) {
    return M = e.toBuffer(M), k = new _(k), k.isZero() ? k = null : k = P.from(k.toArray()), e.rlphash([M, k]).slice(-20);
  }, e.isPrecompiled = function(M) {
    var k = e.unpad(M);
    return k.length === 1 && k[0] >= 1 && k[0] <= 8;
  }, e.addHexPrefix = function(M) {
    return typeof M != "string" || e.isHexPrefixed(M) ? M : "0x" + M;
  }, e.isValidSignature = function(M, k, q, D) {
    var U = new _("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), K = new _("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
    return !(k.length !== 32 || q.length !== 32 || M !== 27 && M !== 28 || (k = new _(k), q = new _(q), k.isZero() || k.gt(K) || q.isZero() || q.gt(K)) || D === !1 && new _(q).cmp(U) === 1);
  }, e.baToJSON = function(M) {
    if (P.isBuffer(M))
      return "0x" + M.toString("hex");
    if (M instanceof Array) {
      for (var k = [], q = 0; q < M.length; q++)
        k.push(e.baToJSON(M[q]));
      return k;
    }
  }, e.defineProperties = function(M, k, q) {
    if (M.raw = [], M._fields = [], M.toJSON = function(U) {
      if (U) {
        var K = {};
        return M._fields.forEach(function(J) {
          K[J] = "0x" + M[J].toString("hex");
        }), K;
      }
      return e.baToJSON(this.raw);
    }, M.serialize = function() {
      return m.encode(M.raw);
    }, k.forEach(function(U, K) {
      M._fields.push(U.name);
      function J() {
        return M.raw[K];
      }
      function re(ue) {
        ue = e.toBuffer(ue), ue.toString("hex") === "00" && !U.allowZero && (ue = P.allocUnsafe(0)), U.allowLess && U.length ? (ue = e.stripZeros(ue), v(U.length >= ue.length, "The field " + U.name + " must not have more " + U.length + " bytes")) : !(U.allowZero && ue.length === 0) && U.length && v(U.length === ue.length, "The field " + U.name + " must have byte length of " + U.length), M.raw[K] = ue;
      }
      Object.defineProperty(M, U.name, {
        enumerable: !0,
        configurable: !0,
        get: J,
        set: re
      }), U.default && (M[U.name] = U.default), U.alias && Object.defineProperty(M, U.alias, {
        enumerable: !1,
        configurable: !0,
        set: re,
        get: J
      });
    }), q)
      if (typeof q == "string" && (q = P.from(e.stripHexPrefix(q), "hex")), P.isBuffer(q) && (q = m.decode(q)), Array.isArray(q)) {
        if (q.length > M._fields.length)
          throw new Error("wrong number of fields in data");
        q.forEach(function(U, K) {
          M[M._fields[K]] = e.toBuffer(U);
        });
      } else if ((typeof q > "u" ? "undefined" : t(q)) === "object") {
        var D = Object.keys(q);
        k.forEach(function(U) {
          D.indexOf(U.name) !== -1 && (M[U.name] = q[U.name]), D.indexOf(U.alias) !== -1 && (M[U.alias] = q[U.alias]);
        });
      } else
        throw new Error("invalid data");
  };
})(Ks);
const H7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ks
}, [Ks]), ha = /* @__PURE__ */ Q(H7), Wh = (e, t) => function() {
  const r = t.promiseModule, n = new Array(arguments.length);
  for (let a = 0; a < arguments.length; a++)
    n[a] = arguments[a];
  return new r((a, i) => {
    t.errorFirst ? n.push(function(s, f) {
      if (t.multiArgs) {
        const v = new Array(arguments.length - 1);
        for (let m = 1; m < arguments.length; m++)
          v[m - 1] = arguments[m];
        s ? (v.unshift(s), i(v)) : a(v);
      } else
        s ? i(s) : a(f);
    }) : n.push(function(s) {
      if (t.multiArgs) {
        const f = new Array(arguments.length - 1);
        for (let v = 0; v < arguments.length; v++)
          f[v] = arguments[v];
        a(f);
      } else
        a(s);
    }), e.apply(this, n);
  });
};
var Gh = (e, t) => {
  t = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, t);
  const r = (a) => {
    const i = (s) => typeof s == "string" ? a === s : s.test(a);
    return t.include ? t.include.some(i) : !t.exclude.some(i);
  };
  let n;
  typeof e == "function" ? n = function() {
    return t.excludeMain ? e.apply(this, arguments) : Wh(e, t).apply(this, arguments);
  } : n = Object.create(Object.getPrototypeOf(e));
  for (const a in e) {
    const i = e[a];
    n[a] = typeof i == "function" && r(a) ? Wh(i, t) : i;
  }
  return n;
};
const z7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Gh
}, [Gh]), K7 = /* @__PURE__ */ Q(z7);
var Vh = G7, W7 = Object.prototype.hasOwnProperty;
function G7() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      W7.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
const V7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Vh
}, [Vh]), gy = /* @__PURE__ */ Q(V7);
var Zh = Z7;
function Z7(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER, r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function() {
    return r = r % t, r++;
  };
}
const J7 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Zh
}, [Zh]), Y7 = /* @__PURE__ */ Q(J7);
Y7();
const X7 = hr, by = Jr;
var Es = typeof Reflect == "object" ? Reflect : null, Q7 = Es && typeof Es.apply == "function" ? Es.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, Jh = d0;
function d0() {
  by.call(this);
}
X7.inherits(d0, by);
d0.prototype.emit = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t.push(arguments[r]);
  var n = e === "error", a = this._events;
  if (a !== void 0)
    n = n && a.error === void 0;
  else if (!n)
    return !1;
  if (n) {
    var i;
    if (t.length > 0 && (i = t[0]), i instanceof Error)
      throw i;
    var s = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw s.context = i, s;
  }
  var f = a[e];
  if (f === void 0)
    return !1;
  if (typeof f == "function")
    Yh(f, this, t);
  else
    for (var v = f.length, m = e9(f, v), r = 0; r < v; ++r)
      Yh(m[r], this, t);
  return !0;
};
function Yh(e, t, r) {
  try {
    Q7(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function e9(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
const t9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Jh
}, [Jh]), r9 = /* @__PURE__ */ Q(t9), n9 = r9, i9 = 1e3, a9 = (e, t) => e + t, Xh = ["sync", "latest"];
class o9 extends n9 {
  constructor(t = {}) {
    super(), this._blockResetDuration = t.blockResetDuration || 20 * i9, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
  }
  removeAllListeners(t) {
    t ? super.removeAllListeners(t) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener();
  }
  _start() {
  }
  _end() {
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(t, r) {
    !Xh.includes(t) || this._maybeStart();
  }
  _onRemoveListener(t, r) {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  _maybeStart() {
    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start());
  }
  _maybeEnd() {
    !this._isRunning || (this._isRunning = !1, this._setupBlockResetTimeout(), this._end());
  }
  _getBlockTrackerEventCount() {
    return Xh.map((t) => this.listenerCount(t)).reduce(a9);
  }
  _newPotentialLatest(t) {
    const r = this._currentBlock;
    r && ed(t) <= ed(r) || this._setCurrentBlock(t);
  }
  _setCurrentBlock(t) {
    const r = this._currentBlock;
    this._currentBlock = t, this.emit("latest", t), this.emit("sync", { oldBlock: r, newBlock: t });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
var Qh = o9;
function ed(e) {
  return Number.parseInt(e, 16);
}
const f9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: Qh
}, [Qh]), s9 = /* @__PURE__ */ Q(f9), u9 = K7, c9 = s9, l9 = 1e3;
class h9 extends c9 {
  constructor(t = {}) {
    if (!t.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    const r = t.pollingInterval || 20 * l9, n = t.retryTimeout || r / 10, a = t.keepEventLoopActive !== void 0 ? t.keepEventLoopActive : !0, i = t.setSkipCacheFlag || !1;
    super(Object.assign({
      blockResetDuration: r
    }, t)), this._provider = t.provider, this._pollingInterval = r, this._retryTimeout = n, this._keepEventLoopActive = a, this._setSkipCacheFlag = i;
  }
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  _start() {
    this._performSync().catch((t) => this.emit("error", t));
  }
  async _performSync() {
    for (; this._isRunning; )
      try {
        await this._updateLatestBlock(), await rd(this._pollingInterval, !this._keepEventLoopActive);
      } catch (t) {
        const r = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${t.stack}`);
        try {
          this.emit("error", r);
        } catch {
          console.error(r);
        }
        await rd(this._retryTimeout, !this._keepEventLoopActive);
      }
  }
  async _updateLatestBlock() {
    const t = await this._fetchLatestBlock();
    this._newPotentialLatest(t);
  }
  async _fetchLatestBlock() {
    const t = { jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] };
    this._setSkipCacheFlag && (t.skipCache = !0);
    const r = await u9((n) => this._provider.sendAsync(t, n))();
    if (r.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error}`);
    return r.result;
  }
}
var td = h9;
function rd(e, t) {
  return new Promise((r) => {
    const n = setTimeout(r, e);
    n.unref && t && n.unref();
  });
}
const d9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: td
}, [td]), p9 = /* @__PURE__ */ Q(d9);
var ro = { exports: {} }, no = { exports: {} }, io = { exports: {} }, v9 = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, nd = v9;
const y9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: nd
}, [nd]), _y = /* @__PURE__ */ Q(y9);
var g9 = _y, b9 = typeof self == "object" && self && self.Object === Object && self, _9 = g9 || b9 || Function("return this")(), id = _9;
const m9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: id
}, [id]), my = /* @__PURE__ */ Q(m9);
var w9 = my, x9 = w9.Symbol, ad = x9;
const M9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: ad
}, [ad]), wy = /* @__PURE__ */ Q(M9);
var od = wy, xy = Object.prototype, E9 = xy.hasOwnProperty, S9 = xy.toString, Bi = od ? od.toStringTag : void 0;
function A9(e) {
  var t = E9.call(e, Bi), r = e[Bi];
  try {
    e[Bi] = void 0;
    var n = !0;
  } catch {
  }
  var a = S9.call(e);
  return n && (t ? e[Bi] = r : delete e[Bi]), a;
}
var fd = A9;
const $9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: fd
}, [fd]), R9 = /* @__PURE__ */ Q($9);
var B9 = Object.prototype, T9 = B9.toString;
function I9(e) {
  return T9.call(e);
}
var sd = I9;
const P9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: sd
}, [sd]), O9 = /* @__PURE__ */ Q(P9);
var ud = wy, L9 = R9, C9 = O9, k9 = "[object Null]", N9 = "[object Undefined]", cd = ud ? ud.toStringTag : void 0;
function q9(e) {
  return e == null ? e === void 0 ? N9 : k9 : cd && cd in Object(e) ? L9(e) : C9(e);
}
var ld = q9;
const F9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: ld
}, [ld]), p0 = /* @__PURE__ */ Q(F9);
function U9(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var hd = U9;
const D9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: hd
}, [hd]), My = /* @__PURE__ */ Q(D9);
var j9 = p0, H9 = My, z9 = "[object AsyncFunction]", K9 = "[object Function]", W9 = "[object GeneratorFunction]", G9 = "[object Proxy]";
function V9(e) {
  if (!H9(e))
    return !1;
  var t = j9(e);
  return t == K9 || t == W9 || t == z9 || t == G9;
}
var dd = V9;
const Z9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: dd
}, [dd]), J9 = /* @__PURE__ */ Q(Z9);
var Y9 = 9007199254740991;
function X9(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y9;
}
var pd = X9;
const Q9 = /* @__PURE__ */ ee({
  __proto__: null,
  default: pd
}, [pd]), Ey = /* @__PURE__ */ Q(Q9);
var eM = J9, tM = Ey;
function rM(e) {
  return e != null && tM(e.length) && !eM(e);
}
var vd = rM;
const nM = /* @__PURE__ */ ee({
  __proto__: null,
  default: vd
}, [vd]), pf = /* @__PURE__ */ Q(nM);
var ao = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = {}, e.exports = t.default;
})(ao, ao.exports);
const iM = /* @__PURE__ */ Qe(ao.exports), aM = /* @__PURE__ */ ee({
  __proto__: null,
  default: iM
}, [ao.exports]), Sy = /* @__PURE__ */ Q(aM);
var oo = { exports: {} }, fo = { exports: {} };
function oM() {
}
var yd = oM;
const fM = /* @__PURE__ */ ee({
  __proto__: null,
  default: yd
}, [yd]), da = /* @__PURE__ */ Q(fM);
var so = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    return function() {
      if (n !== null) {
        var a = n;
        n = null, a.apply(this, arguments);
      }
    };
  }
  e.exports = t.default;
})(so, so.exports);
const sM = /* @__PURE__ */ Qe(so.exports), uM = /* @__PURE__ */ ee({
  __proto__: null,
  default: sM
}, [so.exports]), v0 = /* @__PURE__ */ Q(uM);
var uo = { exports: {} }, co = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(n) {
    return r && n[r] && n[r]();
  };
  var r = typeof Symbol == "function" && Symbol.iterator;
  e.exports = t.default;
})(co, co.exports);
const cM = /* @__PURE__ */ Qe(co.exports), lM = /* @__PURE__ */ ee({
  __proto__: null,
  default: cM
}, [co.exports]), hM = /* @__PURE__ */ Q(lM);
function dM(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var gd = dM;
const pM = /* @__PURE__ */ ee({
  __proto__: null,
  default: gd
}, [gd]), vM = /* @__PURE__ */ Q(pM);
function yM(e) {
  return e != null && typeof e == "object";
}
var bd = yM;
const gM = /* @__PURE__ */ ee({
  __proto__: null,
  default: bd
}, [bd]), y0 = /* @__PURE__ */ Q(gM);
var bM = p0, _M = y0, mM = "[object Arguments]";
function wM(e) {
  return _M(e) && bM(e) == mM;
}
var _d = wM;
const xM = /* @__PURE__ */ ee({
  __proto__: null,
  default: _d
}, [_d]), MM = /* @__PURE__ */ Q(xM);
var md = MM, EM = y0, Ay = Object.prototype, SM = Ay.hasOwnProperty, AM = Ay.propertyIsEnumerable, $M = md(function() {
  return arguments;
}()) ? md : function(e) {
  return EM(e) && SM.call(e, "callee") && !AM.call(e, "callee");
}, wd = $M;
const RM = /* @__PURE__ */ ee({
  __proto__: null,
  default: wd
}, [wd]), BM = /* @__PURE__ */ Q(RM);
var TM = Array.isArray, xd = TM;
const IM = /* @__PURE__ */ ee({
  __proto__: null,
  default: xd
}, [xd]), $y = /* @__PURE__ */ Q(IM);
var lo = { exports: {} };
function PM() {
  return !1;
}
var Md = PM;
const OM = /* @__PURE__ */ ee({
  __proto__: null,
  default: Md
}, [Md]), LM = /* @__PURE__ */ Q(OM);
(function(e, t) {
  var r = my, n = LM, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, f = s ? r.Buffer : void 0, v = f ? f.isBuffer : void 0, m = v || n;
  e.exports = m;
})(lo, lo.exports);
const CM = lo.exports, kM = /* @__PURE__ */ ee({
  __proto__: null,
  default: CM
}, [lo.exports]), NM = /* @__PURE__ */ Q(kM);
var qM = 9007199254740991, FM = /^(?:0|[1-9]\d*)$/;
function UM(e, t) {
  var r = typeof e;
  return t = t == null ? qM : t, !!t && (r == "number" || r != "symbol" && FM.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ed = UM;
const DM = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ed
}, [Ed]), jM = /* @__PURE__ */ Q(DM);
var HM = p0, zM = Ey, KM = y0, WM = "[object Arguments]", GM = "[object Array]", VM = "[object Boolean]", ZM = "[object Date]", JM = "[object Error]", YM = "[object Function]", XM = "[object Map]", QM = "[object Number]", eE = "[object Object]", tE = "[object RegExp]", rE = "[object Set]", nE = "[object String]", iE = "[object WeakMap]", aE = "[object ArrayBuffer]", oE = "[object DataView]", fE = "[object Float32Array]", sE = "[object Float64Array]", uE = "[object Int8Array]", cE = "[object Int16Array]", lE = "[object Int32Array]", hE = "[object Uint8Array]", dE = "[object Uint8ClampedArray]", pE = "[object Uint16Array]", vE = "[object Uint32Array]", lt = {};
lt[fE] = lt[sE] = lt[uE] = lt[cE] = lt[lE] = lt[hE] = lt[dE] = lt[pE] = lt[vE] = !0;
lt[WM] = lt[GM] = lt[aE] = lt[VM] = lt[oE] = lt[ZM] = lt[JM] = lt[YM] = lt[XM] = lt[QM] = lt[eE] = lt[tE] = lt[rE] = lt[nE] = lt[iE] = !1;
function yE(e) {
  return KM(e) && zM(e.length) && !!lt[HM(e)];
}
var Sd = yE;
const gE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Sd
}, [Sd]), bE = /* @__PURE__ */ Q(gE);
function _E(e) {
  return function(t) {
    return e(t);
  };
}
var Ad = _E;
const mE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ad
}, [Ad]), wE = /* @__PURE__ */ Q(mE);
var ho = { exports: {} };
(function(e, t) {
  var r = _y, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && r.process, f = function() {
    try {
      var v = a && a.require && a.require("util").types;
      return v || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = f;
})(ho, ho.exports);
const xE = ho.exports, ME = /* @__PURE__ */ ee({
  __proto__: null,
  default: xE
}, [ho.exports]), EE = /* @__PURE__ */ Q(ME);
var SE = bE, AE = wE, $d = EE, Rd = $d && $d.isTypedArray, $E = Rd ? AE(Rd) : SE, Bd = $E;
const RE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Bd
}, [Bd]), BE = /* @__PURE__ */ Q(RE);
var TE = vM, IE = BM, PE = $y, OE = NM, LE = jM, CE = BE, kE = Object.prototype, NE = kE.hasOwnProperty;
function qE(e, t) {
  var r = PE(e), n = !r && IE(e), a = !r && !n && OE(e), i = !r && !n && !a && CE(e), s = r || n || a || i, f = s ? TE(e.length, String) : [], v = f.length;
  for (var m in e)
    (t || NE.call(e, m)) && !(s && (m == "length" || a && (m == "offset" || m == "parent") || i && (m == "buffer" || m == "byteLength" || m == "byteOffset") || LE(m, v))) && f.push(m);
  return f;
}
var Td = qE;
const FE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Td
}, [Td]), UE = /* @__PURE__ */ Q(FE);
var DE = Object.prototype;
function jE(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || DE;
  return e === r;
}
var Id = jE;
const HE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Id
}, [Id]), zE = /* @__PURE__ */ Q(HE);
function KE(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Pd = KE;
const WE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Pd
}, [Pd]), GE = /* @__PURE__ */ Q(WE);
var VE = GE, ZE = VE(Object.keys, Object), Od = ZE;
const JE = /* @__PURE__ */ ee({
  __proto__: null,
  default: Od
}, [Od]), YE = /* @__PURE__ */ Q(JE);
var XE = zE, QE = YE, eS = Object.prototype, tS = eS.hasOwnProperty;
function rS(e) {
  if (!XE(e))
    return QE(e);
  var t = [];
  for (var r in Object(e))
    tS.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Ld = rS;
const nS = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ld
}, [Ld]), iS = /* @__PURE__ */ Q(nS);
var aS = UE, oS = iS, fS = pf;
function sS(e) {
  return fS(e) ? aS(e) : oS(e);
}
var Cd = sS;
const uS = /* @__PURE__ */ ee({
  __proto__: null,
  default: Cd
}, [Cd]), cS = /* @__PURE__ */ Q(uS);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = P;
  var r = pf, n = v(r), a = hM, i = v(a), s = cS, f = v(s);
  function v(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function m(C) {
    var M = -1, k = C.length;
    return function() {
      return ++M < k ? { value: C[M], key: M } : null;
    };
  }
  function _(C) {
    var M = -1;
    return function() {
      var q = C.next();
      return q.done ? null : (M++, { value: q.value, key: M });
    };
  }
  function O(C) {
    var M = (0, f.default)(C), k = -1, q = M.length;
    return function D() {
      var U = M[++k];
      return U === "__proto__" ? D() : k < q ? { value: C[U], key: U } : null;
    };
  }
  function P(C) {
    if ((0, n.default)(C))
      return m(C);
    var M = (0, i.default)(C);
    return M ? _(M) : O(C);
  }
  e.exports = t.default;
})(uo, uo.exports);
const lS = /* @__PURE__ */ Qe(uo.exports), hS = /* @__PURE__ */ ee({
  __proto__: null,
  default: lS
}, [uo.exports]), dS = /* @__PURE__ */ Q(hS);
var po = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    return function() {
      if (n === null)
        throw new Error("Callback was already called.");
      var a = n;
      n = null, a.apply(this, arguments);
    };
  }
  e.exports = t.default;
})(po, po.exports);
const pS = /* @__PURE__ */ Qe(po.exports), vS = /* @__PURE__ */ ee({
  __proto__: null,
  default: pS
}, [po.exports]), g0 = /* @__PURE__ */ Q(vS);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = C;
  var r = da, n = P(r), a = v0, i = P(a), s = dS, f = P(s), v = g0, m = P(v), _ = Sy, O = P(_);
  function P(M) {
    return M && M.__esModule ? M : { default: M };
  }
  function C(M) {
    return function(k, q, D) {
      if (D = (0, i.default)(D || n.default), M <= 0 || !k)
        return D(null);
      var U = (0, f.default)(k), K = !1, J = 0, re = !1;
      function ue(se, le) {
        if (J -= 1, se)
          K = !0, D(se);
        else {
          if (le === O.default || K && J <= 0)
            return K = !0, D(null);
          re || ve();
        }
      }
      function ve() {
        for (re = !0; J < M && !K; ) {
          var se = U();
          if (se === null) {
            K = !0, J <= 0 && D(null);
            return;
          }
          J += 1, q(se.value, se.key, (0, m.default)(ue));
        }
        re = !1;
      }
      ve();
    };
  }
  e.exports = t.default;
})(fo, fo.exports);
const yS = /* @__PURE__ */ Qe(fo.exports), gS = /* @__PURE__ */ ee({
  __proto__: null,
  default: yS
}, [fo.exports]), Ry = /* @__PURE__ */ Q(gS);
var pa = {}, vo = { exports: {} }, yo = { exports: {} }, go = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n, a) {
    a = a | 0;
    for (var i = Math.max(n.length - a, 0), s = Array(i), f = 0; f < i; f++)
      s[f] = n[a + f];
    return s;
  }
  e.exports = t.default;
})(go, go.exports);
const bS = /* @__PURE__ */ Qe(go.exports), _S = /* @__PURE__ */ ee({
  __proto__: null,
  default: bS
}, [go.exports]), vf = /* @__PURE__ */ Q(_S);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(i) {
    return function() {
      var s = (0, n.default)(arguments), f = s.pop();
      i.call(this, s, f);
    };
  };
  var r = vf, n = a(r);
  function a(i) {
    return i && i.__esModule ? i : { default: i };
  }
  e.exports = t.default;
})(yo, yo.exports);
const mS = /* @__PURE__ */ Qe(yo.exports), wS = /* @__PURE__ */ ee({
  __proto__: null,
  default: mS
}, [yo.exports]), xS = /* @__PURE__ */ Q(wS);
var Ur = {}, b0;
Object.defineProperty(Ur, "__esModule", {
  value: !0
});
var By = Ur.hasNextTick = b0 = Ur.hasSetImmediate = void 0, MS = Ur.fallback = Ty, ES = Ur.wrap = Iy, SS = vf, AS = $S(SS);
function $S(e) {
  return e && e.__esModule ? e : { default: e };
}
var RS = b0 = Ur.hasSetImmediate = typeof setImmediate == "function" && setImmediate, BS = By = Ur.hasNextTick = typeof process == "object" && typeof process.nextTick == "function";
function Ty(e) {
  setTimeout(e, 0);
}
function Iy(e) {
  return function(t) {
    var r = (0, AS.default)(arguments, 1);
    e(function() {
      t.apply(null, r);
    });
  };
}
var qa;
RS ? qa = setImmediate : BS ? qa = process.nextTick : qa = Ty;
var TS = Ur.default = Iy(qa);
const IS = /* @__PURE__ */ ee({
  __proto__: null,
  get hasNextTick() {
    return By;
  },
  get hasSetImmediate() {
    return b0;
  },
  fallback: MS,
  wrap: ES,
  default: TS
}, [Ur]), PS = /* @__PURE__ */ Q(IS);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m;
  var r = My, n = v(r), a = xS, i = v(a), s = PS, f = v(s);
  function v(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function m(P) {
    return (0, i.default)(function(C, M) {
      var k;
      try {
        k = P.apply(this, C);
      } catch (q) {
        return M(q);
      }
      (0, n.default)(k) && typeof k.then == "function" ? k.then(function(q) {
        _(M, null, q);
      }, function(q) {
        _(M, q.message ? q : new Error(q));
      }) : M(null, k);
    });
  }
  function _(P, C, M) {
    try {
      P(C, M);
    } catch (k) {
      (0, f.default)(O, k);
    }
  }
  function O(P) {
    throw P;
  }
  e.exports = t.default;
})(vo, vo.exports);
const OS = /* @__PURE__ */ Qe(vo.exports), LS = /* @__PURE__ */ ee({
  __proto__: null,
  default: OS
}, [vo.exports]), CS = /* @__PURE__ */ Q(LS);
Object.defineProperty(pa, "__esModule", {
  value: !0
});
var Py = pa.isAsync = void 0, kS = CS, NS = qS(kS);
function qS(e) {
  return e && e.__esModule ? e : { default: e };
}
var FS = typeof Symbol == "function";
function Oy(e) {
  return FS && e[Symbol.toStringTag] === "AsyncFunction";
}
function US(e) {
  return Oy(e) ? (0, NS.default)(e) : e;
}
var DS = pa.default = US;
Py = pa.isAsync = Oy;
const jS = /* @__PURE__ */ ee({
  __proto__: null,
  get isAsync() {
    return Py;
  },
  default: DS
}, [pa]), Rn = /* @__PURE__ */ Q(jS);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = Ry, n = s(r), a = Rn, i = s(a);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function f(v, m, _, O) {
    (0, n.default)(m)(v, (0, i.default)(_), O);
  }
  e.exports = t.default;
})(oo, oo.exports);
const HS = /* @__PURE__ */ Qe(oo.exports), zS = /* @__PURE__ */ ee({
  __proto__: null,
  default: HS
}, [oo.exports]), KS = /* @__PURE__ */ Q(zS);
var bo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n, a) {
    return function(i, s, f) {
      return n(i, a, s, f);
    };
  }
  e.exports = t.default;
})(bo, bo.exports);
const WS = /* @__PURE__ */ Qe(bo.exports), GS = /* @__PURE__ */ ee({
  __proto__: null,
  default: WS
}, [bo.exports]), Ly = /* @__PURE__ */ Q(GS);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(re, ue, ve) {
    var se = (0, n.default)(re) ? K : J;
    se(re, (0, D.default)(ue), ve);
  };
  var r = pf, n = U(r), a = Sy, i = U(a), s = KS, f = U(s), v = Ly, m = U(v), _ = da, O = U(_), P = v0, C = U(P), M = g0, k = U(M), q = Rn, D = U(q);
  function U(re) {
    return re && re.__esModule ? re : { default: re };
  }
  function K(re, ue, ve) {
    ve = (0, C.default)(ve || O.default);
    var se = 0, le = 0, V = re.length;
    V === 0 && ve(null);
    function g(l, u) {
      l ? ve(l) : (++le === V || u === i.default) && ve(null);
    }
    for (; se < V; se++)
      ue(re[se], se, (0, k.default)(g));
  }
  var J = (0, m.default)(f.default, 1 / 0);
  e.exports = t.default;
})(io, io.exports);
const VS = /* @__PURE__ */ Qe(io.exports), ZS = /* @__PURE__ */ ee({
  __proto__: null,
  default: VS
}, [io.exports]), Cy = /* @__PURE__ */ Q(ZS);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = Cy, n = s(r), a = Rn, i = s(a);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function f(v) {
    return function(m, _, O) {
      return v(n.default, m, (0, i.default)(_), O);
    };
  }
  e.exports = t.default;
})(no, no.exports);
const JS = /* @__PURE__ */ Qe(no.exports), YS = /* @__PURE__ */ ee({
  __proto__: null,
  default: JS
}, [no.exports]), XS = /* @__PURE__ */ Q(YS);
var _o = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = da, n = s(r), a = Rn, i = s(a);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function f(v, m, _, O) {
    O = O || n.default, m = m || [];
    var P = [], C = 0, M = (0, i.default)(_);
    v(m, function(k, q, D) {
      var U = C++;
      M(k, function(K, J) {
        P[U] = J, D(K);
      });
    }, function(k) {
      O(k, P);
    });
  }
  e.exports = t.default;
})(_o, _o.exports);
const QS = /* @__PURE__ */ Qe(_o.exports), eA = /* @__PURE__ */ ee({
  __proto__: null,
  default: QS
}, [_o.exports]), tA = /* @__PURE__ */ Q(eA);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = XS, n = s(r), a = tA, i = s(a);
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  t.default = (0, n.default)(i.default), e.exports = t.default;
})(ro, ro.exports);
const rA = /* @__PURE__ */ Qe(ro.exports), nA = /* @__PURE__ */ ee({
  __proto__: null,
  default: rA
}, [ro.exports]), iA = /* @__PURE__ */ Q(nA);
var mo = { exports: {} }, wo = { exports: {} }, xo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = r;
  function r(n) {
    return function(a, i, s) {
      return n(a, s);
    };
  }
  e.exports = t.default;
})(xo, xo.exports);
const aA = /* @__PURE__ */ Qe(xo.exports), oA = /* @__PURE__ */ ee({
  __proto__: null,
  default: aA
}, [xo.exports]), fA = /* @__PURE__ */ Q(oA);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m;
  var r = Ry, n = v(r), a = fA, i = v(a), s = Rn, f = v(s);
  function v(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function m(_, O, P, C) {
    (0, n.default)(O)(_, (0, i.default)((0, f.default)(P)), C);
  }
  e.exports = t.default;
})(wo, wo.exports);
const sA = /* @__PURE__ */ Qe(wo.exports), uA = /* @__PURE__ */ ee({
  __proto__: null,
  default: sA
}, [wo.exports]), cA = /* @__PURE__ */ Q(uA);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = cA, n = s(r), a = Ly, i = s(a);
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  t.default = (0, i.default)(n.default, 1), e.exports = t.default;
})(mo, mo.exports);
const lA = /* @__PURE__ */ Qe(mo.exports), hA = /* @__PURE__ */ ee({
  __proto__: null,
  default: lA
}, [mo.exports]), dA = /* @__PURE__ */ Q(hA), ky = Jr.EventEmitter, pA = hr.inherits;
var kd = va;
pA(va, ky);
function va() {
  const e = this;
  ky.call(e), e.isLocked = !0;
}
va.prototype.go = function() {
  const e = this;
  e.isLocked = !1, e.emit("unlock");
};
va.prototype.stop = function() {
  const e = this;
  e.isLocked = !0, e.emit("lock");
};
va.prototype.await = function(e) {
  const t = this;
  t.isLocked ? t.once("unlock", e) : setTimeout(e);
};
const vA = /* @__PURE__ */ ee({
  __proto__: null,
  default: kd
}, [kd]), yA = /* @__PURE__ */ Q(vA);
var wa = {}, Ss, Nd;
function gA() {
  if (Nd)
    return Ss;
  Nd = 1;
  var e, t, r = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "	"
  }, n, a = function(C) {
    throw {
      name: "SyntaxError",
      message: C,
      at: e,
      text: n
    };
  }, i = function(C) {
    return C && C !== t && a("Expected '" + C + "' instead of '" + t + "'"), t = n.charAt(e), e += 1, t;
  }, s = function() {
    var C, M = "";
    for (t === "-" && (M = "-", i("-")); t >= "0" && t <= "9"; )
      M += t, i();
    if (t === ".")
      for (M += "."; i() && t >= "0" && t <= "9"; )
        M += t;
    if (t === "e" || t === "E")
      for (M += t, i(), (t === "-" || t === "+") && (M += t, i()); t >= "0" && t <= "9"; )
        M += t, i();
    if (C = +M, !isFinite(C))
      a("Bad number");
    else
      return C;
  }, f = function() {
    var C, M, k = "", q;
    if (t === '"')
      for (; i(); ) {
        if (t === '"')
          return i(), k;
        if (t === "\\")
          if (i(), t === "u") {
            for (q = 0, M = 0; M < 4 && (C = parseInt(i(), 16), !!isFinite(C)); M += 1)
              q = q * 16 + C;
            k += String.fromCharCode(q);
          } else if (typeof r[t] == "string")
            k += r[t];
          else
            break;
        else
          k += t;
      }
    a("Bad string");
  }, v = function() {
    for (; t && t <= " "; )
      i();
  }, m = function() {
    switch (t) {
      case "t":
        return i("t"), i("r"), i("u"), i("e"), !0;
      case "f":
        return i("f"), i("a"), i("l"), i("s"), i("e"), !1;
      case "n":
        return i("n"), i("u"), i("l"), i("l"), null;
    }
    a("Unexpected '" + t + "'");
  }, _, O = function() {
    var C = [];
    if (t === "[") {
      if (i("["), v(), t === "]")
        return i("]"), C;
      for (; t; ) {
        if (C.push(_()), v(), t === "]")
          return i("]"), C;
        i(","), v();
      }
    }
    a("Bad array");
  }, P = function() {
    var C, M = {};
    if (t === "{") {
      if (i("{"), v(), t === "}")
        return i("}"), M;
      for (; t; ) {
        if (C = f(), v(), i(":"), Object.hasOwnProperty.call(M, C) && a('Duplicate key "' + C + '"'), M[C] = _(), v(), t === "}")
          return i("}"), M;
        i(","), v();
      }
    }
    a("Bad object");
  };
  return _ = function() {
    switch (v(), t) {
      case "{":
        return P();
      case "[":
        return O();
      case '"':
        return f();
      case "-":
        return s();
      default:
        return t >= "0" && t <= "9" ? s() : m();
    }
  }, Ss = function(C, M) {
    var k;
    return n = C, e = 0, t = " ", k = _(), v(), t && a("Syntax error"), typeof M == "function" ? function q(D, U) {
      var K, J, re = D[U];
      if (re && typeof re == "object")
        for (K in re)
          Object.prototype.hasOwnProperty.call(re, K) && (J = q(re, K), J !== void 0 ? re[K] = J : delete re[K]);
      return M.call(D, U, re);
    }({ "": k }, "") : k;
  }, Ss;
}
var As, qd;
function bA() {
  if (qd)
    return As;
  qd = 1;
  var e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, t, r, n = {
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, a;
  function i(f) {
    return e.lastIndex = 0, e.test(f) ? '"' + f.replace(e, function(v) {
      var m = n[v];
      return typeof m == "string" ? m : "\\u" + ("0000" + v.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + f + '"';
  }
  function s(f, v) {
    var m, _, O, P, C = t, M, k = v[f];
    switch (k && typeof k == "object" && typeof k.toJSON == "function" && (k = k.toJSON(f)), typeof a == "function" && (k = a.call(v, f, k)), typeof k) {
      case "string":
        return i(k);
      case "number":
        return isFinite(k) ? String(k) : "null";
      case "boolean":
      case "null":
        return String(k);
      case "object":
        if (!k)
          return "null";
        if (t += r, M = [], Object.prototype.toString.apply(k) === "[object Array]") {
          for (P = k.length, m = 0; m < P; m += 1)
            M[m] = s(m, k) || "null";
          return O = M.length === 0 ? "[]" : t ? `[
` + t + M.join(`,
` + t) + `
` + C + "]" : "[" + M.join(",") + "]", t = C, O;
        }
        if (a && typeof a == "object")
          for (P = a.length, m = 0; m < P; m += 1)
            _ = a[m], typeof _ == "string" && (O = s(_, k), O && M.push(i(_) + (t ? ": " : ":") + O));
        else
          for (_ in k)
            Object.prototype.hasOwnProperty.call(k, _) && (O = s(_, k), O && M.push(i(_) + (t ? ": " : ":") + O));
        return O = M.length === 0 ? "{}" : t ? `{
` + t + M.join(`,
` + t) + `
` + C + "}" : "{" + M.join(",") + "}", t = C, O;
    }
  }
  return As = function(f, v, m) {
    var _;
    if (t = "", r = "", typeof m == "number")
      for (_ = 0; _ < m; _ += 1)
        r += " ";
    else
      typeof m == "string" && (r = m);
    if (a = v, v && typeof v != "function" && (typeof v != "object" || typeof v.length != "number"))
      throw new Error("JSON.stringify");
    return s("", { "": f });
  }, As;
}
var Fd;
function _A() {
  return Fd || (Fd = 1, wa.parse = gA(), wa.stringify = bA()), wa;
}
var xa = typeof JSON < "u" ? JSON : _A(), Ud = function(e, t) {
  t || (t = {}), typeof t == "function" && (t = { cmp: t });
  var r = t.space || "";
  typeof r == "number" && (r = Array(r + 1).join(" "));
  var n = typeof t.cycles == "boolean" ? t.cycles : !1, a = t.replacer || function(f, v) {
    return v;
  }, i = t.cmp && function(f) {
    return function(v) {
      return function(m, _) {
        var O = { key: m, value: v[m] }, P = { key: _, value: v[_] };
        return f(O, P);
      };
    };
  }(t.cmp), s = [];
  return function f(v, m, _, O) {
    var P = r ? `
` + new Array(O + 1).join(r) : "", C = r ? ": " : ":";
    if (_ && _.toJSON && typeof _.toJSON == "function" && (_ = _.toJSON()), _ = a.call(v, m, _), _ !== void 0) {
      if (typeof _ != "object" || _ === null)
        return xa.stringify(_);
      if (mA(_)) {
        for (var M = [], k = 0; k < _.length; k++) {
          var q = f(_, k, _[k], O + 1) || xa.stringify(null);
          M.push(P + r + q);
        }
        return "[" + M.join(",") + P + "]";
      } else {
        if (s.indexOf(_) !== -1) {
          if (n)
            return xa.stringify("__cycle__");
          throw new TypeError("Converting circular structure to JSON");
        } else
          s.push(_);
        for (var D = wA(_).sort(i && i(_)), M = [], k = 0; k < D.length; k++) {
          var m = D[k], U = f(_, m, _[m], O + 1);
          if (!!U) {
            var K = xa.stringify(m) + C + U;
            M.push(P + r + K);
          }
        }
        return s.splice(s.indexOf(_), 1), "{" + M.join(",") + P + "}";
      }
    }
  }({ "": e }, "", e, 0);
}, mA = Array.isArray || function(e) {
  return {}.toString.call(e) === "[object Array]";
}, wA = Object.keys || function(e) {
  var t = Object.prototype.hasOwnProperty || function() {
    return !0;
  }, r = [];
  for (var n in e)
    t.call(e, n) && r.push(n);
  return r;
};
const xA = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ud
}, [Ud]), MA = /* @__PURE__ */ Q(xA), EA = MA;
var Dd = {
  cacheIdentifierForPayload: SA,
  canCache: Ny,
  blockTagForPayload: AA,
  paramsWithoutBlockTag: qy,
  blockTagParamIndex: _0,
  cacheTypeForPayload: Fy
};
function SA(e, t = {}) {
  if (!Ny(e))
    return null;
  const { includeBlockRef: r } = t, n = r ? e.params : qy(e);
  return e.method + ":" + EA(n);
}
function Ny(e) {
  return Fy(e) !== "never";
}
function AA(e) {
  var t = _0(e);
  return t >= e.params.length ? null : e.params[t];
}
function qy(e) {
  var t = _0(e);
  return t >= e.params.length ? e.params : e.method === "eth_getBlockByNumber" ? e.params.slice(1) : e.params.slice(0, t);
}
function _0(e) {
  switch (e.method) {
    case "eth_getStorageAt":
      return 2;
    case "eth_getBalance":
    case "eth_getCode":
    case "eth_getTransactionCount":
    case "eth_call":
    case "eth_estimateGas":
      return 1;
    case "eth_getBlockByNumber":
      return 0;
    default:
      return;
  }
}
function Fy(e) {
  switch (e.method) {
    case "web3_clientVersion":
    case "web3_sha3":
    case "eth_protocolVersion":
    case "eth_getBlockTransactionCountByHash":
    case "eth_getUncleCountByBlockHash":
    case "eth_getCode":
    case "eth_getBlockByHash":
    case "eth_getTransactionByHash":
    case "eth_getTransactionByBlockHashAndIndex":
    case "eth_getTransactionReceipt":
    case "eth_getUncleByBlockHashAndIndex":
    case "eth_getCompilers":
    case "eth_compileLLL":
    case "eth_compileSolidity":
    case "eth_compileSerpent":
    case "shh_version":
      return "perma";
    case "eth_getBlockByNumber":
    case "eth_getBlockTransactionCountByNumber":
    case "eth_getUncleCountByBlockNumber":
    case "eth_getTransactionByBlockNumberAndIndex":
    case "eth_getUncleByBlockNumberAndIndex":
      return "fork";
    case "eth_gasPrice":
    case "eth_getBalance":
    case "eth_getStorageAt":
    case "eth_getTransactionCount":
    case "eth_call":
    case "eth_estimateGas":
    case "eth_getFilterLogs":
    case "eth_getLogs":
    case "eth_blockNumber":
      return "block";
    case "net_version":
    case "net_peerCount":
    case "net_listening":
    case "eth_syncing":
    case "eth_sign":
    case "eth_coinbase":
    case "eth_mining":
    case "eth_hashrate":
    case "eth_accounts":
    case "eth_sendTransaction":
    case "eth_sendRawTransaction":
    case "eth_newFilter":
    case "eth_newBlockFilter":
    case "eth_newPendingTransactionFilter":
    case "eth_uninstallFilter":
    case "eth_getFilterChanges":
    case "eth_getWork":
    case "eth_submitWork":
    case "eth_submitHashrate":
    case "db_putString":
    case "db_getString":
    case "db_putHex":
    case "db_getHex":
    case "shh_post":
    case "shh_newIdentity":
    case "shh_hasIdentity":
    case "shh_newGroup":
    case "shh_addToGroup":
    case "shh_newFilter":
    case "shh_uninstallFilter":
    case "shh_getFilterChanges":
    case "shh_getMessages":
      return "never";
  }
}
const $A = /* @__PURE__ */ ee({
  __proto__: null,
  default: Dd
}, [Dd]), RA = /* @__PURE__ */ Q($A);
var jd = BA;
function BA() {
  return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
}
const TA = /* @__PURE__ */ ee({
  __proto__: null,
  default: jd
}, [jd]), IA = /* @__PURE__ */ Q(TA), PA = IA, OA = gy;
var Hd = LA;
function LA(e) {
  return OA({
    id: PA(),
    jsonrpc: "2.0",
    params: []
  }, e);
}
const CA = /* @__PURE__ */ ee({
  __proto__: null,
  default: Hd
}, [Hd]), m0 = /* @__PURE__ */ Q(CA), Uy = Jr.EventEmitter, kA = hr.inherits, mt = ha, NA = p9, qA = iA, FA = dA, UA = yA, DA = m0, jA = function() {
};
kA(or, Uy);
function or(e) {
  const t = this;
  Uy.call(t), t.setMaxListeners(30), e = e || {};
  const r = { sendAsync: t._handleAsync.bind(t) }, n = e.blockTrackerProvider || r;
  t._blockTracker = e.blockTracker || new NA({
    provider: n,
    pollingInterval: e.pollingInterval || 4e3,
    setSkipCacheFlag: !0
  }), t._ready = new UA(), t.currentBlock = null, t._providers = [];
}
or.prototype.start = function(e = jA) {
  const t = this;
  t._ready.go(), t._blockTracker.on("latest", (r) => {
    t._getBlockByNumberWithRetry(r, (n, a) => {
      if (n) {
        this.emit("error", n);
        return;
      }
      if (!a) {
        console.log(a), this.emit("error", new Error("Could not find block"));
        return;
      }
      const i = HA(a);
      t._setCurrentBlock(i), t.emit("rawBlock", a), t.emit("latest", a);
    });
  }), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start");
};
or.prototype.stop = function() {
  const e = this;
  e._blockTracker.removeAllListeners(), e._running = !1, e.emit("stop");
};
or.prototype.isRunning = function() {
  return this._running;
};
or.prototype.addProvider = function(e, t) {
  const r = this;
  typeof t == "number" ? r._providers.splice(t, 0, e) : r._providers.push(e), e.setEngine(this);
};
or.prototype.removeProvider = function(e) {
  const t = this, r = t._providers.indexOf(e);
  if (r < 0)
    throw new Error("Provider not found.");
  t._providers.splice(r, 1);
};
or.prototype.send = function(e) {
  throw new Error("Web3ProviderEngine does not support synchronous requests.");
};
or.prototype.sendAsync = function(e, t) {
  const r = this;
  r._ready.await(function() {
    Array.isArray(e) ? qA(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t);
  });
};
or.prototype._getBlockByNumberWithRetry = function(e, t) {
  const r = this;
  let n = 5;
  a();
  return;
  function a() {
    r._getBlockByNumber(e, i);
  }
  function i(s, f) {
    if (s)
      return t(s);
    if (!f)
      if (n > 0) {
        n--, setTimeout(function() {
          a();
        }, 1e3);
        return;
      } else {
        t(null, null);
        return;
      }
    t(null, f);
  }
};
or.prototype._getBlockByNumber = function(e, t) {
  const r = DA({ method: "eth_getBlockByNumber", params: [e, !1], skipCache: !0 });
  this._handleAsync(r, (n, a) => n ? t(n) : t(null, a.result));
};
or.prototype._handleAsync = function(e, t) {
  var r = this, n = -1, a = null, i = null, s = [];
  f();
  function f(m) {
    if (n += 1, s.unshift(m), n >= r._providers.length)
      v(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
    else
      try {
        var _ = r._providers[n];
        _.handleRequest(e, f, v);
      } catch (O) {
        v(O);
      }
  }
  function v(m, _) {
    i = m, a = _, FA(s, function(O, P) {
      O ? O(i, a, P) : P();
    }, function() {
      var O = {
        id: e.id,
        jsonrpc: e.jsonrpc,
        result: a
      };
      i != null ? (O.error = {
        message: i.stack || i.message || i,
        code: -32e3
      }, t(i, O)) : t(null, O);
    });
  }
};
or.prototype._setCurrentBlock = function(e) {
  const t = this;
  t.currentBlock = e, t.emit("block", e);
};
function HA(e) {
  return {
    number: mt.toBuffer(e.number),
    hash: mt.toBuffer(e.hash),
    parentHash: mt.toBuffer(e.parentHash),
    nonce: mt.toBuffer(e.nonce),
    mixHash: mt.toBuffer(e.mixHash),
    sha3Uncles: mt.toBuffer(e.sha3Uncles),
    logsBloom: mt.toBuffer(e.logsBloom),
    transactionsRoot: mt.toBuffer(e.transactionsRoot),
    stateRoot: mt.toBuffer(e.stateRoot),
    receiptsRoot: mt.toBuffer(e.receiptRoot || e.receiptsRoot),
    miner: mt.toBuffer(e.miner),
    difficulty: mt.toBuffer(e.difficulty),
    totalDifficulty: mt.toBuffer(e.totalDifficulty),
    size: mt.toBuffer(e.size),
    extraData: mt.toBuffer(e.extraData),
    gasLimit: mt.toBuffer(e.gasLimit),
    gasUsed: mt.toBuffer(e.gasUsed),
    timestamp: mt.toBuffer(e.timestamp),
    transactions: e.transactions
  };
}
const zA = m0;
var zd = bi;
function bi() {
}
bi.prototype.setEngine = function(e) {
  const t = this;
  t.engine || (t.engine = e, e.on("block", function(r) {
    t.currentBlock = r;
  }), e.on("start", function() {
    t.start();
  }), e.on("stop", function() {
    t.stop();
  }));
};
bi.prototype.handleRequest = function(e, t, r) {
  throw new Error("Subproviders should override `handleRequest`.");
};
bi.prototype.emitPayload = function(e, t) {
  this.engine.sendAsync(zA(e), t);
};
bi.prototype.stop = function() {
};
bi.prototype.start = function() {
};
const KA = /* @__PURE__ */ ee({
  __proto__: null,
  default: zd
}, [zd]), w0 = /* @__PURE__ */ Q(KA), WA = hr.inherits, GA = w0;
WA(Dy, GA);
function Dy(e) {
  const t = this;
  e = e || {}, t.staticResponses = e;
}
Dy.prototype.handleRequest = function(e, t, r) {
  var a = this.staticResponses[e.method];
  typeof a == "function" ? a(e, t, r) : a !== void 0 ? setTimeout(() => r(null, a)) : t();
};
var x0 = {}, M0 = {}, E0 = { exports: {} };
(function(e) {
  var t, r, n, a, i, s, f, v, m, _, O, P, C, M, k, q, D, U, K, J, re, ue, ve, se, le;
  (function(V) {
    var g = typeof Ie == "object" ? Ie : typeof self == "object" ? self : typeof this == "object" ? this : {};
    V(l(g, l(e.exports)));
    function l(u, o) {
      return u !== g && (typeof Object.create == "function" ? Object.defineProperty(u, "__esModule", { value: !0 }) : u.__esModule = !0), function(c, y) {
        return u[c] = o ? o(c, y) : y;
      };
    }
  })(function(V) {
    var g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, o) {
      u.__proto__ = o;
    } || function(u, o) {
      for (var c in o)
        Object.prototype.hasOwnProperty.call(o, c) && (u[c] = o[c]);
    };
    t = function(u, o) {
      if (typeof o != "function" && o !== null)
        throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
      g(u, o);
      function c() {
        this.constructor = u;
      }
      u.prototype = o === null ? Object.create(o) : (c.prototype = o.prototype, new c());
    }, r = Object.assign || function(u) {
      for (var o, c = 1, y = arguments.length; c < y; c++) {
        o = arguments[c];
        for (var x in o)
          Object.prototype.hasOwnProperty.call(o, x) && (u[x] = o[x]);
      }
      return u;
    }, n = function(u, o) {
      var c = {};
      for (var y in u)
        Object.prototype.hasOwnProperty.call(u, y) && o.indexOf(y) < 0 && (c[y] = u[y]);
      if (u != null && typeof Object.getOwnPropertySymbols == "function")
        for (var x = 0, y = Object.getOwnPropertySymbols(u); x < y.length; x++)
          o.indexOf(y[x]) < 0 && Object.prototype.propertyIsEnumerable.call(u, y[x]) && (c[y[x]] = u[y[x]]);
      return c;
    }, a = function(u, o, c, y) {
      var x = arguments.length, b = x < 3 ? o : y === null ? y = Object.getOwnPropertyDescriptor(o, c) : y, h;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        b = Reflect.decorate(u, o, c, y);
      else
        for (var d = u.length - 1; d >= 0; d--)
          (h = u[d]) && (b = (x < 3 ? h(b) : x > 3 ? h(o, c, b) : h(o, c)) || b);
      return x > 3 && b && Object.defineProperty(o, c, b), b;
    }, i = function(u, o) {
      return function(c, y) {
        o(c, y, u);
      };
    }, s = function(u, o) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(u, o);
    }, f = function(u, o, c, y) {
      function x(b) {
        return b instanceof c ? b : new c(function(h) {
          h(b);
        });
      }
      return new (c || (c = Promise))(function(b, h) {
        function d(S) {
          try {
            p(y.next(S));
          } catch (G) {
            h(G);
          }
        }
        function w(S) {
          try {
            p(y.throw(S));
          } catch (G) {
            h(G);
          }
        }
        function p(S) {
          S.done ? b(S.value) : x(S.value).then(d, w);
        }
        p((y = y.apply(u, o || [])).next());
      });
    }, v = function(u, o) {
      var c = { label: 0, sent: function() {
        if (b[0] & 1)
          throw b[1];
        return b[1];
      }, trys: [], ops: [] }, y, x, b, h;
      return h = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
        return this;
      }), h;
      function d(p) {
        return function(S) {
          return w([p, S]);
        };
      }
      function w(p) {
        if (y)
          throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (y = 1, x && (b = p[0] & 2 ? x.return : p[0] ? x.throw || ((b = x.return) && b.call(x), 0) : x.next) && !(b = b.call(x, p[1])).done)
              return b;
            switch (x = 0, b && (p = [p[0] & 2, b.value]), p[0]) {
              case 0:
              case 1:
                b = p;
                break;
              case 4:
                return c.label++, { value: p[1], done: !1 };
              case 5:
                c.label++, x = p[1], p = [0];
                continue;
              case 7:
                p = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (b = c.trys, !(b = b.length > 0 && b[b.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                  c = 0;
                  continue;
                }
                if (p[0] === 3 && (!b || p[1] > b[0] && p[1] < b[3])) {
                  c.label = p[1];
                  break;
                }
                if (p[0] === 6 && c.label < b[1]) {
                  c.label = b[1], b = p;
                  break;
                }
                if (b && c.label < b[2]) {
                  c.label = b[2], c.ops.push(p);
                  break;
                }
                b[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            p = o.call(u, c);
          } catch (S) {
            p = [6, S], x = 0;
          } finally {
            y = b = 0;
          }
        if (p[0] & 5)
          throw p[1];
        return { value: p[0] ? p[1] : void 0, done: !0 };
      }
    }, m = function(u, o) {
      for (var c in u)
        c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && le(o, u, c);
    }, le = Object.create ? function(u, o, c, y) {
      y === void 0 && (y = c);
      var x = Object.getOwnPropertyDescriptor(o, c);
      (!x || ("get" in x ? !o.__esModule : x.writable || x.configurable)) && (x = { enumerable: !0, get: function() {
        return o[c];
      } }), Object.defineProperty(u, y, x);
    } : function(u, o, c, y) {
      y === void 0 && (y = c), u[y] = o[c];
    }, _ = function(u) {
      var o = typeof Symbol == "function" && Symbol.iterator, c = o && u[o], y = 0;
      if (c)
        return c.call(u);
      if (u && typeof u.length == "number")
        return {
          next: function() {
            return u && y >= u.length && (u = void 0), { value: u && u[y++], done: !u };
          }
        };
      throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, O = function(u, o) {
      var c = typeof Symbol == "function" && u[Symbol.iterator];
      if (!c)
        return u;
      var y = c.call(u), x, b = [], h;
      try {
        for (; (o === void 0 || o-- > 0) && !(x = y.next()).done; )
          b.push(x.value);
      } catch (d) {
        h = { error: d };
      } finally {
        try {
          x && !x.done && (c = y.return) && c.call(y);
        } finally {
          if (h)
            throw h.error;
        }
      }
      return b;
    }, P = function() {
      for (var u = [], o = 0; o < arguments.length; o++)
        u = u.concat(O(arguments[o]));
      return u;
    }, C = function() {
      for (var u = 0, o = 0, c = arguments.length; o < c; o++)
        u += arguments[o].length;
      for (var y = Array(u), x = 0, o = 0; o < c; o++)
        for (var b = arguments[o], h = 0, d = b.length; h < d; h++, x++)
          y[x] = b[h];
      return y;
    }, M = function(u, o, c) {
      if (c || arguments.length === 2)
        for (var y = 0, x = o.length, b; y < x; y++)
          (b || !(y in o)) && (b || (b = Array.prototype.slice.call(o, 0, y)), b[y] = o[y]);
      return u.concat(b || Array.prototype.slice.call(o));
    }, k = function(u) {
      return this instanceof k ? (this.v = u, this) : new k(u);
    }, q = function(u, o, c) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var y = c.apply(u, o || []), x, b = [];
      return x = {}, h("next"), h("throw"), h("return"), x[Symbol.asyncIterator] = function() {
        return this;
      }, x;
      function h(B) {
        y[B] && (x[B] = function(R) {
          return new Promise(function(N, H) {
            b.push([B, R, N, H]) > 1 || d(B, R);
          });
        });
      }
      function d(B, R) {
        try {
          w(y[B](R));
        } catch (N) {
          G(b[0][3], N);
        }
      }
      function w(B) {
        B.value instanceof k ? Promise.resolve(B.value.v).then(p, S) : G(b[0][2], B);
      }
      function p(B) {
        d("next", B);
      }
      function S(B) {
        d("throw", B);
      }
      function G(B, R) {
        B(R), b.shift(), b.length && d(b[0][0], b[0][1]);
      }
    }, D = function(u) {
      var o, c;
      return o = {}, y("next"), y("throw", function(x) {
        throw x;
      }), y("return"), o[Symbol.iterator] = function() {
        return this;
      }, o;
      function y(x, b) {
        o[x] = u[x] ? function(h) {
          return (c = !c) ? { value: k(u[x](h)), done: x === "return" } : b ? b(h) : h;
        } : b;
      }
    }, U = function(u) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var o = u[Symbol.asyncIterator], c;
      return o ? o.call(u) : (u = typeof _ == "function" ? _(u) : u[Symbol.iterator](), c = {}, y("next"), y("throw"), y("return"), c[Symbol.asyncIterator] = function() {
        return this;
      }, c);
      function y(b) {
        c[b] = u[b] && function(h) {
          return new Promise(function(d, w) {
            h = u[b](h), x(d, w, h.done, h.value);
          });
        };
      }
      function x(b, h, d, w) {
        Promise.resolve(w).then(function(p) {
          b({ value: p, done: d });
        }, h);
      }
    }, K = function(u, o) {
      return Object.defineProperty ? Object.defineProperty(u, "raw", { value: o }) : u.raw = o, u;
    };
    var l = Object.create ? function(u, o) {
      Object.defineProperty(u, "default", { enumerable: !0, value: o });
    } : function(u, o) {
      u.default = o;
    };
    J = function(u) {
      if (u && u.__esModule)
        return u;
      var o = {};
      if (u != null)
        for (var c in u)
          c !== "default" && Object.prototype.hasOwnProperty.call(u, c) && le(o, u, c);
      return l(o, u), o;
    }, re = function(u) {
      return u && u.__esModule ? u : { default: u };
    }, ue = function(u, o, c, y) {
      if (c === "a" && !y)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof o == "function" ? u !== o || !y : !o.has(u))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return c === "m" ? y : c === "a" ? y.call(u) : y ? y.value : o.get(u);
    }, ve = function(u, o, c, y, x) {
      if (y === "m")
        throw new TypeError("Private method is not writable");
      if (y === "a" && !x)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof o == "function" ? u !== o || !x : !o.has(u))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return y === "a" ? x.call(u, c) : x ? x.value = c : o.set(u, c), c;
    }, se = function(u, o) {
      if (o === null || typeof o != "object" && typeof o != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof u == "function" ? o === u : u.has(o);
    }, V("__extends", t), V("__assign", r), V("__rest", n), V("__decorate", a), V("__param", i), V("__metadata", s), V("__awaiter", f), V("__generator", v), V("__exportStar", m), V("__createBinding", le), V("__values", _), V("__read", O), V("__spread", P), V("__spreadArrays", C), V("__spreadArray", M), V("__await", k), V("__asyncGenerator", q), V("__asyncDelegator", D), V("__asyncValues", U), V("__makeTemplateObject", K), V("__importStar", J), V("__importDefault", re), V("__classPrivateFieldGet", ue), V("__classPrivateFieldSet", ve), V("__classPrivateFieldIn", se);
  });
})(E0);
const VA = /* @__PURE__ */ Qe(E0.exports), ZA = /* @__PURE__ */ ee({
  __proto__: null,
  default: VA
}, [E0.exports]), S0 = /* @__PURE__ */ Q(ZA);
var A0 = {};
Object.defineProperty(A0, "__esModule", { value: !0 });
var Kd = S0, JA = function() {
  function e(t) {
    if (this._maxConcurrency = t, this._queue = [], t <= 0)
      throw new Error("semaphore must be initialized to a positive value");
    this._value = t;
  }
  return e.prototype.acquire = function() {
    var t = this, r = this.isLocked(), n = new Promise(function(a) {
      return t._queue.push(a);
    });
    return r || this._dispatch(), n;
  }, e.prototype.runExclusive = function(t) {
    return Kd.__awaiter(this, void 0, void 0, function() {
      var r, n, a;
      return Kd.__generator(this, function(i) {
        switch (i.label) {
          case 0:
            return [4, this.acquire()];
          case 1:
            r = i.sent(), n = r[0], a = r[1], i.label = 2;
          case 2:
            return i.trys.push([2, , 4, 5]), [4, t(n)];
          case 3:
            return [2, i.sent()];
          case 4:
            return a(), [7];
          case 5:
            return [2];
        }
      });
    });
  }, e.prototype.isLocked = function() {
    return this._value <= 0;
  }, e.prototype.release = function() {
    if (this._maxConcurrency > 1)
      throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
    if (this._currentReleaser) {
      var t = this._currentReleaser;
      this._currentReleaser = void 0, t();
    }
  }, e.prototype._dispatch = function() {
    var t = this, r = this._queue.shift();
    if (!!r) {
      var n = !1;
      this._currentReleaser = function() {
        n || (n = !0, t._value++, t._dispatch());
      }, r([this._value--, this._currentReleaser]);
    }
  }, e;
}(), YA = A0.default = JA;
const XA = /* @__PURE__ */ ee({
  __proto__: null,
  default: YA
}, [A0]), jy = /* @__PURE__ */ Q(XA);
Object.defineProperty(M0, "__esModule", { value: !0 });
var Wd = S0, QA = jy, e$ = function() {
  function e() {
    this._semaphore = new QA.default(1);
  }
  return e.prototype.acquire = function() {
    return Wd.__awaiter(this, void 0, void 0, function() {
      var t, r;
      return Wd.__generator(this, function(n) {
        switch (n.label) {
          case 0:
            return [4, this._semaphore.acquire()];
          case 1:
            return t = n.sent(), r = t[1], [2, r];
        }
      });
    });
  }, e.prototype.runExclusive = function(t) {
    return this._semaphore.runExclusive(function() {
      return t();
    });
  }, e.prototype.isLocked = function() {
    return this._semaphore.isLocked();
  }, e.prototype.release = function() {
    this._semaphore.release();
  }, e;
}(), t$ = M0.default = e$;
const r$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: t$
}, [M0]), n$ = /* @__PURE__ */ Q(r$);
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
var Hy = Hi.withTimeout = void 0, Ma = S0;
function i$(e, t, r) {
  var n = this;
  return r === void 0 && (r = new Error("timeout")), {
    acquire: function() {
      return new Promise(function(a, i) {
        return Ma.__awaiter(n, void 0, void 0, function() {
          var s, f, v;
          return Ma.__generator(this, function(m) {
            switch (m.label) {
              case 0:
                return s = !1, setTimeout(function() {
                  s = !0, i(r);
                }, t), [4, e.acquire()];
              case 1:
                return f = m.sent(), s ? (v = Array.isArray(f) ? f[1] : f, v()) : a(f), [2];
            }
          });
        });
      });
    },
    runExclusive: function(a) {
      return Ma.__awaiter(this, void 0, void 0, function() {
        var i, s;
        return Ma.__generator(this, function(f) {
          switch (f.label) {
            case 0:
              i = function() {
              }, f.label = 1;
            case 1:
              return f.trys.push([1, , 7, 8]), [4, this.acquire()];
            case 2:
              return s = f.sent(), Array.isArray(s) ? (i = s[1], [4, a(s[0])]) : [3, 4];
            case 3:
              return [2, f.sent()];
            case 4:
              return i = s, [4, a()];
            case 5:
              return [2, f.sent()];
            case 6:
              return [3, 8];
            case 7:
              return i(), [7];
            case 8:
              return [2];
          }
        });
      });
    },
    release: function() {
      e.release();
    },
    isLocked: function() {
      return e.isLocked();
    }
  };
}
Hy = Hi.withTimeout = i$;
const a$ = /* @__PURE__ */ ee({
  __proto__: null,
  get withTimeout() {
    return Hy;
  },
  default: Hi
}, [Hi]), o$ = /* @__PURE__ */ Q(a$);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.withTimeout = e.Semaphore = e.Mutex = void 0;
  var t = n$;
  Object.defineProperty(e, "Mutex", { enumerable: !0, get: function() {
    return t.default;
  } });
  var r = jy;
  Object.defineProperty(e, "Semaphore", { enumerable: !0, get: function() {
    return r.default;
  } });
  var n = o$;
  Object.defineProperty(e, "withTimeout", { enumerable: !0, get: function() {
    return n.withTimeout;
  } });
})(x0);
const f$ = /* @__PURE__ */ Qe(x0), s$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: f$
}, [x0]), u$ = /* @__PURE__ */ Q(s$);
var c$ = {}, zi = {}, Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
var zy = Ki.getUniqueId = void 0;
const Ky = 4294967295;
let $s = Math.floor(Math.random() * Ky);
function l$() {
  return $s = ($s + 1) % Ky, $s;
}
zy = Ki.getUniqueId = l$;
const h$ = /* @__PURE__ */ ee({
  __proto__: null,
  get getUniqueId() {
    return zy;
  },
  default: Ki
}, [Ki]), Wy = /* @__PURE__ */ Q(h$);
Object.defineProperty(zi, "__esModule", { value: !0 });
var Gy = zi.createIdRemapMiddleware = void 0;
const d$ = Wy;
function p$() {
  return (e, t, r, n) => {
    const a = e.id, i = d$.getUniqueId();
    e.id = i, t.id = i, r((s) => {
      e.id = a, t.id = a, s();
    });
  };
}
Gy = zi.createIdRemapMiddleware = p$;
const v$ = /* @__PURE__ */ ee({
  __proto__: null,
  get createIdRemapMiddleware() {
    return Gy;
  },
  default: zi
}, [zi]), y$ = /* @__PURE__ */ Q(v$);
var Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
var Vy = Wi.createAsyncMiddleware = void 0;
function g$(e) {
  return async (t, r, n, a) => {
    let i;
    const s = new Promise((_) => {
      i = _;
    });
    let f = null, v = !1;
    const m = async () => {
      v = !0, n((_) => {
        f = _, i();
      }), await s;
    };
    try {
      await e(t, r, m), v ? (await s, f(null)) : a(null);
    } catch (_) {
      f ? f(_) : a(_);
    }
  };
}
Vy = Wi.createAsyncMiddleware = g$;
const b$ = /* @__PURE__ */ ee({
  __proto__: null,
  get createAsyncMiddleware() {
    return Vy;
  },
  default: Wi
}, [Wi]), _$ = /* @__PURE__ */ Q(b$);
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
var Zy = Gi.createScaffoldMiddleware = void 0;
function m$(e) {
  return (t, r, n, a) => {
    const i = e[t.method];
    return i === void 0 ? n() : typeof i == "function" ? i(t, r, n, a) : (r.result = i, a());
  };
}
Zy = Gi.createScaffoldMiddleware = m$;
const w$ = /* @__PURE__ */ ee({
  __proto__: null,
  get createScaffoldMiddleware() {
    return Zy;
  },
  default: Gi
}, [Gi]), x$ = /* @__PURE__ */ Q(w$);
var Vi = {}, $0 = {};
Object.defineProperty($0, "__esModule", { value: !0 });
const M$ = Jr;
function Gd(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function E$(e) {
  const t = e.length, r = new Array(t);
  for (let n = 0; n < t; n += 1)
    r[n] = e[n];
  return r;
}
class S$ extends M$.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const a = this._events;
    if (a !== void 0)
      n = n && a.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let s;
      if (r.length > 0 && ([s] = r), s instanceof Error)
        throw s;
      const f = new Error(`Unhandled error.${s ? ` (${s.message})` : ""}`);
      throw f.context = s, f;
    }
    const i = a[t];
    if (i === void 0)
      return !1;
    if (typeof i == "function")
      Gd(i, this, r);
    else {
      const s = i.length, f = E$(i);
      for (let v = 0; v < s; v += 1)
        Gd(f[v], this, r);
    }
    return !0;
  }
}
var A$ = $0.default = S$;
const $$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: A$
}, [$0]), R0 = /* @__PURE__ */ Q($$);
var B0 = {}, _n = {}, Vd = Zi;
Zi.default = Zi;
Zi.stable = Xy;
Zi.stableStringify = Xy;
var Mo = "[...]", Jy = "[Circular]", mn = [], sn = [];
function Yy() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function Zi(e, t, r, n) {
  typeof n > "u" && (n = Yy()), pu(e, "", 0, [], void 0, 0, n);
  var a;
  try {
    sn.length === 0 ? a = JSON.stringify(e, t, r) : a = JSON.stringify(e, Qy(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; mn.length !== 0; ) {
      var i = mn.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2];
    }
  }
  return a;
}
function Hn(e, t, r, n) {
  var a = Object.getOwnPropertyDescriptor(n, r);
  a.get !== void 0 ? a.configurable ? (Object.defineProperty(n, r, { value: e }), mn.push([n, r, t, a])) : sn.push([t, r, e]) : (n[r] = e, mn.push([n, r, t]));
}
function pu(e, t, r, n, a, i, s) {
  i += 1;
  var f;
  if (typeof e == "object" && e !== null) {
    for (f = 0; f < n.length; f++)
      if (n[f] === e) {
        Hn(Jy, e, t, a);
        return;
      }
    if (typeof s.depthLimit < "u" && i > s.depthLimit) {
      Hn(Mo, e, t, a);
      return;
    }
    if (typeof s.edgesLimit < "u" && r + 1 > s.edgesLimit) {
      Hn(Mo, e, t, a);
      return;
    }
    if (n.push(e), Array.isArray(e))
      for (f = 0; f < e.length; f++)
        pu(e[f], f, f, n, e, i, s);
    else {
      var v = Object.keys(e);
      for (f = 0; f < v.length; f++) {
        var m = v[f];
        pu(e[m], m, f, n, e, i, s);
      }
    }
    n.pop();
  }
}
function R$(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Xy(e, t, r, n) {
  typeof n > "u" && (n = Yy());
  var a = vu(e, "", 0, [], void 0, 0, n) || e, i;
  try {
    sn.length === 0 ? i = JSON.stringify(a, t, r) : i = JSON.stringify(a, Qy(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; mn.length !== 0; ) {
      var s = mn.pop();
      s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
    }
  }
  return i;
}
function vu(e, t, r, n, a, i, s) {
  i += 1;
  var f;
  if (typeof e == "object" && e !== null) {
    for (f = 0; f < n.length; f++)
      if (n[f] === e) {
        Hn(Jy, e, t, a);
        return;
      }
    try {
      if (typeof e.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof s.depthLimit < "u" && i > s.depthLimit) {
      Hn(Mo, e, t, a);
      return;
    }
    if (typeof s.edgesLimit < "u" && r + 1 > s.edgesLimit) {
      Hn(Mo, e, t, a);
      return;
    }
    if (n.push(e), Array.isArray(e))
      for (f = 0; f < e.length; f++)
        vu(e[f], f, f, n, e, i, s);
    else {
      var v = {}, m = Object.keys(e).sort(R$);
      for (f = 0; f < m.length; f++) {
        var _ = m[f];
        vu(e[_], _, f, n, e, i, s), v[_] = e[_];
      }
      if (typeof a < "u")
        mn.push([a, t, e]), a[t] = v;
      else
        return v;
    }
    n.pop();
  }
}
function Qy(e) {
  return e = typeof e < "u" ? e : function(t, r) {
    return r;
  }, function(t, r) {
    if (sn.length > 0)
      for (var n = 0; n < sn.length; n++) {
        var a = sn[n];
        if (a[1] === t && a[0] === r) {
          r = a[2], sn.splice(n, 1);
          break;
        }
      }
    return e.call(this, t, r);
  };
}
const B$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Vd
}, [Vd]), T$ = /* @__PURE__ */ Q(B$);
Object.defineProperty(_n, "__esModule", { value: !0 });
var e2 = _n.EthereumProviderError = r2 = _n.EthereumRpcError = void 0;
const I$ = T$;
class t2 extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = t, n !== void 0 && (this.data = n);
  }
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data), this.stack && (t.stack = this.stack), t;
  }
  toString() {
    return I$.default(this.serialize(), L$, 2);
  }
}
var r2 = _n.EthereumRpcError = t2;
class P$ extends t2 {
  constructor(t, r, n) {
    if (!O$(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, r, n);
  }
}
e2 = _n.EthereumProviderError = P$;
function O$(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function L$(e, t) {
  if (t !== "[Circular]")
    return t;
}
const C$ = /* @__PURE__ */ ee({
  __proto__: null,
  get EthereumProviderError() {
    return e2;
  },
  get EthereumRpcError() {
    return r2;
  },
  default: _n
}, [_n]), T0 = /* @__PURE__ */ Q(C$);
var I0 = {}, wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
var n2 = wn.errorValues = i2 = wn.errorCodes = void 0, i2 = wn.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
n2 = wn.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
const k$ = /* @__PURE__ */ ee({
  __proto__: null,
  get errorValues() {
    return n2;
  },
  get errorCodes() {
    return i2;
  },
  default: wn
}, [wn]), P0 = /* @__PURE__ */ Q(k$);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t = P0, r = T0, n = t.errorCodes.rpc.internal, a = "Unspecified error message. This is a bug, please report it.", i = {
    code: n,
    message: s(n)
  };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function s(P, C = a) {
    if (Number.isInteger(P)) {
      const M = P.toString();
      if (O(t.errorValues, M))
        return t.errorValues[M].message;
      if (m(P))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return C;
  }
  e.getMessageFromCode = s;
  function f(P) {
    if (!Number.isInteger(P))
      return !1;
    const C = P.toString();
    return !!(t.errorValues[C] || m(P));
  }
  e.isValidCode = f;
  function v(P, { fallbackError: C = i, shouldIncludeStack: M = !1 } = {}) {
    var k, q;
    if (!C || !Number.isInteger(C.code) || typeof C.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (P instanceof r.EthereumRpcError)
      return P.serialize();
    const D = {};
    if (P && typeof P == "object" && !Array.isArray(P) && O(P, "code") && f(P.code)) {
      const K = P;
      D.code = K.code, K.message && typeof K.message == "string" ? (D.message = K.message, O(K, "data") && (D.data = K.data)) : (D.message = s(D.code), D.data = { originalError: _(P) });
    } else {
      D.code = C.code;
      const K = (k = P) === null || k === void 0 ? void 0 : k.message;
      D.message = K && typeof K == "string" ? K : C.message, D.data = { originalError: _(P) };
    }
    const U = (q = P) === null || q === void 0 ? void 0 : q.stack;
    return M && P && U && typeof U == "string" && (D.stack = U), D;
  }
  e.serializeError = v;
  function m(P) {
    return P >= -32099 && P <= -32e3;
  }
  function _(P) {
    return P && typeof P == "object" && !Array.isArray(P) ? Object.assign({}, P) : P;
  }
  function O(P, C) {
    return Object.prototype.hasOwnProperty.call(P, C);
  }
})(I0);
const N$ = /* @__PURE__ */ Qe(I0), q$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: N$
}, [I0]), a2 = /* @__PURE__ */ Q(q$);
var Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
var o2 = Ji.ethErrors = void 0;
const O0 = T0, f2 = a2, It = P0;
o2 = Ji.ethErrors = {
  rpc: {
    parse: (e) => Vt(It.errorCodes.rpc.parse, e),
    invalidRequest: (e) => Vt(It.errorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => Vt(It.errorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => Vt(It.errorCodes.rpc.methodNotFound, e),
    internal: (e) => Vt(It.errorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return Vt(t, e);
    },
    invalidInput: (e) => Vt(It.errorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => Vt(It.errorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => Vt(It.errorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => Vt(It.errorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => Vt(It.errorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => Vt(It.errorCodes.rpc.limitExceeded, e)
  },
  provider: {
    userRejectedRequest: (e) => Ti(It.errorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => Ti(It.errorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => Ti(It.errorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => Ti(It.errorCodes.provider.disconnected, e),
    chainDisconnected: (e) => Ti(It.errorCodes.provider.chainDisconnected, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new O0.EthereumProviderError(t, r, n);
    }
  }
};
function Vt(e, t) {
  const [r, n] = s2(t);
  return new O0.EthereumRpcError(e, r || f2.getMessageFromCode(e), n);
}
function Ti(e, t) {
  const [r, n] = s2(t);
  return new O0.EthereumProviderError(e, r || f2.getMessageFromCode(e), n);
}
function s2(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
const F$ = /* @__PURE__ */ ee({
  __proto__: null,
  get ethErrors() {
    return o2;
  },
  default: Ji
}, [Ji]), U$ = /* @__PURE__ */ Q(F$);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
  const t = T0;
  Object.defineProperty(e, "EthereumRpcError", { enumerable: !0, get: function() {
    return t.EthereumRpcError;
  } }), Object.defineProperty(e, "EthereumProviderError", { enumerable: !0, get: function() {
    return t.EthereumProviderError;
  } });
  const r = a2;
  Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = U$;
  Object.defineProperty(e, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const a = P0;
  Object.defineProperty(e, "errorCodes", { enumerable: !0, get: function() {
    return a.errorCodes;
  } });
})(B0);
const D$ = /* @__PURE__ */ Qe(B0), j$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: D$
}, [B0]), H$ = /* @__PURE__ */ Q(j$);
var z$ = Ie && Ie.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Vi, "__esModule", { value: !0 });
var u2 = Vi.JsonRpcEngine = void 0;
const K$ = z$(R0), Zt = H$;
class Tr extends K$.default {
  constructor() {
    super(), this._middleware = [];
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, r, n, a) => {
      try {
        const [i, s, f] = await Tr._runAllMiddleware(t, r, this._middleware);
        return s ? (await Tr._runReturnHandlers(f), a(i)) : n(async (v) => {
          try {
            await Tr._runReturnHandlers(f);
          } catch (m) {
            return v(m);
          }
          return v();
        });
      } catch (i) {
        return a(i);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const n = await Promise.all(
        t.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, n) : n;
    } catch (n) {
      if (r)
        return r(n);
      throw n;
    }
  }
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (n, a) => {
        r(a);
      });
    });
  }
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const s = new Zt.EthereumRpcError(Zt.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof t}`, { request: t });
      return r(s, { id: void 0, jsonrpc: "2.0", error: s });
    }
    if (typeof t.method != "string") {
      const s = new Zt.EthereumRpcError(Zt.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof t.method}`, { request: t });
      return r(s, { id: t.id, jsonrpc: "2.0", error: s });
    }
    const n = Object.assign({}, t), a = {
      id: n.id,
      jsonrpc: n.jsonrpc
    };
    let i = null;
    try {
      await this._processRequest(n, a);
    } catch (s) {
      i = s;
    }
    return i && (delete a.result, a.error || (a.error = Zt.serializeError(i))), r(i, a);
  }
  async _processRequest(t, r) {
    const [n, a, i] = await Tr._runAllMiddleware(t, r, this._middleware);
    if (Tr._checkForCompletion(t, r, a), await Tr._runReturnHandlers(i), n)
      throw n;
  }
  static async _runAllMiddleware(t, r, n) {
    const a = [];
    let i = null, s = !1;
    for (const f of n)
      if ([i, s] = await Tr._runMiddleware(t, r, f, a), s)
        break;
    return [i, s, a.reverse()];
  }
  static _runMiddleware(t, r, n, a) {
    return new Promise((i) => {
      const s = (v) => {
        const m = v || r.error;
        m && (r.error = Zt.serializeError(m)), i([m, !0]);
      }, f = (v) => {
        r.error ? s(r.error) : (v && (typeof v != "function" && s(new Zt.EthereumRpcError(Zt.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof v}" for request:
${Rs(t)}`, { request: t })), a.push(v)), i([null, !1]));
      };
      try {
        n(t, r, f, s);
      } catch (v) {
        s(v);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((n, a) => {
        r((i) => i ? a(i) : n());
      });
  }
  static _checkForCompletion(t, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new Zt.EthereumRpcError(Zt.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${Rs(t)}`, { request: t });
    if (!n)
      throw new Zt.EthereumRpcError(Zt.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${Rs(t)}`, { request: t });
  }
}
u2 = Vi.JsonRpcEngine = Tr;
function Rs(e) {
  return JSON.stringify(e, null, 2);
}
const W$ = /* @__PURE__ */ ee({
  __proto__: null,
  get JsonRpcEngine() {
    return u2;
  },
  default: Vi
}, [Vi]), c2 = /* @__PURE__ */ Q(W$);
var Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
var l2 = Yi.mergeMiddleware = void 0;
const G$ = c2;
function V$(e) {
  const t = new G$.JsonRpcEngine();
  return e.forEach((r) => t.push(r)), t.asMiddleware();
}
l2 = Yi.mergeMiddleware = V$;
const Z$ = /* @__PURE__ */ ee({
  __proto__: null,
  get mergeMiddleware() {
    return l2;
  },
  default: Yi
}, [Yi]), J$ = /* @__PURE__ */ Q(Z$);
(function(e) {
  var t = Ie && Ie.__createBinding || (Object.create ? function(n, a, i, s) {
    s === void 0 && (s = i), Object.defineProperty(n, s, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(n, a, i, s) {
    s === void 0 && (s = i), n[s] = a[i];
  }), r = Ie && Ie.__exportStar || function(n, a) {
    for (var i in n)
      i !== "default" && !Object.prototype.hasOwnProperty.call(a, i) && t(a, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(y$, e), r(_$, e), r(x$, e), r(Wy, e), r(c2, e), r(J$, e);
})(c$);
var Y$ = { exports: {} }, Zd = function(t) {
  return (r, n, a, i) => {
    const s = t[r.method];
    return s === void 0 ? a() : typeof s == "function" ? s(r, n, a, i) : (n.result = s, i());
  };
};
const X$ = /* @__PURE__ */ ee({
  __proto__: null,
  default: Zd
}, [Zd]), Q$ = /* @__PURE__ */ Q(X$);
(function(e) {
  e.exports = Q$;
})(Y$);
R0.default;
u$.Mutex;
var Eo = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(k, q) {
    if (q = (0, f.default)(q || i.default), !(0, n.default)(k))
      return q(new Error("First argument to waterfall must be an array of functions"));
    if (!k.length)
      return q();
    var D = 0;
    function U(J) {
      var re = (0, C.default)(k[D++]);
      J.push((0, O.default)(K)), re.apply(null, J);
    }
    function K(J) {
      if (J || D === k.length)
        return q.apply(null, arguments);
      U((0, m.default)(arguments, 1));
    }
    U([]);
  };
  var r = $y, n = M(r), a = da, i = M(a), s = v0, f = M(s), v = vf, m = M(v), _ = g0, O = M(_), P = Rn, C = M(P);
  function M(k) {
    return k && k.__esModule ? k : { default: k };
  }
  e.exports = t.default;
})(Eo, Eo.exports);
const eR = /* @__PURE__ */ Qe(Eo.exports), tR = /* @__PURE__ */ ee({
  __proto__: null,
  default: eR
}, [Eo.exports]), rR = /* @__PURE__ */ Q(tR);
var So = { exports: {} }, Ao = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = O;
  var r = da, n = _(r), a = pf, i = _(a), s = vf, f = _(s), v = Rn, m = _(v);
  function _(P) {
    return P && P.__esModule ? P : { default: P };
  }
  function O(P, C, M) {
    M = M || n.default;
    var k = (0, i.default)(C) ? [] : {};
    P(C, function(q, D, U) {
      (0, m.default)(q)(function(K, J) {
        arguments.length > 2 && (J = (0, f.default)(arguments, 1)), k[D] = J, U(K);
      });
    }, function(q) {
      M(q, k);
    });
  }
  e.exports = t.default;
})(Ao, Ao.exports);
const nR = /* @__PURE__ */ Qe(Ao.exports), iR = /* @__PURE__ */ ee({
  __proto__: null,
  default: nR
}, [Ao.exports]), aR = /* @__PURE__ */ Q(iR);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var r = Cy, n = s(r), a = aR, i = s(a);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function f(v, m) {
    (0, i.default)(n.default, v, m);
  }
  e.exports = t.default;
})(So, So.exports);
const oR = /* @__PURE__ */ Qe(So.exports), fR = /* @__PURE__ */ ee({
  __proto__: null,
  default: oR
}, [So.exports]), sR = /* @__PURE__ */ Q(fR);
var L0 = { exports: {} }, C0 = {}, k0 = {}, xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
var un = Mt, uR = f0.ec, N0 = new uR("secp256k1"), ei = N0.curve, cR = xn.privateKeyExport = function(e, t) {
  t === void 0 && (t = !0);
  var r = new un(e);
  if (r.ucmp(ei.n) >= 0)
    throw new Error("couldn't export to DER format");
  var n = N0.g.mul(r);
  return h2(n.getX(), n.getY(), t);
}, lR = xn.privateKeyModInverse = function(e) {
  var t = new un(e);
  if (t.ucmp(ei.n) >= 0 || t.isZero())
    throw new Error("private key range is invalid");
  return t.invm(ei.n).toArrayLike(Buffer, "be", 32);
}, hR = xn.signatureImport = function(e) {
  var t = new un(e.r);
  t.ucmp(ei.n) >= 0 && (t = new un(0));
  var r = new un(e.s);
  return r.ucmp(ei.n) >= 0 && (r = new un(0)), Buffer.concat([t.toArrayLike(Buffer, "be", 32), r.toArrayLike(Buffer, "be", 32)]);
}, dR = xn.ecdhUnsafe = function(e, t, r) {
  r === void 0 && (r = !0);
  var n = N0.keyFromPublic(e), a = new un(t);
  if (a.ucmp(ei.n) >= 0 || a.isZero())
    throw new Error("scalar was invalid (zero or overflow)");
  var i = n.pub.mul(a);
  return h2(i.getX(), i.getY(), r);
}, h2 = function(e, t, r) {
  var n;
  return r ? (n = Buffer.alloc(33), n[0] = t.isOdd() ? 3 : 2, e.toArrayLike(Buffer, "be", 32).copy(n, 1)) : (n = Buffer.alloc(65), n[0] = 4, e.toArrayLike(Buffer, "be", 32).copy(n, 1), t.toArrayLike(Buffer, "be", 32).copy(n, 33)), n;
};
const pR = /* @__PURE__ */ ee({
  __proto__: null,
  privateKeyExport: cR,
  privateKeyModInverse: lR,
  signatureImport: hR,
  ecdhUnsafe: dR,
  default: xn
}, [xn]), vR = /* @__PURE__ */ Q(pR);
var ti = {};
Object.defineProperty(ti, "__esModule", { value: !0 });
var yR = Buffer.from([
  48,
  129,
  211,
  2,
  1,
  1,
  4,
  32,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  160,
  129,
  133,
  48,
  129,
  130,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  33,
  2,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  36,
  3,
  34,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), gR = Buffer.from([
  48,
  130,
  1,
  19,
  2,
  1,
  1,
  4,
  32,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  160,
  129,
  165,
  48,
  129,
  162,
  2,
  1,
  1,
  48,
  44,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  1,
  1,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  255,
  255,
  252,
  47,
  48,
  6,
  4,
  1,
  0,
  4,
  1,
  7,
  4,
  65,
  4,
  121,
  190,
  102,
  126,
  249,
  220,
  187,
  172,
  85,
  160,
  98,
  149,
  206,
  135,
  11,
  7,
  2,
  155,
  252,
  219,
  45,
  206,
  40,
  217,
  89,
  242,
  129,
  91,
  22,
  248,
  23,
  152,
  72,
  58,
  218,
  119,
  38,
  163,
  196,
  101,
  93,
  164,
  251,
  252,
  14,
  17,
  8,
  168,
  253,
  23,
  180,
  72,
  166,
  133,
  84,
  25,
  156,
  71,
  208,
  143,
  251,
  16,
  212,
  184,
  2,
  33,
  0,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  255,
  254,
  186,
  174,
  220,
  230,
  175,
  72,
  160,
  59,
  191,
  210,
  94,
  140,
  208,
  54,
  65,
  65,
  2,
  1,
  1,
  161,
  68,
  3,
  66,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]), bR = ti.privateKeyExport = function(e, t, r) {
  r === void 0 && (r = !0);
  var n = Buffer.from(r ? yR : gR);
  return e.copy(n, r ? 8 : 9), t.copy(n, r ? 181 : 214), n;
}, _R = ti.privateKeyImport = function(e) {
  var t = e.length, r = 0;
  if (t < r + 1 || e[r] !== 48 || (r += 1, t < r + 1 || !(e[r] & 128)))
    return null;
  var n = e[r] & 127;
  if (r += 1, n < 1 || n > 2 || t < r + n)
    return null;
  var a = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
  return r += n, t < r + a || t < r + 3 || e[r] !== 2 || e[r + 1] !== 1 || e[r + 2] !== 1 || (r += 3, t < r + 2 || e[r] !== 4 || e[r + 1] > 32 || t < r + 2 + e[r + 1]) ? null : e.slice(r + 2, r + 2 + e[r + 1]);
}, mR = ti.signatureImportLax = function(e) {
  var t = Buffer.alloc(32, 0), r = Buffer.alloc(32, 0), n = e.length, a = 0;
  if (e[a++] !== 48)
    return null;
  var i = e[a++];
  if (i & 128 && (a += i - 128, a > n) || e[a++] !== 2)
    return null;
  var s = e[a++];
  if (s & 128) {
    if (i = s - 128, a + i > n)
      return null;
    for (; i > 0 && e[a] === 0; a += 1, i -= 1)
      ;
    for (s = 0; i > 0; a += 1, i -= 1)
      s = (s << 8) + e[a];
  }
  if (s > n - a)
    return null;
  var f = a;
  if (a += s, e[a++] !== 2)
    return null;
  var v = e[a++];
  if (v & 128) {
    if (i = v - 128, a + i > n)
      return null;
    for (; i > 0 && e[a] === 0; a += 1, i -= 1)
      ;
    for (v = 0; i > 0; a += 1, i -= 1)
      v = (v << 8) + e[a];
  }
  if (v > n - a)
    return null;
  var m = a;
  for (a += v; s > 0 && e[f] === 0; s -= 1, f += 1)
    ;
  if (s > 32)
    return null;
  var _ = e.slice(f, f + s);
  for (_.copy(t, 32 - _.length); v > 0 && e[m] === 0; v -= 1, m += 1)
    ;
  if (v > 32)
    return null;
  var O = e.slice(m, m + v);
  return O.copy(r, 32 - O.length), { r: t, s: r };
};
const wR = /* @__PURE__ */ ee({
  __proto__: null,
  privateKeyExport: bR,
  privateKeyImport: _R,
  signatureImportLax: mR,
  default: ti
}, [ti]), xR = /* @__PURE__ */ Q(wR);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ecdhUnsafe = e.ecdh = e.recover = e.verify = e.sign = e.signatureImportLax = e.signatureImport = e.signatureExport = e.signatureNormalize = e.publicKeyCombine = e.publicKeyTweakMul = e.publicKeyTweakAdd = e.publicKeyVerify = e.publicKeyConvert = e.publicKeyCreate = e.privateKeyTweakMul = e.privateKeyTweakAdd = e.privateKeyModInverse = e.privateKeyNegate = e.privateKeyImport = e.privateKeyExport = e.privateKeyVerify = void 0;
  var t = Rv, r = vR, n = xR;
  e.privateKeyVerify = function(a) {
    return a.length !== 32 ? !1 : t.privateKeyVerify(Uint8Array.from(a));
  }, e.privateKeyExport = function(a, i) {
    if (a.length !== 32)
      throw new RangeError("private key length is invalid");
    var s = r.privateKeyExport(a, i);
    return n.privateKeyExport(a, s, i);
  }, e.privateKeyImport = function(a) {
    if (a = n.privateKeyImport(a), a !== null && a.length === 32 && e.privateKeyVerify(a))
      return a;
    throw new Error("couldn't import from DER format");
  }, e.privateKeyNegate = function(a) {
    return Buffer.from(t.privateKeyNegate(Uint8Array.from(a)));
  }, e.privateKeyModInverse = function(a) {
    if (a.length !== 32)
      throw new Error("private key length is invalid");
    return Buffer.from(r.privateKeyModInverse(Uint8Array.from(a)));
  }, e.privateKeyTweakAdd = function(a, i) {
    return Buffer.from(t.privateKeyTweakAdd(Uint8Array.from(a), i));
  }, e.privateKeyTweakMul = function(a, i) {
    return Buffer.from(t.privateKeyTweakMul(Uint8Array.from(a), Uint8Array.from(i)));
  }, e.publicKeyCreate = function(a, i) {
    return Buffer.from(t.publicKeyCreate(Uint8Array.from(a), i));
  }, e.publicKeyConvert = function(a, i) {
    return Buffer.from(t.publicKeyConvert(Uint8Array.from(a), i));
  }, e.publicKeyVerify = function(a) {
    return a.length !== 33 && a.length !== 65 ? !1 : t.publicKeyVerify(Uint8Array.from(a));
  }, e.publicKeyTweakAdd = function(a, i, s) {
    return Buffer.from(t.publicKeyTweakAdd(Uint8Array.from(a), Uint8Array.from(i), s));
  }, e.publicKeyTweakMul = function(a, i, s) {
    return Buffer.from(t.publicKeyTweakMul(Uint8Array.from(a), Uint8Array.from(i), s));
  }, e.publicKeyCombine = function(a, i) {
    var s = [];
    return a.forEach(function(f) {
      s.push(Uint8Array.from(f));
    }), Buffer.from(t.publicKeyCombine(s, i));
  }, e.signatureNormalize = function(a) {
    return Buffer.from(t.signatureNormalize(Uint8Array.from(a)));
  }, e.signatureExport = function(a) {
    return Buffer.from(t.signatureExport(Uint8Array.from(a)));
  }, e.signatureImport = function(a) {
    return Buffer.from(t.signatureImport(Uint8Array.from(a)));
  }, e.signatureImportLax = function(a) {
    if (a.length === 0)
      throw new RangeError("signature length is invalid");
    var i = n.signatureImportLax(a);
    if (i === null)
      throw new Error("couldn't parse DER signature");
    return r.signatureImport(i);
  }, e.sign = function(a, i, s) {
    if (s === null)
      throw new TypeError("options should be an Object");
    var f = void 0;
    if (s) {
      if (f = {}, s.data === null)
        throw new TypeError("options.data should be a Buffer");
      if (s.data) {
        if (s.data.length != 32)
          throw new RangeError("options.data length is invalid");
        f.data = new Uint8Array(s.data);
      }
      if (s.noncefn === null)
        throw new TypeError("options.noncefn should be a Function");
      s.noncefn && (f.noncefn = function(m, _, O, P, C) {
        var M = O != null ? Buffer.from(O) : null, k = P != null ? Buffer.from(P) : null, q = Buffer.from("");
        return s.noncefn && (q = s.noncefn(Buffer.from(m), Buffer.from(_), M, k, C)), new Uint8Array(q);
      });
    }
    var v = t.ecdsaSign(Uint8Array.from(a), Uint8Array.from(i), f);
    return {
      signature: Buffer.from(v.signature),
      recovery: v.recid
    };
  }, e.verify = function(a, i, s) {
    return t.ecdsaVerify(Uint8Array.from(i), Uint8Array.from(a), s);
  }, e.recover = function(a, i, s, f) {
    return Buffer.from(t.ecdsaRecover(Uint8Array.from(i), s, Uint8Array.from(a), f));
  }, e.ecdh = function(a, i) {
    return Buffer.from(t.ecdh(Uint8Array.from(a), Uint8Array.from(i), {}));
  }, e.ecdhUnsafe = function(a, i, s) {
    if (a.length !== 33 && a.length !== 65)
      throw new RangeError("public key length is invalid");
    if (i.length !== 32)
      throw new RangeError("private key length is invalid");
    return Buffer.from(r.ecdhUnsafe(Uint8Array.from(a), Uint8Array.from(i), s));
  };
})(k0);
const MR = /* @__PURE__ */ Qe(k0), ER = /* @__PURE__ */ ee({
  __proto__: null,
  default: MR
}, [k0]), q0 = /* @__PURE__ */ Q(ER);
var F0 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.MAX_INTEGER = void 0;
  var t = Mt;
  e.MAX_INTEGER = new t("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), e.TWO_POW256 = new t("10000000000000000000000000000000000000000000000000000000000000000", 16), e.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", e.KECCAK256_NULL = Buffer.from(e.KECCAK256_NULL_S, "hex"), e.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", e.KECCAK256_RLP_ARRAY = Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex"), e.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", e.KECCAK256_RLP = Buffer.from(e.KECCAK256_RLP_S, "hex");
})(F0);
const SR = /* @__PURE__ */ Qe(F0), AR = /* @__PURE__ */ ee({
  __proto__: null,
  default: SR
}, [F0]), $R = /* @__PURE__ */ Q(AR);
var U0 = {}, D0 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.baToJSON = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToHex = e.bufferToInt = e.toBuffer = e.stripZeros = e.unpad = e.setLengthRight = e.setLength = e.setLengthLeft = e.zeros = void 0;
  var t = gi, r = Mt;
  e.zeros = function(n) {
    return Buffer.allocUnsafe(n).fill(0);
  }, e.setLengthLeft = function(n, a, i) {
    i === void 0 && (i = !1);
    var s = e.zeros(a);
    return n = e.toBuffer(n), i ? n.length < a ? (n.copy(s), s) : n.slice(0, a) : n.length < a ? (n.copy(s, a - n.length), s) : n.slice(-a);
  }, e.setLength = e.setLengthLeft, e.setLengthRight = function(n, a) {
    return e.setLength(n, a, !0);
  }, e.unpad = function(n) {
    n = t.stripHexPrefix(n);
    for (var a = n[0]; n.length > 0 && a.toString() === "0"; )
      n = n.slice(1), a = n[0];
    return n;
  }, e.stripZeros = e.unpad, e.toBuffer = function(n) {
    if (!Buffer.isBuffer(n))
      if (Array.isArray(n))
        n = Buffer.from(n);
      else if (typeof n == "string")
        if (t.isHexString(n))
          n = Buffer.from(t.padToEven(t.stripHexPrefix(n)), "hex");
        else
          throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + n);
      else if (typeof n == "number")
        n = t.intToBuffer(n);
      else if (n == null)
        n = Buffer.allocUnsafe(0);
      else if (r.isBN(n))
        n = n.toArrayLike(Buffer);
      else if (n.toArray)
        n = Buffer.from(n.toArray());
      else
        throw new Error("invalid type");
    return n;
  }, e.bufferToInt = function(n) {
    return new r(e.toBuffer(n)).toNumber();
  }, e.bufferToHex = function(n) {
    return n = e.toBuffer(n), "0x" + n.toString("hex");
  }, e.fromSigned = function(n) {
    return new r(n).fromTwos(256);
  }, e.toUnsigned = function(n) {
    return Buffer.from(n.toTwos(256).toArray());
  }, e.addHexPrefix = function(n) {
    return typeof n != "string" || t.isHexPrefixed(n) ? n : "0x" + n;
  }, e.baToJSON = function(n) {
    if (Buffer.isBuffer(n))
      return "0x" + n.toString("hex");
    if (n instanceof Array) {
      for (var a = [], i = 0; i < n.length; i++)
        a.push(e.baToJSON(n[i]));
      return a;
    }
  };
})(D0);
const RR = /* @__PURE__ */ Qe(D0), BR = /* @__PURE__ */ ee({
  __proto__: null,
  default: RR
}, [D0]), ya = /* @__PURE__ */ Q(BR);
var j0 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.rlphash = e.ripemd160 = e.sha256 = e.keccak256 = e.keccak = void 0;
  var t = Y1, r = t.keccak224, n = t.keccak384, a = t.keccak256, i = t.keccak512, s = dy, f = gi, v = rf, m = ya;
  e.keccak = function(_, O) {
    switch (O === void 0 && (O = 256), typeof _ == "string" && !f.isHexString(_) ? _ = Buffer.from(_, "utf8") : _ = m.toBuffer(_), O || (O = 256), O) {
      case 224:
        return r(_);
      case 256:
        return a(_);
      case 384:
        return n(_);
      case 512:
        return i(_);
      default:
        throw new Error("Invald algorithm: keccak" + O);
    }
  }, e.keccak256 = function(_) {
    return e.keccak(_);
  }, e.sha256 = function(_) {
    return _ = m.toBuffer(_), s("sha256").update(_).digest();
  }, e.ripemd160 = function(_, O) {
    _ = m.toBuffer(_);
    var P = s("rmd160").update(_).digest();
    return O === !0 ? m.setLength(P, 32) : P;
  }, e.rlphash = function(_) {
    return e.keccak(v.encode(_));
  };
})(j0);
const TR = /* @__PURE__ */ Qe(j0), IR = /* @__PURE__ */ ee({
  __proto__: null,
  default: TR
}, [j0]), H0 = /* @__PURE__ */ Q(IR);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.importPublic = e.privateToPublic = e.privateToAddress = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.isPrecompiled = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isZeroAddress = e.isValidAddress = e.zeroAddress = void 0;
  var t = Di(), r = gi, n = q0, a = Mt, i = ya, s = H0;
  e.zeroAddress = function() {
    var f = 20, v = i.zeros(f);
    return i.bufferToHex(v);
  }, e.isValidAddress = function(f) {
    return /^0x[0-9a-fA-F]{40}$/.test(f);
  }, e.isZeroAddress = function(f) {
    var v = e.zeroAddress();
    return v === i.addHexPrefix(f);
  }, e.toChecksumAddress = function(f, v) {
    f = r.stripHexPrefix(f).toLowerCase();
    for (var m = v !== void 0 ? v.toString() + "0x" : "", _ = s.keccak(m + f).toString("hex"), O = "0x", P = 0; P < f.length; P++)
      parseInt(_[P], 16) >= 8 ? O += f[P].toUpperCase() : O += f[P];
    return O;
  }, e.isValidChecksumAddress = function(f, v) {
    return e.isValidAddress(f) && e.toChecksumAddress(f, v) === f;
  }, e.generateAddress = function(f, v) {
    f = i.toBuffer(f);
    var m = new a(v);
    return m.isZero() ? s.rlphash([f, null]).slice(-20) : s.rlphash([f, Buffer.from(m.toArray())]).slice(-20);
  }, e.generateAddress2 = function(f, v, m) {
    var _ = i.toBuffer(f), O = i.toBuffer(v), P = i.toBuffer(m);
    t(_.length === 20), t(O.length === 32);
    var C = s.keccak256(Buffer.concat([Buffer.from("ff", "hex"), _, O, s.keccak256(P)]));
    return C.slice(-20);
  }, e.isPrecompiled = function(f) {
    var v = i.unpad(f);
    return v.length === 1 && v[0] >= 1 && v[0] <= 8;
  }, e.isValidPrivate = function(f) {
    return n.privateKeyVerify(f);
  }, e.isValidPublic = function(f, v) {
    return v === void 0 && (v = !1), f.length === 64 ? n.publicKeyVerify(Buffer.concat([Buffer.from([4]), f])) : v ? n.publicKeyVerify(f) : !1;
  }, e.pubToAddress = function(f, v) {
    return v === void 0 && (v = !1), f = i.toBuffer(f), v && f.length !== 64 && (f = n.publicKeyConvert(f, !1).slice(1)), t(f.length === 64), s.keccak(f).slice(-20);
  }, e.publicToAddress = e.pubToAddress, e.privateToAddress = function(f) {
    return e.publicToAddress(e.privateToPublic(f));
  }, e.privateToPublic = function(f) {
    return f = i.toBuffer(f), n.publicKeyCreate(f, !1).slice(1);
  }, e.importPublic = function(f) {
    return f = i.toBuffer(f), f.length !== 64 && (f = n.publicKeyConvert(f, !1).slice(1)), f;
  };
})(U0);
const PR = /* @__PURE__ */ Qe(U0), OR = /* @__PURE__ */ ee({
  __proto__: null,
  default: PR
}, [U0]), LR = /* @__PURE__ */ Q(OR);
var Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
var d2 = Ht.hashPersonalMessage = b2 = Ht.isValidSignature = g2 = Ht.fromRpcSig = y2 = Ht.toRpcSig = v2 = Ht.ecrecover = p2 = Ht.ecsign = void 0, yu = q0, Ea = Mt, cn = ya, CR = H0, p2 = Ht.ecsign = function(e, t, r) {
  var n = yu.sign(e, t), a = n.recovery, i = {
    r: n.signature.slice(0, 32),
    s: n.signature.slice(32, 64),
    v: r ? a + (r * 2 + 35) : a + 27
  };
  return i;
}, v2 = Ht.ecrecover = function(e, t, r, n, a) {
  var i = Buffer.concat([cn.setLength(r, 32), cn.setLength(n, 32)], 64), s = z0(t, a);
  if (!K0(s))
    throw new Error("Invalid signature v value");
  var f = yu.recover(e, i, s);
  return yu.publicKeyConvert(f, !1).slice(1);
}, y2 = Ht.toRpcSig = function(e, t, r, n) {
  var a = z0(e, n);
  if (!K0(a))
    throw new Error("Invalid signature v value");
  return cn.bufferToHex(Buffer.concat([cn.setLengthLeft(t, 32), cn.setLengthLeft(r, 32), cn.toBuffer(e)]));
}, g2 = Ht.fromRpcSig = function(e) {
  var t = cn.toBuffer(e);
  if (t.length !== 65)
    throw new Error("Invalid signature length");
  var r = t[64];
  return r < 27 && (r += 27), {
    v: r,
    r: t.slice(0, 32),
    s: t.slice(32, 64)
  };
}, b2 = Ht.isValidSignature = function(e, t, r, n, a) {
  n === void 0 && (n = !0);
  var i = new Ea("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), s = new Ea("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
  if (t.length !== 32 || r.length !== 32 || !K0(z0(e, a)))
    return !1;
  var f = new Ea(t), v = new Ea(r);
  return !(f.isZero() || f.gt(s) || v.isZero() || v.gt(s) || n && v.cmp(i) === 1);
};
d2 = Ht.hashPersonalMessage = function(e) {
  var t = Buffer.from(`Ethereum Signed Message:
` + e.length.toString(), "utf-8");
  return CR.keccak(Buffer.concat([t, e]));
};
function z0(e, t) {
  return t ? e - (2 * t + 35) : e - 27;
}
function K0(e) {
  return e === 0 || e === 1;
}
const kR = /* @__PURE__ */ ee({
  __proto__: null,
  get hashPersonalMessage() {
    return d2;
  },
  get isValidSignature() {
    return b2;
  },
  get fromRpcSig() {
    return g2;
  },
  get toRpcSig() {
    return y2;
  },
  get ecrecover() {
    return v2;
  },
  get ecsign() {
    return p2;
  },
  default: Ht
}, [Ht]), NR = /* @__PURE__ */ Q(kR);
var Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
var _2 = Xi.defineProperties = void 0, Jd = Di(), qR = gi, Yd = rf, Sa = ya;
_2 = Xi.defineProperties = function(e, t, r) {
  if (e.raw = [], e._fields = [], e.toJSON = function(a) {
    if (a === void 0 && (a = !1), a) {
      var i = {};
      return e._fields.forEach(function(s) {
        i[s] = "0x" + e[s].toString("hex");
      }), i;
    }
    return Sa.baToJSON(e.raw);
  }, e.serialize = function() {
    return Yd.encode(e.raw);
  }, t.forEach(function(a, i) {
    e._fields.push(a.name);
    function s() {
      return e.raw[i];
    }
    function f(v) {
      v = Sa.toBuffer(v), v.toString("hex") === "00" && !a.allowZero && (v = Buffer.allocUnsafe(0)), a.allowLess && a.length ? (v = Sa.stripZeros(v), Jd(a.length >= v.length, "The field " + a.name + " must not have more " + a.length + " bytes")) : !(a.allowZero && v.length === 0) && a.length && Jd(a.length === v.length, "The field " + a.name + " must have byte length of " + a.length), e.raw[i] = v;
    }
    Object.defineProperty(e, a.name, {
      enumerable: !0,
      configurable: !0,
      get: s,
      set: f
    }), a.default && (e[a.name] = a.default), a.alias && Object.defineProperty(e, a.alias, {
      enumerable: !1,
      configurable: !0,
      set: f,
      get: s
    });
  }), r)
    if (typeof r == "string" && (r = Buffer.from(qR.stripHexPrefix(r), "hex")), Buffer.isBuffer(r) && (r = Yd.decode(r)), Array.isArray(r)) {
      if (r.length > e._fields.length)
        throw new Error("wrong number of fields in data");
      r.forEach(function(a, i) {
        e[e._fields[i]] = Sa.toBuffer(a);
      });
    } else if (typeof r == "object") {
      var n = Object.keys(r);
      t.forEach(function(a) {
        n.indexOf(a.name) !== -1 && (e[a.name] = r[a.name]), n.indexOf(a.alias) !== -1 && (e[a.alias] = r[a.alias]);
      });
    } else
      throw new Error("invalid data");
};
const FR = /* @__PURE__ */ ee({
  __proto__: null,
  get defineProperties() {
    return _2;
  },
  default: Xi
}, [Xi]), UR = /* @__PURE__ */ Q(FR);
(function(e) {
  var t = Ie && Ie.__createBinding || (Object.create ? function(f, v, m, _) {
    _ === void 0 && (_ = m), Object.defineProperty(f, _, { enumerable: !0, get: function() {
      return v[m];
    } });
  } : function(f, v, m, _) {
    _ === void 0 && (_ = m), f[_] = v[m];
  }), r = Ie && Ie.__exportStar || function(f, v) {
    for (var m in f)
      m !== "default" && !v.hasOwnProperty(m) && t(v, f, m);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.secp256k1 = e.rlp = e.BN = void 0;
  var n = q0;
  e.secp256k1 = n;
  var a = gi, i = Mt;
  e.BN = i;
  var s = rf;
  e.rlp = s, Object.assign(e, a), r($R, e), r(LR, e), r(H0, e), r(NR, e), r(ya, e), r(UR, e);
})(C0);
const DR = /* @__PURE__ */ Qe(C0), jR = /* @__PURE__ */ ee({
  __proto__: null,
  default: DR
}, [C0]), HR = /* @__PURE__ */ Q(jR), Ar = HR, zt = Mt;
var ht = function() {
};
function yf(e) {
  return e.startsWith("int[") ? "int256" + e.slice(3) : e === "int" ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : e === "uint" ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : e === "fixed" ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : e === "ufixed" ? "ufixed128x128" : e;
}
ht.eventID = function(e, t) {
  var r = e + "(" + t.map(yf).join(",") + ")";
  return Ar.keccak256(Buffer.from(r));
};
ht.methodID = function(e, t) {
  return ht.eventID(e, t).slice(0, 4);
};
function Gr(e) {
  return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
}
function gu(e) {
  var t = /^\D+(\d+)x(\d+)$/.exec(e);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function ga(e) {
  var t = e.match(/(.*)\[(.*?)\]$/);
  return t ? t[2] === "" ? "dynamic" : parseInt(t[2], 10) : null;
}
function on(e) {
  var t = typeof e;
  if (t === "string")
    return Ar.isHexPrefixed(e) ? new zt(Ar.stripHexPrefix(e), 16) : new zt(e, 10);
  if (t === "number")
    return new zt(e);
  if (e.toArray)
    return e;
  throw new Error("Argument is not a number");
}
function m2(e) {
  var t = /^(\w+)\((.*)\)$/.exec(e);
  if (t.length !== 3)
    throw new Error("Invalid method signature");
  var r = /^(.+)\):\((.+)$/.exec(t[2]);
  if (r !== null && r.length === 3)
    return {
      method: t[1],
      args: r[1].split(","),
      retargs: r[2].split(",")
    };
  var n = t[2].split(",");
  return n.length === 1 && n[0] === "" && (n = []), {
    method: t[1],
    args: n
  };
}
function vr(e, t) {
  var r, n, a, i;
  if (e === "address")
    return vr("uint160", on(t));
  if (e === "bool")
    return vr("uint8", t ? 1 : 0);
  if (e === "string")
    return vr("bytes", Buffer.from(t, "utf8"));
  if (Qi(e)) {
    if (typeof t.length > "u")
      throw new Error("Not an array?");
    if (r = ga(e), r !== "dynamic" && r !== 0 && t.length > r)
      throw new Error("Elements exceed array size: " + r);
    a = [], e = e.slice(0, e.lastIndexOf("[")), typeof t == "string" && (t = JSON.parse(t));
    for (i in t)
      a.push(vr(e, t[i]));
    if (r === "dynamic") {
      var s = vr("uint256", t.length);
      a.unshift(s);
    }
    return Buffer.concat(a);
  } else {
    if (e === "bytes")
      return t = Buffer.from(t), a = Buffer.concat([vr("uint256", t.length), t]), t.length % 32 !== 0 && (a = Buffer.concat([a, Ar.zeros(32 - t.length % 32)])), a;
    if (e.startsWith("bytes")) {
      if (r = Gr(e), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      return Ar.setLengthRight(t, 32);
    } else if (e.startsWith("uint")) {
      if (r = Gr(e), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = on(t), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      if (n < 0)
        throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("int")) {
      if (r = Gr(e), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = on(t), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("ufixed")) {
      if (r = gu(e), n = on(t), n < 0)
        throw new Error("Supplied ufixed is negative");
      return vr("uint256", n.mul(new zt(2).pow(new zt(r[1]))));
    } else if (e.startsWith("fixed"))
      return r = gu(e), vr("int256", on(t).mul(new zt(2).pow(new zt(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + e);
}
function lr(e, t, r) {
  typeof e == "string" && (e = W0(e));
  var n, a, i, s;
  if (e.name === "address")
    return lr(e.rawType, t, r).toArrayLike(Buffer, "be", 20).toString("hex");
  if (e.name === "bool")
    return lr(e.rawType, t, r).toString() === new zt(1).toString();
  if (e.name === "string") {
    var f = lr(e.rawType, t, r);
    return Buffer.from(f, "utf8").toString();
  } else if (e.isArray) {
    for (i = [], n = e.size, e.size === "dynamic" && (r = lr("uint256", t, r).toNumber(), n = lr("uint256", t, r).toNumber(), r = r + 32), s = 0; s < n; s++) {
      var v = lr(e.subArray, t, r);
      i.push(v), r += e.subArray.memoryUsage;
    }
    return i;
  } else {
    if (e.name === "bytes")
      return r = lr("uint256", t, r).toNumber(), n = lr("uint256", t, r).toNumber(), t.slice(r + 32, r + 32 + n);
    if (e.name.startsWith("bytes"))
      return t.slice(r, r + e.size);
    if (e.name.startsWith("uint")) {
      if (a = new zt(t.slice(r, r + 32), 16, "be"), a.bitLength() > e.size)
        throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength());
      return a;
    } else if (e.name.startsWith("int")) {
      if (a = new zt(t.slice(r, r + 32), 16, "be").fromTwos(256), a.bitLength() > e.size)
        throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength());
      return a;
    } else if (e.name.startsWith("ufixed")) {
      if (n = new zt(2).pow(new zt(e.size[1])), a = lr("uint256", t, r), !a.mod(n).isZero())
        throw new Error("Decimals not supported yet");
      return a.div(n);
    } else if (e.name.startsWith("fixed")) {
      if (n = new zt(2).pow(new zt(e.size[1])), a = lr("int256", t, r), !a.mod(n).isZero())
        throw new Error("Decimals not supported yet");
      return a.div(n);
    }
  }
  throw new Error("Unsupported or invalid type: " + e.name);
}
function W0(e) {
  var t, r;
  if (Qi(e)) {
    t = ga(e);
    var n = e.slice(0, e.lastIndexOf("["));
    return n = W0(n), r = {
      isArray: !0,
      name: e,
      size: t,
      memoryUsage: t === "dynamic" ? 32 : n.memoryUsage * t,
      subArray: n
    }, r;
  } else {
    var a;
    switch (e) {
      case "address":
        a = "uint160";
        break;
      case "bool":
        a = "uint8";
        break;
      case "string":
        a = "bytes";
        break;
    }
    if (r = {
      rawType: a,
      name: e,
      memoryUsage: 32
    }, e.startsWith("bytes") && e !== "bytes" || e.startsWith("uint") || e.startsWith("int") ? r.size = Gr(e) : (e.startsWith("ufixed") || e.startsWith("fixed")) && (r.size = gu(e)), e.startsWith("bytes") && e !== "bytes" && (r.size < 1 || r.size > 32))
      throw new Error("Invalid bytes<N> width: " + r.size);
    if ((e.startsWith("uint") || e.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256))
      throw new Error("Invalid int/uint<N> width: " + r.size);
    return r;
  }
}
function zR(e) {
  return e === "string" || e === "bytes" || ga(e) === "dynamic";
}
function Qi(e) {
  return e.lastIndexOf("]") === e.length - 1;
}
ht.rawEncode = function(e, t) {
  var r = [], n = [], a = 0;
  e.forEach(function(m) {
    if (Qi(m)) {
      var _ = ga(m);
      _ !== "dynamic" ? a += 32 * _ : a += 32;
    } else
      a += 32;
  });
  for (var i = 0; i < e.length; i++) {
    var s = yf(e[i]), f = t[i], v = vr(s, f);
    zR(s) ? (r.push(vr("uint256", a)), n.push(v), a += v.length) : r.push(v);
  }
  return Buffer.concat(r.concat(n));
};
ht.rawDecode = function(e, t) {
  var r = [];
  t = Buffer.from(t);
  for (var n = 0, a = 0; a < e.length; a++) {
    var i = yf(e[a]), s = W0(i), f = lr(s, t, n);
    n += s.memoryUsage, r.push(f);
  }
  return r;
};
ht.simpleEncode = function(e) {
  var t = Array.prototype.slice.call(arguments).slice(1), r = m2(e);
  if (t.length !== r.args.length)
    throw new Error("Argument count mismatch");
  return Buffer.concat([ht.methodID(r.method, r.args), ht.rawEncode(r.args, t)]);
};
ht.simpleDecode = function(e, t) {
  var r = m2(e);
  if (!r.retargs)
    throw new Error("No return values in method");
  return ht.rawDecode(r.retargs, t);
};
function Xd(e, t) {
  return e.startsWith("address") || e.startsWith("bytes") ? "0x" + t.toString("hex") : t.toString();
}
ht.stringify = function(e, t) {
  var r = [];
  for (var n in e) {
    var a = e[n], i = t[n];
    /^[^\[]+\[.*\]$/.test(a) ? i = i.map(function(s) {
      return Xd(a, s);
    }).join(", ") : i = Xd(a, i), r.push(i);
  }
  return r;
};
ht.solidityHexValue = function(e, t, r) {
  var n, a;
  if (Qi(e)) {
    var i = e.replace(/\[.*?\]/, "");
    if (!Qi(i)) {
      var s = ga(e);
      if (s !== "dynamic" && s !== 0 && t.length > s)
        throw new Error("Elements exceed array size: " + s);
    }
    var f = t.map(function(_) {
      return ht.solidityHexValue(i, _, 256);
    });
    return Buffer.concat(f);
  } else {
    if (e === "bytes")
      return t;
    if (e === "string")
      return Buffer.from(t, "utf8");
    if (e === "bool") {
      r = r || 8;
      var v = Array(r / 4).join("0");
      return Buffer.from(t ? v + "1" : v + "0", "hex");
    } else if (e === "address") {
      var m = 20;
      return r && (m = r / 8), Ar.setLengthLeft(t, m);
    } else if (e.startsWith("bytes")) {
      if (n = Gr(e), n < 1 || n > 32)
        throw new Error("Invalid bytes<N> width: " + n);
      return Ar.setLengthRight(t, n);
    } else if (e.startsWith("uint")) {
      if (n = Gr(e), n % 8 || n < 8 || n > 256)
        throw new Error("Invalid uint<N> width: " + n);
      if (a = on(t), a.bitLength() > n)
        throw new Error("Supplied uint exceeds width: " + n + " vs " + a.bitLength());
      return r = r || n, a.toArrayLike(Buffer, "be", r / 8);
    } else if (e.startsWith("int")) {
      if (n = Gr(e), n % 8 || n < 8 || n > 256)
        throw new Error("Invalid int<N> width: " + n);
      if (a = on(t), a.bitLength() > n)
        throw new Error("Supplied int exceeds width: " + n + " vs " + a.bitLength());
      return r = r || n, a.toTwos(n).toArrayLike(Buffer, "be", r / 8);
    } else
      throw new Error("Unsupported or invalid type: " + e);
  }
};
ht.solidityPack = function(e, t) {
  if (e.length !== t.length)
    throw new Error("Number of types are not matching the values");
  for (var r = [], n = 0; n < e.length; n++) {
    var a = yf(e[n]), i = t[n];
    r.push(ht.solidityHexValue(a, i, null));
  }
  return Buffer.concat(r);
};
ht.soliditySHA3 = function(e, t) {
  return Ar.keccak256(ht.solidityPack(e, t));
};
ht.soliditySHA256 = function(e, t) {
  return Ar.sha256(ht.solidityPack(e, t));
};
ht.solidityRIPEMD160 = function(e, t) {
  return Ar.ripemd160(ht.solidityPack(e, t), !0);
};
function KR(e) {
  return e >= "0" && e <= "9";
}
ht.fromSerpent = function(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    if (n === "s")
      t.push("bytes");
    else if (n === "b") {
      for (var a = "bytes", i = r + 1; i < e.length && KR(e[i]); )
        a += e[i] - "0", i++;
      r = i - 1, t.push(a);
    } else if (n === "i")
      t.push("int256");
    else if (n === "a")
      t.push("int256[]");
    else
      throw new Error("Unsupported or invalid type: " + n);
  }
  return t;
};
ht.toSerpent = function(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    if (n === "bytes")
      t.push("s");
    else if (n.startsWith("bytes"))
      t.push("b" + Gr(n));
    else if (n === "int256")
      t.push("i");
    else if (n === "int256[]")
      t.push("a");
    else
      throw new Error("Unsupported or invalid type: " + n);
  }
  return t.join("");
};
var Qd = ht;
const WR = /* @__PURE__ */ ee({
  __proto__: null,
  default: Qd
}, [Qd]), GR = /* @__PURE__ */ Q(WR);
(function(e) {
  e.exports = GR;
})(L0);
const VR = /* @__PURE__ */ Qe(L0.exports), ZR = /* @__PURE__ */ ee({
  __proto__: null,
  default: VR
}, [L0.exports]), JR = /* @__PURE__ */ Q(ZR), it = ha, Bs = JR;
var ep = {
  concatSig: function(e, t, r) {
    const n = it.fromSigned(t), a = it.fromSigned(r), i = it.bufferToInt(e), s = rp(it.toUnsigned(n).toString("hex"), 64), f = rp(it.toUnsigned(a).toString("hex"), 64), v = it.stripHexPrefix(it.intToHex(i));
    return it.addHexPrefix(s.concat(f, v)).toString("hex");
  },
  normalize: function(e) {
    if (!!e) {
      if (typeof e == "number") {
        const r = it.toBuffer(e);
        e = it.bufferToHex(r);
      }
      if (typeof e != "string") {
        var t = "eth-sig-util.normalize() requires hex string or integer input.";
        throw t += " received " + typeof e + ": " + e, new Error(t);
      }
      return it.addHexPrefix(e.toLowerCase());
    }
  },
  personalSign: function(e, t) {
    var r = it.toBuffer(t.data), n = it.hashPersonalMessage(r), a = it.ecsign(n, e), i = it.bufferToHex(this.concatSig(a.v, a.r, a.s));
    return i;
  },
  recoverPersonalSignature: function(e) {
    const t = tp(e), r = it.publicToAddress(t);
    return it.bufferToHex(r);
  },
  extractPublicKey: function(e) {
    const t = tp(e);
    return "0x" + t.toString("hex");
  },
  typedSignatureHash: function(e) {
    const t = Ts(e);
    return it.bufferToHex(t);
  },
  signTypedData: function(e, t) {
    const r = Ts(t.data), n = it.ecsign(r, e);
    return it.bufferToHex(this.concatSig(n.v, n.r, n.s));
  },
  recoverTypedSignature: function(e) {
    const t = Ts(e.data), r = w2(t, e.sig), n = it.publicToAddress(r);
    return it.bufferToHex(n);
  }
};
function Ts(e) {
  const t = new Error("Expect argument to be non-empty array");
  if (typeof e != "object" || !e.length)
    throw t;
  const r = e.map(function(i) {
    return i.type === "bytes" ? it.toBuffer(i.value) : i.value;
  }), n = e.map(function(i) {
    return i.type;
  }), a = e.map(function(i) {
    if (!i.name)
      throw t;
    return i.type + " " + i.name;
  });
  return Bs.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Bs.soliditySHA3(new Array(e.length).fill("string"), a),
      Bs.soliditySHA3(n, r)
    ]
  );
}
function w2(e, t) {
  const r = it.toBuffer(t), n = it.fromRpcSig(r);
  return it.ecrecover(e, n.v, n.r, n.s);
}
function tp(e) {
  const t = it.toBuffer(e.data), r = it.hashPersonalMessage(t);
  return w2(r, e.sig);
}
function rp(e, t) {
  for (var r = "" + e; r.length < t; )
    r = "0" + r;
  return r;
}
const YR = /* @__PURE__ */ ee({
  __proto__: null,
  default: ep
}, [ep]), XR = /* @__PURE__ */ Q(YR);
var G0 = { exports: {} };
(function(e, t) {
  (function(r) {
    var n = function(i) {
      setTimeout(i, 0);
    };
    typeof process < "u" && process && typeof process.nextTick == "function" && (n = process.nextTick);
    function a(i) {
      var s = {
        capacity: i || 1,
        current: 0,
        queue: [],
        firstHere: !1,
        take: function() {
          if (s.firstHere === !1) {
            s.current++, s.firstHere = !0;
            var f = 1;
          } else
            var f = 0;
          var v = { n: 1 };
          typeof arguments[0] == "function" ? v.task = arguments[0] : v.n = arguments[0], arguments.length >= 2 && (typeof arguments[1] == "function" ? v.task = arguments[1] : v.n = arguments[1]);
          var m = v.task;
          if (v.task = function() {
            m(s.leave);
          }, s.current + v.n - f > s.capacity)
            return f === 1 && (s.current--, s.firstHere = !1), s.queue.push(v);
          s.current += v.n - f, v.task(s.leave), f === 1 && (s.firstHere = !1);
        },
        leave: function(f) {
          if (f = f || 1, s.current -= f, !s.queue.length) {
            if (s.current < 0)
              throw new Error("leave called too many times.");
            return;
          }
          var v = s.queue[0];
          v.n + s.current > s.capacity || (s.queue.shift(), s.current += v.n, n(v.task));
        },
        available: function(f) {
          return f = f || 1, s.current + f <= s.capacity;
        }
      };
      return s;
    }
    e.exports = a;
  })();
})(G0);
const QR = G0.exports, eB = /* @__PURE__ */ ee({
  __proto__: null,
  default: QR
}, [G0.exports]), tB = /* @__PURE__ */ Q(eB), rB = m0;
var np = nB;
function nB(e, t, r) {
  e.sendAsync(rB({
    method: "eth_estimateGas",
    params: [t]
  }), function(n, a) {
    if (n)
      return n.message === "no contract code at given address" ? r(null, "0xcf08") : r(n);
    r(null, a.result);
  });
}
const iB = /* @__PURE__ */ ee({
  __proto__: null,
  default: np
}, [np]), aB = /* @__PURE__ */ Q(iB), Pt = rR, oB = sR, fB = hr.inherits, $o = ha, sB = XR, Nn = gy, uB = tB, cB = w0, lB = aB, hB = /^[0-9A-Fa-f]+$/g;
fB(nt, cB);
function nt(e) {
  const t = this;
  t.nonceLock = uB(1), e.getAccounts && (t.getAccounts = e.getAccounts), e.processTransaction && (t.processTransaction = e.processTransaction), e.processMessage && (t.processMessage = e.processMessage), e.processPersonalMessage && (t.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (t.processTypedMessage = e.processTypedMessage), t.approveTransaction = e.approveTransaction || t.autoApprove, t.approveMessage = e.approveMessage || t.autoApprove, t.approvePersonalMessage = e.approvePersonalMessage || t.autoApprove, t.approveDecryptMessage = e.approveDecryptMessage || t.autoApprove, t.approveEncryptionPublicKey = e.approveEncryptionPublicKey || t.autoApprove, t.approveTypedMessage = e.approveTypedMessage || t.autoApprove, e.signTransaction && (t.signTransaction = e.signTransaction || Ln("signTransaction")), e.signMessage && (t.signMessage = e.signMessage || Ln("signMessage")), e.signPersonalMessage && (t.signPersonalMessage = e.signPersonalMessage || Ln("signPersonalMessage")), e.decryptMessage && (t.decryptMessage = e.decryptMessage || Ln("decryptMessage")), e.encryptionPublicKey && (t.encryptionPublicKey = e.encryptionPublicKey || Ln("encryptionPublicKey")), e.signTypedMessage && (t.signTypedMessage = e.signTypedMessage || Ln("signTypedMessage")), e.recoverPersonalSignature && (t.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (t.publishTransaction = e.publishTransaction), t.estimateGas = e.estimateGas || t.estimateGas, t.getGasPrice = e.getGasPrice || t.getGasPrice;
}
nt.prototype.handleRequest = function(e, t, r) {
  const n = this;
  n._parityRequests = {}, n._parityRequestCount = 0;
  let a, i, s, f, v;
  switch (e.method) {
    case "eth_coinbase":
      n.getAccounts(function(m, _) {
        if (m)
          return r(m);
        let O = _[0] || null;
        r(null, O);
      });
      return;
    case "eth_accounts":
      n.getAccounts(function(m, _) {
        if (m)
          return r(m);
        r(null, _);
      });
      return;
    case "eth_sendTransaction":
      a = e.params[0], Pt([
        (m) => n.validateTransaction(a, m),
        (m) => n.processTransaction(a, m)
      ], r);
      return;
    case "eth_signTransaction":
      a = e.params[0], Pt([
        (m) => n.validateTransaction(a, m),
        (m) => n.processSignTransaction(a, m)
      ], r);
      return;
    case "eth_sign":
      v = e.params[0], f = e.params[1], s = e.params[2] || {}, i = Nn(s, {
        from: v,
        data: f
      }), Pt([
        (m) => n.validateMessage(i, m),
        (m) => n.processMessage(i, m)
      ], r);
      return;
    case "personal_sign":
      return function() {
        const m = e.params[0], _ = e.params[1];
        if (ip(_) && Is(m)) {
          let O = "The eth_personalSign method requires params ordered ";
          O += "[message, address]. This was previously handled incorrectly, ", O += "and has been corrected automatically. ", O += "Please switch this param order for smooth behavior in the future.", console.warn(O), v = e.params[0], f = e.params[1];
        } else
          f = e.params[0], v = e.params[1];
        s = e.params[2] || {}, i = Nn(s, {
          from: v,
          data: f
        }), Pt([
          (O) => n.validatePersonalMessage(i, O),
          (O) => n.processPersonalMessage(i, O)
        ], r);
      }();
    case "eth_decryptMessage":
      return function() {
        const m = e.params[0], _ = e.params[1];
        if (ip(_) && Is(m)) {
          let O = "The eth_decryptMessage method requires params ordered ";
          O += "[message, address]. This was previously handled incorrectly, ", O += "and has been corrected automatically. ", O += "Please switch this param order for smooth behavior in the future.", console.warn(O), v = e.params[0], f = e.params[1];
        } else
          f = e.params[0], v = e.params[1];
        s = e.params[2] || {}, i = Nn(s, {
          from: v,
          data: f
        }), Pt([
          (O) => n.validateDecryptMessage(i, O),
          (O) => n.processDecryptMessage(i, O)
        ], r);
      }();
    case "encryption_public_key":
      return function() {
        const m = e.params[0];
        Pt([
          (_) => n.validateEncryptionPublicKey(m, _),
          (_) => n.processEncryptionPublicKey(m, _)
        ], r);
      }();
    case "personal_ecRecover":
      return function() {
        f = e.params[0];
        let m = e.params[1];
        s = e.params[2] || {}, i = Nn(s, {
          sig: m,
          data: f
        }), n.recoverPersonalSignature(i, r);
      }();
    case "eth_signTypedData":
    case "eth_signTypedData_v3":
    case "eth_signTypedData_v4":
      return function() {
        const m = e.params[0], _ = e.params[1];
        Is(m) ? (v = m, f = _) : (f = m, v = _), s = e.params[2] || {}, i = Nn(s, {
          from: v,
          data: f
        }), Pt([
          (O) => n.validateTypedMessage(i, O),
          (O) => n.processTypedMessage(i, O)
        ], r);
      }();
    case "parity_postTransaction":
      a = e.params[0], n.parityPostTransaction(a, r);
      return;
    case "parity_postSign":
      v = e.params[0], f = e.params[1], n.parityPostSign(v, f, r);
      return;
    case "parity_checkRequest":
      return function() {
        const m = e.params[0];
        n.parityCheckRequest(m, r);
      }();
    case "parity_defaultAccount":
      n.getAccounts(function(m, _) {
        if (m)
          return r(m);
        const O = _[0] || null;
        r(null, O);
      });
      return;
    default:
      t();
      return;
  }
};
nt.prototype.getAccounts = function(e) {
  e(null, []);
};
nt.prototype.processTransaction = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approveTransaction(e, n),
    (n, a) => r.checkApproval("transaction", n, a),
    (n) => r.finalizeAndSubmitTx(e, n)
  ], t);
};
nt.prototype.processSignTransaction = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approveTransaction(e, n),
    (n, a) => r.checkApproval("transaction", n, a),
    (n) => r.finalizeTx(e, n)
  ], t);
};
nt.prototype.processMessage = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approveMessage(e, n),
    (n, a) => r.checkApproval("message", n, a),
    (n) => r.signMessage(e, n)
  ], t);
};
nt.prototype.processPersonalMessage = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approvePersonalMessage(e, n),
    (n, a) => r.checkApproval("message", n, a),
    (n) => r.signPersonalMessage(e, n)
  ], t);
};
nt.prototype.processDecryptMessage = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approveDecryptMessage(e, n),
    (n, a) => r.checkApproval("decryptMessage", n, a),
    (n) => r.decryptMessage(e, n)
  ], t);
};
nt.prototype.processEncryptionPublicKey = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approveEncryptionPublicKey(e, n),
    (n, a) => r.checkApproval("encryptionPublicKey", n, a),
    (n) => r.encryptionPublicKey(e, n)
  ], t);
};
nt.prototype.processTypedMessage = function(e, t) {
  const r = this;
  Pt([
    (n) => r.approveTypedMessage(e, n),
    (n, a) => r.checkApproval("message", n, a),
    (n) => r.signTypedMessage(e, n)
  ], t);
};
nt.prototype.autoApprove = function(e, t) {
  t(null, !0);
};
nt.prototype.checkApproval = function(e, t, r) {
  r(t ? null : new Error("User denied " + e + " signature."));
};
nt.prototype.parityPostTransaction = function(e, t) {
  const r = this, a = `0x${r._parityRequestCount.toString(16)}`;
  r._parityRequestCount++, r.emitPayload({
    method: "eth_sendTransaction",
    params: [e]
  }, function(i, s) {
    if (i) {
      r._parityRequests[a] = { error: i };
      return;
    }
    const f = s.result;
    r._parityRequests[a] = f;
  }), t(null, a);
};
nt.prototype.parityPostSign = function(e, t, r) {
  const n = this, i = `0x${n._parityRequestCount.toString(16)}`;
  n._parityRequestCount++, n.emitPayload({
    method: "eth_sign",
    params: [e, t]
  }, function(s, f) {
    if (s) {
      n._parityRequests[i] = { error: s };
      return;
    }
    const v = f.result;
    n._parityRequests[i] = v;
  }), r(null, i);
};
nt.prototype.parityCheckRequest = function(e, t) {
  const n = this._parityRequests[e] || null;
  if (!n)
    return t(null, null);
  if (n.error)
    return t(n.error);
  t(null, n);
};
nt.prototype.recoverPersonalSignature = function(e, t) {
  let r;
  try {
    r = sB.recoverPersonalSignature(e);
  } catch (n) {
    return t(n);
  }
  t(null, r);
};
nt.prototype.validateTransaction = function(e, t) {
  const r = this;
  if (e.from === void 0)
    return t(new Error("Undefined address - from address required to sign transaction."));
  r.validateSender(e.from, function(n, a) {
    if (n)
      return t(n);
    if (!a)
      return t(new Error(`Unknown address - unable to sign transaction for this address: "${e.from}"`));
    t();
  });
};
nt.prototype.validateMessage = function(e, t) {
  const r = this;
  if (e.from === void 0)
    return t(new Error("Undefined address - from address required to sign message."));
  r.validateSender(e.from, function(n, a) {
    if (n)
      return t(n);
    if (!a)
      return t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
    t();
  });
};
nt.prototype.validatePersonalMessage = function(e, t) {
  const r = this;
  if (e.from === void 0)
    return t(new Error("Undefined address - from address required to sign personal message."));
  if (e.data === void 0)
    return t(new Error("Undefined message - message required to sign personal message."));
  if (!V0(e.data))
    return t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
  r.validateSender(e.from, function(n, a) {
    if (n)
      return t(n);
    if (!a)
      return t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
    t();
  });
};
nt.prototype.validateDecryptMessage = function(e, t) {
  const r = this;
  if (e.from === void 0)
    return t(new Error("Undefined address - from address required to decrypt message."));
  if (e.data === void 0)
    return t(new Error("Undefined message - message required to decrypt message."));
  if (!V0(e.data))
    return t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."));
  r.validateSender(e.from, function(n, a) {
    if (n)
      return t(n);
    if (!a)
      return t(new Error(`Unknown address - unable to decrypt message for this address: "${e.from}"`));
    t();
  });
};
nt.prototype.validateEncryptionPublicKey = function(e, t) {
  this.validateSender(e, function(n, a) {
    if (n)
      return t(n);
    if (!a)
      return t(new Error(`Unknown address - unable to obtain encryption public key for this address: "${e}"`));
    t();
  });
};
nt.prototype.validateTypedMessage = function(e, t) {
  if (e.from === void 0)
    return t(new Error("Undefined address - from address required to sign typed data."));
  if (e.data === void 0)
    return t(new Error("Undefined data - message required to sign typed data."));
  this.validateSender(e.from, function(r, n) {
    if (r)
      return t(r);
    if (!n)
      return t(new Error(`Unknown address - unable to sign message for this address: "${e.from}"`));
    t();
  });
};
nt.prototype.validateSender = function(e, t) {
  const r = this;
  if (!e)
    return t(null, !1);
  r.getAccounts(function(n, a) {
    if (n)
      return t(n);
    const i = a.map(pB).indexOf(e.toLowerCase()) !== -1;
    t(null, i);
  });
};
nt.prototype.finalizeAndSubmitTx = function(e, t) {
  const r = this;
  r.nonceLock.take(function() {
    Pt([
      r.fillInTxExtras.bind(r, e),
      r.signTransaction.bind(r),
      r.publishTransaction.bind(r)
    ], function(n, a) {
      if (r.nonceLock.leave(), n)
        return t(n);
      t(null, a);
    });
  });
};
nt.prototype.finalizeTx = function(e, t) {
  const r = this;
  r.nonceLock.take(function() {
    Pt([
      r.fillInTxExtras.bind(r, e),
      r.signTransaction.bind(r)
    ], function(n, a) {
      if (r.nonceLock.leave(), n)
        return t(n);
      t(null, { raw: a, tx: e });
    });
  });
};
nt.prototype.publishTransaction = function(e, t) {
  this.emitPayload({
    method: "eth_sendRawTransaction",
    params: [e]
  }, function(n, a) {
    if (n)
      return t(n);
    t(null, a.result);
  });
};
nt.prototype.estimateGas = function(e, t) {
  lB(this.engine, e, t);
};
nt.prototype.getGasPrice = function(e) {
  this.emitPayload({ method: "eth_gasPrice", params: [] }, function(r, n) {
    if (r)
      return e(r);
    e(null, n.result);
  });
};
nt.prototype.fillInTxExtras = function(e, t) {
  const r = this, n = e.from, a = {};
  e.gasPrice === void 0 && (a.gasPrice = r.getGasPrice.bind(r)), e.nonce === void 0 && (a.nonce = r.emitPayload.bind(r, { method: "eth_getTransactionCount", params: [n, "pending"] })), e.gas === void 0 && (a.gas = r.estimateGas.bind(r, dB(e))), oB(a, function(i, s) {
    if (i)
      return t(i);
    const f = {};
    s.gasPrice && (f.gasPrice = s.gasPrice), s.nonce && (f.nonce = s.nonce.result), s.gas && (f.gas = s.gas), t(null, Nn(e, f));
  });
};
function dB(e) {
  return {
    from: e.from,
    to: e.to,
    value: e.value,
    data: e.data,
    gas: e.gas,
    gasPrice: e.gasPrice,
    nonce: e.nonce
  };
}
function pB(e) {
  return e.toLowerCase();
}
function Is(e) {
  const t = $o.addHexPrefix(e);
  return $o.isValidAddress(t);
}
function ip(e) {
  const t = $o.addHexPrefix(e);
  return !$o.isValidAddress(t) && V0(e);
}
function V0(e) {
  return !(typeof e == "string") || !(e.slice(0, 2) === "0x") ? !1 : e.slice(2).match(hB);
}
function Ln(e) {
  return function(t, r) {
    r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'));
  };
}
const vB = {
  v: 5e3,
  d: "Gas limit of the Genesis block."
}, yB = {
  v: 17179869184,
  d: "Difficulty of the Genesis block."
}, gB = {
  v: "0x0000000000000042",
  d: "the geneis nonce"
}, bB = {
  v: "0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa",
  d: "extra data "
}, _B = {
  v: "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
  d: "genesis hash"
}, mB = {
  v: "0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544",
  d: "the genesis state root"
}, wB = {
  v: 5e3,
  d: "Minimum the gas limit may ever be."
}, xB = {
  v: 1024,
  d: "The bound divisor of the gas limit, used in update calculations."
}, MB = {
  v: 131072,
  d: "The minimum that the difficulty may ever be."
}, EB = {
  v: 2048,
  d: "The bound divisor of the difficulty, used in the update calculations."
}, SB = {
  v: 13,
  d: "The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."
}, AB = {
  v: 32,
  d: "Maximum size extra data may be after Genesis."
}, $B = {
  v: 3e4,
  d: "Duration between proof-of-work epochs."
}, RB = {
  v: 1024,
  d: "Maximum size of VM stack allowed."
}, BB = {
  v: 1024,
  d: "Maximum depth of call/create stack."
}, TB = {
  v: [
    0,
    2,
    3,
    5,
    8,
    10,
    20
  ],
  d: "Once per operation, for a selection of them."
}, IB = {
  v: 10,
  d: "Once per EXP instuction."
}, PB = {
  v: 10,
  d: "Times ceil(log256(exponent)) for the EXP instruction."
}, OB = {
  v: 30,
  d: "Once per SHA3 operation."
}, LB = {
  v: 6,
  d: "Once per word of the SHA3 operation's data."
}, CB = {
  v: 50,
  d: "Once per SLOAD operation."
}, kB = {
  v: 2e4,
  d: "Once per SSTORE operation if the zeroness changes from zero."
}, NB = {
  v: 5e3,
  d: "Once per SSTORE operation if the zeroness does not change from zero."
}, qB = {
  v: 15e3,
  d: "Once per SSTORE operation if the zeroness changes to zero."
}, FB = {
  v: 1,
  d: "Refunded gas, once per SSTORE operation if the zeroness changes to zero."
}, UB = {
  v: 375,
  d: "Per LOG* operation."
}, DB = {
  v: 8,
  d: "Per byte in a LOG* operation's data."
}, jB = {
  v: 375,
  d: "Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."
}, HB = {
  v: 32e3,
  d: "Once per CREATE operation & contract-creation transaction."
}, zB = {
  v: 40,
  d: "Once per CALL operation & message call transaction."
}, KB = {
  v: 2300,
  d: "Free gas given at beginning of call."
}, WB = {
  v: 9e3,
  d: "Paid for CALL when the value transfor is non-zero."
}, GB = {
  v: 25e3,
  d: "Paid for CALL when the destination address didn't exist prior."
}, VB = {
  v: 24e3,
  d: "Refunded following a suicide operation."
}, ZB = {
  v: 3,
  d: "Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."
}, JB = {
  v: 512,
  d: "Divisor for the quadratic particle of the memory cost equation."
}, YB = {
  v: 200,
  d: ""
}, XB = {
  v: 21e3,
  d: "Per transaction. NOTE: Not payable on data of calls between transactions."
}, QB = {
  v: 32e3,
  d: "the cost of creating a contract via tx"
}, eT = {
  v: 4,
  d: "Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."
}, tT = {
  v: 68,
  d: "Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."
}, rT = {
  v: 3,
  d: "Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."
}, nT = {
  v: 3e3,
  d: ""
}, iT = {
  v: 60,
  d: ""
}, aT = {
  v: 12,
  d: ""
}, oT = {
  v: 600,
  d: ""
}, fT = {
  v: 120,
  d: ""
}, sT = {
  v: 15,
  d: ""
}, uT = {
  v: 3,
  d: ""
}, cT = {
  v: "5000000000000000000",
  d: "the amount a miner get rewarded for mining a block"
}, lT = {
  v: "625000000000000000",
  d: "The amount of wei a miner of an uncle block gets for being inculded in the blockchain"
}, hT = {
  v: "156250000000000000",
  d: "the amount a miner gets for inculding a uncle"
}, dT = {
  v: 115e4,
  d: "the block that the Homestead fork started at"
}, pT = {
  v: 2463e3,
  d: "the block that the Homestead Reprice (EIP150) fork started at"
}, vT = {
  v: 1e5,
  d: "Exponential difficulty timebomb period"
}, yT = {
  v: 2
}, gT = {
  genesisGasLimit: vB,
  genesisDifficulty: yB,
  genesisNonce: gB,
  genesisExtraData: bB,
  genesisHash: _B,
  genesisStateRoot: mB,
  minGasLimit: wB,
  gasLimitBoundDivisor: xB,
  minimumDifficulty: MB,
  difficultyBoundDivisor: EB,
  durationLimit: SB,
  maximumExtraDataSize: AB,
  epochDuration: $B,
  stackLimit: RB,
  callCreateDepth: BB,
  tierStepGas: TB,
  expGas: IB,
  expByteGas: PB,
  sha3Gas: OB,
  sha3WordGas: LB,
  sloadGas: CB,
  sstoreSetGas: kB,
  sstoreResetGas: NB,
  sstoreRefundGas: qB,
  jumpdestGas: FB,
  logGas: UB,
  logDataGas: DB,
  logTopicGas: jB,
  createGas: HB,
  callGas: zB,
  callStipend: KB,
  callValueTransferGas: WB,
  callNewAccountGas: GB,
  suicideRefundGas: VB,
  memoryGas: ZB,
  quadCoeffDiv: JB,
  createDataGas: YB,
  txGas: XB,
  txCreation: QB,
  txDataZeroGas: eT,
  txDataNonZeroGas: tT,
  copyGas: rT,
  ecrecoverGas: nT,
  sha256Gas: iT,
  sha256WordGas: aT,
  ripemd160Gas: oT,
  ripemd160WordGas: fT,
  identityGas: sT,
  identityWordGas: uT,
  minerReward: cT,
  ommerReward: lT,
  niblingReward: hT,
  homeSteadForkNumber: dT,
  homesteadRepriceForkNumber: pT,
  timebombPeriod: vT,
  freeBlockPeriod: yT
};
function bT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var Hr = ha, Aa = gT, an = Hr.BN, _T = new an("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16), mT = function() {
  function e(t) {
    bT(this, e), t = t || {};
    var r = [{
      name: "nonce",
      length: 32,
      allowLess: !0,
      default: new Buffer([])
    }, {
      name: "gasPrice",
      length: 32,
      allowLess: !0,
      default: new Buffer([])
    }, {
      name: "gasLimit",
      alias: "gas",
      length: 32,
      allowLess: !0,
      default: new Buffer([])
    }, {
      name: "to",
      allowZero: !0,
      length: 20,
      default: new Buffer([])
    }, {
      name: "value",
      length: 32,
      allowLess: !0,
      default: new Buffer([])
    }, {
      name: "data",
      alias: "input",
      allowZero: !0,
      default: new Buffer([])
    }, {
      name: "v",
      allowZero: !0,
      default: new Buffer([28])
    }, {
      name: "r",
      length: 32,
      allowZero: !0,
      allowLess: !0,
      default: new Buffer([])
    }, {
      name: "s",
      length: 32,
      allowZero: !0,
      allowLess: !0,
      default: new Buffer([])
    }];
    Hr.defineProperties(this, r, t), Object.defineProperty(this, "from", {
      enumerable: !0,
      configurable: !0,
      get: this.getSenderAddress.bind(this)
    });
    var n = Hr.bufferToInt(this.v), a = Math.floor((n - 35) / 2);
    a < 0 && (a = 0), this._chainId = a || t.chainId || 0, this._homestead = !0;
  }
  return e.prototype.toCreationAddress = function() {
    return this.to.toString("hex") === "";
  }, e.prototype.hash = function(r) {
    r === void 0 && (r = !0);
    var n = void 0;
    if (r)
      n = this.raw;
    else if (this._chainId > 0) {
      var a = this.raw.slice();
      this.v = this._chainId, this.r = 0, this.s = 0, n = this.raw, this.raw = a;
    } else
      n = this.raw.slice(0, 6);
    return Hr.rlphash(n);
  }, e.prototype.getChainId = function() {
    return this._chainId;
  }, e.prototype.getSenderAddress = function() {
    if (this._from)
      return this._from;
    var r = this.getSenderPublicKey();
    return this._from = Hr.publicToAddress(r), this._from;
  }, e.prototype.getSenderPublicKey = function() {
    if ((!this._senderPubKey || !this._senderPubKey.length) && !this.verifySignature())
      throw new Error("Invalid Signature");
    return this._senderPubKey;
  }, e.prototype.verifySignature = function() {
    var r = this.hash(!1);
    if (this._homestead && new an(this.s).cmp(_T) === 1)
      return !1;
    try {
      var n = Hr.bufferToInt(this.v);
      this._chainId > 0 && (n -= this._chainId * 2 + 8), this._senderPubKey = Hr.ecrecover(r, n, this.r, this.s);
    } catch {
      return !1;
    }
    return !!this._senderPubKey;
  }, e.prototype.sign = function(r) {
    var n = this.hash(!1), a = Hr.ecsign(n, r);
    this._chainId > 0 && (a.v += this._chainId * 2 + 8), Object.assign(this, a);
  }, e.prototype.getDataFee = function() {
    for (var r = this.raw[5], n = new an(0), a = 0; a < r.length; a++)
      r[a] === 0 ? n.iaddn(Aa.txDataZeroGas.v) : n.iaddn(Aa.txDataNonZeroGas.v);
    return n;
  }, e.prototype.getBaseFee = function() {
    var r = this.getDataFee().iaddn(Aa.txGas.v);
    return this._homestead && this.toCreationAddress() && r.iaddn(Aa.txCreation.v), r;
  }, e.prototype.getUpfrontCost = function() {
    return new an(this.gasLimit).imul(new an(this.gasPrice)).iadd(new an(this.value));
  }, e.prototype.validate = function(r) {
    var n = [];
    return this.verifySignature() || n.push("Invalid Signature"), this.getBaseFee().cmp(new an(this.gasLimit)) > 0 && n.push(["gas limit is too low. Need at least " + this.getBaseFee()]), r === void 0 || r === !1 ? n.length === 0 : n.join(" ");
  }, e;
}(), ap = mT;
const wT = /* @__PURE__ */ ee({
  __proto__: null,
  default: ap
}, [ap]), xT = /* @__PURE__ */ Q(wT), MT = hr.inherits, ET = xT, $a = ha, ST = w0, AT = RA.blockTagForPayload;
MT(x2, ST);
function x2(e) {
  const t = this;
  t.nonceCache = {};
}
x2.prototype.handleRequest = function(e, t, r) {
  const n = this;
  switch (e.method) {
    case "eth_getTransactionCount":
      var a = AT(e), i = e.params[0].toLowerCase(), s = n.nonceCache[i];
      a === "pending" ? s ? r(null, s) : t(function(f, v, m) {
        if (f)
          return m();
        n.nonceCache[i] === void 0 && (n.nonceCache[i] = v), m();
      }) : t();
      return;
    case "eth_sendRawTransaction":
      t(function(f, v, m) {
        if (f)
          return m();
        var _ = e.params[0];
        $a.stripHexPrefix(_), Buffer.from($a.stripHexPrefix(_), "hex");
        var O = new ET(Buffer.from($a.stripHexPrefix(_), "hex")), P = "0x" + O.getSenderAddress().toString("hex").toLowerCase(), C = $a.bufferToInt(O.nonce);
        C++;
        var M = C.toString(16);
        M.length % 2 && (M = "0" + M), M = "0x" + M, n.nonceCache[P] = M, m();
      });
      return;
    case "evm_revert":
      n.nonceCache = {}, t();
      return;
    default:
      t();
      return;
  }
};
R0.default;
var Z0 = {}, st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
var M2 = st.getLocalStorage = O2 = st.getLocalStorageOrThrow = P2 = st.getCrypto = I2 = st.getCryptoOrThrow = T2 = st.getLocation = B2 = st.getLocationOrThrow = R2 = st.getNavigator = $2 = st.getNavigatorOrThrow = A2 = st.getDocument = S2 = st.getDocumentOrThrow = E2 = st.getFromWindowOrThrow = J0 = st.getFromWindow = void 0;
function Bn(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
var J0 = st.getFromWindow = Bn;
function _i(e) {
  const t = Bn(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
var E2 = st.getFromWindowOrThrow = _i;
function $T() {
  return _i("document");
}
var S2 = st.getDocumentOrThrow = $T;
function RT() {
  return Bn("document");
}
var A2 = st.getDocument = RT;
function BT() {
  return _i("navigator");
}
var $2 = st.getNavigatorOrThrow = BT;
function TT() {
  return Bn("navigator");
}
var R2 = st.getNavigator = TT;
function IT() {
  return _i("location");
}
var B2 = st.getLocationOrThrow = IT;
function PT() {
  return Bn("location");
}
var T2 = st.getLocation = PT;
function OT() {
  return _i("crypto");
}
var I2 = st.getCryptoOrThrow = OT;
function LT() {
  return Bn("crypto");
}
var P2 = st.getCrypto = LT;
function CT() {
  return _i("localStorage");
}
var O2 = st.getLocalStorageOrThrow = CT;
function kT() {
  return Bn("localStorage");
}
M2 = st.getLocalStorage = kT;
const NT = /* @__PURE__ */ ee({
  __proto__: null,
  get getLocalStorage() {
    return M2;
  },
  get getLocalStorageOrThrow() {
    return O2;
  },
  get getCrypto() {
    return P2;
  },
  get getCryptoOrThrow() {
    return I2;
  },
  get getLocation() {
    return T2;
  },
  get getLocationOrThrow() {
    return B2;
  },
  get getNavigator() {
    return R2;
  },
  get getNavigatorOrThrow() {
    return $2;
  },
  get getDocument() {
    return A2;
  },
  get getDocumentOrThrow() {
    return S2;
  },
  get getFromWindowOrThrow() {
    return E2;
  },
  get getFromWindow() {
    return J0;
  },
  default: st
}, [st]), qT = /* @__PURE__ */ Q(NT);
Object.defineProperty(Z0, "__esModule", { value: !0 });
Z0.getWindowMetadata = void 0;
const op = qT;
function FT() {
  let e, t;
  try {
    e = op.getDocumentOrThrow(), t = op.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const O = e.getElementsByTagName("link"), P = [];
    for (let C = 0; C < O.length; C++) {
      const M = O[C], k = M.getAttribute("rel");
      if (k && k.toLowerCase().indexOf("icon") > -1) {
        const q = M.getAttribute("href");
        if (q)
          if (q.toLowerCase().indexOf("https:") === -1 && q.toLowerCase().indexOf("http:") === -1 && q.indexOf("//") !== 0) {
            let D = t.protocol + "//" + t.host;
            if (q.indexOf("/") === 0)
              D += q;
            else {
              const U = t.pathname.split("/");
              U.pop(), D += U.join("/") + "/" + q;
            }
            P.push(D);
          } else if (q.indexOf("//") === 0) {
            const D = t.protocol + q;
            P.push(D);
          } else
            P.push(q);
      }
    }
    return P;
  }
  function n(...O) {
    const P = e.getElementsByTagName("meta");
    for (let C = 0; C < P.length; C++) {
      const M = P[C], k = ["itemprop", "property", "name"].map((q) => M.getAttribute(q)).filter((q) => q ? O.includes(q) : !1);
      if (k.length && k) {
        const q = M.getAttribute("content");
        if (q)
          return q;
      }
    }
    return "";
  }
  function a() {
    let O = n("name", "og:site_name", "og:title", "twitter:title");
    return O || (O = e.title), O;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const s = a(), f = i(), v = t.origin, m = r();
  return {
    description: f,
    url: v,
    icons: m,
    name: s
  };
}
Z0.getWindowMetadata = FT;
const UT = J0;
var DT = { exports: {} };
(function(e) {
  (function(t, r) {
    function n(V, g) {
      if (!V)
        throw new Error(g || "Assertion failed");
    }
    function a(V, g) {
      V.super_ = g;
      var l = function() {
      };
      l.prototype = g.prototype, V.prototype = new l(), V.prototype.constructor = V;
    }
    function i(V, g, l) {
      if (i.isBN(V))
        return V;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, V !== null && ((g === "le" || g === "be") && (l = g, g = 10), this._init(V || 0, g || 10, l || "be"));
    }
    typeof t == "object" ? t.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var s;
    try {
      s = er.Buffer;
    } catch {
    }
    i.isBN = function(g) {
      return g instanceof i ? !0 : g !== null && typeof g == "object" && g.constructor.wordSize === i.wordSize && Array.isArray(g.words);
    }, i.max = function(g, l) {
      return g.cmp(l) > 0 ? g : l;
    }, i.min = function(g, l) {
      return g.cmp(l) < 0 ? g : l;
    }, i.prototype._init = function(g, l, u) {
      if (typeof g == "number")
        return this._initNumber(g, l, u);
      if (typeof g == "object")
        return this._initArray(g, l, u);
      l === "hex" && (l = 16), n(l === (l | 0) && l >= 2 && l <= 36), g = g.toString().replace(/\s+/g, "");
      var o = 0;
      g[0] === "-" && o++, l === 16 ? this._parseHex(g, o) : this._parseBase(g, l, o), g[0] === "-" && (this.negative = 1), this.strip(), u === "le" && this._initArray(this.toArray(), l, u);
    }, i.prototype._initNumber = function(g, l, u) {
      g < 0 && (this.negative = 1, g = -g), g < 67108864 ? (this.words = [g & 67108863], this.length = 1) : g < 4503599627370496 ? (this.words = [
        g & 67108863,
        g / 67108864 & 67108863
      ], this.length = 2) : (n(g < 9007199254740992), this.words = [
        g & 67108863,
        g / 67108864 & 67108863,
        1
      ], this.length = 3), u === "le" && this._initArray(this.toArray(), l, u);
    }, i.prototype._initArray = function(g, l, u) {
      if (n(typeof g.length == "number"), g.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(g.length / 3), this.words = new Array(this.length);
      for (var o = 0; o < this.length; o++)
        this.words[o] = 0;
      var c, y, x = 0;
      if (u === "be")
        for (o = g.length - 1, c = 0; o >= 0; o -= 3)
          y = g[o] | g[o - 1] << 8 | g[o - 2] << 16, this.words[c] |= y << x & 67108863, this.words[c + 1] = y >>> 26 - x & 67108863, x += 24, x >= 26 && (x -= 26, c++);
      else if (u === "le")
        for (o = 0, c = 0; o < g.length; o += 3)
          y = g[o] | g[o + 1] << 8 | g[o + 2] << 16, this.words[c] |= y << x & 67108863, this.words[c + 1] = y >>> 26 - x & 67108863, x += 24, x >= 26 && (x -= 26, c++);
      return this.strip();
    };
    function f(V, g, l) {
      for (var u = 0, o = Math.min(V.length, l), c = g; c < o; c++) {
        var y = V.charCodeAt(c) - 48;
        u <<= 4, y >= 49 && y <= 54 ? u |= y - 49 + 10 : y >= 17 && y <= 22 ? u |= y - 17 + 10 : u |= y & 15;
      }
      return u;
    }
    i.prototype._parseHex = function(g, l) {
      this.length = Math.ceil((g.length - l) / 6), this.words = new Array(this.length);
      for (var u = 0; u < this.length; u++)
        this.words[u] = 0;
      var o, c, y = 0;
      for (u = g.length - 6, o = 0; u >= l; u -= 6)
        c = f(g, u, u + 6), this.words[o] |= c << y & 67108863, this.words[o + 1] |= c >>> 26 - y & 4194303, y += 24, y >= 26 && (y -= 26, o++);
      u + 6 !== l && (c = f(g, l, u + 6), this.words[o] |= c << y & 67108863, this.words[o + 1] |= c >>> 26 - y & 4194303), this.strip();
    };
    function v(V, g, l, u) {
      for (var o = 0, c = Math.min(V.length, l), y = g; y < c; y++) {
        var x = V.charCodeAt(y) - 48;
        o *= u, x >= 49 ? o += x - 49 + 10 : x >= 17 ? o += x - 17 + 10 : o += x;
      }
      return o;
    }
    i.prototype._parseBase = function(g, l, u) {
      this.words = [0], this.length = 1;
      for (var o = 0, c = 1; c <= 67108863; c *= l)
        o++;
      o--, c = c / l | 0;
      for (var y = g.length - u, x = y % o, b = Math.min(y, y - x) + u, h = 0, d = u; d < b; d += o)
        h = v(g, d, d + o, l), this.imuln(c), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      if (x !== 0) {
        var w = 1;
        for (h = v(g, d, g.length, l), d = 0; d < x; d++)
          w *= l;
        this.imuln(w), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      }
    }, i.prototype.copy = function(g) {
      g.words = new Array(this.length);
      for (var l = 0; l < this.length; l++)
        g.words[l] = this.words[l];
      g.length = this.length, g.negative = this.negative, g.red = this.red;
    }, i.prototype.clone = function() {
      var g = new i(null);
      return this.copy(g), g;
    }, i.prototype._expand = function(g) {
      for (; this.length < g; )
        this.words[this.length++] = 0;
      return this;
    }, i.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, i.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, i.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var m = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], _ = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], O = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    i.prototype.toString = function(g, l) {
      g = g || 10, l = l | 0 || 1;
      var u;
      if (g === 16 || g === "hex") {
        u = "";
        for (var o = 0, c = 0, y = 0; y < this.length; y++) {
          var x = this.words[y], b = ((x << o | c) & 16777215).toString(16);
          c = x >>> 24 - o & 16777215, c !== 0 || y !== this.length - 1 ? u = m[6 - b.length] + b + u : u = b + u, o += 2, o >= 26 && (o -= 26, y--);
        }
        for (c !== 0 && (u = c.toString(16) + u); u.length % l !== 0; )
          u = "0" + u;
        return this.negative !== 0 && (u = "-" + u), u;
      }
      if (g === (g | 0) && g >= 2 && g <= 36) {
        var h = _[g], d = O[g];
        u = "";
        var w = this.clone();
        for (w.negative = 0; !w.isZero(); ) {
          var p = w.modn(d).toString(g);
          w = w.idivn(d), w.isZero() ? u = p + u : u = m[h - p.length] + p + u;
        }
        for (this.isZero() && (u = "0" + u); u.length % l !== 0; )
          u = "0" + u;
        return this.negative !== 0 && (u = "-" + u), u;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var g = this.words[0];
      return this.length === 2 ? g += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? g += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -g : g;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(g, l) {
      return n(typeof s < "u"), this.toArrayLike(s, g, l);
    }, i.prototype.toArray = function(g, l) {
      return this.toArrayLike(Array, g, l);
    }, i.prototype.toArrayLike = function(g, l, u) {
      var o = this.byteLength(), c = u || Math.max(1, o);
      n(o <= c, "byte array longer than desired length"), n(c > 0, "Requested array length <= 0"), this.strip();
      var y = l === "le", x = new g(c), b, h, d = this.clone();
      if (y) {
        for (h = 0; !d.isZero(); h++)
          b = d.andln(255), d.iushrn(8), x[h] = b;
        for (; h < c; h++)
          x[h] = 0;
      } else {
        for (h = 0; h < c - o; h++)
          x[h] = 0;
        for (h = 0; !d.isZero(); h++)
          b = d.andln(255), d.iushrn(8), x[c - h - 1] = b;
      }
      return x;
    }, Math.clz32 ? i.prototype._countBits = function(g) {
      return 32 - Math.clz32(g);
    } : i.prototype._countBits = function(g) {
      var l = g, u = 0;
      return l >= 4096 && (u += 13, l >>>= 13), l >= 64 && (u += 7, l >>>= 7), l >= 8 && (u += 4, l >>>= 4), l >= 2 && (u += 2, l >>>= 2), u + l;
    }, i.prototype._zeroBits = function(g) {
      if (g === 0)
        return 26;
      var l = g, u = 0;
      return (l & 8191) === 0 && (u += 13, l >>>= 13), (l & 127) === 0 && (u += 7, l >>>= 7), (l & 15) === 0 && (u += 4, l >>>= 4), (l & 3) === 0 && (u += 2, l >>>= 2), (l & 1) === 0 && u++, u;
    }, i.prototype.bitLength = function() {
      var g = this.words[this.length - 1], l = this._countBits(g);
      return (this.length - 1) * 26 + l;
    };
    function P(V) {
      for (var g = new Array(V.bitLength()), l = 0; l < g.length; l++) {
        var u = l / 26 | 0, o = l % 26;
        g[l] = (V.words[u] & 1 << o) >>> o;
      }
      return g;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var g = 0, l = 0; l < this.length; l++) {
        var u = this._zeroBits(this.words[l]);
        if (g += u, u !== 26)
          break;
      }
      return g;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(g) {
      return this.negative !== 0 ? this.abs().inotn(g).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(g) {
      return this.testn(g - 1) ? this.notn(g).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(g) {
      for (; this.length < g.length; )
        this.words[this.length++] = 0;
      for (var l = 0; l < g.length; l++)
        this.words[l] = this.words[l] | g.words[l];
      return this.strip();
    }, i.prototype.ior = function(g) {
      return n((this.negative | g.negative) === 0), this.iuor(g);
    }, i.prototype.or = function(g) {
      return this.length > g.length ? this.clone().ior(g) : g.clone().ior(this);
    }, i.prototype.uor = function(g) {
      return this.length > g.length ? this.clone().iuor(g) : g.clone().iuor(this);
    }, i.prototype.iuand = function(g) {
      var l;
      this.length > g.length ? l = g : l = this;
      for (var u = 0; u < l.length; u++)
        this.words[u] = this.words[u] & g.words[u];
      return this.length = l.length, this.strip();
    }, i.prototype.iand = function(g) {
      return n((this.negative | g.negative) === 0), this.iuand(g);
    }, i.prototype.and = function(g) {
      return this.length > g.length ? this.clone().iand(g) : g.clone().iand(this);
    }, i.prototype.uand = function(g) {
      return this.length > g.length ? this.clone().iuand(g) : g.clone().iuand(this);
    }, i.prototype.iuxor = function(g) {
      var l, u;
      this.length > g.length ? (l = this, u = g) : (l = g, u = this);
      for (var o = 0; o < u.length; o++)
        this.words[o] = l.words[o] ^ u.words[o];
      if (this !== l)
        for (; o < l.length; o++)
          this.words[o] = l.words[o];
      return this.length = l.length, this.strip();
    }, i.prototype.ixor = function(g) {
      return n((this.negative | g.negative) === 0), this.iuxor(g);
    }, i.prototype.xor = function(g) {
      return this.length > g.length ? this.clone().ixor(g) : g.clone().ixor(this);
    }, i.prototype.uxor = function(g) {
      return this.length > g.length ? this.clone().iuxor(g) : g.clone().iuxor(this);
    }, i.prototype.inotn = function(g) {
      n(typeof g == "number" && g >= 0);
      var l = Math.ceil(g / 26) | 0, u = g % 26;
      this._expand(l), u > 0 && l--;
      for (var o = 0; o < l; o++)
        this.words[o] = ~this.words[o] & 67108863;
      return u > 0 && (this.words[o] = ~this.words[o] & 67108863 >> 26 - u), this.strip();
    }, i.prototype.notn = function(g) {
      return this.clone().inotn(g);
    }, i.prototype.setn = function(g, l) {
      n(typeof g == "number" && g >= 0);
      var u = g / 26 | 0, o = g % 26;
      return this._expand(u + 1), l ? this.words[u] = this.words[u] | 1 << o : this.words[u] = this.words[u] & ~(1 << o), this.strip();
    }, i.prototype.iadd = function(g) {
      var l;
      if (this.negative !== 0 && g.negative === 0)
        return this.negative = 0, l = this.isub(g), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && g.negative !== 0)
        return g.negative = 0, l = this.isub(g), g.negative = 1, l._normSign();
      var u, o;
      this.length > g.length ? (u = this, o = g) : (u = g, o = this);
      for (var c = 0, y = 0; y < o.length; y++)
        l = (u.words[y] | 0) + (o.words[y] | 0) + c, this.words[y] = l & 67108863, c = l >>> 26;
      for (; c !== 0 && y < u.length; y++)
        l = (u.words[y] | 0) + c, this.words[y] = l & 67108863, c = l >>> 26;
      if (this.length = u.length, c !== 0)
        this.words[this.length] = c, this.length++;
      else if (u !== this)
        for (; y < u.length; y++)
          this.words[y] = u.words[y];
      return this;
    }, i.prototype.add = function(g) {
      var l;
      return g.negative !== 0 && this.negative === 0 ? (g.negative = 0, l = this.sub(g), g.negative ^= 1, l) : g.negative === 0 && this.negative !== 0 ? (this.negative = 0, l = g.sub(this), this.negative = 1, l) : this.length > g.length ? this.clone().iadd(g) : g.clone().iadd(this);
    }, i.prototype.isub = function(g) {
      if (g.negative !== 0) {
        g.negative = 0;
        var l = this.iadd(g);
        return g.negative = 1, l._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(g), this.negative = 1, this._normSign();
      var u = this.cmp(g);
      if (u === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var o, c;
      u > 0 ? (o = this, c = g) : (o = g, c = this);
      for (var y = 0, x = 0; x < c.length; x++)
        l = (o.words[x] | 0) - (c.words[x] | 0) + y, y = l >> 26, this.words[x] = l & 67108863;
      for (; y !== 0 && x < o.length; x++)
        l = (o.words[x] | 0) + y, y = l >> 26, this.words[x] = l & 67108863;
      if (y === 0 && x < o.length && o !== this)
        for (; x < o.length; x++)
          this.words[x] = o.words[x];
      return this.length = Math.max(this.length, x), o !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(g) {
      return this.clone().isub(g);
    };
    function C(V, g, l) {
      l.negative = g.negative ^ V.negative;
      var u = V.length + g.length | 0;
      l.length = u, u = u - 1 | 0;
      var o = V.words[0] | 0, c = g.words[0] | 0, y = o * c, x = y & 67108863, b = y / 67108864 | 0;
      l.words[0] = x;
      for (var h = 1; h < u; h++) {
        for (var d = b >>> 26, w = b & 67108863, p = Math.min(h, g.length - 1), S = Math.max(0, h - V.length + 1); S <= p; S++) {
          var G = h - S | 0;
          o = V.words[G] | 0, c = g.words[S] | 0, y = o * c + w, d += y / 67108864 | 0, w = y & 67108863;
        }
        l.words[h] = w | 0, b = d | 0;
      }
      return b !== 0 ? l.words[h] = b | 0 : l.length--, l.strip();
    }
    var M = function(g, l, u) {
      var o = g.words, c = l.words, y = u.words, x = 0, b, h, d, w = o[0] | 0, p = w & 8191, S = w >>> 13, G = o[1] | 0, B = G & 8191, R = G >>> 13, N = o[2] | 0, H = N & 8191, Z = N >>> 13, oe = o[3] | 0, $ = oe & 8191, A = oe >>> 13, X = o[4] | 0, te = X & 8191, pe = X >>> 13, z = o[5] | 0, I = z & 8191, L = z >>> 13, j = o[6] | 0, ie = j & 8191, he = j >>> 13, Y = o[7] | 0, ae = Y & 8191, de = Y >>> 13, ge = o[8] | 0, ye = ge & 8191, F = ge >>> 13, E = o[9] | 0, T = E & 8191, W = E >>> 13, ne = c[0] | 0, fe = ne & 8191, ce = ne >>> 13, me = c[1] | 0, _e = me & 8191, be = me >>> 13, Te = c[2] | 0, we = Te & 8191, xe = Te >>> 13, Ke = c[3] | 0, Pe = Ke & 8191, Me = Ke >>> 13, We = c[4] | 0, Oe = We & 8191, Ee = We >>> 13, Ge = c[5] | 0, Le = Ge & 8191, Se = Ge >>> 13, Ve = c[6] | 0, Ce = Ve & 8191, Ae = Ve >>> 13, Ze = c[7] | 0, ke = Ze & 8191, $e = Ze >>> 13, Je = c[8] | 0, Ne = Je & 8191, Re = Je >>> 13, Ye = c[9] | 0, qe = Ye & 8191, Be = Ye >>> 13;
      u.negative = g.negative ^ l.negative, u.length = 19, b = Math.imul(p, fe), h = Math.imul(p, ce), h = h + Math.imul(S, fe) | 0, d = Math.imul(S, ce);
      var He = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, b = Math.imul(B, fe), h = Math.imul(B, ce), h = h + Math.imul(R, fe) | 0, d = Math.imul(R, ce), b = b + Math.imul(p, _e) | 0, h = h + Math.imul(p, be) | 0, h = h + Math.imul(S, _e) | 0, d = d + Math.imul(S, be) | 0;
      var Ue = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Ue >>> 26) | 0, Ue &= 67108863, b = Math.imul(H, fe), h = Math.imul(H, ce), h = h + Math.imul(Z, fe) | 0, d = Math.imul(Z, ce), b = b + Math.imul(B, _e) | 0, h = h + Math.imul(B, be) | 0, h = h + Math.imul(R, _e) | 0, d = d + Math.imul(R, be) | 0, b = b + Math.imul(p, we) | 0, h = h + Math.imul(p, xe) | 0, h = h + Math.imul(S, we) | 0, d = d + Math.imul(S, xe) | 0;
      var De = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, b = Math.imul($, fe), h = Math.imul($, ce), h = h + Math.imul(A, fe) | 0, d = Math.imul(A, ce), b = b + Math.imul(H, _e) | 0, h = h + Math.imul(H, be) | 0, h = h + Math.imul(Z, _e) | 0, d = d + Math.imul(Z, be) | 0, b = b + Math.imul(B, we) | 0, h = h + Math.imul(B, xe) | 0, h = h + Math.imul(R, we) | 0, d = d + Math.imul(R, xe) | 0, b = b + Math.imul(p, Pe) | 0, h = h + Math.imul(p, Me) | 0, h = h + Math.imul(S, Pe) | 0, d = d + Math.imul(S, Me) | 0;
      var pt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (pt >>> 26) | 0, pt &= 67108863, b = Math.imul(te, fe), h = Math.imul(te, ce), h = h + Math.imul(pe, fe) | 0, d = Math.imul(pe, ce), b = b + Math.imul($, _e) | 0, h = h + Math.imul($, be) | 0, h = h + Math.imul(A, _e) | 0, d = d + Math.imul(A, be) | 0, b = b + Math.imul(H, we) | 0, h = h + Math.imul(H, xe) | 0, h = h + Math.imul(Z, we) | 0, d = d + Math.imul(Z, xe) | 0, b = b + Math.imul(B, Pe) | 0, h = h + Math.imul(B, Me) | 0, h = h + Math.imul(R, Pe) | 0, d = d + Math.imul(R, Me) | 0, b = b + Math.imul(p, Oe) | 0, h = h + Math.imul(p, Ee) | 0, h = h + Math.imul(S, Oe) | 0, d = d + Math.imul(S, Ee) | 0;
      var vt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, b = Math.imul(I, fe), h = Math.imul(I, ce), h = h + Math.imul(L, fe) | 0, d = Math.imul(L, ce), b = b + Math.imul(te, _e) | 0, h = h + Math.imul(te, be) | 0, h = h + Math.imul(pe, _e) | 0, d = d + Math.imul(pe, be) | 0, b = b + Math.imul($, we) | 0, h = h + Math.imul($, xe) | 0, h = h + Math.imul(A, we) | 0, d = d + Math.imul(A, xe) | 0, b = b + Math.imul(H, Pe) | 0, h = h + Math.imul(H, Me) | 0, h = h + Math.imul(Z, Pe) | 0, d = d + Math.imul(Z, Me) | 0, b = b + Math.imul(B, Oe) | 0, h = h + Math.imul(B, Ee) | 0, h = h + Math.imul(R, Oe) | 0, d = d + Math.imul(R, Ee) | 0, b = b + Math.imul(p, Le) | 0, h = h + Math.imul(p, Se) | 0, h = h + Math.imul(S, Le) | 0, d = d + Math.imul(S, Se) | 0;
      var yt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, b = Math.imul(ie, fe), h = Math.imul(ie, ce), h = h + Math.imul(he, fe) | 0, d = Math.imul(he, ce), b = b + Math.imul(I, _e) | 0, h = h + Math.imul(I, be) | 0, h = h + Math.imul(L, _e) | 0, d = d + Math.imul(L, be) | 0, b = b + Math.imul(te, we) | 0, h = h + Math.imul(te, xe) | 0, h = h + Math.imul(pe, we) | 0, d = d + Math.imul(pe, xe) | 0, b = b + Math.imul($, Pe) | 0, h = h + Math.imul($, Me) | 0, h = h + Math.imul(A, Pe) | 0, d = d + Math.imul(A, Me) | 0, b = b + Math.imul(H, Oe) | 0, h = h + Math.imul(H, Ee) | 0, h = h + Math.imul(Z, Oe) | 0, d = d + Math.imul(Z, Ee) | 0, b = b + Math.imul(B, Le) | 0, h = h + Math.imul(B, Se) | 0, h = h + Math.imul(R, Le) | 0, d = d + Math.imul(R, Se) | 0, b = b + Math.imul(p, Ce) | 0, h = h + Math.imul(p, Ae) | 0, h = h + Math.imul(S, Ce) | 0, d = d + Math.imul(S, Ae) | 0;
      var gt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, b = Math.imul(ae, fe), h = Math.imul(ae, ce), h = h + Math.imul(de, fe) | 0, d = Math.imul(de, ce), b = b + Math.imul(ie, _e) | 0, h = h + Math.imul(ie, be) | 0, h = h + Math.imul(he, _e) | 0, d = d + Math.imul(he, be) | 0, b = b + Math.imul(I, we) | 0, h = h + Math.imul(I, xe) | 0, h = h + Math.imul(L, we) | 0, d = d + Math.imul(L, xe) | 0, b = b + Math.imul(te, Pe) | 0, h = h + Math.imul(te, Me) | 0, h = h + Math.imul(pe, Pe) | 0, d = d + Math.imul(pe, Me) | 0, b = b + Math.imul($, Oe) | 0, h = h + Math.imul($, Ee) | 0, h = h + Math.imul(A, Oe) | 0, d = d + Math.imul(A, Ee) | 0, b = b + Math.imul(H, Le) | 0, h = h + Math.imul(H, Se) | 0, h = h + Math.imul(Z, Le) | 0, d = d + Math.imul(Z, Se) | 0, b = b + Math.imul(B, Ce) | 0, h = h + Math.imul(B, Ae) | 0, h = h + Math.imul(R, Ce) | 0, d = d + Math.imul(R, Ae) | 0, b = b + Math.imul(p, ke) | 0, h = h + Math.imul(p, $e) | 0, h = h + Math.imul(S, ke) | 0, d = d + Math.imul(S, $e) | 0;
      var bt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, b = Math.imul(ye, fe), h = Math.imul(ye, ce), h = h + Math.imul(F, fe) | 0, d = Math.imul(F, ce), b = b + Math.imul(ae, _e) | 0, h = h + Math.imul(ae, be) | 0, h = h + Math.imul(de, _e) | 0, d = d + Math.imul(de, be) | 0, b = b + Math.imul(ie, we) | 0, h = h + Math.imul(ie, xe) | 0, h = h + Math.imul(he, we) | 0, d = d + Math.imul(he, xe) | 0, b = b + Math.imul(I, Pe) | 0, h = h + Math.imul(I, Me) | 0, h = h + Math.imul(L, Pe) | 0, d = d + Math.imul(L, Me) | 0, b = b + Math.imul(te, Oe) | 0, h = h + Math.imul(te, Ee) | 0, h = h + Math.imul(pe, Oe) | 0, d = d + Math.imul(pe, Ee) | 0, b = b + Math.imul($, Le) | 0, h = h + Math.imul($, Se) | 0, h = h + Math.imul(A, Le) | 0, d = d + Math.imul(A, Se) | 0, b = b + Math.imul(H, Ce) | 0, h = h + Math.imul(H, Ae) | 0, h = h + Math.imul(Z, Ce) | 0, d = d + Math.imul(Z, Ae) | 0, b = b + Math.imul(B, ke) | 0, h = h + Math.imul(B, $e) | 0, h = h + Math.imul(R, ke) | 0, d = d + Math.imul(R, $e) | 0, b = b + Math.imul(p, Ne) | 0, h = h + Math.imul(p, Re) | 0, h = h + Math.imul(S, Ne) | 0, d = d + Math.imul(S, Re) | 0;
      var Lt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, b = Math.imul(T, fe), h = Math.imul(T, ce), h = h + Math.imul(W, fe) | 0, d = Math.imul(W, ce), b = b + Math.imul(ye, _e) | 0, h = h + Math.imul(ye, be) | 0, h = h + Math.imul(F, _e) | 0, d = d + Math.imul(F, be) | 0, b = b + Math.imul(ae, we) | 0, h = h + Math.imul(ae, xe) | 0, h = h + Math.imul(de, we) | 0, d = d + Math.imul(de, xe) | 0, b = b + Math.imul(ie, Pe) | 0, h = h + Math.imul(ie, Me) | 0, h = h + Math.imul(he, Pe) | 0, d = d + Math.imul(he, Me) | 0, b = b + Math.imul(I, Oe) | 0, h = h + Math.imul(I, Ee) | 0, h = h + Math.imul(L, Oe) | 0, d = d + Math.imul(L, Ee) | 0, b = b + Math.imul(te, Le) | 0, h = h + Math.imul(te, Se) | 0, h = h + Math.imul(pe, Le) | 0, d = d + Math.imul(pe, Se) | 0, b = b + Math.imul($, Ce) | 0, h = h + Math.imul($, Ae) | 0, h = h + Math.imul(A, Ce) | 0, d = d + Math.imul(A, Ae) | 0, b = b + Math.imul(H, ke) | 0, h = h + Math.imul(H, $e) | 0, h = h + Math.imul(Z, ke) | 0, d = d + Math.imul(Z, $e) | 0, b = b + Math.imul(B, Ne) | 0, h = h + Math.imul(B, Re) | 0, h = h + Math.imul(R, Ne) | 0, d = d + Math.imul(R, Re) | 0, b = b + Math.imul(p, qe) | 0, h = h + Math.imul(p, Be) | 0, h = h + Math.imul(S, qe) | 0, d = d + Math.imul(S, Be) | 0;
      var Ct = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, b = Math.imul(T, _e), h = Math.imul(T, be), h = h + Math.imul(W, _e) | 0, d = Math.imul(W, be), b = b + Math.imul(ye, we) | 0, h = h + Math.imul(ye, xe) | 0, h = h + Math.imul(F, we) | 0, d = d + Math.imul(F, xe) | 0, b = b + Math.imul(ae, Pe) | 0, h = h + Math.imul(ae, Me) | 0, h = h + Math.imul(de, Pe) | 0, d = d + Math.imul(de, Me) | 0, b = b + Math.imul(ie, Oe) | 0, h = h + Math.imul(ie, Ee) | 0, h = h + Math.imul(he, Oe) | 0, d = d + Math.imul(he, Ee) | 0, b = b + Math.imul(I, Le) | 0, h = h + Math.imul(I, Se) | 0, h = h + Math.imul(L, Le) | 0, d = d + Math.imul(L, Se) | 0, b = b + Math.imul(te, Ce) | 0, h = h + Math.imul(te, Ae) | 0, h = h + Math.imul(pe, Ce) | 0, d = d + Math.imul(pe, Ae) | 0, b = b + Math.imul($, ke) | 0, h = h + Math.imul($, $e) | 0, h = h + Math.imul(A, ke) | 0, d = d + Math.imul(A, $e) | 0, b = b + Math.imul(H, Ne) | 0, h = h + Math.imul(H, Re) | 0, h = h + Math.imul(Z, Ne) | 0, d = d + Math.imul(Z, Re) | 0, b = b + Math.imul(B, qe) | 0, h = h + Math.imul(B, Be) | 0, h = h + Math.imul(R, qe) | 0, d = d + Math.imul(R, Be) | 0;
      var kt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, b = Math.imul(T, we), h = Math.imul(T, xe), h = h + Math.imul(W, we) | 0, d = Math.imul(W, xe), b = b + Math.imul(ye, Pe) | 0, h = h + Math.imul(ye, Me) | 0, h = h + Math.imul(F, Pe) | 0, d = d + Math.imul(F, Me) | 0, b = b + Math.imul(ae, Oe) | 0, h = h + Math.imul(ae, Ee) | 0, h = h + Math.imul(de, Oe) | 0, d = d + Math.imul(de, Ee) | 0, b = b + Math.imul(ie, Le) | 0, h = h + Math.imul(ie, Se) | 0, h = h + Math.imul(he, Le) | 0, d = d + Math.imul(he, Se) | 0, b = b + Math.imul(I, Ce) | 0, h = h + Math.imul(I, Ae) | 0, h = h + Math.imul(L, Ce) | 0, d = d + Math.imul(L, Ae) | 0, b = b + Math.imul(te, ke) | 0, h = h + Math.imul(te, $e) | 0, h = h + Math.imul(pe, ke) | 0, d = d + Math.imul(pe, $e) | 0, b = b + Math.imul($, Ne) | 0, h = h + Math.imul($, Re) | 0, h = h + Math.imul(A, Ne) | 0, d = d + Math.imul(A, Re) | 0, b = b + Math.imul(H, qe) | 0, h = h + Math.imul(H, Be) | 0, h = h + Math.imul(Z, qe) | 0, d = d + Math.imul(Z, Be) | 0;
      var Nt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, b = Math.imul(T, Pe), h = Math.imul(T, Me), h = h + Math.imul(W, Pe) | 0, d = Math.imul(W, Me), b = b + Math.imul(ye, Oe) | 0, h = h + Math.imul(ye, Ee) | 0, h = h + Math.imul(F, Oe) | 0, d = d + Math.imul(F, Ee) | 0, b = b + Math.imul(ae, Le) | 0, h = h + Math.imul(ae, Se) | 0, h = h + Math.imul(de, Le) | 0, d = d + Math.imul(de, Se) | 0, b = b + Math.imul(ie, Ce) | 0, h = h + Math.imul(ie, Ae) | 0, h = h + Math.imul(he, Ce) | 0, d = d + Math.imul(he, Ae) | 0, b = b + Math.imul(I, ke) | 0, h = h + Math.imul(I, $e) | 0, h = h + Math.imul(L, ke) | 0, d = d + Math.imul(L, $e) | 0, b = b + Math.imul(te, Ne) | 0, h = h + Math.imul(te, Re) | 0, h = h + Math.imul(pe, Ne) | 0, d = d + Math.imul(pe, Re) | 0, b = b + Math.imul($, qe) | 0, h = h + Math.imul($, Be) | 0, h = h + Math.imul(A, qe) | 0, d = d + Math.imul(A, Be) | 0;
      var qt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, b = Math.imul(T, Oe), h = Math.imul(T, Ee), h = h + Math.imul(W, Oe) | 0, d = Math.imul(W, Ee), b = b + Math.imul(ye, Le) | 0, h = h + Math.imul(ye, Se) | 0, h = h + Math.imul(F, Le) | 0, d = d + Math.imul(F, Se) | 0, b = b + Math.imul(ae, Ce) | 0, h = h + Math.imul(ae, Ae) | 0, h = h + Math.imul(de, Ce) | 0, d = d + Math.imul(de, Ae) | 0, b = b + Math.imul(ie, ke) | 0, h = h + Math.imul(ie, $e) | 0, h = h + Math.imul(he, ke) | 0, d = d + Math.imul(he, $e) | 0, b = b + Math.imul(I, Ne) | 0, h = h + Math.imul(I, Re) | 0, h = h + Math.imul(L, Ne) | 0, d = d + Math.imul(L, Re) | 0, b = b + Math.imul(te, qe) | 0, h = h + Math.imul(te, Be) | 0, h = h + Math.imul(pe, qe) | 0, d = d + Math.imul(pe, Be) | 0;
      var Ft = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Ft >>> 26) | 0, Ft &= 67108863, b = Math.imul(T, Le), h = Math.imul(T, Se), h = h + Math.imul(W, Le) | 0, d = Math.imul(W, Se), b = b + Math.imul(ye, Ce) | 0, h = h + Math.imul(ye, Ae) | 0, h = h + Math.imul(F, Ce) | 0, d = d + Math.imul(F, Ae) | 0, b = b + Math.imul(ae, ke) | 0, h = h + Math.imul(ae, $e) | 0, h = h + Math.imul(de, ke) | 0, d = d + Math.imul(de, $e) | 0, b = b + Math.imul(ie, Ne) | 0, h = h + Math.imul(ie, Re) | 0, h = h + Math.imul(he, Ne) | 0, d = d + Math.imul(he, Re) | 0, b = b + Math.imul(I, qe) | 0, h = h + Math.imul(I, Be) | 0, h = h + Math.imul(L, qe) | 0, d = d + Math.imul(L, Be) | 0;
      var Ut = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, b = Math.imul(T, Ce), h = Math.imul(T, Ae), h = h + Math.imul(W, Ce) | 0, d = Math.imul(W, Ae), b = b + Math.imul(ye, ke) | 0, h = h + Math.imul(ye, $e) | 0, h = h + Math.imul(F, ke) | 0, d = d + Math.imul(F, $e) | 0, b = b + Math.imul(ae, Ne) | 0, h = h + Math.imul(ae, Re) | 0, h = h + Math.imul(de, Ne) | 0, d = d + Math.imul(de, Re) | 0, b = b + Math.imul(ie, qe) | 0, h = h + Math.imul(ie, Be) | 0, h = h + Math.imul(he, qe) | 0, d = d + Math.imul(he, Be) | 0;
      var Dt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, b = Math.imul(T, ke), h = Math.imul(T, $e), h = h + Math.imul(W, ke) | 0, d = Math.imul(W, $e), b = b + Math.imul(ye, Ne) | 0, h = h + Math.imul(ye, Re) | 0, h = h + Math.imul(F, Ne) | 0, d = d + Math.imul(F, Re) | 0, b = b + Math.imul(ae, qe) | 0, h = h + Math.imul(ae, Be) | 0, h = h + Math.imul(de, qe) | 0, d = d + Math.imul(de, Be) | 0;
      var jt = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (jt >>> 26) | 0, jt &= 67108863, b = Math.imul(T, Ne), h = Math.imul(T, Re), h = h + Math.imul(W, Ne) | 0, d = Math.imul(W, Re), b = b + Math.imul(ye, qe) | 0, h = h + Math.imul(ye, Be) | 0, h = h + Math.imul(F, qe) | 0, d = d + Math.imul(F, Be) | 0;
      var fr = (x + b | 0) + ((h & 8191) << 13) | 0;
      x = (d + (h >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, b = Math.imul(T, qe), h = Math.imul(T, Be), h = h + Math.imul(W, qe) | 0, d = Math.imul(W, Be);
      var sr = (x + b | 0) + ((h & 8191) << 13) | 0;
      return x = (d + (h >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, y[0] = He, y[1] = Ue, y[2] = De, y[3] = pt, y[4] = vt, y[5] = yt, y[6] = gt, y[7] = bt, y[8] = Lt, y[9] = Ct, y[10] = kt, y[11] = Nt, y[12] = qt, y[13] = Ft, y[14] = Ut, y[15] = Dt, y[16] = jt, y[17] = fr, y[18] = sr, x !== 0 && (y[19] = x, u.length++), u;
    };
    Math.imul || (M = C);
    function k(V, g, l) {
      l.negative = g.negative ^ V.negative, l.length = V.length + g.length;
      for (var u = 0, o = 0, c = 0; c < l.length - 1; c++) {
        var y = o;
        o = 0;
        for (var x = u & 67108863, b = Math.min(c, g.length - 1), h = Math.max(0, c - V.length + 1); h <= b; h++) {
          var d = c - h, w = V.words[d] | 0, p = g.words[h] | 0, S = w * p, G = S & 67108863;
          y = y + (S / 67108864 | 0) | 0, G = G + x | 0, x = G & 67108863, y = y + (G >>> 26) | 0, o += y >>> 26, y &= 67108863;
        }
        l.words[c] = x, u = y, y = o;
      }
      return u !== 0 ? l.words[c] = u : l.length--, l.strip();
    }
    function q(V, g, l) {
      var u = new D();
      return u.mulp(V, g, l);
    }
    i.prototype.mulTo = function(g, l) {
      var u, o = this.length + g.length;
      return this.length === 10 && g.length === 10 ? u = M(this, g, l) : o < 63 ? u = C(this, g, l) : o < 1024 ? u = k(this, g, l) : u = q(this, g, l), u;
    };
    function D(V, g) {
      this.x = V, this.y = g;
    }
    D.prototype.makeRBT = function(g) {
      for (var l = new Array(g), u = i.prototype._countBits(g) - 1, o = 0; o < g; o++)
        l[o] = this.revBin(o, u, g);
      return l;
    }, D.prototype.revBin = function(g, l, u) {
      if (g === 0 || g === u - 1)
        return g;
      for (var o = 0, c = 0; c < l; c++)
        o |= (g & 1) << l - c - 1, g >>= 1;
      return o;
    }, D.prototype.permute = function(g, l, u, o, c, y) {
      for (var x = 0; x < y; x++)
        o[x] = l[g[x]], c[x] = u[g[x]];
    }, D.prototype.transform = function(g, l, u, o, c, y) {
      this.permute(y, g, l, u, o, c);
      for (var x = 1; x < c; x <<= 1)
        for (var b = x << 1, h = Math.cos(2 * Math.PI / b), d = Math.sin(2 * Math.PI / b), w = 0; w < c; w += b)
          for (var p = h, S = d, G = 0; G < x; G++) {
            var B = u[w + G], R = o[w + G], N = u[w + G + x], H = o[w + G + x], Z = p * N - S * H;
            H = p * H + S * N, N = Z, u[w + G] = B + N, o[w + G] = R + H, u[w + G + x] = B - N, o[w + G + x] = R - H, G !== b && (Z = h * p - d * S, S = h * S + d * p, p = Z);
          }
    }, D.prototype.guessLen13b = function(g, l) {
      var u = Math.max(l, g) | 1, o = u & 1, c = 0;
      for (u = u / 2 | 0; u; u = u >>> 1)
        c++;
      return 1 << c + 1 + o;
    }, D.prototype.conjugate = function(g, l, u) {
      if (!(u <= 1))
        for (var o = 0; o < u / 2; o++) {
          var c = g[o];
          g[o] = g[u - o - 1], g[u - o - 1] = c, c = l[o], l[o] = -l[u - o - 1], l[u - o - 1] = -c;
        }
    }, D.prototype.normalize13b = function(g, l) {
      for (var u = 0, o = 0; o < l / 2; o++) {
        var c = Math.round(g[2 * o + 1] / l) * 8192 + Math.round(g[2 * o] / l) + u;
        g[o] = c & 67108863, c < 67108864 ? u = 0 : u = c / 67108864 | 0;
      }
      return g;
    }, D.prototype.convert13b = function(g, l, u, o) {
      for (var c = 0, y = 0; y < l; y++)
        c = c + (g[y] | 0), u[2 * y] = c & 8191, c = c >>> 13, u[2 * y + 1] = c & 8191, c = c >>> 13;
      for (y = 2 * l; y < o; ++y)
        u[y] = 0;
      n(c === 0), n((c & -8192) === 0);
    }, D.prototype.stub = function(g) {
      for (var l = new Array(g), u = 0; u < g; u++)
        l[u] = 0;
      return l;
    }, D.prototype.mulp = function(g, l, u) {
      var o = 2 * this.guessLen13b(g.length, l.length), c = this.makeRBT(o), y = this.stub(o), x = new Array(o), b = new Array(o), h = new Array(o), d = new Array(o), w = new Array(o), p = new Array(o), S = u.words;
      S.length = o, this.convert13b(g.words, g.length, x, o), this.convert13b(l.words, l.length, d, o), this.transform(x, y, b, h, o, c), this.transform(d, y, w, p, o, c);
      for (var G = 0; G < o; G++) {
        var B = b[G] * w[G] - h[G] * p[G];
        h[G] = b[G] * p[G] + h[G] * w[G], b[G] = B;
      }
      return this.conjugate(b, h, o), this.transform(b, h, S, y, o, c), this.conjugate(S, y, o), this.normalize13b(S, o), u.negative = g.negative ^ l.negative, u.length = g.length + l.length, u.strip();
    }, i.prototype.mul = function(g) {
      var l = new i(null);
      return l.words = new Array(this.length + g.length), this.mulTo(g, l);
    }, i.prototype.mulf = function(g) {
      var l = new i(null);
      return l.words = new Array(this.length + g.length), q(this, g, l);
    }, i.prototype.imul = function(g) {
      return this.clone().mulTo(g, this);
    }, i.prototype.imuln = function(g) {
      n(typeof g == "number"), n(g < 67108864);
      for (var l = 0, u = 0; u < this.length; u++) {
        var o = (this.words[u] | 0) * g, c = (o & 67108863) + (l & 67108863);
        l >>= 26, l += o / 67108864 | 0, l += c >>> 26, this.words[u] = c & 67108863;
      }
      return l !== 0 && (this.words[u] = l, this.length++), this;
    }, i.prototype.muln = function(g) {
      return this.clone().imuln(g);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(g) {
      var l = P(g);
      if (l.length === 0)
        return new i(1);
      for (var u = this, o = 0; o < l.length && l[o] === 0; o++, u = u.sqr())
        ;
      if (++o < l.length)
        for (var c = u.sqr(); o < l.length; o++, c = c.sqr())
          l[o] !== 0 && (u = u.mul(c));
      return u;
    }, i.prototype.iushln = function(g) {
      n(typeof g == "number" && g >= 0);
      var l = g % 26, u = (g - l) / 26, o = 67108863 >>> 26 - l << 26 - l, c;
      if (l !== 0) {
        var y = 0;
        for (c = 0; c < this.length; c++) {
          var x = this.words[c] & o, b = (this.words[c] | 0) - x << l;
          this.words[c] = b | y, y = x >>> 26 - l;
        }
        y && (this.words[c] = y, this.length++);
      }
      if (u !== 0) {
        for (c = this.length - 1; c >= 0; c--)
          this.words[c + u] = this.words[c];
        for (c = 0; c < u; c++)
          this.words[c] = 0;
        this.length += u;
      }
      return this.strip();
    }, i.prototype.ishln = function(g) {
      return n(this.negative === 0), this.iushln(g);
    }, i.prototype.iushrn = function(g, l, u) {
      n(typeof g == "number" && g >= 0);
      var o;
      l ? o = (l - l % 26) / 26 : o = 0;
      var c = g % 26, y = Math.min((g - c) / 26, this.length), x = 67108863 ^ 67108863 >>> c << c, b = u;
      if (o -= y, o = Math.max(0, o), b) {
        for (var h = 0; h < y; h++)
          b.words[h] = this.words[h];
        b.length = y;
      }
      if (y !== 0)
        if (this.length > y)
          for (this.length -= y, h = 0; h < this.length; h++)
            this.words[h] = this.words[h + y];
        else
          this.words[0] = 0, this.length = 1;
      var d = 0;
      for (h = this.length - 1; h >= 0 && (d !== 0 || h >= o); h--) {
        var w = this.words[h] | 0;
        this.words[h] = d << 26 - c | w >>> c, d = w & x;
      }
      return b && d !== 0 && (b.words[b.length++] = d), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(g, l, u) {
      return n(this.negative === 0), this.iushrn(g, l, u);
    }, i.prototype.shln = function(g) {
      return this.clone().ishln(g);
    }, i.prototype.ushln = function(g) {
      return this.clone().iushln(g);
    }, i.prototype.shrn = function(g) {
      return this.clone().ishrn(g);
    }, i.prototype.ushrn = function(g) {
      return this.clone().iushrn(g);
    }, i.prototype.testn = function(g) {
      n(typeof g == "number" && g >= 0);
      var l = g % 26, u = (g - l) / 26, o = 1 << l;
      if (this.length <= u)
        return !1;
      var c = this.words[u];
      return !!(c & o);
    }, i.prototype.imaskn = function(g) {
      n(typeof g == "number" && g >= 0);
      var l = g % 26, u = (g - l) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= u)
        return this;
      if (l !== 0 && u++, this.length = Math.min(u, this.length), l !== 0) {
        var o = 67108863 ^ 67108863 >>> l << l;
        this.words[this.length - 1] &= o;
      }
      return this.strip();
    }, i.prototype.maskn = function(g) {
      return this.clone().imaskn(g);
    }, i.prototype.iaddn = function(g) {
      return n(typeof g == "number"), n(g < 67108864), g < 0 ? this.isubn(-g) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < g ? (this.words[0] = g - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(g), this.negative = 1, this) : this._iaddn(g);
    }, i.prototype._iaddn = function(g) {
      this.words[0] += g;
      for (var l = 0; l < this.length && this.words[l] >= 67108864; l++)
        this.words[l] -= 67108864, l === this.length - 1 ? this.words[l + 1] = 1 : this.words[l + 1]++;
      return this.length = Math.max(this.length, l + 1), this;
    }, i.prototype.isubn = function(g) {
      if (n(typeof g == "number"), n(g < 67108864), g < 0)
        return this.iaddn(-g);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(g), this.negative = 1, this;
      if (this.words[0] -= g, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var l = 0; l < this.length && this.words[l] < 0; l++)
          this.words[l] += 67108864, this.words[l + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(g) {
      return this.clone().iaddn(g);
    }, i.prototype.subn = function(g) {
      return this.clone().isubn(g);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(g, l, u) {
      var o = g.length + u, c;
      this._expand(o);
      var y, x = 0;
      for (c = 0; c < g.length; c++) {
        y = (this.words[c + u] | 0) + x;
        var b = (g.words[c] | 0) * l;
        y -= b & 67108863, x = (y >> 26) - (b / 67108864 | 0), this.words[c + u] = y & 67108863;
      }
      for (; c < this.length - u; c++)
        y = (this.words[c + u] | 0) + x, x = y >> 26, this.words[c + u] = y & 67108863;
      if (x === 0)
        return this.strip();
      for (n(x === -1), x = 0, c = 0; c < this.length; c++)
        y = -(this.words[c] | 0) + x, x = y >> 26, this.words[c] = y & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(g, l) {
      var u = this.length - g.length, o = this.clone(), c = g, y = c.words[c.length - 1] | 0, x = this._countBits(y);
      u = 26 - x, u !== 0 && (c = c.ushln(u), o.iushln(u), y = c.words[c.length - 1] | 0);
      var b = o.length - c.length, h;
      if (l !== "mod") {
        h = new i(null), h.length = b + 1, h.words = new Array(h.length);
        for (var d = 0; d < h.length; d++)
          h.words[d] = 0;
      }
      var w = o.clone()._ishlnsubmul(c, 1, b);
      w.negative === 0 && (o = w, h && (h.words[b] = 1));
      for (var p = b - 1; p >= 0; p--) {
        var S = (o.words[c.length + p] | 0) * 67108864 + (o.words[c.length + p - 1] | 0);
        for (S = Math.min(S / y | 0, 67108863), o._ishlnsubmul(c, S, p); o.negative !== 0; )
          S--, o.negative = 0, o._ishlnsubmul(c, 1, p), o.isZero() || (o.negative ^= 1);
        h && (h.words[p] = S);
      }
      return h && h.strip(), o.strip(), l !== "div" && u !== 0 && o.iushrn(u), {
        div: h || null,
        mod: o
      };
    }, i.prototype.divmod = function(g, l, u) {
      if (n(!g.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var o, c, y;
      return this.negative !== 0 && g.negative === 0 ? (y = this.neg().divmod(g, l), l !== "mod" && (o = y.div.neg()), l !== "div" && (c = y.mod.neg(), u && c.negative !== 0 && c.iadd(g)), {
        div: o,
        mod: c
      }) : this.negative === 0 && g.negative !== 0 ? (y = this.divmod(g.neg(), l), l !== "mod" && (o = y.div.neg()), {
        div: o,
        mod: y.mod
      }) : (this.negative & g.negative) !== 0 ? (y = this.neg().divmod(g.neg(), l), l !== "div" && (c = y.mod.neg(), u && c.negative !== 0 && c.isub(g)), {
        div: y.div,
        mod: c
      }) : g.length > this.length || this.cmp(g) < 0 ? {
        div: new i(0),
        mod: this
      } : g.length === 1 ? l === "div" ? {
        div: this.divn(g.words[0]),
        mod: null
      } : l === "mod" ? {
        div: null,
        mod: new i(this.modn(g.words[0]))
      } : {
        div: this.divn(g.words[0]),
        mod: new i(this.modn(g.words[0]))
      } : this._wordDiv(g, l);
    }, i.prototype.div = function(g) {
      return this.divmod(g, "div", !1).div;
    }, i.prototype.mod = function(g) {
      return this.divmod(g, "mod", !1).mod;
    }, i.prototype.umod = function(g) {
      return this.divmod(g, "mod", !0).mod;
    }, i.prototype.divRound = function(g) {
      var l = this.divmod(g);
      if (l.mod.isZero())
        return l.div;
      var u = l.div.negative !== 0 ? l.mod.isub(g) : l.mod, o = g.ushrn(1), c = g.andln(1), y = u.cmp(o);
      return y < 0 || c === 1 && y === 0 ? l.div : l.div.negative !== 0 ? l.div.isubn(1) : l.div.iaddn(1);
    }, i.prototype.modn = function(g) {
      n(g <= 67108863);
      for (var l = (1 << 26) % g, u = 0, o = this.length - 1; o >= 0; o--)
        u = (l * u + (this.words[o] | 0)) % g;
      return u;
    }, i.prototype.idivn = function(g) {
      n(g <= 67108863);
      for (var l = 0, u = this.length - 1; u >= 0; u--) {
        var o = (this.words[u] | 0) + l * 67108864;
        this.words[u] = o / g | 0, l = o % g;
      }
      return this.strip();
    }, i.prototype.divn = function(g) {
      return this.clone().idivn(g);
    }, i.prototype.egcd = function(g) {
      n(g.negative === 0), n(!g.isZero());
      var l = this, u = g.clone();
      l.negative !== 0 ? l = l.umod(g) : l = l.clone();
      for (var o = new i(1), c = new i(0), y = new i(0), x = new i(1), b = 0; l.isEven() && u.isEven(); )
        l.iushrn(1), u.iushrn(1), ++b;
      for (var h = u.clone(), d = l.clone(); !l.isZero(); ) {
        for (var w = 0, p = 1; (l.words[0] & p) === 0 && w < 26; ++w, p <<= 1)
          ;
        if (w > 0)
          for (l.iushrn(w); w-- > 0; )
            (o.isOdd() || c.isOdd()) && (o.iadd(h), c.isub(d)), o.iushrn(1), c.iushrn(1);
        for (var S = 0, G = 1; (u.words[0] & G) === 0 && S < 26; ++S, G <<= 1)
          ;
        if (S > 0)
          for (u.iushrn(S); S-- > 0; )
            (y.isOdd() || x.isOdd()) && (y.iadd(h), x.isub(d)), y.iushrn(1), x.iushrn(1);
        l.cmp(u) >= 0 ? (l.isub(u), o.isub(y), c.isub(x)) : (u.isub(l), y.isub(o), x.isub(c));
      }
      return {
        a: y,
        b: x,
        gcd: u.iushln(b)
      };
    }, i.prototype._invmp = function(g) {
      n(g.negative === 0), n(!g.isZero());
      var l = this, u = g.clone();
      l.negative !== 0 ? l = l.umod(g) : l = l.clone();
      for (var o = new i(1), c = new i(0), y = u.clone(); l.cmpn(1) > 0 && u.cmpn(1) > 0; ) {
        for (var x = 0, b = 1; (l.words[0] & b) === 0 && x < 26; ++x, b <<= 1)
          ;
        if (x > 0)
          for (l.iushrn(x); x-- > 0; )
            o.isOdd() && o.iadd(y), o.iushrn(1);
        for (var h = 0, d = 1; (u.words[0] & d) === 0 && h < 26; ++h, d <<= 1)
          ;
        if (h > 0)
          for (u.iushrn(h); h-- > 0; )
            c.isOdd() && c.iadd(y), c.iushrn(1);
        l.cmp(u) >= 0 ? (l.isub(u), o.isub(c)) : (u.isub(l), c.isub(o));
      }
      var w;
      return l.cmpn(1) === 0 ? w = o : w = c, w.cmpn(0) < 0 && w.iadd(g), w;
    }, i.prototype.gcd = function(g) {
      if (this.isZero())
        return g.abs();
      if (g.isZero())
        return this.abs();
      var l = this.clone(), u = g.clone();
      l.negative = 0, u.negative = 0;
      for (var o = 0; l.isEven() && u.isEven(); o++)
        l.iushrn(1), u.iushrn(1);
      do {
        for (; l.isEven(); )
          l.iushrn(1);
        for (; u.isEven(); )
          u.iushrn(1);
        var c = l.cmp(u);
        if (c < 0) {
          var y = l;
          l = u, u = y;
        } else if (c === 0 || u.cmpn(1) === 0)
          break;
        l.isub(u);
      } while (!0);
      return u.iushln(o);
    }, i.prototype.invm = function(g) {
      return this.egcd(g).a.umod(g);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(g) {
      return this.words[0] & g;
    }, i.prototype.bincn = function(g) {
      n(typeof g == "number");
      var l = g % 26, u = (g - l) / 26, o = 1 << l;
      if (this.length <= u)
        return this._expand(u + 1), this.words[u] |= o, this;
      for (var c = o, y = u; c !== 0 && y < this.length; y++) {
        var x = this.words[y] | 0;
        x += c, c = x >>> 26, x &= 67108863, this.words[y] = x;
      }
      return c !== 0 && (this.words[y] = c, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(g) {
      var l = g < 0;
      if (this.negative !== 0 && !l)
        return -1;
      if (this.negative === 0 && l)
        return 1;
      this.strip();
      var u;
      if (this.length > 1)
        u = 1;
      else {
        l && (g = -g), n(g <= 67108863, "Number is too big");
        var o = this.words[0] | 0;
        u = o === g ? 0 : o < g ? -1 : 1;
      }
      return this.negative !== 0 ? -u | 0 : u;
    }, i.prototype.cmp = function(g) {
      if (this.negative !== 0 && g.negative === 0)
        return -1;
      if (this.negative === 0 && g.negative !== 0)
        return 1;
      var l = this.ucmp(g);
      return this.negative !== 0 ? -l | 0 : l;
    }, i.prototype.ucmp = function(g) {
      if (this.length > g.length)
        return 1;
      if (this.length < g.length)
        return -1;
      for (var l = 0, u = this.length - 1; u >= 0; u--) {
        var o = this.words[u] | 0, c = g.words[u] | 0;
        if (o !== c) {
          o < c ? l = -1 : o > c && (l = 1);
          break;
        }
      }
      return l;
    }, i.prototype.gtn = function(g) {
      return this.cmpn(g) === 1;
    }, i.prototype.gt = function(g) {
      return this.cmp(g) === 1;
    }, i.prototype.gten = function(g) {
      return this.cmpn(g) >= 0;
    }, i.prototype.gte = function(g) {
      return this.cmp(g) >= 0;
    }, i.prototype.ltn = function(g) {
      return this.cmpn(g) === -1;
    }, i.prototype.lt = function(g) {
      return this.cmp(g) === -1;
    }, i.prototype.lten = function(g) {
      return this.cmpn(g) <= 0;
    }, i.prototype.lte = function(g) {
      return this.cmp(g) <= 0;
    }, i.prototype.eqn = function(g) {
      return this.cmpn(g) === 0;
    }, i.prototype.eq = function(g) {
      return this.cmp(g) === 0;
    }, i.red = function(g) {
      return new se(g);
    }, i.prototype.toRed = function(g) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), g.convertTo(this)._forceRed(g);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(g) {
      return this.red = g, this;
    }, i.prototype.forceRed = function(g) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(g);
    }, i.prototype.redAdd = function(g) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, g);
    }, i.prototype.redIAdd = function(g) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, g);
    }, i.prototype.redSub = function(g) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, g);
    }, i.prototype.redISub = function(g) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, g);
    }, i.prototype.redShl = function(g) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, g);
    }, i.prototype.redMul = function(g) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, g), this.red.mul(this, g);
    }, i.prototype.redIMul = function(g) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, g), this.red.imul(this, g);
    }, i.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, i.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, i.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, i.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, i.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, i.prototype.redPow = function(g) {
      return n(this.red && !g.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, g);
    };
    var U = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function K(V, g) {
      this.name = V, this.p = new i(g, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    K.prototype._tmp = function() {
      var g = new i(null);
      return g.words = new Array(Math.ceil(this.n / 13)), g;
    }, K.prototype.ireduce = function(g) {
      var l = g, u;
      do
        this.split(l, this.tmp), l = this.imulK(l), l = l.iadd(this.tmp), u = l.bitLength();
      while (u > this.n);
      var o = u < this.n ? -1 : l.ucmp(this.p);
      return o === 0 ? (l.words[0] = 0, l.length = 1) : o > 0 ? l.isub(this.p) : l.strip(), l;
    }, K.prototype.split = function(g, l) {
      g.iushrn(this.n, 0, l);
    }, K.prototype.imulK = function(g) {
      return g.imul(this.k);
    };
    function J() {
      K.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    a(J, K), J.prototype.split = function(g, l) {
      for (var u = 4194303, o = Math.min(g.length, 9), c = 0; c < o; c++)
        l.words[c] = g.words[c];
      if (l.length = o, g.length <= 9) {
        g.words[0] = 0, g.length = 1;
        return;
      }
      var y = g.words[9];
      for (l.words[l.length++] = y & u, c = 10; c < g.length; c++) {
        var x = g.words[c] | 0;
        g.words[c - 10] = (x & u) << 4 | y >>> 22, y = x;
      }
      y >>>= 22, g.words[c - 10] = y, y === 0 && g.length > 10 ? g.length -= 10 : g.length -= 9;
    }, J.prototype.imulK = function(g) {
      g.words[g.length] = 0, g.words[g.length + 1] = 0, g.length += 2;
      for (var l = 0, u = 0; u < g.length; u++) {
        var o = g.words[u] | 0;
        l += o * 977, g.words[u] = l & 67108863, l = o * 64 + (l / 67108864 | 0);
      }
      return g.words[g.length - 1] === 0 && (g.length--, g.words[g.length - 1] === 0 && g.length--), g;
    };
    function re() {
      K.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    a(re, K);
    function ue() {
      K.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    a(ue, K);
    function ve() {
      K.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    a(ve, K), ve.prototype.imulK = function(g) {
      for (var l = 0, u = 0; u < g.length; u++) {
        var o = (g.words[u] | 0) * 19 + l, c = o & 67108863;
        o >>>= 26, g.words[u] = c, l = o;
      }
      return l !== 0 && (g.words[g.length++] = l), g;
    }, i._prime = function(g) {
      if (U[g])
        return U[g];
      var l;
      if (g === "k256")
        l = new J();
      else if (g === "p224")
        l = new re();
      else if (g === "p192")
        l = new ue();
      else if (g === "p25519")
        l = new ve();
      else
        throw new Error("Unknown prime " + g);
      return U[g] = l, l;
    };
    function se(V) {
      if (typeof V == "string") {
        var g = i._prime(V);
        this.m = g.p, this.prime = g;
      } else
        n(V.gtn(1), "modulus must be greater than 1"), this.m = V, this.prime = null;
    }
    se.prototype._verify1 = function(g) {
      n(g.negative === 0, "red works only with positives"), n(g.red, "red works only with red numbers");
    }, se.prototype._verify2 = function(g, l) {
      n((g.negative | l.negative) === 0, "red works only with positives"), n(
        g.red && g.red === l.red,
        "red works only with red numbers"
      );
    }, se.prototype.imod = function(g) {
      return this.prime ? this.prime.ireduce(g)._forceRed(this) : g.umod(this.m)._forceRed(this);
    }, se.prototype.neg = function(g) {
      return g.isZero() ? g.clone() : this.m.sub(g)._forceRed(this);
    }, se.prototype.add = function(g, l) {
      this._verify2(g, l);
      var u = g.add(l);
      return u.cmp(this.m) >= 0 && u.isub(this.m), u._forceRed(this);
    }, se.prototype.iadd = function(g, l) {
      this._verify2(g, l);
      var u = g.iadd(l);
      return u.cmp(this.m) >= 0 && u.isub(this.m), u;
    }, se.prototype.sub = function(g, l) {
      this._verify2(g, l);
      var u = g.sub(l);
      return u.cmpn(0) < 0 && u.iadd(this.m), u._forceRed(this);
    }, se.prototype.isub = function(g, l) {
      this._verify2(g, l);
      var u = g.isub(l);
      return u.cmpn(0) < 0 && u.iadd(this.m), u;
    }, se.prototype.shl = function(g, l) {
      return this._verify1(g), this.imod(g.ushln(l));
    }, se.prototype.imul = function(g, l) {
      return this._verify2(g, l), this.imod(g.imul(l));
    }, se.prototype.mul = function(g, l) {
      return this._verify2(g, l), this.imod(g.mul(l));
    }, se.prototype.isqr = function(g) {
      return this.imul(g, g.clone());
    }, se.prototype.sqr = function(g) {
      return this.mul(g, g);
    }, se.prototype.sqrt = function(g) {
      if (g.isZero())
        return g.clone();
      var l = this.m.andln(3);
      if (n(l % 2 === 1), l === 3) {
        var u = this.m.add(new i(1)).iushrn(2);
        return this.pow(g, u);
      }
      for (var o = this.m.subn(1), c = 0; !o.isZero() && o.andln(1) === 0; )
        c++, o.iushrn(1);
      n(!o.isZero());
      var y = new i(1).toRed(this), x = y.redNeg(), b = this.m.subn(1).iushrn(1), h = this.m.bitLength();
      for (h = new i(2 * h * h).toRed(this); this.pow(h, b).cmp(x) !== 0; )
        h.redIAdd(x);
      for (var d = this.pow(h, o), w = this.pow(g, o.addn(1).iushrn(1)), p = this.pow(g, o), S = c; p.cmp(y) !== 0; ) {
        for (var G = p, B = 0; G.cmp(y) !== 0; B++)
          G = G.redSqr();
        n(B < S);
        var R = this.pow(d, new i(1).iushln(S - B - 1));
        w = w.redMul(R), d = R.redSqr(), p = p.redMul(d), S = B;
      }
      return w;
    }, se.prototype.invm = function(g) {
      var l = g._invmp(this.m);
      return l.negative !== 0 ? (l.negative = 0, this.imod(l).redNeg()) : this.imod(l);
    }, se.prototype.pow = function(g, l) {
      if (l.isZero())
        return new i(1).toRed(this);
      if (l.cmpn(1) === 0)
        return g.clone();
      var u = 4, o = new Array(1 << u);
      o[0] = new i(1).toRed(this), o[1] = g;
      for (var c = 2; c < o.length; c++)
        o[c] = this.mul(o[c - 1], g);
      var y = o[0], x = 0, b = 0, h = l.bitLength() % 26;
      for (h === 0 && (h = 26), c = l.length - 1; c >= 0; c--) {
        for (var d = l.words[c], w = h - 1; w >= 0; w--) {
          var p = d >> w & 1;
          if (y !== o[0] && (y = this.sqr(y)), p === 0 && x === 0) {
            b = 0;
            continue;
          }
          x <<= 1, x |= p, b++, !(b !== u && (c !== 0 || w !== 0)) && (y = this.mul(y, o[x]), b = 0, x = 0);
        }
        h = 26;
      }
      return y;
    }, se.prototype.convertTo = function(g) {
      var l = g.umod(this.m);
      return l === g ? l.clone() : l;
    }, se.prototype.convertFrom = function(g) {
      var l = g.clone();
      return l.red = null, l;
    }, i.mont = function(g) {
      return new le(g);
    };
    function le(V) {
      se.call(this, V), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(le, se), le.prototype.convertTo = function(g) {
      return this.imod(g.ushln(this.shift));
    }, le.prototype.convertFrom = function(g) {
      var l = this.imod(g.mul(this.rinv));
      return l.red = null, l;
    }, le.prototype.imul = function(g, l) {
      if (g.isZero() || l.isZero())
        return g.words[0] = 0, g.length = 1, g;
      var u = g.imul(l), o = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), c = u.isub(o).iushrn(this.shift), y = c;
      return c.cmp(this.m) >= 0 ? y = c.isub(this.m) : c.cmpn(0) < 0 && (y = c.iadd(this.m)), y._forceRed(this);
    }, le.prototype.mul = function(g, l) {
      if (g.isZero() || l.isZero())
        return new i(0)._forceRed(this);
      var u = g.mul(l), o = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), c = u.isub(o).iushrn(this.shift), y = c;
      return c.cmp(this.m) >= 0 ? y = c.isub(this.m) : c.cmpn(0) < 0 && (y = c.iadd(this.m)), y._forceRed(this);
    }, le.prototype.invm = function(g) {
      var l = this.imod(g._invmp(this.m).mul(this.r2));
      return l._forceRed(this);
    };
  })(e, Ie);
})(DT);
var fp = Y0;
Y0.strict = L2;
Y0.loose = C2;
var jT = Object.prototype.toString, HT = {
  "[object Int8Array]": !0,
  "[object Int16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Uint16Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0
};
function Y0(e) {
  return L2(e) || C2(e);
}
function L2(e) {
  return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array;
}
function C2(e) {
  return HT[jT.call(e)];
}
const zT = /* @__PURE__ */ ee({
  __proto__: null,
  default: fp
}, [fp]), KT = /* @__PURE__ */ Q(zT);
KT.strict;
var WT = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
(function(e) {
  (function() {
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
    a.JS_SHA3_NO_WINDOW && (n = !1);
    var i = !n && typeof self == "object", s = !a.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    s ? a = Ie : i && (a = self);
    var f = !a.JS_SHA3_NO_COMMON_JS && !0 && e.exports, v = !a.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", m = "0123456789abcdef".split(""), _ = [31, 7936, 2031616, 520093696], O = [4, 1024, 262144, 67108864], P = [1, 256, 65536, 16777216], C = [6, 1536, 393216, 100663296], M = [0, 8, 16, 24], k = [
      1,
      0,
      32898,
      0,
      32906,
      2147483648,
      2147516416,
      2147483648,
      32907,
      0,
      2147483649,
      0,
      2147516545,
      2147483648,
      32777,
      2147483648,
      138,
      0,
      136,
      0,
      2147516425,
      0,
      2147483658,
      0,
      2147516555,
      0,
      139,
      2147483648,
      32905,
      2147483648,
      32771,
      2147483648,
      32770,
      2147483648,
      128,
      2147483648,
      32778,
      0,
      2147483658,
      2147483648,
      2147516545,
      2147483648,
      32896,
      2147483648,
      2147483649,
      0,
      2147516424,
      2147483648
    ], q = [224, 256, 384, 512], D = [128, 256], U = ["hex", "buffer", "arrayBuffer", "array", "digest"], K = {
      128: 168,
      256: 136
    };
    (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(B) {
      return Object.prototype.toString.call(B) === "[object Array]";
    }), v && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(B) {
      return typeof B == "object" && B.buffer && B.buffer.constructor === ArrayBuffer;
    });
    for (var J = function(B, R, N) {
      return function(H) {
        return new p(B, R, B).update(H)[N]();
      };
    }, re = function(B, R, N) {
      return function(H, Z) {
        return new p(B, R, Z).update(H)[N]();
      };
    }, ue = function(B, R, N) {
      return function(H, Z, oe, $) {
        return o["cshake" + B].update(H, Z, oe, $)[N]();
      };
    }, ve = function(B, R, N) {
      return function(H, Z, oe, $) {
        return o["kmac" + B].update(H, Z, oe, $)[N]();
      };
    }, se = function(B, R, N, H) {
      for (var Z = 0; Z < U.length; ++Z) {
        var oe = U[Z];
        B[oe] = R(N, H, oe);
      }
      return B;
    }, le = function(B, R) {
      var N = J(B, R, "hex");
      return N.create = function() {
        return new p(B, R, B);
      }, N.update = function(H) {
        return N.create().update(H);
      }, se(N, J, B, R);
    }, V = function(B, R) {
      var N = re(B, R, "hex");
      return N.create = function(H) {
        return new p(B, R, H);
      }, N.update = function(H, Z) {
        return N.create(Z).update(H);
      }, se(N, re, B, R);
    }, g = function(B, R) {
      var N = K[B], H = ue(B, R, "hex");
      return H.create = function(Z, oe, $) {
        return !oe && !$ ? o["shake" + B].create(Z) : new p(B, R, Z).bytepad([oe, $], N);
      }, H.update = function(Z, oe, $, A) {
        return H.create(oe, $, A).update(Z);
      }, se(H, ue, B, R);
    }, l = function(B, R) {
      var N = K[B], H = ve(B, R, "hex");
      return H.create = function(Z, oe, $) {
        return new S(B, R, oe).bytepad(["KMAC", $], N).bytepad([Z], N);
      }, H.update = function(Z, oe, $, A) {
        return H.create(Z, $, A).update(oe);
      }, se(H, ve, B, R);
    }, u = [
      { name: "keccak", padding: P, bits: q, createMethod: le },
      { name: "sha3", padding: C, bits: q, createMethod: le },
      { name: "shake", padding: _, bits: D, createMethod: V },
      { name: "cshake", padding: O, bits: D, createMethod: g },
      { name: "kmac", padding: O, bits: D, createMethod: l }
    ], o = {}, c = [], y = 0; y < u.length; ++y)
      for (var x = u[y], b = x.bits, h = 0; h < b.length; ++h) {
        var d = x.name + "_" + b[h];
        if (c.push(d), o[d] = x.createMethod(b[h], x.padding), x.name !== "sha3") {
          var w = x.name + b[h];
          c.push(w), o[w] = o[d];
        }
      }
    function p(B, R, N) {
      this.blocks = [], this.s = [], this.padding = R, this.outputBits = N, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (B << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = N >> 5, this.extraBytes = (N & 31) >> 3;
      for (var H = 0; H < 50; ++H)
        this.s[H] = 0;
    }
    p.prototype.update = function(B) {
      if (this.finalized)
        throw new Error(r);
      var R, N = typeof B;
      if (N !== "string") {
        if (N === "object") {
          if (B === null)
            throw new Error(t);
          if (v && B.constructor === ArrayBuffer)
            B = new Uint8Array(B);
          else if (!Array.isArray(B) && (!v || !ArrayBuffer.isView(B)))
            throw new Error(t);
        } else
          throw new Error(t);
        R = !0;
      }
      for (var H = this.blocks, Z = this.byteCount, oe = B.length, $ = this.blockCount, A = 0, X = this.s, te, pe; A < oe; ) {
        if (this.reset)
          for (this.reset = !1, H[0] = this.block, te = 1; te < $ + 1; ++te)
            H[te] = 0;
        if (R)
          for (te = this.start; A < oe && te < Z; ++A)
            H[te >> 2] |= B[A] << M[te++ & 3];
        else
          for (te = this.start; A < oe && te < Z; ++A)
            pe = B.charCodeAt(A), pe < 128 ? H[te >> 2] |= pe << M[te++ & 3] : pe < 2048 ? (H[te >> 2] |= (192 | pe >> 6) << M[te++ & 3], H[te >> 2] |= (128 | pe & 63) << M[te++ & 3]) : pe < 55296 || pe >= 57344 ? (H[te >> 2] |= (224 | pe >> 12) << M[te++ & 3], H[te >> 2] |= (128 | pe >> 6 & 63) << M[te++ & 3], H[te >> 2] |= (128 | pe & 63) << M[te++ & 3]) : (pe = 65536 + ((pe & 1023) << 10 | B.charCodeAt(++A) & 1023), H[te >> 2] |= (240 | pe >> 18) << M[te++ & 3], H[te >> 2] |= (128 | pe >> 12 & 63) << M[te++ & 3], H[te >> 2] |= (128 | pe >> 6 & 63) << M[te++ & 3], H[te >> 2] |= (128 | pe & 63) << M[te++ & 3]);
        if (this.lastByteIndex = te, te >= Z) {
          for (this.start = te - Z, this.block = H[$], te = 0; te < $; ++te)
            X[te] ^= H[te];
          G(X), this.reset = !0;
        } else
          this.start = te;
      }
      return this;
    }, p.prototype.encode = function(B, R) {
      var N = B & 255, H = 1, Z = [N];
      for (B = B >> 8, N = B & 255; N > 0; )
        Z.unshift(N), B = B >> 8, N = B & 255, ++H;
      return R ? Z.push(H) : Z.unshift(H), this.update(Z), Z.length;
    }, p.prototype.encodeString = function(B) {
      var R, N = typeof B;
      if (N !== "string") {
        if (N === "object") {
          if (B === null)
            throw new Error(t);
          if (v && B.constructor === ArrayBuffer)
            B = new Uint8Array(B);
          else if (!Array.isArray(B) && (!v || !ArrayBuffer.isView(B)))
            throw new Error(t);
        } else
          throw new Error(t);
        R = !0;
      }
      var H = 0, Z = B.length;
      if (R)
        H = Z;
      else
        for (var oe = 0; oe < B.length; ++oe) {
          var $ = B.charCodeAt(oe);
          $ < 128 ? H += 1 : $ < 2048 ? H += 2 : $ < 55296 || $ >= 57344 ? H += 3 : ($ = 65536 + (($ & 1023) << 10 | B.charCodeAt(++oe) & 1023), H += 4);
        }
      return H += this.encode(H * 8), this.update(B), H;
    }, p.prototype.bytepad = function(B, R) {
      for (var N = this.encode(R), H = 0; H < B.length; ++H)
        N += this.encodeString(B[H]);
      var Z = R - N % R, oe = [];
      return oe.length = Z, this.update(oe), this;
    }, p.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var B = this.blocks, R = this.lastByteIndex, N = this.blockCount, H = this.s;
        if (B[R >> 2] |= this.padding[R & 3], this.lastByteIndex === this.byteCount)
          for (B[0] = B[N], R = 1; R < N + 1; ++R)
            B[R] = 0;
        for (B[N - 1] |= 2147483648, R = 0; R < N; ++R)
          H[R] ^= B[R];
        G(H);
      }
    }, p.prototype.toString = p.prototype.hex = function() {
      this.finalize();
      for (var B = this.blockCount, R = this.s, N = this.outputBlocks, H = this.extraBytes, Z = 0, oe = 0, $ = "", A; oe < N; ) {
        for (Z = 0; Z < B && oe < N; ++Z, ++oe)
          A = R[Z], $ += m[A >> 4 & 15] + m[A & 15] + m[A >> 12 & 15] + m[A >> 8 & 15] + m[A >> 20 & 15] + m[A >> 16 & 15] + m[A >> 28 & 15] + m[A >> 24 & 15];
        oe % B === 0 && (G(R), Z = 0);
      }
      return H && (A = R[Z], $ += m[A >> 4 & 15] + m[A & 15], H > 1 && ($ += m[A >> 12 & 15] + m[A >> 8 & 15]), H > 2 && ($ += m[A >> 20 & 15] + m[A >> 16 & 15])), $;
    }, p.prototype.arrayBuffer = function() {
      this.finalize();
      var B = this.blockCount, R = this.s, N = this.outputBlocks, H = this.extraBytes, Z = 0, oe = 0, $ = this.outputBits >> 3, A;
      H ? A = new ArrayBuffer(N + 1 << 2) : A = new ArrayBuffer($);
      for (var X = new Uint32Array(A); oe < N; ) {
        for (Z = 0; Z < B && oe < N; ++Z, ++oe)
          X[oe] = R[Z];
        oe % B === 0 && G(R);
      }
      return H && (X[Z] = R[Z], A = A.slice(0, $)), A;
    }, p.prototype.buffer = p.prototype.arrayBuffer, p.prototype.digest = p.prototype.array = function() {
      this.finalize();
      for (var B = this.blockCount, R = this.s, N = this.outputBlocks, H = this.extraBytes, Z = 0, oe = 0, $ = [], A, X; oe < N; ) {
        for (Z = 0; Z < B && oe < N; ++Z, ++oe)
          A = oe << 2, X = R[Z], $[A] = X & 255, $[A + 1] = X >> 8 & 255, $[A + 2] = X >> 16 & 255, $[A + 3] = X >> 24 & 255;
        oe % B === 0 && G(R);
      }
      return H && (A = oe << 2, X = R[Z], $[A] = X & 255, H > 1 && ($[A + 1] = X >> 8 & 255), H > 2 && ($[A + 2] = X >> 16 & 255)), $;
    };
    function S(B, R, N) {
      p.call(this, B, R, N);
    }
    S.prototype = new p(), S.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), p.prototype.finalize.call(this);
    };
    var G = function(B) {
      var R, N, H, Z, oe, $, A, X, te, pe, z, I, L, j, ie, he, Y, ae, de, ge, ye, F, E, T, W, ne, fe, ce, me, _e, be, Te, we, xe, Ke, Pe, Me, We, Oe, Ee, Ge, Le, Se, Ve, Ce, Ae, Ze, ke, $e, Je, Ne, Re, Ye, qe, Be, He, Ue, De, pt, vt, yt, gt, bt;
      for (H = 0; H < 48; H += 2)
        Z = B[0] ^ B[10] ^ B[20] ^ B[30] ^ B[40], oe = B[1] ^ B[11] ^ B[21] ^ B[31] ^ B[41], $ = B[2] ^ B[12] ^ B[22] ^ B[32] ^ B[42], A = B[3] ^ B[13] ^ B[23] ^ B[33] ^ B[43], X = B[4] ^ B[14] ^ B[24] ^ B[34] ^ B[44], te = B[5] ^ B[15] ^ B[25] ^ B[35] ^ B[45], pe = B[6] ^ B[16] ^ B[26] ^ B[36] ^ B[46], z = B[7] ^ B[17] ^ B[27] ^ B[37] ^ B[47], I = B[8] ^ B[18] ^ B[28] ^ B[38] ^ B[48], L = B[9] ^ B[19] ^ B[29] ^ B[39] ^ B[49], R = I ^ ($ << 1 | A >>> 31), N = L ^ (A << 1 | $ >>> 31), B[0] ^= R, B[1] ^= N, B[10] ^= R, B[11] ^= N, B[20] ^= R, B[21] ^= N, B[30] ^= R, B[31] ^= N, B[40] ^= R, B[41] ^= N, R = Z ^ (X << 1 | te >>> 31), N = oe ^ (te << 1 | X >>> 31), B[2] ^= R, B[3] ^= N, B[12] ^= R, B[13] ^= N, B[22] ^= R, B[23] ^= N, B[32] ^= R, B[33] ^= N, B[42] ^= R, B[43] ^= N, R = $ ^ (pe << 1 | z >>> 31), N = A ^ (z << 1 | pe >>> 31), B[4] ^= R, B[5] ^= N, B[14] ^= R, B[15] ^= N, B[24] ^= R, B[25] ^= N, B[34] ^= R, B[35] ^= N, B[44] ^= R, B[45] ^= N, R = X ^ (I << 1 | L >>> 31), N = te ^ (L << 1 | I >>> 31), B[6] ^= R, B[7] ^= N, B[16] ^= R, B[17] ^= N, B[26] ^= R, B[27] ^= N, B[36] ^= R, B[37] ^= N, B[46] ^= R, B[47] ^= N, R = pe ^ (Z << 1 | oe >>> 31), N = z ^ (oe << 1 | Z >>> 31), B[8] ^= R, B[9] ^= N, B[18] ^= R, B[19] ^= N, B[28] ^= R, B[29] ^= N, B[38] ^= R, B[39] ^= N, B[48] ^= R, B[49] ^= N, j = B[0], ie = B[1], Ae = B[11] << 4 | B[10] >>> 28, Ze = B[10] << 4 | B[11] >>> 28, ce = B[20] << 3 | B[21] >>> 29, me = B[21] << 3 | B[20] >>> 29, vt = B[31] << 9 | B[30] >>> 23, yt = B[30] << 9 | B[31] >>> 23, Le = B[40] << 18 | B[41] >>> 14, Se = B[41] << 18 | B[40] >>> 14, xe = B[2] << 1 | B[3] >>> 31, Ke = B[3] << 1 | B[2] >>> 31, he = B[13] << 12 | B[12] >>> 20, Y = B[12] << 12 | B[13] >>> 20, ke = B[22] << 10 | B[23] >>> 22, $e = B[23] << 10 | B[22] >>> 22, _e = B[33] << 13 | B[32] >>> 19, be = B[32] << 13 | B[33] >>> 19, gt = B[42] << 2 | B[43] >>> 30, bt = B[43] << 2 | B[42] >>> 30, qe = B[5] << 30 | B[4] >>> 2, Be = B[4] << 30 | B[5] >>> 2, Pe = B[14] << 6 | B[15] >>> 26, Me = B[15] << 6 | B[14] >>> 26, ae = B[25] << 11 | B[24] >>> 21, de = B[24] << 11 | B[25] >>> 21, Je = B[34] << 15 | B[35] >>> 17, Ne = B[35] << 15 | B[34] >>> 17, Te = B[45] << 29 | B[44] >>> 3, we = B[44] << 29 | B[45] >>> 3, T = B[6] << 28 | B[7] >>> 4, W = B[7] << 28 | B[6] >>> 4, He = B[17] << 23 | B[16] >>> 9, Ue = B[16] << 23 | B[17] >>> 9, We = B[26] << 25 | B[27] >>> 7, Oe = B[27] << 25 | B[26] >>> 7, ge = B[36] << 21 | B[37] >>> 11, ye = B[37] << 21 | B[36] >>> 11, Re = B[47] << 24 | B[46] >>> 8, Ye = B[46] << 24 | B[47] >>> 8, Ve = B[8] << 27 | B[9] >>> 5, Ce = B[9] << 27 | B[8] >>> 5, ne = B[18] << 20 | B[19] >>> 12, fe = B[19] << 20 | B[18] >>> 12, De = B[29] << 7 | B[28] >>> 25, pt = B[28] << 7 | B[29] >>> 25, Ee = B[38] << 8 | B[39] >>> 24, Ge = B[39] << 8 | B[38] >>> 24, F = B[48] << 14 | B[49] >>> 18, E = B[49] << 14 | B[48] >>> 18, B[0] = j ^ ~he & ae, B[1] = ie ^ ~Y & de, B[10] = T ^ ~ne & ce, B[11] = W ^ ~fe & me, B[20] = xe ^ ~Pe & We, B[21] = Ke ^ ~Me & Oe, B[30] = Ve ^ ~Ae & ke, B[31] = Ce ^ ~Ze & $e, B[40] = qe ^ ~He & De, B[41] = Be ^ ~Ue & pt, B[2] = he ^ ~ae & ge, B[3] = Y ^ ~de & ye, B[12] = ne ^ ~ce & _e, B[13] = fe ^ ~me & be, B[22] = Pe ^ ~We & Ee, B[23] = Me ^ ~Oe & Ge, B[32] = Ae ^ ~ke & Je, B[33] = Ze ^ ~$e & Ne, B[42] = He ^ ~De & vt, B[43] = Ue ^ ~pt & yt, B[4] = ae ^ ~ge & F, B[5] = de ^ ~ye & E, B[14] = ce ^ ~_e & Te, B[15] = me ^ ~be & we, B[24] = We ^ ~Ee & Le, B[25] = Oe ^ ~Ge & Se, B[34] = ke ^ ~Je & Re, B[35] = $e ^ ~Ne & Ye, B[44] = De ^ ~vt & gt, B[45] = pt ^ ~yt & bt, B[6] = ge ^ ~F & j, B[7] = ye ^ ~E & ie, B[16] = _e ^ ~Te & T, B[17] = be ^ ~we & W, B[26] = Ee ^ ~Le & xe, B[27] = Ge ^ ~Se & Ke, B[36] = Je ^ ~Re & Ve, B[37] = Ne ^ ~Ye & Ce, B[46] = vt ^ ~gt & qe, B[47] = yt ^ ~bt & Be, B[8] = F ^ ~j & he, B[9] = E ^ ~ie & Y, B[18] = Te ^ ~T & ne, B[19] = we ^ ~W & fe, B[28] = Le ^ ~xe & Pe, B[29] = Se ^ ~Ke & Me, B[38] = Re ^ ~Ve & Ae, B[39] = Ye ^ ~Ce & Ze, B[48] = gt ^ ~qe & He, B[49] = bt ^ ~Be & Ue, B[0] ^= k[H], B[1] ^= k[H + 1];
    };
    if (f)
      e.exports = o;
    else
      for (y = 0; y < c.length; ++y)
        a[c[y]] = o[c[y]];
  })();
})(WT);
var GT = {}, Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
var k2 = Or.isBrowserCryptoAvailable = F2 = Or.getSubtleCrypto = N2 = Or.getBrowerCrypto = void 0;
function X0() {
  return (Ie === null || Ie === void 0 ? void 0 : Ie.crypto) || (Ie === null || Ie === void 0 ? void 0 : Ie.msCrypto) || {};
}
var N2 = Or.getBrowerCrypto = X0;
function q2() {
  const e = X0();
  return e.subtle || e.webkitSubtle;
}
var F2 = Or.getSubtleCrypto = q2;
function VT() {
  return !!X0() && !!q2();
}
k2 = Or.isBrowserCryptoAvailable = VT;
const ZT = /* @__PURE__ */ ee({
  __proto__: null,
  get isBrowserCryptoAvailable() {
    return k2;
  },
  get getSubtleCrypto() {
    return F2;
  },
  get getBrowerCrypto() {
    return N2;
  },
  default: Or
}, [Or]), JT = /* @__PURE__ */ Q(ZT);
var Lr = {};
Object.defineProperty(Lr, "__esModule", { value: !0 });
var U2 = Lr.isBrowser = z2 = Lr.isNode = j2 = Lr.isReactNative = void 0;
function D2() {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
}
var j2 = Lr.isReactNative = D2;
function H2() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
var z2 = Lr.isNode = H2;
function YT() {
  return !D2() && !H2();
}
U2 = Lr.isBrowser = YT;
const XT = /* @__PURE__ */ ee({
  __proto__: null,
  get isBrowser() {
    return U2;
  },
  get isNode() {
    return z2;
  },
  get isReactNative() {
    return j2;
  },
  default: Lr
}, [Lr]), QT = /* @__PURE__ */ Q(XT);
(function(e) {
  var t = Ie && Ie.__createBinding || (Object.create ? function(n, a, i, s) {
    s === void 0 && (s = i), Object.defineProperty(n, s, { enumerable: !0, get: function() {
      return a[i];
    } });
  } : function(n, a, i, s) {
    s === void 0 && (s = i), n[s] = a[i];
  }), r = Ie && Ie.__exportStar || function(n, a) {
    for (var i in n)
      i !== "default" && !a.hasOwnProperty(i) && t(a, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(JT, e), r(QT, e);
})(GT);
var eI = {}, sp = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`);
const tI = /* @__PURE__ */ ee({
  __proto__: null,
  default: sp
}, [sp]), rI = /* @__PURE__ */ Q(tI);
var K2 = "%[a-f0-9]{2}", up = new RegExp(K2, "gi"), cp = new RegExp("(" + K2 + ")+", "gi");
function bu(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], bu(r), bu(n));
}
function nI(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(up), r = 1; r < t.length; r++)
      e = bu(t, r).join(""), t = e.match(up);
    return e;
  }
}
function iI(e) {
  for (var t = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, r = cp.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = nI(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = cp.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var a = Object.keys(t), i = 0; i < a.length; i++) {
    var s = a[i];
    e = e.replace(new RegExp(s, "g"), t[s]);
  }
  return e;
}
var lp = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return iI(e);
  }
};
const aI = /* @__PURE__ */ ee({
  __proto__: null,
  default: lp
}, [lp]), oI = /* @__PURE__ */ Q(aI);
var hp = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
};
const fI = /* @__PURE__ */ ee({
  __proto__: null,
  default: hp
}, [hp]), sI = /* @__PURE__ */ Q(fI);
(function(e) {
  const t = rI, r = oI, n = sI, a = (q) => q == null;
  function i(q) {
    switch (q.arrayFormat) {
      case "index":
        return (D) => (U, K) => {
          const J = U.length;
          return K === void 0 || q.skipNull && K === null || q.skipEmptyString && K === "" ? U : K === null ? [...U, [v(D, q), "[", J, "]"].join("")] : [
            ...U,
            [v(D, q), "[", v(J, q), "]=", v(K, q)].join("")
          ];
        };
      case "bracket":
        return (D) => (U, K) => K === void 0 || q.skipNull && K === null || q.skipEmptyString && K === "" ? U : K === null ? [...U, [v(D, q), "[]"].join("")] : [...U, [v(D, q), "[]=", v(K, q)].join("")];
      case "comma":
      case "separator":
        return (D) => (U, K) => K == null || K.length === 0 ? U : U.length === 0 ? [[v(D, q), "=", v(K, q)].join("")] : [[U, v(K, q)].join(q.arrayFormatSeparator)];
      default:
        return (D) => (U, K) => K === void 0 || q.skipNull && K === null || q.skipEmptyString && K === "" ? U : K === null ? [...U, v(D, q)] : [...U, [v(D, q), "=", v(K, q)].join("")];
    }
  }
  function s(q) {
    let D;
    switch (q.arrayFormat) {
      case "index":
        return (U, K, J) => {
          if (D = /\[(\d*)\]$/.exec(U), U = U.replace(/\[\d*\]$/, ""), !D) {
            J[U] = K;
            return;
          }
          J[U] === void 0 && (J[U] = {}), J[U][D[1]] = K;
        };
      case "bracket":
        return (U, K, J) => {
          if (D = /(\[\])$/.exec(U), U = U.replace(/\[\]$/, ""), !D) {
            J[U] = K;
            return;
          }
          if (J[U] === void 0) {
            J[U] = [K];
            return;
          }
          J[U] = [].concat(J[U], K);
        };
      case "comma":
      case "separator":
        return (U, K, J) => {
          const ue = typeof K == "string" && K.split("").indexOf(q.arrayFormatSeparator) > -1 ? K.split(q.arrayFormatSeparator).map((ve) => m(ve, q)) : K === null ? K : m(K, q);
          J[U] = ue;
        };
      default:
        return (U, K, J) => {
          if (J[U] === void 0) {
            J[U] = K;
            return;
          }
          J[U] = [].concat(J[U], K);
        };
    }
  }
  function f(q) {
    if (typeof q != "string" || q.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(q, D) {
    return D.encode ? D.strict ? t(q) : encodeURIComponent(q) : q;
  }
  function m(q, D) {
    return D.decode ? r(q) : q;
  }
  function _(q) {
    return Array.isArray(q) ? q.sort() : typeof q == "object" ? _(Object.keys(q)).sort((D, U) => Number(D) - Number(U)).map((D) => q[D]) : q;
  }
  function O(q) {
    const D = q.indexOf("#");
    return D !== -1 && (q = q.slice(0, D)), q;
  }
  function P(q) {
    let D = "";
    const U = q.indexOf("#");
    return U !== -1 && (D = q.slice(U)), D;
  }
  function C(q) {
    q = O(q);
    const D = q.indexOf("?");
    return D === -1 ? "" : q.slice(D + 1);
  }
  function M(q, D) {
    return D.parseNumbers && !Number.isNaN(Number(q)) && typeof q == "string" && q.trim() !== "" ? q = Number(q) : D.parseBooleans && q !== null && (q.toLowerCase() === "true" || q.toLowerCase() === "false") && (q = q.toLowerCase() === "true"), q;
  }
  function k(q, D) {
    D = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, D), f(D.arrayFormatSeparator);
    const U = s(D), K = /* @__PURE__ */ Object.create(null);
    if (typeof q != "string" || (q = q.trim().replace(/^[?#&]/, ""), !q))
      return K;
    for (const J of q.split("&")) {
      let [re, ue] = n(D.decode ? J.replace(/\+/g, " ") : J, "=");
      ue = ue === void 0 ? null : ["comma", "separator"].includes(D.arrayFormat) ? ue : m(ue, D), U(m(re, D), ue, K);
    }
    for (const J of Object.keys(K)) {
      const re = K[J];
      if (typeof re == "object" && re !== null)
        for (const ue of Object.keys(re))
          re[ue] = M(re[ue], D);
      else
        K[J] = M(re, D);
    }
    return D.sort === !1 ? K : (D.sort === !0 ? Object.keys(K).sort() : Object.keys(K).sort(D.sort)).reduce((J, re) => {
      const ue = K[re];
      return Boolean(ue) && typeof ue == "object" && !Array.isArray(ue) ? J[re] = _(ue) : J[re] = ue, J;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = C, e.parse = k, e.stringify = (q, D) => {
    if (!q)
      return "";
    D = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, D), f(D.arrayFormatSeparator);
    const U = (ue) => D.skipNull && a(q[ue]) || D.skipEmptyString && q[ue] === "", K = i(D), J = {};
    for (const ue of Object.keys(q))
      U(ue) || (J[ue] = q[ue]);
    const re = Object.keys(J);
    return D.sort !== !1 && re.sort(D.sort), re.map((ue) => {
      const ve = q[ue];
      return ve === void 0 ? "" : ve === null ? v(ue, D) : Array.isArray(ve) ? ve.reduce(K(ue), []).join("&") : v(ue, D) + "=" + v(ve, D);
    }).filter((ue) => ue.length > 0).join("&");
  }, e.parseUrl = (q, D) => {
    D = Object.assign({
      decode: !0
    }, D);
    const [U, K] = n(q, "#");
    return Object.assign(
      {
        url: U.split("?")[0] || "",
        query: k(C(q), D)
      },
      D && D.parseFragmentIdentifier && K ? { fragmentIdentifier: m(K, D) } : {}
    );
  }, e.stringifyUrl = (q, D) => {
    D = Object.assign({
      encode: !0,
      strict: !0
    }, D);
    const U = O(q.url).split("?")[0] || "", K = e.extract(q.url), J = e.parse(K, { sort: !1 }), re = Object.assign(J, q.query);
    let ue = e.stringify(re, D);
    ue && (ue = `?${ue}`);
    let ve = P(q.url);
    return q.fragmentIdentifier && (ve = `#${v(q.fragmentIdentifier, D)}`), `${U}${ue}${ve}`;
  };
})(eI);
const uI = "abcdefghijklmnopqrstuvwxyz0123456789";
uI.split("").map((e) => `https://${e}.bridge.walletconnect.org`);
var ri = {}, dp = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
};
const cI = /* @__PURE__ */ ee({
  __proto__: null,
  default: dp
}, [dp]), lI = /* @__PURE__ */ Q(cI);
var _u = {}, Ro = {}, hI = {}.toString, pp = Array.isArray || function(e) {
  return hI.call(e) == "[object Array]";
};
const dI = /* @__PURE__ */ ee({
  __proto__: null,
  default: pp
}, [pp]), Q0 = /* @__PURE__ */ Q(dI);
var pI = Q0;
function vI() {
  try {
    var e = new Uint8Array(1);
    return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, e.foo() === 42;
  } catch {
    return !1;
  }
}
ze.TYPED_ARRAY_SUPPORT = vI();
var vp = ze.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function ze(e, t, r) {
  return !ze.TYPED_ARRAY_SUPPORT && !(this instanceof ze) ? new ze(e, t, r) : typeof e == "number" ? W2(this, e) : xI(this, e, t, r);
}
ze.TYPED_ARRAY_SUPPORT && (ze.prototype.__proto__ = Uint8Array.prototype, ze.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ze[Symbol.species] === ze && Object.defineProperty(ze, Symbol.species, {
  value: null,
  configurable: !0,
  enumerable: !1,
  writable: !1
}));
function ec(e) {
  if (e >= vp)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + vp.toString(16) + " bytes");
  return e | 0;
}
function yI(e) {
  return e !== e;
}
function ni(e, t) {
  var r;
  return ze.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t), r.__proto__ = ze.prototype) : (r = e, r === null && (r = new ze(t)), r.length = t), r;
}
function W2(e, t) {
  var r = ni(e, t < 0 ? 0 : ec(t) | 0);
  if (!ze.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < t; ++n)
      r[n] = 0;
  return r;
}
function gI(e, t) {
  var r = V2(t) | 0, n = ni(e, r), a = n.write(t);
  return a !== r && (n = n.slice(0, a)), n;
}
function mu(e, t) {
  for (var r = t.length < 0 ? 0 : ec(t.length) | 0, n = ni(e, r), a = 0; a < r; a += 1)
    n[a] = t[a] & 255;
  return n;
}
function bI(e, t, r, n) {
  if (r < 0 || t.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (t.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  var a;
  return r === void 0 && n === void 0 ? a = new Uint8Array(t) : n === void 0 ? a = new Uint8Array(t, r) : a = new Uint8Array(t, r, n), ze.TYPED_ARRAY_SUPPORT ? a.__proto__ = ze.prototype : a = mu(e, a), a;
}
function _I(e, t) {
  if (ze.isBuffer(t)) {
    var r = ec(t.length) | 0, n = ni(e, r);
    return n.length === 0 || t.copy(n, 0, 0, r), n;
  }
  if (t) {
    if (typeof ArrayBuffer < "u" && t.buffer instanceof ArrayBuffer || "length" in t)
      return typeof t.length != "number" || yI(t.length) ? ni(e, 0) : mu(e, t);
    if (t.type === "Buffer" && Array.isArray(t.data))
      return mu(e, t.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function G2(e, t) {
  t = t || 1 / 0;
  for (var r, n = e.length, a = null, i = [], s = 0; s < n; ++s) {
    if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
      if (!a) {
        if (r > 56319) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        } else if (s + 1 === n) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        a = r;
        continue;
      }
      if (r < 56320) {
        (t -= 3) > -1 && i.push(239, 191, 189), a = r;
        continue;
      }
      r = (a - 55296 << 10 | r - 56320) + 65536;
    } else
      a && (t -= 3) > -1 && i.push(239, 191, 189);
    if (a = null, r < 128) {
      if ((t -= 1) < 0)
        break;
      i.push(r);
    } else if (r < 2048) {
      if ((t -= 2) < 0)
        break;
      i.push(
        r >> 6 | 192,
        r & 63 | 128
      );
    } else if (r < 65536) {
      if ((t -= 3) < 0)
        break;
      i.push(
        r >> 12 | 224,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else if (r < 1114112) {
      if ((t -= 4) < 0)
        break;
      i.push(
        r >> 18 | 240,
        r >> 12 & 63 | 128,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return i;
}
function V2(e) {
  if (ze.isBuffer(e))
    return e.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
    return e.byteLength;
  typeof e != "string" && (e = "" + e);
  var t = e.length;
  return t === 0 ? 0 : G2(e).length;
}
function mI(e, t, r, n) {
  for (var a = 0; a < n && !(a + r >= t.length || a >= e.length); ++a)
    t[a + r] = e[a];
  return a;
}
function wI(e, t, r, n) {
  return mI(G2(t, e.length - r), e, r, n);
}
function xI(e, t, r, n) {
  if (typeof t == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer ? bI(e, t, r, n) : typeof t == "string" ? gI(e, t) : _I(e, t);
}
ze.prototype.write = function(t, r, n) {
  r === void 0 ? (n = this.length, r = 0) : n === void 0 && typeof r == "string" ? (n = this.length, r = 0) : isFinite(r) && (r = r | 0, isFinite(n) ? n = n | 0 : n = void 0);
  var a = this.length - r;
  if ((n === void 0 || n > a) && (n = a), t.length > 0 && (n < 0 || r < 0) || r > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return wI(this, t, r, n);
};
ze.prototype.slice = function(t, r) {
  var n = this.length;
  t = ~~t, r = r === void 0 ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
  var a;
  if (ze.TYPED_ARRAY_SUPPORT)
    a = this.subarray(t, r), a.__proto__ = ze.prototype;
  else {
    var i = r - t;
    a = new ze(i, void 0);
    for (var s = 0; s < i; ++s)
      a[s] = this[s + t];
  }
  return a;
};
ze.prototype.copy = function(t, r, n, a) {
  if (n || (n = 0), !a && a !== 0 && (a = this.length), r >= t.length && (r = t.length), r || (r = 0), a > 0 && a < n && (a = n), a === n || t.length === 0 || this.length === 0)
    return 0;
  if (r < 0)
    throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (a < 0)
    throw new RangeError("sourceEnd out of bounds");
  a > this.length && (a = this.length), t.length - r < a - n && (a = t.length - r + n);
  var i = a - n, s;
  if (this === t && n < r && r < a)
    for (s = i - 1; s >= 0; --s)
      t[s + r] = this[s + n];
  else if (i < 1e3 || !ze.TYPED_ARRAY_SUPPORT)
    for (s = 0; s < i; ++s)
      t[s + r] = this[s + n];
  else
    Uint8Array.prototype.set.call(
      t,
      this.subarray(n, n + i),
      r
    );
  return i;
};
ze.prototype.fill = function(t, r, n) {
  if (typeof t == "string") {
    if (typeof r == "string" ? (r = 0, n = this.length) : typeof n == "string" && (n = this.length), t.length === 1) {
      var a = t.charCodeAt(0);
      a < 256 && (t = a);
    }
  } else
    typeof t == "number" && (t = t & 255);
  if (r < 0 || this.length < r || this.length < n)
    throw new RangeError("Out of range index");
  if (n <= r)
    return this;
  r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
  var i;
  if (typeof t == "number")
    for (i = r; i < n; ++i)
      this[i] = t;
  else {
    var s = ze.isBuffer(t) ? t : new ze(t), f = s.length;
    for (i = 0; i < n - r; ++i)
      this[i + r] = s[i % f];
  }
  return this;
};
ze.concat = function(t, r) {
  if (!pI(t))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (t.length === 0)
    return ni(null, 0);
  var n;
  if (r === void 0)
    for (r = 0, n = 0; n < t.length; ++n)
      r += t[n].length;
  var a = W2(null, r), i = 0;
  for (n = 0; n < t.length; ++n) {
    var s = t[n];
    if (!ze.isBuffer(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    s.copy(a, i), i += s.length;
  }
  return a;
};
ze.byteLength = V2;
ze.prototype._isBuffer = !0;
ze.isBuffer = function(t) {
  return !!(t != null && t._isBuffer);
};
var MI = Ro.alloc = function(e) {
  var t = new ze(e);
  return t.fill(0), t;
}, EI = Ro.from = function(e) {
  return new ze(e);
};
const SI = /* @__PURE__ */ ee({
  __proto__: null,
  alloc: MI,
  from: EI,
  default: Ro
}, [Ro]), mi = /* @__PURE__ */ Q(SI);
var Zr = {}, tc, AI = [
  0,
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
], $I = Zr.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
}, RI = Zr.getSymbolTotalCodewords = function(t) {
  return AI[t];
}, BI = Zr.getBCHDigit = function(e) {
  for (var t = 0; e !== 0; )
    t++, e >>>= 1;
  return t;
}, TI = Zr.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  tc = t;
}, II = Zr.isKanjiModeEnabled = function() {
  return typeof tc < "u";
}, PI = Zr.toSJIS = function(t) {
  return tc(t);
};
const OI = /* @__PURE__ */ ee({
  __proto__: null,
  getSymbolSize: $I,
  getSymbolTotalCodewords: RI,
  getBCHDigit: BI,
  setToSJISFunction: TI,
  isKanjiModeEnabled: II,
  toSJIS: PI,
  default: Zr
}, [Zr]), Tn = /* @__PURE__ */ Q(OI);
var wu = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function t(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    var n = r.toLowerCase();
    switch (n) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  e.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, e.from = function(n, a) {
    if (e.isValid(n))
      return n;
    try {
      return t(n);
    } catch {
      return a;
    }
  };
})(wu);
const LI = /* @__PURE__ */ ee({
  __proto__: null,
  default: wu
}, [wu]), rc = /* @__PURE__ */ Q(LI);
function Z2() {
  this.buffer = [], this.length = 0;
}
Z2.prototype = {
  get: function(e) {
    var t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, t) {
    for (var r = 0; r < t; r++)
      this.putBit((e >>> t - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var yp = Z2;
const CI = /* @__PURE__ */ ee({
  __proto__: null,
  default: yp
}, [yp]), kI = /* @__PURE__ */ Q(CI);
var gp = mi;
function ba(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = gp.alloc(e * e), this.reservedBit = gp.alloc(e * e);
}
ba.prototype.set = function(e, t, r, n) {
  var a = e * this.size + t;
  this.data[a] = r, n && (this.reservedBit[a] = !0);
};
ba.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
ba.prototype.xor = function(e, t, r) {
  this.data[e * this.size + t] ^= r;
};
ba.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var bp = ba;
const NI = /* @__PURE__ */ ee({
  __proto__: null,
  default: bp
}, [bp]), qI = /* @__PURE__ */ Q(NI);
var xu = {};
(function(e) {
  var t = Tn.getSymbolSize;
  e.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    for (var a = Math.floor(n / 7) + 2, i = t(n), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * a - 2)) * 2, f = [i - 7], v = 1; v < a - 1; v++)
      f[v] = f[v - 1] - s;
    return f.push(6), f.reverse();
  }, e.getPositions = function(n) {
    for (var a = [], i = e.getRowColCoords(n), s = i.length, f = 0; f < s; f++)
      for (var v = 0; v < s; v++)
        f === 0 && v === 0 || f === 0 && v === s - 1 || f === s - 1 && v === 0 || a.push([i[f], i[v]]);
    return a;
  };
})(xu);
const FI = /* @__PURE__ */ ee({
  __proto__: null,
  default: xu
}, [xu]), UI = /* @__PURE__ */ Q(FI);
var Mu = {}, DI = Tn.getSymbolSize, _p = 7, jI = Mu.getPositions = function(t) {
  var r = DI(t);
  return [
    [0, 0],
    [r - _p, 0],
    [0, r - _p]
  ];
};
const HI = /* @__PURE__ */ ee({
  __proto__: null,
  getPositions: jI,
  default: Mu
}, [Mu]), zI = /* @__PURE__ */ Q(HI);
var Eu = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(a) {
    return a != null && a !== "" && !isNaN(a) && a >= 0 && a <= 7;
  }, e.from = function(a) {
    return e.isValid(a) ? parseInt(a, 10) : void 0;
  }, e.getPenaltyN1 = function(a) {
    for (var i = a.size, s = 0, f = 0, v = 0, m = null, _ = null, O = 0; O < i; O++) {
      f = v = 0, m = _ = null;
      for (var P = 0; P < i; P++) {
        var C = a.get(O, P);
        C === m ? f++ : (f >= 5 && (s += t.N1 + (f - 5)), m = C, f = 1), C = a.get(P, O), C === _ ? v++ : (v >= 5 && (s += t.N1 + (v - 5)), _ = C, v = 1);
      }
      f >= 5 && (s += t.N1 + (f - 5)), v >= 5 && (s += t.N1 + (v - 5));
    }
    return s;
  }, e.getPenaltyN2 = function(a) {
    for (var i = a.size, s = 0, f = 0; f < i - 1; f++)
      for (var v = 0; v < i - 1; v++) {
        var m = a.get(f, v) + a.get(f, v + 1) + a.get(f + 1, v) + a.get(f + 1, v + 1);
        (m === 4 || m === 0) && s++;
      }
    return s * t.N2;
  }, e.getPenaltyN3 = function(a) {
    for (var i = a.size, s = 0, f = 0, v = 0, m = 0; m < i; m++) {
      f = v = 0;
      for (var _ = 0; _ < i; _++)
        f = f << 1 & 2047 | a.get(m, _), _ >= 10 && (f === 1488 || f === 93) && s++, v = v << 1 & 2047 | a.get(_, m), _ >= 10 && (v === 1488 || v === 93) && s++;
    }
    return s * t.N3;
  }, e.getPenaltyN4 = function(a) {
    for (var i = 0, s = a.data.length, f = 0; f < s; f++)
      i += a.data[f];
    var v = Math.abs(Math.ceil(i * 100 / s / 5) - 10);
    return v * t.N4;
  };
  function r(n, a, i) {
    switch (n) {
      case e.Patterns.PATTERN000:
        return (a + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return a % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (a + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(a / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return a * i % 2 + a * i % 3 === 0;
      case e.Patterns.PATTERN110:
        return (a * i % 2 + a * i % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (a * i % 3 + (a + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  e.applyMask = function(a, i) {
    for (var s = i.size, f = 0; f < s; f++)
      for (var v = 0; v < s; v++)
        i.isReserved(v, f) || i.xor(v, f, r(a, v, f));
  }, e.getBestMask = function(a, i) {
    for (var s = Object.keys(e.Patterns).length, f = 0, v = 1 / 0, m = 0; m < s; m++) {
      i(m), e.applyMask(m, a);
      var _ = e.getPenaltyN1(a) + e.getPenaltyN2(a) + e.getPenaltyN3(a) + e.getPenaltyN4(a);
      e.applyMask(m, a), _ < v && (v = _, f = m);
    }
    return f;
  };
})(Eu);
const KI = /* @__PURE__ */ ee({
  __proto__: null,
  default: Eu
}, [Eu]), WI = /* @__PURE__ */ Q(KI);
var Bo = {}, Wr = rc, Ra = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Ba = [
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
], GI = Bo.getBlocksCount = function(t, r) {
  switch (r) {
    case Wr.L:
      return Ra[(t - 1) * 4 + 0];
    case Wr.M:
      return Ra[(t - 1) * 4 + 1];
    case Wr.Q:
      return Ra[(t - 1) * 4 + 2];
    case Wr.H:
      return Ra[(t - 1) * 4 + 3];
    default:
      return;
  }
}, VI = Bo.getTotalCodewordsCount = function(t, r) {
  switch (r) {
    case Wr.L:
      return Ba[(t - 1) * 4 + 0];
    case Wr.M:
      return Ba[(t - 1) * 4 + 1];
    case Wr.Q:
      return Ba[(t - 1) * 4 + 2];
    case Wr.H:
      return Ba[(t - 1) * 4 + 3];
    default:
      return;
  }
};
const ZI = /* @__PURE__ */ ee({
  __proto__: null,
  getBlocksCount: GI,
  getTotalCodewordsCount: VI,
  default: Bo
}, [Bo]), J2 = /* @__PURE__ */ Q(ZI);
var Su = {}, ea = {}, Y2 = mi, Pi = Y2.alloc(512), To = Y2.alloc(256);
(function() {
  for (var t = 1, r = 0; r < 255; r++)
    Pi[r] = t, To[t] = r, t <<= 1, t & 256 && (t ^= 285);
  for (r = 255; r < 512; r++)
    Pi[r] = Pi[r - 255];
})();
var JI = ea.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return To[t];
}, YI = ea.exp = function(t) {
  return Pi[t];
}, XI = ea.mul = function(t, r) {
  return t === 0 || r === 0 ? 0 : Pi[To[t] + To[r]];
};
const QI = /* @__PURE__ */ ee({
  __proto__: null,
  log: JI,
  exp: YI,
  mul: XI,
  default: ea
}, [ea]), eP = /* @__PURE__ */ Q(QI);
(function(e) {
  var t = mi, r = eP;
  e.mul = function(a, i) {
    for (var s = t.alloc(a.length + i.length - 1), f = 0; f < a.length; f++)
      for (var v = 0; v < i.length; v++)
        s[f + v] ^= r.mul(a[f], i[v]);
    return s;
  }, e.mod = function(a, i) {
    for (var s = t.from(a); s.length - i.length >= 0; ) {
      for (var f = s[0], v = 0; v < i.length; v++)
        s[v] ^= r.mul(i[v], f);
      for (var m = 0; m < s.length && s[m] === 0; )
        m++;
      s = s.slice(m);
    }
    return s;
  }, e.generateECPolynomial = function(a) {
    for (var i = t.from([1]), s = 0; s < a; s++)
      i = e.mul(i, [1, r.exp(s)]);
    return i;
  };
})(Su);
const tP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Su
}, [Su]), rP = /* @__PURE__ */ Q(tP);
var Au = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = k1, r = N1, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = f, e.SlowBuffer = U, e.INSPECT_MAX_BYTES = 50;
  var a = 2147483647;
  e.kMaxLength = a, f.TYPED_ARRAY_SUPPORT = i(), !f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      var z = new Uint8Array(1), I = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(I, Uint8Array.prototype), Object.setPrototypeOf(z, I), z.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(f.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!f.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(f.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!f.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(z) {
    if (z > a)
      throw new RangeError('The value "' + z + '" is invalid for option "size"');
    var I = new Uint8Array(z);
    return Object.setPrototypeOf(I, f.prototype), I;
  }
  function f(z, I, L) {
    if (typeof z == "number") {
      if (typeof I == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return O(z);
    }
    return v(z, I, L);
  }
  f.poolSize = 8192;
  function v(z, I, L) {
    if (typeof z == "string")
      return P(z, I);
    if (ArrayBuffer.isView(z))
      return M(z);
    if (z == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof z
      );
    if (X(z, ArrayBuffer) || z && X(z.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (X(z, SharedArrayBuffer) || z && X(z.buffer, SharedArrayBuffer)))
      return k(z, I, L);
    if (typeof z == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var j = z.valueOf && z.valueOf();
    if (j != null && j !== z)
      return f.from(j, I, L);
    var ie = q(z);
    if (ie)
      return ie;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof z[Symbol.toPrimitive] == "function")
      return f.from(
        z[Symbol.toPrimitive]("string"),
        I,
        L
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof z
    );
  }
  f.from = function(z, I, L) {
    return v(z, I, L);
  }, Object.setPrototypeOf(f.prototype, Uint8Array.prototype), Object.setPrototypeOf(f, Uint8Array);
  function m(z) {
    if (typeof z != "number")
      throw new TypeError('"size" argument must be of type number');
    if (z < 0)
      throw new RangeError('The value "' + z + '" is invalid for option "size"');
  }
  function _(z, I, L) {
    return m(z), z <= 0 ? s(z) : I !== void 0 ? typeof L == "string" ? s(z).fill(I, L) : s(z).fill(I) : s(z);
  }
  f.alloc = function(z, I, L) {
    return _(z, I, L);
  };
  function O(z) {
    return m(z), s(z < 0 ? 0 : D(z) | 0);
  }
  f.allocUnsafe = function(z) {
    return O(z);
  }, f.allocUnsafeSlow = function(z) {
    return O(z);
  };
  function P(z, I) {
    if ((typeof I != "string" || I === "") && (I = "utf8"), !f.isEncoding(I))
      throw new TypeError("Unknown encoding: " + I);
    var L = K(z, I) | 0, j = s(L), ie = j.write(z, I);
    return ie !== L && (j = j.slice(0, ie)), j;
  }
  function C(z) {
    for (var I = z.length < 0 ? 0 : D(z.length) | 0, L = s(I), j = 0; j < I; j += 1)
      L[j] = z[j] & 255;
    return L;
  }
  function M(z) {
    if (X(z, Uint8Array)) {
      var I = new Uint8Array(z);
      return k(I.buffer, I.byteOffset, I.byteLength);
    }
    return C(z);
  }
  function k(z, I, L) {
    if (I < 0 || z.byteLength < I)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (z.byteLength < I + (L || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var j;
    return I === void 0 && L === void 0 ? j = new Uint8Array(z) : L === void 0 ? j = new Uint8Array(z, I) : j = new Uint8Array(z, I, L), Object.setPrototypeOf(j, f.prototype), j;
  }
  function q(z) {
    if (f.isBuffer(z)) {
      var I = D(z.length) | 0, L = s(I);
      return L.length === 0 || z.copy(L, 0, 0, I), L;
    }
    if (z.length !== void 0)
      return typeof z.length != "number" || te(z.length) ? s(0) : C(z);
    if (z.type === "Buffer" && Array.isArray(z.data))
      return C(z.data);
  }
  function D(z) {
    if (z >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return z | 0;
  }
  function U(z) {
    return +z != z && (z = 0), f.alloc(+z);
  }
  f.isBuffer = function(I) {
    return I != null && I._isBuffer === !0 && I !== f.prototype;
  }, f.compare = function(I, L) {
    if (X(I, Uint8Array) && (I = f.from(I, I.offset, I.byteLength)), X(L, Uint8Array) && (L = f.from(L, L.offset, L.byteLength)), !f.isBuffer(I) || !f.isBuffer(L))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (I === L)
      return 0;
    for (var j = I.length, ie = L.length, he = 0, Y = Math.min(j, ie); he < Y; ++he)
      if (I[he] !== L[he]) {
        j = I[he], ie = L[he];
        break;
      }
    return j < ie ? -1 : ie < j ? 1 : 0;
  }, f.isEncoding = function(I) {
    switch (String(I).toLowerCase()) {
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
  }, f.concat = function(I, L) {
    if (!Array.isArray(I))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (I.length === 0)
      return f.alloc(0);
    var j;
    if (L === void 0)
      for (L = 0, j = 0; j < I.length; ++j)
        L += I[j].length;
    var ie = f.allocUnsafe(L), he = 0;
    for (j = 0; j < I.length; ++j) {
      var Y = I[j];
      if (X(Y, Uint8Array))
        he + Y.length > ie.length ? f.from(Y).copy(ie, he) : Uint8Array.prototype.set.call(
          ie,
          Y,
          he
        );
      else if (f.isBuffer(Y))
        Y.copy(ie, he);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      he += Y.length;
    }
    return ie;
  };
  function K(z, I) {
    if (f.isBuffer(z))
      return z.length;
    if (ArrayBuffer.isView(z) || X(z, ArrayBuffer))
      return z.byteLength;
    if (typeof z != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof z
      );
    var L = z.length, j = arguments.length > 2 && arguments[2] === !0;
    if (!j && L === 0)
      return 0;
    for (var ie = !1; ; )
      switch (I) {
        case "ascii":
        case "latin1":
        case "binary":
          return L;
        case "utf8":
        case "utf-8":
          return H(z).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return L * 2;
        case "hex":
          return L >>> 1;
        case "base64":
          return $(z).length;
        default:
          if (ie)
            return j ? -1 : H(z).length;
          I = ("" + I).toLowerCase(), ie = !0;
      }
  }
  f.byteLength = K;
  function J(z, I, L) {
    var j = !1;
    if ((I === void 0 || I < 0) && (I = 0), I > this.length || ((L === void 0 || L > this.length) && (L = this.length), L <= 0) || (L >>>= 0, I >>>= 0, L <= I))
      return "";
    for (z || (z = "utf8"); ; )
      switch (z) {
        case "hex":
          return h(this, I, L);
        case "utf8":
        case "utf-8":
          return o(this, I, L);
        case "ascii":
          return x(this, I, L);
        case "latin1":
        case "binary":
          return b(this, I, L);
        case "base64":
          return u(this, I, L);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return d(this, I, L);
        default:
          if (j)
            throw new TypeError("Unknown encoding: " + z);
          z = (z + "").toLowerCase(), j = !0;
      }
  }
  f.prototype._isBuffer = !0;
  function re(z, I, L) {
    var j = z[I];
    z[I] = z[L], z[L] = j;
  }
  f.prototype.swap16 = function() {
    var I = this.length;
    if (I % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var L = 0; L < I; L += 2)
      re(this, L, L + 1);
    return this;
  }, f.prototype.swap32 = function() {
    var I = this.length;
    if (I % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var L = 0; L < I; L += 4)
      re(this, L, L + 3), re(this, L + 1, L + 2);
    return this;
  }, f.prototype.swap64 = function() {
    var I = this.length;
    if (I % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var L = 0; L < I; L += 8)
      re(this, L, L + 7), re(this, L + 1, L + 6), re(this, L + 2, L + 5), re(this, L + 3, L + 4);
    return this;
  }, f.prototype.toString = function() {
    var I = this.length;
    return I === 0 ? "" : arguments.length === 0 ? o(this, 0, I) : J.apply(this, arguments);
  }, f.prototype.toLocaleString = f.prototype.toString, f.prototype.equals = function(I) {
    if (!f.isBuffer(I))
      throw new TypeError("Argument must be a Buffer");
    return this === I ? !0 : f.compare(this, I) === 0;
  }, f.prototype.inspect = function() {
    var I = "", L = e.INSPECT_MAX_BYTES;
    return I = this.toString("hex", 0, L).replace(/(.{2})/g, "$1 ").trim(), this.length > L && (I += " ... "), "<Buffer " + I + ">";
  }, n && (f.prototype[n] = f.prototype.inspect), f.prototype.compare = function(I, L, j, ie, he) {
    if (X(I, Uint8Array) && (I = f.from(I, I.offset, I.byteLength)), !f.isBuffer(I))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof I
      );
    if (L === void 0 && (L = 0), j === void 0 && (j = I ? I.length : 0), ie === void 0 && (ie = 0), he === void 0 && (he = this.length), L < 0 || j > I.length || ie < 0 || he > this.length)
      throw new RangeError("out of range index");
    if (ie >= he && L >= j)
      return 0;
    if (ie >= he)
      return -1;
    if (L >= j)
      return 1;
    if (L >>>= 0, j >>>= 0, ie >>>= 0, he >>>= 0, this === I)
      return 0;
    for (var Y = he - ie, ae = j - L, de = Math.min(Y, ae), ge = this.slice(ie, he), ye = I.slice(L, j), F = 0; F < de; ++F)
      if (ge[F] !== ye[F]) {
        Y = ge[F], ae = ye[F];
        break;
      }
    return Y < ae ? -1 : ae < Y ? 1 : 0;
  };
  function ue(z, I, L, j, ie) {
    if (z.length === 0)
      return -1;
    if (typeof L == "string" ? (j = L, L = 0) : L > 2147483647 ? L = 2147483647 : L < -2147483648 && (L = -2147483648), L = +L, te(L) && (L = ie ? 0 : z.length - 1), L < 0 && (L = z.length + L), L >= z.length) {
      if (ie)
        return -1;
      L = z.length - 1;
    } else if (L < 0)
      if (ie)
        L = 0;
      else
        return -1;
    if (typeof I == "string" && (I = f.from(I, j)), f.isBuffer(I))
      return I.length === 0 ? -1 : ve(z, I, L, j, ie);
    if (typeof I == "number")
      return I = I & 255, typeof Uint8Array.prototype.indexOf == "function" ? ie ? Uint8Array.prototype.indexOf.call(z, I, L) : Uint8Array.prototype.lastIndexOf.call(z, I, L) : ve(z, [I], L, j, ie);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ve(z, I, L, j, ie) {
    var he = 1, Y = z.length, ae = I.length;
    if (j !== void 0 && (j = String(j).toLowerCase(), j === "ucs2" || j === "ucs-2" || j === "utf16le" || j === "utf-16le")) {
      if (z.length < 2 || I.length < 2)
        return -1;
      he = 2, Y /= 2, ae /= 2, L /= 2;
    }
    function de(T, W) {
      return he === 1 ? T[W] : T.readUInt16BE(W * he);
    }
    var ge;
    if (ie) {
      var ye = -1;
      for (ge = L; ge < Y; ge++)
        if (de(z, ge) === de(I, ye === -1 ? 0 : ge - ye)) {
          if (ye === -1 && (ye = ge), ge - ye + 1 === ae)
            return ye * he;
        } else
          ye !== -1 && (ge -= ge - ye), ye = -1;
    } else
      for (L + ae > Y && (L = Y - ae), ge = L; ge >= 0; ge--) {
        for (var F = !0, E = 0; E < ae; E++)
          if (de(z, ge + E) !== de(I, E)) {
            F = !1;
            break;
          }
        if (F)
          return ge;
      }
    return -1;
  }
  f.prototype.includes = function(I, L, j) {
    return this.indexOf(I, L, j) !== -1;
  }, f.prototype.indexOf = function(I, L, j) {
    return ue(this, I, L, j, !0);
  }, f.prototype.lastIndexOf = function(I, L, j) {
    return ue(this, I, L, j, !1);
  };
  function se(z, I, L, j) {
    L = Number(L) || 0;
    var ie = z.length - L;
    j ? (j = Number(j), j > ie && (j = ie)) : j = ie;
    var he = I.length;
    j > he / 2 && (j = he / 2);
    for (var Y = 0; Y < j; ++Y) {
      var ae = parseInt(I.substr(Y * 2, 2), 16);
      if (te(ae))
        return Y;
      z[L + Y] = ae;
    }
    return Y;
  }
  function le(z, I, L, j) {
    return A(H(I, z.length - L), z, L, j);
  }
  function V(z, I, L, j) {
    return A(Z(I), z, L, j);
  }
  function g(z, I, L, j) {
    return A($(I), z, L, j);
  }
  function l(z, I, L, j) {
    return A(oe(I, z.length - L), z, L, j);
  }
  f.prototype.write = function(I, L, j, ie) {
    if (L === void 0)
      ie = "utf8", j = this.length, L = 0;
    else if (j === void 0 && typeof L == "string")
      ie = L, j = this.length, L = 0;
    else if (isFinite(L))
      L = L >>> 0, isFinite(j) ? (j = j >>> 0, ie === void 0 && (ie = "utf8")) : (ie = j, j = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var he = this.length - L;
    if ((j === void 0 || j > he) && (j = he), I.length > 0 && (j < 0 || L < 0) || L > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    ie || (ie = "utf8");
    for (var Y = !1; ; )
      switch (ie) {
        case "hex":
          return se(this, I, L, j);
        case "utf8":
        case "utf-8":
          return le(this, I, L, j);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, I, L, j);
        case "base64":
          return g(this, I, L, j);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l(this, I, L, j);
        default:
          if (Y)
            throw new TypeError("Unknown encoding: " + ie);
          ie = ("" + ie).toLowerCase(), Y = !0;
      }
  }, f.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function u(z, I, L) {
    return I === 0 && L === z.length ? t.fromByteArray(z) : t.fromByteArray(z.slice(I, L));
  }
  function o(z, I, L) {
    L = Math.min(z.length, L);
    for (var j = [], ie = I; ie < L; ) {
      var he = z[ie], Y = null, ae = he > 239 ? 4 : he > 223 ? 3 : he > 191 ? 2 : 1;
      if (ie + ae <= L) {
        var de, ge, ye, F;
        switch (ae) {
          case 1:
            he < 128 && (Y = he);
            break;
          case 2:
            de = z[ie + 1], (de & 192) === 128 && (F = (he & 31) << 6 | de & 63, F > 127 && (Y = F));
            break;
          case 3:
            de = z[ie + 1], ge = z[ie + 2], (de & 192) === 128 && (ge & 192) === 128 && (F = (he & 15) << 12 | (de & 63) << 6 | ge & 63, F > 2047 && (F < 55296 || F > 57343) && (Y = F));
            break;
          case 4:
            de = z[ie + 1], ge = z[ie + 2], ye = z[ie + 3], (de & 192) === 128 && (ge & 192) === 128 && (ye & 192) === 128 && (F = (he & 15) << 18 | (de & 63) << 12 | (ge & 63) << 6 | ye & 63, F > 65535 && F < 1114112 && (Y = F));
        }
      }
      Y === null ? (Y = 65533, ae = 1) : Y > 65535 && (Y -= 65536, j.push(Y >>> 10 & 1023 | 55296), Y = 56320 | Y & 1023), j.push(Y), ie += ae;
    }
    return y(j);
  }
  var c = 4096;
  function y(z) {
    var I = z.length;
    if (I <= c)
      return String.fromCharCode.apply(String, z);
    for (var L = "", j = 0; j < I; )
      L += String.fromCharCode.apply(
        String,
        z.slice(j, j += c)
      );
    return L;
  }
  function x(z, I, L) {
    var j = "";
    L = Math.min(z.length, L);
    for (var ie = I; ie < L; ++ie)
      j += String.fromCharCode(z[ie] & 127);
    return j;
  }
  function b(z, I, L) {
    var j = "";
    L = Math.min(z.length, L);
    for (var ie = I; ie < L; ++ie)
      j += String.fromCharCode(z[ie]);
    return j;
  }
  function h(z, I, L) {
    var j = z.length;
    (!I || I < 0) && (I = 0), (!L || L < 0 || L > j) && (L = j);
    for (var ie = "", he = I; he < L; ++he)
      ie += pe[z[he]];
    return ie;
  }
  function d(z, I, L) {
    for (var j = z.slice(I, L), ie = "", he = 0; he < j.length - 1; he += 2)
      ie += String.fromCharCode(j[he] + j[he + 1] * 256);
    return ie;
  }
  f.prototype.slice = function(I, L) {
    var j = this.length;
    I = ~~I, L = L === void 0 ? j : ~~L, I < 0 ? (I += j, I < 0 && (I = 0)) : I > j && (I = j), L < 0 ? (L += j, L < 0 && (L = 0)) : L > j && (L = j), L < I && (L = I);
    var ie = this.subarray(I, L);
    return Object.setPrototypeOf(ie, f.prototype), ie;
  };
  function w(z, I, L) {
    if (z % 1 !== 0 || z < 0)
      throw new RangeError("offset is not uint");
    if (z + I > L)
      throw new RangeError("Trying to access beyond buffer length");
  }
  f.prototype.readUintLE = f.prototype.readUIntLE = function(I, L, j) {
    I = I >>> 0, L = L >>> 0, j || w(I, L, this.length);
    for (var ie = this[I], he = 1, Y = 0; ++Y < L && (he *= 256); )
      ie += this[I + Y] * he;
    return ie;
  }, f.prototype.readUintBE = f.prototype.readUIntBE = function(I, L, j) {
    I = I >>> 0, L = L >>> 0, j || w(I, L, this.length);
    for (var ie = this[I + --L], he = 1; L > 0 && (he *= 256); )
      ie += this[I + --L] * he;
    return ie;
  }, f.prototype.readUint8 = f.prototype.readUInt8 = function(I, L) {
    return I = I >>> 0, L || w(I, 1, this.length), this[I];
  }, f.prototype.readUint16LE = f.prototype.readUInt16LE = function(I, L) {
    return I = I >>> 0, L || w(I, 2, this.length), this[I] | this[I + 1] << 8;
  }, f.prototype.readUint16BE = f.prototype.readUInt16BE = function(I, L) {
    return I = I >>> 0, L || w(I, 2, this.length), this[I] << 8 | this[I + 1];
  }, f.prototype.readUint32LE = f.prototype.readUInt32LE = function(I, L) {
    return I = I >>> 0, L || w(I, 4, this.length), (this[I] | this[I + 1] << 8 | this[I + 2] << 16) + this[I + 3] * 16777216;
  }, f.prototype.readUint32BE = f.prototype.readUInt32BE = function(I, L) {
    return I = I >>> 0, L || w(I, 4, this.length), this[I] * 16777216 + (this[I + 1] << 16 | this[I + 2] << 8 | this[I + 3]);
  }, f.prototype.readIntLE = function(I, L, j) {
    I = I >>> 0, L = L >>> 0, j || w(I, L, this.length);
    for (var ie = this[I], he = 1, Y = 0; ++Y < L && (he *= 256); )
      ie += this[I + Y] * he;
    return he *= 128, ie >= he && (ie -= Math.pow(2, 8 * L)), ie;
  }, f.prototype.readIntBE = function(I, L, j) {
    I = I >>> 0, L = L >>> 0, j || w(I, L, this.length);
    for (var ie = L, he = 1, Y = this[I + --ie]; ie > 0 && (he *= 256); )
      Y += this[I + --ie] * he;
    return he *= 128, Y >= he && (Y -= Math.pow(2, 8 * L)), Y;
  }, f.prototype.readInt8 = function(I, L) {
    return I = I >>> 0, L || w(I, 1, this.length), this[I] & 128 ? (255 - this[I] + 1) * -1 : this[I];
  }, f.prototype.readInt16LE = function(I, L) {
    I = I >>> 0, L || w(I, 2, this.length);
    var j = this[I] | this[I + 1] << 8;
    return j & 32768 ? j | 4294901760 : j;
  }, f.prototype.readInt16BE = function(I, L) {
    I = I >>> 0, L || w(I, 2, this.length);
    var j = this[I + 1] | this[I] << 8;
    return j & 32768 ? j | 4294901760 : j;
  }, f.prototype.readInt32LE = function(I, L) {
    return I = I >>> 0, L || w(I, 4, this.length), this[I] | this[I + 1] << 8 | this[I + 2] << 16 | this[I + 3] << 24;
  }, f.prototype.readInt32BE = function(I, L) {
    return I = I >>> 0, L || w(I, 4, this.length), this[I] << 24 | this[I + 1] << 16 | this[I + 2] << 8 | this[I + 3];
  }, f.prototype.readFloatLE = function(I, L) {
    return I = I >>> 0, L || w(I, 4, this.length), r.read(this, I, !0, 23, 4);
  }, f.prototype.readFloatBE = function(I, L) {
    return I = I >>> 0, L || w(I, 4, this.length), r.read(this, I, !1, 23, 4);
  }, f.prototype.readDoubleLE = function(I, L) {
    return I = I >>> 0, L || w(I, 8, this.length), r.read(this, I, !0, 52, 8);
  }, f.prototype.readDoubleBE = function(I, L) {
    return I = I >>> 0, L || w(I, 8, this.length), r.read(this, I, !1, 52, 8);
  };
  function p(z, I, L, j, ie, he) {
    if (!f.isBuffer(z))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (I > ie || I < he)
      throw new RangeError('"value" argument is out of bounds');
    if (L + j > z.length)
      throw new RangeError("Index out of range");
  }
  f.prototype.writeUintLE = f.prototype.writeUIntLE = function(I, L, j, ie) {
    if (I = +I, L = L >>> 0, j = j >>> 0, !ie) {
      var he = Math.pow(2, 8 * j) - 1;
      p(this, I, L, j, he, 0);
    }
    var Y = 1, ae = 0;
    for (this[L] = I & 255; ++ae < j && (Y *= 256); )
      this[L + ae] = I / Y & 255;
    return L + j;
  }, f.prototype.writeUintBE = f.prototype.writeUIntBE = function(I, L, j, ie) {
    if (I = +I, L = L >>> 0, j = j >>> 0, !ie) {
      var he = Math.pow(2, 8 * j) - 1;
      p(this, I, L, j, he, 0);
    }
    var Y = j - 1, ae = 1;
    for (this[L + Y] = I & 255; --Y >= 0 && (ae *= 256); )
      this[L + Y] = I / ae & 255;
    return L + j;
  }, f.prototype.writeUint8 = f.prototype.writeUInt8 = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 1, 255, 0), this[L] = I & 255, L + 1;
  }, f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 2, 65535, 0), this[L] = I & 255, this[L + 1] = I >>> 8, L + 2;
  }, f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 2, 65535, 0), this[L] = I >>> 8, this[L + 1] = I & 255, L + 2;
  }, f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 4, 4294967295, 0), this[L + 3] = I >>> 24, this[L + 2] = I >>> 16, this[L + 1] = I >>> 8, this[L] = I & 255, L + 4;
  }, f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 4, 4294967295, 0), this[L] = I >>> 24, this[L + 1] = I >>> 16, this[L + 2] = I >>> 8, this[L + 3] = I & 255, L + 4;
  }, f.prototype.writeIntLE = function(I, L, j, ie) {
    if (I = +I, L = L >>> 0, !ie) {
      var he = Math.pow(2, 8 * j - 1);
      p(this, I, L, j, he - 1, -he);
    }
    var Y = 0, ae = 1, de = 0;
    for (this[L] = I & 255; ++Y < j && (ae *= 256); )
      I < 0 && de === 0 && this[L + Y - 1] !== 0 && (de = 1), this[L + Y] = (I / ae >> 0) - de & 255;
    return L + j;
  }, f.prototype.writeIntBE = function(I, L, j, ie) {
    if (I = +I, L = L >>> 0, !ie) {
      var he = Math.pow(2, 8 * j - 1);
      p(this, I, L, j, he - 1, -he);
    }
    var Y = j - 1, ae = 1, de = 0;
    for (this[L + Y] = I & 255; --Y >= 0 && (ae *= 256); )
      I < 0 && de === 0 && this[L + Y + 1] !== 0 && (de = 1), this[L + Y] = (I / ae >> 0) - de & 255;
    return L + j;
  }, f.prototype.writeInt8 = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 1, 127, -128), I < 0 && (I = 255 + I + 1), this[L] = I & 255, L + 1;
  }, f.prototype.writeInt16LE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 2, 32767, -32768), this[L] = I & 255, this[L + 1] = I >>> 8, L + 2;
  }, f.prototype.writeInt16BE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 2, 32767, -32768), this[L] = I >>> 8, this[L + 1] = I & 255, L + 2;
  }, f.prototype.writeInt32LE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 4, 2147483647, -2147483648), this[L] = I & 255, this[L + 1] = I >>> 8, this[L + 2] = I >>> 16, this[L + 3] = I >>> 24, L + 4;
  }, f.prototype.writeInt32BE = function(I, L, j) {
    return I = +I, L = L >>> 0, j || p(this, I, L, 4, 2147483647, -2147483648), I < 0 && (I = 4294967295 + I + 1), this[L] = I >>> 24, this[L + 1] = I >>> 16, this[L + 2] = I >>> 8, this[L + 3] = I & 255, L + 4;
  };
  function S(z, I, L, j, ie, he) {
    if (L + j > z.length)
      throw new RangeError("Index out of range");
    if (L < 0)
      throw new RangeError("Index out of range");
  }
  function G(z, I, L, j, ie) {
    return I = +I, L = L >>> 0, ie || S(z, I, L, 4), r.write(z, I, L, j, 23, 4), L + 4;
  }
  f.prototype.writeFloatLE = function(I, L, j) {
    return G(this, I, L, !0, j);
  }, f.prototype.writeFloatBE = function(I, L, j) {
    return G(this, I, L, !1, j);
  };
  function B(z, I, L, j, ie) {
    return I = +I, L = L >>> 0, ie || S(z, I, L, 8), r.write(z, I, L, j, 52, 8), L + 8;
  }
  f.prototype.writeDoubleLE = function(I, L, j) {
    return B(this, I, L, !0, j);
  }, f.prototype.writeDoubleBE = function(I, L, j) {
    return B(this, I, L, !1, j);
  }, f.prototype.copy = function(I, L, j, ie) {
    if (!f.isBuffer(I))
      throw new TypeError("argument should be a Buffer");
    if (j || (j = 0), !ie && ie !== 0 && (ie = this.length), L >= I.length && (L = I.length), L || (L = 0), ie > 0 && ie < j && (ie = j), ie === j || I.length === 0 || this.length === 0)
      return 0;
    if (L < 0)
      throw new RangeError("targetStart out of bounds");
    if (j < 0 || j >= this.length)
      throw new RangeError("Index out of range");
    if (ie < 0)
      throw new RangeError("sourceEnd out of bounds");
    ie > this.length && (ie = this.length), I.length - L < ie - j && (ie = I.length - L + j);
    var he = ie - j;
    return this === I && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(L, j, ie) : Uint8Array.prototype.set.call(
      I,
      this.subarray(j, ie),
      L
    ), he;
  }, f.prototype.fill = function(I, L, j, ie) {
    if (typeof I == "string") {
      if (typeof L == "string" ? (ie = L, L = 0, j = this.length) : typeof j == "string" && (ie = j, j = this.length), ie !== void 0 && typeof ie != "string")
        throw new TypeError("encoding must be a string");
      if (typeof ie == "string" && !f.isEncoding(ie))
        throw new TypeError("Unknown encoding: " + ie);
      if (I.length === 1) {
        var he = I.charCodeAt(0);
        (ie === "utf8" && he < 128 || ie === "latin1") && (I = he);
      }
    } else
      typeof I == "number" ? I = I & 255 : typeof I == "boolean" && (I = Number(I));
    if (L < 0 || this.length < L || this.length < j)
      throw new RangeError("Out of range index");
    if (j <= L)
      return this;
    L = L >>> 0, j = j === void 0 ? this.length : j >>> 0, I || (I = 0);
    var Y;
    if (typeof I == "number")
      for (Y = L; Y < j; ++Y)
        this[Y] = I;
    else {
      var ae = f.isBuffer(I) ? I : f.from(I, ie), de = ae.length;
      if (de === 0)
        throw new TypeError('The value "' + I + '" is invalid for argument "value"');
      for (Y = 0; Y < j - L; ++Y)
        this[Y + L] = ae[Y % de];
    }
    return this;
  };
  var R = /[^+/0-9A-Za-z-_]/g;
  function N(z) {
    if (z = z.split("=")[0], z = z.trim().replace(R, ""), z.length < 2)
      return "";
    for (; z.length % 4 !== 0; )
      z = z + "=";
    return z;
  }
  function H(z, I) {
    I = I || 1 / 0;
    for (var L, j = z.length, ie = null, he = [], Y = 0; Y < j; ++Y) {
      if (L = z.charCodeAt(Y), L > 55295 && L < 57344) {
        if (!ie) {
          if (L > 56319) {
            (I -= 3) > -1 && he.push(239, 191, 189);
            continue;
          } else if (Y + 1 === j) {
            (I -= 3) > -1 && he.push(239, 191, 189);
            continue;
          }
          ie = L;
          continue;
        }
        if (L < 56320) {
          (I -= 3) > -1 && he.push(239, 191, 189), ie = L;
          continue;
        }
        L = (ie - 55296 << 10 | L - 56320) + 65536;
      } else
        ie && (I -= 3) > -1 && he.push(239, 191, 189);
      if (ie = null, L < 128) {
        if ((I -= 1) < 0)
          break;
        he.push(L);
      } else if (L < 2048) {
        if ((I -= 2) < 0)
          break;
        he.push(
          L >> 6 | 192,
          L & 63 | 128
        );
      } else if (L < 65536) {
        if ((I -= 3) < 0)
          break;
        he.push(
          L >> 12 | 224,
          L >> 6 & 63 | 128,
          L & 63 | 128
        );
      } else if (L < 1114112) {
        if ((I -= 4) < 0)
          break;
        he.push(
          L >> 18 | 240,
          L >> 12 & 63 | 128,
          L >> 6 & 63 | 128,
          L & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return he;
  }
  function Z(z) {
    for (var I = [], L = 0; L < z.length; ++L)
      I.push(z.charCodeAt(L) & 255);
    return I;
  }
  function oe(z, I) {
    for (var L, j, ie, he = [], Y = 0; Y < z.length && !((I -= 2) < 0); ++Y)
      L = z.charCodeAt(Y), j = L >> 8, ie = L % 256, he.push(ie), he.push(j);
    return he;
  }
  function $(z) {
    return t.toByteArray(N(z));
  }
  function A(z, I, L, j) {
    for (var ie = 0; ie < j && !(ie + L >= I.length || ie >= z.length); ++ie)
      I[ie + L] = z[ie];
    return ie;
  }
  function X(z, I) {
    return z instanceof I || z != null && z.constructor != null && z.constructor.name != null && z.constructor.name === I.name;
  }
  function te(z) {
    return z !== z;
  }
  var pe = function() {
    for (var z = "0123456789abcdef", I = new Array(256), L = 0; L < 16; ++L)
      for (var j = L * 16, ie = 0; ie < 16; ++ie)
        I[j + ie] = z[L] + z[ie];
    return I;
  }();
})(Au);
const nP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Au
}, [Au]), iP = /* @__PURE__ */ Q(nP);
var mp = mi, X2 = rP, aP = iP.Buffer;
function nc(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
nc.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = X2.generateECPolynomial(this.degree);
};
nc.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var r = mp.alloc(this.degree), n = aP.concat([t, r], t.length + this.degree), a = X2.mod(n, this.genPoly), i = this.degree - a.length;
  if (i > 0) {
    var s = mp.alloc(this.degree);
    return a.copy(s, i), s;
  }
  return a;
};
var wp = nc;
const oP = /* @__PURE__ */ ee({
  __proto__: null,
  default: wp
}, [wp]), fP = /* @__PURE__ */ Q(oP);
var $u = {}, Ru = {}, Bu = {}, sP = Bu.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
const uP = /* @__PURE__ */ ee({
  __proto__: null,
  isValid: sP,
  default: Bu
}, [Bu]), Q2 = /* @__PURE__ */ Q(uP);
var $r = {}, eg = "[0-9]+", cP = "[A-Z $%*+\\-./:]+", ta = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
ta = ta.replace(/u/g, "\\u");
var lP = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ta + `)(?:.|[\r
]))+`, hP = $r.KANJI = new RegExp(ta, "g"), dP = $r.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), pP = $r.BYTE = new RegExp(lP, "g"), vP = $r.NUMERIC = new RegExp(eg, "g"), yP = $r.ALPHANUMERIC = new RegExp(cP, "g"), gP = new RegExp("^" + ta + "$"), bP = new RegExp("^" + eg + "$"), _P = new RegExp("^[A-Z0-9 $%*+\\-./:]+$"), mP = $r.testKanji = function(t) {
  return gP.test(t);
}, wP = $r.testNumeric = function(t) {
  return bP.test(t);
}, xP = $r.testAlphanumeric = function(t) {
  return _P.test(t);
};
const MP = /* @__PURE__ */ ee({
  __proto__: null,
  KANJI: hP,
  BYTE_KANJI: dP,
  BYTE: pP,
  NUMERIC: vP,
  ALPHANUMERIC: yP,
  testKanji: mP,
  testNumeric: wP,
  testAlphanumeric: xP,
  default: $r
}, [$r]), tg = /* @__PURE__ */ Q(MP);
(function(e) {
  var t = Q2, r = tg;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(i, s) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!t.isValid(s))
      throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
  }, e.getBestModeForData = function(i) {
    return r.testNumeric(i) ? e.NUMERIC : r.testAlphanumeric(i) ? e.ALPHANUMERIC : r.testKanji(i) ? e.KANJI : e.BYTE;
  }, e.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function n(a) {
    if (typeof a != "string")
      throw new Error("Param is not a string");
    var i = a.toLowerCase();
    switch (i) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + a);
    }
  }
  e.from = function(i, s) {
    if (e.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return s;
    }
  };
})(Ru);
const EP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ru
}, [Ru]), In = /* @__PURE__ */ Q(EP);
(function(e) {
  var t = Tn, r = J2, n = rc, a = In, i = Q2, s = Q0, f = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, v = t.getBCHDigit(f);
  function m(C, M, k) {
    for (var q = 1; q <= 40; q++)
      if (M <= e.getCapacity(q, k, C))
        return q;
  }
  function _(C, M) {
    return a.getCharCountIndicator(C, M) + 4;
  }
  function O(C, M) {
    var k = 0;
    return C.forEach(function(q) {
      var D = _(q.mode, M);
      k += D + q.getBitsLength();
    }), k;
  }
  function P(C, M) {
    for (var k = 1; k <= 40; k++) {
      var q = O(C, k);
      if (q <= e.getCapacity(k, M, a.MIXED))
        return k;
    }
  }
  e.from = function(M, k) {
    return i.isValid(M) ? parseInt(M, 10) : k;
  }, e.getCapacity = function(M, k, q) {
    if (!i.isValid(M))
      throw new Error("Invalid QR Code version");
    typeof q > "u" && (q = a.BYTE);
    var D = t.getSymbolTotalCodewords(M), U = r.getTotalCodewordsCount(M, k), K = (D - U) * 8;
    if (q === a.MIXED)
      return K;
    var J = K - _(q, M);
    switch (q) {
      case a.NUMERIC:
        return Math.floor(J / 10 * 3);
      case a.ALPHANUMERIC:
        return Math.floor(J / 11 * 2);
      case a.KANJI:
        return Math.floor(J / 13);
      case a.BYTE:
      default:
        return Math.floor(J / 8);
    }
  }, e.getBestVersionForData = function(M, k) {
    var q, D = n.from(k, n.M);
    if (s(M)) {
      if (M.length > 1)
        return P(M, D);
      if (M.length === 0)
        return 1;
      q = M[0];
    } else
      q = M;
    return m(q.mode, q.getLength(), D);
  }, e.getEncodedBits = function(M) {
    if (!i.isValid(M) || M < 7)
      throw new Error("Invalid QR Code version");
    for (var k = M << 12; t.getBCHDigit(k) - v >= 0; )
      k ^= f << t.getBCHDigit(k) - v;
    return M << 12 | k;
  };
})($u);
const SP = /* @__PURE__ */ ee({
  __proto__: null,
  default: $u
}, [$u]), AP = /* @__PURE__ */ Q(SP);
var Tu = {}, Iu = Tn, rg = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, $P = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, xp = Iu.getBCHDigit(rg), RP = Tu.getEncodedBits = function(t, r) {
  for (var n = t.bit << 3 | r, a = n << 10; Iu.getBCHDigit(a) - xp >= 0; )
    a ^= rg << Iu.getBCHDigit(a) - xp;
  return (n << 10 | a) ^ $P;
};
const BP = /* @__PURE__ */ ee({
  __proto__: null,
  getEncodedBits: RP,
  default: Tu
}, [Tu]), TP = /* @__PURE__ */ Q(BP);
var Pu = {}, IP = In;
function ii(e) {
  this.mode = IP.NUMERIC, this.data = e.toString();
}
ii.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
ii.prototype.getLength = function() {
  return this.data.length;
};
ii.prototype.getBitsLength = function() {
  return ii.getBitsLength(this.data.length);
};
ii.prototype.write = function(t) {
  var r, n, a;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    n = this.data.substr(r, 3), a = parseInt(n, 10), t.put(a, 10);
  var i = this.data.length - r;
  i > 0 && (n = this.data.substr(r), a = parseInt(n, 10), t.put(a, i * 3 + 1));
};
var Mp = ii;
const PP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Mp
}, [Mp]), OP = /* @__PURE__ */ Q(PP);
var LP = In, Ps = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function ai(e) {
  this.mode = LP.ALPHANUMERIC, this.data = e;
}
ai.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
ai.prototype.getLength = function() {
  return this.data.length;
};
ai.prototype.getBitsLength = function() {
  return ai.getBitsLength(this.data.length);
};
ai.prototype.write = function(t) {
  var r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    var n = Ps.indexOf(this.data[r]) * 45;
    n += Ps.indexOf(this.data[r + 1]), t.put(n, 11);
  }
  this.data.length % 2 && t.put(Ps.indexOf(this.data[r]), 6);
};
var Ep = ai;
const CP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ep
}, [Ep]), kP = /* @__PURE__ */ Q(CP);
var NP = mi, qP = In;
function oi(e) {
  this.mode = qP.BYTE, this.data = NP.from(e);
}
oi.getBitsLength = function(t) {
  return t * 8;
};
oi.prototype.getLength = function() {
  return this.data.length;
};
oi.prototype.getBitsLength = function() {
  return oi.getBitsLength(this.data.length);
};
oi.prototype.write = function(e) {
  for (var t = 0, r = this.data.length; t < r; t++)
    e.put(this.data[t], 8);
};
var Sp = oi;
const FP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Sp
}, [Sp]), UP = /* @__PURE__ */ Q(FP);
var DP = In, jP = Tn;
function fi(e) {
  this.mode = DP.KANJI, this.data = e;
}
fi.getBitsLength = function(t) {
  return t * 13;
};
fi.prototype.getLength = function() {
  return this.data.length;
};
fi.prototype.getBitsLength = function() {
  return fi.getBitsLength(this.data.length);
};
fi.prototype.write = function(e) {
  var t;
  for (t = 0; t < this.data.length; t++) {
    var r = jP.toSJIS(this.data[t]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), e.put(r, 13);
  }
};
var Ap = fi;
const HP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ap
}, [Ap]), zP = /* @__PURE__ */ Q(HP);
var ic = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(r, n, a) {
      var i = {}, s = {};
      s[n] = 0;
      var f = t.PriorityQueue.make();
      f.push(n, 0);
      for (var v, m, _, O, P, C, M, k, q; !f.empty(); ) {
        v = f.pop(), m = v.value, O = v.cost, P = r[m] || {};
        for (_ in P)
          P.hasOwnProperty(_) && (C = P[_], M = O + C, k = s[_], q = typeof s[_] > "u", (q || k > M) && (s[_] = M, f.push(_, M), i[_] = m));
      }
      if (typeof a < "u" && typeof s[a] > "u") {
        var D = ["Could not find a path from ", n, " to ", a, "."].join("");
        throw new Error(D);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(r, n) {
      for (var a = [], i = n; i; )
        a.push(i), r[i], i = r[i];
      return a.reverse(), a;
    },
    find_path: function(r, n, a) {
      var i = t.single_source_shortest_paths(r, n, a);
      return t.extract_shortest_path_from_predecessor_list(
        i,
        a
      );
    },
    PriorityQueue: {
      make: function(r) {
        var n = t.PriorityQueue, a = {}, i;
        r = r || {};
        for (i in n)
          n.hasOwnProperty(i) && (a[i] = n[i]);
        return a.queue = [], a.sorter = r.sorter || n.default_sorter, a;
      },
      default_sorter: function(r, n) {
        return r.cost - n.cost;
      },
      push: function(r, n) {
        var a = { value: r, cost: n };
        this.queue.push(a), this.queue.sort(this.sorter);
      },
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = t;
})(ic);
const KP = ic.exports, WP = /* @__PURE__ */ ee({
  __proto__: null,
  default: KP
}, [ic.exports]), GP = /* @__PURE__ */ Q(WP);
(function(e) {
  var t = In, r = OP, n = kP, a = UP, i = zP, s = tg, f = Tn, v = GP;
  function m(D) {
    return unescape(encodeURIComponent(D)).length;
  }
  function _(D, U, K) {
    for (var J = [], re; (re = D.exec(K)) !== null; )
      J.push({
        data: re[0],
        index: re.index,
        mode: U,
        length: re[0].length
      });
    return J;
  }
  function O(D) {
    var U = _(s.NUMERIC, t.NUMERIC, D), K = _(s.ALPHANUMERIC, t.ALPHANUMERIC, D), J, re;
    f.isKanjiModeEnabled() ? (J = _(s.BYTE, t.BYTE, D), re = _(s.KANJI, t.KANJI, D)) : (J = _(s.BYTE_KANJI, t.BYTE, D), re = []);
    var ue = U.concat(K, J, re);
    return ue.sort(function(ve, se) {
      return ve.index - se.index;
    }).map(function(ve) {
      return {
        data: ve.data,
        mode: ve.mode,
        length: ve.length
      };
    });
  }
  function P(D, U) {
    switch (U) {
      case t.NUMERIC:
        return r.getBitsLength(D);
      case t.ALPHANUMERIC:
        return n.getBitsLength(D);
      case t.KANJI:
        return i.getBitsLength(D);
      case t.BYTE:
        return a.getBitsLength(D);
    }
  }
  function C(D) {
    return D.reduce(function(U, K) {
      var J = U.length - 1 >= 0 ? U[U.length - 1] : null;
      return J && J.mode === K.mode ? (U[U.length - 1].data += K.data, U) : (U.push(K), U);
    }, []);
  }
  function M(D) {
    for (var U = [], K = 0; K < D.length; K++) {
      var J = D[K];
      switch (J.mode) {
        case t.NUMERIC:
          U.push([
            J,
            { data: J.data, mode: t.ALPHANUMERIC, length: J.length },
            { data: J.data, mode: t.BYTE, length: J.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          U.push([
            J,
            { data: J.data, mode: t.BYTE, length: J.length }
          ]);
          break;
        case t.KANJI:
          U.push([
            J,
            { data: J.data, mode: t.BYTE, length: m(J.data) }
          ]);
          break;
        case t.BYTE:
          U.push([
            { data: J.data, mode: t.BYTE, length: m(J.data) }
          ]);
      }
    }
    return U;
  }
  function k(D, U) {
    for (var K = {}, J = { start: {} }, re = ["start"], ue = 0; ue < D.length; ue++) {
      for (var ve = D[ue], se = [], le = 0; le < ve.length; le++) {
        var V = ve[le], g = "" + ue + le;
        se.push(g), K[g] = { node: V, lastCount: 0 }, J[g] = {};
        for (var l = 0; l < re.length; l++) {
          var u = re[l];
          K[u] && K[u].node.mode === V.mode ? (J[u][g] = P(K[u].lastCount + V.length, V.mode) - P(K[u].lastCount, V.mode), K[u].lastCount += V.length) : (K[u] && (K[u].lastCount = V.length), J[u][g] = P(V.length, V.mode) + 4 + t.getCharCountIndicator(V.mode, U));
        }
      }
      re = se;
    }
    for (l = 0; l < re.length; l++)
      J[re[l]].end = 0;
    return { map: J, table: K };
  }
  function q(D, U) {
    var K, J = t.getBestModeForData(D);
    if (K = t.from(U, J), K !== t.BYTE && K.bit < J.bit)
      throw new Error('"' + D + '" cannot be encoded with mode ' + t.toString(K) + `.
 Suggested mode is: ` + t.toString(J));
    switch (K === t.KANJI && !f.isKanjiModeEnabled() && (K = t.BYTE), K) {
      case t.NUMERIC:
        return new r(D);
      case t.ALPHANUMERIC:
        return new n(D);
      case t.KANJI:
        return new i(D);
      case t.BYTE:
        return new a(D);
    }
  }
  e.fromArray = function(U) {
    return U.reduce(function(K, J) {
      return typeof J == "string" ? K.push(q(J, null)) : J.data && K.push(q(J.data, J.mode)), K;
    }, []);
  }, e.fromString = function(U, K) {
    for (var J = O(U, f.isKanjiModeEnabled()), re = M(J), ue = k(re, K), ve = v.find_path(ue.map, "start", "end"), se = [], le = 1; le < ve.length - 1; le++)
      se.push(ue.table[ve[le]].node);
    return e.fromArray(C(se));
  }, e.rawSplit = function(U) {
    return e.fromArray(
      O(U, f.isKanjiModeEnabled())
    );
  };
})(Pu);
const VP = /* @__PURE__ */ ee({
  __proto__: null,
  default: Pu
}, [Pu]), ZP = /* @__PURE__ */ Q(VP);
var $p = mi, gf = Tn, Os = rc, JP = kI, YP = qI, XP = UI, QP = zI, Ou = WI, Lu = J2, eO = fP, Io = AP, tO = TP, rO = In, Ls = ZP, nO = Q0;
function iO(e, t) {
  for (var r = e.size, n = QP.getPositions(t), a = 0; a < n.length; a++)
    for (var i = n[a][0], s = n[a][1], f = -1; f <= 7; f++)
      if (!(i + f <= -1 || r <= i + f))
        for (var v = -1; v <= 7; v++)
          s + v <= -1 || r <= s + v || (f >= 0 && f <= 6 && (v === 0 || v === 6) || v >= 0 && v <= 6 && (f === 0 || f === 6) || f >= 2 && f <= 4 && v >= 2 && v <= 4 ? e.set(i + f, s + v, !0, !0) : e.set(i + f, s + v, !1, !0));
}
function aO(e) {
  for (var t = e.size, r = 8; r < t - 8; r++) {
    var n = r % 2 === 0;
    e.set(r, 6, n, !0), e.set(6, r, n, !0);
  }
}
function oO(e, t) {
  for (var r = XP.getPositions(t), n = 0; n < r.length; n++)
    for (var a = r[n][0], i = r[n][1], s = -2; s <= 2; s++)
      for (var f = -2; f <= 2; f++)
        s === -2 || s === 2 || f === -2 || f === 2 || s === 0 && f === 0 ? e.set(a + s, i + f, !0, !0) : e.set(a + s, i + f, !1, !0);
}
function fO(e, t) {
  for (var r = e.size, n = Io.getEncodedBits(t), a, i, s, f = 0; f < 18; f++)
    a = Math.floor(f / 3), i = f % 3 + r - 8 - 3, s = (n >> f & 1) === 1, e.set(a, i, s, !0), e.set(i, a, s, !0);
}
function Cs(e, t, r) {
  var n = e.size, a = tO.getEncodedBits(t, r), i, s;
  for (i = 0; i < 15; i++)
    s = (a >> i & 1) === 1, i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(n - 15 + i, 8, s, !0), i < 8 ? e.set(8, n - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
  e.set(n - 8, 8, 1, !0);
}
function sO(e, t) {
  for (var r = e.size, n = -1, a = r - 1, i = 7, s = 0, f = r - 1; f > 0; f -= 2)
    for (f === 6 && f--; ; ) {
      for (var v = 0; v < 2; v++)
        if (!e.isReserved(a, f - v)) {
          var m = !1;
          s < t.length && (m = (t[s] >>> i & 1) === 1), e.set(a, f - v, m), i--, i === -1 && (s++, i = 7);
        }
      if (a += n, a < 0 || r <= a) {
        a -= n, n = -n;
        break;
      }
    }
}
function uO(e, t, r) {
  var n = new JP();
  r.forEach(function(m) {
    n.put(m.mode.bit, 4), n.put(m.getLength(), rO.getCharCountIndicator(m.mode, e)), m.write(n);
  });
  var a = gf.getSymbolTotalCodewords(e), i = Lu.getTotalCodewordsCount(e, t), s = (a - i) * 8;
  for (n.getLengthInBits() + 4 <= s && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  for (var f = (s - n.getLengthInBits()) / 8, v = 0; v < f; v++)
    n.put(v % 2 ? 17 : 236, 8);
  return cO(n, e, t);
}
function cO(e, t, r) {
  for (var n = gf.getSymbolTotalCodewords(t), a = Lu.getTotalCodewordsCount(t, r), i = n - a, s = Lu.getBlocksCount(t, r), f = n % s, v = s - f, m = Math.floor(n / s), _ = Math.floor(i / s), O = _ + 1, P = m - _, C = new eO(P), M = 0, k = new Array(s), q = new Array(s), D = 0, U = $p.from(e.buffer), K = 0; K < s; K++) {
    var J = K < v ? _ : O;
    k[K] = U.slice(M, M + J), q[K] = C.encode(k[K]), M += J, D = Math.max(D, J);
  }
  var re = $p.alloc(n), ue = 0, ve, se;
  for (ve = 0; ve < D; ve++)
    for (se = 0; se < s; se++)
      ve < k[se].length && (re[ue++] = k[se][ve]);
  for (ve = 0; ve < P; ve++)
    for (se = 0; se < s; se++)
      re[ue++] = q[se][ve];
  return re;
}
function lO(e, t, r, n) {
  var a;
  if (nO(e))
    a = Ls.fromArray(e);
  else if (typeof e == "string") {
    var i = t;
    if (!i) {
      var s = Ls.rawSplit(e);
      i = Io.getBestVersionForData(
        s,
        r
      );
    }
    a = Ls.fromString(e, i || 40);
  } else
    throw new Error("Invalid data");
  var f = Io.getBestVersionForData(
    a,
    r
  );
  if (!f)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = f;
  else if (t < f)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + f + `.
`
    );
  var v = uO(t, r, a), m = gf.getSymbolSize(t), _ = new YP(m);
  return iO(_, t), aO(_), oO(_, t), Cs(_, r, 0), t >= 7 && fO(_, t), sO(_, v), isNaN(n) && (n = Ou.getBestMask(
    _,
    Cs.bind(null, _, r)
  )), Ou.applyMask(n, _), Cs(_, r, n), {
    modules: _,
    version: t,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: a
  };
}
var hO = _u.create = function(t, r) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  var n = Os.M, a, i;
  return typeof r < "u" && (n = Os.from(r.errorCorrectionLevel, Os.M), a = Io.from(r.version), i = Ou.from(r.maskPattern), r.toSJISFunc && gf.setToSJISFunction(r.toSJISFunc)), lO(t, a, n, i);
};
const dO = /* @__PURE__ */ ee({
  __proto__: null,
  create: hO,
  default: _u
}, [_u]), pO = /* @__PURE__ */ Q(dO);
var Cu = {}, ku = {};
(function(e) {
  function t(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    var n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
      return [i, i];
    }))), n.length === 6 && n.push("F", "F");
    var a = parseInt(n.join(""), 16);
    return {
      r: a >> 24 & 255,
      g: a >> 16 & 255,
      b: a >> 8 & 255,
      a: a & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  e.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    var a = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : s,
      margin: a,
      color: {
        dark: t(n.color.dark || "#000000ff"),
        light: t(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, e.getScale = function(n, a) {
    return a.width && a.width >= n + a.margin * 2 ? a.width / (n + a.margin * 2) : a.scale;
  }, e.getImageWidth = function(n, a) {
    var i = e.getScale(n, a);
    return Math.floor((n + a.margin * 2) * i);
  }, e.qrToImageData = function(n, a, i) {
    for (var s = a.modules.size, f = a.modules.data, v = e.getScale(s, i), m = Math.floor((s + i.margin * 2) * v), _ = i.margin * v, O = [i.color.light, i.color.dark], P = 0; P < m; P++)
      for (var C = 0; C < m; C++) {
        var M = (P * m + C) * 4, k = i.color.light;
        if (P >= _ && C >= _ && P < m - _ && C < m - _) {
          var q = Math.floor((P - _) / v), D = Math.floor((C - _) / v);
          k = O[f[q * s + D] ? 1 : 0];
        }
        n[M++] = k.r, n[M++] = k.g, n[M++] = k.b, n[M] = k.a;
      }
  };
})(ku);
const vO = /* @__PURE__ */ ee({
  __proto__: null,
  default: ku
}, [ku]), ng = /* @__PURE__ */ Q(vO);
(function(e) {
  var t = ng;
  function r(a, i, s) {
    a.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(i, s, f) {
    var v = f, m = s;
    typeof v > "u" && (!s || !s.getContext) && (v = s, s = void 0), s || (m = n()), v = t.getOptions(v);
    var _ = t.getImageWidth(i.modules.size, v), O = m.getContext("2d"), P = O.createImageData(_, _);
    return t.qrToImageData(P.data, i, v), r(O, m, _), O.putImageData(P, 0, 0), m;
  }, e.renderToDataURL = function(i, s, f) {
    var v = f;
    typeof v > "u" && (!s || !s.getContext) && (v = s, s = void 0), v || (v = {});
    var m = e.render(i, s, v), _ = v.type || "image/png", O = v.rendererOpts || {};
    return m.toDataURL(_, O.quality);
  };
})(Cu);
const yO = /* @__PURE__ */ ee({
  __proto__: null,
  default: Cu
}, [Cu]), gO = /* @__PURE__ */ Q(yO);
var Nu = {}, bO = ng;
function Rp(e, t) {
  var r = e.a / 255, n = t + '="' + e.hex + '"';
  return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function ks(e, t, r) {
  var n = e + t;
  return typeof r < "u" && (n += " " + r), n;
}
function _O(e, t, r) {
  for (var n = "", a = 0, i = !1, s = 0, f = 0; f < e.length; f++) {
    var v = Math.floor(f % t), m = Math.floor(f / t);
    !v && !i && (i = !0), e[f] ? (s++, f > 0 && v > 0 && e[f - 1] || (n += i ? ks("M", v + r, 0.5 + m + r) : ks("m", a, 0), a = 0, i = !1), v + 1 < t && e[f + 1] || (n += ks("h", s), s = 0)) : a++;
  }
  return n;
}
var mO = Nu.render = function(t, r, n) {
  var a = bO.getOptions(r), i = t.modules.size, s = t.modules.data, f = i + a.margin * 2, v = a.color.light.a ? "<path " + Rp(a.color.light, "fill") + ' d="M0 0h' + f + "v" + f + 'H0z"/>' : "", m = "<path " + Rp(a.color.dark, "stroke") + ' d="' + _O(s, i, a.margin) + '"/>', _ = 'viewBox="0 0 ' + f + " " + f + '"', O = a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "", P = '<svg xmlns="http://www.w3.org/2000/svg" ' + O + _ + ' shape-rendering="crispEdges">' + v + m + `</svg>
`;
  return typeof n == "function" && n(null, P), P;
};
const wO = /* @__PURE__ */ ee({
  __proto__: null,
  render: mO,
  default: Nu
}, [Nu]), xO = /* @__PURE__ */ Q(wO);
var MO = lI, qu = pO, ig = gO, EO = xO;
function ac(e, t, r, n, a) {
  var i = [].slice.call(arguments, 1), s = i.length, f = typeof i[s - 1] == "function";
  if (!f && !MO())
    throw new Error("Callback required as last argument");
  if (f) {
    if (s < 2)
      throw new Error("Too few arguments provided");
    s === 2 ? (a = r, r = t, t = n = void 0) : s === 3 && (t.getContext && typeof a > "u" ? (a = n, n = void 0) : (a = n, n = r, r = t, t = void 0));
  } else {
    if (s < 1)
      throw new Error("Too few arguments provided");
    return s === 1 ? (r = t, t = n = void 0) : s === 2 && !t.getContext && (n = r, r = t, t = void 0), new Promise(function(m, _) {
      try {
        var O = qu.create(r, n);
        m(e(O, t, n));
      } catch (P) {
        _(P);
      }
    });
  }
  try {
    var v = qu.create(r, n);
    a(null, e(v, t, n));
  } catch (m) {
    a(m);
  }
}
var SO = ri.create = qu.create, AO = ri.toCanvas = ac.bind(null, ig.render), $O = ri.toDataURL = ac.bind(null, ig.renderToDataURL), RO = ri.toString = ac.bind(null, function(e, t, r) {
  return EO.render(e, r);
});
const BO = /* @__PURE__ */ ee({
  __proto__: null,
  create: SO,
  toCanvas: AO,
  toDataURL: $O,
  toString: RO,
  default: ri
}, [ri]), TO = /* @__PURE__ */ Q(BO);
var Bp = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
    r.push(e.getRangeAt(n));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return e.removeAllRanges(), function() {
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(a) {
      e.addRange(a);
    }), t && t.focus();
  };
};
const IO = /* @__PURE__ */ ee({
  __proto__: null,
  default: Bp
}, [Bp]), PO = /* @__PURE__ */ Q(IO);
var OO = PO, Tp = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, LO = "Copy to clipboard: #{key}, Enter";
function CO(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function kO(e, t) {
  var r, n, a, i, s, f, v = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    a = OO(), i = document.createRange(), s = document.getSelection(), f = document.createElement("span"), f.textContent = e, f.ariaHidden = "true", f.style.all = "unset", f.style.position = "fixed", f.style.top = 0, f.style.clip = "rect(0, 0, 0, 0)", f.style.whiteSpace = "pre", f.style.webkitUserSelect = "text", f.style.MozUserSelect = "text", f.style.msUserSelect = "text", f.style.userSelect = "text", f.addEventListener("copy", function(_) {
      if (_.stopPropagation(), t.format)
        if (_.preventDefault(), typeof _.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var O = Tp[t.format] || Tp.default;
          window.clipboardData.setData(O, e);
        } else
          _.clipboardData.clearData(), _.clipboardData.setData(t.format, e);
      t.onCopy && (_.preventDefault(), t.onCopy(_.clipboardData));
    }), document.body.appendChild(f), i.selectNodeContents(f), s.addRange(i);
    var m = document.execCommand("copy");
    if (!m)
      throw new Error("copy command was unsuccessful");
    v = !0;
  } catch (_) {
    r && console.error("unable to copy using execCommand: ", _), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), v = !0;
    } catch (O) {
      r && console.error("unable to copy using clipboardData: ", O), r && console.error("falling back to prompt"), n = CO("message" in t ? t.message : LO), window.prompt(n, e);
    }
  } finally {
    s && (typeof s.removeRange == "function" ? s.removeRange(i) : s.removeAllRanges()), f && document.body.removeChild(f), a();
  }
  return v;
}
var Ip = kO;
const NO = /* @__PURE__ */ ee({
  __proto__: null,
  default: Ip
}, [Ip]), qO = /* @__PURE__ */ Q(NO);
var Fe, Oi, oc, ag, Pp, Li = {}, og = [], FO = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function ln(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function fg(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function UO(e, t, r) {
  var n, a = arguments, i = {};
  for (n in t)
    n !== "key" && n !== "ref" && (i[n] = t[n]);
  if (arguments.length > 3)
    for (r = [r], n = 3; n < arguments.length; n++)
      r.push(a[n]);
  if (r != null && (i.children = r), typeof e == "function" && e.defaultProps != null)
    for (n in e.defaultProps)
      i[n] === void 0 && (i[n] = e.defaultProps[n]);
  return Fu(e, i, t && t.key, t && t.ref, null);
}
function Fu(e, t, r, n, a) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: a };
  return a == null && (i.__v = i), Fe.vnode && Fe.vnode(i), i;
}
function sg(e) {
  return e.children;
}
function Cr(e, t) {
  this.props = e, this.context = t;
}
function ra(e, t) {
  if (t == null)
    return e.__ ? ra(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? ra(e) : null;
}
function ug(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return ug(e);
  }
}
function Ns(e) {
  (!e.__d && (e.__d = !0) && Oi.push(e) && !oc++ || Pp !== Fe.debounceRendering) && ((Pp = Fe.debounceRendering) || ag)(DO);
}
function DO() {
  for (var e; oc = Oi.length; )
    e = Oi.sort(function(t, r) {
      return t.__v.__b - r.__v.__b;
    }), Oi = [], e.some(function(t) {
      var r, n, a, i, s, f, v;
      t.__d && (f = (s = (r = t).__v).__e, (v = r.__P) && (n = [], (a = ln({}, s)).__v = a, i = lg(v, s, a, r.__n, v.ownerSVGElement !== void 0, null, n, f == null ? ra(s) : f), HO(n, s), i != f && ug(s)));
    });
}
function cg(e, t, r, n, a, i, s, f, v) {
  var m, _, O, P, C, M, k, q = r && r.__k || og, D = q.length;
  if (f == Li && (f = i != null ? i[0] : D ? ra(r, 0) : null), m = 0, t.__k = bf(t.__k, function(U) {
    if (U != null) {
      if (U.__ = t, U.__b = t.__b + 1, (O = q[m]) === null || O && U.key == O.key && U.type === O.type)
        q[m] = void 0;
      else
        for (_ = 0; _ < D; _++) {
          if ((O = q[_]) && U.key == O.key && U.type === O.type) {
            q[_] = void 0;
            break;
          }
          O = null;
        }
      if (P = lg(e, U, O = O || Li, n, a, i, s, f, v), (_ = U.ref) && O.ref != _ && (k || (k = []), O.ref && k.push(O.ref, null, U), k.push(_, U.__c || P, U)), P != null) {
        var K;
        if (M == null && (M = P), U.__d !== void 0)
          K = U.__d, U.__d = void 0;
        else if (i == O || P != f || P.parentNode == null) {
          e:
            if (f == null || f.parentNode !== e)
              e.appendChild(P), K = null;
            else {
              for (C = f, _ = 0; (C = C.nextSibling) && _ < D; _ += 2)
                if (C == P)
                  break e;
              e.insertBefore(P, f), K = f;
            }
          t.type == "option" && (e.value = "");
        }
        f = K !== void 0 ? K : P.nextSibling, typeof t.type == "function" && (t.__d = f);
      } else
        f && O.__e == f && f.parentNode != e && (f = ra(O));
    }
    return m++, U;
  }), t.__e = M, i != null && typeof t.type != "function")
    for (m = i.length; m--; )
      i[m] != null && fg(i[m]);
  for (m = D; m--; )
    q[m] != null && dg(q[m], q[m]);
  if (k)
    for (m = 0; m < k.length; m++)
      hg(k[m], k[++m], k[++m]);
}
function bf(e, t, r) {
  if (r == null && (r = []), e == null || typeof e == "boolean")
    t && r.push(t(null));
  else if (Array.isArray(e))
    for (var n = 0; n < e.length; n++)
      bf(e[n], t, r);
  else
    r.push(t ? t(typeof e == "string" || typeof e == "number" ? Fu(null, e, null, null, e) : e.__e != null || e.__c != null ? Fu(e.type, e.props, e.key, null, e.__v) : e) : e);
  return r;
}
function jO(e, t, r, n, a) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in t || Po(e, i, null, r[i], n);
  for (i in t)
    a && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === t[i] || Po(e, i, t[i], r[i], n);
}
function Op(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : e[t] = typeof r == "number" && FO.test(t) === !1 ? r + "px" : r == null ? "" : r;
}
function Po(e, t, r, n, a) {
  var i, s, f, v, m;
  if (a ? t === "className" && (t = "class") : t === "class" && (t = "className"), t === "style")
    if (i = e.style, typeof r == "string")
      i.cssText = r;
    else {
      if (typeof n == "string" && (i.cssText = "", n = null), n)
        for (v in n)
          r && v in r || Op(i, v, "");
      if (r)
        for (m in r)
          n && r[m] === n[m] || Op(i, m, r[m]);
    }
  else
    t[0] === "o" && t[1] === "n" ? (s = t !== (t = t.replace(/Capture$/, "")), f = t.toLowerCase(), t = (f in e ? f : t).slice(2), r ? (n || e.addEventListener(t, Lp, s), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, Lp, s)) : t !== "list" && t !== "tagName" && t !== "form" && t !== "type" && t !== "size" && !a && t in e ? e[t] = r == null ? "" : r : typeof r != "function" && t !== "dangerouslySetInnerHTML" && (t !== (t = t.replace(/^xlink:?/, "")) ? r == null || r === !1 ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function Lp(e) {
  this.l[e.type](Fe.event ? Fe.event(e) : e);
}
function lg(e, t, r, n, a, i, s, f, v) {
  var m, _, O, P, C, M, k, q, D, U, K = t.type;
  if (t.constructor !== void 0)
    return null;
  (m = Fe.__b) && m(t);
  try {
    e:
      if (typeof K == "function") {
        if (q = t.props, D = (m = K.contextType) && n[m.__c], U = m ? D ? D.props.value : m.__ : n, r.__c ? k = (_ = t.__c = r.__c).__ = _.__E : ("prototype" in K && K.prototype.render ? t.__c = _ = new K(q, U) : (t.__c = _ = new Cr(q, U), _.constructor = K, _.render = KO), D && D.sub(_), _.props = q, _.state || (_.state = {}), _.context = U, _.__n = n, O = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), K.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = ln({}, _.__s)), ln(_.__s, K.getDerivedStateFromProps(q, _.__s))), P = _.props, C = _.state, O)
          K.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (K.getDerivedStateFromProps == null && q !== P && _.componentWillReceiveProps != null && _.componentWillReceiveProps(q, U), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(q, _.__s, U) === !1 || t.__v === r.__v && !_.__) {
            for (_.props = q, _.state = _.__s, t.__v !== r.__v && (_.__d = !1), _.__v = t, t.__e = r.__e, t.__k = r.__k, _.__h.length && s.push(_), m = 0; m < t.__k.length; m++)
              t.__k[m] && (t.__k[m].__ = t);
            break e;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(q, _.__s, U), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(P, C, M);
          });
        }
        _.context = U, _.props = q, _.state = _.__s, (m = Fe.__r) && m(t), _.__d = !1, _.__v = t, _.__P = e, m = _.render(_.props, _.state, _.context), t.__k = m != null && m.type == sg && m.key == null ? m.props.children : Array.isArray(m) ? m : [m], _.getChildContext != null && (n = ln(ln({}, n), _.getChildContext())), O || _.getSnapshotBeforeUpdate == null || (M = _.getSnapshotBeforeUpdate(P, C)), cg(e, t, r, n, a, i, s, f, v), _.base = t.__e, _.__h.length && s.push(_), k && (_.__E = _.__ = null), _.__e = !1;
      } else
        i == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = zO(r.__e, t, r, n, a, i, s, v);
    (m = Fe.diffed) && m(t);
  } catch (J) {
    t.__v = null, Fe.__e(J, t, r);
  }
  return t.__e;
}
function HO(e, t) {
  Fe.__c && Fe.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      Fe.__e(n, r.__v);
    }
  });
}
function zO(e, t, r, n, a, i, s, f) {
  var v, m, _, O, P, C = r.props, M = t.props;
  if (a = t.type === "svg" || a, i != null) {
    for (v = 0; v < i.length; v++)
      if ((m = i[v]) != null && ((t.type === null ? m.nodeType === 3 : m.localName === t.type) || e == m)) {
        e = m, i[v] = null;
        break;
      }
  }
  if (e == null) {
    if (t.type === null)
      return document.createTextNode(M);
    e = a ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, M.is && { is: M.is }), i = null, f = !1;
  }
  if (t.type === null)
    C !== M && e.data != M && (e.data = M);
  else {
    if (i != null && (i = og.slice.call(e.childNodes)), _ = (C = r.props || Li).dangerouslySetInnerHTML, O = M.dangerouslySetInnerHTML, !f) {
      if (C === Li)
        for (C = {}, P = 0; P < e.attributes.length; P++)
          C[e.attributes[P].name] = e.attributes[P].value;
      (O || _) && (O && _ && O.__html == _.__html || (e.innerHTML = O && O.__html || ""));
    }
    jO(e, M, C, a, f), O ? t.__k = [] : (t.__k = t.props.children, cg(e, t, r, n, t.type !== "foreignObject" && a, i, s, Li, f)), f || ("value" in M && (v = M.value) !== void 0 && v !== e.value && Po(e, "value", v, C.value, !1), "checked" in M && (v = M.checked) !== void 0 && v !== e.checked && Po(e, "checked", v, C.checked, !1));
  }
  return e;
}
function hg(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    Fe.__e(n, r);
  }
}
function dg(e, t, r) {
  var n, a, i;
  if (Fe.unmount && Fe.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || hg(n, null, t)), r || typeof e.type == "function" || (r = (a = e.__e) != null), e.__e = e.__d = void 0, (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        Fe.__e(s, t);
      }
    n.base = n.__P = null;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && dg(n[i], t, r);
  a != null && fg(a);
}
function KO(e, t, r) {
  return this.constructor(e, r);
}
Fe = { __e: function(e, t) {
  for (var r, n; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(e))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(e)), n)
          return Ns(r.__E = r);
      } catch (a) {
        e = a;
      }
  throw e;
} }, Cr.prototype.setState = function(e, t) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = ln({}, this.state), typeof e == "function" && (e = e(r, this.props)), e && ln(r, e), e != null && this.__v && (t && this.__h.push(t), Ns(this));
}, Cr.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ns(this));
}, Cr.prototype.render = sg, Oi = [], oc = 0, ag = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
var Ta, Cp, Uu = [], kp = Fe.__r, Np = Fe.diffed, qp = Fe.__c, Fp = Fe.unmount;
function WO() {
  Uu.some(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(Du), e.__H.__h.forEach(ju), e.__H.__h = [];
      } catch (t) {
        return e.__H.__h = [], Fe.__e(t, e.__v), !0;
      }
  }), Uu = [];
}
function Du(e) {
  e.t && e.t();
}
function ju(e) {
  var t = e.__();
  typeof t == "function" && (e.t = t);
}
Fe.__r = function(e) {
  kp && kp(e), (Ta = e.__c).__H && (Ta.__H.__h.forEach(Du), Ta.__H.__h.forEach(ju), Ta.__H.__h = []);
}, Fe.diffed = function(e) {
  Np && Np(e);
  var t = e.__c;
  if (t) {
    var r = t.__H;
    r && r.__h.length && (Uu.push(t) !== 1 && Cp === Fe.requestAnimationFrame || ((Cp = Fe.requestAnimationFrame) || function(n) {
      var a, i = function() {
        clearTimeout(s), cancelAnimationFrame(a), setTimeout(n);
      }, s = setTimeout(i, 100);
      typeof window < "u" && (a = requestAnimationFrame(i));
    })(WO));
  }
}, Fe.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Du), r.__h = r.__h.filter(function(n) {
        return !n.__ || ju(n);
      });
    } catch (n) {
      t.some(function(a) {
        a.__h && (a.__h = []);
      }), t = [], Fe.__e(n, r.__v);
    }
  }), qp && qp(e, t);
}, Fe.unmount = function(e) {
  Fp && Fp(e);
  var t = e.__c;
  if (t) {
    var r = t.__H;
    if (r)
      try {
        r.__.forEach(function(n) {
          return n.t && n.t();
        });
      } catch (n) {
        Fe.__e(n, t.__v);
      }
  }
};
function GO(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function Up(e, t) {
  for (var r in e)
    if (r !== "__source" && !(r in t))
      return !0;
  for (var n in t)
    if (n !== "__source" && e[n] !== t[n])
      return !0;
  return !1;
}
(function(e) {
  var t, r;
  function n(a) {
    var i;
    return (i = e.call(this, a) || this).isPureReactComponent = !0, i;
  }
  return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.shouldComponentUpdate = function(a, i) {
    return Up(this.props, a) || Up(this.state, i);
  }, n;
})(Cr);
var Dp = Fe.__b;
Fe.__b = function(e) {
  e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), Dp && Dp(e);
};
var VO = Fe.__e;
function pg(e) {
  return e && ((e = GO({}, e)).__c = null, e.__k = e.__k && e.__k.map(pg)), e;
}
function jp() {
  this.__u = 0, this.o = null, this.__b = null;
}
function vg(e) {
  var t = e.__.__c;
  return t && t.u && t.u(e);
}
function Ia() {
  this.i = null, this.l = null;
}
Fe.__e = function(e, t, r) {
  if (e.then) {
    for (var n, a = t; a = a.__; )
      if ((n = a.__c) && n.__c)
        return n.__c(e, t.__c);
  }
  VO(e, t, r);
}, (jp.prototype = new Cr()).__c = function(e, t) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(t);
  var n = vg(r.__v), a = !1, i = function() {
    a || (a = !0, n ? n(s) : s());
  };
  t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
    i(), t.__c && t.__c();
  };
  var s = function() {
    var f;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); f = r.o.pop(); )
        f.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), e.then(i, i);
}, jp.prototype.render = function(e, t) {
  return this.__b && (this.__v.__k[0] = pg(this.__b), this.__b = null), [UO(Cr, null, t.u ? null : e.children), t.u && e.fallback];
};
var Hp = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    for (r = e.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.i = r = r[2];
    }
};
(Ia.prototype = new Cr()).u = function(e) {
  var t = this, r = vg(t.__v), n = t.l.get(e);
  return n[0]++, function(a) {
    var i = function() {
      t.props.revealOrder ? (n.push(a), Hp(t, e, n)) : a();
    };
    r ? r(i) : i();
  };
}, Ia.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = bf(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, Ia.prototype.componentDidUpdate = Ia.prototype.componentDidMount = function() {
  var e = this;
  e.l.forEach(function(t, r) {
    Hp(e, r, t);
  });
};
var zp = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
Cr.prototype.isReactComponent = {};
var ZO = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Kp = Fe.event;
function qs(e, t) {
  e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, { configurable: !1, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(r) {
    this["UNSAFE_" + t] = r;
  } });
}
Fe.event = function(e) {
  Kp && (e = Kp(e)), e.persist = function() {
  };
  var t = !1, r = !1, n = e.stopPropagation;
  e.stopPropagation = function() {
    n.call(e), t = !0;
  };
  var a = e.preventDefault;
  return e.preventDefault = function() {
    a.call(e), r = !0;
  }, e.isPropagationStopped = function() {
    return t;
  }, e.isDefaultPrevented = function() {
    return r;
  }, e.nativeEvent = e;
};
var Wp = { configurable: !0, get: function() {
  return this.class;
} }, Gp = Fe.vnode;
Fe.vnode = function(e) {
  e.$$typeof = ZO;
  var t = e.type, r = e.props;
  if (t) {
    if (r.class != r.className && (Wp.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", Wp)), typeof t != "function") {
      var n, a, i;
      for (i in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && t === "select" && (bf(r.children).forEach(function(s) {
        r.value.indexOf(s.props.value) != -1 && (s.props.selected = !0);
      }), delete r.value), r)
        if (n = zp.test(i))
          break;
      if (n)
        for (i in a = e.props = {}, r)
          a[zp.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = r[i];
    }
    (function(s) {
      var f = e.type, v = e.props;
      if (v && typeof f == "string") {
        var m = {};
        for (var _ in v)
          /^on(Ani|Tra|Tou)/.test(_) && (v[_.toLowerCase()] = v[_], delete v[_]), m[_.toLowerCase()] = _;
        if (m.ondoubleclick && (v.ondblclick = v[m.ondoubleclick], delete v[m.ondoubleclick]), m.onbeforeinput && (v.onbeforeinput = v[m.onbeforeinput], delete v[m.onbeforeinput]), m.onchange && (f === "textarea" || f.toLowerCase() === "input" && !/^fil|che|ra/i.test(v.type))) {
          var O = m.oninput || "oninput";
          v[O] || (v[O] = v[m.onchange], delete v[m.onchange]);
        }
      }
    })(), typeof t == "function" && !t.m && t.prototype && (qs(t.prototype, "componentWillMount"), qs(t.prototype, "componentWillReceiveProps"), qs(t.prototype, "componentWillUpdate"), t.m = !0);
  }
  Gp && Gp(e);
};
function yg(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
yg(TO);
yg(qO);
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var JO = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(v, m, _) {
    this.fn = v, this.context = m, this.once = _ || !1;
  }
  function i(v, m, _, O, P) {
    if (typeof _ != "function")
      throw new TypeError("The listener must be a function");
    var C = new a(_, O || v, P), M = r ? r + m : m;
    return v._events[M] ? v._events[M].fn ? v._events[M] = [v._events[M], C] : v._events[M].push(C) : (v._events[M] = C, v._eventsCount++), v;
  }
  function s(v, m) {
    --v._eventsCount === 0 ? v._events = new n() : delete v._events[m];
  }
  function f() {
    this._events = new n(), this._eventsCount = 0;
  }
  f.prototype.eventNames = function() {
    var m = [], _, O;
    if (this._eventsCount === 0)
      return m;
    for (O in _ = this._events)
      t.call(_, O) && m.push(r ? O.slice(1) : O);
    return Object.getOwnPropertySymbols ? m.concat(Object.getOwnPropertySymbols(_)) : m;
  }, f.prototype.listeners = function(m) {
    var _ = r ? r + m : m, O = this._events[_];
    if (!O)
      return [];
    if (O.fn)
      return [O.fn];
    for (var P = 0, C = O.length, M = new Array(C); P < C; P++)
      M[P] = O[P].fn;
    return M;
  }, f.prototype.listenerCount = function(m) {
    var _ = r ? r + m : m, O = this._events[_];
    return O ? O.fn ? 1 : O.length : 0;
  }, f.prototype.emit = function(m, _, O, P, C, M) {
    var k = r ? r + m : m;
    if (!this._events[k])
      return !1;
    var q = this._events[k], D = arguments.length, U, K;
    if (q.fn) {
      switch (q.once && this.removeListener(m, q.fn, void 0, !0), D) {
        case 1:
          return q.fn.call(q.context), !0;
        case 2:
          return q.fn.call(q.context, _), !0;
        case 3:
          return q.fn.call(q.context, _, O), !0;
        case 4:
          return q.fn.call(q.context, _, O, P), !0;
        case 5:
          return q.fn.call(q.context, _, O, P, C), !0;
        case 6:
          return q.fn.call(q.context, _, O, P, C, M), !0;
      }
      for (K = 1, U = new Array(D - 1); K < D; K++)
        U[K - 1] = arguments[K];
      q.fn.apply(q.context, U);
    } else {
      var J = q.length, re;
      for (K = 0; K < J; K++)
        switch (q[K].once && this.removeListener(m, q[K].fn, void 0, !0), D) {
          case 1:
            q[K].fn.call(q[K].context);
            break;
          case 2:
            q[K].fn.call(q[K].context, _);
            break;
          case 3:
            q[K].fn.call(q[K].context, _, O);
            break;
          case 4:
            q[K].fn.call(q[K].context, _, O, P);
            break;
          default:
            if (!U)
              for (re = 1, U = new Array(D - 1); re < D; re++)
                U[re - 1] = arguments[re];
            q[K].fn.apply(q[K].context, U);
        }
    }
    return !0;
  }, f.prototype.on = function(m, _, O) {
    return i(this, m, _, O, !1);
  }, f.prototype.once = function(m, _, O) {
    return i(this, m, _, O, !0);
  }, f.prototype.removeListener = function(m, _, O, P) {
    var C = r ? r + m : m;
    if (!this._events[C])
      return this;
    if (!_)
      return s(this, C), this;
    var M = this._events[C];
    if (M.fn)
      M.fn === _ && (!P || M.once) && (!O || M.context === O) && s(this, C);
    else {
      for (var k = 0, q = [], D = M.length; k < D; k++)
        (M[k].fn !== _ || P && !M[k].once || O && M[k].context !== O) && q.push(M[k]);
      q.length ? this._events[C] = q.length === 1 ? q[0] : q : s(this, C);
    }
    return this;
  }, f.prototype.removeAllListeners = function(m) {
    var _;
    return m ? (_ = r ? r + m : m, this._events[_] && s(this, _)) : (this._events = new n(), this._eventsCount = 0), this;
  }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = r, f.EventEmitter = f, e.exports = f;
})(JO);
var gg = {}, Oo = {}, Mn = {}, Lo = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(r) {
    var n = t && !t.nodeType && t, a = e && !e.nodeType && e, i = typeof Ie == "object" && Ie;
    (i.global === i || i.window === i || i.self === i) && (r = i);
    var s, f = 2147483647, v = 36, m = 1, _ = 26, O = 38, P = 700, C = 72, M = 128, k = "-", q = /^xn--/, D = /[^\x20-\x7E]/, U = /[\x2E\u3002\uFF0E\uFF61]/g, K = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, J = v - m, re = Math.floor, ue = String.fromCharCode, ve;
    function se(d) {
      throw RangeError(K[d]);
    }
    function le(d, w) {
      for (var p = d.length, S = []; p--; )
        S[p] = w(d[p]);
      return S;
    }
    function V(d, w) {
      var p = d.split("@"), S = "";
      p.length > 1 && (S = p[0] + "@", d = p[1]), d = d.replace(U, ".");
      var G = d.split("."), B = le(G, w).join(".");
      return S + B;
    }
    function g(d) {
      for (var w = [], p = 0, S = d.length, G, B; p < S; )
        G = d.charCodeAt(p++), G >= 55296 && G <= 56319 && p < S ? (B = d.charCodeAt(p++), (B & 64512) == 56320 ? w.push(((G & 1023) << 10) + (B & 1023) + 65536) : (w.push(G), p--)) : w.push(G);
      return w;
    }
    function l(d) {
      return le(d, function(w) {
        var p = "";
        return w > 65535 && (w -= 65536, p += ue(w >>> 10 & 1023 | 55296), w = 56320 | w & 1023), p += ue(w), p;
      }).join("");
    }
    function u(d) {
      return d - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : v;
    }
    function o(d, w) {
      return d + 22 + 75 * (d < 26) - ((w != 0) << 5);
    }
    function c(d, w, p) {
      var S = 0;
      for (d = p ? re(d / P) : d >> 1, d += re(d / w); d > J * _ >> 1; S += v)
        d = re(d / J);
      return re(S + (J + 1) * d / (d + O));
    }
    function y(d) {
      var w = [], p = d.length, S, G = 0, B = M, R = C, N, H, Z, oe, $, A, X, te, pe;
      for (N = d.lastIndexOf(k), N < 0 && (N = 0), H = 0; H < N; ++H)
        d.charCodeAt(H) >= 128 && se("not-basic"), w.push(d.charCodeAt(H));
      for (Z = N > 0 ? N + 1 : 0; Z < p; ) {
        for (oe = G, $ = 1, A = v; Z >= p && se("invalid-input"), X = u(d.charCodeAt(Z++)), (X >= v || X > re((f - G) / $)) && se("overflow"), G += X * $, te = A <= R ? m : A >= R + _ ? _ : A - R, !(X < te); A += v)
          pe = v - te, $ > re(f / pe) && se("overflow"), $ *= pe;
        S = w.length + 1, R = c(G - oe, S, oe == 0), re(G / S) > f - B && se("overflow"), B += re(G / S), G %= S, w.splice(G++, 0, B);
      }
      return l(w);
    }
    function x(d) {
      var w, p, S, G, B, R, N, H, Z, oe, $, A = [], X, te, pe, z;
      for (d = g(d), X = d.length, w = M, p = 0, B = C, R = 0; R < X; ++R)
        $ = d[R], $ < 128 && A.push(ue($));
      for (S = G = A.length, G && A.push(k); S < X; ) {
        for (N = f, R = 0; R < X; ++R)
          $ = d[R], $ >= w && $ < N && (N = $);
        for (te = S + 1, N - w > re((f - p) / te) && se("overflow"), p += (N - w) * te, w = N, R = 0; R < X; ++R)
          if ($ = d[R], $ < w && ++p > f && se("overflow"), $ == w) {
            for (H = p, Z = v; oe = Z <= B ? m : Z >= B + _ ? _ : Z - B, !(H < oe); Z += v)
              z = H - oe, pe = v - oe, A.push(
                ue(o(oe + z % pe, 0))
              ), H = re(z / pe);
            A.push(ue(o(H, 0))), B = c(p, te, S == G), p = 0, ++S;
          }
        ++p, ++w;
      }
      return A.join("");
    }
    function b(d) {
      return V(d, function(w) {
        return q.test(w) ? y(w.slice(4).toLowerCase()) : w;
      });
    }
    function h(d) {
      return V(d, function(w) {
        return D.test(w) ? "xn--" + x(w) : w;
      });
    }
    if (s = {
      version: "1.3.2",
      ucs2: {
        decode: g,
        encode: l
      },
      decode: y,
      encode: x,
      toASCII: h,
      toUnicode: b
    }, n && a)
      if (e.exports == n)
        a.exports = s;
      else
        for (ve in s)
          s.hasOwnProperty(ve) && (n[ve] = s[ve]);
    else
      r.punycode = s;
  })(Ie);
})(Lo, Lo.exports);
const YO = Lo.exports, XO = /* @__PURE__ */ ee({
  __proto__: null,
  default: YO
}, [Lo.exports]), QO = /* @__PURE__ */ Q(XO);
var Vp = {
  isString: function(e) {
    return typeof e == "string";
  },
  isObject: function(e) {
    return typeof e == "object" && e !== null;
  },
  isNull: function(e) {
    return e === null;
  },
  isNullOrUndefined: function(e) {
    return e == null;
  }
};
const eL = /* @__PURE__ */ ee({
  __proto__: null,
  default: Vp
}, [Vp]), tL = /* @__PURE__ */ Q(eL);
var si = {};
function rL(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var Zp = function(e, t, r, n) {
  t = t || "&", r = r || "=";
  var a = {};
  if (typeof e != "string" || e.length === 0)
    return a;
  var i = /\+/g;
  e = e.split(t);
  var s = 1e3;
  n && typeof n.maxKeys == "number" && (s = n.maxKeys);
  var f = e.length;
  s > 0 && f > s && (f = s);
  for (var v = 0; v < f; ++v) {
    var m = e[v].replace(i, "%20"), _ = m.indexOf(r), O, P, C, M;
    _ >= 0 ? (O = m.substr(0, _), P = m.substr(_ + 1)) : (O = m, P = ""), C = decodeURIComponent(O), M = decodeURIComponent(P), rL(a, C) ? Array.isArray(a[C]) ? a[C].push(M) : a[C] = [a[C], M] : a[C] = M;
  }
  return a;
};
const nL = /* @__PURE__ */ ee({
  __proto__: null,
  default: Zp
}, [Zp]), iL = /* @__PURE__ */ Q(nL);
var Ii = function(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "true" : "false";
    case "number":
      return isFinite(e) ? e : "";
    default:
      return "";
  }
}, Jp = function(e, t, r, n) {
  return t = t || "&", r = r || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(a) {
    var i = encodeURIComponent(Ii(a)) + r;
    return Array.isArray(e[a]) ? e[a].map(function(s) {
      return i + encodeURIComponent(Ii(s));
    }).join(t) : i + encodeURIComponent(Ii(e[a]));
  }).join(t) : n ? encodeURIComponent(Ii(n)) + r + encodeURIComponent(Ii(e)) : "";
};
const aL = /* @__PURE__ */ ee({
  __proto__: null,
  default: Jp
}, [Jp]), oL = /* @__PURE__ */ Q(aL);
var bg, _g, fL = si.decode = _g = si.parse = iL, sL = si.encode = bg = si.stringify = oL;
const uL = /* @__PURE__ */ ee({
  __proto__: null,
  decode: fL,
  get parse() {
    return _g;
  },
  encode: sL,
  get stringify() {
    return bg;
  },
  default: si
}, [si]), cL = /* @__PURE__ */ Q(uL);
var lL = QO, gr = tL, hL = Mn.parse = _a, dL = Mn.resolve = AL, pL = Mn.resolveObject = $L, vL = Mn.format = SL, yL = Mn.Url = Xt;
function Xt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var gL = /^([a-z0-9.+-]+:)/i, bL = /:[0-9]*$/, _L = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, mL = ["<", ">", '"', "`", " ", "\r", `
`, "	"], wL = ["{", "}", "|", "\\", "^", "`"].concat(mL), Hu = ["'"].concat(wL), Yp = ["%", "/", "?", ";", "#"].concat(Hu), Xp = ["/", "?", "#"], xL = 255, Qp = /^[+a-z0-9A-Z_-]{0,63}$/, ML = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, EL = {
  javascript: !0,
  "javascript:": !0
}, zu = {
  javascript: !0,
  "javascript:": !0
}, zn = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
}, Ku = cL;
function _a(e, t, r) {
  if (e && gr.isObject(e) && e instanceof Xt)
    return e;
  var n = new Xt();
  return n.parse(e, t, r), n;
}
Xt.prototype.parse = function(e, t, r) {
  if (!gr.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var n = e.indexOf("?"), a = n !== -1 && n < e.indexOf("#") ? "?" : "#", i = e.split(a), s = /\\/g;
  i[0] = i[0].replace(s, "/"), e = i.join(a);
  var f = e;
  if (f = f.trim(), !r && e.split("#").length === 1) {
    var v = _L.exec(f);
    if (v)
      return this.path = f, this.href = f, this.pathname = v[1], v[2] ? (this.search = v[2], t ? this.query = Ku.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var m = gL.exec(f);
  if (m) {
    m = m[0];
    var _ = m.toLowerCase();
    this.protocol = _, f = f.substr(m.length);
  }
  if (r || m || f.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var O = f.substr(0, 2) === "//";
    O && !(m && zu[m]) && (f = f.substr(2), this.slashes = !0);
  }
  if (!zu[m] && (O || m && !zn[m])) {
    for (var P = -1, C = 0; C < Xp.length; C++) {
      var M = f.indexOf(Xp[C]);
      M !== -1 && (P === -1 || M < P) && (P = M);
    }
    var k, q;
    P === -1 ? q = f.lastIndexOf("@") : q = f.lastIndexOf("@", P), q !== -1 && (k = f.slice(0, q), f = f.slice(q + 1), this.auth = decodeURIComponent(k)), P = -1;
    for (var C = 0; C < Yp.length; C++) {
      var M = f.indexOf(Yp[C]);
      M !== -1 && (P === -1 || M < P) && (P = M);
    }
    P === -1 && (P = f.length), this.host = f.slice(0, P), f = f.slice(P), this.parseHost(), this.hostname = this.hostname || "";
    var D = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!D)
      for (var U = this.hostname.split(/\./), C = 0, K = U.length; C < K; C++) {
        var J = U[C];
        if (!!J && !J.match(Qp)) {
          for (var re = "", ue = 0, ve = J.length; ue < ve; ue++)
            J.charCodeAt(ue) > 127 ? re += "x" : re += J[ue];
          if (!re.match(Qp)) {
            var se = U.slice(0, C), le = U.slice(C + 1), V = J.match(ML);
            V && (se.push(V[1]), le.unshift(V[2])), le.length && (f = "/" + le.join(".") + f), this.hostname = se.join(".");
            break;
          }
        }
      }
    this.hostname.length > xL ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), D || (this.hostname = lL.toASCII(this.hostname));
    var g = this.port ? ":" + this.port : "", l = this.hostname || "";
    this.host = l + g, this.href += this.host, D && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), f[0] !== "/" && (f = "/" + f));
  }
  if (!EL[_])
    for (var C = 0, K = Hu.length; C < K; C++) {
      var u = Hu[C];
      if (f.indexOf(u) !== -1) {
        var o = encodeURIComponent(u);
        o === u && (o = escape(u)), f = f.split(u).join(o);
      }
    }
  var c = f.indexOf("#");
  c !== -1 && (this.hash = f.substr(c), f = f.slice(0, c));
  var y = f.indexOf("?");
  if (y !== -1 ? (this.search = f.substr(y), this.query = f.substr(y + 1), t && (this.query = Ku.parse(this.query)), f = f.slice(0, y)) : t && (this.search = "", this.query = {}), f && (this.pathname = f), zn[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var g = this.pathname || "", x = this.search || "";
    this.path = g + x;
  }
  return this.href = this.format(), this;
};
function SL(e) {
  return gr.isString(e) && (e = _a(e)), e instanceof Xt ? e.format() : Xt.prototype.format.call(e);
}
Xt.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", a = !1, i = "";
  this.host ? a = e + this.host : this.hostname && (a = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && gr.isObject(this.query) && Object.keys(this.query).length && (i = Ku.stringify(this.query));
  var s = this.search || i && "?" + i || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || zn[t]) && a !== !1 ? (a = "//" + (a || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : a || (a = ""), n && n.charAt(0) !== "#" && (n = "#" + n), s && s.charAt(0) !== "?" && (s = "?" + s), r = r.replace(/[?#]/g, function(f) {
    return encodeURIComponent(f);
  }), s = s.replace("#", "%23"), t + a + r + s + n;
};
function AL(e, t) {
  return _a(e, !1, !0).resolve(t);
}
Xt.prototype.resolve = function(e) {
  return this.resolveObject(_a(e, !1, !0)).format();
};
function $L(e, t) {
  return e ? _a(e, !1, !0).resolveObject(t) : t;
}
Xt.prototype.resolveObject = function(e) {
  if (gr.isString(e)) {
    var t = new Xt();
    t.parse(e, !1, !0), e = t;
  }
  for (var r = new Xt(), n = Object.keys(this), a = 0; a < n.length; a++) {
    var i = n[a];
    r[i] = this[i];
  }
  if (r.hash = e.hash, e.href === "")
    return r.href = r.format(), r;
  if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), f = 0; f < s.length; f++) {
      var v = s[f];
      v !== "protocol" && (r[v] = e[v]);
    }
    return zn[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!zn[e.protocol]) {
      for (var m = Object.keys(e), _ = 0; _ < m.length; _++) {
        var O = m[_];
        r[O] = e[O];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !zu[e.protocol]) {
      for (var K = (e.pathname || "").split("/"); K.length && !(e.host = K.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), K[0] !== "" && K.unshift(""), K.length < 2 && K.unshift(""), r.pathname = K.join("/");
    } else
      r.pathname = e.pathname;
    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
      var P = r.pathname || "", C = r.search || "";
      r.path = P + C;
    }
    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
  }
  var M = r.pathname && r.pathname.charAt(0) === "/", k = e.host || e.pathname && e.pathname.charAt(0) === "/", q = k || M || r.host && e.pathname, D = q, U = r.pathname && r.pathname.split("/") || [], K = e.pathname && e.pathname.split("/") || [], J = r.protocol && !zn[r.protocol];
  if (J && (r.hostname = "", r.port = null, r.host && (U[0] === "" ? U[0] = r.host : U.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (K[0] === "" ? K[0] = e.host : K.unshift(e.host)), e.host = null), q = q && (K[0] === "" || U[0] === "")), k)
    r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, U = K;
  else if (K.length)
    U || (U = []), U.pop(), U = U.concat(K), r.search = e.search, r.query = e.query;
  else if (!gr.isNullOrUndefined(e.search)) {
    if (J) {
      r.hostname = r.host = U.shift();
      var re = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      re && (r.auth = re.shift(), r.host = r.hostname = re.shift());
    }
    return r.search = e.search, r.query = e.query, (!gr.isNull(r.pathname) || !gr.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!U.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var ue = U.slice(-1)[0], ve = (r.host || e.host || U.length > 1) && (ue === "." || ue === "..") || ue === "", se = 0, le = U.length; le >= 0; le--)
    ue = U[le], ue === "." ? U.splice(le, 1) : ue === ".." ? (U.splice(le, 1), se++) : se && (U.splice(le, 1), se--);
  if (!q && !D)
    for (; se--; se)
      U.unshift("..");
  q && U[0] !== "" && (!U[0] || U[0].charAt(0) !== "/") && U.unshift(""), ve && U.join("/").substr(-1) !== "/" && U.push("");
  var V = U[0] === "" || U[0] && U[0].charAt(0) === "/";
  if (J) {
    r.hostname = r.host = V ? "" : U.length ? U.shift() : "";
    var re = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    re && (r.auth = re.shift(), r.host = r.hostname = re.shift());
  }
  return q = q || r.host && U.length, q && !V && U.unshift(""), U.length ? r.pathname = U.join("/") : (r.pathname = null, r.path = null), (!gr.isNull(r.pathname) || !gr.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
};
Xt.prototype.parseHost = function() {
  var e = this.host, t = bL.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const RL = /* @__PURE__ */ ee({
  __proto__: null,
  parse: hL,
  resolve: dL,
  resolveObject: pL,
  format: vL,
  Url: yL,
  default: Mn
}, [Mn]), BL = /* @__PURE__ */ Q(RL);
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
var TL = function() {
  function e(t) {
    this.type = t, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  }
  return e;
}(), IL = Co.ProgressEvent = TL;
const PL = /* @__PURE__ */ ee({
  __proto__: null,
  ProgressEvent: IL,
  default: Co
}, [Co]), OL = /* @__PURE__ */ Q(PL);
var En = {}, _f = Ie && Ie.__extends || function() {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      r.hasOwnProperty(n) && (t[n] = r[n]);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(En, "__esModule", { value: !0 });
var LL = function(e) {
  _f(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error), CL = En.SecurityError = LL, kL = function(e) {
  _f(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error), NL = En.InvalidStateError = kL, qL = function(e) {
  _f(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error), FL = En.NetworkError = qL, UL = function(e) {
  _f(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error), DL = En.SyntaxError = UL;
const jL = /* @__PURE__ */ ee({
  __proto__: null,
  SecurityError: CL,
  InvalidStateError: NL,
  NetworkError: FL,
  SyntaxError: DL,
  default: En
}, [En]), HL = /* @__PURE__ */ Q(jL);
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
var zL = function() {
  function e() {
    this.listeners = {};
  }
  return e.prototype.addEventListener = function(t, r) {
    t = t.toLowerCase(), this.listeners[t] = this.listeners[t] || [], this.listeners[t].push(r.handleEvent || r);
  }, e.prototype.removeEventListener = function(t, r) {
    if (t = t.toLowerCase(), !!this.listeners[t]) {
      var n = this.listeners[t].indexOf(r.handleEvent || r);
      n < 0 || this.listeners[t].splice(n, 1);
    }
  }, e.prototype.dispatchEvent = function(t) {
    var r = t.type.toLowerCase();
    if (t.target = this, this.listeners[r])
      for (var n = 0, a = this.listeners[r]; n < a.length; n++) {
        var i = a[n];
        i.call(this, t);
      }
    var s = this["on" + r];
    return s && s.call(this, t), !0;
  }, e;
}(), KL = ko.XMLHttpRequestEventTarget = zL;
const WL = /* @__PURE__ */ ee({
  __proto__: null,
  XMLHttpRequestEventTarget: KL,
  default: ko
}, [ko]), fc = /* @__PURE__ */ Q(WL);
var No = {}, GL = Ie && Ie.__extends || function() {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      r.hasOwnProperty(n) && (t[n] = r[n]);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(No, "__esModule", { value: !0 });
var VL = fc, ZL = function(e) {
  GL(t, e);
  function t() {
    var r = e.call(this) || this;
    return r._contentType = null, r._body = null, r._reset(), r;
  }
  return t.prototype._reset = function() {
    this._contentType = null, this._body = null;
  }, t.prototype._setData = function(r) {
    if (r != null)
      if (typeof r == "string")
        r.length !== 0 && (this._contentType = "text/plain;charset=UTF-8"), this._body = new Buffer(r, "utf-8");
      else if (Buffer.isBuffer(r))
        this._body = r;
      else if (r instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), a = new Uint8Array(r), i = 0; i < r.byteLength; i++)
          n[i] = a[i];
        this._body = n;
      } else if (r.buffer && r.buffer instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), s = r.byteOffset, a = new Uint8Array(r.buffer), i = 0; i < r.byteLength; i++)
          n[i] = a[i + s];
        this._body = n;
      } else
        throw new Error("Unsupported send() data " + r);
  }, t.prototype._finalizeHeaders = function(r, n) {
    this._contentType && !n["content-type"] && (r["Content-Type"] = this._contentType), this._body && (r["Content-Length"] = this._body.length.toString());
  }, t.prototype._startUpload = function(r) {
    this._body && r.write(this._body), r.end();
  }, t;
}(VL.XMLHttpRequestEventTarget), JL = No.XMLHttpRequestUpload = ZL;
const YL = /* @__PURE__ */ ee({
  __proto__: null,
  XMLHttpRequestUpload: JL,
  default: No
}, [No]), XL = /* @__PURE__ */ Q(YL);
var Ci = {}, mg, wg, xg;
(function() {
  function e(a, i, s, f) {
    return this instanceof e ? (this.domain = a || void 0, this.path = i || "/", this.secure = !!s, this.script = !!f, this) : new e(a, i, s, f);
  }
  e.All = Object.freeze(/* @__PURE__ */ Object.create(null)), xg = Ci.CookieAccessInfo = e;
  function t(a, i, s) {
    return a instanceof t ? a : this instanceof t ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(s || "/"), this.explicit_path = !1, this.domain = i || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, a && this.parse(a, i, s), this) : new t(a, i, s);
  }
  wg = Ci.Cookie = t, t.prototype.toString = function() {
    var i = [this.name + "=" + this.value];
    return this.expiration_date !== 1 / 0 && i.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && i.push("domain=" + this.domain), this.path && i.push("path=" + this.path), this.secure && i.push("secure"), this.noscript && i.push("httponly"), i.join("; ");
  }, t.prototype.toValueString = function() {
    return this.name + "=" + this.value;
  };
  var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
  t.prototype.parse = function(i, s, f) {
    if (this instanceof t) {
      var v = i.split(";").filter(function(C) {
        return !!C;
      }), m, _ = v[0].match(/([^=]+)=([\s\S]*)/);
      if (!_) {
        console.warn("Invalid cookie header encountered. Header: '" + i + "'");
        return;
      }
      var O = _[1], P = _[2];
      if (typeof O != "string" || O.length === 0 || typeof P != "string") {
        console.warn("Unable to extract values from cookie header. Cookie: '" + i + "'");
        return;
      }
      for (this.name = O, this.value = P, m = 1; m < v.length; m += 1)
        switch (_ = v[m].match(/([^=]+)(?:=([\s\S]*))?/), O = _[1].trim().toLowerCase(), P = _[2], O) {
          case "httponly":
            this.noscript = !0;
            break;
          case "expires":
            this.expiration_date = P ? Number(Date.parse(P)) : 1 / 0;
            break;
          case "path":
            this.path = P ? P.trim() : "", this.explicit_path = !0;
            break;
          case "domain":
            this.domain = P ? P.trim() : "", this.explicit_domain = !!this.domain;
            break;
          case "secure":
            this.secure = !0;
            break;
        }
      return this.explicit_path || (this.path = f || "/"), this.explicit_domain || (this.domain = s), this;
    }
    return new t().parse(i, s, f);
  }, t.prototype.matches = function(i) {
    return i === e.All ? !0 : !(this.noscript && i.script || this.secure && !i.secure || !this.collidesWith(i));
  }, t.prototype.collidesWith = function(i) {
    if (this.path && !i.path || this.domain && !i.domain || this.path && i.path.indexOf(this.path) !== 0 || this.explicit_path && i.path.indexOf(this.path) !== 0)
      return !1;
    var s = i.domain && i.domain.replace(/^[\.]/, ""), f = this.domain && this.domain.replace(/^[\.]/, "");
    if (f === s)
      return !0;
    if (f) {
      if (!this.explicit_domain)
        return !1;
      var v = s.indexOf(f);
      return !(v === -1 || v !== s.length - f.length);
    }
    return !0;
  };
  function n() {
    var a, i, s;
    return this instanceof n ? (a = /* @__PURE__ */ Object.create(null), this.setCookie = function(v, m, _) {
      var O, P;
      if (v = new t(v, m, _), O = v.expiration_date <= Date.now(), a[v.name] !== void 0) {
        for (i = a[v.name], P = 0; P < i.length; P += 1)
          if (s = i[P], s.collidesWith(v))
            return O ? (i.splice(P, 1), i.length === 0 && delete a[v.name], !1) : (i[P] = v, v);
        return O ? !1 : (i.push(v), v);
      }
      return O ? !1 : (a[v.name] = [v], a[v.name]);
    }, this.getCookie = function(v, m) {
      var _, O;
      if (i = a[v], !!i)
        for (O = 0; O < i.length; O += 1) {
          if (_ = i[O], _.expiration_date <= Date.now()) {
            i.length === 0 && delete a[_.name];
            continue;
          }
          if (_.matches(m))
            return _;
        }
    }, this.getCookies = function(v) {
      var m = [], _, O;
      for (_ in a)
        O = this.getCookie(_, v), O && m.push(O);
      return m.toString = function() {
        return m.join(":");
      }, m.toValueString = function() {
        return m.map(function(C) {
          return C.toValueString();
        }).join("; ");
      }, m;
    }, this) : new n();
  }
  mg = Ci.CookieJar = n, n.prototype.setCookies = function(i, s, f) {
    i = Array.isArray(i) ? i : i.split(r);
    var v = [], m, _;
    for (i = i.map(function(O) {
      return new t(O, s, f);
    }), m = 0; m < i.length; m += 1)
      _ = i[m], this.setCookie(_, s, f) && v.push(_);
    return v;
  };
})();
const QL = /* @__PURE__ */ ee({
  __proto__: null,
  get CookieAccessInfo() {
    return xg;
  },
  get Cookie() {
    return wg;
  },
  get CookieJar() {
    return mg;
  },
  default: Ci
}, [Ci]), eC = /* @__PURE__ */ Q(QL);
var tC = Ie && Ie.__extends || function() {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r)
      r.hasOwnProperty(n) && (t[n] = r[n]);
  };
  return function(t, r) {
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), rC = Ie && Ie.__assign || Object.assign || function(e) {
  for (var t, r = 1, n = arguments.length; r < n; r++) {
    t = arguments[r];
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
  }
  return e;
};
Object.defineProperty(Oo, "__esModule", { value: !0 });
var Wu = er, Mg = er, e1 = er, Fs = BL, t1 = OL, Pa = HL, nC = fc, r1 = XL, n1 = eC, mf = function(e) {
  tC(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.UNSENT = t.UNSENT, n.OPENED = t.OPENED, n.HEADERS_RECEIVED = t.HEADERS_RECEIVED, n.LOADING = t.LOADING, n.DONE = t.DONE, n.onreadystatechange = null, n.readyState = t.UNSENT, n.response = null, n.responseText = "", n.responseType = "", n.status = 0, n.statusText = "", n.timeout = 0, n.upload = new r1.XMLHttpRequestUpload(), n.responseUrl = "", n.withCredentials = !1, n._method = null, n._url = null, n._sync = !1, n._headers = {}, n._loweredHeaders = {}, n._mimeOverride = null, n._request = null, n._response = null, n._responseParts = null, n._responseHeaders = null, n._aborting = null, n._error = null, n._loadedBytes = 0, n._totalBytes = 0, n._lengthComputable = !1, n._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, n._restrictedHeaders = {
      "accept-charset": !0,
      "accept-encoding": !0,
      "access-control-request-headers": !0,
      "access-control-request-method": !0,
      connection: !0,
      "content-length": !0,
      cookie: !0,
      cookie2: !0,
      date: !0,
      dnt: !0,
      expect: !0,
      host: !0,
      "keep-alive": !0,
      origin: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      "transfer-encoding": !0,
      upgrade: !0,
      "user-agent": !0,
      via: !0
    }, n._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, n._userAgent = "Mozilla/5.0 (" + e1.type() + " " + e1.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, n._anonymous = r.anon || !1, n;
  }
  return t.prototype.open = function(r, n, a, i, s) {
    if (a === void 0 && (a = !0), r = r.toUpperCase(), this._restrictedMethods[r])
      throw new t.SecurityError("HTTP method " + r + " is not allowed in XHR");
    var f = this._parseUrl(n, i, s);
    this.readyState === t.HEADERS_RECEIVED || (this.readyState, t.LOADING), this._method = r, this._url = f, this._sync = !a, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(t.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
  }, t.prototype.setRequestHeader = function(r, n) {
    if (this.readyState !== t.OPENED)
      throw new t.InvalidStateError("XHR readyState must be OPENED");
    var a = r.toLowerCase();
    if (this._restrictedHeaders[a] || /^sec-/.test(a) || /^proxy-/.test(a)) {
      console.warn('Refused to set unsafe header "' + r + '"');
      return;
    }
    n = n.toString(), this._loweredHeaders[a] != null ? (r = this._loweredHeaders[a], this._headers[r] = this._headers[r] + ", " + n) : (this._loweredHeaders[a] = r, this._headers[r] = n);
  }, t.prototype.send = function(r) {
    if (this.readyState !== t.OPENED)
      throw new t.InvalidStateError("XHR readyState must be OPENED");
    if (this._request)
      throw new t.InvalidStateError("send() already called");
    switch (this._url.protocol) {
      case "file:":
        return this._sendFile(r);
      case "http:":
      case "https:":
        return this._sendHttp(r);
      default:
        throw new t.NetworkError("Unsupported protocol " + this._url.protocol);
    }
  }, t.prototype.abort = function() {
    this._request != null && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"));
  }, t.prototype.getResponseHeader = function(r) {
    if (this._responseHeaders == null || r == null)
      return null;
    var n = r.toLowerCase();
    return this._responseHeaders.hasOwnProperty(n) ? this._responseHeaders[r.toLowerCase()] : null;
  }, t.prototype.getAllResponseHeaders = function() {
    var r = this;
    return this._responseHeaders == null ? "" : Object.keys(this._responseHeaders).map(function(n) {
      return n + ": " + r._responseHeaders[n];
    }).join(`\r
`);
  }, t.prototype.overrideMimeType = function(r) {
    if (this.readyState === t.LOADING || this.readyState === t.DONE)
      throw new t.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
    this._mimeOverride = r.toLowerCase();
  }, t.prototype.nodejsSet = function(r) {
    if (this.nodejsHttpAgent = r.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = r.httpsAgent || this.nodejsHttpsAgent, r.hasOwnProperty("baseUrl")) {
      if (r.baseUrl != null) {
        var n = Fs.parse(r.baseUrl, !1, !0);
        if (!n.protocol)
          throw new t.SyntaxError("baseUrl must be an absolute URL");
      }
      this.nodejsBaseUrl = r.baseUrl;
    }
  }, t.nodejsSet = function(r) {
    t.prototype.nodejsSet(r);
  }, t.prototype._setReadyState = function(r) {
    this.readyState = r, this.dispatchEvent(new t1.ProgressEvent("readystatechange"));
  }, t.prototype._sendFile = function(r) {
    throw new Error("Protocol file: not implemented");
  }, t.prototype._sendHttp = function(r) {
    if (this._sync)
      throw new Error("Synchronous XHR processing not implemented");
    r && (this._method === "GET" || this._method === "HEAD") ? (console.warn("Discarding entity body for " + this._method + " requests"), r = null) : r = r || "", this.upload._setData(r), this._finalizeHeaders(), this._sendHxxpRequest();
  }, t.prototype._sendHxxpRequest = function() {
    var r = this;
    if (this.withCredentials) {
      var n = t.cookieJar.getCookies(n1.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === "https:")).toValueString();
      this._headers.cookie = this._headers.cookie2 = n;
    }
    var a = this._url.protocol === "http:" ? [Wu, this.nodejsHttpAgent] : [Mg, this.nodejsHttpsAgent], i = a[0], s = a[1], f = i.request.bind(i), v = f({
      hostname: this._url.hostname,
      port: +this._url.port,
      path: this._url.path,
      auth: this._url.auth,
      method: this._method,
      headers: this._headers,
      agent: s
    });
    this._request = v, this.timeout && v.setTimeout(this.timeout, function() {
      return r._onHttpTimeout(v);
    }), v.on("response", function(m) {
      return r._onHttpResponse(v, m);
    }), v.on("error", function(m) {
      return r._onHttpRequestError(v, m);
    }), this.upload._startUpload(v), this._request === v && this._dispatchProgress("loadstart");
  }, t.prototype._finalizeHeaders = function() {
    this._headers = rC({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
  }, t.prototype._onHttpResponse = function(r, n) {
    var a = this;
    if (this._request === r) {
      if (this.withCredentials && (n.headers["set-cookie"] || n.headers["set-cookie2"]) && t.cookieJar.setCookies(n.headers["set-cookie"] || n.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(n.statusCode) >= 0) {
        this._url = this._parseUrl(n.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), this._headers["Content-Type"] != null && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), this._sendHxxpRequest();
        return;
      }
      this._response = n, this._response.on("data", function(s) {
        return a._onHttpResponseData(n, s);
      }), this._response.on("end", function() {
        return a._onHttpResponseEnd(n);
      }), this._response.on("close", function() {
        return a._onHttpResponseClose(n);
      }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = Wu.STATUS_CODES[this.status], this._parseResponseHeaders(n);
      var i = this._responseHeaders["content-length"] || "";
      this._totalBytes = +i, this._lengthComputable = !!i, this._setReadyState(t.HEADERS_RECEIVED);
    }
  }, t.prototype._onHttpResponseData = function(r, n) {
    this._response === r && (this._responseParts.push(new Buffer(n)), this._loadedBytes += n.length, this.readyState !== t.LOADING && this._setReadyState(t.LOADING), this._dispatchProgress("progress"));
  }, t.prototype._onHttpResponseEnd = function(r) {
    this._response === r && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(t.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"));
  }, t.prototype._onHttpResponseClose = function(r) {
    if (this._response === r) {
      var n = this._request;
      this._setError(), n.abort(), this._setReadyState(t.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend");
    }
  }, t.prototype._onHttpTimeout = function(r) {
    this._request === r && (this._setError(), r.abort(), this._setReadyState(t.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"));
  }, t.prototype._onHttpRequestError = function(r, n) {
    this._request === r && (this._setError(), r.abort(), this._setReadyState(t.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"));
  }, t.prototype._dispatchProgress = function(r) {
    var n = new t.ProgressEvent(r);
    n.lengthComputable = this._lengthComputable, n.loaded = this._loadedBytes, n.total = this._totalBytes, this.dispatchEvent(n);
  }, t.prototype._setError = function() {
    this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null;
  }, t.prototype._parseUrl = function(r, n, a) {
    var i = this.nodejsBaseUrl == null ? r : Fs.resolve(this.nodejsBaseUrl, r), s = Fs.parse(i, !1, !0);
    s.hash = null;
    var f = (s.auth || "").split(":"), v = f[0], m = f[1];
    return (v || m || n || a) && (s.auth = (n || v || "") + ":" + (a || m || "")), s;
  }, t.prototype._parseResponseHeaders = function(r) {
    this._responseHeaders = {};
    for (var n in r.headers) {
      var a = n.toLowerCase();
      this._privateHeaders[a] || (this._responseHeaders[a] = r.headers[n]);
    }
    this._mimeOverride != null && (this._responseHeaders["content-type"] = this._mimeOverride);
  }, t.prototype._parseResponse = function() {
    var r = Buffer.concat(this._responseParts);
    switch (this._responseParts = null, this.responseType) {
      case "json":
        this.responseText = null;
        try {
          this.response = JSON.parse(r.toString("utf-8"));
        } catch {
          this.response = null;
        }
        return;
      case "buffer":
        this.responseText = null, this.response = r;
        return;
      case "arraybuffer":
        this.responseText = null;
        for (var n = new ArrayBuffer(r.length), a = new Uint8Array(n), i = 0; i < r.length; i++)
          a[i] = r[i];
        this.response = n;
        return;
      case "text":
      default:
        try {
          this.responseText = r.toString(this._parseResponseEncoding());
        } catch {
          this.responseText = r.toString("binary");
        }
        this.response = this.responseText;
    }
  }, t.prototype._parseResponseEncoding = function() {
    return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8";
  }, t.ProgressEvent = t1.ProgressEvent, t.InvalidStateError = Pa.InvalidStateError, t.NetworkError = Pa.NetworkError, t.SecurityError = Pa.SecurityError, t.SyntaxError = Pa.SyntaxError, t.XMLHttpRequestUpload = r1.XMLHttpRequestUpload, t.UNSENT = 0, t.OPENED = 1, t.HEADERS_RECEIVED = 2, t.LOADING = 3, t.DONE = 4, t.cookieJar = n1.CookieJar(), t;
}(nC.XMLHttpRequestEventTarget), iC = Oo.XMLHttpRequest = mf;
mf.prototype.nodejsHttpAgent = Wu.globalAgent;
mf.prototype.nodejsHttpsAgent = Mg.globalAgent;
mf.prototype.nodejsBaseUrl = null;
const aC = /* @__PURE__ */ ee({
  __proto__: null,
  XMLHttpRequest: iC,
  default: Oo
}, [Oo]), oC = /* @__PURE__ */ Q(aC);
(function(e) {
  function t(n) {
    for (var a in n)
      e.hasOwnProperty(a) || (e[a] = n[a]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(oC);
  var r = fc;
  e.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
})(gg);
UT("XMLHttpRequest") || gg.XMLHttpRequest;
var fC = ((e) => (e.Undefined = "", e.Injected = "Injected", e.WalletConnect = "WalletConnect", e))(fC || {});
export {
  lC as C,
  hC as M,
  dC as W,
  fC as a,
  pC as b
};
