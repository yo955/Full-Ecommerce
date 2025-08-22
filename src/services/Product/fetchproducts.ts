import axiosInstance from "@/utils/api/axiosInstance";
import { productType } from "@/types/cart/Product";

interface FetchProductsParams {
  pageNumber?: number;
  pageSize?: number;
  categoryId?: string;
  categoryName?: string;
  searchQuery?: string;
  excludeOutOfStock?: boolean;
  orderBy?: string;
}

const fetchProducts = async (params: FetchProductsParams): Promise<productType> => {
  try {
    const response = await axiosInstance.get("/products", {
      params, 
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;
