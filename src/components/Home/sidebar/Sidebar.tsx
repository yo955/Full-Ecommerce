"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
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
  { title: "Home & Lifestyle", href: " /home-lifestyle" },
  { title: "Medicine", href: "/medicine" },
  { title: "Sports & Outdoor", href: "/sports-outdoor" },
  { title: "Baby’s & Toys", href: "/babies-toys" },
  { title: "Groceries & Pets", href: "/groceries-pets" },
  { title: "Health & Beauty", href: "/health-beauty" },
  { title: "My Account", href: "/account" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }
      setOpen(open);
    };

  const handleToggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {Items.map((item) => (
          <SidebarItem
            key={item.title}
            item={item}
            openDropdowns={openDropdowns}
            handleToggleDropdown={handleToggleDropdown}
          />
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className=" custom-sm:!min-w-2">
        <VscLayoutSidebarLeft
          className={
            "text-3xl text-black custom-sm:text-[15px] custom-phone:text-[10px]"
          }
        />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default Sidebar;
