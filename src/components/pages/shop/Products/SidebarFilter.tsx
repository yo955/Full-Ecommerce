import { Button } from "@/components/ui/button";

interface SidebarFilterProps {
  isSidebarOpen: boolean;
  categories: { categoryId: string; categoryName: string }[];
  onCategoryChange?: (categoryId: string | undefined) => void;
  onSortChange?: (sort: string) => void;
  onReset?: () => void;
}

const SidebarFilter = ({
  isSidebarOpen,
  categories,
  onCategoryChange,
  onSortChange,
  onReset,
}: SidebarFilterProps) => {
  return (
    <aside
      className={`lg:w-1/4 w-full h-3/4 bg-white border rounded-2xl p-6 shadow-xl transition-all duration-300 ${
        isSidebarOpen ? "block" : "hidden lg:block"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">فلتر المنتجات</h2>
        <Button
          className="text-sm text-white font-medium transition-colors"
          onClick={onReset}
        >
          إعادة تعيين
        </Button>
      </div>

      {/* التصنيف */}
      <div className="mb-8">
        <label className="block mb-3 font-semibold text-gray-700">التصنيف</label>
        <select
          className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
          onChange={(e) =>
            onCategoryChange?.(e.target.value === "all" ? undefined : e.target.value)
          }
        >
          <option value="all">كل التصنيفات</option>
          {categories.map((cat) => (
            <option key={cat.categoryId} value={cat.categoryId}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      {/* الترتيب */}
      <div className="mb-8">
        <label className="block mb-3 font-semibold text-gray-700">الترتيب</label>
        <select
          className="w-full border rounded-lg px-4 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
          onChange={(e) => onSortChange?.(e.target.value)}
        >
          <option value="default">الافتراضي</option>
          <option value="price-asc">السعر: من الأقل إلى الأعلى</option>
          <option value="price-desc">السعر: من الأعلى إلى الأقل</option>
          <option value="newest">الأحدث</option>
        </select>
      </div>
    </aside>
  );
};

export default SidebarFilter;
