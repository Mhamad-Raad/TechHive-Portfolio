/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#FBBF24',
          400: '#F59E0B',
          500: '#D97706',
          600: '#B45309',
        },
      },
      boxShadow: {
        gold: '0 0 0 3px rgba(245, 158, 11, 0.35)',
      },
      backgroundImage: {
        'techhive-radial':
          'radial-gradient(1200px 600px at 20% 10%, rgba(245,158,11,0.25), rgba(11,11,15,0.0))',
        'techhive-linear':
          'linear-gradient(135deg, #0B0B0F 0%, #111215 35%, #0B0B0F 60%, #F59E0B 120%)',
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        manrope: [
          'Manrope',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

