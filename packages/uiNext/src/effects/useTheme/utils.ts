const trimSlash = (host: string): string => {
    if(host[host.length - 1] === '/') {
        return host.substring(0, host.length - 1)
    }
    return host
}

const isNetlify = (arr: string[]) => arr.length >= 2 && arr[arr.length - 2] === 'netlify' && arr[arr.length - 1] === 'app'

export const getCookieDomain = (host: string): string | undefined => {
    const trimedHost = trimSlash(host)
    console.log(`host=${trimedHost}`)
    const arr = trimedHost.split('.')

    if(isNetlify(arr)) {
        return trimedHost
    } 

    if(arr.length === 3) {
        return `${arr[1]}.${arr[2]}`
    }

    return undefined
  }