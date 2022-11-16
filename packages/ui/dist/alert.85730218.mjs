import { j as st, t as Ai, a as zt, I as Un, g as Ci, F as dr, b as Li } from "./index.24ab7c3b.mjs";
import "ethers";
import { Button as Bi } from "antd";
var Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Si(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function() {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var f = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, f.get ? f : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
const vs = ({
  account: e,
  onClick: t,
  walletIcon: r,
  walletName: n,
  labelText: f
}) => {
  let i = /* @__PURE__ */ st("span", {
    className: "cnn",
    children: f
  }), p = "connect-wallet-button";
  return e && (i = /* @__PURE__ */ st("span", {
    className: "acc",
    children: Ai(e)
  }), p = `${p} active`), /* @__PURE__ */ zt("div", {
    onClick: e ? void 0 : t,
    className: p,
    children: [r, /* @__PURE__ */ st("span", {
      className: "wallet-name",
      children: n
    }), i]
  });
}, ki = () => /* @__PURE__ */ zt("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ st("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ st("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), gs = /* @__PURE__ */ st(Un, {
  component: ki
}), Fi = () => /* @__PURE__ */ st("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ st("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), ms = /* @__PURE__ */ st(Un, {
  component: Fi
});
var Hr = {}, vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.getLocalStorage = vt.getLocalStorageOrThrow = vt.getCrypto = vt.getCryptoOrThrow = vt.getLocation = vt.getLocationOrThrow = vt.getNavigator = vt.getNavigatorOrThrow = vt.getDocument = vt.getDocumentOrThrow = vt.getFromWindowOrThrow = On = vt.getFromWindow = void 0;
function ge(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
var On = vt.getFromWindow = ge;
function Ee(e) {
  const t = ge(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
vt.getFromWindowOrThrow = Ee;
function Ri() {
  return Ee("document");
}
vt.getDocumentOrThrow = Ri;
function Ti() {
  return ge("document");
}
vt.getDocument = Ti;
function Ii() {
  return Ee("navigator");
}
vt.getNavigatorOrThrow = Ii;
function Ni() {
  return ge("navigator");
}
vt.getNavigator = Ni;
function Ui() {
  return Ee("location");
}
vt.getLocationOrThrow = Ui;
function Oi() {
  return ge("location");
}
vt.getLocation = Oi;
function Pi() {
  return Ee("crypto");
}
vt.getCryptoOrThrow = Pi;
function Di() {
  return ge("crypto");
}
vt.getCrypto = Di;
function Hi() {
  return Ee("localStorage");
}
vt.getLocalStorageOrThrow = Hi;
function qi() {
  return ge("localStorage");
}
vt.getLocalStorage = qi;
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.getWindowMetadata = void 0;
const tn = vt;
function ji() {
  let e, t;
  try {
    e = tn.getDocumentOrThrow(), t = tn.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const R = e.getElementsByTagName("link"), I = [];
    for (let U = 0; U < R.length; U++) {
      const N = R[U], W = N.getAttribute("rel");
      if (W && W.toLowerCase().indexOf("icon") > -1) {
        const A = N.getAttribute("href");
        if (A)
          if (A.toLowerCase().indexOf("https:") === -1 && A.toLowerCase().indexOf("http:") === -1 && A.indexOf("//") !== 0) {
            let S = t.protocol + "//" + t.host;
            if (A.indexOf("/") === 0)
              S += A;
            else {
              const k = t.pathname.split("/");
              k.pop(), S += k.join("/") + "/" + A;
            }
            I.push(S);
          } else if (A.indexOf("//") === 0) {
            const S = t.protocol + A;
            I.push(S);
          } else
            I.push(A);
      }
    }
    return I;
  }
  function n(...R) {
    const I = e.getElementsByTagName("meta");
    for (let U = 0; U < I.length; U++) {
      const N = I[U], W = ["itemprop", "property", "name"].map((A) => N.getAttribute(A)).filter((A) => A ? R.includes(A) : !1);
      if (W.length && W) {
        const A = N.getAttribute("content");
        if (A)
          return A;
      }
    }
    return "";
  }
  function f() {
    let R = n("name", "og:site_name", "og:title", "twitter:title");
    return R || (R = e.title), R;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const p = f(), h = i(), v = t.origin, x = r();
  return {
    description: h,
    url: v,
    icons: x,
    name: p
  };
}
Hr.getWindowMetadata = ji;
const $i = On;
var zi = { exports: {} };
const Zi = {}, Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zi
}, Symbol.toStringTag, { value: "Module" })), Ye = /* @__PURE__ */ Si(Wi);
(function(e) {
  (function(t, r) {
    function n(E, o) {
      if (!E)
        throw new Error(o || "Assertion failed");
    }
    function f(E, o) {
      E.super_ = o;
      var l = function() {
      };
      l.prototype = o.prototype, E.prototype = new l(), E.prototype.constructor = E;
    }
    function i(E, o, l) {
      if (i.isBN(E))
        return E;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, E !== null && ((o === "le" || o === "be") && (l = o, o = 10), this._init(E || 0, o || 10, l || "be"));
    }
    typeof t == "object" ? t.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var p;
    try {
      p = Ye.Buffer;
    } catch {
    }
    i.isBN = function(o) {
      return o instanceof i ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === i.wordSize && Array.isArray(o.words);
    }, i.max = function(o, l) {
      return o.cmp(l) > 0 ? o : l;
    }, i.min = function(o, l) {
      return o.cmp(l) < 0 ? o : l;
    }, i.prototype._init = function(o, l, d) {
      if (typeof o == "number")
        return this._initNumber(o, l, d);
      if (typeof o == "object")
        return this._initArray(o, l, d);
      l === "hex" && (l = 16), n(l === (l | 0) && l >= 2 && l <= 36), o = o.toString().replace(/\s+/g, "");
      var m = 0;
      o[0] === "-" && m++, l === 16 ? this._parseHex(o, m) : this._parseBase(o, l, m), o[0] === "-" && (this.negative = 1), this.strip(), d === "le" && this._initArray(this.toArray(), l, d);
    }, i.prototype._initNumber = function(o, l, d) {
      o < 0 && (this.negative = 1, o = -o), o < 67108864 ? (this.words = [o & 67108863], this.length = 1) : o < 4503599627370496 ? (this.words = [
        o & 67108863,
        o / 67108864 & 67108863
      ], this.length = 2) : (n(o < 9007199254740992), this.words = [
        o & 67108863,
        o / 67108864 & 67108863,
        1
      ], this.length = 3), d === "le" && this._initArray(this.toArray(), l, d);
    }, i.prototype._initArray = function(o, l, d) {
      if (n(typeof o.length == "number"), o.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(o.length / 3), this.words = new Array(this.length);
      for (var m = 0; m < this.length; m++)
        this.words[m] = 0;
      var M, C, F = 0;
      if (d === "be")
        for (m = o.length - 1, M = 0; m >= 0; m -= 3)
          C = o[m] | o[m - 1] << 8 | o[m - 2] << 16, this.words[M] |= C << F & 67108863, this.words[M + 1] = C >>> 26 - F & 67108863, F += 24, F >= 26 && (F -= 26, M++);
      else if (d === "le")
        for (m = 0, M = 0; m < o.length; m += 3)
          C = o[m] | o[m + 1] << 8 | o[m + 2] << 16, this.words[M] |= C << F & 67108863, this.words[M + 1] = C >>> 26 - F & 67108863, F += 24, F >= 26 && (F -= 26, M++);
      return this.strip();
    };
    function h(E, o, l) {
      for (var d = 0, m = Math.min(E.length, l), M = o; M < m; M++) {
        var C = E.charCodeAt(M) - 48;
        d <<= 4, C >= 49 && C <= 54 ? d |= C - 49 + 10 : C >= 17 && C <= 22 ? d |= C - 17 + 10 : d |= C & 15;
      }
      return d;
    }
    i.prototype._parseHex = function(o, l) {
      this.length = Math.ceil((o.length - l) / 6), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        this.words[d] = 0;
      var m, M, C = 0;
      for (d = o.length - 6, m = 0; d >= l; d -= 6)
        M = h(o, d, d + 6), this.words[m] |= M << C & 67108863, this.words[m + 1] |= M >>> 26 - C & 4194303, C += 24, C >= 26 && (C -= 26, m++);
      d + 6 !== l && (M = h(o, l, d + 6), this.words[m] |= M << C & 67108863, this.words[m + 1] |= M >>> 26 - C & 4194303), this.strip();
    };
    function v(E, o, l, d) {
      for (var m = 0, M = Math.min(E.length, l), C = o; C < M; C++) {
        var F = E.charCodeAt(C) - 48;
        m *= d, F >= 49 ? m += F - 49 + 10 : F >= 17 ? m += F - 17 + 10 : m += F;
      }
      return m;
    }
    i.prototype._parseBase = function(o, l, d) {
      this.words = [0], this.length = 1;
      for (var m = 0, M = 1; M <= 67108863; M *= l)
        m++;
      m--, M = M / l | 0;
      for (var C = o.length - d, F = C % m, w = Math.min(C, C - F) + d, a = 0, g = d; g < w; g += m)
        a = v(o, g, g + m, l), this.imuln(M), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
      if (F !== 0) {
        var D = 1;
        for (a = v(o, g, o.length, l), g = 0; g < F; g++)
          D *= l;
        this.imuln(D), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
      }
    }, i.prototype.copy = function(o) {
      o.words = new Array(this.length);
      for (var l = 0; l < this.length; l++)
        o.words[l] = this.words[l];
      o.length = this.length, o.negative = this.negative, o.red = this.red;
    }, i.prototype.clone = function() {
      var o = new i(null);
      return this.copy(o), o;
    }, i.prototype._expand = function(o) {
      for (; this.length < o; )
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
    var x = [
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
    ], R = [
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
    i.prototype.toString = function(o, l) {
      o = o || 10, l = l | 0 || 1;
      var d;
      if (o === 16 || o === "hex") {
        d = "";
        for (var m = 0, M = 0, C = 0; C < this.length; C++) {
          var F = this.words[C], w = ((F << m | M) & 16777215).toString(16);
          M = F >>> 24 - m & 16777215, M !== 0 || C !== this.length - 1 ? d = x[6 - w.length] + w + d : d = w + d, m += 2, m >= 26 && (m -= 26, C--);
        }
        for (M !== 0 && (d = M.toString(16) + d); d.length % l !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var a = _[o], g = R[o];
        d = "";
        var D = this.clone();
        for (D.negative = 0; !D.isZero(); ) {
          var O = D.modn(g).toString(o);
          D = D.idivn(g), D.isZero() ? d = O + d : d = x[a - O.length] + O + d;
        }
        for (this.isZero() && (d = "0" + d); d.length % l !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var o = this.words[0];
      return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -o : o;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(o, l) {
      return n(typeof p < "u"), this.toArrayLike(p, o, l);
    }, i.prototype.toArray = function(o, l) {
      return this.toArrayLike(Array, o, l);
    }, i.prototype.toArrayLike = function(o, l, d) {
      var m = this.byteLength(), M = d || Math.max(1, m);
      n(m <= M, "byte array longer than desired length"), n(M > 0, "Requested array length <= 0"), this.strip();
      var C = l === "le", F = new o(M), w, a, g = this.clone();
      if (C) {
        for (a = 0; !g.isZero(); a++)
          w = g.andln(255), g.iushrn(8), F[a] = w;
        for (; a < M; a++)
          F[a] = 0;
      } else {
        for (a = 0; a < M - m; a++)
          F[a] = 0;
        for (a = 0; !g.isZero(); a++)
          w = g.andln(255), g.iushrn(8), F[M - a - 1] = w;
      }
      return F;
    }, Math.clz32 ? i.prototype._countBits = function(o) {
      return 32 - Math.clz32(o);
    } : i.prototype._countBits = function(o) {
      var l = o, d = 0;
      return l >= 4096 && (d += 13, l >>>= 13), l >= 64 && (d += 7, l >>>= 7), l >= 8 && (d += 4, l >>>= 4), l >= 2 && (d += 2, l >>>= 2), d + l;
    }, i.prototype._zeroBits = function(o) {
      if (o === 0)
        return 26;
      var l = o, d = 0;
      return (l & 8191) === 0 && (d += 13, l >>>= 13), (l & 127) === 0 && (d += 7, l >>>= 7), (l & 15) === 0 && (d += 4, l >>>= 4), (l & 3) === 0 && (d += 2, l >>>= 2), (l & 1) === 0 && d++, d;
    }, i.prototype.bitLength = function() {
      var o = this.words[this.length - 1], l = this._countBits(o);
      return (this.length - 1) * 26 + l;
    };
    function I(E) {
      for (var o = new Array(E.bitLength()), l = 0; l < o.length; l++) {
        var d = l / 26 | 0, m = l % 26;
        o[l] = (E.words[d] & 1 << m) >>> m;
      }
      return o;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var o = 0, l = 0; l < this.length; l++) {
        var d = this._zeroBits(this.words[l]);
        if (o += d, d !== 26)
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
      for (var l = 0; l < o.length; l++)
        this.words[l] = this.words[l] | o.words[l];
      return this.strip();
    }, i.prototype.ior = function(o) {
      return n((this.negative | o.negative) === 0), this.iuor(o);
    }, i.prototype.or = function(o) {
      return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this);
    }, i.prototype.uor = function(o) {
      return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this);
    }, i.prototype.iuand = function(o) {
      var l;
      this.length > o.length ? l = o : l = this;
      for (var d = 0; d < l.length; d++)
        this.words[d] = this.words[d] & o.words[d];
      return this.length = l.length, this.strip();
    }, i.prototype.iand = function(o) {
      return n((this.negative | o.negative) === 0), this.iuand(o);
    }, i.prototype.and = function(o) {
      return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this);
    }, i.prototype.uand = function(o) {
      return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this);
    }, i.prototype.iuxor = function(o) {
      var l, d;
      this.length > o.length ? (l = this, d = o) : (l = o, d = this);
      for (var m = 0; m < d.length; m++)
        this.words[m] = l.words[m] ^ d.words[m];
      if (this !== l)
        for (; m < l.length; m++)
          this.words[m] = l.words[m];
      return this.length = l.length, this.strip();
    }, i.prototype.ixor = function(o) {
      return n((this.negative | o.negative) === 0), this.iuxor(o);
    }, i.prototype.xor = function(o) {
      return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this);
    }, i.prototype.uxor = function(o) {
      return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this);
    }, i.prototype.inotn = function(o) {
      n(typeof o == "number" && o >= 0);
      var l = Math.ceil(o / 26) | 0, d = o % 26;
      this._expand(l), d > 0 && l--;
      for (var m = 0; m < l; m++)
        this.words[m] = ~this.words[m] & 67108863;
      return d > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - d), this.strip();
    }, i.prototype.notn = function(o) {
      return this.clone().inotn(o);
    }, i.prototype.setn = function(o, l) {
      n(typeof o == "number" && o >= 0);
      var d = o / 26 | 0, m = o % 26;
      return this._expand(d + 1), l ? this.words[d] = this.words[d] | 1 << m : this.words[d] = this.words[d] & ~(1 << m), this.strip();
    }, i.prototype.iadd = function(o) {
      var l;
      if (this.negative !== 0 && o.negative === 0)
        return this.negative = 0, l = this.isub(o), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && o.negative !== 0)
        return o.negative = 0, l = this.isub(o), o.negative = 1, l._normSign();
      var d, m;
      this.length > o.length ? (d = this, m = o) : (d = o, m = this);
      for (var M = 0, C = 0; C < m.length; C++)
        l = (d.words[C] | 0) + (m.words[C] | 0) + M, this.words[C] = l & 67108863, M = l >>> 26;
      for (; M !== 0 && C < d.length; C++)
        l = (d.words[C] | 0) + M, this.words[C] = l & 67108863, M = l >>> 26;
      if (this.length = d.length, M !== 0)
        this.words[this.length] = M, this.length++;
      else if (d !== this)
        for (; C < d.length; C++)
          this.words[C] = d.words[C];
      return this;
    }, i.prototype.add = function(o) {
      var l;
      return o.negative !== 0 && this.negative === 0 ? (o.negative = 0, l = this.sub(o), o.negative ^= 1, l) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0, l = o.sub(this), this.negative = 1, l) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this);
    }, i.prototype.isub = function(o) {
      if (o.negative !== 0) {
        o.negative = 0;
        var l = this.iadd(o);
        return o.negative = 1, l._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(o), this.negative = 1, this._normSign();
      var d = this.cmp(o);
      if (d === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var m, M;
      d > 0 ? (m = this, M = o) : (m = o, M = this);
      for (var C = 0, F = 0; F < M.length; F++)
        l = (m.words[F] | 0) - (M.words[F] | 0) + C, C = l >> 26, this.words[F] = l & 67108863;
      for (; C !== 0 && F < m.length; F++)
        l = (m.words[F] | 0) + C, C = l >> 26, this.words[F] = l & 67108863;
      if (C === 0 && F < m.length && m !== this)
        for (; F < m.length; F++)
          this.words[F] = m.words[F];
      return this.length = Math.max(this.length, F), m !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(o) {
      return this.clone().isub(o);
    };
    function U(E, o, l) {
      l.negative = o.negative ^ E.negative;
      var d = E.length + o.length | 0;
      l.length = d, d = d - 1 | 0;
      var m = E.words[0] | 0, M = o.words[0] | 0, C = m * M, F = C & 67108863, w = C / 67108864 | 0;
      l.words[0] = F;
      for (var a = 1; a < d; a++) {
        for (var g = w >>> 26, D = w & 67108863, O = Math.min(a, o.length - 1), Y = Math.max(0, a - E.length + 1); Y <= O; Y++) {
          var X = a - Y | 0;
          m = E.words[X] | 0, M = o.words[Y] | 0, C = m * M + D, g += C / 67108864 | 0, D = C & 67108863;
        }
        l.words[a] = D | 0, w = g | 0;
      }
      return w !== 0 ? l.words[a] = w | 0 : l.length--, l.strip();
    }
    var N = function(o, l, d) {
      var m = o.words, M = l.words, C = d.words, F = 0, w, a, g, D = m[0] | 0, O = D & 8191, Y = D >>> 13, X = m[1] | 0, c = X & 8191, T = X >>> 13, j = m[2] | 0, P = j & 8191, $ = j >>> 13, Q = m[3] | 0, K = Q & 8191, Z = Q >>> 13, at = m[4] | 0, V = at & 8191, rt = at >>> 13, y = m[5] | 0, s = y & 8191, u = y >>> 13, b = m[6] | 0, L = b & 8191, H = b >>> 13, z = m[7] | 0, et = z & 8191, nt = z >>> 13, ct = m[8] | 0, ft = ct & 8191, ot = ct >>> 13, Pt = m[9] | 0, pt = Pt & 8191, dt = Pt >>> 13, oe = M[0] | 0, gt = oe & 8191, mt = oe >>> 13, ae = M[1] | 0, yt = ae & 8191, _t = ae >>> 13, se = M[2] | 0, wt = se & 8191, Mt = se >>> 13, fe = M[3] | 0, xt = fe & 8191, bt = fe >>> 13, ue = M[4] | 0, Et = ue & 8191, At = ue >>> 13, he = M[5] | 0, Ct = he & 8191, Lt = he >>> 13, le = M[6] | 0, Bt = le & 8191, St = le >>> 13, ce = M[7] | 0, kt = ce & 8191, Ft = ce >>> 13, pe = M[8] | 0, Rt = pe & 8191, Tt = pe >>> 13, de = M[9] | 0, It = de & 8191, Nt = de >>> 13;
      d.negative = o.negative ^ l.negative, d.length = 19, w = Math.imul(O, gt), a = Math.imul(O, mt), a = a + Math.imul(Y, gt) | 0, g = Math.imul(Y, mt);
      var Wt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863, w = Math.imul(c, gt), a = Math.imul(c, mt), a = a + Math.imul(T, gt) | 0, g = Math.imul(T, mt), w = w + Math.imul(O, yt) | 0, a = a + Math.imul(O, _t) | 0, a = a + Math.imul(Y, yt) | 0, g = g + Math.imul(Y, _t) | 0;
      var Kt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, w = Math.imul(P, gt), a = Math.imul(P, mt), a = a + Math.imul($, gt) | 0, g = Math.imul($, mt), w = w + Math.imul(c, yt) | 0, a = a + Math.imul(c, _t) | 0, a = a + Math.imul(T, yt) | 0, g = g + Math.imul(T, _t) | 0, w = w + Math.imul(O, wt) | 0, a = a + Math.imul(O, Mt) | 0, a = a + Math.imul(Y, wt) | 0, g = g + Math.imul(Y, Mt) | 0;
      var Yt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Yt >>> 26) | 0, Yt &= 67108863, w = Math.imul(K, gt), a = Math.imul(K, mt), a = a + Math.imul(Z, gt) | 0, g = Math.imul(Z, mt), w = w + Math.imul(P, yt) | 0, a = a + Math.imul(P, _t) | 0, a = a + Math.imul($, yt) | 0, g = g + Math.imul($, _t) | 0, w = w + Math.imul(c, wt) | 0, a = a + Math.imul(c, Mt) | 0, a = a + Math.imul(T, wt) | 0, g = g + Math.imul(T, Mt) | 0, w = w + Math.imul(O, xt) | 0, a = a + Math.imul(O, bt) | 0, a = a + Math.imul(Y, xt) | 0, g = g + Math.imul(Y, bt) | 0;
      var Jt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Jt >>> 26) | 0, Jt &= 67108863, w = Math.imul(V, gt), a = Math.imul(V, mt), a = a + Math.imul(rt, gt) | 0, g = Math.imul(rt, mt), w = w + Math.imul(K, yt) | 0, a = a + Math.imul(K, _t) | 0, a = a + Math.imul(Z, yt) | 0, g = g + Math.imul(Z, _t) | 0, w = w + Math.imul(P, wt) | 0, a = a + Math.imul(P, Mt) | 0, a = a + Math.imul($, wt) | 0, g = g + Math.imul($, Mt) | 0, w = w + Math.imul(c, xt) | 0, a = a + Math.imul(c, bt) | 0, a = a + Math.imul(T, xt) | 0, g = g + Math.imul(T, bt) | 0, w = w + Math.imul(O, Et) | 0, a = a + Math.imul(O, At) | 0, a = a + Math.imul(Y, Et) | 0, g = g + Math.imul(Y, At) | 0;
      var Vt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, w = Math.imul(s, gt), a = Math.imul(s, mt), a = a + Math.imul(u, gt) | 0, g = Math.imul(u, mt), w = w + Math.imul(V, yt) | 0, a = a + Math.imul(V, _t) | 0, a = a + Math.imul(rt, yt) | 0, g = g + Math.imul(rt, _t) | 0, w = w + Math.imul(K, wt) | 0, a = a + Math.imul(K, Mt) | 0, a = a + Math.imul(Z, wt) | 0, g = g + Math.imul(Z, Mt) | 0, w = w + Math.imul(P, xt) | 0, a = a + Math.imul(P, bt) | 0, a = a + Math.imul($, xt) | 0, g = g + Math.imul($, bt) | 0, w = w + Math.imul(c, Et) | 0, a = a + Math.imul(c, At) | 0, a = a + Math.imul(T, Et) | 0, g = g + Math.imul(T, At) | 0, w = w + Math.imul(O, Ct) | 0, a = a + Math.imul(O, Lt) | 0, a = a + Math.imul(Y, Ct) | 0, g = g + Math.imul(Y, Lt) | 0;
      var Gt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, w = Math.imul(L, gt), a = Math.imul(L, mt), a = a + Math.imul(H, gt) | 0, g = Math.imul(H, mt), w = w + Math.imul(s, yt) | 0, a = a + Math.imul(s, _t) | 0, a = a + Math.imul(u, yt) | 0, g = g + Math.imul(u, _t) | 0, w = w + Math.imul(V, wt) | 0, a = a + Math.imul(V, Mt) | 0, a = a + Math.imul(rt, wt) | 0, g = g + Math.imul(rt, Mt) | 0, w = w + Math.imul(K, xt) | 0, a = a + Math.imul(K, bt) | 0, a = a + Math.imul(Z, xt) | 0, g = g + Math.imul(Z, bt) | 0, w = w + Math.imul(P, Et) | 0, a = a + Math.imul(P, At) | 0, a = a + Math.imul($, Et) | 0, g = g + Math.imul($, At) | 0, w = w + Math.imul(c, Ct) | 0, a = a + Math.imul(c, Lt) | 0, a = a + Math.imul(T, Ct) | 0, g = g + Math.imul(T, Lt) | 0, w = w + Math.imul(O, Bt) | 0, a = a + Math.imul(O, St) | 0, a = a + Math.imul(Y, Bt) | 0, g = g + Math.imul(Y, St) | 0;
      var Xt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, w = Math.imul(et, gt), a = Math.imul(et, mt), a = a + Math.imul(nt, gt) | 0, g = Math.imul(nt, mt), w = w + Math.imul(L, yt) | 0, a = a + Math.imul(L, _t) | 0, a = a + Math.imul(H, yt) | 0, g = g + Math.imul(H, _t) | 0, w = w + Math.imul(s, wt) | 0, a = a + Math.imul(s, Mt) | 0, a = a + Math.imul(u, wt) | 0, g = g + Math.imul(u, Mt) | 0, w = w + Math.imul(V, xt) | 0, a = a + Math.imul(V, bt) | 0, a = a + Math.imul(rt, xt) | 0, g = g + Math.imul(rt, bt) | 0, w = w + Math.imul(K, Et) | 0, a = a + Math.imul(K, At) | 0, a = a + Math.imul(Z, Et) | 0, g = g + Math.imul(Z, At) | 0, w = w + Math.imul(P, Ct) | 0, a = a + Math.imul(P, Lt) | 0, a = a + Math.imul($, Ct) | 0, g = g + Math.imul($, Lt) | 0, w = w + Math.imul(c, Bt) | 0, a = a + Math.imul(c, St) | 0, a = a + Math.imul(T, Bt) | 0, g = g + Math.imul(T, St) | 0, w = w + Math.imul(O, kt) | 0, a = a + Math.imul(O, Ft) | 0, a = a + Math.imul(Y, kt) | 0, g = g + Math.imul(Y, Ft) | 0;
      var Qt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, w = Math.imul(ft, gt), a = Math.imul(ft, mt), a = a + Math.imul(ot, gt) | 0, g = Math.imul(ot, mt), w = w + Math.imul(et, yt) | 0, a = a + Math.imul(et, _t) | 0, a = a + Math.imul(nt, yt) | 0, g = g + Math.imul(nt, _t) | 0, w = w + Math.imul(L, wt) | 0, a = a + Math.imul(L, Mt) | 0, a = a + Math.imul(H, wt) | 0, g = g + Math.imul(H, Mt) | 0, w = w + Math.imul(s, xt) | 0, a = a + Math.imul(s, bt) | 0, a = a + Math.imul(u, xt) | 0, g = g + Math.imul(u, bt) | 0, w = w + Math.imul(V, Et) | 0, a = a + Math.imul(V, At) | 0, a = a + Math.imul(rt, Et) | 0, g = g + Math.imul(rt, At) | 0, w = w + Math.imul(K, Ct) | 0, a = a + Math.imul(K, Lt) | 0, a = a + Math.imul(Z, Ct) | 0, g = g + Math.imul(Z, Lt) | 0, w = w + Math.imul(P, Bt) | 0, a = a + Math.imul(P, St) | 0, a = a + Math.imul($, Bt) | 0, g = g + Math.imul($, St) | 0, w = w + Math.imul(c, kt) | 0, a = a + Math.imul(c, Ft) | 0, a = a + Math.imul(T, kt) | 0, g = g + Math.imul(T, Ft) | 0, w = w + Math.imul(O, Rt) | 0, a = a + Math.imul(O, Tt) | 0, a = a + Math.imul(Y, Rt) | 0, g = g + Math.imul(Y, Tt) | 0;
      var nr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, w = Math.imul(pt, gt), a = Math.imul(pt, mt), a = a + Math.imul(dt, gt) | 0, g = Math.imul(dt, mt), w = w + Math.imul(ft, yt) | 0, a = a + Math.imul(ft, _t) | 0, a = a + Math.imul(ot, yt) | 0, g = g + Math.imul(ot, _t) | 0, w = w + Math.imul(et, wt) | 0, a = a + Math.imul(et, Mt) | 0, a = a + Math.imul(nt, wt) | 0, g = g + Math.imul(nt, Mt) | 0, w = w + Math.imul(L, xt) | 0, a = a + Math.imul(L, bt) | 0, a = a + Math.imul(H, xt) | 0, g = g + Math.imul(H, bt) | 0, w = w + Math.imul(s, Et) | 0, a = a + Math.imul(s, At) | 0, a = a + Math.imul(u, Et) | 0, g = g + Math.imul(u, At) | 0, w = w + Math.imul(V, Ct) | 0, a = a + Math.imul(V, Lt) | 0, a = a + Math.imul(rt, Ct) | 0, g = g + Math.imul(rt, Lt) | 0, w = w + Math.imul(K, Bt) | 0, a = a + Math.imul(K, St) | 0, a = a + Math.imul(Z, Bt) | 0, g = g + Math.imul(Z, St) | 0, w = w + Math.imul(P, kt) | 0, a = a + Math.imul(P, Ft) | 0, a = a + Math.imul($, kt) | 0, g = g + Math.imul($, Ft) | 0, w = w + Math.imul(c, Rt) | 0, a = a + Math.imul(c, Tt) | 0, a = a + Math.imul(T, Rt) | 0, g = g + Math.imul(T, Tt) | 0, w = w + Math.imul(O, It) | 0, a = a + Math.imul(O, Nt) | 0, a = a + Math.imul(Y, It) | 0, g = g + Math.imul(Y, Nt) | 0;
      var ir = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, w = Math.imul(pt, yt), a = Math.imul(pt, _t), a = a + Math.imul(dt, yt) | 0, g = Math.imul(dt, _t), w = w + Math.imul(ft, wt) | 0, a = a + Math.imul(ft, Mt) | 0, a = a + Math.imul(ot, wt) | 0, g = g + Math.imul(ot, Mt) | 0, w = w + Math.imul(et, xt) | 0, a = a + Math.imul(et, bt) | 0, a = a + Math.imul(nt, xt) | 0, g = g + Math.imul(nt, bt) | 0, w = w + Math.imul(L, Et) | 0, a = a + Math.imul(L, At) | 0, a = a + Math.imul(H, Et) | 0, g = g + Math.imul(H, At) | 0, w = w + Math.imul(s, Ct) | 0, a = a + Math.imul(s, Lt) | 0, a = a + Math.imul(u, Ct) | 0, g = g + Math.imul(u, Lt) | 0, w = w + Math.imul(V, Bt) | 0, a = a + Math.imul(V, St) | 0, a = a + Math.imul(rt, Bt) | 0, g = g + Math.imul(rt, St) | 0, w = w + Math.imul(K, kt) | 0, a = a + Math.imul(K, Ft) | 0, a = a + Math.imul(Z, kt) | 0, g = g + Math.imul(Z, Ft) | 0, w = w + Math.imul(P, Rt) | 0, a = a + Math.imul(P, Tt) | 0, a = a + Math.imul($, Rt) | 0, g = g + Math.imul($, Tt) | 0, w = w + Math.imul(c, It) | 0, a = a + Math.imul(c, Nt) | 0, a = a + Math.imul(T, It) | 0, g = g + Math.imul(T, Nt) | 0;
      var or = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, w = Math.imul(pt, wt), a = Math.imul(pt, Mt), a = a + Math.imul(dt, wt) | 0, g = Math.imul(dt, Mt), w = w + Math.imul(ft, xt) | 0, a = a + Math.imul(ft, bt) | 0, a = a + Math.imul(ot, xt) | 0, g = g + Math.imul(ot, bt) | 0, w = w + Math.imul(et, Et) | 0, a = a + Math.imul(et, At) | 0, a = a + Math.imul(nt, Et) | 0, g = g + Math.imul(nt, At) | 0, w = w + Math.imul(L, Ct) | 0, a = a + Math.imul(L, Lt) | 0, a = a + Math.imul(H, Ct) | 0, g = g + Math.imul(H, Lt) | 0, w = w + Math.imul(s, Bt) | 0, a = a + Math.imul(s, St) | 0, a = a + Math.imul(u, Bt) | 0, g = g + Math.imul(u, St) | 0, w = w + Math.imul(V, kt) | 0, a = a + Math.imul(V, Ft) | 0, a = a + Math.imul(rt, kt) | 0, g = g + Math.imul(rt, Ft) | 0, w = w + Math.imul(K, Rt) | 0, a = a + Math.imul(K, Tt) | 0, a = a + Math.imul(Z, Rt) | 0, g = g + Math.imul(Z, Tt) | 0, w = w + Math.imul(P, It) | 0, a = a + Math.imul(P, Nt) | 0, a = a + Math.imul($, It) | 0, g = g + Math.imul($, Nt) | 0;
      var ar = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, w = Math.imul(pt, xt), a = Math.imul(pt, bt), a = a + Math.imul(dt, xt) | 0, g = Math.imul(dt, bt), w = w + Math.imul(ft, Et) | 0, a = a + Math.imul(ft, At) | 0, a = a + Math.imul(ot, Et) | 0, g = g + Math.imul(ot, At) | 0, w = w + Math.imul(et, Ct) | 0, a = a + Math.imul(et, Lt) | 0, a = a + Math.imul(nt, Ct) | 0, g = g + Math.imul(nt, Lt) | 0, w = w + Math.imul(L, Bt) | 0, a = a + Math.imul(L, St) | 0, a = a + Math.imul(H, Bt) | 0, g = g + Math.imul(H, St) | 0, w = w + Math.imul(s, kt) | 0, a = a + Math.imul(s, Ft) | 0, a = a + Math.imul(u, kt) | 0, g = g + Math.imul(u, Ft) | 0, w = w + Math.imul(V, Rt) | 0, a = a + Math.imul(V, Tt) | 0, a = a + Math.imul(rt, Rt) | 0, g = g + Math.imul(rt, Tt) | 0, w = w + Math.imul(K, It) | 0, a = a + Math.imul(K, Nt) | 0, a = a + Math.imul(Z, It) | 0, g = g + Math.imul(Z, Nt) | 0;
      var sr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, w = Math.imul(pt, Et), a = Math.imul(pt, At), a = a + Math.imul(dt, Et) | 0, g = Math.imul(dt, At), w = w + Math.imul(ft, Ct) | 0, a = a + Math.imul(ft, Lt) | 0, a = a + Math.imul(ot, Ct) | 0, g = g + Math.imul(ot, Lt) | 0, w = w + Math.imul(et, Bt) | 0, a = a + Math.imul(et, St) | 0, a = a + Math.imul(nt, Bt) | 0, g = g + Math.imul(nt, St) | 0, w = w + Math.imul(L, kt) | 0, a = a + Math.imul(L, Ft) | 0, a = a + Math.imul(H, kt) | 0, g = g + Math.imul(H, Ft) | 0, w = w + Math.imul(s, Rt) | 0, a = a + Math.imul(s, Tt) | 0, a = a + Math.imul(u, Rt) | 0, g = g + Math.imul(u, Tt) | 0, w = w + Math.imul(V, It) | 0, a = a + Math.imul(V, Nt) | 0, a = a + Math.imul(rt, It) | 0, g = g + Math.imul(rt, Nt) | 0;
      var fr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, w = Math.imul(pt, Ct), a = Math.imul(pt, Lt), a = a + Math.imul(dt, Ct) | 0, g = Math.imul(dt, Lt), w = w + Math.imul(ft, Bt) | 0, a = a + Math.imul(ft, St) | 0, a = a + Math.imul(ot, Bt) | 0, g = g + Math.imul(ot, St) | 0, w = w + Math.imul(et, kt) | 0, a = a + Math.imul(et, Ft) | 0, a = a + Math.imul(nt, kt) | 0, g = g + Math.imul(nt, Ft) | 0, w = w + Math.imul(L, Rt) | 0, a = a + Math.imul(L, Tt) | 0, a = a + Math.imul(H, Rt) | 0, g = g + Math.imul(H, Tt) | 0, w = w + Math.imul(s, It) | 0, a = a + Math.imul(s, Nt) | 0, a = a + Math.imul(u, It) | 0, g = g + Math.imul(u, Nt) | 0;
      var ur = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, w = Math.imul(pt, Bt), a = Math.imul(pt, St), a = a + Math.imul(dt, Bt) | 0, g = Math.imul(dt, St), w = w + Math.imul(ft, kt) | 0, a = a + Math.imul(ft, Ft) | 0, a = a + Math.imul(ot, kt) | 0, g = g + Math.imul(ot, Ft) | 0, w = w + Math.imul(et, Rt) | 0, a = a + Math.imul(et, Tt) | 0, a = a + Math.imul(nt, Rt) | 0, g = g + Math.imul(nt, Tt) | 0, w = w + Math.imul(L, It) | 0, a = a + Math.imul(L, Nt) | 0, a = a + Math.imul(H, It) | 0, g = g + Math.imul(H, Nt) | 0;
      var hr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, w = Math.imul(pt, kt), a = Math.imul(pt, Ft), a = a + Math.imul(dt, kt) | 0, g = Math.imul(dt, Ft), w = w + Math.imul(ft, Rt) | 0, a = a + Math.imul(ft, Tt) | 0, a = a + Math.imul(ot, Rt) | 0, g = g + Math.imul(ot, Tt) | 0, w = w + Math.imul(et, It) | 0, a = a + Math.imul(et, Nt) | 0, a = a + Math.imul(nt, It) | 0, g = g + Math.imul(nt, Nt) | 0;
      var lr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, w = Math.imul(pt, Rt), a = Math.imul(pt, Tt), a = a + Math.imul(dt, Rt) | 0, g = Math.imul(dt, Tt), w = w + Math.imul(ft, It) | 0, a = a + Math.imul(ft, Nt) | 0, a = a + Math.imul(ot, It) | 0, g = g + Math.imul(ot, Nt) | 0;
      var cr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (g + (a >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, w = Math.imul(pt, It), a = Math.imul(pt, Nt), a = a + Math.imul(dt, It) | 0, g = Math.imul(dt, Nt);
      var pr = (F + w | 0) + ((a & 8191) << 13) | 0;
      return F = (g + (a >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, C[0] = Wt, C[1] = Kt, C[2] = Yt, C[3] = Jt, C[4] = Vt, C[5] = Gt, C[6] = Xt, C[7] = Qt, C[8] = nr, C[9] = ir, C[10] = or, C[11] = ar, C[12] = sr, C[13] = fr, C[14] = ur, C[15] = hr, C[16] = lr, C[17] = cr, C[18] = pr, F !== 0 && (C[19] = F, d.length++), d;
    };
    Math.imul || (N = U);
    function W(E, o, l) {
      l.negative = o.negative ^ E.negative, l.length = E.length + o.length;
      for (var d = 0, m = 0, M = 0; M < l.length - 1; M++) {
        var C = m;
        m = 0;
        for (var F = d & 67108863, w = Math.min(M, o.length - 1), a = Math.max(0, M - E.length + 1); a <= w; a++) {
          var g = M - a, D = E.words[g] | 0, O = o.words[a] | 0, Y = D * O, X = Y & 67108863;
          C = C + (Y / 67108864 | 0) | 0, X = X + F | 0, F = X & 67108863, C = C + (X >>> 26) | 0, m += C >>> 26, C &= 67108863;
        }
        l.words[M] = F, d = C, C = m;
      }
      return d !== 0 ? l.words[M] = d : l.length--, l.strip();
    }
    function A(E, o, l) {
      var d = new S();
      return d.mulp(E, o, l);
    }
    i.prototype.mulTo = function(o, l) {
      var d, m = this.length + o.length;
      return this.length === 10 && o.length === 10 ? d = N(this, o, l) : m < 63 ? d = U(this, o, l) : m < 1024 ? d = W(this, o, l) : d = A(this, o, l), d;
    };
    function S(E, o) {
      this.x = E, this.y = o;
    }
    S.prototype.makeRBT = function(o) {
      for (var l = new Array(o), d = i.prototype._countBits(o) - 1, m = 0; m < o; m++)
        l[m] = this.revBin(m, d, o);
      return l;
    }, S.prototype.revBin = function(o, l, d) {
      if (o === 0 || o === d - 1)
        return o;
      for (var m = 0, M = 0; M < l; M++)
        m |= (o & 1) << l - M - 1, o >>= 1;
      return m;
    }, S.prototype.permute = function(o, l, d, m, M, C) {
      for (var F = 0; F < C; F++)
        m[F] = l[o[F]], M[F] = d[o[F]];
    }, S.prototype.transform = function(o, l, d, m, M, C) {
      this.permute(C, o, l, d, m, M);
      for (var F = 1; F < M; F <<= 1)
        for (var w = F << 1, a = Math.cos(2 * Math.PI / w), g = Math.sin(2 * Math.PI / w), D = 0; D < M; D += w)
          for (var O = a, Y = g, X = 0; X < F; X++) {
            var c = d[D + X], T = m[D + X], j = d[D + X + F], P = m[D + X + F], $ = O * j - Y * P;
            P = O * P + Y * j, j = $, d[D + X] = c + j, m[D + X] = T + P, d[D + X + F] = c - j, m[D + X + F] = T - P, X !== w && ($ = a * O - g * Y, Y = a * Y + g * O, O = $);
          }
    }, S.prototype.guessLen13b = function(o, l) {
      var d = Math.max(l, o) | 1, m = d & 1, M = 0;
      for (d = d / 2 | 0; d; d = d >>> 1)
        M++;
      return 1 << M + 1 + m;
    }, S.prototype.conjugate = function(o, l, d) {
      if (!(d <= 1))
        for (var m = 0; m < d / 2; m++) {
          var M = o[m];
          o[m] = o[d - m - 1], o[d - m - 1] = M, M = l[m], l[m] = -l[d - m - 1], l[d - m - 1] = -M;
        }
    }, S.prototype.normalize13b = function(o, l) {
      for (var d = 0, m = 0; m < l / 2; m++) {
        var M = Math.round(o[2 * m + 1] / l) * 8192 + Math.round(o[2 * m] / l) + d;
        o[m] = M & 67108863, M < 67108864 ? d = 0 : d = M / 67108864 | 0;
      }
      return o;
    }, S.prototype.convert13b = function(o, l, d, m) {
      for (var M = 0, C = 0; C < l; C++)
        M = M + (o[C] | 0), d[2 * C] = M & 8191, M = M >>> 13, d[2 * C + 1] = M & 8191, M = M >>> 13;
      for (C = 2 * l; C < m; ++C)
        d[C] = 0;
      n(M === 0), n((M & -8192) === 0);
    }, S.prototype.stub = function(o) {
      for (var l = new Array(o), d = 0; d < o; d++)
        l[d] = 0;
      return l;
    }, S.prototype.mulp = function(o, l, d) {
      var m = 2 * this.guessLen13b(o.length, l.length), M = this.makeRBT(m), C = this.stub(m), F = new Array(m), w = new Array(m), a = new Array(m), g = new Array(m), D = new Array(m), O = new Array(m), Y = d.words;
      Y.length = m, this.convert13b(o.words, o.length, F, m), this.convert13b(l.words, l.length, g, m), this.transform(F, C, w, a, m, M), this.transform(g, C, D, O, m, M);
      for (var X = 0; X < m; X++) {
        var c = w[X] * D[X] - a[X] * O[X];
        a[X] = w[X] * O[X] + a[X] * D[X], w[X] = c;
      }
      return this.conjugate(w, a, m), this.transform(w, a, Y, C, m, M), this.conjugate(Y, C, m), this.normalize13b(Y, m), d.negative = o.negative ^ l.negative, d.length = o.length + l.length, d.strip();
    }, i.prototype.mul = function(o) {
      var l = new i(null);
      return l.words = new Array(this.length + o.length), this.mulTo(o, l);
    }, i.prototype.mulf = function(o) {
      var l = new i(null);
      return l.words = new Array(this.length + o.length), A(this, o, l);
    }, i.prototype.imul = function(o) {
      return this.clone().mulTo(o, this);
    }, i.prototype.imuln = function(o) {
      n(typeof o == "number"), n(o < 67108864);
      for (var l = 0, d = 0; d < this.length; d++) {
        var m = (this.words[d] | 0) * o, M = (m & 67108863) + (l & 67108863);
        l >>= 26, l += m / 67108864 | 0, l += M >>> 26, this.words[d] = M & 67108863;
      }
      return l !== 0 && (this.words[d] = l, this.length++), this;
    }, i.prototype.muln = function(o) {
      return this.clone().imuln(o);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(o) {
      var l = I(o);
      if (l.length === 0)
        return new i(1);
      for (var d = this, m = 0; m < l.length && l[m] === 0; m++, d = d.sqr())
        ;
      if (++m < l.length)
        for (var M = d.sqr(); m < l.length; m++, M = M.sqr())
          l[m] !== 0 && (d = d.mul(M));
      return d;
    }, i.prototype.iushln = function(o) {
      n(typeof o == "number" && o >= 0);
      var l = o % 26, d = (o - l) / 26, m = 67108863 >>> 26 - l << 26 - l, M;
      if (l !== 0) {
        var C = 0;
        for (M = 0; M < this.length; M++) {
          var F = this.words[M] & m, w = (this.words[M] | 0) - F << l;
          this.words[M] = w | C, C = F >>> 26 - l;
        }
        C && (this.words[M] = C, this.length++);
      }
      if (d !== 0) {
        for (M = this.length - 1; M >= 0; M--)
          this.words[M + d] = this.words[M];
        for (M = 0; M < d; M++)
          this.words[M] = 0;
        this.length += d;
      }
      return this.strip();
    }, i.prototype.ishln = function(o) {
      return n(this.negative === 0), this.iushln(o);
    }, i.prototype.iushrn = function(o, l, d) {
      n(typeof o == "number" && o >= 0);
      var m;
      l ? m = (l - l % 26) / 26 : m = 0;
      var M = o % 26, C = Math.min((o - M) / 26, this.length), F = 67108863 ^ 67108863 >>> M << M, w = d;
      if (m -= C, m = Math.max(0, m), w) {
        for (var a = 0; a < C; a++)
          w.words[a] = this.words[a];
        w.length = C;
      }
      if (C !== 0)
        if (this.length > C)
          for (this.length -= C, a = 0; a < this.length; a++)
            this.words[a] = this.words[a + C];
        else
          this.words[0] = 0, this.length = 1;
      var g = 0;
      for (a = this.length - 1; a >= 0 && (g !== 0 || a >= m); a--) {
        var D = this.words[a] | 0;
        this.words[a] = g << 26 - M | D >>> M, g = D & F;
      }
      return w && g !== 0 && (w.words[w.length++] = g), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(o, l, d) {
      return n(this.negative === 0), this.iushrn(o, l, d);
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
      var l = o % 26, d = (o - l) / 26, m = 1 << l;
      if (this.length <= d)
        return !1;
      var M = this.words[d];
      return !!(M & m);
    }, i.prototype.imaskn = function(o) {
      n(typeof o == "number" && o >= 0);
      var l = o % 26, d = (o - l) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= d)
        return this;
      if (l !== 0 && d++, this.length = Math.min(d, this.length), l !== 0) {
        var m = 67108863 ^ 67108863 >>> l << l;
        this.words[this.length - 1] &= m;
      }
      return this.strip();
    }, i.prototype.maskn = function(o) {
      return this.clone().imaskn(o);
    }, i.prototype.iaddn = function(o) {
      return n(typeof o == "number"), n(o < 67108864), o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < o ? (this.words[0] = o - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(o), this.negative = 1, this) : this._iaddn(o);
    }, i.prototype._iaddn = function(o) {
      this.words[0] += o;
      for (var l = 0; l < this.length && this.words[l] >= 67108864; l++)
        this.words[l] -= 67108864, l === this.length - 1 ? this.words[l + 1] = 1 : this.words[l + 1]++;
      return this.length = Math.max(this.length, l + 1), this;
    }, i.prototype.isubn = function(o) {
      if (n(typeof o == "number"), n(o < 67108864), o < 0)
        return this.iaddn(-o);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(o), this.negative = 1, this;
      if (this.words[0] -= o, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var l = 0; l < this.length && this.words[l] < 0; l++)
          this.words[l] += 67108864, this.words[l + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(o) {
      return this.clone().iaddn(o);
    }, i.prototype.subn = function(o) {
      return this.clone().isubn(o);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(o, l, d) {
      var m = o.length + d, M;
      this._expand(m);
      var C, F = 0;
      for (M = 0; M < o.length; M++) {
        C = (this.words[M + d] | 0) + F;
        var w = (o.words[M] | 0) * l;
        C -= w & 67108863, F = (C >> 26) - (w / 67108864 | 0), this.words[M + d] = C & 67108863;
      }
      for (; M < this.length - d; M++)
        C = (this.words[M + d] | 0) + F, F = C >> 26, this.words[M + d] = C & 67108863;
      if (F === 0)
        return this.strip();
      for (n(F === -1), F = 0, M = 0; M < this.length; M++)
        C = -(this.words[M] | 0) + F, F = C >> 26, this.words[M] = C & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(o, l) {
      var d = this.length - o.length, m = this.clone(), M = o, C = M.words[M.length - 1] | 0, F = this._countBits(C);
      d = 26 - F, d !== 0 && (M = M.ushln(d), m.iushln(d), C = M.words[M.length - 1] | 0);
      var w = m.length - M.length, a;
      if (l !== "mod") {
        a = new i(null), a.length = w + 1, a.words = new Array(a.length);
        for (var g = 0; g < a.length; g++)
          a.words[g] = 0;
      }
      var D = m.clone()._ishlnsubmul(M, 1, w);
      D.negative === 0 && (m = D, a && (a.words[w] = 1));
      for (var O = w - 1; O >= 0; O--) {
        var Y = (m.words[M.length + O] | 0) * 67108864 + (m.words[M.length + O - 1] | 0);
        for (Y = Math.min(Y / C | 0, 67108863), m._ishlnsubmul(M, Y, O); m.negative !== 0; )
          Y--, m.negative = 0, m._ishlnsubmul(M, 1, O), m.isZero() || (m.negative ^= 1);
        a && (a.words[O] = Y);
      }
      return a && a.strip(), m.strip(), l !== "div" && d !== 0 && m.iushrn(d), {
        div: a || null,
        mod: m
      };
    }, i.prototype.divmod = function(o, l, d) {
      if (n(!o.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var m, M, C;
      return this.negative !== 0 && o.negative === 0 ? (C = this.neg().divmod(o, l), l !== "mod" && (m = C.div.neg()), l !== "div" && (M = C.mod.neg(), d && M.negative !== 0 && M.iadd(o)), {
        div: m,
        mod: M
      }) : this.negative === 0 && o.negative !== 0 ? (C = this.divmod(o.neg(), l), l !== "mod" && (m = C.div.neg()), {
        div: m,
        mod: C.mod
      }) : (this.negative & o.negative) !== 0 ? (C = this.neg().divmod(o.neg(), l), l !== "div" && (M = C.mod.neg(), d && M.negative !== 0 && M.isub(o)), {
        div: C.div,
        mod: M
      }) : o.length > this.length || this.cmp(o) < 0 ? {
        div: new i(0),
        mod: this
      } : o.length === 1 ? l === "div" ? {
        div: this.divn(o.words[0]),
        mod: null
      } : l === "mod" ? {
        div: null,
        mod: new i(this.modn(o.words[0]))
      } : {
        div: this.divn(o.words[0]),
        mod: new i(this.modn(o.words[0]))
      } : this._wordDiv(o, l);
    }, i.prototype.div = function(o) {
      return this.divmod(o, "div", !1).div;
    }, i.prototype.mod = function(o) {
      return this.divmod(o, "mod", !1).mod;
    }, i.prototype.umod = function(o) {
      return this.divmod(o, "mod", !0).mod;
    }, i.prototype.divRound = function(o) {
      var l = this.divmod(o);
      if (l.mod.isZero())
        return l.div;
      var d = l.div.negative !== 0 ? l.mod.isub(o) : l.mod, m = o.ushrn(1), M = o.andln(1), C = d.cmp(m);
      return C < 0 || M === 1 && C === 0 ? l.div : l.div.negative !== 0 ? l.div.isubn(1) : l.div.iaddn(1);
    }, i.prototype.modn = function(o) {
      n(o <= 67108863);
      for (var l = (1 << 26) % o, d = 0, m = this.length - 1; m >= 0; m--)
        d = (l * d + (this.words[m] | 0)) % o;
      return d;
    }, i.prototype.idivn = function(o) {
      n(o <= 67108863);
      for (var l = 0, d = this.length - 1; d >= 0; d--) {
        var m = (this.words[d] | 0) + l * 67108864;
        this.words[d] = m / o | 0, l = m % o;
      }
      return this.strip();
    }, i.prototype.divn = function(o) {
      return this.clone().idivn(o);
    }, i.prototype.egcd = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var l = this, d = o.clone();
      l.negative !== 0 ? l = l.umod(o) : l = l.clone();
      for (var m = new i(1), M = new i(0), C = new i(0), F = new i(1), w = 0; l.isEven() && d.isEven(); )
        l.iushrn(1), d.iushrn(1), ++w;
      for (var a = d.clone(), g = l.clone(); !l.isZero(); ) {
        for (var D = 0, O = 1; (l.words[0] & O) === 0 && D < 26; ++D, O <<= 1)
          ;
        if (D > 0)
          for (l.iushrn(D); D-- > 0; )
            (m.isOdd() || M.isOdd()) && (m.iadd(a), M.isub(g)), m.iushrn(1), M.iushrn(1);
        for (var Y = 0, X = 1; (d.words[0] & X) === 0 && Y < 26; ++Y, X <<= 1)
          ;
        if (Y > 0)
          for (d.iushrn(Y); Y-- > 0; )
            (C.isOdd() || F.isOdd()) && (C.iadd(a), F.isub(g)), C.iushrn(1), F.iushrn(1);
        l.cmp(d) >= 0 ? (l.isub(d), m.isub(C), M.isub(F)) : (d.isub(l), C.isub(m), F.isub(M));
      }
      return {
        a: C,
        b: F,
        gcd: d.iushln(w)
      };
    }, i.prototype._invmp = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var l = this, d = o.clone();
      l.negative !== 0 ? l = l.umod(o) : l = l.clone();
      for (var m = new i(1), M = new i(0), C = d.clone(); l.cmpn(1) > 0 && d.cmpn(1) > 0; ) {
        for (var F = 0, w = 1; (l.words[0] & w) === 0 && F < 26; ++F, w <<= 1)
          ;
        if (F > 0)
          for (l.iushrn(F); F-- > 0; )
            m.isOdd() && m.iadd(C), m.iushrn(1);
        for (var a = 0, g = 1; (d.words[0] & g) === 0 && a < 26; ++a, g <<= 1)
          ;
        if (a > 0)
          for (d.iushrn(a); a-- > 0; )
            M.isOdd() && M.iadd(C), M.iushrn(1);
        l.cmp(d) >= 0 ? (l.isub(d), m.isub(M)) : (d.isub(l), M.isub(m));
      }
      var D;
      return l.cmpn(1) === 0 ? D = m : D = M, D.cmpn(0) < 0 && D.iadd(o), D;
    }, i.prototype.gcd = function(o) {
      if (this.isZero())
        return o.abs();
      if (o.isZero())
        return this.abs();
      var l = this.clone(), d = o.clone();
      l.negative = 0, d.negative = 0;
      for (var m = 0; l.isEven() && d.isEven(); m++)
        l.iushrn(1), d.iushrn(1);
      do {
        for (; l.isEven(); )
          l.iushrn(1);
        for (; d.isEven(); )
          d.iushrn(1);
        var M = l.cmp(d);
        if (M < 0) {
          var C = l;
          l = d, d = C;
        } else if (M === 0 || d.cmpn(1) === 0)
          break;
        l.isub(d);
      } while (!0);
      return d.iushln(m);
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
      var l = o % 26, d = (o - l) / 26, m = 1 << l;
      if (this.length <= d)
        return this._expand(d + 1), this.words[d] |= m, this;
      for (var M = m, C = d; M !== 0 && C < this.length; C++) {
        var F = this.words[C] | 0;
        F += M, M = F >>> 26, F &= 67108863, this.words[C] = F;
      }
      return M !== 0 && (this.words[C] = M, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(o) {
      var l = o < 0;
      if (this.negative !== 0 && !l)
        return -1;
      if (this.negative === 0 && l)
        return 1;
      this.strip();
      var d;
      if (this.length > 1)
        d = 1;
      else {
        l && (o = -o), n(o <= 67108863, "Number is too big");
        var m = this.words[0] | 0;
        d = m === o ? 0 : m < o ? -1 : 1;
      }
      return this.negative !== 0 ? -d | 0 : d;
    }, i.prototype.cmp = function(o) {
      if (this.negative !== 0 && o.negative === 0)
        return -1;
      if (this.negative === 0 && o.negative !== 0)
        return 1;
      var l = this.ucmp(o);
      return this.negative !== 0 ? -l | 0 : l;
    }, i.prototype.ucmp = function(o) {
      if (this.length > o.length)
        return 1;
      if (this.length < o.length)
        return -1;
      for (var l = 0, d = this.length - 1; d >= 0; d--) {
        var m = this.words[d] | 0, M = o.words[d] | 0;
        if (m !== M) {
          m < M ? l = -1 : m > M && (l = 1);
          break;
        }
      }
      return l;
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
      return new tt(o);
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
    var k = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function B(E, o) {
      this.name = E, this.p = new i(o, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    B.prototype._tmp = function() {
      var o = new i(null);
      return o.words = new Array(Math.ceil(this.n / 13)), o;
    }, B.prototype.ireduce = function(o) {
      var l = o, d;
      do
        this.split(l, this.tmp), l = this.imulK(l), l = l.iadd(this.tmp), d = l.bitLength();
      while (d > this.n);
      var m = d < this.n ? -1 : l.ucmp(this.p);
      return m === 0 ? (l.words[0] = 0, l.length = 1) : m > 0 ? l.isub(this.p) : l.strip(), l;
    }, B.prototype.split = function(o, l) {
      o.iushrn(this.n, 0, l);
    }, B.prototype.imulK = function(o) {
      return o.imul(this.k);
    };
    function q() {
      B.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    f(q, B), q.prototype.split = function(o, l) {
      for (var d = 4194303, m = Math.min(o.length, 9), M = 0; M < m; M++)
        l.words[M] = o.words[M];
      if (l.length = m, o.length <= 9) {
        o.words[0] = 0, o.length = 1;
        return;
      }
      var C = o.words[9];
      for (l.words[l.length++] = C & d, M = 10; M < o.length; M++) {
        var F = o.words[M] | 0;
        o.words[M - 10] = (F & d) << 4 | C >>> 22, C = F;
      }
      C >>>= 22, o.words[M - 10] = C, C === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9;
    }, q.prototype.imulK = function(o) {
      o.words[o.length] = 0, o.words[o.length + 1] = 0, o.length += 2;
      for (var l = 0, d = 0; d < o.length; d++) {
        var m = o.words[d] | 0;
        l += m * 977, o.words[d] = l & 67108863, l = m * 64 + (l / 67108864 | 0);
      }
      return o.words[o.length - 1] === 0 && (o.length--, o.words[o.length - 1] === 0 && o.length--), o;
    };
    function J() {
      B.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    f(J, B);
    function G() {
      B.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    f(G, B);
    function it() {
      B.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    f(it, B), it.prototype.imulK = function(o) {
      for (var l = 0, d = 0; d < o.length; d++) {
        var m = (o.words[d] | 0) * 19 + l, M = m & 67108863;
        m >>>= 26, o.words[d] = M, l = m;
      }
      return l !== 0 && (o.words[o.length++] = l), o;
    }, i._prime = function(o) {
      if (k[o])
        return k[o];
      var l;
      if (o === "k256")
        l = new q();
      else if (o === "p224")
        l = new J();
      else if (o === "p192")
        l = new G();
      else if (o === "p25519")
        l = new it();
      else
        throw new Error("Unknown prime " + o);
      return k[o] = l, l;
    };
    function tt(E) {
      if (typeof E == "string") {
        var o = i._prime(E);
        this.m = o.p, this.prime = o;
      } else
        n(E.gtn(1), "modulus must be greater than 1"), this.m = E, this.prime = null;
    }
    tt.prototype._verify1 = function(o) {
      n(o.negative === 0, "red works only with positives"), n(o.red, "red works only with red numbers");
    }, tt.prototype._verify2 = function(o, l) {
      n((o.negative | l.negative) === 0, "red works only with positives"), n(
        o.red && o.red === l.red,
        "red works only with red numbers"
      );
    }, tt.prototype.imod = function(o) {
      return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this);
    }, tt.prototype.neg = function(o) {
      return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
    }, tt.prototype.add = function(o, l) {
      this._verify2(o, l);
      var d = o.add(l);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
    }, tt.prototype.iadd = function(o, l) {
      this._verify2(o, l);
      var d = o.iadd(l);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d;
    }, tt.prototype.sub = function(o, l) {
      this._verify2(o, l);
      var d = o.sub(l);
      return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
    }, tt.prototype.isub = function(o, l) {
      this._verify2(o, l);
      var d = o.isub(l);
      return d.cmpn(0) < 0 && d.iadd(this.m), d;
    }, tt.prototype.shl = function(o, l) {
      return this._verify1(o), this.imod(o.ushln(l));
    }, tt.prototype.imul = function(o, l) {
      return this._verify2(o, l), this.imod(o.imul(l));
    }, tt.prototype.mul = function(o, l) {
      return this._verify2(o, l), this.imod(o.mul(l));
    }, tt.prototype.isqr = function(o) {
      return this.imul(o, o.clone());
    }, tt.prototype.sqr = function(o) {
      return this.mul(o, o);
    }, tt.prototype.sqrt = function(o) {
      if (o.isZero())
        return o.clone();
      var l = this.m.andln(3);
      if (n(l % 2 === 1), l === 3) {
        var d = this.m.add(new i(1)).iushrn(2);
        return this.pow(o, d);
      }
      for (var m = this.m.subn(1), M = 0; !m.isZero() && m.andln(1) === 0; )
        M++, m.iushrn(1);
      n(!m.isZero());
      var C = new i(1).toRed(this), F = C.redNeg(), w = this.m.subn(1).iushrn(1), a = this.m.bitLength();
      for (a = new i(2 * a * a).toRed(this); this.pow(a, w).cmp(F) !== 0; )
        a.redIAdd(F);
      for (var g = this.pow(a, m), D = this.pow(o, m.addn(1).iushrn(1)), O = this.pow(o, m), Y = M; O.cmp(C) !== 0; ) {
        for (var X = O, c = 0; X.cmp(C) !== 0; c++)
          X = X.redSqr();
        n(c < Y);
        var T = this.pow(g, new i(1).iushln(Y - c - 1));
        D = D.redMul(T), g = T.redSqr(), O = O.redMul(g), Y = c;
      }
      return D;
    }, tt.prototype.invm = function(o) {
      var l = o._invmp(this.m);
      return l.negative !== 0 ? (l.negative = 0, this.imod(l).redNeg()) : this.imod(l);
    }, tt.prototype.pow = function(o, l) {
      if (l.isZero())
        return new i(1).toRed(this);
      if (l.cmpn(1) === 0)
        return o.clone();
      var d = 4, m = new Array(1 << d);
      m[0] = new i(1).toRed(this), m[1] = o;
      for (var M = 2; M < m.length; M++)
        m[M] = this.mul(m[M - 1], o);
      var C = m[0], F = 0, w = 0, a = l.bitLength() % 26;
      for (a === 0 && (a = 26), M = l.length - 1; M >= 0; M--) {
        for (var g = l.words[M], D = a - 1; D >= 0; D--) {
          var O = g >> D & 1;
          if (C !== m[0] && (C = this.sqr(C)), O === 0 && F === 0) {
            w = 0;
            continue;
          }
          F <<= 1, F |= O, w++, !(w !== d && (M !== 0 || D !== 0)) && (C = this.mul(C, m[F]), w = 0, F = 0);
        }
        a = 26;
      }
      return C;
    }, tt.prototype.convertTo = function(o) {
      var l = o.umod(this.m);
      return l === o ? l.clone() : l;
    }, tt.prototype.convertFrom = function(o) {
      var l = o.clone();
      return l.red = null, l;
    }, i.mont = function(o) {
      return new lt(o);
    };
    function lt(E) {
      tt.call(this, E), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    f(lt, tt), lt.prototype.convertTo = function(o) {
      return this.imod(o.ushln(this.shift));
    }, lt.prototype.convertFrom = function(o) {
      var l = this.imod(o.mul(this.rinv));
      return l.red = null, l;
    }, lt.prototype.imul = function(o, l) {
      if (o.isZero() || l.isZero())
        return o.words[0] = 0, o.length = 1, o;
      var d = o.imul(l), m = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = d.isub(m).iushrn(this.shift), C = M;
      return M.cmp(this.m) >= 0 ? C = M.isub(this.m) : M.cmpn(0) < 0 && (C = M.iadd(this.m)), C._forceRed(this);
    }, lt.prototype.mul = function(o, l) {
      if (o.isZero() || l.isZero())
        return new i(0)._forceRed(this);
      var d = o.mul(l), m = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = d.isub(m).iushrn(this.shift), C = M;
      return M.cmp(this.m) >= 0 ? C = M.isub(this.m) : M.cmpn(0) < 0 && (C = M.iadd(this.m)), C._forceRed(this);
    }, lt.prototype.invm = function(o) {
      var l = this.imod(o._invmp(this.m).mul(this.r2));
      return l._forceRed(this);
    };
  })(e, Ut);
})(zi);
var Ki = { exports: {} };
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
    var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", f = n ? window : {};
    f.JS_SHA3_NO_WINDOW && (n = !1);
    var i = !n && typeof self == "object", p = !f.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    p ? f = Ut : i && (f = self);
    var h = !f.JS_SHA3_NO_COMMON_JS && !0 && e.exports, v = !f.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", x = "0123456789abcdef".split(""), _ = [31, 7936, 2031616, 520093696], R = [4, 1024, 262144, 67108864], I = [1, 256, 65536, 16777216], U = [6, 1536, 393216, 100663296], N = [0, 8, 16, 24], W = [
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
    ], A = [224, 256, 384, 512], S = [128, 256], k = ["hex", "buffer", "arrayBuffer", "array", "digest"], B = {
      128: 168,
      256: 136
    };
    (f.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(c) {
      return Object.prototype.toString.call(c) === "[object Array]";
    }), v && (f.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(c) {
      return typeof c == "object" && c.buffer && c.buffer.constructor === ArrayBuffer;
    });
    for (var q = function(c, T, j) {
      return function(P) {
        return new O(c, T, c).update(P)[j]();
      };
    }, J = function(c, T, j) {
      return function(P, $) {
        return new O(c, T, $).update(P)[j]();
      };
    }, G = function(c, T, j) {
      return function(P, $, Q, K) {
        return m["cshake" + c].update(P, $, Q, K)[j]();
      };
    }, it = function(c, T, j) {
      return function(P, $, Q, K) {
        return m["kmac" + c].update(P, $, Q, K)[j]();
      };
    }, tt = function(c, T, j, P) {
      for (var $ = 0; $ < k.length; ++$) {
        var Q = k[$];
        c[Q] = T(j, P, Q);
      }
      return c;
    }, lt = function(c, T) {
      var j = q(c, T, "hex");
      return j.create = function() {
        return new O(c, T, c);
      }, j.update = function(P) {
        return j.create().update(P);
      }, tt(j, q, c, T);
    }, E = function(c, T) {
      var j = J(c, T, "hex");
      return j.create = function(P) {
        return new O(c, T, P);
      }, j.update = function(P, $) {
        return j.create($).update(P);
      }, tt(j, J, c, T);
    }, o = function(c, T) {
      var j = B[c], P = G(c, T, "hex");
      return P.create = function($, Q, K) {
        return !Q && !K ? m["shake" + c].create($) : new O(c, T, $).bytepad([Q, K], j);
      }, P.update = function($, Q, K, Z) {
        return P.create(Q, K, Z).update($);
      }, tt(P, G, c, T);
    }, l = function(c, T) {
      var j = B[c], P = it(c, T, "hex");
      return P.create = function($, Q, K) {
        return new Y(c, T, Q).bytepad(["KMAC", K], j).bytepad([$], j);
      }, P.update = function($, Q, K, Z) {
        return P.create($, K, Z).update(Q);
      }, tt(P, it, c, T);
    }, d = [
      { name: "keccak", padding: I, bits: A, createMethod: lt },
      { name: "sha3", padding: U, bits: A, createMethod: lt },
      { name: "shake", padding: _, bits: S, createMethod: E },
      { name: "cshake", padding: R, bits: S, createMethod: o },
      { name: "kmac", padding: R, bits: S, createMethod: l }
    ], m = {}, M = [], C = 0; C < d.length; ++C)
      for (var F = d[C], w = F.bits, a = 0; a < w.length; ++a) {
        var g = F.name + "_" + w[a];
        if (M.push(g), m[g] = F.createMethod(w[a], F.padding), F.name !== "sha3") {
          var D = F.name + w[a];
          M.push(D), m[D] = m[g];
        }
      }
    function O(c, T, j) {
      this.blocks = [], this.s = [], this.padding = T, this.outputBits = j, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (c << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = j >> 5, this.extraBytes = (j & 31) >> 3;
      for (var P = 0; P < 50; ++P)
        this.s[P] = 0;
    }
    O.prototype.update = function(c) {
      if (this.finalized)
        throw new Error(r);
      var T, j = typeof c;
      if (j !== "string") {
        if (j === "object") {
          if (c === null)
            throw new Error(t);
          if (v && c.constructor === ArrayBuffer)
            c = new Uint8Array(c);
          else if (!Array.isArray(c) && (!v || !ArrayBuffer.isView(c)))
            throw new Error(t);
        } else
          throw new Error(t);
        T = !0;
      }
      for (var P = this.blocks, $ = this.byteCount, Q = c.length, K = this.blockCount, Z = 0, at = this.s, V, rt; Z < Q; ) {
        if (this.reset)
          for (this.reset = !1, P[0] = this.block, V = 1; V < K + 1; ++V)
            P[V] = 0;
        if (T)
          for (V = this.start; Z < Q && V < $; ++Z)
            P[V >> 2] |= c[Z] << N[V++ & 3];
        else
          for (V = this.start; Z < Q && V < $; ++Z)
            rt = c.charCodeAt(Z), rt < 128 ? P[V >> 2] |= rt << N[V++ & 3] : rt < 2048 ? (P[V >> 2] |= (192 | rt >> 6) << N[V++ & 3], P[V >> 2] |= (128 | rt & 63) << N[V++ & 3]) : rt < 55296 || rt >= 57344 ? (P[V >> 2] |= (224 | rt >> 12) << N[V++ & 3], P[V >> 2] |= (128 | rt >> 6 & 63) << N[V++ & 3], P[V >> 2] |= (128 | rt & 63) << N[V++ & 3]) : (rt = 65536 + ((rt & 1023) << 10 | c.charCodeAt(++Z) & 1023), P[V >> 2] |= (240 | rt >> 18) << N[V++ & 3], P[V >> 2] |= (128 | rt >> 12 & 63) << N[V++ & 3], P[V >> 2] |= (128 | rt >> 6 & 63) << N[V++ & 3], P[V >> 2] |= (128 | rt & 63) << N[V++ & 3]);
        if (this.lastByteIndex = V, V >= $) {
          for (this.start = V - $, this.block = P[K], V = 0; V < K; ++V)
            at[V] ^= P[V];
          X(at), this.reset = !0;
        } else
          this.start = V;
      }
      return this;
    }, O.prototype.encode = function(c, T) {
      var j = c & 255, P = 1, $ = [j];
      for (c = c >> 8, j = c & 255; j > 0; )
        $.unshift(j), c = c >> 8, j = c & 255, ++P;
      return T ? $.push(P) : $.unshift(P), this.update($), $.length;
    }, O.prototype.encodeString = function(c) {
      var T, j = typeof c;
      if (j !== "string") {
        if (j === "object") {
          if (c === null)
            throw new Error(t);
          if (v && c.constructor === ArrayBuffer)
            c = new Uint8Array(c);
          else if (!Array.isArray(c) && (!v || !ArrayBuffer.isView(c)))
            throw new Error(t);
        } else
          throw new Error(t);
        T = !0;
      }
      var P = 0, $ = c.length;
      if (T)
        P = $;
      else
        for (var Q = 0; Q < c.length; ++Q) {
          var K = c.charCodeAt(Q);
          K < 128 ? P += 1 : K < 2048 ? P += 2 : K < 55296 || K >= 57344 ? P += 3 : (K = 65536 + ((K & 1023) << 10 | c.charCodeAt(++Q) & 1023), P += 4);
        }
      return P += this.encode(P * 8), this.update(c), P;
    }, O.prototype.bytepad = function(c, T) {
      for (var j = this.encode(T), P = 0; P < c.length; ++P)
        j += this.encodeString(c[P]);
      var $ = T - j % T, Q = [];
      return Q.length = $, this.update(Q), this;
    }, O.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var c = this.blocks, T = this.lastByteIndex, j = this.blockCount, P = this.s;
        if (c[T >> 2] |= this.padding[T & 3], this.lastByteIndex === this.byteCount)
          for (c[0] = c[j], T = 1; T < j + 1; ++T)
            c[T] = 0;
        for (c[j - 1] |= 2147483648, T = 0; T < j; ++T)
          P[T] ^= c[T];
        X(P);
      }
    }, O.prototype.toString = O.prototype.hex = function() {
      this.finalize();
      for (var c = this.blockCount, T = this.s, j = this.outputBlocks, P = this.extraBytes, $ = 0, Q = 0, K = "", Z; Q < j; ) {
        for ($ = 0; $ < c && Q < j; ++$, ++Q)
          Z = T[$], K += x[Z >> 4 & 15] + x[Z & 15] + x[Z >> 12 & 15] + x[Z >> 8 & 15] + x[Z >> 20 & 15] + x[Z >> 16 & 15] + x[Z >> 28 & 15] + x[Z >> 24 & 15];
        Q % c === 0 && (X(T), $ = 0);
      }
      return P && (Z = T[$], K += x[Z >> 4 & 15] + x[Z & 15], P > 1 && (K += x[Z >> 12 & 15] + x[Z >> 8 & 15]), P > 2 && (K += x[Z >> 20 & 15] + x[Z >> 16 & 15])), K;
    }, O.prototype.arrayBuffer = function() {
      this.finalize();
      var c = this.blockCount, T = this.s, j = this.outputBlocks, P = this.extraBytes, $ = 0, Q = 0, K = this.outputBits >> 3, Z;
      P ? Z = new ArrayBuffer(j + 1 << 2) : Z = new ArrayBuffer(K);
      for (var at = new Uint32Array(Z); Q < j; ) {
        for ($ = 0; $ < c && Q < j; ++$, ++Q)
          at[Q] = T[$];
        Q % c === 0 && X(T);
      }
      return P && (at[$] = T[$], Z = Z.slice(0, K)), Z;
    }, O.prototype.buffer = O.prototype.arrayBuffer, O.prototype.digest = O.prototype.array = function() {
      this.finalize();
      for (var c = this.blockCount, T = this.s, j = this.outputBlocks, P = this.extraBytes, $ = 0, Q = 0, K = [], Z, at; Q < j; ) {
        for ($ = 0; $ < c && Q < j; ++$, ++Q)
          Z = Q << 2, at = T[$], K[Z] = at & 255, K[Z + 1] = at >> 8 & 255, K[Z + 2] = at >> 16 & 255, K[Z + 3] = at >> 24 & 255;
        Q % c === 0 && X(T);
      }
      return P && (Z = Q << 2, at = T[$], K[Z] = at & 255, P > 1 && (K[Z + 1] = at >> 8 & 255), P > 2 && (K[Z + 2] = at >> 16 & 255)), K;
    };
    function Y(c, T, j) {
      O.call(this, c, T, j);
    }
    Y.prototype = new O(), Y.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), O.prototype.finalize.call(this);
    };
    var X = function(c) {
      var T, j, P, $, Q, K, Z, at, V, rt, y, s, u, b, L, H, z, et, nt, ct, ft, ot, Pt, pt, dt, oe, gt, mt, ae, yt, _t, se, wt, Mt, fe, xt, bt, ue, Et, At, he, Ct, Lt, le, Bt, St, ce, kt, Ft, pe, Rt, Tt, de, It, Nt, Wt, Kt, Yt, Jt, Vt, Gt, Xt, Qt;
      for (P = 0; P < 48; P += 2)
        $ = c[0] ^ c[10] ^ c[20] ^ c[30] ^ c[40], Q = c[1] ^ c[11] ^ c[21] ^ c[31] ^ c[41], K = c[2] ^ c[12] ^ c[22] ^ c[32] ^ c[42], Z = c[3] ^ c[13] ^ c[23] ^ c[33] ^ c[43], at = c[4] ^ c[14] ^ c[24] ^ c[34] ^ c[44], V = c[5] ^ c[15] ^ c[25] ^ c[35] ^ c[45], rt = c[6] ^ c[16] ^ c[26] ^ c[36] ^ c[46], y = c[7] ^ c[17] ^ c[27] ^ c[37] ^ c[47], s = c[8] ^ c[18] ^ c[28] ^ c[38] ^ c[48], u = c[9] ^ c[19] ^ c[29] ^ c[39] ^ c[49], T = s ^ (K << 1 | Z >>> 31), j = u ^ (Z << 1 | K >>> 31), c[0] ^= T, c[1] ^= j, c[10] ^= T, c[11] ^= j, c[20] ^= T, c[21] ^= j, c[30] ^= T, c[31] ^= j, c[40] ^= T, c[41] ^= j, T = $ ^ (at << 1 | V >>> 31), j = Q ^ (V << 1 | at >>> 31), c[2] ^= T, c[3] ^= j, c[12] ^= T, c[13] ^= j, c[22] ^= T, c[23] ^= j, c[32] ^= T, c[33] ^= j, c[42] ^= T, c[43] ^= j, T = K ^ (rt << 1 | y >>> 31), j = Z ^ (y << 1 | rt >>> 31), c[4] ^= T, c[5] ^= j, c[14] ^= T, c[15] ^= j, c[24] ^= T, c[25] ^= j, c[34] ^= T, c[35] ^= j, c[44] ^= T, c[45] ^= j, T = at ^ (s << 1 | u >>> 31), j = V ^ (u << 1 | s >>> 31), c[6] ^= T, c[7] ^= j, c[16] ^= T, c[17] ^= j, c[26] ^= T, c[27] ^= j, c[36] ^= T, c[37] ^= j, c[46] ^= T, c[47] ^= j, T = rt ^ ($ << 1 | Q >>> 31), j = y ^ (Q << 1 | $ >>> 31), c[8] ^= T, c[9] ^= j, c[18] ^= T, c[19] ^= j, c[28] ^= T, c[29] ^= j, c[38] ^= T, c[39] ^= j, c[48] ^= T, c[49] ^= j, b = c[0], L = c[1], St = c[11] << 4 | c[10] >>> 28, ce = c[10] << 4 | c[11] >>> 28, mt = c[20] << 3 | c[21] >>> 29, ae = c[21] << 3 | c[20] >>> 29, Vt = c[31] << 9 | c[30] >>> 23, Gt = c[30] << 9 | c[31] >>> 23, Ct = c[40] << 18 | c[41] >>> 14, Lt = c[41] << 18 | c[40] >>> 14, Mt = c[2] << 1 | c[3] >>> 31, fe = c[3] << 1 | c[2] >>> 31, H = c[13] << 12 | c[12] >>> 20, z = c[12] << 12 | c[13] >>> 20, kt = c[22] << 10 | c[23] >>> 22, Ft = c[23] << 10 | c[22] >>> 22, yt = c[33] << 13 | c[32] >>> 19, _t = c[32] << 13 | c[33] >>> 19, Xt = c[42] << 2 | c[43] >>> 30, Qt = c[43] << 2 | c[42] >>> 30, It = c[5] << 30 | c[4] >>> 2, Nt = c[4] << 30 | c[5] >>> 2, xt = c[14] << 6 | c[15] >>> 26, bt = c[15] << 6 | c[14] >>> 26, et = c[25] << 11 | c[24] >>> 21, nt = c[24] << 11 | c[25] >>> 21, pe = c[34] << 15 | c[35] >>> 17, Rt = c[35] << 15 | c[34] >>> 17, se = c[45] << 29 | c[44] >>> 3, wt = c[44] << 29 | c[45] >>> 3, pt = c[6] << 28 | c[7] >>> 4, dt = c[7] << 28 | c[6] >>> 4, Wt = c[17] << 23 | c[16] >>> 9, Kt = c[16] << 23 | c[17] >>> 9, ue = c[26] << 25 | c[27] >>> 7, Et = c[27] << 25 | c[26] >>> 7, ct = c[36] << 21 | c[37] >>> 11, ft = c[37] << 21 | c[36] >>> 11, Tt = c[47] << 24 | c[46] >>> 8, de = c[46] << 24 | c[47] >>> 8, le = c[8] << 27 | c[9] >>> 5, Bt = c[9] << 27 | c[8] >>> 5, oe = c[18] << 20 | c[19] >>> 12, gt = c[19] << 20 | c[18] >>> 12, Yt = c[29] << 7 | c[28] >>> 25, Jt = c[28] << 7 | c[29] >>> 25, At = c[38] << 8 | c[39] >>> 24, he = c[39] << 8 | c[38] >>> 24, ot = c[48] << 14 | c[49] >>> 18, Pt = c[49] << 14 | c[48] >>> 18, c[0] = b ^ ~H & et, c[1] = L ^ ~z & nt, c[10] = pt ^ ~oe & mt, c[11] = dt ^ ~gt & ae, c[20] = Mt ^ ~xt & ue, c[21] = fe ^ ~bt & Et, c[30] = le ^ ~St & kt, c[31] = Bt ^ ~ce & Ft, c[40] = It ^ ~Wt & Yt, c[41] = Nt ^ ~Kt & Jt, c[2] = H ^ ~et & ct, c[3] = z ^ ~nt & ft, c[12] = oe ^ ~mt & yt, c[13] = gt ^ ~ae & _t, c[22] = xt ^ ~ue & At, c[23] = bt ^ ~Et & he, c[32] = St ^ ~kt & pe, c[33] = ce ^ ~Ft & Rt, c[42] = Wt ^ ~Yt & Vt, c[43] = Kt ^ ~Jt & Gt, c[4] = et ^ ~ct & ot, c[5] = nt ^ ~ft & Pt, c[14] = mt ^ ~yt & se, c[15] = ae ^ ~_t & wt, c[24] = ue ^ ~At & Ct, c[25] = Et ^ ~he & Lt, c[34] = kt ^ ~pe & Tt, c[35] = Ft ^ ~Rt & de, c[44] = Yt ^ ~Vt & Xt, c[45] = Jt ^ ~Gt & Qt, c[6] = ct ^ ~ot & b, c[7] = ft ^ ~Pt & L, c[16] = yt ^ ~se & pt, c[17] = _t ^ ~wt & dt, c[26] = At ^ ~Ct & Mt, c[27] = he ^ ~Lt & fe, c[36] = pe ^ ~Tt & le, c[37] = Rt ^ ~de & Bt, c[46] = Vt ^ ~Xt & It, c[47] = Gt ^ ~Qt & Nt, c[8] = ot ^ ~b & H, c[9] = Pt ^ ~L & z, c[18] = se ^ ~pt & oe, c[19] = wt ^ ~dt & gt, c[28] = Ct ^ ~Mt & xt, c[29] = Lt ^ ~fe & bt, c[38] = Tt ^ ~le & St, c[39] = de ^ ~Bt & ce, c[48] = Xt ^ ~It & Wt, c[49] = Qt ^ ~Nt & Kt, c[0] ^= W[P], c[1] ^= W[P + 1];
    };
    if (h)
      e.exports = m;
    else
      for (C = 0; C < M.length; ++C)
        f[M[C]] = m[M[C]];
  })();
})(Ki);
var Yi = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isBrowserCryptoAvailable = ee.getSubtleCrypto = ee.getBrowerCrypto = void 0;
function qr() {
  return (Ut == null ? void 0 : Ut.crypto) || (Ut == null ? void 0 : Ut.msCrypto) || {};
}
ee.getBrowerCrypto = qr;
function Pn() {
  const e = qr();
  return e.subtle || e.webkitSubtle;
}
ee.getSubtleCrypto = Pn;
function Ji() {
  return !!qr() && !!Pn();
}
ee.isBrowserCryptoAvailable = Ji;
var re = {};
Object.defineProperty(re, "__esModule", { value: !0 });
re.isBrowser = re.isNode = re.isReactNative = void 0;
function Dn() {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
}
re.isReactNative = Dn;
function Hn() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
re.isNode = Hn;
function Vi() {
  return !Dn() && !Hn();
}
re.isBrowser = Vi;
(function(e) {
  var t = Ut && Ut.__createBinding || (Object.create ? function(n, f, i, p) {
    p === void 0 && (p = i), Object.defineProperty(n, p, { enumerable: !0, get: function() {
      return f[i];
    } });
  } : function(n, f, i, p) {
    p === void 0 && (p = i), n[p] = f[i];
  }), r = Ut && Ut.__exportStar || function(n, f) {
    for (var i in n)
      i !== "default" && !f.hasOwnProperty(i) && t(f, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(ee, e), r(re, e);
})(Yi);
var Gi = {}, Xi = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), qn = "%[a-f0-9]{2}", en = new RegExp(qn, "gi"), rn = new RegExp("(" + qn + ")+", "gi");
function Ar(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], Ar(r), Ar(n));
}
function Qi(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(en), r = 1; r < t.length; r++)
      e = Ar(t, r).join(""), t = e.match(en);
    return e;
  }
}
function to(e) {
  for (var t = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, r = rn.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Qi(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = rn.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var f = Object.keys(t), i = 0; i < f.length; i++) {
    var p = f[i];
    e = e.replace(new RegExp(p, "g"), t[p]);
  }
  return e;
}
var eo = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return to(e);
  }
}, ro = (e, t) => {
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
(function(e) {
  const t = Xi, r = eo, n = ro, f = (A) => A == null;
  function i(A) {
    switch (A.arrayFormat) {
      case "index":
        return (S) => (k, B) => {
          const q = k.length;
          return B === void 0 || A.skipNull && B === null || A.skipEmptyString && B === "" ? k : B === null ? [...k, [v(S, A), "[", q, "]"].join("")] : [
            ...k,
            [v(S, A), "[", v(q, A), "]=", v(B, A)].join("")
          ];
        };
      case "bracket":
        return (S) => (k, B) => B === void 0 || A.skipNull && B === null || A.skipEmptyString && B === "" ? k : B === null ? [...k, [v(S, A), "[]"].join("")] : [...k, [v(S, A), "[]=", v(B, A)].join("")];
      case "comma":
      case "separator":
        return (S) => (k, B) => B == null || B.length === 0 ? k : k.length === 0 ? [[v(S, A), "=", v(B, A)].join("")] : [[k, v(B, A)].join(A.arrayFormatSeparator)];
      default:
        return (S) => (k, B) => B === void 0 || A.skipNull && B === null || A.skipEmptyString && B === "" ? k : B === null ? [...k, v(S, A)] : [...k, [v(S, A), "=", v(B, A)].join("")];
    }
  }
  function p(A) {
    let S;
    switch (A.arrayFormat) {
      case "index":
        return (k, B, q) => {
          if (S = /\[(\d*)\]$/.exec(k), k = k.replace(/\[\d*\]$/, ""), !S) {
            q[k] = B;
            return;
          }
          q[k] === void 0 && (q[k] = {}), q[k][S[1]] = B;
        };
      case "bracket":
        return (k, B, q) => {
          if (S = /(\[\])$/.exec(k), k = k.replace(/\[\]$/, ""), !S) {
            q[k] = B;
            return;
          }
          if (q[k] === void 0) {
            q[k] = [B];
            return;
          }
          q[k] = [].concat(q[k], B);
        };
      case "comma":
      case "separator":
        return (k, B, q) => {
          const G = typeof B == "string" && B.split("").indexOf(A.arrayFormatSeparator) > -1 ? B.split(A.arrayFormatSeparator).map((it) => x(it, A)) : B === null ? B : x(B, A);
          q[k] = G;
        };
      default:
        return (k, B, q) => {
          if (q[k] === void 0) {
            q[k] = B;
            return;
          }
          q[k] = [].concat(q[k], B);
        };
    }
  }
  function h(A) {
    if (typeof A != "string" || A.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function v(A, S) {
    return S.encode ? S.strict ? t(A) : encodeURIComponent(A) : A;
  }
  function x(A, S) {
    return S.decode ? r(A) : A;
  }
  function _(A) {
    return Array.isArray(A) ? A.sort() : typeof A == "object" ? _(Object.keys(A)).sort((S, k) => Number(S) - Number(k)).map((S) => A[S]) : A;
  }
  function R(A) {
    const S = A.indexOf("#");
    return S !== -1 && (A = A.slice(0, S)), A;
  }
  function I(A) {
    let S = "";
    const k = A.indexOf("#");
    return k !== -1 && (S = A.slice(k)), S;
  }
  function U(A) {
    A = R(A);
    const S = A.indexOf("?");
    return S === -1 ? "" : A.slice(S + 1);
  }
  function N(A, S) {
    return S.parseNumbers && !Number.isNaN(Number(A)) && typeof A == "string" && A.trim() !== "" ? A = Number(A) : S.parseBooleans && A !== null && (A.toLowerCase() === "true" || A.toLowerCase() === "false") && (A = A.toLowerCase() === "true"), A;
  }
  function W(A, S) {
    S = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, S), h(S.arrayFormatSeparator);
    const k = p(S), B = /* @__PURE__ */ Object.create(null);
    if (typeof A != "string" || (A = A.trim().replace(/^[?#&]/, ""), !A))
      return B;
    for (const q of A.split("&")) {
      let [J, G] = n(S.decode ? q.replace(/\+/g, " ") : q, "=");
      G = G === void 0 ? null : ["comma", "separator"].includes(S.arrayFormat) ? G : x(G, S), k(x(J, S), G, B);
    }
    for (const q of Object.keys(B)) {
      const J = B[q];
      if (typeof J == "object" && J !== null)
        for (const G of Object.keys(J))
          J[G] = N(J[G], S);
      else
        B[q] = N(J, S);
    }
    return S.sort === !1 ? B : (S.sort === !0 ? Object.keys(B).sort() : Object.keys(B).sort(S.sort)).reduce((q, J) => {
      const G = B[J];
      return Boolean(G) && typeof G == "object" && !Array.isArray(G) ? q[J] = _(G) : q[J] = G, q;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = U, e.parse = W, e.stringify = (A, S) => {
    if (!A)
      return "";
    S = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, S), h(S.arrayFormatSeparator);
    const k = (G) => S.skipNull && f(A[G]) || S.skipEmptyString && A[G] === "", B = i(S), q = {};
    for (const G of Object.keys(A))
      k(G) || (q[G] = A[G]);
    const J = Object.keys(q);
    return S.sort !== !1 && J.sort(S.sort), J.map((G) => {
      const it = A[G];
      return it === void 0 ? "" : it === null ? v(G, S) : Array.isArray(it) ? it.reduce(B(G), []).join("&") : v(G, S) + "=" + v(it, S);
    }).filter((G) => G.length > 0).join("&");
  }, e.parseUrl = (A, S) => {
    S = Object.assign({
      decode: !0
    }, S);
    const [k, B] = n(A, "#");
    return Object.assign(
      {
        url: k.split("?")[0] || "",
        query: W(U(A), S)
      },
      S && S.parseFragmentIdentifier && B ? { fragmentIdentifier: x(B, S) } : {}
    );
  }, e.stringifyUrl = (A, S) => {
    S = Object.assign({
      encode: !0,
      strict: !0
    }, S);
    const k = R(A.url).split("?")[0] || "", B = e.extract(A.url), q = e.parse(B, { sort: !1 }), J = Object.assign(q, A.query);
    let G = e.stringify(J, S);
    G && (G = `?${G}`);
    let it = I(A.url);
    return A.fragmentIdentifier && (it = `#${v(A.fragmentIdentifier, S)}`), `${k}${G}${it}`;
  };
})(Gi);
typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
const no = "abcdefghijklmnopqrstuvwxyz0123456789";
no.split("").map((e) => `https://${e}.bridge.walletconnect.org`);
var Ne = {}, io = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, jn = {}, ne = {}, oo = {}.toString, jr = Array.isArray || function(e) {
  return oo.call(e) == "[object Array]";
}, ao = jr;
function so() {
  try {
    var e = new Uint8Array(1);
    return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, e.foo() === 42;
  } catch {
    return !1;
  }
}
ht.TYPED_ARRAY_SUPPORT = so();
var nn = ht.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function ht(e, t, r) {
  return !ht.TYPED_ARRAY_SUPPORT && !(this instanceof ht) ? new ht(e, t, r) : typeof e == "number" ? $n(this, e) : vo(this, e, t, r);
}
ht.TYPED_ARRAY_SUPPORT && (ht.prototype.__proto__ = Uint8Array.prototype, ht.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ht[Symbol.species] === ht && Object.defineProperty(ht, Symbol.species, {
  value: null,
  configurable: !0,
  enumerable: !1,
  writable: !1
}));
function $r(e) {
  if (e >= nn)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + nn.toString(16) + " bytes");
  return e | 0;
}
function fo(e) {
  return e !== e;
}
function _e(e, t) {
  var r;
  return ht.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t), r.__proto__ = ht.prototype) : (r = e, r === null && (r = new ht(t)), r.length = t), r;
}
function $n(e, t) {
  var r = _e(e, t < 0 ? 0 : $r(t) | 0);
  if (!ht.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < t; ++n)
      r[n] = 0;
  return r;
}
function uo(e, t) {
  var r = Zn(t) | 0, n = _e(e, r), f = n.write(t);
  return f !== r && (n = n.slice(0, f)), n;
}
function Cr(e, t) {
  for (var r = t.length < 0 ? 0 : $r(t.length) | 0, n = _e(e, r), f = 0; f < r; f += 1)
    n[f] = t[f] & 255;
  return n;
}
function ho(e, t, r, n) {
  if (r < 0 || t.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (t.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  var f;
  return r === void 0 && n === void 0 ? f = new Uint8Array(t) : n === void 0 ? f = new Uint8Array(t, r) : f = new Uint8Array(t, r, n), ht.TYPED_ARRAY_SUPPORT ? f.__proto__ = ht.prototype : f = Cr(e, f), f;
}
function lo(e, t) {
  if (ht.isBuffer(t)) {
    var r = $r(t.length) | 0, n = _e(e, r);
    return n.length === 0 || t.copy(n, 0, 0, r), n;
  }
  if (t) {
    if (typeof ArrayBuffer < "u" && t.buffer instanceof ArrayBuffer || "length" in t)
      return typeof t.length != "number" || fo(t.length) ? _e(e, 0) : Cr(e, t);
    if (t.type === "Buffer" && Array.isArray(t.data))
      return Cr(e, t.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function zn(e, t) {
  t = t || 1 / 0;
  for (var r, n = e.length, f = null, i = [], p = 0; p < n; ++p) {
    if (r = e.charCodeAt(p), r > 55295 && r < 57344) {
      if (!f) {
        if (r > 56319) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        } else if (p + 1 === n) {
          (t -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        f = r;
        continue;
      }
      if (r < 56320) {
        (t -= 3) > -1 && i.push(239, 191, 189), f = r;
        continue;
      }
      r = (f - 55296 << 10 | r - 56320) + 65536;
    } else
      f && (t -= 3) > -1 && i.push(239, 191, 189);
    if (f = null, r < 128) {
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
function Zn(e) {
  if (ht.isBuffer(e))
    return e.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
    return e.byteLength;
  typeof e != "string" && (e = "" + e);
  var t = e.length;
  return t === 0 ? 0 : zn(e).length;
}
function co(e, t, r, n) {
  for (var f = 0; f < n && !(f + r >= t.length || f >= e.length); ++f)
    t[f + r] = e[f];
  return f;
}
function po(e, t, r, n) {
  return co(zn(t, e.length - r), e, r, n);
}
function vo(e, t, r, n) {
  if (typeof t == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer ? ho(e, t, r, n) : typeof t == "string" ? uo(e, t) : lo(e, t);
}
ht.prototype.write = function(t, r, n) {
  r === void 0 ? (n = this.length, r = 0) : n === void 0 && typeof r == "string" ? (n = this.length, r = 0) : isFinite(r) && (r = r | 0, isFinite(n) ? n = n | 0 : n = void 0);
  var f = this.length - r;
  if ((n === void 0 || n > f) && (n = f), t.length > 0 && (n < 0 || r < 0) || r > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return po(this, t, r, n);
};
ht.prototype.slice = function(t, r) {
  var n = this.length;
  t = ~~t, r = r === void 0 ? n : ~~r, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < t && (r = t);
  var f;
  if (ht.TYPED_ARRAY_SUPPORT)
    f = this.subarray(t, r), f.__proto__ = ht.prototype;
  else {
    var i = r - t;
    f = new ht(i, void 0);
    for (var p = 0; p < i; ++p)
      f[p] = this[p + t];
  }
  return f;
};
ht.prototype.copy = function(t, r, n, f) {
  if (n || (n = 0), !f && f !== 0 && (f = this.length), r >= t.length && (r = t.length), r || (r = 0), f > 0 && f < n && (f = n), f === n || t.length === 0 || this.length === 0)
    return 0;
  if (r < 0)
    throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (f < 0)
    throw new RangeError("sourceEnd out of bounds");
  f > this.length && (f = this.length), t.length - r < f - n && (f = t.length - r + n);
  var i = f - n, p;
  if (this === t && n < r && r < f)
    for (p = i - 1; p >= 0; --p)
      t[p + r] = this[p + n];
  else if (i < 1e3 || !ht.TYPED_ARRAY_SUPPORT)
    for (p = 0; p < i; ++p)
      t[p + r] = this[p + n];
  else
    Uint8Array.prototype.set.call(
      t,
      this.subarray(n, n + i),
      r
    );
  return i;
};
ht.prototype.fill = function(t, r, n) {
  if (typeof t == "string") {
    if (typeof r == "string" ? (r = 0, n = this.length) : typeof n == "string" && (n = this.length), t.length === 1) {
      var f = t.charCodeAt(0);
      f < 256 && (t = f);
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
    var p = ht.isBuffer(t) ? t : new ht(t), h = p.length;
    for (i = 0; i < n - r; ++i)
      this[i + r] = p[i % h];
  }
  return this;
};
ht.concat = function(t, r) {
  if (!ao(t))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (t.length === 0)
    return _e(null, 0);
  var n;
  if (r === void 0)
    for (r = 0, n = 0; n < t.length; ++n)
      r += t[n].length;
  var f = $n(null, r), i = 0;
  for (n = 0; n < t.length; ++n) {
    var p = t[n];
    if (!ht.isBuffer(p))
      throw new TypeError('"list" argument must be an Array of Buffers');
    p.copy(f, i), i += p.length;
  }
  return f;
};
ht.byteLength = Zn;
ht.prototype._isBuffer = !0;
ht.isBuffer = function(t) {
  return !!(t != null && t._isBuffer);
};
ne.alloc = function(e) {
  var t = new ht(e);
  return t.fill(0), t;
};
ne.from = function(e) {
  return new ht(e);
};
var Ot = {}, zr, go = [
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
];
Ot.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
Ot.getSymbolTotalCodewords = function(t) {
  return go[t];
};
Ot.getBCHDigit = function(e) {
  for (var t = 0; e !== 0; )
    t++, e >>>= 1;
  return t;
};
Ot.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  zr = t;
};
Ot.isKanjiModeEnabled = function() {
  return typeof zr < "u";
};
Ot.toSJIS = function(t) {
  return zr(t);
};
var Je = {};
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
  }, e.from = function(n, f) {
    if (e.isValid(n))
      return n;
    try {
      return t(n);
    } catch {
      return f;
    }
  };
})(Je);
function Wn() {
  this.buffer = [], this.length = 0;
}
Wn.prototype = {
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
var mo = Wn, on = ne;
function Ue(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = on.alloc(e * e), this.reservedBit = on.alloc(e * e);
}
Ue.prototype.set = function(e, t, r, n) {
  var f = e * this.size + t;
  this.data[f] = r, n && (this.reservedBit[f] = !0);
};
Ue.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
Ue.prototype.xor = function(e, t, r) {
  this.data[e * this.size + t] ^= r;
};
Ue.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var yo = Ue, Kn = {};
(function(e) {
  var t = Ot.getSymbolSize;
  e.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    for (var f = Math.floor(n / 7) + 2, i = t(n), p = i === 145 ? 26 : Math.ceil((i - 13) / (2 * f - 2)) * 2, h = [i - 7], v = 1; v < f - 1; v++)
      h[v] = h[v - 1] - p;
    return h.push(6), h.reverse();
  }, e.getPositions = function(n) {
    for (var f = [], i = e.getRowColCoords(n), p = i.length, h = 0; h < p; h++)
      for (var v = 0; v < p; v++)
        h === 0 && v === 0 || h === 0 && v === p - 1 || h === p - 1 && v === 0 || f.push([i[h], i[v]]);
    return f;
  };
})(Kn);
var Yn = {}, _o = Ot.getSymbolSize, an = 7;
Yn.getPositions = function(t) {
  var r = _o(t);
  return [
    [0, 0],
    [r - an, 0],
    [0, r - an]
  ];
};
var Jn = {};
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
  e.isValid = function(f) {
    return f != null && f !== "" && !isNaN(f) && f >= 0 && f <= 7;
  }, e.from = function(f) {
    return e.isValid(f) ? parseInt(f, 10) : void 0;
  }, e.getPenaltyN1 = function(f) {
    for (var i = f.size, p = 0, h = 0, v = 0, x = null, _ = null, R = 0; R < i; R++) {
      h = v = 0, x = _ = null;
      for (var I = 0; I < i; I++) {
        var U = f.get(R, I);
        U === x ? h++ : (h >= 5 && (p += t.N1 + (h - 5)), x = U, h = 1), U = f.get(I, R), U === _ ? v++ : (v >= 5 && (p += t.N1 + (v - 5)), _ = U, v = 1);
      }
      h >= 5 && (p += t.N1 + (h - 5)), v >= 5 && (p += t.N1 + (v - 5));
    }
    return p;
  }, e.getPenaltyN2 = function(f) {
    for (var i = f.size, p = 0, h = 0; h < i - 1; h++)
      for (var v = 0; v < i - 1; v++) {
        var x = f.get(h, v) + f.get(h, v + 1) + f.get(h + 1, v) + f.get(h + 1, v + 1);
        (x === 4 || x === 0) && p++;
      }
    return p * t.N2;
  }, e.getPenaltyN3 = function(f) {
    for (var i = f.size, p = 0, h = 0, v = 0, x = 0; x < i; x++) {
      h = v = 0;
      for (var _ = 0; _ < i; _++)
        h = h << 1 & 2047 | f.get(x, _), _ >= 10 && (h === 1488 || h === 93) && p++, v = v << 1 & 2047 | f.get(_, x), _ >= 10 && (v === 1488 || v === 93) && p++;
    }
    return p * t.N3;
  }, e.getPenaltyN4 = function(f) {
    for (var i = 0, p = f.data.length, h = 0; h < p; h++)
      i += f.data[h];
    var v = Math.abs(Math.ceil(i * 100 / p / 5) - 10);
    return v * t.N4;
  };
  function r(n, f, i) {
    switch (n) {
      case e.Patterns.PATTERN000:
        return (f + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return f % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (f + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(f / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return f * i % 2 + f * i % 3 === 0;
      case e.Patterns.PATTERN110:
        return (f * i % 2 + f * i % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (f * i % 3 + (f + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  e.applyMask = function(f, i) {
    for (var p = i.size, h = 0; h < p; h++)
      for (var v = 0; v < p; v++)
        i.isReserved(v, h) || i.xor(v, h, r(f, v, h));
  }, e.getBestMask = function(f, i) {
    for (var p = Object.keys(e.Patterns).length, h = 0, v = 1 / 0, x = 0; x < p; x++) {
      i(x), e.applyMask(x, f);
      var _ = e.getPenaltyN1(f) + e.getPenaltyN2(f) + e.getPenaltyN3(f) + e.getPenaltyN4(f);
      e.applyMask(x, f), _ < v && (v = _, h = x);
    }
    return h;
  };
})(Jn);
var Ve = {}, te = Je, De = [
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
], He = [
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
];
Ve.getBlocksCount = function(t, r) {
  switch (r) {
    case te.L:
      return De[(t - 1) * 4 + 0];
    case te.M:
      return De[(t - 1) * 4 + 1];
    case te.Q:
      return De[(t - 1) * 4 + 2];
    case te.H:
      return De[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Ve.getTotalCodewordsCount = function(t, r) {
  switch (r) {
    case te.L:
      return He[(t - 1) * 4 + 0];
    case te.M:
      return He[(t - 1) * 4 + 1];
    case te.Q:
      return He[(t - 1) * 4 + 2];
    case te.H:
      return He[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Vn = {}, Ge = {}, Gn = ne, Se = Gn.alloc(512), Ze = Gn.alloc(256);
(function() {
  for (var t = 1, r = 0; r < 255; r++)
    Se[r] = t, Ze[t] = r, t <<= 1, t & 256 && (t ^= 285);
  for (r = 255; r < 512; r++)
    Se[r] = Se[r - 255];
})();
Ge.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return Ze[t];
};
Ge.exp = function(t) {
  return Se[t];
};
Ge.mul = function(t, r) {
  return t === 0 || r === 0 ? 0 : Se[Ze[t] + Ze[r]];
};
(function(e) {
  var t = ne, r = Ge;
  e.mul = function(f, i) {
    for (var p = t.alloc(f.length + i.length - 1), h = 0; h < f.length; h++)
      for (var v = 0; v < i.length; v++)
        p[h + v] ^= r.mul(f[h], i[v]);
    return p;
  }, e.mod = function(f, i) {
    for (var p = t.from(f); p.length - i.length >= 0; ) {
      for (var h = p[0], v = 0; v < i.length; v++)
        p[v] ^= r.mul(i[v], h);
      for (var x = 0; x < p.length && p[x] === 0; )
        x++;
      p = p.slice(x);
    }
    return p;
  }, e.generateECPolynomial = function(f) {
    for (var i = t.from([1]), p = 0; p < f; p++)
      i = e.mul(i, [1, r.exp(p)]);
    return i;
  };
})(Vn);
var Xn = {}, Xe = {};
Xe.byteLength = xo;
Xe.toByteArray = Eo;
Xe.fromByteArray = Lo;
var jt = [], Dt = [], wo = typeof Uint8Array < "u" ? Uint8Array : Array, vr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var me = 0, Mo = vr.length; me < Mo; ++me)
  jt[me] = vr[me], Dt[vr.charCodeAt(me)] = me;
Dt["-".charCodeAt(0)] = 62;
Dt["_".charCodeAt(0)] = 63;
function Qn(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function xo(e) {
  var t = Qn(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function bo(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function Eo(e) {
  var t, r = Qn(e), n = r[0], f = r[1], i = new wo(bo(e, n, f)), p = 0, h = f > 0 ? n - 4 : n, v;
  for (v = 0; v < h; v += 4)
    t = Dt[e.charCodeAt(v)] << 18 | Dt[e.charCodeAt(v + 1)] << 12 | Dt[e.charCodeAt(v + 2)] << 6 | Dt[e.charCodeAt(v + 3)], i[p++] = t >> 16 & 255, i[p++] = t >> 8 & 255, i[p++] = t & 255;
  return f === 2 && (t = Dt[e.charCodeAt(v)] << 2 | Dt[e.charCodeAt(v + 1)] >> 4, i[p++] = t & 255), f === 1 && (t = Dt[e.charCodeAt(v)] << 10 | Dt[e.charCodeAt(v + 1)] << 4 | Dt[e.charCodeAt(v + 2)] >> 2, i[p++] = t >> 8 & 255, i[p++] = t & 255), i;
}
function Ao(e) {
  return jt[e >> 18 & 63] + jt[e >> 12 & 63] + jt[e >> 6 & 63] + jt[e & 63];
}
function Co(e, t, r) {
  for (var n, f = [], i = t; i < r; i += 3)
    n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255), f.push(Ao(n));
  return f.join("");
}
function Lo(e) {
  for (var t, r = e.length, n = r % 3, f = [], i = 16383, p = 0, h = r - n; p < h; p += i)
    f.push(Co(e, p, p + i > h ? h : p + i));
  return n === 1 ? (t = e[r - 1], f.push(
    jt[t >> 2] + jt[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], f.push(
    jt[t >> 10] + jt[t >> 4 & 63] + jt[t << 2 & 63] + "="
  )), f.join("");
}
var Zr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Zr.read = function(e, t, r, n, f) {
  var i, p, h = f * 8 - n - 1, v = (1 << h) - 1, x = v >> 1, _ = -7, R = r ? f - 1 : 0, I = r ? -1 : 1, U = e[t + R];
  for (R += I, i = U & (1 << -_) - 1, U >>= -_, _ += h; _ > 0; i = i * 256 + e[t + R], R += I, _ -= 8)
    ;
  for (p = i & (1 << -_) - 1, i >>= -_, _ += n; _ > 0; p = p * 256 + e[t + R], R += I, _ -= 8)
    ;
  if (i === 0)
    i = 1 - x;
  else {
    if (i === v)
      return p ? NaN : (U ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, n), i = i - x;
  }
  return (U ? -1 : 1) * p * Math.pow(2, i - n);
};
Zr.write = function(e, t, r, n, f, i) {
  var p, h, v, x = i * 8 - f - 1, _ = (1 << x) - 1, R = _ >> 1, I = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, U = n ? 0 : i - 1, N = n ? 1 : -1, W = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (h = isNaN(t) ? 1 : 0, p = _) : (p = Math.floor(Math.log(t) / Math.LN2), t * (v = Math.pow(2, -p)) < 1 && (p--, v *= 2), p + R >= 1 ? t += I / v : t += I * Math.pow(2, 1 - R), t * v >= 2 && (p++, v /= 2), p + R >= _ ? (h = 0, p = _) : p + R >= 1 ? (h = (t * v - 1) * Math.pow(2, f), p = p + R) : (h = t * Math.pow(2, R - 1) * Math.pow(2, f), p = 0)); f >= 8; e[r + U] = h & 255, U += N, h /= 256, f -= 8)
    ;
  for (p = p << f | h, x += f; x > 0; e[r + U] = p & 255, U += N, p /= 256, x -= 8)
    ;
  e[r + U - N] |= W * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var t = Xe, r = Zr, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = h, e.SlowBuffer = k, e.INSPECT_MAX_BYTES = 50;
  var f = 2147483647;
  e.kMaxLength = f, h.TYPED_ARRAY_SUPPORT = i(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      var y = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(y, s), y.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!h.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(h.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!h.isBuffer(this))
        return this.byteOffset;
    }
  });
  function p(y) {
    if (y > f)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    var s = new Uint8Array(y);
    return Object.setPrototypeOf(s, h.prototype), s;
  }
  function h(y, s, u) {
    if (typeof y == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return R(y);
    }
    return v(y, s, u);
  }
  h.poolSize = 8192;
  function v(y, s, u) {
    if (typeof y == "string")
      return I(y, s);
    if (ArrayBuffer.isView(y))
      return N(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
      );
    if (at(y, ArrayBuffer) || y && at(y.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (at(y, SharedArrayBuffer) || y && at(y.buffer, SharedArrayBuffer)))
      return W(y, s, u);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var b = y.valueOf && y.valueOf();
    if (b != null && b !== y)
      return h.from(b, s, u);
    var L = A(y);
    if (L)
      return L;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return h.from(
        y[Symbol.toPrimitive]("string"),
        s,
        u
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  h.from = function(y, s, u) {
    return v(y, s, u);
  }, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array);
  function x(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function _(y, s, u) {
    return x(y), y <= 0 ? p(y) : s !== void 0 ? typeof u == "string" ? p(y).fill(s, u) : p(y).fill(s) : p(y);
  }
  h.alloc = function(y, s, u) {
    return _(y, s, u);
  };
  function R(y) {
    return x(y), p(y < 0 ? 0 : S(y) | 0);
  }
  h.allocUnsafe = function(y) {
    return R(y);
  }, h.allocUnsafeSlow = function(y) {
    return R(y);
  };
  function I(y, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !h.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    var u = B(y, s) | 0, b = p(u), L = b.write(y, s);
    return L !== u && (b = b.slice(0, L)), b;
  }
  function U(y) {
    for (var s = y.length < 0 ? 0 : S(y.length) | 0, u = p(s), b = 0; b < s; b += 1)
      u[b] = y[b] & 255;
    return u;
  }
  function N(y) {
    if (at(y, Uint8Array)) {
      var s = new Uint8Array(y);
      return W(s.buffer, s.byteOffset, s.byteLength);
    }
    return U(y);
  }
  function W(y, s, u) {
    if (s < 0 || y.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < s + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var b;
    return s === void 0 && u === void 0 ? b = new Uint8Array(y) : u === void 0 ? b = new Uint8Array(y, s) : b = new Uint8Array(y, s, u), Object.setPrototypeOf(b, h.prototype), b;
  }
  function A(y) {
    if (h.isBuffer(y)) {
      var s = S(y.length) | 0, u = p(s);
      return u.length === 0 || y.copy(u, 0, 0, s), u;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || V(y.length) ? p(0) : U(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return U(y.data);
  }
  function S(y) {
    if (y >= f)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
    return y | 0;
  }
  function k(y) {
    return +y != y && (y = 0), h.alloc(+y);
  }
  h.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== h.prototype;
  }, h.compare = function(s, u) {
    if (at(s, Uint8Array) && (s = h.from(s, s.offset, s.byteLength)), at(u, Uint8Array) && (u = h.from(u, u.offset, u.byteLength)), !h.isBuffer(s) || !h.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === u)
      return 0;
    for (var b = s.length, L = u.length, H = 0, z = Math.min(b, L); H < z; ++H)
      if (s[H] !== u[H]) {
        b = s[H], L = u[H];
        break;
      }
    return b < L ? -1 : L < b ? 1 : 0;
  }, h.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
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
  }, h.concat = function(s, u) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return h.alloc(0);
    var b;
    if (u === void 0)
      for (u = 0, b = 0; b < s.length; ++b)
        u += s[b].length;
    var L = h.allocUnsafe(u), H = 0;
    for (b = 0; b < s.length; ++b) {
      var z = s[b];
      if (at(z, Uint8Array))
        H + z.length > L.length ? h.from(z).copy(L, H) : Uint8Array.prototype.set.call(
          L,
          z,
          H
        );
      else if (h.isBuffer(z))
        z.copy(L, H);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      H += z.length;
    }
    return L;
  };
  function B(y, s) {
    if (h.isBuffer(y))
      return y.length;
    if (ArrayBuffer.isView(y) || at(y, ArrayBuffer))
      return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y
      );
    var u = y.length, b = arguments.length > 2 && arguments[2] === !0;
    if (!b && u === 0)
      return 0;
    for (var L = !1; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return P(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return K(y).length;
        default:
          if (L)
            return b ? -1 : P(y).length;
          s = ("" + s).toLowerCase(), L = !0;
      }
  }
  h.byteLength = B;
  function q(y, s, u) {
    var b = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, s >>>= 0, u <= s))
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return a(this, s, u);
        case "utf8":
        case "utf-8":
          return m(this, s, u);
        case "ascii":
          return F(this, s, u);
        case "latin1":
        case "binary":
          return w(this, s, u);
        case "base64":
          return d(this, s, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return g(this, s, u);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), b = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function J(y, s, u) {
    var b = y[s];
    y[s] = y[u], y[u] = b;
  }
  h.prototype.swap16 = function() {
    var s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var u = 0; u < s; u += 2)
      J(this, u, u + 1);
    return this;
  }, h.prototype.swap32 = function() {
    var s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var u = 0; u < s; u += 4)
      J(this, u, u + 3), J(this, u + 1, u + 2);
    return this;
  }, h.prototype.swap64 = function() {
    var s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var u = 0; u < s; u += 8)
      J(this, u, u + 7), J(this, u + 1, u + 6), J(this, u + 2, u + 5), J(this, u + 3, u + 4);
    return this;
  }, h.prototype.toString = function() {
    var s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? m(this, 0, s) : q.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(s) {
    if (!h.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : h.compare(this, s) === 0;
  }, h.prototype.inspect = function() {
    var s = "", u = e.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (s += " ... "), "<Buffer " + s + ">";
  }, n && (h.prototype[n] = h.prototype.inspect), h.prototype.compare = function(s, u, b, L, H) {
    if (at(s, Uint8Array) && (s = h.from(s, s.offset, s.byteLength)), !h.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (u === void 0 && (u = 0), b === void 0 && (b = s ? s.length : 0), L === void 0 && (L = 0), H === void 0 && (H = this.length), u < 0 || b > s.length || L < 0 || H > this.length)
      throw new RangeError("out of range index");
    if (L >= H && u >= b)
      return 0;
    if (L >= H)
      return -1;
    if (u >= b)
      return 1;
    if (u >>>= 0, b >>>= 0, L >>>= 0, H >>>= 0, this === s)
      return 0;
    for (var z = H - L, et = b - u, nt = Math.min(z, et), ct = this.slice(L, H), ft = s.slice(u, b), ot = 0; ot < nt; ++ot)
      if (ct[ot] !== ft[ot]) {
        z = ct[ot], et = ft[ot];
        break;
      }
    return z < et ? -1 : et < z ? 1 : 0;
  };
  function G(y, s, u, b, L) {
    if (y.length === 0)
      return -1;
    if (typeof u == "string" ? (b = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, V(u) && (u = L ? 0 : y.length - 1), u < 0 && (u = y.length + u), u >= y.length) {
      if (L)
        return -1;
      u = y.length - 1;
    } else if (u < 0)
      if (L)
        u = 0;
      else
        return -1;
    if (typeof s == "string" && (s = h.from(s, b)), h.isBuffer(s))
      return s.length === 0 ? -1 : it(y, s, u, b, L);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? L ? Uint8Array.prototype.indexOf.call(y, s, u) : Uint8Array.prototype.lastIndexOf.call(y, s, u) : it(y, [s], u, b, L);
    throw new TypeError("val must be string, number or Buffer");
  }
  function it(y, s, u, b, L) {
    var H = 1, z = y.length, et = s.length;
    if (b !== void 0 && (b = String(b).toLowerCase(), b === "ucs2" || b === "ucs-2" || b === "utf16le" || b === "utf-16le")) {
      if (y.length < 2 || s.length < 2)
        return -1;
      H = 2, z /= 2, et /= 2, u /= 2;
    }
    function nt(pt, dt) {
      return H === 1 ? pt[dt] : pt.readUInt16BE(dt * H);
    }
    var ct;
    if (L) {
      var ft = -1;
      for (ct = u; ct < z; ct++)
        if (nt(y, ct) === nt(s, ft === -1 ? 0 : ct - ft)) {
          if (ft === -1 && (ft = ct), ct - ft + 1 === et)
            return ft * H;
        } else
          ft !== -1 && (ct -= ct - ft), ft = -1;
    } else
      for (u + et > z && (u = z - et), ct = u; ct >= 0; ct--) {
        for (var ot = !0, Pt = 0; Pt < et; Pt++)
          if (nt(y, ct + Pt) !== nt(s, Pt)) {
            ot = !1;
            break;
          }
        if (ot)
          return ct;
      }
    return -1;
  }
  h.prototype.includes = function(s, u, b) {
    return this.indexOf(s, u, b) !== -1;
  }, h.prototype.indexOf = function(s, u, b) {
    return G(this, s, u, b, !0);
  }, h.prototype.lastIndexOf = function(s, u, b) {
    return G(this, s, u, b, !1);
  };
  function tt(y, s, u, b) {
    u = Number(u) || 0;
    var L = y.length - u;
    b ? (b = Number(b), b > L && (b = L)) : b = L;
    var H = s.length;
    b > H / 2 && (b = H / 2);
    for (var z = 0; z < b; ++z) {
      var et = parseInt(s.substr(z * 2, 2), 16);
      if (V(et))
        return z;
      y[u + z] = et;
    }
    return z;
  }
  function lt(y, s, u, b) {
    return Z(P(s, y.length - u), y, u, b);
  }
  function E(y, s, u, b) {
    return Z($(s), y, u, b);
  }
  function o(y, s, u, b) {
    return Z(K(s), y, u, b);
  }
  function l(y, s, u, b) {
    return Z(Q(s, y.length - u), y, u, b);
  }
  h.prototype.write = function(s, u, b, L) {
    if (u === void 0)
      L = "utf8", b = this.length, u = 0;
    else if (b === void 0 && typeof u == "string")
      L = u, b = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(b) ? (b = b >>> 0, L === void 0 && (L = "utf8")) : (L = b, b = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var H = this.length - u;
    if ((b === void 0 || b > H) && (b = H), s.length > 0 && (b < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    L || (L = "utf8");
    for (var z = !1; ; )
      switch (L) {
        case "hex":
          return tt(this, s, u, b);
        case "utf8":
        case "utf-8":
          return lt(this, s, u, b);
        case "ascii":
        case "latin1":
        case "binary":
          return E(this, s, u, b);
        case "base64":
          return o(this, s, u, b);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l(this, s, u, b);
        default:
          if (z)
            throw new TypeError("Unknown encoding: " + L);
          L = ("" + L).toLowerCase(), z = !0;
      }
  }, h.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function d(y, s, u) {
    return s === 0 && u === y.length ? t.fromByteArray(y) : t.fromByteArray(y.slice(s, u));
  }
  function m(y, s, u) {
    u = Math.min(y.length, u);
    for (var b = [], L = s; L < u; ) {
      var H = y[L], z = null, et = H > 239 ? 4 : H > 223 ? 3 : H > 191 ? 2 : 1;
      if (L + et <= u) {
        var nt, ct, ft, ot;
        switch (et) {
          case 1:
            H < 128 && (z = H);
            break;
          case 2:
            nt = y[L + 1], (nt & 192) === 128 && (ot = (H & 31) << 6 | nt & 63, ot > 127 && (z = ot));
            break;
          case 3:
            nt = y[L + 1], ct = y[L + 2], (nt & 192) === 128 && (ct & 192) === 128 && (ot = (H & 15) << 12 | (nt & 63) << 6 | ct & 63, ot > 2047 && (ot < 55296 || ot > 57343) && (z = ot));
            break;
          case 4:
            nt = y[L + 1], ct = y[L + 2], ft = y[L + 3], (nt & 192) === 128 && (ct & 192) === 128 && (ft & 192) === 128 && (ot = (H & 15) << 18 | (nt & 63) << 12 | (ct & 63) << 6 | ft & 63, ot > 65535 && ot < 1114112 && (z = ot));
        }
      }
      z === null ? (z = 65533, et = 1) : z > 65535 && (z -= 65536, b.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), b.push(z), L += et;
    }
    return C(b);
  }
  var M = 4096;
  function C(y) {
    var s = y.length;
    if (s <= M)
      return String.fromCharCode.apply(String, y);
    for (var u = "", b = 0; b < s; )
      u += String.fromCharCode.apply(
        String,
        y.slice(b, b += M)
      );
    return u;
  }
  function F(y, s, u) {
    var b = "";
    u = Math.min(y.length, u);
    for (var L = s; L < u; ++L)
      b += String.fromCharCode(y[L] & 127);
    return b;
  }
  function w(y, s, u) {
    var b = "";
    u = Math.min(y.length, u);
    for (var L = s; L < u; ++L)
      b += String.fromCharCode(y[L]);
    return b;
  }
  function a(y, s, u) {
    var b = y.length;
    (!s || s < 0) && (s = 0), (!u || u < 0 || u > b) && (u = b);
    for (var L = "", H = s; H < u; ++H)
      L += rt[y[H]];
    return L;
  }
  function g(y, s, u) {
    for (var b = y.slice(s, u), L = "", H = 0; H < b.length - 1; H += 2)
      L += String.fromCharCode(b[H] + b[H + 1] * 256);
    return L;
  }
  h.prototype.slice = function(s, u) {
    var b = this.length;
    s = ~~s, u = u === void 0 ? b : ~~u, s < 0 ? (s += b, s < 0 && (s = 0)) : s > b && (s = b), u < 0 ? (u += b, u < 0 && (u = 0)) : u > b && (u = b), u < s && (u = s);
    var L = this.subarray(s, u);
    return Object.setPrototypeOf(L, h.prototype), L;
  };
  function D(y, s, u) {
    if (y % 1 !== 0 || y < 0)
      throw new RangeError("offset is not uint");
    if (y + s > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = this[s], H = 1, z = 0; ++z < u && (H *= 256); )
      L += this[s + z] * H;
    return L;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = this[s + --u], H = 1; u > 0 && (H *= 256); )
      L += this[s + --u] * H;
    return L;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(s, u) {
    return s = s >>> 0, u || D(s, 1, this.length), this[s];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(s, u) {
    return s = s >>> 0, u || D(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(s, u) {
    return s = s >>> 0, u || D(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, h.prototype.readIntLE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = this[s], H = 1, z = 0; ++z < u && (H *= 256); )
      L += this[s + z] * H;
    return H *= 128, L >= H && (L -= Math.pow(2, 8 * u)), L;
  }, h.prototype.readIntBE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = u, H = 1, z = this[s + --L]; L > 0 && (H *= 256); )
      z += this[s + --L] * H;
    return H *= 128, z >= H && (z -= Math.pow(2, 8 * u)), z;
  }, h.prototype.readInt8 = function(s, u) {
    return s = s >>> 0, u || D(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, h.prototype.readInt16LE = function(s, u) {
    s = s >>> 0, u || D(s, 2, this.length);
    var b = this[s] | this[s + 1] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, h.prototype.readInt16BE = function(s, u) {
    s = s >>> 0, u || D(s, 2, this.length);
    var b = this[s + 1] | this[s] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, h.prototype.readInt32LE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, h.prototype.readInt32BE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, h.prototype.readFloatLE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), r.read(this, s, !0, 23, 4);
  }, h.prototype.readFloatBE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), r.read(this, s, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(s, u) {
    return s = s >>> 0, u || D(s, 8, this.length), r.read(this, s, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(s, u) {
    return s = s >>> 0, u || D(s, 8, this.length), r.read(this, s, !1, 52, 8);
  };
  function O(y, s, u, b, L, H) {
    if (!h.isBuffer(y))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > L || s < H)
      throw new RangeError('"value" argument is out of bounds');
    if (u + b > y.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, b = b >>> 0, !L) {
      var H = Math.pow(2, 8 * b) - 1;
      O(this, s, u, b, H, 0);
    }
    var z = 1, et = 0;
    for (this[u] = s & 255; ++et < b && (z *= 256); )
      this[u + et] = s / z & 255;
    return u + b;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, b = b >>> 0, !L) {
      var H = Math.pow(2, 8 * b) - 1;
      O(this, s, u, b, H, 0);
    }
    var z = b - 1, et = 1;
    for (this[u + z] = s & 255; --z >= 0 && (et *= 256); )
      this[u + z] = s / et & 255;
    return u + b;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 1, 255, 0), this[u] = s & 255, u + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 65535, 0), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 65535, 0), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 4294967295, 0), this[u + 3] = s >>> 24, this[u + 2] = s >>> 16, this[u + 1] = s >>> 8, this[u] = s & 255, u + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 4294967295, 0), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  }, h.prototype.writeIntLE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, !L) {
      var H = Math.pow(2, 8 * b - 1);
      O(this, s, u, b, H - 1, -H);
    }
    var z = 0, et = 1, nt = 0;
    for (this[u] = s & 255; ++z < b && (et *= 256); )
      s < 0 && nt === 0 && this[u + z - 1] !== 0 && (nt = 1), this[u + z] = (s / et >> 0) - nt & 255;
    return u + b;
  }, h.prototype.writeIntBE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, !L) {
      var H = Math.pow(2, 8 * b - 1);
      O(this, s, u, b, H - 1, -H);
    }
    var z = b - 1, et = 1, nt = 0;
    for (this[u + z] = s & 255; --z >= 0 && (et *= 256); )
      s < 0 && nt === 0 && this[u + z + 1] !== 0 && (nt = 1), this[u + z] = (s / et >> 0) - nt & 255;
    return u + b;
  }, h.prototype.writeInt8 = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[u] = s & 255, u + 1;
  }, h.prototype.writeInt16LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 32767, -32768), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, h.prototype.writeInt16BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 32767, -32768), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, h.prototype.writeInt32LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 2147483647, -2147483648), this[u] = s & 255, this[u + 1] = s >>> 8, this[u + 2] = s >>> 16, this[u + 3] = s >>> 24, u + 4;
  }, h.prototype.writeInt32BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  };
  function Y(y, s, u, b, L, H) {
    if (u + b > y.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function X(y, s, u, b, L) {
    return s = +s, u = u >>> 0, L || Y(y, s, u, 4), r.write(y, s, u, b, 23, 4), u + 4;
  }
  h.prototype.writeFloatLE = function(s, u, b) {
    return X(this, s, u, !0, b);
  }, h.prototype.writeFloatBE = function(s, u, b) {
    return X(this, s, u, !1, b);
  };
  function c(y, s, u, b, L) {
    return s = +s, u = u >>> 0, L || Y(y, s, u, 8), r.write(y, s, u, b, 52, 8), u + 8;
  }
  h.prototype.writeDoubleLE = function(s, u, b) {
    return c(this, s, u, !0, b);
  }, h.prototype.writeDoubleBE = function(s, u, b) {
    return c(this, s, u, !1, b);
  }, h.prototype.copy = function(s, u, b, L) {
    if (!h.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (b || (b = 0), !L && L !== 0 && (L = this.length), u >= s.length && (u = s.length), u || (u = 0), L > 0 && L < b && (L = b), L === b || s.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (b < 0 || b >= this.length)
      throw new RangeError("Index out of range");
    if (L < 0)
      throw new RangeError("sourceEnd out of bounds");
    L > this.length && (L = this.length), s.length - u < L - b && (L = s.length - u + b);
    var H = L - b;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, b, L) : Uint8Array.prototype.set.call(
      s,
      this.subarray(b, L),
      u
    ), H;
  }, h.prototype.fill = function(s, u, b, L) {
    if (typeof s == "string") {
      if (typeof u == "string" ? (L = u, u = 0, b = this.length) : typeof b == "string" && (L = b, b = this.length), L !== void 0 && typeof L != "string")
        throw new TypeError("encoding must be a string");
      if (typeof L == "string" && !h.isEncoding(L))
        throw new TypeError("Unknown encoding: " + L);
      if (s.length === 1) {
        var H = s.charCodeAt(0);
        (L === "utf8" && H < 128 || L === "latin1") && (s = H);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (u < 0 || this.length < u || this.length < b)
      throw new RangeError("Out of range index");
    if (b <= u)
      return this;
    u = u >>> 0, b = b === void 0 ? this.length : b >>> 0, s || (s = 0);
    var z;
    if (typeof s == "number")
      for (z = u; z < b; ++z)
        this[z] = s;
    else {
      var et = h.isBuffer(s) ? s : h.from(s, L), nt = et.length;
      if (nt === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (z = 0; z < b - u; ++z)
        this[z + u] = et[z % nt];
    }
    return this;
  };
  var T = /[^+/0-9A-Za-z-_]/g;
  function j(y) {
    if (y = y.split("=")[0], y = y.trim().replace(T, ""), y.length < 2)
      return "";
    for (; y.length % 4 !== 0; )
      y = y + "=";
    return y;
  }
  function P(y, s) {
    s = s || 1 / 0;
    for (var u, b = y.length, L = null, H = [], z = 0; z < b; ++z) {
      if (u = y.charCodeAt(z), u > 55295 && u < 57344) {
        if (!L) {
          if (u > 56319) {
            (s -= 3) > -1 && H.push(239, 191, 189);
            continue;
          } else if (z + 1 === b) {
            (s -= 3) > -1 && H.push(239, 191, 189);
            continue;
          }
          L = u;
          continue;
        }
        if (u < 56320) {
          (s -= 3) > -1 && H.push(239, 191, 189), L = u;
          continue;
        }
        u = (L - 55296 << 10 | u - 56320) + 65536;
      } else
        L && (s -= 3) > -1 && H.push(239, 191, 189);
      if (L = null, u < 128) {
        if ((s -= 1) < 0)
          break;
        H.push(u);
      } else if (u < 2048) {
        if ((s -= 2) < 0)
          break;
        H.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((s -= 3) < 0)
          break;
        H.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((s -= 4) < 0)
          break;
        H.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return H;
  }
  function $(y) {
    for (var s = [], u = 0; u < y.length; ++u)
      s.push(y.charCodeAt(u) & 255);
    return s;
  }
  function Q(y, s) {
    for (var u, b, L, H = [], z = 0; z < y.length && !((s -= 2) < 0); ++z)
      u = y.charCodeAt(z), b = u >> 8, L = u % 256, H.push(L), H.push(b);
    return H;
  }
  function K(y) {
    return t.toByteArray(j(y));
  }
  function Z(y, s, u, b) {
    for (var L = 0; L < b && !(L + u >= s.length || L >= y.length); ++L)
      s[L + u] = y[L];
    return L;
  }
  function at(y, s) {
    return y instanceof s || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === s.name;
  }
  function V(y) {
    return y !== y;
  }
  var rt = function() {
    for (var y = "0123456789abcdef", s = new Array(256), u = 0; u < 16; ++u)
      for (var b = u * 16, L = 0; L < 16; ++L)
        s[b + L] = y[u] + y[L];
    return s;
  }();
})(Xn);
var sn = ne, ti = Vn, Bo = Xn.Buffer;
function Wr(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
Wr.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = ti.generateECPolynomial(this.degree);
};
Wr.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var r = sn.alloc(this.degree), n = Bo.concat([t, r], t.length + this.degree), f = ti.mod(n, this.genPoly), i = this.degree - f.length;
  if (i > 0) {
    var p = sn.alloc(this.degree);
    return f.copy(p, i), p;
  }
  return f;
};
var So = Wr, ei = {}, ie = {}, Kr = {};
Kr.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var $t = {}, ri = "[0-9]+", ko = "[A-Z $%*+\\-./:]+", Re = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Re = Re.replace(/u/g, "\\u");
var Fo = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Re + `)(?:.|[\r
]))+`;
$t.KANJI = new RegExp(Re, "g");
$t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
$t.BYTE = new RegExp(Fo, "g");
$t.NUMERIC = new RegExp(ri, "g");
$t.ALPHANUMERIC = new RegExp(ko, "g");
var Ro = new RegExp("^" + Re + "$"), To = new RegExp("^" + ri + "$"), Io = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
$t.testKanji = function(t) {
  return Ro.test(t);
};
$t.testNumeric = function(t) {
  return To.test(t);
};
$t.testAlphanumeric = function(t) {
  return Io.test(t);
};
(function(e) {
  var t = Kr, r = $t;
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
  }, e.getCharCountIndicator = function(i, p) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!t.isValid(p))
      throw new Error("Invalid version: " + p);
    return p >= 1 && p < 10 ? i.ccBits[0] : p < 27 ? i.ccBits[1] : i.ccBits[2];
  }, e.getBestModeForData = function(i) {
    return r.testNumeric(i) ? e.NUMERIC : r.testAlphanumeric(i) ? e.ALPHANUMERIC : r.testKanji(i) ? e.KANJI : e.BYTE;
  }, e.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function n(f) {
    if (typeof f != "string")
      throw new Error("Param is not a string");
    var i = f.toLowerCase();
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
        throw new Error("Unknown mode: " + f);
    }
  }
  e.from = function(i, p) {
    if (e.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return p;
    }
  };
})(ie);
(function(e) {
  var t = Ot, r = Ve, n = Je, f = ie, i = Kr, p = jr, h = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, v = t.getBCHDigit(h);
  function x(U, N, W) {
    for (var A = 1; A <= 40; A++)
      if (N <= e.getCapacity(A, W, U))
        return A;
  }
  function _(U, N) {
    return f.getCharCountIndicator(U, N) + 4;
  }
  function R(U, N) {
    var W = 0;
    return U.forEach(function(A) {
      var S = _(A.mode, N);
      W += S + A.getBitsLength();
    }), W;
  }
  function I(U, N) {
    for (var W = 1; W <= 40; W++) {
      var A = R(U, W);
      if (A <= e.getCapacity(W, N, f.MIXED))
        return W;
    }
  }
  e.from = function(N, W) {
    return i.isValid(N) ? parseInt(N, 10) : W;
  }, e.getCapacity = function(N, W, A) {
    if (!i.isValid(N))
      throw new Error("Invalid QR Code version");
    typeof A > "u" && (A = f.BYTE);
    var S = t.getSymbolTotalCodewords(N), k = r.getTotalCodewordsCount(N, W), B = (S - k) * 8;
    if (A === f.MIXED)
      return B;
    var q = B - _(A, N);
    switch (A) {
      case f.NUMERIC:
        return Math.floor(q / 10 * 3);
      case f.ALPHANUMERIC:
        return Math.floor(q / 11 * 2);
      case f.KANJI:
        return Math.floor(q / 13);
      case f.BYTE:
      default:
        return Math.floor(q / 8);
    }
  }, e.getBestVersionForData = function(N, W) {
    var A, S = n.from(W, n.M);
    if (p(N)) {
      if (N.length > 1)
        return I(N, S);
      if (N.length === 0)
        return 1;
      A = N[0];
    } else
      A = N;
    return x(A.mode, A.getLength(), S);
  }, e.getEncodedBits = function(N) {
    if (!i.isValid(N) || N < 7)
      throw new Error("Invalid QR Code version");
    for (var W = N << 12; t.getBCHDigit(W) - v >= 0; )
      W ^= h << t.getBCHDigit(W) - v;
    return N << 12 | W;
  };
})(ei);
var ni = {}, Lr = Ot, ii = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, No = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, fn = Lr.getBCHDigit(ii);
ni.getEncodedBits = function(t, r) {
  for (var n = t.bit << 3 | r, f = n << 10; Lr.getBCHDigit(f) - fn >= 0; )
    f ^= ii << Lr.getBCHDigit(f) - fn;
  return (n << 10 | f) ^ No;
};
var oi = {}, Uo = ie;
function we(e) {
  this.mode = Uo.NUMERIC, this.data = e.toString();
}
we.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
we.prototype.getLength = function() {
  return this.data.length;
};
we.prototype.getBitsLength = function() {
  return we.getBitsLength(this.data.length);
};
we.prototype.write = function(t) {
  var r, n, f;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    n = this.data.substr(r, 3), f = parseInt(n, 10), t.put(f, 10);
  var i = this.data.length - r;
  i > 0 && (n = this.data.substr(r), f = parseInt(n, 10), t.put(f, i * 3 + 1));
};
var Oo = we, Po = ie, gr = [
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
function Me(e) {
  this.mode = Po.ALPHANUMERIC, this.data = e;
}
Me.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
Me.prototype.getLength = function() {
  return this.data.length;
};
Me.prototype.getBitsLength = function() {
  return Me.getBitsLength(this.data.length);
};
Me.prototype.write = function(t) {
  var r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    var n = gr.indexOf(this.data[r]) * 45;
    n += gr.indexOf(this.data[r + 1]), t.put(n, 11);
  }
  this.data.length % 2 && t.put(gr.indexOf(this.data[r]), 6);
};
var Do = Me, Ho = ne, qo = ie;
function xe(e) {
  this.mode = qo.BYTE, this.data = Ho.from(e);
}
xe.getBitsLength = function(t) {
  return t * 8;
};
xe.prototype.getLength = function() {
  return this.data.length;
};
xe.prototype.getBitsLength = function() {
  return xe.getBitsLength(this.data.length);
};
xe.prototype.write = function(e) {
  for (var t = 0, r = this.data.length; t < r; t++)
    e.put(this.data[t], 8);
};
var jo = xe, $o = ie, zo = Ot;
function be(e) {
  this.mode = $o.KANJI, this.data = e;
}
be.getBitsLength = function(t) {
  return t * 13;
};
be.prototype.getLength = function() {
  return this.data.length;
};
be.prototype.getBitsLength = function() {
  return be.getBitsLength(this.data.length);
};
be.prototype.write = function(e) {
  var t;
  for (t = 0; t < this.data.length; t++) {
    var r = zo.toSJIS(this.data[t]);
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
var Zo = be, ai = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(r, n, f) {
      var i = {}, p = {};
      p[n] = 0;
      var h = t.PriorityQueue.make();
      h.push(n, 0);
      for (var v, x, _, R, I, U, N, W, A; !h.empty(); ) {
        v = h.pop(), x = v.value, R = v.cost, I = r[x] || {};
        for (_ in I)
          I.hasOwnProperty(_) && (U = I[_], N = R + U, W = p[_], A = typeof p[_] > "u", (A || W > N) && (p[_] = N, h.push(_, N), i[_] = x));
      }
      if (typeof f < "u" && typeof p[f] > "u") {
        var S = ["Could not find a path from ", n, " to ", f, "."].join("");
        throw new Error(S);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(r, n) {
      for (var f = [], i = n; i; )
        f.push(i), r[i], i = r[i];
      return f.reverse(), f;
    },
    find_path: function(r, n, f) {
      var i = t.single_source_shortest_paths(r, n, f);
      return t.extract_shortest_path_from_predecessor_list(
        i,
        f
      );
    },
    PriorityQueue: {
      make: function(r) {
        var n = t.PriorityQueue, f = {}, i;
        r = r || {};
        for (i in n)
          n.hasOwnProperty(i) && (f[i] = n[i]);
        return f.queue = [], f.sorter = r.sorter || n.default_sorter, f;
      },
      default_sorter: function(r, n) {
        return r.cost - n.cost;
      },
      push: function(r, n) {
        var f = { value: r, cost: n };
        this.queue.push(f), this.queue.sort(this.sorter);
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
})(ai);
(function(e) {
  var t = ie, r = Oo, n = Do, f = jo, i = Zo, p = $t, h = Ot, v = ai.exports;
  function x(S) {
    return unescape(encodeURIComponent(S)).length;
  }
  function _(S, k, B) {
    for (var q = [], J; (J = S.exec(B)) !== null; )
      q.push({
        data: J[0],
        index: J.index,
        mode: k,
        length: J[0].length
      });
    return q;
  }
  function R(S) {
    var k = _(p.NUMERIC, t.NUMERIC, S), B = _(p.ALPHANUMERIC, t.ALPHANUMERIC, S), q, J;
    h.isKanjiModeEnabled() ? (q = _(p.BYTE, t.BYTE, S), J = _(p.KANJI, t.KANJI, S)) : (q = _(p.BYTE_KANJI, t.BYTE, S), J = []);
    var G = k.concat(B, q, J);
    return G.sort(function(it, tt) {
      return it.index - tt.index;
    }).map(function(it) {
      return {
        data: it.data,
        mode: it.mode,
        length: it.length
      };
    });
  }
  function I(S, k) {
    switch (k) {
      case t.NUMERIC:
        return r.getBitsLength(S);
      case t.ALPHANUMERIC:
        return n.getBitsLength(S);
      case t.KANJI:
        return i.getBitsLength(S);
      case t.BYTE:
        return f.getBitsLength(S);
    }
  }
  function U(S) {
    return S.reduce(function(k, B) {
      var q = k.length - 1 >= 0 ? k[k.length - 1] : null;
      return q && q.mode === B.mode ? (k[k.length - 1].data += B.data, k) : (k.push(B), k);
    }, []);
  }
  function N(S) {
    for (var k = [], B = 0; B < S.length; B++) {
      var q = S[B];
      switch (q.mode) {
        case t.NUMERIC:
          k.push([
            q,
            { data: q.data, mode: t.ALPHANUMERIC, length: q.length },
            { data: q.data, mode: t.BYTE, length: q.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          k.push([
            q,
            { data: q.data, mode: t.BYTE, length: q.length }
          ]);
          break;
        case t.KANJI:
          k.push([
            q,
            { data: q.data, mode: t.BYTE, length: x(q.data) }
          ]);
          break;
        case t.BYTE:
          k.push([
            { data: q.data, mode: t.BYTE, length: x(q.data) }
          ]);
      }
    }
    return k;
  }
  function W(S, k) {
    for (var B = {}, q = { start: {} }, J = ["start"], G = 0; G < S.length; G++) {
      for (var it = S[G], tt = [], lt = 0; lt < it.length; lt++) {
        var E = it[lt], o = "" + G + lt;
        tt.push(o), B[o] = { node: E, lastCount: 0 }, q[o] = {};
        for (var l = 0; l < J.length; l++) {
          var d = J[l];
          B[d] && B[d].node.mode === E.mode ? (q[d][o] = I(B[d].lastCount + E.length, E.mode) - I(B[d].lastCount, E.mode), B[d].lastCount += E.length) : (B[d] && (B[d].lastCount = E.length), q[d][o] = I(E.length, E.mode) + 4 + t.getCharCountIndicator(E.mode, k));
        }
      }
      J = tt;
    }
    for (l = 0; l < J.length; l++)
      q[J[l]].end = 0;
    return { map: q, table: B };
  }
  function A(S, k) {
    var B, q = t.getBestModeForData(S);
    if (B = t.from(k, q), B !== t.BYTE && B.bit < q.bit)
      throw new Error('"' + S + '" cannot be encoded with mode ' + t.toString(B) + `.
 Suggested mode is: ` + t.toString(q));
    switch (B === t.KANJI && !h.isKanjiModeEnabled() && (B = t.BYTE), B) {
      case t.NUMERIC:
        return new r(S);
      case t.ALPHANUMERIC:
        return new n(S);
      case t.KANJI:
        return new i(S);
      case t.BYTE:
        return new f(S);
    }
  }
  e.fromArray = function(k) {
    return k.reduce(function(B, q) {
      return typeof q == "string" ? B.push(A(q, null)) : q.data && B.push(A(q.data, q.mode)), B;
    }, []);
  }, e.fromString = function(k, B) {
    for (var q = R(k, h.isKanjiModeEnabled()), J = N(q), G = W(J, B), it = v.find_path(G.map, "start", "end"), tt = [], lt = 1; lt < it.length - 1; lt++)
      tt.push(G.table[it[lt]].node);
    return e.fromArray(U(tt));
  }, e.rawSplit = function(k) {
    return e.fromArray(
      R(k, h.isKanjiModeEnabled())
    );
  };
})(oi);
var un = ne, Qe = Ot, mr = Je, Wo = mo, Ko = yo, Yo = Kn, Jo = Yn, Br = Jn, Sr = Ve, Vo = So, We = ei, Go = ni, Xo = ie, yr = oi, Qo = jr;
function ta(e, t) {
  for (var r = e.size, n = Jo.getPositions(t), f = 0; f < n.length; f++)
    for (var i = n[f][0], p = n[f][1], h = -1; h <= 7; h++)
      if (!(i + h <= -1 || r <= i + h))
        for (var v = -1; v <= 7; v++)
          p + v <= -1 || r <= p + v || (h >= 0 && h <= 6 && (v === 0 || v === 6) || v >= 0 && v <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && v >= 2 && v <= 4 ? e.set(i + h, p + v, !0, !0) : e.set(i + h, p + v, !1, !0));
}
function ea(e) {
  for (var t = e.size, r = 8; r < t - 8; r++) {
    var n = r % 2 === 0;
    e.set(r, 6, n, !0), e.set(6, r, n, !0);
  }
}
function ra(e, t) {
  for (var r = Yo.getPositions(t), n = 0; n < r.length; n++)
    for (var f = r[n][0], i = r[n][1], p = -2; p <= 2; p++)
      for (var h = -2; h <= 2; h++)
        p === -2 || p === 2 || h === -2 || h === 2 || p === 0 && h === 0 ? e.set(f + p, i + h, !0, !0) : e.set(f + p, i + h, !1, !0);
}
function na(e, t) {
  for (var r = e.size, n = We.getEncodedBits(t), f, i, p, h = 0; h < 18; h++)
    f = Math.floor(h / 3), i = h % 3 + r - 8 - 3, p = (n >> h & 1) === 1, e.set(f, i, p, !0), e.set(i, f, p, !0);
}
function _r(e, t, r) {
  var n = e.size, f = Go.getEncodedBits(t, r), i, p;
  for (i = 0; i < 15; i++)
    p = (f >> i & 1) === 1, i < 6 ? e.set(i, 8, p, !0) : i < 8 ? e.set(i + 1, 8, p, !0) : e.set(n - 15 + i, 8, p, !0), i < 8 ? e.set(8, n - i - 1, p, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, p, !0) : e.set(8, 15 - i - 1, p, !0);
  e.set(n - 8, 8, 1, !0);
}
function ia(e, t) {
  for (var r = e.size, n = -1, f = r - 1, i = 7, p = 0, h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (var v = 0; v < 2; v++)
        if (!e.isReserved(f, h - v)) {
          var x = !1;
          p < t.length && (x = (t[p] >>> i & 1) === 1), e.set(f, h - v, x), i--, i === -1 && (p++, i = 7);
        }
      if (f += n, f < 0 || r <= f) {
        f -= n, n = -n;
        break;
      }
    }
}
function oa(e, t, r) {
  var n = new Wo();
  r.forEach(function(x) {
    n.put(x.mode.bit, 4), n.put(x.getLength(), Xo.getCharCountIndicator(x.mode, e)), x.write(n);
  });
  var f = Qe.getSymbolTotalCodewords(e), i = Sr.getTotalCodewordsCount(e, t), p = (f - i) * 8;
  for (n.getLengthInBits() + 4 <= p && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  for (var h = (p - n.getLengthInBits()) / 8, v = 0; v < h; v++)
    n.put(v % 2 ? 17 : 236, 8);
  return aa(n, e, t);
}
function aa(e, t, r) {
  for (var n = Qe.getSymbolTotalCodewords(t), f = Sr.getTotalCodewordsCount(t, r), i = n - f, p = Sr.getBlocksCount(t, r), h = n % p, v = p - h, x = Math.floor(n / p), _ = Math.floor(i / p), R = _ + 1, I = x - _, U = new Vo(I), N = 0, W = new Array(p), A = new Array(p), S = 0, k = un.from(e.buffer), B = 0; B < p; B++) {
    var q = B < v ? _ : R;
    W[B] = k.slice(N, N + q), A[B] = U.encode(W[B]), N += q, S = Math.max(S, q);
  }
  var J = un.alloc(n), G = 0, it, tt;
  for (it = 0; it < S; it++)
    for (tt = 0; tt < p; tt++)
      it < W[tt].length && (J[G++] = W[tt][it]);
  for (it = 0; it < I; it++)
    for (tt = 0; tt < p; tt++)
      J[G++] = A[tt][it];
  return J;
}
function sa(e, t, r, n) {
  var f;
  if (Qo(e))
    f = yr.fromArray(e);
  else if (typeof e == "string") {
    var i = t;
    if (!i) {
      var p = yr.rawSplit(e);
      i = We.getBestVersionForData(
        p,
        r
      );
    }
    f = yr.fromString(e, i || 40);
  } else
    throw new Error("Invalid data");
  var h = We.getBestVersionForData(
    f,
    r
  );
  if (!h)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = h;
  else if (t < h)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + h + `.
`
    );
  var v = oa(t, r, f), x = Qe.getSymbolSize(t), _ = new Ko(x);
  return ta(_, t), ea(_), ra(_, t), _r(_, r, 0), t >= 7 && na(_, t), ia(_, v), isNaN(n) && (n = Br.getBestMask(
    _,
    _r.bind(null, _, r)
  )), Br.applyMask(n, _), _r(_, r, n), {
    modules: _,
    version: t,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: f
  };
}
jn.create = function(t, r) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  var n = mr.M, f, i;
  return typeof r < "u" && (n = mr.from(r.errorCorrectionLevel, mr.M), f = We.from(r.version), i = Br.from(r.maskPattern), r.toSJISFunc && Qe.setToSJISFunction(r.toSJISFunc)), sa(t, f, n, i);
};
var si = {}, Yr = {};
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
    var f = parseInt(n.join(""), 16);
    return {
      r: f >> 24 & 255,
      g: f >> 16 & 255,
      b: f >> 8 & 255,
      a: f & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  e.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    var f = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, p = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : p,
      margin: f,
      color: {
        dark: t(n.color.dark || "#000000ff"),
        light: t(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, e.getScale = function(n, f) {
    return f.width && f.width >= n + f.margin * 2 ? f.width / (n + f.margin * 2) : f.scale;
  }, e.getImageWidth = function(n, f) {
    var i = e.getScale(n, f);
    return Math.floor((n + f.margin * 2) * i);
  }, e.qrToImageData = function(n, f, i) {
    for (var p = f.modules.size, h = f.modules.data, v = e.getScale(p, i), x = Math.floor((p + i.margin * 2) * v), _ = i.margin * v, R = [i.color.light, i.color.dark], I = 0; I < x; I++)
      for (var U = 0; U < x; U++) {
        var N = (I * x + U) * 4, W = i.color.light;
        if (I >= _ && U >= _ && I < x - _ && U < x - _) {
          var A = Math.floor((I - _) / v), S = Math.floor((U - _) / v);
          W = R[h[A * p + S] ? 1 : 0];
        }
        n[N++] = W.r, n[N++] = W.g, n[N++] = W.b, n[N] = W.a;
      }
  };
})(Yr);
(function(e) {
  var t = Yr;
  function r(f, i, p) {
    f.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = p, i.width = p, i.style.height = p + "px", i.style.width = p + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(i, p, h) {
    var v = h, x = p;
    typeof v > "u" && (!p || !p.getContext) && (v = p, p = void 0), p || (x = n()), v = t.getOptions(v);
    var _ = t.getImageWidth(i.modules.size, v), R = x.getContext("2d"), I = R.createImageData(_, _);
    return t.qrToImageData(I.data, i, v), r(R, x, _), R.putImageData(I, 0, 0), x;
  }, e.renderToDataURL = function(i, p, h) {
    var v = h;
    typeof v > "u" && (!p || !p.getContext) && (v = p, p = void 0), v || (v = {});
    var x = e.render(i, p, v), _ = v.type || "image/png", R = v.rendererOpts || {};
    return x.toDataURL(_, R.quality);
  };
})(si);
var fi = {}, fa = Yr;
function hn(e, t) {
  var r = e.a / 255, n = t + '="' + e.hex + '"';
  return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function wr(e, t, r) {
  var n = e + t;
  return typeof r < "u" && (n += " " + r), n;
}
function ua(e, t, r) {
  for (var n = "", f = 0, i = !1, p = 0, h = 0; h < e.length; h++) {
    var v = Math.floor(h % t), x = Math.floor(h / t);
    !v && !i && (i = !0), e[h] ? (p++, h > 0 && v > 0 && e[h - 1] || (n += i ? wr("M", v + r, 0.5 + x + r) : wr("m", f, 0), f = 0, i = !1), v + 1 < t && e[h + 1] || (n += wr("h", p), p = 0)) : f++;
  }
  return n;
}
fi.render = function(t, r, n) {
  var f = fa.getOptions(r), i = t.modules.size, p = t.modules.data, h = i + f.margin * 2, v = f.color.light.a ? "<path " + hn(f.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", x = "<path " + hn(f.color.dark, "stroke") + ' d="' + ua(p, i, f.margin) + '"/>', _ = 'viewBox="0 0 ' + h + " " + h + '"', R = f.width ? 'width="' + f.width + '" height="' + f.width + '" ' : "", I = '<svg xmlns="http://www.w3.org/2000/svg" ' + R + _ + ' shape-rendering="crispEdges">' + v + x + `</svg>
`;
  return typeof n == "function" && n(null, I), I;
};
var ha = io, kr = jn, ui = si, la = fi;
function Jr(e, t, r, n, f) {
  var i = [].slice.call(arguments, 1), p = i.length, h = typeof i[p - 1] == "function";
  if (!h && !ha())
    throw new Error("Callback required as last argument");
  if (h) {
    if (p < 2)
      throw new Error("Too few arguments provided");
    p === 2 ? (f = r, r = t, t = n = void 0) : p === 3 && (t.getContext && typeof f > "u" ? (f = n, n = void 0) : (f = n, n = r, r = t, t = void 0));
  } else {
    if (p < 1)
      throw new Error("Too few arguments provided");
    return p === 1 ? (r = t, t = n = void 0) : p === 2 && !t.getContext && (n = r, r = t, t = void 0), new Promise(function(x, _) {
      try {
        var R = kr.create(r, n);
        x(e(R, t, n));
      } catch (I) {
        _(I);
      }
    });
  }
  try {
    var v = kr.create(r, n);
    f(null, e(v, t, n));
  } catch (x) {
    f(x);
  }
}
Ne.create = kr.create;
Ne.toCanvas = Jr.bind(null, ui.render);
Ne.toDataURL = Jr.bind(null, ui.renderToDataURL);
Ne.toString = Jr.bind(null, function(e, t, r) {
  return la.render(e, r);
});
var ca = function() {
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
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(f) {
      e.addRange(f);
    }), t && t.focus();
  };
}, pa = ca, ln = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, da = "Copy to clipboard: #{key}, Enter";
function va(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function ga(e, t) {
  var r, n, f, i, p, h, v = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    f = pa(), i = document.createRange(), p = document.getSelection(), h = document.createElement("span"), h.textContent = e, h.ariaHidden = "true", h.style.all = "unset", h.style.position = "fixed", h.style.top = 0, h.style.clip = "rect(0, 0, 0, 0)", h.style.whiteSpace = "pre", h.style.webkitUserSelect = "text", h.style.MozUserSelect = "text", h.style.msUserSelect = "text", h.style.userSelect = "text", h.addEventListener("copy", function(_) {
      if (_.stopPropagation(), t.format)
        if (_.preventDefault(), typeof _.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var R = ln[t.format] || ln.default;
          window.clipboardData.setData(R, e);
        } else
          _.clipboardData.clearData(), _.clipboardData.setData(t.format, e);
      t.onCopy && (_.preventDefault(), t.onCopy(_.clipboardData));
    }), document.body.appendChild(h), i.selectNodeContents(h), p.addRange(i);
    var x = document.execCommand("copy");
    if (!x)
      throw new Error("copy command was unsuccessful");
    v = !0;
  } catch (_) {
    r && console.error("unable to copy using execCommand: ", _), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), v = !0;
    } catch (R) {
      r && console.error("unable to copy using clipboardData: ", R), r && console.error("falling back to prompt"), n = va("message" in t ? t.message : da), window.prompt(n, e);
    }
  } finally {
    p && (typeof p.removeRange == "function" ? p.removeRange(i) : p.removeAllRanges()), h && document.body.removeChild(h), f();
  }
  return v;
}
var ma = ga, ut, ke, Vr, hi, cn, Fe = {}, li = [], ya = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function ve(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function ci(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function _a(e, t, r) {
  var n, f = arguments, i = {};
  for (n in t)
    n !== "key" && n !== "ref" && (i[n] = t[n]);
  if (arguments.length > 3)
    for (r = [r], n = 3; n < arguments.length; n++)
      r.push(f[n]);
  if (r != null && (i.children = r), typeof e == "function" && e.defaultProps != null)
    for (n in e.defaultProps)
      i[n] === void 0 && (i[n] = e.defaultProps[n]);
  return Fr(e, i, t && t.key, t && t.ref, null);
}
function Fr(e, t, r, n, f) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: f };
  return f == null && (i.__v = i), ut.vnode && ut.vnode(i), i;
}
function pi(e) {
  return e.children;
}
function Zt(e, t) {
  this.props = e, this.context = t;
}
function Te(e, t) {
  if (t == null)
    return e.__ ? Te(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Te(e) : null;
}
function di(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return di(e);
  }
}
function Mr(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !Vr++ || cn !== ut.debounceRendering) && ((cn = ut.debounceRendering) || hi)(wa);
}
function wa() {
  for (var e; Vr = ke.length; )
    e = ke.sort(function(t, r) {
      return t.__v.__b - r.__v.__b;
    }), ke = [], e.some(function(t) {
      var r, n, f, i, p, h, v;
      t.__d && (h = (p = (r = t).__v).__e, (v = r.__P) && (n = [], (f = ve({}, p)).__v = f, i = gi(v, p, f, r.__n, v.ownerSVGElement !== void 0, null, n, h == null ? Te(p) : h), xa(n, p), i != h && di(p)));
    });
}
function vi(e, t, r, n, f, i, p, h, v) {
  var x, _, R, I, U, N, W, A = r && r.__k || li, S = A.length;
  if (h == Fe && (h = i != null ? i[0] : S ? Te(r, 0) : null), x = 0, t.__k = tr(t.__k, function(k) {
    if (k != null) {
      if (k.__ = t, k.__b = t.__b + 1, (R = A[x]) === null || R && k.key == R.key && k.type === R.type)
        A[x] = void 0;
      else
        for (_ = 0; _ < S; _++) {
          if ((R = A[_]) && k.key == R.key && k.type === R.type) {
            A[_] = void 0;
            break;
          }
          R = null;
        }
      if (I = gi(e, k, R = R || Fe, n, f, i, p, h, v), (_ = k.ref) && R.ref != _ && (W || (W = []), R.ref && W.push(R.ref, null, k), W.push(_, k.__c || I, k)), I != null) {
        var B;
        if (N == null && (N = I), k.__d !== void 0)
          B = k.__d, k.__d = void 0;
        else if (i == R || I != h || I.parentNode == null) {
          t:
            if (h == null || h.parentNode !== e)
              e.appendChild(I), B = null;
            else {
              for (U = h, _ = 0; (U = U.nextSibling) && _ < S; _ += 2)
                if (U == I)
                  break t;
              e.insertBefore(I, h), B = h;
            }
          t.type == "option" && (e.value = "");
        }
        h = B !== void 0 ? B : I.nextSibling, typeof t.type == "function" && (t.__d = h);
      } else
        h && R.__e == h && h.parentNode != e && (h = Te(R));
    }
    return x++, k;
  }), t.__e = N, i != null && typeof t.type != "function")
    for (x = i.length; x--; )
      i[x] != null && ci(i[x]);
  for (x = S; x--; )
    A[x] != null && yi(A[x], A[x]);
  if (W)
    for (x = 0; x < W.length; x++)
      mi(W[x], W[++x], W[++x]);
}
function tr(e, t, r) {
  if (r == null && (r = []), e == null || typeof e == "boolean")
    t && r.push(t(null));
  else if (Array.isArray(e))
    for (var n = 0; n < e.length; n++)
      tr(e[n], t, r);
  else
    r.push(t ? t(typeof e == "string" || typeof e == "number" ? Fr(null, e, null, null, e) : e.__e != null || e.__c != null ? Fr(e.type, e.props, e.key, null, e.__v) : e) : e);
  return r;
}
function Ma(e, t, r, n, f) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in t || Ke(e, i, null, r[i], n);
  for (i in t)
    f && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === t[i] || Ke(e, i, t[i], r[i], n);
}
function pn(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : e[t] = typeof r == "number" && ya.test(t) === !1 ? r + "px" : r == null ? "" : r;
}
function Ke(e, t, r, n, f) {
  var i, p, h, v, x;
  if (f ? t === "className" && (t = "class") : t === "class" && (t = "className"), t === "style")
    if (i = e.style, typeof r == "string")
      i.cssText = r;
    else {
      if (typeof n == "string" && (i.cssText = "", n = null), n)
        for (v in n)
          r && v in r || pn(i, v, "");
      if (r)
        for (x in r)
          n && r[x] === n[x] || pn(i, x, r[x]);
    }
  else
    t[0] === "o" && t[1] === "n" ? (p = t !== (t = t.replace(/Capture$/, "")), h = t.toLowerCase(), t = (h in e ? h : t).slice(2), r ? (n || e.addEventListener(t, dn, p), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, dn, p)) : t !== "list" && t !== "tagName" && t !== "form" && t !== "type" && t !== "size" && !f && t in e ? e[t] = r == null ? "" : r : typeof r != "function" && t !== "dangerouslySetInnerHTML" && (t !== (t = t.replace(/^xlink:?/, "")) ? r == null || r === !1 ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function dn(e) {
  this.l[e.type](ut.event ? ut.event(e) : e);
}
function gi(e, t, r, n, f, i, p, h, v) {
  var x, _, R, I, U, N, W, A, S, k, B = t.type;
  if (t.constructor !== void 0)
    return null;
  (x = ut.__b) && x(t);
  try {
    t:
      if (typeof B == "function") {
        if (A = t.props, S = (x = B.contextType) && n[x.__c], k = x ? S ? S.props.value : x.__ : n, r.__c ? W = (_ = t.__c = r.__c).__ = _.__E : ("prototype" in B && B.prototype.render ? t.__c = _ = new B(A, k) : (t.__c = _ = new Zt(A, k), _.constructor = B, _.render = Ea), S && S.sub(_), _.props = A, _.state || (_.state = {}), _.context = k, _.__n = n, R = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), B.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = ve({}, _.__s)), ve(_.__s, B.getDerivedStateFromProps(A, _.__s))), I = _.props, U = _.state, R)
          B.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (B.getDerivedStateFromProps == null && A !== I && _.componentWillReceiveProps != null && _.componentWillReceiveProps(A, k), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(A, _.__s, k) === !1 || t.__v === r.__v && !_.__) {
            for (_.props = A, _.state = _.__s, t.__v !== r.__v && (_.__d = !1), _.__v = t, t.__e = r.__e, t.__k = r.__k, _.__h.length && p.push(_), x = 0; x < t.__k.length; x++)
              t.__k[x] && (t.__k[x].__ = t);
            break t;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(A, _.__s, k), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(I, U, N);
          });
        }
        _.context = k, _.props = A, _.state = _.__s, (x = ut.__r) && x(t), _.__d = !1, _.__v = t, _.__P = e, x = _.render(_.props, _.state, _.context), t.__k = x != null && x.type == pi && x.key == null ? x.props.children : Array.isArray(x) ? x : [x], _.getChildContext != null && (n = ve(ve({}, n), _.getChildContext())), R || _.getSnapshotBeforeUpdate == null || (N = _.getSnapshotBeforeUpdate(I, U)), vi(e, t, r, n, f, i, p, h, v), _.base = t.__e, _.__h.length && p.push(_), W && (_.__E = _.__ = null), _.__e = !1;
      } else
        i == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = ba(r.__e, t, r, n, f, i, p, v);
    (x = ut.diffed) && x(t);
  } catch (q) {
    t.__v = null, ut.__e(q, t, r);
  }
  return t.__e;
}
function xa(e, t) {
  ut.__c && ut.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      ut.__e(n, r.__v);
    }
  });
}
function ba(e, t, r, n, f, i, p, h) {
  var v, x, _, R, I, U = r.props, N = t.props;
  if (f = t.type === "svg" || f, i != null) {
    for (v = 0; v < i.length; v++)
      if ((x = i[v]) != null && ((t.type === null ? x.nodeType === 3 : x.localName === t.type) || e == x)) {
        e = x, i[v] = null;
        break;
      }
  }
  if (e == null) {
    if (t.type === null)
      return document.createTextNode(N);
    e = f ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, N.is && { is: N.is }), i = null, h = !1;
  }
  if (t.type === null)
    U !== N && e.data != N && (e.data = N);
  else {
    if (i != null && (i = li.slice.call(e.childNodes)), _ = (U = r.props || Fe).dangerouslySetInnerHTML, R = N.dangerouslySetInnerHTML, !h) {
      if (U === Fe)
        for (U = {}, I = 0; I < e.attributes.length; I++)
          U[e.attributes[I].name] = e.attributes[I].value;
      (R || _) && (R && _ && R.__html == _.__html || (e.innerHTML = R && R.__html || ""));
    }
    Ma(e, N, U, f, h), R ? t.__k = [] : (t.__k = t.props.children, vi(e, t, r, n, t.type !== "foreignObject" && f, i, p, Fe, h)), h || ("value" in N && (v = N.value) !== void 0 && v !== e.value && Ke(e, "value", v, U.value, !1), "checked" in N && (v = N.checked) !== void 0 && v !== e.checked && Ke(e, "checked", v, U.checked, !1));
  }
  return e;
}
function mi(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    ut.__e(n, r);
  }
}
function yi(e, t, r) {
  var n, f, i;
  if (ut.unmount && ut.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || mi(n, null, t)), r || typeof e.type == "function" || (r = (f = e.__e) != null), e.__e = e.__d = void 0, (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (p) {
        ut.__e(p, t);
      }
    n.base = n.__P = null;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && yi(n[i], t, r);
  f != null && ci(f);
}
function Ea(e, t, r) {
  return this.constructor(e, r);
}
ut = { __e: function(e, t) {
  for (var r, n; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(e))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(e)), n)
          return Mr(r.__E = r);
      } catch (f) {
        e = f;
      }
  throw e;
} }, Zt.prototype.setState = function(e, t) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = ve({}, this.state), typeof e == "function" && (e = e(r, this.props)), e && ve(r, e), e != null && this.__v && (t && this.__h.push(t), Mr(this));
}, Zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Mr(this));
}, Zt.prototype.render = pi, ke = [], Vr = 0, hi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
var qe, vn, Rr = [], gn = ut.__r, mn = ut.diffed, yn = ut.__c, _n = ut.unmount;
function Aa() {
  Rr.some(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(Tr), e.__H.__h.forEach(Ir), e.__H.__h = [];
      } catch (t) {
        return e.__H.__h = [], ut.__e(t, e.__v), !0;
      }
  }), Rr = [];
}
function Tr(e) {
  e.t && e.t();
}
function Ir(e) {
  var t = e.__();
  typeof t == "function" && (e.t = t);
}
ut.__r = function(e) {
  gn && gn(e), (qe = e.__c).__H && (qe.__H.__h.forEach(Tr), qe.__H.__h.forEach(Ir), qe.__H.__h = []);
}, ut.diffed = function(e) {
  mn && mn(e);
  var t = e.__c;
  if (t) {
    var r = t.__H;
    r && r.__h.length && (Rr.push(t) !== 1 && vn === ut.requestAnimationFrame || ((vn = ut.requestAnimationFrame) || function(n) {
      var f, i = function() {
        clearTimeout(p), cancelAnimationFrame(f), setTimeout(n);
      }, p = setTimeout(i, 100);
      typeof window < "u" && (f = requestAnimationFrame(i));
    })(Aa));
  }
}, ut.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Tr), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ir(n);
      });
    } catch (n) {
      t.some(function(f) {
        f.__h && (f.__h = []);
      }), t = [], ut.__e(n, r.__v);
    }
  }), yn && yn(e, t);
}, ut.unmount = function(e) {
  _n && _n(e);
  var t = e.__c;
  if (t) {
    var r = t.__H;
    if (r)
      try {
        r.__.forEach(function(n) {
          return n.t && n.t();
        });
      } catch (n) {
        ut.__e(n, t.__v);
      }
  }
};
function Ca(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function wn(e, t) {
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
  function n(f) {
    var i;
    return (i = e.call(this, f) || this).isPureReactComponent = !0, i;
  }
  return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.shouldComponentUpdate = function(f, i) {
    return wn(this.props, f) || wn(this.state, i);
  }, n;
})(Zt);
var Mn = ut.__b;
ut.__b = function(e) {
  e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), Mn && Mn(e);
};
var La = ut.__e;
function _i(e) {
  return e && ((e = Ca({}, e)).__c = null, e.__k = e.__k && e.__k.map(_i)), e;
}
function xn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function wi(e) {
  var t = e.__.__c;
  return t && t.u && t.u(e);
}
function je() {
  this.i = null, this.l = null;
}
ut.__e = function(e, t, r) {
  if (e.then) {
    for (var n, f = t; f = f.__; )
      if ((n = f.__c) && n.__c)
        return n.__c(e, t.__c);
  }
  La(e, t, r);
}, (xn.prototype = new Zt()).__c = function(e, t) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(t);
  var n = wi(r.__v), f = !1, i = function() {
    f || (f = !0, n ? n(p) : p());
  };
  t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
    i(), t.__c && t.__c();
  };
  var p = function() {
    var h;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); h = r.o.pop(); )
        h.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), e.then(i, i);
}, xn.prototype.render = function(e, t) {
  return this.__b && (this.__v.__k[0] = _i(this.__b), this.__b = null), [_a(Zt, null, t.u ? null : e.children), t.u && e.fallback];
};
var bn = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    for (r = e.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.i = r = r[2];
    }
};
(je.prototype = new Zt()).u = function(e) {
  var t = this, r = wi(t.__v), n = t.l.get(e);
  return n[0]++, function(f) {
    var i = function() {
      t.props.revealOrder ? (n.push(f), bn(t, e, n)) : f();
    };
    r ? r(i) : i();
  };
}, je.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = tr(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, je.prototype.componentDidUpdate = je.prototype.componentDidMount = function() {
  var e = this;
  e.l.forEach(function(t, r) {
    bn(e, r, t);
  });
};
var En = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
Zt.prototype.isReactComponent = {};
var Ba = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, An = ut.event;
function xr(e, t) {
  e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, { configurable: !1, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(r) {
    this["UNSAFE_" + t] = r;
  } });
}
ut.event = function(e) {
  An && (e = An(e)), e.persist = function() {
  };
  var t = !1, r = !1, n = e.stopPropagation;
  e.stopPropagation = function() {
    n.call(e), t = !0;
  };
  var f = e.preventDefault;
  return e.preventDefault = function() {
    f.call(e), r = !0;
  }, e.isPropagationStopped = function() {
    return t;
  }, e.isDefaultPrevented = function() {
    return r;
  }, e.nativeEvent = e;
};
var Cn = { configurable: !0, get: function() {
  return this.class;
} }, Ln = ut.vnode;
ut.vnode = function(e) {
  e.$$typeof = Ba;
  var t = e.type, r = e.props;
  if (t) {
    if (r.class != r.className && (Cn.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", Cn)), typeof t != "function") {
      var n, f, i;
      for (i in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && t === "select" && (tr(r.children).forEach(function(p) {
        r.value.indexOf(p.props.value) != -1 && (p.props.selected = !0);
      }), delete r.value), r)
        if (n = En.test(i))
          break;
      if (n)
        for (i in f = e.props = {}, r)
          f[En.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = r[i];
    }
    (function(p) {
      var h = e.type, v = e.props;
      if (v && typeof h == "string") {
        var x = {};
        for (var _ in v)
          /^on(Ani|Tra|Tou)/.test(_) && (v[_.toLowerCase()] = v[_], delete v[_]), x[_.toLowerCase()] = _;
        if (x.ondoubleclick && (v.ondblclick = v[x.ondoubleclick], delete v[x.ondoubleclick]), x.onbeforeinput && (v.onbeforeinput = v[x.onbeforeinput], delete v[x.onbeforeinput]), x.onchange && (h === "textarea" || h.toLowerCase() === "input" && !/^fil|che|ra/i.test(v.type))) {
          var R = x.oninput || "oninput";
          v[R] || (v[R] = v[x.onchange], delete v[x.onchange]);
        }
      }
    })(), typeof t == "function" && !t.m && t.prototype && (xr(t.prototype, "componentWillMount"), xr(t.prototype, "componentWillReceiveProps"), xr(t.prototype, "componentWillUpdate"), t.m = !0);
  }
  Ln && Ln(e);
};
function Mi(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
Mi(Ne);
Mi(ma);
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var Sa = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function f(v, x, _) {
    this.fn = v, this.context = x, this.once = _ || !1;
  }
  function i(v, x, _, R, I) {
    if (typeof _ != "function")
      throw new TypeError("The listener must be a function");
    var U = new f(_, R || v, I), N = r ? r + x : x;
    return v._events[N] ? v._events[N].fn ? v._events[N] = [v._events[N], U] : v._events[N].push(U) : (v._events[N] = U, v._eventsCount++), v;
  }
  function p(v, x) {
    --v._eventsCount === 0 ? v._events = new n() : delete v._events[x];
  }
  function h() {
    this._events = new n(), this._eventsCount = 0;
  }
  h.prototype.eventNames = function() {
    var x = [], _, R;
    if (this._eventsCount === 0)
      return x;
    for (R in _ = this._events)
      t.call(_, R) && x.push(r ? R.slice(1) : R);
    return Object.getOwnPropertySymbols ? x.concat(Object.getOwnPropertySymbols(_)) : x;
  }, h.prototype.listeners = function(x) {
    var _ = r ? r + x : x, R = this._events[_];
    if (!R)
      return [];
    if (R.fn)
      return [R.fn];
    for (var I = 0, U = R.length, N = new Array(U); I < U; I++)
      N[I] = R[I].fn;
    return N;
  }, h.prototype.listenerCount = function(x) {
    var _ = r ? r + x : x, R = this._events[_];
    return R ? R.fn ? 1 : R.length : 0;
  }, h.prototype.emit = function(x, _, R, I, U, N) {
    var W = r ? r + x : x;
    if (!this._events[W])
      return !1;
    var A = this._events[W], S = arguments.length, k, B;
    if (A.fn) {
      switch (A.once && this.removeListener(x, A.fn, void 0, !0), S) {
        case 1:
          return A.fn.call(A.context), !0;
        case 2:
          return A.fn.call(A.context, _), !0;
        case 3:
          return A.fn.call(A.context, _, R), !0;
        case 4:
          return A.fn.call(A.context, _, R, I), !0;
        case 5:
          return A.fn.call(A.context, _, R, I, U), !0;
        case 6:
          return A.fn.call(A.context, _, R, I, U, N), !0;
      }
      for (B = 1, k = new Array(S - 1); B < S; B++)
        k[B - 1] = arguments[B];
      A.fn.apply(A.context, k);
    } else {
      var q = A.length, J;
      for (B = 0; B < q; B++)
        switch (A[B].once && this.removeListener(x, A[B].fn, void 0, !0), S) {
          case 1:
            A[B].fn.call(A[B].context);
            break;
          case 2:
            A[B].fn.call(A[B].context, _);
            break;
          case 3:
            A[B].fn.call(A[B].context, _, R);
            break;
          case 4:
            A[B].fn.call(A[B].context, _, R, I);
            break;
          default:
            if (!k)
              for (J = 1, k = new Array(S - 1); J < S; J++)
                k[J - 1] = arguments[J];
            A[B].fn.apply(A[B].context, k);
        }
    }
    return !0;
  }, h.prototype.on = function(x, _, R) {
    return i(this, x, _, R, !1);
  }, h.prototype.once = function(x, _, R) {
    return i(this, x, _, R, !0);
  }, h.prototype.removeListener = function(x, _, R, I) {
    var U = r ? r + x : x;
    if (!this._events[U])
      return this;
    if (!_)
      return p(this, U), this;
    var N = this._events[U];
    if (N.fn)
      N.fn === _ && (!I || N.once) && (!R || N.context === R) && p(this, U);
    else {
      for (var W = 0, A = [], S = N.length; W < S; W++)
        (N[W].fn !== _ || I && !N[W].once || R && N[W].context !== R) && A.push(N[W]);
      A.length ? this._events[U] = A.length === 1 ? A[0] : A : p(this, U);
    }
    return this;
  }, h.prototype.removeAllListeners = function(x) {
    var _;
    return x ? (_ = r ? r + x : x, this._events[_] && p(this, _)) : (this._events = new n(), this._eventsCount = 0), this;
  }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = r, h.EventEmitter = h, e.exports = h;
})(Sa);
var xi = {}, Gr = {}, Ae = {}, Nr = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(r) {
    var n = t && !t.nodeType && t, f = e && !e.nodeType && e, i = typeof Ut == "object" && Ut;
    (i.global === i || i.window === i || i.self === i) && (r = i);
    var p, h = 2147483647, v = 36, x = 1, _ = 26, R = 38, I = 700, U = 72, N = 128, W = "-", A = /^xn--/, S = /[^\x20-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, B = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, q = v - x, J = Math.floor, G = String.fromCharCode, it;
    function tt(g) {
      throw RangeError(B[g]);
    }
    function lt(g, D) {
      for (var O = g.length, Y = []; O--; )
        Y[O] = D(g[O]);
      return Y;
    }
    function E(g, D) {
      var O = g.split("@"), Y = "";
      O.length > 1 && (Y = O[0] + "@", g = O[1]), g = g.replace(k, ".");
      var X = g.split("."), c = lt(X, D).join(".");
      return Y + c;
    }
    function o(g) {
      for (var D = [], O = 0, Y = g.length, X, c; O < Y; )
        X = g.charCodeAt(O++), X >= 55296 && X <= 56319 && O < Y ? (c = g.charCodeAt(O++), (c & 64512) == 56320 ? D.push(((X & 1023) << 10) + (c & 1023) + 65536) : (D.push(X), O--)) : D.push(X);
      return D;
    }
    function l(g) {
      return lt(g, function(D) {
        var O = "";
        return D > 65535 && (D -= 65536, O += G(D >>> 10 & 1023 | 55296), D = 56320 | D & 1023), O += G(D), O;
      }).join("");
    }
    function d(g) {
      return g - 48 < 10 ? g - 22 : g - 65 < 26 ? g - 65 : g - 97 < 26 ? g - 97 : v;
    }
    function m(g, D) {
      return g + 22 + 75 * (g < 26) - ((D != 0) << 5);
    }
    function M(g, D, O) {
      var Y = 0;
      for (g = O ? J(g / I) : g >> 1, g += J(g / D); g > q * _ >> 1; Y += v)
        g = J(g / q);
      return J(Y + (q + 1) * g / (g + R));
    }
    function C(g) {
      var D = [], O = g.length, Y, X = 0, c = N, T = U, j, P, $, Q, K, Z, at, V, rt;
      for (j = g.lastIndexOf(W), j < 0 && (j = 0), P = 0; P < j; ++P)
        g.charCodeAt(P) >= 128 && tt("not-basic"), D.push(g.charCodeAt(P));
      for ($ = j > 0 ? j + 1 : 0; $ < O; ) {
        for (Q = X, K = 1, Z = v; $ >= O && tt("invalid-input"), at = d(g.charCodeAt($++)), (at >= v || at > J((h - X) / K)) && tt("overflow"), X += at * K, V = Z <= T ? x : Z >= T + _ ? _ : Z - T, !(at < V); Z += v)
          rt = v - V, K > J(h / rt) && tt("overflow"), K *= rt;
        Y = D.length + 1, T = M(X - Q, Y, Q == 0), J(X / Y) > h - c && tt("overflow"), c += J(X / Y), X %= Y, D.splice(X++, 0, c);
      }
      return l(D);
    }
    function F(g) {
      var D, O, Y, X, c, T, j, P, $, Q, K, Z = [], at, V, rt, y;
      for (g = o(g), at = g.length, D = N, O = 0, c = U, T = 0; T < at; ++T)
        K = g[T], K < 128 && Z.push(G(K));
      for (Y = X = Z.length, X && Z.push(W); Y < at; ) {
        for (j = h, T = 0; T < at; ++T)
          K = g[T], K >= D && K < j && (j = K);
        for (V = Y + 1, j - D > J((h - O) / V) && tt("overflow"), O += (j - D) * V, D = j, T = 0; T < at; ++T)
          if (K = g[T], K < D && ++O > h && tt("overflow"), K == D) {
            for (P = O, $ = v; Q = $ <= c ? x : $ >= c + _ ? _ : $ - c, !(P < Q); $ += v)
              y = P - Q, rt = v - Q, Z.push(
                G(m(Q + y % rt, 0))
              ), P = J(y / rt);
            Z.push(G(m(P, 0))), c = M(O, V, Y == X), O = 0, ++Y;
          }
        ++O, ++D;
      }
      return Z.join("");
    }
    function w(g) {
      return E(g, function(D) {
        return A.test(D) ? C(D.slice(4).toLowerCase()) : D;
      });
    }
    function a(g) {
      return E(g, function(D) {
        return S.test(D) ? "xn--" + F(D) : D;
      });
    }
    if (p = {
      version: "1.3.2",
      ucs2: {
        decode: o,
        encode: l
      },
      decode: C,
      encode: F,
      toASCII: a,
      toUnicode: w
    }, n && f)
      if (e.exports == n)
        f.exports = p;
      else
        for (it in p)
          p.hasOwnProperty(it) && (n[it] = p[it]);
    else
      r.punycode = p;
  })(Ut);
})(Nr, Nr.exports);
var ka = {
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
}, Ie = {};
function Fa(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var Ra = function(e, t, r, n) {
  t = t || "&", r = r || "=";
  var f = {};
  if (typeof e != "string" || e.length === 0)
    return f;
  var i = /\+/g;
  e = e.split(t);
  var p = 1e3;
  n && typeof n.maxKeys == "number" && (p = n.maxKeys);
  var h = e.length;
  p > 0 && h > p && (h = p);
  for (var v = 0; v < h; ++v) {
    var x = e[v].replace(i, "%20"), _ = x.indexOf(r), R, I, U, N;
    _ >= 0 ? (R = x.substr(0, _), I = x.substr(_ + 1)) : (R = x, I = ""), U = decodeURIComponent(R), N = decodeURIComponent(I), Fa(f, U) ? Array.isArray(f[U]) ? f[U].push(N) : f[U] = [f[U], N] : f[U] = N;
  }
  return f;
}, Le = function(e) {
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
}, Ta = function(e, t, r, n) {
  return t = t || "&", r = r || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(f) {
    var i = encodeURIComponent(Le(f)) + r;
    return Array.isArray(e[f]) ? e[f].map(function(p) {
      return i + encodeURIComponent(Le(p));
    }).join(t) : i + encodeURIComponent(Le(e[f]));
  }).join(t) : n ? encodeURIComponent(Le(n)) + r + encodeURIComponent(Le(e)) : "";
};
Ie.decode = Ie.parse = Ra;
Ie.encode = Ie.stringify = Ta;
var Ia = Nr.exports, qt = ka;
Ae.parse = Oe;
Ae.resolve = za;
Ae.resolveObject = Za;
Ae.format = $a;
Ae.Url = Ht;
function Ht() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Na = /^([a-z0-9.+-]+:)/i, Ua = /:[0-9]*$/, Oa = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Pa = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Da = ["{", "}", "|", "\\", "^", "`"].concat(Pa), Ur = ["'"].concat(Da), Bn = ["%", "/", "?", ";", "#"].concat(Ur), Sn = ["/", "?", "#"], Ha = 255, kn = /^[+a-z0-9A-Z_-]{0,63}$/, qa = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, ja = {
  javascript: !0,
  "javascript:": !0
}, Or = {
  javascript: !0,
  "javascript:": !0
}, ye = {
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
}, Pr = Ie;
function Oe(e, t, r) {
  if (e && qt.isObject(e) && e instanceof Ht)
    return e;
  var n = new Ht();
  return n.parse(e, t, r), n;
}
Ht.prototype.parse = function(e, t, r) {
  if (!qt.isString(e))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
  var n = e.indexOf("?"), f = n !== -1 && n < e.indexOf("#") ? "?" : "#", i = e.split(f), p = /\\/g;
  i[0] = i[0].replace(p, "/"), e = i.join(f);
  var h = e;
  if (h = h.trim(), !r && e.split("#").length === 1) {
    var v = Oa.exec(h);
    if (v)
      return this.path = h, this.href = h, this.pathname = v[1], v[2] ? (this.search = v[2], t ? this.query = Pr.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var x = Na.exec(h);
  if (x) {
    x = x[0];
    var _ = x.toLowerCase();
    this.protocol = _, h = h.substr(x.length);
  }
  if (r || x || h.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var R = h.substr(0, 2) === "//";
    R && !(x && Or[x]) && (h = h.substr(2), this.slashes = !0);
  }
  if (!Or[x] && (R || x && !ye[x])) {
    for (var I = -1, U = 0; U < Sn.length; U++) {
      var N = h.indexOf(Sn[U]);
      N !== -1 && (I === -1 || N < I) && (I = N);
    }
    var W, A;
    I === -1 ? A = h.lastIndexOf("@") : A = h.lastIndexOf("@", I), A !== -1 && (W = h.slice(0, A), h = h.slice(A + 1), this.auth = decodeURIComponent(W)), I = -1;
    for (var U = 0; U < Bn.length; U++) {
      var N = h.indexOf(Bn[U]);
      N !== -1 && (I === -1 || N < I) && (I = N);
    }
    I === -1 && (I = h.length), this.host = h.slice(0, I), h = h.slice(I), this.parseHost(), this.hostname = this.hostname || "";
    var S = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!S)
      for (var k = this.hostname.split(/\./), U = 0, B = k.length; U < B; U++) {
        var q = k[U];
        if (!!q && !q.match(kn)) {
          for (var J = "", G = 0, it = q.length; G < it; G++)
            q.charCodeAt(G) > 127 ? J += "x" : J += q[G];
          if (!J.match(kn)) {
            var tt = k.slice(0, U), lt = k.slice(U + 1), E = q.match(qa);
            E && (tt.push(E[1]), lt.unshift(E[2])), lt.length && (h = "/" + lt.join(".") + h), this.hostname = tt.join(".");
            break;
          }
        }
      }
    this.hostname.length > Ha ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = Ia.toASCII(this.hostname));
    var o = this.port ? ":" + this.port : "", l = this.hostname || "";
    this.host = l + o, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), h[0] !== "/" && (h = "/" + h));
  }
  if (!ja[_])
    for (var U = 0, B = Ur.length; U < B; U++) {
      var d = Ur[U];
      if (h.indexOf(d) !== -1) {
        var m = encodeURIComponent(d);
        m === d && (m = escape(d)), h = h.split(d).join(m);
      }
    }
  var M = h.indexOf("#");
  M !== -1 && (this.hash = h.substr(M), h = h.slice(0, M));
  var C = h.indexOf("?");
  if (C !== -1 ? (this.search = h.substr(C), this.query = h.substr(C + 1), t && (this.query = Pr.parse(this.query)), h = h.slice(0, C)) : t && (this.search = "", this.query = {}), h && (this.pathname = h), ye[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var o = this.pathname || "", F = this.search || "";
    this.path = o + F;
  }
  return this.href = this.format(), this;
};
function $a(e) {
  return qt.isString(e) && (e = Oe(e)), e instanceof Ht ? e.format() : Ht.prototype.format.call(e);
}
Ht.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", f = !1, i = "";
  this.host ? f = e + this.host : this.hostname && (f = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (f += ":" + this.port)), this.query && qt.isObject(this.query) && Object.keys(this.query).length && (i = Pr.stringify(this.query));
  var p = this.search || i && "?" + i || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || ye[t]) && f !== !1 ? (f = "//" + (f || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : f || (f = ""), n && n.charAt(0) !== "#" && (n = "#" + n), p && p.charAt(0) !== "?" && (p = "?" + p), r = r.replace(/[?#]/g, function(h) {
    return encodeURIComponent(h);
  }), p = p.replace("#", "%23"), t + f + r + p + n;
};
function za(e, t) {
  return Oe(e, !1, !0).resolve(t);
}
Ht.prototype.resolve = function(e) {
  return this.resolveObject(Oe(e, !1, !0)).format();
};
function Za(e, t) {
  return e ? Oe(e, !1, !0).resolveObject(t) : t;
}
Ht.prototype.resolveObject = function(e) {
  if (qt.isString(e)) {
    var t = new Ht();
    t.parse(e, !1, !0), e = t;
  }
  for (var r = new Ht(), n = Object.keys(this), f = 0; f < n.length; f++) {
    var i = n[f];
    r[i] = this[i];
  }
  if (r.hash = e.hash, e.href === "")
    return r.href = r.format(), r;
  if (e.slashes && !e.protocol) {
    for (var p = Object.keys(e), h = 0; h < p.length; h++) {
      var v = p[h];
      v !== "protocol" && (r[v] = e[v]);
    }
    return ye[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!ye[e.protocol]) {
      for (var x = Object.keys(e), _ = 0; _ < x.length; _++) {
        var R = x[_];
        r[R] = e[R];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !Or[e.protocol]) {
      for (var B = (e.pathname || "").split("/"); B.length && !(e.host = B.shift()); )
        ;
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), B[0] !== "" && B.unshift(""), B.length < 2 && B.unshift(""), r.pathname = B.join("/");
    } else
      r.pathname = e.pathname;
    if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
      var I = r.pathname || "", U = r.search || "";
      r.path = I + U;
    }
    return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
  }
  var N = r.pathname && r.pathname.charAt(0) === "/", W = e.host || e.pathname && e.pathname.charAt(0) === "/", A = W || N || r.host && e.pathname, S = A, k = r.pathname && r.pathname.split("/") || [], B = e.pathname && e.pathname.split("/") || [], q = r.protocol && !ye[r.protocol];
  if (q && (r.hostname = "", r.port = null, r.host && (k[0] === "" ? k[0] = r.host : k.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (B[0] === "" ? B[0] = e.host : B.unshift(e.host)), e.host = null), A = A && (B[0] === "" || k[0] === "")), W)
    r.host = e.host || e.host === "" ? e.host : r.host, r.hostname = e.hostname || e.hostname === "" ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, k = B;
  else if (B.length)
    k || (k = []), k.pop(), k = k.concat(B), r.search = e.search, r.query = e.query;
  else if (!qt.isNullOrUndefined(e.search)) {
    if (q) {
      r.hostname = r.host = k.shift();
      var J = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      J && (r.auth = J.shift(), r.host = r.hostname = J.shift());
    }
    return r.search = e.search, r.query = e.query, (!qt.isNull(r.pathname) || !qt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!k.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var G = k.slice(-1)[0], it = (r.host || e.host || k.length > 1) && (G === "." || G === "..") || G === "", tt = 0, lt = k.length; lt >= 0; lt--)
    G = k[lt], G === "." ? k.splice(lt, 1) : G === ".." ? (k.splice(lt, 1), tt++) : tt && (k.splice(lt, 1), tt--);
  if (!A && !S)
    for (; tt--; tt)
      k.unshift("..");
  A && k[0] !== "" && (!k[0] || k[0].charAt(0) !== "/") && k.unshift(""), it && k.join("/").substr(-1) !== "/" && k.push("");
  var E = k[0] === "" || k[0] && k[0].charAt(0) === "/";
  if (q) {
    r.hostname = r.host = E ? "" : k.length ? k.shift() : "";
    var J = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    J && (r.auth = J.shift(), r.host = r.hostname = J.shift());
  }
  return A = A || r.host && k.length, A && !E && k.unshift(""), k.length ? r.pathname = k.join("/") : (r.pathname = null, r.path = null), (!qt.isNull(r.pathname) || !qt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
};
Ht.prototype.parseHost = function() {
  var e = this.host, t = Ua.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
var Wa = function() {
  function e(t) {
    this.type = t, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  }
  return e;
}();
Xr.ProgressEvent = Wa;
var Ce = {}, er = Ut && Ut.__extends || function() {
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
Object.defineProperty(Ce, "__esModule", { value: !0 });
var Ka = function(e) {
  er(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ce.SecurityError = Ka;
var Ya = function(e) {
  er(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ce.InvalidStateError = Ya;
var Ja = function(e) {
  er(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ce.NetworkError = Ja;
var Va = function(e) {
  er(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ce.SyntaxError = Va;
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
var Ga = function() {
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
      for (var n = 0, f = this.listeners[r]; n < f.length; n++) {
        var i = f[n];
        i.call(this, t);
      }
    var p = this["on" + r];
    return p && p.call(this, t), !0;
  }, e;
}();
Pe.XMLHttpRequestEventTarget = Ga;
var Qr = {}, Xa = Ut && Ut.__extends || function() {
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
Object.defineProperty(Qr, "__esModule", { value: !0 });
var Qa = Pe, ts = function(e) {
  Xa(t, e);
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
        for (var n = new Buffer(r.byteLength), f = new Uint8Array(r), i = 0; i < r.byteLength; i++)
          n[i] = f[i];
        this._body = n;
      } else if (r.buffer && r.buffer instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), p = r.byteOffset, f = new Uint8Array(r.buffer), i = 0; i < r.byteLength; i++)
          n[i] = f[i + p];
        this._body = n;
      } else
        throw new Error("Unsupported send() data " + r);
  }, t.prototype._finalizeHeaders = function(r, n) {
    this._contentType && !n["content-type"] && (r["Content-Type"] = this._contentType), this._body && (r["Content-Length"] = this._body.length.toString());
  }, t.prototype._startUpload = function(r) {
    this._body && r.write(this._body), r.end();
  }, t;
}(Qa.XMLHttpRequestEventTarget);
Qr.XMLHttpRequestUpload = ts;
var ze = {};
(function() {
  function e(f, i, p, h) {
    return this instanceof e ? (this.domain = f || void 0, this.path = i || "/", this.secure = !!p, this.script = !!h, this) : new e(f, i, p, h);
  }
  e.All = Object.freeze(/* @__PURE__ */ Object.create(null)), ze.CookieAccessInfo = e;
  function t(f, i, p) {
    return f instanceof t ? f : this instanceof t ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(p || "/"), this.explicit_path = !1, this.domain = i || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, f && this.parse(f, i, p), this) : new t(f, i, p);
  }
  ze.Cookie = t, t.prototype.toString = function() {
    var i = [this.name + "=" + this.value];
    return this.expiration_date !== 1 / 0 && i.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && i.push("domain=" + this.domain), this.path && i.push("path=" + this.path), this.secure && i.push("secure"), this.noscript && i.push("httponly"), i.join("; ");
  }, t.prototype.toValueString = function() {
    return this.name + "=" + this.value;
  };
  var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
  t.prototype.parse = function(i, p, h) {
    if (this instanceof t) {
      var v = i.split(";").filter(function(U) {
        return !!U;
      }), x, _ = v[0].match(/([^=]+)=([\s\S]*)/);
      if (!_) {
        console.warn("Invalid cookie header encountered. Header: '" + i + "'");
        return;
      }
      var R = _[1], I = _[2];
      if (typeof R != "string" || R.length === 0 || typeof I != "string") {
        console.warn("Unable to extract values from cookie header. Cookie: '" + i + "'");
        return;
      }
      for (this.name = R, this.value = I, x = 1; x < v.length; x += 1)
        switch (_ = v[x].match(/([^=]+)(?:=([\s\S]*))?/), R = _[1].trim().toLowerCase(), I = _[2], R) {
          case "httponly":
            this.noscript = !0;
            break;
          case "expires":
            this.expiration_date = I ? Number(Date.parse(I)) : 1 / 0;
            break;
          case "path":
            this.path = I ? I.trim() : "", this.explicit_path = !0;
            break;
          case "domain":
            this.domain = I ? I.trim() : "", this.explicit_domain = !!this.domain;
            break;
          case "secure":
            this.secure = !0;
            break;
        }
      return this.explicit_path || (this.path = h || "/"), this.explicit_domain || (this.domain = p), this;
    }
    return new t().parse(i, p, h);
  }, t.prototype.matches = function(i) {
    return i === e.All ? !0 : !(this.noscript && i.script || this.secure && !i.secure || !this.collidesWith(i));
  }, t.prototype.collidesWith = function(i) {
    if (this.path && !i.path || this.domain && !i.domain || this.path && i.path.indexOf(this.path) !== 0 || this.explicit_path && i.path.indexOf(this.path) !== 0)
      return !1;
    var p = i.domain && i.domain.replace(/^[\.]/, ""), h = this.domain && this.domain.replace(/^[\.]/, "");
    if (h === p)
      return !0;
    if (h) {
      if (!this.explicit_domain)
        return !1;
      var v = p.indexOf(h);
      return !(v === -1 || v !== p.length - h.length);
    }
    return !0;
  };
  function n() {
    var f, i, p;
    return this instanceof n ? (f = /* @__PURE__ */ Object.create(null), this.setCookie = function(v, x, _) {
      var R, I;
      if (v = new t(v, x, _), R = v.expiration_date <= Date.now(), f[v.name] !== void 0) {
        for (i = f[v.name], I = 0; I < i.length; I += 1)
          if (p = i[I], p.collidesWith(v))
            return R ? (i.splice(I, 1), i.length === 0 && delete f[v.name], !1) : (i[I] = v, v);
        return R ? !1 : (i.push(v), v);
      }
      return R ? !1 : (f[v.name] = [v], f[v.name]);
    }, this.getCookie = function(v, x) {
      var _, R;
      if (i = f[v], !!i)
        for (R = 0; R < i.length; R += 1) {
          if (_ = i[R], _.expiration_date <= Date.now()) {
            i.length === 0 && delete f[_.name];
            continue;
          }
          if (_.matches(x))
            return _;
        }
    }, this.getCookies = function(v) {
      var x = [], _, R;
      for (_ in f)
        R = this.getCookie(_, v), R && x.push(R);
      return x.toString = function() {
        return x.join(":");
      }, x.toValueString = function() {
        return x.map(function(U) {
          return U.toValueString();
        }).join("; ");
      }, x;
    }, this) : new n();
  }
  ze.CookieJar = n, n.prototype.setCookies = function(i, p, h) {
    i = Array.isArray(i) ? i : i.split(r);
    var v = [], x, _;
    for (i = i.map(function(R) {
      return new t(R, p, h);
    }), x = 0; x < i.length; x += 1)
      _ = i[x], this.setCookie(_, p, h) && v.push(_);
    return v;
  };
})();
var es = Ut && Ut.__extends || function() {
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
}(), rs = Ut && Ut.__assign || Object.assign || function(e) {
  for (var t, r = 1, n = arguments.length; r < n; r++) {
    t = arguments[r];
    for (var f in t)
      Object.prototype.hasOwnProperty.call(t, f) && (e[f] = t[f]);
  }
  return e;
};
Object.defineProperty(Gr, "__esModule", { value: !0 });
var Dr = Ye, bi = Ye, Fn = Ye, br = Ae, Rn = Xr, $e = Ce, ns = Pe, Tn = Qr, In = ze, rr = function(e) {
  es(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.UNSENT = t.UNSENT, n.OPENED = t.OPENED, n.HEADERS_RECEIVED = t.HEADERS_RECEIVED, n.LOADING = t.LOADING, n.DONE = t.DONE, n.onreadystatechange = null, n.readyState = t.UNSENT, n.response = null, n.responseText = "", n.responseType = "", n.status = 0, n.statusText = "", n.timeout = 0, n.upload = new Tn.XMLHttpRequestUpload(), n.responseUrl = "", n.withCredentials = !1, n._method = null, n._url = null, n._sync = !1, n._headers = {}, n._loweredHeaders = {}, n._mimeOverride = null, n._request = null, n._response = null, n._responseParts = null, n._responseHeaders = null, n._aborting = null, n._error = null, n._loadedBytes = 0, n._totalBytes = 0, n._lengthComputable = !1, n._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, n._restrictedHeaders = {
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
    }, n._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, n._userAgent = "Mozilla/5.0 (" + Fn.type() + " " + Fn.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, n._anonymous = r.anon || !1, n;
  }
  return t.prototype.open = function(r, n, f, i, p) {
    if (f === void 0 && (f = !0), r = r.toUpperCase(), this._restrictedMethods[r])
      throw new t.SecurityError("HTTP method " + r + " is not allowed in XHR");
    var h = this._parseUrl(n, i, p);
    this.readyState === t.HEADERS_RECEIVED || (this.readyState, t.LOADING), this._method = r, this._url = h, this._sync = !f, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(t.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
  }, t.prototype.setRequestHeader = function(r, n) {
    if (this.readyState !== t.OPENED)
      throw new t.InvalidStateError("XHR readyState must be OPENED");
    var f = r.toLowerCase();
    if (this._restrictedHeaders[f] || /^sec-/.test(f) || /^proxy-/.test(f)) {
      console.warn('Refused to set unsafe header "' + r + '"');
      return;
    }
    n = n.toString(), this._loweredHeaders[f] != null ? (r = this._loweredHeaders[f], this._headers[r] = this._headers[r] + ", " + n) : (this._loweredHeaders[f] = r, this._headers[r] = n);
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
        var n = br.parse(r.baseUrl, !1, !0);
        if (!n.protocol)
          throw new t.SyntaxError("baseUrl must be an absolute URL");
      }
      this.nodejsBaseUrl = r.baseUrl;
    }
  }, t.nodejsSet = function(r) {
    t.prototype.nodejsSet(r);
  }, t.prototype._setReadyState = function(r) {
    this.readyState = r, this.dispatchEvent(new Rn.ProgressEvent("readystatechange"));
  }, t.prototype._sendFile = function(r) {
    throw new Error("Protocol file: not implemented");
  }, t.prototype._sendHttp = function(r) {
    if (this._sync)
      throw new Error("Synchronous XHR processing not implemented");
    r && (this._method === "GET" || this._method === "HEAD") ? (console.warn("Discarding entity body for " + this._method + " requests"), r = null) : r = r || "", this.upload._setData(r), this._finalizeHeaders(), this._sendHxxpRequest();
  }, t.prototype._sendHxxpRequest = function() {
    var r = this;
    if (this.withCredentials) {
      var n = t.cookieJar.getCookies(In.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === "https:")).toValueString();
      this._headers.cookie = this._headers.cookie2 = n;
    }
    var f = this._url.protocol === "http:" ? [Dr, this.nodejsHttpAgent] : [bi, this.nodejsHttpsAgent], i = f[0], p = f[1], h = i.request.bind(i), v = h({
      hostname: this._url.hostname,
      port: +this._url.port,
      path: this._url.path,
      auth: this._url.auth,
      method: this._method,
      headers: this._headers,
      agent: p
    });
    this._request = v, this.timeout && v.setTimeout(this.timeout, function() {
      return r._onHttpTimeout(v);
    }), v.on("response", function(x) {
      return r._onHttpResponse(v, x);
    }), v.on("error", function(x) {
      return r._onHttpRequestError(v, x);
    }), this.upload._startUpload(v), this._request === v && this._dispatchProgress("loadstart");
  }, t.prototype._finalizeHeaders = function() {
    this._headers = rs({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
  }, t.prototype._onHttpResponse = function(r, n) {
    var f = this;
    if (this._request === r) {
      if (this.withCredentials && (n.headers["set-cookie"] || n.headers["set-cookie2"]) && t.cookieJar.setCookies(n.headers["set-cookie"] || n.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(n.statusCode) >= 0) {
        this._url = this._parseUrl(n.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), this._headers["Content-Type"] != null && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), this._sendHxxpRequest();
        return;
      }
      this._response = n, this._response.on("data", function(p) {
        return f._onHttpResponseData(n, p);
      }), this._response.on("end", function() {
        return f._onHttpResponseEnd(n);
      }), this._response.on("close", function() {
        return f._onHttpResponseClose(n);
      }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = Dr.STATUS_CODES[this.status], this._parseResponseHeaders(n);
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
  }, t.prototype._parseUrl = function(r, n, f) {
    var i = this.nodejsBaseUrl == null ? r : br.resolve(this.nodejsBaseUrl, r), p = br.parse(i, !1, !0);
    p.hash = null;
    var h = (p.auth || "").split(":"), v = h[0], x = h[1];
    return (v || x || n || f) && (p.auth = (n || v || "") + ":" + (f || x || "")), p;
  }, t.prototype._parseResponseHeaders = function(r) {
    this._responseHeaders = {};
    for (var n in r.headers) {
      var f = n.toLowerCase();
      this._privateHeaders[f] || (this._responseHeaders[f] = r.headers[n]);
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
        for (var n = new ArrayBuffer(r.length), f = new Uint8Array(n), i = 0; i < r.length; i++)
          f[i] = r[i];
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
  }, t.ProgressEvent = Rn.ProgressEvent, t.InvalidStateError = $e.InvalidStateError, t.NetworkError = $e.NetworkError, t.SecurityError = $e.SecurityError, t.SyntaxError = $e.SyntaxError, t.XMLHttpRequestUpload = Tn.XMLHttpRequestUpload, t.UNSENT = 0, t.OPENED = 1, t.HEADERS_RECEIVED = 2, t.LOADING = 3, t.DONE = 4, t.cookieJar = In.CookieJar(), t;
}(ns.XMLHttpRequestEventTarget);
Gr.XMLHttpRequest = rr;
rr.prototype.nodejsHttpAgent = Dr.globalAgent;
rr.prototype.nodejsHttpsAgent = bi.globalAgent;
rr.prototype.nodejsBaseUrl = null;
(function(e) {
  function t(n) {
    for (var f in n)
      e.hasOwnProperty(f) || (e[f] = n[f]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Gr);
  var r = Pe;
  e.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
})(xi);
$i("XMLHttpRequest") || xi.XMLHttpRequest;
require("web3-provider-engine");
require("web3-provider-engine/subproviders/cache");
require("web3-provider-engine/subproviders/fixture");
require("web3-provider-engine/subproviders/filters");
require("web3-provider-engine/subproviders/hooked-wallet");
require("web3-provider-engine/subproviders/nonce-tracker");
require("web3-provider-engine/subproviders/subscriptions");
var is = ((e) => (e.Undefined = "", e.Injected = "Injected", e.WalletConnect = "WalletConnect", e))(is || {});
const os = "_btn_1ij5m_5", as = "_active_1ij5m_19", ss = "_can_not_switch_1ij5m_36", Er = {
  btn: os,
  active: as,
  can_not_switch: ss
}, fs = ({
  chain: e,
  loading: t,
  disabled: r,
  isActive: n,
  canSwitchChain: f,
  onClick: i
}) => {
  const {
    name: p,
    chainId: h
  } = e;
  let v = n ? Er.active : Er.btn;
  const x = f && !n;
  let _;
  return x ? _ = () => i() : (v = `${v} ${Er.can_not_switch}`, _ = () => {
  }), /* @__PURE__ */ st(Bi, {
    block: !0,
    className: v,
    disabled: t || r,
    icon: Ci(h, 23, 23),
    onClick: _,
    children: p
  });
}, ys = ({
  chain: e,
  loading: t,
  connectedChainId: r,
  expectedChainId: n,
  canSwitchChain: f,
  onClick: i
}) => {
  const {
    chainId: p
  } = e, h = p === r;
  let v;
  return !h && n && (v = p !== n), /* @__PURE__ */ st(fs, {
    onClick: i,
    loading: t,
    disabled: v,
    isActive: h,
    canSwitchChain: f,
    chain: e
  });
}, us = "_chain_name_8kdgo_1", hs = {
  chain_name: us
}, ls = "_bold_5fnjw_5", Nn = {
  bold: ls
}, Ei = ({
  className: e,
  children: t
}) => {
  const r = e ? `${e} ${Nn.bold}` : Nn.bold;
  return /* @__PURE__ */ st("span", {
    className: r,
    children: t
  });
}, Be = ({
  children: e
}) => /* @__PURE__ */ st(Ei, {
  className: hs.chain_name,
  children: e
}), _s = ({
  account: e,
  chain: t,
  supportedChains: r,
  expectedChainId: n
}) => e ? n ? /* @__PURE__ */ zt(dr, {
  children: ["You connected to ", /* @__PURE__ */ zt(Be, {
    children: [t.name, "."]
  }), /* @__PURE__ */ zt("div", {
    children: ["Please connect to ", /* @__PURE__ */ st(Be, {
      children: Li(n)
    }), " network."]
  })]
}) : r.some((f) => f.name === t.name) ? /* @__PURE__ */ zt(dr, {
  children: ["You are currently using ", /* @__PURE__ */ st(Ei, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ st(Be, {
    children: t.name
  }), " network"]
}) : /* @__PURE__ */ zt(dr, {
  children: ["You connected to ", /* @__PURE__ */ zt(Be, {
    children: [t.name, "."]
  }), /* @__PURE__ */ zt("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ st(Be, {
      children: r.map((f) => f.name).join(", ")
    })]
  })]
}) : null;
export {
  _s as A,
  Ei as B,
  vs as C,
  gs as M,
  ms as W,
  is as a,
  ys as b
};
//# sourceMappingURL=alert.85730218.mjs.map
