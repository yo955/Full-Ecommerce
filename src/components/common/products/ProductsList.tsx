"use client";
import useGetProducts from "@/hooks/useGetProducts";
import Loading from "@/loading/Loading";
import ProductItem from "./Product";

const ProductsList = () => {
  const { isLoading, data: products, error, isError } = useGetProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="text-red-500">Error: {error?.message}</div>;
  }

  return products?.map((product) => (
    <div key={product.ProductId} className="product">
      <ProductItem {...product} />
    </div>
  ));
};

export default ProductsList;
