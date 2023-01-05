import { useState as S } from "react";
import { j as t, O as E, a as o, F as p, i as G } from "./index.513cfbf8.mjs";
import { Row as k, Col as m } from "antd";
import { A as R, B as U, n as W, C as u, a as q, M as z, W as H } from "./alert.1bff16ae.mjs";
import "ethers";
import "react-router-dom";
import "mobx-react";
import "mobx";
import "axios";
const J = "_modal_f97e5_5", K = "_description_f97e5_8", P = "_chain_buttons_f97e5_18", c = {
  modal: J,
  description: K,
  chain_buttons: P
}, ot = ({
  web3: j,
  onCancel: a,
  visible: B,
  onClose: f,
  afterChainSwitch: C,
  afterConnect: _,
  expectedChainId: w
}) => {
  const [y, i] = S(!1), {
    supportedChains: s,
    chain: r,
    switchChain: v,
    canSwitchChain: x,
    connect: M,
    account: l,
    connectorName: A,
    supportedConnectors: O
  } = j, T = async (n, e) => {
    i(!0);
    try {
      await M(n, e), a && a(), _ && _();
    } finally {
      i(!1);
    }
  }, D = async (n) => {
    i(!0);
    try {
      await v(n), a && a(), C && C();
    } finally {
      i(!1);
    }
  }, F = /* @__PURE__ */ o(p, {
    children: [/* @__PURE__ */ o("div", {
      children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ t("a", {
        href: "https://oort.digital/terms",
        children: "Terms of Service"
      }), " and acknowledge"]
    }), /* @__PURE__ */ o("div", {
      children: ["that you have read and understand the ", /* @__PURE__ */ t("a", {
        href: "https://oort.digital/terms#disclaimer",
        children: "Oort Digital protocol disclaimer"
      })]
    })]
  }), I = (n, e, d, h) => {
    if (l && d === A)
      return /* @__PURE__ */ t(u, {
        disabled: !0,
        walletName: e,
        walletIcon: h,
        account: l
      });
    const b = O[d];
    return b.isInstalled ? /* @__PURE__ */ t(u, {
      walletName: e,
      onClick: () => T(n, d),
      walletIcon: h,
      labelText: "Connect"
    }) : /* @__PURE__ */ t(u, {
      walletName: e,
      onClick: () => window.open(b.installUrl, "_blank").focus(),
      walletIcon: h,
      labelText: "Install"
    });
  }, N = (n) => {
    const {
      chainId: e
    } = n;
    return /* @__PURE__ */ t(m, {
      flex: 3,
      children: /* @__PURE__ */ t(q, {
        onClick: () => D(e),
        loading: y,
        expectedChainId: w,
        connectedChainId: r.chainId,
        canSwitchChain: x,
        chain: n
      })
    }, e);
  }, g = [10, 0], L = () => {
    f && f(), a && a();
  };
  return /* @__PURE__ */ t(E, {
    loading: y,
    footer: F,
    className: c.modal,
    title: "Network & Wallet",
    width: "690px",
    visible: B,
    onCancel: () => L(),
    children: /* @__PURE__ */ o(p, {
      children: [!G(r) && /* @__PURE__ */ o(p, {
        children: [/* @__PURE__ */ t("div", {
          className: c.description,
          children: /* @__PURE__ */ t(R, {
            account: l,
            chain: r,
            supportedChains: s,
            expectedChainId: w
          })
        }), /* @__PURE__ */ t(k, {
          gutter: g,
          className: c.chain_buttons,
          justify: "space-between",
          children: s.map((n) => N(n))
        })]
      }), /* @__PURE__ */ o("div", {
        className: c.description,
        children: [/* @__PURE__ */ t(U, {
          children: "Connect your Wallet"
        }), " and jump into the world of NFT's"]
      }), /* @__PURE__ */ o(k, {
        gutter: g,
        justify: "space-between",
        children: [/* @__PURE__ */ t(m, {
          span: 12,
          children: I(s[0].chainId, "Metamask", W.Injected, z)
        }), /* @__PURE__ */ t(m, {
          span: 12,
          children: I(s[0].chainId, "WalletConnect", W.WalletConnect, H)
        })]
      })]
    })
  });
};
export {
  ot as default
};
//# sourceMappingURL=connectModalDesktop.ed0e26e7.mjs.map
