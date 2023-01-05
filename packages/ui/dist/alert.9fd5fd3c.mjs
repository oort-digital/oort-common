import { j as ce, t as Gi, a as wt, I as Lo, g as Qi, F as Mr, b as Ji } from "./index.2db7449b.mjs";
import "ethers";
import { Button as ea } from "antd";
const Kc = ({
  account: e,
  onClick: t,
  walletIcon: n,
  walletName: u,
  labelText: c
}) => {
  let h = /* @__PURE__ */ ce("span", {
    className: "cnn",
    children: c
  }), b = "connect-wallet-button";
  return e && (h = /* @__PURE__ */ ce("span", {
    className: "acc",
    children: Gi(e)
  }), b = `${b} active`), /* @__PURE__ */ wt("div", {
    onClick: e ? void 0 : t,
    className: b,
    children: [n, /* @__PURE__ */ ce("span", {
      className: "wallet-name",
      children: u
    }), h]
  });
}, ta = () => /* @__PURE__ */ wt("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ ce("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ce("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), Yc = /* @__PURE__ */ ce(Lo, {
  component: ta
}), ra = () => /* @__PURE__ */ ce("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ ce("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), Wc = /* @__PURE__ */ ce(Lo, {
  component: ra
});
var na = ((e) => (e.Undefined = "", e.Injected = "Injected", e.WalletConnect = "WalletConnect", e))(na || {}), nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function tn(e) {
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
function ia(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return '"[Circular]"';
  }
}
var aa = sa;
function sa(e, t, n) {
  var u = n && n.stringify || ia, c = 1;
  if (typeof e == "object" && e !== null) {
    var h = t.length + c;
    if (h === 1)
      return e;
    var b = new Array(h);
    b[0] = u(e);
    for (var s = 1; s < h; s++)
      b[s] = u(t[s]);
    return b.join(" ");
  }
  if (typeof e != "string")
    return e;
  var l = t.length;
  if (l === 0)
    return e;
  for (var y = "", v = 1 - c, N = -1, C = e && e.length || 0, O = 0; O < C; ) {
    if (e.charCodeAt(O) === 37 && O + 1 < C) {
      switch (N = N > -1 ? N : 0, e.charCodeAt(O + 1)) {
        case 100:
        case 102:
          if (v >= l || t[v] == null)
            break;
          N < O && (y += e.slice(N, O)), y += Number(t[v]), N = O + 2, O++;
          break;
        case 105:
          if (v >= l || t[v] == null)
            break;
          N < O && (y += e.slice(N, O)), y += Math.floor(Number(t[v])), N = O + 2, O++;
          break;
        case 79:
        case 111:
        case 106:
          if (v >= l || t[v] === void 0)
            break;
          N < O && (y += e.slice(N, O));
          var A = typeof t[v];
          if (A === "string") {
            y += "'" + t[v] + "'", N = O + 2, O++;
            break;
          }
          if (A === "function") {
            y += t[v].name || "<anonymous>", N = O + 2, O++;
            break;
          }
          y += u(t[v]), N = O + 2, O++;
          break;
        case 115:
          if (v >= l)
            break;
          N < O && (y += e.slice(N, O)), y += String(t[v]), N = O + 2, O++;
          break;
        case 37:
          N < O && (y += e.slice(N, O)), y += "%", N = O + 2, O++, v--;
          break;
      }
      ++v;
    }
    ++O;
  }
  return N === -1 ? e : (N < C && (y += e.slice(N)), y);
}
const gn = aa;
var ua = yt;
const er = ba().console || {}, fa = { mapHttpRequest: dr, mapHttpResponse: dr, wrapRequestSerializer: xr, wrapResponseSerializer: xr, wrapErrorSerializer: xr, req: dr, res: dr, err: da };
function ca(e, t) {
  return Array.isArray(e) ? e.filter(function(n) {
    return n !== "!stdSerializers.err";
  }) : e === !0 ? Object.keys(t) : !1;
}
function yt(e) {
  e = e || {}, e.browser = e.browser || {};
  const t = e.browser.transmit;
  if (t && typeof t.send != "function")
    throw Error("pino: transmit option must have a send function");
  const n = e.browser.write || er;
  e.browser.write && (e.browser.asObject = !0);
  const u = e.serializers || {}, c = ca(e.browser.serialize, u);
  let h = e.browser.serialize;
  Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (h = !1);
  const b = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof n == "function" && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), e.enabled === !1 && (e.level = "silent");
  const s = e.level || "info", l = Object.create(n);
  l.log || (l.log = tr), Object.defineProperty(l, "levelVal", { get: v }), Object.defineProperty(l, "level", { get: N, set: C });
  const y = { transmit: t, serialize: c, asObject: e.browser.asObject, levels: b, timestamp: ya(e) };
  l.levels = yt.levels, l.level = s, l.setMaxListeners = l.getMaxListeners = l.emit = l.addListener = l.on = l.prependListener = l.once = l.prependOnceListener = l.removeListener = l.removeAllListeners = l.listeners = l.listenerCount = l.eventNames = l.write = l.flush = tr, l.serializers = u, l._serialize = c, l._stdErrSerialize = h, l.child = O, t && (l._logEvent = Cr());
  function v() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function N() {
    return this._level;
  }
  function C(A) {
    if (A !== "silent" && !this.levels.values[A])
      throw Error("unknown level " + A);
    this._level = A, It(y, l, "error", "log"), It(y, l, "fatal", "error"), It(y, l, "warn", "error"), It(y, l, "info", "log"), It(y, l, "debug", "log"), It(y, l, "trace", "log");
  }
  function O(A, k) {
    if (!A)
      throw new Error("missing bindings for child Pino");
    k = k || {}, c && A.serializers && (k.serializers = A.serializers);
    const H = k.serializers;
    if (c && H) {
      var X = Object.assign({}, u, H), B = e.browser.serialize === !0 ? Object.keys(X) : c;
      delete A.serializers, Ar([A], B, X, this._stdErrSerialize);
    }
    function T(_) {
      this._childLevel = (_._childLevel | 0) + 1, this.error = Ct(_, A, "error"), this.fatal = Ct(_, A, "fatal"), this.warn = Ct(_, A, "warn"), this.info = Ct(_, A, "info"), this.debug = Ct(_, A, "debug"), this.trace = Ct(_, A, "trace"), X && (this.serializers = X, this._serialize = B), t && (this._logEvent = Cr([].concat(_._logEvent.bindings, A)));
    }
    return T.prototype = this, new T(this);
  }
  return l;
}
yt.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }, yt.stdSerializers = fa, yt.stdTimeFunctions = Object.assign({}, { nullTime: Ao, epochTime: Oo, unixTime: ga, isoTime: _a });
function It(e, t, n, u) {
  const c = Object.getPrototypeOf(t);
  t[n] = t.levelVal > t.levels.values[n] ? tr : c[n] ? c[n] : er[n] || er[u] || tr, ha(e, t, n);
}
function ha(e, t, n) {
  !e.transmit && t[n] === tr || (t[n] = function(u) {
    return function() {
      const c = e.timestamp(), h = new Array(arguments.length), b = Object.getPrototypeOf && Object.getPrototypeOf(this) === er ? er : this;
      for (var s = 0; s < h.length; s++)
        h[s] = arguments[s];
      if (e.serialize && !e.asObject && Ar(h, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? u.call(b, la(this, n, h, c)) : u.apply(b, h), e.transmit) {
        const l = e.transmit.level || t.level, y = yt.levels.values[l], v = yt.levels.values[n];
        if (v < y)
          return;
        pa(this, { ts: c, methodLevel: n, methodValue: v, transmitLevel: l, transmitValue: yt.levels.values[e.transmit.level || t.level], send: e.transmit.send, val: t.levelVal }, h);
      }
    };
  }(t[n]));
}
function la(e, t, n, u) {
  e._serialize && Ar(n, e._serialize, e.serializers, e._stdErrSerialize);
  const c = n.slice();
  let h = c[0];
  const b = {};
  u && (b.time = u), b.level = yt.levels.values[t];
  let s = (e._childLevel | 0) + 1;
  if (s < 1 && (s = 1), h !== null && typeof h == "object") {
    for (; s-- && typeof c[0] == "object"; )
      Object.assign(b, c.shift());
    h = c.length ? gn(c.shift(), c) : void 0;
  } else
    typeof h == "string" && (h = gn(c.shift(), c));
  return h !== void 0 && (b.msg = h), b;
}
function Ar(e, t, n, u) {
  for (const c in e)
    if (u && e[c] instanceof Error)
      e[c] = yt.stdSerializers.err(e[c]);
    else if (typeof e[c] == "object" && !Array.isArray(e[c]))
      for (const h in e[c])
        t && t.indexOf(h) > -1 && h in n && (e[c][h] = n[h](e[c][h]));
}
function Ct(e, t, n) {
  return function() {
    const u = new Array(1 + arguments.length);
    u[0] = t;
    for (var c = 1; c < u.length; c++)
      u[c] = arguments[c - 1];
    return e[n].apply(this, u);
  };
}
function pa(e, t, n) {
  const u = t.send, c = t.ts, h = t.methodLevel, b = t.methodValue, s = t.val, l = e._logEvent.bindings;
  Ar(n, e._serialize || Object.keys(e.serializers), e.serializers, e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize), e._logEvent.ts = c, e._logEvent.messages = n.filter(function(y) {
    return l.indexOf(y) === -1;
  }), e._logEvent.level.label = h, e._logEvent.level.value = b, u(h, e._logEvent, s), e._logEvent = Cr(l);
}
function Cr(e) {
  return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } };
}
function da(e) {
  const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
  for (const n in e)
    t[n] === void 0 && (t[n] = e[n]);
  return t;
}
function ya(e) {
  return typeof e.timestamp == "function" ? e.timestamp : e.timestamp === !1 ? Ao : Oo;
}
function dr() {
  return {};
}
function xr(e) {
  return e;
}
function tr() {
}
function Ao() {
  return !1;
}
function Oo() {
  return Date.now();
}
function ga() {
  return Math.round(Date.now() / 1e3);
}
function _a() {
  return new Date(Date.now()).toISOString();
}
function ba() {
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
var kr = { exports: {} }, zt = typeof Reflect == "object" ? Reflect : null, _n = zt && typeof zt.apply == "function" ? zt.apply : function(e, t, n) {
  return Function.prototype.apply.call(e, t, n);
}, gr;
zt && typeof zt.ownKeys == "function" ? gr = zt.ownKeys : Object.getOwnPropertySymbols ? gr = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : gr = function(e) {
  return Object.getOwnPropertyNames(e);
};
function va(e) {
  console && console.warn && console.warn(e);
}
var bn = Number.isNaN || function(e) {
  return e !== e;
};
function Se() {
  Se.init.call(this);
}
kr.exports = Se, kr.exports.once = Fa, Se.EventEmitter = Se, Se.prototype._events = void 0, Se.prototype._eventsCount = 0, Se.prototype._maxListeners = void 0;
var vn = 10;
function _r(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Se, "defaultMaxListeners", { enumerable: !0, get: function() {
  return vn;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || bn(e))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  vn = e;
} }), Se.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, Se.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || bn(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function So(e) {
  return e._maxListeners === void 0 ? Se.defaultMaxListeners : e._maxListeners;
}
Se.prototype.getMaxListeners = function() {
  return So(this);
}, Se.prototype.emit = function(e) {
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
  var s = c[e];
  if (s === void 0)
    return !1;
  if (typeof s == "function")
    _n(s, this, t);
  else
    for (var l = s.length, y = Bo(s, l), n = 0; n < l; ++n)
      _n(y[n], this, t);
  return !0;
};
function wn(e, t, n, u) {
  var c, h, b;
  if (_r(n), h = e._events, h === void 0 ? (h = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (h.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), h = e._events), b = h[t]), b === void 0)
    b = h[t] = n, ++e._eventsCount;
  else if (typeof b == "function" ? b = h[t] = u ? [n, b] : [b, n] : u ? b.unshift(n) : b.push(n), c = So(e), c > 0 && b.length > c && !b.warned) {
    b.warned = !0;
    var s = new Error("Possible EventEmitter memory leak detected. " + b.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = b.length, va(s);
  }
  return e;
}
Se.prototype.addListener = function(e, t) {
  return wn(this, e, t, !1);
}, Se.prototype.on = Se.prototype.addListener, Se.prototype.prependListener = function(e, t) {
  return wn(this, e, t, !0);
};
function wa() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function mn(e, t, n) {
  var u = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, c = wa.bind(u);
  return c.listener = n, u.wrapFn = c, c;
}
Se.prototype.once = function(e, t) {
  return _r(t), this.on(e, mn(this, e, t)), this;
}, Se.prototype.prependOnceListener = function(e, t) {
  return _r(t), this.prependListener(e, mn(this, e, t)), this;
}, Se.prototype.removeListener = function(e, t) {
  var n, u, c, h, b;
  if (_r(t), u = this._events, u === void 0)
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
    c === 0 ? n.shift() : ma(n, c), n.length === 1 && (u[e] = n[0]), u.removeListener !== void 0 && this.emit("removeListener", e, b || t);
  }
  return this;
}, Se.prototype.off = Se.prototype.removeListener, Se.prototype.removeAllListeners = function(e) {
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
function En(e, t, n) {
  var u = e._events;
  if (u === void 0)
    return [];
  var c = u[t];
  return c === void 0 ? [] : typeof c == "function" ? n ? [c.listener || c] : [c] : n ? Ea(c) : Bo(c, c.length);
}
Se.prototype.listeners = function(e) {
  return En(this, e, !0);
}, Se.prototype.rawListeners = function(e) {
  return En(this, e, !1);
}, Se.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Fn.call(e, t);
}, Se.prototype.listenerCount = Fn;
function Fn(e) {
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
Se.prototype.eventNames = function() {
  return this._eventsCount > 0 ? gr(this._events) : [];
};
function Bo(e, t) {
  for (var n = new Array(t), u = 0; u < t; ++u)
    n[u] = e[u];
  return n;
}
function ma(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Ea(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Fa(e, t) {
  return new Promise(function(n, u) {
    function c(b) {
      e.removeListener(t, h), u(b);
    }
    function h() {
      typeof e.removeListener == "function" && e.removeListener("error", c), n([].slice.call(arguments));
    }
    To(e, t, h, { once: !0 }), t !== "error" && La(e, c, { once: !0 });
  });
}
function La(e, t, n) {
  typeof e.on == "function" && To(e, "error", t, n);
}
function To(e, t, n, u) {
  if (typeof e.on == "function")
    u.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function c(h) {
      u.once && e.removeEventListener(t, c), n(h);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var vr = {};
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
var Pr = function(e, t) {
  return Pr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, u) {
    n.__proto__ = u;
  } || function(n, u) {
    for (var c in u)
      u.hasOwnProperty(c) && (n[c] = u[c]);
  }, Pr(e, t);
};
function Aa(e, t) {
  Pr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Rr = function() {
  return Rr = Object.assign || function(e) {
    for (var t, n = 1, u = arguments.length; n < u; n++) {
      t = arguments[n];
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Rr.apply(this, arguments);
};
function Oa(e, t) {
  var n = {};
  for (var u in e)
    Object.prototype.hasOwnProperty.call(e, u) && t.indexOf(u) < 0 && (n[u] = e[u]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, u = Object.getOwnPropertySymbols(e); c < u.length; c++)
      t.indexOf(u[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, u[c]) && (n[u[c]] = e[u[c]]);
  return n;
}
function Sa(e, t, n, u) {
  var c = arguments.length, h = c < 3 ? t : u === null ? u = Object.getOwnPropertyDescriptor(t, n) : u, b;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    h = Reflect.decorate(e, t, n, u);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (b = e[s]) && (h = (c < 3 ? b(h) : c > 3 ? b(t, n, h) : b(t, n)) || h);
  return c > 3 && h && Object.defineProperty(t, n, h), h;
}
function Ba(e, t) {
  return function(n, u) {
    t(n, u, e);
  };
}
function Ta(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Ma(e, t, n, u) {
  function c(h) {
    return h instanceof n ? h : new n(function(b) {
      b(h);
    });
  }
  return new (n || (n = Promise))(function(h, b) {
    function s(v) {
      try {
        y(u.next(v));
      } catch (N) {
        b(N);
      }
    }
    function l(v) {
      try {
        y(u.throw(v));
      } catch (N) {
        b(N);
      }
    }
    function y(v) {
      v.done ? h(v.value) : c(v.value).then(s, l);
    }
    y((u = u.apply(e, t || [])).next());
  });
}
function xa(e, t) {
  var n = { label: 0, sent: function() {
    if (h[0] & 1)
      throw h[1];
    return h[1];
  }, trys: [], ops: [] }, u, c, h, b;
  return b = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
    return this;
  }), b;
  function s(y) {
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
function Na(e, t, n, u) {
  u === void 0 && (u = n), e[u] = t[n];
}
function Ua(e, t) {
  for (var n in e)
    n !== "default" && !t.hasOwnProperty(n) && (t[n] = e[n]);
}
function Hr(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], u = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return e && u >= e.length && (e = void 0), { value: e && e[u++], done: !e };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Mo(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var u = n.call(e), c, h = [], b;
  try {
    for (; (t === void 0 || t-- > 0) && !(c = u.next()).done; )
      h.push(c.value);
  } catch (s) {
    b = { error: s };
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
function ja() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Mo(arguments[t]));
  return e;
}
function Ia() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var u = Array(e), c = 0, t = 0; t < n; t++)
    for (var h = arguments[t], b = 0, s = h.length; b < s; b++, c++)
      u[c] = h[b];
  return u;
}
function rr(e) {
  return this instanceof rr ? (this.v = e, this) : new rr(e);
}
function Ca(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var u = n.apply(e, t || []), c, h = [];
  return c = {}, b("next"), b("throw"), b("return"), c[Symbol.asyncIterator] = function() {
    return this;
  }, c;
  function b(C) {
    u[C] && (c[C] = function(O) {
      return new Promise(function(A, k) {
        h.push([C, O, A, k]) > 1 || s(C, O);
      });
    });
  }
  function s(C, O) {
    try {
      l(u[C](O));
    } catch (A) {
      N(h[0][3], A);
    }
  }
  function l(C) {
    C.value instanceof rr ? Promise.resolve(C.value.v).then(y, v) : N(h[0][2], C);
  }
  function y(C) {
    s("next", C);
  }
  function v(C) {
    s("throw", C);
  }
  function N(C, O) {
    C(O), h.shift(), h.length && s(h[0][0], h[0][1]);
  }
}
function ka(e) {
  var t, n;
  return t = {}, u("next"), u("throw", function(c) {
    throw c;
  }), u("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function u(c, h) {
    t[c] = e[c] ? function(b) {
      return (n = !n) ? { value: rr(e[c](b)), done: c === "return" } : h ? h(b) : b;
    } : h;
  }
}
function Pa(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Hr == "function" ? Hr(e) : e[Symbol.iterator](), n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function u(h) {
    n[h] = e[h] && function(b) {
      return new Promise(function(s, l) {
        b = e[h](b), c(s, l, b.done, b.value);
      });
    };
  }
  function c(h, b, s, l) {
    Promise.resolve(l).then(function(y) {
      h({ value: y, done: s });
    }, b);
  }
}
function Ra(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Ha(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function Da(e) {
  return e && e.__esModule ? e : { default: e };
}
function za(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Va(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, n), n;
}
var $a = Object.freeze({ __proto__: null, __extends: Aa, get __assign() {
  return Rr;
}, __rest: Oa, __decorate: Sa, __param: Ba, __metadata: Ta, __awaiter: Ma, __generator: xa, __createBinding: Na, __exportStar: Ua, __values: Hr, __read: Mo, __spread: ja, __spreadArrays: Ia, __await: rr, __asyncGenerator: Ca, __asyncDelegator: ka, __asyncValues: Pa, __makeTemplateObject: Ra, __importStar: Ha, __importDefault: Da, __classPrivateFieldGet: za, __classPrivateFieldSet: Va }), ct = tn($a), or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
function Ka(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
or.safeJsonParse = Ka;
function Ya(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, n) => typeof n > "u" ? null : n);
}
or.safeJsonStringify = Ya;
var yr = { exports: {} }, Ln;
function Wa() {
  return Ln || (Ln = 1, function() {
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
    }), typeof nt < "u" && nt.localStorage ? yr.exports = nt.localStorage : typeof window < "u" && window.localStorage ? yr.exports = window.localStorage : yr.exports = new t();
  }()), yr.exports;
}
var An = {}, Wt = {}, On;
function qa() {
  if (On)
    return Wt;
  On = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.IKeyValueStorage = void 0;
  class e {
  }
  return Wt.IKeyValueStorage = e, Wt;
}
var qt = {}, Sn;
function Xa() {
  if (Sn)
    return qt;
  Sn = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.parseEntry = void 0;
  const e = or;
  function t(n) {
    var u;
    return [n[0], e.safeJsonParse((u = n[1]) !== null && u !== void 0 ? u : "")];
  }
  return qt.parseEntry = t, qt;
}
var Bn;
function Za() {
  return Bn || (Bn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ct;
    t.__exportStar(qa(), e), t.__exportStar(Xa(), e);
  }(An)), An;
}
Object.defineProperty(vr, "__esModule", { value: !0 }), vr.KeyValueStorage = void 0;
const Dt = ct, Tn = or, Ga = Dt.__importDefault(Wa()), Qa = Za();
class xo {
  constructor() {
    this.localStorage = Ga.default;
  }
  getKeys() {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Qa.parseEntry);
    });
  }
  getItem(t) {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      const n = this.localStorage.getItem(t);
      if (n !== null)
        return Tn.safeJsonParse(n);
    });
  }
  setItem(t, n) {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Tn.safeJsonStringify(n));
    });
  }
  removeItem(t) {
    return Dt.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
vr.KeyValueStorage = xo;
vr.default = xo;
var Ja = {}, Xt = {}, Ae = {}, Mn = {}, Zt = {}, xn;
function es() {
  if (xn)
    return Zt;
  xn = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.delay = void 0;
  function e(t) {
    return new Promise((n) => {
      setTimeout(() => {
        n(!0);
      }, t);
    });
  }
  return Zt.delay = e, Zt;
}
var Mt = {}, Nn = {}, kt = {}, Un;
function ts() {
  return Un || (Un = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.ONE_THOUSAND = kt.ONE_HUNDRED = void 0, kt.ONE_HUNDRED = 100, kt.ONE_THOUSAND = 1e3), kt;
}
var jn = {}, In;
function rs() {
  return In || (In = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(jn)), jn;
}
var Cn;
function No() {
  return Cn || (Cn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ct;
    t.__exportStar(ts(), e), t.__exportStar(rs(), e);
  }(Nn)), Nn;
}
var kn;
function ns() {
  if (kn)
    return Mt;
  kn = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.fromMiliseconds = Mt.toMiliseconds = void 0;
  const e = No();
  function t(u) {
    return u * e.ONE_THOUSAND;
  }
  Mt.toMiliseconds = t;
  function n(u) {
    return Math.floor(u / e.ONE_THOUSAND);
  }
  return Mt.fromMiliseconds = n, Mt;
}
var Pn;
function os() {
  return Pn || (Pn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = ct;
    t.__exportStar(es(), e), t.__exportStar(ns(), e);
  }(Mn)), Mn;
}
var Pt = {}, Rn;
function is() {
  if (Rn)
    return Pt;
  Rn = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.Watch = void 0;
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
var Hn = {}, Gt = {}, Dn;
function as() {
  if (Dn)
    return Gt;
  Dn = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.IWatch = void 0;
  class e {
  }
  return Gt.IWatch = e, Gt;
}
var zn;
function ss() {
  return zn || (zn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ct.__exportStar(as(), e);
  }(Hn)), Hn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ct;
  t.__exportStar(os(), e), t.__exportStar(is(), e), t.__exportStar(ss(), e), t.__exportStar(No(), e);
})(Ae);
var Vn = {}, Qt = {};
class us {
}
var fs = Object.freeze({ __proto__: null, IEvents: us }), cs = tn(fs), $n;
function hs() {
  if ($n)
    return Qt;
  $n = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.IHeartBeat = void 0;
  const e = cs;
  class t extends e.IEvents {
    constructor(u) {
      super();
    }
  }
  return Qt.IHeartBeat = t, Qt;
}
var Kn;
function Uo() {
  return Kn || (Kn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ct.__exportStar(hs(), e);
  }(Vn)), Vn;
}
var Yn = {}, xt = {}, Wn;
function ls() {
  if (Wn)
    return xt;
  Wn = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.HEARTBEAT_EVENTS = xt.HEARTBEAT_INTERVAL = void 0;
  const e = Ae;
  return xt.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, xt.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }, xt;
}
var qn;
function jo() {
  return qn || (qn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), ct.__exportStar(ls(), e);
  }(Yn)), Yn;
}
var Xn;
function ps() {
  if (Xn)
    return Xt;
  Xn = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.HeartBeat = void 0;
  const e = ct, t = kr.exports, n = Ae, u = Uo(), c = jo();
  class h extends u.IHeartBeat {
    constructor(s) {
      super(s), this.events = new t.EventEmitter(), this.interval = c.HEARTBEAT_INTERVAL, this.interval = (s == null ? void 0 : s.interval) || c.HEARTBEAT_INTERVAL;
    }
    static init(s) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const l = new h(s);
        return yield l.init(), l;
      });
    }
    init() {
      return e.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    on(s, l) {
      this.events.on(s, l);
    }
    once(s, l) {
      this.events.once(s, l);
    }
    off(s, l) {
      this.events.off(s, l);
    }
    removeListener(s, l) {
      this.events.removeListener(s, l);
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
  return Xt.HeartBeat = h, Xt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ct;
  t.__exportStar(ps(), e), t.__exportStar(Uo(), e), t.__exportStar(jo(), e);
})(Ja);
var ds = {}, Rt = {}, Zn;
function Io() {
  return Zn || (Zn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.PINO_CUSTOM_CONTEXT_KEY = Rt.PINO_LOGGER_DEFAULTS = void 0, Rt.PINO_LOGGER_DEFAULTS = { level: "info" }, Rt.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Rt;
}
var rt = {}, Gn;
function ys() {
  if (Gn)
    return rt;
  Gn = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.generateChildLogger = rt.formatChildLoggerContext = rt.getLoggerContext = rt.setBrowserLoggerContext = rt.getBrowserLoggerContext = rt.getDefaultLoggerOptions = void 0;
  const e = Io();
  function t(s) {
    return Object.assign(Object.assign({}, s), { level: (s == null ? void 0 : s.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  rt.getDefaultLoggerOptions = t;
  function n(s, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return s[l] || "";
  }
  rt.getBrowserLoggerContext = n;
  function u(s, l, y = e.PINO_CUSTOM_CONTEXT_KEY) {
    return s[y] = l, s;
  }
  rt.setBrowserLoggerContext = u;
  function c(s, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    let y = "";
    return typeof s.bindings > "u" ? y = n(s, l) : y = s.bindings().context || "", y;
  }
  rt.getLoggerContext = c;
  function h(s, l, y = e.PINO_CUSTOM_CONTEXT_KEY) {
    const v = c(s, y);
    return v.trim() ? `${v}/${l}` : l;
  }
  rt.formatChildLoggerContext = h;
  function b(s, l, y = e.PINO_CUSTOM_CONTEXT_KEY) {
    const v = h(s, l, y), N = s.child({ context: v });
    return u(N, v, y);
  }
  return rt.generateChildLogger = b, rt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = ct, n = t.__importDefault(ua);
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return n.default;
  } }), t.__exportStar(Io(), e), t.__exportStar(ys(), e);
})(ds);
var gs = {}, rn = {}, wr = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 }), mr.BrowserRandomSource = void 0;
const Qn = 65536;
class _s {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const n = new Uint8Array(t);
    for (let u = 0; u < n.length; u += Qn)
      this._crypto.getRandomValues(n.subarray(u, u + Math.min(n.length - u, Qn)));
    return n;
  }
}
mr.BrowserRandomSource = _s;
function bs(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Er = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
function vs(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
at.wipe = vs;
var ws = {}, ms = Object.freeze({ __proto__: null, default: ws }), Es = tn(ms);
Object.defineProperty(Er, "__esModule", { value: !0 }), Er.NodeRandomSource = void 0;
const Fs = at;
class Ls {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof bs < "u") {
      const t = Es;
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
    return (0, Fs.wipe)(n), u;
  }
}
Er.NodeRandomSource = Ls, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.SystemRandomSource = void 0;
const As = mr, Os = Er;
class Ss {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new As.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Os.NodeRandomSource(), this._source.isAvailable) {
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
wr.SystemRandomSource = Ss;
var pe = {}, Co = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(s, l) {
    var y = s >>> 16 & 65535, v = s & 65535, N = l >>> 16 & 65535, C = l & 65535;
    return v * C + (y * C + v * N << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function n(s, l) {
    return s + l | 0;
  }
  e.add = n;
  function u(s, l) {
    return s - l | 0;
  }
  e.sub = u;
  function c(s, l) {
    return s << l | s >>> 32 - l;
  }
  e.rotl = c;
  function h(s, l) {
    return s << 32 - l | s >>> l;
  }
  e.rotr = h;
  function b(s) {
    return typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  }
  e.isInteger = Number.isInteger || b, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(s) {
    return e.isInteger(s) && s >= -e.MAX_SAFE_INTEGER && s <= e.MAX_SAFE_INTEGER;
  };
})(Co), Object.defineProperty(pe, "__esModule", { value: !0 });
var ko = Co;
function Bs(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
pe.readInt16BE = Bs;
function Ts(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
pe.readUint16BE = Ts;
function Ms(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
pe.readInt16LE = Ms;
function xs(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
pe.readUint16LE = xs;
function Jn(e, t, n) {
  return t === void 0 && (t = new Uint8Array(2)), n === void 0 && (n = 0), t[n + 0] = e >>> 8, t[n + 1] = e >>> 0, t;
}
pe.writeUint16BE = Jn, pe.writeInt16BE = Jn;
function eo(e, t, n) {
  return t === void 0 && (t = new Uint8Array(2)), n === void 0 && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t;
}
pe.writeUint16LE = eo, pe.writeInt16LE = eo;
function Dr(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
pe.readInt32BE = Dr;
function zr(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
pe.readUint32BE = zr;
function Vr(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
pe.readInt32LE = Vr;
function $r(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
pe.readUint32LE = $r;
function Fr(e, t, n) {
  return t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0), t[n + 0] = e >>> 24, t[n + 1] = e >>> 16, t[n + 2] = e >>> 8, t[n + 3] = e >>> 0, t;
}
pe.writeUint32BE = Fr, pe.writeInt32BE = Fr;
function Lr(e, t, n) {
  return t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t[n + 2] = e >>> 16, t[n + 3] = e >>> 24, t;
}
pe.writeUint32LE = Lr, pe.writeInt32LE = Lr;
function Ns(e, t) {
  t === void 0 && (t = 0);
  var n = Dr(e, t), u = Dr(e, t + 4);
  return n * 4294967296 + u - (u >> 31) * 4294967296;
}
pe.readInt64BE = Ns;
function Us(e, t) {
  t === void 0 && (t = 0);
  var n = zr(e, t), u = zr(e, t + 4);
  return n * 4294967296 + u;
}
pe.readUint64BE = Us;
function js(e, t) {
  t === void 0 && (t = 0);
  var n = Vr(e, t), u = Vr(e, t + 4);
  return u * 4294967296 + n - (n >> 31) * 4294967296;
}
pe.readInt64LE = js;
function Is(e, t) {
  t === void 0 && (t = 0);
  var n = $r(e, t), u = $r(e, t + 4);
  return u * 4294967296 + n;
}
pe.readUint64LE = Is;
function to(e, t, n) {
  return t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0), Fr(e / 4294967296 >>> 0, t, n), Fr(e >>> 0, t, n + 4), t;
}
pe.writeUint64BE = to, pe.writeInt64BE = to;
function ro(e, t, n) {
  return t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0), Lr(e >>> 0, t, n), Lr(e / 4294967296 >>> 0, t, n + 4), t;
}
pe.writeUint64LE = ro, pe.writeInt64LE = ro;
function Cs(e, t, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var u = 0, c = 1, h = e / 8 + n - 1; h >= n; h--)
    u += t[h] * c, c *= 256;
  return u;
}
pe.readUintBE = Cs;
function ks(e, t, n) {
  if (n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - n)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var u = 0, c = 1, h = n; h < n + e / 8; h++)
    u += t[h] * c, c *= 256;
  return u;
}
pe.readUintLE = ks;
function Ps(e, t, n, u) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), u === void 0 && (u = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!ko.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var c = 1, h = e / 8 + u - 1; h >= u; h--)
    n[h] = t / c & 255, c *= 256;
  return n;
}
pe.writeUintBE = Ps;
function Rs(e, t, n, u) {
  if (n === void 0 && (n = new Uint8Array(e / 8)), u === void 0 && (u = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!ko.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var c = 1, h = u; h < u + e / 8; h++)
    n[h] = t / c & 255, c *= 256;
  return n;
}
pe.writeUintLE = Rs;
function Hs(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t);
}
pe.readFloat32BE = Hs;
function Ds(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat32(t, !0);
}
pe.readFloat32LE = Ds;
function zs(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t);
}
pe.readFloat64BE = zs;
function Vs(e, t) {
  t === void 0 && (t = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.getFloat64(t, !0);
}
pe.readFloat64LE = Vs;
function $s(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat32(n, e), t;
}
pe.writeFloat32BE = $s;
function Ks(e, t, n) {
  t === void 0 && (t = new Uint8Array(4)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat32(n, e, !0), t;
}
pe.writeFloat32LE = Ks;
function Ys(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat64(n, e), t;
}
pe.writeFloat64BE = Ys;
function Ws(e, t, n) {
  t === void 0 && (t = new Uint8Array(8)), n === void 0 && (n = 0);
  var u = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return u.setFloat64(n, e, !0), t;
}
pe.writeFloat64LE = Ws, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = wr, n = pe, u = at;
  e.defaultRandomSource = new t.SystemRandomSource();
  function c(y, v = e.defaultRandomSource) {
    return v.randomBytes(y);
  }
  e.randomBytes = c;
  function h(y = e.defaultRandomSource) {
    const v = c(4, y), N = (0, n.readUint32LE)(v);
    return (0, u.wipe)(v), N;
  }
  e.randomUint32 = h;
  const b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function s(y, v = b, N = e.defaultRandomSource) {
    if (v.length < 2)
      throw new Error("randomString charset is too short");
    if (v.length > 256)
      throw new Error("randomString charset is too long");
    let C = "";
    const O = v.length, A = 256 - 256 % O;
    for (; y > 0; ) {
      const k = c(Math.ceil(y * 256 / A), N);
      for (let H = 0; H < k.length && y > 0; H++) {
        const X = k[H];
        X < A && (C += v.charAt(X % O), y--);
      }
      (0, u.wipe)(k);
    }
    return C;
  }
  e.randomString = s;
  function l(y, v = b, N = e.defaultRandomSource) {
    const C = Math.ceil(y / (Math.log(v.length) / Math.LN2));
    return s(C, v, N);
  }
  e.randomStringForEntropy = l;
}(rn);
var no = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pe, n = at;
  e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
  var u = function() {
    function s() {
      this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
    }
    return s.prototype._initState = function() {
      this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
    }, s.prototype.reset = function() {
      return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
    }, s.prototype.clean = function() {
      n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset();
    }, s.prototype.update = function(l, y) {
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
    }, s.prototype.finish = function(l) {
      if (!this._finished) {
        var y = this._bytesHashed, v = this._bufferLength, N = y / 536870912 | 0, C = y << 3, O = y % 128 < 112 ? 128 : 256;
        this._buffer[v] = 128;
        for (var A = v + 1; A < O - 8; A++)
          this._buffer[A] = 0;
        t.writeUint32BE(N, this._buffer, O - 8), t.writeUint32BE(C, this._buffer, O - 4), h(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, O), this._finished = !0;
      }
      for (var A = 0; A < this.digestLength / 8; A++)
        t.writeUint32BE(this._stateHi[A], l, A * 8), t.writeUint32BE(this._stateLo[A], l, A * 8 + 4);
      return this;
    }, s.prototype.digest = function() {
      var l = new Uint8Array(this.digestLength);
      return this.finish(l), l;
    }, s.prototype.saveState = function() {
      if (this._finished)
        throw new Error("SHA256: cannot save finished state");
      return { stateHi: new Int32Array(this._stateHi), stateLo: new Int32Array(this._stateLo), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
    }, s.prototype.restoreState = function(l) {
      return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
    }, s.prototype.cleanSavedState = function(l) {
      n.wipe(l.stateHi), n.wipe(l.stateLo), l.buffer && n.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
    }, s;
  }();
  e.SHA512 = u;
  var c = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
  function h(s, l, y, v, N, C, O) {
    for (var A = y[0], k = y[1], H = y[2], X = y[3], B = y[4], T = y[5], _ = y[6], m = y[7], E = v[0], o = v[1], p = v[2], K = v[3], q = v[4], Q = v[5], ee = v[6], ne = v[7], d, F, V, Y, R, P, W, z; O >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var Z = 8 * oe + C;
        s[oe] = t.readUint32BE(N, Z), l[oe] = t.readUint32BE(N, Z + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var se = A, te = k, de = H, j = X, U = B, M = T, i = _, L = m, G = E, J = o, he = p, Fe = K, ve = q, Le = Q, Ne = ee, Me = ne;
        if (d = m, F = ne, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = (B >>> 14 | q << 32 - 14) ^ (B >>> 18 | q << 32 - 18) ^ (q >>> 41 - 32 | B << 32 - (41 - 32)), F = (q >>> 14 | B << 32 - 14) ^ (q >>> 18 | B << 32 - 18) ^ (B >>> 41 - 32 | q << 32 - (41 - 32)), R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, d = B & T ^ ~B & _, F = q & Q ^ ~q & ee, R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, d = c[oe * 2], F = c[oe * 2 + 1], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, d = s[oe % 16], F = l[oe % 16], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, V = W & 65535 | z << 16, Y = R & 65535 | P << 16, d = V, F = Y, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = (A >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | A << 32 - (34 - 32)) ^ (E >>> 39 - 32 | A << 32 - (39 - 32)), F = (E >>> 28 | A << 32 - 28) ^ (A >>> 34 - 32 | E << 32 - (34 - 32)) ^ (A >>> 39 - 32 | E << 32 - (39 - 32)), R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, d = A & k ^ A & H ^ k & H, F = E & o ^ E & p ^ o & p, R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, L = W & 65535 | z << 16, Me = R & 65535 | P << 16, d = j, F = Fe, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = V, F = Y, R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, j = W & 65535 | z << 16, Fe = R & 65535 | P << 16, k = se, H = te, X = de, B = j, T = U, _ = M, m = i, A = L, o = G, p = J, K = he, q = Fe, Q = ve, ee = Le, ne = Ne, E = Me, oe % 16 === 15)
          for (var Z = 0; Z < 16; Z++)
            d = s[Z], F = l[Z], R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = s[(Z + 9) % 16], F = l[(Z + 9) % 16], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, V = s[(Z + 1) % 16], Y = l[(Z + 1) % 16], d = (V >>> 1 | Y << 32 - 1) ^ (V >>> 8 | Y << 32 - 8) ^ V >>> 7, F = (Y >>> 1 | V << 32 - 1) ^ (Y >>> 8 | V << 32 - 8) ^ (Y >>> 7 | V << 32 - 7), R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, V = s[(Z + 14) % 16], Y = l[(Z + 14) % 16], d = (V >>> 19 | Y << 32 - 19) ^ (Y >>> 61 - 32 | V << 32 - (61 - 32)) ^ V >>> 6, F = (Y >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | Y << 32 - (61 - 32)) ^ (Y >>> 6 | V << 32 - 6), R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, s[Z] = W & 65535 | z << 16, l[Z] = R & 65535 | P << 16;
      }
      d = A, F = E, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[0], F = v[0], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[0] = A = W & 65535 | z << 16, v[0] = E = R & 65535 | P << 16, d = k, F = o, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[1], F = v[1], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[1] = k = W & 65535 | z << 16, v[1] = o = R & 65535 | P << 16, d = H, F = p, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[2], F = v[2], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[2] = H = W & 65535 | z << 16, v[2] = p = R & 65535 | P << 16, d = X, F = K, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[3], F = v[3], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[3] = X = W & 65535 | z << 16, v[3] = K = R & 65535 | P << 16, d = B, F = q, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[4], F = v[4], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[4] = B = W & 65535 | z << 16, v[4] = q = R & 65535 | P << 16, d = T, F = Q, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[5], F = v[5], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[5] = T = W & 65535 | z << 16, v[5] = Q = R & 65535 | P << 16, d = _, F = ee, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[6], F = v[6], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[6] = _ = W & 65535 | z << 16, v[6] = ee = R & 65535 | P << 16, d = m, F = ne, R = F & 65535, P = F >>> 16, W = d & 65535, z = d >>> 16, d = y[7], F = v[7], R += F & 65535, P += F >>> 16, W += d & 65535, z += d >>> 16, P += R >>> 16, W += P >>> 16, z += W >>> 16, y[7] = m = W & 65535 | z << 16, v[7] = ne = R & 65535 | P << 16, C += 128, O -= 128;
    }
    return C;
  }
  function b(s) {
    var l = new u();
    l.update(s);
    var y = l.digest();
    return l.clean(), y;
  }
  e.hash = b;
})(no), function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = rn, n = no, u = at;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function c(j) {
    const U = new Float64Array(16);
    if (j)
      for (let M = 0; M < j.length; M++)
        U[M] = j[M];
    return U;
  }
  const h = new Uint8Array(32);
  h[0] = 9;
  const b = c(), s = c([1]), l = c([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), y = c([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), v = c([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), N = c([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), C = c([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
  function O(j, U) {
    for (let M = 0; M < 16; M++)
      j[M] = U[M] | 0;
  }
  function A(j) {
    let U = 1;
    for (let M = 0; M < 16; M++) {
      let i = j[M] + U + 65535;
      U = Math.floor(i / 65536), j[M] = i - U * 65536;
    }
    j[0] += U - 1 + 37 * (U - 1);
  }
  function k(j, U, M) {
    const i = ~(M - 1);
    for (let L = 0; L < 16; L++) {
      const G = i & (j[L] ^ U[L]);
      j[L] ^= G, U[L] ^= G;
    }
  }
  function H(j, U) {
    const M = c(), i = c();
    for (let L = 0; L < 16; L++)
      i[L] = U[L];
    A(i), A(i), A(i);
    for (let L = 0; L < 2; L++) {
      M[0] = i[0] - 65517;
      for (let J = 1; J < 15; J++)
        M[J] = i[J] - 65535 - (M[J - 1] >> 16 & 1), M[J - 1] &= 65535;
      M[15] = i[15] - 32767 - (M[14] >> 16 & 1);
      const G = M[15] >> 16 & 1;
      M[14] &= 65535, k(i, M, 1 - G);
    }
    for (let L = 0; L < 16; L++)
      j[2 * L] = i[L] & 255, j[2 * L + 1] = i[L] >> 8;
  }
  function X(j, U) {
    let M = 0;
    for (let i = 0; i < 32; i++)
      M |= j[i] ^ U[i];
    return (1 & M - 1 >>> 8) - 1;
  }
  function B(j, U) {
    const M = new Uint8Array(32), i = new Uint8Array(32);
    return H(M, j), H(i, U), X(M, i);
  }
  function T(j) {
    const U = new Uint8Array(32);
    return H(U, j), U[0] & 1;
  }
  function _(j, U) {
    for (let M = 0; M < 16; M++)
      j[M] = U[2 * M] + (U[2 * M + 1] << 8);
    j[15] &= 32767;
  }
  function m(j, U, M) {
    for (let i = 0; i < 16; i++)
      j[i] = U[i] + M[i];
  }
  function E(j, U, M) {
    for (let i = 0; i < 16; i++)
      j[i] = U[i] - M[i];
  }
  function o(j, U, M) {
    let i, L, G = 0, J = 0, he = 0, Fe = 0, ve = 0, Le = 0, Ne = 0, Me = 0, we = 0, ge = 0, fe = 0, ye = 0, _e = 0, ue = 0, le = 0, r = 0, a = 0, f = 0, w = 0, S = 0, I = 0, D = 0, ie = 0, ae = 0, Ee = 0, me = 0, Oe = 0, ot = 0, Ot = 0, $t = 0, sr = 0, ke = M[0], je = M[1], Pe = M[2], Re = M[3], He = M[4], Ie = M[5], Ve = M[6], $e = M[7], Ke = M[8], Ye = M[9], We = M[10], ze = M[11], De = M[12], xe = M[13], qe = M[14], Xe = M[15];
    i = U[0], G += i * ke, J += i * je, he += i * Pe, Fe += i * Re, ve += i * He, Le += i * Ie, Ne += i * Ve, Me += i * $e, we += i * Ke, ge += i * Ye, fe += i * We, ye += i * ze, _e += i * De, ue += i * xe, le += i * qe, r += i * Xe, i = U[1], J += i * ke, he += i * je, Fe += i * Pe, ve += i * Re, Le += i * He, Ne += i * Ie, Me += i * Ve, we += i * $e, ge += i * Ke, fe += i * Ye, ye += i * We, _e += i * ze, ue += i * De, le += i * xe, r += i * qe, a += i * Xe, i = U[2], he += i * ke, Fe += i * je, ve += i * Pe, Le += i * Re, Ne += i * He, Me += i * Ie, we += i * Ve, ge += i * $e, fe += i * Ke, ye += i * Ye, _e += i * We, ue += i * ze, le += i * De, r += i * xe, a += i * qe, f += i * Xe, i = U[3], Fe += i * ke, ve += i * je, Le += i * Pe, Ne += i * Re, Me += i * He, we += i * Ie, ge += i * Ve, fe += i * $e, ye += i * Ke, _e += i * Ye, ue += i * We, le += i * ze, r += i * De, a += i * xe, f += i * qe, w += i * Xe, i = U[4], ve += i * ke, Le += i * je, Ne += i * Pe, Me += i * Re, we += i * He, ge += i * Ie, fe += i * Ve, ye += i * $e, _e += i * Ke, ue += i * Ye, le += i * We, r += i * ze, a += i * De, f += i * xe, w += i * qe, S += i * Xe, i = U[5], Le += i * ke, Ne += i * je, Me += i * Pe, we += i * Re, ge += i * He, fe += i * Ie, ye += i * Ve, _e += i * $e, ue += i * Ke, le += i * Ye, r += i * We, a += i * ze, f += i * De, w += i * xe, S += i * qe, I += i * Xe, i = U[6], Ne += i * ke, Me += i * je, we += i * Pe, ge += i * Re, fe += i * He, ye += i * Ie, _e += i * Ve, ue += i * $e, le += i * Ke, r += i * Ye, a += i * We, f += i * ze, w += i * De, S += i * xe, I += i * qe, D += i * Xe, i = U[7], Me += i * ke, we += i * je, ge += i * Pe, fe += i * Re, ye += i * He, _e += i * Ie, ue += i * Ve, le += i * $e, r += i * Ke, a += i * Ye, f += i * We, w += i * ze, S += i * De, I += i * xe, D += i * qe, ie += i * Xe, i = U[8], we += i * ke, ge += i * je, fe += i * Pe, ye += i * Re, _e += i * He, ue += i * Ie, le += i * Ve, r += i * $e, a += i * Ke, f += i * Ye, w += i * We, S += i * ze, I += i * De, D += i * xe, ie += i * qe, ae += i * Xe, i = U[9], ge += i * ke, fe += i * je, ye += i * Pe, _e += i * Re, ue += i * He, le += i * Ie, r += i * Ve, a += i * $e, f += i * Ke, w += i * Ye, S += i * We, I += i * ze, D += i * De, ie += i * xe, ae += i * qe, Ee += i * Xe, i = U[10], fe += i * ke, ye += i * je, _e += i * Pe, ue += i * Re, le += i * He, r += i * Ie, a += i * Ve, f += i * $e, w += i * Ke, S += i * Ye, I += i * We, D += i * ze, ie += i * De, ae += i * xe, Ee += i * qe, me += i * Xe, i = U[11], ye += i * ke, _e += i * je, ue += i * Pe, le += i * Re, r += i * He, a += i * Ie, f += i * Ve, w += i * $e, S += i * Ke, I += i * Ye, D += i * We, ie += i * ze, ae += i * De, Ee += i * xe, me += i * qe, Oe += i * Xe, i = U[12], _e += i * ke, ue += i * je, le += i * Pe, r += i * Re, a += i * He, f += i * Ie, w += i * Ve, S += i * $e, I += i * Ke, D += i * Ye, ie += i * We, ae += i * ze, Ee += i * De, me += i * xe, Oe += i * qe, ot += i * Xe, i = U[13], ue += i * ke, le += i * je, r += i * Pe, a += i * Re, f += i * He, w += i * Ie, S += i * Ve, I += i * $e, D += i * Ke, ie += i * Ye, ae += i * We, Ee += i * ze, me += i * De, Oe += i * xe, ot += i * qe, Ot += i * Xe, i = U[14], le += i * ke, r += i * je, a += i * Pe, f += i * Re, w += i * He, S += i * Ie, I += i * Ve, D += i * $e, ie += i * Ke, ae += i * Ye, Ee += i * We, me += i * ze, Oe += i * De, ot += i * xe, Ot += i * qe, $t += i * Xe, i = U[15], r += i * ke, a += i * je, f += i * Pe, w += i * Re, S += i * He, I += i * Ie, D += i * Ve, ie += i * $e, ae += i * Ke, Ee += i * Ye, me += i * We, Oe += i * ze, ot += i * De, Ot += i * xe, $t += i * qe, sr += i * Xe, G += 38 * a, J += 38 * f, he += 38 * w, Fe += 38 * S, ve += 38 * I, Le += 38 * D, Ne += 38 * ie, Me += 38 * ae, we += 38 * Ee, ge += 38 * me, fe += 38 * Oe, ye += 38 * ot, _e += 38 * Ot, ue += 38 * $t, le += 38 * sr, L = 1, i = G + L + 65535, L = Math.floor(i / 65536), G = i - L * 65536, i = J + L + 65535, L = Math.floor(i / 65536), J = i - L * 65536, i = he + L + 65535, L = Math.floor(i / 65536), he = i - L * 65536, i = Fe + L + 65535, L = Math.floor(i / 65536), Fe = i - L * 65536, i = ve + L + 65535, L = Math.floor(i / 65536), ve = i - L * 65536, i = Le + L + 65535, L = Math.floor(i / 65536), Le = i - L * 65536, i = Ne + L + 65535, L = Math.floor(i / 65536), Ne = i - L * 65536, i = Me + L + 65535, L = Math.floor(i / 65536), Me = i - L * 65536, i = we + L + 65535, L = Math.floor(i / 65536), we = i - L * 65536, i = ge + L + 65535, L = Math.floor(i / 65536), ge = i - L * 65536, i = fe + L + 65535, L = Math.floor(i / 65536), fe = i - L * 65536, i = ye + L + 65535, L = Math.floor(i / 65536), ye = i - L * 65536, i = _e + L + 65535, L = Math.floor(i / 65536), _e = i - L * 65536, i = ue + L + 65535, L = Math.floor(i / 65536), ue = i - L * 65536, i = le + L + 65535, L = Math.floor(i / 65536), le = i - L * 65536, i = r + L + 65535, L = Math.floor(i / 65536), r = i - L * 65536, G += L - 1 + 37 * (L - 1), L = 1, i = G + L + 65535, L = Math.floor(i / 65536), G = i - L * 65536, i = J + L + 65535, L = Math.floor(i / 65536), J = i - L * 65536, i = he + L + 65535, L = Math.floor(i / 65536), he = i - L * 65536, i = Fe + L + 65535, L = Math.floor(i / 65536), Fe = i - L * 65536, i = ve + L + 65535, L = Math.floor(i / 65536), ve = i - L * 65536, i = Le + L + 65535, L = Math.floor(i / 65536), Le = i - L * 65536, i = Ne + L + 65535, L = Math.floor(i / 65536), Ne = i - L * 65536, i = Me + L + 65535, L = Math.floor(i / 65536), Me = i - L * 65536, i = we + L + 65535, L = Math.floor(i / 65536), we = i - L * 65536, i = ge + L + 65535, L = Math.floor(i / 65536), ge = i - L * 65536, i = fe + L + 65535, L = Math.floor(i / 65536), fe = i - L * 65536, i = ye + L + 65535, L = Math.floor(i / 65536), ye = i - L * 65536, i = _e + L + 65535, L = Math.floor(i / 65536), _e = i - L * 65536, i = ue + L + 65535, L = Math.floor(i / 65536), ue = i - L * 65536, i = le + L + 65535, L = Math.floor(i / 65536), le = i - L * 65536, i = r + L + 65535, L = Math.floor(i / 65536), r = i - L * 65536, G += L - 1 + 37 * (L - 1), j[0] = G, j[1] = J, j[2] = he, j[3] = Fe, j[4] = ve, j[5] = Le, j[6] = Ne, j[7] = Me, j[8] = we, j[9] = ge, j[10] = fe, j[11] = ye, j[12] = _e, j[13] = ue, j[14] = le, j[15] = r;
  }
  function p(j, U) {
    o(j, U, U);
  }
  function K(j, U) {
    const M = c();
    let i;
    for (i = 0; i < 16; i++)
      M[i] = U[i];
    for (i = 253; i >= 0; i--)
      p(M, M), i !== 2 && i !== 4 && o(M, M, U);
    for (i = 0; i < 16; i++)
      j[i] = M[i];
  }
  function q(j, U) {
    const M = c();
    let i;
    for (i = 0; i < 16; i++)
      M[i] = U[i];
    for (i = 250; i >= 0; i--)
      p(M, M), i !== 1 && o(M, M, U);
    for (i = 0; i < 16; i++)
      j[i] = M[i];
  }
  function Q(j, U) {
    const M = c(), i = c(), L = c(), G = c(), J = c(), he = c(), Fe = c(), ve = c(), Le = c();
    E(M, j[1], j[0]), E(Le, U[1], U[0]), o(M, M, Le), m(i, j[0], j[1]), m(Le, U[0], U[1]), o(i, i, Le), o(L, j[3], U[3]), o(L, L, y), o(G, j[2], U[2]), m(G, G, G), E(J, i, M), E(he, G, L), m(Fe, G, L), m(ve, i, M), o(j[0], J, he), o(j[1], ve, Fe), o(j[2], Fe, he), o(j[3], J, ve);
  }
  function ee(j, U, M) {
    for (let i = 0; i < 4; i++)
      k(j[i], U[i], M);
  }
  function ne(j, U) {
    const M = c(), i = c(), L = c();
    K(L, U[2]), o(M, U[0], L), o(i, U[1], L), H(j, i), j[31] ^= T(M) << 7;
  }
  function d(j, U, M) {
    O(j[0], b), O(j[1], s), O(j[2], s), O(j[3], b);
    for (let i = 255; i >= 0; --i) {
      const L = M[i / 8 | 0] >> (i & 7) & 1;
      ee(j, U, L), Q(U, j), Q(j, j), ee(j, U, L);
    }
  }
  function F(j, U) {
    const M = [c(), c(), c(), c()];
    O(M[0], v), O(M[1], N), O(M[2], s), o(M[3], v, N), d(j, M, U);
  }
  function V(j) {
    if (j.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const U = (0, n.hash)(j);
    U[0] &= 248, U[31] &= 127, U[31] |= 64;
    const M = new Uint8Array(32), i = [c(), c(), c(), c()];
    F(i, U), ne(M, i);
    const L = new Uint8Array(64);
    return L.set(j), L.set(M, 32), { publicKey: M, secretKey: L };
  }
  e.generateKeyPairFromSeed = V;
  function Y(j) {
    const U = (0, t.randomBytes)(32, j), M = V(U);
    return (0, u.wipe)(U), M;
  }
  e.generateKeyPair = Y;
  function R(j) {
    if (j.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(j.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = R;
  const P = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
  function W(j, U) {
    let M, i, L, G;
    for (i = 63; i >= 32; --i) {
      for (M = 0, L = i - 32, G = i - 12; L < G; ++L)
        U[L] += M - 16 * U[i] * P[L - (i - 32)], M = Math.floor((U[L] + 128) / 256), U[L] -= M * 256;
      U[L] += M, U[i] = 0;
    }
    for (M = 0, L = 0; L < 32; L++)
      U[L] += M - (U[31] >> 4) * P[L], M = U[L] >> 8, U[L] &= 255;
    for (L = 0; L < 32; L++)
      U[L] -= M * P[L];
    for (i = 0; i < 32; i++)
      U[i + 1] += U[i] >> 8, j[i] = U[i] & 255;
  }
  function z(j) {
    const U = new Float64Array(64);
    for (let M = 0; M < 64; M++)
      U[M] = j[M];
    for (let M = 0; M < 64; M++)
      j[M] = 0;
    W(j, U);
  }
  function oe(j, U) {
    const M = new Float64Array(64), i = [c(), c(), c(), c()], L = (0, n.hash)(j.subarray(0, 32));
    L[0] &= 248, L[31] &= 127, L[31] |= 64;
    const G = new Uint8Array(64);
    G.set(L.subarray(32), 32);
    const J = new n.SHA512();
    J.update(G.subarray(32)), J.update(U);
    const he = J.digest();
    J.clean(), z(he), F(i, he), ne(G, i), J.reset(), J.update(G.subarray(0, 32)), J.update(j.subarray(32)), J.update(U);
    const Fe = J.digest();
    z(Fe);
    for (let ve = 0; ve < 32; ve++)
      M[ve] = he[ve];
    for (let ve = 0; ve < 32; ve++)
      for (let Le = 0; Le < 32; Le++)
        M[ve + Le] += Fe[ve] * L[Le];
    return W(G.subarray(32), M), G;
  }
  e.sign = oe;
  function Z(j, U) {
    const M = c(), i = c(), L = c(), G = c(), J = c(), he = c(), Fe = c();
    return O(j[2], s), _(j[1], U), p(L, j[1]), o(G, L, l), E(L, L, j[2]), m(G, j[2], G), p(J, G), p(he, J), o(Fe, he, J), o(M, Fe, L), o(M, M, G), q(M, M), o(M, M, L), o(M, M, G), o(M, M, G), o(j[0], M, G), p(i, j[0]), o(i, i, G), B(i, L) && o(j[0], j[0], C), p(i, j[0]), o(i, i, G), B(i, L) ? -1 : (T(j[0]) === U[31] >> 7 && E(j[0], b, j[0]), o(j[3], j[0], j[1]), 0);
  }
  function se(j, U, M) {
    const i = new Uint8Array(32), L = [c(), c(), c(), c()], G = [c(), c(), c(), c()];
    if (M.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (Z(G, j))
      return !1;
    const J = new n.SHA512();
    J.update(M.subarray(0, 32)), J.update(j), J.update(U);
    const he = J.digest();
    return z(he), d(L, G, he), F(G, M.subarray(32)), Q(L, G), ne(i, L), !X(M, i);
  }
  e.verify = se;
  function te(j) {
    let U = [c(), c(), c(), c()];
    if (Z(U, j))
      throw new Error("Ed25519: invalid public key");
    let M = c(), i = c(), L = U[1];
    m(M, s, L), E(i, s, L), K(i, i), o(M, M, i);
    let G = new Uint8Array(32);
    return H(G, M), G;
  }
  e.convertPublicKeyToX25519 = te;
  function de(j) {
    const U = (0, n.hash)(j.subarray(0, 32));
    U[0] &= 248, U[31] &= 127, U[31] |= 64;
    const M = new Uint8Array(U.subarray(0, 32));
    return (0, u.wipe)(U), M;
  }
  e.convertSecretKeyToX25519 = de;
}(gs);
function qs(e, t) {
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
  var s = e.length, l = e.charAt(0), y = Math.log(s) / Math.log(256), v = Math.log(256) / Math.log(s);
  function N(A) {
    if (A instanceof Uint8Array || (ArrayBuffer.isView(A) ? A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength) : Array.isArray(A) && (A = Uint8Array.from(A))), !(A instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (A.length === 0)
      return "";
    for (var k = 0, H = 0, X = 0, B = A.length; X !== B && A[X] === 0; )
      X++, k++;
    for (var T = (B - X) * v + 1 >>> 0, _ = new Uint8Array(T); X !== B; ) {
      for (var m = A[X], E = 0, o = T - 1; (m !== 0 || E < H) && o !== -1; o--, E++)
        m += 256 * _[o] >>> 0, _[o] = m % s >>> 0, m = m / s >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      H = E, X++;
    }
    for (var p = T - H; p !== T && _[p] === 0; )
      p++;
    for (var K = l.repeat(k); p < T; ++p)
      K += e.charAt(_[p]);
    return K;
  }
  function C(A) {
    if (typeof A != "string")
      throw new TypeError("Expected String");
    if (A.length === 0)
      return new Uint8Array();
    var k = 0;
    if (A[k] !== " ") {
      for (var H = 0, X = 0; A[k] === l; )
        H++, k++;
      for (var B = (A.length - k) * y + 1 >>> 0, T = new Uint8Array(B); A[k]; ) {
        var _ = n[A.charCodeAt(k)];
        if (_ === 255)
          return;
        for (var m = 0, E = B - 1; (_ !== 0 || m < X) && E !== -1; E--, m++)
          _ += s * T[E] >>> 0, T[E] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        X = m, k++;
      }
      if (A[k] !== " ") {
        for (var o = B - X; o !== B && T[o] === 0; )
          o++;
        for (var p = new Uint8Array(H + (B - o)), K = H; o !== B; )
          p[K++] = T[o++];
        return p;
      }
    }
  }
  function O(A) {
    var k = C(A);
    if (k)
      return k;
    throw new Error(`Non-${t} character`);
  }
  return { encode: N, decodeUnsafe: C, decode: O };
}
var Xs = qs, Zs = Xs;
const Po = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Gs = (e) => new TextEncoder().encode(e), Qs = (e) => new TextDecoder().decode(e);
class Js {
  constructor(t, n, u) {
    this.name = t, this.prefix = n, this.baseEncode = u;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class eu {
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
    return Ro(this, t);
  }
}
class tu {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Ro(this, t);
  }
  decode(t) {
    const n = t[0], u = this.decoders[n];
    if (u)
      return u.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ro = (e, t) => new tu({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class ru {
  constructor(t, n, u, c) {
    this.name = t, this.prefix = n, this.baseEncode = u, this.baseDecode = c, this.encoder = new Js(t, n, u), this.decoder = new eu(t, n, c);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Or = ({ name: e, prefix: t, encode: n, decode: u }) => new ru(e, t, n, u), ir = ({ prefix: e, name: t, alphabet: n }) => {
  const { encode: u, decode: c } = Zs(n, t);
  return Or({ prefix: e, name: t, encode: u, decode: (h) => Po(c(h)) });
}, nu = (e, t, n, u) => {
  const c = {};
  for (let v = 0; v < t.length; ++v)
    c[t[v]] = v;
  let h = e.length;
  for (; e[h - 1] === "="; )
    --h;
  const b = new Uint8Array(h * n / 8 | 0);
  let s = 0, l = 0, y = 0;
  for (let v = 0; v < h; ++v) {
    const N = c[e[v]];
    if (N === void 0)
      throw new SyntaxError(`Non-${u} character`);
    l = l << n | N, s += n, s >= 8 && (s -= 8, b[y++] = 255 & l >> s);
  }
  if (s >= n || 255 & l << 8 - s)
    throw new SyntaxError("Unexpected end of data");
  return b;
}, ou = (e, t, n) => {
  const u = t[t.length - 1] === "=", c = (1 << n) - 1;
  let h = "", b = 0, s = 0;
  for (let l = 0; l < e.length; ++l)
    for (s = s << 8 | e[l], b += 8; b > n; )
      b -= n, h += t[c & s >> b];
  if (b && (h += t[c & s << n - b]), u)
    for (; h.length * n & 7; )
      h += "=";
  return h;
}, Qe = ({ name: e, prefix: t, bitsPerChar: n, alphabet: u }) => Or({ prefix: t, name: e, encode(c) {
  return ou(c, u, n);
}, decode(c) {
  return nu(c, u, n, e);
} }), iu = Or({ prefix: "\0", name: "identity", encode: (e) => Qs(e), decode: (e) => Gs(e) });
var au = Object.freeze({ __proto__: null, identity: iu });
const su = Qe({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var uu = Object.freeze({ __proto__: null, base2: su });
const fu = Qe({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var cu = Object.freeze({ __proto__: null, base8: fu });
const hu = ir({ prefix: "9", name: "base10", alphabet: "0123456789" });
var lu = Object.freeze({ __proto__: null, base10: hu });
const pu = Qe({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), du = Qe({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var yu = Object.freeze({ __proto__: null, base16: pu, base16upper: du });
const gu = Qe({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), _u = Qe({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), bu = Qe({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), vu = Qe({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), wu = Qe({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), mu = Qe({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Eu = Qe({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Fu = Qe({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Lu = Qe({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Au = Object.freeze({ __proto__: null, base32: gu, base32upper: _u, base32pad: bu, base32padupper: vu, base32hex: wu, base32hexupper: mu, base32hexpad: Eu, base32hexpadupper: Fu, base32z: Lu });
const Ou = ir({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Su = ir({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Bu = Object.freeze({ __proto__: null, base36: Ou, base36upper: Su });
const Tu = ir({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Mu = ir({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var xu = Object.freeze({ __proto__: null, base58btc: Tu, base58flickr: Mu });
const Nu = Qe({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Uu = Qe({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), ju = Qe({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Iu = Qe({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Cu = Object.freeze({ __proto__: null, base64: Nu, base64pad: Uu, base64url: ju, base64urlpad: Iu });
const Ho = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), ku = Ho.reduce((e, t, n) => (e[n] = t, e), []), Pu = Ho.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
function Ru(e) {
  return e.reduce((t, n) => (t += ku[n], t), "");
}
function Hu(e) {
  const t = [];
  for (const n of e) {
    const u = Pu[n.codePointAt(0)];
    if (u === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    t.push(u);
  }
  return new Uint8Array(t);
}
const Du = Or({ prefix: "\u{1F680}", name: "base256emoji", encode: Ru, decode: Hu });
var zu = Object.freeze({ __proto__: null, base256emoji: Du }), Vu = Do, oo = 128, $u = 127, Ku = ~$u, Yu = Math.pow(2, 31);
function Do(e, t, n) {
  t = t || [], n = n || 0;
  for (var u = n; e >= Yu; )
    t[n++] = e & 255 | oo, e /= 128;
  for (; e & Ku; )
    t[n++] = e & 255 | oo, e >>>= 7;
  return t[n] = e | 0, Do.bytes = n - u + 1, t;
}
var Wu = Kr, qu = 128, io = 127;
function Kr(e, u) {
  var n = 0, u = u || 0, c = 0, h = u, b, s = e.length;
  do {
    if (h >= s)
      throw Kr.bytes = 0, new RangeError("Could not decode varint");
    b = e[h++], n += c < 28 ? (b & io) << c : (b & io) * Math.pow(2, c), c += 7;
  } while (b >= qu);
  return Kr.bytes = h - u, n;
}
var Xu = Math.pow(2, 7), Zu = Math.pow(2, 14), Gu = Math.pow(2, 21), Qu = Math.pow(2, 28), Ju = Math.pow(2, 35), e1 = Math.pow(2, 42), t1 = Math.pow(2, 49), r1 = Math.pow(2, 56), n1 = Math.pow(2, 63), o1 = function(e) {
  return e < Xu ? 1 : e < Zu ? 2 : e < Gu ? 3 : e < Qu ? 4 : e < Ju ? 5 : e < e1 ? 6 : e < t1 ? 7 : e < r1 ? 8 : e < n1 ? 9 : 10;
}, i1 = { encode: Vu, decode: Wu, encodingLength: o1 }, zo = i1;
const ao = (e, t, n = 0) => (zo.encode(e, t, n), t), so = (e) => zo.encodingLength(e), Yr = (e, t) => {
  const n = t.byteLength, u = so(e), c = u + so(n), h = new Uint8Array(c + n);
  return ao(e, h, 0), ao(n, h, u), h.set(t, c), new a1(e, n, t, h);
};
class a1 {
  constructor(t, n, u, c) {
    this.code = t, this.size = n, this.digest = u, this.bytes = c;
  }
}
const Vo = ({ name: e, code: t, encode: n }) => new s1(e, t, n);
class s1 {
  constructor(t, n, u) {
    this.name = t, this.code = n, this.encode = u;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const n = this.encode(t);
      return n instanceof Uint8Array ? Yr(this.code, n) : n.then((u) => Yr(this.code, u));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const $o = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), u1 = Vo({ name: "sha2-256", code: 18, encode: $o("SHA-256") }), f1 = Vo({ name: "sha2-512", code: 19, encode: $o("SHA-512") });
var c1 = Object.freeze({ __proto__: null, sha256: u1, sha512: f1 });
const Ko = 0, h1 = "identity", Yo = Po, l1 = (e) => Yr(Ko, Yo(e)), p1 = { code: Ko, name: h1, encode: Yo, digest: l1 };
var d1 = Object.freeze({ __proto__: null, identity: p1 });
new TextEncoder(), new TextDecoder();
({ ...au, ...uu, ...cu, ...lu, ...yu, ...Au, ...Bu, ...xu, ...Cu, ...zu });
({ ...c1, ...d1 });
var y1 = {}, Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
var tt = pe, Wr = at, g1 = 20;
function _1(e, t, n) {
  for (var u = 1634760805, c = 857760878, h = 2036477234, b = 1797285236, s = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], l = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], y = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], v = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], N = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], C = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], O = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], A = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], k = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], H = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], X = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], B = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], T = u, _ = c, m = h, E = b, o = s, p = l, K = y, q = v, Q = N, ee = C, ne = O, d = A, F = k, V = H, Y = X, R = B, P = 0; P < g1; P += 2)
    T = T + o | 0, F ^= T, F = F >>> 32 - 16 | F << 16, Q = Q + F | 0, o ^= Q, o = o >>> 32 - 12 | o << 12, _ = _ + p | 0, V ^= _, V = V >>> 32 - 16 | V << 16, ee = ee + V | 0, p ^= ee, p = p >>> 32 - 12 | p << 12, m = m + K | 0, Y ^= m, Y = Y >>> 32 - 16 | Y << 16, ne = ne + Y | 0, K ^= ne, K = K >>> 32 - 12 | K << 12, E = E + q | 0, R ^= E, R = R >>> 32 - 16 | R << 16, d = d + R | 0, q ^= d, q = q >>> 32 - 12 | q << 12, m = m + K | 0, Y ^= m, Y = Y >>> 32 - 8 | Y << 8, ne = ne + Y | 0, K ^= ne, K = K >>> 32 - 7 | K << 7, E = E + q | 0, R ^= E, R = R >>> 32 - 8 | R << 8, d = d + R | 0, q ^= d, q = q >>> 32 - 7 | q << 7, _ = _ + p | 0, V ^= _, V = V >>> 32 - 8 | V << 8, ee = ee + V | 0, p ^= ee, p = p >>> 32 - 7 | p << 7, T = T + o | 0, F ^= T, F = F >>> 32 - 8 | F << 8, Q = Q + F | 0, o ^= Q, o = o >>> 32 - 7 | o << 7, T = T + p | 0, R ^= T, R = R >>> 32 - 16 | R << 16, ne = ne + R | 0, p ^= ne, p = p >>> 32 - 12 | p << 12, _ = _ + K | 0, F ^= _, F = F >>> 32 - 16 | F << 16, d = d + F | 0, K ^= d, K = K >>> 32 - 12 | K << 12, m = m + q | 0, V ^= m, V = V >>> 32 - 16 | V << 16, Q = Q + V | 0, q ^= Q, q = q >>> 32 - 12 | q << 12, E = E + o | 0, Y ^= E, Y = Y >>> 32 - 16 | Y << 16, ee = ee + Y | 0, o ^= ee, o = o >>> 32 - 12 | o << 12, m = m + q | 0, V ^= m, V = V >>> 32 - 8 | V << 8, Q = Q + V | 0, q ^= Q, q = q >>> 32 - 7 | q << 7, E = E + o | 0, Y ^= E, Y = Y >>> 32 - 8 | Y << 8, ee = ee + Y | 0, o ^= ee, o = o >>> 32 - 7 | o << 7, _ = _ + K | 0, F ^= _, F = F >>> 32 - 8 | F << 8, d = d + F | 0, K ^= d, K = K >>> 32 - 7 | K << 7, T = T + p | 0, R ^= T, R = R >>> 32 - 8 | R << 8, ne = ne + R | 0, p ^= ne, p = p >>> 32 - 7 | p << 7;
  tt.writeUint32LE(T + u | 0, e, 0), tt.writeUint32LE(_ + c | 0, e, 4), tt.writeUint32LE(m + h | 0, e, 8), tt.writeUint32LE(E + b | 0, e, 12), tt.writeUint32LE(o + s | 0, e, 16), tt.writeUint32LE(p + l | 0, e, 20), tt.writeUint32LE(K + y | 0, e, 24), tt.writeUint32LE(q + v | 0, e, 28), tt.writeUint32LE(Q + N | 0, e, 32), tt.writeUint32LE(ee + C | 0, e, 36), tt.writeUint32LE(ne + O | 0, e, 40), tt.writeUint32LE(d + A | 0, e, 44), tt.writeUint32LE(F + k | 0, e, 48), tt.writeUint32LE(V + H | 0, e, 52), tt.writeUint32LE(Y + X | 0, e, 56), tt.writeUint32LE(R + B | 0, e, 60);
}
function Wo(e, t, n, u, c) {
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
  for (var s = new Uint8Array(64), l = 0; l < n.length; l += 64) {
    _1(s, h, e);
    for (var y = l; y < l + 64 && y < n.length; y++)
      u[y] = n[y] ^ s[y - l];
    v1(h, 0, b);
  }
  return Wr.wipe(s), c === 0 && Wr.wipe(h), u;
}
Sr.streamXOR = Wo;
function b1(e, t, n, u) {
  return u === void 0 && (u = 0), Wr.wipe(n), Wo(e, t, n, n, u);
}
Sr.stream = b1;
function v1(e, t, n) {
  for (var u = 1; n--; )
    u = u + (e[t] & 255) | 0, e[t] = u & 255, u >>>= 8, t++;
  if (u > 0)
    throw new Error("ChaCha: counter overflow");
}
var uo = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
function w1(e, t, n) {
  return ~(e - 1) & t | e - 1 & n;
}
Lt.select = w1;
function m1(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
Lt.lessOrEqual = m1;
function qo(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var n = 0, u = 0; u < e.length; u++)
    n |= e[u] ^ t[u];
  return 1 & n - 1 >>> 8;
}
Lt.compare = qo;
function E1(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : qo(e, t) !== 0;
}
Lt.equal = E1, function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Lt, n = at;
  e.DIGEST_LENGTH = 16;
  var u = function() {
    function b(s) {
      this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
      var l = s[0] | s[1] << 8;
      this._r[0] = l & 8191;
      var y = s[2] | s[3] << 8;
      this._r[1] = (l >>> 13 | y << 3) & 8191;
      var v = s[4] | s[5] << 8;
      this._r[2] = (y >>> 10 | v << 6) & 7939;
      var N = s[6] | s[7] << 8;
      this._r[3] = (v >>> 7 | N << 9) & 8191;
      var C = s[8] | s[9] << 8;
      this._r[4] = (N >>> 4 | C << 12) & 255, this._r[5] = C >>> 1 & 8190;
      var O = s[10] | s[11] << 8;
      this._r[6] = (C >>> 14 | O << 2) & 8191;
      var A = s[12] | s[13] << 8;
      this._r[7] = (O >>> 11 | A << 5) & 8065;
      var k = s[14] | s[15] << 8;
      this._r[8] = (A >>> 8 | k << 8) & 8191, this._r[9] = k >>> 5 & 127, this._pad[0] = s[16] | s[17] << 8, this._pad[1] = s[18] | s[19] << 8, this._pad[2] = s[20] | s[21] << 8, this._pad[3] = s[22] | s[23] << 8, this._pad[4] = s[24] | s[25] << 8, this._pad[5] = s[26] | s[27] << 8, this._pad[6] = s[28] | s[29] << 8, this._pad[7] = s[30] | s[31] << 8;
    }
    return b.prototype._blocks = function(s, l, y) {
      for (var v = this._fin ? 0 : 2048, N = this._h[0], C = this._h[1], O = this._h[2], A = this._h[3], k = this._h[4], H = this._h[5], X = this._h[6], B = this._h[7], T = this._h[8], _ = this._h[9], m = this._r[0], E = this._r[1], o = this._r[2], p = this._r[3], K = this._r[4], q = this._r[5], Q = this._r[6], ee = this._r[7], ne = this._r[8], d = this._r[9]; y >= 16; ) {
        var F = s[l + 0] | s[l + 1] << 8;
        N += F & 8191;
        var V = s[l + 2] | s[l + 3] << 8;
        C += (F >>> 13 | V << 3) & 8191;
        var Y = s[l + 4] | s[l + 5] << 8;
        O += (V >>> 10 | Y << 6) & 8191;
        var R = s[l + 6] | s[l + 7] << 8;
        A += (Y >>> 7 | R << 9) & 8191;
        var P = s[l + 8] | s[l + 9] << 8;
        k += (R >>> 4 | P << 12) & 8191, H += P >>> 1 & 8191;
        var W = s[l + 10] | s[l + 11] << 8;
        X += (P >>> 14 | W << 2) & 8191;
        var z = s[l + 12] | s[l + 13] << 8;
        B += (W >>> 11 | z << 5) & 8191;
        var oe = s[l + 14] | s[l + 15] << 8;
        T += (z >>> 8 | oe << 8) & 8191, _ += oe >>> 5 | v;
        var Z = 0, se = Z;
        se += N * m, se += C * (5 * d), se += O * (5 * ne), se += A * (5 * ee), se += k * (5 * Q), Z = se >>> 13, se &= 8191, se += H * (5 * q), se += X * (5 * K), se += B * (5 * p), se += T * (5 * o), se += _ * (5 * E), Z += se >>> 13, se &= 8191;
        var te = Z;
        te += N * E, te += C * m, te += O * (5 * d), te += A * (5 * ne), te += k * (5 * ee), Z = te >>> 13, te &= 8191, te += H * (5 * Q), te += X * (5 * q), te += B * (5 * K), te += T * (5 * p), te += _ * (5 * o), Z += te >>> 13, te &= 8191;
        var de = Z;
        de += N * o, de += C * E, de += O * m, de += A * (5 * d), de += k * (5 * ne), Z = de >>> 13, de &= 8191, de += H * (5 * ee), de += X * (5 * Q), de += B * (5 * q), de += T * (5 * K), de += _ * (5 * p), Z += de >>> 13, de &= 8191;
        var j = Z;
        j += N * p, j += C * o, j += O * E, j += A * m, j += k * (5 * d), Z = j >>> 13, j &= 8191, j += H * (5 * ne), j += X * (5 * ee), j += B * (5 * Q), j += T * (5 * q), j += _ * (5 * K), Z += j >>> 13, j &= 8191;
        var U = Z;
        U += N * K, U += C * p, U += O * o, U += A * E, U += k * m, Z = U >>> 13, U &= 8191, U += H * (5 * d), U += X * (5 * ne), U += B * (5 * ee), U += T * (5 * Q), U += _ * (5 * q), Z += U >>> 13, U &= 8191;
        var M = Z;
        M += N * q, M += C * K, M += O * p, M += A * o, M += k * E, Z = M >>> 13, M &= 8191, M += H * m, M += X * (5 * d), M += B * (5 * ne), M += T * (5 * ee), M += _ * (5 * Q), Z += M >>> 13, M &= 8191;
        var i = Z;
        i += N * Q, i += C * q, i += O * K, i += A * p, i += k * o, Z = i >>> 13, i &= 8191, i += H * E, i += X * m, i += B * (5 * d), i += T * (5 * ne), i += _ * (5 * ee), Z += i >>> 13, i &= 8191;
        var L = Z;
        L += N * ee, L += C * Q, L += O * q, L += A * K, L += k * p, Z = L >>> 13, L &= 8191, L += H * o, L += X * E, L += B * m, L += T * (5 * d), L += _ * (5 * ne), Z += L >>> 13, L &= 8191;
        var G = Z;
        G += N * ne, G += C * ee, G += O * Q, G += A * q, G += k * K, Z = G >>> 13, G &= 8191, G += H * p, G += X * o, G += B * E, G += T * m, G += _ * (5 * d), Z += G >>> 13, G &= 8191;
        var J = Z;
        J += N * d, J += C * ne, J += O * ee, J += A * Q, J += k * q, Z = J >>> 13, J &= 8191, J += H * K, J += X * p, J += B * o, J += T * E, J += _ * m, Z += J >>> 13, J &= 8191, Z = (Z << 2) + Z | 0, Z = Z + se | 0, se = Z & 8191, Z = Z >>> 13, te += Z, N = se, C = te, O = de, A = j, k = U, H = M, X = i, B = L, T = G, _ = J, l += 16, y -= 16;
      }
      this._h[0] = N, this._h[1] = C, this._h[2] = O, this._h[3] = A, this._h[4] = k, this._h[5] = H, this._h[6] = X, this._h[7] = B, this._h[8] = T, this._h[9] = _;
    }, b.prototype.finish = function(s, l) {
      l === void 0 && (l = 0);
      var y = new Uint16Array(10), v, N, C, O;
      if (this._leftover) {
        for (O = this._leftover, this._buffer[O++] = 1; O < 16; O++)
          this._buffer[O] = 0;
        this._fin = 1, this._blocks(this._buffer, 0, 16);
      }
      for (v = this._h[1] >>> 13, this._h[1] &= 8191, O = 2; O < 10; O++)
        this._h[O] += v, v = this._h[O] >>> 13, this._h[O] &= 8191;
      for (this._h[0] += v * 5, v = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += v, v = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += v, y[0] = this._h[0] + 5, v = y[0] >>> 13, y[0] &= 8191, O = 1; O < 10; O++)
        y[O] = this._h[O] + v, v = y[O] >>> 13, y[O] &= 8191;
      for (y[9] -= 1 << 13, N = (v ^ 1) - 1, O = 0; O < 10; O++)
        y[O] &= N;
      for (N = ~N, O = 0; O < 10; O++)
        this._h[O] = this._h[O] & N | y[O];
      for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, C = this._h[0] + this._pad[0], this._h[0] = C & 65535, O = 1; O < 8; O++)
        C = (this._h[O] + this._pad[O] | 0) + (C >>> 16) | 0, this._h[O] = C & 65535;
      return s[l + 0] = this._h[0] >>> 0, s[l + 1] = this._h[0] >>> 8, s[l + 2] = this._h[1] >>> 0, s[l + 3] = this._h[1] >>> 8, s[l + 4] = this._h[2] >>> 0, s[l + 5] = this._h[2] >>> 8, s[l + 6] = this._h[3] >>> 0, s[l + 7] = this._h[3] >>> 8, s[l + 8] = this._h[4] >>> 0, s[l + 9] = this._h[4] >>> 8, s[l + 10] = this._h[5] >>> 0, s[l + 11] = this._h[5] >>> 8, s[l + 12] = this._h[6] >>> 0, s[l + 13] = this._h[6] >>> 8, s[l + 14] = this._h[7] >>> 0, s[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
    }, b.prototype.update = function(s) {
      var l = 0, y = s.length, v;
      if (this._leftover) {
        v = 16 - this._leftover, v > y && (v = y);
        for (var N = 0; N < v; N++)
          this._buffer[this._leftover + N] = s[l + N];
        if (y -= v, l += v, this._leftover += v, this._leftover < 16)
          return this;
        this._blocks(this._buffer, 0, 16), this._leftover = 0;
      }
      if (y >= 16 && (v = y - y % 16, this._blocks(s, l, v), l += v, y -= v), y) {
        for (var N = 0; N < y; N++)
          this._buffer[this._leftover + N] = s[l + N];
        this._leftover += y;
      }
      return this;
    }, b.prototype.digest = function() {
      if (this._finished)
        throw new Error("Poly1305 was finished");
      var s = new Uint8Array(16);
      return this.finish(s), s;
    }, b.prototype.clean = function() {
      return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
    }, b;
  }();
  e.Poly1305 = u;
  function c(b, s) {
    var l = new u(b);
    l.update(s);
    var y = l.digest();
    return l.clean(), y;
  }
  e.oneTimeAuth = c;
  function h(b, s) {
    return b.length !== e.DIGEST_LENGTH || s.length !== e.DIGEST_LENGTH ? !1 : t.equal(b, s);
  }
  e.equal = h;
}(uo), function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Sr, n = uo, u = at, c = pe, h = Lt;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var b = new Uint8Array(16), s = function() {
    function l(y) {
      if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, y.length !== e.KEY_LENGTH)
        throw new Error("ChaCha20Poly1305 needs 32-byte key");
      this._key = new Uint8Array(y);
    }
    return l.prototype.seal = function(y, v, N, C) {
      if (y.length > 16)
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      var O = new Uint8Array(16);
      O.set(y, O.length - y.length);
      var A = new Uint8Array(32);
      t.stream(this._key, O, A, 4);
      var k = v.length + this.tagLength, H;
      if (C) {
        if (C.length !== k)
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        H = C;
      } else
        H = new Uint8Array(k);
      return t.streamXOR(this._key, O, v, H, 4), this._authenticate(H.subarray(H.length - this.tagLength, H.length), A, H.subarray(0, H.length - this.tagLength), N), u.wipe(O), H;
    }, l.prototype.open = function(y, v, N, C) {
      if (y.length > 16)
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      if (v.length < this.tagLength)
        return null;
      var O = new Uint8Array(16);
      O.set(y, O.length - y.length);
      var A = new Uint8Array(32);
      t.stream(this._key, O, A, 4);
      var k = new Uint8Array(this.tagLength);
      if (this._authenticate(k, A, v.subarray(0, v.length - this.tagLength), N), !h.equal(k, v.subarray(v.length - this.tagLength, v.length)))
        return null;
      var H = v.length - this.tagLength, X;
      if (C) {
        if (C.length !== H)
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        X = C;
      } else
        X = new Uint8Array(H);
      return t.streamXOR(this._key, O, v.subarray(0, v.length - this.tagLength), X, 4), u.wipe(O), X;
    }, l.prototype.clean = function() {
      return u.wipe(this._key), this;
    }, l.prototype._authenticate = function(y, v, N, C) {
      var O = new n.Poly1305(v);
      C && (O.update(C), C.length % 16 > 0 && O.update(b.subarray(C.length % 16))), O.update(N), N.length % 16 > 0 && O.update(b.subarray(N.length % 16));
      var A = new Uint8Array(8);
      C && c.writeUint64LE(C.length, A), O.update(A), c.writeUint64LE(N.length, A), O.update(A);
      for (var k = O.digest(), H = 0; H < k.length; H++)
        y[H] = k[H];
      O.clean(), u.wipe(k), u.wipe(A);
    }, l;
  }();
  e.ChaCha20Poly1305 = s;
}(y1);
var Xo = {}, nr = {}, nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
function F1(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
nn.isSerializableHash = F1, Object.defineProperty(nr, "__esModule", { value: !0 });
var lt = nn, L1 = Lt, A1 = at, Zo = function() {
  function e(t, n) {
    this._finished = !1, this._inner = new t(), this._outer = new t(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
    var u = new Uint8Array(this.blockSize);
    n.length > this.blockSize ? this._inner.update(n).finish(u).clean() : u.set(n);
    for (var c = 0; c < u.length; c++)
      u[c] ^= 54;
    this._inner.update(u);
    for (var c = 0; c < u.length; c++)
      u[c] ^= 106;
    this._outer.update(u), lt.isSerializableHash(this._inner) && lt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), A1.wipe(u);
  }
  return e.prototype.reset = function() {
    if (!lt.isSerializableHash(this._inner) || !lt.isSerializableHash(this._outer))
      throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
    return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
  }, e.prototype.clean = function() {
    lt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), lt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
  }, e.prototype.update = function(t) {
    return this._inner.update(t), this;
  }, e.prototype.finish = function(t) {
    return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
  }, e.prototype.digest = function() {
    var t = new Uint8Array(this.digestLength);
    return this.finish(t), t;
  }, e.prototype.saveState = function() {
    if (!lt.isSerializableHash(this._inner))
      throw new Error("hmac: can't saveState() because hash doesn't implement it");
    return this._inner.saveState();
  }, e.prototype.restoreState = function(t) {
    if (!lt.isSerializableHash(this._inner) || !lt.isSerializableHash(this._outer))
      throw new Error("hmac: can't restoreState() because hash doesn't implement it");
    return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
  }, e.prototype.cleanSavedState = function(t) {
    if (!lt.isSerializableHash(this._inner))
      throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
    this._inner.cleanSavedState(t);
  }, e;
}();
nr.HMAC = Zo;
function O1(e, t, n) {
  var u = new Zo(e, t);
  u.update(n);
  var c = u.digest();
  return u.clean(), c;
}
nr.hmac = O1, nr.equal = L1.equal, Object.defineProperty(Xo, "__esModule", { value: !0 });
var fo = nr, co = at, S1 = function() {
  function e(t, n, u, c) {
    u === void 0 && (u = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = c;
    var h = fo.hmac(this._hash, u, n);
    this._hmac = new fo.HMAC(t, h), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
    this._hmac.clean(), co.wipe(this._buffer), co.wipe(this._counter), this._bufpos = 0;
  }, e;
}();
Xo.HKDF = S1;
var B1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pe, n = at;
  e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
  var u = function() {
    function s() {
      this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
    }
    return s.prototype._initState = function() {
      this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
    }, s.prototype.reset = function() {
      return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
    }, s.prototype.clean = function() {
      n.wipe(this._buffer), n.wipe(this._temp), this.reset();
    }, s.prototype.update = function(l, y) {
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
    }, s.prototype.finish = function(l) {
      if (!this._finished) {
        var y = this._bytesHashed, v = this._bufferLength, N = y / 536870912 | 0, C = y << 3, O = y % 64 < 56 ? 64 : 128;
        this._buffer[v] = 128;
        for (var A = v + 1; A < O - 8; A++)
          this._buffer[A] = 0;
        t.writeUint32BE(N, this._buffer, O - 8), t.writeUint32BE(C, this._buffer, O - 4), h(this._temp, this._state, this._buffer, 0, O), this._finished = !0;
      }
      for (var A = 0; A < this.digestLength / 4; A++)
        t.writeUint32BE(this._state[A], l, A * 4);
      return this;
    }, s.prototype.digest = function() {
      var l = new Uint8Array(this.digestLength);
      return this.finish(l), l;
    }, s.prototype.saveState = function() {
      if (this._finished)
        throw new Error("SHA256: cannot save finished state");
      return { state: new Int32Array(this._state), buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0, bufferLength: this._bufferLength, bytesHashed: this._bytesHashed };
    }, s.prototype.restoreState = function(l) {
      return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
    }, s.prototype.cleanSavedState = function(l) {
      n.wipe(l.state), l.buffer && n.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
    }, s;
  }();
  e.SHA256 = u;
  var c = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
  function h(s, l, y, v, N) {
    for (; N >= 64; ) {
      for (var C = l[0], O = l[1], A = l[2], k = l[3], H = l[4], X = l[5], B = l[6], T = l[7], _ = 0; _ < 16; _++) {
        var m = v + _ * 4;
        s[_] = t.readUint32BE(y, m);
      }
      for (var _ = 16; _ < 64; _++) {
        var E = s[_ - 2], o = (E >>> 17 | E << 32 - 17) ^ (E >>> 19 | E << 32 - 19) ^ E >>> 10;
        E = s[_ - 15];
        var p = (E >>> 7 | E << 32 - 7) ^ (E >>> 18 | E << 32 - 18) ^ E >>> 3;
        s[_] = (o + s[_ - 7] | 0) + (p + s[_ - 16] | 0);
      }
      for (var _ = 0; _ < 64; _++) {
        var o = (((H >>> 6 | H << 26) ^ (H >>> 11 | H << 21) ^ (H >>> 25 | H << 7)) + (H & X ^ ~H & B) | 0) + (T + (c[_] + s[_] | 0) | 0) | 0, p = ((C >>> 2 | C << 32 - 2) ^ (C >>> 13 | C << 32 - 13) ^ (C >>> 22 | C << 32 - 22)) + (C & O ^ C & A ^ O & A) | 0;
        T = B, B = X, X = H, H = k + o | 0, k = A, A = O, O = C, C = o + p | 0;
      }
      l[0] += C, l[1] += O, l[2] += A, l[3] += k, l[4] += H, l[5] += X, l[6] += B, l[7] += T, v += 64, N -= 64;
    }
    return v;
  }
  function b(s) {
    var l = new u();
    l.update(s);
    var y = l.digest();
    return l.clean(), y;
  }
  e.hash = b;
})(B1);
var T1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = rn, n = at;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function u(_) {
    const m = new Float64Array(16);
    if (_)
      for (let E = 0; E < _.length; E++)
        m[E] = _[E];
    return m;
  }
  const c = new Uint8Array(32);
  c[0] = 9;
  const h = u([56129, 1]);
  function b(_) {
    let m = 1;
    for (let E = 0; E < 16; E++) {
      let o = _[E] + m + 65535;
      m = Math.floor(o / 65536), _[E] = o - m * 65536;
    }
    _[0] += m - 1 + 37 * (m - 1);
  }
  function s(_, m, E) {
    const o = ~(E - 1);
    for (let p = 0; p < 16; p++) {
      const K = o & (_[p] ^ m[p]);
      _[p] ^= K, m[p] ^= K;
    }
  }
  function l(_, m) {
    const E = u(), o = u();
    for (let p = 0; p < 16; p++)
      o[p] = m[p];
    b(o), b(o), b(o);
    for (let p = 0; p < 2; p++) {
      E[0] = o[0] - 65517;
      for (let q = 1; q < 15; q++)
        E[q] = o[q] - 65535 - (E[q - 1] >> 16 & 1), E[q - 1] &= 65535;
      E[15] = o[15] - 32767 - (E[14] >> 16 & 1);
      const K = E[15] >> 16 & 1;
      E[14] &= 65535, s(o, E, 1 - K);
    }
    for (let p = 0; p < 16; p++)
      _[2 * p] = o[p] & 255, _[2 * p + 1] = o[p] >> 8;
  }
  function y(_, m) {
    for (let E = 0; E < 16; E++)
      _[E] = m[2 * E] + (m[2 * E + 1] << 8);
    _[15] &= 32767;
  }
  function v(_, m, E) {
    for (let o = 0; o < 16; o++)
      _[o] = m[o] + E[o];
  }
  function N(_, m, E) {
    for (let o = 0; o < 16; o++)
      _[o] = m[o] - E[o];
  }
  function C(_, m, E) {
    let o, p, K = 0, q = 0, Q = 0, ee = 0, ne = 0, d = 0, F = 0, V = 0, Y = 0, R = 0, P = 0, W = 0, z = 0, oe = 0, Z = 0, se = 0, te = 0, de = 0, j = 0, U = 0, M = 0, i = 0, L = 0, G = 0, J = 0, he = 0, Fe = 0, ve = 0, Le = 0, Ne = 0, Me = 0, we = E[0], ge = E[1], fe = E[2], ye = E[3], _e = E[4], ue = E[5], le = E[6], r = E[7], a = E[8], f = E[9], w = E[10], S = E[11], I = E[12], D = E[13], ie = E[14], ae = E[15];
    o = m[0], K += o * we, q += o * ge, Q += o * fe, ee += o * ye, ne += o * _e, d += o * ue, F += o * le, V += o * r, Y += o * a, R += o * f, P += o * w, W += o * S, z += o * I, oe += o * D, Z += o * ie, se += o * ae, o = m[1], q += o * we, Q += o * ge, ee += o * fe, ne += o * ye, d += o * _e, F += o * ue, V += o * le, Y += o * r, R += o * a, P += o * f, W += o * w, z += o * S, oe += o * I, Z += o * D, se += o * ie, te += o * ae, o = m[2], Q += o * we, ee += o * ge, ne += o * fe, d += o * ye, F += o * _e, V += o * ue, Y += o * le, R += o * r, P += o * a, W += o * f, z += o * w, oe += o * S, Z += o * I, se += o * D, te += o * ie, de += o * ae, o = m[3], ee += o * we, ne += o * ge, d += o * fe, F += o * ye, V += o * _e, Y += o * ue, R += o * le, P += o * r, W += o * a, z += o * f, oe += o * w, Z += o * S, se += o * I, te += o * D, de += o * ie, j += o * ae, o = m[4], ne += o * we, d += o * ge, F += o * fe, V += o * ye, Y += o * _e, R += o * ue, P += o * le, W += o * r, z += o * a, oe += o * f, Z += o * w, se += o * S, te += o * I, de += o * D, j += o * ie, U += o * ae, o = m[5], d += o * we, F += o * ge, V += o * fe, Y += o * ye, R += o * _e, P += o * ue, W += o * le, z += o * r, oe += o * a, Z += o * f, se += o * w, te += o * S, de += o * I, j += o * D, U += o * ie, M += o * ae, o = m[6], F += o * we, V += o * ge, Y += o * fe, R += o * ye, P += o * _e, W += o * ue, z += o * le, oe += o * r, Z += o * a, se += o * f, te += o * w, de += o * S, j += o * I, U += o * D, M += o * ie, i += o * ae, o = m[7], V += o * we, Y += o * ge, R += o * fe, P += o * ye, W += o * _e, z += o * ue, oe += o * le, Z += o * r, se += o * a, te += o * f, de += o * w, j += o * S, U += o * I, M += o * D, i += o * ie, L += o * ae, o = m[8], Y += o * we, R += o * ge, P += o * fe, W += o * ye, z += o * _e, oe += o * ue, Z += o * le, se += o * r, te += o * a, de += o * f, j += o * w, U += o * S, M += o * I, i += o * D, L += o * ie, G += o * ae, o = m[9], R += o * we, P += o * ge, W += o * fe, z += o * ye, oe += o * _e, Z += o * ue, se += o * le, te += o * r, de += o * a, j += o * f, U += o * w, M += o * S, i += o * I, L += o * D, G += o * ie, J += o * ae, o = m[10], P += o * we, W += o * ge, z += o * fe, oe += o * ye, Z += o * _e, se += o * ue, te += o * le, de += o * r, j += o * a, U += o * f, M += o * w, i += o * S, L += o * I, G += o * D, J += o * ie, he += o * ae, o = m[11], W += o * we, z += o * ge, oe += o * fe, Z += o * ye, se += o * _e, te += o * ue, de += o * le, j += o * r, U += o * a, M += o * f, i += o * w, L += o * S, G += o * I, J += o * D, he += o * ie, Fe += o * ae, o = m[12], z += o * we, oe += o * ge, Z += o * fe, se += o * ye, te += o * _e, de += o * ue, j += o * le, U += o * r, M += o * a, i += o * f, L += o * w, G += o * S, J += o * I, he += o * D, Fe += o * ie, ve += o * ae, o = m[13], oe += o * we, Z += o * ge, se += o * fe, te += o * ye, de += o * _e, j += o * ue, U += o * le, M += o * r, i += o * a, L += o * f, G += o * w, J += o * S, he += o * I, Fe += o * D, ve += o * ie, Le += o * ae, o = m[14], Z += o * we, se += o * ge, te += o * fe, de += o * ye, j += o * _e, U += o * ue, M += o * le, i += o * r, L += o * a, G += o * f, J += o * w, he += o * S, Fe += o * I, ve += o * D, Le += o * ie, Ne += o * ae, o = m[15], se += o * we, te += o * ge, de += o * fe, j += o * ye, U += o * _e, M += o * ue, i += o * le, L += o * r, G += o * a, J += o * f, he += o * w, Fe += o * S, ve += o * I, Le += o * D, Ne += o * ie, Me += o * ae, K += 38 * te, q += 38 * de, Q += 38 * j, ee += 38 * U, ne += 38 * M, d += 38 * i, F += 38 * L, V += 38 * G, Y += 38 * J, R += 38 * he, P += 38 * Fe, W += 38 * ve, z += 38 * Le, oe += 38 * Ne, Z += 38 * Me, p = 1, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = Q + p + 65535, p = Math.floor(o / 65536), Q = o - p * 65536, o = ee + p + 65535, p = Math.floor(o / 65536), ee = o - p * 65536, o = ne + p + 65535, p = Math.floor(o / 65536), ne = o - p * 65536, o = d + p + 65535, p = Math.floor(o / 65536), d = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = Y + p + 65535, p = Math.floor(o / 65536), Y = o - p * 65536, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = P + p + 65535, p = Math.floor(o / 65536), P = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = Z + p + 65535, p = Math.floor(o / 65536), Z = o - p * 65536, o = se + p + 65535, p = Math.floor(o / 65536), se = o - p * 65536, K += p - 1 + 37 * (p - 1), p = 1, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = Q + p + 65535, p = Math.floor(o / 65536), Q = o - p * 65536, o = ee + p + 65535, p = Math.floor(o / 65536), ee = o - p * 65536, o = ne + p + 65535, p = Math.floor(o / 65536), ne = o - p * 65536, o = d + p + 65535, p = Math.floor(o / 65536), d = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = Y + p + 65535, p = Math.floor(o / 65536), Y = o - p * 65536, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = P + p + 65535, p = Math.floor(o / 65536), P = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = Z + p + 65535, p = Math.floor(o / 65536), Z = o - p * 65536, o = se + p + 65535, p = Math.floor(o / 65536), se = o - p * 65536, K += p - 1 + 37 * (p - 1), _[0] = K, _[1] = q, _[2] = Q, _[3] = ee, _[4] = ne, _[5] = d, _[6] = F, _[7] = V, _[8] = Y, _[9] = R, _[10] = P, _[11] = W, _[12] = z, _[13] = oe, _[14] = Z, _[15] = se;
  }
  function O(_, m) {
    C(_, m, m);
  }
  function A(_, m) {
    const E = u();
    for (let o = 0; o < 16; o++)
      E[o] = m[o];
    for (let o = 253; o >= 0; o--)
      O(E, E), o !== 2 && o !== 4 && C(E, E, m);
    for (let o = 0; o < 16; o++)
      _[o] = E[o];
  }
  function k(_, m) {
    const E = new Uint8Array(32), o = new Float64Array(80), p = u(), K = u(), q = u(), Q = u(), ee = u(), ne = u();
    for (let Y = 0; Y < 31; Y++)
      E[Y] = _[Y];
    E[31] = _[31] & 127 | 64, E[0] &= 248, y(o, m);
    for (let Y = 0; Y < 16; Y++)
      K[Y] = o[Y];
    p[0] = Q[0] = 1;
    for (let Y = 254; Y >= 0; --Y) {
      const R = E[Y >>> 3] >>> (Y & 7) & 1;
      s(p, K, R), s(q, Q, R), v(ee, p, q), N(p, p, q), v(q, K, Q), N(K, K, Q), O(Q, ee), O(ne, p), C(p, q, p), C(q, K, ee), v(ee, p, q), N(p, p, q), O(K, p), N(q, Q, ne), C(p, q, h), v(p, p, Q), C(q, q, p), C(p, Q, ne), C(Q, K, o), O(K, ee), s(p, K, R), s(q, Q, R);
    }
    for (let Y = 0; Y < 16; Y++)
      o[Y + 16] = p[Y], o[Y + 32] = q[Y], o[Y + 48] = K[Y], o[Y + 64] = Q[Y];
    const d = o.subarray(32), F = o.subarray(16);
    A(d, d), C(F, F, d);
    const V = new Uint8Array(32);
    return l(V, F), V;
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
  function B(_) {
    const m = (0, t.randomBytes)(32, _), E = X(m);
    return (0, n.wipe)(m), E;
  }
  e.generateKeyPair = B;
  function T(_, m, E = !1) {
    if (_.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (m.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = k(_, m);
    if (E) {
      let p = 0;
      for (let K = 0; K < o.length; K++)
        p |= o[K];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = T;
})(T1);
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 }), Be.getLocalStorage = Be.getLocalStorageOrThrow = Be.getCrypto = Be.getCryptoOrThrow = Be.getLocation = Be.getLocationOrThrow = Be.getNavigator = Be.getNavigatorOrThrow = Be.getDocument = Be.getDocumentOrThrow = Be.getFromWindowOrThrow = Be.getFromWindow = void 0;
function Ut(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
Be.getFromWindow = Ut;
function Vt(e) {
  const t = Ut(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
Be.getFromWindowOrThrow = Vt;
function M1() {
  return Vt("document");
}
Be.getDocumentOrThrow = M1;
function x1() {
  return Ut("document");
}
Be.getDocument = x1;
function N1() {
  return Vt("navigator");
}
Be.getNavigatorOrThrow = N1;
function U1() {
  return Ut("navigator");
}
Be.getNavigator = U1;
function j1() {
  return Vt("location");
}
Be.getLocationOrThrow = j1;
function I1() {
  return Ut("location");
}
Be.getLocation = I1;
function C1() {
  return Vt("crypto");
}
Be.getCryptoOrThrow = C1;
function k1() {
  return Ut("crypto");
}
Be.getCrypto = k1;
function P1() {
  return Vt("localStorage");
}
Be.getLocalStorageOrThrow = P1;
function R1() {
  return Ut("localStorage");
}
Be.getLocalStorage = R1;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.getWindowMetadata = void 0;
const ho = Be;
function H1() {
  let e, t;
  try {
    e = ho.getDocumentOrThrow(), t = ho.getLocationOrThrow();
  } catch {
    return null;
  }
  function n() {
    const v = e.getElementsByTagName("link"), N = [];
    for (let C = 0; C < v.length; C++) {
      const O = v[C], A = O.getAttribute("rel");
      if (A && A.toLowerCase().indexOf("icon") > -1) {
        const k = O.getAttribute("href");
        if (k)
          if (k.toLowerCase().indexOf("https:") === -1 && k.toLowerCase().indexOf("http:") === -1 && k.indexOf("//") !== 0) {
            let H = t.protocol + "//" + t.host;
            if (k.indexOf("/") === 0)
              H += k;
            else {
              const X = t.pathname.split("/");
              X.pop();
              const B = X.join("/");
              H += B + "/" + k;
            }
            N.push(H);
          } else if (k.indexOf("//") === 0) {
            const H = t.protocol + k;
            N.push(H);
          } else
            N.push(k);
      }
    }
    return N;
  }
  function u(...v) {
    const N = e.getElementsByTagName("meta");
    for (let C = 0; C < N.length; C++) {
      const O = N[C], A = ["itemprop", "property", "name"].map((k) => O.getAttribute(k)).filter((k) => k ? v.includes(k) : !1);
      if (A.length && A) {
        const k = O.getAttribute("content");
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
  const b = c(), s = h(), l = t.origin, y = n();
  return { description: s, url: l, icons: y, name: b };
}
on.getWindowMetadata = H1;
var D1 = {}, z1 = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), Go = "%[a-f0-9]{2}", lo = new RegExp("(" + Go + ")|([^%]+?)", "gi"), po = new RegExp("(" + Go + ")+", "gi");
function qr(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var n = e.slice(0, t), u = e.slice(t);
  return Array.prototype.concat.call([], qr(n), qr(u));
}
function V1(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(lo) || [], n = 1; n < t.length; n++)
      e = qr(t, n).join(""), t = e.match(lo) || [];
    return e;
  }
}
function $1(e) {
  for (var t = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, n = po.exec(e); n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var u = V1(n[0]);
      u !== n[0] && (t[n[0]] = u);
    }
    n = po.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var c = Object.keys(t), h = 0; h < c.length; h++) {
    var b = c[h];
    e = e.replace(new RegExp(b, "g"), t[b]);
  }
  return e;
}
var K1 = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return $1(e);
  }
}, Y1 = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const n = e.indexOf(t);
  return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}, W1 = function(e, t) {
  for (var n = {}, u = Object.keys(e), c = Array.isArray(t), h = 0; h < u.length; h++) {
    var b = u[h], s = e[b];
    (c ? t.indexOf(b) !== -1 : t(b, s, e)) && (n[b] = s);
  }
  return n;
};
(function(e) {
  const t = z1, n = K1, u = Y1, c = W1, h = (B) => B == null, b = Symbol("encodeFragmentIdentifier");
  function s(B) {
    switch (B.arrayFormat) {
      case "index":
        return (T) => (_, m) => {
          const E = _.length;
          return m === void 0 || B.skipNull && m === null || B.skipEmptyString && m === "" ? _ : m === null ? [..._, [v(T, B), "[", E, "]"].join("")] : [..._, [v(T, B), "[", v(E, B), "]=", v(m, B)].join("")];
        };
      case "bracket":
        return (T) => (_, m) => m === void 0 || B.skipNull && m === null || B.skipEmptyString && m === "" ? _ : m === null ? [..._, [v(T, B), "[]"].join("")] : [..._, [v(T, B), "[]=", v(m, B)].join("")];
      case "colon-list-separator":
        return (T) => (_, m) => m === void 0 || B.skipNull && m === null || B.skipEmptyString && m === "" ? _ : m === null ? [..._, [v(T, B), ":list="].join("")] : [..._, [v(T, B), ":list=", v(m, B)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const T = B.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (_) => (m, E) => E === void 0 || B.skipNull && E === null || B.skipEmptyString && E === "" ? m : (E = E === null ? "" : E, m.length === 0 ? [[v(_, B), T, v(E, B)].join("")] : [[m, v(E, B)].join(B.arrayFormatSeparator)]);
      }
      default:
        return (T) => (_, m) => m === void 0 || B.skipNull && m === null || B.skipEmptyString && m === "" ? _ : m === null ? [..._, v(T, B)] : [..._, [v(T, B), "=", v(m, B)].join("")];
    }
  }
  function l(B) {
    let T;
    switch (B.arrayFormat) {
      case "index":
        return (_, m, E) => {
          if (T = /\[(\d*)\]$/.exec(_), _ = _.replace(/\[\d*\]$/, ""), !T) {
            E[_] = m;
            return;
          }
          E[_] === void 0 && (E[_] = {}), E[_][T[1]] = m;
        };
      case "bracket":
        return (_, m, E) => {
          if (T = /(\[\])$/.exec(_), _ = _.replace(/\[\]$/, ""), !T) {
            E[_] = m;
            return;
          }
          if (E[_] === void 0) {
            E[_] = [m];
            return;
          }
          E[_] = [].concat(E[_], m);
        };
      case "colon-list-separator":
        return (_, m, E) => {
          if (T = /(:list)$/.exec(_), _ = _.replace(/:list$/, ""), !T) {
            E[_] = m;
            return;
          }
          if (E[_] === void 0) {
            E[_] = [m];
            return;
          }
          E[_] = [].concat(E[_], m);
        };
      case "comma":
      case "separator":
        return (_, m, E) => {
          const o = typeof m == "string" && m.includes(B.arrayFormatSeparator), p = typeof m == "string" && !o && N(m, B).includes(B.arrayFormatSeparator);
          m = p ? N(m, B) : m;
          const K = o || p ? m.split(B.arrayFormatSeparator).map((q) => N(q, B)) : m === null ? m : N(m, B);
          E[_] = K;
        };
      case "bracket-separator":
        return (_, m, E) => {
          const o = /(\[\])$/.test(_);
          if (_ = _.replace(/\[\]$/, ""), !o) {
            E[_] = m && N(m, B);
            return;
          }
          const p = m === null ? [] : m.split(B.arrayFormatSeparator).map((K) => N(K, B));
          if (E[_] === void 0) {
            E[_] = p;
            return;
          }
          E[_] = [].concat(E[_], p);
        };
      default:
        return (_, m, E) => {
          if (E[_] === void 0) {
            E[_] = m;
            return;
          }
          E[_] = [].concat(E[_], m);
        };
    }
  }
  function y(B) {
    if (typeof B != "string" || B.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(B, T) {
    return T.encode ? T.strict ? t(B) : encodeURIComponent(B) : B;
  }
  function N(B, T) {
    return T.decode ? n(B) : B;
  }
  function C(B) {
    return Array.isArray(B) ? B.sort() : typeof B == "object" ? C(Object.keys(B)).sort((T, _) => Number(T) - Number(_)).map((T) => B[T]) : B;
  }
  function O(B) {
    const T = B.indexOf("#");
    return T !== -1 && (B = B.slice(0, T)), B;
  }
  function A(B) {
    let T = "";
    const _ = B.indexOf("#");
    return _ !== -1 && (T = B.slice(_)), T;
  }
  function k(B) {
    B = O(B);
    const T = B.indexOf("?");
    return T === -1 ? "" : B.slice(T + 1);
  }
  function H(B, T) {
    return T.parseNumbers && !Number.isNaN(Number(B)) && typeof B == "string" && B.trim() !== "" ? B = Number(B) : T.parseBooleans && B !== null && (B.toLowerCase() === "true" || B.toLowerCase() === "false") && (B = B.toLowerCase() === "true"), B;
  }
  function X(B, T) {
    T = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, T), y(T.arrayFormatSeparator);
    const _ = l(T), m = /* @__PURE__ */ Object.create(null);
    if (typeof B != "string" || (B = B.trim().replace(/^[?#&]/, ""), !B))
      return m;
    for (const E of B.split("&")) {
      if (E === "")
        continue;
      let [o, p] = u(T.decode ? E.replace(/\+/g, " ") : E, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(T.arrayFormat) ? p : N(p, T), _(N(o, T), p, m);
    }
    for (const E of Object.keys(m)) {
      const o = m[E];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = H(o[p], T);
      else
        m[E] = H(o, T);
    }
    return T.sort === !1 ? m : (T.sort === !0 ? Object.keys(m).sort() : Object.keys(m).sort(T.sort)).reduce((E, o) => {
      const p = m[o];
      return Boolean(p) && typeof p == "object" && !Array.isArray(p) ? E[o] = C(p) : E[o] = p, E;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = k, e.parse = X, e.stringify = (B, T) => {
    if (!B)
      return "";
    T = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, T), y(T.arrayFormatSeparator);
    const _ = (p) => T.skipNull && h(B[p]) || T.skipEmptyString && B[p] === "", m = s(T), E = {};
    for (const p of Object.keys(B))
      _(p) || (E[p] = B[p]);
    const o = Object.keys(E);
    return T.sort !== !1 && o.sort(T.sort), o.map((p) => {
      const K = B[p];
      return K === void 0 ? "" : K === null ? v(p, T) : Array.isArray(K) ? K.length === 0 && T.arrayFormat === "bracket-separator" ? v(p, T) + "[]" : K.reduce(m(p), []).join("&") : v(p, T) + "=" + v(K, T);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (B, T) => {
    T = Object.assign({ decode: !0 }, T);
    const [_, m] = u(B, "#");
    return Object.assign({ url: _.split("?")[0] || "", query: X(k(B), T) }, T && T.parseFragmentIdentifier && m ? { fragmentIdentifier: N(m, T) } : {});
  }, e.stringifyUrl = (B, T) => {
    T = Object.assign({ encode: !0, strict: !0, [b]: !0 }, T);
    const _ = O(B.url).split("?")[0] || "", m = e.extract(B.url), E = e.parse(m, { sort: !1 }), o = Object.assign(E, B.query);
    let p = e.stringify(o, T);
    p && (p = `?${p}`);
    let K = A(B.url);
    return B.fragmentIdentifier && (K = `#${T[b] ? v(B.fragmentIdentifier, T) : B.fragmentIdentifier}`), `${_}${p}${K}`;
  }, e.pick = (B, T, _) => {
    _ = Object.assign({ parseFragmentIdentifier: !0, [b]: !1 }, _);
    const { url: m, query: E, fragmentIdentifier: o } = e.parseUrl(B, _);
    return e.stringifyUrl({ url: m, query: c(E, T), fragmentIdentifier: o }, _);
  }, e.exclude = (B, T, _) => {
    const m = Array.isArray(T) ? (E) => !T.includes(E) : (E, o) => !T(E, o);
    return e.pick(B, m, _);
  };
})(D1);
var q1 = {}, bt = {}, yo;
function X1() {
  if (yo)
    return bt;
  yo = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.isBrowserCryptoAvailable = bt.getSubtleCrypto = bt.getBrowerCrypto = void 0;
  function e() {
    return (nt == null ? void 0 : nt.crypto) || (nt == null ? void 0 : nt.msCrypto) || {};
  }
  bt.getBrowerCrypto = e;
  function t() {
    const u = e();
    return u.subtle || u.webkitSubtle;
  }
  bt.getSubtleCrypto = t;
  function n() {
    return !!e() && !!t();
  }
  return bt.isBrowserCryptoAvailable = n, bt;
}
var vt = {}, go;
function Z1() {
  if (go)
    return vt;
  go = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.isBrowser = vt.isNode = vt.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  vt.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  vt.isNode = t;
  function n() {
    return !e() && !t();
  }
  return vt.isBrowser = n, vt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = ct;
  t.__exportStar(X1(), e), t.__exportStar(Z1(), e);
})(q1);
const G1 = () => typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : require("ws");
G1();
var Xr = { exports: {} };
(function(e, t) {
  var n = 200, u = "__lodash_hash_undefined__", c = 1, h = 2, b = 9007199254740991, s = "[object Arguments]", l = "[object Array]", y = "[object AsyncFunction]", v = "[object Boolean]", N = "[object Date]", C = "[object Error]", O = "[object Function]", A = "[object GeneratorFunction]", k = "[object Map]", H = "[object Number]", X = "[object Null]", B = "[object Object]", T = "[object Promise]", _ = "[object Proxy]", m = "[object RegExp]", E = "[object Set]", o = "[object String]", p = "[object Symbol]", K = "[object Undefined]", q = "[object WeakMap]", Q = "[object ArrayBuffer]", ee = "[object DataView]", ne = "[object Float32Array]", d = "[object Float64Array]", F = "[object Int8Array]", V = "[object Int16Array]", Y = "[object Int32Array]", R = "[object Uint8Array]", P = "[object Uint8ClampedArray]", W = "[object Uint16Array]", z = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, Z = /^\[object .+?Constructor\]$/, se = /^(?:0|[1-9]\d*)$/, te = {};
  te[ne] = te[d] = te[F] = te[V] = te[Y] = te[R] = te[P] = te[W] = te[z] = !0, te[s] = te[l] = te[Q] = te[v] = te[ee] = te[N] = te[C] = te[O] = te[k] = te[H] = te[B] = te[m] = te[E] = te[o] = te[q] = !1;
  var de = typeof nt == "object" && nt && nt.Object === Object && nt, j = typeof self == "object" && self && self.Object === Object && self, U = de || j || Function("return this")(), M = t && !t.nodeType && t, i = M && !0 && e && !e.nodeType && e, L = i && i.exports === M, G = L && de.process, J = function() {
    try {
      return G && G.binding && G.binding("util");
    } catch {
    }
  }(), he = J && J.isTypedArray;
  function Fe(g, x) {
    for (var $ = -1, re = g == null ? 0 : g.length, Te = 0, be = []; ++$ < re; ) {
      var Ce = g[$];
      x(Ce, $, g) && (be[Te++] = Ce);
    }
    return be;
  }
  function ve(g, x) {
    for (var $ = -1, re = x.length, Te = g.length; ++$ < re; )
      g[Te + $] = x[$];
    return g;
  }
  function Le(g, x) {
    for (var $ = -1, re = g == null ? 0 : g.length; ++$ < re; )
      if (x(g[$], $, g))
        return !0;
    return !1;
  }
  function Ne(g, x) {
    for (var $ = -1, re = Array(g); ++$ < g; )
      re[$] = x($);
    return re;
  }
  function Me(g) {
    return function(x) {
      return g(x);
    };
  }
  function we(g, x) {
    return g.has(x);
  }
  function ge(g, x) {
    return g == null ? void 0 : g[x];
  }
  function fe(g) {
    var x = -1, $ = Array(g.size);
    return g.forEach(function(re, Te) {
      $[++x] = [Te, re];
    }), $;
  }
  function ye(g, x) {
    return function($) {
      return g(x($));
    };
  }
  function _e(g) {
    var x = -1, $ = Array(g.size);
    return g.forEach(function(re) {
      $[++x] = re;
    }), $;
  }
  var ue = Array.prototype, le = Function.prototype, r = Object.prototype, a = U["__core-js_shared__"], f = le.toString, w = r.hasOwnProperty, S = function() {
    var g = /[^.]+$/.exec(a && a.keys && a.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), I = r.toString, D = RegExp("^" + f.call(w).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ie = L ? U.Buffer : void 0, ae = U.Symbol, Ee = U.Uint8Array, me = r.propertyIsEnumerable, Oe = ue.splice, ot = ae ? ae.toStringTag : void 0, Ot = Object.getOwnPropertySymbols, $t = ie ? ie.isBuffer : void 0, sr = ye(Object.keys, Object), ke = jt(U, "DataView"), je = jt(U, "Map"), Pe = jt(U, "Promise"), Re = jt(U, "Set"), He = jt(U, "WeakMap"), Ie = jt(Object, "create"), Ve = Bt(ke), $e = Bt(je), Ke = Bt(Pe), Ye = Bt(Re), We = Bt(He), ze = ae ? ae.prototype : void 0, De = ze ? ze.valueOf : void 0;
  function xe(g) {
    var x = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++x < $; ) {
      var re = g[x];
      this.set(re[0], re[1]);
    }
  }
  function qe() {
    this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
  }
  function Xe(g) {
    var x = this.has(g) && delete this.__data__[g];
    return this.size -= x ? 1 : 0, x;
  }
  function ci(g) {
    var x = this.__data__;
    if (Ie) {
      var $ = x[g];
      return $ === u ? void 0 : $;
    }
    return w.call(x, g) ? x[g] : void 0;
  }
  function hi(g) {
    var x = this.__data__;
    return Ie ? x[g] !== void 0 : w.call(x, g);
  }
  function li(g, x) {
    var $ = this.__data__;
    return this.size += this.has(g) ? 0 : 1, $[g] = Ie && x === void 0 ? u : x, this;
  }
  xe.prototype.clear = qe, xe.prototype.delete = Xe, xe.prototype.get = ci, xe.prototype.has = hi, xe.prototype.set = li;
  function gt(g) {
    var x = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++x < $; ) {
      var re = g[x];
      this.set(re[0], re[1]);
    }
  }
  function pi() {
    this.__data__ = [], this.size = 0;
  }
  function di(g) {
    var x = this.__data__, $ = fr(x, g);
    if ($ < 0)
      return !1;
    var re = x.length - 1;
    return $ == re ? x.pop() : Oe.call(x, $, 1), --this.size, !0;
  }
  function yi(g) {
    var x = this.__data__, $ = fr(x, g);
    return $ < 0 ? void 0 : x[$][1];
  }
  function gi(g) {
    return fr(this.__data__, g) > -1;
  }
  function _i(g, x) {
    var $ = this.__data__, re = fr($, g);
    return re < 0 ? (++this.size, $.push([g, x])) : $[re][1] = x, this;
  }
  gt.prototype.clear = pi, gt.prototype.delete = di, gt.prototype.get = yi, gt.prototype.has = gi, gt.prototype.set = _i;
  function St(g) {
    var x = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++x < $; ) {
      var re = g[x];
      this.set(re[0], re[1]);
    }
  }
  function bi() {
    this.size = 0, this.__data__ = { hash: new xe(), map: new (je || gt)(), string: new xe() };
  }
  function vi(g) {
    var x = cr(this, g).delete(g);
    return this.size -= x ? 1 : 0, x;
  }
  function wi(g) {
    return cr(this, g).get(g);
  }
  function mi(g) {
    return cr(this, g).has(g);
  }
  function Ei(g, x) {
    var $ = cr(this, g), re = $.size;
    return $.set(g, x), this.size += $.size == re ? 0 : 1, this;
  }
  St.prototype.clear = bi, St.prototype.delete = vi, St.prototype.get = wi, St.prototype.has = mi, St.prototype.set = Ei;
  function ur(g) {
    var x = -1, $ = g == null ? 0 : g.length;
    for (this.__data__ = new St(); ++x < $; )
      this.add(g[x]);
  }
  function Fi(g) {
    return this.__data__.set(g, u), this;
  }
  function Li(g) {
    return this.__data__.has(g);
  }
  ur.prototype.add = ur.prototype.push = Fi, ur.prototype.has = Li;
  function mt(g) {
    var x = this.__data__ = new gt(g);
    this.size = x.size;
  }
  function Ai() {
    this.__data__ = new gt(), this.size = 0;
  }
  function Oi(g) {
    var x = this.__data__, $ = x.delete(g);
    return this.size = x.size, $;
  }
  function Si(g) {
    return this.__data__.get(g);
  }
  function Bi(g) {
    return this.__data__.has(g);
  }
  function Ti(g, x) {
    var $ = this.__data__;
    if ($ instanceof gt) {
      var re = $.__data__;
      if (!je || re.length < n - 1)
        return re.push([g, x]), this.size = ++$.size, this;
      $ = this.__data__ = new St(re);
    }
    return $.set(g, x), this.size = $.size, this;
  }
  mt.prototype.clear = Ai, mt.prototype.delete = Oi, mt.prototype.get = Si, mt.prototype.has = Bi, mt.prototype.set = Ti;
  function Mi(g, x) {
    var $ = hr(g), re = !$ && Ki(g), Te = !$ && !re && Tr(g), be = !$ && !re && !Te && dn(g), Ce = $ || re || Te || be, Ze = Ce ? Ne(g.length, String) : [], Ge = Ze.length;
    for (var Ue in g)
      (x || w.call(g, Ue)) && !(Ce && (Ue == "length" || Te && (Ue == "offset" || Ue == "parent") || be && (Ue == "buffer" || Ue == "byteLength" || Ue == "byteOffset") || Hi(Ue, Ge))) && Ze.push(Ue);
    return Ze;
  }
  function fr(g, x) {
    for (var $ = g.length; $--; )
      if (cn(g[$][0], x))
        return $;
    return -1;
  }
  function xi(g, x, $) {
    var re = x(g);
    return hr(g) ? re : ve(re, $(g));
  }
  function Kt(g) {
    return g == null ? g === void 0 ? K : X : ot && ot in Object(g) ? Pi(g) : $i(g);
  }
  function an(g) {
    return Yt(g) && Kt(g) == s;
  }
  function sn(g, x, $, re, Te) {
    return g === x ? !0 : g == null || x == null || !Yt(g) && !Yt(x) ? g !== g && x !== x : Ni(g, x, $, re, sn, Te);
  }
  function Ni(g, x, $, re, Te, be) {
    var Ce = hr(g), Ze = hr(x), Ge = Ce ? l : Et(g), Ue = Ze ? l : Et(x);
    Ge = Ge == s ? B : Ge, Ue = Ue == s ? B : Ue;
    var it = Ge == B, ht = Ue == B, et = Ge == Ue;
    if (et && Tr(g)) {
      if (!Tr(x))
        return !1;
      Ce = !0, it = !1;
    }
    if (et && !it)
      return be || (be = new mt()), Ce || dn(g) ? un(g, x, $, re, Te, be) : Ci(g, x, Ge, $, re, Te, be);
    if (!($ & c)) {
      var st = it && w.call(g, "__wrapped__"), ut = ht && w.call(x, "__wrapped__");
      if (st || ut) {
        var Ft = st ? g.value() : g, _t = ut ? x.value() : x;
        return be || (be = new mt()), Te(Ft, _t, $, re, be);
      }
    }
    return et ? (be || (be = new mt()), ki(g, x, $, re, Te, be)) : !1;
  }
  function Ui(g) {
    if (!pn(g) || zi(g))
      return !1;
    var x = hn(g) ? D : Z;
    return x.test(Bt(g));
  }
  function ji(g) {
    return Yt(g) && ln(g.length) && !!te[Kt(g)];
  }
  function Ii(g) {
    if (!Vi(g))
      return sr(g);
    var x = [];
    for (var $ in Object(g))
      w.call(g, $) && $ != "constructor" && x.push($);
    return x;
  }
  function un(g, x, $, re, Te, be) {
    var Ce = $ & c, Ze = g.length, Ge = x.length;
    if (Ze != Ge && !(Ce && Ge > Ze))
      return !1;
    var Ue = be.get(g);
    if (Ue && be.get(x))
      return Ue == x;
    var it = -1, ht = !0, et = $ & h ? new ur() : void 0;
    for (be.set(g, x), be.set(x, g); ++it < Ze; ) {
      var st = g[it], ut = x[it];
      if (re)
        var Ft = Ce ? re(ut, st, it, x, g, be) : re(st, ut, it, g, x, be);
      if (Ft !== void 0) {
        if (Ft)
          continue;
        ht = !1;
        break;
      }
      if (et) {
        if (!Le(x, function(_t, Tt) {
          if (!we(et, Tt) && (st === _t || Te(st, _t, $, re, be)))
            return et.push(Tt);
        })) {
          ht = !1;
          break;
        }
      } else if (!(st === ut || Te(st, ut, $, re, be))) {
        ht = !1;
        break;
      }
    }
    return be.delete(g), be.delete(x), ht;
  }
  function Ci(g, x, $, re, Te, be, Ce) {
    switch ($) {
      case ee:
        if (g.byteLength != x.byteLength || g.byteOffset != x.byteOffset)
          return !1;
        g = g.buffer, x = x.buffer;
      case Q:
        return !(g.byteLength != x.byteLength || !be(new Ee(g), new Ee(x)));
      case v:
      case N:
      case H:
        return cn(+g, +x);
      case C:
        return g.name == x.name && g.message == x.message;
      case m:
      case o:
        return g == x + "";
      case k:
        var Ze = fe;
      case E:
        var Ge = re & c;
        if (Ze || (Ze = _e), g.size != x.size && !Ge)
          return !1;
        var Ue = Ce.get(g);
        if (Ue)
          return Ue == x;
        re |= h, Ce.set(g, x);
        var it = un(Ze(g), Ze(x), re, Te, be, Ce);
        return Ce.delete(g), it;
      case p:
        if (De)
          return De.call(g) == De.call(x);
    }
    return !1;
  }
  function ki(g, x, $, re, Te, be) {
    var Ce = $ & c, Ze = fn(g), Ge = Ze.length, Ue = fn(x), it = Ue.length;
    if (Ge != it && !Ce)
      return !1;
    for (var ht = Ge; ht--; ) {
      var et = Ze[ht];
      if (!(Ce ? et in x : w.call(x, et)))
        return !1;
    }
    var st = be.get(g);
    if (st && be.get(x))
      return st == x;
    var ut = !0;
    be.set(g, x), be.set(x, g);
    for (var Ft = Ce; ++ht < Ge; ) {
      et = Ze[ht];
      var _t = g[et], Tt = x[et];
      if (re)
        var yn = Ce ? re(Tt, _t, et, x, g, be) : re(_t, Tt, et, g, x, be);
      if (!(yn === void 0 ? _t === Tt || Te(_t, Tt, $, re, be) : yn)) {
        ut = !1;
        break;
      }
      Ft || (Ft = et == "constructor");
    }
    if (ut && !Ft) {
      var lr = g.constructor, pr = x.constructor;
      lr != pr && "constructor" in g && "constructor" in x && !(typeof lr == "function" && lr instanceof lr && typeof pr == "function" && pr instanceof pr) && (ut = !1);
    }
    return be.delete(g), be.delete(x), ut;
  }
  function fn(g) {
    return xi(g, qi, Ri);
  }
  function cr(g, x) {
    var $ = g.__data__;
    return Di(x) ? $[typeof x == "string" ? "string" : "hash"] : $.map;
  }
  function jt(g, x) {
    var $ = ge(g, x);
    return Ui($) ? $ : void 0;
  }
  function Pi(g) {
    var x = w.call(g, ot), $ = g[ot];
    try {
      g[ot] = void 0;
      var re = !0;
    } catch {
    }
    var Te = I.call(g);
    return re && (x ? g[ot] = $ : delete g[ot]), Te;
  }
  var Ri = Ot ? function(g) {
    return g == null ? [] : (g = Object(g), Fe(Ot(g), function(x) {
      return me.call(g, x);
    }));
  } : Xi, Et = Kt;
  (ke && Et(new ke(new ArrayBuffer(1))) != ee || je && Et(new je()) != k || Pe && Et(Pe.resolve()) != T || Re && Et(new Re()) != E || He && Et(new He()) != q) && (Et = function(g) {
    var x = Kt(g), $ = x == B ? g.constructor : void 0, re = $ ? Bt($) : "";
    if (re)
      switch (re) {
        case Ve:
          return ee;
        case $e:
          return k;
        case Ke:
          return T;
        case Ye:
          return E;
        case We:
          return q;
      }
    return x;
  });
  function Hi(g, x) {
    return x = x != null ? x : b, !!x && (typeof g == "number" || se.test(g)) && g > -1 && g % 1 == 0 && g < x;
  }
  function Di(g) {
    var x = typeof g;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? g !== "__proto__" : g === null;
  }
  function zi(g) {
    return !!S && S in g;
  }
  function Vi(g) {
    var x = g && g.constructor, $ = typeof x == "function" && x.prototype || r;
    return g === $;
  }
  function $i(g) {
    return I.call(g);
  }
  function Bt(g) {
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
  function cn(g, x) {
    return g === x || g !== g && x !== x;
  }
  var Ki = an(function() {
    return arguments;
  }()) ? an : function(g) {
    return Yt(g) && w.call(g, "callee") && !me.call(g, "callee");
  }, hr = Array.isArray;
  function Yi(g) {
    return g != null && ln(g.length) && !hn(g);
  }
  var Tr = $t || Zi;
  function Wi(g, x) {
    return sn(g, x);
  }
  function hn(g) {
    if (!pn(g))
      return !1;
    var x = Kt(g);
    return x == O || x == A || x == y || x == _;
  }
  function ln(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= b;
  }
  function pn(g) {
    var x = typeof g;
    return g != null && (x == "object" || x == "function");
  }
  function Yt(g) {
    return g != null && typeof g == "object";
  }
  var dn = he ? Me(he) : ji;
  function qi(g) {
    return Yi(g) ? Mi(g) : Ii(g);
  }
  function Xi() {
    return [];
  }
  function Zi() {
    return !1;
  }
  e.exports = Wi;
})(Xr, Xr.exports);
Xr.exports;
function Q1(e, t) {
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
  var s = e.length, l = e.charAt(0), y = Math.log(s) / Math.log(256), v = Math.log(256) / Math.log(s);
  function N(A) {
    if (A instanceof Uint8Array || (ArrayBuffer.isView(A) ? A = new Uint8Array(A.buffer, A.byteOffset, A.byteLength) : Array.isArray(A) && (A = Uint8Array.from(A))), !(A instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (A.length === 0)
      return "";
    for (var k = 0, H = 0, X = 0, B = A.length; X !== B && A[X] === 0; )
      X++, k++;
    for (var T = (B - X) * v + 1 >>> 0, _ = new Uint8Array(T); X !== B; ) {
      for (var m = A[X], E = 0, o = T - 1; (m !== 0 || E < H) && o !== -1; o--, E++)
        m += 256 * _[o] >>> 0, _[o] = m % s >>> 0, m = m / s >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      H = E, X++;
    }
    for (var p = T - H; p !== T && _[p] === 0; )
      p++;
    for (var K = l.repeat(k); p < T; ++p)
      K += e.charAt(_[p]);
    return K;
  }
  function C(A) {
    if (typeof A != "string")
      throw new TypeError("Expected String");
    if (A.length === 0)
      return new Uint8Array();
    var k = 0;
    if (A[k] !== " ") {
      for (var H = 0, X = 0; A[k] === l; )
        H++, k++;
      for (var B = (A.length - k) * y + 1 >>> 0, T = new Uint8Array(B); A[k]; ) {
        var _ = n[A.charCodeAt(k)];
        if (_ === 255)
          return;
        for (var m = 0, E = B - 1; (_ !== 0 || m < X) && E !== -1; E--, m++)
          _ += s * T[E] >>> 0, T[E] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        X = m, k++;
      }
      if (A[k] !== " ") {
        for (var o = B - X; o !== B && T[o] === 0; )
          o++;
        for (var p = new Uint8Array(H + (B - o)), K = H; o !== B; )
          p[K++] = T[o++];
        return p;
      }
    }
  }
  function O(A) {
    var k = C(A);
    if (k)
      return k;
    throw new Error(`Non-${t} character`);
  }
  return { encode: N, decodeUnsafe: C, decode: O };
}
var J1 = Q1, ef = J1;
const Qo = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, tf = (e) => new TextEncoder().encode(e), rf = (e) => new TextDecoder().decode(e);
class nf {
  constructor(t, n, u) {
    this.name = t, this.prefix = n, this.baseEncode = u;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class of {
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
    return Jo(this, t);
  }
}
class af {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Jo(this, t);
  }
  decode(t) {
    const n = t[0], u = this.decoders[n];
    if (u)
      return u.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Jo = (e, t) => new af({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class sf {
  constructor(t, n, u, c) {
    this.name = t, this.prefix = n, this.baseEncode = u, this.baseDecode = c, this.encoder = new nf(t, n, u), this.decoder = new of(t, n, c);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Br = ({ name: e, prefix: t, encode: n, decode: u }) => new sf(e, t, n, u), ar = ({ prefix: e, name: t, alphabet: n }) => {
  const { encode: u, decode: c } = ef(n, t);
  return Br({ prefix: e, name: t, encode: u, decode: (h) => Qo(c(h)) });
}, uf = (e, t, n, u) => {
  const c = {};
  for (let v = 0; v < t.length; ++v)
    c[t[v]] = v;
  let h = e.length;
  for (; e[h - 1] === "="; )
    --h;
  const b = new Uint8Array(h * n / 8 | 0);
  let s = 0, l = 0, y = 0;
  for (let v = 0; v < h; ++v) {
    const N = c[e[v]];
    if (N === void 0)
      throw new SyntaxError(`Non-${u} character`);
    l = l << n | N, s += n, s >= 8 && (s -= 8, b[y++] = 255 & l >> s);
  }
  if (s >= n || 255 & l << 8 - s)
    throw new SyntaxError("Unexpected end of data");
  return b;
}, ff = (e, t, n) => {
  const u = t[t.length - 1] === "=", c = (1 << n) - 1;
  let h = "", b = 0, s = 0;
  for (let l = 0; l < e.length; ++l)
    for (s = s << 8 | e[l], b += 8; b > n; )
      b -= n, h += t[c & s >> b];
  if (b && (h += t[c & s << n - b]), u)
    for (; h.length * n & 7; )
      h += "=";
  return h;
}, Je = ({ name: e, prefix: t, bitsPerChar: n, alphabet: u }) => Br({ prefix: t, name: e, encode(c) {
  return ff(c, u, n);
}, decode(c) {
  return uf(c, u, n, e);
} }), cf = Br({ prefix: "\0", name: "identity", encode: (e) => rf(e), decode: (e) => tf(e) });
var hf = Object.freeze({ __proto__: null, identity: cf });
const lf = Je({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var pf = Object.freeze({ __proto__: null, base2: lf });
const df = Je({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var yf = Object.freeze({ __proto__: null, base8: df });
const gf = ar({ prefix: "9", name: "base10", alphabet: "0123456789" });
var _f = Object.freeze({ __proto__: null, base10: gf });
const bf = Je({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), vf = Je({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var wf = Object.freeze({ __proto__: null, base16: bf, base16upper: vf });
const mf = Je({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Ef = Je({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Ff = Je({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Lf = Je({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Af = Je({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Of = Je({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Sf = Je({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Bf = Je({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Tf = Je({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Mf = Object.freeze({ __proto__: null, base32: mf, base32upper: Ef, base32pad: Ff, base32padupper: Lf, base32hex: Af, base32hexupper: Of, base32hexpad: Sf, base32hexpadupper: Bf, base32z: Tf });
const xf = ar({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Nf = ar({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Uf = Object.freeze({ __proto__: null, base36: xf, base36upper: Nf });
const jf = ar({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), If = ar({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Cf = Object.freeze({ __proto__: null, base58btc: jf, base58flickr: If });
const kf = Je({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Pf = Je({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Rf = Je({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Hf = Je({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Df = Object.freeze({ __proto__: null, base64: kf, base64pad: Pf, base64url: Rf, base64urlpad: Hf });
const ei = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), zf = ei.reduce((e, t, n) => (e[n] = t, e), []), Vf = ei.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
function $f(e) {
  return e.reduce((t, n) => (t += zf[n], t), "");
}
function Kf(e) {
  const t = [];
  for (const n of e) {
    const u = Vf[n.codePointAt(0)];
    if (u === void 0)
      throw new Error(`Non-base256emoji character: ${n}`);
    t.push(u);
  }
  return new Uint8Array(t);
}
const Yf = Br({ prefix: "\u{1F680}", name: "base256emoji", encode: $f, decode: Kf });
var Wf = Object.freeze({ __proto__: null, base256emoji: Yf }), qf = ti, _o = 128, Xf = 127, Zf = ~Xf, Gf = Math.pow(2, 31);
function ti(e, t, n) {
  t = t || [], n = n || 0;
  for (var u = n; e >= Gf; )
    t[n++] = e & 255 | _o, e /= 128;
  for (; e & Zf; )
    t[n++] = e & 255 | _o, e >>>= 7;
  return t[n] = e | 0, ti.bytes = n - u + 1, t;
}
var Qf = Zr, Jf = 128, bo = 127;
function Zr(e, u) {
  var n = 0, u = u || 0, c = 0, h = u, b, s = e.length;
  do {
    if (h >= s)
      throw Zr.bytes = 0, new RangeError("Could not decode varint");
    b = e[h++], n += c < 28 ? (b & bo) << c : (b & bo) * Math.pow(2, c), c += 7;
  } while (b >= Jf);
  return Zr.bytes = h - u, n;
}
var ec = Math.pow(2, 7), tc = Math.pow(2, 14), rc = Math.pow(2, 21), nc = Math.pow(2, 28), oc = Math.pow(2, 35), ic = Math.pow(2, 42), ac = Math.pow(2, 49), sc = Math.pow(2, 56), uc = Math.pow(2, 63), fc = function(e) {
  return e < ec ? 1 : e < tc ? 2 : e < rc ? 3 : e < nc ? 4 : e < oc ? 5 : e < ic ? 6 : e < ac ? 7 : e < sc ? 8 : e < uc ? 9 : 10;
}, cc = { encode: qf, decode: Qf, encodingLength: fc }, ri = cc;
const vo = (e, t, n = 0) => (ri.encode(e, t, n), t), wo = (e) => ri.encodingLength(e), Gr = (e, t) => {
  const n = t.byteLength, u = wo(e), c = u + wo(n), h = new Uint8Array(c + n);
  return vo(e, h, 0), vo(n, h, u), h.set(t, c), new hc(e, n, t, h);
};
class hc {
  constructor(t, n, u, c) {
    this.code = t, this.size = n, this.digest = u, this.bytes = c;
  }
}
const ni = ({ name: e, code: t, encode: n }) => new lc(e, t, n);
class lc {
  constructor(t, n, u) {
    this.name = t, this.code = n, this.encode = u;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const n = this.encode(t);
      return n instanceof Uint8Array ? Gr(this.code, n) : n.then((u) => Gr(this.code, u));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const oi = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), pc = ni({ name: "sha2-256", code: 18, encode: oi("SHA-256") }), dc = ni({ name: "sha2-512", code: 19, encode: oi("SHA-512") });
var yc = Object.freeze({ __proto__: null, sha256: pc, sha512: dc });
const ii = 0, gc = "identity", ai = Qo, _c = (e) => Gr(ii, ai(e)), bc = { code: ii, name: gc, encode: ai, digest: _c };
var vc = Object.freeze({ __proto__: null, identity: bc });
new TextEncoder(), new TextDecoder();
({ ...hf, ...pf, ...yf, ..._f, ...wf, ...Mf, ...Uf, ...Cf, ...Df, ...Wf });
({ ...yc, ...vc });
Ae.ONE_DAY;
Ae.SIX_HOURS;
Ae.ONE_SECOND;
Ae.FIVE_SECONDS * 1e3;
Ae.ONE_DAY, Ae.ONE_DAY, Ae.THIRTY_SECONDS, Ae.THIRTY_SECONDS, Ae.ONE_DAY, Ae.ONE_DAY;
Ae.SEVEN_DAYS;
Ae.FIVE_MINUTES, Ae.FIVE_MINUTES, Ae.FIVE_MINUTES, Ae.FIVE_MINUTES, Ae.ONE_DAY, Ae.ONE_DAY, Ae.ONE_DAY, Ae.ONE_DAY, Ae.FIVE_MINUTES, Ae.FIVE_MINUTES, Ae.FIVE_MINUTES, Ae.FIVE_MINUTES, Ae.ONE_DAY, Ae.ONE_DAY, Ae.THIRTY_SECONDS, Ae.THIRTY_SECONDS;
var Qr = { exports: {} };
(function(e, t) {
  var n = typeof self < "u" ? self : nt, u = function() {
    function h() {
      this.fetch = !1, this.DOMException = n.DOMException;
    }
    return h.prototype = n, new h();
  }();
  (function(h) {
    (function(b) {
      var s = { searchParams: "URLSearchParams" in h, iterable: "Symbol" in h && "iterator" in Symbol, blob: "FileReader" in h && "Blob" in h && function() {
        try {
          return new Blob(), !0;
        } catch {
          return !1;
        }
      }(), formData: "FormData" in h, arrayBuffer: "ArrayBuffer" in h };
      function l(d) {
        return d && DataView.prototype.isPrototypeOf(d);
      }
      if (s.arrayBuffer)
        var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], v = ArrayBuffer.isView || function(d) {
          return d && y.indexOf(Object.prototype.toString.call(d)) > -1;
        };
      function N(d) {
        if (typeof d != "string" && (d = String(d)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(d))
          throw new TypeError("Invalid character in header field name");
        return d.toLowerCase();
      }
      function C(d) {
        return typeof d != "string" && (d = String(d)), d;
      }
      function O(d) {
        var F = { next: function() {
          var V = d.shift();
          return { done: V === void 0, value: V };
        } };
        return s.iterable && (F[Symbol.iterator] = function() {
          return F;
        }), F;
      }
      function A(d) {
        this.map = {}, d instanceof A ? d.forEach(function(F, V) {
          this.append(V, F);
        }, this) : Array.isArray(d) ? d.forEach(function(F) {
          this.append(F[0], F[1]);
        }, this) : d && Object.getOwnPropertyNames(d).forEach(function(F) {
          this.append(F, d[F]);
        }, this);
      }
      A.prototype.append = function(d, F) {
        d = N(d), F = C(F);
        var V = this.map[d];
        this.map[d] = V ? V + ", " + F : F;
      }, A.prototype.delete = function(d) {
        delete this.map[N(d)];
      }, A.prototype.get = function(d) {
        return d = N(d), this.has(d) ? this.map[d] : null;
      }, A.prototype.has = function(d) {
        return this.map.hasOwnProperty(N(d));
      }, A.prototype.set = function(d, F) {
        this.map[N(d)] = C(F);
      }, A.prototype.forEach = function(d, F) {
        for (var V in this.map)
          this.map.hasOwnProperty(V) && d.call(F, this.map[V], V, this);
      }, A.prototype.keys = function() {
        var d = [];
        return this.forEach(function(F, V) {
          d.push(V);
        }), O(d);
      }, A.prototype.values = function() {
        var d = [];
        return this.forEach(function(F) {
          d.push(F);
        }), O(d);
      }, A.prototype.entries = function() {
        var d = [];
        return this.forEach(function(F, V) {
          d.push([V, F]);
        }), O(d);
      }, s.iterable && (A.prototype[Symbol.iterator] = A.prototype.entries);
      function k(d) {
        if (d.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        d.bodyUsed = !0;
      }
      function H(d) {
        return new Promise(function(F, V) {
          d.onload = function() {
            F(d.result);
          }, d.onerror = function() {
            V(d.error);
          };
        });
      }
      function X(d) {
        var F = new FileReader(), V = H(F);
        return F.readAsArrayBuffer(d), V;
      }
      function B(d) {
        var F = new FileReader(), V = H(F);
        return F.readAsText(d), V;
      }
      function T(d) {
        for (var F = new Uint8Array(d), V = new Array(F.length), Y = 0; Y < F.length; Y++)
          V[Y] = String.fromCharCode(F[Y]);
        return V.join("");
      }
      function _(d) {
        if (d.slice)
          return d.slice(0);
        var F = new Uint8Array(d.byteLength);
        return F.set(new Uint8Array(d)), F.buffer;
      }
      function m() {
        return this.bodyUsed = !1, this._initBody = function(d) {
          this._bodyInit = d, d ? typeof d == "string" ? this._bodyText = d : s.blob && Blob.prototype.isPrototypeOf(d) ? this._bodyBlob = d : s.formData && FormData.prototype.isPrototypeOf(d) ? this._bodyFormData = d : s.searchParams && URLSearchParams.prototype.isPrototypeOf(d) ? this._bodyText = d.toString() : s.arrayBuffer && s.blob && l(d) ? (this._bodyArrayBuffer = _(d.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(d) || v(d)) ? this._bodyArrayBuffer = _(d) : this._bodyText = d = Object.prototype.toString.call(d) : this._bodyText = "", this.headers.get("content-type") || (typeof d == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(d) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, s.blob && (this.blob = function() {
          var d = k(this);
          if (d)
            return d;
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
          var d = k(this);
          if (d)
            return d;
          if (this._bodyBlob)
            return B(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(T(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, s.formData && (this.formData = function() {
          return this.text().then(K);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      var E = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function o(d) {
        var F = d.toUpperCase();
        return E.indexOf(F) > -1 ? F : d;
      }
      function p(d, F) {
        F = F || {};
        var V = F.body;
        if (d instanceof p) {
          if (d.bodyUsed)
            throw new TypeError("Already read");
          this.url = d.url, this.credentials = d.credentials, F.headers || (this.headers = new A(d.headers)), this.method = d.method, this.mode = d.mode, this.signal = d.signal, !V && d._bodyInit != null && (V = d._bodyInit, d.bodyUsed = !0);
        } else
          this.url = String(d);
        if (this.credentials = F.credentials || this.credentials || "same-origin", (F.headers || !this.headers) && (this.headers = new A(F.headers)), this.method = o(F.method || this.method || "GET"), this.mode = F.mode || this.mode || null, this.signal = F.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && V)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(V);
      }
      p.prototype.clone = function() {
        return new p(this, { body: this._bodyInit });
      };
      function K(d) {
        var F = new FormData();
        return d.trim().split("&").forEach(function(V) {
          if (V) {
            var Y = V.split("="), R = Y.shift().replace(/\+/g, " "), P = Y.join("=").replace(/\+/g, " ");
            F.append(decodeURIComponent(R), decodeURIComponent(P));
          }
        }), F;
      }
      function q(d) {
        var F = new A(), V = d.replace(/\r?\n[\t ]+/g, " ");
        return V.split(/\r?\n/).forEach(function(Y) {
          var R = Y.split(":"), P = R.shift().trim();
          if (P) {
            var W = R.join(":").trim();
            F.append(P, W);
          }
        }), F;
      }
      m.call(p.prototype);
      function Q(d, F) {
        F || (F = {}), this.type = "default", this.status = F.status === void 0 ? 200 : F.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in F ? F.statusText : "OK", this.headers = new A(F.headers), this.url = F.url || "", this._initBody(d);
      }
      m.call(Q.prototype), Q.prototype.clone = function() {
        return new Q(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new A(this.headers), url: this.url });
      }, Q.error = function() {
        var d = new Q(null, { status: 0, statusText: "" });
        return d.type = "error", d;
      };
      var ee = [301, 302, 303, 307, 308];
      Q.redirect = function(d, F) {
        if (ee.indexOf(F) === -1)
          throw new RangeError("Invalid status code");
        return new Q(null, { status: F, headers: { location: d } });
      }, b.DOMException = h.DOMException;
      try {
        new b.DOMException();
      } catch {
        b.DOMException = function(d, F) {
          this.message = d, this.name = F;
          var V = Error(d);
          this.stack = V.stack;
        }, b.DOMException.prototype = Object.create(Error.prototype), b.DOMException.prototype.constructor = b.DOMException;
      }
      function ne(d, F) {
        return new Promise(function(V, Y) {
          var R = new p(d, F);
          if (R.signal && R.signal.aborted)
            return Y(new b.DOMException("Aborted", "AbortError"));
          var P = new XMLHttpRequest();
          function W() {
            P.abort();
          }
          P.onload = function() {
            var z = { status: P.status, statusText: P.statusText, headers: q(P.getAllResponseHeaders() || "") };
            z.url = "responseURL" in P ? P.responseURL : z.headers.get("X-Request-URL");
            var oe = "response" in P ? P.response : P.responseText;
            V(new Q(oe, z));
          }, P.onerror = function() {
            Y(new TypeError("Network request failed"));
          }, P.ontimeout = function() {
            Y(new TypeError("Network request failed"));
          }, P.onabort = function() {
            Y(new b.DOMException("Aborted", "AbortError"));
          }, P.open(R.method, R.url, !0), R.credentials === "include" ? P.withCredentials = !0 : R.credentials === "omit" && (P.withCredentials = !1), "responseType" in P && s.blob && (P.responseType = "blob"), R.headers.forEach(function(z, oe) {
            P.setRequestHeader(oe, z);
          }), R.signal && (R.signal.addEventListener("abort", W), P.onreadystatechange = function() {
            P.readyState === 4 && R.signal.removeEventListener("abort", W);
          }), P.send(typeof R._bodyInit > "u" ? null : R._bodyInit);
        });
      }
      return ne.polyfill = !0, h.fetch || (h.fetch = ne, h.Headers = A, h.Request = p, h.Response = Q), b.Headers = A, b.Request = p, b.Response = Q, b.fetch = ne, Object.defineProperty(b, "__esModule", { value: !0 }), b;
    })({});
  })(u), u.fetch.ponyfill = !0, delete u.fetch.polyfill;
  var c = u;
  t = c.fetch, t.default = c.fetch, t.fetch = c.fetch, t.Headers = c.Headers, t.Request = c.Request, t.Response = c.Response, e.exports = t;
})(Qr, Qr.exports);
oa(Qr.exports);
const wc = Symbol(), mo = Object.getPrototypeOf, Jr = /* @__PURE__ */ new WeakMap(), mc = (e) => e && (Jr.has(e) ? Jr.get(e) : mo(e) === Object.prototype || mo(e) === Array.prototype), Ec = (e) => mc(e) && e[wc] || null, Eo = (e, t = !0) => {
  Jr.set(e, t);
}, Nr = (e) => typeof e == "object" && e !== null, pt = Symbol(), Ur = /* @__PURE__ */ new WeakSet(), Fc = (e = Object.is, t = (y, v) => new Proxy(y, v), n = (y) => Nr(y) && !Ur.has(y) && (Array.isArray(y) || !(Symbol.iterator in y)) && !(y instanceof WeakMap) && !(y instanceof WeakSet) && !(y instanceof Error) && !(y instanceof Number) && !(y instanceof Date) && !(y instanceof String) && !(y instanceof RegExp) && !(y instanceof ArrayBuffer), u = (y) => {
  switch (y.status) {
    case "fulfilled":
      return y.value;
    case "rejected":
      throw y.reason;
    default:
      throw y;
  }
}, c = /* @__PURE__ */ new WeakMap(), h = (y, v, N, C = u) => {
  const O = c.get(v);
  if ((O == null ? void 0 : O[0]) === N)
    return O[1];
  const A = Array.isArray(y) ? [] : Object.create(Object.getPrototypeOf(y));
  return Eo(A, !0), c.set(v, [N, A]), Reflect.ownKeys(y).forEach((k) => {
    const H = Reflect.get(y, k, v);
    Ur.has(H) ? (Eo(H, !1), A[k] = H) : H instanceof Promise ? Object.defineProperty(A, k, { get() {
      return C(H);
    } }) : H != null && H[pt] ? A[k] = Ac(H, C) : A[k] = H;
  }), Object.freeze(A);
}, b = /* @__PURE__ */ new WeakMap(), s = [1], l = (y) => {
  if (!Nr(y))
    throw new Error("object required");
  const v = b.get(y);
  if (v)
    return v;
  let N = s[0];
  const C = /* @__PURE__ */ new Set(), O = (T, _ = ++s[0]) => {
    N !== _ && (N = _, C.forEach((m) => m(T, _)));
  }, A = /* @__PURE__ */ new Map(), k = (T) => {
    let _ = A.get(T);
    return _ || (_ = (m, E) => {
      const o = [...m];
      o[1] = [T, ...o[1]], O(o, E);
    }, A.set(T, _)), _;
  }, H = (T) => {
    const _ = A.get(T);
    return A.delete(T), _;
  }, X = Array.isArray(y) ? [] : Object.create(Object.getPrototypeOf(y)), B = t(X, { get(T, _, m) {
    return _ === pt ? [T, m, N, h, C] : Reflect.get(T, _, m);
  }, deleteProperty(T, _) {
    var m;
    const E = Reflect.get(T, _), o = (m = E == null ? void 0 : E[pt]) == null ? void 0 : m[4];
    o && o.delete(H(_));
    const p = Reflect.deleteProperty(T, _);
    return p && O(["delete", [_], E]), p;
  }, set(T, _, m, E) {
    var o, p;
    const K = Reflect.has(T, _), q = Reflect.get(T, _, E);
    if (K && e(q, m))
      return !0;
    const Q = (o = q == null ? void 0 : q[pt]) == null ? void 0 : o[4];
    Q && Q.delete(H(_)), Nr(m) && (m = Ec(m) || m);
    let ee = m;
    return (p = Object.getOwnPropertyDescriptor(T, _)) != null && p.set || (m instanceof Promise ? m.then((ne) => {
      m.status = "fulfilled", m.value = ne, O(["resolve", [_], ne]);
    }).catch((ne) => {
      m.status = "rejected", m.reason = ne, O(["reject", [_], ne]);
    }) : (!(m != null && m[pt]) && n(m) && (ee = At(m)), ee != null && ee[pt] && ee[pt][4].add(k(_)))), Reflect.set(T, _, ee, E), O(["set", [_], m, q]), !0;
  } });
  return b.set(y, B), Reflect.ownKeys(y).forEach((T) => {
    const _ = Object.getOwnPropertyDescriptor(y, T);
    _.get || _.set ? Object.defineProperty(X, T, _) : B[T] = y[T];
  }), B;
}) => [l, pt, Ur, e, t, n, u, c, h, b, s], [Lc] = Fc();
function At(e = {}) {
  return Lc(e);
}
function Ac(e, t) {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && !(e != null && e[pt]) && console.warn("Please use proxy object");
  const [n, u, c, h] = e[pt];
  return h(n, u, c, t);
}
var si = {}, br = {};
br.byteLength = Bc, br.toByteArray = Mc, br.fromByteArray = Uc;
for (var dt = [], ft = [], Oc = typeof Uint8Array < "u" ? Uint8Array : Array, jr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ht = 0, Sc = jr.length; Ht < Sc; ++Ht)
  dt[Ht] = jr[Ht], ft[jr.charCodeAt(Ht)] = Ht;
ft["-".charCodeAt(0)] = 62, ft["_".charCodeAt(0)] = 63;
function ui(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var u = n === t ? 0 : 4 - n % 4;
  return [n, u];
}
function Bc(e) {
  var t = ui(e), n = t[0], u = t[1];
  return (n + u) * 3 / 4 - u;
}
function Tc(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function Mc(e) {
  var t, n = ui(e), u = n[0], c = n[1], h = new Oc(Tc(e, u, c)), b = 0, s = c > 0 ? u - 4 : u, l;
  for (l = 0; l < s; l += 4)
    t = ft[e.charCodeAt(l)] << 18 | ft[e.charCodeAt(l + 1)] << 12 | ft[e.charCodeAt(l + 2)] << 6 | ft[e.charCodeAt(l + 3)], h[b++] = t >> 16 & 255, h[b++] = t >> 8 & 255, h[b++] = t & 255;
  return c === 2 && (t = ft[e.charCodeAt(l)] << 2 | ft[e.charCodeAt(l + 1)] >> 4, h[b++] = t & 255), c === 1 && (t = ft[e.charCodeAt(l)] << 10 | ft[e.charCodeAt(l + 1)] << 4 | ft[e.charCodeAt(l + 2)] >> 2, h[b++] = t >> 8 & 255, h[b++] = t & 255), h;
}
function xc(e) {
  return dt[e >> 18 & 63] + dt[e >> 12 & 63] + dt[e >> 6 & 63] + dt[e & 63];
}
function Nc(e, t, n) {
  for (var u, c = [], h = t; h < n; h += 3)
    u = (e[h] << 16 & 16711680) + (e[h + 1] << 8 & 65280) + (e[h + 2] & 255), c.push(xc(u));
  return c.join("");
}
function Uc(e) {
  for (var t, n = e.length, u = n % 3, c = [], h = 16383, b = 0, s = n - u; b < s; b += h)
    c.push(Nc(e, b, b + h > s ? s : b + h));
  return u === 1 ? (t = e[n - 1], c.push(dt[t >> 2] + dt[t << 4 & 63] + "==")) : u === 2 && (t = (e[n - 2] << 8) + e[n - 1], c.push(dt[t >> 10] + dt[t >> 4 & 63] + dt[t << 2 & 63] + "=")), c.join("");
}
var en = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
en.read = function(e, t, n, u, c) {
  var h, b, s = c * 8 - u - 1, l = (1 << s) - 1, y = l >> 1, v = -7, N = n ? c - 1 : 0, C = n ? -1 : 1, O = e[t + N];
  for (N += C, h = O & (1 << -v) - 1, O >>= -v, v += s; v > 0; h = h * 256 + e[t + N], N += C, v -= 8)
    ;
  for (b = h & (1 << -v) - 1, h >>= -v, v += u; v > 0; b = b * 256 + e[t + N], N += C, v -= 8)
    ;
  if (h === 0)
    h = 1 - y;
  else {
    if (h === l)
      return b ? NaN : (O ? -1 : 1) * (1 / 0);
    b = b + Math.pow(2, u), h = h - y;
  }
  return (O ? -1 : 1) * b * Math.pow(2, h - u);
}, en.write = function(e, t, n, u, c, h) {
  var b, s, l, y = h * 8 - c - 1, v = (1 << y) - 1, N = v >> 1, C = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, O = u ? 0 : h - 1, A = u ? 1 : -1, k = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, b = v) : (b = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -b)) < 1 && (b--, l *= 2), b + N >= 1 ? t += C / l : t += C * Math.pow(2, 1 - N), t * l >= 2 && (b++, l /= 2), b + N >= v ? (s = 0, b = v) : b + N >= 1 ? (s = (t * l - 1) * Math.pow(2, c), b = b + N) : (s = t * Math.pow(2, N - 1) * Math.pow(2, c), b = 0)); c >= 8; e[n + O] = s & 255, O += A, s /= 256, c -= 8)
    ;
  for (b = b << c | s, y += c; y > 0; e[n + O] = b & 255, O += A, b /= 256, y -= 8)
    ;
  e[n + O - A] |= k * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(e) {
  const t = br, n = en, u = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s, e.SlowBuffer = B, e.INSPECT_MAX_BYTES = 50;
  const c = 2147483647;
  e.kMaxLength = c, s.TYPED_ARRAY_SUPPORT = h(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function h() {
    try {
      const r = new Uint8Array(1), a = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(a, Uint8Array.prototype), Object.setPrototypeOf(r, a), r.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", { enumerable: !0, get: function() {
    if (s.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(s.prototype, "offset", { enumerable: !0, get: function() {
    if (s.isBuffer(this))
      return this.byteOffset;
  } });
  function b(r) {
    if (r > c)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
    const a = new Uint8Array(r);
    return Object.setPrototypeOf(a, s.prototype), a;
  }
  function s(r, a, f) {
    if (typeof r == "number") {
      if (typeof a == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return N(r);
    }
    return l(r, a, f);
  }
  s.poolSize = 8192;
  function l(r, a, f) {
    if (typeof r == "string")
      return C(r, a);
    if (ArrayBuffer.isView(r))
      return A(r);
    if (r == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
    if (fe(r, ArrayBuffer) || r && fe(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (fe(r, SharedArrayBuffer) || r && fe(r.buffer, SharedArrayBuffer)))
      return k(r, a, f);
    if (typeof r == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    const w = r.valueOf && r.valueOf();
    if (w != null && w !== r)
      return s.from(w, a, f);
    const S = H(r);
    if (S)
      return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
      return s.from(r[Symbol.toPrimitive]("string"), a, f);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
  }
  s.from = function(r, a, f) {
    return l(r, a, f);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function y(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  function v(r, a, f) {
    return y(r), r <= 0 ? b(r) : a !== void 0 ? typeof f == "string" ? b(r).fill(a, f) : b(r).fill(a) : b(r);
  }
  s.alloc = function(r, a, f) {
    return v(r, a, f);
  };
  function N(r) {
    return y(r), b(r < 0 ? 0 : X(r) | 0);
  }
  s.allocUnsafe = function(r) {
    return N(r);
  }, s.allocUnsafeSlow = function(r) {
    return N(r);
  };
  function C(r, a) {
    if ((typeof a != "string" || a === "") && (a = "utf8"), !s.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
    const f = T(r, a) | 0;
    let w = b(f);
    const S = w.write(r, a);
    return S !== f && (w = w.slice(0, S)), w;
  }
  function O(r) {
    const a = r.length < 0 ? 0 : X(r.length) | 0, f = b(a);
    for (let w = 0; w < a; w += 1)
      f[w] = r[w] & 255;
    return f;
  }
  function A(r) {
    if (fe(r, Uint8Array)) {
      const a = new Uint8Array(r);
      return k(a.buffer, a.byteOffset, a.byteLength);
    }
    return O(r);
  }
  function k(r, a, f) {
    if (a < 0 || r.byteLength < a)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < a + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let w;
    return a === void 0 && f === void 0 ? w = new Uint8Array(r) : f === void 0 ? w = new Uint8Array(r, a) : w = new Uint8Array(r, a, f), Object.setPrototypeOf(w, s.prototype), w;
  }
  function H(r) {
    if (s.isBuffer(r)) {
      const a = X(r.length) | 0, f = b(a);
      return f.length === 0 || r.copy(f, 0, 0, a), f;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || ye(r.length) ? b(0) : O(r);
    if (r.type === "Buffer" && Array.isArray(r.data))
      return O(r.data);
  }
  function X(r) {
    if (r >= c)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
    return r | 0;
  }
  function B(r) {
    return +r != r && (r = 0), s.alloc(+r);
  }
  s.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== s.prototype;
  }, s.compare = function(r, a) {
    if (fe(r, Uint8Array) && (r = s.from(r, r.offset, r.byteLength)), fe(a, Uint8Array) && (a = s.from(a, a.offset, a.byteLength)), !s.isBuffer(r) || !s.isBuffer(a))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (r === a)
      return 0;
    let f = r.length, w = a.length;
    for (let S = 0, I = Math.min(f, w); S < I; ++S)
      if (r[S] !== a[S]) {
        f = r[S], w = a[S];
        break;
      }
    return f < w ? -1 : w < f ? 1 : 0;
  }, s.isEncoding = function(r) {
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
  }, s.concat = function(r, a) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return s.alloc(0);
    let f;
    if (a === void 0)
      for (a = 0, f = 0; f < r.length; ++f)
        a += r[f].length;
    const w = s.allocUnsafe(a);
    let S = 0;
    for (f = 0; f < r.length; ++f) {
      let I = r[f];
      if (fe(I, Uint8Array))
        S + I.length > w.length ? (s.isBuffer(I) || (I = s.from(I)), I.copy(w, S)) : Uint8Array.prototype.set.call(w, I, S);
      else if (s.isBuffer(I))
        I.copy(w, S);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      S += I.length;
    }
    return w;
  };
  function T(r, a) {
    if (s.isBuffer(r))
      return r.length;
    if (ArrayBuffer.isView(r) || fe(r, ArrayBuffer))
      return r.byteLength;
    if (typeof r != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
    const f = r.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && f === 0)
      return 0;
    let S = !1;
    for (; ; )
      switch (a) {
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
          if (S)
            return w ? -1 : Le(r).length;
          a = ("" + a).toLowerCase(), S = !0;
      }
  }
  s.byteLength = T;
  function _(r, a, f) {
    let w = !1;
    if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, a >>>= 0, f <= a))
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return P(this, a, f);
        case "utf8":
        case "utf-8":
          return d(this, a, f);
        case "ascii":
          return Y(this, a, f);
        case "latin1":
        case "binary":
          return R(this, a, f);
        case "base64":
          return ne(this, a, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return W(this, a, f);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + r);
          r = (r + "").toLowerCase(), w = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function m(r, a, f) {
    const w = r[a];
    r[a] = r[f], r[f] = w;
  }
  s.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let a = 0; a < r; a += 2)
      m(this, a, a + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let a = 0; a < r; a += 4)
      m(this, a, a + 3), m(this, a + 1, a + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let a = 0; a < r; a += 8)
      m(this, a, a + 7), m(this, a + 1, a + 6), m(this, a + 2, a + 5), m(this, a + 3, a + 4);
    return this;
  }, s.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? d(this, 0, r) : _.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(r) {
    if (!s.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : s.compare(this, r) === 0;
  }, s.prototype.inspect = function() {
    let r = "";
    const a = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (r += " ... "), "<Buffer " + r + ">";
  }, u && (s.prototype[u] = s.prototype.inspect), s.prototype.compare = function(r, a, f, w, S) {
    if (fe(r, Uint8Array) && (r = s.from(r, r.offset, r.byteLength)), !s.isBuffer(r))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
    if (a === void 0 && (a = 0), f === void 0 && (f = r ? r.length : 0), w === void 0 && (w = 0), S === void 0 && (S = this.length), a < 0 || f > r.length || w < 0 || S > this.length)
      throw new RangeError("out of range index");
    if (w >= S && a >= f)
      return 0;
    if (w >= S)
      return -1;
    if (a >= f)
      return 1;
    if (a >>>= 0, f >>>= 0, w >>>= 0, S >>>= 0, this === r)
      return 0;
    let I = S - w, D = f - a;
    const ie = Math.min(I, D), ae = this.slice(w, S), Ee = r.slice(a, f);
    for (let me = 0; me < ie; ++me)
      if (ae[me] !== Ee[me]) {
        I = ae[me], D = Ee[me];
        break;
      }
    return I < D ? -1 : D < I ? 1 : 0;
  };
  function E(r, a, f, w, S) {
    if (r.length === 0)
      return -1;
    if (typeof f == "string" ? (w = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, ye(f) && (f = S ? 0 : r.length - 1), f < 0 && (f = r.length + f), f >= r.length) {
      if (S)
        return -1;
      f = r.length - 1;
    } else if (f < 0)
      if (S)
        f = 0;
      else
        return -1;
    if (typeof a == "string" && (a = s.from(a, w)), s.isBuffer(a))
      return a.length === 0 ? -1 : o(r, a, f, w, S);
    if (typeof a == "number")
      return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(r, a, f) : Uint8Array.prototype.lastIndexOf.call(r, a, f) : o(r, [a], f, w, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function o(r, a, f, w, S) {
    let I = 1, D = r.length, ie = a.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (r.length < 2 || a.length < 2)
        return -1;
      I = 2, D /= 2, ie /= 2, f /= 2;
    }
    function ae(me, Oe) {
      return I === 1 ? me[Oe] : me.readUInt16BE(Oe * I);
    }
    let Ee;
    if (S) {
      let me = -1;
      for (Ee = f; Ee < D; Ee++)
        if (ae(r, Ee) === ae(a, me === -1 ? 0 : Ee - me)) {
          if (me === -1 && (me = Ee), Ee - me + 1 === ie)
            return me * I;
        } else
          me !== -1 && (Ee -= Ee - me), me = -1;
    } else
      for (f + ie > D && (f = D - ie), Ee = f; Ee >= 0; Ee--) {
        let me = !0;
        for (let Oe = 0; Oe < ie; Oe++)
          if (ae(r, Ee + Oe) !== ae(a, Oe)) {
            me = !1;
            break;
          }
        if (me)
          return Ee;
      }
    return -1;
  }
  s.prototype.includes = function(r, a, f) {
    return this.indexOf(r, a, f) !== -1;
  }, s.prototype.indexOf = function(r, a, f) {
    return E(this, r, a, f, !0);
  }, s.prototype.lastIndexOf = function(r, a, f) {
    return E(this, r, a, f, !1);
  };
  function p(r, a, f, w) {
    f = Number(f) || 0;
    const S = r.length - f;
    w ? (w = Number(w), w > S && (w = S)) : w = S;
    const I = a.length;
    w > I / 2 && (w = I / 2);
    let D;
    for (D = 0; D < w; ++D) {
      const ie = parseInt(a.substr(D * 2, 2), 16);
      if (ye(ie))
        return D;
      r[f + D] = ie;
    }
    return D;
  }
  function K(r, a, f, w) {
    return ge(Le(a, r.length - f), r, f, w);
  }
  function q(r, a, f, w) {
    return ge(Ne(a), r, f, w);
  }
  function Q(r, a, f, w) {
    return ge(we(a), r, f, w);
  }
  function ee(r, a, f, w) {
    return ge(Me(a, r.length - f), r, f, w);
  }
  s.prototype.write = function(r, a, f, w) {
    if (a === void 0)
      w = "utf8", f = this.length, a = 0;
    else if (f === void 0 && typeof a == "string")
      w = a, f = this.length, a = 0;
    else if (isFinite(a))
      a = a >>> 0, isFinite(f) ? (f = f >>> 0, w === void 0 && (w = "utf8")) : (w = f, f = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const S = this.length - a;
    if ((f === void 0 || f > S) && (f = S), r.length > 0 && (f < 0 || a < 0) || a > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let I = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return p(this, r, a, f);
        case "utf8":
        case "utf-8":
          return K(this, r, a, f);
        case "ascii":
        case "latin1":
        case "binary":
          return q(this, r, a, f);
        case "base64":
          return Q(this, r, a, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, r, a, f);
        default:
          if (I)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), I = !0;
      }
  }, s.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function ne(r, a, f) {
    return a === 0 && f === r.length ? t.fromByteArray(r) : t.fromByteArray(r.slice(a, f));
  }
  function d(r, a, f) {
    f = Math.min(r.length, f);
    const w = [];
    let S = a;
    for (; S < f; ) {
      const I = r[S];
      let D = null, ie = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (S + ie <= f) {
        let ae, Ee, me, Oe;
        switch (ie) {
          case 1:
            I < 128 && (D = I);
            break;
          case 2:
            ae = r[S + 1], (ae & 192) === 128 && (Oe = (I & 31) << 6 | ae & 63, Oe > 127 && (D = Oe));
            break;
          case 3:
            ae = r[S + 1], Ee = r[S + 2], (ae & 192) === 128 && (Ee & 192) === 128 && (Oe = (I & 15) << 12 | (ae & 63) << 6 | Ee & 63, Oe > 2047 && (Oe < 55296 || Oe > 57343) && (D = Oe));
            break;
          case 4:
            ae = r[S + 1], Ee = r[S + 2], me = r[S + 3], (ae & 192) === 128 && (Ee & 192) === 128 && (me & 192) === 128 && (Oe = (I & 15) << 18 | (ae & 63) << 12 | (Ee & 63) << 6 | me & 63, Oe > 65535 && Oe < 1114112 && (D = Oe));
        }
      }
      D === null ? (D = 65533, ie = 1) : D > 65535 && (D -= 65536, w.push(D >>> 10 & 1023 | 55296), D = 56320 | D & 1023), w.push(D), S += ie;
    }
    return V(w);
  }
  const F = 4096;
  function V(r) {
    const a = r.length;
    if (a <= F)
      return String.fromCharCode.apply(String, r);
    let f = "", w = 0;
    for (; w < a; )
      f += String.fromCharCode.apply(String, r.slice(w, w += F));
    return f;
  }
  function Y(r, a, f) {
    let w = "";
    f = Math.min(r.length, f);
    for (let S = a; S < f; ++S)
      w += String.fromCharCode(r[S] & 127);
    return w;
  }
  function R(r, a, f) {
    let w = "";
    f = Math.min(r.length, f);
    for (let S = a; S < f; ++S)
      w += String.fromCharCode(r[S]);
    return w;
  }
  function P(r, a, f) {
    const w = r.length;
    (!a || a < 0) && (a = 0), (!f || f < 0 || f > w) && (f = w);
    let S = "";
    for (let I = a; I < f; ++I)
      S += _e[r[I]];
    return S;
  }
  function W(r, a, f) {
    const w = r.slice(a, f);
    let S = "";
    for (let I = 0; I < w.length - 1; I += 2)
      S += String.fromCharCode(w[I] + w[I + 1] * 256);
    return S;
  }
  s.prototype.slice = function(r, a) {
    const f = this.length;
    r = ~~r, a = a === void 0 ? f : ~~a, r < 0 ? (r += f, r < 0 && (r = 0)) : r > f && (r = f), a < 0 ? (a += f, a < 0 && (a = 0)) : a > f && (a = f), a < r && (a = r);
    const w = this.subarray(r, a);
    return Object.setPrototypeOf(w, s.prototype), w;
  };
  function z(r, a, f) {
    if (r % 1 !== 0 || r < 0)
      throw new RangeError("offset is not uint");
    if (r + a > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(r, a, f) {
    r = r >>> 0, a = a >>> 0, f || z(r, a, this.length);
    let w = this[r], S = 1, I = 0;
    for (; ++I < a && (S *= 256); )
      w += this[r + I] * S;
    return w;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(r, a, f) {
    r = r >>> 0, a = a >>> 0, f || z(r, a, this.length);
    let w = this[r + --a], S = 1;
    for (; a > 0 && (S *= 256); )
      w += this[r + --a] * S;
    return w;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(r, a) {
    return r = r >>> 0, a || z(r, 1, this.length), this[r];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(r, a) {
    return r = r >>> 0, a || z(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(r, a) {
    return r = r >>> 0, a || z(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(r, a) {
    return r = r >>> 0, a || z(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(r, a) {
    return r = r >>> 0, a || z(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, s.prototype.readBigUInt64LE = ue(function(r) {
    r = r >>> 0, J(r, "offset");
    const a = this[r], f = this[r + 7];
    (a === void 0 || f === void 0) && he(r, this.length - 8);
    const w = a + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, S = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + f * 2 ** 24;
    return BigInt(w) + (BigInt(S) << BigInt(32));
  }), s.prototype.readBigUInt64BE = ue(function(r) {
    r = r >>> 0, J(r, "offset");
    const a = this[r], f = this[r + 7];
    (a === void 0 || f === void 0) && he(r, this.length - 8);
    const w = a * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], S = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + f;
    return (BigInt(w) << BigInt(32)) + BigInt(S);
  }), s.prototype.readIntLE = function(r, a, f) {
    r = r >>> 0, a = a >>> 0, f || z(r, a, this.length);
    let w = this[r], S = 1, I = 0;
    for (; ++I < a && (S *= 256); )
      w += this[r + I] * S;
    return S *= 128, w >= S && (w -= Math.pow(2, 8 * a)), w;
  }, s.prototype.readIntBE = function(r, a, f) {
    r = r >>> 0, a = a >>> 0, f || z(r, a, this.length);
    let w = a, S = 1, I = this[r + --w];
    for (; w > 0 && (S *= 256); )
      I += this[r + --w] * S;
    return S *= 128, I >= S && (I -= Math.pow(2, 8 * a)), I;
  }, s.prototype.readInt8 = function(r, a) {
    return r = r >>> 0, a || z(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, s.prototype.readInt16LE = function(r, a) {
    r = r >>> 0, a || z(r, 2, this.length);
    const f = this[r] | this[r + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, s.prototype.readInt16BE = function(r, a) {
    r = r >>> 0, a || z(r, 2, this.length);
    const f = this[r + 1] | this[r] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, s.prototype.readInt32LE = function(r, a) {
    return r = r >>> 0, a || z(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, s.prototype.readInt32BE = function(r, a) {
    return r = r >>> 0, a || z(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, s.prototype.readBigInt64LE = ue(function(r) {
    r = r >>> 0, J(r, "offset");
    const a = this[r], f = this[r + 7];
    (a === void 0 || f === void 0) && he(r, this.length - 8);
    const w = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (f << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(a + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), s.prototype.readBigInt64BE = ue(function(r) {
    r = r >>> 0, J(r, "offset");
    const a = this[r], f = this[r + 7];
    (a === void 0 || f === void 0) && he(r, this.length - 8);
    const w = (a << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + f);
  }), s.prototype.readFloatLE = function(r, a) {
    return r = r >>> 0, a || z(r, 4, this.length), n.read(this, r, !0, 23, 4);
  }, s.prototype.readFloatBE = function(r, a) {
    return r = r >>> 0, a || z(r, 4, this.length), n.read(this, r, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(r, a) {
    return r = r >>> 0, a || z(r, 8, this.length), n.read(this, r, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(r, a) {
    return r = r >>> 0, a || z(r, 8, this.length), n.read(this, r, !1, 52, 8);
  };
  function oe(r, a, f, w, S, I) {
    if (!s.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > S || a < I)
      throw new RangeError('"value" argument is out of bounds');
    if (f + w > r.length)
      throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(r, a, f, w) {
    if (r = +r, a = a >>> 0, f = f >>> 0, !w) {
      const D = Math.pow(2, 8 * f) - 1;
      oe(this, r, a, f, D, 0);
    }
    let S = 1, I = 0;
    for (this[a] = r & 255; ++I < f && (S *= 256); )
      this[a + I] = r / S & 255;
    return a + f;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(r, a, f, w) {
    if (r = +r, a = a >>> 0, f = f >>> 0, !w) {
      const D = Math.pow(2, 8 * f) - 1;
      oe(this, r, a, f, D, 0);
    }
    let S = f - 1, I = 1;
    for (this[a + S] = r & 255; --S >= 0 && (I *= 256); )
      this[a + S] = r / I & 255;
    return a + f;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 1, 255, 0), this[a] = r & 255, a + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 2, 65535, 0), this[a] = r & 255, this[a + 1] = r >>> 8, a + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 2, 65535, 0), this[a] = r >>> 8, this[a + 1] = r & 255, a + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 4, 4294967295, 0), this[a + 3] = r >>> 24, this[a + 2] = r >>> 16, this[a + 1] = r >>> 8, this[a] = r & 255, a + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 4, 4294967295, 0), this[a] = r >>> 24, this[a + 1] = r >>> 16, this[a + 2] = r >>> 8, this[a + 3] = r & 255, a + 4;
  };
  function Z(r, a, f, w, S) {
    G(a, w, S, r, f, 7);
    let I = Number(a & BigInt(4294967295));
    r[f++] = I, I = I >> 8, r[f++] = I, I = I >> 8, r[f++] = I, I = I >> 8, r[f++] = I;
    let D = Number(a >> BigInt(32) & BigInt(4294967295));
    return r[f++] = D, D = D >> 8, r[f++] = D, D = D >> 8, r[f++] = D, D = D >> 8, r[f++] = D, f;
  }
  function se(r, a, f, w, S) {
    G(a, w, S, r, f, 7);
    let I = Number(a & BigInt(4294967295));
    r[f + 7] = I, I = I >> 8, r[f + 6] = I, I = I >> 8, r[f + 5] = I, I = I >> 8, r[f + 4] = I;
    let D = Number(a >> BigInt(32) & BigInt(4294967295));
    return r[f + 3] = D, D = D >> 8, r[f + 2] = D, D = D >> 8, r[f + 1] = D, D = D >> 8, r[f] = D, f + 8;
  }
  s.prototype.writeBigUInt64LE = ue(function(r, a = 0) {
    return Z(this, r, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = ue(function(r, a = 0) {
    return se(this, r, a, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(r, a, f, w) {
    if (r = +r, a = a >>> 0, !w) {
      const ie = Math.pow(2, 8 * f - 1);
      oe(this, r, a, f, ie - 1, -ie);
    }
    let S = 0, I = 1, D = 0;
    for (this[a] = r & 255; ++S < f && (I *= 256); )
      r < 0 && D === 0 && this[a + S - 1] !== 0 && (D = 1), this[a + S] = (r / I >> 0) - D & 255;
    return a + f;
  }, s.prototype.writeIntBE = function(r, a, f, w) {
    if (r = +r, a = a >>> 0, !w) {
      const ie = Math.pow(2, 8 * f - 1);
      oe(this, r, a, f, ie - 1, -ie);
    }
    let S = f - 1, I = 1, D = 0;
    for (this[a + S] = r & 255; --S >= 0 && (I *= 256); )
      r < 0 && D === 0 && this[a + S + 1] !== 0 && (D = 1), this[a + S] = (r / I >> 0) - D & 255;
    return a + f;
  }, s.prototype.writeInt8 = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[a] = r & 255, a + 1;
  }, s.prototype.writeInt16LE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 2, 32767, -32768), this[a] = r & 255, this[a + 1] = r >>> 8, a + 2;
  }, s.prototype.writeInt16BE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 2, 32767, -32768), this[a] = r >>> 8, this[a + 1] = r & 255, a + 2;
  }, s.prototype.writeInt32LE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 4, 2147483647, -2147483648), this[a] = r & 255, this[a + 1] = r >>> 8, this[a + 2] = r >>> 16, this[a + 3] = r >>> 24, a + 4;
  }, s.prototype.writeInt32BE = function(r, a, f) {
    return r = +r, a = a >>> 0, f || oe(this, r, a, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[a] = r >>> 24, this[a + 1] = r >>> 16, this[a + 2] = r >>> 8, this[a + 3] = r & 255, a + 4;
  }, s.prototype.writeBigInt64LE = ue(function(r, a = 0) {
    return Z(this, r, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = ue(function(r, a = 0) {
    return se(this, r, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function te(r, a, f, w, S, I) {
    if (f + w > r.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function de(r, a, f, w, S) {
    return a = +a, f = f >>> 0, S || te(r, a, f, 4), n.write(r, a, f, w, 23, 4), f + 4;
  }
  s.prototype.writeFloatLE = function(r, a, f) {
    return de(this, r, a, !0, f);
  }, s.prototype.writeFloatBE = function(r, a, f) {
    return de(this, r, a, !1, f);
  };
  function j(r, a, f, w, S) {
    return a = +a, f = f >>> 0, S || te(r, a, f, 8), n.write(r, a, f, w, 52, 8), f + 8;
  }
  s.prototype.writeDoubleLE = function(r, a, f) {
    return j(this, r, a, !0, f);
  }, s.prototype.writeDoubleBE = function(r, a, f) {
    return j(this, r, a, !1, f);
  }, s.prototype.copy = function(r, a, f, w) {
    if (!s.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !w && w !== 0 && (w = this.length), a >= r.length && (a = r.length), a || (a = 0), w > 0 && w < f && (w = f), w === f || r.length === 0 || this.length === 0)
      return 0;
    if (a < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), r.length - a < w - f && (w = r.length - a + f);
    const S = w - f;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, f, w) : Uint8Array.prototype.set.call(r, this.subarray(f, w), a), S;
  }, s.prototype.fill = function(r, a, f, w) {
    if (typeof r == "string") {
      if (typeof a == "string" ? (w = a, a = 0, f = this.length) : typeof f == "string" && (w = f, f = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !s.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (r.length === 1) {
        const I = r.charCodeAt(0);
        (w === "utf8" && I < 128 || w === "latin1") && (r = I);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (a < 0 || this.length < a || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= a)
      return this;
    a = a >>> 0, f = f === void 0 ? this.length : f >>> 0, r || (r = 0);
    let S;
    if (typeof r == "number")
      for (S = a; S < f; ++S)
        this[S] = r;
    else {
      const I = s.isBuffer(r) ? r : s.from(r, w), D = I.length;
      if (D === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (S = 0; S < f - a; ++S)
        this[S + a] = I[S % D];
    }
    return this;
  };
  const U = {};
  function M(r, a, f) {
    U[r] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: a.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
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
  M("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
    return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), M("ERR_INVALID_ARG_TYPE", function(r, a) {
    return `The "${r}" argument must be of type number. Received type ${typeof a}`;
  }, TypeError), M("ERR_OUT_OF_RANGE", function(r, a, f) {
    let w = `The value of "${r}" is out of range.`, S = f;
    return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? S = i(String(f)) : typeof f == "bigint" && (S = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (S = i(S)), S += "n"), w += ` It must be ${a}. Received ${S}`, w;
  }, RangeError);
  function i(r) {
    let a = "", f = r.length;
    const w = r[0] === "-" ? 1 : 0;
    for (; f >= w + 4; f -= 3)
      a = `_${r.slice(f - 3, f)}${a}`;
    return `${r.slice(0, f)}${a}`;
  }
  function L(r, a, f) {
    J(a, "offset"), (r[a] === void 0 || r[a + f] === void 0) && he(a, r.length - (f + 1));
  }
  function G(r, a, f, w, S, I) {
    if (r > f || r < a) {
      const D = typeof a == "bigint" ? "n" : "";
      let ie;
      throw I > 3 ? a === 0 || a === BigInt(0) ? ie = `>= 0${D} and < 2${D} ** ${(I + 1) * 8}${D}` : ie = `>= -(2${D} ** ${(I + 1) * 8 - 1}${D}) and < 2 ** ${(I + 1) * 8 - 1}${D}` : ie = `>= ${a}${D} and <= ${f}${D}`, new U.ERR_OUT_OF_RANGE("value", ie, r);
    }
    L(w, S, I);
  }
  function J(r, a) {
    if (typeof r != "number")
      throw new U.ERR_INVALID_ARG_TYPE(a, "number", r);
  }
  function he(r, a, f) {
    throw Math.floor(r) !== r ? (J(r, f), new U.ERR_OUT_OF_RANGE(f || "offset", "an integer", r)) : a < 0 ? new U.ERR_BUFFER_OUT_OF_BOUNDS() : new U.ERR_OUT_OF_RANGE(f || "offset", `>= ${f ? 1 : 0} and <= ${a}`, r);
  }
  const Fe = /[^+/0-9A-Za-z-_]/g;
  function ve(r) {
    if (r = r.split("=")[0], r = r.trim().replace(Fe, ""), r.length < 2)
      return "";
    for (; r.length % 4 !== 0; )
      r = r + "=";
    return r;
  }
  function Le(r, a) {
    a = a || 1 / 0;
    let f;
    const w = r.length;
    let S = null;
    const I = [];
    for (let D = 0; D < w; ++D) {
      if (f = r.charCodeAt(D), f > 55295 && f < 57344) {
        if (!S) {
          if (f > 56319) {
            (a -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (D + 1 === w) {
            (a -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          S = f;
          continue;
        }
        if (f < 56320) {
          (a -= 3) > -1 && I.push(239, 191, 189), S = f;
          continue;
        }
        f = (S - 55296 << 10 | f - 56320) + 65536;
      } else
        S && (a -= 3) > -1 && I.push(239, 191, 189);
      if (S = null, f < 128) {
        if ((a -= 1) < 0)
          break;
        I.push(f);
      } else if (f < 2048) {
        if ((a -= 2) < 0)
          break;
        I.push(f >> 6 | 192, f & 63 | 128);
      } else if (f < 65536) {
        if ((a -= 3) < 0)
          break;
        I.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128);
      } else if (f < 1114112) {
        if ((a -= 4) < 0)
          break;
        I.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function Ne(r) {
    const a = [];
    for (let f = 0; f < r.length; ++f)
      a.push(r.charCodeAt(f) & 255);
    return a;
  }
  function Me(r, a) {
    let f, w, S;
    const I = [];
    for (let D = 0; D < r.length && !((a -= 2) < 0); ++D)
      f = r.charCodeAt(D), w = f >> 8, S = f % 256, I.push(S), I.push(w);
    return I;
  }
  function we(r) {
    return t.toByteArray(ve(r));
  }
  function ge(r, a, f, w) {
    let S;
    for (S = 0; S < w && !(S + f >= a.length || S >= r.length); ++S)
      a[S + f] = r[S];
    return S;
  }
  function fe(r, a) {
    return r instanceof a || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === a.name;
  }
  function ye(r) {
    return r !== r;
  }
  const _e = function() {
    const r = "0123456789abcdef", a = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const w = f * 16;
      for (let S = 0; S < 16; ++S)
        a[w + S] = r[f] + r[S];
    }
    return a;
  }();
  function ue(r) {
    return typeof BigInt > "u" ? le : r;
  }
  function le() {
    throw new Error("BigInt not supported");
  }
})(si);
At({ selectedChain: void 0, chains: void 0, standaloneChains: void 0, standaloneUri: void 0, address: void 0, profileName: void 0, profileAvatar: void 0, profileLoading: !1, balanceLoading: !1, balance: void 0, isConnected: !1, isStandalone: !1, isCustomDesktop: !1, isCustomMobile: !1, isExplorer: !1 });
At({ initialized: !1, ethereumClient: void 0 });
const Nt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", isMobile() {
  return typeof window < "u" ? Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Nt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isEmptyObject(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.getOwnPropertyNames(e).length === 0 && Object.getOwnPropertySymbols(e).length === 0;
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, formatNativeUrl(e, t, n) {
  if (Nt.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, n);
  let u = e;
  u.includes("://") || (u = e.replaceAll("/", "").replaceAll(":", ""), u = `${u}://`), this.setWalletConnectDeepLink(u, n);
  const c = encodeURIComponent(t);
  return `${u}wc?uri=${c}`;
}, formatUniversalUrl(e, t, n) {
  if (!Nt.isHttpUrl(e))
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
  localStorage.setItem(Nt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
}, setWalletConnectAndroidDeepLink(e) {
  const [t] = e.split("?");
  localStorage.setItem(Nt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
}, removeWalletConnectDeepLink() {
  localStorage.removeItem(Nt.WALLETCONNECT_DEEPLINK_CHOICE);
}, isNull(e) {
  return e === null;
} };
function jc() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
At({ projectId: void 0, themeMode: jc() ? "dark" : "light", themeColor: "default", themeBackground: Nt.isMobile() ? "themeColor" : "gradient", themeZIndex: 89, mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chainImages: void 0, tokenImages: void 0, standaloneChains: void 0, enableStandaloneMode: !1, enableNetworkView: !1, defaultChain: void 0, explorerAllowList: void 0, explorerDenyList: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 });
At({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, previewWallets: [], recomendedWallets: [] });
At({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 });
At({ open: !1 });
At({ open: !1, message: "", variant: "success" });
typeof window < "u" && (window.Buffer || (window.Buffer = si.Buffer), window.global || (window.global = window), window.process || (window.process = { env: {} }));
const Ic = "_btn_1ij5m_5", Cc = "_active_1ij5m_19", kc = "_can_not_switch_1ij5m_36", Ir = {
  btn: Ic,
  active: Cc,
  can_not_switch: kc
}, Pc = ({
  chain: e,
  loading: t,
  disabled: n,
  isActive: u,
  canSwitchChain: c,
  onClick: h
}) => {
  const {
    name: b,
    chainId: s
  } = e;
  let l = u ? Ir.active : Ir.btn;
  const y = c && !u;
  let v;
  return y ? v = () => h() : (l = `${l} ${Ir.can_not_switch}`, v = () => {
  }), /* @__PURE__ */ ce(ea, {
    block: !0,
    className: l,
    disabled: t || n,
    icon: Qi(s, 23, 23),
    onClick: v,
    children: b
  });
}, qc = ({
  chain: e,
  loading: t,
  connectedChainId: n,
  expectedChainId: u,
  canSwitchChain: c,
  onClick: h
}) => {
  const {
    chainId: b
  } = e, s = b === n;
  let l;
  return !s && u && (l = b !== u), /* @__PURE__ */ ce(Pc, {
    onClick: h,
    loading: t,
    disabled: l,
    isActive: s,
    canSwitchChain: c,
    chain: e
  });
}, Rc = "_chain_name_8kdgo_1", Hc = {
  chain_name: Rc
}, Dc = "_bold_5fnjw_5", Fo = {
  bold: Dc
}, fi = ({
  className: e,
  children: t
}) => {
  const n = e ? `${e} ${Fo.bold}` : Fo.bold;
  return /* @__PURE__ */ ce("span", {
    className: n,
    children: t
  });
}, Jt = ({
  children: e
}) => /* @__PURE__ */ ce(fi, {
  className: Hc.chain_name,
  children: e
}), Xc = ({
  account: e,
  chain: t,
  supportedChains: n,
  expectedChainId: u
}) => e ? u ? /* @__PURE__ */ wt(Mr, {
  children: ["You connected to ", /* @__PURE__ */ wt(Jt, {
    children: [t.name, "."]
  }), /* @__PURE__ */ wt("div", {
    children: ["Please connect to ", /* @__PURE__ */ ce(Jt, {
      children: Ji(u)
    }), " network."]
  })]
}) : n.some((c) => c.name === t.name) ? /* @__PURE__ */ wt(Mr, {
  children: ["You are currently using ", /* @__PURE__ */ ce(fi, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ ce(Jt, {
    children: t.name
  }), " network"]
}) : /* @__PURE__ */ wt(Mr, {
  children: ["You connected to ", /* @__PURE__ */ wt(Jt, {
    children: [t.name, "."]
  }), /* @__PURE__ */ wt("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ ce(Jt, {
      children: n.map((c) => c.name).join(", ")
    })]
  })]
}) : null;
export {
  Xc as A,
  fi as B,
  Kc as C,
  Yc as M,
  Wc as W,
  qc as a,
  na as n
};
//# sourceMappingURL=alert.9fd5fd3c.mjs.map
