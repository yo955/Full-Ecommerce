// export interface CartItem {
//   ProductId: string | number;
//   Name: string;
//   Price: number;
//   quantity?: number ;
//   MainImageUrl: string;
// }

// export interface CartState {
//   cart: CartItem[];
//   addToCart: (product: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
//   clearCart: () => void;
// }


import { Product } from "./Product";

export interface CartItem {
  product: Product
  quantity?: number ;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}