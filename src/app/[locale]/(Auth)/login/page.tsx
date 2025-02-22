import { CustomAuthPage } from "@/components/common/CustomAuthPage/CustomAuthPage";
import Toastify from "@/components/common/toastify/Toastify";
import { formDataProp } from "@/types/formData";

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
  email: "",
  password: "",
};
const LoginPage = () => {
  return (
    <>
      <CustomAuthPage
        title="Log in to Exclusive"
        form={fieldData}
        initialValues={initialValues}
        isLogin={true}
      />
      <Toastify />
    </>
  );
};

export default LoginPage;
