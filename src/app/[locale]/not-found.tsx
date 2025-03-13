"use client"; // 🟢 مهم لأن `usePathname()` يعمل فقط في Client Components

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer/Footer";
import "@/styles/main.scss";
import CustomButton from "@/components/common/ui/Button";
import PathLinks from "@/components/common/ui/PathLinks";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation"; // 🟢 استيراد usePathname()

export default function NotFound() {
  const pathname = usePathname(); // 🟢 استخراج المسار الحالي
  const locale = pathname.split("/")[1]; // 🟢 استخراج اللغة من الـ URL

  return (
    <>
      <Navbar />
      <div className="my-12 mx-auto w-[90%]">
        <PathLinks titles={["404 Error"]} />
        <div className="my-12 text-center">
          <h1 className="text-[110px] font-normal text-black">404 Not Found</h1>
          <p className="mb-12">
            Your visited page not found. You may go home page.
          </p>
          <Link href={`/${locale}/`}>
            <CustomButton className="!py-3 !px-9 text-xs font-thin">
              Back to home page
            </CustomButton>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
