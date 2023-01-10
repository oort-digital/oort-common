// don't install whole moralis packages
// it makes bundle to heavy

import { ApiUtils }             from '@moralisweb3/api-utils'
import { CommonEvmUtils }       from '@moralisweb3/common-evm-utils';
import { EvmApi }               from '@moralisweb3/evm-api';
import { Core, CoreProvider, MoralisCoreConfigValues }   from '@moralisweb3/common-core';

// Core
const core = Core.create();

// Utility modules
const commonEvmUtils = CommonEvmUtils.create(core)
const apiUtils = ApiUtils.create(core)

// Feature modules
const evmApi = EvmApi.create(core)

// Register all Moralis modules to Core
core.registerModules([
    commonEvmUtils,
    apiUtils,
    evmApi,
]);

CoreProvider.setDefault(core);

const Moralis = {
  EvmApi: evmApi,
  start: (config?: Partial<MoralisCoreConfigValues>) => {
    return core.start(config);
  },
};

export default Moralis;