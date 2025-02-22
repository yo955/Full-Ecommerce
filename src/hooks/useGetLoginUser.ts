import LoginUser from "@/services/LoginUser";
import { LoginParams } from "@/types/LoginParams";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useGetLoginUser = () => {
  console.log("arrive or not");
  const router = useRouter(); // Fix router import
  // return useMutation({

  //   mutationFn: (userData: LoginParams) => LoginUser(userData),
  //   onSuccess: () => {
  //     router.push("/");
  //   },
  //   onError: (error) => {
  //     console.error("Registration failed:", error);
  //   },
  // });

  return useMutation({
    mutationFn: async (userData: LoginParams) => {
      console.log("Attempting Login with:", userData);
      return await LoginUser(userData);
    },
    onSuccess: (userData) => {
      console.log("Login Success:", userData);
      router.push("/"); // Redirect to home page
    },
    onError: (error) => {
      // console.error("Login failed:", error.response?.data || error.message);
      return error;
    },
  });
};

export default useGetLoginUser;
