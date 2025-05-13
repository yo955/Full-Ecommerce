'use client';

import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer/Footer';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="relative">
            <h1 className="text-9xl font-bold text-blue-500 opacity-20">404</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('title')}</h2>
              <p className="text-xl text-gray-600 mb-8">{t('message')}</p>
              <Link 
                href="/"
                className="inline-flex items-center gap-3 bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <FaHome className="text-2xl" />
                <span className="text-lg font-medium">{t('returnHome')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 