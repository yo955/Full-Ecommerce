import {useMutation} from "@tanstack/react-query";
import {AddressType} from "@/types/AddressType";
import {toast} from "react-toastify";
import { createAddress } from "@/services/Checkout/createAddress";

export const useCreateAddress = () => {
  return useMutation({
    mutationFn: (AddressData: AddressType) => createAddress(AddressData),
    onSuccess: () => toast.success("Address added successfully."),
    onError: () => toast.error("Address added failed."),
    mutationKey: ['addresses'],
  })
}