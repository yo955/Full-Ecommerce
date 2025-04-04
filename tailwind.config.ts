import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "primary-red": "#DB4444",
        "primary-black": "#000000",
        "primary-white": "#FFFFFF",

        // Secondary Colors
        "secondary-light-gray": "#F5F5F5",
        "secondary-gray": "#E5E5E5",

        // Accent Colors
        "accent-gold": "#FFD700",
        "accent-green": "#00FF00",

        // Text Colors
        primary: "#fafafa",
        "dark-gray": "#333333",
        "medium-gray": "#666666",
        "light-gray": "#999999",

        // Background Colors
        "background-light": "#F8F8F8",
        "background-dark": "#1E1E1E",

        // Button Colors
        "button-primary-blue": "#007BFF",
        "button-success-green": "#28A745",
        "button-danger-red": "#DC3545",
      },
      screens: {
        ...defaultTheme.screens, // تأكد من وراثة الشاشات الافتراضية
        "custom-large": { min: "1024px", max: "1180px" },
        "tab-large-screen":{ max:"1180px"},
        "custom-mid": { min: "669px", max: "910px" },
        "custom-handling":{min: "600px", max: "668px" },
        "custom-sm" :{max:"590px"},
        "custom-phone" :{max:"490px"}
      },
    },
  },
  plugins: [],
} satisfies Config;
