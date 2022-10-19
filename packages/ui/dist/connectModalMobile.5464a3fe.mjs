import { useState as S } from "react";
import { Row as I, Col as m } from "antd";
import { a as k, C as p, b as D, M as F, W as L } from "./index.es.f68cc6d2.mjs";
import { j as n, h as E, a as r, F as i } from "./index.90140f86.mjs";
import "ethers";
import "react-router-dom";
var G = /* @__PURE__ */ ((e) => (e[e.WALLET_METAMASK = 0] = "WALLET_METAMASK", e[e.WALLET_CONNECT = 1] = "WALLET_CONNECT", e))(G || {});
const K = (e, l, o) => e ? o.some((c) => c.name === l.name) ? /* @__PURE__ */ r(i, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: l.name
  }), " network"]
}) : /* @__PURE__ */ r(i, {
  children: ["You connected to ", /* @__PURE__ */ r("span", {
    children: [l.name, "."]
  }), /* @__PURE__ */ r("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: o.map((c) => c.name).join(", ")
    })]
  })]
}) : null, Q = ({
  web3: e,
  visible: l,
  onCancel: o,
  onClose: c,
  afterConnect: f,
  afterChainSwitch: w
}) => {
  const [C, s] = S(!1), {
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
      await A(t), o && o(), w && w();
    } finally {
      s(!1);
    }
  }, _ = /* @__PURE__ */ r(i, {
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
        loading: C,
        isActive: a === d.chainId,
        canSwitchChain: v,
        chain: t
      })
    }, a);
  }, b = [0, 12], B = () => {
    c && c(), o && o();
  };
  return /* @__PURE__ */ n(E, {
    viewMode: "topGap",
    loading: C,
    footer: _,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: l,
    onCancel: () => B(),
    children: /* @__PURE__ */ r(i, {
      children: [d && /* @__PURE__ */ r(i, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: K(h, d, M)
        }), /* @__PURE__ */ n(I, {
          gutter: b,
          className: "chain-buttons",
          children: M.map((t) => x(t))
        })]
      }), /* @__PURE__ */ r("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ r(I, {
        gutter: b,
        children: [window.ethereum && /* @__PURE__ */ n(m, {
          span: "24",
          children: g("Metamask", k.Injected, F)
        }), /* @__PURE__ */ n(m, {
          span: "24",
          children: g("WalletConnect", k.WalletConnect, L)
        })]
      })]
    })
  });
};
export {
  G as WALLETTYPE,
  Q as default
};
//# sourceMappingURL=connectModalMobile.5464a3fe.mjs.map
