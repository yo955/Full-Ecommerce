import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default axiosClient;