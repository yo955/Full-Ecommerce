import { CheckoutType } from "@/types/payment/checkoutTypes";
import axiosInstance from "@/utils/api/axiosInstance";

export const createCheckoutSession = async (checkoutData: CheckoutType) => {
  try {
    console.log("Sending checkoutData:", checkoutData);
    const response = await axiosInstance.post(
      "/payments/create-checkout-session",
      checkoutData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
