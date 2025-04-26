import axiosInstance from "@/utils/api/axiosInstance";
import {Product} from "@/types/Product";

const fetchProduct = async (productId: string): Promise<Product> => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export default fetchProduct;
