module.exports = {
  content: [
    "./content/**/*.{vue,js,ts,jsx,tsx,md}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}