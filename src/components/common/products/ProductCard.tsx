"use client";

import Image from "next/image";
import { useMemo } from "react";
import { ShoppingCart, Heart, Eye, Check, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Rate from "./Rate";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { Product } from "@/types/cart/Product";
import { Link } from "@/i18n/routing";

interface ProductCardProps {
  product: Product;
  mode?: "default" | "wishlist";
}

const ProductCard = ({ product, mode = "default" }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cart);
  const addToWishList = useWishListStore((state) => state.addToWishList);
  const removeFromWishList = useWishListStore((state) => state.removeFromWishList);
  const wishList = useWishListStore((state) => state.wishList);

  const isInCart = useMemo(
    () => cartItems.some((item) => item.product.productId === product.productId),
    [cartItems, product.productId]
  );

  const isInWishList = useMemo(
    () => wishList.some((item) => item.product.productId === product.productId),
    [wishList, product.productId]
  );

  return (
    <Card className="w-full max-w-[300px] bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden transition-transform duration-300 relative hover:-translate-y-1.5">
      {/* Image Wrapper */}
      <div className="relative w-full h-48">
        <Image
          src={product.mainImageUrl}
          alt={product.name}
          fill
          className="object-contain border-b border-gray-200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badge */}
        <Badge className="absolute top-3 left-3 bg-rose-600 text-white rounded-xl px-3 py-1 text-[12px] font-medium">
          Sale
        </Badge>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {mode === "default" ? (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => !isInWishList && addToWishList(product)}
              disabled={isInWishList}
              className={`rounded-full p-1.5 transition ${isInWishList
                  ? "bg-rose-100 text-rose-600"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Heart size={18} />
            </Button>
          ) : (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => removeFromWishList(product.productId)}
              className="rounded-full p-1.5 bg-gray-50 text-[#DB4444] hover:text-gray-50 hover:bg-[#b01e1ed7] transition"
            >
              <Trash2 size={18} />
            </Button>
          )}

          <Link href={`/products/${product.productId}`}>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full p-1.5 bg-white text-gray-700 hover:bg-gray-100"
            >
              <Eye size={18} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Details */}
      <CardHeader className="px-4 pt-4 pb-0">
        <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-[14px] text-gray-600 mb-2">${product.price}</p>
      </CardHeader>

      <CardContent className="px-4 pb-4 flex flex-col gap-3">
        <Rate />
        <Button
          onClick={() => !isInCart && addToCart({ product, quantity: 1 })}
          disabled={isInCart}
          className={`w-full h-10 rounded-md text-[14px] font-medium flex items-center justify-center gap-2 transition
            ${isInCart
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-black hover:bg-gray-800 text-white"
            }
          `}
        >
          {isInCart ? (
            <>
              <Check size={18} /> Added
            </>
          ) : (
            <>
              <ShoppingCart size={18} /> Add to Cart
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
