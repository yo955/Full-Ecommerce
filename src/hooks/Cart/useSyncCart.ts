import useAddToCart from "@/hooks/Cart/useAddToCart";
import {SyncCart} from "@/utils/helpers/SyncCart";

export default function UseSyncCart() {
  const {mutate} = useAddToCart();
  return () => SyncCart(mutate)
}
