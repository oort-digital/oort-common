import * as blockies from 'blockies-ts'

interface IProps {
    className?: string
    address: string
}

export const BlockieAddress = ({address, className}: IProps) => {
    if (!address) { return null }

    const imgSrc = addressToDataURL(address);
    return <img src={imgSrc} className={className} alt='blockies'/>
}

export const addressToDataURL = (address: string) => blockies.create({seed:address}).toDataURL()
