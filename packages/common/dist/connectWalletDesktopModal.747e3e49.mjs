import { useState as O } from "react";
import { Row as g, Col as u } from "antd";
import { j as e, O as T, a as t, F as i, C as y } from "./index.ee7bfd24.mjs";
import { C as p, a as B, M as S, W as _ } from "./chainButton.dfac6f8c.mjs";
import "ethers";
var D = /* @__PURE__ */ ((a) => (a[a.WALLET_METAMASK = 0] = "WALLET_METAMASK", a[a.WALLET_CONNECT = 1] = "WALLET_CONNECT", a))(D || {});
const F = (a, c, r) => a ? r.some((o) => o.name === c.name) ? /* @__PURE__ */ t(i, {
  children: ["You are currently using ", /* @__PURE__ */ e("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ e("span", {
    children: c.name
  }), " network"]
}) : /* @__PURE__ */ t(i, {
  children: ["You connected to ", /* @__PURE__ */ t("span", {
    children: [c.name, "."]
  }), /* @__PURE__ */ t("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ e("span", {
      children: r.map((o) => o.name).join(", ")
    })]
  })]
}) : null, U = (a) => {
  const [c, r] = O(!1), {
    onCancel: o,
    visible: k,
    supportedChains: m,
    chain: s,
    switchChain: I,
    canSwitchChain: v,
    connectAsync: A,
    account: d,
    connectorName: W,
    supportedConnectors: b
  } = a, M = async (n) => {
    r(!0);
    try {
      await A(n), o();
    } finally {
      r(!1);
    }
  }, j = async (n) => {
    r(!0);
    try {
      await I(n), o();
    } finally {
      r(!1);
    }
  }, N = /* @__PURE__ */ t(i, {
    children: [/* @__PURE__ */ t("div", {
      children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ e("a", {
        href: "https://oort.digital/terms",
        children: "Terms of Service"
      }), " and acknowledge"]
    }), /* @__PURE__ */ t("div", {
      children: ["that you have read and understand the ", /* @__PURE__ */ e("a", {
        href: "https://oort.digital/terms#disclaimer",
        children: "Oort Digital protocol disclaimer"
      })]
    })]
  }), C = (n, l, h) => {
    if (d && l === W)
      return /* @__PURE__ */ e(p, {
        disabled: !0,
        walletName: n,
        walletIcon: h,
        account: d
      });
    const w = b[l];
    return w.isInstalled ? /* @__PURE__ */ e(p, {
      walletName: n,
      onClick: () => M(l),
      walletIcon: h,
      labelText: "Connect"
    }) : /* @__PURE__ */ e(p, {
      walletName: n,
      onClick: () => window.open(w.installUrl, "_blank").focus(),
      walletIcon: h,
      labelText: "Install"
    });
  }, x = (n) => {
    const {
      chainId: l
    } = n;
    return /* @__PURE__ */ e(u, {
      flex: 3,
      children: /* @__PURE__ */ e(B, {
        onClick: () => j(l),
        loading: c,
        isActive: l === s.chainId,
        canSwitchChain: v,
        chain: n
      })
    }, l);
  }, f = [10, 0];
  return /* @__PURE__ */ e(T, {
    loading: c,
    footer: N,
    className: "connect-wallet-desktop-modal",
    title: "Network & Wallet",
    width: "690px",
    visible: k,
    onCancel: o,
    children: /* @__PURE__ */ t(i, {
      children: [s && /* @__PURE__ */ t(i, {
        children: [/* @__PURE__ */ e("div", {
          className: "description",
          children: F(d, s, m)
        }), /* @__PURE__ */ e(g, {
          gutter: f,
          className: "chain-buttons",
          justify: "space-between",
          children: m.map((n) => x(n))
        })]
      }), /* @__PURE__ */ t("div", {
        className: "description",
        children: [/* @__PURE__ */ e("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ t(g, {
        gutter: f,
        justify: "space-between",
        children: [/* @__PURE__ */ e(u, {
          span: 12,
          children: C("Metamask", y.Injected, S)
        }), /* @__PURE__ */ e(u, {
          span: 12,
          children: C("WalletConnect", y.WalletConnect, _)
        })]
      })]
    })
  });
};
export {
  D as WALLETTYPE,
  U as default
};
