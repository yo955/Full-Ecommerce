"use client";
import fetchProducts from "@/services/fetchproducts";
import { useQuery } from "@tanstack/react-query";

const useGetProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return query;
};

export default useGetProducts;
