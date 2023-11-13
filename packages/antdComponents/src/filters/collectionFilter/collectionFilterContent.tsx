import { useEffect, useRef } from "react";
import { SearchInput } from "../searchInput";
import {
  collectionItemRenderer,
  ISelectedParameter,
} from "./collectionFilterItemRenderer";
import styles from "./collectionFilterContent.module.scss";
import { observer } from "mobx-react-lite";
import { Tabs } from "antd";
import { ICollectionFilterItem, ICollectionFilterStore } from "./stores";
import { AsyncList } from "../../asyncList";
import { EMPTY_ABORT_SIGNAL } from "@oort-digital/utils";

interface IProps {
  itemTitleMaxLen: number;
  bottomSpaceHeight: number | undefined;
  calcOptimalListHeight: boolean;
  filterStore: ICollectionFilterStore;
  searchable: boolean;
  searchPlaceholder?: string;
  circleIcons: boolean;
}

const getFavoriteParams = (
  filterStore: ICollectionFilterStore
): ISelectedParameter | undefined => {
  if (filterStore.favorites && filterStore.setFavorites) {
    const favoritesSet = new Set(filterStore.favorites.map((x) => x.key));
    const favoriteParam: ISelectedParameter = {
      onChange: (item: ICollectionFilterItem, isChecked: boolean) =>
        filterStore.setFavorites!(item, isChecked),
      selected: favoritesSet,
    };
    return favoriteParam;
  }
  return undefined;
};

const Impl = ({
  filterStore,
  searchable,
  searchPlaceholder,
  bottomSpaceHeight,
  circleIcons,
  itemTitleMaxLen,
  calcOptimalListHeight,
}: IProps) => {
  const onTermChangeAbortController = useRef<AbortController | undefined>();
  const onTermChange = (term: string) => {
    if (onTermChangeAbortController.current) {
      onTermChangeAbortController.current.abort();
    }

    const abortController = new AbortController();
    onTermChangeAbortController.current = abortController;

    filterStore.clearNotApplied();
    filterStore.setTerm(term);
    filterStore.reset && filterStore.reset();
    filterStore.loadNextPage &&
      filterStore.loadNextPage(abortController.signal);
  };

  useEffect(() => {
    const abortController = new AbortController();
    filterStore.loadFavoritesFromCache && filterStore.loadFavoritesFromCache();
    filterStore.loadRecentFromCache && filterStore.loadRecentFromCache();
    filterStore.reset && filterStore.reset();
    filterStore.loadNextPage &&
      filterStore.loadNextPage(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [filterStore]);

  const select = (item: ICollectionFilterItem, isChecked: boolean) => {
    filterStore.select(item.key, isChecked);
  };

  const selectedParam: ISelectedParameter = {
    onChange: select,
    selected: new Set([...filterStore.selected]),
  };

  const favoriteParam = getFavoriteParams(filterStore);

  const calcOptimalListHeightFunc = () => {
    const minH = 150;
    const marginPaddingAndOtherContent = 500;

    let h: string = "";
    if (bottomSpaceHeight && bottomSpaceHeight > marginPaddingAndOtherContent) {
      const result = bottomSpaceHeight - marginPaddingAndOtherContent;
      if (result > minH) {
        h = `${result}px`;
      }
    } else {
      h = `${minH}px`;
    }

    return {
      maxHeight: h,
      height: h,
    };
  };

  const renderList = (
    items: ICollectionFilterItem[],
    showLoadMore: boolean
  ) => {
    const heightStyle = calcOptimalListHeight
      ? calcOptimalListHeightFunc()
      : undefined;

    const itemCss = circleIcons
      ? `${styles.list_item} ${styles.circle_icons}`
      : styles.list_item;

    if (showLoadMore) {
      const loadNextPageFunc = filterStore.loadNextPage
        ? () => filterStore.loadNextPage!(EMPTY_ABORT_SIGNAL)
        : undefined;
      return (
        <AsyncList
          style={heightStyle}
          className={styles.list}
          hasLoadMore={filterStore.hasLoadMore}
          loadMoreButtonSize="middle"
          onLoadMore={loadNextPageFunc}
          loading={filterStore.isLoading}
          itemRenderer={collectionItemRenderer(
            filterStore.selectMode,
            itemCss,
            itemTitleMaxLen,
            selectedParam,
            favoriteParam
          )}
          items={items}
        />
      );
    }

    return (
      <AsyncList
        style={heightStyle}
        className={styles.list}
        hasLoadMore={false}
        loading={filterStore.isLoading}
        itemRenderer={collectionItemRenderer(
          filterStore.selectMode,
          itemCss,
          itemTitleMaxLen,
          selectedParam,
          favoriteParam
        )}
        items={items}
      />
    );
  };

  const tabs = [
    { label: "All", key: "all", children: renderList(filterStore.all, true) },
  ];

  if (filterStore.recent) {
    tabs.push({
      label: "Recent",
      key: "recent",
      children: renderList(filterStore.recent, false),
    });
  }
  if (filterStore.favorites) {
    const favTabTitle = filterStore.favorites.length
      ? `Favorites(${filterStore.favorites.length})`
      : "Favorites";
    tabs.push({
      label: favTabTitle,
      key: "favorites",
      children: renderList(filterStore.favorites, false),
    });
  }

  return (
    <div className={styles.content}>
      {searchable && (
        <SearchInput
          value={filterStore.term}
          onChange={(e) => onTermChange(e)}
          placeholder={searchPlaceholder}
        />
      )}

      {tabs.length === 1 ? (
        tabs[0].children
      ) : (
        <Tabs defaultActiveKey="all" items={tabs} />
      )}
    </div>
  );
};

export const CollectionFilterContent = observer(Impl);
