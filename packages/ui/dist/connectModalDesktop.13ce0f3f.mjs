import { useState as D } from "react";
import { j as t, O as S, a as e, b as i, i as E } from "./index.7d7d73c5.mjs";
import { Row as b, Col as u } from "antd";
import { a as A, C as m, b as L, M as F, W as K } from "./index.es.0f51c703.mjs";
import "react-router-dom";
import "mobx-react";
import "mobx";
import "ethers";
var G = /* @__PURE__ */ ((o) => (o[o.WALLET_METAMASK = 0] = "WALLET_METAMASK", o[o.WALLET_CONNECT = 1] = "WALLET_CONNECT", o))(G || {});
const R = (o, r, l) => o ? l.some((c) => c.name === r.name) ? /* @__PURE__ */ e(i, {
  children: ["You are currently using ", /* @__PURE__ */ t("span", {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ t("span", {
    children: r.name
  }), " network"]
}) : /* @__PURE__ */ e(i, {
  children: ["You connected to ", /* @__PURE__ */ e("span", {
    children: [r.name, "."]
  }), /* @__PURE__ */ e("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ t("span", {
      children: l.map((c) => c.name).join(", ")
    })]
  })]
}) : null, Z = ({
  web3: o,
  onCancel: r,
  visible: l,
  onClose: c,
  afterChainSwitch: f,
  afterConnect: C
}) => {
  const [w, s] = D(!1), {
    supportedChains: y,
    chain: d,
    switchChain: M,
    canSwitchChain: v,
    connectAsync: j,
    account: h,
    connectorName: W,
    supportedConnectors: x
  } = o, N = async (n) => {
    s(!0);
    try {
      await j(n), r && r(), C && C();
    } finally {
      s(!1);
    }
  }, O = async (n) => {
    s(!0);
    try {
      await M(n), r && r(), f && f();
    } finally {
      s(!1);
    }
  }, T = /* @__PURE__ */ e(i, {
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
  }), g = (n, a, p) => {
    if (h && a === W)
      return /* @__PURE__ */ t(m, {
        disabled: !0,
        walletName: n,
        walletIcon: p,
        account: h
      });
    const I = x[a];
    return I.isInstalled ? /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => N(a),
      walletIcon: p,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => window.open(I.installUrl, "_blank").focus(),
      walletIcon: p,
      labelText: "Install"
    });
  }, _ = (n) => {
    const {
      chainId: a
    } = n;
    return /* @__PURE__ */ t(u, {
      flex: 3,
      children: /* @__PURE__ */ t(L, {
        onClick: () => O(a),
        loading: w,
        isActive: a === d.chainId,
        canSwitchChain: v,
        chain: n
      })
    }, a);
  }, k = [10, 0], B = () => {
    c && c(), r && r();
  };
  return /* @__PURE__ */ t(S, {
    loading: w,
    footer: T,
    className: "connect-wallet-desktop-modal",
    title: "Network & Wallet",
    width: "690px",
    visible: l,
    onCancel: () => B(),
    children: /* @__PURE__ */ e(i, {
      children: [!E(d) && /* @__PURE__ */ e(i, {
        children: [/* @__PURE__ */ t("div", {
          className: "description",
          children: R(h, d, y)
        }), /* @__PURE__ */ t(b, {
          gutter: k,
          className: "chain-buttons",
          justify: "space-between",
          children: y.map((n) => _(n))
        })]
      }), /* @__PURE__ */ e("div", {
        className: "description",
        children: [/* @__PURE__ */ t("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ e(b, {
        gutter: k,
        justify: "space-between",
        children: [/* @__PURE__ */ t(u, {
          span: 12,
          children: g("Metamask", A.Injected, F)
        }), /* @__PURE__ */ t(u, {
          span: 12,
          children: g("WalletConnect", A.WalletConnect, K)
        })]
      })]
    })
  });
};
export {
  G as WALLETTYPE,
  Z as default
};
//# sourceMappingURL=connectModalDesktop.13ce0f3f.mjs.map
