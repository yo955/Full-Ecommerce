import axiosInstance from "@/utils/api/axiosInstance";
import { RegisterParams } from "@/types/RegisterParams";

const RegisterUser = async (body: RegisterParams) => {
  try {
    const response = await axiosInstance.post(`/users/register`, body);
    return response.data;
  } catch (error) {
    console.error("Error Authentication Field:", error);
    throw error;
  }
};

export default RegisterUser;
