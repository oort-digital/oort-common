export const onReponseError = (error: any, clearToken: () => void, debug: (msg: string) => void) => {
    const originalRequest = error.config;
    if (error.response && (error.response.status === 403 || error.response.status === 400)) {
        debug(`Response. Status=${error.response.status} Url=${originalRequest.url}`)
        clearToken()
    }
    return error
}