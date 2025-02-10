"use client";
import useGetProducts from "@/hooks/useGetProducts";
import Loading from "@/utils/loading/Loading";
import { productType } from "@/types/Product";
const Products = () => {
  const { isLoading, data: products, error, isError } = useGetProducts();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>error: {error?.message}</div>;
  }
  return (
    <div>
      {products?.map((product: productType) => (
        <div key={product.ProductId}>{product.Name}</div>
      ))}
    </div>
  );
};

export default Products;
