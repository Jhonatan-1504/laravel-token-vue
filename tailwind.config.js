import formKitTailwind from '@formkit/themes/tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/js/vue/tailwind-theme.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    formKitTailwind
  ],
}

