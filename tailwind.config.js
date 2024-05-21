/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
  plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.drag-none': {
          '-webkit-user-drag': 'none', /* For WebKit browsers */
          'user-drag': 'none', /* For standard browsers */
          '-moz-user-drag': 'none',  /* Disable drag in Firefox */
          'user-select': 'none', /* Disable text selection for better UX */
          '-webkit-user-select': 'none', /* Disable text selection in WebKit browsers */
          '-moz-user-select': 'none', /* Disable text selection in Firefox */
          '-ms-user-select': 'none', /* Disable text selection in IE/Edge */
				}
			});
		})
	],
};
