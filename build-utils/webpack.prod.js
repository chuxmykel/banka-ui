const { DefinePlugin } = require('webpack');
const { config } = require('dotenv');

config();

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ],
};
