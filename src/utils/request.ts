import Axios, { AxiosResponse } from "axios";
import type { AxiosRequestConfig } from "axios";
import type { AxiosResponseData } from "../../types/axios.d";
import router from "@/router";
import { useUserStore } from "@/stores/user";

const instance = Axios.create({
  baseURL: "http://localhost:7070",
});

instance.interceptors.request.use((config) => {
  const userStore = useUserStore();

  // if(config.headers.Authorization)
  const token = userStore.token;

  if (token) {
    config.headers = Object.assign({}, config.headers, {
      Authorization: `Bearer ${token}`,
    });
  }

  return config;
});

instance.interceptors.response.use<AxiosResponse<AxiosResponseData>>(
  (response) => {
    const { data } = response;

    // 业务错误
    if (data.code !== 0) {
      return Promise.reject(data);
    }

    return data;
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

const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const data = await instance.request<T>(config);
  return data.data;
};

export default request;
