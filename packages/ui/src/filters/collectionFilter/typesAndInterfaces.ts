

export interface IFilterListeners {
    submit: () => void
    close: () => void
    clear: () => void
}

export type FilterListenerActionType = (listeners: IFilterListeners) => void