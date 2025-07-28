"use client";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Link } from "@/i18n/routing";
import styles from "@/styles/Navbar/Icons.module.scss";

const Icons = () => {
  const cart = useCartStore((state) => state.cart || []);
  const wishList = useWishListStore((state) => state.wishList || []);

  return (
    <div className={styles.icons}>
      {/* WishList */}
      <Link href="/wishlist" className={styles.icons__link}>
        <span className={styles.icons__icon}>
          🧡
          {wishList.length > 0 && (
            <span className={styles.icons__badge}>{wishList.length}</span>
          )}
        </span>
        <span className={styles.icons__text}>المفضلة</span>
      </Link>

      {/* Cart */}
      <Link href="/cart" className={styles.icons__link}>
        <span className={styles.icons__icon}>
          🛒
          {cart.length > 0 && (
            <span className={styles.icons__badge}>{cart.length}</span>
          )}
        </span>
        <span className={styles.icons__text}>السلة</span>
      </Link>
    </div>
  );
};

export default Icons;
