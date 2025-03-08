"use client";
import {useMutation} from "@tanstack/react-query";
import RegisterUser from "@/services/RegisterUser";
import {RegisterParams} from "@/types/RegisterParams";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useState} from "react";
import {useAuthStore} from "@/stores/auth/useAuthStore";

const useGetRegisterUser = () => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const {setUser} = useAuthStore();
  const mutation = useMutation({
    mutationFn: (userData: RegisterParams) => RegisterUser(userData),
    onSuccess: (user) => {
      toast.success("SignUp Successfully! 🎉");
      setUser(user)
      setHasError(false);
      router.push("/");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
      setHasError(true);
      toast.error("SignUp Failed! ❌ Please check your Sign data.");
    },
  });
  return {...mutation, hasError};
};

export default useGetRegisterUser;
