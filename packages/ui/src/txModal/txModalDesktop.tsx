import "./txModalDesktop.less";
import { ITxModalProps } from "./common";
import { TransactionInfo } from "./transactionInfo";
import { FooterButtons, OortModal } from "../oortModal";

function TxModalDesktop({
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
    <FooterButtons
      cancelBtn={cancelBtn}
      onOk={onOk}
      okBtn={okBtn}
      loading={waiting}
      onCancel={onCancel}
    />
  );

  return (
    <OortModal
      className="tx-modal-desktop"
      width="640px"
      title={title}
      visible={visible}
      onCancel={onCancelInternal}
      loading={waiting}
      footer={footer}
    >
      <>
        <div className="tx-modal-description">{description}</div>
        <TransactionInfo items={txItems} />
      </>
    </OortModal>
  );
}

export default TxModalDesktop;
