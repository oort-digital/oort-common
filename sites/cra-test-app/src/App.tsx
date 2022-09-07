import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WalletConnectConnector } from '@oort/web3-connectors';
import { logger } from '@oort/logger';

try {
  const wc = new WalletConnectConnector(logger, [{
    name: "rinkeby",
        chainId: 4,
        rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        blockExplorer: 'https://rinkeby.etherscan.io',
  }])

  debugger
  wc.enable()
}
catch(e) {
  debugger
  throw e
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
