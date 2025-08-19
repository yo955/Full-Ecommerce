"use client";
import useGetProducts from "@/hooks/Product/useGetProducts";
import Loading from "@/loading/Loading";
import ProductCard from "../products/ProductCard";
import { Button } from "@/components/ui/button";

const BestSellingProducts = () => {
  const {
    isLoading,
    data: products,
    error,
    isError,
  } = useGetProducts({ pageSize: 4 });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error?.message}</div>;
  }

  return (
    <div className="w-full ">
      <Button className="!flex !ml-auto w-[159px] h-[56px]">
        View All
      </Button>
      <div className="flex mt-10">
        {products?.slice(0, 4).map((product) => (
          <div key={product.productId} className="product">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
