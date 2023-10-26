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
        <SiteLayout baseUrl="http://localhost:3000" deviceType={ua.device.type}>
          <main>{children}</main>
          <Footer>
            <FooterSection baseUrl="http://localhost:3000" />
          </Footer>
        </SiteLayout>
      </body>
    </html>
  );
}
