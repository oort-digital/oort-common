import { IRawProvider } from "../connectors/injectedConnector";

export class TestRawProvider implements IRawProvider {
  private readonly _requestCallback: () => Promise<any>;

  constructor(requestCallback: () => Promise<any>) {
    this._requestCallback = requestCallback;
  }
  isMetaMask = true;

  removeListener = (_name: string, _listener: any) => {};
  // @ts-ignore
  request(params: any): Promise<any> {
    if (params.method === "eth_accounts") {
      return Promise.resolve(["0x0000000000000000000000000000000000000000"]);
    }

    return this._requestCallback();
  }
}
