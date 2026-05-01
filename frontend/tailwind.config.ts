import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed', // orange-50
          100: '#ffedd5', // orange-100
          500: '#f97316', // orange-500
          600: '#ea580c', // orange-600
        },
        success: {
          50: '#f0fdf4', // green-50
          100: '#dcfce7', // green-100
          600: '#16a34a', // green-600
          700: '#15803d', // green-700
        },
        muted: {
          50: '#f9fafb', // gray-50
          100: '#f3f4f6', // gray-100
          500: '#6b7280', // gray-500
          900: '#111827', // gray-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // Used for "your fridge" italic
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;