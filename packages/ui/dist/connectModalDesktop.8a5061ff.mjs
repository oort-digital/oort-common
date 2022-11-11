import { useState as L } from "react";
import { j as t, O as S, a as e, F as i, i as E } from "./index.34f92fe0.mjs";
import { Row as M, Col as u } from "antd";
import { a as b, C as m, b as F, M as K, W as G } from "./chainButtonWithLogic.615e2c4a.mjs";
import "react-router-dom";
import "ethers";
import "mobx-react";
import "mobx";
var R = /* @__PURE__ */ ((o) => (o[o.WALLET_METAMASK = 0] = "WALLET_METAMASK", o[o.WALLET_CONNECT = 1] = "WALLET_CONNECT", o))(R || {});
const U = (o, r, l) => o ? l.some((a) => a.name === r.name) ? /* @__PURE__ */ e(i, {
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
      children: l.map((a) => a.name).join(", ")
    })]
  })]
}) : null, $ = ({
  web3: o,
  onCancel: r,
  visible: l,
  onClose: a,
  afterChainSwitch: f,
  afterConnect: C,
  expectedChainId: A
}) => {
  const [w, s] = L(!1), {
    supportedChains: g,
    chain: d,
    switchChain: W,
    canSwitchChain: j,
    connectAsync: v,
    account: h,
    connectorName: x,
    supportedConnectors: N
  } = o, O = async (n) => {
    s(!0);
    try {
      await v(n), r && r(), C && C();
    } finally {
      s(!1);
    }
  }, T = async (n) => {
    s(!0);
    try {
      await W(n), r && r(), f && f();
    } finally {
      s(!1);
    }
  }, _ = /* @__PURE__ */ e(i, {
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
  }), y = (n, c, p) => {
    if (h && c === x)
      return /* @__PURE__ */ t(m, {
        disabled: !0,
        walletName: n,
        walletIcon: p,
        account: h
      });
    const I = N[c];
    return I.isInstalled ? /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => O(c),
      walletIcon: p,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(m, {
      walletName: n,
      onClick: () => window.open(I.installUrl, "_blank").focus(),
      walletIcon: p,
      labelText: "Install"
    });
  }, B = (n) => {
    const {
      chainId: c
    } = n;
    return /* @__PURE__ */ t(u, {
      flex: 3,
      children: /* @__PURE__ */ t(F, {
        onClick: () => T(c),
        loading: w,
        expectedChainId: A,
        connectedChainId: d.chainId,
        canSwitchChain: j,
        chain: n
      })
    }, c);
  }, k = [10, 0], D = () => {
    a && a(), r && r();
  };
  return /* @__PURE__ */ t(S, {
    loading: w,
    footer: _,
    className: "connect-wallet-desktop-modal",
    title: "Network & Wallet",
    width: "690px",
    visible: l,
    onCancel: () => D(),
    children: /* @__PURE__ */ e(i, {
      children: [!E(d) && /* @__PURE__ */ e(i, {
        children: [/* @__PURE__ */ t("div", {
          className: "description",
          children: U(h, d, g)
        }), /* @__PURE__ */ t(M, {
          gutter: k,
          className: "chain-buttons",
          justify: "space-between",
          children: g.map((n) => B(n))
        })]
      }), /* @__PURE__ */ e("div", {
        className: "description",
        children: [/* @__PURE__ */ t("span", {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ e(M, {
        gutter: k,
        justify: "space-between",
        children: [/* @__PURE__ */ t(u, {
          span: 12,
          children: y("Metamask", b.Injected, K)
        }), /* @__PURE__ */ t(u, {
          span: 12,
          children: y("WalletConnect", b.WalletConnect, G)
        })]
      })]
    })
  });
};
export {
  R as WALLETTYPE,
  $ as default
};
//# sourceMappingURL=connectModalDesktop.8a5061ff.mjs.map
