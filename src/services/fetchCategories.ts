import axiosClient from "@/utils/api/axiosInstance";
import { Categories } from "@/types/Category";

const fetchCategories = async (): Promise<Categories> => {
  try {
    const response = await axiosClient.get("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchCategories;
