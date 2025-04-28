/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0effe',
          100: '#e2ddfd',
          200: '#c5bafb',
          300: '#a997f9',
          400: '#8c74f7',
          500: '#6C63FF', // Primary
          600: '#5a52d9',
          700: '#4841b3',
          800: '#36318d',
          900: '#242167',
        },
        accent: {
          50: '#e7fbf8',
          100: '#d0f7f1',
          200: '#a0efe3',
          300: '#71e7d4',
          400: '#2DD4BF', // Accent
          500: '#1bb8a5',
          600: '#159385',
          700: '#0f7065',
          800: '#084c45',
          900: '#042825',
        },
        dark: {
          100: '#d5d5db',
          200: '#acabb7',
          300: '#828093',
          400: '#59566f',
          500: '#302c4b',
          600: '#28243f',
          700: '#201c33',
          800: '#181427',
          900: '#0c0c1b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};