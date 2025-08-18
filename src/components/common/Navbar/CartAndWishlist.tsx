import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/stores/cart/cartStore';
import { useWishListStore } from '@/stores/wishlist/WishListStore';
import { Heart, ShoppingCart } from 'lucide-react'

const CartAndWishlist = () => {
    const cartCount = useCartStore((state) => state.cart || []);
    const wishlistCount = useWishListStore((state) => state.wishList || []);

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-110"
            >
                <Heart className="h-5 w-5" />
                {wishlistCount.length > 0 && (
                    <Badge
                        variant="destructive"
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 animate-pulse"
                    >
                        {wishlistCount.length}
                    </Badge>
                )}
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-110"
            >
                <ShoppingCart className="h-5 w-5" />
                {cartCount.length > 0 && (
                    <Badge
                        variant="destructive"
                        className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 animate-pulse"
                    >
                        {cartCount.length}
                    </Badge>
                )}
            </Button>
        </>
    )
}

export default CartAndWishlist