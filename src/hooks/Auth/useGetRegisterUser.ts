"use client";
import {useMutation} from "@tanstack/react-query";
import {RegisterParams} from "@/types/RegisterParams";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useState} from "react";
import {useAuthStore} from "@/stores/auth/useAuthStore";
import UseSyncCart from "@/hooks/Cart/useSyncCart";
import RegisterUser from "@/services/Auth/RegisterUser";


const useGetRegisterUser = () => {
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const {setUser} = useAuthStore();
  const SyncCart = UseSyncCart();

  const mutation = useMutation({
    mutationFn: (userData: RegisterParams) => RegisterUser(userData),
    onSuccess: (user) => {
      setUser(user)
      toast.success("SignUp Successfully! 🎉");
      SyncCart();
      setHasError(false);
      router.push("/");
    },
    onError: (error) => {
      setHasError(true);
      toast.error(`SignUp Failed! ❌ ${error}`);
    },
  });
  return {...mutation, hasError};
};

export default useGetRegisterUser;
