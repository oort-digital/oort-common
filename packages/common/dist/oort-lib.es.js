import styled from "styled-components";
const MyButton = styled.button`
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
`;
var ChainEnum = /* @__PURE__ */ ((ChainEnum2) => {
  ChainEnum2[ChainEnum2["EthereumMainnet"] = 1] = "EthereumMainnet";
  ChainEnum2[ChainEnum2["EthereumRopsten"] = 3] = "EthereumRopsten";
  ChainEnum2[ChainEnum2["EthereumRinkeby"] = 4] = "EthereumRinkeby";
  ChainEnum2[ChainEnum2["EthereumGoerli"] = 5] = "EthereumGoerli";
  ChainEnum2[ChainEnum2["EthereumKovan"] = 42] = "EthereumKovan";
  ChainEnum2[ChainEnum2["MaticMumbai"] = 80001] = "MaticMumbai";
  ChainEnum2[ChainEnum2["MaticMainnet"] = 137] = "MaticMainnet";
  ChainEnum2[ChainEnum2["BSCTestnet"] = 97] = "BSCTestnet";
  ChainEnum2[ChainEnum2["BSCMainnet"] = 56] = "BSCMainnet";
  ChainEnum2[ChainEnum2["SolanaTestnet"] = 245022940] = "SolanaTestnet";
  return ChainEnum2;
})(ChainEnum || {});
export { ChainEnum, MyButton };
