import styles from "./oortModal.module.less"
import {Modal, Typography } from 'antd'
import React, { ReactNode } from 'react'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { ButtonType } from 'antd/lib/button';
import { CloseIcon } from "../icons";
const {Title} = Typography

function OortModalTitle(props: { title: string }) {
    return <Title level={4} style={{marginBottom: 0}}>{props.title}</Title>
}

export interface IBtn {
    text: string
    size?: SizeType
    type?: ButtonType
    icon?: React.ReactNode
}

interface IProps {
    visible: boolean
    title: string
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void
    loading?: boolean
    children: ReactNode
    width?: string
    className?: string
    footer?: ReactNode
    closable?: boolean
}

export function OortModal({className, title, onCancel, loading, children, visible, width, footer, closable = true }: IProps) {

    const _onCancel = (e: React.MouseEvent<HTMLElement>) => {
        if(!loading && onCancel) { //if loading === true, user can't close modal
            onCancel(e)            
        }
    }

    const cssClass = className ? `${className} ${styles.modal}` : styles.modal

    return <Modal
        className={cssClass}
        width={width || '640px'}
        title={<OortModalTitle title={title}/>}
        centered
        open={visible}
        closable={closable}
        closeIcon={<CloseIcon />}
        cancelText="Close"
        onCancel={_onCancel}
        maskClosable={false}
        confirmLoading={loading}
        footer={footer}
    >
        {children}
    </Modal>

}
