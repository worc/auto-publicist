const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  mode: NODE_ENV,

  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval',

  devServer: {
    contentBase: 'dist/',
    historyApiFallback: true,
  },

  entry: {
    main: path.resolve(__dirname, 'index.js'),
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
            name: '[name].[ext]',
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
    new HtmlWebpackPlugin({
      template: 'index.ejs',
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
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  output: {
    publicPath: '/',
  },
}
