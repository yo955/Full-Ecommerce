import LoginUser from "@/services/LoginUser";
import { useAuthStore } from "@/store/useAuthStore";
import { LoginParams } from "@/types/LoginParams";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useGetLoginUser = () => {
  const [hasError, setHasError] = useState(false);
  const { setUser } = useAuthStore();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (userData: LoginParams) => LoginUser(userData),
    onSuccess: (user) => {
      setUser(user);
      console.log("success user", user);
      toast.success("Login Successfully! 🎉");
      setHasError(false);
      router.push("/");
    },
    onError: () => {
      setHasError(true);
      toast.error("Login Failed! ❌ Please check your Sign data.");
    },
  });
  return { ...mutation, hasError };
};

export default useGetLoginUser;
