'use client'
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { PageLinks } from '@/constant/enum';
import { Link } from '@/i18n/routing';
import { Home, Info, Mail, ShoppingBasket } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';



const DesktopNavigation = () => {
    const t = useTranslations("navbar");
    const locale = useLocale();

    const navLinks = [
        {
            id: 1,
            name: t("navLinks.home"),
            href: PageLinks.HOME,
            icon: <Home size={18} />,
            subcategories: [
                { name: { ar: 'الهواتف الذكية', en: 'Smartphones' }, href: '/electronics/phones' },
                { name: { ar: 'أجهزة الكمبيوتر', en: 'Computers' }, href: '/electronics/computers' },
                { name: { ar: 'الملحقات', en: 'Accessories' }, href: '/electronics/accessories' }
            ]
        },
        {
            id: 2,
            name: t("navLinks.about"),
            href: PageLinks.ABOUT,
            icon: <Info size={18} />,
            subcategories: [
                { name: { ar: 'ملابس رجالية', en: 'Men\'s Clothing' }, href: '/fashion/men' },
                { name: { ar: 'ملابس نسائية', en: 'Women\'s Clothing' }, href: '/fashion/women' },
                { name: { ar: 'أحذية', en: 'Shoes' }, href: '/fashion/shoes' }
            ]
        },
        {
            id: 3,
            name: t("navLinks.contact"),
            href: PageLinks.CONTACT,
            icon: <Mail size={18} />,
            subcategories: [
                { name: { ar: 'أثاث', en: 'Furniture' }, href: '/home/furniture' },
                { name: { ar: 'ديكور', en: 'Decor' }, href: '/home/decor' },
                { name: { ar: 'أدوات المطبخ', en: 'Kitchen Tools' }, href: '/home/kitchen' }
            ]
        },
        {
            id: 4,
            name: t("navLinks.products"),
            href: PageLinks.PRODUCTS,
            icon: <ShoppingBasket />,
            subcategories: [
                { name: { ar: 'أدوات رياضية', en: 'Sports Equipment' }, href: '/sports/equipment' },
                { name: { ar: 'ملابس رياضية', en: 'Sportswear' }, href: '/sports/wear' }
            ]
        },

    ];
    return (
        <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse flex-1 ml-8 rtl:ml-0 rtl:mr-8" dir={locale === 'ar' ? 'rtl' : 'ltr'} >
            <NavigationMenu>
                <NavigationMenuList dir={locale === 'ar' ? 'rtl' : 'ltr'} className="space-x-1 rtl:space-x-reverse">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.id}>
                            <Button
                                variant="ghost"
                                className="text-gray-700 hover:text-white hover:bg-red-600 transition-all duration-300 font-medium"
                                asChild
                            >
                                <Link href={link.href}>{link.name}</Link>
                            </Button>
                        </NavigationMenuItem>
                    ))}

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default DesktopNavigation