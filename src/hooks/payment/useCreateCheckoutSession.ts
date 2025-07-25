import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createCheckoutSession } from "@/services/payment/createCheckoutSession";
import { CheckoutType } from "@/types/payment/checkoutTypes";

export const useCreateCheckoutSession = () => {
  return useMutation({
    mutationFn: (checkoutData: CheckoutType) =>
      createCheckoutSession(checkoutData),
    onSuccess: (paymentLink) => {
      toast.success("Checkout session created successfully.");
      // Redirect to the payment link or handle it as needed
      window.location.href = paymentLink;
    },
    onError: () => toast.error("Checkout session creation failed."),
    mutationKey: ["Payment"],
  });
};
