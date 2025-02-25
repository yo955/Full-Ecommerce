import axiosInstance from "@/utils/api/axiosInstance";
import { toast } from "react-toastify";

const LogoutUser = async () => {
  try {
    const response = await axiosInstance.post("/users/logout");
    toast.success("Logged Out Successfully");
    return response.data;
  } catch (error) {
    toast.error("Failed to Logout");
    throw error;
  }
};

export default LogoutUser;
