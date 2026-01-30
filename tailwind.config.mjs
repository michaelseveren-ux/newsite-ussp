/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f1f4',
          100: '#e1e3e8',
          200: '#b8bdca',
          300: '#8f97ae',
          400: '#6b7692',
          500: '#4a5675',
          600: '#37455e',
          700: '#2e3a54',
          800: '#252f4a',
          900: '#1C2841',
          950: '#141b2e',
        },
        accent: {
          50: '#fdf2f1',
          100: '#fce4e2',
          200: '#f9c9c5',
          300: '#f4a29b',
          400: '#ec756a',
          500: '#B8463B',
          600: '#a33d33',
          700: '#8a342b',
          800: '#702b24',
          900: '#5c231e',
        },
        gold: {
          50: '#fdf8ef',
          100: '#faf0d9',
          200: '#f5e0b3',
          300: '#eecf8a',
          400: '#e5b95c',
          500: '#D4A84B',
          600: '#bc8f3a',
          700: '#9b7230',
          800: '#7d5b29',
          900: '#664a23',
        },
        paper: '#F5F2EB',
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
