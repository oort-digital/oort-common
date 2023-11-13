import styles from "./connectModalMobile.module.scss";
import { OortModalMobile } from "../oortModal";
import { IConnectModalProps } from "./connectModal";
import { useConnectModalCommon } from "./useConnectModalCommon";

const ConnectModalMobile = (props: IConnectModalProps) => {
  const { footer1, footer2, content, onCancel, loading } =
    useConnectModalCommon({
      props,
      styles,
      btnGutter: [0, 12],
      isMobile: true,
    });

  const { visible } = props;

  const footer = (
    <>
      {footer1}
      {footer2}
    </>
  );

  return (
    <OortModalMobile
      viewMode="topGap"
      loading={loading}
      footer={footer}
      className={styles.modal}
      classNames={{
        header: styles.header,
        footer: styles.footer,
      }}
      title="Network & Wallet"
      visible={visible}
      onCancel={() => onCancel()}
    >
      <>{content}</>
    </OortModalMobile>
  );
};

export default ConnectModalMobile;
