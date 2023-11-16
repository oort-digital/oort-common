import React from "react";
import "./reset.css";
import { SiteLayout } from "./siteLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <SiteLayout>{children}</SiteLayout>
        </main>
      </body>
    </html>
  );
}
