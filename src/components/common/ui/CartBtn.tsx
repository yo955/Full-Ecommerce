"use client";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export function CartBtn({
  count = 1,
  icon = <ShoppingCartIcon fontSize="small" />,
}) {
  return (
    <IconButton>
      {icon}
      <CartBadge badgeContent={count} color="error" overlap="circular" />
    </IconButton>
  );
}
