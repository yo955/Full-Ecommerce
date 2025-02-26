import { create } from "zustand";
import { addToCart, removeFromCart, updateQuantity } from "./cartActions";
import { CartState } from "@/types/CartTypes";

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: addToCart(state.cart, product) })),
  removeFromCart: (id) =>
    set((state) => ({ cart: removeFromCart(state.cart, id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({ cart: updateQuantity(state.cart, id, quantity) })),
  clearCart: () => set({ cart: [] }),
}));
