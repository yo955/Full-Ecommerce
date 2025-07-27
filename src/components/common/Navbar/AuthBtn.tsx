import { PageLinks } from "@/constant/enum";
import { Link } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import React from "react";

const AuthBtn = () => {
  const { user, logout } = useAuthStore();

  return (
    <>
      {!user && (
        <>
          <button>
            <Link
              href={PageLinks.LOG_IN}
              className="px-4 py-2 rounded-lg border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition duration-200"
            >
              تسجيل الدخول
            </Link>
          </button>
          <button>
            <Link
              href={PageLinks.SIGN_UP}
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition duration-200"
            >
              إنشاء حساب
            </Link>
          </button>
        </>
      )}

      {user && (
        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg border border-red-600 text-red-700 hover:bg-red-600 hover:text-white transition duration-200"
        >
          تسجيل الخروج
        </button>
      )}
    </>
  );
};

export default AuthBtn;
