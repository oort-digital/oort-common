import { useState as O } from "react";
import { Row as g, Col as u } from "antd";
import { C as p, a as T, M as B, W as D } from "./chainButton.0bec5a79.mjs";
import "ethers";
import { j as n, O as S, a as t, F as i, C as k } from "./index.205dd06c.mjs";
var _ = /* @__PURE__ */ ((a) => (a[a.WALLET_METAMASK = 0] = "WALLET_METAMASK", a[a.WALLET_CONNECT = 1] = "WALLET_CONNECT", a))(_ || {});
const F = (a, l, o) => a ? o.some((r) => r.name === l.name) ? /* @__PURE__ */ t(i, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: l.name
  }), " network"]
}) : /* @__PURE__ */ t(i, {
  children: ["You connected to ", /* @__PURE__ */ t("span", {
    children: [l.name, "."]
  }), /* @__PURE__ */ t("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: o.map((r) => r.name).join(", ")
    })]
  })]
}) : null, U = (a) => {
  const [l, o] = O(!1), {
    onCancel: r,
    visible: y,
    supportedChains: m,
    chain: s,
    switchChain: I,
    canSwitchChain: v,
    connectAsync: A,
    account: d,
    connectorName: M,
    supportedConnectors: b
  } = a, j = async (e) => {
    o(!0);
    try {
      await A(e), r();
    } finally {
      o(!1);
    }
  }, N = async (e) => {
    o(!0);
    try {
      await I(e), r();
    } finally {
      o(!1);
    }
  }, W = /* @__PURE__ */ t(i, {
    children: [/* @__PURE__ */ t("div", {
      children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ n("a", {
        href: "https://oort.digital/terms",
        children: "Terms of Service"
      }), " and acknowledge"]
    }), /* @__PURE__ */ t("div", {
      children: ["that you have read and understand the ", /* @__PURE__ */ n("a", {
        href: "https://oort.digital/terms#disclaimer",
        children: "Oort Digital protocol disclaimer"
      })]
    })]
  }), C = (e, c, h) => {
    if (d && c === M)
      return /* @__PURE__ */ n(p, {
        disabled: !0,
        walletName: e,
        walletIcon: h,
        account: d
      });
    const w = b[c];
    return w.isInstalled ? /* @__PURE__ */ n(p, {
      walletName: e,
      onClick: () => j(c),
      walletIcon: h,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(p, {
      walletName: e,
      onClick: () => window.open(w.installUrl, "_blank").focus(),
      walletIcon: h,
      labelText: "Install"
    });
  }, x = (e) => {
    const {
      chainId: c
    } = e;
    return /* @__PURE__ */ n(u, {
      flex: 3,
      children: /* @__PURE__ */ n(T, {
        onClick: () => N(c),
        loading: l,
        isActive: c === s.chainId,
        canSwitchChain: v,
        chain: e
      })
    }, c);
  }, f = [10, 0];
  return /* @__PURE__ */ n(S, {
    loading: l,
    footer: W,
    className: "connect-wallet-desktop-modal",
    title: "Network & Wallet",
    width: "690px",
    visible: y,
    onCancel: r,
    children: /* @__PURE__ */ t(i, {
      children: [s && /* @__PURE__ */ t(i, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: F(d, s, m)
        }), /* @__PURE__ */ n(g, {
          gutter: f,
          className: "chain-buttons",
          justify: "space-between",
          children: m.map((e) => x(e))
        })]
      }), /* @__PURE__ */ t("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ t(g, {
        gutter: f,
        justify: "space-between",
        children: [/* @__PURE__ */ n(u, {
          span: 12,
          children: C("Metamask", k.Injected, B)
        }), /* @__PURE__ */ n(u, {
          span: 12,
          children: C("WalletConnect", k.WalletConnect, D)
        })]
      })]
    })
  });
};
export {
  _ as WALLETTYPE,
  U as default
};
