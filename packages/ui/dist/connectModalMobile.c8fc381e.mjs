import { useState as S } from "react";
import { Row as I, Col as p } from "antd";
import { a as k, C as u, b as D, M as E, W as F } from "./index.es.316e6f78.mjs";
import { j as n, b as L, a as r, F as l, i as G } from "./index.6ff1abe2.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
var K = /* @__PURE__ */ ((e) => (e[e.WALLET_METAMASK = 0] = "WALLET_METAMASK", e[e.WALLET_CONNECT = 1] = "WALLET_CONNECT", e))(K || {});
const R = (e, c, o) => e ? o.some((i) => i.name === c.name) ? /* @__PURE__ */ r(l, {
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
      children: o.map((i) => i.name).join(", ")
    })]
  })]
}) : null, Z = ({
  web3: e,
  visible: c,
  onCancel: o,
  onClose: i,
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
  }), g = (t, a, m) => {
    if (h && a === N)
      return /* @__PURE__ */ n(u, {
        disabled: !0,
        walletName: t,
        walletIcon: m,
        account: h
      });
    const y = j[a];
    return y.isInstalled ? /* @__PURE__ */ n(u, {
      walletName: t,
      onClick: () => O(a),
      walletIcon: m,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(u, {
      walletName: t,
      onClick: () => window.open(y.installUrl, "_blank").focus(),
      walletIcon: m,
      labelText: "Install"
    });
  }, x = (t) => {
    const {
      chainId: a
    } = t;
    return /* @__PURE__ */ n(p, {
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
    i && i(), o && o();
  };
  return /* @__PURE__ */ n(L, {
    viewMode: "topGap",
    loading: w,
    footer: _,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: c,
    onCancel: () => B(),
    children: /* @__PURE__ */ r(l, {
      children: [!G(d) && /* @__PURE__ */ r(l, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: R(h, d, M)
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
        children: [window.ethereum && /* @__PURE__ */ n(p, {
          span: "24",
          children: g("Metamask", k.Injected, E)
        }), /* @__PURE__ */ n(p, {
          span: "24",
          children: g("WalletConnect", k.WalletConnect, F)
        })]
      })]
    })
  });
};
export {
  K as WALLETTYPE,
  Z as default
};
//# sourceMappingURL=connectModalMobile.c8fc381e.mjs.map