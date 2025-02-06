import type { Config } from "tailwindcss";

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
        "primary": "#fafafa",
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
    },
  },
  plugins: [],
} satisfies Config;
