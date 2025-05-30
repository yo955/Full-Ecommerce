"use client";
import fetchProduct from "@/services/Product/fetchSingleProduct";
import {Product} from "@/types/cart/Product";
import {useQuery} from "@tanstack/react-query";

const useGetProduct = (productId: string) => {
  return useQuery<Product>({
    queryKey: ["product"],
    queryFn: () => fetchProduct(productId),
  });


};

export default useGetProduct;
