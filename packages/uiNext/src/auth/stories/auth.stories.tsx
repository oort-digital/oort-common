import "../../styles/antOverride.less"
import "../../styles/fonts.css"
import "../../styles/theme/light.less"
import type { Meta, StoryObj } from '@storybook/react';
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { EMPTY_ABORT_SIGNAL } from "@oort-digital/utils"

import { Auth, IAuthProps } from "../ui/auth";
import { Web3StoreStub } from "./web3StoreStub";
import logger from "./logger";
import React, { useEffect, useState } from "react";
import { OortHeroApi } from "@oort-digital/oort-api-client";
import { registerAuthInterceptorsPromise } from "../interceptors";
import { observer } from "mobx-react";
import { ThemeLoader } from "../../internalHelpers";
import { ConsoleLogger, LogLevel } from "@oort-digital/logger";

const meta = {
  title: 'oort/auth',
  component: Auth,
  render: (props: IAuthProps) => {
    return <AuthWrap {...props} />
  },
} satisfies Meta<typeof Auth>;


export default meta;
type Story = StoryObj<typeof meta>;

const web3Store = new Web3StoreStub()
web3Store.connect(80001, ConnectorNames.Injected)

const heroApi = OortHeroApi.createSingleton({ baseURL: 'https://api-test.oort.digital/minting', logger: new ConsoleLogger(LogLevel.Debug) })

const Content = observer(() => {

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


  return <>
    <div>You are authorized</div>
    <div>Request Done!</div>
  </>

})

const AuthWrap = observer((props: IAuthProps) => {
  return <>
    <ThemeLoader />
    <Auth { ...props }/>
  </>
})


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
