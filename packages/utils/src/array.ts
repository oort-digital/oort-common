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

