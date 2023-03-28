
import { GetServerSidePropsContext } from 'next';
import { getIsSsrMobileServerSideProps } from '../src';

// const desktop = () => import('./desktop')
// const mobile = () => import('./mobile')

const Home = () => <>
hello!
    {/* <LazyLoaderNextJs desktop={desktop} mobile={mobile} tablet={mobile} /> */}
</>

export function getServerSideProps(context: GetServerSidePropsContext) {
    return getIsSsrMobileServerSideProps(context)
}

export default Home