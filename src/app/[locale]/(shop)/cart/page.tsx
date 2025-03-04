"use client";
import styles from "@/styles/cart/Cart.module.scss";
import CartRow from "./CartRow";
import CartHeadRow from "./CartHeadRow";
import CartBtns from "./CartBtns";
import { Field, Form, Formik } from "formik";
import CustomButton from "@/components/common/ui/Button";
import CartTotal from "./CartTotal";
import PathLinks from "@/components/common/ui/PathLinks";


const CartPage = () => {
  const initialValues = {
    CouponCode: "",
  };
  function submit() {
    console.log("code Submitted");
  }
  return (
    <div className="my-28 mx-auto w-[80%] ">
      <div className="flex gap-2 m-0 pb-10 text-slate-400">
        <PathLinks titles={["Cart"]} />
      </div>
      <div>
        <table className={styles.catTable}>
          <thead className="mb-10">
            <CartHeadRow />
          </thead>
          <tbody>
            <CartRow />
          </tbody>
        </table>
        <div className=" flex justify-between">
          <CartBtns title="Return To Shop" />
          <CartBtns title="Update Cart" />
        </div>
      </div>
      <div className="mt-16 flex justify-between">
        <div>
          <Formik initialValues={initialValues} onSubmit={submit}>
            <Form className="flex gap-3">
              <Field
                className="couponCode"
                type="text"
                name="text"
                placeholder="Coupon Code"
              />
              <CustomButton className="w-[210px] h-[55px]" type="submit">
                Apply Coupon
              </CustomButton>
            </Form>
          </Formik>
        </div>
        <div className="border-2 border-black py-5 px-7 w-[470px] text-center">
          <h2 className="my-1 text-start">Cart Total</h2>
          <CartTotal />
          <CustomButton className="text-[12px] py-2 px-7 mt-4 ">
            Process to checkout
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
