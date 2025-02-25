import Cookies from "js-cookie";
import { useAuthStore } from "@/store/useAuthStore";
export const useLogout = () => {
  const { logout } = useAuthStore();
  return () => {
    logout();
    Cookies.remove("token");
  };
};
