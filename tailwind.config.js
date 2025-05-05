/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#eff6ff',
        secondary: '#bfdbfe',
        accent: '#2563eb',
        text: '#1e3a8a',
        'text-secondary': '#3b82f6',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e3a8a',
            h1: {
              color: '#1e3a8a',
            },
            h2: {
              color: '#1e3a8a',
            },
            h3: {
              color: '#1e3a8a',
            },
            strong: {
              color: '#1e3a8a',
            },
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};