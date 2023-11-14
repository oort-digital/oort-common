"use client";

import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "..";
import { Web3StoreStub } from "../stories/web3StoreStub";
import { navItems } from "../stories/common";
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
