"use client";
import CustomForm from "@/components/common/Formik/CustomForm";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { formDataProp } from "@/types/formData";

interface CustomAuthPageProps {
  title: string;
  isLogin: boolean;
  form: formDataProp[];
  initialValues: initialValuesProps;

}
interface initialValuesProps {
  name?: string;
  email: string;
  password: string;
}

export const CustomAuthPage = ({
  title,
  isLogin,
  form,
  initialValues,

}: CustomAuthPageProps) => {
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
      <div className="h-[780px] py-24 flex flex-col justify-center gap-4 w-1/3 mx-auto">
        <div className="flex flex-col gap-6 mb-3">
          <h1 className="text-4xl font-medium">{title}</h1>
          <p className="text-base font-light">Enter your details below</p>
        </div>
        <div>
          <CustomForm fieldData={form} initialValues={initialValues} islogin={isLogin} />
        </div>
        {isLogin ? (
          <div className="flex gap-2 items-center justify-center mt-3">
            <p className="text-[14px] "> Don&apos;t Have an Account ? </p>
            <Link className="text-[14px] border-b border-black " href="/SignUp">
              SignUp
            </Link>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center mt-3">
            <p className="text-[14px] ">Already have an account ? </p>
            <Link className="text-[14px] border-b border-black " href="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};


