const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
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
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
}