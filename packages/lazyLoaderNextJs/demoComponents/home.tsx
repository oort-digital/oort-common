
import { GetServerSidePropsContext } from 'next';
import { LazyLoaderNextJs } from '../src';
import { getIsSsrMobileServerSideProps } from "../src/getIsSsrMobileServerSideProps"

const desktop = () => import('./desktop')
const mobile = () => import('./mobile')
const tablet = () => import('./tablet')

export const Home = () => <LazyLoaderNextJs desktop={desktop} mobile={mobile} tablet={tablet} />

export function getServerSideProps(context: GetServerSidePropsContext) {
    return getIsSsrMobileServerSideProps(context)
}
