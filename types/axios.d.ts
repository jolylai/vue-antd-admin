export interface AxiosResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}
