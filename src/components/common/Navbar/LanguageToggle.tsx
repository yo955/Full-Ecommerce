"use client";
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
const LanguageToggle = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        // Remove the current locale from pathname
        const pathWithoutLocale = pathname.replace(`/${locale}`, '');
        router.push(`/${newLocale}${pathWithoutLocale}`);
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden sm:flex items-center space-x-1 rtl:space-x-reverse text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
        >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{locale === 'ar' ? 'EN' : 'عربي'}</span>
        </Button>
    )
}

export default LanguageToggle;
