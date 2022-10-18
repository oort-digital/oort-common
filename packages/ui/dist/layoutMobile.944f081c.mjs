import { A as c, a as d, L as l } from "./asideMobile.module.deaa98c4.mjs";
import { Drawer as _ } from "antd";
import "react-router-dom";
import { j as e, a as n, F as u, f as h } from "./index.125e7496.mjs";
import { useState as m } from "react";
const p = ({
  navItems: r,
  web3: t,
  isActiveFunc: o
}) => /* @__PURE__ */ e(c, {
  className: d.aside_mobile,
  navItems: r,
  web3: t,
  isActiveFunc: o
}), k = "_root_328ad_1", g = "_top_header_328ad_5", f = "_content_328ad_11", s = {
  root: k,
  top_header: g,
  content: f
}, L = "_top_header_menu_5yyk9_5", b = "_burger_icon_5yyk9_39", a = {
  top_header_menu: L,
  burger_icon: b
}, w = () => /* @__PURE__ */ n("svg", {
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
}), M = ({
  children: r
}) => {
  const [t, o] = m(!1);
  return /* @__PURE__ */ n(u, {
    children: [(() => /* @__PURE__ */ e(_, {
      title: "Menu",
      className: a.top_header_menu,
      closeIcon: /* @__PURE__ */ e(h, {}),
      placement: "left",
      onClose: () => o(!1),
      open: t,
      children: r
    }))(), /* @__PURE__ */ e("div", {
      className: a.burger_icon,
      onClick: () => o(!0),
      children: /* @__PURE__ */ e(w, {})
    })]
  });
}, x = ({
  navItems: r,
  children: t,
  web3: o,
  isActiveFunc: i
}) => /* @__PURE__ */ n("div", {
  className: s.root,
  children: [/* @__PURE__ */ n("div", {
    className: s.top_header,
    children: [/* @__PURE__ */ e(M, {
      children: /* @__PURE__ */ e(p, {
        navItems: r,
        isActiveFunc: i,
        web3: o
      })
    }), /* @__PURE__ */ e(l, {})]
  }), /* @__PURE__ */ e("div", {
    className: s.content,
    children: t
  })]
});
export {
  x as default
};
//# sourceMappingURL=layoutMobile.944f081c.mjs.map
