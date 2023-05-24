import { ReactElement } from "react"

export const toArr = (children: ReactElement | ReactElement[]): ReactElement[] => {
    if(children.constructor.name === 'Array') {
        return children as ReactElement[]
    }

    return [children as ReactElement]
}