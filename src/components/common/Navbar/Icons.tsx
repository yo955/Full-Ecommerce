"use client";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Link } from "@/i18n/routing";

const Icons = () => {
  const cart = useCartStore((state) => state.cart || []);
  const wishList = useWishListStore((state) => state.wishList || []);
  return (
    <div className="flex  items-center gap-3 ">
      {/* WishList */}
      <Link
        href="/wishlist"
        className="relative flex items-center gap-2 border-b pb-2"
      >
        <span className="relative">
          🧡
          {wishList && wishList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {wishList.length}
            </span>
          )}
        </span>
        <span>المفضلة</span>
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className="relative flex items-center gap-2 border-b pb-2"
      >
        <span className="relative">
          🛒
          {cart && cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </span>
        <span>السلة</span>
      </Link>
    </div>
  );
};

export default Icons;
