import { defineStore } from "pinia";
import { getUser, login, LoginDto } from "@/api/user";
import { getToken, setToken } from "@/utils/auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    name: "",
    avatar: "",
  }),
  getters: {},
  actions: {
    async login(payload: LoginDto) {
      const { token } = await login(payload);
      this.token = token;
      setToken(token);
    },

    async getInfo() {
      const userInfo = await getUser();
      console.log("userInfo: ", userInfo);
    },
  },
});
