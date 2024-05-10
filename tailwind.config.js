/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      textColor: {
        "emerald": "#86CB92",
        "mint": "#71B48D",
        "quartz": "#A4969B",
        "magnolia": "#FCF7FF"
      },
      backgroundColor: {
        "emerald": "#86CB92",
        "mint":"#71B48D",
        "quartz": "#A4969B",
        "magnolia": "#FCF7FF",
        "base_black":"#1a1b20",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
