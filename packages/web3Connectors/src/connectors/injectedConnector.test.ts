import { logger } from "@oort-digital/logger"
import { delayAsync } from "@oort-digital/utils"
import { IChainInfo } from "../internalTypesAndInterfaces";
import { InjectedConnectorForTest, TestRawProvider, TestSigner } from "../testStubs"

const chainInfo: IChainInfo = {
  name: 'mumbai',
  chainId: 80001,
  rpcUrl: 'https://rpc-mumbai.maticvigil.com',
  blockExplorer: 'https://mumbai.polygonscan.com'
}

test('injectedConnector call enable twice', async () => {
  
  let callCounter = 0
  const requestCallback = (): Promise<any> => {
    callCounter++
    return delayAsync(1000)
  }

  const chainId = 1
  const signer = new TestSigner(chainId)
  const rawProvider = new TestRawProvider(requestCallback)
  const connector = new InjectedConnectorForTest({rawProvider, signer, logger, chains: [chainInfo]})
  const results = await Promise.all([ connector.connect(chainId), connector.connect(chainId) ])

  expect(results[0]).toBeTruthy()
  expect(results[1]).toBeTruthy()
  expect(callCounter).toEqual(1)
});

test('injectedConnector user reject enable return false', async () => {
  
  const requestCallback = (): Promise<any> => {
    throw new Error('user reject connection')
  }

  const chainId = 1
  const signer = new TestSigner(chainId)
  const rawProvider = new TestRawProvider(requestCallback)
  const connector = new InjectedConnectorForTest({rawProvider, signer, logger, chains: [chainInfo]})
  const result = await connector.connect(chainId)

  expect(result).toBeFalsy()
});

