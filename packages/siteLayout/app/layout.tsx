import React from "react";
import { Footer, FooterSection, OortSiteLayout } from "../src";
import "./styles.css";
import { ConsoleLogger, LogLevel } from "@oort-digital/logger";
import { userAgent } from "next/server";
import { headers } from "next/headers";
const logger = new ConsoleLogger(LogLevel.Debug);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ua = userAgent({
    headers: headers(),
  });

  return (
    <html lang="en">
      <body>
        <OortSiteLayout deviceType={ua.device.type} logger={logger}>
          <main>{children}</main>
          <Footer>
            <FooterSection />
          </Footer>
        </OortSiteLayout>
      </body>
    </html>
  );
}
