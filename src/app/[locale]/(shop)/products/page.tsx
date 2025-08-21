"use client";

import { useState } from "react";

const ProductsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Placeholder data for UI demonstration (to be replaced by backend logic)
  const categories = [
    { categoryId: "1", categoryName: "إلكترونيات" },
    { categoryId: "2", categoryName: "ملابس" },
    { categoryId: "3", categoryName: "أحذية" },
  ];
  const brands = ["Apple", "Samsung", "Nike"];
  const products = [
    { productId: "1", name: "منتج 1", price: 100, rating: 4, image: "/placeholder.jpg" },
    { productId: "2", name: "منتج 2", price: 200, rating: 3, image: "/placeholder.jpg" },
    { productId: "3", name: "منتج 3", price: 150, rating: 5, image: "/placeholder.jpg" },
  ];

  return (
    <div className="container mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden mb-6 px-5 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "إغلاق الفلتر" : "فتح الفلتر"}
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside
          className={`lg:w-1/4 w-full bg-white border rounded-2xl p-6 shadow-xl transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">فلتر المنتجات</h2>
            <button
              className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              إعادة تعيين
            </button>
          </div>

          {/* Price Range Filter */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700">نطاق السعر</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="الحد الأدنى"
                className="w-1/2 border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors bg-gray-50"
              />
              <input
                type="number"
                placeholder="الحد الأقصى"
                className="w-1/2 border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors bg-gray-50"
              />
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black mt-4"
            />
            <div className="flex justify-between text-sm mt-3 text-gray-600">
              <span>$0</span>
              <span>$10000</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700">التصنيف</label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
            >
              <option value="all">كل التصنيفات</option>
              {categories.map((cat) => (
                <option key={cat.categoryId} value={cat.categoryId}>
                  {cat.categoryName}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Filter */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700">العلامة التجارية</label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
            >
              <option value="all">كل العلامات</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700">التقييم الأدنى</label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
            >
              <option value={0}>جميع التقييمات</option>
              <option value={1}>1 نجمة وأعلى</option>
              <option value={2}>2 نجوم وأعلى</option>
              <option value={3}>3 نجوم وأعلى</option>
              <option value={4}>4 نجوم وأعلى</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="mb-8">
            <label className="block mb-3 font-semibold text-gray-700">الترتيب</label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
            >
              <option value="default">الافتراضي</option>
              <option value="price-asc">السعر: من الأقل إلى الأعلى</option>
              <option value="price-desc">السعر: من الأعلى إلى الأقل</option>
              <option value="newest">الأحدث</option>
            </select>
          </div>
        </aside>

        {/* Products Section */}
        <section className="lg:w-3/4 w-full flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.productId}
                className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">${product.price}</p>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.377 2.458a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.377-2.458a1 1 0 00-1.176 0l-3.377 2.458c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.31 9.397c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                  <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              السابق
            </button>
            <span className="text-sm font-medium text-gray-700">صفحة 1 من 10</span>
            <button
              className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              التالي
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;