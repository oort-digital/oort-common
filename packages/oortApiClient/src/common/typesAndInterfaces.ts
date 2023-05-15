export interface IOortApiResponse<TData> {
    resultCode: number
    resultMessage: string
    resultValue: TData
}