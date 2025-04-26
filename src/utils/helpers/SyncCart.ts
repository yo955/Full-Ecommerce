import {CartItem} from "@/types/CartTypes";
import {UseMutateFunction} from "@tanstack/react-query";
import {addToCartProps} from "@/hooks/Cart/useAddToCart";
import {Cart} from "@/services/Cart/AsyncAddToCart";

type MutateType = UseMutateFunction<
  Cart,
  unknown,
  addToCartProps,
  unknown
>;

export const SyncCart = (mutate: MutateType) => {
  const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
  cart.forEach((CartItem) => {
    mutate({quantity: CartItem.quantity ?? 1, ProductId: CartItem.product.productId})
  })
}
