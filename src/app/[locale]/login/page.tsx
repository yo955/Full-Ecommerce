import { CustomAuthPage } from "@/components/common/CustomAuthPage/CustomAuthPage";

import { formDataProp } from "@/types/formData";
import React from "react";

const LoginPage = () => {
  const fieldData: formDataProp[] = [
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

  return (
    <div>
      <CustomAuthPage
        title="Log in to Exclusive"
        form={fieldData}
        initialValues={initialValues}
        isLogin={true}
      />
    </div>
  );
};

export default LoginPage;
