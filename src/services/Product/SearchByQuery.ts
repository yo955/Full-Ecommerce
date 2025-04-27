import axiosInstance from "@/utils/api/axiosInstance";
import {Product} from "@/types/Product";

const SearchByQuery = async (query: string): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get(`/products?${query}`)
    return response.data;
  } catch (error) {
    throw error;
  }
}
export default SearchByQuery;