import React from "react";
import Image from "next/image";

const productImgs = [
  {
    src: "/images/product/1.png",

    className:
      "w-[121px] h-[114px] tab-large-screen:w-[70px] tab-large-screen:h-[70px] custom-mid:w-auto custom-mid:h-auto ",
  },
  {
    src: "/images/product/2.png",

    className:
      "w-[112px] h-[97px] tab-large-screen:w-[70px] tab-large-screen:h-[70px] custom-mid:w-auto custom-mid:h-auto ",
  },
  {
    src: "/images/product/3.png",

    className:
      "w-[134px] h-[94px] tab-large-screen:w-[70px] tab-large-screen:h-[70px] custom-mid:w-auto custom-mid:h-auto ",
  },
  {
    src: "/images/product/4.png",

    className:
      "w-[122px] h-[106px] tab-large-screen:w-[70px] tab-large-screen:h-[70px] custom-mid:w-auto custom-mid:h-auto ",
  },
];
const ProductImgs = () => {
  return (
    <div className="imgs flex flex-row-reverse custom-mid:flex-col custom-mid:place-items-center justify-between gap-3 tab-large-screen:gap-1">
      <div className="flex items-center custom-mid:place-content-center justify-center w-[400px] h-[500px] custom-handling:w-[346px] custom-handling:h-[280px] custom-phone:w-[240px] bg-[#f0efef]">
        <Image
          src="/images/product/product.png"
          alt="product-img"
          width={1000}
          height={500}
          className="w-[346px] h-[260px] custom-handling:w-[250px] custom-handling:h-[120px] "
        />
      </div>
      <div className="flex flex-col custom-mid:flex-row custom-handling:grid custom-handling:grid-cols-2  gap-4  overflow-auto">
        {productImgs &&
          productImgs.map((img, index) => (
            <div
              key={index}
              className="w-[170px] h-[140px] custom-mid:w-[140px] custom-mid:h-[110px]  flex items-center justify-center  bg-[#f4f4f4]"
            >
              <Image
                src={img.src}
                alt="product img"
                width={1000}
                height={400}
                className={img.className}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImgs;
