import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import { useCartStore } from "@/stores/cart/cartStore";
import { useWishListStore } from "@/stores/wishlist/WishListStore";
import { ChevronRight, Globe, Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
const MobileMenu = () => {
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const language = 'ar'
    const isRTL = language === 'ar';
    const cartCount = useCartStore((state) => state.cart?.length);
    const wishlistCount = useWishListStore((state) => state.wishList?.length);
    const { user } = useAuthStore((state) => state)
    const isLoggedIn = !!user;


    const navLinks = [
        {
            id: 1,
            name: { ar: 'الإلكترونيات', en: 'Electronics' },
            href: '/electronics',
            icon: '📱',
            subcategories: [
                { name: { ar: 'الهواتف الذكية', en: 'Smartphones' }, href: '/electronics/phones' },
                { name: { ar: 'أجهزة الكمبيوتر', en: 'Computers' }, href: '/electronics/computers' },
                { name: { ar: 'الملحقات', en: 'Accessories' }, href: '/electronics/accessories' }
            ]
        },
        {
            id: 2,
            name: { ar: 'الملابس', en: 'Fashion' },
            href: '/fashion',
            icon: '👕',
            subcategories: [
                { name: { ar: 'ملابس رجالية', en: 'Men\'s Clothing' }, href: '/fashion/men' },
                { name: { ar: 'ملابس نسائية', en: 'Women\'s Clothing' }, href: '/fashion/women' },
                { name: { ar: 'أحذية', en: 'Shoes' }, href: '/fashion/shoes' }
            ]
        },
        {
            id: 3,
            name: { ar: 'المنزل والحديقة', en: 'Home & Garden' },
            href: '/home',
            icon: '🏠',
            subcategories: [
                { name: { ar: 'أثاث', en: 'Furniture' }, href: '/home/furniture' },
                { name: { ar: 'ديكور', en: 'Decor' }, href: '/home/decor' },
                { name: { ar: 'أدوات المطبخ', en: 'Kitchen Tools' }, href: '/home/kitchen' }
            ]
        },
        {
            id: 4,
            name: { ar: 'الرياضة', en: 'Sports' },
            href: '/sports',
            icon: '⚽',
            subcategories: [
                { name: { ar: 'أدوات رياضية', en: 'Sports Equipment' }, href: '/sports/equipment' },
                { name: { ar: 'ملابس رياضية', en: 'Sportswear' }, href: '/sports/wear' }
            ]
        },
        {
            id: 5,
            name: { ar: 'الجمال', en: 'Beauty' },
            href: '/beauty',
            icon: '💄',
            subcategories: [
                { name: { ar: 'العناية بالبشرة', en: 'Skincare' }, href: '/beauty/skincare' },
                { name: { ar: 'مكياج', en: 'Makeup' }, href: '/beauty/makeup' }
            ]
        },
        {
            id: 6,
            name: { ar: 'الكتب', en: 'Books' },
            href: '/books',
            icon: '📚',
            subcategories: []
        },
        {
            id: 7,
            name: { ar: 'السيارات', en: 'Automotive' },
            href: '/automotive',
            icon: '🚗',
            subcategories: []
        },
    ];

    const categories = [
        { id: 1, name: { ar: 'عروض اليوم', en: "Today's Deals" }, href: '/deals' },
        { id: 2, name: { ar: 'خدمة العملاء', en: 'Customer Service' }, href: '/support' },
        { id: 3, name: { ar: 'سجل الطلبات', en: 'Orders' }, href: '/orders' },
        { id: 4, name: { ar: 'بطاقات الهدايا', en: 'Gift Cards' }, href: '/gift-cards' }
    ];

    const toggleCategory = (categoryId: number | any) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };

    return (
        <>
            <div className="lg:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-110 relative overflow-hidden group"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <div className="relative z-10">
                                <Menu className={`h-6 w-6 transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                                <X className={`h-6 w-6 absolute top-0 left-0 transform transition-all duration-300 ${isMenuOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side={isRTL ? "right" : "left"}
                        className="w-80 p-0 bg-gradient-to-b from-white via-red-50/30 to-white backdrop-blur-sm border-r-4 border-red-600 shadow-2xl"
                    >
                        {/* Enhanced Menu Header */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm border border-white/20">
                                            🛍️
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">
                                                {language === 'ar' ? 'متجري' : 'ShopZone'}
                                            </h2>
                                            <p className="text-white/80 text-sm">
                                                {language === 'ar' ? 'تسوق بسهولة' : 'Shop with ease'}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                                    >
                                        <X className="h-6 w-6" />
                                    </Button>
                                </div>

                                {/* User Section */}
                                {isLoggedIn ? (
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/20">
                                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                                            {/* {user.avatar} */}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{user?.name}</p>
                                            <p className="text-white/70 text-xs truncate">{user?.email}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex space-x-2 rtl:space-x-reverse">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            // onClick={handleLogin}
                                            className="flex-1 bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                                        >
                                            {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                                        </Button>
                                        <Button
                                            size="sm"
                                            // onClick={handleLogin}
                                            className="flex-1 bg-white text-red-600 hover:bg-gray-100 font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                                        >
                                            {language === 'ar' ? 'حساب جديد' : 'Sign Up'}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Menu Content */}
                        <div className="flex flex-col h-full">

                            {/* Mobile Search */}
                            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder={language === 'ar' ? 'ابحث عن المنتجات...' : 'Search products...'}
                                        className="pr-10 rtl:pr-4 rtl:pl-10 border-2 border-red-200 focus:border-red-500 rounded-xl bg-white shadow-sm"
                                    />
                                    <Search className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400`} />
                                </div>
                            </div>

                            {/* Navigation Links with Animation */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                {navLinks.map((link, index) => (
                                    <div
                                        key={link.id}
                                        className="group"
                                        style={{
                                            animation: `slideInFromLeft 0.3s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <div className="relative">
                                            {/* Main Category Button */}
                                            <div className="flex items-center">
                                                <Button
                                                    variant="ghost"
                                                    className="flex-1 justify-start text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 p-4 rounded-xl group-hover:shadow-md border-2 border-transparent hover:border-red-100 relative overflow-hidden"
                                                    asChild={link.subcategories.length === 0}
                                                >
                                                    <a href={link.subcategories.length > 0 ? '#' : link.href} className="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                                        <div className="w-8 h-8 bg-gray-100 group-hover:bg-red-100 rounded-lg flex items-center justify-center text-lg transition-all duration-300 group-hover:scale-110">
                                                            {link.icon}
                                                        </div>
                                                        <span className="font-medium flex-1 text-left rtl:text-right">{link.name[language]}</span>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl -z-10"></div>
                                                    </a>
                                                </Button>

                                                {/* Expand Button for Categories with Subcategories */}
                                                {link.subcategories.length > 0 && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => toggleCategory(link.id)}
                                                        className="ml-2 rtl:ml-0 rtl:mr-2 text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
                                                    >
                                                        <ChevronRight
                                                            className={`h-4 w-4 transition-transform duration-300 ${expandedCategory === link.id ? 'rotate-90' : 'rotate-0'
                                                                }`}
                                                        />
                                                    </Button>
                                                )}
                                            </div>

                                            {/* Subcategories with Smooth Animation */}
                                            {link.subcategories.length > 0 && (
                                                <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${expandedCategory === link.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                    }`}>
                                                    {link.subcategories.map((subcat, subIndex) => (
                                                        <Button
                                                            key={subIndex}
                                                            variant="ghost"
                                                            className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-25 transition-all duration-300 py-2 px-4 ml-8 rtl:ml-0 rtl:mr-8 rounded-lg text-sm border border-transparent hover:border-red-100"
                                                            style={{
                                                                animation: expandedCategory === link.id ? `slideInFromLeft 0.2s ease-out ${subIndex * 0.05}s both` : 'none'
                                                            }}
                                                            asChild
                                                        >
                                                            <a href={subcat.href} className="flex items-center space-x-2 rtl:space-x-reverse">
                                                                <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                                                                <span>{subcat.name[language]}</span>
                                                            </a>
                                                        </Button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                <Separator className="my-4" />

                                {/* Quick Actions */}
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-gray-700 px-2 mb-3">
                                        {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                                    </p>
                                    {categories.map((category, index) => (
                                        <Button
                                            key={category.id}
                                            variant="ghost"
                                            className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 p-3 rounded-lg border-2 border-transparent hover:border-red-100"
                                            style={{
                                                animation: `slideInFromLeft 0.3s ease-out ${(navLinks.length + index) * 0.1}s both`
                                            }}
                                            asChild
                                        >
                                            <a href={category.href}>{category.name[language]}</a>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                                <div className="flex items-center justify-between mb-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        // onClick={toggleLanguage}
                                        className="flex items-center space-x-2 rtl:space-x-reverse border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300"
                                    >
                                        <Globe className="h-4 w-4" />
                                        <span>{language === 'ar' ? 'English' : 'عربي'}</span>
                                    </Button>

                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-red-600">
                                            <Heart className="h-5 w-5" />
                                            {wishlistCount > 0 && (
                                                <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 text-xs p-0 flex items-center justify-center">
                                                    {wishlistCount}
                                                </Badge>
                                            )}
                                        </Button>
                                        <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-red-600">
                                            <ShoppingCart className="h-5 w-5" />
                                            {cartCount > 0 && (
                                                <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 text-xs p-0 flex items-center justify-center">
                                                    {cartCount}
                                                </Badge>
                                            )}
                                        </Button>
                                    </div>
                                </div>

                                {isLoggedIn && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        // onClick={handleLogout}
                                        className="w-full text-red-600 border-red-200 hover:bg-red-50 transition-all duration-300"
                                    >
                                        {language === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default MobileMenu