"use client";
import fetchProducts from "@/services/fetchproducts";
import { productType } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = () => {
  const query = useQuery<productType>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return query;
};

export default useGetProducts;
