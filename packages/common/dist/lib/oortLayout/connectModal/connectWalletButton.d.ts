import { ReactNode } from "react";
interface IProps {
    account?: string;
    disabled?: boolean;
    walletIcon: ReactNode;
    walletName: string;
    labelText?: string;
    onClick?: () => void;
}
export declare const ConnectWalletButton: ({ account, onClick, walletIcon, walletName, disabled, labelText }: IProps) => JSX.Element;
export {};
