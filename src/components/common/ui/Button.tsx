"use client";
import Button from "@mui/material/Button";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;

}

export default function CustomButton({
  children,
  className,
  type = "button",
  disabled = false,

}: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="success"
      className={`!bg-button-danger-red   ${className}`}
      type={type}
      disabled={disabled}
 
      onClick={() => {
        return console.log("clicked");
      }}
    >
      {children}
    </Button>
  );
}
