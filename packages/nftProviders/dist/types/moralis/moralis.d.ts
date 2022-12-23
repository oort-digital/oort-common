import { EvmApi } from '@moralisweb3/evm-api';
import { MoralisCoreConfigValues } from '@moralisweb3/common-core';
declare const Moralis: {
    EvmApi: EvmApi;
    start: (config?: Partial<MoralisCoreConfigValues>) => Promise<void>;
};
export default Moralis;
//# sourceMappingURL=moralis.d.ts.map