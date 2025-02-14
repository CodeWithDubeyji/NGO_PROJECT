/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      }
    }
  },
  plugins: []
}
