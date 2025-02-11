import axiosClient from "@/api/axiosInstance";

const fetchProducts = async () => {
  try {
    const response = await axiosClient.get("/products");
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default fetchProducts;
