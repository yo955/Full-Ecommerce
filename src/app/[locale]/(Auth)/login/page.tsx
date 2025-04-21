import { CustomAuthPage } from "@/components/common/CustomAuthPage/CustomAuthPage";
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
    </>
  );
};

export default LoginPage;
