"use client";

import { ConsoleLogger, LogLevel } from "@oort-digital/logger";
import { OortSiteLayout } from "../src";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import React from "react";

interface IProps {
  deviceType?: string;
  children: ReactNode;
  baseUrl: string;
}

const logger = new ConsoleLogger(LogLevel.Debug);

export function SiteLayout({ deviceType, children, baseUrl }: IProps) {
  const pathname = usePathname();

  return (
    <OortSiteLayout
      baseUrl={baseUrl}
      pathname={pathname}
      deviceType={deviceType}
      logger={logger}
    >
      {children}
    </OortSiteLayout>
  );
}
