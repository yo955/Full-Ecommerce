"use client";
import Image from "next/image";
import Rate from "./Rate";
import styles from "@/styles/ProductItem/ProductItem.module.scss";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Product } from "@/types/cart/Product";
import { ShoppingCart, Heart, Eye, Check } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useMemo } from "react";

const ProductCard = (product: Product) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cart);
  const addToWishList = useWishListStore((state) => state.addToWishList);
  const wishList = useWishListStore((state) => state.wishList);

  const isInCart = useMemo(() => {
    return cartItems.some(
      (item) => item.product.productId === product.productId
    );
  }, [cartItems, product.productId]);

  const isInWishList = useMemo(() => {
    return wishList.some(
      (item) => item.product.productId === product.productId
    );
  }, [wishList, product.productId]);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.mainImageUrl}
          alt={product.name}
          fill
          className={styles.image}
        />
        <span className={styles.badge}>New</span>
        <div className={styles.actions}>
          <button
            onClick={() => {
              if (!isInWishList) {
                addToWishList(product);
              }
            }}
            className={`${styles.iconButton} ${
              isInWishList ? styles.active : ""
            }`}
            disabled={isInWishList}
          >
            <Heart size={18} />
          </button>

          <Link href={`/products/${product.productId}`}>
            <button className={styles.iconButton}>
              <Eye size={18} />
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.details}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <Rate />
        <button
          onClick={() => {
            if (!isInCart) {
              addToCart({ product, quantity: 1 });
            }
          }}
          disabled={isInCart}
          className={`${styles.addToCartBtn} ${isInCart ? styles.inCart : ""}`}
        >
          {isInCart ? (
            <>
              <Check size={18} /> Added
            </>
          ) : (
            <>
              <ShoppingCart size={18} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
