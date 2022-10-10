import { useState as O } from "react";
import { Row as k, Col as u } from "antd";
import { a as y, C as m, b as T, M as B, W as D } from "./index.es.3275fbd7.mjs";
import { j as t, O as S, a as e, F as i } from "./index.8024a22d.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
var _ = /* @__PURE__ */ ((r) => (r[r.WALLET_METAMASK = 0] = "WALLET_METAMASK", r[r.WALLET_CONNECT = 1] = "WALLET_CONNECT", r))(_ || {});
const F = (r, o, l) => r ? l.some((c) => c.name === o.name) ? /* @__PURE__ */ e(i, {
  children: ["You are currently using ", /* @__PURE__ */ t("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ t("span", {
    children: o.name
  }), " network"]
}) : /* @__PURE__ */ e(i, {
  children: ["You connected to ", /* @__PURE__ */ e("span", {
    children: [o.name, "."]
  }), /* @__PURE__ */ e("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ t("span", {
      children: l.map((c) => c.name).join(", ")
    })]
  })]
}) : null, H = ({
  web3: r,
  onCancel: o,
  visible: l
}) => {
  const [c, s] = O(!1), {
    supportedChains: f,
    chain: d,
    switchChain: I,
    canSwitchChain: A,
    connectAsync: M,
    account: h,
    connectorName: b,
    supportedConnectors: v
  } = r, j = async (n) => {
    s(!0);
    try {
      await M(n), o();
    } finally {
      s(!1);
    }
  }, W = async (n) => {
    s(!0);
    try {
      await I(n), o();
    } finally {
      s(!1);
    }
  }, x = /* @__PURE__ */ e(i, {
    children: [/* @__PURE__ */ e("div", {
      children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ t("a", {
        href: "https://oort.digital/terms",
        children: "Terms of Service"
      }), " and acknowledge"]
    }), /* @__PURE__ */ e("div", {
      children: ["that you have read and understand the ", /* @__PURE__ */ t("a", {
        href: "https://oort.digital/terms#disclaimer",
        children: "Oort Digital protocol disclaimer"
      })]
    })]
  }), C = (n, a, p) => {
    if (h && a === b)
      return /* @__PURE__ */ t(m, {
        disabled: !0,
        walletName: n,
        walletIcon: p,
        account: h
      });
    const g = v[a];
    return g.isInstalled ? /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => j(a),
      walletIcon: p,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => window.open(g.installUrl, "_blank").focus(),
      walletIcon: p,
      labelText: "Install"
    });
  }, N = (n) => {
    const {
      chainId: a
    } = n;
    return /* @__PURE__ */ t(u, {
      flex: 3,
      children: /* @__PURE__ */ t(T, {
        onClick: () => W(a),
        loading: c,
        isActive: a === d.chainId,
        canSwitchChain: A,
        chain: n
      })
    }, a);
  }, w = [10, 0];
  return /* @__PURE__ */ t(S, {
    loading: c,
    footer: x,
    className: "connect-wallet-desktop-modal",
    title: "Network & Wallet",
    width: "690px",
    visible: l,
    onCancel: o,
    children: /* @__PURE__ */ e(i, {
      children: [d && /* @__PURE__ */ e(i, {
        children: [/* @__PURE__ */ t("div", {
          className: "description",
          children: F(h, d, f)
        }), /* @__PURE__ */ t(k, {
          gutter: w,
          className: "chain-buttons",
          justify: "space-between",
          children: f.map((n) => N(n))
        })]
      }), /* @__PURE__ */ e("div", {
        className: "description",
        children: [/* @__PURE__ */ t("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ e(k, {
        gutter: w,
        justify: "space-between",
        children: [/* @__PURE__ */ t(u, {
          span: 12,
          children: C("Metamask", y.Injected, B)
        }), /* @__PURE__ */ t(u, {
          span: 12,
          children: C("WalletConnect", y.WalletConnect, D)
        })]
      })]
    })
  });
};
export {
  _ as WALLETTYPE,
  H as default
};
//# sourceMappingURL=connectModalDesktop.c470fe7a.mjs.map
