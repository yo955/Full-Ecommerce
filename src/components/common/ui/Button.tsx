"use client";
import Button from "@mui/material/Button";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?:()=> void;
}

export default function CustomButton({
  children,
  className,
  type = "button",
  disabled = false,
  onClick

}: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="success"
      className={`!bg-button-danger-red   ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
