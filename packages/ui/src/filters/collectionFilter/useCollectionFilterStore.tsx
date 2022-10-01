
import { useRef } from 'react';
import { CollectionFilterStore, ICollectionFilterStoreParams } from './collectionFilterStore';

export function useCollectionFilterStore(params: ICollectionFilterStoreParams): CollectionFilterStore {
	
	const collectionFilterStoreRef = useRef<CollectionFilterStore | undefined>()

    if (!collectionFilterStoreRef.current) {
        collectionFilterStoreRef.current = new CollectionFilterStore(params)
    }

	return collectionFilterStoreRef.current
}
