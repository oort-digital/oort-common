import type { AppProps } from 'next/app'
import { SsrDeviceTypeContext } from '../src'

function MyApp({ Component, pageProps }: AppProps) {
  return <SsrDeviceTypeContext.Provider value={pageProps.ssrDeviceType}>
        <Component {...pageProps} />
    </SsrDeviceTypeContext.Provider>
}

export default MyApp
