import { CollectionFilterStore, ICollectionFilterStoreParams } from "./collectionFilterStore";
import { ICollectionFilterItem, ItemKeyType, SelectMode } from "./typesAndInterfaces";

class TestCollectionFilterStore extends CollectionFilterStore {
   
   loadNextPage(_signal: AbortSignal): Promise<void> {
      return Promise.resolve()
   }
   
   protected async getAppliedItems(_appliedKeys: ItemKeyType[]): Promise<ICollectionFilterItem[]> {
      return []
   }

   constructor(params: ICollectionFilterStoreParams) {
      super(params)
   }

}

class ItemStub implements ICollectionFilterItem {
    key: string
    title: string
    icon: string = 'fake_icon_url'
    count?: number | undefined

    constructor(n: number) {
        this.key = `${n}`
        this.title = `${n}`
    }

}

const one = new ItemStub(1)
const two = new ItemStub(2)
const three = new ItemStub(3)

const create = (favoriteMaxSize: number, recentMaxSize: number, selectMode: SelectMode) => {

    return new TestCollectionFilterStore({
        selectMode: selectMode,
        cacheKeyPrefixFunc: () => '',
        favoriteMaxSize: favoriteMaxSize,
        recentMaxSize: recentMaxSize
    })
}

test('must add favorites in right order', async () => {
   const store = create(2, 1, SelectMode.Multy)

   store.setFavorites(one, true)
   store.setFavorites(two, true)

   expect(store.favorites.length).toEqual(2)
   expect(store.favorites[0].key).toEqual(two.key)
   expect(store.favorites[1].key).toEqual(one.key)
});

test('must remove old favorite items if max size excided', async () => {
   const store = create(2, 1, SelectMode.Multy)

   store.setFavorites(one, true)
   store.setFavorites(two, true)
   store.setFavorites(three, true)

   expect(store.favorites.length).toEqual(2)
   expect(store.favorites[0].key).toEqual(three.key)
   expect(store.favorites[1].key).toEqual(two.key)
});

 test('must remove old recent items if max size excided', async () => {

    const store = create(1, 2, SelectMode.Multy)
    store.all.push(one)
    store.all.push(two)
    store.all.push(three)

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
   const store = create(1, 1, SelectMode.Multy)

   store.favorites.push(one)
   store.select(one.key, true)
   store.copyNotAppliedToRecent()

   expect(store.recent.length).toEqual(1)
   expect(store.recent[0].key).toEqual(one.key)
});

test('must copyNotAppliedToRecent from items', async () => {

   const store = create(1, 1, SelectMode.Multy)
   store.all.push(one)

   store.select(one.key, true)
   store.copyNotAppliedToRecent()

   expect(store.recent.length).toEqual(1)
   expect(store.recent[0].key).toEqual(one.key)
});

test('must copy not applied to recent without duplicated', async () => {

   const store = create(1, 3, SelectMode.Multy)
   store.all.push(one)

   store.select(one.key, true)

   store.copyNotAppliedToRecent()
   store.copyNotAppliedToRecent()

   expect(store.recent.length).toEqual(1)
   expect(store.recent[0].key).toEqual(one.key)
});

test('clearNotApplied must clean selected if no applied', async () => {
   const store = create(1, 1, SelectMode.Multy)

   store.select('1', true)
   store.clearNotApplied()

   expect(store.selected.length).toEqual(0)
});

test('clearNotApplied must not clean applied', async () => {

   const applied = 'applied'
   const store = create(1, 1, SelectMode.Multy)

   await store.setApplied([applied])
   store.select('1', true)
   store.clearNotApplied()

   expect(store.selected.length).toEqual(1)
   expect(store.selected[0]).toEqual(applied)
});

test('selected must contain one item if selectSingle', async () => {
   const store = create(1, 1, SelectMode.Single)

   store.select('1', true)
   store.select('2', true)

   expect(store.selected.length).toEqual(1)
   expect(store.selected[0]).toEqual('2')
});

test('selected must be empty', async () => {
   const store = create(1, 1, SelectMode.Multy)
   
   store.select('1', true)
   store.select('1', false)

   expect(store.selected.length).toEqual(0)
});

