import { useState as S } from "react";
import { Row as k, Col as m } from "antd";
import { a as I, C as p, b as D, M as E, W as L } from "./index.es.3e565c5d.mjs";
import { j as n, k as F, a as r, b as l, i as G } from "./index.880508e5.mjs";
import "ethers";
import "react-router-dom";
var K = /* @__PURE__ */ ((e) => (e[e.WALLET_METAMASK = 0] = "WALLET_METAMASK", e[e.WALLET_CONNECT = 1] = "WALLET_CONNECT", e))(K || {});
const R = (e, i, o) => e ? o.some((c) => c.name === i.name) ? /* @__PURE__ */ r(l, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: i.name
  }), " network"]
}) : /* @__PURE__ */ r(l, {
  children: ["You connected to ", /* @__PURE__ */ r("span", {
    children: [i.name, "."]
  }), /* @__PURE__ */ r("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: o.map((c) => c.name).join(", ")
    })]
  })]
}) : null, V = ({
  web3: e,
  visible: i,
  onCancel: o,
  onClose: c,
  afterConnect: f,
  afterChainSwitch: C
}) => {
  const [w, s] = S(!1), {
    supportedChains: M,
    chain: d,
    switchChain: A,
    canSwitchChain: v,
    connectAsync: W,
    account: h,
    connectorName: N,
    supportedConnectors: j
  } = e, O = async (t) => {
    s(!0);
    try {
      await W(t), o && o(), f && f();
    } finally {
      s(!1);
    }
  }, T = async (t) => {
    s(!0);
    try {
      await A(t), o && o(), C && C();
    } finally {
      s(!1);
    }
  }, _ = /* @__PURE__ */ r(l, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge that you have read and understand the ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), g = (t, a, u) => {
    if (h && a === N)
      return /* @__PURE__ */ n(p, {
        disabled: !0,
        walletName: t,
        walletIcon: u,
        account: h
      });
    const y = j[a];
    return y.isInstalled ? /* @__PURE__ */ n(p, {
      walletName: t,
      onClick: () => O(a),
      walletIcon: u,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(p, {
      walletName: t,
      onClick: () => window.open(y.installUrl, "_blank").focus(),
      walletIcon: u,
      labelText: "Install"
    });
  }, x = (t) => {
    const {
      chainId: a
    } = t;
    return /* @__PURE__ */ n(m, {
      span: "24",
      children: /* @__PURE__ */ n(D, {
        onClick: () => T(a),
        loading: w,
        isActive: a === d.chainId,
        canSwitchChain: v,
        chain: t
      })
    }, a);
  }, b = [0, 12], B = () => {
    c && c(), o && o();
  };
  return /* @__PURE__ */ n(F, {
    viewMode: "topGap",
    loading: w,
    footer: _,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: i,
    onCancel: () => B(),
    children: /* @__PURE__ */ r(l, {
      children: [!G(d) && /* @__PURE__ */ r(l, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: R(h, d, M)
        }), /* @__PURE__ */ n(k, {
          gutter: b,
          className: "chain-buttons",
          children: M.map((t) => x(t))
        })]
      }), /* @__PURE__ */ r("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ r(k, {
        gutter: b,
        children: [window.ethereum && /* @__PURE__ */ n(m, {
          span: "24",
          children: g("Metamask", I.Injected, E)
        }), /* @__PURE__ */ n(m, {
          span: "24",
          children: g("WalletConnect", I.WalletConnect, L)
        })]
      })]
    })
  });
};
export {
  K as WALLETTYPE,
  V as default
};
//# sourceMappingURL=connectModalMobile.88ad4f1e.mjs.map
