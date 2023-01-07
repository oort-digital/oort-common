import "antd";
import { j as o, O as d, F as n, a as m } from "./index.83dd773d.mjs";
import { u as p } from "./useConnectModalCommon.0f5da3c8.mjs";
import "react";
import "react-router-dom";
import "ethers";
import "mobx-react";
import "mobx";
import "axios";
const _ = "_modal_f97e5_5", f = "_description_f97e5_8", h = "_chain_buttons_f97e5_18", e = {
  modal: _,
  description: f,
  chain_buttons: h
}, F = (t) => {
  const {
    footer1: i,
    footer2: s,
    content: r,
    onCancel: a,
    loading: c
  } = p({
    props: t,
    styles: e,
    btnGutter: [10, 0],
    isMobile: !1
  }), {
    visible: l
  } = t;
  return /* @__PURE__ */ o(d, {
    loading: c,
    footer: /* @__PURE__ */ m(n, {
      children: [/* @__PURE__ */ o("div", {
        children: i
      }), /* @__PURE__ */ o("div", {
        children: s
      })]
    }),
    className: e.modal,
    title: "Network & Wallet",
    width: "690px",
    visible: l,
    onCancel: () => a(),
    children: /* @__PURE__ */ o(n, {
      children: r
    })
  });
};
export {
  F as default
};
//# sourceMappingURL=connectModalDesktop.1f761cd5.mjs.map
