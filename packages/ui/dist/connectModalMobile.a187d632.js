"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const N=require("react"),i=require("antd"),s=require("./index.es.26f11bd1.js"),e=require("./index.0bb75bc9.js");require("ethers");require("react-router-dom");var b=(t=>(t[t.WALLET_METAMASK=0]="WALLET_METAMASK",t[t.WALLET_CONNECT=1]="WALLET_CONNECT",t))(b||{});const O=(t,a,r)=>t?r.some(c=>c.name===a.name)?e.jsxs(e.Fragment,{children:["You are currently using ",e.jsx("span",{children:"Oort Digital"})," on the ",e.jsx("span",{children:a.name})," network"]}):e.jsxs(e.Fragment,{children:["You connected to ",e.jsxs("span",{children:[a.name,"."]}),e.jsxs("div",{children:["Please connect to the appropriate network. ",e.jsx("span",{children:r.map(c=>c.name).join(", ")})]})]}):null,_=({web3:t,visible:a,onCancel:r,onClose:c,afterConnect:j,afterChainSwitch:x})=>{const[m,l]=N.useState(!1),{supportedChains:p,chain:d,switchChain:f,canSwitchChain:y,connectAsync:M,account:u,connectorName:A,supportedConnectors:I}=t,k=async n=>{l(!0);try{await M(n),r&&r(),j&&j()}finally{l(!1)}},v=async n=>{l(!0);try{await f(n),r&&r(),x&&x()}finally{l(!1)}},T=e.jsxs(e.Fragment,{children:["By connecting, I accept Oort Digital\u2019s ",e.jsx("a",{href:"https://oort.digital/terms",children:"Terms of Service"})," and acknowledge that you have read and understand the ",e.jsx("a",{href:"https://oort.digital/terms#disclaimer",children:"Oort Digital protocol disclaimer"})]}),C=(n,o,h)=>{if(u&&o===A)return e.jsx(s.ConnectButton,{disabled:!0,walletName:n,walletIcon:h,account:u});const w=I[o];return w.isInstalled?e.jsx(s.ConnectButton,{walletName:n,onClick:()=>k(o),walletIcon:h,labelText:"Connect"}):e.jsx(s.ConnectButton,{walletName:n,onClick:()=>window.open(w.installUrl,"_blank").focus(),walletIcon:h,labelText:"Install"})},W=n=>{const{chainId:o}=n;return e.jsx(i.Col,{span:"24",children:e.jsx(s.ChainButton,{onClick:()=>v(o),loading:m,isActive:o===d.chainId,canSwitchChain:y,chain:n})},o)},g=[0,12],B=()=>{c&&c(),r&&r()};return e.jsx(e.OortModalMobile,{viewMode:"topGap",loading:m,footer:T,className:"connect-wallet-mobile-modal",title:"Network & Wallet",visible:a,onCancel:()=>B(),children:e.jsxs(e.Fragment,{children:[!e.isChainEmpty(d)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"description",children:O(u,d,p)}),e.jsx(i.Row,{gutter:g,className:"chain-buttons",children:p.map(n=>W(n))})]}),e.jsxs("div",{className:"description",children:[e.jsx("span",{children:"Connect your Wallet"})," and jump into the world of NFT's"]}),e.jsxs(i.Row,{gutter:g,children:[window.ethereum&&e.jsx(i.Col,{span:"24",children:C("Metamask",s.a.Injected,s.MetamaskIcon)}),e.jsx(i.Col,{span:"24",children:C("WalletConnect",s.a.WalletConnect,s.WalletConnectIcon)})]})]})})};exports.WALLETTYPE=b;exports.default=_;
//# sourceMappingURL=connectModalMobile.a187d632.js.map
