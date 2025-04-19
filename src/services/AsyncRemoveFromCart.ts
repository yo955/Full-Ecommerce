import axiosInstance from "@/utils/api/axiosInstance";
import {CartItem} from "@/types/CartTypes";


export interface Cart {
  id: string,
  cartItems: CartItem[],
  totalPrice: number
}

const AsyncRemoveFromCart = async (ProductId: string) => {
  try {
    const response = await axiosInstance.delete(`/cart`,{data:ProductId})
    const data: Cart = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}
export default AsyncRemoveFromCart;