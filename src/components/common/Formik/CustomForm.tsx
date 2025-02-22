import { Form, Formik } from "formik";
import CustomButton from "@/components/common/ui/Button";
import { FcGoogle } from "react-icons/fc";
import useGetRegisterUser from "@/hooks/useGetRegisterUser";
import useGetLoginUser from "@/hooks/useGetLoginUser";
import { validationSchema } from "@/validation/SignUpValidation";
import CustomField from "./CustomField";
import CustomErrorMsg from "./CustomErrorMsg";
import { formDataArray } from "@/types/formData";
import { RegisterParams } from "@/types/RegisterParams";
import { LoginParams } from "@/types/LoginParams";

const CustomForm = ({
  fieldData,
  initialValues,
  isLogin,
}: formDataArray) => {
  const loginMutation = useGetLoginUser();
  const registerMutation = useGetRegisterUser();

  const { mutate, isPending } = isLogin ? loginMutation : registerMutation;

  const handleSubmit = (values: RegisterParams | LoginParams) => {
    console.log("login");
    const filteredValues = isLogin
      ? { email: values.email, password: values.password }
      : values;
    mutate(filteredValues);
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="relative w-[100%]">
              {fieldData.map((item, index) => (
                <div key={index} className="relative">
                  <CustomField
                    className={item.className}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                  <CustomErrorMsg name={item.name} />
                </div>
              ))}
            </div>

            <div>
              <CustomButton
                type="submit"
                className={`${
                  isLogin ? "login-btn" : "register-btn"
                } w-full h-14 mt-5`}
                disabled={isPending || isSubmitting}
              >
                {isPending || isSubmitting
                  ? isLogin
                    ? "Logging in..."
                    : "Creating..."
                  : isLogin
                  ? "Login"
                  : "Create"}
              </CustomButton>
            </div>

            <div>
              <button
                className="w-[100%] h-14 text-black border border-black rounded-md mt-5 flex gap-2 items-center justify-center"
                onClick={() => {
                  // Add Google sign-in logic here
                }}
              >
                <FcGoogle className="text-3xl" />
                Sign Up with Google
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
