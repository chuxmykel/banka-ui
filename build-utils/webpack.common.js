const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(gif|png|jpe?g|svg)$/i, use: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@App': path.resolve(__dirname, '../', 'src/'),
      '@Actions': path.resolve(__dirname, '../', 'src/actions/'),
      '@Reducers': path.resolve(__dirname, '../', 'src/reducers/'),
      '@Components': path.resolve(__dirname, '../', 'src/components/'),
      '@Common': path.resolve(__dirname, '../', 'src/components/common/'),
      '@Layout': path.resolve(__dirname, '../', 'src/components/Layout/'),
      '@Pages': path.resolve(__dirname, '../', 'src/components/Pages/'),
      '@Utilities': path.resolve(__dirname, '../', 'src/utils/'),
      '@Images': path.resolve(__dirname, '../', 'src/images/'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    port: 9000,
  },
};
