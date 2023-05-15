import {Spin} from 'antd';
import { CSSProperties } from 'react';

interface IProps { style?: CSSProperties, className?: string }

export const PageLoader = ({style, className}: IProps) => {
    const internalStyle = style ?? {}

    if(!internalStyle.textAlign) {
        internalStyle.textAlign = "center"
    }

    if(!internalStyle.marginTop) {
        internalStyle.marginTop = '150px'
    }

    return <div className={className} style={internalStyle}>
        <Spin size="large" style={{verticalAlign: "middle"}}/>
    </div>
}
