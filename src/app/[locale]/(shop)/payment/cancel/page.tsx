"use client";
import { useEffect } from "react";
import { useCancelPayment } from "@/hooks/payment/useCancelPayment";
import { useSearchParams } from "next/navigation";

const PaymentCancel = () => {
  const { mutate: cancelPaymentMutate } = useCancelPayment();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sessionId = searchParams.get("sessionId");
    console.log("Session ID:", sessionId);

    if (sessionId) {
      cancelPaymentMutate(sessionId);
    } else {
      console.log("No session ID provided.");
    }
  }, [searchParams]); 

  return <div>PaymentCancel</div>;
};

export default PaymentCancel;
