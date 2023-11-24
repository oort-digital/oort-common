import { ConnectorNames, IWeb3Store } from "@oort-digital/web3-connectors";
import { ConnectModal } from "../../connectModal";
import { SignModal } from "./signModal";
import { useState } from "react";
import { IAuthStore } from "../store";
import { ILogger } from "@oort-digital/logger";
import { observer } from "mobx-react-lite";
import { DeviceType } from "../../typesAndInterfaces";

export interface IConnectAndSignProps {
  className?: string;
  supportedWallets: ConnectorNames[];
  web3Store: IWeb3Store;
  expectedChainId?: number;
  visible: boolean;
  onClose: () => void;
  authStore: IAuthStore;
  logger: ILogger;
  deviceType: DeviceType;
}

function Impl({
  supportedWallets,
  expectedChainId,
  web3Store,
  visible,
  onClose,
  authStore,
  logger,
  deviceType,
}: IConnectAndSignProps) {
  const [authInProcess, setAuthInProcess] = useState(false);

  const { isConnectedToSupportedChain } = web3Store;
  const { askAuth, isReady } = authStore;

  const auth = async () => {
    try {
      setAuthInProcess(true);
      await authStore.auth();
    } catch (e) {
      logger.error(e);
    }
    setAuthInProcess(false);
  };

  if (!isReady) {
    return null;
  }

  logger.debug(`ConnectAndSignModal. askAuth: ${askAuth}`);

  return (
    <>
      <ConnectModal
        supportedWallets={supportedWallets}
        expectedChainId={expectedChainId}
        web3={web3Store}
        visible={visible && !isConnectedToSupportedChain}
        onClose={onClose}
        deviceType={deviceType}
      />
      <SignModal
        loading={authInProcess}
        authFunc={() => auth()}
        visible={askAuth && visible && isConnectedToSupportedChain}
      />
    </>
  );
}

export const ConnectAndSignModal = observer(Impl);
