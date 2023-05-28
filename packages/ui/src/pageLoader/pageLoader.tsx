import {Spin} from 'antd';
import { CSSProperties, ReactNode } from 'react';

export interface IPageLoaderProps {
    style?: CSSProperties,
    className?: string,
    visible: boolean,
    children?: ReactNode
}

export const PageLoader = ({style, className, visible, children}: IPageLoaderProps) => {

    if(visible) {
        return <Spin size="large" className={className} style={style}>{children}</Spin>
    }

    return <>{children}</>
}
