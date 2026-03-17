/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.35), 0 0 30px rgba(59,130,246,0.15)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 0 0, rgba(59,130,246,0.12), transparent 35%), radial-gradient(circle at 100% 0, rgba(59,130,246,0.10), transparent 40%), radial-gradient(circle at 0 100%, rgba(59,130,246,0.08), transparent 40%), radial-gradient(circle at 100% 100%, rgba(59,130,246,0.10), transparent 35%)',
      },
    },
  },
  plugins: [],
}
