"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("antd");const e=require("./index.1c8a3805.js"),d=require("./useConnectModalCommon.e0b79620.js");require("react");require("react-router-dom");require("ethers");require("mobx-react");require("mobx");require("axios");const u="_modal_f97e5_5",m="_description_f97e5_8",_="_chain_buttons_f97e5_18",t={modal:u,description:m,chain_buttons:_},b=o=>{const{footer1:n,footer2:r,content:i,onCancel:s,loading:c}=d.useConnectModalCommon({props:o,styles:t,btnGutter:[10,0],isMobile:!1}),{visible:a}=o,l=e.jsxs(e.Fragment,{children:[e.jsx("div",{children:n}),e.jsx("div",{children:r})]});return e.jsx(e.OortModal,{loading:c,footer:l,className:t.modal,title:"Network & Wallet",width:"690px",visible:a,onCancel:()=>s(),children:e.jsx(e.Fragment,{children:i})})};exports.default=b;
//# sourceMappingURL=connectModalDesktop.3db9cbf8.js.map
