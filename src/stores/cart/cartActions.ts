import {CartItem} from "@/types/CartTypes";
import {useAuthStore} from "@/stores/auth/useAuthStore";
import useAddToCart from "@/hooks/useAddToCart";


export const useAddToCartHandler = () => {
  const user = useAuthStore.getState().user;
  const { mutate, data } = useAddToCart();

  return (cart: CartItem[], cartItem: CartItem) => {
    if (!user) {
      const index = cart.findIndex(
        (item) => item.product.ProductId === cartItem.product.ProductId
      );

      if (index === -1) {
        return [...cart, { ...cartItem, quantity: 1, subtotal: cartItem.product.Price }];
      }

      const updatedCart = [...cart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: (updatedCart[index].quantity ?? 0) + 1,
        subtotal: ((updatedCart[index].quantity ?? 0) + 1) * updatedCart[index].product.Price,
      };
      return updatedCart;
    }
    mutate({ ProductId: cartItem.product.ProductId, quantity: cartItem.quantity || 1 });
    return data?.cartItems||[];
  };
};

export const removeFromCart = (cart: CartItem[], id: string) => {
  return cart.filter((item) => item.product.ProductId !== id);
};

export const updateQuantity = (
  cart: CartItem[],
  id: string,
  quantity: number
) => {
  return cart.map((item) =>
    item.product.ProductId === id ? {
      ...item, quantity, subtotal: quantity * item.product.Price
    } : item
  );
};