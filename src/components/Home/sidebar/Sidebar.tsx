"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SidebarItem from "@/components/Home/sidebar/SidebarItem";
import { Item } from "@/types/Item";
import { VscLayoutSidebarLeft } from "react-icons/vsc";

const Items: Item[] = [
  {
    title: "Woman’s Fashion",
    href: "/women-fashion",
    subItems: [
      { title: "Dresses", href: "/women-fashion/dresses" },
      { title: "Shoes", href: "/women-fashion/shoes" },
    ],
  },
  {
    title: "Men’s Fashion",
    href: "/mens-fashion",
    subItems: [
      { title: "Dresses", href: "/women-fashion/dresses" },
      { title: "Shoes", href: "/women-fashion/shoes" },
    ],
  },
  { title: "Electronics", href: "/electronics" },
  { title: "Home & Lifestyle", href: "/home-lifestyle" },
  { title: "Medicine", href: "/medicine" },
  { title: "Sports & Outdoor", href: "/sports-outdoor" },
  { title: "Baby’s & Toys", href: "/babies-toys" },
  { title: "Groceries & Pets", href: "/groceries-pets" },
  { title: "Health & Beauty", href: "/health-beauty" },
  { title: "My Account", href: "/account" },
];

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const handleToggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Sheet>
      {/* زرار الفتح */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="custom-sm:min-w-[32px]">
          <VscLayoutSidebarLeft className="text-3xl text-black custom-sm:text-[20px]" />
        </Button>
      </SheetTrigger>

      {/* محتوى السايدبار */}
      <SheetContent side="left" className="w-[250px] p-4">
        <div className="flex flex-col gap-2">
          {Items.map((item) => (
            <SidebarItem
              key={item.title}
              item={item}
              openDropdowns={openDropdowns}
              handleToggleDropdown={handleToggleDropdown}
            />
          ))}
        </div>
        <div className="border-t mt-4 pt-2 text-sm text-muted-foreground">
          {/* Divider بديل */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
