import {useState} from "react";
import styles from "@/styles/cart/Cart.module.scss";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";
import {CartItem} from "@/types/CartTypes";
import Image from "next/image";

// interface TableDataTypes {
//   title: string;
//   price: number;
//   quantity: number;
//   subtotal: number;
// }
//
// const initialTableData: TableDataTypes[] = [
//   {
//     title: "product1",
//     price: 600,
//     quantity: 1,
//     subtotal: 1200,
//   },
//   {
//     title: "product2",
//     price: 600,
//     quantity: 1,
//     subtotal: 1200,
//   },
// ];
type CartRowProps = {
  cartItems: CartItem[];
}
const CartRow: React.FC<CartRowProps> = ({cartItems}) => {
  const [tableData, setTableData] = useState<CartItem[]>(cartItems);

  function increaseQuantity(index: number) {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      const newItem = {...updatedData[index]};

      newItem.quantity = newItem.quantity === undefined ? 1 : newItem.quantity + 1;
      newItem.subtotal = newItem.product.Price * newItem.quantity;

      updatedData[index] = newItem;

      return updatedData;
    });
  }

  function decreaseQuantity(index: number) {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      const newItem = {...updatedData[index]};

      if (newItem.quantity && newItem.quantity > 0) {
        newItem.quantity -= 1;
        newItem.subtotal = newItem.product.Price * newItem.quantity;
      }
      updatedData[index] = newItem;
      return updatedData;
    });
  }

  return (
    <>
      {tableData.map((item, index) => (
        <tr key={index} className={styles.tableRow}>
          <td><Image className='flex justify-center items-center mx-auto m-3' src={item.product.MainImageUrl}
                     alt={item.product.Name} width={70} height={70}/></td>
          <td className={styles.columns}>{item.product.Name}</td>
          <td className={styles.columns}>${item.product.Price}</td>
          <td className={styles.columns}>
            <div
              className="flex gap-x-2 justify-between items-center mt-1 px-3 py-4 text-base border w-[60px] h-11 border-gray-800 focus:border-black sm:text-sm rounded-md">
              <p className="">{item.quantity}</p>
              <div className="flex flex-col justify-center gap-1">
                <button onClick={() => increaseQuantity(index)}>
                  <IoIosArrowUp/>
                </button>
                <button onClick={() => decreaseQuantity(index)}>
                  <IoIosArrowDown/>
                </button>
              </div>
            </div>
          </td>
          <td className={styles.columns}>${item.subtotal}</td>
        </tr>
      ))}
    </>
  );
};

export default CartRow;