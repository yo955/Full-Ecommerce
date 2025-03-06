"use client";
import styles from "@/styles/cart/Cart.module.scss";
import ProductCard from "@/components/common/products/ProductCard";
import CustomButton from "@/components/common/ui/Button";
import useGetProducts from "@/hooks/useGetProducts";
import Loading from "@/loading/Loading";
import { useState } from "react";
import SuggestionProducts from "./SuggestionProducts";

const WishListPage = () => {
  const { data: products, isLoading } = useGetProducts();
  const [showAll, setShowAll] = useState(false);
  if (products === undefined) {
    return <Loading />;
  }

  const visibleProducts = showAll ? products : products.slice(0, 4);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" flex flex-col gap-16 my-14 mx-auto w-[80%]">
      <div className="flex justify-between">
        <h3 className="font-normal">
          WishList <span>(5)</span>
        </h3>
        <div>
          <button className={styles.cartBtn}>Move to asad</button>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {visibleProducts &&
            visibleProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
        </div>

        {!showAll && products.length > 4 && (
          <CustomButton
            onClick={() => setShowAll(true)}
            className="w-[150px] place-self-end !mt-7 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            see more
          </CustomButton>
        )}
      </div>

      <SuggestionProducts />
    </div>
  );
};

export default WishListPage;
