import {Product} from "@/types/cart/Product";
import {WishlistItem} from "@/services/WishList/AsyncAddToWishList";

export interface WishListState {
  wishList: WishlistItem[],
  addToWishList: (Product: Product) => void,
  removeFromWishList: (id: string) => void,
  clearWishList: () => void,
}