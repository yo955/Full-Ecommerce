"use client";

import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import Logout from "../svg/Logout";
import styles from "@/styles/Navbar/mobileUserMenu.module.scss";
const MobileUserLinksMenu = () => {
  const cart = useCartStore((state) => state.cart || []);
  const wishList = useWishListStore((state) => state.wishList || []);
  const { user, logout } = useAuthStore((state) => state);

  return (
    <div className={styles.menuContainer}>
      {/* WishList */}
      <Link href="/wishlist" className={styles.menuLink}>
        <span className="relative">
          🧡
          {wishList.length > 0 && (
            <span className={styles.badge}>{wishList.length}</span>
          )}
        </span>
        <span>المفضلة</span>
      </Link>

      {/* Cart */}
      <Link href="/cart" className={styles.menuLink}>
        <span className="relative">
          🛒
          {cart.length > 0 && (
            <span className={styles.badge}>{cart.length}</span>
          )}
        </span>
        <span>السلة</span>
      </Link>

      {!user && (
        <>
          <Link href="/login" className={styles.menuLink}>
            🔐 <span>تسجيل الدخول</span>
          </Link>
          <Link href="/SignUp" className={styles.menuLink}>
            ✍️ <span>إنشاء حساب</span>
          </Link>
        </>
      )}

      {user && (
        <button onClick={logout} className={styles.logoutBtn}>
          <Logout />
          <span>تسجيل الخروج</span>
        </button>
      )}
    </div>
  );
};

export default MobileUserLinksMenu;
