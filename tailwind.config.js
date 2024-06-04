module.exports = {
  content: ['./**/*.html'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
