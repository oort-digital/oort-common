import btnStyles from "./../button/button.module.scss";
import styles from './subscribeControl.module.scss'
import footerStyles from "./footerSubscribeControl.module.scss";
import { Button } from "antd";
import { ChangeEvent } from "react";
import classNames from "classnames";
export enum SubscribeType {
    HeaderSubscribe,
    FooterSubscribe
}
interface IProps {
    style? : SubscribeType
    value?: string
    placeholder: string
    onChange?: (value: string) => void
    loading: boolean
}

export const SubscribeControl = ({style, value, onChange, placeholder, loading }: IProps) => {

    const onChangeInternal = (ev: ChangeEvent<HTMLInputElement>) => {
        if(onChange){
            onChange(ev.currentTarget.value)
        }
    }

    return <div className={style === SubscribeType.FooterSubscribe ?  footerStyles.subscribe : styles.subscribe}>
        <input disabled={loading} placeholder={placeholder} type="email" value={value} onChange={e => onChangeInternal(e)} />
        <Button loading={loading} className={classNames(btnStyles.btn, { [`${btnStyles.hover}`]: !loading })} htmlType="submit">Subscribe</Button>
    </div>
}