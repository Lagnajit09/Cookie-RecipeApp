import { AuthStateType } from "@/constants/types";
import { atom } from "recoil";

export const authState = atom<AuthStateType>({
  key: "authState",
  default: {
    isAuthenticated: false,
    username: null,
    token: null,
  },
});
