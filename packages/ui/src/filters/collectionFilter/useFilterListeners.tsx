import { useState } from 'react';
import { FilterListenerActionType, IFilterListeners } from './typesAndInterfaces';

export function useFilterListeners(): [ FilterListenerActionType, FilterListenerActionType, IFilterListeners | undefined ] {
	
	const [listeners, set] = useState<IFilterListeners | undefined>()

    const add = (listeners: IFilterListeners) => {
        set(listeners)
    }

    const remove = (_listeners: IFilterListeners) => {
        set(undefined)
    }

	return [add, remove, listeners]
}
