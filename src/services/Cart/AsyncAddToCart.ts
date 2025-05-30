import axiosInstance from "@/utils/api/axiosInstance";
import {CartItem} from "@/types/cart/CartTypes";
import {addToCartProps} from "@/hooks/Cart/useAddToCart";

export interface Cart {
  id: string,
  cartItems: CartItem[],
  totalPrice: number
}

const AsyncAddToCart = async ({ProductId, quantity}: addToCartProps) => {
  try {
    const response = await axiosInstance.post('/cart', {ProductId, quantity})
    const data: Cart = response.data
    return data
  } catch (error) {
    throw error;
  }
}
export default AsyncAddToCart;