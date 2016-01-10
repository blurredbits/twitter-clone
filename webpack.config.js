module.exports = {
  entry: "./app/assets/javascripts/frontend/main.jsx",

  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { loader: "babel-loader",
        test: /\.jsx$/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

};
