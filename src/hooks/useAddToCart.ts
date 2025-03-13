import {useMutation} from "@tanstack/react-query";
import AddToCart from "@/services/addtocart";
import {toast} from "react-toastify";

export interface addToCartProps {
  ProductId: string;
  quantity: number
}

const useAddToCart = () => {
  return useMutation({
    mutationFn: (data: addToCartProps) =>
      AddToCart(data),
    onSuccess: () => toast.success("Added to cart successfully!"),
    onError: () => toast.error("Failed to add to cart"),
  });
};

export default useAddToCart;
