import { DeviceType } from "@oort-digital/lazy-loader";
import { createContext, useContext } from "react";

export const SsrDeviceTypeContext = createContext(DeviceType.Desktop);

export const useSsrDeviceType = () => {
    const ssrDeviceType = useContext(SsrDeviceTypeContext);
    return ssrDeviceType;
};