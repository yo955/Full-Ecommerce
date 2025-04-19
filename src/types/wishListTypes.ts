import {Product} from "@/types/Product";
import {WishlistItem} from "@/services/AsyncAddToWishList";

export interface WishListState {
  wishList: WishlistItem[],
  addToWishList: (Product: Product) => void,
  removeFromWishList: (id: string) => void,
  clearWishList: () => void,
}