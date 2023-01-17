export class TestRawProvider {

    private readonly _requestCallback: () => Promise<any>
  
    constructor(requestCallback: () => Promise<any>) {
      this._requestCallback = requestCallback
    }
  // @ts-ignore
    request(params: any): Promise<any> {
      return this._requestCallback()
    }
}