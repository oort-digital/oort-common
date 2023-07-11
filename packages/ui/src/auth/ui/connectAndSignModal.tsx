import { ConnectorNames, IWeb3Store } from "@oort-digital/web3-connectors";
import { ConnectModal } from "../../connectModal";
import { SignModal } from "./signModal";
import { useState } from "react";
import { AuthStore } from "../store";
import { ILogger } from "@oort-digital/logger";

export interface IConnectAndSignProps {
  className?: string;
  supportedWallets: ConnectorNames[];
  web3Store: IWeb3Store;
  expectedChainId?: number;
  visible: boolean;
  onClose: () => void;
  authStore: AuthStore;
  logger: ILogger;
}

export function ConnectAndSignModal(props: IConnectAndSignProps) {
  const {
    supportedWallets,
    expectedChainId,
    web3Store,
    visible,
    onClose,
    authStore,
    logger,
  } = props;

  const [authInProcess, setAuthInProcess] = useState(false);

  const { askAuth } = authStore;

  const auth = async () => {
    try {
      setAuthInProcess(true);
      await authStore.auth();
    } catch (e) {
      logger.error(e);
    }
    setAuthInProcess(false);
  };

  return (
    <>
      <ConnectModal
        supportedWallets={supportedWallets}
        expectedChainId={expectedChainId}
        web3={web3Store}
        visible={visible}
        onClose={onClose}
      />
      <SignModal
        loading={authInProcess}
        authFunc={() => auth()}
        visible={askAuth}
      />
    </>
  );
}
