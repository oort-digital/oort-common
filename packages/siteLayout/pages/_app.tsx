import "./styles.css";

import { SsrDeviceTypeContext } from "@oort-digital/lazy-loader-next-js";
import type { AppProps } from "next/app";
import { OortSiteLayout } from "../src";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SsrDeviceTypeContext.Provider value={pageProps.ssrDeviceType}>
      <OortSiteLayout>
        <main>
          <Component {...pageProps} />
        </main>

        {/* <div className={styles.footer}>
          <div className={styles.container}>
            <FooterSection />
          </div>
        </div> */}
      </OortSiteLayout>
    </SsrDeviceTypeContext.Provider>
  );
}

export default MyApp;
