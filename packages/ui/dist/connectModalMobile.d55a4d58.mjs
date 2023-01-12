import "antd";
import { j as t, c as m, F as n, a as d } from "./index.861fe827.mjs";
import { u as p } from "./useConnectModalCommon.6b478e13.mjs";
import "react";
import "react-router-dom";
import "ethers";
import "@oort/logger";
import "mobx-react";
import "mobx";
import "@oort/web3-connectors";
const _ = "_modal_1asgj_5", u = "_description_1asgj_8", b = "_chain_buttons_1asgj_17", e = {
  modal: _,
  description: u,
  chain_buttons: b
}, N = (o) => {
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
  N as default
};
//# sourceMappingURL=connectModalMobile.d55a4d58.mjs.map
