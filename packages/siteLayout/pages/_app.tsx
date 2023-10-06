import "./styles.css";

import { SsrDeviceTypeContext } from "@oort-digital/lazy-loader-next-js";
import type { AppProps } from "next/app";
import { OortSiteLayout } from "../src";
import { Footer, FooterSection } from "../src/footer";

import { ConsoleLogger, LogLevel } from "@oort-digital/logger";

const logger = new ConsoleLogger(LogLevel.Debug);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SsrDeviceTypeContext.Provider value={pageProps.ssrDeviceType}>
      <OortSiteLayout logger={logger}>
        <main>
          <Component {...pageProps} />
        </main>

        <Footer>
          <FooterSection />
        </Footer>
      </OortSiteLayout>
    </SsrDeviceTypeContext.Provider>
  );
}

export default MyApp;
