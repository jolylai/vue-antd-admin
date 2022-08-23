import Axios from "axios";
import type { AxiosRequestConfig } from "axios";
import router from "@/router";
import { useUserStore } from "@/stores/user";

export type RequestResponse<T = any> = {
  code: number;
  message: string;
  data: T;
};

const instance = Axios.create({
  baseURL: "http://localhost:7070",
});

instance.interceptors.request.use((config) => {
  const userStore = useUserStore();

  // if(config.headers.Authorization)
  const token = userStore.token;

  if (token) {
    config.headers = Object.assign({}, config.headers, {
      Authorization: token,
    });
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;

    // 业务错误
    if (data.code !== 0) {
      throw Error(data.message);
    }

    return data.data;
  },
  (err) => {
    const { status } = err.response;

    // 未授权
    if (status === 401) {
      const { fullPath } = router.currentRoute.value;
      router.push({
        path: "/user/login",
        query: { from: decodeURI(fullPath) },
      });
    }
  }
);

const request = <T = any, R = T, D = any>(config: AxiosRequestConfig<D>) => {
  return instance.request<T, R, D>(config);
};

export default request;
