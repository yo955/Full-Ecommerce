import CustomButton from "@/components/common/ui/Button";
import PathLinks from "@/components/common/ui/PathLinks";
import { Link } from "@/i18n/routing";
import React from "react";

const NotFoundUI = () => {
  return (
    <div className="my-12 mx-auto w-[90%]">
      <PathLinks titles={["404 Error"]} />
      <div className="my-12 text-center">
        <h1 className="text-[110px] font-normal text-black">404 Not Found </h1>
        <p className="mb-12">
          Your visited page not found. You may go home page.
        </p>
        <Link href="/">
          <CustomButton className="!py-3 !px-9 text-xs font-thin">
            Back to home page
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundUI;
