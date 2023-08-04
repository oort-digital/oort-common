import { addTrailingSlash } from "@oort-digital/utils"

export interface IPath {
    path: string
    compareMethod: 'equal' | 'include'
    addTrailingSlash: boolean
}

export type PathType = string | IPath


export function isExcludedPath(currentPath: string, excludedPathes: PathType[]): boolean {

    return excludedPathes.some(p => {
        if(typeof(p) === 'string') {
            return currentPath.includes(p)
        }

        let pPath = p.path;

        if(p.addTrailingSlash) {
            pPath = addTrailingSlash(pPath)
            currentPath = addTrailingSlash(currentPath)
        }

        if(p.compareMethod === "include"){
            return currentPath.includes(pPath)
        }

        return currentPath === pPath
    })

}