import { FaArrowUpLong } from "react-icons/fa6";
import styles from "@/styles/swiper/CustomSwiper.module.scss";
const UpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={`${styles.customSwiperButton} w-11 h-11 rounded-full ml-auto fixed bottom-10 right-10`}
    >
      <FaArrowUpLong />
    </div>
  );
};

export default UpBtn;
