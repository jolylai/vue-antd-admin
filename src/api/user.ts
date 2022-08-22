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

export const login = (data: LoginDto) => {
  return request<LoginDto>({
    url: "/login",
    method: "post",
    data,
  });
};
