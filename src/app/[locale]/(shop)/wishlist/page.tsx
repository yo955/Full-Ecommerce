"use client";

import styles from "@/styles/wishlist/wishList.module.scss";
import Loading from "@/loading/Loading";
import { useState } from "react";
import SuggestionProducts from "./SuggestionProducts";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import WishListCard from "@/app/[locale]/(shop)/wishlist/WishListCard";
import { Button } from "@/components/ui/button";

const WishListPage = () => {
  const products = useWishListStore((state) => state.wishList);
  const [showAll, setShowAll] = useState(false);

  if (!products) return <Loading />;

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className={styles.wishlist}>
      <div className={styles.header}>
        <h3>
          قائمة المفضلة <span>({products.length})</span>
        </h3>
        <button className={styles.moveAllBtn}>نقل الكل إلى السلة 🛒</button>
      </div>

      <div className={styles.productsGrid}>
        {visibleProducts.map((item, index) => (
          <WishListCard key={index} {...item.product}    />
        ))}
      </div>

      {!showAll && products.length > 4 && (
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
