import axiosInstance from "@/utils/api/axiosInstance";
import {LoginParams} from "@/types/auth/LoginParams";
import axios from "axios";

export default async function LoginUser(userData: LoginParams) {
  const response = await axiosInstance
    .post("/users/login", userData)
    .then((res) => {
      const userData = res.data;
      console.log(userData);
      return userData;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        throw error.response?.data.detail;
      }
      throw error;
    });
  return response;
}
