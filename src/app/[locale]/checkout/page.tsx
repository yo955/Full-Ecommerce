import PathLinks from "@/components/common/ui/PathLinks";
import React from "react";
import BillingForm from "./BillingForm";
import OrderDetails from "./OrderDetails";

const page = () => {
  return (
    <section className="sm:w-[80%] my-10 mx-auto">
      <PathLinks titles={["My Account", "product", "View Cart", "Checkout"]} />
      <article className="flex justify-between gap-6">
        <BillingForm />
        <OrderDetails />
      </article>
    </section>
  );
};

export default page;
