export interface CartItem {
  ProductId: string | number;
  Name: string;
  Price: number;
  quantity: number ;
  MainImageUrl: string;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}
