"use client";
import { ReactNode } from "react";
import { verifyDeviceType } from "../detectDevice";
import { ConsoleLogger, LogLevel } from "@oort-digital/logger";

const logger = new ConsoleLogger(LogLevel.Debug);

verifyDeviceType(logger);

interface IProps {
  children: ReactNode;
}

export function SiteLayout({ children }: IProps) {
  return <>{children}</>;
}
