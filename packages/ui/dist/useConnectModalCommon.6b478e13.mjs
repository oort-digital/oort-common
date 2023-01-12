import { ConnectorNames as u } from "@oort/web3-connectors";
import { Button as A1, Spin as e1, Row as N, Col as v } from "antd";
import * as S from "react";
import { useState as o1 } from "react";
import { A as t1, _ as b, j as n, g as i1, t as r1, a as r, I as G, F as w, b as s1, i as a1 } from "./index.861fe827.mjs";
import "ethers";
var l1 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const c1 = l1;
var X = function(e, i) {
  return /* @__PURE__ */ S.createElement(t1, b(b({}, e), {}, {
    ref: i,
    icon: c1
  }));
};
X.displayName = "LoadingOutlined";
const L1 = /* @__PURE__ */ S.forwardRef(X), d1 = "_btn_1ij5m_5", h1 = "_active_1ij5m_19", f1 = "_can_not_switch_1ij5m_36", D = {
  btn: d1,
  active: h1,
  can_not_switch: f1
}, B1 = ({
  chain: A,
  loading: e,
  disabled: i,
  isActive: s,
  canSwitchChain: o,
  onClick: d
}) => {
  const {
    name: c,
    chainId: a
  } = A;
  let t = s ? D.active : D.btn;
  const B = o && !s;
  let L;
  return B ? L = () => d() : (t = `${t} ${D.can_not_switch}`, L = () => {
  }), /* @__PURE__ */ n(A1, {
    block: !0,
    className: t,
    disabled: e || i,
    icon: i1(a, 23, 23),
    onClick: L,
    children: c
  });
}, w1 = ({
  chain: A,
  loading: e,
  connectedChainId: i,
  expectedChainId: s,
  canSwitchChain: o,
  onClick: d
}) => {
  const {
    chainId: c
  } = A, a = c === i;
  let t;
  return !a && s && (t = c !== s), /* @__PURE__ */ n(B1, {
    onClick: d,
    loading: e,
    disabled: t,
    isActive: a,
    canSwitchChain: o,
    chain: A
  });
}, p1 = "_button_1evvb_5", C1 = "_wallet_name_1evvb_18", v1 = "_acc_1evvb_27", u1 = "_cnn_1evvb_37", P1 = "_active_1evvb_47", k1 = "_disabled_1evvb_55", E1 = "_loading_1evvb_58", F1 = "_spinner_1evvb_66", f = {
  button: p1,
  wallet_name: C1,
  acc: v1,
  cnn: u1,
  active: P1,
  disabled: k1,
  loading: E1,
  spinner: F1
}, g1 = /* @__PURE__ */ n(e1, {
  className: f.spinner,
  indicator: /* @__PURE__ */ n(L1, {
    style: {
      fontSize: 24
    },
    spin: !0
  })
}), U = ({
  account: A,
  onClick: e,
  walletIcon: i,
  walletName: s,
  labelText: o,
  loading: d,
  disabled: c
}) => {
  let a, t = f.button;
  A ? (a = /* @__PURE__ */ n("span", {
    className: f.acc,
    children: r1(A)
  }), t = `${t} ${f.active}`) : d ? (a = g1, t = `${t} ${f.loading}`) : c ? (a = /* @__PURE__ */ n("span", {
    className: f.cnn,
    children: o
  }), t = `${t} ${f.disabled}`) : a = /* @__PURE__ */ n("span", {
    className: f.cnn,
    children: o
  });
  let B = e;
  return (A || d || c) && (B = void 0), /* @__PURE__ */ r("div", {
    onClick: B,
    className: t,
    children: [i, /* @__PURE__ */ n("span", {
      className: f.wallet_name,
      children: s
    }), a]
  });
}, x1 = () => /* @__PURE__ */ r("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ n("path", {
    d: "M29.5057 2.09412L17.7998 10.7882L19.9645 5.65882L29.5057 2.09412Z",
    fill: "#E2761B",
    stroke: "#E2761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M2.48242 2.09412L14.0942 10.8706L12.0354 5.65882L2.48242 2.09412Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M25.2944 22.2471L22.1768 27.0235L28.8473 28.8588L30.765 22.353L25.2944 22.2471Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M1.24707 22.353L3.15295 28.8588L9.82354 27.0235L6.70589 22.2471L1.24707 22.353Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M9.44671 14.1764L7.58789 16.9882L14.2114 17.2823L13.9761 10.1647L9.44671 14.1764Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M22.541 14.1765L17.9527 10.0823L17.7998 17.2823L24.4116 16.9882L22.541 14.1765Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M9.82324 27.0236L13.7997 25.0824L10.3644 22.4L9.82324 27.0236Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M18.1885 25.0824L22.1767 27.0236L21.6238 22.4L18.1885 25.0824Z",
    fill: "#E4761B",
    stroke: "#E4761B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M22.1767 27.0236L18.1885 25.0824L18.5061 27.6824L18.4708 28.7765L22.1767 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M9.82422 27.0236L13.5301 28.7765L13.5066 27.6824L13.8007 25.0824L9.82422 27.0236Z",
    fill: "#D7C1B3",
    stroke: "#D7C1B3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M13.5882 20.6824L10.2705 19.7059L12.6117 18.6353L13.5882 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M18.4004 20.6824L19.3769 18.6353L21.7298 19.7059L18.4004 20.6824Z",
    fill: "#233447",
    stroke: "#233447",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M9.8237 27.0235L10.3884 22.2471L6.70605 22.353L9.8237 27.0235Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M21.6123 22.2471L22.177 27.0235L25.2947 22.353L21.6123 22.2471Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M24.4116 16.9882L17.7998 17.2823L18.4116 20.6823L19.388 18.6353L21.741 19.7059L24.4116 16.9882Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M10.2702 19.7059L12.6232 18.6353L13.5879 20.6823L14.2114 17.2823L7.58789 16.9882L10.2702 19.7059Z",
    fill: "#CD6116",
    stroke: "#CD6116",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M7.58887 16.9883L10.3653 22.4L10.2712 19.7059L7.58887 16.9883Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M21.7417 19.7059L21.624 22.4L24.4123 16.9883L21.7417 19.7059Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M14.2124 17.2824L13.5889 20.6824L14.3653 24.6942L14.5418 19.4118L14.2124 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M17.801 17.2824L17.4834 19.4001L17.6246 24.6942L18.4128 20.6824L17.801 17.2824Z",
    fill: "#E4751F",
    stroke: "#E4751F",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M18.4123 20.6823L17.624 24.6941L18.1887 25.0823L21.624 22.4L21.7417 19.7059L18.4123 20.6823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M10.2705 19.7059L10.3646 22.4L13.7999 25.0823L14.3646 24.6941L13.5882 20.6823L10.2705 19.7059Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M18.4703 28.7765L18.5056 27.6824L18.2115 27.4236H13.7762L13.5056 27.6824L13.5291 28.7765L9.82324 27.0236L11.1174 28.0824L13.7409 29.9059H18.2468L20.8821 28.0824L22.1762 27.0236L18.4703 28.7765Z",
    fill: "#C0AD9E",
    stroke: "#C0AD9E",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M18.1882 25.0823L17.6235 24.6941H14.3647L13.8 25.0823L13.5059 27.6823L13.7764 27.4235H18.2117L18.5059 27.6823L18.1882 25.0823Z",
    fill: "#161616",
    stroke: "#161616",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M30.0002 11.3529L31.0002 6.55294L29.5061 2.09412L18.1885 10.4941L22.5414 14.1765L28.6944 15.9765L30.0591 14.3882L29.4708 13.9647L30.412 13.1059L29.6826 12.5412L30.6238 11.8235L30.0002 11.3529Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M1 6.55294L2 11.3529L1.36471 11.8235L2.30588 12.5412L1.58824 13.1059L2.52941 13.9647L1.94118 14.3882L3.29412 15.9765L9.44706 14.1765L13.8 10.4941L2.48235 2.09412L1 6.55294Z",
    fill: "#763D16",
    stroke: "#763D16",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M28.6946 15.9765L22.5417 14.1765L24.4123 16.9882L21.624 22.4L25.2946 22.3529H30.7652L28.6946 15.9765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M9.44707 14.1765L3.29413 15.9765L1.24707 22.3529H6.70589L10.3647 22.4L7.58825 16.9882L9.44707 14.1765Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ n("path", {
    d: "M17.7999 17.2823L18.1881 10.4941L19.9763 5.65881H12.0352L13.7999 10.4941L14.2116 17.2823L14.3528 19.4235L14.3646 24.6941H17.6234L17.6469 19.4235L17.7999 17.2823Z",
    fill: "#F6851B",
    stroke: "#F6851B",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
}), m1 = /* @__PURE__ */ n(G, {
  component: x1
}), D1 = () => /* @__PURE__ */ n("svg", {
  width: "42",
  height: "32",
  viewBox: "0 0 30 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ n("path", {
    d: "M6.14162 4.39898C11.034 -0.391048 18.9661 -0.391048 23.8584 4.39898L24.4472 4.97546C24.6918 5.21496 24.6918 5.60327 24.4472 5.84277L22.433 7.81482C22.3107 7.93457 22.1124 7.93457 21.9901 7.81482L21.1799 7.02151C17.7668 3.67986 12.2332 3.67986 8.82018 7.02151L7.95246 7.87108C7.83015 7.99083 7.63184 7.99083 7.50953 7.87108L5.49536 5.89903C5.25074 5.65953 5.25074 5.27122 5.49536 5.03172L6.14162 4.39898ZM28.0239 8.47738L29.8165 10.2325C30.0612 10.472 30.0612 10.8603 29.8165 11.0998L21.7335 19.0139C21.4889 19.2534 21.0923 19.2534 20.8476 19.0139C20.8476 19.0139 20.8476 19.0139 20.8476 19.0139L15.1108 13.3971C15.0496 13.3372 14.9505 13.3372 14.8893 13.3971C14.8893 13.3971 14.8893 13.3971 14.8893 13.3971L9.15259 19.0139C8.90797 19.2534 8.51137 19.2534 8.26675 19.0139C8.26674 19.0139 8.26674 19.0139 8.26674 19.0139L0.183463 11.0997C-0.0611544 10.8602 -0.0611544 10.4719 0.183463 10.2324L1.97609 8.47728C2.22071 8.23778 2.61731 8.23778 2.86193 8.47728L8.59887 14.0942C8.66002 14.1541 8.75918 14.1541 8.82033 14.0942C8.82033 14.0942 8.82033 14.0942 8.82033 14.0942L14.557 8.47728C14.8016 8.23777 15.1982 8.23776 15.4428 8.47726C15.4428 8.47726 15.4428 8.47726 15.4428 8.47727L21.1798 14.0942C21.2409 14.1541 21.3401 14.1541 21.4012 14.0942L27.1381 8.47738C27.3827 8.23788 27.7793 8.23788 28.0239 8.47738Z",
    fill: "#3B99FC"
  })
}), U1 = /* @__PURE__ */ n(G, {
  component: D1
}), Q1 = "_chain_name_8kdgo_1", O1 = {
  chain_name: Q1
}, j1 = "_bold_5fnjw_5", T = {
  bold: j1
}, Q = ({
  className: A,
  children: e
}) => {
  const i = A ? `${A} ${T.bold}` : T.bold;
  return /* @__PURE__ */ n("span", {
    className: i,
    children: e
  });
}, p = ({
  children: A
}) => /* @__PURE__ */ n(Q, {
  className: O1.chain_name,
  children: A
}), K1 = ({
  account: A,
  chain: e,
  supportedChains: i,
  expectedChainId: s
}) => A ? s ? /* @__PURE__ */ r(w, {
  children: ["You connected to ", /* @__PURE__ */ r(p, {
    children: [e.name, "."]
  }), /* @__PURE__ */ r("div", {
    children: ["Please connect to ", /* @__PURE__ */ n(p, {
      children: s1(s)
    }), " network."]
  })]
}) : i.some((o) => o.name === e.name) ? /* @__PURE__ */ r(w, {
  children: ["You are currently using ", /* @__PURE__ */ n(Q, {
    children: "Oort Digital"
  }), " on the ", /* @__PURE__ */ n(p, {
    children: e.name
  }), " network"]
}) : /* @__PURE__ */ r(w, {
  children: ["You connected to ", /* @__PURE__ */ r(p, {
    children: [e.name, "."]
  }), /* @__PURE__ */ r("div", {
    children: ["Please connect to the appropriate network. ", /* @__PURE__ */ n(p, {
      children: i.map((o) => o.name).join(", ")
    })]
  })]
}) : null, Z1 = {
  height: "32px",
  width: "32px"
}, M1 = /* @__PURE__ */ n("img", {
  style: Z1,
  src: "data:image/jpeg;base64,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"
}), W = {
  inProcess: !1,
  cnnName: u.Undefined
}, S1 = ({
  props: A,
  isMobile: e,
  btnGutter: i,
  styles: s
}) => {
  const {
    onCancel: o,
    onClose: d,
    afterConnect: c,
    afterChainSwitch: a,
    web3: t,
    expectedChainId: B
  } = A, [L, O] = o1(W), j = (l) => O({
    inProcess: !0,
    cnnName: l
  }), K = () => O(W), V = /* @__PURE__ */ r(w, {
    children: ["By connecting, I accept Oort Digital\u2019s ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms",
      children: "Terms of Service"
    }), " and acknowledge"]
  }), y = /* @__PURE__ */ r(w, {
    children: ["that you have read and understand the ", /* @__PURE__ */ n("a", {
      href: "https://oort.digital/terms#disclaimer",
      children: "Oort Digital protocol disclaimer"
    })]
  }), {
    supportedChains: P,
    chain: k,
    switchChain: J,
    canSwitchChain: q,
    connect: z,
    account: E,
    connectorName: Z,
    supportedConnectors: Y
  } = t, R = () => {
    d && d(), o && o();
  }, I = async (l, h) => {
    j(h);
    try {
      await z(l, h) && (o && o(), c && c());
    } finally {
      K();
    }
  }, _ = async (l) => {
    j(Z);
    try {
      await J(l) && (o && o(), a && a());
    } finally {
      K();
    }
  }, $ = (l) => {
    const {
      chainId: h
    } = l;
    return /* @__PURE__ */ n(v, {
      flex: e ? 24 : 3,
      children: /* @__PURE__ */ n(w1, {
        onClick: () => _(h),
        loading: L.inProcess,
        expectedChainId: B,
        connectedChainId: k.chainId,
        canSwitchChain: q,
        chain: l
      })
    }, h);
  }, F = (l, h, C, m) => {
    if (E && C === Z)
      return /* @__PURE__ */ n(U, {
        disabled: L.inProcess,
        walletName: h,
        walletIcon: m,
        account: E
      });
    const H = Y[C];
    return H.isInstalled ? /* @__PURE__ */ n(U, {
      loading: C === L.cnnName,
      disabled: L.inProcess,
      walletName: h,
      onClick: () => I(l, C),
      walletIcon: m,
      labelText: "Connect"
    }) : /* @__PURE__ */ n(U, {
      walletName: h,
      disabled: L.inProcess,
      onClick: () => window.open(H.installUrl, "_blank").focus(),
      walletIcon: m,
      labelText: "Install"
    });
  }, M = e ? void 0 : "space-between", g = e ? 24 : 12, x = B || P[0].chainId, n1 = /* @__PURE__ */ r(w, {
    children: [!a1(k) && /* @__PURE__ */ r(w, {
      children: [/* @__PURE__ */ n("div", {
        className: s.description,
        children: /* @__PURE__ */ n(K1, {
          account: E,
          chain: k,
          supportedChains: P,
          expectedChainId: B
        })
      }), /* @__PURE__ */ n(N, {
        gutter: i,
        className: s.chain_buttons,
        justify: M,
        children: P.map((l) => $(l))
      })]
    }), /* @__PURE__ */ r("div", {
      className: s.description,
      children: [/* @__PURE__ */ n(Q, {
        children: "Connect your Wallet"
      }), " and jump into the world of NFT's"]
    }), /* @__PURE__ */ r(N, {
      gutter: i,
      justify: M,
      children: [/* @__PURE__ */ n(v, {
        span: g,
        children: F(x, "Metamask", u.Injected, m1)
      }), /* @__PURE__ */ n(v, {
        span: g,
        children: F(x, "FaceWallet", u.FaceWallet, M1)
      }), /* @__PURE__ */ n(v, {
        span: g,
        children: F(x, "WalletConnect", u.WalletConnect, U1)
      })]
    })]
  });
  return {
    footer1: V,
    footer2: y,
    content: n1,
    onCancel: R,
    loading: L.inProcess
  };
};
export {
  S1 as u
};
//# sourceMappingURL=useConnectModalCommon.6b478e13.mjs.map
