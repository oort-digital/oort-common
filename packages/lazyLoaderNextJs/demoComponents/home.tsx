
import { ConsoleLogger, LogLevel } from '@oort-digital/logger';
import { GetServerSidePropsContext } from 'next';
import { LazyLoaderNextJs, getSsrDeviceTypeProps } from '../src';
import dynamic, { Loader } from 'next/dynamic';
import { IProps } from './desktop';

const desktopLoader: Loader<IProps> = () => import('./desktop')
const mobileLoader: Loader<{}> = () => import('./mobile')
const tabletLoader: Loader<{}> = () => import('./tablet')

const logger = new ConsoleLogger(LogLevel.Debug)

const desktopProps: IProps = { text: 'desktop' }

export const Home = () => {
    const DesktopEl = dynamic(desktopLoader)
    const MobileEl = dynamic(mobileLoader)
    const TabletEl = dynamic(tabletLoader)

    return <LazyLoaderNextJs desktop={<DesktopEl { ...desktopProps } />} mobile={<MobileEl />} tablet={<TabletEl />} />
}

export function getServerSideProps(context: GetServerSidePropsContext) {
    const propsContainer = getSsrDeviceTypeProps(context, logger)
    console.log(`serverProps: ${JSON.stringify(propsContainer.props)}`)
    return propsContainer
}
