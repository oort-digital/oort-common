import { createContext, useContext } from "react";

export const IsSsrMobileContext = createContext(false);

export const useIsSsrMobile = () => {
    const isSsrMobile = useContext(IsSsrMobileContext);
    return isSsrMobile;
};