import React from "react";
import styles from "@/styles/Navbar/topHeader.module.scss";
import { Link } from "@/i18n/routing";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.text}>
        <p className={styles.message}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
      </div>
      <div className={styles.link}>
        <Link href="/" className={styles.message}>
          shop now
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
