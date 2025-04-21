import axiosInstance from "@/utils/api/axiosInstance";

export const LoginWithGoogle = async () => {
  try {
    const response = await axiosInstance.get('/users/google-login');

    const redirectUrl = response.data?.url;

    if (redirectUrl) {
      // توجيه المستخدم لرابط تسجيل الدخول عبر Google
      window.location.href = redirectUrl;
    } else {
      throw new Error("لم يتم الحصول على رابط تسجيل الدخول.");
    }

  } catch (error) {
    console.error("فشل تسجيل الدخول عبر Google:", error);
    throw error;
  }
}
