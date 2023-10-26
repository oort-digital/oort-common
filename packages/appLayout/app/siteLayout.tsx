"use client";

import { ConsoleLogger, LogLevel } from "@oort-digital/logger";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "../src";
import { Web3StoreStub } from "../src/stories/web3StoreStub";
import { navItems } from "../src/stories/common";
import { ReactNode } from "react";
import React from "react";
import { ConnectorNames } from "@oort-digital/web3-connectors";

interface IProps {
  children: ReactNode;
}

const web3 = new Web3StoreStub();
const supportedWallets: ConnectorNames[] = [
  ConnectorNames.Injected,
  ConnectorNames.WalletConnect,
];

const logger = new ConsoleLogger(LogLevel.Debug);

export function SiteLayout({ children }: IProps) {
  return (
    <Router>
      <Layout
        navItems={navItems}
        web3={web3}
        oortTokenAddress={"0xD8341A4978a68Ed0ad558D745af5578e51102725"}
        supportedWallets={supportedWallets}
      >
        {children}
      </Layout>
    </Router>
  );
}
