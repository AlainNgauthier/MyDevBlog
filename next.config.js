const withImages = require('next-images')
module.exports = withImages({
  esModule: true
 });

// const withReactSvg = require('next-react-svg')
// const path = require('path')
// module.exports = withReactSvg({
//   include: path.resolve(__dirname, 'src/assets/svg'),
//   webpack(config, options) {
//     return config;
//   }
// });

module.exports = {
  reactStrictMode: true
}
