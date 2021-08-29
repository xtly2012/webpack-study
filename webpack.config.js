const path = require("path");
const HellPlugin = require("./plugins/HelloPlugin");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: path.resolve(__dirname, "./loaders/replaceLoader.js"),
        options: {
          value: 'http://www.baidu.com'
        }
      }
    }]
  },
  plugins: [
    new HellPlugin({}),
  ],
}