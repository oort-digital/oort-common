import React from "react";
import "./reset.css";
import { SiteLayout } from "./siteLayout";
import { detectDevice } from "@oort-digital/detect-device";
import { headers } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const deviceType = detectDevice(headers());

  return (
    <html lang="en">
      <body>
        <SiteLayout deviceType={deviceType}>
          <main>{children}</main>
        </SiteLayout>
      </body>
    </html>
  );
}
