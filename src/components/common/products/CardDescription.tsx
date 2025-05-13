"use client";
import {Link} from "@/i18n/routing";
import {Product} from "@/types/cart/Product";
import Image from "next/image";
import {useCartStore} from "@/stores/cart/cartStore";
import {useWishListStore} from "@/stores/wishlist/WishListStore";

const CardDescription = (Product: Product) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishList = useWishListStore((state) => state.addToWishList);

  return (
    <div className="group relative block overflow-hidden">
      <button
        onClick={() => addToWishList(Product)}
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-2.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <Link href={`/products/${Product.productId}`}>
        <Image
          src={Product.mainImageUrl}
          alt={Product.name}
          width={2000}
          height={2000}
          priority={true}
          className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
        />
      </Link>

      <div className="relative border border-gray-100 bg-white p-6">
        <p className="text-gray-700">
          ${Product.price}
        </p>

        <h3 className="mt-1.5 text-lg font-medium text-gray-900">{Product.name}</h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700 h-12">
          {Product.shortDescription}
        </p>

        <form className="mt-4 flex gap-4">
          <button
            onClick={() => addToCart({product: Product, quantity: 1})}
            className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
          >
            Add to Cart
          </button>

          <button
            type="button"
            className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </form>
      </div>
    </div>
  )
}
export default CardDescription;