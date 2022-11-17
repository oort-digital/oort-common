import { logger } from "ethers";
import { IFilterListeners } from "./typesAndInterfaces";

export class InternalFilterListeners implements IFilterListeners {
    
    submit() { this.exec('submit') }
    close() { this.exec('close') }
    clear() { this.exec('clear') }

    addListeners(listeners: IFilterListeners) {
        this._listeners.push(listeners)
    }

    removeListeners(listeners: IFilterListeners) {
        var index = this._listeners.indexOf(listeners);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
        else {
            logger.warn("InternalFilterListeners.removeListeners. Can't find listeners to remove")
        }
    }

    private exec(listenerName: 'submit' | 'clear' | 'close') {
        this._listeners.forEach(listener => listener[listenerName]())
    }

    private _listeners: IFilterListeners[] = []

}