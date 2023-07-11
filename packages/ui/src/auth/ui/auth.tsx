import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { Button } from "antd";
import styles from "./auth.module.less";
import { PageLoader } from "../../pageLoader";
import { observer } from "mobx-react";
import { WalletSvg } from "./walletSvg";
import { WalletIcon } from "../../icons";
import { ConnectModal } from "../../connectModal";
import { IWeb3Store, isChainEmpty } from "@oort-digital/web3-connectors";
import { getChainName } from "../../utils";
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { AuthStore, TokenStorageType } from "../store";
import { ILogger } from "@oort-digital/logger";
import {
  registerAuthInterceptors,
  unRegisterAuthInterceptors,
} from "../interceptors";
import { AuthModal } from "./authModal";
import { useLocation } from "react-router-dom";
import classnames from "classnames";
import { OortApiInterceptors } from "@oort-digital/oort-api-client";
import { PathType, isExcludedPath } from "./isExcludedPath";
import {
  ConnectButtonBlock,
  IConnectButtonBlockProps,
} from "./connectButtonBlock";

export interface IAuthProps {
  className?: string;
  style?: CSSProperties | undefined;
  supportedWallets: ConnectorNames[];
  web3Store: IWeb3Store;
  expectedChainId?: number;
  logger: ILogger;
  ssoServerBaseUrl: string;
  tokenStorageType?: TokenStorageType;
  children: ReactNode;
  excludePathes?: PathType[];
  interceptors: OortApiInterceptors;
  renderConnectButtonBlock?: (props: IConnectButtonBlockProps) => JSX.Element;
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
    renderConnectButtonBlock,
  } = props;

  const [isWalletVisible, setIsWalletVisible] = useState(false);
  const [authInProcess, setAuthInProcess] = useState(false);

  const [renderChildren, setRenderChildren] = useState(false);

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

  const onClose = () => setIsWalletVisible(false);

  const auth = async () => {
    try {
      setAuthInProcess(true);
      await authStore.auth();
    } catch (e) {
      logger.error(e);
    }
    setAuthInProcess(false);
  };

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
        {renderConnectButtonBlock ? (
          renderConnectButtonBlock({
            web3Store,
            expectedChainId,
            onClick: () => setIsWalletVisible(true),
          })
        ) : (
          <ConnectButtonBlock
            web3Store={web3Store}
            expectedChainId={expectedChainId}
            onClick={() => setIsWalletVisible(true)}
          />
        )}
        <ConnectModal
          supportedWallets={supportedWallets}
          expectedChainId={expectedChainId}
          web3={web3Store}
          visible={isWalletVisible}
          onClose={onClose}
        />
        <AuthModal
          loading={authInProcess}
          authFunc={() => auth()}
          visible={askAuth}
        />
      </div>
    );
  }

  if (renderChildren) {
    // return <PageLoader delay={100} visible style={loaderStyle} />
    return <>{children}</>;
  }

  return <></>;
};

export const Auth = observer(Impl);
