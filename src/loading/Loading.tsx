import React from "react";
import { Loader2 } from "lucide-react";
import styles from "@/styles/common/Loading/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Loader2 className={styles.spinner} size={48} />
    </div>
  );
};

export default Loading;
