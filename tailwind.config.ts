import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scrollbar: ['rounded'],
      fontFamily: {
        'default': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xsm': '14px',
        'sm': '18px',
        'xl': '72px',
        'md': '42px'
      },
      colors: {
        'blue': '#23ADEB',
        'white': '#FFF',
        'black-txt': '#11181C',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      boxShadow: {
        'custom': '3px 3px 26px -8px rgba(35,173,235,0.5)'
      },
      transitionDuration: {
        'custom': '300ms'
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwindcss-filters'),
    function({ addBase, theme }: { addBase: any, theme: any }) {
      addBase({
        'html, body': { padding: 0, margin: 0, fontFamily: theme('fontFamily.default'),  },
        '*, *::before, *::after': { boxSizing: 'border-box' },
      });
    },
    nextui({
      themes: {
        light: {
          colors: {
            'text': '#637184',
            'border': '#dbdee2',
            'bg': '#ffffff',
            'active-tag': '#000',

            blue: {
              bg: "#CFFAFE",
              hover: "#ACF3FB",
              border: "#8CD9E6",
            },
            orange: {
              bg: "#FFEDD5",
              hover: "#FDD9B0",
              border: "#F1BB90",
            },
            green: {
              bg: "#DCFCE7",
              hover: "#C0F7D4",
              border: "#9DDFB5",
            },
            pink: {
              bg: "#FCE7F3",
              hover: "#FAD4EA",
              border: "#EFAFCE",
            },
            gray: {
              bg: "#F1F5F9",
              hover: "#E5EAF1",
              border: "#C1C8D2",
            },

          }
        },
        dark: {
          colors: {
            'text': '#A4ADB9',
            'border': '#1c2636',
            'bg': '#0F172A',
            'active-tag': '#FFF',
            blue: {
              bg: "#285F72",
              hover: "#3C798B",
              border: "#3494A9",
            },
            orange: {
              bg: "#894026",
              hover: "#9B5B3B",
              border: "#B86B3B",
            },
            green: {
              bg: "#286440",
              hover: "#377e53",
              border: "#309157",
            },
            pink: {
              bg: "#8F2D55",
              hover: "#9E496E",
              border: "#AE4172",
            },
            gray: {
              bg: "#25272E",
              hover: "#35383F",
              border: "#474A54",
            },
          }
        },
      },
    })
  ],
}
export default config
