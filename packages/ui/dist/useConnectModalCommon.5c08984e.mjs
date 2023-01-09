import "ethers";
import { Button as ws, Row as zn, Col as Ir } from "antd";
import { useState as bs } from "react";
import { j as rt, g as Ms, t as Es, a as It, I as jo, F as Me, b as As, i as Ls } from "./index.2cd599fa.mjs";
const Cs = "_modal_f97e5_5", Ss = "_description_f97e5_8", ks = "_chain_buttons_f97e5_18", uf = {
  modal: Cs,
  description: Ss,
  chain_buttons: ks
}, Sn = {};
var Gr = ((t) => (t.Undefined = "", t.Injected = "Injected", t.WalletConnect = "WalletConnect", t))(Gr || {}), Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _r(t) {
  var e = t.default;
  if (typeof e == "function") {
    var r = function() {
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : { enumerable: !0, get: function() {
      return t[n];
    } });
  }), r;
}
var kn = {}, pt = {};
Object.defineProperty(pt, "__esModule", { value: !0 }), pt.getLocalStorage = pt.getLocalStorageOrThrow = pt.getCrypto = pt.getCryptoOrThrow = pt.getLocation = pt.getLocationOrThrow = pt.getNavigator = pt.getNavigatorOrThrow = pt.getDocument = pt.getDocumentOrThrow = pt.getFromWindowOrThrow = pt.getFromWindow = void 0;
function Ee(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
pt.getFromWindow = Ee;
function Ue(t) {
  const e = Ee(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
pt.getFromWindowOrThrow = Ue;
function Bs() {
  return Ue("document");
}
pt.getDocumentOrThrow = Bs;
function Os() {
  return Ee("document");
}
pt.getDocument = Os;
function xs() {
  return Ue("navigator");
}
pt.getNavigatorOrThrow = xs;
function Ns() {
  return Ee("navigator");
}
pt.getNavigator = Ns;
function Rs() {
  return Ue("location");
}
pt.getLocationOrThrow = Rs;
function Ts() {
  return Ee("location");
}
pt.getLocation = Ts;
function js() {
  return Ue("crypto");
}
pt.getCryptoOrThrow = js;
function Ps() {
  return Ee("crypto");
}
pt.getCrypto = Ps;
function Us() {
  return Ue("localStorage");
}
pt.getLocalStorageOrThrow = Us;
function Is() {
  return Ee("localStorage");
}
pt.getLocalStorage = Is, Object.defineProperty(kn, "__esModule", { value: !0 });
var Po = kn.getWindowMetadata = void 0;
const Yn = pt;
function Ds() {
  let t, e;
  try {
    t = Yn.getDocumentOrThrow(), e = Yn.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const _ = t.getElementsByTagName("link"), O = [];
    for (let T = 0; T < _.length; T++) {
      const N = _[T], P = N.getAttribute("rel");
      if (P && P.toLowerCase().indexOf("icon") > -1) {
        const j = N.getAttribute("href");
        if (j)
          if (j.toLowerCase().indexOf("https:") === -1 && j.toLowerCase().indexOf("http:") === -1 && j.indexOf("//") !== 0) {
            let S = e.protocol + "//" + e.host;
            if (j.indexOf("/") === 0)
              S += j;
            else {
              const k = e.pathname.split("/");
              k.pop();
              const C = k.join("/");
              S += C + "/" + j;
            }
            O.push(S);
          } else if (j.indexOf("//") === 0) {
            const S = e.protocol + j;
            O.push(S);
          } else
            O.push(j);
      }
    }
    return O;
  }
  function n(..._) {
    const O = t.getElementsByTagName("meta");
    for (let T = 0; T < O.length; T++) {
      const N = O[T], P = ["itemprop", "property", "name"].map((j) => N.getAttribute(j)).filter((j) => j ? _.includes(j) : !1);
      if (P.length && P) {
        const j = N.getAttribute("content");
        if (j)
          return j;
      }
    }
    return "";
  }
  function s() {
    let _ = n("name", "og:site_name", "og:title", "twitter:title");
    return _ || (_ = t.title), _;
  }
  function o() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const c = s(), h = o(), y = e.origin, v = r();
  return { description: h, url: y, icons: v, name: c };
}
Po = kn.getWindowMetadata = Ds;
var jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
var Uo = jt.getLocalStorage = Vo = jt.getLocalStorageOrThrow = $o = jt.getCrypto = Yo = jt.getCryptoOrThrow = zo = jt.getLocation = Zo = jt.getLocationOrThrow = qo = jt.getNavigator = Wo = jt.getNavigatorOrThrow = Fo = jt.getDocument = Ho = jt.getDocumentOrThrow = Do = jt.getFromWindowOrThrow = Io = jt.getFromWindow = void 0;
function Ae(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
var Io = jt.getFromWindow = Ae;
function Ie(t) {
  const e = Ae(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
var Do = jt.getFromWindowOrThrow = Ie;
function Hs() {
  return Ie("document");
}
var Ho = jt.getDocumentOrThrow = Hs;
function Fs() {
  return Ae("document");
}
var Fo = jt.getDocument = Fs;
function Ws() {
  return Ie("navigator");
}
var Wo = jt.getNavigatorOrThrow = Ws;
function qs() {
  return Ae("navigator");
}
var qo = jt.getNavigator = qs;
function Zs() {
  return Ie("location");
}
var Zo = jt.getLocationOrThrow = Zs;
function zs() {
  return Ae("location");
}
var zo = jt.getLocation = zs;
function Ys() {
  return Ie("crypto");
}
var Yo = jt.getCryptoOrThrow = Ys;
function $s() {
  return Ae("crypto");
}
var $o = jt.getCrypto = $s;
function Vs() {
  return Ie("localStorage");
}
var Vo = jt.getLocalStorageOrThrow = Vs;
function Js() {
  return Ae("localStorage");
}
Uo = jt.getLocalStorage = Js;
var Ks = function() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var o = arguments[e], c = 0, h = o.length; c < h; c++, s++)
      n[s] = o[c];
  return n;
}, Gs = function() {
  function t(e, r, n) {
    this.name = e, this.version = r, this.os = n, this.type = "browser";
  }
  return t;
}(), Xs = function() {
  function t(e) {
    this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
  }
  return t;
}(), Qs = function() {
  function t(e, r, n, s) {
    this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
  }
  return t;
}(), ta = function() {
  function t() {
    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
  }
  return t;
}(), ea = function() {
  function t() {
    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
  }
  return t;
}(), ra = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, na = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, $n = 3, oa = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FBAV\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["searchbot", ra]], Vn = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
function ia(t) {
  return t ? Jn(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new ea() : typeof navigator < "u" ? Jn(navigator.userAgent) : ua();
}
function sa(t) {
  return t !== "" && oa.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var o = s.exec(t);
    return !!o && [n, o];
  }, !1);
}
function Jn(t) {
  var e = sa(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new ta();
  var s = n[1] && n[1].split(/[._]/).slice(0, 3);
  s ? s.length < $n && (s = Ks(s, ha($n - s.length))) : s = [];
  var o = s.join("."), c = aa(t), h = na.exec(t);
  return h && h[1] ? new Qs(r, o, c, h[1]) : new Gs(r, o, c);
}
function aa(t) {
  for (var e = 0, r = Vn.length; e < r; e++) {
    var n = Vn[e], s = n[0], o = n[1], c = o.exec(t);
    if (c)
      return s;
  }
  return null;
}
function ua() {
  var t = typeof process < "u" && process.version;
  return t ? new Xs(process.version.slice(1)) : null;
}
function ha(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
function Bn(t) {
  return ia(t);
}
function wr() {
  const t = Bn();
  return t && t.os ? t.os : void 0;
}
function Jo() {
  const t = wr();
  return t ? t.toLowerCase().includes("android") : !1;
}
function Ko() {
  const t = wr();
  return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}
function la() {
  return wr() ? Jo() || Ko() : !1;
}
function Go() {
  const t = Bn();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function fa() {
  return !Go() && !!Qo();
}
const Xo = Io, ca = Do, pa = Ho, da = Fo, ma = Wo, Qo = qo, ga = Zo, ya = zo, va = Yo, _a = $o, wa = Vo, br = Uo;
function ba() {
  return Po();
}
function Ma(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Ea(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
const ti = Ma, ei = Ea;
function ri(t, e) {
  const r = ei(e), n = br();
  n && n.setItem(t, r);
}
function Aa(t) {
  let e = null, r = null;
  const n = br();
  return n && (r = n.getItem(t)), e = r && ti(r), e;
}
function La(t) {
  const e = br();
  e && e.removeItem(t);
}
const ni = "WALLETCONNECT_DEEPLINK_CHOICE";
function Ca(t, e) {
  const r = encodeURIComponent(t);
  return e.universalLink ? `${e.universalLink}/wc?uri=${r}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${r}` : "";
}
function Sa(t) {
  const e = t.href.split("?")[0];
  ri(ni, Object.assign(Object.assign({}, t), { href: e }));
}
function oi(t, e) {
  return t.filter((r) => r.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function ka(t, e) {
  let r = t;
  return e && (r = e.map((n) => oi(t, n)).filter(Boolean)), r;
}
const ii = "https://registry.walletconnect.com";
function Ba() {
  return ii + "/api/v2/wallets";
}
function Oa() {
  return ii + "/api/v2/dapps";
}
function si(t, e = "mobile") {
  var r;
  return { name: t.name || "", shortName: t.metadata.shortName || "", color: t.metadata.colors.primary || "", logo: (r = t.image_url.sm) !== null && r !== void 0 ? r : "", universalLink: t[e].universal || "", deepLink: t[e].native || "" };
}
function xa(t, e = "mobile") {
  return Object.values(t).filter((r) => !!r[e].universal || !!r[e].native).map((r) => si(r, e));
}
var Na = Object.freeze({ __proto__: null, detectEnv: Bn, detectOS: wr, isAndroid: Jo, isIOS: Ko, isMobile: la, isNode: Go, isBrowser: fa, getFromWindow: Xo, getFromWindowOrThrow: ca, getDocumentOrThrow: pa, getDocument: da, getNavigatorOrThrow: ma, getNavigator: Qo, getLocationOrThrow: ga, getLocation: ya, getCryptoOrThrow: va, getCrypto: _a, getLocalStorageOrThrow: wa, getLocalStorage: br, getClientMeta: ba, safeJsonParse: ti, safeJsonStringify: ei, setLocal: ri, getLocal: Aa, removeLocal: La, mobileLinkChoiceKey: ni, formatIOSMobile: Ca, saveMobileLinkInfo: Sa, getMobileRegistryEntry: oi, getMobileLinkRegistry: ka, getWalletRegistryUrl: Ba, getDappRegistryUrl: Oa, formatMobileRegistryEntry: si, formatMobileRegistry: xa }), ai = { exports: {} }, Ra = {}, Ta = Object.freeze({ __proto__: null, default: Ra }), ja = _r(Ta);
(function(t) {
  (function(e, r) {
    function n(i, f) {
      if (!i)
        throw new Error(f || "Assertion failed");
    }
    function s(i, f) {
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
    var c;
    try {
      c = ja.Buffer;
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
      var M, E, L = 0;
      if (d === "be")
        for (g = i.length - 1, M = 0; g >= 0; g -= 3)
          E = i[g] | i[g - 1] << 8 | i[g - 2] << 16, this.words[M] |= E << L & 67108863, this.words[M + 1] = E >>> 26 - L & 67108863, L += 24, L >= 26 && (L -= 26, M++);
      else if (d === "le")
        for (g = 0, M = 0; g < i.length; g += 3)
          E = i[g] | i[g + 1] << 8 | i[g + 2] << 16, this.words[M] |= E << L & 67108863, this.words[M + 1] = E >>> 26 - L & 67108863, L += 24, L >= 26 && (L -= 26, M++);
      return this.strip();
    };
    function h(i, f, d) {
      for (var g = 0, M = Math.min(i.length, d), E = f; E < M; E++) {
        var L = i.charCodeAt(E) - 48;
        g <<= 4, L >= 49 && L <= 54 ? g |= L - 49 + 10 : L >= 17 && L <= 22 ? g |= L - 17 + 10 : g |= L & 15;
      }
      return g;
    }
    o.prototype._parseHex = function(i, f) {
      this.length = Math.ceil((i.length - f) / 6), this.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        this.words[d] = 0;
      var g, M, E = 0;
      for (d = i.length - 6, g = 0; d >= f; d -= 6)
        M = h(i, d, d + 6), this.words[g] |= M << E & 67108863, this.words[g + 1] |= M >>> 26 - E & 4194303, E += 24, E >= 26 && (E -= 26, g++);
      d + 6 !== f && (M = h(i, f, d + 6), this.words[g] |= M << E & 67108863, this.words[g + 1] |= M >>> 26 - E & 4194303), this.strip();
    };
    function y(i, f, d, g) {
      for (var M = 0, E = Math.min(i.length, d), L = f; L < E; L++) {
        var w = i.charCodeAt(L) - 48;
        M *= g, w >= 49 ? M += w - 49 + 10 : w >= 17 ? M += w - 17 + 10 : M += w;
      }
      return M;
    }
    o.prototype._parseBase = function(i, f, d) {
      this.words = [0], this.length = 1;
      for (var g = 0, M = 1; M <= 67108863; M *= f)
        g++;
      g--, M = M / f | 0;
      for (var E = i.length - d, L = E % g, w = Math.min(E, E - L) + d, u = 0, b = d; b < w; b += g)
        u = y(i, b, b + g, f), this.imuln(M), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
      if (L !== 0) {
        var H = 1;
        for (u = y(i, b, i.length, f), b = 0; b < L; b++)
          H *= f;
        this.imuln(H), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
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
    var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], _ = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], O = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
    o.prototype.toString = function(i, f) {
      i = i || 10, f = f | 0 || 1;
      var d;
      if (i === 16 || i === "hex") {
        d = "";
        for (var g = 0, M = 0, E = 0; E < this.length; E++) {
          var L = this.words[E], w = ((L << g | M) & 16777215).toString(16);
          M = L >>> 24 - g & 16777215, M !== 0 || E !== this.length - 1 ? d = v[6 - w.length] + w + d : d = w + d, g += 2, g >= 26 && (g -= 26, E--);
        }
        for (M !== 0 && (d = M.toString(16) + d); d.length % f !== 0; )
          d = "0" + d;
        return this.negative !== 0 && (d = "-" + d), d;
      }
      if (i === (i | 0) && i >= 2 && i <= 36) {
        var u = _[i], b = O[i];
        d = "";
        var H = this.clone();
        for (H.negative = 0; !H.isZero(); ) {
          var U = H.modn(b).toString(i);
          H = H.idivn(b), H.isZero() ? d = U + d : d = v[u - U.length] + U + d;
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
      return n(typeof c < "u"), this.toArrayLike(c, i, f);
    }, o.prototype.toArray = function(i, f) {
      return this.toArrayLike(Array, i, f);
    }, o.prototype.toArrayLike = function(i, f, d) {
      var g = this.byteLength(), M = d || Math.max(1, g);
      n(g <= M, "byte array longer than desired length"), n(M > 0, "Requested array length <= 0"), this.strip();
      var E = f === "le", L = new i(M), w, u, b = this.clone();
      if (E) {
        for (u = 0; !b.isZero(); u++)
          w = b.andln(255), b.iushrn(8), L[u] = w;
        for (; u < M; u++)
          L[u] = 0;
      } else {
        for (u = 0; u < M - g; u++)
          L[u] = 0;
        for (u = 0; !b.isZero(); u++)
          w = b.andln(255), b.iushrn(8), L[M - u - 1] = w;
      }
      return L;
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
    function T(i) {
      for (var f = new Array(i.bitLength()), d = 0; d < f.length; d++) {
        var g = d / 26 | 0, M = d % 26;
        f[d] = (i.words[g] & 1 << M) >>> M;
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
      for (var M = 0, E = 0; E < g.length; E++)
        f = (d.words[E] | 0) + (g.words[E] | 0) + M, this.words[E] = f & 67108863, M = f >>> 26;
      for (; M !== 0 && E < d.length; E++)
        f = (d.words[E] | 0) + M, this.words[E] = f & 67108863, M = f >>> 26;
      if (this.length = d.length, M !== 0)
        this.words[this.length] = M, this.length++;
      else if (d !== this)
        for (; E < d.length; E++)
          this.words[E] = d.words[E];
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
      var g, M;
      d > 0 ? (g = this, M = i) : (g = i, M = this);
      for (var E = 0, L = 0; L < M.length; L++)
        f = (g.words[L] | 0) - (M.words[L] | 0) + E, E = f >> 26, this.words[L] = f & 67108863;
      for (; E !== 0 && L < g.length; L++)
        f = (g.words[L] | 0) + E, E = f >> 26, this.words[L] = f & 67108863;
      if (E === 0 && L < g.length && g !== this)
        for (; L < g.length; L++)
          this.words[L] = g.words[L];
      return this.length = Math.max(this.length, L), g !== this && (this.negative = 1), this.strip();
    }, o.prototype.sub = function(i) {
      return this.clone().isub(i);
    };
    function N(i, f, d) {
      d.negative = f.negative ^ i.negative;
      var g = i.length + f.length | 0;
      d.length = g, g = g - 1 | 0;
      var M = i.words[0] | 0, E = f.words[0] | 0, L = M * E, w = L & 67108863, u = L / 67108864 | 0;
      d.words[0] = w;
      for (var b = 1; b < g; b++) {
        for (var H = u >>> 26, U = u & 67108863, F = Math.min(b, f.length - 1), G = Math.max(0, b - i.length + 1); G <= F; G++) {
          var Q = b - G | 0;
          M = i.words[Q] | 0, E = f.words[G] | 0, L = M * E + U, H += L / 67108864 | 0, U = L & 67108863;
        }
        d.words[b] = U | 0, u = H | 0;
      }
      return u !== 0 ? d.words[b] = u | 0 : d.length--, d.strip();
    }
    var P = function(i, f, d) {
      var g = i.words, M = f.words, E = d.words, L = 0, w, u, b, H = g[0] | 0, U = H & 8191, F = H >>> 13, G = g[1] | 0, Q = G & 8191, p = G >>> 13, I = g[2] | 0, R = I & 8191, D = I >>> 13, K = g[3] | 0, z = K & 8191, Z = K >>> 13, X = g[4] | 0, et = X & 8191, V = X >>> 13, ht = g[5] | 0, a = ht & 8191, l = ht >>> 13, m = g[6] | 0, A = m & 8191, x = m >>> 13, q = g[7] | 0, $ = q & 8191, nt = q >>> 13, dt = g[8] | 0, it = dt & 8191, at = dt >>> 13, Pt = g[9] | 0, ft = Pt & 8191, ct = Pt >>> 13, Zt = M[0] | 0, mt = Zt & 8191, gt = Zt >>> 13, pe = M[1] | 0, yt = pe & 8191, vt = pe >>> 13, de = M[2] | 0, _t = de & 8191, wt = de >>> 13, me = M[3] | 0, bt = me & 8191, Mt = me >>> 13, ge = M[4] | 0, Et = ge & 8191, At = ge >>> 13, ye = M[5] | 0, Lt = ye & 8191, Ct = ye >>> 13, ve = M[6] | 0, St = ve & 8191, kt = ve >>> 13, _e = M[7] | 0, Bt = _e & 8191, Ot = _e >>> 13, we = M[8] | 0, xt = we & 8191, Nt = we >>> 13, be = M[9] | 0, Rt = be & 8191, Tt = be >>> 13;
      d.negative = i.negative ^ f.negative, d.length = 19, w = Math.imul(U, mt), u = Math.imul(U, gt), u = u + Math.imul(F, mt) | 0, b = Math.imul(F, gt);
      var Qt = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, w = Math.imul(Q, mt), u = Math.imul(Q, gt), u = u + Math.imul(p, mt) | 0, b = Math.imul(p, gt), w = w + Math.imul(U, yt) | 0, u = u + Math.imul(U, vt) | 0, u = u + Math.imul(F, yt) | 0, b = b + Math.imul(F, vt) | 0;
      var te = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (te >>> 26) | 0, te &= 67108863, w = Math.imul(R, mt), u = Math.imul(R, gt), u = u + Math.imul(D, mt) | 0, b = Math.imul(D, gt), w = w + Math.imul(Q, yt) | 0, u = u + Math.imul(Q, vt) | 0, u = u + Math.imul(p, yt) | 0, b = b + Math.imul(p, vt) | 0, w = w + Math.imul(U, _t) | 0, u = u + Math.imul(U, wt) | 0, u = u + Math.imul(F, _t) | 0, b = b + Math.imul(F, wt) | 0;
      var ee = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, w = Math.imul(z, mt), u = Math.imul(z, gt), u = u + Math.imul(Z, mt) | 0, b = Math.imul(Z, gt), w = w + Math.imul(R, yt) | 0, u = u + Math.imul(R, vt) | 0, u = u + Math.imul(D, yt) | 0, b = b + Math.imul(D, vt) | 0, w = w + Math.imul(Q, _t) | 0, u = u + Math.imul(Q, wt) | 0, u = u + Math.imul(p, _t) | 0, b = b + Math.imul(p, wt) | 0, w = w + Math.imul(U, bt) | 0, u = u + Math.imul(U, Mt) | 0, u = u + Math.imul(F, bt) | 0, b = b + Math.imul(F, Mt) | 0;
      var re = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (re >>> 26) | 0, re &= 67108863, w = Math.imul(et, mt), u = Math.imul(et, gt), u = u + Math.imul(V, mt) | 0, b = Math.imul(V, gt), w = w + Math.imul(z, yt) | 0, u = u + Math.imul(z, vt) | 0, u = u + Math.imul(Z, yt) | 0, b = b + Math.imul(Z, vt) | 0, w = w + Math.imul(R, _t) | 0, u = u + Math.imul(R, wt) | 0, u = u + Math.imul(D, _t) | 0, b = b + Math.imul(D, wt) | 0, w = w + Math.imul(Q, bt) | 0, u = u + Math.imul(Q, Mt) | 0, u = u + Math.imul(p, bt) | 0, b = b + Math.imul(p, Mt) | 0, w = w + Math.imul(U, Et) | 0, u = u + Math.imul(U, At) | 0, u = u + Math.imul(F, Et) | 0, b = b + Math.imul(F, At) | 0;
      var ne = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (ne >>> 26) | 0, ne &= 67108863, w = Math.imul(a, mt), u = Math.imul(a, gt), u = u + Math.imul(l, mt) | 0, b = Math.imul(l, gt), w = w + Math.imul(et, yt) | 0, u = u + Math.imul(et, vt) | 0, u = u + Math.imul(V, yt) | 0, b = b + Math.imul(V, vt) | 0, w = w + Math.imul(z, _t) | 0, u = u + Math.imul(z, wt) | 0, u = u + Math.imul(Z, _t) | 0, b = b + Math.imul(Z, wt) | 0, w = w + Math.imul(R, bt) | 0, u = u + Math.imul(R, Mt) | 0, u = u + Math.imul(D, bt) | 0, b = b + Math.imul(D, Mt) | 0, w = w + Math.imul(Q, Et) | 0, u = u + Math.imul(Q, At) | 0, u = u + Math.imul(p, Et) | 0, b = b + Math.imul(p, At) | 0, w = w + Math.imul(U, Lt) | 0, u = u + Math.imul(U, Ct) | 0, u = u + Math.imul(F, Lt) | 0, b = b + Math.imul(F, Ct) | 0;
      var oe = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (oe >>> 26) | 0, oe &= 67108863, w = Math.imul(A, mt), u = Math.imul(A, gt), u = u + Math.imul(x, mt) | 0, b = Math.imul(x, gt), w = w + Math.imul(a, yt) | 0, u = u + Math.imul(a, vt) | 0, u = u + Math.imul(l, yt) | 0, b = b + Math.imul(l, vt) | 0, w = w + Math.imul(et, _t) | 0, u = u + Math.imul(et, wt) | 0, u = u + Math.imul(V, _t) | 0, b = b + Math.imul(V, wt) | 0, w = w + Math.imul(z, bt) | 0, u = u + Math.imul(z, Mt) | 0, u = u + Math.imul(Z, bt) | 0, b = b + Math.imul(Z, Mt) | 0, w = w + Math.imul(R, Et) | 0, u = u + Math.imul(R, At) | 0, u = u + Math.imul(D, Et) | 0, b = b + Math.imul(D, At) | 0, w = w + Math.imul(Q, Lt) | 0, u = u + Math.imul(Q, Ct) | 0, u = u + Math.imul(p, Lt) | 0, b = b + Math.imul(p, Ct) | 0, w = w + Math.imul(U, St) | 0, u = u + Math.imul(U, kt) | 0, u = u + Math.imul(F, St) | 0, b = b + Math.imul(F, kt) | 0;
      var ie = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (ie >>> 26) | 0, ie &= 67108863, w = Math.imul($, mt), u = Math.imul($, gt), u = u + Math.imul(nt, mt) | 0, b = Math.imul(nt, gt), w = w + Math.imul(A, yt) | 0, u = u + Math.imul(A, vt) | 0, u = u + Math.imul(x, yt) | 0, b = b + Math.imul(x, vt) | 0, w = w + Math.imul(a, _t) | 0, u = u + Math.imul(a, wt) | 0, u = u + Math.imul(l, _t) | 0, b = b + Math.imul(l, wt) | 0, w = w + Math.imul(et, bt) | 0, u = u + Math.imul(et, Mt) | 0, u = u + Math.imul(V, bt) | 0, b = b + Math.imul(V, Mt) | 0, w = w + Math.imul(z, Et) | 0, u = u + Math.imul(z, At) | 0, u = u + Math.imul(Z, Et) | 0, b = b + Math.imul(Z, At) | 0, w = w + Math.imul(R, Lt) | 0, u = u + Math.imul(R, Ct) | 0, u = u + Math.imul(D, Lt) | 0, b = b + Math.imul(D, Ct) | 0, w = w + Math.imul(Q, St) | 0, u = u + Math.imul(Q, kt) | 0, u = u + Math.imul(p, St) | 0, b = b + Math.imul(p, kt) | 0, w = w + Math.imul(U, Bt) | 0, u = u + Math.imul(U, Ot) | 0, u = u + Math.imul(F, Bt) | 0, b = b + Math.imul(F, Ot) | 0;
      var se = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (se >>> 26) | 0, se &= 67108863, w = Math.imul(it, mt), u = Math.imul(it, gt), u = u + Math.imul(at, mt) | 0, b = Math.imul(at, gt), w = w + Math.imul($, yt) | 0, u = u + Math.imul($, vt) | 0, u = u + Math.imul(nt, yt) | 0, b = b + Math.imul(nt, vt) | 0, w = w + Math.imul(A, _t) | 0, u = u + Math.imul(A, wt) | 0, u = u + Math.imul(x, _t) | 0, b = b + Math.imul(x, wt) | 0, w = w + Math.imul(a, bt) | 0, u = u + Math.imul(a, Mt) | 0, u = u + Math.imul(l, bt) | 0, b = b + Math.imul(l, Mt) | 0, w = w + Math.imul(et, Et) | 0, u = u + Math.imul(et, At) | 0, u = u + Math.imul(V, Et) | 0, b = b + Math.imul(V, At) | 0, w = w + Math.imul(z, Lt) | 0, u = u + Math.imul(z, Ct) | 0, u = u + Math.imul(Z, Lt) | 0, b = b + Math.imul(Z, Ct) | 0, w = w + Math.imul(R, St) | 0, u = u + Math.imul(R, kt) | 0, u = u + Math.imul(D, St) | 0, b = b + Math.imul(D, kt) | 0, w = w + Math.imul(Q, Bt) | 0, u = u + Math.imul(Q, Ot) | 0, u = u + Math.imul(p, Bt) | 0, b = b + Math.imul(p, Ot) | 0, w = w + Math.imul(U, xt) | 0, u = u + Math.imul(U, Nt) | 0, u = u + Math.imul(F, xt) | 0, b = b + Math.imul(F, Nt) | 0;
      var ae = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (ae >>> 26) | 0, ae &= 67108863, w = Math.imul(ft, mt), u = Math.imul(ft, gt), u = u + Math.imul(ct, mt) | 0, b = Math.imul(ct, gt), w = w + Math.imul(it, yt) | 0, u = u + Math.imul(it, vt) | 0, u = u + Math.imul(at, yt) | 0, b = b + Math.imul(at, vt) | 0, w = w + Math.imul($, _t) | 0, u = u + Math.imul($, wt) | 0, u = u + Math.imul(nt, _t) | 0, b = b + Math.imul(nt, wt) | 0, w = w + Math.imul(A, bt) | 0, u = u + Math.imul(A, Mt) | 0, u = u + Math.imul(x, bt) | 0, b = b + Math.imul(x, Mt) | 0, w = w + Math.imul(a, Et) | 0, u = u + Math.imul(a, At) | 0, u = u + Math.imul(l, Et) | 0, b = b + Math.imul(l, At) | 0, w = w + Math.imul(et, Lt) | 0, u = u + Math.imul(et, Ct) | 0, u = u + Math.imul(V, Lt) | 0, b = b + Math.imul(V, Ct) | 0, w = w + Math.imul(z, St) | 0, u = u + Math.imul(z, kt) | 0, u = u + Math.imul(Z, St) | 0, b = b + Math.imul(Z, kt) | 0, w = w + Math.imul(R, Bt) | 0, u = u + Math.imul(R, Ot) | 0, u = u + Math.imul(D, Bt) | 0, b = b + Math.imul(D, Ot) | 0, w = w + Math.imul(Q, xt) | 0, u = u + Math.imul(Q, Nt) | 0, u = u + Math.imul(p, xt) | 0, b = b + Math.imul(p, Nt) | 0, w = w + Math.imul(U, Rt) | 0, u = u + Math.imul(U, Tt) | 0, u = u + Math.imul(F, Rt) | 0, b = b + Math.imul(F, Tt) | 0;
      var kr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (kr >>> 26) | 0, kr &= 67108863, w = Math.imul(ft, yt), u = Math.imul(ft, vt), u = u + Math.imul(ct, yt) | 0, b = Math.imul(ct, vt), w = w + Math.imul(it, _t) | 0, u = u + Math.imul(it, wt) | 0, u = u + Math.imul(at, _t) | 0, b = b + Math.imul(at, wt) | 0, w = w + Math.imul($, bt) | 0, u = u + Math.imul($, Mt) | 0, u = u + Math.imul(nt, bt) | 0, b = b + Math.imul(nt, Mt) | 0, w = w + Math.imul(A, Et) | 0, u = u + Math.imul(A, At) | 0, u = u + Math.imul(x, Et) | 0, b = b + Math.imul(x, At) | 0, w = w + Math.imul(a, Lt) | 0, u = u + Math.imul(a, Ct) | 0, u = u + Math.imul(l, Lt) | 0, b = b + Math.imul(l, Ct) | 0, w = w + Math.imul(et, St) | 0, u = u + Math.imul(et, kt) | 0, u = u + Math.imul(V, St) | 0, b = b + Math.imul(V, kt) | 0, w = w + Math.imul(z, Bt) | 0, u = u + Math.imul(z, Ot) | 0, u = u + Math.imul(Z, Bt) | 0, b = b + Math.imul(Z, Ot) | 0, w = w + Math.imul(R, xt) | 0, u = u + Math.imul(R, Nt) | 0, u = u + Math.imul(D, xt) | 0, b = b + Math.imul(D, Nt) | 0, w = w + Math.imul(Q, Rt) | 0, u = u + Math.imul(Q, Tt) | 0, u = u + Math.imul(p, Rt) | 0, b = b + Math.imul(p, Tt) | 0;
      var Br = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Br >>> 26) | 0, Br &= 67108863, w = Math.imul(ft, _t), u = Math.imul(ft, wt), u = u + Math.imul(ct, _t) | 0, b = Math.imul(ct, wt), w = w + Math.imul(it, bt) | 0, u = u + Math.imul(it, Mt) | 0, u = u + Math.imul(at, bt) | 0, b = b + Math.imul(at, Mt) | 0, w = w + Math.imul($, Et) | 0, u = u + Math.imul($, At) | 0, u = u + Math.imul(nt, Et) | 0, b = b + Math.imul(nt, At) | 0, w = w + Math.imul(A, Lt) | 0, u = u + Math.imul(A, Ct) | 0, u = u + Math.imul(x, Lt) | 0, b = b + Math.imul(x, Ct) | 0, w = w + Math.imul(a, St) | 0, u = u + Math.imul(a, kt) | 0, u = u + Math.imul(l, St) | 0, b = b + Math.imul(l, kt) | 0, w = w + Math.imul(et, Bt) | 0, u = u + Math.imul(et, Ot) | 0, u = u + Math.imul(V, Bt) | 0, b = b + Math.imul(V, Ot) | 0, w = w + Math.imul(z, xt) | 0, u = u + Math.imul(z, Nt) | 0, u = u + Math.imul(Z, xt) | 0, b = b + Math.imul(Z, Nt) | 0, w = w + Math.imul(R, Rt) | 0, u = u + Math.imul(R, Tt) | 0, u = u + Math.imul(D, Rt) | 0, b = b + Math.imul(D, Tt) | 0;
      var Or = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Or >>> 26) | 0, Or &= 67108863, w = Math.imul(ft, bt), u = Math.imul(ft, Mt), u = u + Math.imul(ct, bt) | 0, b = Math.imul(ct, Mt), w = w + Math.imul(it, Et) | 0, u = u + Math.imul(it, At) | 0, u = u + Math.imul(at, Et) | 0, b = b + Math.imul(at, At) | 0, w = w + Math.imul($, Lt) | 0, u = u + Math.imul($, Ct) | 0, u = u + Math.imul(nt, Lt) | 0, b = b + Math.imul(nt, Ct) | 0, w = w + Math.imul(A, St) | 0, u = u + Math.imul(A, kt) | 0, u = u + Math.imul(x, St) | 0, b = b + Math.imul(x, kt) | 0, w = w + Math.imul(a, Bt) | 0, u = u + Math.imul(a, Ot) | 0, u = u + Math.imul(l, Bt) | 0, b = b + Math.imul(l, Ot) | 0, w = w + Math.imul(et, xt) | 0, u = u + Math.imul(et, Nt) | 0, u = u + Math.imul(V, xt) | 0, b = b + Math.imul(V, Nt) | 0, w = w + Math.imul(z, Rt) | 0, u = u + Math.imul(z, Tt) | 0, u = u + Math.imul(Z, Rt) | 0, b = b + Math.imul(Z, Tt) | 0;
      var xr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (xr >>> 26) | 0, xr &= 67108863, w = Math.imul(ft, Et), u = Math.imul(ft, At), u = u + Math.imul(ct, Et) | 0, b = Math.imul(ct, At), w = w + Math.imul(it, Lt) | 0, u = u + Math.imul(it, Ct) | 0, u = u + Math.imul(at, Lt) | 0, b = b + Math.imul(at, Ct) | 0, w = w + Math.imul($, St) | 0, u = u + Math.imul($, kt) | 0, u = u + Math.imul(nt, St) | 0, b = b + Math.imul(nt, kt) | 0, w = w + Math.imul(A, Bt) | 0, u = u + Math.imul(A, Ot) | 0, u = u + Math.imul(x, Bt) | 0, b = b + Math.imul(x, Ot) | 0, w = w + Math.imul(a, xt) | 0, u = u + Math.imul(a, Nt) | 0, u = u + Math.imul(l, xt) | 0, b = b + Math.imul(l, Nt) | 0, w = w + Math.imul(et, Rt) | 0, u = u + Math.imul(et, Tt) | 0, u = u + Math.imul(V, Rt) | 0, b = b + Math.imul(V, Tt) | 0;
      var Nr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Nr >>> 26) | 0, Nr &= 67108863, w = Math.imul(ft, Lt), u = Math.imul(ft, Ct), u = u + Math.imul(ct, Lt) | 0, b = Math.imul(ct, Ct), w = w + Math.imul(it, St) | 0, u = u + Math.imul(it, kt) | 0, u = u + Math.imul(at, St) | 0, b = b + Math.imul(at, kt) | 0, w = w + Math.imul($, Bt) | 0, u = u + Math.imul($, Ot) | 0, u = u + Math.imul(nt, Bt) | 0, b = b + Math.imul(nt, Ot) | 0, w = w + Math.imul(A, xt) | 0, u = u + Math.imul(A, Nt) | 0, u = u + Math.imul(x, xt) | 0, b = b + Math.imul(x, Nt) | 0, w = w + Math.imul(a, Rt) | 0, u = u + Math.imul(a, Tt) | 0, u = u + Math.imul(l, Rt) | 0, b = b + Math.imul(l, Tt) | 0;
      var Rr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Rr >>> 26) | 0, Rr &= 67108863, w = Math.imul(ft, St), u = Math.imul(ft, kt), u = u + Math.imul(ct, St) | 0, b = Math.imul(ct, kt), w = w + Math.imul(it, Bt) | 0, u = u + Math.imul(it, Ot) | 0, u = u + Math.imul(at, Bt) | 0, b = b + Math.imul(at, Ot) | 0, w = w + Math.imul($, xt) | 0, u = u + Math.imul($, Nt) | 0, u = u + Math.imul(nt, xt) | 0, b = b + Math.imul(nt, Nt) | 0, w = w + Math.imul(A, Rt) | 0, u = u + Math.imul(A, Tt) | 0, u = u + Math.imul(x, Rt) | 0, b = b + Math.imul(x, Tt) | 0;
      var Tr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Tr >>> 26) | 0, Tr &= 67108863, w = Math.imul(ft, Bt), u = Math.imul(ft, Ot), u = u + Math.imul(ct, Bt) | 0, b = Math.imul(ct, Ot), w = w + Math.imul(it, xt) | 0, u = u + Math.imul(it, Nt) | 0, u = u + Math.imul(at, xt) | 0, b = b + Math.imul(at, Nt) | 0, w = w + Math.imul($, Rt) | 0, u = u + Math.imul($, Tt) | 0, u = u + Math.imul(nt, Rt) | 0, b = b + Math.imul(nt, Tt) | 0;
      var jr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (jr >>> 26) | 0, jr &= 67108863, w = Math.imul(ft, xt), u = Math.imul(ft, Nt), u = u + Math.imul(ct, xt) | 0, b = Math.imul(ct, Nt), w = w + Math.imul(it, Rt) | 0, u = u + Math.imul(it, Tt) | 0, u = u + Math.imul(at, Rt) | 0, b = b + Math.imul(at, Tt) | 0;
      var Pr = (L + w | 0) + ((u & 8191) << 13) | 0;
      L = (b + (u >>> 13) | 0) + (Pr >>> 26) | 0, Pr &= 67108863, w = Math.imul(ft, Rt), u = Math.imul(ft, Tt), u = u + Math.imul(ct, Rt) | 0, b = Math.imul(ct, Tt);
      var Ur = (L + w | 0) + ((u & 8191) << 13) | 0;
      return L = (b + (u >>> 13) | 0) + (Ur >>> 26) | 0, Ur &= 67108863, E[0] = Qt, E[1] = te, E[2] = ee, E[3] = re, E[4] = ne, E[5] = oe, E[6] = ie, E[7] = se, E[8] = ae, E[9] = kr, E[10] = Br, E[11] = Or, E[12] = xr, E[13] = Nr, E[14] = Rr, E[15] = Tr, E[16] = jr, E[17] = Pr, E[18] = Ur, L !== 0 && (E[19] = L, d.length++), d;
    };
    Math.imul || (P = N);
    function j(i, f, d) {
      d.negative = f.negative ^ i.negative, d.length = i.length + f.length;
      for (var g = 0, M = 0, E = 0; E < d.length - 1; E++) {
        var L = M;
        M = 0;
        for (var w = g & 67108863, u = Math.min(E, f.length - 1), b = Math.max(0, E - i.length + 1); b <= u; b++) {
          var H = E - b, U = i.words[H] | 0, F = f.words[b] | 0, G = U * F, Q = G & 67108863;
          L = L + (G / 67108864 | 0) | 0, Q = Q + w | 0, w = Q & 67108863, L = L + (Q >>> 26) | 0, M += L >>> 26, L &= 67108863;
        }
        d.words[E] = w, g = L, L = M;
      }
      return g !== 0 ? d.words[E] = g : d.length--, d.strip();
    }
    function S(i, f, d) {
      var g = new k();
      return g.mulp(i, f, d);
    }
    o.prototype.mulTo = function(i, f) {
      var d, g = this.length + i.length;
      return this.length === 10 && i.length === 10 ? d = P(this, i, f) : g < 63 ? d = N(this, i, f) : g < 1024 ? d = j(this, i, f) : d = S(this, i, f), d;
    };
    function k(i, f) {
      this.x = i, this.y = f;
    }
    k.prototype.makeRBT = function(i) {
      for (var f = new Array(i), d = o.prototype._countBits(i) - 1, g = 0; g < i; g++)
        f[g] = this.revBin(g, d, i);
      return f;
    }, k.prototype.revBin = function(i, f, d) {
      if (i === 0 || i === d - 1)
        return i;
      for (var g = 0, M = 0; M < f; M++)
        g |= (i & 1) << f - M - 1, i >>= 1;
      return g;
    }, k.prototype.permute = function(i, f, d, g, M, E) {
      for (var L = 0; L < E; L++)
        g[L] = f[i[L]], M[L] = d[i[L]];
    }, k.prototype.transform = function(i, f, d, g, M, E) {
      this.permute(E, i, f, d, g, M);
      for (var L = 1; L < M; L <<= 1)
        for (var w = L << 1, u = Math.cos(2 * Math.PI / w), b = Math.sin(2 * Math.PI / w), H = 0; H < M; H += w)
          for (var U = u, F = b, G = 0; G < L; G++) {
            var Q = d[H + G], p = g[H + G], I = d[H + G + L], R = g[H + G + L], D = U * I - F * R;
            R = U * R + F * I, I = D, d[H + G] = Q + I, g[H + G] = p + R, d[H + G + L] = Q - I, g[H + G + L] = p - R, G !== w && (D = u * U - b * F, F = u * F + b * U, U = D);
          }
    }, k.prototype.guessLen13b = function(i, f) {
      var d = Math.max(f, i) | 1, g = d & 1, M = 0;
      for (d = d / 2 | 0; d; d = d >>> 1)
        M++;
      return 1 << M + 1 + g;
    }, k.prototype.conjugate = function(i, f, d) {
      if (!(d <= 1))
        for (var g = 0; g < d / 2; g++) {
          var M = i[g];
          i[g] = i[d - g - 1], i[d - g - 1] = M, M = f[g], f[g] = -f[d - g - 1], f[d - g - 1] = -M;
        }
    }, k.prototype.normalize13b = function(i, f) {
      for (var d = 0, g = 0; g < f / 2; g++) {
        var M = Math.round(i[2 * g + 1] / f) * 8192 + Math.round(i[2 * g] / f) + d;
        i[g] = M & 67108863, M < 67108864 ? d = 0 : d = M / 67108864 | 0;
      }
      return i;
    }, k.prototype.convert13b = function(i, f, d, g) {
      for (var M = 0, E = 0; E < f; E++)
        M = M + (i[E] | 0), d[2 * E] = M & 8191, M = M >>> 13, d[2 * E + 1] = M & 8191, M = M >>> 13;
      for (E = 2 * f; E < g; ++E)
        d[E] = 0;
      n(M === 0), n((M & -8192) === 0);
    }, k.prototype.stub = function(i) {
      for (var f = new Array(i), d = 0; d < i; d++)
        f[d] = 0;
      return f;
    }, k.prototype.mulp = function(i, f, d) {
      var g = 2 * this.guessLen13b(i.length, f.length), M = this.makeRBT(g), E = this.stub(g), L = new Array(g), w = new Array(g), u = new Array(g), b = new Array(g), H = new Array(g), U = new Array(g), F = d.words;
      F.length = g, this.convert13b(i.words, i.length, L, g), this.convert13b(f.words, f.length, b, g), this.transform(L, E, w, u, g, M), this.transform(b, E, H, U, g, M);
      for (var G = 0; G < g; G++) {
        var Q = w[G] * H[G] - u[G] * U[G];
        u[G] = w[G] * U[G] + u[G] * H[G], w[G] = Q;
      }
      return this.conjugate(w, u, g), this.transform(w, u, F, E, g, M), this.conjugate(F, E, g), this.normalize13b(F, g), d.negative = i.negative ^ f.negative, d.length = i.length + f.length, d.strip();
    }, o.prototype.mul = function(i) {
      var f = new o(null);
      return f.words = new Array(this.length + i.length), this.mulTo(i, f);
    }, o.prototype.mulf = function(i) {
      var f = new o(null);
      return f.words = new Array(this.length + i.length), S(this, i, f);
    }, o.prototype.imul = function(i) {
      return this.clone().mulTo(i, this);
    }, o.prototype.imuln = function(i) {
      n(typeof i == "number"), n(i < 67108864);
      for (var f = 0, d = 0; d < this.length; d++) {
        var g = (this.words[d] | 0) * i, M = (g & 67108863) + (f & 67108863);
        f >>= 26, f += g / 67108864 | 0, f += M >>> 26, this.words[d] = M & 67108863;
      }
      return f !== 0 && (this.words[d] = f, this.length++), this;
    }, o.prototype.muln = function(i) {
      return this.clone().imuln(i);
    }, o.prototype.sqr = function() {
      return this.mul(this);
    }, o.prototype.isqr = function() {
      return this.imul(this.clone());
    }, o.prototype.pow = function(i) {
      var f = T(i);
      if (f.length === 0)
        return new o(1);
      for (var d = this, g = 0; g < f.length && f[g] === 0; g++, d = d.sqr())
        ;
      if (++g < f.length)
        for (var M = d.sqr(); g < f.length; g++, M = M.sqr())
          f[g] !== 0 && (d = d.mul(M));
      return d;
    }, o.prototype.iushln = function(i) {
      n(typeof i == "number" && i >= 0);
      var f = i % 26, d = (i - f) / 26, g = 67108863 >>> 26 - f << 26 - f, M;
      if (f !== 0) {
        var E = 0;
        for (M = 0; M < this.length; M++) {
          var L = this.words[M] & g, w = (this.words[M] | 0) - L << f;
          this.words[M] = w | E, E = L >>> 26 - f;
        }
        E && (this.words[M] = E, this.length++);
      }
      if (d !== 0) {
        for (M = this.length - 1; M >= 0; M--)
          this.words[M + d] = this.words[M];
        for (M = 0; M < d; M++)
          this.words[M] = 0;
        this.length += d;
      }
      return this.strip();
    }, o.prototype.ishln = function(i) {
      return n(this.negative === 0), this.iushln(i);
    }, o.prototype.iushrn = function(i, f, d) {
      n(typeof i == "number" && i >= 0);
      var g;
      f ? g = (f - f % 26) / 26 : g = 0;
      var M = i % 26, E = Math.min((i - M) / 26, this.length), L = 67108863 ^ 67108863 >>> M << M, w = d;
      if (g -= E, g = Math.max(0, g), w) {
        for (var u = 0; u < E; u++)
          w.words[u] = this.words[u];
        w.length = E;
      }
      if (E !== 0)
        if (this.length > E)
          for (this.length -= E, u = 0; u < this.length; u++)
            this.words[u] = this.words[u + E];
        else
          this.words[0] = 0, this.length = 1;
      var b = 0;
      for (u = this.length - 1; u >= 0 && (b !== 0 || u >= g); u--) {
        var H = this.words[u] | 0;
        this.words[u] = b << 26 - M | H >>> M, b = H & L;
      }
      return w && b !== 0 && (w.words[w.length++] = b), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
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
      var M = this.words[d];
      return !!(M & g);
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
      var g = i.length + d, M;
      this._expand(g);
      var E, L = 0;
      for (M = 0; M < i.length; M++) {
        E = (this.words[M + d] | 0) + L;
        var w = (i.words[M] | 0) * f;
        E -= w & 67108863, L = (E >> 26) - (w / 67108864 | 0), this.words[M + d] = E & 67108863;
      }
      for (; M < this.length - d; M++)
        E = (this.words[M + d] | 0) + L, L = E >> 26, this.words[M + d] = E & 67108863;
      if (L === 0)
        return this.strip();
      for (n(L === -1), L = 0, M = 0; M < this.length; M++)
        E = -(this.words[M] | 0) + L, L = E >> 26, this.words[M] = E & 67108863;
      return this.negative = 1, this.strip();
    }, o.prototype._wordDiv = function(i, f) {
      var d = this.length - i.length, g = this.clone(), M = i, E = M.words[M.length - 1] | 0, L = this._countBits(E);
      d = 26 - L, d !== 0 && (M = M.ushln(d), g.iushln(d), E = M.words[M.length - 1] | 0);
      var w = g.length - M.length, u;
      if (f !== "mod") {
        u = new o(null), u.length = w + 1, u.words = new Array(u.length);
        for (var b = 0; b < u.length; b++)
          u.words[b] = 0;
      }
      var H = g.clone()._ishlnsubmul(M, 1, w);
      H.negative === 0 && (g = H, u && (u.words[w] = 1));
      for (var U = w - 1; U >= 0; U--) {
        var F = (g.words[M.length + U] | 0) * 67108864 + (g.words[M.length + U - 1] | 0);
        for (F = Math.min(F / E | 0, 67108863), g._ishlnsubmul(M, F, U); g.negative !== 0; )
          F--, g.negative = 0, g._ishlnsubmul(M, 1, U), g.isZero() || (g.negative ^= 1);
        u && (u.words[U] = F);
      }
      return u && u.strip(), g.strip(), f !== "div" && d !== 0 && g.iushrn(d), { div: u || null, mod: g };
    }, o.prototype.divmod = function(i, f, d) {
      if (n(!i.isZero()), this.isZero())
        return { div: new o(0), mod: new o(0) };
      var g, M, E;
      return this.negative !== 0 && i.negative === 0 ? (E = this.neg().divmod(i, f), f !== "mod" && (g = E.div.neg()), f !== "div" && (M = E.mod.neg(), d && M.negative !== 0 && M.iadd(i)), { div: g, mod: M }) : this.negative === 0 && i.negative !== 0 ? (E = this.divmod(i.neg(), f), f !== "mod" && (g = E.div.neg()), { div: g, mod: E.mod }) : (this.negative & i.negative) !== 0 ? (E = this.neg().divmod(i.neg(), f), f !== "div" && (M = E.mod.neg(), d && M.negative !== 0 && M.isub(i)), { div: E.div, mod: M }) : i.length > this.length || this.cmp(i) < 0 ? { div: new o(0), mod: this } : i.length === 1 ? f === "div" ? { div: this.divn(i.words[0]), mod: null } : f === "mod" ? { div: null, mod: new o(this.modn(i.words[0])) } : { div: this.divn(i.words[0]), mod: new o(this.modn(i.words[0])) } : this._wordDiv(i, f);
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
      var d = f.div.negative !== 0 ? f.mod.isub(i) : f.mod, g = i.ushrn(1), M = i.andln(1), E = d.cmp(g);
      return E < 0 || M === 1 && E === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1);
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
      for (var g = new o(1), M = new o(0), E = new o(0), L = new o(1), w = 0; f.isEven() && d.isEven(); )
        f.iushrn(1), d.iushrn(1), ++w;
      for (var u = d.clone(), b = f.clone(); !f.isZero(); ) {
        for (var H = 0, U = 1; (f.words[0] & U) === 0 && H < 26; ++H, U <<= 1)
          ;
        if (H > 0)
          for (f.iushrn(H); H-- > 0; )
            (g.isOdd() || M.isOdd()) && (g.iadd(u), M.isub(b)), g.iushrn(1), M.iushrn(1);
        for (var F = 0, G = 1; (d.words[0] & G) === 0 && F < 26; ++F, G <<= 1)
          ;
        if (F > 0)
          for (d.iushrn(F); F-- > 0; )
            (E.isOdd() || L.isOdd()) && (E.iadd(u), L.isub(b)), E.iushrn(1), L.iushrn(1);
        f.cmp(d) >= 0 ? (f.isub(d), g.isub(E), M.isub(L)) : (d.isub(f), E.isub(g), L.isub(M));
      }
      return { a: E, b: L, gcd: d.iushln(w) };
    }, o.prototype._invmp = function(i) {
      n(i.negative === 0), n(!i.isZero());
      var f = this, d = i.clone();
      f.negative !== 0 ? f = f.umod(i) : f = f.clone();
      for (var g = new o(1), M = new o(0), E = d.clone(); f.cmpn(1) > 0 && d.cmpn(1) > 0; ) {
        for (var L = 0, w = 1; (f.words[0] & w) === 0 && L < 26; ++L, w <<= 1)
          ;
        if (L > 0)
          for (f.iushrn(L); L-- > 0; )
            g.isOdd() && g.iadd(E), g.iushrn(1);
        for (var u = 0, b = 1; (d.words[0] & b) === 0 && u < 26; ++u, b <<= 1)
          ;
        if (u > 0)
          for (d.iushrn(u); u-- > 0; )
            M.isOdd() && M.iadd(E), M.iushrn(1);
        f.cmp(d) >= 0 ? (f.isub(d), g.isub(M)) : (d.isub(f), M.isub(g));
      }
      var H;
      return f.cmpn(1) === 0 ? H = g : H = M, H.cmpn(0) < 0 && H.iadd(i), H;
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
        var M = f.cmp(d);
        if (M < 0) {
          var E = f;
          f = d, d = E;
        } else if (M === 0 || d.cmpn(1) === 0)
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
      for (var M = g, E = d; M !== 0 && E < this.length; E++) {
        var L = this.words[E] | 0;
        L += M, M = L >>> 26, L &= 67108863, this.words[E] = L;
      }
      return M !== 0 && (this.words[E] = M, this.length++), this;
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
        var g = this.words[d] | 0, M = i.words[d] | 0;
        if (g !== M) {
          g < M ? f = -1 : g > M && (f = 1);
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
    var C = { k256: null, p224: null, p192: null, p25519: null };
    function B(i, f) {
      this.name = i, this.p = new o(f, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    B.prototype._tmp = function() {
      var i = new o(null);
      return i.words = new Array(Math.ceil(this.n / 13)), i;
    }, B.prototype.ireduce = function(i) {
      var f = i, d;
      do
        this.split(f, this.tmp), f = this.imulK(f), f = f.iadd(this.tmp), d = f.bitLength();
      while (d > this.n);
      var g = d < this.n ? -1 : f.ucmp(this.p);
      return g === 0 ? (f.words[0] = 0, f.length = 1) : g > 0 ? f.isub(this.p) : f.strip(), f;
    }, B.prototype.split = function(i, f) {
      i.iushrn(this.n, 0, f);
    }, B.prototype.imulK = function(i) {
      return i.imul(this.k);
    };
    function W() {
      B.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }
    s(W, B), W.prototype.split = function(i, f) {
      for (var d = 4194303, g = Math.min(i.length, 9), M = 0; M < g; M++)
        f.words[M] = i.words[M];
      if (f.length = g, i.length <= 9) {
        i.words[0] = 0, i.length = 1;
        return;
      }
      var E = i.words[9];
      for (f.words[f.length++] = E & d, M = 10; M < i.length; M++) {
        var L = i.words[M] | 0;
        i.words[M - 10] = (L & d) << 4 | E >>> 22, E = L;
      }
      E >>>= 22, i.words[M - 10] = E, E === 0 && i.length > 10 ? i.length -= 10 : i.length -= 9;
    }, W.prototype.imulK = function(i) {
      i.words[i.length] = 0, i.words[i.length + 1] = 0, i.length += 2;
      for (var f = 0, d = 0; d < i.length; d++) {
        var g = i.words[d] | 0;
        f += g * 977, i.words[d] = f & 67108863, f = g * 64 + (f / 67108864 | 0);
      }
      return i.words[i.length - 1] === 0 && (i.length--, i.words[i.length - 1] === 0 && i.length--), i;
    };
    function Y() {
      B.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }
    s(Y, B);
    function J() {
      B.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }
    s(J, B);
    function ot() {
      B.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }
    s(ot, B), ot.prototype.imulK = function(i) {
      for (var f = 0, d = 0; d < i.length; d++) {
        var g = (i.words[d] | 0) * 19 + f, M = g & 67108863;
        g >>>= 26, i.words[d] = M, f = g;
      }
      return f !== 0 && (i.words[i.length++] = f), i;
    }, o._prime = function(i) {
      if (C[i])
        return C[i];
      var f;
      if (i === "k256")
        f = new W();
      else if (i === "p224")
        f = new Y();
      else if (i === "p192")
        f = new J();
      else if (i === "p25519")
        f = new ot();
      else
        throw new Error("Unknown prime " + i);
      return C[i] = f, f;
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
      for (var g = this.m.subn(1), M = 0; !g.isZero() && g.andln(1) === 0; )
        M++, g.iushrn(1);
      n(!g.isZero());
      var E = new o(1).toRed(this), L = E.redNeg(), w = this.m.subn(1).iushrn(1), u = this.m.bitLength();
      for (u = new o(2 * u * u).toRed(this); this.pow(u, w).cmp(L) !== 0; )
        u.redIAdd(L);
      for (var b = this.pow(u, g), H = this.pow(i, g.addn(1).iushrn(1)), U = this.pow(i, g), F = M; U.cmp(E) !== 0; ) {
        for (var G = U, Q = 0; G.cmp(E) !== 0; Q++)
          G = G.redSqr();
        n(Q < F);
        var p = this.pow(b, new o(1).iushln(F - Q - 1));
        H = H.redMul(p), b = p.redSqr(), U = U.redMul(b), F = Q;
      }
      return H;
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
      for (var M = 2; M < g.length; M++)
        g[M] = this.mul(g[M - 1], i);
      var E = g[0], L = 0, w = 0, u = f.bitLength() % 26;
      for (u === 0 && (u = 26), M = f.length - 1; M >= 0; M--) {
        for (var b = f.words[M], H = u - 1; H >= 0; H--) {
          var U = b >> H & 1;
          if (E !== g[0] && (E = this.sqr(E)), U === 0 && L === 0) {
            w = 0;
            continue;
          }
          L <<= 1, L |= U, w++, !(w !== d && (M !== 0 || H !== 0)) && (E = this.mul(E, g[L]), w = 0, L = 0);
        }
        u = 26;
      }
      return E;
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
    s(lt, tt), lt.prototype.convertTo = function(i) {
      return this.imod(i.ushln(this.shift));
    }, lt.prototype.convertFrom = function(i) {
      var f = this.imod(i.mul(this.rinv));
      return f.red = null, f;
    }, lt.prototype.imul = function(i, f) {
      if (i.isZero() || f.isZero())
        return i.words[0] = 0, i.length = 1, i;
      var d = i.imul(f), g = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = d.isub(g).iushrn(this.shift), E = M;
      return M.cmp(this.m) >= 0 ? E = M.isub(this.m) : M.cmpn(0) < 0 && (E = M.iadd(this.m)), E._forceRed(this);
    }, lt.prototype.mul = function(i, f) {
      if (i.isZero() || f.isZero())
        return new o(0)._forceRed(this);
      var d = i.mul(f), g = d.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), M = d.isub(g).iushrn(this.shift), E = M;
      return M.cmp(this.m) >= 0 ? E = M.isub(this.m) : M.cmpn(0) < 0 && (E = M.iadd(this.m)), E._forceRed(this);
    }, lt.prototype.invm = function(i) {
      var f = this.imod(i._invmp(this.m).mul(this.r2));
      return f._forceRed(this);
    };
  })(t, Ut);
})(ai);
ai.exports;
var Pa = Xr;
Xr.strict = ui, Xr.loose = hi;
var Ua = Object.prototype.toString, Ia = { "[object Int8Array]": !0, "[object Int16Array]": !0, "[object Int32Array]": !0, "[object Uint8Array]": !0, "[object Uint8ClampedArray]": !0, "[object Uint16Array]": !0, "[object Uint32Array]": !0, "[object Float32Array]": !0, "[object Float64Array]": !0 };
function Xr(t) {
  return ui(t) || hi(t);
}
function ui(t) {
  return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
}
function hi(t) {
  return Ia[Ua.call(t)];
}
var Da = Pa.strict, Ha = function(t) {
  if (Da(t)) {
    var e = Buffer.from(t.buffer);
    return t.byteLength !== t.buffer.byteLength && (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)), e;
  } else
    return Buffer.from(t);
};
const li = "hex", fi = "utf8";
function Te(t) {
  return new Uint8Array(t);
}
function Fa(t, e = !1) {
  const r = t.toString(li);
  return e ? $a(r) : r;
}
function Wa(t) {
  return t.toString(fi);
}
function Mr(t) {
  return Ha(t);
}
function Ve(t, e = !1) {
  return Fa(Mr(t), e);
}
function qa(t) {
  return Wa(Mr(t));
}
function Za(t) {
  return Buffer.from(Qr(t), li);
}
function Je(t) {
  return Te(Za(t));
}
function za(t) {
  return Buffer.from(t, fi);
}
function Ya(t) {
  return Te(za(t));
}
function ci(...t) {
  let e = [];
  return t.forEach((r) => e = e.concat(Array.from(r))), new Uint8Array([...e]);
}
function Qr(t) {
  return t.replace(/^0x/, "");
}
function $a(t) {
  return t.startsWith("0x") ? t : `0x${t}`;
}
function tn(t) {
  return Mr(new Uint8Array(t));
}
function Va(t) {
  return Te(t).buffer;
}
var Ja = { exports: {} };
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
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", s = n ? window : {};
    s.JS_SHA3_NO_WINDOW && (n = !1);
    var o = !n && typeof self == "object", c = !s.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    c ? s = Ut : o && (s = self);
    var h = !s.JS_SHA3_NO_COMMON_JS && !0 && t.exports, y = !s.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", v = "0123456789abcdef".split(""), _ = [31, 7936, 2031616, 520093696], O = [4, 1024, 262144, 67108864], T = [1, 256, 65536, 16777216], N = [6, 1536, 393216, 100663296], P = [0, 8, 16, 24], j = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], S = [224, 256, 384, 512], k = [128, 256], C = ["hex", "buffer", "arrayBuffer", "array", "digest"], B = { 128: 168, 256: 136 };
    (s.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(p) {
      return Object.prototype.toString.call(p) === "[object Array]";
    }), y && (s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(p) {
      return typeof p == "object" && p.buffer && p.buffer.constructor === ArrayBuffer;
    });
    for (var W = function(p, I, R) {
      return function(D) {
        return new F(p, I, p).update(D)[R]();
      };
    }, Y = function(p, I, R) {
      return function(D, K) {
        return new F(p, I, K).update(D)[R]();
      };
    }, J = function(p, I, R) {
      return function(D, K, z, Z) {
        return M["cshake" + p].update(D, K, z, Z)[R]();
      };
    }, ot = function(p, I, R) {
      return function(D, K, z, Z) {
        return M["kmac" + p].update(D, K, z, Z)[R]();
      };
    }, tt = function(p, I, R, D) {
      for (var K = 0; K < C.length; ++K) {
        var z = C[K];
        p[z] = I(R, D, z);
      }
      return p;
    }, lt = function(p, I) {
      var R = W(p, I, "hex");
      return R.create = function() {
        return new F(p, I, p);
      }, R.update = function(D) {
        return R.create().update(D);
      }, tt(R, W, p, I);
    }, i = function(p, I) {
      var R = Y(p, I, "hex");
      return R.create = function(D) {
        return new F(p, I, D);
      }, R.update = function(D, K) {
        return R.create(K).update(D);
      }, tt(R, Y, p, I);
    }, f = function(p, I) {
      var R = B[p], D = J(p, I, "hex");
      return D.create = function(K, z, Z) {
        return !z && !Z ? M["shake" + p].create(K) : new F(p, I, K).bytepad([z, Z], R);
      }, D.update = function(K, z, Z, X) {
        return D.create(z, Z, X).update(K);
      }, tt(D, J, p, I);
    }, d = function(p, I) {
      var R = B[p], D = ot(p, I, "hex");
      return D.create = function(K, z, Z) {
        return new G(p, I, z).bytepad(["KMAC", Z], R).bytepad([K], R);
      }, D.update = function(K, z, Z, X) {
        return D.create(K, Z, X).update(z);
      }, tt(D, ot, p, I);
    }, g = [{ name: "keccak", padding: T, bits: S, createMethod: lt }, { name: "sha3", padding: N, bits: S, createMethod: lt }, { name: "shake", padding: _, bits: k, createMethod: i }, { name: "cshake", padding: O, bits: k, createMethod: f }, { name: "kmac", padding: O, bits: k, createMethod: d }], M = {}, E = [], L = 0; L < g.length; ++L)
      for (var w = g[L], u = w.bits, b = 0; b < u.length; ++b) {
        var H = w.name + "_" + u[b];
        if (E.push(H), M[H] = w.createMethod(u[b], w.padding), w.name !== "sha3") {
          var U = w.name + u[b];
          E.push(U), M[U] = M[H];
        }
      }
    function F(p, I, R) {
      this.blocks = [], this.s = [], this.padding = I, this.outputBits = R, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (p << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = R >> 5, this.extraBytes = (R & 31) >> 3;
      for (var D = 0; D < 50; ++D)
        this.s[D] = 0;
    }
    F.prototype.update = function(p) {
      if (this.finalized)
        throw new Error(r);
      var I, R = typeof p;
      if (R !== "string") {
        if (R === "object") {
          if (p === null)
            throw new Error(e);
          if (y && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!y || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        I = !0;
      }
      for (var D = this.blocks, K = this.byteCount, z = p.length, Z = this.blockCount, X = 0, et = this.s, V, ht; X < z; ) {
        if (this.reset)
          for (this.reset = !1, D[0] = this.block, V = 1; V < Z + 1; ++V)
            D[V] = 0;
        if (I)
          for (V = this.start; X < z && V < K; ++X)
            D[V >> 2] |= p[X] << P[V++ & 3];
        else
          for (V = this.start; X < z && V < K; ++X)
            ht = p.charCodeAt(X), ht < 128 ? D[V >> 2] |= ht << P[V++ & 3] : ht < 2048 ? (D[V >> 2] |= (192 | ht >> 6) << P[V++ & 3], D[V >> 2] |= (128 | ht & 63) << P[V++ & 3]) : ht < 55296 || ht >= 57344 ? (D[V >> 2] |= (224 | ht >> 12) << P[V++ & 3], D[V >> 2] |= (128 | ht >> 6 & 63) << P[V++ & 3], D[V >> 2] |= (128 | ht & 63) << P[V++ & 3]) : (ht = 65536 + ((ht & 1023) << 10 | p.charCodeAt(++X) & 1023), D[V >> 2] |= (240 | ht >> 18) << P[V++ & 3], D[V >> 2] |= (128 | ht >> 12 & 63) << P[V++ & 3], D[V >> 2] |= (128 | ht >> 6 & 63) << P[V++ & 3], D[V >> 2] |= (128 | ht & 63) << P[V++ & 3]);
        if (this.lastByteIndex = V, V >= K) {
          for (this.start = V - K, this.block = D[Z], V = 0; V < Z; ++V)
            et[V] ^= D[V];
          Q(et), this.reset = !0;
        } else
          this.start = V;
      }
      return this;
    }, F.prototype.encode = function(p, I) {
      var R = p & 255, D = 1, K = [R];
      for (p = p >> 8, R = p & 255; R > 0; )
        K.unshift(R), p = p >> 8, R = p & 255, ++D;
      return I ? K.push(D) : K.unshift(D), this.update(K), K.length;
    }, F.prototype.encodeString = function(p) {
      var I, R = typeof p;
      if (R !== "string") {
        if (R === "object") {
          if (p === null)
            throw new Error(e);
          if (y && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!y || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        I = !0;
      }
      var D = 0, K = p.length;
      if (I)
        D = K;
      else
        for (var z = 0; z < p.length; ++z) {
          var Z = p.charCodeAt(z);
          Z < 128 ? D += 1 : Z < 2048 ? D += 2 : Z < 55296 || Z >= 57344 ? D += 3 : (Z = 65536 + ((Z & 1023) << 10 | p.charCodeAt(++z) & 1023), D += 4);
        }
      return D += this.encode(D * 8), this.update(p), D;
    }, F.prototype.bytepad = function(p, I) {
      for (var R = this.encode(I), D = 0; D < p.length; ++D)
        R += this.encodeString(p[D]);
      var K = I - R % I, z = [];
      return z.length = K, this.update(z), this;
    }, F.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var p = this.blocks, I = this.lastByteIndex, R = this.blockCount, D = this.s;
        if (p[I >> 2] |= this.padding[I & 3], this.lastByteIndex === this.byteCount)
          for (p[0] = p[R], I = 1; I < R + 1; ++I)
            p[I] = 0;
        for (p[R - 1] |= 2147483648, I = 0; I < R; ++I)
          D[I] ^= p[I];
        Q(D);
      }
    }, F.prototype.toString = F.prototype.hex = function() {
      this.finalize();
      for (var p = this.blockCount, I = this.s, R = this.outputBlocks, D = this.extraBytes, K = 0, z = 0, Z = "", X; z < R; ) {
        for (K = 0; K < p && z < R; ++K, ++z)
          X = I[K], Z += v[X >> 4 & 15] + v[X & 15] + v[X >> 12 & 15] + v[X >> 8 & 15] + v[X >> 20 & 15] + v[X >> 16 & 15] + v[X >> 28 & 15] + v[X >> 24 & 15];
        z % p === 0 && (Q(I), K = 0);
      }
      return D && (X = I[K], Z += v[X >> 4 & 15] + v[X & 15], D > 1 && (Z += v[X >> 12 & 15] + v[X >> 8 & 15]), D > 2 && (Z += v[X >> 20 & 15] + v[X >> 16 & 15])), Z;
    }, F.prototype.arrayBuffer = function() {
      this.finalize();
      var p = this.blockCount, I = this.s, R = this.outputBlocks, D = this.extraBytes, K = 0, z = 0, Z = this.outputBits >> 3, X;
      D ? X = new ArrayBuffer(R + 1 << 2) : X = new ArrayBuffer(Z);
      for (var et = new Uint32Array(X); z < R; ) {
        for (K = 0; K < p && z < R; ++K, ++z)
          et[z] = I[K];
        z % p === 0 && Q(I);
      }
      return D && (et[K] = I[K], X = X.slice(0, Z)), X;
    }, F.prototype.buffer = F.prototype.arrayBuffer, F.prototype.digest = F.prototype.array = function() {
      this.finalize();
      for (var p = this.blockCount, I = this.s, R = this.outputBlocks, D = this.extraBytes, K = 0, z = 0, Z = [], X, et; z < R; ) {
        for (K = 0; K < p && z < R; ++K, ++z)
          X = z << 2, et = I[K], Z[X] = et & 255, Z[X + 1] = et >> 8 & 255, Z[X + 2] = et >> 16 & 255, Z[X + 3] = et >> 24 & 255;
        z % p === 0 && Q(I);
      }
      return D && (X = z << 2, et = I[K], Z[X] = et & 255, D > 1 && (Z[X + 1] = et >> 8 & 255), D > 2 && (Z[X + 2] = et >> 16 & 255)), Z;
    };
    function G(p, I, R) {
      F.call(this, p, I, R);
    }
    G.prototype = new F(), G.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), F.prototype.finalize.call(this);
    };
    var Q = function(p) {
      var I, R, D, K, z, Z, X, et, V, ht, a, l, m, A, x, q, $, nt, dt, it, at, Pt, ft, ct, Zt, mt, gt, pe, yt, vt, de, _t, wt, me, bt, Mt, ge, Et, At, ye, Lt, Ct, ve, St, kt, _e, Bt, Ot, we, xt, Nt, be, Rt, Tt, Qt, te, ee, re, ne, oe, ie, se, ae;
      for (D = 0; D < 48; D += 2)
        K = p[0] ^ p[10] ^ p[20] ^ p[30] ^ p[40], z = p[1] ^ p[11] ^ p[21] ^ p[31] ^ p[41], Z = p[2] ^ p[12] ^ p[22] ^ p[32] ^ p[42], X = p[3] ^ p[13] ^ p[23] ^ p[33] ^ p[43], et = p[4] ^ p[14] ^ p[24] ^ p[34] ^ p[44], V = p[5] ^ p[15] ^ p[25] ^ p[35] ^ p[45], ht = p[6] ^ p[16] ^ p[26] ^ p[36] ^ p[46], a = p[7] ^ p[17] ^ p[27] ^ p[37] ^ p[47], l = p[8] ^ p[18] ^ p[28] ^ p[38] ^ p[48], m = p[9] ^ p[19] ^ p[29] ^ p[39] ^ p[49], I = l ^ (Z << 1 | X >>> 31), R = m ^ (X << 1 | Z >>> 31), p[0] ^= I, p[1] ^= R, p[10] ^= I, p[11] ^= R, p[20] ^= I, p[21] ^= R, p[30] ^= I, p[31] ^= R, p[40] ^= I, p[41] ^= R, I = K ^ (et << 1 | V >>> 31), R = z ^ (V << 1 | et >>> 31), p[2] ^= I, p[3] ^= R, p[12] ^= I, p[13] ^= R, p[22] ^= I, p[23] ^= R, p[32] ^= I, p[33] ^= R, p[42] ^= I, p[43] ^= R, I = Z ^ (ht << 1 | a >>> 31), R = X ^ (a << 1 | ht >>> 31), p[4] ^= I, p[5] ^= R, p[14] ^= I, p[15] ^= R, p[24] ^= I, p[25] ^= R, p[34] ^= I, p[35] ^= R, p[44] ^= I, p[45] ^= R, I = et ^ (l << 1 | m >>> 31), R = V ^ (m << 1 | l >>> 31), p[6] ^= I, p[7] ^= R, p[16] ^= I, p[17] ^= R, p[26] ^= I, p[27] ^= R, p[36] ^= I, p[37] ^= R, p[46] ^= I, p[47] ^= R, I = ht ^ (K << 1 | z >>> 31), R = a ^ (z << 1 | K >>> 31), p[8] ^= I, p[9] ^= R, p[18] ^= I, p[19] ^= R, p[28] ^= I, p[29] ^= R, p[38] ^= I, p[39] ^= R, p[48] ^= I, p[49] ^= R, A = p[0], x = p[1], _e = p[11] << 4 | p[10] >>> 28, Bt = p[10] << 4 | p[11] >>> 28, pe = p[20] << 3 | p[21] >>> 29, yt = p[21] << 3 | p[20] >>> 29, oe = p[31] << 9 | p[30] >>> 23, ie = p[30] << 9 | p[31] >>> 23, Ct = p[40] << 18 | p[41] >>> 14, ve = p[41] << 18 | p[40] >>> 14, me = p[2] << 1 | p[3] >>> 31, bt = p[3] << 1 | p[2] >>> 31, q = p[13] << 12 | p[12] >>> 20, $ = p[12] << 12 | p[13] >>> 20, Ot = p[22] << 10 | p[23] >>> 22, we = p[23] << 10 | p[22] >>> 22, vt = p[33] << 13 | p[32] >>> 19, de = p[32] << 13 | p[33] >>> 19, se = p[42] << 2 | p[43] >>> 30, ae = p[43] << 2 | p[42] >>> 30, Tt = p[5] << 30 | p[4] >>> 2, Qt = p[4] << 30 | p[5] >>> 2, Mt = p[14] << 6 | p[15] >>> 26, ge = p[15] << 6 | p[14] >>> 26, nt = p[25] << 11 | p[24] >>> 21, dt = p[24] << 11 | p[25] >>> 21, xt = p[34] << 15 | p[35] >>> 17, Nt = p[35] << 15 | p[34] >>> 17, _t = p[45] << 29 | p[44] >>> 3, wt = p[44] << 29 | p[45] >>> 3, ct = p[6] << 28 | p[7] >>> 4, Zt = p[7] << 28 | p[6] >>> 4, te = p[17] << 23 | p[16] >>> 9, ee = p[16] << 23 | p[17] >>> 9, Et = p[26] << 25 | p[27] >>> 7, At = p[27] << 25 | p[26] >>> 7, it = p[36] << 21 | p[37] >>> 11, at = p[37] << 21 | p[36] >>> 11, be = p[47] << 24 | p[46] >>> 8, Rt = p[46] << 24 | p[47] >>> 8, St = p[8] << 27 | p[9] >>> 5, kt = p[9] << 27 | p[8] >>> 5, mt = p[18] << 20 | p[19] >>> 12, gt = p[19] << 20 | p[18] >>> 12, re = p[29] << 7 | p[28] >>> 25, ne = p[28] << 7 | p[29] >>> 25, ye = p[38] << 8 | p[39] >>> 24, Lt = p[39] << 8 | p[38] >>> 24, Pt = p[48] << 14 | p[49] >>> 18, ft = p[49] << 14 | p[48] >>> 18, p[0] = A ^ ~q & nt, p[1] = x ^ ~$ & dt, p[10] = ct ^ ~mt & pe, p[11] = Zt ^ ~gt & yt, p[20] = me ^ ~Mt & Et, p[21] = bt ^ ~ge & At, p[30] = St ^ ~_e & Ot, p[31] = kt ^ ~Bt & we, p[40] = Tt ^ ~te & re, p[41] = Qt ^ ~ee & ne, p[2] = q ^ ~nt & it, p[3] = $ ^ ~dt & at, p[12] = mt ^ ~pe & vt, p[13] = gt ^ ~yt & de, p[22] = Mt ^ ~Et & ye, p[23] = ge ^ ~At & Lt, p[32] = _e ^ ~Ot & xt, p[33] = Bt ^ ~we & Nt, p[42] = te ^ ~re & oe, p[43] = ee ^ ~ne & ie, p[4] = nt ^ ~it & Pt, p[5] = dt ^ ~at & ft, p[14] = pe ^ ~vt & _t, p[15] = yt ^ ~de & wt, p[24] = Et ^ ~ye & Ct, p[25] = At ^ ~Lt & ve, p[34] = Ot ^ ~xt & be, p[35] = we ^ ~Nt & Rt, p[44] = re ^ ~oe & se, p[45] = ne ^ ~ie & ae, p[6] = it ^ ~Pt & A, p[7] = at ^ ~ft & x, p[16] = vt ^ ~_t & ct, p[17] = de ^ ~wt & Zt, p[26] = ye ^ ~Ct & me, p[27] = Lt ^ ~ve & bt, p[36] = xt ^ ~be & St, p[37] = Nt ^ ~Rt & kt, p[46] = oe ^ ~se & Tt, p[47] = ie ^ ~ae & Qt, p[8] = Pt ^ ~A & q, p[9] = ft ^ ~x & $, p[18] = _t ^ ~ct & mt, p[19] = wt ^ ~Zt & gt, p[28] = Ct ^ ~me & Mt, p[29] = ve ^ ~bt & ge, p[38] = be ^ ~St & _e, p[39] = Rt ^ ~kt & Bt, p[48] = se ^ ~Tt & te, p[49] = ae ^ ~Qt & ee, p[0] ^= j[D], p[1] ^= j[D + 1];
    };
    if (h)
      t.exports = M;
    else
      for (L = 0; L < E.length; ++L)
        s[E[L]] = M[E[L]];
  })();
})(Ja);
var De = {};
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
var en = function(t, e) {
  return en = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, en(t, e);
};
function Ka(t, e) {
  en(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var rn = function() {
  return rn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, rn.apply(this, arguments);
};
function Ga(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function Xa(t, e, r, n) {
  var s = arguments.length, o = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(t, e, r, n);
  else
    for (var h = t.length - 1; h >= 0; h--)
      (c = t[h]) && (o = (s < 3 ? c(o) : s > 3 ? c(e, r, o) : c(e, r)) || o);
  return s > 3 && o && Object.defineProperty(e, r, o), o;
}
function Qa(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function tu(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function eu(t, e, r, n) {
  function s(o) {
    return o instanceof r ? o : new r(function(c) {
      c(o);
    });
  }
  return new (r || (r = Promise))(function(o, c) {
    function h(_) {
      try {
        v(n.next(_));
      } catch (O) {
        c(O);
      }
    }
    function y(_) {
      try {
        v(n.throw(_));
      } catch (O) {
        c(O);
      }
    }
    function v(_) {
      _.done ? o(_.value) : s(_.value).then(h, y);
    }
    v((n = n.apply(t, e || [])).next());
  });
}
function ru(t, e) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, s, o, c;
  return c = { next: h(0), throw: h(1), return: h(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function h(v) {
    return function(_) {
      return y([v, _]);
    };
  }
  function y(v) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (o = v[0] & 2 ? s.return : v[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, v[1])).done)
          return o;
        switch (s = 0, o && (v = [v[0] & 2, o.value]), v[0]) {
          case 0:
          case 1:
            o = v;
            break;
          case 4:
            return r.label++, { value: v[1], done: !1 };
          case 5:
            r.label++, s = v[1], v = [0];
            continue;
          case 7:
            v = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (v[0] === 6 || v[0] === 2)) {
              r = 0;
              continue;
            }
            if (v[0] === 3 && (!o || v[1] > o[0] && v[1] < o[3])) {
              r.label = v[1];
              break;
            }
            if (v[0] === 6 && r.label < o[1]) {
              r.label = o[1], o = v;
              break;
            }
            if (o && r.label < o[2]) {
              r.label = o[2], r.ops.push(v);
              break;
            }
            o[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        v = e.call(t, r);
      } catch (_) {
        v = [6, _], s = 0;
      } finally {
        n = o = 0;
      }
    if (v[0] & 5)
      throw v[1];
    return { value: v[0] ? v[1] : void 0, done: !0 };
  }
}
function nu(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function ou(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function nn(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return { next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pi(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, o = [], c;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      o.push(s.value);
  } catch (h) {
    c = { error: h };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (c)
        throw c.error;
    }
  }
  return o;
}
function iu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(pi(arguments[e]));
  return t;
}
function su() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var o = arguments[e], c = 0, h = o.length; c < h; c++, s++)
      n[s] = o[c];
  return n;
}
function Xe(t) {
  return this instanceof Xe ? (this.v = t, this) : new Xe(t);
}
function au(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, o = [];
  return s = {}, c("next"), c("throw"), c("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function c(T) {
    n[T] && (s[T] = function(N) {
      return new Promise(function(P, j) {
        o.push([T, N, P, j]) > 1 || h(T, N);
      });
    });
  }
  function h(T, N) {
    try {
      y(n[T](N));
    } catch (P) {
      O(o[0][3], P);
    }
  }
  function y(T) {
    T.value instanceof Xe ? Promise.resolve(T.value.v).then(v, _) : O(o[0][2], T);
  }
  function v(T) {
    h("next", T);
  }
  function _(T) {
    h("throw", T);
  }
  function O(T, N) {
    T(N), o.shift(), o.length && h(o[0][0], o[0][1]);
  }
}
function uu(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, o) {
    e[s] = t[s] ? function(c) {
      return (r = !r) ? { value: Xe(t[s](c)), done: s === "return" } : o ? o(c) : c;
    } : o;
  }
}
function hu(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof nn == "function" ? nn(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(o) {
    r[o] = t[o] && function(c) {
      return new Promise(function(h, y) {
        c = t[o](c), s(h, y, c.done, c.value);
      });
    };
  }
  function s(o, c, h, y) {
    Promise.resolve(y).then(function(v) {
      o({ value: v, done: h });
    }, c);
  }
}
function lu(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function fu(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function cu(t) {
  return t && t.__esModule ? t : { default: t };
}
function pu(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function du(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
var mu = Object.freeze({ __proto__: null, __extends: Ka, get __assign() {
  return rn;
}, __rest: Ga, __decorate: Xa, __param: Qa, __metadata: tu, __awaiter: eu, __generator: ru, __createBinding: nu, __exportStar: ou, __values: nn, __read: pi, __spread: iu, __spreadArrays: su, __await: Xe, __asyncGenerator: au, __asyncDelegator: uu, __asyncValues: hu, __makeTemplateObject: lu, __importStar: fu, __importDefault: cu, __classPrivateFieldGet: pu, __classPrivateFieldSet: du }), gu = _r(mu), Vt = {}, Kn;
function yu() {
  if (Kn)
    return Vt;
  Kn = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.isBrowserCryptoAvailable = Vt.getSubtleCrypto = Vt.getBrowerCrypto = void 0;
  function t() {
    return (Ut == null ? void 0 : Ut.crypto) || (Ut == null ? void 0 : Ut.msCrypto) || {};
  }
  Vt.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  Vt.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return Vt.isBrowserCryptoAvailable = r, Vt;
}
var Jt = {}, Gn;
function vu() {
  if (Gn)
    return Jt;
  Gn = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.isBrowser = Jt.isNode = Jt.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Jt.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Jt.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Jt.isBrowser = r, Jt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = gu;
  e.__exportStar(yu(), t), e.__exportStar(vu(), t);
})(De);
var _u = {}, wu = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), di = "%[a-f0-9]{2}", Xn = new RegExp("(" + di + ")|([^%]+?)", "gi"), Qn = new RegExp("(" + di + ")+", "gi");
function on(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], on(r), on(n));
}
function bu(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Xn) || [], r = 1; r < e.length; r++)
      t = on(e, r).join(""), e = t.match(Xn) || [];
    return t;
  }
}
function Mu(t) {
  for (var e = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, r = Qn.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = bu(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Qn.exec(t);
  }
  e["%C2"] = "\uFFFD";
  for (var s = Object.keys(e), o = 0; o < s.length; o++) {
    var c = s[o];
    t = t.replace(new RegExp(c, "g"), e[c]);
  }
  return t;
}
var Eu = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return Mu(t);
  }
}, Au = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [t.slice(0, r), t.slice(r + e.length)];
};
(function(t) {
  const e = wu, r = Eu, n = Au, s = (S) => S == null;
  function o(S) {
    switch (S.arrayFormat) {
      case "index":
        return (k) => (C, B) => {
          const W = C.length;
          return B === void 0 || S.skipNull && B === null || S.skipEmptyString && B === "" ? C : B === null ? [...C, [y(k, S), "[", W, "]"].join("")] : [...C, [y(k, S), "[", y(W, S), "]=", y(B, S)].join("")];
        };
      case "bracket":
        return (k) => (C, B) => B === void 0 || S.skipNull && B === null || S.skipEmptyString && B === "" ? C : B === null ? [...C, [y(k, S), "[]"].join("")] : [...C, [y(k, S), "[]=", y(B, S)].join("")];
      case "comma":
      case "separator":
        return (k) => (C, B) => B == null || B.length === 0 ? C : C.length === 0 ? [[y(k, S), "=", y(B, S)].join("")] : [[C, y(B, S)].join(S.arrayFormatSeparator)];
      default:
        return (k) => (C, B) => B === void 0 || S.skipNull && B === null || S.skipEmptyString && B === "" ? C : B === null ? [...C, y(k, S)] : [...C, [y(k, S), "=", y(B, S)].join("")];
    }
  }
  function c(S) {
    let k;
    switch (S.arrayFormat) {
      case "index":
        return (C, B, W) => {
          if (k = /\[(\d*)\]$/.exec(C), C = C.replace(/\[\d*\]$/, ""), !k) {
            W[C] = B;
            return;
          }
          W[C] === void 0 && (W[C] = {}), W[C][k[1]] = B;
        };
      case "bracket":
        return (C, B, W) => {
          if (k = /(\[\])$/.exec(C), C = C.replace(/\[\]$/, ""), !k) {
            W[C] = B;
            return;
          }
          if (W[C] === void 0) {
            W[C] = [B];
            return;
          }
          W[C] = [].concat(W[C], B);
        };
      case "comma":
      case "separator":
        return (C, B, W) => {
          const Y = typeof B == "string" && B.split("").indexOf(S.arrayFormatSeparator) > -1 ? B.split(S.arrayFormatSeparator).map((J) => v(J, S)) : B === null ? B : v(B, S);
          W[C] = Y;
        };
      default:
        return (C, B, W) => {
          if (W[C] === void 0) {
            W[C] = B;
            return;
          }
          W[C] = [].concat(W[C], B);
        };
    }
  }
  function h(S) {
    if (typeof S != "string" || S.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function y(S, k) {
    return k.encode ? k.strict ? e(S) : encodeURIComponent(S) : S;
  }
  function v(S, k) {
    return k.decode ? r(S) : S;
  }
  function _(S) {
    return Array.isArray(S) ? S.sort() : typeof S == "object" ? _(Object.keys(S)).sort((k, C) => Number(k) - Number(C)).map((k) => S[k]) : S;
  }
  function O(S) {
    const k = S.indexOf("#");
    return k !== -1 && (S = S.slice(0, k)), S;
  }
  function T(S) {
    let k = "";
    const C = S.indexOf("#");
    return C !== -1 && (k = S.slice(C)), k;
  }
  function N(S) {
    S = O(S);
    const k = S.indexOf("?");
    return k === -1 ? "" : S.slice(k + 1);
  }
  function P(S, k) {
    return k.parseNumbers && !Number.isNaN(Number(S)) && typeof S == "string" && S.trim() !== "" ? S = Number(S) : k.parseBooleans && S !== null && (S.toLowerCase() === "true" || S.toLowerCase() === "false") && (S = S.toLowerCase() === "true"), S;
  }
  function j(S, k) {
    k = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, k), h(k.arrayFormatSeparator);
    const C = c(k), B = /* @__PURE__ */ Object.create(null);
    if (typeof S != "string" || (S = S.trim().replace(/^[?#&]/, ""), !S))
      return B;
    for (const W of S.split("&")) {
      let [Y, J] = n(k.decode ? W.replace(/\+/g, " ") : W, "=");
      J = J === void 0 ? null : ["comma", "separator"].includes(k.arrayFormat) ? J : v(J, k), C(v(Y, k), J, B);
    }
    for (const W of Object.keys(B)) {
      const Y = B[W];
      if (typeof Y == "object" && Y !== null)
        for (const J of Object.keys(Y))
          Y[J] = P(Y[J], k);
      else
        B[W] = P(Y, k);
    }
    return k.sort === !1 ? B : (k.sort === !0 ? Object.keys(B).sort() : Object.keys(B).sort(k.sort)).reduce((W, Y) => {
      const J = B[Y];
      return Boolean(J) && typeof J == "object" && !Array.isArray(J) ? W[Y] = _(J) : W[Y] = J, W;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = N, t.parse = j, t.stringify = (S, k) => {
    if (!S)
      return "";
    k = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, k), h(k.arrayFormatSeparator);
    const C = (J) => k.skipNull && s(S[J]) || k.skipEmptyString && S[J] === "", B = o(k), W = {};
    for (const J of Object.keys(S))
      C(J) || (W[J] = S[J]);
    const Y = Object.keys(W);
    return k.sort !== !1 && Y.sort(k.sort), Y.map((J) => {
      const ot = S[J];
      return ot === void 0 ? "" : ot === null ? y(J, k) : Array.isArray(ot) ? ot.reduce(B(J), []).join("&") : y(J, k) + "=" + y(ot, k);
    }).filter((J) => J.length > 0).join("&");
  }, t.parseUrl = (S, k) => {
    k = Object.assign({ decode: !0 }, k);
    const [C, B] = n(S, "#");
    return Object.assign({ url: C.split("?")[0] || "", query: j(N(S), k) }, k && k.parseFragmentIdentifier && B ? { fragmentIdentifier: v(B, k) } : {});
  }, t.stringifyUrl = (S, k) => {
    k = Object.assign({ encode: !0, strict: !0 }, k);
    const C = O(S.url).split("?")[0] || "", B = t.extract(S.url), W = t.parse(B, { sort: !1 }), Y = Object.assign(W, S.query);
    let J = t.stringify(Y, k);
    J && (J = `?${J}`);
    let ot = T(S.url);
    return S.fragmentIdentifier && (ot = `#${y(S.fragmentIdentifier, k)}`), `${C}${J}${ot}`;
  };
})(_u);
typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
const Lu = "abcdefghijklmnopqrstuvwxyz0123456789";
Lu.split("").map((t) => `https://${t}.bridge.walletconnect.org`);
function Cu(t) {
  return De.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const mi = 256, gi = mi, Su = mi, le = "AES-CBC", ku = `SHA-${gi}`, sn = "HMAC", Bu = "encrypt", Ou = "decrypt", xu = "sign", Nu = "verify";
function Ru(t) {
  return t === le ? { length: gi, name: le } : { hash: { name: ku }, name: sn };
}
function Tu(t) {
  return t === le ? [Bu, Ou] : [xu, Nu];
}
async function On(t, e = le) {
  return De.getSubtleCrypto().importKey("raw", t, Ru(e), !0, Tu(e));
}
async function ju(t, e, r) {
  const n = De.getSubtleCrypto(), s = await On(e, le), o = await n.encrypt({ iv: t, name: le }, s, r);
  return new Uint8Array(o);
}
async function Pu(t, e, r) {
  const n = De.getSubtleCrypto(), s = await On(e, le), o = await n.decrypt({ iv: t, name: le }, s, r);
  return new Uint8Array(o);
}
async function Uu(t, e) {
  const r = De.getSubtleCrypto(), n = await On(t, sn), s = await r.sign({ length: Su, name: sn }, n, e);
  return new Uint8Array(s);
}
function Iu(t, e, r) {
  return ju(t, e, r);
}
function Du(t, e, r) {
  return Pu(t, e, r);
}
async function yi(t, e) {
  return await Uu(t, e);
}
async function vi(t) {
  const e = (t || 256) / 8, r = Cu(e);
  return Va(Mr(r));
}
async function _i(t, e) {
  const r = Je(t.data), n = Je(t.iv), s = Je(t.hmac), o = Ve(s, !1), c = ci(r, n), h = await yi(e, c), y = Ve(h, !1);
  return Qr(o) === Qr(y);
}
async function Hu(t, e, r) {
  const n = Te(tn(e)), s = r || await vi(128), o = Te(tn(s)), c = Ve(o, !1), h = JSON.stringify(t), y = Ya(h), v = await Iu(o, n, y), _ = Ve(v, !1), O = ci(v, o), T = await yi(n, O), N = Ve(T, !1);
  return { data: _, hmac: N, iv: c };
}
async function Fu(t, e) {
  const r = Te(tn(e));
  if (!r)
    throw new Error("Missing key: required for decryption");
  if (!await _i(t, r))
    return null;
  const n = Je(t.data), s = Je(t.iv), o = await Du(s, r, n), c = qa(o);
  let h;
  try {
    h = JSON.parse(c);
  } catch {
    return null;
  }
  return h;
}
Object.freeze({ __proto__: null, generateKey: vi, verifyHmac: _i, encrypt: Hu, decrypt: Fu });
_r(Na);
var ze = {}, Wu = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, wi = {}, fe = {}, qu = {}.toString, xn = Array.isArray || function(t) {
  return qu.call(t) == "[object Array]";
}, Zu = xn;
function zu() {
  try {
    var t = new Uint8Array(1);
    return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, t.foo() === 42;
  } catch {
    return !1;
  }
}
ut.TYPED_ARRAY_SUPPORT = zu();
var to = ut.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function ut(t, e, r) {
  return !ut.TYPED_ARRAY_SUPPORT && !(this instanceof ut) ? new ut(t, e, r) : typeof t == "number" ? bi(this, t) : Xu(this, t, e, r);
}
ut.TYPED_ARRAY_SUPPORT && (ut.prototype.__proto__ = Uint8Array.prototype, ut.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && ut[Symbol.species] === ut && Object.defineProperty(ut, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }));
function Nn(t) {
  if (t >= to)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + to.toString(16) + " bytes");
  return t | 0;
}
function Yu(t) {
  return t !== t;
}
function je(t, e) {
  var r;
  return ut.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = ut.prototype) : (r = t, r === null && (r = new ut(e)), r.length = e), r;
}
function bi(t, e) {
  var r = je(t, e < 0 ? 0 : Nn(e) | 0);
  if (!ut.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < e; ++n)
      r[n] = 0;
  return r;
}
function $u(t, e) {
  var r = Ei(e) | 0, n = je(t, r), s = n.write(e);
  return s !== r && (n = n.slice(0, s)), n;
}
function an(t, e) {
  for (var r = e.length < 0 ? 0 : Nn(e.length) | 0, n = je(t, r), s = 0; s < r; s += 1)
    n[s] = e[s] & 255;
  return n;
}
function Vu(t, e, r, n) {
  if (r < 0 || e.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  var s;
  return r === void 0 && n === void 0 ? s = new Uint8Array(e) : n === void 0 ? s = new Uint8Array(e, r) : s = new Uint8Array(e, r, n), ut.TYPED_ARRAY_SUPPORT ? s.__proto__ = ut.prototype : s = an(t, s), s;
}
function Ju(t, e) {
  if (ut.isBuffer(e)) {
    var r = Nn(e.length) | 0, n = je(t, r);
    return n.length === 0 || e.copy(n, 0, 0, r), n;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || Yu(e.length) ? je(t, 0) : an(t, e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return an(t, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Mi(t, e) {
  e = e || 1 / 0;
  for (var r, n = t.length, s = null, o = [], c = 0; c < n; ++c) {
    if (r = t.charCodeAt(c), r > 55295 && r < 57344) {
      if (!s) {
        if (r > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (c + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        s = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), s = r;
        continue;
      }
      r = (s - 55296 << 10 | r - 56320) + 65536;
    } else
      s && (e -= 3) > -1 && o.push(239, 191, 189);
    if (s = null, r < 128) {
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
function Ei(t) {
  if (ut.isBuffer(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var e = t.length;
  return e === 0 ? 0 : Mi(t).length;
}
function Ku(t, e, r, n) {
  for (var s = 0; s < n && !(s + r >= e.length || s >= t.length); ++s)
    e[s + r] = t[s];
  return s;
}
function Gu(t, e, r, n) {
  return Ku(Mi(e, t.length - r), t, r, n);
}
function Xu(t, e, r, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Vu(t, e, r, n) : typeof e == "string" ? $u(t, e) : Ju(t, e);
}
ut.prototype.write = function(t, e, r) {
  e === void 0 ? (r = this.length, e = 0) : r === void 0 && typeof e == "string" ? (r = this.length, e = 0) : isFinite(e) && (e = e | 0, isFinite(r) ? r = r | 0 : r = void 0);
  var n = this.length - e;
  if ((r === void 0 || r > n) && (r = n), t.length > 0 && (r < 0 || e < 0) || e > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return Gu(this, t, e, r);
}, ut.prototype.slice = function(t, e) {
  var r = this.length;
  t = ~~t, e = e === void 0 ? r : ~~e, t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), e < t && (e = t);
  var n;
  if (ut.TYPED_ARRAY_SUPPORT)
    n = this.subarray(t, e), n.__proto__ = ut.prototype;
  else {
    var s = e - t;
    n = new ut(s, void 0);
    for (var o = 0; o < s; ++o)
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
  var s = n - r, o;
  if (this === t && r < e && e < n)
    for (o = s - 1; o >= 0; --o)
      t[o + e] = this[o + r];
  else if (s < 1e3 || !ut.TYPED_ARRAY_SUPPORT)
    for (o = 0; o < s; ++o)
      t[o + e] = this[o + r];
  else
    Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
  return s;
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
  var s;
  if (typeof t == "number")
    for (s = e; s < r; ++s)
      this[s] = t;
  else {
    var o = ut.isBuffer(t) ? t : new ut(t), c = o.length;
    for (s = 0; s < r - e; ++s)
      this[s + e] = o[s % c];
  }
  return this;
}, ut.concat = function(t, e) {
  if (!Zu(t))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (t.length === 0)
    return je(null, 0);
  var r;
  if (e === void 0)
    for (e = 0, r = 0; r < t.length; ++r)
      e += t[r].length;
  var n = bi(null, e), s = 0;
  for (r = 0; r < t.length; ++r) {
    var o = t[r];
    if (!ut.isBuffer(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(n, s), s += o.length;
  }
  return n;
}, ut.byteLength = Ei, ut.prototype._isBuffer = !0, ut.isBuffer = function(t) {
  return !!(t != null && t._isBuffer);
}, fe.alloc = function(t) {
  var e = new ut(t);
  return e.fill(0), e;
}, fe.from = function(t) {
  return new ut(t);
};
var Ht = {}, Dr, Qu = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
Ht.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
}, Ht.getSymbolTotalCodewords = function(t) {
  return Qu[t];
}, Ht.getBCHDigit = function(t) {
  for (var e = 0; t !== 0; )
    e++, t >>>= 1;
  return e;
}, Ht.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Dr = t;
}, Ht.isKanjiModeEnabled = function() {
  return typeof Dr < "u";
}, Ht.toSJIS = function(t) {
  return Dr(t);
};
var Er = {};
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
})(Er);
function Ai() {
  this.buffer = [], this.length = 0;
}
Ai.prototype = { get: function(t) {
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
var th = Ai, eo = fe;
function Ye(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = eo.alloc(t * t), this.reservedBit = eo.alloc(t * t);
}
Ye.prototype.set = function(t, e, r, n) {
  var s = t * this.size + e;
  this.data[s] = r, n && (this.reservedBit[s] = !0);
}, Ye.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
}, Ye.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
}, Ye.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var eh = Ye, Li = {};
(function(t) {
  var e = Ht.getSymbolSize;
  t.getRowColCoords = function(r) {
    if (r === 1)
      return [];
    for (var n = Math.floor(r / 7) + 2, s = e(r), o = s === 145 ? 26 : Math.ceil((s - 13) / (2 * n - 2)) * 2, c = [s - 7], h = 1; h < n - 1; h++)
      c[h] = c[h - 1] - o;
    return c.push(6), c.reverse();
  }, t.getPositions = function(r) {
    for (var n = [], s = t.getRowColCoords(r), o = s.length, c = 0; c < o; c++)
      for (var h = 0; h < o; h++)
        c === 0 && h === 0 || c === 0 && h === o - 1 || c === o - 1 && h === 0 || n.push([s[c], s[h]]);
    return n;
  };
})(Li);
var Ci = {}, rh = Ht.getSymbolSize, ro = 7;
Ci.getPositions = function(t) {
  var e = rh(t);
  return [[0, 0], [e - ro, 0], [0, e - ro]];
};
var Si = {};
(function(t) {
  t.Patterns = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 };
  var e = { N1: 3, N2: 3, N3: 40, N4: 10 };
  t.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, t.from = function(n) {
    return t.isValid(n) ? parseInt(n, 10) : void 0;
  }, t.getPenaltyN1 = function(n) {
    for (var s = n.size, o = 0, c = 0, h = 0, y = null, v = null, _ = 0; _ < s; _++) {
      c = h = 0, y = v = null;
      for (var O = 0; O < s; O++) {
        var T = n.get(_, O);
        T === y ? c++ : (c >= 5 && (o += e.N1 + (c - 5)), y = T, c = 1), T = n.get(O, _), T === v ? h++ : (h >= 5 && (o += e.N1 + (h - 5)), v = T, h = 1);
      }
      c >= 5 && (o += e.N1 + (c - 5)), h >= 5 && (o += e.N1 + (h - 5));
    }
    return o;
  }, t.getPenaltyN2 = function(n) {
    for (var s = n.size, o = 0, c = 0; c < s - 1; c++)
      for (var h = 0; h < s - 1; h++) {
        var y = n.get(c, h) + n.get(c, h + 1) + n.get(c + 1, h) + n.get(c + 1, h + 1);
        (y === 4 || y === 0) && o++;
      }
    return o * e.N2;
  }, t.getPenaltyN3 = function(n) {
    for (var s = n.size, o = 0, c = 0, h = 0, y = 0; y < s; y++) {
      c = h = 0;
      for (var v = 0; v < s; v++)
        c = c << 1 & 2047 | n.get(y, v), v >= 10 && (c === 1488 || c === 93) && o++, h = h << 1 & 2047 | n.get(v, y), v >= 10 && (h === 1488 || h === 93) && o++;
    }
    return o * e.N3;
  }, t.getPenaltyN4 = function(n) {
    for (var s = 0, o = n.data.length, c = 0; c < o; c++)
      s += n.data[c];
    var h = Math.abs(Math.ceil(s * 100 / o / 5) - 10);
    return h * e.N4;
  };
  function r(n, s, o) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (s + o) % 2 === 0;
      case t.Patterns.PATTERN001:
        return s % 2 === 0;
      case t.Patterns.PATTERN010:
        return o % 3 === 0;
      case t.Patterns.PATTERN011:
        return (s + o) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(s / 2) + Math.floor(o / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return s * o % 2 + s * o % 3 === 0;
      case t.Patterns.PATTERN110:
        return (s * o % 2 + s * o % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (s * o % 3 + (s + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(n, s) {
    for (var o = s.size, c = 0; c < o; c++)
      for (var h = 0; h < o; h++)
        s.isReserved(h, c) || s.xor(h, c, r(n, h, c));
  }, t.getBestMask = function(n, s) {
    for (var o = Object.keys(t.Patterns).length, c = 0, h = 1 / 0, y = 0; y < o; y++) {
      s(y), t.applyMask(y, n);
      var v = t.getPenaltyN1(n) + t.getPenaltyN2(n) + t.getPenaltyN3(n) + t.getPenaltyN4(n);
      t.applyMask(y, n), v < h && (h = v, c = y);
    }
    return c;
  };
})(Si);
var dr = {}, ue = Er, ir = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81], sr = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
dr.getBlocksCount = function(t, e) {
  switch (e) {
    case ue.L:
      return ir[(t - 1) * 4 + 0];
    case ue.M:
      return ir[(t - 1) * 4 + 1];
    case ue.Q:
      return ir[(t - 1) * 4 + 2];
    case ue.H:
      return ir[(t - 1) * 4 + 3];
    default:
      return;
  }
}, dr.getTotalCodewordsCount = function(t, e) {
  switch (e) {
    case ue.L:
      return sr[(t - 1) * 4 + 0];
    case ue.M:
      return sr[(t - 1) * 4 + 1];
    case ue.Q:
      return sr[(t - 1) * 4 + 2];
    case ue.H:
      return sr[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var ki = {}, ar = {}, Bi = fe, We = Bi.alloc(512), ur = Bi.alloc(256);
(function() {
  for (var t = 1, e = 0; e < 255; e++)
    We[e] = t, ur[t] = e, t <<= 1, t & 256 && (t ^= 285);
  for (e = 255; e < 512; e++)
    We[e] = We[e - 255];
})(), ar.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return ur[t];
}, ar.exp = function(t) {
  return We[t];
}, ar.mul = function(t, e) {
  return t === 0 || e === 0 ? 0 : We[ur[t] + ur[e]];
}, function(t) {
  var e = fe, r = ar;
  t.mul = function(n, s) {
    for (var o = e.alloc(n.length + s.length - 1), c = 0; c < n.length; c++)
      for (var h = 0; h < s.length; h++)
        o[c + h] ^= r.mul(n[c], s[h]);
    return o;
  }, t.mod = function(n, s) {
    for (var o = e.from(n); o.length - s.length >= 0; ) {
      for (var c = o[0], h = 0; h < s.length; h++)
        o[h] ^= r.mul(s[h], c);
      for (var y = 0; y < o.length && o[y] === 0; )
        y++;
      o = o.slice(y);
    }
    return o;
  }, t.generateECPolynomial = function(n) {
    for (var s = e.from([1]), o = 0; o < n; o++)
      s = t.mul(s, [1, r.exp(o)]);
    return s;
  };
}(ki);
var Oi = {}, fr = {};
fr.byteLength = ih, fr.toByteArray = ah, fr.fromByteArray = lh;
for (var Yt = [], Ft = [], nh = typeof Uint8Array < "u" ? Uint8Array : Array, Hr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ce = 0, oh = Hr.length; Ce < oh; ++Ce)
  Yt[Ce] = Hr[Ce], Ft[Hr.charCodeAt(Ce)] = Ce;
Ft["-".charCodeAt(0)] = 62, Ft["_".charCodeAt(0)] = 63;
function xi(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function ih(t) {
  var e = xi(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function sh(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function ah(t) {
  var e, r = xi(t), n = r[0], s = r[1], o = new nh(sh(t, n, s)), c = 0, h = s > 0 ? n - 4 : n, y;
  for (y = 0; y < h; y += 4)
    e = Ft[t.charCodeAt(y)] << 18 | Ft[t.charCodeAt(y + 1)] << 12 | Ft[t.charCodeAt(y + 2)] << 6 | Ft[t.charCodeAt(y + 3)], o[c++] = e >> 16 & 255, o[c++] = e >> 8 & 255, o[c++] = e & 255;
  return s === 2 && (e = Ft[t.charCodeAt(y)] << 2 | Ft[t.charCodeAt(y + 1)] >> 4, o[c++] = e & 255), s === 1 && (e = Ft[t.charCodeAt(y)] << 10 | Ft[t.charCodeAt(y + 1)] << 4 | Ft[t.charCodeAt(y + 2)] >> 2, o[c++] = e >> 8 & 255, o[c++] = e & 255), o;
}
function uh(t) {
  return Yt[t >> 18 & 63] + Yt[t >> 12 & 63] + Yt[t >> 6 & 63] + Yt[t & 63];
}
function hh(t, e, r) {
  for (var n, s = [], o = e; o < r; o += 3)
    n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (t[o + 2] & 255), s.push(uh(n));
  return s.join("");
}
function lh(t) {
  for (var e, r = t.length, n = r % 3, s = [], o = 16383, c = 0, h = r - n; c < h; c += o)
    s.push(hh(t, c, c + o > h ? h : c + o));
  return n === 1 ? (e = t[r - 1], s.push(Yt[e >> 2] + Yt[e << 4 & 63] + "==")) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], s.push(Yt[e >> 10] + Yt[e >> 4 & 63] + Yt[e << 2 & 63] + "=")), s.join("");
}
var un = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
un.read = function(t, e, r, n, s) {
  var o, c, h = s * 8 - n - 1, y = (1 << h) - 1, v = y >> 1, _ = -7, O = r ? s - 1 : 0, T = r ? -1 : 1, N = t[e + O];
  for (O += T, o = N & (1 << -_) - 1, N >>= -_, _ += h; _ > 0; o = o * 256 + t[e + O], O += T, _ -= 8)
    ;
  for (c = o & (1 << -_) - 1, o >>= -_, _ += n; _ > 0; c = c * 256 + t[e + O], O += T, _ -= 8)
    ;
  if (o === 0)
    o = 1 - v;
  else {
    if (o === y)
      return c ? NaN : (N ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, n), o = o - v;
  }
  return (N ? -1 : 1) * c * Math.pow(2, o - n);
}, un.write = function(t, e, r, n, s, o) {
  var c, h, y, v = o * 8 - s - 1, _ = (1 << v) - 1, O = _ >> 1, T = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, N = n ? 0 : o - 1, P = n ? 1 : -1, j = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (h = isNaN(e) ? 1 : 0, c = _) : (c = Math.floor(Math.log(e) / Math.LN2), e * (y = Math.pow(2, -c)) < 1 && (c--, y *= 2), c + O >= 1 ? e += T / y : e += T * Math.pow(2, 1 - O), e * y >= 2 && (c++, y /= 2), c + O >= _ ? (h = 0, c = _) : c + O >= 1 ? (h = (e * y - 1) * Math.pow(2, s), c = c + O) : (h = e * Math.pow(2, O - 1) * Math.pow(2, s), c = 0)); s >= 8; t[r + N] = h & 255, N += P, h /= 256, s -= 8)
    ;
  for (c = c << s | h, v += s; v > 0; t[r + N] = c & 255, N += P, c /= 256, v -= 8)
    ;
  t[r + N - P] |= j * 128;
};
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
(function(t) {
  var e = fr, r = un, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = h, t.SlowBuffer = C, t.INSPECT_MAX_BYTES = 50;
  var s = 2147483647;
  t.kMaxLength = s, h.TYPED_ARRAY_SUPPORT = o(), !h.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function o() {
    try {
      var a = new Uint8Array(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(a, l), a.foo() === 42;
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
  function c(a) {
    if (a > s)
      throw new RangeError('The value "' + a + '" is invalid for option "size"');
    var l = new Uint8Array(a);
    return Object.setPrototypeOf(l, h.prototype), l;
  }
  function h(a, l, m) {
    if (typeof a == "number") {
      if (typeof l == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return O(a);
    }
    return y(a, l, m);
  }
  h.poolSize = 8192;
  function y(a, l, m) {
    if (typeof a == "string")
      return T(a, l);
    if (ArrayBuffer.isView(a))
      return P(a);
    if (a == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
    if (et(a, ArrayBuffer) || a && et(a.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (et(a, SharedArrayBuffer) || a && et(a.buffer, SharedArrayBuffer)))
      return j(a, l, m);
    if (typeof a == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    var A = a.valueOf && a.valueOf();
    if (A != null && A !== a)
      return h.from(A, l, m);
    var x = S(a);
    if (x)
      return x;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof a[Symbol.toPrimitive] == "function")
      return h.from(a[Symbol.toPrimitive]("string"), l, m);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a);
  }
  h.from = function(a, l, m) {
    return y(a, l, m);
  }, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array);
  function v(a) {
    if (typeof a != "number")
      throw new TypeError('"size" argument must be of type number');
    if (a < 0)
      throw new RangeError('The value "' + a + '" is invalid for option "size"');
  }
  function _(a, l, m) {
    return v(a), a <= 0 ? c(a) : l !== void 0 ? typeof m == "string" ? c(a).fill(l, m) : c(a).fill(l) : c(a);
  }
  h.alloc = function(a, l, m) {
    return _(a, l, m);
  };
  function O(a) {
    return v(a), c(a < 0 ? 0 : k(a) | 0);
  }
  h.allocUnsafe = function(a) {
    return O(a);
  }, h.allocUnsafeSlow = function(a) {
    return O(a);
  };
  function T(a, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !h.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    var m = B(a, l) | 0, A = c(m), x = A.write(a, l);
    return x !== m && (A = A.slice(0, x)), A;
  }
  function N(a) {
    for (var l = a.length < 0 ? 0 : k(a.length) | 0, m = c(l), A = 0; A < l; A += 1)
      m[A] = a[A] & 255;
    return m;
  }
  function P(a) {
    if (et(a, Uint8Array)) {
      var l = new Uint8Array(a);
      return j(l.buffer, l.byteOffset, l.byteLength);
    }
    return N(a);
  }
  function j(a, l, m) {
    if (l < 0 || a.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (a.byteLength < l + (m || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var A;
    return l === void 0 && m === void 0 ? A = new Uint8Array(a) : m === void 0 ? A = new Uint8Array(a, l) : A = new Uint8Array(a, l, m), Object.setPrototypeOf(A, h.prototype), A;
  }
  function S(a) {
    if (h.isBuffer(a)) {
      var l = k(a.length) | 0, m = c(l);
      return m.length === 0 || a.copy(m, 0, 0, l), m;
    }
    if (a.length !== void 0)
      return typeof a.length != "number" || V(a.length) ? c(0) : N(a);
    if (a.type === "Buffer" && Array.isArray(a.data))
      return N(a.data);
  }
  function k(a) {
    if (a >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return a | 0;
  }
  function C(a) {
    return +a != a && (a = 0), h.alloc(+a);
  }
  h.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== h.prototype;
  }, h.compare = function(a, l) {
    if (et(a, Uint8Array) && (a = h.from(a, a.offset, a.byteLength)), et(l, Uint8Array) && (l = h.from(l, l.offset, l.byteLength)), !h.isBuffer(a) || !h.isBuffer(l))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === l)
      return 0;
    for (var m = a.length, A = l.length, x = 0, q = Math.min(m, A); x < q; ++x)
      if (a[x] !== l[x]) {
        m = a[x], A = l[x];
        break;
      }
    return m < A ? -1 : A < m ? 1 : 0;
  }, h.isEncoding = function(a) {
    switch (String(a).toLowerCase()) {
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
  }, h.concat = function(a, l) {
    if (!Array.isArray(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (a.length === 0)
      return h.alloc(0);
    var m;
    if (l === void 0)
      for (l = 0, m = 0; m < a.length; ++m)
        l += a[m].length;
    var A = h.allocUnsafe(l), x = 0;
    for (m = 0; m < a.length; ++m) {
      var q = a[m];
      if (et(q, Uint8Array))
        x + q.length > A.length ? h.from(q).copy(A, x) : Uint8Array.prototype.set.call(A, q, x);
      else if (h.isBuffer(q))
        q.copy(A, x);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      x += q.length;
    }
    return A;
  };
  function B(a, l) {
    if (h.isBuffer(a))
      return a.length;
    if (ArrayBuffer.isView(a) || et(a, ArrayBuffer))
      return a.byteLength;
    if (typeof a != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof a);
    var m = a.length, A = arguments.length > 2 && arguments[2] === !0;
    if (!A && m === 0)
      return 0;
    for (var x = !1; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return m;
        case "utf8":
        case "utf-8":
          return D(a).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return m * 2;
        case "hex":
          return m >>> 1;
        case "base64":
          return Z(a).length;
        default:
          if (x)
            return A ? -1 : D(a).length;
          l = ("" + l).toLowerCase(), x = !0;
      }
  }
  h.byteLength = B;
  function W(a, l, m) {
    var A = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((m === void 0 || m > this.length) && (m = this.length), m <= 0) || (m >>>= 0, l >>>= 0, m <= l))
      return "";
    for (a || (a = "utf8"); ; )
      switch (a) {
        case "hex":
          return b(this, l, m);
        case "utf8":
        case "utf-8":
          return M(this, l, m);
        case "ascii":
          return w(this, l, m);
        case "latin1":
        case "binary":
          return u(this, l, m);
        case "base64":
          return g(this, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return H(this, l, m);
        default:
          if (A)
            throw new TypeError("Unknown encoding: " + a);
          a = (a + "").toLowerCase(), A = !0;
      }
  }
  h.prototype._isBuffer = !0;
  function Y(a, l, m) {
    var A = a[l];
    a[l] = a[m], a[m] = A;
  }
  h.prototype.swap16 = function() {
    var a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var l = 0; l < a; l += 2)
      Y(this, l, l + 1);
    return this;
  }, h.prototype.swap32 = function() {
    var a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var l = 0; l < a; l += 4)
      Y(this, l, l + 3), Y(this, l + 1, l + 2);
    return this;
  }, h.prototype.swap64 = function() {
    var a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var l = 0; l < a; l += 8)
      Y(this, l, l + 7), Y(this, l + 1, l + 6), Y(this, l + 2, l + 5), Y(this, l + 3, l + 4);
    return this;
  }, h.prototype.toString = function() {
    var a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? M(this, 0, a) : W.apply(this, arguments);
  }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(a) {
    if (!h.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : h.compare(this, a) === 0;
  }, h.prototype.inspect = function() {
    var a = "", l = t.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, n && (h.prototype[n] = h.prototype.inspect), h.prototype.compare = function(a, l, m, A, x) {
    if (et(a, Uint8Array) && (a = h.from(a, a.offset, a.byteLength)), !h.isBuffer(a))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a);
    if (l === void 0 && (l = 0), m === void 0 && (m = a ? a.length : 0), A === void 0 && (A = 0), x === void 0 && (x = this.length), l < 0 || m > a.length || A < 0 || x > this.length)
      throw new RangeError("out of range index");
    if (A >= x && l >= m)
      return 0;
    if (A >= x)
      return -1;
    if (l >= m)
      return 1;
    if (l >>>= 0, m >>>= 0, A >>>= 0, x >>>= 0, this === a)
      return 0;
    for (var q = x - A, $ = m - l, nt = Math.min(q, $), dt = this.slice(A, x), it = a.slice(l, m), at = 0; at < nt; ++at)
      if (dt[at] !== it[at]) {
        q = dt[at], $ = it[at];
        break;
      }
    return q < $ ? -1 : $ < q ? 1 : 0;
  };
  function J(a, l, m, A, x) {
    if (a.length === 0)
      return -1;
    if (typeof m == "string" ? (A = m, m = 0) : m > 2147483647 ? m = 2147483647 : m < -2147483648 && (m = -2147483648), m = +m, V(m) && (m = x ? 0 : a.length - 1), m < 0 && (m = a.length + m), m >= a.length) {
      if (x)
        return -1;
      m = a.length - 1;
    } else if (m < 0)
      if (x)
        m = 0;
      else
        return -1;
    if (typeof l == "string" && (l = h.from(l, A)), h.isBuffer(l))
      return l.length === 0 ? -1 : ot(a, l, m, A, x);
    if (typeof l == "number")
      return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? x ? Uint8Array.prototype.indexOf.call(a, l, m) : Uint8Array.prototype.lastIndexOf.call(a, l, m) : ot(a, [l], m, A, x);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ot(a, l, m, A, x) {
    var q = 1, $ = a.length, nt = l.length;
    if (A !== void 0 && (A = String(A).toLowerCase(), A === "ucs2" || A === "ucs-2" || A === "utf16le" || A === "utf-16le")) {
      if (a.length < 2 || l.length < 2)
        return -1;
      q = 2, $ /= 2, nt /= 2, m /= 2;
    }
    function dt(ct, Zt) {
      return q === 1 ? ct[Zt] : ct.readUInt16BE(Zt * q);
    }
    var it;
    if (x) {
      var at = -1;
      for (it = m; it < $; it++)
        if (dt(a, it) === dt(l, at === -1 ? 0 : it - at)) {
          if (at === -1 && (at = it), it - at + 1 === nt)
            return at * q;
        } else
          at !== -1 && (it -= it - at), at = -1;
    } else
      for (m + nt > $ && (m = $ - nt), it = m; it >= 0; it--) {
        for (var Pt = !0, ft = 0; ft < nt; ft++)
          if (dt(a, it + ft) !== dt(l, ft)) {
            Pt = !1;
            break;
          }
        if (Pt)
          return it;
      }
    return -1;
  }
  h.prototype.includes = function(a, l, m) {
    return this.indexOf(a, l, m) !== -1;
  }, h.prototype.indexOf = function(a, l, m) {
    return J(this, a, l, m, !0);
  }, h.prototype.lastIndexOf = function(a, l, m) {
    return J(this, a, l, m, !1);
  };
  function tt(a, l, m, A) {
    m = Number(m) || 0;
    var x = a.length - m;
    A ? (A = Number(A), A > x && (A = x)) : A = x;
    var q = l.length;
    A > q / 2 && (A = q / 2);
    for (var $ = 0; $ < A; ++$) {
      var nt = parseInt(l.substr($ * 2, 2), 16);
      if (V(nt))
        return $;
      a[m + $] = nt;
    }
    return $;
  }
  function lt(a, l, m, A) {
    return X(D(l, a.length - m), a, m, A);
  }
  function i(a, l, m, A) {
    return X(K(l), a, m, A);
  }
  function f(a, l, m, A) {
    return X(Z(l), a, m, A);
  }
  function d(a, l, m, A) {
    return X(z(l, a.length - m), a, m, A);
  }
  h.prototype.write = function(a, l, m, A) {
    if (l === void 0)
      A = "utf8", m = this.length, l = 0;
    else if (m === void 0 && typeof l == "string")
      A = l, m = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(m) ? (m = m >>> 0, A === void 0 && (A = "utf8")) : (A = m, m = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var x = this.length - l;
    if ((m === void 0 || m > x) && (m = x), a.length > 0 && (m < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    A || (A = "utf8");
    for (var q = !1; ; )
      switch (A) {
        case "hex":
          return tt(this, a, l, m);
        case "utf8":
        case "utf-8":
          return lt(this, a, l, m);
        case "ascii":
        case "latin1":
        case "binary":
          return i(this, a, l, m);
        case "base64":
          return f(this, a, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return d(this, a, l, m);
        default:
          if (q)
            throw new TypeError("Unknown encoding: " + A);
          A = ("" + A).toLowerCase(), q = !0;
      }
  }, h.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function g(a, l, m) {
    return l === 0 && m === a.length ? e.fromByteArray(a) : e.fromByteArray(a.slice(l, m));
  }
  function M(a, l, m) {
    m = Math.min(a.length, m);
    for (var A = [], x = l; x < m; ) {
      var q = a[x], $ = null, nt = q > 239 ? 4 : q > 223 ? 3 : q > 191 ? 2 : 1;
      if (x + nt <= m) {
        var dt, it, at, Pt;
        switch (nt) {
          case 1:
            q < 128 && ($ = q);
            break;
          case 2:
            dt = a[x + 1], (dt & 192) === 128 && (Pt = (q & 31) << 6 | dt & 63, Pt > 127 && ($ = Pt));
            break;
          case 3:
            dt = a[x + 1], it = a[x + 2], (dt & 192) === 128 && (it & 192) === 128 && (Pt = (q & 15) << 12 | (dt & 63) << 6 | it & 63, Pt > 2047 && (Pt < 55296 || Pt > 57343) && ($ = Pt));
            break;
          case 4:
            dt = a[x + 1], it = a[x + 2], at = a[x + 3], (dt & 192) === 128 && (it & 192) === 128 && (at & 192) === 128 && (Pt = (q & 15) << 18 | (dt & 63) << 12 | (it & 63) << 6 | at & 63, Pt > 65535 && Pt < 1114112 && ($ = Pt));
        }
      }
      $ === null ? ($ = 65533, nt = 1) : $ > 65535 && ($ -= 65536, A.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), A.push($), x += nt;
    }
    return L(A);
  }
  var E = 4096;
  function L(a) {
    var l = a.length;
    if (l <= E)
      return String.fromCharCode.apply(String, a);
    for (var m = "", A = 0; A < l; )
      m += String.fromCharCode.apply(String, a.slice(A, A += E));
    return m;
  }
  function w(a, l, m) {
    var A = "";
    m = Math.min(a.length, m);
    for (var x = l; x < m; ++x)
      A += String.fromCharCode(a[x] & 127);
    return A;
  }
  function u(a, l, m) {
    var A = "";
    m = Math.min(a.length, m);
    for (var x = l; x < m; ++x)
      A += String.fromCharCode(a[x]);
    return A;
  }
  function b(a, l, m) {
    var A = a.length;
    (!l || l < 0) && (l = 0), (!m || m < 0 || m > A) && (m = A);
    for (var x = "", q = l; q < m; ++q)
      x += ht[a[q]];
    return x;
  }
  function H(a, l, m) {
    for (var A = a.slice(l, m), x = "", q = 0; q < A.length - 1; q += 2)
      x += String.fromCharCode(A[q] + A[q + 1] * 256);
    return x;
  }
  h.prototype.slice = function(a, l) {
    var m = this.length;
    a = ~~a, l = l === void 0 ? m : ~~l, a < 0 ? (a += m, a < 0 && (a = 0)) : a > m && (a = m), l < 0 ? (l += m, l < 0 && (l = 0)) : l > m && (l = m), l < a && (l = a);
    var A = this.subarray(a, l);
    return Object.setPrototypeOf(A, h.prototype), A;
  };
  function U(a, l, m) {
    if (a % 1 !== 0 || a < 0)
      throw new RangeError("offset is not uint");
    if (a + l > m)
      throw new RangeError("Trying to access beyond buffer length");
  }
  h.prototype.readUintLE = h.prototype.readUIntLE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || U(a, l, this.length);
    for (var A = this[a], x = 1, q = 0; ++q < l && (x *= 256); )
      A += this[a + q] * x;
    return A;
  }, h.prototype.readUintBE = h.prototype.readUIntBE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || U(a, l, this.length);
    for (var A = this[a + --l], x = 1; l > 0 && (x *= 256); )
      A += this[a + --l] * x;
    return A;
  }, h.prototype.readUint8 = h.prototype.readUInt8 = function(a, l) {
    return a = a >>> 0, l || U(a, 1, this.length), this[a];
  }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(a, l) {
    return a = a >>> 0, l || U(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(a, l) {
    return a = a >>> 0, l || U(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(a, l) {
    return a = a >>> 0, l || U(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(a, l) {
    return a = a >>> 0, l || U(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, h.prototype.readIntLE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || U(a, l, this.length);
    for (var A = this[a], x = 1, q = 0; ++q < l && (x *= 256); )
      A += this[a + q] * x;
    return x *= 128, A >= x && (A -= Math.pow(2, 8 * l)), A;
  }, h.prototype.readIntBE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || U(a, l, this.length);
    for (var A = l, x = 1, q = this[a + --A]; A > 0 && (x *= 256); )
      q += this[a + --A] * x;
    return x *= 128, q >= x && (q -= Math.pow(2, 8 * l)), q;
  }, h.prototype.readInt8 = function(a, l) {
    return a = a >>> 0, l || U(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, h.prototype.readInt16LE = function(a, l) {
    a = a >>> 0, l || U(a, 2, this.length);
    var m = this[a] | this[a + 1] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, h.prototype.readInt16BE = function(a, l) {
    a = a >>> 0, l || U(a, 2, this.length);
    var m = this[a + 1] | this[a] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, h.prototype.readInt32LE = function(a, l) {
    return a = a >>> 0, l || U(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, h.prototype.readInt32BE = function(a, l) {
    return a = a >>> 0, l || U(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, h.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || U(a, 4, this.length), r.read(this, a, !0, 23, 4);
  }, h.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || U(a, 4, this.length), r.read(this, a, !1, 23, 4);
  }, h.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || U(a, 8, this.length), r.read(this, a, !0, 52, 8);
  }, h.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || U(a, 8, this.length), r.read(this, a, !1, 52, 8);
  };
  function F(a, l, m, A, x, q) {
    if (!h.isBuffer(a))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > x || l < q)
      throw new RangeError('"value" argument is out of bounds');
    if (m + A > a.length)
      throw new RangeError("Index out of range");
  }
  h.prototype.writeUintLE = h.prototype.writeUIntLE = function(a, l, m, A) {
    if (a = +a, l = l >>> 0, m = m >>> 0, !A) {
      var x = Math.pow(2, 8 * m) - 1;
      F(this, a, l, m, x, 0);
    }
    var q = 1, $ = 0;
    for (this[l] = a & 255; ++$ < m && (q *= 256); )
      this[l + $] = a / q & 255;
    return l + m;
  }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(a, l, m, A) {
    if (a = +a, l = l >>> 0, m = m >>> 0, !A) {
      var x = Math.pow(2, 8 * m) - 1;
      F(this, a, l, m, x, 0);
    }
    var q = m - 1, $ = 1;
    for (this[l + q] = a & 255; --q >= 0 && ($ *= 256); )
      this[l + q] = a / $ & 255;
    return l + m;
  }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 1, 255, 0), this[l] = a & 255, l + 1;
  }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 2, 65535, 0), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 2, 65535, 0), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 4, 4294967295, 0), this[l + 3] = a >>> 24, this[l + 2] = a >>> 16, this[l + 1] = a >>> 8, this[l] = a & 255, l + 4;
  }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 4, 4294967295, 0), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  }, h.prototype.writeIntLE = function(a, l, m, A) {
    if (a = +a, l = l >>> 0, !A) {
      var x = Math.pow(2, 8 * m - 1);
      F(this, a, l, m, x - 1, -x);
    }
    var q = 0, $ = 1, nt = 0;
    for (this[l] = a & 255; ++q < m && ($ *= 256); )
      a < 0 && nt === 0 && this[l + q - 1] !== 0 && (nt = 1), this[l + q] = (a / $ >> 0) - nt & 255;
    return l + m;
  }, h.prototype.writeIntBE = function(a, l, m, A) {
    if (a = +a, l = l >>> 0, !A) {
      var x = Math.pow(2, 8 * m - 1);
      F(this, a, l, m, x - 1, -x);
    }
    var q = m - 1, $ = 1, nt = 0;
    for (this[l + q] = a & 255; --q >= 0 && ($ *= 256); )
      a < 0 && nt === 0 && this[l + q + 1] !== 0 && (nt = 1), this[l + q] = (a / $ >> 0) - nt & 255;
    return l + m;
  }, h.prototype.writeInt8 = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[l] = a & 255, l + 1;
  }, h.prototype.writeInt16LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 2, 32767, -32768), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, h.prototype.writeInt16BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 2, 32767, -32768), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, h.prototype.writeInt32LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 4, 2147483647, -2147483648), this[l] = a & 255, this[l + 1] = a >>> 8, this[l + 2] = a >>> 16, this[l + 3] = a >>> 24, l + 4;
  }, h.prototype.writeInt32BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || F(this, a, l, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  };
  function G(a, l, m, A, x, q) {
    if (m + A > a.length)
      throw new RangeError("Index out of range");
    if (m < 0)
      throw new RangeError("Index out of range");
  }
  function Q(a, l, m, A, x) {
    return l = +l, m = m >>> 0, x || G(a, l, m, 4), r.write(a, l, m, A, 23, 4), m + 4;
  }
  h.prototype.writeFloatLE = function(a, l, m) {
    return Q(this, a, l, !0, m);
  }, h.prototype.writeFloatBE = function(a, l, m) {
    return Q(this, a, l, !1, m);
  };
  function p(a, l, m, A, x) {
    return l = +l, m = m >>> 0, x || G(a, l, m, 8), r.write(a, l, m, A, 52, 8), m + 8;
  }
  h.prototype.writeDoubleLE = function(a, l, m) {
    return p(this, a, l, !0, m);
  }, h.prototype.writeDoubleBE = function(a, l, m) {
    return p(this, a, l, !1, m);
  }, h.prototype.copy = function(a, l, m, A) {
    if (!h.isBuffer(a))
      throw new TypeError("argument should be a Buffer");
    if (m || (m = 0), !A && A !== 0 && (A = this.length), l >= a.length && (l = a.length), l || (l = 0), A > 0 && A < m && (A = m), A === m || a.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (m < 0 || m >= this.length)
      throw new RangeError("Index out of range");
    if (A < 0)
      throw new RangeError("sourceEnd out of bounds");
    A > this.length && (A = this.length), a.length - l < A - m && (A = a.length - l + m);
    var x = A - m;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, m, A) : Uint8Array.prototype.set.call(a, this.subarray(m, A), l), x;
  }, h.prototype.fill = function(a, l, m, A) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (A = l, l = 0, m = this.length) : typeof m == "string" && (A = m, m = this.length), A !== void 0 && typeof A != "string")
        throw new TypeError("encoding must be a string");
      if (typeof A == "string" && !h.isEncoding(A))
        throw new TypeError("Unknown encoding: " + A);
      if (a.length === 1) {
        var x = a.charCodeAt(0);
        (A === "utf8" && x < 128 || A === "latin1") && (a = x);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (l < 0 || this.length < l || this.length < m)
      throw new RangeError("Out of range index");
    if (m <= l)
      return this;
    l = l >>> 0, m = m === void 0 ? this.length : m >>> 0, a || (a = 0);
    var q;
    if (typeof a == "number")
      for (q = l; q < m; ++q)
        this[q] = a;
    else {
      var $ = h.isBuffer(a) ? a : h.from(a, A), nt = $.length;
      if (nt === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (q = 0; q < m - l; ++q)
        this[q + l] = $[q % nt];
    }
    return this;
  };
  var I = /[^+/0-9A-Za-z-_]/g;
  function R(a) {
    if (a = a.split("=")[0], a = a.trim().replace(I, ""), a.length < 2)
      return "";
    for (; a.length % 4 !== 0; )
      a = a + "=";
    return a;
  }
  function D(a, l) {
    l = l || 1 / 0;
    for (var m, A = a.length, x = null, q = [], $ = 0; $ < A; ++$) {
      if (m = a.charCodeAt($), m > 55295 && m < 57344) {
        if (!x) {
          if (m > 56319) {
            (l -= 3) > -1 && q.push(239, 191, 189);
            continue;
          } else if ($ + 1 === A) {
            (l -= 3) > -1 && q.push(239, 191, 189);
            continue;
          }
          x = m;
          continue;
        }
        if (m < 56320) {
          (l -= 3) > -1 && q.push(239, 191, 189), x = m;
          continue;
        }
        m = (x - 55296 << 10 | m - 56320) + 65536;
      } else
        x && (l -= 3) > -1 && q.push(239, 191, 189);
      if (x = null, m < 128) {
        if ((l -= 1) < 0)
          break;
        q.push(m);
      } else if (m < 2048) {
        if ((l -= 2) < 0)
          break;
        q.push(m >> 6 | 192, m & 63 | 128);
      } else if (m < 65536) {
        if ((l -= 3) < 0)
          break;
        q.push(m >> 12 | 224, m >> 6 & 63 | 128, m & 63 | 128);
      } else if (m < 1114112) {
        if ((l -= 4) < 0)
          break;
        q.push(m >> 18 | 240, m >> 12 & 63 | 128, m >> 6 & 63 | 128, m & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return q;
  }
  function K(a) {
    for (var l = [], m = 0; m < a.length; ++m)
      l.push(a.charCodeAt(m) & 255);
    return l;
  }
  function z(a, l) {
    for (var m, A, x, q = [], $ = 0; $ < a.length && !((l -= 2) < 0); ++$)
      m = a.charCodeAt($), A = m >> 8, x = m % 256, q.push(x), q.push(A);
    return q;
  }
  function Z(a) {
    return e.toByteArray(R(a));
  }
  function X(a, l, m, A) {
    for (var x = 0; x < A && !(x + m >= l.length || x >= a.length); ++x)
      l[x + m] = a[x];
    return x;
  }
  function et(a, l) {
    return a instanceof l || a != null && a.constructor != null && a.constructor.name != null && a.constructor.name === l.name;
  }
  function V(a) {
    return a !== a;
  }
  var ht = function() {
    for (var a = "0123456789abcdef", l = new Array(256), m = 0; m < 16; ++m)
      for (var A = m * 16, x = 0; x < 16; ++x)
        l[A + x] = a[m] + a[x];
    return l;
  }();
})(Oi);
var no = fe, oo = ki, fh = Oi.Buffer;
function hn(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
hn.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = oo.generateECPolynomial(this.degree);
}, hn.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var e = no.alloc(this.degree), r = fh.concat([t, e], t.length + this.degree), n = oo.mod(r, this.genPoly), s = this.degree - n.length;
  if (s > 0) {
    var o = no.alloc(this.degree);
    return n.copy(o, s), o;
  }
  return n;
};
var ch = hn, Ni = {}, ce = {}, ln = {};
ln.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var $t = {}, Ri = "[0-9]+", ph = "[A-Z $%*+\\-./:]+", Qe = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Qe = Qe.replace(/u/g, "\\u");
var dh = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Qe + `)(?:.|[\r
]))+`;
$t.KANJI = new RegExp(Qe, "g"), $t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), $t.BYTE = new RegExp(dh, "g"), $t.NUMERIC = new RegExp(Ri, "g"), $t.ALPHANUMERIC = new RegExp(ph, "g");
var mh = new RegExp("^" + Qe + "$"), gh = new RegExp("^" + Ri + "$"), yh = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
$t.testKanji = function(t) {
  return mh.test(t);
}, $t.testNumeric = function(t) {
  return gh.test(t);
}, $t.testAlphanumeric = function(t) {
  return yh.test(t);
}, function(t) {
  var e = ln, r = $t;
  t.NUMERIC = { id: "Numeric", bit: 1 << 0, ccBits: [10, 12, 14] }, t.ALPHANUMERIC = { id: "Alphanumeric", bit: 1 << 1, ccBits: [9, 11, 13] }, t.BYTE = { id: "Byte", bit: 1 << 2, ccBits: [8, 16, 16] }, t.KANJI = { id: "Kanji", bit: 1 << 3, ccBits: [8, 10, 12] }, t.MIXED = { bit: -1 }, t.getCharCountIndicator = function(s, o) {
    if (!s.ccBits)
      throw new Error("Invalid mode: " + s);
    if (!e.isValid(o))
      throw new Error("Invalid version: " + o);
    return o >= 1 && o < 10 ? s.ccBits[0] : o < 27 ? s.ccBits[1] : s.ccBits[2];
  }, t.getBestModeForData = function(s) {
    return r.testNumeric(s) ? t.NUMERIC : r.testAlphanumeric(s) ? t.ALPHANUMERIC : r.testKanji(s) ? t.KANJI : t.BYTE;
  }, t.toString = function(s) {
    if (s && s.id)
      return s.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(s) {
    return s && s.bit && s.ccBits;
  };
  function n(s) {
    if (typeof s != "string")
      throw new Error("Param is not a string");
    var o = s.toLowerCase();
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
        throw new Error("Unknown mode: " + s);
    }
  }
  t.from = function(s, o) {
    if (t.isValid(s))
      return s;
    try {
      return n(s);
    } catch {
      return o;
    }
  };
}(ce), function(t) {
  var e = Ht, r = dr, n = Er, s = ce, o = ln, c = xn, h = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, y = e.getBCHDigit(h);
  function v(N, P, j) {
    for (var S = 1; S <= 40; S++)
      if (P <= t.getCapacity(S, j, N))
        return S;
  }
  function _(N, P) {
    return s.getCharCountIndicator(N, P) + 4;
  }
  function O(N, P) {
    var j = 0;
    return N.forEach(function(S) {
      var k = _(S.mode, P);
      j += k + S.getBitsLength();
    }), j;
  }
  function T(N, P) {
    for (var j = 1; j <= 40; j++) {
      var S = O(N, j);
      if (S <= t.getCapacity(j, P, s.MIXED))
        return j;
    }
  }
  t.from = function(N, P) {
    return o.isValid(N) ? parseInt(N, 10) : P;
  }, t.getCapacity = function(N, P, j) {
    if (!o.isValid(N))
      throw new Error("Invalid QR Code version");
    typeof j > "u" && (j = s.BYTE);
    var S = e.getSymbolTotalCodewords(N), k = r.getTotalCodewordsCount(N, P), C = (S - k) * 8;
    if (j === s.MIXED)
      return C;
    var B = C - _(j, N);
    switch (j) {
      case s.NUMERIC:
        return Math.floor(B / 10 * 3);
      case s.ALPHANUMERIC:
        return Math.floor(B / 11 * 2);
      case s.KANJI:
        return Math.floor(B / 13);
      case s.BYTE:
      default:
        return Math.floor(B / 8);
    }
  }, t.getBestVersionForData = function(N, P) {
    var j, S = n.from(P, n.M);
    if (c(N)) {
      if (N.length > 1)
        return T(N, S);
      if (N.length === 0)
        return 1;
      j = N[0];
    } else
      j = N;
    return v(j.mode, j.getLength(), S);
  }, t.getEncodedBits = function(N) {
    if (!o.isValid(N) || N < 7)
      throw new Error("Invalid QR Code version");
    for (var P = N << 12; e.getBCHDigit(P) - y >= 0; )
      P ^= h << e.getBCHDigit(P) - y;
    return N << 12 | P;
  };
}(Ni);
var Ti = {}, fn = Ht, ji = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, vh = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, io = fn.getBCHDigit(ji);
Ti.getEncodedBits = function(t, e) {
  for (var r = t.bit << 3 | e, n = r << 10; fn.getBCHDigit(n) - io >= 0; )
    n ^= ji << fn.getBCHDigit(n) - io;
  return (r << 10 | n) ^ vh;
};
var Pi = {}, _h = ce;
function Se(t) {
  this.mode = _h.NUMERIC, this.data = t.toString();
}
Se.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
}, Se.prototype.getLength = function() {
  return this.data.length;
}, Se.prototype.getBitsLength = function() {
  return Se.getBitsLength(this.data.length);
}, Se.prototype.write = function(t) {
  var e, r, n;
  for (e = 0; e + 3 <= this.data.length; e += 3)
    r = this.data.substr(e, 3), n = parseInt(r, 10), t.put(n, 10);
  var s = this.data.length - e;
  s > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(n, s * 3 + 1));
};
var wh = Se, bh = ce, Fr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function ke(t) {
  this.mode = bh.ALPHANUMERIC, this.data = t;
}
ke.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
}, ke.prototype.getLength = function() {
  return this.data.length;
}, ke.prototype.getBitsLength = function() {
  return ke.getBitsLength(this.data.length);
}, ke.prototype.write = function(t) {
  var e;
  for (e = 0; e + 2 <= this.data.length; e += 2) {
    var r = Fr.indexOf(this.data[e]) * 45;
    r += Fr.indexOf(this.data[e + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(Fr.indexOf(this.data[e]), 6);
};
var Mh = ke, Eh = fe, Ah = ce;
function Be(t) {
  this.mode = Ah.BYTE, this.data = Eh.from(t);
}
Be.getBitsLength = function(t) {
  return t * 8;
}, Be.prototype.getLength = function() {
  return this.data.length;
}, Be.prototype.getBitsLength = function() {
  return Be.getBitsLength(this.data.length);
}, Be.prototype.write = function(t) {
  for (var e = 0, r = this.data.length; e < r; e++)
    t.put(this.data[e], 8);
};
var Lh = Be, Ch = ce, Sh = Ht;
function Oe(t) {
  this.mode = Ch.KANJI, this.data = t;
}
Oe.getBitsLength = function(t) {
  return t * 13;
}, Oe.prototype.getLength = function() {
  return this.data.length;
}, Oe.prototype.getBitsLength = function() {
  return Oe.getBitsLength(this.data.length);
}, Oe.prototype.write = function(t) {
  var e;
  for (e = 0; e < this.data.length; e++) {
    var r = Sh.toSJIS(this.data[e]);
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
var kh = Oe, so = { exports: {} };
(function(t) {
  var e = { single_source_shortest_paths: function(r, n, s) {
    var o = {}, c = {};
    c[n] = 0;
    var h = e.PriorityQueue.make();
    h.push(n, 0);
    for (var y, v, _, O, T, N, P, j, S; !h.empty(); ) {
      y = h.pop(), v = y.value, O = y.cost, T = r[v] || {};
      for (_ in T)
        T.hasOwnProperty(_) && (N = T[_], P = O + N, j = c[_], S = typeof c[_] > "u", (S || j > P) && (c[_] = P, h.push(_, P), o[_] = v));
    }
    if (typeof s < "u" && typeof c[s] > "u") {
      var k = ["Could not find a path from ", n, " to ", s, "."].join("");
      throw new Error(k);
    }
    return o;
  }, extract_shortest_path_from_predecessor_list: function(r, n) {
    for (var s = [], o = n; o; )
      s.push(o), r[o], o = r[o];
    return s.reverse(), s;
  }, find_path: function(r, n, s) {
    var o = e.single_source_shortest_paths(r, n, s);
    return e.extract_shortest_path_from_predecessor_list(o, s);
  }, PriorityQueue: { make: function(r) {
    var n = e.PriorityQueue, s = {}, o;
    r = r || {};
    for (o in n)
      n.hasOwnProperty(o) && (s[o] = n[o]);
    return s.queue = [], s.sorter = r.sorter || n.default_sorter, s;
  }, default_sorter: function(r, n) {
    return r.cost - n.cost;
  }, push: function(r, n) {
    var s = { value: r, cost: n };
    this.queue.push(s), this.queue.sort(this.sorter);
  }, pop: function() {
    return this.queue.shift();
  }, empty: function() {
    return this.queue.length === 0;
  } } };
  t.exports = e;
})(so), function(t) {
  var e = ce, r = wh, n = Mh, s = Lh, o = kh, c = $t, h = Ht, y = so.exports;
  function v(k) {
    return unescape(encodeURIComponent(k)).length;
  }
  function _(k, C, B) {
    for (var W = [], Y; (Y = k.exec(B)) !== null; )
      W.push({ data: Y[0], index: Y.index, mode: C, length: Y[0].length });
    return W;
  }
  function O(k) {
    var C = _(c.NUMERIC, e.NUMERIC, k), B = _(c.ALPHANUMERIC, e.ALPHANUMERIC, k), W, Y;
    h.isKanjiModeEnabled() ? (W = _(c.BYTE, e.BYTE, k), Y = _(c.KANJI, e.KANJI, k)) : (W = _(c.BYTE_KANJI, e.BYTE, k), Y = []);
    var J = C.concat(B, W, Y);
    return J.sort(function(ot, tt) {
      return ot.index - tt.index;
    }).map(function(ot) {
      return { data: ot.data, mode: ot.mode, length: ot.length };
    });
  }
  function T(k, C) {
    switch (C) {
      case e.NUMERIC:
        return r.getBitsLength(k);
      case e.ALPHANUMERIC:
        return n.getBitsLength(k);
      case e.KANJI:
        return o.getBitsLength(k);
      case e.BYTE:
        return s.getBitsLength(k);
    }
  }
  function N(k) {
    return k.reduce(function(C, B) {
      var W = C.length - 1 >= 0 ? C[C.length - 1] : null;
      return W && W.mode === B.mode ? (C[C.length - 1].data += B.data, C) : (C.push(B), C);
    }, []);
  }
  function P(k) {
    for (var C = [], B = 0; B < k.length; B++) {
      var W = k[B];
      switch (W.mode) {
        case e.NUMERIC:
          C.push([W, { data: W.data, mode: e.ALPHANUMERIC, length: W.length }, { data: W.data, mode: e.BYTE, length: W.length }]);
          break;
        case e.ALPHANUMERIC:
          C.push([W, { data: W.data, mode: e.BYTE, length: W.length }]);
          break;
        case e.KANJI:
          C.push([W, { data: W.data, mode: e.BYTE, length: v(W.data) }]);
          break;
        case e.BYTE:
          C.push([{ data: W.data, mode: e.BYTE, length: v(W.data) }]);
      }
    }
    return C;
  }
  function j(k, C) {
    for (var B = {}, W = { start: {} }, Y = ["start"], J = 0; J < k.length; J++) {
      for (var ot = k[J], tt = [], lt = 0; lt < ot.length; lt++) {
        var i = ot[lt], f = "" + J + lt;
        tt.push(f), B[f] = { node: i, lastCount: 0 }, W[f] = {};
        for (var d = 0; d < Y.length; d++) {
          var g = Y[d];
          B[g] && B[g].node.mode === i.mode ? (W[g][f] = T(B[g].lastCount + i.length, i.mode) - T(B[g].lastCount, i.mode), B[g].lastCount += i.length) : (B[g] && (B[g].lastCount = i.length), W[g][f] = T(i.length, i.mode) + 4 + e.getCharCountIndicator(i.mode, C));
        }
      }
      Y = tt;
    }
    for (d = 0; d < Y.length; d++)
      W[Y[d]].end = 0;
    return { map: W, table: B };
  }
  function S(k, C) {
    var B, W = e.getBestModeForData(k);
    if (B = e.from(C, W), B !== e.BYTE && B.bit < W.bit)
      throw new Error('"' + k + '" cannot be encoded with mode ' + e.toString(B) + `.
 Suggested mode is: ` + e.toString(W));
    switch (B === e.KANJI && !h.isKanjiModeEnabled() && (B = e.BYTE), B) {
      case e.NUMERIC:
        return new r(k);
      case e.ALPHANUMERIC:
        return new n(k);
      case e.KANJI:
        return new o(k);
      case e.BYTE:
        return new s(k);
    }
  }
  t.fromArray = function(k) {
    return k.reduce(function(C, B) {
      return typeof B == "string" ? C.push(S(B, null)) : B.data && C.push(S(B.data, B.mode)), C;
    }, []);
  }, t.fromString = function(k, C) {
    for (var B = O(k, h.isKanjiModeEnabled()), W = P(B), Y = j(W, C), J = y.find_path(Y.map, "start", "end"), ot = [], tt = 1; tt < J.length - 1; tt++)
      ot.push(Y.table[J[tt]].node);
    return t.fromArray(N(ot));
  }, t.rawSplit = function(k) {
    return t.fromArray(O(k, h.isKanjiModeEnabled()));
  };
}(Pi);
var ao = fe, Ar = Ht, Wr = Er, Bh = th, Oh = eh, xh = Li, Nh = Ci, cn = Si, pn = dr, Rh = ch, mr = Ni, Th = Ti, jh = ce, qr = Pi, Ph = xn;
function Uh(t, e) {
  for (var r = t.size, n = Nh.getPositions(e), s = 0; s < n.length; s++)
    for (var o = n[s][0], c = n[s][1], h = -1; h <= 7; h++)
      if (!(o + h <= -1 || r <= o + h))
        for (var y = -1; y <= 7; y++)
          c + y <= -1 || r <= c + y || (h >= 0 && h <= 6 && (y === 0 || y === 6) || y >= 0 && y <= 6 && (h === 0 || h === 6) || h >= 2 && h <= 4 && y >= 2 && y <= 4 ? t.set(o + h, c + y, !0, !0) : t.set(o + h, c + y, !1, !0));
}
function Ih(t) {
  for (var e = t.size, r = 8; r < e - 8; r++) {
    var n = r % 2 === 0;
    t.set(r, 6, n, !0), t.set(6, r, n, !0);
  }
}
function Dh(t, e) {
  for (var r = xh.getPositions(e), n = 0; n < r.length; n++)
    for (var s = r[n][0], o = r[n][1], c = -2; c <= 2; c++)
      for (var h = -2; h <= 2; h++)
        c === -2 || c === 2 || h === -2 || h === 2 || c === 0 && h === 0 ? t.set(s + c, o + h, !0, !0) : t.set(s + c, o + h, !1, !0);
}
function Hh(t, e) {
  for (var r = t.size, n = mr.getEncodedBits(e), s, o, c, h = 0; h < 18; h++)
    s = Math.floor(h / 3), o = h % 3 + r - 8 - 3, c = (n >> h & 1) === 1, t.set(s, o, c, !0), t.set(o, s, c, !0);
}
function Zr(t, e, r) {
  var n = t.size, s = Th.getEncodedBits(e, r), o, c;
  for (o = 0; o < 15; o++)
    c = (s >> o & 1) === 1, o < 6 ? t.set(o, 8, c, !0) : o < 8 ? t.set(o + 1, 8, c, !0) : t.set(n - 15 + o, 8, c, !0), o < 8 ? t.set(8, n - o - 1, c, !0) : o < 9 ? t.set(8, 15 - o - 1 + 1, c, !0) : t.set(8, 15 - o - 1, c, !0);
  t.set(n - 8, 8, 1, !0);
}
function Fh(t, e) {
  for (var r = t.size, n = -1, s = r - 1, o = 7, c = 0, h = r - 1; h > 0; h -= 2)
    for (h === 6 && h--; ; ) {
      for (var y = 0; y < 2; y++)
        if (!t.isReserved(s, h - y)) {
          var v = !1;
          c < e.length && (v = (e[c] >>> o & 1) === 1), t.set(s, h - y, v), o--, o === -1 && (c++, o = 7);
        }
      if (s += n, s < 0 || r <= s) {
        s -= n, n = -n;
        break;
      }
    }
}
function Wh(t, e, r) {
  var n = new Bh();
  r.forEach(function(v) {
    n.put(v.mode.bit, 4), n.put(v.getLength(), jh.getCharCountIndicator(v.mode, t)), v.write(n);
  });
  var s = Ar.getSymbolTotalCodewords(t), o = pn.getTotalCodewordsCount(t, e), c = (s - o) * 8;
  for (n.getLengthInBits() + 4 <= c && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  for (var h = (c - n.getLengthInBits()) / 8, y = 0; y < h; y++)
    n.put(y % 2 ? 17 : 236, 8);
  return qh(n, t, e);
}
function qh(t, e, r) {
  for (var n = Ar.getSymbolTotalCodewords(e), s = pn.getTotalCodewordsCount(e, r), o = n - s, c = pn.getBlocksCount(e, r), h = n % c, y = c - h, v = Math.floor(n / c), _ = Math.floor(o / c), O = _ + 1, T = v - _, N = new Rh(T), P = 0, j = new Array(c), S = new Array(c), k = 0, C = ao.from(t.buffer), B = 0; B < c; B++) {
    var W = B < y ? _ : O;
    j[B] = C.slice(P, P + W), S[B] = N.encode(j[B]), P += W, k = Math.max(k, W);
  }
  var Y = ao.alloc(n), J = 0, ot, tt;
  for (ot = 0; ot < k; ot++)
    for (tt = 0; tt < c; tt++)
      ot < j[tt].length && (Y[J++] = j[tt][ot]);
  for (ot = 0; ot < T; ot++)
    for (tt = 0; tt < c; tt++)
      Y[J++] = S[tt][ot];
  return Y;
}
function Zh(t, e, r, n) {
  var s;
  if (Ph(t))
    s = qr.fromArray(t);
  else if (typeof t == "string") {
    var o = e;
    if (!o) {
      var c = qr.rawSplit(t);
      o = mr.getBestVersionForData(c, r);
    }
    s = qr.fromString(t, o || 40);
  } else
    throw new Error("Invalid data");
  var h = mr.getBestVersionForData(s, r);
  if (!h)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = h;
  else if (e < h)
    throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + h + `.
`);
  var y = Wh(e, r, s), v = Ar.getSymbolSize(e), _ = new Oh(v);
  return Uh(_, e), Ih(_), Dh(_, e), Zr(_, r, 0), e >= 7 && Hh(_, e), Fh(_, y), isNaN(n) && (n = cn.getBestMask(_, Zr.bind(null, _, r))), cn.applyMask(n, _), Zr(_, r, n), { modules: _, version: e, errorCorrectionLevel: r, maskPattern: n, segments: s };
}
wi.create = function(t, e) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  var r = Wr.M, n, s;
  return typeof e < "u" && (r = Wr.from(e.errorCorrectionLevel, Wr.M), n = mr.from(e.version), s = cn.from(e.maskPattern), e.toSJISFunc && Ar.setToSJISFunction(e.toSJISFunc)), Zh(t, n, r, s);
};
var Ui = {}, dn = {};
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
    var s = parseInt(n.join(""), 16);
    return { r: s >> 24 & 255, g: s >> 16 & 255, b: s >> 8 & 255, a: s & 255, hex: "#" + n.slice(0, 6).join("") };
  }
  t.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    var n = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, s = r.width && r.width >= 21 ? r.width : void 0, o = r.scale || 4;
    return { width: s, scale: s ? 4 : o, margin: n, color: { dark: e(r.color.dark || "#000000ff"), light: e(r.color.light || "#ffffffff") }, type: r.type, rendererOpts: r.rendererOpts || {} };
  }, t.getScale = function(r, n) {
    return n.width && n.width >= r + n.margin * 2 ? n.width / (r + n.margin * 2) : n.scale;
  }, t.getImageWidth = function(r, n) {
    var s = t.getScale(r, n);
    return Math.floor((r + n.margin * 2) * s);
  }, t.qrToImageData = function(r, n, s) {
    for (var o = n.modules.size, c = n.modules.data, h = t.getScale(o, s), y = Math.floor((o + s.margin * 2) * h), v = s.margin * h, _ = [s.color.light, s.color.dark], O = 0; O < y; O++)
      for (var T = 0; T < y; T++) {
        var N = (O * y + T) * 4, P = s.color.light;
        if (O >= v && T >= v && O < y - v && T < y - v) {
          var j = Math.floor((O - v) / h), S = Math.floor((T - v) / h);
          P = _[c[j * o + S] ? 1 : 0];
        }
        r[N++] = P.r, r[N++] = P.g, r[N++] = P.b, r[N] = P.a;
      }
  };
})(dn), function(t) {
  var e = dn;
  function r(s, o, c) {
    s.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = c, o.width = c, o.style.height = c + "px", o.style.width = c + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(s, o, c) {
    var h = c, y = o;
    typeof h > "u" && (!o || !o.getContext) && (h = o, o = void 0), o || (y = n()), h = e.getOptions(h);
    var v = e.getImageWidth(s.modules.size, h), _ = y.getContext("2d"), O = _.createImageData(v, v);
    return e.qrToImageData(O.data, s, h), r(_, y, v), _.putImageData(O, 0, 0), y;
  }, t.renderToDataURL = function(s, o, c) {
    var h = c;
    typeof h > "u" && (!o || !o.getContext) && (h = o, o = void 0), h || (h = {});
    var y = t.render(s, o, h), v = h.type || "image/png", _ = h.rendererOpts || {};
    return y.toDataURL(v, _.quality);
  };
}(Ui);
var Ii = {}, zh = dn;
function uo(t, e) {
  var r = t.a / 255, n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function zr(t, e, r) {
  var n = t + e;
  return typeof r < "u" && (n += " " + r), n;
}
function Yh(t, e, r) {
  for (var n = "", s = 0, o = !1, c = 0, h = 0; h < t.length; h++) {
    var y = Math.floor(h % e), v = Math.floor(h / e);
    !y && !o && (o = !0), t[h] ? (c++, h > 0 && y > 0 && t[h - 1] || (n += o ? zr("M", y + r, 0.5 + v + r) : zr("m", s, 0), s = 0, o = !1), y + 1 < e && t[h + 1] || (n += zr("h", c), c = 0)) : s++;
  }
  return n;
}
Ii.render = function(t, e, r) {
  var n = zh.getOptions(e), s = t.modules.size, o = t.modules.data, c = s + n.margin * 2, h = n.color.light.a ? "<path " + uo(n.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "", y = "<path " + uo(n.color.dark, "stroke") + ' d="' + Yh(o, s, n.margin) + '"/>', v = 'viewBox="0 0 ' + c + " " + c + '"', _ = n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "", O = '<svg xmlns="http://www.w3.org/2000/svg" ' + _ + v + ' shape-rendering="crispEdges">' + h + y + `</svg>
`;
  return typeof r == "function" && r(null, O), O;
};
var $h = Wu, mn = wi, ho = Ui, Vh = Ii;
function Yr(t, e, r, n, s) {
  var o = [].slice.call(arguments, 1), c = o.length, h = typeof o[c - 1] == "function";
  if (!h && !$h())
    throw new Error("Callback required as last argument");
  if (h) {
    if (c < 2)
      throw new Error("Too few arguments provided");
    c === 2 ? (s = r, r = e, e = n = void 0) : c === 3 && (e.getContext && typeof s > "u" ? (s = n, n = void 0) : (s = n, n = r, r = e, e = void 0));
  } else {
    if (c < 1)
      throw new Error("Too few arguments provided");
    return c === 1 ? (r = e, e = n = void 0) : c === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(v, _) {
      try {
        var O = mn.create(r, n);
        v(t(O, e, n));
      } catch (T) {
        _(T);
      }
    });
  }
  try {
    var y = mn.create(r, n);
    s(null, t(y, e, n));
  } catch (v) {
    s(v);
  }
}
ze.create = mn.create, ze.toCanvas = Yr.bind(null, ho.render), ze.toDataURL = Yr.bind(null, ho.renderToDataURL), ze.toString = Yr.bind(null, function(t, e, r) {
  return Vh.render(t, r);
});
var Jh = function() {
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
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || r.forEach(function(s) {
      t.addRange(s);
    }), e && e.focus();
  };
}, Kh = Jh, lo = { "text/plain": "Text", "text/html": "Url", default: "Text" }, Gh = "Copy to clipboard: #{key}, Enter";
function Xh(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function Qh(t, e) {
  var r, n, s, o, c, h, y = !1;
  e || (e = {}), r = e.debug || !1;
  try {
    s = Kh(), o = document.createRange(), c = document.getSelection(), h = document.createElement("span"), h.textContent = t, h.ariaHidden = "true", h.style.all = "unset", h.style.position = "fixed", h.style.top = 0, h.style.clip = "rect(0, 0, 0, 0)", h.style.whiteSpace = "pre", h.style.webkitUserSelect = "text", h.style.MozUserSelect = "text", h.style.msUserSelect = "text", h.style.userSelect = "text", h.addEventListener("copy", function(_) {
      if (_.stopPropagation(), e.format)
        if (_.preventDefault(), typeof _.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var O = lo[e.format] || lo.default;
          window.clipboardData.setData(O, t);
        } else
          _.clipboardData.clearData(), _.clipboardData.setData(e.format, t);
      e.onCopy && (_.preventDefault(), e.onCopy(_.clipboardData));
    }), document.body.appendChild(h), o.selectNodeContents(h), c.addRange(o);
    var v = document.execCommand("copy");
    if (!v)
      throw new Error("copy command was unsuccessful");
    y = !0;
  } catch (_) {
    r && console.error("unable to copy using execCommand: ", _), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), y = !0;
    } catch (O) {
      r && console.error("unable to copy using clipboardData: ", O), r && console.error("falling back to prompt"), n = Xh("message" in e ? e.message : Gh), window.prompt(n, t);
    }
  } finally {
    c && (typeof c.removeRange == "function" ? c.removeRange(o) : c.removeAllRanges()), h && document.body.removeChild(h), s();
  }
  return y;
}
var tl = Qh, st, Ke, Rn, Di, fo, Tn, Hi, Gt = {}, Lr = [], el = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function Kt(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Fi(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Xt(t, e, r) {
  var n, s = arguments, o = {};
  for (n in e)
    n !== "key" && n !== "ref" && (o[n] = e[n]);
  if (arguments.length > 3)
    for (r = [r], n = 3; n < arguments.length; n++)
      r.push(s[n]);
  if (r != null && (o.children = r), typeof t == "function" && t.defaultProps != null)
    for (n in t.defaultProps)
      o[n] === void 0 && (o[n] = t.defaultProps[n]);
  return gr(t, o, e && e.key, e && e.ref, null);
}
function gr(t, e, r, n, s) {
  var o = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: s };
  return s == null && (o.__v = o), st.vnode && st.vnode(o), o;
}
function Wi() {
  return {};
}
function rr(t) {
  return t.children;
}
function qt(t, e) {
  this.props = t, this.context = e;
}
function tr(t, e) {
  if (e == null)
    return t.__ ? tr(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? tr(t) : null;
}
function qi(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return qi(t);
  }
}
function cr(t) {
  (!t.__d && (t.__d = !0) && Ke.push(t) && !Rn++ || fo !== st.debounceRendering) && ((fo = st.debounceRendering) || Di)(rl);
}
function rl() {
  for (var t; Rn = Ke.length; )
    t = Ke.sort(function(e, r) {
      return e.__v.__b - r.__v.__b;
    }), Ke = [], t.some(function(e) {
      var r, n, s, o, c, h, y;
      e.__d && (h = (c = (r = e).__v).__e, (y = r.__P) && (n = [], (s = Kt({}, c)).__v = s, o = jn(y, c, s, r.__n, y.ownerSVGElement !== void 0, null, n, h != null ? h : tr(c)), zi(n, c), o != h && qi(c)));
    });
}
function Zi(t, e, r, n, s, o, c, h, y) {
  var v, _, O, T, N, P, j, S = r && r.__k || Lr, k = S.length;
  if (h == Gt && (h = o != null ? o[0] : k ? tr(r, 0) : null), v = 0, e.__k = he(e.__k, function(C) {
    if (C != null) {
      if (C.__ = e, C.__b = e.__b + 1, (O = S[v]) === null || O && C.key == O.key && C.type === O.type)
        S[v] = void 0;
      else
        for (_ = 0; _ < k; _++) {
          if ((O = S[_]) && C.key == O.key && C.type === O.type) {
            S[_] = void 0;
            break;
          }
          O = null;
        }
      if (T = jn(t, C, O = O || Gt, n, s, o, c, h, y), (_ = C.ref) && O.ref != _ && (j || (j = []), O.ref && j.push(O.ref, null, C), j.push(_, C.__c || T, C)), T != null) {
        var B;
        if (P == null && (P = T), C.__d !== void 0)
          B = C.__d, C.__d = void 0;
        else if (o == O || T != h || T.parentNode == null) {
          t:
            if (h == null || h.parentNode !== t)
              t.appendChild(T), B = null;
            else {
              for (N = h, _ = 0; (N = N.nextSibling) && _ < k; _ += 2)
                if (N == T)
                  break t;
              t.insertBefore(T, h), B = h;
            }
          e.type == "option" && (t.value = "");
        }
        h = B !== void 0 ? B : T.nextSibling, typeof e.type == "function" && (e.__d = h);
      } else
        h && O.__e == h && h.parentNode != t && (h = tr(O));
    }
    return v++, C;
  }), e.__e = P, o != null && typeof e.type != "function")
    for (v = o.length; v--; )
      o[v] != null && Fi(o[v]);
  for (v = k; v--; )
    S[v] != null && Ge(S[v], S[v]);
  if (j)
    for (v = 0; v < j.length; v++)
      Yi(j[v], j[++v], j[++v]);
}
function he(t, e, r) {
  if (r == null && (r = []), t == null || typeof t == "boolean")
    e && r.push(e(null));
  else if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      he(t[n], e, r);
  else
    r.push(e ? e(typeof t == "string" || typeof t == "number" ? gr(null, t, null, null, t) : t.__e != null || t.__c != null ? gr(t.type, t.props, t.key, null, t.__v) : t) : t);
  return r;
}
function nl(t, e, r, n, s) {
  var o;
  for (o in r)
    o === "children" || o === "key" || o in e || yr(t, o, null, r[o], n);
  for (o in e)
    s && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || r[o] === e[o] || yr(t, o, e[o], r[o], n);
}
function co(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r) : t[e] = typeof r == "number" && el.test(e) === !1 ? r + "px" : r != null ? r : "";
}
function yr(t, e, r, n, s) {
  var o, c, h, y, v;
  if (s ? e === "className" && (e = "class") : e === "class" && (e = "className"), e === "style")
    if (o = t.style, typeof r == "string")
      o.cssText = r;
    else {
      if (typeof n == "string" && (o.cssText = "", n = null), n)
        for (y in n)
          r && y in r || co(o, y, "");
      if (r)
        for (v in r)
          n && r[v] === n[v] || co(o, v, r[v]);
    }
  else
    e[0] === "o" && e[1] === "n" ? (c = e !== (e = e.replace(/Capture$/, "")), h = e.toLowerCase(), e = (h in t ? h : e).slice(2), r ? (n || t.addEventListener(e, po, c), (t.l || (t.l = {}))[e] = r) : t.removeEventListener(e, po, c)) : e !== "list" && e !== "tagName" && e !== "form" && e !== "type" && e !== "size" && !s && e in t ? t[e] = r != null ? r : "" : typeof r != "function" && e !== "dangerouslySetInnerHTML" && (e !== (e = e.replace(/^xlink:?/, "")) ? r == null || r === !1 ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function po(t) {
  this.l[t.type](st.event ? st.event(t) : t);
}
function jn(t, e, r, n, s, o, c, h, y) {
  var v, _, O, T, N, P, j, S, k, C, B = e.type;
  if (e.constructor !== void 0)
    return null;
  (v = st.__b) && v(e);
  try {
    t:
      if (typeof B == "function") {
        if (S = e.props, k = (v = B.contextType) && n[v.__c], C = v ? k ? k.props.value : v.__ : n, r.__c ? j = (_ = e.__c = r.__c).__ = _.__E : ("prototype" in B && B.prototype.render ? e.__c = _ = new B(S, C) : (e.__c = _ = new qt(S, C), _.constructor = B, _.render = il), k && k.sub(_), _.props = S, _.state || (_.state = {}), _.context = C, _.__n = n, O = _.__d = !0, _.__h = []), _.__s == null && (_.__s = _.state), B.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = Kt({}, _.__s)), Kt(_.__s, B.getDerivedStateFromProps(S, _.__s))), T = _.props, N = _.state, O)
          B.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (B.getDerivedStateFromProps == null && S !== T && _.componentWillReceiveProps != null && _.componentWillReceiveProps(S, C), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(S, _.__s, C) === !1 || e.__v === r.__v && !_.__) {
            for (_.props = S, _.state = _.__s, e.__v !== r.__v && (_.__d = !1), _.__v = e, e.__e = r.__e, e.__k = r.__k, _.__h.length && c.push(_), v = 0; v < e.__k.length; v++)
              e.__k[v] && (e.__k[v].__ = e);
            break t;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(S, _.__s, C), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(T, N, P);
          });
        }
        _.context = C, _.props = S, _.state = _.__s, (v = st.__r) && v(e), _.__d = !1, _.__v = e, _.__P = t, v = _.render(_.props, _.state, _.context), e.__k = v != null && v.type == rr && v.key == null ? v.props.children : Array.isArray(v) ? v : [v], _.getChildContext != null && (n = Kt(Kt({}, n), _.getChildContext())), O || _.getSnapshotBeforeUpdate == null || (P = _.getSnapshotBeforeUpdate(T, N)), Zi(t, e, r, n, s, o, c, h, y), _.base = e.__e, _.__h.length && c.push(_), j && (_.__E = _.__ = null), _.__e = !1;
      } else
        o == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = ol(r.__e, e, r, n, s, o, c, y);
    (v = st.diffed) && v(e);
  } catch (W) {
    e.__v = null, st.__e(W, e, r);
  }
  return e.__e;
}
function zi(t, e) {
  st.__c && st.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      st.__e(n, r.__v);
    }
  });
}
function ol(t, e, r, n, s, o, c, h) {
  var y, v, _, O, T, N = r.props, P = e.props;
  if (s = e.type === "svg" || s, o != null) {
    for (y = 0; y < o.length; y++)
      if ((v = o[y]) != null && ((e.type === null ? v.nodeType === 3 : v.localName === e.type) || t == v)) {
        t = v, o[y] = null;
        break;
      }
  }
  if (t == null) {
    if (e.type === null)
      return document.createTextNode(P);
    t = s ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, P.is && { is: P.is }), o = null, h = !1;
  }
  if (e.type === null)
    N !== P && t.data != P && (t.data = P);
  else {
    if (o != null && (o = Lr.slice.call(t.childNodes)), _ = (N = r.props || Gt).dangerouslySetInnerHTML, O = P.dangerouslySetInnerHTML, !h) {
      if (N === Gt)
        for (N = {}, T = 0; T < t.attributes.length; T++)
          N[t.attributes[T].name] = t.attributes[T].value;
      (O || _) && (O && _ && O.__html == _.__html || (t.innerHTML = O && O.__html || ""));
    }
    nl(t, P, N, s, h), O ? e.__k = [] : (e.__k = e.props.children, Zi(t, e, r, n, e.type !== "foreignObject" && s, o, c, Gt, h)), h || ("value" in P && (y = P.value) !== void 0 && y !== t.value && yr(t, "value", y, N.value, !1), "checked" in P && (y = P.checked) !== void 0 && y !== t.checked && yr(t, "checked", y, N.checked, !1));
  }
  return t;
}
function Yi(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    st.__e(n, r);
  }
}
function Ge(t, e, r) {
  var n, s, o;
  if (st.unmount && st.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Yi(n, null, e)), r || typeof t.type == "function" || (r = (s = t.__e) != null), t.__e = t.__d = void 0, (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (c) {
        st.__e(c, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (o = 0; o < n.length; o++)
      n[o] && Ge(n[o], e, r);
  s != null && Fi(s);
}
function il(t, e, r) {
  return this.constructor(t, r);
}
function er(t, e, r) {
  var n, s, o;
  st.__ && st.__(t, e), s = (n = r === Tn) ? null : r && r.__k || e.__k, t = Xt(rr, null, [t]), o = [], jn(e, (n ? e : r || e).__k = t, s || Gt, Gt, e.ownerSVGElement !== void 0, r && !n ? [r] : s ? null : Lr.slice.call(e.childNodes), o, r || Gt, n), zi(o, t);
}
function $i(t, e) {
  er(t, e, Tn);
}
function sl(t, e) {
  var r, n;
  for (n in e = Kt(Kt({}, t.props), e), arguments.length > 2 && (e.children = Lr.slice.call(arguments, 2)), r = {}, e)
    n !== "key" && n !== "ref" && (r[n] = e[n]);
  return gr(t.type, r, e.key || t.key, e.ref || t.ref, null);
}
function Vi(t) {
  var e = {}, r = { __c: "__cC" + Hi++, __: t, Consumer: function(n, s) {
    return n.children(s);
  }, Provider: function(n) {
    var s, o = this;
    return this.getChildContext || (s = [], this.getChildContext = function() {
      return e[r.__c] = o, e;
    }, this.shouldComponentUpdate = function(c) {
      o.props.value !== c.value && s.some(function(h) {
        h.context = c.value, cr(h);
      });
    }, this.sub = function(c) {
      s.push(c);
      var h = c.componentWillUnmount;
      c.componentWillUnmount = function() {
        s.splice(s.indexOf(c), 1), h && h.call(c);
      };
    }), n.children;
  } };
  return r.Consumer.contextType = r, r.Provider.__ = r, r;
}
st = { __e: function(t, e) {
  for (var r, n; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(t))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(t)), n)
          return cr(r.__E = r);
      } catch (s) {
        t = s;
      }
  throw t;
} }, qt.prototype.setState = function(t, e) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof t == "function" && (t = t(r, this.props)), t && Kt(r, t), t != null && this.__v && (e && this.__h.push(e), cr(this));
}, qt.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), cr(this));
}, qt.prototype.render = rr, Ke = [], Rn = 0, Di = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Tn = Gt, Hi = 0;
var Le, Dt, mo, Pe = 0, gn = [], go = st.__r, yo = st.diffed, vo = st.__c, _o = st.unmount;
function He(t, e) {
  st.__h && st.__h(Dt, t, Pe || e), Pe = 0;
  var r = Dt.__H || (Dt.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Pn(t) {
  return Pe = 1, Un(es, t);
}
function Un(t, e, r) {
  var n = He(Le++, 2);
  return n.__c || (n.__c = Dt, n.__ = [r ? r(e) : es(void 0, e), function(s) {
    var o = t(n.__[0], s);
    n.__[0] !== o && (n.__[0] = o, n.__c.setState({}));
  }]), n.__;
}
function Ji(t, e) {
  var r = He(Le++, 3);
  !st.__s && Dn(r.__H, e) && (r.__ = t, r.__H = e, Dt.__H.__h.push(r));
}
function In(t, e) {
  var r = He(Le++, 4);
  !st.__s && Dn(r.__H, e) && (r.__ = t, r.__H = e, Dt.__h.push(r));
}
function Ki(t) {
  return Pe = 5, Cr(function() {
    return { current: t };
  }, []);
}
function Gi(t, e, r) {
  Pe = 6, In(function() {
    typeof t == "function" ? t(e()) : t && (t.current = e());
  }, r == null ? r : r.concat(t));
}
function Cr(t, e) {
  var r = He(Le++, 7);
  return Dn(r.__H, e) ? (r.__H = e, r.__h = t, r.__ = t()) : r.__;
}
function Xi(t, e) {
  return Pe = 8, Cr(function() {
    return t;
  }, e);
}
function Qi(t) {
  var e = Dt.context[t.__c], r = He(Le++, 9);
  return r.__c = t, e ? (r.__ == null && (r.__ = !0, e.sub(Dt)), e.props.value) : t.__;
}
function ts(t, e) {
  st.useDebugValue && st.useDebugValue(e ? e(t) : t);
}
function al(t) {
  var e = He(Le++, 10), r = Pn();
  return e.__ = t, Dt.componentDidCatch || (Dt.componentDidCatch = function(n) {
    e.__ && e.__(n), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function ul() {
  gn.some(function(t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(yn), t.__H.__h.forEach(vn), t.__H.__h = [];
      } catch (e) {
        return t.__H.__h = [], st.__e(e, t.__v), !0;
      }
  }), gn = [];
}
function yn(t) {
  t.t && t.t();
}
function vn(t) {
  var e = t.__();
  typeof e == "function" && (t.t = e);
}
function Dn(t, e) {
  return !t || e.some(function(r, n) {
    return r !== t[n];
  });
}
function es(t, e) {
  return typeof e == "function" ? e(t) : e;
}
st.__r = function(t) {
  go && go(t), Le = 0, (Dt = t.__c).__H && (Dt.__H.__h.forEach(yn), Dt.__H.__h.forEach(vn), Dt.__H.__h = []);
}, st.diffed = function(t) {
  yo && yo(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    r && r.__h.length && (gn.push(e) !== 1 && mo === st.requestAnimationFrame || ((mo = st.requestAnimationFrame) || function(n) {
      var s, o = function() {
        clearTimeout(c), cancelAnimationFrame(s), setTimeout(n);
      }, c = setTimeout(o, 100);
      typeof window < "u" && (s = requestAnimationFrame(o));
    })(ul));
  }
}, st.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(yn), r.__h = r.__h.filter(function(n) {
        return !n.__ || vn(n);
      });
    } catch (n) {
      e.some(function(s) {
        s.__h && (s.__h = []);
      }), e = [], st.__e(n, r.__v);
    }
  }), vo && vo(t, e);
}, st.unmount = function(t) {
  _o && _o(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    if (r)
      try {
        r.__.forEach(function(n) {
          return n.t && n.t();
        });
      } catch (n) {
        st.__e(n, e.__v);
      }
  }
};
function Hn(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function _n(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
var rs = function(t) {
  var e, r;
  function n(s) {
    var o;
    return (o = t.call(this, s) || this).isPureReactComponent = !0, o;
  }
  return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.shouldComponentUpdate = function(s, o) {
    return _n(this.props, s) || _n(this.state, o);
  }, n;
}(qt);
function ns(t, e) {
  function r(s) {
    var o = this.props.ref, c = o == s.ref;
    return !c && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, s) || !c : _n(this.props, s);
  }
  function n(s) {
    return this.shouldComponentUpdate = r, Xt(t, Hn({}, s));
  }
  return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.t = !0, n;
}
var wo = st.__b;
function os(t) {
  function e(r) {
    var n = Hn({}, r);
    return delete n.ref, t(n, r.ref);
  }
  return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
st.__b = function(t) {
  t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), wo && wo(t);
};
var bo = function(t, e) {
  return t ? he(t).reduce(function(r, n, s) {
    return r.concat(e(n, s));
  }, []) : null;
}, is = { map: bo, forEach: bo, count: function(t) {
  return t ? he(t).length : 0;
}, only: function(t) {
  if ((t = he(t)).length !== 1)
    throw new Error("Children.only() expects only one child.");
  return t[0];
}, toArray: he }, hl = st.__e;
function ss(t) {
  return t && ((t = Hn({}, t)).__c = null, t.__k = t.__k && t.__k.map(ss)), t;
}
function vr() {
  this.__u = 0, this.o = null, this.__b = null;
}
function as(t) {
  var e = t.__.__c;
  return e && e.u && e.u(t);
}
function us(t) {
  var e, r, n;
  function s(o) {
    if (e || (e = t()).then(function(c) {
      r = c.default || c;
    }, function(c) {
      n = c;
    }), n)
      throw n;
    if (!r)
      throw e;
    return Xt(r, o);
  }
  return s.displayName = "Lazy", s.t = !0, s;
}
function Ne() {
  this.i = null, this.l = null;
}
st.__e = function(t, e, r) {
  if (t.then) {
    for (var n, s = e; s = s.__; )
      if ((n = s.__c) && n.__c)
        return n.__c(t, e.__c);
  }
  hl(t, e, r);
}, (vr.prototype = new qt()).__c = function(t, e) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(e);
  var n = as(r.__v), s = !1, o = function() {
    s || (s = !0, n ? n(c) : c());
  };
  e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
    o(), e.__c && e.__c();
  };
  var c = function() {
    var h;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); h = r.o.pop(); )
        h.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), t.then(o, o);
}, vr.prototype.render = function(t, e) {
  return this.__b && (this.__v.__k[0] = ss(this.__b), this.__b = null), [Xt(qt, null, e.u ? null : t.children), e.u && t.fallback];
};
var Mo = function(t, e, r) {
  if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
    for (r = t.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.i = r = r[2];
    }
};
(Ne.prototype = new qt()).u = function(t) {
  var e = this, r = as(e.__v), n = e.l.get(t);
  return n[0]++, function(s) {
    var o = function() {
      e.props.revealOrder ? (n.push(s), Mo(e, t, n)) : s();
    };
    r ? r(o) : o();
  };
}, Ne.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = he(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.l.set(e[r], this.i = [1, 0, this.i]);
  return t.children;
}, Ne.prototype.componentDidUpdate = Ne.prototype.componentDidMount = function() {
  var t = this;
  t.l.forEach(function(e, r) {
    Mo(t, r, e);
  });
};
var ll = function() {
  function t() {
  }
  var e = t.prototype;
  return e.getChildContext = function() {
    return this.props.context;
  }, e.render = function(r) {
    return r.children;
  }, t;
}();
function fl(t) {
  var e = this, r = t.container, n = Xt(ll, { context: e.context }, t.vnode);
  return e.s && e.s !== r && (e.v.parentNode && e.s.removeChild(e.v), Ge(e.h), e.p = !1), t.vnode ? e.p ? (r.__k = e.__k, er(n, r), e.__k = r.__k) : (e.v = document.createTextNode(""), $i("", r), r.appendChild(e.v), e.p = !0, e.s = r, er(n, r, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), Ge(e.h)), e.h = n, e.componentWillUnmount = function() {
    e.v.parentNode && e.s.removeChild(e.v), Ge(e.h);
  }, null;
}
function hs(t, e) {
  return Xt(fl, { vnode: t, container: e });
}
var Eo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
qt.prototype.isReactComponent = {};
var ls = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
function wn(t, e, r) {
  if (e.__k == null)
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  return er(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function cl(t, e, r) {
  return $i(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
var Ao = st.event;
function $r(t, e) {
  t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, { configurable: !1, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(r) {
    this["UNSAFE_" + e] = r;
  } });
}
st.event = function(t) {
  Ao && (t = Ao(t)), t.persist = function() {
  };
  var e = !1, r = !1, n = t.stopPropagation;
  t.stopPropagation = function() {
    n.call(t), e = !0;
  };
  var s = t.preventDefault;
  return t.preventDefault = function() {
    s.call(t), r = !0;
  }, t.isPropagationStopped = function() {
    return e;
  }, t.isDefaultPrevented = function() {
    return r;
  }, t.nativeEvent = t;
};
var Lo = { configurable: !0, get: function() {
  return this.class;
} }, Co = st.vnode;
st.vnode = function(t) {
  t.$$typeof = ls;
  var e = t.type, r = t.props;
  if (e) {
    if (r.class != r.className && (Lo.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", Lo)), typeof e != "function") {
      var n, s, o;
      for (o in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && e === "select" && (he(r.children).forEach(function(c) {
        r.value.indexOf(c.props.value) != -1 && (c.props.selected = !0);
      }), delete r.value), r)
        if (n = Eo.test(o))
          break;
      if (n)
        for (o in s = t.props = {}, r)
          s[Eo.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o];
    }
    (function(c) {
      var h = t.type, y = t.props;
      if (y && typeof h == "string") {
        var v = {};
        for (var _ in y)
          /^on(Ani|Tra|Tou)/.test(_) && (y[_.toLowerCase()] = y[_], delete y[_]), v[_.toLowerCase()] = _;
        if (v.ondoubleclick && (y.ondblclick = y[v.ondoubleclick], delete y[v.ondoubleclick]), v.onbeforeinput && (y.onbeforeinput = y[v.onbeforeinput], delete y[v.onbeforeinput]), v.onchange && (h === "textarea" || h.toLowerCase() === "input" && !/^fil|che|ra/i.test(y.type))) {
          var O = v.oninput || "oninput";
          y[O] || (y[O] = y[v.onchange], delete y[v.onchange]);
        }
      }
    })(), typeof e == "function" && !e.m && e.prototype && ($r(e.prototype, "componentWillMount"), $r(e.prototype, "componentWillReceiveProps"), $r(e.prototype, "componentWillUpdate"), e.m = !0);
  }
  Co && Co(t);
};
var pl = "16.8.0";
function fs(t) {
  return Xt.bind(null, t);
}
function Fn(t) {
  return !!t && t.$$typeof === ls;
}
function cs(t) {
  return Fn(t) ? sl.apply(null, arguments) : t;
}
function ps(t) {
  return !!t.__k && (er(null, t), !0);
}
function ds(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var ms = function(t, e) {
  return t(e);
}, dl = { useState: Pn, useReducer: Un, useEffect: Ji, useLayoutEffect: In, useRef: Ki, useImperativeHandle: Gi, useMemo: Cr, useCallback: Xi, useContext: Qi, useDebugValue: ts, version: "16.8.0", Children: is, render: wn, hydrate: wn, unmountComponentAtNode: ps, createPortal: hs, createElement: Xt, createContext: Vi, createFactory: fs, cloneElement: cs, createRef: Wi, Fragment: rr, isValidElement: Fn, findDOMNode: ds, Component: qt, PureComponent: rs, memo: ns, forwardRef: os, unstable_batchedUpdates: ms, Suspense: vr, SuspenseList: Ne, lazy: us }, ml = Object.freeze({ __proto__: null, default: dl, version: pl, Children: is, render: wn, hydrate: cl, unmountComponentAtNode: ps, createPortal: hs, createFactory: fs, cloneElement: cs, isValidElement: Fn, findDOMNode: ds, PureComponent: rs, memo: ns, forwardRef: os, unstable_batchedUpdates: ms, Suspense: vr, SuspenseList: Ne, lazy: us, createElement: Xt, createContext: Vi, createRef: Wi, Fragment: rr, Component: qt, useState: Pn, useReducer: Un, useEffect: Ji, useLayoutEffect: In, useRef: Ki, useImperativeHandle: Gi, useMemo: Cr, useCallback: Xi, useContext: Qi, useDebugValue: ts, useErrorBoundary: al });
_r(ml);
function gs(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
gs(ze);
gs(tl);
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var ys = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function s(y, v, _) {
    this.fn = y, this.context = v, this.once = _ || !1;
  }
  function o(y, v, _, O, T) {
    if (typeof _ != "function")
      throw new TypeError("The listener must be a function");
    var N = new s(_, O || y, T), P = r ? r + v : v;
    return y._events[P] ? y._events[P].fn ? y._events[P] = [y._events[P], N] : y._events[P].push(N) : (y._events[P] = N, y._eventsCount++), y;
  }
  function c(y, v) {
    --y._eventsCount === 0 ? y._events = new n() : delete y._events[v];
  }
  function h() {
    this._events = new n(), this._eventsCount = 0;
  }
  h.prototype.eventNames = function() {
    var y = [], v, _;
    if (this._eventsCount === 0)
      return y;
    for (_ in v = this._events)
      e.call(v, _) && y.push(r ? _.slice(1) : _);
    return Object.getOwnPropertySymbols ? y.concat(Object.getOwnPropertySymbols(v)) : y;
  }, h.prototype.listeners = function(y) {
    var v = r ? r + y : y, _ = this._events[v];
    if (!_)
      return [];
    if (_.fn)
      return [_.fn];
    for (var O = 0, T = _.length, N = new Array(T); O < T; O++)
      N[O] = _[O].fn;
    return N;
  }, h.prototype.listenerCount = function(y) {
    var v = r ? r + y : y, _ = this._events[v];
    return _ ? _.fn ? 1 : _.length : 0;
  }, h.prototype.emit = function(y, v, _, O, T, N) {
    var P = r ? r + y : y;
    if (!this._events[P])
      return !1;
    var j = this._events[P], S = arguments.length, k, C;
    if (j.fn) {
      switch (j.once && this.removeListener(y, j.fn, void 0, !0), S) {
        case 1:
          return j.fn.call(j.context), !0;
        case 2:
          return j.fn.call(j.context, v), !0;
        case 3:
          return j.fn.call(j.context, v, _), !0;
        case 4:
          return j.fn.call(j.context, v, _, O), !0;
        case 5:
          return j.fn.call(j.context, v, _, O, T), !0;
        case 6:
          return j.fn.call(j.context, v, _, O, T, N), !0;
      }
      for (C = 1, k = new Array(S - 1); C < S; C++)
        k[C - 1] = arguments[C];
      j.fn.apply(j.context, k);
    } else {
      var B = j.length, W;
      for (C = 0; C < B; C++)
        switch (j[C].once && this.removeListener(y, j[C].fn, void 0, !0), S) {
          case 1:
            j[C].fn.call(j[C].context);
            break;
          case 2:
            j[C].fn.call(j[C].context, v);
            break;
          case 3:
            j[C].fn.call(j[C].context, v, _);
            break;
          case 4:
            j[C].fn.call(j[C].context, v, _, O);
            break;
          default:
            if (!k)
              for (W = 1, k = new Array(S - 1); W < S; W++)
                k[W - 1] = arguments[W];
            j[C].fn.apply(j[C].context, k);
        }
    }
    return !0;
  }, h.prototype.on = function(y, v, _) {
    return o(this, y, v, _, !1);
  }, h.prototype.once = function(y, v, _) {
    return o(this, y, v, _, !0);
  }, h.prototype.removeListener = function(y, v, _, O) {
    var T = r ? r + y : y;
    if (!this._events[T])
      return this;
    if (!v)
      return c(this, T), this;
    var N = this._events[T];
    if (N.fn)
      N.fn === v && (!O || N.once) && (!_ || N.context === _) && c(this, T);
    else {
      for (var P = 0, j = [], S = N.length; P < S; P++)
        (N[P].fn !== v || O && !N[P].once || _ && N[P].context !== _) && j.push(N[P]);
      j.length ? this._events[T] = j.length === 1 ? j[0] : j : c(this, T);
    }
    return this;
  }, h.prototype.removeAllListeners = function(y) {
    var v;
    return y ? (v = r ? r + y : y, this._events[v] && c(this, v)) : (this._events = new n(), this._eventsCount = 0), this;
  }, h.prototype.off = h.prototype.removeListener, h.prototype.addListener = h.prototype.on, h.prefixed = r, h.EventEmitter = h, t.exports = h;
})(ys);
ys.exports;
var vs = {}, bn = {}, xe = {}, Mn = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(t, e) {
  (function(r) {
    var n = e && !e.nodeType && e, s = t && !t.nodeType && t, o = typeof Ut == "object" && Ut;
    (o.global === o || o.window === o || o.self === o) && (r = o);
    var c, h = 2147483647, y = 36, v = 1, _ = 26, O = 38, T = 700, N = 72, P = 128, j = "-", S = /^xn--/, k = /[^\x20-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, B = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, W = y - v, Y = Math.floor, J = String.fromCharCode, ot;
    function tt(H) {
      throw RangeError(B[H]);
    }
    function lt(H, U) {
      for (var F = H.length, G = []; F--; )
        G[F] = U(H[F]);
      return G;
    }
    function i(H, U) {
      var F = H.split("@"), G = "";
      F.length > 1 && (G = F[0] + "@", H = F[1]), H = H.replace(C, ".");
      var Q = H.split("."), p = lt(Q, U).join(".");
      return G + p;
    }
    function f(H) {
      for (var U = [], F = 0, G = H.length, Q, p; F < G; )
        Q = H.charCodeAt(F++), Q >= 55296 && Q <= 56319 && F < G ? (p = H.charCodeAt(F++), (p & 64512) == 56320 ? U.push(((Q & 1023) << 10) + (p & 1023) + 65536) : (U.push(Q), F--)) : U.push(Q);
      return U;
    }
    function d(H) {
      return lt(H, function(U) {
        var F = "";
        return U > 65535 && (U -= 65536, F += J(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), F += J(U), F;
      }).join("");
    }
    function g(H) {
      return H - 48 < 10 ? H - 22 : H - 65 < 26 ? H - 65 : H - 97 < 26 ? H - 97 : y;
    }
    function M(H, U) {
      return H + 22 + 75 * (H < 26) - ((U != 0) << 5);
    }
    function E(H, U, F) {
      var G = 0;
      for (H = F ? Y(H / T) : H >> 1, H += Y(H / U); H > W * _ >> 1; G += y)
        H = Y(H / W);
      return Y(G + (W + 1) * H / (H + O));
    }
    function L(H) {
      var U = [], F = H.length, G, Q = 0, p = P, I = N, R, D, K, z, Z, X, et, V, ht;
      for (R = H.lastIndexOf(j), R < 0 && (R = 0), D = 0; D < R; ++D)
        H.charCodeAt(D) >= 128 && tt("not-basic"), U.push(H.charCodeAt(D));
      for (K = R > 0 ? R + 1 : 0; K < F; ) {
        for (z = Q, Z = 1, X = y; K >= F && tt("invalid-input"), et = g(H.charCodeAt(K++)), (et >= y || et > Y((h - Q) / Z)) && tt("overflow"), Q += et * Z, V = X <= I ? v : X >= I + _ ? _ : X - I, !(et < V); X += y)
          ht = y - V, Z > Y(h / ht) && tt("overflow"), Z *= ht;
        G = U.length + 1, I = E(Q - z, G, z == 0), Y(Q / G) > h - p && tt("overflow"), p += Y(Q / G), Q %= G, U.splice(Q++, 0, p);
      }
      return d(U);
    }
    function w(H) {
      var U, F, G, Q, p, I, R, D, K, z, Z, X = [], et, V, ht, a;
      for (H = f(H), et = H.length, U = P, F = 0, p = N, I = 0; I < et; ++I)
        Z = H[I], Z < 128 && X.push(J(Z));
      for (G = Q = X.length, Q && X.push(j); G < et; ) {
        for (R = h, I = 0; I < et; ++I)
          Z = H[I], Z >= U && Z < R && (R = Z);
        for (V = G + 1, R - U > Y((h - F) / V) && tt("overflow"), F += (R - U) * V, U = R, I = 0; I < et; ++I)
          if (Z = H[I], Z < U && ++F > h && tt("overflow"), Z == U) {
            for (D = F, K = y; z = K <= p ? v : K >= p + _ ? _ : K - p, !(D < z); K += y)
              a = D - z, ht = y - z, X.push(J(M(z + a % ht, 0))), D = Y(a / ht);
            X.push(J(M(D, 0))), p = E(F, V, G == Q), F = 0, ++G;
          }
        ++F, ++U;
      }
      return X.join("");
    }
    function u(H) {
      return i(H, function(U) {
        return S.test(U) ? L(U.slice(4).toLowerCase()) : U;
      });
    }
    function b(H) {
      return i(H, function(U) {
        return k.test(U) ? "xn--" + w(U) : U;
      });
    }
    if (c = { version: "1.3.2", ucs2: { decode: f, encode: d }, decode: L, encode: w, toASCII: b, toUnicode: u }, n && s)
      if (t.exports == n)
        s.exports = c;
      else
        for (ot in c)
          c.hasOwnProperty(ot) && (n[ot] = c[ot]);
    else
      r.punycode = c;
  })(Ut);
})(Mn, Mn.exports);
var gl = { isString: function(t) {
  return typeof t == "string";
}, isObject: function(t) {
  return typeof t == "object" && t !== null;
}, isNull: function(t) {
  return t === null;
}, isNullOrUndefined: function(t) {
  return t == null;
} }, $e = {};
function yl(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var vl = function(t, e, r, n) {
  e = e || "&", r = r || "=";
  var s = {};
  if (typeof t != "string" || t.length === 0)
    return s;
  var o = /\+/g;
  t = t.split(e);
  var c = 1e3;
  n && typeof n.maxKeys == "number" && (c = n.maxKeys);
  var h = t.length;
  c > 0 && h > c && (h = c);
  for (var y = 0; y < h; ++y) {
    var v = t[y].replace(o, "%20"), _ = v.indexOf(r), O, T, N, P;
    _ >= 0 ? (O = v.substr(0, _), T = v.substr(_ + 1)) : (O = v, T = ""), N = decodeURIComponent(O), P = decodeURIComponent(T), yl(s, N) ? Array.isArray(s[N]) ? s[N].push(P) : s[N] = [s[N], P] : s[N] = P;
  }
  return s;
}, qe = function(t) {
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
}, _l = function(t, e, r, n) {
  return e = e || "&", r = r || "=", t === null && (t = void 0), typeof t == "object" ? Object.keys(t).map(function(s) {
    var o = encodeURIComponent(qe(s)) + r;
    return Array.isArray(t[s]) ? t[s].map(function(c) {
      return o + encodeURIComponent(qe(c));
    }).join(e) : o + encodeURIComponent(qe(t[s]));
  }).join(e) : n ? encodeURIComponent(qe(n)) + r + encodeURIComponent(qe(t)) : "";
};
$e.decode = $e.parse = vl, $e.encode = $e.stringify = _l;
var wl = Mn.exports, zt = gl;
xe.parse = nr, xe.resolve = Ol, xe.resolveObject = xl, xe.format = Bl, xe.Url = Wt;
function Wt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var bl = /^([a-z0-9.+-]+:)/i, Ml = /:[0-9]*$/, El = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Al = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Ll = ["{", "}", "|", "\\", "^", "`"].concat(Al), En = ["'"].concat(Ll), So = ["%", "/", "?", ";", "#"].concat(En), ko = ["/", "?", "#"], Cl = 255, Bo = /^[+a-z0-9A-Z_-]{0,63}$/, Sl = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, kl = { javascript: !0, "javascript:": !0 }, An = { javascript: !0, "javascript:": !0 }, Re = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, Ln = $e;
function nr(t, e, r) {
  if (t && zt.isObject(t) && t instanceof Wt)
    return t;
  var n = new Wt();
  return n.parse(t, e, r), n;
}
Wt.prototype.parse = function(t, e, r) {
  if (!zt.isString(t))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
  var n = t.indexOf("?"), s = n !== -1 && n < t.indexOf("#") ? "?" : "#", o = t.split(s), c = /\\/g;
  o[0] = o[0].replace(c, "/"), t = o.join(s);
  var h = t;
  if (h = h.trim(), !r && t.split("#").length === 1) {
    var y = El.exec(h);
    if (y)
      return this.path = h, this.href = h, this.pathname = y[1], y[2] ? (this.search = y[2], e ? this.query = Ln.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
  }
  var v = bl.exec(h);
  if (v) {
    v = v[0];
    var _ = v.toLowerCase();
    this.protocol = _, h = h.substr(v.length);
  }
  if (r || v || h.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var O = h.substr(0, 2) === "//";
    O && !(v && An[v]) && (h = h.substr(2), this.slashes = !0);
  }
  if (!An[v] && (O || v && !Re[v])) {
    for (var T = -1, N = 0; N < ko.length; N++) {
      var P = h.indexOf(ko[N]);
      P !== -1 && (T === -1 || P < T) && (T = P);
    }
    var j, S;
    T === -1 ? S = h.lastIndexOf("@") : S = h.lastIndexOf("@", T), S !== -1 && (j = h.slice(0, S), h = h.slice(S + 1), this.auth = decodeURIComponent(j)), T = -1;
    for (var N = 0; N < So.length; N++) {
      var P = h.indexOf(So[N]);
      P !== -1 && (T === -1 || P < T) && (T = P);
    }
    T === -1 && (T = h.length), this.host = h.slice(0, T), h = h.slice(T), this.parseHost(), this.hostname = this.hostname || "";
    var k = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!k)
      for (var C = this.hostname.split(/\./), N = 0, B = C.length; N < B; N++) {
        var W = C[N];
        if (!!W && !W.match(Bo)) {
          for (var Y = "", J = 0, ot = W.length; J < ot; J++)
            W.charCodeAt(J) > 127 ? Y += "x" : Y += W[J];
          if (!Y.match(Bo)) {
            var tt = C.slice(0, N), lt = C.slice(N + 1), i = W.match(Sl);
            i && (tt.push(i[1]), lt.unshift(i[2])), lt.length && (h = "/" + lt.join(".") + h), this.hostname = tt.join(".");
            break;
          }
        }
      }
    this.hostname.length > Cl ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), k || (this.hostname = wl.toASCII(this.hostname));
    var f = this.port ? ":" + this.port : "", d = this.hostname || "";
    this.host = d + f, this.href += this.host, k && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), h[0] !== "/" && (h = "/" + h));
  }
  if (!kl[_])
    for (var N = 0, B = En.length; N < B; N++) {
      var g = En[N];
      if (h.indexOf(g) !== -1) {
        var M = encodeURIComponent(g);
        M === g && (M = escape(g)), h = h.split(g).join(M);
      }
    }
  var E = h.indexOf("#");
  E !== -1 && (this.hash = h.substr(E), h = h.slice(0, E));
  var L = h.indexOf("?");
  if (L !== -1 ? (this.search = h.substr(L), this.query = h.substr(L + 1), e && (this.query = Ln.parse(this.query)), h = h.slice(0, L)) : e && (this.search = "", this.query = {}), h && (this.pathname = h), Re[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var f = this.pathname || "", w = this.search || "";
    this.path = f + w;
  }
  return this.href = this.format(), this;
};
function Bl(t) {
  return zt.isString(t) && (t = nr(t)), t instanceof Wt ? t.format() : Wt.prototype.format.call(t);
}
Wt.prototype.format = function() {
  var t = this.auth || "";
  t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
  var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", s = !1, o = "";
  this.host ? s = t + this.host : this.hostname && (s = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && zt.isObject(this.query) && Object.keys(this.query).length && (o = Ln.stringify(this.query));
  var c = this.search || o && "?" + o || "";
  return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || Re[e]) && s !== !1 ? (s = "//" + (s || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : s || (s = ""), n && n.charAt(0) !== "#" && (n = "#" + n), c && c.charAt(0) !== "?" && (c = "?" + c), r = r.replace(/[?#]/g, function(h) {
    return encodeURIComponent(h);
  }), c = c.replace("#", "%23"), e + s + r + c + n;
};
function Ol(t, e) {
  return nr(t, !1, !0).resolve(e);
}
Wt.prototype.resolve = function(t) {
  return this.resolveObject(nr(t, !1, !0)).format();
};
function xl(t, e) {
  return t ? nr(t, !1, !0).resolveObject(e) : e;
}
Wt.prototype.resolveObject = function(t) {
  if (zt.isString(t)) {
    var e = new Wt();
    e.parse(t, !1, !0), t = e;
  }
  for (var r = new Wt(), n = Object.keys(this), s = 0; s < n.length; s++) {
    var o = n[s];
    r[o] = this[o];
  }
  if (r.hash = t.hash, t.href === "")
    return r.href = r.format(), r;
  if (t.slashes && !t.protocol) {
    for (var c = Object.keys(t), h = 0; h < c.length; h++) {
      var y = c[h];
      y !== "protocol" && (r[y] = t[y]);
    }
    return Re[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (t.protocol && t.protocol !== r.protocol) {
    if (!Re[t.protocol]) {
      for (var v = Object.keys(t), _ = 0; _ < v.length; _++) {
        var O = v[_];
        r[O] = t[O];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = t.protocol, !t.host && !An[t.protocol]) {
      for (var B = (t.pathname || "").split("/"); B.length && !(t.host = B.shift()); )
        ;
      t.host || (t.host = ""), t.hostname || (t.hostname = ""), B[0] !== "" && B.unshift(""), B.length < 2 && B.unshift(""), r.pathname = B.join("/");
    } else
      r.pathname = t.pathname;
    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
      var T = r.pathname || "", N = r.search || "";
      r.path = T + N;
    }
    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
  }
  var P = r.pathname && r.pathname.charAt(0) === "/", j = t.host || t.pathname && t.pathname.charAt(0) === "/", S = j || P || r.host && t.pathname, k = S, C = r.pathname && r.pathname.split("/") || [], B = t.pathname && t.pathname.split("/") || [], W = r.protocol && !Re[r.protocol];
  if (W && (r.hostname = "", r.port = null, r.host && (C[0] === "" ? C[0] = r.host : C.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && (B[0] === "" ? B[0] = t.host : B.unshift(t.host)), t.host = null), S = S && (B[0] === "" || C[0] === "")), j)
    r.host = t.host || t.host === "" ? t.host : r.host, r.hostname = t.hostname || t.hostname === "" ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, C = B;
  else if (B.length)
    C || (C = []), C.pop(), C = C.concat(B), r.search = t.search, r.query = t.query;
  else if (!zt.isNullOrUndefined(t.search)) {
    if (W) {
      r.hostname = r.host = C.shift();
      var Y = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      Y && (r.auth = Y.shift(), r.host = r.hostname = Y.shift());
    }
    return r.search = t.search, r.query = t.query, (!zt.isNull(r.pathname) || !zt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!C.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var J = C.slice(-1)[0], ot = (r.host || t.host || C.length > 1) && (J === "." || J === "..") || J === "", tt = 0, lt = C.length; lt >= 0; lt--)
    J = C[lt], J === "." ? C.splice(lt, 1) : J === ".." ? (C.splice(lt, 1), tt++) : tt && (C.splice(lt, 1), tt--);
  if (!S && !k)
    for (; tt--; tt)
      C.unshift("..");
  S && C[0] !== "" && (!C[0] || C[0].charAt(0) !== "/") && C.unshift(""), ot && C.join("/").substr(-1) !== "/" && C.push("");
  var i = C[0] === "" || C[0] && C[0].charAt(0) === "/";
  if (W) {
    r.hostname = r.host = i ? "" : C.length ? C.shift() : "";
    var Y = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    Y && (r.auth = Y.shift(), r.host = r.hostname = Y.shift());
  }
  return S = S || r.host && C.length, S && !i && C.unshift(""), C.length ? r.pathname = C.join("/") : (r.pathname = null, r.path = null), (!zt.isNull(r.pathname) || !zt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
}, Wt.prototype.parseHost = function() {
  var t = this.host, e = Ml.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
var Nl = function() {
  function t(e) {
    this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  }
  return t;
}();
Wn.ProgressEvent = Nl;
var Fe = {}, Sr = Ut && Ut.__extends || function() {
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
Object.defineProperty(Fe, "__esModule", { value: !0 });
var Rl = function(t) {
  Sr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
Fe.SecurityError = Rl;
var Tl = function(t) {
  Sr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
Fe.InvalidStateError = Tl;
var jl = function(t) {
  Sr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
Fe.NetworkError = jl;
var Pl = function(t) {
  Sr(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
Fe.SyntaxError = Pl;
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
var Ul = function() {
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
      for (var n = 0, s = this.listeners[r]; n < s.length; n++) {
        var o = s[n];
        o.call(this, e);
      }
    var c = this["on" + r];
    return c && c.call(this, e), !0;
  }, t;
}();
or.XMLHttpRequestEventTarget = Ul;
var qn = {}, Il = Ut && Ut.__extends || function() {
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
Object.defineProperty(qn, "__esModule", { value: !0 });
var Dl = or, Hl = function(t) {
  Il(e, t);
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
        for (var n = new Buffer(r.byteLength), s = new Uint8Array(r), o = 0; o < r.byteLength; o++)
          n[o] = s[o];
        this._body = n;
      } else if (r.buffer && r.buffer instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), c = r.byteOffset, s = new Uint8Array(r.buffer), o = 0; o < r.byteLength; o++)
          n[o] = s[o + c];
        this._body = n;
      } else
        throw new Error("Unsupported send() data " + r);
  }, e.prototype._finalizeHeaders = function(r, n) {
    this._contentType && !n["content-type"] && (r["Content-Type"] = this._contentType), this._body && (r["Content-Length"] = this._body.length.toString());
  }, e.prototype._startUpload = function(r) {
    this._body && r.write(this._body), r.end();
  }, e;
}(Dl.XMLHttpRequestEventTarget);
qn.XMLHttpRequestUpload = Hl;
var pr = {};
(function() {
  function t(s, o, c, h) {
    return this instanceof t ? (this.domain = s || void 0, this.path = o || "/", this.secure = !!c, this.script = !!h, this) : new t(s, o, c, h);
  }
  t.All = Object.freeze(/* @__PURE__ */ Object.create(null)), pr.CookieAccessInfo = t;
  function e(s, o, c) {
    return s instanceof e ? s : this instanceof e ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(c || "/"), this.explicit_path = !1, this.domain = o || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, s && this.parse(s, o, c), this) : new e(s, o, c);
  }
  pr.Cookie = e, e.prototype.toString = function() {
    var s = [this.name + "=" + this.value];
    return this.expiration_date !== 1 / 0 && s.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && s.push("domain=" + this.domain), this.path && s.push("path=" + this.path), this.secure && s.push("secure"), this.noscript && s.push("httponly"), s.join("; ");
  }, e.prototype.toValueString = function() {
    return this.name + "=" + this.value;
  };
  var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
  e.prototype.parse = function(s, o, c) {
    if (this instanceof e) {
      var h = s.split(";").filter(function(T) {
        return !!T;
      }), y, v = h[0].match(/([^=]+)=([\s\S]*)/);
      if (!v) {
        console.warn("Invalid cookie header encountered. Header: '" + s + "'");
        return;
      }
      var _ = v[1], O = v[2];
      if (typeof _ != "string" || _.length === 0 || typeof O != "string") {
        console.warn("Unable to extract values from cookie header. Cookie: '" + s + "'");
        return;
      }
      for (this.name = _, this.value = O, y = 1; y < h.length; y += 1)
        switch (v = h[y].match(/([^=]+)(?:=([\s\S]*))?/), _ = v[1].trim().toLowerCase(), O = v[2], _) {
          case "httponly":
            this.noscript = !0;
            break;
          case "expires":
            this.expiration_date = O ? Number(Date.parse(O)) : 1 / 0;
            break;
          case "path":
            this.path = O ? O.trim() : "", this.explicit_path = !0;
            break;
          case "domain":
            this.domain = O ? O.trim() : "", this.explicit_domain = !!this.domain;
            break;
          case "secure":
            this.secure = !0;
            break;
        }
      return this.explicit_path || (this.path = c || "/"), this.explicit_domain || (this.domain = o), this;
    }
    return new e().parse(s, o, c);
  }, e.prototype.matches = function(s) {
    return s === t.All ? !0 : !(this.noscript && s.script || this.secure && !s.secure || !this.collidesWith(s));
  }, e.prototype.collidesWith = function(s) {
    if (this.path && !s.path || this.domain && !s.domain || this.path && s.path.indexOf(this.path) !== 0 || this.explicit_path && s.path.indexOf(this.path) !== 0)
      return !1;
    var o = s.domain && s.domain.replace(/^[\.]/, ""), c = this.domain && this.domain.replace(/^[\.]/, "");
    if (c === o)
      return !0;
    if (c) {
      if (!this.explicit_domain)
        return !1;
      var h = o.indexOf(c);
      return !(h === -1 || h !== o.length - c.length);
    }
    return !0;
  };
  function n() {
    var s, o, c;
    return this instanceof n ? (s = /* @__PURE__ */ Object.create(null), this.setCookie = function(h, y, v) {
      var _, O;
      if (h = new e(h, y, v), _ = h.expiration_date <= Date.now(), s[h.name] !== void 0) {
        for (o = s[h.name], O = 0; O < o.length; O += 1)
          if (c = o[O], c.collidesWith(h))
            return _ ? (o.splice(O, 1), o.length === 0 && delete s[h.name], !1) : (o[O] = h, h);
        return _ ? !1 : (o.push(h), h);
      }
      return _ ? !1 : (s[h.name] = [h], s[h.name]);
    }, this.getCookie = function(h, y) {
      var v, _;
      if (o = s[h], !!o)
        for (_ = 0; _ < o.length; _ += 1) {
          if (v = o[_], v.expiration_date <= Date.now()) {
            o.length === 0 && delete s[v.name];
            continue;
          }
          if (v.matches(y))
            return v;
        }
    }, this.getCookies = function(h) {
      var y = [], v, _;
      for (v in s)
        _ = this.getCookie(v, h), _ && y.push(_);
      return y.toString = function() {
        return y.join(":");
      }, y.toValueString = function() {
        return y.map(function(O) {
          return O.toValueString();
        }).join("; ");
      }, y;
    }, this) : new n();
  }
  pr.CookieJar = n, n.prototype.setCookies = function(s, o, c) {
    s = Array.isArray(s) ? s : s.split(r);
    var h = [], y, v;
    for (s = s.map(function(_) {
      return new e(_, o, c);
    }), y = 0; y < s.length; y += 1)
      v = s[y], this.setCookie(v, o, c) && h.push(v);
    return h;
  };
})();
var Fl = Ut && Ut.__extends || function() {
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
}(), Wl = Ut && Ut.__assign || Object.assign || function(t) {
  for (var e, r = 1, n = arguments.length; r < n; r++) {
    e = arguments[r];
    for (var s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
  }
  return t;
};
Object.defineProperty(bn, "__esModule", { value: !0 });
var Cn = Sn, _s = Sn, Oo = Sn, Vr = xe, xo = Wn, hr = Fe, ql = or, No = qn, Ro = pr, lr = function(t) {
  Fl(e, t);
  function e(r) {
    r === void 0 && (r = {});
    var n = t.call(this) || this;
    return n.UNSENT = e.UNSENT, n.OPENED = e.OPENED, n.HEADERS_RECEIVED = e.HEADERS_RECEIVED, n.LOADING = e.LOADING, n.DONE = e.DONE, n.onreadystatechange = null, n.readyState = e.UNSENT, n.response = null, n.responseText = "", n.responseType = "", n.status = 0, n.statusText = "", n.timeout = 0, n.upload = new No.XMLHttpRequestUpload(), n.responseUrl = "", n.withCredentials = !1, n._method = null, n._url = null, n._sync = !1, n._headers = {}, n._loweredHeaders = {}, n._mimeOverride = null, n._request = null, n._response = null, n._responseParts = null, n._responseHeaders = null, n._aborting = null, n._error = null, n._loadedBytes = 0, n._totalBytes = 0, n._lengthComputable = !1, n._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, n._restrictedHeaders = { "accept-charset": !0, "accept-encoding": !0, "access-control-request-headers": !0, "access-control-request-method": !0, connection: !0, "content-length": !0, cookie: !0, cookie2: !0, date: !0, dnt: !0, expect: !0, host: !0, "keep-alive": !0, origin: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, via: !0 }, n._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, n._userAgent = "Mozilla/5.0 (" + Oo.type() + " " + Oo.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, n._anonymous = r.anon || !1, n;
  }
  return e.prototype.open = function(r, n, s, o, c) {
    if (s === void 0 && (s = !0), r = r.toUpperCase(), this._restrictedMethods[r])
      throw new e.SecurityError("HTTP method " + r + " is not allowed in XHR");
    var h = this._parseUrl(n, o, c);
    this.readyState === e.HEADERS_RECEIVED || (this.readyState, e.LOADING), this._method = r, this._url = h, this._sync = !s, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(e.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
  }, e.prototype.setRequestHeader = function(r, n) {
    if (this.readyState !== e.OPENED)
      throw new e.InvalidStateError("XHR readyState must be OPENED");
    var s = r.toLowerCase();
    if (this._restrictedHeaders[s] || /^sec-/.test(s) || /^proxy-/.test(s)) {
      console.warn('Refused to set unsafe header "' + r + '"');
      return;
    }
    n = n.toString(), this._loweredHeaders[s] != null ? (r = this._loweredHeaders[s], this._headers[r] = this._headers[r] + ", " + n) : (this._loweredHeaders[s] = r, this._headers[r] = n);
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
        var n = Vr.parse(r.baseUrl, !1, !0);
        if (!n.protocol)
          throw new e.SyntaxError("baseUrl must be an absolute URL");
      }
      this.nodejsBaseUrl = r.baseUrl;
    }
  }, e.nodejsSet = function(r) {
    e.prototype.nodejsSet(r);
  }, e.prototype._setReadyState = function(r) {
    this.readyState = r, this.dispatchEvent(new xo.ProgressEvent("readystatechange"));
  }, e.prototype._sendFile = function(r) {
    throw new Error("Protocol file: not implemented");
  }, e.prototype._sendHttp = function(r) {
    if (this._sync)
      throw new Error("Synchronous XHR processing not implemented");
    r && (this._method === "GET" || this._method === "HEAD") ? (console.warn("Discarding entity body for " + this._method + " requests"), r = null) : r = r || "", this.upload._setData(r), this._finalizeHeaders(), this._sendHxxpRequest();
  }, e.prototype._sendHxxpRequest = function() {
    var r = this;
    if (this.withCredentials) {
      var n = e.cookieJar.getCookies(Ro.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === "https:")).toValueString();
      this._headers.cookie = this._headers.cookie2 = n;
    }
    var s = this._url.protocol === "http:" ? [Cn, this.nodejsHttpAgent] : [_s, this.nodejsHttpsAgent], o = s[0], c = s[1], h = o.request.bind(o), y = h({ hostname: this._url.hostname, port: +this._url.port, path: this._url.path, auth: this._url.auth, method: this._method, headers: this._headers, agent: c });
    this._request = y, this.timeout && y.setTimeout(this.timeout, function() {
      return r._onHttpTimeout(y);
    }), y.on("response", function(v) {
      return r._onHttpResponse(y, v);
    }), y.on("error", function(v) {
      return r._onHttpRequestError(y, v);
    }), this.upload._startUpload(y), this._request === y && this._dispatchProgress("loadstart");
  }, e.prototype._finalizeHeaders = function() {
    this._headers = Wl({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
  }, e.prototype._onHttpResponse = function(r, n) {
    var s = this;
    if (this._request === r) {
      if (this.withCredentials && (n.headers["set-cookie"] || n.headers["set-cookie2"]) && e.cookieJar.setCookies(n.headers["set-cookie"] || n.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(n.statusCode) >= 0) {
        this._url = this._parseUrl(n.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), this._headers["Content-Type"] != null && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), this._sendHxxpRequest();
        return;
      }
      this._response = n, this._response.on("data", function(c) {
        return s._onHttpResponseData(n, c);
      }), this._response.on("end", function() {
        return s._onHttpResponseEnd(n);
      }), this._response.on("close", function() {
        return s._onHttpResponseClose(n);
      }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = Cn.STATUS_CODES[this.status], this._parseResponseHeaders(n);
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
  }, e.prototype._parseUrl = function(r, n, s) {
    var o = this.nodejsBaseUrl == null ? r : Vr.resolve(this.nodejsBaseUrl, r), c = Vr.parse(o, !1, !0);
    c.hash = null;
    var h = (c.auth || "").split(":"), y = h[0], v = h[1];
    return (y || v || n || s) && (c.auth = (n || y || "") + ":" + (s || v || "")), c;
  }, e.prototype._parseResponseHeaders = function(r) {
    this._responseHeaders = {};
    for (var n in r.headers) {
      var s = n.toLowerCase();
      this._privateHeaders[s] || (this._responseHeaders[s] = r.headers[n]);
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
        for (var n = new ArrayBuffer(r.length), s = new Uint8Array(n), o = 0; o < r.length; o++)
          s[o] = r[o];
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
  }, e.ProgressEvent = xo.ProgressEvent, e.InvalidStateError = hr.InvalidStateError, e.NetworkError = hr.NetworkError, e.SecurityError = hr.SecurityError, e.SyntaxError = hr.SyntaxError, e.XMLHttpRequestUpload = No.XMLHttpRequestUpload, e.UNSENT = 0, e.OPENED = 1, e.HEADERS_RECEIVED = 2, e.LOADING = 3, e.DONE = 4, e.cookieJar = Ro.CookieJar(), e;
}(ql.XMLHttpRequestEventTarget);
bn.XMLHttpRequest = lr, lr.prototype.nodejsHttpAgent = Cn.globalAgent, lr.prototype.nodejsHttpsAgent = _s.globalAgent, lr.prototype.nodejsBaseUrl = null, function(t) {
  function e(n) {
    for (var s in n)
      t.hasOwnProperty(s) || (t[s] = n[s]);
  }
  Object.defineProperty(t, "__esModule", { value: !0 }), e(bn);
  var r = or;
  t.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
}(vs);
Xo("XMLHttpRequest") || vs.XMLHttpRequest;
require("web3-provider-engine");
require("web3-provider-engine/subproviders/cache");
require("web3-provider-engine/subproviders/fixture");
require("web3-provider-engine/subproviders/filters");
require("web3-provider-engine/subproviders/hooked-wallet");
require("web3-provider-engine/subproviders/nonce-tracker");
require("web3-provider-engine/subproviders/subscriptions");
const Zl = "_btn_1ij5m_5", zl = "_active_1ij5m_19", Yl = "_can_not_switch_1ij5m_36", Jr = {
  btn: Zl,
  active: zl,
  can_not_switch: Yl
}, $l = ({
  chain: t,
  loading: e,
  disabled: r,
  isActive: n,
  canSwitchChain: s,
  onClick: o
}) => {
  const {
    name: c,
    chainId: h
  } = t;
  let y = n ? Jr.active : Jr.btn;
  const v = s && !n;
  let _;
  return v ? _ = () => o() : (y = `${y} ${Jr.can_not_switch}`, _ = () => {
  }), /* @__PURE__ */ rt(ws, {
    block: !0,
    className: y,
    disabled: e || r,
    icon: Ms(h, 23, 23),
    onClick: _,
    children: c
  });
}, Vl = ({
  chain: t,
  loading: e,
  connectedChainId: r,
  expectedChainId: n,
  canSwitchChain: s,
  onClick: o
}) => {
  const {
    chainId: c
  } = t, h = c === r;
  let y;
  return !h && n && (y = c !== n), /* @__PURE__ */ rt($l, {
    onClick: o,
    loading: e,
    disabled: y,
    isActive: h,
    canSwitchChain: s,
    chain: t
  });
};
const Kr = ({
  account: t,
  onClick: e,
  walletIcon: r,
  walletName: n,
  labelText: s
}) => {
  let o = /* @__PURE__ */ rt("span", {
    className: "cnn",
    children: s
  }), c = "connect-wallet-button";
  return t && (o = /* @__PURE__ */ rt("span", {
    className: "acc",
    children: Es(t)
  }), c = `${c} active`), /* @__PURE__ */ It("div", {
    onClick: t ? void 0 : e,
    className: c,
    children: [r, /* @__PURE__ */ rt("span", {
      className: "wallet-name",
      children: n
    }), o]
  });
}, Jl = () => /* @__PURE__ */ It("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ rt("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ rt("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), Kl = /* @__PURE__ */ rt(jo, {
  component: Jl
}), Gl = () => /* @__PURE__ */ rt("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ rt("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), Xl = /* @__PURE__ */ rt(jo, {
  component: Gl
}), Ql = "_chain_name_8kdgo_1", tf = {
  chain_name: Ql
}, ef = "_bold_5fnjw_5", To = {
  bold: ef
}, Zn = ({
  className: t,
  children: e
}) => {
  const r = t ? `${t} ${To.bold}` : To.bold;
  return /* @__PURE__ */ rt("span", {
    className: r,
    children: e
  });
}, Ze = ({
  children: t
}) => /* @__PURE__ */ rt(Zn, {
  className: tf.chain_name,
  children: t
}), rf = ({
  account: t,
  chain: e,
  supportedChains: r,
  expectedChainId: n
}) => t ? n ? /* @__PURE__ */ It(Me, {
  children: ["You connected to ", /* @__PURE__ */ It(Ze, {
    children: [e.name, "."]
  }), /* @__PURE__ */ It("div", {
    children: ["Please connect to ", /* @__PURE__ */ rt(Ze, {
      children: As(n)
    }), " network."]
  })]
}) : r.some((s) => s.name === e.name) ? /* @__PURE__ */ It(Me, {
  children: ["You are currently using ", /* @__PURE__ */ rt(Zn, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ rt(Ze, {
    children: e.name
  }), " network"]
}) : /* @__PURE__ */ It(Me, {
  children: ["You connected to ", /* @__PURE__ */ It(Ze, {
    children: [e.name, "."]
  }), /* @__PURE__ */ It("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ rt(Ze, {
      children: r.map((s) => s.name).join(", ")
    })]
  })]
}) : null, hf = ({
  props: t,
  isMobile: e,
  btnGutter: r,
  styles: n
}) => {
  const {
    onCancel: s,
    onClose: o,
    afterConnect: c,
    afterChainSwitch: h,
    web3: y,
    expectedChainId: v
  } = t, [_, O] = bs(!1), T = /* @__PURE__ */ It(Me, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ rt("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge"]
  }), N = /* @__PURE__ */ It(Me, {
    children: ["that you have read and understand the ", /* @__PURE__ */ rt("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), {
    supportedChains: P,
    chain: j,
    switchChain: S,
    canSwitchChain: k,
    connect: C,
    account: B,
    connectorName: W,
    supportedConnectors: Y
  } = y, J = () => {
    o && o(), s && s();
  }, ot = async (E, L) => {
    O(!0);
    try {
      await C(E, L) && (s && s(), c && c());
    } finally {
      O(!1);
    }
  }, tt = async (E) => {
    O(!0);
    try {
      await S(E) && (s && s(), h && h());
    } finally {
      O(!1);
    }
  }, lt = (E) => {
    const {
      chainId: L
    } = E;
    return /* @__PURE__ */ rt(Ir, {
      flex: e ? 24 : 3,
      children: /* @__PURE__ */ rt(Vl, {
        onClick: () => tt(L),
        loading: _,
        expectedChainId: v,
        connectedChainId: j.chainId,
        canSwitchChain: k,
        chain: E
      })
    }, L);
  }, i = (E, L, w, u) => {
    if (B && w === W)
      return /* @__PURE__ */ rt(Kr, {
        disabled: !0,
        walletName: L,
        walletIcon: u,
        account: B
      });
    const b = Y[w];
    return b.isInstalled ? /* @__PURE__ */ rt(Kr, {
      walletName: L,
      onClick: () => ot(E, w),
      walletIcon: u,
      labelText: "Connect"
    }) : /* @__PURE__ */ rt(Kr, {
      walletName: L,
      onClick: () => window.open(b.installUrl, "_blank").focus(),
      walletIcon: u,
      labelText: "Install"
    });
  }, f = e ? void 0 : "space-between", d = e ? 24 : 12, g = v || P[0].chainId, M = /* @__PURE__ */ It(Me, {
    children: [Ls(j) && /* @__PURE__ */ It(Me, {
      children: [/* @__PURE__ */ rt("div", {
        className: n.description,
        children: /* @__PURE__ */ rt(rf, {
          account: B,
          chain: j,
          supportedChains: P,
          expectedChainId: v
        })
      }), /* @__PURE__ */ rt(zn, {
        gutter: r,
        className: n.chain_buttons,
        justify: f,
        children: P.map((E) => lt(E))
      })]
    }), /* @__PURE__ */ It("div", {
      className: n.description,
      children: [/* @__PURE__ */ rt(Zn, {
        children: "Connect your Wallet"
      }), " and jump into the world of NFT's"]
    }), /* @__PURE__ */ It(zn, {
      gutter: r,
      justify: f,
      children: [/* @__PURE__ */ rt(Ir, {
        span: d,
        children: i(g, "Metamask", Gr.Injected, Kl)
      }), /* @__PURE__ */ rt(Ir, {
        span: d,
        children: i(g, "WalletConnect", Gr.WalletConnect, Xl)
      })]
    })]
  });
  return {
    footer1: T,
    footer2: N,
    content: M,
    onCancel: J,
    loading: _
  };
};
export {
  uf as s,
  hf as u
};
//# sourceMappingURL=useConnectModalCommon.5c08984e.mjs.map
