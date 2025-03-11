import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "@/i18n/routing";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import React from "react";
import { Item } from "@/types/Item";

const SidebarItem = ({ item, openDropdowns, handleToggleDropdown }: {
  item: Item;
  openDropdowns: { [key: string]: boolean };
  handleToggleDropdown: (title: string) => void;
}) => (
  <>
    <ListItem disablePadding>
      {/* زر العنوان الرئيسي كرابط */}
      <ListItemButton component={item.href ? Link : "div"} href={item.href}>
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>

      {/* زر فتح القائمة الفرعية (السهم) */}
      {item.subItems && (
        <ListItemButton onClick={() => handleToggleDropdown(item.title)} sx={{ width: "auto" }}>
          {openDropdowns[item.title] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      )}
    </ListItem>

    {/* القائمة الفرعية */}
    {item.subItems && (
      <Collapse in={openDropdowns[item.title]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.subItems.map((subItem) => (
            <ListItem key={subItem.title} disablePadding>
              <ListItemButton component={Link} href={subItem.href} sx={{ pl: 4 }}>
                <ListItemText primary={subItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    )}
  </>
);

export default SidebarItem;
