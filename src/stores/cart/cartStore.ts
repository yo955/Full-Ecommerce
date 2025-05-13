import {create} from "zustand";
import {UseAddToCartHandler, removeFromCart, updateQuantity} from "./cartActions";
import {CartItem, CartState} from "@/types/cart/CartTypes";
// import useAddToCart from "@/hooks/useAddToCart";

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const getCart = localStorage.getItem("cart");
    return getCart ? JSON.parse(getCart) : [];
  }
}
const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const useCartStore = create<CartState>((set, get) => ({
    cart: getCartFromLocalStorage(),

    addToCart: async (product) => {
      const updatedCart = await UseAddToCartHandler(get().cart, product);
      saveCartToLocalStorage(updatedCart);
      set(() => {
        return {cart: updatedCart};
      })
    },
    removeFromCart: async (id) => {
      const updatedCart = await removeFromCart(get().cart, id);
      saveCartToLocalStorage(updatedCart);
      set(() => {
          return {cart: updatedCart};
        }
      )
    },

    updateQuantity:
      (id, quantity) =>
        set((state) => {
          const updatedCart = updateQuantity(state.cart, id, quantity);
          saveCartToLocalStorage(updatedCart);
          return {cart: updatedCart};
        }),

    clearCart:
      () =>
        set(() => {
          saveCartToLocalStorage([]);
          return {cart: []};
        }),


  }))
;
