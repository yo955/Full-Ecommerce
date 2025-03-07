import { Product } from "./Product";

export interface CartItem {
  product: Product
  quantity?: number ;
  subtotal?: number ;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}