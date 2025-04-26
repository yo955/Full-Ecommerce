import {useMutation} from "@tanstack/react-query";
import AsyncRemoveFromCart from "@/services/Cart/AsyncRemoveFromCart";
import {toast} from "react-toastify";

export const useAsyncRemoveFromCart = () => {
  return useMutation({
    mutationFn: (ProductId: string) => AsyncRemoveFromCart(ProductId),
    onSuccess: () => toast.success('Product removed successfully.'),
    onError: () => toast.error('can`t be removed'),
  })

}