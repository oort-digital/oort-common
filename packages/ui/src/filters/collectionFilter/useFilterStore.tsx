
import { useEffect, useRef } from 'react';
import { CollectionFilterStore, ICollectionFilterStoreParams } from './collectionFilterStore';
import { ItemKeyType } from './typesAndInterfaces';

export function useFilterStore(params: ICollectionFilterStoreParams, applied: ItemKeyType[]): CollectionFilterStore {
	
	const filterStoreRef = useRef<CollectionFilterStore>()

    if (!filterStoreRef.current) {
        filterStoreRef.current = new CollectionFilterStore(params)
    }

    useEffect(() => {
        filterStoreRef.current!.setApplied(applied)
    }, [applied, filterStoreRef.current])

	return filterStoreRef.current!
}
