const path = require('path');

const vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

// const example = process.env['EXAMPLE'].replace(/[\/]|\.\./g, '') || 'cone.js';

const filename = 'obj_file';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', filename),
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
