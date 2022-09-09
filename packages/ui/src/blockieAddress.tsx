import * as blockies from 'blockies-ts'

interface IProps {
    className?: string
    address: string
}

export const BlockieAddress = ({address, className}: IProps) => {
    if (!address) { return null }

    const imgSrc = blockies.create({seed:address}).toDataURL();
    return <img src={imgSrc} className={className} alt='blockies'/>
}
