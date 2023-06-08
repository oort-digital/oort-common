import { IFooterBtn } from "../oortModal";

export interface ITransactionInfoItem {
  name: string;
  value: string | React.ReactNode;
}

export interface ITxModalProps {
  visible: boolean;
  title: string;
  description: string;
  okBtn?: IFooterBtn;
  cancelBtn?: IFooterBtn;
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: () => void;
  waiting: boolean;
  txItems: ITransactionInfoItem[];
  note?: string;
}
