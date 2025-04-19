import axiosInstance from "@/utils/api/axiosInstance";
import {Product} from "@/types/Product";
import {WishlistItem} from "@/services/AsyncAddToWishList";

export interface Wishlist {
  id: string;
  wishlistItems: WishlistItem[];
}

const AsyncRemoveFromWishlist = async (wishListId: string): Promise<Wishlist> => {
    console.log(wishListId)
  try {
    const response = await axiosInstance.delete('/wishlist', {data: wishListId});
    return response.data;
  } catch (error) {
    // You might want to handle or transform the error before throwing
    console.error('Error removing from wishlist:', error);
    throw error;
  }
};

export default AsyncRemoveFromWishlist;