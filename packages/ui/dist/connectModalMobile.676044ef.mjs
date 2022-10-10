import { useState as T } from "react";
import { Row as g, Col as u } from "antd";
import { a as b, C as p, b as x, M as B, W as S } from "./index.es.7fdf14c4.mjs";
import { j as n, b as _, a as o, F as i } from "./index.48bb6552.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
var D = /* @__PURE__ */ ((e) => (e[e.WALLET_METAMASK = 0] = "WALLET_METAMASK", e[e.WALLET_CONNECT = 1] = "WALLET_CONNECT", e))(D || {});
const F = (e, l, a) => e ? a.some((c) => c.name === l.name) ? /* @__PURE__ */ o(i, {
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
      children: a.map((c) => c.name).join(", ")
    })]
  })]
}) : null, H = ({
  web3: e,
  visible: l,
  onCancel: a
}) => {
  const [c, s] = T(!1), {
    supportedChains: C,
    chain: d,
    switchChain: y,
    canSwitchChain: I,
    connectAsync: k,
    account: h,
    connectorName: A,
    supportedConnectors: v
  } = e, W = async (t) => {
    s(!0);
    try {
      await k(t), a();
    } finally {
      s(!1);
    }
  }, N = async (t) => {
    s(!0);
    try {
      await y(t), a();
    } finally {
      s(!1);
    }
  }, j = /* @__PURE__ */ o(i, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge that you have read and understand the ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), f = (t, r, m) => {
    if (h && r === A)
      return /* @__PURE__ */ n(p, {
        disabled: !0,
        walletName: t,
        walletIcon: m,
        account: h
      });
    const M = v[r];
    return M.isInstalled ? /* @__PURE__ */ n(p, {
      walletName: t,
      onClick: () => W(r),
      walletIcon: m,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(p, {
      walletName: t,
      onClick: () => window.open(M.installUrl, "_blank").focus(),
      walletIcon: m,
      labelText: "Install"
    });
  }, O = (t) => {
    const {
      chainId: r
    } = t;
    return /* @__PURE__ */ n(u, {
      span: "24",
      children: /* @__PURE__ */ n(x, {
        onClick: () => N(r),
        loading: c,
        isActive: r === d.chainId,
        canSwitchChain: I,
        chain: t
      })
    }, r);
  }, w = [0, 12];
  return /* @__PURE__ */ n(_, {
    viewMode: "topGap",
    loading: c,
    footer: j,
    className: "connect-wallet-mobile-modal",
    title: "Network & Wallet",
    visible: l,
    onCancel: a,
    children: /* @__PURE__ */ o(i, {
      children: [d && /* @__PURE__ */ o(i, {
        children: [/* @__PURE__ */ n("div", {
          className: "description",
          children: F(h, d, C)
        }), /* @__PURE__ */ n(g, {
          gutter: w,
          className: "chain-buttons",
          children: C.map((t) => O(t))
        })]
      }), /* @__PURE__ */ o("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ o(g, {
        gutter: w,
        children: [window.ethereum && /* @__PURE__ */ n(u, {
          span: "24",
          children: f("Metamask", b.Injected, B)
        }), /* @__PURE__ */ n(u, {
          span: "24",
          children: f("WalletConnect", b.WalletConnect, S)
        })]
      })]
    })
  });
};
export {
  D as WALLETTYPE,
  H as default
};
//# sourceMappingURL=connectModalMobile.676044ef.mjs.map
