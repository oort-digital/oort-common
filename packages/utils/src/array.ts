export function distinct<T>(arr: Array<T>, keyFunc: (item: T) => string | number) {
  const set = new Set<string | number>()
  const result: any[] = []

  arr.forEach(x => {
    const key = keyFunc(x)
    if(!set.has(key)) {
      result.push(x)
      set.add(key)
    }
  })

  return result
}

type KeyType = number | string
type Dictionary<T> = { [id: KeyType]: T }
export function groupBy<T>(arr: T[], keyFunc: (item: T) => KeyType): Dictionary<T[]> {
    const map: Dictionary<T[]> = {}
    for(let i = 0; i < arr.length; i++) {
        const key = keyFunc(arr[i]);
        if(map[key]) {
            map[key].push(arr[i])
        }
        else {
            map[key] = [arr[i]]
        }
    }
    return map
}

export function toDictionary<T>(arr: T[], keyFunc: (item: T) => KeyType): Dictionary<T> {
    const map: Dictionary<T> = {}
    for(let i = 0; i < arr.length; i++) {
        const key = keyFunc(arr[i]);
        map[key] = arr[i]
    }
    return map
}

type SortPropertyType = number | string
type SortDirection = 'ask' | 'desc'
type CompareFnResult = -1 | 0 | 1

function compareFn<T>(a: T, b: T, getSortProperty: (item: T) => SortPropertyType): CompareFnResult {
  const propertyA = getSortProperty(a)
  const propertyB = getSortProperty(b)

  if(propertyA > propertyB) { return 1 }
      if(propertyA < propertyB) { return -1 }
      return 0
}

export function sortBy<T>(rewards: T[], getSortProperty: (item: T) => SortPropertyType, direction: SortDirection = 'ask'): T[] {
  if(direction === 'ask') {
   return rewards.sort((a, b) => compareFn(a, b, getSortProperty))
  }
  return rewards.sort((a, b) => compareFn(b, a, getSortProperty))
}

