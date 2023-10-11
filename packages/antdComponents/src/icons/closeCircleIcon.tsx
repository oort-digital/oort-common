import Icon from '@ant-design/icons';

const Svg = () => <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0001 29.3333C23.3334 29.3333 29.3334 23.3333 29.3334 16C29.3334 8.66666 23.3334 2.66666 16.0001 2.66666C8.66675 2.66666 2.66675 8.66666 2.66675 16C2.66675 23.3333 8.66675 29.3333 16.0001 29.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.2266 19.7733L19.7732 12.2267" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.7732 19.7733L12.2266 12.2267" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


interface IProps {
    className?: string
}

export const CloseCircleIcon = ({ className }: IProps) => <Icon className={className} component={Svg} />