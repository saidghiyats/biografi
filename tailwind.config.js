module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('prettier-plugin-tailwindcss')],
};
