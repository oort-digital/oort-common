export const getCookieDomain = (host: string): string | undefined => {
    const arr = host.split('.')

    if(arr.length === 3) {
        return `${arr[1]}.${arr[2]}`
    }
    return undefined
  }