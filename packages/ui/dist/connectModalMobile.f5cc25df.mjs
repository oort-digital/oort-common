import "antd";
import { j as t, c as m, F as n, a as d } from "./index.321a7bed.mjs";
import { u as p } from "./useConnectModalCommon.4b3ce12e.mjs";
import "react";
import "react-router-dom";
import "ethers";
import "mobx-react";
import "mobx";
import "axios";
const _ = "_modal_1asgj_5", u = "_description_1asgj_8", b = "_chain_buttons_1asgj_17", e = {
  modal: _,
  description: u,
  chain_buttons: b
}, G = (o) => {
  const {
    footer1: s,
    footer2: i,
    content: a,
    onCancel: r,
    loading: c
  } = p({
    props: o,
    styles: e,
    btnGutter: [0, 12],
    isMobile: !0
  }), {
    visible: l
  } = o;
  return /* @__PURE__ */ t(m, {
    viewMode: "topGap",
    loading: c,
    footer: /* @__PURE__ */ d(n, {
      children: [s, i]
    }),
    className: e.modal,
    title: "Network & Wallet",
    visible: l,
    onCancel: () => r(),
    children: /* @__PURE__ */ t(n, {
      children: a
    })
  });
};
export {
  G as default
};
//# sourceMappingURL=connectModalMobile.f5cc25df.mjs.map
