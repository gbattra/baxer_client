const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports =  {
  mode: 'development',
  entry: './main.js',
  output: {
    path:'/',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: port,
    hot: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
       {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
             presets: ['env', 'react'],
             plugins: ['transform-class-properties']
          }
       },
       {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
          include: /flexboxgrid/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            }, {
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }
          ]
        }
    ]
  }
}
