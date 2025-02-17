import axiosClient from "@/api/axiosInstance";
import { productType } from "@/types/Product";

const fetchProducts = async ({
  pageSize = 10,
}: { pageSize?: number } = {}): Promise<productType> => {
  try {
    const response = await axiosClient.get(`/products?pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;
