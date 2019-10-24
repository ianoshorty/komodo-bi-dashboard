const slsw = require('serverless-webpack');
const path = require('path');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [{ "aws-sdk": "commonjs aws-sdk" }],
  devtool: 'source-map',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};
