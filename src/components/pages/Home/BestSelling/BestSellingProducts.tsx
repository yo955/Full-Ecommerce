'use client';
import ProductCard from "@/components/common/products/ProductCard";
import ProductSkeleton from "@/components/common/products/ProductSkeleton";
import useGetProducts from "@/hooks/Product/useGetProducts";

const BestSellingProducts = () => {
  const { data: products, isLoading } = useGetProducts();
  if (isLoading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Products List */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {products?.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.productId} />
        ))}
      </div>
    </>
  );
};

export default BestSellingProducts;
