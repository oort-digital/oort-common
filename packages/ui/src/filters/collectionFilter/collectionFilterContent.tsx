import {useEffect, useRef} from "react"
import {AsyncList, DeviceType, EMPTY_ABORT_SIGNAL, useDeviceType} from "../.."
import {SearchInput} from "../searchInput"
import {collectionItemRenderer, ISelectedParameter} from "./collectionFilterItemRenderer"
import styles from "./collectionFilterContent.module.less"
import {CollectionFilterStore} from "./collectionFilterStore"
import {observer} from "mobx-react"
import {Tabs} from "antd"

import { ICollectionFilterItem } from "./itemSource"


interface IProps {
    chainId: number
    collectionFilterStore: CollectionFilterStore
    applied: ICollectionFilterItem[],
    searchable: boolean,
    selectSingle: boolean,
    searchPlaceholder: string
}

const Impl = ({collectionFilterStore, chainId, applied, searchable, selectSingle, searchPlaceholder}: IProps) => {

    const {selected, isLoading, items, favorites, recent, hasLoadMore} = collectionFilterStore

    const onTermChangeAbortController = useRef<AbortController | undefined>()
    const onTermChange = (term: string) => {

        if (onTermChangeAbortController.current) {
            onTermChangeAbortController.current.abort()
        }

        const abortController = new AbortController()
        onTermChangeAbortController.current = abortController

        collectionFilterStore.clearNotApplied()
        collectionFilterStore.setTerm(term)
        collectionFilterStore.loadNextPage(false, abortController.signal);
    }

    useEffect(() => {
        const abortController = new AbortController()
        collectionFilterStore.loadFavoritesFromCache()
        collectionFilterStore.loadRecentFromCache()
        collectionFilterStore.loadNextPage(true, abortController.signal)

        return () => {
            abortController.abort()
        }

    }, [chainId]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        collectionFilterStore.setApplied(applied.map(x => x.key))
    }, [applied, collectionFilterStore])

    const isMobile = useDeviceType() === DeviceType.Phone

    const select = (item: ICollectionFilterItem, isChecked: boolean) => {
        if (selectSingle) {
            collectionFilterStore.selectSingle(item.key, isChecked)
        }
        else {
            collectionFilterStore.select(item.key, isChecked)
        }
    }

    const selectedParam: ISelectedParameter = {
        onChange: select,
        selected: new Set([...selected])
    }

    const favoritesSet = new Set(favorites.map(x => x.key))
    const favoriteParam: ISelectedParameter = {
        onChange: (item: ICollectionFilterItem, isChecked: boolean) => collectionFilterStore.setFavorites(item, isChecked),
        selected: favoritesSet
    }

    const renderList = (items: ICollectionFilterItem[], showLoadMore: boolean) => {

        if (showLoadMore) {
            return <AsyncList
                className={styles.list}
                hasLoadMore={hasLoadMore}
                onLoadMore={() => collectionFilterStore.loadNextPage(false, EMPTY_ABORT_SIGNAL)}
                loading={isLoading}
                itemRenderer={collectionItemRenderer(styles.list_item, isMobile, selectedParam, favoriteParam)}
                items={items}
            />
        }

        return <AsyncList
            className={styles.list}
            hasLoadMore={false}
            loading={isLoading}
            itemRenderer={collectionItemRenderer(styles.list_item, isMobile, selectedParam, favoriteParam)}
            items={items}
        />
    }

    const favTabTitle = favorites.length ? `Favorites(${favorites.length})` : 'Favorites'

    const tabs = [
        { label: 'All', key: 'all', children: renderList(items, true) },
        { label: 'Recent', key: 'recent', children: renderList(recent, false) },
        { label: favTabTitle, key: 'favorites', children: renderList(favorites, false) }
      ];

    return <div className={styles.content}>
        {
            searchable && <SearchInput value={collectionFilterStore.term}
                                       onChange={e => onTermChange(e)}
                                       placeholder={searchPlaceholder} />
        }

        <Tabs defaultActiveKey="all" items={tabs} />
    </div>
}


export const CollectionFilterContent = observer(Impl)