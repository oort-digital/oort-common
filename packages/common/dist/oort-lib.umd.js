(function(t,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("styled-components")):typeof define=="function"&&define.amd?define(["exports","styled-components"],o):(t=typeof globalThis!="undefined"?globalThis:t||self,o(t.MyLib={},t.styled))})(this,function(t,o){"use strict";function d(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var n=d(o);const s=n.default.button`
    border: none;
    border-radius: 0.5rem;
    background-color: #186faf;
    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;
    cursor: pointer;
    &:hover {
        background-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        background-color: #0a558c;
    }
`;var r=(e=>(e[e.EthereumMainnet=1]="EthereumMainnet",e[e.EthereumRopsten=3]="EthereumRopsten",e[e.EthereumRinkeby=4]="EthereumRinkeby",e[e.EthereumGoerli=5]="EthereumGoerli",e[e.EthereumKovan=42]="EthereumKovan",e[e.MaticMumbai=80001]="MaticMumbai",e[e.MaticMainnet=137]="MaticMainnet",e[e.BSCTestnet=97]="BSCTestnet",e[e.BSCMainnet=56]="BSCMainnet",e[e.SolanaTestnet=245022940]="SolanaTestnet",e))(r||{});t.ChainEnum=r,t.MyButton=s,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
