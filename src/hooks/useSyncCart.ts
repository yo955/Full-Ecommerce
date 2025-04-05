import useAddToCart from "@/hooks/useAddToCart";
import {SyncCart} from "@/utils/helpers/SyncCart";

export default function UseSyncCart() {
  const {mutate} = useAddToCart();
  return () => SyncCart(mutate)
}
