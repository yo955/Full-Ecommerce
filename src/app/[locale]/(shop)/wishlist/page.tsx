"use client";
import styles from "@/styles/cart/Cart.module.scss";
import CustomButton from "@/components/common/ui/Button";
import Loading from "@/loading/Loading";
import {useState} from "react";
import SuggestionProducts from "./SuggestionProducts";
import {useWishListStore} from "@/stores/wishlist/WishListStore";
import WishListCard from "@/app/[locale]/(shop)/wishlist/WishListCard";

const WishListPage = () => {
  const products = useWishListStore((state) => state.wishList)

  const [showAll, setShowAll] = useState(false);
  if (products === undefined) {
    return <Loading/>;
  }
  const visibleProducts = showAll ? products : products.slice(0, 4);

  console.log('vs' + products)
  return (
    <div className=" flex flex-col gap-16 my-14 mx-auto w-[80%]">
      <div className="flex justify-between">
        <h3 className="font-normal">
          WishList <span>({products.length})</span>
        </h3>
        <div>
          <button className={styles.cartBtn}>Move All To Bag</button>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {visibleProducts &&
            visibleProducts.map((product, index) => (
              <WishListCard key={index} {...product.product} />
            ))}
        </div>

        {!showAll && products.length > 4 && (
          <CustomButton
            onClick={() => setShowAll(true)}
            className="w-[170px] !h-14 place-self-end !mt-7 px-4 py-2  text-white rounded-lg shadow-md "
          >
            see more
          </CustomButton>
        )}
      </div>

      <SuggestionProducts/>
    </div>
  );
};

export default WishListPage;
