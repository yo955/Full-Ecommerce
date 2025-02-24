import axiosClient from "@/utils/api/axiosInstance";
import { productType } from "@/types/Product";
import { RegisterParams } from "@/types/RegisterParams";

const RegisterUser = async (body: RegisterParams): Promise<productType> => {
  try {
    const response = await axiosClient.post(`/users/register`, body);
    return response.data;
  } catch (error) {
    console.error("Error Authentication Field:", error);
    throw error;
  }
};

export default RegisterUser;
