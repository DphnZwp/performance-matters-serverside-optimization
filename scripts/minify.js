const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
// File system
const fs = require('fs')

// Minify css
fs.readFile('./public/css/style.css', async (err, data) => {
  const output = await postcss([cssnano, autoprefixer]).process(data);
  const minifiedCss = output.css;

  fs.writeFile('./public/css/style.min.css', minifiedCss, err => {
    if (err) {
      console.log(err);
    }
  })
});

