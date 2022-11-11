import { useState as S } from "react";
import { Row as I, Col as p } from "antd";
import { a as k, C as u, b as D, M as E, W as F } from "./chainButtonWithLogic.615e2c4a.mjs";
import { j as n, b as G, a as r, F as l, i as K } from "./index.34f92fe0.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
var R = /* @__PURE__ */ ((e) => (e[e.WALLET_METAMASK = 0] = "WALLET_METAMASK", e[e.WALLET_CONNECT = 1] = "WALLET_CONNECT", e))(R || {});
const U = (e, c, o) => e ? o.some((a) => a.name === c.name) ? /* @__PURE__ */ r(l, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: c.name
  }), " network"]
}) : /* @__PURE__ */ r(l, {
  children: ["You connected to ", /* @__PURE__ */ r("span", {
    children: [c.name, "."]
  }), /* @__PURE__ */ r("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: o.map((a) => a.name).join(", ")
    })]
  })]
}) : null, $ = ({
  web3: e,
  visible: c,
  onCancel: o,
  onClose: a,
  afterConnect: C,
  afterChainSwitch: f,
  expectedChainId: A
}) => {
  const [w, s] = S(!1), {
    supportedChains: g,
    chain: d,
    switchChain: W,
    canSwitchChain: v,
    connectAsync: N,
    account: h,
    connectorName: j,
    supportedConnectors: O
  } = e, T = async (t) => {
    s(!0);
    try {
      await N(t), o && o(), C && C();
    } finally {
      s(!1);
    }
  }, _ = async (t) => {
    s(!0);
    try {
      await W(t), o && o(), f && f();
    } finally {
      s(!1);
    }
  }, x = /* @__PURE__ */ r(l, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge that you have read and understand the ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), M = (t, i, m) => {
    if (h && i === j)
      return /* @__PURE__ */ n(u, {
        disabled: !0,
        walletName: t,
        walletIcon: m,
        account: h
      });
    const y = O[i];
    return y.isInstalled ? /* @__PURE__ */ n(u, {
      walletName: t,
      onClick: () => T(i),
      walletIcon: m,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(u, {
      walletName: t,
      onClick: () => window.open(y.installUrl, "_blank").focus(),
      walletIcon: m,
      labelText: "Install"
    });
  }, B = (t) => {
    const {
      chainId: i
    } = t;
    return /* @__PURE__ */ n(p, {
      span: "24",
      children: /* @__PURE__ */ n(D, {
        onClick: () => _(i),
        loading: w,
        expectedChainId: A,
        connectedChainId: d.chainId,
        canSwitchChain: v,
        chain: t
      })
    }, i);
  }, b = [0, 12], L = () => {
    a && a(), o && o();
  };
  return /* @__PURE__ */ n(G, {
    viewMode: "topGap",
    loading: w,
    footer: x,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: c,
    onCancel: () => L(),
    children: /* @__PURE__ */ r(l, {
      children: [!K(d) && /* @__PURE__ */ r(l, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: U(h, d, g)
        }), /* @__PURE__ */ n(I, {
          gutter: b,
          className: "chain-buttons",
          children: g.map((t) => B(t))
        })]
      }), /* @__PURE__ */ r("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ r(I, {
        gutter: b,
        children: [window.ethereum && /* @__PURE__ */ n(p, {
          span: "24",
          children: M("Metamask", k.Injected, E)
        }), /* @__PURE__ */ n(p, {
          span: "24",
          children: M("WalletConnect", k.WalletConnect, F)
        })]
      })]
    })
  });
};
export {
  R as WALLETTYPE,
  $ as default
};
//# sourceMappingURL=connectModalMobile.9652e640.mjs.map
