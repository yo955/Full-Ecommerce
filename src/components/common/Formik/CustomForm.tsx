import { Form, Formik } from "formik";
import CustomButton from "@/components/common/ui/Button";
import { FcGoogle } from "react-icons/fc";
import useGetRegisterUser from "@/hooks/useGetRegisterUser";
import { RegisterParams } from "@/types/RegisterParams";
import { validationSchema } from "@/validation/SignUpValidation";
import CustomField from "./CustomField";
import CustomErrorMsg from "./CustomErrorMsg";
import { formDataArray } from "@/types/formData";
import useGetLoginUser from "@/hooks/useGetLoginUser";

const CustomForm = ({ fieldData, initialValues, islogin }: formDataArray) => {
  console.log(fieldData);
  console.log(initialValues);
  console.log(islogin);
  const CheckLogin = islogin ? useGetLoginUser : useGetRegisterUser;
  const { mutate, isPending } = CheckLogin();
  // const { mutate: loginMutate, isPending: isLoginPending } = useGetLoginUser();
  // const { mutate: registerMutate, isPending: isRegisterPending } =
  //   useGetRegisterUser();

  // const mutate = islogin ? loginMutate : registerMutate;
  // const isPending = islogin ? isLoginPending : isRegisterPending;
  function submit(values: RegisterParams) {
    // console.log(values);
    // mutate(values);
    const filteredValues = islogin
      ? { email: values.email, password: values.password } // Remove `name` for login
      : values;

    console.log("Submitting Values:", filteredValues);
    mutate(filteredValues);
  }

  return (
    <div>
      <Formik
        onSubmit={submit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="relative w-[100%]">
              {fieldData &&
                fieldData.map((item, index) => {
                  return (
                    <div key={index} className="relative">
                      <CustomField
                        className={item.className}
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                      />
                      <CustomErrorMsg name={item.name} />
                    </div>
                  );
                })}
            </div>

            <div>
              {islogin ? (
                <CustomButton
                  type="submit"
                  className="w-full h-14 mt-5"
                  disabled={isPending || isSubmitting}
                >
                  {isPending || isSubmitting ? "Logining..." : "Login"}
                </CustomButton>
              ) : (
                <CustomButton
                  type="submit"
                  className="w-full h-14 mt-5"
                  disabled={isPending || isSubmitting}
                >
                  {isPending || isSubmitting ? "Creating..." : "Create"}
                </CustomButton>
              )}
            </div>
            <div>
              <button className="w-[100%] h-14  text-black border border-black rounded-md mt-5 flex gap-2 items-center justify-center">
                <FcGoogle className="text-3xl " />
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
