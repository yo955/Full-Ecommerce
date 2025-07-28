import React from "react";
import { CustomLink, CustomPara } from "../ui";
import styles from "@/styles/Navbar/topHeader.module.scss";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.text}>
        <CustomPara className={styles.message}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </CustomPara>
      </div>
      <div className={styles.link}>
        <CustomLink href="/" className={styles.message}>
          shop now
        </CustomLink>
      </div>
    </div>
  );
};

export default TopHeader;
