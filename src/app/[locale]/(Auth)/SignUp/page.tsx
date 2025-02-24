"use client";

import { CustomAuthPage } from "@/components/common/CustomAuthPage/CustomAuthPage";
import Toastify from "@/components/common/toastify/Toastify";

import { formDataProp } from "@/types/formData";

const fieldData: formDataProp[] = [
  {
    className: "inputs",
    type: "text",
    name: "name",
    placeholder: "Name",
  },
  {
    className: "inputs",
    type: "email",
    name: "email",
    placeholder: "Email",
  },
  {
    className: "inputs",
    type: "password",
    name: "password",
    placeholder: "Password",
  },
];

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
  return (
    <>
      <CustomAuthPage
        title="Create an account"
        form={fieldData}
        initialValues={initialValues}
        isLogin={false}
      />
      <Toastify />
    </>
  );
};

export default SignUpPage;
