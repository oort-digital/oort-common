/// <reference types="react" />
interface IProps {
    mintErc721: () => void;
    mintErc1155: () => void;
    loading: boolean;
    onCancel: () => void;
    visible: boolean;
}
export declare const MintTestNftModal: ({ onCancel, visible, mintErc1155, mintErc721, loading }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=mintTestNftModal.d.ts.map