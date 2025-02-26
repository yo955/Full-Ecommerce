import { CartItem } from "@/types/CartTypes";


export const addToCart = (cart: CartItem[], product: CartItem) => {
  const existingItem = cart.find((item) => item.ProductId === product.ProductId);
  if (existingItem) {
    return cart.map((item) =>
      item.ProductId === product.ProductId ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cart, { ...product, quantity: 1 }];
};

export const removeFromCart = (cart: CartItem[], id: number) => {
  return cart.filter((item) => item.ProductId !== id);
};

export const updateQuantity = (cart: CartItem[], id: number, quantity: number) => {
  return cart.map((item) => (item.ProductId === id ? { ...item, quantity } : item));
};
