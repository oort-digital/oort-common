import { useState as L } from "react";
import { Row as j, Col as m } from "antd";
import { A as S, B as E, n as k, C as p, a as R, M as U, W as q } from "./alert.1bff16ae.mjs";
import "ethers";
import { j as t, c as z, a as e, F as u, i as H } from "./index.513cfbf8.mjs";
import "react-router-dom";
import "mobx-react";
import "mobx";
import "axios";
const J = "_modal_1asgj_5", K = "_description_1asgj_8", P = "_chain_buttons_1asgj_17", c = {
  modal: J,
  description: K,
  chain_buttons: P
}, at = ({
  web3: M,
  visible: W,
  onCancel: a,
  onClose: f,
  afterConnect: g,
  afterChainSwitch: C,
  expectedChainId: _
}) => {
  const [I, i] = L(!1), {
    supportedChains: s,
    chain: r,
    switchChain: B,
    canSwitchChain: v,
    connect: x,
    account: l,
    connectorName: A,
    supportedConnectors: T
  } = M, F = async (n, o) => {
    i(!0);
    try {
      await x(n, o), a && a(), g && g();
    } finally {
      i(!1);
    }
  }, N = async (n) => {
    i(!0);
    try {
      await B(n), a && a(), C && C();
    } finally {
      i(!1);
    }
  }, O = /* @__PURE__ */ e(u, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ t("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge that you have read and understand the ", /* @__PURE__ */ t("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), w = (n, o, d, h) => {
    if (l && d === A)
      return /* @__PURE__ */ t(p, {
        disabled: !0,
        walletName: o,
        walletIcon: h,
        account: l
      });
    const y = T[d];
    return y.isInstalled ? /* @__PURE__ */ t(p, {
      walletName: o,
      onClick: () => F(n, d),
      walletIcon: h,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(p, {
      walletName: o,
      onClick: () => window.open(y.installUrl, "_blank").focus(),
      walletIcon: h,
      labelText: "Install"
    });
  }, D = (n) => {
    const {
      chainId: o
    } = n;
    return /* @__PURE__ */ t(m, {
      span: "24",
      children: /* @__PURE__ */ t(R, {
        onClick: () => N(o),
        loading: I,
        expectedChainId: _,
        connectedChainId: r.chainId,
        canSwitchChain: v,
        chain: n
      })
    }, o);
  }, b = [0, 12], G = () => {
    f && f(), a && a();
  };
  return /* @__PURE__ */ t(z, {
    viewMode: "topGap",
    loading: I,
    footer: O,
    className: c.modal,
    title: "Network & Wallet",
    visible: W,
    onCancel: () => G(),
    children: /* @__PURE__ */ e(u, {
      children: [!H(r) && /* @__PURE__ */ e(u, {
        children: [/* @__PURE__ */ t("div", {
          className: c.description,
          children: /* @__PURE__ */ t(S, {
            account: l,
            chain: r,
            supportedChains: s,
            expectedChainId: _
          })
        }), /* @__PURE__ */ t(j, {
          gutter: b,
          className: c.chain_buttons,
          children: s.map((n) => D(n))
        })]
      }), /* @__PURE__ */ e("div", {
        className: c.description,
        children: [/* @__PURE__ */ t(E, {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ e(j, {
        gutter: b,
        children: [/* @__PURE__ */ t(m, {
          span: "24",
          children: w(s[0].chainId, "Metamask", k.Injected, U)
        }), /* @__PURE__ */ t(m, {
          span: "24",
          children: w(s[0].chainId, "WalletConnect", k.WalletConnect, q)
        })]
      })]
    })
  });
};
export {
  at as default
};
//# sourceMappingURL=connectModalMobile.5ad462ef.mjs.map
