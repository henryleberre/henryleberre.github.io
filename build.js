const fs = require('fs');
const { minify } = require('html-minifier-terser');

const htmlFilePath = 'src/index.html';
const minifiedHtmlFilePath = 'dist/index.html';

fs.readFile(htmlFilePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  try {
    const minifiedHtml = await minify(data, {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    });

    fs.writeFile(minifiedHtmlFilePath, minifiedHtml, (err) => {
      if (err) {
        console.error('Error writing minified HTML file:', err);
        return;
      }
      console.log('HTML minified successfully.');
    });
  } catch (minifyError) {
    console.error('Error minifying HTML:', minifyError);
  }
});