import { ReactNode } from "react";
interface IProps {
    account?: string;
    loading?: boolean;
    disabled?: boolean;
    walletIcon: ReactNode;
    walletName: string;
    labelText?: string;
    onClick?: () => void;
}
export declare const ConnectButton: ({ account, onClick, walletIcon, walletName, labelText, loading, disabled }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=connectButton.d.ts.map