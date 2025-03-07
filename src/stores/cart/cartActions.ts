import {CartItem} from "@/types/CartTypes";

export const addToCart = (cart: CartItem[], cartItem: CartItem) => {
  const index = cart.findIndex(
    (item) => item.product.ProductId == cartItem.product.ProductId
  );
  // check if product does not exist in cart.
  if (index === -1) {
    return [...cart, {...cartItem, quantity: 1, subtotal: cartItem.product.Price}]
  }

  const updatedCart = [...cart];
  updatedCart[index] = {
    ...updatedCart[index],
    quantity: (updatedCart[index].quantity ?? 0) + 1,
    subtotal: ((updatedCart[index].quantity ?? 0) + 1) * updatedCart[index].product.Price,
  };
  return updatedCart;
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