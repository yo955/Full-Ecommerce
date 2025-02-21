"use client";
import { useMutation } from "@tanstack/react-query";
import RegisterUser from "@/services/RegisterUser";
import { RegisterParams } from "@/types/RegisterParams";
import { useRouter } from "next/navigation";

const useGetRegisterUser = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (userData: RegisterParams) => RegisterUser(userData),
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

export default useGetRegisterUser;
