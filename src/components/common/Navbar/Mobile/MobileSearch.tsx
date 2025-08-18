'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const MobileSearch = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    // Mock products for search
    const language = 'ar'
    const isRTL = language === 'ar';

    const allProducts = [
        { id: 1, name: { ar: 'آيفون 15 برو', en: 'iPhone 15 Pro' }, price: 4999, category: { ar: 'إلكترونيات', en: 'Electronics' }, image: '📱' },
        { id: 2, name: { ar: 'سماعات ايربودز', en: 'AirPods Pro' }, price: 999, category: { ar: 'إلكترونيات', en: 'Electronics' }, image: '🎧' },
        { id: 3, name: { ar: 'تيشيرت قطني', en: 'Cotton T-Shirt' }, price: 99, category: { ar: 'ملابس', en: 'Fashion' }, image: '👕' },
        { id: 4, name: { ar: 'حذاء رياضي', en: 'Sports Shoes' }, price: 299, category: { ar: 'رياضة', en: 'Sports' }, image: '👟' },
        { id: 5, name: { ar: 'لابتوب ديل', en: 'Dell Laptop' }, price: 3499, category: { ar: 'إلكترونيات', en: 'Electronics' }, image: '💻' },
        { id: 6, name: { ar: 'شامبو طبيعي', en: 'Natural Shampoo' }, price: 49, category: { ar: 'جمال', en: 'Beauty' }, image: '🧴' },
    ];

    // Filter products based on search query
    const filteredProducts = allProducts.filter(product =>
        product.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category[language].toLowerCase().includes(searchQuery.toLowerCase())
    );


    // functions
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowSearchResults(value.length > 0);
    };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.search-container')) {
                setShowSearchResults(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="md:hidden px-4 pb-4 search-container">
            <div className="relative">
                <Input
                    type="text"
                    placeholder={language === 'ar' ? 'ابحث عن المنتجات...' : 'Search for products...'}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={`${isRTL ? 'pr-12' : 'pl-4 pr-12'} h-10 border-2 border-gray-200 focus:border-red-600 rounded-full`}
                />
                <Button
                    size="sm"
                    className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 h-8 w-8 bg-red-600 hover:bg-red-700 rounded-full p-0`}
                >
                    <Search className="h-4 w-4" />
                </Button>

                {/* Mobile Search Results */}
                {showSearchResults && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-auto z-50">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.slice(0, 4).map((product) => (
                                <div key={product.id} className="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b last:border-b-0">
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <span className="text-xl">{product.image}</span>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-900 text-sm">{product.name[language]}</h4>
                                            <p className="text-xs text-gray-500">{product.category[language]}</p>
                                        </div>
                                        <span className="font-bold text-red-600 text-sm">
                                            {language === 'ar' ? `${product.price} ر.س` : `${product.price}`}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-4 text-center text-gray-500 text-sm">
                                {language === 'ar' ? 'لا توجد نتائج' : 'No results found'}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MobileSearch