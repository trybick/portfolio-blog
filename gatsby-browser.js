// Add theme to code blocks. More themes here: https://github.com/PrismJS/prism-themes
require('prism-themes/themes/prism-nord.css');

// More fonts here: https://github.com/KyleAMathews/typefaces/tree/master/packages
exports.onInitialClientRender = () => {
  require('typeface-nunito');
};
