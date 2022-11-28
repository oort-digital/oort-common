import { useState as L } from "react";
import { j as t, O as S, a as e, F as d, i as E } from "./index.57bdb138.mjs";
import { Row as I, Col as h } from "antd";
import { A as G, B as R, a as k, C as p, b as U, M as q, W as z } from "./alert.d0ef240e.mjs";
import "react-router-dom";
import "ethers";
import "mobx-react";
import "mobx";
const H = "_modal_f97e5_5", J = "_description_f97e5_8", K = "_chain_buttons_f97e5_18", i = {
  modal: H,
  description: J,
  chain_buttons: K
}, nt = ({
  web3: W,
  onCancel: o,
  visible: j,
  onClose: u,
  afterChainSwitch: m,
  afterConnect: f,
  expectedChainId: C
}) => {
  const [_, s] = L(!1), {
    supportedChains: w,
    chain: c,
    switchChain: B,
    canSwitchChain: v,
    connectAsync: x,
    account: r,
    connectorName: A,
    supportedConnectors: M
  } = W, O = async (n) => {
    s(!0);
    try {
      await x(n), o && o(), f && f();
    } finally {
      s(!1);
    }
  }, T = async (n) => {
    s(!0);
    try {
      await B(n), o && o(), m && m();
    } finally {
      s(!1);
    }
  }, D = /* @__PURE__ */ e(d, {
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
  }), y = (n, a, l) => {
    if (r && a === A)
      return /* @__PURE__ */ t(p, {
        disabled: !0,
        walletName: n,
        walletIcon: l,
        account: r
      });
    const g = M[a];
    return g.isInstalled ? /* @__PURE__ */ t(p, {
      walletName: n,
      onClick: () => O(a),
      walletIcon: l,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(p, {
      walletName: n,
      onClick: () => window.open(g.installUrl, "_blank").focus(),
      walletIcon: l,
      labelText: "Install"
    });
  }, F = (n) => {
    const {
      chainId: a
    } = n;
    return /* @__PURE__ */ t(h, {
      flex: 3,
      children: /* @__PURE__ */ t(U, {
        onClick: () => T(a),
        loading: _,
        expectedChainId: C,
        connectedChainId: c.chainId,
        canSwitchChain: v,
        chain: n
      })
    }, a);
  }, b = [10, 0], N = () => {
    u && u(), o && o();
  };
  return /* @__PURE__ */ t(S, {
    loading: _,
    footer: D,
    className: i.modal,
    title: "Network & Wallet",
    width: "690px",
    visible: j,
    onCancel: () => N(),
    children: /* @__PURE__ */ e(d, {
      children: [!E(c) && /* @__PURE__ */ e(d, {
        children: [/* @__PURE__ */ t("div", {
          className: i.description,
          children: /* @__PURE__ */ t(G, {
            account: r,
            chain: c,
            supportedChains: w,
            expectedChainId: C
          })
        }), /* @__PURE__ */ t(I, {
          gutter: b,
          className: i.chain_buttons,
          justify: "space-between",
          children: w.map((n) => F(n))
        })]
      }), /* @__PURE__ */ e("div", {
        className: i.description,
        children: [/* @__PURE__ */ t(R, {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ e(I, {
        gutter: b,
        justify: "space-between",
        children: [/* @__PURE__ */ t(h, {
          span: 12,
          children: y("Metamask", k.Injected, q)
        }), /* @__PURE__ */ t(h, {
          span: 12,
          children: y("WalletConnect", k.WalletConnect, z)
        })]
      })]
    })
  });
};
export {
  nt as default
};
//# sourceMappingURL=connectModalDesktop.980362a0.mjs.map