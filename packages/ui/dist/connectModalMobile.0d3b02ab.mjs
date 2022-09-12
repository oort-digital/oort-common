import { useState as T } from "react";
import { Row as M, Col as u } from "antd";
import { a as b, C as m, b as x, M as B, W as S } from "./index.es.59aa3209.mjs";
import { j as n, b as _, a as o, F as i } from "./index.95e59bd0.mjs";
import "ethers";
var D = /* @__PURE__ */ ((t) => (t[t.WALLET_METAMASK = 0] = "WALLET_METAMASK", t[t.WALLET_CONNECT = 1] = "WALLET_CONNECT", t))(D || {});
const F = (t, c, a) => t ? a.some((r) => r.name === c.name) ? /* @__PURE__ */ o(i, {
  children: ["You are currently using ", /* @__PURE__ */ n("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n("span", {
    children: c.name
  }), " network"]
}) : /* @__PURE__ */ o(i, {
  children: ["You connected to ", /* @__PURE__ */ o("span", {
    children: [c.name, "."]
  }), /* @__PURE__ */ o("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n("span", {
      children: a.map((r) => r.name).join(", ")
    })]
  })]
}) : null, U = (t) => {
  const [c, a] = T(!1), {
    onCancel: r,
    visible: g,
    supportedChains: p,
    chain: s,
    switchChain: y,
    canSwitchChain: I,
    connectAsync: k,
    account: d,
    connectorName: A,
    supportedConnectors: v
  } = t, W = async (e) => {
    a(!0);
    try {
      await k(e), r();
    } finally {
      a(!1);
    }
  }, N = async (e) => {
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
  }), C = (e, l, h) => {
    if (d && l === A)
      return /* @__PURE__ */ n(m, {
        disabled: !0,
        walletName: e,
        walletIcon: h,
        account: d
      });
    const w = v[l];
    return w.isInstalled ? /* @__PURE__ */ n(m, {
      walletName: e,
      onClick: () => W(l),
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
      chainId: l
    } = e;
    return /* @__PURE__ */ n(u, {
      span: "24",
      children: /* @__PURE__ */ n(x, {
        onClick: () => N(l),
        loading: c,
        isActive: l === s.chainId,
        canSwitchChain: I,
        chain: e
      })
    }, l);
  }, f = [0, 12];
  return /* @__PURE__ */ n(_, {
    viewMode: "topGap",
    loading: c,
    footer: j,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: g,
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
          children: C("Metamask", b.Injected, B)
        }), /* @__PURE__ */ n(u, {
          span: "24",
          children: C("WalletConnect", b.WalletConnect, S)
        })]
      })]
    })
  });
};
export {
  D as WALLETTYPE,
  U as default
};
//# sourceMappingURL=connectModalMobile.0d3b02ab.mjs.map
