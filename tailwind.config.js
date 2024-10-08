/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "/opendirectory-finder/*{html,js}" "./opendirectory-finder/style.css"],
  theme: {
    extend: {},
  },
  plugins: [],
};



npx tailwindcss -i ./opendirectory-finder/style.css -o ./opendirectory-finder/style2.css --watch