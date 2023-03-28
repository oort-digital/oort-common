
import { GetServerSidePropsContext } from 'next';
import { getIsSsrMobileServerSideProps } from "../src/getIsSsrMobileServerSideProps"

// const desktop = () => import('./desktop')
// const mobile = () => import('./mobile')

export const Home = () => <>
hello!
    {/* <LazyLoaderNextJs desktop={desktop} mobile={mobile} tablet={mobile} /> */}
</>

export function getServerSideProps(context: GetServerSidePropsContext) {
    return getIsSsrMobileServerSideProps(context)
}
