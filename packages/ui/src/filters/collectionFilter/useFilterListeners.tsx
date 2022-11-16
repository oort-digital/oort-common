import { useRef } from 'react';
import { FilterListenerActionType, IFilterListeners } from './typesAndInterfaces';

type ListenerType = () => void

class InternalFilterListeners implements IFilterListeners {
    
    submit() { this.exec(this._submit) }
    close() { this.exec(this._close) }
    clear() { this.exec(this._clear) }

    add({ submit, clear, close }: IFilterListeners) {
        this._submit.push(submit)
        this._clear.push(clear)
        this._close.push(close)
    }

    clearHandlers() {
        this._submit = []
        this._clear = []
        this._close = []
    }

    private exec(handlers: ListenerType[]) { handlers.forEach(h => h()) }

    private _submit: ListenerType[] = []
    private _close: ListenerType[] = []
    private _clear: ListenerType[] = []
}

export function useFilterListeners(): [ FilterListenerActionType, FilterListenerActionType, IFilterListeners ] {
	
	const listenersRef = useRef<InternalFilterListeners>()
    if(!listenersRef.current) {
        listenersRef.current = new InternalFilterListeners()
    }

    const add = (newListeners: IFilterListeners) => {
        listenersRef.current!.add(newListeners)
    }

    const remove = (_listeners: IFilterListeners) => {
        listenersRef.current!.clearHandlers()
    }

	return [add, remove, listenersRef.current!]
}
