"use client";
import Image from "next/image";
import Rate from "./Rate";
import styles from "@/styles/ProductItem/ProductItem.module.scss"; // Import the SCSS module
import {useCartStore} from "@/stores/cart/cartStore";
import {Product} from "@/types/cart/Product";
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useWishListStore} from "@/stores/wishlist/WishListStore";
import {Link} from "@/i18n/routing";


const ProductCard = (Product: Product) => {

  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishList = useWishListStore((state) => state.addToWishList);


  return (
    <div className={styles.productItem}>
      <div>
        <IconButton aria-label="fingerprint" color="error" className={styles.wishlistButton}
                    onClick={() => addToWishList(Product)}>
          <FavoriteBorderIcon/>
        </IconButton>
        <Link href={`/products/${Product.productId}`}>
          <IconButton aria-label="fingerprint" color="error" className={styles.EyeButton}
          >
            <VisibilityIcon/>
          </IconButton>
        </Link>
        <span className={styles.newBadge}>New</span>
        <div className={styles.imageContainer}>
          <Image
            src={Product.mainImageUrl}
            alt="product-img"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
          <button
            onClick={() => addToCart({product: Product, quantity: 1})}
            className={styles.addToCartButton}
          >
            Add to Cart
          </button>
        <div className={styles.productDetails}>
          <h3>{Product.name}</h3>
          <p>{Product.price}</p>
          <Rate/>
        </div>
      </div>
    </div>
    
  )
    ;
};

export default ProductCard;