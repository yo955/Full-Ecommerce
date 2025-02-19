"use client";
import fetchCategories from "@/services/fetchCategories";
import { useQuery } from "@tanstack/react-query";
import { Categories } from "@/types/Category";

const useGetCategory = () => {
  const query = useQuery<Categories>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return query;
};

export default useGetCategory;
