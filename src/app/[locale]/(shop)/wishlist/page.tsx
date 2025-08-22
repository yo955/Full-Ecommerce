"use client";

import styles from "@/styles/wishlist/wishList.module.scss";
import { useState } from "react";
import SuggestionProducts from "./SuggestionProducts";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/common/products/ProductCard";
import { useCartStore } from "@/stores/cart/cartStore";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const WishListPage = () => {
  const [showAll, setShowAll] = useState(false);
  // Stores
  const { clearWishList, wishList: wishListItems } = useWishListStore((state) => state);
  console.log(wishListItems);
  const { addToCart } = useCartStore((state) => state);

  if (!wishListItems) return <SectionSkeleton />;

  const visibleProducts = showAll ? wishListItems : wishListItems.slice(0, 4);

  const moveAllToCart = async () => {
    for (const item of wishListItems) {
      await addToCart({
        product: item.product,
        quantity: 1,
      });
    }

    clearWishList();
  };
  return (
    <section className={styles.wishlist}>
      <div className={styles.header}>
        <h3>
          قائمة المفضلة <span>({wishListItems.length})</span>
        </h3>
        <button className={styles.moveAllBtn} onClick={moveAllToCart}>نقل الكل إلى السلة 🛒</button>
      </div>

      <div className={styles.productsGrid}>
        {visibleProducts.map((wishlistItem, index) => (
          <ProductCard key={index} product={wishlistItem.product} mode="wishlist" />
        ))}
      </div>

      {!showAll && wishListItems.length > 4 && (
        <div className="flex justify-end">
          <Button
            onClick={() => setShowAll(true)}
            className="w-[170px] !h-14 mt-8 px-4 py-2 text-white rounded-lg shadow-md bg-primary"
          >
            عرض المزيد
          </Button>
        </div>
      )}

      <SuggestionProducts />
    </section>
  );
};

export default WishListPage;
