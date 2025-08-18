import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import React, { useState } from 'react'

const LanguageToggle = () => {
    const [language, setLanguage] = useState('ar');
    const toggleLanguage = () => {
        setLanguage(language === 'ar' ? 'en' : 'ar');
    };
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden sm:flex items-center space-x-1 rtl:space-x-reverse text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300"
        >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
        </Button>
    )
}

export default LanguageToggle