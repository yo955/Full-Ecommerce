import {create} from 'zustand';
import {WishListState} from "@/types/wishListTypes";
import {Product} from "@/types/Product";

const SaveToLocalStorage = (Products: Product[]) => {

  if (typeof window !== 'undefined') {
    localStorage.setItem('wishList', JSON.stringify(Products));
  }
}

const getWishList = () => {
  const wishlist = localStorage.getItem('wishList')

  return wishlist ? JSON.parse(wishlist) : []
}
export const useWishListStore = create<WishListState>((set) => ({
    wishList: getWishList(),
    addToWishList: (product) =>
      set((state) => {
        if (state.wishList.find((item) => item.productId === product.productId)) {
          return state;
        }
        const SaveProduct = [...state.wishList, product]
        SaveToLocalStorage(SaveProduct)
        return {wishList: SaveProduct};
      }),
    removeFromWishList: (id) =>
      set((state) => {
          const SaveProduct = state.wishList.filter((item) => item.productId !== id)
          SaveToLocalStorage(SaveProduct)
          return {wishList: SaveProduct}
        }
      ),
    clearWishList: () => set({wishList: []}),
  }))
;
