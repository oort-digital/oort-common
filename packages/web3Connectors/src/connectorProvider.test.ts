import { logger } from "@oort-digital/logger";
import { IChainInfo } from "./baseConnector";
import { InjectedConnectorForTest, TestRawProvider, TestSigner } from "./testStubs";
import { ConnectorProvider } from "./connectorProvider";
import { ConnectorNames } from "./connectorNames";

const chainInfo: IChainInfo = {
  name: 'mumbai',
  chainId: 80001,
  rpcUrl: 'https://rpc-mumbai.maticvigil.com',
  blockExplorer: 'https://mumbai.polygonscan.com'
}

test('connectorProvider init', async () => {
  
  const requestCallback = () => Promise.resolve()

  const chainId = 1
  const signer = new TestSigner(chainId)
  const rawProvider = new TestRawProvider(requestCallback)
  const connector = new InjectedConnectorForTest({rawProvider, signer, logger, chains: [chainInfo]})

  const connectorProvider = new ConnectorProvider(logger, [connector])
  await connectorProvider.waitInitialisation

  expect(connectorProvider.connectorsByName[ConnectorNames.Injected]).toBeDefined()
  expect(connectorProvider.curConnector).toBeUndefined()
  expect(connectorProvider.canSwitchChain).toBeFalsy()
});

test('connectorProvider read cur provider from localStorage', async () => {
  
  const requestCallback = () => Promise.resolve()

  const lsKey = 'cur_connector'
  const chainId = 1
  const signer = new TestSigner(chainId)
  const rawProvider = new TestRawProvider(requestCallback)
  const connector = new InjectedConnectorForTest({rawProvider, signer, logger, chains: [chainInfo]})

  localStorage.setItem(lsKey, JSON.stringify({ chainId, name: ConnectorNames.Injected }))

  const connectorProvider = new ConnectorProvider(logger, [connector])
  await connectorProvider.waitInitialisation

  expect(connectorProvider.connectorsByName[ConnectorNames.Injected]).toBeDefined()
  expect(connectorProvider.curConnector).toBeDefined()
  expect(connectorProvider.canSwitchChain).toBeFalsy()

  localStorage.removeItem(lsKey)
});

