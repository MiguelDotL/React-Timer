var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      // -------- Main App Components --------//
      Nav: 'app/components/Nav.jsx',
      Main: 'app/components/Main.jsx',
      styles: 'app/styles/style.scss',
      jQuery: 'node_modules/jquery/dist/jquery.min.js',

      Clock: 'app/components/Clock.jsx',

      // -------- StopWatch Components --------//
      StopWatch: 'app/components/StopWatch.jsx',

      // -------- Timer Components --------//
      Timer: 'app/components/Timer.jsx',
      TimerForm: 'app/components/Timer/TimerForm.jsx',
      Controls: 'app/components/Controls.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
