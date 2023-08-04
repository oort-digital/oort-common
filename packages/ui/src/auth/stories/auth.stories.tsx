import "../../../.storybook/stories.less";
import { BrowserRouter as Router } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { EMPTY_ABORT_SIGNAL } from "@oort-digital/utils";

import { Auth, IAuthProps } from "../ui/auth";
import { Web3StoreStub } from "./web3StoreStub";
import logger from "./logger";
import React, { useEffect, useState } from "react";
import {
  OortApiInterceptors,
  OortHeroApi,
} from "@oort-digital/oort-api-client";
import { observer } from "mobx-react";
import { AuthStore } from "../store";

const meta = {
  title: "oort/auth/auth",
  component: Auth,
  render: (props: IAuthProps) => {
    return <AuthWrap {...props} />;
  },
} satisfies Meta<typeof Auth>;

export default meta;
type Story = StoryObj<typeof meta>;

const web3Store = new Web3StoreStub();
web3Store.connect(80001, ConnectorNames.Injected);

const interceptors = OortApiInterceptors.createInstance(logger);

const authStore = AuthStore.createInstance({
  web3Store,
  ssoServerBaseUrl: "https://api-test.oort.digital/sso",
  tokenStorageType: "localStorage",
  logger,
  interceptors,
});

const heroApi = OortHeroApi.createSingleton({
  interceptors,
  baseURL: "https://api-test.oort.digital/minting",
  logger,
});

const Content = observer(() => {
  const [requestDone, setRequestDone] = useState(false);

  const authRequest = async () => {
    return await heroApi.getHeroMintAvailable(EMPTY_ABORT_SIGNAL);
  };

  useEffect(() => {
    if (!requestDone) {
      authRequest().then((x) => {
        setRequestDone(true);
      });
    }
  });

  if (!requestDone) {
    return <>not ready</>;
  }

  return (
    <>
      <div>You are authorized</div>
      <div>Request Done!</div>
    </>
  );
});

const AuthWrap = observer((props: IAuthProps) => {
  return (
    <Router>
      <Auth {...props} />
    </Router>
  );
});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    web3Store,
    authStore,
    logger,
    supportedWallets: [ConnectorNames.Injected],
    children: <Content />,
  },
};
