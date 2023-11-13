import { Button } from "antd";
import { WalletSvg } from "./walletSvg";
import styles from "./connectButtonBlock.module.scss";
import { IWeb3Store, isChainEmpty } from "@oort-digital/web3-connectors";
import { getChainName } from "../../utils";
import { WalletIcon } from "../../icons";

const renderText = ({
  web3Store,
  expectedChainId,
}: IConnectButtonBlockProps) => {
  const { chain, supportedChains } = web3Store;

  if (isChainEmpty(chain)) {
    if (expectedChainId) {
      return (
        <div className={styles.wrong_chain_text}>
          Please connect to {getChainName(expectedChainId)} network.
        </div>
      );
    }

    return null;
  }

  if (expectedChainId) {
    return (
      <div className={styles.wrong_chain_text}>
        <div>{`You connected to ${chain!.name}.`}</div>
        <div>Please connect to {getChainName(expectedChainId)} network.</div>
      </div>
    );
  }

  if (!supportedChains.some((x) => x.chainId === chain!.chainId)) {
    return (
      <div className={styles.wrong_chain_text}>
        <div>{`You connected to ${chain!.name}.`}</div>
        <div>Please connect to the appropriate network.</div>
        {supportedChains.map((x) => x.name).join(", ")}
      </div>
    );
  }

  return null;
};

export interface IConnectButtonBlockProps {
  web3Store: IWeb3Store;
  expectedChainId?: number;
  onClick: () => void;
}

export function ConnectButtonBlock(props: IConnectButtonBlockProps) {
  return (
    <>
      <WalletSvg className={styles.svg} />
      {renderText(props)}
      <Button
        className={styles.connect_btn}
        size="large"
        type="primary"
        onClick={props.onClick}
      >
        Connect your WEB 3.0 wallet <WalletIcon />
      </Button>
      <div className={styles.label_text}>
        To enter the world of Oort Digital
      </div>
    </>
  );
}
