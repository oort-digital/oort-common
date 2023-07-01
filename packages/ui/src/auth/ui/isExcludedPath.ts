export interface IPath {
    path: string
    compareMethod: 'equal' | 'include'
}

export type PathType = string | IPath


export function isExcludedPath(currentPath: string, excludedPathes: PathType[]): boolean {


    return excludedPathes.some(p => {
        if(typeof(p) === 'string') {
            return currentPath.includes(p)
        }

        if(p.compareMethod === "include"){
            return currentPath.includes(p.path)
        }

        return currentPath === p.path
    })

}