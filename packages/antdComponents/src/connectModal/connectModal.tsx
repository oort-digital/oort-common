import dynamic from "next/dynamic";
import {
  ConnectorNames,
  IConnector,
  IChain,
} from "@oort-digital/web3-connectors";
import { Signer } from "ethers";
import { DeviceType } from "../typesAndInterfaces";

const Desktop = dynamic(() => import("./connectModalDesktop"));
const Mobile = dynamic(() => import("./connectModalMobile"));

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
  deviceType: DeviceType;
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
  if (props.deviceType === "desktop") {
    return <Desktop {...props} />;
  }

  return <Mobile {...props} />;
};
