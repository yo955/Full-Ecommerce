"use client";
import CustomField from "@/components/common/Formik/CustomField";
import { formDataProp } from "@/types/formData";
import { Form, Formik } from "formik";
import { useCreateAddress } from "@/hooks/checkout/useCreateAddress";
import { AddressType } from "@/types/AddressType";
// import { CheckoutValidation } from "@/utils/validation/CheckoutValidation";

const fieldData: formDataProp[] = [
  { name: "name", type: "text", placeholder: "Name" },
  {
    name: "state",
    type: "text",
    placeholder: "Governorate",
  },
  { name: "street", type: "text", placeholder: "Street" },
  {
    name: "country",
    type: "text",
    placeholder: "Country",
  },
  { name: "city", type: "text", placeholder: "City" },
  {
    name: "phone",
    type: "string",
    placeholder: "Phone Number",
  },
  {
    name: "zipCode",
    type: "string",
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
  country: "",
};

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
}

const BillingForm = ({ formRef }: Props) => {
  const { mutate } = useCreateAddress();
  const FormSubmit = (value: AddressType) => {
    mutate(value);
    console.log(value, " submitted");
  };
  return (
    <section className="w-2/4 ">
      <h1 className="text-3xl font-medium mb-5 ">Billing Details</h1>
      <Formik onSubmit={FormSubmit} initialValues={initialValues} >
        <Form ref={formRef}>
          {fieldData.map((input, index) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                {/*<label className="text-[#ababab]">{input.label}</label>*/}
                <CustomField
                  className={`inputs border-b-0 bg-[#e0e0e0] rounded-md`}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              </div>
            );
          })}
        </Form>
      </Formik>
    </section>
  );
};

export default BillingForm;
