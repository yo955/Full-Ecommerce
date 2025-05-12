"use client"
import useGetProducts from "@/hooks/Product/useGetProducts";
import CardDescription from "@/components/common/products/CardDescription";
import Loading from "@/loading/Loading";
import {useSearchParams} from "next/navigation";
import useSearchByQuery from "@/hooks/Product/useSearchByQuery";

const ProductsPage = () => {
  const params = useSearchParams();
  const check = params ? useSearchByQuery : useGetProducts
  const {data: Products, isLoading} = params ? check(`${params}`) : check(`${params}`);

  if (isLoading) return <Loading/>

  if (Products?.length == 0) {
    return <div className='text-red-500 text-xl h-screen flex justify-center items-center'>No Product Found</div>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 mt-10'>
      {
        Products?.map((Product) => (
          <div key={Product.productId}>
            <CardDescription  {...Product}/>
          </div>
        ))}
    </div>
  )
}
export default ProductsPage;