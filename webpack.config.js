const path = require('path');

module.exports = [
  {
    name: 'bundle',
    entry: path.resolve(__dirname, 'demo.js'),
    target: 'node',

    output: {
      // path: path.resolve(__dirname),
      filename: 'bundle.js'
    },

    resolve: {
      modules: [__dirname, 'motifs', 'node_modules']
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
        }
      ]
    }
  }
];
