"use client";
import fetchCategories from "@/services/Product/fetchCategories";
import { useQuery } from "@tanstack/react-query";
import { Categories } from "@/types/Category";

const useGetCategory = () => {
  return useQuery<Categories>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

};

export default useGetCategory;
