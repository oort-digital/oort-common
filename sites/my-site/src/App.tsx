import { WalletConnectConnector } from 'oort-web3-connectors';
import { logger } from 'oort-lib';

  try {
    const wc = new WalletConnectConnector(logger, [{
      name: "rinkeby",
          chainId: 4,
          rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          blockExplorer: 'https://rinkeby.etherscan.io',
    }])
  }
  catch(e) {
    debugger
    throw e
  }
  

function App() {
 
  // const chain: IChain = {
  //   name: ''
  // }


  
  return (
    <div className="App">
      {/* <MyButton >Click here!</MyButton> */}
      hello world!
    </div>
  )
}

export default App
