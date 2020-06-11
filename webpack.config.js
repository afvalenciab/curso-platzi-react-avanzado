const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
    open: 'Google Chrome',
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      description: 'Con Petgram puedes encontrar fortos de animales domésticos',
      background_color: '#fff',
      theme_color: '#000',
      icons: [{ src: path.resolve('src/assets/icon.png'), sizes: [96, 128, 192, 256, 384, 512] }],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://petgram-server-afvalenciab.afvalenciab.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
};
