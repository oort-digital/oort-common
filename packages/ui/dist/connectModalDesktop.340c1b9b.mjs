import { useState as D } from "react";
import { Row as A, Col as p } from "antd";
import { a as M, C as m, b as S, M as F, W as L } from "./index.es.46a1bf80.mjs";
import { j as t, O as E, a as e, F as l } from "./index.125e7496.mjs";
import "ethers";
import "react-router-dom";
var K = /* @__PURE__ */ ((o) => (o[o.WALLET_METAMASK = 0] = "WALLET_METAMASK", o[o.WALLET_CONNECT = 1] = "WALLET_CONNECT", o))(K || {});
const G = (o, r, i) => o ? i.some((c) => c.name === r.name) ? /* @__PURE__ */ e(l, {
  children: ["You are currently using ", /* @__PURE__ */ t("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ t("span", {
    children: r.name
  }), " network"]
}) : /* @__PURE__ */ e(l, {
  children: ["You connected to ", /* @__PURE__ */ e("span", {
    children: [r.name, "."]
  }), /* @__PURE__ */ e("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ t("span", {
      children: i.map((c) => c.name).join(", ")
    })]
  })]
}) : null, Q = ({
  web3: o,
  onCancel: r,
  visible: i,
  onClose: c,
  afterChainSwitch: f,
  afterConnect: w
}) => {
  const [C, s] = D(!1), {
    supportedChains: g,
    chain: d,
    switchChain: b,
    canSwitchChain: v,
    connectAsync: j,
    account: h,
    connectorName: W,
    supportedConnectors: x
  } = o, N = async (n) => {
    s(!0);
    try {
      await j(n), r && r(), w && w();
    } finally {
      s(!1);
    }
  }, O = async (n) => {
    s(!0);
    try {
      await b(n), r && r(), f && f();
    } finally {
      s(!1);
    }
  }, T = /* @__PURE__ */ e(l, {
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
  }), k = (n, a, u) => {
    if (h && a === W)
      return /* @__PURE__ */ t(m, {
        disabled: !0,
        walletName: n,
        walletIcon: u,
        account: h
      });
    const I = x[a];
    return I.isInstalled ? /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => N(a),
      walletIcon: u,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => window.open(I.installUrl, "_blank").focus(),
      walletIcon: u,
      labelText: "Install"
    });
  }, _ = (n) => {
    const {
      chainId: a
    } = n;
    return /* @__PURE__ */ t(p, {
      flex: 3,
      children: /* @__PURE__ */ t(S, {
        onClick: () => O(a),
        loading: C,
        isActive: a === d.chainId,
        canSwitchChain: v,
        chain: n
      })
    }, a);
  }, y = [10, 0], B = () => {
    c && c(), r && r();
  };
  return /* @__PURE__ */ t(E, {
    loading: C,
    footer: T,
    className: "connect-wallet-desktop-modal",
    title: "Network & Wallet",
    width: "690px",
    visible: i,
    onCancel: () => B(),
    children: /* @__PURE__ */ e(l, {
      children: [d && /* @__PURE__ */ e(l, {
        children: [/* @__PURE__ */ t("div", {
          className: "description",
          children: G(h, d, g)
        }), /* @__PURE__ */ t(A, {
          gutter: y,
          className: "chain-buttons",
          justify: "space-between",
          children: g.map((n) => _(n))
        })]
      }), /* @__PURE__ */ e("div", {
        className: "description",
        children: [/* @__PURE__ */ t("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ e(A, {
        gutter: y,
        justify: "space-between",
        children: [/* @__PURE__ */ t(p, {
          span: 12,
          children: k("Metamask", M.Injected, F)
        }), /* @__PURE__ */ t(p, {
          span: 12,
          children: k("WalletConnect", M.WalletConnect, L)
        })]
      })]
    })
  });
};
export {
  K as WALLETTYPE,
  Q as default
};
//# sourceMappingURL=connectModalDesktop.340c1b9b.mjs.map
