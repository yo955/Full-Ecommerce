import ProductItem from "@/components/common/products/Product";
import CustomSwiper from "@/components/common/Swiper/Swiper";
import useGetProducts from "@/hooks/useGetProducts";

const Advertise = () => {
  const { data: products } = useGetProducts();
  return (
    <div className="w-3/4">
      {products && (
        <CustomSwiper
          data={products}
          Card={ProductItem}
          ShowPagination={true}
        />
      )}
    </div>
  );
};

export default Advertise;
