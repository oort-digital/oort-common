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
