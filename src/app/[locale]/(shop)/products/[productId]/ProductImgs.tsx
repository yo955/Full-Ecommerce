import React from "react";
import Image from "next/image";

type ProductImgsProps = {
  mainImage: string;
  images: string[];
};

const ProductImgs = ({ mainImage, images }: ProductImgsProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse gap-4">
      {/* الصور المصغرة */}
      <div className="flex lg:flex-col gap-3 overflow-auto max-w-full lg:max-h-[500px] scrollbar-thin scrollbar-thumb-gray-300">
        {images?.map((img, index) => (
          <div
            key={index}
            className="min-w-[100px] min-h-[100px] max-w-[120px] max-h-[120px] flex items-center justify-center border border-gray-200 bg-[#f9f9f9] rounded-md hover:shadow-md transition-shadow duration-200"
          >
            <Image
              src={img}
              alt={`product-img-${index}`}
              width={100}
              height={100}
              className="object-contain max-w-[100px] max-h-[100px]"
            />
          </div>
        ))}
      </div>

      {/* الصورة الرئيسية */}
      <div className="flex-1 flex items-center justify-center bg-[#f0efef] rounded-md h-[400px] sm:h-[350px] md:h-[450px]">
        <Image
          src={mainImage}
          alt="main-product-image"
          width={500}
          height={500}
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default ProductImgs;
