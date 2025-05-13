import axiosInstance from "@/utils/api/axiosInstance";
import {RegisterParams} from "@/types/auth/RegisterParams";
import axios from "axios";


const RegisterUser = async (body: RegisterParams) => {
  try {
    const response = await axiosInstance.post(`/users/register`, body);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data.detail;
    }
    throw error;
  }
};

export default RegisterUser;

