"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const h=require("./asideMobile.module.be6588e9.js"),j=require("antd"),_=require("react");require("react-router-dom");const e=require("./index.253458eb.js");require("mobx-react");require("mobx");const m=({navItems:o,web3:s,isActiveFunc:r})=>e.jsx(h.Aside,{className:h.styles$1.aside_mobile,navItems:o,web3:s,isActiveFunc:r}),w="_root_1cqb2_1",x="_top_header_1cqb2_5",g="_logo_1cqb2_31",y="_content_1cqb2_35",n={root:w,top_header:x,logo:g,content:y},k="_top_header_menu_5yyk9_5",f="_burger_icon_5yyk9_39",p={top_header_menu:k,burger_icon:f},M=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2 12H22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 18H22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 6H22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),u=o=>e.g.debug(`Sider. ${o}`),S=({children:o})=>{const[s,r]=_.useState(!1),t=()=>r(!1),i=()=>e.jsx(j.Drawer,{title:"Menu",className:p.top_header_menu,closeIcon:e.jsx(e.CloseCircleIcon,{}),placement:"left",onClose:t,open:s,children:o});return _.useEffect(()=>{var c=window.history.pushState,b=window.history.replaceState;window.history.pushState=function(a,d,l){t(),u("history.pushState"),c.apply(window.history,[a,d,l])},window.history.replaceState=function(a,d,l){t(),u("history.replaceState"),b.apply(window.history,[a,d,l]),t()},window.addEventListener("beforeunload",function(){u("beforeunload"),t()})},[]),e.jsxs(e.Fragment,{children:[i(),e.jsx("div",{className:p.burger_icon,onClick:()=>r(!0),children:e.jsx(M,{})})]})},q=({navItems:o,children:s,web3:r,isActiveFunc:t,className:i})=>{const c=i?`${n.root} ${i}`:n.root;return e.jsxs("div",{className:c,children:[e.jsxs("div",{className:`oort-mobile-top-header ${n.top_header}`,children:[e.jsx(S,{children:e.jsx(m,{navItems:o,isActiveFunc:t,web3:r})}),e.jsx(h.LogoLink,{className:n.logo})]}),e.jsx("div",{className:`oort-mobile-content ${n.content}`,children:s})]})};exports.default=q;
//# sourceMappingURL=layoutMobile.1959e824.js.map