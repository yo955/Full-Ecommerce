import { useMutation } from "@tanstack/react-query";
import { cancelPayment } from "@/services/payment/cancelPayment";
import { toast } from "react-toastify";

export const useCancelPayment = () => {
  return useMutation({
    mutationFn: (sessionId: string) => cancelPayment(sessionId),
    onSuccess:()=> toast.success("Payment cancelled successfully."),
    mutationKey: ["Payment"],
  });
};
