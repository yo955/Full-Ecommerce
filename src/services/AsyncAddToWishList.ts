import axiosInstance from "@/utils/api/axiosInstance";
import {Product} from "@/types/Product";

interface wishlistItem {
  id: string;
  product: Product;
}

export interface WishList {
  id: string,
  wishlistItems: wishlistItem[],
}

const AsyncAddToCart = async (wishListData: string[]) => {
  try {
    const response = await axiosInstance.post('/wishlist', wishListData)
    const data: WishList = response.data
    return data.wishlistItems.map((item) => item.product);
  } catch (error) {
    throw error;
  }
}
export default AsyncAddToCart;