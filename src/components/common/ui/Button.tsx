"use client";
import Button from "@mui/material/Button";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

export default function CustomButton({ children, className }: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="success"
      className={`!bg-button-danger-red   ${className}`}
    >
      {children}
    </Button>
  );
}
