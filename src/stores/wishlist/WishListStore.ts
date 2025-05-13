import {create} from 'zustand';
import {WishListState} from "@/types/cart/wishListTypes";
import {useAuthStore} from "@/stores/auth/useAuthStore";
import AsyncAddToWishList, {WishlistItem} from "@/services/WishList/AsyncAddToWishList";
import AsyncRemoveFromWishlist from "@/services/WishList/AsyncRemoveFromWishlist";

const SaveToLocalStorage = (Products: WishlistItem[]) => {

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
    addToWishList: async (product) => {
      const user = useAuthStore.getState().user;
      if (!user) {
        set((state) => {
          if (state.wishList.find((item) => item.product.productId === product.productId)) {
            return state;
          }
          const SaveProduct = [...state.wishList, {product}]
          SaveToLocalStorage(SaveProduct)
          return {wishList: SaveProduct};
        })
        return;
      }
      const data = await AsyncAddToWishList(product.productId)
      SaveToLocalStorage(data.wishlistItems);
      set(() => {
        return {wishList: data.wishlistItems}
      })

    },
    removeFromWishList: async (id) => {
      const user = useAuthStore.getState().user;
      if (!user) {
        set((state) => {
            const SaveProduct = state.wishList.filter((item) => item.product.productId !== id)
            SaveToLocalStorage(SaveProduct)
            return {wishList: SaveProduct}
          }
        )
        return;
      }
      const data = await AsyncRemoveFromWishlist(id);
      SaveToLocalStorage(data.wishlistItems)
      console.log(data.wishlistItems);
      set(() => {
        return {wishList: data.wishlistItems}
      })
    },

    clearWishList: () => set({wishList: []}),
  }))
;
