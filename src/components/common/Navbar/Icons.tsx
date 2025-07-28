"use client";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Link } from "@/i18n/routing";
import { Heart, ShoppingCart } from "lucide-react";
import styles from "@/styles/Navbar/Icons.module.scss";
const Icons = () => {
  const cart = useCartStore((state) => state.cart || []);
  const wishList = useWishListStore((state) => state.wishList || []);

  return (
    <div className={styles.icons}>
      {/* WishList */}
      <Link
        href="/wishlist"
        className={styles.icons__link}
        aria-label="Wishlist"
      >
        <span className={styles.icons__icon}>
          <Heart size={20} />
          {wishList.length > 0 && (
            <span className={styles.icons__badge}>{wishList.length}</span>
          )}
        </span>
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className={styles.icons__link}
        aria-label="ShoppingCart"
      >
        <span className={styles.icons__icon}>
          <ShoppingCart size={20} />
          {cart.length > 0 && (
            <span className={styles.icons__badge}>{cart.length}</span>
          )}
        </span>
      </Link>
    </div>
  );
};

export default Icons;
