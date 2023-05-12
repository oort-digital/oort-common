import "../../../.storybook/index.less"
import "@oort-digital/ui/dist/styles/theme/light.less"
import type { Meta, StoryObj } from '@storybook/react';
import { ConnectorNames } from "@oort-digital/web3-connectors";

import { SsoAuth } from "../ssoAuth";
import { Web3StoreStub } from "./web3StoreStub";
import logger from "./logger";

const meta = {
  title: 'src/ui/auth',
  component: SsoAuth,
} satisfies Meta<typeof SsoAuth>;


export default meta;
type Story = StoryObj<typeof meta>;

const web3Store = new Web3StoreStub()
web3Store.connect(80001, ConnectorNames.Injected)

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    web3Store,
    logger,
    supportedWallets: [ConnectorNames.Injected],
    ssoServerBaseUrl: 'https://api-test.oort.digital/sso',
    tokenStorageType: "fake"
  }
};

