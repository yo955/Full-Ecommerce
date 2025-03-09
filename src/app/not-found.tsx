
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NotFoundUI from "./[locale]/NotFoundUI";
import QueryProvider from "@/providers/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer/Footer";
import "@/styles/main.scss";

export default async function NotFound() {
  // const pathname = usePathname();
  // const router = useRouter();

  const messages = await getMessages({ locale: "ar" });
  // if (!pathname.startsWith("/en") && !pathname.startsWith("/ar")) {
  //   router.replace("/ar"); // ✅ تصحيح الـ URL إلى اللغة الافتراضية
  // }

  return (
    <html lang="ar">
      <body>
        <Navbar />
        <QueryProvider>
          <NextIntlClientProvider messages={messages}>
            <ReactQueryDevtools initialIsOpen={false} />
            <NotFoundUI />
          </NextIntlClientProvider>
        </QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
