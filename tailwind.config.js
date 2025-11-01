/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  colors: {
  //  nkfTeal: '#00A6B4',
  //  nkfPink: '#C93A97',

 nkfTeal: 'rgb(19, 146, 152)',        nkfPink: '#C63697',
  },
}
  },
  plugins: [],
};
