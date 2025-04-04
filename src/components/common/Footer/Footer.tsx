"use client";
import { Input, Button } from "@mui/joy";
import { IoMdSend } from "react-icons/io";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center sm:justify-items-center text-center sm:text-left">
          
          {/* Column 1: Subscribe */}
          <div className="flex flex-col items-center w-full sm:w-1/2 md:w-full">
            <h3 className="font-bold mb-4">Exclusive</h3>
            <p className="text-xs text-slate-50 mb-2">Get 10% off your first order</p>
            <Input
              placeholder="Enter your email"
              sx={{
                backgroundColor: "black",
                border: "1px solid white",
                color: "white",
                fontSize: "14px",
                maxWidth: "300px", // أقصى عرض للـ Input
                width: "100%", // العرض 100% لكن داخل الحد الأقصى
                "&::before": { display: "none" },
                "&:focus-within": {
                  outline: "2px solid var(--Input-focusedHighlight)",
                  outlineOffset: "2px",
                },
              }}
              endDecorator={
                <Button
                  variant="solid"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    minWidth: "40px",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <IoMdSend />
                </Button>
              }
            />
          </div>

          {/* Column 2: Support */}
          <div className="sm:w-1/2 md:w-full">
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-xs text-slate-50">
              <li>111 Bijoy Sarani, Dhaka, DH 1515</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          {/* Column 3: Accounts */}
          <div className="sm:w-1/2 md:w-full">
            <h3 className="font-bold mb-4">Accounts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account" className="hover:opacity-75">My Account</Link></li>
              <li><Link href="#" className="hover:opacity-75">Register</Link></li>
              <li><Link href="#" className="hover:opacity-75">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:opacity-75">Wishlist</Link></li>
              <li><Link href="#" className="hover:opacity-75">Shop</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className="sm:w-1/2 md:w-full">
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:opacity-75">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:opacity-75">Terms Of Use</Link></li>
              <li><Link href="#" className="hover:opacity-75">FAQ</Link></li>
              <li><Link href="#" className="hover:opacity-75">Contact</Link></li>
            </ul>
          </div>

          {/* Column 5: Download App */}
          <div className="sm:w-1/2 md:w-full">
            <h3 className="font-bold mb-4">Download App</h3>
            <p className="text-[10px] text-slate-50 mb-4">Save $3 with App New User Only</p>
            <div className="flex items-center justify-center gap-3">
              <Image
                src="/images/Qrcode 1.png"
                alt="QR Code"
                width={80}
                height={70}
                className="object-contain"
              />
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/download-appstore.png"
                  alt="App Store"
                  width={110}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                  alt="Google Play"
                  width={110}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6">
          {[
            { label: "Facebook", href: "#", iconPath: "M22 12c0-5.523..." },
            { label: "Instagram", href: "#", iconPath: "M12.315 2c2.43 0..." },
            { label: "Twitter", href: "#", iconPath: "M8.29 20.251c7.547..." },
            { label: "GitHub", href: "#", iconPath: "M12 2C6.477 2..." },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:opacity-75"
            >
              <span className="sr-only">{social.label}</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={social.iconPath} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
