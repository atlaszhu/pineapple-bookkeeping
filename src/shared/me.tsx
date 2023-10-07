import { AxiosResponse } from "axios";
import { http } from "./Http";

export let mePromise: Promise<AxiosResponse<{ resource: { id: number } }>>;

export const refreshMe = () => {
  mePromise = http.get<{ resource: { id: number } }>("/me");
  return mePromise;
};
refreshMe().catch(() => {
  console.error(new Error("还未登录"));
});