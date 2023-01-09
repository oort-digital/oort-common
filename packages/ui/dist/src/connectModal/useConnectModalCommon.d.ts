import { ReactNode } from "react";
import { IConnectModalProps } from './connectModal';
import { Gutter } from "antd/lib/grid/row";
interface IResult {
    footer1: ReactNode;
    footer2: ReactNode;
    content: ReactNode;
    onCancel: () => void;
    loading: boolean;
}
interface IArgs {
    props: IConnectModalProps;
    isMobile: boolean;
    btnGutter: [Gutter, Gutter];
    styles: any;
}
export declare const useConnectModalCommon: ({ props, isMobile, btnGutter, styles }: IArgs) => IResult;
export {};
//# sourceMappingURL=useConnectModalCommon.d.ts.map