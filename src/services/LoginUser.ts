import axiosClient from "@/utils/api/axiosInstance";
import { LoginParams } from "@/types/LoginParams";

export default async function LoginUser(userData: LoginParams) {
  const response = await axiosClient
    .post("/users/login", userData )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });

  return response;
}


