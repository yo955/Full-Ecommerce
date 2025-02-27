import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/cart/Cart.module.scss";
// interface cartColumnProp {
//   children: React.ReactNode;
//   className?: string;
// }
interface tableDataTypes {
  title: string;
  price: number;
  quantity: string;
  subbtotal: number;
}
const tableData: tableDataTypes[] = [
  {
    title: "product1",
    price: 600,
    quantity: "counter",
    subbtotal: 1200,
  },
  {
    title: "product2",
    price: 600,
    quantity: "counter",
    subbtotal: 1200,
  },
];
const CartColumn = () => {
  const [quantity, setQuantity] = useState(1);
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  }
  return (
    <>
      {tableData.map((i, index) => {
        return (
          <tr key={index} className={styles.tableRow}>
            <td className={styles.columns}>{i.title}</td>
            <td className={styles.columns}>${i.price}</td>
            <td className={styles.columns}>
              <div className="flex gap-x-2 justify-between items-center mt-1  px-3 py-4 text-base border w-[60px] h-11 border-gray-800   focus:border-black sm:text-sm rounded-md">
                <p className="">{quantity}</p>
                <div className="flex flex-col justify-center gap-3 ">
                  <button onClick={increaseQuantity}>
                    <Image
                      src="/images/up.png"
                      alt="icon"
                      width={1000}
                      height={43}
                      className="object-contain w-2"
                    />
                  </button>
                  <button onClick={decreaseQuantity}>
                    <Image
                      src="/images/down.png"
                      alt="icon"
                      width={1000}
                      height={43}
                      className="object-contain w-2"
                    />
                  </button>
                </div>
              </div>
            </td>
            <td className={styles.columns}>${i.subbtotal}</td>
          </tr>
        );
      })}
    </>
  );
};

export default CartColumn;
