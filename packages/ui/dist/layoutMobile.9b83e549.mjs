import { A as d, a as _, L as u } from "./asideMobile.module.9bd551bf.mjs";
import { Drawer as h } from "antd";
import { useState as m } from "react";
import "react-router-dom";
import { j as o, a as s, b as p, h as k } from "./index.ce692fa1.mjs";
const g = ({
  navItems: t,
  web3: r,
  isActiveFunc: e
}) => /* @__PURE__ */ o(d, {
  className: _.aside_mobile,
  navItems: t,
  web3: r,
  isActiveFunc: e
}), b = "_root_1qdo9_1", L = "_top_header_1qdo9_5", f = "_logo_1qdo9_31", w = "_content_1qdo9_35", n = {
  root: b,
  top_header: L,
  logo: f,
  content: w
}, M = "_top_header_menu_5yyk9_5", y = "_burger_icon_5yyk9_39", a = {
  top_header_menu: M,
  burger_icon: y
}, C = () => /* @__PURE__ */ s("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ o("path", {
    d: "M2 12H22",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ o("path", {
    d: "M2 18H22",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ o("path", {
    d: "M2 6H22",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), v = ({
  children: t
}) => {
  const [r, e] = m(!1);
  return /* @__PURE__ */ s(p, {
    children: [(() => /* @__PURE__ */ o(h, {
      title: "Menu",
      className: a.top_header_menu,
      closeIcon: /* @__PURE__ */ o(k, {}),
      placement: "left",
      onClose: () => e(!1),
      open: r,
      children: t
    }))(), /* @__PURE__ */ o("div", {
      className: a.burger_icon,
      onClick: () => e(!0),
      children: /* @__PURE__ */ o(C, {})
    })]
  });
}, A = ({
  navItems: t,
  children: r,
  web3: e,
  isActiveFunc: i,
  className: c
}) => {
  const l = c ? `${n.root} ${c}` : n.root;
  return /* @__PURE__ */ s("div", {
    className: l,
    children: [/* @__PURE__ */ s("div", {
      className: `oort-mobile-top-header ${n.top_header}`,
      children: [/* @__PURE__ */ o(v, {
        children: /* @__PURE__ */ o(g, {
          navItems: t,
          isActiveFunc: i,
          web3: e
        })
      }), /* @__PURE__ */ o(u, {
        className: n.logo
      })]
    }), /* @__PURE__ */ o("div", {
      className: `oort-mobile-content ${n.content}`,
      children: r
    })]
  });
};
export {
  A as default
};
//# sourceMappingURL=layoutMobile.9b83e549.mjs.map
