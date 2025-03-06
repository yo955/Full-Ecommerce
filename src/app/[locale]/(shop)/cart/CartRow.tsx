import { useState } from "react";
import styles from "@/styles/cart/Cart.module.scss";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

interface TableDataTypes {
  title: string;
  price: number;
  quantity: number;
  subtotal: number;
}

const initialTableData: TableDataTypes[] = [
  {
    title: "product1",
    price: 600,
    quantity: 1,
    subtotal: 1200,
  },
  {
    title: "product2",
    price: 600,
    quantity: 1,
    subtotal: 1200,
  },
];

const CartColumn = () => {
  const [tableData, setTableData] = useState<TableDataTypes[]>(initialTableData);

  function increaseQuantity(index: number) {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      const newItem = {...updatedData[index] };

      newItem.quantity += 1;
      newItem.subtotal = newItem.price * newItem.quantity;

      updatedData[index] = newItem;

      return updatedData;
    });
  }

  function decreaseQuantity(index: number) {
    setTableData((prevData) => {
      const updatedData = [...prevData];
      const newItem = {...updatedData[index]};

      if (newItem.quantity > 0) {
        newItem.quantity -= 1;
        newItem.subtotal = newItem.price * newItem.quantity;
      }
      updatedData[index] = newItem;
      return updatedData;
    });
  }

  return (
    <>
      {tableData.map((item, index) => (
        <tr key={index} className={styles.tableRow}>
          <td className={styles.columns}>{item.title}</td>
          <td className={styles.columns}>${item.price}</td>
          <td className={styles.columns}>
            <div className="flex gap-x-2 justify-between items-center mt-1 px-3 py-4 text-base border w-[60px] h-11 border-gray-800 focus:border-black sm:text-sm rounded-md">
              <p className="">{item.quantity}</p>
              <div className="flex flex-col justify-center gap-1">
                <button onClick={() => increaseQuantity(index)}>
                  <IoIosArrowUp/>
                </button>
                <button onClick={() => decreaseQuantity(index)}>
                  <IoIosArrowDown />
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

export default CartColumn;