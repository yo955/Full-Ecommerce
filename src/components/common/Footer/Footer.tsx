"use client";
import { Send } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white blur-xl"></div>
      </div>

      <div className="relative z-10 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            
            {/* Column 1: Subscribe */}
            <div className="col-span-1 lg:col-span-1 text-center lg:text-left">
              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Exclusive
                </h3>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  Subscribe & get 10% off your first order
                </p>
              </div>
              
              <div className="flex w-full max-w-sm mx-auto lg:mx-0 items-center border border-gray-600 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:border-gray-500 transition-all duration-300 group">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-white placeholder:text-gray-400 border-none focus-visible:ring-0 focus-visible:outline-none text-sm px-4 py-3"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white text-black hover:bg-gray-100 m-1 rounded-md transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Column 2: Support */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start justify-center lg:justify-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>111 Bijoy Sarani, Dhaka, DH 1515</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>exclusive@gmail.com</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2 hover:text-white transition-colors duration-300 cursor-pointer">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+88015-88888-9999</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Accounts */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 text-white">Account</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/account", label: "My Account" },
                  { href: "#", label: "Register" },
                  { href: "#", label: "Cart" },
                  { href: "/wishlist", label: "Wishlist" },
                  { href: "#", label: "Shop" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Quick Link */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "#", label: "Privacy Policy" },
                  { href: "#", label: "Terms Of Use" },
                  { href: "#", label: "FAQ" },
                  { href: "#", label: "Contact" }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Download App */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 text-white">Download App</h3>
              <p className="text-xs text-gray-300 mb-4">
                Save $3 with App - New User Only
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="p-2 bg-white rounded-lg">
                  <Image
                    src="/images/Qrcode 1.png"
                    alt="QR Code for app download"
                    width={80}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Image
                      src="/images/download-appstore.png"
                      alt="Download on App Store"
                      width={120}
                      height={35}
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Image
                      src="/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                      alt="Get it on Google Play"
                      width={120}
                      height={35}
                      className="object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-400 order-2 sm:order-1">
                © 2024 Exclusive. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 order-1 sm:order-2">
                {[
                  { 
                    label: "Facebook", 
                    href: "#", 
                    iconPath: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  },
                  { 
                    label: "Instagram", 
                    href: "#", 
                    iconPath: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.256-3.44-.643-1.297-.506-2.297-1.297-2.297-2.297 0-.643.128-1.297.643-1.808.514-.514 1.165-.643 1.808-.643.643 0 1.297.129 1.808.643.514.511.643 1.165.643 1.808 0 1-.999 1.791-2.297 2.297-.992.387-2.143.643-3.44.643zm7.099 0c-1.297 0-2.448-.256-3.44-.643-1.297-.506-2.297-1.297-2.297-2.297 0-.643.128-1.297.643-1.808.514-.514 1.165-.643 1.808-.643.643 0 1.297.129 1.808.643.514.511.643 1.165.643 1.808 0 1-.999 1.791-2.297 2.297-.992.387-2.143.643-3.44.643z"
                  },
                  { 
                    label: "Twitter", 
                    href: "#", 
                    iconPath: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  },
                  { 
                    label: "LinkedIn", 
                    href: "#", 
                    iconPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  }
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <span className="sr-only">{social.label}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={social.iconPath} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;