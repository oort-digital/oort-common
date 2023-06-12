import { lazy } from "react";
import { LazyLoader } from "@oort-digital/lazy-loader";
import { ITxModalProps } from "./common";

const Desktop = lazy(() => import("./txModalDesktop"));
const Mobile = lazy(() => import("./txModalMobile"));

export function TxModal(props: ITxModalProps) {
  const desktop = <Desktop {...props}/>
  return (
    <LazyLoader
      desktop={desktop}
      tablet={desktop}
      mobile={<Mobile {...props} />}
    />
  );
}
