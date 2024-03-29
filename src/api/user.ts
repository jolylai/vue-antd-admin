import request from "@/utils/request";

export type AccountLogin = {
  type: "account";
  username: string;
  password: string;
};

export type MobileLogin = {
  type: "mobile";
  mobile: string;
  captcha: string;
};

export type LoginDto = AccountLogin | MobileLogin;

export type LoginResponse = {
  token: string;
};

export const login = (data: LoginDto) => {
  return request<LoginDto, LoginResponse>({
    url: "/login",
    method: "post",
    data,
  });
};

export const getUser = () => {
  return request({
    url: "/api/user",
    method: "get",
  });
};
