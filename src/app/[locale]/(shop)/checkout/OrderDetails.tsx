import CustomButton from "@/components/common/ui/Button";
import Image from "next/image";
import React from "react";

const OrderDetails = () => {
  return (
    <section className="py-8 px-7 w-fit sm:w-[500px] custom-mid:w-[300px]  ">
      <article className="sm:w-[400px] custom-mid:w-[280px]">
        <div className={'flex flex-col gap-2'}>
          <p className="flex justify-between">
            product1 <span>222$</span>
          </p>
          <p className="flex justify-between">
            product2 <span>222$</span>
          </p>
        </div>
        <div className="flex justify-between pb-2 mt-3 border-b-2">
          <p>subTotal:</p>
          <p> 222.$</p>
        </div>
        <div className="flex justify-between pb-2 mt-3 border-b-2">
          <p>Shipping:</p>
          <p> free</p>
        </div>
        <div className="flex justify-between pb-2 mt-3 border-b-2">
          <p>Total:</p>
          <p> 2323$</p>
        </div>
        <div className="mt-4 sm:w-[500px] custom-mid:w-[300px]">
          <form action="" className="flex flex-col gap-3">
            <div className="flex  items-center gap-2">
              <input
                type="radio"
                name="payment"
                id="cash"
                className="w-4 h-4 accent-black cursor-pointer"
              />
              <label htmlFor="payment" className="text-sm ">
                {" "}
                Bank
              </label>
              <div className="flex gap-1 ml-16">
                <Image
                  src="/images/payment/1.png"
                  alt="cash-payment"
                  width={1000}
                  height={500}
                  className="w-6"
                />
                <Image
                  src="/images/payment/2.png"
                  alt="cash-payment"
                  width={1000}
                  height={500}
                  className="w-6"
                />
                <Image
                  src="/images/payment/3.png"
                  alt="cash-payment"
                  width={1000}
                  height={500}
                  className="w-6"
                />
                <Image
                  src="/images/payment/4.png"
                  alt="cash-payment"
                  width={1000}
                  height={500}
                  className="w-6"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                id="cash"
                className="w-4 h-4 accent-black cursor-pointer"
              />
              <label htmlFor="payment" className="text-sm ">
                {" "}
                Cash on delivery
              </label>
            </div>
          </form>
          <div className="mt-7">
            <form className="flex gap-3 custom-mid:flex-col">
              <input
                className="couponCode"
                type="text"
                name="text"
                placeholder="Coupon Code"
              />
              <CustomButton
                className="w-[210px] h-[45px] custom-sm:w-[120px] custom-sm:text-sm"
                type="submit"
              >
                Apply Coupon
              </CustomButton>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <CustomButton
            className="w-[210px] h-[55px] custom-sm:w-[120px] custom-sm:text-sm"
            type="submit"
          >
            Place Order
          </CustomButton>
        </div>
      </article>
    </section>
  );
};

export default OrderDetails;
