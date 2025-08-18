import { Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import useGetRegisterUser from "@/hooks/Auth/useGetRegisterUser";
import useGetLoginUser from "@/hooks/Auth/useGetLoginUser";
import { RegisterValidation } from "@/utils/validation/SignUpValidation";
import CustomField from "./CustomField";
import CustomErrorMsg from "./CustomErrorMsg";
import { formDataArray } from "@/types/formData";
import { RegisterParams } from "@/types/auth/RegisterParams";
import { LoginParams } from "@/types/auth/LoginParams";
import { LoginValidation } from "@/utils/validation/LoginValidation";
import { Button } from "@/components/ui/button";
// import {LoginWithGoogle} from "@/services/LoginWithGoogle";

const CustomForm = ({ fieldData, initialValues, isLogin }: formDataArray) => {
  const CheckAuthFN = isLogin ? useGetLoginUser : useGetRegisterUser;
  const { mutate, isPending, hasError } = CheckAuthFN();

  const handleSubmit = (values: RegisterParams | LoginParams) => {
    mutate(values);
  };
  const handleLoginWithGoogle = () => {
    window.location.href =
      process.env.NEXT_PUBLIC_API_URL +
      "/users/google-login?redirectUrl=http://localhost:3000/en/googleAuth";
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={isLogin ? LoginValidation : RegisterValidation}
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
              <Button
                type="submit"
                className={`${
                  isLogin ? "login-btn" : "register-btn"
                } w-full h-14 mt-5`}
                disabled={isPending || (isSubmitting && !hasError)}
              >
                {isPending || (isSubmitting && !hasError)
                  ? isLogin
                    ? "Logging in..."
                    : "Creating..."
                  : isLogin
                  ? "Login"
                  : "Create"}
              </Button>
            </div>

            <div>
              <button
                className="w-[100%] h-14 text-black border border-black rounded-md mt-5 flex gap-2 items-center justify-center"
                onClick={handleLoginWithGoogle}
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
