import {Product} from "@/types/Product";

export interface WishListState {
  wishList: Product[],
  addToWishList: (Product: Product) => void,
  removeFromWishList: (id: string) => void,
  clearWishList: () => void,
}