"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import useGetProducts from "@/hooks/Product/useGetProducts";
import useSearchByQuery from "@/hooks/Product/useSearchByQuery";
import useGetCategory from "@/hooks/Product/useGetCategories";

import Loading from "@/loading/Loading";
import ProductCard from "@/components/common/products/ProductCard";

const ProductsPage = () => {
  const params = useSearchParams();
  const fetch = params ? useSearchByQuery : useGetProducts;

  const { data: products, isLoading } = fetch(params?.toString() || "");
  const { data: categories, isLoading: categoryLoader } = useGetCategory();

  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

  const currentProducts = products?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading || categoryLoader) return <Loading />;

  if (!products || products.length === 0) {
    return (
      <div className="text-red-500 text-xl h-screen flex justify-center items-center">
        لا توجد منتجات
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row mt-10 gap-5 px-4">
      {/* Sidebar */}
      <aside className="lg:w-1/4 w-full bg-white border rounded-md p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">فلتر المنتجات</h2>

        {/* Price Filter */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">السعر</label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => {
              setCurrentPage(1);
              setPriceRange([0, Number(e.target.value)]);
            }}
            className="w-full accent-black"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">
            التصنيف
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setCurrentPage(1);
              setSelectedCategory(e.target.value);
            }}
            className="w-full border rounded px-2 py-1"
          >
            <option value="all">كل التصنيفات</option>
            {categories?.map((cat) => (
              <option key={cat.categoryId} value={cat.categoryId}>
                {cat.categoryName}
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Products Section */}
      <section className="lg:w-3/4 w-full flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts?.map((product) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 gap-4 items-center">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          >
            السابق
          </button>

          <span className="text-sm">
            صفحة {currentPage} من {totalPages}
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
          >
            التالي
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
