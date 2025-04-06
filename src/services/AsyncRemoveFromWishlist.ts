import axiosInstance from "@/utils/api/axiosInstance";
import {Product} from "@/types/Product";

interface wishlistItem {
  id: string;
  product: Product;
}

export interface wishlist {
  id: string,
  wishlistItem: wishlistItem[],
}

const AsyncRemoveFromCart = async (wishListId: string[]) => {
  try {
    const response = await axiosInstance.delete(`/wishlist`, {data: wishListId})
    const data: wishlist = response.data;
    return data;
  } catch (error) {
    throw error;
  }
}
export default AsyncRemoveFromCart;