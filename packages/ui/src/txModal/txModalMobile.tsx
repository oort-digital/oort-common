import { Tag } from "antd";
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
  visible,
  note,
}: ITxModalProps) {
  let noteDiv: JSX.Element | null = null;
  if (note) {
    noteDiv = (
      <div style={{ marginBottom: "5px" }}>
        <Tag color="orange">{note}</Tag>
      </div>
    );
  }

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
        {noteDiv}
      </>
    </OortModalMobile>
  );
}

export default TxModalMobile;
