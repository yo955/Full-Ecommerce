"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import CustomButton from "@/components/common/ui/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAutorenew } from "react-icons/md";
import { Product } from "@/types/cart/Product";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
// 6767676
const sizes = ["Xs", "S", "M", "L", "Xl"];

const ProductInfo = ({product}:{product:Product}) => {
  const addToWishList = useWishListStore((state) => state.addToWishList);
  const [selectSize, setSelectSize] = useState("");
  const [value, setValue] = useState(0);
  const [clicked, setClicked] = useState<"plus" | "minus" | null>(null);
  function increaseItem() {
    setClicked("plus");
    setValue(value + 1);
  }
  function decreaseItem() {
    setClicked("minus");
    setValue(value > 0 ? value - 1 : 0);
  }
  return (
    <div className="grid h-fit sm:grid-cols-1 custom-mid:px-7">
      <div className="border-b-4 flex flex-col gap-1">
        <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
        <div className="flex gap-2 ">
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <CiStar className="text-gray-300" />
          <p>(150 Reviews)</p>
          <p>|</p>
          <p className="text-green-400">In Stock</p>
        </div>
        <p className="text-2xl font-normal">${product.price}</p>
        <p className="text-sm mb-4 md:w-fit">
          {product.longDescription}
        </p>
      </div>
      <div className="mt-3">
        <div className="flex items-center mb-2">
          Colors:
          <span className=" rounded-full border-4 bg-blue-600 w-5 h-5 ml-4"></span>{" "}
          <span className=" rounded-full border-4 bg-green-600 w-5 h-5 "></span>
        </div>
        <div>
          <p className="inline">Size :</p>
          {sizes &&
            sizes.map((size: string, index) => (
              <button
                key={index}
                onClick={() => setSelectSize(size)}
                className={` w-8 h-8 mx-1 border-2 ${
                  selectSize === size ? "bg-[#DB4444]" : "bg-white"
                } `}
              >
                {size}
              </button>
            ))}
        </div>
        <div className="mt-6  flex flex-wrap gap-4">
          <div className="border   w-fit h-8 flex items-center">
            <button
              className={`w-8 h-8  border-2  ${
                clicked === "minus" ? "bg-[#DB4444]" : "bg-white"
              }`}
              onClick={decreaseItem}
            >
              -
            </button>
            <p className="w-10 h-8 text-lg text-center place-content-center">
              {value}
            </p>
            <button
              className={`w-8 h-8  border-2    ${
                clicked === "plus" ? "bg-[#DB4444]" : "bg-white"
              }`}
              onClick={increaseItem}
            >
              +
            </button>
          </div>
          <CustomButton className="w-fit h-8 text-base">Buy Now</CustomButton>
          <div className="w-8 h-8 mx-1 border-2 border-[#0000003f] rounded-md  text-center justify-items-center place-content-center text-base"
           onClick={()=>addToWishList(product)}>
            <IoIosHeartEmpty />
          </div>
        </div>
        <div className="mt-5 px-4 py-6 border border-[#00000075] rounded-sm max-w-full custom-sm:px-2 md:w-fit  overflow-hidden">
          <div className="flex gap-2   ">
            <TbTruckDelivery className="w-10 h-10" />
            <div className="flex flex-col">
              <p className="text-base font-medium">Free Delivery</p>
              <p className="text-xs font-medium">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <p className="-mx-4 h-[1px] bg-[#00000075] my-3 "></p>
          <div className="flex gap-2">
            <MdAutorenew className="w-10 h-10" />
            <div className="flex flex-col">
              <p className="text-base font-medium">Return Delivery</p>
              <p className="text-xs font-medium">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
