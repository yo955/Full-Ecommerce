"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import FlagUSA from "./svg/FlagUSA";
import FlagEgypt from "./svg/FlagEgypt";

const LanguageSwitcherBtn = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    const newPath = `/${newLocale}${pathname.replace(/^\/(ar|en)/, "")}`;

    setPending(true);
    setTimeout(() => {
      router.replace(newPath);
      setPending(false);
    }, 300);
  };

  const handleClick = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    changeLanguage(newLocale);
  };

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      aria-label="Change language"
    >
      {locale === "ar" ? <FlagUSA width={50} height={50} /> : <FlagEgypt width={40} height={40} />}
    </button>
  );
};

export default LanguageSwitcherBtn;
