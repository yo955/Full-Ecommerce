"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAutorenew } from "react-icons/md";
import { Product } from "@/types/cart/Product";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Button } from "@/components/ui/button";

const sizes = ["XS", "S", "M", "L", "XL"];

const ProductInfo = ({ product }: { product: Product }) => {
  const addToWishList = useWishListStore((state) => state.addToWishList);
  const [selectSize, setSelectSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increaseItem = () => setQuantity((prev) => prev + 1);
  const decreaseItem = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="grid gap-6 sm:px-4">
      {/* Title + Rating */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          <CiStar className="text-gray-300" />
          <span>(150 Reviews)</span>
          <span>|</span>
          <span className="text-green-500">متوفر</span>
        </div>
        <p className="text-2xl font-semibold mt-3 text-black">${product.price}</p>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed">{product.longDescription}</p>
      </div>

      {/* Colors */}
      <div>
        <p className="mb-1 font-medium">الألوان:</p>
        <div className="flex gap-3">
          <span className="w-6 h-6 rounded-full bg-blue-600 border-2 border-gray-300 cursor-pointer" />
          <span className="w-6 h-6 rounded-full bg-green-600 border-2 border-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-1 font-medium">المقاس:</p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectSize(size)}
              className={`w-10 h-10 border rounded ${
                selectSize === size
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-black"
              } hover:border-gray-500`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Buy/Add */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex border rounded">
          <button
            onClick={decreaseItem}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          >
            -
          </button>
          <div className="w-10 h-8 flex items-center justify-center">{quantity}</div>
          <button
            onClick={increaseItem}
            className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>

        <Button className="h-10 px-6 text-base bg-red-600 text-white hover:bg-red-700">
          اشتري الآن
        </Button>

        <button
          onClick={() => addToWishList(product)}
          className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
          title="إضافة إلى المفضلة"
        >
          <IoIosHeartEmpty size={22} />
        </button>
      </div>

      {/* Delivery Info */}
      <div className="border p-4 rounded-md text-sm text-gray-700 space-y-3">
        <div className="flex gap-3 items-start">
          <TbTruckDelivery size={28} />
          <div>
            <p className="font-medium">توصيل مجاني</p>
            <p>أدخل الرمز البريدي لتأكيد التوصيل</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-3 items-start">
          <MdAutorenew size={28} />
          <div>
            <p className="font-medium">إرجاع خلال 30 يوم</p>
            <p>تفاصيل سياسة الإرجاع لدينا</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
