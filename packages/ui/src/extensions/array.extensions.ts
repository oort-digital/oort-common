
declare interface Array<T> {
  distinct(keyFunc: (item: T) => string): Array<T>;
}

// eslint-disable-next-line
Array.prototype.distinct = function(keyFunc: (item: any) => string) {
  const set = new Set<string>()
  const result: any[] = []

  this.forEach(x => {
    const key = keyFunc(x)
    if(!set.has(key)) {
      result.push(x)
      set.add(key)
    }
  })

  return result
}
