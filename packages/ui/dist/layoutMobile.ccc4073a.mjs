import { A as c, a as l, L as d } from "./asideMobile.module.9330a7ab.mjs";
import { Drawer as _ } from "antd";
import "react-router-dom";
import { j as e, a as s, F as u, f as h } from "./index.8ca350ac.mjs";
import { useState as m } from "react";
const p = ({
  navItems: r,
  web3: t,
  isActiveFunc: o
}) => /* @__PURE__ */ e(c, {
  className: l.aside_mobile,
  navItems: r,
  web3: t,
  isActiveFunc: o
}), k = "_root_iy387_1", g = "_top_header_iy387_5", y = "_logo_iy387_13", f = "_content_iy387_17", n = {
  root: k,
  top_header: g,
  logo: y,
  content: f
}, L = "_top_header_menu_5yyk9_5", b = "_burger_icon_5yyk9_39", a = {
  top_header_menu: L,
  burger_icon: b
}, w = () => /* @__PURE__ */ s("svg", {
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
  return /* @__PURE__ */ s(u, {
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
}, A = ({
  navItems: r,
  children: t,
  web3: o,
  isActiveFunc: i
}) => /* @__PURE__ */ s("div", {
  className: n.root,
  children: [/* @__PURE__ */ s("div", {
    className: n.top_header,
    children: [/* @__PURE__ */ e(M, {
      children: /* @__PURE__ */ e(p, {
        navItems: r,
        isActiveFunc: i,
        web3: o
      })
    }), /* @__PURE__ */ e(d, {
      className: n.logo
    })]
  }), /* @__PURE__ */ e("div", {
    className: n.content,
    children: t
  })]
});
export {
  A as default
};
//# sourceMappingURL=layoutMobile.ccc4073a.mjs.map
