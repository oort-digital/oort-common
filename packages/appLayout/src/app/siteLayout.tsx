"use client";
import { Layout } from "..";
import { Web3StoreStub } from "../stories/web3StoreStub";
import { navItems } from "../stories/common";
import { ReactNode } from "react";
import React from "react";
import { ConnectorNames } from "@oort-digital/web3-connectors";
import { DeviceType, verifyDeviceType } from "@oort-digital/detect-device";
import { ConsoleLogger } from "@oort-digital/logger";

const logger = new ConsoleLogger();
verifyDeviceType(logger);

interface IProps {
  children: ReactNode;
  deviceType: DeviceType;
}

function isSsr() {
  return typeof window === "undefined";
}

// no reason create web3Store on server side
const web3 = isSsr() ? undefined : new Web3StoreStub();
// const web3 = new Web3StoreStub();

const supportedWallets: ConnectorNames[] = [
  ConnectorNames.Injected,
  ConnectorNames.WalletConnect,
];

export function SiteLayout({ children, deviceType }: IProps) {
  return (
    <Layout
      id="site-layout"
      deviceType={deviceType}
      navItems={navItems}
      web3={web3}
      oortTokenAddress={"0xD8341A4978a68Ed0ad558D745af5578e51102725"}
      supportedWallets={supportedWallets}
    >
      {children}
    </Layout>
  );
}
