"use client"
import {useAuthStore} from "@/stores/auth/useAuthStore";
import {LoginParams} from "@/types/LoginParams";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {toast} from "react-toastify";
import UseSyncCart from "@/hooks/Cart/useSyncCart";
import LoginUser from "@/services/Auth/LoginUser";


const useGetLoginUser = () => {
  const [hasError, setHasError] = useState(false);
  const {setUser} = useAuthStore();
  const router = useRouter();
  const SyncCart = UseSyncCart();
  const mutation = useMutation({
    mutationFn: (userData: LoginParams) => LoginUser(userData),
    onSuccess: (user) => {
      setUser(user);
      toast.success("Login Successfully! 🎉");
      SyncCart()
      setHasError(false);
      router.push("/");
    },
    onError: (error) => {
      setHasError(true);
      toast.error(`Login Failed! ❌ ${error} `);
    },
  });
  return {...mutation, hasError};
};

export default useGetLoginUser;
