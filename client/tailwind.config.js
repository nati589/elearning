/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'light-purple': '#D2CCFB',
        'medium-purple': '#796BD4',
        'medium-purple-hover': '#754DA2',
        'dark-purple': '#53389E',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [],
}