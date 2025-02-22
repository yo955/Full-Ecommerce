"use client";
import { useMutation } from "@tanstack/react-query";
import RegisterUser from "@/services/RegisterUser";
import { RegisterParams } from "@/types/RegisterParams";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const useGetRegisterUser = () => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (userData: RegisterParams) => RegisterUser(userData),
    onSuccess: () => {
      toast.success("SignUp Successfully! 🎉");
      setHasError(false);
      router.push("/");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
      setHasError(true);
      toast.error("SignUp Failed! ❌ Please check your Sign data.");
    },
  });
  return { ...mutation, hasError };
};

export default useGetRegisterUser;
