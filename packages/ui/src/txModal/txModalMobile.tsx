import "./txModalMobile.less";
import { FooterButtonsMobile, OortModalMobile } from "../oortModal";
import { ITxModalProps } from "./common";
import { TransactionInfo } from "./transactionInfo";

function TxModalMobile({
  title,
  okBtn,
  cancelBtn,
  onCancel,
  onOk,
  waiting,
  description,
  txItems,
  visible
}: ITxModalProps) {

  const onCancelInternal = () => {
    if (!waiting && onCancel) {
      // if waiting === true, user can't close modal
      onCancel();
    }
  };

  const footer = (
    <FooterButtonsMobile
      cancelBtn={cancelBtn}
      onOk={onOk}
      okBtn={okBtn}
      loading={waiting}
      onCancel={onCancel}
    />
  );

  return (
    <OortModalMobile
      className="tx-modal-mobile"
      title={{ txt: title, underHeader: true }}
      visible={visible}
      onCancel={onCancelInternal}
      loading={waiting}
      footer={footer}
    >
      <>
        <div className="tx-modal-description">{description}</div>
        <TransactionInfo items={txItems} />
      </>
    </OortModalMobile>
  );
}

export default TxModalMobile;
