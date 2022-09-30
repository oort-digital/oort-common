import { j as ut, a as Fn, I as Rn, g as wi } from "./index.d6d06e32.mjs";
import { Button as Mi } from "antd";
import "ethers";
var Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xi(e) {
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
const es = ({
  account: e,
  onClick: t,
  walletIcon: r,
  walletName: n,
  labelText: f
}) => {
  let i = /* @__PURE__ */ ut("span", {
    className: "cnn",
    children: f
  }), p = "connect-wallet-button";
  return e && (i = /* @__PURE__ */ ut("span", {
    className: "acc",
    children: e.toMasskedAddress()
  }), p = `${p} active`), /* @__PURE__ */ Fn("div", {
    onClick: e ? void 0 : t,
    className: p,
    children: [r, /* @__PURE__ */ ut("span", {
      className: "wallet-name",
      children: n
    }), i]
  });
}, bi = () => /* @__PURE__ */ Fn("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ ut("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ ut("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), rs = /* @__PURE__ */ ut(Rn, {
  component: bi
}), Ei = () => /* @__PURE__ */ ut("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ ut("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), ns = /* @__PURE__ */ ut(Rn, {
  component: Ei
});
const is = ({
  chain: e,
  loading: t,
  isActive: r,
  canSwitchChain: n,
  onClick: f
}) => {
  const {
    name: i,
    chainId: p
  } = e;
  let l = r ? "chain-btn-active" : "chain-btn";
  const g = n && !r;
  let x;
  return g ? x = () => f() : (l = `${l} can-not-switch`, x = () => {
  }), /* @__PURE__ */ ut(Mi, {
    block: !0,
    className: l,
    disabled: t,
    icon: wi(p, 23, 23),
    onClick: x,
    children: i
  });
};
var Ur = {}, vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.getLocalStorage = vt.getLocalStorageOrThrow = vt.getCrypto = vt.getCryptoOrThrow = vt.getLocation = vt.getLocationOrThrow = vt.getNavigator = vt.getNavigatorOrThrow = vt.getDocument = vt.getDocumentOrThrow = vt.getFromWindowOrThrow = Tn = vt.getFromWindow = void 0;
function ve(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
var Tn = vt.getFromWindow = ve;
function be(e) {
  const t = ve(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
vt.getFromWindowOrThrow = be;
function Ai() {
  return be("document");
}
vt.getDocumentOrThrow = Ai;
function Ci() {
  return ve("document");
}
vt.getDocument = Ci;
function Li() {
  return be("navigator");
}
vt.getNavigatorOrThrow = Li;
function Bi() {
  return ve("navigator");
}
vt.getNavigator = Bi;
function Si() {
  return be("location");
}
vt.getLocationOrThrow = Si;
function ki() {
  return ve("location");
}
vt.getLocation = ki;
function Fi() {
  return be("crypto");
}
vt.getCryptoOrThrow = Fi;
function Ri() {
  return ve("crypto");
}
vt.getCrypto = Ri;
function Ti() {
  return be("localStorage");
}
vt.getLocalStorageOrThrow = Ti;
function Ii() {
  return ve("localStorage");
}
vt.getLocalStorage = Ii;
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.getWindowMetadata = void 0;
const Vr = vt;
function Ni() {
  let e, t;
  try {
    e = Vr.getDocumentOrThrow(), t = Vr.getLocationOrThrow();
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
  const p = f(), l = i(), g = t.origin, x = r();
  return {
    description: l,
    url: g,
    icons: x,
    name: p
  };
}
Ur.getWindowMetadata = Ni;
const Ui = Tn;
var Oi = { exports: {} };
const Pi = {}, Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pi
}, Symbol.toStringTag, { value: "Module" })), We = /* @__PURE__ */ xi(Di);
(function(e) {
  (function(t, r) {
    function n(E, o) {
      if (!E)
        throw new Error(o || "Assertion failed");
    }
    function f(E, o) {
      E.super_ = o;
      var h = function() {
      };
      h.prototype = o.prototype, E.prototype = new h(), E.prototype.constructor = E;
    }
    function i(E, o, h) {
      if (i.isBN(E))
        return E;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, E !== null && ((o === "le" || o === "be") && (h = o, o = 10), this._init(E || 0, o || 10, h || "be"));
    }
    typeof t == "object" ? t.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var p;
    try {
      p = We.Buffer;
    } catch {
    }
    i.isBN = function(o) {
      return o instanceof i ? !0 : o !== null && typeof o == "object" && o.constructor.wordSize === i.wordSize && Array.isArray(o.words);
    }, i.max = function(o, h) {
      return o.cmp(h) > 0 ? o : h;
    }, i.min = function(o, h) {
      return o.cmp(h) < 0 ? o : h;
    }, i.prototype._init = function(o, h, d) {
      if (typeof o == "number")
        return this._initNumber(o, h, d);
      if (typeof o == "object")
        return this._initArray(o, h, d);
      h === "hex" && (h = 16), n(h === (h | 0) && h >= 2 && h <= 36), o = o.toString().replace(/\s+/g, "");
      var m = 0;
      o[0] === "-" && m++, h === 16 ? this._parseHex(o, m) : this._parseBase(o, h, m), o[0] === "-" && (this.negative = 1), this.strip(), d === "le" && this._initArray(this.toArray(), h, d);
    }, i.prototype._initNumber = function(o, h, d) {
      o < 0 && (this.negative = 1, o = -o), o < 67108864 ? (this.words = [o & 67108863], this.length = 1) : o < 4503599627370496 ? (this.words = [
        o & 67108863,
        o / 67108864 & 67108863
      ], this.length = 2) : (n(o < 9007199254740992), this.words = [
        o & 67108863,
        o / 67108864 & 67108863,
        1
      ], this.length = 3), d === "le" && this._initArray(this.toArray(), h, d);
    }, i.prototype._initArray = function(o, h, d) {
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
    function l(E, o, h) {
      for (var d = 0, m = Math.min(E.length, h), M = o; M < m; M++) {
        var C = E.charCodeAt(M) - 48;
        d <<= 4, C >= 49 && C <= 54 ? d |= C - 49 + 10 : C >= 17 && C <= 22 ? d |= C - 17 + 10 : d |= C & 15;
      }
      return d;
    }
    i.prototype._parseHex = function(o, h) {
      this.length = Math.ceil((o.length - h) / 6), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        this.words[d] = 0;
      var m, M, C = 0;
      for (d = o.length - 6, m = 0; d >= h; d -= 6)
        M = l(o, d, d + 6), this.words[m] |= M << C & 67108863, this.words[m + 1] |= M >>> 26 - C & 4194303, C += 24, C >= 26 && (C -= 26, m++);
      d + 6 !== h && (M = l(o, h, d + 6), this.words[m] |= M << C & 67108863, this.words[m + 1] |= M >>> 26 - C & 4194303), this.strip();
    };
    function g(E, o, h, d) {
      for (var m = 0, M = Math.min(E.length, h), C = o; C < M; C++) {
        var F = E.charCodeAt(C) - 48;
        m *= d, F >= 49 ? m += F - 49 + 10 : F >= 17 ? m += F - 17 + 10 : m += F;
      }
      return m;
    }
    i.prototype._parseBase = function(o, h, d) {
      this.words = [0], this.length = 1;
      for (var m = 0, M = 1; M <= 67108863; M *= h)
        m++;
      m--, M = M / h | 0;
      for (var C = o.length - d, F = C % m, w = Math.min(C, C - F) + d, a = 0, v = d; v < w; v += m)
        a = g(o, v, v + m, h), this.imuln(M), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
      if (F !== 0) {
        var D = 1;
        for (a = g(o, v, o.length, h), v = 0; v < F; v++)
          D *= h;
        this.imuln(D), this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
      }
    }, i.prototype.copy = function(o) {
      o.words = new Array(this.length);
      for (var h = 0; h < this.length; h++)
        o.words[h] = this.words[h];
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
    i.prototype.toString = function(o, h) {
      o = o || 10, h = h | 0 || 1;
      var d;
      if (o === 16 || o === "hex") {
        d = "";
        for (var m = 0, M = 0, C = 0; C < this.length; C++) {
          var F = this.words[C], w = ((F << m | M) & 16777215).toString(16);
          M = F >>> 24 - m & 16777215, M !== 0 || C !== this.length - 1 ? d = x[6 - w.length] + w + d : d = w + d, m += 2, m >= 26 && (m -= 26, C--);
        }
        for (M !== 0 && (d = M.toString(16) + d); d.length % h !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      if (o === (o | 0) && o >= 2 && o <= 36) {
        var a = _[o], v = R[o];
        d = "";
        var D = this.clone();
        for (D.negative = 0; !D.isZero(); ) {
          var O = D.modn(v).toString(o);
          D = D.idivn(v), D.isZero() ? d = O + d : d = x[a - O.length] + O + d;
        }
        for (this.isZero() && (d = "0" + d); d.length % h !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var o = this.words[0];
      return this.length === 2 ? o += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? o += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -o : o;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(o, h) {
      return n(typeof p < "u"), this.toArrayLike(p, o, h);
    }, i.prototype.toArray = function(o, h) {
      return this.toArrayLike(Array, o, h);
    }, i.prototype.toArrayLike = function(o, h, d) {
      var m = this.byteLength(), M = d || Math.max(1, m);
      n(m <= M, "byte array longer than desired length"), n(M > 0, "Requested array length <= 0"), this.strip();
      var C = h === "le", F = new o(M), w, a, v = this.clone();
      if (C) {
        for (a = 0; !v.isZero(); a++)
          w = v.andln(255), v.iushrn(8), F[a] = w;
        for (; a < M; a++)
          F[a] = 0;
      } else {
        for (a = 0; a < M - m; a++)
          F[a] = 0;
        for (a = 0; !v.isZero(); a++)
          w = v.andln(255), v.iushrn(8), F[M - a - 1] = w;
      }
      return F;
    }, Math.clz32 ? i.prototype._countBits = function(o) {
      return 32 - Math.clz32(o);
    } : i.prototype._countBits = function(o) {
      var h = o, d = 0;
      return h >= 4096 && (d += 13, h >>>= 13), h >= 64 && (d += 7, h >>>= 7), h >= 8 && (d += 4, h >>>= 4), h >= 2 && (d += 2, h >>>= 2), d + h;
    }, i.prototype._zeroBits = function(o) {
      if (o === 0)
        return 26;
      var h = o, d = 0;
      return (h & 8191) === 0 && (d += 13, h >>>= 13), (h & 127) === 0 && (d += 7, h >>>= 7), (h & 15) === 0 && (d += 4, h >>>= 4), (h & 3) === 0 && (d += 2, h >>>= 2), (h & 1) === 0 && d++, d;
    }, i.prototype.bitLength = function() {
      var o = this.words[this.length - 1], h = this._countBits(o);
      return (this.length - 1) * 26 + h;
    };
    function I(E) {
      for (var o = new Array(E.bitLength()), h = 0; h < o.length; h++) {
        var d = h / 26 | 0, m = h % 26;
        o[h] = (E.words[d] & 1 << m) >>> m;
      }
      return o;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var o = 0, h = 0; h < this.length; h++) {
        var d = this._zeroBits(this.words[h]);
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
      for (var h = 0; h < o.length; h++)
        this.words[h] = this.words[h] | o.words[h];
      return this.strip();
    }, i.prototype.ior = function(o) {
      return n((this.negative | o.negative) === 0), this.iuor(o);
    }, i.prototype.or = function(o) {
      return this.length > o.length ? this.clone().ior(o) : o.clone().ior(this);
    }, i.prototype.uor = function(o) {
      return this.length > o.length ? this.clone().iuor(o) : o.clone().iuor(this);
    }, i.prototype.iuand = function(o) {
      var h;
      this.length > o.length ? h = o : h = this;
      for (var d = 0; d < h.length; d++)
        this.words[d] = this.words[d] & o.words[d];
      return this.length = h.length, this.strip();
    }, i.prototype.iand = function(o) {
      return n((this.negative | o.negative) === 0), this.iuand(o);
    }, i.prototype.and = function(o) {
      return this.length > o.length ? this.clone().iand(o) : o.clone().iand(this);
    }, i.prototype.uand = function(o) {
      return this.length > o.length ? this.clone().iuand(o) : o.clone().iuand(this);
    }, i.prototype.iuxor = function(o) {
      var h, d;
      this.length > o.length ? (h = this, d = o) : (h = o, d = this);
      for (var m = 0; m < d.length; m++)
        this.words[m] = h.words[m] ^ d.words[m];
      if (this !== h)
        for (; m < h.length; m++)
          this.words[m] = h.words[m];
      return this.length = h.length, this.strip();
    }, i.prototype.ixor = function(o) {
      return n((this.negative | o.negative) === 0), this.iuxor(o);
    }, i.prototype.xor = function(o) {
      return this.length > o.length ? this.clone().ixor(o) : o.clone().ixor(this);
    }, i.prototype.uxor = function(o) {
      return this.length > o.length ? this.clone().iuxor(o) : o.clone().iuxor(this);
    }, i.prototype.inotn = function(o) {
      n(typeof o == "number" && o >= 0);
      var h = Math.ceil(o / 26) | 0, d = o % 26;
      this._expand(h), d > 0 && h--;
      for (var m = 0; m < h; m++)
        this.words[m] = ~this.words[m] & 67108863;
      return d > 0 && (this.words[m] = ~this.words[m] & 67108863 >> 26 - d), this.strip();
    }, i.prototype.notn = function(o) {
      return this.clone().inotn(o);
    }, i.prototype.setn = function(o, h) {
      n(typeof o == "number" && o >= 0);
      var d = o / 26 | 0, m = o % 26;
      return this._expand(d + 1), h ? this.words[d] = this.words[d] | 1 << m : this.words[d] = this.words[d] & ~(1 << m), this.strip();
    }, i.prototype.iadd = function(o) {
      var h;
      if (this.negative !== 0 && o.negative === 0)
        return this.negative = 0, h = this.isub(o), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && o.negative !== 0)
        return o.negative = 0, h = this.isub(o), o.negative = 1, h._normSign();
      var d, m;
      this.length > o.length ? (d = this, m = o) : (d = o, m = this);
      for (var M = 0, C = 0; C < m.length; C++)
        h = (d.words[C] | 0) + (m.words[C] | 0) + M, this.words[C] = h & 67108863, M = h >>> 26;
      for (; M !== 0 && C < d.length; C++)
        h = (d.words[C] | 0) + M, this.words[C] = h & 67108863, M = h >>> 26;
      if (this.length = d.length, M !== 0)
        this.words[this.length] = M, this.length++;
      else if (d !== this)
        for (; C < d.length; C++)
          this.words[C] = d.words[C];
      return this;
    }, i.prototype.add = function(o) {
      var h;
      return o.negative !== 0 && this.negative === 0 ? (o.negative = 0, h = this.sub(o), o.negative ^= 1, h) : o.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = o.sub(this), this.negative = 1, h) : this.length > o.length ? this.clone().iadd(o) : o.clone().iadd(this);
    }, i.prototype.isub = function(o) {
      if (o.negative !== 0) {
        o.negative = 0;
        var h = this.iadd(o);
        return o.negative = 1, h._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(o), this.negative = 1, this._normSign();
      var d = this.cmp(o);
      if (d === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var m, M;
      d > 0 ? (m = this, M = o) : (m = o, M = this);
      for (var C = 0, F = 0; F < M.length; F++)
        h = (m.words[F] | 0) - (M.words[F] | 0) + C, C = h >> 26, this.words[F] = h & 67108863;
      for (; C !== 0 && F < m.length; F++)
        h = (m.words[F] | 0) + C, C = h >> 26, this.words[F] = h & 67108863;
      if (C === 0 && F < m.length && m !== this)
        for (; F < m.length; F++)
          this.words[F] = m.words[F];
      return this.length = Math.max(this.length, F), m !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(o) {
      return this.clone().isub(o);
    };
    function U(E, o, h) {
      h.negative = o.negative ^ E.negative;
      var d = E.length + o.length | 0;
      h.length = d, d = d - 1 | 0;
      var m = E.words[0] | 0, M = o.words[0] | 0, C = m * M, F = C & 67108863, w = C / 67108864 | 0;
      h.words[0] = F;
      for (var a = 1; a < d; a++) {
        for (var v = w >>> 26, D = w & 67108863, O = Math.min(a, o.length - 1), Y = Math.max(0, a - E.length + 1); Y <= O; Y++) {
          var X = a - Y | 0;
          m = E.words[X] | 0, M = o.words[Y] | 0, C = m * M + D, v += C / 67108864 | 0, D = C & 67108863;
        }
        h.words[a] = D | 0, w = v | 0;
      }
      return w !== 0 ? h.words[a] = w | 0 : h.length--, h.strip();
    }
    var N = function(o, h, d) {
      var m = o.words, M = h.words, C = d.words, F = 0, w, a, v, D = m[0] | 0, O = D & 8191, Y = D >>> 13, X = m[1] | 0, c = X & 8191, T = X >>> 13, j = m[2] | 0, P = j & 8191, $ = j >>> 13, Q = m[3] | 0, K = Q & 8191, Z = Q >>> 13, at = m[4] | 0, V = at & 8191, rt = at >>> 13, y = m[5] | 0, s = y & 8191, u = y >>> 13, b = m[6] | 0, L = b & 8191, H = b >>> 13, z = m[7] | 0, et = z & 8191, nt = z >>> 13, ct = m[8] | 0, st = ct & 8191, ot = ct >>> 13, Pt = m[9] | 0, pt = Pt & 8191, dt = Pt >>> 13, ie = M[0] | 0, gt = ie & 8191, mt = ie >>> 13, oe = M[1] | 0, yt = oe & 8191, _t = oe >>> 13, ae = M[2] | 0, wt = ae & 8191, Mt = ae >>> 13, se = M[3] | 0, xt = se & 8191, bt = se >>> 13, fe = M[4] | 0, Et = fe & 8191, At = fe >>> 13, ue = M[5] | 0, Ct = ue & 8191, Lt = ue >>> 13, he = M[6] | 0, Bt = he & 8191, St = he >>> 13, le = M[7] | 0, kt = le & 8191, Ft = le >>> 13, ce = M[8] | 0, Rt = ce & 8191, Tt = ce >>> 13, pe = M[9] | 0, It = pe & 8191, Nt = pe >>> 13;
      d.negative = o.negative ^ h.negative, d.length = 19, w = Math.imul(O, gt), a = Math.imul(O, mt), a = a + Math.imul(Y, gt) | 0, v = Math.imul(Y, mt);
      var Zt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, w = Math.imul(c, gt), a = Math.imul(c, mt), a = a + Math.imul(T, gt) | 0, v = Math.imul(T, mt), w = w + Math.imul(O, yt) | 0, a = a + Math.imul(O, _t) | 0, a = a + Math.imul(Y, yt) | 0, v = v + Math.imul(Y, _t) | 0;
      var Wt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863, w = Math.imul(P, gt), a = Math.imul(P, mt), a = a + Math.imul($, gt) | 0, v = Math.imul($, mt), w = w + Math.imul(c, yt) | 0, a = a + Math.imul(c, _t) | 0, a = a + Math.imul(T, yt) | 0, v = v + Math.imul(T, _t) | 0, w = w + Math.imul(O, wt) | 0, a = a + Math.imul(O, Mt) | 0, a = a + Math.imul(Y, wt) | 0, v = v + Math.imul(Y, Mt) | 0;
      var Kt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, w = Math.imul(K, gt), a = Math.imul(K, mt), a = a + Math.imul(Z, gt) | 0, v = Math.imul(Z, mt), w = w + Math.imul(P, yt) | 0, a = a + Math.imul(P, _t) | 0, a = a + Math.imul($, yt) | 0, v = v + Math.imul($, _t) | 0, w = w + Math.imul(c, wt) | 0, a = a + Math.imul(c, Mt) | 0, a = a + Math.imul(T, wt) | 0, v = v + Math.imul(T, Mt) | 0, w = w + Math.imul(O, xt) | 0, a = a + Math.imul(O, bt) | 0, a = a + Math.imul(Y, xt) | 0, v = v + Math.imul(Y, bt) | 0;
      var Yt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Yt >>> 26) | 0, Yt &= 67108863, w = Math.imul(V, gt), a = Math.imul(V, mt), a = a + Math.imul(rt, gt) | 0, v = Math.imul(rt, mt), w = w + Math.imul(K, yt) | 0, a = a + Math.imul(K, _t) | 0, a = a + Math.imul(Z, yt) | 0, v = v + Math.imul(Z, _t) | 0, w = w + Math.imul(P, wt) | 0, a = a + Math.imul(P, Mt) | 0, a = a + Math.imul($, wt) | 0, v = v + Math.imul($, Mt) | 0, w = w + Math.imul(c, xt) | 0, a = a + Math.imul(c, bt) | 0, a = a + Math.imul(T, xt) | 0, v = v + Math.imul(T, bt) | 0, w = w + Math.imul(O, Et) | 0, a = a + Math.imul(O, At) | 0, a = a + Math.imul(Y, Et) | 0, v = v + Math.imul(Y, At) | 0;
      var Jt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Jt >>> 26) | 0, Jt &= 67108863, w = Math.imul(s, gt), a = Math.imul(s, mt), a = a + Math.imul(u, gt) | 0, v = Math.imul(u, mt), w = w + Math.imul(V, yt) | 0, a = a + Math.imul(V, _t) | 0, a = a + Math.imul(rt, yt) | 0, v = v + Math.imul(rt, _t) | 0, w = w + Math.imul(K, wt) | 0, a = a + Math.imul(K, Mt) | 0, a = a + Math.imul(Z, wt) | 0, v = v + Math.imul(Z, Mt) | 0, w = w + Math.imul(P, xt) | 0, a = a + Math.imul(P, bt) | 0, a = a + Math.imul($, xt) | 0, v = v + Math.imul($, bt) | 0, w = w + Math.imul(c, Et) | 0, a = a + Math.imul(c, At) | 0, a = a + Math.imul(T, Et) | 0, v = v + Math.imul(T, At) | 0, w = w + Math.imul(O, Ct) | 0, a = a + Math.imul(O, Lt) | 0, a = a + Math.imul(Y, Ct) | 0, v = v + Math.imul(Y, Lt) | 0;
      var Vt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, w = Math.imul(L, gt), a = Math.imul(L, mt), a = a + Math.imul(H, gt) | 0, v = Math.imul(H, mt), w = w + Math.imul(s, yt) | 0, a = a + Math.imul(s, _t) | 0, a = a + Math.imul(u, yt) | 0, v = v + Math.imul(u, _t) | 0, w = w + Math.imul(V, wt) | 0, a = a + Math.imul(V, Mt) | 0, a = a + Math.imul(rt, wt) | 0, v = v + Math.imul(rt, Mt) | 0, w = w + Math.imul(K, xt) | 0, a = a + Math.imul(K, bt) | 0, a = a + Math.imul(Z, xt) | 0, v = v + Math.imul(Z, bt) | 0, w = w + Math.imul(P, Et) | 0, a = a + Math.imul(P, At) | 0, a = a + Math.imul($, Et) | 0, v = v + Math.imul($, At) | 0, w = w + Math.imul(c, Ct) | 0, a = a + Math.imul(c, Lt) | 0, a = a + Math.imul(T, Ct) | 0, v = v + Math.imul(T, Lt) | 0, w = w + Math.imul(O, Bt) | 0, a = a + Math.imul(O, St) | 0, a = a + Math.imul(Y, Bt) | 0, v = v + Math.imul(Y, St) | 0;
      var Gt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, w = Math.imul(et, gt), a = Math.imul(et, mt), a = a + Math.imul(nt, gt) | 0, v = Math.imul(nt, mt), w = w + Math.imul(L, yt) | 0, a = a + Math.imul(L, _t) | 0, a = a + Math.imul(H, yt) | 0, v = v + Math.imul(H, _t) | 0, w = w + Math.imul(s, wt) | 0, a = a + Math.imul(s, Mt) | 0, a = a + Math.imul(u, wt) | 0, v = v + Math.imul(u, Mt) | 0, w = w + Math.imul(V, xt) | 0, a = a + Math.imul(V, bt) | 0, a = a + Math.imul(rt, xt) | 0, v = v + Math.imul(rt, bt) | 0, w = w + Math.imul(K, Et) | 0, a = a + Math.imul(K, At) | 0, a = a + Math.imul(Z, Et) | 0, v = v + Math.imul(Z, At) | 0, w = w + Math.imul(P, Ct) | 0, a = a + Math.imul(P, Lt) | 0, a = a + Math.imul($, Ct) | 0, v = v + Math.imul($, Lt) | 0, w = w + Math.imul(c, Bt) | 0, a = a + Math.imul(c, St) | 0, a = a + Math.imul(T, Bt) | 0, v = v + Math.imul(T, St) | 0, w = w + Math.imul(O, kt) | 0, a = a + Math.imul(O, Ft) | 0, a = a + Math.imul(Y, kt) | 0, v = v + Math.imul(Y, Ft) | 0;
      var Xt = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, w = Math.imul(st, gt), a = Math.imul(st, mt), a = a + Math.imul(ot, gt) | 0, v = Math.imul(ot, mt), w = w + Math.imul(et, yt) | 0, a = a + Math.imul(et, _t) | 0, a = a + Math.imul(nt, yt) | 0, v = v + Math.imul(nt, _t) | 0, w = w + Math.imul(L, wt) | 0, a = a + Math.imul(L, Mt) | 0, a = a + Math.imul(H, wt) | 0, v = v + Math.imul(H, Mt) | 0, w = w + Math.imul(s, xt) | 0, a = a + Math.imul(s, bt) | 0, a = a + Math.imul(u, xt) | 0, v = v + Math.imul(u, bt) | 0, w = w + Math.imul(V, Et) | 0, a = a + Math.imul(V, At) | 0, a = a + Math.imul(rt, Et) | 0, v = v + Math.imul(rt, At) | 0, w = w + Math.imul(K, Ct) | 0, a = a + Math.imul(K, Lt) | 0, a = a + Math.imul(Z, Ct) | 0, v = v + Math.imul(Z, Lt) | 0, w = w + Math.imul(P, Bt) | 0, a = a + Math.imul(P, St) | 0, a = a + Math.imul($, Bt) | 0, v = v + Math.imul($, St) | 0, w = w + Math.imul(c, kt) | 0, a = a + Math.imul(c, Ft) | 0, a = a + Math.imul(T, kt) | 0, v = v + Math.imul(T, Ft) | 0, w = w + Math.imul(O, Rt) | 0, a = a + Math.imul(O, Tt) | 0, a = a + Math.imul(Y, Rt) | 0, v = v + Math.imul(Y, Tt) | 0;
      var er = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, w = Math.imul(pt, gt), a = Math.imul(pt, mt), a = a + Math.imul(dt, gt) | 0, v = Math.imul(dt, mt), w = w + Math.imul(st, yt) | 0, a = a + Math.imul(st, _t) | 0, a = a + Math.imul(ot, yt) | 0, v = v + Math.imul(ot, _t) | 0, w = w + Math.imul(et, wt) | 0, a = a + Math.imul(et, Mt) | 0, a = a + Math.imul(nt, wt) | 0, v = v + Math.imul(nt, Mt) | 0, w = w + Math.imul(L, xt) | 0, a = a + Math.imul(L, bt) | 0, a = a + Math.imul(H, xt) | 0, v = v + Math.imul(H, bt) | 0, w = w + Math.imul(s, Et) | 0, a = a + Math.imul(s, At) | 0, a = a + Math.imul(u, Et) | 0, v = v + Math.imul(u, At) | 0, w = w + Math.imul(V, Ct) | 0, a = a + Math.imul(V, Lt) | 0, a = a + Math.imul(rt, Ct) | 0, v = v + Math.imul(rt, Lt) | 0, w = w + Math.imul(K, Bt) | 0, a = a + Math.imul(K, St) | 0, a = a + Math.imul(Z, Bt) | 0, v = v + Math.imul(Z, St) | 0, w = w + Math.imul(P, kt) | 0, a = a + Math.imul(P, Ft) | 0, a = a + Math.imul($, kt) | 0, v = v + Math.imul($, Ft) | 0, w = w + Math.imul(c, Rt) | 0, a = a + Math.imul(c, Tt) | 0, a = a + Math.imul(T, Rt) | 0, v = v + Math.imul(T, Tt) | 0, w = w + Math.imul(O, It) | 0, a = a + Math.imul(O, Nt) | 0, a = a + Math.imul(Y, It) | 0, v = v + Math.imul(Y, Nt) | 0;
      var rr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, w = Math.imul(pt, yt), a = Math.imul(pt, _t), a = a + Math.imul(dt, yt) | 0, v = Math.imul(dt, _t), w = w + Math.imul(st, wt) | 0, a = a + Math.imul(st, Mt) | 0, a = a + Math.imul(ot, wt) | 0, v = v + Math.imul(ot, Mt) | 0, w = w + Math.imul(et, xt) | 0, a = a + Math.imul(et, bt) | 0, a = a + Math.imul(nt, xt) | 0, v = v + Math.imul(nt, bt) | 0, w = w + Math.imul(L, Et) | 0, a = a + Math.imul(L, At) | 0, a = a + Math.imul(H, Et) | 0, v = v + Math.imul(H, At) | 0, w = w + Math.imul(s, Ct) | 0, a = a + Math.imul(s, Lt) | 0, a = a + Math.imul(u, Ct) | 0, v = v + Math.imul(u, Lt) | 0, w = w + Math.imul(V, Bt) | 0, a = a + Math.imul(V, St) | 0, a = a + Math.imul(rt, Bt) | 0, v = v + Math.imul(rt, St) | 0, w = w + Math.imul(K, kt) | 0, a = a + Math.imul(K, Ft) | 0, a = a + Math.imul(Z, kt) | 0, v = v + Math.imul(Z, Ft) | 0, w = w + Math.imul(P, Rt) | 0, a = a + Math.imul(P, Tt) | 0, a = a + Math.imul($, Rt) | 0, v = v + Math.imul($, Tt) | 0, w = w + Math.imul(c, It) | 0, a = a + Math.imul(c, Nt) | 0, a = a + Math.imul(T, It) | 0, v = v + Math.imul(T, Nt) | 0;
      var nr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, w = Math.imul(pt, wt), a = Math.imul(pt, Mt), a = a + Math.imul(dt, wt) | 0, v = Math.imul(dt, Mt), w = w + Math.imul(st, xt) | 0, a = a + Math.imul(st, bt) | 0, a = a + Math.imul(ot, xt) | 0, v = v + Math.imul(ot, bt) | 0, w = w + Math.imul(et, Et) | 0, a = a + Math.imul(et, At) | 0, a = a + Math.imul(nt, Et) | 0, v = v + Math.imul(nt, At) | 0, w = w + Math.imul(L, Ct) | 0, a = a + Math.imul(L, Lt) | 0, a = a + Math.imul(H, Ct) | 0, v = v + Math.imul(H, Lt) | 0, w = w + Math.imul(s, Bt) | 0, a = a + Math.imul(s, St) | 0, a = a + Math.imul(u, Bt) | 0, v = v + Math.imul(u, St) | 0, w = w + Math.imul(V, kt) | 0, a = a + Math.imul(V, Ft) | 0, a = a + Math.imul(rt, kt) | 0, v = v + Math.imul(rt, Ft) | 0, w = w + Math.imul(K, Rt) | 0, a = a + Math.imul(K, Tt) | 0, a = a + Math.imul(Z, Rt) | 0, v = v + Math.imul(Z, Tt) | 0, w = w + Math.imul(P, It) | 0, a = a + Math.imul(P, Nt) | 0, a = a + Math.imul($, It) | 0, v = v + Math.imul($, Nt) | 0;
      var ir = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, w = Math.imul(pt, xt), a = Math.imul(pt, bt), a = a + Math.imul(dt, xt) | 0, v = Math.imul(dt, bt), w = w + Math.imul(st, Et) | 0, a = a + Math.imul(st, At) | 0, a = a + Math.imul(ot, Et) | 0, v = v + Math.imul(ot, At) | 0, w = w + Math.imul(et, Ct) | 0, a = a + Math.imul(et, Lt) | 0, a = a + Math.imul(nt, Ct) | 0, v = v + Math.imul(nt, Lt) | 0, w = w + Math.imul(L, Bt) | 0, a = a + Math.imul(L, St) | 0, a = a + Math.imul(H, Bt) | 0, v = v + Math.imul(H, St) | 0, w = w + Math.imul(s, kt) | 0, a = a + Math.imul(s, Ft) | 0, a = a + Math.imul(u, kt) | 0, v = v + Math.imul(u, Ft) | 0, w = w + Math.imul(V, Rt) | 0, a = a + Math.imul(V, Tt) | 0, a = a + Math.imul(rt, Rt) | 0, v = v + Math.imul(rt, Tt) | 0, w = w + Math.imul(K, It) | 0, a = a + Math.imul(K, Nt) | 0, a = a + Math.imul(Z, It) | 0, v = v + Math.imul(Z, Nt) | 0;
      var or = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (or >>> 26) | 0, or &= 67108863, w = Math.imul(pt, Et), a = Math.imul(pt, At), a = a + Math.imul(dt, Et) | 0, v = Math.imul(dt, At), w = w + Math.imul(st, Ct) | 0, a = a + Math.imul(st, Lt) | 0, a = a + Math.imul(ot, Ct) | 0, v = v + Math.imul(ot, Lt) | 0, w = w + Math.imul(et, Bt) | 0, a = a + Math.imul(et, St) | 0, a = a + Math.imul(nt, Bt) | 0, v = v + Math.imul(nt, St) | 0, w = w + Math.imul(L, kt) | 0, a = a + Math.imul(L, Ft) | 0, a = a + Math.imul(H, kt) | 0, v = v + Math.imul(H, Ft) | 0, w = w + Math.imul(s, Rt) | 0, a = a + Math.imul(s, Tt) | 0, a = a + Math.imul(u, Rt) | 0, v = v + Math.imul(u, Tt) | 0, w = w + Math.imul(V, It) | 0, a = a + Math.imul(V, Nt) | 0, a = a + Math.imul(rt, It) | 0, v = v + Math.imul(rt, Nt) | 0;
      var ar = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, w = Math.imul(pt, Ct), a = Math.imul(pt, Lt), a = a + Math.imul(dt, Ct) | 0, v = Math.imul(dt, Lt), w = w + Math.imul(st, Bt) | 0, a = a + Math.imul(st, St) | 0, a = a + Math.imul(ot, Bt) | 0, v = v + Math.imul(ot, St) | 0, w = w + Math.imul(et, kt) | 0, a = a + Math.imul(et, Ft) | 0, a = a + Math.imul(nt, kt) | 0, v = v + Math.imul(nt, Ft) | 0, w = w + Math.imul(L, Rt) | 0, a = a + Math.imul(L, Tt) | 0, a = a + Math.imul(H, Rt) | 0, v = v + Math.imul(H, Tt) | 0, w = w + Math.imul(s, It) | 0, a = a + Math.imul(s, Nt) | 0, a = a + Math.imul(u, It) | 0, v = v + Math.imul(u, Nt) | 0;
      var sr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, w = Math.imul(pt, Bt), a = Math.imul(pt, St), a = a + Math.imul(dt, Bt) | 0, v = Math.imul(dt, St), w = w + Math.imul(st, kt) | 0, a = a + Math.imul(st, Ft) | 0, a = a + Math.imul(ot, kt) | 0, v = v + Math.imul(ot, Ft) | 0, w = w + Math.imul(et, Rt) | 0, a = a + Math.imul(et, Tt) | 0, a = a + Math.imul(nt, Rt) | 0, v = v + Math.imul(nt, Tt) | 0, w = w + Math.imul(L, It) | 0, a = a + Math.imul(L, Nt) | 0, a = a + Math.imul(H, It) | 0, v = v + Math.imul(H, Nt) | 0;
      var fr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, w = Math.imul(pt, kt), a = Math.imul(pt, Ft), a = a + Math.imul(dt, kt) | 0, v = Math.imul(dt, Ft), w = w + Math.imul(st, Rt) | 0, a = a + Math.imul(st, Tt) | 0, a = a + Math.imul(ot, Rt) | 0, v = v + Math.imul(ot, Tt) | 0, w = w + Math.imul(et, It) | 0, a = a + Math.imul(et, Nt) | 0, a = a + Math.imul(nt, It) | 0, v = v + Math.imul(nt, Nt) | 0;
      var ur = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, w = Math.imul(pt, Rt), a = Math.imul(pt, Tt), a = a + Math.imul(dt, Rt) | 0, v = Math.imul(dt, Tt), w = w + Math.imul(st, It) | 0, a = a + Math.imul(st, Nt) | 0, a = a + Math.imul(ot, It) | 0, v = v + Math.imul(ot, Nt) | 0;
      var hr = (F + w | 0) + ((a & 8191) << 13) | 0;
      F = (v + (a >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, w = Math.imul(pt, It), a = Math.imul(pt, Nt), a = a + Math.imul(dt, It) | 0, v = Math.imul(dt, Nt);
      var lr = (F + w | 0) + ((a & 8191) << 13) | 0;
      return F = (v + (a >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, C[0] = Zt, C[1] = Wt, C[2] = Kt, C[3] = Yt, C[4] = Jt, C[5] = Vt, C[6] = Gt, C[7] = Xt, C[8] = er, C[9] = rr, C[10] = nr, C[11] = ir, C[12] = or, C[13] = ar, C[14] = sr, C[15] = fr, C[16] = ur, C[17] = hr, C[18] = lr, F !== 0 && (C[19] = F, d.length++), d;
    };
    Math.imul || (N = U);
    function W(E, o, h) {
      h.negative = o.negative ^ E.negative, h.length = E.length + o.length;
      for (var d = 0, m = 0, M = 0; M < h.length - 1; M++) {
        var C = m;
        m = 0;
        for (var F = d & 67108863, w = Math.min(M, o.length - 1), a = Math.max(0, M - E.length + 1); a <= w; a++) {
          var v = M - a, D = E.words[v] | 0, O = o.words[a] | 0, Y = D * O, X = Y & 67108863;
          C = C + (Y / 67108864 | 0) | 0, X = X + F | 0, F = X & 67108863, C = C + (X >>> 26) | 0, m += C >>> 26, C &= 67108863;
        }
        h.words[M] = F, d = C, C = m;
      }
      return d !== 0 ? h.words[M] = d : h.length--, h.strip();
    }
    function A(E, o, h) {
      var d = new S();
      return d.mulp(E, o, h);
    }
    i.prototype.mulTo = function(o, h) {
      var d, m = this.length + o.length;
      return this.length === 10 && o.length === 10 ? d = N(this, o, h) : m < 63 ? d = U(this, o, h) : m < 1024 ? d = W(this, o, h) : d = A(this, o, h), d;
    };
    function S(E, o) {
      this.x = E, this.y = o;
    }
    S.prototype.makeRBT = function(o) {
      for (var h = new Array(o), d = i.prototype._countBits(o) - 1, m = 0; m < o; m++)
        h[m] = this.revBin(m, d, o);
      return h;
    }, S.prototype.revBin = function(o, h, d) {
      if (o === 0 || o === d - 1)
        return o;
      for (var m = 0, M = 0; M < h; M++)
        m |= (o & 1) << h - M - 1, o >>= 1;
      return m;
    }, S.prototype.permute = function(o, h, d, m, M, C) {
      for (var F = 0; F < C; F++)
        m[F] = h[o[F]], M[F] = d[o[F]];
    }, S.prototype.transform = function(o, h, d, m, M, C) {
      this.permute(C, o, h, d, m, M);
      for (var F = 1; F < M; F <<= 1)
        for (var w = F << 1, a = Math.cos(2 * Math.PI / w), v = Math.sin(2 * Math.PI / w), D = 0; D < M; D += w)
          for (var O = a, Y = v, X = 0; X < F; X++) {
            var c = d[D + X], T = m[D + X], j = d[D + X + F], P = m[D + X + F], $ = O * j - Y * P;
            P = O * P + Y * j, j = $, d[D + X] = c + j, m[D + X] = T + P, d[D + X + F] = c - j, m[D + X + F] = T - P, X !== w && ($ = a * O - v * Y, Y = a * Y + v * O, O = $);
          }
    }, S.prototype.guessLen13b = function(o, h) {
      var d = Math.max(h, o) | 1, m = d & 1, M = 0;
      for (d = d / 2 | 0; d; d = d >>> 1)
        M++;
      return 1 << M + 1 + m;
    }, S.prototype.conjugate = function(o, h, d) {
      if (!(d <= 1))
        for (var m = 0; m < d / 2; m++) {
          var M = o[m];
          o[m] = o[d - m - 1], o[d - m - 1] = M, M = h[m], h[m] = -h[d - m - 1], h[d - m - 1] = -M;
        }
    }, S.prototype.normalize13b = function(o, h) {
      for (var d = 0, m = 0; m < h / 2; m++) {
        var M = Math.round(o[2 * m + 1] / h) * 8192 + Math.round(o[2 * m] / h) + d;
        o[m] = M & 67108863, M < 67108864 ? d = 0 : d = M / 67108864 | 0;
      }
      return o;
    }, S.prototype.convert13b = function(o, h, d, m) {
      for (var M = 0, C = 0; C < h; C++)
        M = M + (o[C] | 0), d[2 * C] = M & 8191, M = M >>> 13, d[2 * C + 1] = M & 8191, M = M >>> 13;
      for (C = 2 * h; C < m; ++C)
        d[C] = 0;
      n(M === 0), n((M & -8192) === 0);
    }, S.prototype.stub = function(o) {
      for (var h = new Array(o), d = 0; d < o; d++)
        h[d] = 0;
      return h;
    }, S.prototype.mulp = function(o, h, d) {
      var m = 2 * this.guessLen13b(o.length, h.length), M = this.makeRBT(m), C = this.stub(m), F = new Array(m), w = new Array(m), a = new Array(m), v = new Array(m), D = new Array(m), O = new Array(m), Y = d.words;
      Y.length = m, this.convert13b(o.words, o.length, F, m), this.convert13b(h.words, h.length, v, m), this.transform(F, C, w, a, m, M), this.transform(v, C, D, O, m, M);
      for (var X = 0; X < m; X++) {
        var c = w[X] * D[X] - a[X] * O[X];
        a[X] = w[X] * O[X] + a[X] * D[X], w[X] = c;
      }
      return this.conjugate(w, a, m), this.transform(w, a, Y, C, m, M), this.conjugate(Y, C, m), this.normalize13b(Y, m), d.negative = o.negative ^ h.negative, d.length = o.length + h.length, d.strip();
    }, i.prototype.mul = function(o) {
      var h = new i(null);
      return h.words = new Array(this.length + o.length), this.mulTo(o, h);
    }, i.prototype.mulf = function(o) {
      var h = new i(null);
      return h.words = new Array(this.length + o.length), A(this, o, h);
    }, i.prototype.imul = function(o) {
      return this.clone().mulTo(o, this);
    }, i.prototype.imuln = function(o) {
      n(typeof o == "number"), n(o < 67108864);
      for (var h = 0, d = 0; d < this.length; d++) {
        var m = (this.words[d] | 0) * o, M = (m & 67108863) + (h & 67108863);
        h >>= 26, h += m / 67108864 | 0, h += M >>> 26, this.words[d] = M & 67108863;
      }
      return h !== 0 && (this.words[d] = h, this.length++), this;
    }, i.prototype.muln = function(o) {
      return this.clone().imuln(o);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(o) {
      var h = I(o);
      if (h.length === 0)
        return new i(1);
      for (var d = this, m = 0; m < h.length && h[m] === 0; m++, d = d.sqr())
        ;
      if (++m < h.length)
        for (var M = d.sqr(); m < h.length; m++, M = M.sqr())
          h[m] !== 0 && (d = d.mul(M));
      return d;
    }, i.prototype.iushln = function(o) {
      n(typeof o == "number" && o >= 0);
      var h = o % 26, d = (o - h) / 26, m = 67108863 >>> 26 - h << 26 - h, M;
      if (h !== 0) {
        var C = 0;
        for (M = 0; M < this.length; M++) {
          var F = this.words[M] & m, w = (this.words[M] | 0) - F << h;
          this.words[M] = w | C, C = F >>> 26 - h;
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
    }, i.prototype.iushrn = function(o, h, d) {
      n(typeof o == "number" && o >= 0);
      var m;
      h ? m = (h - h % 26) / 26 : m = 0;
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
      var v = 0;
      for (a = this.length - 1; a >= 0 && (v !== 0 || a >= m); a--) {
        var D = this.words[a] | 0;
        this.words[a] = v << 26 - M | D >>> M, v = D & F;
      }
      return w && v !== 0 && (w.words[w.length++] = v), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(o, h, d) {
      return n(this.negative === 0), this.iushrn(o, h, d);
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
      var h = o % 26, d = (o - h) / 26, m = 1 << h;
      if (this.length <= d)
        return !1;
      var M = this.words[d];
      return !!(M & m);
    }, i.prototype.imaskn = function(o) {
      n(typeof o == "number" && o >= 0);
      var h = o % 26, d = (o - h) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= d)
        return this;
      if (h !== 0 && d++, this.length = Math.min(d, this.length), h !== 0) {
        var m = 67108863 ^ 67108863 >>> h << h;
        this.words[this.length - 1] &= m;
      }
      return this.strip();
    }, i.prototype.maskn = function(o) {
      return this.clone().imaskn(o);
    }, i.prototype.iaddn = function(o) {
      return n(typeof o == "number"), n(o < 67108864), o < 0 ? this.isubn(-o) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < o ? (this.words[0] = o - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(o), this.negative = 1, this) : this._iaddn(o);
    }, i.prototype._iaddn = function(o) {
      this.words[0] += o;
      for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
        this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
      return this.length = Math.max(this.length, h + 1), this;
    }, i.prototype.isubn = function(o) {
      if (n(typeof o == "number"), n(o < 67108864), o < 0)
        return this.iaddn(-o);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(o), this.negative = 1, this;
      if (this.words[0] -= o, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var h = 0; h < this.length && this.words[h] < 0; h++)
          this.words[h] += 67108864, this.words[h + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(o) {
      return this.clone().iaddn(o);
    }, i.prototype.subn = function(o) {
      return this.clone().isubn(o);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(o, h, d) {
      var m = o.length + d, M;
      this._expand(m);
      var C, F = 0;
      for (M = 0; M < o.length; M++) {
        C = (this.words[M + d] | 0) + F;
        var w = (o.words[M] | 0) * h;
        C -= w & 67108863, F = (C >> 26) - (w / 67108864 | 0), this.words[M + d] = C & 67108863;
      }
      for (; M < this.length - d; M++)
        C = (this.words[M + d] | 0) + F, F = C >> 26, this.words[M + d] = C & 67108863;
      if (F === 0)
        return this.strip();
      for (n(F === -1), F = 0, M = 0; M < this.length; M++)
        C = -(this.words[M] | 0) + F, F = C >> 26, this.words[M] = C & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(o, h) {
      var d = this.length - o.length, m = this.clone(), M = o, C = M.words[M.length - 1] | 0, F = this._countBits(C);
      d = 26 - F, d !== 0 && (M = M.ushln(d), m.iushln(d), C = M.words[M.length - 1] | 0);
      var w = m.length - M.length, a;
      if (h !== "mod") {
        a = new i(null), a.length = w + 1, a.words = new Array(a.length);
        for (var v = 0; v < a.length; v++)
          a.words[v] = 0;
      }
      var D = m.clone()._ishlnsubmul(M, 1, w);
      D.negative === 0 && (m = D, a && (a.words[w] = 1));
      for (var O = w - 1; O >= 0; O--) {
        var Y = (m.words[M.length + O] | 0) * 67108864 + (m.words[M.length + O - 1] | 0);
        for (Y = Math.min(Y / C | 0, 67108863), m._ishlnsubmul(M, Y, O); m.negative !== 0; )
          Y--, m.negative = 0, m._ishlnsubmul(M, 1, O), m.isZero() || (m.negative ^= 1);
        a && (a.words[O] = Y);
      }
      return a && a.strip(), m.strip(), h !== "div" && d !== 0 && m.iushrn(d), {
        div: a || null,
        mod: m
      };
    }, i.prototype.divmod = function(o, h, d) {
      if (n(!o.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var m, M, C;
      return this.negative !== 0 && o.negative === 0 ? (C = this.neg().divmod(o, h), h !== "mod" && (m = C.div.neg()), h !== "div" && (M = C.mod.neg(), d && M.negative !== 0 && M.iadd(o)), {
        div: m,
        mod: M
      }) : this.negative === 0 && o.negative !== 0 ? (C = this.divmod(o.neg(), h), h !== "mod" && (m = C.div.neg()), {
        div: m,
        mod: C.mod
      }) : (this.negative & o.negative) !== 0 ? (C = this.neg().divmod(o.neg(), h), h !== "div" && (M = C.mod.neg(), d && M.negative !== 0 && M.isub(o)), {
        div: C.div,
        mod: M
      }) : o.length > this.length || this.cmp(o) < 0 ? {
        div: new i(0),
        mod: this
      } : o.length === 1 ? h === "div" ? {
        div: this.divn(o.words[0]),
        mod: null
      } : h === "mod" ? {
        div: null,
        mod: new i(this.modn(o.words[0]))
      } : {
        div: this.divn(o.words[0]),
        mod: new i(this.modn(o.words[0]))
      } : this._wordDiv(o, h);
    }, i.prototype.div = function(o) {
      return this.divmod(o, "div", !1).div;
    }, i.prototype.mod = function(o) {
      return this.divmod(o, "mod", !1).mod;
    }, i.prototype.umod = function(o) {
      return this.divmod(o, "mod", !0).mod;
    }, i.prototype.divRound = function(o) {
      var h = this.divmod(o);
      if (h.mod.isZero())
        return h.div;
      var d = h.div.negative !== 0 ? h.mod.isub(o) : h.mod, m = o.ushrn(1), M = o.andln(1), C = d.cmp(m);
      return C < 0 || M === 1 && C === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1);
    }, i.prototype.modn = function(o) {
      n(o <= 67108863);
      for (var h = (1 << 26) % o, d = 0, m = this.length - 1; m >= 0; m--)
        d = (h * d + (this.words[m] | 0)) % o;
      return d;
    }, i.prototype.idivn = function(o) {
      n(o <= 67108863);
      for (var h = 0, d = this.length - 1; d >= 0; d--) {
        var m = (this.words[d] | 0) + h * 67108864;
        this.words[d] = m / o | 0, h = m % o;
      }
      return this.strip();
    }, i.prototype.divn = function(o) {
      return this.clone().idivn(o);
    }, i.prototype.egcd = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var h = this, d = o.clone();
      h.negative !== 0 ? h = h.umod(o) : h = h.clone();
      for (var m = new i(1), M = new i(0), C = new i(0), F = new i(1), w = 0; h.isEven() && d.isEven(); )
        h.iushrn(1), d.iushrn(1), ++w;
      for (var a = d.clone(), v = h.clone(); !h.isZero(); ) {
        for (var D = 0, O = 1; (h.words[0] & O) === 0 && D < 26; ++D, O <<= 1)
          ;
        if (D > 0)
          for (h.iushrn(D); D-- > 0; )
            (m.isOdd() || M.isOdd()) && (m.iadd(a), M.isub(v)), m.iushrn(1), M.iushrn(1);
        for (var Y = 0, X = 1; (d.words[0] & X) === 0 && Y < 26; ++Y, X <<= 1)
          ;
        if (Y > 0)
          for (d.iushrn(Y); Y-- > 0; )
            (C.isOdd() || F.isOdd()) && (C.iadd(a), F.isub(v)), C.iushrn(1), F.iushrn(1);
        h.cmp(d) >= 0 ? (h.isub(d), m.isub(C), M.isub(F)) : (d.isub(h), C.isub(m), F.isub(M));
      }
      return {
        a: C,
        b: F,
        gcd: d.iushln(w)
      };
    }, i.prototype._invmp = function(o) {
      n(o.negative === 0), n(!o.isZero());
      var h = this, d = o.clone();
      h.negative !== 0 ? h = h.umod(o) : h = h.clone();
      for (var m = new i(1), M = new i(0), C = d.clone(); h.cmpn(1) > 0 && d.cmpn(1) > 0; ) {
        for (var F = 0, w = 1; (h.words[0] & w) === 0 && F < 26; ++F, w <<= 1)
          ;
        if (F > 0)
          for (h.iushrn(F); F-- > 0; )
            m.isOdd() && m.iadd(C), m.iushrn(1);
        for (var a = 0, v = 1; (d.words[0] & v) === 0 && a < 26; ++a, v <<= 1)
          ;
        if (a > 0)
          for (d.iushrn(a); a-- > 0; )
            M.isOdd() && M.iadd(C), M.iushrn(1);
        h.cmp(d) >= 0 ? (h.isub(d), m.isub(M)) : (d.isub(h), M.isub(m));
      }
      var D;
      return h.cmpn(1) === 0 ? D = m : D = M, D.cmpn(0) < 0 && D.iadd(o), D;
    }, i.prototype.gcd = function(o) {
      if (this.isZero())
        return o.abs();
      if (o.isZero())
        return this.abs();
      var h = this.clone(), d = o.clone();
      h.negative = 0, d.negative = 0;
      for (var m = 0; h.isEven() && d.isEven(); m++)
        h.iushrn(1), d.iushrn(1);
      do {
        for (; h.isEven(); )
          h.iushrn(1);
        for (; d.isEven(); )
          d.iushrn(1);
        var M = h.cmp(d);
        if (M < 0) {
          var C = h;
          h = d, d = C;
        } else if (M === 0 || d.cmpn(1) === 0)
          break;
        h.isub(d);
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
      var h = o % 26, d = (o - h) / 26, m = 1 << h;
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
      var h = o < 0;
      if (this.negative !== 0 && !h)
        return -1;
      if (this.negative === 0 && h)
        return 1;
      this.strip();
      var d;
      if (this.length > 1)
        d = 1;
      else {
        h && (o = -o), n(o <= 67108863, "Number is too big");
        var m = this.words[0] | 0;
        d = m === o ? 0 : m < o ? -1 : 1;
      }
      return this.negative !== 0 ? -d | 0 : d;
    }, i.prototype.cmp = function(o) {
      if (this.negative !== 0 && o.negative === 0)
        return -1;
      if (this.negative === 0 && o.negative !== 0)
        return 1;
      var h = this.ucmp(o);
      return this.negative !== 0 ? -h | 0 : h;
    }, i.prototype.ucmp = function(o) {
      if (this.length > o.length)
        return 1;
      if (this.length < o.length)
        return -1;
      for (var h = 0, d = this.length - 1; d >= 0; d--) {
        var m = this.words[d] | 0, M = o.words[d] | 0;
        if (m !== M) {
          m < M ? h = -1 : m > M && (h = 1);
          break;
        }
      }
      return h;
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
      var h = o, d;
      do
        this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), d = h.bitLength();
      while (d > this.n);
      var m = d < this.n ? -1 : h.ucmp(this.p);
      return m === 0 ? (h.words[0] = 0, h.length = 1) : m > 0 ? h.isub(this.p) : h.strip(), h;
    }, B.prototype.split = function(o, h) {
      o.iushrn(this.n, 0, h);
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
    f(q, B), q.prototype.split = function(o, h) {
      for (var d = 4194303, m = Math.min(o.length, 9), M = 0; M < m; M++)
        h.words[M] = o.words[M];
      if (h.length = m, o.length <= 9) {
        o.words[0] = 0, o.length = 1;
        return;
      }
      var C = o.words[9];
      for (h.words[h.length++] = C & d, M = 10; M < o.length; M++) {
        var F = o.words[M] | 0;
        o.words[M - 10] = (F & d) << 4 | C >>> 22, C = F;
      }
      C >>>= 22, o.words[M - 10] = C, C === 0 && o.length > 10 ? o.length -= 10 : o.length -= 9;
    }, q.prototype.imulK = function(o) {
      o.words[o.length] = 0, o.words[o.length + 1] = 0, o.length += 2;
      for (var h = 0, d = 0; d < o.length; d++) {
        var m = o.words[d] | 0;
        h += m * 977, o.words[d] = h & 67108863, h = m * 64 + (h / 67108864 | 0);
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
      for (var h = 0, d = 0; d < o.length; d++) {
        var m = (o.words[d] | 0) * 19 + h, M = m & 67108863;
        m >>>= 26, o.words[d] = M, h = m;
      }
      return h !== 0 && (o.words[o.length++] = h), o;
    }, i._prime = function(o) {
      if (k[o])
        return k[o];
      var h;
      if (o === "k256")
        h = new q();
      else if (o === "p224")
        h = new J();
      else if (o === "p192")
        h = new G();
      else if (o === "p25519")
        h = new it();
      else
        throw new Error("Unknown prime " + o);
      return k[o] = h, h;
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
    }, tt.prototype._verify2 = function(o, h) {
      n((o.negative | h.negative) === 0, "red works only with positives"), n(
        o.red && o.red === h.red,
        "red works only with red numbers"
      );
    }, tt.prototype.imod = function(o) {
      return this.prime ? this.prime.ireduce(o)._forceRed(this) : o.umod(this.m)._forceRed(this);
    }, tt.prototype.neg = function(o) {
      return o.isZero() ? o.clone() : this.m.sub(o)._forceRed(this);
    }, tt.prototype.add = function(o, h) {
      this._verify2(o, h);
      var d = o.add(h);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
    }, tt.prototype.iadd = function(o, h) {
      this._verify2(o, h);
      var d = o.iadd(h);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d;
    }, tt.prototype.sub = function(o, h) {
      this._verify2(o, h);
      var d = o.sub(h);
      return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
    }, tt.prototype.isub = function(o, h) {
      this._verify2(o, h);
      var d = o.isub(h);
      return d.cmpn(0) < 0 && d.iadd(this.m), d;
    }, tt.prototype.shl = function(o, h) {
      return this._verify1(o), this.imod(o.ushln(h));
    }, tt.prototype.imul = function(o, h) {
      return this._verify2(o, h), this.imod(o.imul(h));
    }, tt.prototype.mul = function(o, h) {
      return this._verify2(o, h), this.imod(o.mul(h));
    }, tt.prototype.isqr = function(o) {
      return this.imul(o, o.clone());
    }, tt.prototype.sqr = function(o) {
      return this.mul(o, o);
    }, tt.prototype.sqrt = function(o) {
      if (o.isZero())
        return o.clone();
      var h = this.m.andln(3);
      if (n(h % 2 === 1), h === 3) {
        var d = this.m.add(new i(1)).iushrn(2);
        return this.pow(o, d);
      }
      for (var m = this.m.subn(1), M = 0; !m.isZero() && m.andln(1) === 0; )
        M++, m.iushrn(1);
      n(!m.isZero());
      var C = new i(1).toRed(this), F = C.redNeg(), w = this.m.subn(1).iushrn(1), a = this.m.bitLength();
      for (a = new i(2 * a * a).toRed(this); this.pow(a, w).cmp(F) !== 0; )
        a.redIAdd(F);
      for (var v = this.pow(a, m), D = this.pow(o, m.addn(1).iushrn(1)), O = this.pow(o, m), Y = M; O.cmp(C) !== 0; ) {
        for (var X = O, c = 0; X.cmp(C) !== 0; c++)
          X = X.redSqr();
        n(c < Y);
        var T = this.pow(v, new i(1).iushln(Y - c - 1));
        D = D.redMul(T), v = T.redSqr(), O = O.redMul(v), Y = c;
      }
      return D;
    }, tt.prototype.invm = function(o) {
      var h = o._invmp(this.m);
      return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h);
    }, tt.prototype.pow = function(o, h) {
      if (h.isZero())
        return new i(1).toRed(this);
      if (h.cmpn(1) === 0)
        return o.clone();
      var d = 4, m = new Array(1 << d);
      m[0] = new i(1).toRed(this), m[1] = o;
      for (var M = 2; M < m.length; M++)
        m[M] = this.mul(m[M - 1], o);
      var C = m[0], F = 0, w = 0, a = h.bitLength() % 26;
      for (a === 0 && (a = 26), M = h.length - 1; M >= 0; M--) {
        for (var v = h.words[M], D = a - 1; D >= 0; D--) {
          var O = v >> D & 1;
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
      var h = o.umod(this.m);
      return h === o ? h.clone() : h;
    }, tt.prototype.convertFrom = function(o) {
      var h = o.clone();
      return h.red = null, h;
    }, i.mont = function(o) {
      return new lt(o);
    };
    function lt(E) {
      tt.call(this, E), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    f(lt, tt), lt.prototype.convertTo = function(o) {
      return this.imod(o.ushln(this.shift));
    }, lt.prototype.convertFrom = function(o) {
      var h = this.imod(o.mul(this.rinv));
      return h.red = null, h;
    }, lt.prototype.imul = function(o, h) {
      if (o.isZero() || h.isZero())
        return o.words[0] = 0, o.length = 1, o;
      var d = o.imul(h), m = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = d.isub(m).iushrn(this.shift), C = M;
      return M.cmp(this.m) >= 0 ? C = M.isub(this.m) : M.cmpn(0) < 0 && (C = M.iadd(this.m)), C._forceRed(this);
    }, lt.prototype.mul = function(o, h) {
      if (o.isZero() || h.isZero())
        return new i(0)._forceRed(this);
      var d = o.mul(h), m = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = d.isub(m).iushrn(this.shift), C = M;
      return M.cmp(this.m) >= 0 ? C = M.isub(this.m) : M.cmpn(0) < 0 && (C = M.iadd(this.m)), C._forceRed(this);
    }, lt.prototype.invm = function(o) {
      var h = this.imod(o._invmp(this.m).mul(this.r2));
      return h._forceRed(this);
    };
  })(e, Ut);
})(Oi);
var Hi = { exports: {} };
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
    var l = !f.JS_SHA3_NO_COMMON_JS && !0 && e.exports, g = !f.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", x = "0123456789abcdef".split(""), _ = [31, 7936, 2031616, 520093696], R = [4, 1024, 262144, 67108864], I = [1, 256, 65536, 16777216], U = [6, 1536, 393216, 100663296], N = [0, 8, 16, 24], W = [
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
    }), g && (f.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(c) {
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
    }, h = function(c, T) {
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
      { name: "kmac", padding: R, bits: S, createMethod: h }
    ], m = {}, M = [], C = 0; C < d.length; ++C)
      for (var F = d[C], w = F.bits, a = 0; a < w.length; ++a) {
        var v = F.name + "_" + w[a];
        if (M.push(v), m[v] = F.createMethod(w[a], F.padding), F.name !== "sha3") {
          var D = F.name + w[a];
          M.push(D), m[D] = m[v];
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
          if (g && c.constructor === ArrayBuffer)
            c = new Uint8Array(c);
          else if (!Array.isArray(c) && (!g || !ArrayBuffer.isView(c)))
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
          if (g && c.constructor === ArrayBuffer)
            c = new Uint8Array(c);
          else if (!Array.isArray(c) && (!g || !ArrayBuffer.isView(c)))
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
      var T, j, P, $, Q, K, Z, at, V, rt, y, s, u, b, L, H, z, et, nt, ct, st, ot, Pt, pt, dt, ie, gt, mt, oe, yt, _t, ae, wt, Mt, se, xt, bt, fe, Et, At, ue, Ct, Lt, he, Bt, St, le, kt, Ft, ce, Rt, Tt, pe, It, Nt, Zt, Wt, Kt, Yt, Jt, Vt, Gt, Xt;
      for (P = 0; P < 48; P += 2)
        $ = c[0] ^ c[10] ^ c[20] ^ c[30] ^ c[40], Q = c[1] ^ c[11] ^ c[21] ^ c[31] ^ c[41], K = c[2] ^ c[12] ^ c[22] ^ c[32] ^ c[42], Z = c[3] ^ c[13] ^ c[23] ^ c[33] ^ c[43], at = c[4] ^ c[14] ^ c[24] ^ c[34] ^ c[44], V = c[5] ^ c[15] ^ c[25] ^ c[35] ^ c[45], rt = c[6] ^ c[16] ^ c[26] ^ c[36] ^ c[46], y = c[7] ^ c[17] ^ c[27] ^ c[37] ^ c[47], s = c[8] ^ c[18] ^ c[28] ^ c[38] ^ c[48], u = c[9] ^ c[19] ^ c[29] ^ c[39] ^ c[49], T = s ^ (K << 1 | Z >>> 31), j = u ^ (Z << 1 | K >>> 31), c[0] ^= T, c[1] ^= j, c[10] ^= T, c[11] ^= j, c[20] ^= T, c[21] ^= j, c[30] ^= T, c[31] ^= j, c[40] ^= T, c[41] ^= j, T = $ ^ (at << 1 | V >>> 31), j = Q ^ (V << 1 | at >>> 31), c[2] ^= T, c[3] ^= j, c[12] ^= T, c[13] ^= j, c[22] ^= T, c[23] ^= j, c[32] ^= T, c[33] ^= j, c[42] ^= T, c[43] ^= j, T = K ^ (rt << 1 | y >>> 31), j = Z ^ (y << 1 | rt >>> 31), c[4] ^= T, c[5] ^= j, c[14] ^= T, c[15] ^= j, c[24] ^= T, c[25] ^= j, c[34] ^= T, c[35] ^= j, c[44] ^= T, c[45] ^= j, T = at ^ (s << 1 | u >>> 31), j = V ^ (u << 1 | s >>> 31), c[6] ^= T, c[7] ^= j, c[16] ^= T, c[17] ^= j, c[26] ^= T, c[27] ^= j, c[36] ^= T, c[37] ^= j, c[46] ^= T, c[47] ^= j, T = rt ^ ($ << 1 | Q >>> 31), j = y ^ (Q << 1 | $ >>> 31), c[8] ^= T, c[9] ^= j, c[18] ^= T, c[19] ^= j, c[28] ^= T, c[29] ^= j, c[38] ^= T, c[39] ^= j, c[48] ^= T, c[49] ^= j, b = c[0], L = c[1], St = c[11] << 4 | c[10] >>> 28, le = c[10] << 4 | c[11] >>> 28, mt = c[20] << 3 | c[21] >>> 29, oe = c[21] << 3 | c[20] >>> 29, Jt = c[31] << 9 | c[30] >>> 23, Vt = c[30] << 9 | c[31] >>> 23, Ct = c[40] << 18 | c[41] >>> 14, Lt = c[41] << 18 | c[40] >>> 14, Mt = c[2] << 1 | c[3] >>> 31, se = c[3] << 1 | c[2] >>> 31, H = c[13] << 12 | c[12] >>> 20, z = c[12] << 12 | c[13] >>> 20, kt = c[22] << 10 | c[23] >>> 22, Ft = c[23] << 10 | c[22] >>> 22, yt = c[33] << 13 | c[32] >>> 19, _t = c[32] << 13 | c[33] >>> 19, Gt = c[42] << 2 | c[43] >>> 30, Xt = c[43] << 2 | c[42] >>> 30, It = c[5] << 30 | c[4] >>> 2, Nt = c[4] << 30 | c[5] >>> 2, xt = c[14] << 6 | c[15] >>> 26, bt = c[15] << 6 | c[14] >>> 26, et = c[25] << 11 | c[24] >>> 21, nt = c[24] << 11 | c[25] >>> 21, ce = c[34] << 15 | c[35] >>> 17, Rt = c[35] << 15 | c[34] >>> 17, ae = c[45] << 29 | c[44] >>> 3, wt = c[44] << 29 | c[45] >>> 3, pt = c[6] << 28 | c[7] >>> 4, dt = c[7] << 28 | c[6] >>> 4, Zt = c[17] << 23 | c[16] >>> 9, Wt = c[16] << 23 | c[17] >>> 9, fe = c[26] << 25 | c[27] >>> 7, Et = c[27] << 25 | c[26] >>> 7, ct = c[36] << 21 | c[37] >>> 11, st = c[37] << 21 | c[36] >>> 11, Tt = c[47] << 24 | c[46] >>> 8, pe = c[46] << 24 | c[47] >>> 8, he = c[8] << 27 | c[9] >>> 5, Bt = c[9] << 27 | c[8] >>> 5, ie = c[18] << 20 | c[19] >>> 12, gt = c[19] << 20 | c[18] >>> 12, Kt = c[29] << 7 | c[28] >>> 25, Yt = c[28] << 7 | c[29] >>> 25, At = c[38] << 8 | c[39] >>> 24, ue = c[39] << 8 | c[38] >>> 24, ot = c[48] << 14 | c[49] >>> 18, Pt = c[49] << 14 | c[48] >>> 18, c[0] = b ^ ~H & et, c[1] = L ^ ~z & nt, c[10] = pt ^ ~ie & mt, c[11] = dt ^ ~gt & oe, c[20] = Mt ^ ~xt & fe, c[21] = se ^ ~bt & Et, c[30] = he ^ ~St & kt, c[31] = Bt ^ ~le & Ft, c[40] = It ^ ~Zt & Kt, c[41] = Nt ^ ~Wt & Yt, c[2] = H ^ ~et & ct, c[3] = z ^ ~nt & st, c[12] = ie ^ ~mt & yt, c[13] = gt ^ ~oe & _t, c[22] = xt ^ ~fe & At, c[23] = bt ^ ~Et & ue, c[32] = St ^ ~kt & ce, c[33] = le ^ ~Ft & Rt, c[42] = Zt ^ ~Kt & Jt, c[43] = Wt ^ ~Yt & Vt, c[4] = et ^ ~ct & ot, c[5] = nt ^ ~st & Pt, c[14] = mt ^ ~yt & ae, c[15] = oe ^ ~_t & wt, c[24] = fe ^ ~At & Ct, c[25] = Et ^ ~ue & Lt, c[34] = kt ^ ~ce & Tt, c[35] = Ft ^ ~Rt & pe, c[44] = Kt ^ ~Jt & Gt, c[45] = Yt ^ ~Vt & Xt, c[6] = ct ^ ~ot & b, c[7] = st ^ ~Pt & L, c[16] = yt ^ ~ae & pt, c[17] = _t ^ ~wt & dt, c[26] = At ^ ~Ct & Mt, c[27] = ue ^ ~Lt & se, c[36] = ce ^ ~Tt & he, c[37] = Rt ^ ~pe & Bt, c[46] = Jt ^ ~Gt & It, c[47] = Vt ^ ~Xt & Nt, c[8] = ot ^ ~b & H, c[9] = Pt ^ ~L & z, c[18] = ae ^ ~pt & ie, c[19] = wt ^ ~dt & gt, c[28] = Ct ^ ~Mt & xt, c[29] = Lt ^ ~se & bt, c[38] = Tt ^ ~he & St, c[39] = pe ^ ~Bt & le, c[48] = Gt ^ ~It & Zt, c[49] = Xt ^ ~Nt & Wt, c[0] ^= W[P], c[1] ^= W[P + 1];
    };
    if (l)
      e.exports = m;
    else
      for (C = 0; C < M.length; ++C)
        f[M[C]] = m[M[C]];
  })();
})(Hi);
var qi = {}, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
te.isBrowserCryptoAvailable = te.getSubtleCrypto = te.getBrowerCrypto = void 0;
function Or() {
  return (Ut == null ? void 0 : Ut.crypto) || (Ut == null ? void 0 : Ut.msCrypto) || {};
}
te.getBrowerCrypto = Or;
function In() {
  const e = Or();
  return e.subtle || e.webkitSubtle;
}
te.getSubtleCrypto = In;
function ji() {
  return !!Or() && !!In();
}
te.isBrowserCryptoAvailable = ji;
var ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.isBrowser = ee.isNode = ee.isReactNative = void 0;
function Nn() {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
}
ee.isReactNative = Nn;
function Un() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
ee.isNode = Un;
function $i() {
  return !Nn() && !Un();
}
ee.isBrowser = $i;
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
  Object.defineProperty(e, "__esModule", { value: !0 }), r(te, e), r(ee, e);
})(qi);
var zi = {}, Zi = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), On = "%[a-f0-9]{2}", Gr = new RegExp(On, "gi"), Xr = new RegExp("(" + On + ")+", "gi");
function Mr(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], Mr(r), Mr(n));
}
function Wi(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(Gr), r = 1; r < t.length; r++)
      e = Mr(t, r).join(""), t = e.match(Gr);
    return e;
  }
}
function Ki(e) {
  for (var t = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, r = Xr.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Wi(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = Xr.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var f = Object.keys(t), i = 0; i < f.length; i++) {
    var p = f[i];
    e = e.replace(new RegExp(p, "g"), t[p]);
  }
  return e;
}
var Yi = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Ki(e);
  }
}, Ji = (e, t) => {
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
  const t = Zi, r = Yi, n = Ji, f = (A) => A == null;
  function i(A) {
    switch (A.arrayFormat) {
      case "index":
        return (S) => (k, B) => {
          const q = k.length;
          return B === void 0 || A.skipNull && B === null || A.skipEmptyString && B === "" ? k : B === null ? [...k, [g(S, A), "[", q, "]"].join("")] : [
            ...k,
            [g(S, A), "[", g(q, A), "]=", g(B, A)].join("")
          ];
        };
      case "bracket":
        return (S) => (k, B) => B === void 0 || A.skipNull && B === null || A.skipEmptyString && B === "" ? k : B === null ? [...k, [g(S, A), "[]"].join("")] : [...k, [g(S, A), "[]=", g(B, A)].join("")];
      case "comma":
      case "separator":
        return (S) => (k, B) => B == null || B.length === 0 ? k : k.length === 0 ? [[g(S, A), "=", g(B, A)].join("")] : [[k, g(B, A)].join(A.arrayFormatSeparator)];
      default:
        return (S) => (k, B) => B === void 0 || A.skipNull && B === null || A.skipEmptyString && B === "" ? k : B === null ? [...k, g(S, A)] : [...k, [g(S, A), "=", g(B, A)].join("")];
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
  function l(A) {
    if (typeof A != "string" || A.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function g(A, S) {
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
    }, S), l(S.arrayFormatSeparator);
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
    }, S), l(S.arrayFormatSeparator);
    const k = (G) => S.skipNull && f(A[G]) || S.skipEmptyString && A[G] === "", B = i(S), q = {};
    for (const G of Object.keys(A))
      k(G) || (q[G] = A[G]);
    const J = Object.keys(q);
    return S.sort !== !1 && J.sort(S.sort), J.map((G) => {
      const it = A[G];
      return it === void 0 ? "" : it === null ? g(G, S) : Array.isArray(it) ? it.reduce(B(G), []).join("&") : g(G, S) + "=" + g(it, S);
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
    return A.fragmentIdentifier && (it = `#${g(A.fragmentIdentifier, S)}`), `${k}${G}${it}`;
  };
})(zi);
typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
const Vi = "abcdefghijklmnopqrstuvwxyz0123456789";
Vi.split("").map((e) => `https://${e}.bridge.walletconnect.org`);
var Te = {}, Gi = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Pn = {}, re = {}, Xi = {}.toString, Pr = Array.isArray || function(e) {
  return Xi.call(e) == "[object Array]";
}, Qi = Pr;
function to() {
  try {
    var e = new Uint8Array(1);
    return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, e.foo() === 42;
  } catch {
    return !1;
  }
}
ht.TYPED_ARRAY_SUPPORT = to();
var Qr = ht.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function ht(e, t, r) {
  return !ht.TYPED_ARRAY_SUPPORT && !(this instanceof ht) ? new ht(e, t, r) : typeof e == "number" ? Dn(this, e) : so(this, e, t, r);
}
ht.TYPED_ARRAY_SUPPORT && (ht.prototype.__proto__ = Uint8Array.prototype, ht.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ht[Symbol.species] === ht && Object.defineProperty(ht, Symbol.species, {
  value: null,
  configurable: !0,
  enumerable: !1,
  writable: !1
}));
function Dr(e) {
  if (e >= Qr)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Qr.toString(16) + " bytes");
  return e | 0;
}
function eo(e) {
  return e !== e;
}
function ye(e, t) {
  var r;
  return ht.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t), r.__proto__ = ht.prototype) : (r = e, r === null && (r = new ht(t)), r.length = t), r;
}
function Dn(e, t) {
  var r = ye(e, t < 0 ? 0 : Dr(t) | 0);
  if (!ht.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < t; ++n)
      r[n] = 0;
  return r;
}
function ro(e, t) {
  var r = qn(t) | 0, n = ye(e, r), f = n.write(t);
  return f !== r && (n = n.slice(0, f)), n;
}
function xr(e, t) {
  for (var r = t.length < 0 ? 0 : Dr(t.length) | 0, n = ye(e, r), f = 0; f < r; f += 1)
    n[f] = t[f] & 255;
  return n;
}
function no(e, t, r, n) {
  if (r < 0 || t.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (t.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  var f;
  return r === void 0 && n === void 0 ? f = new Uint8Array(t) : n === void 0 ? f = new Uint8Array(t, r) : f = new Uint8Array(t, r, n), ht.TYPED_ARRAY_SUPPORT ? f.__proto__ = ht.prototype : f = xr(e, f), f;
}
function io(e, t) {
  if (ht.isBuffer(t)) {
    var r = Dr(t.length) | 0, n = ye(e, r);
    return n.length === 0 || t.copy(n, 0, 0, r), n;
  }
  if (t) {
    if (typeof ArrayBuffer < "u" && t.buffer instanceof ArrayBuffer || "length" in t)
      return typeof t.length != "number" || eo(t.length) ? ye(e, 0) : xr(e, t);
    if (t.type === "Buffer" && Array.isArray(t.data))
      return xr(e, t.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Hn(e, t) {
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
function qn(e) {
  if (ht.isBuffer(e))
    return e.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
    return e.byteLength;
  typeof e != "string" && (e = "" + e);
  var t = e.length;
  return t === 0 ? 0 : Hn(e).length;
}
function oo(e, t, r, n) {
  for (var f = 0; f < n && !(f + r >= t.length || f >= e.length); ++f)
    t[f + r] = e[f];
  return f;
}
function ao(e, t, r, n) {
  return oo(Hn(t, e.length - r), e, r, n);
}
function so(e, t, r, n) {
  if (typeof t == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer ? no(e, t, r, n) : typeof t == "string" ? ro(e, t) : io(e, t);
}
ht.prototype.write = function(t, r, n) {
  r === void 0 ? (n = this.length, r = 0) : n === void 0 && typeof r == "string" ? (n = this.length, r = 0) : isFinite(r) && (r = r | 0, isFinite(n) ? n = n | 0 : n = void 0);
  var f = this.length - r;
  if ((n === void 0 || n > f) && (n = f), t.length > 0 && (n < 0 || r < 0) || r > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return ao(this, t, r, n);
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
    var p = ht.isBuffer(t) ? t : new ht(t), l = p.length;
    for (i = 0; i < n - r; ++i)
      this[i + r] = p[i % l];
  }
  return this;
};
ht.concat = function(t, r) {
  if (!Qi(t))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (t.length === 0)
    return ye(null, 0);
  var n;
  if (r === void 0)
    for (r = 0, n = 0; n < t.length; ++n)
      r += t[n].length;
  var f = Dn(null, r), i = 0;
  for (n = 0; n < t.length; ++n) {
    var p = t[n];
    if (!ht.isBuffer(p))
      throw new TypeError('"list" argument must be an Array of Buffers');
    p.copy(f, i), i += p.length;
  }
  return f;
};
ht.byteLength = qn;
ht.prototype._isBuffer = !0;
ht.isBuffer = function(t) {
  return !!(t != null && t._isBuffer);
};
re.alloc = function(e) {
  var t = new ht(e);
  return t.fill(0), t;
};
re.from = function(e) {
  return new ht(e);
};
var Ot = {}, Hr, fo = [
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
  return fo[t];
};
Ot.getBCHDigit = function(e) {
  for (var t = 0; e !== 0; )
    t++, e >>>= 1;
  return t;
};
Ot.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Hr = t;
};
Ot.isKanjiModeEnabled = function() {
  return typeof Hr < "u";
};
Ot.toSJIS = function(t) {
  return Hr(t);
};
var Ke = {};
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
})(Ke);
function jn() {
  this.buffer = [], this.length = 0;
}
jn.prototype = {
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
var uo = jn, tn = re;
function Ie(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = tn.alloc(e * e), this.reservedBit = tn.alloc(e * e);
}
Ie.prototype.set = function(e, t, r, n) {
  var f = e * this.size + t;
  this.data[f] = r, n && (this.reservedBit[f] = !0);
};
Ie.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
Ie.prototype.xor = function(e, t, r) {
  this.data[e * this.size + t] ^= r;
};
Ie.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var ho = Ie, $n = {};
(function(e) {
  var t = Ot.getSymbolSize;
  e.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    for (var f = Math.floor(n / 7) + 2, i = t(n), p = i === 145 ? 26 : Math.ceil((i - 13) / (2 * f - 2)) * 2, l = [i - 7], g = 1; g < f - 1; g++)
      l[g] = l[g - 1] - p;
    return l.push(6), l.reverse();
  }, e.getPositions = function(n) {
    for (var f = [], i = e.getRowColCoords(n), p = i.length, l = 0; l < p; l++)
      for (var g = 0; g < p; g++)
        l === 0 && g === 0 || l === 0 && g === p - 1 || l === p - 1 && g === 0 || f.push([i[l], i[g]]);
    return f;
  };
})($n);
var zn = {}, lo = Ot.getSymbolSize, en = 7;
zn.getPositions = function(t) {
  var r = lo(t);
  return [
    [0, 0],
    [r - en, 0],
    [0, r - en]
  ];
};
var Zn = {};
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
    for (var i = f.size, p = 0, l = 0, g = 0, x = null, _ = null, R = 0; R < i; R++) {
      l = g = 0, x = _ = null;
      for (var I = 0; I < i; I++) {
        var U = f.get(R, I);
        U === x ? l++ : (l >= 5 && (p += t.N1 + (l - 5)), x = U, l = 1), U = f.get(I, R), U === _ ? g++ : (g >= 5 && (p += t.N1 + (g - 5)), _ = U, g = 1);
      }
      l >= 5 && (p += t.N1 + (l - 5)), g >= 5 && (p += t.N1 + (g - 5));
    }
    return p;
  }, e.getPenaltyN2 = function(f) {
    for (var i = f.size, p = 0, l = 0; l < i - 1; l++)
      for (var g = 0; g < i - 1; g++) {
        var x = f.get(l, g) + f.get(l, g + 1) + f.get(l + 1, g) + f.get(l + 1, g + 1);
        (x === 4 || x === 0) && p++;
      }
    return p * t.N2;
  }, e.getPenaltyN3 = function(f) {
    for (var i = f.size, p = 0, l = 0, g = 0, x = 0; x < i; x++) {
      l = g = 0;
      for (var _ = 0; _ < i; _++)
        l = l << 1 & 2047 | f.get(x, _), _ >= 10 && (l === 1488 || l === 93) && p++, g = g << 1 & 2047 | f.get(_, x), _ >= 10 && (g === 1488 || g === 93) && p++;
    }
    return p * t.N3;
  }, e.getPenaltyN4 = function(f) {
    for (var i = 0, p = f.data.length, l = 0; l < p; l++)
      i += f.data[l];
    var g = Math.abs(Math.ceil(i * 100 / p / 5) - 10);
    return g * t.N4;
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
    for (var p = i.size, l = 0; l < p; l++)
      for (var g = 0; g < p; g++)
        i.isReserved(g, l) || i.xor(g, l, r(f, g, l));
  }, e.getBestMask = function(f, i) {
    for (var p = Object.keys(e.Patterns).length, l = 0, g = 1 / 0, x = 0; x < p; x++) {
      i(x), e.applyMask(x, f);
      var _ = e.getPenaltyN1(f) + e.getPenaltyN2(f) + e.getPenaltyN3(f) + e.getPenaltyN4(f);
      e.applyMask(x, f), _ < g && (g = _, l = x);
    }
    return l;
  };
})(Zn);
var Ye = {}, Qt = Ke, Oe = [
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
], Pe = [
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
Ye.getBlocksCount = function(t, r) {
  switch (r) {
    case Qt.L:
      return Oe[(t - 1) * 4 + 0];
    case Qt.M:
      return Oe[(t - 1) * 4 + 1];
    case Qt.Q:
      return Oe[(t - 1) * 4 + 2];
    case Qt.H:
      return Oe[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Ye.getTotalCodewordsCount = function(t, r) {
  switch (r) {
    case Qt.L:
      return Pe[(t - 1) * 4 + 0];
    case Qt.M:
      return Pe[(t - 1) * 4 + 1];
    case Qt.Q:
      return Pe[(t - 1) * 4 + 2];
    case Qt.H:
      return Pe[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Wn = {}, Je = {}, Kn = re, Le = Kn.alloc(512), $e = Kn.alloc(256);
(function() {
  for (var t = 1, r = 0; r < 255; r++)
    Le[r] = t, $e[t] = r, t <<= 1, t & 256 && (t ^= 285);
  for (r = 255; r < 512; r++)
    Le[r] = Le[r - 255];
})();
Je.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return $e[t];
};
Je.exp = function(t) {
  return Le[t];
};
Je.mul = function(t, r) {
  return t === 0 || r === 0 ? 0 : Le[$e[t] + $e[r]];
};
(function(e) {
  var t = re, r = Je;
  e.mul = function(f, i) {
    for (var p = t.alloc(f.length + i.length - 1), l = 0; l < f.length; l++)
      for (var g = 0; g < i.length; g++)
        p[l + g] ^= r.mul(f[l], i[g]);
    return p;
  }, e.mod = function(f, i) {
    for (var p = t.from(f); p.length - i.length >= 0; ) {
      for (var l = p[0], g = 0; g < i.length; g++)
        p[g] ^= r.mul(i[g], l);
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
})(Wn);
var Yn = {}, Ve = {};
Ve.byteLength = vo;
Ve.toByteArray = mo;
Ve.fromByteArray = wo;
var jt = [], Dt = [], co = typeof Uint8Array < "u" ? Uint8Array : Array, cr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ge = 0, po = cr.length; ge < po; ++ge)
  jt[ge] = cr[ge], Dt[cr.charCodeAt(ge)] = ge;
Dt["-".charCodeAt(0)] = 62;
Dt["_".charCodeAt(0)] = 63;
function Jn(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - r % 4;
  return [r, n];
}
function vo(e) {
  var t = Jn(e), r = t[0], n = t[1];
  return (r + n) * 3 / 4 - n;
}
function go(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function mo(e) {
  var t, r = Jn(e), n = r[0], f = r[1], i = new co(go(e, n, f)), p = 0, l = f > 0 ? n - 4 : n, g;
  for (g = 0; g < l; g += 4)
    t = Dt[e.charCodeAt(g)] << 18 | Dt[e.charCodeAt(g + 1)] << 12 | Dt[e.charCodeAt(g + 2)] << 6 | Dt[e.charCodeAt(g + 3)], i[p++] = t >> 16 & 255, i[p++] = t >> 8 & 255, i[p++] = t & 255;
  return f === 2 && (t = Dt[e.charCodeAt(g)] << 2 | Dt[e.charCodeAt(g + 1)] >> 4, i[p++] = t & 255), f === 1 && (t = Dt[e.charCodeAt(g)] << 10 | Dt[e.charCodeAt(g + 1)] << 4 | Dt[e.charCodeAt(g + 2)] >> 2, i[p++] = t >> 8 & 255, i[p++] = t & 255), i;
}
function yo(e) {
  return jt[e >> 18 & 63] + jt[e >> 12 & 63] + jt[e >> 6 & 63] + jt[e & 63];
}
function _o(e, t, r) {
  for (var n, f = [], i = t; i < r; i += 3)
    n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255), f.push(yo(n));
  return f.join("");
}
function wo(e) {
  for (var t, r = e.length, n = r % 3, f = [], i = 16383, p = 0, l = r - n; p < l; p += i)
    f.push(_o(e, p, p + i > l ? l : p + i));
  return n === 1 ? (t = e[r - 1], f.push(
    jt[t >> 2] + jt[t << 4 & 63] + "=="
  )) : n === 2 && (t = (e[r - 2] << 8) + e[r - 1], f.push(
    jt[t >> 10] + jt[t >> 4 & 63] + jt[t << 2 & 63] + "="
  )), f.join("");
}
var qr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
qr.read = function(e, t, r, n, f) {
  var i, p, l = f * 8 - n - 1, g = (1 << l) - 1, x = g >> 1, _ = -7, R = r ? f - 1 : 0, I = r ? -1 : 1, U = e[t + R];
  for (R += I, i = U & (1 << -_) - 1, U >>= -_, _ += l; _ > 0; i = i * 256 + e[t + R], R += I, _ -= 8)
    ;
  for (p = i & (1 << -_) - 1, i >>= -_, _ += n; _ > 0; p = p * 256 + e[t + R], R += I, _ -= 8)
    ;
  if (i === 0)
    i = 1 - x;
  else {
    if (i === g)
      return p ? NaN : (U ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, n), i = i - x;
  }
  return (U ? -1 : 1) * p * Math.pow(2, i - n);
};
qr.write = function(e, t, r, n, f, i) {
  var p, l, g, x = i * 8 - f - 1, _ = (1 << x) - 1, R = _ >> 1, I = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, U = n ? 0 : i - 1, N = n ? 1 : -1, W = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, p = _) : (p = Math.floor(Math.log(t) / Math.LN2), t * (g = Math.pow(2, -p)) < 1 && (p--, g *= 2), p + R >= 1 ? t += I / g : t += I * Math.pow(2, 1 - R), t * g >= 2 && (p++, g /= 2), p + R >= _ ? (l = 0, p = _) : p + R >= 1 ? (l = (t * g - 1) * Math.pow(2, f), p = p + R) : (l = t * Math.pow(2, R - 1) * Math.pow(2, f), p = 0)); f >= 8; e[r + U] = l & 255, U += N, l /= 256, f -= 8)
    ;
  for (p = p << f | l, x += f; x > 0; e[r + U] = p & 255, U += N, p /= 256, x -= 8)
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
  var t = Ve, r = qr, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = l, e.SlowBuffer = k, e.INSPECT_MAX_BYTES = 50;
  var f = 2147483647;
  e.kMaxLength = f, l.TYPED_ARRAY_SUPPORT = i(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
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
  Object.defineProperty(l.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!l.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(l.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!l.isBuffer(this))
        return this.byteOffset;
    }
  });
  function p(y) {
    if (y > f)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    var s = new Uint8Array(y);
    return Object.setPrototypeOf(s, l.prototype), s;
  }
  function l(y, s, u) {
    if (typeof y == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return R(y);
    }
    return g(y, s, u);
  }
  l.poolSize = 8192;
  function g(y, s, u) {
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
      return l.from(b, s, u);
    var L = A(y);
    if (L)
      return L;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return l.from(
        y[Symbol.toPrimitive]("string"),
        s,
        u
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  l.from = function(y, s, u) {
    return g(y, s, u);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function x(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function _(y, s, u) {
    return x(y), y <= 0 ? p(y) : s !== void 0 ? typeof u == "string" ? p(y).fill(s, u) : p(y).fill(s) : p(y);
  }
  l.alloc = function(y, s, u) {
    return _(y, s, u);
  };
  function R(y) {
    return x(y), p(y < 0 ? 0 : S(y) | 0);
  }
  l.allocUnsafe = function(y) {
    return R(y);
  }, l.allocUnsafeSlow = function(y) {
    return R(y);
  };
  function I(y, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !l.isEncoding(s))
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
    return s === void 0 && u === void 0 ? b = new Uint8Array(y) : u === void 0 ? b = new Uint8Array(y, s) : b = new Uint8Array(y, s, u), Object.setPrototypeOf(b, l.prototype), b;
  }
  function A(y) {
    if (l.isBuffer(y)) {
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
    return +y != y && (y = 0), l.alloc(+y);
  }
  l.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== l.prototype;
  }, l.compare = function(s, u) {
    if (at(s, Uint8Array) && (s = l.from(s, s.offset, s.byteLength)), at(u, Uint8Array) && (u = l.from(u, u.offset, u.byteLength)), !l.isBuffer(s) || !l.isBuffer(u))
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
  }, l.isEncoding = function(s) {
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
  }, l.concat = function(s, u) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return l.alloc(0);
    var b;
    if (u === void 0)
      for (u = 0, b = 0; b < s.length; ++b)
        u += s[b].length;
    var L = l.allocUnsafe(u), H = 0;
    for (b = 0; b < s.length; ++b) {
      var z = s[b];
      if (at(z, Uint8Array))
        H + z.length > L.length ? l.from(z).copy(L, H) : Uint8Array.prototype.set.call(
          L,
          z,
          H
        );
      else if (l.isBuffer(z))
        z.copy(L, H);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      H += z.length;
    }
    return L;
  };
  function B(y, s) {
    if (l.isBuffer(y))
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
  l.byteLength = B;
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
          return v(this, s, u);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), b = !0;
      }
  }
  l.prototype._isBuffer = !0;
  function J(y, s, u) {
    var b = y[s];
    y[s] = y[u], y[u] = b;
  }
  l.prototype.swap16 = function() {
    var s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var u = 0; u < s; u += 2)
      J(this, u, u + 1);
    return this;
  }, l.prototype.swap32 = function() {
    var s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var u = 0; u < s; u += 4)
      J(this, u, u + 3), J(this, u + 1, u + 2);
    return this;
  }, l.prototype.swap64 = function() {
    var s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var u = 0; u < s; u += 8)
      J(this, u, u + 7), J(this, u + 1, u + 6), J(this, u + 2, u + 5), J(this, u + 3, u + 4);
    return this;
  }, l.prototype.toString = function() {
    var s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? m(this, 0, s) : q.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(s) {
    if (!l.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : l.compare(this, s) === 0;
  }, l.prototype.inspect = function() {
    var s = "", u = e.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (s += " ... "), "<Buffer " + s + ">";
  }, n && (l.prototype[n] = l.prototype.inspect), l.prototype.compare = function(s, u, b, L, H) {
    if (at(s, Uint8Array) && (s = l.from(s, s.offset, s.byteLength)), !l.isBuffer(s))
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
    for (var z = H - L, et = b - u, nt = Math.min(z, et), ct = this.slice(L, H), st = s.slice(u, b), ot = 0; ot < nt; ++ot)
      if (ct[ot] !== st[ot]) {
        z = ct[ot], et = st[ot];
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
    if (typeof s == "string" && (s = l.from(s, b)), l.isBuffer(s))
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
      var st = -1;
      for (ct = u; ct < z; ct++)
        if (nt(y, ct) === nt(s, st === -1 ? 0 : ct - st)) {
          if (st === -1 && (st = ct), ct - st + 1 === et)
            return st * H;
        } else
          st !== -1 && (ct -= ct - st), st = -1;
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
  l.prototype.includes = function(s, u, b) {
    return this.indexOf(s, u, b) !== -1;
  }, l.prototype.indexOf = function(s, u, b) {
    return G(this, s, u, b, !0);
  }, l.prototype.lastIndexOf = function(s, u, b) {
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
  function h(y, s, u, b) {
    return Z(Q(s, y.length - u), y, u, b);
  }
  l.prototype.write = function(s, u, b, L) {
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
          return h(this, s, u, b);
        default:
          if (z)
            throw new TypeError("Unknown encoding: " + L);
          L = ("" + L).toLowerCase(), z = !0;
      }
  }, l.prototype.toJSON = function() {
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
        var nt, ct, st, ot;
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
            nt = y[L + 1], ct = y[L + 2], st = y[L + 3], (nt & 192) === 128 && (ct & 192) === 128 && (st & 192) === 128 && (ot = (H & 15) << 18 | (nt & 63) << 12 | (ct & 63) << 6 | st & 63, ot > 65535 && ot < 1114112 && (z = ot));
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
  function v(y, s, u) {
    for (var b = y.slice(s, u), L = "", H = 0; H < b.length - 1; H += 2)
      L += String.fromCharCode(b[H] + b[H + 1] * 256);
    return L;
  }
  l.prototype.slice = function(s, u) {
    var b = this.length;
    s = ~~s, u = u === void 0 ? b : ~~u, s < 0 ? (s += b, s < 0 && (s = 0)) : s > b && (s = b), u < 0 ? (u += b, u < 0 && (u = 0)) : u > b && (u = b), u < s && (u = s);
    var L = this.subarray(s, u);
    return Object.setPrototypeOf(L, l.prototype), L;
  };
  function D(y, s, u) {
    if (y % 1 !== 0 || y < 0)
      throw new RangeError("offset is not uint");
    if (y + s > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = this[s], H = 1, z = 0; ++z < u && (H *= 256); )
      L += this[s + z] * H;
    return L;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = this[s + --u], H = 1; u > 0 && (H *= 256); )
      L += this[s + --u] * H;
    return L;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(s, u) {
    return s = s >>> 0, u || D(s, 1, this.length), this[s];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(s, u) {
    return s = s >>> 0, u || D(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(s, u) {
    return s = s >>> 0, u || D(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, l.prototype.readIntLE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = this[s], H = 1, z = 0; ++z < u && (H *= 256); )
      L += this[s + z] * H;
    return H *= 128, L >= H && (L -= Math.pow(2, 8 * u)), L;
  }, l.prototype.readIntBE = function(s, u, b) {
    s = s >>> 0, u = u >>> 0, b || D(s, u, this.length);
    for (var L = u, H = 1, z = this[s + --L]; L > 0 && (H *= 256); )
      z += this[s + --L] * H;
    return H *= 128, z >= H && (z -= Math.pow(2, 8 * u)), z;
  }, l.prototype.readInt8 = function(s, u) {
    return s = s >>> 0, u || D(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, l.prototype.readInt16LE = function(s, u) {
    s = s >>> 0, u || D(s, 2, this.length);
    var b = this[s] | this[s + 1] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, l.prototype.readInt16BE = function(s, u) {
    s = s >>> 0, u || D(s, 2, this.length);
    var b = this[s + 1] | this[s] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, l.prototype.readInt32LE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, l.prototype.readInt32BE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, l.prototype.readFloatLE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), r.read(this, s, !0, 23, 4);
  }, l.prototype.readFloatBE = function(s, u) {
    return s = s >>> 0, u || D(s, 4, this.length), r.read(this, s, !1, 23, 4);
  }, l.prototype.readDoubleLE = function(s, u) {
    return s = s >>> 0, u || D(s, 8, this.length), r.read(this, s, !0, 52, 8);
  }, l.prototype.readDoubleBE = function(s, u) {
    return s = s >>> 0, u || D(s, 8, this.length), r.read(this, s, !1, 52, 8);
  };
  function O(y, s, u, b, L, H) {
    if (!l.isBuffer(y))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > L || s < H)
      throw new RangeError('"value" argument is out of bounds');
    if (u + b > y.length)
      throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, b = b >>> 0, !L) {
      var H = Math.pow(2, 8 * b) - 1;
      O(this, s, u, b, H, 0);
    }
    var z = 1, et = 0;
    for (this[u] = s & 255; ++et < b && (z *= 256); )
      this[u + et] = s / z & 255;
    return u + b;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, b = b >>> 0, !L) {
      var H = Math.pow(2, 8 * b) - 1;
      O(this, s, u, b, H, 0);
    }
    var z = b - 1, et = 1;
    for (this[u + z] = s & 255; --z >= 0 && (et *= 256); )
      this[u + z] = s / et & 255;
    return u + b;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 1, 255, 0), this[u] = s & 255, u + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 65535, 0), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 65535, 0), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 4294967295, 0), this[u + 3] = s >>> 24, this[u + 2] = s >>> 16, this[u + 1] = s >>> 8, this[u] = s & 255, u + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 4294967295, 0), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  }, l.prototype.writeIntLE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, !L) {
      var H = Math.pow(2, 8 * b - 1);
      O(this, s, u, b, H - 1, -H);
    }
    var z = 0, et = 1, nt = 0;
    for (this[u] = s & 255; ++z < b && (et *= 256); )
      s < 0 && nt === 0 && this[u + z - 1] !== 0 && (nt = 1), this[u + z] = (s / et >> 0) - nt & 255;
    return u + b;
  }, l.prototype.writeIntBE = function(s, u, b, L) {
    if (s = +s, u = u >>> 0, !L) {
      var H = Math.pow(2, 8 * b - 1);
      O(this, s, u, b, H - 1, -H);
    }
    var z = b - 1, et = 1, nt = 0;
    for (this[u + z] = s & 255; --z >= 0 && (et *= 256); )
      s < 0 && nt === 0 && this[u + z + 1] !== 0 && (nt = 1), this[u + z] = (s / et >> 0) - nt & 255;
    return u + b;
  }, l.prototype.writeInt8 = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[u] = s & 255, u + 1;
  }, l.prototype.writeInt16LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 32767, -32768), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, l.prototype.writeInt16BE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 2, 32767, -32768), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, l.prototype.writeInt32LE = function(s, u, b) {
    return s = +s, u = u >>> 0, b || O(this, s, u, 4, 2147483647, -2147483648), this[u] = s & 255, this[u + 1] = s >>> 8, this[u + 2] = s >>> 16, this[u + 3] = s >>> 24, u + 4;
  }, l.prototype.writeInt32BE = function(s, u, b) {
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
  l.prototype.writeFloatLE = function(s, u, b) {
    return X(this, s, u, !0, b);
  }, l.prototype.writeFloatBE = function(s, u, b) {
    return X(this, s, u, !1, b);
  };
  function c(y, s, u, b, L) {
    return s = +s, u = u >>> 0, L || Y(y, s, u, 8), r.write(y, s, u, b, 52, 8), u + 8;
  }
  l.prototype.writeDoubleLE = function(s, u, b) {
    return c(this, s, u, !0, b);
  }, l.prototype.writeDoubleBE = function(s, u, b) {
    return c(this, s, u, !1, b);
  }, l.prototype.copy = function(s, u, b, L) {
    if (!l.isBuffer(s))
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
  }, l.prototype.fill = function(s, u, b, L) {
    if (typeof s == "string") {
      if (typeof u == "string" ? (L = u, u = 0, b = this.length) : typeof b == "string" && (L = b, b = this.length), L !== void 0 && typeof L != "string")
        throw new TypeError("encoding must be a string");
      if (typeof L == "string" && !l.isEncoding(L))
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
      var et = l.isBuffer(s) ? s : l.from(s, L), nt = et.length;
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
})(Yn);
var rn = re, Vn = Wn, Mo = Yn.Buffer;
function jr(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
jr.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = Vn.generateECPolynomial(this.degree);
};
jr.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var r = rn.alloc(this.degree), n = Mo.concat([t, r], t.length + this.degree), f = Vn.mod(n, this.genPoly), i = this.degree - f.length;
  if (i > 0) {
    var p = rn.alloc(this.degree);
    return f.copy(p, i), p;
  }
  return f;
};
var xo = jr, Gn = {}, ne = {}, $r = {};
$r.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var $t = {}, Xn = "[0-9]+", bo = "[A-Z $%*+\\-./:]+", ke = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
ke = ke.replace(/u/g, "\\u");
var Eo = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ke + `)(?:.|[\r
]))+`;
$t.KANJI = new RegExp(ke, "g");
$t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
$t.BYTE = new RegExp(Eo, "g");
$t.NUMERIC = new RegExp(Xn, "g");
$t.ALPHANUMERIC = new RegExp(bo, "g");
var Ao = new RegExp("^" + ke + "$"), Co = new RegExp("^" + Xn + "$"), Lo = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
$t.testKanji = function(t) {
  return Ao.test(t);
};
$t.testNumeric = function(t) {
  return Co.test(t);
};
$t.testAlphanumeric = function(t) {
  return Lo.test(t);
};
(function(e) {
  var t = $r, r = $t;
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
})(ne);
(function(e) {
  var t = Ot, r = Ye, n = Ke, f = ne, i = $r, p = Pr, l = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, g = t.getBCHDigit(l);
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
    for (var W = N << 12; t.getBCHDigit(W) - g >= 0; )
      W ^= l << t.getBCHDigit(W) - g;
    return N << 12 | W;
  };
})(Gn);
var Qn = {}, br = Ot, ti = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, Bo = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, nn = br.getBCHDigit(ti);
Qn.getEncodedBits = function(t, r) {
  for (var n = t.bit << 3 | r, f = n << 10; br.getBCHDigit(f) - nn >= 0; )
    f ^= ti << br.getBCHDigit(f) - nn;
  return (n << 10 | f) ^ Bo;
};
var ei = {}, So = ne;
function _e(e) {
  this.mode = So.NUMERIC, this.data = e.toString();
}
_e.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
_e.prototype.getLength = function() {
  return this.data.length;
};
_e.prototype.getBitsLength = function() {
  return _e.getBitsLength(this.data.length);
};
_e.prototype.write = function(t) {
  var r, n, f;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    n = this.data.substr(r, 3), f = parseInt(n, 10), t.put(f, 10);
  var i = this.data.length - r;
  i > 0 && (n = this.data.substr(r), f = parseInt(n, 10), t.put(f, i * 3 + 1));
};
var ko = _e, Fo = ne, pr = [
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
function we(e) {
  this.mode = Fo.ALPHANUMERIC, this.data = e;
}
we.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
we.prototype.getLength = function() {
  return this.data.length;
};
we.prototype.getBitsLength = function() {
  return we.getBitsLength(this.data.length);
};
we.prototype.write = function(t) {
  var r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    var n = pr.indexOf(this.data[r]) * 45;
    n += pr.indexOf(this.data[r + 1]), t.put(n, 11);
  }
  this.data.length % 2 && t.put(pr.indexOf(this.data[r]), 6);
};
var Ro = we, To = re, Io = ne;
function Me(e) {
  this.mode = Io.BYTE, this.data = To.from(e);
}
Me.getBitsLength = function(t) {
  return t * 8;
};
Me.prototype.getLength = function() {
  return this.data.length;
};
Me.prototype.getBitsLength = function() {
  return Me.getBitsLength(this.data.length);
};
Me.prototype.write = function(e) {
  for (var t = 0, r = this.data.length; t < r; t++)
    e.put(this.data[t], 8);
};
var No = Me, Uo = ne, Oo = Ot;
function xe(e) {
  this.mode = Uo.KANJI, this.data = e;
}
xe.getBitsLength = function(t) {
  return t * 13;
};
xe.prototype.getLength = function() {
  return this.data.length;
};
xe.prototype.getBitsLength = function() {
  return xe.getBitsLength(this.data.length);
};
xe.prototype.write = function(e) {
  var t;
  for (t = 0; t < this.data.length; t++) {
    var r = Oo.toSJIS(this.data[t]);
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
var Po = xe, ri = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(r, n, f) {
      var i = {}, p = {};
      p[n] = 0;
      var l = t.PriorityQueue.make();
      l.push(n, 0);
      for (var g, x, _, R, I, U, N, W, A; !l.empty(); ) {
        g = l.pop(), x = g.value, R = g.cost, I = r[x] || {};
        for (_ in I)
          I.hasOwnProperty(_) && (U = I[_], N = R + U, W = p[_], A = typeof p[_] > "u", (A || W > N) && (p[_] = N, l.push(_, N), i[_] = x));
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
})(ri);
(function(e) {
  var t = ne, r = ko, n = Ro, f = No, i = Po, p = $t, l = Ot, g = ri.exports;
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
    l.isKanjiModeEnabled() ? (q = _(p.BYTE, t.BYTE, S), J = _(p.KANJI, t.KANJI, S)) : (q = _(p.BYTE_KANJI, t.BYTE, S), J = []);
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
        for (var h = 0; h < J.length; h++) {
          var d = J[h];
          B[d] && B[d].node.mode === E.mode ? (q[d][o] = I(B[d].lastCount + E.length, E.mode) - I(B[d].lastCount, E.mode), B[d].lastCount += E.length) : (B[d] && (B[d].lastCount = E.length), q[d][o] = I(E.length, E.mode) + 4 + t.getCharCountIndicator(E.mode, k));
        }
      }
      J = tt;
    }
    for (h = 0; h < J.length; h++)
      q[J[h]].end = 0;
    return { map: q, table: B };
  }
  function A(S, k) {
    var B, q = t.getBestModeForData(S);
    if (B = t.from(k, q), B !== t.BYTE && B.bit < q.bit)
      throw new Error('"' + S + '" cannot be encoded with mode ' + t.toString(B) + `.
 Suggested mode is: ` + t.toString(q));
    switch (B === t.KANJI && !l.isKanjiModeEnabled() && (B = t.BYTE), B) {
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
    for (var q = R(k, l.isKanjiModeEnabled()), J = N(q), G = W(J, B), it = g.find_path(G.map, "start", "end"), tt = [], lt = 1; lt < it.length - 1; lt++)
      tt.push(G.table[it[lt]].node);
    return e.fromArray(U(tt));
  }, e.rawSplit = function(k) {
    return e.fromArray(
      R(k, l.isKanjiModeEnabled())
    );
  };
})(ei);
var on = re, Ge = Ot, dr = Ke, Do = uo, Ho = ho, qo = $n, jo = zn, Er = Zn, Ar = Ye, $o = xo, ze = Gn, zo = Qn, Zo = ne, vr = ei, Wo = Pr;
function Ko(e, t) {
  for (var r = e.size, n = jo.getPositions(t), f = 0; f < n.length; f++)
    for (var i = n[f][0], p = n[f][1], l = -1; l <= 7; l++)
      if (!(i + l <= -1 || r <= i + l))
        for (var g = -1; g <= 7; g++)
          p + g <= -1 || r <= p + g || (l >= 0 && l <= 6 && (g === 0 || g === 6) || g >= 0 && g <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && g >= 2 && g <= 4 ? e.set(i + l, p + g, !0, !0) : e.set(i + l, p + g, !1, !0));
}
function Yo(e) {
  for (var t = e.size, r = 8; r < t - 8; r++) {
    var n = r % 2 === 0;
    e.set(r, 6, n, !0), e.set(6, r, n, !0);
  }
}
function Jo(e, t) {
  for (var r = qo.getPositions(t), n = 0; n < r.length; n++)
    for (var f = r[n][0], i = r[n][1], p = -2; p <= 2; p++)
      for (var l = -2; l <= 2; l++)
        p === -2 || p === 2 || l === -2 || l === 2 || p === 0 && l === 0 ? e.set(f + p, i + l, !0, !0) : e.set(f + p, i + l, !1, !0);
}
function Vo(e, t) {
  for (var r = e.size, n = ze.getEncodedBits(t), f, i, p, l = 0; l < 18; l++)
    f = Math.floor(l / 3), i = l % 3 + r - 8 - 3, p = (n >> l & 1) === 1, e.set(f, i, p, !0), e.set(i, f, p, !0);
}
function gr(e, t, r) {
  var n = e.size, f = zo.getEncodedBits(t, r), i, p;
  for (i = 0; i < 15; i++)
    p = (f >> i & 1) === 1, i < 6 ? e.set(i, 8, p, !0) : i < 8 ? e.set(i + 1, 8, p, !0) : e.set(n - 15 + i, 8, p, !0), i < 8 ? e.set(8, n - i - 1, p, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, p, !0) : e.set(8, 15 - i - 1, p, !0);
  e.set(n - 8, 8, 1, !0);
}
function Go(e, t) {
  for (var r = e.size, n = -1, f = r - 1, i = 7, p = 0, l = r - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (var g = 0; g < 2; g++)
        if (!e.isReserved(f, l - g)) {
          var x = !1;
          p < t.length && (x = (t[p] >>> i & 1) === 1), e.set(f, l - g, x), i--, i === -1 && (p++, i = 7);
        }
      if (f += n, f < 0 || r <= f) {
        f -= n, n = -n;
        break;
      }
    }
}
function Xo(e, t, r) {
  var n = new Do();
  r.forEach(function(x) {
    n.put(x.mode.bit, 4), n.put(x.getLength(), Zo.getCharCountIndicator(x.mode, e)), x.write(n);
  });
  var f = Ge.getSymbolTotalCodewords(e), i = Ar.getTotalCodewordsCount(e, t), p = (f - i) * 8;
  for (n.getLengthInBits() + 4 <= p && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  for (var l = (p - n.getLengthInBits()) / 8, g = 0; g < l; g++)
    n.put(g % 2 ? 17 : 236, 8);
  return Qo(n, e, t);
}
function Qo(e, t, r) {
  for (var n = Ge.getSymbolTotalCodewords(t), f = Ar.getTotalCodewordsCount(t, r), i = n - f, p = Ar.getBlocksCount(t, r), l = n % p, g = p - l, x = Math.floor(n / p), _ = Math.floor(i / p), R = _ + 1, I = x - _, U = new $o(I), N = 0, W = new Array(p), A = new Array(p), S = 0, k = on.from(e.buffer), B = 0; B < p; B++) {
    var q = B < g ? _ : R;
    W[B] = k.slice(N, N + q), A[B] = U.encode(W[B]), N += q, S = Math.max(S, q);
  }
  var J = on.alloc(n), G = 0, it, tt;
  for (it = 0; it < S; it++)
    for (tt = 0; tt < p; tt++)
      it < W[tt].length && (J[G++] = W[tt][it]);
  for (it = 0; it < I; it++)
    for (tt = 0; tt < p; tt++)
      J[G++] = A[tt][it];
  return J;
}
function ta(e, t, r, n) {
  var f;
  if (Wo(e))
    f = vr.fromArray(e);
  else if (typeof e == "string") {
    var i = t;
    if (!i) {
      var p = vr.rawSplit(e);
      i = ze.getBestVersionForData(
        p,
        r
      );
    }
    f = vr.fromString(e, i || 40);
  } else
    throw new Error("Invalid data");
  var l = ze.getBestVersionForData(
    f,
    r
  );
  if (!l)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = l;
  else if (t < l)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + l + `.
`
    );
  var g = Xo(t, r, f), x = Ge.getSymbolSize(t), _ = new Ho(x);
  return Ko(_, t), Yo(_), Jo(_, t), gr(_, r, 0), t >= 7 && Vo(_, t), Go(_, g), isNaN(n) && (n = Er.getBestMask(
    _,
    gr.bind(null, _, r)
  )), Er.applyMask(n, _), gr(_, r, n), {
    modules: _,
    version: t,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: f
  };
}
Pn.create = function(t, r) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  var n = dr.M, f, i;
  return typeof r < "u" && (n = dr.from(r.errorCorrectionLevel, dr.M), f = ze.from(r.version), i = Er.from(r.maskPattern), r.toSJISFunc && Ge.setToSJISFunction(r.toSJISFunc)), ta(t, f, n, i);
};
var ni = {}, zr = {};
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
    for (var p = f.modules.size, l = f.modules.data, g = e.getScale(p, i), x = Math.floor((p + i.margin * 2) * g), _ = i.margin * g, R = [i.color.light, i.color.dark], I = 0; I < x; I++)
      for (var U = 0; U < x; U++) {
        var N = (I * x + U) * 4, W = i.color.light;
        if (I >= _ && U >= _ && I < x - _ && U < x - _) {
          var A = Math.floor((I - _) / g), S = Math.floor((U - _) / g);
          W = R[l[A * p + S] ? 1 : 0];
        }
        n[N++] = W.r, n[N++] = W.g, n[N++] = W.b, n[N] = W.a;
      }
  };
})(zr);
(function(e) {
  var t = zr;
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
  e.render = function(i, p, l) {
    var g = l, x = p;
    typeof g > "u" && (!p || !p.getContext) && (g = p, p = void 0), p || (x = n()), g = t.getOptions(g);
    var _ = t.getImageWidth(i.modules.size, g), R = x.getContext("2d"), I = R.createImageData(_, _);
    return t.qrToImageData(I.data, i, g), r(R, x, _), R.putImageData(I, 0, 0), x;
  }, e.renderToDataURL = function(i, p, l) {
    var g = l;
    typeof g > "u" && (!p || !p.getContext) && (g = p, p = void 0), g || (g = {});
    var x = e.render(i, p, g), _ = g.type || "image/png", R = g.rendererOpts || {};
    return x.toDataURL(_, R.quality);
  };
})(ni);
var ii = {}, ea = zr;
function an(e, t) {
  var r = e.a / 255, n = t + '="' + e.hex + '"';
  return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function mr(e, t, r) {
  var n = e + t;
  return typeof r < "u" && (n += " " + r), n;
}
function ra(e, t, r) {
  for (var n = "", f = 0, i = !1, p = 0, l = 0; l < e.length; l++) {
    var g = Math.floor(l % t), x = Math.floor(l / t);
    !g && !i && (i = !0), e[l] ? (p++, l > 0 && g > 0 && e[l - 1] || (n += i ? mr("M", g + r, 0.5 + x + r) : mr("m", f, 0), f = 0, i = !1), g + 1 < t && e[l + 1] || (n += mr("h", p), p = 0)) : f++;
  }
  return n;
}
ii.render = function(t, r, n) {
  var f = ea.getOptions(r), i = t.modules.size, p = t.modules.data, l = i + f.margin * 2, g = f.color.light.a ? "<path " + an(f.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "", x = "<path " + an(f.color.dark, "stroke") + ' d="' + ra(p, i, f.margin) + '"/>', _ = 'viewBox="0 0 ' + l + " " + l + '"', R = f.width ? 'width="' + f.width + '" height="' + f.width + '" ' : "", I = '<svg xmlns="http://www.w3.org/2000/svg" ' + R + _ + ' shape-rendering="crispEdges">' + g + x + `</svg>
`;
  return typeof n == "function" && n(null, I), I;
};
var na = Gi, Cr = Pn, oi = ni, ia = ii;
function Zr(e, t, r, n, f) {
  var i = [].slice.call(arguments, 1), p = i.length, l = typeof i[p - 1] == "function";
  if (!l && !na())
    throw new Error("Callback required as last argument");
  if (l) {
    if (p < 2)
      throw new Error("Too few arguments provided");
    p === 2 ? (f = r, r = t, t = n = void 0) : p === 3 && (t.getContext && typeof f > "u" ? (f = n, n = void 0) : (f = n, n = r, r = t, t = void 0));
  } else {
    if (p < 1)
      throw new Error("Too few arguments provided");
    return p === 1 ? (r = t, t = n = void 0) : p === 2 && !t.getContext && (n = r, r = t, t = void 0), new Promise(function(x, _) {
      try {
        var R = Cr.create(r, n);
        x(e(R, t, n));
      } catch (I) {
        _(I);
      }
    });
  }
  try {
    var g = Cr.create(r, n);
    f(null, e(g, t, n));
  } catch (x) {
    f(x);
  }
}
Te.create = Cr.create;
Te.toCanvas = Zr.bind(null, oi.render);
Te.toDataURL = Zr.bind(null, oi.renderToDataURL);
Te.toString = Zr.bind(null, function(e, t, r) {
  return ia.render(e, r);
});
var oa = function() {
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
}, aa = oa, sn = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, sa = "Copy to clipboard: #{key}, Enter";
function fa(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function ua(e, t) {
  var r, n, f, i, p, l, g = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    f = aa(), i = document.createRange(), p = document.getSelection(), l = document.createElement("span"), l.textContent = e, l.ariaHidden = "true", l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", l.addEventListener("copy", function(_) {
      if (_.stopPropagation(), t.format)
        if (_.preventDefault(), typeof _.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var R = sn[t.format] || sn.default;
          window.clipboardData.setData(R, e);
        } else
          _.clipboardData.clearData(), _.clipboardData.setData(t.format, e);
      t.onCopy && (_.preventDefault(), t.onCopy(_.clipboardData));
    }), document.body.appendChild(l), i.selectNodeContents(l), p.addRange(i);
    var x = document.execCommand("copy");
    if (!x)
      throw new Error("copy command was unsuccessful");
    g = !0;
  } catch (_) {
    r && console.error("unable to copy using execCommand: ", _), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), g = !0;
    } catch (R) {
      r && console.error("unable to copy using clipboardData: ", R), r && console.error("falling back to prompt"), n = fa("message" in t ? t.message : sa), window.prompt(n, e);
    }
  } finally {
    p && (typeof p.removeRange == "function" ? p.removeRange(i) : p.removeAllRanges()), l && document.body.removeChild(l), f();
  }
  return g;
}
var ha = ua, ft, Be, Wr, ai, fn, Se = {}, si = [], la = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function de(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function fi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ca(e, t, r) {
  var n, f = arguments, i = {};
  for (n in t)
    n !== "key" && n !== "ref" && (i[n] = t[n]);
  if (arguments.length > 3)
    for (r = [r], n = 3; n < arguments.length; n++)
      r.push(f[n]);
  if (r != null && (i.children = r), typeof e == "function" && e.defaultProps != null)
    for (n in e.defaultProps)
      i[n] === void 0 && (i[n] = e.defaultProps[n]);
  return Lr(e, i, t && t.key, t && t.ref, null);
}
function Lr(e, t, r, n, f) {
  var i = { type: e, props: t, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: f };
  return f == null && (i.__v = i), ft.vnode && ft.vnode(i), i;
}
function ui(e) {
  return e.children;
}
function zt(e, t) {
  this.props = e, this.context = t;
}
function Fe(e, t) {
  if (t == null)
    return e.__ ? Fe(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null)
      return r.__e;
  return typeof e.type == "function" ? Fe(e) : null;
}
function hi(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return hi(e);
  }
}
function yr(e) {
  (!e.__d && (e.__d = !0) && Be.push(e) && !Wr++ || fn !== ft.debounceRendering) && ((fn = ft.debounceRendering) || ai)(pa);
}
function pa() {
  for (var e; Wr = Be.length; )
    e = Be.sort(function(t, r) {
      return t.__v.__b - r.__v.__b;
    }), Be = [], e.some(function(t) {
      var r, n, f, i, p, l, g;
      t.__d && (l = (p = (r = t).__v).__e, (g = r.__P) && (n = [], (f = de({}, p)).__v = f, i = ci(g, p, f, r.__n, g.ownerSVGElement !== void 0, null, n, l == null ? Fe(p) : l), va(n, p), i != l && hi(p)));
    });
}
function li(e, t, r, n, f, i, p, l, g) {
  var x, _, R, I, U, N, W, A = r && r.__k || si, S = A.length;
  if (l == Se && (l = i != null ? i[0] : S ? Fe(r, 0) : null), x = 0, t.__k = Xe(t.__k, function(k) {
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
      if (I = ci(e, k, R = R || Se, n, f, i, p, l, g), (_ = k.ref) && R.ref != _ && (W || (W = []), R.ref && W.push(R.ref, null, k), W.push(_, k.__c || I, k)), I != null) {
        var B;
        if (N == null && (N = I), k.__d !== void 0)
          B = k.__d, k.__d = void 0;
        else if (i == R || I != l || I.parentNode == null) {
          t:
            if (l == null || l.parentNode !== e)
              e.appendChild(I), B = null;
            else {
              for (U = l, _ = 0; (U = U.nextSibling) && _ < S; _ += 2)
                if (U == I)
                  break t;
              e.insertBefore(I, l), B = l;
            }
          t.type == "option" && (e.value = "");
        }
        l = B !== void 0 ? B : I.nextSibling, typeof t.type == "function" && (t.__d = l);
      } else
        l && R.__e == l && l.parentNode != e && (l = Fe(R));
    }
    return x++, k;
  }), t.__e = N, i != null && typeof t.type != "function")
    for (x = i.length; x--; )
      i[x] != null && fi(i[x]);
  for (x = S; x--; )
    A[x] != null && di(A[x], A[x]);
  if (W)
    for (x = 0; x < W.length; x++)
      pi(W[x], W[++x], W[++x]);
}
function Xe(e, t, r) {
  if (r == null && (r = []), e == null || typeof e == "boolean")
    t && r.push(t(null));
  else if (Array.isArray(e))
    for (var n = 0; n < e.length; n++)
      Xe(e[n], t, r);
  else
    r.push(t ? t(typeof e == "string" || typeof e == "number" ? Lr(null, e, null, null, e) : e.__e != null || e.__c != null ? Lr(e.type, e.props, e.key, null, e.__v) : e) : e);
  return r;
}
function da(e, t, r, n, f) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in t || Ze(e, i, null, r[i], n);
  for (i in t)
    f && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === t[i] || Ze(e, i, t[i], r[i], n);
}
function un(e, t, r) {
  t[0] === "-" ? e.setProperty(t, r) : e[t] = typeof r == "number" && la.test(t) === !1 ? r + "px" : r == null ? "" : r;
}
function Ze(e, t, r, n, f) {
  var i, p, l, g, x;
  if (f ? t === "className" && (t = "class") : t === "class" && (t = "className"), t === "style")
    if (i = e.style, typeof r == "string")
      i.cssText = r;
    else {
      if (typeof n == "string" && (i.cssText = "", n = null), n)
        for (g in n)
          r && g in r || un(i, g, "");
      if (r)
        for (x in r)
          n && r[x] === n[x] || un(i, x, r[x]);
    }
  else
    t[0] === "o" && t[1] === "n" ? (p = t !== (t = t.replace(/Capture$/, "")), l = t.toLowerCase(), t = (l in e ? l : t).slice(2), r ? (n || e.addEventListener(t, hn, p), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, hn, p)) : t !== "list" && t !== "tagName" && t !== "form" && t !== "type" && t !== "size" && !f && t in e ? e[t] = r == null ? "" : r : typeof r != "function" && t !== "dangerouslySetInnerHTML" && (t !== (t = t.replace(/^xlink:?/, "")) ? r == null || r === !1 ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function hn(e) {
  this.l[e.type](ft.event ? ft.event(e) : e);
}
function ci(e, t, r, n, f, i, p, l, g) {
  var x, _, R, I, U, N, W, A, S, k, B = t.type;
  if (t.constructor !== void 0)
    return null;
  (x = ft.__b) && x(t);
  try {
    t:
      if (typeof B == "function") {
        if (A = t.props, S = (x = B.contextType) && n[x.__c], k = x ? S ? S.props.value : x.__ : n, r.__c ? W = (_ = t.__c = r.__c).__ = _.__E : ("prototype" in B && B.prototype.render ? t.__c = _ = new B(A, k) : (t.__c = _ = new zt(A, k), _.constructor = B, _.render = ma), S && S.sub(_), _.props = A, _.state || (_.state = {}), _.context = k, _.__n = n, R = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), B.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = de({}, _.__s)), de(_.__s, B.getDerivedStateFromProps(A, _.__s))), I = _.props, U = _.state, R)
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
        _.context = k, _.props = A, _.state = _.__s, (x = ft.__r) && x(t), _.__d = !1, _.__v = t, _.__P = e, x = _.render(_.props, _.state, _.context), t.__k = x != null && x.type == ui && x.key == null ? x.props.children : Array.isArray(x) ? x : [x], _.getChildContext != null && (n = de(de({}, n), _.getChildContext())), R || _.getSnapshotBeforeUpdate == null || (N = _.getSnapshotBeforeUpdate(I, U)), li(e, t, r, n, f, i, p, l, g), _.base = t.__e, _.__h.length && p.push(_), W && (_.__E = _.__ = null), _.__e = !1;
      } else
        i == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = ga(r.__e, t, r, n, f, i, p, g);
    (x = ft.diffed) && x(t);
  } catch (q) {
    t.__v = null, ft.__e(q, t, r);
  }
  return t.__e;
}
function va(e, t) {
  ft.__c && ft.__c(t, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      ft.__e(n, r.__v);
    }
  });
}
function ga(e, t, r, n, f, i, p, l) {
  var g, x, _, R, I, U = r.props, N = t.props;
  if (f = t.type === "svg" || f, i != null) {
    for (g = 0; g < i.length; g++)
      if ((x = i[g]) != null && ((t.type === null ? x.nodeType === 3 : x.localName === t.type) || e == x)) {
        e = x, i[g] = null;
        break;
      }
  }
  if (e == null) {
    if (t.type === null)
      return document.createTextNode(N);
    e = f ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, N.is && { is: N.is }), i = null, l = !1;
  }
  if (t.type === null)
    U !== N && e.data != N && (e.data = N);
  else {
    if (i != null && (i = si.slice.call(e.childNodes)), _ = (U = r.props || Se).dangerouslySetInnerHTML, R = N.dangerouslySetInnerHTML, !l) {
      if (U === Se)
        for (U = {}, I = 0; I < e.attributes.length; I++)
          U[e.attributes[I].name] = e.attributes[I].value;
      (R || _) && (R && _ && R.__html == _.__html || (e.innerHTML = R && R.__html || ""));
    }
    da(e, N, U, f, l), R ? t.__k = [] : (t.__k = t.props.children, li(e, t, r, n, t.type !== "foreignObject" && f, i, p, Se, l)), l || ("value" in N && (g = N.value) !== void 0 && g !== e.value && Ze(e, "value", g, U.value, !1), "checked" in N && (g = N.checked) !== void 0 && g !== e.checked && Ze(e, "checked", g, U.checked, !1));
  }
  return e;
}
function pi(e, t, r) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (n) {
    ft.__e(n, r);
  }
}
function di(e, t, r) {
  var n, f, i;
  if (ft.unmount && ft.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || pi(n, null, t)), r || typeof e.type == "function" || (r = (f = e.__e) != null), e.__e = e.__d = void 0, (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (p) {
        ft.__e(p, t);
      }
    n.base = n.__P = null;
  }
  if (n = e.__k)
    for (i = 0; i < n.length; i++)
      n[i] && di(n[i], t, r);
  f != null && fi(f);
}
function ma(e, t, r) {
  return this.constructor(e, r);
}
ft = { __e: function(e, t) {
  for (var r, n; t = t.__; )
    if ((r = t.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(e))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(e)), n)
          return yr(r.__E = r);
      } catch (f) {
        e = f;
      }
  throw e;
} }, zt.prototype.setState = function(e, t) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = de({}, this.state), typeof e == "function" && (e = e(r, this.props)), e && de(r, e), e != null && this.__v && (t && this.__h.push(t), yr(this));
}, zt.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), yr(this));
}, zt.prototype.render = ui, Be = [], Wr = 0, ai = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
var De, ln, Br = [], cn = ft.__r, pn = ft.diffed, dn = ft.__c, vn = ft.unmount;
function ya() {
  Br.some(function(e) {
    if (e.__P)
      try {
        e.__H.__h.forEach(Sr), e.__H.__h.forEach(kr), e.__H.__h = [];
      } catch (t) {
        return e.__H.__h = [], ft.__e(t, e.__v), !0;
      }
  }), Br = [];
}
function Sr(e) {
  e.t && e.t();
}
function kr(e) {
  var t = e.__();
  typeof t == "function" && (e.t = t);
}
ft.__r = function(e) {
  cn && cn(e), (De = e.__c).__H && (De.__H.__h.forEach(Sr), De.__H.__h.forEach(kr), De.__H.__h = []);
}, ft.diffed = function(e) {
  pn && pn(e);
  var t = e.__c;
  if (t) {
    var r = t.__H;
    r && r.__h.length && (Br.push(t) !== 1 && ln === ft.requestAnimationFrame || ((ln = ft.requestAnimationFrame) || function(n) {
      var f, i = function() {
        clearTimeout(p), cancelAnimationFrame(f), setTimeout(n);
      }, p = setTimeout(i, 100);
      typeof window < "u" && (f = requestAnimationFrame(i));
    })(ya));
  }
}, ft.__c = function(e, t) {
  t.some(function(r) {
    try {
      r.__h.forEach(Sr), r.__h = r.__h.filter(function(n) {
        return !n.__ || kr(n);
      });
    } catch (n) {
      t.some(function(f) {
        f.__h && (f.__h = []);
      }), t = [], ft.__e(n, r.__v);
    }
  }), dn && dn(e, t);
}, ft.unmount = function(e) {
  vn && vn(e);
  var t = e.__c;
  if (t) {
    var r = t.__H;
    if (r)
      try {
        r.__.forEach(function(n) {
          return n.t && n.t();
        });
      } catch (n) {
        ft.__e(n, t.__v);
      }
  }
};
function _a(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function gn(e, t) {
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
    return gn(this.props, f) || gn(this.state, i);
  }, n;
})(zt);
var mn = ft.__b;
ft.__b = function(e) {
  e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), mn && mn(e);
};
var wa = ft.__e;
function vi(e) {
  return e && ((e = _a({}, e)).__c = null, e.__k = e.__k && e.__k.map(vi)), e;
}
function yn() {
  this.__u = 0, this.o = null, this.__b = null;
}
function gi(e) {
  var t = e.__.__c;
  return t && t.u && t.u(e);
}
function He() {
  this.i = null, this.l = null;
}
ft.__e = function(e, t, r) {
  if (e.then) {
    for (var n, f = t; f = f.__; )
      if ((n = f.__c) && n.__c)
        return n.__c(e, t.__c);
  }
  wa(e, t, r);
}, (yn.prototype = new zt()).__c = function(e, t) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(t);
  var n = gi(r.__v), f = !1, i = function() {
    f || (f = !0, n ? n(p) : p());
  };
  t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
    i(), t.__c && t.__c();
  };
  var p = function() {
    var l;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); l = r.o.pop(); )
        l.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), e.then(i, i);
}, yn.prototype.render = function(e, t) {
  return this.__b && (this.__v.__k[0] = vi(this.__b), this.__b = null), [ca(zt, null, t.u ? null : e.children), t.u && e.fallback];
};
var _n = function(e, t, r) {
  if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
    for (r = e.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      e.i = r = r[2];
    }
};
(He.prototype = new zt()).u = function(e) {
  var t = this, r = gi(t.__v), n = t.l.get(e);
  return n[0]++, function(f) {
    var i = function() {
      t.props.revealOrder ? (n.push(f), _n(t, e, n)) : f();
    };
    r ? r(i) : i();
  };
}, He.prototype.render = function(e) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t = Xe(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
  for (var r = t.length; r--; )
    this.l.set(t[r], this.i = [1, 0, this.i]);
  return e.children;
}, He.prototype.componentDidUpdate = He.prototype.componentDidMount = function() {
  var e = this;
  e.l.forEach(function(t, r) {
    _n(e, r, t);
  });
};
var wn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
zt.prototype.isReactComponent = {};
var Ma = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Mn = ft.event;
function _r(e, t) {
  e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, { configurable: !1, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(r) {
    this["UNSAFE_" + t] = r;
  } });
}
ft.event = function(e) {
  Mn && (e = Mn(e)), e.persist = function() {
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
var xn = { configurable: !0, get: function() {
  return this.class;
} }, bn = ft.vnode;
ft.vnode = function(e) {
  e.$$typeof = Ma;
  var t = e.type, r = e.props;
  if (t) {
    if (r.class != r.className && (xn.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", xn)), typeof t != "function") {
      var n, f, i;
      for (i in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && t === "select" && (Xe(r.children).forEach(function(p) {
        r.value.indexOf(p.props.value) != -1 && (p.props.selected = !0);
      }), delete r.value), r)
        if (n = wn.test(i))
          break;
      if (n)
        for (i in f = e.props = {}, r)
          f[wn.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = r[i];
    }
    (function(p) {
      var l = e.type, g = e.props;
      if (g && typeof l == "string") {
        var x = {};
        for (var _ in g)
          /^on(Ani|Tra|Tou)/.test(_) && (g[_.toLowerCase()] = g[_], delete g[_]), x[_.toLowerCase()] = _;
        if (x.ondoubleclick && (g.ondblclick = g[x.ondoubleclick], delete g[x.ondoubleclick]), x.onbeforeinput && (g.onbeforeinput = g[x.onbeforeinput], delete g[x.onbeforeinput]), x.onchange && (l === "textarea" || l.toLowerCase() === "input" && !/^fil|che|ra/i.test(g.type))) {
          var R = x.oninput || "oninput";
          g[R] || (g[R] = g[x.onchange], delete g[x.onchange]);
        }
      }
    })(), typeof t == "function" && !t.m && t.prototype && (_r(t.prototype, "componentWillMount"), _r(t.prototype, "componentWillReceiveProps"), _r(t.prototype, "componentWillUpdate"), t.m = !0);
  }
  bn && bn(e);
};
function mi(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
mi(Te);
mi(ha);
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var xa = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function f(g, x, _) {
    this.fn = g, this.context = x, this.once = _ || !1;
  }
  function i(g, x, _, R, I) {
    if (typeof _ != "function")
      throw new TypeError("The listener must be a function");
    var U = new f(_, R || g, I), N = r ? r + x : x;
    return g._events[N] ? g._events[N].fn ? g._events[N] = [g._events[N], U] : g._events[N].push(U) : (g._events[N] = U, g._eventsCount++), g;
  }
  function p(g, x) {
    --g._eventsCount === 0 ? g._events = new n() : delete g._events[x];
  }
  function l() {
    this._events = new n(), this._eventsCount = 0;
  }
  l.prototype.eventNames = function() {
    var x = [], _, R;
    if (this._eventsCount === 0)
      return x;
    for (R in _ = this._events)
      t.call(_, R) && x.push(r ? R.slice(1) : R);
    return Object.getOwnPropertySymbols ? x.concat(Object.getOwnPropertySymbols(_)) : x;
  }, l.prototype.listeners = function(x) {
    var _ = r ? r + x : x, R = this._events[_];
    if (!R)
      return [];
    if (R.fn)
      return [R.fn];
    for (var I = 0, U = R.length, N = new Array(U); I < U; I++)
      N[I] = R[I].fn;
    return N;
  }, l.prototype.listenerCount = function(x) {
    var _ = r ? r + x : x, R = this._events[_];
    return R ? R.fn ? 1 : R.length : 0;
  }, l.prototype.emit = function(x, _, R, I, U, N) {
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
  }, l.prototype.on = function(x, _, R) {
    return i(this, x, _, R, !1);
  }, l.prototype.once = function(x, _, R) {
    return i(this, x, _, R, !0);
  }, l.prototype.removeListener = function(x, _, R, I) {
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
  }, l.prototype.removeAllListeners = function(x) {
    var _;
    return x ? (_ = r ? r + x : x, this._events[_] && p(this, _)) : (this._events = new n(), this._eventsCount = 0), this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
})(xa);
var yi = {}, Kr = {}, Ee = {}, Fr = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(e, t) {
  (function(r) {
    var n = t && !t.nodeType && t, f = e && !e.nodeType && e, i = typeof Ut == "object" && Ut;
    (i.global === i || i.window === i || i.self === i) && (r = i);
    var p, l = 2147483647, g = 36, x = 1, _ = 26, R = 38, I = 700, U = 72, N = 128, W = "-", A = /^xn--/, S = /[^\x20-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, B = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, q = g - x, J = Math.floor, G = String.fromCharCode, it;
    function tt(v) {
      throw RangeError(B[v]);
    }
    function lt(v, D) {
      for (var O = v.length, Y = []; O--; )
        Y[O] = D(v[O]);
      return Y;
    }
    function E(v, D) {
      var O = v.split("@"), Y = "";
      O.length > 1 && (Y = O[0] + "@", v = O[1]), v = v.replace(k, ".");
      var X = v.split("."), c = lt(X, D).join(".");
      return Y + c;
    }
    function o(v) {
      for (var D = [], O = 0, Y = v.length, X, c; O < Y; )
        X = v.charCodeAt(O++), X >= 55296 && X <= 56319 && O < Y ? (c = v.charCodeAt(O++), (c & 64512) == 56320 ? D.push(((X & 1023) << 10) + (c & 1023) + 65536) : (D.push(X), O--)) : D.push(X);
      return D;
    }
    function h(v) {
      return lt(v, function(D) {
        var O = "";
        return D > 65535 && (D -= 65536, O += G(D >>> 10 & 1023 | 55296), D = 56320 | D & 1023), O += G(D), O;
      }).join("");
    }
    function d(v) {
      return v - 48 < 10 ? v - 22 : v - 65 < 26 ? v - 65 : v - 97 < 26 ? v - 97 : g;
    }
    function m(v, D) {
      return v + 22 + 75 * (v < 26) - ((D != 0) << 5);
    }
    function M(v, D, O) {
      var Y = 0;
      for (v = O ? J(v / I) : v >> 1, v += J(v / D); v > q * _ >> 1; Y += g)
        v = J(v / q);
      return J(Y + (q + 1) * v / (v + R));
    }
    function C(v) {
      var D = [], O = v.length, Y, X = 0, c = N, T = U, j, P, $, Q, K, Z, at, V, rt;
      for (j = v.lastIndexOf(W), j < 0 && (j = 0), P = 0; P < j; ++P)
        v.charCodeAt(P) >= 128 && tt("not-basic"), D.push(v.charCodeAt(P));
      for ($ = j > 0 ? j + 1 : 0; $ < O; ) {
        for (Q = X, K = 1, Z = g; $ >= O && tt("invalid-input"), at = d(v.charCodeAt($++)), (at >= g || at > J((l - X) / K)) && tt("overflow"), X += at * K, V = Z <= T ? x : Z >= T + _ ? _ : Z - T, !(at < V); Z += g)
          rt = g - V, K > J(l / rt) && tt("overflow"), K *= rt;
        Y = D.length + 1, T = M(X - Q, Y, Q == 0), J(X / Y) > l - c && tt("overflow"), c += J(X / Y), X %= Y, D.splice(X++, 0, c);
      }
      return h(D);
    }
    function F(v) {
      var D, O, Y, X, c, T, j, P, $, Q, K, Z = [], at, V, rt, y;
      for (v = o(v), at = v.length, D = N, O = 0, c = U, T = 0; T < at; ++T)
        K = v[T], K < 128 && Z.push(G(K));
      for (Y = X = Z.length, X && Z.push(W); Y < at; ) {
        for (j = l, T = 0; T < at; ++T)
          K = v[T], K >= D && K < j && (j = K);
        for (V = Y + 1, j - D > J((l - O) / V) && tt("overflow"), O += (j - D) * V, D = j, T = 0; T < at; ++T)
          if (K = v[T], K < D && ++O > l && tt("overflow"), K == D) {
            for (P = O, $ = g; Q = $ <= c ? x : $ >= c + _ ? _ : $ - c, !(P < Q); $ += g)
              y = P - Q, rt = g - Q, Z.push(
                G(m(Q + y % rt, 0))
              ), P = J(y / rt);
            Z.push(G(m(P, 0))), c = M(O, V, Y == X), O = 0, ++Y;
          }
        ++O, ++D;
      }
      return Z.join("");
    }
    function w(v) {
      return E(v, function(D) {
        return A.test(D) ? C(D.slice(4).toLowerCase()) : D;
      });
    }
    function a(v) {
      return E(v, function(D) {
        return S.test(D) ? "xn--" + F(D) : D;
      });
    }
    if (p = {
      version: "1.3.2",
      ucs2: {
        decode: o,
        encode: h
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
})(Fr, Fr.exports);
var ba = {
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
}, Re = {};
function Ea(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var Aa = function(e, t, r, n) {
  t = t || "&", r = r || "=";
  var f = {};
  if (typeof e != "string" || e.length === 0)
    return f;
  var i = /\+/g;
  e = e.split(t);
  var p = 1e3;
  n && typeof n.maxKeys == "number" && (p = n.maxKeys);
  var l = e.length;
  p > 0 && l > p && (l = p);
  for (var g = 0; g < l; ++g) {
    var x = e[g].replace(i, "%20"), _ = x.indexOf(r), R, I, U, N;
    _ >= 0 ? (R = x.substr(0, _), I = x.substr(_ + 1)) : (R = x, I = ""), U = decodeURIComponent(R), N = decodeURIComponent(I), Ea(f, U) ? Array.isArray(f[U]) ? f[U].push(N) : f[U] = [f[U], N] : f[U] = N;
  }
  return f;
}, Ce = function(e) {
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
}, Ca = function(e, t, r, n) {
  return t = t || "&", r = r || "=", e === null && (e = void 0), typeof e == "object" ? Object.keys(e).map(function(f) {
    var i = encodeURIComponent(Ce(f)) + r;
    return Array.isArray(e[f]) ? e[f].map(function(p) {
      return i + encodeURIComponent(Ce(p));
    }).join(t) : i + encodeURIComponent(Ce(e[f]));
  }).join(t) : n ? encodeURIComponent(Ce(n)) + r + encodeURIComponent(Ce(e)) : "";
};
Re.decode = Re.parse = Aa;
Re.encode = Re.stringify = Ca;
var La = Fr.exports, qt = ba;
Ee.parse = Ne;
Ee.resolve = Oa;
Ee.resolveObject = Pa;
Ee.format = Ua;
Ee.Url = Ht;
function Ht() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Ba = /^([a-z0-9.+-]+:)/i, Sa = /:[0-9]*$/, ka = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Fa = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Ra = ["{", "}", "|", "\\", "^", "`"].concat(Fa), Rr = ["'"].concat(Ra), En = ["%", "/", "?", ";", "#"].concat(Rr), An = ["/", "?", "#"], Ta = 255, Cn = /^[+a-z0-9A-Z_-]{0,63}$/, Ia = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Na = {
  javascript: !0,
  "javascript:": !0
}, Tr = {
  javascript: !0,
  "javascript:": !0
}, me = {
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
}, Ir = Re;
function Ne(e, t, r) {
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
  var l = e;
  if (l = l.trim(), !r && e.split("#").length === 1) {
    var g = ka.exec(l);
    if (g)
      return this.path = l, this.href = l, this.pathname = g[1], g[2] ? (this.search = g[2], t ? this.query = Ir.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
  }
  var x = Ba.exec(l);
  if (x) {
    x = x[0];
    var _ = x.toLowerCase();
    this.protocol = _, l = l.substr(x.length);
  }
  if (r || x || l.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var R = l.substr(0, 2) === "//";
    R && !(x && Tr[x]) && (l = l.substr(2), this.slashes = !0);
  }
  if (!Tr[x] && (R || x && !me[x])) {
    for (var I = -1, U = 0; U < An.length; U++) {
      var N = l.indexOf(An[U]);
      N !== -1 && (I === -1 || N < I) && (I = N);
    }
    var W, A;
    I === -1 ? A = l.lastIndexOf("@") : A = l.lastIndexOf("@", I), A !== -1 && (W = l.slice(0, A), l = l.slice(A + 1), this.auth = decodeURIComponent(W)), I = -1;
    for (var U = 0; U < En.length; U++) {
      var N = l.indexOf(En[U]);
      N !== -1 && (I === -1 || N < I) && (I = N);
    }
    I === -1 && (I = l.length), this.host = l.slice(0, I), l = l.slice(I), this.parseHost(), this.hostname = this.hostname || "";
    var S = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!S)
      for (var k = this.hostname.split(/\./), U = 0, B = k.length; U < B; U++) {
        var q = k[U];
        if (!!q && !q.match(Cn)) {
          for (var J = "", G = 0, it = q.length; G < it; G++)
            q.charCodeAt(G) > 127 ? J += "x" : J += q[G];
          if (!J.match(Cn)) {
            var tt = k.slice(0, U), lt = k.slice(U + 1), E = q.match(Ia);
            E && (tt.push(E[1]), lt.unshift(E[2])), lt.length && (l = "/" + lt.join(".") + l), this.hostname = tt.join(".");
            break;
          }
        }
      }
    this.hostname.length > Ta ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), S || (this.hostname = La.toASCII(this.hostname));
    var o = this.port ? ":" + this.port : "", h = this.hostname || "";
    this.host = h + o, this.href += this.host, S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), l[0] !== "/" && (l = "/" + l));
  }
  if (!Na[_])
    for (var U = 0, B = Rr.length; U < B; U++) {
      var d = Rr[U];
      if (l.indexOf(d) !== -1) {
        var m = encodeURIComponent(d);
        m === d && (m = escape(d)), l = l.split(d).join(m);
      }
    }
  var M = l.indexOf("#");
  M !== -1 && (this.hash = l.substr(M), l = l.slice(0, M));
  var C = l.indexOf("?");
  if (C !== -1 ? (this.search = l.substr(C), this.query = l.substr(C + 1), t && (this.query = Ir.parse(this.query)), l = l.slice(0, C)) : t && (this.search = "", this.query = {}), l && (this.pathname = l), me[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var o = this.pathname || "", F = this.search || "";
    this.path = o + F;
  }
  return this.href = this.format(), this;
};
function Ua(e) {
  return qt.isString(e) && (e = Ne(e)), e instanceof Ht ? e.format() : Ht.prototype.format.call(e);
}
Ht.prototype.format = function() {
  var e = this.auth || "";
  e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
  var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", f = !1, i = "";
  this.host ? f = e + this.host : this.hostname && (f = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (f += ":" + this.port)), this.query && qt.isObject(this.query) && Object.keys(this.query).length && (i = Ir.stringify(this.query));
  var p = this.search || i && "?" + i || "";
  return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || me[t]) && f !== !1 ? (f = "//" + (f || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : f || (f = ""), n && n.charAt(0) !== "#" && (n = "#" + n), p && p.charAt(0) !== "?" && (p = "?" + p), r = r.replace(/[?#]/g, function(l) {
    return encodeURIComponent(l);
  }), p = p.replace("#", "%23"), t + f + r + p + n;
};
function Oa(e, t) {
  return Ne(e, !1, !0).resolve(t);
}
Ht.prototype.resolve = function(e) {
  return this.resolveObject(Ne(e, !1, !0)).format();
};
function Pa(e, t) {
  return e ? Ne(e, !1, !0).resolveObject(t) : t;
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
    for (var p = Object.keys(e), l = 0; l < p.length; l++) {
      var g = p[l];
      g !== "protocol" && (r[g] = e[g]);
    }
    return me[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (e.protocol && e.protocol !== r.protocol) {
    if (!me[e.protocol]) {
      for (var x = Object.keys(e), _ = 0; _ < x.length; _++) {
        var R = x[_];
        r[R] = e[R];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = e.protocol, !e.host && !Tr[e.protocol]) {
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
  var N = r.pathname && r.pathname.charAt(0) === "/", W = e.host || e.pathname && e.pathname.charAt(0) === "/", A = W || N || r.host && e.pathname, S = A, k = r.pathname && r.pathname.split("/") || [], B = e.pathname && e.pathname.split("/") || [], q = r.protocol && !me[r.protocol];
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
  var e = this.host, t = Sa.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
var Da = function() {
  function e(t) {
    this.type = t, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  }
  return e;
}();
Yr.ProgressEvent = Da;
var Ae = {}, Qe = Ut && Ut.__extends || function() {
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
Object.defineProperty(Ae, "__esModule", { value: !0 });
var Ha = function(e) {
  Qe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ae.SecurityError = Ha;
var qa = function(e) {
  Qe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ae.InvalidStateError = qa;
var ja = function(e) {
  Qe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ae.NetworkError = ja;
var $a = function(e) {
  Qe(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(Error);
Ae.SyntaxError = $a;
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
var za = function() {
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
Ue.XMLHttpRequestEventTarget = za;
var Jr = {}, Za = Ut && Ut.__extends || function() {
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
Object.defineProperty(Jr, "__esModule", { value: !0 });
var Wa = Ue, Ka = function(e) {
  Za(t, e);
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
}(Wa.XMLHttpRequestEventTarget);
Jr.XMLHttpRequestUpload = Ka;
var je = {};
(function() {
  function e(f, i, p, l) {
    return this instanceof e ? (this.domain = f || void 0, this.path = i || "/", this.secure = !!p, this.script = !!l, this) : new e(f, i, p, l);
  }
  e.All = Object.freeze(/* @__PURE__ */ Object.create(null)), je.CookieAccessInfo = e;
  function t(f, i, p) {
    return f instanceof t ? f : this instanceof t ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(p || "/"), this.explicit_path = !1, this.domain = i || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, f && this.parse(f, i, p), this) : new t(f, i, p);
  }
  je.Cookie = t, t.prototype.toString = function() {
    var i = [this.name + "=" + this.value];
    return this.expiration_date !== 1 / 0 && i.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && i.push("domain=" + this.domain), this.path && i.push("path=" + this.path), this.secure && i.push("secure"), this.noscript && i.push("httponly"), i.join("; ");
  }, t.prototype.toValueString = function() {
    return this.name + "=" + this.value;
  };
  var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
  t.prototype.parse = function(i, p, l) {
    if (this instanceof t) {
      var g = i.split(";").filter(function(U) {
        return !!U;
      }), x, _ = g[0].match(/([^=]+)=([\s\S]*)/);
      if (!_) {
        console.warn("Invalid cookie header encountered. Header: '" + i + "'");
        return;
      }
      var R = _[1], I = _[2];
      if (typeof R != "string" || R.length === 0 || typeof I != "string") {
        console.warn("Unable to extract values from cookie header. Cookie: '" + i + "'");
        return;
      }
      for (this.name = R, this.value = I, x = 1; x < g.length; x += 1)
        switch (_ = g[x].match(/([^=]+)(?:=([\s\S]*))?/), R = _[1].trim().toLowerCase(), I = _[2], R) {
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
      return this.explicit_path || (this.path = l || "/"), this.explicit_domain || (this.domain = p), this;
    }
    return new t().parse(i, p, l);
  }, t.prototype.matches = function(i) {
    return i === e.All ? !0 : !(this.noscript && i.script || this.secure && !i.secure || !this.collidesWith(i));
  }, t.prototype.collidesWith = function(i) {
    if (this.path && !i.path || this.domain && !i.domain || this.path && i.path.indexOf(this.path) !== 0 || this.explicit_path && i.path.indexOf(this.path) !== 0)
      return !1;
    var p = i.domain && i.domain.replace(/^[\.]/, ""), l = this.domain && this.domain.replace(/^[\.]/, "");
    if (l === p)
      return !0;
    if (l) {
      if (!this.explicit_domain)
        return !1;
      var g = p.indexOf(l);
      return !(g === -1 || g !== p.length - l.length);
    }
    return !0;
  };
  function n() {
    var f, i, p;
    return this instanceof n ? (f = /* @__PURE__ */ Object.create(null), this.setCookie = function(g, x, _) {
      var R, I;
      if (g = new t(g, x, _), R = g.expiration_date <= Date.now(), f[g.name] !== void 0) {
        for (i = f[g.name], I = 0; I < i.length; I += 1)
          if (p = i[I], p.collidesWith(g))
            return R ? (i.splice(I, 1), i.length === 0 && delete f[g.name], !1) : (i[I] = g, g);
        return R ? !1 : (i.push(g), g);
      }
      return R ? !1 : (f[g.name] = [g], f[g.name]);
    }, this.getCookie = function(g, x) {
      var _, R;
      if (i = f[g], !!i)
        for (R = 0; R < i.length; R += 1) {
          if (_ = i[R], _.expiration_date <= Date.now()) {
            i.length === 0 && delete f[_.name];
            continue;
          }
          if (_.matches(x))
            return _;
        }
    }, this.getCookies = function(g) {
      var x = [], _, R;
      for (_ in f)
        R = this.getCookie(_, g), R && x.push(R);
      return x.toString = function() {
        return x.join(":");
      }, x.toValueString = function() {
        return x.map(function(U) {
          return U.toValueString();
        }).join("; ");
      }, x;
    }, this) : new n();
  }
  je.CookieJar = n, n.prototype.setCookies = function(i, p, l) {
    i = Array.isArray(i) ? i : i.split(r);
    var g = [], x, _;
    for (i = i.map(function(R) {
      return new t(R, p, l);
    }), x = 0; x < i.length; x += 1)
      _ = i[x], this.setCookie(_, p, l) && g.push(_);
    return g;
  };
})();
var Ya = Ut && Ut.__extends || function() {
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
}(), Ja = Ut && Ut.__assign || Object.assign || function(e) {
  for (var t, r = 1, n = arguments.length; r < n; r++) {
    t = arguments[r];
    for (var f in t)
      Object.prototype.hasOwnProperty.call(t, f) && (e[f] = t[f]);
  }
  return e;
};
Object.defineProperty(Kr, "__esModule", { value: !0 });
var Nr = We, _i = We, Ln = We, wr = Ee, Bn = Yr, qe = Ae, Va = Ue, Sn = Jr, kn = je, tr = function(e) {
  Ya(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this) || this;
    return n.UNSENT = t.UNSENT, n.OPENED = t.OPENED, n.HEADERS_RECEIVED = t.HEADERS_RECEIVED, n.LOADING = t.LOADING, n.DONE = t.DONE, n.onreadystatechange = null, n.readyState = t.UNSENT, n.response = null, n.responseText = "", n.responseType = "", n.status = 0, n.statusText = "", n.timeout = 0, n.upload = new Sn.XMLHttpRequestUpload(), n.responseUrl = "", n.withCredentials = !1, n._method = null, n._url = null, n._sync = !1, n._headers = {}, n._loweredHeaders = {}, n._mimeOverride = null, n._request = null, n._response = null, n._responseParts = null, n._responseHeaders = null, n._aborting = null, n._error = null, n._loadedBytes = 0, n._totalBytes = 0, n._lengthComputable = !1, n._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, n._restrictedHeaders = {
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
    }, n._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, n._userAgent = "Mozilla/5.0 (" + Ln.type() + " " + Ln.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, n._anonymous = r.anon || !1, n;
  }
  return t.prototype.open = function(r, n, f, i, p) {
    if (f === void 0 && (f = !0), r = r.toUpperCase(), this._restrictedMethods[r])
      throw new t.SecurityError("HTTP method " + r + " is not allowed in XHR");
    var l = this._parseUrl(n, i, p);
    this.readyState === t.HEADERS_RECEIVED || (this.readyState, t.LOADING), this._method = r, this._url = l, this._sync = !f, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(t.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
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
        var n = wr.parse(r.baseUrl, !1, !0);
        if (!n.protocol)
          throw new t.SyntaxError("baseUrl must be an absolute URL");
      }
      this.nodejsBaseUrl = r.baseUrl;
    }
  }, t.nodejsSet = function(r) {
    t.prototype.nodejsSet(r);
  }, t.prototype._setReadyState = function(r) {
    this.readyState = r, this.dispatchEvent(new Bn.ProgressEvent("readystatechange"));
  }, t.prototype._sendFile = function(r) {
    throw new Error("Protocol file: not implemented");
  }, t.prototype._sendHttp = function(r) {
    if (this._sync)
      throw new Error("Synchronous XHR processing not implemented");
    r && (this._method === "GET" || this._method === "HEAD") ? (console.warn("Discarding entity body for " + this._method + " requests"), r = null) : r = r || "", this.upload._setData(r), this._finalizeHeaders(), this._sendHxxpRequest();
  }, t.prototype._sendHxxpRequest = function() {
    var r = this;
    if (this.withCredentials) {
      var n = t.cookieJar.getCookies(kn.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === "https:")).toValueString();
      this._headers.cookie = this._headers.cookie2 = n;
    }
    var f = this._url.protocol === "http:" ? [Nr, this.nodejsHttpAgent] : [_i, this.nodejsHttpsAgent], i = f[0], p = f[1], l = i.request.bind(i), g = l({
      hostname: this._url.hostname,
      port: +this._url.port,
      path: this._url.path,
      auth: this._url.auth,
      method: this._method,
      headers: this._headers,
      agent: p
    });
    this._request = g, this.timeout && g.setTimeout(this.timeout, function() {
      return r._onHttpTimeout(g);
    }), g.on("response", function(x) {
      return r._onHttpResponse(g, x);
    }), g.on("error", function(x) {
      return r._onHttpRequestError(g, x);
    }), this.upload._startUpload(g), this._request === g && this._dispatchProgress("loadstart");
  }, t.prototype._finalizeHeaders = function() {
    this._headers = Ja({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
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
      }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = Nr.STATUS_CODES[this.status], this._parseResponseHeaders(n);
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
    var i = this.nodejsBaseUrl == null ? r : wr.resolve(this.nodejsBaseUrl, r), p = wr.parse(i, !1, !0);
    p.hash = null;
    var l = (p.auth || "").split(":"), g = l[0], x = l[1];
    return (g || x || n || f) && (p.auth = (n || g || "") + ":" + (f || x || "")), p;
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
  }, t.ProgressEvent = Bn.ProgressEvent, t.InvalidStateError = qe.InvalidStateError, t.NetworkError = qe.NetworkError, t.SecurityError = qe.SecurityError, t.SyntaxError = qe.SyntaxError, t.XMLHttpRequestUpload = Sn.XMLHttpRequestUpload, t.UNSENT = 0, t.OPENED = 1, t.HEADERS_RECEIVED = 2, t.LOADING = 3, t.DONE = 4, t.cookieJar = kn.CookieJar(), t;
}(Va.XMLHttpRequestEventTarget);
Kr.XMLHttpRequest = tr;
tr.prototype.nodejsHttpAgent = Nr.globalAgent;
tr.prototype.nodejsHttpsAgent = _i.globalAgent;
tr.prototype.nodejsBaseUrl = null;
(function(e) {
  function t(n) {
    for (var f in n)
      e.hasOwnProperty(f) || (e[f] = n[f]);
  }
  Object.defineProperty(e, "__esModule", { value: !0 }), t(Kr);
  var r = Ue;
  e.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
})(yi);
Ui("XMLHttpRequest") || yi.XMLHttpRequest;
require("web3-provider-engine");
require("web3-provider-engine/subproviders/cache");
require("web3-provider-engine/subproviders/fixture");
require("web3-provider-engine/subproviders/filters");
require("web3-provider-engine/subproviders/hooked-wallet");
require("web3-provider-engine/subproviders/nonce-tracker");
require("web3-provider-engine/subproviders/subscriptions");
var Ga = ((e) => (e.Undefined = "", e.Injected = "Injected", e.WalletConnect = "WalletConnect", e))(Ga || {});
export {
  es as C,
  rs as M,
  ns as W,
  Ga as a,
  is as b
};
//# sourceMappingURL=index.es.1a676390.mjs.map
