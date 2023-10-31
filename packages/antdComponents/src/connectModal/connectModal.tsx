import { lazy } from "react";
import {
  ConnectorNames,
  IConnector,
  IChain,
} from "@oort-digital/web3-connectors";
import { LazyLoader } from "@oort-digital/lazy-loader";
import { Signer } from "ethers";

const Desktop = lazy(() => import("./connectModalDesktop"));
const Mobile = lazy(() => import("./connectModalMobile"));

export interface IWeb3 {
  canSwitchChain: boolean;
  connectorName: ConnectorNames;
  supportedConnectors: { [name: string]: IConnector };
  switchChain: (newChainId: number) => Promise<boolean>;
  connect: (chainId: number, connectorName: ConnectorNames) => Promise<boolean>;
  supportedChains: IChain[];
  chain: IChain;
  account: string;
  signer: Signer | null;
}

export interface IConnectModalProps {
  web3: IWeb3;
  supportedWallets: ConnectorNames[];
  expectedChainId?: number;
  visible: boolean;
  /**
   * @deprecated Use onClose, afterConnect, afterChainSwitch
   */
  onCancel?: () => void;

  /** executed when user click 'X' in the top right corner */
  onClose?: () => void;
  afterConnect?: () => void;
  afterChainSwitch?: () => void;
}

export const ConnectModal = (props: IConnectModalProps) => {
  const desktop = <Desktop {...props} />;
  const mobile = <Mobile {...props} />;

  return <LazyLoader desktop={desktop} tablet={desktop} mobile={mobile} />;
};
