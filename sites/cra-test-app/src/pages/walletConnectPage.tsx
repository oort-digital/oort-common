import { WalletConnectConnector } from '@oort/web3-connectors';
import { logger } from '@oort/logger';

export const Web3ConnectorsPage = () => {

    try {
        const wc = new WalletConnectConnector(logger, [{
            name: "rinkeby",
                chainId: 4,
                rpcUrl: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                blockExplorer: 'https://rinkeby.etherscan.io',
        }])

        wc.enable()
    }
    catch(e) {
        debugger
        throw e
    }

    return <>hello</>

}