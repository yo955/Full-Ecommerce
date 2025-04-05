"use client"
import {useMutation} from "@tanstack/react-query";
import AsyncAddToCart from "@/services/AsyncAddToCart";
import {toast} from "react-toastify";

export interface addToCartProps {
  ProductId: string;
  quantity: number
}

const useAddToCart = () => {
  return useMutation({
    mutationFn: (ProductData: addToCartProps) =>
      AsyncAddToCart(ProductData),
    onSuccess: () => toast.success("Added to cart successfully!"),
    onError: () => toast.error("Failed to add to cart"),
  });
};

export default useAddToCart;
