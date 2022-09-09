import { ReactNode } from "react"
import { Drawer } from "antd"
import "./oortModalMobile.less"
import { CloseCircleIcon } from "../icons"

interface IModalTitle {
    txt: string
    underHeader: boolean
}

type TitleType = string | ReactNode | IModalTitle

const isModalTitle = (title: any) => title.underHeader !== undefined

interface IProps {
    visible: boolean
    title?: TitleType
    onCancel?: () => void
    loading?: boolean
    children: ReactNode
    className?: string
    footer?: ReactNode
    viewMode?: 'fullScreen' | 'topGap'
}

const renderTitles = (title?: TitleType) => {

    if(!title) { return [null, null] }
     
    if(isModalTitle(title)) {
        const { underHeader, txt } = title as IModalTitle
        if(underHeader) {
            return [null, <div className="title-under-header">{txt}</div>]
        }
    }

    return [<>{title}</>, null]
}

export const OortModalMobile = ({ children, visible, footer, onCancel, loading, title, className, viewMode }: IProps) => {

    const _onCancel = () => {
        if(!loading && onCancel) { //if loading === true, user can't close modal
            onCancel()            
        }
    }

    let cssClass = className ? `oort-modal-mobile ${className}` : 'oort-modal-mobile'

    if(viewMode === undefined) {
        viewMode = 'fullScreen'
    }
    else if(viewMode === 'topGap') {
        cssClass = `${cssClass} top-gap`
    }

    const height = viewMode === 'fullScreen' ? '100%' : '90%'
    const titles = renderTitles(title)

    return <Drawer
        className={cssClass}
        height={height}
        title={titles[0]}
        closeIcon={<CloseCircleIcon />}
        placement="bottom"
        closable={true}
        onClose={_onCancel}
        open={visible}
        footer={footer}
        >
            {titles[1]}
            {children}
    </Drawer>
}