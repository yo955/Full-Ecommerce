import axiosInstance from "@/utils/api/axiosInstance";
import { Categories } from "@/types/Category";

const fetchCategories = async (): Promise<Categories> => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchCategories;
