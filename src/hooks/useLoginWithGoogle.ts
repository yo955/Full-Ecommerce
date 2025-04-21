"use client";
import {useQuery} from "@tanstack/react-query";
import {LoginWithGoogle} from "@/services/LoginWithGoogle";

export const useLoginWithGoogle = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: LoginWithGoogle
  })
}