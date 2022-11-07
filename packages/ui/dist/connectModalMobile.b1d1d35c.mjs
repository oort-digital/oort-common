import { useState as S } from "react";
import { Row as I, Col as p } from "antd";
import { a as k, C as u, b as D, M as E, W as L } from "./index.es.3480ef64.mjs";
import { j as n, l as F, a as r, b as c, i as G } from "./index.bc6dcbdf.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
var K = /* @__PURE__ */ ((e) => (e[e.WALLET_METAMASK = 0] = "WALLET_METAMASK", e[e.WALLET_CONNECT = 1] = "WALLET_CONNECT", e))(K || {});
const R = (e, l, o) => e ? o.some((i) => i.name === l.name) ? /* @__PURE__ */ r(c, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: l.name
  }), " network"]
}) : /* @__PURE__ */ r(c, {
  children: ["You connected to ", /* @__PURE__ */ r("span", {
    children: [l.name, "."]
  }), /* @__PURE__ */ r("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: o.map((i) => i.name).join(", ")
    })]
  })]
}) : null, Z = ({
  web3: e,
  visible: l,
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
  }, _ = /* @__PURE__ */ r(c, {
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
  return /* @__PURE__ */ n(F, {
    viewMode: "topGap",
    loading: w,
    footer: _,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: l,
    onCancel: () => B(),
    children: /* @__PURE__ */ r(c, {
      children: [!G(d) && /* @__PURE__ */ r(c, {
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
          children: g("WalletConnect", k.WalletConnect, L)
        })]
      })]
    })
  });
};
export {
  K as WALLETTYPE,
  Z as default
};
//# sourceMappingURL=connectModalMobile.b1d1d35c.mjs.map
