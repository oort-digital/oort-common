import { A as d, a as _, L as u } from "./asideMobile.module.fe79abce.mjs";
import { j as e, a as s, b as m, h } from "./index.adc0fd4a.mjs";
import { useState as p } from "react";
import { Drawer as b } from "antd";
import "mobx-react";
import "react-router-dom";
import "mobx";
const k = ({
  navItems: t,
  web3: r,
  isActiveFunc: o
}) => /* @__PURE__ */ e(d, {
  className: _.aside_mobile,
  navItems: t,
  web3: r,
  isActiveFunc: o
}), g = "_root_1cqb2_1", L = "_top_header_1cqb2_5", f = "_logo_1cqb2_31", w = "_content_1cqb2_35", n = {
  root: g,
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
}), v = ({
  children: t
}) => {
  const [r, o] = p(!1);
  return /* @__PURE__ */ s(m, {
    children: [(() => /* @__PURE__ */ e(b, {
      title: "Menu",
      className: a.top_header_menu,
      closeIcon: /* @__PURE__ */ e(h, {}),
      placement: "left",
      onClose: () => o(!1),
      open: r,
      children: t
    }))(), /* @__PURE__ */ e("div", {
      className: a.burger_icon,
      onClick: () => o(!0),
      children: /* @__PURE__ */ e(C, {})
    })]
  });
}, H = ({
  navItems: t,
  children: r,
  web3: o,
  isActiveFunc: i,
  className: c
}) => {
  const l = c ? `${n.root} ${c}` : n.root;
  return /* @__PURE__ */ s("div", {
    className: l,
    children: [/* @__PURE__ */ s("div", {
      className: `oort-mobile-top-header ${n.top_header}`,
      children: [/* @__PURE__ */ e(v, {
        children: /* @__PURE__ */ e(k, {
          navItems: t,
          isActiveFunc: i,
          web3: o
        })
      }), /* @__PURE__ */ e(u, {
        className: n.logo
      })]
    }), /* @__PURE__ */ e("div", {
      className: `oort-mobile-content ${n.content}`,
      children: r
    })]
  });
};
export {
  H as default
};
//# sourceMappingURL=layoutMobile.a2e3ca28.mjs.map
