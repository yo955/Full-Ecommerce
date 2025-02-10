// import axiosClient from "@/api/axiosInstance";
import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://tahaapi.runasp.net/api/products");
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;
