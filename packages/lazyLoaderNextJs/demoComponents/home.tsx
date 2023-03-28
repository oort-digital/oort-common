
import { ConsoleLogger, LogLevel } from '@oort-digital/logger';
import { GetServerSidePropsContext } from 'next';
import { LazyLoaderNextJs, getSsrDeviceTypeProps } from '../src';

const desktop = () => import('./desktop')
const mobile = () => import('./mobile')
const tablet = () => import('./tablet')

const logger = new ConsoleLogger(LogLevel.Debug)

export const Home = () => <LazyLoaderNextJs desktop={desktop} mobile={mobile} tablet={tablet} />

export function getServerSideProps(context: GetServerSidePropsContext) {
    const propsContainer = getSsrDeviceTypeProps(context, logger)
    console.log(`serverProps: ${JSON.stringify(propsContainer.props)}`)
    return propsContainer
}
