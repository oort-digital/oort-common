import {useEffect, useRef} from "react"
import {AsyncList, DeviceType, EMPTY_ABORT_SIGNAL, useDeviceType} from "../.."
import {SearchInput} from "../searchInput"
import {collectionItemRenderer, ISelectedParameter} from "./collectionFilterItemRenderer"
import styles from "./collectionFilterContent.module.less"
import {CollectionFilterStore} from "./collectionFilterStore"
import {observer} from "mobx-react"
import {Tabs} from "antd"
import { ICollectionFilterItem } from "./typesAndInterfaces"

interface IProps {
    filterStore: CollectionFilterStore
    searchable: boolean,
    selectSingle: boolean,
    searchPlaceholder: string
}

const Impl = ({filterStore, searchable, selectSingle, searchPlaceholder}: IProps) => {

    const onTermChangeAbortController = useRef<AbortController | undefined>()
    const onTermChange = (term: string) => {

        if (onTermChangeAbortController.current) {
            onTermChangeAbortController.current.abort()
        }

        const abortController = new AbortController()
        onTermChangeAbortController.current = abortController

        filterStore.clearNotApplied()
        filterStore.setTerm(term)
        filterStore.loadNextPage(false, abortController.signal);
    }

    useEffect(() => {
        const abortController = new AbortController()
        filterStore.loadFavoritesFromCache()
        filterStore.loadRecentFromCache()
        filterStore.loadNextPage(true, abortController.signal)

        return () => {
            abortController.abort()
        }

    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const isMobile = useDeviceType() === DeviceType.Phone

    const select = (item: ICollectionFilterItem, isChecked: boolean) => {
        if (selectSingle) {
            filterStore.selectSingle(item.key, isChecked)
        }
        else {
            filterStore.select(item.key, isChecked)
        }
    }

    const selectedParam: ISelectedParameter = {
        onChange: select,
        selected: new Set([...filterStore.selected])
    }

    const favoritesSet = new Set(filterStore.favorites.map(x => x.key))
    const favoriteParam: ISelectedParameter = {
        onChange: (item: ICollectionFilterItem, isChecked: boolean) => filterStore.setFavorites(item, isChecked),
        selected: favoritesSet
    }

    const renderList = (items: ICollectionFilterItem[], showLoadMore: boolean) => {

        if (showLoadMore) {
            return <AsyncList
                className={styles.list}
                hasLoadMore={filterStore.hasLoadMore}
                onLoadMore={() => filterStore.loadNextPage(false, EMPTY_ABORT_SIGNAL)}
                loading={filterStore.isLoading}
                itemRenderer={collectionItemRenderer(styles.list_item, isMobile, selectedParam, favoriteParam)}
                items={items}
            />
        }

        return <AsyncList
            className={styles.list}
            hasLoadMore={false}
            loading={filterStore.isLoading}
            itemRenderer={collectionItemRenderer(styles.list_item, isMobile, selectedParam, favoriteParam)}
            items={items}
        />
    }

    const favTabTitle = filterStore.favorites.length ? `Favorites(${filterStore.favorites.length})` : 'Favorites'

    const tabs = [
        { label: 'All', key: 'all', children: renderList(filterStore.items, true) },
        { label: 'Recent', key: 'recent', children: renderList(filterStore.recent, false) },
        { label: favTabTitle, key: 'favorites', children: renderList(filterStore.favorites, false) }
      ];

    return <div className={styles.content}>
        {
            searchable && <SearchInput value={filterStore.term}
                                       onChange={e => onTermChange(e)}
                                       placeholder={searchPlaceholder} />
        }

        <Tabs defaultActiveKey="all" items={tabs} />
    </div>
}


export const CollectionFilterContent = observer(Impl)