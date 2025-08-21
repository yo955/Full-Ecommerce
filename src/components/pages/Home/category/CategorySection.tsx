'use client';
import CategoryHeader from "./CategoryHeader";
import CategoryProducts from "./CategoryProducts";

const CategorySection = () => {
  return (
    <section className="py-10">
      <CategoryHeader />
      <CategoryProducts />
    </section>
  );
};

export default CategorySection;
