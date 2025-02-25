import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
// الباك اند تولى المسئولية دى

//  أي طلب هيستخدم التوكن تلقائيًا من الكوكيز Interceptor،
// axiosInstance.interceptors.request.use((config) => {
//   const token = Cookies.get("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default axiosInstance;
