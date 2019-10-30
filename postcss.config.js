// const purgecss = require('@fullhuman/postcss-purgecss');
// const isDev = process.argv.indexOf('serve') !== -1

module.exports = {
  plugins: [require("tailwindcss")("tailwind.js"), require("autoprefixer")()]
};
