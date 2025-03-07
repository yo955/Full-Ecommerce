"use client";
import styles from "@/styles/cart/Cart.module.scss";
import CartRow from "./CartRow";
import CartHeadRow from "./CartHeadRow";
import CustomButton from "@/components/common/ui/Button";
import CartTotal from "./CartTotal";
import PathLinks from "@/components/common/ui/PathLinks";
import {CartItem} from "@/types/CartTypes";

const CartPage = () => {
  const cartItems: CartItem[] = [
    {
      product: {
        ProductId: "f7e5e606-13e8-42e9-82c0-048be7a1036b",
        Name: "Licensed Granite Shirt",
        Price: 44.41,
        ShortDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        Stock: 93,
        MainImageUrl: "https://tahaapi.runasp.net/Products/28.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "777e0e2f-f9a9-4599-9847-0949fee55e1a",
        Name: "Refined Rubber Table",
        Price: 359.61,
        ShortDescription: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        Stock: 37,
        MainImageUrl: "https://tahaapi.runasp.net/Products/23.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "ff4bad85-6840-4b5c-b0d9-098528078cc4",
        Name: "Fantastic Frozen Table",
        Price: 924.02,
        ShortDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        Stock: 3,
        MainImageUrl: "https://tahaapi.runasp.net/Products/20.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "8dcb8af8-1a1e-4b9a-8651-0fc45d3c5491",
        Name: "Awesome Frozen Mouse",
        Price: 276.73,
        ShortDescription: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        Stock: 69,
        MainImageUrl: "https://tahaapi.runasp.net/Products/17.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "9efbbc6e-2d2b-4bae-bf47-0ca44e2cf49d",
        Name: "Unbranded Fresh Mouse",
        Price: 582.28,
        ShortDescription: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        Stock: 28,
        MainImageUrl: "https://tahaapi.runasp.net/Products/26.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "1ae2e7fc-4591-45cc-92ba-100f8307ff54",
        Name: "Rustic Soft Car",
        Price: 673.34,
        ShortDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        Stock: 44,
        MainImageUrl: "https://tahaapi.runasp.net/Products/28.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "18b03b1d-1452-49b2-981d-1024d741f6b3",
        Name: "Handcrafted Fresh Table",
        Price: 904.82,
        ShortDescription: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        Stock: 42,
        MainImageUrl: "https://tahaapi.runasp.net/Products/27.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "e880b0f7-1aee-4213-9ce5-143a75f0c56a",
        Name: "Intelligent Metal Chicken",
        Price: 741.58,
        ShortDescription: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        Stock: 54,
        MainImageUrl: "https://tahaapi.runasp.net/Products/22.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "b43c0490-ffef-4670-9816-249df6140e37",
        Name: "Handcrafted Soft Fish",
        Price: 213.63,
        ShortDescription: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        Stock: 25,
        MainImageUrl: "https://tahaapi.runasp.net/Products/24.jpg"
      }, quantity: 0, subtotal: 0
    },
    {
      product: {
        ProductId: "22aeac84-0ec5-4eb7-808b-2798f2c99e27",
        Name: "Intelligent Granite Mouse",
        Price: 941.96,
        ShortDescription: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        Stock: 4,
        MainImageUrl: "https://tahaapi.runasp.net/Products/12.jpg"
      }, quantity: 0, subtotal: 0
    }
  ];
  return (
    <div className="my-28 mx-auto w-[80%] ">
      <div className="flex gap-2 m-0 pb-10 text-slate-400">
        <PathLinks titles={["Cart"]}/>
      </div>
      <div>
        <table className={styles.catTable}>
          <thead className="mb-10">
          <CartHeadRow/>
          </thead>
          <tbody>
          <CartRow cartItems={cartItems}/>
          </tbody>
        </table>
        <div className=" flex justify-between">
          <button className={styles.cartBtn}>Return To Shop</button>
          <button className={styles.cartBtn}>Update Cart</button>
        </div>
      </div>
      <div className="mt-16 flex justify-between">
        <div>
          <form className="flex gap-3">
            <input
              className="couponCode"
              type="text"
              name="text"
              placeholder="Coupon Code"
            />
            <CustomButton className="w-[210px] h-[55px]" type="submit">
              Apply Coupon
            </CustomButton>
          </form>
        </div>
        <div className="border-2 border-black py-5 px-7 w-[470px] text-center  ">
          <h2 className="my-1 text-start">Cart Total</h2>
          <CartTotal/>
          <CustomButton className="text-[12px] py-2 px-7 !mt-4 ">
            Process to checkout
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
