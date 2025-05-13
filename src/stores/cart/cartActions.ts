import {CartItem} from "@/types/cart/CartTypes";
import {useAuthStore} from "@/stores/auth/useAuthStore";
import AsyncAddToCart from "@/services/Cart/AsyncAddToCart";
import AsyncRemoveFromCart from "@/services/Cart/AsyncRemoveFromCart";
import { toast } from "react-toastify";

export const UseAddToCartHandler = async (cart: CartItem[], cartItem: CartItem) => {
  const user = useAuthStore.getState().user;
  if (!user) {
    const index = cart.findIndex(
      (item) => item.product.productId === cartItem.product.productId
    );

    if (index === -1) {
      toast.success("Added to cart successfully!");
      return [...cart, {...cartItem, quantity: 1, subtotal: cartItem.product.price}];
    }

    const updatedCart = [...cart];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: (updatedCart[index].quantity ?? 0) + 1,
      subtotal: ((updatedCart[index].quantity ?? 0) + 1) * updatedCart[index].product.price,
    };
    toast.success("Added to cart successfully!");
    return updatedCart;
  }
  const data = await AsyncAddToCart({
    ProductId: cartItem.product.productId,
    quantity: cartItem.quantity ? cartItem.quantity : 1
  })
  toast.success("Added to cart successfully!");
  return data.cartItems
};

export const removeFromCart = async (cart: CartItem[], id: string) => {
  const user = useAuthStore.getState().user;
  if (!user) {
    toast.success('Product removed successfully.')
    return cart.filter((item) => item.product.productId !== id);
  }
  const data = await AsyncRemoveFromCart(id);
  toast.success('Product removed successfully.')
  return data.cartItems;
};

export const updateQuantity = (
  cart: CartItem[],
  id: string,
  quantity: number
) => {
  return cart.map((item) =>
    item.product.productId === id ? {
      ...item, quantity, subtotal: quantity * item.product.price
    } : item
  );

};
