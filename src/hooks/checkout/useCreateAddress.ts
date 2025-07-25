import { useMutation } from "@tanstack/react-query";
import { AddressType } from "@/types/AddressType";
import { toast } from "react-toastify";
import { createAddress } from "@/services/Checkout/createAddress";
import { useCreateOrder } from "./useCreateOrder";
import { useCartStore } from "@/stores/cart/cartStore";

export const useCreateAddress = () => {
  const { mutate: orderMutate } = useCreateOrder();
  const { clearCart } = useCartStore((state) => state);

  return useMutation({
    mutationFn: (AddressData: AddressType) => createAddress(AddressData),
    onSuccess: (AddressData: AddressType) => {
      toast.success("Address added successfully.");

      if (AddressData.id) {
        orderMutate(AddressData.id);
        clearCart();
      } else {
        toast.error("Address ID is missing, cannot create order.");
      }
    },
    onError: () => toast.error("Address added failed."),
    mutationKey: ["addresses"],
  });
};
