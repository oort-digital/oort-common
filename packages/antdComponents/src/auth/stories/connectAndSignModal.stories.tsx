import "../../../.storybook/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";
import { ConnectorNames } from "@oort-digital/web3-connectors";

import { Auth, ConnectAndSignModal, IConnectAndSignProps } from "../ui";
import { Web3StoreStub } from "../../stubs";
import logger from "./logger";
import React, { useState } from "react";
import { OortApiInterceptors } from "@oort-digital/oort-api-client";
import { observer } from "mobx-react-lite";
import { AuthStore } from "../store";
import { Button } from "antd";

const meta = {
  title: "src/auth/connectAndSignModal",
  component: Auth,
  render: (props: IConnectAndSignProps) => {
    return <Wrap {...props} />;
  },
} satisfies Meta<typeof Wrap>;

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

const Wrap = observer((props: IConnectAndSignProps) => {
  const [visible, setVisible] = useState(false);

  const onClose = () => setVisible(false);

  const mergedProps: IConnectAndSignProps = {
    ...props,
    ...{ visible, onClose },
  };

  return (
    <Router>
      <Button onClick={() => setVisible(true)}>Connect</Button>
      <ConnectAndSignModal {...mergedProps} />
      <div>token: {authStore.token}</div>
    </Router>
  );
});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    web3Store,
    authStore,
    logger,
    visible: false,
    onClose: () => {},
    supportedWallets: [ConnectorNames.Injected],
  },
};
