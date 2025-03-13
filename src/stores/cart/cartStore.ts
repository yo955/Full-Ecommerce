import {create} from "zustand";
import {useAddToCartHandler, removeFromCart, updateQuantity} from "./cartActions";
import {CartItem, CartState} from "@/types/CartTypes";

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const getCart = localStorage.getItem("cart");
    return getCart ? JSON.parse(getCart) : [];
  }
}
const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const useCartStore = create<CartState>((set) => ({
    cart: getCartFromLocalStorage(),
    addToCart: (product) =>
      set((state) => {
        const AddToCart = useAddToCartHandler();
        const updatedCart = AddToCart(state.cart, product);
        saveCartToLocalStorage(updatedCart);
        return {cart: updatedCart};
      }),
    removeFromCart: (id) =>
      set((state) => {
        const updatedCart = removeFromCart(state.cart, id);
        saveCartToLocalStorage(updatedCart);
        return {cart: updatedCart};
      }),

    updateQuantity:
      (id, quantity) =>
        set((state) => {
          const updatedCart = updateQuantity(state.cart, id, quantity);
          saveCartToLocalStorage(updatedCart);
          return {cart: updatedCart};
        }),

    clearCart: () =>
      set(() => {
        saveCartToLocalStorage([]);
        return {cart: []};
      }),

  }))
;
