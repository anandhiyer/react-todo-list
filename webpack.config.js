module.exports = {
  entry: ['./client/client.js'],
  devtool:'inline-source-map',
  output: {
      path: './dist',
      filename: 'bundle.js',
      publicPath: '/'
  },
    module:  {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react"]
            }
          }
        ]
    }
}
