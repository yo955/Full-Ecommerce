"use client";
import fetchProducts from "@/services/Product/fetchproducts";
import {productType} from "@/types/cart/Product";
import {useQuery} from "@tanstack/react-query";

const useGetProducts = ({pageSize = 10}: { pageSize?: number } = {}) => {
  return useQuery<productType>({
    queryKey: ["products"],
    queryFn: () => fetchProducts({pageSize: pageSize}),
  });


};

export default useGetProducts;
