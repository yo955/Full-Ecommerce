"use client";
import PathLinks from "@/components/common/ui/PathLinks";
import React, { useRef } from "react";
import BillingForm from "./BillingForm";
import OrderDetails from "./OrderDetails";
import ProtectedRoute from "@/hooks/ProtectedRoutes/useProtectedRoute";



const CheckoutPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // check validation for form before request
    }
  };

  return (
    <ProtectedRoute>
      <section className="sm:w-[80%] my-10 mx-auto">
        <PathLinks titles={["My Account", "product", "View Cart", "Checkout"]} />
        <article className="flex justify-between items-center gap-6 custom-handling:flex-col">
          <BillingForm formRef={formRef} />
          <OrderDetails handleFormSubmit={handleFormSubmit} />
        </article>
      </section>
    </ProtectedRoute>

  );
};

export default CheckoutPage;
