"use client";
import { useMutation } from "@tanstack/react-query";
import RegisterUser from "@/services/RegisterUser";
import { RegisterParams } from "@/types/RegisterParams";

const useGetRegisterUser = () =>
  useMutation({
    mutationFn: (userData: RegisterParams) => RegisterUser(userData),
    onSuccess: () => console.log("successfully registered"),
  });
export default useGetRegisterUser;
