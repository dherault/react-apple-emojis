const path = require('path')

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
  title: 'react-apple-emojis',
  styleguideDir: 'dist-docs',
  moduleAliases: {
    'react-apple-emojis': path.resolve(__dirname, 'src'),
  },
}
