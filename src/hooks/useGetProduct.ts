"use client";
import fetchProduct from "@/services/fetchSingleProduct";
import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";

const useGetProduct = (productId:string) => {
  const query = useQuery<Product>({
    queryKey: ["product"],
    queryFn: () => fetchProduct(productId=productId),
  });

  return query;
};

export default useGetProduct;
