/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  colors: {
    primary: '#0F416D',
    white: '#FFFFFF',
    // green: '#059A3F',
    // dark: '#0F416D',
    // cream: '#FFFFEB',
  },
}
  },
  plugins: [],
};
