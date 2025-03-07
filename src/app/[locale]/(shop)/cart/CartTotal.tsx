import React from "react";

type CartTotalProps = {
  total: number;
}
const CartTotal = ({total}: CartTotalProps) => {
  return (
    <>
      <div className="flex justify-between pb-2 mt-3 border-b-2">
        <p>subTotal:</p>
        <p> ${total.toFixed(2)}</p>
      </div>
      <div className="flex justify-between pb-2 mt-3 border-b-2">
        <p>Shipping:</p>
        <p> free</p>
      </div>
      <div className="flex justify-between pb-2 mt-3 border-b-2">
        <p>Total:</p>
        <p> ${total.toFixed(2)}</p>
      </div>
    </>
  );
};

export default CartTotal;
