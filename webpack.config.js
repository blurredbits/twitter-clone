// Works - but not as good as it could be!

// module.exports = {
//   entry: "./app/assets/javascripts/frontend/main.jsx",
//
//   output: {
//     path: __dirname + "/app/assets/javascripts",
//     filename: "bundle.js"
//   },
//
//   module: {
//     loaders: [
//       { loader: "babel-loader",
//         test: /\.jsx$/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       },
//     ]
//   },
//
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//
// };

var webpack = require('webpack');

var appName = 'bundle';
var outputFile = appName + '.js';
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var WebpackDevServer = require('webpack-dev-server');

var host = '0.0.0.0';
var port = '9000';
var env = process.env.WEBPACK_ENV;
var plugins = [];

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true}));
  outputFile = appName + 'min.js';
} else {
  outputFile = appName + '.js';
}

var config = {
  entry: './app/assets/javascripts/frontend/main.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: outputFile,
    publicPath: __dirname + '/example'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        },
      },
      // {
      //   test: /(\.jsx|\.js)$/,
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: plugins
};

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './test',
    hot: true,
    debug: true
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}


module.exports = config;
