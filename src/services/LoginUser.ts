import axiosClient from "@/api/axiosInstance";
import { LoginParams } from "@/types/LoginParams";

export default async function LoginUser(userData: LoginParams) {
  const response = await axiosClient
    .post("/users/login", userData)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });

  return response;
}

// import axiosClient from "@/api/axiosInstance";
// import { LoginParams } from "@/types/LoginParams";

// export default async function LoginUser(userData: LoginParams) {
//   try {
//     const response = await axiosClient.post("/users/login", userData);
//     console.log("Server Response:", response.data);
//     return response.data; // Return the expected user object
//   } catch (error) {
//     // console.error("Login API Error:", error.response?.data || error.message);
//     throw error; // Ensure errors are properly caught in useMutation
//   }
// }
