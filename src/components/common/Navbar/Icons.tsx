"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import {CartBtn} from "../ui/CartBtn";
import {useCartStore} from "@/stores/cart/cartStore";
import {useWishListStore} from "@/stores/wishlist/WishListStore";

const Icons = () => {
  const cart = useCartStore((state) => state.cart);
  const wishList = useWishListStore((state) => state.wishList)
  return (
    <div className="flex justify-around w-full items-center gap-1">
      <CartBtn count={wishList.length} href="/wishlist" icon={<FavoriteBorderIcon className="text-2xl"/>}/>
      <CartBtn
        href="/cart"
        count={cart.length}
        icon={<ShoppingCartIcon fontSize="small"/>}
      />
    </div>
  );
};

export default Icons;
