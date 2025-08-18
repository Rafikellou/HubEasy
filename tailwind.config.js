/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          dark: '#1a1a1a',
          DEFAULT: '#333333',
          light: '#666666',
        },
        accent: {
          orange: '#ef4444', // red-500
          'orange-light': '#f87171', // red-400
          'orange-dark': '#dc2626', // red-600
        },
        gradient: {
          primary: {
            from: '#667eea',
            via: '#764ba2',
            to: '#f093fb',
          },
          modern: {
            from: '#4facfe',
            to: '#00f2fe',
          },
          sunset: {
            from: '#ff9a9e',
            via: '#fecfef',
            to: '#fecfef',
          },
          ocean: {
            from: '#667eea',
            to: '#764ba2',
          },
        },
        background: '#ffffff',
        foreground: '#1a1a1a',
        success: '#10B981',
        destructive: '#EF4444',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
