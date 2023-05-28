import { useRef } from 'react';
import { InternalFilterListeners } from './internalFilterListeners';
import { FilterListenerActionType, IFilterListeners } from './typesAndInterfaces';

export function useFilterListeners(): [ FilterListenerActionType, FilterListenerActionType, IFilterListeners ] {
	
	const listenersRef = useRef<InternalFilterListeners>()
    if(!listenersRef.current) {
        listenersRef.current = new InternalFilterListeners()
    }

    const add = (newListeners: IFilterListeners) => {
        listenersRef.current!.addListeners(newListeners)
    }

    const remove = (listeners: IFilterListeners) => {
        listenersRef.current!.removeListeners(listeners)
    }

	return [add, remove, listenersRef.current!]
}
