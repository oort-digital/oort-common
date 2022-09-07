import { ReactNode } from "react";
interface IProps {
    account?: string;
    disabled?: boolean;
    walletIcon: ReactNode;
    walletName: string;
    labelText?: string;
    onClick?: () => void;
}
export declare const ConnectButton: ({ account, onClick, walletIcon, walletName, disabled, labelText }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=connectButton.d.ts.map