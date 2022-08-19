import Axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestResponse<T = any> = {
  code: number;
  message: string;
  data: T;
};

const instance = Axios.create({
  baseURL: "http://localhost:7070",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InhpeGkiLCJwYXNzd29yZCI6IiQyYiQxMCRxVzVGcGxLcll6Y01rdmh0WHNQVXB1S1JsTlBwSE9Ma0V1SEJGbjEwd2tid3guZ0JFNE45TyIsImNyZWF0ZWRBdCI6IjIwMjItMDUtMTJUMDk6MDQ6MDUuODgyWiIsInVwZGF0ZWRBdCI6IjIwMjItMDUtMTJUMDk6MDQ6MDUuODg2WiIsImlhdCI6MTY2MDg3NzE1OSwiZXhwIjoxNjYwOTYzNTU5fQ.HajKcj2xETcxwzC8FTii7-z6JrT-vWNlEaqw3FkNkh8",
  },
});

instance.interceptors.response.use((response) => {
  const { data } = response;

  // 业务错误
  if (data.code !== 0) {
    throw Error(data.message);
  }

  return data.data;
});

const request = <T = any>(config: AxiosRequestConfig) => {
  return instance.request<T, T>(config);
};

export default request;
