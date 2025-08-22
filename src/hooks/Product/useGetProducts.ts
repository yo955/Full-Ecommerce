"use client";
import fetchProducts from "@/services/Product/fetchproducts";
import { productType } from "@/types/cart/Product";
import { useQuery } from "@tanstack/react-query";

interface UseGetProductsProps {
  pageNumber?: number;
  pageSize?: number;
  categoryId?: string;
  categoryName?: string;
  searchQuery?: string;
  excludeOutOfStock?: boolean;
  orderBy?: string;
}

const useGetProducts = (params: UseGetProductsProps = {}) => {
  return useQuery<productType>({
    queryKey: ["products", params], 
    queryFn: () => fetchProducts(params),
    // keepPreviousData: true, 
  });
};

export default useGetProducts;
