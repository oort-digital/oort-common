import dynamic, { Loader } from 'next/dynamic'

const loader: Loader<{}> = () => import('./testElement')



interface IProps {
    ssr: boolean
}

export const LazyTest = ({ ssr }: IProps) => {

    const El = dynamic(loader, { ssr })

    return <El></El>

}