/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#10B981',
        accent: '#F59E0B',
        dark: '#1F2937',
        light: '#F9FAFB',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
        mono: ['var(--font-fira-code)'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) 1s 1 normal both',
        'blink': 'blink 1s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#2563EB' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'text-blue-600',
    'text-emerald-600',
    'text-amber-600',
    'bg-blue-100',
    'bg-emerald-100',
    'bg-amber-100',
    'text-blue-800',
    'text-emerald-800',
    'text-amber-800',
  ],
}
