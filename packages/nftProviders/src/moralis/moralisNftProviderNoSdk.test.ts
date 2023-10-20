import { ConsoleLogger } from "@oort-digital/logger";
import { INft } from "../typesAndInterfaces";

import { MoralisNftProviderNoSdk } from "./moralisNftProviderNoSdk";
import {
  OortApiInterceptors,
  OortHeroApi,
} from "@oort-digital/oort-api-client";
import { EMPTY_ABORT_SIGNAL } from "@oort-digital/utils";

const logger = new ConsoleLogger();
const badAddress = "0x0000000000dDF8e4c57F05d70Ab8444555666777";

const heroApi = OortHeroApi.createSingleton({
  baseURL: "https://api-test.oort.digital/minting",
  logger,
  interceptors: OortApiInterceptors.createInstance(logger),
});

const provider = new MoralisNftProviderNoSdk({
  generateHero: (p) => heroApi.generateHero(p, EMPTY_ABORT_SIGNAL),
  logger,
  chainId: 80001,
  config: {
    apiKey: "76e3cVcdO0ennLoMfMaAoAhuWnL0l0tJ5Bz7n511UGwmyVfHy3JqVF6XlSgE5cld",
  },
  rejectUnauthorized: false,
});

const assertNft = (nft: INft) => {
  expect(nft.amount).toBeDefined();
  expect(nft.nftName).toBeDefined();
  expect(nft.contractType).toBeDefined();
  expect(nft.symbol).toBeDefined();
  expect(nft.tokenAddress).toBeDefined();
  expect(nft.tokenId).toBeDefined();
};

test.skip("debug only. Moralis featchAccountNfts", async () => {
  const respose = await provider.featchAccountNfts({
    ownerAddress: "0x89fcf6222f82D834F01580FfBD44E8e149Af2975",
    cursor: undefined,
    //    tokenAddresses: [],
    limit: 10,
  });

  expect(respose.page).toEqual(1);
  expect(respose.pageSize).toEqual(10);
  respose.data.forEach(assertNft);
});

test.skip("debug only. Moralis featchAccountNfts 404", async () => {
  const respose = await provider.featchAccountNfts({
    ownerAddress: badAddress,
    cursor: undefined,
    tokenAddresses: [
      "0x11a57ee56d1851cb9b0de5244e00716ad3a787f3",
      "0x7b72f99683f4186f1cb979012c15f7d3bbfdfc19",
    ],
    limit: 10,
  });

  expect(respose.data.length).toEqual(0);
});

test.skip("debug only. Moralis featchNft", async () => {
  const nft = await provider.featchNft({
    address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    tokenId: "1",
  });
  assertNft(nft!);
});

test.skip("debug only. Moralis featchNft 404", async () => {
  const nft = await provider.featchNft({
    address: badAddress,
    tokenId: "1",
  });

  expect(nft).toBeNull();
});

test.skip("debug only. Moralis featchNftOwner", async () => {
  await provider.featchNftOwner({
    address: "0x91f16f2b28d96c3d1a3202b574fc05e749defb6c",
    tokenId: "15",
  });
});

test.skip("debug only. Moralis featchNftOwner 404", async () => {
  const response = await provider.featchNftOwner({
    address: badAddress,
    tokenId: "15",
  });
  expect(response.asset).toBeNull();
});
