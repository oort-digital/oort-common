var yc = Object.defineProperty;
var wc = (t, e, r) => e in t ? yc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var je = (t, e, r) => (wc(t, typeof e != "symbol" ? e + "" : e, r), r);
import { Button as hr, Modal as bc, Typography as xc, Drawer as Cc, Switch as Mc } from "antd";
import * as Mt from "react";
import ea, { createContext as Ec, useContext as Sc, useEffect as ta, useState as Un, Suspense as kc, lazy as ra } from "react";
import { providers as Ac } from "ethers";
var dt = /* @__PURE__ */ ((t) => (t[t.EthereumMainnet = 1] = "EthereumMainnet", t[t.EthereumRopsten = 3] = "EthereumRopsten", t[t.EthereumRinkeby = 4] = "EthereumRinkeby", t[t.EthereumGoerli = 5] = "EthereumGoerli", t[t.EthereumKovan = 42] = "EthereumKovan", t[t.MaticMumbai = 80001] = "MaticMumbai", t[t.MaticMainnet = 137] = "MaticMainnet", t[t.BSCTestnet = 97] = "BSCTestnet", t[t.BSCMainnet = 56] = "BSCMainnet", t[t.SolanaTestnet = 245022940] = "SolanaTestnet", t))(dt || {});
var Ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ci(t) {
  var e = t.default;
  if (typeof e == "function") {
    var r = function() {
      return e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Yr = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Rc() {
  if (ji)
    return sr;
  ji = 1;
  var t = ea, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, d, v) {
    var m, A = {}, B = null, L = null;
    v !== void 0 && (B = "" + v), d.key !== void 0 && (B = "" + d.key), d.ref !== void 0 && (L = d.ref);
    for (m in d)
      n.call(d, m) && !i.hasOwnProperty(m) && (A[m] = d[m]);
    if (s && s.defaultProps)
      for (m in d = s.defaultProps, d)
        A[m] === void 0 && (A[m] = d[m]);
    return { $$typeof: e, type: s, key: B, ref: L, props: A, _owner: o.current };
  }
  return sr.Fragment = r, sr.jsx = l, sr.jsxs = l, sr;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function Ic() {
  return Wi || (Wi = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ea, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), P = Symbol.iterator, z = "@@iterator";
    function M(S) {
      if (S === null || typeof S != "object")
        return null;
      var V = P && S[P] || S[z];
      return typeof V == "function" ? V : null;
    }
    var I = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(S) {
      {
        for (var V = arguments.length, G = new Array(V > 1 ? V - 1 : 0), ne = 1; ne < V; ne++)
          G[ne - 1] = arguments[ne];
        T("error", S, G);
      }
    }
    function T(S, V, G) {
      {
        var ne = I.ReactDebugCurrentFrame, _e = ne.getStackAddendum();
        _e !== "" && (V += "%s", G = G.concat([_e]));
        var ye = G.map(function(ve) {
          return String(ve);
        });
        ye.unshift("Warning: " + V), Function.prototype.apply.call(console[S], console, ye);
      }
    }
    var U = !1, Y = !1, Q = !1, ce = !1, oe = !1, pe;
    pe = Symbol.for("react.module.reference");
    function E(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || oe || S === o || S === v || S === m || ce || S === L || U || Y || Q || typeof S == "object" && S !== null && (S.$$typeof === B || S.$$typeof === A || S.$$typeof === l || S.$$typeof === s || S.$$typeof === d || S.$$typeof === pe || S.getModuleId !== void 0));
    }
    function a(S, V, G) {
      var ne = S.displayName;
      if (ne)
        return ne;
      var _e = V.displayName || V.name || "";
      return _e !== "" ? G + "(" + _e + ")" : G;
    }
    function h(S) {
      return S.displayName || "Context";
    }
    function g(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case v:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case s:
            var V = S;
            return h(V) + ".Consumer";
          case l:
            var G = S;
            return h(G._context) + ".Provider";
          case d:
            return a(S, S.render, "ForwardRef");
          case A:
            var ne = S.displayName || null;
            return ne !== null ? ne : g(S.type) || "Memo";
          case B: {
            var _e = S, ye = _e._payload, ve = _e._init;
            try {
              return g(ve(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, x = 0, k, N, b, c, _, H, q;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function re() {
      {
        if (x === 0) {
          k = console.log, N = console.info, b = console.warn, c = console.error, _ = console.group, H = console.groupCollapsed, q = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        x++;
      }
    }
    function p() {
      {
        if (x--, x === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, S, {
              value: k
            }),
            info: y({}, S, {
              value: N
            }),
            warn: y({}, S, {
              value: b
            }),
            error: y({}, S, {
              value: c
            }),
            group: y({}, S, {
              value: _
            }),
            groupCollapsed: y({}, S, {
              value: H
            }),
            groupEnd: y({}, S, {
              value: q
            })
          });
        }
        x < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = I.ReactCurrentDispatcher, W;
    function D(S, V, G) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (_e) {
            var ne = _e.stack.trim().match(/\n( *(at )?)/);
            W = ne && ne[1] || "";
          }
        return `
` + W + S;
      }
    }
    var K = !1, ae;
    {
      var ee = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ee();
    }
    function Z(S, V) {
      if (!S || K)
        return "";
      {
        var G = ae.get(S);
        if (G !== void 0)
          return G;
      }
      var ne;
      K = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = F.current, F.current = null, re();
      try {
        if (V) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (Qe) {
              ne = Qe;
            }
            Reflect.construct(S, [], ve);
          } else {
            try {
              ve.call();
            } catch (Qe) {
              ne = Qe;
            }
            S.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            ne = Qe;
          }
          S();
        }
      } catch (Qe) {
        if (Qe && ne && typeof Qe.stack == "string") {
          for (var me = Qe.stack.split(`
`), ze = ne.stack.split(`
`), Ee = me.length - 1, Ae = ze.length - 1; Ee >= 1 && Ae >= 0 && me[Ee] !== ze[Ae]; )
            Ae--;
          for (; Ee >= 1 && Ae >= 0; Ee--, Ae--)
            if (me[Ee] !== ze[Ae]) {
              if (Ee !== 1 || Ae !== 1)
                do
                  if (Ee--, Ae--, Ae < 0 || me[Ee] !== ze[Ae]) {
                    var Ye = `
` + me[Ee].replace(" at new ", " at ");
                    return S.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", S.displayName)), typeof S == "function" && ae.set(S, Ye), Ye;
                  }
                while (Ee >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        K = !1, F.current = ye, p(), Error.prepareStackTrace = _e;
      }
      var ht = S ? S.displayName || S.name : "", Ht = ht ? D(ht) : "";
      return typeof S == "function" && ae.set(S, Ht), Ht;
    }
    function he(S, V, G) {
      return Z(S, !1);
    }
    function te(S) {
      var V = S.prototype;
      return !!(V && V.isReactComponent);
    }
    function le(S, V, G) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return Z(S, te(S));
      if (typeof S == "string")
        return D(S);
      switch (S) {
        case v:
          return D("Suspense");
        case m:
          return D("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case d:
            return he(S.render);
          case A:
            return le(S.type, V, G);
          case B: {
            var ne = S, _e = ne._payload, ye = ne._init;
            try {
              return le(ye(_e), V, G);
            } catch {
            }
          }
        }
      return "";
    }
    var w = Object.prototype.hasOwnProperty, u = {}, f = I.ReactDebugCurrentFrame;
    function C(S) {
      if (S) {
        var V = S._owner, G = le(S.type, S._source, V ? V.type : null);
        f.setExtraStackFrame(G);
      } else
        f.setExtraStackFrame(null);
    }
    function O(S, V, G, ne, _e) {
      {
        var ye = Function.call.bind(w);
        for (var ve in S)
          if (ye(S, ve)) {
            var me = void 0;
            try {
              if (typeof S[ve] != "function") {
                var ze = Error((ne || "React class") + ": " + G + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              me = S[ve](V, ve, ne, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              me = Ee;
            }
            me && !(me instanceof Error) && (C(_e), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ne || "React class", G, ve, typeof me), C(null)), me instanceof Error && !(me.message in u) && (u[me.message] = !0, C(_e), R("Failed %s type: %s", G, me.message), C(null));
          }
      }
    }
    var $ = Array.isArray;
    function J(S) {
      return $(S);
    }
    function se(S) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, G = V && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return G;
      }
    }
    function ue(S) {
      try {
        return be(S), !1;
      } catch {
        return !0;
      }
    }
    function be(S) {
      return "" + S;
    }
    function ge(S) {
      if (ue(S))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(S)), be(S);
    }
    var fe = I.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Me, it;
    it = {};
    function Te(S) {
      if (w.call(S, "ref")) {
        var V = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Oe(S) {
      if (w.call(S, "key")) {
        var V = Object.getOwnPropertyDescriptor(S, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function vt(S, V) {
      if (typeof S.ref == "string" && fe.current && V && fe.current.stateNode !== V) {
        var G = g(fe.current.type);
        it[G] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(fe.current.type), S.ref), it[G] = !0);
      }
    }
    function Be(S, V) {
      {
        var G = function() {
          Ce || (Ce = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Ne(S, V) {
      {
        var G = function() {
          Me || (Me = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var _t = function(S, V, G, ne, _e, ye, ve) {
      var me = {
        $$typeof: e,
        type: S,
        key: V,
        ref: G,
        props: ve,
        _owner: ye
      };
      return me._store = {}, Object.defineProperty(me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.defineProperty(me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(me.props), Object.freeze(me)), me;
    };
    function Le(S, V, G, ne, _e) {
      {
        var ye, ve = {}, me = null, ze = null;
        G !== void 0 && (ge(G), me = "" + G), Oe(V) && (ge(V.key), me = "" + V.key), Te(V) && (ze = V.ref, vt(V, _e));
        for (ye in V)
          w.call(V, ye) && !Ge.hasOwnProperty(ye) && (ve[ye] = V[ye]);
        if (S && S.defaultProps) {
          var Ee = S.defaultProps;
          for (ye in Ee)
            ve[ye] === void 0 && (ve[ye] = Ee[ye]);
        }
        if (me || ze) {
          var Ae = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          me && Be(ve, Ae), ze && Ne(ve, Ae);
        }
        return _t(S, me, ze, _e, ne, fe.current, ve);
      }
    }
    var Se = I.ReactCurrentOwner, ct = I.ReactDebugCurrentFrame;
    function xe(S) {
      if (S) {
        var V = S._owner, G = le(S.type, S._source, V ? V.type : null);
        ct.setExtraStackFrame(G);
      } else
        ct.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function ot(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function Re() {
      {
        if (Se.current) {
          var S = g(Se.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function Pe(S) {
      {
        if (S !== void 0) {
          var V = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
          return `

Check your code at ` + V + ":" + G + ".";
        }
        return "";
      }
    }
    var lt = {};
    function Fe(S) {
      {
        var V = Re();
        if (!V) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (V = `

Check the top-level render call using <` + G + ">.");
        }
        return V;
      }
    }
    function Ie(S, V) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var G = Fe(V);
        if (lt[G])
          return;
        lt[G] = !0;
        var ne = "";
        S && S._owner && S._owner !== Se.current && (ne = " It was passed a child from " + g(S._owner.type) + "."), xe(S), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ne), xe(null);
      }
    }
    function ut(S, V) {
      {
        if (typeof S != "object")
          return;
        if (J(S))
          for (var G = 0; G < S.length; G++) {
            var ne = S[G];
            ot(ne) && Ie(ne, V);
          }
        else if (ot(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var _e = M(S);
          if (typeof _e == "function" && _e !== S.entries)
            for (var ye = _e.call(S), ve; !(ve = ye.next()).done; )
              ot(ve.value) && Ie(ve.value, V);
        }
      }
    }
    function Ue(S) {
      {
        var V = S.type;
        if (V == null || typeof V == "string")
          return;
        var G;
        if (typeof V == "function")
          G = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === d || V.$$typeof === A))
          G = V.propTypes;
        else
          return;
        if (G) {
          var ne = g(V);
          O(G, S.props, "prop", ne, S);
        } else if (V.PropTypes !== void 0 && !ke) {
          ke = !0;
          var _e = g(V);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function De(S) {
      {
        for (var V = Object.keys(S.props), G = 0; G < V.length; G++) {
          var ne = V[G];
          if (ne !== "children" && ne !== "key") {
            xe(S), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ne), xe(null);
            break;
          }
        }
        S.ref !== null && (xe(S), R("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    function ft(S, V, G, ne, _e, ye) {
      {
        var ve = E(S);
        if (!ve) {
          var me = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = Pe(_e);
          ze ? me += ze : me += Re();
          var Ee;
          S === null ? Ee = "null" : J(S) ? Ee = "array" : S !== void 0 && S.$$typeof === e ? (Ee = "<" + (g(S.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof S, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, me);
        }
        var Ae = Le(S, V, G, _e, ye);
        if (Ae == null)
          return Ae;
        if (ve) {
          var Ye = V.children;
          if (Ye !== void 0)
            if (ne)
              if (J(Ye)) {
                for (var ht = 0; ht < Ye.length; ht++)
                  ut(Ye[ht], S);
                Object.freeze && Object.freeze(Ye);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ut(Ye, S);
        }
        return S === n ? De(Ae) : Ue(Ae), Ae;
      }
    }
    function qe(S, V, G) {
      return ft(S, V, G, !0);
    }
    function He(S, V, G) {
      return ft(S, V, G, !1);
    }
    var yt = He, $e = qe;
    cr.Fragment = n, cr.jsx = yt, cr.jsxs = $e;
  }()), cr;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Rc() : t.exports = Ic();
})(Yr);
const j = Yr.exports.jsx, Ve = Yr.exports.jsxs, li = Yr.exports.Fragment;
function np({
  okBtn: t,
  cancelBtn: e,
  onCancel: r,
  onOk: n,
  loading: o,
  className: i,
  firstBtn: l,
  secondBtn: s,
  onFistOk: d,
  onSecondOk: v
}) {
  var A, B, L, P, z, M, I;
  let m = "footer-buttons";
  return i && (m = `${m} ${i}`), e && t ? m = `${m} two-buttons` : m = `${m} single-button`, l && s && (m = `${m} two-buttons`), /* @__PURE__ */ Ve("div", {
    className: m,
    children: [e ? /* @__PURE__ */ j(hr, {
      className: "cancel-btn",
      disabled: o,
      size: (A = e.size) != null ? A : "large",
      type: e.type,
      onClick: r,
      children: e.text
    }) : null, t ? /* @__PURE__ */ j(hr, {
      className: "ok-btn",
      loading: o,
      size: (B = t.size) != null ? B : "large",
      type: (L = t.type) != null ? L : "primary",
      onClick: n,
      children: t.text
    }) : null, l ? /* @__PURE__ */ j(hr, {
      className: "first-btn",
      loading: o,
      size: (P = l.size) != null ? P : "large",
      type: (z = l.type) != null ? z : "primary",
      onClick: d,
      children: l.text
    }) : null, s ? /* @__PURE__ */ j(hr, {
      className: "second-btn",
      loading: o,
      size: (M = s.size) != null ? M : "large",
      type: (I = s.type) != null ? I : "primary",
      onClick: v,
      children: s.text
    }) : null]
  });
}
const {
  Title: Tc
} = xc;
function Oc(t) {
  return /* @__PURE__ */ j(Tc, {
    level: 4,
    style: {
      marginBottom: 0
    },
    children: t.title
  });
}
function ip({
  className: t,
  title: e,
  onCancel: r,
  loading: n,
  children: o,
  visible: i,
  width: l,
  footer: s
}) {
  const d = (v) => {
    !n && r && r(v);
  };
  return /* @__PURE__ */ j(bc, {
    className: `${t} oort-modal`,
    width: l || "640px",
    title: /* @__PURE__ */ j(Oc, {
      title: e
    }),
    centered: !0,
    open: i,
    closable: !0,
    cancelText: "Close",
    onCancel: d,
    maskClosable: !1,
    confirmLoading: n,
    footer: s,
    children: o
  });
}
var Bc = /* @__PURE__ */ Ec({});
const na = Bc;
function ia(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function zi(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zi(Object(r), !0).forEach(function(n) {
      ia(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zi(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Nc(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(e.indexOf(o) >= 0) && (r[o] = t[o]);
  return r;
}
function Lc(t, e) {
  if (t == null)
    return {};
  var r = Nc(t, e), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      n = i[o], !(e.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, n) || (r[n] = t[n]));
  }
  return r;
}
var oa = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (!!i) {
          var l = typeof i;
          if (l === "string" || l === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (l === "object")
            if (i.toString === Object.prototype.toString)
              for (var d in i)
                e.call(i, d) && i[d] && n.push(d);
            else
              n.push(i.toString());
        }
      }
      return n.join(" ");
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
})(oa);
const Vi = oa.exports;
function rt(t, e) {
  Pc(t) && (t = "100%");
  var r = Fc(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), r && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function Pc(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Fc(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Uc(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function kr(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function yn(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Dc(t, e, r) {
  return {
    r: rt(t, 255) * 255,
    g: rt(e, 255) * 255,
    b: rt(r, 255) * 255
  };
}
function wn(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * (6 * r) : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function qc(t, e, r) {
  var n, o, i;
  if (t = rt(t, 360), e = rt(e, 100), r = rt(r, 100), e === 0)
    o = r, i = r, n = r;
  else {
    var l = r < 0.5 ? r * (1 + e) : r + e - r * e, s = 2 * r - l;
    n = wn(s, l, t + 1 / 3), o = wn(s, l, t), i = wn(s, l, t - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: i * 255 };
}
function Hc(t, e, r) {
  t = rt(t, 255), e = rt(e, 255), r = rt(r, 255);
  var n = Math.max(t, e, r), o = Math.min(t, e, r), i = 0, l = n, s = n - o, d = n === 0 ? 0 : s / n;
  if (n === o)
    i = 0;
  else {
    switch (n) {
      case t:
        i = (e - r) / s + (e < r ? 6 : 0);
        break;
      case e:
        i = (r - t) / s + 2;
        break;
      case r:
        i = (t - e) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: d, v: l };
}
function $c(t, e, r) {
  t = rt(t, 360) * 6, e = rt(e, 100), r = rt(r, 100);
  var n = Math.floor(t), o = t - n, i = r * (1 - e), l = r * (1 - o * e), s = r * (1 - (1 - o) * e), d = n % 6, v = [r, l, i, i, s, r][d], m = [s, r, r, l, i, i][d], A = [i, i, s, r, r, l][d];
  return { r: v * 255, g: m * 255, b: A * 255 };
}
function jc(t, e, r, n) {
  var o = [
    yn(Math.round(t).toString(16)),
    yn(Math.round(e).toString(16)),
    yn(Math.round(r).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Ki(t) {
  return Xe(t) / 255;
}
function Xe(t) {
  return parseInt(t, 16);
}
var Yi = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function lr(t) {
  var e = { r: 0, g: 0, b: 0 }, r = 1, n = null, o = null, i = null, l = !1, s = !1;
  return typeof t == "string" && (t = Vc(t)), typeof t == "object" && (wt(t.r) && wt(t.g) && wt(t.b) ? (e = Dc(t.r, t.g, t.b), l = !0, s = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : wt(t.h) && wt(t.s) && wt(t.v) ? (n = kr(t.s), o = kr(t.v), e = $c(t.h, n, o), l = !0, s = "hsv") : wt(t.h) && wt(t.s) && wt(t.l) && (n = kr(t.s), i = kr(t.l), e = qc(t.h, n, i), l = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (r = t.a)), r = Uc(r), {
    ok: l,
    format: t.format || s,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: r
  };
}
var Wc = "[-\\+]?\\d+%?", zc = "[-\\+]?\\d*\\.\\d+%?", St = "(?:".concat(zc, ")|(?:").concat(Wc, ")"), bn = "[\\s|\\(]+(".concat(St, ")[,|\\s]+(").concat(St, ")[,|\\s]+(").concat(St, ")\\s*\\)?"), xn = "[\\s|\\(]+(".concat(St, ")[,|\\s]+(").concat(St, ")[,|\\s]+(").concat(St, ")[,|\\s]+(").concat(St, ")\\s*\\)?"), at = {
  CSS_UNIT: new RegExp(St),
  rgb: new RegExp("rgb" + bn),
  rgba: new RegExp("rgba" + xn),
  hsl: new RegExp("hsl" + bn),
  hsla: new RegExp("hsla" + xn),
  hsv: new RegExp("hsv" + bn),
  hsva: new RegExp("hsva" + xn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Vc(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (Yi[t])
    t = Yi[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = at.rgb.exec(t);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = at.rgba.exec(t), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = at.hsl.exec(t), r ? { h: r[1], s: r[2], l: r[3] } : (r = at.hsla.exec(t), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = at.hsv.exec(t), r ? { h: r[1], s: r[2], v: r[3] } : (r = at.hsva.exec(t), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = at.hex8.exec(t), r ? {
    r: Xe(r[1]),
    g: Xe(r[2]),
    b: Xe(r[3]),
    a: Ki(r[4]),
    format: e ? "name" : "hex8"
  } : (r = at.hex6.exec(t), r ? {
    r: Xe(r[1]),
    g: Xe(r[2]),
    b: Xe(r[3]),
    format: e ? "name" : "hex"
  } : (r = at.hex4.exec(t), r ? {
    r: Xe(r[1] + r[1]),
    g: Xe(r[2] + r[2]),
    b: Xe(r[3] + r[3]),
    a: Ki(r[4] + r[4]),
    format: e ? "name" : "hex8"
  } : (r = at.hex3.exec(t), r ? {
    r: Xe(r[1] + r[1]),
    g: Xe(r[2] + r[2]),
    b: Xe(r[3] + r[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function wt(t) {
  return Boolean(at.CSS_UNIT.exec(String(t)));
}
var Ar = 2, Ji = 0.16, Kc = 0.05, Yc = 0.05, Jc = 0.15, aa = 5, sa = 4, Gc = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Gi(t) {
  var e = t.r, r = t.g, n = t.b, o = Hc(e, r, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function Rr(t) {
  var e = t.r, r = t.g, n = t.b;
  return "#".concat(jc(e, r, n, !1));
}
function Zc(t, e, r) {
  var n = r / 100, o = {
    r: (e.r - t.r) * n + t.r,
    g: (e.g - t.g) * n + t.g,
    b: (e.b - t.b) * n + t.b
  };
  return o;
}
function Zi(t, e, r) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = r ? Math.round(t.h) - Ar * e : Math.round(t.h) + Ar * e : n = r ? Math.round(t.h) + Ar * e : Math.round(t.h) - Ar * e, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Qi(t, e, r) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return r ? n = t.s - Ji * e : e === sa ? n = t.s + Ji : n = t.s + Kc * e, n > 1 && (n = 1), r && e === aa && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Xi(t, e, r) {
  var n;
  return r ? n = t.v + Yc * e : n = t.v - Jc * e, n > 1 && (n = 1), Number(n.toFixed(2));
}
function eo(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = lr(t), o = aa; o > 0; o -= 1) {
    var i = Gi(n), l = Rr(lr({
      h: Zi(i, o, !0),
      s: Qi(i, o, !0),
      v: Xi(i, o, !0)
    }));
    r.push(l);
  }
  r.push(Rr(n));
  for (var s = 1; s <= sa; s += 1) {
    var d = Gi(n), v = Rr(lr({
      h: Zi(d, s),
      s: Qi(d, s),
      v: Xi(d, s)
    }));
    r.push(v);
  }
  return e.theme === "dark" ? Gc.map(function(m) {
    var A = m.index, B = m.opacity, L = Rr(Zc(lr(e.backgroundColor || "#141414"), lr(r[A]), B * 100));
    return L;
  }) : r;
}
var Cn = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Mn = {}, En = {};
Object.keys(Cn).forEach(function(t) {
  Mn[t] = eo(Cn[t]), Mn[t].primary = Mn[t][5], En[t] = eo(Cn[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), En[t].primary = En[t][5];
});
var to = {};
function Qc(t, e) {
  process.env.NODE_ENV !== "production" && !t && console !== void 0 && console.error("Warning: ".concat(e));
}
function Xc(t, e, r) {
  !e && !to[r] && (t(!1, r), to[r] = !0);
}
function el(t, e) {
  Xc(Qc, t, e);
}
function tl() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var rl = "rc-util-key";
function ca() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : rl;
}
function ui(t) {
  if (t.attachTo)
    return t.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function ro(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!tl())
    return null;
  var n = document.createElement("style");
  if (!((e = r.csp) === null || e === void 0) && e.nonce) {
    var o;
    n.nonce = (o = r.csp) === null || o === void 0 ? void 0 : o.nonce;
  }
  n.innerHTML = t;
  var i = ui(r), l = i.firstChild;
  return r.prepend && i.prepend ? i.prepend(n) : r.prepend && l ? i.insertBefore(n, l) : i.appendChild(n), n;
}
var Dn = /* @__PURE__ */ new Map();
function nl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ui(e);
  return Array.from(Dn.get(r).children).find(function(n) {
    return n.tagName === "STYLE" && n.getAttribute(ca(e)) === t;
  });
}
function il(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ui(r);
  if (!Dn.has(n)) {
    var o = ro("", r), i = o.parentNode;
    Dn.set(n, i), i.removeChild(o);
  }
  var l = nl(e, r);
  if (l) {
    var s, d;
    if (((s = r.csp) === null || s === void 0 ? void 0 : s.nonce) && l.nonce !== ((d = r.csp) === null || d === void 0 ? void 0 : d.nonce)) {
      var v;
      l.nonce = (v = r.csp) === null || v === void 0 ? void 0 : v.nonce;
    }
    return l.innerHTML !== t && (l.innerHTML = t), l;
  }
  var m = ro(t, r);
  return m.setAttribute(ca(r), e), m;
}
function no(t, e) {
  el(t, "[@ant-design/icons] ".concat(e));
}
var ol = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
}, al = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, sl = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : al, r = Sc(na), n = r.csp;
  ta(function() {
    il(e, "@ant-design-icons", {
      prepend: !0,
      csp: n
    });
  }, []);
}, cl = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"], la = /* @__PURE__ */ Mt.forwardRef(function(t, e) {
  var r = t.className, n = t.component, o = t.viewBox, i = t.spin, l = t.rotate, s = t.tabIndex, d = t.onClick, v = t.children, m = Lc(t, cl);
  no(Boolean(n || v), "Should have `component` prop or `children`."), sl();
  var A = Mt.useContext(na), B = A.prefixCls, L = B === void 0 ? "anticon" : B, P = Vi(L, r), z = Vi(ia({}, "".concat(L, "-spin"), !!i)), M = l ? {
    msTransform: "rotate(".concat(l, "deg)"),
    transform: "rotate(".concat(l, "deg)")
  } : void 0, I = Lt(Lt({}, ol), {}, {
    className: z,
    style: M,
    viewBox: o
  });
  o || delete I.viewBox;
  var R = function() {
    return n ? /* @__PURE__ */ Mt.createElement(n, Lt({}, I), v) : v ? (no(Boolean(o) || Mt.Children.count(v) === 1 && /* @__PURE__ */ Mt.isValidElement(v) && Mt.Children.only(v).type === "use", "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."), /* @__PURE__ */ Mt.createElement("svg", Lt(Lt({}, I), {}, {
      viewBox: o
    }), v)) : null;
  }, T = s;
  return T === void 0 && d && (T = -1), /* @__PURE__ */ Mt.createElement("span", Lt(Lt({
    role: "img"
  }, m), {}, {
    ref: e,
    tabIndex: T,
    onClick: d,
    className: P
  }), R());
});
la.displayName = "AntdIcon";
const Ut = la, ll = () => /* @__PURE__ */ Ve("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ j("path", {
    d: "M16.0001 29.3333C23.3334 29.3333 29.3334 23.3333 29.3334 16C29.3334 8.66666 23.3334 2.66666 16.0001 2.66666C8.66675 2.66666 2.66675 8.66666 2.66675 16C2.66675 23.3333 8.66675 29.3333 16.0001 29.3333Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M12.2266 19.7733L19.7732 12.2267",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M19.7732 19.7733L12.2266 12.2267",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), ul = ({
  className: t
}) => /* @__PURE__ */ j(Ut, {
  className: t,
  component: ll
}), Ir = () => /* @__PURE__ */ Ve("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ j("path", {
    d: "M18.3327 9.99935C18.3327 14.5993 14.5993 18.3327 9.99935 18.3327C5.39935 18.3327 1.66602 14.5993 1.66602 9.99935C1.66602 5.39935 5.39935 1.66602 9.99935 1.66602",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M14.166 2.5V5.83333H17.4993",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M18.3327 1.66602L14.166 5.83268",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M7.83558 8.00586C7.56651 8.00586 7.34837 8.21772 7.34837 8.47904V10.3705L6.45882 8.29706C6.38317 8.12072 6.20576 8.00586 6.00908 8.00586H5.48721C5.21814 8.00586 5 8.21772 5 8.47904V11.52C5.02397 12.1472 5.95068 12.1467 5.97443 11.52V9.62856L6.86398 11.702C6.93963 11.8784 7.11704 11.9932 7.31371 11.9932H7.83558C8.10466 11.9932 8.3228 11.7814 8.3228 11.52V8.47904C8.3228 8.21772 8.10466 8.00586 7.83558 8.00586Z",
    fill: "currentColor"
  }), /* @__PURE__ */ j("path", {
    d: "M8.7207 8.4794V11.5227C8.74704 12.1503 9.76527 12.1498 9.79136 11.5227V10.7282H10.9381C11.6477 10.7049 11.6471 9.80417 10.9381 9.78109H9.79136V8.95294H11.5116C12.2211 8.92964 12.2205 8.02894 11.5116 8.00586H9.25603C8.96039 8.00586 8.7207 8.21788 8.7207 8.4794Z",
    fill: "currentColor"
  }), /* @__PURE__ */ j("path", {
    d: "M12.7042 8.95294H13.3093V11.5227C13.3354 12.1503 14.3431 12.1498 14.3689 11.5227V8.95294H14.9741C15.6763 8.92964 15.6758 8.02894 14.9741 8.00586H12.7042C12.002 8.02916 12.0025 8.92986 12.7042 8.95294Z",
    fill: "currentColor"
  })]
}), fl = () => /* @__PURE__ */ Ve("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 42 42",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ j("path", {
    d: "M11.2884 4.66949C14.9641 2.48361 19.2697 1.60168 23.5088 2.16637C27.7479 2.73105 31.6725 4.70933 34.6478 7.78119C37.6231 10.853 39.4751 14.8388 39.9041 19.0938C40.3332 23.3487 39.3142 27.624 37.0121 31.228",
    stroke: "#939DA8",
    strokeWidth: "2.42364",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M26.0937 39.3045C22.7621 40.2316 19.2406 40.2318 15.9088 39.3052C12.5771 38.3785 9.5614 36.5601 7.18688 34.046C4.81236 31.5318 3.16905 28.4173 2.43407 25.0381C1.69909 21.6589 1.90032 18.1432 3.01608 14.8699",
    stroke: "#939DA8",
    strokeWidth: "2.42364",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /* @__PURE__ */ j("path", {
    d: "M29.6892 18.6554C30.1908 20.5144 30.083 22.4852 29.3817 24.2784C28.6803 26.0715 27.4224 27.5925 25.7926 28.6178C24.1629 29.6431 22.2473 30.1188 20.3272 29.9748C18.4071 29.8309 16.5839 29.075 15.1252 27.8181C13.6665 26.5613 12.6494 24.8698 12.2232 22.9921C11.7971 21.1144 11.9843 19.1495 12.7574 17.3861C13.5306 15.6227 14.8489 14.1538 16.5187 13.195C18.1885 12.2363 20.1217 11.8383 22.0344 12.0596",
    stroke: "#939DA8",
    strokeWidth: "2.42364",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /* @__PURE__ */ j("circle", {
    cx: "6",
    cy: "9",
    r: "4",
    fill: "#2FB4AC"
  }), /* @__PURE__ */ j("circle", {
    cx: "32",
    cy: "36",
    r: "4",
    fill: "#B39ED6"
  }), /* @__PURE__ */ j("circle", {
    cx: "26.5",
    cy: "14.5",
    r: "2.5",
    fill: "#2FB4AC"
  })]
}), hl = () => /* @__PURE__ */ Ve("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ j("g", {
    clipPath: "url(#clip0_8909_3112)",
    children: /* @__PURE__ */ j("path", {
      d: "M6.29565 14.629C5.78639 14.629 5.36972 14.2123 5.36972 13.7031V9.07342C5.36972 8.56416 5.78639 8.1475 6.29565 8.1475C6.8049 8.1475 7.22157 8.56416 7.22157 9.07342V13.7031C7.22157 14.2123 6.8049 14.629 6.29565 14.629ZM9.99935 14.629C9.49009 14.629 9.07342 14.2123 9.07342 13.7031V6.29565C9.07342 5.78639 9.49009 5.36972 9.99935 5.36972C10.5086 5.36972 10.9253 5.78639 10.9253 6.29565V13.7031C10.9253 14.2123 10.5086 14.629 9.99935 14.629ZM13.7031 14.629C13.1938 14.629 12.7771 14.2123 12.7771 13.7031V11.8512C12.7771 11.3419 13.1938 10.9253 13.7031 10.9253C14.2123 10.9253 14.629 11.3419 14.629 11.8512V13.7031C14.629 14.2123 14.2123 14.629 13.7031 14.629ZM15.5549 16.4808H4.44379C3.93453 16.4808 3.51787 16.0642 3.51787 15.5549V4.44379C3.51787 3.93453 3.93453 3.51787 4.44379 3.51787H15.5549C16.0642 3.51787 16.4808 3.93453 16.4808 4.44379V15.5549C16.4808 16.0642 16.0642 16.4808 15.5549 16.4808ZM16.4808 1.66602H3.51787C2.49935 1.66602 1.66602 2.49935 1.66602 3.51787V16.4808C1.66602 17.4993 2.49935 18.3327 3.51787 18.3327H16.4808C17.4993 18.3327 18.3327 17.4993 18.3327 16.4808V3.51787C18.3327 2.49935 17.4993 1.66602 16.4808 1.66602Z",
      fill: "#2FB4AC"
    })
  }), /* @__PURE__ */ j("defs", {
    children: /* @__PURE__ */ j("clipPath", {
      id: "clip0_8909_3112",
      children: /* @__PURE__ */ j("rect", {
        width: "20",
        height: "20",
        fill: "white"
      })
    })
  })]
}), dl = () => /* @__PURE__ */ Ve("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ Ve("g", {
    clipPath: "url(#clip0_8909_3741)",
    children: [/* @__PURE__ */ j("path", {
      d: "M11.0322 1.02645C11.0324 1.02665 11.0327 1.02686 11.0329 1.02707L14.1409 4.13475C14.1412 4.13501 14.1414 4.13527 14.1417 4.13553C14.1588 4.15319 14.1683 4.17683 14.1683 4.20145C14.1683 4.22615 14.1587 4.24985 14.1414 4.26752C14.1412 4.26772 14.141 4.26793 14.1408 4.26813L8.55674 9.85187C8.53847 9.86927 8.5142 9.87899 8.48894 9.87899C8.46361 9.87899 8.43927 9.86921 8.42099 9.85172L5.31436 6.75152C5.31407 6.75123 5.31379 6.75094 5.31351 6.75065C5.29658 6.73314 5.28711 6.70972 5.28711 6.68534C5.28711 6.66083 5.29668 6.63731 5.31376 6.61977C5.31395 6.61956 5.31416 6.61936 5.31436 6.61915L10.9021 1.02638C10.9195 1.00947 10.9429 1 10.9672 1C10.9915 1 11.0148 1.0095 11.0322 1.02645Z",
      stroke: "#6E7882",
      strokeWidth: "2"
    }), /* @__PURE__ */ j("path", {
      d: "M7.58643 1.91832L7.0689 1.40078C6.99768 1.33283 6.90302 1.29492 6.80459 1.29492C6.70616 1.29492 6.61151 1.33283 6.54029 1.40078L5.68952 2.25156C5.61944 2.32174 5.58008 2.41686 5.58008 2.51604C5.58008 2.61522 5.61944 2.71034 5.68952 2.78052L6.20705 3.29842L7.58643 1.91832Z",
      fill: "#6E7882"
    }), /* @__PURE__ */ j("path", {
      d: "M18.3389 15.4276C18.4292 15.5184 18.5366 15.5905 18.6549 15.6395C18.7733 15.6886 18.9001 15.7136 19.0282 15.7133C19.1845 15.7142 19.3386 15.6767 19.477 15.6041C19.6154 15.5315 19.7338 15.426 19.8218 15.2969C19.9546 15.1104 20.0167 14.8828 19.9971 14.6548C19.9775 14.4268 19.8774 14.2131 19.7147 14.0521L13.25 7.58203L11.8691 8.96284L18.3389 15.4276Z",
      fill: "#6E7882"
    }), /* @__PURE__ */ j("path", {
      d: "M1.60882 17.3575L3.39466 18.3683C3.44844 18.3985 3.50907 18.4143 3.57075 18.4143C3.63242 18.4143 3.69305 18.3985 3.74683 18.3683L5.53267 17.3575C5.58764 17.3263 5.63336 17.2812 5.66518 17.2266C5.69699 17.172 5.71375 17.1099 5.71375 17.0467V15.098C5.71375 15.0349 5.69699 14.9728 5.66518 14.9182C5.63336 14.8636 5.58764 14.8185 5.53267 14.7873L3.74683 13.7765C3.69305 13.7463 3.63242 13.7305 3.57075 13.7305C3.50907 13.7305 3.44844 13.7463 3.39466 13.7765L1.60882 14.7873C1.55385 14.8185 1.50813 14.8636 1.47631 14.9182C1.4445 14.9728 1.42774 15.0349 1.42774 15.098V17.0453C1.42749 17.1087 1.44413 17.1711 1.47595 17.226C1.50778 17.2808 1.55364 17.3262 1.60882 17.3575Z",
      fill: "#6E7882"
    }), /* @__PURE__ */ j("path", {
      d: "M6.47257e-06 17.4785C-0.00065515 17.6708 0.0494172 17.86 0.145173 18.0268C0.240928 18.1936 0.37898 18.3322 0.545402 18.4286L3.04558 19.8605C3.20584 19.9519 3.38717 20 3.57168 20C3.7562 20 3.93753 19.9519 4.09779 19.8605L6.59797 18.4282C6.76434 18.3318 6.90236 18.1933 6.99811 18.0266C7.09386 17.8598 7.14396 17.6708 7.14336 17.4785V14.664C7.14403 14.4717 7.09395 14.2826 6.9982 14.1158C6.90244 13.949 6.76439 13.8104 6.59797 13.714L4.09779 12.2821C3.93752 12.1907 3.7562 12.1426 3.57168 12.1426C3.38717 12.1426 3.20585 12.1907 3.04558 12.2821L0.545402 13.7143C0.379032 13.8107 0.241015 13.9493 0.145262 14.116C0.04951 14.2827 -0.000592267 14.4718 6.47257e-06 14.664V17.4785ZM0.714342 15.0976C0.714383 14.908 0.764724 14.7219 0.860226 14.5581C0.955729 14.3943 1.09297 14.2588 1.25795 14.1654L3.04379 13.1546C3.20498 13.064 3.38677 13.0164 3.57168 13.0164C3.7566 13.0164 3.93839 13.064 4.09958 13.1546L5.88542 14.1654C6.0504 14.2588 6.18764 14.3943 6.28314 14.5581C6.37865 14.7219 6.42899 14.908 6.42903 15.0976V17.0449C6.42899 17.2345 6.37865 17.4207 6.28314 17.5844C6.18764 17.7482 6.0504 17.8837 5.88542 17.9771L4.09958 18.9879C3.93839 19.0785 3.7566 19.1261 3.57168 19.1261C3.38677 19.1261 3.20498 19.0785 3.04379 18.9879L1.25795 17.9771C1.09297 17.8837 0.955729 17.7482 0.860226 17.5844C0.764724 17.4207 0.714383 17.2345 0.714342 17.0449V15.0976Z",
      fill: "#6E7882"
    })]
  }), /* @__PURE__ */ j("defs", {
    children: /* @__PURE__ */ j("clipPath", {
      id: "clip0_8909_3741",
      children: /* @__PURE__ */ j("rect", {
        width: "20",
        height: "20",
        fill: "white"
      })
    })
  })]
}), pl = () => /* @__PURE__ */ Ve("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ j("path", {
    d: "M8 14.0019L4.5 10.5019L5.205 9.79688L8 12.5869L10.795 9.79688L11.5 10.5019L8 14.0019Z",
    fill: "#6E7882"
  }), /* @__PURE__ */ j("path", {
    d: "M8 2L11.5 5.5L10.795 6.205L8 3.415L5.205 6.205L4.5 5.5L8 2Z",
    fill: "#6E7882"
  })]
}), gl = () => /* @__PURE__ */ j("svg", {
  height: "100%",
  width: "100%",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ j("path", {
    d: "M16.0584 4.44167C14.9501 3.925 13.7501 3.55 12.5001 3.33334C12.4891 3.33299 12.4782 3.33504 12.4681 3.33936C12.458 3.34368 12.449 3.35016 12.4417 3.35834C12.2917 3.63334 12.1167 3.99167 12.0001 4.26667C10.6742 4.06667 9.32589 4.06667 8.00006 4.26667C7.88339 3.98334 7.70839 3.63334 7.55006 3.35834C7.54172 3.34167 7.51672 3.33334 7.49172 3.33334C6.24172 3.55 5.05006 3.925 3.93339 4.44167C3.92506 4.44167 3.91672 4.45 3.90839 4.45834C1.64172 7.85 1.01672 11.15 1.32506 14.4167C1.32506 14.4333 1.33339 14.45 1.35006 14.4583C2.85006 15.5583 4.29172 16.225 5.71672 16.6667C5.74172 16.675 5.76672 16.6667 5.77506 16.65C6.10839 16.1917 6.40839 15.7083 6.66672 15.2C6.68339 15.1667 6.66672 15.1333 6.63339 15.125C6.15839 14.9417 5.70839 14.725 5.26672 14.475C5.23339 14.4583 5.23339 14.4083 5.25839 14.3833C5.35006 14.3167 5.44172 14.2417 5.53339 14.175C5.55006 14.1583 5.57506 14.1583 5.59172 14.1667C8.45839 15.475 11.5501 15.475 14.3834 14.1667C14.4001 14.1583 14.4251 14.1583 14.4417 14.175C14.5334 14.25 14.6251 14.3167 14.7167 14.3917C14.7501 14.4167 14.7501 14.4667 14.7084 14.4833C14.2751 14.7417 13.8167 14.95 13.3417 15.1333C13.3084 15.1417 13.3001 15.1833 13.3084 15.2083C13.5751 15.7167 13.8751 16.2 14.2001 16.6583C14.2251 16.6667 14.2501 16.675 14.2751 16.6667C15.7084 16.225 17.1501 15.5583 18.6501 14.4583C18.6667 14.45 18.6751 14.4333 18.6751 14.4167C19.0417 10.6417 18.0667 7.36667 16.0917 4.45834C16.0834 4.45 16.0751 4.44167 16.0584 4.44167ZM7.10006 12.425C6.24172 12.425 5.52506 11.6333 5.52506 10.6583C5.52506 9.68334 6.22506 8.89167 7.10006 8.89167C7.98339 8.89167 8.68339 9.69167 8.67506 10.6583C8.67506 11.6333 7.97506 12.425 7.10006 12.425ZM12.9084 12.425C12.0501 12.425 11.3334 11.6333 11.3334 10.6583C11.3334 9.68334 12.0334 8.89167 12.9084 8.89167C13.7917 8.89167 14.4917 9.69167 14.4834 10.6583C14.4834 11.6333 13.7917 12.425 12.9084 12.425Z",
    fill: "currentColor"
  })
}), ml = () => /* @__PURE__ */ j(Ut, {
  component: () => /* @__PURE__ */ j(gl, {})
}), vl = () => /* @__PURE__ */ j("svg", {
  height: "100%",
  width: "100%",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ j("path", {
    d: "M18.6994 3.85188L16.0587 16.305C15.8594 17.1838 15.34 17.4025 14.6019 16.9888L10.5781 14.0238L8.63687 15.8913C8.42187 16.1063 8.2425 16.2856 7.82812 16.2856L8.1175 12.1881L15.5744 5.45001C15.8987 5.16126 15.5037 5.00063 15.0706 5.29001L5.85187 11.095L1.88312 9.85251C1.02 9.58313 1.00437 8.98938 2.06312 8.57501L17.5862 2.59438C18.305 2.32501 18.9337 2.75438 18.6994 3.85251V3.85188Z",
    fill: "currentColor"
  })
}), _l = () => /* @__PURE__ */ j(Ut, {
  component: () => /* @__PURE__ */ j(vl, {})
}), yl = () => /* @__PURE__ */ j("svg", {
  height: "100%",
  width: "100%",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ j("path", {
    d: "M18.125 4.96679C17.5273 5.2246 16.8769 5.41015 16.207 5.48242C16.9025 5.0692 17.4234 4.4164 17.6719 3.64648C17.0192 4.03474 16.3042 4.30699 15.5586 4.45117C15.2469 4.11801 14.87 3.85261 14.4514 3.67149C14.0327 3.49037 13.5812 3.39742 13.125 3.39843C11.2793 3.39843 9.79491 4.89453 9.79491 6.73046C9.79491 6.98828 9.82616 7.24609 9.87695 7.49414C7.11328 7.34961 4.64843 6.02929 3.00976 4.00781C2.71118 4.5178 2.55471 5.09848 2.55664 5.68945C2.55664 6.8457 3.14453 7.86523 4.04101 8.46484C3.5127 8.44403 2.99676 8.29882 2.53516 8.04101V8.08203C2.53516 9.70117 3.67969 11.043 5.20508 11.3516C4.91867 11.426 4.62403 11.464 4.32812 11.4648C4.11133 11.4648 3.90625 11.4434 3.69922 11.4141C4.12109 12.7344 5.34961 13.6934 6.8125 13.7246C5.66796 14.6211 4.23437 15.1484 2.67773 15.1484C2.39844 15.1484 2.14062 15.1387 1.87305 15.1074C3.34961 16.0547 5.10156 16.6016 6.98828 16.6016C13.1133 16.6016 16.4648 11.5273 16.4648 7.12304C16.4648 6.97851 16.4648 6.83398 16.4551 6.68945C17.1035 6.21484 17.6719 5.62695 18.125 4.96679Z",
    fill: "currentColor"
  })
}), wl = () => /* @__PURE__ */ j(Ut, {
  component: () => /* @__PURE__ */ j(yl, {})
}), bl = ({
  width: t,
  height: e
}) => /* @__PURE__ */ Ve("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: t,
  height: e,
  viewBox: "0 0 126.611 126.611",
  children: [/* @__PURE__ */ j("polygon", {
    fill: "#F3BA2F",
    points: "38.171,53.203 62.759,28.616 87.36,53.216 101.667,38.909 62.759,0 23.864,38.896 "
  }), /* @__PURE__ */ j("rect", {
    x: "3.644",
    y: "53.188",
    transform: "matrix(0.7071 0.7071 -0.7071 0.7071 48.7933 8.8106)",
    fill: "#F3BA2F",
    width: "20.233",
    height: "20.234"
  }), /* @__PURE__ */ j("polygon", {
    fill: "#F3BA2F",
    points: `38.171,73.408 62.759,97.995 87.359,73.396 101.674,87.695 101.667,87.703 62.759,126.611 \r
23.863,87.716 23.843,87.696 `
  }), /* @__PURE__ */ j("rect", {
    x: "101.64",
    y: "53.189",
    transform: "matrix(-0.7071 0.7071 -0.7071 -0.7071 235.5457 29.0503)",
    fill: "#F3BA2F",
    width: "20.234",
    height: "20.233"
  }), /* @__PURE__ */ j("polygon", {
    fill: "#F3BA2F",
    points: `77.271,63.298 77.277,63.298 62.759,48.78 52.03,59.509 52.029,59.509 50.797,60.742 48.254,63.285 \r
48.254,63.285 48.234,63.305 48.254,63.326 62.759,77.831 77.277,63.313 77.284,63.305 `
  })]
}), xl = ({
  height: t,
  width: e
}) => /* @__PURE__ */ j(Ut, {
  component: () => /* @__PURE__ */ j(bl, {
    width: e,
    height: t
  })
}), Cl = ({
  width: t,
  height: e
}) => /* @__PURE__ */ j("svg", {
  version: "1.1",
  height: e,
  width: t,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 38.4 33.5",
  children: /* @__PURE__ */ j("g", {
    children: /* @__PURE__ */ j("path", {
      style: {
        fill: "#8247E5"
      },
      d: "M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3\r c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7\r c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7\r c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1\r L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7\r c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"
    })
  })
}), Ml = ({
  height: t,
  width: e
}) => /* @__PURE__ */ j(Ut, {
  component: () => /* @__PURE__ */ j(Cl, {
    width: e,
    height: t
  })
}), El = ({
  width: t,
  height: e
}) => /* @__PURE__ */ j("svg", {
  x: "0px",
  y: "0px",
  height: e,
  width: t,
  viewBox: "0 0 256 417",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "xMidYMid",
  children: /* @__PURE__ */ Ve("g", {
    children: [/* @__PURE__ */ j("polygon", {
      fill: "#343434",
      points: "127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
    }), /* @__PURE__ */ j("polygon", {
      fill: "#8C8C8C",
      points: "127.962 0 0 212.32 127.962 287.959 127.962 154.158"
    }), /* @__PURE__ */ j("polygon", {
      fill: "#3C3C3B",
      points: "127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
    }), /* @__PURE__ */ j("polygon", {
      fill: "#8C8C8C",
      points: "127.962 416.9052 127.962 312.1852 0 236.5852"
    }), /* @__PURE__ */ j("polygon", {
      fill: "#141414",
      points: "127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
    }), /* @__PURE__ */ j("polygon", {
      fill: "#393939",
      points: "0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
    })]
  })
}), Sl = ({
  height: t,
  width: e
}) => /* @__PURE__ */ j(Ut, {
  component: () => /* @__PURE__ */ j(El, {
    height: t,
    width: e
  })
}), kl = (t) => t.underHeader !== void 0, Al = (t) => {
  if (!t)
    return [null, null];
  if (kl(t)) {
    const {
      underHeader: e,
      txt: r
    } = t;
    if (e)
      return [null, /* @__PURE__ */ j("div", {
        className: "title-under-header",
        children: r
      })];
  }
  return [/* @__PURE__ */ j(li, {
    children: t
  }), null];
}, op = ({
  children: t,
  visible: e,
  footer: r,
  onCancel: n,
  loading: o,
  title: i,
  className: l,
  viewMode: s
}) => {
  const d = () => {
    !o && n && n();
  };
  let v = l ? `oort-modal-mobile ${l}` : "oort-modal-mobile";
  s === void 0 ? s = "fullScreen" : s === "topGap" && (v = `${v} top-gap`);
  const m = s === "fullScreen" ? "100%" : "90%", A = Al(i);
  return /* @__PURE__ */ Ve(Cc, {
    className: v,
    height: m,
    title: A[0],
    closeIcon: /* @__PURE__ */ j(ul, {}),
    placement: "bottom",
    closable: !0,
    onClose: d,
    open: e,
    footer: r,
    children: [A[1], t]
  });
};
function io(t, e, r, n, o, i, l) {
  const {
    size: s,
    text: d,
    href: v
  } = e, m = /* @__PURE__ */ j(hr, {
    className: t,
    disabled: n,
    loading: o,
    size: s != null ? s : "large",
    type: i,
    onClick: l,
    children: d || r
  });
  return v ? /* @__PURE__ */ j("a", {
    href: v,
    children: m
  }) : m;
}
function ap({
  okBtn: t,
  cancelBtn: e,
  onCancel: r,
  onOk: n,
  loading: o,
  className: i
}) {
  var s, d;
  let l = "footer-buttons-mobile";
  return i && (l = `${l} ${i}`), e && t ? l = `${l} two-buttons` : l = `${l} single-button`, /* @__PURE__ */ Ve("div", {
    className: l,
    children: [e ? io("cancel-btn", e, "Cancel", o, void 0, (s = e.type) != null ? s : "default", r) : null, t ? io("ok-btn", t, "Ok", void 0, o, (d = t.type) != null ? d : "primary", n) : null]
  });
}
const Rl = "_root_1hn3b_1", Il = "_icon_before_1hn3b_1", Tl = "_icon_after_1hn3b_15", Ol = "_account_img_1hn3b_27", Bl = "_social_1hn3b_45", Nl = "_theme_name_1hn3b_63", Pt = {
  root: Rl,
  icon_before: Il,
  icon_after: Tl,
  account_img: Ol,
  social: Bl,
  theme_name: Nl
}, Ll = "_root_1m174_1", Pl = "_btn_caption_1m174_51", Fl = "_btn_icon_after_1m174_71", Dr = {
  root: Ll,
  btn_caption: Pl,
  btn_icon_after: Fl
}, oo = ({
  className: t,
  onClick: e,
  caption: r,
  iconBefore: n,
  iconAfter: o
}) => /* @__PURE__ */ Ve("li", {
  onClick: e,
  className: t,
  children: [n, /* @__PURE__ */ j("span", {
    className: Dr.btn_caption,
    children: r
  }), /* @__PURE__ */ j("span", {
    className: Dr.btn_icon_after,
    children: o
  })]
}), Ul = ({
  className: t,
  href: e,
  caption: r,
  icon: n
}) => /* @__PURE__ */ j("li", {
  className: t,
  children: /* @__PURE__ */ Ve("a", {
    href: e,
    children: [n, /* @__PURE__ */ j("span", {
      children: r
    })]
  })
}), ao = ({
  className: t,
  children: e
}) => /* @__PURE__ */ j("li", {
  className: t,
  children: e
}), ua = ({
  children: t,
  className: e
}) => {
  const r = e ? `${Dr.root} ${e}` : Dr.root;
  return /* @__PURE__ */ j("ul", {
    className: r,
    children: t.map((n) => n)
  });
}, Dl = (t, e, r) => {
  switch (t) {
    case dt.EthereumMainnet:
    case dt.EthereumRopsten:
    case dt.EthereumRinkeby:
    case dt.EthereumGoerli:
    case dt.EthereumKovan:
      return /* @__PURE__ */ j(Sl, {
        height: e,
        width: r
      });
    case dt.MaticMainnet:
    case dt.MaticMumbai:
      return /* @__PURE__ */ j(Ml, {
        height: e,
        width: r
      });
    case dt.BSCTestnet:
    case dt.BSCMainnet:
      return /* @__PURE__ */ j(xl, {
        height: e,
        width: r
      });
  }
  throw new Error(`Unknow chainId: ${t}`);
}, ql = "_root_rh9ts_3", Hl = {
  root: ql
}, $l = ({
  isDarkMode: t,
  onChange: e
}) => /* @__PURE__ */ j(Mc, {
  className: Hl.root,
  size: "default",
  checked: t,
  onChange: e
});
var fa = /* @__PURE__ */ ((t) => (t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Info = 2] = "Info", t[t.Warn = 3] = "Warn", t[t.Error = 4] = "Error", t))(fa || {});
class jl {
  constructor(e = 2) {
    je(this, "_curLogLevel");
    je(this, "log", (e, r) => {
      if (e >= this._curLogLevel) {
        const n = `${new Date(Date.now()).toISOString()} ${r}`;
        switch (e) {
          case 4:
            console.error(n);
            break;
          case 3:
            console.warn(n);
            break;
          case 2:
            console.info(n);
            break;
          case 1:
            console.log(n);
            break;
          case 0:
            console.trace(n);
            break;
        }
      }
    });
    je(this, "trace", (e) => this.log(0, e));
    je(this, "debug", (e) => this.log(1, e));
    je(this, "info", (e) => this.log(2, e));
    je(this, "warn", (e) => this.log(3, e));
    je(this, "error", (e) => this.log(4, e));
    this._curLogLevel = e;
  }
}
const Wl = (t) => {
  if (t = t.toLowerCase(), t === "trace")
    return 0;
  if (t === "debug")
    return 1;
  if (t === "info")
    return 2;
  if (t === "warn")
    return 3;
  if (t === "error")
    return 4;
  throw new Error(`Unknown LogLevel: ${t}`);
}, so = "logLevel";
function zl() {
  let t = localStorage.getItem(so);
  if (t)
    return Wl(t);
  let e = 2;
  return localStorage.setItem(so, fa[e].toLowerCase()), e;
}
const ha = new jl(zl()), Vl = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
var Kl = /* @__PURE__ */ ((t) => (t.xs = "xs", t.sm = "sm", t.md = "md", t.lg = "lg", t.xl = "xl", t.xxl = "xxl", t))(Kl || {});
function co(t, e) {
  ha.debug(`window.outerWidth: ${t}`);
  const {
    sm: r,
    md: n,
    lg: o,
    xl: i,
    xxl: l
  } = e;
  return t < r ? "xs" : t < n ? "sm" : t < o ? "md" : t < i ? "lg" : t < l ? "xl" : "xxl";
}
function Yl(t) {
  const e = t || Vl, [r, n] = Un(co(window.outerWidth, e)), [o, i] = Un(window.outerWidth);
  return ta(() => {
    function l() {
      const s = window.outerWidth, d = co(s, e);
      ha.debug(`screenSize: ${d}`), n(d), i(s);
    }
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [e]), [o, r];
}
const lo = {
  min: 650,
  max: 1200
};
var qn = /* @__PURE__ */ ((t) => (t.Phone = "PHONE", t.Tablet = "TABLET", t.Desktop = "DESKTOP", t))(qn || {});
function Jl() {
  const [t] = Yl();
  return t <= lo.min ? "PHONE" : t > lo.max ? "DESKTOP" : "TABLET";
}
const Gl = ({
  desktop: t,
  mobile: e,
  tablet: r
}) => {
  const n = Jl();
  return /* @__PURE__ */ Ve(kc, {
    fallback: /* @__PURE__ */ j("span", {}),
    children: [" ", (() => n === qn.Desktop ? t : n === qn.Phone ? e : r)(), " "]
  });
}, Zl = ra(() => import("./connectModalDesktop.f2703179.mjs")), Ql = ra(() => import("./connectModalMobile.3f703dd9.mjs")), Xl = (t) => {
  const {
    onCancel: e,
    visible: r,
    supportedChains: n,
    chain: o,
    switchChain: i,
    canSwitchChain: l,
    connectAsync: s,
    account: d,
    connectorName: v,
    supportedConnectors: m
  } = t, A = /* @__PURE__ */ j(Zl, {
    onCancel: e,
    visible: r,
    supportedChains: n,
    chain: o,
    switchChain: i,
    canSwitchChain: l,
    connectAsync: s,
    account: d,
    connectorName: v,
    supportedConnectors: m
  });
  return /* @__PURE__ */ j(Gl, {
    desktop: A,
    tablet: A,
    mobile: /* @__PURE__ */ j(Ql, {
      onCancel: e,
      visible: r,
      supportedChains: n,
      chain: o,
      switchChain: i,
      canSwitchChain: l,
      connectAsync: s,
      account: d,
      connectorName: v,
      supportedConnectors: m
    })
  });
};
var da = {}, Kt = {}, pa = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randArr = new Array(4);
  function e(n) {
    let o;
    for (o = 0; o < t.randArr.length; o++)
      t.randArr[o] = 0;
    for (o = 0; o < n.length; o++)
      t.randArr[o % 4] = (t.randArr[o % 4] << 5) - t.randArr[o % 4] + n.charCodeAt(o);
  }
  t.seedRandomness = e;
  function r() {
    let n = t.randArr[0] ^ t.randArr[0] << 11;
    return t.randArr[0] = t.randArr[1], t.randArr[1] = t.randArr[2], t.randArr[2] = t.randArr[3], t.randArr[3] = t.randArr[3] ^ t.randArr[3] >> 19 ^ n ^ n >> 8, (t.randArr[3] >>> 0) / (1 << 31 >>> 0);
  }
  t.random = r;
})(pa);
var br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.DEFAULT_SIZE = 8;
br.DEFAULT_SCALE = 4;
Object.defineProperty(Kt, "__esModule", { value: !0 });
const Et = pa, uo = br;
function Pr() {
  let t = Math.floor(Et.random() * 360), e = Et.random() * 60 + 40 + "%", r = (Et.random() + Et.random() + Et.random() + Et.random()) * 25 + "%";
  return "hsl(" + t + "," + e + "," + r + ")";
}
Kt.createColor = Pr;
function eu(t) {
  let e = t, r = t, n = Math.ceil(e / 2), o = e - n, i = [];
  for (let l = 0; l < r; l++) {
    let s = [];
    for (let v = 0; v < n; v++)
      s[v] = Math.floor(Et.random() * 2.3);
    let d = s.slice(0, o);
    d.reverse(), s = s.concat(d);
    for (let v = 0; v < s.length; v++)
      i.push(s[v]);
  }
  return i;
}
Kt.createImageData = eu;
function tu(t) {
  const e = t.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
  return Et.seedRandomness(e), {
    seed: e,
    size: t.size || uo.DEFAULT_SIZE,
    scale: t.scale || uo.DEFAULT_SCALE,
    color: t.color || Pr(),
    bgcolor: t.bgcolor || Pr(),
    spotcolor: t.spotcolor || Pr()
  };
}
Kt.parseOptions = tu;
(function(t) {
  function e(i) {
    for (var l in i)
      t.hasOwnProperty(l) || (t[l] = i[l]);
  }
  Object.defineProperty(t, "__esModule", { value: !0 });
  const r = Kt;
  function n(i, l) {
    var s, d, v, m, A;
    const B = r.parseOptions(i || {});
    let L = r.createImageData(B.size), P = Math.sqrt(L.length);
    l.width = l.height = B.size * B.scale;
    let z = l.getContext("2d");
    (s = z) === null || s === void 0 || (s.fillStyle = B.bgcolor), (d = z) === null || d === void 0 || d.fillRect(0, 0, l.width, l.height), (v = z) === null || v === void 0 || (v.fillStyle = B.color);
    for (let M = 0; M < L.length; M++)
      if (L[M]) {
        let I = Math.floor(M / P), R = M % P;
        (m = z) === null || m === void 0 || (m.fillStyle = L[M] === 1 ? B.color : B.spotcolor), (A = z) === null || A === void 0 || A.fillRect(R * B.scale, I * B.scale, B.scale, B.scale);
      }
    return l;
  }
  t.render = n;
  function o(i) {
    let l = document.createElement("canvas");
    return n(i, l), l;
  }
  t.create = o, e(Kt), e(br), t.default = {
    create: o,
    render: n
  };
})(da);
const ru = ({
  address: t,
  className: e
}) => {
  if (!t)
    return null;
  const r = da.create({
    seed: t
  }).toDataURL();
  return /* @__PURE__ */ j("img", {
    src: r,
    className: e,
    alt: "blockies"
  });
}, nu = "https://twitter.com/OortDigital", iu = "https://t.co/6eYdGdfUK7?amp=1", ou = "https://t.me/oortdigital", au = /* @__PURE__ */ Ve(li, {
  children: [/* @__PURE__ */ j("a", {
    href: ou,
    children: /* @__PURE__ */ j(_l, {})
  }), /* @__PURE__ */ j("a", {
    href: nu,
    children: /* @__PURE__ */ j(wl, {})
  }), /* @__PURE__ */ j("a", {
    href: iu,
    children: /* @__PURE__ */ j(ml, {})
  })]
}), su = (t) => {
  const {
    className: e,
    chain: r,
    account: n,
    isDarkMode: o,
    onThemeChange: i
  } = t, [l, s] = Un(!1), d = () => {
    const {
      supportedChains: z,
      chain: M,
      switchChain: I,
      canSwitchChain: R,
      connectAsync: T,
      account: U,
      connectorName: Y,
      supportedConnectors: Q
    } = t;
    return /* @__PURE__ */ j(Xl, {
      onCancel: () => s(!1),
      visible: l,
      supportedChains: z,
      chain: M,
      switchChain: I,
      canSwitchChain: R,
      connectAsync: T,
      account: U,
      connectorName: Y,
      supportedConnectors: Q
    });
  }, v = e ? `${e} ${Pt.root}` : Pt.root, {
    chainId: m,
    name: A
  } = r, B = /* @__PURE__ */ j("span", {
    className: Pt.icon_before,
    children: Dl(m, 20, 20)
  }), L = /* @__PURE__ */ j(ru, {
    address: n,
    className: Pt.account_img
  }), P = /* @__PURE__ */ j("span", {
    className: Pt.icon_after,
    children: /* @__PURE__ */ j(pl, {})
  });
  return /* @__PURE__ */ Ve(li, {
    children: [d(), /* @__PURE__ */ Ve(ua, {
      className: v,
      children: [/* @__PURE__ */ j(ao, {
        className: Pt.social,
        children: au
      }, "social"), /* @__PURE__ */ j(oo, {
        iconBefore: B,
        iconAfter: P,
        caption: A
      }, "chain"), /* @__PURE__ */ j(oo, {
        onClick: () => s(!0),
        iconBefore: L,
        iconAfter: P,
        caption: n.toMasskedAddress()
      }, "account"), /* @__PURE__ */ Ve(ao, {
        children: [/* @__PURE__ */ j($l, {
          isDarkMode: o,
          onChange: i
        }), /* @__PURE__ */ j("span", {
          className: Pt.theme_name,
          children: o ? "light" : "dark"
        })]
      }, "theme-switch")]
    })]
  });
}, cu = "_root_1mm8n_3", lu = "_sider_1mm8n_15", uu = "_logo_1mm8n_27", fu = "_footer_1mm8n_39", hu = "_content_1mm8n_47", ur = {
  root: cu,
  sider: lu,
  logo: uu,
  footer: fu,
  content: hu
}, du = "_root_bfx8g_3", pu = "_icon_bfx8g_13", gu = "_logo_txt_bfx8g_23", mu = "_version_bfx8g_59", Tr = {
  root: du,
  icon: pu,
  logo_txt: gu,
  version: mu
}, vu = ({
  className: t,
  v: e
}) => /* @__PURE__ */ Ve("div", {
  className: `${Tr.root} ${t || ""}`,
  children: [/* @__PURE__ */ j("div", {
    className: Tr.icon,
    children: /* @__PURE__ */ j(fl, {})
  }), /* @__PURE__ */ Ve("div", {
    className: Tr.logo_txt,
    children: [/* @__PURE__ */ j("div", {
      children: "oort"
    }), /* @__PURE__ */ j("div", {
      children: "digital"
    })]
  }), /* @__PURE__ */ Ve("div", {
    className: Tr.version,
    children: ["v", e]
  })]
}), _u = "_root_4kwej_1", yu = "_active_4kwej_1", wu = "_icon_4kwej_33", Hn = {
  root: _u,
  active: yu,
  icon: wu
}, bu = [{
  href: "https://test-minting.netlify.app",
  caption: "dashboard",
  icon: /* @__PURE__ */ j(hl, {})
}, {
  href: "https://test-minting.netlify.app",
  caption: "rent app",
  icon: /* @__PURE__ */ j(Ir, {})
}, {
  href: "https://test-minting.netlify.app",
  caption: "mint",
  icon: /* @__PURE__ */ j(dl, {})
}, {
  href: "",
  caption: "menu Item 1",
  icon: /* @__PURE__ */ j(Ir, {})
}, {
  href: "",
  caption: "Menu Item 2",
  icon: /* @__PURE__ */ j(Ir, {})
}, {
  href: "",
  caption: "Menu Item 3",
  icon: /* @__PURE__ */ j(Ir, {})
}], xu = (t, e) => {
  const {
    caption: r,
    href: n
  } = t, o = e ? Hn.active : "", i = /* @__PURE__ */ j("span", {
    className: Hn.icon,
    children: t.icon
  });
  return /* @__PURE__ */ j(Ul, {
    className: o,
    href: n,
    caption: r,
    icon: i
  }, r);
}, Cu = ({
  className: t
}) => /* @__PURE__ */ j(ua, {
  className: `${Hn.root} ${t || ""}`,
  children: bu.map((e, r) => xu(e, r === 0))
}), sp = (t) => {
  const {
    children: e,
    chain: r,
    account: n,
    isDarkMode: o,
    onThemeChange: i,
    supportedChains: l,
    switchChain: s,
    canSwitchChain: d,
    connectAsync: v,
    connectorName: m,
    supportedConnectors: A
  } = t, B = () => !r || !n ? null : /* @__PURE__ */ j(su, {
    isDarkMode: o,
    onThemeChange: i,
    className: ur.footer,
    account: n,
    chain: r,
    supportedChains: l,
    switchChain: s,
    canSwitchChain: d,
    connectAsync: v,
    connectorName: m,
    supportedConnectors: A
  });
  return /* @__PURE__ */ Ve("div", {
    className: ur.root,
    children: [/* @__PURE__ */ Ve("div", {
      className: ur.sider,
      children: [/* @__PURE__ */ j(vu, {
        className: ur.logo,
        v: "3.0"
      }), /* @__PURE__ */ j(Cu, {}), B()]
    }), /* @__PURE__ */ j("div", {
      className: ur.content,
      children: e
    })]
  });
}, fi = "cur_connector", Mu = () => {
  const t = localStorage.getItem(fi);
  return t || void 0;
}, Eu = (t) => localStorage.setItem(fi, t), Su = () => localStorage.removeItem(fi);
class cp {
  constructor(e, r) {
    je(this, "_logger");
    je(this, "connectorsByName", {});
    je(this, "_curConnector");
    je(this, "WaitInitialisationAsync");
    this._logger = e, this.WaitInitialisationAsync = this.InitAsync(r, Mu());
  }
  async InitAsync(e, r) {
    let n;
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      this.connectorsByName[i.name] = i, i.name === r && await i.isConnected && (n = i);
    }
    n && await n.enable() && (this._curConnector = n, this._logger.debug(`Current connector is ${this._curConnector.name}`));
  }
  get CurConnector() {
    return this._curConnector;
  }
  async EnableAsync(e) {
    await this.WaitInitialisationAsync;
    const r = this.connectorsByName[e];
    await r.enable() && (Eu(e), this._curConnector = r);
  }
  async disconnect() {
    var e;
    await ((e = this._curConnector) == null ? void 0 : e.disconnect()), Su(), this._curConnector = void 0;
  }
}
class ga {
  constructor(e, r, n) {
    je(this, "name");
    je(this, "_chains", {});
    je(this, "_externalAccountChangedHandlers", []);
    je(this, "accountsChangedHandler");
    je(this, "_externalChainChangedHandlers", []);
    je(this, "chainChangedHandler");
    je(this, "_externalDisconnectHandlers", []);
    je(this, "disconnectHandler");
    je(this, "logger");
    je(this, "_checkConnectionDelayMs", 500);
    je(this, "_timerId");
    this.name = r, this.logger = e, n.forEach((o) => this._chains[o.chainId] = o);
  }
  async CheckConnection() {
    await this.isConnected || (this._timerId && (clearInterval(this._timerId), this.logger.debug(`${this.name}Connector. CheckConnection stopped`)), this._externalDisconnectHandlers.forEach((e) => e(void 0)), this._externalDisconnectHandlers = []);
  }
  initListeners(e) {
    this.logger.debug("initListeners");
    const r = this;
    this.accountsChangedHandler = (n) => {
      this.logger.debug(`${this.name}.accountsChangedHandler`), r._externalAccountChangedHandlers.forEach((o) => o(n));
    }, this.chainChangedHandler = (n) => {
      this.logger.debug(`${this.name}.chainChangedHandler`), r._externalChainChangedHandlers.forEach((o) => o(n));
    }, this.disconnectHandler = (n) => {
      this.logger.debug(`${this.name}.disconnectHandler ${JSON.stringify(n)}`), r._externalDisconnectHandlers.forEach((o) => o(n));
    }, e.on("accountsChanged", this.accountsChangedHandler), e.on("chainChanged", this.chainChangedHandler);
  }
  removeListeners() {
    this.rawProvider.removeListener("accountsChanged", this.accountsChangedHandler), this.rawProvider.removeListener("chainChanged", this.chainChangedHandler), this._externalAccountChangedHandlers = [], this._externalChainChangedHandlers = [], this._externalDisconnectHandlers = [];
  }
  onAccountsChanged(e) {
    this._externalAccountChangedHandlers.push(e);
  }
  onChainChanged(e) {
    this._externalChainChangedHandlers.push(e);
  }
  onDisconnect(e) {
    if (!this._timerId) {
      const r = this;
      this._timerId = setInterval(() => r.CheckConnection(), this._checkConnectionDelayMs);
    }
    this._externalDisconnectHandlers.push(e);
  }
  get signer() {
    return new Ac.Web3Provider(this.rawProvider).getSigner();
  }
  disconnect() {
    return this.removeListeners(), Promise.resolve();
  }
}
var hi = /* @__PURE__ */ ((t) => (t.Undefined = "", t.Injected = "Injected", t.WalletConnect = "WalletConnect", t))(hi || {});
class lp extends ga {
  constructor(r, n) {
    super(r, hi.Injected, n);
    je(this, "_ethRequestAccounts");
    this.isInstalled && this.initListeners(window.ethereum);
  }
  get canSwitchChain() {
    return !!window.ethereum.isMetaMask;
  }
  async switchChain(r) {
    const n = `0x${r.toString(16)}`;
    try {
      if (!this._chains[r])
        throw new Error(`Chain ${r} not supported`);
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: n }]
      });
    } catch (o) {
      if (o.code === 4902)
        try {
          const i = this._chains[r];
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: n,
              chainName: i.name,
              rpcUrls: [i.rpcUrl],
              nativeCurrency: i.nativeCurrency,
              blockExplorerUrls: [i.blockExplorer]
            }]
          });
        } catch (i) {
          throw i;
        }
    }
  }
  async prvEnable() {
    try {
      await this.rawProvider.request({ method: "eth_requestAccounts" });
    } catch (r) {
      return r.code === 4001 ? this.logger.warn("Please connect to MetaMask.") : this.logger.error(r), !1;
    }
    return !0;
  }
  async enable() {
    if (this._ethRequestAccounts)
      return this.logger.debug("InjectedConnector.enable already called"), await this._ethRequestAccounts;
    this.logger.debug("InjectedConnector.enable"), this._ethRequestAccounts = this.prvEnable();
    const r = await this._ethRequestAccounts;
    return this._ethRequestAccounts = void 0, r;
  }
  async isConnectedAsync() {
    return (await window.ethereum.request({ method: "eth_accounts" })).length > 0;
  }
  get isConnected() {
    return this.isConnectedAsync();
  }
  get isInstalled() {
    return !!window.ethereum;
  }
  get installUrl() {
    return "https://metamask.io/download";
  }
  get rawProvider() {
    return window.ethereum;
  }
}
var di = {}, We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
var ma = We.getLocalStorage = ka = We.getLocalStorageOrThrow = Sa = We.getCrypto = Ea = We.getCryptoOrThrow = Ma = We.getLocation = Ca = We.getLocationOrThrow = xa = We.getNavigator = ba = We.getNavigatorOrThrow = wa = We.getDocument = ya = We.getDocumentOrThrow = _a = We.getFromWindowOrThrow = va = We.getFromWindow = void 0;
function Dt(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
var va = We.getFromWindow = Dt;
function tr(t) {
  const e = Dt(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
var _a = We.getFromWindowOrThrow = tr;
function ku() {
  return tr("document");
}
var ya = We.getDocumentOrThrow = ku;
function Au() {
  return Dt("document");
}
var wa = We.getDocument = Au;
function Ru() {
  return tr("navigator");
}
var ba = We.getNavigatorOrThrow = Ru;
function Iu() {
  return Dt("navigator");
}
var xa = We.getNavigator = Iu;
function Tu() {
  return tr("location");
}
var Ca = We.getLocationOrThrow = Tu;
function Ou() {
  return Dt("location");
}
var Ma = We.getLocation = Ou;
function Bu() {
  return tr("crypto");
}
var Ea = We.getCryptoOrThrow = Bu;
function Nu() {
  return Dt("crypto");
}
var Sa = We.getCrypto = Nu;
function Lu() {
  return tr("localStorage");
}
var ka = We.getLocalStorageOrThrow = Lu;
function Pu() {
  return Dt("localStorage");
}
ma = We.getLocalStorage = Pu;
Object.defineProperty(di, "__esModule", { value: !0 });
var Aa = di.getWindowMetadata = void 0;
const fo = We;
function Fu() {
  let t, e;
  try {
    t = fo.getDocumentOrThrow(), e = fo.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const A = t.getElementsByTagName("link"), B = [];
    for (let L = 0; L < A.length; L++) {
      const P = A[L], z = P.getAttribute("rel");
      if (z && z.toLowerCase().indexOf("icon") > -1) {
        const M = P.getAttribute("href");
        if (M)
          if (M.toLowerCase().indexOf("https:") === -1 && M.toLowerCase().indexOf("http:") === -1 && M.indexOf("//") !== 0) {
            let I = e.protocol + "//" + e.host;
            if (M.indexOf("/") === 0)
              I += M;
            else {
              const R = e.pathname.split("/");
              R.pop(), I += R.join("/") + "/" + M;
            }
            B.push(I);
          } else if (M.indexOf("//") === 0) {
            const I = e.protocol + M;
            B.push(I);
          } else
            B.push(M);
      }
    }
    return B;
  }
  function n(...A) {
    const B = t.getElementsByTagName("meta");
    for (let L = 0; L < B.length; L++) {
      const P = B[L], z = ["itemprop", "property", "name"].map((M) => P.getAttribute(M)).filter((M) => M ? A.includes(M) : !1);
      if (z.length && z) {
        const M = P.getAttribute("content");
        if (M)
          return M;
      }
    }
    return "";
  }
  function o() {
    let A = n("name", "og:site_name", "og:title", "twitter:title");
    return A || (A = t.title), A;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const l = o(), s = i(), d = e.origin, v = r();
  return {
    description: s,
    url: d,
    icons: v,
    name: l
  };
}
Aa = di.getWindowMetadata = Fu;
var Uu = globalThis && globalThis.__spreadArrays || function() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), o = 0, e = 0; e < r; e++)
    for (var i = arguments[e], l = 0, s = i.length; l < s; l++, o++)
      n[o] = i[l];
  return n;
}, Du = function() {
  function t(e, r, n) {
    this.name = e, this.version = r, this.os = n, this.type = "browser";
  }
  return t;
}(), qu = function() {
  function t(e) {
    this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
  }
  return t;
}(), Hu = function() {
  function t(e, r, n, o) {
    this.name = e, this.version = r, this.os = n, this.bot = o, this.type = "bot-device";
  }
  return t;
}(), $u = function() {
  function t() {
    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
  }
  return t;
}(), ju = function() {
  function t() {
    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
  }
  return t;
}(), Wu = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, zu = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ho = 3, Vu = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FBAV\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["searchbot", Wu]
], po = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function Ku(t) {
  return t ? go(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new ju() : typeof navigator < "u" ? go(navigator.userAgent) : Gu();
}
function Yu(t) {
  return t !== "" && Vu.reduce(function(e, r) {
    var n = r[0], o = r[1];
    if (e)
      return e;
    var i = o.exec(t);
    return !!i && [n, i];
  }, !1);
}
function go(t) {
  var e = Yu(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new $u();
  var o = n[1] && n[1].split(/[._]/).slice(0, 3);
  o ? o.length < ho && (o = Uu(o, Zu(ho - o.length))) : o = [];
  var i = o.join("."), l = Ju(t), s = zu.exec(t);
  return s && s[1] ? new Hu(r, i, l, s[1]) : new Du(r, i, l);
}
function Ju(t) {
  for (var e = 0, r = po.length; e < r; e++) {
    var n = po[e], o = n[0], i = n[1], l = i.exec(t);
    if (l)
      return o;
  }
  return null;
}
function Gu() {
  var t = typeof process < "u" && process.version;
  return t ? new qu(process.version.slice(1)) : null;
}
function Zu(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
function Jr(t) {
  return Ku(t);
}
function Gr() {
  const t = Jr();
  return t && t.os ? t.os : void 0;
}
function Ra() {
  const t = Gr();
  return t ? t.toLowerCase().includes("android") : !1;
}
function Ia() {
  const t = Gr();
  return t ? t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : !1;
}
function Ta() {
  return Gr() ? Ra() || Ia() : !1;
}
function Oa() {
  const t = Jr();
  return t && t.name ? t.name.toLowerCase() === "node" : !1;
}
function Ba() {
  return !Oa() && !!La();
}
const Na = va, Qu = _a, Xu = ya, ef = wa, tf = ba, La = xa, rf = Ca, Pa = Ma, nf = Ea, of = Sa, af = ka, Zr = ma;
function $n() {
  return Aa();
}
function sf(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function cf(t) {
  return typeof t == "string" ? t : JSON.stringify(t);
}
const Fa = sf, Ua = cf;
function pi(t, e) {
  const r = Ua(e), n = Zr();
  n && n.setItem(t, r);
}
function gi(t) {
  let e = null, r = null;
  const n = Zr();
  return n && (r = n.getItem(t)), e = r && Fa(r), e;
}
function mi(t) {
  const e = Zr();
  e && e.removeItem(t);
}
const qr = "WALLETCONNECT_DEEPLINK_CHOICE";
function lf(t, e) {
  const r = encodeURIComponent(t);
  return e.universalLink ? `${e.universalLink}/wc?uri=${r}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${r}` : "";
}
function uf(t) {
  const e = t.href.split("?")[0];
  pi(qr, Object.assign(Object.assign({}, t), { href: e }));
}
function Da(t, e) {
  return t.filter((r) => r.name.toLowerCase().includes(e.toLowerCase()))[0];
}
function ff(t, e) {
  let r = t;
  return e && (r = e.map((n) => Da(t, n)).filter(Boolean)), r;
}
const qa = "https://registry.walletconnect.com";
function hf() {
  return qa + "/api/v2/wallets";
}
function df() {
  return qa + "/api/v2/dapps";
}
function Ha(t, e = "mobile") {
  var r;
  return {
    name: t.name || "",
    shortName: t.metadata.shortName || "",
    color: t.metadata.colors.primary || "",
    logo: (r = t.image_url.sm) !== null && r !== void 0 ? r : "",
    universalLink: t[e].universal || "",
    deepLink: t[e].native || ""
  };
}
function pf(t, e = "mobile") {
  return Object.values(t).filter((r) => !!r[e].universal || !!r[e].native).map((r) => Ha(r, e));
}
const gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  detectEnv: Jr,
  detectOS: Gr,
  isAndroid: Ra,
  isIOS: Ia,
  isMobile: Ta,
  isNode: Oa,
  isBrowser: Ba,
  getFromWindow: Na,
  getFromWindowOrThrow: Qu,
  getDocumentOrThrow: Xu,
  getDocument: ef,
  getNavigatorOrThrow: tf,
  getNavigator: La,
  getLocationOrThrow: rf,
  getLocation: Pa,
  getCryptoOrThrow: nf,
  getCrypto: of,
  getLocalStorageOrThrow: af,
  getLocalStorage: Zr,
  getClientMeta: $n,
  safeJsonParse: Fa,
  safeJsonStringify: Ua,
  setLocal: pi,
  getLocal: gi,
  removeLocal: mi,
  mobileLinkChoiceKey: qr,
  formatIOSMobile: lf,
  saveMobileLinkInfo: uf,
  getMobileRegistryEntry: Da,
  getMobileLinkRegistry: ff,
  getWalletRegistryUrl: hf,
  getDappRegistryUrl: df,
  formatMobileRegistryEntry: Ha,
  formatMobileRegistry: pf
}, Symbol.toStringTag, { value: "Module" })), mf = [
  "session_request",
  "session_update",
  "exchange_key",
  "connect",
  "disconnect",
  "display_uri",
  "modal_closed",
  "transport_open",
  "transport_close",
  "transport_error"
], vi = [
  "eth_sendTransaction",
  "eth_signTransaction",
  "eth_sign",
  "eth_signTypedData",
  "eth_signTypedData_v1",
  "eth_signTypedData_v2",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
], vf = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan"
};
var $a = { exports: {} };
const _f = {}, yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _f
}, Symbol.toStringTag, { value: "Module" })), Qr = /* @__PURE__ */ ci(yf);
(function(t) {
  (function(e, r) {
    function n(E, a) {
      if (!E)
        throw new Error(a || "Assertion failed");
    }
    function o(E, a) {
      E.super_ = a;
      var h = function() {
      };
      h.prototype = a.prototype, E.prototype = new h(), E.prototype.constructor = E;
    }
    function i(E, a, h) {
      if (i.isBN(E))
        return E;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, E !== null && ((a === "le" || a === "be") && (h = a, a = 10), this._init(E || 0, a || 10, h || "be"));
    }
    typeof e == "object" ? e.exports = i : r.BN = i, i.BN = i, i.wordSize = 26;
    var l;
    try {
      l = Qr.Buffer;
    } catch {
    }
    i.isBN = function(a) {
      return a instanceof i ? !0 : a !== null && typeof a == "object" && a.constructor.wordSize === i.wordSize && Array.isArray(a.words);
    }, i.max = function(a, h) {
      return a.cmp(h) > 0 ? a : h;
    }, i.min = function(a, h) {
      return a.cmp(h) < 0 ? a : h;
    }, i.prototype._init = function(a, h, g) {
      if (typeof a == "number")
        return this._initNumber(a, h, g);
      if (typeof a == "object")
        return this._initArray(a, h, g);
      h === "hex" && (h = 16), n(h === (h | 0) && h >= 2 && h <= 36), a = a.toString().replace(/\s+/g, "");
      var y = 0;
      a[0] === "-" && y++, h === 16 ? this._parseHex(a, y) : this._parseBase(a, h, y), a[0] === "-" && (this.negative = 1), this.strip(), g === "le" && this._initArray(this.toArray(), h, g);
    }, i.prototype._initNumber = function(a, h, g) {
      a < 0 && (this.negative = 1, a = -a), a < 67108864 ? (this.words = [a & 67108863], this.length = 1) : a < 4503599627370496 ? (this.words = [
        a & 67108863,
        a / 67108864 & 67108863
      ], this.length = 2) : (n(a < 9007199254740992), this.words = [
        a & 67108863,
        a / 67108864 & 67108863,
        1
      ], this.length = 3), g === "le" && this._initArray(this.toArray(), h, g);
    }, i.prototype._initArray = function(a, h, g) {
      if (n(typeof a.length == "number"), a.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(a.length / 3), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var x, k, N = 0;
      if (g === "be")
        for (y = a.length - 1, x = 0; y >= 0; y -= 3)
          k = a[y] | a[y - 1] << 8 | a[y - 2] << 16, this.words[x] |= k << N & 67108863, this.words[x + 1] = k >>> 26 - N & 67108863, N += 24, N >= 26 && (N -= 26, x++);
      else if (g === "le")
        for (y = 0, x = 0; y < a.length; y += 3)
          k = a[y] | a[y + 1] << 8 | a[y + 2] << 16, this.words[x] |= k << N & 67108863, this.words[x + 1] = k >>> 26 - N & 67108863, N += 24, N >= 26 && (N -= 26, x++);
      return this.strip();
    };
    function s(E, a, h) {
      for (var g = 0, y = Math.min(E.length, h), x = a; x < y; x++) {
        var k = E.charCodeAt(x) - 48;
        g <<= 4, k >= 49 && k <= 54 ? g |= k - 49 + 10 : k >= 17 && k <= 22 ? g |= k - 17 + 10 : g |= k & 15;
      }
      return g;
    }
    i.prototype._parseHex = function(a, h) {
      this.length = Math.ceil((a.length - h) / 6), this.words = new Array(this.length);
      for (var g = 0; g < this.length; g++)
        this.words[g] = 0;
      var y, x, k = 0;
      for (g = a.length - 6, y = 0; g >= h; g -= 6)
        x = s(a, g, g + 6), this.words[y] |= x << k & 67108863, this.words[y + 1] |= x >>> 26 - k & 4194303, k += 24, k >= 26 && (k -= 26, y++);
      g + 6 !== h && (x = s(a, h, g + 6), this.words[y] |= x << k & 67108863, this.words[y + 1] |= x >>> 26 - k & 4194303), this.strip();
    };
    function d(E, a, h, g) {
      for (var y = 0, x = Math.min(E.length, h), k = a; k < x; k++) {
        var N = E.charCodeAt(k) - 48;
        y *= g, N >= 49 ? y += N - 49 + 10 : N >= 17 ? y += N - 17 + 10 : y += N;
      }
      return y;
    }
    i.prototype._parseBase = function(a, h, g) {
      this.words = [0], this.length = 1;
      for (var y = 0, x = 1; x <= 67108863; x *= h)
        y++;
      y--, x = x / h | 0;
      for (var k = a.length - g, N = k % y, b = Math.min(k, k - N) + g, c = 0, _ = g; _ < b; _ += y)
        c = d(a, _, _ + y, h), this.imuln(x), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      if (N !== 0) {
        var H = 1;
        for (c = d(a, _, a.length, h), _ = 0; _ < N; _++)
          H *= h;
        this.imuln(H), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
      }
    }, i.prototype.copy = function(a) {
      a.words = new Array(this.length);
      for (var h = 0; h < this.length; h++)
        a.words[h] = this.words[h];
      a.length = this.length, a.negative = this.negative, a.red = this.red;
    }, i.prototype.clone = function() {
      var a = new i(null);
      return this.copy(a), a;
    }, i.prototype._expand = function(a) {
      for (; this.length < a; )
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
    var v = [
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
    ], m = [
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
    ], A = [
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
    i.prototype.toString = function(a, h) {
      a = a || 10, h = h | 0 || 1;
      var g;
      if (a === 16 || a === "hex") {
        g = "";
        for (var y = 0, x = 0, k = 0; k < this.length; k++) {
          var N = this.words[k], b = ((N << y | x) & 16777215).toString(16);
          x = N >>> 24 - y & 16777215, x !== 0 || k !== this.length - 1 ? g = v[6 - b.length] + b + g : g = b + g, y += 2, y >= 26 && (y -= 26, k--);
        }
        for (x !== 0 && (g = x.toString(16) + g); g.length % h !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      if (a === (a | 0) && a >= 2 && a <= 36) {
        var c = m[a], _ = A[a];
        g = "";
        var H = this.clone();
        for (H.negative = 0; !H.isZero(); ) {
          var q = H.modn(_).toString(a);
          H = H.idivn(_), H.isZero() ? g = q + g : g = v[c - q.length] + q + g;
        }
        for (this.isZero() && (g = "0" + g); g.length % h !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      n(!1, "Base should be between 2 and 36");
    }, i.prototype.toNumber = function() {
      var a = this.words[0];
      return this.length === 2 ? a += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? a += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -a : a;
    }, i.prototype.toJSON = function() {
      return this.toString(16);
    }, i.prototype.toBuffer = function(a, h) {
      return n(typeof l < "u"), this.toArrayLike(l, a, h);
    }, i.prototype.toArray = function(a, h) {
      return this.toArrayLike(Array, a, h);
    }, i.prototype.toArrayLike = function(a, h, g) {
      var y = this.byteLength(), x = g || Math.max(1, y);
      n(y <= x, "byte array longer than desired length"), n(x > 0, "Requested array length <= 0"), this.strip();
      var k = h === "le", N = new a(x), b, c, _ = this.clone();
      if (k) {
        for (c = 0; !_.isZero(); c++)
          b = _.andln(255), _.iushrn(8), N[c] = b;
        for (; c < x; c++)
          N[c] = 0;
      } else {
        for (c = 0; c < x - y; c++)
          N[c] = 0;
        for (c = 0; !_.isZero(); c++)
          b = _.andln(255), _.iushrn(8), N[x - c - 1] = b;
      }
      return N;
    }, Math.clz32 ? i.prototype._countBits = function(a) {
      return 32 - Math.clz32(a);
    } : i.prototype._countBits = function(a) {
      var h = a, g = 0;
      return h >= 4096 && (g += 13, h >>>= 13), h >= 64 && (g += 7, h >>>= 7), h >= 8 && (g += 4, h >>>= 4), h >= 2 && (g += 2, h >>>= 2), g + h;
    }, i.prototype._zeroBits = function(a) {
      if (a === 0)
        return 26;
      var h = a, g = 0;
      return (h & 8191) === 0 && (g += 13, h >>>= 13), (h & 127) === 0 && (g += 7, h >>>= 7), (h & 15) === 0 && (g += 4, h >>>= 4), (h & 3) === 0 && (g += 2, h >>>= 2), (h & 1) === 0 && g++, g;
    }, i.prototype.bitLength = function() {
      var a = this.words[this.length - 1], h = this._countBits(a);
      return (this.length - 1) * 26 + h;
    };
    function B(E) {
      for (var a = new Array(E.bitLength()), h = 0; h < a.length; h++) {
        var g = h / 26 | 0, y = h % 26;
        a[h] = (E.words[g] & 1 << y) >>> y;
      }
      return a;
    }
    i.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var a = 0, h = 0; h < this.length; h++) {
        var g = this._zeroBits(this.words[h]);
        if (a += g, g !== 26)
          break;
      }
      return a;
    }, i.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, i.prototype.toTwos = function(a) {
      return this.negative !== 0 ? this.abs().inotn(a).iaddn(1) : this.clone();
    }, i.prototype.fromTwos = function(a) {
      return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
    }, i.prototype.isNeg = function() {
      return this.negative !== 0;
    }, i.prototype.neg = function() {
      return this.clone().ineg();
    }, i.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, i.prototype.iuor = function(a) {
      for (; this.length < a.length; )
        this.words[this.length++] = 0;
      for (var h = 0; h < a.length; h++)
        this.words[h] = this.words[h] | a.words[h];
      return this.strip();
    }, i.prototype.ior = function(a) {
      return n((this.negative | a.negative) === 0), this.iuor(a);
    }, i.prototype.or = function(a) {
      return this.length > a.length ? this.clone().ior(a) : a.clone().ior(this);
    }, i.prototype.uor = function(a) {
      return this.length > a.length ? this.clone().iuor(a) : a.clone().iuor(this);
    }, i.prototype.iuand = function(a) {
      var h;
      this.length > a.length ? h = a : h = this;
      for (var g = 0; g < h.length; g++)
        this.words[g] = this.words[g] & a.words[g];
      return this.length = h.length, this.strip();
    }, i.prototype.iand = function(a) {
      return n((this.negative | a.negative) === 0), this.iuand(a);
    }, i.prototype.and = function(a) {
      return this.length > a.length ? this.clone().iand(a) : a.clone().iand(this);
    }, i.prototype.uand = function(a) {
      return this.length > a.length ? this.clone().iuand(a) : a.clone().iuand(this);
    }, i.prototype.iuxor = function(a) {
      var h, g;
      this.length > a.length ? (h = this, g = a) : (h = a, g = this);
      for (var y = 0; y < g.length; y++)
        this.words[y] = h.words[y] ^ g.words[y];
      if (this !== h)
        for (; y < h.length; y++)
          this.words[y] = h.words[y];
      return this.length = h.length, this.strip();
    }, i.prototype.ixor = function(a) {
      return n((this.negative | a.negative) === 0), this.iuxor(a);
    }, i.prototype.xor = function(a) {
      return this.length > a.length ? this.clone().ixor(a) : a.clone().ixor(this);
    }, i.prototype.uxor = function(a) {
      return this.length > a.length ? this.clone().iuxor(a) : a.clone().iuxor(this);
    }, i.prototype.inotn = function(a) {
      n(typeof a == "number" && a >= 0);
      var h = Math.ceil(a / 26) | 0, g = a % 26;
      this._expand(h), g > 0 && h--;
      for (var y = 0; y < h; y++)
        this.words[y] = ~this.words[y] & 67108863;
      return g > 0 && (this.words[y] = ~this.words[y] & 67108863 >> 26 - g), this.strip();
    }, i.prototype.notn = function(a) {
      return this.clone().inotn(a);
    }, i.prototype.setn = function(a, h) {
      n(typeof a == "number" && a >= 0);
      var g = a / 26 | 0, y = a % 26;
      return this._expand(g + 1), h ? this.words[g] = this.words[g] | 1 << y : this.words[g] = this.words[g] & ~(1 << y), this.strip();
    }, i.prototype.iadd = function(a) {
      var h;
      if (this.negative !== 0 && a.negative === 0)
        return this.negative = 0, h = this.isub(a), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && a.negative !== 0)
        return a.negative = 0, h = this.isub(a), a.negative = 1, h._normSign();
      var g, y;
      this.length > a.length ? (g = this, y = a) : (g = a, y = this);
      for (var x = 0, k = 0; k < y.length; k++)
        h = (g.words[k] | 0) + (y.words[k] | 0) + x, this.words[k] = h & 67108863, x = h >>> 26;
      for (; x !== 0 && k < g.length; k++)
        h = (g.words[k] | 0) + x, this.words[k] = h & 67108863, x = h >>> 26;
      if (this.length = g.length, x !== 0)
        this.words[this.length] = x, this.length++;
      else if (g !== this)
        for (; k < g.length; k++)
          this.words[k] = g.words[k];
      return this;
    }, i.prototype.add = function(a) {
      var h;
      return a.negative !== 0 && this.negative === 0 ? (a.negative = 0, h = this.sub(a), a.negative ^= 1, h) : a.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = a.sub(this), this.negative = 1, h) : this.length > a.length ? this.clone().iadd(a) : a.clone().iadd(this);
    }, i.prototype.isub = function(a) {
      if (a.negative !== 0) {
        a.negative = 0;
        var h = this.iadd(a);
        return a.negative = 1, h._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(a), this.negative = 1, this._normSign();
      var g = this.cmp(a);
      if (g === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var y, x;
      g > 0 ? (y = this, x = a) : (y = a, x = this);
      for (var k = 0, N = 0; N < x.length; N++)
        h = (y.words[N] | 0) - (x.words[N] | 0) + k, k = h >> 26, this.words[N] = h & 67108863;
      for (; k !== 0 && N < y.length; N++)
        h = (y.words[N] | 0) + k, k = h >> 26, this.words[N] = h & 67108863;
      if (k === 0 && N < y.length && y !== this)
        for (; N < y.length; N++)
          this.words[N] = y.words[N];
      return this.length = Math.max(this.length, N), y !== this && (this.negative = 1), this.strip();
    }, i.prototype.sub = function(a) {
      return this.clone().isub(a);
    };
    function L(E, a, h) {
      h.negative = a.negative ^ E.negative;
      var g = E.length + a.length | 0;
      h.length = g, g = g - 1 | 0;
      var y = E.words[0] | 0, x = a.words[0] | 0, k = y * x, N = k & 67108863, b = k / 67108864 | 0;
      h.words[0] = N;
      for (var c = 1; c < g; c++) {
        for (var _ = b >>> 26, H = b & 67108863, q = Math.min(c, a.length - 1), X = Math.max(0, c - E.length + 1); X <= q; X++) {
          var re = c - X | 0;
          y = E.words[re] | 0, x = a.words[X] | 0, k = y * x + H, _ += k / 67108864 | 0, H = k & 67108863;
        }
        h.words[c] = H | 0, b = _ | 0;
      }
      return b !== 0 ? h.words[c] = b | 0 : h.length--, h.strip();
    }
    var P = function(a, h, g) {
      var y = a.words, x = h.words, k = g.words, N = 0, b, c, _, H = y[0] | 0, q = H & 8191, X = H >>> 13, re = y[1] | 0, p = re & 8191, F = re >>> 13, W = y[2] | 0, D = W & 8191, K = W >>> 13, ae = y[3] | 0, ee = ae & 8191, Z = ae >>> 13, he = y[4] | 0, te = he & 8191, le = he >>> 13, w = y[5] | 0, u = w & 8191, f = w >>> 13, C = y[6] | 0, O = C & 8191, $ = C >>> 13, J = y[7] | 0, se = J & 8191, ue = J >>> 13, be = y[8] | 0, ge = be & 8191, fe = be >>> 13, Ge = y[9] | 0, Ce = Ge & 8191, Me = Ge >>> 13, it = x[0] | 0, Te = it & 8191, Oe = it >>> 13, vt = x[1] | 0, Be = vt & 8191, Ne = vt >>> 13, _t = x[2] | 0, Le = _t & 8191, Se = _t >>> 13, ct = x[3] | 0, xe = ct & 8191, ke = ct >>> 13, ot = x[4] | 0, Re = ot & 8191, Pe = ot >>> 13, lt = x[5] | 0, Fe = lt & 8191, Ie = lt >>> 13, ut = x[6] | 0, Ue = ut & 8191, De = ut >>> 13, ft = x[7] | 0, qe = ft & 8191, He = ft >>> 13, yt = x[8] | 0, $e = yt & 8191, S = yt >>> 13, V = x[9] | 0, G = V & 8191, ne = V >>> 13;
      g.negative = a.negative ^ h.negative, g.length = 19, b = Math.imul(q, Te), c = Math.imul(q, Oe), c = c + Math.imul(X, Te) | 0, _ = Math.imul(X, Oe);
      var _e = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, b = Math.imul(p, Te), c = Math.imul(p, Oe), c = c + Math.imul(F, Te) | 0, _ = Math.imul(F, Oe), b = b + Math.imul(q, Be) | 0, c = c + Math.imul(q, Ne) | 0, c = c + Math.imul(X, Be) | 0, _ = _ + Math.imul(X, Ne) | 0;
      var ye = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, b = Math.imul(D, Te), c = Math.imul(D, Oe), c = c + Math.imul(K, Te) | 0, _ = Math.imul(K, Oe), b = b + Math.imul(p, Be) | 0, c = c + Math.imul(p, Ne) | 0, c = c + Math.imul(F, Be) | 0, _ = _ + Math.imul(F, Ne) | 0, b = b + Math.imul(q, Le) | 0, c = c + Math.imul(q, Se) | 0, c = c + Math.imul(X, Le) | 0, _ = _ + Math.imul(X, Se) | 0;
      var ve = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, b = Math.imul(ee, Te), c = Math.imul(ee, Oe), c = c + Math.imul(Z, Te) | 0, _ = Math.imul(Z, Oe), b = b + Math.imul(D, Be) | 0, c = c + Math.imul(D, Ne) | 0, c = c + Math.imul(K, Be) | 0, _ = _ + Math.imul(K, Ne) | 0, b = b + Math.imul(p, Le) | 0, c = c + Math.imul(p, Se) | 0, c = c + Math.imul(F, Le) | 0, _ = _ + Math.imul(F, Se) | 0, b = b + Math.imul(q, xe) | 0, c = c + Math.imul(q, ke) | 0, c = c + Math.imul(X, xe) | 0, _ = _ + Math.imul(X, ke) | 0;
      var me = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, b = Math.imul(te, Te), c = Math.imul(te, Oe), c = c + Math.imul(le, Te) | 0, _ = Math.imul(le, Oe), b = b + Math.imul(ee, Be) | 0, c = c + Math.imul(ee, Ne) | 0, c = c + Math.imul(Z, Be) | 0, _ = _ + Math.imul(Z, Ne) | 0, b = b + Math.imul(D, Le) | 0, c = c + Math.imul(D, Se) | 0, c = c + Math.imul(K, Le) | 0, _ = _ + Math.imul(K, Se) | 0, b = b + Math.imul(p, xe) | 0, c = c + Math.imul(p, ke) | 0, c = c + Math.imul(F, xe) | 0, _ = _ + Math.imul(F, ke) | 0, b = b + Math.imul(q, Re) | 0, c = c + Math.imul(q, Pe) | 0, c = c + Math.imul(X, Re) | 0, _ = _ + Math.imul(X, Pe) | 0;
      var ze = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, b = Math.imul(u, Te), c = Math.imul(u, Oe), c = c + Math.imul(f, Te) | 0, _ = Math.imul(f, Oe), b = b + Math.imul(te, Be) | 0, c = c + Math.imul(te, Ne) | 0, c = c + Math.imul(le, Be) | 0, _ = _ + Math.imul(le, Ne) | 0, b = b + Math.imul(ee, Le) | 0, c = c + Math.imul(ee, Se) | 0, c = c + Math.imul(Z, Le) | 0, _ = _ + Math.imul(Z, Se) | 0, b = b + Math.imul(D, xe) | 0, c = c + Math.imul(D, ke) | 0, c = c + Math.imul(K, xe) | 0, _ = _ + Math.imul(K, ke) | 0, b = b + Math.imul(p, Re) | 0, c = c + Math.imul(p, Pe) | 0, c = c + Math.imul(F, Re) | 0, _ = _ + Math.imul(F, Pe) | 0, b = b + Math.imul(q, Fe) | 0, c = c + Math.imul(q, Ie) | 0, c = c + Math.imul(X, Fe) | 0, _ = _ + Math.imul(X, Ie) | 0;
      var Ee = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, b = Math.imul(O, Te), c = Math.imul(O, Oe), c = c + Math.imul($, Te) | 0, _ = Math.imul($, Oe), b = b + Math.imul(u, Be) | 0, c = c + Math.imul(u, Ne) | 0, c = c + Math.imul(f, Be) | 0, _ = _ + Math.imul(f, Ne) | 0, b = b + Math.imul(te, Le) | 0, c = c + Math.imul(te, Se) | 0, c = c + Math.imul(le, Le) | 0, _ = _ + Math.imul(le, Se) | 0, b = b + Math.imul(ee, xe) | 0, c = c + Math.imul(ee, ke) | 0, c = c + Math.imul(Z, xe) | 0, _ = _ + Math.imul(Z, ke) | 0, b = b + Math.imul(D, Re) | 0, c = c + Math.imul(D, Pe) | 0, c = c + Math.imul(K, Re) | 0, _ = _ + Math.imul(K, Pe) | 0, b = b + Math.imul(p, Fe) | 0, c = c + Math.imul(p, Ie) | 0, c = c + Math.imul(F, Fe) | 0, _ = _ + Math.imul(F, Ie) | 0, b = b + Math.imul(q, Ue) | 0, c = c + Math.imul(q, De) | 0, c = c + Math.imul(X, Ue) | 0, _ = _ + Math.imul(X, De) | 0;
      var Ae = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, b = Math.imul(se, Te), c = Math.imul(se, Oe), c = c + Math.imul(ue, Te) | 0, _ = Math.imul(ue, Oe), b = b + Math.imul(O, Be) | 0, c = c + Math.imul(O, Ne) | 0, c = c + Math.imul($, Be) | 0, _ = _ + Math.imul($, Ne) | 0, b = b + Math.imul(u, Le) | 0, c = c + Math.imul(u, Se) | 0, c = c + Math.imul(f, Le) | 0, _ = _ + Math.imul(f, Se) | 0, b = b + Math.imul(te, xe) | 0, c = c + Math.imul(te, ke) | 0, c = c + Math.imul(le, xe) | 0, _ = _ + Math.imul(le, ke) | 0, b = b + Math.imul(ee, Re) | 0, c = c + Math.imul(ee, Pe) | 0, c = c + Math.imul(Z, Re) | 0, _ = _ + Math.imul(Z, Pe) | 0, b = b + Math.imul(D, Fe) | 0, c = c + Math.imul(D, Ie) | 0, c = c + Math.imul(K, Fe) | 0, _ = _ + Math.imul(K, Ie) | 0, b = b + Math.imul(p, Ue) | 0, c = c + Math.imul(p, De) | 0, c = c + Math.imul(F, Ue) | 0, _ = _ + Math.imul(F, De) | 0, b = b + Math.imul(q, qe) | 0, c = c + Math.imul(q, He) | 0, c = c + Math.imul(X, qe) | 0, _ = _ + Math.imul(X, He) | 0;
      var Ye = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, b = Math.imul(ge, Te), c = Math.imul(ge, Oe), c = c + Math.imul(fe, Te) | 0, _ = Math.imul(fe, Oe), b = b + Math.imul(se, Be) | 0, c = c + Math.imul(se, Ne) | 0, c = c + Math.imul(ue, Be) | 0, _ = _ + Math.imul(ue, Ne) | 0, b = b + Math.imul(O, Le) | 0, c = c + Math.imul(O, Se) | 0, c = c + Math.imul($, Le) | 0, _ = _ + Math.imul($, Se) | 0, b = b + Math.imul(u, xe) | 0, c = c + Math.imul(u, ke) | 0, c = c + Math.imul(f, xe) | 0, _ = _ + Math.imul(f, ke) | 0, b = b + Math.imul(te, Re) | 0, c = c + Math.imul(te, Pe) | 0, c = c + Math.imul(le, Re) | 0, _ = _ + Math.imul(le, Pe) | 0, b = b + Math.imul(ee, Fe) | 0, c = c + Math.imul(ee, Ie) | 0, c = c + Math.imul(Z, Fe) | 0, _ = _ + Math.imul(Z, Ie) | 0, b = b + Math.imul(D, Ue) | 0, c = c + Math.imul(D, De) | 0, c = c + Math.imul(K, Ue) | 0, _ = _ + Math.imul(K, De) | 0, b = b + Math.imul(p, qe) | 0, c = c + Math.imul(p, He) | 0, c = c + Math.imul(F, qe) | 0, _ = _ + Math.imul(F, He) | 0, b = b + Math.imul(q, $e) | 0, c = c + Math.imul(q, S) | 0, c = c + Math.imul(X, $e) | 0, _ = _ + Math.imul(X, S) | 0;
      var ht = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (ht >>> 26) | 0, ht &= 67108863, b = Math.imul(Ce, Te), c = Math.imul(Ce, Oe), c = c + Math.imul(Me, Te) | 0, _ = Math.imul(Me, Oe), b = b + Math.imul(ge, Be) | 0, c = c + Math.imul(ge, Ne) | 0, c = c + Math.imul(fe, Be) | 0, _ = _ + Math.imul(fe, Ne) | 0, b = b + Math.imul(se, Le) | 0, c = c + Math.imul(se, Se) | 0, c = c + Math.imul(ue, Le) | 0, _ = _ + Math.imul(ue, Se) | 0, b = b + Math.imul(O, xe) | 0, c = c + Math.imul(O, ke) | 0, c = c + Math.imul($, xe) | 0, _ = _ + Math.imul($, ke) | 0, b = b + Math.imul(u, Re) | 0, c = c + Math.imul(u, Pe) | 0, c = c + Math.imul(f, Re) | 0, _ = _ + Math.imul(f, Pe) | 0, b = b + Math.imul(te, Fe) | 0, c = c + Math.imul(te, Ie) | 0, c = c + Math.imul(le, Fe) | 0, _ = _ + Math.imul(le, Ie) | 0, b = b + Math.imul(ee, Ue) | 0, c = c + Math.imul(ee, De) | 0, c = c + Math.imul(Z, Ue) | 0, _ = _ + Math.imul(Z, De) | 0, b = b + Math.imul(D, qe) | 0, c = c + Math.imul(D, He) | 0, c = c + Math.imul(K, qe) | 0, _ = _ + Math.imul(K, He) | 0, b = b + Math.imul(p, $e) | 0, c = c + Math.imul(p, S) | 0, c = c + Math.imul(F, $e) | 0, _ = _ + Math.imul(F, S) | 0, b = b + Math.imul(q, G) | 0, c = c + Math.imul(q, ne) | 0, c = c + Math.imul(X, G) | 0, _ = _ + Math.imul(X, ne) | 0;
      var Ht = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (Ht >>> 26) | 0, Ht &= 67108863, b = Math.imul(Ce, Be), c = Math.imul(Ce, Ne), c = c + Math.imul(Me, Be) | 0, _ = Math.imul(Me, Ne), b = b + Math.imul(ge, Le) | 0, c = c + Math.imul(ge, Se) | 0, c = c + Math.imul(fe, Le) | 0, _ = _ + Math.imul(fe, Se) | 0, b = b + Math.imul(se, xe) | 0, c = c + Math.imul(se, ke) | 0, c = c + Math.imul(ue, xe) | 0, _ = _ + Math.imul(ue, ke) | 0, b = b + Math.imul(O, Re) | 0, c = c + Math.imul(O, Pe) | 0, c = c + Math.imul($, Re) | 0, _ = _ + Math.imul($, Pe) | 0, b = b + Math.imul(u, Fe) | 0, c = c + Math.imul(u, Ie) | 0, c = c + Math.imul(f, Fe) | 0, _ = _ + Math.imul(f, Ie) | 0, b = b + Math.imul(te, Ue) | 0, c = c + Math.imul(te, De) | 0, c = c + Math.imul(le, Ue) | 0, _ = _ + Math.imul(le, De) | 0, b = b + Math.imul(ee, qe) | 0, c = c + Math.imul(ee, He) | 0, c = c + Math.imul(Z, qe) | 0, _ = _ + Math.imul(Z, He) | 0, b = b + Math.imul(D, $e) | 0, c = c + Math.imul(D, S) | 0, c = c + Math.imul(K, $e) | 0, _ = _ + Math.imul(K, S) | 0, b = b + Math.imul(p, G) | 0, c = c + Math.imul(p, ne) | 0, c = c + Math.imul(F, G) | 0, _ = _ + Math.imul(F, ne) | 0;
      var Qe = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, b = Math.imul(Ce, Le), c = Math.imul(Ce, Se), c = c + Math.imul(Me, Le) | 0, _ = Math.imul(Me, Se), b = b + Math.imul(ge, xe) | 0, c = c + Math.imul(ge, ke) | 0, c = c + Math.imul(fe, xe) | 0, _ = _ + Math.imul(fe, ke) | 0, b = b + Math.imul(se, Re) | 0, c = c + Math.imul(se, Pe) | 0, c = c + Math.imul(ue, Re) | 0, _ = _ + Math.imul(ue, Pe) | 0, b = b + Math.imul(O, Fe) | 0, c = c + Math.imul(O, Ie) | 0, c = c + Math.imul($, Fe) | 0, _ = _ + Math.imul($, Ie) | 0, b = b + Math.imul(u, Ue) | 0, c = c + Math.imul(u, De) | 0, c = c + Math.imul(f, Ue) | 0, _ = _ + Math.imul(f, De) | 0, b = b + Math.imul(te, qe) | 0, c = c + Math.imul(te, He) | 0, c = c + Math.imul(le, qe) | 0, _ = _ + Math.imul(le, He) | 0, b = b + Math.imul(ee, $e) | 0, c = c + Math.imul(ee, S) | 0, c = c + Math.imul(Z, $e) | 0, _ = _ + Math.imul(Z, S) | 0, b = b + Math.imul(D, G) | 0, c = c + Math.imul(D, ne) | 0, c = c + Math.imul(K, G) | 0, _ = _ + Math.imul(K, ne) | 0;
      var fn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (fn >>> 26) | 0, fn &= 67108863, b = Math.imul(Ce, xe), c = Math.imul(Ce, ke), c = c + Math.imul(Me, xe) | 0, _ = Math.imul(Me, ke), b = b + Math.imul(ge, Re) | 0, c = c + Math.imul(ge, Pe) | 0, c = c + Math.imul(fe, Re) | 0, _ = _ + Math.imul(fe, Pe) | 0, b = b + Math.imul(se, Fe) | 0, c = c + Math.imul(se, Ie) | 0, c = c + Math.imul(ue, Fe) | 0, _ = _ + Math.imul(ue, Ie) | 0, b = b + Math.imul(O, Ue) | 0, c = c + Math.imul(O, De) | 0, c = c + Math.imul($, Ue) | 0, _ = _ + Math.imul($, De) | 0, b = b + Math.imul(u, qe) | 0, c = c + Math.imul(u, He) | 0, c = c + Math.imul(f, qe) | 0, _ = _ + Math.imul(f, He) | 0, b = b + Math.imul(te, $e) | 0, c = c + Math.imul(te, S) | 0, c = c + Math.imul(le, $e) | 0, _ = _ + Math.imul(le, S) | 0, b = b + Math.imul(ee, G) | 0, c = c + Math.imul(ee, ne) | 0, c = c + Math.imul(Z, G) | 0, _ = _ + Math.imul(Z, ne) | 0;
      var hn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (hn >>> 26) | 0, hn &= 67108863, b = Math.imul(Ce, Re), c = Math.imul(Ce, Pe), c = c + Math.imul(Me, Re) | 0, _ = Math.imul(Me, Pe), b = b + Math.imul(ge, Fe) | 0, c = c + Math.imul(ge, Ie) | 0, c = c + Math.imul(fe, Fe) | 0, _ = _ + Math.imul(fe, Ie) | 0, b = b + Math.imul(se, Ue) | 0, c = c + Math.imul(se, De) | 0, c = c + Math.imul(ue, Ue) | 0, _ = _ + Math.imul(ue, De) | 0, b = b + Math.imul(O, qe) | 0, c = c + Math.imul(O, He) | 0, c = c + Math.imul($, qe) | 0, _ = _ + Math.imul($, He) | 0, b = b + Math.imul(u, $e) | 0, c = c + Math.imul(u, S) | 0, c = c + Math.imul(f, $e) | 0, _ = _ + Math.imul(f, S) | 0, b = b + Math.imul(te, G) | 0, c = c + Math.imul(te, ne) | 0, c = c + Math.imul(le, G) | 0, _ = _ + Math.imul(le, ne) | 0;
      var dn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (dn >>> 26) | 0, dn &= 67108863, b = Math.imul(Ce, Fe), c = Math.imul(Ce, Ie), c = c + Math.imul(Me, Fe) | 0, _ = Math.imul(Me, Ie), b = b + Math.imul(ge, Ue) | 0, c = c + Math.imul(ge, De) | 0, c = c + Math.imul(fe, Ue) | 0, _ = _ + Math.imul(fe, De) | 0, b = b + Math.imul(se, qe) | 0, c = c + Math.imul(se, He) | 0, c = c + Math.imul(ue, qe) | 0, _ = _ + Math.imul(ue, He) | 0, b = b + Math.imul(O, $e) | 0, c = c + Math.imul(O, S) | 0, c = c + Math.imul($, $e) | 0, _ = _ + Math.imul($, S) | 0, b = b + Math.imul(u, G) | 0, c = c + Math.imul(u, ne) | 0, c = c + Math.imul(f, G) | 0, _ = _ + Math.imul(f, ne) | 0;
      var pn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (pn >>> 26) | 0, pn &= 67108863, b = Math.imul(Ce, Ue), c = Math.imul(Ce, De), c = c + Math.imul(Me, Ue) | 0, _ = Math.imul(Me, De), b = b + Math.imul(ge, qe) | 0, c = c + Math.imul(ge, He) | 0, c = c + Math.imul(fe, qe) | 0, _ = _ + Math.imul(fe, He) | 0, b = b + Math.imul(se, $e) | 0, c = c + Math.imul(se, S) | 0, c = c + Math.imul(ue, $e) | 0, _ = _ + Math.imul(ue, S) | 0, b = b + Math.imul(O, G) | 0, c = c + Math.imul(O, ne) | 0, c = c + Math.imul($, G) | 0, _ = _ + Math.imul($, ne) | 0;
      var gn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (gn >>> 26) | 0, gn &= 67108863, b = Math.imul(Ce, qe), c = Math.imul(Ce, He), c = c + Math.imul(Me, qe) | 0, _ = Math.imul(Me, He), b = b + Math.imul(ge, $e) | 0, c = c + Math.imul(ge, S) | 0, c = c + Math.imul(fe, $e) | 0, _ = _ + Math.imul(fe, S) | 0, b = b + Math.imul(se, G) | 0, c = c + Math.imul(se, ne) | 0, c = c + Math.imul(ue, G) | 0, _ = _ + Math.imul(ue, ne) | 0;
      var mn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (mn >>> 26) | 0, mn &= 67108863, b = Math.imul(Ce, $e), c = Math.imul(Ce, S), c = c + Math.imul(Me, $e) | 0, _ = Math.imul(Me, S), b = b + Math.imul(ge, G) | 0, c = c + Math.imul(ge, ne) | 0, c = c + Math.imul(fe, G) | 0, _ = _ + Math.imul(fe, ne) | 0;
      var vn = (N + b | 0) + ((c & 8191) << 13) | 0;
      N = (_ + (c >>> 13) | 0) + (vn >>> 26) | 0, vn &= 67108863, b = Math.imul(Ce, G), c = Math.imul(Ce, ne), c = c + Math.imul(Me, G) | 0, _ = Math.imul(Me, ne);
      var _n = (N + b | 0) + ((c & 8191) << 13) | 0;
      return N = (_ + (c >>> 13) | 0) + (_n >>> 26) | 0, _n &= 67108863, k[0] = _e, k[1] = ye, k[2] = ve, k[3] = me, k[4] = ze, k[5] = Ee, k[6] = Ae, k[7] = Ye, k[8] = ht, k[9] = Ht, k[10] = Qe, k[11] = fn, k[12] = hn, k[13] = dn, k[14] = pn, k[15] = gn, k[16] = mn, k[17] = vn, k[18] = _n, N !== 0 && (k[19] = N, g.length++), g;
    };
    Math.imul || (P = L);
    function z(E, a, h) {
      h.negative = a.negative ^ E.negative, h.length = E.length + a.length;
      for (var g = 0, y = 0, x = 0; x < h.length - 1; x++) {
        var k = y;
        y = 0;
        for (var N = g & 67108863, b = Math.min(x, a.length - 1), c = Math.max(0, x - E.length + 1); c <= b; c++) {
          var _ = x - c, H = E.words[_] | 0, q = a.words[c] | 0, X = H * q, re = X & 67108863;
          k = k + (X / 67108864 | 0) | 0, re = re + N | 0, N = re & 67108863, k = k + (re >>> 26) | 0, y += k >>> 26, k &= 67108863;
        }
        h.words[x] = N, g = k, k = y;
      }
      return g !== 0 ? h.words[x] = g : h.length--, h.strip();
    }
    function M(E, a, h) {
      var g = new I();
      return g.mulp(E, a, h);
    }
    i.prototype.mulTo = function(a, h) {
      var g, y = this.length + a.length;
      return this.length === 10 && a.length === 10 ? g = P(this, a, h) : y < 63 ? g = L(this, a, h) : y < 1024 ? g = z(this, a, h) : g = M(this, a, h), g;
    };
    function I(E, a) {
      this.x = E, this.y = a;
    }
    I.prototype.makeRBT = function(a) {
      for (var h = new Array(a), g = i.prototype._countBits(a) - 1, y = 0; y < a; y++)
        h[y] = this.revBin(y, g, a);
      return h;
    }, I.prototype.revBin = function(a, h, g) {
      if (a === 0 || a === g - 1)
        return a;
      for (var y = 0, x = 0; x < h; x++)
        y |= (a & 1) << h - x - 1, a >>= 1;
      return y;
    }, I.prototype.permute = function(a, h, g, y, x, k) {
      for (var N = 0; N < k; N++)
        y[N] = h[a[N]], x[N] = g[a[N]];
    }, I.prototype.transform = function(a, h, g, y, x, k) {
      this.permute(k, a, h, g, y, x);
      for (var N = 1; N < x; N <<= 1)
        for (var b = N << 1, c = Math.cos(2 * Math.PI / b), _ = Math.sin(2 * Math.PI / b), H = 0; H < x; H += b)
          for (var q = c, X = _, re = 0; re < N; re++) {
            var p = g[H + re], F = y[H + re], W = g[H + re + N], D = y[H + re + N], K = q * W - X * D;
            D = q * D + X * W, W = K, g[H + re] = p + W, y[H + re] = F + D, g[H + re + N] = p - W, y[H + re + N] = F - D, re !== b && (K = c * q - _ * X, X = c * X + _ * q, q = K);
          }
    }, I.prototype.guessLen13b = function(a, h) {
      var g = Math.max(h, a) | 1, y = g & 1, x = 0;
      for (g = g / 2 | 0; g; g = g >>> 1)
        x++;
      return 1 << x + 1 + y;
    }, I.prototype.conjugate = function(a, h, g) {
      if (!(g <= 1))
        for (var y = 0; y < g / 2; y++) {
          var x = a[y];
          a[y] = a[g - y - 1], a[g - y - 1] = x, x = h[y], h[y] = -h[g - y - 1], h[g - y - 1] = -x;
        }
    }, I.prototype.normalize13b = function(a, h) {
      for (var g = 0, y = 0; y < h / 2; y++) {
        var x = Math.round(a[2 * y + 1] / h) * 8192 + Math.round(a[2 * y] / h) + g;
        a[y] = x & 67108863, x < 67108864 ? g = 0 : g = x / 67108864 | 0;
      }
      return a;
    }, I.prototype.convert13b = function(a, h, g, y) {
      for (var x = 0, k = 0; k < h; k++)
        x = x + (a[k] | 0), g[2 * k] = x & 8191, x = x >>> 13, g[2 * k + 1] = x & 8191, x = x >>> 13;
      for (k = 2 * h; k < y; ++k)
        g[k] = 0;
      n(x === 0), n((x & -8192) === 0);
    }, I.prototype.stub = function(a) {
      for (var h = new Array(a), g = 0; g < a; g++)
        h[g] = 0;
      return h;
    }, I.prototype.mulp = function(a, h, g) {
      var y = 2 * this.guessLen13b(a.length, h.length), x = this.makeRBT(y), k = this.stub(y), N = new Array(y), b = new Array(y), c = new Array(y), _ = new Array(y), H = new Array(y), q = new Array(y), X = g.words;
      X.length = y, this.convert13b(a.words, a.length, N, y), this.convert13b(h.words, h.length, _, y), this.transform(N, k, b, c, y, x), this.transform(_, k, H, q, y, x);
      for (var re = 0; re < y; re++) {
        var p = b[re] * H[re] - c[re] * q[re];
        c[re] = b[re] * q[re] + c[re] * H[re], b[re] = p;
      }
      return this.conjugate(b, c, y), this.transform(b, c, X, k, y, x), this.conjugate(X, k, y), this.normalize13b(X, y), g.negative = a.negative ^ h.negative, g.length = a.length + h.length, g.strip();
    }, i.prototype.mul = function(a) {
      var h = new i(null);
      return h.words = new Array(this.length + a.length), this.mulTo(a, h);
    }, i.prototype.mulf = function(a) {
      var h = new i(null);
      return h.words = new Array(this.length + a.length), M(this, a, h);
    }, i.prototype.imul = function(a) {
      return this.clone().mulTo(a, this);
    }, i.prototype.imuln = function(a) {
      n(typeof a == "number"), n(a < 67108864);
      for (var h = 0, g = 0; g < this.length; g++) {
        var y = (this.words[g] | 0) * a, x = (y & 67108863) + (h & 67108863);
        h >>= 26, h += y / 67108864 | 0, h += x >>> 26, this.words[g] = x & 67108863;
      }
      return h !== 0 && (this.words[g] = h, this.length++), this;
    }, i.prototype.muln = function(a) {
      return this.clone().imuln(a);
    }, i.prototype.sqr = function() {
      return this.mul(this);
    }, i.prototype.isqr = function() {
      return this.imul(this.clone());
    }, i.prototype.pow = function(a) {
      var h = B(a);
      if (h.length === 0)
        return new i(1);
      for (var g = this, y = 0; y < h.length && h[y] === 0; y++, g = g.sqr())
        ;
      if (++y < h.length)
        for (var x = g.sqr(); y < h.length; y++, x = x.sqr())
          h[y] !== 0 && (g = g.mul(x));
      return g;
    }, i.prototype.iushln = function(a) {
      n(typeof a == "number" && a >= 0);
      var h = a % 26, g = (a - h) / 26, y = 67108863 >>> 26 - h << 26 - h, x;
      if (h !== 0) {
        var k = 0;
        for (x = 0; x < this.length; x++) {
          var N = this.words[x] & y, b = (this.words[x] | 0) - N << h;
          this.words[x] = b | k, k = N >>> 26 - h;
        }
        k && (this.words[x] = k, this.length++);
      }
      if (g !== 0) {
        for (x = this.length - 1; x >= 0; x--)
          this.words[x + g] = this.words[x];
        for (x = 0; x < g; x++)
          this.words[x] = 0;
        this.length += g;
      }
      return this.strip();
    }, i.prototype.ishln = function(a) {
      return n(this.negative === 0), this.iushln(a);
    }, i.prototype.iushrn = function(a, h, g) {
      n(typeof a == "number" && a >= 0);
      var y;
      h ? y = (h - h % 26) / 26 : y = 0;
      var x = a % 26, k = Math.min((a - x) / 26, this.length), N = 67108863 ^ 67108863 >>> x << x, b = g;
      if (y -= k, y = Math.max(0, y), b) {
        for (var c = 0; c < k; c++)
          b.words[c] = this.words[c];
        b.length = k;
      }
      if (k !== 0)
        if (this.length > k)
          for (this.length -= k, c = 0; c < this.length; c++)
            this.words[c] = this.words[c + k];
        else
          this.words[0] = 0, this.length = 1;
      var _ = 0;
      for (c = this.length - 1; c >= 0 && (_ !== 0 || c >= y); c--) {
        var H = this.words[c] | 0;
        this.words[c] = _ << 26 - x | H >>> x, _ = H & N;
      }
      return b && _ !== 0 && (b.words[b.length++] = _), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, i.prototype.ishrn = function(a, h, g) {
      return n(this.negative === 0), this.iushrn(a, h, g);
    }, i.prototype.shln = function(a) {
      return this.clone().ishln(a);
    }, i.prototype.ushln = function(a) {
      return this.clone().iushln(a);
    }, i.prototype.shrn = function(a) {
      return this.clone().ishrn(a);
    }, i.prototype.ushrn = function(a) {
      return this.clone().iushrn(a);
    }, i.prototype.testn = function(a) {
      n(typeof a == "number" && a >= 0);
      var h = a % 26, g = (a - h) / 26, y = 1 << h;
      if (this.length <= g)
        return !1;
      var x = this.words[g];
      return !!(x & y);
    }, i.prototype.imaskn = function(a) {
      n(typeof a == "number" && a >= 0);
      var h = a % 26, g = (a - h) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g)
        return this;
      if (h !== 0 && g++, this.length = Math.min(g, this.length), h !== 0) {
        var y = 67108863 ^ 67108863 >>> h << h;
        this.words[this.length - 1] &= y;
      }
      return this.strip();
    }, i.prototype.maskn = function(a) {
      return this.clone().imaskn(a);
    }, i.prototype.iaddn = function(a) {
      return n(typeof a == "number"), n(a < 67108864), a < 0 ? this.isubn(-a) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < a ? (this.words[0] = a - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(a), this.negative = 1, this) : this._iaddn(a);
    }, i.prototype._iaddn = function(a) {
      this.words[0] += a;
      for (var h = 0; h < this.length && this.words[h] >= 67108864; h++)
        this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
      return this.length = Math.max(this.length, h + 1), this;
    }, i.prototype.isubn = function(a) {
      if (n(typeof a == "number"), n(a < 67108864), a < 0)
        return this.iaddn(-a);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(a), this.negative = 1, this;
      if (this.words[0] -= a, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var h = 0; h < this.length && this.words[h] < 0; h++)
          this.words[h] += 67108864, this.words[h + 1] -= 1;
      return this.strip();
    }, i.prototype.addn = function(a) {
      return this.clone().iaddn(a);
    }, i.prototype.subn = function(a) {
      return this.clone().isubn(a);
    }, i.prototype.iabs = function() {
      return this.negative = 0, this;
    }, i.prototype.abs = function() {
      return this.clone().iabs();
    }, i.prototype._ishlnsubmul = function(a, h, g) {
      var y = a.length + g, x;
      this._expand(y);
      var k, N = 0;
      for (x = 0; x < a.length; x++) {
        k = (this.words[x + g] | 0) + N;
        var b = (a.words[x] | 0) * h;
        k -= b & 67108863, N = (k >> 26) - (b / 67108864 | 0), this.words[x + g] = k & 67108863;
      }
      for (; x < this.length - g; x++)
        k = (this.words[x + g] | 0) + N, N = k >> 26, this.words[x + g] = k & 67108863;
      if (N === 0)
        return this.strip();
      for (n(N === -1), N = 0, x = 0; x < this.length; x++)
        k = -(this.words[x] | 0) + N, N = k >> 26, this.words[x] = k & 67108863;
      return this.negative = 1, this.strip();
    }, i.prototype._wordDiv = function(a, h) {
      var g = this.length - a.length, y = this.clone(), x = a, k = x.words[x.length - 1] | 0, N = this._countBits(k);
      g = 26 - N, g !== 0 && (x = x.ushln(g), y.iushln(g), k = x.words[x.length - 1] | 0);
      var b = y.length - x.length, c;
      if (h !== "mod") {
        c = new i(null), c.length = b + 1, c.words = new Array(c.length);
        for (var _ = 0; _ < c.length; _++)
          c.words[_] = 0;
      }
      var H = y.clone()._ishlnsubmul(x, 1, b);
      H.negative === 0 && (y = H, c && (c.words[b] = 1));
      for (var q = b - 1; q >= 0; q--) {
        var X = (y.words[x.length + q] | 0) * 67108864 + (y.words[x.length + q - 1] | 0);
        for (X = Math.min(X / k | 0, 67108863), y._ishlnsubmul(x, X, q); y.negative !== 0; )
          X--, y.negative = 0, y._ishlnsubmul(x, 1, q), y.isZero() || (y.negative ^= 1);
        c && (c.words[q] = X);
      }
      return c && c.strip(), y.strip(), h !== "div" && g !== 0 && y.iushrn(g), {
        div: c || null,
        mod: y
      };
    }, i.prototype.divmod = function(a, h, g) {
      if (n(!a.isZero()), this.isZero())
        return {
          div: new i(0),
          mod: new i(0)
        };
      var y, x, k;
      return this.negative !== 0 && a.negative === 0 ? (k = this.neg().divmod(a, h), h !== "mod" && (y = k.div.neg()), h !== "div" && (x = k.mod.neg(), g && x.negative !== 0 && x.iadd(a)), {
        div: y,
        mod: x
      }) : this.negative === 0 && a.negative !== 0 ? (k = this.divmod(a.neg(), h), h !== "mod" && (y = k.div.neg()), {
        div: y,
        mod: k.mod
      }) : (this.negative & a.negative) !== 0 ? (k = this.neg().divmod(a.neg(), h), h !== "div" && (x = k.mod.neg(), g && x.negative !== 0 && x.isub(a)), {
        div: k.div,
        mod: x
      }) : a.length > this.length || this.cmp(a) < 0 ? {
        div: new i(0),
        mod: this
      } : a.length === 1 ? h === "div" ? {
        div: this.divn(a.words[0]),
        mod: null
      } : h === "mod" ? {
        div: null,
        mod: new i(this.modn(a.words[0]))
      } : {
        div: this.divn(a.words[0]),
        mod: new i(this.modn(a.words[0]))
      } : this._wordDiv(a, h);
    }, i.prototype.div = function(a) {
      return this.divmod(a, "div", !1).div;
    }, i.prototype.mod = function(a) {
      return this.divmod(a, "mod", !1).mod;
    }, i.prototype.umod = function(a) {
      return this.divmod(a, "mod", !0).mod;
    }, i.prototype.divRound = function(a) {
      var h = this.divmod(a);
      if (h.mod.isZero())
        return h.div;
      var g = h.div.negative !== 0 ? h.mod.isub(a) : h.mod, y = a.ushrn(1), x = a.andln(1), k = g.cmp(y);
      return k < 0 || x === 1 && k === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1);
    }, i.prototype.modn = function(a) {
      n(a <= 67108863);
      for (var h = (1 << 26) % a, g = 0, y = this.length - 1; y >= 0; y--)
        g = (h * g + (this.words[y] | 0)) % a;
      return g;
    }, i.prototype.idivn = function(a) {
      n(a <= 67108863);
      for (var h = 0, g = this.length - 1; g >= 0; g--) {
        var y = (this.words[g] | 0) + h * 67108864;
        this.words[g] = y / a | 0, h = y % a;
      }
      return this.strip();
    }, i.prototype.divn = function(a) {
      return this.clone().idivn(a);
    }, i.prototype.egcd = function(a) {
      n(a.negative === 0), n(!a.isZero());
      var h = this, g = a.clone();
      h.negative !== 0 ? h = h.umod(a) : h = h.clone();
      for (var y = new i(1), x = new i(0), k = new i(0), N = new i(1), b = 0; h.isEven() && g.isEven(); )
        h.iushrn(1), g.iushrn(1), ++b;
      for (var c = g.clone(), _ = h.clone(); !h.isZero(); ) {
        for (var H = 0, q = 1; (h.words[0] & q) === 0 && H < 26; ++H, q <<= 1)
          ;
        if (H > 0)
          for (h.iushrn(H); H-- > 0; )
            (y.isOdd() || x.isOdd()) && (y.iadd(c), x.isub(_)), y.iushrn(1), x.iushrn(1);
        for (var X = 0, re = 1; (g.words[0] & re) === 0 && X < 26; ++X, re <<= 1)
          ;
        if (X > 0)
          for (g.iushrn(X); X-- > 0; )
            (k.isOdd() || N.isOdd()) && (k.iadd(c), N.isub(_)), k.iushrn(1), N.iushrn(1);
        h.cmp(g) >= 0 ? (h.isub(g), y.isub(k), x.isub(N)) : (g.isub(h), k.isub(y), N.isub(x));
      }
      return {
        a: k,
        b: N,
        gcd: g.iushln(b)
      };
    }, i.prototype._invmp = function(a) {
      n(a.negative === 0), n(!a.isZero());
      var h = this, g = a.clone();
      h.negative !== 0 ? h = h.umod(a) : h = h.clone();
      for (var y = new i(1), x = new i(0), k = g.clone(); h.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
        for (var N = 0, b = 1; (h.words[0] & b) === 0 && N < 26; ++N, b <<= 1)
          ;
        if (N > 0)
          for (h.iushrn(N); N-- > 0; )
            y.isOdd() && y.iadd(k), y.iushrn(1);
        for (var c = 0, _ = 1; (g.words[0] & _) === 0 && c < 26; ++c, _ <<= 1)
          ;
        if (c > 0)
          for (g.iushrn(c); c-- > 0; )
            x.isOdd() && x.iadd(k), x.iushrn(1);
        h.cmp(g) >= 0 ? (h.isub(g), y.isub(x)) : (g.isub(h), x.isub(y));
      }
      var H;
      return h.cmpn(1) === 0 ? H = y : H = x, H.cmpn(0) < 0 && H.iadd(a), H;
    }, i.prototype.gcd = function(a) {
      if (this.isZero())
        return a.abs();
      if (a.isZero())
        return this.abs();
      var h = this.clone(), g = a.clone();
      h.negative = 0, g.negative = 0;
      for (var y = 0; h.isEven() && g.isEven(); y++)
        h.iushrn(1), g.iushrn(1);
      do {
        for (; h.isEven(); )
          h.iushrn(1);
        for (; g.isEven(); )
          g.iushrn(1);
        var x = h.cmp(g);
        if (x < 0) {
          var k = h;
          h = g, g = k;
        } else if (x === 0 || g.cmpn(1) === 0)
          break;
        h.isub(g);
      } while (!0);
      return g.iushln(y);
    }, i.prototype.invm = function(a) {
      return this.egcd(a).a.umod(a);
    }, i.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, i.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, i.prototype.andln = function(a) {
      return this.words[0] & a;
    }, i.prototype.bincn = function(a) {
      n(typeof a == "number");
      var h = a % 26, g = (a - h) / 26, y = 1 << h;
      if (this.length <= g)
        return this._expand(g + 1), this.words[g] |= y, this;
      for (var x = y, k = g; x !== 0 && k < this.length; k++) {
        var N = this.words[k] | 0;
        N += x, x = N >>> 26, N &= 67108863, this.words[k] = N;
      }
      return x !== 0 && (this.words[k] = x, this.length++), this;
    }, i.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, i.prototype.cmpn = function(a) {
      var h = a < 0;
      if (this.negative !== 0 && !h)
        return -1;
      if (this.negative === 0 && h)
        return 1;
      this.strip();
      var g;
      if (this.length > 1)
        g = 1;
      else {
        h && (a = -a), n(a <= 67108863, "Number is too big");
        var y = this.words[0] | 0;
        g = y === a ? 0 : y < a ? -1 : 1;
      }
      return this.negative !== 0 ? -g | 0 : g;
    }, i.prototype.cmp = function(a) {
      if (this.negative !== 0 && a.negative === 0)
        return -1;
      if (this.negative === 0 && a.negative !== 0)
        return 1;
      var h = this.ucmp(a);
      return this.negative !== 0 ? -h | 0 : h;
    }, i.prototype.ucmp = function(a) {
      if (this.length > a.length)
        return 1;
      if (this.length < a.length)
        return -1;
      for (var h = 0, g = this.length - 1; g >= 0; g--) {
        var y = this.words[g] | 0, x = a.words[g] | 0;
        if (y !== x) {
          y < x ? h = -1 : y > x && (h = 1);
          break;
        }
      }
      return h;
    }, i.prototype.gtn = function(a) {
      return this.cmpn(a) === 1;
    }, i.prototype.gt = function(a) {
      return this.cmp(a) === 1;
    }, i.prototype.gten = function(a) {
      return this.cmpn(a) >= 0;
    }, i.prototype.gte = function(a) {
      return this.cmp(a) >= 0;
    }, i.prototype.ltn = function(a) {
      return this.cmpn(a) === -1;
    }, i.prototype.lt = function(a) {
      return this.cmp(a) === -1;
    }, i.prototype.lten = function(a) {
      return this.cmpn(a) <= 0;
    }, i.prototype.lte = function(a) {
      return this.cmp(a) <= 0;
    }, i.prototype.eqn = function(a) {
      return this.cmpn(a) === 0;
    }, i.prototype.eq = function(a) {
      return this.cmp(a) === 0;
    }, i.red = function(a) {
      return new oe(a);
    }, i.prototype.toRed = function(a) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), a.convertTo(this)._forceRed(a);
    }, i.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, i.prototype._forceRed = function(a) {
      return this.red = a, this;
    }, i.prototype.forceRed = function(a) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(a);
    }, i.prototype.redAdd = function(a) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, a);
    }, i.prototype.redIAdd = function(a) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, a);
    }, i.prototype.redSub = function(a) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, a);
    }, i.prototype.redISub = function(a) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, a);
    }, i.prototype.redShl = function(a) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, a);
    }, i.prototype.redMul = function(a) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.mul(this, a);
    }, i.prototype.redIMul = function(a) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, a), this.red.imul(this, a);
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
    }, i.prototype.redPow = function(a) {
      return n(this.red && !a.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, a);
    };
    var R = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function T(E, a) {
      this.name = E, this.p = new i(a, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    T.prototype._tmp = function() {
      var a = new i(null);
      return a.words = new Array(Math.ceil(this.n / 13)), a;
    }, T.prototype.ireduce = function(a) {
      var h = a, g;
      do
        this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), g = h.bitLength();
      while (g > this.n);
      var y = g < this.n ? -1 : h.ucmp(this.p);
      return y === 0 ? (h.words[0] = 0, h.length = 1) : y > 0 ? h.isub(this.p) : h.strip(), h;
    }, T.prototype.split = function(a, h) {
      a.iushrn(this.n, 0, h);
    }, T.prototype.imulK = function(a) {
      return a.imul(this.k);
    };
    function U() {
      T.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    o(U, T), U.prototype.split = function(a, h) {
      for (var g = 4194303, y = Math.min(a.length, 9), x = 0; x < y; x++)
        h.words[x] = a.words[x];
      if (h.length = y, a.length <= 9) {
        a.words[0] = 0, a.length = 1;
        return;
      }
      var k = a.words[9];
      for (h.words[h.length++] = k & g, x = 10; x < a.length; x++) {
        var N = a.words[x] | 0;
        a.words[x - 10] = (N & g) << 4 | k >>> 22, k = N;
      }
      k >>>= 22, a.words[x - 10] = k, k === 0 && a.length > 10 ? a.length -= 10 : a.length -= 9;
    }, U.prototype.imulK = function(a) {
      a.words[a.length] = 0, a.words[a.length + 1] = 0, a.length += 2;
      for (var h = 0, g = 0; g < a.length; g++) {
        var y = a.words[g] | 0;
        h += y * 977, a.words[g] = h & 67108863, h = y * 64 + (h / 67108864 | 0);
      }
      return a.words[a.length - 1] === 0 && (a.length--, a.words[a.length - 1] === 0 && a.length--), a;
    };
    function Y() {
      T.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    o(Y, T);
    function Q() {
      T.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    o(Q, T);
    function ce() {
      T.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    o(ce, T), ce.prototype.imulK = function(a) {
      for (var h = 0, g = 0; g < a.length; g++) {
        var y = (a.words[g] | 0) * 19 + h, x = y & 67108863;
        y >>>= 26, a.words[g] = x, h = y;
      }
      return h !== 0 && (a.words[a.length++] = h), a;
    }, i._prime = function(a) {
      if (R[a])
        return R[a];
      var h;
      if (a === "k256")
        h = new U();
      else if (a === "p224")
        h = new Y();
      else if (a === "p192")
        h = new Q();
      else if (a === "p25519")
        h = new ce();
      else
        throw new Error("Unknown prime " + a);
      return R[a] = h, h;
    };
    function oe(E) {
      if (typeof E == "string") {
        var a = i._prime(E);
        this.m = a.p, this.prime = a;
      } else
        n(E.gtn(1), "modulus must be greater than 1"), this.m = E, this.prime = null;
    }
    oe.prototype._verify1 = function(a) {
      n(a.negative === 0, "red works only with positives"), n(a.red, "red works only with red numbers");
    }, oe.prototype._verify2 = function(a, h) {
      n((a.negative | h.negative) === 0, "red works only with positives"), n(
        a.red && a.red === h.red,
        "red works only with red numbers"
      );
    }, oe.prototype.imod = function(a) {
      return this.prime ? this.prime.ireduce(a)._forceRed(this) : a.umod(this.m)._forceRed(this);
    }, oe.prototype.neg = function(a) {
      return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
    }, oe.prototype.add = function(a, h) {
      this._verify2(a, h);
      var g = a.add(h);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
    }, oe.prototype.iadd = function(a, h) {
      this._verify2(a, h);
      var g = a.iadd(h);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g;
    }, oe.prototype.sub = function(a, h) {
      this._verify2(a, h);
      var g = a.sub(h);
      return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
    }, oe.prototype.isub = function(a, h) {
      this._verify2(a, h);
      var g = a.isub(h);
      return g.cmpn(0) < 0 && g.iadd(this.m), g;
    }, oe.prototype.shl = function(a, h) {
      return this._verify1(a), this.imod(a.ushln(h));
    }, oe.prototype.imul = function(a, h) {
      return this._verify2(a, h), this.imod(a.imul(h));
    }, oe.prototype.mul = function(a, h) {
      return this._verify2(a, h), this.imod(a.mul(h));
    }, oe.prototype.isqr = function(a) {
      return this.imul(a, a.clone());
    }, oe.prototype.sqr = function(a) {
      return this.mul(a, a);
    }, oe.prototype.sqrt = function(a) {
      if (a.isZero())
        return a.clone();
      var h = this.m.andln(3);
      if (n(h % 2 === 1), h === 3) {
        var g = this.m.add(new i(1)).iushrn(2);
        return this.pow(a, g);
      }
      for (var y = this.m.subn(1), x = 0; !y.isZero() && y.andln(1) === 0; )
        x++, y.iushrn(1);
      n(!y.isZero());
      var k = new i(1).toRed(this), N = k.redNeg(), b = this.m.subn(1).iushrn(1), c = this.m.bitLength();
      for (c = new i(2 * c * c).toRed(this); this.pow(c, b).cmp(N) !== 0; )
        c.redIAdd(N);
      for (var _ = this.pow(c, y), H = this.pow(a, y.addn(1).iushrn(1)), q = this.pow(a, y), X = x; q.cmp(k) !== 0; ) {
        for (var re = q, p = 0; re.cmp(k) !== 0; p++)
          re = re.redSqr();
        n(p < X);
        var F = this.pow(_, new i(1).iushln(X - p - 1));
        H = H.redMul(F), _ = F.redSqr(), q = q.redMul(_), X = p;
      }
      return H;
    }, oe.prototype.invm = function(a) {
      var h = a._invmp(this.m);
      return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h);
    }, oe.prototype.pow = function(a, h) {
      if (h.isZero())
        return new i(1).toRed(this);
      if (h.cmpn(1) === 0)
        return a.clone();
      var g = 4, y = new Array(1 << g);
      y[0] = new i(1).toRed(this), y[1] = a;
      for (var x = 2; x < y.length; x++)
        y[x] = this.mul(y[x - 1], a);
      var k = y[0], N = 0, b = 0, c = h.bitLength() % 26;
      for (c === 0 && (c = 26), x = h.length - 1; x >= 0; x--) {
        for (var _ = h.words[x], H = c - 1; H >= 0; H--) {
          var q = _ >> H & 1;
          if (k !== y[0] && (k = this.sqr(k)), q === 0 && N === 0) {
            b = 0;
            continue;
          }
          N <<= 1, N |= q, b++, !(b !== g && (x !== 0 || H !== 0)) && (k = this.mul(k, y[N]), b = 0, N = 0);
        }
        c = 26;
      }
      return k;
    }, oe.prototype.convertTo = function(a) {
      var h = a.umod(this.m);
      return h === a ? h.clone() : h;
    }, oe.prototype.convertFrom = function(a) {
      var h = a.clone();
      return h.red = null, h;
    }, i.mont = function(a) {
      return new pe(a);
    };
    function pe(E) {
      oe.call(this, E), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    o(pe, oe), pe.prototype.convertTo = function(a) {
      return this.imod(a.ushln(this.shift));
    }, pe.prototype.convertFrom = function(a) {
      var h = this.imod(a.mul(this.rinv));
      return h.red = null, h;
    }, pe.prototype.imul = function(a, h) {
      if (a.isZero() || h.isZero())
        return a.words[0] = 0, a.length = 1, a;
      var g = a.imul(h), y = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = g.isub(y).iushrn(this.shift), k = x;
      return x.cmp(this.m) >= 0 ? k = x.isub(this.m) : x.cmpn(0) < 0 && (k = x.iadd(this.m)), k._forceRed(this);
    }, pe.prototype.mul = function(a, h) {
      if (a.isZero() || h.isZero())
        return new i(0)._forceRed(this);
      var g = a.mul(h), y = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), x = g.isub(y).iushrn(this.shift), k = x;
      return x.cmp(this.m) >= 0 ? k = x.isub(this.m) : x.cmpn(0) < 0 && (k = x.iadd(this.m)), k._forceRed(this);
    }, pe.prototype.invm = function(a) {
      var h = this.imod(a._invmp(this.m).mul(this.r2));
      return h._forceRed(this);
    };
  })(t, Ke);
})($a);
const wf = $a.exports;
var bf = _i;
_i.strict = ja;
_i.loose = Wa;
var xf = Object.prototype.toString, Cf = {
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
function _i(t) {
  return ja(t) || Wa(t);
}
function ja(t) {
  return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
}
function Wa(t) {
  return Cf[xf.call(t)];
}
var Mf = bf.strict, Ef = function(e) {
  if (Mf(e)) {
    var r = Buffer.from(e.buffer);
    return e.byteLength !== e.buffer.byteLength && (r = r.slice(e.byteOffset, e.byteOffset + e.byteLength)), r;
  } else
    return Buffer.from(e);
};
const za = "hex", Va = "utf8", Xr = "0";
function Yt(t) {
  return new Uint8Array(t);
}
function Ka(t, e = !1) {
  const r = t.toString(za);
  return e ? rr(r) : r;
}
function Sf(t) {
  return t.toString(Va);
}
function en(t) {
  return Ef(t);
}
function Wt(t, e = !1) {
  return Ka(en(t), e);
}
function kf(t) {
  return Sf(en(t));
}
function Af(t) {
  return Buffer.from(Tt(t), za);
}
function zt(t) {
  return Yt(Af(t));
}
function yi(t) {
  return Buffer.from(t, Va);
}
function Rf(t) {
  return Yt(yi(t));
}
function If(t, e = !1) {
  return Ka(yi(t), e);
}
function Tf(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
}
function Ya(...t) {
  let e = [];
  return t.forEach((r) => e = e.concat(Array.from(r))), new Uint8Array([...e]);
}
function Of(t, e = 8) {
  const r = t % e;
  return r ? (t - r) / e * e + e : t;
}
function Bf(t, e = 8, r = Xr) {
  return Nf(t, Of(t.length, e), r);
}
function Nf(t, e, r = Xr) {
  return Pf(t, e, !0, r);
}
function Tt(t) {
  return t.replace(/^0x/, "");
}
function rr(t) {
  return t.startsWith("0x") ? t : `0x${t}`;
}
function Ja(t) {
  return t = Tt(t), t = Bf(t, 2), t && (t = rr(t)), t;
}
function Lf(t) {
  const e = t.startsWith("0x");
  return t = Tt(t), t = t.startsWith(Xr) ? t.substring(1) : t, e ? rr(t) : t;
}
function Pf(t, e, r, n = Xr) {
  const o = e - t.length;
  let i = t;
  if (o > 0) {
    const l = n.repeat(o);
    i = r ? l + t : t + l;
  }
  return i;
}
function jn(t) {
  return en(new Uint8Array(t));
}
function Ff(t, e) {
  return Wt(new Uint8Array(t), !e);
}
function Uf(t) {
  return Yt(t).buffer;
}
function Df(t) {
  return yi(t);
}
function qf(t, e) {
  return If(t, !e);
}
function Hf(t) {
  return zt(t).buffer;
}
function Ga(t, e) {
  const r = Tt(Ja(new wf(t).toString(16)));
  return e ? r : rr(r);
}
var Za = { exports: {} };
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
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", o = n ? window : {};
    o.JS_SHA3_NO_WINDOW && (n = !1);
    var i = !n && typeof self == "object", l = !o.JS_SHA3_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    l ? o = Ke : i && (o = self);
    var s = !o.JS_SHA3_NO_COMMON_JS && !0 && t.exports, d = !o.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", v = "0123456789abcdef".split(""), m = [31, 7936, 2031616, 520093696], A = [4, 1024, 262144, 67108864], B = [1, 256, 65536, 16777216], L = [6, 1536, 393216, 100663296], P = [0, 8, 16, 24], z = [
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
    ], M = [224, 256, 384, 512], I = [128, 256], R = ["hex", "buffer", "arrayBuffer", "array", "digest"], T = {
      128: 168,
      256: 136
    };
    (o.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(p) {
      return Object.prototype.toString.call(p) === "[object Array]";
    }), d && (o.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(p) {
      return typeof p == "object" && p.buffer && p.buffer.constructor === ArrayBuffer;
    });
    for (var U = function(p, F, W) {
      return function(D) {
        return new q(p, F, p).update(D)[W]();
      };
    }, Y = function(p, F, W) {
      return function(D, K) {
        return new q(p, F, K).update(D)[W]();
      };
    }, Q = function(p, F, W) {
      return function(D, K, ae, ee) {
        return y["cshake" + p].update(D, K, ae, ee)[W]();
      };
    }, ce = function(p, F, W) {
      return function(D, K, ae, ee) {
        return y["kmac" + p].update(D, K, ae, ee)[W]();
      };
    }, oe = function(p, F, W, D) {
      for (var K = 0; K < R.length; ++K) {
        var ae = R[K];
        p[ae] = F(W, D, ae);
      }
      return p;
    }, pe = function(p, F) {
      var W = U(p, F, "hex");
      return W.create = function() {
        return new q(p, F, p);
      }, W.update = function(D) {
        return W.create().update(D);
      }, oe(W, U, p, F);
    }, E = function(p, F) {
      var W = Y(p, F, "hex");
      return W.create = function(D) {
        return new q(p, F, D);
      }, W.update = function(D, K) {
        return W.create(K).update(D);
      }, oe(W, Y, p, F);
    }, a = function(p, F) {
      var W = T[p], D = Q(p, F, "hex");
      return D.create = function(K, ae, ee) {
        return !ae && !ee ? y["shake" + p].create(K) : new q(p, F, K).bytepad([ae, ee], W);
      }, D.update = function(K, ae, ee, Z) {
        return D.create(ae, ee, Z).update(K);
      }, oe(D, Q, p, F);
    }, h = function(p, F) {
      var W = T[p], D = ce(p, F, "hex");
      return D.create = function(K, ae, ee) {
        return new X(p, F, ae).bytepad(["KMAC", ee], W).bytepad([K], W);
      }, D.update = function(K, ae, ee, Z) {
        return D.create(K, ee, Z).update(ae);
      }, oe(D, ce, p, F);
    }, g = [
      { name: "keccak", padding: B, bits: M, createMethod: pe },
      { name: "sha3", padding: L, bits: M, createMethod: pe },
      { name: "shake", padding: m, bits: I, createMethod: E },
      { name: "cshake", padding: A, bits: I, createMethod: a },
      { name: "kmac", padding: A, bits: I, createMethod: h }
    ], y = {}, x = [], k = 0; k < g.length; ++k)
      for (var N = g[k], b = N.bits, c = 0; c < b.length; ++c) {
        var _ = N.name + "_" + b[c];
        if (x.push(_), y[_] = N.createMethod(b[c], N.padding), N.name !== "sha3") {
          var H = N.name + b[c];
          x.push(H), y[H] = y[_];
        }
      }
    function q(p, F, W) {
      this.blocks = [], this.s = [], this.padding = F, this.outputBits = W, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (p << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = W >> 5, this.extraBytes = (W & 31) >> 3;
      for (var D = 0; D < 50; ++D)
        this.s[D] = 0;
    }
    q.prototype.update = function(p) {
      if (this.finalized)
        throw new Error(r);
      var F, W = typeof p;
      if (W !== "string") {
        if (W === "object") {
          if (p === null)
            throw new Error(e);
          if (d && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!d || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        F = !0;
      }
      for (var D = this.blocks, K = this.byteCount, ae = p.length, ee = this.blockCount, Z = 0, he = this.s, te, le; Z < ae; ) {
        if (this.reset)
          for (this.reset = !1, D[0] = this.block, te = 1; te < ee + 1; ++te)
            D[te] = 0;
        if (F)
          for (te = this.start; Z < ae && te < K; ++Z)
            D[te >> 2] |= p[Z] << P[te++ & 3];
        else
          for (te = this.start; Z < ae && te < K; ++Z)
            le = p.charCodeAt(Z), le < 128 ? D[te >> 2] |= le << P[te++ & 3] : le < 2048 ? (D[te >> 2] |= (192 | le >> 6) << P[te++ & 3], D[te >> 2] |= (128 | le & 63) << P[te++ & 3]) : le < 55296 || le >= 57344 ? (D[te >> 2] |= (224 | le >> 12) << P[te++ & 3], D[te >> 2] |= (128 | le >> 6 & 63) << P[te++ & 3], D[te >> 2] |= (128 | le & 63) << P[te++ & 3]) : (le = 65536 + ((le & 1023) << 10 | p.charCodeAt(++Z) & 1023), D[te >> 2] |= (240 | le >> 18) << P[te++ & 3], D[te >> 2] |= (128 | le >> 12 & 63) << P[te++ & 3], D[te >> 2] |= (128 | le >> 6 & 63) << P[te++ & 3], D[te >> 2] |= (128 | le & 63) << P[te++ & 3]);
        if (this.lastByteIndex = te, te >= K) {
          for (this.start = te - K, this.block = D[ee], te = 0; te < ee; ++te)
            he[te] ^= D[te];
          re(he), this.reset = !0;
        } else
          this.start = te;
      }
      return this;
    }, q.prototype.encode = function(p, F) {
      var W = p & 255, D = 1, K = [W];
      for (p = p >> 8, W = p & 255; W > 0; )
        K.unshift(W), p = p >> 8, W = p & 255, ++D;
      return F ? K.push(D) : K.unshift(D), this.update(K), K.length;
    }, q.prototype.encodeString = function(p) {
      var F, W = typeof p;
      if (W !== "string") {
        if (W === "object") {
          if (p === null)
            throw new Error(e);
          if (d && p.constructor === ArrayBuffer)
            p = new Uint8Array(p);
          else if (!Array.isArray(p) && (!d || !ArrayBuffer.isView(p)))
            throw new Error(e);
        } else
          throw new Error(e);
        F = !0;
      }
      var D = 0, K = p.length;
      if (F)
        D = K;
      else
        for (var ae = 0; ae < p.length; ++ae) {
          var ee = p.charCodeAt(ae);
          ee < 128 ? D += 1 : ee < 2048 ? D += 2 : ee < 55296 || ee >= 57344 ? D += 3 : (ee = 65536 + ((ee & 1023) << 10 | p.charCodeAt(++ae) & 1023), D += 4);
        }
      return D += this.encode(D * 8), this.update(p), D;
    }, q.prototype.bytepad = function(p, F) {
      for (var W = this.encode(F), D = 0; D < p.length; ++D)
        W += this.encodeString(p[D]);
      var K = F - W % F, ae = [];
      return ae.length = K, this.update(ae), this;
    }, q.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var p = this.blocks, F = this.lastByteIndex, W = this.blockCount, D = this.s;
        if (p[F >> 2] |= this.padding[F & 3], this.lastByteIndex === this.byteCount)
          for (p[0] = p[W], F = 1; F < W + 1; ++F)
            p[F] = 0;
        for (p[W - 1] |= 2147483648, F = 0; F < W; ++F)
          D[F] ^= p[F];
        re(D);
      }
    }, q.prototype.toString = q.prototype.hex = function() {
      this.finalize();
      for (var p = this.blockCount, F = this.s, W = this.outputBlocks, D = this.extraBytes, K = 0, ae = 0, ee = "", Z; ae < W; ) {
        for (K = 0; K < p && ae < W; ++K, ++ae)
          Z = F[K], ee += v[Z >> 4 & 15] + v[Z & 15] + v[Z >> 12 & 15] + v[Z >> 8 & 15] + v[Z >> 20 & 15] + v[Z >> 16 & 15] + v[Z >> 28 & 15] + v[Z >> 24 & 15];
        ae % p === 0 && (re(F), K = 0);
      }
      return D && (Z = F[K], ee += v[Z >> 4 & 15] + v[Z & 15], D > 1 && (ee += v[Z >> 12 & 15] + v[Z >> 8 & 15]), D > 2 && (ee += v[Z >> 20 & 15] + v[Z >> 16 & 15])), ee;
    }, q.prototype.arrayBuffer = function() {
      this.finalize();
      var p = this.blockCount, F = this.s, W = this.outputBlocks, D = this.extraBytes, K = 0, ae = 0, ee = this.outputBits >> 3, Z;
      D ? Z = new ArrayBuffer(W + 1 << 2) : Z = new ArrayBuffer(ee);
      for (var he = new Uint32Array(Z); ae < W; ) {
        for (K = 0; K < p && ae < W; ++K, ++ae)
          he[ae] = F[K];
        ae % p === 0 && re(F);
      }
      return D && (he[K] = F[K], Z = Z.slice(0, ee)), Z;
    }, q.prototype.buffer = q.prototype.arrayBuffer, q.prototype.digest = q.prototype.array = function() {
      this.finalize();
      for (var p = this.blockCount, F = this.s, W = this.outputBlocks, D = this.extraBytes, K = 0, ae = 0, ee = [], Z, he; ae < W; ) {
        for (K = 0; K < p && ae < W; ++K, ++ae)
          Z = ae << 2, he = F[K], ee[Z] = he & 255, ee[Z + 1] = he >> 8 & 255, ee[Z + 2] = he >> 16 & 255, ee[Z + 3] = he >> 24 & 255;
        ae % p === 0 && re(F);
      }
      return D && (Z = ae << 2, he = F[K], ee[Z] = he & 255, D > 1 && (ee[Z + 1] = he >> 8 & 255), D > 2 && (ee[Z + 2] = he >> 16 & 255)), ee;
    };
    function X(p, F, W) {
      q.call(this, p, F, W);
    }
    X.prototype = new q(), X.prototype.finalize = function() {
      return this.encode(this.outputBits, !0), q.prototype.finalize.call(this);
    };
    var re = function(p) {
      var F, W, D, K, ae, ee, Z, he, te, le, w, u, f, C, O, $, J, se, ue, be, ge, fe, Ge, Ce, Me, it, Te, Oe, vt, Be, Ne, _t, Le, Se, ct, xe, ke, ot, Re, Pe, lt, Fe, Ie, ut, Ue, De, ft, qe, He, yt, $e, S, V, G, ne, _e, ye, ve, me, ze, Ee, Ae, Ye;
      for (D = 0; D < 48; D += 2)
        K = p[0] ^ p[10] ^ p[20] ^ p[30] ^ p[40], ae = p[1] ^ p[11] ^ p[21] ^ p[31] ^ p[41], ee = p[2] ^ p[12] ^ p[22] ^ p[32] ^ p[42], Z = p[3] ^ p[13] ^ p[23] ^ p[33] ^ p[43], he = p[4] ^ p[14] ^ p[24] ^ p[34] ^ p[44], te = p[5] ^ p[15] ^ p[25] ^ p[35] ^ p[45], le = p[6] ^ p[16] ^ p[26] ^ p[36] ^ p[46], w = p[7] ^ p[17] ^ p[27] ^ p[37] ^ p[47], u = p[8] ^ p[18] ^ p[28] ^ p[38] ^ p[48], f = p[9] ^ p[19] ^ p[29] ^ p[39] ^ p[49], F = u ^ (ee << 1 | Z >>> 31), W = f ^ (Z << 1 | ee >>> 31), p[0] ^= F, p[1] ^= W, p[10] ^= F, p[11] ^= W, p[20] ^= F, p[21] ^= W, p[30] ^= F, p[31] ^= W, p[40] ^= F, p[41] ^= W, F = K ^ (he << 1 | te >>> 31), W = ae ^ (te << 1 | he >>> 31), p[2] ^= F, p[3] ^= W, p[12] ^= F, p[13] ^= W, p[22] ^= F, p[23] ^= W, p[32] ^= F, p[33] ^= W, p[42] ^= F, p[43] ^= W, F = ee ^ (le << 1 | w >>> 31), W = Z ^ (w << 1 | le >>> 31), p[4] ^= F, p[5] ^= W, p[14] ^= F, p[15] ^= W, p[24] ^= F, p[25] ^= W, p[34] ^= F, p[35] ^= W, p[44] ^= F, p[45] ^= W, F = he ^ (u << 1 | f >>> 31), W = te ^ (f << 1 | u >>> 31), p[6] ^= F, p[7] ^= W, p[16] ^= F, p[17] ^= W, p[26] ^= F, p[27] ^= W, p[36] ^= F, p[37] ^= W, p[46] ^= F, p[47] ^= W, F = le ^ (K << 1 | ae >>> 31), W = w ^ (ae << 1 | K >>> 31), p[8] ^= F, p[9] ^= W, p[18] ^= F, p[19] ^= W, p[28] ^= F, p[29] ^= W, p[38] ^= F, p[39] ^= W, p[48] ^= F, p[49] ^= W, C = p[0], O = p[1], De = p[11] << 4 | p[10] >>> 28, ft = p[10] << 4 | p[11] >>> 28, Oe = p[20] << 3 | p[21] >>> 29, vt = p[21] << 3 | p[20] >>> 29, ze = p[31] << 9 | p[30] >>> 23, Ee = p[30] << 9 | p[31] >>> 23, Fe = p[40] << 18 | p[41] >>> 14, Ie = p[41] << 18 | p[40] >>> 14, Se = p[2] << 1 | p[3] >>> 31, ct = p[3] << 1 | p[2] >>> 31, $ = p[13] << 12 | p[12] >>> 20, J = p[12] << 12 | p[13] >>> 20, qe = p[22] << 10 | p[23] >>> 22, He = p[23] << 10 | p[22] >>> 22, Be = p[33] << 13 | p[32] >>> 19, Ne = p[32] << 13 | p[33] >>> 19, Ae = p[42] << 2 | p[43] >>> 30, Ye = p[43] << 2 | p[42] >>> 30, G = p[5] << 30 | p[4] >>> 2, ne = p[4] << 30 | p[5] >>> 2, xe = p[14] << 6 | p[15] >>> 26, ke = p[15] << 6 | p[14] >>> 26, se = p[25] << 11 | p[24] >>> 21, ue = p[24] << 11 | p[25] >>> 21, yt = p[34] << 15 | p[35] >>> 17, $e = p[35] << 15 | p[34] >>> 17, _t = p[45] << 29 | p[44] >>> 3, Le = p[44] << 29 | p[45] >>> 3, Ce = p[6] << 28 | p[7] >>> 4, Me = p[7] << 28 | p[6] >>> 4, _e = p[17] << 23 | p[16] >>> 9, ye = p[16] << 23 | p[17] >>> 9, ot = p[26] << 25 | p[27] >>> 7, Re = p[27] << 25 | p[26] >>> 7, be = p[36] << 21 | p[37] >>> 11, ge = p[37] << 21 | p[36] >>> 11, S = p[47] << 24 | p[46] >>> 8, V = p[46] << 24 | p[47] >>> 8, ut = p[8] << 27 | p[9] >>> 5, Ue = p[9] << 27 | p[8] >>> 5, it = p[18] << 20 | p[19] >>> 12, Te = p[19] << 20 | p[18] >>> 12, ve = p[29] << 7 | p[28] >>> 25, me = p[28] << 7 | p[29] >>> 25, Pe = p[38] << 8 | p[39] >>> 24, lt = p[39] << 8 | p[38] >>> 24, fe = p[48] << 14 | p[49] >>> 18, Ge = p[49] << 14 | p[48] >>> 18, p[0] = C ^ ~$ & se, p[1] = O ^ ~J & ue, p[10] = Ce ^ ~it & Oe, p[11] = Me ^ ~Te & vt, p[20] = Se ^ ~xe & ot, p[21] = ct ^ ~ke & Re, p[30] = ut ^ ~De & qe, p[31] = Ue ^ ~ft & He, p[40] = G ^ ~_e & ve, p[41] = ne ^ ~ye & me, p[2] = $ ^ ~se & be, p[3] = J ^ ~ue & ge, p[12] = it ^ ~Oe & Be, p[13] = Te ^ ~vt & Ne, p[22] = xe ^ ~ot & Pe, p[23] = ke ^ ~Re & lt, p[32] = De ^ ~qe & yt, p[33] = ft ^ ~He & $e, p[42] = _e ^ ~ve & ze, p[43] = ye ^ ~me & Ee, p[4] = se ^ ~be & fe, p[5] = ue ^ ~ge & Ge, p[14] = Oe ^ ~Be & _t, p[15] = vt ^ ~Ne & Le, p[24] = ot ^ ~Pe & Fe, p[25] = Re ^ ~lt & Ie, p[34] = qe ^ ~yt & S, p[35] = He ^ ~$e & V, p[44] = ve ^ ~ze & Ae, p[45] = me ^ ~Ee & Ye, p[6] = be ^ ~fe & C, p[7] = ge ^ ~Ge & O, p[16] = Be ^ ~_t & Ce, p[17] = Ne ^ ~Le & Me, p[26] = Pe ^ ~Fe & Se, p[27] = lt ^ ~Ie & ct, p[36] = yt ^ ~S & ut, p[37] = $e ^ ~V & Ue, p[46] = ze ^ ~Ae & G, p[47] = Ee ^ ~Ye & ne, p[8] = fe ^ ~C & $, p[9] = Ge ^ ~O & J, p[18] = _t ^ ~Ce & it, p[19] = Le ^ ~Me & Te, p[28] = Fe ^ ~Se & xe, p[29] = Ie ^ ~ct & ke, p[38] = S ^ ~ut & De, p[39] = V ^ ~Ue & ft, p[48] = Ae ^ ~G & _e, p[49] = Ye ^ ~ne & ye, p[0] ^= z[D], p[1] ^= z[D + 1];
    };
    if (s)
      t.exports = y;
    else
      for (k = 0; k < x.length; ++k)
        o[x[k]] = y[x[k]];
  })();
})(Za);
var nr = {}, At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.isBrowserCryptoAvailable = At.getSubtleCrypto = At.getBrowerCrypto = void 0;
function wi() {
  return (Ke == null ? void 0 : Ke.crypto) || (Ke == null ? void 0 : Ke.msCrypto) || {};
}
At.getBrowerCrypto = wi;
function Qa() {
  const t = wi();
  return t.subtle || t.webkitSubtle;
}
At.getSubtleCrypto = Qa;
function $f() {
  return !!wi() && !!Qa();
}
At.isBrowserCryptoAvailable = $f;
var Rt = {};
Object.defineProperty(Rt, "__esModule", { value: !0 });
Rt.isBrowser = Rt.isNode = Rt.isReactNative = void 0;
function Xa() {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
}
Rt.isReactNative = Xa;
function es() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
Rt.isNode = es;
function jf() {
  return !Xa() && !es();
}
Rt.isBrowser = jf;
(function(t) {
  var e = Ke && Ke.__createBinding || (Object.create ? function(n, o, i, l) {
    l === void 0 && (l = i), Object.defineProperty(n, l, { enumerable: !0, get: function() {
      return o[i];
    } });
  } : function(n, o, i, l) {
    l === void 0 && (l = i), n[l] = o[i];
  }), r = Ke && Ke.__exportStar || function(n, o) {
    for (var i in n)
      i !== "default" && !o.hasOwnProperty(i) && e(o, n, i);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(At, t), r(Rt, t);
})(nr);
function Wf() {
  const t = Date.now() * Math.pow(10, 3), e = Math.floor(Math.random() * Math.pow(10, 3));
  return t + e;
}
function Or(t) {
  return Ja(t);
}
function zf(t) {
  return Lf(rr(t));
}
const Wn = Wf;
function Sn() {
  return ((e, r) => {
    for (r = e = ""; e++ < 36; r += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-")
      ;
    return r;
  })();
}
function Vf(t, e) {
  let r;
  const n = vf[t];
  return n && (r = `https://${n}.infura.io/v3/${e}`), r;
}
function Kf(t, e) {
  let r;
  const n = Vf(t, e.infuraId);
  return e.custom && e.custom[t] ? r = e.custom[t] : n && (r = n), r;
}
function Yf(t) {
  return t === "" || typeof t == "string" && t.trim() === "";
}
function Jf(t) {
  return !(t && t.length);
}
function ts(t, e) {
  return Tf(t, e);
}
function Gf(t) {
  return typeof t.method < "u";
}
function dr(t) {
  return typeof t.result < "u";
}
function Hr(t) {
  return typeof t.error < "u";
}
function mo(t) {
  return typeof t.event < "u";
}
function Zf(t) {
  return mf.includes(t) || t.startsWith("wc_");
}
function Qf(t) {
  return t.method.startsWith("wc_") ? !0 : !vi.includes(t.method);
}
function Xf(t) {
  t = Tt(t.toLowerCase());
  const e = Tt(Za.exports.keccak_256(Df(t)));
  let r = "";
  for (let n = 0; n < t.length; n++)
    parseInt(e[n], 16) > 7 ? r += t[n].toUpperCase() : r += t[n];
  return rr(r);
}
const eh = (t) => t ? t.toLowerCase().substring(0, 2) !== "0x" ? !1 : /^(0x)?[0-9a-f]{40}$/i.test(t) ? /^(0x)?[0-9a-f]{40}$/.test(t) || /^(0x)?[0-9A-F]{40}$/.test(t) ? !0 : t === Xf(t) : !1 : !1;
function $r(t) {
  return !Jf(t) && !ts(t[0]) && (t[0] = qf(t[0])), t;
}
function kn(t) {
  if (typeof t.type < "u" && t.type !== "0")
    return t;
  if (typeof t.from > "u" || !eh(t.from))
    throw new Error("Transaction object must include a valid 'from' value.");
  function e(o) {
    let i = o;
    return (typeof o == "number" || typeof o == "string" && !Yf(o)) && (ts(o) ? typeof o == "string" && (i = Or(o)) : i = Ga(o)), typeof i == "string" && (i = zf(i)), i;
  }
  const r = {
    from: Or(t.from),
    to: typeof t.to > "u" ? void 0 : Or(t.to),
    gasPrice: typeof t.gasPrice > "u" ? "" : e(t.gasPrice),
    gas: typeof t.gas > "u" ? typeof t.gasLimit > "u" ? "" : e(t.gasLimit) : e(t.gas),
    value: typeof t.value > "u" ? "" : e(t.value),
    nonce: typeof t.nonce > "u" ? "" : e(t.nonce),
    data: typeof t.data > "u" ? "" : Or(t.data) || "0x"
  }, n = ["gasPrice", "gas", "value", "nonce"];
  return Object.keys(r).forEach((o) => {
    (typeof r[o] > "u" || typeof r[o] == "string" && !r[o].trim().length) && n.includes(o) && delete r[o];
  }), r;
}
function th(t) {
  const e = t.message || "Failed or Rejected Request";
  let r = -32e3;
  if (t && !t.code)
    switch (e) {
      case "Parse error":
        r = -32700;
        break;
      case "Invalid request":
        r = -32600;
        break;
      case "Method not found":
        r = -32601;
        break;
      case "Invalid params":
        r = -32602;
        break;
      case "Internal error":
        r = -32603;
        break;
      default:
        r = -32e3;
        break;
    }
  const n = {
    code: r,
    message: e
  };
  return t.data && (n.data = t.data), n;
}
var bi = {}, rh = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), rs = "%[a-f0-9]{2}", vo = new RegExp(rs, "gi"), _o = new RegExp("(" + rs + ")+", "gi");
function zn(t, e) {
  try {
    return decodeURIComponent(t.join(""));
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], zn(r), zn(n));
}
function nh(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(vo), r = 1; r < e.length; r++)
      t = zn(e, r).join(""), e = t.match(vo);
    return t;
  }
}
function ih(t) {
  for (var e = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, r = _o.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = nh(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = _o.exec(t);
  }
  e["%C2"] = "\uFFFD";
  for (var o = Object.keys(e), i = 0; i < o.length; i++) {
    var l = o[i];
    t = t.replace(new RegExp(l, "g"), e[l]);
  }
  return t;
}
var oh = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return ih(t);
  }
}, ah = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
};
(function(t) {
  const e = rh, r = oh, n = ah, o = (M) => M == null;
  function i(M) {
    switch (M.arrayFormat) {
      case "index":
        return (I) => (R, T) => {
          const U = R.length;
          return T === void 0 || M.skipNull && T === null || M.skipEmptyString && T === "" ? R : T === null ? [...R, [d(I, M), "[", U, "]"].join("")] : [
            ...R,
            [d(I, M), "[", d(U, M), "]=", d(T, M)].join("")
          ];
        };
      case "bracket":
        return (I) => (R, T) => T === void 0 || M.skipNull && T === null || M.skipEmptyString && T === "" ? R : T === null ? [...R, [d(I, M), "[]"].join("")] : [...R, [d(I, M), "[]=", d(T, M)].join("")];
      case "comma":
      case "separator":
        return (I) => (R, T) => T == null || T.length === 0 ? R : R.length === 0 ? [[d(I, M), "=", d(T, M)].join("")] : [[R, d(T, M)].join(M.arrayFormatSeparator)];
      default:
        return (I) => (R, T) => T === void 0 || M.skipNull && T === null || M.skipEmptyString && T === "" ? R : T === null ? [...R, d(I, M)] : [...R, [d(I, M), "=", d(T, M)].join("")];
    }
  }
  function l(M) {
    let I;
    switch (M.arrayFormat) {
      case "index":
        return (R, T, U) => {
          if (I = /\[(\d*)\]$/.exec(R), R = R.replace(/\[\d*\]$/, ""), !I) {
            U[R] = T;
            return;
          }
          U[R] === void 0 && (U[R] = {}), U[R][I[1]] = T;
        };
      case "bracket":
        return (R, T, U) => {
          if (I = /(\[\])$/.exec(R), R = R.replace(/\[\]$/, ""), !I) {
            U[R] = T;
            return;
          }
          if (U[R] === void 0) {
            U[R] = [T];
            return;
          }
          U[R] = [].concat(U[R], T);
        };
      case "comma":
      case "separator":
        return (R, T, U) => {
          const Q = typeof T == "string" && T.split("").indexOf(M.arrayFormatSeparator) > -1 ? T.split(M.arrayFormatSeparator).map((ce) => v(ce, M)) : T === null ? T : v(T, M);
          U[R] = Q;
        };
      default:
        return (R, T, U) => {
          if (U[R] === void 0) {
            U[R] = T;
            return;
          }
          U[R] = [].concat(U[R], T);
        };
    }
  }
  function s(M) {
    if (typeof M != "string" || M.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(M, I) {
    return I.encode ? I.strict ? e(M) : encodeURIComponent(M) : M;
  }
  function v(M, I) {
    return I.decode ? r(M) : M;
  }
  function m(M) {
    return Array.isArray(M) ? M.sort() : typeof M == "object" ? m(Object.keys(M)).sort((I, R) => Number(I) - Number(R)).map((I) => M[I]) : M;
  }
  function A(M) {
    const I = M.indexOf("#");
    return I !== -1 && (M = M.slice(0, I)), M;
  }
  function B(M) {
    let I = "";
    const R = M.indexOf("#");
    return R !== -1 && (I = M.slice(R)), I;
  }
  function L(M) {
    M = A(M);
    const I = M.indexOf("?");
    return I === -1 ? "" : M.slice(I + 1);
  }
  function P(M, I) {
    return I.parseNumbers && !Number.isNaN(Number(M)) && typeof M == "string" && M.trim() !== "" ? M = Number(M) : I.parseBooleans && M !== null && (M.toLowerCase() === "true" || M.toLowerCase() === "false") && (M = M.toLowerCase() === "true"), M;
  }
  function z(M, I) {
    I = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, I), s(I.arrayFormatSeparator);
    const R = l(I), T = /* @__PURE__ */ Object.create(null);
    if (typeof M != "string" || (M = M.trim().replace(/^[?#&]/, ""), !M))
      return T;
    for (const U of M.split("&")) {
      let [Y, Q] = n(I.decode ? U.replace(/\+/g, " ") : U, "=");
      Q = Q === void 0 ? null : ["comma", "separator"].includes(I.arrayFormat) ? Q : v(Q, I), R(v(Y, I), Q, T);
    }
    for (const U of Object.keys(T)) {
      const Y = T[U];
      if (typeof Y == "object" && Y !== null)
        for (const Q of Object.keys(Y))
          Y[Q] = P(Y[Q], I);
      else
        T[U] = P(Y, I);
    }
    return I.sort === !1 ? T : (I.sort === !0 ? Object.keys(T).sort() : Object.keys(T).sort(I.sort)).reduce((U, Y) => {
      const Q = T[Y];
      return Boolean(Q) && typeof Q == "object" && !Array.isArray(Q) ? U[Y] = m(Q) : U[Y] = Q, U;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = L, t.parse = z, t.stringify = (M, I) => {
    if (!M)
      return "";
    I = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, I), s(I.arrayFormatSeparator);
    const R = (Q) => I.skipNull && o(M[Q]) || I.skipEmptyString && M[Q] === "", T = i(I), U = {};
    for (const Q of Object.keys(M))
      R(Q) || (U[Q] = M[Q]);
    const Y = Object.keys(U);
    return I.sort !== !1 && Y.sort(I.sort), Y.map((Q) => {
      const ce = M[Q];
      return ce === void 0 ? "" : ce === null ? d(Q, I) : Array.isArray(ce) ? ce.reduce(T(Q), []).join("&") : d(Q, I) + "=" + d(ce, I);
    }).filter((Q) => Q.length > 0).join("&");
  }, t.parseUrl = (M, I) => {
    I = Object.assign({
      decode: !0
    }, I);
    const [R, T] = n(M, "#");
    return Object.assign(
      {
        url: R.split("?")[0] || "",
        query: z(L(M), I)
      },
      I && I.parseFragmentIdentifier && T ? { fragmentIdentifier: v(T, I) } : {}
    );
  }, t.stringifyUrl = (M, I) => {
    I = Object.assign({
      encode: !0,
      strict: !0
    }, I);
    const R = A(M.url).split("?")[0] || "", T = t.extract(M.url), U = t.parse(T, { sort: !1 }), Y = Object.assign(U, M.query);
    let Q = t.stringify(Y, I);
    Q && (Q = `?${Q}`);
    let ce = B(M.url);
    return M.fragmentIdentifier && (ce = `#${d(M.fragmentIdentifier, I)}`), `${R}${Q}${ce}`;
  };
})(bi);
function sh(t) {
  const e = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0;
  return typeof e < "u" ? t.substr(e) : "";
}
function ch(t, e) {
  let r = ns(t);
  return r = Object.assign(Object.assign({}, r), e), t = lh(r), t;
}
function ns(t) {
  return bi.parse(t);
}
function lh(t) {
  return bi.stringify(t);
}
function uh(t) {
  return typeof t.bridge < "u";
}
function fh(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), o = t.substring(e + 1, r);
  function i(A) {
    const B = "@", L = A.split(B);
    return {
      handshakeTopic: L[0],
      version: parseInt(L[1], 10)
    };
  }
  const l = i(o), s = typeof r < "u" ? t.substr(r) : "";
  function d(A) {
    const B = ns(A);
    return {
      key: B.key || "",
      bridge: B.bridge || ""
    };
  }
  const v = d(s);
  return Object.assign(Object.assign({ protocol: n }, l), v);
}
class hh {
  constructor() {
    this._eventEmitters = [], typeof window < "u" && typeof window.addEventListener < "u" && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")));
  }
  on(e, r) {
    this._eventEmitters.push({
      event: e,
      callback: r
    });
  }
  trigger(e) {
    let r = [];
    e && (r = this._eventEmitters.filter((n) => n.event === e)), r.forEach((n) => {
      n.callback();
    });
  }
}
const dh = typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
class ph {
  constructor(e) {
    if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new hh(), !e.url || typeof e.url != "string")
      throw new Error("Missing or invalid WebSocket url");
    this._url = e.url, this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(e) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(e) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(e) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(e) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(e) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(e, r, n) {
    if (!r || typeof r != "string")
      throw new Error("Missing or invalid topic field");
    this._socketSend({
      topic: r,
      type: "pub",
      payload: e,
      silent: !!n
    });
  }
  subscribe(e) {
    this._socketSend({
      topic: e,
      type: "sub",
      payload: "",
      silent: !0
    });
  }
  on(e, r) {
    this._events.push({ event: e, callback: r });
  }
  _socketCreate() {
    if (this._nextSocket)
      return;
    const e = gh(this._url, this._protocol, this._version);
    if (this._nextSocket = new dh(e), !this._nextSocket)
      throw new Error("Failed to create socket");
    this._nextSocket.onmessage = (r) => this._socketReceive(r), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = (r) => this._socketError(r), this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null, this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
  }
  _socketClose() {
    this._socket && (this._socket.onclose = () => {
    }, this._socket.close());
  }
  _socketSend(e) {
    const r = JSON.stringify(e);
    this._socket && this._socket.readyState === 1 ? this._socket.send(r) : (this._setToQueue(e), this._socketCreate());
  }
  async _socketReceive(e) {
    let r;
    try {
      r = JSON.parse(e.data);
    } catch {
      return;
    }
    if (this._socketSend({
      topic: r.topic,
      type: "ack",
      payload: "",
      silent: !0
    }), this._socket && this._socket.readyState === 1) {
      const n = this._events.filter((o) => o.event === "message");
      n && n.length && n.forEach((o) => o.callback(r));
    }
  }
  _socketError(e) {
    const r = this._events.filter((n) => n.event === "error");
    r && r.length && r.forEach((n) => n.callback(e));
  }
  _queueSubscriptions() {
    this._subscriptions.forEach((r) => this._queue.push({
      topic: r,
      type: "sub",
      payload: "",
      silent: !0
    })), this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(e) {
    this._queue.push(e);
  }
  _pushQueue() {
    this._queue.forEach((r) => this._socketSend(r)), this._queue = [];
  }
}
function gh(t, e, r) {
  var n, o;
  const l = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?"), s = Ba() ? {
    protocol: e,
    version: r,
    env: "browser",
    host: ((n = Pa()) === null || n === void 0 ? void 0 : n.host) || ""
  } : {
    protocol: e,
    version: r,
    env: ((o = Jr()) === null || o === void 0 ? void 0 : o.name) || ""
  }, d = ch(sh(l[1] || ""), s);
  return l[0] + "?" + d;
}
const An = "Session currently connected", Ft = "Session currently disconnected", mh = "Session Rejected", vh = "Missing JSON RPC response", _h = 'JSON-RPC success response must include "result" field', yh = 'JSON-RPC error response must include "error" field', wh = 'JSON RPC request must have valid "method" value', bh = 'JSON RPC request must have valid "id" value', xh = "Missing one of the required parameters: bridge / uri / session", yo = "JSON RPC response format is invalid", Ch = "URI format is invalid", Mh = "QRCode Modal not provided", wo = "User close QRCode Modal";
class Eh {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(e) {
    this._eventEmitters.push(e);
  }
  unsubscribe(e) {
    this._eventEmitters = this._eventEmitters.filter((r) => r.event !== e);
  }
  trigger(e) {
    let r = [], n;
    Gf(e) ? n = e.method : dr(e) || Hr(e) ? n = `response:${e.id}` : mo(e) ? n = e.event : n = "", n && (r = this._eventEmitters.filter((o) => o.event === n)), (!r || !r.length) && !Zf(n) && !mo(n) && (r = this._eventEmitters.filter((o) => o.event === "call_request")), r.forEach((o) => {
      if (Hr(e)) {
        const i = new Error(e.error.message);
        o.callback(i, null);
      } else
        o.callback(null, e);
    });
  }
}
class Sh {
  constructor(e = "walletconnect") {
    this.storageId = e;
  }
  getSession() {
    let e = null;
    const r = gi(this.storageId);
    return r && uh(r) && (e = r), e;
  }
  setSession(e) {
    return pi(this.storageId, e), e;
  }
  removeSession() {
    mi(this.storageId);
  }
}
const kh = "walletconnect.org", Ah = "abcdefghijklmnopqrstuvwxyz0123456789", is = Ah.split("").map((t) => `https://${t}.bridge.walletconnect.org`);
function Rh(t) {
  let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
  return e = e.split(":")[0], e = e.split("?")[0], e;
}
function Ih(t) {
  return Rh(t).split(".").slice(-2).join(".");
}
function Th() {
  return Math.floor(Math.random() * is.length);
}
function Oh() {
  return is[Th()];
}
function Bh(t) {
  return Ih(t) === kh;
}
function Nh(t) {
  return Bh(t) ? Oh() : t;
}
class Lh {
  constructor(e) {
    if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new Eh(), this._clientMeta = $n() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new Sh(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...vi, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session)
      throw new Error(xh);
    e.connectorOpts.bridge && (this.bridge = Nh(e.connectorOpts.bridge)), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
    const r = e.connectorOpts.session || this._getStorageSession();
    r && (this.session = r), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new ph({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts);
  }
  set bridge(e) {
    !e || (this._bridge = e);
  }
  get bridge() {
    return this._bridge;
  }
  set key(e) {
    if (!e)
      return;
    const r = Hf(e);
    this._key = r;
  }
  get key() {
    return this._key ? Ff(this._key, !0) : "";
  }
  set clientId(e) {
    !e || (this._clientId = e);
  }
  get clientId() {
    let e = this._clientId;
    return e || (e = this._clientId = Sn()), this._clientId;
  }
  set peerId(e) {
    !e || (this._peerId = e);
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(e) {
  }
  get clientMeta() {
    let e = this._clientMeta;
    return e || (e = this._clientMeta = $n()), e;
  }
  set peerMeta(e) {
    this._peerMeta = e;
  }
  get peerMeta() {
    return this._peerMeta;
  }
  set handshakeTopic(e) {
    !e || (this._handshakeTopic = e);
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(e) {
    !e || (this._handshakeId = e);
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    return this._formatUri();
  }
  set uri(e) {
    if (!e)
      return;
    const { handshakeTopic: r, bridge: n, key: o } = this._parseUri(e);
    this.handshakeTopic = r, this.bridge = n, this.key = o;
  }
  set chainId(e) {
    this._chainId = e;
  }
  get chainId() {
    return this._chainId;
  }
  set networkId(e) {
    this._networkId = e;
  }
  get networkId() {
    return this._networkId;
  }
  set accounts(e) {
    this._accounts = e;
  }
  get accounts() {
    return this._accounts;
  }
  set rpcUrl(e) {
    this._rpcUrl = e;
  }
  get rpcUrl() {
    return this._rpcUrl;
  }
  set connected(e) {
  }
  get connected() {
    return this._connected;
  }
  set pending(e) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(e) {
    !e || (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic);
  }
  on(e, r) {
    const n = {
      event: e,
      callback: r
    };
    this._eventManager.subscribe(n);
  }
  off(e) {
    this._eventManager.unsubscribe(e);
  }
  async createInstantRequest(e) {
    this._key = await this._generateKey();
    const r = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(e)
        }
      ]
    });
    this.handshakeId = r.id, this.handshakeTopic = Sn(), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    }), this.on("modal_closed", () => {
      throw new Error(wo);
    });
    const n = () => {
      this.killSession();
    };
    try {
      const o = await this._sendCallRequest(r);
      return o && n(), o;
    } catch (o) {
      throw n(), o;
    }
  }
  async connect(e) {
    if (!this._qrcodeModal)
      throw new Error(Mh);
    return this.connected ? {
      chainId: this.chainId,
      accounts: this.accounts
    } : (await this.createSession(e), new Promise(async (r, n) => {
      this.on("modal_closed", () => n(new Error(wo))), this.on("connect", (o, i) => {
        if (o)
          return n(o);
        r(i.params[0]);
      });
    }));
  }
  async createSession(e) {
    if (this._connected)
      throw new Error(An);
    if (this.pending)
      return;
    this._key = await this._generateKey();
    const r = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: e && e.chainId ? e.chainId : null
        }
      ]
    });
    this.handshakeId = r.id, this.handshakeTopic = Sn(), this._sendSessionRequest(r, "Session update rejected", {
      topic: this.handshakeTopic
    }), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(e) {
    if (this._connected)
      throw new Error(An);
    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
    const r = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    }, n = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: r
    };
    this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(e) {
    if (this._connected)
      throw new Error(An);
    const r = e && e.message ? e.message : mh, n = this._formatResponse({
      id: this.handshakeId,
      error: { message: r }
    });
    this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: r }]
    }), this._removeStorageSession();
  }
  updateSession(e) {
    if (!this._connected)
      throw new Error(Ft);
    this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
    const r = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    }, n = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [r]
    });
    this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    }), this._manageStorageSession();
  }
  async killSession(e) {
    const r = e ? e.message : "Session Disconnected", n = {
      approved: !1,
      chainId: null,
      networkId: null,
      accounts: null
    }, o = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [n]
    });
    await this._sendRequest(o), this._handleSessionDisconnect(r);
  }
  async sendTransaction(e) {
    if (!this._connected)
      throw new Error(Ft);
    const r = kn(e), n = this._formatRequest({
      method: "eth_sendTransaction",
      params: [r]
    });
    return await this._sendCallRequest(n);
  }
  async signTransaction(e) {
    if (!this._connected)
      throw new Error(Ft);
    const r = kn(e), n = this._formatRequest({
      method: "eth_signTransaction",
      params: [r]
    });
    return await this._sendCallRequest(n);
  }
  async signMessage(e) {
    if (!this._connected)
      throw new Error(Ft);
    const r = this._formatRequest({
      method: "eth_sign",
      params: e
    });
    return await this._sendCallRequest(r);
  }
  async signPersonalMessage(e) {
    if (!this._connected)
      throw new Error(Ft);
    e = $r(e);
    const r = this._formatRequest({
      method: "personal_sign",
      params: e
    });
    return await this._sendCallRequest(r);
  }
  async signTypedData(e) {
    if (!this._connected)
      throw new Error(Ft);
    const r = this._formatRequest({
      method: "eth_signTypedData",
      params: e
    });
    return await this._sendCallRequest(r);
  }
  async updateChain(e) {
    if (!this._connected)
      throw new Error("Session currently disconnected");
    const r = this._formatRequest({
      method: "wallet_updateChain",
      params: [e]
    });
    return await this._sendCallRequest(r);
  }
  unsafeSend(e, r) {
    return this._sendRequest(e, r), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: e, options: r }]
    }), new Promise((n, o) => {
      this._subscribeToResponse(e.id, (i, l) => {
        if (i) {
          o(i);
          return;
        }
        if (!l)
          throw new Error(vh);
        n(l);
      });
    });
  }
  async sendCustomRequest(e, r) {
    if (!this._connected)
      throw new Error(Ft);
    switch (e.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return Ga(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        e.params && (e.params[0] = kn(e.params[0]));
        break;
      case "personal_sign":
        e.params && (e.params = $r(e.params));
        break;
    }
    const n = this._formatRequest(e);
    return await this._sendCallRequest(n, r);
  }
  approveRequest(e) {
    if (dr(e)) {
      const r = this._formatResponse(e);
      this._sendResponse(r);
    } else
      throw new Error(_h);
  }
  rejectRequest(e) {
    if (Hr(e)) {
      const r = this._formatResponse(e);
      this._sendResponse(r);
    } else
      throw new Error(yh);
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(e, r) {
    const n = this._formatRequest(e), o = await this._encrypt(n), i = typeof (r == null ? void 0 : r.topic) < "u" ? r.topic : this.peerId, l = JSON.stringify(o), s = typeof (r == null ? void 0 : r.forcePushNotification) < "u" ? !r.forcePushNotification : Qf(n);
    this._transport.send(l, i, s);
  }
  async _sendResponse(e) {
    const r = await this._encrypt(e), n = this.peerId, o = JSON.stringify(r), i = !0;
    this._transport.send(o, n, i);
  }
  async _sendSessionRequest(e, r, n) {
    this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, r);
  }
  _sendCallRequest(e, r) {
    return this._sendRequest(e, r), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: e, options: r }]
    }), this._subscribeToCallResponse(e.id);
  }
  _formatRequest(e) {
    if (typeof e.method > "u")
      throw new Error(wh);
    return {
      id: typeof e.id > "u" ? Wn() : e.id,
      jsonrpc: "2.0",
      method: e.method,
      params: typeof e.params > "u" ? [] : e.params
    };
  }
  _formatResponse(e) {
    if (typeof e.id > "u")
      throw new Error(bh);
    const r = { id: e.id, jsonrpc: "2.0" };
    if (Hr(e)) {
      const n = th(e.error);
      return Object.assign(Object.assign(Object.assign({}, r), e), { error: n });
    } else if (dr(e))
      return Object.assign(Object.assign({}, r), e);
    throw new Error(yo);
  }
  _handleSessionDisconnect(e) {
    const r = e || "Session Disconnected";
    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), mi(qr)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: r }]
    }), this._removeStorageSession(), this.transportClose();
  }
  _handleSessionResponse(e, r) {
    r ? r.approved ? (this._connected ? (r.chainId && (this.chainId = r.chainId), r.accounts && (this.accounts = r.accounts), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })) : (this._connected = !0, r.chainId && (this.chainId = r.chainId), r.accounts && (this.accounts = r.accounts), r.peerId && !this.peerId && (this.peerId = r.peerId), r.peerMeta && !this.peerMeta && (this.peerMeta = r.peerMeta), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })), this._manageStorageSession()) : this._handleSessionDisconnect(e) : this._handleSessionDisconnect(e);
  }
  async _handleIncomingMessages(e) {
    if (![this.clientId, this.handshakeTopic].includes(e.topic))
      return;
    let n;
    try {
      n = JSON.parse(e.payload);
    } catch {
      return;
    }
    const o = await this._decrypt(n);
    o && this._eventManager.trigger(o);
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(e, r) {
    this.on(`response:${e}`, r);
  }
  _subscribeToSessionResponse(e, r) {
    this._subscribeToResponse(e, (n, o) => {
      if (n) {
        this._handleSessionResponse(n.message);
        return;
      }
      dr(o) ? this._handleSessionResponse(r, o.result) : o.error && o.error.message ? this._handleSessionResponse(o.error.message) : this._handleSessionResponse(r);
    });
  }
  _subscribeToCallResponse(e) {
    return new Promise((r, n) => {
      this._subscribeToResponse(e, (o, i) => {
        if (o) {
          n(o);
          return;
        }
        dr(i) ? r(i.result) : i.error && i.error.message ? n(i.error) : n(new Error(yo));
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
        this._eventManager.trigger({
          event: "modal_closed",
          params: []
        });
      }, this._qrcodeModalOptions);
    }), this.on("connect", () => {
      this._qrcodeModal && this._qrcodeModal.close();
    }), this.on("call_request_sent", (e, r) => {
      const { request: n } = r.params[0];
      if (Ta() && this._signingMethods.includes(n.method)) {
        const o = gi(qr);
        o && (window.location.href = o.href);
      }
    }), this.on("wc_sessionRequest", (e, r) => {
      e && this._eventManager.trigger({
        event: "error",
        params: [
          {
            code: "SESSION_REQUEST_ERROR",
            message: e.toString()
          }
        ]
      }), this.handshakeId = r.id, this.peerId = r.params[0].peerId, this.peerMeta = r.params[0].peerMeta;
      const n = Object.assign(Object.assign({}, r), { method: "session_request" });
      this._eventManager.trigger(n);
    }), this.on("wc_sessionUpdate", (e, r) => {
      e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", r.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (e) => this._handleIncomingMessages(e)), this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] })), this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] })), this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    })), this._transport.open();
  }
  _formatUri() {
    const e = this.protocol, r = this.handshakeTopic, n = this.version, o = encodeURIComponent(this.bridge), i = this.key;
    return `${e}:${r}@${n}?bridge=${o}&key=${i}`;
  }
  _parseUri(e) {
    const r = fh(e);
    if (r.protocol === this.protocol) {
      if (!r.handshakeTopic)
        throw Error("Invalid or missing handshakeTopic parameter value");
      const n = r.handshakeTopic;
      if (!r.bridge)
        throw Error("Invalid or missing bridge url parameter value");
      const o = decodeURIComponent(r.bridge);
      if (!r.key)
        throw Error("Invalid or missing key parameter value");
      const i = r.key;
      return { handshakeTopic: n, bridge: o, key: i };
    } else
      throw new Error(Ch);
  }
  async _generateKey() {
    return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
  }
  async _encrypt(e) {
    const r = this._key;
    return this._cryptoLib && r ? await this._cryptoLib.encrypt(e, r) : null;
  }
  async _decrypt(e) {
    const r = this._key;
    return this._cryptoLib && r ? await this._cryptoLib.decrypt(e, r) : null;
  }
  _getStorageSession() {
    let e = null;
    return this._sessionStorage && (e = this._sessionStorage.getSession()), e;
  }
  _setStorageSession() {
    this._sessionStorage && this._sessionStorage.setSession(this.session);
  }
  _removeStorageSession() {
    this._sessionStorage && this._sessionStorage.removeSession();
  }
  _manageStorageSession() {
    this._connected ? this._setStorageSession() : this._removeStorageSession();
  }
  _registerPushServer(e) {
    if (!e.url || typeof e.url != "string")
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    if (!e.type || typeof e.type != "string")
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    if (!e.token || typeof e.token != "string")
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    const r = {
      bridge: this.bridge,
      topic: this.clientId,
      type: e.type,
      token: e.token,
      peerName: "",
      language: e.language || ""
    };
    this.on("connect", async (n, o) => {
      if (n)
        throw n;
      if (e.peerMeta) {
        const i = o.params[0].peerMeta.name;
        r.peerName = i;
      }
      try {
        if (!(await (await fetch(`${e.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(r)
        })).json()).success)
          throw Error("Failed to register in Push Server");
      } catch {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
function Ph(t) {
  return nr.getBrowerCrypto().getRandomValues(new Uint8Array(t));
}
const os = 256, as = os, Fh = os, Ot = "AES-CBC", Uh = `SHA-${as}`, Vn = "HMAC", Dh = "encrypt", qh = "decrypt", Hh = "sign", $h = "verify";
function jh(t) {
  return t === Ot ? { length: as, name: Ot } : {
    hash: { name: Uh },
    name: Vn
  };
}
function Wh(t) {
  return t === Ot ? [Dh, qh] : [Hh, $h];
}
async function xi(t, e = Ot) {
  return nr.getSubtleCrypto().importKey("raw", t, jh(e), !0, Wh(e));
}
async function zh(t, e, r) {
  const n = nr.getSubtleCrypto(), o = await xi(e, Ot), i = await n.encrypt({
    iv: t,
    name: Ot
  }, o, r);
  return new Uint8Array(i);
}
async function Vh(t, e, r) {
  const n = nr.getSubtleCrypto(), o = await xi(e, Ot), i = await n.decrypt({
    iv: t,
    name: Ot
  }, o, r);
  return new Uint8Array(i);
}
async function Kh(t, e) {
  const r = nr.getSubtleCrypto(), n = await xi(t, Vn), o = await r.sign({
    length: Fh,
    name: Vn
  }, n, e);
  return new Uint8Array(o);
}
function Yh(t, e, r) {
  return zh(t, e, r);
}
function Jh(t, e, r) {
  return Vh(t, e, r);
}
async function ss(t, e) {
  return await Kh(t, e);
}
async function cs(t) {
  const e = (t || 256) / 8, r = Ph(e);
  return Uf(en(r));
}
async function ls(t, e) {
  const r = zt(t.data), n = zt(t.iv), o = zt(t.hmac), i = Wt(o, !1), l = Ya(r, n), s = await ss(e, l), d = Wt(s, !1);
  return Tt(i) === Tt(d);
}
async function Gh(t, e, r) {
  const n = Yt(jn(e)), o = r || await cs(128), i = Yt(jn(o)), l = Wt(i, !1), s = JSON.stringify(t), d = Rf(s), v = await Yh(i, n, d), m = Wt(v, !1), A = Ya(v, i), B = await ss(n, A), L = Wt(B, !1);
  return {
    data: m,
    hmac: L,
    iv: l
  };
}
async function Zh(t, e) {
  const r = Yt(jn(e));
  if (!r)
    throw new Error("Missing key: required for decryption");
  if (!await ls(t, r))
    return null;
  const o = zt(t.data), i = zt(t.iv), l = await Jh(i, r, o), s = kf(l);
  let d;
  try {
    d = JSON.parse(s);
  } catch {
    return null;
  }
  return d;
}
const Qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateKey: cs,
  verifyHmac: ls,
  encrypt: Gh,
  decrypt: Zh
}, Symbol.toStringTag, { value: "Module" }));
class Xh extends Lh {
  constructor(e, r) {
    super({
      cryptoLib: Qh,
      connectorOpts: e,
      pushServerOpts: r
    });
  }
}
const e0 = /* @__PURE__ */ ci(gf);
var xr = {}, t0 = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, us = {}, Bt = {}, r0 = {}.toString, Ci = Array.isArray || function(t) {
  return r0.call(t) == "[object Array]";
}, n0 = Ci;
function i0() {
  try {
    var t = new Uint8Array(1);
    return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
      return 42;
    } }, t.foo() === 42;
  } catch {
    return !1;
  }
}
we.TYPED_ARRAY_SUPPORT = i0();
var bo = we.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function we(t, e, r) {
  return !we.TYPED_ARRAY_SUPPORT && !(this instanceof we) ? new we(t, e, r) : typeof t == "number" ? fs(this, t) : f0(this, t, e, r);
}
we.TYPED_ARRAY_SUPPORT && (we.prototype.__proto__ = Uint8Array.prototype, we.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && we[Symbol.species] === we && Object.defineProperty(we, Symbol.species, {
  value: null,
  configurable: !0,
  enumerable: !1,
  writable: !1
}));
function Mi(t) {
  if (t >= bo)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + bo.toString(16) + " bytes");
  return t | 0;
}
function o0(t) {
  return t !== t;
}
function Jt(t, e) {
  var r;
  return we.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = we.prototype) : (r = t, r === null && (r = new we(e)), r.length = e), r;
}
function fs(t, e) {
  var r = Jt(t, e < 0 ? 0 : Mi(e) | 0);
  if (!we.TYPED_ARRAY_SUPPORT)
    for (var n = 0; n < e; ++n)
      r[n] = 0;
  return r;
}
function a0(t, e) {
  var r = ds(e) | 0, n = Jt(t, r), o = n.write(e);
  return o !== r && (n = n.slice(0, o)), n;
}
function Kn(t, e) {
  for (var r = e.length < 0 ? 0 : Mi(e.length) | 0, n = Jt(t, r), o = 0; o < r; o += 1)
    n[o] = e[o] & 255;
  return n;
}
function s0(t, e, r, n) {
  if (r < 0 || e.byteLength < r)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < r + (n || 0))
    throw new RangeError("'length' is out of bounds");
  var o;
  return r === void 0 && n === void 0 ? o = new Uint8Array(e) : n === void 0 ? o = new Uint8Array(e, r) : o = new Uint8Array(e, r, n), we.TYPED_ARRAY_SUPPORT ? o.__proto__ = we.prototype : o = Kn(t, o), o;
}
function c0(t, e) {
  if (we.isBuffer(e)) {
    var r = Mi(e.length) | 0, n = Jt(t, r);
    return n.length === 0 || e.copy(n, 0, 0, r), n;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || o0(e.length) ? Jt(t, 0) : Kn(t, e);
    if (e.type === "Buffer" && Array.isArray(e.data))
      return Kn(t, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function hs(t, e) {
  e = e || 1 / 0;
  for (var r, n = t.length, o = null, i = [], l = 0; l < n; ++l) {
    if (r = t.charCodeAt(l), r > 55295 && r < 57344) {
      if (!o) {
        if (r > 56319) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        } else if (l + 1 === n) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        o = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && i.push(239, 191, 189), o = r;
        continue;
      }
      r = (o - 55296 << 10 | r - 56320) + 65536;
    } else
      o && (e -= 3) > -1 && i.push(239, 191, 189);
    if (o = null, r < 128) {
      if ((e -= 1) < 0)
        break;
      i.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0)
        break;
      i.push(
        r >> 6 | 192,
        r & 63 | 128
      );
    } else if (r < 65536) {
      if ((e -= 3) < 0)
        break;
      i.push(
        r >> 12 | 224,
        r >> 6 & 63 | 128,
        r & 63 | 128
      );
    } else if (r < 1114112) {
      if ((e -= 4) < 0)
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
function ds(t) {
  if (we.isBuffer(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var e = t.length;
  return e === 0 ? 0 : hs(t).length;
}
function l0(t, e, r, n) {
  for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
    e[o + r] = t[o];
  return o;
}
function u0(t, e, r, n) {
  return l0(hs(e, t.length - r), t, r, n);
}
function f0(t, e, r, n) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? s0(t, e, r, n) : typeof e == "string" ? a0(t, e) : c0(t, e);
}
we.prototype.write = function(e, r, n) {
  r === void 0 ? (n = this.length, r = 0) : n === void 0 && typeof r == "string" ? (n = this.length, r = 0) : isFinite(r) && (r = r | 0, isFinite(n) ? n = n | 0 : n = void 0);
  var o = this.length - r;
  if ((n === void 0 || n > o) && (n = o), e.length > 0 && (n < 0 || r < 0) || r > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  return u0(this, e, r, n);
};
we.prototype.slice = function(e, r) {
  var n = this.length;
  e = ~~e, r = r === void 0 ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);
  var o;
  if (we.TYPED_ARRAY_SUPPORT)
    o = this.subarray(e, r), o.__proto__ = we.prototype;
  else {
    var i = r - e;
    o = new we(i, void 0);
    for (var l = 0; l < i; ++l)
      o[l] = this[l + e];
  }
  return o;
};
we.prototype.copy = function(e, r, n, o) {
  if (n || (n = 0), !o && o !== 0 && (o = this.length), r >= e.length && (r = e.length), r || (r = 0), o > 0 && o < n && (o = n), o === n || e.length === 0 || this.length === 0)
    return 0;
  if (r < 0)
    throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length)
    throw new RangeError("sourceStart out of bounds");
  if (o < 0)
    throw new RangeError("sourceEnd out of bounds");
  o > this.length && (o = this.length), e.length - r < o - n && (o = e.length - r + n);
  var i = o - n, l;
  if (this === e && n < r && r < o)
    for (l = i - 1; l >= 0; --l)
      e[l + r] = this[l + n];
  else if (i < 1e3 || !we.TYPED_ARRAY_SUPPORT)
    for (l = 0; l < i; ++l)
      e[l + r] = this[l + n];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(n, n + i),
      r
    );
  return i;
};
we.prototype.fill = function(e, r, n) {
  if (typeof e == "string") {
    if (typeof r == "string" ? (r = 0, n = this.length) : typeof n == "string" && (n = this.length), e.length === 1) {
      var o = e.charCodeAt(0);
      o < 256 && (e = o);
    }
  } else
    typeof e == "number" && (e = e & 255);
  if (r < 0 || this.length < r || this.length < n)
    throw new RangeError("Out of range index");
  if (n <= r)
    return this;
  r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
  var i;
  if (typeof e == "number")
    for (i = r; i < n; ++i)
      this[i] = e;
  else {
    var l = we.isBuffer(e) ? e : new we(e), s = l.length;
    for (i = 0; i < n - r; ++i)
      this[i + r] = l[i % s];
  }
  return this;
};
we.concat = function(e, r) {
  if (!n0(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return Jt(null, 0);
  var n;
  if (r === void 0)
    for (r = 0, n = 0; n < e.length; ++n)
      r += e[n].length;
  var o = fs(null, r), i = 0;
  for (n = 0; n < e.length; ++n) {
    var l = e[n];
    if (!we.isBuffer(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    l.copy(o, i), i += l.length;
  }
  return o;
};
we.byteLength = ds;
we.prototype._isBuffer = !0;
we.isBuffer = function(e) {
  return !!(e != null && e._isBuffer);
};
Bt.alloc = function(t) {
  var e = new we(t);
  return e.fill(0), e;
};
Bt.from = function(t) {
  return new we(t);
};
var et = {}, Ei, h0 = [
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
et.getSymbolSize = function(e) {
  if (!e)
    throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
et.getSymbolTotalCodewords = function(e) {
  return h0[e];
};
et.getBCHDigit = function(t) {
  for (var e = 0; t !== 0; )
    e++, t >>>= 1;
  return e;
};
et.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Ei = e;
};
et.isKanjiModeEnabled = function() {
  return typeof Ei < "u";
};
et.toSJIS = function(e) {
  return Ei(e);
};
var tn = {};
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
  t.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, t.from = function(n, o) {
    if (t.isValid(n))
      return n;
    try {
      return e(n);
    } catch {
      return o;
    }
  };
})(tn);
function ps() {
  this.buffer = [], this.length = 0;
}
ps.prototype = {
  get: function(t) {
    var e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (var r = 0; r < e; r++)
      this.putBit((t >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    var e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var d0 = ps, xo = Bt;
function Cr(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = xo.alloc(t * t), this.reservedBit = xo.alloc(t * t);
}
Cr.prototype.set = function(t, e, r, n) {
  var o = t * this.size + e;
  this.data[o] = r, n && (this.reservedBit[o] = !0);
};
Cr.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
Cr.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
};
Cr.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var p0 = Cr, gs = {};
(function(t) {
  var e = et.getSymbolSize;
  t.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    for (var o = Math.floor(n / 7) + 2, i = e(n), l = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2, s = [i - 7], d = 1; d < o - 1; d++)
      s[d] = s[d - 1] - l;
    return s.push(6), s.reverse();
  }, t.getPositions = function(n) {
    for (var o = [], i = t.getRowColCoords(n), l = i.length, s = 0; s < l; s++)
      for (var d = 0; d < l; d++)
        s === 0 && d === 0 || s === 0 && d === l - 1 || s === l - 1 && d === 0 || o.push([i[s], i[d]]);
    return o;
  };
})(gs);
var ms = {}, g0 = et.getSymbolSize, Co = 7;
ms.getPositions = function(e) {
  var r = g0(e);
  return [
    [0, 0],
    [r - Co, 0],
    [0, r - Co]
  ];
};
var vs = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  var e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }, t.from = function(o) {
    return t.isValid(o) ? parseInt(o, 10) : void 0;
  }, t.getPenaltyN1 = function(o) {
    for (var i = o.size, l = 0, s = 0, d = 0, v = null, m = null, A = 0; A < i; A++) {
      s = d = 0, v = m = null;
      for (var B = 0; B < i; B++) {
        var L = o.get(A, B);
        L === v ? s++ : (s >= 5 && (l += e.N1 + (s - 5)), v = L, s = 1), L = o.get(B, A), L === m ? d++ : (d >= 5 && (l += e.N1 + (d - 5)), m = L, d = 1);
      }
      s >= 5 && (l += e.N1 + (s - 5)), d >= 5 && (l += e.N1 + (d - 5));
    }
    return l;
  }, t.getPenaltyN2 = function(o) {
    for (var i = o.size, l = 0, s = 0; s < i - 1; s++)
      for (var d = 0; d < i - 1; d++) {
        var v = o.get(s, d) + o.get(s, d + 1) + o.get(s + 1, d) + o.get(s + 1, d + 1);
        (v === 4 || v === 0) && l++;
      }
    return l * e.N2;
  }, t.getPenaltyN3 = function(o) {
    for (var i = o.size, l = 0, s = 0, d = 0, v = 0; v < i; v++) {
      s = d = 0;
      for (var m = 0; m < i; m++)
        s = s << 1 & 2047 | o.get(v, m), m >= 10 && (s === 1488 || s === 93) && l++, d = d << 1 & 2047 | o.get(m, v), m >= 10 && (d === 1488 || d === 93) && l++;
    }
    return l * e.N3;
  }, t.getPenaltyN4 = function(o) {
    for (var i = 0, l = o.data.length, s = 0; s < l; s++)
      i += o.data[s];
    var d = Math.abs(Math.ceil(i * 100 / l / 5) - 10);
    return d * e.N4;
  };
  function r(n, o, i) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case t.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(o, i) {
    for (var l = i.size, s = 0; s < l; s++)
      for (var d = 0; d < l; d++)
        i.isReserved(d, s) || i.xor(d, s, r(o, d, s));
  }, t.getBestMask = function(o, i) {
    for (var l = Object.keys(t.Patterns).length, s = 0, d = 1 / 0, v = 0; v < l; v++) {
      i(v), t.applyMask(v, o);
      var m = t.getPenaltyN1(o) + t.getPenaltyN2(o) + t.getPenaltyN3(o) + t.getPenaltyN4(o);
      t.applyMask(v, o), m < d && (d = m, s = v);
    }
    return s;
  };
})(vs);
var rn = {}, kt = tn, Br = [
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
], Nr = [
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
rn.getBlocksCount = function(e, r) {
  switch (r) {
    case kt.L:
      return Br[(e - 1) * 4 + 0];
    case kt.M:
      return Br[(e - 1) * 4 + 1];
    case kt.Q:
      return Br[(e - 1) * 4 + 2];
    case kt.H:
      return Br[(e - 1) * 4 + 3];
    default:
      return;
  }
};
rn.getTotalCodewordsCount = function(e, r) {
  switch (r) {
    case kt.L:
      return Nr[(e - 1) * 4 + 0];
    case kt.M:
      return Nr[(e - 1) * 4 + 1];
    case kt.Q:
      return Nr[(e - 1) * 4 + 2];
    case kt.H:
      return Nr[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var _s = {}, nn = {}, ys = Bt, pr = ys.alloc(512), jr = ys.alloc(256);
(function() {
  for (var e = 1, r = 0; r < 255; r++)
    pr[r] = e, jr[e] = r, e <<= 1, e & 256 && (e ^= 285);
  for (r = 255; r < 512; r++)
    pr[r] = pr[r - 255];
})();
nn.log = function(e) {
  if (e < 1)
    throw new Error("log(" + e + ")");
  return jr[e];
};
nn.exp = function(e) {
  return pr[e];
};
nn.mul = function(e, r) {
  return e === 0 || r === 0 ? 0 : pr[jr[e] + jr[r]];
};
(function(t) {
  var e = Bt, r = nn;
  t.mul = function(o, i) {
    for (var l = e.alloc(o.length + i.length - 1), s = 0; s < o.length; s++)
      for (var d = 0; d < i.length; d++)
        l[s + d] ^= r.mul(o[s], i[d]);
    return l;
  }, t.mod = function(o, i) {
    for (var l = e.from(o); l.length - i.length >= 0; ) {
      for (var s = l[0], d = 0; d < i.length; d++)
        l[d] ^= r.mul(i[d], s);
      for (var v = 0; v < l.length && l[v] === 0; )
        v++;
      l = l.slice(v);
    }
    return l;
  }, t.generateECPolynomial = function(o) {
    for (var i = e.from([1]), l = 0; l < o; l++)
      i = t.mul(i, [1, r.exp(l)]);
    return i;
  };
})(_s);
var ws = {}, on = {};
on.byteLength = _0;
on.toByteArray = w0;
on.fromByteArray = C0;
var gt = [], tt = [], m0 = typeof Uint8Array < "u" ? Uint8Array : Array, Rn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var $t = 0, v0 = Rn.length; $t < v0; ++$t)
  gt[$t] = Rn[$t], tt[Rn.charCodeAt($t)] = $t;
tt["-".charCodeAt(0)] = 62;
tt["_".charCodeAt(0)] = 63;
function bs(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function _0(t) {
  var e = bs(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function y0(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function w0(t) {
  var e, r = bs(t), n = r[0], o = r[1], i = new m0(y0(t, n, o)), l = 0, s = o > 0 ? n - 4 : n, d;
  for (d = 0; d < s; d += 4)
    e = tt[t.charCodeAt(d)] << 18 | tt[t.charCodeAt(d + 1)] << 12 | tt[t.charCodeAt(d + 2)] << 6 | tt[t.charCodeAt(d + 3)], i[l++] = e >> 16 & 255, i[l++] = e >> 8 & 255, i[l++] = e & 255;
  return o === 2 && (e = tt[t.charCodeAt(d)] << 2 | tt[t.charCodeAt(d + 1)] >> 4, i[l++] = e & 255), o === 1 && (e = tt[t.charCodeAt(d)] << 10 | tt[t.charCodeAt(d + 1)] << 4 | tt[t.charCodeAt(d + 2)] >> 2, i[l++] = e >> 8 & 255, i[l++] = e & 255), i;
}
function b0(t) {
  return gt[t >> 18 & 63] + gt[t >> 12 & 63] + gt[t >> 6 & 63] + gt[t & 63];
}
function x0(t, e, r) {
  for (var n, o = [], i = e; i < r; i += 3)
    n = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (t[i + 2] & 255), o.push(b0(n));
  return o.join("");
}
function C0(t) {
  for (var e, r = t.length, n = r % 3, o = [], i = 16383, l = 0, s = r - n; l < s; l += i)
    o.push(x0(t, l, l + i > s ? s : l + i));
  return n === 1 ? (e = t[r - 1], o.push(
    gt[e >> 2] + gt[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], o.push(
    gt[e >> 10] + gt[e >> 4 & 63] + gt[e << 2 & 63] + "="
  )), o.join("");
}
var Si = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Si.read = function(t, e, r, n, o) {
  var i, l, s = o * 8 - n - 1, d = (1 << s) - 1, v = d >> 1, m = -7, A = r ? o - 1 : 0, B = r ? -1 : 1, L = t[e + A];
  for (A += B, i = L & (1 << -m) - 1, L >>= -m, m += s; m > 0; i = i * 256 + t[e + A], A += B, m -= 8)
    ;
  for (l = i & (1 << -m) - 1, i >>= -m, m += n; m > 0; l = l * 256 + t[e + A], A += B, m -= 8)
    ;
  if (i === 0)
    i = 1 - v;
  else {
    if (i === d)
      return l ? NaN : (L ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, n), i = i - v;
  }
  return (L ? -1 : 1) * l * Math.pow(2, i - n);
};
Si.write = function(t, e, r, n, o, i) {
  var l, s, d, v = i * 8 - o - 1, m = (1 << v) - 1, A = m >> 1, B = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, L = n ? 0 : i - 1, P = n ? 1 : -1, z = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, l = m) : (l = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -l)) < 1 && (l--, d *= 2), l + A >= 1 ? e += B / d : e += B * Math.pow(2, 1 - A), e * d >= 2 && (l++, d /= 2), l + A >= m ? (s = 0, l = m) : l + A >= 1 ? (s = (e * d - 1) * Math.pow(2, o), l = l + A) : (s = e * Math.pow(2, A - 1) * Math.pow(2, o), l = 0)); o >= 8; t[r + L] = s & 255, L += P, s /= 256, o -= 8)
    ;
  for (l = l << o | s, v += o; v > 0; t[r + L] = l & 255, L += P, l /= 256, v -= 8)
    ;
  t[r + L - P] |= z * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  var e = on, r = Si, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = s, t.SlowBuffer = R, t.INSPECT_MAX_BYTES = 50;
  var o = 2147483647;
  t.kMaxLength = o, s.TYPED_ARRAY_SUPPORT = i(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function i() {
    try {
      var w = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(w, u), w.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (!!s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (!!s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function l(w) {
    if (w > o)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
    var u = new Uint8Array(w);
    return Object.setPrototypeOf(u, s.prototype), u;
  }
  function s(w, u, f) {
    if (typeof w == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return A(w);
    }
    return d(w, u, f);
  }
  s.poolSize = 8192;
  function d(w, u, f) {
    if (typeof w == "string")
      return B(w, u);
    if (ArrayBuffer.isView(w))
      return P(w);
    if (w == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
      );
    if (he(w, ArrayBuffer) || w && he(w.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (he(w, SharedArrayBuffer) || w && he(w.buffer, SharedArrayBuffer)))
      return z(w, u, f);
    if (typeof w == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var C = w.valueOf && w.valueOf();
    if (C != null && C !== w)
      return s.from(C, u, f);
    var O = M(w);
    if (O)
      return O;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof w[Symbol.toPrimitive] == "function")
      return s.from(
        w[Symbol.toPrimitive]("string"),
        u,
        f
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof w
    );
  }
  s.from = function(w, u, f) {
    return d(w, u, f);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function v(w) {
    if (typeof w != "number")
      throw new TypeError('"size" argument must be of type number');
    if (w < 0)
      throw new RangeError('The value "' + w + '" is invalid for option "size"');
  }
  function m(w, u, f) {
    return v(w), w <= 0 ? l(w) : u !== void 0 ? typeof f == "string" ? l(w).fill(u, f) : l(w).fill(u) : l(w);
  }
  s.alloc = function(w, u, f) {
    return m(w, u, f);
  };
  function A(w) {
    return v(w), l(w < 0 ? 0 : I(w) | 0);
  }
  s.allocUnsafe = function(w) {
    return A(w);
  }, s.allocUnsafeSlow = function(w) {
    return A(w);
  };
  function B(w, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !s.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    var f = T(w, u) | 0, C = l(f), O = C.write(w, u);
    return O !== f && (C = C.slice(0, O)), C;
  }
  function L(w) {
    for (var u = w.length < 0 ? 0 : I(w.length) | 0, f = l(u), C = 0; C < u; C += 1)
      f[C] = w[C] & 255;
    return f;
  }
  function P(w) {
    if (he(w, Uint8Array)) {
      var u = new Uint8Array(w);
      return z(u.buffer, u.byteOffset, u.byteLength);
    }
    return L(w);
  }
  function z(w, u, f) {
    if (u < 0 || w.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (w.byteLength < u + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var C;
    return u === void 0 && f === void 0 ? C = new Uint8Array(w) : f === void 0 ? C = new Uint8Array(w, u) : C = new Uint8Array(w, u, f), Object.setPrototypeOf(C, s.prototype), C;
  }
  function M(w) {
    if (s.isBuffer(w)) {
      var u = I(w.length) | 0, f = l(u);
      return f.length === 0 || w.copy(f, 0, 0, u), f;
    }
    if (w.length !== void 0)
      return typeof w.length != "number" || te(w.length) ? l(0) : L(w);
    if (w.type === "Buffer" && Array.isArray(w.data))
      return L(w.data);
  }
  function I(w) {
    if (w >= o)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    return w | 0;
  }
  function R(w) {
    return +w != w && (w = 0), s.alloc(+w);
  }
  s.isBuffer = function(u) {
    return u != null && u._isBuffer === !0 && u !== s.prototype;
  }, s.compare = function(u, f) {
    if (he(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), he(f, Uint8Array) && (f = s.from(f, f.offset, f.byteLength)), !s.isBuffer(u) || !s.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === f)
      return 0;
    for (var C = u.length, O = f.length, $ = 0, J = Math.min(C, O); $ < J; ++$)
      if (u[$] !== f[$]) {
        C = u[$], O = f[$];
        break;
      }
    return C < O ? -1 : O < C ? 1 : 0;
  }, s.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
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
  }, s.concat = function(u, f) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return s.alloc(0);
    var C;
    if (f === void 0)
      for (f = 0, C = 0; C < u.length; ++C)
        f += u[C].length;
    var O = s.allocUnsafe(f), $ = 0;
    for (C = 0; C < u.length; ++C) {
      var J = u[C];
      if (he(J, Uint8Array))
        $ + J.length > O.length ? s.from(J).copy(O, $) : Uint8Array.prototype.set.call(
          O,
          J,
          $
        );
      else if (s.isBuffer(J))
        J.copy(O, $);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      $ += J.length;
    }
    return O;
  };
  function T(w, u) {
    if (s.isBuffer(w))
      return w.length;
    if (ArrayBuffer.isView(w) || he(w, ArrayBuffer))
      return w.byteLength;
    if (typeof w != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof w
      );
    var f = w.length, C = arguments.length > 2 && arguments[2] === !0;
    if (!C && f === 0)
      return 0;
    for (var O = !1; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return D(w).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return ee(w).length;
        default:
          if (O)
            return C ? -1 : D(w).length;
          u = ("" + u).toLowerCase(), O = !0;
      }
  }
  s.byteLength = T;
  function U(w, u, f) {
    var C = !1;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u))
      return "";
    for (w || (w = "utf8"); ; )
      switch (w) {
        case "hex":
          return c(this, u, f);
        case "utf8":
        case "utf-8":
          return y(this, u, f);
        case "ascii":
          return N(this, u, f);
        case "latin1":
        case "binary":
          return b(this, u, f);
        case "base64":
          return g(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _(this, u, f);
        default:
          if (C)
            throw new TypeError("Unknown encoding: " + w);
          w = (w + "").toLowerCase(), C = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function Y(w, u, f) {
    var C = w[u];
    w[u] = w[f], w[f] = C;
  }
  s.prototype.swap16 = function() {
    var u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var f = 0; f < u; f += 2)
      Y(this, f, f + 1);
    return this;
  }, s.prototype.swap32 = function() {
    var u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var f = 0; f < u; f += 4)
      Y(this, f, f + 3), Y(this, f + 1, f + 2);
    return this;
  }, s.prototype.swap64 = function() {
    var u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var f = 0; f < u; f += 8)
      Y(this, f, f + 7), Y(this, f + 1, f + 6), Y(this, f + 2, f + 5), Y(this, f + 3, f + 4);
    return this;
  }, s.prototype.toString = function() {
    var u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? y(this, 0, u) : U.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(u) {
    if (!s.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? !0 : s.compare(this, u) === 0;
  }, s.prototype.inspect = function() {
    var u = "", f = t.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
  }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(u, f, C, O, $) {
    if (he(u, Uint8Array) && (u = s.from(u, u.offset, u.byteLength)), !s.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (f === void 0 && (f = 0), C === void 0 && (C = u ? u.length : 0), O === void 0 && (O = 0), $ === void 0 && ($ = this.length), f < 0 || C > u.length || O < 0 || $ > this.length)
      throw new RangeError("out of range index");
    if (O >= $ && f >= C)
      return 0;
    if (O >= $)
      return -1;
    if (f >= C)
      return 1;
    if (f >>>= 0, C >>>= 0, O >>>= 0, $ >>>= 0, this === u)
      return 0;
    for (var J = $ - O, se = C - f, ue = Math.min(J, se), be = this.slice(O, $), ge = u.slice(f, C), fe = 0; fe < ue; ++fe)
      if (be[fe] !== ge[fe]) {
        J = be[fe], se = ge[fe];
        break;
      }
    return J < se ? -1 : se < J ? 1 : 0;
  };
  function Q(w, u, f, C, O) {
    if (w.length === 0)
      return -1;
    if (typeof f == "string" ? (C = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, te(f) && (f = O ? 0 : w.length - 1), f < 0 && (f = w.length + f), f >= w.length) {
      if (O)
        return -1;
      f = w.length - 1;
    } else if (f < 0)
      if (O)
        f = 0;
      else
        return -1;
    if (typeof u == "string" && (u = s.from(u, C)), s.isBuffer(u))
      return u.length === 0 ? -1 : ce(w, u, f, C, O);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? O ? Uint8Array.prototype.indexOf.call(w, u, f) : Uint8Array.prototype.lastIndexOf.call(w, u, f) : ce(w, [u], f, C, O);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ce(w, u, f, C, O) {
    var $ = 1, J = w.length, se = u.length;
    if (C !== void 0 && (C = String(C).toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
      if (w.length < 2 || u.length < 2)
        return -1;
      $ = 2, J /= 2, se /= 2, f /= 2;
    }
    function ue(Ce, Me) {
      return $ === 1 ? Ce[Me] : Ce.readUInt16BE(Me * $);
    }
    var be;
    if (O) {
      var ge = -1;
      for (be = f; be < J; be++)
        if (ue(w, be) === ue(u, ge === -1 ? 0 : be - ge)) {
          if (ge === -1 && (ge = be), be - ge + 1 === se)
            return ge * $;
        } else
          ge !== -1 && (be -= be - ge), ge = -1;
    } else
      for (f + se > J && (f = J - se), be = f; be >= 0; be--) {
        for (var fe = !0, Ge = 0; Ge < se; Ge++)
          if (ue(w, be + Ge) !== ue(u, Ge)) {
            fe = !1;
            break;
          }
        if (fe)
          return be;
      }
    return -1;
  }
  s.prototype.includes = function(u, f, C) {
    return this.indexOf(u, f, C) !== -1;
  }, s.prototype.indexOf = function(u, f, C) {
    return Q(this, u, f, C, !0);
  }, s.prototype.lastIndexOf = function(u, f, C) {
    return Q(this, u, f, C, !1);
  };
  function oe(w, u, f, C) {
    f = Number(f) || 0;
    var O = w.length - f;
    C ? (C = Number(C), C > O && (C = O)) : C = O;
    var $ = u.length;
    C > $ / 2 && (C = $ / 2);
    for (var J = 0; J < C; ++J) {
      var se = parseInt(u.substr(J * 2, 2), 16);
      if (te(se))
        return J;
      w[f + J] = se;
    }
    return J;
  }
  function pe(w, u, f, C) {
    return Z(D(u, w.length - f), w, f, C);
  }
  function E(w, u, f, C) {
    return Z(K(u), w, f, C);
  }
  function a(w, u, f, C) {
    return Z(ee(u), w, f, C);
  }
  function h(w, u, f, C) {
    return Z(ae(u, w.length - f), w, f, C);
  }
  s.prototype.write = function(u, f, C, O) {
    if (f === void 0)
      O = "utf8", C = this.length, f = 0;
    else if (C === void 0 && typeof f == "string")
      O = f, C = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(C) ? (C = C >>> 0, O === void 0 && (O = "utf8")) : (O = C, C = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var $ = this.length - f;
    if ((C === void 0 || C > $) && (C = $), u.length > 0 && (C < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    O || (O = "utf8");
    for (var J = !1; ; )
      switch (O) {
        case "hex":
          return oe(this, u, f, C);
        case "utf8":
        case "utf-8":
          return pe(this, u, f, C);
        case "ascii":
        case "latin1":
        case "binary":
          return E(this, u, f, C);
        case "base64":
          return a(this, u, f, C);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h(this, u, f, C);
        default:
          if (J)
            throw new TypeError("Unknown encoding: " + O);
          O = ("" + O).toLowerCase(), J = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function g(w, u, f) {
    return u === 0 && f === w.length ? e.fromByteArray(w) : e.fromByteArray(w.slice(u, f));
  }
  function y(w, u, f) {
    f = Math.min(w.length, f);
    for (var C = [], O = u; O < f; ) {
      var $ = w[O], J = null, se = $ > 239 ? 4 : $ > 223 ? 3 : $ > 191 ? 2 : 1;
      if (O + se <= f) {
        var ue, be, ge, fe;
        switch (se) {
          case 1:
            $ < 128 && (J = $);
            break;
          case 2:
            ue = w[O + 1], (ue & 192) === 128 && (fe = ($ & 31) << 6 | ue & 63, fe > 127 && (J = fe));
            break;
          case 3:
            ue = w[O + 1], be = w[O + 2], (ue & 192) === 128 && (be & 192) === 128 && (fe = ($ & 15) << 12 | (ue & 63) << 6 | be & 63, fe > 2047 && (fe < 55296 || fe > 57343) && (J = fe));
            break;
          case 4:
            ue = w[O + 1], be = w[O + 2], ge = w[O + 3], (ue & 192) === 128 && (be & 192) === 128 && (ge & 192) === 128 && (fe = ($ & 15) << 18 | (ue & 63) << 12 | (be & 63) << 6 | ge & 63, fe > 65535 && fe < 1114112 && (J = fe));
        }
      }
      J === null ? (J = 65533, se = 1) : J > 65535 && (J -= 65536, C.push(J >>> 10 & 1023 | 55296), J = 56320 | J & 1023), C.push(J), O += se;
    }
    return k(C);
  }
  var x = 4096;
  function k(w) {
    var u = w.length;
    if (u <= x)
      return String.fromCharCode.apply(String, w);
    for (var f = "", C = 0; C < u; )
      f += String.fromCharCode.apply(
        String,
        w.slice(C, C += x)
      );
    return f;
  }
  function N(w, u, f) {
    var C = "";
    f = Math.min(w.length, f);
    for (var O = u; O < f; ++O)
      C += String.fromCharCode(w[O] & 127);
    return C;
  }
  function b(w, u, f) {
    var C = "";
    f = Math.min(w.length, f);
    for (var O = u; O < f; ++O)
      C += String.fromCharCode(w[O]);
    return C;
  }
  function c(w, u, f) {
    var C = w.length;
    (!u || u < 0) && (u = 0), (!f || f < 0 || f > C) && (f = C);
    for (var O = "", $ = u; $ < f; ++$)
      O += le[w[$]];
    return O;
  }
  function _(w, u, f) {
    for (var C = w.slice(u, f), O = "", $ = 0; $ < C.length - 1; $ += 2)
      O += String.fromCharCode(C[$] + C[$ + 1] * 256);
    return O;
  }
  s.prototype.slice = function(u, f) {
    var C = this.length;
    u = ~~u, f = f === void 0 ? C : ~~f, u < 0 ? (u += C, u < 0 && (u = 0)) : u > C && (u = C), f < 0 ? (f += C, f < 0 && (f = 0)) : f > C && (f = C), f < u && (f = u);
    var O = this.subarray(u, f);
    return Object.setPrototypeOf(O, s.prototype), O;
  };
  function H(w, u, f) {
    if (w % 1 !== 0 || w < 0)
      throw new RangeError("offset is not uint");
    if (w + u > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || H(u, f, this.length);
    for (var O = this[u], $ = 1, J = 0; ++J < f && ($ *= 256); )
      O += this[u + J] * $;
    return O;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || H(u, f, this.length);
    for (var O = this[u + --f], $ = 1; f > 0 && ($ *= 256); )
      O += this[u + --f] * $;
    return O;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(u, f) {
    return u = u >>> 0, f || H(u, 1, this.length), this[u];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(u, f) {
    return u = u >>> 0, f || H(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(u, f) {
    return u = u >>> 0, f || H(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(u, f) {
    return u = u >>> 0, f || H(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(u, f) {
    return u = u >>> 0, f || H(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, s.prototype.readIntLE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || H(u, f, this.length);
    for (var O = this[u], $ = 1, J = 0; ++J < f && ($ *= 256); )
      O += this[u + J] * $;
    return $ *= 128, O >= $ && (O -= Math.pow(2, 8 * f)), O;
  }, s.prototype.readIntBE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || H(u, f, this.length);
    for (var O = f, $ = 1, J = this[u + --O]; O > 0 && ($ *= 256); )
      J += this[u + --O] * $;
    return $ *= 128, J >= $ && (J -= Math.pow(2, 8 * f)), J;
  }, s.prototype.readInt8 = function(u, f) {
    return u = u >>> 0, f || H(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, s.prototype.readInt16LE = function(u, f) {
    u = u >>> 0, f || H(u, 2, this.length);
    var C = this[u] | this[u + 1] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, s.prototype.readInt16BE = function(u, f) {
    u = u >>> 0, f || H(u, 2, this.length);
    var C = this[u + 1] | this[u] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, s.prototype.readInt32LE = function(u, f) {
    return u = u >>> 0, f || H(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, s.prototype.readInt32BE = function(u, f) {
    return u = u >>> 0, f || H(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, s.prototype.readFloatLE = function(u, f) {
    return u = u >>> 0, f || H(u, 4, this.length), r.read(this, u, !0, 23, 4);
  }, s.prototype.readFloatBE = function(u, f) {
    return u = u >>> 0, f || H(u, 4, this.length), r.read(this, u, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(u, f) {
    return u = u >>> 0, f || H(u, 8, this.length), r.read(this, u, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(u, f) {
    return u = u >>> 0, f || H(u, 8, this.length), r.read(this, u, !1, 52, 8);
  };
  function q(w, u, f, C, O, $) {
    if (!s.isBuffer(w))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > O || u < $)
      throw new RangeError('"value" argument is out of bounds');
    if (f + C > w.length)
      throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(u, f, C, O) {
    if (u = +u, f = f >>> 0, C = C >>> 0, !O) {
      var $ = Math.pow(2, 8 * C) - 1;
      q(this, u, f, C, $, 0);
    }
    var J = 1, se = 0;
    for (this[f] = u & 255; ++se < C && (J *= 256); )
      this[f + se] = u / J & 255;
    return f + C;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(u, f, C, O) {
    if (u = +u, f = f >>> 0, C = C >>> 0, !O) {
      var $ = Math.pow(2, 8 * C) - 1;
      q(this, u, f, C, $, 0);
    }
    var J = C - 1, se = 1;
    for (this[f + J] = u & 255; --J >= 0 && (se *= 256); )
      this[f + J] = u / se & 255;
    return f + C;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  }, s.prototype.writeIntLE = function(u, f, C, O) {
    if (u = +u, f = f >>> 0, !O) {
      var $ = Math.pow(2, 8 * C - 1);
      q(this, u, f, C, $ - 1, -$);
    }
    var J = 0, se = 1, ue = 0;
    for (this[f] = u & 255; ++J < C && (se *= 256); )
      u < 0 && ue === 0 && this[f + J - 1] !== 0 && (ue = 1), this[f + J] = (u / se >> 0) - ue & 255;
    return f + C;
  }, s.prototype.writeIntBE = function(u, f, C, O) {
    if (u = +u, f = f >>> 0, !O) {
      var $ = Math.pow(2, 8 * C - 1);
      q(this, u, f, C, $ - 1, -$);
    }
    var J = C - 1, se = 1, ue = 0;
    for (this[f + J] = u & 255; --J >= 0 && (se *= 256); )
      u < 0 && ue === 0 && this[f + J + 1] !== 0 && (ue = 1), this[f + J] = (u / se >> 0) - ue & 255;
    return f + C;
  }, s.prototype.writeInt8 = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
  }, s.prototype.writeInt16LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, s.prototype.writeInt16BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, s.prototype.writeInt32LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
  }, s.prototype.writeInt32BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || q(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  };
  function X(w, u, f, C, O, $) {
    if (f + C > w.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function re(w, u, f, C, O) {
    return u = +u, f = f >>> 0, O || X(w, u, f, 4), r.write(w, u, f, C, 23, 4), f + 4;
  }
  s.prototype.writeFloatLE = function(u, f, C) {
    return re(this, u, f, !0, C);
  }, s.prototype.writeFloatBE = function(u, f, C) {
    return re(this, u, f, !1, C);
  };
  function p(w, u, f, C, O) {
    return u = +u, f = f >>> 0, O || X(w, u, f, 8), r.write(w, u, f, C, 52, 8), f + 8;
  }
  s.prototype.writeDoubleLE = function(u, f, C) {
    return p(this, u, f, !0, C);
  }, s.prototype.writeDoubleBE = function(u, f, C) {
    return p(this, u, f, !1, C);
  }, s.prototype.copy = function(u, f, C, O) {
    if (!s.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (C || (C = 0), !O && O !== 0 && (O = this.length), f >= u.length && (f = u.length), f || (f = 0), O > 0 && O < C && (O = C), O === C || u.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (C < 0 || C >= this.length)
      throw new RangeError("Index out of range");
    if (O < 0)
      throw new RangeError("sourceEnd out of bounds");
    O > this.length && (O = this.length), u.length - f < O - C && (O = u.length - f + C);
    var $ = O - C;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, C, O) : Uint8Array.prototype.set.call(
      u,
      this.subarray(C, O),
      f
    ), $;
  }, s.prototype.fill = function(u, f, C, O) {
    if (typeof u == "string") {
      if (typeof f == "string" ? (O = f, f = 0, C = this.length) : typeof C == "string" && (O = C, C = this.length), O !== void 0 && typeof O != "string")
        throw new TypeError("encoding must be a string");
      if (typeof O == "string" && !s.isEncoding(O))
        throw new TypeError("Unknown encoding: " + O);
      if (u.length === 1) {
        var $ = u.charCodeAt(0);
        (O === "utf8" && $ < 128 || O === "latin1") && (u = $);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (f < 0 || this.length < f || this.length < C)
      throw new RangeError("Out of range index");
    if (C <= f)
      return this;
    f = f >>> 0, C = C === void 0 ? this.length : C >>> 0, u || (u = 0);
    var J;
    if (typeof u == "number")
      for (J = f; J < C; ++J)
        this[J] = u;
    else {
      var se = s.isBuffer(u) ? u : s.from(u, O), ue = se.length;
      if (ue === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (J = 0; J < C - f; ++J)
        this[J + f] = se[J % ue];
    }
    return this;
  };
  var F = /[^+/0-9A-Za-z-_]/g;
  function W(w) {
    if (w = w.split("=")[0], w = w.trim().replace(F, ""), w.length < 2)
      return "";
    for (; w.length % 4 !== 0; )
      w = w + "=";
    return w;
  }
  function D(w, u) {
    u = u || 1 / 0;
    for (var f, C = w.length, O = null, $ = [], J = 0; J < C; ++J) {
      if (f = w.charCodeAt(J), f > 55295 && f < 57344) {
        if (!O) {
          if (f > 56319) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          } else if (J + 1 === C) {
            (u -= 3) > -1 && $.push(239, 191, 189);
            continue;
          }
          O = f;
          continue;
        }
        if (f < 56320) {
          (u -= 3) > -1 && $.push(239, 191, 189), O = f;
          continue;
        }
        f = (O - 55296 << 10 | f - 56320) + 65536;
      } else
        O && (u -= 3) > -1 && $.push(239, 191, 189);
      if (O = null, f < 128) {
        if ((u -= 1) < 0)
          break;
        $.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0)
          break;
        $.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((u -= 3) < 0)
          break;
        $.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((u -= 4) < 0)
          break;
        $.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return $;
  }
  function K(w) {
    for (var u = [], f = 0; f < w.length; ++f)
      u.push(w.charCodeAt(f) & 255);
    return u;
  }
  function ae(w, u) {
    for (var f, C, O, $ = [], J = 0; J < w.length && !((u -= 2) < 0); ++J)
      f = w.charCodeAt(J), C = f >> 8, O = f % 256, $.push(O), $.push(C);
    return $;
  }
  function ee(w) {
    return e.toByteArray(W(w));
  }
  function Z(w, u, f, C) {
    for (var O = 0; O < C && !(O + f >= u.length || O >= w.length); ++O)
      u[O + f] = w[O];
    return O;
  }
  function he(w, u) {
    return w instanceof u || w != null && w.constructor != null && w.constructor.name != null && w.constructor.name === u.name;
  }
  function te(w) {
    return w !== w;
  }
  var le = function() {
    for (var w = "0123456789abcdef", u = new Array(256), f = 0; f < 16; ++f)
      for (var C = f * 16, O = 0; O < 16; ++O)
        u[C + O] = w[f] + w[O];
    return u;
  }();
})(ws);
var Mo = Bt, xs = _s, M0 = ws.Buffer;
function ki(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
ki.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = xs.generateECPolynomial(this.degree);
};
ki.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  var r = Mo.alloc(this.degree), n = M0.concat([e, r], e.length + this.degree), o = xs.mod(n, this.genPoly), i = this.degree - o.length;
  if (i > 0) {
    var l = Mo.alloc(this.degree);
    return o.copy(l, i), l;
  }
  return o;
};
var E0 = ki, Cs = {}, Nt = {}, Ai = {};
Ai.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var mt = {}, Ms = "[0-9]+", S0 = "[A-Z $%*+\\-./:]+", vr = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
vr = vr.replace(/u/g, "\\u");
var k0 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + vr + `)(?:.|[\r
]))+`;
mt.KANJI = new RegExp(vr, "g");
mt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
mt.BYTE = new RegExp(k0, "g");
mt.NUMERIC = new RegExp(Ms, "g");
mt.ALPHANUMERIC = new RegExp(S0, "g");
var A0 = new RegExp("^" + vr + "$"), R0 = new RegExp("^" + Ms + "$"), I0 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
mt.testKanji = function(e) {
  return A0.test(e);
};
mt.testNumeric = function(e) {
  return R0.test(e);
};
mt.testAlphanumeric = function(e) {
  return I0.test(e);
};
(function(t) {
  var e = Ai, r = mt;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(i, l) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!e.isValid(l))
      throw new Error("Invalid version: " + l);
    return l >= 1 && l < 10 ? i.ccBits[0] : l < 27 ? i.ccBits[1] : i.ccBits[2];
  }, t.getBestModeForData = function(i) {
    return r.testNumeric(i) ? t.NUMERIC : r.testAlphanumeric(i) ? t.ALPHANUMERIC : r.testKanji(i) ? t.KANJI : t.BYTE;
  }, t.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function n(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    var i = o.toLowerCase();
    switch (i) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function(i, l) {
    if (t.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return l;
    }
  };
})(Nt);
(function(t) {
  var e = et, r = rn, n = tn, o = Nt, i = Ai, l = Ci, s = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, d = e.getBCHDigit(s);
  function v(L, P, z) {
    for (var M = 1; M <= 40; M++)
      if (P <= t.getCapacity(M, z, L))
        return M;
  }
  function m(L, P) {
    return o.getCharCountIndicator(L, P) + 4;
  }
  function A(L, P) {
    var z = 0;
    return L.forEach(function(M) {
      var I = m(M.mode, P);
      z += I + M.getBitsLength();
    }), z;
  }
  function B(L, P) {
    for (var z = 1; z <= 40; z++) {
      var M = A(L, z);
      if (M <= t.getCapacity(z, P, o.MIXED))
        return z;
    }
  }
  t.from = function(P, z) {
    return i.isValid(P) ? parseInt(P, 10) : z;
  }, t.getCapacity = function(P, z, M) {
    if (!i.isValid(P))
      throw new Error("Invalid QR Code version");
    typeof M > "u" && (M = o.BYTE);
    var I = e.getSymbolTotalCodewords(P), R = r.getTotalCodewordsCount(P, z), T = (I - R) * 8;
    if (M === o.MIXED)
      return T;
    var U = T - m(M, P);
    switch (M) {
      case o.NUMERIC:
        return Math.floor(U / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(U / 11 * 2);
      case o.KANJI:
        return Math.floor(U / 13);
      case o.BYTE:
      default:
        return Math.floor(U / 8);
    }
  }, t.getBestVersionForData = function(P, z) {
    var M, I = n.from(z, n.M);
    if (l(P)) {
      if (P.length > 1)
        return B(P, I);
      if (P.length === 0)
        return 1;
      M = P[0];
    } else
      M = P;
    return v(M.mode, M.getLength(), I);
  }, t.getEncodedBits = function(P) {
    if (!i.isValid(P) || P < 7)
      throw new Error("Invalid QR Code version");
    for (var z = P << 12; e.getBCHDigit(z) - d >= 0; )
      z ^= s << e.getBCHDigit(z) - d;
    return P << 12 | z;
  };
})(Cs);
var Es = {}, Yn = et, Ss = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, T0 = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, Eo = Yn.getBCHDigit(Ss);
Es.getEncodedBits = function(e, r) {
  for (var n = e.bit << 3 | r, o = n << 10; Yn.getBCHDigit(o) - Eo >= 0; )
    o ^= Ss << Yn.getBCHDigit(o) - Eo;
  return (n << 10 | o) ^ T0;
};
var ks = {}, O0 = Nt;
function Gt(t) {
  this.mode = O0.NUMERIC, this.data = t.toString();
}
Gt.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
Gt.prototype.getLength = function() {
  return this.data.length;
};
Gt.prototype.getBitsLength = function() {
  return Gt.getBitsLength(this.data.length);
};
Gt.prototype.write = function(e) {
  var r, n, o;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    n = this.data.substr(r, 3), o = parseInt(n, 10), e.put(o, 10);
  var i = this.data.length - r;
  i > 0 && (n = this.data.substr(r), o = parseInt(n, 10), e.put(o, i * 3 + 1));
};
var B0 = Gt, N0 = Nt, In = [
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
function Zt(t) {
  this.mode = N0.ALPHANUMERIC, this.data = t;
}
Zt.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
Zt.prototype.getLength = function() {
  return this.data.length;
};
Zt.prototype.getBitsLength = function() {
  return Zt.getBitsLength(this.data.length);
};
Zt.prototype.write = function(e) {
  var r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    var n = In.indexOf(this.data[r]) * 45;
    n += In.indexOf(this.data[r + 1]), e.put(n, 11);
  }
  this.data.length % 2 && e.put(In.indexOf(this.data[r]), 6);
};
var L0 = Zt, P0 = Bt, F0 = Nt;
function Qt(t) {
  this.mode = F0.BYTE, this.data = P0.from(t);
}
Qt.getBitsLength = function(e) {
  return e * 8;
};
Qt.prototype.getLength = function() {
  return this.data.length;
};
Qt.prototype.getBitsLength = function() {
  return Qt.getBitsLength(this.data.length);
};
Qt.prototype.write = function(t) {
  for (var e = 0, r = this.data.length; e < r; e++)
    t.put(this.data[e], 8);
};
var U0 = Qt, D0 = Nt, q0 = et;
function Xt(t) {
  this.mode = D0.KANJI, this.data = t;
}
Xt.getBitsLength = function(e) {
  return e * 13;
};
Xt.prototype.getLength = function() {
  return this.data.length;
};
Xt.prototype.getBitsLength = function() {
  return Xt.getBitsLength(this.data.length);
};
Xt.prototype.write = function(t) {
  var e;
  for (e = 0; e < this.data.length; e++) {
    var r = q0.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
  }
};
var H0 = Xt, As = { exports: {} };
(function(t) {
  var e = {
    single_source_shortest_paths: function(r, n, o) {
      var i = {}, l = {};
      l[n] = 0;
      var s = e.PriorityQueue.make();
      s.push(n, 0);
      for (var d, v, m, A, B, L, P, z, M; !s.empty(); ) {
        d = s.pop(), v = d.value, A = d.cost, B = r[v] || {};
        for (m in B)
          B.hasOwnProperty(m) && (L = B[m], P = A + L, z = l[m], M = typeof l[m] > "u", (M || z > P) && (l[m] = P, s.push(m, P), i[m] = v));
      }
      if (typeof o < "u" && typeof l[o] > "u") {
        var I = ["Could not find a path from ", n, " to ", o, "."].join("");
        throw new Error(I);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(r, n) {
      for (var o = [], i = n; i; )
        o.push(i), r[i], i = r[i];
      return o.reverse(), o;
    },
    find_path: function(r, n, o) {
      var i = e.single_source_shortest_paths(r, n, o);
      return e.extract_shortest_path_from_predecessor_list(
        i,
        o
      );
    },
    PriorityQueue: {
      make: function(r) {
        var n = e.PriorityQueue, o = {}, i;
        r = r || {};
        for (i in n)
          n.hasOwnProperty(i) && (o[i] = n[i]);
        return o.queue = [], o.sorter = r.sorter || n.default_sorter, o;
      },
      default_sorter: function(r, n) {
        return r.cost - n.cost;
      },
      push: function(r, n) {
        var o = { value: r, cost: n };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  t.exports = e;
})(As);
(function(t) {
  var e = Nt, r = B0, n = L0, o = U0, i = H0, l = mt, s = et, d = As.exports;
  function v(I) {
    return unescape(encodeURIComponent(I)).length;
  }
  function m(I, R, T) {
    for (var U = [], Y; (Y = I.exec(T)) !== null; )
      U.push({
        data: Y[0],
        index: Y.index,
        mode: R,
        length: Y[0].length
      });
    return U;
  }
  function A(I) {
    var R = m(l.NUMERIC, e.NUMERIC, I), T = m(l.ALPHANUMERIC, e.ALPHANUMERIC, I), U, Y;
    s.isKanjiModeEnabled() ? (U = m(l.BYTE, e.BYTE, I), Y = m(l.KANJI, e.KANJI, I)) : (U = m(l.BYTE_KANJI, e.BYTE, I), Y = []);
    var Q = R.concat(T, U, Y);
    return Q.sort(function(ce, oe) {
      return ce.index - oe.index;
    }).map(function(ce) {
      return {
        data: ce.data,
        mode: ce.mode,
        length: ce.length
      };
    });
  }
  function B(I, R) {
    switch (R) {
      case e.NUMERIC:
        return r.getBitsLength(I);
      case e.ALPHANUMERIC:
        return n.getBitsLength(I);
      case e.KANJI:
        return i.getBitsLength(I);
      case e.BYTE:
        return o.getBitsLength(I);
    }
  }
  function L(I) {
    return I.reduce(function(R, T) {
      var U = R.length - 1 >= 0 ? R[R.length - 1] : null;
      return U && U.mode === T.mode ? (R[R.length - 1].data += T.data, R) : (R.push(T), R);
    }, []);
  }
  function P(I) {
    for (var R = [], T = 0; T < I.length; T++) {
      var U = I[T];
      switch (U.mode) {
        case e.NUMERIC:
          R.push([
            U,
            { data: U.data, mode: e.ALPHANUMERIC, length: U.length },
            { data: U.data, mode: e.BYTE, length: U.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          R.push([
            U,
            { data: U.data, mode: e.BYTE, length: U.length }
          ]);
          break;
        case e.KANJI:
          R.push([
            U,
            { data: U.data, mode: e.BYTE, length: v(U.data) }
          ]);
          break;
        case e.BYTE:
          R.push([
            { data: U.data, mode: e.BYTE, length: v(U.data) }
          ]);
      }
    }
    return R;
  }
  function z(I, R) {
    for (var T = {}, U = { start: {} }, Y = ["start"], Q = 0; Q < I.length; Q++) {
      for (var ce = I[Q], oe = [], pe = 0; pe < ce.length; pe++) {
        var E = ce[pe], a = "" + Q + pe;
        oe.push(a), T[a] = { node: E, lastCount: 0 }, U[a] = {};
        for (var h = 0; h < Y.length; h++) {
          var g = Y[h];
          T[g] && T[g].node.mode === E.mode ? (U[g][a] = B(T[g].lastCount + E.length, E.mode) - B(T[g].lastCount, E.mode), T[g].lastCount += E.length) : (T[g] && (T[g].lastCount = E.length), U[g][a] = B(E.length, E.mode) + 4 + e.getCharCountIndicator(E.mode, R));
        }
      }
      Y = oe;
    }
    for (h = 0; h < Y.length; h++)
      U[Y[h]].end = 0;
    return { map: U, table: T };
  }
  function M(I, R) {
    var T, U = e.getBestModeForData(I);
    if (T = e.from(R, U), T !== e.BYTE && T.bit < U.bit)
      throw new Error('"' + I + '" cannot be encoded with mode ' + e.toString(T) + `.
 Suggested mode is: ` + e.toString(U));
    switch (T === e.KANJI && !s.isKanjiModeEnabled() && (T = e.BYTE), T) {
      case e.NUMERIC:
        return new r(I);
      case e.ALPHANUMERIC:
        return new n(I);
      case e.KANJI:
        return new i(I);
      case e.BYTE:
        return new o(I);
    }
  }
  t.fromArray = function(R) {
    return R.reduce(function(T, U) {
      return typeof U == "string" ? T.push(M(U, null)) : U.data && T.push(M(U.data, U.mode)), T;
    }, []);
  }, t.fromString = function(R, T) {
    for (var U = A(R, s.isKanjiModeEnabled()), Y = P(U), Q = z(Y, T), ce = d.find_path(Q.map, "start", "end"), oe = [], pe = 1; pe < ce.length - 1; pe++)
      oe.push(Q.table[ce[pe]].node);
    return t.fromArray(L(oe));
  }, t.rawSplit = function(R) {
    return t.fromArray(
      A(R, s.isKanjiModeEnabled())
    );
  };
})(ks);
var So = Bt, an = et, Tn = tn, $0 = d0, j0 = p0, W0 = gs, z0 = ms, Jn = vs, Gn = rn, V0 = E0, Wr = Cs, K0 = Es, Y0 = Nt, On = ks, J0 = Ci;
function G0(t, e) {
  for (var r = t.size, n = z0.getPositions(e), o = 0; o < n.length; o++)
    for (var i = n[o][0], l = n[o][1], s = -1; s <= 7; s++)
      if (!(i + s <= -1 || r <= i + s))
        for (var d = -1; d <= 7; d++)
          l + d <= -1 || r <= l + d || (s >= 0 && s <= 6 && (d === 0 || d === 6) || d >= 0 && d <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && d >= 2 && d <= 4 ? t.set(i + s, l + d, !0, !0) : t.set(i + s, l + d, !1, !0));
}
function Z0(t) {
  for (var e = t.size, r = 8; r < e - 8; r++) {
    var n = r % 2 === 0;
    t.set(r, 6, n, !0), t.set(6, r, n, !0);
  }
}
function Q0(t, e) {
  for (var r = W0.getPositions(e), n = 0; n < r.length; n++)
    for (var o = r[n][0], i = r[n][1], l = -2; l <= 2; l++)
      for (var s = -2; s <= 2; s++)
        l === -2 || l === 2 || s === -2 || s === 2 || l === 0 && s === 0 ? t.set(o + l, i + s, !0, !0) : t.set(o + l, i + s, !1, !0);
}
function X0(t, e) {
  for (var r = t.size, n = Wr.getEncodedBits(e), o, i, l, s = 0; s < 18; s++)
    o = Math.floor(s / 3), i = s % 3 + r - 8 - 3, l = (n >> s & 1) === 1, t.set(o, i, l, !0), t.set(i, o, l, !0);
}
function Bn(t, e, r) {
  var n = t.size, o = K0.getEncodedBits(e, r), i, l;
  for (i = 0; i < 15; i++)
    l = (o >> i & 1) === 1, i < 6 ? t.set(i, 8, l, !0) : i < 8 ? t.set(i + 1, 8, l, !0) : t.set(n - 15 + i, 8, l, !0), i < 8 ? t.set(8, n - i - 1, l, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, l, !0) : t.set(8, 15 - i - 1, l, !0);
  t.set(n - 8, 8, 1, !0);
}
function ed(t, e) {
  for (var r = t.size, n = -1, o = r - 1, i = 7, l = 0, s = r - 1; s > 0; s -= 2)
    for (s === 6 && s--; ; ) {
      for (var d = 0; d < 2; d++)
        if (!t.isReserved(o, s - d)) {
          var v = !1;
          l < e.length && (v = (e[l] >>> i & 1) === 1), t.set(o, s - d, v), i--, i === -1 && (l++, i = 7);
        }
      if (o += n, o < 0 || r <= o) {
        o -= n, n = -n;
        break;
      }
    }
}
function td(t, e, r) {
  var n = new $0();
  r.forEach(function(v) {
    n.put(v.mode.bit, 4), n.put(v.getLength(), Y0.getCharCountIndicator(v.mode, t)), v.write(n);
  });
  var o = an.getSymbolTotalCodewords(t), i = Gn.getTotalCodewordsCount(t, e), l = (o - i) * 8;
  for (n.getLengthInBits() + 4 <= l && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  for (var s = (l - n.getLengthInBits()) / 8, d = 0; d < s; d++)
    n.put(d % 2 ? 17 : 236, 8);
  return rd(n, t, e);
}
function rd(t, e, r) {
  for (var n = an.getSymbolTotalCodewords(e), o = Gn.getTotalCodewordsCount(e, r), i = n - o, l = Gn.getBlocksCount(e, r), s = n % l, d = l - s, v = Math.floor(n / l), m = Math.floor(i / l), A = m + 1, B = v - m, L = new V0(B), P = 0, z = new Array(l), M = new Array(l), I = 0, R = So.from(t.buffer), T = 0; T < l; T++) {
    var U = T < d ? m : A;
    z[T] = R.slice(P, P + U), M[T] = L.encode(z[T]), P += U, I = Math.max(I, U);
  }
  var Y = So.alloc(n), Q = 0, ce, oe;
  for (ce = 0; ce < I; ce++)
    for (oe = 0; oe < l; oe++)
      ce < z[oe].length && (Y[Q++] = z[oe][ce]);
  for (ce = 0; ce < B; ce++)
    for (oe = 0; oe < l; oe++)
      Y[Q++] = M[oe][ce];
  return Y;
}
function nd(t, e, r, n) {
  var o;
  if (J0(t))
    o = On.fromArray(t);
  else if (typeof t == "string") {
    var i = e;
    if (!i) {
      var l = On.rawSplit(t);
      i = Wr.getBestVersionForData(
        l,
        r
      );
    }
    o = On.fromString(t, i || 40);
  } else
    throw new Error("Invalid data");
  var s = Wr.getBestVersionForData(
    o,
    r
  );
  if (!s)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = s;
  else if (e < s)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`
    );
  var d = td(e, r, o), v = an.getSymbolSize(e), m = new j0(v);
  return G0(m, e), Z0(m), Q0(m, e), Bn(m, r, 0), e >= 7 && X0(m, e), ed(m, d), isNaN(n) && (n = Jn.getBestMask(
    m,
    Bn.bind(null, m, r)
  )), Jn.applyMask(n, m), Bn(m, r, n), {
    modules: m,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: o
  };
}
us.create = function(e, r) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  var n = Tn.M, o, i;
  return typeof r < "u" && (n = Tn.from(r.errorCorrectionLevel, Tn.M), o = Wr.from(r.version), i = Jn.from(r.maskPattern), r.toSJISFunc && an.setToSJISFunction(r.toSJISFunc)), nd(e, o, n, i);
};
var Rs = {}, Ri = {};
(function(t) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    var n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
      return [i, i];
    }))), n.length === 6 && n.push("F", "F");
    var o = parseInt(n.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  t.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    var o = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, l = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : l,
      margin: o,
      color: {
        dark: e(n.color.dark || "#000000ff"),
        light: e(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, t.getScale = function(n, o) {
    return o.width && o.width >= n + o.margin * 2 ? o.width / (n + o.margin * 2) : o.scale;
  }, t.getImageWidth = function(n, o) {
    var i = t.getScale(n, o);
    return Math.floor((n + o.margin * 2) * i);
  }, t.qrToImageData = function(n, o, i) {
    for (var l = o.modules.size, s = o.modules.data, d = t.getScale(l, i), v = Math.floor((l + i.margin * 2) * d), m = i.margin * d, A = [i.color.light, i.color.dark], B = 0; B < v; B++)
      for (var L = 0; L < v; L++) {
        var P = (B * v + L) * 4, z = i.color.light;
        if (B >= m && L >= m && B < v - m && L < v - m) {
          var M = Math.floor((B - m) / d), I = Math.floor((L - m) / d);
          z = A[s[M * l + I] ? 1 : 0];
        }
        n[P++] = z.r, n[P++] = z.g, n[P++] = z.b, n[P] = z.a;
      }
  };
})(Ri);
(function(t) {
  var e = Ri;
  function r(o, i, l) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = l, i.width = l, i.style.height = l + "px", i.style.width = l + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(i, l, s) {
    var d = s, v = l;
    typeof d > "u" && (!l || !l.getContext) && (d = l, l = void 0), l || (v = n()), d = e.getOptions(d);
    var m = e.getImageWidth(i.modules.size, d), A = v.getContext("2d"), B = A.createImageData(m, m);
    return e.qrToImageData(B.data, i, d), r(A, v, m), A.putImageData(B, 0, 0), v;
  }, t.renderToDataURL = function(i, l, s) {
    var d = s;
    typeof d > "u" && (!l || !l.getContext) && (d = l, l = void 0), d || (d = {});
    var v = t.render(i, l, d), m = d.type || "image/png", A = d.rendererOpts || {};
    return v.toDataURL(m, A.quality);
  };
})(Rs);
var Is = {}, id = Ri;
function ko(t, e) {
  var r = t.a / 255, n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function Nn(t, e, r) {
  var n = t + e;
  return typeof r < "u" && (n += " " + r), n;
}
function od(t, e, r) {
  for (var n = "", o = 0, i = !1, l = 0, s = 0; s < t.length; s++) {
    var d = Math.floor(s % e), v = Math.floor(s / e);
    !d && !i && (i = !0), t[s] ? (l++, s > 0 && d > 0 && t[s - 1] || (n += i ? Nn("M", d + r, 0.5 + v + r) : Nn("m", o, 0), o = 0, i = !1), d + 1 < e && t[s + 1] || (n += Nn("h", l), l = 0)) : o++;
  }
  return n;
}
Is.render = function(e, r, n) {
  var o = id.getOptions(r), i = e.modules.size, l = e.modules.data, s = i + o.margin * 2, d = o.color.light.a ? "<path " + ko(o.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", v = "<path " + ko(o.color.dark, "stroke") + ' d="' + od(l, i, o.margin) + '"/>', m = 'viewBox="0 0 ' + s + " " + s + '"', A = o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "", B = '<svg xmlns="http://www.w3.org/2000/svg" ' + A + m + ' shape-rendering="crispEdges">' + d + v + `</svg>
`;
  return typeof n == "function" && n(null, B), B;
};
var ad = t0, Zn = us, Ts = Rs, sd = Is;
function Ii(t, e, r, n, o) {
  var i = [].slice.call(arguments, 1), l = i.length, s = typeof i[l - 1] == "function";
  if (!s && !ad())
    throw new Error("Callback required as last argument");
  if (s) {
    if (l < 2)
      throw new Error("Too few arguments provided");
    l === 2 ? (o = r, r = e, e = n = void 0) : l === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = r, r = e, e = void 0));
  } else {
    if (l < 1)
      throw new Error("Too few arguments provided");
    return l === 1 ? (r = e, e = n = void 0) : l === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(v, m) {
      try {
        var A = Zn.create(r, n);
        v(t(A, e, n));
      } catch (B) {
        m(B);
      }
    });
  }
  try {
    var d = Zn.create(r, n);
    o(null, t(d, e, n));
  } catch (v) {
    o(v);
  }
}
xr.create = Zn.create;
xr.toCanvas = Ii.bind(null, Ts.render);
xr.toDataURL = Ii.bind(null, Ts.renderToDataURL);
xr.toString = Ii.bind(null, function(t, e, r) {
  return sd.render(t, r);
});
var cd = function() {
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
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || r.forEach(function(o) {
      t.addRange(o);
    }), e && e.focus();
  };
}, ld = cd, Ao = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, ud = "Copy to clipboard: #{key}, Enter";
function fd(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function hd(t, e) {
  var r, n, o, i, l, s, d = !1;
  e || (e = {}), r = e.debug || !1;
  try {
    o = ld(), i = document.createRange(), l = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(m) {
      if (m.stopPropagation(), e.format)
        if (m.preventDefault(), typeof m.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var A = Ao[e.format] || Ao.default;
          window.clipboardData.setData(A, t);
        } else
          m.clipboardData.clearData(), m.clipboardData.setData(e.format, t);
      e.onCopy && (m.preventDefault(), e.onCopy(m.clipboardData));
    }), document.body.appendChild(s), i.selectNodeContents(s), l.addRange(i);
    var v = document.execCommand("copy");
    if (!v)
      throw new Error("copy command was unsuccessful");
    d = !0;
  } catch (m) {
    r && console.error("unable to copy using execCommand: ", m), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), d = !0;
    } catch (A) {
      r && console.error("unable to copy using clipboardData: ", A), r && console.error("falling back to prompt"), n = fd("message" in e ? e.message : ud), window.prompt(n, t);
    }
  } finally {
    l && (typeof l.removeRange == "function" ? l.removeRange(i) : l.removeAllRanges()), s && document.body.removeChild(s), o();
  }
  return d;
}
var dd = hd, de, gr, Ti, Os, Ro, Oi, Bs, xt = {}, sn = [], pd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function bt(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function Ns(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ct(t, e, r) {
  var n, o = arguments, i = {};
  for (n in e)
    n !== "key" && n !== "ref" && (i[n] = e[n]);
  if (arguments.length > 3)
    for (r = [r], n = 3; n < arguments.length; n++)
      r.push(o[n]);
  if (r != null && (i.children = r), typeof t == "function" && t.defaultProps != null)
    for (n in t.defaultProps)
      i[n] === void 0 && (i[n] = t.defaultProps[n]);
  return zr(t, i, e && e.key, e && e.ref, null);
}
function zr(t, e, r, n, o) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o };
  return o == null && (i.__v = i), de.vnode && de.vnode(i), i;
}
function Ls() {
  return {};
}
function Mr(t) {
  return t.children;
}
function st(t, e) {
  this.props = t, this.context = e;
}
function _r(t, e) {
  if (e == null)
    return t.__ ? _r(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? _r(t) : null;
}
function Ps(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return Ps(t);
  }
}
function Fr(t) {
  (!t.__d && (t.__d = !0) && gr.push(t) && !Ti++ || Ro !== de.debounceRendering) && ((Ro = de.debounceRendering) || Os)(gd);
}
function gd() {
  for (var t; Ti = gr.length; )
    t = gr.sort(function(e, r) {
      return e.__v.__b - r.__v.__b;
    }), gr = [], t.some(function(e) {
      var r, n, o, i, l, s, d;
      e.__d && (s = (l = (r = e).__v).__e, (d = r.__P) && (n = [], (o = bt({}, l)).__v = o, i = Bi(d, l, o, r.__n, d.ownerSVGElement !== void 0, null, n, s == null ? _r(l) : s), Us(n, l), i != s && Ps(l)));
    });
}
function Fs(t, e, r, n, o, i, l, s, d) {
  var v, m, A, B, L, P, z, M = r && r.__k || sn, I = M.length;
  if (s == xt && (s = i != null ? i[0] : I ? _r(r, 0) : null), v = 0, e.__k = It(e.__k, function(R) {
    if (R != null) {
      if (R.__ = e, R.__b = e.__b + 1, (A = M[v]) === null || A && R.key == A.key && R.type === A.type)
        M[v] = void 0;
      else
        for (m = 0; m < I; m++) {
          if ((A = M[m]) && R.key == A.key && R.type === A.type) {
            M[m] = void 0;
            break;
          }
          A = null;
        }
      if (B = Bi(t, R, A = A || xt, n, o, i, l, s, d), (m = R.ref) && A.ref != m && (z || (z = []), A.ref && z.push(A.ref, null, R), z.push(m, R.__c || B, R)), B != null) {
        var T;
        if (P == null && (P = B), R.__d !== void 0)
          T = R.__d, R.__d = void 0;
        else if (i == A || B != s || B.parentNode == null) {
          e:
            if (s == null || s.parentNode !== t)
              t.appendChild(B), T = null;
            else {
              for (L = s, m = 0; (L = L.nextSibling) && m < I; m += 2)
                if (L == B)
                  break e;
              t.insertBefore(B, s), T = s;
            }
          e.type == "option" && (t.value = "");
        }
        s = T !== void 0 ? T : B.nextSibling, typeof e.type == "function" && (e.__d = s);
      } else
        s && A.__e == s && s.parentNode != t && (s = _r(A));
    }
    return v++, R;
  }), e.__e = P, i != null && typeof e.type != "function")
    for (v = i.length; v--; )
      i[v] != null && Ns(i[v]);
  for (v = I; v--; )
    M[v] != null && mr(M[v], M[v]);
  if (z)
    for (v = 0; v < z.length; v++)
      Ds(z[v], z[++v], z[++v]);
}
function It(t, e, r) {
  if (r == null && (r = []), t == null || typeof t == "boolean")
    e && r.push(e(null));
  else if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      It(t[n], e, r);
  else
    r.push(e ? e(typeof t == "string" || typeof t == "number" ? zr(null, t, null, null, t) : t.__e != null || t.__c != null ? zr(t.type, t.props, t.key, null, t.__v) : t) : t);
  return r;
}
function md(t, e, r, n, o) {
  var i;
  for (i in r)
    i === "children" || i === "key" || i in e || Vr(t, i, null, r[i], n);
  for (i in e)
    o && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || r[i] === e[i] || Vr(t, i, e[i], r[i], n);
}
function Io(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r) : t[e] = typeof r == "number" && pd.test(e) === !1 ? r + "px" : r == null ? "" : r;
}
function Vr(t, e, r, n, o) {
  var i, l, s, d, v;
  if (o ? e === "className" && (e = "class") : e === "class" && (e = "className"), e === "style")
    if (i = t.style, typeof r == "string")
      i.cssText = r;
    else {
      if (typeof n == "string" && (i.cssText = "", n = null), n)
        for (d in n)
          r && d in r || Io(i, d, "");
      if (r)
        for (v in r)
          n && r[v] === n[v] || Io(i, v, r[v]);
    }
  else
    e[0] === "o" && e[1] === "n" ? (l = e !== (e = e.replace(/Capture$/, "")), s = e.toLowerCase(), e = (s in t ? s : e).slice(2), r ? (n || t.addEventListener(e, To, l), (t.l || (t.l = {}))[e] = r) : t.removeEventListener(e, To, l)) : e !== "list" && e !== "tagName" && e !== "form" && e !== "type" && e !== "size" && !o && e in t ? t[e] = r == null ? "" : r : typeof r != "function" && e !== "dangerouslySetInnerHTML" && (e !== (e = e.replace(/^xlink:?/, "")) ? r == null || r === !1 ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : r == null || r === !1 && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function To(t) {
  this.l[t.type](de.event ? de.event(t) : t);
}
function Bi(t, e, r, n, o, i, l, s, d) {
  var v, m, A, B, L, P, z, M, I, R, T = e.type;
  if (e.constructor !== void 0)
    return null;
  (v = de.__b) && v(e);
  try {
    e:
      if (typeof T == "function") {
        if (M = e.props, I = (v = T.contextType) && n[v.__c], R = v ? I ? I.props.value : v.__ : n, r.__c ? z = (m = e.__c = r.__c).__ = m.__E : ("prototype" in T && T.prototype.render ? e.__c = m = new T(M, R) : (e.__c = m = new st(M, R), m.constructor = T, m.render = _d), I && I.sub(m), m.props = M, m.state || (m.state = {}), m.context = R, m.__n = n, A = m.__d = !0, m.__h = []), m.__s == null && (m.__s = m.state), T.getDerivedStateFromProps != null && (m.__s == m.state && (m.__s = bt({}, m.__s)), bt(m.__s, T.getDerivedStateFromProps(M, m.__s))), B = m.props, L = m.state, A)
          T.getDerivedStateFromProps == null && m.componentWillMount != null && m.componentWillMount(), m.componentDidMount != null && m.__h.push(m.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && M !== B && m.componentWillReceiveProps != null && m.componentWillReceiveProps(M, R), !m.__e && m.shouldComponentUpdate != null && m.shouldComponentUpdate(M, m.__s, R) === !1 || e.__v === r.__v && !m.__) {
            for (m.props = M, m.state = m.__s, e.__v !== r.__v && (m.__d = !1), m.__v = e, e.__e = r.__e, e.__k = r.__k, m.__h.length && l.push(m), v = 0; v < e.__k.length; v++)
              e.__k[v] && (e.__k[v].__ = e);
            break e;
          }
          m.componentWillUpdate != null && m.componentWillUpdate(M, m.__s, R), m.componentDidUpdate != null && m.__h.push(function() {
            m.componentDidUpdate(B, L, P);
          });
        }
        m.context = R, m.props = M, m.state = m.__s, (v = de.__r) && v(e), m.__d = !1, m.__v = e, m.__P = t, v = m.render(m.props, m.state, m.context), e.__k = v != null && v.type == Mr && v.key == null ? v.props.children : Array.isArray(v) ? v : [v], m.getChildContext != null && (n = bt(bt({}, n), m.getChildContext())), A || m.getSnapshotBeforeUpdate == null || (P = m.getSnapshotBeforeUpdate(B, L)), Fs(t, e, r, n, o, i, l, s, d), m.base = e.__e, m.__h.length && l.push(m), z && (m.__E = m.__ = null), m.__e = !1;
      } else
        i == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = vd(r.__e, e, r, n, o, i, l, d);
    (v = de.diffed) && v(e);
  } catch (U) {
    e.__v = null, de.__e(U, e, r);
  }
  return e.__e;
}
function Us(t, e) {
  de.__c && de.__c(e, t), t.some(function(r) {
    try {
      t = r.__h, r.__h = [], t.some(function(n) {
        n.call(r);
      });
    } catch (n) {
      de.__e(n, r.__v);
    }
  });
}
function vd(t, e, r, n, o, i, l, s) {
  var d, v, m, A, B, L = r.props, P = e.props;
  if (o = e.type === "svg" || o, i != null) {
    for (d = 0; d < i.length; d++)
      if ((v = i[d]) != null && ((e.type === null ? v.nodeType === 3 : v.localName === e.type) || t == v)) {
        t = v, i[d] = null;
        break;
      }
  }
  if (t == null) {
    if (e.type === null)
      return document.createTextNode(P);
    t = o ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, P.is && { is: P.is }), i = null, s = !1;
  }
  if (e.type === null)
    L !== P && t.data != P && (t.data = P);
  else {
    if (i != null && (i = sn.slice.call(t.childNodes)), m = (L = r.props || xt).dangerouslySetInnerHTML, A = P.dangerouslySetInnerHTML, !s) {
      if (L === xt)
        for (L = {}, B = 0; B < t.attributes.length; B++)
          L[t.attributes[B].name] = t.attributes[B].value;
      (A || m) && (A && m && A.__html == m.__html || (t.innerHTML = A && A.__html || ""));
    }
    md(t, P, L, o, s), A ? e.__k = [] : (e.__k = e.props.children, Fs(t, e, r, n, e.type !== "foreignObject" && o, i, l, xt, s)), s || ("value" in P && (d = P.value) !== void 0 && d !== t.value && Vr(t, "value", d, L.value, !1), "checked" in P && (d = P.checked) !== void 0 && d !== t.checked && Vr(t, "checked", d, L.checked, !1));
  }
  return t;
}
function Ds(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    de.__e(n, r);
  }
}
function mr(t, e, r) {
  var n, o, i;
  if (de.unmount && de.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Ds(n, null, e)), r || typeof t.type == "function" || (r = (o = t.__e) != null), t.__e = t.__d = void 0, (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (l) {
        de.__e(l, e);
      }
    n.base = n.__P = null;
  }
  if (n = t.__k)
    for (i = 0; i < n.length; i++)
      n[i] && mr(n[i], e, r);
  o != null && Ns(o);
}
function _d(t, e, r) {
  return this.constructor(t, r);
}
function yr(t, e, r) {
  var n, o, i;
  de.__ && de.__(t, e), o = (n = r === Oi) ? null : r && r.__k || e.__k, t = Ct(Mr, null, [t]), i = [], Bi(e, (n ? e : r || e).__k = t, o || xt, xt, e.ownerSVGElement !== void 0, r && !n ? [r] : o ? null : sn.slice.call(e.childNodes), i, r || xt, n), Us(i, t);
}
function qs(t, e) {
  yr(t, e, Oi);
}
function yd(t, e) {
  var r, n;
  for (n in e = bt(bt({}, t.props), e), arguments.length > 2 && (e.children = sn.slice.call(arguments, 2)), r = {}, e)
    n !== "key" && n !== "ref" && (r[n] = e[n]);
  return zr(t.type, r, e.key || t.key, e.ref || t.ref, null);
}
function Hs(t) {
  var e = {}, r = { __c: "__cC" + Bs++, __: t, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, i = this;
    return this.getChildContext || (o = [], this.getChildContext = function() {
      return e[r.__c] = i, e;
    }, this.shouldComponentUpdate = function(l) {
      i.props.value !== l.value && o.some(function(s) {
        s.context = l.value, Fr(s);
      });
    }, this.sub = function(l) {
      o.push(l);
      var s = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        o.splice(o.indexOf(l), 1), s && s.call(l);
      };
    }), n.children;
  } };
  return r.Consumer.contextType = r, r.Provider.__ = r, r;
}
de = { __e: function(t, e) {
  for (var r, n; e = e.__; )
    if ((r = e.__c) && !r.__)
      try {
        if (r.constructor && r.constructor.getDerivedStateFromError != null && (n = !0, r.setState(r.constructor.getDerivedStateFromError(t))), r.componentDidCatch != null && (n = !0, r.componentDidCatch(t)), n)
          return Fr(r.__E = r);
      } catch (o) {
        t = o;
      }
  throw t;
} }, st.prototype.setState = function(t, e) {
  var r;
  r = this.__s !== this.state ? this.__s : this.__s = bt({}, this.state), typeof t == "function" && (t = t(r, this.props)), t && bt(r, t), t != null && this.__v && (e && this.__h.push(e), Fr(this));
}, st.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Fr(this));
}, st.prototype.render = Mr, gr = [], Ti = 0, Os = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oi = xt, Bs = 0;
var qt, Ze, Oo, er = 0, Qn = [], Bo = de.__r, No = de.diffed, Lo = de.__c, Po = de.unmount;
function ir(t, e) {
  de.__h && de.__h(Ze, t, er || e), er = 0;
  var r = Ze.__H || (Ze.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function Ni(t) {
  return er = 1, Li(Ys, t);
}
function Li(t, e, r) {
  var n = ir(qt++, 2);
  return n.__c || (n.__c = Ze, n.__ = [r ? r(e) : Ys(void 0, e), function(o) {
    var i = t(n.__[0], o);
    n.__[0] !== i && (n.__[0] = i, n.__c.setState({}));
  }]), n.__;
}
function $s(t, e) {
  var r = ir(qt++, 3);
  !de.__s && Fi(r.__H, e) && (r.__ = t, r.__H = e, Ze.__H.__h.push(r));
}
function Pi(t, e) {
  var r = ir(qt++, 4);
  !de.__s && Fi(r.__H, e) && (r.__ = t, r.__H = e, Ze.__h.push(r));
}
function js(t) {
  return er = 5, cn(function() {
    return { current: t };
  }, []);
}
function Ws(t, e, r) {
  er = 6, Pi(function() {
    typeof t == "function" ? t(e()) : t && (t.current = e());
  }, r == null ? r : r.concat(t));
}
function cn(t, e) {
  var r = ir(qt++, 7);
  return Fi(r.__H, e) ? (r.__H = e, r.__h = t, r.__ = t()) : r.__;
}
function zs(t, e) {
  return er = 8, cn(function() {
    return t;
  }, e);
}
function Vs(t) {
  var e = Ze.context[t.__c], r = ir(qt++, 9);
  return r.__c = t, e ? (r.__ == null && (r.__ = !0, e.sub(Ze)), e.props.value) : t.__;
}
function Ks(t, e) {
  de.useDebugValue && de.useDebugValue(e ? e(t) : t);
}
function wd(t) {
  var e = ir(qt++, 10), r = Ni();
  return e.__ = t, Ze.componentDidCatch || (Ze.componentDidCatch = function(n) {
    e.__ && e.__(n), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function bd() {
  Qn.some(function(t) {
    if (t.__P)
      try {
        t.__H.__h.forEach(Xn), t.__H.__h.forEach(ei), t.__H.__h = [];
      } catch (e) {
        return t.__H.__h = [], de.__e(e, t.__v), !0;
      }
  }), Qn = [];
}
function Xn(t) {
  t.t && t.t();
}
function ei(t) {
  var e = t.__();
  typeof e == "function" && (t.t = e);
}
function Fi(t, e) {
  return !t || e.some(function(r, n) {
    return r !== t[n];
  });
}
function Ys(t, e) {
  return typeof e == "function" ? e(t) : e;
}
de.__r = function(t) {
  Bo && Bo(t), qt = 0, (Ze = t.__c).__H && (Ze.__H.__h.forEach(Xn), Ze.__H.__h.forEach(ei), Ze.__H.__h = []);
}, de.diffed = function(t) {
  No && No(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    r && r.__h.length && (Qn.push(e) !== 1 && Oo === de.requestAnimationFrame || ((Oo = de.requestAnimationFrame) || function(n) {
      var o, i = function() {
        clearTimeout(l), cancelAnimationFrame(o), setTimeout(n);
      }, l = setTimeout(i, 100);
      typeof window < "u" && (o = requestAnimationFrame(i));
    })(bd));
  }
}, de.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Xn), r.__h = r.__h.filter(function(n) {
        return !n.__ || ei(n);
      });
    } catch (n) {
      e.some(function(o) {
        o.__h && (o.__h = []);
      }), e = [], de.__e(n, r.__v);
    }
  }), Lo && Lo(t, e);
}, de.unmount = function(t) {
  Po && Po(t);
  var e = t.__c;
  if (e) {
    var r = e.__H;
    if (r)
      try {
        r.__.forEach(function(n) {
          return n.t && n.t();
        });
      } catch (n) {
        de.__e(n, e.__v);
      }
  }
};
function Ui(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function ti(t, e) {
  for (var r in t)
    if (r !== "__source" && !(r in e))
      return !0;
  for (var n in e)
    if (n !== "__source" && t[n] !== e[n])
      return !0;
  return !1;
}
var Js = function(t) {
  var e, r;
  function n(o) {
    var i;
    return (i = t.call(this, o) || this).isPureReactComponent = !0, i;
  }
  return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.shouldComponentUpdate = function(o, i) {
    return ti(this.props, o) || ti(this.state, i);
  }, n;
}(st);
function Gs(t, e) {
  function r(o) {
    var i = this.props.ref, l = i == o.ref;
    return !l && i && (i.call ? i(null) : i.current = null), e ? !e(this.props, o) || !l : ti(this.props, o);
  }
  function n(o) {
    return this.shouldComponentUpdate = r, Ct(t, Ui({}, o));
  }
  return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.t = !0, n;
}
var Fo = de.__b;
function Zs(t) {
  function e(r) {
    var n = Ui({}, r);
    return delete n.ref, t(n, r.ref);
  }
  return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
de.__b = function(t) {
  t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), Fo && Fo(t);
};
var Uo = function(t, e) {
  return t ? It(t).reduce(function(r, n, o) {
    return r.concat(e(n, o));
  }, []) : null;
}, Qs = { map: Uo, forEach: Uo, count: function(t) {
  return t ? It(t).length : 0;
}, only: function(t) {
  if ((t = It(t)).length !== 1)
    throw new Error("Children.only() expects only one child.");
  return t[0];
}, toArray: It }, xd = de.__e;
function Xs(t) {
  return t && ((t = Ui({}, t)).__c = null, t.__k = t.__k && t.__k.map(Xs)), t;
}
function Kr() {
  this.__u = 0, this.o = null, this.__b = null;
}
function ec(t) {
  var e = t.__.__c;
  return e && e.u && e.u(t);
}
function tc(t) {
  var e, r, n;
  function o(i) {
    if (e || (e = t()).then(function(l) {
      r = l.default || l;
    }, function(l) {
      n = l;
    }), n)
      throw n;
    if (!r)
      throw e;
    return Ct(r, i);
  }
  return o.displayName = "Lazy", o.t = !0, o;
}
function jt() {
  this.i = null, this.l = null;
}
de.__e = function(t, e, r) {
  if (t.then) {
    for (var n, o = e; o = o.__; )
      if ((n = o.__c) && n.__c)
        return n.__c(t, e.__c);
  }
  xd(t, e, r);
}, (Kr.prototype = new st()).__c = function(t, e) {
  var r = this;
  r.o == null && (r.o = []), r.o.push(e);
  var n = ec(r.__v), o = !1, i = function() {
    o || (o = !0, n ? n(l) : l());
  };
  e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
    i(), e.__c && e.__c();
  };
  var l = function() {
    var s;
    if (!--r.__u)
      for (r.__v.__k[0] = r.state.u, r.setState({ u: r.__b = null }); s = r.o.pop(); )
        s.forceUpdate();
  };
  r.__u++ || r.setState({ u: r.__b = r.__v.__k[0] }), t.then(i, i);
}, Kr.prototype.render = function(t, e) {
  return this.__b && (this.__v.__k[0] = Xs(this.__b), this.__b = null), [Ct(st, null, e.u ? null : t.children), e.u && t.fallback];
};
var Do = function(t, e, r) {
  if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
    for (r = t.i; r; ) {
      for (; r.length > 3; )
        r.pop()();
      if (r[1] < r[0])
        break;
      t.i = r = r[2];
    }
};
(jt.prototype = new st()).u = function(t) {
  var e = this, r = ec(e.__v), n = e.l.get(t);
  return n[0]++, function(o) {
    var i = function() {
      e.props.revealOrder ? (n.push(o), Do(e, t, n)) : o();
    };
    r ? r(i) : i();
  };
}, jt.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = It(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; )
    this.l.set(e[r], this.i = [1, 0, this.i]);
  return t.children;
}, jt.prototype.componentDidUpdate = jt.prototype.componentDidMount = function() {
  var t = this;
  t.l.forEach(function(e, r) {
    Do(t, r, e);
  });
};
var Cd = function() {
  function t() {
  }
  var e = t.prototype;
  return e.getChildContext = function() {
    return this.props.context;
  }, e.render = function(r) {
    return r.children;
  }, t;
}();
function Md(t) {
  var e = this, r = t.container, n = Ct(Cd, { context: e.context }, t.vnode);
  return e.s && e.s !== r && (e.v.parentNode && e.s.removeChild(e.v), mr(e.h), e.p = !1), t.vnode ? e.p ? (r.__k = e.__k, yr(n, r), e.__k = r.__k) : (e.v = document.createTextNode(""), qs("", r), r.appendChild(e.v), e.p = !0, e.s = r, yr(n, r, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), mr(e.h)), e.h = n, e.componentWillUnmount = function() {
    e.v.parentNode && e.s.removeChild(e.v), mr(e.h);
  }, null;
}
function rc(t, e) {
  return Ct(Md, { vnode: t, container: e });
}
var qo = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
st.prototype.isReactComponent = {};
var nc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103;
function ri(t, e, r) {
  if (e.__k == null)
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  return yr(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
function Ed(t, e, r) {
  return qs(t, e), typeof r == "function" && r(), t ? t.__c : null;
}
var Ho = de.event;
function Ln(t, e) {
  t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, { configurable: !1, get: function() {
    return this["UNSAFE_" + e];
  }, set: function(r) {
    this["UNSAFE_" + e] = r;
  } });
}
de.event = function(t) {
  Ho && (t = Ho(t)), t.persist = function() {
  };
  var e = !1, r = !1, n = t.stopPropagation;
  t.stopPropagation = function() {
    n.call(t), e = !0;
  };
  var o = t.preventDefault;
  return t.preventDefault = function() {
    o.call(t), r = !0;
  }, t.isPropagationStopped = function() {
    return e;
  }, t.isDefaultPrevented = function() {
    return r;
  }, t.nativeEvent = t;
};
var $o = { configurable: !0, get: function() {
  return this.class;
} }, jo = de.vnode;
de.vnode = function(t) {
  t.$$typeof = nc;
  var e = t.type, r = t.props;
  if (e) {
    if (r.class != r.className && ($o.enumerable = "className" in r, r.className != null && (r.class = r.className), Object.defineProperty(r, "className", $o)), typeof e != "function") {
      var n, o, i;
      for (i in r.defaultValue && r.value !== void 0 && (r.value || r.value === 0 || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && e === "select" && (It(r.children).forEach(function(l) {
        r.value.indexOf(l.props.value) != -1 && (l.props.selected = !0);
      }), delete r.value), r)
        if (n = qo.test(i))
          break;
      if (n)
        for (i in o = t.props = {}, r)
          o[qo.test(i) ? i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i] = r[i];
    }
    (function(l) {
      var s = t.type, d = t.props;
      if (d && typeof s == "string") {
        var v = {};
        for (var m in d)
          /^on(Ani|Tra|Tou)/.test(m) && (d[m.toLowerCase()] = d[m], delete d[m]), v[m.toLowerCase()] = m;
        if (v.ondoubleclick && (d.ondblclick = d[v.ondoubleclick], delete d[v.ondoubleclick]), v.onbeforeinput && (d.onbeforeinput = d[v.onbeforeinput], delete d[v.onbeforeinput]), v.onchange && (s === "textarea" || s.toLowerCase() === "input" && !/^fil|che|ra/i.test(d.type))) {
          var A = v.oninput || "oninput";
          d[A] || (d[A] = d[v.onchange], delete d[v.onchange]);
        }
      }
    })(), typeof e == "function" && !e.m && e.prototype && (Ln(e.prototype, "componentWillMount"), Ln(e.prototype, "componentWillReceiveProps"), Ln(e.prototype, "componentWillUpdate"), e.m = !0);
  }
  jo && jo(t);
};
var Sd = "16.8.0";
function ic(t) {
  return Ct.bind(null, t);
}
function Di(t) {
  return !!t && t.$$typeof === nc;
}
function oc(t) {
  return Di(t) ? yd.apply(null, arguments) : t;
}
function ac(t) {
  return !!t.__k && (yr(null, t), !0);
}
function sc(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var cc = function(t, e) {
  return t(e);
};
const kd = { useState: Ni, useReducer: Li, useEffect: $s, useLayoutEffect: Pi, useRef: js, useImperativeHandle: Ws, useMemo: cn, useCallback: zs, useContext: Vs, useDebugValue: Ks, version: "16.8.0", Children: Qs, render: ri, hydrate: ri, unmountComponentAtNode: ac, createPortal: rc, createElement: Ct, createContext: Hs, createFactory: ic, cloneElement: oc, createRef: Ls, Fragment: Mr, isValidElement: Di, findDOMNode: sc, Component: st, PureComponent: Js, memo: Gs, forwardRef: Zs, unstable_batchedUpdates: cc, Suspense: Kr, SuspenseList: jt, lazy: tc }, Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kd,
  version: Sd,
  Children: Qs,
  render: ri,
  hydrate: Ed,
  unmountComponentAtNode: ac,
  createPortal: rc,
  createFactory: ic,
  cloneElement: oc,
  isValidElement: Di,
  findDOMNode: sc,
  PureComponent: Js,
  memo: Gs,
  forwardRef: Zs,
  unstable_batchedUpdates: cc,
  Suspense: Kr,
  SuspenseList: jt,
  lazy: tc,
  createElement: Ct,
  createContext: Hs,
  createRef: Ls,
  Fragment: Mr,
  Component: st,
  useState: Ni,
  useReducer: Li,
  useEffect: $s,
  useLayoutEffect: Pi,
  useRef: js,
  useImperativeHandle: Ws,
  useMemo: cn,
  useCallback: zs,
  useContext: Vs,
  useDebugValue: Ks,
  useErrorBoundary: wd
}, Symbol.toStringTag, { value: "Module" })), Rd = /* @__PURE__ */ ci(Ad);
function lc(t) {
  return t && typeof t == "object" && "default" in t ? t.default : t;
}
var Je = e0, uc = lc(xr), Id = lc(dd), ie = Rd;
function Td(t) {
  uc.toString(t, {
    type: "terminal"
  }).then(console.log);
}
var Od = `:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function Bd(t, e) {
  try {
    var r = t();
  } catch (n) {
    return e(n);
  }
  return r && r.then ? r.then(void 0, e) : r;
}
var Nd = "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E", Ld = "WalletConnect", Pd = 300, Fd = "rgb(64, 153, 255)", fc = "walletconnect-wrapper", Wo = "walletconnect-style-sheet", hc = "walletconnect-qrcode-modal", Ud = "walletconnect-qrcode-close", dc = "walletconnect-qrcode-text", Dd = "walletconnect-connect-button";
function qd(t) {
  return ie.createElement("div", {
    className: "walletconnect-modal__header"
  }, ie.createElement("img", {
    src: Nd,
    className: "walletconnect-modal__headerLogo"
  }), ie.createElement("p", null, Ld), ie.createElement("div", {
    className: "walletconnect-modal__close__wrapper",
    onClick: t.onClose
  }, ie.createElement("div", {
    id: Ud,
    className: "walletconnect-modal__close__icon"
  }, ie.createElement("div", {
    className: "walletconnect-modal__close__line1"
  }), ie.createElement("div", {
    className: "walletconnect-modal__close__line2"
  }))));
}
function Hd(t) {
  return ie.createElement("a", {
    className: "walletconnect-connect__button",
    href: t.href,
    id: Dd + "-" + t.name,
    onClick: t.onClick,
    rel: "noopener noreferrer",
    style: {
      backgroundColor: t.color
    },
    target: "_blank"
  }, t.name);
}
var $d = "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";
function jd(t) {
  var e = t.color, r = t.href, n = t.name, o = t.logo, i = t.onClick;
  return ie.createElement("a", {
    className: "walletconnect-modal__base__row",
    href: r,
    onClick: i,
    rel: "noopener noreferrer",
    target: "_blank"
  }, ie.createElement("h3", {
    className: "walletconnect-modal__base__row__h3"
  }, n), ie.createElement("div", {
    className: "walletconnect-modal__base__row__right"
  }, ie.createElement("div", {
    className: "walletconnect-modal__base__row__right__app-icon",
    style: {
      background: "url('" + o + "') " + e,
      backgroundSize: "100%"
    }
  }), ie.createElement("img", {
    src: $d,
    className: "walletconnect-modal__base__row__right__caret"
  })));
}
function Wd(t) {
  var e = t.color, r = t.href, n = t.name, o = t.logo, i = t.onClick, l = window.innerWidth < 768 ? (n.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
  return ie.createElement("a", {
    className: "walletconnect-connect__button__icon_anchor",
    href: r,
    onClick: i,
    rel: "noopener noreferrer",
    target: "_blank"
  }, ie.createElement("div", {
    className: "walletconnect-connect__button__icon",
    style: {
      background: "url('" + o + "') " + e,
      backgroundSize: "100%"
    }
  }), ie.createElement("div", {
    style: {
      fontSize: l
    },
    className: "walletconnect-connect__button__text"
  }, n));
}
var zd = 5, Pn = 12;
function Vd(t) {
  var e = Je.isAndroid(), r = ie.useState(""), n = r[0], o = r[1], i = ie.useState(""), l = i[0], s = i[1], d = ie.useState(1), v = d[0], m = d[1], A = l ? t.links.filter(function(U) {
    return U.name.toLowerCase().includes(l.toLowerCase());
  }) : t.links, B = t.errorMessage, L = l || A.length > zd, P = Math.ceil(A.length / Pn), z = [(v - 1) * Pn + 1, v * Pn], M = A.length ? A.filter(function(U, Y) {
    return Y + 1 >= z[0] && Y + 1 <= z[1];
  }) : [], I = !e && P > 1, R = void 0;
  function T(U) {
    o(U.target.value), clearTimeout(R), U.target.value ? R = setTimeout(function() {
      s(U.target.value), m(1);
    }, 1e3) : (o(""), s(""), m(1));
  }
  return ie.createElement("div", null, ie.createElement("p", {
    id: dc,
    className: "walletconnect-qrcode__text"
  }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && ie.createElement("input", {
    className: "walletconnect-search__input",
    placeholder: "Search",
    value: n,
    onChange: T
  }), ie.createElement("div", {
    className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : L && A.length ? "__wrap" : "")
  }, e ? ie.createElement(Hd, {
    name: t.text.connect,
    color: Fd,
    href: t.uri,
    onClick: ie.useCallback(function() {
      Je.saveMobileLinkInfo({
        name: "Unknown",
        href: t.uri
      });
    }, [])
  }) : M.length ? M.map(function(U) {
    var Y = U.color, Q = U.name, ce = U.shortName, oe = U.logo, pe = Je.formatIOSMobile(t.uri, U), E = ie.useCallback(function() {
      Je.saveMobileLinkInfo({
        name: Q,
        href: pe
      });
    }, [M]);
    return L ? ie.createElement(Wd, {
      color: Y,
      href: pe,
      name: ce || Q,
      logo: oe,
      onClick: E
    }) : ie.createElement(jd, {
      color: Y,
      href: pe,
      name: Q,
      logo: oe,
      onClick: E
    });
  }) : ie.createElement(ie.Fragment, null, ie.createElement("p", null, B.length ? t.errorMessage : !!t.links.length && !A.length ? t.text.no_wallets_found : t.text.loading))), I && ie.createElement("div", {
    className: "walletconnect-modal__footer"
  }, Array(P).fill(0).map(function(U, Y) {
    var Q = Y + 1, ce = v === Q;
    return ie.createElement("a", {
      style: {
        margin: "auto 10px",
        fontWeight: ce ? "bold" : "normal"
      },
      onClick: function() {
        return m(Q);
      }
    }, Q);
  })));
}
function Kd(t) {
  var e = !!t.message.trim();
  return ie.createElement("div", {
    className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
  }, t.message);
}
var Yd = function(t) {
  try {
    var e = "";
    return Promise.resolve(uc.toString(t, {
      margin: 0,
      type: "svg"
    })).then(function(r) {
      return typeof r == "string" && (e = r.replace("<svg", '<svg class="walletconnect-qrcode__image"')), e;
    });
  } catch (r) {
    return Promise.reject(r);
  }
};
function Jd(t) {
  var e = ie.useState(""), r = e[0], n = e[1], o = ie.useState(""), i = o[0], l = o[1];
  ie.useEffect(function() {
    try {
      return Promise.resolve(Yd(t.uri)).then(function(d) {
        l(d);
      });
    } catch (d) {
      Promise.reject(d);
    }
  }, []);
  var s = function() {
    var d = Id(t.uri);
    d ? (n(t.text.copied_to_clipboard), setInterval(function() {
      return n("");
    }, 1200)) : (n("Error"), setInterval(function() {
      return n("");
    }, 1200));
  };
  return ie.createElement("div", null, ie.createElement("p", {
    id: dc,
    className: "walletconnect-qrcode__text"
  }, t.text.scan_qrcode_with_wallet), ie.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: i
    }
  }), ie.createElement("div", {
    className: "walletconnect-modal__footer"
  }, ie.createElement("a", {
    onClick: s
  }, t.text.copy_to_clipboard)), ie.createElement(Kd, {
    message: r
  }));
}
function Gd(t) {
  var e = Je.isAndroid(), r = Je.isMobile(), n = r ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0, o = ie.useState(!1), i = o[0], l = o[1], s = ie.useState(!1), d = s[0], v = s[1], m = ie.useState(!r), A = m[0], B = m[1], L = {
    mobile: r,
    text: t.text,
    uri: t.uri,
    qrcodeModalOptions: t.qrcodeModalOptions
  }, P = ie.useState(""), z = P[0], M = P[1], I = ie.useState(!1), R = I[0], T = I[1], U = ie.useState([]), Y = U[0], Q = U[1], ce = ie.useState(""), oe = ce[0], pe = ce[1], E = function() {
    d || i || n && !n.length || Y.length > 0 || ie.useEffect(function() {
      var h = function() {
        try {
          if (e)
            return Promise.resolve();
          l(!0);
          var g = Bd(function() {
            var y = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : Je.getWalletRegistryUrl();
            return Promise.resolve(fetch(y)).then(function(x) {
              return Promise.resolve(x.json()).then(function(k) {
                var N = k.listings, b = r ? "mobile" : "desktop", c = Je.getMobileLinkRegistry(Je.formatMobileRegistry(N, b), n);
                l(!1), v(!0), pe(c.length ? "" : t.text.no_supported_wallets), Q(c);
                var _ = c.length === 1;
                _ && (M(Je.formatIOSMobile(t.uri, c[0])), B(!0)), T(_);
              });
            });
          }, function(y) {
            l(!1), v(!0), pe(t.text.something_went_wrong), console.error(y);
          });
          return Promise.resolve(g && g.then ? g.then(function() {
          }) : void 0);
        } catch (y) {
          return Promise.reject(y);
        }
      };
      h();
    });
  };
  E();
  var a = r ? A : !A;
  return ie.createElement("div", {
    id: hc,
    className: "walletconnect-qrcode__base animated fadeIn"
  }, ie.createElement("div", {
    className: "walletconnect-modal__base"
  }, ie.createElement(qd, {
    onClose: t.onClose
  }), R && A ? ie.createElement("div", {
    className: "walletconnect-modal__single_wallet"
  }, ie.createElement("a", {
    onClick: function() {
      return Je.saveMobileLinkInfo({
        name: Y[0].name,
        href: z
      });
    },
    href: z,
    rel: "noopener noreferrer",
    target: "_blank"
  }, t.text.connect_with + " " + (R ? Y[0].name : "") + " \u203A")) : e || i || !i && Y.length ? ie.createElement("div", {
    className: "walletconnect-modal__mobile__toggle" + (a ? " right__selected" : "")
  }, ie.createElement("div", {
    className: "walletconnect-modal__mobile__toggle_selector"
  }), r ? ie.createElement(ie.Fragment, null, ie.createElement("a", {
    onClick: function() {
      return B(!1), E();
    }
  }, t.text.mobile), ie.createElement("a", {
    onClick: function() {
      return B(!0);
    }
  }, t.text.qrcode)) : ie.createElement(ie.Fragment, null, ie.createElement("a", {
    onClick: function() {
      return B(!0);
    }
  }, t.text.qrcode), ie.createElement("a", {
    onClick: function() {
      return B(!1), E();
    }
  }, t.text.desktop))) : null, ie.createElement("div", null, A || !e && !i && !Y.length ? ie.createElement(Jd, Object.assign({}, L)) : ie.createElement(Vd, Object.assign(
    {},
    L,
    {
      links: Y,
      errorMessage: oe
    }
  )))));
}
var Zd = {
  choose_preferred_wallet: "W\xE4hle bevorzugte Wallet",
  connect_mobile_wallet: "Verbinde mit Mobile Wallet",
  scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
  connect: "Verbinden",
  qrcode: "QR-Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "In die Zwischenablage kopieren",
  copied_to_clipboard: "In die Zwischenablage kopiert!",
  connect_with: "Verbinden mit Hilfe von",
  loading: "Laden...",
  something_went_wrong: "Etwas ist schief gelaufen",
  no_supported_wallets: "Es gibt noch keine unterst\xFCtzten Wallet",
  no_wallets_found: "keine Wallet gefunden"
}, Qd = {
  choose_preferred_wallet: "Choose your preferred wallet",
  connect_mobile_wallet: "Connect to Mobile Wallet",
  scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
  connect: "Connect",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copy to clipboard",
  copied_to_clipboard: "Copied to clipboard!",
  connect_with: "Connect with",
  loading: "Loading...",
  something_went_wrong: "Something went wrong",
  no_supported_wallets: "There are no supported wallets yet",
  no_wallets_found: "No wallets found"
}, Xd = {
  choose_preferred_wallet: "Elige tu billetera preferida",
  connect_mobile_wallet: "Conectar a billetera m\xF3vil",
  scan_qrcode_with_wallet: "Escanea el c\xF3digo QR con una billetera compatible con WalletConnect",
  connect: "Conectar",
  qrcode: "C\xF3digo QR",
  mobile: "M\xF3vil",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Conectar mediante",
  loading: "Cargando...",
  something_went_wrong: "Algo sali\xF3 mal",
  no_supported_wallets: "Todav\xEDa no hay billeteras compatibles",
  no_wallets_found: "No se encontraron billeteras"
}, e1 = {
  choose_preferred_wallet: "Choisissez votre portefeuille pr\xE9f\xE9r\xE9",
  connect_mobile_wallet: "Se connecter au portefeuille mobile",
  scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
  connect: "Se connecter",
  qrcode: "QR Code",
  mobile: "Mobile",
  desktop: "Desktop",
  copy_to_clipboard: "Copier",
  copied_to_clipboard: "Copi\xE9!",
  connect_with: "Connectez-vous \xE0 l'aide de",
  loading: "Chargement...",
  something_went_wrong: "Quelque chose a mal tourn\xE9",
  no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
  no_wallets_found: "Aucun portefeuille trouv\xE9"
}, t1 = {
  choose_preferred_wallet: "\uC6D0\uD558\uB294 \uC9C0\uAC11\uC744 \uC120\uD0DD\uD558\uC138\uC694",
  connect_mobile_wallet: "\uBAA8\uBC14\uC77C \uC9C0\uAC11\uACFC \uC5F0\uACB0",
  scan_qrcode_with_wallet: "WalletConnect \uC9C0\uC6D0 \uC9C0\uAC11\uC5D0\uC11C QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD558\uC138\uC694",
  connect: "\uC5F0\uACB0",
  qrcode: "QR \uCF54\uB4DC",
  mobile: "\uBAA8\uBC14\uC77C",
  desktop: "\uB370\uC2A4\uD06C\uD0D1",
  copy_to_clipboard: "\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",
  copied_to_clipboard: "\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",
  connect_with: "\uC640 \uC5F0\uACB0\uD558\uB2E4",
  loading: "\uB85C\uB4DC \uC911...",
  something_went_wrong: "\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",
  no_supported_wallets: "\uC544\uC9C1 \uC9C0\uC6D0\uB418\uB294 \uC9C0\uAC11\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
  no_wallets_found: "\uC9C0\uAC11\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
}, r1 = {
  choose_preferred_wallet: "Escolha sua carteira preferida",
  connect_mobile_wallet: "Conectar-se \xE0 carteira m\xF3vel",
  scan_qrcode_with_wallet: "Ler o c\xF3digo QR com uma carteira compat\xEDvel com WalletConnect",
  connect: "Conectar",
  qrcode: "C\xF3digo QR",
  mobile: "M\xF3vel",
  desktop: "Desktop",
  copy_to_clipboard: "Copiar",
  copied_to_clipboard: "Copiado!",
  connect_with: "Ligar por meio de",
  loading: "Carregamento...",
  something_went_wrong: "Algo correu mal",
  no_supported_wallets: "Ainda n\xE3o h\xE1 carteiras suportadas",
  no_wallets_found: "Nenhuma carteira encontrada"
}, n1 = {
  choose_preferred_wallet: "\u9009\u62E9\u4F60\u7684\u94B1\u5305",
  connect_mobile_wallet: "\u8FDE\u63A5\u81F3\u79FB\u52A8\u7AEF\u94B1\u5305",
  scan_qrcode_with_wallet: "\u4F7F\u7528\u517C\u5BB9 WalletConnect \u7684\u94B1\u5305\u626B\u63CF\u4E8C\u7EF4\u7801",
  connect: "\u8FDE\u63A5",
  qrcode: "\u4E8C\u7EF4\u7801",
  mobile: "\u79FB\u52A8",
  desktop: "\u684C\u9762",
  copy_to_clipboard: "\u590D\u5236\u5230\u526A\u8D34\u677F",
  copied_to_clipboard: "\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F\uFF01",
  connect_with: "\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8FDE\u63A5",
  loading: "\u6B63\u5728\u52A0\u8F7D...",
  something_went_wrong: "\u51FA\u4E86\u95EE\u9898",
  no_supported_wallets: "\u76EE\u524D\u8FD8\u6CA1\u6709\u652F\u6301\u7684\u94B1\u5305",
  no_wallets_found: "\u6CA1\u6709\u627E\u5230\u94B1\u5305"
}, i1 = {
  choose_preferred_wallet: "\u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
  connect_mobile_wallet: "\u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0648\u0635\u0644 \u0634\u0648\u06CC\u062F",
  scan_qrcode_with_wallet: "\u06A9\u062F QR \u0631\u0627 \u0628\u0627 \u06CC\u06A9 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06A9\u0646 \u06A9\u0646\u06CC\u062F",
  connect: "\u0627\u062A\u0635\u0627\u0644",
  qrcode: "\u06A9\u062F QR",
  mobile: "\u0633\u06CC\u0627\u0631",
  desktop: "\u062F\u0633\u06A9\u062A\u0627\u067E",
  copy_to_clipboard: "\u06A9\u067E\u06CC \u0628\u0647 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F",
  copied_to_clipboard: "\u062F\u0631 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F \u06A9\u067E\u06CC \u0634\u062F!",
  connect_with: "\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627",
  loading: "...\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
  something_went_wrong: "\u0645\u0634\u06A9\u0644\u06CC \u067E\u06CC\u0634 \u0622\u0645\u062F",
  no_supported_wallets: "\u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
  no_wallets_found: "\u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F"
}, zo = {
  de: Zd,
  en: Qd,
  es: Xd,
  fr: e1,
  ko: t1,
  pt: r1,
  zh: n1,
  fa: i1
};
function o1() {
  var t = Je.getDocumentOrThrow(), e = t.getElementById(Wo);
  e && t.head.removeChild(e);
  var r = t.createElement("style");
  r.setAttribute("id", Wo), r.innerText = Od, t.head.appendChild(r);
}
function a1() {
  var t = Je.getDocumentOrThrow(), e = t.createElement("div");
  return e.setAttribute("id", fc), t.body.appendChild(e), e;
}
function pc() {
  var t = Je.getDocumentOrThrow(), e = t.getElementById(hc);
  e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout(function() {
    var r = t.getElementById(fc);
    r && t.body.removeChild(r);
  }, Pd));
}
function s1(t) {
  return function() {
    pc(), t && t();
  };
}
function c1() {
  var t = Je.getNavigatorOrThrow().language.split("-")[0] || "en";
  return zo[t] || zo.en;
}
function l1(t, e, r) {
  o1();
  var n = a1();
  ie.render(ie.createElement(Gd, {
    text: c1(),
    uri: t,
    onClose: s1(e),
    qrcodeModalOptions: r
  }), n);
}
function u1() {
  pc();
}
var gc = function() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
};
function f1(t, e, r) {
  console.log(t), gc() ? Td(t) : l1(t, e, r);
}
function h1() {
  gc() || u1();
}
var d1 = {
  open: f1,
  close: h1
}, p1 = d1, mc = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function o(d, v, m) {
    this.fn = d, this.context = v, this.once = m || !1;
  }
  function i(d, v, m, A, B) {
    if (typeof m != "function")
      throw new TypeError("The listener must be a function");
    var L = new o(m, A || d, B), P = r ? r + v : v;
    return d._events[P] ? d._events[P].fn ? d._events[P] = [d._events[P], L] : d._events[P].push(L) : (d._events[P] = L, d._eventsCount++), d;
  }
  function l(d, v) {
    --d._eventsCount === 0 ? d._events = new n() : delete d._events[v];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var v = [], m, A;
    if (this._eventsCount === 0)
      return v;
    for (A in m = this._events)
      e.call(m, A) && v.push(r ? A.slice(1) : A);
    return Object.getOwnPropertySymbols ? v.concat(Object.getOwnPropertySymbols(m)) : v;
  }, s.prototype.listeners = function(v) {
    var m = r ? r + v : v, A = this._events[m];
    if (!A)
      return [];
    if (A.fn)
      return [A.fn];
    for (var B = 0, L = A.length, P = new Array(L); B < L; B++)
      P[B] = A[B].fn;
    return P;
  }, s.prototype.listenerCount = function(v) {
    var m = r ? r + v : v, A = this._events[m];
    return A ? A.fn ? 1 : A.length : 0;
  }, s.prototype.emit = function(v, m, A, B, L, P) {
    var z = r ? r + v : v;
    if (!this._events[z])
      return !1;
    var M = this._events[z], I = arguments.length, R, T;
    if (M.fn) {
      switch (M.once && this.removeListener(v, M.fn, void 0, !0), I) {
        case 1:
          return M.fn.call(M.context), !0;
        case 2:
          return M.fn.call(M.context, m), !0;
        case 3:
          return M.fn.call(M.context, m, A), !0;
        case 4:
          return M.fn.call(M.context, m, A, B), !0;
        case 5:
          return M.fn.call(M.context, m, A, B, L), !0;
        case 6:
          return M.fn.call(M.context, m, A, B, L, P), !0;
      }
      for (T = 1, R = new Array(I - 1); T < I; T++)
        R[T - 1] = arguments[T];
      M.fn.apply(M.context, R);
    } else {
      var U = M.length, Y;
      for (T = 0; T < U; T++)
        switch (M[T].once && this.removeListener(v, M[T].fn, void 0, !0), I) {
          case 1:
            M[T].fn.call(M[T].context);
            break;
          case 2:
            M[T].fn.call(M[T].context, m);
            break;
          case 3:
            M[T].fn.call(M[T].context, m, A);
            break;
          case 4:
            M[T].fn.call(M[T].context, m, A, B);
            break;
          default:
            if (!R)
              for (Y = 1, R = new Array(I - 1); Y < I; Y++)
                R[Y - 1] = arguments[Y];
            M[T].fn.apply(M[T].context, R);
        }
    }
    return !0;
  }, s.prototype.on = function(v, m, A) {
    return i(this, v, m, A, !1);
  }, s.prototype.once = function(v, m, A) {
    return i(this, v, m, A, !0);
  }, s.prototype.removeListener = function(v, m, A, B) {
    var L = r ? r + v : v;
    if (!this._events[L])
      return this;
    if (!m)
      return l(this, L), this;
    var P = this._events[L];
    if (P.fn)
      P.fn === m && (!B || P.once) && (!A || P.context === A) && l(this, L);
    else {
      for (var z = 0, M = [], I = P.length; z < I; z++)
        (P[z].fn !== m || B && !P[z].once || A && P[z].context !== A) && M.push(P[z]);
      M.length ? this._events[L] = M.length === 1 ? M[0] : M : l(this, L);
    }
    return this;
  }, s.prototype.removeAllListeners = function(v) {
    var m;
    return v ? (m = r ? r + v : v, this._events[m] && l(this, m)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, t.exports = s;
})(mc);
const g1 = mc.exports;
var vc = {}, qi = {}, or = {}, ni = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
(function(t, e) {
  (function(r) {
    var n = e && !e.nodeType && e, o = t && !t.nodeType && t, i = typeof Ke == "object" && Ke;
    (i.global === i || i.window === i || i.self === i) && (r = i);
    var l, s = 2147483647, d = 36, v = 1, m = 26, A = 38, B = 700, L = 72, P = 128, z = "-", M = /^xn--/, I = /[^\x20-\x7E]/, R = /[\x2E\u3002\uFF0E\uFF61]/g, T = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, U = d - v, Y = Math.floor, Q = String.fromCharCode, ce;
    function oe(_) {
      throw RangeError(T[_]);
    }
    function pe(_, H) {
      for (var q = _.length, X = []; q--; )
        X[q] = H(_[q]);
      return X;
    }
    function E(_, H) {
      var q = _.split("@"), X = "";
      q.length > 1 && (X = q[0] + "@", _ = q[1]), _ = _.replace(R, ".");
      var re = _.split("."), p = pe(re, H).join(".");
      return X + p;
    }
    function a(_) {
      for (var H = [], q = 0, X = _.length, re, p; q < X; )
        re = _.charCodeAt(q++), re >= 55296 && re <= 56319 && q < X ? (p = _.charCodeAt(q++), (p & 64512) == 56320 ? H.push(((re & 1023) << 10) + (p & 1023) + 65536) : (H.push(re), q--)) : H.push(re);
      return H;
    }
    function h(_) {
      return pe(_, function(H) {
        var q = "";
        return H > 65535 && (H -= 65536, q += Q(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), q += Q(H), q;
      }).join("");
    }
    function g(_) {
      return _ - 48 < 10 ? _ - 22 : _ - 65 < 26 ? _ - 65 : _ - 97 < 26 ? _ - 97 : d;
    }
    function y(_, H) {
      return _ + 22 + 75 * (_ < 26) - ((H != 0) << 5);
    }
    function x(_, H, q) {
      var X = 0;
      for (_ = q ? Y(_ / B) : _ >> 1, _ += Y(_ / H); _ > U * m >> 1; X += d)
        _ = Y(_ / U);
      return Y(X + (U + 1) * _ / (_ + A));
    }
    function k(_) {
      var H = [], q = _.length, X, re = 0, p = P, F = L, W, D, K, ae, ee, Z, he, te, le;
      for (W = _.lastIndexOf(z), W < 0 && (W = 0), D = 0; D < W; ++D)
        _.charCodeAt(D) >= 128 && oe("not-basic"), H.push(_.charCodeAt(D));
      for (K = W > 0 ? W + 1 : 0; K < q; ) {
        for (ae = re, ee = 1, Z = d; K >= q && oe("invalid-input"), he = g(_.charCodeAt(K++)), (he >= d || he > Y((s - re) / ee)) && oe("overflow"), re += he * ee, te = Z <= F ? v : Z >= F + m ? m : Z - F, !(he < te); Z += d)
          le = d - te, ee > Y(s / le) && oe("overflow"), ee *= le;
        X = H.length + 1, F = x(re - ae, X, ae == 0), Y(re / X) > s - p && oe("overflow"), p += Y(re / X), re %= X, H.splice(re++, 0, p);
      }
      return h(H);
    }
    function N(_) {
      var H, q, X, re, p, F, W, D, K, ae, ee, Z = [], he, te, le, w;
      for (_ = a(_), he = _.length, H = P, q = 0, p = L, F = 0; F < he; ++F)
        ee = _[F], ee < 128 && Z.push(Q(ee));
      for (X = re = Z.length, re && Z.push(z); X < he; ) {
        for (W = s, F = 0; F < he; ++F)
          ee = _[F], ee >= H && ee < W && (W = ee);
        for (te = X + 1, W - H > Y((s - q) / te) && oe("overflow"), q += (W - H) * te, H = W, F = 0; F < he; ++F)
          if (ee = _[F], ee < H && ++q > s && oe("overflow"), ee == H) {
            for (D = q, K = d; ae = K <= p ? v : K >= p + m ? m : K - p, !(D < ae); K += d)
              w = D - ae, le = d - ae, Z.push(
                Q(y(ae + w % le, 0))
              ), D = Y(w / le);
            Z.push(Q(y(D, 0))), p = x(q, te, X == re), q = 0, ++X;
          }
        ++q, ++H;
      }
      return Z.join("");
    }
    function b(_) {
      return E(_, function(H) {
        return M.test(H) ? k(H.slice(4).toLowerCase()) : H;
      });
    }
    function c(_) {
      return E(_, function(H) {
        return I.test(H) ? "xn--" + N(H) : H;
      });
    }
    if (l = {
      version: "1.3.2",
      ucs2: {
        decode: a,
        encode: h
      },
      decode: k,
      encode: N,
      toASCII: c,
      toUnicode: b
    }, n && o)
      if (t.exports == n)
        o.exports = l;
      else
        for (ce in l)
          l.hasOwnProperty(ce) && (n[ce] = l[ce]);
    else
      r.punycode = l;
  })(Ke);
})(ni, ni.exports);
var m1 = {
  isString: function(t) {
    return typeof t == "string";
  },
  isObject: function(t) {
    return typeof t == "object" && t !== null;
  },
  isNull: function(t) {
    return t === null;
  },
  isNullOrUndefined: function(t) {
    return t == null;
  }
}, wr = {};
function v1(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var _1 = function(t, e, r, n) {
  e = e || "&", r = r || "=";
  var o = {};
  if (typeof t != "string" || t.length === 0)
    return o;
  var i = /\+/g;
  t = t.split(e);
  var l = 1e3;
  n && typeof n.maxKeys == "number" && (l = n.maxKeys);
  var s = t.length;
  l > 0 && s > l && (s = l);
  for (var d = 0; d < s; ++d) {
    var v = t[d].replace(i, "%20"), m = v.indexOf(r), A, B, L, P;
    m >= 0 ? (A = v.substr(0, m), B = v.substr(m + 1)) : (A = v, B = ""), L = decodeURIComponent(A), P = decodeURIComponent(B), v1(o, L) ? Array.isArray(o[L]) ? o[L].push(P) : o[L] = [o[L], P] : o[L] = P;
  }
  return o;
}, fr = function(t) {
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
}, y1 = function(t, e, r, n) {
  return e = e || "&", r = r || "=", t === null && (t = void 0), typeof t == "object" ? Object.keys(t).map(function(o) {
    var i = encodeURIComponent(fr(o)) + r;
    return Array.isArray(t[o]) ? t[o].map(function(l) {
      return i + encodeURIComponent(fr(l));
    }).join(e) : i + encodeURIComponent(fr(t[o]));
  }).join(e) : n ? encodeURIComponent(fr(n)) + r + encodeURIComponent(fr(t)) : "";
};
wr.decode = wr.parse = _1;
wr.encode = wr.stringify = y1;
var w1 = ni.exports, pt = m1;
or.parse = Er;
or.resolve = I1;
or.resolveObject = T1;
or.format = R1;
or.Url = nt;
function nt() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var b1 = /^([a-z0-9.+-]+:)/i, x1 = /:[0-9]*$/, C1 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, M1 = ["<", ">", '"', "`", " ", "\r", `
`, "	"], E1 = ["{", "}", "|", "\\", "^", "`"].concat(M1), ii = ["'"].concat(E1), Vo = ["%", "/", "?", ";", "#"].concat(ii), Ko = ["/", "?", "#"], S1 = 255, Yo = /^[+a-z0-9A-Z_-]{0,63}$/, k1 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, A1 = {
  javascript: !0,
  "javascript:": !0
}, oi = {
  javascript: !0,
  "javascript:": !0
}, Vt = {
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
}, ai = wr;
function Er(t, e, r) {
  if (t && pt.isObject(t) && t instanceof nt)
    return t;
  var n = new nt();
  return n.parse(t, e, r), n;
}
nt.prototype.parse = function(t, e, r) {
  if (!pt.isString(t))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
  var n = t.indexOf("?"), o = n !== -1 && n < t.indexOf("#") ? "?" : "#", i = t.split(o), l = /\\/g;
  i[0] = i[0].replace(l, "/"), t = i.join(o);
  var s = t;
  if (s = s.trim(), !r && t.split("#").length === 1) {
    var d = C1.exec(s);
    if (d)
      return this.path = s, this.href = s, this.pathname = d[1], d[2] ? (this.search = d[2], e ? this.query = ai.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
  }
  var v = b1.exec(s);
  if (v) {
    v = v[0];
    var m = v.toLowerCase();
    this.protocol = m, s = s.substr(v.length);
  }
  if (r || v || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var A = s.substr(0, 2) === "//";
    A && !(v && oi[v]) && (s = s.substr(2), this.slashes = !0);
  }
  if (!oi[v] && (A || v && !Vt[v])) {
    for (var B = -1, L = 0; L < Ko.length; L++) {
      var P = s.indexOf(Ko[L]);
      P !== -1 && (B === -1 || P < B) && (B = P);
    }
    var z, M;
    B === -1 ? M = s.lastIndexOf("@") : M = s.lastIndexOf("@", B), M !== -1 && (z = s.slice(0, M), s = s.slice(M + 1), this.auth = decodeURIComponent(z)), B = -1;
    for (var L = 0; L < Vo.length; L++) {
      var P = s.indexOf(Vo[L]);
      P !== -1 && (B === -1 || P < B) && (B = P);
    }
    B === -1 && (B = s.length), this.host = s.slice(0, B), s = s.slice(B), this.parseHost(), this.hostname = this.hostname || "";
    var I = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!I)
      for (var R = this.hostname.split(/\./), L = 0, T = R.length; L < T; L++) {
        var U = R[L];
        if (!!U && !U.match(Yo)) {
          for (var Y = "", Q = 0, ce = U.length; Q < ce; Q++)
            U.charCodeAt(Q) > 127 ? Y += "x" : Y += U[Q];
          if (!Y.match(Yo)) {
            var oe = R.slice(0, L), pe = R.slice(L + 1), E = U.match(k1);
            E && (oe.push(E[1]), pe.unshift(E[2])), pe.length && (s = "/" + pe.join(".") + s), this.hostname = oe.join(".");
            break;
          }
        }
      }
    this.hostname.length > S1 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), I || (this.hostname = w1.toASCII(this.hostname));
    var a = this.port ? ":" + this.port : "", h = this.hostname || "";
    this.host = h + a, this.href += this.host, I && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), s[0] !== "/" && (s = "/" + s));
  }
  if (!A1[m])
    for (var L = 0, T = ii.length; L < T; L++) {
      var g = ii[L];
      if (s.indexOf(g) !== -1) {
        var y = encodeURIComponent(g);
        y === g && (y = escape(g)), s = s.split(g).join(y);
      }
    }
  var x = s.indexOf("#");
  x !== -1 && (this.hash = s.substr(x), s = s.slice(0, x));
  var k = s.indexOf("?");
  if (k !== -1 ? (this.search = s.substr(k), this.query = s.substr(k + 1), e && (this.query = ai.parse(this.query)), s = s.slice(0, k)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), Vt[m] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var a = this.pathname || "", N = this.search || "";
    this.path = a + N;
  }
  return this.href = this.format(), this;
};
function R1(t) {
  return pt.isString(t) && (t = Er(t)), t instanceof nt ? t.format() : nt.prototype.format.call(t);
}
nt.prototype.format = function() {
  var t = this.auth || "";
  t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
  var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", o = !1, i = "";
  this.host ? o = t + this.host : this.hostname && (o = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && pt.isObject(this.query) && Object.keys(this.query).length && (i = ai.stringify(this.query));
  var l = this.search || i && "?" + i || "";
  return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || Vt[e]) && o !== !1 ? (o = "//" + (o || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : o || (o = ""), n && n.charAt(0) !== "#" && (n = "#" + n), l && l.charAt(0) !== "?" && (l = "?" + l), r = r.replace(/[?#]/g, function(s) {
    return encodeURIComponent(s);
  }), l = l.replace("#", "%23"), e + o + r + l + n;
};
function I1(t, e) {
  return Er(t, !1, !0).resolve(e);
}
nt.prototype.resolve = function(t) {
  return this.resolveObject(Er(t, !1, !0)).format();
};
function T1(t, e) {
  return t ? Er(t, !1, !0).resolveObject(e) : e;
}
nt.prototype.resolveObject = function(t) {
  if (pt.isString(t)) {
    var e = new nt();
    e.parse(t, !1, !0), t = e;
  }
  for (var r = new nt(), n = Object.keys(this), o = 0; o < n.length; o++) {
    var i = n[o];
    r[i] = this[i];
  }
  if (r.hash = t.hash, t.href === "")
    return r.href = r.format(), r;
  if (t.slashes && !t.protocol) {
    for (var l = Object.keys(t), s = 0; s < l.length; s++) {
      var d = l[s];
      d !== "protocol" && (r[d] = t[d]);
    }
    return Vt[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
  }
  if (t.protocol && t.protocol !== r.protocol) {
    if (!Vt[t.protocol]) {
      for (var v = Object.keys(t), m = 0; m < v.length; m++) {
        var A = v[m];
        r[A] = t[A];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = t.protocol, !t.host && !oi[t.protocol]) {
      for (var T = (t.pathname || "").split("/"); T.length && !(t.host = T.shift()); )
        ;
      t.host || (t.host = ""), t.hostname || (t.hostname = ""), T[0] !== "" && T.unshift(""), T.length < 2 && T.unshift(""), r.pathname = T.join("/");
    } else
      r.pathname = t.pathname;
    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
      var B = r.pathname || "", L = r.search || "";
      r.path = B + L;
    }
    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
  }
  var P = r.pathname && r.pathname.charAt(0) === "/", z = t.host || t.pathname && t.pathname.charAt(0) === "/", M = z || P || r.host && t.pathname, I = M, R = r.pathname && r.pathname.split("/") || [], T = t.pathname && t.pathname.split("/") || [], U = r.protocol && !Vt[r.protocol];
  if (U && (r.hostname = "", r.port = null, r.host && (R[0] === "" ? R[0] = r.host : R.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && (T[0] === "" ? T[0] = t.host : T.unshift(t.host)), t.host = null), M = M && (T[0] === "" || R[0] === "")), z)
    r.host = t.host || t.host === "" ? t.host : r.host, r.hostname = t.hostname || t.hostname === "" ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, R = T;
  else if (T.length)
    R || (R = []), R.pop(), R = R.concat(T), r.search = t.search, r.query = t.query;
  else if (!pt.isNullOrUndefined(t.search)) {
    if (U) {
      r.hostname = r.host = R.shift();
      var Y = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
      Y && (r.auth = Y.shift(), r.host = r.hostname = Y.shift());
    }
    return r.search = t.search, r.query = t.query, (!pt.isNull(r.pathname) || !pt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!R.length)
    return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var Q = R.slice(-1)[0], ce = (r.host || t.host || R.length > 1) && (Q === "." || Q === "..") || Q === "", oe = 0, pe = R.length; pe >= 0; pe--)
    Q = R[pe], Q === "." ? R.splice(pe, 1) : Q === ".." ? (R.splice(pe, 1), oe++) : oe && (R.splice(pe, 1), oe--);
  if (!M && !I)
    for (; oe--; oe)
      R.unshift("..");
  M && R[0] !== "" && (!R[0] || R[0].charAt(0) !== "/") && R.unshift(""), ce && R.join("/").substr(-1) !== "/" && R.push("");
  var E = R[0] === "" || R[0] && R[0].charAt(0) === "/";
  if (U) {
    r.hostname = r.host = E ? "" : R.length ? R.shift() : "";
    var Y = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
    Y && (r.auth = Y.shift(), r.host = r.hostname = Y.shift());
  }
  return M = M || r.host && R.length, M && !E && R.unshift(""), R.length ? r.pathname = R.join("/") : (r.pathname = null, r.path = null), (!pt.isNull(r.pathname) || !pt.isNull(r.search)) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
};
nt.prototype.parseHost = function() {
  var t = this.host, e = x1.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
var O1 = function() {
  function t(e) {
    this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0;
  }
  return t;
}();
Hi.ProgressEvent = O1;
var ar = {}, ln = Ke && Ke.__extends || function() {
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
Object.defineProperty(ar, "__esModule", { value: !0 });
var B1 = function(t) {
  ln(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
ar.SecurityError = B1;
var N1 = function(t) {
  ln(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
ar.InvalidStateError = N1;
var L1 = function(t) {
  ln(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
ar.NetworkError = L1;
var P1 = function(t) {
  ln(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(Error);
ar.SyntaxError = P1;
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
var F1 = function() {
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
      for (var n = 0, o = this.listeners[r]; n < o.length; n++) {
        var i = o[n];
        i.call(this, e);
      }
    var l = this["on" + r];
    return l && l.call(this, e), !0;
  }, t;
}();
Sr.XMLHttpRequestEventTarget = F1;
var $i = {}, U1 = Ke && Ke.__extends || function() {
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
Object.defineProperty($i, "__esModule", { value: !0 });
var D1 = Sr, q1 = function(t) {
  U1(e, t);
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
        for (var n = new Buffer(r.byteLength), o = new Uint8Array(r), i = 0; i < r.byteLength; i++)
          n[i] = o[i];
        this._body = n;
      } else if (r.buffer && r.buffer instanceof ArrayBuffer) {
        for (var n = new Buffer(r.byteLength), l = r.byteOffset, o = new Uint8Array(r.buffer), i = 0; i < r.byteLength; i++)
          n[i] = o[i + l];
        this._body = n;
      } else
        throw new Error("Unsupported send() data " + r);
  }, e.prototype._finalizeHeaders = function(r, n) {
    this._contentType && !n["content-type"] && (r["Content-Type"] = this._contentType), this._body && (r["Content-Length"] = this._body.length.toString());
  }, e.prototype._startUpload = function(r) {
    this._body && r.write(this._body), r.end();
  }, e;
}(D1.XMLHttpRequestEventTarget);
$i.XMLHttpRequestUpload = q1;
var Ur = {};
(function() {
  function t(o, i, l, s) {
    return this instanceof t ? (this.domain = o || void 0, this.path = i || "/", this.secure = !!l, this.script = !!s, this) : new t(o, i, l, s);
  }
  t.All = Object.freeze(/* @__PURE__ */ Object.create(null)), Ur.CookieAccessInfo = t;
  function e(o, i, l) {
    return o instanceof e ? o : this instanceof e ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(l || "/"), this.explicit_path = !1, this.domain = i || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, o && this.parse(o, i, l), this) : new e(o, i, l);
  }
  Ur.Cookie = e, e.prototype.toString = function() {
    var i = [this.name + "=" + this.value];
    return this.expiration_date !== 1 / 0 && i.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && i.push("domain=" + this.domain), this.path && i.push("path=" + this.path), this.secure && i.push("secure"), this.noscript && i.push("httponly"), i.join("; ");
  }, e.prototype.toValueString = function() {
    return this.name + "=" + this.value;
  };
  var r = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
  e.prototype.parse = function(i, l, s) {
    if (this instanceof e) {
      var d = i.split(";").filter(function(L) {
        return !!L;
      }), v, m = d[0].match(/([^=]+)=([\s\S]*)/);
      if (!m) {
        console.warn("Invalid cookie header encountered. Header: '" + i + "'");
        return;
      }
      var A = m[1], B = m[2];
      if (typeof A != "string" || A.length === 0 || typeof B != "string") {
        console.warn("Unable to extract values from cookie header. Cookie: '" + i + "'");
        return;
      }
      for (this.name = A, this.value = B, v = 1; v < d.length; v += 1)
        switch (m = d[v].match(/([^=]+)(?:=([\s\S]*))?/), A = m[1].trim().toLowerCase(), B = m[2], A) {
          case "httponly":
            this.noscript = !0;
            break;
          case "expires":
            this.expiration_date = B ? Number(Date.parse(B)) : 1 / 0;
            break;
          case "path":
            this.path = B ? B.trim() : "", this.explicit_path = !0;
            break;
          case "domain":
            this.domain = B ? B.trim() : "", this.explicit_domain = !!this.domain;
            break;
          case "secure":
            this.secure = !0;
            break;
        }
      return this.explicit_path || (this.path = s || "/"), this.explicit_domain || (this.domain = l), this;
    }
    return new e().parse(i, l, s);
  }, e.prototype.matches = function(i) {
    return i === t.All ? !0 : !(this.noscript && i.script || this.secure && !i.secure || !this.collidesWith(i));
  }, e.prototype.collidesWith = function(i) {
    if (this.path && !i.path || this.domain && !i.domain || this.path && i.path.indexOf(this.path) !== 0 || this.explicit_path && i.path.indexOf(this.path) !== 0)
      return !1;
    var l = i.domain && i.domain.replace(/^[\.]/, ""), s = this.domain && this.domain.replace(/^[\.]/, "");
    if (s === l)
      return !0;
    if (s) {
      if (!this.explicit_domain)
        return !1;
      var d = l.indexOf(s);
      return !(d === -1 || d !== l.length - s.length);
    }
    return !0;
  };
  function n() {
    var o, i, l;
    return this instanceof n ? (o = /* @__PURE__ */ Object.create(null), this.setCookie = function(d, v, m) {
      var A, B;
      if (d = new e(d, v, m), A = d.expiration_date <= Date.now(), o[d.name] !== void 0) {
        for (i = o[d.name], B = 0; B < i.length; B += 1)
          if (l = i[B], l.collidesWith(d))
            return A ? (i.splice(B, 1), i.length === 0 && delete o[d.name], !1) : (i[B] = d, d);
        return A ? !1 : (i.push(d), d);
      }
      return A ? !1 : (o[d.name] = [d], o[d.name]);
    }, this.getCookie = function(d, v) {
      var m, A;
      if (i = o[d], !!i)
        for (A = 0; A < i.length; A += 1) {
          if (m = i[A], m.expiration_date <= Date.now()) {
            i.length === 0 && delete o[m.name];
            continue;
          }
          if (m.matches(v))
            return m;
        }
    }, this.getCookies = function(d) {
      var v = [], m, A;
      for (m in o)
        A = this.getCookie(m, d), A && v.push(A);
      return v.toString = function() {
        return v.join(":");
      }, v.toValueString = function() {
        return v.map(function(L) {
          return L.toValueString();
        }).join("; ");
      }, v;
    }, this) : new n();
  }
  Ur.CookieJar = n, n.prototype.setCookies = function(i, l, s) {
    i = Array.isArray(i) ? i : i.split(r);
    var d = [], v, m;
    for (i = i.map(function(A) {
      return new e(A, l, s);
    }), v = 0; v < i.length; v += 1)
      m = i[v], this.setCookie(m, l, s) && d.push(m);
    return d;
  };
})();
var H1 = Ke && Ke.__extends || function() {
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
}(), $1 = Ke && Ke.__assign || Object.assign || function(t) {
  for (var e, r = 1, n = arguments.length; r < n; r++) {
    e = arguments[r];
    for (var o in e)
      Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
  }
  return t;
};
Object.defineProperty(qi, "__esModule", { value: !0 });
var si = Qr, _c = Qr, Jo = Qr, Fn = or, Go = Hi, Lr = ar, j1 = Sr, Zo = $i, Qo = Ur, un = function(t) {
  H1(e, t);
  function e(r) {
    r === void 0 && (r = {});
    var n = t.call(this) || this;
    return n.UNSENT = e.UNSENT, n.OPENED = e.OPENED, n.HEADERS_RECEIVED = e.HEADERS_RECEIVED, n.LOADING = e.LOADING, n.DONE = e.DONE, n.onreadystatechange = null, n.readyState = e.UNSENT, n.response = null, n.responseText = "", n.responseType = "", n.status = 0, n.statusText = "", n.timeout = 0, n.upload = new Zo.XMLHttpRequestUpload(), n.responseUrl = "", n.withCredentials = !1, n._method = null, n._url = null, n._sync = !1, n._headers = {}, n._loweredHeaders = {}, n._mimeOverride = null, n._request = null, n._response = null, n._responseParts = null, n._responseHeaders = null, n._aborting = null, n._error = null, n._loadedBytes = 0, n._totalBytes = 0, n._lengthComputable = !1, n._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }, n._restrictedHeaders = {
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
    }, n._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }, n._userAgent = "Mozilla/5.0 (" + Jo.type() + " " + Jo.arch() + ") node.js/" + process.versions.node + " v8/" + process.versions.v8, n._anonymous = r.anon || !1, n;
  }
  return e.prototype.open = function(r, n, o, i, l) {
    if (o === void 0 && (o = !0), r = r.toUpperCase(), this._restrictedMethods[r])
      throw new e.SecurityError("HTTP method " + r + " is not allowed in XHR");
    var s = this._parseUrl(n, i, l);
    this.readyState === e.HEADERS_RECEIVED || (this.readyState, e.LOADING), this._method = r, this._url = s, this._sync = !o, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(e.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1;
  }, e.prototype.setRequestHeader = function(r, n) {
    if (this.readyState !== e.OPENED)
      throw new e.InvalidStateError("XHR readyState must be OPENED");
    var o = r.toLowerCase();
    if (this._restrictedHeaders[o] || /^sec-/.test(o) || /^proxy-/.test(o)) {
      console.warn('Refused to set unsafe header "' + r + '"');
      return;
    }
    n = n.toString(), this._loweredHeaders[o] != null ? (r = this._loweredHeaders[o], this._headers[r] = this._headers[r] + ", " + n) : (this._loweredHeaders[o] = r, this._headers[r] = n);
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
        var n = Fn.parse(r.baseUrl, !1, !0);
        if (!n.protocol)
          throw new e.SyntaxError("baseUrl must be an absolute URL");
      }
      this.nodejsBaseUrl = r.baseUrl;
    }
  }, e.nodejsSet = function(r) {
    e.prototype.nodejsSet(r);
  }, e.prototype._setReadyState = function(r) {
    this.readyState = r, this.dispatchEvent(new Go.ProgressEvent("readystatechange"));
  }, e.prototype._sendFile = function(r) {
    throw new Error("Protocol file: not implemented");
  }, e.prototype._sendHttp = function(r) {
    if (this._sync)
      throw new Error("Synchronous XHR processing not implemented");
    r && (this._method === "GET" || this._method === "HEAD") ? (console.warn("Discarding entity body for " + this._method + " requests"), r = null) : r = r || "", this.upload._setData(r), this._finalizeHeaders(), this._sendHxxpRequest();
  }, e.prototype._sendHxxpRequest = function() {
    var r = this;
    if (this.withCredentials) {
      var n = e.cookieJar.getCookies(Qo.CookieAccessInfo(this._url.hostname, this._url.pathname, this._url.protocol === "https:")).toValueString();
      this._headers.cookie = this._headers.cookie2 = n;
    }
    var o = this._url.protocol === "http:" ? [si, this.nodejsHttpAgent] : [_c, this.nodejsHttpsAgent], i = o[0], l = o[1], s = i.request.bind(i), d = s({
      hostname: this._url.hostname,
      port: +this._url.port,
      path: this._url.path,
      auth: this._url.auth,
      method: this._method,
      headers: this._headers,
      agent: l
    });
    this._request = d, this.timeout && d.setTimeout(this.timeout, function() {
      return r._onHttpTimeout(d);
    }), d.on("response", function(v) {
      return r._onHttpResponse(d, v);
    }), d.on("error", function(v) {
      return r._onHttpRequestError(d, v);
    }), this.upload._startUpload(d), this._request === d && this._dispatchProgress("loadstart");
  }, e.prototype._finalizeHeaders = function() {
    this._headers = $1({}, this._headers, { Connection: "keep-alive", Host: this._url.host, "User-Agent": this._userAgent }, this._anonymous ? { Referer: "about:blank" } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
  }, e.prototype._onHttpResponse = function(r, n) {
    var o = this;
    if (this._request === r) {
      if (this.withCredentials && (n.headers["set-cookie"] || n.headers["set-cookie2"]) && e.cookieJar.setCookies(n.headers["set-cookie"] || n.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(n.statusCode) >= 0) {
        this._url = this._parseUrl(n.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), this._headers["Content-Type"] != null && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), this._sendHxxpRequest();
        return;
      }
      this._response = n, this._response.on("data", function(l) {
        return o._onHttpResponseData(n, l);
      }), this._response.on("end", function() {
        return o._onHttpResponseEnd(n);
      }), this._response.on("close", function() {
        return o._onHttpResponseClose(n);
      }), this.responseUrl = this._url.href.split("#")[0], this.status = n.statusCode, this.statusText = si.STATUS_CODES[this.status], this._parseResponseHeaders(n);
      var i = this._responseHeaders["content-length"] || "";
      this._totalBytes = +i, this._lengthComputable = !!i, this._setReadyState(e.HEADERS_RECEIVED);
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
  }, e.prototype._parseUrl = function(r, n, o) {
    var i = this.nodejsBaseUrl == null ? r : Fn.resolve(this.nodejsBaseUrl, r), l = Fn.parse(i, !1, !0);
    l.hash = null;
    var s = (l.auth || "").split(":"), d = s[0], v = s[1];
    return (d || v || n || o) && (l.auth = (n || d || "") + ":" + (o || v || "")), l;
  }, e.prototype._parseResponseHeaders = function(r) {
    this._responseHeaders = {};
    for (var n in r.headers) {
      var o = n.toLowerCase();
      this._privateHeaders[o] || (this._responseHeaders[o] = r.headers[n]);
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
        for (var n = new ArrayBuffer(r.length), o = new Uint8Array(n), i = 0; i < r.length; i++)
          o[i] = r[i];
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
  }, e.ProgressEvent = Go.ProgressEvent, e.InvalidStateError = Lr.InvalidStateError, e.NetworkError = Lr.NetworkError, e.SecurityError = Lr.SecurityError, e.SyntaxError = Lr.SyntaxError, e.XMLHttpRequestUpload = Zo.XMLHttpRequestUpload, e.UNSENT = 0, e.OPENED = 1, e.HEADERS_RECEIVED = 2, e.LOADING = 3, e.DONE = 4, e.cookieJar = Qo.CookieJar(), e;
}(j1.XMLHttpRequestEventTarget);
qi.XMLHttpRequest = un;
un.prototype.nodejsHttpAgent = si.globalAgent;
un.prototype.nodejsHttpsAgent = _c.globalAgent;
un.prototype.nodejsBaseUrl = null;
(function(t) {
  function e(n) {
    for (var o in n)
      t.hasOwnProperty(o) || (t[o] = n[o]);
  }
  Object.defineProperty(t, "__esModule", { value: !0 }), e(qi);
  var r = Sr;
  t.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget;
})(vc);
const W1 = Na("XMLHttpRequest") || vc.XMLHttpRequest;
class z1 extends g1 {
  constructor(e) {
    super(), this.url = e;
  }
  formatError(e, r, n = -1) {
    return {
      error: { message: r, code: n },
      id: e.id,
      jsonrpc: e.jsonrpc
    };
  }
  send(e, r) {
    return new Promise((n) => {
      if (e.method === "eth_subscribe") {
        const s = this.formatError(e, "Subscriptions are not supported by this HTTP endpoint");
        return this.emit("error", s), n(s);
      }
      const o = new W1();
      let i = !1;
      const l = (s, d) => {
        if (!i)
          if (o.abort(), i = !0, r)
            r(s, d);
          else {
            const { id: v, jsonrpc: m } = e, A = s ? { id: v, jsonrpc: m, error: { message: s.message, code: s.code } } : { id: v, jsonrpc: m, result: d };
            this.emit("payload", A), n(A);
          }
      };
      o.open("POST", this.url, !0), o.setRequestHeader("Content-Type", "application/json"), o.timeout = 60 * 1e3, o.onerror = l, o.ontimeout = l, o.onreadystatechange = () => {
        if (o.readyState === 4)
          try {
            const s = JSON.parse(o.responseText);
            l(s.error, s.result);
          } catch (s) {
            l(s);
          }
      }, o.send(JSON.stringify(e));
    });
  }
}
const V1 = require("web3-provider-engine"), K1 = require("web3-provider-engine/subproviders/cache"), Y1 = require("web3-provider-engine/subproviders/fixture"), J1 = require("web3-provider-engine/subproviders/filters"), G1 = require("web3-provider-engine/subproviders/hooked-wallet"), Z1 = require("web3-provider-engine/subproviders/nonce-tracker"), Q1 = require("web3-provider-engine/subproviders/subscriptions");
class Xo extends V1 {
  constructor(e) {
    if (super({ pollingInterval: e.pollingInterval || 8e3 }), this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModal = p1, this.qrcodeModalOptions = void 0, this.rpc = null, this.infuraId = "", this.http = null, this.isConnecting = !1, this.connected = !1, this.connectCallbacks = [], this.accounts = [], this.chainId = 1, this.rpcUrl = "", this.enable = async () => {
      const r = await this.getWalletConnector();
      if (r)
        return this.start(), this.subscribeWalletConnector(), r.accounts;
      throw new Error("Failed to connect to WalleConnect");
    }, this.request = async (r) => this.send(r), this.send = async (r, n) => {
      var o;
      if (typeof r == "string") {
        const i = r;
        let l = n;
        return i === "personal_sign" && (l = $r(l)), this.sendAsyncPromise(i, l);
      }
      if (r = Object.assign({ id: Wn(), jsonrpc: "2.0" }, r), r.method === "personal_sign" && (r.params = $r(r.params)), n) {
        this.sendAsync(r, n);
        return;
      }
      if (r.method === "eth_signTypedData_v4" && ((o = this.walletMeta) === null || o === void 0 ? void 0 : o.name) === "MetaMask") {
        const { result: i } = await this.handleOtherRequests(r);
        return i;
      } else
        return this.sendAsyncPromise(r.method, r.params);
    }, this.onConnect = (r) => {
      this.connectCallbacks.push(r);
    }, this.triggerConnect = (r) => {
      this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach((n) => n(r));
    }, this.bridge = e.connector ? e.connector.bridge : e.bridge || "https://bridge.walletconnect.org", this.qrcode = typeof e.qrcode > "u" || e.qrcode !== !1, this.qrcodeModal = e.qrcodeModal || this.qrcodeModal, this.qrcodeModalOptions = e.qrcodeModalOptions, this.wc = e.connector || new Xh({
      bridge: this.bridge,
      qrcodeModal: this.qrcode ? this.qrcodeModal : void 0,
      qrcodeModalOptions: this.qrcodeModalOptions,
      storageId: e == null ? void 0 : e.storageId,
      signingMethods: e == null ? void 0 : e.signingMethods,
      clientMeta: e == null ? void 0 : e.clientMeta
    }), this.rpc = e.rpc || null, !this.rpc && (!e.infuraId || typeof e.infuraId != "string" || !e.infuraId.trim()))
      throw new Error("Missing one of the required parameters: rpc or infuraId");
    this.infuraId = e.infuraId || "", this.chainId = (e == null ? void 0 : e.chainId) || this.chainId, this.initialize();
  }
  get isWalletConnect() {
    return !0;
  }
  get connector() {
    return this.wc;
  }
  get walletMeta() {
    return this.wc.peerMeta;
  }
  async disconnect() {
    this.close();
  }
  async close() {
    await (await this.getWalletConnector({ disableSessionCreation: !0 })).killSession(), await this.onDisconnect();
  }
  async handleRequest(e) {
    try {
      let r, n = null;
      const o = await this.getWalletConnector();
      switch (e.method) {
        case "wc_killSession":
          await this.close(), n = null;
          break;
        case "eth_accounts":
          n = o.accounts;
          break;
        case "eth_coinbase":
          n = o.accounts[0];
          break;
        case "eth_chainId":
          n = o.chainId;
          break;
        case "net_version":
          n = o.chainId;
          break;
        case "eth_uninstallFilter":
          this.sendAsync(e, (i) => i), n = !0;
          break;
        default:
          r = await this.handleOtherRequests(e);
      }
      return r || this.formatResponse(e, n);
    } catch (r) {
      throw this.emit("error", r), r;
    }
  }
  async handleOtherRequests(e) {
    if (!vi.includes(e.method) && e.method.startsWith("eth_"))
      return this.handleReadRequests(e);
    const n = await (await this.getWalletConnector()).sendCustomRequest(e);
    return this.formatResponse(e, n);
  }
  async handleReadRequests(e) {
    if (!this.http) {
      const r = new Error("HTTP Connection not available");
      throw this.emit("error", r), r;
    }
    return this.http.send(e);
  }
  formatResponse(e, r) {
    return {
      id: e.id,
      jsonrpc: e.jsonrpc,
      result: r
    };
  }
  getWalletConnector(e = {}) {
    const { disableSessionCreation: r = !1 } = e;
    return new Promise((n, o) => {
      const i = this.wc;
      this.isConnecting ? this.onConnect((l) => n(l)) : !i.connected && !r ? (this.isConnecting = !0, i.on("modal_closed", () => {
        o(new Error("User closed modal"));
      }), i.createSession({ chainId: this.chainId }).then(() => {
        i.on("connect", (l, s) => {
          if (l)
            return this.isConnecting = !1, o(l);
          this.isConnecting = !1, this.connected = !0, s && this.updateState(s.params[0]), this.emit("connect"), this.triggerConnect(i), n(i);
        });
      }).catch((l) => {
        this.isConnecting = !1, o(l);
      })) : (this.connected || (this.connected = !0, this.updateState(i.session)), n(i));
    });
  }
  async subscribeWalletConnector() {
    const e = await this.getWalletConnector();
    e.on("disconnect", (r) => {
      if (r) {
        this.emit("error", r);
        return;
      }
      this.onDisconnect();
    }), e.on("session_update", (r, n) => {
      if (r) {
        this.emit("error", r);
        return;
      }
      this.updateState(n.params[0]);
    });
  }
  async onDisconnect() {
    await this.stop(), this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected"), this.connected = !1;
  }
  async updateState(e) {
    const { accounts: r, chainId: n, networkId: o, rpcUrl: i } = e;
    (!this.accounts || r && this.accounts !== r) && (this.accounts = r, this.emit("accountsChanged", r)), (!this.chainId || n && this.chainId !== n) && (this.chainId = n, this.emit("chainChanged", n)), (!this.networkId || o && this.networkId !== o) && (this.networkId = o, this.emit("networkChanged", o)), this.updateRpcUrl(this.chainId, i || "");
  }
  updateRpcUrl(e, r = "") {
    const n = { infuraId: this.infuraId, custom: this.rpc || void 0 };
    r = r || Kf(e, n), r ? (this.rpcUrl = r, this.updateHttpConnection()) : this.emit("error", new Error(`No RPC Url available for chainId: ${e}`));
  }
  updateHttpConnection() {
    this.rpcUrl && (this.http = new z1(this.rpcUrl), this.http.on("payload", (e) => this.emit("payload", e)), this.http.on("error", (e) => this.emit("error", e)));
  }
  sendAsyncPromise(e, r) {
    return new Promise((n, o) => {
      this.sendAsync({
        id: Wn(),
        jsonrpc: "2.0",
        method: e,
        params: r || []
      }, (i, l) => {
        if (i) {
          o(i);
          return;
        }
        n(l.result);
      });
    });
  }
  initialize() {
    this.updateRpcUrl(this.chainId), this.addProvider(new Y1({
      eth_hashrate: "0x00",
      eth_mining: !1,
      eth_syncing: !0,
      net_listening: !0,
      web3_clientVersion: "WalletConnect/v1.x.x/javascript"
    })), this.addProvider(new K1()), this.addProvider(new Q1()), this.addProvider(new J1()), this.addProvider(new Z1()), this.addProvider(new G1(this.configWallet())), this.addProvider({
      handleRequest: async (e, r, n) => {
        try {
          const { error: o, result: i } = await this.handleRequest(e);
          n(o, i);
        } catch (o) {
          n(o);
        }
      },
      setEngine: (e) => e
    });
  }
  configWallet() {
    return {
      getAccounts: async (e) => {
        try {
          const n = (await this.getWalletConnector()).accounts;
          n && n.length ? e(null, n) : e(new Error("Failed to get accounts"));
        } catch (r) {
          e(r);
        }
      },
      processMessage: async (e, r) => {
        try {
          const o = await (await this.getWalletConnector()).signMessage([e.from, e.data]);
          r(null, o);
        } catch (n) {
          r(n);
        }
      },
      processPersonalMessage: async (e, r) => {
        try {
          const o = await (await this.getWalletConnector()).signPersonalMessage([e.data, e.from]);
          r(null, o);
        } catch (n) {
          r(n);
        }
      },
      processSignTransaction: async (e, r) => {
        try {
          const o = await (await this.getWalletConnector()).signTransaction(e);
          r(null, o);
        } catch (n) {
          r(n);
        }
      },
      processTransaction: async (e, r) => {
        try {
          const o = await (await this.getWalletConnector()).sendTransaction(e);
          r(null, o);
        } catch (n) {
          r(n);
        }
      },
      processTypedMessage: async (e, r) => {
        try {
          const o = await (await this.getWalletConnector()).signTypedData([e.from, e.data]);
          r(null, o);
        } catch (n) {
          r(n);
        }
      }
    };
  }
}
class up extends ga {
  constructor(r, n) {
    super(r, hi.WalletConnect, n);
    je(this, "_walletConnect");
    je(this, "_rpc");
    this._rpc = {}, n.forEach((o) => this._rpc[o.chainId] = o.rpcUrl), this._walletConnect = new Xo({ rpc: this._rpc }), this.initListeners(this._walletConnect);
  }
  async disconnect() {
    await super.disconnect(), await this._walletConnect.disconnect();
  }
  get canSwitchChain() {
    return !1;
  }
  switchChain(r) {
    throw new Error("Method not implemented.");
  }
  get rawProvider() {
    return this._walletConnect;
  }
  get isConnected() {
    const n = !!localStorage.getItem("walletconnect") && this._walletConnect.isWalletConnect;
    return Promise.resolve(n);
  }
  get isInstalled() {
    return !0;
  }
  get installUrl() {
    return "";
  }
  async enable() {
    try {
      return await this._walletConnect.enable();
    } catch (r) {
      return this._walletConnect = new Xo({ rpc: this._rpc }), Promise.reject(r);
    }
  }
}
export {
  ru as B,
  hi as C,
  qn as D,
  li as F,
  Ut as I,
  sp as L,
  ip as O,
  Kl as S,
  up as W,
  Ve as a,
  op as b,
  dt as c,
  np as d,
  ap as e,
  fa as f,
  Dl as g,
  Gl as h,
  Vl as i,
  j,
  Jl as k,
  ha as l,
  cp as m,
  lp as n,
  Xl as o,
  Yl as u
};
