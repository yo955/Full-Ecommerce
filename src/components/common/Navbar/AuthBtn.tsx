import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import styles from "@/styles/Navbar/authBtn.module.scss";

const AuthBtn = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className={styles.authBtn}>
      {!user && (
        <>
          <Link href={PageLinks.LOG_IN} className={`${styles.authBtn__btn} ${styles.authBtn__login}`}>
            تسجيل الدخول
          </Link>

          <Link href={PageLinks.SIGN_UP} className={`${styles.authBtn__btn} ${styles.authBtn__signup}`}>
            إنشاء حساب
          </Link>
        </>
      )}

      {user && (
        <button onClick={logout} className={`${styles.authBtn__btn} ${styles.authBtn__logout}`}>
          تسجيل الخروج
        </button>
      )}
    </div>
  );
};

export default AuthBtn;
