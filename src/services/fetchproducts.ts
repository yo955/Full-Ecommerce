import axiosClient from "@/api/axiosInstance";
import { productType } from "@/types/Product";

const fetchProducts = async (): Promise<productType> => {
  try {
    const response = await axiosClient.get("/products");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;
