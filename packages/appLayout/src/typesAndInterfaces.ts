import { ConnectorNames } from "@oort-digital/web3-connectors";
import { ReactNode } from "react";
import { IWeb3 } from "@oort-digital/antd-components";
import { INavItems, IStubs } from "./navMenu";
import { DeviceType } from "@oort-digital/detect-device";

export interface ILayoutProps {
  id?: string;
  children: ReactNode;
  navItems: INavItems;
  supportedWallets: ConnectorNames[];
  oortTokenAddress?: string | undefined;
  web3?: IWeb3;
  className?: string;
  //for testing
  _stubs?: IStubs;
  useTopGradient?: boolean;
  baseName?: string;
  deviceType: DeviceType;
}
