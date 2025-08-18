import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary-red': '#DB4444',
  			'primary-black': '#000000',
  			'primary-white': '#FFFFFF',
  			'secondary-light-gray': '#F5F5F5',
  			'secondary-gray': '#E5E5E5',
  			'accent-gold': '#FFD700',
  			'accent-green': '#00FF00',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'dark-gray': '#333333',
  			'medium-gray': '#666666',
  			'light-gray': '#999999',
  			'background-light': '#F8F8F8',
  			'background-dark': '#1E1E1E',
  			'button-primary-blue': '#007BFF',
  			'button-success-green': '#28A745',
  			'button-danger-red': '#DC3545',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
                ...defaultTheme.screens,
  			'custom-large': {
  				min: '1024px',
  				max: '1180px'
  			},
  			'tab-large-screen': {
  				max: '1180px'
  			},
  			'custom-mid': {
  				max: '970px'
  			},
  			'custom-handling': {
  				max: '669px'
  			},
  			'custom-sm': {
  				max: '590px'
  			},
  			'custom-phone': {
  				max: '490px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
