import React from "react";
import "./styles.scss";
import { SiteLayout } from "./siteLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>
          <main>{children}</main>
          {/* <>hello</> */}
        </SiteLayout>
      </body>
    </html>
  );
}
