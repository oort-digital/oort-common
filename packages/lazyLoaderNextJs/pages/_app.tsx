import type { AppProps } from 'next/app'
import { IsSsrMobileContext } from '../src'

function MyApp({ Component, pageProps }: AppProps) {
  return <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
        <Component {...pageProps} />
    </IsSsrMobileContext.Provider>
}

export default MyApp
