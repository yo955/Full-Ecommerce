"use client";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CustomButton from "@/components/common/ui/Button";
import { FcGoogle } from "react-icons/fc";
import useGetRegisterUser from "@/hooks/useGetRegisterUser";
import { RegisterParams } from "@/types/RegisterParams";
import { Link } from "@/i18n/routing";
import { validationSchema } from "@/validation/SignUpValidation";
const SignUpPage = () => {
  const { mutate } = useGetRegisterUser();
 
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  function submit(values: RegisterParams) {
    mutate(values);
  }

  return (
    <div className="flex justify-between items-center pt-10 pb-24 pr-24 ">
      <div className="flex items-center ">
        <Image
          src="/images/login.png"
          alt="login img"
          width={1000}
          height={420}
          className="w-[800px] h-[780px]"
        />
      </div>
      <div className="h-[780px] py-24 flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-6 mb-3">
          <h1 className="text-4xl font-medium">Create an account</h1>
          <p className="text-base font-light">Enter your details below</p>
        </div>
        <div>
          <Formik
            onSubmit={submit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  className="inputs"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component="div" />
                <Field
                  className="inputs"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  className="inputs"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" />
                <div>
                  <CustomButton
                    type="submit"
                    className="w-full h-14 mt-5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating..." : "Create"}
                  </CustomButton>
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
        <div className="flex gap-2 items-center justify-center mt-3">
          <p className="text-[14px] ">Already have an acound ? </p>
          <Link className="text-[14px] border-b border-black " href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
