import axios from "axios";
const baseURL = process.env.PUBLIC_API_URL;
const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});
export default axiosClient;
