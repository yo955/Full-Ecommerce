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
    <div className="flex justify-between items-center pt-10 pb-24 pr-24 tab-large-screen:pr-0 ">
      <div className="flex items-center ">
        <Image
          src="/images/login.png"
          alt="login img"
          width={800}
          height={780}
          className="object-contain tab-large-screen:w-[570px] custom-mid:w-[410px] custom-handling:hidden"
        />
      </div>
      <div className="h-[780px] py-24 flex flex-col justify-center gap-4 w-1/3 custom-handling:w-[80%] mx-auto">
        <div className="flex flex-col gap-6 mb-3">
          <h1 className="text-4xl font-medium custom-sm:text-2xl custom-phone:text-base">{title}</h1>
          <p className="text-base font-light custom-sm:text-sm custom-sm:font-thin custom-phone:text-xs">Enter your details below</p>
        </div>
        <div>
          <CustomForm fieldData={form} initialValues={initialValues} isLogin={isLogin} />
        </div>
        {isLogin ? (
          <div className="flex gap-2 items-center justify-center mt-3 custom-phone:!flex-col custom-phone:text-center">
            <p className="text-[14px] "> Don&apos;t Have an Account ? </p>
            <Link className="text-[14px] border-b border-black " href="/signup">
              SignUp
            </Link>
          </div>
        ) : (
          <div className="flex gap-2 items-center justify-center mt-3 custom-phone:!flex-col custom-phone:text-center">
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


