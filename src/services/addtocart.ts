import axiosInstance from "@/utils/api/axiosInstance";
import {CartItem} from "@/types/CartTypes";
import {addToCartProps} from "@/hooks/useAddToCart";

export interface Cart {
  id: string,
  cartItems: CartItem[],
  totalPrice: number
}

const AddToCart = async ({ProductId, quantity}: addToCartProps) => {
  try {
    const response = await axiosInstance.post('/cart', {ProductId, quantity})
    const data: Cart = response.data
    console.log(data)
    return data
  } catch (error) {
    throw error;
  }
}
export default AddToCart;