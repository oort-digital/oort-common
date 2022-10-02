import { CollectionFilterStore } from "./collectionFilterStore";
import { IItemSource } from "./itemSource";
import { StoreState } from "./storeState";
import { ICollectionFilterItem } from "./typesAndInterfaces";


class ItemSourceStub implements IItemSource {
    setItems(items: ICollectionFilterItem[]): void {
       throw new Error("Method not implemented.");
    }
    items: ICollectionFilterItem[] = []
    term: string = ''
    state: StoreState = StoreState.Done
    hasLoadMore: boolean = false

    loadNextPage(reset: boolean, signal: AbortSignal): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    setTerm(term: string): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
}

class ItemStub implements ICollectionFilterItem {
    key: string
    title: string
    iconUrl: string = 'fake_icon_url'
    count?: number | undefined

    //toCollection = (): ICollection => ({ tokenAddress: this.tokenAddress, tokenName: this.tokenName, count: 0 })

    constructor(n: number) {
        this.key = `${n}`
        this.title = `${n}`
    }

}

const one = new ItemStub(1)
const two = new ItemStub(2)
const three = new ItemStub(3)

const create = (favoriteMaxSize: number, recentMaxSize: number, itemSource?: ItemSourceStub) => {

    return new CollectionFilterStore({
        cacheKeyPrefixFunc: () => '',
        itemSourceFunc: () => itemSource || new ItemSourceStub(),
        favoriteMaxSize: favoriteMaxSize,
        recentMaxSize: recentMaxSize
    })
}

test('must add favorites in right order', async () => {
    const store = create(2, 1)

    store.setFavorites(one, true)
    store.setFavorites(two, true)

    expect(store.favorites.length).toEqual(2)
    expect(store.favorites[0].key).toEqual(two.key)
    expect(store.favorites[1].key).toEqual(one.key)
 });

 test('must remove old favorite items if max size excided', async () => {
    const store = create(2, 1)

    store.setFavorites(one, true)
    store.setFavorites(two, true)
    store.setFavorites(three, true)

    expect(store.favorites.length).toEqual(2)
    expect(store.favorites[0].key).toEqual(three.key)
    expect(store.favorites[1].key).toEqual(two.key)
 });

 test('must remove old recent items if max size excided', async () => {
    const itemSource = new ItemSourceStub()
    itemSource.items.push(one)
    itemSource.items.push(two)
    itemSource.items.push(three)
    const store = create(1, 2, itemSource)

    store.select(one.key, true)
    store.select(two.key, true)
    store.copyNotAppliedToRecent()

    expect(store.recent.length).toEqual(2)
    expect(store.recent[0].key).toEqual(one.key)
    expect(store.recent[1].key).toEqual(two.key)

    store.clearNotApplied()
    store.select(three.key, true)
    store.copyNotAppliedToRecent()

    expect(store.recent.length).toEqual(2)
    expect(store.recent[0].key).toEqual(three.key)
    expect(store.recent[1].key).toEqual(one.key)
 });

 test('must copyNotAppliedToRecent from favorites', async () => {
    const store = create(1, 1)

    store.favorites.push(one)
    store.select(one.key, true)
    store.copyNotAppliedToRecent()

    expect(store.recent.length).toEqual(1)
    expect(store.recent[0].key).toEqual(one.key)
 });

 test('must copyNotAppliedToRecent from items', async () => {
    const itemSource = new ItemSourceStub()
    itemSource.items.push(one)
    const store = create(1, 1, itemSource)

    store.select(one.key, true)
    store.copyNotAppliedToRecent()

    expect(store.recent.length).toEqual(1)
    expect(store.recent[0].key).toEqual(one.key)
 });

 test('must copy not applied to recent without duplicated', async () => {
    const itemSource = new ItemSourceStub()
    itemSource.items.push(one)
    const store = create(1, 3, itemSource)

    store.select(one.key, true)

    store.copyNotAppliedToRecent()
    store.copyNotAppliedToRecent()

    expect(store.recent.length).toEqual(1)
    expect(store.recent[0].key).toEqual(one.key)
 });

 test('clearNotApplied must clean selected if no applied', async () => {
    const store = create(1, 1)

    store.select('1', true)
    store.clearNotApplied()

    expect(store.selected.length).toEqual(0)
 });

 test('clearNotApplied must not clean applied', async () => {

    const applied = 'applied'
    const store = create(1, 1)

    store.setApplied([applied])
    store.select('1', true)
    store.clearNotApplied()

    expect(store.selected.length).toEqual(1)
    expect(store.selected[0]).toEqual(applied)
 });

 test('selected must contain one item if selectSingle', async () => {
    const store = create(1, 1)

    store.selectSingle('1', true)
    store.selectSingle('2', true)

    expect(store.selected.length).toEqual(1)
    expect(store.selected[0]).toEqual('2')
 });

 test('selected must be empty', async () => {
    const store = create(1, 1)
    
    store.selectSingle('1', true)
    store.selectSingle('1', false)

    expect(store.selected.length).toEqual(0)
 });

 test('must select allAppliedItems from items recent and favorites', async () => {
   const itemSource = new ItemSourceStub()
   const store = create(1, 1, itemSource)

   store.setApplied([one.key, two.key, three.key])
   itemSource.items.push(one)
   store.recent.push(two)
   store.favorites.push(three)
  
   expect(store.allAppliedItems.length).toEqual(3)
   const allAppliedItemAddresses = store.allAppliedItems.map(x => x.key)
   expect(allAppliedItemAddresses).toContain(one.key)
   expect(allAppliedItemAddresses).toContain(two.key)
   expect(allAppliedItemAddresses).toContain(three.key)
});

 