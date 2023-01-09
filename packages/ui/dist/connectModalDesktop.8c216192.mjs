import { u as c, s as e } from "./useConnectModalCommon.aa5fc07c.mjs";
import "antd";
import { j as o, O as d, F as r, a as p } from "./index.1332119c.mjs";
import "ethers";
import "react";
import "react-router-dom";
import "mobx-react";
import "mobx";
import "axios";
const k = (t) => {
  const {
    footer1: n,
    footer2: i,
    content: s,
    onCancel: a,
    loading: l
  } = c({
    props: t,
    styles: e,
    btnGutter: [10, 0],
    isMobile: !1
  }), {
    visible: m
  } = t;
  return /* @__PURE__ */ o(d, {
    loading: l,
    footer: /* @__PURE__ */ p(r, {
      children: [/* @__PURE__ */ o("div", {
        children: n
      }), /* @__PURE__ */ o("div", {
        children: i
      })]
    }),
    className: e.modal,
    title: "Network & Wallet",
    width: "690px",
    visible: m,
    onCancel: () => a(),
    children: /* @__PURE__ */ o(r, {
      children: s
    })
  });
};
export {
  k as default
};
//# sourceMappingURL=connectModalDesktop.8c216192.mjs.map
