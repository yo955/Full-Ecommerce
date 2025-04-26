"use client";
import PathLinks from "@/components/common/ui/PathLinks";
import ProductImgs from "./ProductImgs";
import ProductInfo from "./ProductInfo";
import useGetProduct from "@/hooks/Product/useGetProduct";
import Loading from "@/loading/Loading";
import * as React from "react";
import {useParams} from "next/navigation";
// import CustomSwiper from "@/components/common/Swiper/Swiper";

const ProductDetailsPage = () => {
  const {productId}: { productId: string } = useParams();

  const {data: product, isLoading} = useGetProduct(productId);
  if (isLoading) {
    return <Loading/>;
  }
  if (product)
    return (
      <div className="my-12 mx-auto lg:w-[80%] md:w-[95%] sm:w-[100%]">
        <PathLinks titles={["product"]}/>
        <div className="top-section flex  custom-mid:flex-col justify-between gap-14">
          <ProductImgs mainImage={product.mainImageUrl || ""} images={product.imagesUrl || [""]}/>
          <ProductInfo product={product}/>
        </div>
      </div>
    );
};

export default ProductDetailsPage;
