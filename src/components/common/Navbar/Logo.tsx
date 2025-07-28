import Link from "next/link";
import StoreLogo from "./svg/StoreLogo";
import styles from "@/styles/Navbar/logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.link}>
        <StoreLogo className={styles.icon} />
      </Link>
    </div>
  );
};

export default Logo;
