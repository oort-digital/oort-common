
import { logger } from "@oort/logger";
import { INft } from "../typesAndInterfaces";

import { MoralisNftProvider } from "./moralisNftProvider";

const provider = new MoralisNftProvider(logger, 4, { apiKey: "fake-key" })

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
       cursor: "fake-cursor",
       limit: 1000
   })

   expect(respose.total).toBeDefined()
   expect(respose.page).toEqual(0)
   expect(respose.pageSize).toEqual(500)
   respose.data.forEach(assertNft)
});

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
 });