import React from "react";
import { Footer, FooterSection, OortSiteLayout } from "../src";
import "./styles.css";
import { ConsoleLogger, LogLevel } from "@oort-digital/logger";

const logger = new ConsoleLogger(LogLevel.Debug);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OortSiteLayout logger={logger}>
          <main>{children}</main>
          <Footer>
            <FooterSection />
          </Footer>
        <FooterSection />
      </body>
    </html>
  );
}

