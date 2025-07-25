import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createOrder } from "@/services/Checkout/createOrder";
import { useCreateCheckoutSession } from "../payment/useCreateCheckoutSession";

export const useCreateOrder = () => {
  const { mutate: paymentMutate } = useCreateCheckoutSession();
  return useMutation({
    mutationFn: (AddressID: string) => createOrder(AddressID),
    onSuccess: (orderId) => {
      const pathname = window.location.pathname.replace("checkout", "payment");
      const cancelUrl = `${window.location.origin}${pathname}/cancel`;
      const successUrl = `${window.location.origin}${pathname}/success`;

      const checkoutData = {
        orderId,
        cancelUrl: cancelUrl,
        successUrl: successUrl,
      };
      paymentMutate(checkoutData);
    },
    onError: () => toast.error("Order added failed."),
    mutationKey: ["Orders"],
  });
};
