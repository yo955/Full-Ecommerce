import axiosInstance from "@/utils/api/axiosInstance";

export const cancelPayment = async (sessionId:string) => {
  try {
    const response = await axiosInstance.post(`/payments/${sessionId}/expire`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
