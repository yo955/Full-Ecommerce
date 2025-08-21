'use client';
import ProductSkeleton from "@/components/common/products/ProductSkeleton";
import useGetCategory from "@/hooks/Product/useGetCategories";
import CategoryCard from "./CategoryCard";
import CategorySlider from "./CategorySlider";

const CategoryProducts = () => {
    const { data: categories, isLoading } = useGetCategory();
    if (isLoading) {
        return (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                ))}
            </div>
        );
    }

    return (
        <>
            <CategorySlider spaceBetween={0}>
                {categories?.map((product) => (
                    <CategoryCard {...product} key={product.categoryId} />
                ))}
            </CategorySlider>
        </>
    );
};

export default CategoryProducts;
