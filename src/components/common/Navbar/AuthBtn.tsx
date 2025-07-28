import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import styles from "@/styles/Navbar/authBtn.module.scss";
import { LogIn, UserPlus, LogOut, UserCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const AuthBtn = () => {
  const { user, logout } = useAuthStore();
  const t = useTranslations("authBtn");

  return (
    <div className={styles.authBtn}>
      {!user && (
        <>
          <Link
            href={PageLinks.LOG_IN}
            className={`${styles.authBtn__btn} ${styles.authBtn__login}`}
            aria-label={t("login")}
          >
            <LogIn size={20} />
            <span className={styles.authBtn__text}>{t("login")}</span>
          </Link>

          <Link
            href={PageLinks.SIGN_UP}
            className={`${styles.authBtn__btn} ${styles.authBtn__signup}`}
            aria-label={t("signup")}
          >
            <UserPlus size={20} />
            <span className={styles.authBtn__text}>{t("signup")}</span>
          </Link>
        </>
      )}

      {user && (
        <>
          <Link
            href="/account"
            className={styles.authBtn__btn}
            aria-label={t("profile")}
            title={t("profile")}
          >
            <UserCircle size={20} />
            <span className={styles.authBtn__text}>{t("profile")}</span>
          </Link>

          <button
            onClick={logout}
            className={`${styles.authBtn__btn} ${styles.authBtn__logout}`}
            aria-label={t("logout")}
          >
            <LogOut size={20} />
            <span className={styles.authBtn__text}>{t("logout")}</span>
          </button>
        </>
      )}
    </div>
  );
};

export default AuthBtn;
