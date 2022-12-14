import { InjectedConnector } from ".";
import { logger, ILogger } from "@oort/logger";
import { delayAsync } from "./utils";
import { IChainInfo } from "./baseConnector";

class TestRawProvider {

  private readonly _requestCallback: () => Promise<any>

  constructor(requestCallback: () => Promise<any>) {
    this._requestCallback = requestCallback
  }
// @ts-ignore
  request(params: any): Promise<any> {
    return this._requestCallback()
  }
}

class InjectedConnectorForTest extends InjectedConnector {

  private readonly _rawProvider: any
  constructor(rawProvider: any, logger: ILogger, chains: IChainInfo[]) {
    super(logger, chains)
    this._rawProvider = rawProvider
  }

  protected get rawProvider(): any {
    return this._rawProvider
  }
}

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

  const rawProvider = new TestRawProvider(requestCallback)
  const connector = new InjectedConnectorForTest(rawProvider, logger, [chainInfo])
  const results = await Promise.all([ connector.connect(1), connector.connect(1) ])

  expect(results[0]).toBeTruthy()
  expect(results[1]).toBeTruthy()
  expect(callCounter).toEqual(1)
});

test('injectedConnector user reject enable return false', async () => {
  
  const requestCallback = (): Promise<any> => {
    throw new Error('user reject connection')
  }

  const rawProvider = new TestRawProvider(requestCallback)
  const connector = new InjectedConnectorForTest(rawProvider, logger, [chainInfo])
  const result = await connector.connect(1)

  expect(result).toBeFalsy()
});