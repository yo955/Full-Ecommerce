import styles from "@/styles/cart/Cart.module.scss";
interface CartBtnsProps {
    title: string;
  }
const CartBtns: React.FC<CartBtnsProps>   = ({title}) => {
  return (
    <>
      <button className={styles.cartBtn}>{title}</button>
    </>
  );
};

export default CartBtns;
