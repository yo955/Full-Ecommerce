import {create} from 'zustand';
import {WishListState} from "@/types/wishListTypes";
import {Product} from "@/types/Product";
import {useAuthStore} from "@/stores/auth/useAuthStore";
import AsyncAddToWishList from "@/services/AsyncAddToWishList";
import AsyncRemoveFromWishlist from "@/services/AsyncRemoveFromWishlist";

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
    addToWishList: async (product) => {
      const user = useAuthStore.getState().user;
      if (!user) {
        set((state) => {
          if (state.wishList.find((item) => item.productId === product.productId)) {
            return state;
          }
          const SaveProduct = [...state.wishList, product]
          SaveToLocalStorage(SaveProduct)
          return {wishList: SaveProduct};
        })
        return;
      }
      const data = await AsyncAddToWishList([product.productId])
      SaveToLocalStorage(data);
      set(() => {
        return {wishList: data}
      })

    },
    removeFromWishList: async (id) => {
      const user = useAuthStore.getState().user;
      if (!user) {
        set((state) => {
            const SaveProduct = state.wishList.filter((item) => item.productId !== id)
            SaveToLocalStorage(SaveProduct)
            return {wishList: SaveProduct}
          }
        )
        return;
      }
      const data = await AsyncRemoveFromWishlist([id]);
      // SaveToLocalStorage(data)
      console.log(data);
      // set(() => {
      //   return {wishList: data}
      // })
    },

    clearWishList: () => set({wishList: []}),
  }))
;
