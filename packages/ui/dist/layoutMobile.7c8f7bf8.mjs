import { A as m, a as w, L as b } from "./asideMobile.module.9e09d7d3.mjs";
import { j as e, a, b as g, h as y, k } from "./index.fc4f7b42.mjs";
import { useState as f, useEffect as L } from "react";
import { Drawer as S } from "antd";
import "mobx-react";
import "react-router-dom";
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
}, N = "_top_header_menu_5yyk9_5", x = "_burger_icon_5yyk9_39", p = {
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
}), h = (o) => y.debug(`Sider. ${o}`), A = ({
  children: o
}) => {
  const [n, r] = f(!1), t = () => r(!1), i = () => /* @__PURE__ */ e(S, {
    title: "Menu",
    className: p.top_header_menu,
    closeIcon: /* @__PURE__ */ e(k, {}),
    placement: "left",
    onClose: t,
    open: n,
    children: o
  });
  return L(() => {
    var c = window.history.pushState, _ = window.history.replaceState;
    window.history.pushState = function(l, d, u) {
      t(), h("history.pushState"), c.apply(window.history, [l, d, u]);
    }, window.history.replaceState = function(l, d, u) {
      t(), h("history.replaceState"), _.apply(window.history, [l, d, u]), t();
    }, window.addEventListener("beforeunload", function() {
      h("beforeunload"), t();
    });
  }, []), /* @__PURE__ */ a(g, {
    children: [i(), /* @__PURE__ */ e("div", {
      className: p.burger_icon,
      onClick: () => r(!0),
      children: /* @__PURE__ */ e(q, {})
    })]
  });
}, F = ({
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
  F as default
};
//# sourceMappingURL=layoutMobile.7c8f7bf8.mjs.map
