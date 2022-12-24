import { j as at, t as ls, a as zt, I as Mo, g as fs, F as Or, b as cs } from "./index.a9623ceb.mjs";
import "ethers";
import { Button as ps } from "antd";
const fl = ({
  account: t,
  onClick: e,
  walletIcon: r,
  walletName: n,
  labelText: a
}) => {
  let o = /* @__PURE__ */ at("span", {
    className: "cnn",
    children: a
  }), p = "connect-wallet-button";
  return t && (o = /* @__PURE__ */ at("span", {
    className: "acc",
    children: ls(t)
  }), p = `${p} active`), /* @__PURE__ */ zt("div", {
    onClick: t ? void 0 : e,
    className: p,
    children: [r, /* @__PURE__ */ at("span", {
      className: "wallet-name",
      children: n
    }), o]
  });
}, ds = () => /* @__PURE__ */ zt("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ at("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ at("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), cl = /* @__PURE__ */ at(Mo, {
  component: ds
}), ms = () => /* @__PURE__ */ at("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ at("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), pl = /* @__PURE__ */ at(Mo, {
  component: ms
}), gn = {};
var gs = ((t) => (t.Undefined = "", t.Injected = "Injected", t.WalletConnect = "WalletConnect", t))(gs || {}), Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yn(t) {
  var e = t.default;
  if (typeof e == "function") {
    var r = function() {
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, a.get ? a : { enumerable: !0, get: function() {
      return t[n];
    } });
  }), r;
}
var vn = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 });
var Eo = pt.getLocalStorage = Po = pt.getLocalStorageOrThrow = To = pt.getCrypto = Oo = pt.getCryptoOrThrow = xo = pt.getLocation = No = pt.getLocationOrThrow = So = pt.getNavigator = Bo = pt.getNavigatorOrThrow = Co = pt.getDocument = ko = pt.getDocumentOrThrow = Ao = pt.getFromWindowOrThrow = Lo = pt.getFromWindow = void 0;
function be(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
var Lo = pt.getFromWindow = be;
function Pe(t) {
  const e = be(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
var Ao = pt.getFromWindowOrThrow = Pe;
function ys() {
  return Pe("document");
}
var ko = pt.getDocumentOrThrow = ys;
function vs() {
  return be("document");
}
var Co = pt.getDocument = vs;
function _s() {
  return Pe("navigator");
}
var Bo = pt.getNavigatorOrThrow = _s;
function ws() {
  return be("navigator");
}
var So = pt.getNavigator = ws;
function bs() {
  return Pe("location");
}
var No = pt.getLocationOrThrow = bs;
function Ms() {
  return be("location");
}
var xo = pt.getLocation = Ms;
function Es() {
  return Pe("crypto");
}
var Oo = pt.getCryptoOrThrow = Es;
function Ls() {
  return be("crypto");
}
var To = pt.getCrypto = Ls;
function As() {
  return Pe("localStorage");
}
var Po = pt.getLocalStorageOrThrow = As;
function ks() {
  return be("localStorage");
}
Eo = pt.getLocalStorage = ks, Object.defineProperty(vn, "__esModule", { value: !0 });
var Uo = vn.getWindowMetadata = void 0;
const Un = pt;
function Cs() {
  let t, e;
  try {
    t = Un.getDocumentOrThrow(), e = Un.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const _ = t.getElementsByTagName("link"), x = [];
    for (let F = 0; F < _.length; F++) {
      const O = _[F], I = O.getAttribute("rel");
      if (I && I.toLowerCase().indexOf("icon") > -1) {
        const P = O.getAttribute("href");
        if (P)
          if (P.toLowerCase().indexOf("https:") === -1 && P.toLowerCase().indexOf("http:") === -1 && P.indexOf("//") !== 0) {
            let C = e.protocol + "//" + e.host;
            if (P.indexOf("/") === 0)
              C += P;
            else {
              const B = e.pathname.split("/");
              B.pop(), C += B.join("/") + "/" + P;
            }
            x.push(C);
          } else if (P.indexOf("//") === 0) {
            const C = e.protocol + P;
            x.push(C);
          } else
            x.push(P);
      }
    }
    return x;
  }
  function n(..._) {
    const x = t.getElementsByTagName("meta");
    for (let F = 0; F < x.length; F++) {
      const O = x[F], I = ["itemprop", "property", "name"].map((P) => O.getAttribute(P)).filter((P) => P ? _.includes(P) : !1);
      if (I.length && I) {
        const P = O.getAttribute("content");
        if (P)
          return P;
      }
    }
    return "";
  }
  function a() {
    let _ = n("name", "og:site_name", "og:title", "twitter:title");
    return _ || (_ = t.title), _;
  }
  function o() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const p = a(), h = o(), y = e.origin, M = r();
  return { description: h, url: y, icons: M, name: p };
}
Uo = vn.getWindowMetadata = Cs;
var Bs = function() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++)
    for (var o = arguments[e], p = 0, h = o.length; p < h; p++, a++)
      n[a] = o[p];
  return n;
}, Ss = function() {
  function t(e, r, n) {
    this.name = e, this.version = r, this.os = n, this.type = "browser";
  }
  return t;
}(), Ns = function() {
  function t(e) {
    this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
  }
  return t;
}(), xs = function() {
  function t(e, r, n, a) {
    this.name = e, this.version = r, this.os = n, this.bot = a, this.type = "bot-device";
  }
  return t;
}(), Os = function() {
  function t() {
    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
  }
  return t;
}(), Ts = function() {
  function t() {
    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
  }
  return t;
}(), Ps = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Us = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Rn = 3, Rs = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FBAV\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["searchbot", Ps]], jn = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
function js(t) {
  return t ? In(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Ts() : typeof navigator < "u" ? In(navigator.userAgent) : Hs();
}
function Is(t) {
  return t !== "" && Rs.reduce(function(e, r) {
    var n = r[0], a = r[1];
    if (e)
      return e;
    var o = a.exec(t);
    return !!o && [n, o];
  }, !1);
}
function In(t) {
  var e = Is(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Os();
  var a = n[1] && n[1].split(/[._]/).slice(0, 3);
  a ? a.length < Rn && (a = Bs(a, Fs(Rn - a.length))) : a = [];
  var o = a.join("."), p = Ds(t), h = Us.exec(t);
  return h && h[1] ? new xs(r, o, p, h[1]) : new Ss(r, o, p);
}
function Ds(t) {
  for (var e = 0, r = jn.length; e < r; e++) {
    var n = jn[e], a = n[0], o = n[1], p = o.exec(t);
    if (p)
      return a;
  }
  return null;
}
function Hs() {
  var t = typeof process < "u" && process.version;
  return t ? new Ns(process.version.slice(1)) : null;
}
function Fs(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
function _n(t) {
  return js(t);
}
function dr() {
  const t = _n();
  return t && t.os ? t.os : void 0;
}
function Ro() {
  const t = dr();
  return t ? t.toLowerCase().includes("android") : !1;
}
function jo() {
  const t = dr();
  return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}
function qs() {
  return dr() ? Ro() || jo() : !1;
}
function Io() {
  const t = _n();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function Ws() {
  return !Io() && !!Ho();
}
const Do = Lo, Zs = Ao, $s = ko, zs = Co, Js = Bo, Ho = So, Ys = No, Vs = xo, Ks = Oo, Gs = To, Xs = Po, mr = Eo;
function Qs() {
  return Uo();
}
function ta(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function ea(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
const Fo = ta, qo = ea;
function Wo(t, e) {
  const r = qo(e), n = mr();
  n && n.setItem(t, r);
}
function ra(t) {
  let e = null, r = null;
  const n = mr();
  return n && (r = n.getItem(t)), e = r && Fo(r), e;
}
function na(t) {
  const e = mr();
  e && e.removeItem(t);
}
const Zo = "WALLETCONNECT_DEEPLINK_CHOICE";
function oa(t, e) {
  const r = encodeURIComponent(t);
  return e.universalLink ? `${e.universalLink}/wc?uri=${r}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${r}` : "";
}
function ia(t) {
  const e = t.href.split("?")[0];
  Wo(Zo, Object.assign(Object.assign({}, t), { href: e }));
}
function $o(t, e) {
  return t.filter((r) => r.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function sa(t, e) {
  let r = t;
  return e && (r = e.map((n) => $o(t, n)).filter(Boolean)), r;
}
const zo = "https://registry.walletconnect.com";
function aa() {
  return zo + "/api/v2/wallets";
}
function ua() {
  return zo + "/api/v2/dapps";
}
function Jo(t, e = "mobile") {
  var r;
  return { name: t.name || "", shortName: t.metadata.shortName || "", color: t.metadata.colors.primary || "", logo: (r = t.image_url.sm) !== null && r !== void 0 ? r : "", universalLink: t[e].universal || "", deepLink: t[e].native || "" };
}
function ha(t, e = "mobile") {
  return Object.values(t).filter((r) => !!r[e].universal || !!r[e].native).map((r) => Jo(r, e));
}
var la = Object.freeze({ __proto__: null, detectEnv: _n, detectOS: dr, isAndroid: Ro, isIOS: jo, isMobile: qs, isNode: Io, isBrowser: Ws, getFromWindow: Do, getFromWindowOrThrow: Zs, getDocumentOrThrow: $s, getDocument: zs, getNavigatorOrThrow: Js, getNavigator: Ho, getLocationOrThrow: Ys, getLocation: Vs, getCryptoOrThrow: Ks, getCrypto: Gs, getLocalStorageOrThrow: Xs, getLocalStorage: mr, getClientMeta: Qs, safeJsonParse: Fo, safeJsonStringify: qo, setLocal: Wo, getLocal: ra, removeLocal: na, mobileLinkChoiceKey: Zo, formatIOSMobile: oa, saveMobileLinkInfo: ia, getMobileRegistryEntry: $o, getMobileLinkRegistry: sa, getWalletRegistryUrl: aa, getDappRegistryUrl: ua, formatMobileRegistryEntry: Jo, formatMobileRegistry: ha }), Yo = { exports: {} }, fa = {}, ca = Object.freeze({ __proto__: null, default: fa }), pa = yn(ca);
(function(t) {
  (function(e, r) {
    function n(i, f) {
      if (!i)
        throw new Error(f || "Assertion failed");
    }
    function a(i, f) {
      i.super_ = f;
      var d = function() {
      };
      d.prototype = f.prototype, i.prototype = new d(), i.prototype.constructor = i;
    }
    function o(i, f, d) {
      if (o.isBN(i))
        return i;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, i !== null && ((f === "le" || f === "be") && (d = f, f = 10), this._init(i || 0, f || 10, d || "be"));
    }
    typeof e == "object" ? e.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
    var p;
    try {
      p = pa.Buffer;
    } catch {
    }
    o.isBN = function(i) {
      return i instanceof o ? !0 : i !== null && typeof i == "object" && i.constructor.wordSize === o.wordSize && Array.isArray(i.words);
    }, o.max = function(i, f) {
      return i.cmp(f) > 0 ? i : f;
    }, o.min = function(i, f) {
      return i.cmp(f) < 0 ? i : f;
    }, o.prototype._init = function(i, f, d) {
      if (typeof i == "number")
        return this._initNumber(i, f, d);
      if (typeof i == "object")
        return this._initArray(i, f, d);
      f === "hex" && (f = 16), n(f === (f | 0) && f >= 2 && f <= 36), i = i.toString().replace(/\s+/g, "");
      var g = 0;
      i[0] === "-" && g++, f === 16 ? this._parseHex(i, g) : this._parseBase(i, f, g), i[0] === "-" && (this.negative = 1), this.strip(), d === "le" && this._initArray(this.toArray(), f, d);
    }, o.prototype._initNumber = function(i, f, d) {
      i < 0 && (this.negative = 1, i = -i), i < 67108864 ? (this.words = [i & 67108863], this.length = 1) : i < 4503599627370496 ? (this.words = [i & 67108863, i / 67108864 & 67108863], this.length = 2) : (n(i < 9007199254740992), this.words = [i & 67108863, i / 67108864 & 67108863, 1], this.length = 3), d === "le" && this._initArray(this.toArray(), f, d);
    }, o.prototype._initArray = function(i, f, d) {
      if (n(typeof i.length == "number"), i.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(i.length / 3), this.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        this.words[g] = 0;
      var b, L, A = 0;
      if (d === "be")
        for (g = i.length - 1, b = 0; g >= 0; g -= 3)
          L = i[g] | i[g - 1] << 8 | i[g - 2] << 16, this.words[b] |= L << A & 67108863, this.words[b + 1] = L >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, b++);
      else if (d === "le")
        for (g = 0, b = 0; g < i.length; g += 3)
          L = i[g] | i[g + 1] << 8 | i[g + 2] << 16, this.words[b] |= L << A & 67108863, this.words[b + 1] = L >>> 26 - A & 67108863, A += 24, A >= 26 && (A -= 26, b++);
      return this.strip();
    };
    function h(i, f, d) {
      for (var g = 0, b = Math.min(i.length, d), L = f; L < b; L++) {
        var A = i.charCodeAt(L) - 48;
        g <<= 4, A >= 49 && A <= 54 ? g |= A - 49 + 10 : A >= 17 && A <= 22 ? g |= A - 17 + 10 : g |= A & 15;
      }
      return g;
    }
    o.prototype._parseHex = function(i, f) {
      this.length = Math.ceil((i.length - f) / 6), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        this.words[d] = 0;
      var g, b, L = 0;
      for (d = i.length - 6, g = 0; d >= f; d -= 6)
        b = h(i, d, d + 6), this.words[g] |= b << L & 67108863, this.words[g + 1] |= b >>> 26 - L & 4194303, L += 24, L >= 26 && (L -= 26, g++);
      d + 6 !== f && (b = h(i, f, d + 6), this.words[g] |= b << L & 67108863, this.words[g + 1] |= b >>> 26 - L & 4194303), this.strip();
    };
    function y(i, f, d, g) {
      for (var b = 0, L = Math.min(i.length, d), A = f; A < L; A++) {
        var v = i.charCodeAt(A) - 48;
        b *= g, v >= 49 ? b += v - 49 + 10 : v >= 17 ? b += v - 17 + 10 : b += v;
      }
      return b;
    }
    o.prototype._parseBase = function(i, f, d) {
      this.words = [0], this.length = 1;
      for (var g = 0, b = 1; b <= 67108863; b *= f)
        g++;
      g--, b = b / f | 0;
      for (var L = i.length - d, A = L % g, v = Math.min(L, L - A) + d, u = 0, w = d; w < v; w += g)
        u = y(i, w, w + g, f), this.imuln(b), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
      if (A !== 0) {
        var D = 1;
        for (u = y(i, w, i.length, f), w = 0; w < A; w++)
          D *= f;
        this.imuln(D), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
      }
    }, o.prototype.copy = function(i) {
      i.words = new Array(this.length);
      for (var f = 0; f < this.length; f++)
        i.words[f] = this.words[f];
      i.length = this.length, i.negative = this.negative, i.red = this.red;
    }, o.prototype.clone = function() {
      var i = new o(null);
      return this.copy(i), i;
    }, o.prototype._expand = function(i) {
      for (; this.length < i; )
        this.words[this.length++] = 0;
      return this;
    }, o.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, o.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, o.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var M = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], _ = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], x = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o.prototype.toString = function(i, f) {
      i = i || 10, f = f | 0 || 1;
      var d;
      if (i === 16 || i === "hex") {
        d = "";
        for (var g = 0, b = 0, L = 0; L < this.length; L++) {
          var A = this.words[L], v = ((A << g | b) & 16777215).toString(16);
          b = A >>> 24 - g & 16777215, b !== 0 || L !== this.length - 1 ? d = M[6 - v.length] + v + d : d = v + d, g += 2, g >= 26 && (g -= 26, L--);
        }
        for (b !== 0 && (d = b.toString(16) + d); d.length % f !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      if (i === (i | 0) && i >= 2 && i <= 36) {
        var u = _[i], w = x[i];
        d = "";
        var D = this.clone();
        for (D.negative = 0; !D.isZero(); ) {
          var U = D.modn(w).toString(i);
          D = D.idivn(w), D.isZero() ? d = U + d : d = M[u - U.length] + U + d;
        }
        for (this.isZero() && (d = "0" + d); d.length % f !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      n(!1, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function() {
      var i = this.words[0];
      return this.length === 2 ? i += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? i += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -i : i;
    }, o.prototype.toJSON = function() {
      return this.toString(16);
    }, o.prototype.toBuffer = function(i, f) {
      return n(typeof p < "u"), this.toArrayLike(p, i, f);
    }, o.prototype.toArray = function(i, f) {
      return this.toArrayLike(Array, i, f);
    }, o.prototype.toArrayLike = function(i, f, d) {
      var g = this.byteLength(), b = d || Math.max(1, g);
      n(g <= b, "byte array longer than desired length"), n(b > 0, "Requested array length <= 0"), this.strip();
      var L = f === "le", A = new i(b), v, u, w = this.clone();
      if (L) {
        for (u = 0; !w.isZero(); u++)
          v = w.andln(255), w.iushrn(8), A[u] = v;
        for (; u < b; u++)
          A[u] = 0;
      } else {
        for (u = 0; u < b - g; u++)
          A[u] = 0;
        for (u = 0; !w.isZero(); u++)
          v = w.andln(255), w.iushrn(8), A[b - u - 1] = v;
      }
      return A;
    }, Math.clz32 ? o.prototype._countBits = function(i) {
      return 32 - Math.clz32(i);
    } : o.prototype._countBits = function(i) {
      var f = i, d = 0;
      return f >= 4096 && (d += 13, f >>>= 13), f >= 64 && (d += 7, f >>>= 7), f >= 8 && (d += 4, f >>>= 4), f >= 2 && (d += 2, f >>>= 2), d + f;
    }, o.prototype._zeroBits = function(i) {
      if (i === 0)
        return 26;
      var f = i, d = 0;
      return (f & 8191) === 0 && (d += 13, f >>>= 13), (f & 127) === 0 && (d += 7, f >>>= 7), (f & 15) === 0 && (d += 4, f >>>= 4), (f & 3) === 0 && (d += 2, f >>>= 2), (f & 1) === 0 && d++, d;
    }, o.prototype.bitLength = function() {
      var i = this.words[this.length - 1], f = this._countBits(i);
      return (this.length - 1) * 26 + f;
    };
    function F(i) {
      for (var f = new Array(i.bitLength()), d = 0; d < f.length; d++) {
        var g = d / 26 | 0, b = d % 26;
        f[d] = (i.words[g] & 1 << b) >>> b;
      }
      return f;
    }
    o.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var i = 0, f = 0; f < this.length; f++) {
        var d = this._zeroBits(this.words[f]);
        if (i += d, d !== 26)
          break;
      }
      return i;
    }, o.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function(i) {
      return this.negative !== 0 ? this.abs().inotn(i).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function(i) {
      return this.testn(i - 1) ? this.notn(i).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function() {
      return this.negative !== 0;
    }, o.prototype.neg = function() {
      return this.clone().ineg();
    }, o.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function(i) {
      for (; this.length < i.length; )
        this.words[this.length++] = 0;
      for (var f = 0; f < i.length; f++)
        this.words[f] = this.words[f] | i.words[f];
      return this.strip();
    }, o.prototype.ior = function(i) {
      return n((this.negative | i.negative) === 0), this.iuor(i);
    }, o.prototype.or = function(i) {
      return this.length > i.length ? this.clone().ior(i) : i.clone().ior(this);
    }, o.prototype.uor = function(i) {
      return this.length > i.length ? this.clone().iuor(i) : i.clone().iuor(this);
    }, o.prototype.iuand = function(i) {
      var f;
      this.length > i.length ? f = i : f = this;
      for (var d = 0; d < f.length; d++)
        this.words[d] = this.words[d] & i.words[d];
      return this.length = f.length, this.strip();
    }, o.prototype.iand = function(i) {
      return n((this.negative | i.negative) === 0), this.iuand(i);
    }, o.prototype.and = function(i) {
      return this.length > i.length ? this.clone().iand(i) : i.clone().iand(this);
    }, o.prototype.uand = function(i) {
      return this.length > i.length ? this.clone().iuand(i) : i.clone().iuand(this);
    }, o.prototype.iuxor = function(i) {
      var f, d;
      this.length > i.length ? (f = this, d = i) : (f = i, d = this);
      for (var g = 0; g < d.length; g++)
        this.words[g] = f.words[g] ^ d.words[g];
      if (this !== f)
        for (; g < f.length; g++)
          this.words[g] = f.words[g];
      return this.length = f.length, this.strip();
    }, o.prototype.ixor = function(i) {
      return n((this.negative | i.negative) === 0), this.iuxor(i);
    }, o.prototype.xor = function(i) {
      return this.length > i.length ? this.clone().ixor(i) : i.clone().ixor(this);
    }, o.prototype.uxor = function(i) {
      return this.length > i.length ? this.clone().iuxor(i) : i.clone().iuxor(this);
    }, o.prototype.inotn = function(i) {
      n(typeof i == "number" && i >= 0);
      var f = Math.ceil(i / 26) | 0, d = i % 26;
      this._expand(f), d > 0 && f--;
      for (var g = 0; g < f; g++)
        this.words[g] = ~this.words[g] & 67108863;
      return d > 0 && (this.words[g] = ~this.words[g] & 67108863 >> 26 - d), this.strip();
    }, o.prototype.notn = function(i) {
      return this.clone().inotn(i);
    }, o.prototype.setn = function(i, f) {
      n(typeof i == "number" && i >= 0);
      var d = i / 26 | 0, g = i % 26;
      return this._expand(d + 1), f ? this.words[d] = this.words[d] | 1 << g : this.words[d] = this.words[d] & ~(1 << g), this.strip();
    }, o.prototype.iadd = function(i) {
      var f;
      if (this.negative !== 0 && i.negative === 0)
        return this.negative = 0, f = this.isub(i), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && i.negative !== 0)
        return i.negative = 0, f = this.isub(i), i.negative = 1, f._normSign();
      var d, g;
      this.length > i.length ? (d = this, g = i) : (d = i, g = this);
      for (var b = 0, L = 0; L < g.length; L++)
        f = (d.words[L] | 0) + (g.words[L] | 0) + b, this.words[L] = f & 67108863, b = f >>> 26;
      for (; b !== 0 && L < d.length; L++)
        f = (d.words[L] | 0) + b, this.words[L] = f & 67108863, b = f >>> 26;
      if (this.length = d.length, b !== 0)
        this.words[this.length] = b, this.length++;
      else if (d !== this)
        for (; L < d.length; L++)
          this.words[L] = d.words[L];
      return this;
    }, o.prototype.add = function(i) {
      var f;
      return i.negative !== 0 && this.negative === 0 ? (i.negative = 0, f = this.sub(i), i.negative ^= 1, f) : i.negative === 0 && this.negative !== 0 ? (this.negative = 0, f = i.sub(this), this.negative = 1, f) : this.length > i.length ? this.clone().iadd(i) : i.clone().iadd(this);
    }, o.prototype.isub = function(i) {
      if (i.negative !== 0) {
        i.negative = 0;
        var f = this.iadd(i);
        return i.negative = 1, f._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(i), this.negative = 1, this._normSign();
      var d = this.cmp(i);
      if (d === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var g, b;
      d > 0 ? (g = this, b = i) : (g = i, b = this);
      for (var L = 0, A = 0; A < b.length; A++)
        f = (g.words[A] | 0) - (b.words[A] | 0) + L, L = f >> 26, this.words[A] = f & 67108863;
      for (; L !== 0 && A < g.length; A++)
        f = (g.words[A] | 0) + L, L = f >> 26, this.words[A] = f & 67108863;
      if (L === 0 && A < g.length && g !== this)
        for (; A < g.length; A++)
          this.words[A] = g.words[A];
      return this.length = Math.max(this.length, A), g !== this && (this.negative = 1), this.strip();
    }, o.prototype.sub = function(i) {
      return this.clone().isub(i);
    };
    function O(i, f, d) {
      d.negative = f.negative ^ i.negative;
      var g = i.length + f.length | 0;
      d.length = g, g = g - 1 | 0;
      var b = i.words[0] | 0, L = f.words[0] | 0, A = b * L, v = A & 67108863, u = A / 67108864 | 0;
      d.words[0] = v;
      for (var w = 1; w < g; w++) {
        for (var D = u >>> 26, U = u & 67108863, H = Math.min(w, f.length - 1), G = Math.max(0, w - i.length + 1); G <= H; G++) {
          var Q = w - G | 0;
          b = i.words[Q] | 0, L = f.words[G] | 0, A = b * L + U, D += A / 67108864 | 0, U = A & 67108863;
        }
        d.words[w] = U | 0, u = D | 0;
      }
      return u !== 0 ? d.words[w] = u | 0 : d.length--, d.strip();
    }
    var I = function(i, f, d) {
      var g = i.words, b = f.words, L = d.words, A = 0, v, u, w, D = g[0] | 0, U = D & 8191, H = D >>> 13, G = g[1] | 0, Q = G & 8191, c = G >>> 13, R = g[2] | 0, T = R & 8191, j = R >>> 13, V = g[3] | 0, $ = V & 8191, Z = V >>> 13, X = g[4] | 0, et = X & 8191, Y = X >>> 13, ht = g[5] | 0, s = ht & 8191, l = ht >>> 13, m = g[6] | 0, E = m & 8191, N = m >>> 13, W = g[7] | 0, z = W & 8191, rt = W >>> 13, dt = g[8] | 0, nt = dt & 8191, st = dt >>> 13, Ut = g[9] | 0, ft = Ut & 8191, ct = Ut >>> 13, qt = b[0] | 0, mt = qt & 8191, gt = qt >>> 13, ce = b[1] | 0, yt = ce & 8191, vt = ce >>> 13, pe = b[2] | 0, _t = pe & 8191, wt = pe >>> 13, de = b[3] | 0, bt = de & 8191, Mt = de >>> 13, me = b[4] | 0, Et = me & 8191, Lt = me >>> 13, ge = b[5] | 0, At = ge & 8191, kt = ge >>> 13, ye = b[6] | 0, Ct = ye & 8191, Bt = ye >>> 13, ve = b[7] | 0, St = ve & 8191, Nt = ve >>> 13, _e = b[8] | 0, xt = _e & 8191, Ot = _e >>> 13, we = b[9] | 0, Tt = we & 8191, Pt = we >>> 13;
      d.negative = i.negative ^ f.negative, d.length = 19, v = Math.imul(U, mt), u = Math.imul(U, gt), u = u + Math.imul(H, mt) | 0, w = Math.imul(H, gt);
      var Kt = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, v = Math.imul(Q, mt), u = Math.imul(Q, gt), u = u + Math.imul(c, mt) | 0, w = Math.imul(c, gt), v = v + Math.imul(U, yt) | 0, u = u + Math.imul(U, vt) | 0, u = u + Math.imul(H, yt) | 0, w = w + Math.imul(H, vt) | 0;
      var Gt = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, v = Math.imul(T, mt), u = Math.imul(T, gt), u = u + Math.imul(j, mt) | 0, w = Math.imul(j, gt), v = v + Math.imul(Q, yt) | 0, u = u + Math.imul(Q, vt) | 0, u = u + Math.imul(c, yt) | 0, w = w + Math.imul(c, vt) | 0, v = v + Math.imul(U, _t) | 0, u = u + Math.imul(U, wt) | 0, u = u + Math.imul(H, _t) | 0, w = w + Math.imul(H, wt) | 0;
      var Xt = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, v = Math.imul($, mt), u = Math.imul($, gt), u = u + Math.imul(Z, mt) | 0, w = Math.imul(Z, gt), v = v + Math.imul(T, yt) | 0, u = u + Math.imul(T, vt) | 0, u = u + Math.imul(j, yt) | 0, w = w + Math.imul(j, vt) | 0, v = v + Math.imul(Q, _t) | 0, u = u + Math.imul(Q, wt) | 0, u = u + Math.imul(c, _t) | 0, w = w + Math.imul(c, wt) | 0, v = v + Math.imul(U, bt) | 0, u = u + Math.imul(U, Mt) | 0, u = u + Math.imul(H, bt) | 0, w = w + Math.imul(H, Mt) | 0;
      var Qt = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, v = Math.imul(et, mt), u = Math.imul(et, gt), u = u + Math.imul(Y, mt) | 0, w = Math.imul(Y, gt), v = v + Math.imul($, yt) | 0, u = u + Math.imul($, vt) | 0, u = u + Math.imul(Z, yt) | 0, w = w + Math.imul(Z, vt) | 0, v = v + Math.imul(T, _t) | 0, u = u + Math.imul(T, wt) | 0, u = u + Math.imul(j, _t) | 0, w = w + Math.imul(j, wt) | 0, v = v + Math.imul(Q, bt) | 0, u = u + Math.imul(Q, Mt) | 0, u = u + Math.imul(c, bt) | 0, w = w + Math.imul(c, Mt) | 0, v = v + Math.imul(U, Et) | 0, u = u + Math.imul(U, Lt) | 0, u = u + Math.imul(H, Et) | 0, w = w + Math.imul(H, Lt) | 0;
      var te = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (te >>> 26) | 0, te &= 67108863, v = Math.imul(s, mt), u = Math.imul(s, gt), u = u + Math.imul(l, mt) | 0, w = Math.imul(l, gt), v = v + Math.imul(et, yt) | 0, u = u + Math.imul(et, vt) | 0, u = u + Math.imul(Y, yt) | 0, w = w + Math.imul(Y, vt) | 0, v = v + Math.imul($, _t) | 0, u = u + Math.imul($, wt) | 0, u = u + Math.imul(Z, _t) | 0, w = w + Math.imul(Z, wt) | 0, v = v + Math.imul(T, bt) | 0, u = u + Math.imul(T, Mt) | 0, u = u + Math.imul(j, bt) | 0, w = w + Math.imul(j, Mt) | 0, v = v + Math.imul(Q, Et) | 0, u = u + Math.imul(Q, Lt) | 0, u = u + Math.imul(c, Et) | 0, w = w + Math.imul(c, Lt) | 0, v = v + Math.imul(U, At) | 0, u = u + Math.imul(U, kt) | 0, u = u + Math.imul(H, At) | 0, w = w + Math.imul(H, kt) | 0;
      var ee = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, v = Math.imul(E, mt), u = Math.imul(E, gt), u = u + Math.imul(N, mt) | 0, w = Math.imul(N, gt), v = v + Math.imul(s, yt) | 0, u = u + Math.imul(s, vt) | 0, u = u + Math.imul(l, yt) | 0, w = w + Math.imul(l, vt) | 0, v = v + Math.imul(et, _t) | 0, u = u + Math.imul(et, wt) | 0, u = u + Math.imul(Y, _t) | 0, w = w + Math.imul(Y, wt) | 0, v = v + Math.imul($, bt) | 0, u = u + Math.imul($, Mt) | 0, u = u + Math.imul(Z, bt) | 0, w = w + Math.imul(Z, Mt) | 0, v = v + Math.imul(T, Et) | 0, u = u + Math.imul(T, Lt) | 0, u = u + Math.imul(j, Et) | 0, w = w + Math.imul(j, Lt) | 0, v = v + Math.imul(Q, At) | 0, u = u + Math.imul(Q, kt) | 0, u = u + Math.imul(c, At) | 0, w = w + Math.imul(c, kt) | 0, v = v + Math.imul(U, Ct) | 0, u = u + Math.imul(U, Bt) | 0, u = u + Math.imul(H, Ct) | 0, w = w + Math.imul(H, Bt) | 0;
      var re = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (re >>> 26) | 0, re &= 67108863, v = Math.imul(z, mt), u = Math.imul(z, gt), u = u + Math.imul(rt, mt) | 0, w = Math.imul(rt, gt), v = v + Math.imul(E, yt) | 0, u = u + Math.imul(E, vt) | 0, u = u + Math.imul(N, yt) | 0, w = w + Math.imul(N, vt) | 0, v = v + Math.imul(s, _t) | 0, u = u + Math.imul(s, wt) | 0, u = u + Math.imul(l, _t) | 0, w = w + Math.imul(l, wt) | 0, v = v + Math.imul(et, bt) | 0, u = u + Math.imul(et, Mt) | 0, u = u + Math.imul(Y, bt) | 0, w = w + Math.imul(Y, Mt) | 0, v = v + Math.imul($, Et) | 0, u = u + Math.imul($, Lt) | 0, u = u + Math.imul(Z, Et) | 0, w = w + Math.imul(Z, Lt) | 0, v = v + Math.imul(T, At) | 0, u = u + Math.imul(T, kt) | 0, u = u + Math.imul(j, At) | 0, w = w + Math.imul(j, kt) | 0, v = v + Math.imul(Q, Ct) | 0, u = u + Math.imul(Q, Bt) | 0, u = u + Math.imul(c, Ct) | 0, w = w + Math.imul(c, Bt) | 0, v = v + Math.imul(U, St) | 0, u = u + Math.imul(U, Nt) | 0, u = u + Math.imul(H, St) | 0, w = w + Math.imul(H, Nt) | 0;
      var ne = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (ne >>> 26) | 0, ne &= 67108863, v = Math.imul(nt, mt), u = Math.imul(nt, gt), u = u + Math.imul(st, mt) | 0, w = Math.imul(st, gt), v = v + Math.imul(z, yt) | 0, u = u + Math.imul(z, vt) | 0, u = u + Math.imul(rt, yt) | 0, w = w + Math.imul(rt, vt) | 0, v = v + Math.imul(E, _t) | 0, u = u + Math.imul(E, wt) | 0, u = u + Math.imul(N, _t) | 0, w = w + Math.imul(N, wt) | 0, v = v + Math.imul(s, bt) | 0, u = u + Math.imul(s, Mt) | 0, u = u + Math.imul(l, bt) | 0, w = w + Math.imul(l, Mt) | 0, v = v + Math.imul(et, Et) | 0, u = u + Math.imul(et, Lt) | 0, u = u + Math.imul(Y, Et) | 0, w = w + Math.imul(Y, Lt) | 0, v = v + Math.imul($, At) | 0, u = u + Math.imul($, kt) | 0, u = u + Math.imul(Z, At) | 0, w = w + Math.imul(Z, kt) | 0, v = v + Math.imul(T, Ct) | 0, u = u + Math.imul(T, Bt) | 0, u = u + Math.imul(j, Ct) | 0, w = w + Math.imul(j, Bt) | 0, v = v + Math.imul(Q, St) | 0, u = u + Math.imul(Q, Nt) | 0, u = u + Math.imul(c, St) | 0, w = w + Math.imul(c, Nt) | 0, v = v + Math.imul(U, xt) | 0, u = u + Math.imul(U, Ot) | 0, u = u + Math.imul(H, xt) | 0, w = w + Math.imul(H, Ot) | 0;
      var oe = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (oe >>> 26) | 0, oe &= 67108863, v = Math.imul(ft, mt), u = Math.imul(ft, gt), u = u + Math.imul(ct, mt) | 0, w = Math.imul(ct, gt), v = v + Math.imul(nt, yt) | 0, u = u + Math.imul(nt, vt) | 0, u = u + Math.imul(st, yt) | 0, w = w + Math.imul(st, vt) | 0, v = v + Math.imul(z, _t) | 0, u = u + Math.imul(z, wt) | 0, u = u + Math.imul(rt, _t) | 0, w = w + Math.imul(rt, wt) | 0, v = v + Math.imul(E, bt) | 0, u = u + Math.imul(E, Mt) | 0, u = u + Math.imul(N, bt) | 0, w = w + Math.imul(N, Mt) | 0, v = v + Math.imul(s, Et) | 0, u = u + Math.imul(s, Lt) | 0, u = u + Math.imul(l, Et) | 0, w = w + Math.imul(l, Lt) | 0, v = v + Math.imul(et, At) | 0, u = u + Math.imul(et, kt) | 0, u = u + Math.imul(Y, At) | 0, w = w + Math.imul(Y, kt) | 0, v = v + Math.imul($, Ct) | 0, u = u + Math.imul($, Bt) | 0, u = u + Math.imul(Z, Ct) | 0, w = w + Math.imul(Z, Bt) | 0, v = v + Math.imul(T, St) | 0, u = u + Math.imul(T, Nt) | 0, u = u + Math.imul(j, St) | 0, w = w + Math.imul(j, Nt) | 0, v = v + Math.imul(Q, xt) | 0, u = u + Math.imul(Q, Ot) | 0, u = u + Math.imul(c, xt) | 0, w = w + Math.imul(c, Ot) | 0, v = v + Math.imul(U, Tt) | 0, u = u + Math.imul(U, Pt) | 0, u = u + Math.imul(H, Tt) | 0, w = w + Math.imul(H, Pt) | 0;
      var Mr = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Mr >>> 26) | 0, Mr &= 67108863, v = Math.imul(ft, yt), u = Math.imul(ft, vt), u = u + Math.imul(ct, yt) | 0, w = Math.imul(ct, vt), v = v + Math.imul(nt, _t) | 0, u = u + Math.imul(nt, wt) | 0, u = u + Math.imul(st, _t) | 0, w = w + Math.imul(st, wt) | 0, v = v + Math.imul(z, bt) | 0, u = u + Math.imul(z, Mt) | 0, u = u + Math.imul(rt, bt) | 0, w = w + Math.imul(rt, Mt) | 0, v = v + Math.imul(E, Et) | 0, u = u + Math.imul(E, Lt) | 0, u = u + Math.imul(N, Et) | 0, w = w + Math.imul(N, Lt) | 0, v = v + Math.imul(s, At) | 0, u = u + Math.imul(s, kt) | 0, u = u + Math.imul(l, At) | 0, w = w + Math.imul(l, kt) | 0, v = v + Math.imul(et, Ct) | 0, u = u + Math.imul(et, Bt) | 0, u = u + Math.imul(Y, Ct) | 0, w = w + Math.imul(Y, Bt) | 0, v = v + Math.imul($, St) | 0, u = u + Math.imul($, Nt) | 0, u = u + Math.imul(Z, St) | 0, w = w + Math.imul(Z, Nt) | 0, v = v + Math.imul(T, xt) | 0, u = u + Math.imul(T, Ot) | 0, u = u + Math.imul(j, xt) | 0, w = w + Math.imul(j, Ot) | 0, v = v + Math.imul(Q, Tt) | 0, u = u + Math.imul(Q, Pt) | 0, u = u + Math.imul(c, Tt) | 0, w = w + Math.imul(c, Pt) | 0;
      var Er = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Er >>> 26) | 0, Er &= 67108863, v = Math.imul(ft, _t), u = Math.imul(ft, wt), u = u + Math.imul(ct, _t) | 0, w = Math.imul(ct, wt), v = v + Math.imul(nt, bt) | 0, u = u + Math.imul(nt, Mt) | 0, u = u + Math.imul(st, bt) | 0, w = w + Math.imul(st, Mt) | 0, v = v + Math.imul(z, Et) | 0, u = u + Math.imul(z, Lt) | 0, u = u + Math.imul(rt, Et) | 0, w = w + Math.imul(rt, Lt) | 0, v = v + Math.imul(E, At) | 0, u = u + Math.imul(E, kt) | 0, u = u + Math.imul(N, At) | 0, w = w + Math.imul(N, kt) | 0, v = v + Math.imul(s, Ct) | 0, u = u + Math.imul(s, Bt) | 0, u = u + Math.imul(l, Ct) | 0, w = w + Math.imul(l, Bt) | 0, v = v + Math.imul(et, St) | 0, u = u + Math.imul(et, Nt) | 0, u = u + Math.imul(Y, St) | 0, w = w + Math.imul(Y, Nt) | 0, v = v + Math.imul($, xt) | 0, u = u + Math.imul($, Ot) | 0, u = u + Math.imul(Z, xt) | 0, w = w + Math.imul(Z, Ot) | 0, v = v + Math.imul(T, Tt) | 0, u = u + Math.imul(T, Pt) | 0, u = u + Math.imul(j, Tt) | 0, w = w + Math.imul(j, Pt) | 0;
      var Lr = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Lr >>> 26) | 0, Lr &= 67108863, v = Math.imul(ft, bt), u = Math.imul(ft, Mt), u = u + Math.imul(ct, bt) | 0, w = Math.imul(ct, Mt), v = v + Math.imul(nt, Et) | 0, u = u + Math.imul(nt, Lt) | 0, u = u + Math.imul(st, Et) | 0, w = w + Math.imul(st, Lt) | 0, v = v + Math.imul(z, At) | 0, u = u + Math.imul(z, kt) | 0, u = u + Math.imul(rt, At) | 0, w = w + Math.imul(rt, kt) | 0, v = v + Math.imul(E, Ct) | 0, u = u + Math.imul(E, Bt) | 0, u = u + Math.imul(N, Ct) | 0, w = w + Math.imul(N, Bt) | 0, v = v + Math.imul(s, St) | 0, u = u + Math.imul(s, Nt) | 0, u = u + Math.imul(l, St) | 0, w = w + Math.imul(l, Nt) | 0, v = v + Math.imul(et, xt) | 0, u = u + Math.imul(et, Ot) | 0, u = u + Math.imul(Y, xt) | 0, w = w + Math.imul(Y, Ot) | 0, v = v + Math.imul($, Tt) | 0, u = u + Math.imul($, Pt) | 0, u = u + Math.imul(Z, Tt) | 0, w = w + Math.imul(Z, Pt) | 0;
      var Ar = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Ar >>> 26) | 0, Ar &= 67108863, v = Math.imul(ft, Et), u = Math.imul(ft, Lt), u = u + Math.imul(ct, Et) | 0, w = Math.imul(ct, Lt), v = v + Math.imul(nt, At) | 0, u = u + Math.imul(nt, kt) | 0, u = u + Math.imul(st, At) | 0, w = w + Math.imul(st, kt) | 0, v = v + Math.imul(z, Ct) | 0, u = u + Math.imul(z, Bt) | 0, u = u + Math.imul(rt, Ct) | 0, w = w + Math.imul(rt, Bt) | 0, v = v + Math.imul(E, St) | 0, u = u + Math.imul(E, Nt) | 0, u = u + Math.imul(N, St) | 0, w = w + Math.imul(N, Nt) | 0, v = v + Math.imul(s, xt) | 0, u = u + Math.imul(s, Ot) | 0, u = u + Math.imul(l, xt) | 0, w = w + Math.imul(l, Ot) | 0, v = v + Math.imul(et, Tt) | 0, u = u + Math.imul(et, Pt) | 0, u = u + Math.imul(Y, Tt) | 0, w = w + Math.imul(Y, Pt) | 0;
      var kr = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (kr >>> 26) | 0, kr &= 67108863, v = Math.imul(ft, At), u = Math.imul(ft, kt), u = u + Math.imul(ct, At) | 0, w = Math.imul(ct, kt), v = v + Math.imul(nt, Ct) | 0, u = u + Math.imul(nt, Bt) | 0, u = u + Math.imul(st, Ct) | 0, w = w + Math.imul(st, Bt) | 0, v = v + Math.imul(z, St) | 0, u = u + Math.imul(z, Nt) | 0, u = u + Math.imul(rt, St) | 0, w = w + Math.imul(rt, Nt) | 0, v = v + Math.imul(E, xt) | 0, u = u + Math.imul(E, Ot) | 0, u = u + Math.imul(N, xt) | 0, w = w + Math.imul(N, Ot) | 0, v = v + Math.imul(s, Tt) | 0, u = u + Math.imul(s, Pt) | 0, u = u + Math.imul(l, Tt) | 0, w = w + Math.imul(l, Pt) | 0;
      var Cr = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Cr >>> 26) | 0, Cr &= 67108863, v = Math.imul(ft, Ct), u = Math.imul(ft, Bt), u = u + Math.imul(ct, Ct) | 0, w = Math.imul(ct, Bt), v = v + Math.imul(nt, St) | 0, u = u + Math.imul(nt, Nt) | 0, u = u + Math.imul(st, St) | 0, w = w + Math.imul(st, Nt) | 0, v = v + Math.imul(z, xt) | 0, u = u + Math.imul(z, Ot) | 0, u = u + Math.imul(rt, xt) | 0, w = w + Math.imul(rt, Ot) | 0, v = v + Math.imul(E, Tt) | 0, u = u + Math.imul(E, Pt) | 0, u = u + Math.imul(N, Tt) | 0, w = w + Math.imul(N, Pt) | 0;
      var Br = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Br >>> 26) | 0, Br &= 67108863, v = Math.imul(ft, St), u = Math.imul(ft, Nt), u = u + Math.imul(ct, St) | 0, w = Math.imul(ct, Nt), v = v + Math.imul(nt, xt) | 0, u = u + Math.imul(nt, Ot) | 0, u = u + Math.imul(st, xt) | 0, w = w + Math.imul(st, Ot) | 0, v = v + Math.imul(z, Tt) | 0, u = u + Math.imul(z, Pt) | 0, u = u + Math.imul(rt, Tt) | 0, w = w + Math.imul(rt, Pt) | 0;
      var Sr = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Sr >>> 26) | 0, Sr &= 67108863, v = Math.imul(ft, xt), u = Math.imul(ft, Ot), u = u + Math.imul(ct, xt) | 0, w = Math.imul(ct, Ot), v = v + Math.imul(nt, Tt) | 0, u = u + Math.imul(nt, Pt) | 0, u = u + Math.imul(st, Tt) | 0, w = w + Math.imul(st, Pt) | 0;
      var Nr = (A + v | 0) + ((u & 8191) << 13) | 0;
      A = (w + (u >>> 13) | 0) + (Nr >>> 26) | 0, Nr &= 67108863, v = Math.imul(ft, Tt), u = Math.imul(ft, Pt), u = u + Math.imul(ct, Tt) | 0, w = Math.imul(ct, Pt);
      var xr = (A + v | 0) + ((u & 8191) << 13) | 0;
      return A = (w + (u >>> 13) | 0) + (xr >>> 26) | 0, xr &= 67108863, L[0] = Kt, L[1] = Gt, L[2] = Xt, L[3] = Qt, L[4] = te, L[5] = ee, L[6] = re, L[7] = ne, L[8] = oe, L[9] = Mr, L[10] = Er, L[11] = Lr, L[12] = Ar, L[13] = kr, L[14] = Cr, L[15] = Br, L[16] = Sr, L[17] = Nr, L[18] = xr, A !== 0 && (L[19] = A, d.length++), d;
    };
    Math.imul || (I = O);
    function P(i, f, d) {
      d.negative = f.negative ^ i.negative, d.length = i.length + f.length;
      for (var g = 0, b = 0, L = 0; L < d.length - 1; L++) {
        var A = b;
        b = 0;
        for (var v = g & 67108863, u = Math.min(L, f.length - 1), w = Math.max(0, L - i.length + 1); w <= u; w++) {
          var D = L - w, U = i.words[D] | 0, H = f.words[w] | 0, G = U * H, Q = G & 67108863;
          A = A + (G / 67108864 | 0) | 0, Q = Q + v | 0, v = Q & 67108863, A = A + (Q >>> 26) | 0, b += A >>> 26, A &= 67108863;
        }
        d.words[L] = v, g = A, A = b;
      }
      return g !== 0 ? d.words[L] = g : d.length--, d.strip();
    }
    function C(i, f, d) {
      var g = new B();
      return g.mulp(i, f, d);
    }
    o.prototype.mulTo = function(i, f) {
      var d, g = this.length + i.length;
      return this.length === 10 && i.length === 10 ? d = I(this, i, f) : g < 63 ? d = O(this, i, f) : g < 1024 ? d = P(this, i, f) : d = C(this, i, f), d;
    };
    function B(i, f) {
      this.x = i, this.y = f;
    }
    B.prototype.makeRBT = function(i) {
      for (var f = new Array(i), d = o.prototype._countBits(i) - 1, g = 0; g < i; g++)
        f[g] = this.revBin(g, d, i);
      return f;
    }, B.prototype.revBin = function(i, f, d) {
      if (i === 0 || i === d - 1)
        return i;
      for (var g = 0, b = 0; b < f; b++)
        g |= (i & 1) << f - b - 1, i >>= 1;
      return g;
    }, B.prototype.permute = function(i, f, d, g, b, L) {
      for (var A = 0; A < L; A++)
        g[A] = f[i[A]], b[A] = d[i[A]];
    }, B.prototype.transform = function(i, f, d, g, b, L) {
      this.permute(L, i, f, d, g, b);
      for (var A = 1; A < b; A <<= 1)
        for (var v = A << 1, u = Math.cos(2 * Math.PI / v), w = Math.sin(2 * Math.PI / v), D = 0; D < b; D += v)
          for (var U = u, H = w, G = 0; G < A; G++) {
            var Q = d[D + G], c = g[D + G], R = d[D + G + A], T = g[D + G + A], j = U * R - H * T;
            T = U * T + H * R, R = j, d[D + G] = Q + R, g[D + G] = c + T, d[D + G + A] = Q - R, g[D + G + A] = c - T, G !== v && (j = u * U - w * H, H = u * H + w * U, U = j);
          }
    }, B.prototype.guessLen13b = function(i, f) {
      var d = Math.max(f, i) | 1, g = d & 1, b = 0;
      for (d = d / 2 | 0; d; d = d >>> 1)
        b++;
      return 1 << b + 1 + g;
    }, B.prototype.conjugate = function(i, f, d) {
      if (!(d <= 1))
        for (var g = 0; g < d / 2; g++) {
          var b = i[g];
          i[g] = i[d - g - 1], i[d - g - 1] = b, b = f[g], f[g] = -f[d - g - 1], f[d - g - 1] = -b;
        }
    }, B.prototype.normalize13b = function(i, f) {
      for (var d = 0, g = 0; g < f / 2; g++) {
        var b = Math.round(i[2 * g + 1] / f) * 8192 + Math.round(i[2 * g] / f) + d;
        i[g] = b & 67108863, b < 67108864 ? d = 0 : d = b / 67108864 | 0;
      }
      return i;
    }, B.prototype.convert13b = function(i, f, d, g) {
      for (var b = 0, L = 0; L < f; L++)
        b = b + (i[L] | 0), d[2 * L] = b & 8191, b = b >>> 13, d[2 * L + 1] = b & 8191, b = b >>> 13;
      for (L = 2 * f; L < g; ++L)
        d[L] = 0;
      n(b === 0), n((b & -8192) === 0);
    }, B.prototype.stub = function(i) {
      for (var f = new Array(i), d = 0; d < i; d++)
        f[d] = 0;
      return f;
    }, B.prototype.mulp = function(i, f, d) {
      var g = 2 * this.guessLen13b(i.length, f.length), b = this.makeRBT(g), L = this.stub(g), A = new Array(g), v = new Array(g), u = new Array(g), w = new Array(g), D = new Array(g), U = new Array(g), H = d.words;
      H.length = g, this.convert13b(i.words, i.length, A, g), this.convert13b(f.words, f.length, w, g), this.transform(A, L, v, u, g, b), this.transform(w, L, D, U, g, b);
      for (var G = 0; G < g; G++) {
        var Q = v[G] * D[G] - u[G] * U[G];
        u[G] = v[G] * U[G] + u[G] * D[G], v[G] = Q;
      }
      return this.conjugate(v, u, g), this.transform(v, u, H, L, g, b), this.conjugate(H, L, g), this.normalize13b(H, g), d.negative = i.negative ^ f.negative, d.length = i.length + f.length, d.strip();
    }, o.prototype.mul = function(i) {
      var f = new o(null);
      return f.words = new Array(this.length + i.length), this.mulTo(i, f);
    }, o.prototype.mulf = function(i) {
      var f = new o(null);
      return f.words = new Array(this.length + i.length), C(this, i, f);
    }, o.prototype.imul = function(i) {
      return this.clone().mulTo(i, this);
    }, o.prototype.imuln = function(i) {
      n(typeof i == "number"), n(i < 67108864);
      for (var f = 0, d = 0; d < this.length; d++) {
        var g = (this.words[d] | 0) * i, b = (g & 67108863) + (f & 67108863);
        f >>= 26, f += g / 67108864 | 0, f += b >>> 26, this.words[d] = b & 67108863;
      }
      return f !== 0 && (this.words[d] = f, this.length++), this;
    }, o.prototype.muln = function(i) {
      return this.clone().imuln(i);
    }, o.prototype.sqr = function() {
      return this.mul(this);
    }, o.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o.prototype.pow = function(i) {
      var f = F(i);
      if (f.length === 0)
        return new o(1);
      for (var d = this, g = 0; g < f.length && f[g] === 0; g++, d = d.sqr())
        ;
      if (++g < f.length)
        for (var b = d.sqr(); g < f.length; g++, b = b.sqr())
          f[g] !== 0 && (d = d.mul(b));
      return d;
    }, o.prototype.iushln = function(i) {
      n(typeof i == "number" && i >= 0);
      var f = i % 26, d = (i - f) / 26, g = 67108863 >>> 26 - f << 26 - f, b;
      if (f !== 0) {
        var L = 0;
        for (b = 0; b < this.length; b++) {
          var A = this.words[b] & g, v = (this.words[b] | 0) - A << f;
          this.words[b] = v | L, L = A >>> 26 - f;
        }
        L && (this.words[b] = L, this.length++);
      }
      if (d !== 0) {
        for (b = this.length - 1; b >= 0; b--)
          this.words[b + d] = this.words[b];
        for (b = 0; b < d; b++)
          this.words[b] = 0;
        this.length += d;
      }
      return this.strip();
    }, o.prototype.ishln = function(i) {
      return n(this.negative === 0), this.iushln(i);
    }, o.prototype.iushrn = function(i, f, d) {
      n(typeof i == "number" && i >= 0);
      var g;
      f ? g = (f - f % 26) / 26 : g = 0;
      var b = i % 26, L = Math.min((i - b) / 26, this.length), A = 67108863 ^ 67108863 >>> b << b, v = d;
      if (g -= L, g = Math.max(0, g), v) {
        for (var u = 0; u < L; u++)
          v.words[u] = this.words[u];
        v.length = L;
      }
      if (L !== 0)
        if (this.length > L)
          for (this.length -= L, u = 0; u < this.length; u++)
            this.words[u] = this.words[u + L];
        else
          this.words[0] = 0, this.length = 1;
      var w = 0;
      for (u = this.length - 1; u >= 0 && (w !== 0 || u >= g); u--) {
        var D = this.words[u] | 0;
        this.words[u] = w << 26 - b | D >>> b, w = D & A;
      }
      return v && w !== 0 && (v.words[v.length++] = w), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, o.prototype.ishrn = function(i, f, d) {
      return n(this.negative === 0), this.iushrn(i, f, d);
    }, o.prototype.shln = function(i) {
      return this.clone().ishln(i);
    }, o.prototype.ushln = function(i) {
      return this.clone().iushln(i);
    }, o.prototype.shrn = function(i) {
      return this.clone().ishrn(i);
    }, o.prototype.ushrn = function(i) {
      return this.clone().iushrn(i);
    }, o.prototype.testn = function(i) {
      n(typeof i == "number" && i >= 0);
      var f = i % 26, d = (i - f) / 26, g = 1 << f;
      if (this.length <= d)
        return !1;
      var b = this.words[d];
      return !!(b & g);
    }, o.prototype.imaskn = function(i) {
      n(typeof i == "number" && i >= 0);
      var f = i % 26, d = (i - f) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= d)
        return this;
      if (f !== 0 && d++, this.length = Math.min(d, this.length), f !== 0) {
        var g = 67108863 ^ 67108863 >>> f << f;
        this.words[this.length - 1] &= g;
      }
      return this.strip();
    }, o.prototype.maskn = function(i) {
      return this.clone().imaskn(i);
    }, o.prototype.iaddn = function(i) {
      return n(typeof i == "number"), n(i < 67108864), i < 0 ? this.isubn(-i) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < i ? (this.words[0] = i - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(i), this.negative = 1, this) : this._iaddn(i);
    }, o.prototype._iaddn = function(i) {
      this.words[0] += i;
      for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
        this.words[f] -= 67108864, f === this.length - 1 ? this.words[f + 1] = 1 : this.words[f + 1]++;
      return this.length = Math.max(this.length, f + 1), this;
    }, o.prototype.isubn = function(i) {
      if (n(typeof i == "number"), n(i < 67108864), i < 0)
        return this.iaddn(-i);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(i), this.negative = 1, this;
      if (this.words[0] -= i, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var f = 0; f < this.length && this.words[f] < 0; f++)
          this.words[f] += 67108864, this.words[f + 1] -= 1;
      return this.strip();
    }, o.prototype.addn = function(i) {
      return this.clone().iaddn(i);
    }, o.prototype.subn = function(i) {
      return this.clone().isubn(i);
    }, o.prototype.iabs = function() {
      return this.negative = 0, this;
    }, o.prototype.abs = function() {
      return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function(i, f, d) {
      var g = i.length + d, b;
      this._expand(g);
      var L, A = 0;
      for (b = 0; b < i.length; b++) {
        L = (this.words[b + d] | 0) + A;
        var v = (i.words[b] | 0) * f;
        L -= v & 67108863, A = (L >> 26) - (v / 67108864 | 0), this.words[b + d] = L & 67108863;
      }
      for (; b < this.length - d; b++)
        L = (this.words[b + d] | 0) + A, A = L >> 26, this.words[b + d] = L & 67108863;
      if (A === 0)
        return this.strip();
      for (n(A === -1), A = 0, b = 0; b < this.length; b++)
        L = -(this.words[b] | 0) + A, A = L >> 26, this.words[b] = L & 67108863;
      return this.negative = 1, this.strip();
    }, o.prototype._wordDiv = function(i, f) {
      var d = this.length - i.length, g = this.clone(), b = i, L = b.words[b.length - 1] | 0, A = this._countBits(L);
      d = 26 - A, d !== 0 && (b = b.ushln(d), g.iushln(d), L = b.words[b.length - 1] | 0);
      var v = g.length - b.length, u;
      if (f !== "mod") {
        u = new o(null), u.length = v + 1, u.words = new Array(u.length);
        for (var w = 0; w < u.length; w++)
          u.words[w] = 0;
      }
      var D = g.clone()._ishlnsubmul(b, 1, v);
      D.negative === 0 && (g = D, u && (u.words[v] = 1));
      for (var U = v - 1; U >= 0; U--) {
        var H = (g.words[b.length + U] | 0) * 67108864 + (g.words[b.length + U - 1] | 0);
        for (H = Math.min(H / L | 0, 67108863), g._ishlnsubmul(b, H, U); g.negative !== 0; )
          H--, g.negative = 0, g._ishlnsubmul(b, 1, U), g.isZero() || (g.negative ^= 1);
        u && (u.words[U] = H);
      }
      return u && u.strip(), g.strip(), f !== "div" && d !== 0 && g.iushrn(d), { div: u || null, mod: g };
    }, o.prototype.divmod = function(i, f, d) {
      if (n(!i.isZero()), this.isZero())
        return { div: new o(0), mod: new o(0) };
      var g, b, L;
      return this.negative !== 0 && i.negative === 0 ? (L = this.neg().divmod(i, f), f !== "mod" && (g = L.div.neg()), f !== "div" && (b = L.mod.neg(), d && b.negative !== 0 && b.iadd(i)), { div: g, mod: b }) : this.negative === 0 && i.negative !== 0 ? (L = this.divmod(i.neg(), f), f !== "mod" && (g = L.div.neg()), { div: g, mod: L.mod }) : (this.negative & i.negative) !== 0 ? (L = this.neg().divmod(i.neg(), f), f !== "div" && (b = L.mod.neg(), d && b.negative !== 0 && b.isub(i)), { div: L.div, mod: b }) : i.length > this.length || this.cmp(i) < 0 ? { div: new o(0), mod: this } : i.length === 1 ? f === "div" ? { div: this.divn(i.words[0]), mod: null } : f === "mod" ? { div: null, mod: new o(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new o(this.modn(i.words[0])) } : this._wordDiv(i, f);
    }, o.prototype.div = function(i) {
      return this.divmod(i, "div", !1).div;
    }, o.prototype.mod = function(i) {
      return this.divmod(i, "mod", !1).mod;
    }, o.prototype.umod = function(i) {
      return this.divmod(i, "mod", !0).mod;
    }, o.prototype.divRound = function(i) {
      var f = this.divmod(i);
      if (f.mod.isZero())
        return f.div;
      var d = f.div.negative !== 0 ? f.mod.isub(i) : f.mod, g = i.ushrn(1), b = i.andln(1), L = d.cmp(g);
      return L < 0 || b === 1 && L === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1);
    }, o.prototype.modn = function(i) {
      n(i <= 67108863);
      for (var f = (1 << 26) % i, d = 0, g = this.length - 1; g >= 0; g--)
        d = (f * d + (this.words[g] | 0)) % i;
      return d;
    }, o.prototype.idivn = function(i) {
      n(i <= 67108863);
      for (var f = 0, d = this.length - 1; d >= 0; d--) {
        var g = (this.words[d] | 0) + f * 67108864;
        this.words[d] = g / i | 0, f = g % i;
      }
      return this.strip();
    }, o.prototype.divn = function(i) {
      return this.clone().idivn(i);
    }, o.prototype.egcd = function(i) {
      n(i.negative === 0), n(!i.isZero());
      var f = this, d = i.clone();
      f.negative !== 0 ? f = f.umod(i) : f = f.clone();
      for (var g = new o(1), b = new o(0), L = new o(0), A = new o(1), v = 0; f.isEven() && d.isEven(); )
        f.iushrn(1), d.iushrn(1), ++v;
      for (var u = d.clone(), w = f.clone(); !f.isZero(); ) {
        for (var D = 0, U = 1; (f.words[0] & U) === 0 && D < 26; ++D, U <<= 1)
          ;
        if (D > 0)
          for (f.iushrn(D); D-- > 0; )
            (g.isOdd() || b.isOdd()) && (g.iadd(u), b.isub(w)), g.iushrn(1), b.iushrn(1);
        for (var H = 0, G = 1; (d.words[0] & G) === 0 && H < 26; ++H, G <<= 1)
          ;
        if (H > 0)
          for (d.iushrn(H); H-- > 0; )
            (L.isOdd() || A.isOdd()) && (L.iadd(u), A.isub(w)), L.iushrn(1), A.iushrn(1);
        f.cmp(d) >= 0 ? (f.isub(d), g.isub(L), b.isub(A)) : (d.isub(f), L.isub(g), A.isub(b));
      }
      return { a: L, b: A, gcd: d.iushln(v) };
    }, o.prototype._invmp = function(i) {
      n(i.negative === 0), n(!i.isZero());
      var f = this, d = i.clone();
      f.negative !== 0 ? f = f.umod(i) : f = f.clone();
      for (var g = new o(1), b = new o(0), L = d.clone(); f.cmpn(1) > 0 && d.cmpn(1) > 0; ) {
        for (var A = 0, v = 1; (f.words[0] & v) === 0 && A < 26; ++A, v <<= 1)
          ;
        if (A > 0)
          for (f.iushrn(A); A-- > 0; )
            g.isOdd() && g.iadd(L), g.iushrn(1);
        for (var u = 0, w = 1; (d.words[0] & w) === 0 && u < 26; ++u, w <<= 1)
          ;
        if (u > 0)
          for (d.iushrn(u); u-- > 0; )
            b.isOdd() && b.iadd(L), b.iushrn(1);
        f.cmp(d) >= 0 ? (f.isub(d), g.isub(b)) : (d.isub(f), b.isub(g));
      }
      var D;
      return f.cmpn(1) === 0 ? D = g : D = b, D.cmpn(0) < 0 && D.iadd(i), D;
    }, o.prototype.gcd = function(i) {
      if (this.isZero())
        return i.abs();
      if (i.isZero())
        return this.abs();
      var f = this.clone(), d = i.clone();
      f.negative = 0, d.negative = 0;
      for (var g = 0; f.isEven() && d.isEven(); g++)
        f.iushrn(1), d.iushrn(1);
      do {
        for (; f.isEven(); )
          f.iushrn(1);
        for (; d.isEven(); )
          d.iushrn(1);
        var b = f.cmp(d);
        if (b < 0) {
          var L = f;
          f = d, d = L;
        } else if (b === 0 || d.cmpn(1) === 0)
          break;
        f.isub(d);
      } while (!0);
      return d.iushln(g);
    }, o.prototype.invm = function(i) {
      return this.egcd(i).a.umod(i);
    }, o.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, o.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, o.prototype.andln = function(i) {
      return this.words[0] & i;
    }, o.prototype.bincn = function(i) {
      n(typeof i == "number");
      var f = i % 26, d = (i - f) / 26, g = 1 << f;
      if (this.length <= d)
        return this._expand(d + 1), this.words[d] |= g, this;
      for (var b = g, L = d; b !== 0 && L < this.length; L++) {
        var A = this.words[L] | 0;
        A += b, b = A >>> 26, A &= 67108863, this.words[L] = A;
      }
      return b !== 0 && (this.words[L] = b, this.length++), this;
    }, o.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, o.prototype.cmpn = function(i) {
      var f = i < 0;
      if (this.negative !== 0 && !f)
        return -1;
      if (this.negative === 0 && f)
        return 1;
      this.strip();
      var d;
      if (this.length > 1)
        d = 1;
      else {
        f && (i = -i), n(i <= 67108863, "Number is too big");
        var g = this.words[0] | 0;
        d = g === i ? 0 : g < i ? -1 : 1;
      }
      return this.negative !== 0 ? -d | 0 : d;
    }, o.prototype.cmp = function(i) {
      if (this.negative !== 0 && i.negative === 0)
        return -1;
      if (this.negative === 0 && i.negative !== 0)
        return 1;
      var f = this.ucmp(i);
      return this.negative !== 0 ? -f | 0 : f;
    }, o.prototype.ucmp = function(i) {
      if (this.length > i.length)
        return 1;
      if (this.length < i.length)
        return -1;
      for (var f = 0, d = this.length - 1; d >= 0; d--) {
        var g = this.words[d] | 0, b = i.words[d] | 0;
        if (g !== b) {
          g < b ? f = -1 : g > b && (f = 1);
          break;
        }
      }
      return f;
    }, o.prototype.gtn = function(i) {
      return this.cmpn(i) === 1;
    }, o.prototype.gt = function(i) {
      return this.cmp(i) === 1;
    }, o.prototype.gten = function(i) {
      return this.cmpn(i) >= 0;
    }, o.prototype.gte = function(i) {
      return this.cmp(i) >= 0;
    }, o.prototype.ltn = function(i) {
      return this.cmpn(i) === -1;
    }, o.prototype.lt = function(i) {
      return this.cmp(i) === -1;
    }, o.prototype.lten = function(i) {
      return this.cmpn(i) <= 0;
    }, o.prototype.lte = function(i) {
      return this.cmp(i) <= 0;
    }, o.prototype.eqn = function(i) {
      return this.cmpn(i) === 0;
    }, o.prototype.eq = function(i) {
      return this.cmp(i) === 0;
    }, o.red = function(i) {
      return new tt(i);
    }, o.prototype.toRed = function(i) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), i.convertTo(this)._forceRed(i);
    }, o.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function(i) {
      return this.red = i, this;
    }, o.prototype.forceRed = function(i) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(i);
    }, o.prototype.redAdd = function(i) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, i);
    }, o.prototype.redIAdd = function(i) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, i);
    }, o.prototype.redSub = function(i) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, i);
    }, o.prototype.redISub = function(i) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, i);
    }, o.prototype.redShl = function(i) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, i);
    }, o.prototype.redMul = function(i) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.mul(this, i);
    }, o.prototype.redIMul = function(i) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, i), this.red.imul(this, i);
    }, o.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function(i) {
      return n(this.red && !i.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, i);
    };
    var k = { k256: null, p224: null, p192: null, p25519: null };
    function S(i, f) {
      this.name = i, this.p = new o(f, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    S.prototype._tmp = function() {
      var i = new o(null);
      return i.words = new Array(Math.ceil(this.n / 13)), i;
    }, S.prototype.ireduce = function(i) {
      var f = i, d;
      do
        this.split(f, this.tmp), f = this.imulK(f), f = f.iadd(this.tmp), d = f.bitLength();
      while (d > this.n);
      var g = d < this.n ? -1 : f.ucmp(this.p);
      return g === 0 ? (f.words[0] = 0, f.length = 1) : g > 0 ? f.isub(this.p) : f.strip(), f;
    }, S.prototype.split = function(i, f) {
      i.iushrn(this.n, 0, f);
    }, S.prototype.imulK = function(i) {
      return i.imul(this.k);
    };
    function q() {
      S.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    a(q, S), q.prototype.split = function(i, f) {
      for (var d = 4194303, g = Math.min(i.length, 9), b = 0; b < g; b++)
        f.words[b] = i.words[b];
      if (f.length = g, i.length <= 9) {
        i.words[0] = 0, i.length = 1;
        return;
      }
      var L = i.words[9];
      for (f.words[f.length++] = L & d, b = 10; b < i.length; b++) {
        var A = i.words[b] | 0;
        i.words[b - 10] = (A & d) << 4 | L >>> 22, L = A;
      }
      L >>>= 22, i.words[b - 10] = L, L === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
    }, q.prototype.imulK = function(i) {
      i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
      for (var f = 0, d = 0; d < i.length; d++) {
        var g = i.words[d] | 0;
        f += g * 977, i.words[d] = f & 67108863, f = g * 64 + (f / 67108864 | 0);
      }
      return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
    };
    function J() {
      S.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    a(J, S);
    function K() {
      S.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    a(K, S);
    function ot() {
      S.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    a(ot, S), ot.prototype.imulK = function(i) {
      for (var f = 0, d = 0; d < i.length; d++) {
        var g = (i.words[d] | 0) * 19 + f, b = g & 67108863;
        g >>>= 26, i.words[d] = b, f = g;
      }
      return f !== 0 && (i.words[i.length++] = f), i;
    }, o._prime = function(i) {
      if (k[i])
        return k[i];
      var f;
      if (i === "k256")
        f = new q();
      else if (i === "p224")
        f = new J();
      else if (i === "p192")
        f = new K();
      else if (i === "p25519")
        f = new ot();
      else
        throw new Error("Unknown prime " + i);
      return k[i] = f, f;
    };
    function tt(i) {
      if (typeof i == "string") {
        var f = o._prime(i);
        this.m = f.p, this.prime = f;
      } else
        n(i.gtn(1), "modulus must be greater than 1"), this.m = i, this.prime = null;
    }
    tt.prototype._verify1 = function(i) {
      n(i.negative === 0, "red works only with positives"), n(i.red, "red works only with red numbers");
    }, tt.prototype._verify2 = function(i, f) {
      n((i.negative | f.negative) === 0, "red works only with positives"), n(i.red && i.red === f.red, "red works only with red numbers");
    }, tt.prototype.imod = function(i) {
      return this.prime ? this.prime.ireduce(i)._forceRed(this) : i.umod(this.m)._forceRed(this);
    }, tt.prototype.neg = function(i) {
      return i.isZero() ? i.clone() : this.m.sub(i)._forceRed(this);
    }, tt.prototype.add = function(i, f) {
      this._verify2(i, f);
      var d = i.add(f);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d._forceRed(this);
    }, tt.prototype.iadd = function(i, f) {
      this._verify2(i, f);
      var d = i.iadd(f);
      return d.cmp(this.m) >= 0 && d.isub(this.m), d;
    }, tt.prototype.sub = function(i, f) {
      this._verify2(i, f);
      var d = i.sub(f);
      return d.cmpn(0) < 0 && d.iadd(this.m), d._forceRed(this);
    }, tt.prototype.isub = function(i, f) {
      this._verify2(i, f);
      var d = i.isub(f);
      return d.cmpn(0) < 0 && d.iadd(this.m), d;
    }, tt.prototype.shl = function(i, f) {
      return this._verify1(i), this.imod(i.ushln(f));
    }, tt.prototype.imul = function(i, f) {
      return this._verify2(i, f), this.imod(i.imul(f));
    }, tt.prototype.mul = function(i, f) {
      return this._verify2(i, f), this.imod(i.mul(f));
    }, tt.prototype.isqr = function(i) {
      return this.imul(i, i.clone());
    }, tt.prototype.sqr = function(i) {
      return this.mul(i, i);
    }, tt.prototype.sqrt = function(i) {
      if (i.isZero())
        return i.clone();
      var f = this.m.andln(3);
      if (n(f % 2 === 1), f === 3) {
        var d = this.m.add(new o(1)).iushrn(2);
        return this.pow(i, d);
      }
      for (var g = this.m.subn(1), b = 0; !g.isZero() && g.andln(1) === 0; )
        b++, g.iushrn(1);
      n(!g.isZero());
      var L = new o(1).toRed(this), A = L.redNeg(), v = this.m.subn(1).iushrn(1), u = this.m.bitLength();
      for (u = new o(2 * u * u).toRed(this); this.pow(u, v).cmp(A) !== 0; )
        u.redIAdd(A);
      for (var w = this.pow(u, g), D = this.pow(i, g.addn(1).iushrn(1)), U = this.pow(i, g), H = b; U.cmp(L) !== 0; ) {
        for (var G = U, Q = 0; G.cmp(L) !== 0; Q++)
          G = G.redSqr();
        n(Q < H);
        var c = this.pow(w, new o(1).iushln(H - Q - 1));
        D = D.redMul(c), w = c.redSqr(), U = U.redMul(w), H = Q;
      }
      return D;
    }, tt.prototype.invm = function(i) {
      var f = i._invmp(this.m);
      return f.negative !== 0 ? (f.negative = 0, this.imod(f).redNeg()) : this.imod(f);
    }, tt.prototype.pow = function(i, f) {
      if (f.isZero())
        return new o(1).toRed(this);
      if (f.cmpn(1) === 0)
        return i.clone();
      var d = 4, g = new Array(1 << d);
      g[0] = new o(1).toRed(this), g[1] = i;
      for (var b = 2; b < g.length; b++)
        g[b] = this.mul(g[b - 1], i);
      var L = g[0], A = 0, v = 0, u = f.bitLength() % 26;
      for (u === 0 && (u = 26), b = f.length - 1; b >= 0; b--) {
        for (var w = f.words[b], D = u - 1; D >= 0; D--) {
          var U = w >> D & 1;
          if (L !== g[0] && (L = this.sqr(L)), U === 0 && A === 0) {
            v = 0;
            continue;
          }
          A <<= 1, A |= U, v++, !(v !== d && (b !== 0 || D !== 0)) && (L = this.mul(L, g[A]), v = 0, A = 0);
        }
        u = 26;
      }
      return L;
    }, tt.prototype.convertTo = function(i) {
      var f = i.umod(this.m);
      return f === i ? f.clone() : f;
    }, tt.prototype.convertFrom = function(i) {
      var f = i.clone();
      return f.red = null, f;
    }, o.mont = function(i) {
      return new lt(i);
    };
    function lt(i) {
      tt.call(this, i), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    a(lt, tt), lt.prototype.convertTo = function(i) {
      return this.imod(i.ushln(this.shift));
    }, lt.prototype.convertFrom = function(i) {
      var f = this.imod(i.mul(this.rinv));
      return f.red = null, f;
    }, lt.prototype.imul = function(i, f) {
      if (i.isZero() || f.isZero())
        return i.words[0] = 0, i.length = 1, i;
      var d = i.imul(f), g = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = d.isub(g).iushrn(this.shift), L = b;
      return b.cmp(this.m) >= 0 ? L = b.isub(this.m) : b.cmpn(0) < 0 && (L = b.iadd(this.m)), L._forceRed(this);
    }, lt.prototype.mul = function(i, f) {
      if (i.isZero() || f.isZero())
        return new o(0)._forceRed(this);
      var d = i.mul(f), g = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), b = d.isub(g).iushrn(this.shift), L = b;
      return b.cmp(this.m) >= 0 ? L = b.isub(this.m) : b.cmpn(0) < 0 && (L = b.iadd(this.m)), L._forceRed(this);
    }, lt.prototype.invm = function(i) {
      var f = this.imod(i._invmp(this.m).mul(this.r2));
      return f._forceRed(this);
    };
  })(t, Rt);
})(Yo);
Yo.exports;
var da = Zr;
Zr.strict = Vo, Zr.loose = Ko;
var ma = Object.prototype.toString, ga = { "[object Int8Array]": !0, "[object Int16Array]": !0, "[object Int32Array]": !0, "[object Uint8Array]": !0, "[object Uint8ClampedArray]": !0, "[object Uint16Array]": !0, "[object Uint32Array]": !0, "[object Float32Array]": !0, "[object Float64Array]": !0 };
function Zr(t) {
  return Vo(t) || Ko(t);
}
function Vo(t) {
  return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
}
function Ko(t) {
  return ga[ma.call(t)];
}
var ya = da.strict, va = function(t) {
  if (ya(t)) {
    var e = Buffer.from(t.buffer);
    return t.byteLength !== t.buffer.byteLength && (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)), e;
  } else
    return Buffer.from(t);
};
const Go = "hex", Xo = "utf8";
function xe(t) {
  return new Uint8Array(t);
}
function _a(t, e = !1) {
  const r = t.toString(Go);
  return e ? Aa(r) : r;
}
function wa(t) {
  return t.toString(Xo);
}
function gr(t) {
  return va(t);
}
function Ze(t, e = !1) {
  return _a(gr(t), e);
}
function ba(t) {
  return wa(gr(t));
}
function Ma(t) {
  return Buffer.from($r(t), Go);
}
function $e(t) {
  return xe(Ma(t));
}
function Ea(t) {
  return Buffer.from(t, Xo);
}
function La(t) {
  return xe(Ea(t));
}
function Qo(...t) {
  let e = [];
  return t.forEach((r) => e = e.concat(Array.from(r))), new Uint8Array([...e]);
}
function $r(t) {
  return t.replace(/^0x/, "");
}
function Aa(t) {
  return t.startsWith("0x") ? t : `0x${t}`;
}
function zr(t) {
  return gr(new Uint8Array(t));
}
function ka(t) {
  return xe(t).buffer;
}
var Ca = { exports: {} };
/**
* [js-sha3]{@link https://github.com/emn178/js-sha3}
*
* @version 0.8.0
* @author Chen, Yi-Cyuan [emn178@gmail.com]
* @copyright Chen, Yi-Cyuan 2015-2018
* @license MIT
*/
(function(t) {
  (function() {
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
    a.JS_SHA3_NO_WINDOW && (n = !1);
    var o = !n && typeof self == "object", p = !a.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    p ? a = Rt : o && (a = self);
    var h = !a.JS_SHA3_NO_COMMON_JS && !0 && t.exports, y = !a.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", M = "0123456789abcdef".split(""), _ = [31, 7936, 2031616, 520093696], x = [4, 1024, 262144, 67108864], F = [1, 256, 65536, 16777216], O = [6, 1536, 393216, 100663296], I = [0, 8, 16, 24], P = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], C = [224, 256, 384, 512], B = [128, 256], k = ["hex", "buffer", "arrayBuffer", "array", "digest"], S = { 128: 168, 256: 136 };
    (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(c) {
      return Object.prototype.toString.call(c) === "[object Array]";
    }), y && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(c) {
      return typeof c == "object" && c.buffer && c.buffer.constructor === ArrayBuffer;
    });
    for (var q = function(c, R, T) {
      return function(j) {
        return new H(c, R, c).update(j)[T]();
      };
    }, J = function(c, R, T) {
      return function(j, V) {
        return new H(c, R, V).update(j)[T]();
      };
    }, K = function(c, R, T) {
      return function(j, V, $, Z) {
        return b["cshake" + c].update(j, V, $, Z)[T]();
      };
    }, ot = function(c, R, T) {
      return function(j, V, $, Z) {
        return b["kmac" + c].update(j, V, $, Z)[T]();
      };
    }, tt = function(c, R, T, j) {
      for (var V = 0; V < k.length; ++V) {
        var $ = k[V];
        c[$] = R(T, j, $);
      }
      return c;
    }, lt = function(c, R) {
      var T = q(c, R, "hex");
      return T.create = function() {
        return new H(c, R, c);
      }, T.update = function(j) {
        return T.create().update(j);
      }, tt(T, q, c, R);
    }, i = function(c, R) {
      var T = J(c, R, "hex");
      return T.create = function(j) {
        return new H(c, R, j);
      }, T.update = function(j, V) {
        return T.create(V).update(j);
      }, tt(T, J, c, R);
    }, f = function(c, R) {
      var T = S[c], j = K(c, R, "hex");
      return j.create = function(V, $, Z) {
        return !$ && !Z ? b["shake" + c].create(V) : new H(c, R, V).bytepad([$, Z], T);
      }, j.update = function(V, $, Z, X) {
        return j.create($, Z, X).update(V);
      }, tt(j, K, c, R);
    }, d = function(c, R) {
      var T = S[c], j = ot(c, R, "hex");
      return j.create = function(V, $, Z) {
        return new G(c, R, $).bytepad(["KMAC", Z], T).bytepad([V], T);
      }, j.update = function(V, $, Z, X) {
        return j.create(V, Z, X).update($);
      }, tt(j, ot, c, R);
    }, g = [{ name: "keccak", padding: F, bits: C, createMethod: lt }, { name: "sha3", padding: O, bits: C, createMethod: lt }, { name: "shake", padding: _, bits: B, createMethod: i }, { name: "cshake", padding: x, bits: B, createMethod: f }, { name: "kmac", padding: x, bits: B, createMethod: d }], b = {}, L = [], A = 0; A < g.length; ++A)
      for (var v = g[A], u = v.bits, w = 0; w < u.length; ++w) {
        var D = v.name + "_" + u[w];
        if (L.push(D), b[D] = v.createMethod(u[w], v.padding), v.name !== "sha3") {
          var U = v.name + u[w];
          L.push(U), b[U] = b[D];
        }
      }
    function H(c, R, T) {
      this.blocks = [], this.s = [], this.padding = R, this.outputBits = T, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (c << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = T >> 5, this.extraBytes = (T & 31) >> 3;
      for (var j = 0; j < 50; ++j)
        this.s[j] = 0;
    }
    H.prototype.update = function(c) {
      if (this.finalized)
        throw new Error(r);
      var R, T = typeof c;
      if (T !== "string") {
        if (T === "object") {
          if (c === null)
            throw new Error(e);
          if (y && c.constructor === ArrayBuffer)
            c = new Uint8Array(c);
          else if (!Array.isArray(c) && (!y || !ArrayBuffer.isView(c)))
            throw new Error(e);
        } else
          throw new Error(e);
        R = !0;
      }
      for (var j = this.blocks, V = this.byteCount, $ = c.length, Z = this.blockCount, X = 0, et = this.s, Y, ht; X < $; ) {
        if (this.reset)
          for (this.reset = !1, j[0] = this.block, Y = 1; Y < Z + 1; ++Y)
            j[Y] = 0;
        if (R)
          for (Y = this.start; X < $ && Y < V; ++X)
            j[Y >> 2] |= c[X] << I[Y++ & 3];
        else
          for (Y = this.start; X < $ && Y < V; ++X)
            ht = c.charCodeAt(X), ht < 128 ? j[Y >> 2] |= ht << I[Y++ & 3] : ht < 2048 ? (j[Y >> 2] |= (192 | ht >> 6) << I[Y++ & 3], j[Y >> 2] |= (128 | ht & 63) << I[Y++ & 3]) : ht < 55296 || ht >= 57344 ? (j[Y >> 2] |= (224 | ht >> 12) << I[Y++ & 3], j[Y >> 2] |= (128 | ht >> 6 & 63) << I[Y++ & 3], j[Y >> 2] |= (128 | ht & 63) << I[Y++ & 3]) : (ht = 65536 + ((ht & 1023) << 10 | c.charCodeAt(++X) & 1023), j[Y >> 2] |= (240 | ht >> 18) << I[Y++ & 3], j[Y >> 2] |= (128 | ht >> 12 & 63) << I[Y++ & 3], j[Y >> 2] |= (128 | ht >> 6 & 63) << I[Y++ & 3], j[Y >> 2] |= (128 | ht & 63) << I[Y++ & 3]);
        if (this.lastByteIndex = Y, Y >= V) {
          for (this.start = Y - V, this.block = j[Z], Y = 0; Y < Z; ++Y)
            et[Y] ^= j[Y];
          Q(et), this.reset = !0;
        } else
          this.start = Y;
      }
      return this;
    }, H.prototype.encode = function(c, R) {
      var T = c & 255, j = 1, V = [T];
      for (c = c >> 8, T = c & 255; T > 0; )
        V.unshift(T), c = c >> 8, T = c & 255, ++j;
      return R ? V.push(j) : V.unshift(j), this.update(V), V.length;
    }, H.prototype.encodeString = function(c) {
      var R, T = typeof c;
      if (T !== "string") {
        if (T === "object") {
          if (c === null)
            throw new Error(e);
          if (y && c.constructor === ArrayBuffer)
            c = new Uint8Array(c);
          else if (!Array.isArray(c) && (!y || !ArrayBuffer.isView(c)))
            throw new Error(e);
        } else
          throw new Error(e);
        R = !0;
      }
      var j = 0, V = c.length;
      if (R)
        j = V;
      else
        for (var $ = 0; $ < c.length; ++$) {
          var Z = c.charCodeAt($);
          Z < 128 ? j += 1 : Z < 2048 ? j += 2 : Z < 55296 || Z >= 57344 ? j += 3 : (Z = 65536 + ((Z & 1023) << 10 | c.charCodeAt(++$) & 1023), j += 4);
        }
      return j += this.encode(j * 8), this.update(c), j;
    }, H.prototype.bytepad = function(c, R) {
      for (var T = this.encode(R), j = 0; j < c.length; ++j)
        T += this.encodeString(c[j]);
      var V = R - T % R, $ = [];
      return $.length = V, this.update($), this;
    }, H.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var c = this.blocks, R = this.lastByteIndex, T = this.blockCount, j = this.s;
        if (c[R >> 2] |= this.padding[R & 3], this.lastByteIndex === this.byteCount)
          for (c[0] = c[T], R = 1; R < T + 1; ++R)
            c[R] = 0;
        for (c[T - 1] |= 2147483648, R = 0; R < T; ++R)
          j[R] ^= c[R];
        Q(j);
      }
    }, H.prototype.toString = H.prototype.hex = function() {
      this.finalize();
      for (var c = this.blockCount, R = this.s, T = this.outputBlocks, j = this.extraBytes, V = 0, $ = 0, Z = "", X; $ < T; ) {
        for (V = 0; V < c && $ < T; ++V, ++$)
          X = R[V], Z += M[X >> 4 & 15] + M[X & 15] + M[X >> 12 & 15] + M[X >> 8 & 15] + M[X >> 20 & 15] + M[X >> 16 & 15] + M[X >> 28 & 15] + M[X >> 24 & 15];
        $ % c === 0 && (Q(R), V = 0);
      }
      return j && (X = R[V], Z += M[X >> 4 & 15] + M[X & 15], j > 1 && (Z += M[X >> 12 & 15] + M[X >> 8 & 15]), j > 2 && (Z += M[X >> 20 & 15] + M[X >> 16 & 15])), Z;
    }, H.prototype.arrayBuffer = function() {
      this.finalize();
      var c = this.blockCount, R = this.s, T = this.outputBlocks, j = this.extraBytes, V = 0, $ = 0, Z = this.outputBits >> 3, X;
      j ? X = new ArrayBuffer(T + 1 << 2) : X = new ArrayBuffer(Z);
      for (var et = new Uint32Array(X); $ < T; ) {
        for (V = 0; V < c && $ < T; ++V, ++$)
          et[$] = R[V];
        $ % c === 0 && Q(R);
      }
      return j && (et[V] = R[V], X = X.slice(0, Z)), X;
    }, H.prototype.buffer = H.prototype.arrayBuffer, H.prototype.digest = H.prototype.array = function() {
      this.finalize();
      for (var c = this.blockCount, R = this.s, T = this.outputBlocks, j = this.extraBytes, V = 0, $ = 0, Z = [], X, et; $ < T; ) {
        for (V = 0; V < c && $ < T; ++V, ++$)
          X = $ << 2, et = R[V], Z[X] = et & 255, Z[X + 1] = et >> 8 & 255, Z[X + 2] = et >> 16 & 255, Z[X + 3] = et >> 24 & 255;
        $ % c === 0 && Q(R);
      }
      return j && (X = $ << 2, et = R[V], Z[X] = et & 255, j > 1 && (Z[X + 1] = et >> 8 & 255), j > 2 && (Z[X + 2] = et >> 16 & 255)), Z;
    };
    function G(c, R, T) {
      H.call(this, c, R, T);
    }
    G.prototype = new H(), G.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), H.prototype.finalize.call(this);
    };
    var Q = function(c) {
      var R, T, j, V, $, Z, X, et, Y, ht, s, l, m, E, N, W, z, rt, dt, nt, st, Ut, ft, ct, qt, mt, gt, ce, yt, vt, pe, _t, wt, de, bt, Mt, me, Et, Lt, ge, At, kt, ye, Ct, Bt, ve, St, Nt, _e, xt, Ot, we, Tt, Pt, Kt, Gt, Xt, Qt, te, ee, re, ne, oe;
      for (j = 0; j < 48; j += 2)
        V = c[0] ^ c[10] ^ c[20] ^ c[30] ^ c[40], $ = c[1] ^ c[11] ^ c[21] ^ c[31] ^ c[41], Z = c[2] ^ c[12] ^ c[22] ^ c[32] ^ c[42], X = c[3] ^ c[13] ^ c[23] ^ c[33] ^ c[43], et = c[4] ^ c[14] ^ c[24] ^ c[34] ^ c[44], Y = c[5] ^ c[15] ^ c[25] ^ c[35] ^ c[45], ht = c[6] ^ c[16] ^ c[26] ^ c[36] ^ c[46], s = c[7] ^ c[17] ^ c[27] ^ c[37] ^ c[47], l = c[8] ^ c[18] ^ c[28] ^ c[38] ^ c[48], m = c[9] ^ c[19] ^ c[29] ^ c[39] ^ c[49], R = l ^ (Z << 1 | X >>> 31), T = m ^ (X << 1 | Z >>> 31), c[0] ^= R, c[1] ^= T, c[10] ^= R, c[11] ^= T, c[20] ^= R, c[21] ^= T, c[30] ^= R, c[31] ^= T, c[40] ^= R, c[41] ^= T, R = V ^ (et << 1 | Y >>> 31), T = $ ^ (Y << 1 | et >>> 31), c[2] ^= R, c[3] ^= T, c[12] ^= R, c[13] ^= T, c[22] ^= R, c[23] ^= T, c[32] ^= R, c[33] ^= T, c[42] ^= R, c[43] ^= T, R = Z ^ (ht << 1 | s >>> 31), T = X ^ (s << 1 | ht >>> 31), c[4] ^= R, c[5] ^= T, c[14] ^= R, c[15] ^= T, c[24] ^= R, c[25] ^= T, c[34] ^= R, c[35] ^= T, c[44] ^= R, c[45] ^= T, R = et ^ (l << 1 | m >>> 31), T = Y ^ (m << 1 | l >>> 31), c[6] ^= R, c[7] ^= T, c[16] ^= R, c[17] ^= T, c[26] ^= R, c[27] ^= T, c[36] ^= R, c[37] ^= T, c[46] ^= R, c[47] ^= T, R = ht ^ (V << 1 | $ >>> 31), T = s ^ ($ << 1 | V >>> 31), c[8] ^= R, c[9] ^= T, c[18] ^= R, c[19] ^= T, c[28] ^= R, c[29] ^= T, c[38] ^= R, c[39] ^= T, c[48] ^= R, c[49] ^= T, E = c[0], N = c[1], ve = c[11] << 4 | c[10] >>> 28, St = c[10] << 4 | c[11] >>> 28, ce = c[20] << 3 | c[21] >>> 29, yt = c[21] << 3 | c[20] >>> 29, ee = c[31] << 9 | c[30] >>> 23, re = c[30] << 9 | c[31] >>> 23, kt = c[40] << 18 | c[41] >>> 14, ye = c[41] << 18 | c[40] >>> 14, de = c[2] << 1 | c[3] >>> 31, bt = c[3] << 1 | c[2] >>> 31, W = c[13] << 12 | c[12] >>> 20, z = c[12] << 12 | c[13] >>> 20, Nt = c[22] << 10 | c[23] >>> 22, _e = c[23] << 10 | c[22] >>> 22, vt = c[33] << 13 | c[32] >>> 19, pe = c[32] << 13 | c[33] >>> 19, ne = c[42] << 2 | c[43] >>> 30, oe = c[43] << 2 | c[42] >>> 30, Pt = c[5] << 30 | c[4] >>> 2, Kt = c[4] << 30 | c[5] >>> 2, Mt = c[14] << 6 | c[15] >>> 26, me = c[15] << 6 | c[14] >>> 26, rt = c[25] << 11 | c[24] >>> 21, dt = c[24] << 11 | c[25] >>> 21, xt = c[34] << 15 | c[35] >>> 17, Ot = c[35] << 15 | c[34] >>> 17, _t = c[45] << 29 | c[44] >>> 3, wt = c[44] << 29 | c[45] >>> 3, ct = c[6] << 28 | c[7] >>> 4, qt = c[7] << 28 | c[6] >>> 4, Gt = c[17] << 23 | c[16] >>> 9, Xt = c[16] << 23 | c[17] >>> 9, Et = c[26] << 25 | c[27] >>> 7, Lt = c[27] << 25 | c[26] >>> 7, nt = c[36] << 21 | c[37] >>> 11, st = c[37] << 21 | c[36] >>> 11, we = c[47] << 24 | c[46] >>> 8, Tt = c[46] << 24 | c[47] >>> 8, Ct = c[8] << 27 | c[9] >>> 5, Bt = c[9] << 27 | c[8] >>> 5, mt = c[18] << 20 | c[19] >>> 12, gt = c[19] << 20 | c[18] >>> 12, Qt = c[29] << 7 | c[28] >>> 25, te = c[28] << 7 | c[29] >>> 25, ge = c[38] << 8 | c[39] >>> 24, At = c[39] << 8 | c[38] >>> 24, Ut = c[48] << 14 | c[49] >>> 18, ft = c[49] << 14 | c[48] >>> 18, c[0] = E ^ ~W & rt, c[1] = N ^ ~z & dt, c[10] = ct ^ ~mt & ce, c[11] = qt ^ ~gt & yt, c[20] = de ^ ~Mt & Et, c[21] = bt ^ ~me & Lt, c[30] = Ct ^ ~ve & Nt, c[31] = Bt ^ ~St & _e, c[40] = Pt ^ ~Gt & Qt, c[41] = Kt ^ ~Xt & te, c[2] = W ^ ~rt & nt, c[3] = z ^ ~dt & st, c[12] = mt ^ ~ce & vt, c[13] = gt ^ ~yt & pe, c[22] = Mt ^ ~Et & ge, c[23] = me ^ ~Lt & At, c[32] = ve ^ ~Nt & xt, c[33] = St ^ ~_e & Ot, c[42] = Gt ^ ~Qt & ee, c[43] = Xt ^ ~te & re, c[4] = rt ^ ~nt & Ut, c[5] = dt ^ ~st & ft, c[14] = ce ^ ~vt & _t, c[15] = yt ^ ~pe & wt, c[24] = Et ^ ~ge & kt, c[25] = Lt ^ ~At & ye, c[34] = Nt ^ ~xt & we, c[35] = _e ^ ~Ot & Tt, c[44] = Qt ^ ~ee & ne, c[45] = te ^ ~re & oe, c[6] = nt ^ ~Ut & E, c[7] = st ^ ~ft & N, c[16] = vt ^ ~_t & ct, c[17] = pe ^ ~wt & qt, c[26] = ge ^ ~kt & de, c[27] = At ^ ~ye & bt, c[36] = xt ^ ~we & Ct, c[37] = Ot ^ ~Tt & Bt, c[46] = ee ^ ~ne & Pt, c[47] = re ^ ~oe & Kt, c[8] = Ut ^ ~E & W, c[9] = ft ^ ~N & z, c[18] = _t ^ ~ct & mt, c[19] = wt ^ ~qt & gt, c[28] = kt ^ ~de & Mt, c[29] = ye ^ ~bt & me, c[38] = we ^ ~Ct & ve, c[39] = Tt ^ ~Bt & St, c[48] = ne ^ ~Pt & Gt, c[49] = oe ^ ~Kt & Xt, c[0] ^= P[j], c[1] ^= P[j + 1];
    };
    if (h)
      t.exports = b;
    else
      for (A = 0; A < L.length; ++A)
        a[L[A]] = b[L[A]];
  })();
})(Ca);
var Ue = {}, se = {};
Object.defineProperty(se, "__esModule", { value: !0 }), se.isBrowserCryptoAvailable = se.getSubtleCrypto = se.getBrowerCrypto = void 0;
function wn() {
  return (Rt == null ? void 0 : Rt.crypto) || (Rt == null ? void 0 : Rt.msCrypto) || {};
}
se.getBrowerCrypto = wn;
function ti() {
  const t = wn();
  return t.subtle || t.webkitSubtle;
}
se.getSubtleCrypto = ti;
function Ba() {
  return !!wn() && !!ti();
}
se.isBrowserCryptoAvailable = Ba;
var ae = {};
Object.defineProperty(ae, "__esModule", { value: !0 }), ae.isBrowser = ae.isNode = ae.isReactNative = void 0;
function ei() {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
}
ae.isReactNative = ei;
function ri() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
ae.isNode = ri;
function Sa() {
  return !ei() && !ri();
}
ae.isBrowser = Sa, function(t) {
  var e = Rt && Rt.__createBinding || (Object.create ? function(n, a, o, p) {
    p === void 0 && (p = o), Object.defineProperty(n, p, { enumerable: !0, get: function() {
      return a[o];
    } });
  } : function(n, a, o, p) {
    p === void 0 && (p = o), n[p] = a[o];
  }), r = Rt && Rt.__exportStar || function(n, a) {
    for (var o in n)
      o !== "default" && !a.hasOwnProperty(o) && e(a, n, o);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(se, t), r(ae, t);
}(Ue);
var Na = {}, xa = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), ni = "%[a-f0-9]{2}", Dn = new RegExp(ni, "gi"), Hn = new RegExp("(" + ni + ")+", "gi");
function Jr(t, e) {
  try {
    return decodeURIComponent(t.join(""));
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], Jr(r), Jr(n));
}
function Oa(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Dn), r = 1; r < e.length; r++)
      t = Jr(e, r).join(""), e = t.match(Dn);
    return t;
  }
}
function Ta(t) {
  for (var e = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, r = Hn.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Oa(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Hn.exec(t);
  }
  e["%C2"] = "\uFFFD";
  for (var a = Object.keys(e), o = 0; o < a.length; o++) {
    var p = a[o];
    t = t.replace(new RegExp(p, "g"), e[p]);
  }
  return t;
}
var Pa = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return Ta(t);
  }
}, Ua = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [t.slice(0, r), t.slice(r + e.length)];
};
(function(t) {
  const e = xa, r = Pa, n = Ua, a = (C) => C == null;
  function o(C) {
    switch (C.arrayFormat) {
      case "index":
        return (B) => (k, S) => {
          const q = k.length;
          return S === void 0 || C.skipNull && S === null || C.skipEmptyString && S === "" ? k : S === null ? [...k, [y(B, C), "[", q, "]"].join("")] : [...k, [y(B, C), "[", y(q, C), "]=", y(S, C)].join("")];
        };
      case "bracket":
        return (B) => (k, S) => S === void 0 || C.skipNull && S === null || C.skipEmptyString && S === "" ? k : S === null ? [...k, [y(B, C), "[]"].join("")] : [...k, [y(B, C), "[]=", y(S, C)].join("")];
      case "comma":
      case "separator":
        return (B) => (k, S) => S == null || S.length === 0 ? k : k.length === 0 ? [[y(B, C), "=", y(S, C)].join("")] : [[k, y(S, C)].join(C.arrayFormatSeparator)];
      default:
        return (B) => (k, S) => S === void 0 || C.skipNull && S === null || C.skipEmptyString && S === "" ? k : S === null ? [...k, y(B, C)] : [...k, [y(B, C), "=", y(S, C)].join("")];
    }
  }
  function p(C) {
    let B;
    switch (C.arrayFormat) {
      case "index":
        return (k, S, q) => {
          if (B = /\[(\d*)\]$/.exec(k), k = k.replace(/\[\d*\]$/, ""), !B) {
            q[k] = S;
            return;
          }
          q[k] === void 0 && (q[k] = {}), q[k][B[1]] = S;
        };
      case "bracket":
        return (k, S, q) => {
          if (B = /(\[\])$/.exec(k), k = k.replace(/\[\]$/, ""), !B) {
            q[k] = S;
            return;
          }
          if (q[k] === void 0) {
            q[k] = [S];
            return;
          }
          q[k] = [].concat(q[k], S);
        };
      case "comma":
      case "separator":
        return (k, S, q) => {
          const J = typeof S == "string" && S.split("").indexOf(C.arrayFormatSeparator) > -1 ? S.split(C.arrayFormatSeparator).map((K) => M(K, C)) : S === null ? S : M(S, C);
          q[k] = J;
        };
      default:
        return (k, S, q) => {
          if (q[k] === void 0) {
            q[k] = S;
            return;
          }
          q[k] = [].concat(q[k], S);
        };
    }
  }
  function h(C) {
    if (typeof C != "string" || C.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function y(C, B) {
    return B.encode ? B.strict ? e(C) : encodeURIComponent(C) : C;
  }
  function M(C, B) {
    return B.decode ? r(C) : C;
  }
  function _(C) {
    return Array.isArray(C) ? C.sort() : typeof C == "object" ? _(Object.keys(C)).sort((B, k) => Number(B) - Number(k)).map((B) => C[B]) : C;
  }
  function x(C) {
    const B = C.indexOf("#");
    return B !== -1 && (C = C.slice(0, B)), C;
  }
  function F(C) {
    let B = "";
    const k = C.indexOf("#");
    return k !== -1 && (B = C.slice(k)), B;
  }
  function O(C) {
    C = x(C);
    const B = C.indexOf("?");
    return B === -1 ? "" : C.slice(B + 1);
  }
  function I(C, B) {
    return B.parseNumbers && !Number.isNaN(Number(C)) && typeof C == "string" && C.trim() !== "" ? C = Number(C) : B.parseBooleans && C !== null && (C.toLowerCase() === "true" || C.toLowerCase() === "false") && (C = C.toLowerCase() === "true"), C;
  }
  function P(C, B) {
    B = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, B), h(B.arrayFormatSeparator);
    const k = p(B), S = /* @__PURE__ */ Object.create(null);
    if (typeof C != "string" || (C = C.trim().replace(/^[?#&]/, ""), !C))
      return S;
    for (const q of C.split("&")) {
      let [J, K] = n(B.decode ? q.replace(/\+/g, " ") : q, "=");
      K = K === void 0 ? null : ["comma", "separator"].includes(B.arrayFormat) ? K : M(K, B), k(M(J, B), K, S);
    }
    for (const q of Object.keys(S)) {
      const J = S[q];
      if (typeof J == "object" && J !== null)
        for (const K of Object.keys(J))
          J[K] = I(J[K], B);
      else
        S[q] = I(J, B);
    }
    return B.sort === !1 ? S : (B.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(B.sort)).reduce((q, J) => {
      const K = S[J];
      return Boolean(K) && typeof K == "object" && !Array.isArray(K) ? q[J] = _(K) : q[J] = K, q;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = O, t.parse = P, t.stringify = (C, B) => {
    if (!C)
      return "";
    B = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, B), h(B.arrayFormatSeparator);
    const k = (K) => B.skipNull && a(C[K]) || B.skipEmptyString && C[K] === "", S = o(B), q = {};
    for (const K of Object.keys(C))
      k(K) || (q[K] = C[K]);
    const J = Object.keys(q);
    return B.sort !== !1 && J.sort(B.sort), J.map((K) => {
      const ot = C[K];
      return ot === void 0 ? "" : ot === null ? y(K, B) : Array.isArray(ot) ? ot.reduce(S(K), []).join("&") : y(K, B) + "=" + y(ot, B);
    }).filter((K) => K.length > 0).join("&");
  }, t.parseUrl = (C, B) => {
    B = Object.assign({ decode: !0 }, B);
    const [k, S] = n(C, "#");
    return Object.assign({ url: k.split("?")[0] || "", query: P(O(C), B) }, B && B.parseFragmentIdentifier && S ? { fragmentIdentifier: M(S, B) } : {});
  }, t.stringifyUrl = (C, B) => {
    B = Object.assign({ encode: !0, strict: !0 }, B);
    const k = x(C.url).split("?")[0] || "", S = t.extract(C.url), q = t.parse(S, { sort: !1 }), J = Object.assign(q, C.query);
    let K = t.stringify(J, B);
    K && (K = `?${K}`);
    let ot = F(C.url);
    return C.fragmentIdentifier && (ot = `#${y(C.fragmentIdentifier, B)}`), `${k}${K}${ot}`;
  };
})(Na);
typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
const Ra = "abcdefghijklmnopqrstuvwxyz0123456789";
Ra.split("").map((t) => `https://${t}.bridge.walletconnect.org`);
function ja(t) {
  return Ue.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const oi = 256, ii = oi, Ia = oi, he = "AES-CBC", Da = `SHA-${ii}`, Yr = "HMAC", Ha = "encrypt", Fa = "decrypt", qa = "sign", Wa = "verify";
function Za(t) {
  return t === he ? { length: ii, name: he } : { hash: { name: Da }, name: Yr };
}
function $a(t) {
  return t === he ? [Ha, Fa] : [qa, Wa];
}
async function bn(t, e = he) {
  return Ue.getSubtleCrypto().importKey("raw", t, Za(e), !0, $a(e));
}
async function za(t, e, r) {
  const n = Ue.getSubtleCrypto(), a = await bn(e, he), o = await n.encrypt({ iv: t, name: he }, a, r);
  return new Uint8Array(o);
}
async function Ja(t, e, r) {
  const n = Ue.getSubtleCrypto(), a = await bn(e, he), o = await n.decrypt({ iv: t, name: he }, a, r);
  return new Uint8Array(o);
}
async function Ya(t, e) {
  const r = Ue.getSubtleCrypto(), n = await bn(t, Yr), a = await r.sign({ length: Ia, name: Yr }, n, e);
  return new Uint8Array(a);
}
function Va(t, e, r) {
  return za(t, e, r);
}
function Ka(t, e, r) {
  return Ja(t, e, r);
}
async function si(t, e) {
  return await Ya(t, e);
}
async function ai(t) {
  const e = (t || 256) / 8, r = ja(e);
  return ka(gr(r));
}
async function ui(t, e) {
  const r = $e(t.data), n = $e(t.iv), a = $e(t.hmac), o = Ze(a, !1), p = Qo(r, n), h = await si(e, p), y = Ze(h, !1);
  return $r(o) === $r(y);
}
async function Ga(t, e, r) {
  const n = xe(zr(e)), a = r || await ai(128), o = xe(zr(a)), p = Ze(o, !1), h = JSON.stringify(t), y = La(h), M = await Va(o, n, y), _ = Ze(M, !1), x = Qo(M, o), F = await si(n, x), O = Ze(F, !1);
  return { data: _, hmac: O, iv: p };
}
async function Xa(t, e) {
  const r = xe(zr(e));
  if (!r)
    throw new Error("Missing key: required for decryption");
  if (!await ui(t, r))
    return null;
  const n = $e(t.data), a = $e(t.iv), o = await Ka(a, r, n), p = ba(o);
  let h;
  try {
    h = JSON.parse(p);
  } catch {
    return null;
  }
  return h;
}
Object.freeze({ __proto__: null, generateKey: ai, verifyHmac: ui, encrypt: Ga, decrypt: Xa });
yn(la);
var Fe = {}, Qa = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, hi = {}, le = {}, tu = {}.toString, Mn = Array.isArray || function(t) {
  return tu.call(t) == "[object Array]";
}, eu = Mn;
function ru() {
  try {
    var t = new Uint8Array(1);
    return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, t.foo() === 42;
  } catch {
    return !1;
  }
}
ut.TYPED_ARRAY_SUPPORT = ru();
var Fn = ut.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function ut(t, e, r) {
  return !ut.TYPED_ARRAY_SUPPORT && !(this instanceof ut) ? new ut(t, e, r) : typeof t == "number" ? li(this, t) : hu(this, t, e, r);
}
ut.TYPED_ARRAY_SUPPORT && (ut.prototype.__proto__ = Uint8Array.prototype, ut.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ut[Symbol.species] === ut && Object.defineProperty(ut, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }));
function En(t) {
  if (t >= Fn)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Fn.toString(16) + " bytes");
  return t | 0;
}
function nu(t) {
  return t !== t;
}
function Oe(t, e) {
  var r;
  return ut.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = ut.prototype) : (r = t, r === null && (r = new ut(e)), r.length = e), r;
}
function li(t, e) {
  var r = Oe(t, e < 0 ? 0 : En(e) | 0);
  if (!ut.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < e; ++n)
      r[n] = 0;
  return r;
}
function ou(t, e) {
  var r = ci(e) | 0, n = Oe(t, r), a = n.write(e);
  return a !== r && (n = n.slice(0, a)), n;
}
function Vr(t, e) {
  for (var r = e.length < 0 ? 0 : En(e.length) | 0, n = Oe(t, r), a = 0; a < r; a += 1)
    n[a] = e[a] & 255;
  return n;
}
function iu(t, e, r, n) {
  if (r < 0 || e.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  var a;
  return r === void 0 && n === void 0 ? a = new Uint8Array(e) : n === void 0 ? a = new Uint8Array(e, r) : a = new Uint8Array(e, r, n), ut.TYPED_ARRAY_SUPPORT ? a.__proto__ = ut.prototype : a = Vr(t, a), a;
}
function su(t, e) {
  if (ut.isBuffer(e)) {
    var r = En(e.length) | 0, n = Oe(t, r);
    return n.length === 0 || e.copy(n, 0, 0, r), n;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || nu(e.length) ? Oe(t, 0) : Vr(t, e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return Vr(t, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function fi(t, e) {
  e = e || 1 / 0;
  for (var r, n = t.length, a = null, o = [], p = 0; p < n; ++p) {
    if (r = t.charCodeAt(p), r > 55295 && r < 57344) {
      if (!a) {
        if (r > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (p + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        a = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), a = r;
        continue;
      }
      r = (a - 55296 << 10 | r - 56320) + 65536;
    } else
      a && (e -= 3) > -1 && o.push(239, 191, 189);
    if (a = null, r < 128) {
      if ((e -= 1) < 0)
        break;
      o.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0)
        break;
      o.push(r >> 6 | 192, r & 63 | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0)
        break;
      o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
    } else if (r < 1114112) {
      if ((e -= 4) < 0)
        break;
      o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function ci(t) {
  if (ut.isBuffer(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var e = t.length;
  return e === 0 ? 0 : fi(t).length;
}
function au(t, e, r, n) {
  for (var a = 0; a < n && !(a + r >= e.length || a >= t.length); ++a)
    e[a + r] = t[a];
  return a;
}
function uu(t, e, r, n) {
  return au(fi(e, t.length - r), t, r, n);
}
function hu(t, e, r, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? iu(t, e, r, n) : typeof e == "string" ? ou(t, e) : su(t, e);
}
ut.prototype.write = function(t, e, r) {
  e === void 0 ? (r = this.length, e = 0) : r === void 0 && typeof e == "string" ? (r = this.length, e = 0) : isFinite(e) && (e = e | 0, isFinite(r) ? r = r | 0 : r = void 0);
  var n = this.length - e;
  if ((r === void 0 || r > n) && (r = n), t.length > 0 && (r < 0 || e < 0) || e > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return uu(this, t, e, r);
}, ut.prototype.slice = function(t, e) {
  var r = this.length;
  t = ~~t, e = e === void 0 ? r : ~~e, t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), e < t && (e = t);
  var n;
  if (ut.TYPED_ARRAY_SUPPORT)
    n = this.subarray(t, e), n.__proto__ = ut.prototype;
  else {
    var a = e - t;
    n = new ut(a, void 0);
    for (var o = 0; o < a; ++o)
      n[o] = this[o + t];
  }
  return n;
}, ut.prototype.copy = function(t, e, r, n) {
  if (r || (r = 0), !n && n !== 0 && (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r || t.length === 0 || this.length === 0)
    return 0;
  if (e < 0)
    throw new RangeError("targetStart out of bounds");
  if (r < 0 || r >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (n < 0)
    throw new RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
  var a = n - r, o;
  if (this === t && r < e && e < n)
    for (o = a - 1; o >= 0; --o)
      t[o + e] = this[o + r];
  else if (a < 1e3 || !ut.TYPED_ARRAY_SUPPORT)
    for (o = 0; o < a; ++o)
      t[o + e] = this[o + r];
  else
    Uint8Array.prototype.set.call(t, this.subarray(r, r + a), e);
  return a;
}, ut.prototype.fill = function(t, e, r) {
  if (typeof t == "string") {
    if (typeof e == "string" ? (e = 0, r = this.length) : typeof r == "string" && (r = this.length), t.length === 1) {
      var n = t.charCodeAt(0);
      n < 256 && (t = n);
    }
  } else
    typeof t == "number" && (t = t & 255);
  if (e < 0 || this.length < e || this.length < r)
    throw new RangeError("Out of range index");
  if (r <= e)
    return this;
  e = e >>> 0, r = r === void 0 ? this.length : r >>> 0, t || (t = 0);
  var a;
  if (typeof t == "number")
    for (a = e; a < r; ++a)
      this[a] = t;
  else {
    var o = ut.isBuffer(t) ? t : new ut(t), p = o.length;
    for (a = 0; a < r - e; ++a)
      this[a + e] = o[a % p];
  }
  return this;
}, ut.concat = function(t, e) {
  if (!eu(t))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (t.length === 0)
    return Oe(null, 0);
  var r;
  if (e === void 0)
    for (e = 0, r = 0; r < t.length; ++r)
      e += t[r].length;
  var n = li(null, e), a = 0;
  for (r = 0; r < t.length; ++r) {
    var o = t[r];
    if (!ut.isBuffer(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(n, a), a += o.length;
  }
  return n;
}, ut.byteLength = ci, ut.prototype._isBuffer = !0, ut.isBuffer = function(t) {
  return !!(t != null && t._isBuffer);
}, le.alloc = function(t) {
  var e = new ut(t);
  return e.fill(0), e;
}, le.from = function(t) {
  return new ut(t);
};
var It = {}, Tr, lu = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
It.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
}, It.getSymbolTotalCodewords = function(t) {
  return lu[t];
}, It.getBCHDigit = function(t) {
  for (var e = 0; t !== 0; )
    e++, t >>>= 1;
  return e;
}, It.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Tr = t;
}, It.isKanjiModeEnabled = function() {
  return typeof Tr < "u";
}, It.toSJIS = function(t) {
  return Tr(t);
};
var yr = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    var n = r.toLowerCase();
    switch (n) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  t.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, t.from = function(r, n) {
    if (t.isValid(r))
      return r;
    try {
      return e(r);
    } catch {
      return n;
    }
  };
})(yr);
function pi() {
  this.buffer = [], this.length = 0;
}
pi.prototype = { get: function(t) {
  var e = Math.floor(t / 8);
  return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
}, put: function(t, e) {
  for (var r = 0; r < e; r++)
    this.putBit((t >>> e - r - 1 & 1) === 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(t) {
  var e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var fu = pi, qn = le;
function qe(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = qn.alloc(t * t), this.reservedBit = qn.alloc(t * t);
}
qe.prototype.set = function(t, e, r, n) {
  var a = t * this.size + e;
  this.data[a] = r, n && (this.reservedBit[a] = !0);
}, qe.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
}, qe.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
}, qe.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var cu = qe, di = {};
(function(t) {
  var e = It.getSymbolSize;
  t.getRowColCoords = function(r) {
    if (r === 1)
      return [];
    for (var n = Math.floor(r / 7) + 2, a = e(r), o = a === 145 ? 26 : Math.ceil((a - 13) / (2 * n - 2)) * 2, p = [a - 7], h = 1; h < n - 1; h++)
      p[h] = p[h - 1] - o;
    return p.push(6), p.reverse();
  }, t.getPositions = function(r) {
    for (var n = [], a = t.getRowColCoords(r), o = a.length, p = 0; p < o; p++)
      for (var h = 0; h < o; h++)
        p === 0 && h === 0 || p === 0 && h === o - 1 || p === o - 1 && h === 0 || n.push([a[p], a[h]]);
    return n;
  };
})(di);
var mi = {}, pu = It.getSymbolSize, Wn = 7;
mi.getPositions = function(t) {
  var e = pu(t);
  return [[0, 0], [e - Wn, 0], [0, e - Wn]];
};
var gi = {};
(function(t) {
  t.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
  var e = { N1: 3, N2: 3, N3: 40, N4: 10 };
  t.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, t.from = function(n) {
    return t.isValid(n) ? parseInt(n, 10) : void 0;
  }, t.getPenaltyN1 = function(n) {
    for (var a = n.size, o = 0, p = 0, h = 0, y = null, M = null, _ = 0; _ < a; _++) {
      p = h = 0, y = M = null;
      for (var x = 0; x < a; x++) {
        var F = n.get(_, x);
        F === y ? p++ : (p >= 5 && (o += e.N1 + (p - 5)), y = F, p = 1), F = n.get(x, _), F === M ? h++ : (h >= 5 && (o += e.N1 + (h - 5)), M = F, h = 1);
      }
      p >= 5 && (o += e.N1 + (p - 5)), h >= 5 && (o += e.N1 + (h - 5));
    }
    return o;
  }, t.getPenaltyN2 = function(n) {
    for (var a = n.size, o = 0, p = 0; p < a - 1; p++)
      for (var h = 0; h < a - 1; h++) {
        var y = n.get(p, h) + n.get(p, h + 1) + n.get(p + 1, h) + n.get(p + 1, h + 1);
        (y === 4 || y === 0) && o++;
      }
    return o * e.N2;
  }, t.getPenaltyN3 = function(n) {
    for (var a = n.size, o = 0, p = 0, h = 0, y = 0; y < a; y++) {
      p = h = 0;
      for (var M = 0; M < a; M++)
        p = p << 1 & 2047 | n.get(y, M), M >= 10 && (p === 1488 || p === 93) && o++, h = h << 1 & 2047 | n.get(M, y), M >= 10 && (h === 1488 || h === 93) && o++;
    }
    return o * e.N3;
  }, t.getPenaltyN4 = function(n) {
    for (var a = 0, o = n.data.length, p = 0; p < o; p++)
      a += n.data[p];
    var h = Math.abs(Math.ceil(a * 100 / o / 5) - 10);
    return h * e.N4;
  };
  function r(n, a, o) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (a + o) % 2 === 0;
      case t.Patterns.PATTERN001:
        return a % 2 === 0;
      case t.Patterns.PATTERN010:
        return o % 3 === 0;
      case t.Patterns.PATTERN011:
        return (a + o) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(a / 2) + Math.floor(o / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return a * o % 2 + a * o % 3 === 0;
      case t.Patterns.PATTERN110:
        return (a * o % 2 + a * o % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (a * o % 3 + (a + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(n, a) {
    for (var o = a.size, p = 0; p < o; p++)
      for (var h = 0; h < o; h++)
        a.isReserved(h, p) || a.xor(h, p, r(n, h, p));
  }, t.getBestMask = function(n, a) {
    for (var o = Object.keys(t.Patterns).length, p = 0, h = 1 / 0, y = 0; y < o; y++) {
      a(y), t.applyMask(y, n);
      var M = t.getPenaltyN1(n) + t.getPenaltyN2(n) + t.getPenaltyN3(n) + t.getPenaltyN4(n);
      t.applyMask(y, n), M < h && (h = M, p = y);
    }
    return p;
  };
})(gi);
var hr = {}, ie = yr, tr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], er = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
hr.getBlocksCount = function(t, e) {
  switch (e) {
    case ie.L:
      return tr[(t - 1) * 4 + 0];
    case ie.M:
      return tr[(t - 1) * 4 + 1];
    case ie.Q:
      return tr[(t - 1) * 4 + 2];
    case ie.H:
      return tr[(t - 1) * 4 + 3];
    default:
      return;
  }
}, hr.getTotalCodewordsCount = function(t, e) {
  switch (e) {
    case ie.L:
      return er[(t - 1) * 4 + 0];
    case ie.M:
      return er[(t - 1) * 4 + 1];
    case ie.Q:
      return er[(t - 1) * 4 + 2];
    case ie.H:
      return er[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var yi = {}, rr = {}, vi = le, Ie = vi.alloc(512), nr = vi.alloc(256);
(function() {
  for (var t = 1, e = 0; e < 255; e++)
    Ie[e] = t, nr[t] = e, t <<= 1, t & 256 && (t ^= 285);
  for (e = 255; e < 512; e++)
    Ie[e] = Ie[e - 255];
})(), rr.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return nr[t];
}, rr.exp = function(t) {
  return Ie[t];
}, rr.mul = function(t, e) {
  return t === 0 || e === 0 ? 0 : Ie[nr[t] + nr[e]];
}, function(t) {
  var e = le, r = rr;
  t.mul = function(n, a) {
    for (var o = e.alloc(n.length + a.length - 1), p = 0; p < n.length; p++)
      for (var h = 0; h < a.length; h++)
        o[p + h] ^= r.mul(n[p], a[h]);
    return o;
  }, t.mod = function(n, a) {
    for (var o = e.from(n); o.length - a.length >= 0; ) {
      for (var p = o[0], h = 0; h < a.length; h++)
        o[h] ^= r.mul(a[h], p);
      for (var y = 0; y < o.length && o[y] === 0; )
        y++;
      o = o.slice(y);
    }
    return o;
  }, t.generateECPolynomial = function(n) {
    for (var a = e.from([1]), o = 0; o < n; o++)
      a = t.mul(a, [1, r.exp(o)]);
    return a;
  };
}(yi);
var _i = {}, sr = {};
sr.byteLength = gu, sr.toByteArray = vu, sr.fromByteArray = bu;
for (var Zt = [], Dt = [], du = typeof Uint8Array < "u" ? Uint8Array : Array, Pr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = 0, mu = Pr.length; Ee < mu; ++Ee)
  Zt[Ee] = Pr[Ee], Dt[Pr.charCodeAt(Ee)] = Ee;
Dt["-".charCodeAt(0)] = 62, Dt["_".charCodeAt(0)] = 63;
function wi(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function gu(t) {
  var e = wi(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function yu(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function vu(t) {
  var e, r = wi(t), n = r[0], a = r[1], o = new du(yu(t, n, a)), p = 0, h = a > 0 ? n - 4 : n, y;
  for (y = 0; y < h; y += 4)
    e = Dt[t.charCodeAt(y)] << 18 | Dt[t.charCodeAt(y + 1)] << 12 | Dt[t.charCodeAt(y + 2)] << 6 | Dt[t.charCodeAt(y + 3)], o[p++] = e >> 16 & 255, o[p++] = e >> 8 & 255, o[p++] = e & 255;
  return a === 2 && (e = Dt[t.charCodeAt(y)] << 2 | Dt[t.charCodeAt(y + 1)] >> 4, o[p++] = e & 255), a === 1 && (e = Dt[t.charCodeAt(y)] << 10 | Dt[t.charCodeAt(y + 1)] << 4 | Dt[t.charCodeAt(y + 2)] >> 2, o[p++] = e >> 8 & 255, o[p++] = e & 255), o;
}
function _u(t) {
  return Zt[t >> 18 & 63] + Zt[t >> 12 & 63] + Zt[t >> 6 & 63] + Zt[t & 63];
}
function wu(t, e, r) {
  for (var n, a = [], o = e; o < r; o += 3)
    n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (t[o + 2] & 255), a.push(_u(n));
  return a.join("");
}
function bu(t) {
  for (var e, r = t.length, n = r % 3, a = [], o = 16383, p = 0, h = r - n; p < h; p += o)
    a.push(wu(t, p, p + o > h ? h : p + o));
  return n === 1 ? (e = t[r - 1], a.push(Zt[e >> 2] + Zt[e << 4 & 63] + "==")) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], a.push(Zt[e >> 10] + Zt[e >> 4 & 63] + Zt[e << 2 & 63] + "=")), a.join("");
}
var Kr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Kr.read = function(t, e, r, n, a) {
  var o, p, h = a * 8 - n - 1, y = (1 << h) - 1, M = y >> 1, _ = -7, x = r ? a - 1 : 0, F = r ? -1 : 1, O = t[e + x];
  for (x += F, o = O & (1 << -_) - 1, O >>= -_, _ += h; _ > 0; o = o * 256 + t[e + x], x += F, _ -= 8)
    ;
  for (p = o & (1 << -_) - 1, o >>= -_, _ += n; _ > 0; p = p * 256 + t[e + x], x += F, _ -= 8)
    ;
  if (o === 0)
    o = 1 - M;
  else {
    if (o === y)
      return p ? NaN : (O ? -1 : 1) * (1 / 0);
    p = p + Math.pow(2, n), o = o - M;
  }
  return (O ? -1 : 1) * p * Math.pow(2, o - n);
}, Kr.write = function(t, e, r, n, a, o) {
  var p, h, y, M = o * 8 - a - 1, _ = (1 << M) - 1, x = _ >> 1, F = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, O = n ? 0 : o - 1, I = n ? 1 : -1, P = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0, p = _) : (p = Math.floor(Math.log(e) / Math.LN2), e * (y = Math.pow(2, -p)) < 1 && (p--, y *= 2), p + x >= 1 ? e += F / y : e += F * Math.pow(2, 1 - x), e * y >= 2 && (p++, y /= 2), p + x >= _ ? (h = 0, p = _) : p + x >= 1 ? (h = (e * y - 1) * Math.pow(2, a), p = p + x) : (h = e * Math.pow(2, x - 1) * Math.pow(2, a), p = 0)); a >= 8; t[r + O] = h & 255, O += I, h /= 256, a -= 8)
    ;
  for (p = p << a | h, M += a; M > 0; t[r + O] = p & 255, O += I, p /= 256, M -= 8)
    ;
  t[r + O - I] |= P * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(t) {
  var e = sr, r = Kr, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = h, t.SlowBuffer = k, t.INSPECT_MAX_BYTES = 50;
  var a = 2147483647;
  t.kMaxLength = a, h.TYPED_ARRAY_SUPPORT = o(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function o() {
    try {
      var s = new Uint8Array(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(s, l), s.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(h.prototype, "parent", { enumerable: !0, get: function() {
    if (h.isBuffer(this))
      return this.buffer;
  } }), Object.defineProperty(h.prototype, "offset", { enumerable: !0, get: function() {
    if (h.isBuffer(this))
      return this.byteOffset;
  } });
  function p(s) {
    if (s > a)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
    var l = new Uint8Array(s);
    return Object.setPrototypeOf(l, h.prototype), l;
  }
  function h(s, l, m) {
    if (typeof s == "number") {
      if (typeof l == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return x(s);
    }
    return y(s, l, m);
  }
  h.poolSize = 8192;
  function y(s, l, m) {
    if (typeof s == "string")
      return F(s, l);
    if (ArrayBuffer.isView(s))
      return I(s);
    if (s == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s);
    if (et(s, ArrayBuffer) || s && et(s.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (et(s, SharedArrayBuffer) || s && et(s.buffer, SharedArrayBuffer)))
      return P(s, l, m);
    if (typeof s == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    var E = s.valueOf && s.valueOf();
    if (E != null && E !== s)
      return h.from(E, l, m);
    var N = C(s);
    if (N)
      return N;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof s[Symbol.toPrimitive] == "function")
      return h.from(s[Symbol.toPrimitive]("string"), l, m);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s);
  }
  h.from = function(s, l, m) {
    return y(s, l, m);
  }, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array);
  function M(s) {
    if (typeof s != "number")
      throw new TypeError('"size" argument must be of type number');
    if (s < 0)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
  }
  function _(s, l, m) {
    return M(s), s <= 0 ? p(s) : l !== void 0 ? typeof m == "string" ? p(s).fill(l, m) : p(s).fill(l) : p(s);
  }
  h.alloc = function(s, l, m) {
    return _(s, l, m);
  };
  function x(s) {
    return M(s), p(s < 0 ? 0 : B(s) | 0);
  }
  h.allocUnsafe = function(s) {
    return x(s);
  }, h.allocUnsafeSlow = function(s) {
    return x(s);
  };
  function F(s, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !h.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    var m = S(s, l) | 0, E = p(m), N = E.write(s, l);
    return N !== m && (E = E.slice(0, N)), E;
  }
  function O(s) {
    for (var l = s.length < 0 ? 0 : B(s.length) | 0, m = p(l), E = 0; E < l; E += 1)
      m[E] = s[E] & 255;
    return m;
  }
  function I(s) {
    if (et(s, Uint8Array)) {
      var l = new Uint8Array(s);
      return P(l.buffer, l.byteOffset, l.byteLength);
    }
    return O(s);
  }
  function P(s, l, m) {
    if (l < 0 || s.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (s.byteLength < l + (m || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var E;
    return l === void 0 && m === void 0 ? E = new Uint8Array(s) : m === void 0 ? E = new Uint8Array(s, l) : E = new Uint8Array(s, l, m), Object.setPrototypeOf(E, h.prototype), E;
  }
  function C(s) {
    if (h.isBuffer(s)) {
      var l = B(s.length) | 0, m = p(l);
      return m.length === 0 || s.copy(m, 0, 0, l), m;
    }
    if (s.length !== void 0)
      return typeof s.length != "number" || Y(s.length) ? p(0) : O(s);
    if (s.type === "Buffer" && Array.isArray(s.data))
      return O(s.data);
  }
  function B(s) {
    if (s >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return s | 0;
  }
  function k(s) {
    return +s != s && (s = 0), h.alloc(+s);
  }
  h.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== h.prototype;
  }, h.compare = function(s, l) {
    if (et(s, Uint8Array) && (s = h.from(s, s.offset, s.byteLength)), et(l, Uint8Array) && (l = h.from(l, l.offset, l.byteLength)), !h.isBuffer(s) || !h.isBuffer(l))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (s === l)
      return 0;
    for (var m = s.length, E = l.length, N = 0, W = Math.min(m, E); N < W; ++N)
      if (s[N] !== l[N]) {
        m = s[N], E = l[N];
        break;
      }
    return m < E ? -1 : E < m ? 1 : 0;
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
  }, h.concat = function(s, l) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return h.alloc(0);
    var m;
    if (l === void 0)
      for (l = 0, m = 0; m < s.length; ++m)
        l += s[m].length;
    var E = h.allocUnsafe(l), N = 0;
    for (m = 0; m < s.length; ++m) {
      var W = s[m];
      if (et(W, Uint8Array))
        N + W.length > E.length ? h.from(W).copy(E, N) : Uint8Array.prototype.set.call(E, W, N);
      else if (h.isBuffer(W))
        W.copy(E, N);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      N += W.length;
    }
    return E;
  };
  function S(s, l) {
    if (h.isBuffer(s))
      return s.length;
    if (ArrayBuffer.isView(s) || et(s, ArrayBuffer))
      return s.byteLength;
    if (typeof s != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof s);
    var m = s.length, E = arguments.length > 2 && arguments[2] === !0;
    if (!E && m === 0)
      return 0;
    for (var N = !1; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return m;
        case "utf8":
        case "utf-8":
          return j(s).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return m * 2;
        case "hex":
          return m >>> 1;
        case "base64":
          return Z(s).length;
        default:
          if (N)
            return E ? -1 : j(s).length;
          l = ("" + l).toLowerCase(), N = !0;
      }
  }
  h.byteLength = S;
  function q(s, l, m) {
    var E = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((m === void 0 || m > this.length) && (m = this.length), m <= 0) || (m >>>= 0, l >>>= 0, m <= l))
      return "";
    for (s || (s = "utf8"); ; )
      switch (s) {
        case "hex":
          return w(this, l, m);
        case "utf8":
        case "utf-8":
          return b(this, l, m);
        case "ascii":
          return v(this, l, m);
        case "latin1":
        case "binary":
          return u(this, l, m);
        case "base64":
          return g(this, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return D(this, l, m);
        default:
          if (E)
            throw new TypeError("Unknown encoding: " + s);
          s = (s + "").toLowerCase(), E = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function J(s, l, m) {
    var E = s[l];
    s[l] = s[m], s[m] = E;
  }
  h.prototype.swap16 = function() {
    var s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var l = 0; l < s; l += 2)
      J(this, l, l + 1);
    return this;
  }, h.prototype.swap32 = function() {
    var s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var l = 0; l < s; l += 4)
      J(this, l, l + 3), J(this, l + 1, l + 2);
    return this;
  }, h.prototype.swap64 = function() {
    var s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var l = 0; l < s; l += 8)
      J(this, l, l + 7), J(this, l + 1, l + 6), J(this, l + 2, l + 5), J(this, l + 3, l + 4);
    return this;
  }, h.prototype.toString = function() {
    var s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? b(this, 0, s) : q.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(s) {
    if (!h.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : h.compare(this, s) === 0;
  }, h.prototype.inspect = function() {
    var s = "", l = t.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (s += " ... "), "<Buffer " + s + ">";
  }, n && (h.prototype[n] = h.prototype.inspect), h.prototype.compare = function(s, l, m, E, N) {
    if (et(s, Uint8Array) && (s = h.from(s, s.offset, s.byteLength)), !h.isBuffer(s))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s);
    if (l === void 0 && (l = 0), m === void 0 && (m = s ? s.length : 0), E === void 0 && (E = 0), N === void 0 && (N = this.length), l < 0 || m > s.length || E < 0 || N > this.length)
      throw new RangeError("out of range index");
    if (E >= N && l >= m)
      return 0;
    if (E >= N)
      return -1;
    if (l >= m)
      return 1;
    if (l >>>= 0, m >>>= 0, E >>>= 0, N >>>= 0, this === s)
      return 0;
    for (var W = N - E, z = m - l, rt = Math.min(W, z), dt = this.slice(E, N), nt = s.slice(l, m), st = 0; st < rt; ++st)
      if (dt[st] !== nt[st]) {
        W = dt[st], z = nt[st];
        break;
      }
    return W < z ? -1 : z < W ? 1 : 0;
  };
  function K(s, l, m, E, N) {
    if (s.length === 0)
      return -1;
    if (typeof m == "string" ? (E = m, m = 0) : m > 2147483647 ? m = 2147483647 : m < -2147483648 && (m = -2147483648), m = +m, Y(m) && (m = N ? 0 : s.length - 1), m < 0 && (m = s.length + m), m >= s.length) {
      if (N)
        return -1;
      m = s.length - 1;
    } else if (m < 0)
      if (N)
        m = 0;
      else
        return -1;
    if (typeof l == "string" && (l = h.from(l, E)), h.isBuffer(l))
      return l.length === 0 ? -1 : ot(s, l, m, E, N);
    if (typeof l == "number")
      return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? N ? Uint8Array.prototype.indexOf.call(s, l, m) : Uint8Array.prototype.lastIndexOf.call(s, l, m) : ot(s, [l], m, E, N);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ot(s, l, m, E, N) {
    var W = 1, z = s.length, rt = l.length;
    if (E !== void 0 && (E = String(E).toLowerCase(), E === "ucs2" || E === "ucs-2" || E === "utf16le" || E === "utf-16le")) {
      if (s.length < 2 || l.length < 2)
        return -1;
      W = 2, z /= 2, rt /= 2, m /= 2;
    }
    function dt(ct, qt) {
      return W === 1 ? ct[qt] : ct.readUInt16BE(qt * W);
    }
    var nt;
    if (N) {
      var st = -1;
      for (nt = m; nt < z; nt++)
        if (dt(s, nt) === dt(l, st === -1 ? 0 : nt - st)) {
          if (st === -1 && (st = nt), nt - st + 1 === rt)
            return st * W;
        } else
          st !== -1 && (nt -= nt - st), st = -1;
    } else
      for (m + rt > z && (m = z - rt), nt = m; nt >= 0; nt--) {
        for (var Ut = !0, ft = 0; ft < rt; ft++)
          if (dt(s, nt + ft) !== dt(l, ft)) {
            Ut = !1;
            break;
          }
        if (Ut)
          return nt;
      }
    return -1;
  }
  h.prototype.includes = function(s, l, m) {
    return this.indexOf(s, l, m) !== -1;
  }, h.prototype.indexOf = function(s, l, m) {
    return K(this, s, l, m, !0);
  }, h.prototype.lastIndexOf = function(s, l, m) {
    return K(this, s, l, m, !1);
  };
  function tt(s, l, m, E) {
    m = Number(m) || 0;
    var N = s.length - m;
    E ? (E = Number(E), E > N && (E = N)) : E = N;
    var W = l.length;
    E > W / 2 && (E = W / 2);
    for (var z = 0; z < E; ++z) {
      var rt = parseInt(l.substr(z * 2, 2), 16);
      if (Y(rt))
        return z;
      s[m + z] = rt;
    }
    return z;
  }
  function lt(s, l, m, E) {
    return X(j(l, s.length - m), s, m, E);
  }
  function i(s, l, m, E) {
    return X(V(l), s, m, E);
  }
  function f(s, l, m, E) {
    return X(Z(l), s, m, E);
  }
  function d(s, l, m, E) {
    return X($(l, s.length - m), s, m, E);
  }
  h.prototype.write = function(s, l, m, E) {
    if (l === void 0)
      E = "utf8", m = this.length, l = 0;
    else if (m === void 0 && typeof l == "string")
      E = l, m = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(m) ? (m = m >>> 0, E === void 0 && (E = "utf8")) : (E = m, m = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var N = this.length - l;
    if ((m === void 0 || m > N) && (m = N), s.length > 0 && (m < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    E || (E = "utf8");
    for (var W = !1; ; )
      switch (E) {
        case "hex":
          return tt(this, s, l, m);
        case "utf8":
        case "utf-8":
          return lt(this, s, l, m);
        case "ascii":
        case "latin1":
        case "binary":
          return i(this, s, l, m);
        case "base64":
          return f(this, s, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return d(this, s, l, m);
        default:
          if (W)
            throw new TypeError("Unknown encoding: " + E);
          E = ("" + E).toLowerCase(), W = !0;
      }
  }, h.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function g(s, l, m) {
    return l === 0 && m === s.length ? e.fromByteArray(s) : e.fromByteArray(s.slice(l, m));
  }
  function b(s, l, m) {
    m = Math.min(s.length, m);
    for (var E = [], N = l; N < m; ) {
      var W = s[N], z = null, rt = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
      if (N + rt <= m) {
        var dt, nt, st, Ut;
        switch (rt) {
          case 1:
            W < 128 && (z = W);
            break;
          case 2:
            dt = s[N + 1], (dt & 192) === 128 && (Ut = (W & 31) << 6 | dt & 63, Ut > 127 && (z = Ut));
            break;
          case 3:
            dt = s[N + 1], nt = s[N + 2], (dt & 192) === 128 && (nt & 192) === 128 && (Ut = (W & 15) << 12 | (dt & 63) << 6 | nt & 63, Ut > 2047 && (Ut < 55296 || Ut > 57343) && (z = Ut));
            break;
          case 4:
            dt = s[N + 1], nt = s[N + 2], st = s[N + 3], (dt & 192) === 128 && (nt & 192) === 128 && (st & 192) === 128 && (Ut = (W & 15) << 18 | (dt & 63) << 12 | (nt & 63) << 6 | st & 63, Ut > 65535 && Ut < 1114112 && (z = Ut));
        }
      }
      z === null ? (z = 65533, rt = 1) : z > 65535 && (z -= 65536, E.push(z >>> 10 & 1023 | 55296), z = 56320 | z & 1023), E.push(z), N += rt;
    }
    return A(E);
  }
  var L = 4096;
  function A(s) {
    var l = s.length;
    if (l <= L)
      return String.fromCharCode.apply(String, s);
    for (var m = "", E = 0; E < l; )
      m += String.fromCharCode.apply(String, s.slice(E, E += L));
    return m;
  }
  function v(s, l, m) {
    var E = "";
    m = Math.min(s.length, m);
    for (var N = l; N < m; ++N)
      E += String.fromCharCode(s[N] & 127);
    return E;
  }
  function u(s, l, m) {
    var E = "";
    m = Math.min(s.length, m);
    for (var N = l; N < m; ++N)
      E += String.fromCharCode(s[N]);
    return E;
  }
  function w(s, l, m) {
    var E = s.length;
    (!l || l < 0) && (l = 0), (!m || m < 0 || m > E) && (m = E);
    for (var N = "", W = l; W < m; ++W)
      N += ht[s[W]];
    return N;
  }
  function D(s, l, m) {
    for (var E = s.slice(l, m), N = "", W = 0; W < E.length - 1; W += 2)
      N += String.fromCharCode(E[W] + E[W + 1] * 256);
    return N;
  }
  h.prototype.slice = function(s, l) {
    var m = this.length;
    s = ~~s, l = l === void 0 ? m : ~~l, s < 0 ? (s += m, s < 0 && (s = 0)) : s > m && (s = m), l < 0 ? (l += m, l < 0 && (l = 0)) : l > m && (l = m), l < s && (l = s);
    var E = this.subarray(s, l);
    return Object.setPrototypeOf(E, h.prototype), E;
  };
  function U(s, l, m) {
    if (s % 1 !== 0 || s < 0)
      throw new RangeError("offset is not uint");
    if (s + l > m)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(s, l, m) {
    s = s >>> 0, l = l >>> 0, m || U(s, l, this.length);
    for (var E = this[s], N = 1, W = 0; ++W < l && (N *= 256); )
      E += this[s + W] * N;
    return E;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(s, l, m) {
    s = s >>> 0, l = l >>> 0, m || U(s, l, this.length);
    for (var E = this[s + --l], N = 1; l > 0 && (N *= 256); )
      E += this[s + --l] * N;
    return E;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(s, l) {
    return s = s >>> 0, l || U(s, 1, this.length), this[s];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(s, l) {
    return s = s >>> 0, l || U(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(s, l) {
    return s = s >>> 0, l || U(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(s, l) {
    return s = s >>> 0, l || U(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(s, l) {
    return s = s >>> 0, l || U(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, h.prototype.readIntLE = function(s, l, m) {
    s = s >>> 0, l = l >>> 0, m || U(s, l, this.length);
    for (var E = this[s], N = 1, W = 0; ++W < l && (N *= 256); )
      E += this[s + W] * N;
    return N *= 128, E >= N && (E -= Math.pow(2, 8 * l)), E;
  }, h.prototype.readIntBE = function(s, l, m) {
    s = s >>> 0, l = l >>> 0, m || U(s, l, this.length);
    for (var E = l, N = 1, W = this[s + --E]; E > 0 && (N *= 256); )
      W += this[s + --E] * N;
    return N *= 128, W >= N && (W -= Math.pow(2, 8 * l)), W;
  }, h.prototype.readInt8 = function(s, l) {
    return s = s >>> 0, l || U(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, h.prototype.readInt16LE = function(s, l) {
    s = s >>> 0, l || U(s, 2, this.length);
    var m = this[s] | this[s + 1] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, h.prototype.readInt16BE = function(s, l) {
    s = s >>> 0, l || U(s, 2, this.length);
    var m = this[s + 1] | this[s] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, h.prototype.readInt32LE = function(s, l) {
    return s = s >>> 0, l || U(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, h.prototype.readInt32BE = function(s, l) {
    return s = s >>> 0, l || U(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, h.prototype.readFloatLE = function(s, l) {
    return s = s >>> 0, l || U(s, 4, this.length), r.read(this, s, !0, 23, 4);
  }, h.prototype.readFloatBE = function(s, l) {
    return s = s >>> 0, l || U(s, 4, this.length), r.read(this, s, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(s, l) {
    return s = s >>> 0, l || U(s, 8, this.length), r.read(this, s, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(s, l) {
    return s = s >>> 0, l || U(s, 8, this.length), r.read(this, s, !1, 52, 8);
  };
  function H(s, l, m, E, N, W) {
    if (!h.isBuffer(s))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > N || l < W)
      throw new RangeError('"value" argument is out of bounds');
    if (m + E > s.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(s, l, m, E) {
    if (s = +s, l = l >>> 0, m = m >>> 0, !E) {
      var N = Math.pow(2, 8 * m) - 1;
      H(this, s, l, m, N, 0);
    }
    var W = 1, z = 0;
    for (this[l] = s & 255; ++z < m && (W *= 256); )
      this[l + z] = s / W & 255;
    return l + m;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(s, l, m, E) {
    if (s = +s, l = l >>> 0, m = m >>> 0, !E) {
      var N = Math.pow(2, 8 * m) - 1;
      H(this, s, l, m, N, 0);
    }
    var W = m - 1, z = 1;
    for (this[l + W] = s & 255; --W >= 0 && (z *= 256); )
      this[l + W] = s / z & 255;
    return l + m;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 1, 255, 0), this[l] = s & 255, l + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 2, 65535, 0), this[l] = s & 255, this[l + 1] = s >>> 8, l + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 2, 65535, 0), this[l] = s >>> 8, this[l + 1] = s & 255, l + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 4, 4294967295, 0), this[l + 3] = s >>> 24, this[l + 2] = s >>> 16, this[l + 1] = s >>> 8, this[l] = s & 255, l + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 4, 4294967295, 0), this[l] = s >>> 24, this[l + 1] = s >>> 16, this[l + 2] = s >>> 8, this[l + 3] = s & 255, l + 4;
  }, h.prototype.writeIntLE = function(s, l, m, E) {
    if (s = +s, l = l >>> 0, !E) {
      var N = Math.pow(2, 8 * m - 1);
      H(this, s, l, m, N - 1, -N);
    }
    var W = 0, z = 1, rt = 0;
    for (this[l] = s & 255; ++W < m && (z *= 256); )
      s < 0 && rt === 0 && this[l + W - 1] !== 0 && (rt = 1), this[l + W] = (s / z >> 0) - rt & 255;
    return l + m;
  }, h.prototype.writeIntBE = function(s, l, m, E) {
    if (s = +s, l = l >>> 0, !E) {
      var N = Math.pow(2, 8 * m - 1);
      H(this, s, l, m, N - 1, -N);
    }
    var W = m - 1, z = 1, rt = 0;
    for (this[l + W] = s & 255; --W >= 0 && (z *= 256); )
      s < 0 && rt === 0 && this[l + W + 1] !== 0 && (rt = 1), this[l + W] = (s / z >> 0) - rt & 255;
    return l + m;
  }, h.prototype.writeInt8 = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[l] = s & 255, l + 1;
  }, h.prototype.writeInt16LE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 2, 32767, -32768), this[l] = s & 255, this[l + 1] = s >>> 8, l + 2;
  }, h.prototype.writeInt16BE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 2, 32767, -32768), this[l] = s >>> 8, this[l + 1] = s & 255, l + 2;
  }, h.prototype.writeInt32LE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 4, 2147483647, -2147483648), this[l] = s & 255, this[l + 1] = s >>> 8, this[l + 2] = s >>> 16, this[l + 3] = s >>> 24, l + 4;
  }, h.prototype.writeInt32BE = function(s, l, m) {
    return s = +s, l = l >>> 0, m || H(this, s, l, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[l] = s >>> 24, this[l + 1] = s >>> 16, this[l + 2] = s >>> 8, this[l + 3] = s & 255, l + 4;
  };
  function G(s, l, m, E, N, W) {
    if (m + E > s.length)
      throw new RangeError("Index out of range");
    if (m < 0)
      throw new RangeError("Index out of range");
  }
  function Q(s, l, m, E, N) {
    return l = +l, m = m >>> 0, N || G(s, l, m, 4), r.write(s, l, m, E, 23, 4), m + 4;
  }
  h.prototype.writeFloatLE = function(s, l, m) {
    return Q(this, s, l, !0, m);
  }, h.prototype.writeFloatBE = function(s, l, m) {
    return Q(this, s, l, !1, m);
  };
  function c(s, l, m, E, N) {
    return l = +l, m = m >>> 0, N || G(s, l, m, 8), r.write(s, l, m, E, 52, 8), m + 8;
  }
  h.prototype.writeDoubleLE = function(s, l, m) {
    return c(this, s, l, !0, m);
  }, h.prototype.writeDoubleBE = function(s, l, m) {
    return c(this, s, l, !1, m);
  }, h.prototype.copy = function(s, l, m, E) {
    if (!h.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (m || (m = 0), !E && E !== 0 && (E = this.length), l >= s.length && (l = s.length), l || (l = 0), E > 0 && E < m && (E = m), E === m || s.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (m < 0 || m >= this.length)
      throw new RangeError("Index out of range");
    if (E < 0)
      throw new RangeError("sourceEnd out of bounds");
    E > this.length && (E = this.length), s.length - l < E - m && (E = s.length - l + m);
    var N = E - m;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, m, E) : Uint8Array.prototype.set.call(s, this.subarray(m, E), l), N;
  }, h.prototype.fill = function(s, l, m, E) {
    if (typeof s == "string") {
      if (typeof l == "string" ? (E = l, l = 0, m = this.length) : typeof m == "string" && (E = m, m = this.length), E !== void 0 && typeof E != "string")
        throw new TypeError("encoding must be a string");
      if (typeof E == "string" && !h.isEncoding(E))
        throw new TypeError("Unknown encoding: " + E);
      if (s.length === 1) {
        var N = s.charCodeAt(0);
        (E === "utf8" && N < 128 || E === "latin1") && (s = N);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (l < 0 || this.length < l || this.length < m)
      throw new RangeError("Out of range index");
    if (m <= l)
      return this;
    l = l >>> 0, m = m === void 0 ? this.length : m >>> 0, s || (s = 0);
    var W;
    if (typeof s == "number")
      for (W = l; W < m; ++W)
        this[W] = s;
    else {
      var z = h.isBuffer(s) ? s : h.from(s, E), rt = z.length;
      if (rt === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (W = 0; W < m - l; ++W)
        this[W + l] = z[W % rt];
    }
    return this;
  };
  var R = /[^+/0-9A-Za-z-_]/g;
  function T(s) {
    if (s = s.split("=")[0], s = s.trim().replace(R, ""), s.length < 2)
      return "";
    for (; s.length % 4 !== 0; )
      s = s + "=";
    return s;
  }
  function j(s, l) {
    l = l || 1 / 0;
    for (var m, E = s.length, N = null, W = [], z = 0; z < E; ++z) {
      if (m = s.charCodeAt(z), m > 55295 && m < 57344) {
        if (!N) {
          if (m > 56319) {
            (l -= 3) > -1 && W.push(239, 191, 189);
            continue;
          } else if (z + 1 === E) {
            (l -= 3) > -1 && W.push(239, 191, 189);
            continue;
          }
          N = m;
          continue;
        }
        if (m < 56320) {
          (l -= 3) > -1 && W.push(239, 191, 189), N = m;
          continue;
        }
        m = (N - 55296 << 10 | m - 56320) + 65536;
      } else
        N && (l -= 3) > -1 && W.push(239, 191, 189);
      if (N = null, m < 128) {
        if ((l -= 1) < 0)
          break;
        W.push(m);
      } else if (m < 2048) {
        if ((l -= 2) < 0)
          break;
        W.push(m >> 6 | 192, m & 63 | 128);
      } else if (m < 65536) {
        if ((l -= 3) < 0)
          break;
        W.push(m >> 12 | 224, m >> 6 & 63 | 128, m & 63 | 128);
      } else if (m < 1114112) {
        if ((l -= 4) < 0)
          break;
        W.push(m >> 18 | 240, m >> 12 & 63 | 128, m >> 6 & 63 | 128, m & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return W;
  }
  function V(s) {
    for (var l = [], m = 0; m < s.length; ++m)
      l.push(s.charCodeAt(m) & 255);
    return l;
  }
  function $(s, l) {
    for (var m, E, N, W = [], z = 0; z < s.length && !((l -= 2) < 0); ++z)
      m = s.charCodeAt(z), E = m >> 8, N = m % 256, W.push(N), W.push(E);
    return W;
  }
  function Z(s) {
    return e.toByteArray(T(s));
  }
  function X(s, l, m, E) {
    for (var N = 0; N < E && !(N + m >= l.length || N >= s.length); ++N)
      l[N + m] = s[N];
    return N;
  }
  function et(s, l) {
    return s instanceof l || s != null && s.constructor != null && s.constructor.name != null && s.constructor.name === l.name;
  }
  function Y(s) {
    return s !== s;
  }
  var ht = function() {
    for (var s = "0123456789abcdef", l = new Array(256), m = 0; m < 16; ++m)
      for (var E = m * 16, N = 0; N < 16; ++N)
        l[E + N] = s[m] + s[N];
    return l;
  }();
})(_i);
var Zn = le, $n = yi, Mu = _i.Buffer;
function Gr(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
Gr.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = $n.generateECPolynomial(this.degree);
}, Gr.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var e = Zn.alloc(this.degree), r = Mu.concat([t, e], t.length + this.degree), n = $n.mod(r, this.genPoly), a = this.degree - n.length;
  if (a > 0) {
    var o = Zn.alloc(this.degree);
    return n.copy(o, a), o;
  }
  return n;
};
var Eu = Gr, bi = {}, fe = {}, Xr = {};
Xr.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var $t = {}, Mi = "[0-9]+", Lu = "[A-Z $%*+\\-./:]+", Ye = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Ye = Ye.replace(/u/g, "\\u");
var Au = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Ye + `)(?:.|[\r
]))+`;
$t.KANJI = new RegExp(Ye, "g"), $t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), $t.BYTE = new RegExp(Au, "g"), $t.NUMERIC = new RegExp(Mi, "g"), $t.ALPHANUMERIC = new RegExp(Lu, "g");
var ku = new RegExp("^" + Ye + "$"), Cu = new RegExp("^" + Mi + "$"), Bu = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
$t.testKanji = function(t) {
  return ku.test(t);
}, $t.testNumeric = function(t) {
  return Cu.test(t);
}, $t.testAlphanumeric = function(t) {
  return Bu.test(t);
}, function(t) {
  var e = Xr, r = $t;
  t.NUMERIC = { id: "Numeric", bit: 1 << 0, ccBits: [10, 12, 14] }, t.ALPHANUMERIC = { id: "Alphanumeric", bit: 1 << 1, ccBits: [9, 11, 13] }, t.BYTE = { id: "Byte", bit: 1 << 2, ccBits: [8, 16, 16] }, t.KANJI = { id: "Kanji", bit: 1 << 3, ccBits: [8, 10, 12] }, t.MIXED = { bit: -1 }, t.getCharCountIndicator = function(a, o) {
    if (!a.ccBits)
      throw new Error("Invalid mode: " + a);
    if (!e.isValid(o))
      throw new Error("Invalid version: " + o);
    return o >= 1 && o < 10 ? a.ccBits[0] : o < 27 ? a.ccBits[1] : a.ccBits[2];
  }, t.getBestModeForData = function(a) {
    return r.testNumeric(a) ? t.NUMERIC : r.testAlphanumeric(a) ? t.ALPHANUMERIC : r.testKanji(a) ? t.KANJI : t.BYTE;
  }, t.toString = function(a) {
    if (a && a.id)
      return a.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(a) {
    return a && a.bit && a.ccBits;
  };
  function n(a) {
    if (typeof a != "string")
      throw new Error("Param is not a string");
    var o = a.toLowerCase();
    switch (o) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + a);
    }
  }
  t.from = function(a, o) {
    if (t.isValid(a))
      return a;
    try {
      return n(a);
    } catch {
      return o;
    }
  };
}(fe), function(t) {
  var e = It, r = hr, n = yr, a = fe, o = Xr, p = Mn, h = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, y = e.getBCHDigit(h);
  function M(O, I, P) {
    for (var C = 1; C <= 40; C++)
      if (I <= t.getCapacity(C, P, O))
        return C;
  }
  function _(O, I) {
    return a.getCharCountIndicator(O, I) + 4;
  }
  function x(O, I) {
    var P = 0;
    return O.forEach(function(C) {
      var B = _(C.mode, I);
      P += B + C.getBitsLength();
    }), P;
  }
  function F(O, I) {
    for (var P = 1; P <= 40; P++) {
      var C = x(O, P);
      if (C <= t.getCapacity(P, I, a.MIXED))
        return P;
    }
  }
  t.from = function(O, I) {
    return o.isValid(O) ? parseInt(O, 10) : I;
  }, t.getCapacity = function(O, I, P) {
    if (!o.isValid(O))
      throw new Error("Invalid QR Code version");
    typeof P > "u" && (P = a.BYTE);
    var C = e.getSymbolTotalCodewords(O), B = r.getTotalCodewordsCount(O, I), k = (C - B) * 8;
    if (P === a.MIXED)
      return k;
    var S = k - _(P, O);
    switch (P) {
      case a.NUMERIC:
        return Math.floor(S / 10 * 3);
      case a.ALPHANUMERIC:
        return Math.floor(S / 11 * 2);
      case a.KANJI:
        return Math.floor(S / 13);
      case a.BYTE:
      default:
        return Math.floor(S / 8);
    }
  }, t.getBestVersionForData = function(O, I) {
    var P, C = n.from(I, n.M);
    if (p(O)) {
      if (O.length > 1)
        return F(O, C);
      if (O.length === 0)
        return 1;
      P = O[0];
    } else
      P = O;
    return M(P.mode, P.getLength(), C);
  }, t.getEncodedBits = function(O) {
    if (!o.isValid(O) || O < 7)
      throw new Error("Invalid QR Code version");
    for (var I = O << 12; e.getBCHDigit(I) - y >= 0; )
      I ^= h << e.getBCHDigit(I) - y;
    return O << 12 | I;
  };
}(bi);
var Ei = {}, Qr = It, Li = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, Su = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, zn = Qr.getBCHDigit(Li);
Ei.getEncodedBits = function(t, e) {
  for (var r = t.bit << 3 | e, n = r << 10; Qr.getBCHDigit(n) - zn >= 0; )
    n ^= Li << Qr.getBCHDigit(n) - zn;
  return (r << 10 | n) ^ Su;
};
var Ai = {}, Nu = fe;
function Le(t) {
  this.mode = Nu.NUMERIC, this.data = t.toString();
}
Le.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
}, Le.prototype.getLength = function() {
  return this.data.length;
}, Le.prototype.getBitsLength = function() {
  return Le.getBitsLength(this.data.length);
}, Le.prototype.write = function(t) {
  var e, r, n;
  for (e = 0; e + 3 <= this.data.length; e += 3)
    r = this.data.substr(e, 3), n = parseInt(r, 10), t.put(n, 10);
  var a = this.data.length - e;
  a > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(n, a * 3 + 1));
};
var xu = Le, Ou = fe, Ur = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function Ae(t) {
  this.mode = Ou.ALPHANUMERIC, this.data = t;
}
Ae.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
}, Ae.prototype.getLength = function() {
  return this.data.length;
}, Ae.prototype.getBitsLength = function() {
  return Ae.getBitsLength(this.data.length);
}, Ae.prototype.write = function(t) {
  var e;
  for (e = 0; e + 2 <= this.data.length; e += 2) {
    var r = Ur.indexOf(this.data[e]) * 45;
    r += Ur.indexOf(this.data[e + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(Ur.indexOf(this.data[e]), 6);
};
var Tu = Ae, Pu = le, Uu = fe;
function ke(t) {
  this.mode = Uu.BYTE, this.data = Pu.from(t);
}
ke.getBitsLength = function(t) {
  return t * 8;
}, ke.prototype.getLength = function() {
  return this.data.length;
}, ke.prototype.getBitsLength = function() {
  return ke.getBitsLength(this.data.length);
}, ke.prototype.write = function(t) {
  for (var e = 0, r = this.data.length; e < r; e++)
    t.put(this.data[e], 8);
};
var Ru = ke, ju = fe, Iu = It;
function Ce(t) {
  this.mode = ju.KANJI, this.data = t;
}
Ce.getBitsLength = function(t) {
  return t * 13;
}, Ce.prototype.getLength = function() {
  return this.data.length;
}, Ce.prototype.getBitsLength = function() {
  return Ce.getBitsLength(this.data.length);
}, Ce.prototype.write = function(t) {
  var e;
  for (e = 0; e < this.data.length; e++) {
    var r = Iu.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
    r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
  }
};
var Du = Ce, Jn = { exports: {} };
(function(t) {
  var e = { single_source_shortest_paths: function(r, n, a) {
    var o = {}, p = {};
    p[n] = 0;
    var h = e.PriorityQueue.make();
    h.push(n, 0);
    for (var y, M, _, x, F, O, I, P, C; !h.empty(); ) {
      y = h.pop(), M = y.value, x = y.cost, F = r[M] || {};
      for (_ in F)
        F.hasOwnProperty(_) && (O = F[_], I = x + O, P = p[_], C = typeof p[_] > "u", (C || P > I) && (p[_] = I, h.push(_, I), o[_] = M));
    }
    if (typeof a < "u" && typeof p[a] > "u") {
      var B = ["Could not find a path from ", n, " to ", a, "."].join("");
      throw new Error(B);
    }
    return o;
  }, extract_shortest_path_from_predecessor_list: function(r, n) {
    for (var a = [], o = n; o; )
      a.push(o), r[o], o = r[o];
    return a.reverse(), a;
  }, find_path: function(r, n, a) {
    var o = e.single_source_shortest_paths(r, n, a);
    return e.extract_shortest_path_from_predecessor_list(o, a);
  }, PriorityQueue: { make: function(r) {
    var n = e.PriorityQueue, a = {}, o;
    r = r || {};
    for (o in n)
      n.hasOwnProperty(o) && (a[o] = n[o]);
    return a.queue = [], a.sorter = r.sorter || n.default_sorter, a;
  }, default_sorter: function(r, n) {
    return r.cost - n.cost;
  }, push: function(r, n) {
    var a = { value: r, cost: n };
    this.queue.push(a), this.queue.sort(this.sorter);
  }, pop: function() {
    return this.queue.shift();
  }, empty: function() {
    return this.queue.length === 0;
  } } };
  t.exports = e;
})(Jn), function(t) {
  var e = fe, r = xu, n = Tu, a = Ru, o = Du, p = $t, h = It, y = Jn.exports;
  function M(B) {
    return unescape(encodeURIComponent(B)).length;
  }
  function _(B, k, S) {
    for (var q = [], J; (J = B.exec(S)) !== null; )
      q.push({ data: J[0], index: J.index, mode: k, length: J[0].length });
    return q;
  }
  function x(B) {
    var k = _(p.NUMERIC, e.NUMERIC, B), S = _(p.ALPHANUMERIC, e.ALPHANUMERIC, B), q, J;
    h.isKanjiModeEnabled() ? (q = _(p.BYTE, e.BYTE, B), J = _(p.KANJI, e.KANJI, B)) : (q = _(p.BYTE_KANJI, e.BYTE, B), J = []);
    var K = k.concat(S, q, J);
    return K.sort(function(ot, tt) {
      return ot.index - tt.index;
    }).map(function(ot) {
      return { data: ot.data, mode: ot.mode, length: ot.length };
    });
  }
  function F(B, k) {
    switch (k) {
      case e.NUMERIC:
        return r.getBitsLength(B);
      case e.ALPHANUMERIC:
        return n.getBitsLength(B);
      case e.KANJI:
        return o.getBitsLength(B);
      case e.BYTE:
        return a.getBitsLength(B);
    }
  }
  function O(B) {
    return B.reduce(function(k, S) {
      var q = k.length - 1 >= 0 ? k[k.length - 1] : null;
      return q && q.mode === S.mode ? (k[k.length - 1].data += S.data, k) : (k.push(S), k);
    }, []);
  }
  function I(B) {
    for (var k = [], S = 0; S < B.length; S++) {
      var q = B[S];
      switch (q.mode) {
        case e.NUMERIC:
          k.push([q, { data: q.data, mode: e.ALPHANUMERIC, length: q.length }, { data: q.data, mode: e.BYTE, length: q.length }]);
          break;
        case e.ALPHANUMERIC:
          k.push([q, { data: q.data, mode: e.BYTE, length: q.length }]);
          break;
        case e.KANJI:
          k.push([q, { data: q.data, mode: e.BYTE, length: M(q.data) }]);
          break;
        case e.BYTE:
          k.push([{ data: q.data, mode: e.BYTE, length: M(q.data) }]);
      }
    }
    return k;
  }
  function P(B, k) {
    for (var S = {}, q = { start: {} }, J = ["start"], K = 0; K < B.length; K++) {
      for (var ot = B[K], tt = [], lt = 0; lt < ot.length; lt++) {
        var i = ot[lt], f = "" + K + lt;
        tt.push(f), S[f] = { node: i, lastCount: 0 }, q[f] = {};
        for (var d = 0; d < J.length; d++) {
          var g = J[d];
          S[g] && S[g].node.mode === i.mode ? (q[g][f] = F(S[g].lastCount + i.length, i.mode) - F(S[g].lastCount, i.mode), S[g].lastCount += i.length) : (S[g] && (S[g].lastCount = i.length), q[g][f] = F(i.length, i.mode) + 4 + e.getCharCountIndicator(i.mode, k));
        }
      }
      J = tt;
    }
    for (d = 0; d < J.length; d++)
      q[J[d]].end = 0;
    return { map: q, table: S };
  }
  function C(B, k) {
    var S, q = e.getBestModeForData(B);
    if (S = e.from(k, q), S !== e.BYTE && S.bit < q.bit)
      throw new Error('"' + B + '" cannot be encoded with mode ' + e.toString(S) + `.
 Suggested mode is: ` + e.toString(q));
    switch (S === e.KANJI && !h.isKanjiModeEnabled() && (S = e.BYTE), S) {
      case e.NUMERIC:
        return new r(B);
      case e.ALPHANUMERIC:
        return new n(B);
      case e.KANJI:
        return new o(B);
      case e.BYTE:
        return new a(B);
    }
  }
  t.fromArray = function(B) {
    return B.reduce(function(k, S) {
      return typeof S == "string" ? k.push(C(S, null)) : S.data && k.push(C(S.data, S.mode)), k;
    }, []);
  }, t.fromString = function(B, k) {
    for (var S = x(B, h.isKanjiModeEnabled()), q = I(S), J = P(q, k), K = y.find_path(J.map, "start", "end"), ot = [], tt = 1; tt < K.length - 1; tt++)
      ot.push(J.table[K[tt]].node);
    return t.fromArray(O(ot));
  }, t.rawSplit = function(B) {
    return t.fromArray(x(B, h.isKanjiModeEnabled()));
  };
}(Ai);
var Yn = le, vr = It, Rr = yr, Hu = fu, Fu = cu, qu = di, Wu = mi, tn = gi, en = hr, Zu = Eu, lr = bi, $u = Ei, zu = fe, jr = Ai, Ju = Mn;
function Yu(t, e) {
  for (var r = t.size, n = Wu.getPositions(e), a = 0; a < n.length; a++)
    for (var o = n[a][0], p = n[a][1], h = -1; h <= 7; h++)
      if (!(o + h <= -1 || r <= o + h))
        for (var y = -1; y <= 7; y++)
          p + y <= -1 || r <= p + y || (h >= 0 && h <= 6 && (y === 0 || y === 6) || y >= 0 && y <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && y >= 2 && y <= 4 ? t.set(o + h, p + y, !0, !0) : t.set(o + h, p + y, !1, !0));
}
function Vu(t) {
  for (var e = t.size, r = 8; r < e - 8; r++) {
    var n = r % 2 === 0;
    t.set(r, 6, n, !0), t.set(6, r, n, !0);
  }
}
function Ku(t, e) {
  for (var r = qu.getPositions(e), n = 0; n < r.length; n++)
    for (var a = r[n][0], o = r[n][1], p = -2; p <= 2; p++)
      for (var h = -2; h <= 2; h++)
        p === -2 || p === 2 || h === -2 || h === 2 || p === 0 && h === 0 ? t.set(a + p, o + h, !0, !0) : t.set(a + p, o + h, !1, !0);
}
function Gu(t, e) {
  for (var r = t.size, n = lr.getEncodedBits(e), a, o, p, h = 0; h < 18; h++)
    a = Math.floor(h / 3), o = h % 3 + r - 8 - 3, p = (n >> h & 1) === 1, t.set(a, o, p, !0), t.set(o, a, p, !0);
}
function Ir(t, e, r) {
  var n = t.size, a = $u.getEncodedBits(e, r), o, p;
  for (o = 0; o < 15; o++)
    p = (a >> o & 1) === 1, o < 6 ? t.set(o, 8, p, !0) : o < 8 ? t.set(o + 1, 8, p, !0) : t.set(n - 15 + o, 8, p, !0), o < 8 ? t.set(8, n - o - 1, p, !0) : o < 9 ? t.set(8, 15 - o - 1 + 1, p, !0) : t.set(8, 15 - o - 1, p, !0);
  t.set(n - 8, 8, 1, !0);
}
function Xu(t, e) {
  for (var r = t.size, n = -1, a = r - 1, o = 7, p = 0, h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (var y = 0; y < 2; y++)
        if (!t.isReserved(a, h - y)) {
          var M = !1;
          p < e.length && (M = (e[p] >>> o & 1) === 1), t.set(a, h - y, M), o--, o === -1 && (p++, o = 7);
        }
      if (a += n, a < 0 || r <= a) {
        a -= n, n = -n;
        break;
      }
    }
}
function Qu(t, e, r) {
  var n = new Hu();
  r.forEach(function(M) {
    n.put(M.mode.bit, 4), n.put(M.getLength(), zu.getCharCountIndicator(M.mode, t)), M.write(n);
  });
  var a = vr.getSymbolTotalCodewords(t), o = en.getTotalCodewordsCount(t, e), p = (a - o) * 8;
  for (n.getLengthInBits() + 4 <= p && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  for (var h = (p - n.getLengthInBits()) / 8, y = 0; y < h; y++)
    n.put(y % 2 ? 17 : 236, 8);
  return th(n, t, e);
}
function th(t, e, r) {
  for (var n = vr.getSymbolTotalCodewords(e), a = en.getTotalCodewordsCount(e, r), o = n - a, p = en.getBlocksCount(e, r), h = n % p, y = p - h, M = Math.floor(n / p), _ = Math.floor(o / p), x = _ + 1, F = M - _, O = new Zu(F), I = 0, P = new Array(p), C = new Array(p), B = 0, k = Yn.from(t.buffer), S = 0; S < p; S++) {
    var q = S < y ? _ : x;
    P[S] = k.slice(I, I + q), C[S] = O.encode(P[S]), I += q, B = Math.max(B, q);
  }
  var J = Yn.alloc(n), K = 0, ot, tt;
  for (ot = 0; ot < B; ot++)
    for (tt = 0; tt < p; tt++)
      ot < P[tt].length && (J[K++] = P[tt][ot]);
  for (ot = 0; ot < F; ot++)
    for (tt = 0; tt < p; tt++)
      J[K++] = C[tt][ot];
  return J;
}
function eh(t, e, r, n) {
  var a;
  if (Ju(t))
    a = jr.fromArray(t);
  else if (typeof t == "string") {
    var o = e;
    if (!o) {
      var p = jr.rawSplit(t);
      o = lr.getBestVersionForData(p, r);
    }
    a = jr.fromString(t, o || 40);
  } else
    throw new Error("Invalid data");
  var h = lr.getBestVersionForData(a, r);
  if (!h)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = h;
  else if (e < h)
    throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + h + `.
`);
  var y = Qu(e, r, a), M = vr.getSymbolSize(e), _ = new Fu(M);
  return Yu(_, e), Vu(_), Ku(_, e), Ir(_, r, 0), e >= 7 && Gu(_, e), Xu(_, y), isNaN(n) && (n = tn.getBestMask(_, Ir.bind(null, _, r))), tn.applyMask(n, _), Ir(_, r, n), { modules: _, version: e, errorCorrectionLevel: r, maskPattern: n, segments: a };
}
hi.create = function(t, e) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  var r = Rr.M, n, a;
  return typeof e < "u" && (r = Rr.from(e.errorCorrectionLevel, Rr.M), n = lr.from(e.version), a = tn.from(e.maskPattern), e.toSJISFunc && vr.setToSJISFunction(e.toSJISFunc)), eh(t, n, r, a);
};
var ki = {}, rn = {};
(function(t) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    var n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(o) {
      return [o, o];
    }))), n.length === 6 && n.push("F", "F");
    var a = parseInt(n.join(""), 16);
    return { r: a >> 24 & 255, g: a >> 16 & 255, b: a >> 8 & 255, a: a & 255, hex: "#" + n.slice(0, 6).join("") };
  }
  t.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    var n = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, a = r.width && r.width >= 21 ? r.width : void 0, o = r.scale || 4;
    return { width: a, scale: a ? 4 : o, margin: n, color: { dark: e(r.color.dark || "#000000ff"), light: e(r.color.light || "#ffffffff") }, type: r.type, rendererOpts: r.rendererOpts || {} };
  }, t.getScale = function(r, n) {
    return n.width && n.width >= r + n.margin * 2 ? n.width / (r + n.margin * 2) : n.scale;
  }, t.getImageWidth = function(r, n) {
    var a = t.getScale(r, n);
    return Math.floor((r + n.margin * 2) * a);
  }, t.qrToImageData = function(r, n, a) {
    for (var o = n.modules.size, p = n.modules.data, h = t.getScale(o, a), y = Math.floor((o + a.margin * 2) * h), M = a.margin * h, _ = [a.color.light, a.color.dark], x = 0; x < y; x++)
      for (var F = 0; F < y; F++) {
        var O = (x * y + F) * 4, I = a.color.light;
        if (x >= M && F >= M && x < y - M && F < y - M) {
          var P = Math.floor((x - M) / h), C = Math.floor((F - M) / h);
          I = _[p[P * o + C] ? 1 : 0];
        }
        r[O++] = I.r, r[O++] = I.g, r[O++] = I.b, r[O] = I.a;
      }
  };
})(rn), function(t) {
  var e = rn;
  function r(a, o, p) {
    a.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = p, o.width = p, o.style.height = p + "px", o.style.width = p + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(a, o, p) {
    var h = p, y = o;
    typeof h > "u" && (!o || !o.getContext) && (h = o, o = void 0), o || (y = n()), h = e.getOptions(h);
    var M = e.getImageWidth(a.modules.size, h), _ = y.getContext("2d"), x = _.createImageData(M, M);
    return e.qrToImageData(x.data, a, h), r(_, y, M), _.putImageData(x, 0, 0), y;
  }, t.renderToDataURL = function(a, o, p) {
    var h = p;
    typeof h > "u" && (!o || !o.getContext) && (h = o, o = void 0), h || (h = {});
    var y = t.render(a, o, h), M = h.type || "image/png", _ = h.rendererOpts || {};
    return y.toDataURL(M, _.quality);
  };
}(ki);
var Ci = {}, rh = rn;
function Vn(t, e) {
  var r = t.a / 255, n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function Dr(t, e, r) {
  var n = t + e;
  return typeof r < "u" && (n += " " + r), n;
}
function nh(t, e, r) {
  for (var n = "", a = 0, o = !1, p = 0, h = 0; h < t.length; h++) {
    var y = Math.floor(h % e), M = Math.floor(h / e);
    !y && !o && (o = !0), t[h] ? (p++, h > 0 && y > 0 && t[h - 1] || (n += o ? Dr("M", y + r, 0.5 + M + r) : Dr("m", a, 0), a = 0, o = !1), y + 1 < e && t[h + 1] || (n += Dr("h", p), p = 0)) : a++;
  }
  return n;
}
Ci.render = function(t, e, r) {
  var n = rh.getOptions(e), a = t.modules.size, o = t.modules.data, p = a + n.margin * 2, h = n.color.light.a ? "<path " + Vn(n.color.light, "fill") + ' d="M0 0h' + p + "v" + p + 'H0z"/>' : "", y = "<path " + Vn(n.color.dark, "stroke") + ' d="' + nh(o, a, n.margin) + '"/>', M = 'viewBox="0 0 ' + p + " " + p + '"', _ = n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "", x = '<svg xmlns="http://www.w3.org/2000/svg" ' + _ + M + ' shape-rendering="crispEdges">' + h + y + `</svg>
`;
  return typeof r == "function" && r(null, x), x;
};
var oh = Qa, nn = hi, Kn = ki, ih = Ci;
function Hr(t, e, r, n, a) {
  var o = [].slice.call(arguments, 1), p = o.length, h = typeof o[p - 1] == "function";
  if (!h && !oh())
    throw new Error("Callback required as last argument");
  if (h) {
    if (p < 2)
      throw new Error("Too few arguments provided");
    p === 2 ? (a = r, r = e, e = n = void 0) : p === 3 && (e.getContext && typeof a > "u" ? (a = n, n = void 0) : (a = n, n = r, r = e, e = void 0));
  } else {
    if (p < 1)
      throw new Error("Too few arguments provided");
    return p === 1 ? (r = e, e = n = void 0) : p === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(M, _) {
      try {
        var x = nn.create(r, n);
        M(t(x, e, n));
      } catch (F) {
        _(F);
      }
    });
  }
  try {
    var y = nn.create(r, n);
    a(null, t(y, e, n));
  } catch (M) {
    a(M);
  }
}
Fe.create = nn.create, Fe.toCanvas = Hr.bind(null, Kn.render), Fe.toDataURL = Hr.bind(null, Kn.renderToDataURL), Fe.toString = Hr.bind(null, function(t, e, r) {
  return ih.render(t, r);
});
var sh = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, r = [], n = 0; n < t.rangeCount; n++)
    r.push(t.getRangeAt(n));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || r.forEach(function(a) {
      t.addRange(a);
    }), e && e.focus();
  };
}, ah = sh, Gn = { "text/plain": "Text", "text/html": "Url", default: "Text" }, uh = "Copy to clipboard: #{key}, Enter";
function hh(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function lh(t, e) {
  var r, n, a, o, p, h, y = !1;
  e || (e = {}), r = e.debug || !1;
  try {
    a = ah(), o = document.createRange(), p = document.getSelection(), h = document.createElement("span"), h.textContent = t, h.ariaHidden = "true", h.style.all = "unset", h.style.position = "fixed", h.style.top = 0, h.style.clip = "rect(0, 0, 0, 0)", h.style.whiteSpace = "pre", h.style.webkitUserSelect = "text", h.style.MozUserSelect = "text", h.style.msUserSelect = "text", h.style.userSelect = "text", h.addEventListener("copy", function(_) {
      if (_.stopPropagation(), e.format)
        if (_.preventDefault(), typeof _.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var x = Gn[e.format] || Gn.default;
          window.clipboardData.setData(x, t);
        } else
          _.clipboardData.clearData(), _.clipboardData.setData(e.format, t);
      e.onCopy && (_.preventDefault(), e.onCopy(_.clipboardData));
    }), document.body.appendChild(h), o.selectNodeContents(h), p.addRange(o);
    var M = document.execCommand("copy");
    if (!M)
      throw new Error("copy command was unsuccessful");
    y = !0;
  } catch (_) {
    r && console.error("unable to copy using execCommand: ", _), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), y = !0;
    } catch (x) {
      r && console.error("unable to copy using clipboardData: ", x), r && console.error("falling back to prompt"), n = hh("message" in e ? e.message : uh), window.prompt(n, t);
    }
  } finally {
    p && (typeof p.removeRange == "function" ? p.removeRange(o) : p.removeAllRanges()), h && document.body.removeChild(h), a();
  }
  return y;
}
var fh = lh, it, ze, Ln, Bi, Xn, An, Si, Yt = {}, _r = [], ch = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function Jt(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Ni(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Vt(t, e, r) {
  var n, a = arguments, o = {};
  for (n in e)
    n !== "key" && n !== "ref" && (o[n] = e[n]);
  if (arguments.length > 3)
    for (r = [r], n = 3; n < arguments.length; n++)
      r.push(a[n]);
  if (r != null && (o.children = r), typeof t == "function" && t.defaultProps != null)
    for (n in t.defaultProps)
      o[n] === void 0 && (o[n] = t.defaultProps[n]);
  return fr(t, o, e && e.key, e && e.ref, null);
}
function fr(t, e, r, n, a) {
  var o = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: a };
  return a == null && (o.__v = o), it.vnode && it.vnode(o), o;
}
function xi() {
  return {};
}
function Ge(t) {
  return t.children;
}
function Ft(t, e) {
  this.props = t, this.context = e;
}
function Ve(t, e) {
  if (e == null)
    return t.__ ? Ve(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? Ve(t) : null;
}
function Oi(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Oi(t);
  }
}
function ar(t) {
  (!t.__d && (t.__d = !0) && ze.push(t) && !Ln++ || Xn !== it.debounceRendering) && ((Xn = it.debounceRendering) || Bi)(ph);
}
function ph() {
  for (var t; Ln = ze.length; )
    t = ze.sort(function(e, r) {
      return e.__v.__b - r.__v.__b;
    }), ze = [], t.some(function(e) {
      var r, n, a, o, p, h, y;
      e.__d && (h = (p = (r = e).__v).__e, (y = r.__P) && (n = [], (a = Jt({}, p)).__v = a, o = kn(y, p, a, r.__n, y.ownerSVGElement !== void 0, null, n, h != null ? h : Ve(p)), Pi(n, p), o != h && Oi(p)));
    });
}
function Ti(t, e, r, n, a, o, p, h, y) {
  var M, _, x, F, O, I, P, C = r && r.__k || _r, B = C.length;
  if (h == Yt && (h = o != null ? o[0] : B ? Ve(r, 0) : null), M = 0, e.__k = ue(e.__k, function(k) {
    if (k != null) {
      if (k.__ = e, k.__b = e.__b + 1, (x = C[M]) === null || x && k.key == x.key && k.type === x.type)
        C[M] = void 0;
      else
        for (_ = 0; _ < B; _++) {
          if ((x = C[_]) && k.key == x.key && k.type === x.type) {
            C[_] = void 0;
            break;
          }
          x = null;
        }
      if (F = kn(t, k, x = x || Yt, n, a, o, p, h, y), (_ = k.ref) && x.ref != _ && (P || (P = []), x.ref && P.push(x.ref, null, k), P.push(_, k.__c || F, k)), F != null) {
        var S;
        if (I == null && (I = F), k.__d !== void 0)
          S = k.__d, k.__d = void 0;
        else if (o == x || F != h || F.parentNode == null) {
          t:
            if (h == null || h.parentNode !== t)
              t.appendChild(F), S = null;
            else {
              for (O = h, _ = 0; (O = O.nextSibling) && _ < B; _ += 2)
                if (O == F)
                  break t;
              t.insertBefore(F, h), S = h;
            }
          e.type == "option" && (t.value = "");
        }
        h = S !== void 0 ? S : F.nextSibling, typeof e.type == "function" && (e.__d = h);
      } else
        h && x.__e == h && h.parentNode != t && (h = Ve(x));
    }
    return M++, k;
  }), e.__e = I, o != null && typeof e.type != "function")
    for (M = o.length; M--; )
      o[M] != null && Ni(o[M]);
  for (M = B; M--; )
    C[M] != null && Je(C[M], C[M]);
  if (P)
    for (M = 0; M < P.length; M++)
      Ui(P[M], P[++M], P[++M]);
}
function ue(t, e, r) {
  if (r == null && (r = []), t == null || typeof t == "boolean")
    e && r.push(e(null));
  else if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      ue(t[n], e, r);
  else
    r.push(e ? e(typeof t == "string" || typeof t == "number" ? fr(null, t, null, null, t) : t.__e != null || t.__c != null ? fr(t.type, t.props, t.key, null, t.__v) : t) : t);
  return r;
}
function dh(t, e, r, n, a) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in e || cr(t, o, null, r[o], n);
  for (o in e)
    a && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === e[o] || cr(t, o, e[o], r[o], n);
}
function Qn(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r) : t[e] = typeof r == "number" && ch.test(e) === !1 ? r + "px" : r != null ? r : "";
}
function cr(t, e, r, n, a) {
  var o, p, h, y, M;
  if (a ? e === "className" && (e = "class") : e === "class" && (e = "className"), e === "style")
    if (o = t.style, typeof r == "string")
      o.cssText = r;
    else {
      if (typeof n == "string" && (o.cssText = "", n = null), n)
        for (y in n)
          r && y in r || Qn(o, y, "");
      if (r)
        for (M in r)
          n && r[M] === n[M] || Qn(o, M, r[M]);
    }
  else
    e[0] === "o" && e[1] === "n" ? (p = e !== (e = e.replace(/Capture$/, "")), h = e.toLowerCase(), e = (h in t ? h : e).slice(2), r ? (n || t.addEventListener(e, to, p), (t.l || (t.l = {}))[e] = r) : t.removeEventListener(e, to, p)) : e !== "list" && e !== "tagName" && e !== "form" && e !== "type" && e !== "size" && !a && e in t ? t[e] = r != null ? r : "" : typeof r != "function" && e !== "dangerouslySetInnerHTML" && (e !== (e = e.replace(/^xlink:?/, "")) ? r == null || r === !1 ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function to(t) {
  this.l[t.type](it.event ? it.event(t) : t);
}
function kn(t, e, r, n, a, o, p, h, y) {
  var M, _, x, F, O, I, P, C, B, k, S = e.type;
  if (e.constructor !== void 0)
    return null;
  (M = it.__b) && M(e);
  try {
    t:
      if (typeof S == "function") {
        if (C = e.props, B = (M = S.contextType) && n[M.__c], k = M ? B ? B.props.value : M.__ : n, r.__c ? P = (_ = e.__c = r.__c).__ = _.__E : ("prototype" in S && S.prototype.render ? e.__c = _ = new S(C, k) : (e.__c = _ = new Ft(C, k), _.constructor = S, _.render = gh), B && B.sub(_), _.props = C, _.state || (_.state = {}), _.context = k, _.__n = n, x = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), S.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = Jt({}, _.__s)), Jt(_.__s, S.getDerivedStateFromProps(C, _.__s))), F = _.props, O = _.state, x)
          S.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (S.getDerivedStateFromProps == null && C !== F && _.componentWillReceiveProps != null && _.componentWillReceiveProps(C, k), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(C, _.__s, k) === !1 || e.__v === r.__v && !_.__) {
            for (_.props = C, _.state = _.__s, e.__v !== r.__v && (_.__d = !1), _.__v = e, e.__e = r.__e, e.__k = r.__k, _.__h.length && p.push(_), M = 0; M < e.__k.length; M++)
              e.__k[M] && (e.__k[M].__ = e);
            break t;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(C, _.__s, k), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(F, O, I);
          });
        }
        _.context = k, _.props = C, _.state = _.__s, (M = it.__r) && M(e), _.__d = !1, _.__v = e, _.__P = t, M = _.render(_.props, _.state, _.context), e.__k = M != null && M.type == Ge && M.key == null ? M.props.children : Array.isArray(M) ? M : [M], _.getChildContext != null && (n = Jt(Jt({}, n), _.getChildContext())), x || _.getSnapshotBeforeUpdate == null || (I = _.getSnapshotBeforeUpdate(F, O)), Ti(t, e, r, n, a, o, p, h, y), _.base = e.__e, _.__h.length && p.push(_), P && (_.__E = _.__ = null), _.__e = !1;
      } else
        o == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = mh(r.__e, e, r, n, a, o, p, y);
    (M = it.diffed) && M(e);
  } catch (q) {
    e.__v = null, it.__e(q, e, r);
  }
  return e.__e;
}
function Pi(t, e) {
  it.__c && it.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      it.__e(n, r.__v);
    }
  });
}
function mh(t, e, r, n, a, o, p, h) {
  var y, M, _, x, F, O = r.props, I = e.props;
  if (a = e.type === "svg" || a, o != null) {
    for (y = 0; y < o.length; y++)
      if ((M = o[y]) != null && ((e.type === null ? M.nodeType === 3 : M.localName === e.type) || t == M)) {
        t = M, o[y] = null;
        break;
      }
  }
  if (t == null) {
    if (e.type === null)
      return document.createTextNode(I);
    t = a ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, I.is && { is: I.is }), o = null, h = !1;
  }
  if (e.type === null)
    O !== I && t.data != I && (t.data = I);
  else {
    if (o != null && (o = _r.slice.call(t.childNodes)), _ = (O = r.props || Yt).dangerouslySetInnerHTML, x = I.dangerouslySetInnerHTML, !h) {
      if (O === Yt)
        for (O = {}, F = 0; F < t.attributes.length; F++)
          O[t.attributes[F].name] = t.attributes[F].value;
      (x || _) && (x && _ && x.__html == _.__html || (t.innerHTML = x && x.__html || ""));
    }
    dh(t, I, O, a, h), x ? e.__k = [] : (e.__k = e.props.children, Ti(t, e, r, n, e.type !== "foreignObject" && a, o, p, Yt, h)), h || ("value" in I && (y = I.value) !== void 0 && y !== t.value && cr(t, "value", y, O.value, !1), "checked" in I && (y = I.checked) !== void 0 && y !== t.checked && cr(t, "checked", y, O.checked, !1));
  }
  return t;
}
function Ui(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    it.__e(n, r);
  }
}
function Je(t, e, r) {
  var n, a, o;
  if (it.unmount && it.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Ui(n, null, e)), r || typeof t.type == "function" || (r = (a = t.__e) != null), t.__e = t.__d = void 0, (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (p) {
        it.__e(p, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Je(n[o], e, r);
  a != null && Ni(a);
}
function gh(t, e, r) {
  return this.constructor(t, r);
}
function Ke(t, e, r) {
  var n, a, o;
  it.__ && it.__(t, e), a = (n = r === An) ? null : r && r.__k || e.__k, t = Vt(Ge, null, [t]), o = [], kn(e, (n ? e : r || e).__k = t, a || Yt, Yt, e.ownerSVGElement !== void 0, r && !n ? [r] : a ? null : _r.slice.call(e.childNodes), o, r || Yt, n), Pi(o, t);
}
function Ri(t, e) {
  Ke(t, e, An);
}
function yh(t, e) {
  var r, n;
  for (n in e = Jt(Jt({}, t.props), e), arguments.length > 2 && (e.children = _r.slice.call(arguments, 2)), r = {}, e)
    n !== "key" && n !== "ref" && (r[n] = e[n]);
  return fr(t.type, r, e.key || t.key, e.ref || t.ref, null);
}
function ji(t) {
  var e = {}, r = { __c: "__cC" + Si++, __: t, Consumer: function(n, a) {
    return n.children(a);
  }, Provider: function(n) {
    var a, o = this;
    return this.getChildContext || (a = [], this.getChildContext = function() {
      return e[r.__c] = o, e;
    }, this.shouldComponentUpdate = function(p) {
      o.props.value !== p.value && a.some(function(h) {
        h.context = p.value, ar(h);
      });
    }, this.sub = function(p) {
      a.push(p);
      var h = p.componentWillUnmount;
      p.componentWillUnmount = function() {
        a.splice(a.indexOf(p), 1), h && h.call(p);
      };
    }), n.children;
  } };
  return r.Consumer.contextType = r, r.Provider.__ = r, r;
}
it = { __e: function(t, e) {
  for (var r, n; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(t))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(t)), n)
          return ar(r.__E = r);
      } catch (a) {
        t = a;
      }
  throw t;
} }, Ft.prototype.setState = function(t, e) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = Jt({}, this.state), typeof t == "function" && (t = t(r, this.props)), t && Jt(r, t), t != null && this.__v && (e && this.__h.push(e), ar(this));
}, Ft.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ar(this));
}, Ft.prototype.render = Ge, ze = [], Ln = 0, Bi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, An = Yt, Si = 0;
var Me, jt, eo, Te = 0, on = [], ro = it.__r, no = it.diffed, oo = it.__c, io = it.unmount;
function Re(t, e) {
  it.__h && it.__h(jt, t, Te || e), Te = 0;
  var r = jt.__H || (jt.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Cn(t) {
  return Te = 1, Bn(Zi, t);
}
function Bn(t, e, r) {
  var n = Re(Me++, 2);
  return n.__c || (n.__c = jt, n.__ = [r ? r(e) : Zi(void 0, e), function(a) {
    var o = t(n.__[0], a);
    n.__[0] !== o && (n.__[0] = o, n.__c.setState({}));
  }]), n.__;
}
function Ii(t, e) {
  var r = Re(Me++, 3);
  !it.__s && Nn(r.__H, e) && (r.__ = t, r.__H = e, jt.__H.__h.push(r));
}
function Sn(t, e) {
  var r = Re(Me++, 4);
  !it.__s && Nn(r.__H, e) && (r.__ = t, r.__H = e, jt.__h.push(r));
}
function Di(t) {
  return Te = 5, wr(function() {
    return { current: t };
  }, []);
}
function Hi(t, e, r) {
  Te = 6, Sn(function() {
    typeof t == "function" ? t(e()) : t && (t.current = e());
  }, r == null ? r : r.concat(t));
}
function wr(t, e) {
  var r = Re(Me++, 7);
  return Nn(r.__H, e) ? (r.__H = e, r.__h = t, r.__ = t()) : r.__;
}
function Fi(t, e) {
  return Te = 8, wr(function() {
    return t;
  }, e);
}
function qi(t) {
  var e = jt.context[t.__c], r = Re(Me++, 9);
  return r.__c = t, e ? (r.__ == null && (r.__ = !0, e.sub(jt)), e.props.value) : t.__;
}
function Wi(t, e) {
  it.useDebugValue && it.useDebugValue(e ? e(t) : t);
}
function vh(t) {
  var e = Re(Me++, 10), r = Cn();
  return e.__ = t, jt.componentDidCatch || (jt.componentDidCatch = function(n) {
    e.__ && e.__(n), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function _h() {
  on.some(function(t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(sn), t.__H.__h.forEach(an), t.__H.__h = [];
      } catch (e) {
        return t.__H.__h = [], it.__e(e, t.__v), !0;
      }
  }), on = [];
}
function sn(t) {
  t.t && t.t();
}
function an(t) {
  var e = t.__();
  typeof e == "function" && (t.t = e);
}
function Nn(t, e) {
  return !t || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Zi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
it.__r = function(t) {
  ro && ro(t), Me = 0, (jt = t.__c).__H && (jt.__H.__h.forEach(sn), jt.__H.__h.forEach(an), jt.__H.__h = []);
}, it.diffed = function(t) {
  no && no(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    r && r.__h.length && (on.push(e) !== 1 && eo === it.requestAnimationFrame || ((eo = it.requestAnimationFrame) || function(n) {
      var a, o = function() {
        clearTimeout(p), cancelAnimationFrame(a), setTimeout(n);
      }, p = setTimeout(o, 100);
      typeof window < "u" && (a = requestAnimationFrame(o));
    })(_h));
  }
}, it.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(sn), r.__h = r.__h.filter(function(n) {
        return !n.__ || an(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], it.__e(n, r.__v);
    }
  }), oo && oo(t, e);
}, it.unmount = function(t) {
  io && io(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    if (r)
      try {
        r.__.forEach(function(n) {
          return n.t && n.t();
        });
      } catch (n) {
        it.__e(n, e.__v);
      }
  }
};
function xn(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function un(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
var $i = function(t) {
  var e, r;
  function n(a) {
    var o;
    return (o = t.call(this, a) || this).isPureReactComponent = !0, o;
  }
  return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.shouldComponentUpdate = function(a, o) {
    return un(this.props, a) || un(this.state, o);
  }, n;
}(Ft);
function zi(t, e) {
  function r(a) {
    var o = this.props.ref, p = o == a.ref;
    return !p && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, a) || !p : un(this.props, a);
  }
  function n(a) {
    return this.shouldComponentUpdate = r, Vt(t, xn({}, a));
  }
  return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.t = !0, n;
}
var so = it.__b;
function Ji(t) {
  function e(r) {
    var n = xn({}, r);
    return delete n.ref, t(n, r.ref);
  }
  return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
it.__b = function(t) {
  t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), so && so(t);
};
var ao = function(t, e) {
  return t ? ue(t).reduce(function(r, n, a) {
    return r.concat(e(n, a));
  }, []) : null;
}, Yi = { map: ao, forEach: ao, count: function(t) {
  return t ? ue(t).length : 0;
}, only: function(t) {
  if ((t = ue(t)).length !== 1)
    throw new Error("Children.only() expects only one child.");
  return t[0];
}, toArray: ue }, wh = it.__e;
function Vi(t) {
  return t && ((t = xn({}, t)).__c = null, t.__k = t.__k && t.__k.map(Vi)), t;
}
function pr() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Ki(t) {
  var e = t.__.__c;
  return e && e.u && e.u(t);
}
function Gi(t) {
  var e, r, n;
  function a(o) {
    if (e || (e = t()).then(function(p) {
      r = p.default || p;
    }, function(p) {
      n = p;
    }), n)
      throw n;
    if (!r)
      throw e;
    return Vt(r, o);
  }
  return a.displayName = "Lazy", a.t = !0, a;
}
function Se() {
  this.i = null, this.l = null;
}
it.__e = function(t, e, r) {
  if (t.then) {
    for (var n, a = e; a = a.__; )
      if ((n = a.__c) && n.__c)
        return n.__c(t, e.__c);
  }
  wh(t, e, r);
}, (pr.prototype = new Ft()).__c = function(t, e) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(e);
  var n = Ki(r.__v), a = !1, o = function() {
    a || (a = !0, n ? n(p) : p());
  };
  e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
    o(), e.__c && e.__c();
  };
  var p = function() {
    var h;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); h = r.o.pop(); )
        h.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), t.then(o, o);
}, pr.prototype.render = function(t, e) {
  return this.__b && (this.__v.__k[0] = Vi(this.__b), this.__b = null), [Vt(Ft, null, e.u ? null : t.children), e.u && t.fallback];
};
var uo = function(t, e, r) {
  if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
    for (r = t.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.i = r = r[2];
    }
};
(Se.prototype = new Ft()).u = function(t) {
  var e = this, r = Ki(e.__v), n = e.l.get(t);
  return n[0]++, function(a) {
    var o = function() {
      e.props.revealOrder ? (n.push(a), uo(e, t, n)) : a();
    };
    r ? r(o) : o();
  };
}, Se.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = ue(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.l.set(e[r], this.i = [1, 0, this.i]);
  return t.children;
}, Se.prototype.componentDidUpdate = Se.prototype.componentDidMount = function() {
  var t = this;
  t.l.forEach(function(e, r) {
    uo(t, r, e);
  });
};
var bh = function() {
  function t() {
  }
  var e = t.prototype;
  return e.getChildContext = function() {
    return this.props.context;
  }, e.render = function(r) {
    return r.children;
  }, t;
}();
function Mh(t) {
  var e = this, r = t.container, n = Vt(bh, { context: e.context }, t.vnode);
  return e.s && e.s !== r && (e.v.parentNode && e.s.removeChild(e.v), Je(e.h), e.p = !1), t.vnode ? e.p ? (r.__k = e.__k, Ke(n, r), e.__k = r.__k) : (e.v = document.createTextNode(""), Ri("", r), r.appendChild(e.v), e.p = !0, e.s = r, Ke(n, r, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), Je(e.h)), e.h = n, e.componentWillUnmount = function() {
    e.v.parentNode && e.s.removeChild(e.v), Je(e.h);
  }, null;
}
function Xi(t, e) {
  return Vt(Mh, { vnode: t, container: e });
}
var ho = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
Ft.prototype.isReactComponent = {};
var Qi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
function hn(t, e, r) {
  if (e.__k == null)
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  return Ke(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function Eh(t, e, r) {
  return Ri(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
var lo = it.event;
function Fr(t, e) {
  t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, { configurable: !1, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(r) {
    this["UNSAFE_" + e] = r;
  } });
}
it.event = function(t) {
  lo && (t = lo(t)), t.persist = function() {
  };
  var e = !1, r = !1, n = t.stopPropagation;
  t.stopPropagation = function() {
    n.call(t), e = !0;
  };
  var a = t.preventDefault;
  return t.preventDefault = function() {
    a.call(t), r = !0;
  }, t.isPropagationStopped = function() {
    return e;
  }, t.isDefaultPrevented = function() {
    return r;
  }, t.nativeEvent = t;
};
var fo = { configurable: !0, get: function() {
  return this.class;
} }, co = it.vnode;
it.vnode = function(t) {
  t.$$typeof = Qi;
  var e = t.type, r = t.props;
  if (e) {
    if (r.class != r.className && (fo.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", fo)), typeof e != "function") {
      var n, a, o;
      for (o in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && e === "select" && (ue(r.children).forEach(function(p) {
        r.value.indexOf(p.props.value) != -1 && (p.props.selected = !0);
      }), delete r.value), r)
        if (n = ho.test(o))
          break;
      if (n)
        for (o in a = t.props = {}, r)
          a[ho.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o];
    }
    (function(p) {
      var h = t.type, y = t.props;
      if (y && typeof h == "string") {
        var M = {};
        for (var _ in y)
          /^on(Ani|Tra|Tou)/.test(_) && (y[_.toLowerCase()] = y[_], delete y[_]), M[_.toLowerCase()] = _;
        if (M.ondoubleclick && (y.ondblclick = y[M.ondoubleclick], delete y[M.ondoubleclick]), M.onbeforeinput && (y.onbeforeinput = y[M.onbeforeinput], delete y[M.onbeforeinput]), M.onchange && (h === "textarea" || h.toLowerCase() === "input" && !/^fil|che|ra/i.test(y.type))) {
          var x = M.oninput || "oninput";
          y[x] || (y[x] = y[M.onchange], delete y[M.onchange]);
        }
      }
    })(), typeof e == "function" && !e.m && e.prototype && (Fr(e.prototype, "componentWillMount"), Fr(e.prototype, "componentWillReceiveProps"), Fr(e.prototype, "componentWillUpdate"), e.m = !0);
  }
  co && co(t);
};
var Lh = "16.8.0";
function ts(t) {
  return Vt.bind(null, t);
}
function On(t) {
  return !!t && t.$$typeof === Qi;
}
function es(t) {
  return On(t) ? yh.apply(null, arguments) : t;
}
function rs(t) {
  return !!t.__k && (Ke(null, t), !0);
}
function ns(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var os = function(t, e) {
  return t(e);
}, Ah = { useState: Cn, useReducer: Bn, useEffect: Ii, useLayoutEffect: Sn, useRef: Di, useImperativeHandle: Hi, useMemo: wr, useCallback: Fi, useContext: qi, useDebugValue: Wi, version: "16.8.0", Children: Yi, render: hn, hydrate: hn, unmountComponentAtNode: rs, createPortal: Xi, createElement: Vt, createContext: ji, createFactory: ts, cloneElement: es, createRef: xi, Fragment: Ge, isValidElement: On, findDOMNode: ns, Component: Ft, PureComponent: $i, memo: zi, forwardRef: Ji, unstable_batchedUpdates: os, Suspense: pr, SuspenseList: Se, lazy: Gi }, kh = Object.freeze({ __proto__: null, default: Ah, version: Lh, Children: Yi, render: hn, hydrate: Eh, unmountComponentAtNode: rs, createPortal: Xi, createFactory: ts, cloneElement: es, isValidElement: On, findDOMNode: ns, PureComponent: $i, memo: zi, forwardRef: Ji, unstable_batchedUpdates: os, Suspense: pr, SuspenseList: Se, lazy: Gi, createElement: Vt, createContext: ji, createRef: xi, Fragment: Ge, Component: Ft, useState: Cn, useReducer: Bn, useEffect: Ii, useLayoutEffect: Sn, useRef: Di, useImperativeHandle: Hi, useMemo: wr, useCallback: Fi, useContext: qi, useDebugValue: Wi, useErrorBoundary: vh });
yn(kh);
function is(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
is(Fe);
is(fh);
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var ss = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(y, M, _) {
    this.fn = y, this.context = M, this.once = _ || !1;
  }
  function o(y, M, _, x, F) {
    if (typeof _ != "function")
      throw new TypeError("The listener must be a function");
    var O = new a(_, x || y, F), I = r ? r + M : M;
    return y._events[I] ? y._events[I].fn ? y._events[I] = [y._events[I], O] : y._events[I].push(O) : (y._events[I] = O, y._eventsCount++), y;
  }
  function p(y, M) {
    --y._eventsCount === 0 ? y._events = new n() : delete y._events[M];
  }
  function h() {
    this._events = new n(), this._eventsCount = 0;
  }
  h.prototype.eventNames = function() {
    var y = [], M, _;
    if (this._eventsCount === 0)
      return y;
    for (_ in M = this._events)
      e.call(M, _) && y.push(r ? _.slice(1) : _);
    return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(M)) : y;
  }, h.prototype.listeners = function(y) {
    var M = r ? r + y : y, _ = this._events[M];
    if (!_)
      return [];
    if (_.fn)
      return [_.fn];
    for (var x = 0, F = _.length, O = new Array(F); x < F; x++)
      O[x] = _[x].fn;
    return O;
  }, h.prototype.listenerCount = function(y) {
    var M = r ? r + y : y, _ = this._events[M];
    return _ ? _.fn ? 1 : _.length : 0;
  }, h.prototype.emit = function(y, M, _, x, F, O) {
    var I = r ? r + y : y;
    if (!this._events[I])
      return !1;
    var P = this._events[I], C = arguments.length, B, k;
    if (P.fn) {
      switch (P.once && this.removeListener(y, P.fn, void 0, !0), C) {
        case 1:
          return P.fn.call(P.context), !0;
        case 2:
          return P.fn.call(P.context, M), !0;
        case 3:
          return P.fn.call(P.context, M, _), !0;
        case 4:
          return P.fn.call(P.context, M, _, x), !0;
        case 5:
          return P.fn.call(P.context, M, _, x, F), !0;
        case 6:
          return P.fn.call(P.context, M, _, x, F, O), !0;
      }
      for (k = 1, B = new Array(C - 1); k < C; k++)
        B[k - 1] = arguments[k];
      P.fn.apply(P.context, B);
    } else {
      var S = P.length, q;
      for (k = 0; k < S; k++)
        switch (P[k].once && this.removeListener(y, P[k].fn, void 0, !0), C) {
          case 1:
            P[k].fn.call(P[k].context);
            break;
          case 2:
            P[k].fn.call(P[k].context, M);
            break;
          case 3:
            P[k].fn.call(P[k].context, M, _);
            break;
          case 4:
            P[k].fn.call(P[k].context, M, _, x);
            break;
          default:
            if (!B)
              for (q = 1, B = new Array(C - 1); q < C; q++)
                B[q - 1] = arguments[q];
            P[k].fn.apply(P[k].context, B);
        }
    }
    return !0;
  }, h.prototype.on = function(y, M, _) {
    return o(this, y, M, _, !1);
  }, h.prototype.once = function(y, M, _) {
    return o(this, y, M, _, !0);
  }, h.prototype.removeListener = function(y, M, _, x) {
    var F = r ? r + y : y;
    if (!this._events[F])
      return this;
    if (!M)
      return p(this, F), this;
    var O = this._events[F];
    if (O.fn)
      O.fn === M && (!x || O.once) && (!_ || O.context === _) && p(this, F);
    else {
      for (var I = 0, P = [], C = O.length; I < C; I++)
        (O[I].fn !== M || x && !O[I].once || _ && O[I].context !== _) && P.push(O[I]);
      P.length ? this._events[F] = P.length === 1 ? P[0] : P : p(this, F);
    }
    return this;
  }, h.prototype.removeAllListeners = function(y) {
    var M;
    return y ? (M = r ? r + y : y, this._events[M] && p(this, M)) : (this._events = new n(), this._eventsCount = 0), this;
  }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = r, h.EventEmitter = h, t.exports = h;
})(ss);
ss.exports;
var as = {}, ln = {}, Be = {}, fn = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(t, e) {
  (function(r) {
    var n = e && !e.nodeType && e, a = t && !t.nodeType && t, o = typeof Rt == "object" && Rt;
    (o.global === o || o.window === o || o.self === o) && (r = o);
    var p, h = 2147483647, y = 36, M = 1, _ = 26, x = 38, F = 700, O = 72, I = 128, P = "-", C = /^xn--/, B = /[^\x20-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, S = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, q = y - M, J = Math.floor, K = String.fromCharCode, ot;
    function tt(D) {
      throw RangeError(S[D]);
    }
    function lt(D, U) {
      for (var H = D.length, G = []; H--; )
        G[H] = U(D[H]);
      return G;
    }
    function i(D, U) {
      var H = D.split("@"), G = "";
      H.length > 1 && (G = H[0] + "@", D = H[1]), D = D.replace(k, ".");
      var Q = D.split("."), c = lt(Q, U).join(".");
      return G + c;
    }
    function f(D) {
      for (var U = [], H = 0, G = D.length, Q, c; H < G; )
        Q = D.charCodeAt(H++), Q >= 55296 && Q <= 56319 && H < G ? (c = D.charCodeAt(H++), (c & 64512) == 56320 ? U.push(((Q & 1023) << 10) + (c & 1023) + 65536) : (U.push(Q), H--)) : U.push(Q);
      return U;
    }
    function d(D) {
      return lt(D, function(U) {
        var H = "";
        return U > 65535 && (U -= 65536, H += K(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), H += K(U), H;
      }).join("");
    }
    function g(D) {
      return D - 48 < 10 ? D - 22 : D - 65 < 26 ? D - 65 : D - 97 < 26 ? D - 97 : y;
    }
    function b(D, U) {
      return D + 22 + 75 * (D < 26) - ((U != 0) << 5);
    }
    function L(D, U, H) {
      var G = 0;
      for (D = H ? J(D / F) : D >> 1, D += J(D / U); D > q * _ >> 1; G += y)
        D = J(D / q);
      return J(G + (q + 1) * D / (D + x));
    }
    function A(D) {
      var U = [], H = D.length, G, Q = 0, c = I, R = O, T, j, V, $, Z, X, et, Y, ht;
      for (T = D.lastIndexOf(P), T < 0 && (T = 0), j = 0; j < T; ++j)
        D.charCodeAt(j) >= 128 && tt("not-basic"), U.push(D.charCodeAt(j));
      for (V = T > 0 ? T + 1 : 0; V < H; ) {
        for ($ = Q, Z = 1, X = y; V >= H && tt("invalid-input"), et = g(D.charCodeAt(V++)), (et >= y || et > J((h - Q) / Z)) && tt("overflow"), Q += et * Z, Y = X <= R ? M : X >= R + _ ? _ : X - R, !(et < Y); X += y)
          ht = y - Y, Z > J(h / ht) && tt("overflow"), Z *= ht;
        G = U.length + 1, R = L(Q - $, G, $ == 0), J(Q / G) > h - c && tt("overflow"), c += J(Q / G), Q %= G, U.splice(Q++, 0, c);
      }
      return d(U);
    }
    function v(D) {
      var U, H, G, Q, c, R, T, j, V, $, Z, X = [], et, Y, ht, s;
      for (D = f(D), et = D.length, U = I, H = 0, c = O, R = 0; R < et; ++R)
        Z = D[R], Z < 128 && X.push(K(Z));
      for (G = Q = X.length, Q && X.push(P); G < et; ) {
        for (T = h, R = 0; R < et; ++R)
          Z = D[R], Z >= U && Z < T && (T = Z);
        for (Y = G + 1, T - U > J((h - H) / Y) && tt("overflow"), H += (T - U) * Y, U = T, R = 0; R < et; ++R)
          if (Z = D[R], Z < U && ++H > h && tt("overflow"), Z == U) {
            for (j = H, V = y; $ = V <= c ? M : V >= c + _ ? _ : V - c, !(j < $); V += y)
              s = j - $, ht = y - $, X.push(K(b($ + s % ht, 0))), j = J(s / ht);
            X.push(K(b(j, 0))), c = L(H, Y, G == Q), H = 0, ++G;
          }
        ++H, ++U;
      }
      return X.join("");
    }
    function u(D) {
      return i(D, function(U) {
        return C.test(U) ? A(U.slice(4).toLowerCase()) : U;
      });
    }
    function w(D) {
      return i(D, function(U) {
        return B.test(U) ? "xn--" + v(U) : U;
      });
    }
    if (p = { version: "1.3.2", ucs2: { decode: f, encode: d }, decode: A, encode: v, toASCII: w, toUnicode: u }, n && a)
      if (t.exports == n)
        a.exports = p;
      else
        for (ot in p)
          p.hasOwnProperty(ot) && (n[ot] = p[ot]);
    else
      r.punycode = p;
  })(Rt);
})(fn, fn.exports);
var Ch = { isString: function(t) {
  return typeof t == "string";
}, isObject: function(t) {
  return typeof t == "object" && t !== null;
}, isNull: function(t) {
  return t === null;
}, isNullOrUndefined: function(t) {
  return t == null;
} }, We = {};
function Bh(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var Sh = function(t, e, r, n) {
  e = e || "&", r = r || "=";
  var a = {};
  if (typeof t != "string" || t.length === 0)
    return a;
  var o = /\+/g;
  t = t.split(e);
  var p = 1e3;
  n && typeof n.maxKeys == "number" && (p = n.maxKeys);
  var h = t.length;
  p > 0 && h > p && (h = p);
  for (var y = 0; y < h; ++y) {
    var M = t[y].replace(o, "%20"), _ = M.indexOf(r), x, F, O, I;
    _ >= 0 ? (x = M.substr(0, _), F = M.substr(_ + 1)) : (x = M, F = ""), O = decodeURIComponent(x), I = decodeURIComponent(F), Bh(a, O) ? Array.isArray(a[O]) ? a[O].push(I) : a[O] = [a[O], I] : a[O] = I;
  }
  return a;
}, De = function(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "boolean":
      return t ? "true" : "false";
    case "number":
      return isFinite(t) ? t : "";
    default:
      return "";
  }
}, Nh = function(t, e, r, n) {
  return e = e || "&", r = r || "=", t === null && (t = void 0), typeof t == "object" ? Object.keys(t).map(function(a) {
    var o = encodeURIComponent(De(a)) + r;
    return Array.isArray(t[a]) ? t[a].map(function(p) {
      return o + encodeURIComponent(De(p));
    }).join(e) : o + encodeURIComponent(De(t[a]));
  }).join(e) : n ? encodeURIComponent(De(n)) + r + encodeURIComponent(De(t)) : "";
};
We.decode = We.parse = Sh, We.encode = We.stringify = Nh;
var xh = fn.exports, Wt = Ch;
Be.parse = Xe, Be.resolve = Fh, Be.resolveObject = qh, Be.format = Hh, Be.Url = Ht;
function Ht() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var Oh = /^([a-z0-9.+-]+:)/i, Th = /:[0-9]*$/, Ph = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Uh = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Rh = ["{", "}", "|", "\\", "^", "`"].concat(Uh), cn = ["'"].concat(Rh), po = ["%", "/", "?", ";", "#"].concat(cn), mo = ["/", "?", "#"], jh = 255, go = /^[+a-z0-9A-Z_-]{0,63}$/, Ih = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Dh = { javascript: !0, "javascript:": !0 }, pn = { javascript: !0, "javascript:": !0 }, Ne = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, dn = We;
function Xe(t, e, r) {
  if (t && Wt.isObject(t) && t instanceof Ht)
    return t;
  var n = new Ht();
  return n.parse(t, e, r), n;
}
Ht.prototype.parse = function(t, e, r) {
  if (!Wt.isString(t))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
  var n = t.indexOf("?"), a = n !== -1 && n < t.indexOf("#") ? "?" : "#", o = t.split(a), p = /\\/g;
  o[0] = o[0].replace(p, "/"), t = o.join(a);
  var h = t;
  if (h = h.trim(), !r && t.split("#").length === 1) {
    var y = Ph.exec(h);
    if (y)
      return this.path = h, this.href = h, this.pathname = y[1], y[2] ? (this.search = y[2], e ? this.query = dn.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
  }
  var M = Oh.exec(h);
  if (M) {
    M = M[0];
    var _ = M.toLowerCase();
    this.protocol = _, h = h.substr(M.length);
  }
  if (r || M || h.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var x = h.substr(0, 2) === "//";
    x && !(M && pn[M]) && (h = h.substr(2), this.slashes = !0);
  }
  if (!pn[M] && (x || M && !Ne[M])) {
    for (var F = -1, O = 0; O < mo.length; O++) {
      var I = h.indexOf(mo[O]);
      I !== -1 && (F === -1 || I < F) && (F = I);
    }
    var P, C;
    F === -1 ? C = h.lastIndexOf("@") : C = h.lastIndexOf("@", F), C !== -1 && (P = h.slice(0, C), h = h.slice(C + 1), this.auth = decodeURIComponent(P)), F = -1;
    for (var O = 0; O < po.length; O++) {
      var I = h.indexOf(po[O]);
      I !== -1 && (F === -1 || I < F) && (F = I);
    }
    F === -1 && (F = h.length), this.host = h.slice(0, F), h = h.slice(F), this.parseHost(), this.hostname = this.hostname || "";
    var B = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!B)
      for (var k = this.hostname.split(/\./), O = 0, S = k.length; O < S; O++) {
        var q = k[O];
        if (!!q && !q.match(go)) {
          for (var J = "", K = 0, ot = q.length; K < ot; K++)
            q.charCodeAt(K) > 127 ? J += "x" : J += q[K];
          if (!J.match(go)) {
            var tt = k.slice(0, O), lt = k.slice(O + 1), i = q.match(Ih);
            i && (tt.push(i[1]), lt.unshift(i[2])), lt.length && (h = "/" + lt.join(".") + h), this.hostname = tt.join(".");
            break;
          }
        }
      }
    this.hostname.length > jh ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), B || (this.hostname = xh.toASCII(this.hostname));
    var f = this.port ? ":" + this.port : "", d = this.hostname || "";
    this.host = d + f, this.href += this.host, B && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), h[0] !== "/" && (h = "/" + h));
  }
  if (!Dh[_])
    for (var O = 0, S = cn.length; O < S; O++) {
      var g = cn[O];
      if (h.indexOf(g) !== -1) {
        var b = encodeURIComponent(g);
        b === g && (b = escape(g)), h = h.split(g).join(b);
      }
    }
  var L = h.indexOf("#");
  L !== -1 && (this.hash = h.substr(L), h = h.slice(0, L));
  var A = h.indexOf("?");
  if (A !== -1 ? (this.search = h.substr(A), this.query = h.substr(A + 1), e && (this.query = dn.parse(this.query)), h = h.slice(0, A)) : e && (this.search = "", this.query = {}), h && (this.pathname = h), Ne[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var f = this.pathname || "", v = this.search || "";
    this.path = f + v;
  }
  return this.href = this.format(), this;
};
function Hh(t) {
  return Wt.isString(t) && (t = Xe(t)), t instanceof Ht ? t.format() : Ht.prototype.format.call(t);
}
Ht.prototype.format = function() {
  var t = this.auth || "";
  t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
  var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", a = !1, o = "";
  this.host ? a = t + this.host : this.hostname && (a = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && Wt.isObject(this.query) && Object.keys(this.query).length && (o = dn.stringify(this.query));
  var p = this.search || o && "?" + o || "";
  return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || Ne[e]) && a !== !1 ? (a = "//" + (a || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : a || (a = ""), n && n.charAt(0) !== "#" && (n = "#" + n), p && p.charAt(0) !== "?" && (p = "?" + p), r = r.replace(/[?#]/g, function(h) {
    return encodeURIComponent(h);
  }), p = p.replace("#", "%23"), e + a + r + p + n;
};
function Fh(t, e) {
  return Xe(t, !1, !0).resolve(e);
}
Ht.prototype.resolve = function(t) {
  return this.resolveObject(Xe(t, !1, !0)).format();
};
function qh(t, e) {
  return t ? Xe(t, !1, !0).resolveObject(e) : e;
}
Ht.prototype.resolveObject = function(t) {
  if (Wt.isString(t)) {
    var e = new Ht();
    e.parse(t, !1, !0), t = e;
  }
  for (var r = new Ht(), n = Object.keys(this), a = 0; a < n.length; a++) {
    var o = n[a];
    r[o] = this[o];
  }
  if (r.hash = t.hash, t.href === "")
    return r.href = r.format(), r;
  if (t.slashes && !t.protocol) {
    for (var p = Object.keys(t), h = 0; h < p.length; h++) {
      var y = p[h];
      y !== "protocol" && (r[y] = t[y]);
    }
    return Ne[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (t.protocol && t.protocol !== r.protocol) {
    if (!Ne[t.protocol]) {
      for (var M = Object.keys(t), _ = 0; _ < M.length; _++) {
        var x = M[_];
        r[x] = t[x];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = t.protocol, !t.host && !pn[t.protocol]) {
      for (var S = (t.pathname || "").split("/"); S.length && !(t.host = S.shift()); )
        ;
      t.host || (t.host = ""), t.hostname || (t.hostname = ""), S[0] !== "" && S.unshift(""), S.length < 2 && S.unshift(""), r.pathname = S.join("/");
    } else
      r.pathname = t.pathname;
    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
      var F = r.pathname || "", O = r.search || "";
      r.path = F + O;
    }
    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
  }
  var I = r.pathname && r.pathname.charAt(0) === "/", P = t.host || t.pathname && t.pathname.charAt(0) === "/", C = P || I || r.host && t.pathname, B = C, k = r.pathname && r.pathname.split("/") || [], S = t.pathname && t.pathname.split("/") || [], q = r.protocol && !Ne[r.protocol];
  if (q && (r.hostname = "", r.port = null, r.host && (k[0] === "" ? k[0] = r.host : k.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && (S[0] === "" ? S[0] = t.host : S.unshift(t.host)), t.host = null), C = C && (S[0] === "" || k[0] === "")), P)
    r.host = t.host || t.host === "" ? t.host : r.host, r.hostname = t.hostname || t.hostname === "" ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, k = S;
  else if (S.length)
    k || (k = []), k.pop(), k = k.concat(S), r.search = t.search, r.query = t.query;
  else if (!Wt.isNullOrUndefined(t.search)) {
    if (q) {
      r.hostname = r.host = k.shift();
      var J = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      J && (r.auth = J.shift(), r.host = r.hostname = J.shift());
    }
    return r.search = t.search, r.query = t.query, (!Wt.isNull(r.pathname) || !Wt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!k.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var K = k.slice(-1)[0], ot = (r.host || t.host || k.length > 1) && (K === "." || K === "..") || K === "", tt = 0, lt = k.length; lt >= 0; lt--)
    K = k[lt], K === "." ? k.splice(lt, 1) : K === ".." ? (k.splice(lt, 1), tt++) : tt && (k.splice(lt, 1), tt--);
  if (!C && !B)
    for (; tt--; tt)
      k.unshift("..");
  C && k[0] !== "" && (!k[0] || k[0].charAt(0) !== "/") && k.unshift(""), ot && k.join("/").substr(-1) !== "/" && k.push("");
  var i = k[0] === "" || k[0] && k[0].charAt(0) === "/";
  if (q) {
    r.hostname = r.host = i ? "" : k.length ? k.shift() : "";
    var J = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    J && (r.auth = J.shift(), r.host = r.hostname = J.shift());
  }
  return C = C || r.host && k.length, C && !i && k.unshift(""), k.length ? r.pathname = k.join("/") : (r.pathname = null, r.path = null), (!Wt.isNull(r.pathname) || !Wt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
}, Ht.prototype.parseHost = function() {
  var t = this.host, e = Th.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
var Wh = function() {
  function t(e) {
    this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  }
  return t;
}();
Tn.ProgressEvent = Wh;
var je = {}, br = Rt && Rt.__extends || function() {
  var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r)
      r.hasOwnProperty(n) && (e[n] = r[n]);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(je, "__esModule", { value: !0 });
var Zh = function(t) {
  br(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
je.SecurityError = Zh;
var $h = function(t) {
  br(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
je.InvalidStateError = $h;
var zh = function(t) {
  br(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
je.NetworkError = zh;
var Jh = function(t) {
  br(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
je.SyntaxError = Jh;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
var Yh = function() {
  function t() {
    this.listeners = {};
  }
  return t.prototype.addEventListener = function(e, r) {
    e = e.toLowerCase(), this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(r.handleEvent || r);
  }, t.prototype.removeEventListener = function(e, r) {
    if (e = e.toLowerCase(), !!this.listeners[e]) {
      var n = this.listeners[e].indexOf(r.handleEvent || r);
      n < 0 || this.listeners[e].splice(n, 1);
    }
  }, t.prototype.dispatchEvent = function(e) {
    var r = e.type.toLowerCase();
    if (e.target = this, this.listeners[r])
      for (var n = 0, a = this.listeners[r]; n < a.length; n++) {
        var o = a[n];
        o.call(this, e);
      }
    var p = this["on" + r];
    return p && p.call(this, e), !0;
  }, t;
}();
Qe.XMLHttpRequestEventTarget = Yh;
var Pn = {}, Vh = Rt && Rt.__extends || function() {
  var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r)
      r.hasOwnProperty(n) && (e[n] = r[n]);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}();
Object.defineProperty(Pn, "__esModule", { value: !0 });
var Kh = Qe, Gh = function(t) {
  Vh(e, t);
  function e() {
    var r = t.call(this) || this;
    return r._contentType = null, r._body = null, r._reset(), r;
  }
  return e.prototype._reset = function() {
    this._contentType = null, this._body = null;
  }, e.prototype._setData = function(r) {
    if (r != null)
      if (typeof r == "string")
        r.length !== 0 && (this._contentType = "text/plain;charset=UTF-8"), this._body = new Buffer(r, "utf-8");
      else if (Buffer.isBuffer(r))
        this._body = r;
      else if (r instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), a = new Uint8Array(r), o = 0; o < r.byteLength; o++)
          n[o] = a[o];
        this._body = n;
      } else if (r.buffer && r.buffer instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), p = r.byteOffset, a = new Uint8Array(r.buffer), o = 0; o < r.byteLength; o++)
          n[o] = a[o + p];
        this._body = n;
      } else
        throw new Error("Unsupported send() data " + r);
  }, e.prototype._finalizeHeaders = function(r, n) {
    this._contentType && !n["content-type"] && (r["Content-Type"] = this._contentType), this._body && (r["Content-Length"] = this._body.length.toString());
  }, e.prototype._startUpload = function(r) {
    this._body && r.write(this._body), r.end();
  }, e;
}(Kh.XMLHttpRequestEventTarget);
Pn.XMLHttpRequestUpload = Gh;
var ur = {};
(function() {
  function t(a, o, p, h) {
    return this instanceof t ? (this.domain = a || void 0, this.path = o || "/", this.secure = !!p, this.script = !!h, this) : new t(a, o, p, h);
  }
  t.All = Object.freeze(/* @__PURE__ */ Object.create(null)), ur.CookieAccessInfo = t;
  function e(a, o, p) {
    return a instanceof e ? a : this instanceof e ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(p || "/"), this.explicit_path = !1, this.domain = o || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, a && this.parse(a, o, p), this) : new e(a, o, p);
  }
  ur.Cookie = e, e.prototype.toString = function() {
    var a = [this.name + "=" + this.value];
    return this.expiration_date !== 1 / 0 && a.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && a.push("domain=" + this.domain), this.path && a.push("path=" + this.path), this.secure && a.push("secure"), this.noscript && a.push("httponly"), a.join("; ");
  }, e.prototype.toValueString = function() {
    return this.name + "=" + this.value;
  };
  var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
  e.prototype.parse = function(a, o, p) {
    if (this instanceof e) {
      var h = a.split(";").filter(function(F) {
        return !!F;
      }), y, M = h[0].match(/([^=]+)=([\s\S]*)/);
      if (!M) {
        console.warn("Invalid cookie header encountered. Header: '" + a + "'");
        return;
      }
      var _ = M[1], x = M[2];
      if (typeof _ != "string" || _.length === 0 || typeof x != "string") {
        console.warn("Unable to extract values from cookie header. Cookie: '" + a + "'");
        return;
      }
      for (this.name = _, this.value = x, y = 1; y < h.length; y += 1)
        switch (M = h[y].match(/([^=]+)(?:=([\s\S]*))?/), _ = M[1].trim().toLowerCase(), x = M[2], _) {
          case "httponly":
            this.noscript = !0;
            break;
          case "expires":
            this.expiration_date = x ? Number(Date.parse(x)) : 1 / 0;
            break;
          case "path":
            this.path = x ? x.trim() : "", this.explicit_path = !0;
            break;
          case "domain":
            this.domain = x ? x.trim() : "", this.explicit_domain = !!this.domain;
            break;
          case "secure":
            this.secure = !0;
            break;
        }
      return this.explicit_path || (this.path = p || "/"), this.explicit_domain || (this.domain = o), this;
    }
    return new e().parse(a, o, p);
  }, e.prototype.matches = function(a) {
    return a === t.All ? !0 : !(this.noscript && a.script || this.secure && !a.secure || !this.collidesWith(a));
  }, e.prototype.collidesWith = function(a) {
    if (this.path && !a.path || this.domain && !a.domain || this.path && a.path.indexOf(this.path) !== 0 || this.explicit_path && a.path.indexOf(this.path) !== 0)
      return !1;
    var o = a.domain && a.domain.replace(/^[\.]/, ""), p = this.domain && this.domain.replace(/^[\.]/, "");
    if (p === o)
      return !0;
    if (p) {
      if (!this.explicit_domain)
        return !1;
      var h = o.indexOf(p);
      return !(h === -1 || h !== o.length - p.length);
    }
    return !0;
  };
  function n() {
    var a, o, p;
    return this instanceof n ? (a = /* @__PURE__ */ Object.create(null), this.setCookie = function(h, y, M) {
      var _, x;
      if (h = new e(h, y, M), _ = h.expiration_date <= Date.now(), a[h.name] !== void 0) {
        for (o = a[h.name], x = 0; x < o.length; x += 1)
          if (p = o[x], p.collidesWith(h))
            return _ ? (o.splice(x, 1), o.length === 0 && delete a[h.name], !1) : (o[x] = h, h);
        return _ ? !1 : (o.push(h), h);
      }
      return _ ? !1 : (a[h.name] = [h], a[h.name]);
    }, this.getCookie = function(h, y) {
      var M, _;
      if (o = a[h], !!o)
        for (_ = 0; _ < o.length; _ += 1) {
          if (M = o[_], M.expiration_date <= Date.now()) {
            o.length === 0 && delete a[M.name];
            continue;
          }
          if (M.matches(y))
            return M;
        }
    }, this.getCookies = function(h) {
      var y = [], M, _;
      for (M in a)
        _ = this.getCookie(M, h), _ && y.push(_);
      return y.toString = function() {
        return y.join(":");
      }, y.toValueString = function() {
        return y.map(function(x) {
          return x.toValueString();
        }).join("; ");
      }, y;
    }, this) : new n();
  }
  ur.CookieJar = n, n.prototype.setCookies = function(a, o, p) {
    a = Array.isArray(a) ? a : a.split(r);
    var h = [], y, M;
    for (a = a.map(function(_) {
      return new e(_, o, p);
    }), y = 0; y < a.length; y += 1)
      M = a[y], this.setCookie(M, o, p) && h.push(M);
    return h;
  };
})();
var Xh = Rt && Rt.__extends || function() {
  var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r)
      r.hasOwnProperty(n) && (e[n] = r[n]);
  };
  return function(e, r) {
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Qh = Rt && Rt.__assign || Object.assign || function(t) {
  for (var e, r = 1, n = arguments.length; r < n; r++) {
    e = arguments[r];
    for (var a in e)
      Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
  }
  return t;
};
Object.defineProperty(ln, "__esModule", { value: !0 });
var mn = gn, us = gn, yo = gn, qr = Be, vo = Tn, or = je, tl = Qe, _o = Pn, wo = ur, ir = function(t) {
  Xh(e, t);
  function e(r) {
    r === void 0 && (r = {});
    var n = t.call(this) || this;
    return n.UNSENT = e.UNSENT, n.OPENED = e.OPENED, n.HEADERS_RECEIVED = e.HEADERS_RECEIVED, n.LOADING = e.LOADING, n.DONE = e.DONE, n.onreadystatechange = null, n.readyState = e.UNSENT, n.response = null, n.responseText = "", n.responseType = "", n.status = 0, n.statusText = "", n.timeout = 0, n.upload = new _o.XMLHttpRequestUpload(), n.responseUrl = "", n.withCredentials = !1, n._method = null, n._url = null, n._sync = !1, n._headers = {}, n._loweredHeaders = {}, n._mimeOverride = null, n._request = null, n._response = null, n._responseParts = null, n._responseHeaders = null, n._aborting = null, n._error = null, n._loadedBytes = 0, n._totalBytes = 0, n._lengthComputable = !1, n._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, n._restrictedHeaders = { "accept-charset": !0, "accept-encoding": !0, "access-control-request-headers": !0, "access-control-request-method": !0, connection: !0, "content-length": !0, cookie: !0, cookie2: !0, date: !0, dnt: !0, expect: !0, host: !0, "keep-alive": !0, origin: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, via: !0 }, n._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, n._userAgent = "Mozilla/5.0 (" + yo.type() + " " + yo.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, n._anonymous = r.anon || !1, n;
  }
  return e.prototype.open = function(r, n, a, o, p) {
    if (a === void 0 && (a = !0), r = r.toUpperCase(), this._restrictedMethods[r])
      throw new e.SecurityError("HTTP method " + r + " is not allowed in XHR");
    var h = this._parseUrl(n, o, p);
    this.readyState === e.HEADERS_RECEIVED || (this.readyState, e.LOADING), this._method = r, this._url = h, this._sync = !a, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(e.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
  }, e.prototype.setRequestHeader = function(r, n) {
    if (this.readyState !== e.OPENED)
      throw new e.InvalidStateError("XHR readyState must be OPENED");
    var a = r.toLowerCase();
    if (this._restrictedHeaders[a] || /^sec-/.test(a) || /^proxy-/.test(a)) {
      console.warn('Refused to set unsafe header "' + r + '"');
      return;
    }
    n = n.toString(), this._loweredHeaders[a] != null ? (r = this._loweredHeaders[a], this._headers[r] = this._headers[r] + ", " + n) : (this._loweredHeaders[a] = r, this._headers[r] = n);
  }, e.prototype.send = function(r) {
    if (this.readyState !== e.OPENED)
      throw new e.InvalidStateError("XHR readyState must be OPENED");
    if (this._request)
      throw new e.InvalidStateError("send() already called");
    switch (this._url.protocol) {
      case "file:":
        return this._sendFile(r);
      case "http:":
      case "https:":
        return this._sendHttp(r);
      default:
        throw new e.NetworkError("Unsupported protocol " + this._url.protocol);
    }
  }, e.prototype.abort = function() {
    this._request != null && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"));
  }, e.prototype.getResponseHeader = function(r) {
    if (this._responseHeaders == null || r == null)
      return null;
    var n = r.toLowerCase();
    return this._responseHeaders.hasOwnProperty(n) ? this._responseHeaders[r.toLowerCase()] : null;
  }, e.prototype.getAllResponseHeaders = function() {
    var r = this;
    return this._responseHeaders == null ? "" : Object.keys(this._responseHeaders).map(function(n) {
      return n + ": " + r._responseHeaders[n];
    }).join(`\r
`);
  }, e.prototype.overrideMimeType = function(r) {
    if (this.readyState === e.LOADING || this.readyState === e.DONE)
      throw new e.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
    this._mimeOverride = r.toLowerCase();
  }, e.prototype.nodejsSet = function(r) {
    if (this.nodejsHttpAgent = r.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = r.httpsAgent || this.nodejsHttpsAgent, r.hasOwnProperty("baseUrl")) {
      if (r.baseUrl != null) {
        var n = qr.parse(r.baseUrl, !1, !0);
        if (!n.protocol)
          throw new e.SyntaxError("baseUrl must be an absolute URL");
      }
      this.nodejsBaseUrl = r.baseUrl;
    }
  }, e.nodejsSet = function(r) {
    e.prototype.nodejsSet(r);
  }, e.prototype._setReadyState = function(r) {
    this.readyState = r, this.dispatchEvent(new vo.ProgressEvent("readystatechange"));
  }, e.prototype._sendFile = function(r) {
    throw new Error("Protocol file: not implemented");
  }, e.prototype._sendHttp = function(r) {
    if (this._sync)
      throw new Error("Synchronous XHR processing not implemented");
    r && (this._method === "GET" || this._method === "HEAD") ? (console.warn("Discarding entity body for " + this._method + " requests"), r = null) : r = r || "", this.upload._setData(r), this._finalizeHeaders(), this._sendHxxpRequest();
  }, e.prototype._sendHxxpRequest = function() {
    var r = this;
    if (this.withCredentials) {
      var n = e.cookieJar.getCookies(wo.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === "https:")).toValueString();
      this._headers.cookie = this._headers.cookie2 = n;
    }
    var a = this._url.protocol === "http:" ? [mn, this.nodejsHttpAgent] : [us, this.nodejsHttpsAgent], o = a[0], p = a[1], h = o.request.bind(o), y = h({ hostname: this._url.hostname, port: +this._url.port, path: this._url.path, auth: this._url.auth, method: this._method, headers: this._headers, agent: p });
    this._request = y, this.timeout && y.setTimeout(this.timeout, function() {
      return r._onHttpTimeout(y);
    }), y.on("response", function(M) {
      return r._onHttpResponse(y, M);
    }), y.on("error", function(M) {
      return r._onHttpRequestError(y, M);
    }), this.upload._startUpload(y), this._request === y && this._dispatchProgress("loadstart");
  }, e.prototype._finalizeHeaders = function() {
    this._headers = Qh({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
  }, e.prototype._onHttpResponse = function(r, n) {
    var a = this;
    if (this._request === r) {
      if (this.withCredentials && (n.headers["set-cookie"] || n.headers["set-cookie2"]) && e.cookieJar.setCookies(n.headers["set-cookie"] || n.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(n.statusCode) >= 0) {
        this._url = this._parseUrl(n.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), this._headers["Content-Type"] != null && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), this._sendHxxpRequest();
        return;
      }
      this._response = n, this._response.on("data", function(p) {
        return a._onHttpResponseData(n, p);
      }), this._response.on("end", function() {
        return a._onHttpResponseEnd(n);
      }), this._response.on("close", function() {
        return a._onHttpResponseClose(n);
      }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = mn.STATUS_CODES[this.status], this._parseResponseHeaders(n);
      var o = this._responseHeaders["content-length"] || "";
      this._totalBytes = +o, this._lengthComputable = !!o, this._setReadyState(e.HEADERS_RECEIVED);
    }
  }, e.prototype._onHttpResponseData = function(r, n) {
    this._response === r && (this._responseParts.push(new Buffer(n)), this._loadedBytes += n.length, this.readyState !== e.LOADING && this._setReadyState(e.LOADING), this._dispatchProgress("progress"));
  }, e.prototype._onHttpResponseEnd = function(r) {
    this._response === r && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(e.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"));
  }, e.prototype._onHttpResponseClose = function(r) {
    if (this._response === r) {
      var n = this._request;
      this._setError(), n.abort(), this._setReadyState(e.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend");
    }
  }, e.prototype._onHttpTimeout = function(r) {
    this._request === r && (this._setError(), r.abort(), this._setReadyState(e.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"));
  }, e.prototype._onHttpRequestError = function(r, n) {
    this._request === r && (this._setError(), r.abort(), this._setReadyState(e.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"));
  }, e.prototype._dispatchProgress = function(r) {
    var n = new e.ProgressEvent(r);
    n.lengthComputable = this._lengthComputable, n.loaded = this._loadedBytes, n.total = this._totalBytes, this.dispatchEvent(n);
  }, e.prototype._setError = function() {
    this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null;
  }, e.prototype._parseUrl = function(r, n, a) {
    var o = this.nodejsBaseUrl == null ? r : qr.resolve(this.nodejsBaseUrl, r), p = qr.parse(o, !1, !0);
    p.hash = null;
    var h = (p.auth || "").split(":"), y = h[0], M = h[1];
    return (y || M || n || a) && (p.auth = (n || y || "") + ":" + (a || M || "")), p;
  }, e.prototype._parseResponseHeaders = function(r) {
    this._responseHeaders = {};
    for (var n in r.headers) {
      var a = n.toLowerCase();
      this._privateHeaders[a] || (this._responseHeaders[a] = r.headers[n]);
    }
    this._mimeOverride != null && (this._responseHeaders["content-type"] = this._mimeOverride);
  }, e.prototype._parseResponse = function() {
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
        for (var n = new ArrayBuffer(r.length), a = new Uint8Array(n), o = 0; o < r.length; o++)
          a[o] = r[o];
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
  }, e.prototype._parseResponseEncoding = function() {
    return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8";
  }, e.ProgressEvent = vo.ProgressEvent, e.InvalidStateError = or.InvalidStateError, e.NetworkError = or.NetworkError, e.SecurityError = or.SecurityError, e.SyntaxError = or.SyntaxError, e.XMLHttpRequestUpload = _o.XMLHttpRequestUpload, e.UNSENT = 0, e.OPENED = 1, e.HEADERS_RECEIVED = 2, e.LOADING = 3, e.DONE = 4, e.cookieJar = wo.CookieJar(), e;
}(tl.XMLHttpRequestEventTarget);
ln.XMLHttpRequest = ir, ir.prototype.nodejsHttpAgent = mn.globalAgent, ir.prototype.nodejsHttpsAgent = us.globalAgent, ir.prototype.nodejsBaseUrl = null, function(t) {
  function e(n) {
    for (var a in n)
      t.hasOwnProperty(a) || (t[a] = n[a]);
  }
  Object.defineProperty(t, "__esModule", { value: !0 }), e(ln);
  var r = Qe;
  t.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
}(as);
Do("XMLHttpRequest") || as.XMLHttpRequest;
require("web3-provider-engine");
require("web3-provider-engine/subproviders/cache");
require("web3-provider-engine/subproviders/fixture");
require("web3-provider-engine/subproviders/filters");
require("web3-provider-engine/subproviders/hooked-wallet");
require("web3-provider-engine/subproviders/nonce-tracker");
require("web3-provider-engine/subproviders/subscriptions");
const el = "_btn_1ij5m_5", rl = "_active_1ij5m_19", nl = "_can_not_switch_1ij5m_36", Wr = {
  btn: el,
  active: rl,
  can_not_switch: nl
}, ol = ({
  chain: t,
  loading: e,
  disabled: r,
  isActive: n,
  canSwitchChain: a,
  onClick: o
}) => {
  const {
    name: p,
    chainId: h
  } = t;
  let y = n ? Wr.active : Wr.btn;
  const M = a && !n;
  let _;
  return M ? _ = () => o() : (y = `${y} ${Wr.can_not_switch}`, _ = () => {
  }), /* @__PURE__ */ at(ps, {
    block: !0,
    className: y,
    disabled: e || r,
    icon: fs(h, 23, 23),
    onClick: _,
    children: p
  });
}, dl = ({
  chain: t,
  loading: e,
  connectedChainId: r,
  expectedChainId: n,
  canSwitchChain: a,
  onClick: o
}) => {
  const {
    chainId: p
  } = t, h = p === r;
  let y;
  return !h && n && (y = p !== n), /* @__PURE__ */ at(ol, {
    onClick: o,
    loading: e,
    disabled: y,
    isActive: h,
    canSwitchChain: a,
    chain: t
  });
}, il = "_chain_name_8kdgo_1", sl = {
  chain_name: il
}, al = "_bold_5fnjw_5", bo = {
  bold: al
}, hs = ({
  className: t,
  children: e
}) => {
  const r = t ? `${t} ${bo.bold}` : bo.bold;
  return /* @__PURE__ */ at("span", {
    className: r,
    children: e
  });
}, He = ({
  children: t
}) => /* @__PURE__ */ at(hs, {
  className: sl.chain_name,
  children: t
}), ml = ({
  account: t,
  chain: e,
  supportedChains: r,
  expectedChainId: n
}) => t ? n ? /* @__PURE__ */ zt(Or, {
  children: ["You connected to ", /* @__PURE__ */ zt(He, {
    children: [e.name, "."]
  }), /* @__PURE__ */ zt("div", {
    children: ["Please connect to ", /* @__PURE__ */ at(He, {
      children: cs(n)
    }), " network."]
  })]
}) : r.some((a) => a.name === e.name) ? /* @__PURE__ */ zt(Or, {
  children: ["You are currently using ", /* @__PURE__ */ at(hs, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ at(He, {
    children: e.name
  }), " network"]
}) : /* @__PURE__ */ zt(Or, {
  children: ["You connected to ", /* @__PURE__ */ zt(He, {
    children: [e.name, "."]
  }), /* @__PURE__ */ zt("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ at(He, {
      children: r.map((a) => a.name).join(", ")
    })]
  })]
}) : null;
export {
  ml as A,
  hs as B,
  fl as C,
  cl as M,
  pl as W,
  dl as a,
  gs as n
};
//# sourceMappingURL=alert.ecb8498d.mjs.map
