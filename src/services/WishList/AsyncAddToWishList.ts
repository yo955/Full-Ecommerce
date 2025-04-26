import axiosInstance from "@/utils/api/axiosInstance";
import {Product} from "@/types/Product";


export interface WishlistItem {
  product: Product;
}

interface Wishlist {
  id: string;
  wishlistItems: WishlistItem[];
}

const AsyncAddToCart = async (wishListId: string) => {
  console.log(wishListId)
  try {
    const response = await axiosInstance.post('/wishlist', JSON.stringify(wishListId))
    const data: Wishlist = response.data
    return data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
export default AsyncAddToCart;