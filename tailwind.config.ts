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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-0.5rem)' },
          '50%': { transform: 'translateY(0.5rem)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'ligth-gradient-1': 'linear-gradient( 103.3deg, rgba(252,225,208,1) 30%, rgba(255,173,214,1) 55.7%, rgba(162,186,245,1) 81.8% );',
        'ligth-gradient-2': 'radial-gradient( circle farthest-corner at -0.1% 1.8%, rgba(255,77,77,0.7) 0%, rgba(255,184,129,0.34) 100.2% );',
        'ligth-gradient-3': 'linear-gradient( 0deg, rgba(191,241,236,1) 22.3%, rgba(109,192,236,1) 84.1% );',
        'ligth-gradient-4': 'radial-gradient( circle farthest-corner at 10% 20%, rgba(222,168,248,1) 0%, rgba(168,222,248,1) 21.8%, rgba(189,250,205,1) 35.6%, rgba(243,250,189,1) 52.9%, rgba(250,227,189,1) 66.8%, rgba(248,172,172,1) 90%, rgba(254,211,252,1) 99.7% );',
        'ligth-gradient-5': 'radial-gradient( circle farthest-corner at 10% 20%, rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );',
        'ligth-gradient-6': 'linear-gradient( 110.5deg, rgba(248,196,249,0.66) 22.8%, rgba(253,122,4,0.15) 64.6% );',

        'dark-gradient-1': 'radial-gradient(circle farthest-corner at 14.2% 24%,  rgba(239,61,78,1) 0%, rgba(239,61,78,0.81) 51.8%, rgba(239,61,78,0.63) 84.6% );',
        'dark-gradient-2': 'linear-gradient(to right, #0575e6, #021b79);',
        'dark-gradient-3': 'linear-gradient(0deg,  rgba(9,154,151,1) 6.3%, rgba(21,205,168,1) 90.6% );',
        'dark-gradient-4': 'linear-gradient( 60deg,  rgba(216,27,96,1) 33.1%, rgba(237,107,154,1) 74.9% );',
        'dark-gradient-5': 'linear-gradient( 60deg,  rgba(0,104,155,1) 19.8%, rgba(0,173,239,1) 92.1% );',
        'dark-gradient-6': 'radial-gradient( circle farthest-corner at 80% 20%,  rgba(0,255,176,1) 0%, rgba(66,105,242,1) 90% );'
      },
      screens: {
        'mb': '450px',
      }
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
          },
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
