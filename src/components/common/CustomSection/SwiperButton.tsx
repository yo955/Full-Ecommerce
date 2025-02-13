import CustomSwiper from "../Swiper/Swiper";
import CustomButton from "../ui/Button";

const SwiperButton = () => {
  return (
    <div className="">
      <CustomSwiper />
      <CustomButton className=" !text-base !my-12 !w-[234px]  !h-[56px]  !border !mx-auto !flex !justify-center !items-center">
        View All Products
      </CustomButton>
    </div>
  );
};

export default SwiperButton;
