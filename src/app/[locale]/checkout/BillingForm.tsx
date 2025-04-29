"use client";
import CustomField from "@/components/common/Formik/CustomField";
import { formDataProp } from "@/types/formData";
// import { Checkbox } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";

const fieldData: formDataProp[] = [
  {
    className: "inputs",
    label: "First Name",
    type: "text",
    name: "Fname",
    placeholder: "First Name",
  },
  {
    className: "inputs",
    label: "Company Name",
    type: "text",
    name: "companyName",
    placeholder: "Company Name",
  },
  {
    className: "inputs",
    label: "Street Adress",
    type: "text",
    name: "address",
    placeholder: "Street Adress",
  },
  {
    className: "inputs",
    label: "Appartment, floor, etc. (optional)",
    type: "text",
    name: "appartment",
    placeholder: "Appartment, floor, etc.",
  },
  {
    className: "inputs",
    label: "Town/City",
    type: "text",
    name: "city",
    placeholder: "Town/City",
  },
  {
    className: "inputs",
    label: "Phone Number",
    type: "number",
    name: "phone",
    placeholder: "Phone Number",
  },
  {
    className: "inputs",
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Email Address",
  },
  //   {
  //     className: "",
  //     type: "checkbox",
  //     name: "checked",
  //     placeholder: " ",
  //   },
];

const initialValues = {
  className: "",
  label: "",
  type: "",
  name: "",
  placeholder: " ",
  checked: false,
};
const BillingForm = () => {
  const FormSubmit = () => {
    console.log("submitted");
  };
  return (
    <section>
      <h1 className="text-3xl font-medium mb-5">Billing Details</h1>
      <Formik onSubmit={FormSubmit} initialValues={initialValues}>
        <Form>
          {fieldData.map((input, index) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                <label className="text-[#ababab]">{input.label}</label>
                <CustomField
                  className={`${input.className} border-b-0 bg-[#e0e0e0] rounded-md`}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              </div>
            );
          })}
          <div className="flex gap-1 items-center">
            <Field
              type="checkbox"
              name="checked"
              className="w-4 bg-red-500 text-white"
            />
            <p>save this information for faster check-out next time.</p>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default BillingForm;
