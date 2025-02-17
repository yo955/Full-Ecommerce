import axiosClient from "@/api/axiosInstance";
import { Categories } from "@/types/Category";

const fetchCategories = async (): Promise<Categories> => {
  try {
    const response = await axiosClient.get("/categories");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchCategories;
