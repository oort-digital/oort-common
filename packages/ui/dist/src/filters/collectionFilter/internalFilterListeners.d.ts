import { IFilterListeners } from "./typesAndInterfaces";
export declare class InternalFilterListeners implements IFilterListeners {
    submit(): void;
    close(): void;
    clear(): void;
    addListeners(listeners: IFilterListeners): void;
    removeListeners(listeners: IFilterListeners): void;
    private exec;
    private _listeners;
}
//# sourceMappingURL=internalFilterListeners.d.ts.map