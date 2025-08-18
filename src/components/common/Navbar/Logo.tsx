import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import React from 'react'

export const Logo = () => {
    return (
        <div className="flex-shrink-0">
            <Button variant="ghost" className="p-0 hover:bg-transparent" asChild>
                <Link href="/">
                    <div className="text-2xl font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
                        متجري
                    </div>
                </Link>
            </Button>
        </div>
    )
}

