export const addTralingSlash = (url: string) => {
    if(url[url.length - 1] === '/') {
      return url
    }
    return `${url}/`
  }