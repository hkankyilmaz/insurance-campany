/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "zap-human": ["zapHuman", "system-ui"],
        "avenir-normal": ["avenir", "system-ui"],
        "avenir-light": ["avenir-light", "system-ui"],
        "avenir-book": ["avenir-book", "system-ui"],
        "avenir-medium": ["avenir-medium", "system-ui"],
      },
    },
  },
  plugins: [],
}
