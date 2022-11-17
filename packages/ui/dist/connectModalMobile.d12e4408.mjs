import { useState as G } from "react";
import { Row as I, Col as d } from "antd";
import { A as L, B as S, a as j, C as h, b as E, M as R, W as U } from "./alert.ec9617bf.mjs";
import { j as t, c as q, a, F as m, i as z } from "./index.d7b59f57.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
const H = "_modal_1asgj_5", J = "_description_1asgj_8", K = "_chain_buttons_1asgj_17", i = {
  modal: H,
  description: J,
  chain_buttons: K
}, nt = ({
  web3: k,
  visible: M,
  onCancel: o,
  onClose: p,
  afterConnect: u,
  afterChainSwitch: f,
  expectedChainId: g
}) => {
  const [C, s] = G(!1), {
    supportedChains: _,
    chain: c,
    switchChain: W,
    canSwitchChain: B,
    connectAsync: v,
    account: r,
    connectorName: A,
    supportedConnectors: x
  } = k, T = async (n) => {
    s(!0);
    try {
      await v(n), o && o(), u && u();
    } finally {
      s(!1);
    }
  }, F = async (n) => {
    s(!0);
    try {
      await W(n), o && o(), f && f();
    } finally {
      s(!1);
    }
  }, N = /* @__PURE__ */ a(m, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ t("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge that you have read and understand the ", /* @__PURE__ */ t("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), w = (n, e, l) => {
    if (r && e === A)
      return /* @__PURE__ */ t(h, {
        disabled: !0,
        walletName: n,
        walletIcon: l,
        account: r
      });
    const y = x[e];
    return y.isInstalled ? /* @__PURE__ */ t(h, {
      walletName: n,
      onClick: () => T(e),
      walletIcon: l,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(h, {
      walletName: n,
      onClick: () => window.open(y.installUrl, "_blank").focus(),
      walletIcon: l,
      labelText: "Install"
    });
  }, O = (n) => {
    const {
      chainId: e
    } = n;
    return /* @__PURE__ */ t(d, {
      span: "24",
      children: /* @__PURE__ */ t(E, {
        onClick: () => F(e),
        loading: C,
        expectedChainId: g,
        connectedChainId: c.chainId,
        canSwitchChain: B,
        chain: n
      })
    }, e);
  }, b = [0, 12], D = () => {
    p && p(), o && o();
  };
  return /* @__PURE__ */ t(q, {
    viewMode: "topGap",
    loading: C,
    footer: N,
    className: i.modal,
    title: "Network & Wallet",
    visible: M,
    onCancel: () => D(),
    children: /* @__PURE__ */ a(m, {
      children: [!z(c) && /* @__PURE__ */ a(m, {
        children: [/* @__PURE__ */ t("div", {
          className: i.description,
          children: /* @__PURE__ */ t(L, {
            account: r,
            chain: c,
            supportedChains: _,
            expectedChainId: g
          })
        }), /* @__PURE__ */ t(I, {
          gutter: b,
          className: i.chain_buttons,
          children: _.map((n) => O(n))
        })]
      }), /* @__PURE__ */ a("div", {
        className: i.description,
        children: [/* @__PURE__ */ t(S, {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ a(I, {
        gutter: b,
        children: [window.ethereum && /* @__PURE__ */ t(d, {
          span: "24",
          children: w("Metamask", j.Injected, R)
        }), /* @__PURE__ */ t(d, {
          span: "24",
          children: w("WalletConnect", j.WalletConnect, U)
        })]
      })]
    })
  });
};
export {
  nt as default
};
//# sourceMappingURL=connectModalMobile.d12e4408.mjs.map
