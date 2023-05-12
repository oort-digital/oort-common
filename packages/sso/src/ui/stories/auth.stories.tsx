import "../../../.storybook/index.less"
import "@oort-digital/ui/dist/styles/theme/light.less"
import type { Meta, StoryObj } from '@storybook/react';
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { EMPTY_ABORT_SIGNAL } from "@oort-digital/utils"

import { SsoAuth } from "../ssoAuth";
import { Web3StoreStub } from "./web3StoreStub";
import logger from "./logger";
import React, { useEffect, useState } from "react";
import { OortHeroApi } from "@oort-digital/oort-api-client";
import { registerAuthInterceptorsPromise } from "../../interceptors";

const meta = {
  title: 'src/ui/auth',
  component: SsoAuth,
} satisfies Meta<typeof SsoAuth>;


export default meta;
type Story = StoryObj<typeof meta>;

const web3Store = new Web3StoreStub()
web3Store.connect(80001, ConnectorNames.Injected)

const heroApi = OortHeroApi.createSingleton({ baseURL: 'https://api-test.oort.digital/minting' })

const Content = () => {

  const [ requestDone, setRequestDone ] = useState(false)

  const authRequest = async () => {
    await registerAuthInterceptorsPromise;
    return await heroApi.getHeroMintAvailable(EMPTY_ABORT_SIGNAL)
  }

  useEffect(() => {
    if(!requestDone) {
      authRequest().then(x => {
        setRequestDone(true)
      })
    }
  })

  if(!requestDone) {
    return <>not ready</>
  }


  return <>Request Done!</>

}


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    web3Store,
    logger,
    supportedWallets: [ConnectorNames.Injected],
    ssoServerBaseUrl: 'https://api-test.oort.digital/sso',
    tokenStorageType: "cookies",
    children: <Content />
  }
};

