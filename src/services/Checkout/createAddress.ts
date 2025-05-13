import axiosInstance from "@/utils/api/axiosInstance";
import {AddressType} from "@/types/AddressType";

export const createAddress = async (AddressData: AddressType) => {
  try {
    console.log("Sending data:", AddressData);
    const response = await axiosInstance.post('/addresses', AddressData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
