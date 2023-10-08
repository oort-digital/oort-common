import React from "react";
import { Footer, FooterSection } from "../src";
import "./styles.css";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import { SiteLayout } from "./siteLayout";

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
        <SiteLayout deviceType={ua.device.type}>
          <main>{children}</main>
          <Footer>
            <FooterSection />
          </Footer>
        </SiteLayout>
      </body>
    </html>
  );
}
