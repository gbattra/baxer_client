var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 3000,
      hot: true,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
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
module.exports = config;
