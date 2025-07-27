"use client";

import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import Logout from "../svg/Logout";

const MobileUserLinksMenu = () => {
  const cart = useCartStore((state) => state.cart || []);
  const wishList = useWishListStore((state) => state.wishList || []);
  const { user, logout } = useAuthStore((state) => state);

  return (
    <div className="flex flex-col gap-4 border-t pt-4">
      {/* WishList */}
      <Link
        href="/wishlist"
        className="relative flex items-center gap-2 border-b pb-2"
      >
        <span className="relative">
          🧡
          {wishList.length > 0 && (
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
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </span>
        <span>السلة</span>
      </Link>

      {!user && (
        <>
          {/* Login  */}
          <Link href="/login" className="flex items-center gap-2 border-b pb-2">
            🔐 <span>تسجيل الدخول</span>
          </Link>

          {/*  SignUp */}
          <Link href="/SignUp" className="flex items-center gap-2">
            ✍️ <span>إنشاء حساب</span>
          </Link>
        </>
      )}
      {user && (
        <button
          onClick={logout}
          className="flex p-2 rounded bg-red-500 items-center gap-2 text-white border-b pb-2"
        >
         <Logout/>
          <span>تسجيل الخروج</span>
        </button>
      )}
    </div>
  );
};

export default MobileUserLinksMenu;
