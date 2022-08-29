(function(e,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("styled-components")):typeof define=="function"&&define.amd?define(["exports","styled-components"],o):(e=typeof globalThis!="undefined"?globalThis:e||self,o(e.MyLib={},e.styled))})(this,function(e,o){"use strict";function n(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var d=n(o);const u=d.default.button`
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
`;e.MyButton=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
