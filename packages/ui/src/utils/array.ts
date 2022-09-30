export function distinct<T>(arr: Array<T>, keyFunc: (item: T) => string) {
  const set = new Set<string>()
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
