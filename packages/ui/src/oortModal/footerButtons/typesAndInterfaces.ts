import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { ButtonType } from 'antd/lib/button';

export interface IFooterProps {
    buttons?: IFooterBtn[]
    loading?: boolean
    className?: string
}

export interface IFooterBtn {
    className?: string
    text: string | undefined
    size?: SizeType
    type?: ButtonType
    icon?: React.ReactNode
    href?: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    isMainButton?: boolean
    /**
    * @deprecated Use isMainButton
    */
    loading?: boolean
    disabled?: boolean
}