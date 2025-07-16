/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1B365D',
        'sage-green': '#7A9B7F',
        'warm-gold': '#D4AF37',
        'pearl-gray': '#F5F5F5',
        'snow-white': '#FAFAFA',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'button': '9999px',
        'card': '1.25rem',
      },
      boxShadow: {
        'button': '0 2px 8px 0 rgba(27,54,93,0.08)',
        'card': '0 4px 24px 0 rgba(27,54,93,0.08)',
      },
      spacing: {
        'section': '6rem',
      },
      maxWidth: {
        'container': '72rem',
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '1.1' }],
        'heading-2': ['2rem', { lineHeight: '1.15' }],
        'heading-3': ['1.25rem', { lineHeight: '1.2' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'quote': ['1.125rem', { lineHeight: '1.5' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
