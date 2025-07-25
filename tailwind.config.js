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
      colors: {
        "btnsecond" : "#457B9D",
        "btnprimary":"#E63946",
        "btnhoverp" : "#D62828"
      },
      textColor: {
        "textdark" : "#1D3557",
        "textmuted" :"#457B9D",
        // "textwhite" : "#F1FAEE",
        "textwhite" : "#FFFFFF",
        "text": "#1D3557",
        "links": "#E63946"
      },
      backgroundColor: {
        "base_black":"#1a1b20",
        "partialbg" : "#457b9d", //background 3/4
        "white": "#FFFFFF",
        "softblue": "#A8DADC",
        "softprimaryred": "#EAB1B5",
        "btnprimary":"#E63946",  //redish
        "btnsecond":"#457b9d", ///dark soft blue
        "btnhoverp": "#BB3131",
        // "#D62828",
        "btnhovers":"#2B5C75",
        "bluedark":"#1D3557"
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
