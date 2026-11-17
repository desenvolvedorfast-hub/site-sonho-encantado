/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#075F36',
          dark: '#123B2B',
          paper: '#F8F7F0',
          cream: '#F1EFE3',
          yellow: '#EDC84B',
          blue: '#62B9D5',
          'blue-soft': '#E6F4F9',
          ink: '#1E3028',
          muted: '#3B5046',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        editorial: '1.25rem',
      },
      boxShadow: {
        editorial: '0 14px 36px -18px rgba(18, 59, 43, 0.16)',
        card: '0 8px 24px -12px rgba(18, 59, 43, 0.12)',
      },
    },
  },
  plugins: [],
};
