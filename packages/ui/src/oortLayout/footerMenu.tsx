import { useState, useEffect } from "react";
import styles from "./footerMenu.module.less";
import { Menu, MenuItem, MenuItemBtn } from "./menu";
import { getChainIconOld, formatUnits } from "../utils";
import {
  ChevronSortIcon,
  DiscordIcon,
  TelegramIcon,
  TokenAfterIcon,
  TokenIcon,
  TwitterIcon,
} from "../icons";
// import { ThemeSwitch } from './themeSwitch';
import { ConnectModal, IWeb3 } from "../connectModal";
import { BlockieAddress } from "../blockieAddress";
// import { useTheme } from '../effects';
import { isChainEmpty } from "@oort-digital/web3-connectors";
import { observer } from "mobx-react";
import { toMasked } from "@oort-digital/utils";
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { Erc20__factory } from "../contracts";
import { Tooltip } from "antd";

const TWITTER = "https://twitter.com/OortDigital";
const DISCORD = "https://t.co/6eYdGdfUK7?amp=1";
const TELEGRAM = "https://t.me/oortdigital";

interface IProps {
  supportedWallets: ConnectorNames[];
  className?: string;
  web3?: IWeb3;
  oortTokenAddress?: string;
}

const social = (
  <>
    <a href={TELEGRAM}>
      <span className={styles.icon}>
        <TelegramIcon />
      </span>
    </a>
    <a href={TWITTER}>
      <span className={styles.icon}>
        <TwitterIcon />
      </span>
    </a>
    <a href={DISCORD}>
      <span className={styles.icon}>
        <DiscordIcon />
      </span>
    </a>
  </>
);

const Impl = ({
  className,
  web3,
  supportedWallets,
  oortTokenAddress,
}: IProps) => {
  const [connectModalVisible, setConnectModalVisible] = useState(false);

  const [balance, setBalance] = useState<string | undefined>(undefined);

  // const [ isDarkMode, setDarkMode ] = useTheme()
  useEffect(() => {
    if (
      web3 &&
      web3.signer &&
      oortTokenAddress &&
      web3.supportedChains.filter((val) => val.chainId === web3.chain.chainId)
        .length > 0
    ) {
      try {
        Erc20__factory.connect(oortTokenAddress, web3.signer)
          .balanceOf(web3.account)
          .then((balance) => {
            setBalance(formatUnits(balance, 18));
          });
      } catch (e) {
        setBalance(undefined);
      }
    } else {
      setBalance(undefined);
    }
  }, [web3?.account, web3?.chain]);

  const renderConnectModal = () => {
    return (
      <ConnectModal
        onCancel={() => setConnectModalVisible(false)}
        visible={connectModalVisible}
        web3={web3!}
        supportedWallets={supportedWallets}
      />
    );
  };

  const renderWeb3 = () => {
    if (!web3) {
      return null;
    }

    const { account, chain } = web3;

    if (isChainEmpty(chain)) {
      return null;
    }

    const { chainId, name } = chain;
    const chainIcon = (
      <span className={styles.icon_before}>
        {getChainIconOld(chainId, 20, 20)}
      </span>
    );
    const accountImg = (
      <BlockieAddress address={account} className={styles.account_img} />
    );
    const afterIcon = (
      <span className={styles.icon_after}>
        <ChevronSortIcon />
      </span>
    );
    const tokenIcon = (
      <span className={styles.icon_before}>
        <TokenIcon />
      </span>
    );

    const tokenIconAfter = (
      <span className={styles.icon_after}>
        <TokenAfterIcon />
      </span>
    );

    return (
      <>
        {renderConnectModal()}
        {balance && (
          <MenuItemBtn
            className={styles.menu_item_btn}
            key="balance"
            iconBefore={tokenIcon}
            iconAfter={
              <Tooltip
                trigger="click"
                title="$OORT currently in testnet, stay tuned for TGE, when you can convert to mainnet $OORT at 1:1 ratio"
              >
                {tokenIconAfter}
              </Tooltip>
            }
            caption={Number(balance).toLocaleString()}
          />
        )}
        <MenuItemBtn
          className={`${styles.menu_item_btn} ${styles.chain_name}`}
          key="chain"
          onClick={() => setConnectModalVisible(true)}
          iconBefore={chainIcon}
          iconAfter={afterIcon}
          caption={name}
        />
        <MenuItemBtn
          className={styles.menu_item_btn}
          key="account"
          onClick={() => setConnectModalVisible(true)}
          iconBefore={accountImg}
          iconAfter={afterIcon}
          caption={toMasked(account)}
        />
      </>
    );
  };

  const cssClass = className ? `${className} ${styles.root}` : styles.root;

  return (
    <>
      <Menu className={cssClass}>
        <MenuItem key="social" className={styles.social}>
          {social}
        </MenuItem>
        {renderWeb3()}
      </Menu>
    </>
  );
};

export const FooterMenu = observer(Impl);
