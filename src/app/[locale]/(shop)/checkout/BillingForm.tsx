"use client";
import CustomField from "@/components/common/Formik/CustomField";
import {formDataProp} from "@/types/formData";
// import { Checkbox } from "@mui/material";
import {Field, Form, Formik} from "formik";
import React from "react";
import {useCreateAddress} from "@/hooks/checkout/useCreateAddress";
import {AddressType} from "@/types/AddressType";

const fieldData: formDataProp[] = [
  {
    name: "name",
    className: "inputs",
    type: "text",
    placeholder: "Name",
  },
  {
    name: "state",
    className: "inputs",
    type: "text",
    placeholder: "Governorate",
  },
  {
    name: "street",
    className: "inputs",
    type: "text",
    placeholder: "Street",
  },
  {
    name: "country",
    className: "inputs",
    type: "text",
    placeholder: "Country",
  },
  {
    name: "city",
    className: "inputs",
    type: "text",
    placeholder: "City",
  },
  {
    name: "phone",
    className: "inputs",
    type: "number",
    placeholder: "Phone Number",
  },
  {
    name: "zipCode",
    className: "inputs",
    type: "number",
    placeholder: "Zip Code",
  },
];

const initialValues: AddressType = {
  id: "",
  name: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: ""
};
const BillingForm = () => {
  const {mutate} = useCreateAddress()
  const FormSubmit = (value: AddressType) => {
    mutate(value)
    console.log(value);
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
