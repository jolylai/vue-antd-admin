import { defineStore } from "pinia";
import { getUser, login, LoginDto } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";

export type UserState = {
  // 服务端返回的用户信息
  userInfo: any;
  token?: string;
};

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    token: getToken(),
    userInfo: {},
  }),
  getters: {},
  actions: {
    async loginAction(payload: LoginDto) {
      // const { token } = await login(payload);
      // this.token = token;
      // setToken(token);
    },

    async getUserInfo() {
      const userInfo = await getUser();
      console.log("userInfo: ", userInfo);
    },

    async afterLoginAction() {},

    // 获取用户信息
    async getUserInfoAction() {},
  },
});
