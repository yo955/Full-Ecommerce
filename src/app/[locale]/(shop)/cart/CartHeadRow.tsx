import styles from "@/styles/cart/Cart.module.scss";
const headTitles = ["image","product", "price", "Quantity", "subtotal","remove"];
const CartHeadRow = () => {
  return (
    <>
      <tr className={styles.tableRow}>
        {headTitles.map((i, index) => (
          <th key={index} className={`${styles.headColumns} ${styles.columns}`}>
            {i}
          </th>
        ))}
      </tr>
    </>
  );
};

export default CartHeadRow;
