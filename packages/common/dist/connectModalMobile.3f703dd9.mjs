import { useState as T } from "react";
import { Row as M, Col as u } from "antd";
import { C as m, a as x, M as B, W as S } from "./chainButton.0bec5a79.mjs";
import "ethers";
import { j as n, b as _, a as o, F as i, C as g } from "./index.205dd06c.mjs";
var D = /* @__PURE__ */ ((t) => (t[t.WALLET_METAMASK = 0] = "WALLET_METAMASK", t[t.WALLET_CONNECT = 1] = "WALLET_CONNECT", t))(D || {});
const F = (t, l, a) => t ? a.some((r) => r.name === l.name) ? /* @__PURE__ */ o(i, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: l.name
  }), " network"]
}) : /* @__PURE__ */ o(i, {
  children: ["You connected to ", /* @__PURE__ */ o("span", {
    children: [l.name, "."]
  }), /* @__PURE__ */ o("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: a.map((r) => r.name).join(", ")
    })]
  })]
}) : null, U = (t) => {
  const [l, a] = T(!1), {
    onCancel: r,
    visible: b,
    supportedChains: p,
    chain: s,
    switchChain: y,
    canSwitchChain: I,
    connectAsync: k,
    account: d,
    connectorName: A,
    supportedConnectors: v
  } = t, N = async (e) => {
    a(!0);
    try {
      await k(e), r();
    } finally {
      a(!1);
    }
  }, W = async (e) => {
    a(!0);
    try {
      await y(e), r();
    } finally {
      a(!1);
    }
  }, j = /* @__PURE__ */ o(i, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge that you have read and understand the ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), C = (e, c, h) => {
    if (d && c === A)
      return /* @__PURE__ */ n(m, {
        disabled: !0,
        walletName: e,
        walletIcon: h,
        account: d
      });
    const w = v[c];
    return w.isInstalled ? /* @__PURE__ */ n(m, {
      walletName: e,
      onClick: () => N(c),
      walletIcon: h,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(m, {
      walletName: e,
      onClick: () => window.open(w.installUrl, "_blank").focus(),
      walletIcon: h,
      labelText: "Install"
    });
  }, O = (e) => {
    const {
      chainId: c
    } = e;
    return /* @__PURE__ */ n(u, {
      span: "24",
      children: /* @__PURE__ */ n(x, {
        onClick: () => W(c),
        loading: l,
        isActive: c === s.chainId,
        canSwitchChain: I,
        chain: e
      })
    }, c);
  }, f = [0, 12];
  return /* @__PURE__ */ n(_, {
    viewMode: "topGap",
    loading: l,
    footer: j,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: b,
    onCancel: r,
    children: /* @__PURE__ */ o(i, {
      children: [s && /* @__PURE__ */ o(i, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: F(d, s, p)
        }), /* @__PURE__ */ n(M, {
          gutter: f,
          className: "chain-buttons",
          children: p.map((e) => O(e))
        })]
      }), /* @__PURE__ */ o("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ o(M, {
        gutter: f,
        children: [window.ethereum && /* @__PURE__ */ n(u, {
          span: "24",
          children: C("Metamask", g.Injected, B)
        }), /* @__PURE__ */ n(u, {
          span: "24",
          children: C("WalletConnect", g.WalletConnect, S)
        })]
      })]
    })
  });
};
export {
  D as WALLETTYPE,
  U as default
};
