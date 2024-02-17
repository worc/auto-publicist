const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  name: 'auto-publicist',

  mode: NODE_ENV,

  devtool: 'source-map',

  entry: {
    'auto-publicist': path.resolve(__dirname, 'index.js'),
  },

  output: {
    clean: true,
    path: path.resolve(__dirname, '.stxalq'),
    filename: 'static/[name].[contenthash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
          },
        },
      },
      {
        test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
            publicPath: 'fonts',
          }
        },
      },
      {
        test: /\.css$/,
        use:[{
          loader: MiniCssExtractPlugin.loader,
        },
          'css-loader',
        ]

      },
    ]
  },

  plugins: [
    new WebpackManifestPlugin({
      fileName: path.join(__dirname, '.stxalq/manifest/auto-publicist.json'),
    }),
    new BundleAnalyzerPlugin({
      logLevel: 'error',
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, `.bundle_analysis.html`),
      openAnalyzer: false,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/[name].css',
      chunkFilename: 'static/[id].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'views', to: 'views' },
      ]
    })
  ],
}
