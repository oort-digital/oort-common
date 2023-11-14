import { ConnectorNames } from "@oort-digital/web3-connectors";
import { IWeb3 } from "@oort-digital/antd-components";
import { INavItems, IStubs } from "../navMenu";

export interface IAsideProps {
  supportedWallets: ConnectorNames[];
  navItems: INavItems;
  baseName?: string;
  web3?: IWeb3;
  oortTokenAddress?: string;
  isDev?: boolean;
  //for testing
  _stubs?: IStubs;
}
