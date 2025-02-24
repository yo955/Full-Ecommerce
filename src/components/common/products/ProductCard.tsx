import Image from "next/image";
import Link from "next/link";
import Rate from "./Rate";
import { Product } from "@/types/Product";
import styles from "@/styles/ProductItem/ProductItem.module.scss"; // Import the SCSS module

const ProductCard = (Product: Product) => {
  return (
    <div className={styles.productItem}>
      <Link href="#">
        <button className={styles.wishlistButton}>
          <span className="sr-only">Wishlist</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <span className={styles.newBadge}>New</span>
        <div className={styles.imageContainer}>
          <Image
            src={Product.MainImageUrl}
            alt="product-img"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <form>
          <button className={styles.addToCartButton}>Add to Cart</button>
        </form>
        <div className={styles.productDetails}>
          <h3>{Product.Name}</h3>
          <p>{Product.Price}</p>
          <Rate />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
