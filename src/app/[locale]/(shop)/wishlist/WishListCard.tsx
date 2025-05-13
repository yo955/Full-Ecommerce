import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProductItem/ProductItem.module.scss"; // Import the SCSS module
import {Product} from "@/types/cart/Product";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import {useCartStore} from "@/stores/cart/cartStore";
import {useWishListStore} from "@/stores/wishlist/WishListStore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard = (Product: Product) => {
  console.log('product' + Product)
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromWishList = useWishListStore((state) => state.removeFromWishList)
  return (
    <div className={`${styles.productItem} `}>
      <Link href="#">
        <IconButton aria-label="fingerprint" color="error" className={styles.wishlistButton}
                    onClick={() => removeFromWishList(Product.productId)}>
          <DeleteIcon/>
        </IconButton>
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
        <form>
          <button
            onClick={() => addToCart({product: Product, quantity: 1})}
            className='w-full h-10 bg-black text-white flex justify-center items-center gap-2 mt-2  '
          >
            <ShoppingCartIcon/>
            Add to Cart
          </button>
        </form>
        <div className={styles.productDetails}>
          <h3>{Product.name}</h3>
          <p className='!text-red-600'>${Product.price}</p>
        </div>
      </Link>
    </div>
  )
    ;
};

export default ProductCard;