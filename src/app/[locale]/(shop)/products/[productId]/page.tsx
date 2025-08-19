"use client";

import PathLinks from "@/components/common/PathLinks";
import ProductImgs from "./ProductImgs";
import ProductInfo from "./ProductInfo";
import useGetProduct from "@/hooks/Product/useGetProduct";
import Loading from "@/loading/Loading";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  const { productId }: { productId: string } = useParams();

  const { data: product, isLoading } = useGetProduct(productId);

  if (isLoading) return <Loading />;

  if (!product) return null;

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <PathLinks titles={["product"]} />

      <div className="mt-8 bg-white  rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10 p-6">
          {/* صور المنتج */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <ProductImgs
              mainImage={product.mainImageUrl || ""}
              images={product.imagesUrl || [""]}
            />
          </div>

          {/* معلومات المنتج */}
          <div className="w-full md:w-1/2">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
