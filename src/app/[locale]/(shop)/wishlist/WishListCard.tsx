import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/cart/Product";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const WishListCard = (product: Product) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromWishList = useWishListStore((state) => state.removeFromWishList);

  return (
    <div className="bg-white  rounded-xl shadow-md overflow-hidden relative hover:shadow-lg transition-all duration-300">
      {/* زر الحذف */}
      <button
        onClick={() => removeFromWishList(product.productId)}
        className="absolute top-3 right-3 text-red-600 hover:text-red-800 z-10"
      >
        <DeleteIcon />
      </button>

      {/* العلامة الجديدة */}
      <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
        New
      </span>

      {/* صورة المنتج */}
      <Link href="#">
        <div className="relative w-full h-48">
          <Image
            src={product.mainImageUrl}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* التفاصيل */}
      <div className="p-4 flex flex-col justify-between h-[160px]">
        <h3 className="text-lg font-semibold text-gray-800  line-clamp-1">
          {product.name}
        </h3>
        <p className="text-red-600 font-bold mt-1">${product.price}</p>

        {/* زر الإضافة للسلة */}
        <button
          onClick={() => addToCart({ product, quantity: 1 })}
          className="mt-3 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ShoppingCartIcon fontSize="small" />
          أضف للسلة
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
