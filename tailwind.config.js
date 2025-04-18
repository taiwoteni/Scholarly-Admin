/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'media',
  theme: {
    extend: {
      colors:{
        purple:'#560677',
        "light-purple": '#b100cd',
        blue:'#628EFF',
        black: '#000000',
        background:'rgb(31,31,31)',
        tertiary:'#101010',
        secondary:'#9ca3af'
      },
      borderRadius:{
        circle: '50%',
        corner:'5%'
      },
      keyframes:{
        "shake":{
          "0%":{
            transform: `rotate(0deg)`
          },
          "33%":{
            transform: `rotate(45deg)`
          },
          "66%":{
            transform: `rotate(-45deg)`
          },
          "100%":{
            transform: `rotate(0deg)`
          },
          

        }
      },
      animation:{
        'bell-shake': "shake 0.3s ease 2s infinite both"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.clip-star': {// Default color
          clipPath: `polygon(
            50% 0%, 61% 35%, 98% 35%, 
            68% 57%, 79% 91%, 
            50% 70%, 
            21% 91%, 32% 57%, 
            2% 35%, 39% 35%
          )`,
        },
        '.clip-triangle': {// Default color
          clipPath: `polygon(50% 0%, 0% 100%, 100% 100%)`,
        },
        '.ease': {// Default color
          transitionTimingFunction:'ease',
        },
      });
    },
    function ({ addUtilities, theme }) {
      addUtilities({
        '*':{
          '--scholarly-scrollbar-color':theme('colors.tertiary')
        },
        '.purple-scrollbar':{
          '--scholarly-scrollbar-color':'#560677'
        },
        '.scholarly-scrollbar::-webkit-scrollbar': {
          width: '5px',
        },
        '.scholarly-scrollbar::-webkit-scrollbar-track': {
          background: 'transparent',
          'border-radius': '10px',
        },
        '.scholarly-scrollbar::-webkit-scrollbar-thumb': {
          background: 'var(--scholarly-scrollbar-color)',
          'border-radius': '10px',
        },
        '.scholarly-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: 'var(--scholarly-scrollbar-color)',
        },
        '.popup-modal':{
          'animation': 'var(--popup-anim) 1s ease forwards',
        },
        '.popup-modal.closed':{
          'animation': 'var(--popup-anim) 1s ease reverse forwards'
        },
        '.slide-down-anim':{
          '--popup-anim':'slide-down-anim'
        },
        '.popin-anim':{
          '--popup-anim':'pop-in-anim'
        },
        '.allow-discrete':{
          'transition-behaviour':'allow-discrete'
        },
        '.normal-behaviour':{
          'transition-behaviour':'normal'
        },

        // Fonts
        '.open-sans':{
          'font-family':"'Open Sans'"
        },
        '.dm-sans':{
          'font-family':'DM Sans'
        },
        '.raleway':{
          'font-family':'Raleway'
        },
        // Flex positions
        '.flex-center':{
          'justify-content':'center',
          'align-items':'center',
        }
      }, ['responsive', 'hover']);
    },
  ],
}

