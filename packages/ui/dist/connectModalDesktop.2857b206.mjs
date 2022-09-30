import { useState as O } from "react";
import { Row as g, Col as p } from "antd";
import { a as k, C as u, b as T, M as B, W as D } from "./index.es.f84669a0.mjs";
import { j as n, O as S, a as t, F as i } from "./index.f61c67c0.mjs";
import "ethers";
import "mobx-react";
import "mobx";
var _ = /* @__PURE__ */ ((o) => (o[o.WALLET_METAMASK = 0] = "WALLET_METAMASK", o[o.WALLET_CONNECT = 1] = "WALLET_CONNECT", o))(_ || {});
const F = (o, l, a) => o ? a.some((r) => r.name === l.name) ? /* @__PURE__ */ t(i, {
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
      children: a.map((r) => r.name).join(", ")
    })]
  })]
}) : null, z = (o) => {
  const [l, a] = O(!1), {
    onCancel: r,
    visible: y,
    supportedChains: m,
    chain: s,
    switchChain: I,
    canSwitchChain: b,
    connectAsync: v,
    account: d,
    connectorName: A,
    supportedConnectors: M
  } = o, j = async (e) => {
    a(!0);
    try {
      await v(e), r();
    } finally {
      a(!1);
    }
  }, W = async (e) => {
    a(!0);
    try {
      await I(e), r();
    } finally {
      a(!1);
    }
  }, x = /* @__PURE__ */ t(i, {
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
    if (d && c === A)
      return /* @__PURE__ */ n(u, {
        disabled: !0,
        walletName: e,
        walletIcon: h,
        account: d
      });
    const w = M[c];
    return w.isInstalled ? /* @__PURE__ */ n(u, {
      walletName: e,
      onClick: () => j(c),
      walletIcon: h,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(u, {
      walletName: e,
      onClick: () => window.open(w.installUrl, "_blank").focus(),
      walletIcon: h,
      labelText: "Install"
    });
  }, N = (e) => {
    const {
      chainId: c
    } = e;
    return /* @__PURE__ */ n(p, {
      flex: 3,
      children: /* @__PURE__ */ n(T, {
        onClick: () => W(c),
        loading: l,
        isActive: c === s.chainId,
        canSwitchChain: b,
        chain: e
      })
    }, c);
  }, f = [10, 0];
  return /* @__PURE__ */ n(S, {
    loading: l,
    footer: x,
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
          children: m.map((e) => N(e))
        })]
      }), /* @__PURE__ */ t("div", {
        className: "description",
        children: [/* @__PURE__ */ n("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ t(g, {
        gutter: f,
        justify: "space-between",
        children: [/* @__PURE__ */ n(p, {
          span: 12,
          children: C("Metamask", k.Injected, B)
        }), /* @__PURE__ */ n(p, {
          span: 12,
          children: C("WalletConnect", k.WalletConnect, D)
        })]
      })]
    })
  });
};
export {
  _ as WALLETTYPE,
  z as default
};
//# sourceMappingURL=connectModalDesktop.2857b206.mjs.map
