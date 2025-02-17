"use client";
import fetchProducts from "@/services/fetchproducts";
import { productType } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = ({ pageSize = 10 }: { pageSize?: number } = {}) => {
  const query = useQuery<productType>({
    queryKey: ["products"],
    queryFn: () => fetchProducts({ pageSize: pageSize }),
  });

  return query;
};

export default useGetProducts;
