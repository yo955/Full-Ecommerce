"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/cart/cartStore";
import styles from "@/styles/cart/Cart.module.scss";
import { CartItem } from "@/types/cart/CartTypes";
import { useMemo } from "react";

// shadcn button
import { Button } from "@/components/ui/button";

// lucide icons
import { Trash2, ChevronUp, ChevronDown } from "lucide-react";

type CartRowProps = {
  cartItems: CartItem[];
};

const CartRow = ({ cartItems }: CartRowProps) => {
  const store = useCartStore();
  const removeFromCart = useMemo(() => store.removeFromCart, [store]);
  const updateQuantity = useMemo(() => store.updateQuantity, [store]);

  return (
    <>
      {cartItems.map((item, index) => (
        <tr key={index} className={styles.tableRow}>
          <td>
            <Image
              className="flex justify-center items-center mx-auto m-3 custom-sm:w-[50px]"
              src={item.product.mainImageUrl}
              alt={item.product.name || "product"}
              width={70}
              height={70}
            />
          </td>
          <td className={styles.columns}>{item.product.name}</td>
          <td className={styles.columns}>${item.product.price}</td>
          <td className={styles.columns}>
            <div className="flex gap-x-2 justify-between items-center mt-1 px-3 py-4 text-base border w-[60px] h-11 border-gray-800 focus:border-black sm:text-sm rounded-md">
              <p>{item.quantity}</p>
              <div className="flex flex-col justify-center gap-1">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.product.productId,
                      (item.quantity ?? 1) + 1
                    )
                  }
                >
                  <ChevronUp size={16} />
                </button>
                <button
                  onClick={() =>
                    item.quantity && item.quantity > 1
                      ? updateQuantity(
                          item.product.productId,
                          item.quantity - 1
                        )
                      : null
                  }
                >
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </td>
          <td className={styles.columns}>
            ${(item.product.price * (item.quantity ?? 1)).toFixed(2)}
          </td>
          <td className={styles.columns}>
            <Button
              onClick={() => removeFromCart(item.product.productId)}
              variant="destructive"
              size="icon"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartRow;
