"use client";

import { Link } from "@/i18n/routing";
import { ShoppingCart, Heart } from "lucide-react";

interface CartBtnProps {
  count?: number;
  icon?: "cart" | "wishlist";
  href?: string;
  className?: string;
}

export function CartBtn({
  count = 0,
  icon = "cart",
  href = "/",
  className = "",
}: CartBtnProps) {
  const Icon = icon === "cart" ? ShoppingCart : Heart;

  return (
    <Link href={href}>
      <div
        className={`relative p-2 rounded-full hover:bg-muted transition-colors duration-150 ${className}`}
      >
        <Icon className="w-5 h-5 text-foreground" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
