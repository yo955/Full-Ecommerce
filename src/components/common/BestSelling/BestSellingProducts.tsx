"use client";
import useGetProducts from "@/hooks/useGetProducts";
import Loading from "@/loading/Loading";
import ProductCard from "../products/ProductCard";
import CustomButton from "../ui/Button";

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
    <div className="w-full">
      <CustomButton className="!flex !ml-auto w-[159px] h-[56px]">
        View All
      </CustomButton>
      <div className="flex mt-10">
        {products?.slice(0, 4).map((product) => (
          <div key={product.ProductId} className="product">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
