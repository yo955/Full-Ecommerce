import React from "react";

const CartTotal = () => {
  return (
    <>
      <div className="flex justify-between pb-2 mt-3 border-b-2">
        <p>subTotal:</p>
        <p> $1750</p>
      </div>
      <div className="flex justify-between pb-2 mt-3 border-b-2">
        <p>Shoping:</p>
        <p> free</p>
      </div>
      <div className="flex justify-between pb-2 mt-3 border-b-2">
        <p>Totol:</p>
        <p> $2000</p>
      </div>
    </>
  );
};

export default CartTotal;
