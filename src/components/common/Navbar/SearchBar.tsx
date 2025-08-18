'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import useGetProducts from '@/hooks/Product/useGetProducts';
import useDebounce from '@/hooks/useDebounce';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { data: Products } = useGetProducts();
    const language = 'ar';
    const isRTL = language === 'ar';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowSearchResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredProducts = debouncedSearchQuery.trim()
        ? Products?.filter(product =>
            product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
            product.shortDescription.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        ) || []
        : [];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        setShowSearchResults(value.trim().length > 0);
    };

   

    return (
        <div className="hidden md:flex flex-1 max-w-md mx-4 search-container" ref={dropdownRef}>
            <div className="relative w-full">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder={language === 'ar' ? 'ابحث عن المنتجات...' : 'Search for products...'}
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className={`${isRTL ? 'pr-12' : 'pl-4 pr-12'} h-10 border-2 border-gray-200 hover:border-red-300 focus:border-red-600 rounded-full transition-all duration-300 bg-gray-50 focus:bg-white`}
                    />
                    <Button
                        size="sm"
                        className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 h-8 w-8 bg-red-600 hover:bg-red-700 rounded-full p-0 transition-all duration-300 hover:scale-110`}
                    >
                        <Search className="h-4 w-4" />
                    </Button>
                </div>

                {/* Search Results Dropdown */}
                {showSearchResults && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-auto z-50 animate-in slide-in-from-top-2 duration-200">
                        {filteredProducts.length > 0 ? (
                            <>
                                <div className="p-3 border-b bg-gray-50">
                                    <p className="text-sm text-gray-600 font-medium">
                                        {language === 'ar'
                                            ? `تم العثور على ${filteredProducts.length} منتج`
                                            : `Found ${filteredProducts.length} products`}
                                    </p>
                                </div>
                                {filteredProducts.slice(0, 6).map((product, index) => (
                                    <div
                                        key={product.name}
                                        className="p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b last:border-b-0"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                <Image
                                                    src={product.mainImageUrl}
                                                    alt={product.name}
                                                    fill
                                                    className="rounded-md object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                                            </div>
                                            <div className="text-right rtl:text-left">
                                                <span className="font-bold text-red-600 text-sm">
                                                    {language === 'ar' ? `${product.price} ر.س` : `$${product.price}`}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                                {filteredProducts.length > 6 && (
                                    <div className="p-3 text-center bg-gray-50">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-600 border-red-200 hover:bg-red-50"
                                        >
                                            {language === 'ar' ? 'عرض جميع النتائج' : 'View All Results'}
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="p-6 text-center">
                                <p className="text-gray-500">
                                    {language === 'ar' ? 'لا توجد منتجات مطابقة' : 'No products found'}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
