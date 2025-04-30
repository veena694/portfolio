/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebf5ff',
          100: '#e1f0ff',
          200: '#c3e0ff',
          300: '#a4cfff',
          400: '#76b1ff',
          500: '#4892fe',
          600: '#3b82f6',
          700: '#2563eb',
          800: '#1d4ed8',
          900: '#1e40af',
          950: '#1e3a8a',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft-xl': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
      lineHeight: {
        'extra-tight': '1.1',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #ff0080, #7928ca, #2afadf)',
        'gradient-sunset': 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
        'gradient-aqua': 'linear-gradient(to right, #209cff, #68e0cf)',
        'gradient-neon': 'linear-gradient(to right, #f953c6, #b91d73)',
        'gradient-lime-blue': 'linear-gradient(to right, #a8ff78, #78ffd6)',
        'gradient-pastel-peach': 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    'gradient-pastel-mint': 'linear-gradient(135deg, #d4fc79, #96e6a1)',
    'gradient-pastel-sky': 'linear-gradient(135deg, #c2e9fb, #a1c4fd)',
    'gradient-pastel-sunset': 'linear-gradient(135deg, #f6d365, #fda085)',
    'gradient-pastel-lavender': 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
      },
    },
  },
  plugins: [],
};
