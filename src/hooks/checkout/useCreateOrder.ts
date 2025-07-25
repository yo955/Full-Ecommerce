import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import { createOrder } from "@/services/Checkout/createOrder";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (AddressID: string) => createOrder(AddressID),
    onSuccess: () => toast.success("Order added successfully."),
    onError: () => toast.error("Order added failed."),
    mutationKey: ['Orders'],
  })
}