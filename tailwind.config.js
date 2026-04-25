/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          900: '#0B1220',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
          500: '#4B5563',
          400: '#6B7280',
          300: '#9CA3AF',
        },
        paper: '#FAFAF7',
        accent: {
          DEFAULT: '#0B3D2E',
          soft: '#E8F0EC',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
