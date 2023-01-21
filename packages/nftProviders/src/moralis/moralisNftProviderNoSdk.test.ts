
import { logger } from "@oort-digital/logger";
import { INft } from "../typesAndInterfaces";

import { MoralisNftProviderNoSdk } from "./moralisNftProviderNoSdk";

const provider = new MoralisNftProviderNoSdk(logger, 80001, { apiKey: "76e3cVcdO0ennLoMfMaAoAhuWnL0l0tJ5Bz7n511UGwmyVfHy3JqVF6XlSgE5cld" })

const assertNft = (nft: INft) => {
    expect(nft.amount).toBeDefined()
    expect(nft.nftName).toBeDefined()
    expect(nft.contractType).toBeDefined()
    expect(nft.symbol).toBeDefined()
    expect(nft.tokenAddress).toBeDefined()
    expect(nft.tokenId).toBeDefined()
}

test.skip('debug only. Moralis featchAccountNfts', async () => {
   const respose = await provider.featchAccountNfts({
       ownerAddress: '0x103a9685D26fF05F2fed95dbC6e706B8841E5EC7',
       cursor: undefined,
       tokenAddresses: ['0x11a57ee56d1851cb9b0de5244e00716ad3a787f3', '0x7b72f99683f4186f1cb979012c15f7d3bbfdfc19'],
       limit: 10
   })

   expect(respose.total).toBeDefined()
   expect(respose.page).toEqual(1)
   expect(respose.pageSize).toEqual(10)
   respose.data.forEach(assertNft)
});

/*
test.skip('debug only. Moralis featchNft', async () => {
    const nft = await provider.featchNft({
        address: '0x91f16f2b28d96c3d1a3202b574fc05e749defb6c',
        tokenId: '15'
    })
 
    assertNft(nft)
 });

 test.skip('debug only. Moralis featchNftOwner', async () => {
    await provider.featchNftOwner({
        address: '0x91f16f2b28d96c3d1a3202b574fc05e749defb6c',
        tokenId: '15'
    })
 });*/