/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2s steps(15), blink 1s infinite',
      },
      keyframes: {
        typing: {
          from: {
            width: '10%'
          },
          to: {
            width: '100%'
          },
        },
        blink: {
          from: {
            'border-right-color': 'transparent'
          },
          to: {
            'border-right-color': 'white'
          },
        },
      }
    },
  },
  plugins: [],
}

