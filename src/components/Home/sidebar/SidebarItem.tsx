"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { Item } from "@/types/Item";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronDown, ChevronUp } from "lucide-react";

const SidebarItem = ({
  item,
  openDropdowns,
  handleToggleDropdown,
}: {
  item: Item;
  openDropdowns: { [key: string]: boolean };
  handleToggleDropdown: (title: string) => void;
}) => {
  const isOpen = openDropdowns[item.title] ?? false;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {/* زر العنوان الرئيسي كرابط */}
        <Link
          href={item.href || "#"}
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors w-full"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm font-medium">{item.title}</span>
        </Link>

        {/* زر فتح القائمة الفرعية (السهم) */}
        {item.subItems && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleToggleDropdown(item.title)}
            className="ml-1"
          >
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* القائمة الفرعية */}
      {item.subItems && (
        <Collapsible open={isOpen} onOpenChange={() => handleToggleDropdown(item.title)}>
          <CollapsibleContent className="pl-6 space-y-1">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.href}
                className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {subItem.title}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
};

export default SidebarItem;
