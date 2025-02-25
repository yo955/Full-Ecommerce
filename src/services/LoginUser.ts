import axiosInstance from "@/utils/api/axiosInstance";
import { LoginParams } from "@/types/LoginParams";

export default async function LoginUser(userData: LoginParams) {
  const response = await axiosInstance
    .post("/users/login", userData)
    .then((res) => {
      const userData = res.data;
      console.log(userData);
      return userData;
    })
    .catch((err) => {
      throw err;
    });
  return response;
}
