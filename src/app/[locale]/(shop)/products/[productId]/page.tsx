"use client";
import ProductImgs from "./ProductImgs";
import ProductInfo from "./ProductInfo";
import useGetProduct from "@/hooks/Product/useGetProduct";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import RelatedItemsSection from "./RelatedItemsSection";

const ProductDetailsPage = () => {
  const { productId }: { productId: string } = useParams();

  const { data: product, isLoading } = useGetProduct(productId);

  if (!product && !isLoading) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/account">Account</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {isLoading ? "Loading..." : product?.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Main Product Section */}
        {isLoading ? (
          <SectionSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <ProductImgs
              mainImage={product?.mainImageUrl || ""}
              images={product?.imagesUrl || []}
            />

            {/* Product Info */}
            {product && <ProductInfo product={product} />}
          </div>
        )}

        {/* Related Items Section */}
        <RelatedItemsSection />

      </div>
    </div>
  );
};

export default ProductDetailsPage;
