import Link from "next/link";
import StoreLogo from "./svg/StoreLogo";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <StoreLogo className="w-10 h-10" />
      <span className="font-bold text-xl text-primary">متجري</span>
    </Link>
  );
};

export default Logo;
