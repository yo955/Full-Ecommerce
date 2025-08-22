import React, { useState } from "react";
import Image from "next/image";

type ProductImgsProps = {
  mainImage: string;
  images: string[];
};

const ProductImgs = ({ mainImage, images }: ProductImgsProps) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const allImages = [mainImage, ...images];


  return (
    <div className="flex gap-6">
      {/* Images */}
      <div className="flex flex-col gap-4">
        {allImages.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 bg-gray-100 rounded-lg cursor-pointer flex items-center justify-center border-2 transition-colors ${selectedImage === img
              ? "border-gray-600"
              : "border-transparent hover:border-gray-300"
              }`}
          >
            <Image
              src={img}
              alt={`img ${index + 1}`}
              width={80}
              height={80}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/*  Main Image */}
      <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center p-8" >
        <div className="relative">
          <Image
            src={selectedImage}
            alt="Product Image"
            width={400}
            height={400}
            className="w-96 h-96 object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImgs;