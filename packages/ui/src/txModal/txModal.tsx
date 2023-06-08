import { lazy } from "react";
import { LazyLoader } from "@oort-digital/lazy-loader";
import { ITxModalProps } from "./common";

const Desktop = lazy(() => import("./txModalDesktop"));
const Mobile = lazy(() => import("./txModalMobile"));

export function TxModal({
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
  const desktop = (
    <Desktop
      title={title}
      okBtn={okBtn}
      cancelBtn={cancelBtn}
      onCancel={onCancel}
      onOk={onOk}
      waiting={waiting}
      description={description}
      txItems={txItems}
      visible={visible}
      note={note}
    />
  );
  return (
    <LazyLoader
      desktop={desktop}
      tablet={desktop}
      mobile={
        <Mobile
          title={title}
          okBtn={okBtn}
          cancelBtn={cancelBtn}
          onCancel={onCancel}
          onOk={onOk}
          waiting={waiting}
          description={description}
          txItems={txItems}
          visible={visible}
          note={note}
        />
      }
    />
  );
}
