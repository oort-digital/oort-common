"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const A=require("react"),r=require("antd"),n=require("./alert.db5a0019.js"),t=require("./index.1b6b57cd.js");require("ethers");require("react-router-dom");require("mobx-react");require("mobx");require("axios");const F="_modal_1asgj_5",O="_description_1asgj_8",S="_chain_buttons_1asgj_17",a={modal:F,description:O,chain_buttons:S},N=({web3:w,visible:_,onCancel:o,onClose:u,afterConnect:h,afterChainSwitch:j,expectedChainId:x})=>{const[m,c]=A.useState(!1),{supportedChains:p,chain:i,switchChain:y,canSwitchChain:f,connectAsync:I,account:l,connectorName:q,supportedConnectors:k}=w,B=async e=>{c(!0);try{await I(e),o&&o(),h&&h()}finally{c(!1)}},M=async e=>{c(!0);try{await y(e),o&&o(),j&&j()}finally{c(!1)}},W=t.jsxs(t.Fragment,{children:["By connecting, I accept Oort Digital\u2019s ",t.jsx("a",{href:"https://oort.digital/terms",children:"Terms of Service"})," and acknowledge that you have read and understand the ",t.jsx("a",{href:"https://oort.digital/terms#disclaimer",children:"Oort Digital protocol disclaimer"})]}),g=(e,s,d)=>{if(l&&s===q)return t.jsx(n.ConnectButton,{disabled:!0,walletName:e,walletIcon:d,account:l});const C=k[s];return C.isInstalled?t.jsx(n.ConnectButton,{walletName:e,onClick:()=>B(s),walletIcon:d,labelText:"Connect"}):t.jsx(n.ConnectButton,{walletName:e,onClick:()=>window.open(C.installUrl,"_blank").focus(),walletIcon:d,labelText:"Install"})},v=e=>{const{chainId:s}=e;return t.jsx(r.Col,{span:"24",children:t.jsx(n.ChainButtonWithLogic,{onClick:()=>M(s),loading:m,expectedChainId:x,connectedChainId:i.chainId,canSwitchChain:f,chain:e})},s)},b=[0,12],T=()=>{u&&u(),o&&o()};return t.jsx(t.OortModalMobile,{viewMode:"topGap",loading:m,footer:W,className:a.modal,title:"Network & Wallet",visible:_,onCancel:()=>T(),children:t.jsxs(t.Fragment,{children:[!t.isChainEmpty(i)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:a.description,children:t.jsx(n.Alert,{account:l,chain:i,supportedChains:p,expectedChainId:x})}),t.jsx(r.Row,{gutter:b,className:a.chain_buttons,children:p.map(e=>v(e))})]}),t.jsxs("div",{className:a.description,children:[t.jsx(n.Bold,{children:"Connect your Wallet"})," and jump into the world of NFT's"]}),t.jsxs(r.Row,{gutter:b,children:[window.ethereum&&t.jsx(r.Col,{span:"24",children:g("Metamask",n.nr.Injected,n.MetamaskIcon)}),t.jsx(r.Col,{span:"24",children:g("WalletConnect",n.nr.WalletConnect,n.WalletConnectIcon)})]})]})})};exports.default=N;
//# sourceMappingURL=connectModalMobile.0dcad556.js.map