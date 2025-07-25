import axiosInstance from "@/utils/api/axiosInstance";

export const createOrder = async (AddressID: string) => {
  try {
    console.log("Sending AddressId:", AddressID);
    const response = await axiosInstance.post("/orders", AddressID);
    return response.data;
  } catch (error) {
    throw error;
  }
};
