import { CSSProperties, ReactNode, useEffect, useState } from "react";
import styles from "./auth.module.less";
import { PageLoader } from "../../pageLoader";
import { observer } from "mobx-react";
import { IWeb3Store } from "@oort-digital/web3-connectors";
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { AuthStore, TokenStorageType } from "../store";
import { ILogger } from "@oort-digital/logger";
import {
  registerAuthInterceptors,
  unRegisterAuthInterceptors,
} from "../interceptors";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { OortApiInterceptors } from "@oort-digital/oort-api-client";
import { PathType, isExcludedPath } from "./isExcludedPath";
import { ConnectButtonBlock } from "./connectButtonBlock";
import { ConnectAndSignModal } from "./connectAndSignModal";

export interface IAuthProps {
  className?: string;
  style?: CSSProperties | undefined;
  supportedWallets: ConnectorNames[];
  web3Store: IWeb3Store;
  expectedChainId?: number;
  logger: ILogger;
  ssoServerBaseUrl: string;
  tokenStorageType?: TokenStorageType;
  children?: ReactNode;
  excludePathes?: PathType[];
  interceptors: OortApiInterceptors;
}

const Impl = (props: IAuthProps) => {
  const {
    className,
    style,
    excludePathes,
    web3Store,
    expectedChainId,
    supportedWallets,
    logger,
    ssoServerBaseUrl,
    tokenStorageType = "cookies",
    children,
    interceptors,
  } = props;

  const [renderChildren, setRenderChildren] = useState(false);
  const [isConnectModalVisible, setVisibility] = useState(false);

  const onClose = () => setVisibility(false);

  const [authStore] = useState(
    () =>
      new AuthStore({
        logger,
        web3Store,
        ssoServerBaseUrl,
        tokenStorageType,
      })
  );

  const location = useLocation();

  const debug = (msg: string) => {
    logger.debug(`Auth. ${msg}`);
  };

  useEffect(() => {
    debug(`useEffect. authStore.isReady:${authStore.isReady}`);

    if (authStore.isReady) {
      debug("registerAuthInterceptors");
      const ids = registerAuthInterceptors(interceptors, authStore, logger);
      debug("registerAuthInterceptors done");
      setRenderChildren(true);
      return () => {
        debug(`useEffect. authStore.isReady:${authStore.isReady} unmount`);
        unRegisterAuthInterceptors(interceptors, ids);
      };
    }
    return;
  }, [authStore.isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  if (excludePathes && isExcludedPath(location.pathname, excludePathes)) {
    debug(`${location.pathname} was excluded`);
    return <>{children}</>;
  }

  debug(`renderChildren: ${renderChildren}`);

  const { isConnectedToSupportedChain } = web3Store;

  const { askAuth } = authStore;

  const loaderStyle: CSSProperties = {
    textAlign: "center",
    marginTop: "150px",
    width: "100%",
  };
  if (!authStore.isReady) {
    return <PageLoader delay={100} visible style={loaderStyle} />;
  }

  if (askAuth || !isConnectedToSupportedChain) {
    return (
      <div style={style} className={classnames(styles.wrapper, className)}>
        <ConnectButtonBlock
          web3Store={web3Store}
          expectedChainId={expectedChainId}
          onClick={() => setVisibility(true)}
        />
        <ConnectAndSignModal
          supportedWallets={supportedWallets}
          expectedChainId={expectedChainId}
          web3Store={web3Store}
          visible={isConnectModalVisible}
          onClose={onClose}
          authStore={authStore}
          logger={logger}
        />
      </div>
    );
  }

  if (renderChildren) {
    return <>{children}</>;
  }

  return <></>;
};

export const Auth = observer(Impl);
