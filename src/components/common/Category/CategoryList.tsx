import useGetCategory from "@/hooks/Product/useGetCategories";
import Loading from "@/loading/Loading";

const CategoryList = () => {
  const { data: Categories, isError, isLoading } = useGetCategory();
  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching data</div>;
  return Categories;
};

export default CategoryList;
