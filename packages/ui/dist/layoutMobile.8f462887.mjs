import { A as m, a as w, L as b } from "./asideMobile.module.73c276c1.mjs";
import { Drawer as g } from "antd";
import { useState as y, useEffect as k } from "react";
import "react-router-dom";
import { j as e, a, b as f, h as L, k as S } from "./index.ca70b2dc.mjs";
import "ethers";
import "mobx-react";
import "mobx";
const v = ({
  navItems: o,
  web3: n,
  isActiveFunc: r
}) => /* @__PURE__ */ e(m, {
  className: w.aside_mobile,
  navItems: o,
  web3: n,
  isActiveFunc: r
}), M = "_root_1cqb2_1", C = "_top_header_1cqb2_5", $ = "_logo_1cqb2_31", j = "_content_1cqb2_35", s = {
  root: M,
  top_header: C,
  logo: $,
  content: j
}, N = "_top_header_menu_5yyk9_5", x = "_burger_icon_5yyk9_39", h = {
  top_header_menu: N,
  burger_icon: x
}, q = () => /* @__PURE__ */ a("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ e("path", {
    d: "M2 12H22",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ e("path", {
    d: "M2 18H22",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ e("path", {
    d: "M2 6H22",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), p = (o) => L.debug(`Sider. ${o}`), A = ({
  children: o
}) => {
  const [n, r] = y(!1), t = () => r(!1), i = () => /* @__PURE__ */ e(g, {
    title: "Menu",
    className: h.top_header_menu,
    closeIcon: /* @__PURE__ */ e(S, {}),
    placement: "left",
    onClose: t,
    open: n,
    children: o
  });
  return k(() => {
    var c = window.history.pushState, _ = window.history.replaceState;
    window.history.pushState = function(l, d, u) {
      t(), p("history.pushState"), c.apply(window.history, [l, d, u]);
    }, window.history.replaceState = function(l, d, u) {
      t(), p("history.replaceState"), _.apply(window.history, [l, d, u]), t();
    }, window.addEventListener("beforeunload", function() {
      p("beforeunload"), t();
    });
  }, []), /* @__PURE__ */ a(f, {
    children: [i(), /* @__PURE__ */ e("div", {
      className: h.burger_icon,
      onClick: () => r(!0),
      children: /* @__PURE__ */ e(q, {})
    })]
  });
}, R = ({
  navItems: o,
  children: n,
  web3: r,
  isActiveFunc: t,
  className: i
}) => {
  const c = i ? `${s.root} ${i}` : s.root;
  return /* @__PURE__ */ a("div", {
    className: c,
    children: [/* @__PURE__ */ a("div", {
      className: `oort-mobile-top-header ${s.top_header}`,
      children: [/* @__PURE__ */ e(A, {
        children: /* @__PURE__ */ e(v, {
          navItems: o,
          isActiveFunc: t,
          web3: r
        })
      }), /* @__PURE__ */ e(b, {
        className: s.logo
      })]
    }), /* @__PURE__ */ e("div", {
      className: `oort-mobile-content ${s.content}`,
      children: n
    })]
  });
};
export {
  R as default
};
//# sourceMappingURL=layoutMobile.8f462887.mjs.map
