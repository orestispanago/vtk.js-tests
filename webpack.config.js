const path = require('path');

const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

// const example = process.env['EXAMPLE'].replace(/[\/]|\.\./g, '') || 'cone.js';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ].concat(vtkRules),
  },
  resolve: {
    extensions: ['.js'],
    fallback: { "stream": false }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    hot: false,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true,
    },
  },
};
