export interface IOortApiResponse<TData> {
  resultCode: number;
  resultMessage: string;
  resultValue: TData;
}

export interface IPagingParams {
  pageNum: number;
  pageSize: number;
}

export interface IPagingResponse<T> {
  dataList: T[];
  pageNum: number;
  pageSize: number;
  totalNum: number;
  totalPage: number;
}
