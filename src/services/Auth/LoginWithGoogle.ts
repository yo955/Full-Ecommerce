import AxiosInstance from "@/utils/api/axiosInstance";
import {User} from "@/types/AuthState";

const fetchUser = async (): Promise<User> => {
  try {
    const response = await AxiosInstance.get("/users/user");
    return response.data
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};
export default fetchUser;
