"use client"
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useCartStore} from "@/stores/cart/cartStore";
import styles from "@/styles/cart/Cart.module.scss";
import {CartItem} from "@/types/CartTypes";

import {useMemo} from "react";

type CartRowProps = {
  cartItems: CartItem[];
};

const CartRow = ({cartItems}: CartRowProps) => {

  const store = useCartStore();

  const removeFromCart = useMemo(() => store.removeFromCart, [store]);
  const updateQuantity = useMemo(() => store.updateQuantity, [store]);
  return (
    <>
      {cartItems.map((item, index) => (
        <tr key={index} className={styles.tableRow}>
          <td>
            <Image
              className="flex justify-center items-center mx-auto m-3"
              src={item.product.MainImageUrl}
              alt={item.product.Name}
              width={70}
              height={70}
            />
          </td>
          <td className={styles.columns}>{item.product.Name}</td>
          <td className={styles.columns}>${item.product.Price}</td>
          <td className={styles.columns}>
            <div
              className="flex gap-x-2 justify-between items-center mt-1 px-3 py-4 text-base border w-[60px] h-11 border-gray-800 focus:border-black sm:text-sm rounded-md">
              <p>{item.quantity}</p>
              <div className="flex flex-col justify-center gap-1">
                <button onClick={() => updateQuantity(item.product.ProductId, (item.quantity ?? 1) + 1)}>
                  <IoIosArrowUp/>
                </button>
                <button
                  onClick={() =>
                    item.quantity && item.quantity > 1
                      ? updateQuantity(item.product.ProductId, item.quantity - 1)
                      : null
                  }
                >
                  <IoIosArrowDown/>
                </button>
              </div>
            </div>
          </td>
          <td className={styles.columns}> ${(item.product.Price * (item.quantity ?? 1)).toFixed(2)}</td>
          <td className={styles.columns}>
            <IconButton onClick={() => removeFromCart(item.product.ProductId)} aria-label="delete" size="large"
                        color="error">
              <DeleteIcon fontSize="inherit"/>
            </IconButton>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartRow;
