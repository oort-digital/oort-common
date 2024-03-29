import { ConnectorNames } from "@oort-digital/web3-connectors";
import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { INavItems, IStubs } from "./navMenu";

export interface ILayoutProps {
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
}
