/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#4F46E5', light: '#6366F1', dark: '#3730A3' },
        accent:  { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
        warning: '#F59E0B',
        danger:  '#EF4444',
        background: '#F8FAFC',
      },
      fontFamily: {
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
};
